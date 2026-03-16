---
sidebar_position: 2
aicheck: true
title: "The Contradiction Test"
description: "When two AI tools give contradictory answers, identify the divergence points, evaluate the evidence, and build a more rigorous third analysis through three iterative drafts"
keywords:
  [
    "thinking skills",
    "Part 0",
    "error detection",
    "contradiction analysis",
    "iterative drafts",
    "evidence evaluation",
  ]
chapter: 2
lesson: 2
duration_minutes: 75

# HIDDEN SKILLS METADATA
skills:
  - name: "Contradiction Identification"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can identify specific points where two AI responses diverge on the same question and determine which side has stronger evidence"

  - name: "Three-Draft Iterative Improvement"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Create"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can produce three progressively improved drafts of an analysis, with clear evolution notes explaining what changed and why between each draft"

learning_objectives:
  - objective: "Identify meaningful contradictions between two AI responses on the same question and determine which claims are evidence-supported vs. unsupported assertions"
    proficiency_level: "A1"
    bloom_level: "Analyze"
    assessment_method: "AI Check evaluates whether all meaningful divergence points were caught and whether evidence assessment is correct"

  - objective: "Build a third analysis through three iterative drafts that is more rigorous than either AI output, demonstrating improvement across drafts"
    proficiency_level: "A1"
    bloom_level: "Create"
    assessment_method: "AI Check grades third analysis on rigor, originality, and evidence quality compared to the two AI responses, and evaluates draft evolution"

cognitive_load:
  new_concepts: 3
  assessment: "3 concepts (divergence point identification, evidence-vs-assertion distinction, three-draft iterative improvement) — within Part 0 beginner range of 3-5"

differentiation:
  extension_for_advanced: "After completing Draft 3, ask a third AI tool the same question. Identify any new contradictions between your final analysis and this third perspective. Write a 100-word note on what this reveals."
  remedial_for_struggling: "Focus on identifying just the 3 most important divergence points rather than every difference. For each, write one sentence about which AI has better evidence and why."

teaching_guide:
  lesson_type: "exercise"
  session_group: 2
  session_title: "The Contradiction Test"
  key_points:
    - "When two confident AI responses disagree, the disagreement is a signal to think harder — not a reason to pick one randomly"
    - "The three-draft structure reveals whether students can integrate feedback and improve, or whether they stop thinking after the first attempt"
    - "The distinction between evidence-supported claims and unsupported assertions is the core analytical skill here"
  misconceptions:
    - "Students think the goal is to determine which AI is 'right' — often both are partially right and partially wrong in different ways"
    - "Students treat Draft 2 and Draft 3 as cosmetic edits rather than substantive improvements — the evolution notes must show genuine intellectual progress"
  discussion_prompts:
    - "Was there any point where both AI tools were wrong in the same way? What does that tell you about AI training?"
    - "How different was your Draft 3 from your Draft 1? What drove the biggest changes?"
  teaching_tips:
    - "Show students an example of a weak evolution ('I fixed some typos and added a sentence') vs. a strong evolution ('I reversed my position on X because the AI critique revealed I had no evidence for it')"
    - "The most common failure is students who accept the AI critique completely without evaluating whether the critique itself is valid — remind them the Feedback Challenge Protocol applies here"
  assessment_quick_check:
    - "Can the student point to a specific claim where they determined one AI was stronger than the other, and explain their evidence?"
    - "Does Draft 3 contain at least one substantive change (not just wording) from Draft 1?"
---

# The Contradiction Test

**Layers Used:** Layer 4 (Contradiction Challenge), Layer 6 (Iterative Drafts)

:::note Building On Previous Chapters
You will use the **Reasoning Receipt** format from [Chapter 1, Exercise 1](../01-asking-better-questions/01-prediction-lock.md). Your annotation practice from Chapter 1 becomes error annotation here.
:::

### What You Do

Ask both Claude and ChatGPT the same nuanced question where reasonable people disagree — for example: "Is remote work better for productivity than office work?" You will receive two confident, structured, partially contradictory answers. Your job: identify exactly where the two responses diverge, determine which claims are supported by evidence vs. asserted without support, and write your own third analysis (Draft 1) that is more rigorous than either AI output. Then submit your third analysis to AI for critique, revise based on the feedback (Draft 2), and submit the final version (Draft 3).

---

:::info Your Deliverable
The two AI responses with divergence points highlighted and annotated ("Claude claims X, ChatGPT claims Y — the evidence favors..."). Your Draft 1 third analysis (written before AI feedback). Your Draft 2 (revised after AI critique). Your Draft 3 (final, after reflection). A brief evolution note for each draft explaining what changed and why.
:::

<AICheck id="contradiction-test" xp={50}>

I am learning to detect contradictions between AI outputs and build a more
rigorous analysis. I asked two AI tools the same question and received
contradictory responses. I then wrote my own analysis attempting to be more
rigorous than either. Please:

(1) Evaluate my identification of divergence points -- did I catch all the
meaningful contradictions between the two AI responses?
(2) Rate my evidence assessment -- for each divergence point, did I
correctly identify which side had stronger evidence?
(3) Grade my third analysis on a scale of 1-10 for rigor, originality, and
evidence quality compared to the two AI responses.
(4) Identify the 3 weakest claims in my analysis and explain exactly what
would make them stronger.
(5) What did both AI tools get wrong that I also missed?

Question:

<AICheckField
  name="question"
  placeholder="Paste your question here..."
  rows={2}
/>

AI Response 1:

<AICheckField
  name="ai_response_1"
  placeholder="Paste AI response 1 here..."
  rows={6}
/>

AI Response 2:

<AICheckField
  name="ai_response_2"
  placeholder="Paste AI response 2 here..."
  rows={6}
/>

My divergence annotations:

<AICheckField
  name="divergence_annotations"
  placeholder="Paste your divergence annotations here..."
  rows={6}
/>

My analysis (Draft 1):

<AICheckField
  name="analysis_draft_1"
  placeholder="Paste your analysis (Draft 1) here..."
  rows={6}
/>

Finally, complete the Thinking Score Card for this exercise:
Independent Thinking (1-10), Critical Evaluation (1-10),
Reasoning Depth (1-10), Originality (1-10), Self-Awareness (1-10).
For each score, give a one-sentence justification.

</AICheck>

---

### What This Teaches You

You learn that when two confident AI responses disagree, the disagreement is a signal to think harder, not a reason to pick one randomly. Building a third analysis that improves on both forces you into genuine thinking. The three-draft evolution reveals whether you can integrate feedback and improve — or whether you stop thinking after the first attempt.

## Flashcards Study Aid

<Flashcards />
