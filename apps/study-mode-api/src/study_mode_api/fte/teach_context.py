"""TeachContext dataclass for Guided Learning v9.

Simplified context with minimal state:
- Phase 0: Onboarding (student profile)
- Phase 2: Teaching (linear concept progression)

No complex phases. No mastery gates. Let the LLM handle guided learning naturally.
"""

from dataclasses import dataclass, field


@dataclass
class TeachContext:
    """Minimal context for Guided Learning v9.

    Backend is lightweight. LLM is intelligent.
    """

    # ==========================================================================
    # CORE LESSON DATA
    # ==========================================================================
    lesson_title: str
    chunks: list[dict]  # [{index, title, content}, ...]
    current_chunk_index: int = 0
    total_chunks: int = 0
    is_first_message: bool = True
    thread_id: str = ""
    user_name: str = ""

    # ==========================================================================
    # STUDENT PROFILE (Phase 0)
    # ==========================================================================
    current_phase: str = "phase_0"  # "phase_0" or "phase_2" (teaching)
    student_role: str = ""           # What they do
    student_world: str = ""          # Their field for analogies
    learner_type: str = "intermediate"  # "beginner", "intermediate", "advanced"

    # Personalization path tracking
    personalization_path: str = ""  # "everyday", "direct", "work", "passion"
    ai_experience_asked: bool = False
    ai_experience_answered: bool = False

    # ==========================================================================
    # TEACHING STATE (Minimal)
    # ==========================================================================
    # Key concepts extracted from chunk (pre-processed, not by LLM)
    key_concepts: list[str] = field(default_factory=list)

    # Progress tracking
    discovered_concepts: list[str] = field(default_factory=list)
    conversation_turns: int = 0

    # Image injection (used by chatkit_server)
    open_image_url: str = ""

    # ==========================================================================
    # COMPUTED PROPERTIES
    # ==========================================================================

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
    def current_concept(self) -> str:
        """Get the current concept to teach based on turns."""
        if not self.key_concepts:
            return "the lesson"
        # Progress through concepts based on conversation turns
        # Allow 1-2 turns per concept
        concept_idx = min(self.conversation_turns // 2, len(self.key_concepts) - 1)
        return self.key_concepts[concept_idx]

    @property
    def progress_summary(self) -> str:
        """Simple progress summary for logging."""
        return (
            f"Turns: {self.conversation_turns} | "
            f"Concepts: {len(self.discovered_concepts)}/{len(self.key_concepts)}"
        )
