"""Guardrails for Teaching Agent Output Validation.

Prevents:
1. Repeat questions about discovered concepts
2. Internal instructions leaking to users
3. Wrong follow-up questions based on personalization path
4. Asking profession for everyday/direct paths
"""

import re
from dataclasses import dataclass


@dataclass
class GuardrailResult:
    """Result of guardrail validation."""
    is_valid: bool
    issues: list[str]
    fixed_output: str | None = None


# Forbidden patterns - internal instructions that should never leak
FORBIDDEN_PATTERNS = [
    r"Phase \d:",
    r"PHASE \d",
    r"mastery.?gate",
    r"advance_phase",
    r"record_discovery",
    r"advance_to_next_chunk",
    r"get_instant_image",
    r"set_student_profile",
    r"record_personalization",
    r"Call this tool",
    r"YOUR EXACT RESPONSE:",
    r"YOUR TASK:",
    r"FORBIDDEN ACTIONS:",
    r"MANDATORY FIRST CHECK",
    r"\(readable\):",
    r"Scenario \(\d+ sentence",
    r"chunk content",
    r"chunk_turns",
    r"discovered_concepts",
    r"learner_type",
    r"current_approach",
    r"confusion_streak",
    r"tc\.",  # Context object references
    r"ctx\.",
]

# Profession-related patterns for everyday/direct paths
PROFESSION_PATTERNS = [
    r"what(?:'s| is)? your (?:field|profession|job|work|occupation)",
    r"what do you do(?:\?| for)",
    r"tell me (?:about )?your (?:field|profession|job|work)",
    r"(?:your|the) (?:field|profession|industry|job)",
]


def validate_no_leaks(output: str) -> GuardrailResult:
    """Check for internal instruction leaks."""
    issues = []

    for pattern in FORBIDDEN_PATTERNS:
        if re.search(pattern, output, re.IGNORECASE):
            issues.append(f"Leaked internal instruction: {pattern}")

    return GuardrailResult(
        is_valid=len(issues) == 0,
        issues=issues
    )


def validate_no_repeat_questions(
    output: str,
    discovered_concepts: list[str],
    current_asking_concept: str | None = None
) -> GuardrailResult:
    """Check for repeat questions about already-discovered concepts."""
    issues = []
    output_lower = output.lower()

    for concept in discovered_concepts:
        concept_lower = concept.lower()

        # Check for question patterns about discovered concepts
        question_patterns = [
            f"what (?:is|are|would be) .*{concept_lower}",
            f"what do you call.*{concept_lower}",
            f"can you.*{concept_lower}",
            f"explain.*{concept_lower}",
            f"what about.*{concept_lower}",
            f"how would.*{concept_lower}",
        ]

        for pattern in question_patterns:
            if re.search(pattern, output_lower):
                # Skip if this is confirming/naming the concept (not asking about it)
                confirm_patterns = [
                    f"that's.*{concept_lower}",
                    f"exactly.*{concept_lower}",
                    f"you.*got.*{concept_lower}",
                    f"✓.*{concept_lower}",
                ]
                is_confirmation = any(
                    re.search(cp, output_lower) for cp in confirm_patterns
                )

                if not is_confirmation:
                    issues.append(
                        f"Asking about already-discovered concept: {concept}"
                    )

    return GuardrailResult(
        is_valid=len(issues) == 0,
        issues=issues
    )


def validate_personalization_path(
    output: str,
    personalization_path: str,
    ai_experience_asked: bool
) -> GuardrailResult:
    """Validate output respects personalization path rules."""
    issues = []
    output_lower = output.lower()

    # For everyday/direct paths, should NOT ask about profession
    if personalization_path in ["everyday", "direct"]:
        for pattern in PROFESSION_PATTERNS:
            if re.search(pattern, output_lower):
                issues.append(
                    f"Asked about profession when path is '{personalization_path}'. "
                    f"User chose to skip profession - only ask about AI experience."
                )
                break

    return GuardrailResult(
        is_valid=len(issues) == 0,
        issues=issues
    )


def validate_output(
    output: str,
    discovered_concepts: list[str] | None = None,
    personalization_path: str | None = None,
    ai_experience_asked: bool = False,
    current_asking_concept: str | None = None
) -> GuardrailResult:
    """Run all guardrails on agent output."""
    all_issues = []

    # Check for internal leaks
    leak_result = validate_no_leaks(output)
    all_issues.extend(leak_result.issues)

    # Check for repeat questions
    if discovered_concepts:
        repeat_result = validate_no_repeat_questions(
            output, discovered_concepts, current_asking_concept
        )
        all_issues.extend(repeat_result.issues)

    # Check personalization path rules
    if personalization_path:
        path_result = validate_personalization_path(
            output, personalization_path, ai_experience_asked
        )
        all_issues.extend(path_result.issues)

    return GuardrailResult(
        is_valid=len(all_issues) == 0,
        issues=all_issues
    )


def fix_leaked_instructions(output: str) -> str:
    """Attempt to remove leaked instructions from output."""
    fixed = output

    # Remove common leaked patterns
    removals = [
        (r"Phase \d:", ""),
        (r"PHASE \d[^\n]*\n?", ""),
        (r"mastery.?gate", "the next step"),
        (r"\(readable\):", ""),
        (r"Scenario \(\d+ sentence[^)]*\):", ""),
        (r"YOUR EXACT RESPONSE:[^\n]*\n?", ""),
        (r"YOUR TASK:[^\n]*\n?", ""),
        (r"MANDATORY FIRST CHECK[^\n]*\n?", ""),
        (r"FORBIDDEN ACTIONS:[^\n]*\n?", ""),
    ]

    for pattern, replacement in removals:
        fixed = re.sub(pattern, replacement, fixed, flags=re.IGNORECASE)

    # Clean up multiple newlines
    fixed = re.sub(r"\n{3,}", "\n\n", fixed)

    return fixed.strip()
