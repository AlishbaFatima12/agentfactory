---
slug: /Business-Domain-Agent-Workflows/productivity-agentic-office/the-complete-agentic-office
sidebar_position: 14
title: "The Complete Agentic Office"
description: "Wire everything together — review your work.local.md completeness, configure agent integrations and trigger events, set escalation thresholds, run the integration smoke test across all three commands, and define the maintenance cadence that keeps your agentic office current"
keywords:
  [
    "complete agentic office",
    "agent integrations",
    "trigger events",
    "escalation thresholds",
    "integration smoke test",
    "maintenance cadence",
    "work.local.md capstone",
    "agentic office configuration",
    "Part 3 capstone",
    "cross-domain integration",
    "progress tracker",
    "workplace search",
  ]
chapter: 39
lesson: 14
duration_minutes: 90

# HIDDEN SKILLS METADATA
skills:
  - name: "Assemble a Complete work.local.md with All Seven Sections"
    proficiency_level: "C1"
    category: "Technical"
    bloom_level: "Create"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can produce a complete work.local.md with all seven sections populated — personal profile, team memory, project memory, organisational context, digest configuration, dashboard configuration, and agent integrations — passing a completeness checklist for each section"

  - name: "Run an Integration Smoke Test Across Three Core Commands"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can run /agentic-office:progress-tracker, /agentic-office:digest, and /agentic-office:workplace-search in sequence, evaluate each output against accuracy criteria, and identify the specific work.local.md gaps that explain any inaccuracies"

  - name: "Define a Sustainable Maintenance Cadence for an Agentic Office"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can define a complete maintenance cadence (daily/weekly/monthly/quarterly) that specifies what is automatic, what is manual review, what is audited, and what is restructured — with clear rationale for each frequency"

learning_objectives:
  - objective: "Review a work.local.md built across Lessons 3-13 against a completeness checklist and identify gaps in each of the seven sections"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Student produces a gap analysis against the seven-section checklist, identifying at least two sections that require additional content before the smoke test"

  - objective: "Configure the complete agent_integrations block — including chief_of_staff feeds_from, memory_keeper triggers, meeting_intelligence calendar config, and work_tracker thresholds"
    proficiency_level: "B2"
    bloom_level: "Apply"
    assessment_method: "Student produces a correctly structured agent_integrations YAML block that connects domain agents from Part 3 (Chapters 28-38) to the Chief of Staff's feeds_from list"

  - objective: "Run the three integration smoke test commands and evaluate each output for accuracy, completeness, and source coverage"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Student produces an A/B/C grade for each command output with specific rationale — A = forward directly; B = minor edit; C = significant gaps — and maps each C-grade gap to a specific work.local.md section"

  - objective: "Define a four-frequency maintenance cadence (daily/weekly/monthly/quarterly) that distinguishes automatic from manual operations at each frequency"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Student's cadence document specifies for each frequency: what runs automatically, what requires manual review, and what specific output is produced"

cognitive_load:
  new_concepts: 3
  concepts_list:
    - "Agent integration configuration — connecting domain agents from Part 3 to the Chief of Staff's feeds_from via work.local.md"
    - "Trigger event definitions — the event-to-action mapping that converts reactive monitoring into proactive coordination"
    - "Four-frequency maintenance cadence — daily (automatic), weekly (manual review), monthly (audit), quarterly (restructure)"
  assessment: "3 new concepts at B2-C1 level. This is a capstone lesson — cognitive load is deliberately low because the lesson is primarily integration and synthesis of everything learned in Lessons 3-13. The three new concepts (agent integration config, trigger definitions, maintenance cadence) are the final assembly steps. The challenge is not conceptual novelty but completeness — ensuring nothing was missed across eleven lessons of progressive construction."

differentiation:
  extension_for_advanced: "After completing the standard smoke test, design a stress test: configure the system with deliberately incomplete context (e.g. remove Project Nighthawk from work.local.md entirely) and re-run /agentic-office:workplace-search asking what is at risk. Does the output degrade gracefully (acknowledges missing context) or silently (pretends it has complete information)? What does the failure mode tell you about the robustness assumptions built into your configuration? Then design a recovery protocol for context gaps detected at smoke test time."
  remedial_for_struggling: "Skip the full smoke test for now — focus on completing the work.local.md review (Step 1) and the agent integrations (Step 2). A complete work.local.md is the prerequisite for everything else. If your file is missing significant sections, run the relevant lessons again (Lesson 3 for Layers 1+4, Lesson 4 for Layer 2, Lesson 5 for Layer 3) before attempting the smoke test. An incomplete smoke test is less useful than a complete memory file."

teaching_guide:
  key_points:
    - "This lesson is an integration exercise, not a new concepts lesson — the value is in verifying that all eleven prior lessons produced a coherent, functional system. Most readers will discover at least one section of work.local.md that is incomplete; that gap is the lesson's learning outcome"
    - "The smoke test grade (A/B/C) is the most important output — it creates a direct, actionable link between output quality and memory configuration quality. A C-grade output is not a failure; it is a diagnostic that tells you exactly which section of work.local.md to improve"
    - "The maintenance cadence is the capstone insight: a system that is configured once and never maintained becomes wrong, and wrong context is worse than no context. Defining the cadence is the commitment to treat work.local.md as a living document, not a one-time setup"
    - "The closing insight connects this lesson to the book's central thesis: when the agentic office works, Claude stops being a chatbot you brief every session and starts behaving like a knowledgeable colleague. That transformation depends entirely on the quality and currency of work.local.md"
  misconceptions:
    - "Once configured, the agentic office runs without maintenance. Correction: the agents automate maintenance proposals — the Memory Keeper proposes updates, the Work Tracker flags stale items — but the user must confirm and act on those proposals. An unreviewed Memory Keeper is not better than no Memory Keeper."
    - "A C-grade smoke test output means the system is broken. Correction: it means work.local.md has gaps for that specific output domain. The system is working correctly — it is surfacing the gaps. Each C-grade is a specific instruction about which memory layer to improve."
  discussion_prompts:
    - "You run the /agentic-office:workplace-search smoke test and ask 'what is at risk across all my projects and domains right now?' The output mentions AgentFactory and BankersAI but says nothing about Project Nighthawk. What does this tell you? Where specifically in work.local.md would you look to fix it?"
    - "The maintenance cadence distinguishes daily (automatic), weekly (manual review), monthly (audit), and quarterly (restructure). Which of these four frequencies do you think is most likely to be skipped in practice? What would happen to the agentic office after 6 months of skipping that frequency?"
  teaching_tips:
    - "The seven-section completeness checklist (Step 1) is the lesson's anchor — walk through it slowly before doing anything else. Many readers will be surprised by what is missing. This review is not a failure check; it is a prioritisation exercise for the session."
    - "The A/B/C grading framework for smoke test outputs gives readers a concrete vocabulary for evaluating agent outputs in future sessions. After this lesson, they should apply this grading instinctively whenever they receive any AI output — not just in the agentic office context."
---

# The Complete Agentic Office

This is the final exercise of Chapter 39 — and the integration exercise for all of Part 3.

You have built four memory layers. Configured nine skills. Deployed four agents. Learned to produce daily digests, executive dashboards, meeting intelligence, delegation records, and cross-domain context searches. Across twelve lessons, you have constructed every component of the agentic office.

This lesson wires everything together. It reviews what you have built, adds the agent integration layer, runs the integration smoke test, and defines the maintenance cadence that keeps the system accurate and self-sustaining.

"The Digital Chief of Staff is not a single agent. It is the emergent result of four agents working together with a comprehensive `work.local.md` and all the domain agents from Part 3. When it works, Claude stops being a chatbot you brief every session and starts behaving like a knowledgeable colleague."

This lesson is the test of whether it works.

:::note Capstone Structure
This is a 75-90 minute exercise. Each step builds on the previous. Complete them in order — skipping the review phase means the smoke test will surface gaps you could have fixed in 15 minutes at the start.
:::

## Step 1 — Review Your work.local.md (15 minutes)

Before testing anything, verify that `work.local.md` is complete. Use this checklist:

### Section 1: Personal Profile (Layer 1)

- [ ] Your role, organisation, and reporting relationships
- [ ] Your decision-making style and preferences
- [ ] Your communication preferences (format, channel, frequency)
- [ ] Your priorities for this quarter (Boulders, in Panaversity's terminology)
- [ ] Your working style and context-switching preferences

### Section 2: Team Memory (Layer 2)

- [ ] At least 5 people entries with name, role, and communication style
- [ ] Each entry includes at least: contact preference, current focus, relationship notes
- [ ] Dr. Sana Mirza entry updated with onboarding status (joining 17 March)
- [ ] Omar Farooq entry includes: lead time preferences, scope clarity requirement
- [ ] Ayesha Raza entry includes: new hire context, onboarding window

### Section 3: Projects (Layer 3)

- [ ] At least 3-5 active projects with codenames
- [ ] Each project includes: priority (P1/P2/P3), status, owner, key risks
- [ ] AgentFactory: Chapter 39 draft status, Q2 launch target
- [ ] Project Nighthawk: current status (escalation in progress), Q3 risk
- [ ] BankersAI: Workshop #7 details, content review deadline

### Section 4: Organisational Context (Layer 4)

- [ ] At least 15 terminology entries (Boulders, Digital FTE, AgentFactory, etc.)
- [ ] Meeting rhythm (Executive Weekly, Chapter Review, Banker Workshop)
- [ ] Cultural norms and unwritten rules
- [ ] Decision-making protocols (CLEAR values, evidence-first, "disagree and commit")
- [ ] Communication rules (async-first, Slack/email/WhatsApp routing)

### Section 5: Digest Configuration

- [ ] `digest_time` set
- [ ] `channel` configured (where digest is delivered)
- [ ] Section order configured (what appears first in digest)

### Section 6: Dashboard Configuration

- [ ] Domains listed (which domain agents feed the dashboard)
- [ ] Refresh frequency configured
- [ ] RAG threshold values set (what makes a project go from Green to Amber to Red)

### Section 7: Agent Integrations

- [ ] `chief_of_staff` block with schedule and threshold
- [ ] `memory_keeper` block with triggers and staleness thresholds
- [ ] `meeting_intelligence` block with calendar config and deadlines
- [ ] `work_tracker` block with confirmation windows and audit schedule

**What to do with gaps:** Note the section and what is missing. If a section is largely empty, return to the relevant lesson and complete the exercise before proceeding. An incomplete smoke test is less useful than a 15-minute fix.

## Step 2 — Add the Agent Integrations Configuration (10 minutes)

If you completed Step 2 in Lesson 13, verify the configuration is complete. If not, add it now.

The full `agent_integrations` block connects the four productivity agents to each other and to the domain agents from Chapters 28-38:

```yaml
agent_integrations:
  chief_of_staff:
    feeds_from:
      - finance_agent: "Budget approvals pending; month-end status"
      - ops_agent: "Compliance dashboard; vendor renewals; change pipeline"
      - sales_agent: "Pipeline; quota; key deal status"
      - hr_agent: "Onboarding status; open positions; compliance training"
      # Add any domain agents you configured in Chapters 28-38
    delivers_to: "Daily digest; executive dashboard"

  memory_keeper:
    triggers:
      - "New person mentioned in conversation"
      - "New project name used"
      - "Meeting completed"
      - "Decision made"
      - "Term used that is not in terminology dictionary"
    updates: "work.local.md — specific section per trigger type"

  meeting_intelligence:
    calendar_integration: "Google Calendar via MCP"
    prep_lead_time: "30 minutes"
    synthesis_deadline: "2 hours"
    always_update:
      - "project status"
      - "decision log"
      - "delegation log"

  work_tracker:
    overdue_threshold_days: 7
    delegation_confirmation_window: 24 # hours
    escalation_path: "digest flag → explicit message → COO-level if 14 days"
    weekly_delegation_audit: "Friday 16:00"
```

For the `chief_of_staff.feeds_from` section: add entries for every domain agent you have deployed from Part 3. If you worked through Chapters 28-34, you likely have agents for finance, accounting/CPA, sales/RevOps, and supply chain. Add them here so the Chief of Staff pulls from all of them.

## Step 3 — Define Your Trigger Events (10 minutes)

Trigger events define which external occurrences should automatically activate agent actions. These go in a `triggers` section of `work.local.md`:

```yaml
triggers:
  - event: "Meeting ends"
    action: "Meeting Intelligence Agent produces synthesis within 2 hours"

  - event: "New project starts"
    action: "Memory Keeper creates project entry; Work Tracker sets up tracking"

  - event: "Delegation made"
    action: "Work Tracker logs; sets confirmation window; schedules check-in"

  - event: "Regulatory change detected"
    action: "Compliance Monitor alerts; Ops agent updates obligation map"

  - event: "Vendor renewal <90 days"
    action: "Vendor Watchdog alerts; Chief of Staff adds to dashboard"

  - event: "New employee starts"
    action: "HR Onboarding Orchestrator activates; Memory Keeper adds person entry"
```

Adapt these for your context. If you do not have a sales function, remove the vendor renewal trigger. If you are in a regulated industry, the regulatory change trigger may be the most important one you configure.

## Step 4 — Set Your Escalation Thresholds (10 minutes)

For every category of item that can go stale, define the threshold and the escalation action:

```yaml
escalation_thresholds:
  delegated_task_unconfirmed:
    threshold: 24 # hours
    escalation: "flag in digest → send follow-up message → user decides"

  project_without_status_update:
    threshold: 7 # days
    escalation: "flag in digest → explicit alert → COO-level if 14 days"

  compliance_obligation_overdue:
    threshold: 3 # days before due date
    escalation: "immediate digest flag → explicit alert day-of"

  vendor_renewal_approaching:
    threshold: 90 # days before renewal
    escalation: "add to dashboard → flag in digest 60 days out → urgent 30 days out"

  meeting_action_unclosed:
    threshold: 7 # days
    escalation: "flag in next digest → follow-up in meeting synthesis"
```

The threshold values above are defaults calibrated for Panaversity's operating pace. Adjust them based on your organisational norms. A fast-moving startup may need half these thresholds; a large enterprise may need double.

## Step 5 — The Integration Smoke Test (15 minutes)

Run the following three commands in sequence. For each, grade the output A, B, or C:

- **A** — Could forward this output directly. Accurate, complete, correctly sourced.
- **B** — Needs minor editing. Mostly right but missing one or two items.
- **C** — Needs significant work. Missing key domains, incorrect status, or incomplete sourcing.

### Command 1: Executive Dashboard

```
/agentic-office:progress-tracker
```

Expected: A full cross-domain RAG dashboard showing status for all active projects and any domain agent feeds configured in `agent_integrations`. Project Nighthawk should show RED (escalation in progress). AgentFactory should show AMBER (Chapter 39 due Thursday). BankersAI should show GREEN (workshop prep on track).

**What to check:**

- Are all projects showing?
- Are RAG statuses accurate given the current case study context?
- Are domain agent feeds pulling in? (If finance_agent is configured, is there a budget status line?)
- Is the blocker section populated? (Nighthawk escalation should appear)

### Command 2: Daily Digest

```
/agentic-office:digest
```

Expected: The full morning digest structure from Lesson 8 — today's priorities, at-risk items, delegation status, meeting prep, and digest notes. Nighthawk should be flagged RED (>7-day threshold). Omar's analytics brief should show confirmation status. The Executive Weekly prep note should appear.

**What to check:**

- Is the at-risk section showing Nighthawk correctly?
- Is the delegation section showing Omar's brief (midpoint due today)?
- Is the meeting prep section showing the Executive Weekly?
- Is anything present that should not be there?

### Command 3: Cross-Domain Intelligence Search

```
/agentic-office:workplace-search
> What is at risk across all my projects and domains right now?
```

Expected: A comprehensive cross-domain risk summary drawing from all configured memory layers and domain agent feeds. It should surface:

- Project Nighthawk: facility stall, Q3 timeline risk
- AgentFactory: Chapter 39 deadline Thursday (amber risk)
- Delegation: Ayesha's analysis 5 days without update
- Pending: Banker Workshop content review approaching

**What to check:**

- Does the answer cover all three active projects?
- Does it pull from both `work.local.md` and any domain agent feeds?
- Does it distinguish between confirmed risks (Nighthawk) and emerging risks (Ayesha's delegation)?
- Is anything at risk that the search did not surface?

### Evaluate Your Results

Record your grades. For each C-grade output:

1. Identify which section of `work.local.md` is the likely source of the gap
2. Add the missing content
3. Re-run that command
4. Regrade

Most C-grades trace to one of three gaps: Layer 3 (projects not fully populated), `agent_integrations.chief_of_staff.feeds_from` (domain agents not listed), or digest/dashboard configuration (incomplete threshold or section settings).

## Step 6 — Evaluate the Results (15 minutes)

For each output from the smoke test, go deeper than the A/B/C grade:

| Question                        | What You Are Looking For                                                     |
| ------------------------------- | ---------------------------------------------------------------------------- |
| Is it accurate?                 | Does the status information match what is actually in work.local.md?         |
| Is it pulling from all sources? | Are all configured domains appearing in the dashboard and digest?            |
| Is anything missing?            | What would a knowledgeable colleague include that the output omitted?        |
| Is anything wrong?              | Any incorrect status, wrong owner, stale data that should have been updated? |
| Is it production-ready?         | Would you send this output to your COO as-is? If not, what would you change? |

The final question — "would you send this to your COO?" — is the real test. Professional-grade outputs from an agentic office should be indistinguishable from outputs a skilled Chief of Staff would produce manually. If your outputs are not at that standard yet, the gap is almost always in the specificity of the underlying `work.local.md`, not in the agents themselves.

## Step 7 — Define the Maintenance Cadence (10 minutes)

The agentic office is only valuable if it stays current. An outdated `work.local.md` does not just produce less useful outputs — it produces confidently wrong outputs, which are worse than no output at all.

Define your maintenance cadence at four frequencies:

### Daily (Automatic)

What the agents handle without intervention:

- Work Tracker: pull open tasks, sort by urgency, flag overdue/unconfirmed
- Chief of Staff: deliver digest at 07:00
- Memory Keeper: trigger on events (new person, new project, meeting, decision)
- Meeting Intelligence: prep brief 30 minutes before significant meetings

Your role: confirm Memory Keeper proposals. Review digest. Act on flags.

### Weekly (Manual Review)

What you review every week:

- Monday: Confirm Memory Keeper's weekly maintenance proposals
- Friday: Review Work Tracker's delegation audit — are any patterns worth addressing?
- Friday: Review Meeting Intelligence's weekly audit — any recurring meetings to restructure?
- Update project statuses for any project where status changed this week

Your role: 20-30 minutes every Monday and Friday to confirm and review.

### Monthly (Audit)

What you audit once a month:

- Terminology dictionary: any terms added that are redundant, vague, or no longer used?
- People entries: have roles, priorities, or communication preferences changed?
- Project list: are all listed projects still active? Any completed but not closed?
- Decision log: are there decisions that have since been reversed or evolved?

Your role: 30-45 minutes, once a month. Treat it as a standing appointment.

### Quarterly (Restructure)

What you restructure every quarter:

- Project priorities: has the P1/P2/P3 assignment still correct given the quarter's progress?
- Organisational structure: has anything changed about your team, reporting, or scope?
- Boulder review: did last quarter's Boulders translate to actual progress? What shifts for next quarter?
- Agent configuration: do the thresholds still match your current operational pace?

Your role: 60-90 minutes, every quarter. This is the equivalent of a quarterly review with a Chief of Staff — the conversation where you recalibrate together.

## The Closing Insight

You began Chapter 39 with the Context Problem: every domain agent from Chapters 28-38 was brilliant within its domain and amnesiac across sessions. The finance agent knew nothing about the sales pipeline. The supply chain agent had never heard of Project Nighthawk. Every context switch required a briefing. Every new session started from zero.

What you have built across these fifteen lessons is the solution to that problem. Not by giving agents a longer memory — but by giving them a shared context. One file, four layers, four agents, eleven skills — all pointing at the same `work.local.md`.

**What this means in practice:**

When you ask `/agentic-office:workplace-search` "what is at risk?", it knows about Nighthawk because that project is in Layer 3. It knows the Q3 timeline because the risk is recorded there. It knows Omar's communication preference because that is in Layer 2. It knows that the CLEAR values matter because they are in Layer 4.

The intelligence is not in the agent. The intelligence is in the context the agent has access to. The agent is the synthesiser; `work.local.md` is the memory.

When the system works correctly — when the Memory Keeper keeps the context current, the Work Tracker ensures nothing falls through the cracks, the Meeting Intelligence captures every decision, and the Chief of Staff synthesises all of it into a coherent operational picture every morning — Claude stops being a chatbot you brief every session and starts behaving like a knowledgeable colleague.

That colleague knows your organisation, your people, your projects, and your priorities. It can tell you what is at risk before you ask. It can draft the escalation message for Nighthawk and know to copy the COO. It can flag that Ayesha is a new hire and that a delayed review sends exactly the wrong signal.

That is the agentic office.

## Exercise: The Full Integration

**Type:** Capstone Integration
**Time:** 75-90 minutes
**Goal:** Complete work.local.md, configure agent integrations, define triggers and thresholds, run and evaluate the smoke test, define maintenance cadence

Work through Steps 1-7 above in sequence. Each step has a specific deliverable:

| Step                     | Time   | Deliverable                                   |
| ------------------------ | ------ | --------------------------------------------- |
| 1. Review work.local.md  | 15 min | Completed checklist with gaps identified      |
| 2. Agent integrations    | 10 min | Complete agent_integrations YAML block        |
| 3. Trigger events        | 10 min | Triggers section in work.local.md             |
| 4. Escalation thresholds | 10 min | Escalation thresholds configured              |
| 5. Smoke test            | 15 min | Three command outputs with A/B/C grades       |
| 6. Output evaluation     | 15 min | Gap analysis mapped to work.local.md sections |
| 7. Maintenance cadence   | 10 min | Four-frequency cadence document               |

**Final deliverable:** Complete `work.local.md` with all seven sections populated. Smoke test results showing at least two A-grade outputs. Written maintenance cadence defining what you will review daily, weekly, monthly, and quarterly.

## Try With AI

:::tip Try With AI
Use these prompts in Cowork or your preferred AI assistant.

**Reproduce**: Run the full integration smoke test using case study data.

```
I want to run a full integration smoke test for an agentic office
configured for Zia Khan at Panaversity.

Context:
- Active projects: AgentFactory (Ch 39 due Thursday, Q2 launch target),
  Project Nighthawk (facility stall 10+ days, Q3 at risk — escalation in progress),
  BankersAI (Workshop #7 content review due in 7 days)
- Delegations: Omar Farooq — analytics ROI brief (due Friday, midpoint check-in today);
  Ayesha Raza — Chapter 38 analysis (due Wednesday, 5 days no update)
- Escalation threshold: 7 days (Nighthawk has breached this)

Run these three commands in sequence and show the expected output for each:

1. /agentic-office:progress-tracker — full dashboard with RAG status
2. /agentic-office:digest — full morning digest for Monday 17 March 2026
3. /agentic-office:workplace-search — "what is at risk across all my projects
   and domains right now?"

For each output, note: what context was required? What is the RAG status for
each project? What would a C-grade version of this output look like
(i.e. what does incomplete work.local.md context produce)?
```

**What you are learning:** Running all three commands in sequence shows how the same underlying context (work.local.md) produces three different types of output — structured dashboard, narrative digest, and responsive search. The C-grade comparison is critical: it shows exactly what degrades when memory is incomplete, which is more instructive than seeing a perfect output.

**Adapt**: Run the same three commands with your own work.local.md and grade each output.

```
I want to run the integration smoke test with my own professional context.
I will describe my work.local.md content and you will generate the expected
outputs for each command.

My context:
- My role: [Your role and organisation]
- Active projects: [Name, status, priority, key risks for each]
- Delegations: [Who, what, due when, any overdue or unconfirmed]
- Escalation threshold: [N days]
- Domain agents configured: [Which Part 3 domain agents you have deployed]

Generate:
1. /agentic-office:progress-tracker output
2. /agentic-office:digest output (for next Monday morning)
3. /agentic-office:workplace-search — "what is at risk right now?"

After each output, grade it A/B/C:
A = I would forward this directly
B = needs minor editing
C = needs significant work

For each C grade, tell me which section of work.local.md to improve
and what specifically is missing.
```

**What you are learning:** The A/B/C grading process forces you to be specific about what "good" looks like for your context. Most people grade their first outputs B or C — and the specific C grades are the most valuable output of the entire capstone exercise, because each one is a direct instruction about where to invest your next 15 minutes of work.local.md improvement.

**Apply**: Test the system on a Monday morning scenario and evaluate whether it delivers a complete operational picture.

```
It is Monday morning. I want to test whether a fully configured agentic
office would give me everything I need to start the week without gathering
additional information manually.

Run the full Chief of Staff Monday sequence:
1. Week-ahead brief (06:45)
2. Daily digest (07:00)
3. Executive dashboard (on demand)

Context for this Monday:
- My top priority this week: [State it]
- Biggest risk: [What could go wrong this week]
- Most important meeting: [Name it and what is at stake]
- One delegation I am waiting on: [Who, what, due when]
- One decision I cannot defer: [What is it]

After generating all three outputs, tell me:
- Could I start working immediately after reading them, or would I still
  need to gather information manually?
- What is the single most important piece of context that would improve
  the quality of all three outputs?
- If I could only improve one section of work.local.md today, which
  section would improve the outputs the most?
```

**What you are learning:** The Monday morning test is the real-world validation of the agentic office. The question — "could you start working immediately, or do you still need to gather information manually?" — is the test that matters. If the answer is "still need to gather," then the system is not yet at the colleague level. The follow-up questions guide you toward the highest-leverage improvement, which is almost always specificity in one memory layer rather than coverage across all of them.
:::

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 15: Summary and Quick Reference →](./15-summary-quick-reference.md)
