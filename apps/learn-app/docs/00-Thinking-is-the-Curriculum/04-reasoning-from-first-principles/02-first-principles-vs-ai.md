---
sidebar_position: 2
aicheck: true
title: "First Principles vs. AI"
description: "Solve a novel problem with no established solution using only first principles, then compare your derivation against AI's approach to reveal the difference between principled and pattern-based reasoning"
keywords:
  [
    "thinking skills",
    "Part 0",
    "first principles",
    "novel problem solving",
    "constraint identification",
    "divergence test",
  ]
chapter: 4
lesson: 2
duration_minutes: 90

# HIDDEN SKILLS METADATA
skills:
  - name: "Constraint Identification"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can identify the base constraints of a novel problem: facts that are true regardless of the approach chosen: and distinguish them from assumptions"

  - name: "First Principles Solution Design"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Create"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can derive a solution from identified constraints through a clear logical chain, then compare their derivation against AI to evaluate originality"

learning_objectives:
  - objective: "Identify base constraints and explicit assumptions for a novel problem with no established solution"
    proficiency_level: "A1"
    bloom_level: "Analyze"
    assessment_method: "AI Check evaluates whether constraints are genuine base truths and identifies hidden assumptions the student did not list"

  - objective: "Derive a solution from constraints through a documented logical chain and compare against AI's pattern-based approach"
    proficiency_level: "A1"
    bloom_level: "Create"
    assessment_method: "AI Check rates solution originality, evaluates whether it logically follows from stated constraints, and identifies the biggest flaw"

cognitive_load:
  new_concepts: 4
  assessment: "4 concepts (base constraints vs. assumptions, derivation chains, novel problem solving without references, human-AI solution comparison) : within Part 0 beginner range of 3-5"

differentiation:
  extension_for_advanced: "After comparing your solution with AI's, identify the philosophical assumptions underlying each approach. Your solution likely optimizes for one definition of 'fairness' while AI optimizes for another: name both and argue for yours"
  remedial_for_struggling: "Start by listing 5 facts about the problem that are undeniably true. These are your base constraints. Then ask: given ONLY these facts, what must any solution include? Build from there"

teaching_guide:
  lesson_type: "exercise"
  session_group: 4
  session_title: "First Principles vs. AI"
  key_points:
    - "This is a 45-minute, no-AI, no-internet exercise: students must derive a solution from nothing but the problem statement and their own reasoning"
    - "The First Principles Worksheet structure (constraints, assumptions, derivation chain, solution) is the key deliverable format: it makes reasoning visible and auditable"
    - "Comparing against AI reveals whether the student produced genuine first-principles thinking or unconsciously borrowed familiar patterns"
    - "The constraint identification skill becomes foundational for every design and architecture decision in the rest of the book"
  misconceptions:
    - "Students confuse constraints with assumptions: constraints are true regardless of approach (limited supply), assumptions are choices (equal access is fairest)"
    - "Students jump to solutions without documenting the derivation chain: the chain IS the exercise, not the solution"
    - "Students think 'novel problem' means there is no good answer: there are many good answers, each following from different constraint prioritization"
  discussion_prompts:
    - "How did your solution differ from AI's? Can you trace the difference back to a specific constraint or assumption where you diverged?"
    - "Was your solution more original than AI's, or did you unconsciously reproduce a common pattern? How can you tell the difference?"
  teaching_tips:
    - "Enforce the 45-minute time limit and no-tool constraint: the discomfort of reasoning from nothing is the pedagogical point"
    - "The First Principles Worksheet template helps students who freeze when faced with a blank page: provide it at the start"
    - "After the exercise, compare 3-4 student solutions. The divergence between them (vs. AI's convergent output) demonstrates the Divergence Test principle"
  assessment_quick_check:
    - "Ask students to state their derivation chain in 3 sentences: From constraint X and assumption Y, it follows that Z. Therefore, the solution must include W."
    - "Ask students: Did AI approach the problem the same way you did? If not, where exactly did the approaches diverge?"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# First Principles vs. AI

## Why This Matters: James and the Empty Toolbox

James looked at the exercise description and pushed back from the table. "Forty-five minutes. No AI. No internet. Solve a resource allocation problem from scratch." He looked at Emma. "There are entire textbooks on fair allocation. Operations research. Game theory. Why would I rederive something people already figured out?"

"What's the standard approach?"

"I don't know the exact algorithm, but there are frameworks. Weighted scoring, needs-based tiers, lottery systems. I'd look them up, pick the best fit, and adapt it."

"And if none of them fit?"

"One of them always fits. That's the point of having frameworks."

Emma pulled out a blank sheet of paper and set it in front of him. "The scenarios in this exercise are designed so that no standard framework fits cleanly. The constraints conflict with each other. Equal access conflicts with limited supply. Need-based allocation conflicts with practical logistics. You can't search your way to a clean answer because the answer depends on which constraints you prioritize, and that's a judgment call, not a lookup."

James stared at the blank sheet. "So you're telling me to spend forty-five minutes reinventing the wheel."

"I'm telling you to find out whether you can build a wheel. Or whether you've only ever installed one someone else designed." She paused. "In my first year as an engineer, I could configure any framework. Kubernetes, Terraform, whatever the team was using. But when a client had requirements that didn't match any existing architecture, I froze. I'd never designed from constraints before. I'd only ever selected from a menu."

"That's like our vendor evaluation process," James said slowly. "We had a scoring matrix. Worked great when the vendors were similar. But when a vendor came in with a completely different model, something that didn't fit any of our categories, we didn't know how to evaluate them. We just scored them low on every dimension because the framework couldn't see what they were offering."

"Exactly. The framework becomes a filter that blocks what it can't categorize." Emma tapped the blank sheet. "Forty-five minutes. Start with what's undeniably true about the problem. Those are your constraints. Then list every assumption you're making. Then build from there."

---

## Exercise 2: First Principles vs. AI

**Layers Used:** Layer 1 (Predict Before You Prompt), Layer 5 (Divergence Test)

James is sitting with a blank sheet of paper and a problem that has no clean answer. So are you.

### Choose Your Scenario

<Tabs>
  <TabItem value="education" label="Education" default>
    **Scenario A (Education):** "Design a fair system for distributing limited
    AI tutoring access across a school district of 200,000 students with wildly
    unequal resources."
  </TabItem>
  <TabItem value="technical" label="Technical">
    **Scenario B (Technical):** "Design a system that allocates limited GPU
    compute time fairly across 500 research teams with different project sizes,
    deadlines, and funding levels."
  </TabItem>
  <TabItem value="community" label="Community">
    **Scenario C (Community):** "Design a fair system for distributing limited
    disaster relief supplies across 50 neighborhoods with different population
    densities, damage levels, and access to alternative resources."
  </TabItem>
</Tabs>

Choose one.

### Derive Your Solution (No AI, 45 Minutes)

You receive a problem with no established solution. No AI, no internet. 45 minutes. Identify the base constraints, list your assumptions, and derive a solution from those constraints alone. After submitting, prompt AI with the same problem and compare.

:::info Your Deliverable
A First Principles Worksheet containing: (1) the base constraints you identified (e.g., limited supply, unequal need, multiple definitions of fairness), (2) every assumption you made, explicitly listed, (3) your derived solution with a clear logical chain from constraints to design, (4) a comparison document showing your solution alongside AI's solution, with annotations on where they converge and diverge.
:::

### Check Your Thinking

<AICheck id="first-principles-vs-ai" xp={50}>

I solved a novel problem using first principles reasoning without any
AI or internet assistance.

The problem I chose:

<AICheckField
  name="problem"
  placeholder="Paste your chosen problem here (e.g., 'Design a fair system for distributing limited AI tutoring access across a school district of 200,000 students with wildly unequal resources.')"
  rows={2}
/>

Below is my First Principles Worksheet. Please:
(1) Evaluate my constraint identification -- did I find the real base
constraints or did I miss critical ones?
(2) Review my assumption list -- which assumptions are reasonable and
which are questionable? What hidden assumptions did I not list?
(3) Does my solution logically follow from my stated constraints, or
are there gaps in the derivation?
(4) Rate my solution's originality -- is this something you would
generate if prompted directly, or does it show genuine independent
reasoning?
(5) What is the single biggest flaw in my solution that I need to
address?
(6) Now solve the same problem yourself. I will compare our approaches.

My worksheet:

<AICheckField
  name="worksheet"
  placeholder="Paste your First Principles Worksheet here..."
  rows={6}
/>

Finally, complete the Thinking Score Card for this exercise:
Independent Thinking (1-10), Critical Evaluation (1-10),
Reasoning Depth (1-10), Originality (1-10), Self-Awareness (1-10).
For each score, give a one-sentence justification.

</AICheck>

<details>
<summary>Deliverable Template (click to expand)</summary>

**FIRST PRINCIPLES WORKSHEET**

- **Problem:** [paste]
- **BASE CONSTRAINTS:**
  1. \_\_\_ (things that are true regardless of approach)
  2. \_\_\_
  3. \_\_\_
- **MY ASSUMPTIONS (explicit):**
  1. \_\_\_
  2. \_\_\_
  3. \_\_\_
- **DERIVATION CHAIN:** From constraint [#] + assumption [#], it follows that: \_\_\_
- **Therefore, the solution must:** \_\_\_
- **MY SOLUTION:** \_\_\_
- **WHY this follows from the constraints (not from analogy or pattern):** \_\_\_
- **WHAT I DO NOT KNOW:** \_\_\_

</details>

---

## What Happened With James

James set his First Principles Worksheet next to Claude's solution and read them side by side. His solution prioritized equity: the students with the fewest resources should get the most access. Claude's solution prioritized efficiency: allocate based on predicted learning gains per hour of tutoring time. Both were logical. Both followed from their stated constraints. But they optimized for completely different things.

"Wait, so basically... we started from the same problem and ended up in different places because we prioritized different constraints?" James said.

"What does that tell you about the standard frameworks you wanted to look up?"

James thought about it. "They'd all bake in a prioritization. I just wouldn't know which one. I'd adopt their judgment without realizing it was a judgment."

"Now you know what you actually think fairness means in this context. Not what a textbook says it means. Not what Claude says it means. What you derived when nobody else was in the room."

James looked at his worksheet. It was rough. Some of the derivation steps had question marks in the margins. But the core argument was his, and he could trace every piece of it back to a specific constraint. That had never happened when he used someone else's framework.

## The Lesson Learned

Frameworks encode someone else's priorities without labeling them as priorities. When you derive from constraints yourself, you discover what you actually value, not what you inherited. The roughness of a first-principles solution is a feature: every seam is visible, every tradeoff is traceable, and you can defend every choice because you made it deliberately.

## Flashcards Study Aid

<Flashcards />
