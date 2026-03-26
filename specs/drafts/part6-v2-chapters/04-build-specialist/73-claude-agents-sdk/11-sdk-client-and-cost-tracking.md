---
sidebar_position: 11
title: "ClaudeSDKClient for Multi-Turn and Cost Tracking"
description: "Build multi-turn hiring review sessions using ClaudeSDKClient, where context persists across queries. Track token usage and costs to prepare for the budget systems introduced in Chapter 84."
chapter: 73
lesson: 11
duration_minutes: 35
keywords:
  - claude sdk client
  - multi-turn conversation
  - cost tracking
  - token usage
  - context persistence
  - hiring manager session
  - hireflow interactive
  - budget monitoring
skills:
  - name: "Multi-Turn Session Design"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can implement a multi-turn agent session using ClaudeSDKClient where context from earlier turns informs later responses"
  - name: "Cost-Aware Agent Design"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Digital Problem-Solving"
    measurable_at_this_level: "Can extract and interpret token usage from result messages and explain why cost tracking matters for production agent systems"
  - name: "Query vs Client Pattern Selection"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "3.4 Programming"
    measurable_at_this_level: "Can determine whether a given HireFlow use case requires query() or ClaudeSDKClient based on conversation requirements"
learning_objectives:
  - objective: "Build a multi-turn hiring review session where the agent retains context across three or more sequential queries"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Code exercise: implement a session where Turn 3's response demonstrates knowledge from Turn 1"
  - objective: "Extract and display token usage and cost data from agent result messages"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Code completion: add cost tracking to an existing agent loop"
  - objective: "Select the correct execution pattern (query vs ClaudeSDKClient) for a given use case"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Scenario quiz: given five HireFlow tasks, classify each as query() or ClaudeSDKClient with justification"
cognitive_load:
  new_concepts: 2
  assessment: "Two new concepts: ClaudeSDKClient as an async context manager for multi-turn sessions and cost/token tracking from result messages. Students already understand query() and message types from Lessons 03 and 04. ClaudeSDKClient extends that foundation with persistent context. Cost tracking adds a small monitoring overlay."
differentiation:
  extension_for_advanced: "Implement a cost budget guard that tracks cumulative cost across turns and terminates the session when spending exceeds a threshold. How would you communicate the budget exhaustion to the hiring manager?"
  remedial_for_struggling: "Focus on the key difference: query() forgets everything between calls, ClaudeSDKClient remembers. If you understand that distinction, the code patterns follow naturally."
---

# ClaudeSDKClient for Multi-Turn and Cost Tracking

## James Loses Context

James had built a clean candidate review workflow. The hiring manager asks for a summary of top candidates, picks one to examine closely, and then requests interview questions tailored to that candidate's gaps.

The problem: he built it with three separate `query()` calls.

```python
# James's first attempt (broken)
async def broken_review() -> None:
    """Three queries that cannot remember each other."""
    options = ClaudeAgentOptions(
        allowed_tools=["mcp__hiring__parse_cv", "mcp__hiring__score_candidate", "Read"],
        permission_mode="default",
        max_turns=5,
    )

    # Turn 1: Get top candidates
    async for msg in query(prompt="Show me the top 3 candidates for Senior Python Developer", options=options):
        pass  # Works fine

    # Turn 2: Deep dive on candidate #2
    async for msg in query(prompt="Tell me more about candidate #2's backend experience", options=options):
        pass  # Fails: the agent has no idea who "candidate #2" is

    # Turn 3: Generate questions
    async for msg in query(prompt="Generate interview questions for their weak areas", options=options):
        pass  # Fails: "their" refers to nothing
```

"The agent keeps asking me which candidate I mean," James said. "I already told it in the first message."

Emma pointed at the screen. "Each `query()` call starts a fresh conversation. The agent in Turn 2 has never seen Turn 1. It is three strangers, not one assistant."

## The ClaudeSDKClient Pattern

**ClaudeSDKClient** is an async context manager that holds conversation state across multiple queries. Every message sent through the client builds on the full history of the session, exactly like a conversation in a chat interface.

```python
import asyncio
from claude_agent_sdk import (
    ClaudeSDKClient,
    ClaudeAgentOptions,
    AssistantMessage,
    ResultMessage,
    TextBlock,
)


async def hiring_manager_session() -> None:
    """Multi-turn hiring review with persistent context."""
    options = ClaudeAgentOptions(
        allowed_tools=[
            "mcp__hiring__parse_cv",
            "mcp__hiring__score_candidate",
            "Read",
        ],
        permission_mode="default",
        max_turns=10,
    )

    async with ClaudeSDKClient(options=options) as client:
        # Turn 1: Overview request
        await client.query(
            "Show me the top 3 candidates for Senior Python Developer. "
            "For each, include their name, years of experience, and score."
        )
        async for message in client.receive_response():
            if isinstance(message, AssistantMessage):
                for block in message.content:
                    if isinstance(block, TextBlock):
                        print(f"[Agent] {block.text}")

        # Turn 2: Deep dive (agent remembers Turn 1)
        await client.query(
            "Tell me more about candidate #2's backend experience. "
            "What distributed systems work have they done?"
        )
        async for message in client.receive_response():
            if isinstance(message, AssistantMessage):
                for block in message.content:
                    if isinstance(block, TextBlock):
                        print(f"[Agent] {block.text}")

        # Turn 3: Targeted questions (agent remembers both turns)
        await client.query(
            "Generate 4 interview questions focused on candidate #2's "
            "weak areas based on the scoring from Turn 1."
        )
        async for message in client.receive_response():
            if isinstance(message, AssistantMessage):
                for block in message.content:
                    if isinstance(block, TextBlock):
                        print(f"[Agent] {block.text}")


asyncio.run(hiring_manager_session())
```

Three things to notice:

1. **`async with` manages the session lifecycle.** When the context manager exits, the session closes and resources are released.
2. **`client.query()` sends a message into the ongoing conversation.** The agent receives the full history, including its own previous responses and all tool calls.
3. **`client.receive_response()` is an async generator**, the same pattern as `query()` from Lesson 03. You process messages identically.

In Turn 2, the agent knows who "candidate #2" is because it produced the numbered list in Turn 1. In Turn 3, it can cross-reference the scoring data from Turn 1 with the detailed profile from Turn 2 to generate targeted questions. This is context persistence in action.

## When to Use query() vs ClaudeSDKClient

The two patterns serve different use cases. Choosing the wrong one either wastes context (using a client for a one-shot task) or loses it (using query() for a conversation).

| Dimension             | `query()`                                  | `ClaudeSDKClient`                                       |
| :-------------------- | :----------------------------------------- | :------------------------------------------------------ |
| **Context**           | Fresh start every call                     | Accumulates across turns                                |
| **Use case**          | One-shot autonomous tasks                  | Interactive review sessions                             |
| **Cost**              | Tokens for one prompt + response           | Tokens grow with each turn (full history resent)        |
| **Concurrency**       | Multiple calls can run in parallel         | Sequential within a session                             |
| **HireFlow examples** | Batch-parse 200 CVs, bulk-score candidates | Hiring manager reviews candidates, iterative refinement |

James studied the table. "Wait, so basically every turn in a ClaudeSDKClient session resends the entire conversation history?"

"That is how context persistence works in language models," Emma said. "The model does not remember. It re-reads. Turn 5 of a session includes the full text of Turns 1 through 4 in its input. That is why cost grows with conversation length."

"So a 20-turn session costs way more than 20 single queries?"

"Significantly more. Which brings us to cost tracking."

## Cost Tracking from Result Messages

Every agent execution produces a **result message** at the end. This message includes token counts and cost data that you can extract for monitoring.

```python
from claude_agent_sdk import query, ClaudeAgentOptions, ResultMessage


async def tracked_query(prompt: str) -> dict[str, float]:
    """Run a query and return cost metrics."""
    options = ClaudeAgentOptions(
        allowed_tools=["mcp__hiring__parse_cv", "Read"],
        permission_mode="bypassPermissions",
        max_turns=3,
    )

    cost_data: dict[str, float] = {}

    async for message in query(prompt=prompt, options=options):
        if isinstance(message, ResultMessage):
            cost_data = {
                "total_cost_usd": message.total_cost_usd,
                "input_tokens": message.input_tokens,
                "output_tokens": message.output_tokens,
            }
            print(f"Total cost: ${message.total_cost_usd:.4f}")
            print(f"Input tokens: {message.input_tokens:,}")
            print(f"Output tokens: {message.output_tokens:,}")

    return cost_data
```

The result message appears once, after all turns complete. The fields give you:

- **`total_cost_usd`**: the dollar cost of the entire execution (all turns combined)
- **`input_tokens`**: total tokens sent to the model across all turns
- **`output_tokens`**: total tokens generated by the model across all turns

For multi-turn `ClaudeSDKClient` sessions, cost accumulates across the full conversation:

```python
async def tracked_session() -> None:
    """Multi-turn session with per-turn cost tracking."""
    options = ClaudeAgentOptions(
        allowed_tools=["mcp__hiring__parse_cv", "mcp__hiring__score_candidate", "Read"],
        permission_mode="default",
        max_turns=10,
    )

    cumulative_cost: float = 0.0
    turn_number: int = 0

    async with ClaudeSDKClient(options=options) as client:
        queries: list[str] = [
            "Show me the top 3 candidates for Senior Python Developer",
            "Compare candidate #1 and candidate #3 on system design skills",
            "Which candidate would you recommend and why?",
        ]

        for user_query in queries:
            turn_number += 1
            await client.query(user_query)

            async for message in client.receive_response():
                if isinstance(message, AssistantMessage):
                    for block in message.content:
                        if isinstance(block, TextBlock):
                            print(f"\n--- Turn {turn_number} ---")
                            print(block.text)

                if isinstance(message, ResultMessage):
                    turn_cost: float = message.total_cost_usd
                    cumulative_cost += turn_cost
                    print(f"\nTurn {turn_number} cost: ${turn_cost:.4f}")
                    print(f"Cumulative session cost: ${cumulative_cost:.4f}")
                    print(f"Input tokens this turn: {message.input_tokens:,}")

    print(f"\n=== Session complete. Total cost: ${cumulative_cost:.4f} ===")
```

Watch the input token count across turns. Turn 1 sends only the prompt. Turn 2 sends the prompt plus Turn 1's full exchange. Turn 3 sends everything from Turns 1 and 2 plus the new prompt. The growth is linear in turn count but can be steep if the agent produces verbose responses or makes many tool calls.

## Cost Patterns for HireFlow Operations

Different HireFlow workflows have different cost profiles. Understanding these patterns helps you choose the right execution model.

| Workflow               | Pattern                 | Typical Turns | Cost Behavior                                    |
| :--------------------- | :---------------------- | :-----------: | :----------------------------------------------- |
| Batch CV parsing       | `query()` per CV        |   1-2 each    | Flat: each call is independent                   |
| Candidate scoring      | `query()` per candidate |   2-3 each    | Flat: no context needed between candidates       |
| Hiring manager review  | `ClaudeSDKClient`       |     5-15      | Growing: context accumulates per turn            |
| Pipeline orchestration | `query()` with agents   |      3-8      | Moderate: sub-agents each have their own context |

"The batch operations are cheap because they are parallelizable and context-free," Emma said. "The interactive sessions are expensive because they carry growing context. In production, you would set a budget cap on interactive sessions."

James raised an eyebrow. "How?"

"Chapter 84 covers orchestration with budget tracking. The cost data you extract here is the foundation for that system. For now, the important skill is measurement: you cannot manage what you cannot measure."

:::info Forward Connection: Chapter 84
The cost tracking pattern from this lesson feeds directly into the budget and orchestration system you will build in Chapter 84. There, you will set spending limits per agent, per session, and per pipeline run. The `total_cost_usd` and token counts you learned to extract here become the inputs to that budget controller.
:::

## Choosing the Right Pattern: A Decision Guide

When a new HireFlow feature needs an agent, ask these three questions:

1. **Does the agent need to remember previous interactions?**
   - No: use `query()`. Each call is independent.
   - Yes: use `ClaudeSDKClient`. Context persists.

2. **Can the work be parallelized?**
   - Yes: use `query()` with multiple concurrent calls. Parsing 50 CVs should run 50 independent queries, not one long conversation.
   - No: use `ClaudeSDKClient`. Sequential reasoning across turns requires shared context.

3. **Is cost predictability important?**
   - Yes: prefer `query()`. Cost is fixed per call.
   - Acceptable to grow: use `ClaudeSDKClient` with monitoring.

James applied this to HireFlow. "So the nightly batch pipeline that parses and scores new candidates uses `query()` for everything. But when I sit down to review the results with the hiring manager, that is a `ClaudeSDKClient` session."

"And the budget cap on that review session ensures the hiring manager does not accidentally run up a large bill by asking twenty follow-up questions," Emma added.

## Exercises

### Exercise 1: Build a Candidate Comparison Session

Using `ClaudeSDKClient`, implement a three-turn session:

- Turn 1: Ask the agent to list all candidates for a role, with scores.
- Turn 2: Ask the agent to compare the top two candidates on a specific dimension (e.g., leadership experience).
- Turn 3: Ask the agent to draft a brief recommendation memo for the hiring committee.

Verify that Turn 3's memo references specific details from Turns 1 and 2.

### Exercise 2: Cost Tracking Dashboard

Extend the `tracked_session` function to produce a summary table at the end:

```
Turn | Input Tokens | Output Tokens | Turn Cost | Cumulative
  1  |      850     |      420      |  $0.0031  |   $0.0031
  2  |    1,640     |      380      |  $0.0048  |   $0.0079
  3  |    2,510     |      560      |  $0.0072  |   $0.0151
```

Notice how input tokens grow while output tokens stay roughly stable.

### Exercise 3: Pattern Selection Quiz

For each scenario, choose `query()` or `ClaudeSDKClient` and justify your choice:

1. Parsing 100 CVs uploaded overnight
2. A recruiter asking follow-up questions about a candidate
3. Generating interview questions for 5 different roles
4. A hiring committee discussing trade-offs between two finalists
5. Scoring all candidates against an updated job specification

### Exercise 4: Cost Estimation

A hiring manager review session averages 8 turns. Each turn adds approximately 1,200 input tokens (from accumulated history) and generates 400 output tokens. Estimate the total input and output tokens for the full session. Compare this to 8 independent `query()` calls, each with 800 input tokens and 400 output tokens.

:::tip Verification
For Exercise 4, the multi-turn session uses approximately 8 _ (800 + (turn _ 1200)) input tokens summed across turns. The independent queries use 8 \* 800. Calculate both totals and express the multi-turn overhead as a percentage.
:::
