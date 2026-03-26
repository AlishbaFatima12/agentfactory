---
sidebar_position: 3
title: "Multi-LLM Exploration"
description: "Using multiple frontier models as an advisory board to challenge and refine a concept paper, and the 9.5+ quality threshold that signals readiness."
chapter: 65
lesson: 3
duration_minutes: 20
keywords:
  [
    multi-LLM exploration,
    advisory board pattern,
    quality threshold,
    crystallization signal,
    frontier LLM,
    concept paper validation,
  ]

skills:
  - name: "Multi-LLM Exploration"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Can explain why multiple LLMs produce better validation than a single model and design a prompt strategy for each"
  - name: "Quality Threshold Evaluation"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Evaluate"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Can distinguish between substantive AI feedback and stylistic AI feedback (the crystallization signal)"

learning_objectives:
  - objective: "Explain the Advisory Board Pattern and why different LLMs catch different gaps"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Guided Discovery dialogue analysis"
  - objective: "Design a three-model validation strategy with distinct prompts for each model"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Applied exercise prompt design"
  - objective: "Identify the crystallization signal in AI feedback and explain its relationship to the 9.5+ threshold"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Feedback classification exercise"

cognitive_load:
  new_concepts: 3
  assessment: "Moderate. Advisory Board Pattern, Quality Threshold, and Crystallization Signal are new. Anchored by familiar concept of review boards."

differentiation:
  extension_for_advanced: "Design a fourth advisory role (e.g., 'regulatory expert') and write its prompt. Explain what gap this role fills that the other three miss."
  remedial_for_struggling: "Focus on the core idea: one reviewer catches one set of problems. Three reviewers catch three sets. Same principle as code review."
---

# Multi-LLM Exploration

"I have a question about the last ten percent," James said. "You said to submit the concept paper to a frontier LLM. Which one?"

"All of them."

James blinked. "All of them? I have Claude, GPT, Gemini. That's three reviews of the same paper. Won't they say the same things?"

"Try it and find out."

## One Model Is Not Enough

Emma pulled up three browser tabs. "Give me a concept paper claim. Something from your HireFlow blueprint."

James thought for a moment. "The Resume Screener produces a single numerical score for each candidate, ranked against the job specification's requirements."

"Good. Now imagine asking three different experts to review that claim. An HR director. A machine learning engineer. A legal compliance officer." She wrote three names on the whiteboard. "Does the HR director care about the same things as the ML engineer?"

"No. The HR director cares about whether the score is meaningful to hiring managers. The ML engineer cares about whether the scoring algorithm is reliable. The legal officer cares about whether the scoring creates discriminatory outcomes."

"Three experts. Three blind spots covered. One expert catches one set of problems." Emma turned to face him. "Frontier LLMs are the same. They have different training data, different reasoning patterns, different strengths. One model might excel at finding logical inconsistencies. Another might be stronger on domain-specific knowledge. A third might catch assumptions that the other two accept without question."

"But they're all LLMs. They're not actual HR directors and ML engineers."

"They do not need to be. You are not asking them for domain expertise. You already have that. It is the eighty percent. You are asking them to stress-test your reasoning. Different models stress-test in different ways."

James was not convinced. "Can't I just ask one model three times with different prompts?"

"You can. And you will get three variations of the same model's blind spots."

"How do you know that?"

Emma paused. "Honestly, the evidence is not clean on this. Some researchers have found that different prompting strategies on a single model can match multi-model validation. Others have found gaps that only surface with a different architecture." She leaned back. "My experience is that multi-model catches more. But I would not claim it is a settled question. What IS settled is that one pass is never enough."

## The Advisory Board Pattern

"Here is how to structure it," Emma said. She drew three boxes on the whiteboard and labeled them:

```
[Domain Challenger]     [Logic Auditor]     [Gap Finder]
  "Is this how the      "Does this argument   "What is missing
   domain actually        hold together?"       from this paper?"
   works?"
```

"Each model gets a different role. Not 'review this paper' three times. Three different review mandates."

**The Advisory Board Pattern** assigns each frontier LLM a specific perspective and set of questions. The same concept paper goes to all three. The prompts are different.

| Role                  | Prompt Focus                                                   | What It Catches                              |
| --------------------- | -------------------------------------------------------------- | -------------------------------------------- |
| **Domain Challenger** | "Where does this paper contradict standard industry practice?" | Assumptions based on limited experience      |
| **Logic Auditor**     | "Where does the argument fail logically? Find contradictions." | Internal inconsistencies, circular reasoning |
| **Gap Finder**        | "What is this paper NOT addressing that it should be?"         | Missing topics, unstated dependencies        |

"Three roles, three prompts, three models," Emma said. "You collect the feedback, classify it, and revise."

James studied the table. "Wait, so basically each model is like a different member of a review board? And I'm the one who takes their feedback and decides what to act on?"

"You are the principal. They are the advisors. You make the final call. That is the Two-Layered Model from Chapter 61 applied to document validation: intent flows down, verification flows up."

James nodded. He had not expected the governance model to show up here, but it made sense. The concept paper was the first place where the reader acted as the governance layer over AI advisors.

## Running the Advisory Board

Emma wrote the process on the whiteboard:

**Step 1: Prepare the paper.** Complete draft from the 10-80-10 structure: targeted research done, blueprint reframed as argument.

**Step 2: Submit to Model A (Domain Challenger).** Prompt:

> You are an expert in [domain]. I have written a concept paper for an AI factory that operates in this domain. Your job is to find places where my understanding of the domain is wrong, incomplete, or based on assumptions that practitioners would challenge. Here is the paper: [full text]

**Step 3: Submit to Model B (Logic Auditor).** Prompt:

> You are a critical reviewer. Your job is to find logical weaknesses in this concept paper: contradictions between sections, claims that are not supported by the evidence presented, circular arguments, or conclusions that do not follow from the premises. Here is the paper: [full text]

**Step 4: Submit to Model C (Gap Finder).** Prompt:

> You are reviewing this concept paper for completeness. Your job is to identify what the paper does NOT address but should. What topics are missing? What edge cases are ignored? What stakeholders are not considered? Here is the paper: [full text]

**Step 5: Classify feedback.**

| Feedback Type             | Action              | Example                                                                                       |
| ------------------------- | ------------------- | --------------------------------------------------------------------------------------------- |
| Substantive critique      | Revise the paper    | "Your scoring model assumes binary qualifications, but technical roles use spectrum matching" |
| Missing section           | Add the section     | "No mention of data privacy requirements for handling candidate PII"                          |
| Stylistic suggestion      | Ignore              | "Consider restructuring section 3 for better flow"                                            |
| Contradicts your research | Investigate further | "Standard practice uses structured interviews, not the format you describe"                   |

"You act on substantive critiques and missing sections," Emma said. "You ignore stylistic suggestions. And when a model contradicts your research, you investigate rather than automatically accepting either source."

## The 9.5+ Quality Threshold

"How do I know when the paper is done?" James asked.

"You loop. Submit, revise, resubmit. On each loop, you ask the same three models the same three role-specific prompts. You also ask each model to rate the paper on a scale of 1 to 10."

"And when it hits 9.5, I'm done?"

"When it hits 9.5 AND the feedback changes character." Emma wrote two columns:

| Before Threshold                                                             | After Threshold                                                   |
| ---------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| "The scoring model has a fundamental gap in how it handles career changers." | "You could add a brief mention of career changers in section 4."  |
| "Section 3 contradicts section 7 on data retention timelines."               | "Consider reordering sections 3 and 4 for better narrative flow." |
| "No discussion of bias mitigation in automated screening."                   | "The bias section is thorough. You might add one more example."   |

"Before threshold, the feedback points to real problems: missing knowledge, logical contradictions, unstated assumptions. After threshold, the feedback becomes suggestions: reorder this, add a mention of that, consider this phrasing."

James saw the pattern. "The shift from 'this is wrong' to 'this could be slightly better.' That's the signal."

"That is the **crystallization signal**," Emma said. "The paper has crystallized when AI advisors stop finding substance to challenge and start offering polish. The 9.5+ score is a useful proxy, but the real test is the nature of the feedback."

This is the crystallization signal from Chapter 63's maturity model: the moment Explore ends and Incubate begins. The 9.5+ threshold is how you know the phase transition has occurred. The paper stops being a draft and starts being a foundation.

She picked up her coffee. "There is a trap. Do not chase 10.0. A paper at 9.5 with all substantive feedback addressed is ready. A paper at 9.8 with one remaining stylistic suggestion is also ready. The pursuit of perfection past crystallization is procrastination disguised as quality."

James laughed. "That sounds like something my old project manager used to say. 'Good enough to ship is better than perfect in your inbox.'"

"Your project manager was right."

## The Iteration Loop

The complete 10-80-10 process with multi-LLM exploration:

```
1. Targeted Research (10%)
   └── Identify 3-5 assumption gaps
   └── Find evidence for each

2. Write Draft (80%)
   └── Reframe blueprint as argument
   └── Integrate research evidence

3. AI Validation Loop (10%)
   └── Submit to Domain Challenger → collect feedback
   └── Submit to Logic Auditor → collect feedback
   └── Submit to Gap Finder → collect feedback
   └── Classify all feedback (substantive / missing / style / contradicts)
   └── Revise paper
   └── Resubmit → repeat until crystallization signal

4. Done: 9.5+ score AND feedback shifted from substance to style
```

"How many loops does it usually take?" James asked.

"Two or three. If it takes more than four, the eighty percent was thin. Your domain knowledge has gaps. Go back to research."

## What Comes Next

You now have the complete method: the 10-80-10 Rule for structure, the Advisory Board Pattern for validation, and the 9.5+ threshold for readiness. In the next lesson, you apply all of it. You write the HireFlow concept paper.
