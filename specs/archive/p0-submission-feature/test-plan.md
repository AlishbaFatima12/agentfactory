# Exercise Submission — TDD Test Plan

## Test Structure

```
apps/progress-api/tests/
├── unit/
│   └── test_exercise_scoring.py      # Pure function tests (write FIRST)
└── integration/
    └── test_exercise_submit.py       # Endpoint tests (write SECOND)

apps/content-api/tests/
└── test_exercise_passthrough.py      # Content-API pass-through tests

apps/learn-app/src/theme/SubmissionDialog/
└── __tests__/
    └── SubmissionDialog.test.tsx     # Frontend component tests
```

---

## Phase 1: Unit Tests (write FIRST — no DB needed)

### File: `apps/progress-api/tests/unit/test_exercise_scoring.py`

These test pure functions with zero dependencies. Run instantly, no Docker required.

#### Score Extraction Tests

```python
def test_extract_scores_standard_format():
    """Standard Score Card format with all 5 dimensions returns complete dict."""
    # Input: AI output with "Independent Thinking: 5/10" etc.
    # Assert: returns {"independent_thinking": 5, "critical_evaluation": 5,
    #                  "reasoning_depth": 4, "originality": 5,
    #                  "self_awareness": 4, "average": 4.6}

def test_extract_scores_table_format():
    """Score Card in markdown table format (| Dimension | Score |) extracts correctly."""
    # Input: AI output with "| Independent Thinking | 5/10 |" format
    # Assert: same result as standard format

def test_extract_scores_missing_dimension():
    """Only 4 of 5 dimensions present returns None."""
    # Input: AI output missing "Self-Awareness"
    # Assert: returns None

def test_extract_scores_no_scores():
    """AI output with no Score Card at all returns None."""
    # Input: generic AI response without scores
    # Assert: returns None

def test_extract_scores_partial_scores():
    """Only 3 dimensions returns None (threshold is 5)."""
    # Input: AI output with only 3 score dimensions
    # Assert: returns None

def test_extract_scores_boundary_values():
    """Scores at boundaries (0/10 and 10/10) extract correctly."""
    # Input: AI output with scores at 0 and 10
    # Assert: scores contain 0 and 10 respectively

def test_extract_scores_case_insensitive():
    """Dimension names in different cases still extract."""
    # Input: "independent thinking: 5/10" (lowercase)
    # Assert: returns valid scores dict

def test_extract_scores_extra_whitespace():
    """Extra whitespace between dimension and score still matches."""
    # Input: "Independent Thinking   5/10"
    # Assert: returns valid scores dict

def test_extract_scores_average_calculation():
    """Average is correctly computed as mean of 5 dimensions, rounded to 1 decimal."""
    # Input: scores 7, 8, 6, 9, 5 → average = 7.0
    # Assert: scores["average"] == 7.0

def test_extract_scores_average_rounds_correctly():
    """Average rounds to 1 decimal place."""
    # Input: scores 7, 8, 6, 9, 6 → average = 7.2
    # Assert: scores["average"] == 7.2
```

#### Hash Computation Tests

```python
def test_compute_evidence_hash_deterministic():
    """Same input produces same hash."""
    # Input: "Hello World"
    # Assert: hash1 == hash2

def test_compute_evidence_hash_different_inputs():
    """Different inputs produce different hashes."""
    # Input: "Hello World" vs "Hello World!"
    # Assert: hash1 != hash2

def test_compute_evidence_hash_strips_whitespace():
    """Leading/trailing whitespace is stripped before hashing."""
    # Input: "  Hello World  " vs "Hello World"
    # Assert: hash1 == hash2

def test_compute_evidence_hash_case_insensitive():
    """Input is lowercased before hashing."""
    # Input: "Hello World" vs "hello world"
    # Assert: hash1 == hash2

def test_compute_evidence_hash_preserves_internal_whitespace():
    """Internal whitespace differences produce different hashes."""
    # Input: "Hello World" vs "Hello  World"
    # Assert: hash1 != hash2

def test_compute_evidence_hash_is_sha256():
    """Hash is a valid 64-character hex SHA-256 digest."""
    # Input: any string
    # Assert: len(hash) == 64, all chars in [0-9a-f]
```

#### Evidence Validation Tests

```python
def test_text_evidence_valid():
    """Valid TextEvidence passes Pydantic validation."""
    # Input: {"type": "text", "provider": "chatgpt", "student_input": "...", "ai_output": "..."}
    # Assert: no ValidationError

def test_text_evidence_invalid_provider():
    """Unknown provider raises ValidationError."""
    # Input: {"type": "text", "provider": "openai", ...}
    # Assert: raises ValidationError

def test_text_evidence_empty_student_input():
    """Empty student_input raises ValidationError."""
    # Input: {"type": "text", "provider": "chatgpt", "student_input": "", "ai_output": "..."}
    # Assert: raises ValidationError

def test_text_evidence_exceeds_max_length():
    """student_input > 25000 chars raises ValidationError."""
    # Input: student_input with 25001 chars
    # Assert: raises ValidationError

def test_text_evidence_ai_output_empty():
    """Empty ai_output raises ValidationError."""
    # Input: valid student_input, empty ai_output
    # Assert: raises ValidationError

def test_feedback_max_length():
    """Feedback > 500 chars raises ValidationError."""
    # Input: valid evidence, feedback with 501 chars
    # Assert: raises ValidationError

def test_feedback_none_allowed():
    """Null feedback is valid."""
    # Input: valid evidence, feedback=None
    # Assert: no ValidationError
```

**Total unit tests: 23**

---

## Phase 2: Integration Tests (write SECOND — requires Docker/PostgreSQL)

### File: `apps/progress-api/tests/integration/test_exercise_submit.py`

Uses `conftest.py` fixtures: `client` (AsyncClient with test DB), `test_session`.

#### Happy Path

```python
@pytest.mark.asyncio
async def test_exercise_submit_happy_path(client: AsyncClient):
    """First submission returns submitted=True, xp_earned=50, scores extracted."""
    # POST with valid evidence containing Score Card
    # Assert: status 200
    # Assert: data["submitted"] is True
    # Assert: data["already_submitted"] is False
    # Assert: data["xp_earned"] == 50
    # Assert: data["total_xp"] >= 50
    # Assert: data["scores"]["independent_thinking"] == expected
    # Assert: data["streak"]["current"] >= 1

@pytest.mark.asyncio
async def test_exercise_submit_no_scores_in_output(client: AsyncClient):
    """Submission with no Score Card in ai_output still succeeds, scores=null."""
    # POST with ai_output that has no score pattern
    # Assert: status 200
    # Assert: data["submitted"] is True
    # Assert: data["scores"] is None
    # Assert: data["xp_earned"] == 50
```

#### Idempotency

```python
@pytest.mark.asyncio
async def test_exercise_submit_idempotent(client: AsyncClient):
    """Same user, same exercise: second call returns already_submitted=True, xp_earned=0."""
    # First submission
    # Assert: r1 status 200, data["already_submitted"] is False, xp_earned=50
    # Second submission (same user, chapter, lesson, different evidence text)
    # Assert: r2 status 200, data["already_submitted"] is True, xp_earned=0
    # Assert: r2 data["scores"] matches first submission's scores (not overwritten)
```

#### Dedup (Cross-Student)

```python
@pytest.mark.asyncio
async def test_exercise_submit_duplicate_evidence_rejected(client: AsyncClient):
    """Different user with same student_input gets 409."""
    # User A submits evidence with student_input "My answers are..."
    # Assert: status 200
    # User B submits same student_input
    # Assert: status 409
    # Assert: response body contains "DUPLICATE_EVIDENCE"

@pytest.mark.asyncio
async def test_exercise_submit_duplicate_case_insensitive(client: AsyncClient):
    """Dedup is case-insensitive."""
    # User A: student_input = "My Answers"
    # User B: student_input = "my answers"
    # Assert: User B gets 409

@pytest.mark.asyncio
async def test_exercise_submit_duplicate_whitespace_normalized(client: AsyncClient):
    """Dedup ignores leading/trailing whitespace."""
    # User A: student_input = "My Answers"
    # User B: student_input = "  My Answers  "
    # Assert: User B gets 409
```

#### XP and Progress

```python
@pytest.mark.asyncio
async def test_exercise_submit_awards_50_xp(client: AsyncClient):
    """First submission awards exactly 50 XP."""
    # Submit exercise
    # Assert: xp_earned == 50, total_xp includes the 50

@pytest.mark.asyncio
async def test_exercise_submit_marks_lesson_complete(client: AsyncClient):
    """Submitting exercise also marks the lesson as complete."""
    # Submit exercise for chapter_slug="ch1", lesson_slug="l1"
    # Then POST /api/v1/lesson/complete for same chapter+lesson
    # Assert: already_completed=True (was completed by the exercise submission)

@pytest.mark.asyncio
async def test_exercise_submit_updates_streak(client: AsyncClient):
    """Submission records activity and updates streak."""
    # Submit exercise
    # Assert: streak.current >= 1
```

#### Provider Variants

```python
@pytest.mark.asyncio
async def test_exercise_submit_all_providers(client: AsyncClient):
    """Each of the 6 providers is accepted."""
    # For each provider in ["chatgpt", "claude", "gemini", "grok", "claude-code", "cowork"]:
    #   POST with unique user and unique student_input
    #   Assert: status 200
```

#### Validation Errors

```python
@pytest.mark.asyncio
async def test_validation_empty_chapter_slug(client: AsyncClient):
    """Empty chapter_slug returns 422."""

@pytest.mark.asyncio
async def test_validation_empty_lesson_slug(client: AsyncClient):
    """Empty lesson_slug returns 422."""

@pytest.mark.asyncio
async def test_validation_empty_student_input(client: AsyncClient):
    """Empty student_input returns 422."""

@pytest.mark.asyncio
async def test_validation_empty_ai_output(client: AsyncClient):
    """Empty ai_output returns 422."""

@pytest.mark.asyncio
async def test_validation_invalid_provider(client: AsyncClient):
    """Invalid provider returns 422."""

@pytest.mark.asyncio
async def test_validation_feedback_too_long(client: AsyncClient):
    """Feedback > 500 chars returns 422."""

@pytest.mark.asyncio
async def test_validation_student_input_too_long(client: AsyncClient):
    """student_input > 25000 chars returns 422."""
```

**Total integration tests: 17**

---

## Phase 3: Content-API Pass-Through Tests

### File: `apps/content-api/tests/test_exercise_passthrough.py`

These test the content-api's proxy behavior. They mock the ProgressClient.

```python
@pytest.mark.asyncio
async def test_exercise_submit_passthrough_success(client, mock_progress):
    """Content-API forwards to progress-api and returns response."""
    # Mock progress_client.submit_exercise to return success payload
    # POST /api/v1/content/exercise/submit
    # Assert: response matches mocked payload

@pytest.mark.asyncio
async def test_exercise_submit_passthrough_progress_down(client, mock_progress_none):
    """Content-API returns 503 when progress-api not configured."""
    # Mock get_progress_client to return None
    # POST /api/v1/content/exercise/submit
    # Assert: status 503

@pytest.mark.asyncio
async def test_exercise_submit_passthrough_auth_forwarded(client, mock_progress):
    """Authorization header is forwarded to progress-api."""
    # POST with Authorization header
    # Assert: mock_progress.submit_exercise called with auth_token matching header
```

**Total content-api tests: 3**

---

## Phase 4: Frontend Component Tests

### File: `apps/learn-app/src/theme/SubmissionDialog/__tests__/SubmissionDialog.test.tsx`

Using Vitest + React Testing Library (matches existing learn-app test setup).

```typescript
describe("SubmissionDialog", () => {
  test("renders submit button when submission frontmatter present", () => {
    // Render with submission prop
    // Assert: "Submit Your AI Check" button visible

  test("does not render when no submission frontmatter", () => {
    // Render without submission prop
    // Assert: component returns null

  test("opens dialog on button click", () => {
    // Click submit button
    // Assert: dialog with provider dropdown + textareas visible

  test("provider dropdown has 6 options", () => {
    // Open dialog
    // Assert: dropdown contains chatgpt, claude, gemini, grok, claude-code, cowork

  test("defaults to chatgpt provider", () => {
    // Open dialog
    // Assert: dropdown value is "chatgpt"

  test("submit button disabled when required fields empty", () => {
    // Open dialog, leave textareas empty
    // Assert: submit button disabled

  test("submit button enabled when required fields filled", () => {
    // Open dialog, fill student_input and ai_output
    // Assert: submit button enabled

  test("shows loading state during submission", () => {
    // Fill form, click submit, mock slow API
    // Assert: spinner visible, form disabled

  test("shows scores after successful submission", () => {
    // Mock API returning scores
    // Assert: score card visible with correct values

  test("shows submitted state with green checkmark", () => {
    // After successful submission
    // Assert: "Submitted" text visible, submit button replaced

  test("shows error for duplicate submission", () => {
    // Mock API returning 409
    // Assert: duplicate error message visible

  test("enforces feedback max length", () => {
    // Type > 500 chars in feedback
    // Assert: input truncated or validation shown

  test("enforces student_input max length", () => {
    // Type > 25000 chars
    // Assert: validation shown
});
```

**Total frontend tests: 13**

---

## Test Execution Order (TDD)

| Step | Tests                                    | Dependencies          | Runner                                  |
| ---- | ---------------------------------------- | --------------------- | --------------------------------------- |
| 1    | `test_exercise_scoring.py` (23 tests)    | None — pure functions | `pytest tests/unit/`                    |
| 2    | `test_exercise_submit.py` (17 tests)     | Docker (PostgreSQL)   | `pytest tests/integration/ -k exercise` |
| 3    | `test_exercise_passthrough.py` (3 tests) | None (mocked)         | `pytest tests/` in content-api          |
| 4    | `SubmissionDialog.test.tsx` (13 tests)   | None (mocked API)     | `vitest` in learn-app                   |

**Total: 56 tests**

### TDD Red Phase

All test files are written FIRST with the expected assertions. Running them before implementation should produce:

- Unit tests: `ImportError` (modules don't exist yet)
- Integration tests: `ImportError` + table doesn't exist
- Frontend tests: `Error: Cannot find module './SubmissionDialog'`

The backend engineer implements until all 43 backend tests pass (23 unit + 17 integration + 3 content-api). The frontend engineer implements until all 13 frontend tests pass.
