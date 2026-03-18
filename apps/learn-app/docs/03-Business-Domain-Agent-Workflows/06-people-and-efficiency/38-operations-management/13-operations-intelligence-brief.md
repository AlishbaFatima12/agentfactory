---
slug: /Business-Domain-Agent-Workflows/operations-management/operations-intelligence-brief
sidebar_position: 13
title: "Operations Intelligence Brief"
description: "Synthesise agent outputs, operational metrics, and status reports into a single COO-level operations intelligence brief that tells a coherent story about operational health — not just a concatenation of reports"
keywords:
  [
    "operations intelligence brief",
    "COO brief",
    "operations reporting",
    "agent synthesis",
    "status report",
    "operational metrics",
    "operations management",
    "operations plugin",
    "operations intelligence",
    "metrics command",
    "status-report command",
  ]
chapter: 38
lesson: 13
duration_minutes: 35

# HIDDEN SKILLS METADATA
skills:
  - name: "Synthesise Multiple Agent Outputs into a Single Operations Intelligence Brief"
    proficiency_level: "C1"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Content-Creation"
    measurable_at_this_level: "Student can gather agent alerts, metrics data, and status report output, then synthesise these into a single coherent brief that tells a decision-ready story rather than concatenating separate reports"

  - name: "Use /status-report and /metrics Together to Build the Intelligence Layer"
    proficiency_level: "B2"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can use /status-report to generate the baseline structured report and /metrics to provide the trend analysis — and can combine both with agent outputs into a unified brief"

  - name: "Write an Executive Summary and Prioritised Recommended Actions for Operational Intelligence"
    proficiency_level: "C1"
    category: "Soft"
    bloom_level: "Evaluate"
    digcomp_area: "Communication"
    measurable_at_this_level: "Student can write a one-page executive summary from the synthesised brief and identify the top three recommended actions — each specific, owned, and time-bound"

learning_objectives:
  - objective: "Execute the five-step synthesis workflow to produce a full monthly operations intelligence brief from agent outputs, metrics, and status report"
    proficiency_level: "B2"
    bloom_level: "Apply"
    assessment_method: "Student completes the exercise and produces a complete brief containing: agent alert summary, metrics RAG table, status report backbone, executive summary, and top 3 recommended actions"

  - objective: "Evaluate a draft operations intelligence brief for coherence — distinguishing a brief that tells a story from one that merely concatenates reports"
    proficiency_level: "C1"
    bloom_level: "Evaluate"
    assessment_method: "Student reviews two sample briefs (one coherent, one concatenated) and articulates the specific structural and narrative differences that make one actionable and the other not"

  - objective: "Distinguish between weekly alert cadence and monthly intelligence brief cadence, and describe what belongs in each"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student maps a list of ten operational data points to either the weekly alert or the monthly brief, with correct reasoning for each placement"

cognitive_load:
  new_concepts: 3
  concepts_list:
    - "Operations intelligence brief — a synthesised COO-level document combining agent reports, metrics, and status into a coherent operational narrative"
    - "Synthesis vs. concatenation — the difference between a brief that tells a story (connecting signals across domains) and one that simply lists outputs from separate sources"
    - "Weekly vs. monthly intelligence cadence — what belongs in a quick weekly alert versus what belongs in the full monthly brief"
  assessment: "3 concepts at C1 level. Students have already built all the component inputs across Lessons 3-12. The new skill is synthesis — connecting the signals from separate domains into a coherent narrative. This is a higher-order task (Create/Evaluate on Bloom's) but the domain knowledge is already established."

differentiation:
  extension_for_advanced: "After completing the monthly brief exercise, produce a quarterly strategic review using the same synthesis approach. The quarterly review adds trend analysis (comparing three months of briefs), regulatory change implications for the next quarter, and a strategic recommendation on whether the organisation's operations function needs to invest in additional capability. What questions does the brief raise that a one-month view cannot answer?"
  remedial_for_struggling: "Focus on the executive summary alone. Given a complete brief with all sections filled in, can you write a one-page summary that: (a) states the overall operational health status, (b) identifies the most critical issue, and (c) recommends one specific action? The executive summary is the hardest part — if you can write a decision-ready one-pager, the rest of the brief is scaffolding that supports it."

teaching_guide:
  key_points:
    - "The intelligence brief is a synthesis task, not a compilation task — the COO gets a coherent story, not four reports stapled together"
    - "The value of combining /status-report (backbone) with /metrics (trend analysis) and agent outputs (monitoring intelligence) is that each source contributes something the others cannot: the status report provides structure, metrics provide trend context, agents provide the monitoring signals that would otherwise be missed"
    - "The executive summary is the most difficult part — it requires judgment about which signals matter most, which can be delegated, and what the COO needs to decide versus what the team should handle"
    - "The weekly vs. monthly cadence distinction is operationally important: the weekly alert is a decision trigger (act now or by a specific date); the monthly brief is a narrative update (this is the state of operations, these are the patterns, these are the strategic recommendations)"
  misconceptions:
    - "Combining reports creates an intelligence brief. Correction: combining reports creates a combined report. An intelligence brief synthesises signals across domains, identifies the pattern that each domain alone cannot see, and draws conclusions from the combination. If a vendor SLA breach, a related compliance obligation gap, and an overdue change in the same system all appear in one brief — a synthesising brief would flag that they are connected."
    - "More data in the brief is always better. Correction: the intelligence brief's job is to surface the signals that matter, not to include everything. A brief that includes every agent alert, every metric, and every status update is not useful to a COO. The synthesis step involves selecting, prioritising, and connecting — not aggregating."
    - "The recommended actions section is optional. Correction: the recommended actions section is the brief's entire purpose. An operations intelligence brief without recommended actions is a status report. The COO reading a brief should be able to make decisions from it — not read it and then ask what to do next."
  discussion_prompts:
    - "If you are the COO reading this brief for the first time this month, what is the first question you ask? Does the brief answer that question without requiring you to ask it?"
    - "A vendor SLA breach appears in the Vendor Watchdog section. A compliance obligation that depends on that vendor's performance appears in the Compliance Monitor section. The change that was supposed to fix the vendor's reliability issue appears in the Change Tracker as overdue. Does your brief connect these three signals? Would a COO who reads each section separately notice the connection?"
  teaching_tips:
    - "The lesson should feel like a payoff — students have built 11 lessons of operational intelligence and now see it all come together in a single, coherent briefing document. Frame it that way explicitly."
    - "The five-step synthesis workflow should be taught as a repeatable process, not as a one-time exercise. Once students can run this workflow, they can produce the monthly brief in under 30 minutes from the agent outputs and metrics data."
---

# Operations Intelligence Brief

Every Monday morning the COO opens four agent reports, a metrics dashboard, two status emails from department heads, and a risk log that was last updated three weeks ago. Everything is there. The CRM renewal is in the Vendor Watchdog report. The compliance obligation with aging evidence is in the Compliance Monitor. The change that was supposed to fix the infrastructure issue is flagged as overdue in the Change Tracker. The process health report is somewhere in the inbox.

Nothing connects to anything else. Nobody has drawn the line between the vendor SLA breach, the compliance obligation that depends on that vendor's performance, and the change that was supposed to resolve both — but hasn't moved in six weeks.

This is the problem that the operations intelligence brief solves. It is not a new data source. Every input into the brief has already been produced by the systems and agents you built across Lessons 3-12. The brief synthesises those inputs into a single, coherent document that tells the COO the state of the organisation's operations, surfaces the connections that individual reports cannot see, and recommends specific actions.

The difference between a report and an intelligence brief is synthesis. This lesson teaches you how to synthesise.

:::tip Plugin Setup Reminder
This exercise requires the **Operations** plugin (official) and the **Operations Intelligence** plugin (custom). If you have not installed them, follow the instructions in the [Chapter 38 prerequisites](./README.md#prerequisites) before continuing.
:::

## The Brief's Inputs

The monthly operations intelligence brief draws from five sources:

| Source                    | Plugin Command / Source          | What It Contributes                                                          |
| ------------------------- | -------------------------------- | ---------------------------------------------------------------------------- |
| Agent alerts (L12)        | Four persistent agents           | Monitoring signals: what needs attention across vendor, process, compliance, change |
| Agent monthly reports (L12) | Four persistent agents         | Full-domain status per agent: the structured data behind the alerts          |
| Operational metrics (L11) | `/metrics`                       | Trend analysis: are things getting better or worse?                          |
| Status report backbone    | `/status-report`                 | Structured format with KPIs, risks, and actions in one coherent structure    |
| Risk register status (L09)| From operational risk register   | Outstanding risks and their current mitigation status                        |

Each source contributes something the others cannot. The status report provides structure. The metrics provide trend context. The agent reports provide the monitoring intelligence that structured status reporting cannot capture (because it requires continuous monitoring). The risk register provides the standing risk context.

Without all five, the brief is incomplete:

- **Without agent reports:** The brief covers what was measured but misses what was not — the unapproved vendor payment, the orphaned SOP, the change missing its rollback plan.
- **Without metrics:** The brief covers today's status but not the direction of travel. A compliance score of 82% is concerning if it was 91% last month; it is improving if it was 74%.
- **Without the status report backbone:** The brief has inputs but no structure. The COO receives a wall of information rather than a navigable document.
- **Without the risk register:** The brief does not connect current operational issues to their risk implications. An overdue change and a related SLA breach may together constitute an operational risk that neither alone would trigger.

## Using `/status-report` as the Backbone

The official `/status-report` command generates structured status reports with KPIs, risks, and actions. It is the right tool for establishing the brief's skeleton — a consistent structure that the COO can navigate quickly and that ensures no section is omitted.

**Worked example.** You have gathered agent outputs, metrics data, and risk register status for the month. You build the backbone:

```
/status-report
Generate the monthly operations status report for our 200-person UK
professional services firm. Period: [Month Year].

Key operational data for this period:

VENDOR STATUS:
- 47 vendors; total monthly spend £154,200 (within budget)
- 3 renewals in next 90 days: [CRM £124,000, HR platform £31,000,
  analytics £45,000]
- 1 SLA breach active: CloudHost UK — 99.67% uptime (contracted 99.9%)
  — week 3 of breach

PROCESS STATUS:
- 23 active SOPs; 2 overdue for review; 1 orphaned (owner departed)
- 3 change-triggered reviews pending from last month's system changes
- No Tier 1 SOPs overdue >30 days

COMPLIANCE STATUS:
- 34 obligations; 28 CURRENT, 5 REVIEW/PARTIAL, 1 GAP
- GAP obligation: OBL-019 — data processor agreement register —
  18 days open, no remediation progress
- 2 obligations due for review in next 30 days

CHANGE STATUS:
- 12 open changes; 2 Major, 4 Significant, 6 Standard
- 1 Major change (ERP upgrade) missing rollback plan — go-live in 8 days
- 1 PIR overdue: CH-2024-071 CRM upgrade — 12 days past due date

RISK REGISTER:
- 8 risks OPEN; 3 HIGH, 4 MEDIUM, 1 LOW
- Top risk: vendor single-source dependency (cloud infrastructure) — no change

Format as: Executive Summary | Current Status | Risks | Actions | Upcoming.
```

**What to expect:** A structured status report with sections for executive summary, current status by domain, risks, required actions, and upcoming items. This is your skeleton. The next steps add flesh.

| Report Section    | What `/status-report` Provides                              | What You Add in Synthesis                                    |
| ----------------- | ----------------------------------------------------------- | ------------------------------------------------------------ |
| Executive summary | Structured overview of KPIs and overall status              | Narrative thread connecting the month's most significant signals |
| Current status    | Domain-by-domain snapshot                                   | Trend context from `/metrics`; connection to agent alerts    |
| Risks             | Current risk register items                                 | Agent-detected risks not yet in the register                 |
| Actions           | Actions from each domain                                    | Prioritisation across domains; ownership and deadlines       |
| Upcoming          | Known upcoming events                                       | Agent-forecast items (renewals, review schedules, go-lives)  |

## Using `/metrics` for Trend Analysis

The official status report tells you where things stand. The custom `/metrics` command tells you whether they are improving or deteriorating — which is often the more important question.

**Worked example.** After generating the status report backbone, you add the trend layer:

```
/metrics
Generate the monthly operational metrics analysis for [Month Year].

Prior month baselines (for trend analysis):
- Vendor SLA compliance: 94% last month
- Compliance obligation current rate: 85% last month
- SOP library currency: 91% last month
- Change success rate (no rollback): 89% last month
- Open risk items: 6 last month

Current period:
- Vendor SLA compliance: 91% (CloudHost breach ongoing)
- Compliance obligation current rate: 82% (new GAP obligation)
- SOP library currency: 87% (2 overdue reviews, 1 orphaned)
- Change success rate: 100% this month (no rollbacks required)
- Open risk items: 8

Generate:
1. RAG status table for each metric (Red/Amber/Green with thresholds)
2. Month-on-month trend for each metric (improving/stable/deteriorating)
3. Metrics that changed status this month (Green→Amber or Amber→Red)
4. Leading indicator assessment — which current trends suggest next month risk?
```

**What to expect:** A RAG table showing each metric's current status, trend direction, and threshold boundaries — plus an assessment of which deteriorating metrics are leading indicators of next-month problems.

**RAG table example output:**

```
OPERATIONAL METRICS — [Month Year]
══════════════════════════════════════════════════════════
Metric                   Current  Prior   Trend    RAG
─────────────────────────────────────────────────────────
Vendor SLA compliance    91%      94%     ↓ -3pp   🟡 AMBER
Compliance current rate  82%      85%     ↓ -3pp   🟡 AMBER
SOP library currency     87%      91%     ↓ -4pp   🟡 AMBER
Change success rate      100%     89%     ↑ +11pp  🟢 GREEN
Open risk items          8        6       ↑ +2     🟡 AMBER
══════════════════════════════════════════════════════════

METRICS THAT CHANGED STATUS THIS MONTH:
None changed classification — all were Amber last month
(Note: if Compliance current rate drops another 3pp next
month, it will enter RED territory — threshold is 79%)

LEADING INDICATOR ASSESSMENT:
⚠️  Three metrics deteriorating simultaneously (vendor SLA,
    compliance, SOP currency) suggests systemic attention
    deficit in the operations function — not three isolated
    problems. Recommend: review operations team capacity.

CloudHost SLA breach (week 3) is likely to affect both vendor
SLA compliance AND a related compliance obligation (if a
data processing agreement requires uptime guarantees). Cross-
reference OBL-019 for dependency — this may be connected.
══════════════════════════════════════════════════════════
```

:::info The Value of the Leading Indicator Assessment
The `/metrics` output identified something that neither the status report nor the individual agent reports surfaced: three metrics deteriorating simultaneously suggests a systemic issue. Each metric is Amber for a different reason — but the pattern suggests the operations team is stretched thin. This cross-domain pattern is only visible when you look at all the metrics together.
:::

## The Five-Step Synthesis Workflow

Once you have the backbone (status report) and the trend analysis (metrics), synthesis follows a repeatable five-step workflow.

**Step 1: Gather.** Collect all inputs in one place:
- Agent monthly reports from Lesson 12 (all four agents)
- `/status-report` output from Step 1 above
- `/metrics` RAG table and trend analysis from Step 2 above
- Risk register current state (from Lesson 9)

**Step 2: Connect.** Identify signals from different domains that are related:
- Does a vendor SLA breach connect to a compliance obligation that depends on that vendor?
- Does a change that is overdue connect to a risk register item that the change was supposed to mitigate?
- Does a GAP compliance obligation appear in the same domain as an agent alert about aging evidence?

The connections are the intelligence. Individual reports cannot surface them; only human (or AI) synthesis can.

**Step 3: Generate the backbone brief.** Use `/status-report` to produce the structured skeleton.

**Step 4: Enrich.** Add the trend layer from `/metrics`, the monitoring intelligence from agent reports, and the cross-domain connections identified in Step 2.

**Step 5: Write the executive summary and recommended actions.** The summary is one page. The recommended actions are three — specific, owned, and time-bound.

```
Synthesise the following into a monthly operations intelligence brief
for the COO:

STATUS REPORT:
[Paste /status-report output]

METRICS ANALYSIS:
[Paste /metrics RAG table and trend analysis]

AGENT REPORTS:
Vendor Watchdog: [paste or describe key findings]
Process Health: [paste or describe key findings]
Compliance Monitor: [paste or describe key findings]
Change Tracker: [paste or describe key findings]

CONNECTIONS TO SURFACE:
1. CloudHost SLA breach (Vendor Watchdog) → Check OBL-019
   (Compliance Monitor) for dependency — these may be connected
2. ERP upgrade missing rollback plan (Change Tracker) →
   Related to risk item R-003 in risk register (vendor dependency)
3. Three metrics deteriorating simultaneously — may indicate
   operations team capacity issue (from /metrics leading indicator)

Produce: Executive Summary (max 1 page) | Status by Domain
| Cross-Domain Connections | Recommended Actions (top 3, specific,
owned, time-bound) | Upcoming (next 30 days)
```

## Weekly vs. Monthly Intelligence Cadence

The intelligence brief is not the only output the agents produce. Understanding the two cadences prevents information overload:

| Cadence       | What It Contains                                      | Audience         | Purpose                                           |
| ------------- | ----------------------------------------------------- | ---------------- | ------------------------------------------------- |
| **Weekly**    | Agent alerts only — items needing action this week    | Operational team | Decision triggers — act by a specific date        |
| **Monthly**   | Full intelligence brief — narrative, trends, patterns | COO (+ Board quarterly for compliance) | Strategic narrative — state of operations, patterns, strategic recommendations |

The weekly alerts require action now. The monthly brief provides the context that makes those actions meaningful.

:::caution Weekly Alerts Are Not Mini-Briefs
A common mistake is to write the weekly alert as a summary of all operational activity that week. A weekly alert should contain only items requiring action this week — renewals approaching, compliance reviews due, changes blocked. Everything else goes into the monthly brief. Conflating the two creates noise that desensitises recipients to real urgency.
:::

## Exercise: Create the Monthly Operations Intelligence Brief (Exercise 13)

**Type:** Intelligence synthesis
**Time:** 25 minutes
**Plugin commands:** Official `/status-report` + Custom `/metrics` + agent outputs from Lesson 12
**Goal:** Produce a complete monthly operations intelligence brief with executive summary and three recommended actions

:::tip Plugin Setup Reminder
This exercise requires both the **Operations** plugin (official) and the **Operations Intelligence** plugin (custom).
:::

### Step 1 — Gather Inputs

Use the agent outputs you generated in Lesson 12's exercise, or simulate them using the running context:

- **Vendor Watchdog output:** 2 upcoming renewals (CRM £124,000 and analytics £45,000 both due within 60 days), 1 SLA breach (CloudHost — week 3), 1 spend variance resolved last week
- **Process Health output:** 2 SOPs overdue for review, 1 orphaned SOP (owner left), 3 change-triggered reviews pending
- **Compliance Monitor output:** 1 GAP obligation (OBL-019 — data processor register — 18 days open), 2 obligations due for review next 30 days, 1 regulatory change (ICO guidance on LIA — impact assessment pending)
- **Change Tracker output:** 1 Major change missing rollback plan (go-live in 8 days), 1 PIR overdue 12 days, 1 stale approval (4 weeks with no implementation)
- **Risk register:** 8 open risks; top risk is cloud vendor single-source dependency (unchanged)

### Step 2 — Generate the Status Report Backbone

```
/status-report
Generate the monthly operations status report for [Month Year].
[Paste the inputs from Step 1 above — vendor status, process status,
compliance status, change status, risk register status]
Format: Executive Summary | Status by Domain | Risks | Actions | Upcoming
```

### Step 3 — Generate the Metrics Analysis

```
/metrics
Generate the monthly operational metrics analysis.
Prior month: Vendor SLA 94%, Compliance current 85%, SOP currency 91%,
Change success 89%, Open risks 6.
Current month: Vendor SLA 91%, Compliance current 82%, SOP currency 87%,
Change success 100%, Open risks 8.
Generate: RAG table, month-on-month trends, leading indicator assessment.
```

### Step 4 — Identify Cross-Domain Connections

Before synthesising, identify at least two cross-domain connections in the data. Look for:
- A vendor issue and a compliance obligation that may be related
- A change and a risk register item that connect
- A pattern across multiple deteriorating metrics

### Step 5 — Synthesise the Full Brief

```
Synthesise the following into a monthly operations intelligence brief
for the COO. The brief must tell a coherent story — not concatenate
sections. Identify the cross-domain connections I highlighted and
surface them explicitly in the narrative.

[Paste /status-report output from Step 2]
[Paste /metrics output from Step 3]
[List cross-domain connections from Step 4]

Produce:
1. Executive Summary — max 1 page, decision-ready
2. Status by Domain — with trend context from /metrics
3. Cross-Domain Intelligence — the connections across domains
4. Top 3 Recommended Actions — specific, owned, time-bound
5. Upcoming — next 30 days
```

### Step 6 — Evaluate the Brief

**What to evaluate:**

- Does the brief **tell a coherent story** — or does it just list the contents of each agent's report? If the Cross-Domain Intelligence section is absent or generic, the brief is a compilation, not a synthesis.
- Are the **top 3 recommended actions** specific? "Address compliance gap" is not specific. "Appoint interim DPO by [date] to complete data processor register; escalate OBL-019 to CLOSED status before 30-day GAP escalation deadline" is specific.
- Does the **executive summary fit on one page**? Would a COO who reads only the executive summary understand the month's most critical operational issues and what to do about them?
- Would the **COO be able to act** on this brief without asking follow-up questions? If the brief raises a question it does not answer, it is incomplete.
- Does the **cross-domain section** surface connections that the individual domain sections did not? If the cross-domain section only repeats what each agent already said, no synthesis has occurred.

**Deliverable:** A complete monthly operations intelligence brief — the operational payoff of everything built in Lessons 3-12. Save this brief as a template. Future months repeat the same five-step synthesis workflow with updated inputs.

:::note The Brief as a Template
The operations intelligence brief you produce in this exercise is a template for every future month. The five-step workflow — gather, connect, backbone, enrich, summarise — is the same process every month. The inputs change; the workflow does not. Once you have run it once with a real organisation, the monthly brief should take under 30 minutes.
:::

## Try With AI

:::tip Try With AI
**Reproduce**: Apply what you just learned to a simple case.

```
I have the following operational data for a 30-person technology startup
for the past month:

Vendor: AWS SLA at 99.95% (contracted 99.9% — no breach). Stripe
fee variance flagged — actual transaction fees 12% above estimated.
Salesforce renewal in 45 days — no strategy in progress.

Process: 8 SOPs, all current. One change-triggered review pending
(AWS region migration completed last week).

Compliance: UK GDPR — 6 obligations, all CURRENT. No regulatory changes.

Change: 1 Major change in progress (monolith to microservices migration)
— impact assessment complete, rollback plan in place. No PIRs overdue.

Risks: 3 open risks; top risk is technical debt in legacy payment system.

Run /status-report and /metrics to generate the monthly brief structure,
then write a 1-paragraph executive summary.
```

**What you are learning:** Even a small, well-run organisation produces operational intelligence that benefits from synthesis. Notice how the Salesforce renewal (45 days, no strategy, £45,000 contract) is the highest-urgency item — but it would be easy to miss if you were focused on the Major change in progress.

**Adapt**: Modify the scenario to match your organisation.

```
Use the agent outputs I am about to provide to generate my monthly
operations intelligence brief.

[Paste your actual or simulated Vendor Watchdog, Process Health,
Compliance Monitor, and Change Tracker outputs from Lesson 12]

After generating the status report and metrics analysis:
1. Identify the top cross-domain connection in my data
2. Write the executive summary (max 1 page)
3. List the top 3 recommended actions

Format the brief so it is ready to send to my COO.
```

**What you are learning:** Moving from the exercise's simulated data to your own organisation's data is where the skill becomes real. The agent outputs from your Lesson 12 exercise are not hypothetical — they represent actual patterns in your operational data that the brief must synthesise.

**Apply**: Extend to a new situation the lesson didn't cover directly.

```
I am a COO who has just received the monthly operations intelligence
brief. I have 30 minutes before my leadership team meeting. I need
to turn the brief into:

1. A 3-slide summary for the leadership team (1 slide per: Current
   state, Key risks and actions, Upcoming priorities)
2. A delegation plan — which of the top 3 recommended actions can
   I delegate to which team member, and what is my instruction to each?
3. Two questions I should ask the operations team to verify that the
   brief's cross-domain connection is actually what I think it is

The brief I received is:
[Paste your completed brief from the exercise]
```

**What you are learning:** The brief is not the end of the intelligence cycle — it is the start of the action cycle. Converting a brief into a delegation plan requires judgment about which items require your personal attention versus which can be owned by team members. The three questions exercise builds the skill of verifying AI-synthesised intelligence before acting on it — the most important skill in AI-augmented operations management.
:::

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 14: Capstone — End-to-End Operations Sprint →](./14-capstone-end-to-end-operations-sprint.md)
