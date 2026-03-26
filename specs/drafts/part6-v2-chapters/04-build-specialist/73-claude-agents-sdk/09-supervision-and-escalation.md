---
sidebar_position: 9
title: "Supervision and Escalation Patterns"
description: "Design three supervision levels for HireFlow agents: autonomous, supervised, and gated. Learn to match risk tiers to permission modes and build custom approval logic that protects high-stakes hiring decisions."
chapter: 73
lesson: 9
duration_minutes: 35
keywords:
  - agent supervision
  - escalation patterns
  - permission modes
  - risk tiering
  - human-in-the-loop
  - approval logic
  - hireflow governance
  - autonomous agents
skills:
  - name: "Supervision Level Design"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can classify agent tasks into autonomous, supervised, and gated tiers based on risk analysis and implement the corresponding permission configuration"
  - name: "Custom Approval Logic"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can write a custom approval handler that routes tool calls through conditional logic based on domain-specific risk thresholds"
  - name: "Escalation Pattern Implementation"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Digital Problem-Solving"
    measurable_at_this_level: "Can describe when and why an agent should escalate to a human reviewer and identify the signals that trigger escalation"
learning_objectives:
  - objective: "Classify HireFlow agent tasks into three supervision tiers based on risk and reversibility"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Risk classification table: assign 6 HireFlow operations to correct supervision tiers with justification"
  - objective: "Implement autonomous, supervised, and gated configurations using ClaudeAgentOptions"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Code review: given three agent configurations, identify which supervision level each implements"
  - objective: "Build a custom approval handler that applies domain-specific rules to tool call authorization"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Modify exercise: extend the approval handler to cover a new tool with threshold-based logic"
  - objective: "Design an escalation path for agents encountering ambiguous or high-risk situations"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Scenario analysis: given an agent encountering conflicting candidate data, describe the correct escalation sequence"
cognitive_load:
  new_concepts: 3
  assessment: "Three new concepts: supervision tiers (autonomous, supervised, gated), custom approval handlers, and escalation patterns. Students already understand permission_mode from Lesson 03 and tool restrictions from Lesson 05. This lesson builds directly on those foundations by adding domain-specific risk reasoning."
differentiation:
  extension_for_advanced: "Design a fourth supervision level: 'audited autonomous,' where the agent acts freely but every decision is logged to an immutable audit trail. Sketch the approval handler that would implement this."
  remedial_for_struggling: "Focus on the risk classification table. If you can explain why rejecting a candidate is higher-risk than parsing a CV, you understand the core principle. The code patterns follow from that reasoning."
---

# Supervision and Escalation Patterns

## James Wants Full Autonomy

James leaned back in his chair, arms crossed, grinning at the four agent configurations on his screen. Every single one had the same setting: `permission_mode="bypassPermissions"`.

"Look at this," he said, gesturing at the terminal. "No interruptions. No approval prompts. The agents just run. I parsed 200 CVs in three minutes flat."

Emma glanced at the screen and immediately spotted the problem. "What happens when the scoring agent rejects a candidate?"

"Same thing. It scores them, checks the threshold, marks them as rejected. Fast."

"And what if the score is wrong?"

James paused. "Why would the score be wrong?"

"What if the CV parser misread a date, and the agent calculated three years of experience instead of eight? Your fully autonomous agent just rejected a qualified candidate with no human ever seeing the decision."

James opened his mouth, then closed it. He had been thinking about speed. Emma was thinking about consequences.

## The Three Supervision Levels

Not every agent decision carries the same weight. Parsing a CV extracts data; that is low-stakes and reversible. Scoring a candidate involves judgment; mistakes are harder to catch after the fact. Rejecting a candidate or sending a communication to them is high-stakes and irreversible.

This observation leads to three **supervision levels**, each matching a tier of risk:

| Level |      Name      |  Risk  | Agent Behavior                                 | Human Role                            |
| :---: | :------------: | :----: | :--------------------------------------------- | :------------------------------------ |
|   1   | **Autonomous** |  Low   | Acts without approval                          | Reviews results after the fact        |
|   2   | **Supervised** | Medium | Proposes action, waits for approval            | Approves or modifies before execution |
|   3   |   **Gated**    |  High  | Cannot proceed without explicit human sign-off | Makes the final decision              |

Think of it like expense approvals in a company. An employee can buy office supplies without asking (autonomous). Purchasing new software requires a manager's signature (supervised). Signing a contract with a vendor requires executive approval (gated).

James nodded slowly. "Wait, so basically it's like having an employee who needs approval for every expense report versus one who has a company card with a spending limit."

"Exactly," Emma said. "The question is: which HireFlow tasks belong at which level?"

## Classifying HireFlow Operations

Before writing any configuration code, you need to classify your agent operations by risk. Here is the classification for HireFlow:

| Operation                          | Supervision Level | Why                                                     |
| :--------------------------------- | :---------------: | :------------------------------------------------------ |
| Parse CV (extract structured data) |    Autonomous     | Read-only, no decisions, fully reversible               |
| Generate job description           |    Autonomous     | Creates a draft, human reviews before publishing        |
| Score candidate against job spec   |    Supervised     | Involves judgment; incorrect scores compound downstream |
| Rank candidates for a role         |    Supervised     | Ordering affects who gets interviewed                   |
| Reject a candidate                 |       Gated       | Irreversible; affects a real person                     |
| Send communication to candidate    |       Gated       | External-facing; cannot be unsent                       |

The classification principle: **the harder a mistake is to reverse, the more supervision the operation requires.**

:::info Recall: Chapter 72
In Chapter 72, you explored autonomy levels for AI agents at a conceptual level. This lesson turns that conceptual framework into running code. The supervision tiers here map directly to the autonomy spectrum from that chapter.
:::

## Implementing the Three Levels

Each supervision level maps to a combination of `allowed_tools` and `permission_mode` in `ClaudeAgentOptions`.

### Level 1: Autonomous

The CV parsing agent reads files and extracts data. It needs `Read` access and the `parse_cv` MCP tool. Because both operations are read-only, there is no risk in letting the agent run without prompts.

```python
from claude_agent_sdk import ClaudeAgentOptions, query, AssistantMessage, TextBlock


# Level 1: Autonomous (low-risk, read-only operations)
autonomous_options = ClaudeAgentOptions(
    allowed_tools=["mcp__hiring__parse_cv", "Read"],
    permission_mode="bypassPermissions",
    max_turns=3,
)


async def parse_all_cvs(cv_folder: str) -> list[dict[str, str]]:
    """Parse CVs autonomously. No human approval needed."""
    prompt = (
        f"Read every PDF file in {cv_folder} and extract structured "
        "candidate data using the parse_cv tool. Return results as JSON."
    )
    results: list[dict[str, str]] = []
    async for message in query(prompt=prompt, options=autonomous_options):
        if isinstance(message, AssistantMessage):
            for block in message.content:
                if isinstance(block, TextBlock):
                    results.append({"raw_output": block.text})
    return results
```

The key decision: `bypassPermissions` is safe here because `allowed_tools` is restricted to read-only operations. The permission mode controls prompting behavior; the tool allowlist controls capability. Restrict capability first, then loosen prompting.

### Level 2: Supervised

The scoring agent makes judgments. A wrong score sends a strong candidate to the rejection pile. The `default` permission mode means the agent will prompt the user before executing each tool call, giving the human a chance to review the input before it runs.

```python
# Level 2: Supervised (medium-risk, involves judgment)
supervised_options = ClaudeAgentOptions(
    allowed_tools=["mcp__hiring__score_candidate", "Read"],
    permission_mode="default",
    max_turns=5,
)


async def score_candidate_supervised(
    candidate_data: str, job_spec: str
) -> None:
    """Score a candidate with human approval at each step."""
    prompt = (
        f"Score this candidate against the job specification.\n\n"
        f"Candidate data:\n{candidate_data}\n\n"
        f"Job specification:\n{job_spec}\n\n"
        "Use the score_candidate tool. Explain your reasoning before scoring."
    )
    async for message in query(prompt=prompt, options=supervised_options):
        if isinstance(message, AssistantMessage):
            for block in message.content:
                if isinstance(block, TextBlock):
                    print(block.text)
```

### Level 3: Gated

The rejection agent cannot proceed at all without the hiring manager's explicit sign-off. In this configuration, the human reviews the full reasoning, the candidate's data, and the proposed action before any irreversible step.

```python
# Level 3: Gated (high-risk, irreversible actions)
gated_options = ClaudeAgentOptions(
    allowed_tools=[
        "mcp__hiring__reject_candidate",
        "mcp__hiring__send_communication",
        "Read",
    ],
    permission_mode="default",
    max_turns=3,
)


async def reject_candidate_gated(
    candidate_id: str, reason: str
) -> None:
    """Reject a candidate. Requires explicit human approval."""
    prompt = (
        f"Prepare a rejection decision for candidate {candidate_id}.\n"
        f"Reason: {reason}\n\n"
        "Before calling reject_candidate, present the full reasoning "
        "and wait for human approval. Do NOT proceed without confirmation."
    )
    async for message in query(prompt=prompt, options=gated_options):
        if isinstance(message, AssistantMessage):
            for block in message.content:
                if isinstance(block, TextBlock):
                    print(block.text)
```

## Beyond Binary: Custom Approval Logic

The three-level model covers most cases, but sometimes you need finer control. What if borderline candidates (scores between 4.0 and 6.0) need human review, while clear rejections (below 3.0) can proceed automatically?

This is where a **custom approval handler** enters the picture. Instead of a blanket "approve all" or "prompt for all" policy, you write logic that inspects the tool call and decides case by case.

```python
from typing import Any


async def hiring_approval_handler(
    tool_name: str, tool_input: dict[str, Any]
) -> dict[str, Any]:
    """Route tool calls through domain-specific approval logic.

    Returns a dict with 'behavior' key:
      - 'allow': proceed without prompting
      - 'deny': block with explanation
      - 'ask': prompt the human for a decision
    """
    # Parsing is always safe
    if tool_name == "mcp__hiring__parse_cv":
        return {"behavior": "allow", "updatedInput": tool_input}

    # Scoring: auto-approve (the score itself is informational)
    if tool_name == "mcp__hiring__score_candidate":
        return {"behavior": "allow", "updatedInput": tool_input}

    # Rejection: conditional on score
    if tool_name == "mcp__hiring__reject_candidate":
        score: float = tool_input.get("score", 0.0)
        if score < 3.0:
            # Clear rejection: allow automatically
            return {"behavior": "allow", "updatedInput": tool_input}
        if score > 7.0:
            # High scorer being rejected? Block entirely.
            return {
                "behavior": "deny",
                "message": (
                    f"Score {score}/10 is above threshold. "
                    "Cannot auto-reject a strong candidate."
                ),
            }
        # Borderline: escalate to human
        return {
            "behavior": "deny",
            "message": (
                f"Score {score}/10 is borderline (3.0 to 7.0). "
                "Human review required before rejection."
            ),
        }

    # Communication: always require human approval
    if tool_name == "mcp__hiring__send_communication":
        return {
            "behavior": "deny",
            "message": "External communications require human approval.",
        }

    # Default: allow unknown tools (fail-open for development)
    return {"behavior": "allow", "updatedInput": tool_input}
```

Study the logic carefully. Three principles are at work:

1. **Read-only operations get automatic approval.** Parsing and scoring produce information; they do not change the world.
2. **Irreversible actions use threshold logic.** A score below 3.0 is a clear rejection. A score between 3.0 and 7.0 is ambiguous and needs a human. A score above 7.0 being rejected is suspicious and should be blocked.
3. **External-facing actions are always gated.** Anything sent to a candidate must have human sign-off.

"Wait, so basically the approval handler is a policy engine?" James said.

"A small one," Emma replied. "In production systems, these policies live in configuration files, not in code. But the principle is the same: encode your risk tolerance as rules, then let the system enforce them consistently."

## Escalation: When the Agent Says "I Need Help"

Supervision handles the case where the system knows an action is risky. But what about situations the agent itself recognizes as uncertain?

**Escalation** is the pattern where an agent encounters something it cannot resolve and hands control to a human. In HireFlow, this happens when:

- A CV contains contradictory information (two different graduation dates)
- A candidate's experience does not cleanly map to the scoring rubric
- The agent's confidence in its assessment falls below a threshold

The implementation uses the agent's prompt to define escalation triggers:

```python
escalation_prompt = """You are a HireFlow Resume Screener.

When you encounter ANY of these situations, STOP processing and
report the issue instead of making a guess:

1. Contradictory dates or claims in the candidate's CV
2. Experience that does not map to any scoring dimension
3. Missing critical information (no work history, no education section)
4. A candidate who scores above 8.0 on some dimensions and below 3.0
   on others (extreme variance)

For each escalation, report:
- What you found
- Why it requires human judgment
- What information would help you proceed

Do NOT attempt to resolve ambiguity by averaging or guessing.
"""

escalation_options = ClaudeAgentOptions(
    allowed_tools=["mcp__hiring__parse_cv", "mcp__hiring__score_candidate", "Read"],
    permission_mode="default",
    max_turns=5,
)
```

The escalation pattern works because the agent's reasoning loop (from Lesson 03) naturally produces a text response when it decides not to call a tool. By instructing the agent to stop and report rather than guess, you convert silent errors into visible decisions.

## The Supervision Decision Framework

When you add a new operation to your agent system, run it through this decision tree:

1. **Is the operation read-only?** If yes, Level 1 (Autonomous).
2. **Does the operation involve judgment or ranking?** If yes, Level 2 (Supervised).
3. **Is the operation irreversible or external-facing?** If yes, Level 3 (Gated).
4. **Does the operation have natural thresholds?** If yes, consider a custom approval handler with conditional logic.
5. **Can the agent encounter genuine ambiguity?** If yes, add escalation triggers to the prompt.

Emma pulled up a diagram on the whiteboard. "Every agent decision lives somewhere on this spectrum. The mistake is not picking the wrong level. The mistake is using the same level for everything."

James looked at his four `bypassPermissions` configurations and sighed. "Fine. I'll tier them."

"You will also sleep better," Emma said, "knowing that your agent cannot reject a senior engineer at 2 AM because a PDF parser misread a date."

## Exercises

### Exercise 1: Classify and Configure

For each HireFlow operation below, determine the supervision level and write the `ClaudeAgentOptions` configuration:

1. Generating interview questions based on a job spec
2. Sending a rejection email to a candidate
3. Summarizing a candidate's strengths for the hiring committee
4. Scheduling an interview slot with a candidate

### Exercise 2: Extend the Approval Handler

Add a new rule to `hiring_approval_handler` for the `mcp__hiring__schedule_interview` tool. The rule: interviews for senior roles (indicated by `"seniority": "senior"` in `tool_input`) require human approval. Junior role interviews can be auto-approved.

### Exercise 3: Design an Escalation Scenario

Write an escalation prompt for the Interview Question Generator agent. Identify three situations where the agent should stop and ask for human guidance instead of generating questions. For each, explain what makes the situation ambiguous.

:::tip Verification
After completing Exercise 2, trace through your approval handler with these test inputs:

- `tool_name="mcp__hiring__schedule_interview"`, `tool_input={"seniority": "junior", "candidate_id": "C-042"}`
- `tool_name="mcp__hiring__schedule_interview"`, `tool_input={"seniority": "senior", "candidate_id": "C-017"}`

The first should return `"allow"`. The second should return `"deny"` with a message about human approval.
:::
