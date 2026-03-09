"""
Lesson content loading with GitHub fetch and Redis caching.

Features:
- Fetches content from GitHub raw URLs with authentication
- Redis caching with 30-day TTL (invalidated on git push via GitHub Action)
- Graceful degradation if Redis unavailable
- Support for .md and .mdx files

Cache invalidation:
- On git push to main, GitHub Action calls /admin/invalidate-cache endpoint
- Invalidates only changed lesson paths
"""

import logging
import os
from pathlib import Path

import httpx

from api_infra.core.redis_cache import cache_response, safe_redis_get

from ..config import settings


def _find_project_root() -> Path | None:
    """Find the project root by searching for marker files.

    Searches upward from current file for .git directory or pnpm-workspace.yaml
    which indicates the monorepo root.

    Returns:
        Path to project root, or None if not found
    """
    current = Path(__file__).resolve().parent

    # Search up to 10 levels to prevent infinite loop if markers not found
    for _ in range(10):
        # Check for monorepo markers
        if (current / ".git").exists() or (current / "pnpm-workspace.yaml").exists():
            return current
        parent = current.parent
        if parent == current:  # Reached filesystem root
            break
        current = parent

    return None


def _get_local_docs_path() -> Path | None:
    """Get local docs path for development fallback.

    Checks LOCAL_DOCS_PATH env var first, then searches for project root.

    Returns:
        Path to docs directory, or None if not available
    """
    # Environment variable override (useful for containers/testing)
    env_path = os.getenv("LOCAL_DOCS_PATH")
    if env_path:
        path = Path(env_path)
        if path.exists():
            return path

    # Find project root and construct docs path
    root = _find_project_root()
    if root:
        docs_path = root / "apps" / "learn-app" / "docs"
        if docs_path.exists():
            return docs_path

    return None


# Lazy-initialized local docs path
LOCAL_DOCS_PATH = _get_local_docs_path()

logger = logging.getLogger(__name__)

# Cache TTL: 30 days (invalidated via GitHub Action on push)
CONTENT_CACHE_TTL = settings.content_cache_ttl


def extract_title(content: str, fallback: str) -> str:
    """Extract title from markdown content."""
    for line in content.split("\n"):
        if line.startswith("title:"):
            return line.replace("title:", "").strip().strip('"').strip("'")
        if line.startswith("# "):
            return line[2:].strip()
    return fallback.split("/")[-1].replace("-", " ").title()


async def fetch_from_github(lesson_path: str) -> tuple[str, bool]:
    """
    Fetch lesson content from GitHub with authenticated requests.

    GitHub API allows 5,000 requests/hour with token (60 without).

    Args:
        lesson_path: Path to the lesson (e.g., "01-intro/01-welcome.md")

    Returns:
        Tuple of (content, success)
    """
    if not lesson_path:
        return "", False

    # Clean the path
    clean_path = lesson_path.strip("/")
    if clean_path.startswith("docs/"):
        clean_path = f"apps/learn-app/{clean_path}"
    elif not clean_path.startswith("apps/"):
        clean_path = f"apps/learn-app/docs/{clean_path}"

    # Try both .md and .mdx extensions
    extensions = [""]
    if not clean_path.endswith((".md", ".mdx")):
        extensions = [".md", ".mdx", "/index.md", "/README.md"]

    for ext in extensions:
        url = f"https://raw.githubusercontent.com/{settings.github_repo}/main/{clean_path}{ext}"

        try:
            async with httpx.AsyncClient() as client:
                headers = {}
                if settings.github_token:
                    headers["Authorization"] = f"token {settings.github_token}"

                response = await client.get(url, headers=headers, timeout=10.0)

                if response.status_code == 200:
                    logger.debug(f"Fetched content from GitHub: {url}")
                    return response.text, True

        except Exception as e:
            logger.warning(f"Failed to fetch from GitHub {url}: {e}")
            continue

    # Fallback: Try local file system (for development)
    if LOCAL_DOCS_PATH is not None:
        for ext in extensions if extensions != [""] else [".md", ".mdx"]:
            local_path = LOCAL_DOCS_PATH / f"{lesson_path.strip('/')}{ext}"
            if local_path.exists():
                try:
                    content = local_path.read_text(encoding="utf-8")
                    logger.info(f"Loaded content from local file: {local_path}")
                    return content, True
                except Exception as e:
                    logger.warning(f"Failed to read local file {local_path}: {e}")
                    continue

    return "", False


@cache_response(ttl=CONTENT_CACHE_TTL)
async def load_lesson_content(lesson_path: str) -> dict:
    """
    Load lesson content with Redis caching.

    Cache key is based on lesson_path. Cache TTL is 30 days.
    Second request for same lesson should be <50ms (cache hit).

    Args:
        lesson_path: Path to the lesson (e.g., "01-foundations/01-intro")

    Returns:
        Dict with 'content', 'title', and 'cached' fields
    """
    if not lesson_path:
        return {
            "content": "",
            "title": "Unknown Page",
            "cached": False,
        }

    # Try to get from cache first (handled by decorator)
    # If not cached, fetch from GitHub
    content, success = await fetch_from_github(lesson_path)

    if success:
        title = extract_title(content, lesson_path)
        return {
            "content": content,
            "title": title,
            "cached": False,  # Will be True on subsequent cached requests
        }

    # Create a readable title from the lesson path
    # e.g., "thesis" -> "Thesis", "ai-agents-intro" -> "AI Agents Intro"
    readable_title = lesson_path.split("/")[-1]  # Get last part of path
    readable_title = readable_title.replace("-", " ").replace("_", " ")
    readable_title = readable_title.title()  # Capitalize each word

    return {
        "content": "",
        "title": readable_title,
        "cached": False,
    }


async def get_cached_content(lesson_path: str) -> dict | None:
    """
    Get cached content without fetching from GitHub.

    Useful for checking cache status without triggering a fetch.
    """
    cache_key = f"content_loader.load_lesson_content:{lesson_path}:"
    cached_data = await safe_redis_get(cache_key)

    if cached_data:
        import json
        from typing import Any

        try:
            result: dict[str, Any] = json.loads(cached_data)
            result["cached"] = True
            return result
        except Exception:
            pass

    return None


def search_book_content(query: str) -> str:
    """
    Search book content.

    Note: In Docker deployment, this searches cached content only.
    For full search, consider implementing GitHub Search API integration.
    """
    # This is a simplified version for Docker deployment
    # Full search would require GitHub Search API or local index
    logger.warning("search_book_content called but full search not available in container mode")
    return f"Search not available in container mode. Query: {query}"
