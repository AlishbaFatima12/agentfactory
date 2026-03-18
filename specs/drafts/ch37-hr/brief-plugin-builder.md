# Writer Brief: Plugin Builder

**Writer:** plugin-builder
**Scope:** Build the `hr-operations` plugin (5 skills + 4 agents + evals + config)
**Reference plugin:** `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/`
**Spec skills:** `specs/drafts/chapter26_hr/hr-skills/products/` (5 custom) + `specs/drafts/chapter26_hr/hr-skills/agents/` (4 agents)

---

## Plugin Manifest

**File:** `.claude-plugin/plugin.json`

```json
{
  "name": "hr-operations",
  "version": "1.0.0",
  "description": "HR operations domain agents for job descriptions, talent matching, institutional knowledge capture, reference letters, and offboarding. 5 skills + 4 persistent agents. Complements the official human-resources plugin.",
  "author": "Panaversity",
  "license": "Apache-2.0",
  "homepage": "https://github.com/panaversity/agentfactory-business-plugins",
  "skills": [
    "skills/jd",
    "skills/match",
    "skills/knowledge",
    "skills/reference",
    "skills/offboard"
  ],
  "agents": [
    "agents/knowledge-base-agent.md",
    "agents/onboarding-orchestrator.md",
    "agents/policy-maintenance-agent.md",
    "agents/offboarding-knowledge-agent.md"
  ]
}
```

---

## Files to Create

```
hr-operations/
├── .claude-plugin/
│   └── plugin.json
├── skills/
│   ├── jd/SKILL.md
│   ├── match/SKILL.md
│   ├── knowledge/SKILL.md
│   ├── reference/SKILL.md
│   └── offboard/SKILL.md
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

---

## Skill Specifications

### Skill 1: `/jd` — Job Descriptions

**File:** `skills/jd/SKILL.md`

```yaml
---
name: jd
description: >
  Write and improve job descriptions with inclusive language. Activate for:
  job description, JD, job posting, role description, job advert, vacancy
  description, job specification, person specification, write a job description,
  improve job description, inclusive job description, job requirements, role
  requirements, hiring, recruiting, talent acquisition, position description,
  role profile, what to put in job description.
argument-hint: "<role title, department, key requirements>"
---
```

**Workflow:**

1. Gather: role title, department, work description, essential requirements, beneficial requirements, salary range, location, company context
2. Structure output: Role & Company (2-3 sentences) → The Work (3-5 bullets) → What We're Looking For (essential max 5 + beneficial) → What We Offer → How to Apply + Equal Opportunities
3. Auto-apply inclusive language check: remove gender-coded words (rockstar, ninja, guru), age-coded language, unnecessarily specific requirements
4. Flag essential requirements with >5 items for review

**NOT clauses (NEVER DO):**

- NEVER produce a JD with salary listed as "competitive" — always include a range
- NEVER list more than 5 essential requirements without questioning whether all are genuine
- NEVER use "rockstar", "ninja", "guru" — exclusionary and have no descriptive value
- NEVER omit the equal opportunities statement
- NEVER omit the reasonable adjustments offer
- NEVER write requirements in years-of-experience when you mean proficiency level

**Output template:**

```
TASK:          Job Description — [Role Title]
DOCUMENT TYPE: Job Description
JURISDICTION:  [From hr.local.md or user input]
CONFIGURATION: [hr.local.md loaded / best practices]
SENSITIVITY:   ROUTINE

[ROLE TITLE] — [DEPARTMENT]
[Company] | [Location] | [Salary Range]

THE WORK
[3-5 bullet points, active verbs, candidate perspective]

WHAT WE'RE LOOKING FOR
Essential:
  - [Requirement — why it is essential if not obvious]
Beneficial (not required):
  - [Item]
Character / ways of working:
  - [1-2 items]

WHAT WE OFFER
  [Salary, benefits, location, growth]

HOW TO APPLY
  [Instructions]
  [Equal opportunities statement from hr.local.md]
  [Reasonable adjustments offer]

INCLUSIVE LANGUAGE CHECK:
  [✅ No gender-coded language found / ⚠️ Flagged: ...]
  [✅ Requirements calibrated / ⚠️ Essential list exceeds 5 — review]
```

**Sensitivity:** ROUTINE

---

### Skill 2: `/match` — Talent Matching

**File:** `skills/match/SKILL.md`

```yaml
---
name: match
description: >
  Assess internal candidates for roles and succession planning. Activate for:
  talent match, internal mobility, internal candidate, succession planning,
  succession, who should be promoted, internal promotion, internal hire,
  talent pipeline, high potential, HIPO, development plan for promotion,
  readiness assessment, role fit, candidate assessment internal, compare
  candidates, talent review, career pathway, promotion readiness, who is
  ready for next level.
argument-hint: "<role to fill, internal candidates to assess>"
---
```

**Workflow:**

1. Gather: target role requirements, candidates with current role/years/strengths/gaps/ambitions
2. Assess each candidate across 6 dimensions: critical skills, experience, performance trajectory, readiness indicators, development areas (gap type: experience/skill/mindset), motivation
3. Classify readiness: READY NOW / READY IN 6 MONTHS / READY IN 12 MONTHS / DEVELOPING / NOT A FIT
4. Output overall recommendation with priority order and suggested actions

**NOT clauses:**

- NEVER base readiness on tenure alone — years ≠ readiness
- NEVER omit motivation/career intent dimension
- NEVER classify as NOT A FIT without evidence — distinguish "not ready" from "not suited"
- NEVER produce without CONFIDENTIAL label
- NEVER share with the employee being assessed without HR review
- NEVER make specific promotion commitments — assessments inform decisions, not make them

**Output template:**

```
TASK:          Internal Talent Assessment — [Role Title]
DOCUMENT TYPE: Talent Assessment
JURISDICTION:  [Jurisdiction]
CONFIGURATION: [hr.local.md status]
SENSITIVITY:   CONFIDENTIAL — HR AND HIRING MANAGER USE ONLY

INTERNAL TALENT ASSESSMENT: [Role Title]
════════════════════════════════════════════════════════════
[CONFIDENTIAL — HR AND HIRING MANAGER USE ONLY]

ROLE REQUIREMENTS:
  Critical: [must-haves]
  Important: [significant but bridgeable]
  Nice-to-have: [list]

─── CANDIDATE: [Name] ─────────────────────────────────────
  Current role: [Role, years]
  Fit assessment: [🟢 STRONG / 🟡 DEVELOPING / 🔴 NOT A FIT]
  Readiness: [classification]

  Critical requirements:
    ✅/🟡/❌ [Requirement]: [Evidence or gap]

  Development gap: [Specific — with gap type]
  Career intent: [What they expressed]
  Retention risk: [HIGH / MEDIUM / LOW]

  RECOMMENDATION: [Specific action]
─────────────────────────────────────────────────────────

OVERALL RECOMMENDATION:
  [Priority order, action to take first]
════════════════════════════════════════════════════════════
```

**Sensitivity:** CONFIDENTIAL

---

### Skill 3: `/knowledge` — Institutional Knowledge Capture

**File:** `skills/knowledge/SKILL.md`

```yaml
---
name: knowledge
description: >
  Capture and structure institutional knowledge before it is lost. Activate for:
  institutional knowledge, knowledge capture, knowledge transfer, knowledge
  base article, knowledge management, preserve knowledge, what do they know,
  departing employee knowledge, exit knowledge, succession knowledge, tacit
  knowledge, undocumented knowledge, before they leave, knowledge interview,
  knowledge extraction, document what we know, knowledge at risk, knowledge map.
argument-hint: "<employee role, tenure, key knowledge areas>"
---
```

**Workflow:**

1. Assess knowledge risk: tenure (1-3 score) × role criticality × documentation level × successor readiness × client impact
2. Score 5-7 = LOW, 8-10 = MEDIUM, 11-15 = HIGH
3. Generate capture plan: sessions, topics, methods, timeline, outputs
4. Generate interview guide per knowledge area (client/process/organisational)
5. After sessions: structure notes into knowledge articles (title, scope, knowledge, context, exceptions, contacts, confidence level)

**NOT clauses:**

- NEVER treat departing employee's account as complete truth — cross-reference
- NEVER let capture become a blame session — organisational learning, not performance review
- NEVER classify as LOW risk without verifying others actually hold the knowledge
- NEVER publish articles without departing employee's accuracy review
- NEVER skip the "what we should NOT try again" question

**Output template:**

```
TASK:          Knowledge Capture Plan — [Employee Name]
DOCUMENT TYPE: Knowledge Capture Plan
JURISDICTION:  [Jurisdiction]
CONFIGURATION: [hr.local.md status]
SENSITIVITY:   CONFIDENTIAL

KNOWLEDGE CAPTURE PLAN: [Name]
════════════════════════════════════════════════════════════
Role: [Title] | Tenure: [Years] | Risk: [🔴/🟡/🟢]

KEY KNOWLEDGE AREAS:
  1. [Area — what makes it unique]
  2. [Area]

CAPTURE METHOD: [Interview / Document review / Shadowing / Pair working]

SESSIONS:
  Session 1: [Knowledge area] — [Duration] — [Date]
  Session 2: [Knowledge area] — [Duration] — [Date]

OUTPUTS:
  [Document type] — [Title] — [Target date]

INTERVIEW GUIDE:
  [Questions by knowledge area — client/process/organisational]
════════════════════════════════════════════════════════════
```

**Sensitivity:** CONFIDENTIAL

---

### Skill 4: `/reference` — Reference Letters

**File:** `skills/reference/SKILL.md`

```yaml
---
name: reference
description: >
  Draft reference letters and verify employment. Activate for: reference
  letter, reference, employment reference, character reference, professional
  reference, write a reference, employment verification, confirm employment,
  verify employment, salary verification, dates of employment, job title
  verification, reference request, provide a reference, reference template,
  letter of recommendation, HR reference, factual reference.
argument-hint: "<employee name, reference type (factual/professional/verification)>"
---
```

**Workflow:**

1. Check reference policy from hr.local.md (factual only vs opinion permitted)
2. Determine type: factual, professional, or employment verification
3. Verify all facts against HRIS (dates, title, rehire eligibility)
4. Generate reference in appropriate format
5. Add REVIEW BEFORE SENDING note

**NOT clauses:**

- NEVER provide reference inconsistent with documented performance
- NEVER include salary without employee's explicit consent
- NEVER provide a reference you cannot stand behind
- NEVER send without HR review
- NEVER include disciplinary matters, health conditions, or protected characteristics

**Output template:**

```
TASK:          Reference Letter — [Employee Name]
DOCUMENT TYPE: [Factual Reference / Professional Reference / Employment Verification]
JURISDICTION:  [Jurisdiction]
CONFIGURATION: [hr.local.md status]
SENSITIVITY:   CONFIDENTIAL

[Letter content per type — see spec for formats]

⚠️ REVIEW BEFORE SENDING: This reference must be reviewed by HR
before sending. Verify all facts against HRIS. Remove this note
before issuing.
```

**Sensitivity:** CONFIDENTIAL

---

### Skill 5: `/offboard` — Offboarding

**File:** `skills/offboard/SKILL.md`

```yaml
---
name: offboard
description: >
  Structure offboarding processes and knowledge transfer. Activate for:
  offboarding, offboard, exit process, resignation, leaver, departing
  employee, employee leaving, last day, exit interview, notice period,
  handover plan, knowledge handover, departure checklist, systems access
  removal, final paycheck, P45, exit documentation, farewell, redundancy
  process, termination process, how to offboard.
argument-hint: "<employee name, role, notice period, last day>"
---
```

**Workflow:**

1. Phase 1 (within 24h): Acknowledge resignation, initiate HRIS record, notify payroll, trigger knowledge capture, schedule exit interview
2. Phase 2 (notice period): Handover plan by area (status, files, contacts, handover-to, date), completed by Week 2
3. Phase 3 (exit interview): Week 3, with HRBP (NOT line manager), structured questions
4. Phase 4 (last day): Final pay, access removal, device return, benefits cessation, reference policy confirmed

**NOT clauses:**

- NEVER delay handover to last week of notice
- NEVER conduct exit interview with line manager
- NEVER leave IT access removal to chance — document every system
- NEVER omit "what I wish I'd known" from handover
- NEVER close without confirming rehire decision is documented

**Output template:**

```
TASK:          Offboarding Plan — [Employee Name]
DOCUMENT TYPE: Offboarding Plan
JURISDICTION:  [Jurisdiction]
CONFIGURATION: [hr.local.md status]
SENSITIVITY:   CONFIDENTIAL

OFFBOARDING PLAN: [Name]
Role: [Title] | Notice: [N weeks] | Last day: [Date]
════════════════════════════════════════════════════════════
[Phase 1 checklist — by owner, with dates]
[Handover plan table — work areas, status, handover target]
[Exit interview scheduled: [Date] with [HR name]]
[Last day checklist — by owner]
════════════════════════════════════════════════════════════
```

**Sensitivity:** CONFIDENTIAL

---

## Agent Specifications

### Agent 1: knowledge-base-agent

**File:** `agents/knowledge-base-agent.md`
**Source spec:** `specs/drafts/chapter26_hr/hr-skills/agents/knowledge-base-agent.md`

Copy the full spec content from the source file. Key elements:

- Query classification decision tree (written answer → answer; individual → warm handoff)
- Tone: warm, practical, human. Plain English. No jargon.
- Weekly report format (volume, categories, escalations, gaps, trends)
- NEVER answer individual situations — warm handoff every time

### Agent 2: onboarding-orchestrator

**File:** `agents/onboarding-orchestrator.md`
**Source spec:** `specs/drafts/chapter26_hr/hr-skills/agents/onboarding-orchestrator.md`

Copy the full spec. Key elements:

- Trigger: HRIS new hire record
- Timeline: T-14 → T-7 → T-3 → Day 1 → Day 10 → Day 30 → Day 60 → Day 90
- Alert triggers: critical item incomplete at T-3, training incomplete at Day 12, survey ≤ 2
- New starter surveys (3 questions max — response rates drop above this)

### Agent 3: policy-maintenance-agent

**File:** `agents/policy-maintenance-agent.md`
**Source spec:** `specs/drafts/chapter26_hr/hr-skills/agents/policy-maintenance-agent.md`

Copy the full spec. Key elements:

- Monthly: 5 checks (policy currency, statutory rates, consistency, links, FAQ gaps)
- Event-triggered: statutory rate changes (UK April 6, Pakistan provincial)
- Monthly report format

### Agent 4: offboarding-knowledge-agent

**File:** `agents/offboarding-knowledge-agent.md`
**Source spec:** `specs/drafts/chapter26_hr/hr-skills/agents/offboarding-knowledge-agent.md`

Copy the full spec. Key elements:

- Trigger: HRIS resignation record (within 24 hours)
- Risk scoring (5 factors, each 1-3, total 5-15)
- Three risk levels → different capture plans (LOW: 1 session, MEDIUM: 2, HIGH: 3+)
- Completion report on last day

---

## Evals Specification

### `evals/cases.yaml`

12 routing cases + 2 negative cases:

```yaml
cases:
  # ROUTING — correct skill activation
  - name: jd_basic
    input: "Write a job description for a Senior Data Analyst"
    expected_skill: jd
    expected_contains: ["THE WORK", "WHAT WE'RE LOOKING FOR", "Essential"]

  - name: jd_inclusive
    input: "Create a job posting for a Product Manager, make sure it's inclusive"
    expected_skill: jd
    expected_contains: ["INCLUSIVE LANGUAGE CHECK"]

  - name: match_succession
    input: "Who should we promote to Team Lead? Assess Zara and Ahmed"
    expected_skill: match
    expected_contains: ["CONFIDENTIAL", "Fit assessment", "Readiness"]

  - name: match_internal
    input: "We have a vacancy for Head of Finance. Any internal candidates?"
    expected_skill: match
    expected_contains: ["INTERNAL TALENT ASSESSMENT"]

  - name: knowledge_departing
    input: "Our senior PM is leaving in 6 weeks. Capture her knowledge"
    expected_skill: knowledge
    expected_contains: ["KNOWLEDGE CAPTURE PLAN", "Risk"]

  - name: knowledge_proactive
    input: "What institutional knowledge do we have at risk?"
    expected_skill: knowledge
    expected_contains: ["knowledge", "risk"]

  - name: reference_factual
    input: "Write a factual reference for Bilal Ahmed who worked here 3 years"
    expected_skill: reference
    expected_contains: ["REVIEW BEFORE SENDING", "employed"]

  - name: reference_verification
    input: "I need an employment verification letter for a mortgage application"
    expected_skill: reference
    expected_contains: ["employment", "confirm"]

  - name: offboard_resignation
    input: "Sarah has resigned. Create an offboarding plan. 4 weeks notice."
    expected_skill: offboard
    expected_contains: ["OFFBOARDING PLAN", "Phase 1", "Last day"]

  - name: offboard_handover
    input: "Create a handover plan for a departing team member"
    expected_skill: offboard
    expected_contains: ["handover", "status"]

  - name: jd_interview_combo
    input: "I need a JD and interview questions for a Finance Analyst"
    expected_skill: jd
    expected_contains: ["THE WORK"]

  - name: match_development
    input: "Create a development plan for Zara to become Team Lead in 12 months"
    expected_skill: match
    expected_contains: ["development", "timeline"]

  # NEGATIVE — should NOT activate custom skills
  - name: negative_onboarding
    input: "Create an onboarding plan for a new hire starting next month"
    expected_skill: null # Official plugin handles this
    note: "This should be handled by the official /onboarding skill, not custom"

  - name: negative_policy
    input: "What is our parental leave policy?"
    expected_skill: null # Official plugin handles this
    note: "This should be handled by the official /policy-lookup skill, not custom"
```

### `evals/run.py`

Follow the supply-chain eval harness pattern. Minimal smoke test: route each case to the expected skill, check expected_contains in output.

---

## hr.local.md.template

Copy from `specs/drafts/chapter26_hr/hr-skills/hr.local.md.template` — the full template with all sections:

- Organisation Profile
- Jurisdiction: Statutory Rates (UK / Pakistan / UAE)
- Policy Library
- Leave Entitlements
- Benefits Summary
- HR Contact Directory
- Onboarding Programme Configuration
- Performance Review Cycle
- Equal Opportunities Statement
- Reference Policy
- Data Retention

---

## README.md

Follow supply-chain plugin README pattern:

```markdown
# HR Operations Domain Agents

Plugin for **Chapter 37: People & HR** from [The AI Agent Factory](https://learn.panaversity.org) by Panaversity.

HR operations domain agent (v1.0.0) with 5 skills covering job descriptions,
talent matching, institutional knowledge capture, reference letters, and
offboarding. 4 persistent agents for knowledge base Q&A, onboarding
orchestration, policy maintenance, and departure knowledge capture.
No jurisdiction overlays — policy-configurable via `hr.local.md`.

Complements the official `human-resources` plugin (9 skills). Zero naming
collisions. Install both for the complete Chapter 37 experience.

## Quick Start

[4 install options: CLI, Cowork, ZIP, Clone — same pattern as supply-chain]

## What's in This Plugin

[Directory tree]

## Relationship to Official Plugin

[Table showing official vs custom coverage]
```

---

## LICENSE

Apache-2.0 (same as supply-chain plugin).
