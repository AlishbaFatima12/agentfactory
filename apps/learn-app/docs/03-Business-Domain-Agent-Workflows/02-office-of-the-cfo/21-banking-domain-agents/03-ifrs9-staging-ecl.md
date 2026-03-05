---
slug: /Business-Domain-Agent-Workflows/banking-domain-agents/ifrs9-staging-ecl
sidebar_position: 3
title: "IFRS 9 ECL — Staging and the ECL Formula"
description: "Deep dive into the IFRS 9 three-stage model — performing, underperforming, non-performing — and the fundamental ECL formula (PD x LGD x EAD) that drives provisioning in 140+ countries"
keywords:
  [
    "IFRS 9",
    "expected credit loss",
    "ECL formula",
    "three-stage model",
    "SICR",
    "significant increase credit risk",
    "PD LGD EAD",
    "stage migration",
    "12-month ECL",
    "lifetime ECL",
    "credit impairment",
    "ifrs9-staging skill",
  ]
chapter: 21
lesson: 3
duration_minutes: 40

# HIDDEN SKILLS METADATA
skills:
  - name: "Classify Financial Assets into IFRS 9 Stages Using SICR Criteria"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can take a set of loan facilities with DPD, rating changes, and qualitative indicators, and classify each into Stage 1, 2, or 3 with documented SICR rationale"

  - name: "Calculate 12-Month and Lifetime ECL Using the ECL Formula"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can compute ECL = PD x LGD x EAD for a Stage 1 facility (12-month) and compute lifetime ECL for a Stage 2 facility using marginal PD term structure and discount factors"

learning_objectives:
  - objective: "Classify financial assets into Stage 1, 2, or 3 using quantitative and qualitative SICR criteria"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Given a portfolio of 8 facilities with DPD, rating, and qualitative data, student correctly assigns each to a stage and documents the SICR trigger for each Stage 2 or Stage 3 classification"

  - objective: "Calculate 12-month ECL and lifetime ECL using the PD x LGD x EAD formula"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student computes 12-month ECL for a Stage 1 facility and lifetime ECL for a Stage 2 facility, showing the formula application and explaining why lifetime ECL is materially higher"

  - objective: "Explain the economic rationale for the three-stage model and why it replaced IAS 39's incurred loss approach"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student can describe the 'too little, too late' problem of IAS 39, explain how IFRS 9's forward-looking model addresses it, and articulate why Stage 1 uses 12-month ECL rather than lifetime ECL"

cognitive_load:
  new_concepts: 7
  concepts_list:
    - "Stage 1 — 12-month ECL (performing, no SICR since origination)"
    - "Stage 2 — Lifetime ECL (significant increase in credit risk, not yet defaulted)"
    - "Stage 3 — Lifetime ECL (credit-impaired, defaulted)"
    - "Significant Increase in Credit Risk (SICR) — quantitative and qualitative triggers"
    - "ECL = PD x LGD x EAD (the fundamental formula)"
    - "12-month ECL vs Lifetime ECL (the measurement difference)"
    - "Interest revenue: gross carrying amount (Stages 1-2) vs net carrying amount (Stage 3)"
  assessment: "7 concepts at B1 level — within the 7-10 cognitive limit for this tier. The lesson progresses from conceptual (what are stages?) to applied (calculate ECL) with concrete examples at each step."

differentiation:
  extension_for_advanced: "Research how IFRS 9 handles purchased or originated credit-impaired (POCI) assets — assets that were already credit-impaired when the bank acquired them. How does the staging model apply? Why does POCI treatment differ from standard originated assets?"
  remedial_for_struggling: "Focus on two things: the stage classification table (which criteria put a loan in each stage) and the basic ECL formula (PD x LGD x EAD). If you can classify a loan and compute a 12-month ECL, you have the foundation for everything that follows."
---

# IFRS 9 ECL — Staging and the ECL Formula

In Lesson 1, you learned that IFRS 9 is the accounting pillar of modern banking — the framework that requires banks to provision for expected credit losses before those losses actually occur. In Lesson 2, you saw that the banking plugin's `ifrs9-staging` and `ifrs9-ecl` skills handle this calculation. Now you will build the staging model and the ECL formula from first principles, so you understand exactly what the skills are calculating and can verify their output.

The IFRS 9 Expected Credit Loss model is the single most important quantitative framework in global banking accounting. It governs how 140+ countries calculate provisions on every loan, bond, trade receivable, and financial guarantee on their balance sheets. Mastering staging and the ECL formula is not optional for any banking professional working outside the United States.

## The Problem IFRS 9 Solves

Under IAS 39 (the predecessor standard), banks used an "incurred loss" model. A provision was recognised only when there was **objective evidence** that a loss had already occurred — the borrower had missed payments, gone bankrupt, or otherwise demonstrated an inability to repay. This created a fatal timing problem.

During the 2008 financial crisis, portfolios that would eventually lose billions were still being reported at full value because the losses had not yet been formally incurred. By the time objective evidence appeared, the losses were so large that banks could not absorb them. The incurred loss model was described by regulators as "too little, too late" — it delayed recognition of losses that were already economically inevitable.

IFRS 9, effective 1 January 2018, replaced this with a **forward-looking** model. Banks must now estimate expected losses over the future life of the instrument, not wait for evidence that losses have already happened. The mechanism for this forward-looking estimation is the three-stage model.

## The Three-Stage Model

IFRS 9 classifies every financial asset into one of three stages based on the change in credit quality since the asset was first recognised (originated or purchased):

| Stage       | Credit Quality                                                                  | ECL Measurement  | Interest Revenue Basis                        |
| ----------- | ------------------------------------------------------------------------------- | ---------------- | --------------------------------------------- |
| **Stage 1** | No significant deterioration since origination                                  | **12-month ECL** | Gross carrying amount                         |
| **Stage 2** | Significant increase in credit risk (SICR) since origination, not yet defaulted | **Lifetime ECL** | Gross carrying amount                         |
| **Stage 3** | Credit-impaired (defaulted)                                                     | **Lifetime ECL** | **Net carrying amount** (after ECL deduction) |

Three critical distinctions to internalise:

**12-month ECL vs Lifetime ECL.** Stage 1 assets require a provision equal to the expected credit loss over the next 12 months only. Stage 2 and 3 assets require a provision equal to the expected credit loss over the entire remaining life of the instrument. For a 20-year mortgage in Stage 2, the bank must estimate losses over all 20 remaining years — not just the next 12 months.

**The staging cliff effect.** When an asset migrates from Stage 1 to Stage 2, the provision typically increases by 5-10x because the measurement window expands from 12 months to the full remaining term. This cliff effect is one of the most significant features of IFRS 9 — a single rating downgrade can multiply a portfolio's provision by an order of magnitude.

**Interest revenue in Stage 3.** This is the distinction that catches many practitioners. In Stages 1 and 2, the bank recognises interest revenue based on the **gross** carrying amount (the full loan balance before deducting the ECL provision). In Stage 3, interest revenue is calculated on the **net** carrying amount (the loan balance minus the ECL provision). This reduces recognised income for credit-impaired assets.

## SICR: When Does an Asset Move to Stage 2?

The Significant Increase in Credit Risk (SICR) assessment is the most judgment-intensive part of IFRS 9. An asset moves from Stage 1 to Stage 2 when there has been a significant increase in the probability of default since initial recognition. IFRS 9 does not prescribe a single threshold — it requires banks to consider all reasonable and supportable information.

In practice, banks use a combination of quantitative and qualitative triggers:

### Quantitative SICR Triggers

| Trigger          | Typical Threshold                                           | Rationale                                                                                     |
| ---------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Rating downgrade | 2+ notches since origination                                | Internal rating systems measure credit quality; a significant downgrade signals deterioration |
| PD increase      | PD doubles or increases by absolute threshold (e.g., +1.5%) | Direct measure of default probability change                                                  |
| Days past due    | 30+ DPD (rebuttable presumption)                            | IFRS 9 includes a rebuttable presumption that SICR has occurred at 30 DPD                     |

### Qualitative SICR Triggers

| Trigger             | Example                                                                           |
| ------------------- | --------------------------------------------------------------------------------- |
| Watchlist placement | Borrower placed on credit watchlist by the bank's risk management                 |
| Covenant breach     | Financial covenant broken (e.g., debt service coverage ratio falls below minimum) |
| Industry stress     | Borrower's industry experiences significant adverse conditions                    |
| Forbearance         | Loan terms modified to provide relief to a struggling borrower                    |

### The 30-Day Rebuttable Presumption

IFRS 9 includes a backstop: there is a **rebuttable presumption** that SICR has occurred when an asset is more than 30 days past due. "Rebuttable" means the bank can override this presumption if it has evidence that the past-due status does not indicate a significant increase in credit risk — for example, an administrative payment delay by a financially healthy borrower. But the default position is that 30+ DPD triggers Stage 2.

## Stage 3: Credit-Impaired (Default)

An asset moves to Stage 3 when it meets the bank's definition of default. While each bank defines default in its own credit policy, Basel and IFRS 9 provide guidance on minimum criteria:

- 90+ days past due (rebuttable presumption of default)
- Borrower is assessed as unlikely to pay in full without realisation of collateral
- Debt restructuring with a loss to the lender
- Bankruptcy or insolvency proceedings
- Borrower deceased (for retail exposures) without sufficient estate coverage

Stage 3 assets require lifetime ECL measurement and the critical interest revenue change: interest is now calculated on the net carrying amount.

## The ECL Formula

The Expected Credit Loss is calculated as the product of three components:

:::info The Fundamental ECL Formula
**12-month ECL (Stage 1):**

ECL = PD(12m) x LGD x EAD

**Lifetime ECL (Stages 2 and 3):**

ECL = Sum over each future period t of: PD(marginal, t) x LGD(t) x EAD(t) x DF(t)

Where:

- **PD** = Probability of Default (12-month for Stage 1, marginal for each future period in lifetime)
- **LGD** = Loss Given Default (percentage of exposure lost if default occurs)
- **EAD** = Exposure at Default (outstanding balance plus expected drawdowns)
- **DF** = Discount Factor (present value adjustment at the effective interest rate)
  :::

### A Concrete Example: Stage 1 (12-Month ECL)

A bank holds a corporate term loan with these parameters:

| Parameter     | Value       | Source                                                |
| ------------- | ----------- | ----------------------------------------------------- |
| PD (12-month) | 1.2%        | Internal rating model, calibrated to point-in-time    |
| LGD           | 35%         | Based on collateral coverage and recovery assumptions |
| EAD           | $10,000,000 | Outstanding drawn balance (no undrawn commitment)     |

**12-month ECL** = 0.012 x 0.35 x $10,000,000 = **$42,000**

The bank books a $42,000 provision against this loan. The loan remains at full value on the balance sheet ($10 million), but a $42,000 allowance reduces the net carrying amount to $9,958,000.

### A Concrete Example: Stage 2 (Lifetime ECL)

The same loan experiences a SICR — the borrower's rating drops by 3 notches. The loan moves to Stage 2. Now the bank must calculate lifetime ECL over the remaining 5-year term:

| Year      | Marginal PD | LGD | EAD         | Discount Factor | Period ECL   |
| --------- | ----------- | --- | ----------- | --------------- | ------------ |
| 1         | 3.5%        | 35% | $10,000,000 | 0.952           | $116,620     |
| 2         | 4.2%        | 35% | $8,000,000  | 0.907           | $106,478     |
| 3         | 4.8%        | 35% | $6,000,000  | 0.864           | $87,091      |
| 4         | 5.1%        | 35% | $4,000,000  | 0.823           | $58,633      |
| 5         | 5.3%        | 35% | $2,000,000  | 0.784           | $29,067      |
| **Total** |             |     |             |                 | **$397,889** |

**Lifetime ECL** = **$397,889**

The provision jumped from $42,000 (Stage 1) to $397,889 (Stage 2) — a **9.5x increase**. This is the staging cliff effect. The loan's credit quality deteriorated, so the measurement window expanded from 12 months to the full remaining life. The economic loss expectation did not change by 9.5x — the measurement window did.

:::info Why Stage 1 Uses 12-Month ECL, Not Lifetime
A common question: if the goal is forward-looking provisioning, why does Stage 1 use only 12-month ECL instead of lifetime ECL? The answer is practical: lifetime ECL for performing assets with 20-30 year terms would result in enormous Day 1 provisions that do not reflect genuine credit risk. The 12-month ECL is a compromise — forward-looking enough to capture near-term deterioration, but not so aggressive that it distorts the balance sheet for performing assets. The staging cliff from Stage 1 to Stage 2 is the mechanism that triggers full lifetime recognition when genuine deterioration is detected.
:::

## Stage Migration: What Moves a Loan Between Stages

Stage migration is not a one-way street. Loans can move in both directions:

| Migration          | Trigger                                                       | Impact                                                  |
| ------------------ | ------------------------------------------------------------- | ------------------------------------------------------- |
| Stage 1 to Stage 2 | SICR detected (rating downgrade, 30+ DPD, covenant breach)    | ECL increases from 12-month to lifetime (5-10x typical) |
| Stage 2 to Stage 3 | Default (90+ DPD, unlikely to pay, restructuring with loss)   | Interest revenue now on net carrying amount             |
| Stage 2 to Stage 1 | SICR no longer exists (rating upgrade, sustained performance) | ECL decreases from lifetime to 12-month                 |
| Stage 3 to Stage 2 | Cure — borrower resumes payment, no longer credit-impaired    | Interest revenue returns to gross carrying amount basis |
| Stage 3 to Stage 1 | Full cure — credit quality returns to origination level       | Rare but possible for short-duration retail exposures   |

The `ifrs9-staging` skill tracks these migrations and produces the stage migration table required for IFRS 9 disclosure — showing the opening stage, the closing stage, and the ECL impact of each migration.

## Using the Banking Plugin

The `ifrs9-staging` and `ifrs9-ecl` skills handle both staging classification and ECL calculation. The `/bank-ecl` command chains them automatically:

1. You provide the portfolio data (facility-level PD, LGD, EAD, DPD, rating changes)
2. The `ifrs9-staging` skill classifies each facility into Stage 1, 2, or 3
3. The `ifrs9-ecl` skill calculates 12-month ECL (Stage 1) or lifetime ECL (Stage 2/3) for each facility
4. The output includes facility-level and portfolio-level ECL, with stage migration summary

The next two lessons build the PD, LGD, and EAD components in depth (Lesson 4) and add macroeconomic scenario weighting (Lesson 5).

## Try With AI

Use these prompts in Claude or your preferred AI assistant to explore this lesson's concepts.

### Prompt 1: Staging Classification

```
I have a portfolio of 6 commercial loans. Classify each
into IFRS 9 Stage 1, 2, or 3. For each Stage 2 or Stage 3
classification, state the SICR trigger or default criterion.

Facility A: Current, 0 DPD, rating unchanged since origination
Facility B: Current, 0 DPD, rating downgraded 3 notches
Facility C: 45 DPD, rating downgraded 1 notch
Facility D: 95 DPD, borrower filed for bankruptcy
Facility E: Current, 0 DPD, placed on credit watchlist
Facility F: Was 60 DPD, now current for 12 months, rating
           restored to origination level

For Facility F, explain whether it can return to Stage 1
and what evidence would be required.
```

**What you are learning:** Staging classification is the first step in every ECL calculation. By classifying facilities yourself, you develop the judgment the `ifrs9-staging` skill encodes — and you can verify whether the skill is staging correctly when you use it on real data.

### Prompt 2: The Staging Cliff Effect

```
A bank holds a 20-year residential mortgage with these
parameters:
- PD (12-month): 0.8%
- LGD: 15%
- EAD: $450,000

Calculate the 12-month ECL for Stage 1.

Now assume the borrower's PD increases and the mortgage
moves to Stage 2. Using these simplified lifetime
parameters:
- Average annual marginal PD: 1.8% per year
- LGD: 15% (constant)
- EAD declining linearly from $450,000 to $0 over 20 years
- Ignore discounting for simplicity

Calculate the approximate lifetime ECL.

How many times larger is the lifetime ECL compared to
the 12-month ECL? Explain why this cliff effect matters
for bank financial reporting.
```

**What you are learning:** The staging cliff effect is the most consequential feature of IFRS 9 for bank earnings. A portfolio migrating from Stage 1 to Stage 2 can produce provision increases of 5-10x, directly reducing reported profit. Understanding this cliff helps you interpret bank financial statements and evaluate whether staging decisions are reasonable.

### Prompt 3: IFRS 9 vs IAS 39

```
Explain to a non-technical board member why IFRS 9's
forward-looking ECL model is better than IAS 39's
incurred loss model. Use the 2008 financial crisis
as your primary example.

Structure your explanation as:
1. How IAS 39 worked (incurred loss — wait for evidence)
2. What went wrong in 2008 (losses existed but were
   not recognised)
3. How IFRS 9 fixes this (forward-looking ECL, three stages)
4. The trade-off: IFRS 9 provisions are higher in good
   times, but losses are never a surprise

Keep the explanation under 300 words and avoid jargon
that a non-accountant would not understand.
```

**What you are learning:** The ability to explain IFRS 9's rationale to non-technical stakeholders is a professional skill. Board members, audit committee chairs, and senior management need to understand why provisions change, and the IAS 39 vs IFRS 9 comparison is the clearest way to explain the "why" behind the numbers.

---

Continue to [Lesson 4: PD, LGD, and EAD — Building the ECL Components →](./04-ifrs9-pd-lgd-ead.md)
