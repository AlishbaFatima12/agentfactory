---
title: "Modify Exercises: Extend the Server - Summary"
chapter: 69
lesson: 7
---

## Key Concepts

- **Adding Tools**: Follow the decorator pattern (decorator, function definition with type hints, docstring, body). FastMCP auto-generates `inputSchema` from type annotations. Parameters without defaults become required.
- **Input Validation for AI-Called Tools**: Return structured error dictionaries instead of raising exceptions. The AI model is the caller; it needs enough context to help the human user fix the problem. `{"error": "CV text too short", "minimum": 20}` is far more useful than a generic exception.
- **Tool-Resource Wiring**: Within the same server process, tools can access shared data directly (plain Python). No need for MCP protocol overhead internally. External clients access the same data through the resource URI. Same data, two access paths.

## Mental Models

- Graduated progression: Mechanics (Mod A: add a tool), Resilience (Mod B: validate inputs), Design (Mod C: connect primitives).
- The individual primitives are building blocks. The wiring between them is the architecture.

## Common Mistakes

- Raising Python exceptions from tools called by AI models. The model gets a generic error message. Always return informative dictionaries with error details and suggestions.
- Assuming you need to go through the MCP protocol to access data from a resource within the same server. Internal wiring is plain Python function calls or shared data structures.
- Forgetting to normalize data for comparison (e.g., case-insensitive skill matching).

## Quick Reference

Validation pattern for AI-called tools:

```python
if not stripped:
    return {"error": "CV text is empty", "suggestion": "Provide the full CV text"}
if len(stripped) < 20:
    return {"error": "CV text too short", "length": len(stripped), "minimum": 20}
```

Tool-resource shared data pattern:

```python
JOBS = { ... }  # Module-level shared data
@mcp.resource("jobs://{job_id}")
def get_job(job_id): ...     # External access via URI
@mcp.tool()
def match(job_id): ...       # Internal access via JOBS dict
```

## Connection to Next Lesson

Lesson 8 covers the practical side: JSON configuration files that connect clients to servers, the MCP Inspector for debugging, JSON-RPC error codes, and a systematic debugging decision tree.
