---
slug: /Business-Domain-Agent-Workflows/people-hr/job-descriptions-interview-prep
sidebar_position: 6
title: "Job Descriptions & Interview Preparation"
description: "Write candidate-first job descriptions with inclusive language and calibrated requirements — then design structured interview plans with competency-based questions and scoring rubrics — using /jd and /interview-prep"
keywords:
  [
    "people and hr",
    "hr operations",
    "hr agents",
    "job description",
    "jd",
    "inclusive language",
    "interview prep",
    "structured interview",
    "competency-based interview",
    "interview rubric",
    "talent acquisition",
    "recruiting",
  ]
chapter: 37
lesson: 6
duration_minutes: 45

# HIDDEN SKILLS METADATA
skills:
  - name: "Write Candidate-First Job Descriptions with Calibrated Requirements"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Content-Creation"
    measurable_at_this_level: "Student can use /jd to produce a job description that leads with the work (not the requirements), separates essential from beneficial requirements with no more than 5 essential items, passes the inclusive language check, and includes a salary range"

  - name: "Evaluate Job Descriptions for Inclusive Language and Requirement Calibration"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Information"
    measurable_at_this_level: "Student can identify gender-coded, age-coded, and overly specific language in a job description and rewrite flagged items using the /jd inclusive language check output as a guide"

  - name: "Design Structured Interview Plans with Competency Mapping and Scoring Rubrics"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can use /interview-prep to generate an interview plan that maps JD requirements to competencies, produces behavioural and situational questions for each competency, and includes a 1-4 scoring rubric with described performance levels"

learning_objectives:
  - objective: "Apply the four JD principles to critique a poorly written job description and identify its specific failures"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student analyses the 'bad JD' example, maps each failure to one of the four principles, and produces a written critique with specific rewrites for at least three problem areas"

  - objective: "Use /jd to write a job description that passes all four quality checks: candidate perspective, work-first structure, calibrated requirements, and inclusive language"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student invokes /jd, receives a JD with inclusive language check output, and verifies: lead with work (not requirements), essential list ≤5 items, no flagged exclusionary language, salary range included"

  - objective: "Use /interview-prep to design a structured interview plan with competency mapping, behavioural questions, and a 1-4 scoring rubric"
    proficiency_level: "B1"
    bloom_level: "Create"
    assessment_method: "Student generates an interview kit for the JD they wrote, confirming each JD requirement maps to at least one interview competency and each competency has a defined 1-4 rubric"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "Four JD Principles — candidate perspective first, lead with work, calibrate requirements, inclusive language by default"
    - "Essential vs Beneficial requirements — the essential/beneficial distinction with the five-item discipline"
    - "Inclusive language check — gender-coded, age-coded, and experience-specificity flags"
    - "Competency mapping — linking JD requirements to assessable interview competencies"
    - "Scoring rubric — 1-4 scale with described behaviours at each level (not just numbers)"
  assessment: "5 concepts, but three (the JD principles) are a cohesive framework that builds naturally. The jump to structured interviewing in the second half introduces two new concepts — competency mapping and rubric design — at the right moment: after the JD is established, the interview is the natural next step. Total load is manageable for an HR professional who already has intuitive knowledge of hiring that these concepts are structuring."

differentiation:
  extension_for_advanced: "Take a live job posting from your organisation or a public job board. Run it through the four JD principles: does it lead with work or requirements? Count the essential items — how many are genuinely essential versus beneficial? Run the inclusive language check using /jd. Then re-run /interview-prep to see whether the competencies in the current interview process actually map to the JD requirements. Many organisations have drifted — the interview tests things the JD does not mention, and vice versa."
  remedial_for_struggling: "Focus on one principle only: Essential vs Beneficial. Take a real JD you know and highlight everything listed as a requirement. For each item, ask: 'Could a highly capable person do this job without this?' If yes, move it to beneficial. Once you have practised the essential/beneficial discipline, the other three principles will follow more naturally."

teaching_guide:
  key_points:
    - "The most common JD failure is perspective: most JDs are written for the organisation's convenience, not the candidate's decision. A candidate decides to apply based on whether the work is interesting — they read the requirements to screen themselves out"
    - "Over-specification is the second biggest problem: listing 15 essential requirements is equivalent to listing none, because qualified candidates who lack 2-3 items self-select out. Research suggests [VERIFY] that women and underrepresented candidates are more likely to self-select out when they don't meet every listed requirement"
    - "/jd is the custom plugin (hr-operations) — /interview-prep is the official plugin (human-resources). Show both working together as a hiring workflow"
    - "Structured interviews with scoring rubrics dramatically reduce the impact of interviewer bias — the rubric forces the interviewer to describe observed behaviour at each score level, not to rely on 'gut feeling'"
  misconceptions:
    - "More requirements means a more precise hire. Correction: more requirements means fewer applicants, including many highly qualified ones who self-select out. The calibration test (could a highly capable person do this job without this?) eliminates this failure."
    - "Inclusive language is about avoiding obviously offensive terms. Correction: inclusive language extends to subtle exclusions — years-of-experience thresholds that predict tenure not ability, 'young and dynamic' that codes for age, 'startup experience required' that excludes candidates from large organisations without justification."
    - "A structured interview is just a list of prepared questions. Correction: structured means every candidate for the same role is asked the same questions in the same order, and every answer is scored against the same rubric. The structure is in the consistency, not just the preparation."
  discussion_prompts:
    - "Think about a job description you wrote or applied for. Was it written from the organisation's perspective or the candidate's? What was the ratio of requirements to work description?"
    - "What is the risk of having a strong interview process that tests competencies not mentioned in the JD? What does this signal to the candidate about the organisation's clarity of purpose?"
  teaching_tips:
    - "Start with the bad JD contrast — the juxtaposition is immediately recognisable to anyone who has used job boards. Let students identify the failures before naming the principles."
    - "The /jd plugin boundary note (custom vs official) is worth pausing on: students need to understand that two plugins are working together in this lesson, and which plugin owns which skill."
    - "Have students write one essential requirement and one beneficial requirement for a role they know well before running /jd. The discipline of articulating it manually first makes the AI-generated output more useful."
---

# Job Descriptions & Interview Preparation

When the EdTech company needed to hire a Senior Data Analyst — the role that Ayesha Raza was ultimately hired for — the first draft of the job description read like this:

_Senior Data Analyst — Finance & Analytics. Requirements: 7+ years of experience in data analytics. Expert SQL and Python. Tableau and Power BI required. Experience with dbt mandatory. Hadoop or Spark experience preferred. Fintech or edtech background essential. CFA or equivalent qualification advantageous. Strong communication skills. Must be a self-starter who can work in a fast-paced, dynamic environment. Rockstar data mindset with the ability to dominate complex analytical problems._

Fifteen requirements — nine listed as essential. A "rockstar" in the first sentence. "Dynamic environment" that codes for long hours. No salary range. No description of what the analyst would actually do. No mention of the team, the company's mission, or what success would look like.

Nobody with the right skills read that job description and thought, _I want this job_. Ayesha was hired through a referral, not through that posting.

The EdTech company's hiring team knew this. They had rewritten the JD — lead with the work, calibrate the requirements, remove the exclusionary language, add the salary range. The result was a job description that attracted three times as many qualified applicants. Ayesha applied because she read it and saw her future work, not a checklist she could not fully tick.

## The Four JD Principles

The gap between the first and second version of that job description is explained by four principles. Every job description either follows these principles or fails against one of them.

| Principle                             | What It Means                                                                                                                   | Common Failure                                                                                           |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Candidate perspective first**       | Write from "you will" not "responsible for" — the candidate asks "what will I do and why does it matter?"                       | Organisation-perspective writing: "The incumbent will be responsible for..."                             |
| **Lead with the work**                | Structure: Work → Impact → Requirements → Offer. Most JDs reverse this: requirements first, work buried at the bottom           | Candidate reads 15 requirements and stops before reaching the description of what the role actually does |
| **Calibrate requirements ruthlessly** | Separate Essential (absence makes the candidate unable to do the job) from Beneficial (nice-to-have). Maximum 5 essential items | "15 essential requirements" — most of which are beneficial masquerading as essential                     |
| **Inclusive language by default**     | Apply the inclusive language check to every JD automatically — gender-coded, age-coded, and experience-specificity flags        | "Rockstar", "ninja", "young and dynamic", "7+ years of [specific tool]"                                  |

### The Essential vs Beneficial Test

The most common JD failure after perspective is over-specification. The test for each requirement:

> _Could a highly capable candidate do this job well without this?_

If yes: Beneficial. If no: Essential.

Most JDs list 15 "essential" requirements. Most have three to five genuine ones. Over-specification deters qualified candidates — research suggests [VERIFY] that candidates from underrepresented groups are statistically more likely to self-select out when they do not meet every listed requirement.

| In the Original Bad JD                 | Classification After Test | Reason                                                                 |
| -------------------------------------- | ------------------------- | ---------------------------------------------------------------------- |
| Expert SQL and Python                  | **Essential**             | Core technical requirement — absence makes analysis impossible         |
| 7+ years of experience                 | **Beneficial**            | Predicts tenure, not analytical ability                                |
| Tableau and Power BI required          | **Beneficial**            | BI tool knowledge transfers; the underlying skill is what matters      |
| dbt mandatory                          | **Beneficial**            | Learnable; not absence-blocking                                        |
| Fintech or edtech background essential | **Beneficial**            | Domain knowledge helpful; analytical skills transfer across industries |
| Strong communication skills            | **Essential**             | Senior analyst must translate analysis for non-technical stakeholders  |

Result: 15 "essential" requirements reduced to 2 genuinely essential ones (SQL/Python, communication) — with a third debatable (data infrastructure familiarity). Everything else moves to Beneficial.

### Inclusive Language Flags

The `/jd` skill applies an inclusive language check to every output automatically — not as an optional step. The check flags:

| Flag Category              | Examples                                                                                                     | Why It Matters                                                                        |
| -------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| **Gender-coded masculine** | "rockstar", "ninja", "guru", "dominate", "aggressive growth", "crushing it"                                  | Research suggests [VERIFY] these terms reduce application rates from women            |
| **Age-coded**              | "young and dynamic", "digital native", "energetic young team", "recent graduate" (unless genuinely required) | Signals age preference that may violate employment law in most jurisdictions          |
| **Experience specificity** | "5 years of Python" instead of "proficiency in Python for data analysis"                                     | Excludes bootcamp graduates and career-changers who have the skill but not the tenure |
| **Culture-coded**          | "culture fit" without defined behaviours; "startup experience required" without justification                | Too vague to be useful; excludes candidates from large organisations unnecessarily    |

## Worked Example: Writing the Senior Data Analyst JD with `/jd`

The hiring team at the EdTech company uses `/jd` to write the version that attracted Ayesha.

**Invoke `/jd` with role context:**

```
/jd
Role: Senior Data Analyst
Department: Finance & Analytics
Company: EdTech company, ~250 people, Karachi HQ
The work: Own financial analytics and investor reporting. Lead day-to-day
delivery on our BI infrastructure — the dashboards our CFO and board rely on.
Partner with Finance, Product, and Engineering.
Team: 4 people; high autonomy; this is a replacement hire
Essential requirements: Strong analytical thinking; SQL proficiency; Python
for data analysis (pandas, numpy)
Beneficial: BI tools (Looker/Tableau/Power BI); edtech/fintech domain knowledge;
dbt or data modelling experience
Salary: PKR 180,000–230,000/month (hybrid, Karachi HQ 3 days)
Culture: Fast-moving, data-driven, high autonomy; direct stakeholder access
```

**Expected output structure:**

```
TASK:          Job Description — Senior Data Analyst
DOCUMENT TYPE: Job Description
JURISDICTION:  Pakistan
CONFIGURATION: hr.local.md loaded
SENSITIVITY:   ROUTINE

SENIOR DATA ANALYST — FINANCE & ANALYTICS
[Company Name] | Karachi, Hybrid | PKR 180,000–230,000/month

THE WORK

We are a fast-growing edtech company and we make decisions based on data.
As our Senior Data Analyst in the Finance & Analytics team, you will be
the person who turns our financial and operational data into the insights
that shape how we grow.

Your work will include:
- Owning our financial reporting infrastructure — the dashboards and models
  our CFO and investors rely on every quarter
- Leading our investor reporting process: designing, building, and maintaining
  the analyses that go to our board
- Identifying patterns in financial and operational data that surface
  opportunities and risks before they appear in the P&L
- Partnering with Finance, Product, and Engineering to ensure our data
  infrastructure supports decisions at every level of the company

This is a high-autonomy, high-impact role. You will work directly with
senior stakeholders; your analysis will directly influence how we allocate
capital and prioritise growth.

WHAT WE'RE LOOKING FOR

Essential:
  - Strong analytical thinking — you find the insight in complex data
    before others see the question
  - SQL proficiency — you write and optimise complex queries fluently
  - Python for data analysis — pandas, numpy; comfortable building
    repeatable analytical pipelines
  - Clear communication — you translate analysis into decisions for
    non-technical stakeholders

Beneficial (not required):
  - BI tools: Looker, Tableau, Power BI, or similar
  - Background in edtech, fintech, or SaaS
  - dbt or data modelling framework experience

We care more about how you think than the specific tools you have used.
If you have the analytical foundation, we will invest in the rest.

WHAT WE OFFER
  - PKR 180,000–230,000/month depending on experience
  - Hybrid working: Karachi HQ 3 days / remote 2 days
  - High autonomy; direct access to senior leadership
  - [Benefits per hr.local.md]

HOW TO APPLY
  [Application instructions]
  [Company Name] is an equal opportunity employer. We welcome applications
  from candidates of all backgrounds. If you require reasonable adjustments
  during the recruitment process, please let us know.

INCLUSIVE LANGUAGE CHECK:
  PASS — No gender-coded, age-coded, or experience-specificity flags found
  Essential requirements: 4 items (within the 5-item discipline)
  Salary range: Included (mandatory)
  Equal opportunities statement: Present
  Reasonable adjustments offer: Present
```

**What to verify in the output:**

| Check                  | What to Look For                                    | Action If Missing                                                |
| ---------------------- | --------------------------------------------------- | ---------------------------------------------------------------- |
| Work-first structure   | Does "THE WORK" section appear before requirements? | Reorder if requirements lead                                     |
| Essential count        | Are there 5 or fewer essential items?               | Challenge any item above 5 using the test                        |
| Salary range           | Is a specific range included (not "competitive")?   | Add range — this is mandatory                                    |
| Inclusive language     | Does the check pass with no flags?                  | Rewrite flagged items using the alternatives in the check output |
| Reasonable adjustments | Is the offer present in the HOW TO APPLY section?   | Add — required in most jurisdictions                             |

:::note Your output will vary
The JD structure and inclusive language check output will reflect the inputs you provide. The teaching point is the verification process: check the inclusive language output and the essential requirements count before publishing any JD. /jd applies the check automatically; your job is to review and act on the findings.
:::

## Interview Preparation with `/interview-prep`

A strong JD attracts the right candidates. A structured interview plan evaluates them consistently and fairly. The `/interview-prep` skill (official human-resources plugin) generates a complete interview kit from the JD — competency mapping, questions, and scoring rubric — ensuring the interview tests what the JD promised.

### Why Structured Interviews Matter

Unstructured interviews — different questions for each candidate, no scoring rubric, decision based on "impression" — are one of the most studied sources of hiring bias. Research suggests [VERIFY] that unstructured interviews have low predictive validity for job performance. Structured interviews, where every candidate is asked the same questions and scored on the same rubric, dramatically reduce the influence of irrelevant factors on hiring decisions.

**Invoke `/interview-prep` with the JD output:**

```
/interview-prep Senior Data Analyst

Using the job description for Senior Data Analyst (Finance & Analytics),
create a structured interview plan. Map each essential requirement to an
interview competency. Generate 2 behavioural questions and 1 situational
question per competency. Include a 1-4 scoring rubric for each competency
with described performance levels (not just numbers).
```

**Expected output structure:**

```
INTERVIEW KIT: Senior Data Analyst — Finance & Analytics

COMPETENCY MAP
JD Essential Requirement → Interview Competency

  Analytical thinking        → Analytical Problem-Solving
  SQL/Python proficiency     → Technical Proficiency
  Clear communication        → Stakeholder Communication
  [Add competency]           → Learning Agility (recommended — edtech context)

COMPETENCY 1: Analytical Problem-Solving

Behavioural questions (past evidence):
  Q1: "Tell me about the most complex data problem you have solved. Walk me
      through how you identified the problem, what you found in the data,
      and what decision your analysis informed."
      Follow-up: "What would you have done differently?"

  Q2: "Describe a time when your analysis revealed something that contradicted
      the leadership team's assumptions. How did you handle the conversation?"

Situational question (hypothetical):
  Q3: "You are three days before a board presentation and you discover a
      significant error in the financial model underlying your analysis.
      The model was built by a colleague. What do you do?"

Scoring rubric (1-4):
  4 — Exceeds: Structures problem systematically; uses evidence to challenge
      assumptions; proactively communicates findings including unwelcome ones
  3 — Meets: Identifies root cause accurately; communicates findings clearly
      to non-technical audiences; works independently through ambiguity
  2 — Developing: Follows established methods; needs guidance on structuring
      ambiguous problems; tends to surface findings after the fact
  1 — Below: Struggles to structure unscoped problems; analysis requires
      significant verification by others

[Repeat structure for each competency]

DEBRIEF TEMPLATE
After each interview, each interviewer records:
  - Score per competency (1-4) with one supporting evidence note
  - Hire / No hire / More data needed
  - Specific observation to discuss in debrief

Debrief agenda: Share scores independently before discussion.
Discuss divergences (≥2 point gap between interviewers on same competency).
Final decision by hiring manager with input from panel.
```

**What to verify in the interview kit:**

| Check                 | What to Look For                                                                              |
| --------------------- | --------------------------------------------------------------------------------------------- |
| Competency coverage   | Every essential JD requirement maps to at least one competency                                |
| Question type balance | Both behavioural ("tell me about a time") and situational ("how would you") questions present |
| Rubric specificity    | Each score level describes observable behaviour — not "good answer" vs "poor answer"          |
| Debrief structure     | Scores recorded independently before group discussion (prevents anchoring)                    |

## Exercise: Three JDs, One Interview Kit

**Type:** Applied Practice
**Time:** 40 minutes
**Plugin commands:** `/jd` (custom hr-operations plugin) + `/interview-prep` (official human-resources plugin)
**Goal:** Write three job descriptions at different seniority levels, run the inclusive language check on each, and generate one structured interview kit

### Step 1 — Choose Your Role Family

Select a role family from your own organisation or use the EdTech scenario:

- EdTech: Data Analyst (Junior / Mid / Senior)
- Alternative: Marketing Coordinator, Marketing Manager, Head of Marketing
- Your own: [Any role family with junior, mid, senior levels]

### Step 2 — Write Three JDs Using `/jd`

For each level, invoke `/jd` with the same role but different seniority expectations. Adjust:

- Essential requirements (fewer for junior; add strategic scope for senior)
- The work description (more supervised tasks for junior; stakeholder leadership for senior)
- The offer (salary range will differ by level)

Run the inclusive language check on each. Record the check output for each JD:

```
JD 1 (Junior): Inclusive language check result: [Pass / Flag]
JD 2 (Mid):    Inclusive language check result: [Pass / Flag]
JD 3 (Senior): Inclusive language check result: [Pass / Flag]
```

Fix any flags before proceeding.

### Step 3 — Audit the Essential Requirements

For each JD, count the essential items and run the test on any item you are uncertain about:

> _Could a highly capable candidate do this job well without this?_

Target: ≤5 essential items per JD. If you have more, move the excess to Beneficial.

### Step 4 — Generate an Interview Kit for the Senior Role

Using the Senior JD, invoke `/interview-prep`:

```
/interview-prep [Role Title — Senior]

Using the job description I just created, generate a structured interview
plan. Map each essential requirement to an interview competency. For each
competency: 2 behavioural questions, 1 situational question, and a 1-4
scoring rubric with described performance levels at each score. Include a
debrief template.
```

Verify that every essential requirement in your JD maps to at least one interview competency. If there is a gap, add a competency.

### Step 5 — Cross-Check for Alignment

The most common quality failure in hiring: the interview tests things the JD does not mention, and vice versa.

Run this check:

- Take each question in your interview kit
- Find the JD requirement it is testing
- If a question has no corresponding JD requirement, either add the requirement to the JD (if it is genuinely essential) or remove the question

**Deliverable:** Three job descriptions (Junior/Mid/Senior) that have passed the inclusive language check, with ≤5 essential requirements each, plus one structured interview kit for the Senior level with full competency mapping and scoring rubrics.

## Try With AI

:::tip Try With AI
Use these prompts in Cowork or your preferred AI assistant.

**Reproduce**: Write and check the Senior Data Analyst JD.

```
Write a job description for a Senior Data Analyst in a Finance & Analytics
team at a 250-person edtech company in Karachi. The role owns financial
analytics and investor reporting. Work hybrid (3 days Karachi HQ, 2 remote).
Salary: PKR 180,000–230,000/month.

Apply the four JD principles:
1. Write from the candidate's perspective ("you will" not "responsible for")
2. Lead with the work, not the requirements
3. Separate Essential (max 5) from Beneficial requirements using this test:
   could a highly capable person do this job without this?
4. Apply the inclusive language check automatically — flag any gender-coded,
   age-coded, or experience-specificity problems and rewrite them

At the end, summarise: how many essential requirements, any flags found
and how they were resolved.
```

**What you are learning:** Running all four JD principles simultaneously and seeing how they interact — the calibration test often reveals that items you would instinctively list as "essential" are actually beneficial, and the inclusive language check catches phrasing that feels natural but excludes qualified candidates.

**Adapt**: Apply to a role you are actively hiring for.

```
I am writing a job description for [role] at [company context].
The essential requirements are: [your list].
The beneficial requirements are: [your list].
Salary range: [range].

First, challenge my essential requirements list. For each item, ask:
could a highly capable candidate do this job without this? Move anything
that does not pass this test to beneficial.

Then write the full JD using the four principles. Run the inclusive
language check and fix any flags before showing me the output.
```

**What you are learning:** The essential/beneficial calibration is most powerful when applied to requirements you believe are essential — the discipline of justifying each item reveals assumptions about who can do the job that may not withstand scrutiny.

**Apply**: Design a bias-reducing interview plan for a role where bias is a known risk.

```
I am designing an interview process for a [role] where we have historically
hired candidates who are too similar to our existing team (same background,
same type of university, same previous company types).

Using the following JD essential requirements: [list from your JD],
design a structured interview plan that:
1. Maps each requirement to an interview competency
2. Generates 2 behavioural + 1 situational question per competency
3. Specifies a 1-4 rubric for each competency where EACH SCORE LEVEL
   describes observable behaviour (not just a number)
4. Includes a debrief structure that prevents anchoring — interviewers
   record scores independently before discussing

Then identify: which competency in the plan is most vulnerable to
interviewer bias even with a rubric, and what additional structure
would reduce that risk?
```

**What you are learning:** Structured interviews with rubrics reduce but do not eliminate bias — the most common remaining vulnerability is in competencies where "strong performance" is defined by familiarity rather than observable behaviour. Identifying that vulnerability and designing against it is the advanced application of structured hiring.
:::

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 7: Offer Letters & Employment Documents →](./07-offer-letters-employment-docs.md)
