"""Blended Teaching Agent v7.2 - Hybrid Architecture with Handoffs.

Architecture:
- OnboardingAgent: Phase 0 only (fast, lightweight)
- BeginnerTeacher: Scaffolded learning (GPT-4o-mini for speed)
- IntermediateTeacher: Socratic + Case-based
- AdvancedTeacher: Elaborative interrogation

Guardrails:
- No repeat questions about discovered concepts
- No internal instruction leaks
- Path-aware (no profession for everyday/direct)

Speed optimizations:
- GPT-4o-mini for beginners (faster responses)
- Unsplash for images (instant vs DALL-E's 10s)
- Focused instructions per teacher (no giant conditionals)
"""

import logging
import os
import httpx

from agents import (
    Agent,
    RunContextWrapper,
    function_tool,
    handoff,
)
from openai import AsyncOpenAI

from .teach_context import TeachContext
from .guardrails import validate_output, fix_leaked_instructions
from .specialized_teachers import (
    get_teacher_instructions,
    get_onboarding_instructions,
    BEGINNER_TEACHER_INSTRUCTIONS,
    INTERMEDIATE_TEACHER_INSTRUCTIONS,
    ADVANCED_TEACHER_INSTRUCTIONS,
)

logger = logging.getLogger(__name__)

# OpenAI client for DALL-E (used sparingly)
_openai_client = AsyncOpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Unsplash API for fast images
UNSPLASH_ACCESS_KEY = os.getenv("UNSPLASH_ACCESS_KEY", "R9g7beim3nk5q4sZacHBrW1KvEHIEiJ1fuvfKKG5l2w")

# Model configurations
MODEL_FAST = "gpt-5-mini"    # For all learner types
MODEL_STANDARD = "gpt-5-mini"  # Keep consistent model


# =============================================================================
# OUTPUT GUARDRAIL WRAPPER
# =============================================================================

def apply_guardrails(ctx: RunContextWrapper[TeachContext], output: str) -> str:
    """Apply guardrails to agent output and fix issues if possible."""
    tc = ctx.context

    result = validate_output(
        output=output,
        discovered_concepts=tc.discovered_concepts,
        personalization_path=tc.personalization_path,
        ai_experience_asked=tc.ai_experience_asked,
        current_asking_concept=tc.current_asking_concept,
    )

    if not result.is_valid:
        logger.warning(f"[{tc.thread_id}] Guardrail issues: {result.issues}")
        # Attempt to fix leaked instructions
        fixed = fix_leaked_instructions(output)
        if fixed != output:
            logger.info(f"[{tc.thread_id}] Fixed leaked instructions")
            return fixed

    return output


# =============================================================================
# QUICK START: Combined path + level selection (from UI picker)
# =============================================================================

@function_tool
async def quick_start(
    ctx: RunContextWrapper[TeachContext],
    path: str,
    learner_type: str,
    profession: str = "",
) -> str:
    """Quick start teaching - skip Phase 0 questions when UI provides selections.

    Call this when the frontend PersonalizationPicker provides both path and AI experience.
    This skips the back-and-forth questions and goes directly to Phase 1.

    Args:
        path: "work", "passion", "everyday", or "direct"
        learner_type: "beginner", "intermediate", or "advanced"
        profession: Optional profession for work/passion paths (can be empty)
    """
    tc = ctx.context
    thread_id = tc.thread_id

    # Guard: Only in phase_0
    if tc.current_phase != "phase_0":
        return f"Already past phase_0. Current: {tc.current_phase}. Continue with current phase."

    logger.info(f"[{thread_id}] quick_start({path}, {learner_type}, {profession})")

    # Set personalization
    tc.personalization_path = path.lower()
    tc.ai_experience_asked = True
    tc.ai_experience_answered = True

    # Set profile based on path
    if path in ["everyday", "direct"]:
        role = "learner"
        world = path
        level = "novice" if learner_type == "beginner" else learner_type
    else:
        role = profession if profession else "professional"
        world = profession if profession else path
        level = "novice" if learner_type == "beginner" else learner_type

    tc.student_role = role
    tc.student_level = level
    tc.student_world = world

    # Set PHM learner type and approach
    tc.learner_type = learner_type
    if learner_type == "beginner":
        tc.current_approach = "scaffolded"
    elif learner_type == "advanced":
        tc.current_approach = "elaborative"
    else:
        tc.current_approach = "socratic"

    tc.current_phase = "phase_1"

    # Generate DALL-E image for Phase 1
    image_markdown = ""
    try:
        prompt = (
            f"Vibrant educational illustration for '{tc.lesson_title}'. "
            f"Scene in {world} context, modern and inspiring. "
            f"Digital art, dynamic composition. "
            f"AI empowering people. Blue/purple accents. No text."
        )

        logger.info(f"[{thread_id}] Generating DALL-E image...")
        response = await _openai_client.images.generate(
            model="dall-e-3",
            prompt=prompt,
            size="1792x1024",
            quality="standard",
            n=1,
        )

        image_url = response.data[0].url
        tc.open_image_url = image_url
        image_markdown = f"![{tc.lesson_title}]({image_url})"
        logger.info(f"[{thread_id}] DALL-E done")

    except Exception as e:
        logger.warning(f"[{thread_id}] DALL-E failed: {e}")

    # Return with explicit instruction to include image
    return f"""✓ Quick start: {path} | {learner_type}
✓ Phase: 1 (Case-Based Hook)

YOUR RESPONSE MUST START WITH THIS EXACT IMAGE MARKDOWN (copy it exactly):
{image_markdown}

THEN write a 2-3 sentence scenario about building an AI assistant for their {world} work.
End with ONE focused question.

IMPORTANT: The image markdown above MUST be the FIRST LINE of your response to the user.

After writing your scenario, call record_scenario()."""


# =============================================================================
# PHASE 0: RECORD PERSONALIZATION PATH
# =============================================================================

@function_tool
async def record_personalization_choice(
    ctx: RunContextWrapper[TeachContext],
    path: str,
) -> str:
    """Record which personalization path the user chose.

    Call this IMMEDIATELY when user chooses work/passion/everyday/direct.
    This prevents asking wrong follow-up questions.

    Args:
        path: "work", "passion", "everyday", or "direct"
    """
    tc = ctx.context
    tc.personalization_path = path.lower()

    logger.info(f"[{tc.thread_id}] Personalization path: {path}")

    # Return what to do next based on path
    if path in ["everyday", "direct"]:
        tc.ai_experience_asked = True  # Mark that we're about to ask
        return f"""✓ Path recorded: {path}

NEXT STEP: Ask ONLY about AI experience. DO NOT ask about profession!
Example: "What's your AI experience? 🟢 Built/used AI | 🟡 Heard of them | 🔴 Completely new"

After they answer → call set_student_profile() → handoff to teacher."""
    else:
        return f"""✓ Path recorded: {path}

NEXT STEP: Ask about BOTH profession AND AI experience in ONE message.
After they answer → call set_student_profile() → handoff to teacher."""


# =============================================================================
# PHASE 0 → PHASE 1: SET STUDENT PROFILE (Triggers Handoff)
# =============================================================================

@function_tool
async def set_student_profile(
    ctx: RunContextWrapper[TeachContext],
    role: str,
    level: str,
    world: str,
    learner_type: str = "intermediate",
) -> str:
    """Set student profile and prepare for handoff to specialized teacher.

    Call this after student tells you their role/expertise.
    This determines which teacher agent handles the rest of the lesson.

    Args:
        role: Their role (developer, teacher, startup founder, learner, general)
        level: novice, intermediate, or advanced
        world: Their field (software, education, healthcare, general, everyday, direct)
        learner_type: beginner, intermediate, or advanced (based on AI experience)
    """
    tc = ctx.context
    thread_id = tc.thread_id

    # Guard: Only in phase_0
    if tc.current_phase != "phase_0":
        return f"Already past phase_0. Current: {tc.current_phase}. Continue with current phase."

    logger.info(f"[{thread_id}] set_student_profile({role}, {level}, {world}, learner_type={learner_type})")

    # Set profile
    tc.student_role = role
    tc.student_level = level
    tc.student_world = world

    # Set PHM learner type and approach
    tc.learner_type = learner_type
    if learner_type == "beginner":
        tc.current_approach = "scaffolded"
    elif learner_type == "advanced":
        tc.current_approach = "elaborative"
    else:
        tc.current_approach = "socratic"

    tc.current_phase = "phase_1"

    # Generate DALL-E image for Phase 1 (personalized)
    image_markdown = ""
    try:
        prompt = (
            f"Vibrant educational illustration for '{tc.lesson_title}'. "
            f"Scene in {world} industry, relevant to a {role}. "
            f"Modern digital art, dynamic composition, inspiring. "
            f"AI empowering professionals. Blue/purple accents. No text."
        )

        logger.info(f"[{thread_id}] Generating DALL-E image...")
        response = await _openai_client.images.generate(
            model="dall-e-3",
            prompt=prompt,
            size="1792x1024",
            quality="standard",
            n=1,
        )

        image_url = response.data[0].url
        tc.open_image_url = image_url
        image_markdown = f"![{tc.lesson_title}]({image_url})"
        logger.info(f"[{thread_id}] DALL-E done: {image_url[:50]}...")

    except Exception as e:
        logger.warning(f"[{thread_id}] DALL-E failed: {e}")

    # Determine which teacher to hand off to
    teacher_name = {
        "beginner": "BeginnerTeacher",
        "intermediate": "IntermediateTeacher",
        "advanced": "AdvancedTeacher",
    }.get(learner_type, "IntermediateTeacher")

    return f"""✓ Profile set: {role} | {level} | {world} | {learner_type}
✓ Phase: 1 (Case-Based Hook)
✓ Teacher: {teacher_name}

{image_markdown}

NOW START YOUR SCENARIO:
Start with the image above (if available), then write a 2-3 sentence scenario about building an AI assistant for their {world} work. End with ONE question.

After writing your scenario, call record_scenario()."""


# =============================================================================
# PHASE 1 → PHASE 2: RECORD SCENARIO
# =============================================================================

@function_tool
async def record_scenario(
    ctx: RunContextWrapper[TeachContext],
    scenario: str,
    question: str,
) -> str:
    """Record the Phase 1 scenario and move to Phase 2.

    Call this AFTER you've shown the scenario to the student.

    Args:
        scenario: Brief description of your scenario (1 sentence)
        question: The question you asked
    """
    tc = ctx.context
    thread_id = tc.thread_id

    # Guard: Only in phase_1
    if tc.current_phase != "phase_1":
        return f"Wrong phase for record_scenario. Current: {tc.current_phase}"

    logger.info(f"[{thread_id}] record_scenario recorded")

    tc.opening_scenario = scenario
    tc.scenario_question = question
    tc.current_phase = "phase_2"

    return f"""✓ Scenario saved
✓ Phase: 2 (Socratic Discovery)

WAIT for student's answer to your question.
When they answer, use Validate → Name → Push pattern."""


# =============================================================================
# PHASE 2: RECORD CONCEPT DISCOVERY
# =============================================================================

@function_tool
async def record_discovery(
    ctx: RunContextWrapper[TeachContext],
    concept: str,
    student_insight: str,
) -> str:
    """Record that student discovered a concept.

    Call this when they demonstrate understanding (even if not exact terminology).

    Args:
        concept: Formal name (Spec, Skills, Subagent, MCP, Feedback Loop)
        student_insight: How they expressed it
    """
    tc = ctx.context
    thread_id = tc.thread_id

    logger.info(f"[{thread_id}] record_discovery({concept})")

    # Normalize concept name
    concept_normalized = concept.strip().title()

    # Check if already discovered
    if concept_normalized in tc.discovered_concepts:
        return f"'{concept}' already discovered! Move to next concept. Discovered: {', '.join(tc.discovered_concepts)}"

    tc.discovered_concepts.append(concept_normalized)
    tc.conversation_turns += 1
    tc.chunk_turns += 1
    tc.confusion_streak = 0  # Reset on successful discovery

    total = len(tc.discovered_concepts)

    # Micro-summary reminder
    summary_hint = ""
    if total > 0 and total % 3 == 0:
        summary_hint = f"\n\nYou've covered {total} concepts. Give a quick recap before continuing."

    return f"""✓ Discovered: {concept_normalized}
✓ Total: {total}
✓ All discovered: {', '.join(tc.discovered_concepts)}{summary_hint}

NEXT: Move to the next concept that is NOT in the discovered list."""


# =============================================================================
# CONFUSION TRACKING (3-Strike System)
# =============================================================================

@function_tool
async def record_confusion(
    ctx: RunContextWrapper[TeachContext],
) -> str:
    """Record that student showed confusion. Triggers fallback after 3 strikes.

    Call when student says "I don't know", seems confused, or gives wrong answer.
    """
    tc = ctx.context
    thread_id = tc.thread_id

    tc.confusion_streak += 1
    logger.info(f"[{thread_id}] Confusion streak: {tc.confusion_streak}")

    if tc.confusion_streak >= 3:
        tc.fallback_triggered = True
        return """⚠️ 3-STRIKE FALLBACK TRIGGERED!

STOP Socratic questioning. Switch to DIRECT INSTRUCTION:
1. Say: "Let me try a different approach - I'll explain this step by step."
2. Teach the concept directly with a concrete example
3. Use simple YES/NO verification
4. After 2 correct answers, can try gentle Socratic again"""

    return f"""Confusion recorded ({tc.confusion_streak}/3).

After 3 strikes, fallback to direct instruction.
For now: simplify your question or give a hint."""


# =============================================================================
# PHASE ADVANCEMENT
# =============================================================================

@function_tool
async def advance_phase(
    ctx: RunContextWrapper[TeachContext],
) -> str:
    """Move to the next teaching phase.

    Flow: phase_0 → phase_1 → phase_2 → mastery_gate → phase_3 → phase_4
    """
    tc = ctx.context
    thread_id = tc.thread_id
    current = tc.current_phase
    discovered = len(tc.discovered_concepts)

    # Guard: Can't skip phase_2 without discoveries
    if current == "phase_2" and discovered < 3:
        return f"""Cannot advance yet!

Only {discovered} concepts discovered (need 3+).
Stay in Phase 2: Ask more Socratic questions, call record_discovery() when they get it."""

    # Phase flow
    flow = {
        "phase_0": "phase_1",
        "phase_1": "phase_2",
        "phase_2": "mastery_gate",
        "mastery_gate": "phase_3",
        "phase_3": "phase_4",
        "phase_4": "complete",
    }

    new_phase = flow.get(current, "phase_0")
    tc.current_phase = new_phase

    logger.info(f"[{thread_id}] Phase: {current} → {new_phase}")

    guidance = {
        "phase_1": "Create a scenario in their world.",
        "phase_2": "Begin Socratic discovery. Validate → Name → Push.",
        "mastery_gate": "Ask them to recall the concepts before moving on.",
        "phase_3": "Fill gaps, resolve scenario, give transfer prompt.",
        "phase_4": "Cognitive reset, structured recall, closing.",
        "complete": "Lesson complete!",
    }

    return f"✓ Phase: {new_phase}\n→ {guidance.get(new_phase, '')}"


@function_tool
async def advance_to_next_chunk(
    ctx: RunContextWrapper[TeachContext],
) -> str:
    """Move to next chunk/topic in the lesson.

    Call when current chunk is covered and ready for next topic,
    or when lesson is complete.
    """
    tc = ctx.context
    thread_id = tc.thread_id

    tc.current_chunk_index += 1
    tc.chunk_turns = 0

    if tc.current_chunk_index >= tc.total_chunks:
        tc.current_phase = "mastery_gate"
        logger.info(f"[{thread_id}] All chunks done → mastery_gate")
        return """✓ All chunks covered!

Move to MASTERY GATE:
"Can you name the core elements we've covered and explain each briefly?" """

    chunk = tc.current_chunk
    title = chunk.get('title', 'Next Topic') if chunk else 'Next Topic'
    logger.info(f"[{thread_id}] → Next chunk: {title}")

    return f"✓ Next chunk: {title}\nContinue Socratic discovery, tie to previous concepts."


# =============================================================================
# UTILITIES
# =============================================================================

@function_tool
async def get_teaching_status(
    ctx: RunContextWrapper[TeachContext],
) -> str:
    """Get current teaching status."""
    tc = ctx.context
    chunk = tc.current_chunk
    chunk_title = chunk.get('title', 'N/A') if chunk else 'Complete'
    discovered = ", ".join(tc.discovered_concepts) if tc.discovered_concepts else "None"

    return f"""STATUS:
- Phase: {tc.current_phase}
- Student: {tc.student_role} ({tc.student_level}) in {tc.student_world}
- Learner Type: {tc.learner_type}
- Approach: {tc.current_approach}
- Chunk: {tc.current_chunk_index + 1}/{tc.total_chunks} ({chunk_title})
- Discovered: {discovered}
- Turns: {tc.conversation_turns}
- Confusion Streak: {tc.confusion_streak}/3
- Fallback Active: {tc.fallback_triggered}"""


@function_tool
async def get_instant_image(
    ctx: RunContextWrapper[TeachContext],
    concept: str,
) -> str:
    """Get an Unsplash image to illustrate a concept.

    Use sparingly to make concepts visual and memorable.

    IMPORTANT: Pass ONLY the concept name, NOT custom search terms!
    Correct: "Spec", "Skills", "MCP", "Feedback Loops"
    Wrong: "craftsman tools", "network connection"

    Args:
        concept: The exact concept name (Spec, Skills, MCP, Feedback Loops, etc.)
    """
    thread_id = ctx.context.thread_id

    # Topic-specific keyword mapping
    keywords = {
        "spec": "blueprint document planning",
        "specification": "blueprint document planning",
        "specs": "blueprint document planning",
        "skill": "tools capabilities professional",
        "skills": "tools capabilities professional",
        "mcp": "network connection digital",
        "model context protocol": "network connection digital",
        "protocol": "network connection digital",
        "feedback": "cycle improvement growth",
        "feedback loop": "cycle improvement learning",
        "feedback loops": "cycle improvement learning",
        "loop": "cycle continuous",
        "subagent": "team collaboration",
        "orchestration": "conductor orchestra teamwork",
        "agent": "robot assistant AI",
        "ai": "artificial intelligence technology",
        "congratulations": "celebration success trophy",
        "success": "celebration winner achievement",
    }

    # Find best match
    concept_lower = concept.lower()
    search = keywords.get(concept_lower)
    if not search:
        for key, value in keywords.items():
            if key in concept_lower or concept_lower in key:
                search = value
                break
    if not search:
        search = f"{concept} technology professional"

    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(
                "https://api.unsplash.com/photos/random",
                params={"query": search, "orientation": "landscape"},
                headers={"Authorization": f"Client-ID {UNSPLASH_ACCESS_KEY}"},
                timeout=5.0,
            )

            if response.status_code == 200:
                url = response.json().get("urls", {}).get("regular", "")
                if url:
                    logger.info(f"[{thread_id}] Unsplash image: {url[:50]}...")
                    return f"![{concept}]({url})"

    except Exception as e:
        logger.error(f"[{thread_id}] Unsplash error: {e}")

    return ""


# =============================================================================
# DYNAMIC INSTRUCTIONS GENERATOR
# =============================================================================

def create_dynamic_instructions(tc: TeachContext) -> str:
    """Generate context-aware instructions based on current state."""

    # Phase 0 - Onboarding
    if tc.current_phase == "phase_0":
        name = tc.user_name.title() if tc.user_name else ""
        greeting = f"Hey {name}! " if name else "Hey there! "

        if tc.is_first_message:
            return f"""You are a warm, friendly AI tutor starting a teaching session.

FIRST CHECK: Is the user message "QUICK_START:path:level" or "QUICK_START:path:level:profession"?
- If message starts with "QUICK_START:" → Parse it and call quick_start(path, learner_type, profession)
- Example: "QUICK_START:everyday:beginner" → call quick_start("everyday", "beginner")
- Example: "QUICK_START:work:advanced:teacher" → call quick_start("work", "advanced", "teacher")
- Example: "QUICK_START:passion:beginner:photography" → call quick_start("passion", "beginner", "photography")

If NOT a QUICK_START message, GIVE THESE OPTIONS:
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

FIRST CHECK: Is the message "QUICK_START:path:level" or "QUICK_START:path:level:profession"?
- If yes → call quick_start(path, learner_type, profession) immediately

IF path is empty: Call record_personalization_choice() with their choice.

IF path is "everyday" or "direct": Ask ONLY about AI experience. NEVER ask about profession!

IF path is "work" or "passion": Ask about both field and AI experience.

After they answer AI experience → call set_student_profile()"""

    # Get learner-specific instructions
    base_instructions = get_teacher_instructions(tc.learner_type, tc.fallback_triggered)

    # Add phase-specific context
    phase_context = ""
    if tc.current_phase == "phase_1":
        image_instruction = ""
        if tc.open_image_url:
            image_instruction = f"""
IMAGE: Include this image at the START of your response:
![Image]({tc.open_image_url})

Start your response with the image markdown, then write your scenario."""

        chunk = tc.chunks[tc.current_chunk_index] if tc.current_chunk_index < len(tc.chunks) else None
        chunk_title = chunk.get('title', tc.lesson_title) if chunk else tc.lesson_title
        chunk_content = chunk.get('content', '')[:500] if chunk else ""

        phase_context = f"""
## PHASE 1: CASE-BASED HOOK (PHM Strategy)

LESSON: {tc.lesson_title}
CURRENT CHUNK: {chunk_title}
Student: {tc.student_role} in {tc.student_world} | Level: {tc.student_level}
{image_instruction}

CONTENT TO TEACH:
{chunk_content}

YOUR TASK:
1. Start with the image markdown (REQUIRED)
2. Create a 2-3 sentence scenario connecting {tc.student_world} to the lesson concepts
3. The scenario MUST relate to: {chunk_title}
4. End with ONE question that leads them to discover the first concept

STAY ON TOPIC: Only discuss concepts from this lesson. No tangents.

After writing, call record_scenario()."""

    elif tc.current_phase == "phase_2":
        discovered = ", ".join(tc.discovered_concepts) if tc.discovered_concepts else "None"
        chunk = tc.chunks[tc.current_chunk_index] if tc.current_chunk_index < len(tc.chunks) else None
        chunk_title = chunk.get('title', tc.lesson_title) if chunk else tc.lesson_title
        chunk_content = chunk.get('content', '')[:1500] if chunk else ""

        # Extract concepts from chunk - use chunk's concepts if provided, otherwise extract from content
        chunk_concepts = chunk.get('concepts', []) if chunk else []
        if not chunk_concepts and chunk_content:
            # Extract concepts from numbered lists in content (e.g., "1. Spec - description")
            import re
            lines = chunk_content.split('\n')
            for line in lines:
                # Match patterns like "1. Concept Name - description" or "- **Concept** - desc"
                # Captures everything before the dash that separates concept from description
                match = re.match(r'^\s*(?:\d+\.|[-*]|\#{1,3})\s*\**([A-Z][a-zA-Z0-9\s\-]+?)\**\s*[-–—:]\s*[A-Z]', line)
                if match:
                    concept = match.group(1).strip().rstrip('-').strip()
                    if concept and 2 < len(concept) < 40:  # Reasonable concept name length
                        chunk_concepts.append(concept)

        # Store in context for tracking
        if chunk_concepts and not tc.key_concepts:
            tc.key_concepts = chunk_concepts

        # Use extracted concepts or fall back to key_concepts from context
        all_concepts = chunk_concepts if chunk_concepts else tc.key_concepts if tc.key_concepts else []
        remaining = [c for c in all_concepts if c not in tc.discovered_concepts]
        next_concept = remaining[0] if remaining else None

        # Build concepts list for display
        concepts_display = "\n".join([f"- {c}" for c in all_concepts]) if all_concepts else "- (extract from lesson content)"

        phase_context = f"""
## PHASE 2: SOCRATIC DISCOVERY (PHM Strategy)

LESSON: {tc.lesson_title}
CURRENT CHUNK: {chunk_title}
Student: {tc.student_role} in {tc.student_world}

CONCEPTS TO TEACH IN THIS CHUNK:
{concepts_display}

DISCOVERED SO FAR: {discovered}
REMAINING: {', '.join(remaining) if remaining else 'None'}
NEXT TO TEACH: **{next_concept}**
Confusion streak: {tc.confusion_streak}/3
{'⚠️ FALLBACK ACTIVE - Switch to direct explanation!' if tc.fallback_triggered else ''}

YOUR SCENARIO: {tc.opening_scenario}

## ⚠️ ABSOLUTE FIRST STEP - CHECK USER'S ANSWER! ⚠️

CURRENT CONCEPT TO TEACH: **{next_concept}**

BEFORE doing ANYTHING else, check if user's message answers the question:

1. Did they say "{next_concept}" or words related to it? → CORRECT!
2. Did they show ANY understanding of what you asked? → CORRECT!
3. Did they attempt an answer (even partially right)? → GIVE CREDIT!

IF USER IS CORRECT:
→ Say "Exactly - **{next_concept}**!" (ONE sentence max)
→ CALL record_discovery("{next_concept}") IMMEDIATELY
→ Ask about the NEXT concept right away
→ DO NOT explain the concept they just got right!

IF USER IS WRONG OR CONFUSED:
→ Then and only then, give a hint or explanation
→ Keep it short, let them try again

HOW TO DETECT A CORRECT ANSWER:
- User says the concept name (or close variation)
- User describes what the concept does
- User uses synonyms or related terms
- User shows they understand even in their own words
→ All of these = CORRECT! Record it and move on.

NEVER:
- Explain a concept they just got right
- Ask "Got it?" or "Does that make sense?" or "Make sense?"
- Re-teach something they already understood
- Keep talking after they answered correctly

TEACHING STRATEGY (only if user hasn't answered yet):
1. Connect {next_concept} to their {tc.student_world} context
2. Ask ONE Socratic question about {next_concept}
3. When they answer, validate and name the concept with **bold**
4. IMMEDIATELY call record_discovery("{next_concept}") - DON'T ASK ANOTHER QUESTION!

ACCEPTANCE DETECTION - When user says ANY of these, they UNDERSTAND:
- "got it", "I got it", "got that"
- "yes", "yeah", "yep", "I understand"
- "makes sense", "that makes sense"
- "I see", "oh I see", "okay"
- "cool", "good", "great", "thanks"
→ When you hear these: CALL record_discovery("{next_concept}") IMMEDIATELY
→ Then move to NEXT concept - don't re-explain the same one!

CONCEPT DETECTION - When user shows understanding of ANY concept:
- Listen for keywords related to the concept you're teaching
- When they express the idea (even in their own words), that's understanding!
- IMMEDIATELY call record_discovery() with the concept name
- Don't wait for exact terminology - understanding matters more than words

**CURRENT CONCEPT: {next_concept}**
When student shows they understand {next_concept}, call record_discovery("{next_concept}") immediately!

IF USER SAYS "help me", "guide me", "I don't know", "not sure":
→ STOP asking questions completely!
→ GIVE them the answer directly: "Let me explain - a **{next_concept}** is..."
→ Use a simple {tc.student_world} example
→ END with a statement, NOT a question
→ Then call record_discovery("{next_concept}") and MOVE ON

LESSON CONTENT:
{chunk_content}

RULES:
- STAY ON THIS LESSON only
- ONE concept at a time
- SHORT responses (3-4 sentences)
- When user asks for help → GIVE the answer, don't ask more questions
- Reference their {tc.student_world} in examples
- NEVER say "you're thinking like a builder" or similar praise that doesn't match what they said
- CRITICAL: After explaining {next_concept} and getting acceptance, CALL record_discovery() FIRST, then teach next concept
- NEVER ask about the same concept twice - if you already explained it, record it and move on!"""

    elif tc.current_phase == "mastery_gate":
        discovered = ", ".join(tc.discovered_concepts)
        # Use key_concepts from context (populated in phase_2) or extract from chunk
        chunk = tc.chunks[tc.current_chunk_index] if tc.current_chunk_index < len(tc.chunks) else None
        chunk_title = chunk.get('title', tc.lesson_title) if chunk else tc.lesson_title

        # Get all concepts for this chunk
        all_concepts = tc.key_concepts if tc.key_concepts else []
        if not all_concepts and chunk:
            # Try to get from chunk's concepts field
            all_concepts = chunk.get('concepts', [])

        missing = [c for c in all_concepts if c not in tc.discovered_concepts]
        missing_str = ", ".join(missing) if missing else "None"

        phase_context = f"""
## MASTERY GATE (PHM Checkpoint)

LESSON: {tc.lesson_title}
CHUNK: {chunk_title}
Student: {tc.student_role} in {tc.student_world}

CONCEPTS DISCOVERED: {discovered}
CONCEPTS STILL MISSING: {missing_str}

## MASTERY GATE RULES - FOLLOW EXACTLY!

**CASE 1: Missing concepts exist ({missing_str})**
If student hasn't discovered all concepts yet:
1. DON'T ask "can you name the concepts"
2. Instead, TEACH the missing concept directly:
   - "One more thing - **{missing[0] if missing else 'done'}** is about [explanation]"
3. Call record_discovery("{missing[0] if missing else ''}")
4. Then check if more missing → teach those too
5. When ALL concepts discovered → call advance_phase()

**CASE 2: All concepts discovered**
If ALL concepts from this lesson are discovered ({', '.join(all_concepts) if all_concepts else 'check discovered list'}):
1. Say: "Great! You've covered all the core concepts."
2. Call advance_phase() IMMEDIATELY
3. Don't ask for recall - just move forward

**CASE 3: User says concepts in their recall**
If user mentions any concept from the lesson in their response:
- Listen for keywords related to each concept
- If they mention a concept not yet discovered → record_discovery() for it
- Concepts to listen for: {', '.join(all_concepts) if all_concepts else 'extracted from lesson'}

**CRITICAL**:
- If ALL concepts discovered → advance_phase() NOW
- Max 2 questions in mastery_gate, then GIVE answers and advance
- NEVER loop asking the same "quick check" question!

STAY ON LESSON: Only ask about concepts from THIS lesson."""

    elif tc.current_phase == "phase_3":
        discovered = ", ".join(tc.discovered_concepts)
        chunk = tc.chunks[tc.current_chunk_index] if tc.current_chunk_index < len(tc.chunks) else None
        chunk_title = chunk.get('title', tc.lesson_title) if chunk else tc.lesson_title
        chunk_content = chunk.get('content', '')[:800] if chunk else ""

        phase_context = f"""
## PHASE 3: SYNTHESIS & TRANSFER (PHM Strategy)

LESSON: {tc.lesson_title}
CHUNK: {chunk_title}
Student: {tc.student_role} in {tc.student_world}
CONCEPTS LEARNED: {discovered}

OPENING SCENARIO: {tc.opening_scenario}

YOUR TASK:
1. RESOLVE the opening scenario: "Now let's see how this applies to your {tc.student_world} scenario..."
2. Show how ALL concepts ({discovered}) work together
3. Give ONE new scenario in their {tc.student_world} field: "Imagine you're building..."

LESSON CONTENT:
{chunk_content}

KEEP IT FOCUSED:
- Connect everything back to the original scenario
- Show practical application in {tc.student_world}
- One clear transfer example

After giving transfer prompt → call advance_phase()"""

    elif tc.current_phase == "phase_4":
        discovered = ", ".join(tc.discovered_concepts) if tc.discovered_concepts else "None"
        chunk = tc.chunks[tc.current_chunk_index] if tc.current_chunk_index < len(tc.chunks) else None
        chunk_title = chunk.get('title', tc.lesson_title) if chunk else tc.lesson_title

        phase_context = f"""
## PHASE 4: RETRIEVAL PRACTICE (PHM Final Step)

LESSON: {tc.lesson_title}
CHUNK: {chunk_title}
Student: {tc.student_role} in {tc.student_world}
CONCEPTS: {discovered}

RETRIEVAL SEQUENCE:
1. COGNITIVE RESET: Brief personal question ("Quick break - how are you finding this so far?")
2. STRUCTURED RECALL: "Without scrolling, can you explain {discovered} in your own words?"
3. VALIDATE: Acknowledge what they got right, gently correct gaps
4. CLOSE:
   - Summarize what they learned about {chunk_title}
   - Connect back to their {tc.student_world} work
   - Preview what's next (if more chunks)

STAY FOCUSED ON THIS LESSON:
- Only test concepts from {chunk_title}
- Reference their {tc.student_world} context
- Keep it encouraging but honest

After closing → call advance_to_next_chunk()"""

    return f"""{base_instructions}

{phase_context}

## CRITICAL RULES - FOLLOW EXACTLY
1. STAY ON LESSON: Only teach concepts from "{tc.lesson_title}" - NO tangents
2. USE THEIR CONTEXT: Reference {tc.student_world} in every response
3. SHORT RESPONSES: 3-5 sentences max
4. ONE CONCEPT AT A TIME: Don't overwhelm
5. CALL TOOLS: record_discovery() when they understand, advance_phase() to move forward
6. NO META-QUESTIONS: Never ask about difficulty/preferences/learning style
7. NO INTERNAL LEAKS: Never mention "Phase 1", "mastery_gate", etc.
8. SOCRATIC METHOD: Ask questions, don't lecture (unless fallback triggered)
"""


# =============================================================================
# AGENT CREATION
# =============================================================================

def create_teach_agent() -> Agent:
    """Create the Blended Teaching v7.2 agent with hybrid architecture."""

    def dynamic_instructions(ctx: RunContextWrapper[TeachContext], agent: Agent) -> str:
        """Generate instructions dynamically based on context."""
        tc = ctx.context
        return create_dynamic_instructions(tc)

    return Agent(
        name="BlendedTutor",
        model=MODEL_STANDARD,  # Default to standard, overridden per learner type
        instructions=dynamic_instructions,
        tools=[
            quick_start,  # Combined path + level from UI picker
            record_personalization_choice,
            set_student_profile,
            record_scenario,
            record_discovery,
            record_confusion,
            advance_phase,
            advance_to_next_chunk,
            get_teaching_status,
            get_instant_image,
        ],
    )


# =============================================================================
# SPECIALIZED AGENT FACTORIES (for future handoff implementation)
# =============================================================================

def create_onboarding_agent() -> Agent:
    """Create lightweight onboarding agent for Phase 0 only."""
    return Agent(
        name="OnboardingAgent",
        model=MODEL_FAST,
        instructions=get_onboarding_instructions(),
        tools=[
            record_personalization_choice,
            set_student_profile,
        ],
    )


def create_beginner_teacher() -> Agent:
    """Create beginner teacher (fast model, scaffolded learning)."""
    return Agent(
        name="BeginnerTeacher",
        model=MODEL_FAST,
        instructions=BEGINNER_TEACHER_INSTRUCTIONS,
        tools=[
            record_scenario,
            record_discovery,
            record_confusion,
            advance_phase,
            advance_to_next_chunk,
            get_teaching_status,
            get_instant_image,
        ],
    )


def create_intermediate_teacher() -> Agent:
    """Create intermediate teacher (standard model, Socratic method)."""
    return Agent(
        name="IntermediateTeacher",
        model=MODEL_STANDARD,
        instructions=INTERMEDIATE_TEACHER_INSTRUCTIONS,
        tools=[
            record_scenario,
            record_discovery,
            record_confusion,
            advance_phase,
            advance_to_next_chunk,
            get_teaching_status,
            get_instant_image,
        ],
    )


def create_advanced_teacher() -> Agent:
    """Create advanced teacher (standard model, elaborative interrogation)."""
    return Agent(
        name="AdvancedTeacher",
        model=MODEL_STANDARD,
        instructions=ADVANCED_TEACHER_INSTRUCTIONS,
        tools=[
            record_scenario,
            record_discovery,
            record_confusion,
            advance_phase,
            advance_to_next_chunk,
            get_teaching_status,
            get_instant_image,
        ],
    )
