---
sidebar_position: 7
title: "Write the Candidate Summarizer Skill"
description: "Write the final HireFlow FTE skill independently: the Candidate Summarizer that aggregates all pipeline data into a hiring committee brief."
chapter: 67
lesson: 7
duration_minutes: 45
keywords:
  [
    candidate summarizer,
    independent build,
    data aggregation,
    recommendation logic,
    committee brief,
    inter-FTE pipeline,
  ]

skills:
  - name: "Independent Skill Writing"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can write a complete SKILL.md for an FTE without scaffolding by applying the transformation method, referencing prior skills as format templates"

  - name: "Designing Aggregation and Recommendation Logic"
    proficiency_level: "B2"
    category: "Technical"
    bloom_level: "Create"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can design a skill that aggregates outputs from multiple upstream FTEs and produces a structured recommendation with supporting evidence"

  - name: "Pipeline Data Contract Validation"
    proficiency_level: "B2"
    category: "Technical"
    bloom_level: "Evaluate"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can verify that all four HireFlow skills have compatible data contracts and the pipeline would function end-to-end"

learning_objectives:
  - objective: "Write the Candidate Summarizer SKILL.md independently using the transformation method without step-by-step guidance"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Student produces a complete SKILL.md with recommendation logic, conflicting signal handling, and risk flags"

  - objective: "Validate the complete HireFlow pipeline data contracts across all four FTE skills"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Student demonstrates end-to-end data flow from brief to committee brief with no contract mismatches"

cognitive_load:
  new_concepts: 2
  assessment: "2 concepts (recommendation logic, conflicting signal resolution) building on established patterns from L4-L6"

differentiation:
  extension_for_advanced: "Add a confidence score to the recommendation. How confident is the summarizer in its recommendation based on the strength of the evidence? Design a calibration scheme for confidence."
  remedial_for_struggling: "Focus on the aggregation workflow first. List every piece of data the Summarizer receives from the three upstream FTEs. Then decide what goes into the committee brief and what gets omitted."
---

# Write the Candidate Summarizer Skill

No scaffolding. No hints. No collapsible sections.

You have written three FTE skills. You know the transformation method. You know the SKILL.md format. You know how inter-FTE data contracts work.

Now write the Candidate Summarizer.

## What the Concept Paper Says

From your HireFlow concept paper:

> The Candidate Summarizer produces hiring committee briefs from all collected data. It aggregates the job description, screening scores, gap analysis, and interview questions into a decision-ready document. The brief must include a recommendation (proceed, hold, or reject), supporting evidence for the recommendation, identified risk factors, and any conflicting signals between screening scores and interview results. The committee brief must be concise enough to read in three minutes.

## What You Must Figure Out

This FTE is different from the others. It does not perform a single task (writing, scoring, generating). It aggregates. It synthesizes. It recommends.

The challenge: how do you encode recommendation logic in a skill? When should the agent recommend "proceed" versus "hold" versus "reject"? What happens when the screening scores say one thing and the interview preparation suggests another?

These are the decisions your skill must encode. The concept paper says "include a recommendation." Your skill must say how to arrive at that recommendation.

## Your Task

1. **Extract** from the concept paper section above
2. **Structure** into When-Do-Because statements
3. **Encode** into a complete SKILL.md
4. **Test** with the pipeline data you have built across Lessons 4-6

Consider these constraints:

**Input**: the Candidate Summarizer receives data from ALL three upstream FTEs:

- From Job Spec Writer: structured job description with scoring rubric
- From Resume Screener: per-dimension scores, overall score, gap analysis
- From Interview Q Generator: question set with scoring criteria

**Output**: a committee brief that includes:

- Candidate summary (2-3 sentences)
- Recommendation (proceed / hold / reject)
- Evidence supporting the recommendation
- Risk factors
- Conflicting signals (if any)
- Suggested next steps

**Critical decisions to encode**:

- What overall score threshold triggers "proceed" vs. "hold" vs. "reject"?
- How to handle conflicting signals (high screening score but gap analysis shows critical weaknesses)
- What to include vs. omit (the committee has 3 minutes; every sentence must earn its place)
- How to present risk factors without biasing the committee's decision

## Make

:::danger MAKE CHALLENGE [AI-FREE: SPEC ONLY]
Write the Candidate Summarizer SKILL.md independently.

Do not ask your AI assistant to write it. You may reference your Job Spec Writer, Resume Screener, and Interview Question Generator skills as format templates.

Your specification must include:

- Persona with execution workflow (numbered steps)
- Questions (at least 4 analysis questions)
- Principles (at least 4 enforceable rules including recommendation thresholds)
- Explicit input format (what data from each upstream FTE)
- Explicit output format (committee brief structure)
  :::

After writing your spec, test it:

```
Use my candidate-summarizer skill to produce a committee brief
for Candidate B (the self-taught developer) applying for the
Senior Backend Engineer, Payments Team role.

Use these upstream data:
- Job description: [from your Lesson 4 Job Spec Writer output]
- Screening scores: technical 7, experience 5, qualifications 4,
  cultural 6, trajectory 6, overall 5.6
- Gap analysis: qualifications gap (no degree), experience gap
  (freelance only)
- Interview questions: [from your Lesson 6 output]
```

Evaluate the committee brief:

1. Is the recommendation justified by the evidence?
2. Are risk factors presented without bias?
3. Could a hiring manager make a decision from this brief in 3 minutes?
4. Are conflicting signals (strong technical but weak qualifications) surfaced?

If the brief fails any of these checks, identify which Persona step, Question, or Principle needs improvement. Fix it and test again.

Save your final version:

```bash
mkdir -p .claude/skills/candidate-summarizer
```

## Pipeline Validation

You now have four SKILL.md files. Before moving to Chapter 68 (simulation), validate the complete pipeline.

### Data Flow Check

Trace the data through all four skills:

```
Hiring Manager Brief
    │
    ▼
Job Spec Writer ──► Job description + scoring rubric
    │
    ▼
Resume Screener ──► Scores + gap analysis
    │
    ▼
Interview Q Generator ──► Questions + scoring criteria
    │
    ▼
Candidate Summarizer ──► Committee brief + recommendation
```

For each arrow, verify:

1. The upstream skill's output format matches the downstream skill's expected input
2. No required fields are missing
3. No data types mismatch (e.g., score is a number, not "good" or "fair")

### Contract Mismatch Test

Ask Claude Code to audit all four skills:

```
Read all four HireFlow skill files:
- .claude/skills/job-spec-writer/SKILL.md
- .claude/skills/resume-screener/SKILL.md
- .claude/skills/interview-question-generator/SKILL.md
- .claude/skills/candidate-summarizer/SKILL.md

For each pair of connected skills (Job Spec Writer → Resume
Screener, Resume Screener → Interview Q Generator, Interview
Q Generator → Candidate Summarizer):

1. Does the output format of skill A match the input expectations
   of skill B?
2. Are there any fields that skill B expects but skill A does not
   produce?
3. Are there any fields that skill A produces but skill B ignores?

List every mismatch.
```

Fix any mismatches before proceeding to Chapter 68.

Commit your work:

```bash
git add .claude/skills/job-spec-writer/ \
       .claude/skills/resume-screener/ \
       .claude/skills/interview-question-generator/ \
       .claude/skills/candidate-summarizer/
git commit -m "Add four HireFlow FTE skills from Chapter 67"
```

## Try With AI

### Prompt 1: End-to-End Pipeline Test

```
Run the complete HireFlow pipeline for this brief:

"We need a junior frontend developer for the design systems team.
Must know React and CSS. Figma experience preferred. New grad
friendly."

Test candidate: "Recent CS graduate, 2 internships (both React),
strong Figma portfolio, no professional CSS experience beyond
coursework, active in open-source design system projects."

Run all four skills in sequence. Show me the data at each stage
and the final committee brief.

Flag any point where the pipeline produced unexpected results.
```

**What you are learning**: How the full pipeline behaves on a fresh input. End-to-end testing reveals issues that per-skill testing misses.

### Prompt 2: Adversarial Pipeline Test

```
Run the pipeline with this adversarial brief:

"Looking for someone. Good at stuff. Tech role. ASAP."

What does each skill do?
- Does the Job Spec Writer flag it for clarification?
- If the Job Spec Writer guesses, how does the pipeline degrade?
- At what point does the pipeline produce output that would
  embarrass us in front of a hiring committee?
```

**What you are learning**: How pipeline failures cascade. A weak first stage (vague brief not flagged) produces weak output at every subsequent stage. Your Principles at the Job Spec Writer level protect the entire pipeline.

### Prompt 3: Reflect on the Transformation Method

```
I just wrote four FTE skills using the Extract-Structure-Encode
transformation method. Looking back:

1. Which step was hardest for me? (Extract, Structure, or Encode?)
2. Which FTE skill was the most complex to write? Why?
3. What would I do differently if I started over?
4. What patterns did I notice across all four skills?

Help me articulate what I learned, not just what I built.
```

**What you are learning**: Metacognition. Understanding your own learning process helps you apply the transformation method faster next time, whether for HireFlow or a completely different domain.
