"""Book tree builder using GitHub Trees API.

Single API call to get all files, then builds a hierarchy of Parts > Chapters > Lessons.
Cached in Redis with key "book_tree:v1" (no TTL, invalidated by admin endpoint / CI on git push).

Some parts organise chapters into sections (Part > Section > Chapter > Lesson).
Section folders are auto-detected by the presence of _category_.json at depth 2.
"""

import json
import logging
import re

import httpx

from api_infra.core.redis_cache import get_redis, safe_redis_get

from ..config import settings
from ..schemas.content import (
    BookTreeResponse,
    ChapterMeta,
    LessonMeta,
    PartMeta,
)

logger = logging.getLogger(__name__)

CACHE_KEY = "book_tree:v1"
DOCS_PREFIX = "apps/learn-app/docs/"


def _detect_sectioned_parts(doc_paths: list[str]) -> set[str]:
    """Auto-detect parts that use section folders.

    A part is sectioned when it contains _category_.json at depth 2
    (i.e. Part/Section/_category_.json), which Docusaurus requires for
    sidebar grouping.  This avoids a hardcoded list that drifts.
    """
    sectioned: set[str] = set()
    for path in doc_paths:
        relative = path[len(DOCS_PREFIX) :]
        segments = relative.split("/")
        # Part/Section/_category_.json  →  3 segments
        if (
            len(segments) == 3
            and segments[2] == "_category_.json"
            and re.match(r"^\d+-", segments[1])
        ):
            sectioned.add(segments[0])
    return sectioned


def slug_to_title(slug: str) -> str:
    """Convert a slug like '01-my-lesson' to 'My Lesson'."""
    # Remove leading number prefix
    cleaned = re.sub(r"^\d+-", "", slug)
    # Replace hyphens with spaces and title-case
    return cleaned.replace("-", " ").title()


async def build_book_tree() -> BookTreeResponse:
    """Build the full book tree from GitHub Trees API.

    Uses a single recursive tree call to get all files, then filters
    for docs/**/*.md and builds the hierarchy.
    """
    # Check cache first
    cached = await safe_redis_get(CACHE_KEY)
    if cached:
        logger.info("[BookTree] Cache hit")
        data = json.loads(cached)
        return BookTreeResponse(**data)

    logger.info("[BookTree] Building tree from GitHub API...")

    # Fetch recursive tree
    tree_items = await _fetch_github_tree()
    if not tree_items:
        logger.warning("[BookTree] No tree items from GitHub")
        return BookTreeResponse()

    # Filter to docs directory (blobs only, but include _category_.json for detection)
    doc_paths = [
        item["path"]
        for item in tree_items
        if item["path"].startswith(DOCS_PREFIX) and item["type"] == "blob"
    ]

    # Auto-detect which parts use section folders (Part > Section > Chapter > Lesson)
    sectioned_parts = _detect_sectioned_parts(doc_paths)
    if sectioned_parts:
        logger.info("[BookTree] Sectioned parts detected: %s", sectioned_parts)

    # Build hierarchy
    parts: dict[str, PartMeta] = {}
    total_lessons = 0

    for path in doc_paths:
        # Strip prefix: "apps/learn-app/docs/01-Part-Name/02-chapter-name/03-lesson.md"
        relative = path[len(DOCS_PREFIX) :]
        segments = relative.split("/")

        if len(segments) < 2:
            continue

        part_slug = segments[0]
        filename = segments[-1]

        # Determine chapter and (optional) section based on part structure.
        # Sectioned parts: Part > Section > Chapter > Lesson (4+ segments)
        # Other parts:     Part > Chapter > [SubSection] > Lesson (3+ segments)
        if part_slug in sectioned_parts and len(segments) >= 4:
            section_slug = segments[1]
            chapter_slug = segments[2]
        elif part_slug in sectioned_parts:
            # 2-3 segment paths in sectioned parts are section-level files
            # (e.g., README.md, _category_.json) — not chapters.
            section_slug = None
            chapter_slug = None
        elif len(segments) >= 3:
            section_slug = None
            chapter_slug = segments[1]
        else:
            section_slug = None
            chapter_slug = None

        # Only process .md/.mdx files (not directories)
        if not (filename.endswith(".md") or filename.endswith(".mdx")):
            continue

        # Ensure part exists
        if part_slug not in parts:
            parts[part_slug] = PartMeta(
                slug=part_slug,
                title=slug_to_title(part_slug),
            )

        # If this is a direct child of part (e.g. README), skip lesson tracking
        if chapter_slug is None:
            continue

        # Ensure chapter exists
        part = parts[part_slug]
        chapter = next((c for c in part.chapters if c.slug == chapter_slug), None)
        if chapter is None:
            chapter = ChapterMeta(
                slug=chapter_slug,
                title=slug_to_title(chapter_slug),
                section_slug=section_slug,
                section_title=slug_to_title(section_slug) if section_slug else None,
            )
            part.chapters.append(chapter)

        # Add lesson (skip category.json, README, summaries, etc.)
        if filename.lower() in ("readme.md", "readme.mdx", "_category_.json"):
            continue

        lesson_slug = filename.rsplit(".", 1)[0]  # Remove .md/.mdx extension

        # Skip .summary companion files (e.g., "01-lesson.summary.md")
        if lesson_slug.endswith(".summary"):
            continue

        # Extract sidebar_position from filename number prefix
        position_match = re.match(r"^(\d+)", lesson_slug)
        sidebar_position = int(position_match.group(1)) if position_match else 0

        # Build full path relative to docs root (handles sub-chapter nesting)
        # For "part/chapter/lesson.md" → "part/chapter/lesson"
        # For "part/chapter/sub-chapter/lesson.md" → "part/chapter/sub-chapter/lesson"
        lesson_path = "/".join(segments[:-1]) + "/" + lesson_slug

        lesson = LessonMeta(
            slug=lesson_slug,
            title=slug_to_title(lesson_slug),
            sidebar_position=sidebar_position,
            path=lesson_path,
        )
        chapter.lessons.append(lesson)
        total_lessons += 1

    # Sort parts, chapters, and lessons by slug
    sorted_parts = sorted(parts.values(), key=lambda p: p.slug)
    for part in sorted_parts:
        part.chapters.sort(key=lambda c: c.slug)
        for chapter in part.chapters:
            chapter.lessons.sort(key=lambda lesson: lesson.sidebar_position)

    total_chapters = sum(len(p.chapters) for p in sorted_parts)

    result = BookTreeResponse(
        parts=sorted_parts,
        total_lessons=total_lessons,
        total_chapters=total_chapters,
    )

    # Cache result (no TTL — invalidated by admin endpoint / CI on git push)
    redis = get_redis()
    if redis:
        try:
            await redis.set(CACHE_KEY, json.dumps(result.model_dump()))
            logger.info("[BookTree] Cached: %d lessons, %d chapters", total_lessons, total_chapters)
        except Exception as e:
            logger.error("[BookTree] Cache set failed: %s", e)

    return result


async def _fetch_github_tree() -> list[dict]:
    """Fetch recursive file tree from GitHub API."""
    url = f"https://api.github.com/repos/{settings.github_repo}/git/trees/main?recursive=1"

    headers = {"Accept": "application/vnd.github.v3+json"}
    if settings.github_token:
        headers["Authorization"] = f"token {settings.github_token}"

    try:
        async with httpx.AsyncClient(timeout=30.0) as client:
            response = await client.get(url, headers=headers)
            response.raise_for_status()
            data = response.json()
            if data.get("truncated"):
                logger.warning(
                    "[BookTree] GitHub tree response was truncated — "
                    "repo may have >100k files or entries >7MB. "
                    "Some lessons may be missing from the tree."
                )
            return data.get("tree", [])
    except httpx.TimeoutException as e:
        logger.error("[BookTree] GitHub API timeout after 30s: %s", e)
        return []
    except httpx.HTTPError as e:
        logger.error("[BookTree] GitHub API error: %s", e)
        return []
