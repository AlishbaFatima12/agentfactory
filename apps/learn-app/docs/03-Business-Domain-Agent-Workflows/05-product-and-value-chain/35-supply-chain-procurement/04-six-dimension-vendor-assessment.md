---
slug: /Business-Domain-Agent-Workflows/supply-chain-procurement/six-dimension-vendor-assessment
sidebar_position: 4
title: "Six-Dimension Vendor Assessment"
description: "Go beyond classification — run a full six-dimension assessment across Commercial, Operational, Financial, Compliance, Strategic, and Geopolitical dimensions using the /vendor-assess skill to surface the risks your annual review never finds"
keywords:
  [
    "vendor assessment",
    "six dimension assessment",
    "supplier evaluation",
    "commercial assessment",
    "operational assessment",
    "financial health vendor",
    "compliance assessment",
    "strategic dependency",
    "geopolitical risk",
    "vendor-assess skill",
    "supply chain plugin",
    "vendor risk management",
  ]
chapter: 35
lesson: 4
duration_minutes: 45

# HIDDEN SKILLS METADATA
skills:
  - name: "Run a Six-Dimension Vendor Assessment Using the /vendor-assess Skill"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can invoke /vendor-assess with structured vendor data, interpret the six-dimension output across all assessment areas, and produce a ranked action list from the findings"

  - name: "Configure Vendor Risk Thresholds in supply-chain.local.md"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Content-Creation"
    measurable_at_this_level: "Student can set OTD thresholds, quality rejection limits, financial visibility requirements, and escalation contacts for their vendor portfolio in the local configuration file"

  - name: "Interpret and Prioritise Assessment Findings Across Risk Dimensions"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can read a multi-dimension assessment output, distinguish critical from moderate findings, and write a ranked action plan with owners and timelines"

learning_objectives:
  - objective: "Explain the purpose of each of the six assessment dimensions and identify which data sources inform each one"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Given a set of assessment findings, student correctly maps each finding to its dimension and identifies the data source it came from (ERP, Companies House, QMS, etc.)"

  - objective: "Configure vendor risk thresholds in supply-chain.local.md for OTD, quality, financial, and escalation parameters"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces a completed local configuration covering OTD thresholds by tier, quality rejection limits by category, and at least two escalation routing rules"

  - objective: "Run a full /vendor-assess assessment and produce a ranked action plan from the output"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Student submits a /vendor-assess output for a real or realistic vendor, with a ranked action list of at least three items showing owner, action, and deadline — prioritised by risk severity"

cognitive_load:
  new_concepts: 6
  concepts_list:
    - "Commercial dimension — contract status, pricing model, payment terms, IP clauses"
    - "Operational dimension — OTD, lead time variance, quality rejection rate, capacity"
    - "Financial dimension — revenue trend, credit rating, DSO, financial visibility"
    - "Compliance dimension — certifications, sanctions screening, modern slavery, GDPR"
    - "Strategic dimension — switching cost, relationship investment, innovation contribution"
    - "Geopolitical / Sustainability dimension — country risk, Scope 3, Tier 2 visibility"
  assessment: "6 concepts at B1-B2 level — at the upper boundary. Load is managed by using the KIFTL running example throughout, anchoring each dimension in familiar vendor data before introducing the framework label. Students who completed Lesson 3 have already processed the classification layer, so the assessment dimensions are additive rather than foundational."

differentiation:
  extension_for_advanced: "The vendor-assessment.md SKILL.md configures dimension weights by tier — Strategic vendors receive full six-dimension coverage while Commodity vendors receive only Commercial and Operational. Research how weighted scoring models work in enterprise vendor management systems (Ariba, Jaggaer, Coupa). What are the tradeoffs of equal-weight vs. tier-weighted assessment? How would you modify the SKILL.md to express different weights for each dimension by tier?"
  remedial_for_struggling: "Focus on three dimensions first: Operational (OTD and quality — these have clear numbers from ERP), Commercial (contract status and expiry — verifiable from your records), and Strategic (sole-source vs. alternatives — a binary question). If you can answer the OTD, contract expiry, and dependency questions for a vendor, you have covered the most actionable risk signals. The remaining three dimensions (Financial, Compliance, Geopolitical) add depth once you have the fundamentals."

teaching_guide:
  key_points:
    - "Classification (Lesson 3) determines the depth of assessment — Strategic vendors get all six dimensions at full depth; Commodity vendors get Commercial and Operational only"
    - "Financial dimension is the most commonly skipped — and for sole-source vendors, zero financial visibility is a critical risk, not a documentation gap"
    - "Operational data lives in your ERP — the skill needs MCP access or you paste the data; it cannot retrieve ERP data that is not connected"
    - "The assessment output is only as good as the data provided — a six-dimension framework with zero financial data still flags the gap explicitly"
  misconceptions:
    - "A good OTD score means this vendor is low risk. Correction: operational performance is one of six dimensions. A vendor with 97% OTD and zero financial visibility is still a critical risk — the OTD score simply means they are delivering well today. It says nothing about whether they will exist next year."
    - "The /vendor-assess output is the final verdict. Correction: the output is a structured analysis of the data you provided. It flags gaps where data is missing and recommends actions. The quality of the analysis depends entirely on the quality of the input data."
    - "Compliance dimension only applies to regulated industries. Correction: sanctions screening applies to every vendor, regardless of industry. Processing an invoice from a sanctioned entity creates legal exposure. Modern slavery statements are a UK statutory requirement above the threshold. These are universal obligations."
  discussion_prompts:
    - "For your most critical vendor, which of the six dimensions gives you the least visibility? What would it cost — in time and money — to get that visibility? Is that cost proportionate to the risk?"
    - "The financial dimension requires requesting audited accounts from private vendors. What is your organisation's current practice — and what would a vendor's refusal to provide accounts tell you?"
  teaching_tips:
    - "Walk through the full KIFTL assessment output line by line before the exercise. Students should understand every flag before they try to run their own assessment."
    - "The configuration step (Step 3 of the exercise) is where most value is created. Encourage students to use real thresholds from their organisation, not the defaults. A threshold that does not match operational reality generates false alarms."
---

# Six-Dimension Vendor Assessment

You classified KIFTL as a Tier 4 Bottleneck in Lesson 3. You know it is your most dangerous low-spend vendor — sole-source dependency, 84% on-time delivery, no qualified backup. But classification only answers the question "what kind of vendor is this?" The assessment answers the question "what exactly is wrong, and what do I do about it?"

This lesson takes the classification you built and converts it into an actionable risk picture across six dimensions: Commercial, Operational, Financial, Compliance, Strategic, and Geopolitical/Sustainability. Each dimension has its own data sources, its own flags, and its own recommended actions. Together, they give you a complete picture of a vendor relationship — the kind of picture that should inform every contract renewal, every review meeting, and every procurement decision that touches this vendor.

The `/vendor-assess` skill runs this assessment systematically. Your job is to provide the data, interpret the output, configure the thresholds that reflect your organisation's risk tolerance, and turn findings into ranked actions.

## Why Six Dimensions — Not One

A single KPI — say, on-time delivery — creates a dangerous illusion of control. A vendor with 97% OTD can still fail catastrophically if:

- Their contract expires next month with an auto-renewal clause you missed (Commercial)
- Their only manufacturing facility is in a country facing export restrictions (Geopolitical)
- They are in administration proceedings not yet visible from public filings (Financial)
- Their ISO 9001 certification lapsed six months ago (Compliance)
- They have quietly told two other customers they are exiting the market (Strategic)

Each of these failures can occur while the OTD number looks healthy. Six-dimension assessment exists to prevent you from optimising one metric while ignoring five others.

The depth of assessment is determined by the vendor's classification tier. Strategic vendors receive a full assessment across all six dimensions at maximum depth. Tactical vendors receive Commercial, Operational, and Financial at standard depth. Commodity vendors receive Commercial and Operational only. Bottleneck vendors — despite low spend — receive the same depth as Strategic vendors, because their failure risk justifies it.

## The Six Dimensions

### Dimension 1: Commercial

Commercial assessment answers: "What does our contract actually say, and does the commercial arrangement expose us to risk?"

Key data points:

| Factor             | What You Are Looking For                       | Red Flag                                           |
| ------------------ | ---------------------------------------------- | -------------------------------------------------- |
| Contract status    | Active / expiring / auto-renewal               | Auto-renewal without documented notice window      |
| Expiry date        | Days until expiry                              | < 90 days — immediate action required              |
| Pricing model      | Fixed / index-linked / open book               | Fixed price on commodity category (index exposure) |
| Payment terms      | Standard for sector/market                     | Unusually short terms creating cash pressure       |
| Volume commitments | Minimum order quantities; penalty clauses      | Minimum commitment below your forecast volume      |
| IP ownership       | Especially for manufactured-to-spec components | Your design, their tooling — who owns it?          |

For KIFTL: their contract shows a fixed price agreement that expires with the contract. The stainless steel index has moved roughly 12% since the agreement was signed — KIFTL is absorbing that exposure now, but at contract renewal, they will correct it. Commercial risk: medium. The more pressing issue is that the auto-renewal clause means the contract renews automatically if you miss the 60-day notice window — and your team has not reviewed it in two years.

### Dimension 2: Operational

Operational assessment answers: "Are they actually delivering what we need, at the quality we need, reliably?"

Data sources: Your ERP (goods receipt dates vs. PO delivery dates), your QMS (quality rejection records), and any capacity data from direct vendor conversations.

| Metric                     | KIFTL Data | Threshold | Status             |
| -------------------------- | ---------- | --------- | ------------------ |
| On-time delivery (12M avg) | 84%        | >90%      | ❌ Below threshold |
| Average lead time          | 17 days    | ≤21 days  | ✅ Within range    |
| Lead time variance         | ±6 days    | ±3 days   | ⚠️ High variance   |
| Quality rejection rate     | 2.3%       | <1.5%     | ⚠️ Elevated        |

An OTD of 84% means roughly one in six deliveries is late. For a sole-source supplier of production-critical fasteners, this is not a mild concern — it is a production disruption risk that occurs approximately every six weeks. The 2.3% quality rejection rate adds further pressure: industry standard for fasteners is below 1.5%.

:::caution Declining Trends Matter as Much as Thresholds
A vendor at 91% OTD (above a 90% threshold) is technically compliant. But if that 91% is down from 96% eighteen months ago, the trajectory matters. The `/vendor-assess` skill flags declining trends even when the current number is within threshold — because trajectory predicts where you will be at the next review.
:::

### Dimension 3: Financial

Financial assessment answers: "Is this vendor financially viable for the foreseeable future?"

For publicly listed vendors, this is a structured analysis of public filings and analyst commentary. For private vendors — which includes most mid-market suppliers — it requires requesting audited accounts directly.

Key signals:

- **Revenue trend** (last 3 years): growing / stable / declining
- **Profitability**: EBIT margin trajectory — below 3% signals marginal viability
- **Debt to equity**: deteriorating ratio = increasing financial stress
- **Days Sales Outstanding (DSO)**: lengthening DSO = cash pressure (they are not collecting from their customers)
- **Credit rating**: Creditsafe / D&B — any downgrade or adverse flag

For KIFTL: they are a private Pakistani manufacturer. No public filings. No credit score available from UK databases. Financial visibility: zero. This is a critical risk flag — not because they are necessarily financially distressed, but because you have no way to know. For a sole-source vendor, "I don't know" on financial health is itself a risk.

The correct action: request the last two years of audited accounts as a condition of contract renewal. If they refuse, that is important information.

### Dimension 4: Compliance

Compliance assessment answers: "Are we exposed to legal or regulatory risk through this vendor relationship?"

| Compliance Area        | What to Check                           | Critical Trigger                          |
| ---------------------- | --------------------------------------- | ----------------------------------------- |
| Quality certifications | ISO 9001 / sector-specific              | Expired — immediate escalation            |
| Sanctions screening    | OFAC, EU, UK HMT lists                  | Any match — stop all activity immediately |
| Modern Slavery Act     | UK statutory statement (>£36M turnover) | Absent where required                     |
| Data protection        | GDPR/DPA where data is shared           | No DPA in place                           |
| Trade compliance       | Export licences; import documentation   | Missing documentation                     |
| ESG / ethical sourcing | Scope 3 disclosure; conflict minerals   | Sector-specific triggers                  |

For KIFTL: ISO 9001 certification status is not confirmed in your records. Pakistan PDPA compliance needs verification if any personal data flows through the relationship. Trade compliance documentation should be checked against the import records. None of these are confirmed red flags yet — they are gaps in documentation that need resolution.

:::danger Sanctions Screening Is Not Optional
If `/vendor-assess` returns a sanctions match against OFAC, EU, or UK HMT lists: stop all processing immediately. Do not pay the next invoice. Do not proceed with any outstanding orders. Escalate to your Finance Director and Legal team. Processing a transaction with a sanctioned entity creates criminal liability regardless of whether you knew about the sanction.
:::

### Dimension 5: Strategic

Strategic assessment answers: "How dependent are we on this vendor, and what would it take to move?"

| Factor                  | KIFTL Position                                 |
| ----------------------- | ---------------------------------------------- |
| Dependency              | Sole-source — no alternative qualified         |
| Switching timeline      | 90+ days minimum (qualification required)      |
| Switching cost          | Tooling, sampling, testing, production ramp-up |
| Relationship investment | 6-year relationship; institutional knowledge   |
| Innovation contribution | None documented                                |
| Strategic alignment     | No joint planning in evidence                  |

KIFTL scores maximum on dependency risk. The switching timeline exceeds 90 days, meaning any supply disruption would cause a production halt of at least 3 months if you had to qualify a new supplier from scratch. This is the same finding that drove the Bottleneck classification in Lesson 3 — the strategic dimension formalises it with the full remediation picture.

### Dimension 6: Geopolitical / Sustainability

Geopolitical assessment answers: "Are there country-level or supply chain depth risks we cannot see from the vendor relationship alone?"

| Factor                   | What to Assess                                                  |
| ------------------------ | --------------------------------------------------------------- |
| Country risk             | Political stability; trade restriction risk; sanctions exposure |
| Currency risk            | Contract currency vs. payment currency — are you exposed?       |
| Supply chain depth       | Do you know KIFTL's own suppliers (Tier 2)?                     |
| Carbon footprint         | Scope 3 reporting — increasingly mandatory for listed buyers    |
| Geographic concentration | Are all your fastener suppliers in the same country?            |

For KIFTL: Pakistan carries moderate country risk — trade relationships are subject to political volatility, and currency movement between PKR and GBP/USD is material over a multi-year contract. No Tier 2 visibility means you do not know where KIFTL sources their steel. If their steel supplier faces an export restriction, you have no early warning. This is the "unknown unknowns" dimension — worth documenting even when no flags are active.

## Using `/vendor-assess` for Full Assessment

The classification output from Lesson 3 is the first section of a full assessment. When you provide richer vendor data, the skill produces a complete six-dimension output.

**Full assessment invocation for KIFTL:**

```
/vendor-assess
Vendor: Karachi Industrial Fasteners Ltd
Category: Direct materials — stainless steel fasteners
Annual spend: PKR 8.5M (~$30,000 USD)
Dependency: Sole-source — no alternative qualified for M8/M10 fasteners
Jurisdiction: Pakistan / UK (contracts under English law)
Relationship: 6 years; no formal review in 2 years
OTD (12M): 84%
Lead time avg: 17 days
Quality rejection: 2.3%
Contract: Active; fixed price; expires [date]; auto-renewal clause present
Financial data: Not publicly available — private company
ISO 9001: Not confirmed in records
Country: Pakistan
```

**Full assessment output:**

```
VENDOR ASSESSMENT: Karachi Industrial Fasteners Ltd
════════════════════════════════════════════════════════════
Classification:  TIER 4 — BOTTLENECK
  Rationale: Low spend (PKR 8.5M) but sole-source for critical
  components (M8/M10 fasteners). Production dependency without
  qualified alternative = high strategic risk.

── COMMERCIAL ──────────────────────────────────────────────
Contract status:   Active — auto-renewal clause present
                   ⚠️ Notice window: 60 days before renewal date
                   ACTION: Confirm next renewal date; set calendar alert
Pricing:          Fixed price — stainless steel index +~12% since signed
                   ⚠️ Commodity exposure at next renegotiation
Payment terms:    Net 45 — standard for Pakistan manufacturing
IP ownership:     Not documented — VERIFY for tooling ownership

── OPERATIONAL ─────────────────────────────────────────────
OTD (12M):         84%   Threshold: >90%  Status: ❌ Below threshold
Lead time avg:     17 days   Variance: ±6 days  Status: ⚠️ High variance
Quality rejection: 2.3%  Threshold: <1.5%  Status: ⚠️ Elevated

── FINANCIAL ───────────────────────────────────────────────
Financial visibility: NONE (private company; no public filings available)
🔴 CRITICAL: Zero financial visibility on sole-source supplier
ACTION: Request last 2 years audited accounts as contract renewal condition

── COMPLIANCE ──────────────────────────────────────────────
ISO 9001:    Not confirmed — verify and request current certificate
Sanctions:   Screening required — not logged in records
Pakistan PDPA: Verify if personal data is transferred
Trade compliance: Check customs records for complete import documentation

── STRATEGIC ───────────────────────────────────────────────
Dependency:  SOLE-SOURCE — no qualified alternative
Switching:   90+ days minimum (qualification + sampling + production ramp)
Investment:  6-year relationship; institutional knowledge held by 2 contacts
Backup:      None in qualification pipeline

── GEOPOLITICAL / SUSTAINABILITY ───────────────────────────
Country risk:    Pakistan — moderate political stability; currency volatility
Currency:        PKR/GBP exposure — monitor over contract term
Tier 2 supply:  Not mapped — steel source unknown
Scope 3:        No disclosure obtained

RISK SUMMARY
🔴 CRITICAL: Sole-source with no backup vendor qualified or in pipeline
🔴 CRITICAL: Zero financial visibility on sole-source supplier
🔴 HIGH: OTD 84% — below 90% threshold; production disruption risk
⚠️ MEDIUM: Quality rejection 2.3% — above 1.5% threshold
⚠️ MEDIUM: Auto-renewal clause — notice window may be missed
⚠️ MEDIUM: ISO 9001 certification not confirmed

RECOMMENDED ACTIONS — RANKED BY URGENCY
1. [URGENT — this week] Confirm contract renewal date and set 60-day notice alert
2. [30 days] Initiate alternative vendor qualification — 90-day target for 1 backup
3. [30 days] Request last 2 years audited accounts as condition of renewal
4. [30 days] Formal delivery performance review — set KPI targets with written agreement
5. [60 days] Obtain current ISO 9001 certificate; schedule audit if unavailable
6. [Contract renewal] Renegotiate pricing with commodity index linkage
7. [Contract renewal] Negotiate exit provisions and minimum notice period
════════════════════════════════════════════════════════════
```

:::note Your output will vary
The exact wording depends on the data you provide and the thresholds configured in your `supply-chain.local.md`. The teaching point is the structure — each dimension produces findings and each finding has a specific recommended action with a timeline. The output is a work plan, not just an analysis.
:::

## Exercise: Six-Dimension Assessment Deep Dive (Exercise 1, Part B)

**Type:** Configuration and Applied Practice
**Time:** 50 minutes
**Plugin commands:** `/vendor-assess`
**Goal:** Configure your risk thresholds and run full six-dimension assessments on your top strategic vendors

:::note Prerequisites
This exercise builds directly on the vendor classification register you created in [Exercise 1, Part A (Lesson 3)](./03-vendor-classification-kraljic.md). You need your completed five-vendor classification register before continuing. If you have not completed it, do so before proceeding — the assessment depth and thresholds depend on the tier assignments you made there.
:::

### Step 1 — Configure Your Risk Thresholds

Before running assessments, configure your organisation's thresholds in `supply-chain.local.md`. Open Cowork and run:

```
/vendor-assess type:"configuration-build"
```

The skill will walk you through a configuration interview covering:

- OTD thresholds by vendor tier (e.g., >95% for Strategic, >90% for Tactical/Bottleneck, >85% for Commodity)
- Quality rejection limits by category (e.g., <1% for direct materials, <3% for indirect)
- Financial visibility requirements (which tiers require audited accounts)
- Escalation contacts and authority levels for each risk flag
- Contract notice period requirements by tier

Work through the interview to produce a `supply-chain.local.md` configuration tailored to your organisation. If you do not have a real organisation to configure for, use these defaults as a starting point and adjust them to reflect a hypothetical manufacturing company.

### Step 2 — Gather Data for Your Top 5 Vendors

For each of your five vendors from Exercise 1 (Part A), collect:

- Contract status and expiry date
- OTD and quality rejection data from your ERP (or estimated figures for the exercise)
- Financial visibility: do you have accounts? Credit rating? Or zero visibility?
- Certification status: ISO 9001 or equivalent
- Dependency: sole-source / dual-source / panel

### Step 3 — Run `/vendor-assess` for Each Strategic Vendor

For each Strategic or Bottleneck vendor from your classification register, run a full assessment:

```
/vendor-assess
Vendor: [Name]
Category: [Product/service category]
Annual spend: [Amount]
Dependency: [Sole-source / preferred / approved-panel / alternatives available]
OTD (12M): [X%]
Lead time avg: [X days]
Quality rejection: [X%]
Contract: [Active/expiring; expiry date; auto-renewal: yes/no]
Financial data: [Available/not available; accounts requested/not requested]
Certifications: [ISO status]
Country: [Vendor country]
```

Record the risk summary for each vendor — specifically the Critical and High flags.

### Step 4 — Identify Your Most Dangerous Bottleneck Vendor

From your classification register, select your highest-risk Bottleneck vendor — the one with the greatest operational dependency and the least current management attention. Run a full six-dimension assessment.

For the assessment findings, answer these three questions:

1. What is the single most important risk this vendor presents?
2. What one action would reduce that risk most — and what would it cost?
3. What early warning signal would tell you this risk is materialising before it becomes a crisis?

### Step 5 — Build Your Ranked Action List

Consolidate the findings across all your assessments into a single ranked action list. Format:

| Priority | Action | Vendor | Owner | Deadline |
| -------- | ------ | ------ | ----- | -------- |
| 1        |        |        |       |          |
| 2        |        |        |       |          |
| 3        |        |        |       |          |

Rank by risk severity: critical findings first, then high, then medium. Within each severity level, rank by feasibility (quick wins first). The output of this step is your vendor risk work plan — the document you would present to your CPO or CFO.

**Deliverable:** Completed `supply-chain.local.md` configuration, six-dimension assessment outputs for all Strategic and Bottleneck vendors from your classification register, a full deep-dive assessment for your highest-risk Bottleneck vendor, and a ranked action list with owners and deadlines. Save your classification register with assessments added — you will reference it in Lesson 13 (Vendor Exit Protocol) when planning the exit for your highest-risk vendor.

:::note Keep This File
The assessed vendor register you build here is referenced in [Lesson 7 (Supplier Risk)](./07-supplier-risk-five-dimensions.md), where you add risk scoring to each assessment. It is also the foundation for [Lesson 13 (Vendor Exit Protocol)](./13-vendor-exit-protocol.md), Exercise 8.
:::

## Try With AI

:::tip Try With AI
**Reproduce**: Apply what you just learned to a simple case.

```
Run a six-dimension vendor assessment for this vendor:

Vendor: EastPak Components Ltd
Category: Direct materials — aluminium extrusions
Annual spend: £185,000
Dependency: Dual-source — we have one other qualified supplier (NordicExtrude)
OTD (last 12 months): 91%
Lead time: 18 days average, ±4 days variance
Quality rejection rate: 0.8%
Contract: Active; expires in 4 months; no auto-renewal
Financial: Private company; we have not requested accounts in 3 years
ISO 9001: Certified; expires in 6 months
Country: UK

Classify the vendor, then assess all six dimensions and produce a
ranked action list.
```

**What you are learning:** Reading a full six-dimension output builds the pattern recognition needed to spot which findings are noise (low-severity flags on well-managed vendors) and which are signals requiring immediate action. EastPak has two near-term time triggers (contract expiry and ISO renewal) that are easy to miss in an annual review cycle.

**Adapt**: Modify the scenario to match your organisation.

```
Choose a vendor from your own portfolio — ideally one you classify
as Strategic or Bottleneck. Gather these data points:
- OTD for the last 12 months (from your ERP or estimates)
- Quality rejection rate
- Contract expiry date and auto-renewal terms
- Whether you hold current audited accounts
- ISO 9001 or relevant certification status

Run /vendor-assess with your data and compare the output to your
current internal assessment of this vendor. Which risks did you
already know about? Which did the six-dimension structure surface
that you had not formally documented?
```

**What you are learning:** The six-dimension framework surfaces risks that single-metric monitoring misses. Comparing the structured output to your current knowledge reveals the gaps in your existing vendor management process.

**Apply**: Extend to a new situation the lesson didn't cover directly.

```
Your organisation has just acquired a business with 40 vendors in
its supply chain. You need to prioritise which vendors to assess
first using the six-dimension framework.

Design a triage approach:
1. What minimum data would you collect on all 40 vendors to
   prioritise the assessment order?
2. Which of the six dimensions would you assess first — and why?
3. What would trigger an immediate escalation before the formal
   assessment is complete?

Produce a triage protocol as a structured document.
```

**What you are learning:** In a portfolio acquisition scenario, you cannot run full assessments on 40 vendors simultaneously. Triage design requires understanding which dimensions surface the most critical risks fastest — and which data you can obtain without vendor cooperation (public filings, sanctions screening) vs. which requires vendor engagement (audited accounts, certification copies).
:::

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 5: Three-Way Match Rule Design →](./05-three-way-match-rule-design.md)
