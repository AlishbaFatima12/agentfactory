---
sidebar_position: 1
title: "The Audience Prediction"
description: "Predict what three different stakeholders care about before asking AI to write for them, revealing the human judgment layer that separates communication from writing"
keywords:
  [
    "thinking skills",
    "Part 0",
    "audience analysis",
    "stakeholder communication",
    "persuasion strategy",
    "reasoning receipt",
  ]
chapter: 6
lesson: 1
duration_minutes: 60

# HIDDEN SKILLS METADATA
skills:
  - name: "Audience Analysis"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Apply"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can create audience profiles predicting stakeholder priorities, objections, and persuasion strategies before using AI, then compare predictions against AI-generated output"

  - name: "Persuasion Strategy"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can identify where human audience reading adds value that AI misses, such as political dynamics, emotional undercurrents, and organizational context"

learning_objectives:
  - objective: "Create audience profiles for three distinct stakeholders, predicting each one's priorities, likely objections, and the argument most likely to persuade them"
    proficiency_level: "A1"
    bloom_level: "Apply"
    assessment_method: "AI Check evaluates accuracy of audience profiles and realism of predicted objections"

  - objective: "Compare human audience predictions against AI-generated persuasive briefs to identify where human judgment adds value beyond AI capability"
    proficiency_level: "A1"
    bloom_level: "Analyze"
    assessment_method: "Comparison document demonstrates specific instances where student's audience reading captured dimensions AI missed"

cognitive_load:
  new_concepts: 4
  assessment: "4 concepts (audience profiling, stakeholder priorities, objection prediction, persuasion strategy comparison) -- within Part 0 beginner range of 3-5"

differentiation:
  extension_for_advanced: "After completing the exercise, write a 4th audience profile for a stakeholder you invent -- someone with an unusual perspective on the decision -- and test whether AI can predict their priorities as well as you can"
  remedial_for_struggling: "Start with just one audience profile instead of three. Focus on the stakeholder closest to your own experience, then build the other two using the same structure"

teaching_guide:
  lesson_type: "exercise"
  session_group: 5
  session_title: "Communicating What Matters"
  key_points:
    - "Effective communication starts with audience modeling, not with writing -- students must predict what stakeholders care about BEFORE drafting anything"
    - "AI writes competent briefs but often misses political, emotional, and cultural dimensions that determine whether a message actually lands"
    - "The prediction-then-compare structure from earlier chapters now applies to communication -- predict audience reactions, then test against AI output"
    - "The Error Taxonomy from Chapter 2 applies here: students are detecting communication errors (wrong emphasis, wrong audience model) not factual errors"
  misconceptions:
    - "Students think good communication means good writing -- emphasize that communication is about understanding the audience, not producing polished prose"
    - "Students assume AI audience analysis is always correct -- the exercise reveals where human insight about organizational politics and relationships outperforms AI"
    - "Students treat all three audiences the same way -- the point is that the SAME decision requires fundamentally different framing for different stakeholders"
  discussion_prompts:
    - "Why might a human who knows nothing about microservices still be better at predicting the CFO's reaction than an AI that knows everything about microservices?"
    - "When AI generates a persuasive brief, what kinds of information about the audience is it forced to guess at? What kinds does it handle well?"
  teaching_tips:
    - "Have students share their audience profiles before revealing AI's versions -- the class discussion about differences is where the deepest learning happens"
    - "Push students to be specific in their objection predictions: not 'the CFO will worry about cost' but 'the CFO will ask about the migration cost relative to the current renewal contract'"
    - "The comparison document is the most important deliverable -- students must articulate WHERE and WHY their human reading adds value, not just assert that it does"
  assessment_quick_check:
    - "Ask students: What is the difference between writing well and communicating well?"
    - "Ask students to explain why the same decision might require three completely different arguments for three different people"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Communicating What Matters

> _AI can write anything for any audience. It cannot read the room, sense resistance, or adjust in real-time. The student who communicates well does not just produce messages -- they produce the right message for the right person at the right moment._

:::note Building On Previous Chapters
The audience analysis uses the same prediction-then-compare structure from Chapters 1-4. The Error Taxonomy from [Chapter 2](../03-detecting-broken-reasoning/01-error-prediction.md) applies when diagnosing communication -- you are detecting communication errors, not factual errors. The Reasoning Receipt format from [Chapter 1, Exercise 1](../02-asking-better-questions/01-prediction-lock.md) carries forward.
:::

Communication is not writing. Writing is what AI does. Communication is understanding an audience, anticipating their objections, choosing what to emphasize and what to leave out, and adapting when the response you expected is not the response you get. This chapter trains the human layer that sits on top of any AI-generated draft.

## Exercise 1: Three Audiences, One Decision

**Layers Used:** Layer 1 (Predict Before You Prompt), Layer 2 (Reasoning Receipt)

### What You Do

You receive a technical decision. Before AI, write audience profiles for three stakeholders. For each, predict: what they care about most, their likely objection, and the one argument most likely to persuade them. Then ask AI to write a persuasive brief for each audience and compare against your predictions.

### Choose Your Scenario

<Tabs>
  <TabItem value="technical" label="Technical" default>
    **Scenario A (Technical):** "Our company should migrate from a monolithic
    architecture to microservices." Audiences: skeptical CTO, cost-conscious CFO,
    non-technical CEO.
  </TabItem>
  <TabItem value="product" label="Product">
    **Scenario B (Product):** "Our product should switch from freemium to
    subscription-only." Audiences: head of growth, head of finance, existing
    free-tier power user.
  </TabItem>
  <TabItem value="education" label="Education">
    **Scenario C (Education):** "Our institution should replace exams with
    portfolio-based assessment." Audiences: traditional faculty member,
    accreditation board, student government president.
  </TabItem>
</Tabs>

Choose one. The exercises work identically regardless of which you pick.

:::info Your Deliverable
Three audience profiles (written without AI) each containing: the stakeholder's priorities, their predicted objection, and the persuasion strategy you would use. Three AI-generated persuasive briefs (one per audience). A comparison document showing: where AI's audience model matched yours, where it differed, and where you believe your audience reading was more accurate than AI's (with reasoning).
:::

```text title="AI Check Prompt -- Copy and paste into claude.ai or chatgpt.com"
I predicted three audience profiles for a technical decision, then had AI
generate persuasive briefs for each. Please:

(1) Rate my audience profiles -- did I correctly identify what each stakeholder
    cares about?
(2) Rate my predicted objections -- are these realistic? Did I miss any likely
    objections?
(3) Compare my persuasion strategy vs. the AI-generated brief for each
    audience -- which approach would actually be more effective and why?
(4) Identify where my human audience reading adds value that AI missed
    (e.g., political dynamics, emotional undercurrents, organizational history).
(5) Give me specific feedback on improving my weakest audience profile.

Decision: [paste].
My audience profiles: [paste].
AI-generated briefs: [paste].

Finally, complete the Thinking Score Card for this exercise:
Independent Thinking (1-10), Critical Evaluation (1-10),
Reasoning Depth (1-10), Originality (1-10), Self-Awareness (1-10).
For each score, give a one-sentence justification.
```

### What This Teaches You

You learn that effective communication starts with audience modeling, not with writing. AI writes competent briefs but often misses the political, emotional, and cultural dimensions that determine whether a message actually lands. Your audience predictions, even when imperfect, train the skill that makes every future communication more effective.
