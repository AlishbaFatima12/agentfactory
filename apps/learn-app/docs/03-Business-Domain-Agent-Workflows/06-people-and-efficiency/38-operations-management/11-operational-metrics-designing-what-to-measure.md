---
slug: /Business-Domain-Agent-Workflows/operations-management/operational-metrics-designing-what-to-measure
sidebar_position: 11
title: "Operational Metrics: Designing What to Measure"
description: "Design a 5-10 metric operational KPI framework using /metrics, define leading and lagging indicators with thresholds that trigger action, and generate a monthly operations report using /status-report"
keywords:
  [
    "operational metrics",
    "KPI framework",
    "leading indicators",
    "lagging indicators",
    "operations dashboard",
    "RAG status",
    "metrics design",
    "operational performance",
    "MTTR",
    "MTTD",
    "operations management",
    "operations plugin",
    "metrics command",
    "status-report command",
  ]
chapter: 38
lesson: 11
duration_minutes: 40

# HIDDEN SKILLS METADATA
skills:
  - name: "Design an Operational Metrics Framework Using /metrics"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can use /metrics to define a 5-10 metric framework with at least one leading indicator per major risk area, full metric definitions (formula, source, owner, thresholds), and a red threshold that triggers a specific escalation"

  - name: "Distinguish Leading from Lagging Indicators and Apply the Distinction in Framework Design"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Information-Literacy"
    measurable_at_this_level: "Student can classify a list of candidate metrics as leading or lagging, explain why each major risk area needs at least one leading indicator, and identify which areas in a framework are lagging-only and therefore detection-only"

  - name: "Generate a Monthly Operations Report Using /status-report"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Content-Creation"
    measurable_at_this_level: "Student can run /status-report against a defined metrics framework to produce a one-page monthly report with RAG status, key issues, watch items, and completed actions"

learning_objectives:
  - objective: "Design a metrics framework of 5-10 KPIs using /metrics with full metric definitions including formula, data source, owner, and thresholds"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Student produces a complete metrics framework with at least 5 defined metrics, each with a formula precise enough that two people would calculate the same number, and a red threshold that specifies the escalation path"

  - objective: "Classify candidate metrics as leading or lagging and ensure at least one leading indicator per major risk area"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student reviews their framework and can identify which metrics are leading, which are lagging, and which risk areas have only lagging indicators; then adds a leading indicator for each gap"

  - objective: "Use /metrics and /status-report together: framework design followed by monthly report generation"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student runs /metrics to produce the framework, then runs /status-report using the framework structure to produce a sample monthly report with RAG status populated for each metric"

cognitive_load:
  new_concepts: 4
  concepts_list:
    - "Leading vs lagging indicators: the temporal distinction that separates preventive from reactive measurement"
    - "Metric definition structure: the eight-field definition that makes a metric unambiguous and actionable"
    - "Red threshold design: what makes a threshold an alarm rather than a thermometer"
    - "Metrics-to-report workflow: how /metrics and /status-report complement each other"
  assessment: "4 concepts at B1/B2 level is appropriate. The leading/lagging distinction is intuitive once named but requires practice in classification. The metric definition structure is detailed but each field is self-explanatory. The /metrics and /status-report workflow is the practical skill that consolidates everything."

differentiation:
  extension_for_advanced: "After completing the exercise, challenge yourself to reduce your 5-10 metric framework to exactly 5 metrics: the 5 that would give a COO the clearest picture of operational health with the fewest numbers. Then write a one-paragraph explanation of why you selected those 5 and what each one reveals that the others do not. This is the harder skill: not adding metrics but eliminating the redundant ones."
  remedial_for_struggling: "Focus on two things: (1) the leading/lagging distinction, ask 'does this metric tell me what happened, or what is about to happen?' Lagging = what happened; leading = early warning. (2) the red threshold, for every metric, ask 'at what level does someone need to take action?' If you cannot answer that, the metric is not yet designed; it is only described."

teaching_guide:
  key_points:
    - "The most common operations reporting failure is 30 metrics that tell leadership nothing: the solution is 5-10 metrics that tell the operational story, each with a named owner and a red threshold that triggers action"
    - "A metric without a defined red threshold is a thermometer, not an alarm ; it shows you the temperature but does not tell you when to act"
    - "Every major risk area needs at least one leading indicator; if all your metrics are lagging, you can only measure what went wrong, not prevent what is about to go wrong"
    - "/metrics designs the framework (what to measure, how to calculate it, what thresholds mean); /status-report fills it in (what the numbers actually are this month)"
    - "The metrics in this lesson aggregate all previous lessons: vendor SLA compliance (L03), SOP currency (L05), change failure rate (L06), compliance obligation currency (L07), risk register review completion (L09), incident MTTR (L10)"
  misconceptions:
    - "More metrics means more information. Correction: more metrics means more cognitive load and less clarity. A 30-metric dashboard requires the reader to do the analytical work the dashboard should be doing for them. Fewer, better metrics produce better decisions."
    - "Leading indicators predict the future. Correction: leading indicators indicate what is about to happen based on current trends, not what will definitely happen. They are early warnings that reduce surprise, not forecasts."
    - "Thresholds should be set aspirationally (green = perfect performance). Correction: thresholds should be set operationally, green = the range within which no escalation is needed; amber = the range that requires attention but not crisis response; red = the level that requires immediate escalation to a specific person within a specific timeframe."
  discussion_prompts:
    - "Look at the six domains in the Standard Operations Metrics Library (Vendor, Process, Change, Compliance, Risk, Incident). Which of these has the highest proportion of lagging indicators? What does that tell you about the maturity of operations monitoring in that domain?"
    - "If you had to give a COO a single number that summarised operational health this month, what would it be and why? What would that one number miss?"
  teaching_tips:
    - "The complementary relationship between /metrics and /status-report is the key teaching insight of this lesson. /metrics is a design tool; you use it once (or when the framework needs updating) to decide what to measure and how. /status-report is a reporting tool; you use it monthly to fill in the actuals. Students often confuse these; clarifying the design-vs-reporting distinction clarifies when to use each command."
    - "The cross-reference to all previous lessons (L03-L10) is worth making explicit. Every metric in the framework should be traceable to a lesson: vendor SLA compliance = L03, SOP currency = L05, etc. This reinforces that metrics are not invented; they measure the operational data built throughout the chapter."
---

# Operational Metrics: Designing What to Measure

Your monthly operations report is 30 metrics. Your COO opens it, scans the first three rows, and asks you to summarise it in a paragraph. You spend the next 20 minutes doing analysis that the report should have done for her. She leaves the meeting not confident about operational health, only informed that there are 30 things being measured.

This is not an unusual problem. Operations functions accumulate metrics the same way they accumulate vendors: gradually, without a portfolio view, until the total is more than anyone can manage. Each metric was added for a reason: the compliance team asked for an obligation-tracking number; the IT director wanted incident statistics; HR requested headcount capacity data. Individually, each request was reasonable. Collectively, they produced a dashboard that requires its readers to do the analytical work the dashboard should be doing for them.

The alternative is not fewer metrics; it is better-designed metrics. Five to ten well-chosen measurements that tell the operational story clearly are worth more than thirty that a COO has to interpret. The difference is not in the number of metrics collected; it is in how they were designed. Were they chosen because they are easy to collect, or because they answer the question "what do we need to know to run this organisation well?" Do they have owners? Do they have red thresholds that trigger specific actions? Do they include at least one leading indicator per major risk area: a warning that something is about to go wrong, not just a confirmation of what already did?

This lesson teaches you to design a metrics framework that gives leadership genuine operational intelligence, not just operational statistics.

:::tip Plugin Setup Reminder
This exercise requires the **Operations** plugin (official) and the
**Operations Intelligence** plugin (custom). If you have not installed them,
follow the instructions in the [Chapter 38 prerequisites](./README.md#prerequisites)
before continuing.
:::

## The Five Design Principles

Every metrics framework should be evaluated against five principles. These principles distinguish metrics that drive decisions from metrics that merely report activity.

### Principle 1: Measure What Matters, Not What Is Easy

The easiest metrics to collect are often the least useful. "Number of SOPs written" is easy, count the files in the folder. "Process error rate" is harder ; it requires defining what an error is and tracking occurrences. But process error rate answers a question that matters: are our processes producing correct outputs? Number of SOPs written answers a question that is adjacent to what matters: are we documenting processes? A full folder of SOPs tells you nothing about whether they work.

Start from the question: "What do we need to know to run operations well?" Then determine how to measure it. Not the other way round.

### Principle 2: Leading Indicators Over Lagging

| Type        | What It Tells You                                    | When You Find Out       | Example                                                |
| ----------- | ---------------------------------------------------- | ----------------------- | ------------------------------------------------------ |
| **Lagging** | What happened, performance in the period just ended | After the fact          | Incident MTTR last month: 4.2 hours                    |
| **Leading** | What is about to happen, early warning signals      | While you can still act | Open SLA warnings this week: 3 vendor breaches flagged |

Lagging metrics are essential for accountability; they tell you whether you met your targets. Leading metrics are essential for prevention; they tell you whether you are heading towards a problem while there is still time to change course. Every major risk area should have at least one leading indicator. An operations dashboard with only lagging metrics can only measure what went wrong; it cannot help you prevent what is about to go wrong.

### Principle 3: Every Metric Has an Owner

A metric without a named owner is decoration. Nobody is responsible for improving it, nobody is accountable for understanding what it means, and when it turns red, nobody has to explain why. Every metric in your framework must have a named owner who is accountable for both producing the measurement and for the performance it reflects.

"The operations team" is not an owner. Head of Operations, [Name]: is an owner.

### Principle 4: Red Thresholds Trigger Actions

A metric without a defined red threshold is a thermometer, not an alarm. It shows you the current reading but does not tell you when to act. A red threshold must specify three things: the level at which it triggers, who it is escalated to, and by when. Without these three specifications, the threshold is advisory, not operational.

```
AMBER: Vendor SLA compliance falls below 90%
→ Operations Manager reviews with vendor within 5 business days

RED: Vendor SLA compliance falls below 80%
→ Escalate to COO within 24 hours; initiate vendor performance review
```

The red threshold does not just define the alarm level ; it defines who picks up the phone when the alarm fires.

### Principle 5: Fewer, Better

An operations dashboard is a decision-support tool, not a data repository. Its job is to tell a story clearly enough that a COO can act on it in under five minutes. That means selecting 5-10 metrics that together tell the complete operational story, not 30 that require a reading guide.

When you have more than 10 candidate metrics, do not add them all. Apply a priority filter: which metrics answer a question that cannot be answered by any other metric in the framework? Which risks would you be blind to if a specific metric were removed? Keep those. Archive the rest; they can become inputs to deeper analysis when needed, but they should not crowd the primary dashboard.

## The Metric Definition Structure

Every metric in your framework requires eight fields. Skipping any field produces an ambiguous metric: one that different people will calculate differently, interpret differently, or fail to act on when it turns red.

```
METRIC: Vendor SLA Compliance Rate
─────────────────────────────────────────────────────────────
What it measures:  Percentage of contracted SLAs met by vendors
                   during the reporting period
Why it matters:    Identifies whether vendors are delivering
                   the service levels the organisation is paying for;
                   feeds directly into renewal negotiation strategy
Type:              LAGGING
Formula:           (SLAs met in period ÷ total SLAs due in period) × 100
                   [Count each SLA obligation as one unit regardless
                   of vendor or contract value]
Data source:       Vendor SLA tracking log; incident tickets for
                   breach evidence
Measurement freq:  Monthly

Thresholds:
  🟢 GREEN:   ≥92%, target performance range
  🟡 AMBER:   85–91%, review with Operations Manager; identify
              breach patterns; notify affected vendor leads
  🔴 RED:     <85%; escalate to COO within 24 hours; initiate
              formal performance review; assess renewal strategy impact

Trend direction:   Higher is better
─────────────────────────────────────────────────────────────
```

Each field has a specific job:

| Field               | Why It Is Required                                                               |
| ------------------- | -------------------------------------------------------------------------------- |
| **Formula**         | Ensures two people calculate the same number; eliminates interpretation disputes |
| **Data source**     | Enables the person collecting it to know where to look                           |
| **Owner**           | Establishes who is responsible for measurement and performance                   |
| **Red threshold**   | Converts the metric from reporting to action; specifies who acts and when        |
| **Trend direction** | Tells the reader whether an increase is good or bad, not always obvious         |

## The Standard Operations Metrics Library

Your framework should draw from the operational domains covered in this chapter. For each domain, the library includes both leading and lagging indicators. Select one to two metrics per domain most relevant to your organisation, do not include all of them.

### Vendor Management (from L03)

| Metric                     | Type    | What It Measures                                    |
| -------------------------- | ------- | --------------------------------------------------- |
| Vendor SLA compliance rate | Lagging | % SLAs met this period                              |
| Renewal pipeline value     | Leading | £ value of contracts renewing in next 90 days       |
| Open SLA warning count     | Leading | Number of active SLA warning notices currently open |
| Vendor spend vs. budget    | Lagging | Actual vs. approved spend by category               |

### Process Operations (from L05)

| Metric                      | Type    | What It Measures                                        |
| --------------------------- | ------- | ------------------------------------------------------- |
| Process error rate          | Lagging | Errors per 1,000 transactions, by process               |
| SOP currency rate           | Leading | % of SOPs reviewed within their review cycle            |
| Key-person dependency count | Leading | Count of processes with a single named knowledge holder |
| Cycle time                  | Lagging | Average end-to-end duration for key processes           |

### Change Management (from L06)

| Metric                            | Type            | What It Measures                                                       |
| --------------------------------- | --------------- | ---------------------------------------------------------------------- |
| Change failure rate               | Lagging         | % of changes that caused incidents or required rollback                |
| Changes without impact assessment | Leading         | Count of MAJOR+ changes approved without a completed impact assessment |
| Post-implementation review rate   | Lagging         | % of PIRs completed on schedule                                        |
| Emergency change rate             | Leading/Lagging | Emergency changes as % of total, high rate signals process breakdown  |

### Compliance (from L07)

| Metric                          | Type    | What It Measures                                     |
| ------------------------------- | ------- | ---------------------------------------------------- |
| Obligation currency rate        | Leading | % of compliance obligations with CURRENT status      |
| Evidence age                    | Leading | % of compliance evidence less than 12 months old     |
| Audit findings open             | Lagging | Count of open audit findings by severity             |
| Regulatory change response time | Lagging | Days from regulation change to obligation map update |

### Risk (from L09)

| Metric                          | Type    | What It Measures                                                          |
| ------------------------------- | ------- | ------------------------------------------------------------------------- |
| Risk register review completion | Leading | % of risks reviewed on schedule                                           |
| Risks above appetite            | Leading | Count of risks with residual score above the organisation's risk appetite |
| Mitigation action completion    | Lagging | % of mitigation actions completed on time                                 |
| Risk materialisation rate       | Lagging | % of identified risks that actually occurred (calibration metric)         |

### Incident (from L10)

| Metric                       | Type    | What It Measures                                            |
| ---------------------------- | ------- | ----------------------------------------------------------- |
| MTTR by severity             | Lagging | Mean time to resolve, split by P1/P2/P3                     |
| MTTD                         | Lagging | Mean time to detect, gap between incident start and alert  |
| Corrective action completion | Lagging | % of post-mortem CAs closed on time                         |
| Repeat incident rate         | Lagging | % of incidents with the same root cause as a prior incident |

:::info The Repeat Incident Rate Is the Most Important Incident Metric
MTTR tells you how fast you resolved the incident. The repeat incident rate tells you whether the post-mortem worked. An MTTR of 2 hours is impressive; a repeat incident rate of 40% means your corrective actions are not closing the systemic gaps. When these two metrics are read together, they give a complete picture of incident management maturity.
:::

## Designing Your Framework with `/metrics`

The `/metrics` command (custom Operations Intelligence plugin) designs the framework: it selects appropriate metrics for your operational context, writes full definitions for each, and applies the five design principles. Once the framework is designed, you use `/status-report` (official plugin) to generate the periodic reports that fill in the actual values.

**Worked example.** You are designing the operational metrics framework for a 200-person professional services firm. You want 6-8 metrics covering the highest-risk areas. You type:

```
/metrics
Design an operational metrics framework for a 200-person UK
professional services firm. Our primary operational risks are:
vendor reliability (we are heavily dependent on 3 cloud infrastructure
vendors), compliance gaps (FCA-regulated, subject to UK GDPR),
and incident response maturity (we have had 4 P1 incidents in
the last 12 months, each with repeat root causes).

Design 6-8 metrics that would give our COO a clear operational
health picture. For each metric:
1. Full definition using the metric definition structure
2. Classification as leading or lagging
3. Whether this metric addresses one of our three primary risks
4. Owner role (not the team: a specific named role)
5. Thresholds with escalation paths for amber and red

Ensure at least 2 of the 8 metrics are leading indicators.
```

**What to expect:** The output should produce 6-8 fully defined metrics, each with all eight fields completed, thresholds that include escalation paths, and a balance of leading and lagging indicators.

| Output Element                | What to Verify                                                                 |
| ----------------------------- | ------------------------------------------------------------------------------ |
| **Metric count**              | 6-8 metrics, not 5, not 12                                                    |
| **Formula precision**         | Each formula is precise enough that two people would calculate the same number |
| **Leading indicator count**   | At least 2 (ideally one per primary risk area)                                 |
| **Red threshold specificity** | Each red threshold names who is escalated to and by when , not just a number   |
| **Owner specificity**         | Named roles (Head of Operations, CFO), not teams or departments                |

**What to evaluate:**

- Does every metric have a formula that leaves no room for interpretation?
- Are there at least two leading indicators? Are the three primary risk areas all covered, including at least one leading indicator per risk area?
- Does each red threshold specify an escalation path (who, by when) , or does it just define the alarm level?
- Is every metric owned by a specific role, not "the team"?
- If you removed any single metric from the framework, would you be blind to a material risk? (If no, the metric is redundant.)

## Generating the Monthly Report with `/status-report`

Once the framework is designed, `/status-report` generates the monthly report that fills in the actual values. The workflow is: `/metrics` designs the framework once; `/status-report` is used every reporting period.

**Worked example.** Your metrics framework is defined. End of month. You type:

```
/status-report monthly operations
Using the following metrics framework, generate a monthly
operations report for [Month Year].

Metrics framework:
[Paste your 6-8 metric definitions with thresholds]

Actuals for this month:
- Vendor SLA compliance rate: 87% (amber threshold is 85-91%)
- Renewal pipeline value: £312,000 in contracts renewing next 90 days
- Change failure rate: 12% (2 of 17 changes caused incidents)
- Obligation currency rate: 94%, 2 obligations flagged as outdated
- Risk register review completion: 78%, 4 risks overdue for review
- Incident MTTR (P1): 3.8 hours average; (P2): 1.4 hours
- Corrective action completion rate: 68%, 5 of 16 CAs past due date

Format as a one-page monthly report suitable for the COO.
Include: headline RAG status, metrics table with trend vs. last month,
key issues (red items), watch items (amber items), and next-month priorities.
```

**What the report produces:**

```
MONTHLY OPERATIONS REPORT: [Month Year]
Prepared by: Head of Operations | For: COO
════════════════════════════════════════════════════════════
HEADLINE STATUS: 🟡 WATCH ITEMS

METRICS TABLE:
Metric                          | Status | This Month | Last Month | Trend
Vendor SLA compliance rate      | 🟡     | 87%        | 93%        | ↓
Renewal pipeline value          | 🟡     | £312K/90d  | £180K/90d  | ↑ watch
Change failure rate             | 🟡     | 12%        | 8%         | ↑ worse
Obligation currency rate        | 🟢     | 94%        | 96%        | ↓ (stable)
Risk register review completion | 🟡     | 78%        | 85%        | ↓
Incident MTTR, P1              | 🟢     | 3.8 hrs    | 4.2 hrs    | ↑ improving
CA completion rate              | 🔴     | 68%        | 79%        | ↓

KEY ISSUES (🔴):
1. CA completion rate (68%): 5 of 16 corrective actions from
   previous post-mortems are past due. Owner: Head of Operations.
   Action: CA review meeting scheduled [date]; overdue owners to
   present status by [date].

WATCH ITEMS (🟡):
1. Vendor SLA compliance (87%): declining 6% MoM. Three vendors
   flagged. Operations Manager reviewing with vendor leads this week.
2. Change failure rate (12%): 2 incidents traced to change-related
   causes. Change Manager reviewing impact assessment quality.
3. Risk review completion (78%): 4 risks overdue. Risk Owner to
   complete outstanding reviews by [date].

UPCOMING NEXT 30 DAYS:
- Renewal decisions due: 2 contracts >£50K renewing in 45 days
- Post-mortem CA review meeting: [date]
- Quarterly compliance obligation review
════════════════════════════════════════════════════════════
```

The report tells the COO exactly what needs attention, who is responsible, and what is already in motion. She can act on this in under five minutes.

## Exercise: Design Your Operations Metrics Framework (Exercise 7)

**Type:** Operational metrics
**Time:** 30 minutes
**Plugin commands:** `/metrics` (custom) + `/status-report` (official)
**Goal:** Design a 5-10 metric framework covering all major risk areas, then generate a sample monthly report using the framework

### Step 1: Identify Your Risk Areas

Before designing metrics, identify the five or six risk areas that matter most for your operational context. Use the domains from this lesson as a starting point:

| Domain             | Lesson Source | Primary Risk to Measure                           |
| ------------------ | ------------- | ------------------------------------------------- |
| Vendor management  | L03           | SLA compliance decline; renewal surprises         |
| Process operations | L05           | SOP becoming outdated; key-person dependency      |
| Change management  | L06           | Changes causing incidents; poor impact assessment |
| Compliance         | L07           | Obligation gaps; evidence aging                   |
| Risk               | L09           | Register reviews overdue; risks above appetite    |
| Incident           | L10           | MTTR increasing; repeat incidents                 |

### Step 2: Design the Framework

```
/metrics
Design a metrics framework for a 200-person UK professional
services firm. I want 6-8 metrics covering:
[list your selected risk areas from Step 1]

For each metric, produce a full definition:
- Metric name
- What it measures (one sentence)
- Why it matters (what decision it informs)
- Type: LEADING or LAGGING
- Formula (precise, same answer for any two people)
- Data source
- Measurement frequency (monthly unless specified)
- Owner (named role, not team)
- Thresholds: GREEN / AMBER / RED
  (RED threshold must name who is escalated to and by when)
- Trend direction (higher better / lower better / target stable)

Ensure at least one leading indicator per risk area.
Apply the five design principles: measure what matters,
lead over lag, named owners, action-triggering red thresholds,
and 6-8 metrics maximum.
```

### Step 3: Evaluate the Framework

**What to evaluate:**

- Does every metric have a formula that is unambiguous? Could two people calculate the same number from the same data?
- Is there at least one leading indicator for each risk area? Which areas have only lagging metrics?
- Does each red threshold specify the escalation path (person + timeframe) , not just a number?
- Is every metric owned by a named role?
- If you removed any single metric, would you be blind to a material risk area?

For any metric that fails these checks, ask `/metrics` to strengthen the specific definition.

### Step 4: Generate the Monthly Report

Using the framework you designed, generate a sample monthly report. Use realistic (but fictional) actuals:

```
/status-report monthly operations
Generate a one-page monthly operations report for [current month].

Framework: [paste your metric definitions from Step 2]

Sample actuals (use these or create your own realistic values):
- Vendor SLA compliance: [your value, choose one that is amber]
- [Leading indicator from vendor]: [your value]
- Change failure rate: [your value, make at least one red]
- [Your compliance metric]: [your value]
- Risk register review completion: [your value]
- Incident MTTR: [your value, show improvement from prior month]
- CA completion rate: [your value, make at least one concern]

Format: headline status, metrics table with trend vs. last month,
key issues for red items (owner + action), watch items for amber,
and three next-month priorities.
```

### Step 5: Stress Test the Report

Review the `/status-report` output as if you were the COO:

1. Can you identify the single most urgent issue in under 30 seconds?
2. For each red metric, is there a named person and a specific action?
3. Is there an amber metric that could become red in the next month without intervention?
4. Are there any metrics in your framework that you could not fill in because you do not know where the data comes from? If so, the data source field needs to be revisited.

**Deliverable:** A complete metrics framework (6-8 metrics, fully defined) and a sample monthly operations report with at least one red item and two amber items. Save this framework: the operations intelligence brief in Lesson 13 draws directly from these metrics plus the agent outputs from Lesson 12.

:::note Connection to Lesson 13, Intelligence Brief
The metrics framework you design here becomes the backbone of the operations intelligence brief in Lesson 13. The brief synthesises the metric status from this framework with the agent outputs from Lesson 12 (vendor-watchdog, process-health, compliance-monitor, change-tracker) into a single monthly intelligence package for the COO. Keep this framework in your Cowork session.
:::

## Try With AI

:::tip Try With AI
**Reproduce**: Apply what you just learned to a simple case.

```
Design a 5-metric operations framework for a 30-person technology
startup. Our two biggest risks are: (1) we are completely dependent
on AWS for all infrastructure, and (2) we have no documentation
for any of our critical processes; everything lives in people's heads.

For each metric:
- Name and one-sentence description
- Leading or lagging?
- Formula
- Owner (named role)
- Green / Amber / Red thresholds (RED must specify escalation path)

Ensure at least one metric specifically measures the key-person
dependency risk.
```

**What you are learning:** Designing a small framework first builds the pattern recognition you need before tackling a larger one. A startup's two primary risks (infrastructure dependency, zero documentation) map directly to specific metrics: the skill is translating a risk statement into a measurement definition.

**Adapt**: Modify the scenario to match your organisation.

```
Review the following operational metrics framework and evaluate
it against the five design principles:

[Paste your framework from the exercise, or create a realistic
6-8 metric framework for your industry]

For each principle, score the framework:
1. Measure what matters (not what is easy), does each metric
   answer a question that matters for operations?
2. Leading over lagging: is there at least one leading indicator
   per risk area?
3. Every metric has an owner: are all owners named roles,
   not teams?
4. Red thresholds trigger actions, does each red threshold
   specify who acts and by when?
5. Fewer, better, could any metric be removed without creating
   a blind spot?

Recommend one addition (if any risk area has no coverage) and
one removal (the most redundant metric in the current set).
```

**What you are learning:** Evaluating an existing framework against the five principles is harder than designing from scratch because it requires critique of choices that were already made. The discipline of recommending a removal , not just an addition, tests whether the "fewer, better" principle is genuinely applied.

**Apply**: Extend to a new situation the lesson didn't cover directly.

```
Your COO has received the following two requests from the
leadership team:

Request 1 (HR Director): "Add employee satisfaction score and
headcount turnover rate to the operations dashboard."

Request 2 (CFO): "Add three financial metrics: budget variance,
cost per transaction, and overhead ratio."

Both requests are reasonable in isolation. Evaluate each against
the metrics design principles. Your analysis should answer:

1. Are these metrics leading or lagging?
2. Who would own them in an operations context?
3. Do they belong on the primary operations dashboard, or would
   they be better served by a separate HR/Finance dashboard?
4. If you add all five, the dashboard grows from 8 to 13 metrics,
   does this violate the "fewer, better" principle?

Recommend whether to accept, reject, or modify each request,
with a one-paragraph rationale for each recommendation.
```

**What you are learning:** Metrics governance, deciding what goes on the primary dashboard: is a boundary-setting skill. The operations dashboard is not the only dashboard; HR and Finance have their own. The question is whether a metric belongs on the operations COO view or on a functional view. Defending "fewer, better" against reasonable requests is the practical test of the principle.
:::

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 12: Persistent Agents and Deployment Schedule →](./12-persistent-agents-deployment-schedule.md)
