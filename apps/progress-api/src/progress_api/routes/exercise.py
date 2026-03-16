"""Exercise submission and intent tracking endpoints."""

import json
import logging
import time

from fastapi import APIRouter, Depends, HTTPException, Request
from pydantic import BaseModel, Field
from sqlalchemy.ext.asyncio import AsyncSession

from ..core.auth import CurrentUser, get_current_user, get_optional_user
from ..core.database import get_session
from ..core.redis import get_redis
from ..schemas.exercise import ExerciseSubmitRequest, ExerciseSubmitResponse
from ..services.exercise import submit_exercise

logger = logging.getLogger(__name__)

router = APIRouter()

RATE_LIMIT_MAX = 10  # max submissions per window
RATE_LIMIT_WINDOW_SECS = 60  # 1 minute window
INTENT_TTL_SECS = 60 * 60 * 24 * 60  # 60 days


async def _check_rate_limit(user_id: str) -> None:
    """Simple Redis-based per-user rate limiter for exercise submissions."""
    redis = get_redis()
    if redis is None:
        return  # Skip rate limiting if Redis is unavailable

    key = f"rate_limit:exercise_submit:{user_id}"
    try:
        count = await redis.incr(key)
        if count == 1:
            await redis.expire(key, RATE_LIMIT_WINDOW_SECS)
        if count > RATE_LIMIT_MAX:
            ttl = await redis.ttl(key)
            raise HTTPException(
                status_code=429,
                detail=f"Too many submissions. Try again in {ttl} seconds.",
            )
    except HTTPException:
        raise
    except Exception as e:
        logger.warning("Rate limit check failed: %s", e)


async def _clear_intent(user_id: str, chapter_slug: str, lesson_slug: str) -> None:
    """Remove intent from Redis after successful submission."""
    redis = get_redis()
    if redis is None:
        return
    try:
        key = f"intent:{user_id}:{chapter_slug}/{lesson_slug}"
        await redis.delete(key)
    except Exception as e:
        logger.warning("Failed to clear intent: %s", e)


@router.post("/exercise/submit", response_model=ExerciseSubmitResponse)
async def exercise_submit(
    request: ExerciseSubmitRequest,
    user: CurrentUser = Depends(get_current_user),
    session: AsyncSession = Depends(get_session),
) -> ExerciseSubmitResponse:
    """Submit exercise evidence.

    Processes score extraction, dedup checking, XP award,
    and marks the lesson as complete.
    Rate limited to 10 submissions per minute per user.
    """
    await _check_rate_limit(user.id)
    result = await submit_exercise(session, user, request)
    # Clear intent on successful submission — student completed the funnel
    await _clear_intent(user.id, request.chapter_slug, request.lesson_slug)
    return result


# ── Intent Tracking ──


class ExerciseIntentRequest(BaseModel):
    """Tracks when a student clicks a provider button (mid-flow signal)."""

    chapter_slug: str = Field(min_length=1, max_length=200)
    lesson_slug: str = Field(min_length=1, max_length=200)
    exercise_id: str = Field(min_length=1, max_length=200)
    provider: str = Field(min_length=1, max_length=50)
    step: str = Field(default="provider_clicked", max_length=50)
    fields: dict[str, str] = Field(default_factory=dict)


@router.post("/exercise/intent", status_code=204)
async def exercise_intent(
    body: ExerciseIntentRequest,
    request: Request,
    user: CurrentUser = Depends(get_current_user),
) -> None:
    """Record that a student clicked a provider button (funnel tracking).

    Stored in Redis with 60-day TTL. Cleared on successful submit.
    Captures: user fields, provider, device type, timestamp.
    """
    redis = get_redis()
    if redis is None:
        return  # Silently skip if Redis is unavailable

    # Parse device from User-Agent
    ua = request.headers.get("user-agent", "")
    device = "mobile" if any(k in ua.lower() for k in ("mobile", "android", "iphone", "ipad")) else "desktop"

    key = f"intent:{user.id}:{body.chapter_slug}/{body.lesson_slug}"
    intent_data = {
        "exercise_id": body.exercise_id,
        "provider": body.provider,
        "step": body.step,
        "device": device,
        "timestamp": str(int(time.time())),
        "fields": json.dumps(body.fields),
    }

    try:
        await redis.hset(key, mapping=intent_data)
        await redis.expire(key, INTENT_TTL_SECS)
    except Exception as e:
        logger.warning("Failed to record intent: %s", e)
