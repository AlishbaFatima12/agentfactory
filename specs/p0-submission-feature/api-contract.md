# Exercise Submission — API Contract

## Endpoint

```
POST /api/v1/exercise/submit
```

Content-API pass-through:

```
POST /api/v1/content/exercise/submit
```

---

## Request Schema

### ExerciseSubmitRequest

```python
from typing import Literal
from pydantic import BaseModel, Field


class TextEvidence(BaseModel):
    """Text-based evidence (Phase 1). Discriminated union member."""
    type: Literal["text"]
    provider: Literal["chatgpt", "claude", "gemini", "grok", "claude-code", "cowork"]
    student_input: str = Field(min_length=1, max_length=25000)
    ai_output: str = Field(min_length=1, max_length=25000)


# Future: LinkEvidence for Phase 2
# class LinkEvidence(BaseModel):
#     type: Literal["link"]
#     provider: Literal["chatgpt", "claude"]
#     url: HttpUrl

# Phase 1: only TextEvidence
Evidence = TextEvidence


class ExerciseSubmitRequest(BaseModel):
    """Request body for POST /api/v1/exercise/submit."""
    chapter_slug: str = Field(min_length=1)
    lesson_slug: str = Field(min_length=1)
    evidence: Evidence
    feedback: str | None = Field(default=None, max_length=500)
```

### Example Request

```json
{
  "chapter_slug": "01-asking-better-questions",
  "lesson_slug": "01-prediction-lock",
  "evidence": {
    "type": "text",
    "provider": "chatgpt",
    "student_input": "I am a student completing the Prediction Lock exercise. Here are my predictions:\n1. Will AI replace software developers within 5 years? My prediction: No, but...",
    "ai_output": "## Baseline Assessment Evaluation\n\nThank you for sharing your predictions...\n\n## Thinking Score Card\n\n| Dimension | Score |\n|---|---|\n| Independent Thinking | 5/10 |\n| Critical Evaluation | 5/10 |\n| Reasoning Depth | 4/10 |\n| Originality | 5/10 |\n| Self-Awareness | 4/10 |\n\n**Average: 4.6/10**"
  },
  "feedback": "The scenario was harder than expected"
}
```

---

## Response Schema

### ExerciseSubmitResponse

```python
from pydantic import BaseModel
from .quiz import StreakInfo


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
```

### Example Response — Success (first submission)

```json
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
  "streak": {
    "current": 5,
    "longest": 12
  }
}
```

### Example Response — Already Submitted (idempotent)

```json
{
  "submitted": true,
  "already_submitted": true,
  "xp_earned": 0,
  "total_xp": 537,
  "scores": {
    "independent_thinking": 5,
    "critical_evaluation": 5,
    "reasoning_depth": 4,
    "originality": 5,
    "self_awareness": 4,
    "average": 4.6
  },
  "streak": {
    "current": 5,
    "longest": 12
  }
}
```

---

## Error Cases

### 409 Conflict — Duplicate Evidence (cross-student)

Another student already submitted the same `student_input` text.

```json
{
  "error_code": "DUPLICATE_EVIDENCE",
  "message": "This submission was already submitted by another student."
}
```

**Detection**: SHA-256 hash of `student_input.strip().lower()` matches existing `evidence_hash` row where `user_id != current_user.id`.

### 422 Unprocessable Entity — Validation Error

Standard FastAPI/Pydantic validation. Triggers:

| Field                    | Validation                       | Error                                       |
| ------------------------ | -------------------------------- | ------------------------------------------- |
| `chapter_slug`           | `min_length=1`                   | "String should have at least 1 character"   |
| `lesson_slug`            | `min_length=1`                   | "String should have at least 1 character"   |
| `evidence.type`          | `Literal["text"]`                | "Input should be 'text'"                    |
| `evidence.provider`      | `Literal[...]`                   | "Input should be 'chatgpt', 'claude', ..."  |
| `evidence.student_input` | `min_length=1, max_length=25000` | Length validation                           |
| `evidence.ai_output`     | `min_length=1, max_length=25000` | Length validation                           |
| `feedback`               | `max_length=500`                 | "String should have at most 500 characters" |

```json
{
  "detail": [
    {
      "type": "string_too_short",
      "loc": ["body", "evidence", "student_input"],
      "msg": "String should have at least 1 character",
      "input": ""
    }
  ]
}
```

### 401 Unauthorized — Missing/Invalid Auth

```json
{
  "detail": "Missing Authorization header"
}
```

### 503 Service Unavailable — Progress API Down (content-api only)

```json
{
  "detail": "Progress tracking service not configured"
}
```

---

## Content-API Pass-Through Contract

The content-api acts as a transparent proxy. Its schemas are simplified (no Pydantic evidence union — just `dict[str, Any]`):

### Content-API Request

```python
class ExerciseSubmitRequest(BaseModel):
    chapter_slug: str
    lesson_slug: str
    evidence: dict[str, Any]
    feedback: str | None = Field(default=None, max_length=500)
```

### Content-API Response

```python
class ExerciseSubmitResponse(BaseModel):
    submitted: bool = False
    already_submitted: bool = False
    xp_earned: int = 0
    total_xp: int = 0
    scores: dict[str, Any] | None = None
    streak: dict[str, int] | None = None
```

The progress-api handles all validation (evidence type, provider, field lengths). Content-API just forwards the request body and returns the response.

---

## Hash Computation

```python
import hashlib

def compute_evidence_hash(student_input: str) -> str:
    """SHA-256 of normalized student input."""
    normalized = student_input.strip().lower()
    return hashlib.sha256(normalized.encode("utf-8")).hexdigest()
```

**Normalization**: `strip().lower()` before hashing. This catches:

- Leading/trailing whitespace differences
- Case differences from copy-paste

**Not caught** (intentionally): Minor rephrasing, added punctuation. These are legitimate different submissions.

---

## Score Extraction

```python
import re

def extract_scores(ai_output: str) -> dict | None:
    """Extract 5-dimension Thinking Score Card from AI output.

    Returns dict with snake_case keys + average, or None if < 5 dimensions found.
    Pattern matches: "Independent Thinking: 5/10" or "Independent Thinking  5/10"
    """
    pattern = r"(Independent Thinking|Critical Evaluation|Reasoning Depth|Originality|Self-Awareness)[:\s]+(\d+)/10"
    matches = dict(re.findall(pattern, ai_output, re.IGNORECASE))
    if len(matches) < 5:
        return None
    scores = {k.lower().replace(" ", "_"): int(v) for k, v in matches.items()}
    scores["average"] = round(sum(scores.values()) / len(scores), 1)
    return scores
```

Scores are best-effort. If the AI output doesn't follow the expected Score Card format, `scores` will be `null` in the response. The submission still succeeds — scores are informational, not required.
