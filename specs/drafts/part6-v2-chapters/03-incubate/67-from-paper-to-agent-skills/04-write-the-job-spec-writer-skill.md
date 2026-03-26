---
sidebar_position: 4
title: "Write the Job Spec Writer Skill"
description: "Apply the transformation method to write the first HireFlow FTE skill, with full guided Predict-Run-Investigate-Modify cycle."
chapter: 67
lesson: 4
duration_minutes: 40
keywords:
  [
    job spec writer,
    SKILL.md,
    predict,
    run,
    investigate,
    modify,
    skill writing,
    transformation method,
  ]

skills:
  - name: "Applying the Transformation Method to a Real FTE"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can apply Extract-Structure-Encode to one concept paper section and produce a complete SKILL.md"

  - name: "Predicting Skill Behavior from Specification"
    proficiency_level: "B2"
    category: "Technical"
    bloom_level: "Analyze"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can predict what output a skill will produce before testing it and identify gaps between expected and actual behavior"

  - name: "Iterating on Skill Quality Through Investigation"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can diagnose why a skill produced unexpected output and identify specific instructions to add or modify"

learning_objectives:
  - objective: "Write a complete SKILL.md for the Job Spec Writer FTE using the Extract-Structure-Encode method"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Student produces a SKILL.md with Persona (execution workflow), Questions (4+ analysis questions), and Principles (3+ enforceable rules)"

  - objective: "Predict skill behavior, test it, and identify the gap between expected and actual output"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Student records prediction, runs skill, compares results, and identifies specific causes of discrepancy"

  - objective: "Improve skill specificity through targeted modifications based on investigation findings"
    proficiency_level: "B2"
    bloom_level: "Apply"
    assessment_method: "Student modifies skill instructions and demonstrates measurable improvement in output quality"

cognitive_load:
  new_concepts: 4
  assessment: "4 concepts (Predict-before-test habit for skills, skill testing workflow, specificity diagnosis, iterative improvement) within B2 limit"

differentiation:
  extension_for_advanced: "After completing the guided modifications, design a fourth modification that addresses an edge case you discovered during investigation. Test it independently."
  remedial_for_struggling: "Focus on the Persona section first. Write a complete execution workflow before adding Questions and Principles. Test the Persona alone, then add components one at a time."
---

# Write the Job Spec Writer Skill

You have the transformation method. You have the SKILL.md format. Now you write a real skill.

This lesson walks you through every step. You will Extract from the concept paper, Structure decision logic, Encode it into a SKILL.md, then test it using the Predict-Run-Investigate-Modify cycle. By the end, you will have a working Job Spec Writer skill for HireFlow.

Lessons 5 through 7 follow the same process for the remaining three FTEs, with decreasing guidance each time. This lesson is your reference pattern.

## Step 1: Extract from the Concept Paper

Open your HireFlow concept paper from Chapter 65. Find the section about the Job Spec Writer. If your concept paper does not have a dedicated section per FTE, use the Blueprint from Chapter 64 instead.

Here is what a typical concept paper section says about the Job Spec Writer:

> The Job Spec Writer receives hiring manager briefs and transforms them into structured job descriptions. Each description includes the role title, team context, key responsibilities, required qualifications, preferred qualifications, and a scoring rubric. The scoring rubric must align with the stated requirements so the Resume Screener can use it as scoring input. Briefs vary in quality: some hiring managers provide detailed requirements, others provide a single sentence. The Job Spec Writer must handle both extremes.

Apply the Extract step:

**Requirements:**

1. Accept hiring manager briefs as input
2. Produce structured job descriptions with six sections
3. Generate a scoring rubric aligned to requirements
4. Produce output usable by the Resume Screener

**Decision Points:**

1. How to handle vague briefs (fewer than 3 requirements)
2. How to determine required vs. preferred qualifications
3. How to generate scoring dimensions from free-text requirements
4. What seniority level the role targets (affects rubric weights)
5. What "professional enough for posting" means concretely

**Edge Cases:**

1. Brief with contradictory requirements
2. Brief with only one sentence
3. Brief using internal jargon or acronyms
4. Brief requesting a role that mixes two distinct job functions

## Step 2: Structure Decision Logic

Convert extracted items into When-Do-Because statements:

```
1. WHEN a hiring manager brief contains fewer than three explicit
   requirements,
   DO flag the brief as "needs clarification" and generate three
   specific questions to ask the hiring manager,
   BECAUSE producing a job description from insufficient requirements
   leads to inaccurate scoring and wrong candidates.

2. WHEN a requirement uses the phrase "must have" or "required,"
   DO classify it as a required qualification,
   WHEN a requirement uses "nice to have," "preferred," or
   "ideally,"
   DO classify it as a preferred qualification,
   WHEN a requirement uses neither marker,
   DO classify it as required by default and note the assumption,
   BECAUSE the Resume Screener weights required and preferred
   qualifications differently in scoring.

3. WHEN generating the scoring rubric,
   DO create one scoring dimension per explicit requirement, assign
   each dimension a weight between 0.1 and 0.5 with all weights
   summing to 1.0, and weight technical dimensions higher for junior
   roles and leadership dimensions higher for senior roles,
   BECAUSE the Resume Screener needs numeric weights to produce
   consistent candidate scores.

4. WHEN the brief contains contradictory requirements,
   DO flag both requirements, explain the contradiction, and ask
   the hiring manager which one takes priority,
   BECAUSE resolving contradictions requires human judgment about
   which requirement matters more for the specific team.

5. WHEN the brief uses internal acronyms or jargon,
   DO expand the acronym in the job description and add a note
   asking the hiring manager to verify the expansion,
   BECAUSE public job postings must be readable by external
   candidates who do not know internal terminology.
```

## Step 3: Encode into SKILL.md

Now James writes the complete skill. Here is his first attempt:

```markdown
---
name: job-spec-writer
description: Transforms hiring manager briefs into structured job
  descriptions with scoring rubrics for the HireFlow recruitment
  pipeline.
---

# Persona

You are the Job Spec Writer for HireFlow. When you receive a
hiring manager brief:

1. Parse the brief to identify role title, team context,
   requirements, and seniority level.
2. Classify each requirement as required or preferred based on
   language markers ("must have" = required, "nice to have" =
   preferred, unmarked = required by default).
3. Generate a structured job description with six sections:
   title, team context, responsibilities, required
   qualifications, preferred qualifications, and scoring rubric.
4. Build the scoring rubric with one dimension per requirement,
   weights summing to 1.0, adjusted by seniority level.
5. Validate that the output contains all six sections and the
   rubric has at least three dimensions.

Output format:

- role_title: string
- team_context: string (2-3 sentences)
- responsibilities: list of strings (5-8 items)
- required_qualifications: list of strings
- preferred_qualifications: list of strings
- scoring_rubric: list of {dimension, weight, description}

# Questions

Before writing the job description, analyze the brief:

1. How many explicit requirements does this brief contain?
   (Fewer than three = flag for clarification.)
2. What seniority level is this role? (Junior, mid, senior,
   lead.) This determines rubric weight distribution.
3. Does the brief use any internal jargon or acronyms that
   external candidates would not understand?
4. Are there any contradictory requirements?
   (e.g., "10 years experience" AND "entry-level")

# Principles

1. Never guess missing requirements: if the brief has fewer
   than three requirements, generate specific clarification
   questions instead of inventing requirements. A wrong guess
   costs more than a follow-up question.
2. Never resolve contradictions: present both sides and ask
   the hiring manager. Contradictions require human judgment
   about team priorities.
3. Always produce a scoring rubric: the Resume Screener
   depends on numeric dimensions and weights. A job description
   without a rubric breaks the pipeline.
4. Expand all jargon: every acronym must be expanded in the
   public-facing description. Flag expansions for hiring
   manager verification.
```

## Predict

Before testing this skill, make a prediction.

:::warning STOP AND PREDICT [AI-FREE]
Do not scroll ahead. Do not ask your AI assistant.

James receives this hiring manager brief:

> "We need a backend engineer for the payments team. Must know Python
> and PostgreSQL. Experience with payment processing is a plus.
> Senior level."

Using the Job Spec Writer skill above:

1. What six sections will the output contain?
2. How many scoring dimensions will the rubric have?
3. What weights will the rubric assign? (Will Python and PostgreSQL
   be weighted equally?)
4. Will "payment processing" be classified as required or preferred?

Record your confidence (1-5): 1=no idea, 5=certain.

Write your prediction before continuing.
:::

## Run

Test the skill. Create the skill directory and file:

```bash
mkdir -p .claude/skills/job-spec-writer
```

Save the SKILL.md content from Step 3. Then test with the payments team brief:

```
Use the job-spec-writer skill to process this hiring manager brief:

"We need a backend engineer for the payments team. Must know Python
and PostgreSQL. Experience with payment processing is a plus.
Senior level."
```

Compare the output to your prediction.

**Expected output** (approximate):

The skill should produce all six sections. The scoring rubric should contain at least three dimensions: Python proficiency, PostgreSQL proficiency, and payment processing experience. Since the brief says "must know" for Python and PostgreSQL, those should be required qualifications. "Experience with payment processing is a plus" should be preferred.

For a senior role, the rubric should weight leadership and system design dimensions higher. But the brief does not mention leadership or system design. This is where the skill must decide: add dimensions not in the brief, or stick to what the brief says?

**If your prediction matched**: your understanding of the skill's decision logic is well calibrated.

**If your prediction was wrong about classification**: the skill's language markers (Step 2, statement 2) determined the classification. "Must know" = required. "A plus" = preferred. Re-read the Questions section.

**If your prediction was wrong about rubric weights**: the skill adjusts weights by seniority. For senior roles, it should weight architectural or leadership dimensions higher. But if the brief only mentions technical skills, the skill faces an ambiguity not covered by its current instructions.

## Investigate

### Investigation 1: The Missing Dimensions Problem

The brief says "Senior level" but only lists technical requirements (Python, PostgreSQL, payment processing). The scoring rubric should reflect seniority by including dimensions like "system design experience" or "mentorship capability." But the concept paper never told the agent to ADD dimensions not present in the brief.

This is a **Specification Error**: the skill correctly follows its instructions, but the instructions are incomplete.

:::info ERROR TYPE
**Category:** Specification Error
**What happened:** The skill produced a rubric with only the dimensions mentioned in the brief. For senior roles, additional dimensions (system design, leadership, mentorship) are expected but the skill has no instruction to add them.
**Caught by:** Manual review of rubric completeness for senior roles.
**Verification Rung:** Rung 1 (Predict-Run habit)
:::

The fix: add a rule to the Principles section about seniority-based dimension injection.

### Investigation 2: Trace the Decision Flow

Trace how the skill processes the brief:

| Step | Action                | Input                          | Output                                                 | Notes                                                          |
| ---- | --------------------- | ------------------------------ | ------------------------------------------------------ | -------------------------------------------------------------- |
| 1    | Parse brief           | Raw brief text                 | role=backend engineer, team=payments, seniority=senior |                                                                |
| 2    | Classify requirements | "Must know Python"             | required: Python                                       | "Must know" triggers required                                  |
| 3    | Classify requirements | "Must know PostgreSQL"         | required: PostgreSQL                                   | Same trigger                                                   |
| 4    | Classify requirements | "payment processing is a plus" | preferred: payment processing                          | "A plus" triggers preferred                                    |
| 5    | Generate rubric       | 2 required, 1 preferred        | 3 dimensions                                           | Missing seniority dimensions                                   |
| 6    | Assign weights        | Senior role, 3 dimensions      | ?                                                      | What weights for a senior role with only technical dimensions? |
| 7    | Validate              | 6 sections, 3 dimensions       | Pass                                                   | Minimum 3 met, but is it good?                                 |

Step 6 reveals the gap. The skill says "weight technical dimensions higher for junior roles and leadership dimensions higher for senior roles." But there are no leadership dimensions. The rule cannot be applied.

### Investigation 3: AI-Assisted Analysis

Ask Claude Code to critique the skill:

```
Read the SKILL.md file at .claude/skills/job-spec-writer/SKILL.md.

Test it with these three briefs and identify inconsistencies:

Brief 1: "We need a backend engineer for the payments team. Must
know Python and PostgreSQL. Senior level."

Brief 2: "Need someone for the data team. Good with numbers.
Should be analytical."

Brief 3: "Looking for a senior engineering manager to lead the
platform team. Must have 8+ years of engineering experience,
3+ years managing teams of 5+, track record of delivering
large-scale distributed systems, and experience with cloud
infrastructure (AWS or GCP). Strong communicator who can work
with product and design. MBA preferred."

For each brief:
1. What scoring dimensions does the skill produce?
2. Are the weights appropriate for the role?
3. What is missing from the output?
```

Compare Claude Code's analysis with your trace table. Where do they agree? Where do they disagree?

## Modify

:::tip PREDICT BEFORE RUNNING
Before running each modification, predict what will change in the output for the payments team brief. Write your prediction, then test and compare.
:::

### Modification A (Simple): Add Seniority Dimension Injection

Add this rule to the Principles section:

```markdown
5. Inject seniority-appropriate dimensions: for senior roles, add
   "system design" and "technical leadership" dimensions to the
   rubric even if the brief does not mention them. For lead roles,
   add "team management" and "stakeholder communication." These
   dimensions reflect expectations that hiring managers assume but
   do not always state.
```

Test with the payments team brief. The rubric should now have 5 dimensions instead of 3.

### Modification B (Medium): Add Output Quality Validation

The current validation only checks that all six sections exist and the rubric has at least three dimensions. Add a more thorough validation step to the Persona:

```markdown
6. Validate output quality:
   - Responsibilities list contains 5-8 items (fewer suggests
     an incomplete understanding; more suggests scope creep)
   - Each responsibility starts with an action verb
   - Scoring rubric weights sum to exactly 1.0
   - Required qualifications list has at least 2 items
   - No jargon remains unexpanded
```

Test with Brief 2 from the Investigation ("Need someone for the data team. Good with numbers. Should be analytical."). This brief is vague. The skill should flag it for clarification. After adding the quality validation, does the skill catch the vagueness?

### Modification C (Advanced): Handle Mixed-Function Roles

Add this to both Questions and Principles:

**Question 5:**

```
5. Does this brief describe a single role or a combination of
   two distinct functions? (e.g., "developer AND project manager"
   or "designer AND frontend engineer")
```

**Principle 6:**

```
6. Split mixed-function roles: if the brief describes two distinct
   job functions, produce two separate job descriptions and ask
   the hiring manager which one to proceed with. A single role
   trying to do two jobs produces a job description that attracts
   no one who is excellent at either.
```

Test with this brief: "We need a full-stack developer who also manages the QA team and handles customer support escalations." The skill should recognize this as a mixed-function role.

## Your Updated Skill

After all three modifications, your Job Spec Writer skill should have:

- **Persona**: 6-step workflow including quality validation
- **Questions**: 5 analysis questions
- **Principles**: 6 enforceable rules

Save this updated version. You will reference it in the remaining lessons as the quality benchmark for your other three FTE skills.

## Try With AI

### Prompt 1: Stress-Test Your Skill

```
I wrote this SKILL.md for the Job Spec Writer:

[Paste your complete, modified SKILL.md]

Stress-test it with these adversarial briefs:

1. A one-word brief: "Engineer"
2. A brief with ten contradictory requirements
3. A brief written entirely in abbreviations: "Need Sr. FE dev w/
   exp in RN, TS, GQL, CI/CD, K8s, AWS. ASAP."
4. A brief that describes a role that does not exist: "AI Ethics
   Compliance Officer for Quantum Computing Division"

For each brief, show me exactly what the skill would produce.
Identify which Principle handles the situation and whether any
gap exists.
```

**What you are learning**: How to stress-test skills before relying on them. Adversarial inputs reveal gaps that normal inputs hide.

### Prompt 2: Compare with a Colleague's Approach

```
I built a Job Spec Writer skill with this approach:

Persona: [summarize your workflow]
Key principles: [list your top 3 rules]

Imagine a colleague built a different version with:
- No classification of required vs. preferred (treats everything
  as required)
- No seniority-based weight adjustment
- No vague brief detection

For the same hiring brief ("backend engineer, payments team,
Python, PostgreSQL, senior"), compare both versions:
1. What would each version produce?
2. Where would the outputs differ?
3. Which differences matter for the Resume Screener downstream?
```

**What you are learning**: Why specificity matters in practice. The less specific version "works" for simple cases but produces inferior input for the next FTE in the pipeline.

### Prompt 3: Prepare for the Resume Screener

```
My Job Spec Writer skill produces this output format:

[Paste your output format from the Persona]

The Resume Screener will receive this as input.

What information does the Resume Screener need from this output
to score candidates effectively? Is anything missing from my
output format that the Resume Screener would need?

Design the data contract between Job Spec Writer and Resume
Screener: what fields are mandatory, what format must they be in,
and what happens if a field is missing?
```

**What you are learning**: How to design inter-FTE data contracts. The output of this lesson becomes the input specification for Lesson 5. Getting the contract right here prevents debugging in the next lesson.
