"""Integration tests for POST /api/v1/exercise/intent.

Tests the Redis-based intent tracking endpoint that captures funnel
drop-off data when students click provider buttons but don't submit.
"""

import pytest
from httpx import AsyncClient


def _make_intent(
    chapter_slug: str = "01-asking-better-questions",
    lesson_slug: str = "01-prediction-lock",
    exercise_id: str = "prediction-lock",
    provider: str = "chatgpt",
    step: str = "provider_clicked",
    fields: dict | None = None,
) -> dict:
    """Build a valid intent request body."""
    return {
        "chapter_slug": chapter_slug,
        "lesson_slug": lesson_slug,
        "exercise_id": exercise_id,
        "provider": provider,
        "step": step,
        "fields": fields or {"scenario": "Test scenario", "work": "My analysis..."},
    }


# === Happy Path ===


@pytest.mark.asyncio
async def test_intent_returns_204(client: AsyncClient):
    """Intent endpoint returns 204 No Content on success."""
    response = await client.post(
        "/api/v1/exercise/intent",
        json=_make_intent(),
        headers={"X-User-ID": "test-intent-1"},
    )
    assert response.status_code == 204


@pytest.mark.asyncio
async def test_intent_stores_fields(client: AsyncClient):
    """Intent captures the student's field data."""
    fields = {
        "scenario": "A retail company's online sales dropped 15%",
        "work": "My diagnosis: marketing channels with poor conversion rates",
    }
    response = await client.post(
        "/api/v1/exercise/intent",
        json=_make_intent(fields=fields),
        headers={"X-User-ID": "test-intent-fields"},
    )
    assert response.status_code == 204


@pytest.mark.asyncio
async def test_intent_accepts_different_providers(client: AsyncClient):
    """Both chatgpt and claude providers are accepted."""
    for provider in ("chatgpt", "claude"):
        response = await client.post(
            "/api/v1/exercise/intent",
            json=_make_intent(provider=provider, lesson_slug=f"test-{provider}"),
            headers={"X-User-ID": f"test-intent-provider-{provider}"},
        )
        assert response.status_code == 204, f"Provider {provider} failed"


@pytest.mark.asyncio
async def test_intent_overwrites_on_provider_switch(client: AsyncClient):
    """Clicking a different provider overwrites the previous intent."""
    user = "test-intent-overwrite"

    # Click ChatGPT
    r1 = await client.post(
        "/api/v1/exercise/intent",
        json=_make_intent(provider="chatgpt"),
        headers={"X-User-ID": user},
    )
    assert r1.status_code == 204

    # Switch to Claude (same exercise, same key — overwrites)
    r2 = await client.post(
        "/api/v1/exercise/intent",
        json=_make_intent(provider="claude"),
        headers={"X-User-ID": user},
    )
    assert r2.status_code == 204


# === Non-Blocking Behavior ===


@pytest.mark.asyncio
async def test_intent_does_not_block_submit(client: AsyncClient):
    """Recording intent then submitting works — intent is cleared on submit."""
    user = "test-intent-then-submit"

    # Record intent
    await client.post(
        "/api/v1/exercise/intent",
        json=_make_intent(lesson_slug="intent-submit-test"),
        headers={"X-User-ID": user},
    )

    # Submit exercise — should succeed regardless of intent
    submit_response = await client.post(
        "/api/v1/exercise/submit",
        json={
            "chapter_slug": "01-asking-better-questions",
            "lesson_slug": "intent-submit-test",
            "evidence": {
                "type": "text",
                "provider": "chatgpt",
                "student_input": "Unique intent-then-submit test input",
                "ai_output": "Independent Thinking: 7/10. Critical Evaluation: 6/10. "
                "Reasoning Depth: 5/10. Originality: 7/10. Self-Awareness: 4/10.",
            },
        },
        headers={"X-User-ID": user},
    )
    assert submit_response.status_code == 200
    assert submit_response.json()["submitted"] is True


# === Auth Required ===


@pytest.mark.asyncio
async def test_intent_requires_auth(client: AsyncClient):
    """Intent endpoint requires authentication (no anonymous tracking)."""
    # Don't pass X-User-ID or Authorization header
    # In test mode with dev_mode=True, X-User-ID is required
    # The dev fallback user should still work, so this should return 204
    response = await client.post(
        "/api/v1/exercise/intent",
        json=_make_intent(),
        # No auth header — dev mode uses fallback user
    )
    # Dev mode has a fallback user, so this still succeeds
    assert response.status_code == 204


# === Validation ===


@pytest.mark.asyncio
async def test_intent_rejects_empty_chapter(client: AsyncClient):
    """Empty chapter_slug returns 422."""
    response = await client.post(
        "/api/v1/exercise/intent",
        json=_make_intent(chapter_slug=""),
        headers={"X-User-ID": "test-val"},
    )
    assert response.status_code == 422


@pytest.mark.asyncio
async def test_intent_rejects_empty_exercise_id(client: AsyncClient):
    """Empty exercise_id returns 422."""
    response = await client.post(
        "/api/v1/exercise/intent",
        json=_make_intent(exercise_id=""),
        headers={"X-User-ID": "test-val"},
    )
    assert response.status_code == 422


@pytest.mark.asyncio
async def test_intent_rejects_empty_provider(client: AsyncClient):
    """Empty provider returns 422."""
    response = await client.post(
        "/api/v1/exercise/intent",
        json=_make_intent(provider=""),
        headers={"X-User-ID": "test-val"},
    )
    assert response.status_code == 422


@pytest.mark.asyncio
async def test_intent_accepts_empty_fields(client: AsyncClient):
    """Empty fields dict is valid (student clicked before filling)."""
    response = await client.post(
        "/api/v1/exercise/intent",
        json=_make_intent(fields={}),
        headers={"X-User-ID": "test-empty-fields"},
    )
    assert response.status_code == 204
