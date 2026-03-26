---
sidebar_position: 3
aicheck: true
title: "Assumption Autopsy"
description: "Systematically uncover hidden assumptions in your own solution by comparing your assumption list against AI-identified assumptions, creating a merged map that reveals blind spots in both human and AI thinking"
keywords:
  [
    "thinking skills",
    "Part 0",
    "first principles",
    "assumption autopsy",
    "hidden assumptions",
    "reasoning receipt",
  ]
chapter: 4
lesson: 3
duration_minutes: 60

# HIDDEN SKILLS METADATA
skills:
  - name: "Assumption Discovery"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can systematically expand their assumption list beyond initial awareness, then compare against AI-identified assumptions to create a categorized merged map"

  - name: "Human-AI Complementary Awareness"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Evaluate"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can categorize assumptions by source (self-only, AI-only, both, neither) and explain the pattern of complementary blind spots between human and AI assumption detection"

learning_objectives:
  - objective: "Identify hidden assumptions in your own solution through systematic self-examination before AI assistance"
    proficiency_level: "A1"
    bloom_level: "Analyze"
    assessment_method: "AI Check evaluates what percentage of total assumptions the student found independently and identifies still-hidden assumptions"

  - objective: "Create a merged assumption map categorizing each assumption by discovery source to reveal complementary human-AI blind spots"
    proficiency_level: "A1"
    bloom_level: "Evaluate"
    assessment_method: "AI Check rates risk level of each assumption and evaluates the student's self-awareness about their assumption detection patterns"

cognitive_load:
  new_concepts: 3
  assessment: "3 concepts (hidden assumptions, assumption categorization by source, complementary blind spots) : within Part 0 beginner range of 3-5"

differentiation:
  extension_for_advanced: "For each high-risk assumption, design a test that could verify or invalidate it before implementation. Which assumptions are testable and which require a leap of faith?"
  remedial_for_struggling: "Start with the most obvious assumptions (the ones you listed in Exercise 2). For each, ask: 'What else must be true for this assumption to hold?' The answers are your hidden assumptions"

teaching_guide:
  lesson_type: "exercise"
  session_group: 4
  session_title: "Assumption Autopsy"
  key_points:
    - "Every solution is built on assumptions the solver did not know they were making: the autopsy makes these visible"
    - "The four-category map (self-only, AI-only, both, neither) reveals a consistent pattern: humans catch contextual assumptions (cultural, personal) while AI catches structural assumptions (logical, systemic)"
    - "Category (d) : found by neither but identified during merge: is the most valuable category, emerging only from the synthesis process"
    - "This technique (Assumption Autopsy) is referenced in Chapters 8 and 9: students will build on it throughout the book"
  misconceptions:
    - "Students think listing assumptions means questioning them: listing is step one; evaluating risk level (reasonable, risky, needs testing) is the actual analysis"
    - "Students are embarrassed by the assumptions AI finds that they missed: frame this as complementary intelligence, not personal failure"
    - "Students assume all hidden assumptions are equally dangerous: risk assessment (what happens if this assumption is wrong?) is critical"
  discussion_prompts:
    - "What types of assumptions did you consistently catch that AI missed? What does that pattern tell you about the structural differences in how humans and AI reason?"
    - "Which category (d) assumptions: found by neither until the merge process: were most surprising? Why did neither human nor AI thinking surface them independently?"
  teaching_tips:
    - "Have students use both Claude and ChatGPT for assumption identification: different AI tools surface different assumptions"
    - "The merge process itself generates new insights (category d) : encourage students to spend real time on the merge, not just concatenate lists"
    - "Connect this back to Chapter 3's cascade mapping: assumptions are the invisible inputs to every causal chain in a system"
  assessment_quick_check:
    - "Ask students: Name one assumption from each category (a through d). Which category was hardest to find examples for?"
    - "Ask students: If your highest-risk assumption turns out to be wrong, what happens to your solution?"
---

# Assumption Autopsy

## Why This Matters: James and the Invisible Foundations

:::note Building On Previous Chapters
You will use the **Error Taxonomy** from [Chapter 2, Exercise 1](../02-detecting-broken-reasoning/01-error-prediction.md) and the **Cascade Map** technique from [Chapter 3, Exercise 1](../03-thinking-in-systems/01-cascade-mapping.md). Assumptions are hidden errors; finding them uses the same detection muscle.
:::

James had his solution from Exercise 2 open on the screen. Emma sat across from him.

"The constraint identification went well," he said. "I found the base constraints, built my derivation chain, compared against AI. I feel solid on this one. What's the point of going back and picking apart the assumptions? If the constraints are right, the solution follows."

"How many assumptions did you list in Exercise 2?"

James scrolled down. "Four."

"How many are you actually making?"

"Four. I listed them."

Emma almost smiled. "Pull up your solution. Read me the first sentence of your design."

James read: "'Distribute tutoring access based on student need, measured by current academic performance relative to grade-level benchmarks.'"

"How are you measuring academic performance?"

"Standardized test scores. That's the obvious metric."

"Is it? Or is that an assumption? What about students who test poorly but learn well in tutoring environments? What about students whose schools don't administer the same tests?"

James stared at the sentence. "Okay, so 'standardized test scores are a valid proxy for need' is an assumption I didn't list."

"That's one. Your solution has dozens of these. Every sentence you wrote rests on invisible choices you made without noticing. The autopsy makes them visible."

"It's like due diligence in procurement," James said. "We'd evaluate a vendor's proposal and think we'd covered everything. Then legal would come back with fifteen questions about terms we'd treated as given. 'Payment net-30, standard.' Except the vendor's definition of net-30 started from delivery, and ours started from invoice. Same words, completely different assumptions."

"Same principle. Your solution looks clean until you examine what's holding it up. Some of those invisible supports are solid. Some are made of paper."

---

## Exercise 3: Assumption Autopsy

**Layers Used:** Layer 2 (Reasoning Receipt), Layer 4 (Contradiction Challenge)

James is about to discover that his "clean" solution has twenty-three assumptions he never noticed. Your solution has hidden assumptions too.

### Perform the Autopsy

Take your solution from Exercise 2 and systematically expand your assumption list. First, try to find every hidden assumption yourself. Then feed your solution to two different AI tools and ask each: "What assumptions am I making that I have not stated?" Compare the AI-identified assumptions against your own list. Create a merged assumption map.

:::info Your Deliverable
Your expanded assumption list (written before AI). The AI-identified assumptions from both tools. A merged assumption map categorizing each assumption as: (a) found by you only, (b) found by AI only, (c) found by both, (d) found by neither but identified during the merge process. For each assumption, a brief note on whether it is reasonable, risky, or needs to be tested.
:::

### Check Your Thinking

<AICheck id="assumption-autopsy" xp={50}>

I am doing an assumption autopsy on my own solution. I have listed my
assumptions, and I also asked two different AI tools to identify
assumptions I missed. Below is my merged assumption map.

Please:
(1) Are there STILL more hidden assumptions that none of us -- neither
I nor the other AI tools -- identified?
(2) For each assumption in my map, rate the risk level (low / medium /
high) -- what happens to my solution if this assumption is wrong?
(3) Which of my assumptions are actually testable before implementing
the solution?
(4) Rate my self-awareness -- what percentage of the total assumptions
did I find on my own before AI help?
(5) Give me a strategy for improving my ability to identify hidden
assumptions in future work.

My solution:

<AICheckField
  name="solution"
  placeholder="Paste your solution here..."
  rows={6}
/>

My assumption map:

<AICheckField
  name="assumption_map"
  placeholder="Paste your full merged assumption map with categories here..."
  rows={6}
/>

Finally, complete the Thinking Score Card for this exercise:
Independent Thinking (1-10), Critical Evaluation (1-10),
Reasoning Depth (1-10), Originality (1-10), Self-Awareness (1-10).
For each score, give a one-sentence justification.

</AICheck>

---

## What Happened With James

James counted the rows in his merged assumption map. Twenty-three assumptions total. He'd found seven on his own. Claude found nine he'd missed. ChatGPT found four more. And three emerged during the merge itself, assumptions that neither he nor either AI had flagged independently but became obvious when he laid the lists side by side.

"I thought I had four assumptions," he said. "I had twenty-three."

"Which category surprised you most?"

"Category D. The ones nobody found until the merge. One of them was that students would actually use the tutoring access if given it. I just assumed demand was automatic. Nobody questioned it. Not me, not Claude, not ChatGPT. But when I was comparing the lists, I realized my entire allocation design assumed full utilization. If only 40% of students actually log in, the whole model breaks differently."

Emma nodded. "The merge isn't just a list comparison. It's a collision. Two different ways of seeing the problem forced together. The friction produces insights neither source had alone."

James looked at his map again. The assumptions he'd caught himself were all contextual: things about school district politics, parent engagement, real-world scheduling conflicts. The ones AI caught were structural: mathematical relationships, game-theory dynamics, measurement validity. Different blind spots. Complementary vision.

"Hang on. If that's true, then... the best assumption list isn't mine and it isn't AI's. It's the merge."

"Now you understand why this exercise exists."

## The Lesson Learned

You and AI have complementary blind spots. You catch contextual assumptions (cultural, personal, political) that AI misses. AI catches structural assumptions (mathematical, systemic, logical) that you take for granted. Neither set of eyes is complete. The merge process itself generates a third category of insight that neither source produces alone.

## Flashcards Study Aid

<Flashcards />
