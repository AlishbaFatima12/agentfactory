---
name: financials
version: 1.0
description: >
  Activate for: unit economics, CAC, LTV, customer acquisition cost, lifetime
  value, payback period, churn, gross margin, breakeven, runway, burn rate,
  MRR, ARR, monthly recurring revenue, annual recurring revenue, financial model,
  revenue model, revenue projections, fundraising model, scenario analysis,
  sensitivity analysis, how much money do I need, how long will the money last,
  how many customers to break even, what are my unit economics, Series A readiness.
plugin-command: /financials
---

## FINANCIAL MODELLING WORKFLOW

### Task Types

TYPE 1: UNIT ECONOMICS
  Input: Pricing; CAC inputs; churn assumption; gross margin
  Output: CAC, LTV, LTV:CAC, payback period, contribution margin, breakeven count

TYPE 2: REVENUE AND RUNWAY MODEL
  Input: Starting conditions + growth assumptions
  Output: Month-by-month model (3 scenarios); breakeven date; fundraising trigger

TYPE 3: FUNDRAISING MODEL
  Input: Raise amount; current state; milestones
  Output: What the capital buys; Series A readiness criteria; valuation framework

TYPE 4: SENSITIVITY ANALYSIS
  Input: Base model + key variable ranges
  Output: How breakeven and runway shift under pessimistic assumptions

TYPE 5: SERIES A READINESS ASSESSMENT
  Input: Current metrics
  Output: What metrics Series A investors expect; gap analysis; timeline to readiness

### Unit Economics Output Structure

  UNIT ECONOMICS MODEL
  Venture: [Name] | Currency: [USD / local] | Date: [Date]
  ════════════════════════════════════════════════════════════
  CUSTOMER ACQUISITION COST (CAC):
    [Method: list all cost inputs and calculation]
    Founder-led CAC:        [Amount] (artificially low — founder not at market rate)
    Sustainable CAC:        [Amount] (use market-rate founder + any marketing spend)
    [Note: use Sustainable CAC for all planning; Founder-led CAC understates true cost]

  LIFETIME VALUE (LTV):
    MRR per customer:       [Amount]
    Annual churn:           [%] (ASSUMED / MEASURED — specify)
    Average lifetime:       [1 / churn rate = years]
    LTV (gross revenue):    [MRR × 12 × lifetime]
    Gross margin:           [%]
    LTV (gross profit):     [LTV × gross margin]
    [WARNING: If churn is assumed, LTV is unreliable. Validate churn at Month 12.]

  KEY RATIOS:
    LTV:CAC ratio:          [LTV / CAC] — [assessment: <3 poor; 3–5 acceptable; >5 strong; >10 exceptional]
    CAC payback:            [CAC / monthly contribution = months]
    Contribution margin:    [Revenue - variable cost = $ and %]

  CASH FLOW BREAKEVEN:
    Monthly fixed costs:    [List major items + total]
    Contribution/customer:  [Monthly revenue × gross margin]
    Breakeven customer N:   [Fixed costs / contribution per customer]
    Timeline to breakeven:  [At current acquisition pace]

  KEY WARNINGS:
    ⚠️ [Flag any assumption that is not yet measured]
    ⚠️ [Flag any assumption where a 2x error would change the business viability]
  ════════════════════════════════════════════════════════════

### Three-Scenario Model Structure

  SCENARIO LABELS:
    BASE:         Your realistic expectation
    CONSERVATIVE: Half the growth; 1.5× the churn; 20% higher CAC
    OPTIMISTIC:   1.5× the growth; half the churn; 20% lower CAC

  FOR EACH SCENARIO, SHOW MONTH BY MONTH:
    New customers this month
    Churned customers this month
    Total customers (cumulative - churn)
    MRR (total customers × ARPU)
    Monthly burn (fixed + variable costs)
    Net cash flow (MRR contribution - burn)
    Cumulative cash balance
    Runway remaining (months at current burn)

  MARK ON THE MODEL:
    📍 Breakeven date (MRR contribution ≥ burn)
    📍 Fundraising trigger point (runway < 6 months)
    📍 Series A readiness (target ARR milestone)

### Churn Warning Standard

Churn is the most dangerous assumption in SaaS financial models.

  At 10% annual churn: average lifetime = 10 years; LTV = 10× ARPU × margin
  At 40% annual churn: average lifetime = 2.5 years; LTV = 2.5× ARPU × margin

A 4× difference in churn produces a 4× difference in LTV.
If churn is assumed (not measured), flag the model as:
⚠️ HIGH UNCERTAINTY — churn assumption is [X]%, not yet measured.
Model validity depends heavily on this assumption. Validate at Month 12.

### Series A Readiness Framework

General benchmarks (B2B SaaS — adjust for sector and geography):

  MINIMUM VIABLE METRICS for Series A conversation:
  — ARR: $1M–$3M (or local equivalent at similar purchasing power)
  — Growth rate: >100% year-over-year (or >15% month-over-month)
  — Churn: <10% annual (net revenue retention ideally >100%)
  — LTV:CAC: >3× (ideally >5×)
  — At least 3–5 reference customers who will take investor calls

  These are NOT fixed rules — exceptional teams with strong traction
  at earlier stages raise Series A; ordinary teams may need more.
  Always research the specific investors you are targeting for their
  actual criteria in your sector and geography.

## NEVER DO THESE

- NEVER use founder-time CAC as the basis for fundraising models —
  it understates the true cost of customer acquisition at scale
- NEVER present revenue projections without stating all key assumptions
  (growth rate, churn rate, pricing) in the same output
- NEVER show a runway model without a fundraising trigger point —
  the most common startup failure is running out of money because
  the fundraising process started too late
- NEVER call churn "low" without measured data — assumed churn of 10%
  is not low churn; it is an unvalidated assumption
- NEVER model only the base case — always include conservative scenario;
  investors will ask "what if growth is half of your base case?"
