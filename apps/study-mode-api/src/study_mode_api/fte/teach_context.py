"""TeachContext dataclass for Blended Teaching v7.1.

This context is passed to the agent via RunContextWrapper and contains
all state needed for the 5-phase teaching session:

Phase 0: KNOW YOUR STUDENT - Learn role, field, expertise level
Phase 1: CASE-BASED HOOK - Scenario from their world
Phase 2: SOCRATIC DISCOVERY - Guided questioning (per chunk/topic)
Phase 3: DIRECT INSTRUCTION - Fill gaps, resolve scenario
Phase 4: RETRIEVAL PRACTICE - Cognitive reset + recall
"""

from dataclasses import dataclass, field


@dataclass
class TeachContext:
    """Context for Blended Teaching v7.1.

    5-phase conversational teaching with student profiling,
    personalized scenarios, and retrieval practice.
    """

    lesson_title: str
    chunks: list[dict]  # [{index, title, content}, ...]
    current_chunk_index: int = 0
    total_chunks: int = 0
    is_first_message: bool = True
    thread_id: str = ""
    user_name: str = ""
    open_image_url: str = ""  # Pre-fetched DALL-E image for Phase 1

    # ==========================================================================
    # BLENDED TEACHING v7.1 - 5 PHASES
    # ==========================================================================
    # phase_0 → phase_1 → phase_2 → mastery_gate → phase_3 → phase_4
    current_phase: str = "phase_0"

    # Student Profile (built in Phase 0)
    student_role: str = ""           # "developer", "startup founder", "teacher"
    student_level: str = "novice"    # "novice", "intermediate", "advanced"
    student_world: str = ""          # Their industry/field for analogies

    # ==========================================================================
    # PHM INTEGRATION - Personalization Path Tracking
    # ==========================================================================
    # Track which path user chose to prevent asking wrong questions
    personalization_path: str = ""  # "everyday", "direct", "work", "passion"
    ai_experience_asked: bool = False  # True after we asked AI experience
    ai_experience_answered: bool = False  # True after user answered AI experience

    # Learner type determines which teaching approach to use
    learner_type: str = "intermediate"  # "beginner", "intermediate", "advanced"

    # Current teaching approach (dynamically selected based on learner_type)
    # Options: "scaffolded", "socratic", "case_based", "elaborative", "direct"
    current_approach: str = "socratic"

    # 3-Strike Fallback System
    # Tracks consecutive confused/wrong answers to trigger approach switch
    confusion_streak: int = 0        # Resets on correct answer
    fallback_triggered: bool = False # True if we switched to direct instruction

    # Opening Scenario (created in Phase 1, referenced throughout)
    opening_scenario: str = ""       # The case-based hook scenario
    scenario_question: str = ""      # The question posed in Phase 1

    # Concept Tracking (for Phase 2 Socratic Discovery)
    discovered_concepts: list[str] = field(default_factory=list)
    pending_concepts: list[str] = field(default_factory=list)
    key_concepts: list[str] = field(default_factory=list)
    current_asking_concept: str = ""  # Which concept agent is currently asking about

    # Conversation Tracking
    conversation_turns: int = 0      # Total turns in Phase 2
    chunk_turns: int = 0             # Turns for current chunk
    topics_in_chunk: int = 0         # Topics to cover in current chunk

    # Mastery Gate
    mastery_check_done: bool = False

    @property
    def current_chunk(self) -> dict | None:
        """Get the current chunk being taught."""
        if self.current_chunk_index < len(self.chunks):
            return self.chunks[self.current_chunk_index]
        return None

    @property
    def is_complete(self) -> bool:
        """Check if lesson is complete."""
        return self.current_chunk_index >= self.total_chunks

    @property
    def remaining_concepts(self) -> list[str]:
        """Concepts not yet discovered by student."""
        return [c for c in self.key_concepts if c not in self.discovered_concepts]

    @property
    def discovery_progress(self) -> float:
        """Percentage of concepts discovered (0.0 to 1.0)."""
        if not self.key_concepts:
            return 1.0
        return len(self.discovered_concepts) / len(self.key_concepts)
