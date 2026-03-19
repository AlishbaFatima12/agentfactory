---
name: metrics
version: 1.0
description: >
  Activate for: metrics, KPI, operational metrics, performance metrics,
  operational dashboard, performance measurement, operations reporting,
  monthly report operations, operations scorecard, leading indicator,
  lagging indicator, red amber green, RAG status, operational performance,
  KRI, key risk indicator, SLA metrics, efficiency metrics, throughput,
  cycle time, error rate, cost per transaction, operational excellence.
plugin-commands: /metrics
---

## OPERATIONAL METRICS WORKFLOW

### Metrics Framework Design Principles

PRINCIPLE 1: MEASURE WHAT MATTERS, NOT WHAT IS EASY
  The easiest metrics to collect are often the least useful.
  "Number of SOPs written" is easy. "Process error rate" is hard.
  Start from the question: "What do we need to know to run operations well?"
  Then determine how to measure it — not the other way round.

PRINCIPLE 2: LEADING INDICATORS OVER LAGGING
  Lagging: tells you what happened (incidents last month)
  Leading: tells you what is about to happen (open SLA warnings)
  Lagging metrics are essential for accountability.
  Leading metrics are essential for prevention.
  Every major risk area should have at least one leading indicator.

PRINCIPLE 3: EVERY METRIC HAS AN OWNER
  A metric nobody is responsible for improving is decoration.
  Every metric must have a named owner who is accountable for both
  the measurement and the performance it reflects.

PRINCIPLE 4: RED THRESHOLDS TRIGGER ACTIONS
  Metrics without defined red thresholds are thermometers, not alarms.
  Define: what level triggers an escalation? To whom? By when?

PRINCIPLE 5: FEWER, BETTER
  An operational report with 30 metrics tells leadership nothing.
  5–10 well-chosen metrics that tell the operational story clearly
  are worth more than a comprehensive data dump that nobody reads.

### Metric Definition Structure

For each metric:

  METRIC: [Name — short, descriptive]
  ─────────────────────────────────────────────────────────
  What it measures: [Plain language — one sentence]
  Why it matters:   [What decision or action this metric informs]
  Type:             [LEADING / LAGGING]
  Formula:          [Exactly how it is calculated — leave no ambiguity]
  Data source:      [Where the data comes from]
  Measurement freq: [Daily / Weekly / Monthly]
  Owner:            [Named role — who produces AND is responsible for]
  
  Thresholds:
    🟢 GREEN:   [Target range — what good looks like]
    🟡 AMBER:   [Watch zone — investigate; action may be needed]
    🔴 RED:     [Action zone — escalate to [role] within [timeframe]]
  
  Trend direction:  [Higher is better / Lower is better / Target is stable]
  ─────────────────────────────────────────────────────────

### Standard Operations Metrics Library

VENDOR MANAGEMENT:
  - Vendor SLA compliance rate: % SLAs met this period / total SLAs [Lagging]
  - Renewal pipeline value: £ value of contracts renewing in next 90 days [Leading]
  - Open SLA warnings: number of active SLA warning notices issued [Leading]
  - Vendor spend vs. budget: actual vs. approved budget by category [Lagging]

PROCESS OPERATIONS:
  - Process error rate: errors per 1,000 transactions, by process [Lagging]
  - SOP currency: % of SOPs reviewed within review cycle [Leading]
  - Key-person dependency count: processes with single named holder [Leading]
  - Cycle time: average end-to-end duration for key processes [Lagging]

CHANGE MANAGEMENT:
  - Change failure rate: % of changes causing incidents / rollback [Lagging]
  - Changes without impact assessment: count of MAJOR+ changes approved
    without a completed impact assessment [Leading]
  - Post-implementation review completion rate: % PIRs completed on time [Lagging]
  - Emergency change rate: emergency changes as % of total [Leading/Lagging]

COMPLIANCE:
  - Obligation currency rate: % obligations with CURRENT status [Leading]
  - Evidence age: % of compliance evidence <12 months old [Leading]
  - Audit findings open: number of open audit findings by severity [Lagging]
  - Regulatory change response time: days from regulation change to
    obligation map update [Lagging]

RISK:
  - Risk register review completion: % of risks reviewed on schedule [Leading]
  - Risks above appetite: count of risks with residual score > appetite [Leading]
  - Mitigation action completion rate: % of mitigation actions completed on time [Lagging]
  - Risk materialisation rate: % of risks that actually occurred [Lagging — used to calibrate]

INCIDENT:
  - MTTR (Mean Time to Resolve): average resolution time by severity [Lagging]
  - MTTD (Mean Time to Detect): average detection time from incident start [Lagging/Leading]
  - Corrective action completion rate: % of CA closed on time [Lagging]
  - Repeat incident rate: % of incidents with same root cause as prior [Lagging — key signal]

### Monthly Operational Report Format

  MONTHLY OPERATIONS REPORT: [Month Year]
  Prepared by: [Name] | For: [COO / Board / Ops team]
  ════════════════════════════════════════════════════════════
  HEADLINE STATUS: 🟢 STABLE / 🟡 WATCH ITEMS / 🔴 ACTION REQUIRED

  [Table: Metric | Status | This month | Last month | Trend | Action]

  KEY ISSUES:
  [🔴 metrics only — specific; what is being done]

  WATCH ITEMS:
  [🟡 metrics — what we are monitoring and why]

  COMPLETED ACTIONS (from last month):
  [What was agreed last month and is now done]

  UPCOMING:
  [What needs attention in the next 30 days]
  ════════════════════════════════════════════════════════════

## NEVER DO THESE

- NEVER produce a metrics framework without defined red thresholds —
  a metric without an alarm level is just reporting; it does not drive action
- NEVER produce more than 10 metrics for an operational dashboard —
  if everything is measured, nothing is managed
- NEVER accept "the team will monitor" as a metric owner — one named person
- NEVER report only lagging indicators — by the time they are red,
  the problem has already occurred; leading indicators let you prevent it
- NEVER define a metric by its data source rather than what it measures
  ("Zendesk tickets" is a data source; "unresolved customer issues rate" is a metric)
