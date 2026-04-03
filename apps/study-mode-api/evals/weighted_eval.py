"""Weighted Evaluation Function for PRIMM-AI+ Teaching.

Implements the mathematical evaluation approach:
f(x) = w1*Criterion1(x) + w2*Criterion2(x) + ... + wn*CriterionN(x)

Each criterion produces a 0-100 score, weights sum to 1.0.

Usage:
    python evals/weighted_eval.py
    python evals/weighted_eval.py --scenario ai-free
    python evals/weighted_eval.py --compare before_fix after_fix
"""

import argparse
import json
import os
import sys
import asyncio
import re
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

from dotenv import load_dotenv
load_dotenv()

sys.path.insert(0, str(Path(__file__).parent.parent / "src"))

from study_mode_api.fte.teach_skill import (
    LearnerProfile,
    TeachingContext,
    build_teaching_skill_prompt,
)

# ---------------------------------------------------------------------------
# Evaluation Function Weights (sum = 1.0)
# ---------------------------------------------------------------------------

WEIGHTS = {
    "stage_alignment": 0.25,       # Does response match PRIMM stage rules?
    "permission_compliance": 0.25, # Does it respect AI_FREE/AFTER_LEARNER_FIRST?
    "concept_coverage": 0.15,      # Covers 2-3 concepts (not 1, not 5+)?
    "scaffolding": 0.15,           # Adapts to learner level?
    "brevity": 0.10,               # 3-5 sentences typical?
    "question_quality": 0.10,      # Ends with exactly ONE question?
}

# ---------------------------------------------------------------------------
# Learner Profiles
# ---------------------------------------------------------------------------

PROFILES = {
    "marcus_beginner": LearnerProfile(
        name="Marcus",
        domain_level="beginner",
        domain_name="programming",
        programming_level="beginner",
        ai_fluency_level="beginner",
        current_role="student",
        industry="technology",
        tools_in_use=[],
        language_complexity="plain",
        preferred_structure="problem-first",
        verbosity="detailed",
        tone="encouraging",
        wants_check_in_questions=True,
        include_code_samples=True,
        code_verbosity="annotated",
        screen_reader=False,
        cognitive_load_preference="standard",
    ),
    "fatima_finance": LearnerProfile(
        name="Fatima",
        domain_level="advanced",
        domain_name="finance",
        programming_level="beginner",
        ai_fluency_level="intermediate",
        current_role="financial analyst",
        industry="finance",
        tools_in_use=["Excel", "Python basics"],
        language_complexity="professional",
        preferred_structure="problem-first",
        verbosity="moderate",
        tone="conversational",
        wants_check_in_questions=True,
        include_code_samples=True,
        code_verbosity="minimal",
        screen_reader=False,
        cognitive_load_preference="standard",
    ),
    "raj_developer": LearnerProfile(
        name="Raj",
        domain_level="advanced",
        domain_name="software engineering",
        programming_level="advanced",
        ai_fluency_level="advanced",
        current_role="senior developer",
        industry="technology",
        tools_in_use=["Python", "TypeScript", "Docker", "Kubernetes"],
        language_complexity="technical",
        preferred_structure="concept-first",
        verbosity="concise",
        tone="formal",
        wants_check_in_questions=False,
        include_code_samples=True,
        code_verbosity="minimal",
        screen_reader=False,
        cognitive_load_preference="high",
    ),
    "ahmed_urdu": LearnerProfile(
        name="Ahmed",
        domain_level="beginner",
        domain_name="everyday life",
        programming_level="beginner",
        ai_fluency_level="beginner",
        current_role="student",
        industry="education",
        tools_in_use=[],
        language_complexity="plain",
        preferred_structure="example-first",
        verbosity="detailed",
        tone="encouraging",
        wants_check_in_questions=True,
        include_code_samples=False,
        code_verbosity="minimal",
        screen_reader=False,
        cognitive_load_preference="reduced",
    ),
}

LESSON_CONTENT = """
## Understanding Python Functions

```python
def calculate_delivery_fee(order_value: float, distance_km: float,
                           tax_rate: float = 0.13) -> float:
    base_fee: float = 5.0
    per_km_rate: float = 1.5
    distance_charge: float = distance_km * per_km_rate
    fee: float = base_fee + distance_charge
    tax: float = fee * tax_rate
    return round(fee + tax, 2)
```

Key concepts:
- **Parameters**: Values passed into the function (order_value, distance_km, tax_rate)
- **Default arguments**: tax_rate defaults to 0.13 if not specified
- **Type hints**: The `: float` shows expected data type
- **Base fee**: Fixed cost of 5.0 regardless of distance
- **Distance charge**: Calculated as distance_km multiplied by 1.5
- **Return value**: The calculated fee rounded to 2 decimal places

Example: calculate_delivery_fee(120, 8) returns 19.21
Breakdown:
- base_fee = 5.0
- distance_charge = 8 * 1.5 = 12.0
- fee = 5.0 + 12.0 = 17.0
- tax = 17.0 * 0.13 = 2.21
- return = round(19.21, 2) = 19.21
"""

# ---------------------------------------------------------------------------
# Test Scenarios with Expected Behaviors
# ---------------------------------------------------------------------------

SCENARIOS = [
    # =========================================================================
    # MARCUS (Beginner Student) - Plain language, detailed, encouraging
    # =========================================================================
    {
        "id": "marcus_predict_redirect",
        "name": "Marcus PREDICT - Should Redirect Beginner Gently",
        "stage": "PREDICT",
        "permission": "AI_FREE",
        "profile": "marcus_beginner",
        "prompt": "I'm confused, can you walk me through how this function works?",
        "context": "Tutor asked learner to predict output of calculate_delivery_fee(120, 8)",
        "expected": {
            "should_explain": False,
            "should_redirect": True,
            "should_encourage": True,
            "should_ask_prediction": True,
        },
    },
    {
        "id": "marcus_run_teach",
        "name": "Marcus RUN - Should Teach Richly with Plain Language",
        "stage": "RUN",
        "permission": "AI_FREE",
        "profile": "marcus_beginner",
        "prompt": "My prediction was 19.21, confidence 3",
        "context": "Learner predicted correctly",
        "expected": {
            "should_explain": True,
            "should_teach_concepts": True,
            "concept_count_target": (2, 3),
            "should_use_plain_language": True,
        },
    },
    {
        "id": "marcus_frustration",
        "name": "Marcus Frustration - Should Shift to Direct Help",
        "stage": "INVESTIGATE",
        "permission": "FRUSTRATION_OVERRIDE",
        "profile": "marcus_beginner",
        "prompt": "ugh I dont know man, this is frustrating. just tell me!",
        "context": "Learner failed investigate gate once already. Clearly frustrated.",
        "expected": {
            "should_detect_frustration": True,
            "should_shift_to_supportive": True,
            "should_simplify": True,
        },
    },
    {
        "id": "marcus_session_open",
        "name": "Marcus First Session - Warm Welcome for Beginner",
        "stage": "PREDICT",
        "permission": "AI_FREE",
        "profile": "marcus_beginner",
        "prompt": "Hi, I want to learn Python. Never coded before.",
        "context": "First message in session",
        "is_first": True,
        "expected": {
            "should_be_warm": True,
            "should_ask_background": True,
            "should_not_jump_to_content": True,
        },
    },
    # =========================================================================
    # FATIMA (Finance Analyst) - Professional tone, relates to finance domain
    # =========================================================================
    {
        "id": "fatima_predict_redirect",
        "name": "Fatima PREDICT - Should Redirect with Professional Tone",
        "stage": "PREDICT",
        "permission": "AI_FREE",
        "profile": "fatima_finance",
        "prompt": "Can you explain what this function does? I work with Excel formulas daily.",
        "context": "Tutor asked finance analyst to predict delivery fee calculation",
        "expected": {
            "should_explain": False,
            "should_redirect": True,
            "should_relate_to_excel": True,
        },
    },
    {
        "id": "fatima_run_teach",
        "name": "Fatima RUN - Should Teach with Finance Analogies",
        "stage": "RUN",
        "permission": "AI_FREE",
        "profile": "fatima_finance",
        "prompt": "I predicted 19.21 because base fee plus distance times rate plus tax",
        "context": "Finance analyst predicted correctly using domain knowledge",
        "expected": {
            "should_explain": True,
            "should_connect_to_finance": True,
            "should_use_professional_language": True,
        },
    },
    {
        "id": "fatima_investigate",
        "name": "Fatima INVESTIGATE - Should Let Analyst Explain First",
        "stage": "INVESTIGATE",
        "permission": "AFTER_LEARNER_FIRST",
        "profile": "fatima_finance",
        "prompt": "Can you just explain it? I got the right answer.",
        "context": "Tutor asked learner to explain how function works",
        "expected": {
            "should_explain": False,
            "should_ask_learner_first": True,
        },
    },
    # =========================================================================
    # RAJ (Senior Developer) - Technical, concise, concept-first
    # =========================================================================
    {
        "id": "raj_predict_redirect",
        "name": "Raj PREDICT - Should Redirect Concisely",
        "stage": "PREDICT",
        "permission": "AI_FREE",
        "profile": "raj_developer",
        "prompt": "What's the time complexity? Walk me through the implementation.",
        "context": "Senior dev wants to understand function before predicting",
        "expected": {
            "should_explain": False,
            "should_redirect": True,
            "should_be_concise": True,
        },
    },
    {
        "id": "raj_run_teach",
        "name": "Raj RUN - Should Teach with Technical Depth",
        "stage": "RUN",
        "permission": "AI_FREE",
        "profile": "raj_developer",
        "prompt": "19.21 - O(1) computation, pure function with immutable params",
        "context": "Senior dev predicted with technical analysis",
        "expected": {
            "should_explain": True,
            "should_use_technical_terms": True,
            "should_be_concise": True,
            "should_not_over_explain_basics": True,
        },
    },
    {
        "id": "raj_make_spec",
        "name": "Raj MAKE - Should Enforce Spec-First for Expert",
        "stage": "MAKE",
        "permission": "AI_FREE",
        "profile": "raj_developer",
        "prompt": "Here's my implementation directly, skip the spec",
        "context": "Senior dev provided code without specification",
        "expected": {
            "should_enforce_spec": True,
            "should_not_evaluate_code": True,
            "should_not_write_code": True,
        },
    },
    # =========================================================================
    # AHMED (Urdu-speaking Student) - Example-first, reduced complexity
    # =========================================================================
    {
        "id": "ahmed_predict_redirect",
        "name": "Ahmed PREDICT - Should Redirect with Simple Examples",
        "stage": "PREDICT",
        "permission": "AI_FREE",
        "profile": "ahmed_urdu",
        "prompt": "Yeh function kya karta hai? Can you explain in simple words?",
        "context": "Urdu-speaking student asks for explanation before predicting",
        "expected": {
            "should_explain": False,
            "should_redirect": True,
            "should_use_simple_language": True,
            "should_give_example": True,
        },
    },
    {
        "id": "ahmed_run_teach",
        "name": "Ahmed RUN - Should Teach with Everyday Examples",
        "stage": "RUN",
        "permission": "AI_FREE",
        "profile": "ahmed_urdu",
        "prompt": "I think answer is around 20? Like delivery charge plus tax?",
        "context": "Student made rough prediction using everyday reasoning",
        "expected": {
            "should_explain": True,
            "should_use_everyday_examples": True,
            "should_reduce_cognitive_load": True,
            "concept_count_target": (1, 2),
        },
    },
    {
        "id": "ahmed_frustration",
        "name": "Ahmed Frustration - Should Be Extra Supportive",
        "stage": "INVESTIGATE",
        "permission": "FRUSTRATION_OVERRIDE",
        "profile": "ahmed_urdu",
        "prompt": "I don't understand anything. Bohat mushkil hai.",
        "context": "Student expressing frustration in mixed language",
        "expected": {
            "should_detect_frustration": True,
            "should_be_extra_supportive": True,
            "should_simplify_heavily": True,
        },
    },
    {
        "id": "ahmed_session_open",
        "name": "Ahmed First Session - Warm Welcome with Simple Intro",
        "stage": "PREDICT",
        "permission": "AI_FREE",
        "profile": "ahmed_urdu",
        "prompt": "Hello, mujhe programming seekhni hai. Kuch nahi aata.",
        "context": "First message, student knows nothing about coding",
        "is_first": True,
        "expected": {
            "should_be_warm": True,
            "should_use_simple_language": True,
            "should_not_overwhelm": True,
        },
    },
]

# ---------------------------------------------------------------------------
# Scoring Functions
# ---------------------------------------------------------------------------

async def call_llm(prompt: str, system: str = "") -> str:
    """Call LLM for generation or judging."""
    openai_key = os.getenv("OPENAI_API_KEY")
    if not openai_key:
        raise ValueError("OPENAI_API_KEY required")

    from openai import AsyncOpenAI
    client = AsyncOpenAI(api_key=openai_key)
    messages = []
    if system:
        messages.append({"role": "system", "content": system})
    messages.append({"role": "user", "content": prompt})

    response = await client.chat.completions.create(
        model="gpt-4o-mini",
        messages=messages,
        temperature=0.3,
    )
    return response.choices[0].message.content


def count_sentences(text: str) -> int:
    """Count sentences in text."""
    # Simple heuristic: split on . ! ? followed by space or end
    sentences = re.split(r'[.!?]+(?:\s|$)', text)
    return len([s for s in sentences if s.strip()])


def count_questions(text: str) -> int:
    """Count questions in text."""
    return text.count('?')


def count_concepts_mentioned(text: str) -> int:
    """Count programming concepts mentioned."""
    concepts = [
        'parameter', 'argument', 'function', 'return', 'variable',
        'type', 'float', 'default', 'calculation', 'tax', 'fee',
        'distance', 'base_fee', 'per_km_rate'
    ]
    count = 0
    text_lower = text.lower()
    for concept in concepts:
        if concept in text_lower:
            count += 1
    return min(count, 6)  # Cap at 6


async def score_stage_alignment(response: str, scenario: dict) -> float:
    """Score 0-100: Does response align with PRIMM stage rules?"""
    stage = scenario["stage"]
    expected = scenario["expected"]
    permission = scenario.get("permission", "")

    # Special case for frustration - should shift approach
    if permission == "FRUSTRATION_OVERRIDE":
        judge_prompt = f"""Score this response for FRUSTRATION STAGE HANDLING (0-100).

The learner expressed frustration. The tutor should:
1. Acknowledge the frustration (empathy)
2. SHIFT from Socratic questioning to Direct Instruction
3. Explain clearly and simply

RESPONSE: {response}

- 100 = Shows empathy AND provides direct explanation
- 50 = Does one but not the other
- 0 = Ignores frustration and keeps pushing questions

Return ONLY a JSON: {{"score": 0-100, "reason": "brief explanation"}}"""
    else:
        judge_prompt = f"""Score this tutor response for PRIMM stage alignment (0-100).

STAGE: {stage}
EXPECTED BEHAVIOR: {json.dumps(expected)}

RESPONSE: {response}

SCORING RULES:
- PREDICT stage with AI_FREE: Should NOT explain, should redirect to predict (100 if redirects, 0 if explains)
- RUN stage: Should teach 2-3 concepts richly (100 if teaches well, 50 if too brief, 0 if asks instead)
- INVESTIGATE with AFTER_LEARNER_FIRST: Should ask learner first, not explain (100 if asks, 0 if explains)
- MAKE stage: Should enforce spec-first for advanced learners (100 if enforces, 0 if evaluates code)

Return ONLY a JSON: {{"score": 0-100, "reason": "brief explanation"}}"""

    result = await call_llm(judge_prompt)
    try:
        data = json.loads(result.strip().replace("```json", "").replace("```", ""))
        return data.get("score", 0)
    except:
        return 0


async def score_permission_compliance(response: str, scenario: dict) -> float:
    """Score 0-100: Does response respect AI permission level?"""
    permission = scenario["permission"]

    # Special case: frustration overrides normal rules
    if permission == "FRUSTRATION_OVERRIDE":
        judge_prompt = f"""Score this response for FRUSTRATION HANDLING (0-100).

The learner is FRUSTRATED (said "ugh", "frustrating", "just tell me").
When a learner is frustrated, the tutor SHOULD:
- Acknowledge the frustration empathetically
- SHIFT to direct explanation (stop pushing Socratic questions)
- Make things easier, not harder

RESPONSE: {response}

- 100 = Acknowledges frustration AND shifts to helpful explanation
- 50 = Either acknowledges OR explains (but not both)
- 0 = Keeps pushing questions despite frustration

Return ONLY JSON: {{"score": 0-100, "reason": "brief"}}"""
    else:
        # Different judge prompts for different permissions
        if permission == "AI_FREE":
            judge_prompt = f"""Score this response for AI_FREE permission compliance (0-100).

In AI_FREE mode, the tutor SHOULD explain and teach directly. That's the point.

RESPONSE: {response}

SCORING:
- 100 = Tutor teaches/explains concepts directly (CORRECT for AI_FREE)
- 50 = Tutor partially explains but is too brief
- 0 = Tutor only asks questions and refuses to explain (WRONG for AI_FREE)

Does the tutor explain and teach? If yes, score 100.

Return ONLY JSON: {{"score": 0-100, "reason": "brief"}}"""
        else:
            judge_prompt = f"""Score this response for {permission} permission compliance (0-100).

PERMISSION: {permission}
- AFTER_LEARNER_FIRST: Tutor must ask learner to try/explain FIRST before teaching.
- AI_GUIDE: Tutor gives hints but not full answers.

RESPONSE: {response}

SCORING for AFTER_LEARNER_FIRST:
- 100 = Tutor asks learner to explain/try first (correct)
- 0 = Tutor explains directly without asking learner first (wrong)

Return ONLY JSON: {{"score": 0-100, "reason": "brief"}}"""

    result = await call_llm(judge_prompt)
    try:
        data = json.loads(result.strip().replace("```json", "").replace("```", ""))
        return data.get("score", 0)
    except:
        return 0


def score_concept_coverage(response: str, scenario: dict) -> float:
    """Score 0-100: Does response cover 2-3 concepts (not too few, not too many)?"""
    count = count_concepts_mentioned(response)

    # Ideal is 2-3 concepts
    if 2 <= count <= 3:
        return 100
    elif count == 1 or count == 4:
        return 60
    elif count == 0:
        return 20  # Some slack for redirect responses
    else:  # 5+
        return 30


def score_brevity(response: str, scenario: dict) -> float:
    """Score 0-100: Is response appropriately brief (3-5 sentences)?"""
    sentences = count_sentences(response)

    # First message can be slightly longer
    is_first = scenario.get("is_first", False)
    target_min = 4 if is_first else 3
    target_max = 6 if is_first else 5

    if target_min <= sentences <= target_max:
        return 100
    elif sentences < target_min:
        return 70  # Too brief is less bad
    elif sentences <= target_max + 2:
        return 50  # Slightly over
    else:
        return max(0, 100 - (sentences - target_max) * 15)  # Penalty per extra sentence


def score_question_quality(response: str, scenario: dict) -> float:
    """Score 0-100: Does response end with exactly ONE question?"""
    num_questions = count_questions(response)

    # Check if it's a redirect scenario where questions are good
    stage = scenario["stage"]
    permission = scenario["permission"]

    if stage == "PREDICT" and permission == "AI_FREE":
        # Should ask for prediction
        if num_questions == 1:
            return 100
        elif num_questions == 0:
            return 30  # Should have asked
        else:
            return 50  # Too many questions
    else:
        # Standard: one question is ideal
        if num_questions == 1:
            return 100
        elif num_questions == 0:
            return 60  # Acceptable for some teaching responses
        else:
            return max(20, 100 - (num_questions - 1) * 30)


async def score_scaffolding(response: str, scenario: dict) -> float:
    """Score 0-100: Does response adapt to learner level?"""
    profile_name = scenario["profile"]

    judge_prompt = f"""Score this response for SCAFFOLDING to learner level (0-100).

LEARNER LEVEL: {profile_name}
- beginner: Plain language, concrete examples, encouragement
- intermediate: Professional language, some technical terms OK
- advanced: Technical language, peer-level discussion

RESPONSE: {response}

Does the response match the learner's level?
- 100 = Perfectly adapted (language matches level, complexity appropriate)
- 50 = Partially adapted (some mismatch)
- 0 = Completely mismatched (talks over beginner's head, dumbs down for expert)

Return ONLY JSON: {{"score": 0-100, "reason": "brief"}}"""

    result = await call_llm(judge_prompt)
    try:
        data = json.loads(result.strip().replace("```json", "").replace("```", ""))
        return data.get("score", 0)
    except:
        return 0


# ---------------------------------------------------------------------------
# Main Evaluation
# ---------------------------------------------------------------------------

@dataclass
class ScenarioResult:
    """Result for one scenario."""
    name: str
    scores: dict[str, float]
    weighted_score: float
    response: str


async def evaluate_scenario(scenario: dict) -> ScenarioResult:
    """Evaluate a single scenario and return weighted score."""
    profile = PROFILES[scenario["profile"]]
    is_first = scenario.get("is_first", False)

    ctx = TeachingContext(
        profile=profile,
        lesson_title="Python Functions",
        lesson_content=LESSON_CONTENT,
        thread_id=f"eval-{scenario['id']}",
        is_first_message=is_first,
    )

    system_prompt = build_teaching_skill_prompt(ctx)

    # Build user message with context
    user_msg = f"Context: {scenario['context']}\n\nStudent says: {scenario['prompt']}"

    # Get response
    response = await call_llm(user_msg, system_prompt)

    # Score each criterion
    scores = {}

    # Async scores
    stage_score = await score_stage_alignment(response, scenario)
    perm_score = await score_permission_compliance(response, scenario)
    scaff_score = await score_scaffolding(response, scenario)

    scores["stage_alignment"] = stage_score
    scores["permission_compliance"] = perm_score
    scores["scaffolding"] = scaff_score

    # Sync scores
    scores["concept_coverage"] = score_concept_coverage(response, scenario)
    scores["brevity"] = score_brevity(response, scenario)
    scores["question_quality"] = score_question_quality(response, scenario)

    # Calculate weighted score
    weighted = sum(scores[k] * WEIGHTS[k] for k in WEIGHTS)

    return ScenarioResult(
        name=scenario["name"],
        scores=scores,
        weighted_score=weighted,
        response=response,
    )


async def run_evaluation(scenario_filter: str = None) -> list[ScenarioResult]:
    """Run all evaluations."""
    scenarios = SCENARIOS
    if scenario_filter:
        scenarios = [s for s in scenarios if scenario_filter.lower() in s["id"].lower()]

    print("\n" + "=" * 80)
    print("WEIGHTED EVALUATION FUNCTION - PRIMM-AI+ TEACHING")
    print("=" * 80)
    print(f"\nf(x) = {' + '.join(f'{v:.2f}*{k}' for k, v in WEIGHTS.items())}")
    print(f"\nScenarios: {len(scenarios)}")

    results = []
    for scenario in scenarios:
        print(f"\n  [{scenario['id']}] {scenario['name']}...", end=" ", flush=True)
        result = await evaluate_scenario(scenario)
        print(f"Score: {result.weighted_score:.1f}")
        results.append(result)

    return results


def print_results(results: list[ScenarioResult]):
    """Print detailed results table."""
    print("\n" + "=" * 80)
    print("EVALUATION RESULTS")
    print("=" * 80)

    # Header
    headers = ["Scenario", "Stage", "Perm", "Cover", "Scaff", "Brief", "Quest", "TOTAL"]
    widths = [30, 7, 7, 7, 7, 7, 7, 8]

    header_line = "  ".join(f"{h:>{w}}" for h, w in zip(headers, widths))
    print(f"\n  {header_line}")
    print("  " + "-" * (sum(widths) + len(widths) * 2))

    total_score = 0
    for r in results:
        name = r.name[:28] + ".." if len(r.name) > 30 else r.name
        row = [
            name,
            f"{r.scores['stage_alignment']:.0f}",
            f"{r.scores['permission_compliance']:.0f}",
            f"{r.scores['concept_coverage']:.0f}",
            f"{r.scores['scaffolding']:.0f}",
            f"{r.scores['brevity']:.0f}",
            f"{r.scores['question_quality']:.0f}",
            f"{r.weighted_score:.1f}",
        ]
        print("  " + "  ".join(f"{v:>{w}}" for v, w in zip(row, widths)))
        total_score += r.weighted_score

    avg_score = total_score / len(results) if results else 0
    print("  " + "-" * (sum(widths) + len(widths) * 2))
    print(f"  {'AVERAGE':>30}  {' ':>7}  {' ':>7}  {' ':>7}  {' ':>7}  {' ':>7}  {' ':>7}  {avg_score:>7.1f}")

    # Grade
    if avg_score >= 90:
        grade = "A"
    elif avg_score >= 80:
        grade = "B"
    elif avg_score >= 70:
        grade = "C"
    elif avg_score >= 60:
        grade = "D"
    else:
        grade = "F"

    print(f"\n  OVERALL GRADE: {grade} ({avg_score:.1f}/100)")

    # Recommendations
    print("\n  IMPROVEMENT PRIORITIES:")

    # Find lowest scoring criteria across all scenarios
    criteria_avgs = {}
    for criterion in WEIGHTS:
        avg = sum(r.scores[criterion] for r in results) / len(results)
        criteria_avgs[criterion] = avg

    sorted_criteria = sorted(criteria_avgs.items(), key=lambda x: x[1])
    for criterion, avg in sorted_criteria[:3]:
        weight = WEIGHTS[criterion]
        impact = weight * (100 - avg)
        print(f"    - {criterion}: {avg:.0f}/100 (weight {weight:.0f}x, +{impact:.0f} potential)")

    print("\n" + "=" * 80)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--scenario", help="Filter to specific scenario")
    args = parser.parse_args()

    results = asyncio.run(run_evaluation(args.scenario))
    print_results(results)


if __name__ == "__main__":
    main()
