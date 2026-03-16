"""Exercise submission endpoint."""

from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from ..core.auth import CurrentUser, get_current_user
from ..core.database import get_session
from ..schemas.exercise import ExerciseSubmitRequest, ExerciseSubmitResponse
from ..services.exercise import submit_exercise

router = APIRouter()


@router.post("/exercise/submit", response_model=ExerciseSubmitResponse)
async def exercise_submit(
    request: ExerciseSubmitRequest,
    user: CurrentUser = Depends(get_current_user),
    session: AsyncSession = Depends(get_session),
) -> ExerciseSubmitResponse:
    """Submit exercise evidence.

    Processes score extraction, dedup checking, XP award,
    and marks the lesson as complete.
    """
    return await submit_exercise(session, user, request)
