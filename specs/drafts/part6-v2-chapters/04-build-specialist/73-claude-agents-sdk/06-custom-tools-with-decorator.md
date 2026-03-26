---
sidebar_position: 6
title: "Custom Tools with @tool Decorator"
description: "Build HireFlow-specific tools using the @tool decorator, bundle them with create_sdk_mcp_server, and learn input validation patterns that prevent agent-caused failures"
chapter: 73
lesson: 6
duration_minutes: 40
keywords:
  [
    tool decorator,
    create_sdk_mcp_server,
    input validation,
    error handling,
    isError,
    tool granularity,
    God Tool anti-pattern,
    HireFlow,
  ]

skills:
  - name: "Building Custom Agent Tools"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Student can define a custom tool with the @tool decorator including name, description, and typed input schema"

  - name: "Input Validation for Agent Tools"
    proficiency_level: "B2"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "5.1 Solving Technical Problems"
    measurable_at_this_level: "Student can add validation logic that catches invalid agent inputs and returns structured error responses with isError flag"

  - name: "Tool Granularity Design"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Student can evaluate whether a tool design is too coarse (God Tool) or too granular, and justify the chosen granularity for a domain"

learning_objectives:
  - objective: "Build a custom tool using @tool with name, description, and typed input_schema, then register it with create_sdk_mcp_server"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Working tool that the agent discovers and calls correctly"

  - objective: "Add input validation that rejects bad data and returns isError responses instead of crashing"
    proficiency_level: "B2"
    bloom_level: "Apply"
    assessment_method: "Tool handles negative scores, empty strings, and missing fields without raising exceptions"

  - objective: "Evaluate a tool design for appropriate granularity and explain why God Tools hurt agent performance"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Written comparison of coarse vs. granular tool design with concrete tradeoffs"

cognitive_load:
  new_concepts: 4
  assessment: "Four concepts: @tool decorator anatomy, input_schema type mapping, isError flag for error responses, tool granularity spectrum. Builds on Lesson 05's mcp_servers integration."

differentiation:
  extension_for_advanced: "Build a third tool (generate_interview_questions) that takes parsed CV data and job requirements, then returns role-specific interview questions"
  remedial_for_struggling: "Focus on format_candidate_brief first with no validation; add validation after the basic tool works"
---

# Custom Tools with @tool Decorator

Lesson 05 connected your existing MCP servers to the agent. But those servers were built with FastMCP's `@mcp.tool()` decorator from Chapter 70. The Claude Agent SDK has its own tool system: the `@tool` decorator. It creates in-process tools that the agent can call without a separate server.

This lesson builds two new HireFlow tools from scratch, teaches you to handle bad inputs, and explores a design decision that affects every tool you will ever write.

## Tool Anatomy: @tool Decorator

Every custom tool has four parts: a name, a description, an input schema, and an implementation. Here is the first tool, `format_candidate_brief`:

```python
# File: hireflow/tools/candidate_tools.py
from typing import Any

from claude_agent_sdk import tool


@tool(
    "format_candidate_brief",
    "Format parsed CV data and match score into a hiring manager brief",
    {
        "candidate_name": str,
        "cv_summary": str,
        "score": float,
        "role": str,
    },
)
async def format_candidate_brief(args: dict[str, Any]) -> dict[str, Any]:
    """Create a structured brief for the hiring manager."""
    name: str = args["candidate_name"]
    summary: str = args["cv_summary"]
    score: float = args["score"]
    role: str = args["role"]

    if score >= 0.8:
        recommendation: str = "Strong Match: proceed to interview"
    elif score >= 0.5:
        recommendation = "Partial Match: review with hiring manager"
    else:
        recommendation = "Weak Match: archive unless role requirements change"

    brief: str = (
        f"CANDIDATE BRIEF\n"
        f"===============\n"
        f"Candidate: {name}\n"
        f"Role: {role}\n"
        f"Match Score: {score:.0%}\n"
        f"Recommendation: {recommendation}\n\n"
        f"Summary:\n{summary}"
    )

    return {"content": [{"type": "text", "text": brief}]}
```

The `@tool` decorator takes three arguments. The first is the tool name that the agent sees during discovery. The second is a natural-language description that helps the agent decide when to use this tool. The third is the input schema: a dictionary mapping parameter names to Python types.

The function itself receives `args` as a dictionary matching the input schema. It returns a dictionary with a `"content"` key containing a list of content blocks. This is the standard MCP response format.

## The Second Tool: check_visa_eligibility

Not every hiring decision is about skills. Some roles require candidates to have work authorization in a specific country. This tool checks whether a candidate's location matches the job's location requirements:

```python
@tool(
    "check_visa_eligibility",
    "Check if a candidate's location meets the job's location requirements",
    {
        "candidate_location": str,
        "job_locations": list,
        "remote_allowed": bool,
    },
)
async def check_visa_eligibility(args: dict[str, Any]) -> dict[str, Any]:
    """Determine if the candidate is eligible based on location."""
    candidate_loc: str = args["candidate_location"].strip().lower()
    job_locations: list[str] = [loc.lower().strip() for loc in args["job_locations"]]
    remote: bool = args["remote_allowed"]

    if remote:
        return {
            "content": [
                {
                    "type": "text",
                    "text": (
                        f"ELIGIBLE: Role allows remote work. "
                        f"Candidate location ({candidate_loc}) accepted."
                    ),
                }
            ]
        }

    if candidate_loc in job_locations:
        return {
            "content": [
                {
                    "type": "text",
                    "text": (
                        f"ELIGIBLE: Candidate location ({candidate_loc}) "
                        f"matches job requirement."
                    ),
                }
            ]
        }

    return {
        "content": [
            {
                "type": "text",
                "text": (
                    f"NOT ELIGIBLE: Candidate is in {candidate_loc}. "
                    f"Role requires: {', '.join(job_locations)}. "
                    f"Remote work not permitted."
                ),
            }
        ]
    }
```

## Bundling Tools into a Server

Once you have multiple tools, bundle them with `create_sdk_mcp_server`:

```python
from claude_agent_sdk import create_sdk_mcp_server

hiring_tools_server = create_sdk_mcp_server(
    "hiring_tools",
    "1.0.0",
    [format_candidate_brief, check_visa_eligibility],
)
```

Now register the server in `ClaudeAgentOptions`:

```python
from claude_agent_sdk import ClaudeAgentOptions

options = ClaudeAgentOptions(
    mcp_servers={"hiring_tools": hiring_tools_server},
    allowed_tools=[
        "mcp__hiring_tools__format_candidate_brief",
        "mcp__hiring_tools__check_visa_eligibility",
    ],
)
```

The naming convention from Lesson 05 applies: `mcp__hiring_tools__format_candidate_brief`. The server name is `"hiring_tools"`, the tool name is `"format_candidate_brief"`.

## What Happens Without Validation

James built both tools and ran the agent. It worked for normal inputs. Then he tested with edge cases.

```python
# Agent passes a negative score
args = {"candidate_name": "Test", "cv_summary": "...", "score": -0.5, "role": "Engineer"}
```

The tool produced: `"Match Score: -50%"` and `"Weak Match: archive unless role requirements change."` A negative score makes no sense, but the tool accepted it and produced output that looks plausible. The hiring manager would see "-50% match" and have no idea what that means.

```python
# Agent passes an empty candidate name
args = {"candidate_name": "", "cv_summary": "...", "score": 0.7, "role": "Engineer"}
```

The brief reads: `"Candidate: "` with nothing after it. Not a crash, but a broken document.

James shrugged. "The agent would not pass bad data."

Emma pulled up a terminal. "Let me show you something." She ran the agent with a malformed CV that had no name line. The parser returned an empty string for `candidate_name`. The agent passed that empty string to `format_candidate_brief`. The output was the blank-name brief James had dismissed.

"The agent passes exactly what it gets from the previous tool," Emma said. "If `parse_cv` extracts bad data, every downstream tool inherits that problem. Your tools are the last line of defense."

## Adding Input Validation

Here is `format_candidate_brief` with validation:

```python
@tool(
    "format_candidate_brief",
    "Format parsed CV data and match score into a hiring manager brief",
    {
        "candidate_name": str,
        "cv_summary": str,
        "score": float,
        "role": str,
    },
)
async def format_candidate_brief(args: dict[str, Any]) -> dict[str, Any]:
    """Create a structured brief for the hiring manager."""
    # --- Input validation ---
    name: str = args.get("candidate_name", "").strip()
    if not name:
        return {
            "content": [{"type": "text", "text": "Error: candidate_name is empty"}],
            "isError": True,
        }

    score: float = args.get("score", 0.0)
    if not isinstance(score, (int, float)):
        return {
            "content": [{"type": "text", "text": f"Error: score must be a number, got {type(score).__name__}"}],
            "isError": True,
        }
    if score < 0.0 or score > 1.0:
        return {
            "content": [
                {
                    "type": "text",
                    "text": f"Error: score must be between 0.0 and 1.0, got {score}",
                }
            ],
            "isError": True,
        }

    role: str = args.get("role", "").strip()
    if not role:
        return {
            "content": [{"type": "text", "text": "Error: role is empty"}],
            "isError": True,
        }

    summary: str = args.get("cv_summary", "No summary provided")

    # --- Business logic ---
    if score >= 0.8:
        recommendation: str = "Strong Match: proceed to interview"
    elif score >= 0.5:
        recommendation = "Partial Match: review with hiring manager"
    else:
        recommendation = "Weak Match: archive unless role requirements change"

    brief: str = (
        f"CANDIDATE BRIEF\n"
        f"===============\n"
        f"Candidate: {name}\n"
        f"Role: {role}\n"
        f"Match Score: {score:.0%}\n"
        f"Recommendation: {recommendation}\n\n"
        f"Summary:\n{summary}"
    )

    return {"content": [{"type": "text", "text": brief}]}
```

Notice the `"isError": True` flag in the return dictionaries. When the SDK sees this flag, it tells the agent that the tool call failed. The agent can then retry with corrected inputs or report the error to the user. Without this flag, the agent treats error text as successful output and keeps going.

## The isError Contract

The response format has two valid shapes:

```python
# Success: agent treats the text as tool output
{"content": [{"type": "text", "text": "...result..."}]}

# Failure: agent knows the call failed and can retry or report
{"content": [{"type": "text", "text": "Error: ...details..."}], "isError": True}
```

Three rules for error responses. First, always include a human-readable error message that explains what was wrong. The agent reads this message to decide its next action. Second, be specific: "score must be between 0.0 and 1.0, got -0.5" is better than "invalid input." Third, never raise Python exceptions from tool functions. An unhandled exception crashes the tool server. Use `isError` instead.

## The God Tool Anti-Pattern

James looked at his two tools and had an idea. "Why not combine them? One tool that takes a CV, parses it, scores it, checks visa eligibility, and formats the brief. One call instead of four."

Emma considered this. "What would the input schema look like?"

```python
# James's proposed "do_everything" tool
@tool(
    "process_candidate",
    "Parse CV, score candidate, check visa, and format brief",
    {
        "cv_text": str,
        "required_skills": list,
        "job_locations": list,
        "remote_allowed": bool,
        "role": str,
    },
)
async def process_candidate(args: dict[str, Any]) -> dict[str, Any]:
    # 80 lines of parsing, scoring, location checking, formatting...
    pass
```

"That is what I call a God Tool," Emma said. "One tool that does everything. Three problems."

James leaned forward. "What problems? It is fewer tool calls."

"First: the agent cannot use parts independently. If the orchestrator only needs to parse a CV without scoring, it has to call `process_candidate` anyway, then ignore the extra output. That wastes tokens and compute."

"Okay, but in the full pipeline you always need all four steps."

"Second: when something breaks, you cannot tell which step failed. If the tool returns an error, was it the parsing? The scoring? The visa check? With separate tools, the agent sees exactly which step failed and can retry just that step."

James paused. "Wait, so basically... the agent is smarter with smaller tools?"

"Third: tool descriptions guide the agent's planning. A description like 'Parse CV, score candidate, check visa, and format brief' tells the agent nothing about when to use this tool versus another. Compare that to four clear descriptions: 'Parse raw CV text into structured data,' 'Score candidate against requirements,' 'Check visa eligibility,' and 'Format candidate brief for hiring manager.' Each description is specific enough that the agent can plan a sequence."

"So what is the right granularity?"

"One responsibility per tool. Each tool does one thing, takes the minimum required input, and returns a focused output. The agent handles orchestration. That is what agents are good at."

## The Granularity Spectrum

Tool design sits on a spectrum:

| Too Granular | Right-Sized | Too Coarse (God Tool) |
|---|---|---|
| `extract_name_from_cv` | `parse_cv` | `process_candidate` |
| `extract_email_from_cv` | `score_candidate` | |
| `extract_skills_from_cv` | `check_visa_eligibility` | |
| `extract_experience_from_cv` | `format_candidate_brief` | |

Too granular means the agent needs four tool calls to extract basic CV data. The agent must know the exact sequence and combine partial results. Too coarse means the agent loses the ability to use steps independently. The right size is one complete business operation per tool.

## Complete Working Example

Here is the full file with both tools, validation, and server registration:

```python
# File: hireflow/tools/candidate_tools.py
from typing import Any

from claude_agent_sdk import (
    ClaudeAgentOptions,
    create_sdk_mcp_server,
    query,
    tool,
    TextBlock,
)
import asyncio


@tool(
    "format_candidate_brief",
    "Format parsed CV data and match score into a hiring manager brief",
    {
        "candidate_name": str,
        "cv_summary": str,
        "score": float,
        "role": str,
    },
)
async def format_candidate_brief(args: dict[str, Any]) -> dict[str, Any]:
    """Create a structured brief for the hiring manager."""
    name: str = args.get("candidate_name", "").strip()
    if not name:
        return {
            "content": [{"type": "text", "text": "Error: candidate_name is empty"}],
            "isError": True,
        }

    score: float = args.get("score", 0.0)
    if not isinstance(score, (int, float)) or score < 0.0 or score > 1.0:
        return {
            "content": [
                {"type": "text", "text": f"Error: score must be 0.0-1.0, got {score}"}
            ],
            "isError": True,
        }

    role: str = args.get("role", "").strip()
    if not role:
        return {
            "content": [{"type": "text", "text": "Error: role is empty"}],
            "isError": True,
        }

    summary: str = args.get("cv_summary", "No summary provided")

    if score >= 0.8:
        recommendation: str = "Strong Match: proceed to interview"
    elif score >= 0.5:
        recommendation = "Partial Match: review with hiring manager"
    else:
        recommendation = "Weak Match: archive unless role requirements change"

    brief: str = (
        f"CANDIDATE BRIEF\n"
        f"===============\n"
        f"Candidate: {name}\n"
        f"Role: {role}\n"
        f"Match Score: {score:.0%}\n"
        f"Recommendation: {recommendation}\n\n"
        f"Summary:\n{summary}"
    )
    return {"content": [{"type": "text", "text": brief}]}


@tool(
    "check_visa_eligibility",
    "Check if a candidate's location meets the job's location requirements",
    {
        "candidate_location": str,
        "job_locations": list,
        "remote_allowed": bool,
    },
)
async def check_visa_eligibility(args: dict[str, Any]) -> dict[str, Any]:
    """Determine if the candidate is eligible based on location."""
    candidate_loc: str = args.get("candidate_location", "").strip().lower()
    if not candidate_loc:
        return {
            "content": [
                {"type": "text", "text": "Error: candidate_location is empty"}
            ],
            "isError": True,
        }

    job_locations: list[str] = [
        loc.lower().strip() for loc in args.get("job_locations", [])
    ]
    if not job_locations:
        return {
            "content": [{"type": "text", "text": "Error: job_locations is empty"}],
            "isError": True,
        }

    remote: bool = args.get("remote_allowed", False)

    if remote:
        return {
            "content": [
                {
                    "type": "text",
                    "text": (
                        f"ELIGIBLE: Role allows remote work. "
                        f"Candidate location ({candidate_loc}) accepted."
                    ),
                }
            ]
        }

    if candidate_loc in job_locations:
        return {
            "content": [
                {
                    "type": "text",
                    "text": (
                        f"ELIGIBLE: Candidate in {candidate_loc} "
                        f"matches requirement."
                    ),
                }
            ]
        }

    return {
        "content": [
            {
                "type": "text",
                "text": (
                    f"NOT ELIGIBLE: Candidate in {candidate_loc}. "
                    f"Required: {', '.join(job_locations)}. No remote."
                ),
            }
        ]
    }


# Bundle and register
hiring_tools_server = create_sdk_mcp_server(
    "hiring_tools", "1.0.0", [format_candidate_brief, check_visa_eligibility]
)


async def main() -> None:
    options = ClaudeAgentOptions(
        mcp_servers={"hiring_tools": hiring_tools_server},
        allowed_tools=[
            "mcp__hiring_tools__format_candidate_brief",
            "mcp__hiring_tools__check_visa_eligibility",
        ],
    )

    prompt: str = (
        "I have a candidate named Maria Garcia from Berlin. "
        "Her CV summary: 5 years Python/Django, led team of 6. "
        "Score: 0.75. Role: Senior Backend Engineer in London or Berlin. "
        "Remote not allowed. Format a brief and check her visa eligibility."
    )

    async for message in query(prompt, options):
        if message.type == "assistant":
            for block in message.message.content:
                if isinstance(block, TextBlock):
                    print(block.text)


asyncio.run(main())
```

## Investigation Exercise

Build a third tool called `rank_candidates` that takes a list of candidate briefs (each with name and score) and returns them sorted by score, highest first. Include validation:

1. The list must not be empty.
2. Each entry must have both `"name"` (non-empty string) and `"score"` (float between 0.0 and 1.0).
3. Return `isError` for any validation failure with a specific message.

After building the tool, register it alongside the existing tools. Run the agent and confirm it can call all three tools in sequence: format a brief, check eligibility, then rank.

:::tip Key Takeaway
The `@tool` decorator defines what the agent can do. Input validation defines what the agent cannot do. The `isError` flag is how tools communicate failures back to the agent. Design one responsibility per tool, and let the agent handle orchestration.
:::
