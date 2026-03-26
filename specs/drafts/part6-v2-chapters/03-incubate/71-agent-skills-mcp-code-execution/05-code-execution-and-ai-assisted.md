---
sidebar_position: 5
title: "Code Execution and AI-Assisted Investigation"
description: "Trace a batch screening skill through MCP tool calls using the write-execute-analyze loop, then use AI-assisted investigation to compare execution traces"
chapter: 71
lesson: 5
duration_minutes: 25
keywords:
  [
    batch processing,
    write-execute-analyze,
    orchestration,
    AI-assisted trace,
    semantic contract,
    Axiom I,
  ]

skills:
  - name: "Tracing Batch Skill Execution Through MCP"
    proficiency_level: "B2"
    category: "Technical"
    bloom_level: "Analyze"
    digcomp_area: "5. Problem-Solving"
    measurable_at_this_level: "Student can trace a batch processing skill through multiple MCP tool calls, predict the result status for each candidate, and explain how error handling isolates failures"

  - name: "Identifying Semantic Contract Violations"
    proficiency_level: "B2"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "5. Problem-Solving"
    measurable_at_this_level: "Student can identify a case where data flows correctly between tools but the semantic meaning is wrong, and explain why this is harder to detect than a crash"

  - name: "Using AI-Assisted Trace Comparison"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "5. Problem-Solving"
    measurable_at_this_level: "Student can prompt Claude Code to trace a function, compare the AI trace with their own prediction, and evaluate where the two traces diverge"

learning_objectives:
  - objective: "Trace the screen_batch function for three candidates with different outcomes and predict the result status for each"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Correct prediction of status values (scored, parse_failed, scored) and identification of which tool calls execute for each candidate"

  - objective: "Explain the difference between a tool call failure (crash or error) and a semantic contract violation (wrong data, correct flow)"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Written explanation distinguishing the two failure modes with an example of each from HireFlow"

cognitive_load:
  new_concepts: 4
  assessment: "Four concepts: batch processing via MCP, Axiom I application to skill code, semantic contract violation, AI-assisted trace comparison. The batch pattern extends the single-candidate pattern from Lesson 4. Semantic contracts build on the skill-tool contract from Lesson 3."

differentiation:
  extension_for_advanced: "Refactor screen_batch to use asyncio.gather for parallel tool calls per candidate, then explain why parse_cv and score_candidate cannot run in parallel for the same candidate"
  remedial_for_struggling: "Trace screen_batch for just one candidate (Alice) before attempting all three. Focus on which tool calls happen and what status gets returned."
---

# Code Execution and AI-Assisted Investigation

In Lesson 4, Emma fixed the single-candidate screener by adding tool call guards. That fixed the crash. But HireFlow does not screen one candidate at a time. A job posting attracts dozens of applicants. The skill needs to process a batch, handle failures per candidate, and keep going.

## The Batch Pattern

Here is the Resume Screener skill processing a batch of candidates:

```python
import asyncio
import json
from mcp.client.session import ClientSession
from mcp.client.stdio import StdioServerParameters, stdio_client


async def screen_batch(
    candidates: list[dict[str, str]],
    job_requirements: str,
) -> list[dict[str, object]]:
    """Screen a batch of candidates, isolating failures per candidate.

    Each candidate gets a status: 'scored', 'parse_failed', or 'score_failed'.
    One candidate's failure does not affect the others.
    """
    server_params = StdioServerParameters(
        command="uv", args=["run", "hireflow/servers/hireflow_mcp.py"]
    )
    results: list[dict[str, object]] = []

    async with stdio_client(server_params) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()

            for candidate in candidates:
                # Step 1: parse the CV
                parsed = await session.call_tool(
                    "parse_cv", {"cv_text": candidate["cv_text"]}
                )
                if parsed.isError or not parsed.content:
                    results.append({
                        "name": candidate["name"],
                        "status": "parse_failed",
                        "score": None,
                    })
                    continue

                cv_data = parsed.content[0].text

                # Step 2: score against requirements
                score_result = await session.call_tool(
                    "score_candidate",
                    {"cv_data": cv_data, "job_requirements": job_requirements},
                )
                if score_result.isError or not score_result.content:
                    results.append({
                        "name": candidate["name"],
                        "status": "score_failed",
                        "cv": cv_data,
                        "score": None,
                    })
                    continue

                results.append({
                    "name": candidate["name"],
                    "status": "scored",
                    "cv": cv_data,
                    "score": json.loads(score_result.content[0].text),
                })

    return results
```

Notice how `continue` replaces the early `return` from Lesson 4. When `parse_cv` fails for one candidate, the loop records the failure and moves to the next candidate. The pipeline does not die. Candidate #48 still gets scored even if candidate #47 caused a timeout.

## What the Skill Does (and What It Does Not Do)

Read the function again. Count the lines that compute something versus the lines that coordinate tool calls.

The skill does not parse CVs. It does not score candidates. It does not know anything about how parsing or scoring works internally. Every computation happens inside the MCP tools. The skill decides the order (parse first, then score), handles errors (check isError, record status), and aggregates results (build the results list).

This is **Axiom I: Shell as Orchestrator** applied to MCP integration. The skill is a shell. It contains no domain logic. It orchestrates tool calls, handles failures, and passes data between steps. If you find yourself writing CV parsing logic inside the skill function, you have violated Axiom I. That logic belongs in the MCP server.

The three-part loop inside each candidate iteration follows the **write-execute-analyze** pattern:

1. **Write**: construct the tool call parameters (`{"cv_text": candidate["cv_text"]}`)
2. **Execute**: call the MCP tool (`await session.call_tool(...)`)
3. **Analyze**: check the result and decide what to do next (`if parsed.isError or not parsed.content`)

Each tool call is one cycle of this loop. The batch function runs two cycles per candidate (parse, then score), with the analyze step of the first cycle feeding the write step of the second.

## Trace Three Candidates

Consider these three candidates applying for a Senior Python Engineer role:

| Candidate | CV Summary                                                         |
| --------- | ------------------------------------------------------------------ |
| Alice     | 5 years Python, machine learning background, AWS certified         |
| Bob       | Empty CV (submitted a blank document)                              |
| Carol     | 2 years Java, transitioning to Python, completed 3 Python projects |

:::warning STOP AND PREDICT [AI-FREE]
Do not scroll down. Do not ask your AI assistant.

For each candidate, predict:

1. Which MCP tool calls execute?
2. What is the `status` value in the results list?
3. Does the loop continue to the next candidate?

Write your predictions before reading on.
:::

### Alice: Normal Flow

Alice has a valid CV with real content. Both tool calls succeed.

| Step | Tool Call                                            | Result                                          |
| ---- | ---------------------------------------------------- | ----------------------------------------------- |
| 1    | `parse_cv(cv_text="5 years Python...")`              | `isError=False`, content has structured CV data |
| 2    | `score_candidate(cv_data=..., job_requirements=...)` | `isError=False`, content has score JSON         |

Status: `"scored"`. Both tools ran. The result includes parsed CV data and a score. The loop moves to Bob.

### Bob: Parse Failure

Bob's CV is empty. The `parse_cv` tool has nothing to parse.

| Step | Tool Call              | Result                          |
| ---- | ---------------------- | ------------------------------- |
| 1    | `parse_cv(cv_text="")` | `isError=True` or empty content |

Status: `"parse_failed"`. Only one tool call executed. The guard caught the failure. `score_candidate` never runs for Bob because there is no CV data to score. The `continue` statement skips to Carol.

This is the key improvement over James's Lesson 2 code. In his version, Bob would crash the entire pipeline. In this version, Bob gets recorded as `parse_failed` and the loop keeps going.

### Carol: Normal Flow

Carol has a valid CV with relevant content. Both tool calls succeed.

| Step | Tool Call                                            | Result                                          |
| ---- | ---------------------------------------------------- | ----------------------------------------------- |
| 1    | `parse_cv(cv_text="2 years Java...")`                | `isError=False`, content has structured CV data |
| 2    | `score_candidate(cv_data=..., job_requirements=...)` | `isError=False`, content has score JSON         |

Status: `"scored"`. Carol gets parsed and scored normally. Her score may be lower than Alice's (Java background versus Python background), but that is a domain decision made inside `score_candidate`, not by the skill.

The final results list contains three entries: Alice (scored), Bob (parse_failed), Carol (scored). Two out of three candidates were successfully screened. Bob's failure was isolated.

:::tip AI-ASSISTED INVESTIGATION
Now ask Claude Code to trace the `screen_batch` function for these three candidates.

**Prompt:**

```
Trace the execution of screen_batch for these three candidates
applying for Senior Python Engineer:
1. Alice: 5 years Python, ML background, AWS certified
2. Bob: empty CV (zero content)
3. Carol: 2 years Java, career change to Python, 3 Python projects

For each candidate, list:
- The MCP tool calls made (name and parameters)
- The expected result status
- Whether the loop continues
```

Compare Claude Code's trace with the predictions you wrote above.

Questions to check:

- Did Claude Code predict Bob's failure the same way you did?
- Did it identify that `score_candidate` never runs for Bob?
- Did it mention the `continue` statement's role in isolation?
  :::

## The Harder Bug: Semantic Contract Violations

Every tool call guard in `screen_batch` checks for crashes and errors. But there is a category of failure that passes every guard. The data flows correctly. No exceptions are raised. The results look plausible. And everything is wrong.

Emma told James a story.

"Last year I built a candidate ranking pipeline. The screener scored candidates on a 1-to-10 scale. The ranker consumed those scores and sorted candidates from best to worst. Every tool call succeeded. Every guard passed. The pipeline ran for two days before anyone noticed the problem."

"What happened?"

"The ranker expected scores on a 0-to-100 scale. A candidate who scored 9 out of 10 (excellent) looked like they scored 9 out of 100 (terrible). Every candidate appeared unqualified. We rejected 200 applicants before a hiring manager asked why nobody was good enough."

James stared. "But nothing crashed?"

"Nothing crashed. The data flowed perfectly. The semantic meaning was wrong."

This is a **semantic contract violation**. The skill-tool contract from Lesson 3 defines what data passes between components. A semantic contract violation happens when the data format is correct but the meaning is mismatched. Scores on a 1-10 scale are valid numbers. Scores on a 0-100 scale are valid numbers. The mismatch is invisible to guards that check for errors and empty content.

### A HireFlow Example

Consider this scenario in `screen_batch`: the `parse_cv` tool returns skills in lowercase (`python`, `javascript`, `aws`). The `score_candidate` tool compares those skills against job requirements using exact string matching. The job requirements list skills in title case (`Python`, `JavaScript`, `AWS`).

Every tool call succeeds. The guard passes. The score comes back as 0 because no skills matched. Alice, with 5 years of Python experience, gets scored as having zero matching skills. The result status is `"scored"`, not `"score_failed"`. The pipeline reports success.

This is not a tool bug (both tools work correctly in isolation). This is not an orchestration error (the skill checks every result). This is a semantic contract violation: the two tools disagree about how skill names are formatted.

:::tip KEY INSIGHT
Tool call guards protect against crashes and errors. They do not protect against wrong data that flows correctly. Semantic contract violations require a different defense: explicit format specifications in the skill-tool contract, validated with test cases that check output values, not just output existence.
:::

## Two Categories of Failure

| Failure Type                | Symptom                                | Guard Catches It? | Example                                           |
| --------------------------- | -------------------------------------- | ----------------- | ------------------------------------------------- |
| Tool call failure           | Exception, empty content, isError=True | Yes               | `parse_cv` times out on a 200-page CV             |
| Semantic contract violation | Wrong results, correct flow            | No                | Scores on 1-10 passed to a ranker expecting 0-100 |

Both failure types exist in any skill-to-tool pipeline. Lesson 4 taught you to handle the first type with tool call guards. Defending against the second type requires contracts with explicit data formats and integration tests that verify output values match expectations. Chapter 72 introduces those testing patterns.

## What You Investigated

This lesson covered the execution pattern for skills calling MCP tools:

1. **Batch isolation**: use `continue` to skip failed candidates instead of crashing the loop
2. **Axiom I in practice**: the skill orchestrates; the MCP tools compute
3. **Write-execute-analyze**: each tool call follows the three-step cycle
4. **Semantic contract violations**: correct data flow with wrong data meaning, invisible to guards
5. **AI-assisted tracing**: comparing your mental model against Claude Code's trace reveals gaps in understanding
