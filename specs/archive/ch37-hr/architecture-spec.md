# Chapter 37: People & HR — Architecture Specification

## 1. Two-Plugin Architecture

This chapter uses **two plugins** — zero naming collisions:

### Official Plugin: `human-resources` (Anthropic, 9 skills)

```
Source: https://github.com/anthropics/knowledge-work-plugins/tree/main/human-resources
Install: Cowork → Customize → Browse plugins → "Human Resources"
```

| Skill               | Command                | Function                                     |
| ------------------- | ---------------------- | -------------------------------------------- |
| policy-lookup       | `/policy-lookup`       | Find and explain policies in plain language  |
| onboarding          | `/onboarding`          | Generate onboarding plans and schedules      |
| draft-offer         | `/draft-offer`         | Draft offer letters and employment documents |
| interview-prep      | `/interview-prep`      | Prepare interview questions and rubrics      |
| performance-review  | `/performance-review`  | Structure performance reviews                |
| comp-analysis       | `/comp-analysis`       | Compensation analysis and benchmarking       |
| org-planning        | `/org-planning`        | Organisational planning and restructuring    |
| people-report       | `/people-report`       | People analytics and reporting               |
| recruiting-pipeline | `/recruiting-pipeline` | Recruiting pipeline management               |

### Custom Plugin: `hr-operations` (Panaversity, 5 skills + 4 agents)

```
Source: https://github.com/panaversity/agentfactory-business-plugins
Install: Cowork → Customize → + → Add marketplace from GitHub → panaversity/agentfactory-business-plugins → "hr-operations"
```

| Skill     | Command      | Function                                      | Sensitivity  |
| --------- | ------------ | --------------------------------------------- | ------------ |
| jd        | `/jd`        | Job descriptions with inclusive language      | ROUTINE      |
| match     | `/match`     | Internal talent matching and succession       | CONFIDENTIAL |
| knowledge | `/knowledge` | Institutional knowledge capture               | CONFIDENTIAL |
| reference | `/reference` | Reference letters and employment verification | CONFIDENTIAL |
| offboard  | `/offboard`  | Offboarding processes and knowledge transfer  | CONFIDENTIAL |

| Agent                       | Function                                      | Trigger                      |
| --------------------------- | --------------------------------------------- | ---------------------------- |
| knowledge-base-agent        | 24/7 employee HR Q&A with escalation          | Always-on (Slack/Teams)      |
| onboarding-orchestrator     | New hire workflow automation (T-14 to Day 90) | HRIS new hire record         |
| policy-maintenance-agent    | Policy currency + statutory rate monitoring   | Monthly + rate change events |
| offboarding-knowledge-agent | Departure knowledge capture automation        | HRIS resignation record      |

### Configuration

| File          | Purpose                                                                   |
| ------------- | ------------------------------------------------------------------------- |
| `hr.local.md` | Organisation-specific config (jurisdiction, policies, contacts, benefits) |

### What Is NOT in the Custom Plugin

The following are covered by the official plugin and must NOT be duplicated:

- `/onboarding` (use official `/onboarding`)
- `/policy-lookup` (use official `/policy-lookup`)
- `/draft-offer` (use official `/draft-offer`)
- `/performance-review` (use official `/performance-review`)
- `/comp-analysis` (use official `/comp-analysis`)
- `/org-planning` (use official `/org-planning`)
- `/people-report` (use official `/people-report`)
- `/recruiting-pipeline` (use official `/recruiting-pipeline`)
- `/interview-prep` (use official `/interview-prep`)
- No router skill — 5 custom skills have distinct trigger phrases and need no routing layer
- No jurisdiction overlays — `hr.local.md` handles jurisdiction via config sections

---

## 2. Chapter Directory Skeleton

```
apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/37-people-hr/
├── README.md
├── 01-institutional-memory-problem.md
├── 01-institutional-memory-problem.flashcards.yaml
├── 01-institutional-memory-problem.summary.md
├── 02-hr-operations-stack.md
├── 02-hr-operations-stack.flashcards.yaml
├── 02-hr-operations-stack.summary.md
├── 03-policy-lookup-self-service.md                    ← REFERENCE LESSON
├── 03-policy-lookup-self-service.flashcards.yaml
├── 03-policy-lookup-self-service.summary.md
├── 04-hr-knowledge-base-agent.md
├── 04-hr-knowledge-base-agent.flashcards.yaml
├── 04-hr-knowledge-base-agent.summary.md
├── 05-onboarding-first-90-days.md
├── 05-onboarding-first-90-days.flashcards.yaml
├── 05-onboarding-first-90-days.summary.md
├── 06-job-descriptions-interview-prep.md
├── 06-job-descriptions-interview-prep.flashcards.yaml
├── 06-job-descriptions-interview-prep.summary.md
├── 07-offer-letters-employment-docs.md
├── 07-offer-letters-employment-docs.flashcards.yaml
├── 07-offer-letters-employment-docs.summary.md
├── 08-performance-reviews.md
├── 08-performance-reviews.flashcards.yaml
├── 08-performance-reviews.summary.md
├── 09-compensation-talent-org.md
├── 09-compensation-talent-org.flashcards.yaml
├── 09-compensation-talent-org.summary.md
├── 10-institutional-knowledge-capture.md
├── 10-institutional-knowledge-capture.flashcards.yaml
├── 10-institutional-knowledge-capture.summary.md
├── 11-offboarding-knowledge-transfer.md
├── 11-offboarding-knowledge-transfer.flashcards.yaml
├── 11-offboarding-knowledge-transfer.summary.md
├── 12-persistent-agents-orchestrator-maintenance.md
├── 12-persistent-agents-orchestrator-maintenance.flashcards.yaml
├── 12-persistent-agents-orchestrator-maintenance.summary.md
├── 13-people-analytics-agent-operations.md
├── 13-people-analytics-agent-operations.flashcards.yaml
├── 13-people-analytics-agent-operations.summary.md
├── 14-capstone-full-employee-lifecycle.md
├── 14-capstone-full-employee-lifecycle.flashcards.yaml
├── 14-capstone-full-employee-lifecycle.summary.md
├── 15-quick-reference-central-insights.md
├── 15-quick-reference-central-insights.flashcards.yaml
├── 15-quick-reference-central-insights.summary.md
└── 16-chapter-quiz.md
```

Total: 15 lessons × 3 files (lesson + flashcards + summary) + README + quiz = 48 files

---

## 3. Plugin Directory Skeleton

```
hr-operations/
├── .claude-plugin/
│   └── plugin.json
├── skills/
│   ├── jd/
│   │   └── SKILL.md
│   ├── match/
│   │   └── SKILL.md
│   ├── knowledge/
│   │   └── SKILL.md
│   ├── reference/
│   │   └── SKILL.md
│   └── offboard/
│       └── SKILL.md
├── agents/
│   ├── knowledge-base-agent.md
│   ├── onboarding-orchestrator.md
│   ├── policy-maintenance-agent.md
│   └── offboarding-knowledge-agent.md
├── evals/
│   ├── cases.yaml
│   └── run.py
├── hr.local.md.template
├── README.md
└── LICENSE
```

Total: 14 files (5 skills + 4 agents + evals/2 + template + README + LICENSE + plugin.json)

---

## 4. YAML Frontmatter Template

Every lesson uses this frontmatter pattern (from Ch 35 reference):

```yaml
---
slug: /Business-Domain-Agent-Workflows/people-hr/{slug}
sidebar_position: { N }
title: "{Title}"
description: "{One-line description — what the student walks away with}"
keywords:
  ["people and hr", "hr operations", "hr agents", "{lesson-specific keywords}"]
chapter: 37
lesson: { N }
duration_minutes: { N }

# HIDDEN SKILLS METADATA
skills:
  - name: "{Skill description — verb phrase}"
    proficiency_level: "{A1|A2|B1|B2|C1|C2}"
    category: "{Conceptual|Technical|Applied|Soft}"
    bloom_level: "{Remember|Understand|Apply|Analyze|Evaluate|Create}"
    digcomp_area: "{Problem-Solving|Content-Creation|Communication|Safety|Information}"
    measurable_at_this_level: "{Observable assessment — what the student can DO}"

  - name: "{Second skill}"
    proficiency_level: "{level}"
    category: "{category}"
    bloom_level: "{level}"
    digcomp_area: "{area}"
    measurable_at_this_level: "{assessment}"

learning_objectives:
  - objective: "{Verb + observable outcome}"
    proficiency_level: "{level}"
    bloom_level: "{level}"
    assessment_method: "{How to verify the student can do this}"

  - objective: "{Second objective}"
    proficiency_level: "{level}"
    bloom_level: "{level}"
    assessment_method: "{verification method}"

cognitive_load:
  new_concepts: { N }
  concepts_list:
    - "{concept 1}"
    - "{concept 2}"
  assessment: "{Why this concept count is manageable at this lesson position}"

differentiation:
  extension_for_advanced: "{Research/extension task for advanced students}"
  remedial_for_struggling: "{Simplified focus for students who need it}"

teaching_guide:
  key_points:
    - "{Point 1}"
    - "{Point 2}"
  misconceptions:
    - "{Common error and correction}"
  discussion_prompts:
    - "{Open question for class discussion}"
  teaching_tips:
    - "{Practical tip for instructors}"
---
```

---

## 5. Lesson Section Structure Template

Every lesson follows this structure (from Ch 35 L03 reference):

```markdown
# {Title}

{Opening narrative — 2-3 paragraphs with a concrete scenario. Use case study
characters. Establish the problem before introducing the solution.}

## {Section 1: The Framework/Concept}

{Core concept with tables, examples, concrete data.}

## {Section 2: Worked Example}

{Step-by-step walkthrough using case study characters. Show the skill
command input and expected output.}

## {Section 3: Using /command-name}

{How the plugin skill automates or supports this workflow.
Show the command invocation and what to verify in the output.}

:::note Your output will vary
{Explain that exact wording depends on input. The teaching point is
the framework/logic, not the exact phrasing.}
:::

## Exercise: {Exercise Title}

**Type:** {Configuration | Applied Practice | Process Design | etc.}
**Time:** {N} minutes
**Plugin command:** `/command-name`
**Goal:** {One sentence — what the student walks away with}

### Step 1 — {Action}

### Step 2 — {Action}

### Step N — {Action}

**Deliverable:** {Specific artifact the student has created}

:::note Keep This File
{If this exercise is referenced by later lessons, say so here.}
:::

## Try With AI

:::tip Try With AI
**Reproduce**: {Simple application of what was just learned}
```

{Copyable prompt}

```

**What you are learning:** {One sentence connecting prompt to skill}

**Adapt**: {Modify to student's own context}

```

{Copyable prompt}

```

**What you are learning:** {Connection}

**Apply**: {Extend to a new situation not directly covered}

```

{Copyable prompt}

```

**What you are learning:** {Connection}
:::

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson {N+1}: {Title} →](./{slug}.md)
```

---

## 6. Try With AI Pattern

Three-tier: **Reproduce → Adapt → Apply**

| Tier      | Purpose                                            | Complexity                            |
| --------- | -------------------------------------------------- | ------------------------------------- |
| Reproduce | Apply what was just learned to a simple case       | Low — straightforward application     |
| Adapt     | Modify the scenario to match student's own context | Medium — requires contextual thinking |
| Apply     | Extend to a new situation not directly covered     | High — creative application           |

Each prompt must be in a code block (copyable) and followed by "What you are learning:" (one sentence).

---

## 7. Exercise Format Template

```markdown
## Exercise: {Title}

**Type:** {Type}
**Time:** {N} minutes
**Plugin command:** `/command-name`
**Goal:** {One sentence}

### Step 1 — {Verb phrase}

{Instructions — specific, actionable}

### Step 2 — {Verb phrase}

{Instructions}

### Step N — {Verb phrase}

{Instructions}

**Deliverable:** {Specific artifact}
```

---

## 8. Source-to-Output Mapping

| Spec Section                                   | Lesson(s)       | Content                                            |
| ---------------------------------------------- | --------------- | -------------------------------------------------- |
| Introduction: The Institutional Memory Problem | L01             | Three HR functions, governing insight              |
| The HR Plugin Architecture                     | L02             | Both plugins installed, hr.local.md configured     |
| Part Two: Policy Synthesis                     | L03 (reference) | /policy-lookup skill, plain-language summaries     |
| Part Six: HR Knowledge Base Agent              | L04             | knowledge-base-agent, query workflow, escalation   |
| Part One: Employee Onboarding                  | L05             | /onboarding, 30-60-90 framework                    |
| Part Four: Job Descriptions                    | L06             | /jd (custom) + /interview-prep (official)          |
| Part Three: Offer Letters                      | L07             | /draft-offer (official) + /reference (custom)      |
| Part Five: Performance Reviews                 | L08             | /performance-review (official)                     |
| Part Seven: Talent Matching + comp + org       | L09             | /comp-analysis + /match (custom) + /org-planning   |
| Part Eight: Institutional Knowledge            | L10             | /knowledge (custom), knowledge capture workflow    |
| Offboarding + knowledge agent                  | L11             | /offboard (custom) + offboarding-knowledge-agent   |
| Agents: orchestrator + maintenance             | L12             | onboarding-orchestrator + policy-maintenance-agent |
| People analytics + agent operations            | L13             | /people-report + /recruiting-pipeline + monitoring |
| Chapter exercises (all)                        | L14             | Capstone — full employee lifecycle                 |
| Quick Reference + Chapter Summary              | L15             | Command tables, config reference, central insight  |

---

## 9. Writer-to-Scope Assignment Table

| Writer                | Lessons            | Focus                                           | Plugin Source | Key Deliverables                                               |
| --------------------- | ------------------ | ----------------------------------------------- | ------------- | -------------------------------------------------------------- |
| **reference-builder** | L03                | Reference lesson: policy lookup                 | Official      | Gold-standard lesson format                                    |
| **writer-foundation** | L01, L02, L15      | Bookends: problem framing + install + reference | Both          | Opening narrative, install guide, quick reference              |
| **writer-process**    | L05, L06, L07, L08 | Process execution skills                        | Both          | Onboarding, JDs, offers, performance reviews                   |
| **writer-knowledge**  | L04, L10, L11, L12 | Agents + knowledge capture                      | Custom        | KB agent, knowledge capture, offboarding, persistent agents    |
| **writer-synthesis**  | L09, L13, L14      | Analytics + capstone                            | Both          | Compensation/talent, people analytics, full lifecycle capstone |

---

## 10. Plugin Skill/Agent Naming and Structure

### Skills (5 total)

Each skill lives in `skills/{name}/SKILL.md` with YAML frontmatter:

```yaml
---
name: { name }
description: >
  {15+ trigger phrases for auto-activation}
argument-hint: "{hint for user}"
---
```

| Skill Name | Command      | Trigger Phrase Examples                                                                                                                                                                                                                                                                                       |
| ---------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| jd         | `/jd`        | job description, JD, job posting, role description, job advert, vacancy description, write a job description, improve job description, inclusive job description, job requirements, role requirements, hiring, recruiting, talent acquisition, position description, role profile                             |
| match      | `/match`     | talent match, internal mobility, internal candidate, succession planning, who should be promoted, internal promotion, talent pipeline, high potential, HIPO, development plan for promotion, readiness assessment, role fit, candidate assessment internal, compare candidates, talent review, career pathway |
| knowledge  | `/knowledge` | institutional knowledge, knowledge capture, knowledge transfer, knowledge base article, preserve knowledge, departing employee knowledge, exit knowledge, tacit knowledge, undocumented knowledge, knowledge interview, knowledge extraction, document what we know, knowledge at risk                        |
| reference  | `/reference` | reference letter, employment reference, character reference, professional reference, write a reference, employment verification, verify employment, salary verification, reference request, letter of recommendation, factual reference, HR reference                                                         |
| offboard   | `/offboard`  | offboarding, exit process, resignation, leaver, departing employee, employee leaving, last day, exit interview, notice period, handover plan, knowledge handover, departure checklist, systems access removal, final paycheck, exit documentation                                                             |

### Agents (4 total)

Each agent is a single `.md` file in `agents/` with YAML frontmatter:

```yaml
---
name: { agent-name }
description: >
  {what it does and trigger phrases}
mcp-integrations: { systems it connects to }
sensitivity: { ROUTINE | CONFIDENTIAL }
---
```

| Agent                       | Schedule                               | Background | Sensitivity                                          |
| --------------------------- | -------------------------------------- | ---------- | ---------------------------------------------------- |
| knowledge-base-agent        | Always-on                              | true       | ROUTINE (queries) / ESCALATE (individual situations) |
| onboarding-orchestrator     | Event-triggered (HRIS)                 | true       | CONFIDENTIAL                                         |
| policy-maintenance-agent    | Monthly (1st Monday) + event-triggered | true       | ROUTINE                                              |
| offboarding-knowledge-agent | Event-triggered (HRIS resignation)     | true       | CONFIDENTIAL                                         |

---

## 11. Sidecar Patterns

### Flashcards (`.flashcards.yaml`)

```yaml
cards:
  - front: "{Question}"
    back: "{Answer — concise, factual}"
  - front: "{Question}"
    back: "{Answer}"
```

Target: 8-12 cards per lesson. Focus on key concepts, not trivia.

### Summary (`.summary.md`)

```markdown
# {Lesson Title} — Summary

## Key Concepts

- {Concept 1}: {One-sentence definition}
- {Concept 2}: {One-sentence definition}

## Skills Practised

- {Skill/command}: {What it does in one sentence}

## Key Takeaway

{The single most important insight from this lesson}

## Next

→ [Lesson {N+1}: {Title}](./{slug}.md)
```

---

## 12. Sensitivity Labels

All custom skill outputs include a sensitivity label in the output header:

| Label                   | Content Types                                                                             | Handling                                                   |
| ----------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| ROUTINE                 | Policy summaries, JDs, onboarding plans, general queries                                  | Standard output                                            |
| CONFIDENTIAL            | Offer letters, salary details, performance reviews, talent assessments, reference letters | "This document contains personal/confidential information" |
| SENSITIVE PERSONAL DATA | Medical, disciplinary, grievance, termination                                             | NEVER auto-generate; always escalate to named HR contact   |

---

## 13. Phantom Import Guard

**NEVER add these import statements to any lesson file:**

```javascript
// DO NOT USE — these components do not exist
import Flashcards from "@site/src/components/Flashcards";
import Quiz from "@site/src/components/Quiz";
```

**Correct usage:**

- Flashcards: Use `<Flashcards />` JSX tag WITHOUT any import (component is globally registered)
- Flashcard data: `.flashcards.yaml` sidecar file
- Quiz: Generated via `/quiz-generator` skill as standalone `16-chapter-quiz.md`
