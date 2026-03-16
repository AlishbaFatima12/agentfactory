---
sidebar_position: 1
title: "The Position Lock"
description: "Take a clear ethical position on a dilemma before consulting AI, building a Stakeholder Cost Matrix that maps who benefits, who is harmed, and who is ignored by your decision"
keywords:
  [
    "thinking skills",
    "Part 0",
    "ethical reasoning",
    "position lock",
    "stakeholder cost matrix",
    "dilemma analysis",
  ]
chapter: 7
lesson: 1
duration_minutes: 60

# HIDDEN SKILLS METADATA
skills:
  - name: "Ethical Position Formulation"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Evaluate"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can articulate a clear ethical position with three supporting arguments, identify all affected stakeholders, and assign a calibrated confidence level with a specific reversal trigger"

  - name: "Stakeholder Cost Analysis"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can map every stakeholder group affected by an ethical decision, classify each as benefiting or harmed, and rate the magnitude of impact"

learning_objectives:
  - objective: "Formulate and defend a clear ethical position on a dilemma with no obvious right answer, supported by three distinct arguments"
    proficiency_level: "A1"
    bloom_level: "Evaluate"
    assessment_method: "AI Check rates logical strength of each argument 1-10 and evaluates whether the position statement is clear and specific"

  - objective: "Construct a Stakeholder Cost Matrix that identifies all affected groups and honestly assesses who bears the cost of the decision"
    proficiency_level: "A1"
    bloom_level: "Analyze"
    assessment_method: "AI Check evaluates completeness of stakeholder identification and honesty of cost attribution"

  - objective: "Assign a calibrated confidence level to an ethical position and specify concrete conditions under which the position would be reversed"
    proficiency_level: "A1"
    bloom_level: "Evaluate"
    assessment_method: "AI Check assesses whether confidence level matches argument strength and whether reversal triggers are specific and testable"

cognitive_load:
  new_concepts: 4
  assessment: "4 concepts (position lock for ethics, stakeholder cost matrix, confidence calibration on ethical positions, reversal triggers) -- within Part 0 beginner range of 3-5"

differentiation:
  extension_for_advanced: "After completing the exercise, identify a real-world case where a similar dilemma was decided differently by two organizations and analyze what values drove each decision"
  remedial_for_struggling: "Start with just two arguments instead of three. Focus on identifying at least three stakeholder groups before expanding the full matrix"

teaching_guide:
  lesson_type: "exercise"
  session_group: 7
  session_title: "Reasoning Through Dilemmas"
  key_points:
    - "The Position Lock forces students to commit before AI provides a diplomatic non-answer -- this is where ethical reasoning begins, not ends"
    - "The Stakeholder Cost Matrix is the chapter's signature tool -- it makes invisible tradeoffs visible by naming every group affected and classifying the impact"
    - "Students must include a reversal trigger -- this prevents position-taking from becoming stubbornness and trains intellectual honesty"
    - "AI tends to present 'both sides' without committing -- the entire point of this exercise is that students must commit where AI will not"
  misconceptions:
    - "Students think ethical reasoning means finding the 'right answer' -- these dilemmas are deliberately chosen to have no clear right answer"
    - "Students confuse having a strong position with being closed-minded -- the reversal trigger proves they remain open to evidence"
    - "Students list stakeholders they sympathize with but forget groups they do not care about -- the matrix must include ALL affected groups, not just the ones the student favors"
  discussion_prompts:
    - "Two students chose opposite positions on the same dilemma. Both scored 8/10 on argument strength. How is that possible, and what does it tell you about ethical reasoning?"
    - "Why does AI refuse to take a firm position on most ethical dilemmas? Is that a feature or a limitation?"
  teaching_tips:
    - "Have students read each other's Stakeholder Cost Matrices before defence -- they will find groups the author missed, which is the point"
    - "Emphasize that the confidence percentage is not a grade -- 40% confidence with honest reasoning scores higher than 95% confidence with weak arguments"
    - "The scenarios are deliberately chosen so that all positions are defensible -- do not steer students toward a 'correct' answer"
  assessment_quick_check:
    - "Ask students: What is the difference between a position you hold because you thought it through and a position you hold because it feels right?"
    - "Ask students to name the stakeholder group most harmed by their decision -- if they cannot, their matrix is incomplete"
submission:
  type: "ai-check"
  accept: ["text"]
  providers: ["chatgpt", "claude", "gemini", "grok", "claude-code", "cowork"]
  default_provider: "chatgpt"
  xp_bonus: 50
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# The Position Lock

> _AI gives balanced, diplomatic, non-committal answers to hard ethical questions. The real world requires you to take a position, defend it, and live with the tradeoffs._

:::note Building On Previous Chapters
The Stakeholder Cost Matrix extends your systems thinking from [Chapter 3](../03-thinking-in-systems/01-cascade-mapping.md) to ethical terrain. The adversarial defence uses the same first-principles structure from [Chapter 4](../04-reasoning-from-first-principles/04-rebuild-under-new-constraints.md) -- strip the dilemma to base values and rebuild. Your Confidence Calibration from [Chapter 2](../02-detecting-broken-reasoning/04-confidence-calibration.md) tells you how much to trust your own ethical instincts.
:::

**The Core Skill**

Ethical reasoning is not about memorizing rules. It is about navigating situations where values conflict, stakeholders disagree, and every option has a cost. AI tools tend to present "both sides" without committing. This chapter trains you to go further: take a position, defend it under attack, and identify exactly who bears the cost of your decision.

## Exercise 1: The Position Lock

**Layers Used:** Layer 1 (Predict Before You Prompt)

**Building On:** Chapter 3's Stakeholder Cost Matrix (now applied to ethical terrain) + Chapter 4's first principles (strip the dilemma to base values).

---

### What You Do

You receive an ethical dilemma where values conflict and every option has a cost. Before AI: write your position (use it, ban it, modify it, or something else), your three strongest arguments, and explicitly identify who bears the cost of your decision. Seal and submit.

---

### Choose Your Scenario

<Tabs>
  <TabItem value="hr-ai" label="HR/AI" default>
    **Scenario A (HR/AI):** "An AI hiring tool reduces time-to-hire by 60% but
    shows statistically significant bias against candidates from certain
    universities."
  </TabItem>
  <TabItem value="healthcare" label="Healthcare">
    **Scenario B (Healthcare):** "An AI diagnostic tool catches 30% more
    early-stage cancers than human doctors but has a 5% false positive rate that
    leads to unnecessary invasive procedures."
  </TabItem>
  <TabItem value="education" label="Education">
    **Scenario C (Education):** "An AI grading system saves teachers 15 hours
    per week but consistently underrates creative and unconventional student
    work."
  </TabItem>
</Tabs>

Choose one. The exercises work identically regardless of which you pick.

---

:::info Your Deliverable
A Position Lock document containing: your clear position statement (one sentence), your three strongest arguments with evidence or reasoning for each, a Stakeholder Cost Matrix listing every stakeholder group and how your decision affects them (who benefits, who is harmed, who is ignored), and a Confidence Statement rating how certain you are (0-100%) with an explanation of what would change your mind.
:::

```text title="AI Check Prompt -- Copy and paste into claude.ai or chatgpt.com"
I took a position on an ethical dilemma before consulting AI.
The dilemma: [paste dilemma].
Please:

(1) Rate the logical strength of each of my three arguments from 1-10.
(2) Evaluate my Stakeholder Cost Matrix -- did I identify all affected groups?
    Am I honest about who bears the cost?
(3) Is my confidence level appropriate given the strength of my arguments,
    or am I overconfident/underconfident?
(4) What is the single strongest counter-argument to my position that I need
    to be prepared to face?
(5) Are there stakeholder groups I completely missed?
(6) Give me a preliminary grade: Position Clarity (1-10), Argument Strength
    (1-10), Stakeholder Awareness (1-10), Intellectual Honesty (1-10).

My Position Lock: [paste full document].

Finally, complete the Thinking Score Card for this exercise:
Independent Thinking (1-10), Critical Evaluation (1-10),
Reasoning Depth (1-10), Originality (1-10), Self-Awareness (1-10).
For each score, give a one-sentence justification.
```

<details>
<summary>Deliverable Template (click to expand)</summary>

**POSITION LOCK TEMPLATE**

- **Dilemma:** [paste]
- **MY POSITION (1 sentence):** \_\_\_
- **ARGUMENT 1:**
  - Claim: \_\_\_
  - Evidence/Reasoning: \_\_\_
- **ARGUMENT 2:**
  - Claim: \_\_\_
  - Evidence/Reasoning: \_\_\_
- **ARGUMENT 3:**
  - Claim: \_\_\_
  - Evidence/Reasoning: \_\_\_
- **STAKEHOLDER COST MATRIX:**

| Group | Impact | Benefit/Harm | Magnitude (L/M/H) |
| ----- | ------ | ------------ | ----------------- |
|       |        |              |                   |

- **CONFIDENCE:** \_\_\_%
- **REVERSAL TRIGGER:** I would change my mind if: \_\_\_

</details>

### What This Teaches You

You learn to take an ethical position with full awareness of its costs. AI feedback reveals whether your arguments are as strong as you think and whether your stakeholder analysis is complete -- preparing you for the defence to come.
