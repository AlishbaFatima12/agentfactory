---
sidebar_position: 7
title: "Modify Exercises: Extend the Server"
description: "Three graduated exercises that extend the HireFlow MCP server with new tools, input validation, and tool-resource wiring"
chapter: 69
lesson: 7
duration_minutes: 50
keywords:
  [
    modify-exercises,
    mcp-tools,
    input-validation,
    tool-resource-wiring,
    graduated-practice,
    hireflow,
  ]
skills:
  - name: "MCP Tool Implementation"
    proficiency_level: "A2"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Add a new tool to an existing MCP server with correct decorator, type hints, and docstring"
  - name: "Input Validation for Agent Tools"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "5.1 Solving technical problems"
    measurable_at_this_level: "Add input validation to a tool that returns structured error messages instead of crashing"
  - name: "Tool-Resource Integration"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Wire a tool that reads from a resource to combine data sources within an MCP server"
learning_objectives:
  - objective: "Add a new tool to an existing FastMCP server following the decorator pattern"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Server responds to tools/list with the new tool and correctly handles tools/call"
  - objective: "Implement input validation that returns structured errors instead of raising exceptions"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Tool handles empty input, too-short input, and missing fields with descriptive error responses"
  - objective: "Build a tool that reads from a resource to combine data from multiple sources"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Score tool correctly loads job requirements from a resource and scores the candidate against them"
cognitive_load:
  new_concepts: 1
  assessment: "The only new concept is tool-resource wiring (Modification C). Modifications A and B use patterns already taught in lessons 4-5. The graduated structure (simple to advanced) manages load by building incrementally."
differentiation:
  extension_for_advanced: "After completing Modification C, add a prompt that generates a hiring report by combining data from both the tool and the resource. This requires all three primitives working together."
  remedial_for_struggling: "Complete Modification A only. Once that works, attempt B. Skip C until A and B feel comfortable."
---

# Modify Exercises: Extend the Server

You have built a HireFlow MCP server, traced its request lifecycle, and assembled one from scrambled lines. Now you will modify the server through three graduated exercises. Each adds something new, and each starts with a prediction.

The exercises use the HireFlow server from lessons 4 and 5 as the starting point. If you do not have it, here is the base server:

```python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("HireFlow")

@mcp.tool()
def list_candidates(department: str) -> list[dict]:
    """List all candidates for a department"""
    candidates = [
        {"name": "Alice Chen", "department": "Engineering", "score": 87},
        {"name": "Bob Patel", "department": "Engineering", "score": 72},
        {"name": "Carol Davis", "department": "Marketing", "score": 91},
    ]
    return [c for c in candidates if c["department"] == department]

@mcp.tool()
def score_candidate(
    name: str,
    years_experience: int,
    skill_match_percent: int,
    education_level: str
) -> dict:
    """Score a candidate based on multiple factors with bounded output"""
    if years_experience < 0:
        return {"name": name, "error": "years_experience cannot be negative"}
    if not 0 <= skill_match_percent <= 100:
        return {"name": name, "error": "skill_match_percent must be 0-100"}

    exp_score = min(years_experience * 5, 40)
    skill_score = (skill_match_percent / 100) * 40
    edu_scores = {"phd": 20, "masters": 15, "bachelors": 10, "other": 5}
    edu_score = edu_scores.get(education_level.lower(), 5)
    total = exp_score + skill_score + edu_score

    if total >= 75:
        recommendation = "strong_hire"
    elif total >= 55:
        recommendation = "hire"
    elif total >= 35:
        recommendation = "maybe"
    else:
        recommendation = "reject"

    return {
        "name": name,
        "score": round(total, 1),
        "breakdown": {"experience": exp_score, "skills": skill_score, "education": edu_score},
        "recommendation": recommendation,
    }

if __name__ == "__main__":
    mcp.run(transport="stdio")
```

---

## Modification A: Add a Job Descriptions Tool (Simple, 1-3 lines changed)

**Goal:** Add a tool that returns job description details for a given job ID.

:::tip PREDICT BEFORE RUNNING
Before writing any code, predict: After you add this tool, what will `tools/list` return? How many tools will appear? What will the new tool's `inputSchema` look like?

Write your predictions down, then proceed.

Record your confidence (1-5): 1 = no idea, 2 = guessing, 3 = think I know, 4 = fairly sure, 5 = certain.
:::

**Your predictions should include:**

- Number of tools in `tools/list` response: **_ (was 2, should become _**)
- New tool name: \_\_\_
- Input parameters: \_\_\_
- Return type: \_\_\_

### Instructions

Add a new tool called `get_job_description` that takes a `job_id` string and returns a dictionary with the job title, department, and requirements.

Here is the job data to use:

```python
JOB_DATA = {
    "JOB-001": {
        "title": "Senior Python Developer",
        "department": "Engineering",
        "requirements": ["Python 3.10+", "FastAPI", "PostgreSQL", "Docker"],
        "posted_date": "2026-01-15",
    },
    "JOB-002": {
        "title": "Marketing Analyst",
        "department": "Marketing",
        "requirements": ["SQL", "Tableau", "A/B testing", "Statistics"],
        "posted_date": "2026-02-01",
    },
    "JOB-003": {
        "title": "HR Coordinator",
        "department": "Human Resources",
        "requirements": ["HRIS systems", "Compliance", "Onboarding"],
        "posted_date": "2026-02-20",
    },
}
```

Try to write the tool yourself before looking at the solution.

### Solution

```python
JOB_DATA = {
    "JOB-001": {
        "title": "Senior Python Developer",
        "department": "Engineering",
        "requirements": ["Python 3.10+", "FastAPI", "PostgreSQL", "Docker"],
        "posted_date": "2026-01-15",
    },
    "JOB-002": {
        "title": "Marketing Analyst",
        "department": "Marketing",
        "requirements": ["SQL", "Tableau", "A/B testing", "Statistics"],
        "posted_date": "2026-02-01",
    },
    "JOB-003": {
        "title": "HR Coordinator",
        "department": "Human Resources",
        "requirements": ["HRIS systems", "Compliance", "Onboarding"],
        "posted_date": "2026-02-20",
    },
}

@mcp.tool()
def get_job_description(job_id: str) -> dict:
    """Get job description details by job ID"""
    job = JOB_DATA.get(job_id)
    if job is None:
        return {"error": f"Job {job_id} not found"}
    return job
```

### Check Your Predictions

**`tools/list` now returns 3 tools:**

1. `list_candidates` (from the base server)
2. `score_candidate` (from the base server)
3. `get_job_description` (your new tool)

**The new tool's `inputSchema`:**

```json
{
  "type": "object",
  "properties": {
    "job_id": { "type": "string" }
  },
  "required": ["job_id"]
}
```

FastMCP generated this schema automatically from the `job_id: str` type annotation. No manual schema writing needed.

> **James:** "That was three lines of real code: decorator, function definition, and the return. Plus the data dictionary."

> **Emma:** "How did your prediction compare?"

> **James:** "I got the tool count right. I forgot that `inputSchema` would have `required` set automatically."

> **Emma:** "FastMCP treats parameters without defaults as required. If you had written `job_id: str = ''`, it would be optional."

---

## Modification B: Input Validation (Medium, 3-8 lines changed)

**Goal:** Add input validation to a CV parsing tool so it handles bad input gracefully.

:::tip PREDICT BEFORE RUNNING
Before writing, predict: What happens when `parse_cv` receives an empty string? What _should_ happen? What about a string with only 5 characters?

Write your predictions, then code the solution.

Record your confidence (1-5): 1 = no idea, 2 = guessing, 3 = think I know, 4 = fairly sure, 5 = certain.
:::

### The Starter Code

Add this tool to your server. It currently has no validation:

```python
@mcp.tool()
def parse_cv(cv_text: str) -> dict:
    """Parse a candidate CV and extract key fields"""
    lines = cv_text.strip().split("\n")
    name = lines[0] if lines else "Unknown"
    return {
        "name": name,
        "line_count": len(lines),
        "raw_length": len(cv_text),
    }
```

**Problem cases to handle:**

1. Empty string: `parse_cv("")`
2. Very short input (under 20 characters): `parse_cv("Hi")`
3. Whitespace-only input: `parse_cv("   \n\n  ")`

### Instructions

Modify `parse_cv` to validate its input and return structured error messages. Do not raise exceptions; return a dictionary with an `"error"` key instead. The AI model calling this tool needs to understand what went wrong so it can ask the user for better input.

Requirements:

- Empty or whitespace-only input: return `{"error": "CV text is empty", "suggestion": "Provide the full CV text"}`
- Input under 20 characters: return `{"error": "CV text too short", "length": <actual length>, "minimum": 20, "suggestion": "This doesn't look like a complete CV"}`
- Valid input: process normally

Try writing this yourself before checking the solution.

### Solution

```python
@mcp.tool()
def parse_cv(cv_text: str) -> dict:
    """Parse a candidate CV and extract key fields"""
    # Validation: empty or whitespace-only
    stripped = cv_text.strip()
    if not stripped:
        return {
            "error": "CV text is empty",
            "suggestion": "Provide the full CV text",
        }

    # Validation: too short to be a real CV
    if len(stripped) < 20:
        return {
            "error": "CV text too short",
            "length": len(stripped),
            "minimum": 20,
            "suggestion": "This doesn't look like a complete CV",
        }

    # Normal processing
    lines = stripped.split("\n")
    name = lines[0]
    return {
        "name": name,
        "line_count": len(lines),
        "raw_length": len(cv_text),
    }
```

### What Changed and Why

| Change                | Lines Added | Purpose                                             |
| --------------------- | ----------- | --------------------------------------------------- |
| Strip and check empty | 3           | Catches `""`, `"  "`, `"\n\n"`                      |
| Length check          | 5           | Catches fragments like `"Hi"` or `"Name: Bob"`      |
| Return error dicts    | 0 (pattern) | AI model can read the error and respond to the user |

> **Emma:** "Why return error dictionaries instead of raising exceptions?"

> **James:** "Because the AI model is the caller. If we raise an exception, the model gets a generic error. If we return a structured error, the model can tell the user exactly what's wrong."

> **Emma:** "Right. Tools called by AI models should communicate through data, not through exceptions. The model can reason about `{'error': 'CV text too short', 'minimum': 20}` and ask the user: 'The CV text you provided is too short. Could you paste the full document?'"

> **James:** "That's a better user experience than 'An error occurred while processing your request.'"

> **Emma:** "By a wide margin."

:::tip KEY INSIGHT
When building tools that AI models call, validation errors should be informative return values, not exceptions. The model is your caller. Give it enough context to help the human user fix the problem.
:::

---

## Modification C: Wire a Tool to a Resource (Advanced, 8+ lines)

**Goal:** Build a `match_candidate_to_job` tool that reads requirements from the `jobs://{job_id}` resource, then scores how well a candidate matches.

This exercise connects two primitives: a tool reads from a resource within the same server. The tool handles the active logic (scoring), while the resource provides the passive data (job requirements).

:::tip PREDICT BEFORE RUNNING
Before writing, predict:

1. Can a tool function call a resource function directly, or does it need to go through the MCP protocol?
2. What data does the tool need from the resource?
3. How will you handle the case where the job ID does not exist?

Write your predictions, then build it.

Record your confidence (1-5): 1 = no idea, 2 = guessing, 3 = think I know, 4 = fairly sure, 5 = certain.
:::

### Context

You already have the `jobs://{job_id}` resource from lesson 5:

```python
@mcp.resource("jobs://{job_id}")
def get_job_spec(job_id: str) -> str:
    """Get a job specification by ID"""
    import json
    jobs = {
        "JOB-001": {
            "title": "Senior Python Developer",
            "department": "Engineering",
            "requirements": ["Python 3.10+", "FastAPI", "PostgreSQL"],
            "salary_range": "$120k-$160k",
        },
        "JOB-002": {
            "title": "Marketing Analyst",
            "department": "Marketing",
            "requirements": ["SQL", "Tableau", "A/B testing"],
            "salary_range": "$80k-$110k",
        },
    }
    job = jobs.get(job_id)
    if job is None:
        return f"Job {job_id} not found"
    return json.dumps(job, indent=2)
```

### Instructions

Build a tool called `match_candidate_to_job` that:

1. Takes `candidate_name: str`, `candidate_skills: list[str]`, and `job_id: str`
2. Loads the job's requirements (by calling the resource function directly; since both live in the same server, you can call the Python function without going through the protocol)
3. Compares the candidate's skills against the job's requirements
4. Returns a match report: which requirements are met, which are missing, and an overall match percentage

Try to write this yourself before checking the solution.

### Solution

First, refactor the job data into a shared location so both the resource and the tool can access it:

```python
# Shared data (top of file, after FastMCP initialization)
JOBS = {
    "JOB-001": {
        "title": "Senior Python Developer",
        "department": "Engineering",
        "requirements": ["Python 3.10+", "FastAPI", "PostgreSQL"],
        "salary_range": "$120k-$160k",
    },
    "JOB-002": {
        "title": "Marketing Analyst",
        "department": "Marketing",
        "requirements": ["SQL", "Tableau", "A/B testing"],
        "salary_range": "$80k-$110k",
    },
}
```

Then update the resource to use the shared data:

```python
@mcp.resource("jobs://{job_id}")
def get_job_spec(job_id: str) -> str:
    """Get a job specification by ID"""
    import json
    job = JOBS.get(job_id)
    if job is None:
        return f"Job {job_id} not found"
    return json.dumps(job, indent=2)
```

And build the new tool:

```python
@mcp.tool()
def match_candidate_to_job(
    candidate_name: str,
    candidate_skills: list[str],
    job_id: str,
) -> dict:
    """Match a candidate's skills against a job's requirements"""
    # Load job data from shared source
    job = JOBS.get(job_id)
    if job is None:
        return {
            "error": f"Job {job_id} not found",
            "suggestion": "Use get_job_description to find valid job IDs",
        }

    requirements = job["requirements"]

    # Normalize for comparison (lowercase)
    candidate_lower = [s.lower() for s in candidate_skills]
    requirements_lower = [r.lower() for r in requirements]

    met = []
    missing = []
    for req in requirements:
        if req.lower() in candidate_lower:
            met.append(req)
        else:
            missing.append(req)

    match_percent = (len(met) / len(requirements) * 100) if requirements else 0

    return {
        "candidate": candidate_name,
        "job": job["title"],
        "match_percent": round(match_percent, 1),
        "requirements_met": met,
        "requirements_missing": missing,
        "total_requirements": len(requirements),
        "verdict": "strong_match" if match_percent >= 75 else "partial_match" if match_percent >= 50 else "weak_match",
    }
```

### Testing It Mentally

```python
match_candidate_to_job(
    candidate_name="Alice Chen",
    candidate_skills=["Python 3.10+", "FastAPI", "Docker", "Redis"],
    job_id="JOB-001"
)
```

Expected output:

```python
{
    "candidate": "Alice Chen",
    "job": "Senior Python Developer",
    "match_percent": 66.7,
    "requirements_met": ["Python 3.10+", "FastAPI"],
    "requirements_missing": ["PostgreSQL"],
    "total_requirements": 3,
    "verdict": "partial_match",
}
```

Alice has 2 of 3 requirements (Python 3.10+, FastAPI) but is missing PostgreSQL. Her extra skills (Docker, Redis) are noted in the input but do not affect the match percentage, which is based on the job's requirements.

> **James:** "So the tool doesn't go through the MCP protocol to read the resource. It accesses the same Python data structure directly."

> **Emma:** "Right. Within the same server process, there is no need for protocol overhead. The MCP protocol is for _external_ clients talking to your server. Internal wiring between your own tools and resources is plain Python."

> **James:** "But a client from outside could also read the same job data through the `jobs://{job_id}` resource?"

> **Emma:** "Yes. The resource gives external clients access to the same data. The tool uses it internally for computation. Same data, two access paths."

### What You Learned in Modification C

| Concept           | What You Did                                                                          |
| ----------------- | ------------------------------------------------------------------------------------- |
| Shared data       | Extracted job data into a module-level dictionary that both the resource and tool use |
| Internal wiring   | The tool accesses shared data directly; it does not go through the MCP protocol       |
| Skill matching    | Compared lists with case-insensitive normalization                                    |
| Structured output | Returned met/missing breakdowns so the AI model can explain the result to the user    |
| Error handling    | Returned an informative error dict when the job ID is invalid                         |

---

## Summary: Three Modifications, Three Levels

| Modification             | Difficulty | Lines Changed            | What You Practiced                        |
| ------------------------ | ---------- | ------------------------ | ----------------------------------------- |
| A: Job descriptions tool | Simple     | 3 new lines + data dict  | Adding a new tool to an existing server   |
| B: Input validation      | Medium     | 8 lines modified         | Defensive programming for AI-called tools |
| C: Tool-resource wiring  | Advanced   | 15+ new lines + refactor | Connecting primitives within a server     |

Each modification built on the previous one. A taught the mechanics. B taught robustness. C taught integration.

> **James:** "Modification A felt like filling in a template. B made me think about how the caller experiences errors. C made me rethink the server's architecture to share data between primitives."

> **Emma:** "That's the progression. Mechanics, then resilience, then design. Which was the most valuable?"

> **James:** "C, because it changed how I think about structuring the server. The other two were 'add more of the same.' C was 'connect things differently.'"

> **Emma:** "And in a real HireFlow server, most of the interesting work is in the connections: tools that read from resources, prompts that reference tool outputs, resources that aggregate data from multiple sources. The individual primitives are building blocks. The wiring is the architecture."

In the next lesson, you will configure and debug MCP servers: JSON configuration, the MCP Inspector, and common error patterns.
