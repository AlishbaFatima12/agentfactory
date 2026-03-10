---
sidebar_position: 15
title: "Agent Orchestration and the Skill Library"
description: "Coordinate monitoring agents, reactive agents, and the global router into a unified revenue operations system — trace data flows between agents, apply collision resolution from L10-L11, and configure jurisdiction-aware orchestration"
keywords:
  [
    "agent orchestration",
    "sales-marketing-global-router",
    "skill library",
    "cross-agent coordination",
    "data flow",
    "agent handoff",
    "jurisdiction-aware agents",
    "RevOps system",
    "monitoring to reactive",
    "router delegation",
    "plugin architecture",
  ]
chapter: 23
lesson: 15
duration_minutes: 25

# HIDDEN SKILLS METADATA
skills:
  - name: "Trace Cross-Agent Data Flows and Handoffs"
    proficiency_level: "B2"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can diagram how Lead Intelligence flags a prospect, Outreach Sequencing starts a sequence, CRM Hygiene maintains the record, and Revenue Reporting includes it in forecast — tracing data at each handoff"

  - name: "Apply Collision Resolution to Agent Routing"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can trace the global router through Wrapper and Override patterns from L10-L11 and predict which layer handles a given agent dispatch"

  - name: "Configure Jurisdiction-Aware Agent Orchestration"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Safety"
    measurable_at_this_level: "Student can configure agent orchestration that adapts behavior based on jurisdiction overlays without changing the orchestration logic"

learning_objectives:
  - objective: "Diagram the full agent orchestration showing data flows between monitoring agents, reactive agents, and the global router"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Student produces a system diagram showing all 5 agents, the router, and data flows with labeled handoff points"

  - objective: "Trace the global router's interaction with collision resolution patterns from L10-L11"
    proficiency_level: "B2"
    bloom_level: "Apply"
    assessment_method: "Student can explain what happens when the router dispatches to outreach — does it go to base or extension? (Override from L11 — extension always wins)"

  - objective: "Configure orchestration that adapts to jurisdiction overlays from L12"
    proficiency_level: "B2"
    bloom_level: "Apply"
    assessment_method: "Student demonstrates the same orchestration running for Pakistan and EU jurisdictions with different compliance behaviors"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "Agent orchestration (coordination between multiple agents)"
    - "Cross-agent data handoff (output of one agent triggers another)"
    - "Global router in orchestration context (dispatches to agents, not just skills)"
    - "Jurisdiction-aware orchestration (same logic, different compliance rules)"
    - "Monitoring-to-reactive handoff (Lead Intelligence → Outreach Sequencing)"
  assessment: "5 concepts at B2 level. This is the capstone architectural lesson. Concepts build on L10-L14. Lower concept count because the focus is synthesis, not new knowledge."

differentiation:
  extension_for_advanced: "Design a custom orchestration that adds a 6th agent: a 'Deal Health' agent that monitors deals in late pipeline stages and triggers alerts when momentum stalls. Define its data sources, cadence, handoffs to existing agents, and stop conditions."
  remedial_for_struggling: "Focus on one handoff: Lead Intelligence flags a prospect → does Outreach Sequencing start automatically? If you can trace this one data flow and identify where a human approval gate should go, you understand orchestration."
---

# Agent Orchestration and the Skill Library

In Lesson 13, you deployed monitoring agents that watch your pipeline and report what they find. In Lesson 14, you deployed a reactive agent that responds to events in real time. Each agent works. Each agent produces value. And each agent operates in isolation. The Lead Intelligence agent flags a high-scoring prospect at 6 AM. The Outreach Sequencing agent sits idle because nobody told it a prospect was flagged. The CRM Hygiene agent runs its weekly cleanup without knowing that outreach started three days ago. The Revenue Reporting agent generates a forecast that does not include the prospect that Lead Intelligence scored at 81 because nobody passed the data forward.

This is the gap between agents and a system. Individual agents produce output. **Agent orchestration** produces outcomes. Orchestration is the coordination layer that connects monitoring agents, reactive agents, and the `sales-marketing-global-router` into a unified revenue operating system where the output of one agent becomes the input of the next.

This lesson connects every agent you have built into a single architecture. You will trace data flows between agents, apply the collision resolution patterns from Lessons 10 and 11 to understand how the router dispatches within an orchestrated system, configure jurisdiction-aware orchestration that adapts compliance behaviour without changing the coordination logic, and diagnose the failure mode that appears only when agents are connected: data staleness at handoff points.

## The Five Agents and the Router

Before tracing any data flow, name every component in the system. You built these across Lessons 9, 13, and 14:

| Component | Type | Cadence | What It Does |
|-----------|------|---------|-------------|
| **Lead Intelligence** | Monitoring agent | Daily | Scores prospects using three-dimension model (Fit/Timing/Engagement). Flags prospects above threshold. |
| **CRM Hygiene** | Monitoring agent | Weekly | Validates CRM records. Detects stale data, missing fields, duplicate entries. |
| **Revenue Reporting** | Monitoring agent | Monthly | Generates pipeline forecast. Calculates conversion rates by stage. |
| **Outreach Sequencing** | Reactive agent | Event-triggered | Starts and manages multi-touch sequences. Pauses on reply. Resumes on silence. |
| **Marketing Performance** | Monitoring agent | Weekly | Tracks campaign attribution. Reports channel ROI. |
| **`sales-marketing-global-router`** | Router | On-demand | Dispatches queries to the correct skill or agent. Applies Wrapper, Override, or Delegation based on query complexity. |

Six components. Three monitoring agents that observe on a schedule. One reactive agent that responds to events. One monitoring agent that tracks marketing metrics. One router that dispatches everything else. The question is: how do they talk to each other?

## The Full Orchestration Trace

Walk through a complete scenario. Farhan at NexaFlow Technologies in Karachi has a prospect in the pipeline. Watch what happens when the system is orchestrated versus when agents run independently.

### Step 1: Lead Intelligence Flags a Prospect (Daily Run, 6:00 AM)

The `lead-intelligence-agent` runs its daily scan. It evaluates a new prospect: TechVista Solutions, a mid-market SaaS company in Lahore that posted two data-engineering job openings yesterday.

```
LEAD INTELLIGENCE — Daily Scan
Date: 2026-03-10

NEW FLAG: TechVista Solutions (Lahore)
─────────────────────────────────────
Fit Score:        38/40
  Company size:     180 employees (ICP: 50-500) ✓
  Industry:         SaaS / Data Analytics ✓
  Tech stack:       PostgreSQL, AWS, hiring Kafka engineers ✓✓
  Budget indicator: Series B funded (2025) ✓

Timing Score:     35/40
  Trigger event:    2 Kafka engineer job postings (yesterday)
  Buying stage:     Infrastructure investment phase
  Urgency:          High — scaling data pipeline actively

Engagement Score: 8/20
  LinkedIn activity: CTO liked 1 data infrastructure post
  Website visits:    None detected
  Prior contact:     None

TOTAL: 81/100 — ABOVE THRESHOLD (75)
SIGNAL: Active infrastructure investment
RECOMMENDATION: Begin outreach sequence
```

**Output:** A scored prospect with a recommendation to begin outreach.

The critical question: **who receives this output?**

In an unorchestrated system, this report goes to a dashboard. A human reads it at 9 AM, decides to act on it, and manually triggers outreach. Three hours of latency. In an orchestrated system, the output goes directly to the next agent.

### Step 2: The Router Dispatches (Automatic)

The orchestration layer passes the Lead Intelligence flag to the `sales-marketing-global-router`. The router must decide: which agent or skill handles "Begin outreach sequence for TechVista Solutions"?

This is where collision resolution from Lessons 10 and 11 applies at the orchestration level.

The router evaluates the query:
- **Is this a simple, single-dimension query?** No. Starting a sequence requires prospect research, ICP context, Five Laws enforcement, and multi-touch cadence design.
- **Does the extension have a skill for this?** Yes. The extension's `outreach` skill handles sequence creation with Five Laws enforcement.
- **What collision resolution pattern applies?** Override. The extension's `outreach` skill replaces the base entirely (from Lesson 11) because Five Laws enforcement cannot coexist with the base's generic outreach.

```
ROUTER DISPATCH
─────────────────────────────────────
Query: "Begin outreach sequence for TechVista Solutions"
Source: Lead Intelligence flag (score: 81/100)

Resolution: OVERRIDE
  Base outreach: SKIPPED (Five Laws conflict)
  Extension outreach: DISPATCHED
  Reason: Multi-dimension query requiring Five Laws
           enforcement — extension always wins per L11 pattern

Data passed to Outreach Sequencing:
  - Prospect: TechVista Solutions, Lahore
  - Score: 81/100 (Fit 38, Timing 35, Engagement 8)
  - Trigger: Kafka job postings
  - ICP match: Strong fit
  - Configuration: sales-marketing.local.md (Pakistan region)
```

**Output:** The router dispatches to the extension's outreach skill, passing the full context from Lead Intelligence. The base outreach skill does not execute.

### Step 3: Outreach Sequencing Builds a Sequence (Reactive)

The `outreach-sequencing-agent` receives the dispatch and builds a Five Laws-compliant sequence. It has the prospect data, the ICP context, and the trigger event. It does not need to re-research TechVista — that intelligence came from Lead Intelligence.

```
OUTREACH SEQUENCING — New Sequence Created
──────────────────────────────────────────
Prospect: TechVista Solutions (Lahore)
Trigger: Lead Intelligence flag (score 81)
Sequence: 5-touch, 14-day cadence

Touch 1 (Day 0 — Email):
  Five Laws applied:
    ✓ Law 1: References Kafka job postings (specific, verifiable)
    ✓ Law 2: Opens with TechVista's scaling challenge
    ✓ Law 3: Single ask — 15-minute diagnostic call
    ✓ Law 4: 142 words (limit: 150 for cold)
    ✓ Law 5: Zero jargon (0 of 17 banned words)

Touch 2 (Day 3 — LinkedIn):
  Engagement note referencing CTO's data infrastructure post

Touch 3 (Day 7 — Email):
  Case study: similar Lahore SaaS company, 51% cost reduction

Touch 4 (Day 10 — WhatsApp):
  Brief value proposition, local market reference

Touch 5 (Day 14 — Email):
  Final ask with deadline context

STATE: Active — awaiting Touch 1 delivery
PAUSE TRIGGER: Any reply → pause sequence, notify human
```

**Output:** A complete outreach sequence with state tracking. The reactive agent now monitors for replies.

### Step 4: Touch 2 Gets a Reply (Day 4)

TechVista's CTO replies to Touch 2 on LinkedIn. The reactive agent detects the reply and pauses the sequence — this is the state machine from Lesson 14.

```
OUTREACH SEQUENCING — State Change
──────────────────────────────────
Prospect: TechVista Solutions
Event: Reply received on Touch 2 (LinkedIn)
Previous state: Active (Touch 3 scheduled for Day 7)
New state: PAUSED

Action: Sequence paused. Touch 3 cancelled.
Notification: Sent to sales rep — human conversation required.
Data: Reply content + full sequence context available for pre-call brief.
```

**Output:** The sequence pauses. The data — including the original Lead Intelligence scoring, the outreach history, and the reply content — remains available for the next stage.

### Step 5: CRM Hygiene Updates the Record (Weekly Run)

The `crm-hygiene-agent` runs its weekly scan. It detects the new prospect record created when outreach began and validates it.

```
CRM HYGIENE — Weekly Scan
─────────────────────────
Record: TechVista Solutions
Status: Active prospect — outreach in progress

Validation:
  ✓ Company name: Matches LinkedIn company page
  ✓ Contact: CTO — verified from LinkedIn reply
  ✗ Deal stage: Still "New Lead" — should be "Engaged"
    → Auto-updated to "Engaged" (reply received Day 4)
  ✗ Engagement score: Still 8/20 from initial scoring
    → Updated to 14/20 (LinkedIn reply + sequence engagement)
  ✓ Data freshness: All fields updated within 7 days
```

**Output:** Updated CRM record with corrected deal stage and refreshed engagement score. This updated data is now available to any agent that queries the CRM.

### Step 6: Revenue Reporting Includes the Prospect (Monthly Run)

The `revenue-reporting-agent` generates the monthly pipeline forecast. TechVista Solutions appears with its updated data.

```
REVENUE REPORTING — Monthly Forecast (March 2026)
──────────────────────────────────────────────────
Pipeline Summary:
  Active prospects: 23
  New this month: 4 (including TechVista Solutions)

  TechVista Solutions:
    Stage: Engaged
    Score: 81/100 (updated engagement: 14/20)
    Deal size estimate: PKR 4.2M/year
    Probability: 35% (Engaged stage baseline)
    Weighted value: PKR 1.47M

  Pipeline total: PKR 47.3M weighted
  Forecast confidence: Moderate (3 deals in late stage)
```

**Output:** TechVista appears in the forecast with up-to-date data. Without orchestration, the monthly report would show the initial score of 81 with engagement at 8/20 and deal stage "New Lead" — stale data that understates the opportunity.

### The Data Flow Map

Trace what passed between agents at each handoff:

| Handoff | From | To | Data Transferred | What Could Get Lost |
|---------|------|----|-----------------|---------------------|
| 1 → 2 | Lead Intelligence | Router | Score (81), trigger event, ICP match | Trigger event detail (why NOW) |
| 2 → 3 | Router | Outreach Sequencing | Full prospect context + collision resolution | ICP configuration path |
| 3 → 4 | Outreach Sequencing | CRM Hygiene (indirect) | Sequence created, prospect record updated | Sequence state (active/paused) |
| 4 → 5 | CRM Hygiene | Revenue Reporting (indirect) | Updated engagement score, deal stage | Score update timestamp |

The "What Could Get Lost" column is the orchestration design challenge. Every handoff is a potential data gap. The next section shows what happens when one of those gaps is real.

## Router and Collision Resolution in Orchestration

The `sales-marketing-global-router` does not only dispatch to skills. In an orchestrated system, it dispatches to agents — and the same collision resolution patterns from Lessons 10 and 11 apply.

When the router dispatches within the orchestration, it applies the same three patterns:

| Dispatch Target | Pattern | What Happens |
|----------------|---------|-------------|
| `outreach` skill | **Override** (L11) | Extension replaces base. Five Laws enforced. Base outreach never executes. |
| `campaign-planning` skill | **Wrapper** (L10) | Both layers execute. Base provides channel taxonomy. Extension adds ICP targeting and local currency. |
| Simple status query | **Delegation** (L11) | Router sends to base. Extension not needed. Fast response. |
| Complex multi-skill query | **Delegation** (L11) | Router sends to extension. Multiple skills coordinated. |

The router's decision logic has not changed from Lesson 11. What changed is the **context**: the router now dispatches within a system of connected agents rather than in response to a human typing a command. The same Override that made Five Laws enforcement possible for single commands now makes Five Laws enforcement automatic across the entire orchestration.

This is the design payoff of collision resolution. You invested two lessons understanding Wrapper, Override, and Delegation for individual skills. That investment compounds when agents are orchestrated — every agent that dispatches through the router inherits the collision resolution logic without any additional configuration.

## Jurisdiction-Aware Orchestration

The orchestration you traced above runs for Farhan's pipeline in Pakistan. Sarah at Meridian Logistics in London runs the same system for her UK and EU pipeline. The agents are the same. The handoffs are the same. The router dispatches the same way. What changes is the **compliance behaviour** at each step.

### Same Orchestration, Different Compliance

| Orchestration Step | Pakistan (PECA) | EU (GDPR) |
|-------------------|-----------------|-----------|
| Lead Intelligence flags prospect | Scores normally. No consent requirement for research from public sources. | Scores normally. Public source research permitted under legitimate interest. |
| Router dispatches to outreach | Override applies. Five Laws enforced. PECA overlay adds: no misleading subject lines, sender identification required. | Override applies. Five Laws enforced. GDPR overlay adds: consent check before cold outreach. If no consent record exists, **sequence blocked**. |
| Outreach Sequencing builds sequence | 5-touch sequence with WhatsApp (B2B WhatsApp common in Pakistan). PECA-compliant sender identification in every message. | Sequence starts only after consent verification. WhatsApp touch removed (no prior consent for WhatsApp in EU cold outreach). 4-touch email-only sequence. |
| CRM Hygiene validates record | Standard validation. Checks for data freshness and completeness. | Standard validation **plus** data retention check. Records older than consent period flagged for deletion review. |
| Revenue Reporting generates forecast | Standard forecast. PKR currency. | Standard forecast. GBP currency. Excludes prospects with expired consent from active pipeline count. |

The orchestration logic — Lead Intelligence flags, router dispatches, Outreach Sequencing builds, CRM Hygiene validates, Revenue Reporting forecasts — is identical in both jurisdictions. The jurisdiction overlays from Lesson 12 modify behaviour at each step without changing the coordination between agents.

This is the design principle: **orchestration defines the flow; jurisdiction overlays define the constraints.** You do not build a separate orchestration for Pakistan and another for the EU. You build one orchestration and let the overlays adapt each agent's behaviour.

### The GDPR Block

The most visible difference is the GDPR outreach block. In Pakistan, Lead Intelligence flags a prospect and outreach begins. In the EU, Lead Intelligence flags a prospect and outreach waits.

```
ROUTER DISPATCH — EU Jurisdiction
─────────────────────────────────
Query: "Begin outreach sequence for DataStream GmbH"
Source: Lead Intelligence flag (score: 78/100)

JURISDICTION CHECK: EU (GDPR overlay active)
  Consent record for DataStream GmbH: NOT FOUND
  Cold outreach without consent: BLOCKED

Resolution: HOLD
  Outreach Sequencing: NOT dispatched
  Alternative: Route to consent-acquisition workflow
  Notification: Sales rep notified — manual consent
                required before automated outreach

Data retained for post-consent activation:
  - Lead Intelligence score and context
  - ICP match assessment
  - Prepared sequence (5-touch, ready to activate)
```

The system does not fail. It adapts. The sequence is prepared but not sent. The data from Lead Intelligence is retained so that when consent is acquired, outreach can begin immediately with fresh context. The orchestration handled the jurisdiction constraint without any change to the coordination logic.

## Failure Analysis: Context Loss Between Agents

Every orchestration has a failure mode that only appears when agents are connected. In Lesson 6, you saw **Context Loss** within a single pipeline — intelligence from one stage failing to reach a later stage. In an orchestrated multi-agent system, Context Loss is more dangerous because the gap is harder to trace.

### The Stale Research Problem

Lead Intelligence flags TechVista Solutions based on a fresh signal: two Kafka job postings from yesterday. The flag includes the trigger event, the score, and the ICP match. The router dispatches to Outreach Sequencing. Outreach Sequencing receives the dispatch and starts building a sequence.

But Outreach Sequencing does not use the Lead Intelligence data directly for the email body. It calls the `outreach` skill, which calls the `prospect-research` skill to get the latest research brief. That research brief was last generated 60 days ago — before the Kafka job postings, before the CTO's LinkedIn activity, before the Series B announcement.

```
CONTEXT LOSS DETECTED
─────────────────────
Agent: Outreach Sequencing
Expected context: Fresh signal (Kafka job postings, yesterday)
Actual context: Research brief from 60 days ago

Result:
  Touch 1 references "PostgreSQL scaling challenges" (from
  60-day-old brief) instead of "Kafka infrastructure
  investment" (from yesterday's trigger).

  The prospect receives an outreach email about a problem
  they were working on two months ago — not the problem
  they are solving right now.

Error type: CONTEXT LOSS
  The flag was fresh. The data the flag triggered on was stale.
  Lead Intelligence detected a new signal. Outreach Sequencing
  used old research. The handoff preserved the score but lost
  the context that made the score meaningful.
```

### Tracing the Gap

Where did the data get lost? Walk the handoff chain:

1. **Lead Intelligence** detects fresh signal (Kafka postings). Includes signal in flag output. Data: fresh.
2. **Router** receives flag with signal context. Dispatches to Outreach Sequencing. Data passed: score, trigger event, ICP match. Data: fresh.
3. **Outreach Sequencing** receives dispatch. Starts building sequence. Calls `outreach` skill. The `outreach` skill calls `prospect-research` to get the prospect's research brief. **The research brief is 60 days old.** Data: stale.

The gap is at step 3. The router passed fresh context. Outreach Sequencing received it. But when the `outreach` skill fetched the research brief independently, it retrieved the cached version instead of incorporating the fresh data from the flag.

### The Fix

Two approaches:

**Approach A: Pass-through context.** The orchestration layer passes the Lead Intelligence output directly into the outreach skill call, overriding the cached research brief. The outreach email references the fresh signal because the data was threaded through the handoff chain.

**Approach B: Research refresh trigger.** When Lead Intelligence flags a prospect, the orchestration first dispatches a research refresh before dispatching outreach. The research brief is regenerated with current data, and the outreach skill picks up the fresh version.

Approach A is faster but tightly couples Lead Intelligence output format to Outreach Sequencing input requirements. Approach B is slower (two dispatches instead of one) but keeps agents loosely coupled — each agent uses its standard data source, and the orchestration ensures freshness by triggering a refresh before the handoff.

Neither approach is wrong. The choice depends on how tightly you want your agents coupled. In NexaFlow's fast-moving market (Karachi, logistics tech), Approach A's speed advantage matters. In Meridian's regulated environment (London, EU compliance), Approach B's auditability matters — you want a clear record that the research was regenerated before outreach began.

## Hands-On: Map Your Agent Orchestration

You have traced a complete orchestration for NexaFlow. Now design one for your own pipeline.

### Step 1: Choose Your Agents

Pick 3-4 agents from this list that match your sales process:

| Agent | Deploy If... |
|-------|-------------|
| Lead Intelligence | You need daily prospect scoring and new-signal detection |
| CRM Hygiene | Your CRM has data quality issues (stale records, missing fields) |
| Outreach Sequencing | You run multi-touch outreach sequences |
| Marketing Performance | You run campaigns and need attribution tracking |
| Revenue Reporting | You generate pipeline forecasts |

Write them down with their cadence:

| Agent | Cadence | Why This Cadence |
|-------|---------|-----------------|
| [Your agent 1] | [Daily/Weekly/Monthly/Event] | [Reason] |
| [Your agent 2] | [Cadence] | [Reason] |
| [Your agent 3] | [Cadence] | [Reason] |

### Step 2: Map the Handoffs

For each pair of agents, answer:

- **Does Agent A's output trigger Agent B?** If yes, what data flows between them?
- **Is the handoff automatic or does a human gate it?** For outreach in regulated markets, a human gate before automated messaging is often required.
- **What data could get lost at this handoff?** Use the TechVista stale-research example as a template.

Draw the flow:

```
[Agent 1] ---(data: what?)---> [Router] ---(pattern: W/O/D)---> [Agent 2]
                                                                    |
                                                              [Agent 3] (indirect, via CRM)
```

### Step 3: Deploy Two Coordinating Agents

Pick two of your chosen agents and deploy them. Run them for one cycle each. Then ask: **does data actually flow between them, or do they operate in silos?**

Run the Lead Intelligence agent for one prospect:

```
Scan my pipeline and score the top 3 prospects using three-dimension
scoring (Fit/Timing/Engagement, each out of 40, 40, 20). For each
prospect above 75/100, identify the trigger event and recommend
whether to begin outreach immediately or wait for higher engagement.
```

**Output:**

Look at the output. Does it include enough context for Outreach Sequencing to start without re-researching? If the flag says "Score: 82, ICP match: strong" but does not include the trigger event or the prospect's current pain point, the handoff will produce generic outreach. The flag must carry the context that makes the score meaningful.

Now run the Outreach Sequencing agent using the Lead Intelligence output:

```
A monitoring agent flagged this prospect:

[Paste the Lead Intelligence output for your top-scored prospect]

Build a 5-touch outreach sequence using the Five Laws. Reference the
specific trigger event from the monitoring agent's flag — do not
re-research the prospect from scratch. The sequence should demonstrate
that the outreach is driven by the monitoring agent's intelligence,
not by generic research.
```

**Output:**

Compare the outreach to what you would get without the Lead Intelligence context. Does the sequence reference the trigger event? Does it use the scoring data to prioritise which pain point to lead with? If the outreach looks identical to what you would get by running `/build-sequence` without the monitoring agent's data, the handoff failed — the agents are operating in silos even though you connected them manually.

### Step 4: Evaluate the Orchestration

| Question | Your Answer |
|----------|-------------|
| Does Lead Intelligence output carry enough context for Outreach Sequencing? | |
| Where would you add a human approval gate? | |
| Which jurisdiction overlays would you need? | |
| Where is the most likely point of Context Loss? | |

## Try With AI

Use these prompts in Claude or your preferred AI assistant.

### Prompt 1: Trace and Diagnose an Orchestration Failure

```
I have 5 agents in a sales orchestration:

1. Lead Intelligence (daily) — scores prospects, flags above 75
2. Outreach Sequencing (reactive) — builds multi-touch sequences
3. CRM Hygiene (weekly) — validates and updates CRM records
4. Marketing Performance (weekly) — tracks campaign attribution
5. Revenue Reporting (monthly) — generates pipeline forecast

A global router dispatches between them using Override for outreach,
Wrapper for campaign-planning, and Delegation for everything else.

Here is the problem:
Lead Intelligence flagged a prospect 3 weeks ago (score: 84).
Outreach Sequencing started a 5-touch sequence.
Touch 3 generated a reply.
The sequence paused correctly.
The sales rep had a meeting.
But Revenue Reporting's monthly forecast does NOT include this
prospect — it shows the pipeline as if the prospect does not exist.

Trace the data flow from Lead Intelligence to Revenue Reporting.
Identify where the data was lost. Propose two fixes: one that
changes the orchestration logic, and one that changes the data
architecture. Which fix would you recommend and why?
```

**What you are learning:** Diagnosing orchestration failures requires tracing data across multiple agents and identifying where a handoff dropped context. This mirrors real RevOps debugging — when a forecast does not match pipeline activity, the problem is rarely in the forecasting agent. It is usually in a handoff upstream. By proposing two different fix categories (orchestration logic vs data architecture), you develop the habit of separating coordination problems from data problems, which is the most important diagnostic distinction in multi-agent systems.

### Prompt 2: Design Jurisdiction-Aware Orchestration for Your Market

```
I am building a sales orchestration for [describe your market:
geography, industry, regulatory environment].

My agents:
1. [Agent 1 — what it does, cadence]
2. [Agent 2 — what it does, cadence]
3. [Agent 3 — what it does, cadence]

My jurisdictions:
- Primary: [country/region and key regulation]
- Secondary: [country/region and key regulation]

Design the orchestration:
1. Map the data flow between agents (what passes at each handoff)
2. Identify where jurisdiction overlays change behaviour
3. Show me one scenario where the primary jurisdiction allows
   an action that the secondary jurisdiction blocks
4. Where should human approval gates go?
5. What is the most likely Context Loss point in this orchestration?

For the jurisdiction-blocked scenario, show how the orchestration
adapts without changing the agent coordination logic.
```

**What you are learning:** Designing jurisdiction-aware orchestration forces you to separate coordination logic from compliance rules. The exercise reveals whether you can maintain a single orchestration architecture across multiple regulatory environments or whether your design requires jurisdiction-specific coordination — which is a sign of tight coupling between business logic and compliance logic. The Context Loss question at the end trains you to anticipate failure modes before they appear in production, which is the difference between reactive debugging and proactive system design.
