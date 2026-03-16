"""Exercise submission request/response schemas."""

from typing import Literal

from pydantic import BaseModel, Field

from .quiz import StreakInfo


class TextEvidence(BaseModel):
    """Text-based evidence (Phase 1). Discriminated union member."""

    type: Literal["text"]
    provider: Literal["chatgpt", "claude", "gemini", "grok", "claude-code", "cowork"]
    student_input: str = Field(min_length=1, max_length=25000)
    ai_output: str = Field(min_length=1, max_length=25000)


# Phase 1: only TextEvidence
Evidence = TextEvidence


class ExerciseSubmitRequest(BaseModel):
    """Request body for POST /api/v1/exercise/submit."""

    chapter_slug: str = Field(min_length=1)
    lesson_slug: str = Field(min_length=1)
    evidence: Evidence
    feedback: str | None = Field(default=None, max_length=500)


class ScoreCard(BaseModel):
    """Extracted Thinking Score Card scores."""

    independent_thinking: int
    critical_evaluation: int
    reasoning_depth: int
    originality: int
    self_awareness: int
    average: float


class ExerciseSubmitResponse(BaseModel):
    """Response body for POST /api/v1/exercise/submit."""

    submitted: bool
    already_submitted: bool
    xp_earned: int
    total_xp: int
    scores: ScoreCard | None = None
    streak: StreakInfo
