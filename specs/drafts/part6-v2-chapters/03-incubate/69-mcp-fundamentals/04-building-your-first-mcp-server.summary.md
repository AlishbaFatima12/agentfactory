---
title: "Building Your First MCP Server - Summary"
chapter: 69
lesson: 4
---

## Key Concepts

- **FastMCP**: High-level Python framework for building MCP servers. Three lines to set up: import, construct, run.
- **@mcp.tool() Decorator**: Registers a Python function as an MCP tool. Automatically extracts the function name as tool name, docstring as description, and type annotations as JSON Schema for `inputSchema`.
- **Transport Modes**: `stdio` (local, parent process manages lifecycle, no network exposure) and `streamable-http` (networked, multiple clients). Transport choice does not change tool code.
- **Logic Errors vs Syntax Errors**: Code that runs without exceptions but produces fundamentally flawed results. The scoring bug (linear, unbounded, single-factor, arbitrary threshold) is the canonical example.

## Mental Models

- The decorator does three things automatically: registers function name as tool name, extracts docstring as description, converts type annotations to JSON Schema.
- Transport is a deployment decision, not an implementation decision. Same `@mcp.tool()` function works identically on stdio or streamable-http.

## Common Mistakes

- Not distinguishing between "empty result" and "invalid input." An empty list from `list_candidates("")` looks the same as `list_candidates("Finance")`. Validate inputs and signal problems.
- Building scoring tools with unbounded output, no input validation, single-factor logic, and arbitrary thresholds. Always cap scores, validate ranges, use multiple factors, and provide breakdowns.

## Quick Reference

```python
from mcp.server.fastmcp import FastMCP
mcp = FastMCP("ServerName")

@mcp.tool()
def my_tool(param: str) -> dict:
    """Docstring becomes tool description"""
    return {"result": param}

if __name__ == "__main__":
    mcp.run(transport="stdio")
```

Test with MCP Inspector: `mcp dev server.py`

Error taxonomy: Logic Error = code runs but algorithm does not model the domain it claims to represent.

## Connection to Next Lesson

Lesson 5 adds resources and prompts to the server, completing all three primitives and demonstrating the three control models in practice with the same data.
