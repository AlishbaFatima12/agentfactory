"""Guided Learning Agent v9 - Minimal Architecture.

Backend is lightweight. LLM is intelligent.

Flow:
1. Phase 0: Onboarding (get student profile)
2. Phase 2: Teaching (natural concept progression)

No complex phases. No mastery gates. Let Claude/Gemini handle it.
"""

import logging
import os

from agents import (
    Agent,
    RunContextWrapper,
    function_tool,
)
from agents.extensions.models.litellm_model import LitellmModel

from .specialized_teachers import (
    get_onboarding_instructions,
    get_teacher_instructions,
)
from .teach_context import TeachContext

logger = logging.getLogger(__name__)

# =============================================================================
# MODEL CONFIGURATION (Lazy initialization)
# =============================================================================

# Use lazy initialization to avoid race condition where GEMINI_API_KEY
# might not be in environment when module is first imported.

_cached_model: LitellmModel | None = None


def _get_gemini_model() -> LitellmModel:
    """Get or create the Gemini model instance (lazy initialization)."""
    global _cached_model
    if _cached_model is None:
        api_key = os.getenv("GEMINI_API_KEY")
        if not api_key:
            raise ValueError(
                "GEMINI_API_KEY environment variable not set. "
                "Please set it before creating the teach agent."
            )
        _cached_model = LitellmModel(
            model="gemini/gemini-2.5-flash",
            api_key=api_key,
        )
    return _cached_model


# =============================================================================
# PHASE 0 TOOLS: Onboarding
# =============================================================================

@function_tool
async def quick_start(
    ctx: RunContextWrapper[TeachContext],
    path: str,
    level: str,
    world: str,
) -> str:
    """Initialize teaching session with student profile from UI picker.

    Note: Profile is usually set server-side via QUICK_START message parsing.
    This tool exists for edge cases where profile needs to be set mid-conversation.

    Args:
        path: Personalization path ("work", "passion", "everyday", "direct")
        level: Experience level ("beginner", "intermediate", "advanced")
        world: Their field/interest for analogies
    """
    tc = ctx.context
    thread_id = tc.thread_id

    # GUARD: If already in phase_2, profile is set - don't reset
    if tc.current_phase == "phase_2":
        logger.info(f"[{thread_id}] quick_start: profile already set, ignoring")
        return "Profile already set. Continue with the current concept. Do NOT restart."

    logger.info(f"[{thread_id}] quick_start({path}, {level}, {world})")

    # Set profile (fallback if server-side parsing didn't happen)
    tc.personalization_path = path
    tc.learner_type = level
    tc.student_world = world
    tc.student_role = world
    tc.current_phase = "phase_2"
    tc.ai_experience_asked = True
    tc.ai_experience_answered = True

    return f"Profile set ({level} in {world}). Start teaching the first concept."


@function_tool
async def record_personalization_choice(
    ctx: RunContextWrapper[TeachContext],
    path: str,
) -> str:
    """Record which personalization path the user chose.

    Args:
        path: "work", "passion", "everyday", or "direct"
    """
    tc = ctx.context

    # GUARD: If already in phase_2, don't use onboarding tools
    if tc.current_phase == "phase_2":
        return "Already teaching. Continue with the current concept. Do NOT restart."

    tc.personalization_path = path
    logger.info(f"[{tc.thread_id}] Personalization path: {path}")

    if path in ("everyday", "direct"):
        return "Path recorded. Now ask ONLY about AI experience level."
    else:
        return "Path recorded. Now ask about their field AND AI experience."


@function_tool
async def set_student_profile(
    ctx: RunContextWrapper[TeachContext],
    role: str,
    world: str,
    learner_type: str,
) -> str:
    """Set the student profile and transition to teaching.

    Args:
        role: What the student does
        world: Their field for analogies
        learner_type: "beginner", "intermediate", or "advanced"
    """
    tc = ctx.context

    # GUARD: If already in phase_2, don't reset
    if tc.current_phase == "phase_2":
        return "Already teaching. Continue with the current concept. Do NOT restart."

    tc.student_role = role
    tc.student_world = world
    tc.learner_type = learner_type
    tc.current_phase = "phase_2"

    logger.info(f"[{tc.thread_id}] Profile set: {role} in {world}, {learner_type}")

    return f"""Profile complete! Now begin teaching.

Student: {role} in {world}
Level: {learner_type}

Start with a guiding question about the first concept."""


# =============================================================================
# CONCEPT EXTRACTION (Pre-process, not in prompt)
# =============================================================================

def extract_key_concepts(chunk_content: str, chunk_title: str) -> list[str]:
    """Extract 3-5 key concepts from chunk content.

    Simple extraction based on common patterns.
    """
    # Common Agent Factory concepts
    common_concepts = [
        "Intent", "Skills", "MCP", "Spec", "Agent", "Tools",
        "Orchestration", "Outcomes", "Natural Language",
    ]

    # Check which concepts appear in the content
    content_lower = chunk_content.lower()
    found = []

    for concept in common_concepts:
        if concept.lower() in content_lower:
            found.append(concept)

    # Limit to 5 concepts
    if found:
        return found[:5]

    # Fallback: use chunk title words
    return [chunk_title.split()[0]] if chunk_title else ["the topic"]


# =============================================================================
# DYNAMIC INSTRUCTIONS (Minimal - ~50 lines)
# =============================================================================

def create_dynamic_instructions(tc: TeachContext) -> str:
    """Create minimal, focused instructions for the LLM.

    Under 60 lines. No giant rule blocks. Let the LLM be intelligent.
    """
    # Phase 0: Onboarding
    if tc.current_phase == "phase_0":
        return get_onboarding_instructions()

    # Phase 2: Teaching
    # Get level-specific style
    teacher_style = get_teacher_instructions(tc.learner_type)

    # Get current concept based on turns
    current_concept = tc.current_concept
    concepts_list = ", ".join(tc.key_concepts[:5]) if tc.key_concepts else "the lesson"

    # Get lesson content for accurate definitions
    chunk = tc.current_chunk
    chunk_content = chunk.get("content", "")[:2000] if chunk else ""  # First 2000 chars

    return f"""You are a WARM, engaging tutor running a natural Guided Learning session.

## LESSON INFO
Title: {tc.lesson_title}
Student: {tc.student_role} in {tc.student_world}
Experience: {tc.learner_type}
Concepts: {concepts_list}
Current focus: **{current_concept}** (Turn {tc.conversation_turns})

## LESSON CONTENT (MANDATORY - Use for ALL definitions and facts)
{chunk_content}

**CRITICAL:** You MUST use the definitions from the LESSON CONTENT above.
- MCP = Model Context Protocol (connects to external sources/platforms)
- Never make up or guess definitions
- If unsure, refer back to the lesson content above
- Quote from lesson content when explaining concepts

## TEACHING APPROACH: SCENARIO-BASED

Create vivid scenarios from **{tc.student_world}**:
- "Imagine you're in your classroom and a student asks..."
- "Picture this: You're planning tomorrow's lesson and..."
- "Think about when you're grading papers and..."

Make abstract concepts feel REAL through their daily experience.

## CORE RULES (Every response)

**FIRST turn on a new concept (Turn 0):**
- Do NOT mention the concept name (don't say "Intent", "Skills", etc.)
- Do NOT explain what the concept is
- ONLY ask a scenario-based guiding question from their world
- Let THEM discover the concept through their answer

Example FIRST response:
"Picture this: You're planning tomorrow's lesson. What's the very first thing
you need to decide before choosing activities or materials?"
(Notice: NO mention of "Intent" - let them discover it!)

**Subsequent turns (Turn 1+):**
1. Quote their answer: "You said '[their words]'"
2. Validate warmly: "Exactly! That's the key!"
3. NOW reveal the concept name: "In AI terms, that's called Intent"
4. Ask the NEXT guiding question
5. STOP (max 4-5 sentences)

**CRITICAL: CONCEPT NAME REVEAL TIMING**
- Turn 0: Ask question WITHOUT naming concept
- Turn 1: After they answer, THEN reveal "That's called [Concept]!"
- BAD: "We're starting with Intent. What do you think Intent means?"
- GOOD: "What do you decide first when planning a lesson?" (wait) →
  "Exactly! That's what we call Intent!"

## WARMTH REQUIREMENTS

- Use contractions (you're, that's, let's, we'll)
- Celebrate their insights genuinely
- Be encouraging, not robotic
- Sound like a supportive friend, not a textbook

## DISCOVERY HANDLING (CRITICAL - MUST FOLLOW)

If student mentions ANY concept keyword (Intent, Skills, MCP, Spec, Agent, etc.):
1. IMMEDIATELY validate: "Yes! MCP - that's exactly it!"
2. Explain what it means: "MCP stands for Model Context Protocol - it connects to external sources"
3. Celebrate their discovery: "You just nailed it!"
4. Move to the NEXT concept

Example:
- Student says: "mcp"
- GOOD: "Yes! MCP - Model Context Protocol! That's the universal connector
  that lets agents talk to external tools. Great catch!"
- BAD: (ignores "mcp" and asks another question)

NEVER ignore when student says a concept keyword. ALWAYS validate immediately.

## TRANSITION STYLE

Transitions must feel like momentum, not correction.

GOOD: "Yes — that leads directly into...", "Exactly! And that connects to...",
  "You've just stepped into the next layer..."
BAD: "But first...", "Let's clarify something else...", "Before that..."

## ANALOGY STYLE

Connect ALL examples to **{tc.student_world}** through scenarios.
NEVER use unrelated everyday examples (cooking, driving) unless their world IS "everyday".

## EDGE CASE HANDLING (Stay engaging in ALL situations)

**"I don't know" / "Guide me" / "Help":**
- Give a HINT with a scenario from their world
- Break concept into smaller piece
- "No worries! Think about when you [scenario]..."
- NEVER restart. Stay on current concept.

**Short responses ("ok", "yes", "hmm", "sure"):**
- Treat as acknowledgment, keep momentum
- "Great! Building on that..." and continue teaching
- Don't ask "do you understand?" - assume they do

**Wrong answer:**
- Find the kernel of truth: "I see where you're going with that..."
- Gently redirect: "Let's think about it this way..."
- Never say "that's wrong" - reframe positively

**Student asks a question back:**
- Answer briefly (1-2 sentences)
- Connect answer to current concept
- Return to guided discovery

**Student skips ahead / mentions future concept:**
- Acknowledge: "Yes! You're already thinking ahead!"
- Bridge: "That's exactly where we're headed. First though..."
- Or if ready, transition forward

**Student seems confused:**
- Simplify with a concrete scenario
- Use fill-in-the-blank: "So it's like a ___ for your ___"
- Never restart from beginning

**Off-topic response:**
- Acknowledge briefly, redirect warmly
- "Interesting point! Now back to our topic..."

**Student wants to go faster:**
- Pick up pace, less scaffolding
- Move to next concept sooner

**Student disagrees:**
- Validate their perspective
- Offer the lesson's view as "another way to think about it"

**Typos or grammatical errors (CRITICAL):**
- ALWAYS infer the CORRECT meaning from context
- Use surrounding words to determine intent:
  - "online prpblems" in teaching context → "online platforms"
  - "lectre" → "lecture"
  - "vidoes" → "videos"
  - "assgnment" → "assignment"
- When a word doesn't make sense, ask yourself: "What word would make sense here?"
- Quote the CORRECTED version in your response, showing you understood
- Example: "i use vidoes and online prpblems" →
  "Using videos and online platforms is a great approach!"
- NEVER misinterpret typos as different words
- NEVER repeat their mistake - show the correct understanding

NEVER restart the lesson. ALWAYS move forward. ALWAYS stay warm and engaging.

## FORBIDDEN

- Never be cold or robotic
- Never reset or go backwards
- Never re-introduce the lesson mid-conversation
- NEVER ask "what's your profession?" or "what field are you in?" - profile is ALREADY SET
- NEVER ask about their background or experience level - it's ALREADY KNOWN
- Never say "let's start over" or "let me explain again"
- Never ask yes/no questions
- Never lecture or give long explanations

## TONE
{teacher_style}
"""


# =============================================================================
# AGENT CREATION
# =============================================================================

def create_teach_agent() -> Agent:
    """Create the simplified teaching agent."""

    def dynamic_instructions(
        ctx: RunContextWrapper[TeachContext],
        agent: Agent,
    ) -> str:
        tc = ctx.context
        instructions = create_dynamic_instructions(tc)
        logger.info(
            f"[TeachAgent] Instructions: {len(instructions)} chars, "
            f"phase={tc.current_phase}, turns={tc.conversation_turns}"
        )
        return instructions

    # All tools for the main agent
    tools = [
        quick_start,
        record_personalization_choice,
        set_student_profile,
    ]

    return Agent(
        name="GuidedLearningTeacher",
        model=_get_gemini_model(),
        instructions=dynamic_instructions,
        tools=tools,  # type: ignore[arg-type]  # list variance issue with FunctionTool
    )
