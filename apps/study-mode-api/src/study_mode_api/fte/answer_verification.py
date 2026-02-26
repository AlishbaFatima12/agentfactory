"""Response analysis for conversational teaching mode.

This module provides utilities for analyzing student responses in
the 4-phase conversational teaching system.

Note: The old A/B quiz verification is removed. This is now purely
for detecting special requests and analyzing response quality.
"""

import logging

logger = logging.getLogger(__name__)


# =============================================================================
# LEGACY STUBS (for backward compatibility with v2 code paths)
# =============================================================================


def strip_answer_marker(text: str) -> str:
    """Legacy stub - no markers to strip in conversational mode."""
    return text


async def extract_and_store_correct_answer(thread_id: str, response_text: str) -> None:
    """Legacy stub - no answer storage in conversational mode."""
    pass


async def verify_student_answer(thread_id: str, student_answer: str) -> str:
    """Legacy stub - returns 'unknown' in conversational mode."""
    return "unknown"


def normalize_answer(text: str) -> str | None:
    """Legacy stub - no A/B normalization in conversational mode."""
    return None


# =============================================================================
# SPECIAL REQUEST DETECTION
# =============================================================================

# Hint/help requests
HINT_PATTERNS = [
    "hint", "help", "confused", "don't understand", "explain",
    "dont understand", "what do you mean", "i'm lost", "im lost",
    "can you clarify", "not following"
]

# Skip/move on requests
SKIP_PATTERNS = [
    "skip", "next", "move on", "pass", "let's continue",
    "lets continue", "next topic", "go on"
]

# Unsure/don't know responses
UNSURE_PATTERNS = [
    "i don't know", "i dont know", "idk", "not sure", "no idea",
    "don't know", "dont know", "unsure", "i'm not sure", "im not sure",
    "no clue", "beats me", "haven't thought about it"
]

# Request for summary/recap
SUMMARY_PATTERNS = [
    "summarize", "summary", "recap", "what did we cover",
    "what have we learned", "key points", "main takeaways"
]

# Explicit completion signals
DONE_PATTERNS = [
    "i'm done", "im done", "that's all", "thats all", "finished",
    "i understand now", "got it", "makes sense now", "clear now"
]


def detect_special_request(text: str) -> str | None:
    """
    Detect if the message is a special request type.

    Args:
        text: The message text

    Returns:
        One of: "hint", "skip", "unsure", "summary", "done", or None
    """
    lower = text.lower().strip()

    # Check patterns in order of specificity
    for pattern in DONE_PATTERNS:
        if pattern in lower:
            return "done"

    for pattern in UNSURE_PATTERNS:
        if pattern in lower:
            return "unsure"

    for pattern in HINT_PATTERNS:
        if pattern in lower:
            return "hint"

    for pattern in SKIP_PATTERNS:
        if pattern in lower:
            return "skip"

    for pattern in SUMMARY_PATTERNS:
        if pattern in lower:
            return "summary"

    return None


def is_minimal_response(text: str) -> bool:
    """
    Check if response is too minimal to be meaningful.

    Args:
        text: The message text

    Returns:
        True if response is minimal (single word, emoji, etc.)
    """
    clean = text.strip()

    # Very short responses
    if len(clean) < 5:
        return True

    # Single word responses
    if len(clean.split()) <= 1:
        return True

    # Just punctuation or emojis
    import re
    if re.match(r'^[\s\W]+$', clean):
        return True

    return False


def extract_key_phrases(text: str) -> list[str]:
    """
    Extract potential key concept phrases from student response.

    Used to check if student is mentioning relevant concepts.

    Args:
        text: The message text

    Returns:
        List of potential key phrases (3+ word sequences)
    """
    import re

    # Clean and split into words
    words = re.findall(r'\b[a-z]+\b', text.lower())

    # Extract 3-4 word phrases
    phrases = []
    for i in range(len(words) - 2):
        phrase = ' '.join(words[i:i+3])
        if len(phrase) > 10:  # Meaningful length
            phrases.append(phrase)

    return phrases


def estimate_understanding_level(text: str, key_concepts: list[str]) -> str:
    """
    Rough estimate of student's understanding based on response.

    Args:
        text: The student's response
        key_concepts: List of concepts they should mention

    Returns:
        One of: "strong", "partial", "weak", "unclear"
    """
    lower = text.lower()

    # Count concept mentions
    mentions = sum(1 for concept in key_concepts if concept.lower() in lower)

    # Response length and depth indicators
    word_count = len(text.split())
    has_reasoning = any(word in lower for word in [
        "because", "therefore", "since", "means", "implies",
        "suggests", "indicates", "shows that"
    ])

    # Score
    if mentions >= len(key_concepts) * 0.7 and has_reasoning:
        return "strong"
    elif mentions >= len(key_concepts) * 0.3 or word_count > 30:
        return "partial"
    elif word_count > 10:
        return "weak"
    else:
        return "unclear"
