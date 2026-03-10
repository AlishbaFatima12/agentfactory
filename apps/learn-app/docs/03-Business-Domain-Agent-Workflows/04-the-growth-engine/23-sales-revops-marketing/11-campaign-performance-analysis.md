---
sidebar_position: 11
title: "Campaign Performance Analysis"
description: "Run /performance-report on Week 5 campaign data, compare base vs extension analysis for ICP-filtered and regional insights, run /competitive-brief, and establish a weekly review cadence"
keywords:
  [
    "campaign performance",
    "performance-report",
    "competitive-brief",
    "campaign analysis",
    "performance analysis",
    "weekly review cadence",
    "channel optimisation",
    "budget reallocation",
    "NexaFlow",
    "Meridian",
  ]
chapter: 23
lesson: 11
duration_minutes: 25

# HIDDEN SKILLS METADATA
skills:
  - name: "Run and Interpret Campaign Performance Reports"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can generate or paste campaign data, run /performance-report, and interpret the output to identify which channels are performing above or below target"

  - name: "Compare Base and Extension Performance Analysis"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can run both base and extension performance analyses, identify the three key differences (ICP filtering, regional benchmarks, three-dimension scoring), and explain which additions change the recommended actions"

  - name: "Generate and Apply Competitive Briefs"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Communication and Collaboration"
    measurable_at_this_level: "Student can run /competitive-brief for a named competitor, extract positioning insights, and use those insights to adjust campaign messaging for the following week"

  - name: "Establish a Weekly Review Cadence"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can define a Monday-Wednesday-Friday review cadence, explain why each day covers a different function (channel review, lead quality alignment, full performance report), and connect each checkpoint to the measurement framework from L10"

learning_objectives:
  - objective: "Run /performance-report on campaign data and extract three specific optimisation recommendations that the team can execute in the following week"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces a performance report from Week 5 data and identifies at least three recommendations, evaluating each for specificity, expected impact, and team capacity"

  - objective: "Compare base and extension performance analysis outputs and explain which additional dimensions change the recommended budget reallocation"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Student runs both analyses side by side and lists at least three differences, explaining how ICP filtering or regional benchmarks change which channel should receive more budget"

  - objective: "Use /competitive-brief to generate positioning intelligence and explain how it informs next week's content plan"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student runs /competitive-brief for NexaFlow's competitor, extracts two positioning gaps, and proposes content that exploits those gaps"

cognitive_load:
  new_concepts: 6
  concepts_list:
    - "Generating demo campaign data for analysis input"
    - "/performance-report command and output interpretation"
    - "Extension performance-analysis skill (ICP-filtered, regional benchmarks)"
    - "Evaluating recommendations for actionability and team capacity"
    - "/competitive-brief for positioning intelligence"
    - "Weekly review cadence (Monday/Wednesday/Friday rhythm)"
  assessment: "6 concepts at B1 level. Performance reporting and competitive briefs are hands-on command usage. Recommendation evaluation and cadence design are analytical. Builds directly on L10's measurement framework."

differentiation:
  extension_for_advanced: "Run /performance-report for both NexaFlow and Meridian using different market data. Compare how the same command produces different recommendations for an emerging-market startup versus an enterprise UK logistics company."
  remedial_for_struggling: "Focus on /performance-report with the demo data. If you can identify which channel is underperforming and propose one budget reallocation, you have the core analysis skill."
---

# Campaign Performance Analysis

In Lesson 10, you built a 12-week campaign with a content calendar and measurement framework. It is now Week 5. The numbers are in. Time to analyse.

NexaFlow's whitepaper downloads are above target. LinkedIn impressions look strong. But LinkedIn click-through rate is just below benchmark. Email open rates are solid, yet email click rates are weak. Trade press performance is below expectation. Zara has a dashboard full of green and amber indicators. The question is not "how are we doing?" — the question is "what should we do differently next week?"

Most marketing teams stare at dashboards and draw intuitive conclusions. This lesson teaches a different approach: generate structured analysis with specific optimisation recommendations, then evaluate those recommendations with your domain expertise before acting. You will run the base plugin's `/performance-report`, compare it against the extension's deeper analysis, pull competitive intelligence with `/competitive-brief`, and set up a weekly cadence that turns data into decisions.

## The Demo Data: Week 5 Campaign Results

Before you can analyse performance, you need performance data. If you have a connected analytics platform (Amplitude, HubSpot, LinkedIn Campaign Manager), the `/performance-report` command can pull data directly through connectors. If you do not have connectors set up — which is the case for most students working through this lesson — generate demo data that matches NexaFlow's Week 5 scenario:

```
Generate Week 5 performance data for NexaFlow's Q2 campaign.

Include these channels with the following performance characteristics:
- Whitepaper downloads: above the 50-lead target pace (on track for 55-60)
- LinkedIn impressions (PK/UAE): above target
- LinkedIn CTR (PK/UAE): just below the 0.8% benchmark (showing 0.72%)
- LinkedIn Ads (UK): CPL at $680, below the $750 pause threshold
- Email open rate: strong (28%)
- Email click rate: weak (1.8%, below the 3% benchmark)
- Cost per whitepaper download: $380
- Cost per HOT lead (score 60+): $520
- Trade press mentions: 1 (target was 3 by Week 5)
- Google Search CTR: 3.2% (above the 1.5% pause threshold)
- WhatsApp response rate (PK): 24%
- LinkedIn Organic engagement: 3.8%

Format as a structured table with: channel, metric, actual value, target/benchmark, status (above/below/at target).
```

**Output:**

```
NEXAFLOW Q2 CAMPAIGN — WEEK 5 PERFORMANCE DATA
══════════════════════════════════════════════════════════════
Channel                  Metric               Actual    Target     Status
─────────────────────────────────────────────────────────────
Whitepaper Downloads     Total downloads       28        25         Above ✓
LinkedIn Ads (PK/UAE)    Impressions           45,200    40,000     Above ✓
LinkedIn Ads (PK/UAE)    CTR                   0.72%     0.80%      Below ✗
LinkedIn Ads (PK/UAE)    CPL                   $310      $400       Above ✓
LinkedIn Ads (UK)        CPL                   $680      $750       Below ✓
LinkedIn Ads (UK)        Leads generated       4         5          Below ✗
Email Nurture            Open rate             28%       22%        Above ✓
Email Nurture            Click rate            1.8%      3.0%       Below ✗
Google Search            CTR                   3.2%      1.5%       Above ✓
Google Search            Leads generated       4         4          At target
WhatsApp (PK)            Response rate         24%       20%        Above ✓
LinkedIn Organic         Engagement rate       3.8%      2.0%       Above ✓
Trade Press              Mentions              1         3          Below ✗
Cost Metrics             Cost per download     $380      $500       Above ✓
Cost Metrics             Cost per HOT lead     $520      $500       Below ✗
HOT Leads (score 60+)    Total                 18        21         Below ✗
══════════════════════════════════════════════════════════════
```

Save this data. You will paste it into the performance analysis commands.

## Running /performance-report

The `/performance-report` command from the base marketing plugin takes campaign data and returns a structured analysis with optimisation recommendations. If you have analytics connectors, the command pulls data automatically. Without connectors, paste the Week 5 data:

```
/performance-report
Campaign: NexaFlow Q2 Lead Generation
Period: Week 5 of 12

[Paste the Week 5 performance data table from above]

Provide: channel-by-channel analysis, 3 optimisation recommendations,
and a budget reallocation suggestion.
```

**Output:**

```
══════════════════════════════════════════════════════════════
          CAMPAIGN PERFORMANCE REPORT
          NexaFlow Q2 — Week 5 of 12
          Period: 42% through campaign
══════════════════════════════════════════════════════════════

CHANNEL PERFORMANCE SUMMARY
─────────────────────────────────────────────────────────────
Channel               Performance    Budget Efficiency   Action
LinkedIn Ads (PK/UAE) GOOD           CPL $310 (< $400)   Continue
LinkedIn Ads (UK)     WATCH          CPL $680 (< $750)   Monitor
Google Search         STRONG         CTR 3.2% (> 1.5%)   Expand
Email Nurture         MIXED          Open ✓, Click ✗     Fix CTAs
WhatsApp (PK)         STRONG         24% response        Continue
LinkedIn Organic      STRONG         3.8% engagement     Boost posts
Trade Press           WEAK           1 of 3 target       Reassess

RECOMMENDATIONS
─────────────────────────────────────────────────────────────
1. FIX EMAIL CLICK RATE
   Issue: Open rate strong (28%) but click rate weak (1.8%).
   Diagnosis: Recipients read emails but do not click CTAs.
   Action: Rewrite CTAs in emails 4-6. Replace generic "Learn
   more" with specific value CTAs: "See how TCS cut dispatch
   errors by 60%" or "Calculate your fleet ROI in 2 minutes."
   Expected impact: Click rate improvement to 2.5-3.5%.

2. REDUCE TRADE PRESS GAP
   Issue: 1 mention vs 3 target. Behind by 2 mentions.
   Action: Pitch 2 contributed articles to Pakistan logistics
   publications (Logistics Pakistan, Dawn Business). Use the
   customer story from L09 as the pitch angle.
   Expected impact: 1-2 additional mentions by Week 8.

3. EXPAND GOOGLE SEARCH KEYWORDS
   Issue: Google CTR at 3.2% — well above 1.5% threshold.
   Action: Add 10 long-tail logistics keywords targeting UAE
   and UK markets. Current keywords focus on Pakistan. Expand
   to "3PL automation Dubai" and "supply chain AI UK."
   Expected impact: 2-3 additional leads from Search by Week 8.

BUDGET REALLOCATION SUGGESTION
─────────────────────────────────────────────────────────────
Current state: LinkedIn PK/UAE is most efficient (CPL $310).
Google Search has headroom (high CTR, low keyword count).
Trade press is underperforming (1 of 3).

Suggested reallocation: Move $500 from trade press budget
to Google Search keyword expansion. No other changes until
Week 7 data confirms trends.
══════════════════════════════════════════════════════════════
```

## Comparing the Extension's Performance Analysis

Now run the same data through the extension's `performance-analysis` skill. The extension auto-activates because the prompt includes campaign performance data with ICP and multi-market context. Paste the same Week 5 data and add:

```
Analyse this Week 5 data using the performance-analysis skill.
Include ICP-filtered analysis, regional benchmark comparison,
and three-dimension scoring integration.

[Paste the same Week 5 performance data]
```

The extension adds three dimensions the base report does not cover:

```
EXTENSION: PERFORMANCE-ANALYSIS SKILL
══════════════════════════════════════════════════════════════

ICP-FILTERED ANALYSIS
─────────────────────────────────────────────────────────────
Of 28 whitepaper downloads:
  ICP-matched (3PL, VP Ops/COO, 100-500 employees): 16 (57%)
  Adjacent (logistics but wrong title/size): 8 (29%)
  Non-ICP (outside logistics entirely): 4 (14%)

Assessment: 57% ICP match is adequate but below the 70%
benchmark for targeted campaigns. LinkedIn Ads targeting
parameters may be too broad. Recommendation: Narrow LinkedIn
audience from "logistics professionals" to "3PL operations
managers, VP Operations, COO" with company size filter.

REGIONAL BENCHMARK COMPARISON
─────────────────────────────────────────────────────────────
Pakistan LinkedIn CTR:
  Your campaign: 0.72%
  Pakistan B2B benchmark: 0.65%
  Assessment: ABOVE local benchmark ✓
  (Base report flagged this as below target — but target used
  global benchmark of 0.80%. Pakistan's benchmark is lower.)

UK LinkedIn CPL:
  Your campaign: $680
  UK B2B benchmark: $600-900
  Assessment: WITHIN local range ✓
  (Base report shows $680 as concerning; regionally, this is
  mid-range for UK B2B logistics.)

UAE WhatsApp:
  Not active (correct — WhatsApp is not a B2B channel in UAE)

THREE-DIMENSION SCORING INTEGRATION
─────────────────────────────────────────────────────────────
Of 18 HOT leads:
  Fit score (ICP match):     Avg 72/100
  Timing score (signals):    Avg 58/100
  Engagement score (actions): Avg 65/100

Weakest dimension: Timing. Leads match the ICP and engage
with content, but few show active buying signals (fleet
expansion, new warehouse, hiring ops managers).

Recommendation: Add timing-signal enrichment to top 10 leads.
Run CRM enrichment (L04) to check for recent job postings,
facility announcements, or funding events. Leads with low
timing scores may convert in Q3, not Q2.
══════════════════════════════════════════════════════════════
```

### What the Extension Adds

Read both reports side by side. Three differences change the recommended actions:

| Dimension                 | Base Plugin                            | Extension                                          |
| ------------------------- | -------------------------------------- | -------------------------------------------------- |
| **LinkedIn CTR judgment** | Below target (used global 0.80%)       | Above local benchmark (Pakistan B2B is 0.65%)      |
| **Lead quality**          | Counts all 28 downloads equally        | 57% ICP-matched — targeting may be too broad       |
| **Lead readiness**        | Reports 18 HOT leads as a single count | Breaks into Fit/Timing/Engagement — timing is weak |

The base report would have you fix LinkedIn CTR. The extension shows that LinkedIn CTR is actually performing above the local benchmark — the "problem" was a global target that does not account for regional differences. The real problem is that 43% of downloads come from non-ICP contacts, meaning the budget is partially wasted on leads the sales team will never work.

This is the difference between observation and actionable analysis. The base report observes that CTR is below 0.80%. The extension analyses whether 0.80% is the right benchmark for Pakistan and concludes it is not. Your domain expertise decides which report leads to better decisions.

## Evaluating the Recommendations

Both reports produce recommendations. Before acting on any recommendation, evaluate it through three questions:

**Is it specific enough to execute?** "Improve email CTAs" is vague. "Rewrite emails 4-6 with value-specific CTAs using customer metrics from the TCS case study" is specific. Zara can act on the second version Monday morning. If a recommendation requires a follow-up conversation to clarify what it means, it is not specific enough.

**Is the expected impact realistic?** The base report suggests email click rate improvement to 2.5-3.5% from a CTA rewrite. Is that realistic? Industry benchmarks show CTA-specific rewrites typically improve click rates by 0.5-1.5 percentage points. From a 1.8% baseline, 2.3-3.3% is a reasonable range. The report's estimate of 2.5-3.5% is slightly optimistic but not unrealistic.

**Can NexaFlow's team actually execute this?** The trade press recommendation calls for pitching 2 contributed articles. Zara is the only content person. She is already producing 3 content calendar entries per week (from L10). Adding 2 article pitches means 5 content tasks in one week. Evaluate whether this is feasible or whether the pitch should be spread across 2 weeks.

If a recommendation fails any of these three tests, iterate:

```
Recommendation 2 says to pitch 2 articles this week.
Zara is already at capacity with 3 content calendar entries.
Revise: spread the pitches across weeks 6 and 7 (one per week).
What is the adjusted timeline for reaching 3 trade press mentions?
```

The agent adapts the recommendation to the capacity constraint. This is the evaluation loop: generate recommendation, test against reality, refine until executable.

## Competitive Context with /competitive-brief

Campaign performance does not exist in a vacuum. What competitors say shapes how prospects perceive your message. Run `/competitive-brief` to pull positioning intelligence:

```
/competitive-brief
Company: LogiFlow Solutions (NexaFlow's primary competitor)
Market: 3PL logistics automation, Pakistan and UAE
Focus: How they position against smaller competitors like NexaFlow
```

**Output:**

```
══════════════════════════════════════════════════════════════
          COMPETITIVE BRIEF
          LogiFlow Solutions vs NexaFlow Technologies
══════════════════════════════════════════════════════════════

POSITIONING
─────────────────────────────────────────────────────────────
LogiFlow positions as "enterprise-grade logistics platform."
Key messages:
  - "Built for 500+ fleet operators"
  - "SOC 2 certified, GDPR compliant"
  - "Trusted by 40+ logistics companies across MENA"

NexaFlow gap:
  - LogiFlow claims enterprise scale; NexaFlow targets 100-500.
  - LogiFlow leads with compliance; NexaFlow leads with AI.
  - LogiFlow avoids mentioning AI automation — positions as
    traditional platform with "intelligent workflows."

CONTENT ANALYSIS
─────────────────────────────────────────────────────────────
LogiFlow's recent content:
  - Blog: "Why Logistics Companies Need SOC 2" (compliance angle)
  - Case study: "How XYZ Freight Cut Costs by 30%" (cost focus)
  - LinkedIn: 2 posts/week, 1.2% engagement (below NexaFlow's 3.8%)

MESSAGING OPPORTUNITY
─────────────────────────────────────────────────────────────
LogiFlow avoids the AI conversation. NexaFlow can own it.
  - Position AI automation as the differentiator LogiFlow lacks
  - Address the "too small" objection: "Purpose-built for
    growing 3PLs, not retrofitted enterprise software"
  - Counter compliance concern: highlight NexaFlow's data
    handling practices without claiming certifications you
    do not have
══════════════════════════════════════════════════════════════
```

Meridian Logistics in London faces a different competitive landscape. Their competitors lead with post-Brexit customs automation and HMRC compliance — a positioning battle where regulatory credibility matters more than AI capability. The competitive brief for Meridian's market would emphasise compliance and established client references rather than technology differentiation. This is why competitive positioning is market-specific: the same company needs different messaging in Karachi versus London.

### Using Competitive Intel in Week 6

Take the messaging opportunity from the competitive brief and feed it into next week's content:

```
Given this competitive brief, adjust NexaFlow's Week 6 content
calendar entries. The content calendar currently has:
- Blog post on warehouse automation
- LinkedIn article on fleet tracking
- Email nurture #4

Adjust messaging to differentiate against LogiFlow's
enterprise-and-compliance positioning. Lean into NexaFlow's
AI automation advantage and "built for growing 3PLs" message.
```

The agent revises the content angles. The warehouse automation blog becomes "How AI Dispatch Beats Manual Workflows — What Enterprise Platforms Won't Tell You." The LinkedIn article shifts from generic fleet tracking to "Why Growing 3PLs Need AI-Native Tools, Not Retrofitted Enterprise Software." Each adjustment positions NexaFlow's strength against LogiFlow's blind spot.

## The Weekly Cadence

Analysis without rhythm is a one-time exercise. Build a recurring cadence that turns performance data into weekly decisions:

| Day           | Activity                                       | Who                | Output                               |
| ------------- | ---------------------------------------------- | ------------------ | ------------------------------------ |
| **Monday**    | Review channel metrics against thresholds      | Zara               | Pause/continue decisions per channel |
| **Wednesday** | Sales + marketing align on lead quality        | Zara + Sales Rep 1 | Feedback on which leads converted    |
| **Friday**    | Run `/performance-report` + extension analysis | Zara               | 3 recommendations for next week      |

### Why This Order Matters

Monday starts with channel metrics because you need to know immediately if any channel has hit a pause threshold from L10's measurement framework. If UK LinkedIn CPL crosses $750 for the second consecutive week, you pause spending Monday morning — not Friday afternoon after spending another $700.

Wednesday aligns sales and marketing on lead quality. Marketing generated 28 downloads, but sales worked only 18 HOT leads. Which of those 18 converted to meetings? Which were dead ends despite high scores? This feedback loop corrects the scoring model from L03 and the ICP calibration from L02. Without Wednesday alignment, marketing optimises for volume and sales complains about quality.

Friday runs the full performance report because you need a complete week of data. Monday's channel check is a quick threshold scan. Friday's report is the comprehensive analysis that produces next week's three optimisation actions.

### Connecting to L13's Revenue Dashboard

In Lesson 13, you will build a RevOps dashboard with automated agents. The Monday-Wednesday-Friday cadence becomes the human rhythm that the dashboard automates. The `daily-briefing` agent (L13) replaces Monday's manual metric review. The `/pipeline-review` command (L13) replaces Wednesday's alignment meeting. The `/performance-report` stays a human-driven analysis because recommendations need domain judgment before execution.

## What You Built

- A Week 5 campaign analysis with 3 specific optimisation actions tied to team capacity
- A budget reallocation recommendation based on channel efficiency and regional benchmarks
- A competitive brief for differentiated positioning against NexaFlow's primary competitor
- A weekly Monday-Wednesday-Friday review cadence connecting to L10's measurement framework
- The judgment to distinguish observation-only reporting (CTR is 0.72%) from actionable analysis (CTR is above local benchmark; the real problem is ICP match rate)

## Try With AI

Use these prompts in Claude or your preferred AI assistant.

### Prompt 1: Reproduce and Compare (Reproduce)

```
Generate Week 5 performance data for a B2B campaign targeting
VP Operations at logistics companies. Include at least 8 channels
with a mix of above-target and below-target metrics.

Then run two analyses:
1. A standard performance report with 3 recommendations
2. An ICP-filtered analysis that checks what percentage of leads
   match the target persona

List the 3 most impactful differences between the reports.
Which report would lead to better budget decisions, and why?
```

**What you are learning:** Standard performance reports treat all leads equally. ICP-filtered analysis reveals whether your budget is reaching the right people. A campaign can look healthy on volume metrics (downloads, impressions) while wasting budget on non-ICP contacts. Learning to compare both views builds the habit of questioning surface-level metrics.

### Prompt 2: Competitive Positioning Shift (Adapt)

```
Run a competitive brief for a competitor in your industry
(or use this example):

Company: [Name a real or fictional competitor]
Market: [Your industry and geography]
Focus: How they position against companies like yours

Once you have the brief, answer:
1. What messaging gap does the competitor leave open?
2. How would you adjust next week's content to exploit that gap?
3. If the competitor changes their positioning next month to
   close the gap, what is your fallback differentiation?

Compare this to NexaFlow's competitive brief against LogiFlow.
What structural similarities do you see in how competitive
positioning analysis works across different industries?
```

**What you are learning:** Competitive positioning is not a one-time exercise. Competitors adapt. The value of `/competitive-brief` is not the snapshot — it is the cadence. Running it monthly reveals positioning shifts before they affect your pipeline. The fallback differentiation question builds strategic thinking: if your current advantage disappears, what is your next one?

### Prompt 3: Your Own Campaign Data (Apply)

```
If you have access to campaign data from any source — LinkedIn
Campaign Manager, Google Ads, email marketing platform, or even
social media analytics — paste the raw numbers and ask:

1. Analyse this data. Which channels are performing above and
   below target? (If I have not defined targets, suggest
   industry benchmarks for my market.)
2. Give me 3 specific optimisation recommendations. For each one,
   tell me: what to change, expected impact, and how long until
   I see results.
3. Compare your recommendations to what I would have done
   intuitively. Where does AI analysis add value that gut
   instinct would miss?

If you do not have campaign data, use your personal social media
analytics (LinkedIn post engagement, newsletter open rates) as
a starting point. The analysis principles are the same.
```

**What you are learning:** Campaign analysis skills transfer across platforms and scales. The same questions — which channels justify their cost, what should I change next week, is this recommendation executable — apply whether you manage a $25,000 B2B campaign or a personal LinkedIn presence. By comparing AI recommendations to your intuition, you discover where structured analysis adds value beyond what experienced marketers already know.

## Flashcards Study Aid

<Flashcards />
