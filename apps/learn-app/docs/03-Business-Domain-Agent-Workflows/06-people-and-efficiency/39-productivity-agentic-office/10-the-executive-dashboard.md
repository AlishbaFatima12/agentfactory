---
slug: /Business-Domain-Agent-Workflows/productivity-agentic-office/the-executive-dashboard
sidebar_position: 10
title: "The Executive Dashboard"
description: "Build a single-page RAG-status view of all your active work streams — learn dashboard configuration, RAG status rules, blocker classification, and the difference between the official plugin's visual task board and the custom plugin's text-based executive portfolio view using /agentic-office:progress-tracker"
keywords:
  [
    "executive dashboard",
    "RAG status",
    "progress tracker",
    "weekly status",
    "blocker classification",
    "portfolio view",
    "project dashboard",
    "one pane of glass",
    "agentic office",
    "productivity plugin",
    "dashboard configuration",
    "milestone tracking",
  ]
chapter: 39
lesson: 10
duration_minutes: 42

# HIDDEN SKILLS METADATA
skills:
  - name: "Configure and Generate a RAG-Status Executive Dashboard Using /agentic-office:progress-tracker"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can configure the dashboard section of work.local.md with sections, metrics_sources, and refresh cadence, then generate a dashboard that correctly assigns RAG status to each project and includes all required sections in the correct format"

  - name: "Apply RAG Status Rules and Blocker Classification to Active Projects"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can evaluate a project's current state against the RAG rules (Green/Amber/Red definitions), correctly classify any active blockers as soft/hard/stale, and determine the appropriate escalation action for each blocker type"

  - name: "Distinguish Between the Official Plugin's Dashboard and the Custom Plugin's Executive Dashboard"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Information-Literacy"
    measurable_at_this_level: "Student can explain why both the official plugin's dashboard.html (individual task management tool) and the custom plugin's executive dashboard (cross-domain portfolio briefing) are needed, and describe which tool to use for which purpose"

learning_objectives:
  - objective: "Explain the purpose of the executive dashboard and why it is distinct from the official plugin's dashboard.html, articulating the different user, time horizon, and format of each"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student can correctly answer: 'Which tool would you use to drag a task from In Progress to Done?' (official dashboard.html) and 'Which tool would you use to brief your manager on overall project status in 5 minutes?' (executive dashboard)"

  - objective: "Configure the dashboard in work.local.md and generate a complete executive dashboard with accurate RAG status for all active projects"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces a dashboard where each project's RAG status is defensible against the three-rule RAG standard, and the headline status correctly aggregates the project-level statuses"

  - objective: "Classify all active blockers and determine the escalation action for each"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Student can identify each blocker as soft/hard/stale, state the correct escalation action for each type, and explain why a stale blocker (>7 days) requires a different response than a hard blocker that appeared today"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "Two-dashboard distinction — official plugin dashboard.html (individual task board) vs custom plugin executive dashboard (cross-domain portfolio briefing)"
    - "RAG status rules — Green/Amber/Red definitions with the milestone-slip rule"
    - "Dashboard output structure — seven sections from headline through calendar highlights"
    - "Weekly project status — the progress-tracker skill's weekly status format"
    - "Blocker classification — soft/hard/stale types with escalation actions"
  assessment: "5 concepts at B1-B2. The two-dashboard distinction resolves a likely confusion for readers who installed both plugins in Lesson 2. RAG status rules are simple but require discipline — the milestone-slip rule (never show Green if a milestone has slipped without acknowledgement) is the most important. The dashboard structure follows naturally from the preceding lessons. Blocker classification introduces actionable vocabulary that applies across all project management contexts."

differentiation:
  extension_for_advanced: "Configure the domain agent metrics row by connecting your executive dashboard to outputs from the domain agents you have deployed. If you have the finance agent from Chapter 28, add a metrics source for budget approvals pending. If you have the operations agent from Chapter 38, add compliance status. Generate the dashboard and evaluate: does the cross-domain metrics section add genuine signal, or is it noise at this point in your configuration? What is the minimum data density needed in each domain agent for its metrics to be worth including in the dashboard?"
  remedial_for_struggling: "Start with just two projects in your dashboard — one P1 and one P2. Generate the dashboard with only the P1/P2 projects and open actions sections. Assign RAG status to each project manually before running the command, then compare your assessment to the skill's output. Where they differ, apply the three RAG rules explicitly to determine which assessment is correct. Add sections incrementally once the core two-project view is clean."

teaching_guide:
  key_points:
    - "The executive dashboard is a briefing tool, not a task management tool. It answers 'What is the overall status and what needs my attention?' — not 'What are all my tasks?' The official plugin's dashboard.html answers the task management question. Both are needed; neither replaces the other."
    - "The RAG milestone-slip rule is the most important rule in this lesson: never show Green for a project where a milestone has slipped without explicit acknowledgement. The temptation is to show Green once the team is working on a fix. The rule says no — the slip happened; acknowledge it first, then reforecast."
    - "Blocker classification drives escalation. A soft blocker does not require escalation — apply the workaround and note it. A hard blocker requires immediate escalation with a named person and deadline. A stale blocker (>7 days without movement) has failed to be resolved by the designated owner and must move to the next level — the stale status is itself the trigger for escalation."
    - "The 5-minute test is the dashboard's quality check. Could a colleague tell from this dashboard what the week looks like without asking a follow-up question? If yes, the dashboard is working. If no, the dashboard is either too sparse (missing context) or too dense (including items that belong in the full task list)."
  misconceptions:
    - "The executive dashboard should include all my tasks so everything is visible. Correction: the dashboard is a focus tool, not a task dump. It shows only actions due this week or overdue, and only projects with active status (not the full portfolio including parked projects). The full task inventory lives in TASKS.md. The dashboard shows what requires executive attention."
    - "RAG status is subjective — Green just means you feel good about the project. Correction: RAG status is rule-based. Green requires all milestones on schedule, no blockers, and no overdue decisions. Amber requires at least one of: milestone at risk, minor blocker, decision needed this week. Red requires at least one of: milestone missed, hard blocker, decision overdue. Apply the rules — do not guess."
    - "The official plugin's dashboard and the custom plugin's executive dashboard are competing tools. Correction: they are complementary. The official dashboard.html is for individual task management — it is interactive, visual, and focused on a single person's task CRUD. The executive dashboard is for portfolio review — it is text-based, structured, and focused on cross-domain status for reporting and decision-making."
  discussion_prompts:
    - "Project Nighthawk is RED on the dashboard. Zia writes the formal letter on Wednesday. Should the status change to AMBER on Thursday? Or does it stay RED until the facility responds? Apply the RAG rules to determine the correct status at each point in time."
    - "The 5-minute test says a colleague should be able to understand the week from the dashboard without asking a follow-up. What would need to be true about your work.local.md for a colleague to have that experience? What context is currently missing from your work.local.md that would prevent the 5-minute test from passing?"
  teaching_tips:
    - "The two-dashboard contrast table is the lesson's first anchor. Make sure readers understand this before proceeding to the executive dashboard content. The confusion between the two tools is common, and resolving it early prevents the question 'but why do I need two dashboards?' from running in the background throughout the lesson."
    - "Walk through the RAG rules for each project in the sample dashboard. AgentFactory is AMBER because Chapter 28 is due Thursday and the skills library is a separate deliverable that must not be missed. Project Nighthawk is RED because the facility blocker is a hard blocker — not a mild risk, a hard blocker. BankersAI is GREEN because the next workshop is not imminent and no blockers are present. Each one is a worked example of the three rules."
---

# The Executive Dashboard

Every work function in this book has its own reporting. The finance agent from Chapter 28 produces management accounts. HR domain agents (Chapter 37, planned) surface headcount and onboarding status. The operations intelligence layer (Chapter 38, planned) generates compliance dashboards. The Chapter 34 revenue engine has a pipeline view. A senior executive reviewing all of these would spend hours each week simply gathering information before making a single decision.

The executive dashboard collapses this into a single view: one structured, always-current picture of every work stream that matters, assembled from domain agents and project memory, formatted for a 5-minute review rather than a 30-minute deep dive.

This lesson builds the executive dashboard and its weekly project status companion. Before configuring either, it is worth clarifying what the executive dashboard is not — because there is already a visual dashboard in this system, and the two serve entirely different purposes.

## Two Dashboards, Two Purposes

When you installed the official `productivity` plugin in Lesson 2, you gained access to `dashboard.html` — a visual task board that renders your TASKS.md as interactive cards. When you install the custom `agentic-office` plugin, you gain access to the executive dashboard generated by `/agentic-office:progress-tracker`.

These are complementary tools, not competing ones.

| Dimension        | Official Plugin `dashboard.html`             | Custom Plugin Executive Dashboard                      |
| ---------------- | -------------------------------------------- | ------------------------------------------------------ |
| **Purpose**      | Individual task management                   | Cross-domain portfolio briefing                        |
| **User**         | You, managing your own tasks                 | You (or your manager), reviewing overall status        |
| **Format**       | Visual board — drag-and-drop task cards      | Text-based — RAG status, sections, structured briefing |
| **Time horizon** | Today and this week                          | This week and the next 2-4 weeks                       |
| **Content**      | All tasks in TASKS.md                        | P1/P2 projects only; this week's actions only          |
| **Domain scope** | Your individual task list                    | All deployed domain agents + project memory            |
| **When to use**  | Managing task CRUD (add/complete/move tasks) | Strategic weekly review; reporting; decision support   |
| **Interaction**  | Interactive (click, drag, edit)              | Read-only briefing output                              |

Use `dashboard.html` when you want to interact with your task list. Use the executive dashboard when you want to understand the overall picture and communicate it.

:::info A Practical Distinction
The 5-minute test for the executive dashboard: could you forward it to your manager as a weekly status update with no editing? If yes, it is working. You would never forward `dashboard.html` to your manager — that is a personal productivity tool, not a communication artefact.
:::

## Dashboard Output Structure

The executive dashboard has seven sections, each with a specific purpose.

**Headline Status** — the executive summary in one line. RED (action required), AMBER (watch items), or GREEN (all clear). Aggregates the worst-case RAG status across all tracked projects. If any project is RED, the headline is RED.

**P1 Projects** — your primary initiatives with RAG status, current milestone, risk flag, and this week's required action. One entry per P1 project. Brief — this is not a project brief; it is a status signal.

**P2 Projects** — same format, briefer. Projects that matter this week but are not primary initiatives.

**Key Metrics (from domain agents)** — one metric per domain you have configured. Only domains with deployed agents appear. This section makes cross-domain status visible in one view.

**Open Actions (this week)** — only actions due this week or overdue. Not the full action log — only what requires attention now.

**Open Delegations** — who you are waiting on, for what, by when. The delegation safety net.

**Upcoming Decisions** — decisions that will need to be made in the next 1-2 weeks. Surfaces them before the meeting where they will be discussed.

**Calendar Highlights** — the most important events this week. Not every calendar item — only the ones that matter for planning.

## The Sample Executive Dashboard: Zia's Weekly View

Here is the executive dashboard for the week of 17 March 2026, generated after the Monday Executive Weekly.

```
EXECUTIVE DASHBOARD — Week of 17 March 2026 — Zia Khan / Panaversity
════════════════════════════════════════════════════════════
HEADLINE STATUS: 🔴 ACTION REQUIRED — Project Nighthawk hard blocker

── P1 PROJECTS ─────────────────────────────────────────────
  AgentFactory (Book)              🟡 ON TRACK / WATCH
  This week:   Chapter 28 narrative draft due Thursday;
               skills library due Thursday (separate deliverable — do not miss)
  Risk:        Two deliverables on same deadline — skills library is
               at risk if Chapter 28 narrative runs long
  Action:      File Chapter 28 narrative by Wednesday to protect Thursday buffer

── P2 PROJECTS ─────────────────────────────────────────────
  Project Nighthawk (Karachi Expansion)   🔴 HARD BLOCKER
  This week:   Formal letter to facility owner (Zia, due Wed 19 March)
  Blocker:     Facility agreement — 10+ days no response — STALE BLOCKER
  Impact:      Q3 launch at risk if agreement not signed by 31 March
  Action:      Letter by Wednesday; COO escalation if no response by 26 March

  BankersAI (Workshops)            🟢 ON TRACK
  This week:   No immediate action — Workshop #7 content review opens 29 March
  Next:        Content review due before Workshop #7 (7-day window)

── KEY METRICS (from domain agents) ────────────────────────
  HR:          Ayesha Raza — Day 4 of onboarding; 30-day check-in: 14 April
               Dr. Sana Mirza — joins Monday 23 March; onboarding brief needed
  Finance:     Analytics budget — approved in principle; ROI brief due Mon 24 March
  Operations:  BSI ISO 27001 renewal — follow-up delegated; awaiting response
               ERP migration — in progress; analytics tooling compatibility TBC

── OPEN ACTIONS (this week) ────────────────────────────────
  ☐ Formal letter to Nighthawk facility owner — Zia Khan — Wed 19 March
  ☐ Chapter 28 narrative draft — Zia Khan — Thu 20 March
  ☐ Chapter 28 skills library — Zia Khan — Thu 20 March

── OPEN DELEGATIONS ────────────────────────────────────────
  Omar Farooq:  Analytics ROI brief — due Mon 24 March — ⏳ confirmed
  Compliance:   BSI ISO 27001 renewal — this week — ⏳ no update

── UPCOMING DECISIONS ──────────────────────────────────────
  Mon 24 March:  Analytics budget final sign-off (after Omar's ROI brief)
  Post-Nighthawk: Islamabad workshop expansion — deferred; trigger: Nighthawk resolved

── CALENDAR HIGHLIGHTS ─────────────────────────────────────
  Wed 19 March:  Chapter Review (bi-weekly; Chapter 27 close-out)
  Thu 20 March:  Chapter 28 deadline
  Mon 23 March:  Dr. Sana Mirza starts; Executive Weekly
  Mon 24 March:  Analytics ROI brief review + budget decision
════════════════════════════════════════════════════════════
```

### Reading the Dashboard

Three things to notice:

**The headline status is RED because of Project Nighthawk.** AgentFactory being AMBER would not trigger a RED headline — AMBER means watch, not act. But a P2 project with a hard blocker that has now become stale (10+ days) makes the overall picture RED. The headline aggregates the worst case, not the average.

**AgentFactory is AMBER despite being on track for Chapter 28.** The skills library is a separate deliverable due the same day. Two deliverables on the same deadline creates risk even if each is individually manageable. The dashboard surfaces this — it would not be visible in a simple task list.

**The key metrics section bridges domain agents.** HR context (Ayesha Day 4, Dr. Sana Mirza joining Monday), Finance context (analytics budget in flight), Operations context (ERP migration, BSI renewal). This section answers the question "what do I need to know from other parts of the organisation this week?" without opening five separate domain agent views.

## RAG Status Rules

RAG status is rule-based, not subjective. Apply these three rules in order:

**GREEN — All on track:**
All milestones on schedule. No blockers. No overdue decisions. Nothing requires your attention this week beyond normal execution.

**AMBER — Watch:**
At least one of: a milestone at risk (slippage is possible), a minor blocker (workaround exists), or a decision needed this week. Amber means the situation needs monitoring — you may need to act, but it is not yet critical.

**RED — Action required:**
At least one of: a milestone missed, a hard blocker (progress cannot continue), or a decision overdue. Red means act now — not monitor.

:::caution The Milestone-Slip Rule
Never show GREEN for a project where a milestone has slipped without explicit acknowledgement. Even if the team is working on a recovery plan and you expect to be back on track next week — the slip happened. Acknowledge it (move to AMBER at minimum, RED if the slip puts the end target at risk), reforecast, and then return to GREEN once the reforecast is confirmed delivered. Showing GREEN while a slip is unacknowledged erodes trust in the dashboard.
:::

## Weekly Project Status

Before generating the full executive dashboard, run the weekly project status to get the per-project RAG assessment and critical path:

```
/agentic-office:progress-tracker
> type: weekly-status
```

**Sample Weekly Project Status:**

```
WEEKLY PROJECT STATUS — Week of 17 March 2026
════════════════════════════════════════════════════════════
── AgentFactory (P1) ───────────────────────────────────────
Status:           🟡 ON TRACK / WATCH
This week:        Chapter 28 narrative draft + skills library (both due Thursday)
Next:             Chapter 29 planning — starts Monday 24 March
Risk:             Two deliverables on same deadline; skills library at risk
                  if narrative runs long
This week's action: File Chapter 28 narrative by Wednesday to protect Thursday
Open delegations: None for this project

── Project Nighthawk (P2) ─────────────────────────────────
Status:           🔴 HARD BLOCKER
This week:        Formal letter to facility owner (Zia, due Wednesday)
Next:             Facility response expected within 5 business days of letter
Risk:             Q3 launch date at risk if response not received by 26 March
This week's action: Write and send formal letter today (Wednesday)
Open delegations: None — this is a direct escalation item

── BankersAI (P2) ─────────────────────────────────────────
Status:           🟢 ON TRACK
This week:        No action needed — next window is content review (opens 29 March)
Next:             Workshop #7 content review — 7-day window begins 29 March
Risk:             None this week
This week's action: Calendar note — set content review reminder for 29 March

── CRITICAL PATH (this week) ──────────────────────────────
  1. Nighthawk formal letter — Zia — Wednesday 19 March
  2. Chapter 28 narrative draft — Zia — Thursday 20 March
  3. Chapter 28 skills library — Zia — Thursday 20 March
  4. Omar confirmation on analytics brief — chase by 10:00 today

── BLOCKERS ────────────────────────────────────────────────
  🔴 Project Nighthawk: Facility agreement — STALE BLOCKER (10+ days)
     Owner of resolution: Zia Khan (formal letter); facility liaison
     Escalation: If no response by Wednesday 26 March → COO escalation
════════════════════════════════════════════════════════════
```

## Blocker Classification

The progress-tracker skill classifies blockers into three types, each with a different escalation response:

| Type              | Definition                                  | Action                                                                  |
| ----------------- | ------------------------------------------- | ----------------------------------------------------------------------- |
| **Soft blocker**  | Slowing progress; workaround exists         | Note it; monitor; apply the workaround; no escalation needed            |
| **Hard blocker**  | Progress cannot continue without resolution | Escalate immediately; name who must resolve; set deadline               |
| **Stale blocker** | Has been open >7 days without movement      | Escalate to next level; flag in digest; the owner has failed to resolve |

Project Nighthawk's facility status is a stale blocker — it was first a soft blocker (waiting for a response, work could continue elsewhere), then a hard blocker (Q3 planning cannot proceed without the facility), and now a stale blocker (10 days without movement means the original escalation attempt failed). The appropriate response is formal escalation: a letter to the facility owner, with COO escalation if there is no response within five business days.

The stale blocker classification matters because it names the escalation failure. A hard blocker says "this is stuck." A stale blocker says "this has been stuck for too long — the handling so far has not worked, and a different approach is needed."

## Configuring Your Dashboard

Add the dashboard configuration to `work.local.md`. Here is the Panaversity configuration:

```yaml
dashboard:
  sections:
    - p1_projects
    - p2_projects
    - key_metrics
    - open_actions
    - open_delegations
    - upcoming_decisions
    - calendar_highlights
  metrics_sources:
    hr: "Onboarding status; open positions; performance flags"
    finance: "Budget approvals pending; spend vs. plan"
    operations: "Compliance status; vendor renewals <90 days; change pipeline"
    sales: "Pipeline value; quota attainment"
  refresh: "Daily with digest; full weekly review on Monday"
  format: "One page; RAG status; action items explicit; 5-minute read"
```

Configure only the `metrics_sources` domains where you have deployed domain agents. If you have not deployed the HR domain agent (Chapter 37, planned), do not add `hr:` to the metrics sources — the dashboard will show an empty section, which is worse than no section.

The dashboard is designed to grow as you deploy more domain agents. Start with the domains you have and expand the `metrics_sources` configuration as new agents come online.

## Exercise: Build Your Executive Dashboard

**Type:** Configuration + Generation + The 5-Minute Test
**Time:** 40 minutes
**Plugin command:** `/agentic-office:progress-tracker`
**Goal:** Configure, generate, and validate your executive dashboard

### Step 1 — Configure (10 minutes)

Fill in the dashboard section of `work.local.md`:

- `sections:` — which of the seven sections to include
- `metrics_sources:` — only domains where you have deployed agents
- `refresh:` — when you want the dashboard generated
- `format:` — your quality standard

### Step 2 — Generate Weekly Status (5 minutes)

Run the weekly status first:

```
/agentic-office:progress-tracker
> type: weekly-status
```

Review the RAG status for each project. Apply the three rules explicitly for any project where you are uncertain: is there a missed milestone? A hard blocker? An overdue decision? Correct the status if needed.

### Step 3 — Generate Executive Dashboard (5 minutes)

Run the full dashboard:

```
/agentic-office:progress-tracker
```

Read it straight through. Do not evaluate yet — just read.

### Step 4 — The 5-Minute Test (20 minutes)

Show the dashboard to a colleague (or evaluate as if you were the colleague) and ask: "From this dashboard, can you tell me what my week looks like without asking a follow-up question?"

If yes: note what is working and why.
If no: identify what is missing and where it would come from in `work.local.md`.

Every gap in the 5-minute test is a `work.local.md` addition or a section configuration change. Make one change, regenerate, and repeat.

**Deliverable:** A configured `work.local.md` dashboard section, a generated executive dashboard with defensible RAG status for each project, and a 5-minute test result with at least one specific gap identified and addressed.

## Try With AI

:::tip Try With AI
Use these prompts in Cowork or your preferred AI assistant.

**Reproduce**: Generate Zia's executive dashboard using the case study data.

```
Generate an executive dashboard for the week of 17 March 2026 for Zia Khan,
CEO of Panaversity. Use this data:

Projects:
- AgentFactory (P1): Chapter 28 narrative draft due Thursday; Chapter 28
  skills library also due Thursday as a separate deliverable. Both are
  in progress. Risk: two deliverables on the same deadline.
- Project Nighthawk (P2): Karachi expansion. Facility agreement stalled
  10+ days. No response to previous follow-ups. Q3 launch at risk if
  not resolved by 31 March. Formal letter being drafted (Zia, due Wed).
  This is a STALE BLOCKER (10+ days without movement).
- BankersAI (P2): Workshop #7 coming. Content review window opens 29 March.
  No immediate actions needed.

Domain agent metrics:
- HR: Ayesha Raza — Day 4 onboarding. Dr. Sana Mirza joins Monday 23 March.
- Finance: Analytics budget approved in principle; Omar's ROI brief due Monday.
- Operations: BSI ISO 27001 renewal — delegated to compliance; no update.
              ERP migration in progress.

Open actions this week:
- Zia: Nighthawk formal letter (Wed 19 March)
- Zia: Chapter 28 narrative (Thu 20 March)
- Zia: Chapter 28 skills library (Thu 20 March)

Open delegations:
- Omar Farooq: analytics ROI brief — Mon 24 March — confirmed
- Compliance: BSI ISO renewal — this week — no update

Apply the RAG status rules:
- RED: milestone missed or at imminent risk; hard blocker; decision overdue
- AMBER: milestone at risk; minor blocker; decision needed this week
- GREEN: all milestones on schedule; no blockers; no overdue decisions

Never show GREEN for a project where a milestone has slipped without
explicit acknowledgement.
```

**What you are learning:** Generating the dashboard manually makes the RAG rules concrete. You cannot apply a rule you have not tested. Before the next lesson, you should be able to state — without looking — why Project Nighthawk is RED, why AgentFactory is AMBER, and why BankersAI is GREEN.

**Adapt**: Generate your own executive dashboard.

```
Generate an executive dashboard for my current work. Here is my data:

Projects:
[List your P1 and P2 projects with current status, this week's activity,
and any blockers. For each project, state: is there a missed milestone?
A hard blocker? A decision overdue? This will determine the RAG status.]

Domain agent metrics:
[List any relevant status from domains you are tracking:
HR, Finance, Operations, Sales, etc. Only include domains you have data for.]

Open actions this week:
[List actions due this week or overdue]

Open delegations:
[Who you are waiting on, for what, by when]

Apply the RAG rules to each project and generate the full executive dashboard.
Include the headline status based on the worst-case RAG across all projects.

After generating the dashboard, run the 5-minute test: "Could someone tell from
this dashboard what my week looks like without asking a follow-up question?"
If not, identify what context is missing.
```

**What you are learning:** The 5-minute test reveals the gap between what you know about your week (full context in your head) and what the dashboard captures (only what is in `work.local.md` and your explicit input). Closing that gap is the ongoing work of maintaining good workplace memory.

**Apply**: Imagine your manager sends this message on Monday morning: "What's the overall status this week? Can you send me a brief?" Run the executive dashboard and weekly status.

```
My manager has asked for a weekly status brief. Generate both:
(1) A weekly project status (RAG per project; critical path; blockers)
(2) An executive dashboard (full seven-section view)

Use the following data for my work this week:
[Paste your current project, delegation, and action data]

After generating both, evaluate: could you forward either of these directly
to your manager, or would they need editing? What does the answer tell you
about your work.local.md configuration quality?
```

**What you are learning:** The test of a good executive dashboard is whether it is directly forwardable. If you would need to edit it before sending, the gap between the generated output and what you would write is the measure of what is missing from your `work.local.md`. This is useful data — not a criticism of the tool.
:::

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 11: Cross-Domain Intelligence →](./11-cross-domain-intelligence.md)
