---
sidebar_position: 1
aicheck: true
title: "The Error Prediction"
description: "Predict where AI will fail before prompting it, then annotate AI responses line-by-line using an Error Taxonomy to build systematic error detection skill"
keywords:
  [
    "thinking skills",
    "Part 0",
    "error detection",
    "error taxonomy",
    "AI verification",
    "prediction lock",
  ]
chapter: 2
lesson: 1
duration_minutes: 75

# HIDDEN SKILLS METADATA
skills:
  - name: "Error Prediction"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can predict specific categories of AI errors before prompting, then compare predictions against actual errors found in AI output"

  - name: "Error Taxonomy Application"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Apply"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can annotate AI-generated text line-by-line using 8 error categories (factual error, logical gap, false confidence, missing context, correlation-causation confusion, outdated information, fabricated citation, cultural blind spot)"

learning_objectives:
  - objective: "Predict specific AI failure modes before seeing AI output, creating a testable hypothesis about where AI reasoning breaks down"
    proficiency_level: "A1"
    bloom_level: "Analyze"
    assessment_method: "Comparison table of predicted errors vs. actual errors found, with AI Check evaluating prediction accuracy"

  - objective: "Annotate AI output using the Error Taxonomy with correct categorization and explanation of why each item is an error"
    proficiency_level: "A1"
    bloom_level: "Apply"
    assessment_method: "AI Check reviews annotations for false positives, false negatives, and correct categorization, reporting an accuracy percentage"

cognitive_load:
  new_concepts: 4
  assessment: "4 concepts (error prediction before prompting, 8-category Error Taxonomy, line-by-line annotation, predicted vs. actual error comparison) : at upper end of Part 0 beginner range"

differentiation:
  extension_for_advanced: "After completing the exercise, research one claim that AI got wrong. Find the correct information from primary sources and write a 100-word explanation of why AI produced the error."
  remedial_for_struggling: "Focus on just 3 error categories for your first pass (factual error, false confidence, missing context). Add the remaining 5 categories on a second reading."

teaching_guide:
  lesson_type: "exercise"
  session_group: 2
  session_title: "The Error Prediction"
  key_points:
    - "Error detection is a trainable skill with specific categories, not just vague skepticism: the taxonomy gives students a precise vocabulary for AI failures"
    - "Predicting errors BEFORE prompting AI builds an internal model of where AI fails, which is far more valuable than catching errors after the fact"
    - "The 8-category taxonomy covers the most common AI failure modes: factual error, logical gap, false confidence, missing context, correlation-causation confusion, outdated information, fabricated citation, cultural blind spot"
  misconceptions:
    - "Students think error detection means finding 'wrong facts' : the taxonomy reveals that logical gaps, false confidence, and missing context are equally important error types"
    - "Students over-flag items as errors because they disagree with the AI's conclusion: disagreement is not the same as an error; the taxonomy requires categorization"
  discussion_prompts:
    - "Which error type was most common across both AI responses? Why do you think AI tools are particularly prone to that type?"
    - "Were your error predictions accurate? What does the gap between predicted and actual errors tell you about your understanding of AI limitations?"
  teaching_tips:
    - "Display the Error Taxonomy as a reference card that students keep visible during annotation: memorization is not the goal; consistent application is"
    - "Have students share their most surprising error find with the class: errors that seem obviously wrong in hindsight but were initially convincing teach the most"
  assessment_quick_check:
    - "Can the student explain the difference between a 'factual error' and 'false confidence' with an example from their annotation?"
    - "Did the student's prediction document identify at least one error type that actually appeared in the AI output?"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# The Error Prediction

> _AI sounds confident whether it is right or wrong. The student who cannot tell the difference is more dangerous with AI than without it._

:::note Building On Previous Chapters
You will use the **Question Formulation** skill from [Chapter 1](../01-asking-better-questions/01-prediction-lock.md) to design your error-detection queries. The **Reasoning Receipt** format you learned carries forward; annotating AI output becomes second nature from here on.
:::

This chapter trains you to become a systematic error detector. Not vague skepticism ("don't trust AI") but precise, categorized analysis of where and how reasoning breaks. You will develop an Error Taxonomy that you carry through the rest of the book and apply to every AI interaction.

## Why This Matters: James and the Authoritative Number

James dropped into the chair across from Emma and slid his laptop over. On the screen: a three-paragraph AI analysis of a supply chain disruption scenario. Clean formatting. Numbered points. Specific percentages.

"Read this," he said. "I asked the AI to analyze the same scenario we discussed last week. Look at the structure. Look at the data points. This is better than anything I would have written in my old job, and it took forty-five seconds."

Emma read the screen without touching the laptop. "Which parts are correct?"

"All of it, as far as I can tell. The logic flows. The numbers look right. It even caught the seasonal factor I missed in my prediction lock."

"How did you verify the numbers?"

James paused. "They're... specific. The response says the supplier segment contracted by 12.4% in Q3. That's a precise figure. You don't make up a number like 12.4%."

"Why not?"

"Because it's oddly specific. Round numbers feel like estimates. A number with a decimal point feels like it came from actual data."

Emma leaned forward. "That's exactly what makes fabricated statistics dangerous. Precision creates the appearance of research. I could tell you that 73.6% of first-year analysts fail to verify AI-generated figures, and it would sound more credible than 'most analysts don't check.' But I invented that number ten seconds ago."

James looked at the screen again. The 12.4% figure sat there, looking as solid as it had thirty seconds ago. Except now he couldn't tell whether it was real or whether it just sounded real.

"Hang on." He scrolled through the response. "So you're saying any of these numbers could be fabricated? The whole thing reads like a consulting report. Are you telling me to distrust anything that sounds professional?"

"I'm asking you a different question. When you read this response, what did you use to evaluate it?"

James thought about it. "The way it was written. The confidence. The structure."

"Not the content. The presentation." Emma let that distinction settle. "You evaluated a report the way you'd evaluate a PowerPoint deck. Does it look polished? Does it flow? Does the speaker sound sure of themselves? In my first operations role, we called that 'pitch-deck syndrome.' The best-formatted proposal won the contract, regardless of whether the numbers held up."

"That's not what I was doing."

"You told me the numbers 'look right' because they have decimal points. That is exactly what you were doing."

James sat back. She was right, and he could feel the resistance to admitting it. The analysis on his screen still looked convincing. That was the problem. He couldn't tell whether it looked convincing because it was correct or because it was well-written. And until five minutes ago, he hadn't known there was a difference.

"Alright," he said. "So what's the alternative? I can't fact-check every sentence. That would take longer than writing the analysis myself."

"You don't fact-check every sentence. You learn where errors hide. There are patterns. Specific, predictable patterns. That's what the Error Taxonomy is for."

Emma stood up and picked up her coffee. "I want you to do something before you start the exercise. Look at that AI response and predict where the errors are. Write down your predictions. Categorize them. Then run the exercise and see how your predictions compare to what you actually find."

She paused at the door. "The prediction matters more than the detection. Anyone can find errors after someone points out where to look. The skill is knowing where to look before anyone tells you."

She left.

James stared at the analysis on his screen. Three paragraphs ago, it had looked like a finished product. Now it looked like an exam he hadn't studied for.

### The Error Taxonomy

| Category                        | What It Means                                            |
| ------------------------------- | -------------------------------------------------------- |
| Factual error                   | A claim that is demonstrably false                       |
| Logical gap                     | A conclusion that does not follow from the premises      |
| False confidence                | Stating uncertain information with unjustified certainty |
| Missing context                 | Omitting crucial factors that would change the analysis  |
| Correlation-causation confusion | Treating a correlation as proof of causation             |
| Outdated information            | Using data or facts that are no longer current           |
| Fabricated citation             | Referencing a source that does not exist                 |
| Cultural blind spot             | Assuming one cultural context applies universally        |

## Exercise 1: The Error Prediction

**Layers Used:** Layer 1 (Predict Before You Prompt), Layer 2 (Reasoning Receipt)

James is staring at an AI response he can no longer trust at face value. So are you.

:::note Building On Previous Chapters
You used the **Prediction Lock** format in [Chapter 1, Exercise 1](../01-asking-better-questions/01-prediction-lock.md). You predicted question quality there; now you predict error types.
:::

### Write Your Error Prediction (before touching AI)

**Step 1. Write your sealed prediction (~15 min, no AI).** Before prompting any AI, write down:

- What you think the correct analysis involves (key factors, tradeoffs, data needed)
- Where you predict AI will be **strong** in its analysis
- Where you predict AI will **make errors** or miss important context: focus on three categories to start: **factual error**, **false confidence**, and **missing context**. The remaining five categories are in the table above for reference, but these three are the easiest to spot

This is your prediction document. Write it before moving to Step 2.

**Step 2. Get two AI responses (~10 min).** Choose a scenario below, then prompt two different AI tools with the identical question. Save both full responses.

### Annotate and Compare

**Step 3. Annotate the key claims (~20 min).** Read through each AI response. Pick the 5 strongest claims and the 5 most suspicious claims, 10 total across both responses. For each, label it using the Error Taxonomy above. If a claim is correct, mark it "no error detected."

**Step 4. Build your comparison table (~10 min).** Compare your predictions from Step 1 against the actual errors you found in Step 3 (see template below). Count how many of each error type you found across both tools.

### Choose Your Scenario

<Tabs>
  <TabItem value="policy" label="Policy" default>
    **Scenario A (Policy):** "Should developing nations invest heavily in
    nuclear energy to meet growing power demands?"
  </TabItem>
  <TabItem value="technical" label="Technical">
    **Scenario B (Technical):** "Should companies migrate their entire
    infrastructure to serverless architecture?"
  </TabItem>
  <TabItem value="education" label="Education">
    **Scenario C (Education):** "Should universities replace traditional
    lectures with AI-powered personalized tutoring?"
  </TabItem>
</Tabs>

Choose one.

:::info Your Deliverable

1. Your sealed prediction document (written before AI) listing expected strengths and error types
2. Two AI responses with your 10 key claims annotated using the Error Taxonomy
3. A comparison table: predicted errors vs. actual errors found (see template below)
4. A count of each error type found across both tools
   :::

<details>
<summary>Prediction Document Template (click to expand)</summary>

**PREDICTION DOCUMENT** (write this BEFORE prompting AI)

**Scenario chosen:** \_\_\_

**What the correct analysis should cover:**

- Key factor 1: \_\_\_
- Key factor 2: \_\_\_
- Key factor 3: \_\_\_

**Where I predict AI will be strong:**

- ***

**Where I predict AI will make errors:**

| Predicted Error Type (from taxonomy) | Why I expect this error                                 |
| ------------------------------------ | ------------------------------------------------------- |
| e.g. Missing context                 | AI won't know about recent policy changes in [country]  |
| e.g. Cultural blind spot             | AI will assume Western/US context for this global issue |
|                                      |                                                         |

</details>

<details>
<summary>Prediction vs. Reality Comparison Table (click to expand)</summary>

| Predicted Error | Did It Happen? | Actual Error Found (if different) | Error Category |
| --------------- | -------------- | --------------------------------- | -------------- |
|                 | Yes / No       |                                   |                |

**Error Count Summary:**

| Error Category                  | AI Tool 1 | AI Tool 2 | Total |
| ------------------------------- | --------- | --------- | ----- |
| Factual error                   |           |           |       |
| Logical gap                     |           |           |       |
| False confidence                |           |           |       |
| Missing context                 |           |           |       |
| Correlation-causation confusion |           |           |       |
| Outdated information            |           |           |       |
| Fabricated citation             |           |           |       |
| Cultural blind spot             |           |           |       |

</details>

<AICheck id="error-prediction" xp={50}>

I am learning to detect errors in AI-generated analysis. I asked two different
AI tools about a scenario question and then annotated both responses using
an Error Taxonomy (factual error, logical gap, false confidence, missing
context, correlation-causation confusion, outdated information, fabricated
citation, cultural blind spot).
Please:

(1) Review my error annotations -- did I correctly identify each error?
Flag any false positives (things I marked as errors that are actually
correct) and false negatives (errors I missed).
(2) Rate my error detection accuracy as a percentage.
(3) For each error I missed, explain how I should have caught it.
(4) Rate my use of the Error Taxonomy -- am I categorizing errors correctly
or misclassifying them?
(5) What patterns do you see in my error detection -- which types am I good
at catching and which do I consistently miss?

Here are the AI responses with my annotations:

<AICheckField
  name="annotated_responses"
  placeholder="Paste your annotated responses here..."
  rows={6}
/>

Here is my prediction document:

<AICheckField
  name="predictions"
  placeholder="Paste your predictions here..."
  rows={6}
/>

Finally, complete the Thinking Score Card for this exercise:
Independent Thinking (1-10), Critical Evaluation (1-10),
Reasoning Depth (1-10), Originality (1-10), Self-Awareness (1-10).
For each score, give a one-sentence justification.

</AICheck>

<ConversationGallery />

---

## What Happened With James

James spread his prediction document and his annotated AI responses side by side. He'd predicted that AI would be strong on structure and logical flow. Correct. He'd predicted factual errors in specific statistics. He'd found two, but he'd also found three he hadn't predicted at all: two cases of false confidence and a missing-context error that changed the entire conclusion.

The false confidence errors were the ones that bothered him. Both times, the AI had stated something as settled fact when the reality was contested. And both times, the authoritative tone had almost convinced him to skip past them.

"I caught five errors total," he told Emma when she returned. "But I only predicted two of them. The other three were categories I hadn't even considered."

"Which category surprised you the most?"

"False confidence. The AI didn't say 'this might be the case.' It said 'this is the case.' And I almost accepted it because the sentence was well-constructed." He paused. "It's like those quarterly reviews at my old company. The managers who spoke with the most certainty got the least pushback, even when their numbers were weaker than everyone else's."

"Now you have a vocabulary for that pattern. And a reflex to check for it."

## The Lesson Learned

Error detection is a trainable skill with specific categories, not a vague feeling that something is off. By predicting AI errors before seeing them, you build an internal model of where AI fails. The gap between your predictions and the actual errors tells you exactly which failure modes your instincts miss. That gap is where your next improvement lives.

## Flashcards Study Aid

<Flashcards />
