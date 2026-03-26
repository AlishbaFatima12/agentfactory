---
sidebar_position: 5
title: "Meet HireFlow: Four FTEs, One Pipeline"
description: "Introduction to HireFlow, the AI-powered recruitment factory you will build across Part 6, with four Digital FTEs and SmartNotes as the note-taking system."
chapter: 61
lesson: 5
duration_minutes: 25
keywords:
  [
    HireFlow,
    Digital FTE,
    pipeline,
    recruitment,
    SmartNotes,
    NoteStore,
    agent factory,
  ]

skills:
  - name: "Digital FTE Concept"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Can describe the four HireFlow FTEs, their roles, and their data contracts"
  - name: "Domain Decomposition"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Can identify FTE roles and pipeline structure for a new business domain"

learning_objectives:
  - objective: "Name the four HireFlow Digital FTEs and describe what each one produces"
    proficiency_level: "B1"
    bloom_level: "Remember"
    assessment_method: "FTE table recall"
  - objective: "Trace data flow through the HireFlow pipeline from job spec to candidate brief"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Pipeline trace exercise"
  - objective: "Identify FTE roles and pipeline structure for a new business domain"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Domain decomposition exercise"

cognitive_load:
  new_concepts: 2
  assessment: "Low. HireFlow and Digital FTE are new terms, but the pipeline concept builds directly on Lessons 1-4."

differentiation:
  extension_for_advanced: "Design a fifth FTE for HireFlow that handles reference checking. Define its input contract, output contract, and verification gates."
  remedial_for_struggling: "Focus on the four FTEs and the pipeline diagram. Each FTE has one job. The output of one becomes the input of the next."
---

# Meet HireFlow: Four FTEs, One Pipeline

"Let me introduce you to the project you will build for the rest of Part 6," Emma said. She cleared the whiteboard and drew a pipeline: four boxes connected by arrows, left to right.

"This is **HireFlow**: an AI-powered recruitment factory. It takes a hiring manager's requirements and produces a shortlist of evaluated, interviewed, and summarized candidates. Four workers. One pipeline. Real business value."

James studied the diagram. "Four workers. Like my four chatbots from Lesson 2?"

"Like your four chatbots, except these have contracts, verification, governance, and orchestration. These are not chatbots. They are **Digital FTEs**."

## What Is a Digital FTE?

A **Digital FTE** (Full-Time Equivalent) is an AI agent that performs a complete job role, not a single task. The distinction matters.

A chatbot answers questions. A Digital FTE owns a responsibility.

| Chatbot                                  | Digital FTE                                               |
| ---------------------------------------- | --------------------------------------------------------- |
| Answers "What's this candidate's score?" | Screens every candidate, scores them, documents reasoning |
| Responds when asked                      | Runs when the pipeline triggers                           |
| Produces freeform text                   | Produces contracted output in a defined schema            |
| No accountability                        | Verified at every handoff                                 |
| No memory across interactions            | Maintains state across the pipeline run                   |

"Think of it in terms of your old job," Emma said. "A chatbot is like a coworker who answers questions when you walk up to their desk. A Digital FTE is like a coworker who owns a process end to end: receives work, processes it, hands off results, and can be held accountable for quality."

James nodded. "In supplier coordination, I was the FTE for vendor negotiations. I didn't just answer questions about vendors. I owned the process: evaluate proposals, negotiate terms, manage contracts, report outcomes."

"Same structure. Different workforce."

## The Four HireFlow FTEs

HireFlow's pipeline has four Digital FTEs. Each one owns one stage of the recruitment process.

### FTE 1: Job Spec Writer

| Field            | Value                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------- |
| **Role**         | Translates hiring manager requirements into structured job specifications                     |
| **Input**        | Raw requirements from hiring manager (freeform text, conversation notes)                      |
| **Output**       | `{ title: str, requirements: list[str], nice_to_have: list[str], scoring_rubric: dict }`      |
| **Verification** | All required fields present; scoring rubric covers all requirements; no hallucinated criteria |

The Job Spec Writer takes vague input ("I need a senior Python person who knows testing") and produces a structured specification that the rest of the pipeline can work with. It does not guess what the hiring manager wants. It asks clarifying questions until the specification is complete.

### FTE 2: Resume Screener

| Field            | Value                                                                                               |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| **Role**         | Evaluates candidate CVs against the job specification                                               |
| **Input**        | Job specification (from FTE 1) + candidate CVs (uploaded documents)                                 |
| **Output**       | `{ candidate_id: str, score: int, strengths: list[str], concerns: list[str], recommendation: str }` |
| **Verification** | Score between 0-100; strengths reference actual CV content; no hallucinated qualifications          |

The Resume Screener reads each CV, compares it against the scoring rubric from the Job Spec Writer, and produces a structured evaluation. It does not invent qualifications the candidate does not have. Every strength and concern must be traceable to specific CV content.

### FTE 3: Interview Question Generator

| Field            | Value                                                                                            |
| ---------------- | ------------------------------------------------------------------------------------------------ |
| **Role**         | Creates customized interview questions based on candidate profile and job requirements           |
| **Input**        | Job specification (from FTE 1) + screening results (from FTE 2)                                  |
| **Output**       | `{ candidate_id: str, questions: list[dict], focus_areas: list[str], estimated_duration: int }`  |
| **Verification** | Questions target identified concerns; difficulty matches candidate level; no duplicate questions |

The Interview Question Generator does not produce generic questions. It reads the screening results and creates questions that probe specific gaps or validate specific strengths. A candidate with strong Python but weak SQL gets SQL-focused questions. A candidate with broad experience but no testing background gets testing scenarios.

### FTE 4: Candidate Summarizer

| Field            | Value                                                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Role**         | Produces a comprehensive brief for the hiring committee                                                                         |
| **Input**        | All prior outputs (job spec, screening, questions) + interview notes (if available)                                             |
| **Output**       | `{ candidate_id: str, executive_summary: str, strengths: list[str], risks: list[str], recommendation: str, confidence: float }` |
| **Verification** | Summary consistent with screening scores; no contradictions between sections; confidence calibrated                             |

The Candidate Summarizer pulls everything together into a brief that a hiring manager can read in two minutes and make a decision. It does not introduce new information. Everything in the summary traces back to earlier pipeline outputs.

## The Pipeline

Data flows through HireFlow like a production line:

```
Hiring Manager's Requirements
        │
        ▼
┌─────────────────┐
│ Job Spec Writer  │ ──► Structured Job Specification
└────────┬────────┘
         │ (verified)
         ▼
┌─────────────────┐
│ Resume Screener  │ ──► Scored Candidate Evaluations
└────────┬────────┘
         │ (verified)
         ▼
┌──────────────────────────┐
│ Interview Question Gen.   │ ──► Customized Interview Packs
└────────┬─────────────────┘
         │ (verified)
         ▼
┌──────────────────────┐
│ Candidate Summarizer  │ ──► Decision-Ready Briefs
└────────┬─────────────┘
         │ (verified)
         ▼
Hiring Committee Reviews Briefs
```

Every arrow represents a handoff with a data contract. Every "(verified)" represents a verification gate that checks the output before passing it to the next stage. If any stage fails verification, the pipeline logs the failure and either retries, skips, or escalates to a human.

## SmartNotes Gets a Job

Remember `NoteStore` from Part 4? It gets a real role in HireFlow.

Throughout the pipeline, things need to be recorded: the hiring manager's initial conversation notes, the screening rationale for borderline candidates, interview observations, hiring committee annotations. These notes do not fit into the structured data contracts between FTEs. They are supplementary information that humans and agents reference during the process.

SmartNotes, through its `NoteStore` class, becomes HireFlow's note-taking system:

- `NoteStore.create()` records observations at each pipeline stage
- `NoteStore.search()` retrieves relevant notes when an FTE or a human needs context

In Chapter 83 (C23), you will integrate `NoteStore` with HireFlow's ChatKit interface so that hiring managers can annotate candidates, and those annotations become part of the pipeline's context. The code you wrote in Part 4 is not a toy. It is infrastructure.

## Applied Exercise: Domain Decomposition

You have seen how HireFlow decomposes recruitment into four FTE roles. This decomposition pattern applies to any business domain where a workflow can be broken into specialized stages with defined handoffs.

### Exercise 1: Trace the HireFlow Pipeline

A hiring manager says: "I need a senior data engineer who knows Apache Spark. We have 30 applications."

Trace through the pipeline:

1. What does the Job Spec Writer produce from this input?
2. What does the Resume Screener need from FTE 1's output to evaluate the 30 candidates?
3. If 8 candidates score above the threshold, what does the Interview Question Generator produce?
4. What does the Candidate Summarizer need from all three prior stages?

Write your answers before checking. The act of tracing builds your understanding of data contracts.

:::note Expected Trace

1. Job Spec Writer produces: title "Senior Data Engineer," requirements including Apache Spark, SQL, distributed systems; scoring rubric weighting Spark experience heavily.
2. Resume Screener needs: the scoring rubric to evaluate CVs consistently; produces 30 scored evaluations.
3. Interview Question Generator produces: 8 customized question packs; candidates with strong Spark get architecture questions; candidates with weak SQL get SQL scenarios.
4. Candidate Summarizer needs: job spec (context), screening scores (quantitative), interview questions (qualitative focus areas); produces 8 decision-ready briefs.
   :::

### Exercise 2: Decompose a New Domain

Pick one of these business domains (or choose your own):

- **Customer Support Factory**: handling support tickets from intake to resolution
- **Content Publishing Factory**: producing articles from pitch to publication
- **Loan Processing Factory**: evaluating applications from submission to decision

For your chosen domain:

1. **Identify 3-5 FTE roles.** Each one owns a complete stage, not a single task.
2. **Define the pipeline order.** Which FTE feeds into which?
3. **Write one data contract.** Pick the handoff between two FTEs and define the output schema: field names, types, constraints.
4. **Identify one verification gate.** What should be checked at that handoff?

:::tip Use Claude Code
After you have written your decomposition on paper, share it with Claude Code and ask: "What failure modes does this pipeline have? Where would you add verification gates?" Compare its analysis with yours.
:::

This exercise is a preview of Chapter 64, where you will write the full HireFlow Blueprint using a formal template. For now, the goal is to practice seeing a business domain as a pipeline of FTE roles with contracts.
