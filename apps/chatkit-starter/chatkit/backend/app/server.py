"""
ChatKit server for Interactive Study Mode - Book-Grounded AI Tutoring
"""

from __future__ import annotations

import os
import glob
from pathlib import Path
from typing import Any, AsyncIterator

from agents import Runner, Agent
from chatkit.agents import AgentContext, simple_to_agent_input, stream_agent_response
from chatkit.server import ChatKitServer
from chatkit.types import ThreadMetadata, ThreadStreamEvent, UserMessageItem

from .memory_store import MemoryStore


MAX_RECENT_ITEMS = 30
MODEL = "gpt-4o-mini"

PROJECT_ROOT = Path(__file__).parent.parent.parent.parent.parent.parent
CONTENT_BASE_PATH = os.getenv(
    "CONTENT_BASE_PATH",
    str(PROJECT_ROOT / "apps" / "learn-app" / "docs")
)

print(f"Content base path: {CONTENT_BASE_PATH}")


def load_lesson_content(lesson_path: str) -> tuple[str, str]:
    if not lesson_path:
        return "", "AgentFactory Book"

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
    for line in content.split("\n"):
        if line.startswith("title:"):
            return line.replace("title:", "").strip().strip('"')
        if line.startswith("# "):
            return line[2:].strip()
    return fallback.split("/")[-1].replace("-", " ").title()


def generate_suggestions(content: str, title: str, mode: str) -> list[str]:
    """Generate 2 dynamic suggestions based on the actual page title and content."""
    # Clean up the title to get the topic
    topic = title
    for prefix in ["Chapter", "Lesson", "Part", ":"]:
        topic = topic.replace(prefix, "")
    # Remove numbers at start
    topic = topic.lstrip("0123456789.- ").strip()

    # Extract key concept from title (first meaningful phrase)
    # Handle titles like "Operators, Keywords, and Variables" -> "Operators"
    first_concept = topic.split(",")[0].split(" and ")[0].split(" - ")[0].strip()

    # Limit length but keep complete words
    if len(first_concept) > 35:
        first_concept = first_concept[:35].rsplit(" ", 1)[0] + "..."

    # Fallback if concept is empty
    if not first_concept:
        first_concept = "this topic"

    print(f"[Suggestions] title='{title}', topic='{topic}', concept='{first_concept}', mode='{mode}'")

    if mode == "teach":
        return [f"Explain {first_concept}", f"Show {first_concept} example"]
    else:
        return [f"What is {first_concept}?", f"Key points of {first_concept}"]


def search_book_content(query: str) -> str:
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


TEACH_PROMPT = """You are a FRIENDLY TUTOR for the AgentFactory book using Socratic method.

PAGE: {title}
---
{content}
---

RULES:
1. EXPLAIN one concept (2-3 sentences)
2. ASK ONE checking question
3. Wait for response, then continue
4. Use **bold** for key terms
5. Be warm and encouraging
6. Stay focused on page content

Start by greeting the student and introducing the main topic of this page."""

ASK_PROMPT = """You are a KNOWLEDGE BASE for the AgentFactory book.

CURRENT PAGE: {title}
{current_content}

RELATED CONTENT FROM BOOK:
{related_content}

RULES:
- Give direct, complete answers (1-5 sentences)
- NO follow-up questions
- Search across ALL provided content to find the answer
- If listing items (like axioms), list ALL of them
- Reference specific chapters/sections when relevant
- Only say "not covered" if truly not in any content above"""


def create_agent(title: str, content: str, mode: str, user_query: str = "") -> Agent:
    if mode == "teach":
        instructions = TEACH_PROMPT.format(title=title, content=content[:8000])
    else:
        # For ASK mode, search the book using the user's actual query
        search_terms = user_query if user_query else title
        related = search_book_content(search_terms)
        instructions = ASK_PROMPT.format(
            title=title,
            current_content=content[:4000],
            related_content=related
        )

    return Agent(
        name="study_tutor",
        instructions=instructions,
        model=MODEL,
    )


class StudyModeChatServer(ChatKitServer[dict[str, Any]]):

    def __init__(self) -> None:
        self.store: MemoryStore = MemoryStore()
        super().__init__(self.store)

    async def respond(
        self,
        thread: ThreadMetadata,
        item: UserMessageItem | None,
        context: dict[str, Any],
    ) -> AsyncIterator[ThreadStreamEvent]:
        lesson_path = ""
        mode = "teach"

        if context:
            request = context.get("request")
            if request:
                lesson_path = request.query_params.get("lesson_path", "") if hasattr(request, "query_params") else ""
                mode = request.query_params.get("mode", "teach") if hasattr(request, "query_params") else "teach"

        content, title = load_lesson_content(lesson_path)

        # Extract user's query from the latest message for better search
        user_query = ""
        if item and hasattr(item, 'content'):
            for part in item.content:
                if hasattr(part, 'text'):
                    user_query = part.text
                    break

        agent = create_agent(title, content, mode, user_query)

        items_page = await self.store.load_thread_items(
            thread.id,
            after=None,
            limit=MAX_RECENT_ITEMS,
            order="desc",
            context=context,
        )
        items = list(reversed(items_page.data))
        agent_input = await simple_to_agent_input(items)

        agent_context = AgentContext(
            thread=thread,
            store=self.store,
            request_context=context,
        )

        result = Runner.run_streamed(
            agent,
            agent_input,
            context=agent_context,
        )

        async for event in stream_agent_response(agent_context, result):
            yield event
