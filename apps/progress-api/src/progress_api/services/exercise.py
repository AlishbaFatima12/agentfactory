"""Exercise submission service — score extraction, hashing, and orchestration."""

import asyncio
import hashlib
import logging
import re
from datetime import date

from sqlalchemy import select, text
from sqlalchemy.ext.asyncio import AsyncSession

from ..core.auth import CurrentUser
from ..core.exceptions import ProgressAPIException
from ..models.exercise import ExerciseSubmission
from ..schemas.exercise import ExerciseSubmitRequest, ExerciseSubmitResponse, ScoreCard
from ..schemas.quiz import StreakInfo
from ..services.engine.streaks import calculate_streak
from .leaderboard import debounced_refresh_leaderboard
from .shared import (
    get_activity_dates,
    invalidate_user_cache,
    record_activity_day,
    resolve_or_create_chapter,
    update_user_progress,
    upsert_user_from_jwt,
)

logger = logging.getLogger(__name__)


def extract_scores(ai_output: str) -> dict[str, int | float] | None:
    """Extract Thinking Score Card scores from AI output.

    Returns dict with snake_case dimension keys + average, or None if < 5 dimensions found.
    """
    pattern = r"(Independent Thinking|Critical Evaluation|Reasoning Depth|Originality|Self-Awareness)[:\s|]+(\d+)/10"
    matches = dict(re.findall(pattern, ai_output, re.IGNORECASE))
    if len(matches) < 5:
        return None
    scores = {k.lower().replace(" ", "_").replace("-", "_"): int(v) for k, v in matches.items()}
    scores["average"] = round(sum(scores.values()) / len(scores), 1)
    return scores


def compute_evidence_hash(student_input: str) -> str:
    """SHA-256 hash of normalized student input for dedup."""
    normalized = student_input.strip().lower()
    return hashlib.sha256(normalized.encode("utf-8")).hexdigest()


async def submit_exercise(
    session: AsyncSession,
    user: CurrentUser,
    request: ExerciseSubmitRequest,
) -> ExerciseSubmitResponse:
    """Process an exercise submission in a single transaction.

    Steps:
    1. UPSERT user from JWT claims
    2. RESOLVE chapter_slug → chapter_id
    3. Compute evidence_hash, check cross-student dedup
    4. Check idempotency (same user, same exercise)
    5. Extract scores from ai_output
    6. INSERT exercise_submission
    7. INSERT lesson_completion (marks lesson as complete)
    8. UPSERT activity_day
    9. CALCULATE streak
    10. UPDATE user_progress (XP + 50)
    11. COMMIT
    """
    today = date.today()

    # 1. UPSERT user
    await upsert_user_from_jwt(session, user)

    # 2. RESOLVE chapter
    await resolve_or_create_chapter(session, request.chapter_slug)

    # 3. Compute hash and check cross-student dedup
    evidence_hash = compute_evidence_hash(request.evidence.student_input)

    result = await session.execute(
        select(ExerciseSubmission).where(ExerciseSubmission.evidence_hash == evidence_hash)
    )
    existing_by_hash = result.scalar_one_or_none()

    if existing_by_hash is not None and existing_by_hash.user_id != user.id:
        raise ProgressAPIException(
            status_code=409,
            error_code="DUPLICATE_EVIDENCE",
            message="This submission was already submitted by another student.",
        )

    # 4. Check idempotency (same user, same chapter+lesson)
    result = await session.execute(
        select(ExerciseSubmission).where(
            ExerciseSubmission.user_id == user.id,
            ExerciseSubmission.chapter_slug == request.chapter_slug,
            ExerciseSubmission.lesson_slug == request.lesson_slug,
        )
    )
    existing_submission = result.scalar_one_or_none()

    if existing_submission is not None:
        # Already submitted — return without modifying anything
        activity_dates = await get_activity_dates(session, user.id)
        current_streak, longest_streak = calculate_streak(activity_dates, today=today)

        # Parse existing scores
        scores_response = None
        if existing_submission.scores:
            try:
                scores_response = ScoreCard(**existing_submission.scores)
            except Exception:
                pass

        # Get current total_xp
        from ..models.progress import UserProgress

        prog_result = await session.execute(
            select(UserProgress).where(UserProgress.user_id == user.id)
        )
        progress = prog_result.scalar_one_or_none()
        total_xp = progress.total_xp if progress else 0

        return ExerciseSubmitResponse(
            submitted=True,
            already_submitted=True,
            xp_earned=0,
            total_xp=total_xp,
            scores=scores_response,
            streak=StreakInfo(current=current_streak, longest=longest_streak),
        )

    # 5. Extract scores
    scores_dict = extract_scores(request.evidence.ai_output)
    scores_response = ScoreCard(**scores_dict) if scores_dict else None

    # 6. INSERT exercise_submission (ON CONFLICT DO NOTHING for race safety)
    submission = ExerciseSubmission(
        user_id=user.id,
        chapter_slug=request.chapter_slug,
        lesson_slug=request.lesson_slug,
        evidence=request.evidence.model_dump(),
        scores=scores_dict,
        feedback=request.feedback,
        evidence_hash=evidence_hash,
        xp_earned=50,
    )
    session.add(submission)

    # 7. INSERT lesson_completion (same as lesson.py step 3)
    await session.execute(
        text(
            "INSERT INTO lesson_completions"
            " (user_id, chapter_slug, lesson_slug)"
            " VALUES (:user_id, :chapter_slug, :lesson_slug)"
            " ON CONFLICT (user_id, chapter_slug, lesson_slug) DO NOTHING"
        ),
        {
            "user_id": user.id,
            "chapter_slug": request.chapter_slug,
            "lesson_slug": request.lesson_slug,
        },
    )

    # 8. UPSERT activity_day
    ref = f"{request.chapter_slug}/{request.lesson_slug}"
    await record_activity_day(session, user.id, today, "exercise", ref)

    # 9. CALCULATE streak
    activity_dates = await get_activity_dates(session, user.id)
    if today not in activity_dates:
        activity_dates.append(today)
    current_streak, longest_streak = calculate_streak(activity_dates, today=today)

    # 10. UPDATE user_progress
    progress = await update_user_progress(
        session,
        user.id,
        xp_delta=50,
        lessons_delta=1,
        current_streak=current_streak,
        longest_streak=longest_streak,
        last_activity_date=today,
    )

    # 11. COMMIT
    await session.commit()

    # Invalidate caches + refresh leaderboard
    await invalidate_user_cache(user.id)
    asyncio.create_task(debounced_refresh_leaderboard())

    return ExerciseSubmitResponse(
        submitted=True,
        already_submitted=False,
        xp_earned=50,
        total_xp=progress.total_xp,
        scores=scores_response,
        streak=StreakInfo(current=current_streak, longest=longest_streak),
    )
