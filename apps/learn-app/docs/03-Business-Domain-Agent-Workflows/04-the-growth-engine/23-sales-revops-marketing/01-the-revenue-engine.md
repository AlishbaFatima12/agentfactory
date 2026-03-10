---
sidebar_position: 1
title: "The Revenue Engine"
description: "Install the Anthropic and extension sales-marketing plugins, run your first /research-prospect command, learn to detect hallucinated data in agent output, and configure sales-marketing.local.md for your business"
keywords:
  [
    "sales AI",
    "RevOps",
    "revenue operations",
    "plugin installation",
    "research-prospect",
    "hallucinated data",
    "ICP",
    "sales-marketing.local.md",
    "Claude Sales Plugin",
    "Cowork plugin",
    "prospect research",
    "AI sales agent",
  ]
chapter: 23
lesson: 1
duration_minutes: 20

# HIDDEN SKILLS METADATA
skills:
  - name: "Install and Verify Sales and Marketing Plugins"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can install both plugin layers (Anthropic + extension), verify installation by running /research-prospect, and troubleshoot common installation issues"

  - name: "Detect Hallucinated Data in Agent Research Output"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can read a research brief, identify at least 2 claims that cannot be verified from public sources, and classify them as hallucinated vs verifiable"

  - name: "Configure sales-marketing.local.md for a Specific Business"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can create a minimum viable local configuration and observe how it changes agent output focus"

learning_objectives:
  - objective: "Install the Anthropic Sales and Marketing Plugins alongside the Agent Factory extension and verify correct dual-layer installation"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student can demonstrate successful installation and produce structured output from /research-prospect"

  - objective: "Identify hallucinated data in a prospect research brief by distinguishing verifiable claims from fabricated ones"
    proficiency_level: "A2"
    bloom_level: "Analyze"
    assessment_method: "Given a research brief, student can flag at least 2 unverifiable claims and explain why they cannot be trusted without external verification"

  - objective: "Configure sales-marketing.local.md with business-specific ICP data and observe how configuration changes agent output"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces a configuration file and can compare agent output before and after configuration"

cognitive_load:
  new_concepts: 7
  concepts_list:
    - "Revenue Engine as the unified sales-marketing system"
    - "Dual-plugin architecture (Anthropic base + Agent Factory extension)"
    - "Prospect research brief as structured intelligence output"
    - "Hallucinated Data as an agent error type"
    - "sales-marketing.local.md as the business configuration file"
    - "ICP (Ideal Customer Profile) as targeting foundation"
    - "Plugin verification through structured output headers"
  assessment: "7 concepts at mixed A2-B1 level. Installation is procedural, hallucination detection requires analytical thinking. Concepts build sequentially — install before run, run before evaluate."

differentiation:
  extension_for_advanced: "Run /research-prospect on 3 prospects in different industries. Compare the types of hallucinated data across industries — does the agent fabricate more in data-scarce sectors? Document the pattern."
  remedial_for_struggling: "Focus on installation and running one /research-prospect command. If you can verify the output contains structured headers and identify one claim you cannot verify, you have the foundation for L02."
---

# The Revenue Engine

Your best rep closes three times more than the team average. Not twice — three times. Watch her work and you will not find charisma or aggression. You will find preparation. She walks into every meeting knowing the prospect's technology stack, last two funding rounds, recent executive hires, and the initiative their VP of Engineering mentioned at a conference six weeks ago. She personalises the opening line. She references the pain point before the prospect raises it. She times the follow-up to a buying signal the prospect did not realise they had broadcast.

The problem is not talent. The problem is throughput. That level of preparation takes 30 to 45 minutes per prospect. Your best rep handles 15 key accounts. You have 500 in the pipeline. The maths breaks immediately: 500 accounts at 30 minutes each is 250 hours of research per cycle. Your team has maybe 40 hours of combined research capacity per week. So 460 accounts get the generic pitch. The generic pitch converts at one-third the rate. You are leaving revenue on the table — not because your team lacks skill, but because deep preparation does not scale with headcount alone.

This chapter builds the system that scales that preparation. The **Revenue Engine** is a coordinated set of Claude plugins — Anthropic's base sales and marketing plugins plus the Agent Factory extension — that encodes the research depth, personalisation quality, and timing precision of your best closer into a repeatable, configurable system. By the end of this lesson you will have it installed, you will have run your first prospect research command, and you will have learned the single most important skill in working with AI sales tools: detecting when the agent is making things up.

## Installing the Plugins

The Revenue Engine uses a **dual-plugin architecture**. The first layer is Anthropic's own sales and marketing plugins — open-source tools that ship with Claude and handle prospect research, lead scoring, campaign planning, and outreach sequencing. The second layer is the Agent Factory extension, which adds business-specific configuration, skill collision resolution, and the local configuration file that tailors every command to your market, your ICP, and your sales methodology.

You need both layers. The Anthropic plugins provide the base commands. The Agent Factory extension provides the configuration that makes those commands useful for your specific business.

### Step 1: Install the Anthropic Base Plugins

Open Claude Code and run these two installation commands:

```
claude plugin install sales@knowledge-work-plugins
```

**Output:**

```
Installed plugin: sales@knowledge-work-plugins (v1.2.0)
  Commands: /research-prospect, /score-lead, /plan-campaign, /build-sequence
  Skills: prospect-research, lead-scoring, outreach, campaign-planning
```

```
claude plugin install marketing@knowledge-work-plugins
```

**Output:**

```
Installed plugin: marketing@knowledge-work-plugins (v1.1.0)
  Commands: /plan-campaign (extended), content-calendar, audience-segment
  Skills: content-strategy, audience-analysis, campaign-optimization
```

Two things to notice. First, both plugins contribute to the `/plan-campaign` command — sales provides campaign structure, marketing provides content and audience targeting. Second, the sales plugin alone gives you the four slash commands you will use most in this chapter: `/research-prospect`, `/score-lead`, `/plan-campaign`, and `/build-sequence`.

### Step 2: Install the Agent Factory Extension

```
claude plugin install sales-revops-marketing@agentfactory-business
```

**Output:**

```
Installed plugin: sales-revops-marketing@agentfactory-business (v1.0.0)
  Extension for: sales@knowledge-work-plugins, marketing@knowledge-work-plugins
  Added: sales-marketing.local.md template, ICP configuration, jurisdiction overlays
  Skills: revops-pipeline, market-localisation, icp-enrichment
```

The extension does not replace the base plugins. It extends them. When you run `/research-prospect` after installing the extension, the base `prospect-research` skill still executes — but now the extension's `icp-enrichment` skill also runs, filtering the research output through your **Ideal Customer Profile (ICP)** configuration. You will see the difference later in this lesson.

### Step 3: Verify the Installation

Run the following command to confirm everything is connected:

```
claude plugin list --verbose
```

**Output:**

```
Installed Plugins:
  1. sales@knowledge-work-plugins (v1.2.0)
     Commands: /research-prospect, /score-lead, /plan-campaign, /build-sequence
     Skills: 4 active

  2. marketing@knowledge-work-plugins (v1.1.0)
     Commands: /plan-campaign (extended), content-calendar, audience-segment
     Skills: 3 active

  3. sales-revops-marketing@agentfactory-business (v1.0.0)
     Extends: sales, marketing
     Skills: 3 active
     Local config: not found (create sales-marketing.local.md to activate)

Total: 3 plugins, 10 skills, 6 commands
```

Notice the last line under the extension: "Local config: not found." That is expected. You have not created `sales-marketing.local.md` yet. The plugins work without it — they just produce generic output. The local configuration file is what makes the output specific to your business. You will create it later in this lesson.

---

## Your First Prospect Research Brief

Time to run a real command. NexaFlow Technologies is a mid-size logistics-technology company based in Karachi. They build route-optimization software for last-mile delivery fleets in Pakistan and the Gulf states. Imagine you are a sales rep at a SaaS company selling data infrastructure, and NexaFlow is your prospect.

Run:

```
/research-prospect NexaFlow Technologies Karachi
```

The agent produces a **prospect research brief** — a structured intelligence document covering everything the agent can find and infer about the company. Here is the output, annotated:

```
══════════════════════════════════════════════════════════════
          PROSPECT RESEARCH BRIEF
          NexaFlow Technologies — Karachi, Pakistan
          Generated: 2026-03-10
══════════════════════════════════════════════════════════════

COMPANY OVERVIEW
─────────────────────────────────────────────────────────────
Founded:            2021
Headquarters:       Clifton, Karachi
Employees:          85-120 (estimated from LinkedIn)
Industry:           Logistics Technology / Last-Mile Delivery
Markets:            Pakistan, UAE, Saudi Arabia

SECP Registration:  Active — registered as private limited
                    company under Companies Act 2017
Website:            nexaflow.pk (active, last updated Feb 2026)

KEY PERSONNEL
─────────────────────────────────────────────────────────────
CEO:                Farhan Ahmed — prev. Head of Operations
                    at TCS (Pakistan), Stanford MBA 2018
CTO:                Mehreen Qazi — prev. Senior Engineer at
                    Careem (Dubai), MS CS LUMS 2016
VP Sales:           Bilal Hussain — joined Oct 2025, prev.
                    Regional Manager at Daraz

FINANCIAL SIGNALS
─────────────────────────────────────────────────────────────
Funding:            Series A closed Jun 2025, PKR 850M
                    (~$3M USD) led by Indus Valley Capital    ← ⚠️
Revenue:            Estimated ARR $2.3M based on fleet         ← ⚠️
                    contracts (Q3 2025)
Burn Rate:          Moderate — 14-month runway at current      ← ⚠️
                    spend levels

TECHNOLOGY STACK
─────────────────────────────────────────────────────────────
Primary:            Python, React Native, PostgreSQL
Infrastructure:     AWS (ap-south-1 Mumbai region)
Job postings:       2 openings for Kafka engineers (posted
                    Jan 2026) — signals event-streaming
                    architecture investment

PAIN POINTS (INFERRED)
─────────────────────────────────────────────────────────────
1. Scaling data pipeline from 50K to 500K daily deliveries
   across three countries
2. Real-time fleet tracking generating 2TB+ daily telemetry
   that current PostgreSQL setup cannot handle at scale       ← ⚠️
3. Compliance with UAE TRA data residency requirements for
   Gulf operations

ENGAGEMENT SIGNALS
─────────────────────────────────────────────────────────────
• Farhan Ahmed liked 3 posts about data infrastructure
  on LinkedIn (Jan-Feb 2026)                                  ← ⚠️
• NexaFlow posted "Expanding our data team" on LinkedIn
  (Feb 12, 2026)
• Partnership with Daraz for last-mile integration             ← ⚠️
  announced January 2026

══════════════════════════════════════════════════════════════
```

That is a detailed, structured, professional-looking research brief. It has headers. It has specific names, dates, and numbers. It looks like the kind of intelligence report a senior BD analyst would produce after two hours of research.

And at least three items in it are fabricated.

---

## Detecting Hallucinated Data

**Hallucinated Data** is output that an AI agent presents as factual but that was never retrieved from any source — the agent generated it from statistical patterns in its training data rather than from verifiable information. Hallucinated data is the most dangerous error type in sales AI because it looks real, it is specific, and it is confident. A vague answer signals incompleteness on its face. A hallucinated answer looks complete and is wrong.

Look at the research brief again. The arrows (⚠️) mark six claims. Three are verifiable. Three are hallucinated. Your job as a sales professional using AI tools is to tell them apart — before you walk into a meeting and cite a number that does not exist.

### What Is Verifiable

| Claim | Why It Is Verifiable | How to Check |
|-------|---------------------|--------------|
| SECP Registration as private limited company | Public record — SECP maintains a searchable company registry | Search eservices.secp.gov.pk |
| LinkedIn job postings for Kafka engineers | Publicly visible on LinkedIn | Search LinkedIn Jobs for "NexaFlow" |
| "Expanding our data team" LinkedIn post | Publicly visible company post | Visit NexaFlow's LinkedIn page |

These claims reference public, searchable information. A rep can verify each one in under two minutes. Verified claims become conversation openers: "I noticed you are hiring Kafka engineers — are you rebuilding your event pipeline?"

### What Is Hallucinated

| Claim | Why It Is Hallucinated | The Tell |
|-------|----------------------|----------|
| "Series A closed Jun 2025, PKR 850M (~$3M USD) led by Indus Valley Capital" | Pakistani startups rarely announce funding rounds publicly with exact figures. Crunchbase and i2i coverage of Pakistani rounds is incomplete. The agent generated a plausible-sounding round. | **Specificity without source.** The more precise an unverifiable financial claim, the more likely it is fabricated. |
| "Estimated ARR $2.3M based on fleet contracts (Q3 2025)" | Private companies in Pakistan do not publish ARR figures. There is no public data source for this number. The agent inferred it from company size and industry benchmarks. | **Private metric stated as fact.** ARR for private companies is never public unless disclosed in a press release or funding announcement. |
| "Burn rate: 14-month runway at current spend levels" | This requires access to the company's bank account and cash flow statements. No public source exists. | **Financial internals presented as intelligence.** Runway and burn rate are internal metrics that only investors and management know. |
| "2TB+ daily telemetry that current PostgreSQL setup cannot handle at scale" | The agent inferred database scalability problems from the job postings and industry patterns. The specific 2TB figure is generated, not sourced. | **Quantified technical claims from inference.** The Kafka job postings are real; the 2TB figure is the agent's extrapolation. |
| "Farhan Ahmed liked 3 posts about data infrastructure on LinkedIn" | LinkedIn activity of specific individuals may not be publicly visible depending on privacy settings. The agent may have generated plausible engagement patterns. | **Individual social media behaviour presented as observed.** Unless confirmed, treat specific engagement counts as unreliable. |
| "Partnership with Daraz for last-mile integration announced January 2026" | No verifiable press release or announcement exists for this partnership. The agent connected two companies operating in the same space and generated a plausible partnership. | **Business relationships without source.** If you cannot find the announcement with a web search, the partnership may not exist. |

### The Three Rules of Hallucination Detection

These three rules will catch most hallucinated data in prospect research briefs:

**Rule 1: Private financials are always suspect.** Revenue, ARR, burn rate, runway, unit economics — if the company has not publicly disclosed the number, the agent fabricated it. This includes funding round details for companies that have not issued press releases.

**Rule 2: The more specific the unverifiable claim, the more likely it is hallucinated.** "$2.3M ARR" is more suspicious than "growing revenue." "PKR 850M Series A" is more suspicious than "recently funded." Agents generate specific numbers because specificity sounds authoritative. Specificity without a source is a red flag.

**Rule 3: Inferred connections are not confirmed connections.** "Partnership with Daraz" sounds like a fact. It is an inference. The agent noticed both companies operate in Pakistani last-mile logistics and generated a plausible relationship. Treat any business relationship, partnership, or integration claim as unverified until you find the announcement.

:::warning Hallucinated Data in Sales Conversations
Walking into a meeting and saying "I understand your Series A was led by Indus Valley Capital" when the funding round never happened — or happened with a different investor — destroys your credibility instantly. The prospect concludes you fabricate research. Every accurate insight you share afterward is tainted.

**The rule is straightforward: verify every claim you plan to say out loud. If you cannot verify it, do not say it.**
:::

---

## The Configuration Effect

The research brief you just generated used the base plugins with no configuration. Now create the local configuration file and see what changes.

### Creating sales-marketing.local.md

The **`sales-marketing.local.md`** file is the business configuration that tells the Revenue Engine who you are, what you sell, and who you sell to. Without this file, the plugins produce generic research. With it, every command filters its output through your **Ideal Customer Profile** — the description of the customer most likely to buy from you and succeed with your product.

An **Ideal Customer Profile (ICP)** is the equivalent of hiring criteria for customers. Just as you would not hire every applicant regardless of fit, you should not pursue every prospect regardless of match. Your ICP defines the company size, industry, technology stack, budget range, and pain points that make a prospect worth your sales team's time. The ICP is the foundation of every command in the Revenue Engine — it determines what the agent looks for, what it highlights, and what it deprioritises.

Create the file in your project root:

```markdown
# Sales & Marketing Local Configuration

## Company Profile
- **Company:** Apex Data Systems
- **Product:** Real-time data pipeline platform (managed Kafka + analytics)
- **Market:** B2B SaaS, mid-market and enterprise
- **Geography:** Pakistan, UAE, Saudi Arabia, UK

## Ideal Customer Profile (ICP)
- **Company size:** 50-500 employees
- **Industry:** Logistics tech, fintech, e-commerce, SaaS
- **Technology signals:** PostgreSQL at scale, job postings for data engineers,
  event-streaming mentions, AWS or GCP infrastructure
- **Budget range:** $2,000-$15,000/month
- **Pain points:** Data pipeline bottlenecks, real-time processing needs,
  scaling beyond single-database architecture
- **Buying signals:** Kafka job postings, data team expansion, series A/B
  funding within last 12 months, infrastructure-related conference talks

## Sales Methodology
- **Approach:** Consultative — lead with diagnosis, not product features
- **Cycle length:** 45-90 days average for mid-market
- **Decision makers:** CTO, VP Engineering, Head of Data
- **Champions:** Senior engineers frustrated with current tooling
```

Save this as `sales-marketing.local.md` in your project root and run the same command again:

```
/research-prospect NexaFlow Technologies Karachi
```

### What Changes

The research brief now includes a new section at the top:

```
ICP MATCH ASSESSMENT
─────────────────────────────────────────────────────────────
Match Score:        82/100 — STRONG FIT
Company Size:       85-120 employees ✓ (within 50-500 range)
Industry:           Logistics Technology ✓ (primary ICP vertical)
Tech Signals:       PostgreSQL + Kafka hiring ✓✓ (2 of 3 signals)
Budget Indicator:   Series A funded, scaling phase — likely
                    within $5K-$10K/month range ✓
Geography:          Pakistan + Gulf ✓ (primary markets)

RECOMMENDED APPROACH
─────────────────────────────────────────────────────────────
Entry Point:        Data pipeline bottleneck (Pain Point #1)
Lead With:          Diagnosis of PostgreSQL scaling limits at
                    their delivery volume
Decision Maker:     Mehreen Qazi (CTO) — technical buyer
Champion:           Kafka engineers being hired — they will
                    understand the problem immediately
Avoid:              Generic data platform pitch — they need
                    specific logistics-telemetry solution
```

The ICP configuration added three things the generic brief lacked. First, a match score telling you whether this prospect is worth your time. Second, a recommended approach based on your sales methodology — consultative, leading with diagnosis. Third, specific tactical advice: which person to contact, what to lead with, and what to avoid.

This is the configuration effect. The same command, the same data, but filtered through your business context. The ICP makes every command in the Revenue Engine more relevant because the agent now knows what matters to you.

---

## Failure Analysis: Spot the Fabrications

Now apply what you have learned. Below is a research brief excerpt for a different prospect — Meridian Logistics, a supply-chain management firm in London. Read it and identify which claims need verification before you act on them.

```
FINANCIAL SIGNALS
─────────────────────────────────────────────────────────────
Revenue:            £18.2M annual revenue (FY2025)             [A]
Funding:            Series B, £12M led by Balderton Capital,
                    closed November 2025                       [B]
Growth:             42% YoY revenue growth per CEO interview
                    in Logistics Manager magazine, Sep 2025    [C]

TECHNOLOGY STACK
─────────────────────────────────────────────────────────────
Primary:            Java (Spring Boot), React, MongoDB
Infrastructure:     Azure UK South
Migration:          Currently migrating from batch ETL to
                    real-time streaming — 3 Kafka job
                    postings on Indeed (posted Feb 2026)       [D]

ENGAGEMENT SIGNALS
─────────────────────────────────────────────────────────────
• CTO Sarah Chen presented "Scaling Supply Chain Data
  Pipelines" at DataOps London, January 2026                  [E]
• Meridian signed a partnership with DHL for UK
  last-mile fulfilment, December 2025                         [F]
```

**Before reading further, decide: which claims would you verify before a sales meeting, and which would you treat as reliable?**

### Analysis

| Claim | Classification | Reasoning |
|-------|---------------|-----------|
| **[A]** £18.2M annual revenue | **Verify.** If Meridian is a private company, revenue figures are not public in the UK unless filed at Companies House (and only for companies above certain thresholds). Check Companies House for filed accounts. If no filing matches, this is hallucinated. |
| **[B]** Series B, £12M, Balderton Capital | **Verify.** UK funding rounds are often covered by TechCrunch, Sifted, or Crunchbase. Search for the announcement. If Balderton's portfolio page does not list Meridian, the round is fabricated. |
| **[C]** 42% YoY growth, CEO interview | **Highest confidence claim in this brief.** It cites a specific source — Logistics Manager magazine, September 2025. Search for the article. If it exists, the claim is verified. If the magazine exists but the article does not, this is a hallucinated source — the most sophisticated type of fabrication. |
| **[D]** 3 Kafka job postings on Indeed | **Verify (easy).** Search Indeed for "Meridian Logistics Kafka." Job postings are public and take 30 seconds to confirm. High confidence if found. |
| **[E]** CTO presented at DataOps London | **Verify.** Conference speaker lists are usually published online. Search for the event programme. If DataOps London does not exist as a conference, this is a hallucinated event. |
| **[F]** Partnership with DHL | **Verify.** Major logistics partnerships are typically announced via press release. Search for "Meridian Logistics DHL partnership." If no announcement exists, this is an inferred connection — two logistics companies operating in the UK market. |

Notice the pattern: Claim [C] is the most trustworthy because it names a specific, searchable source. Claims [A] and [B] involve private financial data. Claims [E] and [F] reference specific events or announcements that either exist or do not. Claim [D] is the easiest to verify.

**The verification hierarchy:** Cited sources > public records > public events > private financials > inferred relationships.

---

## Hands-On: Configure Your Revenue Engine

You have installed the plugins. You have seen what hallucinated data looks like. Now configure the system for your own business and test it against a prospect you already know.

### Exercise 1: Create Your ICP Configuration

Open a new file called `sales-marketing.local.md` and fill in the template with your own business data:

```markdown
# Sales & Marketing Local Configuration

## Company Profile
- **Company:** [Your company name]
- **Product:** [What you sell, in one line]
- **Market:** [B2B/B2C, segment]
- **Geography:** [Your primary markets]

## Ideal Customer Profile (ICP)
- **Company size:** [Employee range]
- **Industry:** [2-4 target verticals]
- **Technology signals:** [What tech stack indicates a good fit]
- **Budget range:** [Monthly or annual spend range]
- **Pain points:** [Top 3 problems your product solves]
- **Buying signals:** [What observable actions indicate readiness to buy]

## Sales Methodology
- **Approach:** [Consultative / Transactional / Enterprise]
- **Cycle length:** [Average days to close]
- **Decision makers:** [Titles of people who approve the purchase]
- **Champions:** [Titles of people who advocate internally]
```

If you do not have a current sales role, use a fictional company. The exercise works with any business context — the goal is to see how the ICP changes the agent's output.

### Exercise 2: Run Against a Known Prospect

Pick a company you already know well. A current customer, a recent prospect, or your own employer. Run:

```
/research-prospect [Company Name] [City]
```

Now compare the output to what you actually know about the company:

1. **What did the agent get right?** Mark each accurate claim.
2. **What did the agent fabricate?** Apply the three hallucination rules. Flag private financials, overly specific unverifiable claims, and inferred connections.
3. **What did the agent miss?** What do you know about this company that the agent did not surface? This gap tells you where the agent's research capability ends and your relationship intelligence begins.

Write down your findings. The ratio of accurate-to-hallucinated claims in your brief is your baseline. You will improve this ratio over the coming lessons as you refine the ICP and add custom skills.

---

## Observing the Extension Effect

One more experiment before you close this lesson. You are going to run the same prospect research twice — once with the extension active and once without — to see what the extension layer changes.

### With Extension Active (Current State)

You have already seen this output — the ICP Match Assessment section, the recommended approach, the tactical advice. Leave it open for comparison.

### With Extension Disabled

Run:

```
claude plugin disable sales-revops-marketing@agentfactory-business
```

```
/research-prospect NexaFlow Technologies Karachi
```

The output still works. You still get the research brief with company overview, key personnel, financial signals, and technology stack. But notice what is missing: no ICP Match Assessment, no Recommended Approach, no tactical advice. The base plugin gives you intelligence. The extension gives you actionable intelligence filtered through your business context.

Re-enable the extension:

```
claude plugin enable sales-revops-marketing@agentfactory-business
```

Notice the difference but do not try to explain it yet. Lessons 10 and 11 cover how the extension's skills interact with the base plugin's skills — including what happens when both define behaviour for the same command. For now, file the observation: the extension changes the output, and the local configuration file changes what the extension looks for.

---

## What You Built

In 20 minutes you installed a dual-layer plugin architecture, ran a prospect research command, learned to identify hallucinated data in agent output, configured the system with your business context, and observed how the extension layer changes the output. The three hallucination detection rules — private financials are suspect, specificity without sources is a red flag, inferred connections are not confirmed — will serve you in every lesson that follows.

Continue to [Lesson 2: Prospect Research and the ICP -->](./02-prospect-research-and-icp.md)
