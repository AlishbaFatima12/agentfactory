---
sidebar_position: 7
title: "Modify Exercises: Extend the Integration"
description: "Three graduated exercises that extend skill-to-tool integration with scoring normalization, retry logic, and multi-tool orchestration for the Interview Question Generator."
chapter: 71
lesson: 7
duration_minutes: 35
keywords:
  - modify exercises
  - scoring normalization
  - retry logic
  - backoff
  - multi-tool orchestration
  - interview question generator
  - skill-tool contract
  - HireFlow

skills:
  - name: "Score Normalization"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can transform raw tool output into a domain-appropriate format (float to integer percentage) within an existing integration function"

  - name: "Retry Logic with Backoff"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "5.1 Solving Technical Problems"
    measurable_at_this_level: "Can implement a retry helper that handles transient MCP tool failures with configurable retries and backoff delay"

  - name: "Multi-Tool Orchestration"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can wire a new skill to multiple MCP tools in sequence, with error guards on every tool call and meaningful output structure"

learning_objectives:
  - objective: "Normalize raw MCP tool output into a domain-appropriate format by modifying a return statement"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Modified function returns integer score 0-100 when tool returns float 0.0-1.0"

  - objective: "Implement a retry-with-backoff helper for transient MCP tool failures"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Helper retries once after 1-second delay and returns the last result on final failure"

  - objective: "Wire the Interview Question Generator skill to multiple MCP tools with error guards on every call"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Function calls get_template and parse_cv in sequence, guards both calls, and returns structured output"

cognitive_load:
  new_concepts: 3
  assessment: "Three new concepts: retry with backoff, multi-tool orchestration across skills, and question generation workflow. Retry builds on error handling from Lesson 4. Multi-tool orchestration extends the single-tool pattern from Lessons 2-5. The graduated structure (simple to advanced) manages load by building incrementally."

differentiation:
  extension_for_advanced: "After Modification C, add a fourth step that calls extract_experience and uses experience gaps to weight question priority. Return the questions sorted by priority score."
  remedial_for_struggling: "Complete Modification A first. If comfortable, attempt B. Skip C until A and B feel solid. Modification A requires only one changed line."
---

# Modify Exercises: Extend the Integration

You have read, predicted, traced, investigated, and reassembled skill-to-tool integration code. Now you will modify it. Each exercise starts from Emma's corrected `screen_candidate()` function (Lesson 4) and adds a new capability.

The exercises are graduated: A changes one line, B adds a helper function, C wires a second skill to multiple tools.

---

## Starting Code

All three modifications start from this base. This is Emma's corrected version from Lesson 4, with `isError` guards on every tool call:

```python
import json

from mcp.client.session import ClientSession
from mcp.client.stdio import StdioServerParameters, stdio_client


async def screen_candidate(
    cv_text: str, job_requirements: str
) -> dict[str, object]:
    """Screen a candidate by parsing their CV and scoring the match."""
    server_params = StdioServerParameters(
        command="uv", args=["run", "hireflow/servers/hireflow_mcp.py"]
    )
    async with stdio_client(server_params) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()

            # Step 1: Parse the CV
            parsed = await session.call_tool("parse_cv", {"cv_text": cv_text})
            if parsed.isError or not parsed.content:
                return {"error": "CV parsing failed", "cv": None, "score": None}

            cv_data = parsed.content[0].text

            # Step 2: Score the candidate
            score_result = await session.call_tool(
                "score_candidate",
                {"cv_data": cv_data, "job_requirements": job_requirements},
            )
            if score_result.isError or not score_result.content:
                return {"error": "Scoring failed", "cv": cv_data, "score": None}

            return {"cv": cv_data, "score": score_result.content[0].text}
```

---

## Modification A: Scoring Normalization (Simple, 1 line changed)

**Goal:** The `score_candidate` tool returns scores as raw floats between 0.0 and 1.0 (e.g., `"0.73"`, `"0.91"`). The hiring manager dashboard expects integer scores on a 0-100 scale. Modify the return statement to normalize the score.

:::tip PREDICT BEFORE RUNNING
Before modifying the code, predict the output for these inputs:

- If `score_candidate` returns `"0.73"`, what should the normalized score be?
- If `score_candidate` returns `"0.00"`, what should the normalized score be?
- If `score_candidate` returns `"1.00"`, what should the normalized score be?

Write your predictions, then make the change and compare.
:::

### Instructions

Modify the final `return` statement in `screen_candidate()` so that the score is converted from a float string to an integer on the 0-100 scale.

You need to change one line. The conversion is: parse the string to a float, multiply by 100, round to the nearest integer.

Try it yourself before looking at the solution.

### Solution

Replace the final return statement:

```python
            raw_score = float(score_result.content[0].text)
            normalized_score = round(raw_score * 100)
            return {"cv": cv_data, "score": normalized_score}
```

### Check Your Predictions

| Tool Returns | Normalized Score | Explanation                         |
| ------------ | ---------------- | ----------------------------------- |
| `"0.73"`     | `73`             | 0.73 \* 100 = 73.0, rounded to 73   |
| `"0.00"`     | `0`              | 0.00 \* 100 = 0.0, rounded to 0     |
| `"1.00"`     | `100`            | 1.00 \* 100 = 100.0, rounded to 100 |

> **James:** "That's three lines instead of one. You said one line."
>
> **Emma:** "You could write it as one: `round(float(score_result.content[0].text) * 100)`. Three lines is more readable. Either way, the actual modification is minimal."

### What Could Go Wrong

What if `score_candidate` returns something that is not a valid float? For example, `"error: model not loaded"` or an empty string.

The `float()` call would raise a `ValueError`. In a production system, you would wrap the conversion in a try/except. For now, the `isError` guard above already filters out error responses. But this is worth noting: the guard checks the MCP protocol layer; it does not validate the content of a successful response. That distinction matters in Modification B.

---

## Modification B: Retry Logic with Backoff (Medium, 10 lines added)

**Goal:** MCP servers sometimes fail on the first attempt due to cold starts or transient network issues. Add retry logic so that if `parse_cv` fails, the skill waits 1 second and tries once more before giving up.

:::tip PREDICT BEFORE RUNNING
Before writing the retry helper, predict:

1. If `parse_cv` fails on the first call but succeeds on retry, how many total MCP calls are made to `parse_cv`?
2. If `parse_cv` fails on both attempts, what does the function return?
3. If `parse_cv` succeeds on the first call, does the retry logic add any overhead?

Write your predictions, then implement and verify.
:::

### Instructions

Write a helper function called `call_tool_with_retry` that wraps `session.call_tool`. It should:

1. Call the tool once
2. If the result has `isError` set to `True` or empty `content`, wait `backoff_seconds` and retry
3. After `max_retries` additional attempts, return the last result (even if it failed)

Then replace the `parse_cv` call in `screen_candidate()` to use this helper.

### Solution

Add this helper above `screen_candidate()`:

```python
import asyncio

from mcp.client.session import ClientSession


async def call_tool_with_retry(
    session: ClientSession,
    tool_name: str,
    arguments: dict[str, str],
    max_retries: int = 1,
    backoff_seconds: float = 1.0,
) -> object:
    """Call an MCP tool with retry logic for transient failures."""
    last_result = None
    for attempt in range(max_retries + 1):
        result = await session.call_tool(tool_name, arguments)
        if not result.isError and result.content:
            return result
        last_result = result
        if attempt < max_retries:
            await asyncio.sleep(backoff_seconds)
    return last_result  # Return last failed result for error reporting
```

Then update `screen_candidate()` to use it:

```python
            # Step 1: Parse the CV (with retry)
            parsed = await call_tool_with_retry(
                session, "parse_cv", {"cv_text": cv_text}
            )
            if parsed.isError or not parsed.content:
                return {"error": "CV parsing failed after retry", "cv": None, "score": None}
```

### Check Your Predictions

| Scenario                       | Total `parse_cv` Calls | Result                                                    |
| ------------------------------ | ---------------------- | --------------------------------------------------------- |
| Fails first, succeeds on retry | 2                      | Returns parsed CV data                                    |
| Fails both times               | 2                      | Returns `{"error": "CV parsing failed after retry", ...}` |
| Succeeds first time            | 1                      | Returns parsed CV data (no retry, no sleep)               |

The helper calls the tool at most `max_retries + 1` times. With `max_retries=1`, that means 2 attempts maximum. The `asyncio.sleep` only runs between attempts, not after the final failure.

> **Emma:** "Why not retry `score_candidate` too?"
>
> **James:** "We could. But the pattern is the same. Once I have the helper, I can wrap any tool call."
>
> **Emma:** "Good. The helper is reusable. That is the point of extracting it."

### Design Note: Exponential Backoff

This exercise uses a fixed 1-second delay. In production systems, **exponential backoff** multiplies the delay after each failure (1s, 2s, 4s, 8s). This prevents overwhelming a struggling server with rapid retries. The fixed delay is sufficient for this chapter. You will encounter exponential backoff in Chapter 72 when Agent SDKs handle retry policies at the framework level.

---

## Modification C: Wire the Interview Question Generator (Advanced, 15+ lines)

**Goal:** Connect the Interview Question Generator skill to MCP tools. After screening a candidate, the hiring team needs tailored interview questions. This requires calling `get_template` to retrieve the job template and `parse_cv` to get the candidate's structured profile, then combining them to identify focus areas.

:::tip PREDICT BEFORE RUNNING
Before writing the function, predict:

1. How many MCP tool calls does this function make?
2. If the job template has 5 competency areas and the candidate's CV shows strength in 3 of them, which areas should the interview questions focus on?
3. What happens if `get_template` returns an error but `parse_cv` succeeds?

Write your predictions, then implement and compare.
:::

### Instructions

Write a function called `generate_interview_questions` that:

1. Accepts `cv_text`, `job_role`, and `job_requirements` as parameters
2. Opens an MCP client session (same pattern as `screen_candidate`)
3. Calls `get_template` with the job role to retrieve the interview template
4. Calls `parse_cv` with the CV text to get structured candidate data
5. Compares the template's competency areas with the candidate's skills
6. Returns a dict with the template, CV highlights, and suggested question categories (focusing on gaps)

Guard every tool call with `isError` checks. If a tool fails, return a partial result explaining what succeeded and what did not.

Try it yourself before checking the solution.

### James's First Attempt

James wrote this:

```python
async def generate_interview_questions(
    cv_text: str, job_role: str, job_requirements: str
) -> dict[str, object]:
    """Generate tailored interview questions for a candidate."""
    server_params = StdioServerParameters(
        command="uv", args=["run", "hireflow/servers/hireflow_mcp.py"]
    )
    async with stdio_client(server_params) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()

            # Get the interview template for this role
            template_result = await session.call_tool(
                "get_template", {"template_name": job_role}
            )
            template_data = json.loads(template_result.content[0].text)

            # Parse the candidate's CV
            parsed = await session.call_tool("parse_cv", {"cv_text": cv_text})
            cv_data = json.loads(parsed.content[0].text)

            # Find gaps: template areas where candidate is weak
            template_areas = template_data.get("competency_areas", [])
            candidate_skills = [s.lower() for s in cv_data.get("skills", [])]
            focus_areas = [
                area for area in template_areas
                if area.lower() not in candidate_skills
            ]

            return {
                "template": template_data,
                "cv_highlights": cv_data,
                "focus_areas": focus_areas,
                "question_strategy": "Focus on gaps between template requirements and candidate strengths",
            }
```

Emma reviewed it. "Read lines 15-16 again. What happens if `get_template` returns an error?"

James looked at his code. No `isError` check on `template_result`. No check on `parsed` either.

"I fixed this exact bug in Lesson 4," James said. "Same pattern, different tool."

"Same pattern, different tool," Emma confirmed. "Guard every tool call. Every one."

### Emma's Corrected Version

```python
async def generate_interview_questions(
    cv_text: str, job_role: str, job_requirements: str
) -> dict[str, object]:
    """Generate tailored interview questions for a candidate.

    Calls get_template and parse_cv, then identifies competency gaps
    where interview questions should focus.
    """
    server_params = StdioServerParameters(
        command="uv", args=["run", "hireflow/servers/hireflow_mcp.py"]
    )
    async with stdio_client(server_params) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()

            # Step 1: Get the interview template for this role
            template_result = await session.call_tool(
                "get_template", {"template_name": job_role}
            )
            if template_result.isError or not template_result.content:
                return {
                    "error": "Failed to retrieve job template",
                    "template": None,
                    "cv_highlights": None,
                    "focus_areas": None,
                }

            template_data = json.loads(template_result.content[0].text)

            # Step 2: Parse the candidate's CV
            parsed = await session.call_tool(
                "parse_cv", {"cv_text": cv_text}
            )
            if parsed.isError or not parsed.content:
                return {
                    "error": "CV parsing failed",
                    "template": template_data,
                    "cv_highlights": None,
                    "focus_areas": None,
                }

            cv_data = json.loads(parsed.content[0].text)

            # Step 3: Identify gaps between template and candidate
            template_areas = template_data.get("competency_areas", [])
            candidate_skills = [s.lower() for s in cv_data.get("skills", [])]

            # Focus on areas where the candidate has no matching skill
            focus_areas = [
                area for area in template_areas
                if area.lower() not in candidate_skills
            ]

            return {
                "template": template_data,
                "cv_highlights": cv_data,
                "focus_areas": focus_areas,
                "question_strategy": (
                    "Focus on gaps between template requirements "
                    "and candidate strengths"
                ),
            }
```

### Check Your Predictions

| Question                                                   | Answer                                                                                      |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| How many MCP tool calls?                                   | 2: `get_template` and `parse_cv`                                                            |
| Where should questions focus?                              | On the 2 gap areas (the competency areas where the candidate has no matching skill)         |
| What if `get_template` fails but `parse_cv` would succeed? | The function returns early with an error after `get_template`. It never reaches `parse_cv`. |

> **James:** "Wait, so basically the Interview Question Generator is the opposite of the Resume Screener. The Screener looks at what the candidate HAS. The question generator looks at what they're MISSING."
>
> **Emma:** "Good instinct. Questions should probe gaps, not confirm strengths. A candidate who lists 'Python expert' on their CV does not need a Python fundamentals question. They need a question about the area they did not mention."

### Why Partial Results Matter

Notice that Emma's version returns the template even when CV parsing fails. This is intentional. The hiring manager can still see the template structure and prepare generic questions. A function that returns `{"error": "something failed"}` with no other data forces the caller to start over. A function that returns everything it collected before the failure lets the caller salvage what it can.

This pattern, returning as much useful data as possible when some steps fail, is called **graceful degradation**. You will use it extensively in the Make capstone (Lesson 8).

---

## Summary: Three Modifications, Three Levels

| Modification               | Difficulty | Lines Changed            | What You Practiced                                |
| -------------------------- | ---------- | ------------------------ | ------------------------------------------------- |
| A: Score normalization     | Simple     | 1-3 lines                | Transforming tool output for a domain requirement |
| B: Retry with backoff      | Medium     | 10 lines (new helper)    | Handling transient failures in tool calls         |
| C: Wire Question Generator | Advanced   | 15+ lines (new function) | Multi-tool orchestration with error guards        |

Each modification built on the previous work. A taught output transformation. B taught resilience. C taught multi-tool wiring with the same error-guard pattern repeated for every call.

> **Emma:** "How many times did you write `if result.isError or not result.content` across these three exercises?"
>
> **James:** "At least four times. Five if you count the retry helper."
>
> **Emma:** "Does that repetition bother you?"
>
> **James:** "It should. But I also remember Lesson 4 where I skipped it and the function crashed."
>
> **Emma:** "The repetition is the guard. In Chapter 72, Agent SDKs will handle some of this for you. Until then, every tool call gets a guard. No exceptions."
