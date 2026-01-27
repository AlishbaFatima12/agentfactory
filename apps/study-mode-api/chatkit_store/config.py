"""
Store Configuration for PostgreSQL connection.
"""

import os
from pydantic import Field
from pydantic_settings import BaseSettings


class StoreConfig(BaseSettings):
    """Configuration for PostgresStore connection."""

    # Database connection URL (asyncpg format)
    database_url: str = Field(
        default="",
        description="PostgreSQL connection string (postgresql+asyncpg://...)"
    )

    # Connection pool settings
    pool_size: int = Field(default=5, ge=1, le=20)
    max_overflow: int = Field(default=5, ge=0, le=20)
    pool_timeout: int = Field(default=30, ge=5, le=60)
    pool_recycle: int = Field(default=1800, ge=300)

    # Query settings
    statement_timeout: int = Field(default=30000, description="Query timeout in ms")

    # Schema name for tables
    schema_name: str = Field(default="study_mode_chat")

    class Config:
        env_prefix = "STUDYMODE_"
        env_file = ".env"
        extra = "ignore"

    @classmethod
    def from_env(cls) -> "StoreConfig":
        """Create config from environment variables."""
        return cls(
            database_url=os.getenv("DATABASE_URL", ""),
        )
