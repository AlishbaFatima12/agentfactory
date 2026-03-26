---
sidebar_position: 4
title: "HireFlow's Complete Blueprint"
description: "The reference Factory Blueprint for HireFlow: role specifications, data contracts, human review gates, success criteria, and economic participation points"
chapter: 64
lesson: 4
duration_minutes: 25
keywords:
  [
    HireFlow,
    factory blueprint,
    role specification,
    data contract,
    human review gate,
    success criteria,
    economic participation,
  ]

skills:
  - name: "Blueprint Application"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Can fill in a Factory Blueprint Template for a defined business domain with complete role specs and data contracts"
  - name: "System Design"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Can identify verification criteria, failure modes, and data contract constraints for a multi-stage pipeline"

learning_objectives:
  - objective: "Read and interpret a complete Factory Blueprint with all seven sections"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Blueprint comprehension questions"
  - objective: "Identify the data contracts between any two adjacent FTEs in HireFlow"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Contract identification exercise"
  - objective: "Explain why each human review gate is placed where it is"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Gate justification exercise"

cognitive_load:
  new_concepts: 1
  assessment: "Medium. The only new concept is Failure Mode as a specification field. The rest applies the template from Lesson 3 to HireFlow, which was introduced in Chapter 61."

differentiation:
  extension_for_advanced: "Add a fifth FTE to HireFlow (Reference Checker) and integrate it into the blueprint with role spec, data contracts, human gate, and economic participation point."
  remedial_for_struggling: "Focus on one FTE at a time. Read the Job Spec Writer section completely before moving to the Resume Screener."
---

# HireFlow's Complete Blueprint

"Time to fill in the template," Emma said. "This is the reference document for everything you build in Part 6. Every skill, every MCP server, every database schema, every orchestrator will trace back to what you write here."

James opened the blank Factory Blueprint Template from Lesson 3. Seven sections. He started typing.

:::info Reference Document
This blueprint is the authoritative specification for HireFlow. Chapters 67 through 90 reference it. Keep it accessible as you work through Part 6.
:::

---

## Factory Blueprint: HireFlow

### 1. Domain Summary

**Workflow:** From hiring manager requirements to decision-ready candidate briefs through structured screening and evaluation.

**Business value:** Reduces time-to-hire by automating candidate screening, interview preparation, and summarization while keeping humans in the loop for specifications and final decisions.

**Users:** Hiring managers (provide requirements, review briefs), recruitment teams (monitor pipeline), hiring committees (make final decisions).

### 2. Workflow Map

```
Hiring Manager's Requirements
        │
        ▼
┌─────────────────┐
│ Job Spec Writer  │ ──► Structured Job Specification
└────────┬────────┘
         │
         ▼
    ◇ Gate 1: Spec Approval (hiring manager confirms)
         │
         ▼
┌─────────────────┐
│ Resume Screener  │ ──► Scored Candidate Evaluations
└────────┬────────┘
         │
         ▼
┌──────────────────────────┐
│ Interview Question Gen.   │ ──► Customized Interview Packs
└────────┬─────────────────┘
         │
         ▼
┌──────────────────────┐
│ Candidate Summarizer  │ ──► Decision-Ready Briefs
└────────┬─────────────┘
         │
         ▼
    ◇ Gate 2: Brief Review (hiring committee reviews)
         │
         ▼
Hiring Committee Makes Decision
```

"Notice the two diamonds," Emma said. "Those are the human review gates from Step 5. One at intake, one at output."

### 3. Role Specifications

#### FTE 1: Job Spec Writer

| Field               | Value                                                                                                                                                                                        |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Responsibility**  | Translates hiring manager requirements into a structured job specification with scoring rubric                                                                                               |
| **Input Contract**  | Raw requirements from hiring manager: freeform text, conversation notes, or structured form                                                                                                  |
| **Output Contract** | `JobSpec { title: str, requirements: list[str], nice_to_have: list[str], scoring_rubric: dict[str, int] }`                                                                                   |
| **Verification**    | All required fields present; scoring rubric covers every requirement; rubric weights sum to 100; no hallucinated criteria                                                                    |
| **Failure Mode**    | If requirements are ambiguous: generate clarifying questions and pause pipeline until answered. If requirements contradict: flag contradictions and escalate to hiring manager. Never guess. |

"This is deeper than Chapter 61," James said. "The Failure Mode section is new."

"Chapter 61 introduced the FTEs. This chapter specifies them. The difference is the same as the wish-vs-blueprint distinction: knowing the roles is not the same as defining their behavior at the edges."

#### FTE 2: Resume Screener

| Field               | Value                                                                                                                                                                                                                           |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Responsibility**  | Evaluates candidate CVs against the job specification's scoring rubric                                                                                                                                                          |
| **Input Contract**  | `JobSpec` (from FTE 1, verified) + `list[CandidateCV { candidate_id: str, cv_text: str }]`                                                                                                                                      |
| **Output Contract** | `list[ScreeningResult { candidate_id: str, score: int (0-100), strengths: list[str], concerns: list[str], recommendation: str }]`                                                                                               |
| **Verification**    | Score in range 0-100; every strength references specific CV content; every concern references specific CV content; no hallucinated qualifications; recommendation is one of `["strong_yes", "yes", "maybe", "no", "strong_no"]` |
| **Failure Mode**    | If CV is unparseable (image-only PDF, corrupted file): log error, skip candidate, include in pipeline report. If CV exceeds size limit: truncate to first N pages, log truncation. Never silently drop a candidate.             |

"I would have just written 'handles errors gracefully,'" James said.

"And then your agent would interpret 'gracefully' however it wants. One run it skips the candidate. The next run it retries indefinitely. The third run it crashes the pipeline. 'Gracefully' is a wish. 'Log error, skip candidate, include in pipeline report' is a specification."

#### FTE 3: Interview Question Generator

| Field               | Value                                                                                                                                                                                                                        |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Responsibility**  | Creates customized interview questions based on candidate profile and job requirements                                                                                                                                       |
| **Input Contract**  | `JobSpec` (from FTE 1) + `ScreeningResult` (from FTE 2, for candidates above score threshold)                                                                                                                                |
| **Output Contract** | `InterviewPack { candidate_id: str, questions: list[Question { text: str, focus_area: str, difficulty: str }], estimated_duration_minutes: int }`                                                                            |
| **Verification**    | Questions target identified concerns from screening; difficulty matches candidate level; no duplicate questions; estimated duration between 30-90 minutes                                                                    |
| **Failure Mode**    | If screening result has no concerns: generate questions from nice-to-have requirements. If candidate score is borderline: generate deeper probing questions. Never produce generic questions that ignore the screening data. |

#### FTE 4: Candidate Summarizer

| Field               | Value                                                                                                                                                                                                                             |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Responsibility**  | Produces a comprehensive brief for the hiring committee from all prior pipeline outputs                                                                                                                                           |
| **Input Contract**  | `JobSpec` (from FTE 1) + `ScreeningResult` (from FTE 2) + `InterviewPack` (from FTE 3) + optional `list[Note]` (from SmartNotes `NoteStore`)                                                                                      |
| **Output Contract** | `CandidateBrief { candidate_id: str, executive_summary: str (max 200 words), strengths: list[str], risks: list[str], recommendation: str, confidence: float (0.0-1.0) }`                                                          |
| **Verification**    | Summary consistent with screening score (no contradictions); every strength and risk traceable to earlier outputs; confidence calibrated (high score + no risks = high confidence; high score + many risks = lower confidence)    |
| **Failure Mode**    | If pipeline outputs contradict (screener says strong, questions reveal weakness): flag the contradiction explicitly in the brief. Never silently resolve contradictions. The hiring committee makes the call, not the summarizer. |

"The Candidate Summarizer receives SmartNotes data," James said. "That is the `NoteStore` from Part 4."

"Correct. In Chapter 83 (C23), you will integrate `NoteStore.create()` and `NoteStore.search()` with HireFlow's ChatKit interface. Hiring managers annotate candidates, and those annotations flow into the Summarizer as additional context. The code you wrote in Part 4 is not a toy. It is infrastructure."

### 4. Data Contracts

#### Job Spec Writer → Resume Screener

```
Schema: JobSpec
  title: str, required, max 200 characters
  requirements: list[str], required, min 1 item, max 20 items
  nice_to_have: list[str], optional, max 10 items
  scoring_rubric: dict[str, int], required, keys match requirements,
                  values are weights 1-100, weights sum to 100

Validation: hiring manager has approved via Gate 1
Example:
  title: "Senior Data Engineer"
  requirements: ["Apache Spark (3+ years)", "SQL proficiency", "Python"]
  nice_to_have: ["Kubernetes experience", "MLOps familiarity"]
  scoring_rubric: {"Apache Spark (3+ years)": 40, "SQL proficiency": 35, "Python": 25}
```

#### Resume Screener → Interview Question Generator

```
Schema: list[ScreeningResult]
  candidate_id: str, required, unique within batch
  score: int, required, range 0-100
  strengths: list[str], required, min 1, each references CV content
  concerns: list[str], optional, each references CV content
  recommendation: str, required, one of
    ["strong_yes", "yes", "maybe", "no", "strong_no"]

Filter: only candidates with score >= threshold (set in JobSpec) pass
Validation: score within range, recommendation matches score band
Example:
  candidate_id: "cand-0042"
  score: 78
  strengths: ["5 years Apache Spark at DataCorp", "Led SQL migration project"]
  concerns: ["No Python portfolio visible in CV"]
  recommendation: "yes"
```

#### Interview Question Generator → Candidate Summarizer

```
Schema: InterviewPack
  candidate_id: str, required, matches ScreeningResult.candidate_id
  questions: list[Question], required, 5-12 items
    Question.text: str, required
    Question.focus_area: str, required
    Question.difficulty: str, required, one of ["foundational", "intermediate", "advanced"]
  estimated_duration_minutes: int, required, range 30-90

Validation: at least one question per identified concern
Example:
  candidate_id: "cand-0042"
  questions: [
    {text: "Describe a Spark job that exceeded your cluster's memory...",
     focus_area: "Apache Spark", difficulty: "advanced"},
    {text: "Write a Python function to parse a CSV and filter rows...",
     focus_area: "Python", difficulty: "intermediate"}
  ]
  estimated_duration_minutes: 45
```

### 5. Human Review Gates

#### Gate 1: Job Specification Approval

| Field          | Value                                                                                    |
| -------------- | ---------------------------------------------------------------------------------------- |
| **Location**   | Between Job Spec Writer and Resume Screener                                              |
| **Trigger**    | Every pipeline run (all specifications require approval)                                 |
| **Decision**   | Hiring manager confirms: requirements accurate, rubric weights fair, no missing criteria |
| **Escalation** | If rejected: Job Spec Writer revises and resubmits. Pipeline pauses until approved.      |

#### Gate 2: Final Brief Review

| Field          | Value                                                                            |
| -------------- | -------------------------------------------------------------------------------- |
| **Location**   | After Candidate Summarizer, before hiring committee action                       |
| **Trigger**    | Every pipeline run (all briefs require review before decisions)                  |
| **Decision**   | Hiring committee reviews briefs: accurate, fair, complete, no contradictions     |
| **Escalation** | If rejected: flag specific issues; Candidate Summarizer revises affected briefs. |

### 6. Success Criteria

| Criterion                        | Target                          | Measurement Method                                    |
| -------------------------------- | ------------------------------- | ----------------------------------------------------- |
| Time to briefs                   | < 4 hours from approved spec    | Timestamp difference: spec approval to brief delivery |
| Score consistency                | Same candidate within ±5 points | Run same candidate through pipeline twice, compare    |
| Zero hallucinated qualifications | 0 per pipeline run              | Audit: every strength traceable to CV content         |
| Brief completeness               | All seven fields present        | Schema validation on Summarizer output                |
| Human gate response time         | < 24 hours per gate             | Timestamp difference: gate notification to decision   |

### 7. Economic Participation Points

| Point | Location         | Resource                        | Budget Constraint              | Status   |
| ----- | ---------------- | ------------------------------- | ------------------------------ | -------- |
| 1     | Resume Screener  | Background check API            | $5 per candidate, $500 per run | Designed |
| 2     | Job Spec Writer  | Salary benchmark API            | $2 per query, $20 per run      | Designed |
| 3     | Interview Q Gen. | Assessment platform integration | $10 per candidate              | Future   |

"All three are Designed or Future," James said. "HireFlow does not buy anything today."

"Correct. But in Chapter 84, when you build the orchestrator, you will add budget tracking infrastructure. These three points tell the orchestrator WHERE to track. The spending envelopes tell it WHEN to pause. Without this section, you would add budget tracking as an afterthought, and afterthought tracking always has gaps."

---

## What This Blueprint Enables

"Every chapter from here forward references this document," Emma said. "Here is the map."

| Blueprint Section      | Consumed By                                                        |
| ---------------------- | ------------------------------------------------------------------ |
| Role Specifications    | Ch 67 (agent skills), Ch 78-81 (FTE builds)                        |
| Data Contracts         | Ch 76 (database schemas), Ch 78-81 (FTE input/output)              |
| Human Review Gates     | Ch 82 (FastAPI endpoints), Ch 84 (orchestrator)                    |
| Success Criteria       | Ch 88 (TDD), Ch 89 (evals)                                         |
| Economic Participation | Ch 84 (budget tracking), Ch 87 (security), Ch 90 (capstone report) |

"That is twelve chapters that depend on this one document," James said.

"Which is why you write it before you write code. The blueprint is cheap to change. The code that builds on it is not."
