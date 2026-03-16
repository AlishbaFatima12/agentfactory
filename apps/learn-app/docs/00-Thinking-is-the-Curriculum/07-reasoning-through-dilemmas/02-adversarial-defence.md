---
sidebar_position: 2
title: "The Adversarial Defence"
description: "Survive three rounds of AI counter-arguments against your ethical position, strengthening your reasoning or honestly revising your stance under systematic attack"
keywords:
  [
    "thinking skills",
    "Part 0",
    "adversarial defence",
    "ethical reasoning",
    "contradiction challenge",
    "intellectual stamina",
  ]
chapter: 7
lesson: 2
duration_minutes: 75

# HIDDEN SKILLS METADATA
skills:
  - name: "Adversarial Defence"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Evaluate"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can defend an ethical position through three rounds of systematic AI attack, documenting whether their position held, shifted, or reversed with explicit reasoning at each stage"

  - name: "Position Tracking Under Pressure"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can maintain a Position Tracker documenting the evolution of their stance across multiple adversarial rounds, distinguishing between genuine shifts in reasoning and defensive reactions"

learning_objectives:
  - objective: "Defend an ethical position through three rounds of adversarial AI counter-arguments, writing each defence without AI assistance"
    proficiency_level: "A1"
    bloom_level: "Evaluate"
    assessment_method: "AI Check rates Argument Strength, Intellectual Courage, Adaptability, and Honesty each 1-10 after the three-round exchange"

  - objective: "Track position evolution honestly, documenting whether conviction strengthened, shifted, or reversed and the exact reasoning behind each change"
    proficiency_level: "A1"
    bloom_level: "Analyze"
    assessment_method: "Position Tracker shows clear before/after states with reasoning for each transition; AI Check evaluates honesty of self-reporting"

cognitive_load:
  new_concepts: 3
  assessment: "3 concepts (multi-round adversarial format, position tracking under pressure, distinguishing conviction from habit) -- within Part 0 beginner range of 3-5"

differentiation:
  extension_for_advanced: "After completing three rounds, write a meta-analysis of which types of counter-arguments were hardest to answer and what that reveals about the structure of your reasoning"
  remedial_for_struggling: "Focus on just two rounds instead of three. In each defence, address only the strongest counter-argument rather than all three"

teaching_guide:
  lesson_type: "exercise"
  session_group: 7
  session_title: "Reasoning Through Dilemmas"
  key_points:
    - "The three-round structure builds intellectual stamina -- each round forces the student to go deeper, not just repeat louder"
    - "Students write defences WITHOUT AI -- this is critical. AI attacks, but the human must respond from their own reasoning"
    - "Position change during the exercise is not failure -- it is evidence of intellectual honesty. Students who never change may be stubborn, not strong"
    - "This exercise introduces the Adversarial Defence pattern referenced in Chapter 9"
  misconceptions:
    - "Students think 'winning' means their position never changes -- genuine engagement sometimes means honest revision"
    - "Students try to use AI to help write their defence responses -- the defences must be written without AI to test genuine understanding"
    - "Students think the AI attacks are unfair or too aggressive -- the aggressiveness is deliberate and mirrors real-world scrutiny of ethical decisions"
  discussion_prompts:
    - "Which is more impressive: a student whose position survived all three rounds unchanged, or a student who revised their position in round 2 based on a counter-argument they had not considered?"
    - "Why does defending your position in writing (without AI) test something different from defending it with AI assistance?"
  teaching_tips:
    - "Remind students that their defence responses must be written without AI -- this is the point of the exercise. AI attacks; humans defend."
    - "If a student's position changes, celebrate it -- this shows the exercise is working. Mark it prominently in the Position Tracker."
    - "Have students share their hardest-to-answer counter-argument with the class -- patterns will emerge across different positions"
  assessment_quick_check:
    - "Ask students: Did your position change during the three rounds? If yes, what specifically changed your mind? If no, which counter-argument came closest?"
    - "Ask students to identify the difference between a defence that addresses the counter-argument and a defence that merely restates the original position"
submission:
  type: "ai-check"
  accept: ["text"]
  providers: ["chatgpt", "claude", "gemini", "grok", "claude-code", "cowork"]
  default_provider: "chatgpt"
  xp_bonus: 50
---

# The Adversarial Defence

## Exercise 2: The Adversarial Defence (Three Rounds)

**Layers Used:** Layer 4 (Contradiction Challenge)

:::note Building On Previous Chapters
This exercise uses the same structure as [Rebuild Under New Constraints](../04-reasoning-from-first-principles/04-rebuild-under-new-constraints.md) from Chapter 4. Your position is challenged, and you must adapt or defend.
:::

---

### What You Do

Feed your position from Exercise 1 into Claude with a specific adversarial prompt. Receive AI counter-arguments. Respond in writing -- without AI. Feed your defence back to AI for a second round of attacks. Respond again. Three rounds total. If your position changes during the exercise, document the exact moment and reason.

---

:::info Your Deliverable
The complete three-round exchange: Round 1 AI attack, then your defence (written without AI), then Round 2 AI attack, then your defence, then Round 3 AI attack, then your defence. A Position Tracker showing whether your position held, shifted, or reversed, with the exact reasoning at each round. A reflection (150 words) on which counter-argument was hardest to answer and why.
:::

<ExercisePrompt id="adversarial-defence" provider={["chatgpt", "claude", "gemini"]}>

ROUND 1: I hold the following position on an ethical dilemma. Attack this
position as aggressively and specifically as possible. Do not be balanced.
Find the weakest points and exploit them. Present exactly 3 counter-arguments,
each targeting a different vulnerability in my reasoning.

Dilemma:

<PromptField
  name="dilemma"
  placeholder="Paste your chosen dilemma here..."
  rows={2}
/>

My position and arguments:

<PromptField
  name="position_and_arguments"
  placeholder="Paste your position and arguments here..."
  rows={6}
/>

---

ROUND 2 (after your written defence):
Here is my defence against your counter-arguments. Attack my defence -- find
the weakest points in my responses and press harder.

My defence:

<PromptField
  name="defence_summary"
  placeholder="Paste your defence summary here..."
  rows={6}
/>

---

ROUND 3 (after your second defence):
Final round. Here is my updated defence. Give me your strongest possible
final challenge and then rate my overall performance:
Argument Strength (1-10), Intellectual Courage (1-10),
Adaptability (1-10), Honesty (1-10).

Finally, complete the Thinking Score Card for this exercise:
Independent Thinking (1-10), Critical Evaluation (1-10),
Reasoning Depth (1-10), Originality (1-10), Self-Awareness (1-10).
For each score, give a one-sentence justification.

</ExercisePrompt>

<details>
<summary>Deliverable Template (click to expand)</summary>

**ADVERSARIAL DEFENCE TEMPLATE**

- **Dilemma:** [paste]
- **My Original Position:** [paste from Exercise 1]

**ROUND 1**

- AI Counter-Arguments: [paste AI response]
- My Defence (written without AI):
  - Response to Counter-Argument 1: \_\_\_
  - Response to Counter-Argument 2: \_\_\_
  - Response to Counter-Argument 3: \_\_\_

**ROUND 2**

- AI Counter-Arguments: [paste AI response]
- My Defence (written without AI):
  - Response to Counter-Argument 1: \_\_\_
  - Response to Counter-Argument 2: \_\_\_
  - Response to Counter-Argument 3: \_\_\_

**ROUND 3**

- AI Final Challenge: [paste AI response]
- My Final Defence (written without AI): \_\_\_

**POSITION TRACKER**

| Round         | Position Status           | Reasoning |
| ------------- | ------------------------- | --------- |
| Start         | [Original]                |           |
| After Round 1 | Held / Shifted / Reversed | \_\_\_    |
| After Round 2 | Held / Shifted / Reversed | \_\_\_    |
| After Round 3 | Held / Shifted / Reversed | \_\_\_    |

**REFLECTION (150 words):** Which counter-argument was hardest to answer and why? \_\_\_

</details>

### What This Teaches You

You learn that holding an ethical position under systematic attack requires deep understanding, not just opinion. Each round forces you to strengthen your reasoning or honestly revise your position. The three-round format builds intellectual stamina and reveals whether your conviction is grounded in thought or merely in habit.
