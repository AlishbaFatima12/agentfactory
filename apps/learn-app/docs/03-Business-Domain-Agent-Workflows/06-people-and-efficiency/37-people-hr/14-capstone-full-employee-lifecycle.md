---
slug: /Business-Domain-Agent-Workflows/people-hr/capstone-full-employee-lifecycle
sidebar_position: 14
title: "Capstone: The Full Employee Lifecycle"
description: "Orchestrate every skill and agent from L01–L13 through a single employee's complete journey: hire, onboard, develop, promote, and offboard: producing a lifecycle folder that demonstrates what an AI-native HR operation looks like end to end"
keywords:
  [
    "people and hr",
    "hr operations",
    "hr agents",
    "employee lifecycle",
    "capstone",
    "hire to retire",
    "hr workflow",
    "onboarding",
    "performance review",
    "offboarding",
    "knowledge capture",
    "succession planning",
  ]
chapter: 37
lesson: 14
duration_minutes: 90

# HIDDEN SKILLS METADATA
skills:
  - name: "Orchestrate Multiple HR Skills Across the Full Employee Lifecycle"
    proficiency_level: "C1"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can select the correct skill for each lifecycle stage, invoke it with appropriate inputs, verify the output, apply the correct sensitivity label, and produce a coherent folder of six lifecycle documents that together represent a complete employee journey"

  - name: "Distinguish AI-Appropriate Tasks from Human-Judgment Tasks Across the HR Lifecycle"
    proficiency_level: "C1"
    category: "Soft"
    bloom_level: "Evaluate"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can identify, for each lifecycle stage, which elements the AI handled well, where human judgment was required, and what the specific failure mode would be if human oversight were removed"

  - name: "Apply Sensitivity Labels Correctly to a Mixed Portfolio of HR Documents"
    proficiency_level: "B2"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Safety"
    measurable_at_this_level: "Student can correctly classify each lifecycle document as ROUTINE or CONFIDENTIAL, identify which documents should never be auto-generated (SENSITIVE PERSONAL DATA), and explain the handling requirement for each"

learning_objectives:
  - objective: "Execute all six lifecycle stages using the correct plugin skill for each stage and produce a complete lifecycle document folder"
    proficiency_level: "C1"
    bloom_level: "Create"
    assessment_method: "Student produces six documents, JD, offer letter, onboarding plan, performance review, talent assessment, offboarding plan: each generated using the correct plugin command and each carrying the correct sensitivity label"

  - objective: "Identify, for each lifecycle stage, what the AI contributed and where human judgment was essential"
    proficiency_level: "C1"
    bloom_level: "Evaluate"
    assessment_method: "Student produces a written reflection with at least one specific AI contribution and one human judgment point for each of the six stages"

  - objective: "Apply the complete sensitivity framework across a mixed portfolio of lifecycle documents"
    proficiency_level: "B2"
    bloom_level: "Apply"
    assessment_method: "Student correctly labels each of the six documents with ROUTINE or CONFIDENTIAL and identifies which stages could produce SENSITIVE PERSONAL DATA that must not be auto-generated"

  - objective: "Identify configuration improvements to hr.local.md based on what the AI produced during the lifecycle exercise"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Student proposes at least two specific hr.local.md additions based on gaps or inconsistencies observed in the lifecycle outputs, e.g., jurisdiction-specific notice periods, probation period terms, escalation contacts"

cognitive_load:
  new_concepts: 1
  concepts_list:
    - "Lifecycle orchestration, selecting, sequencing, and integrating multiple skills across a continuous workflow rather than using them in isolation"
  assessment: "One new concept is intentional. This is a capstone lesson: every other concept was taught in L01-L13. The cognitive challenge is synthesis and judgment under realistic conditions, orchestrating tools you already know rather than learning new ones. The 90-minute exercise is demanding not because it introduces complexity but because it requires sustained application across six stages."

differentiation:
  extension_for_advanced: "After completing the capstone, write a 'lessons for next time' memo as if you were the CHRO reviewing the lifecycle retrospectively. What would you configure differently in hr.local.md? Which skill outputs required the most human editing and why? What is missing from the current plugin stack that a future version should include? This meta-reflection is the thinking that separates HR professionals who use AI tools from those who shape them."
  remedial_for_struggling: "If the full 90-minute sprint is too ambitious, run three of the six stages rather than all six. Choose Stage 1 (HIRE), Stage 2 (ONBOARD), and Stage 5 (OFFBOARD); they use the most skills and together tell a complete enough story. Write the reflection for only the stages you complete. The capstone is about integration, not completion: three well-executed stages with genuine reflection are more valuable than six rushed ones."

teaching_guide:
  key_points:
    - "The capstone is integration, not review. Students are not being tested on definitions; they are being tested on judgment: knowing which skill to reach for, what to feed it, and when to override its output."
    - "The sensitivity framework is the most important quality check in the capstone. Every document must be labelled. A student who produces all six documents but labels none of them has not understood a core chapter principle."
    - "The reflection is not optional. 'What did the AI do well?' and 'Where did it need human judgment?' are the most important questions in the lesson. The answers are what a CHRO needs to know before deploying this stack in a real organisation."
    - "hr.local.md is the persistent configuration that makes the stack jurisdiction-aware. A student who observes gaps in outputs and does not connect them to missing hr.local.md configuration has not understood the chapter's configuration layer."
  misconceptions:
    - "The capstone is about producing the most polished documents. Correction: it is about making the right decisions, which skill to use, when, and with what inputs. A student who produces a mediocre JD but correctly identifies what the skill got wrong and why has demonstrated more learning than one who produces a polished JD without understanding the process."
    - "Human judgment is needed only when the AI makes an error. Correction: human judgment is needed throughout. The AI produces a competent first draft of everything , but the hiring decision, the performance rating, the promotion call, and the knowledge transfer prioritisation are all human decisions that the AI informs but does not make."
  discussion_prompts:
    - "At which stage of the lifecycle did you feel most dependent on human judgment even though the AI tool was producing usable output? Why that stage?"
    - "If you configured hr.local.md well before starting this capstone, which outputs improved most? What does that tell you about the importance of configuration versus prompting?"
  teaching_tips:
    - "Run this as a live class sprint if possible. Have students share their lifecycle folders with a peer before the reflection. The peer review often surfaces gaps the author missed."
    - "The summary table at the end of the lesson, all 14 skills mapped to lifecycle stages: is a valuable class discussion anchor. Ask students to argue about which skills belong where, and why some skills appear in multiple stages."
---

# Capstone: The Full Employee Lifecycle

Ayesha Raza joined the EdTech company in Karachi eighteen months ago. She was hired as a Senior Data Analyst into Omar Farooq's team. She has been through an onboarding programme, her first performance review, a compensation benchmarking exercise, and now, as the company grows: a succession conversation about a leadership role that has opened up. And if, hypothetically, Ayesha were to leave two years from now, the offboarding and knowledge capture process would make sure the knowledge she accumulated did not leave with her.

Ayesha's journey is what the tools in this chapter were built for. Not individual isolated use-cases: a JD here, a performance review there , but a coherent, end-to-end workflow that uses the right tool at the right moment in a continuous relationship between an employee and an organisation.

This capstone lesson asks you to run that lifecycle yourself. You will play the role of the HR team supporting Ayesha's journey , or an employee from your own organisation, anonymised if needed. You will use every skill and agent in the chapter stack. And at the end, you will reflect on what the AI did well, where it needed human judgment, and what you would configure differently in `hr.local.md` if you were doing it again.

## The Skills and Agents in This Chapter

Before starting the lifecycle sprint, here is the complete map of what you have built across L01-L13.

### Official Plugin Skills (Anthropic `human-resources`)

| Command                | What It Does                                       | Lifecycle Stage                 |
| ---------------------- | -------------------------------------------------- | ------------------------------- |
| `/policy-lookup`       | Synthesise policies into plain-language summaries  | Continuous (L03)                |
| `/onboarding`          | Generate 30-60-90 onboarding plan                  | Stage 2: ONBOARD                |
| `/draft-offer`         | Draft offer letters and employment documents       | Stage 1: HIRE                   |
| `/interview-prep`      | Prepare interview questions and evaluation rubrics | Stage 1: HIRE                   |
| `/performance-review`  | Structure and draft performance reviews            | Stage 3: DEVELOP                |
| `/comp-analysis`       | Benchmark compensation at percentile bands         | Stage 1: HIRE, Stage 3: DEVELOP |
| `/org-planning`        | Model org structure changes                        | Stage 4: RETAIN/PROMOTE         |
| `/people-report`       | Generate headcount, attrition, diversity reports   | Stage 6: CONTINUOUS             |
| `/recruiting-pipeline` | Track and diagnose the recruiting funnel           | Stage 1: HIRE                   |

### Custom Plugin Skills (Panaversity `hr-operations`)

| Command      | What It Does                                        | Lifecycle Stage         |
| ------------ | --------------------------------------------------- | ----------------------- |
| `/jd`        | Write job descriptions with inclusive language      | Stage 1: HIRE           |
| `/match`     | Assess internal candidates for succession           | Stage 4: RETAIN/PROMOTE |
| `/knowledge` | Capture institutional knowledge                     | Stage 5: OFFBOARD       |
| `/reference` | Draft reference letters and employment verification | Stage 1–5 (on request)  |
| `/offboard`  | Structure the offboarding process                   | Stage 5: OFFBOARD       |

### Persistent Agents (Panaversity `hr-operations`)

| Agent                         | What It Does                                 | When It Runs                         |
| ----------------------------- | -------------------------------------------- | ------------------------------------ |
| `knowledge-base-agent`        | Answers employee HR questions 24/7           | Always-on                            |
| `onboarding-orchestrator`     | Runs pre-boarding through Day 90 workflow    | Triggered by HRIS new hire record    |
| `policy-maintenance-agent`    | Monitors policy currency and statutory rates | Monthly + on rate changes            |
| `offboarding-knowledge-agent` | Automates knowledge capture on resignation   | Triggered by HRIS resignation record |

## The Employee Lifecycle: Six Stages

The lifecycle follows Ayesha from before she joined to, hypothetically: the day she might leave. Each stage maps to the skills and agents you have already learned.

### Stage 1: HIRE

**Skills:** `/jd`, `/interview-prep`, `/comp-analysis`, `/draft-offer`
**Agents running in background:** `knowledge-base-agent` (answers candidate HR questions via recruiting channel if configured)

Before Ayesha could join, someone had to write a compelling job description for the Senior Data Analyst role. Someone had to prepare structured interview questions. Someone had to benchmark the salary to make sure the offer was competitive. And someone had to draft an offer letter that was accurate for Pakistan jurisdiction and reflected the company's actual benefits.

```
/jd Senior Data Analyst, EdTech company, Karachi, Pakistan

Department: Analytics (reports to Head of Analytics)
Level: Senior
Key responsibilities: [brief description]
Required skills: [list]
Nice-to-have: [list]
Inclusive language required: yes
Jurisdiction: Pakistan
```

Then:

```
/interview-prep Senior Data Analyst, EdTech, Karachi

Role: Senior Data Analyst
Level: Senior
Interview format: 3-stage (recruiter screen, technical, hiring manager)
Key competencies to assess: analytical thinking, technical skills (SQL, Python,
data visualisation), stakeholder communication, learning mindset
Jurisdiction: Pakistan
```

Then:

```
/comp-analysis Senior Data Analyst, Karachi, Pakistan

Company: EdTech, ~250 employees. Role is IC, no direct reports.
Market: Pakistan technology sector.
Provide percentile bands for base salary. Note internal equity consideration:
existing Data Analysts in team are at 150,000-170,000 PKR/month.
```

Finally:

```
/draft-offer Ayesha Raza, Senior Data Analyst

Company: EdTech company, Karachi, Pakistan
Jurisdiction: Pakistan (Employment Ordinance 1968, applicable provincial regulations)
Candidate: Ayesha Raza
Role: Senior Data Analyst
Start date: [Date]
Salary: 190,000 PKR/month
Probation: 3 months
Benefits: [list from hr.local.md]
Reporting to: Omar Farooq, Head of Analytics
```

**What runs automatically:** The `onboarding-orchestrator` triggers when Ayesha's new hire record appears in the HRIS. It begins the pre-boarding sequence: IT provisioning, system access requests, welcome email, pre-boarding task list.

**Sensitivity:** `/jd` output = ROUTINE. `/interview-prep` output = ROUTINE. `/comp-analysis` output = CONFIDENTIAL. `/draft-offer` output = CONFIDENTIAL.

### Stage 2: ONBOARD

**Skills:** `/onboarding`
**Agents running in background:** `onboarding-orchestrator` (pre-boarding → Day 1 → Day 30 → Day 60 → Day 90), `knowledge-base-agent` (Ayesha's Day 1 questions)

```
/onboarding Ayesha Raza, Senior Data Analyst

Role: Senior Data Analyst
Manager: Omar Farooq, Head of Analytics
Start date: [Date]
Team context: 3-person analytics team; EdTech product company
Key priorities in first 90 days: [list]
Jurisdiction: Pakistan
Tools/systems to access: [list]
30-day goal: [specific outcome]
60-day goal: [specific outcome]
90-day goal: [specific outcome]
```

The `/onboarding` skill produces a structured 30-60-90 plan with milestones, check-in points, and success criteria for each phase. The `onboarding-orchestrator` runs the logistics, task checklists, survey sends, manager reminder messages, automatically.

On Day 1, Ayesha has a question about how to book leave. She asks the `knowledge-base-agent`. It answers immediately with a plain-language summary and a link to the policy source. She does not need to message Sarah in HR.

**Sensitivity:** `/onboarding` output = ROUTINE (plan is not performance-sensitive; it describes the process, not the person).

### Stage 3: DEVELOP

**Skills:** `/performance-review`, `/comp-analysis`
**Agents running in background:** `knowledge-base-agent`, `policy-maintenance-agent`

After twelve months, Omar and Ayesha have her first formal performance review. Omar uses `/performance-review` to structure his thinking and draft the review document.

```
/performance-review Ayesha Raza, Year 1 Review

Role: Senior Data Analyst
Review period: 12 months
Manager: Omar Farooq
Company: EdTech, Karachi, Pakistan
Jurisdiction: Pakistan

Performance evidence:
- Led the customer analytics dashboard project (delivered on time, strong stakeholder feedback)
- Improved reporting pipeline efficiency (reduced run time from 4 hours to 45 minutes)
- Mentored two junior analysts on SQL optimisation techniques
- Identified data quality issue in revenue reporting, raised proactively

Development areas:
- External stakeholder presentations: capable but needs confidence at leadership level
- Strategic thinking: good at execution; developing ability to set the analytics agenda

Compensation review: salary at 190,000 PKR/month, below 50th percentile after 12 months
of inflation. Review appropriate.
```

After the review, Omar uses `/comp-analysis` to benchmark Ayesha's salary for the upcoming pay review, checking whether 190,000 PKR/month is still competitive after a year of market movement.

**Sensitivity:** `/performance-review` output = CONFIDENTIAL. `/comp-analysis` output = CONFIDENTIAL.

### Stage 4: RETAIN/PROMOTE

**Skills:** `/match`, `/org-planning`, `/comp-analysis`
**Agents running in background:** `knowledge-base-agent`

Eighteen months in, a Team Lead, Analytics opportunity opens. Omar wants to assess Ayesha as an internal candidate , but also has Bilal Ahmed in the picture.

This is the succession planning workflow from L09. Omar runs `/match` for both candidates, reviews the six-dimension output, has the succession conversation with Ayesha using the conditional pathway language ("if your trajectory continues, a leadership role becomes realistic"), and uses `/org-planning` to model what the analytics team looks like if Ayesha moves up.

**Sensitivity:** `/match` output = CONFIDENTIAL. `/org-planning` output = ROUTINE (structural model). Succession conversation notes = CONFIDENTIAL.

### Stage 5: OFFBOARD (if applicable)

**Skills:** `/offboard`, `/knowledge`
**Agents running in background:** `offboarding-knowledge-agent` (triggered by resignation record)

Three years later, hypothetically, Ayesha decides to pursue an opportunity elsewhere. She gives notice. The `offboarding-knowledge-agent` triggers immediately, generating a risk-calibrated knowledge capture plan based on her role, tenure, and the knowledge assets she holds.

HR uses `/offboard` to structure the process:

```
/offboard Ayesha Raza, Senior Data Analyst (now Team Lead Analytics)

Jurisdiction: Pakistan
Last day: [Date] (4 weeks notice)
Risk level: HIGH (leads analytics team; holds key stakeholder relationships;
  deep knowledge of revenue reporting architecture)
Systems to revoke: [list]
Knowledge at risk: customer analytics dashboard, revenue reporting pipeline,
  three key client analytics relationships
Handover: to [successor name or "TBD"]
```

And uses `/knowledge` to structure a knowledge capture interview before Ayesha leaves:

```
/knowledge Ayesha Raza, knowledge capture interview guide

Role: Team Lead Analytics (formerly Senior Data Analyst)
Tenure: 3 years
Exit date: [Date]
Time available: 3 sessions of 90 minutes each
Knowledge at risk:
  - Revenue reporting architecture (she designed it; not fully documented)
  - Customer analytics dashboard (she built it; team relies on her for edge cases)
  - Key client relationships: [list]
  - Analytics team processes (daily standup norms, escalation paths, tool access)
Output: structured knowledge base articles for each domain
```

**What runs automatically:** The `offboarding-knowledge-agent` sends the knowledge capture interview schedule, creates handover task checklists for Ayesha and her manager, and monitors completion.

**Sensitivity:** `/offboard` output = CONFIDENTIAL. `/knowledge` output = CONFIDENTIAL. Handover plan = CONFIDENTIAL.

### Stage 6: CONTINUOUS

**Skills:** `/people-report`, `/policy-lookup`
**Agents running in background:** All four, continuously

Throughout Ayesha's three years, the four persistent agents have been running:

- `knowledge-base-agent` answered her questions every time she had one, about leave, about benefits, about the promotion process
- `onboarding-orchestrator` ran her onboarding and will run for every hire after her
- `policy-maintenance-agent` ensured that the policies she read on Day 1 remained accurate as statutory rates changed
- `offboarding-knowledge-agent` is now capturing everything she knows before she leaves

And the CHRO has been running `/people-report` quarterly, seeing Ayesha's first year attrition cohort, tracking the team's engagement scores, watching for signals in the KB agent weekly report that point to issues before they become problems.

## The Lifecycle Sprint Exercise

**Type:** Capstone Practice
**Time:** 90 minutes
**Plugin commands:** All
**Goal:** Produce a complete employee lifecycle folder for one employee, real (anonymised) or fictional, using the correct skill for each stage

This exercise is one continuous workflow, not six isolated tasks. Work through the stages in order. The output of each stage informs the next.

### Setup (5 minutes)

Choose your employee:

- **Option A:** Use Ayesha Raza and the EdTech company (all details are in this lesson)
- **Option B:** Use a real employee from your organisation (anonymise the name and any identifying details)
- **Option C:** Create a fictional employee for a fictional company you define

Define:

- Employee name (or alias)
- Role and level
- Manager name
- Company: size, sector, location, jurisdiction
- Key career events: hire date, first review date, any promotion or succession event, exit date (real or hypothetical)

### Stage 1: HIRE (20 minutes)

Produce three documents:

1. **Job description:** Use `/jd`
2. **Interview plan:** Use `/interview-prep`
3. **Offer letter:** Use `/draft-offer` (benchmark salary first with `/comp-analysis` if you want to set a realistic figure)

Label each: ROUTINE or CONFIDENTIAL.

### Stage 2: ONBOARD (15 minutes)

Produce one document:

4. **30-60-90 onboarding plan:** Use `/onboarding`

Verify: does it include observable success criteria for each phase? Does it specify who is responsible for each milestone? Label: ROUTINE.

### Stage 3: DEVELOP (15 minutes)

Produce one document:

5. **Performance review:** Use `/performance-review`

Include: performance evidence, development areas, at least one specific competency rating with a rationale. Label: CONFIDENTIAL.

### Stage 4: RETAIN/PROMOTE (15 minutes)

Produce one document:

6. **Talent assessment:** Use `/match` to assess your employee against a leadership or next-level role

Include: six-dimension assessment, readiness classification, development plan if applicable. Draft the opening line of the succession conversation you would have (what you would say, using the conditional pathway language). Label: CONFIDENTIAL.

### Stage 5: OFFBOARD (10 minutes)

Produce two documents:

7. **Offboarding plan:** Use `/offboard`
8. **Knowledge capture interview guide:** Use `/knowledge`

Identify the top three knowledge risks (what this employee knows that is not documented elsewhere). Label both: CONFIDENTIAL.

### Deliverable

A lifecycle folder containing:

- 8 documents (JD, interview plan, offer letter, onboarding plan, performance review, talent assessment, offboarding plan, knowledge capture guide)
- Each document with the correct sensitivity label
- A one-paragraph reflection per stage: what did the AI do well, and where did it need human judgment?

:::note Keep This File
The lifecycle folder you build here is a portfolio artefact ; it demonstrates that you can operate an AI-native HR function end to end. It is also the reference point for Lesson 15's quick reference tables, which map every skill and agent to the stage where it appears in this lifecycle.
:::

## The Human Judgment Reflection

After completing the lifecycle sprint, answer these questions for each stage:

| Stage          | What the AI did well | Where human judgment was required |
| -------------- | -------------------- | --------------------------------- |
| HIRE           |                      |                                   |
| ONBOARD        |                      |                                   |
| DEVELOP        |                      |                                   |
| RETAIN/PROMOTE |                      |                                   |
| OFFBOARD       |                      |                                   |
| CONTINUOUS     |                      |                                   |

**Guiding questions for the reflection:**

- **HIRE:** Did the offer letter require editing for your specific jurisdiction? What did the JD get right about inclusive language, and what did it miss?
- **ONBOARD:** Did the 30-60-90 plan include observable success criteria, or did it list activities without outcomes? Which milestones required manager knowledge that the AI could not have?
- **DEVELOP:** How much editing did the performance review require? Where did the structured format help, and where did it produce generic output that only you could make specific?
- **RETAIN/PROMOTE:** What did the `/match` six-dimension framework surface that a gut-feel assessment might have missed? What did it miss that gut-feel might have caught?
- **OFFBOARD:** Did `/offboard` correctly identify all the knowledge risks? What tacit knowledge does your employee hold that a tool could not have known to ask about without your input?
- **CONTINUOUS:** What would the CHRO need to monitor about this employee's journey that the agent reports would not surface automatically?

## Configuration Reflection: What Would You Add to hr.local.md?

Based on what you observed during the lifecycle sprint, identify two or three things you would add to `hr.local.md` to improve the quality of future outputs:

```markdown
## hr.local.md improvements I would make

1. [Configuration gap observed]: [What I would add]
   Example: "The /draft-offer output used generic notice period language.
   I would add: notice_period_probation: "1 week" and
   notice_period_post_probation: "4 weeks" to the Pakistan section."

2. [Configuration gap observed]: [What I would add]

3. [Configuration gap observed]: [What I would add]
```

## The Complete Skill and Agent Map

Every skill and agent in the chapter, mapped to where it appeared in this lifecycle:

| Tool                          | Type           | Stage(s)                        | Lesson Taught |
| ----------------------------- | -------------- | ------------------------------- | ------------- |
| `/policy-lookup`              | Official skill | Continuous                      | L03           |
| `knowledge-base-agent`        | Custom agent   | Continuous (always-on)          | L04           |
| `/onboarding`                 | Official skill | Stage 2: ONBOARD                | L05           |
| `onboarding-orchestrator`     | Custom agent   | Stage 2: ONBOARD                | L05, L12      |
| `/jd`                         | Custom skill   | Stage 1: HIRE                   | L06           |
| `/interview-prep`             | Official skill | Stage 1: HIRE                   | L06           |
| `/draft-offer`                | Official skill | Stage 1: HIRE                   | L07           |
| `/reference`                  | Custom skill   | Stage 1-5 (on request)          | L07           |
| `/performance-review`         | Official skill | Stage 3: DEVELOP                | L08           |
| `/comp-analysis`              | Official skill | Stage 1: HIRE, Stage 3: DEVELOP | L09           |
| `/match`                      | Custom skill   | Stage 4: RETAIN/PROMOTE         | L09           |
| `/org-planning`               | Official skill | Stage 4: RETAIN/PROMOTE         | L09           |
| `/knowledge`                  | Custom skill   | Stage 5: OFFBOARD               | L10           |
| `/offboard`                   | Custom skill   | Stage 5: OFFBOARD               | L11           |
| `offboarding-knowledge-agent` | Custom agent   | Stage 5: OFFBOARD               | L11, L12      |
| `policy-maintenance-agent`    | Custom agent   | Continuous (monthly)            | L12           |
| `/people-report`              | Official skill | Stage 6: CONTINUOUS             | L13           |
| `/recruiting-pipeline`        | Official skill | Stage 1: HIRE                   | L13           |

This table is what an AI-native HR operation looks like: 9 official skills + 5 custom skills + 4 persistent agents, each in the right place, each handling the right part of the lifecycle. Not a replacement for HR judgment: a multiplier of it.

## Try With AI

:::tip Try With AI
Use these prompts in Cowork or your preferred AI assistant.

**Reproduce**: Run the full lifecycle sprint for Ayesha Raza using the scenario in this lesson.

```
I am going to run a full employee lifecycle exercise for one employee.
I will work through six stages and produce a document at each stage.

Employee: Ayesha Raza
Role: Senior Data Analyst (joining), later Team Lead Analytics (after promotion)
Manager: Omar Farooq, Head of Analytics
Company: EdTech company, ~250 people, Karachi, Pakistan
Jurisdiction: Pakistan

Start with Stage 1: HIRE.

Step 1: Write a job description for the Senior Data Analyst role.
Requirements: 3+ years experience, strong SQL and Python, experience with
BI tools (Tableau or Power BI), data engineering familiarity an asset.
Use inclusive language. Pakistan market.

Label the output with its sensitivity level (ROUTINE or CONFIDENTIAL).
Then pause and wait for me to confirm before moving to the next step.
```

**What you are learning:** Working stage by stage with a pause for review between each step teaches you to treat each skill output as a draft that requires human judgment before proceeding , not a finished document.

**Adapt**: Map the lifecycle to your own organisation's most recent hire.

```
I want to map the AI-native HR lifecycle to a recent hire in my organisation.

Employee: [Name or role, anonymise if needed]
Role: [Title and level]
Manager: [Name or role]
Company: [Brief description: size, sector, jurisdiction]
Timeline: Hired [date], current status [e.g., "12 months in, first review due"]

For each lifecycle stage below, tell me:
1. Which skill or agent I should use
2. What inputs it would need
3. What the primary human judgment moment is at that stage

Stages: HIRE, ONBOARD, DEVELOP, RETAIN/PROMOTE, OFFBOARD, CONTINUOUS
```

**What you are learning:** Mapping the lifecycle framework to a real hire makes abstract tools concrete. The "primary human judgment moment" question is the most valuable part ; it reveals where the AI is a tool that supports a decision versus the decision itself.

**Apply**: Design your organisation's AI-native HR playbook.

```
I want to design an AI-native HR playbook for my organisation.

Organisation context:
  - Size: [headcount]
  - Sector: [sector]
  - Jurisdiction(s): [primary locations]
  - HR team size: [number]
  - Current HR tools: [HRIS, ATS, etc.]

Using the hr-operations and human-resources plugin stack, design:
1. Which lifecycle stages are the highest priority to implement first (and why)
2. What hr.local.md configuration is needed for my jurisdiction
3. Which skills the HR team should learn in the first month
4. Which persistent agents to deploy first and in what sequence
5. What the HR team's workflow looks like 90 days after deployment

Be specific about what "AI-native HR" looks like for my organisation's size and context.
```

**What you are learning:** Designing a playbook for your own organisation forces you to sequence the implementation, which is harder than running all tools at once. Priority reveals what you actually believe about where the value is.
:::

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 15: Quick Reference & Central Insights →](./15-quick-reference-central-insights.md)
