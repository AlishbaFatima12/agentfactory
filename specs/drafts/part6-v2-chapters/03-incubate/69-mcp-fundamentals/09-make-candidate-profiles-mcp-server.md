---
sidebar_position: 9
title: "Make: Expose Resume Screener as MCP Server"
description: "Wrap your C7 Resume Screener skill in MCP tools, resources, and prompts using spec-first development, Test-Driven Generation, and the full discipline stack."
chapter: 69
lesson: 9
duration_minutes: 40
keywords:
  [
    mcp server,
    fastmcp,
    resume screener,
    test-driven generation,
    capstone,
    hireflow,
    spec-first,
    ruff,
    pyright,
    pytest,
  ]
skills:
  - name: "MCP Server Construction"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Build a working MCP server from a specification that includes tools, resources, and prompts with proper type annotations, input validation, and error handling"
  - name: "Skill-to-MCP Mapping"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Convert an existing agent skill definition into MCP tools, resources, and prompts while preserving the skill's validated behavior"
  - name: "Test-Driven Generation"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Use a written spec to generate failing tests, then generate implementation code that passes those tests"
  - name: "Discipline Stack Execution"
    proficiency_level: "A2"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Run ruff, pyright, and pytest in sequence and fix issues until all three pass"
learning_objectives:
  - objective: "Write an MCP server specification that maps an existing agent skill's capabilities to tools, resources, and prompts"
    proficiency_level: "B1"
    bloom_level: "Create"
    assessment_method: "Student produces a spec document that traces each MCP primitive back to the Resume Screener skill definition from Chapter 67"
  - objective: "Build a working MCP server with at least 2 tools, 1 resource, and 1 prompt using FastMCP"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Server passes all success criteria: starts without errors, registers all primitives, handles edge cases"
  - objective: "Verify a server using the MCP Inspector and the discipline stack (ruff, pyright, pytest)"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student runs mcp dev, ruff check, pyright, and pytest with all checks passing"
cognitive_load:
  new_concepts: 1
  assessment: "No new protocol concepts. The only new element is the skill-to-MCP mapping pattern: translating an existing agent skill definition into MCP primitives. All APIs (FastMCP, decorators, mcp.run) were taught in Lessons 4-5. The Resume Screener skill was written in Chapter 67 and validated in Chapter 68. This lesson is integration, not acquisition."
differentiation:
  extension_for_advanced: "Add a second resource template (candidates://skills/{skill_name}) that returns all candidates with a given skill. Add a third tool that ranks multiple candidates against the same job requirements."
  remedial_for_struggling: "Start with only the parse_cv tool. Get that working end-to-end (spec, test, implement, Inspector). Then add the second tool. Then add the resource. Then add the prompt. Incremental progress beats stuck perfection."
---

# Make: Expose Resume Screener as MCP Server

:::danger MAKE CHALLENGE [AI-FREE: SPEC ONLY]
Write your specification BEFORE any code. Do not ask your AI assistant to write the spec. The spec is the thinking; the code is the execution. If you skip the thinking, you are outsourcing the part that builds your skill.
:::

This is the capstone for Chapter 69. In Chapter 67, you wrote the Resume Screener skill. In Chapter 68, you validated it through simulation. Now you give it a protocol layer: you will expose the Resume Screener's capabilities as MCP tools, resources, and prompts so that other agents and clients can discover and use them through the standard protocol you learned in this chapter.

You are not starting from scratch. You are wrapping intelligence you already built in a protocol interface.

## The Assignment

Build an MCP server called **"HireFlow Resume Screener"** that exposes your C7 Resume Screener skill through MCP primitives:

### Tools (Model-Controlled)

**Tool 1: `parse_cv`**

| Parameter   | Type   | Description                                          |
| ----------- | ------ | ---------------------------------------------------- |
| `cv_text`   | `str`  | Raw text content of a candidate's CV                 |
| **Returns** | `dict` | Structured data: name, skills, experience, education |

This maps directly to what your Resume Screener skill does: it takes raw CV text and produces structured candidate data. In C7, you defined this as a skill; now you expose it as an MCP tool. For this exercise, use pattern matching or string parsing for the extraction logic. The focus is on the MCP plumbing, not the NLP.

**Tool 2: `score_candidate`**

| Parameter          | Type   | Description                                                   |
| ------------------ | ------ | ------------------------------------------------------------- |
| `candidate`        | `dict` | Candidate profile (output of `parse_cv` or from the resource) |
| `job_requirements` | `dict` | Required skills, minimum experience, education level          |
| **Returns**        | `dict` | Score (0-100), breakdown by category, recommendation          |

In your C8 simulations, you tested how the Resume Screener evaluates candidates. Now encode that logic as an MCP tool. A reasonable approach: check skill overlap, compare experience years, verify education level, and produce a weighted score.

### Resources (App-Controlled)

**Resource: `candidates://profiles/{candidate_id}`**

Returns the profile data for a specific candidate. Use a hardcoded dictionary of 3-5 sample candidates, reusing the candidate profiles from your Chapter 68 simulations. You already have candidates with known scores and edge-case characteristics; reuse them rather than inventing new ones.

### Prompts (User-Controlled)

**Prompt: `screening_summary`**

| Parameter        | Type  | Description                                          |
| ---------------- | ----- | ---------------------------------------------------- |
| `candidate_name` | `str` | Name of the candidate                                |
| `job_title`      | `str` | Title of the position                                |
| **Returns**      | `str` | A prompt template for generating a screening summary |

The prompt should produce text that an AI model can use to generate a structured screening report for the given candidate and position.

### Technical Requirements

- Transport: stdio
- ALL functions with full type annotations (parameters and return types)
- Input validation on all tools (handle empty strings, missing fields, invalid types)
- Server runs with: `mcp.run(transport="stdio")`
- Verify with: `mcp dev resume_screener_server.py`

## Phase 1: Write the Spec (AI-FREE)

Before you touch any code, write a specification document. This is the part you do without AI assistance. You are translating the Resume Screener skill's natural-language contract (from C7) into a typed MCP interface. The spec is a plain text or markdown file that answers:

1. **Server name and description**: What does this server do? Who consumes it? (Reference your C7 skill definition.)
2. **Skill-to-MCP mapping**: For each capability your Resume Screener skill has, which MCP primitive (tool, resource, or prompt) exposes it? Why that primitive type?
3. **Primitive inventory**: List every tool, resource, and prompt with their parameters, types, and return values.
4. **Input validation rules**: What happens when `cv_text` is empty? When `candidate_id` does not exist? When `score_candidate` receives a candidate dict missing the `skills` key?
5. **Sample data**: Reuse the candidate profiles from your Chapter 68 simulations. Write out the actual dictionaries. You already have candidates with known scores and edge-case characteristics.
6. **Success criteria**: How will you know the server works? (Use the checklist at the end of this lesson.)

> **James:** I already know what the Resume Screener does. I wrote the skill in C7 and simulated it in C8. Why do I need a spec for wrapping it in MCP?
>
> **Emma:** What type does `parse_cv` return through MCP? A dict? A JSON string? What fields exactly?
>
> **James:** Name, skills, experience, education. Same as the skill.
>
> **Emma:** What type is `skills`? A list of strings? A list of dicts with proficiency levels? The skill defined it in natural language. MCP needs exact types.
>
> **James:** ... I see your point. The spec translates the skill's natural-language contract into a typed MCP interface.
>
> **Emma:** A spec is a commitment. Code without a spec is improvisation. Improvisation is fine for jazz; less fine for protocols.

### Spec Template

Use this structure or create your own:

```markdown
# Server Spec: HireFlow Resume Screener

## Source

- Skill definition: [path to your Chapter 67 Resume Screener skill]
- Simulation results: [path to your Chapter 68 simulation output]

## Overview

[1-2 sentences: what this server does, traced back to the skill definition]

## Skill-to-Primitive Mapping

| Skill Capability       | MCP Primitive | Rationale                           |
| ---------------------- | ------------- | ----------------------------------- |
| CV parsing             | Tool          | Model decides when to parse         |
| Candidate scoring      | Tool          | Model decides when to score         |
| Profile data retrieval | Resource      | App controls which profiles to load |
| Screening summary      | Prompt        | User selects when to generate       |

## Primitives

### Tool: parse_cv

- Parameters: [name: type, description]
- Returns: [type with field descriptions]
- Validation: [what happens on bad input]
- Skill reference: [which Resume Screener capability this implements]

### Tool: score_candidate

- Parameters: [name: type, description]
- Returns: [type with field descriptions]
- Validation: [what happens on bad input]
- Scoring logic: [how the score is calculated]
- Simulation reference: [which C8 test cases validate this]

### Resource: candidates://profiles/{candidate_id}

- Returns: [type with field descriptions]
- Sample data: [reuse candidate profiles from Chapter 68 simulations]
- Not found behavior: [what happens for unknown IDs]

### Prompt: screening_summary

- Parameters: [name: type, description]
- Returns: [the prompt template text]

## Edge Cases (from Chapter 68 Simulations)

- Empty cv_text → [behavior]
- Unknown candidate_id → [behavior]
- Missing skills in candidate dict → [behavior, tested in C8]
- Score outside 0-100 → [prevention strategy]
- Partial skill match → [behavior, tested in C8]
```

Spend 10-15 minutes on this. Write it in a file called `spec.md` in your project directory.

## Phase 2: Spec Review with AI

Once your spec is written, show it to Claude Code:

```
Review this MCP server spec for completeness.
Check: are all parameter types explicit? Are edge
cases covered? Does the scoring logic make sense?
```

This is where AI collaboration begins. The spec is yours; the review is collaborative. Fix any issues Claude Code identifies before moving to tests.

> **Emma:** Notice the sequence. You wrote the spec. The AI reviews it. You fix it. The AI never saw a blank page.
>
> **James:** Because if I hand it a blank page and say "write the spec," I learn nothing about what decisions go into designing a server.
>
> **Emma:** Right. The decisions are the learning. The typing is not.

## Phase 3: Test-Driven Generation (TDG)

Now use your reviewed spec to drive test creation. Your Chapter 68 simulations already proved the skill works with specific inputs. Those same inputs become your test cases.

Give Claude Code your spec and ask it to generate tests:

```
Based on this spec, write pytest tests for the
resume_screener_server. Test each tool, the resource,
and the prompt. Use the simulation scenarios from
Chapter 68 as test cases: partial skill match,
missing fields, empty CV text.
```

The tests should fail because there is no implementation yet. This is the "failing tests" step of TDG.

Example test structure (what Claude Code might generate, based on your spec and your Chapter 68 simulation data):

```python
import pytest

def test_parse_cv_extracts_name():
    """parse_cv should extract candidate name from CV text."""
    result = parse_cv("John Smith\nSoftware Engineer\nSkills: Python, SQL")
    assert result["name"] == "John Smith"

def test_parse_cv_empty_input():
    """parse_cv should handle empty CV text gracefully."""
    result = parse_cv("")
    assert result["name"] == ""
    assert result["skills"] == []

def test_score_candidate_partial_skill_match():
    """score_candidate: candidate with 2 of 3 required skills (from C8 simulation)."""
    candidate = {"name": "Alice", "skills": ["Python", "FastAPI"], "experience_years": 5}
    requirements = {"required_skills": ["Python", "FastAPI", "PostgreSQL"], "min_experience": 3}
    result = score_candidate(candidate, requirements)
    assert 0 <= result["score"] <= 100

def test_score_candidate_missing_skills_key():
    """score_candidate: candidate dict missing skills key (from C8 edge case)."""
    candidate = {"name": "Test", "experience_years": 3}
    requirements = {"required_skills": ["Python"], "min_experience": 2}
    result = score_candidate(candidate, requirements)
    assert result["score"] == 0  # or whatever your spec says
```

## Phase 4: Generate Implementation

With failing tests in hand, ask Claude Code to generate the server:

```
Implement resume_screener_server.py to pass these
tests. Use FastMCP with stdio transport. Follow the
spec exactly. Use sample candidate data from the
Chapter 68 simulations.
```

The implementation must use verified APIs from this chapter:

```python
from mcp.server.fastmcp import FastMCP
```

Your server skeleton:

```python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("HireFlow Resume Screener")

# Sample candidate data (from your Chapter 68 simulations)
CANDIDATES: dict[str, dict] = {
    "C001": {
        "name": "Sarah Chen",
        "skills": ["Python", "SQL", "Machine Learning"],
        "experience_years": 5,
        "education": "MS Computer Science",
    },
    # ... more candidates from your C8 simulation data
}


@mcp.tool()
def parse_cv(cv_text: str) -> dict:
    """Extract structured candidate data from raw CV text.

    Maps to the CV parsing capability in the Resume Screener
    skill defined in Chapter 67.
    """
    # TODO: implement CV parsing logic
    pass


@mcp.tool()
def score_candidate(candidate: dict, job_requirements: dict) -> dict:
    """Score a candidate against job requirements.

    Returns score 0-100 with breakdown. Uses the scoring logic
    validated in Chapter 68 simulations.
    """
    # TODO: implement candidate scoring logic
    pass


@mcp.resource("candidates://profiles/{candidate_id}")
def get_candidate_profile(candidate_id: str) -> str:
    """Retrieve a candidate profile by ID.

    Sample data reused from Chapter 68 simulation scenarios.
    """
    # TODO: implement profile retrieval by candidate_id
    pass


@mcp.prompt()
def screening_summary(candidate_name: str, job_title: str) -> str:
    """Generate a screening summary prompt for a candidate and position.

    Maps to the summarization capability in the Resume Screener
    skill defined in Chapter 67.
    """
    # TODO: implement screening summary prompt template
    pass


if __name__ == "__main__":
    mcp.run(transport="stdio")
```

## Phase 5: Discipline Stack

Run the full discipline stack. Every check must pass:

```bash
# Step 1: Lint
ruff check . && ruff format .

# Step 2: Type check
pyright

# Step 3: Test
pytest

# All three in one command:
ruff check . && ruff format . && pyright && pytest
```

Fix any failures. Common issues at this stage:

| Tool    | Common Failure                                      | Fix                                                   |
| ------- | --------------------------------------------------- | ----------------------------------------------------- |
| ruff    | Unused imports, line too long                       | Remove unused imports, break long lines               |
| pyright | Missing type annotations, incompatible return types | Add annotations, fix return type mismatches           |
| pytest  | Assertion failures on edge cases                    | Update implementation to match spec's edge case rules |

> **James:** I always run pytest first because that is the most interesting part.
>
> **Emma:** What happens when pyright fails?
>
> **James:** I find out my types are wrong. Which might mean my tests are testing the wrong types.
>
> **Emma:** So run pyright first. Then pytest. Ruff is fast, so run it first to clear the noise. The order matters: lint, types, tests.

## Phase 6: Verify with MCP Inspector

The discipline stack verifies your Python code. The Inspector verifies your MCP server:

```bash
mcp dev resume_screener_server.py
```

In the Inspector, verify:

1. **Tools tab**: Both `parse_cv` and `score_candidate` appear with correct parameter schemas
2. **Resources tab**: The `candidates://profiles/{candidate_id}` template is listed
3. **Prompts tab**: The `screening_summary` prompt appears with its parameters
4. **Manual tool call**: Call `parse_cv` with sample CV text and verify the output structure matches your Chapter 67 skill definition
5. **Manual resource read**: Read `candidates://profiles/C001` and verify it returns profile data matching your Chapter 68 simulation candidates
6. **Error handling**: Call `parse_cv` with an empty string and verify you get a structured response (not a crash), consistent with what your Chapter 68 simulations tested

## Phase 7: Git Commit

If all checks pass, commit your work:

```bash
git add resume_screener_server.py spec.md tests/
git commit -m "feat: expose Resume Screener skill as MCP server"
```

The commit message follows the conventional commits format. The `feat:` prefix signals a new feature. Note the message: you are not creating something from nothing. You are exposing an existing, validated skill over MCP.

## Success Criteria

Use this checklist to evaluate your own work. Every box should be checked before you consider the capstone complete:

- [ ] **Server starts without errors**: `python resume_screener_server.py` does not crash
- [ ] **`tools/list` returns both tools**: Inspector shows `parse_cv` and `score_candidate` with correct JSON schemas
- [ ] **`resources/list` returns the candidate resource template**: Inspector shows `candidates://profiles/{candidate_id}`
- [ ] **`prompts/list` returns the screening prompt**: Inspector shows `screening_summary` with `candidate_name` and `job_title` parameters
- [ ] **`parse_cv` handles empty input gracefully**: Empty string returns a structured response with empty fields, not an exception
- [ ] **`score_candidate` produces scores between 0-100**: No score exceeds the bounds, even with adversarial input (validated against Chapter 68 edge cases)
- [ ] **All code passes ruff, pyright, pytest**: The full discipline stack is green
- [ ] **Inspector shows all primitives registered correctly**: Manual verification through the browser UI confirms every primitive
- [ ] **Sample data matches Chapter 68 simulations**: The hardcoded candidates are the same ones you tested in Chapter 68, not invented new ones

> **James:** Nine criteria now. One more than last time I counted.
>
> **Emma:** The ninth is the connection check. Your sample data should come from the simulations you already ran, not from your imagination. That is the difference between building on validated work and starting over.
>
> **James:** So the Chapter 68 simulations are not just a learning exercise. They are the test data for this server.
>
> **Emma:** Everything in Part 6 builds on what came before. Your concept paper feeds your skill definitions. Your skill definitions feed your simulations. Your simulations feed your MCP servers. If you break the chain, you lose the validation.

## Starter Hints

If you get stuck, expand the section that matches where you are blocked. Try to solve it yourself first.

<details>
<summary>Hint 1: parse_cv extraction approach</summary>

You do not need NLP for this exercise. A simple approach:

- Split the CV text by newlines
- First line is the name
- Look for lines containing "Skills:" or similar headers
- Split skill strings by commas
- Look for year mentions near "experience" keywords

The goal is a working extractor, not a production-quality one. Keep it simple. In later chapters, when you build the full Resume Screener FTE (Chapter 79), you will replace this with an LLM-backed parser.

</details>

<details>
<summary>Hint 2: score_candidate scoring logic</summary>

A weighted scoring approach:

- Skill match: count how many required skills the candidate has, divide by total required. Weight: 50%.
- Experience: if candidate meets minimum, full points. Weight: 30%.
- Education: if candidate meets requirement, full points. Weight: 20%.
- Final score: `int(skill_score * 50 + experience_score * 30 + education_score * 20)`

This gives a score between 0 and 100 by construction. Your Chapter 68 simulations should have tested partial matches; make sure your implementation produces consistent results.

</details>

<details>
<summary>Hint 3: Resource for unknown candidate_id</summary>

When `candidate_id` is not in your `CANDIDATES` dictionary, return a structured error response rather than raising an exception:

```python
@mcp.resource("candidates://profiles/{candidate_id}")
def get_candidate_profile(candidate_id: str) -> str:
    """Retrieve a candidate profile by ID."""
    import json
    if candidate_id not in CANDIDATES:
        return json.dumps({"error": f"Candidate {candidate_id} not found"})
    return json.dumps(CANDIDATES[candidate_id])
```

Resources return content (strings), not exceptions. The client decides how to handle a "not found" payload.

</details>

<details>
<summary>Hint 4: Prompt template structure</summary>

A screening summary prompt should produce the kind of report your Resume Screener skill was designed to generate:

```python
@mcp.prompt()
def screening_summary(candidate_name: str, job_title: str) -> str:
    """Generate a screening summary prompt for a candidate and position."""
    return (
        f"Generate a screening summary for candidate {candidate_name} "
        f"applying for the {job_title} position. Include: "
        f"1. Overall fit assessment (score and recommendation). "
        f"2. Skills match: which required skills are met, which are missing. "
        f"3. Experience assessment: years vs requirement. "
        f"4. Recommended next steps (advance to interview, reject, or hold)."
    )
```

</details>

## Reflection

After completing the capstone, answer these questions for yourself:

1. Which phase took the longest: spec, tests, implementation, or debugging?
2. How much did your Chapter 67 skill definition help when writing the spec? Were there decisions the skill definition already made for you?
3. Did any of your Chapter 68 simulation edge cases reveal gaps in your MCP implementation?
4. How did the Inspector help you find issues that pytest alone would have missed?
5. What is the difference between "a skill that works" and "a server that serves that skill"? What did the MCP layer add?

These answers are not graded. They are for calibrating your own understanding of the skill-to-server bridge.

## Backward References

- **Chapter 67** defined the Resume Screener skill with its capabilities: CV parsing, candidate scoring, and screening summaries. This capstone exposes those capabilities as MCP primitives.
- **Chapter 68** validated the skill through simulation with specific test scenarios. The sample data and edge cases from those simulations are reused as test cases and hardcoded data in this server.
- **Lessons 4-5** taught the `FastMCP`, `@mcp.tool()`, `@mcp.resource()`, and `@mcp.prompt()` APIs you use here.
- **Lesson 8** taught the Inspector workflow and debugging decision tree you use in Phase 6.
- **Part 1 (Discipline Stack)**: The `ruff check . && ruff format . && pyright && pytest` pipeline was introduced in your earliest coding chapters.

## Forward Reference

In Chapter 70, you will build additional MCP servers for the CV parser and Job Template tools. In Chapter 73, you will wire the Resume Screener MCP server you built here into a Claude Agents SDK agent that uses `parse_cv` and `score_candidate` as real MCP tools during agent execution. The server you built today becomes the backend for a running agent.
