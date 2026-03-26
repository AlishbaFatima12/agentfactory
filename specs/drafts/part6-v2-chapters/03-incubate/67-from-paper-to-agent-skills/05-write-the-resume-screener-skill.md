---
sidebar_position: 5
title: "Write the Resume Screener Skill"
description: "Apply the transformation method with reduced scaffolding to write the Resume Screener FTE skill, confronting the challenge of vague scoring criteria."
chapter: 67
lesson: 5
duration_minutes: 35
keywords:
  [
    resume screener,
    scoring rubric,
    calibration,
    consistency,
    SKILL.md,
    reduced scaffolding,
  ]

skills:
  - name: "Writing Scoring-Based Execution Skills"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can write a skill that produces numeric scores with explicit dimensions, weights, and calibration examples"

  - name: "Diagnosing Scoring Inconsistency"
    proficiency_level: "B2"
    category: "Technical"
    bloom_level: "Evaluate"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can identify when a skill produces inconsistent scores and trace the cause to vague instructions"

learning_objectives:
  - objective: "Write a Resume Screener SKILL.md with explicit scoring dimensions, weights, and calibration examples using the transformation method"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Student produces a SKILL.md where the scoring rubric is specific enough that two agents using it would produce scores within 1 point of each other"

  - objective: "Diagnose and fix scoring inconsistency caused by vague skill instructions"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Student identifies scoring variance, traces it to a vague instruction, and writes a more specific version"

cognitive_load:
  new_concepts: 3
  assessment: "3 concepts (scoring consistency, calibration examples, inter-FTE input validation) building on transformation method from L4"

differentiation:
  extension_for_advanced: "Design a scoring normalization scheme that ensures scores are comparable across different job types (a 7/10 for a junior engineer means the same thing as a 7/10 for a senior manager)."
  remedial_for_struggling: "Start with just two scoring dimensions (technical match and experience relevance). Get those consistent before adding the remaining three."
---

# Write the Resume Screener Skill

You wrote the Job Spec Writer skill with full guidance in Lesson 4. Now you write the Resume Screener with less hand-holding. The transformation method is the same. The format is the same. What changes is how much this lesson tells you versus how much you figure out yourself.

Follow the same pattern from Lesson 4: Extract from the concept paper, Structure decision logic, Encode into SKILL.md, then Predict-Run-Investigate-Modify. This lesson provides the Extract step and the Predict scenario. You do the rest.

## Extract (Provided)

The concept paper section on the Resume Screener typically says something like:

> The Resume Screener evaluates candidate CVs against job requirements. It scores each candidate across five dimensions: technical skills match, experience relevance, role-specific qualifications, cultural indicators, and career trajectory alignment. Scoring weights vary by role seniority. The screener must handle non-traditional backgrounds fairly, evaluating demonstrated ability rather than credentials. Output includes per-dimension scores, an overall weighted score, and a gap analysis showing where the candidate falls short.

**Requirements:**

1. Accept a CV and a job description (with scoring rubric) as input
2. Score candidates across five dimensions
3. Produce per-dimension scores, overall weighted score, and gap analysis
4. Handle non-traditional backgrounds fairly

**Decision Points:**

1. How to score "technical skills match" when the CV uses different terminology than the job description (e.g., CV says "React" but job says "frontend framework experience")
2. How to weight dimensions for different seniority levels
3. What score range to use (0-10? 1-5? percentage?)
4. How to evaluate "cultural indicators" objectively
5. What constitutes a "career gap" versus a "career transition"

**Edge Cases:**

1. Candidate with no formal degree but strong portfolio/GitHub
2. Candidate whose experience is in a different industry but transferable
3. CV is a single page with minimal detail
4. CV is 20 pages with irrelevant padding
5. Candidate who matches the role perfectly on paper but all experience is from one company

## Structure and Encode (Your Turn)

Apply Steps 2 and 3 of the transformation method yourself:

1. Convert at least 5 extracted items into When-Do-Because statements
2. Map them to Persona, Questions, and Principles
3. Write the complete SKILL.md

**Reference**: your Job Spec Writer skill from Lesson 4 is your format template. The Resume Screener's Persona should describe the same type of execution workflow (numbered steps, specific output format).

**Critical constraint**: the Resume Screener's INPUT format must match the Job Spec Writer's OUTPUT format from Lesson 4. This is the inter-FTE data contract. If the Job Spec Writer outputs a scoring rubric with dimensions and weights, the Resume Screener must read those dimensions and weights and use them.

## Predict

James wrote his Resume Screener skill. Here is his Persona section:

```markdown
# Persona

You are the Resume Screener for HireFlow. When you receive a
candidate CV and a job description with scoring rubric:

1. Parse the CV to extract skills, experience, education, and
   career timeline.
2. Score the candidate on each dimension from the job description's
   scoring rubric.
3. Produce per-dimension scores, a weighted overall score, and a
   gap analysis.
```

And his Questions section:

```markdown
# Questions

1. Does the CV contain enough information to score all dimensions?
2. What seniority level is this role?
3. Is the candidate's background traditional or non-traditional?
4. Are there career gaps?
```

And his Principles:

```markdown
# Principles

1. Score candidates fairly and consistently.
2. Handle non-traditional backgrounds well.
3. Produce useful output for the Interview Question Generator.
```

:::warning STOP AND PREDICT [AI-FREE]
Do not scroll ahead. Do not ask your AI assistant.

Two candidates apply for the "Senior Backend Engineer, Payments Team" role from Lesson 4:

**Candidate A**: CS degree, 8 years at Google, Python and PostgreSQL expert, payment API experience, two published papers on distributed systems.

**Candidate B**: Self-taught, 6 years freelancing, Python and PostgreSQL portfolio projects, built a payment processing system for a startup, active GitHub with 2000+ contributions, no formal degree.

Using James's skill above:

1. What score will Candidate A receive? What score will Candidate B receive?
2. Will the scores be consistent? (If you ran the skill twice on each candidate, would you get the same scores?)
3. What is wrong with James's Principles section?

Record your confidence (1-5).
:::

## Run

Test James's skill with both candidates.

**What typically happens**: the scores are inconsistent. Running the skill twice on Candidate B might produce 6/10 one time and 8/10 the next. The reason is in the Principles.

"Score candidates fairly and consistently" is not an enforceable rule. It is a wish. The skill has no calibration: no examples of what a 7/10 looks like, no specific handling for non-traditional backgrounds, no definition of "consistently."

"Handle non-traditional backgrounds well" is equally vague. Well how? By ignoring the missing degree? By weighting portfolio more heavily? By adding bonus points? The skill does not say.

This is the core mistake of Lesson 5: **vague scoring criteria produce inconsistent scores**. James's concept paper knows how to score candidates. But James did not encode that knowledge with enough specificity.

## Investigate

### Investigation 1: Scoring Variance

Test the skill 3 times on Candidate B. Record the scores:

| Run | Technical (0-10) | Experience (0-10) | Qualifications (0-10) | Cultural (0-10) | Trajectory (0-10) | Overall |
| --- | ---------------- | ----------------- | --------------------- | --------------- | ----------------- | ------- |
| 1   |                  |                   |                       |                 |                   |         |
| 2   |                  |                   |                       |                 |                   |         |
| 3   |                  |                   |                       |                 |                   |         |

If the scores vary by more than 1 point across runs, the skill lacks sufficient calibration. The cause: James's Principles are vague guidelines, not enforceable rules.

### Investigation 2: The Calibration Gap

Compare James's Principles with Emma's version:

**James's Principle 1**: "Score candidates fairly and consistently."

**Emma's Principle 1**:

```
Score each dimension on a 0-10 scale using these calibration anchors:
- 0-2: No evidence of this skill/experience in the CV
- 3-4: Mentioned but not demonstrated (listed in skills section
  without supporting project or role experience)
- 5-6: Demonstrated in a limited context (one project, one role,
  or coursework only)
- 7-8: Demonstrated across multiple contexts (2+ roles or projects
  with measurable outcomes)
- 9-10: Expert-level evidence (led teams, published work, or built
  production systems in this area)
```

The difference is calibration. Emma's version defines what each score range means. Two agents using Emma's version will produce scores within 1 point of each other because they are using the same anchor definitions.

**James's Principle 2**: "Handle non-traditional backgrounds well."

**Emma's Principle 2**:

```
Evaluate demonstrated ability, not credentials. When a candidate
lacks a formal degree:
- DO NOT penalize the Qualifications score for missing degree
- DO score based on equivalent evidence: portfolio projects,
  open-source contributions, certifications, or documented
  self-study
- DO add a note to the gap analysis: "Non-traditional background:
  evaluation based on demonstrated ability per HireFlow policy"
```

"That is specific enough that the agent cannot misinterpret it," Emma said. "My version tells the agent exactly what to do and what not to do. James's version tells the agent to be nice."

### Investigation 3: AI-Assisted

```
Compare these two sets of Principles for a Resume Screener skill:

Set A (James's):
1. Score candidates fairly and consistently.
2. Handle non-traditional backgrounds well.
3. Produce useful output for the Interview Question Generator.

Set B (Emma's):
1. Score each dimension on a 0-10 scale using calibration anchors:
   [the anchors above]
2. Evaluate demonstrated ability, not credentials. [rules above]
3. Output must include per-dimension scores (numeric), overall
   weighted score (numeric), gap analysis (list of dimensions
   scoring below 5), and a flag if the candidate is non-traditional.

For each principle in Set A:
1. What is ambiguous?
2. What could an agent misinterpret?
3. How does Set B resolve the ambiguity?
```

## Modify

:::tip PREDICT BEFORE RUNNING
Before running each modification, predict how Candidate B's scores will change. Write your prediction, then test.
:::

### Modification A: Add Calibration Anchors

Replace James's Principle 1 with Emma's calibration anchor version. Test with Candidate B three times. Is the variance reduced?

### Modification B: Add Non-Traditional Background Rules

Replace James's Principle 2 with Emma's specific version. Test with Candidate B. Does the score for the Qualifications dimension change? Does the gap analysis now include the "Non-traditional background" note?

Add one additional rule that your concept paper mentions but James missed. Test it.

## Your Updated Skill

After modifications, your Resume Screener skill should have:

- **Persona**: Execution workflow that reads the Job Spec Writer's scoring rubric as input
- **Questions**: 4-5 analysis questions including input validation
- **Principles**: At least 4 specific, enforceable rules with calibration anchors

Save the updated SKILL.md. The Resume Screener's output format becomes the Interview Question Generator's input format.

## Try With AI

### Prompt 1: Consistency Test

```
I wrote this Resume Screener skill:

[Paste your updated SKILL.md]

Score this candidate against this job description using my skill
exactly three times. Show me the per-dimension scores each time.

Candidate: [describe Candidate B]
Job description: [paste the Job Spec Writer output from Lesson 4]

After all three runs, calculate the variance per dimension.
If any dimension varies by more than 1 point, identify which
Principle is insufficiently specific.
```

**What you are learning**: How to measure scoring consistency. Variance above 1 point indicates a calibration gap. This test is one you should run on every scoring skill.

### Prompt 2: Edge Case: Career Transitioner

```
Using my Resume Screener skill, score this candidate:

A former high school teacher (12 years) who completed a coding
bootcamp, built 3 web applications, contributed to 2 open-source
projects, and has 1 year of professional software development
experience. Applying for a mid-level backend engineering role.

After scoring, tell me:
1. Did the skill handle the career transition appropriately?
2. Was the teaching experience counted as relevant experience?
3. What Principle guided the scoring decision?
4. Would you add a new Principle for career transitioners?
```

**What you are learning**: How skills handle ambiguous cases. Career transitioners are neither "non-traditional" nor "traditional" in the standard sense. Your skill may need a new Principle to handle this category.

### Prompt 3: Data Contract Check

```
My Job Spec Writer produces this output:
[Paste output format from Lesson 4]

My Resume Screener expects this input:
[Paste input expectations from your skill]

My Resume Screener produces this output:
[Paste output format from your skill]

The Interview Question Generator (Lesson 6) will need to:
- Know which dimensions the candidate scored low on
- Understand the role's key requirements
- Generate questions that probe the gaps

Is my Resume Screener's output format sufficient for the Interview
Question Generator? What fields should I add?
```

**What you are learning**: How to validate data contracts between FTEs. Getting this right now prevents rewriting in Lesson 6.
