---
sidebar_position: 3
title: "Budgets, Not Permissions"
description: "The core design principle for economic participation: resource budgets, spending envelopes, and audit trails."
chapter: 62
lesson: 3
duration_minutes: 20
keywords:
  [
    resource budget,
    spending envelope,
    audit trail,
    budget tracking,
    per-FTE cost attribution,
    pipeline budget,
  ]

skills:
  - name: "Resource Budget Design"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Apply"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Can define a resource budget for a given pipeline run, specifying token, compute, API call, and storage limits"
  - name: "Audit Trail Architecture"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Safety"
    measurable_at_this_level: "Can explain what an audit trail entry must contain and why each field is necessary"
  - name: "Spending Envelope Enforcement"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Can distinguish between a spending limit that logs a warning and one that pauses the pipeline, and explain why the latter is safer"

learning_objectives:
  - objective: "Define the four components of a resource budget and explain why each is tracked separately"
    proficiency_level: "A2"
    bloom_level: "Remember"
    assessment_method: "Chapter quiz component identification"
  - objective: "Explain the difference between a spending limit that warns and one that halts, and argue which is safer for production"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Chapter quiz scenario question"
  - objective: "List the five required fields in an audit trail entry"
    proficiency_level: "A2"
    bloom_level: "Remember"
    assessment_method: "Chapter quiz identification"
  - objective: "Apply the 'budgets, not permissions' principle to a novel agent factory scenario"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Applied exercise in Lesson 4"

cognitive_load:
  new_concepts: 3
  assessment: "Moderate. Three interrelated concepts (resource budget, spending envelope, audit trail) presented as components of one design principle. Each builds on the previous one, reducing standalone cognitive load."

differentiation:
  extension_for_advanced: "Design a resource budget for a domain you care about (e.g., a customer support factory, a content moderation pipeline). Include all four budget components and define a spending envelope for each."
  remedial_for_struggling: "Focus on the resource budget table first. If you can explain why each of the four categories is tracked separately, the spending envelope and audit trail will follow naturally."
---

# Budgets, Not Permissions

Lessons 1 and 2 introduced the concept: agents are becoming economic actors, and self-provisioning factories outcompete those that rely on human-allocated resources. This lesson names the core design principle and breaks it into components you will build across Part 6.

The principle is six words: **agents need budgets, not permissions.**

## What Permissions Get Wrong

Emma drew a lock icon on the whiteboard. "When you hear 'agent permissions,' what do you think of?"

"API keys," James said. "Access tokens. Whether the agent can call a service or not. Binary: yes or no."

"Correct. Permissions answer one question: _can this agent access this resource?_ They do not answer a second question that matters more."

"Which is?"

"_How much of this resource can the agent consume?_"

James thought about it. "Okay, but if I give the Resume Screener an API key for the LLM service, it has access. It uses what it needs."

"And when a bug in the screening prompt causes the LLM to generate 50,000 tokens per candidate instead of 500?"

"That... would be expensive."

"Permissions said yes. Nothing said 'stop.' The agent had access but no boundary on consumption. Permissions are a gate. Budgets are a meter."

James reached for his usual analogy. "It is like giving someone a building keycard without a spending account. They can get into the building. But if they start ordering catering for every conference room, nobody stops them until the invoice arrives."

"And the invoice is your cloud bill at the end of the month. By then, the damage is done."

## The Four Components of a Resource Budget

A **resource budget** tracks four categories of consumption per pipeline run:

| Category      | What It Measures                        | Example in HireFlow                                                   |
| ------------- | --------------------------------------- | --------------------------------------------------------------------- |
| **Tokens**    | LLM input and output tokens consumed    | Resume Screener sends 2,000 tokens per candidate to Claude            |
| **Compute**   | Processing time and infrastructure cost | Running pyright and ruff on generated code takes 3 seconds of compute |
| **API calls** | Number of calls to external services    | Question Generator calls assessment library 4 times per candidate     |
| **Storage**   | Data written to persistent stores       | Summarizer writes a 2 KB candidate brief to the database              |

Each category is tracked separately because they have different cost profiles and different failure modes. A token budget overrun means higher LLM costs. A storage overrun means disk pressure on your database. An API call overrun might trigger rate limits from a third-party service. Lumping them into a single number hides which category is the problem.

"So when HireFlow processes one candidate through all four FTEs," James said, "I should know exactly how many tokens, how much compute, how many API calls, and how much storage that run consumed."

"Wait, so basically, per-FTE tracking tells me _who_ is expensive, and per-run tracking tells me _whether_ the whole pipeline is on budget? Two different questions from the same data?"

"Exactly. Both granularities matter."

Per-FTE tracking tells you which worker is expensive. Per-run tracking tells you whether the overall pipeline stays within budget. In Chapter 84 (Orchestration), you will build both levels of tracking into HireFlow's orchestrator. The design decision you make here (tracking four categories, at two granularities) is what makes that implementation possible.

## Spending Envelopes: Ceilings, Not Suggestions

A resource budget tracks consumption. It does not stop it. For that, you need a **spending envelope**: a ceiling that pauses the pipeline when any category exceeds its limit.

"Pauses?" James asked. "Not just logs a warning?"

"A warning is a suggestion. A ceiling is enforcement."

Emma drew two scenarios on the whiteboard. In the first, a token overrun triggers a log entry: `WARNING: Resume Screener exceeded token budget by 40%`. In the second, a token overrun triggers a pipeline pause: `PAUSED: Resume Screener hit token ceiling. Awaiting review.`

"In the first scenario, the warning sits in a log file. Nobody reads it until something else goes wrong. The pipeline keeps running. The overrun compounds across fifty candidates."

"In the second scenario, the pipeline stops. Someone reviews the cause. It might be a bug. It might be a legitimate need. Either way, the damage is contained."

James frowned. "But pausing the pipeline means candidates stop getting processed. The hiring manager notices."

"Which would you rather explain: 'we paused processing because we detected unusual costs' or 'we processed all fifty candidates but the cloud bill is ten times the budget and we do not know why'?"

James did not answer immediately. He was thinking about the distinction between a system that notices problems and one that stops them.

"The first one. Pausing is better."

"The spending envelope is what makes the budget enforceable. Without it, the budget is accounting. With it, the budget is governance."

Spending envelopes connect to the Two-Layered Model from Chapter 61. The Factory Layer operates within governance boundaries. Spending envelopes are one of those boundaries. They ensure that the factory cannot consume more than its principal (the human) authorized, even when the human is not watching.

## Audit Trails: What the Factory Did, and Why

The third component is the **audit trail**: a record of every resource acquisition, whether human-allocated or agent-initiated. Every entry in the audit trail answers five questions:

| Field             | Question It Answers              | Example                                                                        |
| ----------------- | -------------------------------- | ------------------------------------------------------------------------------ |
| **Timestamp**     | When did this happen?            | 2026-03-15T14:23:07Z                                                           |
| **Actor**         | Who or what made the decision?   | resume-screener-fte                                                            |
| **Resource**      | What was acquired?               | 3,200 LLM tokens (Claude Sonnet input)                                         |
| **Cost**          | How much did it cost?            | $0.0096 (3,200 tokens at $0.003/1K)                                            |
| **Justification** | Why was this acquisition needed? | Processing candidate CV #43 (format: scanned PDF, required OCR pre-processing) |

"Justification is the interesting one," Emma said. "It is easy to log what happened. It is harder to log why."

"Why does the 'why' matter?"

"Because when you review the audit trail next month, 'what' tells you the cost. 'Why' tells you whether the cost was justified. If every expensive acquisition has a clear justification, your spending patterns are healthy. If the justifications are vague or missing, you have a problem you cannot diagnose from cost data alone."

Emma paused. "Honestly, I am not sure every system will need all five fields from day one. There is a case for starting with timestamp, actor, and cost, then adding justification when you have enough data to know what questions you will ask."

James looked surprised. Emma rarely expressed uncertainty about architecture.

"But," she added, "if I were building it, I would include all five. Adding a field to a log entry is trivial. Reconstructing justification data after the fact is impossible."

"So build all five. Fill in what you can. The fields you cannot fill in today will tell you where your system needs more observability."

"Now you are thinking like an architect."

## The Design Principle, Assembled

Here is the principle and its three components, connected:

```
Agents need budgets, not permissions.

Resource Budget       → tracks what the factory consumes (4 categories, 2 granularities)
Spending Envelope     → enforces limits that pause the pipeline (ceiling, not suggestion)
Audit Trail           → records what happened and why (5 fields per entry)
```

These three components form a stack. The resource budget measures. The spending envelope enforces. The audit trail explains. Together, they give you governance over resource consumption that works whether a human is watching or not.

| Component             | Without It                                       | With It                                               |
| --------------------- | ------------------------------------------------ | ----------------------------------------------------- |
| **Resource Budget**   | You discover costs on the monthly cloud bill     | You know costs per FTE, per run, in real time         |
| **Spending Envelope** | Overruns compound silently until someone notices | Pipeline pauses at the ceiling, damage is contained   |
| **Audit Trail**       | You know how much was spent but not why          | Every acquisition is traceable, reviewable, auditable |

"This is the foundation," Emma said. "When you build the HireFlow orchestrator in Chapter 84, you will implement all three. When you build security in Chapter 87, spending envelopes become a defense against budget abuse. And when you assemble the full factory in Chapter 90, the resource budget report is one of your end-to-end verification checks."

:::tip KEY INSIGHT
The design principle "budgets, not permissions" has three components. Resource budgets track consumption across four categories (tokens, compute, API calls, storage) at two granularities (per-FTE and per-run). Spending envelopes enforce limits that pause the pipeline rather than logging warnings. Audit trails record five fields per acquisition: timestamp, actor, resource, cost, and justification.
:::

In Lesson 4, you will apply this principle to HireFlow. You will map the specific locations in the recruitment pipeline where economic participation could occur, and identify what budget and audit infrastructure each participation point requires.
