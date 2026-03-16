---
sidebar_position: 1
aicheck: true
title: "The Learning Plan"
description: "Design a learning strategy for an unfamiliar domain before learning anything, predict your own learning process, then use AI to evaluate whether your plan is efficient and realistic"
keywords:
  [
    "thinking skills",
    "Part 0",
    "meta-learning",
    "learning plan",
    "learning strategy",
    "prediction lock",
    "self-assessment",
  ]
chapter: 10
lesson: 1
duration_minutes: 60

# HIDDEN SKILLS METADATA
skills:
  - name: "Learning Strategy Design"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Create"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can design a structured learning plan for an unfamiliar domain, including phased resource allocation, explicit skip decisions, and a testable definition of competence"

  - name: "Self-Assessment of Knowledge Level"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Evaluate"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can honestly assess their current knowledge level in an unfamiliar domain and predict where their biggest learning challenges will be"

learning_objectives:
  - objective: "Design a phased learning plan for an unfamiliar domain with resource prioritization, time allocation, and explicit decisions about what to skip"
    proficiency_level: "A1"
    bloom_level: "Create"
    assessment_method: "AI Check evaluates whether the learning strategy is efficient, whether chosen resources are appropriate for a beginner, and whether time allocation is realistic"

  - objective: "Define a testable standard for 'enough' competence in the new domain, calibrated to the available time"
    proficiency_level: "A1"
    bloom_level: "Evaluate"
    assessment_method: "AI Check rates whether the definition of enough is appropriately scoped — neither too ambitious nor too shallow for 72 hours"

  - objective: "Predict the biggest challenges in learning an unfamiliar domain and plan for how to handle them"
    proficiency_level: "A1"
    bloom_level: "Analyze"
    assessment_method: "Post-sprint comparison of predicted vs. actual challenges reveals prediction accuracy"

cognitive_load:
  new_concepts: 4
  assessment: "4 concepts (learning strategy design, resource prioritization, explicit skip decisions, testable competence definition) — within Part 0 beginner range of 3-5"

differentiation:
  extension_for_advanced: "Create two competing learning plans with different strategies (breadth-first vs. depth-first) and predict which will produce better results. After the 72-hour sprint, evaluate which strategy would have been superior"
  remedial_for_struggling: "Focus on just three elements: what will you learn first, what resources will you use, and how will you know when you have learned enough. Skip the phased time allocation and come back to it after Exercise 2"

teaching_guide:
  lesson_type: "exercise"
  session_group: 10
  session_title: "The Learning Plan"
  key_points:
    - "The Learning Plan IS a Prediction Lock — it is a prediction about your own learning process, committed before you begin"
    - "The 'what to skip' decision is as important as the 'what to learn' decision — beginners try to learn everything and end up mastering nothing"
    - "The definition of 'enough' forces students to think about what competence actually means in a time-constrained context"
    - "AI feedback on the plan reveals common beginner mistakes — jumping to advanced material, unrealistic time allocation, wrong resource choices"
  misconceptions:
    - "Students think the plan should be perfect before starting — the plan is a prediction to be tested, not a rigid schedule"
    - "Students allocate equal time to all phases instead of front-loading foundations"
    - "Students define 'enough' as 'know everything' instead of a realistic competence threshold for 72 hours"
  discussion_prompts:
    - "Why does this exercise make you plan BEFORE learning anything? What would be different if you planned after 10 hours of studying?"
    - "What is the difference between 'I will skip advanced topics' and 'I will skip advanced topics BECAUSE they require prerequisites I will not have time to build'?"
  teaching_tips:
    - "Assign domains that are genuinely unfamiliar — pharmacology for developers, supply chain for accountants, constitutional law for designers"
    - "Emphasize that this plan carries forward to Exercise 2 (the 72-hour sprint) — the plan will be tested against reality"
    - "The Deliverable Template is detailed — use the collapsible format so it does not overwhelm the page"
  assessment_quick_check:
    - "Ask students: What are you explicitly choosing NOT to learn? Why?"
    - "Ask students: How will you know when you have learned 'enough'? Give me a specific, testable answer."
---

# Learning How to Learn

> _The half-life of any specific skill is shrinking. The student who can learn the next thing — quickly, independently, and critically — will outlast every student who only learned this thing._

:::note Building On Previous Chapters
This capstone chapter calls on everything: you will use **question formulation** ([Chapter 1](../01-asking-better-questions/01-prediction-lock.md)) to design your learning plan, **error detection** ([Chapter 2](../02-detecting-broken-reasoning/01-error-prediction.md)) to evaluate AI's teaching, **systems thinking** ([Chapter 3](../03-thinking-in-systems/01-cascade-mapping.md)) to understand how concepts connect, **first principles** ([Chapter 4](../04-reasoning-from-first-principles/01-blank-page-derivation.md)) to build understanding from foundations, and **AI collaboration** ([Chapter 6](../06-working-with-ai-not-for-ai/01-three-path-comparison.md)) to learn efficiently without becoming dependent.
:::

This is the capstone chapter because it is the skill underneath all the others. Every tool will change. Every framework will evolve. Every best practice will eventually become obsolete. The student who learns how to learn is the only one who stays relevant indefinitely. This chapter does not teach a subject. It teaches the process of mastering subjects you have never encountered before.

## Exercise 1: The Learning Plan

**Layers Used:** Layer 1 (Predict Before You Prompt)

:::note Building On Previous Exercises
Your learning plan is a **Prediction Lock** — a prediction about your own learning process, committed before you begin. You will use the same format from [Chapter 1, Exercise 1](../01-asking-better-questions/01-prediction-lock.md).
:::

### What You Do

You are assigned a domain you have never studied: pharmacology for a developer, supply chain logistics for an accountant, constitutional law for a designer. Before learning anything, write a Learning Plan: how will you approach this? What will you learn first? What resources will you prioritize? How will you know when you know enough? What will you explicitly skip?

---

:::info Your Deliverable
A Learning Plan (300-400 words) containing: the domain assigned, your current knowledge level (be honest), your learning strategy (what first, what next, what skip), the resources you will use (and why these over others), your definition of "enough" (what competence looks like for this exercise), a time allocation plan for your 72 hours, and your predicted biggest challenge.
:::

<AICheck id="learning-plan" xp={50}>

I am about to learn a domain I have never studied. Before starting, I
wrote a Learning Plan. Please:

(1) Rate my learning strategy -- is it efficient? Am I starting with the
right foundations or jumping to advanced material?
(2) Are my chosen resources appropriate for a complete beginner in this
domain? Suggest better resources if mine are suboptimal.
(3) Is my definition of "enough" appropriate -- am I aiming too high
(will run out of time) or too low (will not reach competence)?
(4) Is my time allocation realistic?
(5) What is the most common mistake people make when learning this
domain for the first time?
(6) Give me a recommended learning path: the 5 most important concepts
I should master in order, with time estimates.

My Learning Plan:

<AICheckField
  name="learning_plan"
  placeholder="Paste your Learning Plan here..."
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

**LEARNING PLAN TEMPLATE**

- **Domain:** \_\_\_
- **Current knowledge:** None / Vague / Some / \_\_\_
- **STRATEGY:**
  - Phase 1 (hours 0-12): Focus: \_\_\_ | Resources: \_\_\_
  - Phase 2 (hours 12-36): \_\_\_
  - Phase 3 (hours 36-60): \_\_\_
  - Phase 4 (hours 60-72, synthesis): \_\_\_
- **WHAT I WILL SKIP (and why):** \_\_\_
- **DEFINITION OF ENOUGH:** I am competent when I can: \_\_\_
- **PREDICTED CHALLENGE:** \_\_\_
- **AI USAGE PLAN:**
  - Will use AI for: \_\_\_
  - Will avoid AI for: \_\_\_

</details>

---

### What This Teaches You

You learn that learning itself requires a strategy. Most people dive in randomly. By planning first and checking that plan with AI, you develop the meta-skill of designing your own learning process — which will be essential every time you encounter new technology, new frameworks, or new domains in the rest of this book.

## Flashcards Study Aid

<Flashcards />
