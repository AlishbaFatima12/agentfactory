"""Unit tests for exercise submission pure functions.

Tests score extraction, evidence hash computation, and Pydantic validation.
All pure functions — no DB, no Docker, runs instantly.

TDD RED PHASE: These tests will fail with ImportError until implementation exists.
"""

import pytest


# === Score Extraction Tests ===


class TestExtractScoresStandardFormat:
    """Extract scores from standard 'Dimension: N/10' format."""

    def test_standard_format_all_five(self):
        """Standard Score Card format with all 5 dimensions returns complete dict."""
        from progress_api.services.exercise import extract_scores

        ai_output = """
## Thinking Score Card

Independent Thinking: 5/10
Critical Evaluation: 5/10
Reasoning Depth: 4/10
Originality: 5/10
Self-Awareness: 4/10

Average: 4.6/10
"""
        result = extract_scores(ai_output)
        assert result is not None
        assert result["independent_thinking"] == 5
        assert result["critical_evaluation"] == 5
        assert result["reasoning_depth"] == 4
        assert result["originality"] == 5
        assert result["self_awareness"] == 4
        assert result["average"] == 4.6

    def test_table_format(self):
        """Score Card in markdown table format extracts correctly."""
        from progress_api.services.exercise import extract_scores

        ai_output = """
## Thinking Score Card

| Dimension | Score |
|---|---|
| Independent Thinking | 5/10 |
| Critical Evaluation | 5/10 |
| Reasoning Depth | 4/10 |
| Originality | 5/10 |
| Self-Awareness | 4/10 |
"""
        result = extract_scores(ai_output)
        assert result is not None
        assert result["independent_thinking"] == 5
        assert result["critical_evaluation"] == 5
        assert result["reasoning_depth"] == 4
        assert result["originality"] == 5
        assert result["self_awareness"] == 4

    def test_missing_one_dimension_returns_none(self):
        """Only 4 of 5 dimensions present returns None."""
        from progress_api.services.exercise import extract_scores

        ai_output = """
Independent Thinking: 5/10
Critical Evaluation: 5/10
Reasoning Depth: 4/10
Originality: 5/10
"""
        result = extract_scores(ai_output)
        assert result is None

    def test_no_scores_at_all_returns_none(self):
        """AI output with no Score Card at all returns None."""
        from progress_api.services.exercise import extract_scores

        ai_output = "Great work! You showed strong thinking skills."
        result = extract_scores(ai_output)
        assert result is None

    def test_only_three_dimensions_returns_none(self):
        """Only 3 dimensions returns None (threshold is 5)."""
        from progress_api.services.exercise import extract_scores

        ai_output = """
Independent Thinking: 5/10
Critical Evaluation: 5/10
Reasoning Depth: 4/10
"""
        result = extract_scores(ai_output)
        assert result is None

    def test_boundary_values_zero_and_ten(self):
        """Scores at boundaries (0/10 and 10/10) extract correctly."""
        from progress_api.services.exercise import extract_scores

        ai_output = """
Independent Thinking: 0/10
Critical Evaluation: 10/10
Reasoning Depth: 0/10
Originality: 10/10
Self-Awareness: 5/10
"""
        result = extract_scores(ai_output)
        assert result is not None
        assert result["independent_thinking"] == 0
        assert result["critical_evaluation"] == 10
        assert result["reasoning_depth"] == 0
        assert result["originality"] == 10
        assert result["self_awareness"] == 5

    def test_case_insensitive(self):
        """Dimension names in different cases still extract."""
        from progress_api.services.exercise import extract_scores

        ai_output = """
independent thinking: 5/10
critical evaluation: 6/10
reasoning depth: 7/10
originality: 8/10
self-awareness: 9/10
"""
        result = extract_scores(ai_output)
        assert result is not None
        assert result["independent_thinking"] == 5
        assert result["originality"] == 8

    def test_extra_whitespace(self):
        """Extra whitespace between dimension and score still matches."""
        from progress_api.services.exercise import extract_scores

        ai_output = """
Independent Thinking   5/10
Critical Evaluation   6/10
Reasoning Depth   7/10
Originality   8/10
Self-Awareness   9/10
"""
        result = extract_scores(ai_output)
        assert result is not None
        assert result["independent_thinking"] == 5


class TestExtractScoresAverage:
    """Average calculation correctness."""

    def test_average_calculation(self):
        """Average is correctly computed as mean of 5 dimensions, rounded to 1 decimal."""
        from progress_api.services.exercise import extract_scores

        ai_output = """
Independent Thinking: 7/10
Critical Evaluation: 8/10
Reasoning Depth: 6/10
Originality: 9/10
Self-Awareness: 5/10
"""
        result = extract_scores(ai_output)
        assert result is not None
        # (7 + 8 + 6 + 9 + 5) / 5 = 7.0
        assert result["average"] == 7.0

    def test_average_rounds_to_one_decimal(self):
        """Average rounds to 1 decimal place."""
        from progress_api.services.exercise import extract_scores

        ai_output = """
Independent Thinking: 7/10
Critical Evaluation: 8/10
Reasoning Depth: 6/10
Originality: 9/10
Self-Awareness: 6/10
"""
        result = extract_scores(ai_output)
        assert result is not None
        # (7 + 8 + 6 + 9 + 6) / 5 = 7.2
        assert result["average"] == 7.2


# === Hash Computation Tests ===


class TestComputeEvidenceHash:
    """SHA-256 hash computation for dedup."""

    def test_deterministic(self):
        """Same input produces same hash."""
        from progress_api.services.exercise import compute_evidence_hash

        hash1 = compute_evidence_hash("Hello World")
        hash2 = compute_evidence_hash("Hello World")
        assert hash1 == hash2

    def test_different_inputs_different_hashes(self):
        """Different inputs produce different hashes."""
        from progress_api.services.exercise import compute_evidence_hash

        hash1 = compute_evidence_hash("Hello World")
        hash2 = compute_evidence_hash("Hello World!")
        assert hash1 != hash2

    def test_strips_whitespace(self):
        """Leading/trailing whitespace is stripped before hashing."""
        from progress_api.services.exercise import compute_evidence_hash

        hash1 = compute_evidence_hash("  Hello World  ")
        hash2 = compute_evidence_hash("Hello World")
        assert hash1 == hash2

    def test_case_insensitive(self):
        """Input is lowercased before hashing."""
        from progress_api.services.exercise import compute_evidence_hash

        hash1 = compute_evidence_hash("Hello World")
        hash2 = compute_evidence_hash("hello world")
        assert hash1 == hash2

    def test_preserves_internal_whitespace(self):
        """Internal whitespace differences produce different hashes."""
        from progress_api.services.exercise import compute_evidence_hash

        hash1 = compute_evidence_hash("Hello World")
        hash2 = compute_evidence_hash("Hello  World")
        assert hash1 != hash2

    def test_is_sha256_format(self):
        """Hash is a valid 64-character hex SHA-256 digest."""
        from progress_api.services.exercise import compute_evidence_hash

        result = compute_evidence_hash("test input")
        assert len(result) == 64
        assert all(c in "0123456789abcdef" for c in result)


# === Evidence Validation Tests ===


class TestTextEvidenceValidation:
    """Pydantic validation for TextEvidence and ExerciseSubmitRequest."""

    def test_valid_text_evidence(self):
        """Valid TextEvidence passes Pydantic validation."""
        from progress_api.schemas.exercise import TextEvidence

        evidence = TextEvidence(
            type="text",
            provider="chatgpt",
            student_input="My answers are...",
            ai_output="Your evaluation shows...",
        )
        assert evidence.provider == "chatgpt"
        assert evidence.type == "text"

    def test_invalid_provider_rejected(self):
        """Unknown provider raises ValidationError."""
        from pydantic import ValidationError

        from progress_api.schemas.exercise import TextEvidence

        with pytest.raises(ValidationError):
            TextEvidence(
                type="text",
                provider="openai",
                student_input="My answers are...",
                ai_output="Your evaluation shows...",
            )

    def test_empty_student_input_rejected(self):
        """Empty student_input raises ValidationError."""
        from pydantic import ValidationError

        from progress_api.schemas.exercise import TextEvidence

        with pytest.raises(ValidationError):
            TextEvidence(
                type="text",
                provider="chatgpt",
                student_input="",
                ai_output="Your evaluation shows...",
            )

    def test_student_input_exceeds_max_length(self):
        """student_input > 25000 chars raises ValidationError."""
        from pydantic import ValidationError

        from progress_api.schemas.exercise import TextEvidence

        with pytest.raises(ValidationError):
            TextEvidence(
                type="text",
                provider="chatgpt",
                student_input="x" * 25001,
                ai_output="Your evaluation shows...",
            )

    def test_empty_ai_output_rejected(self):
        """Empty ai_output raises ValidationError."""
        from pydantic import ValidationError

        from progress_api.schemas.exercise import TextEvidence

        with pytest.raises(ValidationError):
            TextEvidence(
                type="text",
                provider="chatgpt",
                student_input="My answers are...",
                ai_output="",
            )

    def test_feedback_max_length(self):
        """Feedback > 500 chars raises ValidationError."""
        from pydantic import ValidationError

        from progress_api.schemas.exercise import ExerciseSubmitRequest, TextEvidence

        evidence = TextEvidence(
            type="text",
            provider="chatgpt",
            student_input="My answers are...",
            ai_output="Your evaluation shows...",
        )
        with pytest.raises(ValidationError):
            ExerciseSubmitRequest(
                chapter_slug="ch1",
                lesson_slug="l1",
                evidence=evidence,
                feedback="x" * 501,
            )

    def test_feedback_none_allowed(self):
        """Null feedback is valid."""
        from progress_api.schemas.exercise import ExerciseSubmitRequest, TextEvidence

        evidence = TextEvidence(
            type="text",
            provider="chatgpt",
            student_input="My answers are...",
            ai_output="Your evaluation shows...",
        )
        request = ExerciseSubmitRequest(
            chapter_slug="ch1",
            lesson_slug="l1",
            evidence=evidence,
            feedback=None,
        )
        assert request.feedback is None
