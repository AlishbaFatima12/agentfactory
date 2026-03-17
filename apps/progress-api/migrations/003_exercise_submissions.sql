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
    CONSTRAINT uq_exercise_evidence_hash UNIQUE (evidence_hash, chapter_slug, lesson_slug)
);

CREATE INDEX IF NOT EXISTS ix_exercise_submissions_user
    ON exercise_submissions (user_id);
