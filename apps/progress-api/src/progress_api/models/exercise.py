"""ExerciseSubmission model."""

from datetime import datetime
from typing import Any

import sqlalchemy as sa
from sqlmodel import Column, DateTime, Field, SQLModel, text


class ExerciseSubmission(SQLModel, table=True):
    __tablename__ = "exercise_submissions"
    __table_args__ = (
        sa.UniqueConstraint("user_id", "chapter_slug", "lesson_slug", name="uq_exercise_user_chapter_lesson"),
        sa.UniqueConstraint("evidence_hash", name="uq_exercise_evidence_hash"),
    )

    id: int | None = Field(default=None, primary_key=True)
    user_id: str = Field(foreign_key="users.id")
    chapter_slug: str
    lesson_slug: str
    evidence: dict[str, Any] = Field(sa_column=Column(sa.JSON, nullable=False))
    scores: dict[str, Any] | None = Field(sa_column=Column(sa.JSON, nullable=True), default=None)
    feedback: str | None = None
    evidence_hash: str
    xp_earned: int = Field(default=50)
    created_at: datetime = Field(
        sa_column=Column(DateTime(timezone=True), server_default=text("NOW()"))
    )
