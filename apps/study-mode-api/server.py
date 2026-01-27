"""
Official OpenAI ChatKit Server for Interactive Study Mode

Uses the official openai-chatkit Python SDK with ChatKitServer.
Self-hosted ChatKit implementation for book-grounded AI tutoring.

Reference: https://openai.github.io/chatkit-python/
"""

import os
import glob
import uuid
import json
from pathlib import Path
from typing import AsyncIterator
from collections import defaultdict

from dotenv import load_dotenv
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, StreamingResponse
from pydantic import BaseModel

from agents import Agent, Runner
from chatkit.server import ChatKitServer, StreamingResult
from chatkit.store import Store, Page
from chatkit.types import (
    ThreadMetadata,
    ThreadItem,
    ThreadStreamEvent,
    UserMessageItem,
)
from chatkit.agents import (
    AgentContext,
    simple_to_agent_input,
    stream_agent_response,
)

load_dotenv()

# =============================================================================
# Configuration
# =============================================================================

PROJECT_ROOT = Path(__file__).parent.parent.parent
CONTENT_BASE_PATH = os.getenv(
    "CONTENT_BASE_PATH",
    str(PROJECT_ROOT / "apps" / "learn-app" / "docs")
)
MAX_RECENT_ITEMS = 30
MODEL = "gpt-4o-mini"

print(f"Content base path: {CONTENT_BASE_PATH}")


# =============================================================================
# In-Memory Store Implementation
# =============================================================================

class Attachment:
    """Simple attachment placeholder."""
    def __init__(self, id: str):
        self.id = id


class InMemoryStore(Store[dict]):
    """
    Simple in-memory store for development.
    Conversations persist while the process is running.
    """

    def __init__(self):
        self._threads: dict[str, ThreadMetadata] = {}
        self._items: dict[str, list[ThreadItem]] = defaultdict(list)
        self._attachments: dict[str, Attachment] = {}

    async def load_thread(self, thread_id: str, context: dict) -> ThreadMetadata:
        if thread_id not in self._threads:
            thread = ThreadMetadata(id=thread_id, title="Study Session")
            self._threads[thread_id] = thread
        return self._threads[thread_id]

    async def save_thread(self, thread: ThreadMetadata, context: dict) -> None:
        self._threads[thread.id] = thread

    async def load_thread_items(
        self,
        thread_id: str,
        after: str | None,
        limit: int,
        order: str,
        context: dict,
    ) -> Page[ThreadItem]:
        items = self._items.get(thread_id, [])
        if after:
            idx = next((i for i, item in enumerate(items) if item.id == after), -1)
            items = items[idx + 1:] if idx >= 0 else items
        if order == "desc":
            items = list(reversed(items))
        items = items[:limit]
        return Page(data=items, has_more=False)

    async def add_thread_item(self, thread_id: str, item: ThreadItem, context: dict) -> None:
        self._items[thread_id].append(item)

    async def save_item(self, thread_id: str, item: ThreadItem, context: dict) -> None:
        items = self._items[thread_id]
        for i, existing in enumerate(items):
            if existing.id == item.id:
                items[i] = item
                return
        items.append(item)

    async def load_item(self, thread_id: str, item_id: str, context: dict) -> ThreadItem:
        for item in self._items.get(thread_id, []):
            if item.id == item_id:
                return item
        raise KeyError(f"Item {item_id} not found")

    async def delete_thread(self, thread_id: str, context: dict) -> None:
        self._threads.pop(thread_id, None)
        self._items.pop(thread_id, None)

    async def delete_thread_item(self, thread_id: str, item_id: str, context: dict) -> None:
        items = self._items.get(thread_id, [])
        self._items[thread_id] = [i for i in items if i.id != item_id]

    async def load_threads(self, limit: int, after: str | None, order: str, context: dict) -> Page[ThreadMetadata]:
        threads = list(self._threads.values())
        if order == "desc":
            threads = list(reversed(threads))
        return Page(data=threads[:limit], has_more=False)

    async def save_attachment(self, attachment: Attachment, context: dict) -> None:
        self._attachments[attachment.id] = attachment

    async def load_attachment(self, attachment_id: str, context: dict) -> Attachment:
        return self._attachments.get(attachment_id)

    async def delete_attachment(self, attachment_id: str, context: dict) -> None:
        self._attachments.pop(attachment_id, None)


# =============================================================================
# Book Content Loader
# =============================================================================

def load_lesson_content(lesson_path: str) -> tuple[str, str]:
    """Load lesson content from filesystem."""
    if not lesson_path:
        return "", "Unknown Page"

    clean_path = lesson_path.strip("/")
    if clean_path.startswith("docs/"):
        clean_path = clean_path[5:]

    segments = clean_path.split("/")

    for ext in [".md", ".mdx"]:
        direct = Path(CONTENT_BASE_PATH) / f"{clean_path}{ext}"
        if direct.exists():
            content = direct.read_text(encoding="utf-8")
            return content, extract_title(content, clean_path)

    for name in ["index.md", "README.md"]:
        direct = Path(CONTENT_BASE_PATH) / clean_path / name
        if direct.exists():
            content = direct.read_text(encoding="utf-8")
            return content, extract_title(content, clean_path)

    current = Path(CONTENT_BASE_PATH)
    for segment in segments:
        exact = current / segment
        if exact.exists():
            current = exact
            continue
        matches = list(current.glob(f"[0-9][0-9]-{segment}"))
        if matches:
            current = matches[0]
            continue
        matches = [m for m in current.glob(f"*{segment}*") if m.is_dir() or m.suffix in [".md", ".mdx"]]
        if matches:
            current = matches[0]
            continue
        break

    for candidate in [current, current / "README.md", current / "index.md", Path(str(current) + ".md")]:
        if candidate and candidate.exists() and candidate.is_file():
            content = candidate.read_text(encoding="utf-8")
            return content, extract_title(content, clean_path)

    return "", f"Page: {clean_path}"


def extract_title(content: str, fallback: str) -> str:
    """Extract title from markdown."""
    for line in content.split("\n"):
        if line.startswith("title:"):
            return line.replace("title:", "").strip().strip('"')
        if line.startswith("# "):
            return line[2:].strip()
    return fallback.split("/")[-1].replace("-", " ").title()


def search_book_content(query: str) -> str:
    """Search book for relevant content."""
    results = []
    terms = query.lower().split()

    for fp in glob.glob(str(Path(CONTENT_BASE_PATH) / "**" / "*.md"), recursive=True):
        try:
            content = Path(fp).read_text(encoding="utf-8")
            score = sum(1 for t in terms if t in content.lower())
            if score > 0:
                rel = Path(fp).relative_to(CONTENT_BASE_PATH)
                results.append({"score": score, "title": extract_title(content, str(rel)), "content": content[:3000]})
        except:
            pass

    results.sort(key=lambda x: x["score"], reverse=True)
    return "\n".join(f"--- {r['title']} ---\n{r['content']}" for r in results[:3])


# =============================================================================
# Agent Templates
# =============================================================================

TEACH_PROMPT = """You are a FRIENDLY TUTOR for the AgentFactory book using Socratic method.

PAGE: {title}
---
{content}
---

RULES:
1. EXPLAIN one concept (2-3 sentences)
2. ASK ONE checking question
3. Wait for response, then continue
4. Use bold for key terms
5. Be warm and encouraging
6. Stay focused on page content"""

ASK_PROMPT = """You are a SEARCH ENGINE for the AgentFactory book.

{content}

RULES:
- Give direct answers in 1-3 sentences
- NO "Great question!"
- NO follow-up questions
- Just answer and STOP"""


def create_agent(title: str, content: str, mode: str) -> Agent:
    """Create book-grounded agent."""
    if mode == "teach":
        instructions = TEACH_PROMPT.format(title=title, content=content[:8000])
    else:
        related = search_book_content(content[:500])
        full = f"CURRENT: {title}\n{content[:6000]}\n\nRELATED:\n{related}"
        instructions = ASK_PROMPT.format(content=full)

    return Agent(name="study_tutor", instructions=instructions, model=MODEL)


# =============================================================================
# ChatKit Server Implementation
# =============================================================================

class StudyModeChatServer(ChatKitServer[dict]):
    """Official ChatKit server for Study Mode."""

    def __init__(self):
        self._store = InMemoryStore()
        super().__init__(store=self._store)

    async def respond(
        self,
        thread: ThreadMetadata,
        input_user_message: UserMessageItem | None,
        context: dict,
    ) -> AsyncIterator[ThreadStreamEvent]:
        """Stream response events for a user message."""
        lesson_path = context.get("lesson_path", "") if context else ""
        mode = context.get("mode", "teach") if context else "teach"

        content, title = load_lesson_content(lesson_path)
        agent = create_agent(title, content, mode)

        items_page = await self._store.load_thread_items(
            thread.id, after=None, limit=MAX_RECENT_ITEMS, order="desc", context=context
        )
        items = list(reversed(items_page.data))

        input_items = await simple_to_agent_input(items)

        agent_context = AgentContext(
            thread=thread,
            store=self._store,
            request_context=context,
        )

        result = Runner.run_streamed(agent, input_items, context=agent_context)

        async for event in stream_agent_response(agent_context, result):
            yield event


# Create the ChatKit server instance
chatkit_server = StudyModeChatServer()


# =============================================================================
# Session Management (for self-hosted ChatKit)
# =============================================================================

sessions: dict[str, dict] = {}


class SessionRequest(BaseModel):
    lesson_path: str = ""
    mode: str = "teach"


# =============================================================================
# FastAPI App
# =============================================================================

app = FastAPI(title="Study Mode ChatKit", version="3.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
async def health():
    return {"status": "ok", "version": "3.0.0", "integration": "Official OpenAI ChatKit"}


@app.post("/api/chatkit/session")
async def create_session(request: SessionRequest):
    """Create a ChatKit session and return client_secret."""
    session_id = f"sess_{uuid.uuid4().hex[:16]}"
    client_secret = f"cs_{uuid.uuid4().hex}"

    sessions[client_secret] = {
        "session_id": session_id,
        "lesson_path": request.lesson_path,
        "mode": request.mode,
    }

    return {"client_secret": client_secret, "session_id": session_id}


# Suggestions endpoint (must be before catch-all)
@app.get("/chatkit/suggestions")
async def get_suggestions(mode: str = "teach", lesson_path: str = ""):
    """Return dynamic suggestions based on lesson content."""
    content, title = load_lesson_content(lesson_path)

    if mode == "teach":
        if content:
            suggestions = [
                f"What is {title} about?",
                "Explain the key concepts",
                "Give me an example"
            ]
        else:
            suggestions = [
                "What topics are covered here?",
                "Explain the main idea",
                "How does this work?"
            ]
    else:
        suggestions = [
            "Quick summary",
            "Key takeaways",
            "Main concepts"
        ]

    return {"suggestions": suggestions}


# ChatKit API routes
@app.api_route("/chatkit/{path:path}", methods=["GET", "POST", "PUT", "DELETE"])
async def chatkit_handler(request: Request, path: str):
    """Forward all ChatKit requests to the ChatKitServer."""
    # Extract context from query parameters
    context = {
        "mode": request.query_params.get("mode", "teach"),
        "lesson_path": request.query_params.get("lesson_path", ""),
    }

    # Get request body
    body = await request.body()

    # Process through ChatKit server
    result = await chatkit_server.process(body, context)

    if isinstance(result, StreamingResult):
        # Streaming response - return the result directly as SSE
        return StreamingResponse(result, media_type="text/event-stream")
    else:
        # Non-streaming response
        from starlette.responses import Response
        return Response(content=result.json, media_type="application/json")


if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", "8000"))
    print(f"\n=== Official ChatKit Server v3.0 ===")
    print(f"Session: http://localhost:{port}/api/chatkit/session")
    print(f"ChatKit: http://localhost:{port}/chatkit")
    print(f"Health:  http://localhost:{port}/health\n")
    uvicorn.run(app, host="0.0.0.0", port=port)
