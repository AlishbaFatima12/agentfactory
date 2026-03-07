---
slug: /Business-Domain-Agent-Workflows/banking-domain-agents/exercises-basel-aml
sidebar_position: 13
title: "Exercises — Basel and AML Deep Practice"
description: "Four extended exercises covering Basel III capital ratio calculation under the Standardised Approach, ICAAP stress testing, AML alert investigation with SAR drafting, and sanctions screening across multiple regimes"
keywords:
  [
    "Basel III exercises",
    "capital ratio calculation",
    "Standardised Approach RWA",
    "ICAAP stress test",
    "AML alert investigation",
    "SAR filing exercise",
    "sanctions screening",
    "banking regulation practice",
    "PRA capital requirements",
    "OFAC sanctions",
  ]
chapter: 21
lesson: 13
duration_minutes: 55

# HIDDEN SKILLS METADATA
skills:
  - name: "Calculate Basel III Capital Ratios Under the Standardised Approach"
    proficiency_level: "B2"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Data Literacy"
    measurable_at_this_level: "Student can classify assets by risk weight, calculate credit RWA, operational risk RWA using the Business Indicator Approach, and compute CET1, Tier 1, and Total Capital ratios for a complete bank balance sheet"

  - name: "Design and Execute an ICAAP Stress Scenario"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can design a severe-but-plausible stress scenario with macroeconomic drivers, translate macro variables into credit risk parameters, calculate stressed ECL and capital ratios, and determine whether the bank survives the stress with or without management actions"

  - name: "Investigate AML Alerts and Sanctions Screening Cases"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can investigate transaction monitoring alerts, identify money laundering typologies, determine SAR filing requirements, and evaluate sanctions screening hits for true match versus false positive, applying OFAC, EU, and UK sanctions frameworks"

learning_objectives:
  - objective: "Calculate Basel III capital ratios for a UK bank under the Standardised Approach, including credit RWA, operational risk RWA, and all three capital ratios"
    proficiency_level: "B2"
    bloom_level: "Apply"
    assessment_method: "Student correctly classifies all asset classes, applies SA risk weights, computes operational risk using BIA, and calculates CET1, Tier 1, and Total Capital ratios in Exercise 3"

  - objective: "Design an ICAAP stress scenario and calculate stressed capital ratios to determine capital adequacy under severe conditions"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Student translates BoE severe scenario parameters into stressed PDs, LGDs, and ECL, calculates NII impact, determines stressed CET1 ratio trajectory over 3 years, and identifies management actions in Exercise 5"

  - objective: "Investigate AML alerts and sanctions screening hits, distinguishing true suspicious activity from false positives and applying the correct regulatory response"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Student correctly triages 3 AML alerts and 3 sanctions screening cases, identifying typologies, filing requirements, and escalation paths in Exercises 6 and 8"

cognitive_load:
  new_concepts: 3
  concepts_list:
    - "ICAAP: the bank's own internal assessment of capital needs under stress, separate from regulatory minimums"
    - "Business Indicator Approach for operational risk: BI component calculation using interest, services, and financial components"
    - "Multi-regime sanctions screening: applying OFAC, EU, and UK sanctions frameworks simultaneously to a single transaction"
  assessment: "3 new concepts at B2 level — within the B2 limit of 10. Exercises primarily apply Basel concepts from Lessons 6-8 and AML concepts from Lessons 9-10 at portfolio scale. The new concepts extend rather than replace prior knowledge."

differentiation:
  extension_for_advanced: "For Exercise 5, design a reverse stress test: starting from the point of failure (CET1 breaches 4.5%), work backwards to determine what combination of GDP decline, unemployment, and property crash would be required. Then assess whether this scenario is plausible."
  remedial_for_struggling: "Focus on Exercise 3 (capital ratios) and Exercise 6 Alert 1 (structuring). If you can calculate a CET1 ratio and identify a structuring pattern, you have the core skills for both Basel and AML."
---

# Exercises — Basel and AML Deep Practice

:::info ACS (Bank of England Annual Cyclical Scenario)
**The Bank of England's yearly stress test that forces UK banks to prove they can survive a severe economic downturn -- with specific GDP, unemployment, and property price shocks prescribed by the regulator.**

In the 2023 ACS, banks had to model surviving GDP falling 5%, unemployment reaching 8.5%, and house prices dropping 31% -- then show their CET1 ratio stayed above the 4.5% hard minimum throughout.

The ACS is the UK's primary tool for calibrating bank-specific capital buffers -- a bank that barely survives the scenario may be told to hold more CET1 than the Basel minimum.
:::

:::info DFAST (Dodd-Frank Act Stress Testing)
**The US equivalent of the UK's ACS -- a Federal Reserve-mandated stress test requiring US banks with $250 billion or more in total consolidated assets (threshold raised from $10 billion by EGRRCPA, 2018) to project capital ratios over 9 quarters under severely adverse, adverse, and baseline scenarios.**

A US bank with $500 billion in assets and a starting CET1 ratio of 12.5% must show it stays above 4.5% after modelling $80 billion in projected losses over the 9-quarter stress horizon.

DFAST results are publicly disclosed (unlike the UK's confidential ICAAP), creating market discipline -- investors and counterparties can see which banks are most vulnerable to stress.
:::

In Lesson 11, you saw how IFRS 9, Basel, and AML interact in a cross-pillar cascade. Now you build fluency in Basel capital calculation and AML investigation through four extended exercises. Exercise 3 builds a complete capital ratio from raw balance sheet data. Exercise 5 stress-tests that capital under a Bank of England severe scenario. Exercises 6 and 8 take you through AML alert investigation and sanctions screening — the operational side of financial crime compliance.

These exercises use the banking plugin's `basel-capital`, `basel-rwa`, `aml-typologies`, and `aml-sar-drafting` skills. The AI assists with computation and pattern matching, but you make the professional judgments: Is this alert suspicious or a false positive? Does the bank survive the stress scenario? What management actions restore capital adequacy?

## Exercise 3: Basel III Capital Ratio — Standardised Approach

**Jurisdiction**: United Kingdom (PRA regulated)
**Duration**: 45 minutes
**Skills used**: `basel-capital`, `basel-rwa`

### Capital Structure

| Capital Component                 | Amount       |
| --------------------------------- | ------------ |
| CET1: Share capital               | GBP 120M     |
| CET1: Share premium               | GBP 35M      |
| CET1: Retained earnings           | GBP 130M     |
| CET1 Deduction: Goodwill          | -GBP 0M      |
| CET1 Deduction: Intangible assets | -GBP 0M      |
| **CET1 Capital**                  | **GBP 285M** |
| AT1: Perpetual bonds              | GBP 45M      |
| **Tier 1 Capital**                | **GBP 330M** |
| Tier 2: Subordinated debt         | GBP 60M      |
| **Total Capital**                 | **GBP 390M** |

### Asset Portfolio

| Asset Class                        | Exposure   | SA Risk Weight         | Notes                                       |
| ---------------------------------- | ---------- | ---------------------- | ------------------------------------------- |
| UK Gilts                           | GBP 850M   | 0%                     | Sovereign, AA-rated                         |
| Bank of England reserves           | GBP 420M   | 0%                     | Central bank deposits                       |
| Claims on Barclays (A+ rated)      | GBP 180M   | 20%                    | Bank exposure, short-term                   |
| Corporate bonds (BBB rated)        | GBP 240M   | 100%                   | Unrated corporates default to 100%          |
| SME loans                          | GBP 320M   | 85%                    | SME supporting factor applied               |
| Residential mortgages (LTV 50-80%) | GBP 1,450M | 35%                    | Standard residential                        |
| High-LTV mortgages (LTV &gt; 80%)  | GBP 185M   | 50%                    | Higher risk weight for high LTV             |
| Commercial real estate (LTV 65%)   | GBP 380M   | 100%                   | CRE default weight                          |
| Consumer unsecured                 | GBP 210M   | 75%                    | Retail exposure                             |
| Stage 3 NPLs                       | GBP 45M    | 150%                   | Non-performing, specific provision &lt; 20% |
| Undrawn revolving credit           | GBP 190M   | Apply 40% CCF then 75% | Off-balance-sheet, retail                   |

### Operational Risk

| Component                      | Value                                     |
| ------------------------------ | ----------------------------------------- |
| Business Indicator (BI)        | GBP 480M                                  |
| Approach                       | Business Indicator Approach (BIA)         |
| Internal Loss Multiplier (ILM) | 1.0 (default for banks without loss data) |

The Business Indicator Approach calculates operational risk capital as:

- **BI Component**: For BI between GBP 1B and GBP 30B, marginal coefficient is 15%. For BI up to GBP 1B, coefficient is 12%.
- Since BI = GBP 480M (below GBP 1B): BI Component = GBP 480M x 12% = GBP 57.6M
- **Op Risk Capital** = BI Component x ILM = GBP 57.6M x 1.0 = GBP 57.6M
- **Op Risk RWA** = Op Risk Capital / 8% = GBP 57.6M / 0.08 = **GBP 720M**

**Market Risk RWA**: GBP 35M (provided — calculated separately by the trading desk)

### Your Tasks

**Step 1: Calculate credit RWA.** For each asset class, multiply the exposure by its risk weight. For off-balance-sheet items (undrawn revolving credit), first apply the CCF to convert to a credit equivalent, then apply the risk weight.

**Step 2: Calculate total RWA.** Sum credit RWA + operational risk RWA + market risk RWA.

**Step 3: Calculate all three capital ratios.**

- CET1 Ratio = CET1 Capital / Total RWA
- Tier 1 Ratio = Tier 1 Capital / Total RWA
- Total Capital Ratio = Total Capital / Total RWA

**Step 4: Compare to regulatory minimums.**

| Ratio         | Minimum | + CCB (2.5%) | Combined | Your Bank |
| ------------- | ------- | ------------ | -------- | --------- |
| CET1          | 4.5%    | 7.0%         | 7.0%     | ?         |
| Tier 1        | 6.0%    | 8.5%         | 8.5%     | ?         |
| Total Capital | 8.0%    | 10.5%        | 10.5%    | ?         |

**Step 5: Buffer analysis.** How much CET1 (in GBP) sits above the combined buffer requirement? If the bank wanted to absorb a GBP 50M loss, what would the revised CET1 ratio be?

---

## Exercise 5: ICAAP Stress Test

**Jurisdiction**: United Kingdom (Bank of England Annual Cyclical Scenario)
**Duration**: 50 minutes
**Skills used**: `basel-capital`, `ifrs9-ecl`, `ifrs9-staging`

### Starting Position

| Metric       | Value      |
| ------------ | ---------- |
| CET1 Ratio   | 12.8%      |
| CET1 Capital | GBP 384M   |
| Total RWA    | GBP 3,000M |
| Loan book    | GBP 2,800M |
| Stage 1 %    | 90%        |
| Stage 2 %    | 8%         |
| Stage 3 %    | 2%         |

### Bank of England Severe Scenario Parameters

| Variable            | Year 1            | Year 2            | Year 3            |
| ------------------- | ----------------- | ----------------- | ----------------- |
| GDP growth          | -4.2%             | -1.5%             | +1.8%             |
| Unemployment        | 8.5%              | 9.2%              | 7.8%              |
| House prices        | -31% (cumulative) | -35% (cumulative) | -30% (cumulative) |
| Commercial property | -40% (cumulative) | -45% (cumulative) | -38% (cumulative) |

### Stress Translation Parameters

**Stage migration under stress:**

| Migration            | Pre-stress  | Stressed                                          |
| -------------------- | ----------- | ------------------------------------------------- |
| Stage 1 proportion   | 90%         | 78% (8% to Stage 2 migrates to 22%)               |
| Stage 2 proportion   | 8%          | 22%                                               |
| Stage 3 from Stage 1 | 0%          | 2% migrates to Stage 3 (net: Stage 1 goes to 68%) |
| Stage 3 from Stage 2 | 2% of total | 12% of Stage 2 migrates to Stage 3 (additional)   |
| Stage 3 proportion   | 2%          | Increases from prior migrations                   |

Clarification: Under stress, Stage 2 rises from 8% to 22% of the book. Additionally, 2% of Stage 1 migrates directly to Stage 3, and 12% of the new Stage 2 balance migrates to Stage 3. Calculate the final stage distribution.

**LGD stress:**

| Collateral             | Pre-stress LGD | Stressed LGD |
| ---------------------- | -------------- | ------------ |
| Residential mortgages  | 25%            | 40%          |
| Commercial real estate | 35%            | 58%          |

**NII (Net Interest Income) impact:**

| Period | SONIA Movement | NII Impact                                     |
| ------ | -------------- | ---------------------------------------------- |
| Year 1 | +250bp         | +GBP 28M (assets reprice faster than deposits) |
| Year 2 | -150bp         | -GBP 15M (rates fall, margins compress)        |

### Your Tasks

**Step 1: Calculate stressed stage distribution.** Starting from the GBP 2,800M loan book, compute the GBP amount in each stage after all migrations.

**Step 2: Calculate stressed ECL.** Using the stressed LGDs and stage-specific PDs (use the same PD parameters from Exercise 1 as a baseline, or estimate reasonable stressed PDs), calculate the total ECL under the severe scenario.

**Step 3: Calculate the CET1 impact.** The additional ECL charge (stressed ECL minus pre-stress ECL) flows through to retained earnings:

- Post-tax impact = Additional ECL x (1 - 25% tax rate)
- Year 1 NII offset: +GBP 28M x (1 - 25% tax) = +GBP 21M
- Year 2 NII offset: -GBP 15M x (1 - 25% tax) = -GBP 11.25M

**Step 4: Determine stressed CET1 ratio trajectory.** Calculate the CET1 ratio at:

- End of Year 1 (ECL charge + NII benefit)
- End of Year 2 (cumulative ECL + NII)
- End of Year 3 (some recovery begins)

**Step 5: Management actions.** If the stressed CET1 falls below the combined buffer (7.0%), identify three management actions the bank could take to restore capital adequacy. Quantify the CET1 impact of each.

---

## Exercise 6: AML Alert Review and SAR Decision

**Jurisdiction**: United Kingdom (NCA / POCA 2002)
**Duration**: 45 minutes
**Skills used**: `aml-typologies`, `aml-sar-drafting`

You are the Level 2 AML analyst reviewing three alerts escalated from the transaction monitoring system. For each alert, determine: Is this suspicious? Should a SAR be filed? What is the typology?

### Alert 1: Mohammed Al-Rashid

**Customer profile**: Self-employed taxi driver, London. Annual declared income GBP 32,000. Account opened 3 years ago.

**Transaction pattern**: 8 cash deposits over 14 days:

| Date   | Amount    | Branch        |
| ------ | --------- | ------------- |
| Day 1  | GBP 9,200 | Whitechapel   |
| Day 2  | GBP 8,800 | Mile End      |
| Day 4  | GBP 9,500 | Stratford     |
| Day 5  | GBP 9,100 | Whitechapel   |
| Day 8  | GBP 8,900 | Bethnal Green |
| Day 9  | GBP 9,400 | Mile End      |
| Day 11 | GBP 9,300 | Stratford     |
| Day 14 | GBP 8,800 | Whitechapel   |

**Total**: GBP 73,000 in 14 days. No single deposit exceeds GBP 10,000.

**Your analysis:**

1. What money laundering typology does this pattern match?
2. Why are the amounts significant (what threshold is being avoided)?
3. What additional information would you request before making a SAR decision?
4. Draft your recommendation: file SAR, close as false positive, or request further investigation.

### Alert 2: Meridian Trading Ltd

**Customer profile**: Import/export company registered 18 months ago. Director: James Chen. Declared business: electronics distribution.

**Transaction pattern**: 12 incoming SWIFT wires over 60 days from UAE, Hong Kong, and Cyprus, totalling GBP 847,000. Within 24 hours of each receipt, outgoing transfers totalling GBP 812,000 to 4 different UK companies.

| Incoming Source            | Amount   | Outgoing Destination     | Amount              |
| -------------------------- | -------- | ------------------------ | ------------------- |
| Dubai Trading FZE (UAE)    | GBP 245K | Northern Components Ltd  | GBP 198K            |
| HK Global Supplies (HK)    | GBP 312K | Midlands Distribution Co | GBP 287K            |
| Limassol Ventures (Cyprus) | GBP 290K | Glasgow Wholesale Ltd    | GBP 327K            |
|                            |          |                          | Total out: GBP 812K |

**Red flags to evaluate:**

- Rapid throughput (funds in and out within 24 hours)
- Multiple high-risk jurisdictions (UAE, Hong Kong, Cyprus)
- Company age (18 months — newly established)
- Pass-through pattern (minimal retention of funds)

**Your analysis:**

1. What typologies might this represent? (Consider trade-based money laundering, layering)
2. What due diligence would you perform on the 4 UK recipient companies?
3. Is the GBP 35K retained balance consistent with legitimate business?
4. SAR recommendation with rationale.

### Alert 3: Amara Diallo

**Customer profile**: UK resident, employed as university lecturer. Flagged as PEP — her sister is a minister in the Nigerian government.

**Transaction**: Single incoming wire of GBP 320,000 from a Nigerian law firm. Stated purpose: "Legal settlement — family property dispute."

**Your analysis:**

1. What PEP-related risks does this transaction present?
2. What Enhanced Due Diligence (EDD) steps are required?
3. Can you accept the "legal settlement" explanation at face value? What would you verify?
4. SAR recommendation, considering both the PEP status and the jurisdiction of origin.

---

## Exercise 8: Sanctions Screening

**Jurisdiction**: UK/EU/OFAC (multi-regime screening required)
**Duration**: 40 minutes
**Skills used**: `aml-cdd-edd`

Three payments require sanctions screening. For each, determine: true match, false positive, or requires escalation. Apply all three sanctions regimes (UK, EU, OFAC).

### Payment 1: UAE Steel Transaction

| Field               | Value                             |
| ------------------- | --------------------------------- |
| Originator          | Ali Hassan Al-Farsi               |
| Originator country  | UAE                               |
| Beneficiary         | Gulf Steel LLC                    |
| Beneficiary country | Dubai, UAE                        |
| Amount              | USD 285,000                       |
| Purpose             | Steel rods — construction project |

**Screening considerations:**

- "Al-Farsi" is a common Gulf name — check against OFAC SDN list and UK sanctions list
- Steel is a dual-use commodity in some sanctions regimes
- UAE is not a sanctioned jurisdiction but is a known transshipment point
- Verify whether Gulf Steel LLC appears on any sanctions list or is owned by a sanctioned entity

### Payment 2: Swiss-to-UK Aerospace

| Field               | Value                             |
| ------------------- | --------------------------------- |
| Originator          | Zermatt Holdings AG               |
| Originator country  | Switzerland                       |
| Beneficiary         | Rostec Engineering Components Ltd |
| Beneficiary country | United Kingdom                    |
| Amount              | EUR 1,200,000                     |
| Purpose             | Aerospace engineering components  |

**Screening considerations:**

- "Rostec" is the name of a major Russian state defence conglomerate on EU and UK sanctions lists
- Is "Rostec Engineering Components Ltd" (UK) the same entity or a different company with a similar name?
- Aerospace components may be dual-use goods requiring export licences
- Switzerland has adopted EU sanctions but with some differences in implementation
- What verification steps distinguish a true match from a name coincidence?

### Payment 3: Turkey-to-Egypt with Iranian Connections

| Field               | Value                    |
| ------------------- | ------------------------ |
| Originator          | Bosphorus Trade Finance  |
| Originator country  | Istanbul, Turkey         |
| Beneficiary         | Noor Al-Arab             |
| Beneficiary country | Cairo, Egypt             |
| Amount              | USD 45,000               |
| Purpose             | Textile import financing |

**Screening considerations:**

- Intelligence indicates Bosphorus Trade Finance has historical connections to an Iranian entity on the OFAC SDN list
- Turkey is not sanctioned but is a known conduit for sanctions evasion
- The amount is relatively small — does that reduce suspicion or is it consistent with a structuring pattern?
- Egypt is not sanctioned but verify the beneficiary is not a front for a sanctioned entity
- What is the "50% rule" under OFAC and does it apply here?

**For each payment, provide:**

1. Screening result against each regime (UK, EU, OFAC)
2. True match, false positive, or escalation required
3. If escalation: what additional information is needed
4. Recommended action: process, block, or hold for review

## Try With AI

Use these prompts in Claude or your preferred AI assistant to work through these exercises.

### Prompt 1: Building the Capital Ratio

```
Calculate Basel III capital ratios for this UK bank under the
Standardised Approach:

Capital: CET1 GBP 285M, AT1 GBP 45M, Tier 2 GBP 60M

Assets and risk weights:
- UK Gilts GBP 850M (0%)
- BoE reserves GBP 420M (0%)
- Bank claims (A+) GBP 180M (20%)
- Corporate bonds (BBB) GBP 240M (100%)
- SME loans GBP 320M (85%)
- Residential mortgages (LTV 50-80%) GBP 1,450M (35%)
- High-LTV mortgages GBP 185M (50%)
- CRE GBP 380M (100%)
- Consumer unsecured GBP 210M (75%)
- NPLs GBP 45M (150%)
- Undrawn revolving GBP 190M (40% CCF then 75% RW)

Op Risk: BI GBP 480M, 12% coefficient, ILM 1.0
Market Risk RWA: GBP 35M

Calculate: credit RWA, total RWA, CET1 ratio, Tier 1 ratio,
Total Capital ratio. Compare each to minimum + CCB.
```

**What you are learning:** Capital ratio calculation is the fundamental Basel skill. Every risk weight reflects a regulatory judgment about the riskiness of that asset class. By computing RWA yourself, you understand why banks with identical total assets can have very different capital ratios — it depends on the composition of the balance sheet and the risk weights that apply.

### Prompt 2: AML Alert Investigation

```
Investigate this AML alert:

Customer: Mohammed Al-Rashid, taxi driver, annual income GBP 32K
Pattern: 8 cash deposits in 14 days, amounts between GBP 8,800
and GBP 9,500, across 4 branches, total GBP 73,000

1. What money laundering typology does this match?
2. Why are ALL deposits below GBP 10,000?
3. What is the UK reporting threshold and why is it relevant?
4. What additional checks would you perform?
5. Draft a SAR recommendation paragraph.

Then investigate this second alert:
Customer: Meridian Trading Ltd, import/export, 18 months old
Pattern: 12 SWIFT wires from UAE/HK/Cyprus totalling GBP 847K,
same-day outgoing GBP 812K to 4 UK companies

Identify the typology and explain why rapid throughput from
high-risk jurisdictions through a newly established company
is a red flag.
```

**What you are learning:** AML investigation is pattern recognition combined with professional judgment. The structuring pattern (deposits just below reporting thresholds) is one of the most common typologies, but identifying it requires knowing the threshold and understanding why someone would deliberately avoid it. The trade-based money laundering pattern is more complex — it uses legitimate-looking trade flows to move illicit funds across borders.

### Prompt 3: Sanctions Screening Decision

```
Screen these three payments against UK, EU, and OFAC sanctions:

Payment 1: Ali Hassan Al-Farsi (UAE) sending USD 285K to Gulf
Steel LLC (Dubai) for steel rods. Common name region.

Payment 2: Zermatt Holdings AG (Switzerland) sending EUR 1.2M
to Rostec Engineering Components Ltd (UK) for aerospace parts.
Note: "Rostec" is a sanctioned Russian entity name.

Payment 3: Bosphorus Trade Finance (Turkey) sending USD 45K to
Noor Al-Arab (Egypt) for textiles. Intelligence shows historical
Iranian entity connections.

For each: Is this a true match, false positive, or escalation?
What verification steps distinguish them? Explain the OFAC 50%
rule and whether it applies to any of these cases.
```

**What you are learning:** Sanctions screening is not binary. Payment 1 tests your ability to handle common-name false positives in high-volume regions. Payment 2 tests whether you can distinguish a UK company from a sanctioned Russian entity that happens to share a name — a critical skill because blocking a legitimate UK company is a compliance failure in the other direction. Payment 3 tests the OFAC 50% rule (entities 50% or more owned by a sanctioned party are themselves sanctioned) and the concept of sanctions evasion through third countries.
