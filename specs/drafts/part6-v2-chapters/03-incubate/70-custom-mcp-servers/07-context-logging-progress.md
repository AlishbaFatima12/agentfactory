---
sidebar_position: 7
title: "Context, Logging, and Progress"
description: "Use the MCP Context object to add structured logging and progress reporting to your CV parser and job template servers"
chapter: 70
lesson: 7
duration_minutes: 25
keywords:
  [
    Context,
    logging,
    progress,
    info,
    warning,
    error,
    report_progress,
    observability,
  ]

skills:
  - name: "Injecting Context into MCP Tools"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "3. Digital Content Creation"
    measurable_at_this_level: "Student can add the Context parameter to tool functions and call info/warning/error logging methods"

  - name: "Designing Progress Reporting for Parsing Operations"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "5. Problem-Solving"
    measurable_at_this_level: "Student can add report_progress calls at meaningful points in a multi-step parsing operation"

learning_objectives:
  - objective: "Add Context-based logging to the CV parser to report what sections were found and what was skipped"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Server with info/warning logs visible in MCP Inspector"

  - objective: "Add progress reporting to parse_cv for tracking section extraction steps"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Progress bar visible in Inspector during tool execution"

cognitive_load:
  new_concepts: 3
  assessment: "Three concepts: Context injection, log severity levels, progress reporting. Applies C69's Context introduction to practical use."

differentiation:
  extension_for_advanced: "Add a warning when the CV has no education section and an error when no name can be extracted"
  remedial_for_struggling: "Start with a single ctx.info() call at the beginning of parse_cv; add more after that works"
---

# Context, Logging, and Progress

In Lesson 4, James's bug went unnoticed because the parser returned silently incorrect results. The education section got absorbed into experience, but the tool returned successfully with no indication that something went wrong. The caller had no way to know the data was corrupted.

The **Context** object solves this. You saw Context briefly in Chapter 69 when we covered the MCP architecture. Now you will use it for real: adding structured logging that reports what the parser found, what it skipped, and how far along it is.

"My CV parser returns the data. Why do I need logging?" James asked.

"Because the data might be wrong," Emma said. "Your parse_cv returned 'Education' as a job title. If you had logged 'Warning: section boundary detection may be incorrect for line Education', would you have caught the bug sooner?"

"I would have seen it in the logs the first time it happened, instead of after a hiring manager complained."

"Exactly. Logging is not for debugging after the fact. It is for catching problems as they happen."

## Adding Context to the CV Parser

Context is injected by type annotation. Add `ctx: Context` to any tool function, and FastMCP provides it automatically. The parameter name can be anything as long as the type is `Context`.

```python
from mcp.server.fastmcp import Context, FastMCP
from pydantic import BaseModel, Field

mcp = FastMCP("CV Parser")


class ParsedCV(BaseModel):
    """Structured output from CV parsing."""

    name: str = Field(description="Candidate's full name")
    email: str = Field(description="Candidate's email address")
    skills: list[str] = Field(description="List of technical and soft skills")
    experience: list[dict[str, str]] = Field(description="Work experience entries")
    education: str = Field(description="Education background")


@mcp.tool()
async def parse_cv(
    cv_text: str = Field(description="Raw CV text to parse"),
    ctx: Context = None,
) -> ParsedCV:
    """Parse a raw CV text into structured candidate data."""
    await ctx.info("Starting CV parse")

    lines = cv_text.strip().split("\n")
    if not lines or not lines[0].strip():
        await ctx.warning("CV text is empty or starts with a blank line")

    # Extract name
    name = lines[0].strip() if lines else ""
    await ctx.info(f"Extracted name: {name}")

    # Extract email
    email = ""
    for line in lines:
        if "@" in line and "." in line:
            email = line.strip()
            break
    if not email:
        await ctx.warning("No email address found in CV")

    # Extract sections with progress reporting
    sections = ["SKILLS", "EXPERIENCE", "EDUCATION"]
    total_sections = len(sections)

    await ctx.report_progress(progress=0, total=total_sections)

    skills_text = _extract_section(cv_text, "SKILLS")
    skills = _parse_skills(skills_text)
    if not skills:
        await ctx.warning("No skills found: SKILLS section may be missing or empty")
    else:
        await ctx.info(f"Found {len(skills)} skills")
    await ctx.report_progress(progress=1, total=total_sections)

    exp_text = _extract_section(cv_text, "EXPERIENCE")
    experience = _parse_experience(exp_text)
    if not experience:
        await ctx.warning("No experience found: EXPERIENCE section may be missing")
    else:
        await ctx.info(f"Found {len(experience)} experience entries")
    await ctx.report_progress(progress=2, total=total_sections)

    education = _extract_section(cv_text, "EDUCATION")
    if not education:
        await ctx.warning("No education found: EDUCATION section may be missing")
    await ctx.report_progress(progress=3, total=total_sections)

    await ctx.info("CV parse complete")

    return ParsedCV(
        name=name,
        email=email,
        skills=skills,
        experience=experience,
        education=education,
    )
```

**Key changes:**

1. The function is now `async` because Context methods (`info`, `warning`, `report_progress`) are async.
2. `ctx: Context` is added after the `*` separator. FastMCP injects it; the caller never provides it.
3. `await ctx.info(...)` logs what the parser found at each step.
4. `await ctx.warning(...)` flags when expected data is missing.
5. `await ctx.report_progress(progress, total)` reports completion for the three-section extraction.

## Log Severity Levels

Context provides four severity levels:

| Method             | When to Use                           | Example                                |
| ------------------ | ------------------------------------- | -------------------------------------- |
| `ctx.debug(...)`   | Developer-only details                | `"Checking line 47 for email pattern"` |
| `ctx.info(...)`    | Normal operational events             | `"Found 5 skills"`                     |
| `ctx.warning(...)` | Unexpected but recoverable situations | `"No education section found"`         |
| `ctx.error(...)`   | Failures that affect output quality   | `"Failed to parse experience section"` |

**Rule of thumb:** If the tool returns a result, use `info` or `warning`. If the tool cannot complete, use `error`. Reserve `debug` for information that only matters during development.

## Progress Reporting

`report_progress` takes two required arguments:

```python
await ctx.report_progress(progress=current_step, total=total_steps)
```

The client displays this as a progress indicator. For the CV parser, the three sections (skills, experience, education) make natural progress steps. For a batch operation processing 100 CVs, you would report progress within the loop:

```python
@mcp.tool()
async def batch_parse(
    cv_texts: list[str] = Field(description="List of CV texts to parse"),
    ctx: Context = None,
) -> list[ParsedCV]:
    """Parse multiple CVs with progress tracking."""
    results: list[ParsedCV] = []
    total = len(cv_texts)
    await ctx.info(f"Starting batch parse of {total} CVs")

    for i, cv_text in enumerate(cv_texts):
        parsed = await parse_single_cv(cv_text)
        results.append(parsed)
        await ctx.report_progress(progress=i + 1, total=total)

    await ctx.info(f"Batch complete: {len(results)} CVs parsed")
    return results
```

## AI-Assisted Investigation

Now ask Claude Code to trace the logging for a specific input.

**Prompt:**

```
Here is my CV parser tool with Context logging. Trace the exact
sequence of log messages (info and warning) when parse_cv receives
this input:

"
Kai Tanaka
EXPERIENCE
Tech Lead at Startup
"

List every ctx.info() and ctx.warning() call in order, with the
exact message string. Then explain: does the caller have enough
information from the logs to know that the skills and education
sections are missing?
```

Compare Claude's trace with your own manual trace. Pay attention to:

- Does Claude correctly identify that there is no email? (The input has no `@`)
- Does Claude correctly predict the warning for missing skills?
- Does Claude correctly predict the warning for missing education?
- Does Claude miss any logging calls?

This is the same AI-as-Teacher pattern from Chapter 69: you trace first, then use AI to verify. The value is in the comparison, not the AI's answer alone.

## Testing in the Inspector

Run the updated CV parser with Context logging:

```bash
cd hireflow
mcp dev servers/cv_parser_server.py
```

In the MCP Inspector:

1. Call `parse_cv` with a complete CV. Check the logs panel: you should see `info` messages for each section.
2. Call `parse_cv` with a CV missing the EDUCATION section. Check for a `warning` message.
3. Call `parse_cv` with an empty string. You should see multiple warnings.

The logs tell the story of what happened during parsing. When the Resume Screener agent in Chapter 79 calls this tool and gets an empty skills list, the logs explain why: "No skills found: SKILLS section may be missing or empty." The agent can decide whether to proceed or request a different CV format.
