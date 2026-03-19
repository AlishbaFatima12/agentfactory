---
name: market
version: 1.0
description: >
  Activate for: market, market size, TAM SAM SOM, competitive analysis,
  competitive landscape, competitors, competition, who else does this,
  market research, industry research, market sizing, bottom-up model,
  addressable market, serviceable market, competitive intelligence,
  how big is the market, who are my competitors, market positioning,
  differentiation, moat, unfair advantage, why us not them, SWOT.
plugin-command: /market
---

## MARKET INTELLIGENCE WORKFLOW

### Task Types

TYPE 1: COMPETITIVE LANDSCAPE SCAN
  Input: Product/problem area; known competitors; target segment
  Output: Competitor profiles (positioning, pricing, strengths, weaknesses, threat level)
          + strategic recommendation

TYPE 2: MARKET SIZING (BOTTOM-UP)
  Input: Target segment definition; pricing; usage data from pilots
  Output: TAM / SAM / SOM with bottom-up methodology + value capture validation

TYPE 3: DIFFERENTIATION MAP
  Input: Competitor list; our value proposition
  Output: Positioning map; where we win; where we lose; defensibility assessment

TYPE 4: MARKET TIMING ANALYSIS
  Input: Problem area
  Output: "Why now?" — forces making this the right time (tech, regulation, behaviour, cost)

TYPE 5: MOAT ASSESSMENT
  Input: Venture context
  Output: Current moats; moats being built; how defensible each is; what to invest in

### Competitive Intelligence Output Structure

  COMPETITIVE LANDSCAPE — [Product Area]
  Date: [Date] | Segment: [Target segment]
  ════════════════════════════════════════════════════════════
  DIRECT COMPETITORS (solving the same problem for the same customer):

    [Competitor Name]
    Positioning:    [How they describe themselves; who they target]
    Pricing:        [If available; or "undisclosed — estimated $X based on...]
    Strengths vs. us: [Where they are genuinely stronger]
    Weaknesses vs. us: [Where we have an advantage]
    Threat level:   🔴 HIGH / 🟡 MEDIUM / 🟢 LOW
    Threat reason:  [Specific — funding, distribution, brand, feature parity]

    [Repeat for each direct competitor — typically 3–6]

  INDIRECT ALTERNATIVES (solving the problem differently):

    [Alternative — could be "Excel + manual process" or an adjacent tool]
    Why customers use it: [Inertia / price / familiarity / integration]
    Our advantage:        [Specific — why we win against this alternative]

  STRATEGIC RECOMMENDATION:
    Where to win:   [The specific customer/use case where we have clear advantage]
    Where to avoid: [Segments where we are outgunned by incumbents]
    Differentiation to defend: [The one claim we must never let a competitor match]
  ════════════════════════════════════════════════════════════

### Bottom-Up Market Sizing Method

Step 1 — COUNT the customers:
  How many organisations in your target segment exist in your geography?
  Source: business registries, census data, industry associations, LinkedIn counts

Step 2 — QUALIFY the reachable subset:
  Of those, how many meet the ICP criteria?
  (sector, size, technology environment, buying authority)

Step 3 — PRICE the opportunity:
  What does one customer pay per year? (from unit economics)

Step 4 — CALCULATE:
  TAM = Total addressable count × annual price
        (everyone who has the problem, globally)
  SAM = Reachable count in your geography × annual price
        (the companies you could realistically sell to)
  SOM = Your 3–5 year capture target × annual price
        (what you will actually go after — 1–5% of SAM is typical)

Step 5 — VALIDATE the value capture ratio:
  SaaS rule of thumb: your price should be <10% of the value you deliver.
  If value delivered = $10,000/year per customer, and you charge $1,000/year: healthy.
  If you charge $8,000/year: customers will eventually find alternatives.

### Bottom-Up Market Size Output Structure

  MARKET SIZE MODEL — [Venture Name] — [Date]
  ════════════════════════════════════════════════════════════
  STEP 1: UNIVERSE
    Total companies in target geography matching basic profile: [N]
    Source: [Specific source + date]

  STEP 2: QUALIFIED SAM
    Filter criteria: [List — sector, size, technology, buying authority]
    Estimated SAM companies: [N]
    Confidence: [HIGH / MEDIUM / LOW] — [explain basis]

  STEP 3: UNIT ECONOMICS
    Annual revenue per customer: $[X]
    Based on: [Pricing from financials.md]

  STEP 4: MARKET CALCULATIONS
    TAM: [N global companies] × $[X] = $[X]B
    SAM: [N reachable companies] × $[X] = $[X]M
    SOM (5-year): [N target customers] × $[X] = $[X]M ARR
         = [%] of SAM (typically 1–5%)

  STEP 5: VALUE CAPTURE VALIDATION
    Value delivered per customer per year: $[X] (from discovery data)
    Our annual price: $[X]
    Capture ratio: [%] — [HEALTHY < 10% / WATCH 10-20% / RISKY > 20%]

  INVESTOR NOTE: Bottom-up market size is more credible than
  top-down analyst estimates. Know your numbers and sources.
  ════════════════════════════════════════════════════════════

### Moat Assessment Framework

  MOAT TYPE 1 — DATA:
    Do you accumulate data that gets more valuable with use?
    Example: AI accuracy improves with more training data; each customer
    contributes data that benefits all customers.
    Durability: HIGH — hard to replicate without time and customers

  MOAT TYPE 2 — SWITCHING COSTS:
    How painful is it for a customer to switch to a competitor?
    Example: Integration with customer's ERP; trained on their data;
    historical records only in your system.
    Durability: MEDIUM-HIGH — increases with tenure

  MOAT TYPE 3 — NETWORK EFFECTS:
    Does the product get more valuable as more people use it?
    Example: Marketplace with buyers and sellers; community with shared knowledge.
    Durability: HIGH — but only true network effects count

  MOAT TYPE 4 — BRAND:
    Do customers trust you more than alternatives by reputation alone?
    Durability: MEDIUM — can be built over 5+ years; fragile early

  MOAT TYPE 5 — REGULATORY / COMPLIANCE:
    Are you certified or approved in ways that competitors are not?
    Durability: MEDIUM — regulatory moats can be matched; but slow

  MOAT TYPE 6 — DISTRIBUTION:
    Do you have access to customers that competitors cannot easily reach?
    Example: Exclusive channel partnership; embedded in a platform.
    Durability: MEDIUM — partnerships can change

## NEVER DO THESE

- NEVER claim "no direct competition" — if there is genuinely no competition,
  there is likely no market; or you have not looked hard enough
- NEVER use top-down analyst TAM figures without a bottom-up sanity check
  (e.g. "the global AP market is $X trillion" — how many of those customers
  will you actually sell to?)
- NEVER describe a competitor only in terms of their weaknesses —
  investors will have heard of them; describe their real strengths honestly,
  then explain why you win anyway
- NEVER claim a moat you do not yet have — describe moats you are building,
  not moats you aspire to; "we will have a data moat when we reach X customers"
  is honest; "we have a data moat" with 3 customers is not
