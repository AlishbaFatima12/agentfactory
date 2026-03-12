---
slug: /Business-Domain-Agent-Workflows/banking-domain-agents/basel-rwa-risk-weights
sidebar_position: 7
title: "Risk-Weighted Assets -- SA and IRB Approaches"
description: "Apply the Standardised Approach risk weight table to a loan portfolio, understand how the Internal Ratings-Based approach uses bank models to derive risk weights, and calculate the Basel IV output floor that constrains IRB banks"
keywords:
  [
    "risk-weighted assets",
    "RWA",
    "Standardised Approach",
    "Internal Ratings-Based",
    "IRB",
    "Basel IV output floor",
    "72.5% floor",
    "credit risk",
    "risk weights",
    "banking regulation",
    "CRR3",
    "PRA Basel 3.1",
    "banking AI agents",
  ]
chapter: 21
lesson: 7
duration_minutes: 50

skills:
  - name: "Apply Standardised Approach Risk Weights to a Loan Portfolio"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Data Literacy"
    measurable_at_this_level: "Student can take a portfolio of assets across multiple classes, assign the correct SA risk weight to each class, and calculate total RWA"

  - name: "Explain the IRB Risk-Weight Function and Its Key Inputs"
    proficiency_level: "B2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Student can describe how the IRB function converts PD, LGD, maturity, and correlation into a risk weight, and explain the difference between Foundation IRB and Advanced IRB"

  - name: "Calculate the Basel IV Output Floor Impact"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can compare IRB-derived RWA against 72.5% of SA RWA and determine whether the output floor constrains the bank's reported capital ratio"

learning_objectives:
  - objective: "Apply SA risk weights to a multi-asset-class loan portfolio and calculate total risk-weighted assets"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student correctly assigns risk weights from the SA table to each asset class in Exercise 4 and computes total RWA"

  - objective: "Explain how the IRB approach derives risk weights from a bank's internal models and distinguish Foundation IRB from Advanced IRB"
    proficiency_level: "B2"
    bloom_level: "Understand"
    assessment_method: "Student can describe the IRB risk-weight function inputs (PD, LGD, M, R) and explain which parameters each IRB variant allows the bank to model"

  - objective: "Calculate the output floor impact on an IRB bank's RWA and determine whether the floor constrains the bank's capital ratio"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Given IRB RWA and SA RWA for the same portfolio, student computes the floor-adjusted RWA and recalculates the capital ratio"

cognitive_load:
  new_concepts: 7
  concepts_list:
    - "Standardised Approach (SA) -- prescribed risk weights by asset class and rating"
    - "Key SA risk weights (sovereigns 0%, banks 20-150%, corporates 20-150%, retail 75%, mortgages 20-70%)"
    - "Internal Ratings-Based (IRB) approach -- model-derived risk weights"
    - "IRB risk-weight function inputs (PD, LGD, maturity, asset correlation)"
    - "Foundation IRB vs Advanced IRB (who estimates LGD and EAD)"
    - "Basel IV output floor -- IRB RWA cannot fall below 72.5% of SA RWA"
    - "Credit Conversion Factors (CCFs) for off-balance-sheet items"
  assessment: "7 concepts at B1-B2 level -- within the 7-10 limit. The IRB formula is presented conceptually (B2) while SA risk weights and the output floor are applied computationally (B1). Students already understand RWA from Lesson 6 where they used it as the denominator for capital ratios."

differentiation:
  extension_for_advanced: "Research the full IRB risk-weight formula (Basel II/III Annex) and compute a risk weight for a corporate exposure with PD=2%, LGD=45%, M=2.5 years, using the supervisory correlation formula. Compare the result to the 100% SA risk weight for the same unrated corporate."
  remedial_for_struggling: "Focus on the SA risk weight table and the output floor concept. If you can look up a risk weight for any asset class and explain that the output floor means IRB banks cannot report RWA below 72.5% of what SA would produce, you have the essential knowledge."
---

# Risk-Weighted Assets -- SA and IRB Approaches

:::info IRB vs SA (Internal Ratings-Based vs Standardised Approach)
**Two methods for calculating risk-weighted assets: SA uses fixed regulatory risk weights (e.g., 35% for mortgages), while IRB lets banks use their own credit models to derive risk weights (which can be as low as 10-15% for well-secured portfolios).**

A GBP 1 billion mortgage portfolio produces RWA of GBP 350M under SA (35% risk weight) but only GBP 120M under IRB (12% model-derived risk weight). Same loans, same risk, but GBP 230M difference in RWA.

The approach a bank uses directly determines how much capital it must hold -- IRB banks report stronger capital ratios, which is why regulators introduced the output floor.
:::

:::info Output Floor (Basel IV)
**A rule that prevents IRB banks from reporting RWA below 72.5% of what the Standardised Approach would produce for the same portfolio.**

If SA RWA = GBP 8 billion and IRB RWA = GBP 4.9 billion, the floor = 72.5% x GBP 8B = GBP 5.8 billion. The bank must report GBP 5.8 billion, not GBP 4.9 billion.

The output floor closes a loophole where banks with optimised models could hold less capital than their actual risk warranted -- it is being phased in from 50% (2025) to 72.5% (2030).
:::

In Lesson 6, you built the capital stack and calculated CET1, Tier 1, and Total Capital ratios. Every one of those ratios had the same denominator: risk-weighted assets. You used RWA as a given number. This lesson opens that denominator and examines how it is calculated -- because two banks with identical loan portfolios can report different RWA depending on which approach they use.

The Basel framework offers two approaches for calculating credit risk RWA. The **Standardised Approach (SA)** uses fixed risk weights prescribed by the regulator for each asset class. The **Internal Ratings-Based (IRB) approach** allows banks to use their own credit risk models to derive risk weights. IRB typically produces lower RWA than SA -- which is why Basel IV introduced the **output floor**: IRB banks cannot report RWA below 72.5% of what the Standardised Approach would produce for the same portfolio.

## The Standardised Approach

Under SA, every asset is assigned a risk weight based on its asset class and, where relevant, its external credit rating. The bank multiplies each exposure by its risk weight to arrive at RWA.

### SA Risk Weight Table

| Asset Class                                 | Conditions                   | Risk Weight |
| ------------------------------------------- | ---------------------------- | ----------- |
| Cash and central bank reserves              | --                           | 0%          |
| Sovereign bonds                             | AAA to AA-                   | 0%          |
| Sovereign bonds                             | A+ to A-                     | 20%         |
| Sovereign bonds                             | BBB+ to BBB-                 | 50%         |
| Bank exposures                              | AAA to AA-                   | 20%         |
| Bank exposures                              | A+ to A- (short-term claims) | 20%         |
| Bank exposures                              | A+ to A- (long-term claims)  | 50%         |
| Bank exposures                              | BBB+ to BBB-                 | 50%         |
| Corporate exposures                         | AAA to AA-                   | 20%         |
| Corporate exposures                         | A+ to BBB-                   | 75%         |
| Corporate exposures                         | Unrated                      | 100%        |
| Retail exposures (including SME)            | --                           | 75%         |
| Residential mortgage                        | LTV ≤ 50%                    | 20%         |
| Residential mortgage                        | LTV 50-80%                   | 35%         |
| Residential mortgage                        | LTV &gt; 80%                 | 50%         |
| Commercial real estate                      | LTV ≤ 60%                    | 60%         |
| Consumer credit (unsecured)                 | --                           | 75%         |
| Past-due exposures (Stage 3 / &gt; 90 days) | --                           | 150%        |
| Equity holdings                             | --                           | 100-250%    |

:::info Reading the Table
A 35% risk weight on a GBP 1 million mortgage means the bank must hold capital as if the exposure were GBP 350,000 -- not the full GBP 1 million. The risk weight reflects the regulator's assessment of the loss probability for that asset class. Sovereign bonds from AAA-rated governments carry 0% because the regulator treats the default probability as negligible. Past-due loans carry 150% because the borrower has already demonstrated distress.
:::

### Off-Balance-Sheet Items

Undrawn credit facilities, guarantees, and letters of credit are not on the balance sheet but create potential exposure. Basel applies a **Credit Conversion Factor (CCF)** to convert them to an on-balance-sheet equivalent before applying the risk weight:

| Commitment Type                                | CCF  |
| ---------------------------------------------- | ---- |
| Unconditionally cancellable commitments        | 10%  |
| Commitments with original maturity ≤ 1 year    | 20%  |
| Commitments with original maturity &gt; 1 year | 50%  |
| Direct credit substitutes (guarantees)         | 100% |

**Example:** A GBP 100M undrawn corporate facility (original maturity &gt; 1 year) has a CCF of 50%, producing a GBP 50M credit equivalent. At a 100% risk weight (unrated corporate), the RWA is GBP 50M.

## The Internal Ratings-Based Approach

Banks with approved internal credit risk models can use IRB to derive risk weights from their own estimates. The Basel risk-weight function converts four inputs into a risk weight:

| Input                           | Description                                   | Who Estimates                                       |
| ------------------------------- | --------------------------------------------- | --------------------------------------------------- |
| **PD** (Probability of Default) | Likelihood of borrower default over 1 year    | Bank (both F-IRB and A-IRB)                         |
| **LGD** (Loss Given Default)    | Percentage of exposure lost if default occurs | Regulator (F-IRB) or Bank (A-IRB)                   |
| **EAD** (Exposure at Default)   | Total exposure at the time of default         | Regulator (F-IRB) or Bank (A-IRB)                   |
| **M** (Effective Maturity)      | Remaining maturity of the exposure            | Fixed at 2.5 years (F-IRB) or Bank estimate (A-IRB) |

The risk-weight function also uses an **asset correlation (R)** parameter that varies by asset class -- higher for corporates, lower for retail -- reflecting how correlated defaults are within each class.

### Foundation IRB vs Advanced IRB

| Parameter | Foundation IRB (F-IRB)                                                                        | Advanced IRB (A-IRB) |
| --------- | --------------------------------------------------------------------------------------------- | -------------------- |
| PD        | Bank estimates                                                                                | Bank estimates       |
| LGD       | Supervisory values (e.g., 40% non-financial senior unsecured; 45% for financial institutions) | Bank estimates       |
| EAD       | Supervisory rules                                                                             | Bank estimates       |
| Maturity  | Fixed at 2.5 years                                                                            | Bank estimates       |

**Why it matters:** A-IRB banks estimate all four parameters from their own historical data. This can produce significantly lower risk weights than SA -- a well-collateralised mortgage portfolio might produce 10-15% risk weights under A-IRB compared to 35% under SA. This difference is what motivated the output floor.

## The Basel IV Output Floor

### The Problem It Solves

Before Basel IV, IRB banks could use optimised models to produce RWA that was 40-60% lower than what the same portfolio would produce under SA. This created two problems: capital ratios became difficult to compare across banks, and model risk meant that some banks were genuinely under-capitalised despite reporting strong ratios.

### The Rule

> **IRB RWA cannot fall below 72.5% of Standardised Approach RWA**

If a bank's IRB models produce GBP 10 billion in RWA, but the same portfolio under SA would produce GBP 16 billion, then:

- Floor = 72.5% x GBP 16 billion = GBP 11.6 billion
- The bank must report **GBP 11.6 billion** (the floor), not GBP 10 billion (the model)

### Implementation Timeline

The output floor is being phased in gradually:

| Year | Floor Level          | Jurisdiction                   |
| ---- | -------------------- | ------------------------------ |
| 2025 | 50%                  | EU (CRR3)                      |
| 2026 | 55%                  | EU (CRR3)                      |
| 2027 | 60%                  | EU / UK (PRA Basel 3.1 starts) |
| 2028 | 65%                  | EU / UK                        |
| 2029 | 70%                  | EU / UK                        |
| 2030 | 72.5% (fully phased) | EU / UK                        |

The output floor is expected to materially increase RWA for large EU banks — particularly those with heavily optimised IRB models, where the impact may exceed 30% — as the floor progressively constrains internal model benefits. The UK PRA has set a similar trajectory, with full implementation expected by 1 January 2030. US rulemaking remains under discussion.

## Exercise 4: RWA Comparison -- SA vs IRB

A UK bank has the following portfolio. Calculate RWA under both approaches and determine whether the output floor constrains the bank.

**Portfolio:**

| Asset Class                        | Exposure (GBP M) | SA Risk Weight | SA RWA (GBP M) | IRB Risk Weight (model output) | IRB RWA (GBP M) |
| ---------------------------------- | ---------------- | -------------- | -------------- | ------------------------------ | --------------- |
| UK sovereign bonds (AAA)           | 3,000            | 0%             | 0              | 0%                             | 0               |
| Corporate loans (A-rated)          | 2,500            | 75%            | 1,875          | 42%                            | 1,050           |
| Corporate loans (unrated)          | 1,800            | 100%           | 1,800          | 65%                            | 1,170           |
| Retail mortgages (LTV ≤ 80%)       | 5,500            | 35%            | 1,925          | 12%                            | 660             |
| Retail mortgages (LTV &gt; 80%)    | 1,200            | 50%            | 600            | 28%                            | 336             |
| Retail unsecured                   | 2,000            | 75%            | 1,500          | 55%                            | 1,100           |
| Commercial real estate (LTV ≤ 60%) | 800              | 60%            | 480            | 38%                            | 304             |
| Past-due exposures                 | 200              | 150%           | 300            | 150%                           | 300             |
| **Total**                          | **17,000**       |                | **8,480**      |                                | **4,920**       |

**Your tasks:**

1. Verify the SA RWA column (multiply exposure by SA risk weight)
2. Verify the IRB RWA column
3. Calculate the output floor: 72.5% x SA RWA
4. Determine: Does the floor "bite"? Which RWA does the bank report?
5. The bank has CET1 of GBP 1,200M. Calculate the CET1 ratio under both approaches and under the floored approach

:::tip Worked Solution
**Step 3 -- Output Floor:**
72.5% x GBP 8,480M = **GBP 6,148M**

**Step 4 -- Does the floor bite?**
IRB RWA (GBP 4,920M) &lt; Floor (GBP 6,148M). Yes, the floor bites.
The bank must report **GBP 6,148M** as its RWA.

**Step 5 -- CET1 Ratios:**

- Under SA: 1,200 / 8,480 = **14.2%**
- Under IRB (unconstrained): 1,200 / 4,920 = **24.4%**
- Under IRB (floored): 1,200 / 6,148 = **19.5%**

The floor reduces the reported CET1 ratio from 24.4% to 19.5% -- still comfortably above the 8.0% combined minimum, but a 4.9 percentage point reduction. This bank has heavily optimised IRB models (IRB RWA is only 58% of SA RWA), which is exactly the situation the output floor was designed to address.
:::

## Using the Banking Plugin

The `basel-rwa-credit` skill assigns Standardised Approach risk weights, calculates RWA by asset class, and evaluates the Basel IV output floor impact for IRB banks. Here is a worked example.

**Worked example.** Fatima Al-Mansouri, Risk Analytics Lead at Gulf Continental Bank, needs to assess the output floor impact on her bank's mortgage-heavy portfolio. She types:

```
Calculate SA RWA and output floor impact:
Portfolio:
  UK sovereign bonds (AAA): GBP 3,000M
  Corporate loans (A-rated): GBP 2,500M
  Corporate loans (unrated): GBP 1,800M
  Residential mortgages (LTV <= 80%): GBP 5,500M
  Residential mortgages (LTV > 80%): GBP 1,200M
  Retail unsecured: GBP 2,000M
  Commercial real estate (LTV <= 60%): GBP 800M
  Past-due exposures: GBP 200M
IRB RWA (model output): GBP 4,920M
CET1: GBP 1,200M
Jurisdiction: UK PRA
```

The agent routes through `basel-rwa-credit` to produce an SA RWA calculation and output floor assessment.

**What to expect:** The agent produces an asset-class-level RWA breakdown and output floor analysis. Your output will vary based on your portfolio, but look for these sections:

| Section            | Intent                                              | What to Verify                                                        |
| ------------------ | --------------------------------------------------- | --------------------------------------------------------------------- |
| SA RWA calculation | Applies prescribed risk weights to each asset class | Risk weights match the SA table for each asset class and rating       |
| Output floor       | Compares IRB RWA to 72.5% of SA RWA                 | Floor = 72.5% x SA RWA; reported RWA = max(IRB RWA, floor)            |
| CET1 ratios        | Computes ratios under SA, IRB, and floored RWA      | Three ratios show the floor's impact on the reported capital position |

:::note Your output will vary
The specific RWA amounts depend on your portfolio composition and asset class assignments. The teaching point is that the output floor constrains IRB banks from reporting RWA far below SA levels — verify the risk weight assignments and floor calculation methodology, not specific numbers.
:::

Fatima reviews the asset class assignments — particularly whether rated corporates have valid external ratings that support the assigned weight — and validates that the floor impact is consistent with her capital planning projections.

## Try With AI

Use these prompts in Claude or your preferred AI assistant to deepen your understanding of risk-weighted assets.

### Prompt 1: SA Risk Weight Assignment

```
I am learning Basel III risk-weighted assets. Calculate the total
RWA under the Standardised Approach for this portfolio:

1. Cash: GBP 500M
2. UK government bonds (AAA): GBP 2,000M
3. German government bonds (AAA): GBP 1,500M
4. Corporate bonds (A-rated): GBP 800M
5. Unrated corporate loans: GBP 1,200M
6. Residential mortgages (average LTV 65%): GBP 3,000M
7. Credit card receivables (unsecured): GBP 600M
8. Past-due commercial loans (> 90 days): GBP 150M
9. Undrawn credit facilities (maturity > 1 year): GBP 400M
   to unrated corporates

Show the risk weight for each, explain WHY that weight applies,
and calculate total RWA.
```

**What you are learning:** Assigning risk weights is a lookup skill, but understanding the rationale behind each weight builds intuition. Cash at 0% reflects zero credit risk. Past-due loans at 150% reflect observed distress. Mortgages at 35% reflect collateral protection. This intuition matters when reviewing AI-generated capital calculations.

### Prompt 2: Output Floor Impact Analysis

```
An IRB bank has the following situation:

- IRB-derived RWA: EUR 45 billion
- SA RWA for the same portfolio: EUR 72 billion
- CET1 capital: EUR 9 billion

The output floor is currently at 55% (2026 phase-in).

Calculate:
1. The floored RWA at the current 55% phase-in
2. The CET1 ratio under IRB, under SA, and under the floored RWA
3. The floored RWA when fully phased at 72.5% (2030)
4. The CET1 ratio at full phase-in

Then explain: does this bank need to raise additional capital
before 2030? If so, how much CET1 would maintain a 10% ratio
at full phase-in?
```

**What you are learning:** The output floor is not a one-time adjustment -- it tightens over five years. Banks must plan capital trajectories against a rising floor. This prompt develops the analytical skill of projecting regulatory capital impact over time, which is essential for any banking AI agent that produces forward-looking capital adequacy assessments.

### Prompt 3: SA vs IRB Regulatory Rationale

```
The Basel Committee introduced the output floor because IRB banks
were reporting RWA that was 40-60% lower than SA for the same
portfolios.

Answer these questions:
1. Why would an IRB bank's RWA be so much lower than SA?
2. What specific risks does this create for the banking system?
3. Why not simply require all banks to use SA?
4. What is the 72.5% floor trying to achieve -- and why not
   set it at 100%?
5. The EBA estimates 18-22% average RWA increase for large
   EU banks. Who benefits and who loses from this change?

Use concrete examples where possible.
```

**What you are learning:** Regulatory design involves tradeoffs. The output floor balances model sophistication (IRB is more risk-sensitive) against model risk (IRB can be gamed). Understanding this tradeoff is critical for building AI agents that explain regulatory requirements to different stakeholders -- a board member needs the strategic impact, a risk manager needs the calculation detail, a regulator needs compliance evidence.

## Flashcards Study Aid

<Flashcards />
