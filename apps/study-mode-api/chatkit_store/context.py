"""
Request Context for user isolation and metadata.
"""

from typing import Any
from pydantic import BaseModel, Field


class RequestContext(BaseModel):
    """Context for each ChatKit request with user isolation."""

    # User identification (required for data isolation)
    user_id: str = Field(..., min_length=1, description="Unique user identifier")

    # Optional user info
    user_name: str | None = Field(default=None, description="User display name")

    # Lesson context
    lesson_path: str = Field(default="", description="Current lesson path")
    mode: str = Field(default="teach", description="Chat mode: teach or ask")

    # Optional metadata
    request_id: str | None = Field(default=None, description="Request trace ID")
    metadata: dict[str, Any] = Field(default_factory=dict)

    # JWT token (not verified in dev mode)
    jwt_token: str | None = Field(default=None, description="JWT token for auth")

    class Config:
        frozen = False  # Allow mutation for adding trace info
