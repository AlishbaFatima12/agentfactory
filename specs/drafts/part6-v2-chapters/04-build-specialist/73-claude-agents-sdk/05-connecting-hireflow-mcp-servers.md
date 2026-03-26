---
sidebar_position: 5
title: "Connecting HireFlow MCP Servers"
description: "Connect the MCP servers built in Chapters 69-70 to the Claude Agent SDK using in-process and external transport patterns, and learn the mcp__server__tool naming convention"
chapter: 73
lesson: 5
duration_minutes: 35
keywords:
  [
    MCP integration,
    mcp_servers,
    in-process server,
    external transport,
    stdio,
    allowed_tools,
    tool naming,
    HireFlow,
  ]

skills:
  - name: "Connecting MCP Servers to Agent SDK"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Student can register both in-process and external MCP servers with ClaudeAgentOptions and verify the agent discovers all tools"

  - name: "Understanding MCP Tool Naming Convention"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Student can construct the mcp__servername__toolname identifier for any registered tool and explain why the naming convention matters for allowed_tools"

  - name: "Debugging Tool Discovery Failures"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "5.1 Solving Technical Problems"
    measurable_at_this_level: "Student can diagnose why an agent silently ignores a tool and trace the issue to a naming mismatch in allowed_tools"

learning_objectives:
  - objective: "Register an in-process MCP server with ClaudeAgentOptions using the mcp_servers parameter"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Working agent that discovers and calls tools from an in-process server"

  - objective: "Construct the mcp__servername__toolname identifier for any tool and use it in allowed_tools"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Correct tool identifiers for all three HireFlow MCP tools"

  - objective: "Diagnose a silent tool discovery failure caused by a misspelled tool name in allowed_tools"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Written explanation of why the agent ignores the misspelled tool and the fix"

cognitive_load:
  new_concepts: 4
  assessment: "Four concepts: mcp_servers parameter, in-process server registration, tool naming convention, allowed_tools filtering. Builds directly on Ch 69-70 MCP servers and Lesson 02-04 SDK foundations."

differentiation:
  extension_for_advanced: "Register two servers simultaneously (hiring + job_templates) and configure an agent that uses tools from both in a single query"
  remedial_for_struggling: "Start with one in-process server and one tool; add the second tool after confirming the first works"
---

# Connecting HireFlow MCP Servers

In Chapters 69 and 70, you built three MCP tools: `parse_cv` extracts structured data from raw CVs, `score_candidate` evaluates a candidate against a job spec, and `job_template` generates standardized job spec templates. Those tools work. You tested them in the MCP Inspector. But they sit idle unless an agent knows they exist.

This lesson connects those servers to the Claude Agent SDK. By the end, your agent will discover your custom tools, call them by name, and combine them with built-in tools like `Read` in a single workflow.

## Quick Recall: Your MCP Inventory

Before connecting anything, confirm what you built. In Chapter 70, you registered `parse_cv` and `score_candidate` in a FastMCP server. What name did you give that server? What parameters does `parse_cv` accept? Write your answers before reading further.

If you still have the code from Chapter 70:

```python
# From Ch 70: hireflow/servers/cv_parser_server.py
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("CV Parser")


@mcp.tool()
def parse_cv(cv_text: str) -> dict[str, object]:
    """Parse a raw CV text into structured candidate data."""
    # ... extraction logic from Ch 70 ...
```

The server name is `"CV Parser"`. The tool name is `parse_cv`. These two pieces matter for what comes next.

## Two Approaches to Connection

The Claude Agent SDK supports two ways to connect MCP servers. Each fits a different situation.

**Approach 1: In-process servers.** You define tools in the same Python file using `@tool` and `create_sdk_mcp_server`. The agent and the tools share a process. This is fast, simple, and works well when all your tools are Python functions.

**Approach 2: External servers via transport.** You connect to MCP servers running as separate processes (the servers you built in Ch 69-70) using stdio or SSE transport. The agent and the tools run in different processes. This is how production systems work: each server can restart independently, scale separately, and crash without taking down the agent.

This lesson covers both approaches. Lesson 06 goes deeper into the `@tool` decorator for approach 1.

## Approach 1: In-Process MCP Server

The `create_sdk_mcp_server` function bundles tools defined with the `@tool` decorator into a server object. You then pass that server to `ClaudeAgentOptions`.

```python
# File: hireflow/agent_with_tools.py
from typing import Any

from claude_agent_sdk import (
    ClaudeAgentOptions,
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
    capturing_skills: bool = False
    for line in lines:
        if line.strip().upper() == "SKILLS":
            capturing_skills = True
            continue
        if capturing_skills and line.strip().isupper() and len(line.strip()) > 2:
            break
        if capturing_skills and line.strip():
            skills.extend(s.strip() for s in line.split(","))
    return {
        "content": [
            {
                "type": "text",
                "text": f"Name: {name}\nSkills: {', '.join(skills)}",
            }
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


# Bundle both tools into one server
hiring_server = create_sdk_mcp_server(
    "hiring", "1.0.0", [parse_cv, score_candidate]
)
```

Two things to notice. First, `create_sdk_mcp_server` takes a server name (`"hiring"`), a version, and a list of tool functions. Second, the server name becomes part of how the agent references each tool. More on that in the next section.

## The Naming Convention: mcp**server**tool

When you register a server named `"hiring"` that contains a tool named `"parse_cv"`, the agent sees that tool as:

```
mcp__hiring__parse_cv
```

The pattern is `mcp__<servername>__<toolname>` with double underscores as separators. This convention prevents name collisions. If you have a `parse_cv` tool in the `"hiring"` server and another `parse_cv` tool in a `"testing"` server, the agent can distinguish them: `mcp__hiring__parse_cv` vs. `mcp__testing__parse_cv`.

You use these full names in `allowed_tools`:

```python
options = ClaudeAgentOptions(
    mcp_servers={
        "hiring": hiring_server,
    },
    allowed_tools=[
        "mcp__hiring__parse_cv",
        "mcp__hiring__score_candidate",
        "Read",  # Built-in tools alongside custom tools
    ],
)
```

The `allowed_tools` list acts as a whitelist. The agent can only use tools that appear in this list. Built-in tools like `Read`, `Write`, and `Bash` use their plain names. Custom MCP tools use the `mcp__` prefix.

## Running the Connected Agent

With the server registered and tools whitelisted, run a query:

```python
import asyncio


async def main() -> None:
    options = ClaudeAgentOptions(
        mcp_servers={"hiring": hiring_server},
        allowed_tools=[
            "mcp__hiring__parse_cv",
            "mcp__hiring__score_candidate",
            "Read",
        ],
    )

    cv_text: str = """Sarah Chen
sarah.chen@email.com

SKILLS
Python, FastAPI, PostgreSQL, Docker

EXPERIENCE
Senior Backend Engineer at DataCorp (2020-2024)
Built microservices handling 10k requests/second
"""

    prompt: str = (
        f"Parse this CV and score the candidate against these required skills: "
        f"Python, FastAPI, Kubernetes, Docker.\n\n{cv_text}"
    )

    async for message in query(prompt, options):
        if message.type == "assistant":
            for block in message.message.content:
                if isinstance(block, TextBlock):
                    print(block.text)


asyncio.run(main())
```

The agent will call `mcp__hiring__parse_cv` first to extract the structured data, then call `mcp__hiring__score_candidate` to calculate the match. You did not tell it which tool to call first. The agent reads the tool descriptions and decides the order.

## The Silent Failure: Misspelled Tool Names

James connected his servers and ran the agent. The agent parsed the CV but never scored the candidate. It produced a summary based solely on the parsed data, ignoring the scoring step entirely.

"The agent is broken," James said. "It is not calling `score_candidate` at all."

Emma looked at his `allowed_tools` list:

```python
allowed_tools=[
    "mcp__hiring__parse_cv",
    "mcp__hiring__score_candidates",  # Bug: "candidates" not "candidate"
    "Read",
],
```

"Read the second entry again," Emma said.

James stared at it. "Wait, so basically... `score_candidates` is not the same as `score_candidate`?"

"The `allowed_tools` list is a strict whitelist. If the name does not match exactly, the agent does not see the tool. It does not raise an error. It does not warn you. It proceeds with whatever tools it can find."

"That is a terrible developer experience."

"It is a security feature. The SDK does not guess what you meant. If a typo could silently grant access to a tool you did not intend, that would be worse." Emma paused. "But I agree the failure is hard to debug. The first thing to check when an agent skips a tool: print your `allowed_tools` list and compare it character by character against the tool registration."

This is the most common integration mistake with MCP servers. The fix is mechanical: verify the server name and tool name match exactly.

## Approach 2: External Servers via Transport

In-process servers are convenient for development. But the MCP servers you built in Chapters 69-70 run as separate processes. You start them with `mcp dev` or `uv run` and they listen over stdio or HTTP. To connect an external server, you specify the transport in the `mcp_servers` dictionary.

For a server running over stdio (the default from Ch 69):

```python
options = ClaudeAgentOptions(
    mcp_servers={
        "hiring": {
            "command": "uv",
            "args": ["run", "python", "hireflow/servers/cv_parser_server.py"],
        },
    },
    allowed_tools=[
        "mcp__hiring__parse_cv",
        "mcp__hiring__score_candidate",
    ],
)
```

The SDK launches the server process, connects over stdio, and discovers the tools automatically. The tool naming convention is the same: `mcp__hiring__parse_cv`. The difference is that the server runs in its own process with its own memory space. If the tool crashes, the agent process survives.

For an SSE (Server-Sent Events) transport, when the server is already running:

```python
options = ClaudeAgentOptions(
    mcp_servers={
        "hiring": {
            "url": "http://localhost:8080/sse",
        },
    },
    allowed_tools=[
        "mcp__hiring__parse_cv",
        "mcp__hiring__score_candidate",
    ],
)
```

The key insight: from the agent's perspective, in-process and external servers look identical. The same `mcp__hiring__parse_cv` identifier works in both cases. The `allowed_tools` list does not change. Only the `mcp_servers` configuration differs.

## Combining Multiple Servers

HireFlow has two servers: the CV parser (with `parse_cv` and `score_candidate`) and the job template server (with `get_template`, `list_templates`, `validate_job_spec`). Register both:

```python
options = ClaudeAgentOptions(
    mcp_servers={
        "hiring": hiring_server,  # In-process
        "templates": {  # External via stdio
            "command": "uv",
            "args": ["run", "python", "hireflow/servers/job_template_server.py"],
        },
    },
    allowed_tools=[
        "mcp__hiring__parse_cv",
        "mcp__hiring__score_candidate",
        "mcp__templates__get_template",
        "mcp__templates__validate_job_spec",
        "Read",
    ],
)
```

Now the agent can pull a template, parse a CV, and score the candidate in a single conversation. Notice that you do not need to include `mcp__templates__list_templates` if the agent should not use that tool. The whitelist gives you fine-grained control.

## The Connection Checklist

Before running an agent with MCP servers, verify these four items:

1. **Server name matches.** The key in `mcp_servers` (e.g., `"hiring"`) must match the first segment of your tool names (e.g., `mcp__hiring__parse_cv`).
2. **Tool name matches.** The third segment (e.g., `parse_cv`) must match the tool's registered name in the MCP server exactly.
3. **All needed tools are whitelisted.** Any tool not in `allowed_tools` is invisible to the agent.
4. **Transport is correct.** In-process servers pass the server object directly. External servers pass a dict with `"command"`/`"args"` (stdio) or `"url"` (SSE).

## Investigation Exercise

Take the CV parser server from Chapter 70 (the full version with `_extract_section` and all three tools). Connect it to an agent using the in-process approach. Then try the external stdio approach with the same server file.

Questions to answer:

1. What tool names appear in `allowed_tools` for the in-process version?
2. If you change the server name from `"hiring"` to `"cv_tools"`, what else must change?
3. What happens if you list `"parse_cv"` in `allowed_tools` without the `mcp__` prefix?

Write your answers, then test each scenario to verify.

:::tip Key Takeaway
The `mcp_servers` parameter bridges everything you built in Chapters 69-70 to the agent SDK. In-process servers are convenient for development. External servers are necessary for production. The naming convention (`mcp__server__tool`) is the same for both.
:::
