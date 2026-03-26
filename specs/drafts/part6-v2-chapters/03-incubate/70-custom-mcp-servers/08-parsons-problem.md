---
sidebar_position: 8
title: "Multi-Tool Server Parsons Problem"
description: "Reconstruct the correct order of 8 lines to build a working MCP server with two tools and a Pydantic output model"
chapter: 70
lesson: 8
duration_minutes: 15
keywords: [Parsons problem, code ordering, MCP server, FastMCP, Pydantic]

skills:
  - name: "Reconstructing MCP Server Structure"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "3. Digital Content Creation"
    measurable_at_this_level: "Student can order code lines to form a valid MCP server with imports, model definition, tool registration, and server execution"

learning_objectives:
  - objective: "Arrange 8 scrambled code lines into a working MCP server with correct import order, model definition, and tool registration"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Correctly ordered code that would pass ruff and pyright checks"

cognitive_load:
  new_concepts: 0
  assessment: "No new concepts. This exercise reinforces the structural patterns from Lessons 2-7."

differentiation:
  extension_for_advanced: "After solving, add a third tool to the server without looking at previous examples"
  remedial_for_struggling: "Group the lines into categories first (imports, model, tools, run) before ordering within each group"
---

# Multi-Tool Server Parsons Problem

You have written and analyzed MCP servers across the last six lessons. Now test whether you can reconstruct one from scrambled parts.

Below are 8 lines of code plus 1 distractor. Arrange the 8 correct lines in the right order to build a working MCP server that:

1. Creates a FastMCP server called "Skill Normalizer"
2. Defines a Pydantic model `NormalizedSkill` with fields `name` (str) and `category` (str)
3. Has a tool `normalize_skill` that takes a raw skill string and returns a `NormalizedSkill`
4. Runs the server

**Identify and remove the 1 distractor line that does not belong.**

## Scrambled Lines

```
A: mcp = FastMCP("Skill Normalizer")

B: class NormalizedSkill(BaseModel):
       name: str = Field(description="Standardized skill name")
       category: str = Field(description="Skill category: language, framework, tool, or concept")

C: from mcp.server.fastmcp import FastMCP

D: @mcp.tool()
   def normalize_skill(raw_skill: str = Field(description="Raw skill name to normalize")) -> NormalizedSkill:
       mapping = {"py": "Python", "js": "JavaScript", "ts": "TypeScript", "pg": "PostgreSQL"}
       normalized = mapping.get(raw_skill.lower(), raw_skill)
       categories = {"Python": "language", "JavaScript": "language", "FastAPI": "framework", "Docker": "tool"}
       category = categories.get(normalized, "concept")
       return NormalizedSkill(name=normalized, category=category)

E: from pydantic import BaseModel, Field

F: if __name__ == "__main__":
       mcp.run()

G: @mcp.resource("skills://{skill_name}")
   def skill_resource(skill_name: str) -> str:
       return f"Skill: {skill_name}"

H: from mcp.server.fastmcp import Context

I: mcp.run()
```

:::warning STOP AND PREDICT [AI-FREE]
Do not scroll ahead. Do not ask your AI assistant.

1. Which line is the distractor?
2. Write the correct order of the remaining 8 lines.
3. Record your confidence (1-5).
   :::

## Solution

**Distractor: Line H** (`from mcp.server.fastmcp import Context`)

This import is valid Python, but no tool in this server uses the Context parameter. Including it would not cause an error, but it is an unused import that `ruff` would flag. The server does not need Context because `normalize_skill` is a synchronous function with no logging or progress reporting.

**Correct order:**

```python
# Line C
from mcp.server.fastmcp import FastMCP

# Line E
from pydantic import BaseModel, Field

# Line A
mcp = FastMCP("Skill Normalizer")

# Line B
class NormalizedSkill(BaseModel):
    name: str = Field(description="Standardized skill name")
    category: str = Field(description="Skill category: language, framework, tool, or concept")

# Line D
@mcp.tool()
def normalize_skill(
    raw_skill: str = Field(description="Raw skill name to normalize"),
) -> NormalizedSkill:
    mapping = {"py": "Python", "js": "JavaScript", "ts": "TypeScript", "pg": "PostgreSQL"}
    normalized = mapping.get(raw_skill.lower(), raw_skill)
    categories = {
        "Python": "language",
        "JavaScript": "language",
        "FastAPI": "framework",
        "Docker": "tool",
    }
    category = categories.get(normalized, "concept")
    return NormalizedSkill(name=normalized, category=category)

# Line G
@mcp.resource("skills://{skill_name}")
def skill_resource(skill_name: str) -> str:
    return f"Skill: {skill_name}"

# Line F
if __name__ == "__main__":
    mcp.run()
```

**Why this order:**

1. **Imports first** (C, E): Python requires imports before use. `FastMCP` must be imported before `mcp = FastMCP(...)`. `BaseModel` and `Field` must be imported before the model class.

2. **Server instance** (A): `mcp` must exist before any `@mcp.tool()` or `@mcp.resource()` decorator can reference it.

3. **Model definition** (B): `NormalizedSkill` must be defined before the tool function that returns it. Python evaluates type annotations at class definition time for Pydantic models.

4. **Tool and resource registration** (D, G): These use `@mcp.tool()` and `@mcp.resource()` decorators, which require `mcp` to exist. Order between D and G does not matter; they are independent registrations.

5. **Entry point** (F): `if __name__ == "__main__": mcp.run()` goes at the bottom. This ensures all tools and resources are registered before the server starts.

**Why Line I is not used:** Line I (`mcp.run()`) runs the server without the `if __name__ == "__main__"` guard. While this works for direct execution, it would also run the server when the file is imported as a module (for testing, for example). Line F is the correct pattern.

**Common mistakes:**

- Putting the model definition (B) after the tool (D): This would cause a `NameError` because `NormalizedSkill` is not yet defined when the tool's return annotation is evaluated.
- Putting the server instance (A) before imports (C, E): `FastMCP` is not yet available.
- Including the Context import (H): Not wrong, but `ruff check` flags unused imports. Clean code does not import what it does not use.
