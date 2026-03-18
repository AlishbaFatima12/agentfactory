# Part 0 Exercise Submission Feature

## Overview

Add a submission mechanism for Part 0 exercises that collects student thinking + AI evaluation pairs, awards XP, and captures feedback. Generic enough to reuse across future parts.

## User Flow

1. Student completes an exercise (think → submit to AI → get scored)
2. At bottom of lesson page, "Submit Your AI Check" button appears (instead of plain "Mark as Complete")
3. Clicking opens a dialog with:
   - Provider dropdown (ChatGPT / Claude / Gemini / Grok / Claude Code / Cowork), defaults to ChatGPT
   - "Your submission" textarea — student pastes their prompt + answers
   - "AI's evaluation" textarea — student pastes the AI's complete response
   - Optional feedback textarea (500 char limit)
   - Submit button showing XP reward ("Submit — 50 XP")
4. On submit: validated, stored, scores auto-extracted, XP awarded, lesson marked complete
5. One-time only — button changes to "Submitted" after first submission

## Evidence Model (Discriminated Union)

Evidence is stored as JSONB using a type discriminator for future extensibility:

```python
from typing import Literal
from pydantic import BaseModel, HttpUrl

class TextEvidence(BaseModel):
    type: Literal["text"]
    provider: Literal["chatgpt", "claude", "gemini", "grok", "claude-code", "cowork"]
    student_input: str    # their prompt + answers, max 25000 chars
    ai_output: str        # AI's evaluation, max 25000 chars

class LinkEvidence(BaseModel):  # Phase 2
    type: Literal["link"]
    provider: Literal["chatgpt", "claude"]
    url: HttpUrl

Evidence = TextEvidence  # add LinkEvidence later via union
```

## Anti-Gaming

- **Duplicate input across students**: Hash `student_input`, check for duplicates server-side. Reject with "This submission was already submitted by another student."
- **Same student re-submitting**: UNIQUE constraint on (user_id, chapter_slug, lesson_slug).
- **Flat XP**: All submissions get same XP. Score Card scores in the AI response are the quality signal.

## Backend

### Tech Stack (existing)

FastAPI + SQLModel + PostgreSQL (asyncpg) + Redis. JWT auth from SSO.

### New Table

```sql
CREATE TABLE exercise_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL REFERENCES users(id),
  chapter_slug TEXT NOT NULL,
  lesson_slug TEXT NOT NULL,
  evidence JSONB NOT NULL,
  scores JSONB,
  feedback TEXT,
  evidence_hash TEXT NOT NULL,
  xp_earned INTEGER DEFAULT 50,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, chapter_slug, lesson_slug),
  UNIQUE(evidence_hash)
);
```

### New Endpoint

`POST /api/v1/exercise/submit`

```json
// Request
{
  "chapter_slug": "01-asking-better-questions",
  "lesson_slug": "01-prediction-lock",
  "evidence": {
    "type": "text",
    "provider": "chatgpt",
    "student_input": "I am a student... Here are my responses: 1. Will AI...",
    "ai_output": "Baseline Assessment Evaluation... Score Card... 4.6/10"
  },
  "feedback": "The scenario was harder than expected"
}

// Response
{
  "submitted": true,
  "already_submitted": false,
  "xp_earned": 50,
  "total_xp": 537,
  "scores": {
    "independent_thinking": 5,
    "critical_evaluation": 5,
    "reasoning_depth": 4,
    "originality": 5,
    "self_awareness": 4,
    "average": 4.6
  },
  "streak": {"current": 5, "longest": 12}
}
```

### Processing Flow (follows existing lesson/complete pattern)

1. UPSERT user from JWT
2. RESOLVE chapter_slug → chapter_id
3. Validate evidence (Pydantic discriminated union)
4. Compute evidence_hash (SHA256 of student_input), check dedup
5. Auto-extract Thinking Score Card scores from ai_output via regex
6. INSERT exercise_submission (ON CONFLICT DO NOTHING)
7. INSERT lesson_completion (marks lesson as complete)
8. UPSERT activity_day
9. CALCULATE streak
10. UPDATE user_progress (XP + 50, activity, streak)
11. COMMIT + invalidate cache + refresh leaderboard

### Score Auto-Extraction

```python
import re

def extract_scores(ai_output: str) -> dict | None:
    pattern = r"(Independent Thinking|Critical Evaluation|Reasoning Depth|Originality|Self-Awareness)[:\s]+(\d+)/10"
    matches = dict(re.findall(pattern, ai_output))
    if len(matches) >= 5:
        scores = {k.lower().replace(" ", "_"): int(v) for k, v in matches.items()}
        scores["average"] = round(sum(scores.values()) / len(scores), 1)
        return scores
    return None
```

## Frontend

### Lesson Metadata Detection

When lesson frontmatter contains `submission` field, render SubmissionDialog instead of Mark as Complete:

```yaml
submission:
  type: "ai-check"
  accept: ["text"]
  providers: ["chatgpt", "claude", "gemini", "grok", "claude-code", "cowork"]
  default_provider: "chatgpt"
  xp_bonus: 50
```

### Component: SubmissionDialog

New Docusaurus theme component at `apps/learn-app/src/theme/SubmissionDialog/`

**Props**: reads `submission` from frontmatter via Docusaurus page context

**States**:

1. Not submitted → Button: "Submit Your AI Check — 50 XP"
2. Dialog open → Form with provider dropdown + two textareas + feedback
3. Submitting → Loading spinner
4. Submitted → Green checkmark, "Submitted", scores displayed read-only
5. Error → Validation error or duplicate message

### Component Tree

```
SubmissionDialog
├── SubmitButton (trigger)
├── Dialog (modal)
│   ├── ProviderSelect (dropdown)
│   ├── StudentInputArea (textarea, required)
│   ├── AIOutputArea (textarea, required)
│   ├── FeedbackArea (textarea, optional)
│   └── SubmitAction (button + XP badge)
└── SubmittedView (read-only, post-submit)
    ├── ScoreCard (extracted scores)
    └── ProviderBadge
```

## Content-API

### Pass-through

Add `submit_exercise()` to existing `ProgressClient`:

```python
async def submit_exercise(self, token: str, data: dict) -> dict:
    return await self._post("/api/v1/exercise/submit", token, data)
```

Expose via content-api endpoint:

```
POST /api/v1/content/exercise/submit
```

## Content

Add `submission` field to all 40 Part 0 exercise lesson files (mechanical):

```yaml
submission:
  type: "ai-check"
  accept: ["text"]
  providers: ["chatgpt", "claude", "gemini", "grok", "claude-code", "cowork"]
  default_provider: "chatgpt"
  xp_bonus: 50
```

## Files Affected

| Area         | Files                                                  | Changes                                                  |
| ------------ | ------------------------------------------------------ | -------------------------------------------------------- |
| Progress API | `apps/progress-api/models/`                            | New ExerciseSubmission SQLModel                          |
| Progress API | `apps/progress-api/routes/`                            | New exercise router                                      |
| Progress API | `apps/progress-api/services/`                          | Score extraction, hash dedup                             |
| Progress API | `apps/progress-api/tests/`                             | TDD: endpoint tests, dedup tests, score extraction tests |
| Content API  | `apps/content-api/`                                    | ProgressClient.submit_exercise()                         |
| Content API  | `apps/content-api/tests/`                              | TDD: pass-through tests                                  |
| Learn App    | `apps/learn-app/src/theme/SubmissionDialog/`           | New React component                                      |
| Learn App    | `apps/learn-app/src/theme/SubmissionDialog/__tests__/` | TDD: component tests                                     |
| Content      | 40 lesson files in Part 0                              | Add submission frontmatter                               |

## Success Criteria

- [ ] Student can submit student_input + ai_output per exercise
- [ ] Provider dropdown with 6 options, defaults to ChatGPT
- [ ] Duplicate student_input rejected across students
- [ ] Thinking Score Card scores auto-extracted from ai_output
- [ ] XP awarded on first submission (50 XP)
- [ ] Submission is one-time (cannot re-submit)
- [ ] Optional feedback stored
- [ ] "Mark as Complete" replaced by "Submit Your AI Check" on lessons with submission metadata
- [ ] Works with existing auth flow (JWT from SSO)
- [ ] All tests pass (TDD approach)
