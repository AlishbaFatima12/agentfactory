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

## Exercise 3: The Override Challenge

**Layers Used:** Layer 4 (Contradiction Challenge)

:::note Building On Previous Chapters
Chapter 2's error detection applied to AI's business analysis. Your Error Taxonomy from [Chapter 2](../02-detecting-broken-reasoning/01-error-prediction.md) is now your override trigger. The same diagnostic rigor applies -- but the errors are in AI output rather than in a scenario.
:::

### What You Do

Use AI to produce a competitive analysis for a product. The instructor has designed the prompt to produce an analysis with a specific subtle error (a logical flaw, a market assumption that does not hold, or an outdated data point). Without being told what the error is, you must: (a) identify it, (b) explain why AI made it, (c) produce a corrected version, and (d) design a prompt that would prevent this error in future.

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

### What This Teaches You

You learn the override instinct -- the willingness and ability to say "the AI is wrong here" and back it up. Most students either trust AI too much (never override) or override randomly (reject good output). This exercise trains the specific skill of knowing WHEN and WHY to override.

## Flashcards Study Aid

<Flashcards />
