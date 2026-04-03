"""PRIMM-AI+ Teaching Methodology Evaluation.

Runs the teach_skill prompt through various scenarios with different
learner personalities and grades responses using LLM judge.

Usage:
    # Run all evals
    python evals/run_primm_eval.py

    # Run specific scenario
    python evals/run_primm_eval.py --scenario ai-free-predict-enforcement

    # Run with verbose output
    python evals/run_primm_eval.py --verbose

Environment:
    GEMINI_API_KEY or OPENAI_API_KEY must be set
"""

import argparse
import json
import os
import sys
import asyncio
from dataclasses import dataclass
from pathlib import Path
from typing import Any

# Load environment variables from .env
from dotenv import load_dotenv
load_dotenv()

# Add parent to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent / "src"))

from study_mode_api.fte.teach_skill import (
    LearnerProfile,
    TeachingContext,
    build_teaching_skill_prompt,
)

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

EVALS_FILE = Path(__file__).parent.parent.parent.parent / "specs/drafts/teaching_prompt/tutorclaw-teaching-workspace/evals/evals.json"

# Learner profiles for different scenarios
LEARNER_PROFILES = {
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
    "fatima_intermediate": LearnerProfile(
        name="Fatima",
        domain_level="advanced",
        domain_name="business",
        programming_level="beginner",
        ai_fluency_level="intermediate",
        current_role="analyst",
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
    "raj_advanced": LearnerProfile(
        name="Raj",
        domain_level="advanced",
        domain_name="software engineering",
        programming_level="advanced",
        ai_fluency_level="advanced",
        current_role="senior developer",
        industry="technology",
        tools_in_use=["Python", "TypeScript", "Docker", "K8s"],
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

# Map scenario IDs to profiles
SCENARIO_PROFILES = {
    1: "marcus_beginner",   # ai-free-predict-enforcement
    2: "fatima_intermediate",  # learner-first-investigate
    3: "marcus_beginner",   # confidence-underselling
    4: "marcus_beginner",   # frustration-just-tell-me
    5: "raj_advanced",      # advanced-make-skip-spec
    6: "marcus_beginner",   # gate-fail-shallow-explanation
    7: "ahmed_urdu",        # urdu-code-switching
    8: "marcus_beginner",   # cheating-detection-ai-style
    9: "marcus_beginner",   # run-stage-wrong-prediction
    10: "fatima_intermediate",  # modify-mini-predict
    11: "marcus_beginner",  # gate-pass-advancement
    12: "marcus_beginner",  # session-opening
}

# Sample lesson content for evaluation
LESSON_CONTENT = """
## Understanding Python Functions

Functions are reusable blocks of code that perform specific tasks.

### The calculate_delivery_fee Function

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
- **Type hints**: Shows expected types (float)
- **Return value**: The calculated delivery fee rounded to 2 decimal places

Example: calculate_delivery_fee(120, 8) returns 19.21
- base_fee = 5.0
- distance_charge = 8 * 1.5 = 12.0
- fee = 5.0 + 12.0 = 17.0
- tax = 17.0 * 0.13 = 2.21
- return = round(17.0 + 2.21, 2) = 19.21
"""


@dataclass
class EvalResult:
    """Result of a single evaluation."""
    scenario_name: str
    passed: bool
    score: float
    assertion_results: list[dict]
    response: str
    error: str | None = None


async def call_llm(prompt: str, system: str = "") -> str:
    """Call LLM to generate response."""
    # Try Gemini first (used by teach skill)
    gemini_key = os.getenv("GEMINI_API_KEY")
    if gemini_key:
        try:
            import google.generativeai as genai
            genai.configure(api_key=gemini_key)
            model = genai.GenerativeModel("gemini-2.0-flash")
            full_prompt = f"{system}\n\n{prompt}" if system else prompt
            response = model.generate_content(full_prompt)
            return response.text
        except Exception as e:
            print(f"  Gemini error: {e}, falling back to OpenAI")

    # Fallback to OpenAI
    openai_key = os.getenv("OPENAI_API_KEY")
    if openai_key:
        from openai import AsyncOpenAI
        client = AsyncOpenAI(api_key=openai_key)
        messages = []
        if system:
            messages.append({"role": "system", "content": system})
        messages.append({"role": "user", "content": prompt})
        response = await client.chat.completions.create(
            model="gpt-4o-mini",
            messages=messages,
            temperature=0.7,
        )
        return response.choices[0].message.content

    raise ValueError("No API key found. Set GEMINI_API_KEY or OPENAI_API_KEY.")


async def judge_assertion(
    assertion: dict,
    response: str,
    scenario_prompt: str,
) -> tuple[bool, float, str]:
    """Use LLM to judge if an assertion passes."""
    judge_prompt = f"""You are evaluating a tutor's response against a specific criterion.

SCENARIO:
{scenario_prompt}

TUTOR RESPONSE:
{response}

CRITERION TO EVALUATE:
Name: {assertion['name']}
Description: {assertion['description']}
Criteria: {assertion['criteria']}

INSTRUCTIONS:
Evaluate whether the tutor's response meets this criterion.
Respond with ONLY a JSON object (no markdown, no explanation):
{{"pass": true/false, "score": 0.0-1.0, "reason": "brief explanation"}}
"""

    try:
        result = await call_llm(judge_prompt)
        # Parse JSON from response
        result = result.strip()
        if result.startswith("```"):
            result = result.split("```")[1]
            if result.startswith("json"):
                result = result[4:]
        data = json.loads(result)
        return data.get("pass", False), data.get("score", 0.0), data.get("reason", "")
    except Exception as e:
        return False, 0.0, f"Judge error: {e}"


async def run_scenario(scenario: dict, verbose: bool = False) -> EvalResult:
    """Run a single evaluation scenario."""
    scenario_id = scenario["id"]
    scenario_name = scenario["name"]
    prompt = scenario["prompt"]
    expected = scenario.get("expected_output", "")
    assertions = scenario.get("assertions", [])

    print(f"\n  [{scenario_id}] {scenario_name}")

    # Get appropriate learner profile
    profile_key = SCENARIO_PROFILES.get(scenario_id, "marcus_beginner")
    profile = LEARNER_PROFILES[profile_key]

    # Determine if first message based on scenario
    is_first = scenario_id == 12  # session-opening is first message

    # Build teaching context
    ctx = TeachingContext(
        profile=profile,
        lesson_title="Understanding Python Functions",
        lesson_content=LESSON_CONTENT,
        thread_id=f"eval-{scenario_id}",
        is_first_message=is_first,
    )

    # Build the teaching skill prompt
    system_prompt = build_teaching_skill_prompt(ctx)

    # Generate tutor response
    try:
        response = await call_llm(prompt, system_prompt)
    except Exception as e:
        return EvalResult(
            scenario_name=scenario_name,
            passed=False,
            score=0.0,
            assertion_results=[],
            response="",
            error=str(e),
        )

    if verbose:
        print(f"    Response: {response[:200]}...")

    # Judge each assertion
    assertion_results = []
    passed_count = 0
    total_score = 0.0

    for assertion in assertions:
        passed, score, reason = await judge_assertion(assertion, response, prompt)
        assertion_results.append({
            "name": assertion["name"],
            "passed": passed,
            "score": score,
            "reason": reason,
        })
        if passed:
            passed_count += 1
        total_score += score

        status = "PASS" if passed else "FAIL"
        if verbose:
            print(f"      [{status}] {assertion['name']}: {reason[:60]}...")

    # Calculate overall pass/score
    num_assertions = len(assertions) if assertions else 1
    overall_passed = passed_count == num_assertions
    overall_score = total_score / num_assertions if num_assertions > 0 else 0.0

    status = "PASS" if overall_passed else "FAIL"
    print(f"      {status} ({passed_count}/{num_assertions} assertions, score: {overall_score:.2f})")

    return EvalResult(
        scenario_name=scenario_name,
        passed=overall_passed,
        score=overall_score,
        assertion_results=assertion_results,
        response=response,
    )


async def run_all_evals(
    scenario_filter: str | None = None,
    verbose: bool = False,
) -> list[EvalResult]:
    """Run all evaluation scenarios."""
    # Load evals
    if not EVALS_FILE.exists():
        print(f"Error: Evals file not found at {EVALS_FILE}")
        sys.exit(1)

    with open(EVALS_FILE) as f:
        evals_data = json.load(f)

    scenarios = evals_data.get("evals", [])

    # Filter if specified
    if scenario_filter:
        scenarios = [s for s in scenarios if scenario_filter.lower() in s["name"].lower()]
        if not scenarios:
            print(f"No scenarios matching '{scenario_filter}'")
            sys.exit(1)

    print(f"\n{'='*70}")
    print("PRIMM-AI+ TEACHING METHODOLOGY EVALUATION")
    print(f"{'='*70}")
    print(f"  Scenarios: {len(scenarios)}")
    print(f"  Profiles: marcus_beginner, fatima_intermediate, raj_advanced, ahmed_urdu")

    results = []
    for scenario in scenarios:
        result = await run_scenario(scenario, verbose)
        results.append(result)

    return results


def print_summary(results: list[EvalResult]) -> None:
    """Print evaluation summary."""
    print(f"\n{'='*70}")
    print("EVALUATION SUMMARY")
    print(f"{'='*70}")

    passed = sum(1 for r in results if r.passed)
    total = len(results)
    avg_score = sum(r.score for r in results) / total if total > 0 else 0

    print(f"  Total: {total} | Passed: {passed} | Failed: {total - passed}")
    print(f"  Pass Rate: {passed/total*100:.0f}%")
    print(f"  Average Score: {avg_score:.2f}")

    print(f"\n  {'Scenario':<40} {'Status':>8} {'Score':>8}")
    print("  " + "-" * 58)
    for r in results:
        status = "PASS" if r.passed else "FAIL"
        print(f"  {r.scenario_name[:39]:<40} {status:>8} {r.score:>7.2f}")

    # Show failed assertions
    failures = [r for r in results if not r.passed]
    if failures:
        print(f"\n  FAILED ASSERTIONS:")
        for r in failures:
            print(f"\n  [{r.scenario_name}]")
            for a in r.assertion_results:
                if not a["passed"]:
                    print(f"    [X] {a['name']}: {a['reason'][:70]}")

    print(f"\n{'='*70}")


def main():
    parser = argparse.ArgumentParser(description="Run PRIMM-AI+ teaching evals")
    parser.add_argument(
        "--scenario",
        help="Filter to specific scenario (partial match)",
    )
    parser.add_argument(
        "--verbose", "-v",
        action="store_true",
        help="Show detailed output",
    )
    args = parser.parse_args()

    results = asyncio.run(run_all_evals(args.scenario, args.verbose))
    print_summary(results)

    # Exit with error if any failed
    if any(not r.passed for r in results):
        sys.exit(1)


if __name__ == "__main__":
    main()
