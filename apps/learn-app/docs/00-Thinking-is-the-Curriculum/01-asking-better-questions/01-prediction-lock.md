---
sidebar_position: 1
aicheck: true
title: "The Prediction Lock"
description: "Commit your diagnosis and questions before touching AI, then compare your thinking against machine output to reveal blind spots in your question formulation"
keywords:
  [
    "thinking skills",
    "Part 0",
    "question formulation",
    "prediction lock",
    "diagnostic questions",
    "reasoning receipt",
  ]
chapter: 1
lesson: 1
duration_minutes: 60

# HIDDEN SKILLS METADATA
skills:
  - name: "Question Formulation"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Apply"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can generate 10 ranked diagnostic questions for a business scenario, predict answers, and justify rankings by diagnostic power"

  - name: "Prediction Before Prompting"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Apply"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can commit a written diagnosis and predictions to a timestamped document before using any AI tool, then compare predictions against AI output"

  - name: "Reasoning Receipt Documentation"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can document every AI prompt, response, and accept/reject/modify decision with one-sentence justifications in a structured reasoning receipt"

learning_objectives:
  - objective: "Generate and rank diagnostic questions by their power to reveal root causes in a business scenario"
    proficiency_level: "A1"
    bloom_level: "Apply"
    assessment_method: "AI Check evaluates each question on a 1-10 scale for diagnostic power and rates overall question formulation skill"

  - objective: "Commit a prediction in writing before using AI, creating a measurable baseline of independent thinking"
    proficiency_level: "A1"
    bloom_level: "Apply"
    assessment_method: "Timestamped prediction lock document exists before any AI interaction; AI Check evaluates prediction quality"

  - objective: "Document AI interactions as a reasoning receipt showing critical engagement rather than passive acceptance"
    proficiency_level: "A1"
    bloom_level: "Analyze"
    assessment_method: "Reasoning receipt shows accept/reject/modify decisions with justifications for each AI response"

cognitive_load:
  new_concepts: 4
  assessment: "4 concepts (prediction lock, diagnostic questions, question ranking by power, reasoning receipt) : within Part 0 beginner range of 3-5"

differentiation:
  extension_for_advanced: "After completing the exercise, feed your prediction lock to a second AI tool and compare how the two tools rate the same questions differently: analyze why"
  remedial_for_struggling: "Start with just 5 questions instead of 10. Focus on writing a clear diagnosis first, then build questions from what you do not yet know about the scenario"

teaching_guide:
  lesson_type: "exercise"
  session_group: 1
  session_title: "The Prediction Lock"
  key_points:
    - "The prediction lock is a timestamp-sealed document: its value comes from being written BEFORE AI access, making it a genuine record of independent thinking"
    - "Question ranking by diagnostic power is the core skill: students must justify WHY one question reveals more than another, not just list questions"
    - "The reasoning receipt format (prompt/response/decision/justification) carries forward through every chapter: establish it carefully here"
    - "Students will discover that their initial diagnosis is often partially wrong: this is the point, not a failure"
  misconceptions:
    - "Students think the goal is to get the 'right answer' to the business scenario: the scenario answer is worth 0%, the thinking process is the entire grade"
    - "Students rank questions by 'importance' rather than diagnostic power: emphasize that a diagnostic question is one that distinguishes between competing explanations"
    - "Students treat the reasoning receipt as bureaucratic paperwork: frame it as a mirror that reveals whether they actually thought or just copied"
  discussion_prompts:
    - "Two students both concluded that 'poor targeting' caused the sales drop. One predicted it before AI and one got it from AI. How would you tell the difference?"
    - "Why does ranking questions by diagnostic power produce better thinking than just listing every question you can think of?"
  teaching_tips:
    - "Have students seal their prediction locks physically (envelope, timestamp, photo) before opening AI tools: the ceremony reinforces that this commitment matters"
    - "Walk through one example question ranking as a class: 'What changed in the marketing mix?' vs 'Did sales drop across all product categories?' : which one eliminates more hypotheses?"
    - "The reasoning receipt is new for most students. Show a completed example (accept/reject/modify) before they start, so the format does not become a barrier to the thinking"
  assessment_quick_check:
    - "Ask students: What is the difference between a question that is 'interesting' and a question that is 'diagnostic'?"
    - "Ask students to explain why the prediction lock must be written BEFORE touching AI: what would be lost if they wrote it after?"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# The Prediction Lock

> _AI quality is downstream of question quality. The student who asks better questions gets better answers from every tool, every person, and every system for the rest of their career._

Most students type the first thing that comes to mind into an AI tool and accept whatever comes back. This chapter trains you to treat question formulation as a disciplined practice. A vague question produces a vague answer. A precise, layered question produces insight. This is not about prompt engineering; it is about thinking clearly enough to know what you actually need to know.

---

## Exercise 1: The Prediction Lock

**Layers Used:** Layer 1 (Predict Before You Prompt), Layer 2 (Reasoning Receipt)

### What You Do

You receive a scenario describing an unexpected outcome. Before touching any AI tool, write down in a sealed document:

1. **(a)** Your initial diagnosis of what went wrong
2. **(b)** The 10 most important questions you would ask to understand this problem, ranked by diagnostic power
3. **(c)** Your predicted answer to each question

Timestamp and submit this prediction lock. Only then open claude.ai or chatgpt.com. Feed your top 5 questions to both tools. Document every response, noting whether you accept, reject, or modify each AI answer.

### Choose Your Scenario

<Tabs>
  <TabItem value="business" label="Business" default>
    **Scenario A (Business):** "A retail company's online sales dropped 15%
    despite a 20% increase in marketing spend."
  </TabItem>
  <TabItem value="technical" label="Technical">
    **Scenario B (Technical):** "A software team's deployment frequency dropped
    from daily to weekly after adopting a new CI/CD pipeline that was supposed
    to speed things up."
  </TabItem>
  <TabItem value="social" label="Social/Education">
    **Scenario C (Social/Education):** "A university's student enrollment
    increased by 25% but student satisfaction scores dropped to their lowest
    in a decade."
  </TabItem>
</Tabs>

Choose one. The exercises work identically regardless of which you pick.

---

:::info Your Deliverable
A sealed prediction document (timestamped before AI use) containing your diagnosis, 10 ranked questions with predicted answers, followed by a reasoning receipt showing all 5 prompts sent to both Claude and ChatGPT, the responses received, and your accept/reject/modify decision for each with a one-sentence justification.
:::

<AICheck id="prediction-lock" xp={50}>

I am a student learning question formulation. Below is a business scenario,
followed by my initial diagnosis and 10 ranked diagnostic questions.
Please evaluate:

(1) Rate each of my 10 questions on a scale of 1-10 for diagnostic power --
how likely is this question to reveal the root cause?
(2) Identify which of my questions are too vague, too narrow, or redundant.
(3) Suggest 3 questions I missed that would have been more diagnostic than
my weakest 3.
(4) Evaluate my ranking -- did I put the highest-value questions at the top?
(5) Rate my overall question formulation skill from
Beginner / Developing / Proficient / Advanced and explain why.

Here is the scenario:

<AICheckField
  name="scenario"
  placeholder="Paste your chosen scenario here..."
  rows={2}
/>

Here is my work:

<AICheckField
  name="prediction_lock_document"
  placeholder="Paste your prediction lock document here..."
  rows={6}
/>

Finally, complete the Thinking Score Card for this exercise:
Independent Thinking (1-10), Critical Evaluation (1-10),
Reasoning Depth (1-10), Originality (1-10), Self-Awareness (1-10).
For each score, give a one-sentence justification.

</AICheck>

---

<details>
<summary>Deliverable Template (click to expand)</summary>

**PREDICTION LOCK TEMPLATE**

- **Date/Time:** \_\_\_
- **Scenario:** [paste]
- **Section A - My Diagnosis (2-3 sentences):** \_\_\_
- **Section B - My 10 Questions (ranked):**
  - Q1 [highest value]: \_\_\_ | Predicted answer: \_\_\_
  - Q2: \_\_\_ | Predicted answer: \_\_\_
  - Q3: \_\_\_ | Predicted answer: \_\_\_
  - Q4: \_\_\_ | Predicted answer: \_\_\_
  - Q5: \_\_\_ | Predicted answer: \_\_\_
  - Q6: \_\_\_ | Predicted answer: \_\_\_
  - Q7: \_\_\_ | Predicted answer: \_\_\_
  - Q8: \_\_\_ | Predicted answer: \_\_\_
  - Q9: \_\_\_ | Predicted answer: \_\_\_
  - Q10: \_\_\_ | Predicted answer: \_\_\_
- **Section C - REASONING RECEIPT:**

| Prompt # | Prompt Sent | Tool    | Response Summary | Decision             | Justification |
| -------- | ----------- | ------- | ---------------- | -------------------- | ------------- |
| 1        |             | Claude  |                  | Accept/Reject/Modify |               |
| 2        |             | ChatGPT |                  | Accept/Reject/Modify |               |
| 3        |             | Claude  |                  | Accept/Reject/Modify |               |
| 4        |             | ChatGPT |                  | Accept/Reject/Modify |               |
| 5        |             | Claude  |                  | Accept/Reject/Modify |               |
| 6        |             | ChatGPT |                  | Accept/Reject/Modify |               |
| 7        |             | Claude  |                  | Accept/Reject/Modify |               |
| 8        |             | ChatGPT |                  | Accept/Reject/Modify |               |
| 9        |             | Claude  |                  | Accept/Reject/Modify |               |
| 10       |             | ChatGPT |                  | Accept/Reject/Modify |               |

</details>

---

### What This Teaches You

You learn that the quality of your questions determines the quality of every answer you will ever get; from AI, from colleagues, from data. By predicting first and then comparing, you see exactly where your thinking was strong and where it was lazy. The AI grading reveals blind spots in your questioning that you cannot see yourself. Over time, you internalize what makes a question diagnostic rather than decorative.

## Flashcards Study Aid

<Flashcards />
