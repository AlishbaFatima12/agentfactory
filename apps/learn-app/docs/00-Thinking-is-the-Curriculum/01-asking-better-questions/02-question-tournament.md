---
sidebar_position: 2
title: "The Question Tournament"
description: "Compete with a partner to generate and rank diagnostic questions, then use AI to reveal which questions actually produce useful answers"
keywords:
  [
    "thinking skills",
    "Part 0",
    "question formulation",
    "question quality",
    "diagnostic questions",
    "peer evaluation",
  ]
chapter: 1
lesson: 2
duration_minutes: 60

# HIDDEN SKILLS METADATA
skills:
  - name: "Question Quality Evaluation"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Evaluate"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can rank diagnostic questions by quality with one-sentence justifications, distinguishing questions that produce actionable answers from those that produce generic filler"

  - name: "Comparative Question Analysis"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can compare two sets of questions against the same scenario and identify which set is more diagnostic overall, with specific evidence from AI responses"

learning_objectives:
  - objective: "Evaluate and rank another person's diagnostic questions with justified reasoning about question quality"
    proficiency_level: "A1"
    bloom_level: "Evaluate"
    assessment_method: "AI Check evaluates ranking justifications and identifies strongest/weakest questions across both sets"

  - objective: "Distinguish questions that produce actionable AI responses from questions that produce generic filler"
    proficiency_level: "A1"
    bloom_level: "Analyze"
    assessment_method: "Comparison table marks each question's AI response as useful/actionable or generic/filler with explanation"

cognitive_load:
  new_concepts: 3
  assessment: "3 concepts (question ranking by diagnostic power, actionable vs. generic responses, comparative evaluation of question sets) — within Part 0 beginner range of 3-5"

differentiation:
  extension_for_advanced: "After completing the exercise, identify the 3 question patterns that consistently produced the best AI responses across both sets. Write a one-paragraph 'question design principle' based on your findings."
  remedial_for_struggling: "Start with just 8 questions instead of 15. Focus on ranking your partner's questions before tackling the full comparison table."

teaching_guide:
  lesson_type: "exercise"
  session_group: 1
  session_title: "The Question Tournament"
  key_points:
    - "Question quality is a skill you can evaluate and improve, not an innate talent — the tournament format makes this viscerally clear"
    - "The gap between 'seems like a good question' and 'actually produces useful AI output' is the core learning — many well-phrased questions produce generic responses"
    - "Ranking someone else's questions develops evaluation skill faster than self-assessment because you see patterns you cannot see in your own work"
  misconceptions:
    - "Students think more questions = better analysis — the tournament reveals that 3 great questions outperform 15 mediocre ones"
    - "Students rank questions by topic importance rather than diagnostic power — a question about an important topic can still be poorly formed"
  discussion_prompts:
    - "Which was harder: generating your own 15 questions or ranking your partner's 15? Why?"
    - "Did any questions that seemed strong on paper produce surprisingly generic AI responses? What does this tell you about question design?"
  teaching_tips:
    - "Pair students from different backgrounds when possible — a business student and a technical student ask fundamentally different questions about the same scenario"
    - "Have pairs share their most surprising finding with the class: which question unexpectedly produced the best or worst AI response?"
  assessment_quick_check:
    - "Ask students to explain the difference between a question that is 'important' and a question that is 'diagnostic'"
    - "Ask students to identify one question from their partner's set that they wish they had asked themselves, and explain why"
submission:
  type: "ai-check"
  accept: ["text"]
  providers: ["chatgpt", "claude", "gemini", "grok", "claude-code", "cowork"]
  default_provider: "chatgpt"
  xp_bonus: 50
---

# The Question Tournament

**Layers Used:** Layer 3 (Live Defence), Layer 5 (Divergence Test)

### What You Do

Working in pairs, each student generates 15 questions about the same scenario without AI. Swap question lists with your partner. Rank their 15 questions from most to least diagnostic and write a one-sentence justification for each ranking. Then take the top 5 from each list (10 total), feed them to both Claude and ChatGPT, and compare: which questions actually produced useful, divergent, actionable answers, and which produced generic filler?

:::tip Solo Learner Alternative
Generate your 15 questions, then prompt AI: "You are my study partner. Generate 15 diagnostic questions for this scenario that are different from mine. Do not see my questions first." Once AI generates its 15, rank AI's questions and have AI rank yours. Then proceed with the comparison table. The dynamic is different — AI is more consistent than a human partner — but the skill of evaluating someone else's questions still develops.
:::

---

:::info Your Deliverable
Your 15 original questions (written without AI). Your partner's 15 questions with your ranking and justification for each. A comparison table showing the top 10 questions, the AI responses from both tools, and a column marking each as "useful/actionable" or "generic/filler" with explanation.
:::

```text title="AI Check Prompt -- Copy and paste into claude.ai or chatgpt.com"
I am learning to evaluate question quality. Below are two sets of questions
about the same business scenario -- one set written by me and one by my
partner. I have also included the AI responses each question generated.
Please:

(1) Evaluate which set of questions was overall more diagnostic and
    explain why.
(2) Identify the 3 strongest questions across both sets and explain what
    makes them effective.
(3) Identify the 3 weakest questions and explain what makes them
    unproductive.
(4) Were there any questions that seemed good on paper but produced
    generic AI responses? Explain why this happened.
(5) Give me specific feedback on how to improve my weakest questions.

Scenario: [paste scenario].
My questions: [paste].
Partner's questions: [paste].
AI responses: [paste comparison table].

Finally, complete the Thinking Score Card for this exercise:
Independent Thinking (1-10), Critical Evaluation (1-10),
Reasoning Depth (1-10), Originality (1-10), Self-Awareness (1-10).
For each score, give a one-sentence justification.
```

---

### What This Teaches You

You learn that question quality is a skill you can evaluate and improve, not an innate talent. By seeing your partner's questions and having AI compare both sets, you discover questioning patterns you would never notice in your own work. The tournament format makes the difference between a good question and a great question viscerally clear.
