---
sidebar_position: 14
title: "Modify Exercises"
description: "Three graduated exercises that extend a HireFlow screening agent with a third tool, input validation, and a supervision layer using the Claude Agent SDK"
chapter: 73
lesson: 14
duration_minutes: 50
keywords:
  [
    modify-exercises,
    graduated-practice,
    tool-addition,
    input-validation,
    supervision-pattern,
    least-privilege,
    hireflow,
    claude-agent-sdk,
  ]

skills:
  - name: "SDK Tool Configuration"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Add a new MCP tool to an existing agent by updating server registration, allowed_tools, and the prompt in a single coordinated change"

  - name: "Agent Input Validation"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "5.1 Solving technical problems"
    measurable_at_this_level: "Add validation logic that checks file existence, size, and data completeness before passing inputs to MCP tools"

  - name: "Post-Processing Supervision"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "4.2 Protecting personal data and privacy"
    measurable_at_this_level: "Implement a supervision layer that classifies agent output into approval tiers and routes borderline cases for human review"

learning_objectives:
  - objective: "Add a third MCP tool to an agent by modifying the server, allowed_tools, and prompt"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Agent discovers three tools and calls them in the correct order for a screening task"

  - objective: "Implement input validation that prevents invalid data from reaching MCP tools"
    proficiency_level: "B2"
    bloom_level: "Apply"
    assessment_method: "Validation catches empty paths, oversized files, and missing fields with structured error messages"

  - objective: "Build a supervision layer that classifies scores into auto-approve, human-review, and auto-reject tiers"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Supervision function returns correct tier and action for scores at 8.5, 6.5, and 3.0"

cognitive_load:
  new_concepts: 1
  assessment: "One new concept: post-processing supervision as a distinct layer outside the agent loop. Tool addition and input validation use patterns from Lessons 05-08. The graduated structure manages load by building incrementally."

differentiation:
  extension_for_advanced: "After completing Modification C, combine all three modifications into a single pipeline function that validates inputs, runs the three-tool agent, and applies supervision to the result."
  remedial_for_struggling: "Complete Modification A only. Once that works, attempt B. Skip C until A and B feel comfortable."
---

# Modify Exercises

You reassembled an agent function from scrambled lines. Now you will modify working agent code through three graduated exercises. Each starts with a prediction, proceeds to implementation, and ends with verification.

The exercises build on the screening agent from Lesson 05. If you do not have it, here is the base code:

```python
# File: hireflow/screen_agent.py
import asyncio
from typing import Any

from claude_agent_sdk import (
    ClaudeAgentOptions,
    TextBlock,
    create_sdk_mcp_server,
    query,
    tool,
)


@tool(
    "parse_cv",
    "Parse raw CV text into structured candidate data",
    {"cv_text": str},
)
async def parse_cv(args: dict[str, Any]) -> dict[str, Any]:
    """Extract name, email, skills, and experience from CV text."""
    cv_text: str = args["cv_text"]
    lines: list[str] = cv_text.strip().split("\n")
    name: str = lines[0].strip() if lines else "Unknown"
    skills: list[str] = []
    capturing: bool = False
    for line in lines:
        if line.strip().upper() == "SKILLS":
            capturing = True
            continue
        if capturing and line.strip().isupper() and len(line.strip()) > 2:
            break
        if capturing and line.strip():
            skills.extend(s.strip() for s in line.split(","))
    return {
        "content": [
            {"type": "text", "text": f"Name: {name}\nSkills: {', '.join(skills)}"}
        ]
    }


@tool(
    "score_candidate",
    "Score a candidate against job requirements",
    {"candidate_skills": list, "required_skills": list},
)
async def score_candidate(args: dict[str, Any]) -> dict[str, Any]:
    """Calculate match score between candidate skills and requirements."""
    candidate: set[str] = {s.lower() for s in args["candidate_skills"]}
    required: set[str] = {s.lower() for s in args["required_skills"]}
    if not required:
        return {
            "content": [{"type": "text", "text": "Score: 0.0 (no requirements)"}],
            "isError": True,
        }
    overlap: set[str] = candidate & required
    score: float = len(overlap) / len(required)
    return {
        "content": [
            {
                "type": "text",
                "text": f"Score: {score:.2f}\nMatched: {', '.join(sorted(overlap))}",
            }
        ]
    }


hiring_server = create_sdk_mcp_server(
    "hiring", "1.0.0", [parse_cv, score_candidate]
)


async def screen_candidate(cv_text: str, role: str) -> str:
    """Screen a candidate CV against a role."""
    options: ClaudeAgentOptions = ClaudeAgentOptions(
        mcp_servers={"hiring": hiring_server},
        allowed_tools=[
            "mcp__hiring__parse_cv",
            "mcp__hiring__score_candidate",
            "Read",
        ],
        permission_mode="bypassPermissions",
        max_turns=5,
    )
    result_text: str = ""
    async for message in query(
        prompt=f"Parse this CV and score for the role of {role}:\n\n{cv_text}",
        options=options,
    ):
        if message.type == "assistant":
            for block in message.message.content:
                if isinstance(block, TextBlock):
                    result_text += block.text
    return result_text


async def main() -> None:
    cv: str = """Sarah Chen
sarah.chen@email.com

SKILLS
Python, FastAPI, PostgreSQL, Docker

EXPERIENCE
Senior Backend Engineer at DataCorp (2020-2024)
Built microservices handling 10k requests/second
"""
    result: str = await screen_candidate(cv, "Senior Python Developer")
    print(result)


asyncio.run(main())
```

---

## Modification A: Add a Third Tool (Simple, 1-3 lines changed)

**Goal:** Add `generate_interview_questions` as a third MCP tool so the agent can parse a CV, score the candidate, and then generate role-specific interview questions in one pass.

:::tip PREDICT BEFORE RUNNING
Before writing any code, predict:

1. With three tools, how many turns will the agent need? (A turn is one tool call plus the agent's response.)
2. In what order will the agent call the three tools?
3. What changes in the `allowed_tools` list?

Write your predictions, then proceed.

Record your confidence (1-5): 1 = no idea, 2 = guessing, 3 = think I know, 4 = fairly sure, 5 = certain.
:::

### Instructions

You need three coordinated changes:

1. Define a new `@tool` function called `generate_interview_questions`
2. Add it to the `create_sdk_mcp_server` tools list
3. Add `"mcp__hiring__generate_interview_questions"` to `allowed_tools`
4. Update the prompt to instruct the agent to generate questions after scoring

### The New Tool

```python
@tool(
    "generate_interview_questions",
    "Generate role-specific interview questions based on candidate skills and gaps",
    {"role": str, "matched_skills": list, "missing_skills": list},
)
async def generate_interview_questions(args: dict[str, Any]) -> dict[str, Any]:
    """Produce 3 interview questions targeting skill gaps."""
    role: str = args["role"]
    matched: list[str] = args["matched_skills"]
    missing: list[str] = args["missing_skills"]

    questions: list[str] = []
    for skill in missing[:2]:
        questions.append(
            f"Describe a project where you used {skill} in a {role} context."
        )
    if matched:
        questions.append(
            f"You listed {matched[0]} on your CV. Walk me through "
            f"a challenging problem you solved with it."
        )
    if not questions:
        questions.append(f"What draws you to the {role} position?")

    return {
        "content": [
            {
                "type": "text",
                "text": f"Interview Questions:\n"
                + "\n".join(f"{i+1}. {q}" for i, q in enumerate(questions)),
            }
        ]
    }
```

### The Modified Server and Options

```python
# Updated server: three tools instead of two
hiring_server = create_sdk_mcp_server(
    "hiring",
    "1.0.0",
    [parse_cv, score_candidate, generate_interview_questions],
)


async def screen_candidate(cv_text: str, role: str) -> str:
    """Screen a candidate CV against a role and generate interview questions."""
    options: ClaudeAgentOptions = ClaudeAgentOptions(
        mcp_servers={"hiring": hiring_server},
        allowed_tools=[
            "mcp__hiring__parse_cv",
            "mcp__hiring__score_candidate",
            "mcp__hiring__generate_interview_questions",
            "Read",
        ],
        permission_mode="bypassPermissions",
        max_turns=8,  # Increased: 3 tool calls need more turns
    )
    result_text: str = ""
    async for message in query(
        prompt=(
            f"Parse this CV, score the candidate for the role of {role}, "
            f"then generate interview questions based on the gaps.\n\n{cv_text}"
        ),
        options=options,
    ):
        if message.type == "assistant":
            for block in message.message.content:
                if isinstance(block, TextBlock):
                    result_text += block.text
    return result_text
```

### Check Your Predictions

**Expected tool call order:**

1. `mcp__hiring__parse_cv` (extracts structured data from the CV)
2. `mcp__hiring__score_candidate` (scores against required skills)
3. `mcp__hiring__generate_interview_questions` (generates questions from gaps)

The agent calls them in this order because each step requires output from the previous one. The question generator needs `matched_skills` and `missing_skills`, which come from the scoring step. The scoring step needs `candidate_skills`, which comes from the parsing step.

**Expected turns:** At least 3 (one per tool call), likely 4-5 total (the agent may produce intermediate reasoning between calls).

**`max_turns` adjustment:** The original value of 5 might be tight with three tool calls. Setting it to 8 gives enough room for the agent to reason between calls without hitting the limit.

> **James:** "Wait, so basically... adding one tool required changes in three places?"

> **Emma:** "Server registration, allowed_tools, and the prompt. Miss any one and the tool either does not exist, is not reachable, or is never invoked."

> **James:** "The prompt change is the one I would have forgotten."

> **Emma:** "The agent reads the prompt to decide what to do. If the prompt says 'parse and score,' the agent has no reason to generate questions. Even if the tool is available, the agent only uses tools that serve the stated goal."

---

## Modification B: Add Input Validation (Medium, 3-8 lines changed)

**Goal:** Add validation logic that checks inputs before they reach the agent. This prevents wasted API calls on data that will fail.

:::tip PREDICT BEFORE RUNNING
Before writing your modified code, predict:

1. What happens when you pass an empty string as `cv_text`?
2. What happens when you pass a 50MB string?
3. What happens when the parsed CV has no name field?

Write your predictions, then code the solution.

Record your confidence (1-5).
:::

### Instructions

Add three validation functions that run before the agent query:

1. **`validate_cv_text`**: Check that the text is non-empty and under 10MB
2. **`validate_parsed_data`**: Check that parsed candidate data has a name and at least one skill
3. **`validate_score`**: Check that a numerical score falls in the range 0.0 to 10.0

Each function returns either `None` (valid) or a string describing the problem.

### Solution

```python
from pathlib import Path


def validate_cv_text(cv_text: str) -> str | None:
    """Validate CV text before sending to the agent."""
    if not cv_text.strip():
        return "CV text is empty. Provide the full CV content."
    size_bytes: int = len(cv_text.encode("utf-8"))
    max_bytes: int = 10 * 1024 * 1024  # 10 MB
    if size_bytes > max_bytes:
        return (
            f"CV text is {size_bytes / 1024 / 1024:.1f} MB, "
            f"which exceeds the 10 MB limit."
        )
    return None


def validate_parsed_data(parsed: dict[str, object]) -> str | None:
    """Validate parsed candidate data has required fields."""
    name: object = parsed.get("name")
    if not name or not str(name).strip():
        return "Parsed CV has no candidate name."
    skills: object = parsed.get("skills")
    if not skills or (isinstance(skills, list) and len(skills) == 0):
        return "Parsed CV has no skills listed."
    return None


def validate_score(score: float) -> str | None:
    """Validate that a score is within the expected range."""
    if not isinstance(score, (int, float)):
        return f"Score must be a number, got {type(score).__name__}."
    if score < 0.0 or score > 10.0:
        return f"Score {score} is outside the valid range of 0.0 to 10.0."
    return None
```

### Integrating Validation into the Pipeline

Wrap the `screen_candidate` function with a pre-validation step:

```python
async def screen_candidate_safe(cv_text: str, role: str) -> str:
    """Screen a candidate with input validation."""
    # Step 1: Validate before spending API credits
    error: str | None = validate_cv_text(cv_text)
    if error is not None:
        return f"Validation failed: {error}"

    if not role.strip():
        return "Validation failed: role is empty."

    # Step 2: Run the agent
    result: str = await screen_candidate(cv_text, role)
    return result
```

### Check Your Predictions

**Empty string (`cv_text=""`):**
- Without validation: The agent receives an empty prompt, wastes an API call, and returns a confused response.
- With validation: `validate_cv_text` catches it immediately. No API call made.

**50MB string:**
- Without validation: The agent sends 50MB to the API. The request may timeout or exceed context limits.
- With validation: `validate_cv_text` catches it. Returns an error in microseconds instead of waiting for a timeout.

**CV with no name field:**
- Without validation: The agent parses the CV, gets `"Unknown"` as the name, and proceeds to score an anonymous candidate.
- With validation: If you call `validate_parsed_data` on the parse result, it catches the missing name and reports the issue.

> **Emma:** "Where does `validate_parsed_data` run? Before or after the agent?"

> **James:** "After. The agent calls `parse_cv` first, and the parsed data comes back from the tool. So I would validate the tool output."

> **Emma:** "That requires intercepting the tool result. With the current SDK, you cannot inspect individual tool outputs from outside the agent loop. So where does the validation live?"

> **James:** "Inside the tool itself. The `parse_cv` tool should validate its own output before returning it."

> **Emma:** "Right. Pre-agent validation catches bad inputs. In-tool validation catches bad processing. Post-agent validation catches bad decisions. Each layer serves a different purpose."

:::tip KEY INSIGHT
Validation happens at three boundaries: before the agent (input validation), inside tools (processing validation), and after the agent (output validation). Pre-agent validation is the cheapest because it prevents wasted API calls.
:::

---

## Modification C: Implement the Supervision Pattern (Advanced, 8+ lines)

**Goal:** Add a supervision layer that classifies the agent's scoring output into three tiers: auto-approve, human-review, and auto-reject.

:::tip PREDICT BEFORE RUNNING
Before writing your modified code, predict:

1. For a candidate who scores 8.5, what should the supervision layer produce?
2. For a candidate who scores 6.5, what should it produce?
3. For a candidate who scores 3.0, what should it produce?

Write your predictions, then code the solution.

Record your confidence (1-5).
:::

### Context

In Lesson 09, you learned the supervision pattern: agents should not make high-stakes decisions autonomously. The scoring agent produces a number. A human should review borderline cases before the candidate is approved or rejected.

The tiers:
- **Score >= 8.0:** Auto-approve. Print "Strong candidate, auto-approved."
- **5.0 <= Score < 8.0:** Flag for human review. Print "Borderline, needs human review" with the reason.
- **Score < 5.0:** Auto-reject. Print "Below threshold, auto-rejected."

### Solution

```python
import re


async def apply_supervision(
    score: float, candidate_name: str, role: str
) -> dict[str, str]:
    """Classify a candidate score into supervision tiers."""
    validation_error: str | None = validate_score(score)
    if validation_error is not None:
        return {
            "tier": "error",
            "action": "manual_review",
            "message": f"Invalid score for {candidate_name}: {validation_error}",
        }

    if score >= 8.0:
        return {
            "tier": "auto_approve",
            "action": "approved",
            "message": (
                f"Strong candidate, auto-approved. "
                f"{candidate_name} scored {score:.1f} for {role}."
            ),
        }

    if score >= 5.0:
        return {
            "tier": "human_review",
            "action": "pending",
            "message": (
                f"Borderline, needs human review. "
                f"{candidate_name} scored {score:.1f} for {role}. "
                f"Score falls between auto-approve (8.0) and auto-reject (5.0) "
                f"thresholds."
            ),
        }

    return {
        "tier": "auto_reject",
        "action": "rejected",
        "message": (
            f"Below threshold, auto-rejected. "
            f"{candidate_name} scored {score:.1f} for {role}."
        ),
    }


def extract_score_from_result(result_text: str) -> float | None:
    """Extract a numerical score from the agent's text output."""
    match: re.Match[str] | None = re.search(r"Score:\s*([\d.]+)", result_text)
    if match is None:
        return None
    try:
        return float(match.group(1))
    except ValueError:
        return None
```

### The Full Pipeline with Supervision

```python
async def screen_with_supervision(
    cv_text: str, role: str, candidate_name: str
) -> None:
    """Run the screening agent and apply supervision to the result."""
    # Step 1: Input validation
    error: str | None = validate_cv_text(cv_text)
    if error is not None:
        print(f"Validation failed: {error}")
        return

    # Step 2: Run the agent
    result: str = await screen_candidate(cv_text, role)
    print(f"Agent result:\n{result}\n")

    # Step 3: Extract score from agent output
    score: float | None = extract_score_from_result(result)
    if score is None:
        print("Could not extract a numerical score from the agent output.")
        print("Routing to human review by default.")
        return

    # Step 4: Apply supervision
    decision: dict[str, str] = await apply_supervision(
        score, candidate_name, role
    )
    print(f"Supervision decision:")
    print(f"  Tier: {decision['tier']}")
    print(f"  Action: {decision['action']}")
    print(f"  Message: {decision['message']}")
```

### Check Your Predictions

**Candidate scores 8.5:**
```
Supervision decision:
  Tier: auto_approve
  Action: approved
  Message: Strong candidate, auto-approved. Sarah Chen scored 8.5 for Senior Python Developer.
```

**Candidate scores 6.5:**
```
Supervision decision:
  Tier: human_review
  Action: pending
  Message: Borderline, needs human review. Sarah Chen scored 6.5 for Senior Python Developer. Score falls between auto-approve (8.0) and auto-reject (5.0) thresholds.
```

**Candidate scores 3.0:**
```
Supervision decision:
  Tier: auto_reject
  Action: rejected
  Message: Below threshold, auto-rejected. Sarah Chen scored 3.0 for Senior Python Developer.
```

> **James:** "The supervision layer does not talk to the agent at all. It runs after the agent finishes."

> **Emma:** "Correct. The agent does its work: parse, score, generate questions. The supervision layer takes the agent's output and applies policy. These are separate concerns."

> **James:** "What if the agent output does not contain a parseable score?"

> **Emma:** "That is why `extract_score_from_result` returns `None` when parsing fails. The pipeline routes to human review by default. When in doubt, escalate."

> **James:** "So the supervision layer has its own fallback: if it cannot parse the data, it treats it as borderline."

> **Emma:** "A supervision layer that silently approves when it cannot read the data is worse than having no supervision at all."

### What Changed Across the Three Modifications

| Modification             | Difficulty | Lines Changed  | What You Practiced                                            |
| ------------------------ | ---------- | -------------- | ------------------------------------------------------------- |
| A: Third tool            | Simple     | 3 config lines + tool definition | Adding tools to an agent pipeline in three coordinated places |
| B: Input validation      | Medium     | 3 functions (15 lines) | Defensive programming before the agent loop                   |
| C: Supervision layer     | Advanced   | 2 functions + pipeline (30 lines) | Post-agent policy enforcement with tier classification        |

Modification A changed the agent's capabilities. Modification B changed what reaches the agent. Modification C changed what happens after the agent finishes. Together, they form the three layers of a production pipeline: validation, execution, and supervision.

> **Emma:** "Which modification changed how the agent itself behaves?"

> **James:** "Only A. B and C are outside the agent loop."

> **Emma:** "That is the key architectural insight. The agent is one component in a larger pipeline. Most of the production complexity lives outside the agent: in validation, supervision, logging, cost tracking, and error handling."
