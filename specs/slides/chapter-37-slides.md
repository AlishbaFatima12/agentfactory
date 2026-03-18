---
marp: true
theme: default
paginate: true
backgroundColor: #1a1a2e
color: #e0e0e0
style: |
  section {
    font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    padding: 40px 60px;
  }
  h1 {
    color: #00d4ff;
    font-size: 2.2em;
    border-bottom: 3px solid #00d4ff;
    padding-bottom: 10px;
  }
  h2 {
    color: #00d4ff;
    font-size: 1.6em;
  }
  li {
    font-size: 0.95em;
    margin-bottom: 8px;
    line-height: 1.4;
  }
  table {
    font-size: 0.85em;
    width: 100%;
  }
  th {
    background-color: #16213e;
    color: #00d4ff;
    padding: 8px 12px;
  }
  td {
    padding: 6px 12px;
    border-bottom: 1px solid #333;
  }
  strong {
    color: #00d4ff;
  }
  em {
    color: #ffd700;
    font-style: normal;
  }
  code {
    background-color: #16213e;
    color: #00d4ff;
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 0.9em;
  }
  blockquote {
    border-left: 4px solid #00d4ff;
    padding-left: 20px;
    color: #b0b0b0;
    font-style: italic;
  }
  section.lead h1 {
    font-size: 2.8em;
    text-align: center;
    border-bottom: none;
  }
  section.lead p {
    text-align: center;
    font-size: 1.2em;
  }
  section.lead {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
---

<!-- _class: lead -->

# AI-Native People Operations

**Chapter 37: People & HR**

Building the Intelligence Layer for the Full Employee Lifecycle

_14 Skills | 4 Persistent Agents | 2 Plugins | 1 hr.local.md_

---

# The Institutional Memory Problem

- HR teams are simultaneously **under-resourced and drowning in repetitive work** — the same ten questions consume the majority of the week
- **60% of HR time** is spent on information routing: answering questions that have written answers, to employees who cannot find them
- The remaining **40%** is high-judgment work that only humans can do: navigating terminations, mediating conflicts, assessing cultural fit
- The tragedy is that the 60% is exhausting and adds no value, and the 40% is **chronically under-invested** because the 60% has consumed the time and energy it deserved
- AI does not replace the 40% — it **eliminates the 60%** so HR professionals can do the 40% better

---

# Two Forms of Organisational Knowledge

- **Explicit knowledge** is written down — handbooks, policies, process guides — but scattered across shared drives, HRIS systems, wikis, and email threads nobody archived properly
- **Tacit knowledge** is the unwritten understanding of how things actually work — held in people's heads and invisible until the person who holds it leaves
- Explicit knowledge is _findable in principle but inaccessible in practice_ — so employees ask HR instead
- Tacit knowledge is _invisible until it is too late_ — it evaporates when long-tenured employees depart
- The chapter solves both: make explicit knowledge findable (knowledge-base-agent) and capture tacit knowledge before it walks out the door (`/knowledge`)

---

# Three HR Functions AI Transforms

| Function                | What AI Does                                                           | What Stays Human                                   |
| ----------------------- | ---------------------------------------------------------------------- | -------------------------------------------------- |
| **Information Routing** | Answers policy questions instantly, consistently, with source citation | Sensitive individual situations                    |
| **Process Execution**   | Generates offer letters, JDs, reviews in 2 minutes vs 20               | Negotiating terms, making judgement calls          |
| **Knowledge Capture**   | Structures capture interviews, generates knowledge articles            | The relationship needed to surface tacit knowledge |

- **Information routing** consumes the most HR time — this is the 60%
- **Process execution** produces the same document structures with different variables
- **Knowledge capture** is the most neglected function — most organisations only attempt it reactively after someone resigns

---

# The Two-Plugin Architecture

- **Official Plugin** (`human-resources`, Anthropic): 9 skills covering the most common HR workflows
- **Custom Plugin** (`hr-operations`, Panaversity): 5 skills + 4 persistent agents filling specific gaps
- **Zero naming collisions** by design — 14 distinct commands across two sources
- Configured via `hr.local.md` — an 8-section file that makes every output specific to your organisation, jurisdiction, and policies
- Without hr.local.md: generic best-practice output. With it: _your actual leave entitlements, your HR contacts, your statutory rates_

---

# 14 Commands — Complete Reference

| Official Plugin (9)                              | Custom Plugin (5)                                    |
| ------------------------------------------------ | ---------------------------------------------------- |
| `/policy-lookup` — Plain-language policy answers | `/jd` — Job descriptions + inclusive language        |
| `/onboarding` — 30-60-90 onboarding plans        | `/match` — Internal talent assessment (6 dimensions) |
| `/draft-offer` — Offer letters + employment docs | `/knowledge` — Institutional knowledge capture       |
| `/interview-prep` — Structured interview rubrics | `/reference` — Reference letters + verification      |
| `/performance-review` — Performance reviews      | `/offboard` — Offboarding process design             |
| `/comp-analysis` — Compensation benchmarking     |                                                      |
| `/org-planning` — Org structure modelling        |                                                      |
| `/people-report` — People analytics reports      |                                                      |
| `/recruiting-pipeline` — Hiring funnel analysis  |                                                      |

---

# 4 Persistent Agents — Always Running

| Agent                           | Trigger                 | What It Catches                                                                      |
| ------------------------------- | ----------------------- | ------------------------------------------------------------------------------------ |
| **Knowledge Base Agent**        | Always-on (Slack/Teams) | Employee questions at 11pm on a Sunday — answered in 10 seconds with policy citation |
| **Onboarding Orchestrator**     | HRIS new hire record    | The laptop that was not ordered at T-3 days — before it ruins Day 1                  |
| **Policy Maintenance Agent**    | Monthly + rate changes  | Statutory sick pay rate that changed in April but nobody updated the FAQ             |
| **Offboarding Knowledge Agent** | HRIS resignation        | Knowledge that would walk out the door without structured capture sessions           |

- Agents are not just automation — they are **operational intelligence sensors**
- Their reports tell the CHRO where the HR function is working and where it is failing

---

# The Warm Handoff Protocol

- The most critical design decision: what the agent **refuses** to answer
- **Type 1 — Policy queries**: "How many days of annual leave do I have?" — Answer directly, cite source, include escalation contact
- **Type 2 — Individual situations**: "My manager is treating me unfairly" — Warm handoff to a _named_ HR contact, every time, without exception
- The boundary is not about what the agent _can_ answer — it is about what it _should_ answer
- A well-meaning agent response to an individual situation creates legal risk and often makes things worse
- Every warm handoff includes: empathy, a named person, their contact details, and encouragement to reach out

---

# Sensitivity Labels — The AI Boundary

| Label                       | Content                                                                                   | Handling                                                            |
| --------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **ROUTINE**                 | Policy summaries, job descriptions, onboarding plans, general queries                     | Standard output — can be shared with employees                      |
| **CONFIDENTIAL**            | Offer letters, salary details, performance reviews, talent assessments, reference letters | Contains personal data — handle per data protection policy          |
| **SENSITIVE PERSONAL DATA** | Medical, disciplinary, grievance, termination                                             | _NEVER auto-generated_ — always escalate to a named HR professional |

- These labels appear on every AI output throughout the chapter
- They mark the boundary between the 60% (AI handles) and the 40% (humans handle)

---

# Onboarding — The First 90 Days

- **Three failure modes** that destroy new hire productivity:
  - _Information Dump_: 8 hours of back-to-back inductions on Day 1 — new hire retains 10%
  - _Administrative Bottleneck_: Laptop not ready, access not provisioned, manager on holiday
  - _Invisible Ramp_: No defined success criteria — busy but unable to tell if performing
- The **30-60-90 framework** with strong, observable success criteria at each checkpoint
- Strong success criterion test: "Could the new hire assess themselves against it on Day 30 without asking their manager?" If yes, it is strong. If they need to ask "does this count?", it is weak
- The **onboarding orchestrator** runs the T-14 to Day 90 workflow automatically: pre-boarding checklists, compliance training reminders, satisfaction surveys, milestone check-ins

---

# Job Descriptions — Four Principles

- **Candidate perspective first**: Write from "you will" not "responsible for"
- **Lead with the work**: Structure: Work, Impact, Requirements, Offer — most JDs reverse this order
- **Calibrate requirements ruthlessly**: Maximum 5 essential items. Test each: "Could a highly capable candidate do this job without this?" If yes, move to Beneficial
- **Inclusive language by default**: `/jd` applies the check automatically — flags gender-coded ("rockstar", "ninja"), age-coded ("young and dynamic"), and experience-specificity ("7+ years of Python") terms
- Over-specification deters qualified candidates — research suggests underrepresented candidates are more likely to self-select out when they do not meet every listed requirement

---

# Performance Reviews Without Bureaucracy

- The **vague-to-specific conversion**: turning "She could be more proactive" into observable, behavioural, forward-looking feedback with development actions
- **Four quality standards**: Strengths must be specific and evidenced. Development areas must be behavioural (not personality). Maximum 2 development areas. Career development must be honest and specific
- **Behavioural vs personality feedback**: "You are not proactive" (personality — cannot be acted on) vs "In Q3, three initiatives within your remit were identified by others rather than proposed by you" (behavioural — specific, actionable)
- **Three review modes**: Self-assessment template, manager review, calibration prep — used in sequence across the review cycle
- The test: could the employee dispute this in an employment tribunal by pointing to evidence? Personality feedback cannot withstand this test

---

# Six-Dimension Talent Assessment

- `/match` assesses internal candidates across six structured dimensions:

| Dimension                  | What It Assesses                                                           |
| -------------------------- | -------------------------------------------------------------------------- |
| **Critical Skills**        | Must-have capabilities (DEMONSTRATED / DEVELOPING / ABSENT)                |
| **Experience**             | Relevant background (RELEVANT / PARTIAL / LIMITED)                         |
| **Performance Trajectory** | Direction of travel (ASCENDING / CONSISTENT / VARIABLE)                    |
| **Readiness Indicators**   | Evidence of next-level behaviour already present                           |
| **Development Areas**      | Gap type: Experience / Skill / Mindset (each needs different intervention) |
| **Motivation**             | Does this person _want_ this direction? Retention risk if passed over      |

- Readiness classification: _READY NOW / READY IN 6 MONTHS / READY IN 12 MONTHS / DEVELOPING / NOT A FIT_

---

# The Succession Conversation

- The `/match` output gives analysis — the conversation requires **human judgment**
- _Never say_: "You will definitely be promoted to Team Lead in six months"
- _Always say_: "If your performance continues on this trajectory and you develop these areas, a leadership role becomes realistic in 12 months"
- The distinction between "realistic" and "you will" is not semantic evasion — it is the difference between a **pathway and a promise**
- Promises that cannot be kept damage trust more severely than no conversation at all
- Always ask: "What does your career ambition look like? Is people leadership something you actively want?" — do not assume they want what the organisation wants to offer

---

# Knowledge Risk Classification

- **Five-factor scoring model** (each factor scored 1-3):
  - Tenure | Role criticality | Documentation level | Successor readiness | Client/revenue impact
- **Score interpretation**: 5-7 (LOW) = standard handover. 8-10 (MEDIUM) = 2 capture sessions. 11-15 (HIGH) = full capture programme with immediate escalation
- **Three-session interview structure** for HIGH-risk holders:
  - Session 1: Client and stakeholder relationships (concrete, relational)
  - Session 2: Methodology and process (where reality differs from documentation)
  - Session 3: Institutional context ("What should we not try again?")
- **Proactive capture** (annual for high-risk holders) produces dramatically better outcomes than reactive capture after resignation — engaged employees give richer, more honest answers

---

# The Four Offboarding Principles

| Principle                                                              | What Most Organisations Do |
| ---------------------------------------------------------------------- | -------------------------- |
| **Protect the organisation** — access removal, documentation, legal    | Done — incompletely        |
| **Preserve institutional knowledge** — structured handover and capture | Ignored or rushed          |
| **Positive experience** — employee leaves as ambassador, not detractor | Ignored                    |
| **Support the team** — transition coverage, communication, no vacuum   | Ignored                    |

- The **four-phase timeline**: Immediate (24h) - Handover (by Week 2) - Exit Interview (Week 3) - Last Day
- Exit interviews must be conducted by the **HRBP, never the line manager** — employees will not share honest management feedback with the manager they are leaving
- The handover plan must be complete by Week 2 — not the last day when the employee is mentally disengaged

---

# The Full Employee Lifecycle

- **HIRE**: `/jd` + `/interview-prep` + `/comp-analysis` + `/draft-offer`
- **ONBOARD**: `/onboarding` + onboarding-orchestrator (T-14 to Day 90)
- **DEVELOP**: `/performance-review` + `/comp-analysis`
- **RETAIN / PROMOTE**: `/match` + `/org-planning` + succession conversation
- **OFFBOARD**: `/knowledge` + `/offboard` + offboarding-knowledge-agent
- **CONTINUOUS**: `/people-report` + `/recruiting-pipeline` + all 4 agents as sensors
- This is not 14 isolated tools — it is a **coherent, end-to-end workflow** where the output of each stage informs the next
- The sensitivity framework applies across every stage: ROUTINE for operational documents, CONFIDENTIAL for personal data, SENSITIVE PERSONAL DATA for anything requiring human escalation

---

# Agents as Operational Intelligence

- **Rising query volume** in the KB agent report means employees cannot find answers — missing or confusing documentation
- **T-3 incomplete pre-boarding** from the orchestrator catches the laptop failure before it ruins Day 1
- **Statutory rate change detected** from the policy agent means update three documents before April
- **Knowledge capture completion <80%** from the offboarding agent means employees are leaving without full transfer
- Cross-agent signals tell the real story: KB agent spike in flexible working queries + policy agent flagging a cross-reference inconsistency = one root cause, two sensors
- The **HR intelligence dashboard**: 6-8 metrics across all four agents, reviewed weekly, with clear action thresholds

---

# What AI Changes — and Does Not Change

| AI Handles (the 60%)                | Humans Handle (the 40%)     |
| ----------------------------------- | --------------------------- |
| Policy questions answered instantly | Redundancy decisions        |
| Offer letters drafted in 2 minutes  | Grievance investigations    |
| Onboarding checklists automated     | Team conflict mediation     |
| Knowledge capture structured        | Termination with dignity    |
| Performance reviews formatted       | Final performance judgement |
| Talent assessments framed           | Promotion decisions         |

- The 40% is **unchanged** — difficult conversations, sensitive investigations, genuine talent judgments, ethical decisions
- AI eliminates the administrative overhead so HR professionals have the **capacity, time, and energy** to do the work that genuinely needs them

---

# The Central Insight

> _Explicit knowledge becomes findable without asking a person. Tacit knowledge gets captured before it walks out the door. HR professionals are freed for the 40% that only humans can do._

- Every command in this chapter handles a task that belongs to the **60%**
- Every escalation path points to the **40%** that stays with humans
- The sensitivity labels mark the boundary between the two
- `hr.local.md` is the configuration that makes the entire stack **yours** — not generic AI output, but your policies, your contacts, your jurisdiction, your organisation

---

<!-- _class: lead -->

# Deploy AI-Native HR Operations

**Three concrete next steps:**

**1.** Install both plugins and configure `hr.local.md` for your organisation
_Every subsequent output improves because of this configuration_

**2.** Build a 20-question FAQ knowledge base and deploy the knowledge-base-agent
_This eliminates the highest-volume category of HR administrative work_

**3.** Identify your three highest-risk knowledge holders and run a proactive capture session
_Do not wait for the resignation — capture knowledge while the holder is still engaged_

---

<!-- _class: lead -->

# Chapter 37: People & HR

**9** official skills + **5** custom skills + **4** persistent agents

**14** commands with zero naming collisions

**1** configuration file that makes every output organisation-specific

**The full employee lifecycle: Hire, Onboard, Develop, Promote, Offboard**

_AI eliminates the 60%. Humans do the 40% better._
