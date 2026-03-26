---
sidebar_position: 9
title: "Modify Exercises: Extend the Servers"
description: "Three progressive modifications to the CV parser and job template servers: skill normalization, input validation, and Pydantic model refactoring"
chapter: 70
lesson: 9
duration_minutes: 35
keywords:
  [
    modify,
    exercises,
    skill normalization,
    validation,
    Pydantic models,
    progressive difficulty,
  ]

skills:
  - name: "Modifying MCP Server Tools"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "3. Digital Content Creation"
    measurable_at_this_level: "Student can modify existing MCP tool functions to add new capabilities without breaking existing behavior"

  - name: "Adding Validation Logic to Tools"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "5. Problem-Solving"
    measurable_at_this_level: "Student can add input validation and edge case handling to tool functions"

  - name: "Refactoring Tool Output Types"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "3. Digital Content Creation"
    measurable_at_this_level: "Student can replace ad-hoc return types with well-designed Pydantic models"

learning_objectives:
  - objective: "Add skill normalization to the CV parser's extract_skills tool"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Modified tool that normalizes common skill name variations"

  - objective: "Add input validation to parse_cv that rejects empty or too-short input"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Tool that returns structured validation errors for invalid input"

  - objective: "Refactor the job template server to use Pydantic models for all tool returns"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "All three job template tools returning typed Pydantic models"

cognitive_load:
  new_concepts: 1
  assessment: "One new concept: progressive modification. All other concepts are applied from Lessons 2-7."

differentiation:
  extension_for_advanced: "Add a fourth modification: combine both servers into a unified server using FastMCP server composition"
  remedial_for_struggling: "Complete Modification A only; use Claude Code to help with B and C"
---

# Modify Exercises: Extend the Servers

These three modifications operate on the servers you have already built. Each builds on the previous lesson's concepts. Start with Modification A and work through to C.

## Modification A: Skill Normalization (Simple, 1-3 lines)

The `extract_skills` tool returns raw skill names exactly as they appear in the CV. But candidates write the same skill differently: "Python", "python", "PYTHON", "py", "Python3". Downstream agents comparing skills across candidates need normalized names.

**Your task:** Modify `extract_skills` to normalize skill names using a mapping dictionary.

:::tip PREDICT BEFORE RUNNING
Before running your modified code, predict the output for this input:

```
SKILLS
python, JS, fastapi, pg, Docker
```

What will each skill normalize to? Write your prediction, then run and compare.
:::

**Starter code** (add this to your CV parser server):

```python
SKILL_ALIASES: dict[str, str] = {
    "py": "Python",
    "python": "Python",
    "python3": "Python",
    "js": "JavaScript",
    "javascript": "JavaScript",
    "ts": "TypeScript",
    "typescript": "TypeScript",
    "fastapi": "FastAPI",
    "pg": "PostgreSQL",
    "postgres": "PostgreSQL",
    "k8s": "Kubernetes",
}


def _normalize_skill(raw: str) -> str:
    """Normalize a skill name using known aliases."""
    return SKILL_ALIASES.get(raw.lower().strip(), raw.strip())
```

**Modification:** Update `_parse_skills` to call `_normalize_skill` on each skill before returning the list. This is a 1-line change inside the list comprehension.

**Expected result for the input above:**

```json
["Python", "JavaScript", "FastAPI", "PostgreSQL", "Docker"]
```

"Docker" stays unchanged because it is not in the alias mapping and is already properly capitalized.

**Verify:** Run your modified server in the Inspector. Test with skills that include aliases (`py`, `js`, `pg`) and skills not in the mapping (`Docker`, `React`).

---

## Modification B: Input Validation (Medium, 3-8 lines)

The `parse_cv` tool accepts any string, including empty strings and single characters. In Lesson 3, we saw that empty input produces an all-empty ParsedCV with no warnings to the caller. Fix this by adding validation before parsing begins.

:::tip PREDICT BEFORE RUNNING
Before running your modified code, predict what happens when you call `parse_cv("")` and `parse_cv("Hi")`. Will they return parsed results, raise errors, or return validation messages? Write your prediction, then run and compare.
:::

**Your task:** Add validation at the start of `parse_cv` that:

1. Rejects empty or whitespace-only input with a structured error
2. Rejects input shorter than 20 characters (too short to be a real CV) with a warning
3. Logs the input length with `ctx.info()`

**Requirements:**

- Return a `dict` with `{"error": "...", "valid": False}` for invalid input instead of raising an exception
- Use `ctx.warning()` for the too-short check
- Continue parsing for short-but-non-empty input (it might be a partial CV)

**Starter structure:**

```python
@mcp.tool()
async def parse_cv(
    cv_text: str = Field(description="Raw CV text to parse"),
    ctx: Context = None,
) -> ParsedCV | dict[str, str]:
    """Parse a raw CV text into structured candidate data."""
    stripped = cv_text.strip()
    await ctx.info(f"Received CV text: {len(stripped)} characters")

    if not stripped:
        await ctx.error("Empty CV text received")
        # YOUR CODE: return error dict
        pass

    if len(stripped) < 20:
        await ctx.warning(f"CV text is very short ({len(stripped)} chars), may be incomplete")

    # ... rest of parsing logic
```

**Verify:** Test in the Inspector with:

- Empty string `""`: should return error dict
- `"Short text"`: should log warning but attempt parse
- A full CV: should parse normally with info logs

---

## Modification C: Pydantic Models for Job Templates (Advanced, 8+ lines)

The job template server's `list_templates` and `get_template` tools return plain dictionaries. Refactor them to return Pydantic models.

:::tip PREDICT BEFORE RUNNING
Before running your refactored code, predict: will the MCP Inspector show any difference in the tool's output? Will the JSON look the same or different? What about the tool's schema in the Inspector's tool list? Write your prediction, then run and compare.
:::

**Your task:** Define these models and update the tools:

1. **`TemplateListItem`** model with `template_id: str`, `title: str`, `department: str`
2. **`TemplateDetail`** model with `template_id: str`, `title: str`, `department: str`, `fields: list[TemplateFieldInfo]`
3. **`TemplateFieldInfo`** model with `name: str`, `field_type: str`, `required: bool`, `description: str`, `example: str`
4. **`ValidationResult`** model with `valid: bool`, `errors: list[str]`, `fields_checked: int`

Update all three tools to return the appropriate model:

```python
class TemplateFieldInfo(BaseModel):
    """Schema for a single field in a job template."""

    name: str = Field(description="Field name")
    field_type: str = Field(description="Expected data type")
    required: bool = Field(description="Whether this field is required")
    description: str = Field(description="What this field represents")
    example: str = Field(description="Example value")


class TemplateListItem(BaseModel):
    """Summary of a job template for listing."""

    template_id: str = Field(description="Unique template identifier")
    title: str = Field(description="Template title")
    department: str = Field(description="Department this template belongs to")


class TemplateDetail(BaseModel):
    """Full job template with all field definitions."""

    template_id: str = Field(description="Unique template identifier")
    title: str = Field(description="Template title")
    department: str = Field(description="Department")
    fields: list[TemplateFieldInfo] = Field(description="Template field definitions")


class ValidationResult(BaseModel):
    """Result of validating a job spec against a template."""

    valid: bool = Field(description="Whether the spec passes validation")
    errors: list[str] = Field(description="List of validation errors")
    fields_checked: int = Field(description="Number of template fields checked")


@mcp.tool()
def list_templates() -> list[TemplateListItem]:
    """List all available job specification templates."""
    return [
        TemplateListItem(
            template_id=t.template_id,
            title=t.title,
            department=t.department,
        )
        for t in TEMPLATES.values()
    ]
```

**Verify:** After refactoring:

1. The JSON output in the Inspector should look identical (same field names and values)
2. The tool schemas in the Inspector's tool list should now show detailed output schemas with field descriptions
3. `ruff check` and `pyright` should pass with no errors

**What you gained:** The output is the same, but the contract is explicit. Any agent that calls `list_templates` knows it gets `TemplateListItem` objects with exactly three fields. If you accidentally remove a field in a future update, pyright catches it at edit time, not at runtime.
