# Exercise Submission — Implementation Plan

## Overview

Add `POST /api/v1/exercise/submit` to progress-api, with content-api pass-through and a new `SubmissionDialog` React component in learn-app. Follows existing patterns from quiz.py and lesson.py exactly.

---

## 1. DB Model (SQLModel)

**File**: `apps/progress-api/src/progress_api/models/exercise.py`

```python
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
```

**Pattern match**: Mirrors `QuizAttempt` structure (int PK, user_id FK, created_at with server default). Uses `sa.JSON` instead of `JSONB` since SQLModel/SQLAlchemy handles this portably (PostgreSQL maps it to JSONB). Two unique constraints replace the spec's separate UNIQUE lines.

**Register in models/**init**.py**: Add `ExerciseSubmission` to imports and `__all__`.

---

## 2. Migration

**File**: `apps/progress-api/migrations/003_exercise_submissions.sql`

```sql
-- Migration: Exercise Submissions
-- Run ONCE against the progress-api database before deploying the exercise submission feature.
-- Safe to re-run — all statements are idempotent.

CREATE TABLE IF NOT EXISTS exercise_submissions (
    id              SERIAL PRIMARY KEY,
    user_id         VARCHAR NOT NULL REFERENCES users(id),
    chapter_slug    VARCHAR NOT NULL,
    lesson_slug     VARCHAR NOT NULL,
    evidence        JSONB NOT NULL,
    scores          JSONB,
    feedback        TEXT,
    evidence_hash   VARCHAR NOT NULL,
    xp_earned       INTEGER NOT NULL DEFAULT 50,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_exercise_user_chapter_lesson UNIQUE (user_id, chapter_slug, lesson_slug),
    CONSTRAINT uq_exercise_evidence_hash UNIQUE (evidence_hash)
);

CREATE INDEX IF NOT EXISTS ix_exercise_submissions_user
    ON exercise_submissions (user_id);
```

**Note**: The spec uses UUID PK. The codebase uses SERIAL int PKs (see QuizAttempt). We follow codebase convention (int PK).

---

## 3. Schemas (Pydantic)

**File**: `apps/progress-api/src/progress_api/schemas/exercise.py`

See `api-contract.md` for full schema definitions. Key models:

- `TextEvidence` — discriminated union member (type="text")
- `ExerciseSubmitRequest` — chapter_slug, lesson_slug, evidence, feedback
- `ExerciseSubmitResponse` — submitted, already_submitted, xp_earned, total_xp, scores, streak

---

## 4. Service (Business Logic)

**File**: `apps/progress-api/src/progress_api/services/exercise.py`

**Processing flow** (follows quiz.py's 12-step pattern):

1. `upsert_user_from_jwt(session, user)` — reuse from shared.py
2. `resolve_or_create_chapter(session, request.chapter_slug)` — reuse from shared.py
3. Validate evidence via Pydantic (already done by FastAPI request parsing)
4. Compute `evidence_hash = sha256(evidence.student_input.strip().lower())` — normalize before hashing
5. Check dedup: SELECT with evidence_hash, return 409 if another user submitted same input
6. Check idempotency: SELECT with (user_id, chapter_slug, lesson_slug), return already_submitted=True if exists
7. Extract scores via `extract_scores(evidence.ai_output)` — regex on Score Card dimensions
8. INSERT exercise_submission (ON CONFLICT DO NOTHING for race safety)
9. INSERT lesson_completion via raw SQL (same as lesson.py step 3) — marks lesson as complete
10. `record_activity_day(session, user.id, today, "exercise", ref)` — reuse from shared.py
11. Calculate streak via `calculate_streak()` — reuse from engine
12. `update_user_progress()` with xp_delta=50, lessons_delta=1 — reuse from shared.py
13. COMMIT + invalidate cache + refresh leaderboard

**Score extraction function** (pure, testable):

```python
import re

SCORE_DIMENSIONS = [
    "Independent Thinking",
    "Critical Evaluation",
    "Reasoning Depth",
    "Originality",
    "Self-Awareness",
]

def extract_scores(ai_output: str) -> dict[str, int | float] | None:
    """Extract Thinking Score Card scores from AI output.

    Returns dict with snake_case dimension keys + average, or None if < 5 dimensions found.
    """
    pattern = r"(Independent Thinking|Critical Evaluation|Reasoning Depth|Originality|Self-Awareness)[:\s]+(\d+)/10"
    matches = dict(re.findall(pattern, ai_output, re.IGNORECASE))
    if len(matches) < 5:
        return None
    scores = {k.lower().replace(" ", "_"): int(v) for k, v in matches.items()}
    scores["average"] = round(sum(scores.values()) / len(scores), 1)
    return scores
```

**Hash computation function** (pure, testable):

```python
import hashlib

def compute_evidence_hash(student_input: str) -> str:
    """SHA-256 hash of normalized student input for dedup."""
    normalized = student_input.strip().lower()
    return hashlib.sha256(normalized.encode("utf-8")).hexdigest()
```

---

## 5. Router

**File**: `apps/progress-api/src/progress_api/routes/exercise.py`

Follows quiz.py pattern exactly:

```python
router = APIRouter()

@router.post("/exercise/submit", response_model=ExerciseSubmitResponse)
async def exercise_submit(
    request: ExerciseSubmitRequest,
    user: CurrentUser = Depends(get_current_user),
    session: AsyncSession = Depends(get_session),
) -> ExerciseSubmitResponse:
    return await submit_exercise(session, user, request)
```

**Register in main.py**: `app.include_router(exercise.router, prefix="/api/v1", tags=["Exercise"])`

---

## 6. Content-API Pass-Through

### ProgressClient addition

**File**: `apps/content-api/src/content_api/services/progress_client.py`

Add `submit_exercise()` method following `complete_lesson()` pattern:

```python
async def submit_exercise(
    self,
    data: dict[str, Any],
    auth_token: str | None = None,
) -> dict[str, Any]:
    """Submit exercise evidence via progress API."""
    client = await self._get_client()
    try:
        headers = {}
        if auth_token:
            headers["Authorization"] = auth_token
        response = await client.post("/api/v1/exercise/submit", json=data, headers=headers)
        if response.status_code == 200:
            return response.json()
        else:
            logger.error("[Progress] Exercise submit failed: status=%d, body=%s", response.status_code, response.text)
            return {"submitted": False, "xp_earned": 0}
    except httpx.TimeoutException as e:
        logger.error("[Progress] Exercise submit timeout: %s", type(e).__name__)
        return {"submitted": False, "xp_earned": 0}
    except httpx.HTTPError as e:
        logger.error("[Progress] Exercise submit failed: %s: %s", type(e).__name__, e)
        return {"submitted": False, "xp_earned": 0}
```

### Content-API route

**File**: `apps/content-api/src/content_api/routes/content.py`

Add endpoint following `complete_lesson` pattern:

```python
@content_router.post("/exercise/submit", response_model=ExerciseSubmitResponse)
@rate_limit("content_exercise_submit", max_requests=10, period_minutes=1)
async def submit_exercise(
    request: Request,
    response: Response,
    body: ExerciseSubmitRequest,
    user: CurrentUser = Depends(get_current_user),
) -> ExerciseSubmitResponse:
    """Submit exercise evidence via progress API."""
    progress = get_progress_client()
    if not progress:
        raise HTTPException(status_code=503, detail="Progress tracking service not configured")

    auth_token = request.headers.get("Authorization")
    result = await progress.submit_exercise(data=body.model_dump(), auth_token=auth_token)

    return ExerciseSubmitResponse(**result)
```

**New content-api schemas** in `apps/content-api/src/content_api/schemas/content.py`:

```python
class ExerciseSubmitRequest(BaseModel):
    chapter_slug: str
    lesson_slug: str
    evidence: dict[str, Any]
    feedback: str | None = Field(default=None, max_length=500)

class ExerciseSubmitResponse(BaseModel):
    submitted: bool = False
    already_submitted: bool = False
    xp_earned: int = 0
    total_xp: int = 0
    scores: dict[str, Any] | None = None
    streak: dict[str, int] | None = None
```

---

## 7. Frontend: SubmissionDialog Component

**Directory**: `apps/learn-app/src/theme/SubmissionDialog/`

### Component structure

```
SubmissionDialog/
├── index.tsx              # Main component (dialog + form + submitted view)
├── SubmissionDialog.module.css  # Scoped styles
└── __tests__/
    └── SubmissionDialog.test.tsx
```

### Behavior

1. **Detection**: Component reads `submission` from page frontmatter via Docusaurus `useDoc()` context. If `submission` field is absent, component renders nothing (fall through to normal "Mark as Complete").

2. **States**:
   - `idle` — Button shows "Submit Your AI Check — 50 XP"
   - `open` — Modal dialog with form
   - `submitting` — Loading spinner, form disabled
   - `submitted` — Green checkmark + scores (if extracted)
   - `error` — Error message with retry

3. **Form fields**:
   - Provider dropdown (6 options from frontmatter `providers` array, defaults to `default_provider`)
   - Student input textarea (required, max 25000 chars)
   - AI output textarea (required, max 25000 chars)
   - Feedback textarea (optional, max 500 chars)

4. **Submit flow**:
   - POST to `/api/v1/content/exercise/submit` (content-api pass-through)
   - On success: show scores, update button to "Submitted"
   - On 409 (duplicate): show "This submission was already submitted by another student"
   - On 422: show validation error

5. **Persistence**: After successful submit, the component calls the existing lesson-complete flow (already handled server-side in step 9 of the service). The frontend reads completion state from progress to show "Submitted" on return visits.

### Integration point

The `SubmissionDialog` replaces the "Mark as Complete" button when the lesson has `submission` frontmatter. This hooks into the existing `DocItem/Layout/index.tsx` where completion UI lives.

---

## 8. Content Frontmatter

**40 Part 0 exercise lesson files** — add to YAML frontmatter:

```yaml
submission:
  type: "ai-check"
  accept: ["text"]
  providers: ["chatgpt", "claude", "gemini", "grok", "claude-code", "cowork"]
  default_provider: "chatgpt"
  xp_bonus: 50
```

This is a mechanical find-and-add operation. Target files: all lessons in Part 0 that have exercises (identifiable by `practice_exercise` field in existing frontmatter or by lesson content containing exercise instructions).

---

## Implementation Order (by engineer)

### Backend Engineer

1. Create `models/exercise.py` + register in `models/__init__.py`
2. Create `migrations/003_exercise_submissions.sql`
3. Create `schemas/exercise.py`
4. Create `services/exercise.py` (with `extract_scores` and `compute_evidence_hash`)
5. Create `routes/exercise.py` + register in `main.py`
6. Add `submit_exercise()` to content-api `ProgressClient`
7. Add content-api route + schemas

### Frontend Engineer

1. Create `SubmissionDialog/index.tsx` + CSS module
2. Integrate into `DocItem/Layout/index.tsx`
3. Write component tests

### Content Engineer

1. Identify all 40 exercise lesson files in Part 0
2. Add `submission` frontmatter to each

---

## Design Decisions

| Decision           | Choice                                      | Rationale                                                       |
| ------------------ | ------------------------------------------- | --------------------------------------------------------------- |
| PK type            | SERIAL int (not UUID)                       | Matches QuizAttempt, LessonCompletion pattern in codebase       |
| Evidence storage   | JSONB column with Pydantic validation       | Extensible for future LinkEvidence without schema migration     |
| Hash normalization | strip().lower() before SHA-256              | Catches trivial copy-paste variations                           |
| XP model           | Flat 50 XP per submission                   | Spec says flat XP; scores are quality signal, not XP multiplier |
| Lesson completion  | Server-side (step 9 in service)             | Submission implies completion; no separate client call needed   |
| Dedup scope        | evidence_hash is global (all users)         | Catches cross-student copying per spec                          |
| Idempotency        | (user_id, chapter_slug, lesson_slug) UNIQUE | One submission per exercise per student                         |
| Content-API        | Pass-through only                           | No business logic in content-api; progress-api owns validation  |
