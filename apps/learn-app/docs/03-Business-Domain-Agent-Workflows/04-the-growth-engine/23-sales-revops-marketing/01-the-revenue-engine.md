---
sidebar_position: 1
title: "The Revenue Engine"
description: "Install the Sales, Marketing, and RevOps extension plugins, generate demo business data for NexaFlow Technologies, run your first prospect research brief, and learn to detect hallucinated data in agent output"
keywords:
  [
    "sales AI",
    "RevOps",
    "revenue operations",
    "plugin installation",
    "prospect research",
    "hallucinated data",
    "ICP",
    "sales-marketing.local.md",
    "Claude Sales Plugin",
    "prospect intelligence",
    "AI sales agent",
    "NexaFlow Technologies",
  ]
chapter: 23
lesson: 1
duration_minutes: 25

# HIDDEN SKILLS METADATA
skills:
  - name: "Install and Verify Sales and Marketing Plugins"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can install all three plugin layers (Sales + Marketing + RevOps extension), verify installation by running a prospect research prompt, and confirm structured output with ICP MATCH header"

  - name: "Detect Hallucinated Data in Agent Research Output"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can read a prospect research brief, identify at least two claims that cannot be verified from public sources, and classify each as verifiable, plausible, or suspect"

  - name: "Configure sales-marketing.local.md for a Specific Business"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can create a skeleton local configuration with ICP data and observe how it changes agent output by comparing research briefs before and after configuration"

learning_objectives:
  - objective: "Install the Anthropic Sales and Marketing plugins alongside the Agent Factory RevOps extension and verify correct three-layer installation"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student demonstrates successful installation and produces a structured research brief with ICP MATCH header from the extension's prospect-research skill"

  - objective: "Identify hallucinated data in a prospect research brief by distinguishing verifiable claims from fabricated ones"
    proficiency_level: "A2"
    bloom_level: "Analyze"
    assessment_method: "Given a research brief, student flags at least two unverifiable claims and explains why they cannot be trusted without external verification"

  - objective: "Configure sales-marketing.local.md with business-specific ICP data and observe how configuration changes agent output"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces a skeleton configuration file and can compare agent output with and without configuration, noting the appearance of the ICP MATCH section"

cognitive_load:
  new_concepts: 7
  assessment: "7 concepts (Revenue Engine as unified system, three-plugin architecture, prospect research brief structure, Hallucinated Data as agent error type, ICP as targeting foundation, sales-marketing.local.md configuration, demo data generation) at upper limit of A2-B1 range. Installation is procedural, hallucination detection requires analytical thinking. Concepts build sequentially: install before run, run before evaluate, evaluate before configure."

differentiation:
  extension_for_advanced: "Run the prospect research prompt on three prospects from the generated dataset. Compare the types of hallucinated data across prospects in different countries. Document whether data-scarce markets produce more hallucinations than data-rich ones."
  remedial_for_struggling: "Focus on installation and running one research prompt. If you can identify the structured headers in the output and flag one claim you cannot verify, you have the foundation for Lesson 2."
---

# The Revenue Engine

Farah closes at 340% of quota. She is not your most charismatic rep and she is not your longest-tenured. She is your most prepared. Before every first contact she spends 45 minutes reading Companies House filings, scanning LinkedIn activity, cross-referencing recent hires against technology signals, and building a list of five questions she already knows the answers to. She never opens with a pitch. She opens with a question that demonstrates she has done the homework the prospect expected nobody to do.

Your other three reps spend four minutes on research. They open LinkedIn, skim the headline, check the company size, and send a template. They average 60% of quota. The gap between Farah and the rest of your team is not talent, charisma, or experience. The gap is preparation time -- 45 minutes versus 4 minutes, multiplied across every prospect, every week. The maths is brutal: 500 accounts at 45 minutes each is 375 hours of research per cycle. Your team has 40 hours of combined research capacity per week. So 460 accounts get the four-minute version.

This chapter gives every rep Farah's research depth in under four minutes. The **Revenue Engine** is a coordinated set of Claude plugins -- Anthropic's base Sales and Marketing plugins plus the Agent Factory extension -- that produces the same structured intelligence Farah builds by hand. By the end of this lesson you will have installed all three plugins, generated a demo business dataset, run your first prospect research brief, and learned the single most important skill in working with AI sales tools: detecting when the agent is making things up.

## Install All Three Plugins

Open Claude Code and run these three commands:

```
claude plugin install sales@knowledge-work-plugins
```

```
claude plugin install marketing@knowledge-work-plugins
```

```
claude plugin install sales-revops-marketing@agentfactory-business
```

**Output (after third install):**

```
Installed plugin: sales-revops-marketing@agentfactory-business (v1.0.0)
  Extension for: sales@knowledge-work-plugins, marketing@knowledge-work-plugins
  Added: sales-marketing.local.md template, ICP configuration, jurisdiction overlays
  Skills: 15 active (router, prospect-research, lead-scoring, crm-enrichment,
          outreach, sequence, pre-call-brief, follow-up, pipeline, content-creation,
          campaign-planning, copywriting, performance-analysis, content-calendar,
          persona-icp)
  Agents: 5 active
```

The Sales plugin provides six skills and three commands (`/call-summary`, `/forecast`, `/pipeline-review`). The Marketing plugin provides five skills and seven commands (`/draft-content`, `/campaign-plan`, `/brand-review`, `/competitive-brief`, `/performance-report`, `/seo-audit`, `/email-sequence`). The extension adds fifteen skills that enhance both base plugins with business-specific configuration.

Verify everything is connected:

```
Research Sarah Chen, VP Operations at Meridian Logistics, Leeds.
I sell workflow automation for logistics companies. I want to
understand fit, timing, and the best outreach angle.
```

If the extension is active, the output includes an **ICP MATCH** header at the top of the research brief. If you see only a plain research brief without the ICP section, re-run the installation command for the extension.

## Connect Your Tools (Optional)

The Revenue Engine works with prompt-provided context alone -- you describe the prospect, the agent researches. It becomes significantly more powerful when connected to your actual sales tools.

| Category     | Recommended             | What It Enables                                       |
| ------------ | ----------------------- | ----------------------------------------------------- |
| **CRM**      | HubSpot CRM (free tier) | Agent reads/writes your real pipeline from L04 onward |
| **Email**    | Gmail                   | Draft and review outreach sequences                   |
| **Calendar** | Google Calendar         | Pre-call brief timing and meeting prep                |
| **Optional** | Slack                   | Team alerts for pipeline changes                      |
| **Optional** | Notion                  | Knowledge base for competitive intelligence           |
| **Optional** | Apollo                  | Contact enrichment and signal monitoring              |

If you have a free HubSpot account, the agent works with your real CRM data from Lesson 4 onward. If you do not have any of these accounts, skip this section entirely. Both paths produce the same quality output -- with connectors the agent reads live data, without them you provide context in prompts.

## Generate Your Demo Business

NexaFlow Technologies is the company you will operate as throughout this chapter. It is a 38-person workflow automation startup in Karachi, selling to mid-market logistics companies across Pakistan, UAE, and the UK. Copy this prompt and run it in Claude Code:

```
Generate a complete demo dataset for a company called NexaFlow Technologies,
a workflow automation platform for mid-market logistics companies based in
Karachi, Pakistan (38 employees, PKR 180M revenue).

Generate the following:

1. CLOSED-WON DEALS (20 records)
   For each: company name, industry, employee count, revenue, location,
   buyer persona (name + title), trigger event, sales cycle length,
   primary pain, deal value, close date (last 18 months)
   Mix: 12 Pakistan, 5 UAE, 3 UK

2. TARGET PROSPECTS (5 records)
   For each: company name, location, employee count, revenue estimate,
   industry, key contact (name + title + background), recent news/signals,
   LinkedIn activity, tech stack signals
   Include: Meridian Logistics (Leeds, UK, Sarah Chen, VP Ops) as prospect #1
   Mix: 2 Pakistan, 1 UAE, 2 UK

3. CURRENT PIPELINE (10 deals)
   For each: company name, deal value, stage (Discovery/Demo/Proposal/
   Negotiation/Closed-Won), assigned rep, last activity date, close date
   target, notes
   Include: 3 at-risk (no activity >14 days), 2 likely to close this quarter

4. CAMPAIGN HISTORY (Q1 results)
   Channels: LinkedIn (organic + sponsored), email nurture, trade press
   For each: impressions, clicks, CTR, conversions, cost, leads generated,
   HOT leads, cost per lead

5. COMPETITOR INTELLIGENCE
   3 competitors: name, positioning, strengths, weaknesses, where they win,
   where NexaFlow wins

Format: structured markdown with clear headers.
```

**Output:** A structured dataset saved as `demo-data.md` containing 20 closed-won deals, 5 target prospects (with Meridian Logistics as prospect #1), 10 pipeline deals, Q1 campaign results, and competitor intelligence. Save this file -- every subsequent lesson references this data.

## Your First Research Brief

You are NexaFlow Technologies. Your top prospect is Meridian Logistics in Leeds. Sarah Chen is their VP Operations -- she was promoted six months ago, she recently won a major new contract, and she has been posting on LinkedIn about scaling operations without adding headcount.

Run:

```
Research Sarah Chen, VP Operations at Meridian Logistics, Leeds.
I sell workflow automation for logistics companies. I want to
understand fit, timing, and the best outreach angle.
```

**Expected output:**

```
══════════════════════════════════════════════════════════════
          PROSPECT RESEARCH BRIEF
          Meridian Logistics Ltd — Leeds, UK
          Generated: 2026-03-10
══════════════════════════════════════════════════════════════

ICP MATCH
─────────────────────────────────────────────────────────────
Match Score:       87/100 — STRONG FIT
Company Size:      380 employees ✓ (within 50-400 ICP range)
Industry:          Regional 3PL — warehousing + last-mile ✓
Pain Signal:       Scaling without headcount (LinkedIn posts) ✓✓
Timing Signal:     New contract win + VP promoted 6 months ago ✓

WHO
─────────────────────────────────────────────────────────────
Contact:           Sarah Chen, VP Operations
Tenure:            18 months at Meridian, promoted to VP 6 months ago
Background:        Previously Director of Logistics at Parcelhub
                   (3 years), Operations Manager at DPD (5 years)
LinkedIn:          Active — 3 posts in last month about operational
                   scaling and warehouse automation

WHAT
─────────────────────────────────────────────────────────────
Company:           Meridian Logistics Ltd
Founded:           2014
Headquarters:      Leeds, UK
Employees:         380
Revenue:           £45-60M (estimated)
Sector:            Regional 3PL — warehousing + last-mile delivery

WHEN
─────────────────────────────────────────────────────────────
Timing Score:      HIGH
Trigger Events:
  • New major contract win announced Feb 2026
  • VP Ops promoted 6 months ago (mandate to change)
  • 12 open positions on LinkedIn (scaling rapidly)
  • Posted about "doing more with same headcount" (3 weeks ago)

PAIN
─────────────────────────────────────────────────────────────
Primary:           Manual coordination across 380+ staff for
                   warehouse picking, fleet dispatch, last-mile
                   tracking — no unified workflow system
Secondary:         SLA compliance tracking done via spreadsheets;
                   missed SLA penalties increasing with volume
Tertiary:          Onboarding new warehouse staff takes 3 weeks;
                   scaling headcount is too slow for contract ramp

HOOK
─────────────────────────────────────────────────────────────
Opening Angle:     "I saw your post about scaling without adding
                   headcount. Our logistics clients typically
                   reduce coordination overhead by 40% within
                   the first quarter — I'd like to show you how
                   that maps to your warehouse-to-delivery flow."

Avoid:             Generic automation pitch. She has heard it.
                   Lead with her specific pain (SLA tracking at
                   scale) not your product features.

══════════════════════════════════════════════════════════════
```

Read the full output. It is structured, specific, and professional. It looks like something Farah would produce after 45 minutes of deep research.

And at least one claim in it cannot be verified.

## Hallucination Detection

Look at the revenue figure: **£45-60M (estimated)**. Can you verify this from a public source?

Try it. Go to Companies House (find-and-update.company-information.service.gov.uk) and search for "Meridian Logistics." UK companies file annual accounts, but most private companies of this size file abbreviated accounts that do not include revenue. The agent generated a plausible revenue range based on employee count, industry benchmarks, and location -- but it did not retrieve this number from any source. It is an inference presented as an estimate.

Some claims in the brief are verifiable. Some are not. The skill you need before every subsequent lesson is the ability to tell them apart before you act.

### Verifiable Claims

| Claim                                      | Why Verifiable                       | How to Check                                              |
| ------------------------------------------ | ------------------------------------ | --------------------------------------------------------- |
| Company registration (Founded 2014, Leeds) | Public record at Companies House     | Search find-and-update.company-information.service.gov.uk |
| Open positions on LinkedIn                 | Publicly visible job postings        | Search LinkedIn Jobs for "Meridian Logistics"             |
| Sarah Chen's LinkedIn posts about scaling  | Public social media activity         | Visit Sarah Chen's LinkedIn profile                       |
| Sarah Chen's background (Parcelhub, DPD)   | Employment history on public profile | LinkedIn profile, if privacy settings allow               |

These claims reference public, searchable information. A rep can verify each one in under two minutes. Verified claims become conversation openers: "I noticed you are hiring rapidly and just won a major contract -- are you rebuilding your operations workflow?"

### Unverifiable Claims

| Claim                                             | Why Suspect                                                                                                                                                                  | The Tell                                                                                                                           |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Revenue £45-60M (estimated)                       | Private companies in the UK rarely disclose revenue unless they exceed filing thresholds at Companies House. The agent inferred this from headcount and industry benchmarks. | **Private financials stated as estimates.** Revenue for private companies is not public unless voluntarily disclosed.              |
| SLA compliance done via spreadsheets              | This describes internal operations that no public source would reveal. The agent inferred a common pain pattern for logistics companies of this size.                        | **Internal process presented as intelligence.** No external observer can see how a company tracks its SLAs.                        |
| "Scaling headcount is too slow for contract ramp" | This is an interpretation of LinkedIn activity, not a confirmed statement from Sarah Chen.                                                                                   | **Inference dressed as observation.** The agent connected hiring activity with a contract win and generated a plausible narrative. |

### The Three Rules

These three rules catch most hallucinated data in prospect research briefs:

**Rule 1: Private financials are always suspect.** Revenue, ARR, burn rate, runway, unit economics -- if the company has not publicly disclosed the number, the agent fabricated it. This applies to funding round details, valuation estimates, and growth rates unless sourced from a press release or filing.

**Rule 2: The more specific the unverifiable claim, the more likely it is hallucinated.** "£45-60M estimated revenue" is more suspicious than "mid-market company." "3 posts about operational scaling" is more suspicious than "active on LinkedIn." Agents generate specific numbers because specificity sounds authoritative. Specificity without a source is a red flag.

**Rule 3: Inferred connections are not confirmed connections.** "SLA compliance via spreadsheets" sounds like inside knowledge. It is a pattern match -- logistics companies at this scale commonly use spreadsheets for compliance tracking. The agent noticed the company size, industry, and growth trajectory and generated a plausible internal process. Treat any internal operations claim as a hypothesis until you confirm it in conversation.

:::warning The Agent Researches and Recommends. You Decide and Send.
Walking into a meeting and citing a revenue figure that does not exist destroys your credibility instantly. The prospect concludes you fabricate research. Every accurate insight you share afterward is tainted.

**The rule is straightforward: verify every claim you plan to say out loud. If you cannot verify it, do not say it.** Verified claims become conversation openers. Unverified claims stay in your notes as hypotheses to test during the meeting.
:::

### The Verification Hierarchy

Not all claims carry equal risk. Use this hierarchy to prioritise what to verify before a meeting:

```
HIGHEST CONFIDENCE
  │
  │  Cited sources (named article, named event, press release)
  │  Public records (Companies House, LinkedIn Jobs, patent filings)
  │  Public events (conference talks, published interviews)
  │
  │  ─── Verification line: above = verify easily, below = treat with caution ───
  │
  │  Career history (LinkedIn profiles, privacy-dependent)
  │  Financial estimates (inferred from benchmarks)
  │  Internal processes (inferred from industry patterns)
  │  Business relationships (inferred from market proximity)
  │
LOWEST CONFIDENCE
```

## Configure sales-marketing.local.md

The extension ships with a template file. Copy it to your project root:

```
cp $(claude plugin path sales-revops-marketing@agentfactory-business)/sales-marketing.local.md.template ./sales-marketing.local.md
```

Open `sales-marketing.local.md` and fill in the NexaFlow ICP skeleton:

```markdown
# Sales & Marketing Local Configuration

## Company Profile

- **Company:** NexaFlow Technologies (Pvt) Ltd
- **Product:** Workflow automation platform for mid-market logistics companies
- **Market:** B2B SaaS — warehouse ops, fleet coordination, SLA tracking
- **Geography:** Pakistan (70%), UAE (20%), UK expansion (10%)

## Ideal Customer Profile (ICP)

- **Company size:** 50-400 employees
- **Industry:** Regional 3PL operators, warehousing, fleet management
- **Buyer persona:** VP Ops / Director Ops
- **Pain points:** Manual coordination at scale, SLA tracking via spreadsheets,
  slow staff onboarding, scaling without headcount
- **Buying signals:** New contract wins, VP/Director hired in last 12 months,
  LinkedIn posts about scaling challenges, open operations roles

## Brand Voice

- Direct, practical, no jargon. "We speak like operators, not vendors."
```

Save the file and run the same research prompt again:

```
Research Sarah Chen, VP Operations at Meridian Logistics, Leeds.
I sell workflow automation for logistics companies.
```

Compare the output to the first brief. The ICP MATCH section now scores Meridian against NexaFlow's specific profile -- 50-400 employees, 3PL operators, VP Ops persona, scaling pain. The HOOK section references NexaFlow's value proposition instead of generic automation language. The recommended approach filters through your brand voice: direct, practical, no jargon.

This skeleton will be completed in Lesson 2 when you analyse your closed-won deals to build a data-driven ICP rather than an assumed one.

## What You Built

1. All three plugins installed and verified -- Sales, Marketing, and the RevOps extension
2. Demo business dataset (NexaFlow Technologies) generated with 20 closed-won deals, 5 target prospects, 10 pipeline deals, campaign history, and competitor intelligence
3. First prospect research brief on Meridian Logistics / Sarah Chen with structured WHO / WHAT / WHEN / PAIN / HOOK sections
4. Hallucination detection skill -- you can distinguish verifiable claims (job postings, LinkedIn activity, Companies House records) from unverifiable ones (revenue estimates, internal pain points, inferred connections)
5. sales-marketing.local.md skeleton configured with NexaFlow's ICP

## Flashcards Study Aid

Test your understanding of the key concepts from this lesson.

<Flashcards />

## Try With AI

**Setup:** Use these prompts in Claude Code with the Sales, Marketing, and RevOps extension plugins installed.

### Prompt 1: Reproduce

```
Research Sarah Chen, VP Operations at Meridian Logistics, Leeds.
I sell workflow automation for logistics companies. I want to
understand fit, timing, and the best outreach angle.
```

**What you're learning:** How the prospect-research skill structures intelligence into actionable sections (ICP MATCH / WHO / WHAT / WHEN / PAIN / HOOK). Compare your output to the reference brief in this lesson. The structure should match even if specific details vary between runs -- the agent produces different claims each time, which is itself a lesson in why verification matters.

### Prompt 2: Adapt

```
Research [pick a second prospect from your generated demo dataset].
Compare the research brief to the Meridian brief. Which prospect
has stronger timing signals? Which has more verifiable data?
```

**What you're learning:** Research briefs vary in quality based on how much public information exists. Data-scarce prospects (smaller companies, emerging markets, private companies) produce more hallucinations than data-rich prospects (UK companies with Companies House filings, active LinkedIn presences, press coverage). Recognising this pattern helps you calibrate trust per brief rather than trusting all briefs equally.

### Prompt 3: Apply

```
Research a real prospect from your own network — someone you have
been meaning to contact. After reading the brief, mark every claim as
VERIFIED (you can confirm it), PLAUSIBLE (likely true, not confirmed),
or SUSPECT (cannot verify, possibly hallucinated).
```

**What you're learning:** The discipline of evaluating agent output before acting on it. This is the foundational skill for every subsequent lesson in this chapter. A rep who sends outreach referencing a fabricated funding round loses credibility permanently. A rep who verifies first and leads with confirmed intelligence earns trust immediately. Your VERIFIED/PLAUSIBLE/SUSPECT audit becomes a habit you apply to every research brief from this point forward.
