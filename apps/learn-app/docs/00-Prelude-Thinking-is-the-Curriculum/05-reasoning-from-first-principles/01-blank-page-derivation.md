---
sidebar_position: 1
title: "Defend the Opposite (No AI)"
description: "Write a contrarian argument against a widely accepted best practice using only first principles reasoning, with no AI assistance, then compare your derivation against AI output"
keywords:
  [
    "thinking skills",
    "Part 0",
    "first principles",
    "contrarian argument",
    "independent reasoning",
    "prediction lock",
  ]
chapter: 5
lesson: 1
duration_minutes: 60

# HIDDEN SKILLS METADATA
skills:
  - name: "First Principles Reasoning"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Apply"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can write a 500-word contrarian argument derived from base constraints, identifying at least 3 specific conditions under which a widely accepted best practice fails"

  - name: "Principles vs. Examples Distinction"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can distinguish between reasoning from first principles (deriving from constraints) and reasoning from counter-examples (citing cases where something failed), and explain why the distinction matters"

learning_objectives:
  - objective: "Derive a contrarian argument from base constraints and first principles without any AI or reference assistance"
    proficiency_level: "A1"
    bloom_level: "Apply"
    assessment_method: "AI Check rates logical rigor and plausibility of each identified failure condition, distinguishing principle-based from example-based reasoning"

  - objective: "Identify and articulate the first principles underlying a contrarian position, not just the conclusions"
    proficiency_level: "A1"
    bloom_level: "Analyze"
    assessment_method: "AI Check evaluates whether stated principles are genuine base constraints or repackaged conventional wisdom"

cognitive_load:
  new_concepts: 4
  assessment: "4 concepts (first principles vs. analogy, contrarian argument structure, base constraints, principle-based derivation) — within Part 0 beginner range of 3-5"

differentiation:
  extension_for_advanced: "After receiving AI feedback, identify a meta-pattern: in what types of situations does the best practice you argued against MOST often fail? Derive a general rule for when to apply it and when to abandon it"
  remedial_for_struggling: "Start by listing everything you believe about the best practice. Circle the items that are assumptions vs. facts. Use the assumptions as your starting point for the contrarian argument — ask 'what if this assumption is wrong?'"

teaching_guide:
  lesson_type: "exercise"
  session_group: 4
  session_title: "Defend the Opposite (No AI)"
  key_points:
    - "This is a no-AI exercise — the 500-word argument must be written entirely by the student before any AI tool is consulted"
    - "The critical distinction is between reasoning from principles (WHY does the MVP approach fail in certain conditions?) and reasoning from examples (Company X tried MVP and it failed)"
    - "Students must state their first principles explicitly — the constraint-based reasoning that leads to their conclusion"
    - "The AI Check deliberately asks whether the student reasoned from principles or from counter-examples, training metacognitive awareness"
  misconceptions:
    - "Students think 'contrarian argument' means being contrary for its own sake — the goal is to identify genuine conditions of failure, not to disagree reflexively"
    - "Students confuse 'I found a company where MVP failed' (example-based) with 'In markets where trust is the primary barrier, incomplete products destroy credibility permanently' (principle-based) — this distinction is the core lesson"
    - "Students think writing without AI means their work will be worse — the point is to discover what they can derive independently"
  discussion_prompts:
    - "How many of your 3+ failure conditions were derived from principles vs. from remembered examples? What is the practical difference?"
    - "Did AI's evaluation reveal any conditions you identified as principle-based that were actually pattern-based? What surprised you?"
  teaching_tips:
    - "Enforce the no-AI constraint physically — have students close AI tabs, or do this exercise in a setting without internet access"
    - "The scenario options span different fields — students who pick one outside their expertise will find the first-principles approach easier because they have fewer examples to fall back on"
    - "After the exercise, have 2-3 students share their strongest failure condition. Class discussion reveals whether each is truly principle-based or example-based"
  assessment_quick_check:
    - "Ask students: State one of your first principles in a single sentence. Now tell me — is that a principle (true regardless of context) or an observation (true in some contexts)?"
    - "Ask students: What is the difference between 'MVP fails because Company X lost customers' and 'MVP fails when trust is a prerequisite because incomplete products signal unreliability'?"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Reasoning From First Principles

> _AI reasons by pattern. It tells you what has worked before. First principles reasoning tells you what will work when nothing has been tried before._

:::note Building On Previous Chapters
The **Error Taxonomy** from Chapter 2 helps you catch flawed assumptions. The **cascade mapping** from [Chapter 3](../04-thinking-in-systems/01-cascade-mapping.md) helps you see downstream effects of each assumption. Your **Prediction Lock** habit should now be automatic.
:::

Most advice — from humans and AI alike — is reasoning by analogy: "this worked for Company X, so it will work for you." First principles reasoning strips a problem to its base truths and rebuilds from there. This is the skill that produces original solutions. This chapter trains you to stop asking "what's the best practice?" and start asking "what are the actual constraints, and what do they make possible?"

## Exercise 1: Defend the Opposite (No AI)

**Layers Used:** Layer 1 (Predict Before You Prompt)

### What You Do

You receive a widely accepted best practice. Without AI access, write a 500-word argument for why this advice is wrong — identifying the specific conditions under which it fails. This is written entirely by you with no tools. Only after submitting your argument do you use AI.

### Choose Your Scenario

<Tabs>
  <TabItem value="startup" label="Startup" default>
    **Scenario A (Startup):** "Startups should build an MVP before investing
    in scale."
  </TabItem>
  <TabItem value="engineering" label="Engineering">
    **Scenario B (Engineering):** "Teams should always write tests before
    writing code (TDD)."
  </TabItem>
  <TabItem value="education" label="Education">
    **Scenario C (Education):** "Students should master fundamentals before
    using advanced tools."
  </TabItem>
</Tabs>

Choose the best practice closest to your field and argue against it.

:::info Your Deliverable
A 500-word contrarian argument (written without AI) identifying at least 3 specific conditions under which the best practice fails, with reasoning for each. A clear statement of the first principles you used to derive these conditions (e.g., "In markets where trust is the primary barrier, an unfinished product destroys credibility permanently").
:::

```text title="AI Check Prompt -- Copy and paste into claude.ai or chatgpt.com"
I wrote a contrarian argument against the common advice that "startups
should build an MVP before investing in scale." I wrote this entirely
without AI assistance.

Please:
(1) Rate my argument's logical rigor from 1-10.
(2) Are my 3+ conditions genuinely situations where the MVP approach
    fails, or am I stretching? For each, rate plausibility from 1-10.
(3) Did I reason from first principles (deriving from base constraints)
    or from counter-examples (just citing cases where it did not work)?
    These are different -- explain the difference using my work.
(4) Identify the strongest point in my argument and explain why it
    works.
(5) Identify the weakest point and explain how to strengthen it.
(6) Suggest 2 additional conditions I missed where the MVP approach
    genuinely fails.

My argument: [paste your 500-word argument].

Finally, complete the Thinking Score Card for this exercise:
Independent Thinking (1-10), Critical Evaluation (1-10),
Reasoning Depth (1-10), Originality (1-10), Self-Awareness (1-10).
For each score, give a one-sentence justification.
```

### What This Teaches You

You learn the difference between reasoning from principles and reasoning from examples. AI feedback reveals whether your contrarian argument was genuinely derived from constraints or was just a collection of counter-examples — and teaches you why the distinction matters.


## Flashcards Study Aid

<Flashcards />
