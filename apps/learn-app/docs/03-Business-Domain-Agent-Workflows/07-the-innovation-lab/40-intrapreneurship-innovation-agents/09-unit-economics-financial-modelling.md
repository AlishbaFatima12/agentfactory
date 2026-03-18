---
slug: /Business-Domain-Agent-Workflows/intrapreneurship-innovation-agents/unit-economics-financial-modelling
sidebar_position: 9
title: "Unit Economics and Financial Modelling"
description: "Calculate CAC, LTV, payback period, and breakeven; build a three-scenario 18-month revenue and runway model with sensitivity analysis and fundraising triggers using the /financials skill"
keywords:
  [
    "unit economics",
    "CAC",
    "LTV",
    "customer acquisition cost",
    "lifetime value",
    "payback period",
    "churn",
    "breakeven",
    "runway",
    "three-scenario model",
    "sensitivity analysis",
    "Series A readiness",
    "financials skill",
    "innovation agents",
  ]
chapter: 40
lesson: 9
duration_minutes: 45

# HIDDEN SKILLS METADATA
skills:
  - name: "Build a Unit Economics Model with CAC, LTV, and Payback Analysis"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can calculate sustainable CAC (distinguishing it from founder-led CAC), LTV at multiple churn rates, LTV:CAC ratio with assessment, payback period, and breakeven customer count — and flag which assumptions are not yet measured"

  - name: "Create a Three-Scenario Financial Model with Runway and Fundraising Triggers"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can build a month-by-month model across base, conservative, and optimistic scenarios; identify the breakeven date in each scenario; and set a fundraising trigger point at least 6 months before projected runway end"

learning_objectives:
  - objective: "Calculate unit economics (CAC, LTV, LTV:CAC ratio, payback, breakeven) and correctly flag which assumptions are measured versus assumed"
    proficiency_level: "B2"
    bloom_level: "Apply"
    assessment_method: "Student produces a unit economics table where every assumption is labelled MEASURED or ASSUMED, and churn is explicitly identified as the highest-uncertainty input if not yet measured at Month 12"

  - objective: "Build an 18-month financial model across three scenarios and identify the fundraising trigger point in each"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Student produces a month-by-month table with new customers, churn, MRR, burn, cash balance, and runway for all three scenarios, with the breakeven date and fundraising trigger marked on each"

  - objective: "Run a sensitivity analysis showing how breakeven shifts under four pessimistic assumptions"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Student produces a sensitivity table showing breakeven date shifts for four scenarios (CAC 2x, churn 2x, revenue 30% lower, growth halved) and identifies which single variable has the greatest impact on viability"

cognitive_load:
  new_concepts: 6
  concepts_list:
    - "CAC — founder-led vs. sustainable (and why the distinction matters for planning)"
    - "LTV — the churn dependency and why a 4x difference in churn produces a 4x difference in LTV"
    - "LTV:CAC ratio — assessment thresholds and what each range signals"
    - "Breakeven customer count — the fixed cost / contribution margin calculation"
    - "Three-scenario model — base, conservative, and optimistic with different growth and churn inputs"
    - "Sensitivity analysis — how key variable changes shift the breakeven date"
  assessment: "6 concepts at B2 level is at the upper limit of cognitive load. The financial reasoning is sequential (unit economics → scenarios → sensitivity), and each stage uses the output of the prior one, which provides scaffolding. Students who struggle should focus on the unit economics section only and return to scenarios in a second session."

differentiation:
  extension_for_advanced: "Add a fourth scenario to your sensitivity analysis: what if gross margin is 10 percentage points lower than assumed (e.g. because AI API costs scale faster than revenue)? How does this affect the unit economics, and at what customer count does the business become non-viable? This forces you to think about margin compression — one of the less-discussed risks in AI-powered SaaS."
  remedial_for_struggling: "Focus on unit economics only: calculate CAC ($275 sustainable), LTV ($36K at 15% churn), LTV:CAC (131:1), and breakeven (10 customers). These four numbers tell you whether the business is economically viable at the unit level. If the unit economics work, the financial model is about timing and capital, not viability."

teaching_guide:
  key_points:
    - "Unit economics precede projections — if the unit economics do not work, no amount of growth fixes them"
    - "Sustainable CAC (market-rate founder cost) is the only number to use for planning — founder-led CAC is artificially low and will deceive you at scale"
    - "Churn is the most dangerous assumption in SaaS — a 15% churn assumption that turns out to be 40% reduces LTV by 4x"
    - "The fundraising trigger must be set at 6 months of runway remaining — not when cash runs out"
    - "Sensitivity analysis reveals the single most dangerous assumption; that is the one to validate first"
  misconceptions:
    - "High LTV:CAC ratio means the business is safe. Correction: a 131:1 ratio based on a 15% annual churn assumption that has never been measured is not evidence of strong unit economics — it is a hypothesis. The ratio is only meaningful if churn is measured at Month 12 or later."
    - "The conservative scenario is the pessimistic one. Correction: the conservative scenario is the realistic downside — the scenario you must plan for and be able to survive. If the conservative scenario ends in bankruptcy at Month 10, that is a signal to rethink the funding plan, not a warning to ignore."
    - "Breakeven means the business is profitable. Correction: breakeven means MRR contribution covers monthly burn. It does not account for debt, investor repayment, or capital needed for the next growth stage."
  discussion_prompts:
    - "The AP automation model shows breakeven at 10 customers. If you cannot get from 3 to 10 customers in 5 months, what does that tell you? Is it a sales execution problem, a pricing problem, or a product-market fit problem?"
    - "The conservative scenario assumes 50% of base-case growth and 1.5x churn. If you were advising this venture, would you raise money before or after validating churn? What do you risk by waiting?"
  teaching_tips:
    - "Show the churn warning prominently — students often skip this. Ask them: if churn turns out to be 40% instead of 15%, what happens to the LTV? The calculation takes 30 seconds and the result is visceral."
    - "The fundraising trigger is the lesson most students miss. Fundraising takes time — typically 3-6 months for a seed round. If your runway model shows 6 months of runway at Month 9, you needed to start fundraising at Month 3."
---

# Unit Economics and Financial Modelling

In Lesson 8, you built a Business Model Canvas that showed Revenue Streams of $500/month and a Cost Structure of approximately $8/customer/month. Those two numbers look good in isolation. But the real question is not whether the unit economics look good — it is whether they work in reality, at scale, and across multiple scenarios.

There is an old principle in business that gets more true the more times you hear it: if you cannot make money on one customer, you cannot make money on a thousand. Unit economics is the discipline of understanding whether one customer relationship is worth pursuing at all — before you build the sales machine, hire the team, and spend the money to acquire thousands of them.

In Lesson 8, your Revenue Streams and Cost Structure blocks fed into a canvas. In this lesson, you model whether those blocks actually work. The unit economics you calculate here will appear directly in your investor pitch (Lesson 12) as Slide 6 — so they need to be rigorous, honest about assumptions, and stress-tested before you present them to anyone.

## Unit Economics Foundation

### Customer Acquisition Cost (CAC)

CAC is what it costs to acquire one customer. The critical distinction is between founder-led CAC and sustainable CAC.

**Founder-led CAC** is low because founders do not pay themselves market rate. If a founder spends 10 hours acquiring a customer, and values their time at their current deferred salary, the calculation produces a misleadingly small number.

**Sustainable CAC** assumes a market-rate founder cost — and is the only number you should use for planning.

| CAC Type        | Calculation                                              | Use Case                                      |
| --------------- | -------------------------------------------------------- | --------------------------------------------- |
| Founder-led CAC | Founder time × deferred hourly rate + tools              | Historical reference only                     |
| Sustainable CAC | Founder time × market-rate hourly cost + marketing spend | All planning, unit economics, investor models |

Using founder-led CAC to plan your business is like counting the volunteer labour on your team as free — it works until it does not.

### Lifetime Value (LTV): The Churn Dependency

LTV is total gross profit generated by a customer over their lifetime. The formula is simple:

```
LTV = MRR × 12 × (1 / annual churn rate) × gross margin
```

What is not simple is churn. Churn is the most dangerous assumption in any SaaS financial model, because a small change in churn produces an enormous change in LTV.

| Annual Churn | Average Lifetime | LTV (at $500/month, 90% margin) |
| ------------ | ---------------- | ------------------------------- |
| 10%          | 10 years         | $54,000                         |
| 15%          | 6.7 years        | $36,000                         |
| 30%          | 3.3 years        | $18,000                         |
| 40%          | 2.5 years        | $13,500                         |

A 4x difference in churn produces a 4x difference in LTV. If your 15% churn assumption turns out to be 40%, your LTV drops from $36,000 to $13,500 — and every other number in your financial model changes accordingly.

:::warning Churn Warning Standard
If churn is ASSUMED and not yet measured, every LTV calculation in your model carries high uncertainty. The `/financials` skill will flag this explicitly:

**⚠️ HIGH UNCERTAINTY — churn assumption is 15% annual, not yet measured.**
**Model validity depends heavily on this assumption. Validate churn at Month 12.**

Do not present a financial model to investors without this flag if churn is not measured.
:::

### LTV:CAC Ratio

The LTV:CAC ratio tells you how much value a customer creates relative to what it costs to acquire them.

| LTV:CAC Ratio | Assessment                               | Investor Signal                                   |
| ------------- | ---------------------------------------- | ------------------------------------------------- |
| < 3:1         | Poor — business likely not viable        | Major concern                                     |
| 3–5:1         | Acceptable — marginal unit economics     | Caution                                           |
| > 5:1         | Strong — healthy unit economics          | Positive                                          |
| > 10:1        | Exceptional — or churn is overoptimistic | Scrutinise the churn assumption before presenting |

### Payback Period and Breakeven

**Payback period** is how many months until the revenue from one customer covers the cost of acquiring them.

```
Payback period = CAC / monthly contribution margin
```

**Breakeven customer count** is how many customers you need to cover monthly fixed costs.

```
Breakeven = Monthly fixed costs / contribution margin per customer
```

## AP Automation Worked Example — Full Unit Economics

```
/financials
Build a unit economics model for my AP automation SaaS.
Inputs:
- Average contract value: $500/month = $6,000/year
- Average sales cycle: 3 weeks (founder-led)
- Founder time per deal: 10 hours total (outreach to close)
- Founder cost: market rate $4,000/month (for sustainable CAC)
- Onboarding time: 8 hours per customer (founder + 1 developer)
- Developer cost: $1,200/month each
- Churn assumption: 15% annually (ASSUMED — based on 1 pilot cancellation signal)
- Gross margin assumption: 90% (SaaS; minimal variable cost)

Calculate: CAC (founder-led and sustainable), LTV, LTV:CAC ratio,
payback period, contribution margin, breakeven customer count.
Flag all ASSUMED inputs.
```

**Sample unit economics output:**

```
UNIT ECONOMICS MODEL
Venture: AP Automation SaaS | Currency: USD | Date: [Date]
════════════════════════════════════════════════════════════
CUSTOMER ACQUISITION COST (CAC):

  Founder time per deal:       10 hours
  Founder hourly cost (market): $4,000/month ÷ 160 hours = $25/hr
  Founder CAC component:        10 hrs × $25 = $250
  Outreach overhead (tools):    $25 (LinkedIn, email tools)
  Sustainable CAC:              $275 per customer

  NOTE: Founder-led CAC (deferred salary basis) = ~$11.
  Use $275 for all planning — that is the sustainable cost.

LIFETIME VALUE (LTV):

  MRR per customer:             $500
  Annual churn rate:            15% ⚠️ ASSUMED — validate at Month 12
  Average customer lifetime:    1 / 0.15 = 6.67 years
  LTV (gross revenue):          $500 × 12 × 6.67 = $40,020
  Gross margin:                 90%
  LTV (gross profit):           $40,020 × 0.90 = $36,018 ≈ $36,000

KEY RATIOS:

  LTV:CAC ratio:      $36,000 / $275 = 131:1
  ASSESSMENT: Exceptional — but see warning below.
  At 40% churn:       LTV = $13,500; ratio = 49:1 — still very strong.
  Unit economics are not the constraint here.

  CAC payback:        $275 / ($500 × 90%) = 0.6 months
  Contribution margin: $500 × 90% = $450/customer/month

CASH FLOW BREAKEVEN:

  Monthly fixed costs:
    2 developers:          $2,400
    Founder salary:        $1,500 (deferred; model as real)
    Infrastructure (AWS):  $300
    Tools + API overhead:  $200
    Total monthly burn:    $4,400

  Contribution per customer: $450/month
  Breakeven: $4,400 / $450 = 9.8 → BREAKEVEN AT 10 CUSTOMERS
  Timeline to breakeven (at 1 customer/2 weeks pace): ~5 months

KEY WARNINGS:
  ⚠️ 15% annual churn is ASSUMED — validate at Month 12; model changes significantly
  ⚠️ CAC at scale (with sales reps, paid marketing) will be 3–5× higher — model this
  ⚠️ WhatsApp API cost is variable — spike at volume could compress margin
  ⚠️ A third developer before breakeven pushes breakeven to 13 customers
════════════════════════════════════════════════════════════
```

## Three-Scenario Revenue and Runway Model

Unit economics tell you about one customer. The revenue model tells you about all of them — how they accumulate over time, what the cash dynamics look like, and when (or whether) the business reaches self-sustainability.

```
/financials
Build a 24-month revenue and runway model.
Starting conditions:
- Funding: $100,000 (bootstrap + friends/family round)
- Current customers: 3 (at $500/month average)
- Burn rate: $4,400/month
- Growth assumption — Base: 2 new customers/month for first 6 months;
  4/month thereafter (post-product-market fit confirmation)
- Churn: 15% annually (1.25%/month)

Show: Monthly MRR, cumulative revenue, burn, net cash, runway.
Include Conservative scenario (1 customer/month; 20% annual churn)
and Optimistic scenario (4 customers/month from Month 3; 10% churn).
Mark: breakeven date and fundraising trigger (runway < 6 months)
in each scenario.
```

**Key outputs to look for in the model:**

| Scenario     | Breakeven Month | Fundraising Trigger | Cash at Month 18 |
| ------------ | --------------- | ------------------- | ---------------- |
| Base         | ~Month 7        | Month 9             | Positive         |
| Conservative | ~Month 12       | Month 6             | Near zero        |
| Optimistic   | ~Month 5        | Month 12            | Strong positive  |

The conservative scenario is the one that matters most. If the business cannot survive the conservative scenario, the funding plan needs revision.

:::info Fundraising Trigger: 6 Months Before Empty
A fundraising process typically takes 3–6 months from first outreach to cash in the bank. The fundraising trigger must be set when you have at least 6 months of runway remaining — not when cash is low. A model that shows fundraising at Month 10 when cash runs out at Month 12 means you are starting to raise at Month 4, not Month 10.
:::

## Sensitivity Analysis and Series A Readiness

### Sensitivity Analysis

Sensitivity analysis answers: which assumption, if wrong, hurts the most?

```
/financials
Run a sensitivity analysis on my 18-month base-case model.
Show how the breakeven date changes if:
- CAC is 2× my estimate
- Churn is 2× my estimate (30% annual instead of 15%)
- Revenue per customer is 30% lower ($350 instead of $500)
- Growth is 50% of base case (1 customer/month instead of 2)

For each: is the business still viable? What adjustments would I make?
```

The output reveals your most dangerous assumption. For AP automation, churn is the answer: doubling churn from 15% to 30% reduces LTV from $36K to $18K and pushes breakeven from Month 7 to Month 11. That is survivable. But if growth drops to 50% of base case, the fundraising timeline compresses severely — the business needs external capital much earlier.

### Series A Readiness Framework

Once you have a seed-funded business, the question becomes: what metrics do you need before raising a Series A?

General benchmarks for B2B SaaS (these vary by sector and geography — research your specific investor targets):

| Metric                | Typical Series A Minimum | Strong Series A             |
| --------------------- | ------------------------ | --------------------------- |
| ARR                   | $1M–$3M                  | $2M+                        |
| Year-over-year growth | > 100% (or > 15%/month)  | > 150%                      |
| Annual churn          | < 10%                    | < 5% (net revenue positive) |
| LTV:CAC ratio         | > 3×                     | > 5×                        |
| Reference customers   | 3–5 who will take calls  | 5–10 in target segment      |

These are not fixed rules. Exceptional teams at earlier stages raise Series A; teams at these metrics with weak product-market fit signals do not.

:::note For Intrapreneurs
For intrapreneurs, the financial model takes a different form. You are not raising from investors — you are making a business case to your innovation committee or sponsoring executive. Replace MRR with value delivered (cost savings, efficiency gains, revenue impact). Replace runway with budget cycle (how long until next budget review?). Replace Series A readiness with the metrics your organisation uses to evaluate continuing investment. The same rigour applies: state your assumptions, flag which ones are measured, and show the conservative scenario.
:::

## Exercise: Unit Economics and Financial Model

**Type:** Financial Modelling
**Time:** 75 minutes
**Goal:** Build a rigorous unit economics model and 18-month financial plan for your venture

From Exercise 4 (BMC Build), you have: a Revenue Streams block and a Cost Structure block. This exercise converts those blocks into a financial model that will withstand investor scrutiny.

**Step 1 — Unit economics foundation (15 minutes).**

```
/financials
Build unit economics for my venture:
[Paste your business model and revenue model from Exercise 4]
Estimates I have:
- Pricing: [Your best estimate]
- CAC: [How long and what cost to acquire one customer —
  use sustainable CAC, not founder-led CAC]
- Churn: [% who will cancel per year — be honest: is this ASSUMED or MEASURED?]
- Gross margin: [% of revenue remaining after variable costs]

Calculate: CAC (sustainable), LTV, LTV:CAC ratio, payback period,
contribution margin, breakeven customer count.
Flag: which assumptions are most uncertain and how they affect the numbers.
```

**Step 2 — 18-month model (25 minutes).**

```
/financials
Build an 18-month financial model with three scenarios:
Base:         [Your realistic growth assumption — customers per month]
Conservative: [Half the growth; 1.5× the churn; 20% higher CAC]
Optimistic:   [1.5× the growth; half the churn; 20% lower CAC]

Show month by month: new customers, churned customers, total customers,
MRR, monthly burn, net cash flow, cash balance, runway.
Mark: the breakeven date in each scenario.
Mark: when additional funding is needed in each scenario.
```

**Step 3 — Fundraising model (15 minutes).**

```
/financials
I am planning to raise [amount] at [valuation].
Model: what does this capital buy me in terms of runway and milestones?
What MRR / ARR should I reach before raising the next round?
What is a reasonable post-money valuation for the next round based on
typical SaaS multiples at my scale?
```

**Step 4 — Sensitivity analysis (20 minutes).**

```
/financials
Run a sensitivity analysis on my 18-month model.
Show how the breakeven date changes if:
- CAC is 2× my estimate
- Churn is 2× my estimate
- Revenue per customer is 30% lower than expected
- Growth is 50% of base case

For each: is the business still viable? What adjustments would I make?
```

**Deliverable:** Unit economics table, 18-month financial model (three scenarios), fundraising model, sensitivity analysis. Save this deliverable — Lesson 12 (Investor Pitch) uses your unit economics as Slide 6 of the pitch deck.

:::note Keep This File
Your unit economics and financial model are critical inputs for Lesson 10 (market sizing validation — does the TAM support the projections?), Lesson 11 (GTM — your CAC assumption drives channel selection), and Lesson 12 (pitch deck — Slide 6 is your financial model). Keep everything in your Cowork session.
:::

## Try With AI

:::tip Try With AI
Use these prompts in Cowork or your preferred AI assistant.

**Reproduce** — Run the chapter's worked example:

```
/financials
Build unit economics for AP automation SaaS:
- Price: $500/month
- Sustainable CAC: $275 (market-rate founder cost)
- Annual churn: 15% (ASSUMED — not yet measured at Month 12)
- Gross margin: 90%
- Monthly fixed costs: $4,400 (2 developers + founder + infrastructure)

Calculate: LTV, LTV:CAC ratio, payback, breakeven customer count.
Show the LTV at 40% churn as a sensitivity check.
Flag all assumed inputs.
```

**What you are learning:** The churn warning is the most important output — not the 131:1 ratio. The ratio is impressive but fragile. The warning tells you exactly where the model is most likely to fail, and what to do about it.

**Adapt** — Modify for a different pricing model:

```
/financials
Build unit economics for a SaaS product with:
- Price: [Your price point]
- Sustainable CAC: [Your estimate — include the calculation method]
- Annual churn: [Your assumption — label it ASSUMED or MEASURED]
- Gross margin: [Your estimate]

Calculate: LTV, LTV:CAC ratio, payback, breakeven.
At what churn rate does LTV:CAC drop below 3:1?
```

**What you are learning:** The "at what churn rate does LTV:CAC drop below 3:1?" question is the stress test that reveals your margin of safety. If the ratio drops below 3:1 at 25% annual churn, and your assumption is 15%, you have a 10 percentage point margin of safety. If it drops below 3:1 at 17% annual churn, you have almost no margin.

**Apply** — Use your own venture data:

```
/financials
Build an 18-month financial model for my venture.
[Paste your unit economics from Exercise 5 Step 1, or describe:
- Pricing
- Realistic growth rate (customers per month)
- Starting capital
- Monthly fixed costs]

Show three scenarios (base, conservative, optimistic).
Mark the fundraising trigger point in each scenario.
```

**What you are learning:** The conservative scenario is the one investors will stress-test in their diligence. If you cannot articulate what happens in the conservative scenario and why the business survives it, you are not ready to fundraise.
:::

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 10: Competitive Intelligence and Market Sizing →](./10-competitive-intelligence-market-sizing.md)
