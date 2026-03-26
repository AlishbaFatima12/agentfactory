---
sidebar_position: 5
title: "Job Template Server"
description: "Build a second MCP server that serves standardized job specification templates and validates completed job specs against schemas"
chapter: 70
lesson: 5
duration_minutes: 25
keywords:
  [job template, MCP server, resources, structured templates, validation]

skills:
  - name: "Building Resource-Based MCP Servers"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "3. Digital Content Creation"
    measurable_at_this_level: "Student can build an MCP server that combines tools and resources to serve structured data"

  - name: "Designing Domain-Specific Tool Schemas"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "5. Problem-Solving"
    measurable_at_this_level: "Student can design tool input/output schemas that match the domain requirements of job specification management"

learning_objectives:
  - objective: "Build an MCP server with tools for listing, retrieving, and validating job specification templates"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Working server tested in MCP Inspector with three functional tools"

  - objective: "Combine @mcp.tool and @mcp.resource decorators in a single server for different access patterns"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Server exposes templates as both callable tools and browsable resources"

cognitive_load:
  new_concepts: 3
  assessment: "Three concepts: template-based data serving, schema validation tools, combining tools with resources. Builds on C69's resource decorator."

differentiation:
  extension_for_advanced: "Add a @mcp.prompt that generates a template-filling guide for hiring managers"
  remedial_for_struggling: "Start with just get_template and list_templates; add validate_job_spec after those work"
---

# Job Template Server

The CV parser handles the candidate side of HireFlow. The other side is the job itself. When the Job Spec Writer agent (one of your four skills from Chapter 67) creates a new job posting, it needs a template: what fields are required, what formats are expected, what values are valid.

This is a different kind of server from the CV parser. The CV parser transforms messy input into structured output. The job template server serves pre-defined structures and validates completed specs against those structures. It is read-heavy, rarely changes, and should be fast.

James looked at his CV parser server. "I could add the template tools here. Same server, same process."

Emma shook her head. "Different responsibility, different server. The CV parser handles candidate data that changes with every request. Templates are stable reference data. If you update a template, you do not want to restart the CV parser. If the CV parser crashes from a malformed input, you do not want template lookups to go down."

"So every domain gets its own server?"

"Every responsibility gets its own server. The domain might have several responsibilities."

## The Template Data

Before building the server, define what a job template contains. Here is the data structure for HireFlow job templates:

```python
# File: hireflow/servers/job_template_server.py
from dataclasses import dataclass, field

from mcp.server.fastmcp import FastMCP

mcp = FastMCP("Job Templates")


@dataclass
class TemplateField:
    name: str
    field_type: str
    required: bool
    description: str
    example: str


@dataclass
class JobTemplate:
    template_id: str
    title: str
    department: str
    fields: list[TemplateField]


# Template registry (in production, this would be a database)
TEMPLATES: dict[str, JobTemplate] = {
    "swe": JobTemplate(
        template_id="swe",
        title="Software Engineer",
        department="Engineering",
        fields=[
            TemplateField("title", "str", True, "Job title", "Senior Backend Engineer"),
            TemplateField("department", "str", True, "Department name", "Engineering"),
            TemplateField("level", "str", True, "Seniority level", "Senior"),
            TemplateField("salary_min", "int", True, "Minimum salary in USD", "120000"),
            TemplateField("salary_max", "int", True, "Maximum salary in USD", "180000"),
            TemplateField(
                "required_skills", "list[str]", True,
                "Required technical skills", "Python, FastAPI, PostgreSQL",
            ),
            TemplateField(
                "preferred_skills", "list[str]", False,
                "Nice-to-have skills", "Kubernetes, GraphQL",
            ),
            TemplateField(
                "description", "str", True,
                "Job description", "Build and maintain backend services...",
            ),
        ],
    ),
    "pm": JobTemplate(
        template_id="pm",
        title="Product Manager",
        department="Product",
        fields=[
            TemplateField("title", "str", True, "Job title", "Senior Product Manager"),
            TemplateField("department", "str", True, "Department name", "Product"),
            TemplateField("level", "str", True, "Seniority level", "Senior"),
            TemplateField("salary_min", "int", True, "Minimum salary in USD", "130000"),
            TemplateField("salary_max", "int", True, "Maximum salary in USD", "190000"),
            TemplateField(
                "required_skills", "list[str]", True,
                "Required skills", "Product Strategy, User Research, SQL",
            ),
            TemplateField(
                "description", "str", True,
                "Job description", "Define product roadmap and drive execution...",
            ),
        ],
    ),
}
```

## The Server Tools

The job template server has three tools:

```python
@mcp.tool()
def list_templates() -> list[dict[str, str]]:
    """List all available job specification templates."""
    return [
        {
            "template_id": t.template_id,
            "title": t.title,
            "department": t.department,
        }
        for t in TEMPLATES.values()
    ]


@mcp.tool()
def get_template(template_id: str) -> dict[str, object]:
    """Get a specific job template with all field definitions."""
    template = TEMPLATES.get(template_id)
    if template is None:
        return {"error": f"Template '{template_id}' not found", "available": list(TEMPLATES.keys())}
    return {
        "template_id": template.template_id,
        "title": template.title,
        "department": template.department,
        "fields": [
            {
                "name": f.name,
                "type": f.field_type,
                "required": f.required,
                "description": f.description,
                "example": f.example,
            }
            for f in template.fields
        ],
    }


@mcp.tool()
def validate_job_spec(template_id: str, job_spec: str) -> dict[str, object]:
    """Validate a completed job spec against its template.

    Args:
        template_id: Which template to validate against
        job_spec: JSON string of the completed job specification
    """
    import json

    template = TEMPLATES.get(template_id)
    if template is None:
        return {"valid": False, "errors": [f"Unknown template: {template_id}"]}

    try:
        spec = json.loads(job_spec)
    except json.JSONDecodeError as e:
        return {"valid": False, "errors": [f"Invalid JSON: {str(e)}"]}

    errors: list[str] = []
    for template_field in template.fields:
        if template_field.required and template_field.name not in spec:
            errors.append(f"Missing required field: {template_field.name}")

    return {
        "valid": len(errors) == 0,
        "errors": errors,
        "fields_checked": len(template.fields),
    }
```

## Adding a Resource

Templates are also good candidates for MCP resources. While tools require the client to call them with arguments, resources are browsable data that clients can discover and read. Add a resource that exposes each template at a URI:

```python
@mcp.resource("template://{template_id}")
def template_resource(template_id: str) -> str:
    """Browse a job template as a resource."""
    import json

    template = TEMPLATES.get(template_id)
    if template is None:
        return f"Template '{template_id}' not found"
    return json.dumps(
        {
            "template_id": template.template_id,
            "title": template.title,
            "fields": [
                {"name": f.name, "type": f.field_type, "required": f.required}
                for f in template.fields
            ],
        },
        indent=2,
    )


if __name__ == "__main__":
    mcp.run()
```

## Testing the Server

Run the server with the MCP Inspector:

```bash
cd hireflow
mcp dev servers/job_template_server.py
```

Test each tool:

1. **list_templates**: No arguments needed. Should return two entries: `swe` and `pm`.

2. **get_template**: Set `template_id` to `"swe"`. Should return the full Software Engineer template with eight fields.

3. **validate_job_spec**: Set `template_id` to `"swe"` and `job_spec` to:

```json
{ "title": "Backend Engineer", "department": "Engineering", "level": "Senior" }
```

This spec is missing required fields (`salary_min`, `salary_max`, `required_skills`, `description`). The tool should return `{"valid": false, "errors": [...]}` with four error messages.

4. **Browse the resource**: In the Inspector's Resources tab, click `template://swe` to see the template rendered as browsable content.

## Two Servers Running

You now have two MCP servers for HireFlow:

| Server        | File                             | Tools                                                 | Resources         |
| ------------- | -------------------------------- | ----------------------------------------------------- | ----------------- |
| CV Parser     | `servers/cv_parser_server.py`    | `parse_cv`, `extract_skills`, `extract_experience`    | None              |
| Job Templates | `servers/job_template_server.py` | `list_templates`, `get_template`, `validate_job_spec` | `template://{id}` |

Each runs independently. Each can be configured in Claude Desktop or connected to agents separately. In Chapter 71, you will wire both servers to agent skills so that an agent can parse a CV AND retrieve a job template in a single workflow.

Notice what both servers share: they return plain dictionaries. The CV parser uses a dataclass internally but converts to a dict for the return value. The job template server builds dicts directly. In the next lesson, you will replace these with Pydantic models that give you validation, documentation, and type safety at the tool boundary.
