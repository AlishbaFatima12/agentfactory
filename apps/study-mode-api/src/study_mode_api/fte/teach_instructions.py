"""Blended Teaching Agent v7.2 - Simplified Instructions.

This module provides the base teach_instructions function that generates
context-aware instructions dynamically based on the current TeachContext state.

The hybrid architecture uses:
- Dynamic instruction generation based on phase and learner type
- Specialized teachers for beginner/intermediate/advanced
- Guardrails to prevent common issues
"""

from agents import Agent, RunContextWrapper

from .teach_context import TeachContext


def teach_instructions(
    ctx: RunContextWrapper[TeachContext],
    agent: Agent,
) -> str:
    """Generate phase-aware teaching instructions for Blended v7.2.

    This function is called by the agent to get context-specific instructions.
    Instructions are generated dynamically based on:
    - Current phase (phase_0, phase_1, phase_2, mastery_gate, phase_3, phase_4)
    - Learner type (beginner, intermediate, advanced)
    - Personalization path (work, passion, everyday, direct)
    - Discovered concepts
    - Fallback status (3-strike system)
    """
    # Import here to avoid circular import
    from .teach_agent import create_dynamic_instructions

    tc = ctx.context
    return create_dynamic_instructions(tc)


# =============================================================================
# LEGACY COMPATIBILITY - Phase instruction helpers
# =============================================================================

def _phase_0_know_student(tc: TeachContext) -> str:
    """Phase 0: Learn who the student is and their starting point.

    DEPRECATED: Use create_dynamic_instructions() instead.
    Kept for backwards compatibility.
    """
    name = tc.user_name.title() if tc.user_name else ""
    greeting = f"Hey {name}! " if name else "Hey there! "

    if tc.is_first_message:
        return f"""You are a warm, friendly AI tutor starting a teaching session.

{greeting}Ready to dive into **{tc.lesson_title}**?

How would you like me to make this relevant to you?

🎯 **Connect to my work** - I'll use examples from your profession
❤️ **Connect to my passion** - I'll use examples from what you love
🏠 **Everyday examples** - cooking, driving, daily life stuff
⚡ **Just teach me directly** - no analogies, get to the point

Just pick one!

RULES:
- Keep it WARM and inviting
- Don't call any tools yet - wait for their response"""

    else:
        path = tc.personalization_path
        return f"""Student is responding. Current state:
- Path: {path or "NOT SET"}
- AI experience asked: {tc.ai_experience_asked}

IF path is empty: Call record_personalization_choice() with their choice.

IF path is "everyday" or "direct": Ask ONLY about AI experience. NEVER ask about profession!

IF path is "work" or "passion": Ask about both field and AI experience.

After they answer AI experience → call set_student_profile()"""
