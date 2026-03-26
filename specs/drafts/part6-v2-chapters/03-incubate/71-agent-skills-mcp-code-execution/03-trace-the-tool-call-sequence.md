---
sidebar_position: 3
title: "Trace the Tool Call Sequence"
description: "Trace through the screen_candidate function step by step, investigate edge cases in the skill-tool contract, and discover what happens when assumptions break."
chapter: 71
lesson: 3
duration_minutes: 30
keywords:
  - trace table
  - skill-tool contract
  - edge case propagation
  - connection failure
  - MCP error handling
  - data flow analysis

skills:
  - name: "Tracing Async MCP Client Execution"
    proficiency_level: "B2"
    category: "Technical"
    bloom_level: "Analyze"
    digcomp_area: "5.1 Solving Technical Problems"
    measurable_at_this_level: "Can trace through an async MCP client function line by line, recording the state of each variable at each step"

  - name: "Identifying Skill-Tool Contract Violations"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "5.3 Creatively Using Digital Technology"
    measurable_at_this_level: "Can identify the implicit contract between a skill and an MCP tool and describe three scenarios where the contract breaks"

  - name: "Diagnosing Connection and Data Failures"
    proficiency_level: "B2"
    category: "Technical"
    bloom_level: "Analyze"
    digcomp_area: "5.1 Solving Technical Problems"
    measurable_at_this_level: "Can predict the exception type and failure point when an MCP server is unavailable or returns malformed data"

learning_objectives:
  - objective: "Complete a trace table for the screen_candidate function, recording variable states at each execution step"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Completed trace table compared against reference solution"

  - objective: "Define the skill-tool contract for the screen_candidate integration and identify three ways it can break"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Written contract definition listing input expectations, output format, and failure modes"

  - objective: "Predict the behavior of the integration when the MCP server is unavailable or returns unexpected data"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Edge case prediction with specific exception types and failure points"

cognitive_load:
  new_concepts: 4
  assessment: "Four concepts: trace table for async tool calls, skill-tool contract as a formal idea, edge case propagation across tool boundaries, connection failure modes. Builds on Lesson 2's code and Chapter 70's tool behavior."

differentiation:
  extension_for_advanced: "Write a defensive version of screen_candidate that catches each contract violation and returns a structured error instead of crashing. Include retry logic for transient connection failures."
  remedial_for_struggling: "Complete the trace table for the happy path only (no edge cases). Once the happy path is clear, attempt one edge case at a time."
---

# Trace the Tool Call Sequence

In Lesson 2, you predicted the behavior of `screen_candidate`. Now you are going to trace through it step by step, the way a debugger would. This lesson has two parts: the happy path trace and the edge case investigation.

## The Trace Table

A **trace table** records the state of a program at each execution step. For MCP client code, you track which line executes, what action it performs, which variables change, and what values they hold. Trace tables turn "I think I understand" into "I can prove what happens."

Here is the beginning of the trace table for `screen_candidate`. The input is Sarah Chen's CV from Lesson 2 and the requirements string `"3+ years Python, microservices experience, API design"`.

| Step | Line  | Action                   | Variable/State  | Value                                                                                   |
| ---- | ----- | ------------------------ | --------------- | --------------------------------------------------------------------------------------- |
| 1    | 10-12 | Create server parameters | `server_params` | `StdioServerParameters(command="uv", args=["run", "hireflow/servers/hireflow_mcp.py"])` |
| 2    | 13    | Open stdio connection    | `(read, write)` | Stream pair (connection to server process)                                              |
| 3    | 14    | Create client session    | `session`       | `ClientSession` instance (not yet initialized)                                          |
| 4    | 15    | Initialize session       | `session`       | Initialized; server capabilities exchanged                                              |
| ?    | ?     | ?                        | ?               | ?                                                                                       |

Complete the remaining steps yourself before looking at the solution. You should have at least four more rows covering the two tool calls, the data extraction, and the return statement.

:::tip Key Insight
The trace table forces you to distinguish between what the code does and what you assume it does. Step 4 is a good example: `session.initialize()` is not just a formality. It exchanges capability information with the server. If the server does not support the tools you plan to call, this is where you would find out.
:::

<details>
<summary>Completed Trace Table (click to reveal after completing yours)</summary>

| Step | Line  | Action                      | Variable/State  | Value                                                                                                                                                                                                                                                                                                                                                 |
| ---- | ----- | --------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | 10-12 | Create server parameters    | `server_params` | `StdioServerParameters(command="uv", args=["run", "hireflow/servers/hireflow_mcp.py"])`                                                                                                                                                                                                                                                               |
| 2    | 13    | Open stdio connection       | `(read, write)` | Stream pair (connection to server process)                                                                                                                                                                                                                                                                                                            |
| 3    | 14    | Create client session       | `session`       | `ClientSession` instance (not yet initialized)                                                                                                                                                                                                                                                                                                        |
| 4    | 15    | Initialize session          | `session`       | Initialized; capabilities exchanged with HireFlow server                                                                                                                                                                                                                                                                                              |
| 5    | 16    | Call `parse_cv` tool        | `parsed`        | `CallToolResult` with `content[0]` as `TextContent`                                                                                                                                                                                                                                                                                                   |
| 6    | 17    | Extract text from result    | `cv_data`       | JSON string: `'{"name": "Sarah Chen", "email": "sarah.chen@email.com", "skills": ["Python", "FastAPI", "PostgreSQL", "Docker", "MCP"], "experience": [{"title": "Senior Backend Engineer", "company": "TechCorp", ...}, {"title": "Junior Developer", "company": "StartupXYZ", ...}], "education": "BSc Computer Science, State University (2019)"}'` |
| 7    | 18-21 | Call `score_candidate` tool | `score_result`  | `CallToolResult` with scoring text in `content[0]`                                                                                                                                                                                                                                                                                                    |
| 8    | 22    | Build return dict           | return value    | `{"cv": {"name": "Sarah Chen", ...}, "score": "Score: 85/100. Strong match..."}`                                                                                                                                                                                                                                                                      |

</details>

Compare your trace table to the reference. Pay attention to Step 6: `cv_data` is a JSON **string**, not a Python dictionary. This distinction matters because `score_candidate` receives that string as-is. Line 22 calls `json.loads(cv_data)` to convert it for the return value, but the second tool call on line 18 receives the raw string.

## Edge Case 1: No Experience Section

Sarah Chen's CV had two jobs. Now consider a different candidate:

```
Alex Rivera
alex.rivera@email.com

SKILLS
Python, SQL, Excel

EDUCATION
BSc Statistics, City College (2024)
```

This CV has skills and education but no EXPERIENCE section.

From Chapter 70, you know that `parse_cv` handles missing sections by returning empty lists. So `parse_cv` returns structured data where `experience` is `[]`. The JSON string in `cv_data` includes `"experience": []`.

Now `score_candidate` receives that data. It expects experience entries to calculate a years-of-experience score. With an empty list, the tool has nothing to count. It cannot crash (the list is valid), but it produces a score that reflects zero experience.

The question is not whether this works. The question is whether the Resume Screener **skill** should have caught this before calling `score_candidate`. Should the skill check for empty experience and handle it differently? Or should the scoring tool handle all edge cases internally?

This is not a bug. It is a design decision about where responsibility lives. You will return to this question when you write your own integration later in this chapter.

## Edge Case 2: Server Not Running

What if James runs `screen_candidate` but forgets to start the HireFlow MCP server?

The failure happens at Step 2 in the trace table. `stdio_client` attempts to spawn a subprocess using the command `uv run hireflow/servers/hireflow_mcp.py`. If the file does not exist, or if `uv` is not installed, the subprocess fails to start. The `stdio_client` context manager raises an `OSError` or a related exception.

The code never reaches Step 3. No session is created. No tool calls are attempted. The entire function fails with an unhandled exception.

James's code has no `try/except` block. A connection failure produces a raw traceback that tells you almost nothing about what went wrong in HireFlow terms. It says something about a failed subprocess, not about a missing MCP server.

:::info Error Type: Silent Assumption
The `screen_candidate` function assumes the MCP server is running. This is a **silent assumption** because the code does not check for it, document it, or handle the failure case. Silent assumptions are the most common source of runtime integration failures.
:::

## The Skill-Tool Contract

"I keep running into these edge cases," James said. "The CV has no experience. The server is not running. The score comes back as a string when I expected a number. Every time I fix one thing, another breaks."

"What contract does your skill have with the tool?" Emma asked.

"Contract? I just call it and hope for the best."

"Hope is not an error handling strategy."

The **skill-tool contract** is the set of expectations that a skill has about the tools it calls. Every integration has one, whether you write it down or not. The contract specifies three things:

1. **Input expectations.** What does the tool accept? `parse_cv` expects a `cv_text` string. If the skill sends an integer, the tool rejects it. If the skill sends an empty string, the tool must handle it (and from Chapter 70, you know it does).

2. **Output format.** What does the tool return? `parse_cv` returns a `TextContent` object whose `.text` attribute is a JSON string with specific keys: `name`, `email`, `skills`, `experience`, `education`. The skill depends on this shape. If the tool changes its output format, the skill breaks silently.

3. **Failure modes.** How does the tool signal errors? Does it return an error message in the content? Does it raise an exception? Does it return valid-looking data with missing fields? The skill must know which failure signals to expect and how to react.

James's `screen_candidate` function has an implicit skill-tool contract. It assumes `parse_cv` returns valid JSON with the expected keys. It assumes `score_candidate` exists as a registered tool. It assumes the server is running. None of these assumptions are checked in code.

"Wait, so basically the contract is everything my code assumes but never verifies?" James asked.

"Exactly," Emma said. "And every unverified assumption is a place where your integration can fail without telling you why."

The skill-tool contract is not something the MCP protocol enforces. MCP handles transport, serialization, and capability discovery. The contract lives in the space between what the tool promises and what the skill expects. When that contract is implicit (as it is in James's code), violations produce confusing failures. When the contract is explicit (checked in code), violations produce clear error messages.

## Three Contract Violations

Here are three ways the skill-tool contract can break in `screen_candidate`:

**Violation 1: Tool not registered.** If `score_candidate` is not registered on the HireFlow MCP server, `session.call_tool("score_candidate", ...)` returns a result with `isError` set to `True`. James's code does not check for this. It proceeds to `score_result.content[0].text` and may get an error message instead of a score.

**Violation 2: Unexpected output shape.** If `parse_cv` changes its return format (say, from a flat JSON object to a nested one with a `metadata` wrapper), the JSON string in `cv_data` is still valid JSON, but `score_candidate` receives data in a shape it does not expect. The scoring tool might silently produce incorrect results rather than failing loudly.

**Violation 3: Partial data.** If `parse_cv` returns a valid object but with `null` for the `email` field (because the CV did not include an email address), downstream tools that expect an email string receive `null`. Depending on the tool's validation, this either works, fails, or produces garbage.

Each violation happens at a different layer. Violation 1 is a registration problem (the tool does not exist). Violation 2 is a format problem (the data shape changed). Violation 3 is a completeness problem (the data is valid but incomplete). Robust integration code checks for all three.

## What the Trace Revealed

The trace table and edge case analysis exposed several properties of James's integration:

- The data flows sequentially, with the output of `parse_cv` feeding directly into `score_candidate`.
- The code makes zero defensive checks: no error handling, no input validation, no contract verification.
- Three categories of failure exist: connection failures, contract violations, and data edge cases.

These are not flaws unique to James's code. They are properties of any runtime integration that connects skills to MCP tools. The next lessons in this chapter will show you how to make the skill-tool contract explicit and how to handle each failure category.

For now, make sure you can answer these questions from memory:

1. What are the five steps of the tool call sequence from Lesson 1?
2. At which trace table step does a connection failure occur?
3. Name the three things a skill-tool contract specifies.

If you can answer all three without scrolling back, you are ready for the next lesson.
