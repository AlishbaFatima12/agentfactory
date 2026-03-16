"""Exercise submission endpoint."""

import logging

from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.ext.asyncio import AsyncSession

from ..core.auth import CurrentUser, get_current_user
from ..core.database import get_session
from ..core.redis import get_redis
from ..schemas.exercise import ExerciseSubmitRequest, ExerciseSubmitResponse
from ..services.exercise import submit_exercise

logger = logging.getLogger(__name__)

router = APIRouter()

RATE_LIMIT_MAX = 10  # max submissions per window
RATE_LIMIT_WINDOW_SECS = 60  # 1 minute window


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
    return await submit_exercise(session, user, request)
