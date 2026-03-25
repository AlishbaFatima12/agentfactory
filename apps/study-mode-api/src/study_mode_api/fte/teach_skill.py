"""Simplified Teaching Skill - Agent as a Tool.

Core Philosophy (from reviewer):
- Agent is a tool, not a complex state machine
- Three inputs: Learner Profile + Skill Prompt + Lesson Content
- Prove the core works first, then add features

The skill adapts teaching to the learner profile and streams responses.
No phases, no QUICK_START parsing, no complex state machines.

Canonical skill definition: .claude/skills/teach-lesson/SKILL.md
"""

import hashlib
import json
import logging
import os
from dataclasses import dataclass
from typing import TYPE_CHECKING, Any

from agents import Agent, RunContextWrapper
from agents.extensions.models.litellm_model import LitellmModel

from api_infra.core.redis_cache import safe_redis_get, safe_redis_set

if TYPE_CHECKING:
    import httpx

logger = logging.getLogger(__name__)


# =============================================================================
# LEARNER PROFILE (from API or mock)
# =============================================================================

@dataclass
class LearnerProfile:
    """Simplified learner profile for teaching adaptation.

    Maps the full profile JSON to what the skill needs for teaching.
    """
    name: str

    # Expertise levels
    domain_level: str  # beginner, intermediate, advanced
    domain_name: str   # e.g., "supply chain logistics"
    programming_level: str
    ai_fluency_level: str

    # Professional context
    current_role: str
    industry: str
    tools_in_use: list[str]

    # Communication preferences (aligned with canonical learner-profile-api schema)
    language_complexity: str  # plain, professional, technical, expert
    preferred_structure: str  # problem-first, concept-first, example-first
    verbosity: str  # concise, moderate, detailed
    tone: str  # formal, conversational, encouraging
    wants_check_in_questions: bool

    # Delivery preferences
    include_code_samples: bool
    code_verbosity: str  # minimal, annotated, fully-explained

    # Accessibility
    screen_reader: bool
    cognitive_load_preference: str  # reduced, standard, high

    @classmethod
    def from_api_response(cls, data: dict[str, Any]) -> "LearnerProfile":
        """Create from the full learner profile API response."""
        expertise = data.get("expertise", {})
        domain_list = expertise.get("domain", [{}])
        primary_domain = next(
            (d for d in domain_list if d.get("is_primary")),
            domain_list[0] if domain_list else {}
        )
        programming = expertise.get("programming", {})
        ai_fluency = expertise.get("ai_fluency", {})

        professional = data.get("professional_context", {})
        communication = data.get("communication", {})
        delivery = data.get("delivery", {})
        accessibility = data.get("accessibility", {})

        return cls(
            name=data.get("name", "Student"),
            domain_level=primary_domain.get("level", "beginner"),
            domain_name=primary_domain.get("domain_name", "their field"),
            programming_level=programming.get("level", "beginner"),
            ai_fluency_level=ai_fluency.get("level", "beginner"),
            current_role=professional.get("current_role", "professional"),
            industry=professional.get("industry", "technology"),
            tools_in_use=professional.get("tools_in_use", []),
            language_complexity=communication.get("language_complexity", "technical"),
            preferred_structure=communication.get("preferred_structure", "problem-first"),
            verbosity=communication.get("verbosity", "detailed"),
            tone=communication.get("tone", "conversational"),
            wants_check_in_questions=communication.get("wants_check_in_questions", True),
            include_code_samples=delivery.get("include_code_samples", True),
            code_verbosity=delivery.get("code_verbosity", "minimal"),
            screen_reader=accessibility.get("screen_reader", False),
            cognitive_load_preference=accessibility.get("cognitive_load_preference", "standard"),
        )

    @classmethod
    def mock(cls, user_name: str | None = None) -> "LearnerProfile":
        """Create a default profile for users without a saved profile.

        Uses generic defaults that work for any learner. The profile API
        should be used for personalized teaching; this is the fallback.

        Args:
            user_name: Optional user name to personalize greeting
        """
        return cls(
            name=user_name or "there",  # "Hi there!" if no name
            domain_level="beginner",
            domain_name="your field",
            programming_level="beginner",
            ai_fluency_level="beginner",
            current_role="professional",
            industry="technology",
            tools_in_use=[],
            language_complexity="plain",
            preferred_structure="problem-first",
            verbosity="detailed",
            tone="encouraging",
            wants_check_in_questions=True,
            include_code_samples=False,
            code_verbosity="minimal",
            screen_reader=False,
            cognitive_load_preference="standard",
        )


# Profile cache TTL - 5 minutes (profiles rarely change mid-session)
# Cache is stored in Redis to avoid memory leaks and survive restarts
_PROFILE_CACHE_TTL = 300  # 5 minutes in seconds

# Reusable httpx client for connection pooling
_http_client: "httpx.AsyncClient | None" = None


def _get_http_client() -> "httpx.AsyncClient":
    """Get or create reusable HTTP client for connection pooling.

    Returns an httpx.AsyncClient instance.
    """
    global _http_client
    if _http_client is None:
        import httpx
        _http_client = httpx.AsyncClient(timeout=10.0)
    return _http_client


async def close_http_client() -> None:
    """Close the httpx client on shutdown.

    Called from lifespan.py to ensure clean shutdown without
    httpx warnings about unclosed connections.
    """
    global _http_client
    if _http_client is not None:
        await _http_client.aclose()
        _http_client = None
        logger.info("[TeachSkill] HTTP client closed")


async def fetch_learner_profile(
    auth_token: str | None = None,
) -> LearnerProfile | None:
    """Fetch learner profile from the Learner Profile API with Redis caching.

    Uses the /api/v1/profiles/me endpoint which identifies the user
    from the JWT (JSON Web Token) in the Authorization header.

    Caches profiles in Redis for 5 minutes to avoid repeated HTTP calls
    within the same conversation. Uses token hash as cache key to avoid
    memory leaks from storing full JWTs.

    Args:
        auth_token: JWT auth token (required for production)

    Returns:
        LearnerProfile if found, None otherwise
    """
    # Require auth token for production
    if not auth_token:
        logger.info("[TeachSkill] No auth token provided, cannot fetch profile")
        return None

    # Cache key from token hash (16 chars of SHA256 = 64 bits, collision-safe)
    cache_key = f"learner_profile:{hashlib.sha256(auth_token.encode()).hexdigest()[:16]}"

    # Check Redis cache first
    try:
        cached = await safe_redis_get(cache_key)
        if cached:
            logger.debug("[TeachSkill] Using cached learner profile from Redis")
            return LearnerProfile.from_api_response(json.loads(cached))
    except Exception as e:
        # Redis failure should not block profile fetch
        logger.warning(f"[TeachSkill] Redis cache read failed: {e}")

    # Get API URL from environment
    api_url = os.getenv("LEARNER_PROFILE_API_URL", "http://localhost:8004")

    try:
        client = _get_http_client()
        headers = {"Authorization": auth_token}

        response = await client.get(
            f"{api_url}/api/v1/profiles/me",
            headers=headers,
        )

        if response.status_code == 200:
            data = response.json()
            profile = LearnerProfile.from_api_response(data)
            # Cache the profile in Redis
            try:
                await safe_redis_set(cache_key, json.dumps(data), _PROFILE_CACHE_TTL)
                logger.info("[TeachSkill] Loaded and cached learner profile in Redis")
            except Exception as e:
                logger.warning(f"[TeachSkill] Redis cache write failed: {e}")
            return profile
        elif response.status_code == 404:
            logger.info("[TeachSkill] No profile found for current user")
            return None
        else:
            logger.warning(
                f"[TeachSkill] Profile API returned {response.status_code}"
            )
            return None

    except Exception as e:
        logger.warning(f"[TeachSkill] Failed to fetch profile: {e}")
        return None


async def get_learner_profile(
    user_name: str | None = None,
    auth_token: str | None = None,
) -> LearnerProfile:
    """Get learner profile from API or create mock.

    Args:
        user_name: Optional user name for mock profile fallback
        auth_token: JWT auth token for API call

    Returns:
        LearnerProfile (from API or mock)
    """
    # Try to fetch from API first (requires auth token)
    profile = await fetch_learner_profile(auth_token)

    if profile:
        return profile

    # Fall back to default profile
    logger.info("[TeachSkill] Using default profile (no API profile found)")
    return LearnerProfile.mock(user_name=user_name)


# =============================================================================
# TEACHING CONTEXT (Simple)
# =============================================================================

@dataclass
class TeachingContext:
    """Simple context for the teaching skill.

    Contains:
    - Learner profile
    - Lesson content
    - Thread ID for logging
    - Whether this is the first message (for greeting)
    """
    profile: LearnerProfile
    lesson_title: str
    lesson_content: str
    thread_id: str = ""
    is_first_message: bool = True


# =============================================================================
# TEACHING SKILL PROMPT (Guided Learning Methodology)
# =============================================================================

def build_teaching_skill_prompt(ctx: TeachingContext) -> str:
    """Build the teaching skill prompt using Guided Learning methodology.

    Canonical skill definition: .claude/skills/teach-lesson/SKILL.md

    Core philosophy: Guide toward understanding, don't lecture.
    - Questioning over telling
    - Reasoning over memorization
    - Real-world examples over abstract definitions
    - One concept at a time
    """
    p = ctx.profile

    # Build tools context
    tools_list = ", ".join(p.tools_in_use) if p.tools_in_use else "various AI tools"

    # Pre-compute adaptation strings
    ai_fluency_adapt = {
        "beginner": "Explain fundamentals from first principles",
        "intermediate": "Connect to known AI concepts, bridge to advanced",
        "advanced": "Discuss architecture, design tradeoffs, edge cases",
    }.get(p.ai_fluency_level, "Adapt to their level")

    programming_adapt = {
        "beginner": "Avoid code-heavy explanations, use analogies",
        "intermediate": "Simple code examples when helpful",
        "advanced": "Include minimal real code, focus on patterns",
    }.get(p.programming_level, "Adapt code examples to their level")

    verbosity_adapt = {
        "concise": "2-4 sentences, get to the point",
        "moderate": "4-6 sentences, balance depth with clarity",
        "detailed": "Thorough with context and implications",
    }.get(p.verbosity, "4-6 sentences")

    structure_adapt = {
        "problem-first": "Start with the problem, then solution",
        "concept-first": "Start with definition, then applications",
        "example-first": "Lead with example, extract principle",
    }.get(p.preferred_structure, "Start with the problem")

    tone_adapt = {
        "formal": "Professional, academic language",
        "conversational": "Natural, friendly, use contractions",
        "encouraging": "Warm, supportive, celebrate progress",
    }.get(p.tone, "Natural and friendly")

    check_in_adapt = (
        "Ask a thinking question to verify understanding."
        if p.wants_check_in_questions
        else "Provide the next insight or ask if they want to go deeper."
    )

    # Accessibility instructions
    accessibility_rules = ""
    if p.screen_reader:
        accessibility_rules += """
- Use clear headings for structure
- Avoid visual-only references
- Describe concepts in text, not diagrams"""
    if p.cognitive_load_preference == "reduced":
        accessibility_rules += """
- Teach ONE idea only per response
- Keep responses shorter
- More frequent check-ins"""

    # Advanced learner micro-exercise
    micro_exercise = ""
    if p.ai_fluency_level == "advanced" or p.programming_level == "advanced":
        micro_exercise = """
7. **Micro Exercise** (Optional)
   For this advanced learner, occasionally ask them to analyze or implement."""

    # First message vs follow-up instructions
    if ctx.is_first_message:
        # Make the topic intro more natural - use lowercase for flow
        topic_display = ctx.lesson_title.lower() if ctx.lesson_title else "this topic"
        first_message_instructions = f"""
### THIS IS THE FIRST MESSAGE - Include greeting and topic intro:

**Start with:**
1. Greeting: "Hi {p.name}!"
2. Topic: "Today we're diving into **{topic_display}**" (or similar natural phrasing)
3. Quick context (1 sentence connecting to {p.industry})
4. Open-ended question (NOT multiple choice A/B/C)
"""
    else:
        first_message_instructions = """
### THIS IS A FOLLOW-UP MESSAGE - Do NOT repeat greeting or topic.

**Just respond directly to what the user said:**
- Build on the conversation
- Do NOT re-introduce yourself or the topic
- Do NOT greet them again
- If they said "I don't know", teach directly
"""

    return f"""You are a **personalized AI tutor using Guided Learning principles**.

Your goal is not to lecture, but to **guide {p.name} toward understanding**.

---

## CRITICAL RULES

### BREVITY IS MANDATORY
- Keep responses **SHORT**: 3-5 sentences max for most interactions
- First message: 4-6 sentences max
- Follow-up messages: 2-4 sentences max
- Get to the point quickly. No lengthy preambles.

### WHEN USER SAYS "I DON'T KNOW" / "NOT SURE" / SHOWS CONFUSION
**STOP asking questions. Switch to DIRECT TEACHING:**
1. "No problem, let me explain directly."
2. Give a SHORT, clear explanation (2-3 sentences)
3. One simple example (1 sentence)
4. "Does that make sense?" (optional)

**DO NOT keep asking questions if they're struggling. Teach first.**

---

## STUDENT PROFILE

| Attribute | Value |
|-----------|-------|
| Name | {p.name} |
| Role | {p.current_role} |
| Industry | {p.industry} |
| AI Fluency | {p.ai_fluency_level} |
| Programming | {p.programming_level} |
| Domain | {p.domain_level} in {p.domain_name} |
| Tools | {tools_list} |

### Communication Preferences
- **Verbosity**: {p.verbosity}
- **Structure**: {p.preferred_structure}
- **Tone**: {p.tone}
- **Check-in Questions**: {"Yes" if p.wants_check_in_questions else "No"}

---

## LESSON CONTENT

**Title:** {ctx.lesson_title}

{ctx.lesson_content}

---

## CORE TEACHING PHILOSOPHY

Always prefer:
- **Questioning** over telling
- **Reasoning** over memorization
- **Real-world examples** over abstract definitions
- **Gradual progression** over information dumping

---

## LESSON CHUNK RULE

The lesson may contain multiple concepts. You MUST:
- Teach only **ONE concept at a time**
- Never dump the entire lesson
- Focus on the part relevant to the student's message

---

## ADAPTATION RULES

### By AI Fluency: {p.ai_fluency_level}
- {ai_fluency_adapt}

### By Programming: {p.programming_level}
- {programming_adapt}

### By Industry: {p.industry}
Connect concepts to {p.domain_name}. Use examples like:
- Real scenarios from {p.industry}
- Problems a {p.current_role} would face
- Tools they already use ({tools_list})

### By Communication Style
- **Verbosity ({p.verbosity})**: {verbosity_adapt}
- **Structure ({p.preferred_structure})**: {structure_adapt}
- **Tone ({p.tone})**: {tone_adapt}
{f"### Accessibility{accessibility_rules}" if accessibility_rules else ""}

---

## GUIDED LEARNING FLOW

**KEEP IT SHORT: 3-5 sentences max per step. Total response: 6-10 sentences max.**

When responding, follow this structure (adapt based on context):

1. **Problem Framing** (1-2 sentences)
   Quick real-world problem from their {p.industry}.

2. **Curiosity Question** (1 sentence)
   Ask ONE thinking question to activate prior knowledge.

3. **Concept Explanation** (2-3 sentences)
   Explain the concept from the lesson. Adapt to {p.ai_fluency_level}.

4. **Real-World Example** (1-2 sentences)
   Show how this appears in {p.industry}. Reference {tools_list} if relevant.

5. **Contextual Application** (1 sentence)
   "In your work as a {p.current_role}..."

6. **Knowledge Check** (1 question)
   {check_in_adapt}
   **NOT a quiz. Ask an open-ended thinking question, NOT multiple choice A/B/C.**
{micro_exercise}

---

## SPECIAL CASES

### When User Says "Teach me" / "Just explain":
Skip to step 3-5. Give direct explanation without preamble.

### When User Says "I don't know" / "Not sure" / Shows Confusion:
**STOP asking questions. Switch to DIRECT TEACHING:**
1. "No problem. Here's the key idea:" (2-3 sentences)
2. Simple example (1 sentence)
3. "So basically, [concept] = [simple definition]. Make sense?"

**DO NOT keep asking questions when they're struggling.**

---

## WHAT NOT TO DO

- **Never write long paragraphs** - Keep each step SHORT
- **Never keep asking questions when user says "I don't know"** - Teach directly
- **Never use multiple choice (A/B/C) questions** - Ask open-ended thinking questions
- Never dump the entire lesson content
- Never ignore their profile - always adapt
- Never use jargon without explanation (unless advanced)
- Never repeat the same framing across multiple messages

---

## MESSAGE FORMAT
{first_message_instructions}
"""


# =============================================================================
# MODEL CONFIGURATION
# =============================================================================


class ModelProvider:
    """Singleton provider for the teaching model.

    Event-loop-safe lazy initialization of the LiteLLM model (unified LLM API wrapper
    that provides consistent interface across providers like OpenAI, Gemini, etc.).

    Note: This is safe within a single asyncio event loop but not truly thread-safe.
    For multi-threaded scenarios, add a threading.Lock.

    Avoids global mutable state while maintaining single instance.

    Usage:
        model = ModelProvider.get_model()
    """

    _instance: LitellmModel | None = None

    @classmethod
    def get_model(cls) -> LitellmModel:
        """Get or create the model instance (lazy initialization)."""
        if cls._instance is None:
            api_key = os.getenv("GEMINI_API_KEY")
            if not api_key:
                raise ValueError("GEMINI_API_KEY environment variable not set.")
            cls._instance = LitellmModel(
                model="gemini/gemini-2.5-flash",
                api_key=api_key,
            )
        return cls._instance

    @classmethod
    def reset(cls) -> None:
        """Reset the cached model instance (useful for testing)."""
        cls._instance = None


# =============================================================================
# AGENT CREATION (Simple)
# =============================================================================

def create_teaching_agent(profile: LearnerProfile | None = None) -> Agent[TeachingContext]:
    """Create the simplified teaching agent.

    This is the agent-as-a-tool approach:
    - Takes a learner profile
    - Has access to lesson content via context
    - Streams teaching responses

    No tools needed - just the skill prompt and streaming.
    """

    def dynamic_instructions(
        ctx: RunContextWrapper[TeachingContext],
        agent: Agent,
    ) -> str:
        """Build instructions from context."""
        teaching_ctx = ctx.context
        instructions = build_teaching_skill_prompt(teaching_ctx)
        logger.info(
            f"[TeachSkill] Built prompt for {teaching_ctx.profile.name}, "
            f"lesson: {teaching_ctx.lesson_title[:30]}..."
        )
        return instructions

    return Agent(
        name="TeachingSkill",
        model=ModelProvider.get_model(),
        instructions=dynamic_instructions,
        tools=[],  # No tools - just teaching
    )
