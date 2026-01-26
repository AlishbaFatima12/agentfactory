"""
Official OpenAI ChatKit Server for Interactive Study Mode

Uses the official openai-chatkit Python SDK with ChatKitServer.
Self-hosted ChatKit implementation for book-grounded AI tutoring.

Reference: https://github.com/openai/openai-chatkit-starter-app
"""

import os
import glob
from pathlib import Path
from typing import AsyncIterator

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from agents import Agent
from chatkit.memory import MemoryStore
from chatkit.server import ChatKitServer
from chatkit.types import ThreadStreamEvent
from chatkit.agents import AgentContext, convert_items_for_agents, AgentRunner

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
    
    # Try direct paths
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

    # Try numbered prefix matching
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
    for line in content.split("
"):
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
    return "
".join(f"--- {r['title']} ---
{r['content']}" for r in results[:3])


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
        full = f"CURRENT: {title}
{content[:6000]}

RELATED:
{related}"
        instructions = ASK_PROMPT.format(content=full)
    
    return Agent(name="study_tutor", instructions=instructions, model=MODEL)


# =============================================================================
# ChatKit Server
# =============================================================================

class StudyModeChatServer(ChatKitServer):
    """Official ChatKit server for Study Mode."""

    def __init__(self):
        self.store = MemoryStore()

    async def respond(self, *, thread_id: str, message: str, context: dict | None = None) -> AsyncIterator[ThreadStreamEvent]:
        lesson_path = (context or {}).get("lesson_path", "")
        mode = (context or {}).get("mode", "teach")
        
        content, title = load_lesson_content(lesson_path)
        agent = create_agent(title, content, mode)
        
        recent = await self.store.get_items(thread_id=thread_id, limit=MAX_RECENT_ITEMS)
        items = convert_items_for_agents(list(reversed(recent)))
        items.append({"role": "user", "content": message})
        
        ctx = AgentContext(thread_id=thread_id, metadata={"title": title, "mode": mode}, store=self.store)
        runner = AgentRunner(agent, context=ctx)
        
        async for event in runner.stream(items):
            yield event


chatkit_server = StudyModeChatServer()


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

# Mount ChatKit at /chatkit
app.mount("/chatkit", chatkit_server.as_asgi())


if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", "8000"))
    print(f"
=== Official ChatKit Server v3.0 ===")
    print(f"ChatKit: http://localhost:{port}/chatkit")
    print(f"Health:  http://localhost:{port}/health
")
    uvicorn.run(app, host="0.0.0.0", port=port)
