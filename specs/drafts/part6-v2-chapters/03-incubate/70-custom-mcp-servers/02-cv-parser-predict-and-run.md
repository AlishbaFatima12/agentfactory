---
sidebar_position: 2
title: "CV Parser Server: Predict and Run"
description: "Read James's CV parser MCP server code, predict its behavior, then run it to compare your prediction against actual output"
chapter: 70
lesson: 2
duration_minutes: 25
keywords: [CV parser, MCP server, predict, FastMCP, parse_cv, structured output]

skills:
  - name: "Reading Multi-Tool MCP Server Code"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Understand"
    digcomp_area: "3. Digital Content Creation"
    measurable_at_this_level: "Student can read an MCP server with multiple tools and predict what each tool returns for given inputs"

  - name: "Predicting Tool Output from Code"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Analyze"
    digcomp_area: "5. Problem-Solving"
    measurable_at_this_level: "Student can trace through a tool function's logic and predict the structured output for a specific input"

learning_objectives:
  - objective: "Read a multi-tool MCP server and identify each tool's purpose, inputs, and return type"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Written description of each tool's role in the CV parser server"

  - objective: "Predict the output of parse_cv for a specific CV text input by tracing through the parsing logic"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Written prediction compared against actual output from running the server"

cognitive_load:
  new_concepts: 4
  assessment: "Four concepts: multi-tool server, string parsing for data extraction, structured return types, tool input/output contracts. Builds on C69 single-tool server."

differentiation:
  extension_for_advanced: "Predict what happens when the CV text contains Unicode characters or non-English section headers"
  remedial_for_struggling: "Focus on parse_cv only; trace through one section extraction at a time before attempting full prediction"
---

# CV Parser Server: Predict and Run

Here is a complete MCP server that James wrote for parsing candidate CVs. The server has three tools: `parse_cv` extracts all structured data from raw CV text, `extract_skills` pulls out the skills list, and `extract_experience` returns work history entries.

Read the code carefully. Do not scroll past the prediction box until you have written your answers.

```python
# File: hireflow/servers/cv_parser_server.py
from dataclasses import dataclass

from mcp.server.fastmcp import FastMCP

mcp = FastMCP("CV Parser")


@dataclass
class ParsedCV:
    name: str
    email: str
    skills: list[str]
    experience: list[dict[str, str]]
    education: str


def _extract_section(text: str, header: str) -> str:
    """Extract content between a header and the next header or end of text."""
    lines = text.strip().split("\n")
    capturing = False
    result_lines: list[str] = []
    for line in lines:
        if line.strip().upper() == header.upper():
            capturing = True
            continue
        if capturing and line.strip().isupper() and len(line.strip()) > 2:
            break
        if capturing:
            result_lines.append(line.strip())
    return "\n".join(result_lines).strip()


def _parse_skills(skills_text: str) -> list[str]:
    """Parse comma-separated or newline-separated skills."""
    if "," in skills_text:
        return [s.strip() for s in skills_text.split(",") if s.strip()]
    return [s.strip() for s in skills_text.split("\n") if s.strip()]


def _parse_experience(exp_text: str) -> list[dict[str, str]]:
    """Parse experience entries separated by blank lines."""
    entries: list[dict[str, str]] = []
    current_lines: list[str] = []
    for line in exp_text.split("\n"):
        if line.strip() == "" and current_lines:
            entry = {
                "title": current_lines[0] if current_lines else "",
                "details": " ".join(current_lines[1:]),
            }
            entries.append(entry)
            current_lines = []
        elif line.strip():
            current_lines.append(line.strip())
    if current_lines:
        entry = {
            "title": current_lines[0],
            "details": " ".join(current_lines[1:]),
        }
        entries.append(entry)
    return entries


@mcp.tool()
def parse_cv(cv_text: str) -> dict[str, object]:
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

    parsed = ParsedCV(
        name=name,
        email=email,
        skills=skills,
        experience=experience,
        education=education,
    )
    return {
        "name": parsed.name,
        "email": parsed.email,
        "skills": parsed.skills,
        "experience": parsed.experience,
        "education": parsed.education,
    }


@mcp.tool()
def extract_skills(cv_text: str) -> list[str]:
    """Extract only the skills list from a CV."""
    skills_text = _extract_section(cv_text, "SKILLS")
    return _parse_skills(skills_text)


@mcp.tool()
def extract_experience(cv_text: str) -> list[dict[str, str]]:
    """Extract only work experience entries from a CV."""
    exp_text = _extract_section(cv_text, "EXPERIENCE")
    return _parse_experience(exp_text)


if __name__ == "__main__":
    mcp.run()
```

Now consider this CV text that an agent sends to the `parse_cv` tool:

```
Amara Okafor
amara.okafor@email.com

SKILLS
Python, FastAPI, PostgreSQL, Docker

EXPERIENCE
Senior Backend Engineer
Acme Corp, 2021-2024
Built microservices architecture serving 10k requests/sec

Junior Developer
StartupXYZ, 2019-2021
Maintained Django REST API

EDUCATION
BSc Computer Science, University of Lagos, 2019
```

:::warning STOP AND PREDICT [AI-FREE]
Do not scroll ahead. Do not ask your AI assistant.

1. What will `parse_cv` return for the CV text above? Write the complete dictionary with all five fields.
2. How many items will be in the `skills` list?
3. How many entries will be in the `experience` list? What will the `title` field of each entry contain?
4. Record your confidence (1-5): 1=no idea, 2=guessing, 3=think I know, 4=fairly sure, 5=certain.

Write your prediction on paper, in a note, or in a comment. The act of committing to an answer is what makes Predict work.
:::

## Run It

Save the server file and test it with the MCP Inspector:

```bash
cd hireflow
mcp dev servers/cv_parser_server.py
```

The Inspector opens in your browser. Select the `parse_cv` tool, paste the CV text above as the `cv_text` argument, and click **Run**.

**Expected output:**

```json
{
  "name": "Amara Okafor",
  "email": "amara.okafor@email.com",
  "skills": ["Python", "FastAPI", "PostgreSQL", "Docker"],
  "experience": [
    {
      "title": "Senior Backend Engineer",
      "details": "Acme Corp, 2021-2024 Built microservices architecture serving 10k requests/sec"
    },
    {
      "title": "Junior Developer",
      "details": "StartupXYZ, 2019-2021 Maintained Django REST API"
    }
  ],
  "education": "BSc Computer Science, University of Lagos, 2019"
}
```

**Compare your prediction:**

- **Correct + high confidence**: Well calibrated. You traced the parsing logic accurately.
- **Correct + low confidence**: You understand the code better than you think. The pattern of extracting sections by header is straightforward once you see it.
- **Incorrect on skills count**: Check `_parse_skills`. The comma in the skills line triggers the comma-split path. Four items.
- **Incorrect on experience structure**: Check `_parse_experience`. It groups lines between blank lines. The first non-blank line becomes `title`, the rest become `details`.

## What the Code Does

The server has three layers:

**Helper functions** (`_extract_section`, `_parse_skills`, `_parse_experience`) handle the actual text parsing. These are plain Python functions with no MCP dependency. You could test them independently with pytest.

**Tool functions** (`parse_cv`, `extract_skills`, `extract_experience`) are the MCP interface. Each calls the helpers and returns structured data. The `@mcp.tool()` decorator registers them with FastMCP, which generates JSON schemas from the type annotations.

**Data model** (`ParsedCV` dataclass) defines the structure of parsed output. In this version, `parse_cv` creates a `ParsedCV` internally but returns a plain dictionary. In Lesson 6, you will replace this with a Pydantic model that also serves as the tool's return type.

Notice what is missing: there is no input validation beyond Python's type system. The `cv_text` parameter is a plain `str` with no constraints. There is no logging. There is no progress reporting. There is no handling for empty input, missing sections, or malformed data. These gaps become the subject of the next three lessons.
