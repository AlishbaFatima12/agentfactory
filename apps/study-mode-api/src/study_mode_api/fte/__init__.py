"""FTE (Full-Time Equivalent) Agent System.

This module provides the agent orchestration layer:
- teach_skill.py: Skill-based personalized teaching (v4)
- ask_agent.py: Ask mode agent using DeepSeek
"""

from .ask_agent import ASK_PROMPT, ask_agent

__all__ = [
    # Ask agent (DeepSeek) - singleton with dynamic instructions
    "ask_agent",
    "ASK_PROMPT",
]
