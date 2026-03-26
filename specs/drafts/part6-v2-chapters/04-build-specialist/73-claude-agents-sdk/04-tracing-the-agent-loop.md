---
sidebar_position: 4
title: "Tracing the Agent Loop"
description: "Trace each step of a multi-tool agent execution in a structured table, then investigate edge cases where tools fail or return unexpected data."
keywords:
  - agent loop trace
  - trace table
  - edge case investigation
  - error handling
  - mcp tool failure
  - agent debugging
  - hireflow screening
chapter: 73
lesson: 4
duration_minutes: 30

skills:
  - name: "Agent Execution Tracing"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Analyze"
    digcomp_area: "Digital Problem-Solving"
    measurable_at_this_level: "Can construct a step-by-step trace table for a multi-tool agent execution, identifying inputs, outputs, and state changes at each step"
  - name: "Edge Case Reasoning"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Analyze"
    digcomp_area: "Digital Problem-Solving"
    measurable_at_this_level: "Can identify at least two failure modes in an agent tool chain and describe the cascading effects on downstream tools"
  - name: "Agent Error Analysis"
    proficiency_level: "A2"
    category: "Technical"
    bloom_level: "Understand"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can explain how the agent loop handles tool errors and distinguish between agent-level and tool-level failures"

learning_objectives:
  - objective: "Construct a complete trace table for a five-step agent execution, filling in tool names, inputs, outputs, and state transitions"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Completed trace table compared against reference solution"
  - objective: "Identify two edge cases where tool failures cascade through the agent pipeline and describe the expected agent behavior for each"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Written analysis of failure scenarios with predicted agent responses"
  - objective: "Distinguish between errors the agent can recover from and errors that require developer intervention"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Classification exercise sorting error types into recoverable and non-recoverable categories"

cognitive_load:
  new_concepts: 2
  assessment: "Two new concepts: structured trace tables as a debugging method, and cascading failure analysis in tool chains. Both apply familiar tools (Read, parse_cv, score_candidate) to a new analytical framework. The trace table exercise requires sustained attention but uses known HireFlow entities."

differentiation:
  extension_for_advanced: "After completing the trace table, add a sixth step where the agent calls a hypothetical notify_recruiter tool. Trace the data dependencies and predict what inputs this tool would need from previous steps."
  remedial_for_struggling: "Complete only steps 1, 2, and 5 of the trace table first. These are provided. Then work on step 3, which follows the same pattern as step 2. Save step 4 for last."
---

# Tracing the Agent Loop

## From Output to Understanding

In the previous lesson, James ran his candidate screening agent and saw the output: Read, Read, parse_cv, score_candidate, synthesis. He knew WHAT happened. Now he needed to understand HOW it happened, step by step, with enough detail to debug problems when they arise.

Emma handed him a blank table. "Trace the execution. Every step. What the agent decided, what tool it called, what went in, what came out, and what state changed."

"Why? I already saw it work."

"Because 'it worked' tells you nothing when it stops working. If score_candidate returns a score of 0.0 for a qualified candidate, you need to trace backward through the chain to find where the data went wrong. Was the job spec misread? Did parse_cv extract the wrong skills? Did the scoring algorithm receive malformed input? Without a trace, you are guessing."

## The Reference Code

Here is the code from Lesson 03. You will trace its execution.

```python
"""HireFlow candidate screening agent with MCP tools."""

import asyncio
from claude_agent_sdk import query, ClaudeAgentOptions, ResultMessage, TextBlock


async def screen_candidate() -> None:
    options: ClaudeAgentOptions = ClaudeAgentOptions(
        allowed_tools=[
            "Read",
            "mcp__parse_cv__parse_cv",
            "mcp__score_candidate__score_candidate",
        ],
        permission_mode="acceptEdits",
        max_turns=10,
        cwd="/home/james/hireflow",
        mcp_servers=[
            {
                "name": "parse_cv",
                "type": "stdio",
                "command": "python",
                "args": ["-m", "hireflow.mcp_servers.parse_cv"],
            },
            {
                "name": "score_candidate",
                "type": "stdio",
                "command": "python",
                "args": ["-m", "hireflow.mcp_servers.score_candidate"],
            },
        ],
    )

    prompt: str = (
        "Parse this candidate's CV and score them against the "
        "Senior Python Developer role. The CV is at "
        "candidates/cvs/sarah_chen.txt and the job spec is at "
        "job_descriptions/senior_python_dev.md."
    )

    async for message in query(prompt=prompt, options=options):
        if message.type == "assistant":
            for block in message.message.content:
                if isinstance(block, TextBlock):
                    print(f"[Agent] {block.text}")
        elif message.type == "tool_use":
            print(f"[Tool] {message.tool_name}")
            print(f"  Input: {message.tool_input}")
        elif isinstance(message, ResultMessage):
            for block in message.message.content:
                if isinstance(block, TextBlock):
                    print(f"[Result] {block.text}")


asyncio.run(screen_candidate())
```

## The Trace Table

Fill in the missing rows. Steps 1, 2, and 5 are completed for you. Steps 3 and 4 are yours to complete.

| Step | Agent Decision                                                    | Tool Called     | Input                                                    | Output                                                                                                      | State After This Step           |
| ---- | ----------------------------------------------------------------- | --------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------- |
| 1    | "I need the CV text and the job spec. Let me read both files."    | `Read`          | `{"file_path": "candidates/cvs/sarah_chen.txt"}`         | Raw CV text (800 words: name, experience, skills, education)                                                | Agent holds: CV text            |
| 2    | "Now I need the job specification to know what to score against." | `Read`          | `{"file_path": "job_descriptions/senior_python_dev.md"}` | Job spec (title, requirements, preferred qualifications, salary range)                                      | Agent holds: CV text + job spec |
| 3    | _(your answer)_                                                   | _(your answer)_ | _(your answer)_                                          | _(your answer)_                                                                                             | _(your answer)_                 |
| 4    | _(your answer)_                                                   | _(your answer)_ | _(your answer)_                                          | _(your answer)_                                                                                             | _(your answer)_                 |
| 5    | "I have all the data. Let me write the final recommendation."     | (none)          | All previous outputs combined                            | "Sarah Chen: 8.2/10. Strong Python depth, FastAPI match. Gap: no GraphQL. Recommend: advance to interview." | Agent produces result message   |

Take a few minutes to fill in steps 3 and 4 before reading the answers.

### Step 3: Answer

| Step | Agent Decision                                                       | Tool Called               | Input                                                    | Output                                                                                                                                                 | State After This Step                                   |
| ---- | -------------------------------------------------------------------- | ------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| 3    | "I have the raw CV text. I need to extract structured data from it." | `mcp__parse_cv__parse_cv` | `{"cv_text": "Sarah Chen\nSenior Software Engineer..."}` | Structured JSON: `{"name": "Sarah Chen", "years_experience": 8, "skills": ["Python", "FastAPI", "Django", "AWS"], "education": "MS Computer Science"}` | Agent holds: CV text + job spec + parsed candidate data |

The key detail: the agent passes the **raw CV text** it read in Step 1 as input to parse_cv. The MCP tool does not read the file itself. It receives text and returns structured data. This is the data dependency that many people miss in their predictions.

### Step 4: Answer

| Step | Agent Decision                                                                  | Tool Called                             | Input                                                                                                                                                                                 | Output                                                                                                                                          | State After This Step                           |
| ---- | ------------------------------------------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| 4    | "Now I have structured candidate data and the job spec. I can score the match." | `mcp__score_candidate__score_candidate` | `{"candidate_data": {"name": "Sarah Chen", "years_experience": 8, "skills": [...]}, "job_spec": {"title": "Senior Python Developer", "required_skills": ["Python", "FastAPI"], ...}}` | `{"score": 8.2, "strengths": ["Python depth", "FastAPI production experience"], "gaps": ["No GraphQL mentioned"], "recommendation": "advance"}` | Agent holds: all previous data + scoring result |

Notice that score_candidate receives TWO inputs: the parsed candidate data from Step 3 AND the job spec from Step 2. Both must be available before this step can execute. This is why the agent cannot call score_candidate before completing Steps 1, 2, and 3.

## The Data Dependency Chain

Emma drew the dependency chain on the whiteboard:

```
Step 1: Read(CV file) ──────────────────────→ raw CV text ──→ Step 3
Step 2: Read(job spec) ─────────────────────→ job spec ────→ Step 4
Step 3: parse_cv(raw CV text) ──────────────→ parsed data ─→ Step 4
Step 4: score_candidate(parsed data, spec) ─→ score ───────→ Step 5
Step 5: synthesis(all results) ─────────────→ recommendation
```

"Every arrow is a data dependency," Emma said. "If any step fails, everything downstream breaks. That is not a design flaw. That is reality. The question is: what does the agent do when a step fails?"

## Edge Case 1: The CV File Does Not Exist

James changed the file path to a candidate who had not submitted a CV yet.

```python
prompt: str = (
    "Parse this candidate's CV and score them against the "
    "Senior Python Developer role. The CV is at "
    "candidates/cvs/nonexistent_candidate.txt and the job spec is at "
    "job_descriptions/senior_python_dev.md."
)
```

He ran the agent. The output:

```
[Agent] I'll start by reading the candidate's CV file.

[Tool] Read
  Input: {"file_path": "candidates/cvs/nonexistent_candidate.txt"}

[Agent] The file does not exist. I cannot parse a CV that I cannot read.
        Let me check if there's an alternative location or filename.

[Tool] Read
  Input: {"file_path": "candidates/cvs/"}

[Agent] The candidates/cvs/ directory exists but does not contain a file
        matching "nonexistent_candidate.txt". I cannot proceed with
        screening without the candidate's CV.

[Result] Unable to screen candidate: the CV file at
         candidates/cvs/nonexistent_candidate.txt was not found.
         Please verify the file path and ensure the CV has been
         uploaded before requesting screening.
```

"Wait, so basically... the agent tried to recover on its own?" James leaned forward. "It got an error, tried listing the directory to find the file, and when that failed too, it gave a clear error message instead of crashing."

"The agent loop kept running," Emma said. "Read returned an error. The agent treated that error as information, reasoned about it, and decided on a recovery strategy. When recovery failed, it produced a helpful result explaining the problem. No exception, no crash, no silent failure."

Notice what did NOT happen: the agent did not call parse_cv with empty input. It did not call score_candidate with no candidate data. The data dependency chain prevented nonsensical downstream calls because the agent recognized it could not proceed without the prerequisite data.

"I have to be honest about something," Emma said. "I once shipped an agent to production without handling the missing file case. The agent was a document summarizer for a legal team. When a file path was wrong, the agent tried to summarize the error message itself. It produced a confident summary of 'File not found: /legal/contracts/amendment_3.pdf' as if that were the document content. The legal team used that summary in a client meeting."

James winced.

"Three hours of cleanup. The fix was adding a check at the top of the prompt: 'If any file cannot be read, stop and report the error. Do not proceed with partial data.' That single sentence prevented the cascading failure."

## Edge Case 2: parse_cv Returns Malformed Data

The second edge case is subtler. The CV file exists and is readable, but parse_cv returns data that score_candidate cannot process.

James set up the scenario: a CV written in a mix of English and Mandarin, with non-standard formatting. The parse_cv server extracted what it could, but the output was incomplete.

```
parse_cv output:
{
  "name": "Wei Zhang",
  "years_experience": null,
  "skills": [],
  "education": "Beijing University (field not parsed)"
}
```

Years of experience is `null`. The skills list is empty. The education field contains a parenthetical note from the parser instead of actual data.

James ran the agent with this candidate. The output:

```
[Agent] The CV has been parsed, but the results are incomplete.
        Years of experience is missing and no skills were extracted.
        This may be due to non-standard CV formatting. I'll proceed
        with scoring but note the data quality issues.

[Tool] mcp__score_candidate__score_candidate
  Input: {"candidate_data": {"name": "Wei Zhang",
          "years_experience": null, "skills": []},
          "job_spec": {"title": "Senior Python Developer", ...}}

[Agent] The scoring result reflects the missing data. The candidate
        scored 2.1/10, but this score is unreliable because the
        CV parser could not extract key fields.

[Result] Candidate: Wei Zhang
         Score: 2.1/10 (LOW CONFIDENCE: CV parsing was incomplete)
         Warning: years_experience and skills were not extracted from
         the CV. This score likely underrepresents the candidate's
         qualifications. Manual review recommended before any
         reject decision.
```

"This is the interesting case," Emma said. "The agent did not crash. It did not refuse to proceed. It scored the candidate, but it flagged the score as unreliable. That warning about low confidence is the difference between a useful agent and a dangerous one."

James studied the output. "But it still scored 2.1. A recruiter might see that number and reject the candidate without reading the warning."

"Exactly. The agent did the best it could with the data it had. Whether that best is good enough is a design decision, not an agent behavior. In Chapter 75, we will add guardrails that prevent low-confidence scores from reaching recruiters without manual review. For now, the lesson is: the agent passes bad data forward unless you tell it not to."

## What the Agent Cannot Recover From

Not all errors are recoverable. The agent can reason about tool errors it receives as messages. It cannot recover from failures that happen outside the message stream.

| Error Type                  | Example                          | Agent Can Recover? | Why                                                            |
| --------------------------- | -------------------------------- | ------------------ | -------------------------------------------------------------- |
| Tool returns error message  | Read: "file not found"           | Yes                | Agent receives the error as a tool result and reasons about it |
| Tool returns malformed data | parse_cv: null fields            | Partially          | Agent can flag the issue but still passes bad data downstream  |
| MCP server fails to start   | stdio connection refused         | No                 | The SDK raises an exception before the agent loop begins       |
| API key is invalid          | 401 Unauthorized                 | No                 | The SDK raises an exception on the first query() call          |
| Network timeout             | Connection to Anthropic API lost | No                 | The SDK raises an exception; the async generator stops         |

The bottom three are infrastructure failures. The agent loop never starts or is interrupted mid-execution. These require error handling in your Python code (try/except around the async for loop), not in the agent's prompt.

## James Builds a Mental Model

James drew a diagram in his notebook:

```
Recoverable errors (agent handles):
  Tool returns error → agent reasons → retry, skip, or report
  Tool returns bad data → agent flags → proceeds with warning

Non-recoverable errors (code handles):
  Server won't start → SDK exception → try/except in Python
  Auth failure → SDK exception → check API key
  Network failure → SDK exception → retry at application level
```

"Two layers of error handling," James said. "The agent handles tool-level problems. My code handles infrastructure-level problems."

"That is the right mental model," Emma said. "The agent is good at reasoning about data problems because it can read error messages and decide what to do. It is bad at reasoning about infrastructure problems because those happen below the message layer. The agent never sees them."

## Your Turn: Trace a Modified Scenario

Here is a modified prompt for the same agent:

```python
prompt: str = (
    "Score these two candidates against the Junior Data Analyst role. "
    "Candidate 1 CV: candidates/cvs/alex_park.txt. "
    "Candidate 2 CV: candidates/cvs/maria_gonzalez.txt. "
    "Job spec: job_descriptions/junior_data_analyst.md."
)
```

The agent has the same three tools: Read, mcp**parse_cv**parse_cv, and mcp**score_candidate**score_candidate.

:::tip Exercise
Without running the code, construct a trace table for this execution. How many steps will it take? In what order will the tools be called?

Hints:

- The agent needs to process TWO candidates, not one.
- Each candidate needs the full pipeline: Read CV, parse CV, score.
- The job spec only needs to be read once.
- Estimate the number of turns, then count the tool calls.
  :::

A reasonable trace has 8-9 steps: Read (job spec), Read (CV 1), Read (CV 2), parse_cv (candidate 1), parse_cv (candidate 2), score_candidate (candidate 1), score_candidate (candidate 2), synthesis comparing both candidates, and possibly a final ranking. The exact order of the two candidate pipelines may vary: the agent might process candidate 1 fully before starting candidate 2, or it might read both CVs first and then parse both. Both strategies are valid.

## Check Your Understanding

1. **Trace table**: In the original five-step execution, which step has TWO data dependencies (needs output from two previous steps)?

2. **Error recovery**: The agent receives a "file not found" error from Read. It tries to list the directory. This is an example of which type of error handling: agent-level or code-level?

3. **Malformed data**: parse_cv returns `{"skills": []}` for a candidate who listed 12 skills on their CV. The agent passes this to score_candidate. What is the likely effect on the score? What should the agent do differently?

4. **Non-recoverable errors**: The MCP server for parse_cv fails to start (the Python module has a syntax error). Where does this error surface: in the agent's reasoning, in the tool_use message stream, or as a Python exception in your code?

5. **Multi-candidate trace**: For the two-candidate scenario, what is the minimum number of Read calls? Could it be fewer than three? Why or why not?

---

**Next lesson**: You will examine how the Claude Agent SDK handles multi-agent coordination using `AgentDefinition`, where each HireFlow FTE becomes a named agent with its own tools and prompt.
