---
sidebar_position: 8
title: "Make: Candidate Summarizer + Checkpoint Inventory"
description: "Build the Candidate Summarizer skill with full MCP tool configuration, then verify all four HireFlow skills have working runtime integration through a checkpoint inventory."
chapter: 71
lesson: 8
duration_minutes: 45
keywords:
  - make capstone
  - candidate summarizer
  - multi-tool orchestration
  - graceful degradation
  - checkpoint inventory
  - spec-first
  - test-driven generation
  - HireFlow

skills:
  - name: "Multi-Tool Skill Construction"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can build a skill function that calls four or more MCP tools in sequence with error guards, type annotations, and structured output"

  - name: "Graceful Degradation Design"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "5.1 Solving Technical Problems"
    measurable_at_this_level: "Can design a multi-tool workflow that returns a structured summary even when some tools fail, including partial data and failure explanations"

  - name: "Checkpoint Inventory Verification"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "5.1 Solving Technical Problems"
    measurable_at_this_level: "Can verify that all four HireFlow skills have working MCP tool access by running each skill and checking the listed tools"

  - name: "Spec-First Development"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Create"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can write a specification document for a multi-tool skill before writing any implementation code"

learning_objectives:
  - objective: "Write a specification for the Candidate Summarizer skill that maps each output section to the MCP tools that provide its data"
    proficiency_level: "B1"
    bloom_level: "Create"
    assessment_method: "Student produces a spec document with tool-to-output mapping before implementation"

  - objective: "Build a Candidate Summarizer that calls at least 4 MCP tools in sequence with isError guards on every call"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Function calls parse_cv, score_candidate, extract_skills, and get_template with guards on all four"

  - objective: "Implement graceful degradation so the summarizer returns useful output even when some tools fail"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "When one tool fails, the summary includes data from tools that succeeded and marks failed sections as unavailable"

  - objective: "Verify all four HireFlow skills have working MCP tool access through a checkpoint inventory"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Student checks all four rows in the inventory table by running each skill against the listed tools"

cognitive_load:
  new_concepts: 2
  assessment: "Two new concepts: checkpoint inventory as a verification pattern, and graceful degradation in multi-tool workflows. All MCP APIs, error handling patterns, and tool call sequences were taught in Lessons 1-7. This lesson is synthesis and integration."

differentiation:
  extension_for_advanced: "Add a confidence_score field to the summary that reflects how complete the data is. If all 4 tools succeed, confidence is 'high'. If 3 succeed, 'medium'. If fewer than 3, 'low'. Include the confidence calculation logic in your spec."
  remedial_for_struggling: "Start with only 2 tool calls (parse_cv and score_candidate). Get those working with guards. Then add extract_skills. Then add get_template. Incremental progress beats stuck perfection."
---

# Make: Candidate Summarizer + Checkpoint Inventory

:::danger MAKE CHALLENGE [AI-FREE: SPEC ONLY]
Write your specification BEFORE any code. Do not ask your AI assistant to write the spec. The spec is the thinking; the code is the execution. If you skip the thinking, you are outsourcing the part that builds your skill.
:::

This is the capstone for Chapter 71. You will build the Candidate Summarizer, the fourth and final HireFlow FTE skill getting its runtime integration. Then you will verify that all four skills can call the MCP tools they need.

## The Assignment

Build the **Candidate Summarizer** skill with full MCP tool configuration. This skill takes a candidate's name and job role, gathers data from multiple MCP tools, and produces a decision-ready summary for the hiring manager.

### What the Summarizer Must Do

1. Accept a candidate name and job role as input
2. Call `parse_cv` to get structured CV data
3. Call `score_candidate` to get the match score
4. Call `extract_skills` to get the normalized skills list
5. Call `get_template` to get the job template for context
6. Compile a decision-ready summary with these sections:

| Summary Section       | Data Source                       | What It Contains                                    |
| --------------------- | --------------------------------- | --------------------------------------------------- |
| Candidate Profile     | `parse_cv`                        | Name, experience, education                         |
| Match Score           | `score_candidate`                 | Numeric score (0-100, normalized)                   |
| Skill Alignment       | `extract_skills` + `get_template` | Skills matched, skills missing, coverage percentage |
| Interview Focus Areas | Derived from gaps                 | Competency areas where the candidate needs probing  |
| Hiring Recommendation | Derived from score + alignment    | `"proceed"`, `"hold"`, or `"reject"` with reasoning |

### Technical Requirements

- Guard every tool call with `isError` check
- Return a structured summary even if some tools fail (**graceful degradation**)
- Full type annotations on all parameters and return values
- Passes `ruff check`, `pyright`, `pytest`

---

## Phase 1: Write the Spec (AI-FREE)

Before any code, write a specification document. You are translating the Candidate Summarizer skill's purpose (from Chapter 67) into a concrete implementation plan.

Your spec should answer:

1. **Function signature**: What parameters does `summarize_candidate` accept? What does it return?
2. **Tool call sequence**: In what order do you call the four tools? Does the order matter? (Hint: `score_candidate` needs `cv_data` from `parse_cv`, so order matters for at least two calls.)
3. **Graceful degradation strategy**: If `extract_skills` fails but the other three succeed, what does the summary look like? Write out the specific output for each failure scenario.
4. **Recommendation logic**: How does the function decide between `"proceed"`, `"hold"`, and `"reject"`? What thresholds? What inputs?
5. **Success criteria**: How will you know the implementation is correct?

### Spec Template

```markdown
# Spec: Candidate Summarizer with MCP Tool Integration

## Function Signature

- Name: summarize_candidate
- Parameters: [name, type, description for each]
- Returns: [type with field descriptions]

## Tool Call Sequence

| Step | Tool | Input | Output Used For |
| ---- | ---- | ----- | --------------- |
| 1    | ?    | ?     | ?               |
| 2    | ?    | ?     | ?               |
| 3    | ?    | ?     | ?               |
| 4    | ?    | ?     | ?               |

## Dependency Graph

[Which tool calls depend on results from earlier calls?]
[Which calls could theoretically run in parallel?]

## Graceful Degradation Matrix

| Tool That Fails | Available Data | Summary Completeness |
| --------------- | -------------- | -------------------- |
| parse_cv        | ?              | ?                    |
| score_candidate | ?              | ?                    |
| extract_skills  | ?              | ?                    |
| get_template    | ?              | ?                    |

## Recommendation Logic

- proceed: [conditions]
- hold: [conditions]
- reject: [conditions]
- insufficient_data: [when too many tools failed]

## Success Criteria

- [ ] [criterion 1]
- [ ] [criterion 2]
- [ ] ...
```

Spend 10-15 minutes on this. Write it in a file called `summarizer_spec.md` in your project directory.

> **Emma:** "The graceful degradation matrix is the most important part. If you cannot describe what happens when each tool fails, you cannot implement it correctly."
>
> **James:** "Because the implementation is just a series of if/else branches for each failure?"
>
> **Emma:** "Exactly. The spec IS the branching logic, written in English. The code translates it."

## Phase 2: Spec Review with AI

Show your spec to Claude Code:

```
Review this Candidate Summarizer spec. Check:
1. Is the tool call sequence correct? (Are dependencies respected?)
2. Does the graceful degradation matrix cover all failure combinations?
3. Is the recommendation logic well-defined with clear thresholds?
4. Are there edge cases I missed?
```

Fix any issues Claude Code identifies before moving to implementation.

## Phase 3: Test-Driven Generation (TDG)

Use your reviewed spec to generate tests:

```
Based on this spec, write pytest tests for summarize_candidate.
Test the happy path (all 4 tools succeed), each single-tool-failure
scenario from the degradation matrix, and the edge case where all
tools fail. Mock the MCP session to control tool responses.
```

The tests should fail because there is no implementation yet.

Example test structure (based on your spec):

```python
import pytest
from unittest.mock import AsyncMock, MagicMock


@pytest.mark.asyncio
async def test_summarizer_happy_path() -> None:
    """All four tools succeed: summary has all sections populated."""
    # Mock session with successful responses for all 4 tools
    # Call summarize_candidate
    # Assert all sections present: profile, score, skill_alignment,
    #   focus_areas, recommendation
    ...


@pytest.mark.asyncio
async def test_summarizer_parse_cv_fails() -> None:
    """parse_cv fails: summary should indicate CV data unavailable."""
    # Mock parse_cv to return isError=True
    # Assert summary has error for profile but other sections attempted
    ...


@pytest.mark.asyncio
async def test_summarizer_all_tools_fail() -> None:
    """All tools fail: summary should indicate insufficient data."""
    # Mock all tools to return isError=True
    # Assert recommendation is "insufficient_data"
    ...
```

## Phase 4: Generate Implementation

With failing tests, ask Claude Code to generate the implementation:

```
Implement summarize_candidate to pass these tests.
Use the MCP Python SDK: StdioServerParameters, stdio_client,
ClientSession. Guard every tool call. Follow the graceful
degradation matrix from the spec.
```

Your implementation skeleton:

```python
import json

from mcp.client.session import ClientSession
from mcp.client.stdio import StdioServerParameters, stdio_client


async def summarize_candidate(
    cv_text: str,
    job_role: str,
) -> dict[str, object]:
    """Produce a decision-ready candidate summary using MCP tools.

    Calls parse_cv, score_candidate, extract_skills, and get_template.
    Returns a structured summary even if some tools fail (graceful
    degradation).
    """
    server_params = StdioServerParameters(
        command="uv", args=["run", "hireflow/servers/hireflow_mcp.py"]
    )

    summary: dict[str, object] = {
        "candidate_profile": None,
        "match_score": None,
        "skill_alignment": None,
        "interview_focus_areas": None,
        "recommendation": None,
        "errors": [],
    }

    async with stdio_client(server_params) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()

            # Step 1: Parse the CV
            # Step 2: Score the candidate (depends on Step 1)
            # Step 3: Extract skills
            # Step 4: Get job template
            # Step 5: Derive recommendation from available data

    return summary
```

## Phase 5: Discipline Stack

Run the full discipline stack:

```bash
# Lint
ruff check . && ruff format .

# Type check
pyright

# Test
pytest

# All three:
ruff check . && ruff format . && pyright && pytest
```

Fix any failures. Common issues at this stage:

| Tool    | Common Failure                                  | Fix                                                                  |
| ------- | ----------------------------------------------- | -------------------------------------------------------------------- |
| ruff    | Unused imports from iteration                   | Remove imports you tried and discarded                               |
| pyright | `object` type too broad for dict values         | Use `str \| int \| None \| list[str]` union or `Any` with comment    |
| pytest  | Graceful degradation not returning partial data | Check that each tool failure path still populates available sections |

## Phase 6: Git Commit

If all checks pass, commit your work:

```bash
git add summarizer_spec.md hireflow/skills/candidate_summarizer.py tests/
git commit -m "feat: wire Candidate Summarizer skill to MCP tools"
```

---

## Success Criteria

Use this checklist to evaluate your work before moving to the checkpoint inventory:

- [ ] **Calls at least 4 MCP tools in sequence**: `parse_cv`, `score_candidate`, `extract_skills`, `get_template`
- [ ] **Guards every tool call with `isError` check**: No tool result accessed without checking `isError` and `content` first
- [ ] **Returns structured summary even if some tools fail**: When `extract_skills` fails, the summary still includes profile and score data
- [ ] **Recommendation logic uses clear thresholds**: The function decides `"proceed"` / `"hold"` / `"reject"` based on documented criteria
- [ ] **All type annotations present**: Every parameter and return value has a type annotation
- [ ] **Passes ruff, pyright, pytest**: The full discipline stack is green

---

## Checkpoint Inventory

You have now wired all four HireFlow FTE skills to MCP tools. This **checkpoint inventory** verifies the integration is complete.

| FTE Skill             | MCP Tools Used                                                  | Status      |
| --------------------- | --------------------------------------------------------------- | ----------- |
| Job Spec Writer       | `list_templates`, `get_template`, `validate_job_spec`           | ☐ Connected |
| Resume Screener       | `parse_cv`, `score_candidate`, `extract_skills`                 | ☐ Connected |
| Interview Q Generator | `get_template`, `parse_cv`, `extract_experience`                | ☐ Connected |
| Candidate Summarizer  | `parse_cv`, `score_candidate`, `extract_skills`, `get_template` | ☐ Connected |

### How to Verify Each Row

For each skill, run it with test input and confirm it calls the listed tools without errors. A skill is "Connected" when:

1. The function executes without unhandled exceptions
2. Every tool call in the function receives a response (even if the response is a controlled error)
3. The function returns structured output matching its documented return type

Check each box by running the skill and verifying it calls the listed tools. If any box is unchecked, go back to the relevant Modify exercise or this Make challenge and fix the integration.

### What This Inventory Means

This inventory closes Phase 2: Incubate. Look at what each phase validated:

| Phase                     | Chapters | What Was Validated                                                            |
| ------------------------- | -------- | ----------------------------------------------------------------------------- |
| Phase 1: Explore          | 61-66    | What the agents should do (blueprint, concept paper, domain mastery)          |
| Phase 2: Incubate         | 67-71    | Can the pieces actually work? (skills, simulations, MCP servers, integration) |
| Phase 3: Build Specialist | 72+      | Production runtime with Agent SDKs                                            |

Every skill now has validated intelligence (Chapters 67-68) and validated infrastructure (Chapters 69-71). Phase 3 begins in Chapter 72, where Agent SDKs give these skills a production runtime. The code you wrote in this chapter becomes the integration layer that Agent SDKs orchestrate.

> **James:** "Wait, so basically... I started Part 6 with a blueprint on paper and now I have four skills that can actually call tools and process real data?"
>
> **Emma:** "You went from 'hire someone to do this' to 'build a system that does this.' That is the factory mindset."
>
> **James:** "And the checkpoint inventory is proof that all the wiring works. Not a plan, not a diagram. Running code."
>
> **Emma:** "Running code that you traced, debugged, and verified. The next phase does not start on faith. It starts on evidence."

---

## Reflection

After completing the capstone and checkpoint inventory, answer these questions for yourself:

1. Which phase took the longest: spec, tests, implementation, or debugging? What does that tell you about where the real work lives?
2. How did the graceful degradation matrix in your spec translate to code? Was the code easier to write because the spec already described every failure branch?
3. How many times did you write the `isError` guard pattern in this chapter? Does the repetition feel like a strength (consistency) or a weakness (boilerplate)?
4. Look at the checkpoint inventory. Which skill's integration was the hardest? Which was the easiest? Why?
5. What would break if you changed the `score_candidate` tool to return a JSON object instead of a plain float string? How many skills would need updating?

These answers are not graded. They calibrate your understanding of multi-tool integration and prepare you for the orchestration patterns in Phase 3.

## Backward References

- **Chapter 67** defined the Candidate Summarizer skill with its purpose: compile all candidate data into a decision-ready summary. This capstone gives that skill runtime access to the data it needs.
- **Chapter 68** validated the skill through simulation. The scenarios from those simulations inform your test cases.
- **Chapters 69-70** built the MCP servers that provide `parse_cv`, `score_candidate`, `extract_skills`, and `get_template`. This capstone calls those tools from the client side.
- **Lesson 4** introduced the `isError` guard pattern. This capstone applies it to every tool call.
- **Lesson 7, Modification C** introduced multi-tool orchestration and graceful degradation. This capstone extends that pattern to four tools.

## Forward Reference

Chapter 72 introduces Agent SDKs (OpenAI Agents SDK). The skills you wired here become the building blocks that Agent SDKs orchestrate. The `summarize_candidate` function you built in this capstone will become a tool that an Agent SDK agent can call, adding memory, planning, and multi-agent coordination on top of the integration you established.
