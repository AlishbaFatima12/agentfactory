---
slug: /Business-Domain-Agent-Workflows/islamic-finance-domain-agents/takaful-ifrs17
sidebar_position: 7
title: "Takaful and IFRS 17 — Islamic Insurance"
description: "Master the takaful operating model, resolve the fundamental IFRS 17 question of who is the insurer in a wakala model, account for qard hasan obligations, and build takaful financial statements across Malaysia, UAE, and UK jurisdictions"
keywords:
  [
    "takaful",
    "Islamic insurance",
    "wakala model",
    "mudaraba takaful",
    "participants fund",
    "qard hasan",
    "IFRS 17",
    "MFRS 17",
    "takaful operator",
    "takaful deficit",
    "retakaful",
    "IAS 37 contingent liability",
    "family takaful",
    "general takaful",
    "premium allocation approach",
  ]
chapter: 20
lesson: 7
duration_minutes: 50

# HIDDEN SKILLS METADATA
skills:
  - name: "Apply IFRS 17 to Takaful Structures"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Literacy"
    measurable_at_this_level: "Student can determine whether IFRS 17 applies to a takaful operator under the wakala model, identify which measurement model applies (PAA for general takaful, GMM for family takaful), and produce separate operator and participants' fund statements"

  - name: "Analyse Qard Hasan Contingent Liability"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can apply IAS 37 criteria to a takaful operator's qard hasan obligation, determine whether it should be recognised as a provision or disclosed as a contingent liability, and produce the journal entries when the Participants' Fund enters deficit"

  - name: "Compare Takaful Regulatory Approaches Across Jurisdictions"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Student can explain how BNM Malaysia's takaful reporting requirements differ from the UAE and UK approaches, and identify the specific regulatory guidance that changes IFRS 17 application in each jurisdiction"

learning_objectives:
  - objective: "Determine whether IFRS 17 applies to a takaful operator under the wakala model, identifying the measurement approach (PAA or GMM) based on the type of takaful business"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student completes Exercise 4 Step 1, resolving the fundamental IFRS 17 question for a wakala takaful operator and comparing Malaysia, UAE, and UK approaches"

  - objective: "Analyse the qard hasan obligation under IAS 37, determining whether the operator's commitment to provide interest-free loans to a deficit Participants' Fund constitutes a present obligation requiring provision or a contingent liability requiring disclosure"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Student completes Exercise 4 Step 3, producing qard journal entries and the IAS 37 contingent liability analysis"

  - objective: "Produce separate operator and Participants' Fund financial statements for a takaful entity, correctly allocating contributions, wakala fees, claims, investment income, and surplus/deficit"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student builds the dual-statement structure in Exercise 4 Step 2 with correct allocation of revenue and expense items"

cognitive_load:
  new_concepts: 7
  concepts_list:
    - "Takaful as mutual insurance (participants bear risk)"
    - "Wakala vs mudaraba operating models"
    - "The IFRS 17 question: who is the insurer?"
    - "Dual financial statements (operator + participants' fund)"
    - "Qard hasan obligation and IAS 37 analysis"
    - "PAA vs GMM measurement models for takaful"
    - "BNM Malaysia's regulatory overlay on MFRS 17"
  assessment: "7 concepts at B1-B2 level. Students enter from Lesson 6 with sukuk capital markets experience. Takaful introduces the insurance accounting standard (IFRS 17) to the Islamic finance context. The IFRS 17 question — who is the insurer — is the anchor concept. The qard hasan obligation is the most analytically demanding concept and pushes into B2 territory."

differentiation:
  extension_for_advanced: "Research the Shariah debate about whether a takaful operator can be required to provide qard hasan — or whether qard should always be voluntary. Some scholars argue that a contractual obligation to lend contradicts the voluntary nature of qard. Others argue that the wakala contract creates an implicit obligation. Write a one-page analysis of the two positions and their accounting implications: if qard is voluntary, is IAS 37 recognition appropriate? If qard is contractual, is it a financial liability under IAS 32 rather than a contingent liability under IAS 37?"
  remedial_for_struggling: "Focus on the basic takaful structure: participants put money into a common pool. Claims are paid from the pool. The operator manages the pool for a fee. If the pool runs out of money, the operator lends it more (qard hasan). If the pool has extra money, participants may get some back. If you can explain this structure and identify which entity bears the insurance risk (participants, not the operator), you have understood the core concept."
---

# Takaful and IFRS 17 — Islamic Insurance

In Lesson 6, you worked through sukuk — capital market instruments with complex issuer and investor accounting. Takaful presents a different kind of complexity. It is not a capital market product; it is an operating business model where the fundamental accounting question is not about classification or measurement but about **identity**: who is the insurer?

Takaful operates in over 30 countries. Malaysia has the world's most developed takaful regulatory framework. Saudi Arabia has the world's largest takaful market by premium volume — where all insurance is technically takaful due to Cooperative Insurance Companies regulations. The global takaful industry is led by these two markets, supported by the UAE, Bahrain, Kuwait, and Qatar.

## The Takaful Structure — Mutual Insurance

In conventional insurance, the insurer takes premiums, bears risk, and keeps underwriting profit. In takaful, the structure is fundamentally different:

- **Participants** contribute to a common fund (the Participants' Risk Fund)
- **Participants collectively** bear the insurance risk — not the operator
- **The takaful operator** manages the fund for a fee or profit share — but does not bear insurance risk

This distinction drives every accounting question that follows.

## The Three Operating Models

| Model                                | How the Operator Earns                                                      | Risk Position                                                             |
| ------------------------------------ | --------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Wakala** (most common)             | Fixed percentage of contributions as management fee (e.g., 25-35%)          | Operator does NOT share in underwriting surplus or bear underwriting risk |
| **Mudaraba**                         | Shares in investment income on Participants' Fund assets                    | Operator may also share in underwriting surplus                           |
| **Hybrid** (most common in practice) | Wakala fee for underwriting management + mudaraba for investment management | Combined model                                                            |

## The Fundamental IFRS 17 Question

IFRS 17 applies to an entity that has **issued insurance contracts** — contracts under which the entity accepts significant insurance risk.

In a wakala model takaful:

- The operator collects contributions and manages the fund
- The operator earns a fee
- The operator does **not** accept insurance risk
- The **participants collectively** accept insurance risk

So: does IFRS 17 apply to the operator, to the Participants' Fund, or to both?

**Malaysia's answer (BNM / Shariah Advisory Council):** IFRS 17 applies to the takaful operator. BNM's Financial Reporting for Takaful Operators Policy Document provides specific guidance. The rationale: the operator is viewed as taking on insurance risk through its management role and its qard obligation (the commitment to fund deficits).

**UAE and UK:** No equivalent regulatory ruling as of 2025. Operators must determine applicability based on the specific facts of their operating model. Without a BNM-style ruling, the analysis is more uncertain and requires careful professional judgment.

**Default position:** Apply IFRS 17 to the takaful operator unless the jurisdiction overlay specifies otherwise or the operator has obtained a specific regulatory determination.

## Two Financial Statements to Maintain

Every takaful entity maintains two sets of accounts:

**1. Operator's Financial Statements:**

- Revenue: Wakala fee (percentage of contributions)
- Expenses: Staff costs, overheads, management costs
- Assets: Operator's own investments, qard receivable from Participants' Fund (if any)
- Liabilities: Qard payable to participants (if operator is indebted)

**2. Participants' Fund Statement:**

- Revenue: Contributions received minus wakala fee plus investment income
- Expenses: Claims paid plus retakaful ceded plus management expenses
- Balance: Surplus (distributed to participants or retained) or deficit (triggers qard)

The journal entry flow for the wakala model:

**Contributions received:**
Dr: Cash | Total contributions
Cr: Participants' Fund — Contributions | Total contributions

**Wakala fee deduction:**
Dr: Participants' Fund — Wakala Fee | Fee amount
Cr: Takaful Operator Income — Wakala Fee | Fee amount

**Claims paid from Participants' Fund:**
Dr: Participants' Fund — Claims Expense | Claim amount
Cr: Cash | Claim amount

**Investment income on Participants' Fund assets:**
Dr: Participants' Fund Investments — Accrued Income
Cr: Participants' Fund — Investment Income

## Qard Hasan — The Most Important Accounting Issue in Takaful

When the Participants' Fund is in deficit — claims and expenses exceed contributions and investment income — the takaful operator must provide a **qard hasan** (interest-free loan) to restore solvency. This is a Shariah obligation, not a commercial decision.

**In the Operator's books:**
Dr: Qard Receivable from Participants' Fund | Loan amount
Cr: Cash | Loan amount

The qard receivable is at risk. If the Participants' Fund never recovers sufficient surplus to repay the qard, the receivable must be impaired under IFRS 9. If recovery is unlikely, the full amount is written off — a loss in the operator's income statement.

**The IAS 37 question — before a deficit materialises:**

The operator has committed (through the wakala contract) to provide qard whenever the Participants' Fund needs it. Under IAS 37:

| IAS 37 Criterion                        | Analysis                                                                      |
| --------------------------------------- | ----------------------------------------------------------------------------- |
| **Present obligation from past event?** | The wakala contract creates the obligation. Past event = signing the contract |
| **Probable outflow?**                   | Depends on the fund's projected claims experience                             |
| **Reliable estimate?**                  | Actuarial estimates of potential deficit can be made                          |

If the operator has **unconditionally committed** to providing qard whenever needed: IAS 37 may require a provision (recognised liability) even before a deficit occurs.

If the obligation is **contingent** on the fund actually entering deficit: disclose as a contingent liability under IAS 37.86.

This IAS 37 analysis is the most analytically demanding issue in takaful accounting — and the one most likely to generate an audit controversy.

## IFRS 17 Measurement Models for Takaful

**Premium Allocation Approach (PAA):** Eligible for contracts with coverage periods of 12 months or less. Most general takaful (motor, property, medical) qualifies for PAA.

**General Measurement Model (GMM / Building Block Approach):** Required for long-term contracts. Family takaful (life insurance equivalent) typically requires GMM with three measurement blocks:

1. Present value of fulfilment cash flows
2. Risk adjustment for non-financial risk
3. Contractual Service Margin (CSM)

:::info Exercise Requirements

**Plugin:** Islamic Finance Domain Agents (install once — see Lesson 3)
:::

## Practice Exercise 4: Global Takaful Operator — IFRS 17 and Wakala Model

**What you will build:** IFRS 17 application analysis, dual financial statements, qard journal entries, UAE comparison, and a takaful SKILL.md draft.

**Requirements:** Cowork or Claude (any plan). 50 minutes.

**Scenario:** A Malaysian takaful operator runs general takaful (motor, property, medical) and family takaful (life) under the wakala model. Gross written contributions: MYR 850M. Wakala fee rate: 30%. Claims incurred: MYR 410M. Retakaful ceded: MYR 125M. Investment income on Participants' Fund: MYR 68M.

1. **IFRS 17 application analysis.** Tell your AI assistant: _"The fundamental IFRS 17 question for takaful: Under the wakala model, the operator earns a fee but does not bear insurance risk. The participants bear insurance risk collectively. (1) Does the operator have insurance contracts on its books under IFRS 17? (2) What is BNM Malaysia's ruling? (3) How does Malaysia's position compare to UAE and UK, where equivalent guidance does not exist?"_

2. **Malaysia (MFRS 17) dual financial statements.** Tell your AI assistant: _"Jurisdiction: Malaysia. Framework: MFRS 17 with BNM overlay. Build the general takaful statements: (a) Operator's income statement — wakala fee of MYR 255M (30% of 850M) minus management expenses; (b) Participants' Fund statement — contributions of MYR 850M minus wakala fee of MYR 255M minus claims of MYR 410M minus retakaful of MYR 125M plus investment income of MYR 68M. Calculate the surplus or deficit."_

3. **Qard obligation analysis.** Tell your AI assistant: _"In a given year, claims exceed total available funds by MYR 45M. The Participants' Fund is in deficit. (1) Generate the journal entries in both the operator's books and the Participants' Fund. (2) How is the qard recognised on the operator's balance sheet — receivable, expense, or contingent liability? (3) Under what circumstances would the qard be impaired? (4) Apply IAS 37: before the deficit materialised, should the operator have recognised a provision or disclosed a contingent liability for the potential qard obligation?"_

4. **UAE comparison (IFRS 17 without regulatory overlay).** Tell your AI assistant: _"Jurisdiction: UAE. No equivalent of BNM's takaful policy document. A UAE takaful operator must apply IFRS 17 without a regulatory overlay. Apply the Premium Allocation Approach (PAA) to the same general takaful business. Is PAA eligible — is coverage typically 12 months or less? Show how the PAA presentation differs from BNM-guided Malaysia treatment."_

5. **Create a takaful product skill in Cowork.** Use **Create with Claude** in Cowork's Skills panel. Tell Cowork: _"Help me build a takaful product skill covering Malaysia, UAE, and UK jurisdiction rules. The skill must resolve: (1) Operator vs Participants' Fund — which entity holds IFRS 17 insurance contracts? (2) Wakala fee revenue recognition; (3) Qard accounting trigger and recognition; (4) Surplus/deficit handling. Include jurisdiction-specific guidance where BNM Malaysia, UAE CBUAE, and UK PRA/FCA modify base IFRS 17 treatment."_ Review Claude's draft, refine the instructions, and save. Alternatively, upload the reference skill from the companion repository via **Upload a skill** and customise for your jurisdictions.

**Check your work:** In Step 2, the Participants' Fund calculation should show: 850 - 255 - 410 - 125 + 68 = MYR 128M surplus. If you get a deficit, check your arithmetic. In Step 3, the qard entries should show a receivable on the operator's books and a payable on the Participants' Fund books. The IAS 37 analysis in Step 3(4) is the most professionally valuable part — it requires judgment about whether the wakala contract creates a present obligation.

:::tip Global Perspective

**Malaysia's BNM is the global reference standard for takaful regulation.** The Financial Reporting for Takaful Operators Policy Document is the most detailed regulatory guidance on IFRS 17 application to takaful anywhere in the world. UAE and UK operators lack equivalent guidance and must reach their own technical conclusions. A CA/CPA who understands the BNM framework and can advise operators in jurisdictions without equivalent guidance occupies a highly valuable advisory position.

:::

## Try With AI

**Setup:** Use these prompts in Cowork or your preferred AI assistant.

### Prompt 1: Reproduce

```
A general takaful operator in Malaysia reports the following
for the Participants' Risk Fund:

Contributions received: MYR 500M
Less: Wakala fee (28%): MYR 140M
Less: Claims paid: MYR 195M
Less: Retakaful ceded: MYR 65M
Plus: Investment income: MYR 42M
= Surplus: MYR 142M

Questions:
1. The surplus belongs to participants. What are the options
   for distributing or retaining it?
2. If the operator distributes 60% and retains 40% as a
   reserve, generate the journal entries
3. What disclosures does BNM require about surplus distribution?
4. Compare this to conventional insurance: the underwriting
   profit would belong to the insurer. In takaful, it belongs
   to participants. What does this mean for the operator's
   business model — how does the operator grow if it cannot
   retain underwriting surplus?
5. If the operator uses the hybrid model (wakala + mudaraba),
   how does the surplus distribution change?
```

**What you are learning:** The surplus distribution question reveals the fundamental economics of takaful. The operator earns fees, not underwriting profit. Growth must come from scale (more participants, more contributions, more wakala fees) rather than from underwriting margins. This changes how you advise a takaful operator on business strategy compared to a conventional insurer — and explains why the hybrid model (adding mudaraba investment income sharing) is commercially preferred.

### Prompt 2: Adapt

```
A family takaful operator offers a 20-year savings and
protection plan. Annual contribution: MYR 12,000 per
participant. Death benefit: MYR 500,000. Maturity benefit:
accumulated contributions plus investment returns.

Under IFRS 17, this is a long-term contract requiring the
General Measurement Model (GMM/BBA).

Questions:
1. Why is PAA not eligible for this product?
2. What are the three building blocks of the GMM?
3. How does the Contractual Service Margin (CSM) work for
   a 20-year takaful contract? When is profit recognised?
4. How does the takaful structure (participants bear risk)
   affect the risk adjustment calculation?
5. If the takaful operator switches from wakala to hybrid
   model mid-contract, what IFRS 17 modification accounting
   applies?

Use language appropriate for a CA/CPA who understands
IFRS 17 for conventional insurance but has not applied
it to takaful before.
```

**What you are learning:** Family takaful under the GMM is the most complex intersection of Islamic finance and insurance accounting. The CSM creates a mechanism for recognising profit over the coverage period — but in takaful, the "profit" belongs to different parties depending on the operating model. Understanding the GMM for family takaful positions you to advise on the IFRS 17 transition for the long-term takaful industry, which is still in early stages in many jurisdictions.

### Prompt 3: Apply

```
You are advising a takaful operator in YOUR jurisdiction
(pick your home country or a country where you plan to
practise). The operator runs general takaful (motor, property,
medical) under the wakala model. Wakala fee: 30%.

Participants' Fund for the current year:
- Contributions received: USD 120 million
- Wakala fee deducted: USD 36 million
- Claims paid: USD 62 million
- Retakaful ceded: USD 18 million
- Investment income: USD 9 million

1. Does your jurisdiction have specific takaful regulatory
   guidance equivalent to BNM Malaysia's framework? If not,
   how does the operator determine whether IFRS 17 applies?
2. Calculate the Participants' Fund surplus or deficit.
3. If the fund were in deficit by USD 5 million instead,
   generate the qard hasan journal entries in both the
   operator's books and the Participants' Fund.
4. Apply IAS 37 to the operator's qard commitment: before
   the deficit materialised, should the operator have
   recognised a provision or disclosed a contingent liability?
5. How does your jurisdiction's regulator treat the qard
   obligation for solvency and capital adequacy purposes?

Present your analysis as a regulatory compliance memo for
the operator's board.
```

**What you are learning:** Takaful regulation varies enormously by jurisdiction. Malaysia has the most detailed framework; many other jurisdictions have minimal guidance. Applying the IFRS 17 and IAS 37 analysis to your own regulatory context reveals whether your jurisdiction provides clarity or leaves the operator to make professional judgments without a regulatory safety net — a distinction that matters for both audit risk assessment and advisory work.

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 8: Trade & Partnership Finance →](./08-trade-partnership-finance.md)
