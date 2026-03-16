---
sidebar_position: 1
title: "The Incomplete Brief"
description: "Make a high-stakes decision with incomplete information, commit your confidence level and reversal triggers before consulting AI, then evaluate your decision-making under uncertainty"
keywords:
  [
    "thinking skills",
    "Part 0",
    "decision-making",
    "uncertainty",
    "reversal triggers",
    "confidence calibration",
    "prediction lock",
  ]
chapter: 9
lesson: 1
duration_minutes: 60

# HIDDEN SKILLS METADATA
skills:
  - name: "Decision-Making Under Uncertainty"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Apply"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can produce a clear recommendation with calibrated confidence and specific reversal triggers given a scenario with deliberately incomplete information"

  - name: "Reversal Trigger Design"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can define specific, testable conditions under which they would change their decision, distinguishing vague triggers from actionable ones"

  - name: "Confidence Calibration"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Evaluate"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can assign a confidence percentage to a decision and justify why it is neither overconfident nor underconfident given the available evidence"

learning_objectives:
  - objective: "Make a clear recommendation under uncertainty with explicit reasoning and calibrated confidence"
    proficiency_level: "A1"
    bloom_level: "Apply"
    assessment_method: "AI Check evaluates whether the recommendation is reasonable given available information and whether confidence is calibrated"

  - objective: "Identify the most decision-relevant missing information and rank gaps by impact"
    proficiency_level: "A1"
    bloom_level: "Analyze"
    assessment_method: "AI Check rates whether the student identified the most decision-relevant gaps or listed generic ones"

  - objective: "Design specific, testable reversal triggers that define conditions for changing the decision"
    proficiency_level: "A1"
    bloom_level: "Evaluate"
    assessment_method: "AI Check evaluates reversal trigger specificity — vague triggers score low, testable triggers score high"

cognitive_load:
  new_concepts: 4
  assessment: "4 concepts (decision under uncertainty, confidence calibration, missing information ranking, reversal triggers) — within Part 0 beginner range of 3-5"

differentiation:
  extension_for_advanced: "After completing the exercise, define three reversal triggers at different confidence thresholds (e.g., 'at 70% confident I would need X to reverse, at 40% I would need Y') and analyze how trigger specificity changes with confidence level"
  remedial_for_struggling: "Start by writing just the recommendation and one reversal trigger. Then add the confidence level. Finally add the missing information list. Build the document in stages rather than all at once"

teaching_guide:
  lesson_type: "exercise"
  session_group: 9
  session_title: "The Incomplete Brief"
  key_points:
    - "The reversal trigger is the single most important concept in this exercise — it separates someone who has thought deeply about their decision from someone who is just guessing"
    - "Confidence calibration is not about being right — it is about knowing how much you know. A 40% confidence with accurate calibration is more valuable than 90% confidence that turns out to be wrong"
    - "Missing information ranking by impact forces students to think about what MATTERS, not just what is unknown — there is always infinite missing information, the skill is identifying what would change the decision"
    - "This exercise introduces the Reversal Trigger concept that recurs throughout Parts 2-10 of this book"
  misconceptions:
    - "Students think low confidence means a bad decision — wrong, sometimes 55% is the best anyone can do with the available data, and knowing that is the skill"
    - "Students write vague reversal triggers like 'if the market changes' — they need to be specific and testable like 'if competitor pricing is below $50/month'"
    - "Students list missing information by category (more market data, more customer data) instead of ranking by decision impact"
  discussion_prompts:
    - "Two students both recommended the same action but one had 50% confidence and one had 90%. The actual outcome matched both recommendations. Who demonstrated better thinking?"
    - "Why is a specific reversal trigger more valuable than a vague one, even if you never need to use it?"
  teaching_tips:
    - "Emphasize that this exercise and the next three all work on the SAME scenario — the sealed decision made here carries forward through exercises 2, 3, and 4"
    - "Have students share their reversal triggers anonymously and let the class rate them for specificity — this makes the vague-vs-specific distinction concrete"
    - "Frame the Reversal Trigger as a named tool they will carry forward: every major decision in Parts 2-10 should include one"
  assessment_quick_check:
    - "Ask students: What is the difference between 'I would change my mind if things get worse' and 'I would change my mind if Q3 revenue drops below $2M'?"
    - "Ask students: Why does this exercise make you decide BEFORE consulting AI?"
submission:
  type: "ai-check"
  accept: ["text"]
  providers: ["chatgpt", "claude", "gemini", "grok", "claude-code", "cowork"]
  default_provider: "chatgpt"
  xp_bonus: 50
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Deciding Under Uncertainty

> _AI will always ask for more data. The real world will never give you enough. The student who can decide well with 60% of the information beats the student who waits for 100% every time._

Most education trains students to solve problems with all the information provided. Real problems never arrive that way. This chapter trains the skill of making decisions when the data is incomplete, contradictory, or deliberately misleading — and revising those decisions without ego when new information arrives.

:::note Building On Previous Chapters
Decision-making under uncertainty directly uses your **Confidence Calibration** from [Chapter 2, Exercise 4](../02-detecting-broken-reasoning/04-confidence-calibration.md), the **Assumption Autopsy** from [Chapter 4, Exercise 3](../04-reasoning-from-first-principles/03-assumption-autopsy.md), and the **Collaboration Log** format from [Chapter 6, Exercise 2](../06-working-with-ai-not-for-ai/02-collaboration-log.md). Your Error Taxonomy should now be instinctive when evaluating AI output under time pressure.
:::

## Exercise 1: The Incomplete Brief

**Layers Used:** Layer 1 (Predict Before You Prompt)

:::note Building On Previous Exercises
You will use **Confidence Calibration** from [Chapter 2, Exercise 4](../02-detecting-broken-reasoning/04-confidence-calibration.md) — now applied to decisions, not claims — and the **Assumption Autopsy** from [Chapter 4, Exercise 3](../04-reasoning-from-first-principles/03-assumption-autopsy.md) — your missing information list is an assumption list.
:::

### What You Do

You receive a scenario with deliberately missing information. Before touching any AI tool, read the scenario, make your decision, and document everything.

---

### Choose Your Scenario

<Tabs>
  <TabItem value="business" label="Business" default>
    **Scenario A (Business):** "A competitor has launched a product that may
    overlap with yours. You have partial market data, a rumor about their
    pricing, and conflicting customer feedback. Your CEO needs a recommendation
    by end of day."
  </TabItem>
  <TabItem value="technical" label="Technical">
    **Scenario B (Technical):** "Your production system is showing intermittent
    failures. You have incomplete logs, conflicting monitoring data, and a team
    split on whether to roll back or push forward. A decision is needed in 2
    hours."
  </TabItem>
  <TabItem value="social" label="Social/Education">
    **Scenario C (Education):** "Your program's enrollment is down 20%. You have
    incomplete survey data, rumors about a competing program, and contradictory
    feedback from current students. The board meeting is tomorrow."
  </TabItem>
</Tabs>

Choose one. The exercises work identically regardless of which you pick. You will use this same scenario for all four exercises in this chapter.

---

:::info Your Deliverable
A Decision Document containing: your recommendation (one clear sentence), your reasoning (200-300 words), your confidence level (0-100%), the three pieces of missing information that would most change your decision (ranked by impact), and a **Reversal Trigger** ("I would change my recommendation if X turns out to be true" — be specific, not vague).
:::

```text title="AI Check Prompt -- Copy and paste into claude.ai or chatgpt.com"
I made a business decision under uncertainty before consulting AI.
The scenario: [paste scenario].
Please:

(1) Rate the quality of my recommendation -- is it a reasonable decision
    given the available information?
(2) Evaluate my confidence level -- is it calibrated appropriately to the
    uncertainty I face, or am I over/underconfident?
(3) Rate my missing information list -- did I identify the most
    decision-relevant gaps, or did I list generic gaps?
(4) Rate my Reversal Trigger -- is it specific and testable, or is it
    vague? ("I'd change my mind if the market shifts" is vague. "I'd change
    my mind if their pricing is below $50/month" is specific.)
(5) What decision would you make with the same incomplete information?
    I will compare our reasoning.

My Decision Document: [paste].

Finally, complete the Thinking Score Card for this exercise:
Independent Thinking (1-10), Critical Evaluation (1-10),
Reasoning Depth (1-10), Originality (1-10), Self-Awareness (1-10).
For each score, give a one-sentence justification.
```

---

<details>
<summary>Deliverable Template (click to expand)</summary>

**DECISION DOCUMENT TEMPLATE**

- **Scenario:** [paste]
- **MY RECOMMENDATION (1 clear sentence):** \_\_\_
- **MY REASONING (200-300 words):** \_\_\_
- **CONFIDENCE LEVEL:** \_\_\_%
- **WHY this confidence:** \_\_\_
- **MISSING INFORMATION (ranked by impact):**
  - #1: \_\_\_ | If known, impact: \_\_\_
  - #2: \_\_\_ | If known, impact: \_\_\_
  - #3: \_\_\_ | If known, impact: \_\_\_
- **REVERSAL TRIGGER (must be specific and testable):**
  I would change my recommendation if: \_\_\_

</details>

---

### What This Teaches You

You learn that deciding under uncertainty is itself a skill. The AI check reveals whether your confidence is calibrated, whether your reversal triggers are actionable, and whether your reasoning is sound given what you know. The **Reversal Trigger** becomes a decision-making framework you use for the rest of the book and your career — every major decision should include one.
