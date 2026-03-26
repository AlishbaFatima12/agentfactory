---
sidebar_position: 6
title: "Write the Interview Question Generator Skill"
description: "Write the Interview Question Generator FTE skill with minimal scaffolding, discovering the connection between scoring gaps and targeted questions."
chapter: 67
lesson: 6
duration_minutes: 30
keywords:
  [
    interview questions,
    gap analysis,
    minimal scaffolding,
    inter-FTE consistency,
    question generation,
  ]

skills:
  - name: "Writing Skills with Minimal Guidance"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can write a complete SKILL.md for a new FTE by applying the transformation method independently with only hints available"

  - name: "Designing Inter-FTE Consistency"
    proficiency_level: "B2"
    category: "Technical"
    bloom_level: "Analyze"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can identify where one skill's output must align with another skill's input and design the connection explicitly"

learning_objectives:
  - objective: "Write the Interview Question Generator SKILL.md independently using hints only when stuck"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Student produces a complete SKILL.md with inter-FTE input validation and gap-targeted question generation"

  - objective: "Design questions that target specific scoring gaps from the Resume Screener output"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Student demonstrates that generated questions map directly to low-scoring dimensions, not generic interview questions"

cognitive_load:
  new_concepts: 2
  assessment: "2 concepts (gap-targeted generation, question difficulty calibration) building on established patterns from L4-L5"

differentiation:
  extension_for_advanced: "Design a feedback loop: if interview answers reveal the scoring gap was a false negative (the candidate actually has the skill but the CV did not show it), how should the Candidate Summarizer adjust the final recommendation?"
  remedial_for_struggling: "Focus on one scoring dimension first. Write questions that target only the technical skills gap. Once that works, add questions for other dimensions."
---

# Write the Interview Question Generator Skill

You have written two skills with guidance. This lesson provides less. The transformation method is the same. The SKILL.md format is the same. What you bring is the pattern recognition from Lessons 4 and 5.

## The Challenge

Emma set her laptop aside. "You have the method. You have two reference skills. Write the Interview Question Generator."

"On my own?"

"On your own. I need to review something with the platform team. I will check your work when I get back." She stood up. "One hint before I go: the Resume Screener produces a gap analysis. The Interview Question Generator should use it."

She left.

James opened his concept paper to the Interview Question Generator section. He read:

> The Interview Question Generator creates role-specific behavioral and technical questions based on the job description and candidate screening results. Questions should target identified gaps in the candidate's profile, probe areas of strength for depth, and include scoring criteria so the interviewer knows what a good answer looks like. Question difficulty should match the role's seniority level.

He started with Extract.

## Your Task

Apply the full transformation method:

1. **Extract**: Identify requirements, decision points, and edge cases from the concept paper section above (or your own concept paper's equivalent section).
2. **Structure**: Write When-Do-Because statements for at least 4 items.
3. **Encode**: Write the complete SKILL.md with Persona, Questions, and Principles.

:::note Hint: Extract

<details>
<summary>If you are stuck on extraction, expand this hint.</summary>

**Requirements:**

1. Accept a job description and candidate screening results (with gap analysis) as input
2. Generate behavioral and technical questions
3. Include scoring criteria for each question (what a good answer looks like)
4. Calibrate difficulty to seniority level

**Decision Points:**

1. How many questions to generate (too few = insufficient signal, too many = interview fatigue)
2. How to balance gap-probing questions vs. strength-confirming questions
3. What makes a question "behavioral" vs. "technical"
4. How to calibrate difficulty for junior vs. senior roles

**Edge Cases:**

1. Candidate scored high across all dimensions (no gaps to probe)
2. Candidate scored low across all dimensions (everything is a gap)
3. Gap analysis indicates a concern that was not in the original job requirements
4. Role requires a skill that is hard to assess through interview questions (e.g., "works well under pressure")
</details>
:::

:::note Hint: Structure

<details>
<summary>If you are stuck on structuring, expand this hint.</summary>

**Example When-Do-Because statement:**

```
WHEN the gap analysis shows a dimension scoring below 5,
DO generate at least 2 questions specifically probing that dimension,
including one behavioral ("Tell me about a time when...") and one
technical ("How would you approach..."),
BECAUSE low-scoring dimensions are the primary risk factors and the
interview must determine whether the gap is real or a CV artifact.
```

Write at least 3 more statements covering: number of questions, difficulty calibration, and what to do when there are no gaps.

</details>
:::

:::note Hint: Persona Workflow

<details>
<summary>If you are stuck on the Persona, expand this hint.</summary>

Your Persona should follow this execution workflow:

1. Read the job description and scoring rubric
2. Read the candidate's screening results and gap analysis
3. Generate gap-probing questions (targeting low-scoring dimensions)
4. Generate strength-confirming questions (validating high-scoring dimensions)
5. Add scoring criteria for each question
6. Calibrate difficulty to the role's seniority level
7. Validate total question count (target: 8-12 questions)
</details>
:::

## The Key Insight

James worked through the extraction and structuring. When he reached the Encode step, he noticed something.

The Resume Screener's gap analysis lists dimensions where the candidate scored below 5. The Interview Question Generator reads those dimensions and generates questions that target them specifically.

This means the quality of the Interview Question Generator's output depends entirely on the quality of the Resume Screener's gap analysis. If the gap analysis is vague ("candidate is weak in some areas"), the Question Generator cannot target specific dimensions. If the gap analysis is specific ("candidate scored 3/10 on 'distributed systems experience': CV mentions no distributed systems projects or roles"), the Question Generator can create precise questions.

James went back to his Resume Screener skill and added a line to the output format:

```
- gap_analysis: list of {dimension, score, evidence_found, evidence_missing}
```

This was not in Lesson 5's requirements. James added it because the downstream FTE needed it. He was designing the pipeline, not just writing individual skills.

When Emma returned, she read James's three skills. She pointed at the gap analysis format addition.

"Good call. You changed the Resume Screener's output to serve the Question Generator's input. That is inter-FTE thinking."

"Wait, so basically each skill is not just solving its own problem. It is also providing the right input for the next skill in the pipeline?"

"That is the difference between four isolated tools and a factory."

## Predict

:::warning STOP AND PREDICT [AI-FREE]
Do not scroll ahead. Do not ask your AI assistant.

The Resume Screener produced this gap analysis for Candidate B (the self-taught developer):

```
Gap analysis:
- technical_skills: 7/10 (strong Python, good PostgreSQL)
- experience_relevance: 5/10 (freelance, not corporate)
- qualifications: 4/10 (no degree, no certifications)
- cultural_indicators: 6/10 (GitHub contributions suggest collaboration)
- career_trajectory: 6/10 (self-taught to freelance, upward but limited data)
```

Using your Interview Question Generator skill:

1. How many questions will target the "qualifications" gap (scored 4/10)?
2. Will the skill generate any questions about "technical_skills" (scored 7/10)?
3. What difficulty level will the questions use for a senior role?

Record your confidence (1-5).
:::

## Run

Test your skill with the gap analysis above. Compare the output to your prediction. Test twice and check for consistency. Do you get the same questions both times?

## Investigate

Now analyze the output. If the skill generated generic questions ("Tell me about yourself") instead of gap-targeted questions ("Your CV shows freelance Python work but no corporate team experience. Describe a project where you collaborated with other engineers on a shared codebase."), the Questions section of your SKILL.md needs more specificity about how to use the gap analysis.

If the two runs produced different questions, your difficulty calibration or question generation logic may be too vague.

## Modify

:::tip PREDICT BEFORE RUNNING
Predict the change in output before applying each modification.
:::

### Modification A: Scoring Criteria Specificity

Add this to your Principles:

```
Every generated question must include a scoring guide with three
levels:
- Strong answer (8-10): [specific observable evidence]
- Adequate answer (5-7): [specific observable evidence]
- Weak answer (1-4): [specific observable evidence]

The scoring guide must reference the specific dimension being
probed.
```

### Modification B: Balance Rule

Add a Question and Principle for balancing gap-probing vs. strength-confirming questions. A good rule: 60% of questions target gaps (dimensions below 5), 30% confirm strengths (dimensions above 7), 10% are open-ended to discover information not in the CV.

Test with a candidate who scored above 7 on all dimensions. Does the skill still generate useful questions?

## Try With AI

### Prompt 1: Full Pipeline Test

```
I have three HireFlow skills. Test the full pipeline:

1. Use my Job Spec Writer skill to process this brief:
   "Need a mid-level data engineer. Must know SQL, Python, and
   dbt. Cloud experience preferred (AWS or GCP). Team of 5."

2. Use the job description output as input to my Resume Screener.
   Score this candidate:
   "3 years as a data analyst, transitioned to data engineering
   1 year ago. SQL expert, Python intermediate, no dbt experience.
   AWS certified. Built data pipelines for a fintech startup."

3. Use the screening output as input to my Interview Question
   Generator. Produce the interview questions.

Show me the data flowing through each stage. Flag any point
where one skill's output did not match the next skill's
expected input.
```

**What you are learning**: End-to-end pipeline testing. Data contract mismatches surface here, before you build production code.

### Prompt 2: Question Quality Audit

```
My Interview Question Generator produced these questions:

[Paste your generated questions]

For each question:
1. Which scoring dimension does it target?
2. Is it behavioral or technical?
3. Is the difficulty appropriate for [seniority level]?
4. Would two different interviewers using the scoring guide
   agree on what constitutes a "strong answer"?

Flag any question that is too generic to be useful.
```

**What you are learning**: How to evaluate question quality. Generic questions ("What are your strengths?") provide no signal. Gap-targeted questions ("Your CV shows SQL expertise but no dbt experience. Walk me through how you would approach learning dbt for our pipeline.") provide specific signal.
