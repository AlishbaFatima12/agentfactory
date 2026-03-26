---
sidebar_position: 5
title: "Resources and Prompts in FastMCP"
description: "Add resources and prompts to the HireFlow MCP server, investigate URI design patterns, and compare the three control models in practice"
chapter: 69
lesson: 5
duration_minutes: 45
keywords:
  [
    mcp-resources,
    mcp-prompts,
    uri-templates,
    control-models,
    fastmcp-decorators,
    base-message,
    hireflow,
  ]
skills:
  - name: "MCP Resource Implementation"
    proficiency_level: "A2"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Implement both direct and templated MCP resources using the @mcp.resource() decorator"
  - name: "MCP Prompt Design"
    proficiency_level: "A2"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Create MCP prompts that return both simple strings and multi-turn Message sequences"
  - name: "Control Model Analysis"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "1.3 Managing data, information and digital content"
    measurable_at_this_level: "Explain when to expose HireFlow functionality as a tool vs resource vs prompt based on who should control invocation"
learning_objectives:
  - objective: "Implement at least one direct resource and one templated resource using @mcp.resource()"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Working resource handlers that respond to resources/list and resources/read requests"
  - objective: "Create prompts that return both string and list[base.Message] formats"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Working prompts accessible via prompts/list and prompts/get"
  - objective: "Analyze a HireFlow feature and determine whether it should be a tool, resource, or prompt"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Correct classification with written rationale for at least 3 HireFlow features"
cognitive_load:
  new_concepts: 4
  assessment: "@mcp.resource() with URI patterns, direct vs templated resources, @mcp.prompt() with return types, base.Message for multi-turn prompts. Built on the @mcp.tool() pattern from lesson 4, reducing novelty."
differentiation:
  extension_for_advanced: "Design a resource URI scheme for HireFlow that handles nested entities (e.g., candidates within departments within job postings). What trade-offs arise from deep vs flat URI hierarchies?"
  remedial_for_struggling: "Focus on direct resources first (no URI templates). Get one working, then add templates as a second step."
---

# Resources and Prompts in FastMCP

In lesson 4, you built a HireFlow server with tools. Tools are model-controlled: the AI decides when to call them. Now you will add the other two primitives, each with a different control model.

> **James:** "So we've got the phone system set up and the AI knows how to make calls. What else does it need?"

> **Emma:** "Think about what a hiring manager does besides calling people. They also read files on their desk and follow standard procedures."

> **James:** "Files on the desk... that's resources? And standard procedures... prompts?"

> **Emma:** "Close enough. Resources are data the application can pull in. Prompts are templates the user can choose. Different actors control each one."

## Adding Resources to HireFlow

Resources expose data through URI patterns. The application (not the AI model) decides when to read them. Here are two types: direct resources with fixed URIs, and templated resources with parameter placeholders.

### Direct Resource: Active Candidates

A direct resource has a fixed URI. It always returns the same kind of data (though the data itself can change).

```python
@mcp.resource("candidates://active")
def list_active_candidates() -> str:
    """List all active candidates in the pipeline"""
    candidates = [
        {"name": "Alice Chen", "status": "interviewing", "department": "Engineering"},
        {"name": "Bob Patel", "status": "screening", "department": "Engineering"},
        {"name": "Carol Davis", "status": "offer_pending", "department": "Marketing"},
    ]
    import json
    return json.dumps(candidates, indent=2)
```

The URI `candidates://active` is fixed. Every time the application reads this resource, it gets the current list of active candidates. No parameters needed.

### Templated Resource: Job Specifications

A templated resource uses `{parameter}` placeholders in the URI. The parameter value comes from the request.

```python
@mcp.resource("jobs://{job_id}")
def get_job_spec(job_id: str) -> str:
    """Get a job specification by ID"""
    jobs = {
        "JOB-001": {
            "title": "Senior Python Developer",
            "department": "Engineering",
            "requirements": ["Python 3.10+", "FastAPI", "PostgreSQL"],
            "salary_range": "$120k-$160k"
        },
        "JOB-002": {
            "title": "Marketing Analyst",
            "department": "Marketing",
            "requirements": ["SQL", "Tableau", "A/B testing"],
            "salary_range": "$80k-$110k"
        },
    }
    job = jobs.get(job_id)
    if job is None:
        return f"Job {job_id} not found"
    import json
    return json.dumps(job, indent=2)
```

When the application requests `jobs://JOB-001`, FastMCP extracts `"JOB-001"` from the URI and passes it as the `job_id` parameter.

> **James:** "So the URI is like a file path? `candidates://active` is like a specific file, and `jobs://{job_id}` is like a directory where you specify which file you want?"

> **Emma:** "That analogy works. Direct resources are like named bookmarks. Templated resources are like search patterns. Which would you use for 'all open positions'?"

> **James:** "Direct. `positions://open`. Because there's no parameter needed."

> **Emma:** "And for 'the interview schedule for a specific candidate'?"

> **James:** "Templated. `interviews://{candidate_id}`. Because you need to specify which candidate."

## Investigation 1: URI Design Patterns

:::warning STOP AND PREDICT
For each HireFlow data need below, decide: direct resource or templated resource? Write the URI you would use.

1. The company's standard benefits package
2. A specific candidate's resume
3. All departments currently hiring
4. Interview feedback for a specific interview
5. The salary bands table

Record your confidence (1-5): 1 = no idea, 2 = guessing, 3 = think I know, 4 = fairly sure, 5 = certain.
:::

**Answers:**

| Data Need          | Type      | URI                                    | Reasoning                                               |
| ------------------ | --------- | -------------------------------------- | ------------------------------------------------------- |
| Benefits package   | Direct    | `company://benefits`                   | One company, one benefits package. No parameter needed. |
| Specific resume    | Templated | `candidates://{candidate_id}/resume`   | Need to identify which candidate.                       |
| Departments hiring | Direct    | `departments://hiring`                 | Returns a list; no parameter needed.                    |
| Interview feedback | Templated | `interviews://{interview_id}/feedback` | Need to identify which interview.                       |
| Salary bands       | Direct    | `company://salary-bands`               | One table for the whole company.                        |

> **Emma:** "Notice the pattern? If you need to specify _which one_, it's templated. If there's only one or you want all of them, it's direct."

> **James:** "What about something like 'all candidates in the Engineering department'? That needs a parameter, but it's a list, not a single item."

> **Emma:** "Good question. You could do `candidates://{department}` as a templated resource. Or you could make it a tool, since filtering and querying is active work rather than passive data retrieval."

> **James:** "How do you decide?"

> **Emma:** "Who should control when this data is fetched? If the application should pull it in automatically (like loading a sidebar), resource. If the AI model should decide to fetch it based on conversation context, tool."

## Investigation 2: What Happens with Missing Data?

:::warning STOP AND PREDICT
What happens when a client requests `jobs://JOB-999` from the `get_job_spec` resource above? Trace through the code mentally.

Record your confidence (1-5): 1 = no idea, 2 = guessing, 3 = think I know, 4 = fairly sure, 5 = certain.
:::

The function executes normally. `jobs.get("JOB-999")` returns `None`, the `if` branch triggers, and the resource returns the string `"Job JOB-999 not found"`. This is valid: the resource responded successfully with a text content block. The _content_ says "not found," but the _protocol response_ is a normal `resources/read` result, not an error.

> **Emma:** "Is that the right behavior?"

> **James:** "Hmm. It's not an error in the protocol sense, but the data the caller wanted doesn't exist. Should it be a protocol-level error instead?"

> **Emma:** "This is a genuine design tension. Returning a 'not found' message means the AI model can read it and respond intelligently: 'I couldn't find that job posting.' Raising a protocol error means the client has to handle it in error-handling code, not in the conversation flow."

> **James:** "So for AI-facing resources, returning a descriptive message is usually better than throwing errors?"

> **Emma:** "For most cases, yes. The model can reason about 'Job not found' much more naturally than about a JSON-RPC error code."

## Adding Prompts to HireFlow

Prompts are templates that the _user_ selects. They provide reusable instruction sets for common tasks. FastMCP supports two return types: simple strings and multi-turn message sequences.

### Simple Prompt: Screening Instructions

```python
@mcp.prompt()
def screening_prompt(job_title: str, requirements: str) -> str:
    """Generate a candidate screening prompt"""
    return (
        f"You are screening candidates for the {job_title} position. "
        f"Key requirements: {requirements}. "
        f"For each candidate, evaluate their fit against these requirements. "
        f"Rate each requirement as Met, Partially Met, or Not Met. "
        f"Provide an overall recommendation: Advance, Hold, or Reject."
    )
```

When a user selects this prompt through their client application, it expands into screening instructions customized for the specific role.

### Multi-Turn Prompt: Interview Preparation

For more complex interactions, prompts can return a sequence of messages that set up a conversation:

```python
from mcp.server.fastmcp.prompts import base

@mcp.prompt(title="Interview Preparation")
def interview_prep(candidate_name: str, role: str) -> list[base.Message]:
    """Prepare structured interview questions for a candidate"""
    return [
        base.UserMessage(
            f"I need to prepare interview questions for {candidate_name} "
            f"applying for {role}."
        ),
        base.AssistantMessage(
            "I'll help you prepare. Let me start by reviewing the role requirements "
            "and the candidate's background, then generate targeted questions for "
            "each competency area."
        ),
    ]
```

The `list[base.Message]` return type creates a multi-turn conversation starter. The `base.UserMessage` sets up the user's request, and `base.AssistantMessage` provides an initial response frame that guides the AI's approach.

> **James:** "Wait. Why would a prompt include an assistant message? Isn't that putting words in the AI's mouth?"

> **Emma:** "Think of it as stage directions. The assistant message establishes the _approach_, not the final answer. It says 'I'll review requirements and generate targeted questions,' which frames how the model should proceed when the user continues the conversation."

> **James:** "So it's less 'here's the answer' and more 'here's how to think about the question'?"

> **Emma:** "Exactly. Multi-turn prompts are most useful when the task needs a specific methodology, not just a topic."

## Investigation 3: Prompt Return Types

:::warning STOP AND PREDICT
For each of these HireFlow prompt needs, decide: simple string or multi-turn `list[base.Message]`?

1. A prompt that tells the AI how to write a rejection email
2. A prompt that walks through a structured salary negotiation analysis
3. A prompt that provides the format for a candidate summary

Record your confidence (1-5): 1 = no idea, 2 = guessing, 3 = think I know, 4 = fairly sure, 5 = certain.
:::

| Prompt Need                 | Return Type          | Reasoning                                                                                                                                    |
| --------------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Rejection email template    | `str`                | Single instruction: "Write a rejection email with these characteristics." No methodology needed.                                             |
| Salary negotiation analysis | `list[base.Message]` | Multi-step methodology: gather data, compare ranges, analyze leverage, draft proposal. The assistant message frames the analytical approach. |
| Candidate summary format    | `str`                | Single instruction: "Format the candidate summary as follows." Template-like output.                                                         |

> **James:** "The rule of thumb is: if it's 'do this thing,' use a string. If it's 'follow this process,' use messages?"

> **Emma:** "That's a useful heuristic. Simple prompts describe _what_. Multi-turn prompts describe _how_."

## Investigation 4: The Three Control Models in Practice

This is the central architectural insight of MCP. The same HireFlow functionality can be exposed differently depending on who should control invocation.

Consider this feature: "Get salary benchmarks for a job title."

**As a Tool (model-controlled):**

```python
@mcp.tool()
def get_salary_benchmark(job_title: str) -> dict:
    """Get market salary benchmarks for a job title"""
    benchmarks = {
        "Senior Python Developer": {"p25": 110000, "p50": 140000, "p75": 170000},
        "Marketing Analyst": {"p25": 70000, "p50": 90000, "p75": 115000},
    }
    return benchmarks.get(job_title, {"error": f"No data for {job_title}"})
```

The AI model decides when to call this. During a conversation about hiring budget, the model might call `get_salary_benchmark` on its own to provide context.

**As a Resource (application-controlled):**

```python
@mcp.resource("salary://benchmarks/{job_title}")
def salary_benchmark_resource(job_title: str) -> str:
    """Salary benchmark data for a specific role"""
    benchmarks = {
        "Senior Python Developer": {"p25": 110000, "p50": 140000, "p75": 170000},
        "Marketing Analyst": {"p25": 70000, "p50": 90000, "p75": 115000},
    }
    import json
    data = benchmarks.get(job_title, {"error": f"No data for {job_title}"})
    return json.dumps(data, indent=2)
```

The application decides when to load this. Perhaps the UI automatically loads salary data when a user opens a job posting page, adding it to the conversation context.

**As a Prompt (user-controlled):**

```python
@mcp.prompt()
def salary_analysis(job_title: str, proposed_salary: str) -> str:
    """Analyze whether a proposed salary is competitive"""
    return (
        f"Analyze the proposed salary of {proposed_salary} for the {job_title} role. "
        f"Compare against market benchmarks. Consider: "
        f"1. Is it competitive at the 25th, 50th, or 75th percentile? "
        f"2. What factors might justify above or below median? "
        f"3. What is the risk of the candidate declining?"
    )
```

The user explicitly selects this prompt from a menu. They want a structured salary analysis and choose to initiate it.

> **James:** "So it's the same data, but the _trigger_ is different."

> **Emma:** "Who decides when to use it. That's the entire distinction."

> **James:** "The model decides tools. The app decides resources. The user decides prompts."

> **Emma:** "And this maps to real organizational roles. Who in a hiring process decides to check salary data?"

> **James:** "Depends on context. The AI might check it automatically during a discussion. The app might preload it when showing a job posting. The hiring manager might specifically ask for a competitive analysis."

> **Emma:** "Same data. Three access patterns. Three control models. That's why MCP has three primitives instead of one."

:::tip KEY INSIGHT
The three-primitive design is not about data types. It is about _control_. Ask "who should decide when this is used?" and the answer tells you which primitive to choose:

- AI model decides: **tool**
- Application decides: **resource**
- Human user decides: **prompt**
  :::

## The HireFlow Server After This Lesson

Here is the full server with all three primitives. This builds on the server from lesson 4:

```python
from mcp.server.fastmcp import FastMCP
from mcp.server.fastmcp.prompts import base

mcp = FastMCP("HireFlow")

# === TOOLS (model-controlled) ===

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

# === RESOURCES (application-controlled) ===

@mcp.resource("candidates://active")
def list_active_candidates() -> str:
    """List all active candidates in the pipeline"""
    import json
    candidates = [
        {"name": "Alice Chen", "status": "interviewing", "department": "Engineering"},
        {"name": "Bob Patel", "status": "screening", "department": "Engineering"},
        {"name": "Carol Davis", "status": "offer_pending", "department": "Marketing"},
    ]
    return json.dumps(candidates, indent=2)

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

# === PROMPTS (user-controlled) ===

@mcp.prompt()
def screening_prompt(job_title: str, requirements: str) -> str:
    """Generate a candidate screening prompt"""
    return (
        f"You are screening candidates for the {job_title} position. "
        f"Key requirements: {requirements}. "
        f"For each candidate, evaluate their fit against these requirements. "
        f"Rate each requirement as Met, Partially Met, or Not Met. "
        f"Provide an overall recommendation: Advance, Hold, or Reject."
    )

@mcp.prompt(title="Interview Preparation")
def interview_prep(candidate_name: str, role: str) -> list[base.Message]:
    """Prepare structured interview questions for a candidate"""
    return [
        base.UserMessage(
            f"I need to prepare interview questions for {candidate_name} "
            f"applying for {role}."
        ),
        base.AssistantMessage(
            "I'll help you prepare. Let me start by reviewing the role requirements "
            "and the candidate's background, then generate targeted questions for "
            "each competency area."
        ),
    ]

if __name__ == "__main__":
    mcp.run(transport="stdio")
```

## Discovery Responses

When a client connects to this server, it can discover all three primitive types:

**`tools/list`** returns `list_candidates` and `score_candidate` with their input schemas.

**`resources/list`** returns the direct resource `candidates://active`. Templated resources like `jobs://{job_id}` appear in the `resource_templates/list` response instead, since the client needs to know about the template parameter.

**`prompts/list`** returns `screening_prompt` and `interview_prep` with their parameter descriptions.

> **James:** "So a client that connects to our server gets a full menu of everything available, organized by control model."

> **Emma:** "And each category tells the client _how_ to interact. Tools are for the model to call. Resources are for the app to preload. Prompts are for the user to select from a menu."

## Looking Ahead

You now have a complete MCP server with all three primitives. In the next lesson, you will reinforce this structure by reordering scrambled code into a working server. After that, you will modify and extend the server through graduated exercises.

> **James:** "We built a recruiting platform's backend in about 50 lines of Python. That feels too easy."

> **Emma:** "The server definition is the easy part. The hard parts come next: what happens when two tools need to share data, when resources become stale, when prompts need to adapt to context. Those are lessons 7 through 9."

> **James:** "Always another layer."

> **Emma:** "Always. But the foundation is clean. That makes the layers manageable."
