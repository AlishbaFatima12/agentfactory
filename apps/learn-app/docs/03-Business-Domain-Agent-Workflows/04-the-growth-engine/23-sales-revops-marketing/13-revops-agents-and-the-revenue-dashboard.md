---
sidebar_position: 13
title: "RevOps Agents and the Revenue Dashboard"
description: "Configure five schedule-driven RevOps agents, run pipeline analysis and sales forecasts, build a weekly revenue dashboard with executive summary, and set up a daily sales briefing as the rep's morning routine"
keywords:
  [
    "RevOps agents",
    "revenue dashboard",
    "pipeline review",
    "sales forecast",
    "daily briefing",
    "lead intelligence agent",
    "CRM hygiene agent",
    "outreach sequencing agent",
    "marketing performance agent",
    "revenue reporting agent",
    "agent schedule",
    "NexaFlow Technologies",
    "Meridian Logistics",
    "pipeline health",
    "weighted pipeline",
    "deal velocity",
  ]
chapter: 23
lesson: 13
duration_minutes: 30

# HIDDEN SKILLS METADATA
skills:
  - name: "Configure and Deploy RevOps Agents on Business Cadence"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can describe the purpose, data sources, schedule, and output of each of the five RevOps agents and map them to a weekly business rhythm"

  - name: "Analyse Pipeline Health and Forecast Revenue"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can run /pipeline-review and /forecast, interpret deal-level health scores, identify at-risk deals, and evaluate whether forecast assumptions match the business context"

  - name: "Evaluate Revenue Dashboard Metrics for Executive Reporting"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can assess whether a revenue dashboard's seven metrics accurately represent pipeline health and produce a five-bullet executive summary that a non-technical reader can act on"

learning_objectives:
  - objective: "Configure five RevOps agents with appropriate cadence, data sources, and output format for a B2B sales operation"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student maps each agent to a day of the week and explains why the chosen cadence matches the data freshness requirement"

  - objective: "Run pipeline analysis and sales forecast commands, interpret deal-level health scores, and identify at-risk deals"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student identifies the 3 highest-risk deals and the 2 most likely to close from /pipeline-review and /forecast output"

  - objective: "Build a revenue dashboard with seven core metrics and produce a weekly executive summary"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Student produces a 150-word executive email covering pipeline health, forecast status, and recommended actions"

cognitive_load:
  new_concepts: 7
  concepts_list:
    - "Five RevOps agents as a coordinated system (not isolated tools)"
    - "Outreach Sequencing Agent (event-driven, continuous monitoring)"
    - "/pipeline-review with three-dimension scoring integration"
    - "/forecast with best/worst/likely scenario modelling"
    - "Daily sales briefing as morning routine"
    - "Revenue dashboard with seven core metrics"
    - "Agent schedule mapped to business rhythm (daily/weekly cadence)"
  assessment: "7 concepts at B1 level. The five agents share a common pattern from L12's monitoring architecture, reducing novelty. Pipeline review, forecast, and dashboard are new analytical outputs. The daily briefing is a practical configuration exercise."

differentiation:
  extension_for_advanced: "Add a sixth agent — a Competitor Intelligence Agent that scans industry news and competitor product updates weekly. Define its data sources, alert thresholds, and how its output integrates with the Lead Intelligence Agent's signals."
  remedial_for_struggling: "Focus on the daily briefing and one agent (Lead Intelligence). If you can configure one agent's cadence, run the daily briefing, and read the pipeline review output, you have the core pattern. Add agents incrementally."
---

# RevOps Agents and the Revenue Dashboard

In Lesson 12, you built jurisdiction-compliant outreach for three markets. Every workflow in this chapter so far has required you to type a prompt. Research, score, enrich, draft outreach, analyse campaigns, check compliance -- all on demand, all dependent on you remembering to run the right command at the right time.

That works when you have fifteen prospects and one rep. It breaks when NexaFlow has fifty active deals, three markets, and a sales team that needs pipeline intelligence before their first coffee. What if the system ran these workflows automatically, on schedule, without waiting for anyone to remember?

RevOps agents run on cadence. They monitor signals, enrich CRM data, manage sequences, analyse campaign performance, and report on pipeline health. They produce digests. They never take autonomous action. The rep who reads the daily briefing and decides to call Meridian Logistics first is exercising judgment the agent cannot replicate. The agent identified the signal. The human chose the response.

## The Five RevOps Agents

Each agent serves a distinct operational function. Together, they form a coordinated monitoring and reporting system that keeps NexaFlow's revenue engine running without manual prompts.

### Agent 1: Lead Intelligence Agent

The Lead Intelligence Agent watches for buying signals across your pipeline and alerts reps when something changes.

| Property     | Configuration                                                                               |
| ------------ | ------------------------------------------------------------------------------------------- |
| **Monitors** | Funding announcements, leadership changes, contract wins, hiring surges, social media posts |
| **Trigger**  | Any HOT signal generates an alert within 2 hours                                            |
| **Schedule** | Daily scan at 06:00 UTC, weekly digest every Monday                                         |
| **Output**   | Priority-sorted signal digest with score impact                                             |

When DataForge Solutions in Karachi posts two engineering roles mentioning "logistics integration" on Rozee.pk, the agent flags it as HOT. When Gulf Express in Dubai's VP of Operations posts about modernising fleet management on LinkedIn, the agent catches it within hours. Neither signal required a rep to remember to check.

### Agent 2: CRM Hygiene Agent

The CRM Hygiene Agent scans your database for data quality issues that degrade scoring accuracy and pipeline reliability.

| Property     | Configuration                                                                             |
| ------------ | ----------------------------------------------------------------------------------------- |
| **Monitors** | Stale records (no update in 30+ days), duplicate entries, conflicting data across sources |
| **Action**   | Automatic enrichment of outdated fields, role change flagging, duplicate detection        |
| **Schedule** | Weekly for Tier 1 accounts, monthly for all accounts                                      |
| **Output**   | Categorised issue report with recommended actions                                         |

A CRM where Kaizen Supply Co. shows 120 employees while LinkedIn shows 340 produces inaccurate Fit scores. The Hygiene Agent catches the discrepancy and recommends the update. A rep who relies on the old figure underestimates the deal size and under-invests in the relationship.

### Agent 3: Outreach Sequencing Agent

The Outreach Sequencing Agent monitors active sequences and manages touch progression based on prospect behaviour.

| Property     | Configuration                                                                |
| ------------ | ---------------------------------------------------------------------------- |
| **Monitors** | Sequence progress, email opens, link clicks, replies, bounces                |
| **Action**   | Triggers next touch on schedule, pauses on reply, stops on bounce or opt-out |
| **Schedule** | Continuous (event-driven, not time-driven)                                   |
| **Output**   | Sequence status report with engagement metrics                               |

This agent is different from the others. It runs continuously, reacting to events rather than waiting for a schedule. When a prospect opens email three in a six-touch sequence and clicks the case study link, the agent advances to touch four. When a prospect replies "not interested," the agent pauses the sequence immediately. When an email bounces, the sequence stops and the CRM record gets flagged for the Hygiene Agent to investigate.

The over-automation risk from Lesson 6 applies here. An agent that sends touch five to a prospect who replied "let me think about it" after touch three has ignored a human signal. Exit conditions matter: reply (any reply) pauses. Bounce stops. Opt-out stops permanently. The agent handles timing and progression. You handle the judgment calls.

### Agent 4: Marketing Performance Agent

The Marketing Performance Agent evaluates campaign results across channels and identifies where budget is working and where it is not.

| Property     | Configuration                                                                                |
| ------------ | -------------------------------------------------------------------------------------------- |
| **Monitors** | LinkedIn Ads, email nurture, content/SEO, Google Ads, events                                 |
| **Action**   | Weekly analysis report with channel comparison, CPL trends, and optimisation recommendations |
| **Schedule** | Every Friday                                                                                 |
| **Output**   | Channel performance digest with budget status                                                |

NexaFlow's email nurture campaign delivers leads at $9.50 CPL with 4.8% conversion. Google Ads delivers leads at $387.50 CPL with 0.9% conversion. The Marketing Performance Agent flags the disparity. But the recommendation to "pause Google Ads" requires context the agent does not have -- if Google Ads targets enterprise logistics directors while email targets mid-market operations managers, comparing CPL across them is misleading. The agent compares numbers. You compare strategy.

### Agent 5: Revenue Reporting Agent

The Revenue Reporting Agent aggregates pipeline metrics, tracks deal velocity, and produces the weekly revenue dashboard.

| Property     | Configuration                                                                        |
| ------------ | ------------------------------------------------------------------------------------ |
| **Monitors** | Pipeline value, conversion rates, deal velocity, forecast accuracy, stage stagnation |
| **Action**   | Weekly revenue dashboard with executive summary                                      |
| **Schedule** | Every Monday                                                                         |
| **Output**   | Dashboard with seven core metrics plus five-bullet executive email                   |

:::info Connector Note
With HubSpot, Close, or another CRM connected via MCP, plus Slack and Google Calendar integrations, these agents can monitor a live pipeline, send real Slack alerts, and schedule calendar events. Without connectors, agents produce text-based reports that you review manually. The workflows are identical -- only the delivery channel changes.
:::

## Pipeline Analysis

NexaFlow's pipeline has ten active deals. Before you build the dashboard, you need to understand the pipeline's health at the deal level.

### Running /pipeline-review

```
Run /pipeline-review for NexaFlow's active pipeline.
Include deal-level health scores.
```

The base Sales plugin's `/pipeline-review` command produces a structured pipeline overview. When the RevOps extension is installed, the extension's pipeline skill auto-activates, adding three-dimension scoring integration (Fit + Timing + Engagement from Lesson 3) and deal-level health scores.

**Output:**

```
══════════════════════════════════════════════════════════════
          PIPELINE REVIEW — NexaFlow Technologies
          Date: 2026-03-11
          Active Deals: 10 | Total Value: $1,680,000
══════════════════════════════════════════════════════════════

DEAL HEALTH SCORES
─────────────────────────────────────────────────────────────
Deal                    Value      Stage       Health  Risk
─────────────────────────────────────────────────────────────
Meridian Logistics      $180,000   Proposal    92/100  LOW
  Fit: 38/40  Timing: 34/40  Engagement: 20/20
  Champion: Sarah Chen (VP Ops). Proposal sent Mar 5.

Gulf Express LLC        $95,000    Negotiation 85/100  LOW
  Fit: 30/40  Timing: 35/40  Engagement: 20/20
  Active engagement. VP posted about fleet modernisation.

DataForge Solutions     $120,000   Discovery   78/100  MEDIUM
  Fit: 32/40  Timing: 32/40  Engagement: 14/20
  Hiring for logistics integration roles. Early stage.

Crescent Freight        $200,000   Proposal    45/100  HIGH
  Fit: 35/40  Timing: 8/40   Engagement: 2/20
  34 days in stage. No response to proposal. No champion.

BridgePoint UK          $90,000    Discovery   38/100  HIGH
  Fit: 28/40  Timing: 6/40   Engagement: 4/20
  42 days in discovery. No next step scheduled.

ThetaPharma Lahore      $150,000   Qualifying  52/100  HIGH
  Fit: 30/40  Timing: 12/40  Engagement: 10/20
  High value but low engagement. Contact went quiet Feb 7.

Kaizen Supply Co.       $85,000    Discovery   65/100  MEDIUM
  Fit: 25/40  Timing: 25/40  Engagement: 15/20
  Expanding to UAE. Warm signal from Dawn Business article.

AlphaRoute Dubai        $110,000   Qualifying  70/100  MEDIUM
  Fit: 28/40  Timing: 22/40  Engagement: 20/20
  Visited pricing page twice. No meeting scheduled yet.

TransPak Logistics      $350,000   Proposal    73/100  MEDIUM
  Fit: 38/40  Timing: 20/40  Engagement: 15/20
  Large deal. Mutual connection through KCCI. Slow cycle.

Metro Delivery ISB      $100,000   Qualifying  55/100  MEDIUM
  Fit: 22/40  Timing: 18/40  Engagement: 15/20
  Mid-market. Reasonable engagement but weak fit score.
─────────────────────────────────────────────────────────────

AT-RISK DEALS (3)
  Crescent Freight:   $200K — 34 days stalled in Proposal
  BridgePoint UK:     $90K  — 42 days stalled in Discovery
  ThetaPharma Lahore: $150K — Contact unresponsive since Feb 7

STRONGEST CLOSES (2)
  Meridian Logistics:  $180K — 92/100 health, proposal active
  Gulf Express LLC:    $95K  — 85/100 health, in negotiation

FORECAST GAP
  Weighted pipeline: $565,000
  Quarterly target:  $750,000
  Gap: $185,000 (24.7%)
══════════════════════════════════════════════════════════════
```

Three deals are at risk. Crescent Freight is the largest deal in the pipeline at $200,000, sitting in Proposal for 34 days with zero engagement. That is not a deal in progress -- it is a deal that has gone silent. BridgePoint UK has been in Discovery for 42 days with no next step. ThetaPharma's contact went quiet five weeks ago. Each requires a different human intervention: Crescent needs a new champion or a different approach; BridgePoint needs qualification; ThetaPharma needs re-engagement or disqualification.

Meridian Logistics and Gulf Express are the strongest closes. Meridian has a champion (Sarah Chen), an active proposal, and scores of 92/100. Gulf Express is in negotiation with high engagement. These two deals represent $275,000 in near-term revenue.

## Sales Forecast

With the pipeline reviewed, run the forecast to model revenue scenarios.

### Running /forecast

```
Run /forecast for NexaFlow's pipeline.
Show best, likely, and worst case scenarios.
```

The base Sales plugin's `/forecast` command produces a revenue projection model. It has no extension equivalent -- `/forecast` runs from the base plugin directly.

**Output:**

```
══════════════════════════════════════════════════════════════
          SALES FORECAST — NexaFlow Technologies
          Quarter: Q1 2026 (Jan-Mar)
          Generated: 2026-03-11
══════════════════════════════════════════════════════════════

SCENARIO MODELLING
─────────────────────────────────────────────────────────────
                  Best Case    Likely      Worst Case
─────────────────────────────────────────────────────────────
Meridian          $180,000     $180,000    $180,000
  Probability:    95%          90%         85%
  Rationale:      Champion active, proposal reviewed

Gulf Express      $95,000      $95,000     $0
  Probability:    85%          70%         40%
  Rationale:      In negotiation, but pricing not agreed

DataForge         $120,000     $60,000     $0
  Probability:    70%          50%         20%
  Rationale:      Early stage, hiring signals strong

TransPak          $350,000     $175,000    $0
  Probability:    60%          40%         15%
  Rationale:      Large deal, slow cycle, KCCI connection

Crescent Freight  $200,000     $0          $0
  Probability:    30%          10%         5%
  Rationale:      34 days stalled, no champion identified

Others (5 deals)  $385,000     $120,000    $45,000
─────────────────────────────────────────────────────────────
TOTAL             $1,330,000   $630,000    $225,000
─────────────────────────────────────────────────────────────
Quarterly Target: $750,000
Best Case:        $1,330,000  (177% of target)  ✓
Likely Case:      $630,000   (84% of target)    ⚠ Gap: $120K
Worst Case:       $225,000   (30% of target)    ✗
══════════════════════════════════════════════════════════════
```

The likely case falls $120,000 short of target. The gap depends almost entirely on three swing deals: DataForge ($60,000 in likely), TransPak ($175,000 in likely), and Crescent Freight ($0 in likely). If TransPak closes at full value, NexaFlow exceeds target. If Crescent Freight re-engages, the quarter is comfortable. If both stall, the team needs to accelerate Gulf Express and pull forward deals from next quarter.

Evaluate the assumptions. TransPak at 40% likely probability reflects the KCCI mutual connection and NexaFlow's strong fit score, but the slow cycle makes Q1 closure uncertain. Is 40% realistic for a $350,000 deal with a procurement timeline that could extend into Q2? That judgment is yours, not the agent's.

## Building the Revenue Dashboard

The revenue dashboard consolidates pipeline health, forecast, and operational metrics into a single weekly view. Define seven core metrics.

| #   | Metric                          | Source                      | What It Reveals             |
| --- | ------------------------------- | --------------------------- | --------------------------- |
| 1   | HOT leads generated (this week) | Lead Intelligence Agent     | Inbound signal quality      |
| 2   | Lead-to-SAL conversion rate     | CRM + Scoring data          | Qualification effectiveness |
| 3   | Pipeline created (this week)    | CRM new opportunities       | Growth trajectory           |
| 4   | Average deal size               | Pipeline data               | Market positioning          |
| 5   | Pipeline at risk ($ value)      | /pipeline-review            | Revenue exposure            |
| 6   | Close rate (trailing 90 days)   | CRM closed-won/closed-lost  | Sales effectiveness         |
| 7   | CAC by channel                  | Marketing Performance Agent | Budget efficiency           |

### Running the Dashboard

```
Build NexaFlow's weekly revenue dashboard using the demo pipeline data.
Include all seven metrics. Then produce a weekly executive email --
five bullets, maximum 150 words.
```

**Output:**

```
══════════════════════════════════════════════════════════════
          WEEKLY REVENUE DASHBOARD
          NexaFlow Technologies — Week of Mar 3-9, 2026
══════════════════════════════════════════════════════════════

METRIC                          THIS WEEK    LAST WEEK   TREND
─────────────────────────────────────────────────────────────
HOT Leads Generated             3            1           ▲ +200%
Lead-to-SAL Conversion          18%          15%         ▲ +3pp
Pipeline Created                $230,000     $110,000    ▲ +109%
Average Deal Size               $168,000     $155,000    ▲ +8%
Pipeline at Risk                $440,000     $290,000    ▲ +52%
Close Rate (90-day trailing)    28%          31%         ▼ -3pp
CAC by Channel (avg)            $134         $128        ▲ +5%
─────────────────────────────────────────────────────────────

EXECUTIVE SUMMARY — 5 BULLETS
─────────────────────────────────────────────────────────────
1. Three new HOT signals this week (DataForge hiring,
   Gulf Express LinkedIn activity, Kaizen UAE expansion)
   — all require rep follow-up by Wednesday.

2. Pipeline created doubled to $230K driven by TransPak
   Logistics ($350K deal entered Proposal stage).

3. At-risk pipeline grew to $440K. Crescent Freight ($200K)
   and BridgePoint UK ($90K) need immediate intervention
   or disqualification.

4. Close rate dropped 3 points to 28%. Two deals lost in
   qualifying stage — review disqualification criteria.

5. Likely forecast: $630K against $750K target. Gap closes
   if TransPak or Crescent re-engage this quarter.
─────────────────────────────────────────────────────────────
```

That executive email takes thirty seconds to read. A CEO scanning it on Monday morning sees the headline: pipeline is growing, but at-risk deals are growing faster, and the forecast has a gap. Three specific actions emerge: follow up on HOT signals, intervene on stalled deals, and review why the close rate dropped. No jargon. No dashboards to navigate. Five bullets that drive five decisions.

## The Daily Briefing

The Sales plugin includes a `daily-briefing` skill that produces a morning snapshot for each rep. This is the first thing a rep reads before their first meeting.

```
Give me today's sales briefing for NexaFlow.
```

**Output:**

```
══════════════════════════════════════════════════════════════
          DAILY SALES BRIEFING — NexaFlow Technologies
          Tuesday, March 11, 2026
══════════════════════════════════════════════════════════════

DEALS CLOSING THIS WEEK
─────────────────────────────────────────────────────────────
• Meridian Logistics — $180K — Proposal review scheduled
  Thursday. Sarah Chen confirmed attendance. Prepare ROI
  comparison vs. their current Descartes contract.

• Gulf Express LLC — $95K — Pricing negotiation in progress.
  VP responded to revised quote yesterday. Follow up today
  for final terms.

MEETINGS TODAY
─────────────────────────────────────────────────────────────
• 10:00 AM — AlphaRoute Dubai (qualifying call)
  Context: Visited pricing page twice. First live conversation.
  Prep: Review research brief. Key question: fleet size and
  current route optimisation approach.

• 14:30 PM — DataForge Solutions (discovery)
  Context: Hiring for logistics integration roles. Early stage.
  Prep: Ask about integration timeline and budget approval
  process. This is a B1 qualification conversation.

SIGNALS TO ACT ON
─────────────────────────────────────────────────────────────
• Kaizen Supply Co. (Lahore) — Dawn Business reported UAE
  expansion plans. Warm signal. Consider outreach this week
  using the Pakistan overlay (WhatsApp, KCCI connection).

• Crescent Freight — 34 days in Proposal with zero engagement.
  Decision point: escalate to different contact or disqualify.

PIPELINE SNAPSHOT
─────────────────────────────────────────────────────────────
Active Deals: 10 | At Risk: 3 | HOT Signals: 3
Weighted Pipeline: $565,000 | Gap to Target: $185,000
══════════════════════════════════════════════════════════════
```

Configure this as the rep's morning routine. Before opening email, before checking Slack, the daily briefing tells you: what is closing this week, who you are meeting today (with context), and what signals need attention. The briefing composes skills from across the chapter -- research briefs from Lesson 2, scoring from Lesson 3, meeting context from Lesson 7, and pipeline data from the Revenue Reporting Agent. It is a single view that replaces fifteen minutes of manual CRM checking.

## Configuring Agent Schedules

Map each agent to the business rhythm. Not every agent runs every day. The schedule reflects when each type of intelligence is most valuable.

| Day            | Agent                                     | Why This Day                                                       |
| -------------- | ----------------------------------------- | ------------------------------------------------------------------ |
| **Monday**     | Revenue dashboard + /forecast             | Start the week knowing pipeline health and forecast status         |
| **Wednesday**  | CRM Hygiene report                        | Mid-week data quality check catches issues before Friday reporting |
| **Friday**     | Marketing Performance analysis            | End-of-week campaign review informs next week's budget decisions   |
| **Daily**      | Sales briefing + Lead Intelligence alerts | Reps need signal intelligence before their first meeting           |
| **Continuous** | Outreach Sequencing Agent                 | Event-driven -- responds to prospect behaviour in real time        |

This schedule means a NexaFlow rep's week looks like this:

**Monday morning:** Read the revenue dashboard (30 seconds) and daily briefing (2 minutes). Know the forecast gap, the at-risk deals, and today's meetings.

**Wednesday:** CRM Hygiene report arrives. Review flagged records, merge duplicates, update stale data. Ten minutes of maintenance that keeps scoring accurate.

**Friday afternoon:** Marketing Performance report arrives. See which channels delivered this week. Decide whether to adjust budget for next week before leaving for the weekend.

**Every morning:** Daily briefing. Deals closing, meetings today, signals to act on. The rep starts the day informed, not scrambling.

**All week:** Outreach Sequencing Agent handles touch progression automatically. The rep focuses on conversations, not on remembering which prospect needs touch four.

## What You Built

- Five RevOps agents understood and configured -- each with a clear purpose, schedule, and output format
- Pipeline health audit with deal-level health scores and three-dimension scoring, identifying the 3 highest-risk and 2 strongest deals
- Sales forecast with three scenarios (best/likely/worst), revealing a $120,000 gap to quarterly target
- Daily sales briefing configured as the rep's morning routine, composing skills from across the chapter
- Weekly revenue dashboard with seven metrics and a 150-word executive summary
- Agent schedule mapped to NexaFlow's business rhythm -- Monday through Friday, daily and continuous

## Try With AI

Use these prompts in your preferred AI assistant.

**Prompt 1: Pipeline Analysis**

```
Run /pipeline-review and /forecast on NexaFlow's demo pipeline data
(or your own pipeline if you have one).

From the output, identify:
1. The 3 highest-risk deals and what makes each one risky
2. The 2 most likely to close this quarter and why
3. The gap between likely forecast and quarterly target
4. One deal where you disagree with the agent's probability
   estimate — explain why your assessment differs
```

**What you are learning:** Pipeline analysis is not about reading numbers. It is about interpreting deal health in context. The agent scores deals on data it can measure (stage duration, engagement, signals). You evaluate deals on context it cannot measure (relationship strength, procurement cycles, competitive dynamics). The disagreement between your assessment and the agent's is where your judgment adds value.

**Prompt 2: Dashboard for a Different Metric**

```
NexaFlow's revenue dashboard tracks 7 metrics focused on pipeline
and acquisition. Reconfigure the Revenue Reporting Agent to produce
a dashboard focused on customer retention instead of pipeline.

Replace the 7 metrics with retention-focused alternatives:
- What metrics would you track? (e.g., churn rate, NPS, expansion
  revenue, support ticket volume, renewal pipeline)
- How does the executive summary change when the dashboard measures
  retention instead of acquisition?
- What data sources does the agent need that the pipeline dashboard
  did not require?

Produce a sample retention dashboard and executive email using
NexaFlow's business context.
```

**What you are learning:** Dashboard design is metric selection. Changing from pipeline to retention changes every data source, every threshold, and every recommendation. The underlying agent architecture (schedule-driven, digest-producing, stateless) stays the same. By rebuilding the dashboard for a different business question, you internalise the pattern: agents are configurable instruments, not fixed reports.

**Prompt 3: Daily Briefing in Practice**

```
Run "Give me today's sales briefing" for NexaFlow's pipeline
(or your own pipeline if available).

After reading the briefing:
1. Write down the 3 actions you would take today based on
   what the briefing told you
2. Now think about what you would have done this morning
   WITHOUT the briefing — would your priorities have been
   the same?
3. Identify one signal in the briefing that changes your
   plan for today. What would you have missed without it?

If using your own data: which section of the briefing was
most valuable? Which was noise? How would you configure the
agent to show more of what matters and less of what does not?
```

**What you are learning:** The value of a daily briefing is not information delivery -- it is priority realignment. Without the briefing, you start the day with yesterday's mental model. With it, you start with today's signals. The third question forces you to identify the specific moment where the agent's output changed your behaviour. That is the measurable value of automation: not time saved, but decisions improved.

## Flashcards Study Aid

<Flashcards />
