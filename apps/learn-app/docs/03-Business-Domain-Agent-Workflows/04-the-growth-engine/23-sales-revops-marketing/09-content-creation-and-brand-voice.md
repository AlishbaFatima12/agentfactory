---
sidebar_position: 9
title: "Sales Assets and Brand Voice"
description: "Generate interactive sales assets with create-an-asset, configure brand-voice for cross-channel consistency, and audit existing content with /brand-review for tone alignment across outreach, campaigns, and collateral"
keywords:
  [
    "sales assets",
    "create-an-asset",
    "brand voice",
    "brand-review",
    "ROI calculator",
    "one-pager",
    "competitive comparison",
    "interactive HTML",
    "brand consistency",
    "cross-channel audit",
    "persona variation",
    "sales collateral",
  ]
chapter: 23
lesson: 9
duration_minutes: 20

# HIDDEN SKILLS METADATA
skills:
  - name: "Generate Interactive Sales Assets with create-an-asset"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can use create-an-asset to produce an interactive HTML asset (ROI calculator, one-pager, competitive comparison) and evaluate it for interactivity, editability, and brand alignment"

  - name: "Configure brand-voice for Cross-Channel Consistency"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can define brand voice parameters (audience, tone, forbidden words, signature phrases) and verify enforcement across multiple content types"

  - name: "Audit Content for Brand Consistency with /brand-review"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can run /brand-review on content from previous lessons and identify where brand voice is inconsistent"

learning_objectives:
  - objective: "Generate an interactive sales asset and evaluate it for audience-appropriate interactivity and brand alignment"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces an ROI calculator with editable assumptions and evaluates whether it serves CTO vs CFO audiences differently"

  - objective: "Configure brand-voice and verify enforcement by running /brand-review on content from earlier lessons"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Student configures brand voice, audits 3 pieces of content from earlier lessons, and identifies inconsistencies"

  - objective: "Adapt sales assets for different personas (CTO vs CFO) and evaluate what changes between versions"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student generates the same asset for 2 personas and can explain what changed and what should have changed but did not"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "Sales assets as prospect-facing deliverables (ROI calculators, one-pagers, comparisons)"
    - "create-an-asset as interactive HTML generator"
    - "brand-voice as configuration for tone consistency"
    - "/brand-review as cross-content audit tool"
    - "Persona variation (same asset, different audience)"
  assessment: "5 concepts at B1 level. Lower concept count because this lesson primarily applies existing evaluation skills to new content types."

differentiation:
  extension_for_advanced: "Generate 3 different asset types (ROI calculator, competitive comparison, one-pager) for the same product. Run /brand-review on all 3 plus your earlier outreach. Create a brand consistency scorecard."
  remedial_for_struggling: "Focus on configuring brand-voice with 3 parameters (audience, tone, 5 forbidden words) and running /brand-review on one piece of content from an earlier lesson. If you can identify a brand inconsistency, you have the core skill."
---

# Sales Assets and Brand Voice

Your outreach from earlier lessons references your product. Your campaigns drive traffic to your website. What does the prospect see when they click through? If the answer is a generic PDF or a wall of unformatted text, you wasted the most expensive click in your funnel. The prospect clicked because the outreach was personalised and the campaign was targeted. They land on a static document that could belong to any company in your industry. The trust you built in 200 words of personalised outreach collapses in 3 seconds of generic collateral.

**Sales assets** are the prospect-facing deliverables that convert interest into meetings: ROI calculators that let CFOs model their own numbers, one-pagers that answer the specific question the prospect raised, competitive comparisons that address the alternative they mentioned in their reply. These are not marketing brochures. They are conversation tools — each one built for a specific moment in the sales cycle when the prospect needs to see value before they commit time.

This lesson generates those assets with the `create-an-asset` skill, configures `brand-voice` to enforce consistency across every piece of content your team produces, and uses `/brand-review` to audit what you have already created. The goal is not to produce more content. The goal is to produce content that sounds like it came from the same company that wrote the outreach.

## Generating an Interactive Asset

The `create-an-asset` skill produces interactive HTML sales assets — not PDFs, not static images. Interactive means the prospect can change the numbers. An **ROI calculator** where the prospect edits their own assumptions converts at a higher rate than one where you fill in the numbers for them. The prospect trusts their own inputs more than yours.

Farhan at NexaFlow Technologies in Karachi needs an ROI calculator for his data pipeline platform. His prospects are CTOs at mid-market B2B SaaS companies who are evaluating whether to build a pipeline in-house or buy NexaFlow's managed solution.

Run:

```
create-an-asset ROI calculator for NexaFlow data pipeline platform targeting mid-market B2B SaaS companies in South Asia. Include editable assumptions for team size, current data volume, and engineering hourly rate. Show build-vs-buy comparison over 24 months. Use PKR as primary currency with USD toggle.
```

**Output:**

```
ASSET GENERATED: roi-calculator-nexaflow.html

TYPE: Interactive ROI Calculator
FORMAT: Single-page HTML with embedded JavaScript
INTERACTIVITY: 4 editable fields (team size, data volume GB/day,
               engineering rate PKR/hour, growth rate %)

SECTIONS:
  1. Your Current Setup (editable assumptions)
     - Engineering team size: [5] engineers
     - Daily data volume: [500] GB
     - Engineering hourly rate: PKR [4,500]
     - Annual data growth: [40]%

  2. Build In-House Estimate (auto-calculated)
     - Year 1: PKR 18.7M (development + infrastructure)
     - Year 2: PKR 12.3M (maintenance + scaling)
     - Total 24-month cost: PKR 31.0M

  3. NexaFlow Managed Solution (auto-calculated)
     - Year 1: PKR 7.2M (subscription + onboarding)
     - Year 2: PKR 7.8M (subscription + scaling tier)
     - Total 24-month cost: PKR 15.0M

  4. Comparison Summary
     - 24-month savings: PKR 16.0M (51.6%)
     - Break-even point: Month 4
     - Engineering hours redirected: 8,400 hours over 24 months

STYLING: NexaFlow brand colors (#1A365D, #E53E3E) applied
CURRENCY: PKR primary, USD toggle available
FILE SIZE: 42KB (no external dependencies)
```

### Evaluating the Asset

Do not send this to a prospect without evaluation. Four questions to ask about every generated asset:

**Is it interactive?** The prospect should be able to change at least 3 assumptions. If the calculator has hardcoded numbers, it is a brochure pretending to be a tool. In this case, four editable fields — team size, data volume, hourly rate, and growth rate — give the prospect control. They enter their own reality, not yours.

**Are the defaults calibrated to your market?** The hourly rate defaults to PKR 4,500 — reasonable for a senior data engineer in Karachi. If the default were $150/hour (US rate), a prospect in Pakistan would immediately distrust the entire calculation. Market-appropriate defaults signal that you understand their context. Check: does the default team size (5 engineers) match what mid-market SaaS companies in South Asia typically allocate to data infrastructure? If your sales experience says the answer is 3-4, change the default. The agent calibrates from general data. You calibrate from market knowledge.

**Does the financial model hold up?** The build-vs-buy comparison shows NexaFlow at 51.6% savings over 24 months. Is that realistic? Cross-check: PKR 7.2M for Year 1 subscription works out to roughly PKR 600K/month. Does that match NexaFlow's actual pricing? If the agent used a price point that is too low, the savings percentage is inflated and the prospect will discover the discrepancy during the sales conversation. Incorrect pricing in an ROI calculator is worse than no ROI calculator at all.

**Is it branded?** The output mentions NexaFlow brand colors (#1A365D, #E53E3E). Open the HTML file. Are those colors actually applied, or did the agent list them in the metadata without using them? Check the header, the buttons, the comparison bars. Generic blue-and-white styling undermines the impression that this tool was purpose-built.

:::tip Asset Evaluation Shortcut
Open the generated HTML file in a browser. Change every editable field to the minimum value. Do the results still make sense, or do they show negative costs or impossible savings? Then change every field to the maximum. Do the results break? Edge-case testing takes 60 seconds and catches the most common calculation errors.
:::

## Persona Variation: CTO vs CFO

The same product needs different assets for different buyers. A CTO evaluating NexaFlow cares about different things than a CFO evaluating NexaFlow. The ROI calculator you just generated speaks to a technical audience — team size, data volume, engineering hours. A CFO does not think in engineering hours. A CFO thinks in cost reduction, payback period, and risk.

Generate the same asset for a CFO audience:

```
create-an-asset ROI calculator for NexaFlow data pipeline platform. This version targets CFOs at mid-market B2B SaaS companies. Focus on financial metrics: total cost of ownership, payback period, risk-adjusted ROI, and opportunity cost of engineering hours. Remove technical details (data volume, GB/day). Use PKR as primary currency with USD toggle.
```

**Output:**

```
ASSET GENERATED: roi-calculator-nexaflow-cfo.html

TYPE: Interactive ROI Calculator (CFO Version)

SECTIONS:
  1. Your Investment Parameters (editable)
     - Annual engineering budget: PKR [45M]
     - Percentage allocated to data infrastructure: [25]%
     - Expected revenue growth next 12 months: [30]%
     - Cost of delayed product features (monthly): PKR [1.5M]

  2. Total Cost of Ownership
     - Build: PKR 31.0M over 24 months
     - Buy (NexaFlow): PKR 15.0M over 24 months
     - Net saving: PKR 16.0M

  3. Payback Period
     - Investment recovery: Month 4
     - Net positive from Month 5 onward

  4. Risk-Adjusted Analysis
     - Build risk: 35% of projects exceed budget by 40%+
     - Buy risk: Fixed subscription, budget predictability 95%+
     - Risk-adjusted saving: PKR 12.8M (accounting for
       build overrun probability)

  5. Opportunity Cost
     - Engineering hours freed: 8,400 over 24 months
     - At current feature delivery rate: equivalent to
       2.3 additional product releases
     - Revenue impact of accelerated releases: PKR [4.5M]
       (editable based on your revenue-per-release estimate)

STYLING: NexaFlow brand colors applied
CURRENCY: PKR primary, USD toggle
```

### What Changed

Compare the two versions side by side:

| Element | CTO Version | CFO Version |
| --- | --- | --- |
| **Editable fields** | Team size, data volume, hourly rate, growth rate | Budget, allocation %, revenue growth, delay cost |
| **Primary metric** | Engineering hours saved | PKR saved and payback period |
| **Risk section** | Absent | Risk-adjusted ROI with overrun probability |
| **Opportunity cost** | Hours redirected (abstract) | Product releases and revenue impact (concrete) |
| **Technical detail** | GB/day, infrastructure costs | Removed entirely |
| **Language** | "Data volume", "scaling tier" | "Total cost of ownership", "budget predictability" |

The agent restructured the calculator around financial language and added a risk-adjusted analysis. That is a meaningful adaptation. The CFO version quantifies risk in a way the CTO version does not, because CFOs assess risk as a percentage of budget while CTOs assess risk as technical complexity.

### What Should Have Changed But Did Not

Look carefully at the default values. The CTO version defaults to a team of 5 engineers at PKR 4,500/hour. The CFO version defaults to a PKR 45M annual engineering budget. Are those consistent? Five engineers at PKR 4,500/hour working 2,000 hours/year equals PKR 45M. The numbers align — but only because the agent was given the same underlying company profile.

Now check the risk section. The CFO version states "35% of projects exceed budget by 40%+." Where did that number come from? The agent generated it from general software project data. For NexaFlow's specific market — data infrastructure projects at mid-market Pakistani SaaS companies — that number may be higher or lower. This is the same pattern you learned in Lesson 1 with hallucinated data: specific numbers that sound authoritative but lack a verifiable source. Before sending this to a CFO, verify or replace that statistic with a number from your own project history or a published industry benchmark.

**Persona variation reveals the agent's depth limit.** It changes labels and restructures sections competently. It adapts the framing from technical to financial. But it does not deeply reason about what a specific persona needs to see — it applies patterns from training data about "what CFOs care about." Your job is to evaluate whether those patterns match the specific CFOs in your pipeline. A CFO at a 200-person Karachi SaaS company has different concerns than a CFO at a 5,000-person London enterprise. The agent does not know the difference. You do.

## Configuring Brand Voice

You have now generated multiple types of content across this chapter: prospect research briefs, outreach sequences, campaigns, and now sales assets. Open any three pieces side by side. Do they sound like they came from the same company? If the outreach uses warm, relationship-first language and the ROI calculator uses cold corporate jargon, the prospect experiences two different companies. That inconsistency erodes trust.

**Brand voice** is the set of constraints that make every piece of content sound like it comes from the same organisation. The `brand-voice` skill encodes those constraints so the agent enforces them automatically.

Configure `brand-voice` for NexaFlow:

```
brand-voice configure

Company: NexaFlow Technologies
Audience: B2B SaaS decision-makers in South Asia and the Gulf
Tone: Professional but warm. Relationship-first. Direct without being aggressive.
Values: Precision, partnership, local expertise

Forbidden words:
  - synergy (corporate jargon, no meaning)
  - leverage (verb form — say "use" instead)
  - disruptive (overused, every startup claims this)
  - cutting-edge (meaningless superlative)
  - game-changing (meaningless superlative)
  - revolutionary (meaningless superlative)

Signature phrases:
  - "Built for your scale"
  - "Your data, your control"
  - "From Karachi to the Gulf — we know your market"

Writing rules:
  - Use "we" not "NexaFlow" in body copy (first person, not third)
  - Prefer active voice
  - Numbers over adjectives (say "51% cost reduction" not "significant savings")
  - Acknowledge the prospect's context before presenting the solution
  - In South Asian communications, include a relationship opener
    (one sentence acknowledging the connection or referral)
```

**Output:**

```
BRAND VOICE CONFIGURED: NexaFlow Technologies

Profile saved. This voice profile will be applied to all
content generation commands including:
  - create-an-asset
  - outreach
  - sequence
  - /plan-campaign
  - content-creation
  - copywriting

ENFORCEMENT RULES:
  6 forbidden words will trigger replacement suggestions
  3 signature phrases available for contextual insertion
  Tone: Professional-warm (relationship-first)
  Currency default: PKR with USD toggle
  Regional: South Asian relationship opener in first-contact content

To review enforcement on existing content, run:
  /brand-review [file or content]
```

### Why These Specific Constraints

The forbidden word list overlaps with the Five Laws banned list from earlier lessons. That is intentional. Your outreach already avoids "synergy" and "leverage." Your sales assets should avoid them too. If a one-pager says "leverage our cutting-edge platform" while your outreach carefully says "use our data pipeline to reduce your infrastructure costs by 51%," the prospect reads two different voices. The one-pager sounds like a template. The outreach sounds like a person.

The signature phrases serve a different function. "Built for your scale" works in a one-pager headline. "Your data, your control" works in an ROI calculator's privacy section. "From Karachi to the Gulf" works in a first-contact email to a prospect in Dubai. The agent inserts these phrases when the context matches — it does not force them into every document.

The South Asian relationship opener is a cultural calibration. In Pakistani and Gulf business culture, starting a cold email with "I noticed your Series B announcement and wanted to discuss your data infrastructure plans" reads as transactional. Starting with "Congratulations on the Series B — the growth at [Company] is impressive, and a mutual connection at [referral name] suggested we connect" reads as relational. The `brand-voice` configuration encodes this cultural norm so the agent applies it automatically in first-contact content.

## Auditing Existing Content

Configuration is only useful if it changes future output and identifies problems in past output. The `/brand-review` command audits content against your brand voice profile.

Run `/brand-review` on the outreach you generated in an earlier lesson:

```
/brand-review outreach-sequence-nexaflow-prospect-001.md
```

**Output:**

```
BRAND REVIEW — outreach-sequence-nexaflow-prospect-001.md

OVERALL: 7 issues found (3 high, 2 medium, 2 low)

HIGH PRIORITY:
  Line 12: "leverage our platform" → forbidden word "leverage"
    Suggestion: "use our platform"

  Line 28: "cutting-edge data pipeline solution"
    → forbidden words "cutting-edge"
    Suggestion: "real-time data pipeline built for your scale"
    (uses signature phrase contextually)

  Line 45: Missing relationship opener in first-contact email
    → Brand voice requires South Asian relationship opener
      for first-contact content
    Suggestion: Add referral or congratulatory opener before
    the business proposition

MEDIUM PRIORITY:
  Line 8: "NexaFlow's platform reduces costs" → third person
    Suggestion: "Our platform reduces costs" (use "we" per
    brand voice rules)

  Line 33: "significant savings" → vague adjective
    Suggestion: "51% cost reduction over 24 months" (numbers
    over adjectives per brand voice rules)

LOW PRIORITY:
  Line 19: Passive voice — "costs are reduced by"
    Suggestion: "our platform reduces costs by" (active voice)

  Line 52: No signature phrase in closing
    Suggestion: Consider "Your data, your control" in the
    data security paragraph

SCORE: 68/100 — Below consistency threshold (80)
RECOMMENDATION: Fix 3 high-priority issues before sending.
  Estimated fix time: 5 minutes.
```

### Reading the Audit

The review found 7 issues across the outreach sequence. Three patterns stand out:

**Forbidden word leakage.** The outreach used "leverage" and "cutting-edge" even though the Five Laws in earlier lessons banned generic superlatives. This happens when different commands generate content at different times — the outreach was generated before `brand-voice` was configured. The fix is to re-run `/brand-review` on all content generated before the brand voice configuration was set.

**Tone inconsistency.** The outreach switches between first person ("we") and third person ("NexaFlow's platform"). A prospect reading the sequence encounters two voices. The brand voice rule is clear: use "we" in body copy. Third person is for formal contexts — press releases, legal documents, partnership announcements.

**Missing cultural calibration.** The first-contact email jumped straight to the business proposition without a relationship opener. In the South Asian B2B context, this reads as cold. The brand voice configuration requires a relationship opener — but the outreach was generated before that rule existed.

### Cross-Content Audit

Now audit content from a different lesson — the campaign you built:

```
/brand-review campaign-plan-nexaflow-q1.md
```

**Output:**

```
BRAND REVIEW — campaign-plan-nexaflow-q1.md

OVERALL: 4 issues found (1 high, 2 medium, 1 low)

HIGH PRIORITY:
  Line 7: "revolutionary approach to data infrastructure"
    → forbidden word "revolutionary"
    Suggestion: "a managed data pipeline that reduces
    infrastructure costs by 51%"

MEDIUM PRIORITY:
  Line 22: Campaign headline uses "NexaFlow" (third person)
    instead of "we" — acceptable in headline context but
    inconsistent with body copy voice

  Line 38: "game-changing results" → forbidden word "game-changing"
    Suggestion: "measurable results: 51% cost reduction,
    4-month payback"

LOW PRIORITY:
  Line 51: Campaign CTA "Learn More" is generic
    Suggestion: "See Your ROI in 60 Seconds" (matches
    interactive calculator asset)

SCORE: 78/100 — Near threshold
RECOMMENDATION: Fix 1 high-priority issue. Campaign is
  closer to brand voice than outreach, likely because
  it was generated more recently.
```

Compare the two scores. The outreach scored 68/100. The campaign scored 78/100. The campaign was generated later in the chapter — closer to when you started thinking about consistency. This is the natural pattern: content quality drifts when different pieces are created at different times without a shared voice standard. The `brand-voice` configuration and `/brand-review` command close that gap.

### The Cross-Content Pattern

Run `/brand-review` on three or more pieces of content from earlier lessons. Build a consistency table:

| Content Piece | Score | High Issues | Most Common Problem |
| --- | --- | --- | --- |
| Outreach sequence | 68/100 | 3 | Forbidden words + missing opener |
| Campaign plan | 78/100 | 1 | Forbidden word in headline |
| ROI calculator (CTO) | ?/100 | ? | Run the review to find out |

The pattern reveals where your brand voice is strongest and weakest. Outreach tends to score lowest because it is written at speed — reps need sequences fast and do not pause for voice consistency. Campaigns score higher because they go through more review. Sales assets fall somewhere between.

## Failure Analysis: With and Without Brand Voice

Here are two versions of the same one-pager for NexaFlow's data pipeline platform. One was generated without `brand-voice` configured. The other was generated with it. Read both and identify the differences before checking the analysis.

### Version A (No Brand Voice)

```
NexaFlow Data Pipeline Platform

NexaFlow Technologies offers a cutting-edge data pipeline
solution that leverages advanced streaming technology to
deliver revolutionary results for modern enterprises.

KEY BENEFITS:
• Significant cost reduction through managed infrastructure
• Scalable architecture that grows with your business
• Enterprise-grade security and compliance
• Seamless integration with existing tools

NexaFlow's platform is trusted by leading companies across
the region. Contact us to learn more about how NexaFlow can
transform your data infrastructure.
```

### Version B (With Brand Voice)

```
Your Data Pipeline, Without the Infrastructure Headache

Your engineering team spends 40% of its time maintaining
data infrastructure instead of building product features.
We built a managed pipeline that handles the infrastructure
so your engineers build what matters.

WHAT CHANGES FOR YOU:
• 51% cost reduction over 24 months (see the ROI calculator)
• From 500GB to 50TB daily — no re-architecture needed
• Your data stays in your region (PK, UAE, SA data centres)
• Plug into your existing stack — Kafka, PostgreSQL, AWS

Built for your scale. From Karachi to the Gulf, we work
with B2B SaaS teams who have outgrown their current pipeline
and need infrastructure that scales without scaling the team.

→ See your ROI in 60 seconds: [calculator link]
```

### The Differences

| Element | Version A | Version B |
| --- | --- | --- |
| **Headline** | Company name + product name | Prospect's problem + promise |
| **Forbidden words** | "cutting-edge", "leverages", "revolutionary" | None |
| **Voice** | Third person ("NexaFlow's platform") | First person ("We built") |
| **Specificity** | "Significant cost reduction" | "51% cost reduction over 24 months" |
| **Signature phrase** | None | "Built for your scale" |
| **CTA** | "Contact us to learn more" | "See your ROI in 60 seconds" |
| **Cultural context** | "Modern enterprises" (generic) | "From Karachi to the Gulf" (market-specific) |
| **Prospect focus** | What NexaFlow does | What changes for the prospect |

Version A reads like a template. It could describe any data company. Version B reads like it was written by someone who knows the prospect's market, has a specific value proposition, and respects the reader's time enough to give numbers instead of adjectives.

The difference is not creative talent. The difference is configuration. The `brand-voice` skill enforced forbidden word avoidance, first-person voice, numbers over adjectives, and contextual signature phrase insertion. The agent produced Version B because the constraints were defined. Without those constraints, it defaulted to Version A — generic corporate language that sounds professional but says nothing.

## Hands-On: Configure Your Brand Voice

Define and configure `brand-voice` for your own business. If you do not have a current role, use the business context you have been building throughout this chapter.

### Step 1: Define Your Voice Parameters

Answer these questions before opening the tool:

- **Who is your audience?** Not "everyone." Name the specific decision-makers.
- **What tone fits your market?** Formal? Direct? Warm? Technical? Relationship-first?
- **What words does your industry overuse?** Every sector has its cliches. Name 5 you want banned.
- **What phrases define your brand?** The lines that should appear across all your content. Name 2-3.
- **What cultural context matters?** If you sell in South Asia, Gulf, Europe, or multiple regions — what communication norms should the agent respect?

### Step 2: Configure brand-voice

```
brand-voice configure

Company: [Your company]
Audience: [Your specific audience]
Tone: [Your tone description]
Values: [3-4 values]

Forbidden words:
  - [word 1] (reason)
  - [word 2] (reason)
  - [word 3] (reason)
  - [word 4] (reason)
  - [word 5] (reason)

Signature phrases:
  - "[phrase 1]"
  - "[phrase 2]"

Writing rules:
  - [rule 1]
  - [rule 2]
  - [rule 3]
```

### Step 3: Generate an Asset

Run `create-an-asset` to generate an ROI calculator, one-pager, or competitive comparison for your product. Evaluate it against the four questions from the worked example: Is it interactive? Are the defaults calibrated? Does the model hold up? Is it branded?

### Step 4: Audit Your Earlier Work

Run `/brand-review` on one piece of content you generated in a previous lesson — an outreach sequence, a campaign plan, or a research brief. Record the score. How many forbidden words leaked through? Is the tone consistent with what you just configured?

| Content Piece | Brand Review Score | High Issues | Fix Required? |
| --- | --- | --- | --- |
| [Your content] | /100 | | |

If the score is below 80, fix the high-priority issues. Then re-run `/brand-review` to confirm the score improved.

## Try With AI

Use these prompts in Claude or your preferred AI assistant.

### Prompt 1: Build an Asset for a Specific Sales Moment

```
I need an interactive ROI calculator for this scenario:

Product: [describe your product in one sentence]
Prospect: [company name, size, industry, location]
Buyer: [CTO / CFO / VP Ops — pick one]
Sales moment: The prospect asked "How does your pricing
  compare to building in-house?" in our last call.

Generate the calculator with:
1. At least 4 editable assumptions relevant to THIS buyer
2. Default values calibrated to THIS prospect's market
3. A build-vs-buy comparison over 24 months
4. Currency appropriate to the prospect's location

After generating, help me evaluate:
- Are the default values realistic for this market?
- Does the financial model hold up at edge cases
  (minimum and maximum inputs)?
- What would a CTO version include that this CFO version
  does not (or vice versa)?
```

**What you are learning:** Asset generation is the easy part. Evaluation is the skill. By generating a calculator and then immediately stress-testing its defaults, its financial model, and its persona fit, you build the habit of treating AI output as a draft that needs your domain expertise — not a finished deliverable. The persona comparison forces you to think about what each buyer actually needs to see, which makes every future asset more targeted.

### Prompt 2: Cross-Content Brand Audit

```
I have content from 3 different contexts. Review all 3
for brand voice consistency:

Content 1 (outreach email):
[paste your outreach from an earlier lesson]

Content 2 (campaign headline + body):
[paste your campaign copy from an earlier lesson]

Content 3 (sales asset intro paragraph):
[paste the opening of your ROI calculator or one-pager]

My brand voice rules:
- Tone: [your tone]
- Forbidden words: [your list]
- Signature phrases: [your phrases]
- Voice: first person ("we"), active voice, numbers over adjectives

For each piece:
1. Score it 0-100 for brand voice consistency
2. Flag every forbidden word
3. Identify tone shifts between the three pieces
4. Which piece is most on-brand? Which is least?
5. Write a 3-sentence brand voice summary I could give
   to a new team member so they write consistently.
```

**What you are learning:** Cross-content auditing is harder than single-document editing. Inconsistency hides between documents — the outreach is warm, the asset is corporate, and nobody notices until a prospect reads both in the same day. By auditing three pieces together, you train yourself to read for voice as a system property, not a document property. The 3-sentence summary at the end forces you to articulate your brand voice with enough precision that another person (or another agent session) can reproduce it.
