---
sidebar_position: 4
title: "James's Bug: Tool Failure Handling"
description: "Find and classify the bug in James's screen_candidate function when an MCP tool call fails and the skill accesses an empty result"
chapter: 71
lesson: 4
duration_minutes: 25
keywords:
  [planted bug, error taxonomy, tool call guard, isError, orchestration error, pipeline failure]

skills:
  - name: "Diagnosing Orchestration Errors in Skill-Tool Pipelines"
    proficiency_level: "B2"
    category: "Technical"
    bloom_level: "Analyze"
    digcomp_area: "5. Problem-Solving"
    measurable_at_this_level: "Student can identify the missing guard in a skill function that calls MCP tools, explain the failure scenario, and trace the crash to its root cause"

  - name: "Classifying Errors Using the Error Taxonomy"
    proficiency_level: "B2"
    category: "Conceptual"
    bloom_level: "Evaluate"
    digcomp_area: "5. Problem-Solving"
    measurable_at_this_level: "Student can classify a tool-call failure as an orchestration error and explain why it differs from data or logic errors"

learning_objectives:
  - objective: "Find the missing isError guard in James's screen_candidate function and explain why accessing result.content[0] crashes when the tool call fails"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Identify the exact line that crashes and describe the failure chain from timeout to IndexError"

  - objective: "Classify the bug using the Error Taxonomy and Verification Ladder, distinguishing orchestration errors from data errors"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Correct classification as Orchestration Error with Rung 4 verification and explanation of why Data/Edge-Case is incorrect"

cognitive_load:
  new_concepts: 4
  assessment: "Four concepts: tool call guard, isError check, orchestration error, pipeline failure cascade. All are introduced through the planted bug scenario, with the fix demonstrated in Emma's corrected version."

differentiation:
  extension_for_advanced: "Write a wrapper function that enforces the guard pattern for any MCP tool call, so future skills cannot skip the check"
  remedial_for_struggling: "Focus on just the parsed.content[0].text line. Ask: what is parsed.content when the server does not respond? Trace from there."
---

# James's Bug: Tool Failure Handling

Emma set the laptop in front of James. "I need to check on the job template server. While I am gone, read your `screen_candidate` code from Lesson 2. There is a bug. Find it before I get back."

James looked at his code:

```python
import asyncio
from mcp.client.session import ClientSession
from mcp.client.stdio import StdioServerParameters, stdio_client


async def screen_candidate(
    cv_text: str, job_requirements: str
) -> dict[str, object]:
    """Screen a candidate by parsing their CV and scoring it."""
    server_params = StdioServerParameters(
        command="uv", args=["run", "hireflow/servers/hireflow_mcp.py"]
    )
    async with stdio_client(server_params) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()

            # Step 1: parse the CV into structured data
            parsed = await session.call_tool("parse_cv", {"cv_text": cv_text})
            cv_data = parsed.content[0].text  # The agent should handle this... right?

            # Step 2: score against job requirements
            score_result = await session.call_tool(
                "score_candidate",
                {"cv_data": cv_data, "job_requirements": job_requirements},
            )
            return {"cv": cv_data, "score": score_result.content[0].text}
```

He read it twice. The logic looked fine: parse the CV, then score it. Two steps, two tool calls. What could go wrong?

## The Scenario

Here is the test case. The HireFlow MCP server is running but under heavy load. Candidate #47 submits a 200-page academic CV, and `parse_cv` takes 30 seconds to respond. The MCP client connection times out after 10 seconds.

:::warning STOP AND PREDICT [AI-FREE]
Do not scroll down. Do not ask your AI assistant.

1. What happens when `parse_cv` times out? What does `parsed` look like?
2. Which line crashes? What is the exception type?
3. What happens to candidates #48 through #200?

Write your predictions. Record your confidence (1-5).
:::

## What Actually Happens

When `parse_cv` fails, the MCP protocol returns a result where `isError` is `True` and `content` may be empty or contain an error message. The exact behavior depends on the failure mode:

- **Server timeout**: `parsed.content` is an empty list. No text content to read.
- **Server crash**: `parsed.isError` is `True`. Content may contain an error description.
- **Invalid input**: `parsed.isError` is `True`. Content usually has a message.

In all three cases, James's code hits this line:

```python
cv_data = parsed.content[0].text  # The agent should handle this... right?
```

When `parsed.content` is empty, `parsed.content[0]` raises an `IndexError`. The function crashes. The entire `screen_candidate` coroutine dies with an unhandled exception.

The comment is James's own: "The agent should handle this... right?" The agent does not handle it. Nothing handles it.

## The Cascade

James traced the failure forward. When `screen_candidate` raises an `IndexError`:

1. The `async with` blocks clean up, closing the MCP session and transport
2. The calling code (a batch processor, for example) receives the unhandled exception
3. If the batch processor does not catch it, the entire batch stops
4. Candidates #48 through #200 never get scored
5. One bad CV took down the whole pipeline

This is a **pipeline failure cascade**. A single tool call failure in one stage propagates upward and kills every subsequent operation. The failure is not in the MCP server (it timed out, which is expected under load). The failure is in the skill: it assumed every tool call succeeds.

## The Root Cause

The bug is not a logic error or a data error. James's algorithm is correct: parse, then score. The bug is that the skill does not verify **tool call success** before accessing the result. This is an **orchestration error**, a failure in how the skill coordinates with the tools it depends on.

An **orchestration error** occurs when the control flow between components is wrong, even though each component works correctly in isolation. The MCP server's timeout behavior is correct. Python's IndexError on an empty list is correct. The error is that nothing connects these two facts: the skill treats a failed response the same as a successful one.

Compare this to the data error in Chapter 70 Lesson 4. There, the parser handled title-case headers incorrectly. The tool itself had a bug. Here, the tool is fine. The bug is in the calling code that does not check whether the tool succeeded.

## Emma Returns

Emma came back and sat down. "Find it?"

James pointed at the `parsed.content[0].text` line. "There is no check for whether `parse_cv` actually worked. If it fails, `content` is empty, and I get an IndexError."

"Good. What type of error is that?"

"It is not a data error because the data is fine. It is not a logic error because the algorithm is right. The problem is that I did not check if the tool call succeeded before using the result."

"That is an orchestration error. Your skill orchestrates two tools. When the first tool fails, the orchestration needs to handle that. Otherwise one failure cascades through the entire pipeline."

James nodded. "Wait, so basically my whole screening pipeline dies because of one slow CV?"

"Every candidate after the failure never gets scored. The pipeline does not resume."

"And candidates #48 through #200?"

"Never processed. All because of one missing guard."

## Emma's Fix

Emma opened a new file and wrote the corrected version:

```python
import asyncio
from mcp.client.session import ClientSession
from mcp.client.stdio import StdioServerParameters, stdio_client


async def screen_candidate(
    cv_text: str, job_requirements: str
) -> dict[str, object]:
    """Screen a candidate by parsing their CV and scoring it.

    Returns a dict with 'cv', 'score', and optionally 'error' keys.
    If any tool call fails, returns partial results with an error message.
    """
    server_params = StdioServerParameters(
        command="uv", args=["run", "hireflow/servers/hireflow_mcp.py"]
    )
    async with stdio_client(server_params) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()

            # parse_cv: extract structured data from raw CV text
            parsed = await session.call_tool("parse_cv", {"cv_text": cv_text})
            if parsed.isError or not parsed.content:
                return {"error": "CV parsing failed", "cv": None, "score": None}
            cv_data = parsed.content[0].text

            # score_candidate: evaluate against job requirements
            score_result = await session.call_tool(
                "score_candidate",
                {"cv_data": cv_data, "job_requirements": job_requirements},
            )
            if score_result.isError or not score_result.content:
                return {"error": "Scoring failed", "cv": cv_data, "score": None}

            return {"cv": cv_data, "score": score_result.content[0].text}
```

Two changes. After each `call_tool`, Emma checks `isError` and `content` before accessing the result. If either check fails, the function returns a dict with an `error` key and `None` for the missing values.

"Every tool call can fail," Emma said. "Networks drop. Servers crash. If you access `result.content[0]` without checking, you are trusting the network. The network does not deserve trust."

"But the server was working fine when I tested it!" James said.

"Three candidates is not a test. What happens when candidate #47 submits a 200-page PDF and the parser times out?"

"It crashes."

"And candidates #48 through #200?"

"They never get scored." James paused. "So basically the whole pipeline dies because of one bad CV?"

"Now you understand why every tool call needs a **tool call guard**."

## The Guard Pattern

A **tool call guard** is two checks after every `call_tool`:

```python
result = await session.call_tool("tool_name", {"param": "value"})
if result.isError or not result.content:
    # handle failure: return error, skip this item, retry, or log
    ...
```

The first check (`result.isError`) catches server-reported errors: tool not found, invalid parameters, internal server failures. The second check (`not result.content`) catches empty responses: timeouts, connection drops, unexpected response formats.

Both checks are necessary. A tool can report `isError = False` but still return an empty content list. A tool can also report `isError = True` with a helpful error message in `content`. The **tool call guard** pattern handles both cases.

Every tool call in a skill needs this guard. No exceptions. If you write `result.content[0]` without checking first, you have written an orchestration error.

:::info ERROR TYPE
**Category:** Orchestration Error
**What happened:** The skill does not verify tool call success before accessing the result. When `parse_cv` fails, the response has no content, and the skill crashes on `parsed.content[0]`.
**Caught by:** Integration test with injected timeout
**Verification Rung:** Rung 4: pipeline verification (testing the full skill-to-tool chain, not individual tools)
:::

## Why Orchestration Errors Are Different

In Chapter 70, James's bug was a data error: the parser mishandled title-case headers. The tool itself was broken. The fix was inside the tool.

Here, the tool is not broken. The MCP server timed out, which is normal behavior under load. The fix is not in the tool; it is in the skill that calls the tool. The orchestration error lives in the gap between components.

This distinction matters because the debugging approach is different:

- **Data errors**: reproduce the input, trace through the tool, fix the tool
- **Logic errors**: find where the algorithm produces wrong output, fix the algorithm
- **Orchestration errors**: find where one component assumes another succeeded, add guards

When your pipeline crashes and every individual tool passes its tests, look for orchestration errors. The bug is in the glue, not in the parts.
