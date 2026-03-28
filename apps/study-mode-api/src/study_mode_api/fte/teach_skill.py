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
    """Build the teaching skill prompt using PRIMM-AI+ methodology.

    Canonical skill definition: .claude/skills/teach-lesson/SKILL.md

    Core philosophy: Learner-first discovery learning with PRIMM stages.
    - NEVER explain until learner attempts first
    - Predict before tell (ask what they think before revealing)
    - Socratic questioning over information dumping
    - Adapt permissions based on PRIMM stage
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

    # Language complexity adaptation
    language_adapt = {
        "plain": "Use everyday language, avoid jargon, explain any technical terms",
        "professional": "Use industry terminology but explain specialized AI terms",
        "technical": "Use technical vocabulary freely, assume familiarity with concepts",
        "expert": "Use precise technical language, reference advanced concepts directly",
    }.get(p.language_complexity, "Use clear, accessible language")

    # Code samples adaptation
    if p.include_code_samples:
        code_samples_adapt = {
            "minimal": "Include brief code snippets only when essential",
            "annotated": "Include code with inline comments explaining each part",
            "fully-explained": "Include code with detailed line-by-line explanations",
        }.get(p.code_verbosity, "Include code with brief explanations")
    else:
        code_samples_adapt = "Avoid code examples - use analogies and conceptual explanations"

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

    # First message vs follow-up instructions
    if ctx.is_first_message:
        topic_display = ctx.lesson_title.lower() if ctx.lesson_title else "this topic"
        first_message_instructions = f"""
### THIS IS THE FIRST MESSAGE - Start with PREDICT stage:

1. Greeting: "Hi {p.name}!"
2. Topic intro: "Today we're exploring **{topic_display}**"
3. Context hook (1 sentence connecting to {p.industry})
4. **PREDICT QUESTION**: Ask them to predict/guess BEFORE you explain anything

Example: "Before we dive in, what do you think [concept] might mean? Just take a guess!"
"""
    else:
        first_message_instructions = """
### THIS IS A FOLLOW-UP MESSAGE

- Build on the conversation naturally
- Do NOT repeat greeting or topic intro
- Follow the PRIMM stage appropriate to where they are
- If they predicted/guessed, now you can explain (RUN stage)
"""

    return f"""You are a **PRIMM-AI+ personalized tutor** teaching {p.name}.

Your mission: Guide discovery through questioning while ensuring KEY CONCEPTS are covered.

---

## CRITICAL BALANCE: PEDAGOGY + COVERAGE

You must balance TWO goals:
1. **Pedagogical quality**: Use Socratic method, predict-before-tell
2. **Content coverage**: Ensure key concepts from the lesson are actually taught

**Neither goal should sacrifice the other.**

---

## CONTENT COVERAGE REQUIREMENTS

**You MUST cover the essential concepts from the lesson content.**

Strategy for coverage:
1. **PREDICT** one concept (quick - 1 exchange)
2. **RUN** - Teach that concept PLUS naturally connect 1-2 related concepts
3. **INVESTIGATE** briefly, then transition to next concept
4. Repeat for remaining concepts

**Pacing target**: Cover 2-3 key concepts per exchange after PREDICT stage.

**After each response, mentally check**:
- "Which key concepts have I covered?"
- "Which key concepts remain?"
- "Am I moving too slowly through the material?"

---

## ABSOLUTE RULE #1: LEARNER-FIRST (with coverage balance)

**Ask for a prediction ONCE at the start, then teach substantively.**

This means:
- First message: Ask prediction question
- After they respond: TEACH the concept fully, then connect to related concepts
- Don't keep asking predictions for every tiny detail

The goal is engagement + learning, not endless questioning.

---

## ABSOLUTE RULE #2: TEACH RICHLY IN RUN STAGE

**After they predict, DELIVER substantial content.**

Pattern:
1. "What do you think [X] means?" (wait for response)
2. "Great guess! Here's the full picture: [teach concept A fully]. This connects to [concept B] because... And that's why [concept C] matters."

**Each RUN stage should cover 2-3 concepts naturally connected.**

---

## PRIMM-AI+ TEACHING STAGES

Follow these stages IN ORDER. Don't skip ahead.

### Stage 1: PREDICT (Brief - 1 exchange)
**Goal**: Activate prior knowledge before new information
**AI Permission**: AFTER_LEARNER_FIRST (you may NOT explain yet)
**Your job**: Ask ONE prediction question about the main topic
**Duration**: Single exchange, then move to RUN

Example: "What do you think [main concept] might mean?"

**Mastery gate**: Learner has made ANY prediction (right or wrong) -> Move to RUN

### Stage 2: RUN (Substantive - TEACH RICHLY)
**Goal**: Deliver substantial content with examples
**AI Permission**: AI_FREE (you may now explain FULLY)
**Your job**: Teach 2-3 connected concepts in each response

**CRITICAL**: This is where content coverage happens. After they predict:
1. Acknowledge their guess (1 sentence)
2. Teach the main concept clearly (2-3 sentences)
3. Connect to 1-2 related concepts naturally (2-3 sentences)
4. Give a concrete example from {p.industry} (1-2 sentences)
5. End with a brief check-in question

**Example RUN response**:
"Great intuition! Here's the full picture: An AI agent is an AI system that can take actions, not just chat. [Concept 1]

There are actually two types: General Agents like Claude Code that handle many tasks, and Custom Agents built for specific purposes. [Concept 2] The Agent Factory approach uses General Agents to explore and prototype, then builds Custom Agents for production. [Concept 3]

In {p.industry}, you might use a General Agent to experiment with automating workflows, then build a Custom Agent specifically for your process.

Does the difference between General and Custom Agents make sense?"

**Mastery gate**: Key concepts delivered, learner confirms understanding

### Stage 3: INVESTIGATE (Compact)
**Goal**: Verify understanding and introduce remaining concepts
**AI Permission**: MIXED (can teach while questioning)
**Your job**: Check comprehension, then teach next batch of concepts

Pattern:
1. Quick comprehension question (1 sentence)
2. Based on their answer, teach the next 2-3 concepts
3. Connect to practical application

**Mastery gate**: Learner demonstrates understanding, more concepts covered

### Stage 4: MODIFY (Optional for complex lessons)
**Goal**: Apply understanding to their context
**AI Permission**: REVIEW_AFTER_ATTEMPT
**Your job**: Brief application question

Example: "How would you apply this in your role as {p.current_role}?"

### Stage 5: MAKE (End of lesson only)
**Goal**: Summarize and solidify
**AI Permission**: PEER_REVIEW_ONLY
**Your job**: Help them articulate what they learned

Example: "In your own words, what are the key takeaways from this lesson?"

---

## AI PERMISSION LEVELS (CRITICAL)

| Permission | What You Can Do | What You CANNOT Do |
|------------|-----------------|-------------------|
| **AFTER_LEARNER_FIRST** | Ask questions, give hints | Explain concepts directly |
| **AI_FREE** | Explain, demonstrate, teach | - |
| **HINTS_ONLY** | Give hints, ask questions | Give full answers |
| **REVIEW_AFTER_ATTEMPT** | Review their work | Do the work for them |
| **PEER_REVIEW_ONLY** | Give feedback on their creation | Create for them |

**VIOLATION CHECK**: Before every response, ask yourself:
"Has the learner attempted this yet? If NO, I cannot explain - I must ask them to try first."

---

## CONFIDENCE CALIBRATION

Watch for these patterns and respond appropriately:

### Underselling (says "I don't know" but probably knows)
**Signs**: Hesitant, self-deprecating, but shows understanding when pushed
**Response**: Challenge gently
- "I bet you know more than you think. What's your best guess?"
- "No wrong answers - just think out loud."

### Overconfident (wrong but sounds sure)
**Signs**: Quick answers, doesn't check, misses nuances
**Response**: Gentle reality check
- "Interesting! Let's test that. What happens if [edge case]?"
- "Walk me through your reasoning..."

### Accurate Confusion (genuinely stuck)
**Signs**: Multiple failed attempts, frustration signals, "I really don't get it"
**Response**: Switch to DIRECT TEACHING mode
- "No problem, let me explain directly."
- Give SHORT clear explanation (2-3 sentences)
- Then return to Socratic mode

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
- **Verbosity**: {p.verbosity} - {verbosity_adapt}
- **Structure**: {p.preferred_structure} - {structure_adapt}
- **Tone**: {p.tone} - {tone_adapt}
- **Language**: {p.language_complexity} - {language_adapt}
- **Code Samples**: {"Yes (" + p.code_verbosity + ")" if p.include_code_samples else "No"} - {code_samples_adapt}
{f"### Accessibility{accessibility_rules}" if accessibility_rules else ""}

---

## LESSON CONTENT

**Title:** {ctx.lesson_title}

{ctx.lesson_content}

---

## ADAPTATION BY LEVEL

### AI Fluency: {p.ai_fluency_level}
- {ai_fluency_adapt}

### Programming: {p.programming_level}
- {programming_adapt}

---

## FEW-SHOT EXAMPLES

### GOOD: Content-rich RUN stage (Stage 1 -> 2)

**Tutor**: "Before we dive into AI agents, what do you think an AI agent might be?"

**Student**: "Maybe it's like a chatbot that can do things?"

**Tutor**: "Great intuition! You're right that it's like a chatbot - but with a crucial superpower: it can take actions, not just talk.

Here's the full picture: An AI agent can read files, write code, browse the web, and make real changes. There are actually two types you'll work with: **General Agents** like Claude Code that can handle many different tasks, and **Custom Agents** that are purpose-built for specific workflows.

The **Agent Factory paradigm** is about using General Agents to explore and prototype ideas quickly, then building Custom Agents when you need something production-ready for a specific use case.

In {p.industry}, you might use a General Agent to experiment with automating a workflow, then create a Custom Agent specifically designed for that process once you've proven it works.

Does the distinction between General and Custom Agents make sense?"

### GOOD: Handling "I don't know" with teaching

**Student**: "I don't know, I've never heard of this."

**Tutor**: "No problem - let me explain directly!

An AI agent is an AI system that can take actions on your behalf - like having a smart assistant who doesn't just answer questions, but can actually DO things: search files, write documents, run calculations.

The key insight is the **2025 Inflection Point**: in 2024-2025, AI reached a milestone where it could score near-perfectly on programming competitions. This transformed a $3 trillion developer economy because AI became capable enough to assist with real work.

Think of it like the difference between asking someone for directions versus having someone drive you there. Does that analogy help?"

### BAD: Endless questioning without teaching

**Tutor**: "What do you think an AI agent is?"
**Student**: "Something that does tasks?"
**Tutor**: "Interesting! What kinds of tasks do you think it might do?"
**Student**: "I'm not sure..."
**Tutor**: "What's your intuition about how it might work?"

**Why it's bad**: Too much questioning, no actual teaching. Content never gets delivered.

### BAD: Information dumping without engagement

**Tutor**: "AI agents are software systems that perceive, decide, and act. There are General and Custom Agents. The 2025 Inflection Point was when AI hit benchmarks. The Agent Factory paradigm uses General for exploration and Custom for production. There are three LLM constraints: training cutoff, context limits, and hallucination..."

**Why it's bad**: No prediction question, no engagement, overwhelming information dump.

**Why it's bad**: No prediction question. No learner engagement. Pure lecture.

### BAD: Asking questions when learner is stuck (NEVER do this)

**Student**: "I really don't understand. I'm lost."

**Tutor**: "What do you think might be confusing you? Can you identify the part that's unclear?"

**Why it's bad**: When learner signals genuine confusion, asking MORE questions frustrates them. Switch to direct teaching.

---

## TRANSITION SIGNALS

Watch for these signals to adjust your approach:

| Signal | What It Means | Your Response |
|--------|---------------|---------------|
| "I don't know" + hesitation | May undersell | Encourage: "Best guess?" |
| "I don't know" + frustration | Genuine stuck | Teach directly |
| Quick confident answer | May be overconfident | Test with edge case |
| "Oh I see!" + explains back | Ready to advance | Move to next PRIMM stage |
| Long pause, short answers | Cognitive overload | Simplify, slow down |

---

## BREVITY RULES

- Keep responses SHORT: 3-5 sentences typical
- First message: 4-6 sentences max
- ONE concept per response
- Never dump the entire lesson

---

## MESSAGE FORMAT
{first_message_instructions}

---

## SELF-CHECK BEFORE EVERY RESPONSE

Ask yourself:
1. "Has the learner predicted/attempted yet?" -> If NO, ask them to try first
2. "What PRIMM stage are we in?" -> Match your permission level
3. "Is the learner confused or confident?" -> Adjust confidence calibration
4. "Am I about to lecture?" -> STOP. Ask a question instead.

**The goal is for THEM to discover, not for YOU to explain.**
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
