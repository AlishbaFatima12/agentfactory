---
sidebar_position: 11
title: "Rubric and Chapter Quiz"
description: "Self-assessment rubric for MCP server development skills and chapter quiz testing custom server concepts"
chapter: 70
lesson: 11
duration_minutes: 20
keywords: [rubric, self-assessment, chapter quiz, MCP servers, review]

skills:
  - name: "Self-Assessment of MCP Server Skills"
    proficiency_level: "B1"
    category: "Soft"
    bloom_level: "Evaluate"
    digcomp_area: "5. Problem-Solving"
    measurable_at_this_level: "Student can honestly evaluate their own proficiency across five dimensions of MCP server development"

learning_objectives:
  - objective: "Rate your own proficiency across prediction accuracy, trace quality, explanation quality, modification quality, and independent build quality"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Completed rubric with honest self-ratings and reflection"

cognitive_load:
  new_concepts: 0
  assessment: "No new concepts. This lesson is purely for review and self-assessment."

differentiation:
  extension_for_advanced: "For any dimension rated Developing, create a custom exercise and work through it independently"
  remedial_for_struggling: "Focus on the two weakest dimensions; re-read the relevant lessons before attempting the quiz"
---

# Rubric and Chapter Quiz

## Self-Assessment Rubric

Rate yourself on each dimension. Be honest: the rubric is for you, not for grading.

| Dimension                | Developing                                                                                                   | Competent                                                                                                   | Fluent                                                                                                                        |
| ------------------------ | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Prediction Accuracy**  | Predictions wrong >50%. Could not predict parse_cv output for standard CV input.                             | Predictions correct 50-80%. Got the main output structure right but missed edge case behavior.              | Predictions correct >80% with calibrated confidence. Correctly predicted title-case header bug before running.                |
| **Trace Quality**        | Trace table incomplete or needed AI help. Could not trace \_extract_section for non-standard input.          | Traces accurate without AI, minor gaps. Traced section extraction correctly but missed isupper() edge case. | Traces complete, caught edge cases independently. Traced the title-case bug before it was revealed.                           |
| **Explanation Quality**  | Cannot explain Context injection or Pydantic schema generation without re-reading.                           | Can explain in own words with effort. Can describe why Pydantic models improve tool contracts.              | Can explain to another person and justify design choices. Can articulate the tradeoff between dict returns and model returns. |
| **Modification Quality** | Modifications needed AI help or >2 attempts. Skill normalization or validation required multiple iterations. | Correct on 1st-2nd attempt without AI. All three modifications work with minor fixes.                       | Correct on 1st attempt, added improvements beyond the prompt. Added custom validators or additional edge case handling.       |
| **Independent Make**     | Spec needed AI help; implementation had >3 bugs. Could not build both servers independently.                 | Spec written independently; implementation had 1-2 issues. Both servers work with minor corrections.        | Spec and implementation both clean on first pass. Both servers pass all discipline stack checks on first run.                 |

**Reflection prompt:** What was the hardest concept in this chapter? What would you do differently next time? If any dimension is Developing, generate new Predict-Run-Investigate exercises with Claude Code and work through them.

---

## Chapter Quiz

### Question 1

What is the primary reason for splitting MCP tools across multiple servers instead of putting all tools on one server?

A) Multiple servers use less memory than one large server
B) Each server can be deployed, scaled, and updated independently
C) MCP protocol requires one tool per server
D) Multiple servers run faster because of parallel processing

### Question 2

In James's CV parser, the `_extract_section` function uses `line.strip().isupper()` to detect section boundaries. Why does this fail for CVs with title-case headers like "Education"?

A) `isupper()` only works on ASCII characters
B) `isupper()` returns True only when ALL alphabetic characters are uppercase
C) `isupper()` is not a valid Python method
D) `isupper()` compares against a hardcoded list of headers

### Question 3

What does this code do?

```python
@mcp.tool()
def analyze(
    data: str = Field(description="Data to analyze"),
    ctx: Context = None,
) -> AnalysisResult:
    await ctx.info("Starting analysis")
    return AnalysisResult(score=0.85)
```

A) Registers a tool that takes a string, logs a message, and returns a Pydantic model
B) Creates a REST API endpoint at `/analyze`
C) Defines a function that can only be called from the command line
D) Registers a resource that returns analysis data

### Question 4

When you change a tool's return type from `dict[str, object]` to a Pydantic `BaseModel`, what changes for the MCP client?

A) The client must update its code to handle the new format
B) The JSON output changes format completely
C) The client gets a detailed output schema with field descriptions and types
D) Nothing changes; dict and BaseModel produce identical MCP responses

### Question 5

What is the correct way to add Context to an MCP tool function?

A) `def my_tool(ctx: Context, data: str)` with Context as the first parameter
B) `def my_tool(data: str, ctx: Context)` with Context as a type-annotated parameter
C) `def my_tool(data: str): ctx = Context.create()`
D) `@mcp.inject_context def my_tool(data: str)`

### Question 6

The CV parser's `_parse_skills` function splits by comma if any comma exists, or by newline otherwise. What happens with input `"Python, FastAPI\nDocker\nRedis"`?

A) Returns 4 skills: Python, FastAPI, Docker, Redis
B) Returns 3 items: "Python", "FastAPI\nDocker\nRedis" (with newlines), "Redis" is lost
C) Returns 2 items: "Python" and "FastAPI\nDocker\nRedis"
D) Raises a ValueError because mixed delimiters are not supported

### Question 7

Which Pydantic Field constraint would prevent a job description shorter than 10 characters?

A) `description: str = Field(max_length=10)`
B) `description: str = Field(min_length=10)`
C) `description: str = Field(ge=10)`
D) `description: str = Field(description="Must be at least 10 chars")`

### Question 8

Emma's fixed `_extract_section` uses `normalized in known_headers` instead of `isupper()`. Why is this approach better?

A) It runs faster because set lookup is O(1)
B) It handles any capitalization of known section headers without false positives on content lines
C) It eliminates the need for the `capturing` flag
D) It automatically discovers new section headers

### Question 9

What is the difference between `ctx.info()` and `ctx.warning()` in MCP Context?

A) `info()` is for debugging; `warning()` is for production
B) `info()` reports normal events; `warning()` flags unexpected but recoverable situations
C) `info()` is synchronous; `warning()` is asynchronous
D) `info()` logs to the server; `warning()` logs to the client

### Question 10

In the Parsons problem (Lesson 8), why must the Pydantic model definition come before the tool function that returns it?

A) FastMCP requires models to be defined in a specific order
B) Python evaluates type annotations at definition time; the model must exist when the function is defined
C) Pydantic models must be registered with FastMCP before tools
D) The `@mcp.tool()` decorator validates return types at import time

### Question 11

When you call `mcp.run()` without a transport argument, what transport does FastMCP use by default?

A) HTTP
B) WebSocket
C) stdio
D) SSE

### Question 12

What does `@mcp.resource("template://{template_id}")` do differently from `@mcp.tool()`?

A) Resources can only return strings; tools can return any type
B) Resources are discoverable and browsable by clients without calling them with arguments; tools require explicit invocation
C) Resources run asynchronously; tools run synchronously
D) Resources are cached; tools are not

### Question 13

James's CV parser returns `ParsedCV` with an empty skills list when the CV has no "SKILLS" header. Why is this a problem for downstream agents?

A) Empty lists cause JSON serialization errors
B) The agent cannot distinguish "no skills found" from "skills section missing" since both return an empty list
C) Pydantic rejects empty lists by default
D) Empty lists break the MCP protocol

### Question 14

What is the purpose of `ctx.report_progress(progress=2, total=3)` in the CV parser?

A) It pauses execution until the client acknowledges
B) It tells the client that 2 of 3 sections have been processed, enabling progress display
C) It logs a debug message with completion percentage
D) It sets a timeout: if section 3 takes too long, the tool cancels

### Question 15

In the Make capstone, why does the spec require writing tests BEFORE implementation?

A) pytest requires test files to exist before source files
B) Writing tests first defines the success criteria; you know when you are done because the tests pass
C) Tests generate boilerplate code that speeds up implementation
D) The MCP Inspector requires test coverage above 80%

---

### Answer Key

1. **B**: Independent deployment, scaling, and updates. Each server owns one responsibility.
2. **B**: `isupper()` requires ALL alphabetic characters to be uppercase. "Education" has lowercase letters.
3. **A**: The `@mcp.tool()` decorator registers the function. `Field(description=...)` documents the input. `Context` enables logging. The return type is a Pydantic model.
4. **C**: FastMCP generates a JSON Schema from the model's fields. Clients see field names, types, and descriptions.
5. **B**: Context is injected by type annotation. The parameter name does not matter; the `Context` type does.
6. **C**: The comma triggers the comma-split path, producing "Python" and "FastAPI\nDocker\nRedis" as two items (the text after the single comma is one item).
7. **B**: `min_length=10` enforces a minimum string length in Pydantic.
8. **B**: Known headers set handles any capitalization (because both sides are `.upper()`) without matching content lines that happen to be uppercase.
9. **B**: `info()` for normal operations; `warning()` for unexpected but non-fatal situations like missing sections.
10. **B**: Python needs the class to exist when it evaluates the return type annotation on the function.
11. **C**: FastMCP defaults to stdio transport for local process communication.
12. **B**: Resources are browsable data; tools are callable operations that require arguments.
13. **B**: An empty list is ambiguous: it could mean "no skills" or "parser failed to find the section."
14. **B**: Progress reporting updates the client's progress display with current/total values.
15. **B**: Tests define done criteria. The implementation is complete when all tests pass.
