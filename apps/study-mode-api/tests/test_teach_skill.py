"""Tests for the teach_skill module."""

import os
from unittest.mock import patch

import pytest

from study_mode_api.fte.teach_skill import (
    LearnerProfile,
    ModelProvider,
    TeachingContext,
    build_teaching_skill_prompt,
    get_learner_profile,
)


class TestLearnerProfileMock:
    """Tests for LearnerProfile.mock() default generation."""

    def test_mock_returns_generic_defaults(self):
        """Should return generic defaults suitable for any learner."""
        profile = LearnerProfile.mock()

        assert profile.name == "there"  # For "Hi there!"
        assert profile.domain_name == "your field"
        assert profile.current_role == "professional"
        assert profile.industry == "technology"
        assert profile.ai_fluency_level == "beginner"
        assert profile.programming_level == "beginner"

    def test_mock_with_user_name(self):
        """Should use provided user_name."""
        profile = LearnerProfile.mock(user_name="Alice")

        assert profile.name == "Alice"

    def test_mock_uses_safe_defaults_for_beginners(self):
        """Should use beginner-friendly defaults."""
        profile = LearnerProfile.mock()

        # Code samples off by default (beginners don't need code)
        assert profile.include_code_samples is False
        # Encouraging tone for beginners
        assert profile.tone == "encouraging"
        # Simple language complexity
        assert profile.language_complexity == "simple"


class TestLearnerProfileFromApiResponse:
    """Tests for LearnerProfile.from_api_response() parsing."""

    def test_parses_full_profile(self):
        """Should parse complete API response correctly."""
        data = {
            "name": "John Doe",
            "expertise": {
                "domain": [
                    {"level": "intermediate", "domain_name": "finance", "is_primary": True}
                ],
                "programming": {"level": "advanced"},
                "ai_fluency": {"level": "intermediate"},
            },
            "professional_context": {
                "current_role": "Data Analyst",
                "industry": "banking",
                "tools_in_use": ["Python", "Excel"],
            },
            "communication": {
                "language_complexity": "technical",
                "preferred_structure": "example-first",
                "verbosity": "concise",
                "tone": "formal",
                "wants_check_in_questions": False,
            },
            "delivery": {
                "include_code_samples": True,
                "code_verbosity": "moderate",
            },
            "accessibility": {
                "screen_reader": True,
                "cognitive_load_preference": "reduced",
            },
        }

        profile = LearnerProfile.from_api_response(data)

        assert profile.name == "John Doe"
        assert profile.domain_level == "intermediate"
        assert profile.domain_name == "finance"
        assert profile.programming_level == "advanced"
        assert profile.ai_fluency_level == "intermediate"
        assert profile.current_role == "Data Analyst"
        assert profile.industry == "banking"
        assert profile.tools_in_use == ["Python", "Excel"]
        assert profile.language_complexity == "technical"
        assert profile.preferred_structure == "example-first"
        assert profile.verbosity == "concise"
        assert profile.tone == "formal"
        assert profile.wants_check_in_questions is False
        assert profile.include_code_samples is True
        assert profile.code_verbosity == "moderate"
        assert profile.screen_reader is True
        assert profile.cognitive_load_preference == "reduced"

    def test_handles_empty_data(self):
        """Should handle empty/minimal data with defaults."""
        data = {}

        profile = LearnerProfile.from_api_response(data)

        assert profile.name == "Student"
        assert profile.domain_level == "beginner"
        assert profile.domain_name == "their field"
        assert profile.programming_level == "beginner"
        assert profile.ai_fluency_level == "beginner"

    def test_handles_missing_sections(self):
        """Should handle missing sections gracefully."""
        data = {
            "name": "Partial User",
            # Missing expertise, professional_context, etc.
        }

        profile = LearnerProfile.from_api_response(data)

        assert profile.name == "Partial User"
        # Should use defaults for missing sections
        assert profile.domain_level == "beginner"
        assert profile.tools_in_use == []

    def test_selects_primary_domain(self):
        """Should select the domain marked as primary."""
        data = {
            "expertise": {
                "domain": [
                    {"level": "advanced", "domain_name": "secondary", "is_primary": False},
                    {"level": "beginner", "domain_name": "primary", "is_primary": True},
                ],
            },
        }

        profile = LearnerProfile.from_api_response(data)

        assert profile.domain_name == "primary"
        assert profile.domain_level == "beginner"

    def test_falls_back_to_first_domain_if_no_primary(self):
        """Should use first domain if none marked primary."""
        data = {
            "expertise": {
                "domain": [
                    {"level": "intermediate", "domain_name": "first"},
                    {"level": "advanced", "domain_name": "second"},
                ],
            },
        }

        profile = LearnerProfile.from_api_response(data)

        assert profile.domain_name == "first"
        assert profile.domain_level == "intermediate"


class TestBuildTeachingSkillPrompt:
    """Tests for build_teaching_skill_prompt() output validation."""

    def test_includes_student_name(self):
        """Should include student name in the prompt."""
        profile = LearnerProfile.mock(user_name="Alice")
        ctx = TeachingContext(
            profile=profile,
            lesson_title="Test Lesson",
            lesson_content="Some content",
        )

        prompt = build_teaching_skill_prompt(ctx)

        assert "Alice" in prompt
        assert "| Name | Alice |" in prompt

    def test_includes_lesson_title_and_content(self):
        """Should include lesson title and content."""
        profile = LearnerProfile.mock()
        ctx = TeachingContext(
            profile=profile,
            lesson_title="Introduction to AI Agents",
            lesson_content="AI agents are autonomous systems...",
        )

        prompt = build_teaching_skill_prompt(ctx)

        assert "Introduction to AI Agents" in prompt
        assert "AI agents are autonomous systems..." in prompt

    def test_first_message_includes_greeting(self):
        """Should include greeting instructions for first message."""
        profile = LearnerProfile.mock(user_name="Bob")
        ctx = TeachingContext(
            profile=profile,
            lesson_title="Test",
            lesson_content="Content",
            is_first_message=True,
        )

        prompt = build_teaching_skill_prompt(ctx)

        assert "THIS IS THE FIRST MESSAGE" in prompt
        assert 'Greeting: "Hi Bob!"' in prompt
        assert "Topic:" in prompt

    def test_follow_up_message_no_greeting(self):
        """Should NOT include greeting for follow-up messages."""
        profile = LearnerProfile.mock(user_name="Bob")
        ctx = TeachingContext(
            profile=profile,
            lesson_title="Test",
            lesson_content="Content",
            is_first_message=False,
        )

        prompt = build_teaching_skill_prompt(ctx)

        assert "THIS IS A FOLLOW-UP MESSAGE" in prompt
        assert "Do NOT repeat greeting" in prompt
        assert 'Greeting: "Hi Bob!"' not in prompt

    def test_adapts_to_ai_fluency_level(self):
        """Should include appropriate adaptation for AI fluency level."""
        profile = LearnerProfile.mock()
        profile.ai_fluency_level = "advanced"
        ctx = TeachingContext(
            profile=profile,
            lesson_title="Test",
            lesson_content="Content",
        )

        prompt = build_teaching_skill_prompt(ctx)

        assert "architecture, design tradeoffs, edge cases" in prompt

    def test_includes_accessibility_rules_for_screen_reader(self):
        """Should include accessibility rules when screen_reader is True."""
        profile = LearnerProfile.mock()
        profile.screen_reader = True
        ctx = TeachingContext(
            profile=profile,
            lesson_title="Test",
            lesson_content="Content",
        )

        prompt = build_teaching_skill_prompt(ctx)

        assert "Use clear headings" in prompt
        assert "Avoid visual-only references" in prompt

    def test_includes_cognitive_load_rules(self):
        """Should include cognitive load rules when preference is reduced."""
        profile = LearnerProfile.mock()
        profile.cognitive_load_preference = "reduced"
        ctx = TeachingContext(
            profile=profile,
            lesson_title="Test",
            lesson_content="Content",
        )

        prompt = build_teaching_skill_prompt(ctx)

        assert "Teach ONE idea only" in prompt
        assert "Keep responses shorter" in prompt

    def test_includes_tools_in_use(self):
        """Should include user's tools in the prompt."""
        profile = LearnerProfile.mock()
        profile.tools_in_use = ["Claude", "VS Code", "Docker"]
        ctx = TeachingContext(
            profile=profile,
            lesson_title="Test",
            lesson_content="Content",
        )

        prompt = build_teaching_skill_prompt(ctx)

        assert "Claude, VS Code, Docker" in prompt


class TestModelProvider:
    """Tests for ModelProvider singleton pattern."""

    def setup_method(self):
        """Reset singleton before each test."""
        ModelProvider.reset()

    def teardown_method(self):
        """Clean up after each test."""
        ModelProvider.reset()

    def test_reset_clears_instance(self):
        """Should clear cached instance on reset."""
        # Set a dummy instance
        ModelProvider._instance = "dummy"
        assert ModelProvider._instance is not None

        ModelProvider.reset()

        assert ModelProvider._instance is None

    @patch.dict(os.environ, {"GEMINI_API_KEY": ""}, clear=False)
    def test_raises_without_api_key(self):
        """Should raise ValueError if GEMINI_API_KEY not set."""
        # Ensure key is empty
        if "GEMINI_API_KEY" in os.environ:
            del os.environ["GEMINI_API_KEY"]

        with pytest.raises(ValueError, match="GEMINI_API_KEY"):
            ModelProvider.get_model()

    @patch("study_mode_api.fte.teach_skill.LitellmModel")
    @patch.dict(os.environ, {"GEMINI_API_KEY": "test-key"})
    def test_creates_model_with_api_key(self, mock_litellm):
        """Should create model with correct configuration."""
        ModelProvider.get_model()

        mock_litellm.assert_called_once_with(
            model="gemini/gemini-2.5-flash",
            api_key="test-key",
        )

    @patch("study_mode_api.fte.teach_skill.LitellmModel")
    @patch.dict(os.environ, {"GEMINI_API_KEY": "test-key"})
    def test_returns_same_instance(self, mock_litellm):
        """Should return the same instance on subsequent calls."""
        model1 = ModelProvider.get_model()
        model2 = ModelProvider.get_model()

        assert model1 is model2
        # Should only create once
        assert mock_litellm.call_count == 1


class TestGetLearnerProfile:
    """Tests for get_learner_profile() function."""

    @pytest.mark.asyncio
    @patch("study_mode_api.fte.teach_skill.fetch_learner_profile")
    async def test_returns_api_profile_when_available(self, mock_fetch):
        """Should return profile from API when available."""
        api_profile = LearnerProfile.mock(user_name="API User")
        mock_fetch.return_value = api_profile

        result = await get_learner_profile(
            user_name="Fallback Name",
            auth_token="valid-token",
        )

        assert result.name == "API User"
        mock_fetch.assert_called_once_with("valid-token")

    @pytest.mark.asyncio
    @patch("study_mode_api.fte.teach_skill.fetch_learner_profile")
    async def test_falls_back_to_mock_when_api_fails(self, mock_fetch):
        """Should fall back to mock profile when API returns None."""
        mock_fetch.return_value = None

        result = await get_learner_profile(
            user_name="Fallback Name",
            auth_token="invalid-token",
        )

        # Should use the fallback name
        assert result.name == "Fallback Name"

    @pytest.mark.asyncio
    @patch("study_mode_api.fte.teach_skill.fetch_learner_profile")
    async def test_uses_generic_name_when_no_fallback(self, mock_fetch):
        """Should use generic name when no user_name provided."""
        mock_fetch.return_value = None

        result = await get_learner_profile(
            user_name=None,
            auth_token=None,
        )

        assert result.name == "there"  # Generic default
