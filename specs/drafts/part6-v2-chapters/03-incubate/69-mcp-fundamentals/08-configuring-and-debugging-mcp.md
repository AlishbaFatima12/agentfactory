---
sidebar_position: 8
title: "Configuring and Debugging MCP"
description: "Configure MCP clients with JSON settings, debug servers with the MCP Inspector, and classify errors using JSON-RPC error codes and a systematic decision tree."
chapter: 69
lesson: 8
duration_minutes: 25
keywords:
  [
    mcp configuration,
    mcp inspector,
    mcp debugging,
    json-rpc errors,
    mcpServers,
    environment variables,
    stdio transport,
    error taxonomy,
  ]
skills:
  - name: "MCP Client Configuration"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Write a complete mcpServers JSON configuration block that connects a client to a local MCP server with environment variable interpolation"
  - name: "MCP Debugging with Inspector"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "5.1 Solving technical problems"
    measurable_at_this_level: "Use the MCP Inspector to identify why a registered tool is not responding correctly and trace the JSON-RPC request/response cycle"
  - name: "JSON-RPC Error Classification"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "5.1 Solving technical problems"
    measurable_at_this_level: "Given a JSON-RPC error code, identify the error category and propose a debugging step"
learning_objectives:
  - objective: "Write mcpServers JSON configuration for Claude Code and Claude Desktop with environment variable interpolation"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student writes a configuration file that connects to a local HireFlow MCP server"
  - objective: "Execute the 5-step MCP Inspector debugging workflow to verify tool registration and parameter schemas"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student launches Inspector, lists tools, and tests a tool call against a running server"
  - objective: "Classify MCP errors using JSON-RPC error codes and the Error Taxonomy from this chapter"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Given a scenario, student identifies the error category and applies the debugging decision tree"
cognitive_load:
  new_concepts: 4
  assessment: "Configuration format, environment variable interpolation, Inspector workflow, and JSON-RPC error codes. Configuration format is lightweight (JSON). Inspector workflow is procedural. Error codes build on the JSON-RPC knowledge from Lesson 2. Manageable if students have completed Lessons 4-7."
differentiation:
  extension_for_advanced: "Configure a multi-server setup where Claude Code connects to both a local HireFlow server and a remote GitHub MCP server simultaneously. Test tool routing between them."
  remedial_for_struggling: "Start with the simplest possible configuration: one server, no environment variables, stdio transport. Get that working before adding env vars."
---

# Configuring and Debugging MCP

You have built MCP servers. You have registered tools, resources, and prompts. Now the question becomes: how does a client actually _find_ your server? And when something goes wrong (it will), how do you figure out what broke?

This lesson covers the practical side of MCP: configuration files that connect clients to servers, the Inspector tool that lets you poke at a running server, and a systematic approach to classifying and resolving errors.

## Part A: Client Configuration

### The mcpServers Configuration Block

Every MCP-aware client (Claude Code, Claude Desktop, VS Code with Copilot, Cursor) uses the same JSON structure to discover servers. The format is standardized across clients:

```json
{
  "mcpServers": {
    "hireflow": {
      "command": "uv",
      "args": ["run", "hireflow_server.py"],
      "env": {
        "DATABASE_URL": "${DATABASE_URL}"
      }
    }
  }
}
```

Three fields define a server connection:

| Field     | Purpose                                                | Example                               |
| --------- | ------------------------------------------------------ | ------------------------------------- |
| `command` | The executable that launches the server process        | `"uv"`, `"npx"`, `"python"`           |
| `args`    | Arguments passed to the command                        | `["run", "hireflow_server.py"]`       |
| `env`     | Environment variables injected into the server process | `{"DATABASE_URL": "${DATABASE_URL}"}` |

The key insight: the client does not connect to a running server. It _launches_ the server as a child process using the specified command, communicates over stdio, and kills the process when the session ends. This is why the configuration specifies a command, not a URL.

> **James:** Wait, so basically the client is starting a whole new process every time? That feels wasteful. In HR systems, you keep the database running and connect to it.
>
> **Emma:** Different model. What happens when two clients need different server versions?
>
> **James:** They'd conflict. Oh. So per-client processes give you isolation?
>
> **Emma:** Exactly. Each client gets its own server instance. No shared state, no version conflicts. The tradeoff is startup time, but for stdio servers that launch in milliseconds, it is negligible.

### Where Configuration Files Live

The file location depends on the client:

**Claude Code** uses either of two paths (project-scoped):

```
.claude/settings.json     # Project settings
.mcp.json                 # MCP-specific config (alternative)
```

**Claude Desktop** uses a global configuration file:

```
~/Library/Application Support/Claude/claude_desktop_config.json   # macOS
%APPDATA%\Claude\claude_desktop_config.json                        # Windows
```

Both use the identical `mcpServers` structure. The only difference is scope: Claude Code configurations are per-project (checked into git), while Claude Desktop configurations are per-machine (global).

### Environment Variable Interpolation

Hardcoding secrets into configuration files is a security failure. MCP clients support the `${VAR_NAME}` syntax to reference environment variables at runtime:

```json
{
  "mcpServers": {
    "hireflow": {
      "command": "uv",
      "args": ["run", "hireflow_server.py"],
      "env": {
        "DATABASE_URL": "${DATABASE_URL}",
        "HIREFLOW_API_KEY": "${HIREFLOW_API_KEY}"
      }
    }
  }
}
```

When the client launches the server, it reads `DATABASE_URL` and `HIREFLOW_API_KEY` from the host environment and injects them into the server process. The actual secret values never appear in the configuration file.

:::warning STOP AND PREDICT [AI-FREE]
You are configuring Claude Code to connect to two MCP servers: a HireFlow candidate server (Python, launched with `uv`) and a GitHub server (Node.js, launched with `npx`). The GitHub server needs a `GITHUB_TOKEN` environment variable. Write the complete `mcpServers` JSON block before reading further.

Record your confidence (1-5): 1 = no idea, 2 = guessing, 3 = think I know, 4 = fairly sure, 5 = certain.
:::

Here is one valid configuration:

```json
{
  "mcpServers": {
    "hireflow-candidates": {
      "command": "uv",
      "args": ["run", "candidate_profiles_server.py"],
      "env": {
        "DATABASE_URL": "${DATABASE_URL}"
      }
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "${GITHUB_TOKEN}"
      }
    }
  }
}
```

Each server gets a unique key (`"hireflow-candidates"`, `"github"`). The client launches both as separate child processes and routes tool calls to the appropriate server based on tool names.

### Security: Least Privilege

Three rules for MCP configuration security:

1. **Never hardcode secrets.** Use `${VAR_NAME}` interpolation and store actual values in `.env` files excluded from version control.
2. **Minimize env exposure.** Only pass the environment variables the server actually needs. Do not forward your entire shell environment.
3. **Review server code before connecting.** An MCP server runs as a local process with whatever permissions its command grants. A malicious server launched with `uv run` has access to your filesystem.

> **James:** The third one is the one people will skip, right? You install an npm package and trust it.
>
> **Emma:** What happens if that MCP server has a tool called `delete_all_files`?
>
> **James:** The model could call it. And the server process has filesystem access because you launched it from your terminal.
>
> **Emma:** Right. The protocol gives you structure. It does not give you safety. That is still your job.

## Part B: The MCP Inspector

When a server misbehaves, you need a way to interact with it directly, without an AI model in the loop. The **MCP Inspector** is a browser-based debugging tool that connects to your server and lets you manually call tools, read resources, and inspect prompts.

### Launching the Inspector

For a Python MCP server, use the `mcp dev` command:

```bash
mcp dev hireflow_server.py
```

This starts the server, opens a browser-based Inspector UI, and connects to the server over stdio. You see every registered primitive and can interact with them manually.

For Node.js servers, use the standalone Inspector:

```bash
npx @modelcontextprotocol/inspector /path/to/server.js
```

### The 5-Step Inspector Workflow

When debugging a server, follow this sequence:

**Step 1: Start the server in the Inspector.**
Run `mcp dev your_server.py`. Verify the Inspector UI opens and shows a connected status. If the server fails to start, the issue is in your startup code (imports, syntax errors, transport configuration).

**Step 2: View registered tools, resources, and prompts.**
The Inspector's sidebar lists every primitive the server exposes. Check that the names match what you defined in your decorators. If a tool is missing, the decorator registration failed.

**Step 3: Test a tool call manually.**
Select a tool, fill in the parameter fields, and execute. The Inspector shows the JSON-RPC request it sends and the response it receives. This is the equivalent of making a `tools/call` request by hand.

**Step 4: Check request/response payloads.**
Examine the exact JSON that went over the wire. Common issues show up here: wrong parameter types (string where the schema expects integer), missing required fields, or unexpected response formats.

**Step 5: Verify error responses.**
Deliberately send bad input. Does the server return a proper JSON-RPC error with an appropriate error code? Or does it crash silently? Robust servers should return structured errors, not stack traces.

:::tip KEY INSIGHT
The Inspector removes the AI model from the debugging loop. When a tool call fails through Claude Code, you do not know whether the problem is the model sending bad parameters, the transport layer dropping the message, or the server logic failing. The Inspector isolates the server: if a manual call works in Inspector but fails through Claude Code, the problem is on the client side. If it fails in Inspector too, the server is the issue.
:::

## Part C: Common Error Patterns

MCP uses JSON-RPC 2.0 error codes. Each code tells you a specific category of failure:

| Error            | JSON-RPC Code | Common Cause                                                 | HireFlow Example                                        |
| ---------------- | ------------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| Method not found | -32601        | Typo in method name or method not registered                 | Client sends `tool/list` instead of `tools/list`        |
| Invalid params   | -32602        | Wrong argument types or missing required fields              | `score: "high"` instead of `score: 87`                  |
| Internal error   | -32603        | Unhandled exception in server code                           | Database connection timeout when querying candidates    |
| Tool not found   | -32602        | Tool name in `tools/call` does not match any registered tool | Client calls `parseCv` but server registered `parse_cv` |
| Parse error      | -32700        | Malformed JSON in the request body                           | Trailing comma in the JSON-RPC request                  |

> **James:** The "tool not found" one is going to catch people. You name the function `parse_cv` in Python, but the JSON schema shows `parse_cv`, and the client might expect `parseCv` from some camelCase convention.
>
> **Emma:** How would you prevent that?
>
> **James:** Use the `name` parameter in the decorator explicitly? Like `@mcp.tool(name="parse_cv")`?
>
> **Emma:** That works. Or rely on the convention that FastMCP uses the Python function name directly. The point is: do not guess the tool name on the client side. Read it from `tools/list`.

### Error Taxonomy Classification

In Chapter 69's error framework, each error maps to a category:

:::info ERROR_TYPE: Specification Error
A **Specification Error** occurs when the code executes correctly but produces results that violate expectations. The naming mismatch (`parseCv` vs `parse_cv`) is a specification error: both the client and server work fine individually. The failure is in the contract between them.
:::

:::info ERROR_TYPE: Logic Error
An **Internal error** (-32603) from an unhandled exception is a **Logic Error**. The server received valid input but its business logic failed (a database query timed out, a division by zero, an unhandled None value).
:::

:::info ERROR_TYPE: Data/Edge-Case Error
An **Invalid params** (-32602) from unexpected input is a **Data/Edge-Case Error**. The server's schema expects an integer score between 0 and 100, but the client sent `"high"`. The server logic may be correct for valid inputs but fails on edge cases.
:::

## Part D: James's Debugging Scenario

James has built the HireFlow candidate profiles server from Lesson 4. He configures Claude Code to connect to it:

```json
{
  "mcpServers": {
    "hireflow": {
      "command": "uv",
      "args": ["run", "candidate_profiles_server.py"],
      "env": {}
    }
  }
}
```

He asks Claude Code to parse a CV. Claude Code responds: "I cannot find a tool for parsing CVs."

James checks his server code:

```python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("HireFlow Candidate Profiles")

@mcp.tool(name="parseCv")
def parse_cv(cv_text: str) -> dict:
    """Extract structured data from a CV."""
    return {
        "name": "extracted name",
        "skills": ["Python", "SQL"],
        "experience_years": 3
    }

mcp.run(transport="stdio")
```

> **James:** The server starts fine. The tool is registered. Why can Claude Code not find it?
>
> **Emma:** What name did you register?
>
> **James:** `parseCv`. It's right there in the decorator.
>
> **Emma:** And what name is Claude Code looking for?
>
> **James:** Probably `parse_cv`, from the Python function name. But I overrode it with `name="parseCv"`.
>
> **Emma:** So what does `tools/list` actually return? Don't guess. Check.

James opens the Inspector:

```bash
mcp dev candidate_profiles_server.py
```

The Inspector shows one tool registered: `parseCv`. Claude Code's tool discovery did find the tool. The issue is different: Claude Code sees a tool called `parseCv` but when the user says "parse a CV," the model does not connect the request to a camelCase tool name confidently enough. It is not a protocol error. It is a discoverability problem.

> **James:** So the protocol is fine. The model matched the tool name but did not choose to call it?
>
> **Emma:** Naming conventions matter beyond the protocol. Snake_case is the Python convention and what models encounter most often in training data. `parseCv` is unusual. What would you change?
>
> **James:** Remove the `name` override and let it default to `parse_cv`.
>
> **Emma:** Or use the explicit `name="parse_cv"` if you want to be clear. Either way, the function name in the decorator should be the name you want clients to see.

### Classifying James's Error

This is a **Specification Error**. The code executes correctly at every level. The server starts, registers the tool, and responds to `tools/list`. The JSON-RPC layer has no errors. The failure is in the specification: the tool name `parseCv` does not match the naming convention that clients (and the AI model) expect.

On the **Verification Ladder**, this is **Rung 4: Pipeline Verification**. The error only appears when the client and server interact through the full pipeline. Testing the server in isolation (Inspector shows the tool, manual calls work) does not reveal the problem. You must test the entire chain: model receives user request, model discovers tools via `tools/list`, model selects a tool, model calls the tool, server responds.

### The Debugging Decision Tree

When something goes wrong with an MCP server, start at the top and work down:

```
Server won't start
  → Check import paths (is mcp installed?)
  → Check transport config (mcp.run() call present?)
  → Check Python version (3.10+ required)
  → Run directly: python hireflow_server.py

Server starts, no tools listed
  → Check decorator registration (@mcp.tool() present?)
  → Verify decorators are on the right FastMCP instance
  → Open Inspector: mcp dev hireflow_server.py
  → Check Inspector sidebar for registered primitives

Tools listed, call fails
  → Check parameter types match the JSON schema
  → Check parameter names (camelCase vs snake_case)
  → Test manually in Inspector with exact parameter values
  → Look at the JSON-RPC error code for the category

Call succeeds, wrong output
  → The protocol layer is fine; this is a business logic bug
  → Add logging in the tool function
  → Test with known input/output pairs
  → Check edge cases (empty strings, None values, boundary numbers)
```

> **James:** So the decision tree goes from infrastructure to protocol to business logic. Each level assumes the previous levels are working.
>
> **Emma:** Exactly. If the server will not start, there is no point testing tool calls. If tools are not listed, there is no point testing parameters. Debug from the bottom up. Each layer depends on the one below it.

### When to Use Each Debugging Approach

| Symptom                                        | First Step                                 | Tool                                           |
| ---------------------------------------------- | ------------------------------------------ | ---------------------------------------------- |
| Server process crashes on startup              | Read the error traceback                   | Terminal                                       |
| Server starts but client sees no tools         | Check `tools/list` response                | Inspector                                      |
| Tool call returns wrong results                | Compare request/response payloads          | Inspector                                      |
| Tool works in Inspector but not in Claude Code | Check configuration file path and env vars | `cat .mcp.json` or `cat .claude/settings.json` |
| Intermittent failures                          | Add stderr logging to the server           | `import sys; print("debug", file=sys.stderr)`  |

Note the stderr pattern in the last row: MCP servers communicate with clients over stdout (the stdio transport channel). If you `print()` to stdout for debugging, you will corrupt the JSON-RPC stream. Always log to stderr:

```python
import sys

@mcp.tool()
def parse_cv(cv_text: str) -> dict:
    """Extract structured data from a CV."""
    print(f"parse_cv called with {len(cv_text)} chars", file=sys.stderr)
    # ... business logic ...
```

:::tip KEY INSIGHT
Never use `print()` for debugging in an MCP server that uses stdio transport. Standard output IS the transport channel. A stray print statement corrupts the JSON-RPC message stream and causes parse errors (-32700) on the client side. Use `print(..., file=sys.stderr)` or Python's `logging` module configured to write to stderr.
:::

## Connecting the Pieces

Configuration tells the client _how_ to find the server. The Inspector lets you verify the server _works_ in isolation. The error codes tell you _what category_ of failure occurred. The decision tree tells you _where_ to look. Together, these four tools form a complete debugging workflow:

1. **Configure**: Write the `mcpServers` JSON with correct command, args, and env vars
2. **Verify in isolation**: Use `mcp dev` to confirm the server registers all primitives correctly
3. **Test the pipeline**: Connect through the actual client (Claude Code) and attempt a tool call
4. **Diagnose failures**: Use the error code to classify, then the decision tree to locate the root cause

In the next lesson, you will take the Resume Screener skill you wrote in Chapter 67 and validated in Chapter 68, and expose it as a complete MCP server. When something goes wrong (and it will), come back to this decision tree.

## Backward References

- **Lesson 2** introduced the JSON-RPC 2.0 message format. The error codes in this lesson (-32601, -32602, -32603, -32700) are part of that same JSON-RPC specification.
- **Lesson 4** showed `mcp.run(transport="stdio")` as the way to start a server. The configuration files in this lesson are the client-side counterpart: they tell the client how to launch a server that calls `mcp.run(transport="stdio")`.
