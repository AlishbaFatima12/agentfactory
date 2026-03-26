---
sidebar_position: 6
title: "Input Validation with Pydantic Models"
description: "Replace plain dictionaries with Pydantic BaseModel for type-safe tool inputs, structured outputs, and automatic schema generation in MCP servers"
chapter: 70
lesson: 6
duration_minutes: 30
keywords:
  [Pydantic, BaseModel, Field, input validation, structured output, type safety]

skills:
  - name: "Using Pydantic Models for MCP Tool Schemas"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "3. Digital Content Creation"
    measurable_at_this_level: "Student can define Pydantic BaseModel classes for MCP tool return types and use Field for input parameter documentation"

  - name: "Designing Structured Output Types"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "5. Problem-Solving"
    measurable_at_this_level: "Student can design output models that downstream agents can consume without parsing dictionaries"

learning_objectives:
  - objective: "Replace dataclass and dict returns with Pydantic BaseModel for tool outputs"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Refactored CV parser server returning ParsedCV model instead of plain dict"

  - objective: "Add Field descriptions and constraints to tool input parameters"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Tool parameters with Field(description=..., min_length=...) constraints"

  - objective: "Explain how FastMCP generates JSON schemas from Pydantic models"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Written explanation of how model annotations become JSON Schema for MCP clients"

cognitive_load:
  new_concepts: 4
  assessment: "Four concepts: BaseModel for output, Field for input docs, automatic schema generation, model vs dict tradeoffs. Builds on Part 4 Pydantic basics."

differentiation:
  extension_for_advanced: "Add custom validators with @field_validator for salary range consistency in job templates"
  remedial_for_struggling: "Start by converting just ParsedCV from dataclass to BaseModel; add Field descriptions after that works"
---

# Input Validation with Pydantic Models

Both servers from the previous lessons return plain dictionaries. The CV parser returns `{"name": "...", "email": "...", "skills": [...]}`. The job template server returns `{"template_id": "...", "title": "...", "fields": [...]}`. This works, but it has three problems.

**Problem 1: No documentation.** When an agent discovers the `parse_cv` tool, the MCP schema shows `cv_text: str`. That is all the information the agent gets. It does not know what format the string should be in, how long it should be, or what happens with empty input.

**Problem 2: No output contract.** The return type is `dict[str, object]`. The calling agent must guess which keys exist. If you rename `"skills"` to `"technical_skills"` in a future version, nothing catches the break until runtime.

**Problem 3: No validation.** The `validate_job_spec` tool accepts `job_spec` as a raw JSON string and parses it manually. If the caller sends a non-JSON string, the tool catches it with a try/except. But there is no validation of field types, value ranges, or format constraints.

Pydantic models solve all three problems at once.

## Pydantic for Tool Outputs

Replace the `ParsedCV` dataclass with a Pydantic `BaseModel`:

```python
from pydantic import BaseModel, Field


class ParsedCV(BaseModel):
    """Structured output from CV parsing."""

    name: str = Field(description="Candidate's full name")
    email: str = Field(description="Candidate's email address")
    skills: list[str] = Field(description="List of technical and soft skills")
    experience: list[dict[str, str]] = Field(
        description="Work experience entries with title and details"
    )
    education: str = Field(description="Education background")
```

Now update `parse_cv` to return this model:

```python
@mcp.tool()
def parse_cv(
    cv_text: str = Field(description="Raw CV text to parse into structured data"),
) -> ParsedCV:
    """Parse a raw CV text into structured candidate data."""
    lines = cv_text.strip().split("\n")
    name = lines[0].strip() if lines else ""
    email = ""
    for line in lines:
        if "@" in line and "." in line:
            email = line.strip()
            break

    skills_text = _extract_section(cv_text, "SKILLS")
    skills = _parse_skills(skills_text)

    exp_text = _extract_section(cv_text, "EXPERIENCE")
    experience = _parse_experience(exp_text)

    education = _extract_section(cv_text, "EDUCATION")

    return ParsedCV(
        name=name,
        email=email,
        skills=skills,
        experience=experience,
        education=education,
    )
```

**What changed:**

1. The return type is `ParsedCV` instead of `dict[str, object]`. FastMCP reads the model's field definitions and generates a JSON Schema for the tool's output. Agents see exactly what fields to expect.

2. The `cv_text` parameter has a `Field(description=...)`. FastMCP includes this description in the tool's input schema. Agents know what the parameter is for.

3. The function returns a `ParsedCV` instance, not a dictionary. FastMCP serializes it to JSON automatically. You never call `.model_dump()` yourself.

## Pydantic for Experience Entries

The experience entries are currently `list[dict[str, str]]`, which tells the caller nothing about the dictionary structure. Replace with a model:

```python
class ExperienceEntry(BaseModel):
    """A single work experience entry."""

    title: str = Field(description="Job title or role name")
    company: str = Field(description="Company name")
    period: str = Field(description="Employment period, e.g. '2021-2024'")
    details: str = Field(description="Description of responsibilities and achievements")


class ParsedCV(BaseModel):
    """Structured output from CV parsing."""

    name: str = Field(description="Candidate's full name")
    email: str = Field(description="Candidate's email address")
    skills: list[str] = Field(description="List of technical and soft skills")
    experience: list[ExperienceEntry] = Field(
        description="Work experience entries"
    )
    education: str = Field(description="Education background")
```

Now `_parse_experience` needs updating to return `ExperienceEntry` objects:

```python
def _parse_experience(exp_text: str) -> list[ExperienceEntry]:
    """Parse experience entries separated by blank lines."""
    entries: list[ExperienceEntry] = []
    current_lines: list[str] = []
    for line in exp_text.split("\n"):
        if line.strip() == "" and current_lines:
            entry = _build_experience_entry(current_lines)
            entries.append(entry)
            current_lines = []
        elif line.strip():
            current_lines.append(line.strip())
    if current_lines:
        entry = _build_experience_entry(current_lines)
        entries.append(entry)
    return entries


def _build_experience_entry(lines: list[str]) -> ExperienceEntry:
    """Build an ExperienceEntry from a group of lines."""
    title = lines[0] if lines else ""
    company = ""
    period = ""
    details_lines: list[str] = []
    if len(lines) > 1:
        # Second line often has "Company, Period" format
        second = lines[1]
        if "," in second:
            parts = second.split(",", 1)
            company = parts[0].strip()
            period = parts[1].strip()
        else:
            company = second
        details_lines = lines[2:]
    return ExperienceEntry(
        title=title,
        company=company,
        period=period,
        details=" ".join(details_lines),
    )
```

## Pydantic for Job Template Validation

The `validate_job_spec` tool currently accepts a raw JSON string and parses it with `json.loads()`. Pydantic can do this better. Define a model for the job spec input:

```python
class JobSpecInput(BaseModel):
    """A completed job specification to validate."""

    title: str = Field(description="Job title")
    department: str = Field(description="Department name")
    level: str = Field(description="Seniority level: Junior, Mid, Senior, Lead, Principal")
    salary_min: int = Field(description="Minimum annual salary in USD", ge=0)
    salary_max: int = Field(description="Maximum annual salary in USD", ge=0)
    required_skills: list[str] = Field(description="Required technical skills")
    preferred_skills: list[str] = Field(
        default_factory=list, description="Nice-to-have skills"
    )
    description: str = Field(description="Full job description text", min_length=10)
```

Now the tool accepts structured input instead of a JSON string:

```python
@mcp.tool()
def validate_job_spec(
    template_id: str = Field(description="Template to validate against"),
    spec: JobSpecInput = Field(description="Completed job specification"),
) -> dict[str, object]:
    """Validate a completed job spec against its template."""
    template = TEMPLATES.get(template_id)
    if template is None:
        return {"valid": False, "errors": [f"Unknown template: {template_id}"]}

    errors: list[str] = []
    if spec.salary_min > spec.salary_max:
        errors.append(
            f"salary_min ({spec.salary_min}) exceeds salary_max ({spec.salary_max})"
        )
    if not spec.required_skills:
        errors.append("required_skills cannot be empty")

    return {
        "valid": len(errors) == 0,
        "errors": errors,
        "fields_checked": len(template.fields),
    }
```

**What changed:** The `spec` parameter is a `JobSpecInput` model, not a JSON string. FastMCP handles deserialization. If the caller sends invalid data (negative salary, missing required field, description shorter than 10 characters), Pydantic raises a validation error before your tool code runs. You never need `try/except json.JSONDecodeError` again.

## How FastMCP Uses Pydantic Models

When you define a tool with Pydantic types, FastMCP does three things:

1. **Input schema generation**: FastMCP reads the model's fields and generates a JSON Schema. The `Field(description=...)` values become field descriptions in the schema. Constraints like `ge=0` and `min_length=10` become JSON Schema validation rules.

2. **Automatic deserialization**: When an agent calls the tool with JSON arguments, FastMCP constructs the Pydantic model from the JSON. If validation fails, the agent gets a structured error before your code runs.

3. **Output schema generation**: When your tool returns a Pydantic model (like `ParsedCV`), FastMCP generates an output schema. Agents can read this schema to know exactly what fields the response contains.

| Approach                       | Input Validation | Output Contract | Documentation      | Schema           |
| ------------------------------ | ---------------- | --------------- | ------------------ | ---------------- |
| Plain `str` + `dict`           | Manual           | None            | None               | Minimal          |
| Pydantic `BaseModel` + `Field` | Automatic        | Typed           | Field descriptions | Full JSON Schema |

## Try With AI

**Prompt 1: Review the refactored CV parser**

```
Here is my CV parser MCP server that uses Pydantic models for input
and output. Review the ParsedCV and ExperienceEntry models.
Are there any fields I should add for a production recruitment system?
What validation constraints would you recommend?
```

**What you are learning:** How AI identifies gaps in data models. Compare its suggestions against what you think a hiring manager would need.

**Prompt 2: Generate a ValidationResult model**

```
The validate_job_spec tool returns a plain dict. Design a Pydantic
model called ValidationResult that replaces it. Include fields for
valid (bool), errors (list of strings), warnings (list of strings
for non-critical issues), and fields_checked (int). Add appropriate
Field descriptions.
```

**What you are learning:** How to convert ad-hoc return values into formal contracts. Evaluate whether Claude's model matches what you would design.
