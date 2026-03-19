"""Tests for content-API exercise submission pass-through.

These test the content-api's proxy behavior. They mock the ProgressClient.
Uses sync TestClient matching existing content-api test patterns.

TDD RED PHASE: These tests will fail until the endpoint and schemas are implemented.
"""

from unittest.mock import AsyncMock, patch

from fastapi.testclient import TestClient

from content_api.main import app

client = TestClient(app)


def _auth_headers():
    """Dev mode headers (dev mode is on in test env)."""
    return {}


def _make_payload() -> dict:
    """Build a valid exercise submit request body."""
    return {
        "chapter_slug": "01-asking-better-questions",
        "lesson_slug": "01-prediction-lock",
        "evidence": {
            "type": "text",
            "provider": "chatgpt",
            "student_input": "My predictions are...",
            "ai_output": "Your evaluation shows...",
        },
        "feedback": "The scenario was harder than expected",
    }


class TestExerciseSubmitPassthrough:
    """Content-API forwards exercise submissions to progress-api."""

    def test_passthrough_success(self):
        """Content-API forwards to progress-api and returns response."""
        mock_response = {
            "submitted": True,
            "already_submitted": False,
            "xp_earned": 50,
            "total_xp": 537,
            "scores": {
                "independent_thinking": 5,
                "critical_evaluation": 5,
                "reasoning_depth": 4,
                "originality": 5,
                "self_awareness": 4,
                "average": 4.6,
            },
            "streak": {"current": 5, "longest": 12},
        }

        mock_client = AsyncMock()
        mock_client.submit_exercise = AsyncMock(return_value=mock_response)

        with patch(
            "content_api.routes.content.get_progress_client",
            return_value=mock_client,
        ):
            response = client.post(
                "/api/v1/content/exercise/submit",
                json=_make_payload(),
                headers=_auth_headers(),
            )

        assert response.status_code == 200
        data = response.json()
        assert data["submitted"] is True
        assert data["xp_earned"] == 50
        assert data["scores"]["average"] == 4.6

    def test_passthrough_progress_down(self):
        """Content-API returns 503 when progress-api not configured."""
        with patch(
            "content_api.routes.content.get_progress_client",
            return_value=None,
        ):
            response = client.post(
                "/api/v1/content/exercise/submit",
                json=_make_payload(),
                headers=_auth_headers(),
            )

        assert response.status_code == 503

    def test_passthrough_auth_forwarded(self):
        """Authorization header is forwarded to progress-api."""
        mock_client = AsyncMock()
        mock_client.submit_exercise = AsyncMock(
            return_value={
                "submitted": True,
                "already_submitted": False,
                "xp_earned": 50,
                "total_xp": 50,
                "scores": None,
                "streak": {"current": 1, "longest": 1},
            }
        )

        with patch(
            "content_api.routes.content.get_progress_client",
            return_value=mock_client,
        ):
            response = client.post(
                "/api/v1/content/exercise/submit",
                json=_make_payload(),
                headers={**_auth_headers(), "Authorization": "Bearer test-token-xyz"},
            )

        assert response.status_code == 200
        # Verify auth token was forwarded to progress client
        mock_client.submit_exercise.assert_called_once()
        call_kwargs = mock_client.submit_exercise.call_args
        assert call_kwargs.kwargs.get("auth_token") == "Bearer test-token-xyz"
