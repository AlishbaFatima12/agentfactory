"""
PostgreSQL Store for ChatKit - Persistent conversation storage.

Based on taskforce reference implementation with user isolation.
"""

import json
import logging
from datetime import datetime, timezone
from typing import Any

from sqlalchemy import text
from sqlalchemy.ext.asyncio import create_async_engine, AsyncEngine

from chatkit.store import Store, Page
from chatkit.types import ThreadMetadata, ThreadItem

from .config import StoreConfig
from .context import RequestContext

logger = logging.getLogger(__name__)


class PostgresStore(Store[RequestContext]):
    """
    PostgreSQL-backed store for ChatKit with user isolation.

    Tables:
    - threads: Conversation metadata (id, user_id, lesson_path, title, etc.)
    - items: Messages in each thread (id, thread_id, user_id, data)
    """

    def __init__(self, config: StoreConfig | None = None, engine: AsyncEngine | None = None):
        """Initialize with config or existing engine."""
        self.config = config or StoreConfig.from_env()
        self._engine = engine
        self._initialized = False

    async def _get_engine(self) -> AsyncEngine:
        """Get or create the database engine."""
        if self._engine is None:
            if not self.config.database_url:
                raise ValueError("DATABASE_URL not configured")

            self._engine = create_async_engine(
                self.config.database_url,
                pool_size=self.config.pool_size,
                max_overflow=self.config.max_overflow,
                pool_timeout=self.config.pool_timeout,
                pool_recycle=self.config.pool_recycle,
                echo=False,
            )
        return self._engine

    async def initialize_schema(self) -> None:
        """Create database tables if they don't exist."""
        if self._initialized:
            return

        engine = await self._get_engine()
        schema = self.config.schema_name

        async with engine.begin() as conn:
            # Create schema
            await conn.execute(text(f"CREATE SCHEMA IF NOT EXISTS {schema}"))

            # Create threads table
            await conn.execute(text(f"""
                CREATE TABLE IF NOT EXISTS {schema}.threads (
                    id VARCHAR(255) PRIMARY KEY,
                    user_id VARCHAR(255) NOT NULL,
                    lesson_path VARCHAR(500) DEFAULT '',
                    title VARCHAR(500) DEFAULT 'Study Session',
                    created_at TIMESTAMPTZ DEFAULT NOW(),
                    updated_at TIMESTAMPTZ DEFAULT NOW(),
                    data JSONB DEFAULT '{{}}'::jsonb
                )
            """))

            # Create items table
            await conn.execute(text(f"""
                CREATE TABLE IF NOT EXISTS {schema}.items (
                    id VARCHAR(255) PRIMARY KEY,
                    thread_id VARCHAR(255) NOT NULL REFERENCES {schema}.threads(id) ON DELETE CASCADE,
                    user_id VARCHAR(255) NOT NULL,
                    created_at TIMESTAMPTZ DEFAULT NOW(),
                    updated_at TIMESTAMPTZ DEFAULT NOW(),
                    data JSONB NOT NULL
                )
            """))

            # Create indexes for performance
            await conn.execute(text(f"""
                CREATE INDEX IF NOT EXISTS idx_threads_user_id
                ON {schema}.threads(user_id, created_at DESC)
            """))
            await conn.execute(text(f"""
                CREATE INDEX IF NOT EXISTS idx_threads_user_lesson
                ON {schema}.threads(user_id, lesson_path)
            """))
            await conn.execute(text(f"""
                CREATE INDEX IF NOT EXISTS idx_items_thread_id
                ON {schema}.items(thread_id, created_at)
            """))

        self._initialized = True
        logger.info(f"PostgresStore initialized with schema: {schema}")

    async def close(self) -> None:
        """Close the database connection pool."""
        if self._engine:
            await self._engine.dispose()
            self._engine = None
            self._initialized = False

    # =========================================================================
    # Thread Operations
    # =========================================================================

    async def load_thread(self, thread_id: str, context: RequestContext) -> ThreadMetadata:
        """Load a thread by ID with user isolation."""
        engine = await self._get_engine()
        schema = self.config.schema_name

        async with engine.begin() as conn:
            result = await conn.execute(text(f"""
                SELECT id, title, data, created_at, updated_at
                FROM {schema}.threads
                WHERE id = :thread_id AND user_id = :user_id
            """), {"thread_id": thread_id, "user_id": context.user_id})

            row = result.fetchone()
            if row:
                data = row.data if isinstance(row.data, dict) else json.loads(row.data or "{}")
                return ThreadMetadata(id=row.id, title=row.title or "Study Session", **data)

        # Create new thread if not found
        return await self._create_thread(thread_id, context)

    async def _create_thread(self, thread_id: str, context: RequestContext) -> ThreadMetadata:
        """Create a new thread."""
        engine = await self._get_engine()
        schema = self.config.schema_name
        title = f"Study: {context.lesson_path.split('/')[-1]}" if context.lesson_path else "Study Session"

        async with engine.begin() as conn:
            await conn.execute(text(f"""
                INSERT INTO {schema}.threads (id, user_id, lesson_path, title, data)
                VALUES (:id, :user_id, :lesson_path, :title, :data)
                ON CONFLICT (id) DO NOTHING
            """), {
                "id": thread_id,
                "user_id": context.user_id,
                "lesson_path": context.lesson_path,
                "title": title,
                "data": json.dumps({"mode": context.mode}),
            })

        return ThreadMetadata(id=thread_id, title=title)

    async def save_thread(self, thread: ThreadMetadata, context: RequestContext) -> None:
        """Save/update a thread."""
        engine = await self._get_engine()
        schema = self.config.schema_name

        # Serialize thread data (mode="json" handles datetime conversion)
        data = thread.model_dump(exclude={"id", "title"}, mode="json")

        async with engine.begin() as conn:
            await conn.execute(text(f"""
                INSERT INTO {schema}.threads (id, user_id, lesson_path, title, data, updated_at)
                VALUES (:id, :user_id, :lesson_path, :title, :data, NOW())
                ON CONFLICT (id) DO UPDATE SET
                    title = EXCLUDED.title,
                    data = EXCLUDED.data,
                    updated_at = NOW()
            """), {
                "id": thread.id,
                "user_id": context.user_id,
                "lesson_path": context.lesson_path,
                "title": thread.title or "Study Session",
                "data": json.dumps(data),
            })

    async def delete_thread(self, thread_id: str, context: RequestContext) -> None:
        """Delete a thread and its items."""
        engine = await self._get_engine()
        schema = self.config.schema_name

        async with engine.begin() as conn:
            await conn.execute(text(f"""
                DELETE FROM {schema}.threads
                WHERE id = :thread_id AND user_id = :user_id
            """), {"thread_id": thread_id, "user_id": context.user_id})

    async def load_threads(
        self, limit: int, after: str | None, order: str, context: RequestContext
    ) -> Page[ThreadMetadata]:
        """Load threads for a user with pagination."""
        engine = await self._get_engine()
        schema = self.config.schema_name

        order_dir = "DESC" if order == "desc" else "ASC"

        query = f"""
            SELECT id, title, data, created_at
            FROM {schema}.threads
            WHERE user_id = :user_id
        """
        params: dict[str, Any] = {"user_id": context.user_id, "limit": limit + 1}

        if after:
            query += " AND created_at < (SELECT created_at FROM {schema}.threads WHERE id = :after)"
            params["after"] = after

        query += f" ORDER BY created_at {order_dir} LIMIT :limit"

        async with engine.begin() as conn:
            result = await conn.execute(text(query), params)
            rows = result.fetchall()

        threads = []
        for row in rows[:limit]:
            data = row.data if isinstance(row.data, dict) else json.loads(row.data or "{}")
            threads.append(ThreadMetadata(id=row.id, title=row.title, **data))

        return Page(data=threads, has_more=len(rows) > limit)

    # =========================================================================
    # Item Operations
    # =========================================================================

    async def load_thread_items(
        self,
        thread_id: str,
        after: str | None,
        limit: int,
        order: str,
        context: RequestContext,
    ) -> Page[ThreadItem]:
        """Load items from a thread with pagination."""
        engine = await self._get_engine()
        schema = self.config.schema_name

        order_dir = "DESC" if order == "desc" else "ASC"

        query = f"""
            SELECT id, data, created_at
            FROM {schema}.items
            WHERE thread_id = :thread_id AND user_id = :user_id
        """
        params: dict[str, Any] = {
            "thread_id": thread_id,
            "user_id": context.user_id,
            "limit": limit + 1,
        }

        if after:
            op = "<" if order == "desc" else ">"
            query += f" AND created_at {op} (SELECT created_at FROM {schema}.items WHERE id = :after)"
            params["after"] = after

        query += f" ORDER BY created_at {order_dir} LIMIT :limit"

        async with engine.begin() as conn:
            result = await conn.execute(text(query), params)
            rows = result.fetchall()

        items = []
        for row in rows[:limit]:
            data = row.data if isinstance(row.data, dict) else json.loads(row.data)
            items.append(self._deserialize_item(row.id, data))

        return Page(data=items, has_more=len(rows) > limit)

    async def add_thread_item(self, thread_id: str, item: ThreadItem, context: RequestContext) -> None:
        """Add a new item to a thread."""
        engine = await self._get_engine()
        schema = self.config.schema_name

        data = self._serialize_item(item)

        async with engine.begin() as conn:
            await conn.execute(text(f"""
                INSERT INTO {schema}.items (id, thread_id, user_id, data)
                VALUES (:id, :thread_id, :user_id, :data)
            """), {
                "id": item.id,
                "thread_id": thread_id,
                "user_id": context.user_id,
                "data": json.dumps(data),
            })

    async def save_item(self, thread_id: str, item: ThreadItem, context: RequestContext) -> None:
        """Save/update an item."""
        engine = await self._get_engine()
        schema = self.config.schema_name

        data = self._serialize_item(item)

        async with engine.begin() as conn:
            await conn.execute(text(f"""
                INSERT INTO {schema}.items (id, thread_id, user_id, data, updated_at)
                VALUES (:id, :thread_id, :user_id, :data, NOW())
                ON CONFLICT (id) DO UPDATE SET
                    data = EXCLUDED.data,
                    updated_at = NOW()
            """), {
                "id": item.id,
                "thread_id": thread_id,
                "user_id": context.user_id,
                "data": json.dumps(data),
            })

    async def load_item(self, thread_id: str, item_id: str, context: RequestContext) -> ThreadItem:
        """Load a single item."""
        engine = await self._get_engine()
        schema = self.config.schema_name

        async with engine.begin() as conn:
            result = await conn.execute(text(f"""
                SELECT id, data FROM {schema}.items
                WHERE id = :item_id AND thread_id = :thread_id AND user_id = :user_id
            """), {
                "item_id": item_id,
                "thread_id": thread_id,
                "user_id": context.user_id,
            })
            row = result.fetchone()

        if not row:
            raise KeyError(f"Item {item_id} not found")

        data = row.data if isinstance(row.data, dict) else json.loads(row.data)
        return self._deserialize_item(row.id, data)

    async def delete_thread_item(self, thread_id: str, item_id: str, context: RequestContext) -> None:
        """Delete an item from a thread."""
        engine = await self._get_engine()
        schema = self.config.schema_name

        async with engine.begin() as conn:
            await conn.execute(text(f"""
                DELETE FROM {schema}.items
                WHERE id = :item_id AND thread_id = :thread_id AND user_id = :user_id
            """), {
                "item_id": item_id,
                "thread_id": thread_id,
                "user_id": context.user_id,
            })

    # =========================================================================
    # Attachment Operations (simplified - store in items table as JSON)
    # =========================================================================

    async def save_attachment(self, attachment: any, context: RequestContext) -> None:
        """Save an attachment (simplified - not fully implemented)."""
        # For now, attachments are disabled in the frontend
        # Full implementation would store files in S3/GCS
        logger.warning("Attachment saving not fully implemented")
        pass

    async def load_attachment(self, attachment_id: str, context: RequestContext) -> any:
        """Load an attachment by ID."""
        logger.warning("Attachment loading not fully implemented")
        return None

    async def delete_attachment(self, attachment_id: str, context: RequestContext) -> None:
        """Delete an attachment."""
        logger.warning("Attachment deletion not fully implemented")
        pass

    # =========================================================================
    # Serialization Helpers
    # =========================================================================

    def _serialize_item(self, item: ThreadItem) -> dict:
        """Serialize a ThreadItem to JSON-compatible dict."""
        return item.model_dump(mode="json")

    def _deserialize_item(self, item_id: str, data: dict) -> ThreadItem:
        """Deserialize a dict to ThreadItem."""
        from chatkit.types import UserMessageItem, AssistantMessageItem

        item_type = data.get("type", "")
        if item_type == "user_message":
            return UserMessageItem(**data)
        elif item_type == "assistant_message":
            return AssistantMessageItem(**data)
        else:
            # Generic ThreadItem
            return ThreadItem(**data)
