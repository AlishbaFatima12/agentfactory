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
import re

import httpx

from api_infra.core.redis_cache import cache_response, safe_redis_get

from ..config import settings

logger = logging.getLogger(__name__)


def extract_folder_name(path_segment: str) -> str:
    """Extract folder name without numeric prefix.

    Examples:
        "14-enterprise-agentic-landscape" -> "enterprise-agentic-landscape"
        "03-Business-Domain" -> "Business-Domain"
        "README" -> "README"
    """
    return re.sub(r"^\d+-", "", path_segment)

# Cache TTL: 30 days (invalidated via GitHub Action on push)
CONTENT_CACHE_TTL = settings.content_cache_ttl


def strip_frontmatter(content: str) -> str:
    """Remove YAML frontmatter from markdown content.

    Frontmatter is the YAML block at the start of the file between --- markers.
    This metadata is useful for the platform but confusing for the LLM.

    Also removes MDX import statements that the LLM doesn't need.

    Args:
        content: Raw markdown content with possible frontmatter

    Returns:
        Content with frontmatter and imports removed
    """
    if not content:
        return content

    result = content

    # Strip YAML frontmatter (--- ... ---)
    if result.startswith("---"):
        # Find the closing ---
        second_dash = result.find("---", 3)
        if second_dash > 0:
            result = result[second_dash + 3:].strip()

    # Strip MDX import statements (import ... from "...")
    lines = result.split("\n")
    filtered_lines = []
    for line in lines:
        stripped = line.strip()
        # Skip import statements
        if stripped.startswith("import ") and "from" in stripped:
            continue
        filtered_lines.append(line)

    return "\n".join(filtered_lines).strip()


def extract_title(content: str, fallback: str) -> str:
    """Extract title from markdown content.

    Priority:
    1. YAML frontmatter 'title:' field
    2. First markdown heading (# ...)
    3. Path-based fallback (excluding README)
    """
    lines = content.split("\n")
    in_frontmatter = False
    found_heading = None

    for line in lines:
        # Track frontmatter boundaries
        if line.strip() == "---":
            in_frontmatter = not in_frontmatter
            continue

        # Check for title in frontmatter (highest priority)
        if in_frontmatter and line.strip().startswith("title:"):
            title = line.split("title:", 1)[1].strip().strip('"').strip("'")
            if title:
                return title

        # Store first heading as backup (skip README headings)
        if not found_heading and line.startswith("# "):
            heading = line[2:].strip()
            if heading.lower() != "readme":
                found_heading = heading

    # Return heading if found
    if found_heading:
        return found_heading

    # Fallback to path-based title, excluding README
    path_title = fallback.split("/")[-1].replace("-", " ").title()
    if path_title.lower() == "readme":
        # Use parent folder name instead
        parts = fallback.split("/")
        if len(parts) >= 2:
            path_title = parts[-2].replace("-", " ").title()
    return path_title


async def fetch_from_local(lesson_path: str) -> tuple[str, bool]:
    """
    Fetch lesson content from local filesystem (for development).

    Args:
        lesson_path: Path to the lesson (e.g., "01-intro/01-welcome.md")

    Returns:
        Tuple of (content, success)
    """
    import os
    from pathlib import Path

    if not lesson_path:
        return "", False

    # Clean the path
    clean_path = lesson_path.strip("/")

    # Build possible local paths
    # The repo root is typically 3 levels up from this file
    # apps/study-mode-api/src/study_mode_api/services/content_loader.py
    current_file = Path(__file__).resolve()
    repo_root = current_file.parent.parent.parent.parent.parent.parent

    # Try different path formats
    if clean_path.startswith("docs/"):
        local_path = repo_root / "apps" / "learn-app" / clean_path
    elif clean_path.startswith("apps/"):
        local_path = repo_root / clean_path
    else:
        local_path = repo_root / "apps" / "learn-app" / "docs" / clean_path

    # Try different extensions
    extensions = [""]
    if not str(local_path).endswith((".md", ".mdx")):
        extensions = [".md", ".mdx", "/index.md", "/README.md"]

    for ext in extensions:
        try_path = Path(str(local_path) + ext)
        logger.debug(f"[ContentLoader] Trying local path: {try_path}")

        if try_path.exists() and try_path.is_file():
            try:
                content = try_path.read_text(encoding="utf-8")
                logger.info(f"[ContentLoader] LOCAL SUCCESS: {len(content)} chars from {try_path}")
                return content, True
            except Exception as e:
                logger.warning(f"[ContentLoader] Failed to read local file {try_path}: {e}")

    logger.debug(f"[ContentLoader] No local file found for: {lesson_path}")
    return "", False


async def fetch_from_github(lesson_path: str) -> tuple[str, bool]:
    """
    Fetch lesson content from GitHub with authenticated requests.

    GitHub API allows 5,000 requests/hour with token (60 without).
    Includes fallback path resolution for renamed chapters.

    Args:
        lesson_path: Path to the lesson (e.g., "01-intro/01-welcome.md")

    Returns:
        Tuple of (content, success)
    """
    if not lesson_path:
        return "", False

    # Try local filesystem first (for development)
    content, success = await fetch_from_local(lesson_path)
    if success:
        return content, True

    # Fall back to GitHub
    # Clean the path
    clean_path = lesson_path.strip("/")
    logger.info(f"[ContentLoader] Input path: '{lesson_path}' -> clean: '{clean_path}'")
    if clean_path.startswith("docs/"):
        clean_path = f"apps/learn-app/{clean_path}"
    elif not clean_path.startswith("apps/"):
        clean_path = f"apps/learn-app/docs/{clean_path}"
    logger.info(f"[ContentLoader] Final path: '{clean_path}'")

    # Fetch from the specified path
    # Note: Brute-force fallback for renamed chapters was removed because:
    # 1. It could make up to 297 sequential HTTP requests (99 prefixes x 3 segments)
    # 2. It doesn't handle multi-segment renames (part AND chapter renumbered)
    # 3. Stale paths degrade gracefully (empty content + readable title from path)
    # If specific redirects are needed, add them to CHAPTER_REDIRECTS below.
    return await _try_fetch_path(clean_path)


async def _try_fetch_path(clean_path: str) -> tuple[str, bool]:
    """Try to fetch content from a specific path with extension variations."""
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
                    logger.info(f"[ContentLoader] SUCCESS: Fetched {len(response.text)} chars from {url}")
                    return response.text, True
                else:
                    logger.warning(f"[ContentLoader] FAILED: {response.status_code} for {url}")

        except Exception as e:
            logger.warning(f"Failed to fetch from GitHub {url}: {e}")
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
        # Strip frontmatter and MDX imports - LLM only needs the teaching content
        clean_content = strip_frontmatter(content)
        logger.info(f"[ContentLoader] Stripped frontmatter: {len(content)} -> {len(clean_content)} chars")
        return {
            "content": clean_content,
            "title": title,
            "cached": False,  # Will be True on subsequent cached requests
        }

    # Create a readable title from the lesson path
    # e.g., "14-enterprise-agentic-landscape" -> "Enterprise Agentic Landscape"
    # Skip README/index and use parent folder name instead
    path_parts = [p for p in lesson_path.split("/") if p]

    # Find the best folder name for title (skip README, index, etc.)
    title_source = None
    for part in reversed(path_parts):
        clean_part = extract_folder_name(part).lower()
        if clean_part not in ("readme", "index", ""):
            title_source = part
            break

    if not title_source and len(path_parts) >= 2:
        # Use parent folder if last part is readme/index
        title_source = path_parts[-2]

    if title_source:
        # Strip numeric prefix and convert to title case
        readable_title = extract_folder_name(title_source)
        readable_title = readable_title.replace("-", " ").replace("_", " ")
        readable_title = readable_title.title()
    else:
        readable_title = "This Lesson"

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
