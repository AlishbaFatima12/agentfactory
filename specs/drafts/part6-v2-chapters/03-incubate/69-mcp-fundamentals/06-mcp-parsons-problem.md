---
sidebar_position: 6
title: "MCP Parsons Problem"
description: "Reorder seven scrambled lines of code into a working MCP server to reinforce the structural pattern"
chapter: 69
lesson: 6
duration_minutes: 20
keywords:
  [
    parsons-problem,
    code-ordering,
    fastmcp-structure,
    mcp-server-anatomy,
    hireflow,
  ]
skills:
  - name: "MCP Server Structure Recognition"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Identify the correct ordering of MCP server components and explain why each line must precede the next"
  - name: "Code Structural Reasoning"
    proficiency_level: "A2"
    category: "Technical"
    bloom_level: "Analyze"
    digcomp_area: "5.1 Solving technical problems"
    measurable_at_this_level: "Detect ordering errors in MCP server code and explain the dependency that makes the order mandatory"
learning_objectives:
  - objective: "Arrange scrambled MCP server code into the correct execution order"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "All 7 lines placed in correct order with no dependency violations"
  - objective: "Explain why each line depends on the lines before it"
    proficiency_level: "A2"
    bloom_level: "Analyze"
    assessment_method: "Written explanation of at least 3 dependency relationships between the 7 lines"
cognitive_load:
  new_concepts: 0
  assessment: "No new concepts. This lesson reinforces the server structure from lessons 4 and 5 through a different activity type (reordering vs building). Cognitive load is deliberately low to consolidate learning."
differentiation:
  extension_for_advanced: "After solving the Parsons problem, write a second 7-line server from memory without looking at any reference. Time yourself."
  remedial_for_struggling: "Group the 7 lines into three buckets first: Setup (what goes before the tool?), Tool (the tool itself), and Launch (what goes after?). Then order within each bucket."
---

# MCP Parsons Problem

You have built a server, traced request lifecycles, and investigated edge cases. Now, test your understanding of the structural pattern by assembling a server from scrambled pieces.

## The Exercise

Below are seven lines of Python code. Together they form a complete, working MCP server that parses candidate CVs for HireFlow. But they are scrambled.

:::danger AI-FREE ZONE
Reorder these 7 lines into a working MCP server. Do this without AI assistance, without running the code, and without looking back at lessons 4 or 5. Work from your understanding of the structure.
:::

**The scrambled lines (in random order):**

```
D:  mcp = FastMCP("HireFlow")
F:  return {"name": "extracted", "skills": ["python"]}
A:  from mcp.server.fastmcp import FastMCP
G:  mcp.run(transport="stdio")
C:  @mcp.tool()
E:  """Parse a candidate CV and extract key fields"""
B:  def parse_cv(cv_text: str) -> dict:
```

**Your task:** Write the letter sequence that produces valid Python. For example, if you think it starts with line D, then C, and so on, write: `D, C, ...`

### Hints (use only if stuck)

<details>
<summary>Hint 1: What must come first in any Python file that uses an external library?</summary>

You need to import before you can use. Which line brings `FastMCP` into scope?

</details>

<details>
<summary>Hint 2: What must exist before you can call a method on it?</summary>

The `@mcp.tool()` decorator references the `mcp` object. That object must exist before the decorator line.

</details>

<details>
<summary>Hint 3: What is the relationship between a decorator and the function it decorates?</summary>

In Python, a decorator must appear on the line immediately before the `def` statement it applies to. Nothing can go between `@mcp.tool()` and `def parse_cv(...)`.

</details>

---

## Solution

The correct order is: **A, D, C, B, E, F, G**

```python
from mcp.server.fastmcp import FastMCP           # A: Import
mcp = FastMCP("HireFlow")                         # D: Initialize server
@mcp.tool()                                        # C: Decorator (registers next function)
def parse_cv(cv_text: str) -> dict:               # B: Function definition
    """Parse a candidate CV and extract key fields"""  # E: Docstring (becomes tool description)
    return {"name": "extracted", "skills": ["python"]}  # F: Function body (return value)
mcp.run(transport="stdio")                         # G: Start the server
```

## Why This Order Matters

Each line depends on something from a previous line. Here is the dependency chain:

| Line | Code                                     | Depends On       | Why                                                                                              |
| ---- | ---------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------ |
| A    | `from mcp.server.fastmcp import FastMCP` | Nothing          | Imports must come first. `FastMCP` is not available until this line runs.                        |
| D    | `mcp = FastMCP("HireFlow")`              | Line A           | `FastMCP` must be imported before you can call it as a constructor.                              |
| C    | `@mcp.tool()`                            | Line D           | The decorator calls `mcp.tool()`, which is a method on the `mcp` object. That object must exist. |
| B    | `def parse_cv(cv_text: str) -> dict:`    | Line C           | Python requires a decorator to be immediately followed by the `def` statement it decorates.      |
| E    | `"""Parse a candidate CV..."""`          | Line B           | A docstring must be the first expression inside the function body.                               |
| F    | `return {"name": "extracted", ...}`      | Line B           | A `return` statement must be inside a function.                                                  |
| G    | `mcp.run(transport="stdio")`             | Lines A, D, C, B | The server must have all tools registered before starting. `mcp.run()` starts the event loop.    |

> **James:** "So it's a strict chain: import, create server, decorate, define function, docstring, body, run. You can't skip any step or move things around."

> **Emma:** "Can you move G before C?"

> **James:** "That would start the server before registering the tool. So the server would run, but with no tools available."

> **Emma:** "Would it crash?"

> **James:** "No... it would just be an empty server. Responds to `tools/list` with an empty list. That's worse than crashing, because it's a silent failure."

> **Emma:** "Right. Crashing tells you something is wrong. An empty `tools/list` response looks like success, but nothing works."

## Common Mistakes

**Mistake 1: Putting `mcp.run()` before the tool definition**

```python
from mcp.server.fastmcp import FastMCP
mcp = FastMCP("HireFlow")
mcp.run(transport="stdio")  # Server starts HERE, with no tools
@mcp.tool()                  # This line never executes
def parse_cv(cv_text: str) -> dict:
    ...
```

`mcp.run()` starts the server's event loop, which blocks execution. The decorator and function definition below it never run. The server starts but has no tools registered.

> **James:** "So `mcp.run()` is like closing the doors after setup. You need to set up everything first."

**Mistake 2: Separating the decorator from the function**

```python
@mcp.tool()
# some other code here
def parse_cv(cv_text: str) -> dict:
```

In Python, a decorator must be immediately followed by the `def` (or `class`) statement it applies to. Any other code between them is a syntax error. This is a Python rule, not an MCP-specific one, but it catches people who are new to decorators.

**Mistake 3: Forgetting the docstring**

```python
@mcp.tool()
def parse_cv(cv_text: str) -> dict:
    return {"name": "extracted", "skills": ["python"]}
```

This is actually valid Python and will run without errors. But FastMCP extracts the docstring to use as the tool's `description` in the `tools/list` response. Without a docstring, the tool's description will be empty or auto-generated, which makes it harder for the AI model to understand when and how to use the tool.

> **Emma:** "The docstring is not required for the code to work. But it is required for the tool to be _useful_. An AI model seeing a tool with no description has to guess what it does."

> **James:** "It's like listing a job opening with no job description. Technically valid, but nobody applies."

> **Emma:** "Or worse: the wrong people apply."

## Self-Check

Answer these questions to verify your understanding:

1. **What happens if you swap lines D and A?** (Try to answer before checking.)

   You get a `NameError: name 'FastMCP' is not defined` because you try to call `FastMCP("HireFlow")` before importing it.

2. **What happens if you move line G between lines D and C?**

   The server starts with no tools. It responds to requests but has nothing useful to offer. No error is raised.

3. **Could line E and line F be swapped?**

   No. If you put `return` before the docstring, the function returns immediately and the docstring becomes unreachable dead code. Python will also not recognize it as a docstring since it is not the first expression in the function body.

## The Pattern to Remember

Every FastMCP server follows this skeleton:

```
1. Import        from mcp.server.fastmcp import FastMCP
2. Initialize    mcp = FastMCP("ServerName")
3. Register      @mcp.tool() / @mcp.resource() / @mcp.prompt()
4. Define        def function_name(...) -> ...:
5. Document          """Docstring becomes description"""
6. Implement         return ...
7. Run           mcp.run(transport="stdio")
```

Steps 3 through 6 repeat for each tool, resource, or prompt you add. Step 7 always comes last.

> **James:** "Import, init, register, define, document, implement, run. Seven steps. Same every time."

> **Emma:** "Patterns that are the same every time are patterns you can rely on. When something goes wrong, you check each step in order. Which step broke?"

> **James:** "Systematic debugging. Check the chain."

> **Emma:** "Now you're thinking like an engineer."
