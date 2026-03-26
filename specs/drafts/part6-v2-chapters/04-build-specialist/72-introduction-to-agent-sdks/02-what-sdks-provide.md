---
sidebar_position: 2
title: "What SDKs Provide"
description: "The six capabilities every Agent SDK handles: loop, tools, memory, guardrails, handoffs, and observability."
chapter: 72
lesson: 2
duration_minutes: 15
keywords:
  [
    agent sdk,
    agent loop,
    tool orchestration,
    memory management,
    guardrails,
    handoffs,
    observability,
  ]

skills:
  - name: "SDK Capability Analysis"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Can name and explain the six capabilities Agent SDKs provide and map each to a concrete agent development problem"

learning_objectives:
  - objective: "List the six capabilities every Agent SDK provides"
    proficiency_level: "B1"
    bloom_level: "Remember"
    assessment_method: "Chapter Quiz recall question"
  - objective: "Connect each SDK capability to a specific problem James encountered with raw API calls"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Guided Discovery mapping exercise"

cognitive_load:
  new_concepts: 6
  assessment: "Medium. Six new terms introduced, but each maps directly to a problem the reader saw in Lesson 1. Concrete examples reduce load."

differentiation:
  extension_for_advanced: "Compare the SDK capability stack to traditional web framework layers (routing, middleware, ORM, auth, logging). What are the analogues?"
  remedial_for_struggling: "Focus on the first three capabilities (loop, tools, memory). These are the most tangible. Guardrails, handoffs, and observability build on them."
---

# What SDKs Provide

Emma pulled out a fresh section of whiteboard and drew six boxes in a vertical stack. "Every Agent SDK, regardless of vendor, provides these six things. The names differ. The APIs differ. But the capabilities are the same."

James leaned forward. "All of them?"

"All of them. Anthropic, OpenAI, Google, LangChain, CrewAI. Different packaging, same six layers."

## The Six-Layer SDK Stack

### Layer 1: The Agent Loop

The most fundamental capability. The SDK manages the reason-act-observe cycle so you do not have to write it yourself.

In Lesson 1, James wrote a `while True` loop that sent messages, checked for tool calls, executed them, and looped back. That loop had no error recovery, no stop conditions beyond `end_turn`, and no way to handle partial failures.

An SDK's agent loop handles all of this:

- **Automatic cycling**: Send message, receive response, dispatch tools, send results, repeat
- **Stop conditions**: Maximum iterations, explicit completion signals, timeout limits
- **Error recovery**: If a tool call fails, the SDK can retry, skip, or report the failure to the model so it can adapt

"My while loop was about 40 lines," James said. "How much of that does the SDK replace?"

"All of it. You configure the loop; you do not write it."

### Layer 2: Tool Orchestration

The SDK dispatches tool calls to the right handler, validates inputs against schemas, and packages results back into the message format the model expects.

James's raw approach required him to manually match tool names to functions, parse JSON inputs, handle type mismatches, and format results. For one tool, that was manageable. For four tools with different schemas, it was a maintenance problem.

"In Chapter 70, you built MCP servers with typed schemas," Emma said. "The SDK reads those schemas and handles dispatch automatically. You register your tools. The SDK does the rest."

"Wait, so basically the MCP servers I already built plug straight into the SDK?"

"That is exactly why we built them first. MCP is the tool standard. SDKs are the loop standard. They connect at the tool layer."

### Layer 3: Memory Management

The SDK manages conversation history, context windows, and state across turns.

James's raw `messages` list grew without bound. After fifty CVs, it contained thousands of tokens. He had no strategy for trimming old messages without losing important context.

SDKs provide memory strategies:

| Strategy           | How It Works                         | When to Use                                 |
| ------------------ | ------------------------------------ | ------------------------------------------- |
| **Full history**   | Keep everything                      | Short conversations (under 20 turns)        |
| **Sliding window** | Keep the last N messages             | Long conversations where old context fades  |
| **Summary**        | Compress old messages into a summary | Complex tasks where overall context matters |
| **Selective**      | Keep messages tagged as important    | Workflows where specific facts must persist |

"For the Resume Screener," Emma said, "you probably want selective memory. The candidate's name and score need to persist. The raw CV text can be dropped after parsing."

### Layer 4: Guardrails

The SDK validates inputs and outputs against rules you define, preventing the agent from producing harmful, off-topic, or policy-violating responses.

This was a problem James had not even reached yet in his raw implementation. He had no input validation ("What if someone sends a prompt injection instead of a CV?"), no output validation ("What if the model produces a score outside the valid range?"), and no content filtering.

"Guardrails come in two forms," Emma said.

**Deterministic guardrails** are hard rules enforced by code:

- Input length limits
- Output format validation (score must be 0-100)
- Blocked content patterns

**Model-based guardrails** use a second model to evaluate the agent's output:

- "Is this response relevant to the hiring task?"
- "Does this response contain personally identifiable information that should be redacted?"
- "Is this score justified by the reasoning provided?"

"In Chapter 87, you will build a full security layer for HireFlow," Emma said. "For now, know that the SDK provides the hooks. You provide the rules."

### Layer 5: Multi-Agent Handoffs

The SDK manages transitions when one agent passes control to another.

HireFlow has four FTEs: Job Spec Writer, Resume Screener, Interview Question Generator, and Candidate Summarizer. When the screener finishes scoring a candidate, the results need to reach the question generator. That transition requires:

- Passing the right context (candidate data, job spec, score)
- Dropping irrelevant context (the screener's internal reasoning)
- Maintaining the conversation if a human is involved
- Handling failures (what if the question generator is unavailable?)

"In Chapter 84, you will build the orchestrator that coordinates all four FTEs," Emma said. "The SDK gives you the handoff primitive. The orchestrator decides when and how to use it."

James thought about his raw implementation. "I didn't even think about handoffs. My loop was one agent, one tool, one task."

"That is why raw API calls break down. A single agent with a single tool is a script. A workforce of agents handing off work is a system. Systems need infrastructure."

### Layer 6: Observability

The SDK records what happened, when, and why, so you can debug failures and measure performance.

When candidate 37 got a wrong score in James's raw implementation, he had no way to figure out why. Was the CV parsed incorrectly? Did the model misinterpret the job spec? Was there a tool failure that corrupted the result?

SDKs provide:

- **Structured logging**: Every API call, tool dispatch, and decision recorded
- **Tracing**: A complete timeline of the agent's reasoning for each request
- **Metrics**: Token usage, latency, error rates, tool call frequency
- **Replay**: The ability to re-run a specific interaction with the same inputs

"This connects to Axiom X from Part 4," Emma said. "Observability Extends Verification. You cannot verify what you cannot see."

:::tip Quick Recall
In Chapter 68, you used simulation to validate your skills before connecting them to MCP. Observability is the production equivalent: instead of simulated scenarios, you are watching real interactions and catching failures as they happen.
:::

## The SDK Stack

Emma stepped back from the whiteboard. Six boxes, stacked vertically, each with a label:

| Layer                 | What It Handles                                    | What You Would Build Yourself         |
| --------------------- | -------------------------------------------------- | ------------------------------------- |
| 6. Observability      | Logging, tracing, metrics, replay                  | Custom logging framework              |
| 5. Handoffs           | Multi-agent transitions and context passing        | Manual state serialization            |
| 4. Guardrails         | Input/output validation, content safety            | Ad-hoc validation code                |
| 3. Memory             | History management, context windows, summarization | Growing message list with no strategy |
| 2. Tool Orchestration | Dispatch, schema validation, error handling        | Manual tool routing                   |
| 1. Agent Loop         | Reason-act-observe cycle, stop conditions, retries | A `while True` loop with edge cases   |

"Six layers," James said. "And I got stuck on layer one."

"You got stuck on layer one because layer one is harder than it looks. Every layer is harder than it looks. That is why SDKs exist."

## The Insight

Agent SDKs do not make agents smarter. The model is the same whether you call it through an SDK or through raw API calls. What SDKs do is handle the coordination: the loop, the tools, the memory, the safety, the transitions, and the visibility.

This is the same principle as web frameworks. Django does not make your Python faster. It handles routing, middleware, database connections, authentication, and template rendering so you can focus on your application logic. Agent SDKs do the same thing for agent logic.

James's four HireFlow skills are the application logic. The SDK is the framework that runs them.

## What Comes Next

Knowing that SDKs provide six layers is useful. Knowing which SDK to choose for HireFlow is essential. In the next lesson, Emma introduces the two SDKs that HireFlow will use: the Claude Agents SDK and the OpenAI Apps SDK. They share the six layers but differ in philosophy, and that difference determines which HireFlow problems each one solves.
