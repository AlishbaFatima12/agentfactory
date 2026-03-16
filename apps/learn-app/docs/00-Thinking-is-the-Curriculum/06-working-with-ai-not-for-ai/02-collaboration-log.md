---
sidebar_position: 2
title: "The Collaboration Log"
description: "Maintain a real-time decision log of every AI interaction during a project, making your collaboration pattern visible and measurable"
keywords:
  [
    "thinking skills",
    "Part 0",
    "collaboration log",
    "AI collaboration",
    "reasoning receipt",
    "decision tracking",
  ]
chapter: 6
lesson: 2
duration_minutes: 75

# HIDDEN SKILLS METADATA
skills:
  - name: "Collaboration Logging"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Apply"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can maintain a real-time Collaboration Log with at least 15 interactions, documenting every prompt, response, and accept/reject/modify decision with justification"

  - name: "Collaboration Pattern Analysis"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can analyze their own accept/reject/modify ratio and assess whether their collaboration pattern is passive, reactive, strategic, or expert"

learning_objectives:
  - objective: "Complete a complex project using AI throughout while maintaining a real-time Collaboration Log documenting every interaction and decision"
    proficiency_level: "A1"
    bloom_level: "Apply"
    assessment_method: "Collaboration Log contains at least 15 interactions with substantive justifications for each accept/reject/modify decision"

  - objective: "Analyze collaboration patterns to determine whether AI interactions reflect passive acceptance, random rejection, or strategic decision-making"
    proficiency_level: "A1"
    bloom_level: "Analyze"
    assessment_method: "AI Check rates collaboration maturity and identifies specific accepts that should have been rejects and vice versa"

cognitive_load:
  new_concepts: 3
  assessment: "3 concepts (collaboration log format, accept/reject/modify framework, collaboration pattern analysis) -- within Part 0 beginner range of 3-5"

differentiation:
  extension_for_advanced: "After completing the log, identify the 3 decisions you are least confident about. Re-examine each: would changing your decision improve the final strategy? This meta-analysis of your own decision-making is the highest-order skill"
  remedial_for_struggling: "Start with a simpler project (e.g., a country you know something about) to reduce research overhead. Focus on making each justification substantive rather than hitting the 15-interaction minimum"

teaching_guide:
  lesson_type: "exercise"
  session_group: 6
  session_title: "Working With AI, Not For AI"
  key_points:
    - "The Collaboration Log is a reusable format -- students will use this in Chapters 8, 9, and 10, and it becomes the default workflow for AI collaboration in Parts 2-10"
    - "AI collaboration is not about how MUCH you use AI -- it is about the quality of your decisions about what to accept, reject, and modify"
    - "The log makes collaboration patterns visible and measurable: a student who accepts 95% is probably too passive; one who rejects 80% is probably too overriding"
    - "The justification column is the most important column -- vague justifications ('seemed right') indicate passive collaboration even when the decision was correct"
  misconceptions:
    - "Students treat the log as paperwork rather than a diagnostic tool -- the log reveals patterns they cannot see without it"
    - "Students think accepting AI output is always wrong -- sometimes the best decision is to accept because the AI's output is genuinely good"
    - "Students game the log by artificially modifying or rejecting to appear more 'critical' -- the AI Check catches this by evaluating whether rejects were justified"
  discussion_prompts:
    - "What does your accept/reject/modify ratio tell you about your collaboration style? Is there a 'correct' ratio?"
    - "Can you think of a situation where accepting 100% of AI output would be the right strategy? What about rejecting 100%?"
  teaching_tips:
    - "Show a completed example log before students start -- the format should not be a barrier to the thinking"
    - "Assign countries students are genuinely unfamiliar with -- this ensures they actually need AI rather than relying on existing knowledge"
    - "After the exercise, compare accept/reject/modify ratios across the class. The distribution itself is a teaching moment about collaboration styles"
  assessment_quick_check:
    - "Ask students: What is the difference between a justified accept and a lazy accept? How can you tell from the log?"
    - "Ask students to point to the single most important modify decision in their log and explain why it mattered"
submission:
  type: "ai-check"
  accept: ["text"]
  providers: ["chatgpt", "claude", "gemini", "grok", "claude-code", "cowork"]
  default_provider: "chatgpt"
  xp_bonus: 50
---

# The Collaboration Log

## Exercise 2: The Collaboration Log

**Layers Used:** Layer 2 (Reasoning Receipt)

### What You Do

You receive a project: build a market entry strategy for an AI product in a country you are unfamiliar with. You must use AI throughout. Maintain a real-time Collaboration Log -- every prompt, every response, every decision (accept/reject/modify) with a one-sentence justification for each decision. Complete the strategy.

---

:::info Your Deliverable
The completed market entry strategy. The full Collaboration Log in a table format with columns: Prompt Sent | AI Response Summary | Decision (Accept/Reject/Modify) | Justification | What I Added or Changed. The log must contain at least 15 interactions. A summary (150 words) of your collaboration pattern -- what percentage did you accept, reject, modify?
:::

<ExercisePrompt id="collaboration-log" provider={["chatgpt", "claude", "gemini"]}>

I completed a project using AI throughout and maintained a Collaboration Log
documenting every interaction and decision. Please:

(1) Analyze my log: what percentage of AI suggestions did I accept/reject/modify?
(2) For each "accept" decision, was it justified or was I being passive? Flag any
accepts where I should have pushed back.
(3) For each "reject" decision, was it justified or was I being unnecessarily
overriding? Flag any rejects where the AI was actually right.
(4) Rate the quality of my justifications -- are they substantive reasoning or
vague hand-waving?
(5) Rate my overall collaboration maturity from Passive (accept everything) /
Reactive (reject randomly) / Strategic (deliberate, justified decisions) /
Expert (seamless integration).
(6) Give me 3 specific recommendations for improving my AI collaboration based
on my patterns.

My strategy:

<PromptField
  name="strategy"
  placeholder="Paste your market entry strategy here..."
  rows={6}
/>

My Collaboration Log:

<PromptField
  name="collaboration_log"
  placeholder="Paste your full Collaboration Log here..."
  rows={6}
/>

Finally, complete the Thinking Score Card for this exercise:
Independent Thinking (1-10), Critical Evaluation (1-10),
Reasoning Depth (1-10), Originality (1-10), Self-Awareness (1-10).
For each score, give a one-sentence justification.

</ExercisePrompt>

---

<details>
<summary>Deliverable Template (click to expand)</summary>

**COLLABORATION LOG TEMPLATE**

| Interaction # | Timestamp | Prompt Sent (exact text) | AI Response Summary (2-3 sentences) | Decision: Accept / Reject / Modify | Justification (1 sentence) | What I Added or Changed |
| :-----------: | --------- | ------------------------ | ----------------------------------- | ---------------------------------- | -------------------------- | ----------------------- |
|       1       |           |                          |                                     | Accept / Reject / Modify           |                            |                         |
|       2       |           |                          |                                     | Accept / Reject / Modify           |                            |                         |
|       3       |           |                          |                                     | Accept / Reject / Modify           |                            |                         |
|      ...      |           |                          |                                     |                                    |                            |                         |
|      15       |           |                          |                                     | Accept / Reject / Modify           |                            |                         |

**SUMMARY**

- Total interactions: \_\_\_
- Accepted: \_\_\_%
- Rejected: \_\_\_%
- Modified: \_\_\_%
- My collaboration pattern: \_\_\_

</details>

---

### What This Teaches You

You learn that AI collaboration is not about how much you use AI -- it is about the quality of your decisions about what to accept, reject, and modify. The log makes your collaboration pattern visible and measurable. AI feedback reveals whether your decisions were genuinely strategic or just habitual.
