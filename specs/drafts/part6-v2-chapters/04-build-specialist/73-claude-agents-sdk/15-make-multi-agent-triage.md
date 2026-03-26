---
sidebar_position: 15
title: "Make: Multi-Agent Triage System"
description: "Build a multi-agent candidate triage system for HireFlow with an orchestrator, three specialist subagents, supervision tiers, error handling, and cost tracking"
chapter: 73
lesson: 15
duration_minutes: 60
keywords:
  [
    make-capstone,
    multi-agent,
    triage-system,
    orchestrator,
    subagents,
    supervision,
    error-handling,
    cost-tracking,
    spec-first,
    test-driven,
    hireflow,
  ]

skills:
  - name: "Multi-Agent System Design"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can design and implement an orchestrator agent that coordinates three specialist subagents with appropriate tool restrictions and error isolation"

  - name: "Specification Writing"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "5.1 Solving technical problems"
    measurable_at_this_level: "Can write a specification document that defines inputs, outputs, tool assignments, error handling, and supervision rules before writing any code"

  - name: "Error-Resilient Pipeline Design"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "5.1 Solving technical problems"
    measurable_at_this_level: "Can build a batch processing pipeline that logs failures and continues processing remaining items instead of crashing"

  - name: "Cost-Aware Agent Architecture"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can track and report token usage and estimated cost across multiple agent calls in a pipeline"

learning_objectives:
  - objective: "Write a specification for a multi-agent triage system that maps each subagent to its tools, model, and error handling strategy"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Student produces a spec document before any implementation code"

  - objective: "Build an orchestrator that coordinates three specialist subagents: cv-parser, scorer, and triager"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Orchestrator processes 5 CVs through all three stages and produces a ranked report"

  - objective: "Implement error isolation so that a failed CV parse does not crash the entire batch"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Pipeline continues processing after one CV fails and includes the failure in the final report"

  - objective: "Add a supervision layer that routes borderline candidates to human review"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Candidates with scores in the Review tier are flagged with a pending status"

  - objective: "Track and print total token usage and estimated cost at the end of the pipeline"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Pipeline output includes token counts and cost estimate"

cognitive_load:
  new_concepts: 1
  assessment: "One new concept: batch orchestration with error isolation across multiple candidates. All individual patterns (subagents, supervision, cost tracking, MCP tools) were taught in Lessons 07-12. This lesson is synthesis of prior patterns into a complete system."

differentiation:
  extension_for_advanced: "Add a fourth subagent that generates a hiring recommendation report in Markdown, combining triage results from all five candidates into a single document."
  remedial_for_struggling: "Start with one subagent (cv-parser) processing one CV. Get that working. Then add the scorer. Then the triager. Then scale to 5 CVs. Incremental progress beats stuck perfection."
---

# Make: Multi-Agent Triage System

:::danger MAKE CHALLENGE [AI-FREE: SPEC ONLY]
Write your specification BEFORE any code. Do not ask your AI assistant to write the spec. The spec is the thinking; the code is the execution. If you skip the thinking, you are outsourcing the part that builds your skill.
:::

## The Challenge

Build a **multi-agent candidate triage system** for HireFlow. The system takes a batch of five candidate CVs and a job role, processes all candidates through three specialist subagents, classifies them into Accept/Review/Reject tiers, and produces a ranked report with cost tracking.

This capstone combines every pattern from the chapter: MCP tool connection, multi-agent coordination, supervision, error handling, and cost awareness.

## Requirements

### Inputs

- Five candidate CV file paths (strings representing file locations)
- One job role (string, e.g., "Senior Python Developer")

### Subagents

Three specialist subagents, each with its own `AgentDefinition`:

| Subagent    | Purpose                                       | MCP Tools Required             | Model                    |
| ----------- | --------------------------------------------- | ------------------------------ | ------------------------ |
| `cv-parser` | Extract structured data from each CV          | `mcp__hiring__parse_cv`        | claude-sonnet-4-20250514 |
| `scorer`    | Score each candidate against the job role     | `mcp__hiring__score_candidate` | claude-sonnet-4-20250514 |
| `triager`   | Classify candidates into Accept/Review/Reject | None (text reasoning only)     | claude-sonnet-4-20250514 |

### Orchestrator

A main agent that:

1. Receives the batch of 5 CVs and the role
2. Sends each CV to `cv-parser` for extraction
3. Sends each parsed result to `scorer` for scoring
4. Sends all scores to `triager` for classification
5. Produces a final ranked report

### Error Handling

- If a CV fails to parse (file not found, corrupt data, tool error), log the error and continue with the remaining candidates
- The final report includes a "Failed" section listing CVs that could not be processed and the reason

### Supervision

- Candidates classified as "Review" require human-in-the-loop approval
- The output marks Review-tier candidates with a `pending` status

### Cost Tracking

- Track total input tokens, output tokens, and estimated cost across all agent calls
- Print a cost summary at the end

## Step 1: Write Your Specification (AI-FREE)

Your specification should answer these six questions. Write it in a file called `triage_spec.md` before writing any code.

### Question 1: Subagent Inputs and Outputs

For each subagent, define:

- **Input type and format:** What data does it receive?
- **Output type and format:** What data does it return?
- **Error output:** What does it return when something goes wrong?

Example structure (fill in the blanks):

```
cv-parser:
  Input: ___
  Output: ___
  Error: ___

scorer:
  Input: ___
  Output: ___
  Error: ___

triager:
  Input: ___
  Output: ___
  Error: ___
```

### Question 2: Tool Assignments (Least Privilege)

For each subagent, list the exact `allowed_tools`. Remember: each subagent should have only the tools it needs.

- Why does `cv-parser` need `mcp__hiring__parse_cv` but not `mcp__hiring__score_candidate`?
- Why does `triager` need no MCP tools at all?
- Should any subagent have `Read` access? Under what condition?

### Question 3: Model Selection

Each subagent uses a model. Consider cost vs. capability:

- Parsing is mechanical extraction. Does it need the most capable model?
- Scoring involves matching skills. Is this a simple or complex task?
- Triage involves classification and reasoning about edge cases. How much capability does it need?

Write your model choice for each subagent with a one-sentence justification.

### Question 4: Error Handling Strategy

Design the error flow:

- What specific errors can `parse_cv` produce? (file not found, empty file, malformed data)
- When `parse_cv` fails for one CV, what data does the orchestrator pass to the next stage?
- How does the final report distinguish between candidates that were processed and candidates that failed?

### Question 5: Supervision Tiers

Define your tier boundaries:

- What score threshold triggers auto-accept?
- What range triggers human review?
- What score triggers auto-reject?
- What happens when the scorer returns a result that cannot be parsed into a number?

### Question 6: Cost Tracking

Plan your measurement approach:

- Where do you capture token counts? (After each `query()` call? At the end?)
- How do you calculate estimated cost from token counts?
- What format does the cost summary use?

## Step 2: Show Your Spec to Claude Code for Review

After writing your spec, show it to Claude Code:

```
Review my triage system specification for completeness.
Check: Are all inputs/outputs defined? Are tool assignments
least-privilege? Is error handling complete?

[paste your spec]
```

Use the feedback to refine your spec before moving to implementation.

## Step 3: Write Failing Tests

Before implementation, write tests that define correct behavior. Here is a test skeleton:

```python
# File: tests/test_triage_system.py
import pytest

from hireflow.triage import (
    apply_triage_supervision,
    create_cv_parser_agent,
    create_orchestrator,
    create_scorer_agent,
    create_triager_agent,
    extract_score,
    process_candidate_batch,
    validate_cv_input,
)


class TestInputValidation:
    """Tests for pre-processing validation."""

    def test_empty_cv_path_rejected(self) -> None:
        result: str | None = validate_cv_input("")
        assert result is not None
        assert "empty" in result.lower()

    def test_valid_cv_path_accepted(self) -> None:
        result: str | None = validate_cv_input("/path/to/cv.txt")
        assert result is None


class TestTriageSupervision:
    """Tests for the supervision tier classifier."""

    def test_high_score_auto_approved(self) -> None:
        decision: dict[str, str] = apply_triage_supervision(
            score=8.5, candidate_name="Alice", role="Developer"
        )
        assert decision["tier"] == "accept"
        assert decision["action"] == "approved"

    def test_borderline_score_needs_review(self) -> None:
        decision: dict[str, str] = apply_triage_supervision(
            score=6.5, candidate_name="Bob", role="Developer"
        )
        assert decision["tier"] == "review"
        assert decision["action"] == "pending"

    def test_low_score_auto_rejected(self) -> None:
        decision: dict[str, str] = apply_triage_supervision(
            score=3.0, candidate_name="Carol", role="Developer"
        )
        assert decision["tier"] == "reject"
        assert decision["action"] == "rejected"

    def test_unparseable_score_routes_to_review(self) -> None:
        decision: dict[str, str] = apply_triage_supervision(
            score=-1.0, candidate_name="Dave", role="Developer"
        )
        assert decision["tier"] == "review"
        assert decision["action"] == "pending"


class TestScoreExtraction:
    """Tests for extracting scores from agent output."""

    def test_extracts_decimal_score(self) -> None:
        text: str = "Candidate scored Score: 7.5 out of 10"
        score: float | None = extract_score(text)
        assert score == 7.5

    def test_returns_none_for_missing_score(self) -> None:
        text: str = "No numerical score found in this response"
        score: float | None = extract_score(text)
        assert score is None


class TestSubagentCreation:
    """Tests for subagent configuration."""

    def test_cv_parser_has_only_parse_tool(self) -> None:
        agent = create_cv_parser_agent()
        # Verify allowed_tools contains only parse_cv
        assert "mcp__hiring__parse_cv" in agent.tools
        assert "mcp__hiring__score_candidate" not in agent.tools

    def test_scorer_has_only_score_tool(self) -> None:
        agent = create_scorer_agent()
        assert "mcp__hiring__score_candidate" in agent.tools
        assert "mcp__hiring__parse_cv" not in agent.tools

    def test_triager_has_no_mcp_tools(self) -> None:
        agent = create_triager_agent()
        # Triager uses text reasoning, no MCP tools
        for tool_name in agent.tools:
            assert not tool_name.startswith("mcp__")
```

Run the tests. They should all fail:

```bash
pytest tests/test_triage_system.py -v
```

Every test will fail because the functions do not exist yet. That is the point. The tests define what "correct" means before you write the implementation.

## Step 4: Implement the System

Now use Claude Code to help generate the implementation. Share your spec and your failing tests:

```
Implement the triage system defined in triage_spec.md.
All functions should make these tests pass:
tests/test_triage_system.py

Use the Claude Agent SDK with these imports:
- query, ClaudeAgentOptions, AgentDefinition, tool,
  create_sdk_mcp_server, ClaudeSDKClient

Apply these constraints:
- Each subagent gets ONLY its required tools (least privilege)
- Error handling: log and continue, never crash the batch
- All functions have full type annotations
```

### Implementation Guidance

Your implementation should include these components:

**1. Subagent Definitions**

```python
from claude_agent_sdk import AgentDefinition


def create_cv_parser_agent() -> AgentDefinition:
    """Create the CV parsing specialist subagent."""
    return AgentDefinition(
        description="Extracts structured candidate data from raw CV text",
        prompt=(
            "You are a CV parser. Extract the candidate's name, email, "
            "skills, and years of experience from the provided CV text. "
            "Return structured data. If any field is missing, note it "
            "as 'not found' rather than guessing."
        ),
        tools=["mcp__hiring__parse_cv"],
        model="claude-sonnet-4-20250514",
    )
```

**2. Batch Processing with Error Isolation**

```python
import traceback
from dataclasses import dataclass


@dataclass
class CandidateResult:
    """Result of processing a single candidate."""
    cv_path: str
    name: str
    score: float | None
    tier: str
    action: str
    error: str | None


async def process_candidate_batch(
    cv_paths: list[str],
    role: str,
    hiring_server: object,
) -> list[CandidateResult]:
    """Process a batch of CVs through the triage pipeline."""
    results: list[CandidateResult] = []

    for cv_path in cv_paths:
        try:
            result: CandidateResult = await process_single_candidate(
                cv_path, role, hiring_server
            )
            results.append(result)
        except Exception as exc:
            # Log and continue: one failure does not crash the batch
            results.append(
                CandidateResult(
                    cv_path=cv_path,
                    name="Unknown",
                    score=None,
                    tier="error",
                    action="failed",
                    error=f"{type(exc).__name__}: {exc}",
                )
            )
    return results
```

**3. Cost Tracking**

```python
@dataclass
class CostReport:
    """Tracks token usage across all agent calls."""
    total_input_tokens: int = 0
    total_output_tokens: int = 0

    @property
    def estimated_cost_usd(self) -> float:
        """Estimate cost using Claude Sonnet pricing."""
        input_cost: float = (self.total_input_tokens / 1_000_000) * 3.0
        output_cost: float = (self.total_output_tokens / 1_000_000) * 15.0
        return input_cost + output_cost

    def __str__(self) -> str:
        return (
            f"Tokens: {self.total_input_tokens:,} input, "
            f"{self.total_output_tokens:,} output\n"
            f"Estimated cost: ${self.estimated_cost_usd:.4f}"
        )
```

**4. Final Report**

The orchestrator should produce output in this format:

```
=== HireFlow Triage Report ===
Role: Senior Python Developer
Candidates processed: 4 of 5

ACCEPTED (auto-approved):
  1. Sarah Chen     Score: 8.7  Status: approved

REVIEW (needs human approval):
  2. James Park     Score: 6.5  Status: pending
  3. Maria Lopez    Score: 5.8  Status: pending

REJECTED (auto-rejected):
  4. Tom Wilson     Score: 3.2  Status: rejected

FAILED (processing errors):
  5. corrupt_cv.txt  Error: FileNotFoundError: CV file not found

=== Cost Summary ===
Tokens: 12,450 input, 3,200 output
Estimated cost: $0.0854
```

## Step 5: Run the Discipline Stack

After implementation, run the full quality check:

```bash
# Type checking
pyright hireflow/triage.py

# Linting
ruff check hireflow/triage.py

# Tests
pytest tests/test_triage_system.py -v

# Integration test (requires API key)
python -m hireflow.triage
```

Fix any issues until all four commands pass cleanly.

## Success Criteria

Before marking this capstone complete, verify each item:

- [ ] Orchestrator coordinates 3 subagents with appropriate tool restrictions
- [ ] All 5 CVs processed (error handling prevents batch crash)
- [ ] Candidates classified into Accept/Review/Reject tiers
- [ ] Supervision layer marks Review-tier candidates as "pending"
- [ ] Cost report printed at end with token counts and estimated cost
- [ ] All code passes `ruff check` with no warnings
- [ ] All code passes `pyright` with no type errors
- [ ] All tests in `test_triage_system.py` pass

## Commit Your Work

When all success criteria are met:

```bash
git add hireflow/triage.py tests/test_triage_system.py triage_spec.md
git commit -m "ch73: multi-agent triage system for HireFlow"
```

## Reflection

After completing the capstone, answer these questions:

1. **Spec quality:** Did your spec anticipate all the implementation challenges? What did you miss?
2. **Error handling:** Which error case was hardest to handle? Why?
3. **Tool assignment:** Did any subagent need a tool you did not originally assign? What prompted the change?
4. **Cost awareness:** Was the total cost higher or lower than you expected? What drives the cost most: parsing, scoring, or triaging?

> **James:** "The hardest part was not the code. It was the spec. I had to think through every error case before I knew what functions to write."

> **Emma:** "That is the entire point. The spec forces you to confront the design decisions before the code distracts you with syntax. How many error cases did you discover while writing the spec?"

> **James:** "Four that I would have missed if I went straight to code. File not found, empty CV, unparseable score, and the triager receiving partial data when one CV fails."

> **Emma:** "Four bugs prevented before they existed. That is what specification-first development buys you."
