---
sidebar_position: 4
title: "Building Your First MCP Server"
description: "Build a HireFlow MCP server with FastMCP, trace request lifecycles, investigate edge cases, and identify a planted logic bug"
chapter: 69
lesson: 4
duration_minutes: 45
keywords:
  [
    FastMCP,
    mcp-server,
    tools-decorator,
    stdio-transport,
    streamable-http,
    request-lifecycle,
    hireflow,
  ]
skills:
  - name: "MCP Server Construction"
    proficiency_level: "A2"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Create a working FastMCP server with one tool and run it using stdio transport"
  - name: "Request Lifecycle Tracing"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Trace the full path of a tools/list and tools/call request through the MCP protocol stack"
  - name: "Bug Identification in Agent Tools"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "5.1 Solving technical problems"
    measurable_at_this_level: "Identify a logic error in a tool's scoring algorithm and explain why it produces incorrect results"
learning_objectives:
  - objective: "Build and run a FastMCP server with at least one tool using verified API patterns"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Working server that responds to tools/list and tools/call requests"
  - objective: "Trace the request path from client to server and back for both discovery and execution requests"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Completed trace table with correct inputs, outputs, and protocol messages at each step"
  - objective: "Identify and classify a logic error in a tool implementation using the Error Taxonomy"
    proficiency_level: "A2"
    bloom_level: "Analyze"
    assessment_method: "Correct classification of the planted bug and written explanation of the fix"
cognitive_load:
  new_concepts: 4
  assessment: "FastMCP constructor, @mcp.tool() decorator, mcp.run() with transport parameter, request lifecycle tracing. All four are tightly coupled (each builds on the previous), which reduces extraneous load."
differentiation:
  extension_for_advanced: "Investigate what happens when you define two tools with the same name. How does FastMCP handle the collision?"
  remedial_for_struggling: "Focus on getting the basic server running first. Skip the transport investigation until the single-tool server works."
---

# Building Your First MCP Server

In the previous lessons, you studied MCP's architecture and three primitives from the outside: protocol messages, JSON-RPC structure, control models. Now you go inside. This lesson puts you in the driver's seat: you will build a working MCP server, run it, and trace exactly what happens when a request arrives.

## Project Setup

Before writing server code, set up a project with the MCP SDK:

```bash
cd hireflow
uv add "mcp[cli]"
```

This installs both the Python SDK and the `mcp` CLI (which gives you `mcp dev` for the Inspector in Lesson 8). Verify the install:

```bash
uv run python -c "from mcp.server.fastmcp import FastMCP; print('MCP SDK ready')"
```

## James's First Server

In Chapter 67, you wrote four agent skills for HireFlow. In Chapter 68, you validated them through simulation. Those skills define _what_ each FTE agent knows. But skills alone cannot access databases, parse files, or call APIs. They need a protocol layer. That is what you are building now.

James has been sketching HireFlow's architecture on a whiteboard all morning. He finally sits down to write code.

> **James:** "I've been thinking about this like opening a new branch office. You need a name on the door, services you offer, and a way for people to walk in. Let me translate that to MCP."

```python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("HireFlow")

@mcp.tool()
def list_candidates(department: str) -> list[dict]:
    """List all candidates for a department"""
    candidates = [
        {"name": "Alice Chen", "department": "Engineering", "score": 87},
        {"name": "Bob Patel", "department": "Engineering", "score": 72},
        {"name": "Carol Davis", "department": "Marketing", "score": 91},
    ]
    return [c for c in candidates if c["department"] == department]

if __name__ == "__main__":
    mcp.run(transport="stdio")
```

> **James:** "Three lines to set up, one decorator, one function, one line to run it. That's... surprisingly little ceremony."

> **Emma:** "What does each line actually do?"

> **James:** "Well, the import gets FastMCP, we create a server named HireFlow, the decorator registers the function as a tool, and `mcp.run()` starts listening. Like plugging in a phone and waiting for calls."

> **Emma:** "Close. But what format are those calls in?"

> **James:** "JSON-RPC. We covered that in lesson 2."

> **Emma:** "Good. So when a client connects, what is the first thing it sends?"

> **James:** "A `tools/list` request to find out what's available?"

> **Emma:** "Exactly. And how does FastMCP know to include `list_candidates` in that response?"

> **James:** "Because of the `@mcp.tool()` decorator. It registers the function."

> **Emma:** "Right. The decorator does three things: it registers the function name as the tool name, it extracts the docstring as the description, and it converts the type annotations into a JSON Schema for `inputSchema`. All automatic."

Let's break down the key components:

| Component   | Code                                     | Purpose                                        |
| ----------- | ---------------------------------------- | ---------------------------------------------- |
| Import      | `from mcp.server.fastmcp import FastMCP` | Load the high-level server framework           |
| Constructor | `mcp = FastMCP("HireFlow")`              | Create a named server instance                 |
| Decorator   | `@mcp.tool()`                            | Register a function as an MCP tool             |
| Type hints  | `department: str` and `-> list[dict]`    | Define the tool's input schema and return type |
| Docstring   | `"""List all candidates..."""`           | Becomes the tool's description in discovery    |
| Runner      | `mcp.run(transport="stdio")`             | Start the server on stdio transport            |

## Investigation 1: Trace the Request Path

Before reading the trace below, attempt this yourself.

:::danger AI-FREE ZONE
Trace what happens when a client sends these two requests to James's server. Write out each step: what message arrives, what the server does, and what message goes back.

1. `tools/list` (discovery)
2. `tools/call` with `{"name": "list_candidates", "arguments": {"department": "Engineering"}}`

Do this on paper or in a text editor. No AI assistance.
:::

**Now compare your trace with this one:**

### Request 1: `tools/list` (Discovery)

| Step | Action                         | Input                                                 | Output                                                                                                                                                                                                                                                    | Notes                                                                          |
| ---- | ------------------------------ | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 1    | Client sends JSON-RPC request  | `{"jsonrpc": "2.0", "id": 1, "method": "tools/list"}` | (sent over stdio)                                                                                                                                                                                                                                         | Standard discovery request                                                     |
| 2    | FastMCP receives and routes    | Method: `tools/list`                                  | Scans registered tools                                                                                                                                                                                                                                    | The `@mcp.tool()` decorator registered `list_candidates` during server startup |
| 3    | FastMCP builds tool schema     | Function signature + docstring                        | JSON Schema object                                                                                                                                                                                                                                        | `department: str` becomes `{"type": "string"}` in `inputSchema`                |
| 4    | Server sends JSON-RPC response | (internal schema)                                     | `{"jsonrpc": "2.0", "id": 1, "result": {"tools": [{"name": "list_candidates", "description": "List all candidates for a department", "inputSchema": {"type": "object", "properties": {"department": {"type": "string"}}, "required": ["department"]}}]}}` | Client now knows what tools exist and how to call them                         |

### Request 2: `tools/call` (Execution)

| Step | Action                         | Input                                                                                                                                    | Output                                                                                                                     | Notes                                                  |
| ---- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 1    | Client sends JSON-RPC request  | `{"jsonrpc": "2.0", "id": 2, "method": "tools/call", "params": {"name": "list_candidates", "arguments": {"department": "Engineering"}}}` | (sent over stdio)                                                                                                          | Includes tool name and arguments                       |
| 2    | FastMCP receives and routes    | Method: `tools/call`, tool name: `list_candidates`                                                                                       | Looks up registered function                                                                                               | Matches decorator-registered name to Python function   |
| 3    | FastMCP validates arguments    | `{"department": "Engineering"}`                                                                                                          | Passes validation                                                                                                          | Checks against the JSON Schema derived from type hints |
| 4    | FastMCP calls the function     | `list_candidates(department="Engineering")`                                                                                              | `[{"name": "Alice Chen", ...}, {"name": "Bob Patel", ...}]`                                                                | The actual Python function executes                    |
| 5    | FastMCP serializes response    | Python list of dicts                                                                                                                     | JSON content array                                                                                                         | Wraps return value in MCP content format               |
| 6    | Server sends JSON-RPC response | (serialized content)                                                                                                                     | `{"jsonrpc": "2.0", "id": 2, "result": {"content": [{"type": "text", "text": "[{\"name\": \"Alice Chen\", ...}, ...]"}]}}` | Client receives the filtered candidate list            |

> **James:** "Wait, so the function's return value gets wrapped in a `content` array with a `type` field? It doesn't just return raw JSON?"

> **Emma:** "Correct. MCP's response format always uses content blocks. Your `list[dict]` gets serialized to a text content block. The protocol is consistent regardless of what your function returns."

> **James:** "That's like how every package goes through the mailroom, no matter what's inside."

## Investigation 2: Edge Cases

:::warning STOP AND PREDICT
Before reading further, predict what happens in each of these cases. Write your predictions down.

1. What does `list_candidates("")` return? (empty string for department)
2. What does `list_candidates("Finance")` return? (no matching candidates)
3. What if you call a tool name that doesn't exist?

Record your confidence (1-5): 1 = no idea, 2 = guessing, 3 = think I know, 4 = fairly sure, 5 = certain.
:::

**Case 1: Empty string**

```python
list_candidates("")  # Returns: []
```

The list comprehension filters for `c["department"] == ""`. No candidate has an empty department, so the result is an empty list. This is technically correct behavior, but is it _useful_? An empty string probably means the caller made a mistake. James's code silently returns nothing instead of signaling the problem.

**Case 2: Non-matching department**

```python
list_candidates("Finance")  # Returns: []
```

Same result: an empty list. The caller cannot distinguish between "no candidates in Finance" and "Finance isn't a real department." Both cases look identical.

> **Emma:** "See the problem?"

> **James:** "They both return empty lists. The caller has no idea why it's empty."

> **Emma:** "What would you do in a real system?"

> **James:** "Validate the department against a known list? Return an error if it's not recognized?"

> **Emma:** "That's one approach. Another is to include metadata in the response: `{'candidates': [], 'department_valid': True}` vs `{'candidates': [], 'department_valid': False}`. The caller can then decide what to do."

**Case 3: Non-existent tool**

If the client sends `tools/call` with `{"name": "nonexistent_tool"}`, the server returns a JSON-RPC error response:

```json
{
  "jsonrpc": "2.0",
  "id": 3,
  "error": {
    "code": -32601,
    "message": "Method not found"
  }
}
```

The MCP protocol handles this at the framework level. You do not need to write error handling for missing tools; FastMCP does it for you.

## Investigation 3: Transport Modes

James's server uses `mcp.run(transport="stdio")`. But MCP supports more than one transport.

```python
# Option 1: stdio (for local processes, Claude Code, Claude Desktop)
mcp.run(transport="stdio")

# Option 2: Streamable HTTP (for networked access, development servers)
mcp.run(transport="streamable-http")

# Option 3: Streamable HTTP with specific host and port
mcp.run(transport="streamable-http", host="127.0.0.1", port=8000)
```

| Transport         | How it works                                                                     | Best for                                                            |
| ----------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `stdio`           | Server reads from stdin, writes to stdout. Parent process manages the lifecycle. | Local tools, Claude Code, Claude Desktop. Low overhead, no network. |
| `streamable-http` | Server runs as an HTTP endpoint. Clients connect over the network.               | Development, remote access, multiple clients.                       |

> **James:** "So stdio is like an intercom between two rooms in the same building, and streamable-http is like a phone line anyone can call?"

> **Emma:** "That's a reasonable analogy. What's the security implication?"

> **James:** "With stdio, only the parent process can talk to you. With HTTP, anyone who knows your address can try."

> **Emma:** "Which is why stdio is the default for production MCP servers in Claude Code. The host application launches the server as a child process and communicates directly through pipes. No network exposure."

:::tip KEY INSIGHT
The transport choice does not change your tool code at all. The same `@mcp.tool()` function works identically whether the server runs on stdio or streamable-http. Transport is a deployment decision, not an implementation decision.
:::

## Investigation 4: AI-Assisted Lifecycle Trace

For this investigation, you will use an AI assistant to go deeper than the trace table.

> **Task:** Open Claude Code (or your preferred AI assistant) and give it this prompt:
>
> _"I have a FastMCP server with a tool called `list_candidates` that takes a `department: str` parameter. Trace the full request lifecycle for a `tools/call` request, starting from when the JSON-RPC message arrives over stdio, through FastMCP's internal routing, argument validation against the generated JSON Schema, function invocation, return value serialization, and response formatting. Include what happens at each layer."_

Compare the AI's response with the trace table from Investigation 1. Look for:

- Steps you missed in your manual trace
- Details about JSON Schema validation that the table simplified
- How FastMCP converts Python type hints to JSON Schema properties

> **Emma:** "The point of this exercise is not to get the 'right answer' from the AI. It's to compare two representations of the same process: your trace table and the AI's narrative. Where they diverge, you learn something."

## The Planted Bug: James's Scoring Tool

James is feeling confident after getting `list_candidates` working. He adds a second tool:

```python
@mcp.tool()
def score_candidate(name: str, years_experience: int) -> dict:
    """Score a candidate based on experience"""
    score = years_experience * 10  # James's scoring formula
    return {"name": name, "score": score, "recommendation": "hire" if score > 70 else "reject"}
```

> **James:** "Straightforward. More experience, higher score. Ten points per year."

:::warning STOP AND PREDICT
Before reading Emma's analysis, find the problems with this scoring function. There are at least three. Write them down.

Test cases to consider:

- `score_candidate("Alice", 3)` (junior, 3 years)
- `score_candidate("Bob", 8)` (senior, 8 years)
- `score_candidate("Carol", 25)` (veteran, 25 years)
- `score_candidate("Dave", 0)` (fresh graduate)
- `score_candidate("Eve", -2)` (invalid input)

Record your confidence (1-5): 1 = no idea, 2 = guessing, 3 = think I know, 4 = fairly sure, 5 = certain.
:::

Let's trace through the test cases:

| Input | years_experience | score | recommendation | Problem?                                            |
| ----- | ---------------- | ----- | -------------- | --------------------------------------------------- |
| Alice | 3                | 30    | reject         | 3 years is junior but capable; auto-reject is harsh |
| Bob   | 8                | 80    | hire           | Seems reasonable for this case                      |
| Carol | 25               | 250   | hire           | Score of 250 on what scale? No ceiling.             |
| Dave  | 0                | 0     | reject         | Fresh graduates can be excellent hires              |
| Eve   | -2               | -20   | reject         | Negative years? No input validation.                |

> **Emma:** "How many problems did you find?"

> **James:** "At least three. No cap on the score, so 25 years gives you 250. No validation for negative numbers. And the formula is purely linear; it doesn't account for anything besides years."

> **Emma:** "Four problems, actually. You missed the threshold. Why is 70 the hire/reject boundary?"

> **James:** "I... picked a number."

> **Emma:** "A number that means exactly 7 years of experience is the cutoff. Someone with 6 years and brilliant skills gets rejected. Someone with 8 years and no relevant skills gets hired."

> **James:** "OK, that's a terrible scoring system."

> **Emma:** "It's a common pattern, though. Linear scoring with a magic threshold. I've seen production systems with exactly this logic."

:::info ERROR TAXONOMY
**Classification: Logic Error**

The code runs without exceptions. It produces output for every input. But the _logic_ is fundamentally flawed:

1. **No ceiling**: Scores grow unboundedly, making comparison meaningless
2. **No floor**: Negative inputs produce negative scores
3. **Single factor**: Experience is the only input; skills, education, and role fit are ignored
4. **Arbitrary threshold**: The 70-point boundary has no empirical basis

This is not a syntax error (the code runs fine) or a data error (the inputs are processed correctly). It is a logic error: the algorithm does not model the domain it claims to represent.
:::

## Emma's Corrected Version

> **Emma:** "Here's how I'd fix it. Not perfect, but addresses the four problems."

```python
@mcp.tool()
def score_candidate(
    name: str,
    years_experience: int,
    skill_match_percent: int,
    education_level: str
) -> dict:
    """Score a candidate based on multiple factors with bounded output"""
    if years_experience < 0:
        return {"name": name, "error": "years_experience cannot be negative"}
    if not 0 <= skill_match_percent <= 100:
        return {"name": name, "error": "skill_match_percent must be 0-100"}

    # Experience: diminishing returns, capped at 40 points
    exp_score = min(years_experience * 5, 40)

    # Skills: direct percentage, scaled to 40 points
    skill_score = (skill_match_percent / 100) * 40

    # Education: fixed bonus, max 20 points
    edu_scores = {"phd": 20, "masters": 15, "bachelors": 10, "other": 5}
    edu_score = edu_scores.get(education_level.lower(), 5)

    total = exp_score + skill_score + edu_score

    if total >= 75:
        recommendation = "strong_hire"
    elif total >= 55:
        recommendation = "hire"
    elif total >= 35:
        recommendation = "maybe"
    else:
        recommendation = "reject"

    return {
        "name": name,
        "score": round(total, 1),
        "breakdown": {
            "experience": exp_score,
            "skills": skill_score,
            "education": edu_score
        },
        "recommendation": recommendation
    }
```

> **James:** "OK, that's way more complex. But I see why. Diminishing returns on experience means 25 years and 8 years don't have a massive gap. Multiple factors. Bounded total. And the breakdown tells the caller _why_ someone scored the way they did."

> **Emma:** "Which matters more: the final score or the breakdown?"

> **James:** "...the breakdown? Because a hiring manager wants to know 'great skills but low experience' versus 'lots of experience but wrong skills.'"

> **Emma:** "Exactly. The breakdown is the real value. The score is a convenience."

## The Full Server So Far

Here is the complete HireFlow server after this lesson:

```python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("HireFlow")

@mcp.tool()
def list_candidates(department: str) -> list[dict]:
    """List all candidates for a department"""
    candidates = [
        {"name": "Alice Chen", "department": "Engineering", "score": 87},
        {"name": "Bob Patel", "department": "Engineering", "score": 72},
        {"name": "Carol Davis", "department": "Marketing", "score": 91},
    ]
    return [c for c in candidates if c["department"] == department]

@mcp.tool()
def score_candidate(
    name: str,
    years_experience: int,
    skill_match_percent: int,
    education_level: str
) -> dict:
    """Score a candidate based on multiple factors with bounded output"""
    if years_experience < 0:
        return {"name": name, "error": "years_experience cannot be negative"}
    if not 0 <= skill_match_percent <= 100:
        return {"name": name, "error": "skill_match_percent must be 0-100"}

    exp_score = min(years_experience * 5, 40)
    skill_score = (skill_match_percent / 100) * 40
    edu_scores = {"phd": 20, "masters": 15, "bachelors": 10, "other": 5}
    edu_score = edu_scores.get(education_level.lower(), 5)

    total = exp_score + skill_score + edu_score

    if total >= 75:
        recommendation = "strong_hire"
    elif total >= 55:
        recommendation = "hire"
    elif total >= 35:
        recommendation = "maybe"
    else:
        recommendation = "reject"

    return {
        "name": name,
        "score": round(total, 1),
        "breakdown": {
            "experience": exp_score,
            "skills": skill_score,
            "education": edu_score
        },
        "recommendation": recommendation
    }

if __name__ == "__main__":
    mcp.run(transport="stdio")
```

## Running and Testing Your Server

To test this server locally, you can use the MCP Inspector:

```bash
mcp dev server.py
```

This launches a browser-based interface where you can:

1. See your registered tools (should show `list_candidates` and `score_candidate`)
2. Send `tools/call` requests with custom arguments
3. Inspect the JSON-RPC messages flowing in both directions

Alternatively, configure Claude Code to use your server by adding it to your MCP configuration:

```json
{
  "mcpServers": {
    "hireflow": {
      "command": "python",
      "args": ["server.py"],
      "env": {}
    }
  }
}
```

With this configuration, Claude Code launches your server as a child process using stdio transport. When you ask Claude a question about candidates, it can discover and call your `list_candidates` and `score_candidate` tools.

## What You Built

This lesson took you from reading about MCP to building a working server. You:

1. Created a FastMCP server with the `FastMCP("HireFlow")` constructor
2. Registered a tool using the `@mcp.tool()` decorator
3. Traced the full request lifecycle for both `tools/list` and `tools/call`
4. Investigated edge cases (empty strings, non-matching departments, missing tools)
5. Compared stdio and streamable-http transports
6. Found and classified a logic error in a scoring tool
7. Saw how a multi-factor scoring function addresses the flaws

In the next lesson, you will add resources and prompts to this server, completing the three primitives.

> **James:** "We went from a whiteboard sketch to a running server in one lesson. I expected more boilerplate."

> **Emma:** "That's the point of FastMCP. The framework handles the protocol; you write domain logic. But as we saw with your scoring function, the domain logic is where the real bugs live."

> **James:** "Fair point. The protocol part was easy. The 'does this tool actually make good decisions' part is the hard problem."

> **Emma:** "Welcome to agent development."
