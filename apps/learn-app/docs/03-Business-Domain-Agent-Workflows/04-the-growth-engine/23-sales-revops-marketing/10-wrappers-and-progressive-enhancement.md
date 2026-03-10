---
sidebar_position: 10
title: "How Plugins Compose — Wrappers and Progressive Enhancement"
description: "Understand why campaign-planning uses the Wrapper pattern (both layers execute together), how progressive connectors enhance output without breaking standalone functionality, and the design reasoning behind plugin composition"
keywords:
  [
    "wrapper pattern",
    "plugin composition",
    "collision resolution",
    "progressive connectors",
    "campaign-planning skill",
    "content-creation skill",
    "dual-plugin architecture",
    "graceful degradation",
    "zero-connector exercise",
    "design reasoning",
    "plugin layers",
    "Anthropic base plugin",
  ]
chapter: 23
lesson: 10
duration_minutes: 25

# HIDDEN SKILLS METADATA
skills:
  - name: "Explain the Wrapper Pattern in Plugin Composition"
    proficiency_level: "B2"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can explain why campaign-planning uses the Wrapper pattern (extension needs the base's channel taxonomy before adding ICP targeting), diagram the data flow, and predict what would break if either layer were removed"

  - name: "Demonstrate Progressive Connector Enhancement"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can run /research-prospect with zero, one, and two connectors, document what each adds, and verify graceful degradation when connectors are removed"

  - name: "Evaluate Wrapper Boundaries and Design Tradeoffs"
    proficiency_level: "B2"
    category: "Conceptual"
    bloom_level: "Evaluate"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can identify when a Wrapper produces contradictory recommendations from its two layers and make a judgment about which layer to trust"

learning_objectives:
  - objective: "Explain why campaign-planning uses the Wrapper pattern and what each layer contributes to the combined output"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Student can diagram the Wrapper data flow and explain what breaks if the base layer is removed vs if the extension is removed"

  - objective: "Demonstrate progressive connector enhancement by running the same command with zero, one, and two connectors"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces annotated output at each connector level and documents what each connector adds"

  - objective: "Evaluate Wrapper boundary conflicts where the extension and base produce contradictory recommendations"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Given conflicting Wrapper output, student can explain which layer's recommendation to follow and why"

cognitive_load:
  new_concepts: 6
  concepts_list:
    - "Wrapper pattern (both plugin layers execute together)"
    - "Plugin collision as a design problem (not a bug)"
    - "Progressive connectors (zero → CRM → enrichment)"
    - "Graceful degradation (works standalone, improves with connectors)"
    - "Base layer vs extension layer roles"
    - "Wrapper boundary (where the two layers can conflict)"
  assessment: "6 concepts at B1-B2 level. This is the first architectural lesson. Wrapper pattern is the core concept; progressive connectors were previewed in L02."

differentiation:
  extension_for_advanced: "Map all 20 skills in the extension to their collision resolution pattern (Wrapper, Override, or Delegation). For each Wrapper, identify the base layer's contribution and the extension's addition. Create a plugin composition reference card."
  remedial_for_struggling: "Focus on the zero-connector exercise: run /research-prospect with nothing, then add ~~CRM. If you can explain what changed and why the command still works without the connector, you understand graceful degradation."
---

# How Plugins Compose — Wrappers and Progressive Enhancement

You have used 14 commands and skills across 9 lessons. `/research-prospect` gives you intelligence briefs. `/score-lead` ranks your pipeline. `/plan-campaign` builds your marketing calendar. The `outreach` skill writes messages that pass the Five Laws. In Lesson 1, you installed two plugin layers and observed that the extension changes the output. In Lesson 4, you saw the base outreach produce generic copy while the extension-loaded version produced Five Laws-compliant messages. You filed those observations. Now you understand why.

Two plugins provide the same capability — campaign planning, prospect research, content creation. When both are active, who runs? Who gets overridden? Who wraps whom? These are not accidents. They are design decisions. Each collision between the base plugin and the extension follows one of three resolution patterns. This lesson covers the first: the **Wrapper**.

## Plugin Collision Is a Design Problem

When you installed `sales@knowledge-work-plugins` and `sales-revops-marketing@agentfactory-business` in Lesson 1, you created a dual-layer system. Both plugins contribute skills. Some skills are unique to one layer — the base has `audience-analysis`, the extension has `revops-pipeline`. No collision. But several skills exist in both layers:

| Skill               | Base Plugin Provides                                             | Extension Adds                                                            |
| ------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `campaign-planning` | Channel taxonomy, cost ranges, audience demographics per channel | ICP-filtered channels, budget in local currency, jurisdiction constraints |
| `content-creation`  | Content structure, tone options, format templates                | ICP messaging, Five Laws enforcement, regional language conventions       |
| `prospect-research` | Company overview, key personnel, financial signals, tech stack   | ICP match assessment, recommended approach, persona mapping               |

When you run `/plan-campaign`, the system must decide how to handle the collision between the base `campaign-planning` skill and the extension's version. Three patterns exist for resolving this:

| Pattern        | What Happens                                                                               | When It Is Used                                                     |
| -------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| **Wrapper**    | Both layers execute. The extension wraps the base output with additional context.          | Extension needs the base's output before it can add value           |
| **Override**   | The extension replaces the base entirely. The base does not execute.                       | Extension produces strictly better output and the base adds nothing |
| **Delegation** | The extension routes the request to the base for some sub-tasks and handles others itself. | Each layer handles what it does best                                |

Lesson 11 covers all three patterns and teaches you to identify which pattern each skill uses. This lesson focuses on the Wrapper because it is the most common and the most instructive. Understanding the Wrapper teaches you how plugins compose — and where that composition can break.

## The Wrapper Pattern: Campaign Planning

The `campaign-planning` skill is a **Wrapper**. When you run `/plan-campaign`, both layers execute. The base runs first. The extension wraps the base output with your business context.

Here is what happens step by step:

### Step 1: The Base Layer Executes

The Anthropic `campaign-planning` skill receives your request and produces a campaign plan based on its general knowledge of marketing channels, audience targeting, and campaign structures.

Run this with the extension disabled to see the base output in isolation:

```
claude plugin disable sales-revops-marketing@agentfactory-business
```

```
/plan-campaign "Product launch campaign for a real-time data pipeline
platform targeting mid-market B2B SaaS companies in South Asia"
```

**Output (base only):**

```
CAMPAIGN PLAN — Product Launch
══════════════════════════════════════════════════════════════

RECOMMENDED CHANNELS:
─────────────────────────────────────────────────────────────
1. LinkedIn Ads (Sponsored Content + InMail)
   Audience: B2B decision-makers, technology sector
   Budget range: $3,000-$8,000/month
   Expected CPL: $45-$85
   Strengths: Professional targeting, company size filters,
   job title targeting

2. Google Ads (Search + Display)
   Audience: High-intent searches for "data pipeline" and
   related terms
   Budget range: $2,000-$6,000/month
   Expected CPL: $55-$120
   Strengths: Intent-based targeting, remarketing

3. Content Marketing (Blog + Webinars)
   Audience: Technical decision-makers researching solutions
   Budget range: $1,500-$4,000/month (production costs)
   Expected CPL: $25-$60 (organic over time)
   Strengths: Authority building, SEO compound returns

4. Industry Events (Virtual + In-Person)
   Audience: Conference attendees in SaaS/data space
   Budget range: $2,000-$10,000/event
   Expected CPL: $80-$200
   Strengths: Relationship building, brand visibility

CAMPAIGN TIMELINE: 12-week phased rollout
  Week 1-2:   Content production + landing page
  Week 3-6:   LinkedIn + Google Ads launch
  Week 7-10:  Webinar series (3 events)
  Week 11-12: Event sponsorship + retargeting

TOTAL ESTIMATED BUDGET: $8,500-$28,000/month
TARGET LEADS: 120-300 qualified leads over 12 weeks
══════════════════════════════════════════════════════════════
```

Read this carefully. The base output is competent. It identifies four reasonable channels. It provides budget ranges and expected cost-per-lead. It structures a 12-week timeline. For a generic campaign plan, this is useful.

But notice what it does not know: your budget is in PKR, not USD. Your primary market is Karachi, where WhatsApp Business outreach converts three times better than LinkedIn InMail. Your ICP filters out enterprises above 500 employees, which eliminates most of the audience that industry events attract. The base layer provides excellent channel taxonomy — which channels exist, what they cost, how they work. It does not know which channels work for your specific business.

### Step 2: The Extension Wraps the Base

Re-enable the extension and run the same command:

```
claude plugin enable sales-revops-marketing@agentfactory-business
```

```
/plan-campaign "Product launch campaign for a real-time data pipeline
platform targeting mid-market B2B SaaS companies in South Asia"
```

**Output (Wrapper — both layers):**

```
CAMPAIGN PLAN — Product Launch
══════════════════════════════════════════════════════════════

ICP FILTER APPLIED:
  Target: B2B SaaS, 50-500 employees, Pakistan/UAE/KSA
  Budget currency: PKR (converted from USD at current rate)
  Jurisdiction: Pakistan primary, Gulf secondary
─────────────────────────────────────────────────────────────

RECOMMENDED CHANNELS (ICP-FILTERED):
─────────────────────────────────────────────────────────────
1. WhatsApp Business Outreach
   Audience: CTOs and VP Engineering at ICP-matched companies
   Budget range: PKR 150,000-400,000/month ($540-$1,440)
   Expected CPL: PKR 2,500-5,000 ($9-$18)
   ICP rationale: South Asian B2B buyers respond 3.2x more
   to WhatsApp than email. Karachi and Lahore tech leaders
   check WhatsApp before LinkedIn.
   Base channel note: Not in Anthropic channel taxonomy.
   Extension-added based on regional data.

2. LinkedIn Ads (Sponsored Content + InMail)         ← FROM BASE
   Audience: B2B decision-makers, technology sector
   Budget range: PKR 830,000-2,200,000/month ($3,000-$8,000)
   Expected CPL: PKR 12,500-23,600 ($45-$85)
   ICP filter: Target companies 50-500 employees only.
   Exclude enterprise (500+) and micro (<50).
   Geo-target: Pakistan, UAE, Saudi Arabia.

3. Content Marketing (Urdu + English Bilingual)      ← MODIFIED
   Audience: Technical leaders researching solutions
   Budget range: PKR 415,000-1,100,000/month ($1,500-$4,000)
   Expected CPL: PKR 7,000-16,600 ($25-$60)
   ICP filter: Topics aligned to ICP pain points —
   "scaling data pipelines," "real-time fleet telemetry,"
   "PostgreSQL migration paths"

4. Pakistan Tech Events (P@SHA, PITB Roundtables)    ← REPLACED
   Audience: Mid-market tech leaders in Pakistan
   Budget range: PKR 200,000-500,000/event ($720-$1,800)
   Expected CPL: PKR 15,000-35,000 ($54-$126)
   ICP filter: Replaced generic "industry events" with
   Pakistan-specific tech community events where ICP
   prospects actually attend.

CHANNELS REMOVED BY ICP FILTER:
  • Google Ads (Search) — removed because South Asian B2B
    SaaS buyers rarely discover infrastructure products
    through search ads. Low intent signal for this market.

CAMPAIGN TIMELINE: 12-week phased rollout (adapted)
  Week 1-2:   Bilingual content production + landing page
  Week 3-4:   WhatsApp outreach to top 50 ICP prospects
  Week 5-8:   LinkedIn Ads launch (ICP-filtered audiences)
  Week 9-10:  Webinar series (English + Urdu sessions)
  Week 11-12: P@SHA event sponsorship + retargeting

TOTAL ESTIMATED BUDGET:
  PKR 1,595,000-4,200,000/month ($5,760-$15,240)
  vs base estimate: $8,500-$28,000 (46% more efficient)

TARGET LEADS: 150-350 ICP-qualified leads over 12 weeks
  (higher than base estimate due to WhatsApp channel addition
   and ICP-filtered audience targeting)

WRAPPER DATA FLOW:
  Base → Channel taxonomy, cost benchmarks, timeline structure
  Extension → ICP filtering, currency conversion, regional
  channels, jurisdiction-specific events
══════════════════════════════════════════════════════════════
```

Compare the two outputs side by side. The Wrapper preserves the base's channel taxonomy — LinkedIn Ads and Content Marketing survived, with modifications. It adds what the base cannot provide: WhatsApp Business (a channel the Anthropic taxonomy does not include), PKR budgets, Pakistan-specific events, and ICP-filtered audience targeting. It removes what the ICP disqualifies: Google Ads for this specific market.

The last section — `WRAPPER DATA FLOW` — is the extension making its composition pattern explicit. This is the design reasoning:

**Base layer contributes:** Channel taxonomy (which channels exist globally), cost benchmarks (typical CPL ranges), and timeline structure (how to phase a campaign).

**Extension layer contributes:** ICP filtering (which channels work for your prospects), currency conversion (PKR, not USD), regional channels (WhatsApp for South Asia), and jurisdiction-specific events (P@SHA instead of generic "industry events").

### Why Wrapper, Not Override?

The extension genuinely needs the base's channel taxonomy. Rebuilding knowledge of LinkedIn Ads targeting, content marketing CPL benchmarks, and campaign timeline structures inside the extension would be redundant. The base already has that knowledge and maintains it. The extension adds what it knows — your business context — on top of what the base knows — global marketing channel intelligence.

Could the base produce this output with better prompting? No. The base has no access to your `sales-marketing.local.md` file. It cannot read your ICP configuration. It does not know that WhatsApp converts 3.2x better than email in Karachi. The extension provides structured business data that prompting alone cannot supply.

Could the extension run alone without the base? Partially. It knows your ICP and your market. But it would need to rebuild every channel's cost benchmark, targeting capability, and timeline structure from scratch. That is fragile — the base plugin's marketing team maintains those benchmarks. Duplicating that maintenance inside the extension creates drift.

The Wrapper is the right pattern when the extension needs the base's output as an input to its own processing. Remove the base and the extension loses its foundation. Remove the extension and the base produces generic output. Both layers contribute. Neither is redundant.

:::info Dual Campaign Commands
When both plugins are installed, you have two campaign-planning commands:
`/plan-campaign` (extension) and `/campaign-plan` (Anthropic Marketing).
Both trigger the same `campaign-planning` Wrapper — the resolution pattern
applies regardless of which command name you type. The extension routes
both to the Wrapper pipeline.
:::

## The Same Pattern in Content Creation

The `content-creation` skill follows the same Wrapper pattern. When you ask the agent to write a blog post or a case study, the base provides:

- Content structure (introduction, body, conclusion)
- Tone options (professional, conversational, technical)
- Format templates (blog post, whitepaper, email, social post)

The extension wraps this with:

- ICP messaging (pain points your audience cares about)
- Five Laws enforcement (the same laws from Lesson 4 applied to marketing content)
- Regional language conventions (Urdu-English code-switching norms for Pakistani audiences)

Run a content creation request with the extension disabled, then enabled. The structural difference mirrors what you saw in campaign planning. The base provides competent content. The extension makes it specific to your market.

```
User: Write a 200-word LinkedIn post announcing our new real-time
data pipeline product for logistics companies in Pakistan.
```

**Base output** (extension disabled):

```
🚀 Exciting News! We're thrilled to announce our new real-time
data pipeline platform designed for logistics companies.

In today's fast-paced logistics landscape, real-time data is
no longer a luxury — it's a necessity. Our platform helps you:

✅ Process millions of events per second
✅ Scale seamlessly as your fleet grows
✅ Reduce data latency from hours to milliseconds

Whether you're managing last-mile delivery or cross-border
freight, our solution integrates with your existing tech stack
to deliver actionable insights in real time.

Ready to transform your logistics data infrastructure?
Let's connect! 👇

#logistics #datapipeline #realtimedata #SaaS
```

**Wrapped output** (extension enabled):

```
Pakistani logistics companies process 50,000+ deliveries daily
across 14 cities. The data behind those deliveries — GPS
telemetry, route efficiency, customs clearance timestamps —
hits a wall when your PostgreSQL database cannot keep up.

We built a real-time data pipeline for this problem. Three
results from our first deployment with a Karachi-based fleet
operator:

→ Telemetry processing: 72 hours → 4 seconds
→ Route recalculation: daily batch → real-time
→ Customs data sync across PK, UAE, KSA: manual → automatic

If your data team is hiring Kafka engineers (we have seen 12
postings from PK logistics companies this quarter), the
scaling problem is real. The infrastructure should not be.

DM to see the architecture.

143 words | No banned jargon | One CTA
```

The base output uses emoji, generic claims ("millions of events per second"), and two calls to action (connect and a hashtag engagement play). The Wrapped output leads with a specific verifiable reference (50,000+ deliveries, 14 cities), uses regional data (PK logistics job postings), and ends with one ask. The Five Laws from Lesson 4 are enforced automatically — the extension runs the same audit you learned to do manually.

## Progressive Connectors: The Enhancement Ladder

In Lesson 2, you previewed progressive connectors when you added `~~CRM` and `~~enrichment` to your `/research-prospect` output. Now you see the full pattern and understand the design principle behind it.

**Progressive connectors** are optional data sources that enhance command output without being required for the command to work. Every command in the Revenue Engine works standalone. Each connector you add makes the output richer. Remove a connector and the output degrades gracefully — it loses the data that connector provided, but the command still runs.

### The Three Levels

Run `/research-prospect` at each connector level for Meridian Logistics to see the progression:

**Level 0 — Zero Connectors (Web Intelligence Only):**

```
/research-prospect Meridian Logistics London
```

```
RESEARCH BRIEF — Meridian Logistics
─────────────────────────────────────────────────────────────
Company Overview:    Freight & logistics, London, ~320 employees
Key Personnel:       CEO James Chen, CTO Sarah Chen
Financial Signals:   Series B, ~$28M (Crunchbase estimate)
Tech Stack:          Java (Spring Boot), React, MongoDB, Azure
Pain Points:         Supply chain visibility, cross-border
                     compliance, fleet management scaling
Engagement:          [NO DATA — no connectors active]

ICP Match:           LOW-MODERATE (2.5/5)
  Industry mismatch (logistics ≠ SaaS) offset by
  "Supply Chain Technology" sub-industry adjacency

Recommendation:      MONITOR — timing signals are strong
                     but industry fit is weak
─────────────────────────────────────────────────────────────
```

Useful. You have a company overview, key personnel, financial signals, and an ICP match assessment. The Engagement section shows `[NO DATA]` because the agent has no access to your internal systems. The ICP assessment works because it draws from public data and your ICP configuration — no connector required.

**Level 1 — Add `~~CRM` (HubSpot):**

```
/research-prospect Meridian Logistics London ~~CRM
```

```
RESEARCH BRIEF — Meridian Logistics
─────────────────────────────────────────────────────────────
[Company Overview, Key Personnel, Financial Signals, Tech
 Stack, Pain Points — same as Level 0]

Engagement:          MODERATE (3/5)                    ← NEW
  CRM Record:        Contact created 4 months ago
  Last Activity:     Downloaded "Automation ROI Guide"
                     2 weeks ago
  Deal Stage:        Marketing Qualified Lead (MQL)
  Lead Source:       Organic → pricing page → guide
  Contact History:   3 touchpoints over 4 months
                     (newsletter, webinar, guide download)

ICP Match:           LOW-MODERATE (2.5/5)    [unchanged]

Timing + Engagement: ELEVATED
  Series B (28 days ago) + pricing page visit +
  guide download = active evaluation phase

Recommendation:      EXPLORE — engagement pattern suggests
                     active evaluation despite industry
                     mismatch. Worth a consultative
                     conversation to assess real fit.
─────────────────────────────────────────────────────────────
```

The CRM connector filled the Engagement section. The same company, the same public data, but now you see that Meridian has been in your system for four months and recently downloaded a buying-intent asset. The recommendation upgraded from MONITOR to EXPLORE — the engagement pattern changed the calculus.

Notice what did not change: the ICP Match score stayed at LOW-MODERATE. The CRM connector added engagement data. It did not change the firmographic assessment. Each connector adds its own dimension. No connector changes dimensions it does not own.

**Level 2 — Add `~~enrichment` (Clearbit):**

```
/research-prospect Meridian Logistics London ~~CRM ~~enrichment
```

```
RESEARCH BRIEF — Meridian Logistics
─────────────────────────────────────────────────────────────
[Company Overview — ENRICHED]
  Employees:         287 (verified)            ← was "~320"
  Revenue:           $31.2M (verified)         ← was estimate
  Sub-Industry:      Supply Chain Technology   ← NEW
  Tech Stack:        + Kafka (detected)        ← NEW
  Funding:           Series B, $28.4M,
                     Balderton Capital          ← VERIFIED

[Key Personnel — same as Level 0]

[Engagement — same as Level 1]

ICP Match:           MODERATE (3/5)            ← UPGRADED
  Sub-industry "Supply Chain Technology"
  is adjacent to ICP. Kafka detected in tech
  stack matches technographic positive signal.
  Employee count verified within ICP range.

Recommendation:      PURSUE CONSULTATIVE —
  Verified data improves confidence. Sub-industry
  is closer to ICP than parent industry suggests.
  Engagement + timing + improved fit = worth
  scheduling a discovery call.
─────────────────────────────────────────────────────────────
```

The enrichment connector verified data that was previously estimated, detected a technology signal (Kafka) that the web search missed, and revealed a sub-industry classification that improved the ICP match. The recommendation upgraded again — from EXPLORE to PURSUE CONSULTATIVE.

### The Design Principle

Each connector adds one dimension of data quality:

| Connector      | What It Adds                                               | What It Does Not Change                       |
| -------------- | ---------------------------------------------------------- | --------------------------------------------- |
| None           | Web intelligence, ICP match                                | Everything uses public estimates              |
| `~~CRM`        | Engagement history, deal stage, contact timeline           | Firmographic data, tech stack                 |
| `~~enrichment` | Verified employee count, revenue, tech stack, sub-industry | Engagement history (that is the CRM's domain) |

Remove the enrichment connector. The output drops back to Level 1 — you lose verified data and sub-industry classification but retain engagement history. Remove the CRM connector. The output drops back to Level 0 — you lose engagement data but retain the ICP match from public sources.

This is **graceful degradation**. The system never breaks when a connector is absent. It produces the best output it can with the data sources available. A solo founder with no CRM and no enrichment tool can still run every command. A scaled team with HubSpot and Clearbit gets richer output from the same commands.

The architecture assumes you start with nothing and build up. Not the other way around.

## Failure Analysis: The Wrapper Boundary

The Wrapper pattern works well when both layers agree. The base says "LinkedIn Ads are a strong channel for B2B." The extension says "LinkedIn Ads are strong for your ICP, with these filters." Agreement. The wrapped output is better than either layer alone.

But what happens when the two layers contradict each other?

### The Karachi Campaign Conflict

Farhan at NexaFlow runs `/plan-campaign` for an account-based marketing push targeting logistics CTOs in Karachi:

```
/plan-campaign "ABM campaign targeting 15 logistics CTOs in Karachi
for our route-optimisation consulting service"
```

The Wrapper produces output where the base and extension disagree:

```
CHANNEL CONFLICT DETECTED
─────────────────────────────────────────────────────────────

BASE RECOMMENDATION:
  Primary channel: LinkedIn Ads (Sponsored InMail)
  Reasoning: "LinkedIn InMail has 52% open rates for
  C-suite targeting in the technology sector. For a
  15-account ABM campaign, InMail provides the most
  precise targeting with verifiable delivery."

EXTENSION RECOMMENDATION:
  Primary channel: WhatsApp Business
  Reasoning: "ICP data indicates Karachi B2B decision-
  makers check WhatsApp 4.7x more frequently than
  LinkedIn. For a 15-person ABM list, direct WhatsApp
  outreach to known contacts converts at 3.2x the rate
  of LinkedIn InMail in the Pakistan market."

CONFLICT TYPE: Wrapper Boundary
  Both channels are valid. The base draws on global B2B
  benchmarks. The extension draws on regional ICP data.
  Neither is wrong in its domain.

RESOLUTION PROMPT:
  "Which data source do you trust more for this specific
  campaign — global B2B benchmarks or your regional
  market experience? You can also run both channels as
  an A/B test for 15 accounts."
─────────────────────────────────────────────────────────────
```

This is the **Wrapper boundary** — the point where both layers have valid but conflicting perspectives because they draw on different data domains.

The base layer knows global marketing benchmarks. LinkedIn InMail does have strong open rates for C-suite targeting across the technology sector worldwide. That data is accurate.

The extension knows your regional market. WhatsApp Business is the dominant B2B communication channel in Karachi. Logistics executives in Pakistan check WhatsApp more than any other platform. That data is also accurate.

Both are right. In their domain.

### How to Resolve Wrapper Boundary Conflicts

When the Wrapper surfaces a conflict, you make the call. Three resolution strategies:

**Strategy 1: Trust the layer closest to the decision context.**
If you are running a Karachi-specific campaign, the extension's regional data is closer to your context than the base's global benchmarks. Trust the extension. For a campaign targeting London logistics CTOs, you might trust the base.

**Strategy 2: Run both and measure.**
With only 15 accounts, split them: 8 on WhatsApp, 7 on LinkedIn InMail. Measure open rates, response rates, and meetings booked. Let the data resolve the conflict. This is the most rigorous approach when you have time.

**Strategy 3: Use your domain knowledge as the tiebreaker.**
You know Karachi. You know your prospects. If your experience says WhatsApp, go with WhatsApp — regardless of what global benchmarks suggest. The Wrapper surfaced the conflict. The human resolves it.

:::tip Wrapper Boundaries Are Valuable
A Wrapper conflict is not a failure. It is the system telling you that two data sources disagree and you need to decide. A system that silently picks one recommendation without surfacing the conflict is hiding information. The Revenue Engine makes conflicts visible because your judgment is more reliable than any automatic resolution rule.
:::

### A Second Conflict: Content Tone

The Wrapper boundary also surfaces in `content-creation`. The base recommends a professional, formal tone for B2B content. The extension recommends a conversational, direct tone because your ICP persona profiles indicate that Pakistani CTOs respond better to plain language than corporate formality.

Neither is wrong. The base reflects global B2B content norms. The extension reflects your market's communication culture. If you are writing for a Pakistani audience, trust the extension. If you are writing for a London-based prospect, the base's tone guidance may be more appropriate.

The pattern holds: when layers conflict, trust the layer closest to the audience.

## Hands-On: Build Your Connector Impact Map

Now you apply everything from this lesson. You will disable the extension, run three commands, note what is missing, re-enable, compare, and build a map of how each connector and extension layer changes your output.

### Step 1: Disable the Extension

```
claude plugin disable sales-revops-marketing@agentfactory-business
```

### Step 2: Run Three Commands (Base Only)

Run each command and save the output:

**Command 1: Campaign Planning**

```
/plan-campaign "[Your product] launch campaign targeting
[your ICP description] in [your primary market]"
```

Note: Which channels does the base recommend? What budget currency? What audience filters?

**Command 2: Content Creation**

```
Write a 200-word LinkedIn post announcing [your product]
for [your target industry] in [your geography].
```

Note: Does the base use Five Laws? Does it reference your ICP pain points? What tone does it use?

**Command 3: Prospect Research**

```
/research-prospect [a company you know well] [city]
```

Note: Is there an ICP match section? A recommended approach? Persona mapping?

### Step 3: Re-Enable and Compare

```
claude plugin enable sales-revops-marketing@agentfactory-business
```

Run all three commands again with the same inputs. For each command, document:

| Command              | Base Output | Wrapped Output | What the Extension Added |
| -------------------- | ----------- | -------------- | ------------------------ |
| `/plan-campaign`     |             |                |                          |
| Content creation     |             |                |                          |
| `/research-prospect` |             |                |                          |

### Step 4: Add Connectors Progressively

If you have a CRM and enrichment tool configured, run `/research-prospect` at each connector level:

| Level   | Command                                                  | New Data Gained |
| ------- | -------------------------------------------------------- | --------------- |
| Level 0 | `/research-prospect [company] [city]`                    |                 |
| Level 1 | `/research-prospect [company] [city] ~~CRM`              |                 |
| Level 2 | `/research-prospect [company] [city] ~~CRM ~~enrichment` |                 |

If you do not have connectors configured, use the NexaFlow or Meridian examples from earlier in this lesson as your reference. The principle is the same.

### Step 5: Build Your Connector Impact Map

Create a table mapping which connectors improve which commands:

| Command              | No Connector | +CRM Impact | +Enrichment Impact |
| -------------------- | ------------ | ----------- | ------------------ |
| `/research-prospect` |              |             |                    |
| `/score-lead`        |              |             |                    |
| `/plan-campaign`     |              |             |                    |
| `/build-sequence`    |              |             |                    |

For each cell, rate the impact: **None** (no change), **Moderate** (adds useful data), or **Significant** (changes the recommendation or classification).

This map becomes your reference for deciding which connectors to invest in first. If the CRM connector improves four commands significantly and the enrichment connector improves two, start with the CRM.

## Design Reasoning: Why This Architecture

Step back and consider the three architectural decisions in this lesson:

**Decision 1: Wrapper, not Override, for campaign-planning.** The extension needs the base's channel taxonomy. Duplicating that knowledge inside the extension would create maintenance burden and drift. The Wrapper lets each layer contribute what it does best.

**Decision 2: Progressive connectors, not required integrations.** Every command works standalone. Connectors make commands better, not possible. This means a founder on day one can use the system. A scaled team on day three hundred gets richer output from the same commands.

**Decision 3: Surface conflicts, do not resolve them automatically.** When the Wrapper boundary produces contradictory recommendations, the system shows you both perspectives and asks you to decide. This respects your domain knowledge instead of hiding disagreements behind an algorithm.

These three decisions reflect a single principle: **plugins should compose, not depend**. The base works alone. The extension works with the base. Connectors enhance both. Each layer adds value without requiring any other layer to function.

In Lesson 11, you will see the other two collision patterns — Override and Delegation — and learn to identify which pattern each of the 20 skills in the extension uses. You will also study the `sales-marketing-global-router`, which decides at runtime whether a given command should Wrap, Override, or Delegate.

## Try With AI

Use these prompts in Claude or your preferred AI assistant.

### Prompt 1: Diagram the Wrapper Data Flow

```
I am learning about the Wrapper pattern in plugin composition.

In the Wrapper pattern, a base plugin and an extension both
execute for the same command. The base produces output first.
The extension wraps that output with additional context.

Using the campaign-planning skill as an example:
- Base provides: channel taxonomy, cost benchmarks, timeline
- Extension adds: ICP filtering, local currency, regional
  channels, jurisdiction-specific events

Draw me an ASCII diagram showing:
1. The input (user command)
2. The base layer processing
3. The base output
4. The extension wrapping step
5. The final combined output
6. Where a Wrapper boundary conflict would occur

Then explain: what breaks if I remove the base layer? What
breaks if I remove the extension layer? Why is this different
from Override (where only one layer runs)?
```

**What you are learning:** Diagramming the data flow builds a mental model of how composed systems work. By identifying what breaks when each layer is removed, you understand the dependency relationship. This architecture pattern — where two components contribute different expertise to a combined output — appears far beyond sales plugins. API gateways, middleware stacks, and microservice meshes all use composition patterns. Learning to reason about which component contributes what makes you a better systems thinker.

### Prompt 2: Design a Connector Impact Analysis

```
I have a sales plugin system with these commands:
- /research-prospect (company intelligence)
- /score-lead (three-dimension scoring)
- /plan-campaign (campaign planning)
- /build-sequence (outreach sequencing)

And these optional connectors:
- ~~CRM (HubSpot — deal stage, contact history, engagement)
- ~~enrichment (Clearbit — verified firmographics, tech stack)

For each command, help me reason through:
1. What data does this command need?
2. Which connector provides that data?
3. What is the output quality at Level 0 (no connectors),
   Level 1 (+CRM), and Level 2 (+CRM +enrichment)?
4. Which command benefits MOST from each connector?

Then recommend: if I can only set up one connector first,
which one gives me the biggest improvement across all four
commands? Show your reasoning.
```

**What you are learning:** Connector impact analysis is a resource allocation skill. When you have limited integration budget, you need to know which connection gives you the most value across the most commands. By reasoning through each command's data needs and mapping them to connector capabilities, you develop the habit of evaluating tools by their system-wide impact — not by their individual feature set.
