-- Migration: Exercise Submissions (Production-Safe)
-- Handles both fresh install AND existing table from dev/testing.
-- Safe to run multiple times — all statements are idempotent.

-- 1. Create table if it doesn't exist
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

-- 2. Fix constraint if table existed with old global evidence_hash unique
-- (dev/testing may have created UNIQUE(evidence_hash) instead of
--  UNIQUE(evidence_hash, chapter_slug, lesson_slug))
DO $$
BEGIN
    -- Check if old-style global constraint exists (without chapter/lesson columns)
    IF EXISTS (
        SELECT 1 FROM pg_constraint c
        JOIN pg_class t ON c.conrelid = t.oid
        WHERE t.relname = 'exercise_submissions'
          AND c.conname = 'uq_exercise_evidence_hash'
          AND array_length(c.conkey, 1) = 1  -- old constraint has only 1 column
    ) THEN
        ALTER TABLE exercise_submissions DROP CONSTRAINT uq_exercise_evidence_hash;
        ALTER TABLE exercise_submissions ADD CONSTRAINT uq_exercise_evidence_hash
            UNIQUE (evidence_hash, chapter_slug, lesson_slug);
        RAISE NOTICE 'Migrated evidence_hash constraint to per-lesson scope';
    END IF;
END $$;

-- 3. Create index (idempotent)
CREATE INDEX IF NOT EXISTS ix_exercise_submissions_user
    ON exercise_submissions (user_id);

-- 4. Clean up any dev test data (optional — remove this block in production if you want to keep it)
-- DELETE FROM exercise_submissions WHERE user_id LIKE 'dev-%' OR user_id LIKE 'tdd-%' OR user_id LIKE 'manual-%';
