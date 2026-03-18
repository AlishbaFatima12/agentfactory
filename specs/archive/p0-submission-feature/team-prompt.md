# Exercise Submission Feature — Team Prompt

## How to use

Paste the prompt below into a Claude Code session with agent teams enabled.
Branch: `feat/p0-exercise-submission`

Before running:

1. Ensure `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` in settings.json
2. Recommended: `claude --teammate-mode in-process`
3. Budget: 5 teammate sessions
4. Read spec first: `specs/p0-submission-feature/spec.md`

---

## The Prompt

````
Create an agent team to implement the Part 0 Exercise Submission feature.

IMPORTANT: This MUST be an agent team (https://code.claude.com/docs/en/agent-teams),
NOT subagents. Use TeamCreate to create the team. Spawn teammates — do NOT use the
Agent tool or spawn subagents.

## Spec

Read the full spec at: specs/p0-submission-feature/spec.md

## Branch

You are on branch: feat/p0-exercise-submission
All work happens on this branch. Commit after each phase.

## What This Feature Does

Students submit their AI Check conversations (student input + AI evaluation) for
Part 0 exercises. Backend stores evidence as JSONB, auto-extracts Thinking Score
Card scores, awards XP. Frontend shows a SubmissionDialog component on lessons
with `submission:` frontmatter.

## Team Structure: 3-Phase Pipeline (5 Teammates)

You are the team lead. You coordinate. You do NOT write code yourself.
Use the shared task list to track all work. Enforce phase ordering via task dependencies.

### Phase 1: Architect (BLOCKS everything else)

**Task: "Architect — design implementation plan"**
Spawn a teammate named "architect". Use Opus model. Require plan approval.

Teammate prompt for architect:

"You are the architect teammate for the Exercise Submission feature.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:
1. specs/p0-submission-feature/spec.md (full spec)
2. apps/progress-api/ — understand existing patterns:
   - models/ (SQLModel definitions)
   - routes/ (FastAPI routers, especially lesson.py and quiz.py)
   - services/engine/ (XP calculation, badge evaluation, streak calculation)
   - tests/ (test patterns, fixtures, conftest.py)
3. apps/content-api/ — understand ProgressClient pattern
4. apps/learn-app/src/theme/ — understand existing Docusaurus theme components

YOUR DELIVERABLES (write all to specs/p0-submission-feature/):

1. implementation-plan.md — Detailed plan:
   - DB model (SQLModel class mirroring existing patterns)
   - Router (endpoint following quiz.py/lesson.py patterns)
   - Service functions (score extraction, hash computation)
   - Test plan (TDD: which tests to write FIRST, before implementation)
   - Frontend component structure
   - Content-API pass-through
   - Content frontmatter schema

2. api-contract.md — Request/response schemas:
   - POST /api/v1/exercise/submit (request + response + error cases)
   - Pydantic models for Evidence discriminated union

3. test-plan.md — TDD test specifications:
   - Unit tests: score extraction regex, hash computation, evidence validation
   - Integration tests: submit endpoint (happy path, dedup, idempotency, XP)
   - Frontend tests: component rendering, form validation, submit flow
   - List exact test function names and what each asserts

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'ARCHITECT DONE — [file list]'"

### Phase 2: Test Engineer (depends on Phase 1, BLOCKS Phase 3)

After architect completes, spawn this teammate.

**Task: "Test Engineer — write all test files first (TDD red phase)"**
Spawn a teammate named "test-engineer". Use Opus model.

Teammate prompt for test-engineer:

"You are the test-engineer teammate for the Exercise Submission feature.
You are part of an agent team — communicate via messages to the team lead.
TDD APPROACH: You write tests FIRST. They should all FAIL (red phase).
The backend and frontend engineers will make them pass (green phase).

READ IN ORDER:
1. specs/p0-submission-feature/spec.md
2. specs/p0-submission-feature/test-plan.md (architect's test plan)
3. specs/p0-submission-feature/api-contract.md (request/response schemas)
4. apps/progress-api/tests/conftest.py (existing fixtures, DB setup)
5. apps/progress-api/tests/ (existing test patterns — match their style)

YOUR DELIVERABLES:

1. apps/progress-api/tests/test_exercise_submit.py
   - Test happy path submission (valid evidence, XP awarded, scores extracted)
   - Test idempotency (same user, same lesson = already_submitted: true)
   - Test cross-student dedup (same student_input hash = rejected)
   - Test score auto-extraction from ai_output text
   - Test invalid evidence (missing fields, wrong provider)
   - Test lesson also marked as complete
   - Test streak and activity_day updated

2. apps/progress-api/tests/test_score_extraction.py
   - Unit tests for the regex score extractor
   - Test with real ChatGPT output format
   - Test with real Claude output format
   - Test with missing/partial scores (returns None)
   - Test with malformed text

3. apps/content-api/tests/test_exercise_submit.py (if content-api has tests)
   - Test pass-through to progress-api

Use existing test fixtures (async client, test DB, test user JWT).
Follow the exact patterns from existing test files.

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'TESTS DONE — [file list, test count]'"

### Phase 3: Backend + Frontend + Content (ALL 3 parallel, depend on Phase 2)

After test-engineer completes, spawn ALL 3 teammates simultaneously.

---

**Task: "Backend Engineer — implement progress-api changes"**
Spawn teammate "backend". Use Opus model.

Teammate prompt:

"You are the backend engineer teammate for the Exercise Submission feature.
You are part of an agent team — communicate via messages to the team lead.
TDD APPROACH: Tests already exist and FAIL. Your job is to make them PASS.

READ IN ORDER:
1. specs/p0-submission-feature/spec.md
2. specs/p0-submission-feature/implementation-plan.md
3. specs/p0-submission-feature/api-contract.md
4. apps/progress-api/tests/test_exercise_submit.py (the tests you must pass)
5. apps/progress-api/tests/test_score_extraction.py
6. apps/progress-api/models/ (existing models — match patterns)
7. apps/progress-api/routes/quiz.py (reference for new endpoint)
8. apps/progress-api/services/engine/ (XP, badges, streaks)

YOUR DELIVERABLES:

1. apps/progress-api/models/exercise_submission.py
   - ExerciseSubmission SQLModel
   - Evidence Pydantic models (discriminated union)

2. apps/progress-api/routes/exercise.py
   - POST /api/v1/exercise/submit endpoint
   - Follow the exact transaction pattern from quiz.py

3. apps/progress-api/services/engine/score_extraction.py
   - extract_scores(ai_output: str) -> dict | None
   - compute_evidence_hash(evidence: dict) -> str

4. Register router in apps/progress-api/main.py

After implementing, run the tests:
  cd apps/progress-api && python -m pytest tests/test_exercise_submit.py tests/test_score_extraction.py -v

All tests must PASS. If any fail, fix your code until they pass.

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'BACKEND DONE — [test results]'"

---

**Task: "Frontend Engineer — implement SubmissionDialog component"**
Spawn teammate "frontend". Use Opus model.

Teammate prompt:

"You are the frontend engineer teammate for the Exercise Submission feature.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:
1. specs/p0-submission-feature/spec.md (UI section)
2. specs/p0-submission-feature/implementation-plan.md (component structure)
3. apps/learn-app/src/theme/ (existing theme components — match patterns)
4. apps/learn-app/src/components/ (existing components)
5. apps/learn-app/package.json (available dependencies)

YOUR DELIVERABLES:

1. apps/learn-app/src/theme/SubmissionDialog/index.tsx
   - SubmissionDialog component
   - Provider dropdown (ChatGPT default, Claude, Gemini, Grok, Claude Code, Cowork)
   - Two textareas: student_input (required) + ai_output (required)
   - Feedback textarea (optional, 500 char max)
   - Submit button with XP badge
   - 5 states: not-submitted, dialog-open, submitting, submitted, error
   - Post-submit: display extracted scores read-only

2. apps/learn-app/src/theme/SubmissionDialog/styles.module.css
   - Match existing learn-app design system

3. Integration: Hook into the existing lesson page to replace Mark as Complete
   when frontmatter has submission: field. Check how DocPageActions or similar
   components detect frontmatter and render conditionally.

Do NOT add phantom imports. Check that all imports resolve.
Use the existing API client patterns for the submit POST request.

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'FRONTEND DONE — [file list]'"

---

**Task: "Content Engineer — add submission frontmatter to 40 lessons"**
Spawn teammate "content". Use Opus model.

Teammate prompt:

"You are the content engineer teammate for the Exercise Submission feature.
You are part of an agent team — communicate via messages to the team lead.

YOUR TASK: Add submission frontmatter to all 40 Part 0 exercise lesson files.

The frontmatter to add (insert after the existing frontmatter, before ---):

```yaml
submission:
  type: 'ai-check'
  accept: ['text']
  providers: ['chatgpt', 'claude', 'gemini', 'grok', 'claude-code', 'cowork']
  default_provider: 'chatgpt'
  xp_bonus: 50
```

FILES TO UPDATE (40 exercise files — NOT READMEs, NOT quizzes, NOT thinking-baseline):

Find all exercise lesson files:
  find apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/ -name '*.md' \
    -not -name 'README.md' -not -name '*quiz*' -not -name '*summary*' \
    -not -name 'thinking-baseline.md' -not -path '*/11-thinking-portfolio/*' \
    | sort

These are the 40 exercise files across chapters 01-10.

For each file:
1. Read it
2. Find the closing --- of the YAML frontmatter
3. Insert the submission block just before that ---
4. Write the file

Also add submission to thinking-baseline.md (it's an exercise too — 41 files total).

Do NOT add submission to:
- README.md files
- Quiz files
- Summary files
- Portfolio/growth-map/instructor-guide files in 11-thinking-portfolio/

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'CONTENT DONE — [file count] files updated'"

---

## Team Lead Coordination Rules

YOU ARE THE LEAD. Follow these rules strictly:

1. Create the team FIRST using TeamCreate
2. Create ALL tasks upfront with proper dependencies:
   - Phase 1 task: no dependencies
   - Phase 2 task: depends on Phase 1
   - Phase 3 tasks (all 3): each depends on Phase 2
3. Spawn architect FIRST. Wait for 'ARCHITECT DONE'
4. Review architect's plan before approving (plan approval mode)
5. After architect, spawn test-engineer. Wait for 'TESTS DONE'
6. After test-engineer, spawn backend + frontend + content simultaneously
7. WAIT for ALL 3 to report done
8. Do NOT write ANY code yourself — you are the coordinator only
9. After all 5 report done, run verification:
   - Run full test suite: cd apps/progress-api && python -m pytest tests/ -v
   - Check frontend builds: pnpm nx build learn-app
   - Count content files updated: grep -r 'submission:' apps/learn-app/docs/00-Prelude/ | wc -l
   - Report results
10. Commit all changes with descriptive message, push to branch

## Model Preferences

- Architect: Opus (reads full codebase, designs contracts)
- Test Engineer: Opus (writes comprehensive TDD tests)
- Backend: Opus (must match existing patterns precisely)
- Frontend: Opus (component work)
- Content: Opus (mechanical but needs accuracy)

## Anti-Patterns to Avoid

- Do NOT use the Agent tool or spawn subagents — this is a TEAM with TEAMMATES
- Do NOT write code yourself — delegate everything to teammates
- Do NOT spawn Phase 3 before Phase 2 completes (tests must exist before implementation)
- Do NOT skip test verification after backend reports done
- Do NOT approve architect's plan without reviewing the API contract
````

---

## Design Rationale

### Why TDD (test-engineer before backend)?

The progress-api has a well-established test suite. Writing tests first:

- Locks the API contract before implementation diverges
- Backend engineer has a clear "done" signal (all tests pass)
- Prevents the "it works but I forgot edge cases" pattern

### Why 5 teammates not 3?

- Architect must be separate (designs contracts everyone depends on)
- Test engineer must be separate (TDD: tests before code)
- Backend/Frontend/Content are independent tracks with zero file overlap
- Combining backend + test engineer would break the red-green cycle

### Why content as a separate teammate?

40 files is mechanical but error-prone. A dedicated teammate with
a clear file list and exit criteria prevents partial updates.
