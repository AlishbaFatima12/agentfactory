---
sidebar_position: 6
title: "Parsons Bridge"
description: "Reconstruct the correct order of 8 lines to build a working skill function that connects to an MCP server, calls parse_cv with error handling, and returns structured data"
chapter: 71
lesson: 6
duration_minutes: 15
keywords:
  [
    Parsons problem,
    code ordering,
    MCP client,
    skill-tool wiring,
    tool call guard,
  ]

skills:
  - name: "Reconstructing MCP Client Code Structure"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "3. Digital Content Creation"
    measurable_at_this_level: "Student can order code lines to form a valid async function that connects to an MCP server, calls a tool with error handling, and returns structured output"

learning_objectives:
  - objective: "Arrange 8 scrambled code lines into a working MCP client function with correct nesting of async context managers, tool call, guard check, and return statement"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Correctly ordered code with proper indentation that would pass ruff and pyright checks"

cognitive_load:
  new_concepts: 0
  assessment: "No new concepts. This exercise reinforces the MCP client connection pattern (Lessons 2-4) and tool call guard pattern (Lesson 4). The Parsons format tests structural understanding without introducing new material."

differentiation:
  extension_for_advanced: "After solving, add a second tool call (score_candidate) with its own guard, maintaining the correct nesting and indentation"
  remedial_for_struggling: "Group the lines into four categories first (setup, connection, tool call, result handling) before ordering within each group"
---

# Parsons Bridge

You have read, traced, and debugged MCP client code across Lessons 2 through 5. Now test whether you can reconstruct a skill function from scrambled parts.

Below are 8 lines of code plus 1 distractor. The 8 correct lines form an async function that connects to an MCP server, calls `parse_cv`, checks for errors, and returns structured data. The distractor is valid Python but unnecessary for this function.

**Your task:**

1. Identify the 1 distractor line
2. Arrange the remaining 8 lines in the correct order
3. Apply the correct indentation (nesting depth matters)

## Scrambled Lines

```
A: cv_data = parsed.content[0].text

B: async with ClientSession(read, write) as session:

C: return {"error": "Parse failed", "cv": None}

D: server_params = StdioServerParameters(command="uv", args=["run", "server.py"])

E: parsed = await session.call_tool("parse_cv", {"cv_text": cv_text})

F: await session.initialize()

G: async with stdio_client(server_params) as (read, write):

H: tools = await session.list_tools()

I: if parsed.isError or not parsed.content:
```

:::warning STOP AND PREDICT [AI-FREE]
Do not scroll down. Do not ask your AI assistant.

1. Which line is the distractor?
2. Write the 8 remaining lines in order, with indentation.
3. Record your confidence (1-5).
   :::

## Solution

**Distractor: Line H** (`tools = await session.list_tools()`)

This line is valid MCP client code. It retrieves the list of tools the server exposes. But this function already knows which tool it needs: `parse_cv`. Listing tools is useful for discovery (when you do not know what a server offers), but unnecessary when the skill has a fixed contract with a known tool. Including it would add a wasted round trip to every function call.

**Correct order with indentation:**

```python
# Line D: create server connection parameters
server_params = StdioServerParameters(command="uv", args=["run", "server.py"])

# Line G: open transport to the server (outer context manager)
async with stdio_client(server_params) as (read, write):

    # Line B: create a session over the transport (inner context manager)
    async with ClientSession(read, write) as session:

        # Line F: initialize the MCP protocol handshake
        await session.initialize()

        # Line E: call the parse_cv tool
        parsed = await session.call_tool("parse_cv", {"cv_text": cv_text})

        # Line I: guard check for errors before accessing content
        if parsed.isError or not parsed.content:

            # Line C: return error result (early exit)
            return {"error": "Parse failed", "cv": None}

        # Line A: extract the text content from successful result
        cv_data = parsed.content[0].text
```

The function would also need a final `return {"cv": cv_data}` after line A, but that line was not included in the scrambled set. The 8 lines above cover the connection, call, guard, and extraction pattern.

## Why This Order

**1. Server parameters first (D)**

`StdioServerParameters` defines how to reach the server. This must exist before `stdio_client` can use it. No network connection happens yet; this is configuration only.

**2. Transport, then session (G, B)**

The two `async with` blocks nest in a specific order. `stdio_client` opens the raw transport (read/write streams). `ClientSession` wraps those streams in the MCP protocol layer. You cannot create a session without a transport, so G must come before B.

**3. Initialize before calling (F before E)**

`session.initialize()` performs the MCP protocol handshake: the client and server agree on protocol version and capabilities. Calling a tool before initialization would fail because the server has not confirmed it is ready.

**4. Call, then guard, then access (E, I, C, A)**

This is the tool call guard pattern from Lesson 4. Call the tool (E), check for errors (I), handle the failure case (C), then access the content only after confirming success (A). If you put A before I, you have written the same bug James had.

## Common Mistakes

**Putting B before G**: The session needs a transport. `ClientSession(read, write)` requires the `read` and `write` variables that `stdio_client` provides. Without the outer context manager, those variables do not exist.

**Putting A before I**: This is James's bug from Lesson 4. Accessing `parsed.content[0]` without checking `isError` or empty content first will crash on failed tool calls. The guard (I) must come before the access (A).

**Including H**: `list_tools()` is not wrong, but it is unnecessary when the skill already knows which tool to call. Every unnecessary network round trip adds latency. In a batch of 200 candidates, that is 200 wasted requests.

**Putting F after E**: The initialize handshake must complete before any tool calls. Without it, the session is not ready and `call_tool` will fail.
