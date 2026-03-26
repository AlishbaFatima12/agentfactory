# Chapter 69: MCP Fundamentals - Research Summary

**Sources**: Old Chapter 66 (9 lessons), Context7 MCP Python SDK docs (v1.12.4), V4 Outline C9
**Date**: 2026-03-26
**Purpose**: Verified API patterns for content writers. NO hallucinated imports.

---

## 1. Verified Imports (from Old Chapter + Context7)

### Server-Side Imports

```python
from mcp.server.fastmcp import FastMCP           # old ch66 + context7 (STILL VALID)
from mcp.server.mcpserver import MCPServer        # context7 only (NEW — high-level alternative to FastMCP)
from mcp.server.fastmcp.prompts import base       # context7 only (for Message objects in prompts)
from pydantic import Field                        # old ch66 + context7 (for parameter descriptions)
```

### Client-Side Imports

```python
from mcp.client.session import ClientSession               # context7 (explicit path)
from mcp import ClientSession, StdioServerParameters, types # context7 (shorthand)
from mcp.client.stdio import StdioServerParameters, stdio_client  # context7
from mcp.client.stdio import stdio_client                  # context7
from mcp.types import AnyUrl                               # context7
from mcp.shared.context import RequestContext               # context7 (for sampling callback)
from pydantic import AnyUrl                                 # context7 (alternative import for AnyUrl)
```

### Old Chapter Imports That Need Verification

```python
from mcp import ClientSession, StdioClientTransport  # old ch66 — CHANGED (see Section 6)
```

**STATUS**: `StdioClientTransport` from old ch66 is NOT confirmed by Context7. The current SDK uses `stdio_client` context manager + `StdioServerParameters` instead. This is a breaking API change.

---

## 2. Verified API Patterns

### 2.1 Server Creation

**FastMCP (old ch66 + context7 — CONFIRMED VALID)**:

```python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("ServerName")
# With options:
mcp = FastMCP("ServerName", json_response=True)
```

**MCPServer (context7 only — NEW in current SDK)**:

```python
from mcp.server.mcpserver import MCPServer

mcp = MCPServer(
    "Demo Server",
    title="My Demo Server",
    description="A demonstration MCP server",
    instructions="Use tools to perform calculations",
    debug=True,
    log_level="INFO"
)
```

**KEY DIFFERENCE**: `MCPServer` is a newer high-level API alongside `FastMCP`. Both use the same decorator patterns (`@mcp.tool()`, `@mcp.resource()`, `@mcp.prompt()`). MCPServer adds `title`, `description`, `instructions`, `debug`, `log_level` parameters.

### 2.2 Tools (@mcp.tool)

**Old ch66 pattern (with name/description kwargs)**:

```python
@mcp.tool(
    name="read_document",
    description="Read the full contents of a document by its ID"
)
def read_document(
    doc_id: str = Field(description="Document ID (e.g., 'DOC-2024-001')")
) -> str:
    ...
```

**Context7 pattern (simpler, docstring-based)**:

```python
@mcp.tool()
def add(a: int, b: int) -> int:
    """Add two numbers"""
    return a + b
```

**BOTH ARE VALID**. The old chapter's explicit `name=` and `description=` kwargs work but the current docs show the simpler pattern where `name` defaults to the function name and `description` comes from the docstring. Context7 examples never use `Field()` for tool parameters; they rely on type hints and docstrings. Old ch66 uses `Field(description=...)` for richer parameter descriptions.

**Annotations (old ch66 only)**:

```python
# Old ch66 shows these annotation patterns:
"destructiveHint": True
"readOnlyHint": True
"idempotentHint": True
"openWorldHint": True
```

These are part of the MCP spec. The old chapter shows manual attribute assignment (`delete_file._destructive = True`) which is NOT the correct FastMCP pattern. Context7 does not show annotation examples.

### 2.3 Resources (@mcp.resource)

**Old ch66 pattern**:

```python
@mcp.resource(
    "docs://documents",
    name="Documents Index",
    description="Complete list of available documents",
    mime_type="application/json"
)
def list_documents() -> str:
    ...

@mcp.resource(
    "docs://documents/{doc_id}",
    name="Document by ID",
    description="Read full contents of a specific document",
    mime_type="text/plain"
)
def fetch_document(doc_id: str) -> str:
    ...
```

**Context7 pattern**:

```python
@mcp.resource("greeting://{name}")
def get_greeting(name: str) -> str:
    """Get a personalized greeting"""
    return f"Hello, {name}!"

@mcp.resource("config://settings")
def get_settings() -> str:
    """Get application settings"""
    return '{"theme": "dark", "language": "en"}'

@mcp.resource("file://documents/{name}")
def read_document(name: str) -> str:
    """Read a document by name."""
    return f"Content of {name}"
```

**DIFFERENCE**: Old ch66 uses explicit `name=`, `description=`, `mime_type=` kwargs. Context7 shows simpler pattern using just URI + docstring. Both work. The `mime_type` kwarg is still valid per old ch66 but Context7 examples omit it (relying on auto-detection or defaults).

### 2.4 Prompts (@mcp.prompt)

**Old ch66 pattern**:

```python
@mcp.prompt()
def contract_review(
    contract_type: str = Field(
        description="Type of contract (NDA, employment, licensing, etc.)"
    )
) -> str:
    """Legal contract analysis with risk assessment"""
    return f"You are a contract review specialist focusing on {contract_type}..."
```

**Context7 pattern (simple)**:

```python
@mcp.prompt()
def greet_user(name: str, style: str = "friendly") -> str:
    """Generate a greeting prompt"""
    return f"Write a {style} greeting for someone named {name}."
```

**Context7 pattern (with title kwarg)**:

```python
@mcp.prompt(title="Code Review")
def review_code(code: str) -> str:
    return f"Please review this code:\n\n{code}"
```

**Context7 pattern (returning Message objects)**:

```python
from mcp.server.fastmcp.prompts import base

@mcp.prompt(title="Debug Assistant")
def debug_error(error: str) -> list[base.Message]:
    return [
        base.UserMessage("I'm seeing this error:"),
        base.UserMessage(error),
        base.AssistantMessage("I'll help debug that. What have you tried so far?"),
    ]
```

**NEW IN CURRENT SDK**: `title=` kwarg on `@mcp.prompt()`, and returning `list[base.Message]` for multi-turn prompts using `base.UserMessage()` and `base.AssistantMessage()`. Old ch66 does not show these patterns.

### 2.5 Transport / Running the Server

**Old ch66**: Describes stdio and Streamable HTTP conceptually but shows NO `mcp.run()` calls.

**Context7 (VERIFIED)**:

```python
# Streamable HTTP (default for development)
if __name__ == "__main__":
    mcp.run(transport="streamable-http")

# With host and port
mcp.run(transport="streamable-http", host="127.0.0.1", port=8000)

# stdio transport
mcp.run(transport="stdio")

# SSE transport (legacy)
mcp.run(transport="sse", host="127.0.0.1", port=8000)
```

**CLI alternatives**:

```bash
# stdio (default)
uv run mcp-simple-resource

# SSE on custom port
uv run mcp-simple-resource --transport sse --port 8000
```

### 2.6 Client Connection

**Old ch66 pattern (OUTDATED)**:

```python
from mcp import ClientSession, StdioClientTransport

transport = StdioClientTransport(
    command="npx",
    args=["-y", "@modelcontextprotocol/server-github"],
    env={"GITHUB_TOKEN": os.getenv("GITHUB_TOKEN")}
)

async with ClientSession(transport) as session:
    await session.initialize()
    tools = await session.list_tools()
```

**Context7 pattern (CURRENT)**:

```python
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client

server_params = StdioServerParameters(
    command="uv",
    args=["run", "server", "fastmcp_quickstart", "stdio"],
    env={"UV_INDEX": os.environ.get("UV_INDEX", "")},
)

async with stdio_client(server_params) as (read, write):
    async with ClientSession(read, write) as session:
        await session.initialize()

        # List tools
        tools = await session.list_tools()

        # Call a tool
        result = await session.call_tool("add", arguments={"a": 5, "b": 3})

        # List resources
        resources = await session.list_resources()

        # Read a resource
        content = await session.read_resource(AnyUrl("greeting://World"))

        # List prompts
        prompts = await session.list_prompts()

        # Get a prompt
        prompt = await session.get_prompt("greet_user", arguments={"name": "Alice"})
```

**BREAKING CHANGE**: The old chapter's `StdioClientTransport` class that takes `command`, `args`, `env` directly is replaced by `StdioServerParameters` + `stdio_client()` context manager that yields `(read, write)` streams, then `ClientSession(read, write)`. This is a fundamentally different API shape.

### 2.7 MCP Inspector / Debugging

**Old ch66 pattern**:

```bash
npx @modelcontextprotocol/inspector /path/to/server.js   # Node.js
mcp dev your_server.py                                     # Python
```

**Context7**: No inspector-specific docs returned, but the `mcp dev` command is referenced in old ch66 and is the standard Python debugging entrypoint.

### 2.8 JSON Configuration (Client-Side)

**Old ch66 (still valid for Claude Code, Claude Desktop, VS Code, Cursor)**:

```json
{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "${GITHUB_TOKEN}"
      }
    }
  }
}
```

Context7 does not cover JSON configuration (it covers SDK usage). The JSON config format is stable and well-documented in the old chapter.

---

## 3. Old Chapter Lesson Structure

| #   | File                                           | Topic                                                                                | ~Word Count | Key Concepts                                                                                            |
| --- | ---------------------------------------------- | ------------------------------------------------------------------------------------ | ----------- | ------------------------------------------------------------------------------------------------------- |
| 1   | `01-mcp-architecture-overview.md`              | Architecture, Host-Client-Server, JSON-RPC 2.0, three primitives, adoption timeline  | ~3500       | Integration explosion O(n\*m)->O(n+m), Host/Client/Server roles, JSON-RPC 2.0, AAIF governance          |
| 2   | `02-transport-layers.md`                       | stdio vs Streamable HTTP, HTTP fundamentals primer                                   | ~3500       | stdio streams, HTTP methods/headers/status codes, SSE, stateless vs stateful HTTP, transport comparison |
| 3   | `03-tools-the-model-controlled-primitive.md`   | Tool discovery, execution, schema design, FastMCP implementation                     | ~3200       | tools/list, tools/call, inputSchema, model-controlled paradigm, `@mcp.tool()`, `Field()`, annotations   |
| 4   | `04-resources-the-app-controlled-primitive.md` | Resource discovery, reading, URI patterns, MIME types                                | ~3200       | resources/list, resources/read, direct vs templated URIs, app-controlled paradigm, `@mcp.resource()`    |
| 5   | `05-prompts-the-user-controlled-primitive.md`  | Prompt discovery, retrieval, static/dynamic prompts, three control models comparison | ~2800       | prompts/list, prompts/get, user-controlled paradigm, `@mcp.prompt()`, expertise distribution            |
| 6   | `06-configuring-mcp-clients.md`                | Configuration across Claude Code, Desktop, VS Code; env vars; security               | ~3500       | mcpServers JSON, `${VAR_NAME}` syntax, .env files, programmatic clients, least privilege                |
| 7   | `07-using-community-mcp-servers.md`            | Ecosystem tiers, evaluation criteria, installation, multi-server composition         | ~3800       | Official/community/enterprise tiers, npx/uvx/Docker, evaluation checklist, tool routing                 |
| 8   | `08-debugging-and-troubleshooting.md`          | MCP Inspector, error patterns, decision tree, stdio vs HTTP debugging                | ~3000       | Inspector 5-step workflow, common error table, JSON-RPC error codes, stderr logging                     |
| 9   | `09-chapter-quiz.md`                           | 15-question quiz covering all lessons                                                | ~1800       | Assessment covering all 8 content lessons                                                               |

**Pedagogical Progression**: Architecture overview (what/why) -> Transport (how messages travel) -> Three primitives (tools/resources/prompts, one per lesson) -> Configuration (practical setup) -> Ecosystem (community servers) -> Debugging (troubleshooting) -> Quiz.

---

## 4. V4 Outline Requirements for C9

**Template**: PRIMM-AI+ 7-Section Template

**Seven sections required**:

1. **Why** (motivation/scenario)
2. **Worked Example + Predict** (MCP server, `tools/list` request)
3. **Investigate** (protocol trace, architecture, primitives, AI-assisted, error taxonomy)
4. **Parsons** (7 lines, scrambled code to reorder)
5. **Modify** (mini-Predict before each):
   - A: Job descriptions
   - B: Validation
   - C: Second tool
6. **Make** (candidate profiles MCP server, TDG, git commit)
7. **Rubric**

**James's mistake** (from C10, not C9): "Wrong tool schemas in MCP server" (this is C10's error, not C9's. C9 does not specify a James mistake explicitly, but the Investigate section includes "error taxonomy".)

**HireFlow Context**: C9 is part of the HireFlow recruitment platform arc. The MCP server examples should use hiring/recruitment domain (job descriptions, candidate profiles, interview questions).

**PRIMM-AI+ Constraints**:

- Parsons problem: exactly 7 lines of scrambled code
- Modify exercises: A/B/C progression with mini-Predict before each
- Make capstone: full MCP server build with Test-Driven Generation and git commit
- All code must use VERIFIED APIs (this research document)

---

## 5. Proposed Lesson Plan for New Ch 69

**Minimum 9 lessons (matching old chapter count)**. Each lesson maps to PRIMM-AI+ sections.

| #   | File Name                                            | Topic                                                                                    | PRIMM-AI+ Section                                | Key Code Examples                                                                                                                    |
| --- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | `01-why-mcp-the-integration-explosion.md`            | Why MCP exists, integration O(n\*m)->O(n+m), HireFlow motivation                         | **Section 1: Why**                               | Diagrams only, no code. HireFlow scenario: 4 systems \* 3 apps = 12 integrations vs 4+3=7 components.                                |
| 2   | `02-mcp-architecture-host-client-server.md`          | Host-Client-Server model, JSON-RPC 2.0, protocol basics                                  | **Section 2: Worked Example + Predict** (part 1) | JSON-RPC request/response examples (`tools/list`, `tools/call`). Predict: "What will the server return for this tools/list request?" |
| 3   | `03-the-three-primitives-tools-resources-prompts.md` | Three primitives overview with control model comparison                                  | **Section 2: Worked Example + Predict** (part 2) | Tool schema JSON, resource URI patterns, prompt template. Side-by-side control model table.                                          |
| 4   | `04-building-your-first-mcp-server.md`               | FastMCP server creation, `@mcp.tool()` decorator, running with transports                | **Section 3: Investigate** (part 1)              | `from mcp.server.fastmcp import FastMCP`, `@mcp.tool()`, `mcp.run(transport="streamable-http")`, `mcp.run(transport="stdio")`        |
| 5   | `05-resources-and-prompts-in-fastmcp.md`             | `@mcp.resource()` with URI templates, `@mcp.prompt()` with arguments, `base.Message`     | **Section 3: Investigate** (part 2)              | `@mcp.resource("jobs://{job_id}")`, `@mcp.prompt()`, `base.UserMessage()`, `base.AssistantMessage()`                                 |
| 6   | `06-mcp-parsons-problem.md`                          | Parsons exercise: reorder 7 lines to build working MCP server                            | **Section 4: Parsons**                           | 7 scrambled lines: import, FastMCP init, @mcp.tool decorator, function def, function body, return, mcp.run()                         |
| 7   | `07-modify-exercises-extend-the-server.md`           | Three Modify exercises: A (job descriptions tool), B (input validation), C (second tool) | **Section 5: Modify**                            | Mini-Predict + modify for each. Uses `Field(description=...)`, type hints, error handling patterns.                                  |
| 8   | `08-configuring-and-debugging-mcp.md`                | JSON configuration, MCP Inspector, common errors, decision tree                          | **Section 3: Investigate** (error taxonomy)      | `mcpServers` JSON config, `mcp dev server.py`, Inspector workflow, error pattern table                                               |
| 9   | `09-make-candidate-profiles-mcp-server.md`           | Capstone: build candidate profiles MCP server with TDG and git commit                    | **Section 6: Make**                              | Full server: 2+ tools, 1+ resource, 1 prompt, transport config. Test-Driven Generation.                                              |
| 10  | `10-rubric-and-chapter-quiz.md`                      | Self-assessment rubric + chapter quiz                                                    | **Section 7: Rubric**                            | Rubric table mapping PRIMM-AI+ sections to proficiency levels. 15-question quiz.                                                     |

### Rationale for 10 Lessons (vs old chapter's 9)

The old chapter dedicated one lesson per primitive (tools, resources, prompts) plus separate lessons for architecture, transport, config, community servers, and debugging. The new PRIMM-AI+ structure requires dedicated Parsons, Modify, and Make lessons that the old chapter did not have. The tradeoff: community MCP servers content (old L7) is compressed into the config/debugging lesson (new L8) since the V4 outline does not require a full community server lesson.

### PRIMM-AI+ Section Mapping

| PRIMM-AI+ Section           | Lesson(s)     |
| --------------------------- | ------------- |
| 1. Why                      | L01           |
| 2. Worked Example + Predict | L02, L03      |
| 3. Investigate              | L04, L05, L08 |
| 4. Parsons                  | L06           |
| 5. Modify                   | L07           |
| 6. Make                     | L09           |
| 7. Rubric                   | L10           |

---

## 6. API Differences (Old vs Current)

### BREAKING CHANGES

| Area                  | Old Ch66 Pattern                                                                       | Current Context7 Pattern                                                                                                                       | Impact                                                                                       |
| --------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Client connection** | `StdioClientTransport(command=..., args=..., env=...)` then `ClientSession(transport)` | `StdioServerParameters(command=..., args=..., env=...)` then `stdio_client(params)` yielding `(read, write)` then `ClientSession(read, write)` | **MAJOR**: Different class names, different API shape. Old pattern is WRONG for current SDK. |
| **Import path**       | `from mcp import ClientSession, StdioClientTransport`                                  | `from mcp import ClientSession, StdioServerParameters` and `from mcp.client.stdio import stdio_client`                                         | **MAJOR**: `StdioClientTransport` does not exist in current SDK.                             |

### NEW APIs (Not in Old Chapter)

| API                                 | Import                                              | Purpose                                                                                                    |
| ----------------------------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `MCPServer`                         | `from mcp.server.mcpserver import MCPServer`        | High-level server alternative to FastMCP with `title`, `description`, `instructions`, `debug`, `log_level` |
| `mcp.run()`                         | Method on FastMCP/MCPServer                         | Run server with `transport="streamable-http"`, `transport="stdio"`, or `transport="sse"`                   |
| `base.Message` types                | `from mcp.server.fastmcp.prompts import base`       | `base.UserMessage()`, `base.AssistantMessage()` for multi-turn prompts                                     |
| `@mcp.prompt(title=...)`            | N/A                                                 | New `title` kwarg on prompt decorator                                                                      |
| `session.call_tool()`               | Client-side                                         | `session.call_tool("name", arguments={...})`                                                               |
| `session.read_resource()`           | Client-side                                         | `session.read_resource(AnyUrl("scheme://path"))`                                                           |
| `session.get_prompt()`              | Client-side                                         | `session.get_prompt("name", arguments={...})`                                                              |
| `session.list_resource_templates()` | Client-side                                         | Lists resource templates separately                                                                        |
| Sampling callback                   | `ClientSession(read, write, sampling_callback=...)` | New callback for intercepting model sampling                                                               |
| `types.TextContent`                 | `from mcp import types`                             | `types.TextContent(type="text", text="...")` for structured content                                        |
| `result.structuredContent`          | N/A                                                 | New structured output from tool results                                                                    |
| `json_response=True`                | `FastMCP("Name", json_response=True)`               | Enable JSON structured responses                                                                           |

### STILL VALID (Confirmed by Both Sources)

| Pattern                                                 | Status                                                              |
| ------------------------------------------------------- | ------------------------------------------------------------------- |
| `from mcp.server.fastmcp import FastMCP`                | Confirmed                                                           |
| `FastMCP("ServerName")`                                 | Confirmed                                                           |
| `@mcp.tool()` decorator                                 | Confirmed                                                           |
| `@mcp.resource("uri://{param}")` decorator              | Confirmed                                                           |
| `@mcp.prompt()` decorator                               | Confirmed                                                           |
| `from pydantic import Field` for parameter descriptions | Confirmed (old ch66, not used in Context7 examples but still valid) |
| JSON-RPC 2.0 message format                             | Confirmed                                                           |
| `mcpServers` JSON configuration structure               | Confirmed                                                           |
| `${VAR_NAME}` environment variable syntax               | Confirmed                                                           |
| `npx -y @modelcontextprotocol/server-*` installation    | Confirmed                                                           |
| `uvx mcp-*` installation                                | Confirmed                                                           |
| `mcp dev server.py` for Inspector                       | Confirmed                                                           |
| `npx @modelcontextprotocol/inspector` for Inspector     | Confirmed                                                           |

### DEPRECATED/REMOVED

| Pattern                                 | Status                     | Replacement                                                     |
| --------------------------------------- | -------------------------- | --------------------------------------------------------------- |
| `StdioClientTransport`                  | NOT FOUND in Context7      | `StdioServerParameters` + `stdio_client()`                      |
| `ClientSession(transport)` (single arg) | NOT FOUND in Context7      | `ClientSession(read, write)` (two args from `stdio_client`)     |
| SSE transport (`transport="sse"`)       | Still works but deprecated | `transport="streamable-http"` is the recommended HTTP transport |

### SUSPICIOUS PATTERNS IN OLD CHAPTER (Unverified)

| Pattern                                               | Concern                                                                                                                              |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `delete_file._destructive = True`                     | Manual attribute assignment for annotations. Not the standard FastMCP way to set annotations. Context7 shows no annotation examples. |
| `from mcp import ClientSession, StdioClientTransport` | `StdioClientTransport` is not in current SDK.                                                                                        |
| Old ch66 programmatic Anthropic SDK MCP integration   | The code showing `client.messages.create()` with MCP tools is pseudo-code, not verified.                                             |

---

## 7. Summary of Critical Findings for Content Writers

1. **Use `FastMCP` as the primary server API**. `MCPServer` from `mcp.server.mcpserver` is newer and also valid, but `FastMCP` is more established and what the old chapter taught.

2. **Client code must use the NEW pattern**: `StdioServerParameters` + `stdio_client()` context manager yielding `(read, write)` + `ClientSession(read, write)`. The old `StdioClientTransport` is GONE.

3. **Transport running**: Always show `mcp.run(transport="streamable-http")` or `mcp.run(transport="stdio")`. The old chapter never showed `mcp.run()` calls.

4. **Prompts can return Message objects**: `list[base.Message]` with `base.UserMessage()` and `base.AssistantMessage()` from `mcp.server.fastmcp.prompts.base`. This is new and should be taught.

5. **JSON configuration format is stable**: The `mcpServers` object with `command`, `args`, `env` is unchanged.

6. **Tool annotations**: The old chapter's manual `._destructive = True` pattern is suspect. Do not teach this without verifying. Use the conceptual description of annotations (hints in the JSON schema) instead.

7. **HireFlow domain**: All examples must use recruitment/hiring context per V4 outline (job descriptions, candidate profiles, interview questions).

8. **Parsons problem**: Exactly 7 lines. Suggested lines:

   ```
   from mcp.server.fastmcp import FastMCP
   mcp = FastMCP("HireFlow")
   @mcp.tool()
   def list_candidates(department: str) -> list[dict]:
       """List all candidates for a department"""
       return db.query_candidates(department)
   mcp.run(transport="stdio")
   ```

9. **No `import Quiz` or `import Flashcards`**: These are NOT React components. Never add these imports.
