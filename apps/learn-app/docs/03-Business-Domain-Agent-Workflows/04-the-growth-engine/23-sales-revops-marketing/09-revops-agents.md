---
sidebar_position: 9
title: "RevOps Agents"
description: "Build five persistent autonomous agents that orchestrate the revenue engine end-to-end: Lead Intelligence, CRM Hygiene, Outreach Sequencing, Marketing Performance, and Revenue Reporting"
keywords:
  [
    "RevOps agents",
    "lead intelligence agent",
    "CRM hygiene agent",
    "outreach sequencing agent",
    "marketing performance agent",
    "revenue reporting agent",
    "autonomous agents",
    "MCP integration",
    "sales automation",
    "revenue operations",
    "pipeline management",
    "agent orchestration",
  ]
chapter: 23
lesson: 9
duration_minutes: 30

# HIDDEN SKILLS METADATA
skills:
  - name: "Design Persistent RevOps Workflow Agents"
    proficiency_level: "B2"
    category: "Technical"
    bloom_level: "Analyze"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can design the workflow sequence, MCP integrations, alert formats, scheduling logic, and SKILL.md for a RevOps process agent, distinguishing between what the agent handles autonomously and what requires human intervention"

  - name: "Configure Agent Orchestration and Scheduling Patterns"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can configure agent scheduling patterns (daily scans, weekly digests, monthly full passes) and design inter-agent handoffs where one agent's output triggers another agent's workflow"

learning_objectives:
  - objective: "Distinguish between command-level tools (research, score, outreach) and process-level agents (Lead Intelligence, CRM Hygiene) and explain why the distinction matters for revenue operations"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Student can describe what a command tool produces vs. what a process agent manages, and explain why process agents create structural change in revenue operations"

  - objective: "Design a Lead Intelligence Agent SKILL.md with signal classification, alert formats, monitoring schedules, and prohibited actions"
    proficiency_level: "B2"
    bloom_level: "Apply"
    assessment_method: "Student produces a SKILL.md with signal sources, HOT/WARM/NEUTRAL classification rules, alert format, and NEVER rules"

  - objective: "Configure inter-agent handoffs where a CRM Hygiene Agent triggers the Lead Intelligence Agent when a score crosses a threshold"
    proficiency_level: "B2"
    bloom_level: "Apply"
    assessment_method: "Student can trace a data change through two agents, explaining the trigger condition, the data passed, and the resulting action"

cognitive_load:
  new_concepts: 7
  concepts_list:
    - "Command tools vs. process agents (the key distinction)"
    - "Lead Intelligence Agent (signal monitoring, classification, alerts)"
    - "CRM Hygiene Agent (scheduled enrichment, data quality scoring)"
    - "Outreach Sequencing Agent (sequence lifecycle, branch conditions)"
    - "Marketing Performance Agent (automated reporting, anomaly detection)"
    - "Revenue Reporting Agent (pipeline aggregation, forecast, leading indicators)"
    - "Agent orchestration patterns (scheduling, inter-agent handoffs)"
  assessment: "7 concepts at B2 level -- within the acceptable range. Students have built skills and agents in prior chapters and now apply the pattern to the revenue operations domain with cross-functional integration requirements."

differentiation:
  extension_for_advanced: "Build a sixth agent: the Deal Desk Agent that monitors active opportunities and triggers alerts when deal velocity deviates from historical patterns. Design the SKILL.md with stage-specific SLAs and competitive intelligence triggers."
  remedial_for_struggling: "Focus on the Lead Intelligence Agent and the Revenue Reporting Agent. If you can trace a signal from detection through classification to rep alert, and understand how the Monday morning dashboard aggregates pipeline data, you have the core pattern."
---

# RevOps Agents

In Lessons 1-8, you used plugin commands one at a time -- `/research` for prospect intelligence, `/score` for lead qualification, `/outreach` for personalised messages. Each command produces a single output from a single input. Now you will build something fundamentally different: **persistent, autonomous agents that manage revenue processes end-to-end**.

The distinction matters. A `/research` command produces a brief. A Lead Intelligence Agent monitors your entire prospect list continuously, classifies signals in real time, updates scores automatically, and alerts the right rep within two hours of a buying window opening -- all without anyone typing a command. A `/pipeline` command produces a snapshot. A Revenue Reporting Agent aggregates pipeline data, marketing metrics, lead velocity, and forecast accuracy into a dashboard that lands in leadership inboxes every Monday morning -- automatically, with no manual effort.

This is the transformation that separates organisations using AI tools from organisations running AI-native revenue operations. The organisation that runs plugin commands has a better toolkit. The organisation that builds RevOps agents has a transformed revenue function.

:::info What Is an Autonomous Agent?
An **autonomous agent** is a persistent AI workflow that runs on a schedule or in response to triggers, executes a defined sequence of steps, and produces outputs without requiring a human to initiate each step. Unlike a command (which you invoke), an agent runs itself. Unlike a chatbot (which waits for input), an agent actively monitors, analyses, and acts. The SKILL.md defines what the agent does, when it does it, and what it must never do.
:::

:::info What Is MCP (Model Context Protocol)?
**MCP** is the standard protocol that connects AI agents to external tools and data sources -- your CRM, email system, analytics platforms, calendar, and file storage. When we say an agent connects to your CRM "via MCP," we mean it uses a standardised connector that reads and writes CRM data programmatically. MCP connectors exist for Salesforce, HubSpot, Pipedrive, Gmail, Google Sheets, Slack, LinkedIn Campaign Manager, Google Analytics, and dozens of other platforms. The agent does not need separate API integrations for each tool -- MCP provides a universal interface.
:::

## The Five Core RevOps Agents

| Agent                     | Purpose                                                 | Schedule         | Key Integration                         |
| ------------------------- | ------------------------------------------------------- | ---------------- | --------------------------------------- |
| **Lead Intelligence**     | Monitor prospects; alert on buying signals              | Daily scan       | Web Search, LinkedIn, CRM, Google News  |
| **CRM Hygiene**           | Keep data current; flag stale records                   | Weekly + Monthly | CRM, LinkedIn, Email Verification       |
| **Outreach Sequencing**   | Manage multi-touch sequences; track engagement          | Continuous       | CRM, Gmail/Outlook, LinkedIn            |
| **Marketing Performance** | Pull channel data; generate weekly analysis             | Every Friday     | LinkedIn Ads, GA4, Email Platform, CRM  |
| **Revenue Reporting**     | Produce leadership dashboard with pipeline and forecast | Every Monday     | CRM, Marketing Platform, Finance System |

## Agent 1: Lead Intelligence Agent

**Purpose:** Monitor configured prospect lists and signal sources continuously. Alert sales reps within two hours when HOT timing signals appear. Never let a buying window go undetected.

The Lead Intelligence Agent is the front line of your revenue engine. Without it, buying signals -- a prospect announcing a funding round, a target contact posting about the exact problem you solve, a company posting four operations roles in a week -- pass unnoticed. Your competitors' reps reach out first. The window closes.

**Architecture:** The agent connects via MCP to web search (Google News, trade press), LinkedIn (company pages, contact activity), Companies House or equivalent registries (filings, director changes), and your CRM (account assignments, current scores). It scans daily against your configured prospect list.

**Signal Classification:**

The agent classifies every detected event into three tiers:

| Tier        | Alert Timing       | Criteria                                                  | Examples                                                                                    |
| ----------- | ------------------ | --------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **HOT**     | Within 2 hours     | At least 2 corroborating data points; clear buying signal | Funding round announced; major contract win; new VP hire in target role; pricing page visit |
| **WARM**    | Daily digest       | Single positive signal; growth indicator                  | New job posting in target department; expansion announcement; conference speaking slot      |
| **NEUTRAL** | Weekly digest only | General industry context; no specific prospect relevance  | Industry news; competitor announcements (shared with leadership, not reps)                  |

**Trigger Conditions:** The agent fires a HOT alert when a monitored account shows a combination of signals that indicate active buying readiness. A single data point -- one job posting, one news article -- is never enough for HOT classification. The agent requires corroboration: a funding round _plus_ rapid hiring, or a new contract win _plus_ a target contact posting about operational scaling pressure.

**Failure Modes:** The most common failure is alert fatigue -- too many WARM signals promoted to HOT, causing reps to ignore alerts. The classification thresholds must be calibrated against your historical conversion data: which signals actually preceded your last ten closed-won deals? Those are your HOT criteria. Everything else is WARM or NEUTRAL.

**Sample Weekly Signal Report:**

```
LEAD INTELLIGENCE DIGEST -- Week of 10 March 2026
================================================================

HOT signals since last digest:      3 -- see separate alerts below
WARM signals:                       11
Accounts monitored:                 127

HOT SIGNAL ALERTS

  (1) Meridian Logistics -- Leeds
      Signal:    Series B funding (GBP 18M) announced via TechCrunch, 7 Mar
                 + 4 Operations roles posted in last 14 days
      Contact:   Sarah Chen, VP Operations
      Rep:       James Wright (North territory)
      Score:     Updated from 54 --> 87
      Action:    Run /research + /outreach immediately
      Deadline:  First touch by 12 March

  (2) Vantage Distribution -- Birmingham
      Signal:    New CEO appointed (ex-DHL, started 1 Feb)
                 + Company website redesigned with "digital transformation" messaging
      Contact:   Mark Evans, COO
      Rep:       Priya Sharma (Midlands territory)
      Score:     Updated from 41 --> 72
      Action:    Run /research; CEO change = reset relationship; new outreach angle

  (3) Horizon Fulfilment -- Manchester
      Signal:    Pricing page visit (9 Mar, 14:22)
                 + Downloaded "Scaling Ops Without Headcount" whitepaper (same session)
      Contact:   Rachel Adams, Director of Operations
      Rep:       Tom Bailey (North-West territory)
      Score:     Updated from 63 --> 78
      Action:    Deploy Touch 1 within 24 hours; lead with whitepaper content

WARM SIGNALS

  Apex Warehousing     -- New depot lease filed (Nottingham Council, 6 Mar)
  BrightPath Logistics -- CFO posted about margin pressure (LinkedIn, 8 Mar)
  Cornerstone 3PL      -- Job posting: "Process Improvement Manager" (Indeed, 5 Mar)
  [... 8 additional entries ...]

SCORE CHANGES (crossed 60 threshold this week)
  Vantage Distribution:  41 --> 72 (HOT)
  BrightPath Logistics:  55 --> 64 (newly HOT)

ROLE CHANGES DETECTED
  David Nguyen -- was Head of Ops at Pinnacle Logistics; now VP Supply Chain
  at Clearwater Distribution. Action: Update CRM; reassign to South territory;
  new research required.

================================================================
```

This report is generated automatically every Monday morning and distributed to RevOps and sales leadership. Each HOT alert also triggers a separate immediate notification to the assigned rep within two hours of detection.

## Agent 2: CRM Hygiene Agent

**Purpose:** Keep CRM data current automatically. Run enrichment on a defined schedule. Flag stale, incorrect, or incomplete records. Ensure every rep works with accurate, complete prospect data at all times.

CRM data decays at approximately 30% per year. People change jobs. Companies pivot. Email addresses bounce. Phone numbers change. A record entered eighteen months ago may be partially or entirely wrong today -- and most records were never complete to begin with. The CRM Hygiene Agent eliminates data decay as a revenue risk.

:::info What Is an SLA (Service Level Agreement)?
In the context of RevOps agents, an **SLA** is not a customer contract -- it is an internal commitment defining how quickly the team must act on a signal. When we say "Tier 1 SLA: 1 business day," we mean the assigned rep must respond to a Tier 1 lead within one business day. SLA tracking ensures that leads do not sit unworked while buying signals decay.
:::

**Architecture:** The agent connects via MCP to your CRM (Salesforce, HubSpot, Pipedrive), web search (for real-time firmographic updates), LinkedIn (for role verification and activity monitoring), and email verification APIs (for deliverability checks). It runs three scheduled workflows at different cadences.

**Scheduled Workflows:**

| Cadence       | Scope                                                                  | Actions                                                                                                                                                                                                                                 |
| ------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Weekly**    | All HOT and WARM scored records with last enrichment older than 7 days | Verify email deliverability; check for role changes; scan for new timing signals; update scores; alert Lead Intelligence Agent if any score crosses 60 threshold                                                                        |
| **Monthly**   | All Tier 1 accounts plus full active pipeline                          | Full enrichment pass; revenue and headcount refresh; tech stack update via job posting analysis; score recalculation; identify contacts who changed roles; flag significant score declines to customer success team                     |
| **Quarterly** | All active records in CRM                                              | Full database enrichment; email bounce cleanup and re-verification; duplicate contact detection and merge recommendations; inactive record archiving (no activity for 12+ months and score below 20); comprehensive data quality report |

**Data Quality Scoring:** The agent maintains a data quality score for the entire CRM, measured as the percentage of records that are complete (all mandatory fields populated, email verified, last enrichment within 90 days). This score trends over time, giving RevOps leadership visibility into whether data quality is improving, stable, or declining.

**Deduplication Logic:** The quarterly pass includes duplicate detection using fuzzy matching on company name, contact email, and phone number. The agent does not merge duplicates automatically -- it produces a merge recommendation report for RevOps to review and approve. Automated merges risk losing data; human review ensures the surviving record retains all relevant history.

**Failure Modes:** The most dangerous failure is silent data decay -- records that look current but contain stale information. The agent mitigates this by tracking "last enrichment date" for every record and escalating any record where enrichment has not run within the configured window. The second failure mode is over-enrichment -- running expensive verification on records that do not warrant it. The tiered scheduling (weekly for HOT/WARM, monthly for Tier 1, quarterly for all) ensures enrichment effort is proportional to record value.

**Sample Hygiene Report:**

```
CRM HYGIENE REPORT -- Monthly | 1 March 2026
================================================================
Records processed:     1,247
Records updated:       389 (31.2%)
Records unchanged:     858 (68.8%)

CHANGES MADE
  Role changes:        23 contacts updated (new title or employer)
  Email corrections:   14 addresses updated (bounced --> verified replacement)
  Revenue updates:     31 accounts (Companies House annual filings)
  Headcount changes:   47 accounts (LinkedIn company page delta)
  New timing signals:  8 accounts flagged (see HOT signals below)

FIELD UPDATE FREQUENCY (top 5 most-changed fields)
  1. Contact title         -- 23 records
  2. Account headcount     -- 47 records
  3. Contact email         -- 14 records
  4. Account revenue est.  -- 31 records
  5. Tech stack indicators -- 19 records

ROLE CHANGES REQUIRING MANUAL ACTION
  David Nguyen -- was Head of Ops at Pinnacle Logistics; now VP Supply Chain
  at Clearwater Distribution. Action: Re-route to South territory rep.
  Lisa Park -- was Director of Logistics at Apex Warehousing; now COO at
  Summit Freight (new company, not in CRM). Action: Create new account record.

NEW HOT SIGNALS IDENTIFIED DURING ENRICHMENT
  BrightPath Logistics -- Posted 3 warehouse roles in 2 weeks; score 55 --> 64
  Clearwater Distribution -- New VP hire (David Nguyen, ex-Pinnacle); score 38 --> 58

DATA QUALITY ISSUES
  Missing email:          34 records
  Bouncing email:         14 records (corrected 14; 0 remaining unresolved)
  Missing phone:          89 records
  Last enrichment >90d:   112 records -- recommend: schedule ad-hoc enrichment pass

DATA QUALITY SCORE:     78.4% of records complete
Prior period:           74.1%
Trend:                  Improving (+4.3 percentage points)
================================================================
```

## Agent 3: Outreach Sequencing Agent

**Purpose:** Manage multi-touch outreach sequences for all HOT and WARM leads. Track which touches have been sent. Trigger follow-ups on schedule. Flag replies immediately for rep attention. Never miss a touch. Never continue a sequence after a prospect has replied.

The Outreach Sequencing Agent turns the one-time outputs of the `/sequence` command into a managed, tracked, continuously executing process. Without it, sequences are generated but not managed -- reps forget to send Touch 3, miss the timing window for Touch 5, or continue sending automated messages after the prospect has already replied (the single most damaging outreach error in B2B sales).

**Architecture:** The agent connects via MCP to your CRM (for sequence status tracking), email platform (Gmail or Outlook, for send, open, click, and reply detection), and LinkedIn (where available, for connection and message tracking). It runs continuously, checking for pending touches and engagement signals.

**Sequence Lifecycle:**

The agent manages four distinct phases of every sequence:

1. **Initiation** -- When a lead is classified HOT, the agent automatically triggers `/research` to generate a brief, then `/sequence` to build a multi-touch sequence, then schedules Touch 1 within 24 hours of HOT classification. Status in CRM: ACTIVE.

2. **Execution** -- The agent sends each touch at the scheduled time, logs the send in CRM with timestamp and channel, and checks for engagement (opens, clicks, replies) before sending the next touch. Default HOT timing: Day 1, 3, 7, 10, 17, 21. Default WARM timing: Day 1, 7, 14, 28, 35.

3. **Branching** -- The agent monitors for three events that alter the sequence flow:

| Event                    | Agent Action                                                                                                                                                |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Reply received**       | Immediately pause sequence (status: REPLIED); alert assigned rep within 15 minutes; log in CRM; do NOT send any further automated touches                   |
| **Bounce detected**      | Pause sequence (status: PAUSED); trigger `/enrich` to find updated email; alert rep: "Email bounced -- verify contact before resuming"                      |
| **Unsubscribe received** | Stop all touches on all channels permanently (status: OPTED-OUT); update CRM: DO NOT CONTACT via email; alert rep for potential phone or LinkedIn follow-up |

4. **Completion** -- If all touches are sent with no response, the agent logs "Sequence completed -- no response" in CRM, moves the prospect to a monthly CULTIVATE nurture cadence managed by marketing, and schedules a re-evaluation via `/enrich` and `/score` in 90 days.

**Timing Optimisation:** The agent adjusts timing based on engagement signals. If a prospect opens an email but does not click, the agent brings the next touch forward by three days (engagement signal suggests interest but insufficient motivation -- a faster follow-up catches the window). If a prospect opens multiple emails without any click, the agent does not send the final "closing the loop" touch -- instead, it substitutes one additional value-add touch (a case study or data point), because consistent opens indicate the prospect is reading and may need a stronger hook rather than a graceful exit.

**Failure Modes:** The critical failure is sending a touch after a reply. Any reply -- even "not interested right now" -- means the conversation is now human-led. The agent's NEVER rules enforce this absolutely. The second failure is sending too many touches on the same channel within a short window, which triggers spam filters and damages sender reputation. The minimum gap rule (3 days between touches on the same channel) prevents this.

**Sample Sequence Status Output:**

```
SEQUENCE STATUS -- Active Sequences Summary | 10 March 2026
================================================================
Active sequences:      34
Replied (awaiting rep): 7
Completed (no reply):  12
Opted-out:              2
Paused (bounce):        1

TOP PRIORITY -- REPLIES AWAITING REP ACTION

  Sarah Chen / Meridian Logistics
  Sequence: HOT-6 | Touch 2 (email) | Replied 9 Mar 16:42
  Reply: "Thanks for the note. We are actually looking at this right now.
         Can you send me some more detail on what you do for 3PLs?"
  Rep: James Wright | Alert sent: 9 Mar 16:43 | Rep acknowledged: 9 Mar 17:15
  Status: REPLIED -- sequence paused; rep leading conversation
  Recommended: Run /brief type:"pre-call" and propose a discovery call

  Mark Evans / Vantage Distribution
  Sequence: HOT-6 | Touch 1 (LinkedIn DM) | Replied 8 Mar 09:20
  Reply: "Interesting timing -- let's talk. Next week?"
  Rep: Priya Sharma | Alert sent: 8 Mar 09:21 | Rep acknowledged: 8 Mar 09:35
  Status: REPLIED -- discovery call being scheduled

UPCOMING TOUCHES (next 48 hours)
  Rachel Adams / Horizon Fulfilment -- Touch 3 (LinkedIn value-add) -- 11 Mar
  Tom Jennings / Apex Warehousing -- Touch 4 (email reframe) -- 11 Mar
  Claire Watson / BrightPath -- Touch 1 (LinkedIn DM) -- 12 Mar

BOUNCE REQUIRING ACTION
  Mike Torres / Cornerstone 3PL -- Touch 2 bounced (email invalid)
  Enrichment triggered: awaiting updated email address
  Rep alert sent: Tom Bailey
================================================================
```

## Agent 4: Marketing Performance Agent

**Purpose:** Automatically pull weekly performance data from all connected marketing channels. Generate analysis with the top three optimisation recommendations. Distribute to relevant stakeholders. Track progress against campaign KPIs.

Most marketing teams review performance manually -- someone pulls data from LinkedIn Ads, someone else checks Google Analytics, a third person runs an email report, and the marketing manager spends two hours assembling a narrative. The Marketing Performance Agent eliminates this manual assembly entirely. Every Friday, it pulls data from every connected channel, compares actuals to targets, identifies trends, and produces an analysis report with specific, actionable recommendations -- not just observations.

:::info What Is Anomaly Detection?
In the context of the Marketing Performance Agent, **anomaly detection** is the automatic identification of metrics that deviate significantly from expected values. If your landing page conversion rate drops 35% week-over-week, the agent does not wait until the Friday report to flag this -- it sends an immediate alert. Anomaly detection catches problems early, before they compound into missed targets. The agent uses configurable thresholds: you define what "significant deviation" means for each metric based on your historical data.
:::

**Architecture:** The agent connects via MCP to LinkedIn Campaign Manager (impressions, clicks, CTR, CPL), Google Analytics GA4 (sessions, conversion rates, engagement), your email platform (HubSpot, Mailchimp, or Klaviyo -- send volume, open rates, click rates, unsubscribe rates), your CRM (leads by source, score distribution, pipeline attribution), and ad platforms (Google Ads, Meta Ads if applicable).

**Automated Schedule:** Every Friday (or configured day), the agent executes a five-step workflow:

1. Pull data from all connected channels via MCP (preceding 7 days)
2. Compare actuals to targets from the campaign brief in local configuration
3. Compare actuals to prior week for trend analysis
4. Run the `/analyze` workflow to identify the top 3 optimisation opportunities
5. Generate the weekly performance report and distribute it

**Anomaly Alert Triggers:** The agent sends immediate alerts (not waiting for the weekly report) when any of these thresholds are breached:

- Email unsubscribe rate exceeds 0.5% in any single send
- Ad spend is depleted before the end of the scheduled period
- Landing page conversion drops more than 30% week-over-week
- HOT lead volume drops more than 25% week-over-week with no explained cause
- CRM integration error detected: leads not flowing from marketing to sales

**Failure Modes:** The primary failure mode is false positives -- alerting on normal variance. A single bad email send with a 0.6% unsubscribe rate may not indicate a systemic problem. The agent mitigates this by requiring sustained anomalies (two consecutive weeks or a single-week deviation exceeding the threshold by 50%) before escalating to leadership. The secondary failure mode is stale data connections -- if an MCP connector fails silently, the report will show incomplete data. The agent validates data completeness before generating the report and flags any channel with missing or incomplete data.

**Sample Weekly Performance Dashboard:**

```
MARKETING PERFORMANCE REPORT -- Week of 22 August 2026
Campaign: Q3 Brand Awareness + Pipeline -- "Operations Intelligence"
================================================================

HEADLINE NUMBERS -- WEEK 8 OF 10

                           Actual     Target    vs Target    vs Last Week
Demo requests:                22         18     122%  (+)       +4
SQLs generated:                9          7     129%  (+)       +3
LinkedIn Ads impressions: 31,200     25,000     125%  (+)       +11%
LinkedIn Ads CTR:          0.52%      0.45%     116%  (+)       +0.06%
Podcast sponsor clicks:      184        150     123%  (+)       +22
Webinar registrations:        67         50     134%  (+)       +9
Webinar attendance rate:      58%        55%    105%  (+)       -2%
Cost per demo request:    GBP 14.20  GBP 18    127%  (+)       -GBP 2.10
Cost per SQL:             GBP 196    GBP 250   128%  (+)      -GBP 31

ANOMALY DETECTED (automated alert fired 19 Aug)
  Webinar replay page bounce rate spiked from 22% to 51% on 18 Aug.
  Root cause identified: CDN cache cleared during maintenance; video
  player took 9 seconds to load vs. normal 1.2 seconds.
  Resolution: CDN cache repopulated at 19 Aug 07:15. Bounce rate
  returned to 24% within 24 hours.
  Impact: estimated 15-20 lost replay views. No SQL impact detected.

TOP 3 OPTIMISATION OPPORTUNITIES

1. PODCAST SPONSORSHIP OUTPERFORMING LINKEDIN ADS ON CPL (GBP 11 vs GBP 14)
   "The Ops Edge" podcast mid-roll: 184 clicks, 14 demo requests (7.6% conv).
   LinkedIn Ads: 31,200 impressions, 162 clicks, 8 demo requests (4.9% conv).
   Current budget split: 75% LinkedIn / 25% Podcast.
   RECOMMENDED: Rebalance to 55% LinkedIn / 45% Podcast for weeks 9-10.
   Add a second podcast ("Supply Chain Unpacked") at GBP 800/episode.
   Expected impact: +5-7 incremental demo requests; -18% blended CPL.

2. WEBINAR-TO-SQL CONVERSION NEEDS A FASTER HANDOFF
   67 registrants, 39 attendees, but only 4 converted to SQL (10%).
   Industry benchmark for mid-funnel webinars: 15-20%.
   Diagnosis: Post-webinar follow-up email fires 48 hours after event.
   Attendee intent decays rapidly -- 80% of conversions happen within
   24 hours of attendance.
   RECOMMENDED: Trigger follow-up email within 4 hours of webinar end.
   Include personalised recap based on poll responses and Q&A participation.
   Expected impact: +3-5 additional SQLs per webinar; conversion to 15%+.

3. CROSS-CHANNEL ATTRIBUTION REVEALS HIDDEN LINKEDIN INFLUENCE
   Agent-detected pattern: 6 of 9 SQLs this week visited LinkedIn Ads
   content 2-3 weeks before converting via podcast or webinar.
   LinkedIn is functioning as an awareness channel feeding downstream
   conversion, but current last-touch attribution credits podcast/webinar.
   RECOMMENDED: Implement multi-touch attribution model. Do NOT cut
   LinkedIn budget based on last-touch SQL numbers alone.
   Expected impact: More accurate budget allocation; prevents
   starving the awareness channel that feeds the conversion channels.

PREDICTIVE BUDGET REALLOCATION (agent-generated)
  Based on weeks 1-8 performance trends, the agent recommends:
  - Shift GBP 1,200 from LinkedIn single-image ads to podcast sponsorship
  - Maintain webinar investment (high SQL volume despite conversion gap)
  - Reserve GBP 500 for a test of LinkedIn Newsletter Ads (new format,
    projected 0.8% CTR based on beta data from similar B2B accounts)
  Projected impact if adopted: +12% total SQLs in weeks 9-10 vs. current pace

WHAT IS WORKING -- DO NOT CHANGE
  Webinar content quality: NPS 72 from attendees; 34% request recording link
  Podcast audience fit: 91% of demo requests from target firmographics
  Cross-channel retargeting: webinar no-shows who see LinkedIn retargeting
  ads convert at 2.1x the rate of cold LinkedIn traffic

================================================================
```

## Agent 5: Revenue Reporting Agent

**Purpose:** Produce the weekly revenue dashboard for sales and marketing leadership. Pipeline by stage, lead velocity, campaign contribution, forecast vs. target. Every Monday morning -- automated, no manual effort.

The Revenue Reporting Agent is the single view of truth for the revenue function. Without it, the VP of Sales asks three people for pipeline numbers, the CMO assembles marketing contribution data manually, and the CEO gets a different answer depending on who they ask and when. The agent eliminates this by aggregating all data sources into a single, consistent, automatically generated dashboard.

**Architecture:** The agent connects via MCP to your CRM (pipeline data, deal stages, close dates, rep assignments), marketing platform (lead source attribution, campaign spend), and finance system if available (actual revenue vs. forecast). It runs every Monday morning (or configured day) and distributes the dashboard to configured recipients.

**Dashboard Metrics:** The agent produces four metric categories:

**Pipeline Metrics** -- Total pipeline value (all stages); weighted pipeline (value multiplied by stage probability); pipeline coverage ratio (total pipeline divided by quarterly quota remaining); pipeline created this week vs. target; average deal size vs. target; average sales cycle length vs. target; pipeline at risk (deals with no activity for more than 14 days, with count and currency value); deals closed this week (won, lost, and no-decision).

**Lead Velocity Metrics** -- HOT leads generated this week vs. target; MQL to SAL conversion rate (this week vs. four-week rolling average); SAL to Opportunity conversion rate; time from HOT classification to first outreach (average, this week); time from Opportunity to Close (average, all deals closed this period).

**Marketing Contribution** -- Pipeline generated from marketing-sourced leads (currency value); percentage of total pipeline attributed to marketing; top three performing lead sources this week (by HOT lead volume); campaign spend this week vs. budget.

**Forecast** -- Committed this quarter (deals with greater than 80% probability): currency value and deal count; likely this quarter (50-80% probability): currency value and deal count; upside (below 50% probability): currency value and deal count; current forecast vs. quarterly target as a percentage.

**Leading Indicator Alert System:** The agent monitors one critical leading indicator: the MQL-to-SAL conversion rate. If this rate drops below the configured threshold in any given week, the agent sends an immediate alert to RevOps and VP Sales with the message: "Revenue risk in 60-90 days." This is the earliest signal that the revenue engine is slowing -- it appears two full quarters before it shows up in closed-won revenue.

**Failure Modes:** The primary failure is data lag -- if CRM data is not updated by reps, the dashboard shows stale pipeline. The agent mitigates this by flagging "deals with no activity for more than 14 days" prominently in the at-risk section, creating accountability pressure. The second failure mode is forecast inflation -- reps overstate deal probability. The agent addresses this by showing weighted pipeline alongside raw pipeline, and by tracking forecast accuracy over time (what percentage of "committed" deals actually closed in prior quarters).

**Sample Monday Morning Revenue Dashboard:**

```
REVENUE DASHBOARD -- Week of 10 March 2026
Prepared: Monday 06:00 | Distributed to: VP Sales, CMO, CEO, RevOps
================================================================

PIPELINE METRICS
                              Actual        Target      Status
Total pipeline:           GBP 2.4M          --           --
Weighted pipeline:        GBP 1.1M          --           --
Coverage ratio:              3.2x          3.0x          OK
Pipeline created (week):  GBP 185K      GBP 150K        (+)
Avg deal size:            GBP 42K       GBP 45K         (-)
Avg cycle length:            38 days       35 days       (-)
Pipeline at risk:         GBP 340K (6 deals, no activity >14 days)

LEAD VELOCITY
HOT leads this week:          8              6            (+)
MQL to SAL conversion:       38%            35%           (+)
  (4-week average:           36%)
SAL to Opportunity:          62%            60%           (+)
HOT to first outreach:       22 hours       24 hours      (+)
Opportunity to Close:        34 days        35 days       (+)

MARKETING CONTRIBUTION
Pipeline from marketing:  GBP 95K    (51% of total pipeline created this week)
Top sources: LinkedIn Sponsored (3 HOT), Whitepaper organic (2 HOT), Referral (1)
Campaign spend (week):    GBP 2,100  of GBP 2,400 budget  (87% -- on track)

FORECAST -- Q1 2026
Committed (>80%):        GBP 480K     7 deals    (target: GBP 600K)
Likely (50-80%):         GBP 310K     5 deals
Upside (<50%):           GBP 220K     4 deals
Forecast vs target:          80%                  -- needs 3 more commits

THIS WEEK'S HIGHLIGHTS
  WIN:  Meridian Logistics replied to outreach; discovery call booked for Thursday
  RISK: 6 deals (GBP 340K) with no CRM activity >14 days -- rep action needed
  ASK:  3 committed deals need executive sponsor call to close this quarter
        -- VP Sales to schedule

AT-RISK DEALS REQUIRING LEADERSHIP ATTENTION
  Summit Tech    | J. Wright  | GBP 65K  | No activity 21 days | Recommend: call
  Vanguard Ltd   | P. Sharma  | GBP 48K  | Competitor engaged  | Recommend: exec mtg
  Northern Ops   | T. Bailey  | GBP 72K  | Budget delayed       | Recommend: Q2 reforecast

================================================================
```

## Agent Orchestration: How the Five Agents Work Together

The five agents are not independent -- they form an orchestrated system where each agent's output can trigger another agent's workflow.

```
                    SIGNAL SOURCES
                    (Web, LinkedIn, News, CRM)
                           |
                           v
              +---------------------------+
              |  Lead Intelligence Agent  |  Daily scan
              |  (monitors, classifies,   |  HOT alerts within 2 hours
              |   updates scores)         |
              +---------------------------+
                    |              |
           HOT alert         Score update
                    |              |
                    v              v
    +-------------------+   +-------------------+
    | Outreach Sequencing|  | CRM Hygiene Agent |  Weekly + Monthly
    | Agent              |  | (enrichment,      |  enrichment passes
    | (builds sequence,  |  |  verification,    |
    |  manages touches,  |  |  deduplication)   |
    |  tracks replies)   |  +-------------------+
    +-------------------+         |
           |                Score crosses 60
           |                      |
           v                      v
    Rep gets alert    Lead Intelligence Agent
    (reply detected)  (generates new HOT alert)

    +----------------------------+
    | Marketing Performance Agent|  Every Friday
    | (channel data, analysis,   |
    |  optimisation recs)        |
    +----------------------------+
              |
              v
    +----------------------------+
    | Revenue Reporting Agent    |  Every Monday
    | (pipeline, velocity,       |
    |  forecast, dashboard)      |
    +----------------------------+
              |
              v
        Leadership inbox
```

**Scheduling Patterns:**

| Day           | Agent Activity                                                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Daily**     | Lead Intelligence Agent scans all signal sources; Outreach Sequencing Agent sends scheduled touches and checks for replies                 |
| **Friday**    | Marketing Performance Agent pulls weekly channel data and generates analysis report                                                        |
| **Monday**    | Revenue Reporting Agent aggregates pipeline, velocity, and forecast data into leadership dashboard                                         |
| **Weekly**    | CRM Hygiene Agent runs enrichment on HOT and WARM records                                                                                  |
| **Monthly**   | CRM Hygiene Agent runs full enrichment pass on all Tier 1 accounts; Lead Intelligence Agent adds newly ICP-matched companies to watch list |
| **Quarterly** | CRM Hygiene Agent runs full database enrichment, bounce cleanup, and duplicate detection                                                   |

**Inter-Agent Handoffs:** The critical handoff is between the CRM Hygiene Agent and the Lead Intelligence Agent. When the CRM Hygiene Agent's monthly enrichment pass discovers a new timing signal (a company that was WARM now shows funding plus hiring), it updates the score. If the score crosses the 60-point threshold, the Lead Intelligence Agent automatically fires a HOT alert to the assigned rep. This chain -- enrichment discovers signal, score updates, alert fires, sequence initiates -- runs without any human triggering any step.

## Try With AI

Use these prompts in Claude or your preferred AI assistant to explore this lesson's concepts.

### Prompt 1: Design a Lead Intelligence Agent

```
I am building a Lead Intelligence Agent for my organisation.
My ICP is [describe your ideal customer -- industry, company size,
target persona]. My product solves [describe the core problem].

Design the complete agent SKILL.md:
1. Signal sources to monitor (primary and secondary)
2. Signal classification rules (HOT / WARM / NEUTRAL) with
   specific examples for my industry
3. Alert format with recommended actions
4. Daily digest format
5. The NEVER rules (what the agent must not do)
6. How this agent hands off to the Outreach Sequencing Agent
   when a HOT alert fires

Present as a deployable SKILL.md file.
```

**What you are learning:** Designing a monitoring agent requires thinking about signal quality, not just signal quantity. The classification rules and the corroboration requirement (two data points for HOT) are the governance layer that prevents alert fatigue. The NEVER rules define what the agent must not do autonomously -- these boundaries are as important as the workflows.

### Prompt 2: Map the Agent Orchestration

```
I have these five RevOps agents: Lead Intelligence, CRM Hygiene,
Outreach Sequencing, Marketing Performance, Revenue Reporting.

Walk me through this scenario step by step, identifying which
agent is responsible at each stage:

1. It is Tuesday. The CRM Hygiene Agent runs its weekly enrichment
   pass and discovers that Apex Corp (currently scored 48, WARM)
   has just announced a Series A funding round and posted 3 new
   engineering roles.

2. The score is recalculated. What happens next?

3. By Thursday, the prospect replies to Touch 1. What happens?

4. On Friday, the marketing report runs. Where does this prospect
   appear?

5. On Monday, the revenue dashboard runs. Where does this deal
   appear?

For each step, name the agent, the trigger, and the output.
```

**What you are learning:** Revenue operations agents do not work in isolation -- they form a system. Tracing a single prospect through all five agents reveals the inter-agent handoffs and shows how a buying signal detected on Tuesday becomes a pipeline entry on Monday's dashboard with no manual data entry at any step.

### Prompt 3: Build for Your Market

```
I operate in [your market -- e.g., B2B SaaS in South Asia,
professional services in the GCC, fintech in Southeast Asia].

For this market, what signal sources should my Lead Intelligence
Agent monitor? Consider:
- Local business registries (equivalent to Companies House)
- Regional trade press and industry publications
- Local social media platforms (not just LinkedIn)
- Regional funding databases
- Government procurement portals (if relevant)
- Local job boards

Also consider: what cultural factors affect outreach timing and
channel selection in this market? How should my Outreach Sequencing
Agent adapt its channel mix and timing for this region?
```

**What you are learning:** The RevOps agent architecture is universal, but the signal sources, timing, and channel preferences are market-specific. An agent monitoring the Pakistan market should track SECP filings, Dawn Business, and local job portals alongside LinkedIn. An agent in the GCC should monitor DIFC/ADGM registrations, Gulf News Business, and WhatsApp as a primary outreach channel alongside email.

---

Continue to [Lesson 10: The Skill Library ->](./10-the-skill-library.md)
