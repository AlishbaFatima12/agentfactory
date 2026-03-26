---
sidebar_position: 10
title: "Make: Unified HireFlow MCP Server"
description: "Build a unified HireFlow MCP server combining CV parsing and job template tools, using TDG workflow with ruff, pyright, and pytest"
chapter: 70
lesson: 10
duration_minutes: 45
keywords:
  [make capstone, CV parser, job template, TDG, spec-first, production server]

skills:
  - name: "Specification-Driven MCP Server Development"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "3. Digital Content Creation"
    measurable_at_this_level: "Student can write a spec for an MCP server and implement it following the TDG workflow with discipline stack verification"

  - name: "Building Multi-Tool MCP Servers"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Create"
    digcomp_area: "5. Problem-Solving"
    measurable_at_this_level: "Student can build a production MCP server with multiple tools, Pydantic models, Context logging, and edge case handling"

learning_objectives:
  - objective: "Write a specification for two MCP servers before writing any implementation code"
    proficiency_level: "B1"
    bloom_level: "Create"
    assessment_method: "Spec document with tool definitions, input/output contracts, and success criteria"

  - objective: "Implement both servers following the TDG workflow: spec, failing tests, implementation, verification"
    proficiency_level: "B1"
    bloom_level: "Create"
    assessment_method: "Two working servers passing ruff, pyright, and pytest"

cognitive_load:
  new_concepts: 1
  assessment: "One new concept: TDG workflow for MCP servers. All technical concepts are applied from Lessons 1-9."

differentiation:
  extension_for_advanced: "Add a third server for interview question management; compose all three in a unified configuration"
  remedial_for_struggling: "Build the CV parser server only; use the job template server from Lesson 5 as-is"
---

# Make: Unified HireFlow MCP Server

You have investigated, modified, and analyzed MCP servers across nine lessons. Now you build a unified server from scratch using everything you learned.

:::danger MAKE CHALLENGE [AI-FREE: SPEC ONLY]
Write your specification BEFORE any code. Do not ask your AI assistant to write the spec.
:::

## The Challenge

Build a **unified HireFlow MCP server** that combines CV parsing and job template tools in a single server. You will implement the tools in two separate modules (for clean separation of concerns), then compose them into one server.

**CV parsing module** (`hireflow/servers/cv_tools.py`)

- Tool: `parse_cv` that takes raw CV text and returns a `ParsedCV` model
- Tool: `extract_skills` that returns only the normalized skills list
- Tool: `extract_experience` that returns structured experience entries
- Must handle edge cases: empty input, missing sections, mixed-case headers
- Must use Context for logging and progress reporting
- Must use Pydantic models for all inputs and outputs

**Job template module** (`hireflow/servers/job_template_tools.py`)

- Tool: `list_templates` that returns available template summaries
- Tool: `get_template` that returns a full template with field definitions
- Tool: `validate_job_spec` that validates a completed spec against a template
- Resource: `template://{template_id}` for browsing templates
- Must use Pydantic models for all returns
- Must validate template_id existence and return structured errors

**Unified server** (`hireflow/servers/hireflow_mcp.py`)

- Registers all 6 tools and the template resource on a single FastMCP instance
- Runs as one process that agents connect to for all HireFlow tool access

## Step 1: Write Your Spec

Before writing any code, create a specification file. Use this template:

```markdown
# Unified HireFlow MCP Server Specification

## CV Parsing Tools

- parse_cv
  - Input: [describe]
  - Output: [describe the model]
  - Edge cases: [list at least 3]

- extract_skills
  - Input: [describe]
  - Output: [describe]
  - Normalization: [describe the mapping]

- extract_experience
  - Input: [describe]
  - Output: [describe the model]

## Job Template Tools

- list_templates
  - Output: [describe]

- get_template
  - Input: [describe]
  - Output: [describe]
  - Error: [what happens for invalid template_id]

- validate_job_spec
  - Input: [describe]
  - Output: [describe]

## Resources

- template://{template_id}
  - [describe what it returns]

## Unified Server

- All 6 tools registered on a single FastMCP instance
- Logging strategy: [what gets logged at each severity level]

## Success Criteria

- [ ] All 6 tools work in MCP Inspector
- [ ] Template resource is browsable in Inspector
- [ ] Empty CV input returns structured error, not crash
- [ ] Title-case headers are handled correctly
- [ ] Skills are normalized using the alias mapping
- [ ] Invalid template_id returns error, not crash
- [ ] Validation catches missing required fields
- [ ] Context logs are visible for parse_cv
```

Save this as `hireflow/specs/hireflow-mcp-spec.md`.

## Step 2: Show Your Spec to Claude Code

After writing the spec yourself, ask Claude Code to review it:

```
Review this MCP server specification. Are there any edge cases
I missed? Are the input/output contracts complete enough for
another developer to implement without guessing?
```

Incorporate Claude's feedback into your spec. This is not asking Claude to write the spec. You wrote it. Claude reviews it.

## Step 3: Write Failing Tests

Before implementation, write tests that verify your spec's success criteria:

```python
# File: hireflow/tests/test_cv_parser.py
import pytest
from servers.cv_parser import parse_cv, extract_skills, extract_experience


def test_parse_cv_returns_all_fields():
    """parse_cv must return name, email, skills, experience, education."""
    cv = """
    Ada Lovelace
    ada@example.com

    SKILLS
    Python, Mathematics

    EXPERIENCE
    Mathematician
    Babbage Labs, 1843-1852
    Designed the first algorithm

    EDUCATION
    Home schooled, 1830
    """
    result = parse_cv(cv)
    assert result.name == "Ada Lovelace"
    assert result.email == "ada@example.com"
    assert len(result.skills) == 2
    assert len(result.experience) == 1
    assert result.education != ""


def test_parse_cv_empty_input():
    """parse_cv must handle empty input gracefully."""
    result = parse_cv("")
    # Should return error or empty ParsedCV, not crash
    assert result is not None


def test_extract_skills_normalizes():
    """extract_skills must normalize skill names."""
    cv = """
    Test Person

    SKILLS
    python, JS, fastapi, Docker
    """
    skills = extract_skills(cv)
    assert "Python" in skills
    assert "JavaScript" in skills
    assert "FastAPI" in skills
    assert "Docker" in skills


def test_parse_cv_title_case_headers():
    """parse_cv must handle title-case section headers."""
    cv = """
    Test Person
    test@example.com

    Skills
    Python

    Experience
    Developer
    TestCo, 2020-2024
    Built things

    Education
    BSc CS, 2020
    """
    result = parse_cv(cv)
    assert len(result.skills) > 0
    assert len(result.experience) > 0
    assert result.education != ""
```

```python
# File: hireflow/tests/test_job_template.py
import pytest
from servers.job_template import list_templates, get_template, validate_job_spec


def test_list_templates_returns_entries():
    """list_templates must return at least one template."""
    templates = list_templates()
    assert len(templates) > 0
    assert hasattr(templates[0], "template_id")


def test_get_template_valid_id():
    """get_template must return full template for valid ID."""
    result = get_template("swe")
    assert result.template_id == "swe"
    assert len(result.fields) > 0


def test_get_template_invalid_id():
    """get_template must handle invalid template_id gracefully."""
    result = get_template("nonexistent")
    # Should return error info, not crash
    assert result is not None


def test_validate_job_spec_missing_fields():
    """validate_job_spec must catch missing required fields."""
    from servers.job_template import JobSpecInput

    spec = JobSpecInput(
        title="Engineer",
        department="Eng",
        level="Senior",
        salary_min=100000,
        salary_max=150000,
        required_skills=["Python"],
        description="Build backend services for the platform",
    )
    result = validate_job_spec("swe", spec)
    assert result.valid is True
```

Run the tests. They should fail because the servers do not exist yet:

```bash
cd hireflow
python -m pytest tests/test_cv_parser.py tests/test_job_template.py -v
```

## Step 4: Implement

Now implement both servers. Use your spec as the guide. Incorporate everything from this chapter:

- Pydantic models for inputs and outputs (Lesson 6)
- Emma's fixed `_extract_section` with known headers set (Lesson 4)
- Skill normalization mapping (Lesson 9 Modification A)
- Context logging and progress (Lesson 7)
- Edge case handling (Lesson 3)

## Step 5: Compose the Unified Server

Create `hireflow/servers/hireflow_mcp.py` that imports tools from both modules and registers them on a single FastMCP instance:

```python
# File: hireflow/servers/hireflow_mcp.py
from mcp.server.fastmcp import FastMCP

from servers.cv_tools import parse_cv, extract_skills, extract_experience
from servers.job_template_tools import (
    list_templates, get_template, validate_job_spec, template_resource,
)

mcp = FastMCP("HireFlow")

# Register CV parsing tools
mcp.tool()(parse_cv)
mcp.tool()(extract_skills)
mcp.tool()(extract_experience)

# Register job template tools
mcp.tool()(list_templates)
mcp.tool()(get_template)
mcp.tool()(validate_job_spec)

# Register template resource
mcp.resource("template://{template_id}")(template_resource)

if __name__ == "__main__":
    mcp.run()
```

This is one approach. You may also choose to define all tools directly in `hireflow_mcp.py` or use a different composition pattern. The requirement is: one server, all six tools, one `mcp.run()`.

## Step 6: Verify with the Discipline Stack

```bash
# Lint
ruff check hireflow/servers/
ruff format hireflow/servers/

# Type check
pyright hireflow/servers/

# Test
python -m pytest tests/test_cv_parser.py tests/test_job_template.py -v

# Manual test: run the unified server
mcp dev hireflow/servers/hireflow_mcp.py
```

All four checks must pass. In the MCP Inspector, verify that all 6 tools and the template resource appear under the single "HireFlow" server.

## Step 7: Commit

```bash
git add hireflow/servers/cv_tools.py hireflow/servers/job_template_tools.py
git add hireflow/servers/hireflow_mcp.py
git add hireflow/tests/test_cv_parser.py hireflow/tests/test_job_template.py
git add hireflow/specs/hireflow-mcp-spec.md
git commit -m "feat: add unified HireFlow MCP server

Single server combining CV parsing and job template tools:
- CV tools: parse_cv, extract_skills, extract_experience
- Job tools: list_templates, get_template, validate_job_spec
- Resource: template://{template_id}

Pydantic models for all I/O, Context logging, edge case handling.
Tested with pytest, verified with ruff and pyright."
```

## Success Criteria

Your Make capstone is complete when:

- [ ] Unified HireFlow server runs in MCP Inspector with all 6 tools visible
- [ ] Template resource is browsable in Inspector
- [ ] `parse_cv` handles empty input, title-case headers, and mixed skill delimiters
- [ ] `extract_skills` normalizes skill names using the alias mapping
- [ ] `validate_job_spec` catches missing required fields
- [ ] Context logs are visible in Inspector for parse_cv
- [ ] All pytest tests pass
- [ ] `ruff check` reports no issues
- [ ] `pyright` reports no errors
- [ ] Code is committed with a descriptive message
