---
sidebar_position: 3
aicheck: true
title: "The Override Test"
description: "Find the deliberate subtle error in an AI-generated analysis without being told what it is, building the override instinct that separates strategic AI users from passive ones"
keywords:
  [
    "thinking skills",
    "Part 0",
    "AI override",
    "error detection",
    "contradiction challenge",
    "prompt redesign",
  ]
chapter: 6
lesson: 3
duration_minutes: 60

# HIDDEN SKILLS METADATA
skills:
  - name: "AI Override Judgment"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Evaluate"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can identify a subtle error in AI-generated analysis, explain why the AI made it, correct the analysis, and redesign the prompt to prevent the error in future"

  - name: "Systematic Error Detection in AI Output"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can describe a systematic process for detecting errors in AI output rather than relying on luck, applying the Error Taxonomy from Chapter 2 to AI business analysis"

learning_objectives:
  - objective: "Identify a subtle error in AI-generated analysis without being told what the error is, and explain the error type, why the AI made it, and its impact on the analysis"
    proficiency_level: "A1"
    bloom_level: "Evaluate"
    assessment_method: "AI Check confirms whether the error was correctly identified and evaluates the explanation of why the AI made it"

  - objective: "Redesign a prompt to prevent a specific type of AI error, demonstrating understanding of how prompt design influences AI output quality"
    proficiency_level: "A1"
    bloom_level: "Evaluate"
    assessment_method: "AI Check mentally runs the redesigned prompt and evaluates whether it would actually prevent the error type"

cognitive_load:
  new_concepts: 4
  assessment: "4 concepts (error identification in AI output, root cause analysis of AI errors, corrected analysis, prompt redesign for error prevention) -- within Part 0 beginner range of 3-5"

differentiation:
  extension_for_advanced: "After completing the exercise, generate a new AI analysis on a different topic and deliberately look for the same error type. Did the AI make it again? What does this tell you about systematic AI weaknesses?"
  remedial_for_struggling: "If you cannot find the error on your own, ask AI to list 5 things that might be wrong with the analysis. Then evaluate each suggestion -- which ones are real errors and which are the AI being overly cautious?"

teaching_guide:
  lesson_type: "exercise"
  session_group: 6
  session_title: "Working With AI, Not For AI"
  key_points:
    - "The override instinct is the willingness and ability to say 'the AI is wrong here' and back it up -- most students either trust AI too much or override randomly"
    - "This exercise trains the WHEN and WHY of overriding, not just the ability to spot errors -- the prompt redesign step is what turns error detection into a skill"
    - "Chapter 2's Error Taxonomy is the student's override trigger -- they are applying error detection to AI business analysis rather than factual claims"
    - "The error is deliberately subtle -- not a factual mistake but a logical flaw, a market assumption that does not hold, or an outdated data point"
  misconceptions:
    - "Students think overriding AI means rejecting everything -- the exercise teaches targeted, justified overriding of specific errors"
    - "Students expect the error to be obvious -- the subtlety is intentional. Real AI errors in business contexts are rarely obvious"
    - "Students skip the prompt redesign step -- this is the most valuable part because it teaches prevention, not just detection"
  discussion_prompts:
    - "What types of errors are AI tools most likely to make in business analysis? Are these the same types of errors humans make?"
    - "Why is redesigning the prompt (prevention) more valuable than just correcting the output (cure)?"
  teaching_tips:
    - "Design the AI prompt to produce an analysis with a specific subtle error -- good options: outdated market data treated as current, correlation presented as causation, ignoring a key competitor, or a logical flaw in the competitive positioning"
    - "Do not tell students what type of error to look for. The detection process IS the exercise"
    - "After the exercise, reveal the intended error. Some students may have found a different real error -- this is valid and should be celebrated"
  assessment_quick_check:
    - "Ask students: How would you describe your error-detection process? Was it systematic or did you get lucky?"
    - "Ask students: What is the difference between overriding AI because you are right and overriding AI because you are uncomfortable?"
---

# The Override Test

## Why This Matters: James and the Invisible Defect

James read the AI-generated competitive analysis on his screen and shrugged. "Looks fine to me."

"Read it again."

"I did read it. The market sizing is solid. The competitor list is comprehensive. The positioning recommendation makes sense." He scrolled through it. "What am I supposed to be looking for? You haven't told me what's wrong with it."

"Correct. I haven't."

James sat back. "Okay, wait. So you're telling me something is wrong but not what it is, and I'm supposed to find it? That's like when my old company hired a quality auditor who wouldn't tell us what he was auditing. Everyone just got paranoid and started double-checking everything."

"Did the audit find problems?"

"Three. Two of them we'd been walking past for months."

"Walking past them because they looked normal. That's the same problem here. The analysis looks right. It reads well. The numbers feel plausible. But something in it doesn't hold up, and the fact that it looks convincing is exactly why it's dangerous."

James looked at the screen again with different eyes. "So I can't just read it. I have to interrogate it."

"What would you check first?"

He thought about it. "Hang on. The market growth projection. It cites 2023 data but the analysis is for a market entry next year. If the growth rate shifted in the last eighteen months..." He trailed off, scrolling back to the source.

"Keep going."

James pulled up a second tab and started cross-referencing. "This is different from the collaboration log. There, I was deciding whether to accept or reject. Here, I'm looking for something I was never supposed to find unless I went looking."

"What's the difference between those two skills?"

"The log is about decisions I know I'm making. This is about catching problems I don't know exist." He looked at the analysis again. "In my old company, we had a quality inspector who said the hardest defects to find are the ones that look like features. This analysis reads like a feature. Every paragraph reinforces the last one. Nothing sticks out. That's why it's hard."

"That's exactly why it matters. The obvious errors catch themselves. The subtle ones survive because nobody questions them."

---

## Exercise 3: The Override Challenge

**Layers Used:** Layer 4 (Contradiction Challenge)

:::note Building On Previous Chapters
Chapter 2's error detection applied to AI's business analysis. Your Error Taxonomy from [Chapter 2](../02-detecting-broken-reasoning/01-error-prediction.md) is now your override trigger. The same diagnostic rigor applies, but the errors are in AI output rather than in a scenario.
:::

James is staring at an analysis that looks perfect. So are you.

### Find the Error Nobody Told You About

Use AI to produce a competitive analysis for a product. The instructor has designed the prompt to produce an analysis with a specific subtle error (a logical flaw, a market assumption that does not hold, or an outdated data point). Without being told what the error is, you must: (a) identify it, (b) explain why AI made it, (c) produce a corrected version, and (d) design a prompt that would prevent this error in future.

:::tip Solo Learner Alternative
If working without an instructor, generate your own test material: prompt AI with a topic you know well (e.g., _"Write a competitive analysis of [a product/industry you understand]"_), then ask a second AI tool to _"Identify one subtle analytical error in this response that a non-expert would miss."_ Use the first response as your exercise material and the second as your answer key.
:::

---

:::info Your Deliverable
The original AI-generated analysis. Your error identification with explanation of the error type, why AI made it, and its impact on the analysis. Your corrected analysis. Your redesigned prompt that would prevent the error. A brief explanation of your error-detection process -- how did you find it?
:::

<AICheck id="the-override-test" xp={50}>

I was given an AI-generated competitive analysis that contains a deliberate
subtle error. I identified the error, explained why AI made it, corrected the
analysis, and redesigned the prompt to prevent it. Please:

(1) Did I correctly identify the error? If not, give me a hint and let me
try again.
(2) Is my explanation of WHY the AI made this error accurate?
(3) Does my corrected analysis actually fix the problem without introducing
new errors?
(4) Would my redesigned prompt actually prevent this type of error? Test it by
mentally running the prompt -- would it produce a better result?
(5) Rate my error-detection process -- was my approach systematic or did I get
lucky? How can I make my detection process more reliable?

Original analysis:

<AICheckField
  name="original_analysis"
  placeholder="Paste the original AI-generated analysis here..."
  rows={6}
/>

My error identification:

<AICheckField
  name="error_identification"
  placeholder="Paste your error identification here..."
  rows={4}
/>

My corrected analysis:

<AICheckField
  name="corrected_analysis"
  placeholder="Paste your corrected analysis here..."
  rows={6}
/>

My redesigned prompt:

<AICheckField
  name="redesigned_prompt"
  placeholder="Paste your redesigned prompt here..."
  rows={4}
/>

Finally, complete the Thinking Score Card for this exercise:
Independent Thinking (1-10), Critical Evaluation (1-10),
Reasoning Depth (1-10), Originality (1-10), Self-Awareness (1-10).
For each score, give a one-sentence justification.

</AICheck>

---

## What Happened With James

James set down his corrected analysis next to the original. The error had been subtle: the competitive analysis used market share data from a period before a major regulatory change, making the positioning recommendation look safe when the competitive landscape had actually shifted underneath it. The numbers were real. The source was legitimate. The conclusion was wrong because the context had changed.

"The scary part," James said, "is that I almost missed it. The first time through, I was reading for logic. The argument was logical. It was the premise that was stale."

"What made you catch it?"

"I kept thinking about what you said. That it looked convincing and that was why it was dangerous. So I stopped reading the argument and started checking the foundations. When was this data collected? What happened in the market since then? That's when it fell apart."

Emma nodded. "Now think about the redesigned prompt. Why does it work better than the original?"

"Because I told AI to flag the date of every data source and note any market events that happened after that date. The original prompt just said 'competitive analysis.' It never asked AI to check its own foundations."

"That's the difference between finding an error and preventing it. Anyone can catch a mistake after the fact. Designing a prompt that makes the mistake less likely: that's the override instinct becoming a system."

## The Lesson Learned

The override instinct is not skepticism. Skeptics reject everything; that is just as lazy as accepting everything. The real skill is knowing when to interrogate, and the answer is: when the output looks too smooth. Convincing prose hides errors better than clumsy prose does. The redesigned prompt is where the exercise pays off, because it turns a one-time catch into a repeatable prevention.

## Flashcards Study Aid

<Flashcards />
