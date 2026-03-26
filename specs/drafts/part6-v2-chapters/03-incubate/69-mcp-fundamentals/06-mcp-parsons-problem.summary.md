---
title: "MCP Parsons Problem - Summary"
chapter: 69
lesson: 6
---

## Key Concepts

- **Server Structure Dependency Chain**: Every FastMCP server follows a strict ordering: Import, Initialize, Register (decorator), Define (function), Document (docstring), Implement (body), Run. Each step depends on the previous one.
- **Decorator Placement Rule**: In Python, a decorator must appear immediately before the `def` statement it applies to. Nothing can go between `@mcp.tool()` and `def function_name(...)`.
- **`mcp.run()` Blocks Execution**: Starting the server event loop prevents any code below it from executing. Tools must be registered before `mcp.run()` is called, or the server starts empty.

## Mental Models

- The seven-step skeleton: Import, Init, Register, Define, Document, Implement, Run. Steps 3-6 repeat for each tool/resource/prompt. Step 7 always comes last.
- "Closing the doors after setup": `mcp.run()` is the final step because it enters the event loop. Everything must be set up first.

## Common Mistakes

- Placing `mcp.run()` before tool definitions. The server starts with no tools registered. This is a silent failure: no error is raised, but `tools/list` returns an empty array.
- Separating the decorator from the function with other code. This is a Python syntax error.
- Omitting the docstring. The code works, but the tool has no description, so the AI model cannot understand when to use it. Like a job posting with no job description.

## Quick Reference

Correct order (7-line server):

```
A: from mcp.server.fastmcp import FastMCP  (Import)
D: mcp = FastMCP("ServerName")              (Initialize)
C: @mcp.tool()                              (Register)
B: def function(param: type) -> type:       (Define)
E:     """Docstring"""                      (Document)
F:     return result                        (Implement)
G: mcp.run(transport="stdio")               (Run)
```

## Connection to Next Lesson

Lesson 7 provides three graduated modify exercises that extend the HireFlow server: adding a new tool, implementing input validation, and wiring a tool to a resource.
