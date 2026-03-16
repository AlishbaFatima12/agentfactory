"""Integration tests for POST /api/v1/exercise/submit.

Uses conftest.py fixtures: client (AsyncClient with test DB), test_session.
Matches existing quiz_submit and lesson_complete test patterns.

TDD RED PHASE: These tests will fail with ImportError until implementation exists.
"""

import pytest
from httpx import AsyncClient


# --- Helpers ---

SCORE_CARD_AI_OUTPUT = """
## Baseline Assessment Evaluation

Thank you for sharing your predictions. Here is your evaluation.

## Thinking Score Card

| Dimension | Score |
|---|---|
| Independent Thinking | 5/10 |
| Critical Evaluation | 5/10 |
| Reasoning Depth | 4/10 |
| Originality | 5/10 |
| Self-Awareness | 4/10 |

**Average: 4.6/10**
"""

NO_SCORE_AI_OUTPUT = "Great work! You showed solid critical thinking skills overall."


def _make_payload(
    chapter_slug: str = "01-asking-better-questions",
    lesson_slug: str = "01-prediction-lock",
    provider: str = "chatgpt",
    student_input: str = "My predictions are...",
    ai_output: str = SCORE_CARD_AI_OUTPUT,
    feedback: str | None = None,
) -> dict:
    """Build a valid exercise submit request body."""
    return {
        "chapter_slug": chapter_slug,
        "lesson_slug": lesson_slug,
        "evidence": {
            "type": "text",
            "provider": provider,
            "student_input": student_input,
            "ai_output": ai_output,
        },
        "feedback": feedback,
    }


# === Happy Path ===


@pytest.mark.asyncio
async def test_exercise_submit_happy_path(client: AsyncClient):
    """First submission returns submitted=True, xp_earned=50, scores extracted."""
    response = await client.post(
        "/api/v1/exercise/submit",
        json=_make_payload(),
        headers={"X-User-ID": "test-exercise-1"},
    )
    assert response.status_code == 200
    data = response.json()

    assert data["submitted"] is True
    assert data["already_submitted"] is False
    assert data["xp_earned"] == 50
    assert data["total_xp"] >= 50
    assert data["scores"]["independent_thinking"] == 5
    assert data["scores"]["critical_evaluation"] == 5
    assert data["scores"]["reasoning_depth"] == 4
    assert data["scores"]["originality"] == 5
    assert data["scores"]["self_awareness"] == 4
    assert data["scores"]["average"] == 4.6
    assert data["streak"]["current"] >= 1


@pytest.mark.asyncio
async def test_exercise_submit_no_scores_in_output(client: AsyncClient):
    """Submission with no Score Card in ai_output still succeeds, scores=null."""
    response = await client.post(
        "/api/v1/exercise/submit",
        json=_make_payload(
            student_input="Unique no-score submission text",
            ai_output=NO_SCORE_AI_OUTPUT,
        ),
        headers={"X-User-ID": "test-exercise-noscore"},
    )
    assert response.status_code == 200
    data = response.json()

    assert data["submitted"] is True
    assert data["scores"] is None
    assert data["xp_earned"] == 50


# === Idempotency ===


@pytest.mark.asyncio
async def test_exercise_submit_idempotent(client: AsyncClient):
    """Same user, same exercise: second call returns already_submitted=True, xp_earned=0."""
    user_id = "test-exercise-idemp"
    payload = _make_payload(student_input="Idempotency test submission")

    # First submission
    r1 = await client.post(
        "/api/v1/exercise/submit",
        json=payload,
        headers={"X-User-ID": user_id},
    )
    assert r1.status_code == 200
    d1 = r1.json()
    assert d1["already_submitted"] is False
    assert d1["xp_earned"] == 50

    # Second submission — same user, same chapter+lesson, different evidence text
    r2 = await client.post(
        "/api/v1/exercise/submit",
        json=_make_payload(student_input="Different text for same exercise"),
        headers={"X-User-ID": user_id},
    )
    assert r2.status_code == 200
    d2 = r2.json()
    assert d2["already_submitted"] is True
    assert d2["xp_earned"] == 0


# === Cross-Student Dedup ===


@pytest.mark.asyncio
async def test_exercise_submit_duplicate_evidence_rejected(client: AsyncClient):
    """Different user with same student_input on same lesson gets 409."""
    shared_input = "Exact same submission text for dedup test"
    shared_lesson = "dedup-same-lesson"

    # User A submits
    r1 = await client.post(
        "/api/v1/exercise/submit",
        json=_make_payload(student_input=shared_input, lesson_slug=shared_lesson),
        headers={"X-User-ID": "test-dedup-user-a"},
    )
    assert r1.status_code == 200

    # User B submits same input on SAME lesson — should be rejected
    r2 = await client.post(
        "/api/v1/exercise/submit",
        json=_make_payload(student_input=shared_input, lesson_slug=shared_lesson),
        headers={"X-User-ID": "test-dedup-user-b"},
    )
    assert r2.status_code == 409
    assert "DUPLICATE_EVIDENCE" in r2.json().get("error_code", "")


@pytest.mark.asyncio
async def test_exercise_submit_same_input_different_lesson_allowed(client: AsyncClient):
    """Same student_input on different lessons is allowed (dedup is per-lesson)."""
    shared_input = "Cross-lesson dedup test input"

    r1 = await client.post(
        "/api/v1/exercise/submit",
        json=_make_payload(student_input=shared_input, lesson_slug="lesson-a"),
        headers={"X-User-ID": "test-cross-lesson-a"},
    )
    assert r1.status_code == 200

    r2 = await client.post(
        "/api/v1/exercise/submit",
        json=_make_payload(student_input=shared_input, lesson_slug="lesson-b"),
        headers={"X-User-ID": "test-cross-lesson-b"},
    )
    assert r2.status_code == 200  # Different lesson — allowed


@pytest.mark.asyncio
async def test_exercise_submit_duplicate_case_insensitive(client: AsyncClient):
    """Dedup is case-insensitive."""
    shared_lesson = "case-dedup-lesson"

    # User A: mixed case
    r1 = await client.post(
        "/api/v1/exercise/submit",
        json=_make_payload(student_input="My Unique Answers Here", lesson_slug=shared_lesson),
        headers={"X-User-ID": "test-case-user-a"},
    )
    assert r1.status_code == 200

    # User B: lowercase (same lesson — dedup catches it)
    r2 = await client.post(
        "/api/v1/exercise/submit",
        json=_make_payload(student_input="my unique answers here", lesson_slug=shared_lesson),
        headers={"X-User-ID": "test-case-user-b"},
    )
    assert r2.status_code == 409


@pytest.mark.asyncio
async def test_exercise_submit_duplicate_whitespace_normalized(client: AsyncClient):
    """Dedup ignores leading/trailing whitespace."""
    shared_lesson = "ws-dedup-lesson"

    # User A: clean input
    r1 = await client.post(
        "/api/v1/exercise/submit",
        json=_make_payload(student_input="Whitespace Dedup Test", lesson_slug=shared_lesson),
        headers={"X-User-ID": "test-ws-user-a"},
    )
    assert r1.status_code == 200

    # User B: same input with surrounding whitespace (same lesson)
    r2 = await client.post(
        "/api/v1/exercise/submit",
        json=_make_payload(student_input="  Whitespace Dedup Test  ", lesson_slug=shared_lesson),
        headers={"X-User-ID": "test-ws-user-b"},
    )
    assert r2.status_code == 409


# === XP and Progress ===


@pytest.mark.asyncio
async def test_exercise_submit_awards_50_xp(client: AsyncClient):
    """First submission awards exactly 50 XP."""
    response = await client.post(
        "/api/v1/exercise/submit",
        json=_make_payload(student_input="XP test unique submission"),
        headers={"X-User-ID": "test-exercise-xp"},
    )
    assert response.status_code == 200
    data = response.json()
    assert data["xp_earned"] == 50
    assert data["total_xp"] >= 50


@pytest.mark.asyncio
async def test_exercise_submit_marks_lesson_complete(client: AsyncClient):
    """Submitting exercise also marks the lesson as complete."""
    user_id = "test-exercise-complete"
    chapter = "01-asking-better-questions"
    lesson = "completion-test-lesson"

    # Submit exercise
    await client.post(
        "/api/v1/exercise/submit",
        json=_make_payload(
            chapter_slug=chapter,
            lesson_slug=lesson,
            student_input="Completion test unique submission",
        ),
        headers={"X-User-ID": user_id},
    )

    # Try marking the same lesson as complete via lesson/complete
    r2 = await client.post(
        "/api/v1/lesson/complete",
        json={
            "chapter_slug": chapter,
            "lesson_slug": lesson,
        },
        headers={"X-User-ID": user_id},
    )
    assert r2.status_code == 200
    assert r2.json()["already_completed"] is True


@pytest.mark.asyncio
async def test_exercise_submit_updates_streak(client: AsyncClient):
    """Submission records activity and updates streak."""
    response = await client.post(
        "/api/v1/exercise/submit",
        json=_make_payload(student_input="Streak test unique submission"),
        headers={"X-User-ID": "test-exercise-streak"},
    )
    assert response.status_code == 200
    data = response.json()
    assert data["streak"]["current"] >= 1


# === Provider Variants ===


@pytest.mark.asyncio
async def test_exercise_submit_all_providers(client: AsyncClient):
    """Each of the 6 providers is accepted."""
    providers = ["chatgpt", "claude", "gemini", "grok", "claude-code", "cowork"]

    for i, provider in enumerate(providers):
        response = await client.post(
            "/api/v1/exercise/submit",
            json=_make_payload(
                provider=provider,
                student_input=f"Provider test unique submission for {provider}",
                lesson_slug=f"provider-test-{i}",
            ),
            headers={"X-User-ID": f"test-provider-{provider}"},
        )
        assert response.status_code == 200, f"Provider {provider} failed with {response.status_code}"


# === Validation Errors ===


@pytest.mark.asyncio
async def test_validation_empty_chapter_slug(client: AsyncClient):
    """Empty chapter_slug returns 422."""
    response = await client.post(
        "/api/v1/exercise/submit",
        json=_make_payload(chapter_slug=""),
        headers={"X-User-ID": "test-user"},
    )
    assert response.status_code == 422


@pytest.mark.asyncio
async def test_validation_empty_lesson_slug(client: AsyncClient):
    """Empty lesson_slug returns 422."""
    response = await client.post(
        "/api/v1/exercise/submit",
        json=_make_payload(lesson_slug=""),
        headers={"X-User-ID": "test-user"},
    )
    assert response.status_code == 422


@pytest.mark.asyncio
async def test_validation_empty_student_input(client: AsyncClient):
    """Empty student_input returns 422."""
    response = await client.post(
        "/api/v1/exercise/submit",
        json=_make_payload(student_input=""),
        headers={"X-User-ID": "test-user"},
    )
    assert response.status_code == 422


@pytest.mark.asyncio
async def test_validation_empty_ai_output(client: AsyncClient):
    """Empty ai_output returns 422."""
    response = await client.post(
        "/api/v1/exercise/submit",
        json={
            "chapter_slug": "ch1",
            "lesson_slug": "l1",
            "evidence": {
                "type": "text",
                "provider": "chatgpt",
                "student_input": "valid input",
                "ai_output": "",
            },
        },
        headers={"X-User-ID": "test-user"},
    )
    assert response.status_code == 422


@pytest.mark.asyncio
async def test_validation_invalid_provider(client: AsyncClient):
    """Invalid provider returns 422."""
    response = await client.post(
        "/api/v1/exercise/submit",
        json=_make_payload(provider="openai"),
        headers={"X-User-ID": "test-user"},
    )
    assert response.status_code == 422


@pytest.mark.asyncio
async def test_validation_feedback_too_long(client: AsyncClient):
    """Feedback > 500 chars returns 422."""
    response = await client.post(
        "/api/v1/exercise/submit",
        json=_make_payload(feedback="x" * 501),
        headers={"X-User-ID": "test-user"},
    )
    assert response.status_code == 422


@pytest.mark.asyncio
async def test_validation_student_input_too_long(client: AsyncClient):
    """student_input > 25000 chars returns 422."""
    response = await client.post(
        "/api/v1/exercise/submit",
        json=_make_payload(student_input="x" * 25001),
        headers={"X-User-ID": "test-user"},
    )
    assert response.status_code == 422
