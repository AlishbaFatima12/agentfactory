---
sidebar_position: 4
title: "CRM Enrichment and Data Decay"
description: "Run the crm-enrichment skill on stale prospect records, refresh timing signals to uncover hidden HOT leads, and configure an enrichment schedule that keeps your pipeline data alive"
keywords:
  [
    "CRM enrichment",
    "data decay",
    "crm-enrichment skill",
    "timing signals",
    "stale data",
    "enrichment schedule",
    "lead re-scoring",
    "pipeline hygiene",
    "data quality",
    "sales-marketing.local.md",
    "NexaFlow Technologies",
    "Meridian Logistics",
  ]
chapter: 23
lesson: 4
duration_minutes: 20

# HIDDEN SKILLS METADATA
skills:
  - name: "Run CRM Enrichment and Interpret Changes"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can run the crm-enrichment skill on 5 prospect records, identify which fields changed, which were confirmed, and explain the scoring impact of each change"

  - name: "Refresh Timing Signals and Re-Score Prospects"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can compare pre-enrichment and post-enrichment timing scores, identify prospects whose classification changed, and explain which new signal caused the reclassification"

  - name: "Configure an Enrichment Schedule by Account Tier"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can add an enrichment schedule section to sales-marketing.local.md with cadences for Tier 1 (monthly), HOT leads (weekly), and triggered enrichment (within 24 hours of web activity)"

learning_objectives:
  - objective: "Run the crm-enrichment skill on prospect records and interpret the enrichment report to determine which fields changed, which were confirmed, and what the scoring impact is"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student enriches 5 accounts and produces an annotated summary showing changed fields, confirmed fields, and re-scored classifications for each"

  - objective: "Identify prospects whose timing signals changed after enrichment and explain how the new signals alter the lead classification"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student identifies at least one prospect whose classification changed after enrichment and traces the change to a specific new timing signal"

  - objective: "Configure an enrichment schedule in sales-marketing.local.md with cadences matched to account tier and lead classification"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Student produces a complete enrichment schedule section with distinct cadences for Tier 1 accounts, HOT leads, and triggered enrichment events"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "CRM enrichment as an operational workflow (not just a concept)"
    - "Timing signal refresh and its effect on classification"
    - "The difference between changed, confirmed, and stale fields"
    - "Account tier-based enrichment cadences"
    - "Triggered enrichment from web activity signals"
  assessment: "5 concepts at B1 level. L03 introduced score decay and CRM enrichment conceptually. This lesson operationalises them: students run the skill, interpret outputs, and configure the schedule. Concepts build sequentially: enrich, then re-score, then schedule."

differentiation:
  extension_for_advanced: "Enrich all 5 target prospects from the demo dataset. Calculate the percentage of records with at least one stale field. If your CRM has 340 contacts and the stale rate is 30%, how many records need enrichment per quarter? Design a schedule that fits within 10 enrichments per week."
  remedial_for_struggling: "Focus on enriching 2 prospects and comparing the before and after scores. If you can explain why a timing score jumped from 12 to 32 after enrichment, you have the core concept."
---

# CRM Enrichment and Data Decay

In Lesson 3, you scored five prospects and ranked them by classification. But those scores are only as good as the data behind them. How old is that data?

Eighteen months ago, someone at NexaFlow added Raza Ahmed to the CRM as "COO, TechBridge Solutions, Lahore." Today, Raza is VP Engineering at a different company in Islamabad. The CRM record is 100% wrong -- the title, the company, and the city. And nobody at NexaFlow knows, because nobody has looked at this record since the day it was entered. Farhan's team has 340 contacts in HubSpot. Industry research consistently finds that CRM data decays at roughly 30% per year -- job changes, company moves, email bounces, phone number changes. That means approximately 100 of NexaFlow's contacts have at least one stale field right now. Three reps are wasting 15 or more hours each month calling wrong numbers, emailing dead addresses, and pitching to people who left the company two quarters ago.

This lesson stops the decay. You will run the `crm-enrichment` skill on real prospect data, watch timing signals refresh in real time, and configure a schedule that keeps your pipeline alive.

## Running Enrichment on Five Accounts

Take the five target prospects from the demo dataset you generated in Lesson 1. In Lesson 3, you scored all five and classified them. Now run enrichment on each one.

**With a CRM connector** (HubSpot or Close): the `crm-enrichment` skill reads your CRM records directly and writes updates back. You provide the prospect name and the skill pulls the existing record, enriches it, and presents changes for your approval before writing.

**Without a connector**: paste the prospect data from your demo dataset. The skill returns enriched output that you apply manually to your records.

Run this prompt for the first prospect:

```
Enrich this prospect record from our CRM:

Company: Meridian Logistics Ltd, Leeds, UK
Contact: Sarah Chen, VP Operations
Last updated: 3 months ago
Employee count: 380
Industry: Regional 3PL
Recent notes: Won a major contract Feb 2026, VP promoted 6 months ago

Pull current data from all available sources. For each field, tell me:
what changed, what was confirmed, and any new timing signals.
```

**Output:**

```
CRM ENRICHMENT REPORT — Meridian Logistics Ltd

FIELD-BY-FIELD STATUS:
  Contact: Sarah Chen
    Title:           VP Operations → VP Operations  CONFIRMED
    Company:         Meridian Logistics → Meridian Logistics  CONFIRMED
    Location:        Leeds, UK → Leeds, UK  CONFIRMED

  Company: Meridian Logistics
    Employee count:  380 → 420  CHANGED (+40, 10.5% growth)
    Industry:        Regional 3PL  CONFIRMED
    Office locations: Leeds → Leeds, Manchester  CHANGED (new depot opened)

  NEW SIGNALS DETECTED:
    • Partnership announcement with UK logistics tech consortium
      (published 12 days ago)
    • 8 new open roles on LinkedIn (up from 12 three months ago —
      suggests first wave filled, second wave starting)
    • Sarah Chen posted about "warehouse automation pilot results"
      (6 days ago — indicates active evaluation)

SCORING IMPACT:
  Timing (before):    25/40  (contract win was 4+ months ago — decaying)
  Timing (after):     36/40  (new partnership + automation pilot = fresh signals)
  Fit (before):       33/40
  Fit (after):        35/40  (420 employees still within ICP; Manchester
                              depot improves geographic reach)
  Classification:     WARM (63) → HOT (79)
```

Read the report in three layers. First, the **confirmed fields** -- Sarah Chen is still VP Operations at Meridian Logistics in Leeds. You do not need to update those records. Second, the **changed fields** -- employee count grew from 380 to 420, and they opened a Manchester depot. These are real changes that affect scoring. Third, the **new signals** -- a partnership announcement, new hiring, and a LinkedIn post about automation pilot results. These are the timing signals that were sitting in the market unseen while the CRM record gathered dust.

The classification shift from WARM to HOT is driven entirely by the timing signal refresh. Nothing about Meridian's fit changed significantly. What changed is the evidence that Meridian is actively buying right now.

## The Hidden HOT Lead

Now run enrichment on a prospect that was scored as CULTIVATE in Lesson 3. This is the scenario most teams miss entirely: a prospect sitting quietly in the bottom of the pipeline while their buying signals light up.

```
Enrich this prospect record:

Company: TransGulf Freight, Dubai, UAE
Contact: Ahmad Khalil, Director of Operations
Last updated: 5 months ago
Employee count: 95
Industry: Freight forwarding
Score from L03: 42/100 (CULTIVATE)
Notes: Decent fit, no timing signals when last scored
```

**Output:**

```
CRM ENRICHMENT REPORT — TransGulf Freight

FIELD-BY-FIELD STATUS:
  Contact: Ahmad Khalil
    Title:           Director of Operations → COO  CHANGED (promoted)
    Company:         TransGulf Freight  CONFIRMED

  Company: TransGulf Freight
    Employee count:  95 → 140  CHANGED (+45, 47% growth in 5 months)
    Revenue signal:  Won government logistics contract (announced 3 weeks ago)
    Office:          Dubai → Dubai + Abu Dhabi  CHANGED (new office)

  NEW SIGNALS DETECTED:
    • Government contract win worth AED 12M (announced 3 weeks ago)
    • Ahmad Khalil promoted to COO (title change on LinkedIn, 6 weeks ago)
    • Hiring: 5 operations roles, 2 tech roles on LinkedIn
    • Posted RFP for "warehouse management system" on procurement portal
      (9 days ago)

SCORING IMPACT:
  Fit (before):      22/40
  Fit (after):       28/40  (140 employees now within ICP sweet spot;
                             was borderline at 95)
  Timing (before):   12/40
  Timing (after):    32/40  (government contract + COO promotion + RFP
                             = three independent buying signals)
  Engagement:         2/20 → 2/20  (no change — they have not interacted
                                    with NexaFlow content)
  Total:             42/100 → 67/100
  Classification:    CULTIVATE → WARM
```

Five months ago, TransGulf was a 95-person freight forwarder with no buying signals. Today they have won a government contract, promoted their operations director to COO, grown by 47%, and posted an RFP for warehouse management software. Their timing score jumped from 12 to 32. The classification moved from CULTIVATE to WARM -- and with an active RFP, this prospect deserves immediate attention despite the low engagement score.

This is the lead intelligence that was sitting in the CRM unseen. Without enrichment, Farhan's team would have continued ignoring TransGulf for another quarter while a competitor responded to that RFP.

:::tip Enrichment Reveals Timing, Not Fit
Fit changes slowly (company size, industry, tech stack evolve over months or years). Timing changes fast (contracts, promotions, hiring, RFPs appear and disappear within weeks). Enrichment's primary value is catching timing signals before they expire.
:::

## Enriching All Five Accounts

Run the same enrichment prompt on the remaining three prospects from your demo dataset. For each one, record the results:

| Prospect           | Key Changes                                       | Timing Before | Timing After | Classification Change |
| ------------------ | ------------------------------------------------- | ------------- | ------------ | --------------------- |
| Meridian Logistics | +40 employees, Manchester depot, automation pilot | 25/40         | 36/40        | WARM -> HOT           |
| TransGulf Freight  | COO promotion, govt contract, RFP posted          | 12/40         | 32/40        | CULTIVATE -> WARM     |
| Prospect 3         | [your results]                                    |               |              |                       |
| Prospect 4         | [your results]                                    |               |              |                       |
| Prospect 5         | [your results]                                    |               |              |                       |

After enrichment, look at the table. How many prospects changed classification? How many had at least one stale field? If three out of five records had stale data and two changed classification, extrapolate that across NexaFlow's 340 contacts. That is the scale of intelligence your team is missing without a systematic enrichment process.

## Configuring the Enrichment Schedule

Enrichment without a schedule is a one-time cleanup. Enrichment with a schedule is a living system.

Open `sales-marketing.local.md` and add the enrichment schedule section. This tells your team (and, when connected, the agent) how often each account tier should be refreshed:

```markdown
## Enrichment Schedule

### By Account Tier

- **Tier 1 accounts** (top 20 by deal value): Monthly enrichment
  Run crm-enrichment on the 1st of each month. Review all
  changed fields. Re-score any account with timing changes.

- **HOT leads** (75+ score, active pipeline): Weekly enrichment
  Every Monday. Timing signals for active opportunities decay
  fastest. A one-week-old funding announcement is actionable;
  a six-week-old one is history.

- **WARM leads** (55-74 score): Bi-weekly enrichment
  Every other Monday. Catch timing upgrades that would move
  them to HOT.

- **CULTIVATE leads** (35-54 score): Monthly enrichment
  Same cadence as Tier 1. These are long-term bets. Monthly
  is enough to catch major changes.

### Triggered Enrichment

- **Within 24 hours** of any of these signals:
  - Prospect visits pricing page or requests demo
  - Prospect downloads case study or ROI calculator
  - Prospect mentioned in funding announcement
  - Contact changes title on LinkedIn
  - Company appears in RFP database

### Enrichment Log

Track every enrichment run:
| Date | Prospect | Fields Changed | Timing Delta | Action Taken |
|------|----------|----------------|--------------|--------------|
```

The triggered enrichment section is the most valuable part. When a CULTIVATE prospect suddenly visits your pricing page, you do not wait for the monthly cycle. You enrich within 24 hours, re-score, and act before the signal goes cold.

## What You Built

1. 5 accounts enriched with current data from multiple sources
2. Timing signals refreshed -- at least one prospect's classification changed after enrichment
3. Stale records identified and flagged for update (changed fields vs confirmed fields)
4. Enrichment schedule configured in `sales-marketing.local.md` with tier-based cadences and triggered enrichment rules

## Flashcards Study Aid

Test your understanding of enrichment workflows and data decay patterns.

<Flashcards />

## Try With AI

Use these prompts in Claude or your preferred AI assistant with the Sales and RevOps extension plugins installed.

### Prompt 1: Reproduce

```
Enrich these 5 accounts from the demo dataset. For each, show:
what changed, what was confirmed, and any new timing signals.
After enrichment, re-score each account and show the before
and after classification.
```

**What you are learning:** The mechanics of the enrichment-to-rescore cycle. By running all five accounts, you see the pattern: most records have at least one stale field, timing signals are the most volatile dimension, and enrichment changes classifications more often than you expect. The discipline is not just running the skill -- it is reading the output critically and deciding which changes matter.

### Prompt 2: Adapt

```
Take the prospect whose timing score changed the most after
enrichment. Re-score the lead using the three-dimension model
from Lesson 3. Walk me through:
1. Which new signal caused the biggest timing jump?
2. Did the enrichment change the routing recommendation?
3. If this prospect was CULTIVATE before and is now WARM or HOT,
   what should the rep do differently this week?
```

**What you are learning:** Connecting enrichment output to sales action. Enrichment is not a data hygiene exercise -- it is a revenue exercise. The prospect whose timing score jumped the most is the one your competitor is also noticing. The question is whether your team acts on the signal before the window closes.

### Prompt 3: Apply

```
Pick 5 contacts from your own CRM (or use the demo data). Run
enrichment and calculate: what percentage of your records have
at least one stale field? Based on this stale rate, estimate
how many of your total CRM contacts need enrichment right now.
What is the cost of that decay in wasted rep hours per month?
```

**What you are learning:** Quantifying the cost of stale data. Most sales teams know their CRM is messy but do not measure the impact. By calculating the stale rate across a sample and extrapolating, you produce a number your VP of Sales can act on -- "32% of our 340 contacts have stale data, costing us approximately 45 rep hours per month in wasted outreach." That number justifies the enrichment schedule you just built.
