---
sidebar_position: 1
title: "The Cascade Map"
description: "Map the cascading consequences of a major decision across multiple domains, identifying feedback loops that linear analysis misses"
keywords:
  [
    "thinking skills",
    "Part 0",
    "systems thinking",
    "cascade map",
    "feedback loops",
    "second-order effects",
  ]
chapter: 3
lesson: 1
duration_minutes: 60

# HIDDEN SKILLS METADATA
skills:
  - name: "Cascade Mapping"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Apply"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can draw a cascade map tracing effects across at least 5 domains with first, second, and third-order effects, and identify at least 3 feedback loops with mechanism explanations"

  - name: "Feedback Loop Identification"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can identify and label feedback loops as amplifying or dampening, explaining the mechanism by which an effect circles back to influence the original decision"

learning_objectives:
  - objective: "Trace cascading consequences of a decision across at least five domains, identifying first, second, and third-order effects"
    proficiency_level: "A1"
    bloom_level: "Apply"
    assessment_method: "AI Check evaluates map completeness across domains and rates sophistication of causal chains"

  - objective: "Identify and explain feedback loops where downstream effects amplify or dampen the original decision"
    proficiency_level: "A1"
    bloom_level: "Analyze"
    assessment_method: "AI Check rates each feedback loop for logical soundness and plausibility"

cognitive_load:
  new_concepts: 4
  assessment: "4 concepts (cascade map structure, multi-domain effects, second/third-order consequences, feedback loops) — within Part 0 beginner range of 3-5"

differentiation:
  extension_for_advanced: "After completing your cascade map, identify which feedback loops are amplifying (positive feedback) vs. dampening (negative feedback) and explain why that distinction matters for predicting outcomes"
  remedial_for_struggling: "Start with just 3 domains instead of 5. Focus on first-order effects in each domain, then try to find one connection between domains before adding deeper effects"

teaching_guide:
  lesson_type: "exercise"
  session_group: 3
  session_title: "The Cascade Map"
  key_points:
    - "The cascade map is a visual thinking tool — its value is in forcing students to trace consequences beyond the obvious first-order effects"
    - "Feedback loops are the key insight: most AI tools list effects linearly but miss the circular dynamics where effects reinforce or counteract each other"
    - "Students should draw the map BEFORE AI — the act of struggling to find connections builds the systems thinking muscle"
    - "The five-domain minimum (employees, customers, competitors, regulators, internal knowledge) ensures breadth; the feedback loop requirement ensures depth"
  misconceptions:
    - "Students list effects in each domain independently without drawing connections between domains — the cascade map's value is in the connections, not the lists"
    - "Students confuse correlation with causation in their causal chains — emphasize that each arrow must have a mechanism (why does A cause B?)"
    - "Students think more effects = better map — a smaller map with well-explained mechanisms and genuine feedback loops is superior to a sprawling list"
  discussion_prompts:
    - "Why do AI tools tend to produce broader but shallower systems analysis? What structural feature of cascade maps captures something that a bullet-point list cannot?"
    - "Can you find a feedback loop in your map where the effect is counter-intuitive — where a seemingly positive first-order effect leads to a negative second-order outcome?"
  teaching_tips:
    - "Have students draw on paper first. The physical act of drawing arrows between domains builds spatial understanding of interconnection that typing cannot replicate"
    - "Walk through one feedback loop as a class: cost savings from replacing loan officers leads to reduced personal service, which leads to customer churn, which reduces revenue, which negates the cost savings. Ask: is this amplifying or dampening?"
    - "The scenario options are deliberately from different domains — encourage students to pick the one farthest from their expertise to challenge their assumptions"
  assessment_quick_check:
    - "Ask students: What is the difference between a second-order effect and a feedback loop?"
    - "Ask students to explain one of their feedback loops without looking at their map — if they cannot, they drew it without understanding it"
submission:
  type: "ai-check"
  accept: ["text"]
  providers: ["chatgpt", "claude", "gemini", "grok", "claude-code", "cowork"]
  default_provider: "chatgpt"
  xp_bonus: 50
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Thinking in Systems

> _Most AI tools analyze problems in isolation. Ask about automating customer support and you get an answer about customer support. You do not get the second-order effect on employee morale, the third-order effect on company culture, or the feedback loop where cost savings lead to worse service which leads to customer churn which eliminates the savings. This chapter trains you to see interconnections that AI tools consistently miss._

## Exercise 1: The Cascade Map (Human First)

**Layers Used:** Layer 1 (Predict Before You Prompt), Layer 6 (Iterative Drafts)

:::note Building On Previous Chapters
You will use the **Error Taxonomy** from [Chapter 2, Exercise 1](../02-detecting-broken-reasoning/01-error-prediction.md) to identify errors in causal reasoning. Systems errors build on the error detection skills you practiced there.
:::

### What You Do

You receive a single decision. Without AI, draw a cascade map on paper or in a document — tracing effects across at least five domains: employees, customers, competitors, regulators, and the organization's own internal knowledge base. Identify at least three feedback loops (where an effect circles back to amplify or dampen the original decision). This map is your Draft 1 — submitted before any AI is consulted.

### Choose Your Scenario

<Tabs>
  <TabItem value="finance" label="Finance" default>
    **Scenario A (Finance):** "A major bank decides to replace all loan officers
    with AI agents."
  </TabItem>
  <TabItem value="engineering" label="Engineering">
    **Scenario B (Engineering):** "A city decides to replace all human-driven
    public buses with autonomous vehicles."
  </TabItem>
  <TabItem value="healthcare" label="Healthcare">
    **Scenario C (Healthcare):** "A hospital network decides to use AI for all
    initial patient triage, removing human nurses from the first point of contact."
  </TabItem>
</Tabs>

Choose one. The exercises work identically regardless of which you pick.

---

:::info Your Deliverable
A cascade map (hand-drawn scan or digital document) showing: the central decision, at least 5 domains affected, first-order effects in each domain, at least 3 second-order effects, at least 3 third-order effects, and at least 3 feedback loops clearly labeled (e.g., "cost savings leads to reduced service quality leads to customer churn leads to reduced revenue leads to negated cost savings"). Each effect should have a one-sentence explanation of the mechanism.
:::

---

```text title="AI Check Prompt -- Copy and paste into claude.ai or chatgpt.com"
I am a student learning systems thinking. I was given this scenario:
"A major bank decides to replace all loan officers with AI agents."
Before using AI, I created a cascade map tracing consequences across
five domains with feedback loops.

Please:
(1) Evaluate the completeness of my map -- which important effects or
    domains did I miss?
(2) Rate each of my feedback loops: are they logically sound? Would
    they actually occur?
(3) Identify at least 3 second or third-order effects I missed that
    are non-obvious but important.
(4) Rate the overall sophistication of my systems thinking from
    Beginner / Developing / Proficient / Advanced.
(5) Do any of my causal chains have logical errors -- effects that
    would not actually follow from the cause I described?

Here is my cascade map: [paste or describe your map in detail].

Finally, complete the Thinking Score Card for this exercise:
Independent Thinking (1-10), Critical Evaluation (1-10),
Reasoning Depth (1-10), Originality (1-10), Self-Awareness (1-10).
For each score, give a one-sentence justification.
```

---

<details>
<summary>Deliverable Template (click to expand)</summary>

**CASCADE MAP TEMPLATE**

- **Central Decision:** \_\_\_
- **DOMAIN 1 [Employees]:**
  - 1st-order effect: \_\_\_
  - 2nd-order: \_\_\_
  - 3rd-order: \_\_\_
- **DOMAIN 2 [Customers]:**
  - 1st-order: \_\_\_
  - 2nd-order: \_\_\_
- **DOMAIN 3 [Competitors]:**
  - 1st-order: \_\_\_
  - 2nd-order: \_\_\_
- **DOMAIN 4 [Regulators]:**
  - 1st-order: \_\_\_
  - 2nd-order: \_\_\_
- **DOMAIN 5 [Internal Knowledge]:**
  - 1st-order: \_\_\_
  - 2nd-order: \_\_\_
- **FEEDBACK LOOP 1:** [A] leads to [B] leads to [C] leads back to [A] | Type: Amplifying/Dampening | Mechanism: \_\_\_
- **FEEDBACK LOOP 2:** \_\_\_
- **FEEDBACK LOOP 3:** \_\_\_

</details>

---

### What This Teaches You

You learn to see consequences that do not appear on a linear list. By forcing yourself to map effects before AI does it for you, you build the mental habit of asking "and then what?" for every decision. The AI feedback reveals effects you missed — expanding your systems thinking vocabulary for future problems.

## Flashcards Study Aid

<Flashcards />
