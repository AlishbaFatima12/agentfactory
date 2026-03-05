---
slug: /Business-Domain-Agent-Workflows/islamic-finance-domain-agents/murabaha
sidebar_position: 4
title: "Murabaha — Cost-Plus Financing Across Jurisdictions"
description: "Master the murabaha four-step journal entry sequence, compare AAOIFI FAS 2 and MFRS/IFRS 9 treatments, and build dual-framework income schedules that demonstrate how the same numbers produce different labels across jurisdictions"
keywords:
  [
    "murabaha",
    "cost-plus financing",
    "AAOIFI FAS 2",
    "IFRS 9",
    "MFRS 9",
    "deferred murabaha income",
    "effective profit rate",
    "commodity murabaha",
    "tawarruq",
    "Islamic financing receivable",
    "murabaha receivable",
    "Islamic finance accounting",
  ]
chapter: 20
lesson: 4
duration_minutes: 35

# HIDDEN SKILLS METADATA
skills:
  - name: "Execute Murabaha Accounting Under Two Frameworks"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Literacy"
    measurable_at_this_level: "Student can build a complete murabaha amortisation schedule under both AAOIFI FAS 2 and MFRS 9, generate the four-step journal entry sequence under each framework, and identify every labelling difference between the two outputs"

  - name: "Compare AAOIFI and MFRS Income Labels"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Student can explain why arithmetically identical murabaha schedules require different income labels and balance sheet classifications in different jurisdictions, and can identify which labels are mandatory under each framework"

  - name: "Distinguish Asset Murabaha from Commodity Murabaha"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Student can explain the structural difference between asset murabaha and commodity murabaha (tawarruq), identify the Shariah compliance concerns with tawarruq, and describe when each structure is used"

learning_objectives:
  - objective: "Build a complete murabaha amortisation schedule under both AAOIFI FAS 2 and MFRS 9, demonstrating that the numbers are identical while the labels differ"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student completes Exercise 1 — producing dual-framework schedules with correct jurisdiction-specific labels and journal entries for Month 1"

  - objective: "Analyse the labelling and classification differences between AAOIFI FAS 2 and MFRS 9 murabaha treatments, explaining why the same transaction requires different financial statement presentation in different jurisdictions"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student produces a comparison table showing income label, receivable classification, and disclosure structure differences between Bahrain and Malaysia for the same murabaha transaction"

  - objective: "Explain the four Shariah conditions for a valid murabaha contract and the structural difference between asset murabaha and commodity murabaha (tawarruq)"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student can articulate the four conditions (actual purchase, disclosed mark-up, binding offer/acceptance, specified payment terms) and explain why some scholars object to tawarruq"

cognitive_load:
  new_concepts: 7
  concepts_list:
    - "Murabaha as a sale transaction (not a loan)"
    - "The four-step journal entry sequence"
    - "Effective profit rate calculation"
    - "AAOIFI FAS 2 vs IFRS 9 labelling"
    - "Deferred murabaha income mechanics"
    - "Commodity murabaha / tawarruq"
    - "Shariah compliance conditions for murabaha"
  assessment: "7 concepts at B1 level. Students enter from Lesson 3 with the global standards map and three-regime framework established. The four-step journal entry sequence is the anchor — it is universal across all jurisdictions. The labelling differences are the jurisdiction-specific overlay. Commodity murabaha is an extension concept for students who want depth."

differentiation:
  extension_for_advanced: "Research the Shariah controversy around tawarruq (commodity murabaha). The AAOIFI Shariah Board has published extensive guidance. Write a one-page analysis distinguishing organised tawarruq (which many scholars prohibit) from classical tawarruq (which is generally permitted). Explain how a prudent Islamic bank's Shariah Supervisory Board would approach a new tawarruq product proposal."
  remedial_for_struggling: "Focus on the four-step journal entry sequence only. Write out the four entries for a simple example (bank buys asset for 100,000, sells at 120,000 over 12 months). If you can produce the four entries and label the income line correctly for Bahrain (Murabaha Income) and Malaysia (Profit from Islamic Financing), you have understood the core concept."
---

# Murabaha — Cost-Plus Financing Across Jurisdictions

In Lesson 3, you examined the global standards map and the three accounting regimes that govern Islamic finance worldwide. Now you apply that framework to the single most important product in Islamic banking: murabaha. This lesson is where the jurisdiction overlay concept becomes concrete — you will see exactly how the same arithmetic produces different financial statement outputs depending on which framework governs.

Murabaha accounts for an estimated 40-60% of total Islamic banking financing in most markets. Every Islamic bank in every jurisdiction offers murabaha products. The commercial structure is universal: the bank purchases an asset and sells it to a customer at a disclosed mark-up with deferred payment. The customer knows what the bank paid and what the bank is charging — complete price transparency is a Shariah requirement, not an optional disclosure. This transparency is what distinguishes murabaha from a conventional loan, where the borrower knows the interest rate but not the bank's cost of funds.

## The Murabaha Structure — A Sale, Not a Loan

The foundational principle is that murabaha is a **sale transaction**. The bank is a merchant purchasing and reselling an asset — not a lender charging interest. This principle governs all accounting treatment, all terminology, and all Shariah compliance assessment.

Four conditions must be satisfied for a valid murabaha contract:

| Condition             | Requirement                                                                                | Shariah Consequence if Violated                           |
| --------------------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| **Actual purchase**   | The bank must have purchased the asset from the supplier before selling it to the customer | If the bank never held title, the contract is void        |
| **Disclosed mark-up** | The selling price (cost + mark-up) must be disclosed to the customer                       | Undisclosed mark-up violates the transparency requirement |
| **Binding agreement** | There must be a binding offer and acceptance (ijab and qabul)                              | No valid contract without mutual consent                  |
| **Specified terms**   | The deferred payment terms must be specified and agreed                                    | Ambiguous payment terms introduce gharar (uncertainty)    |

An AI agent processing a murabaha transaction should confirm these four conditions before generating any accounting entry. If any condition cannot be confirmed, the transaction should be flagged for Shariah Supervisory Board review.

:::info The Murabaha Accounting Entry Sequence — Universal Structure

This four-step sequence applies in all jurisdictions. Only the labels change.

**Step 1 — Bank purchases asset:**
Dr: Murabaha Asset (inventory) | Cost
Cr: Cash / Payable to Supplier | Cost

**Step 2 — Bank sells asset to customer at mark-up:**
Dr: Murabaha Receivable | Cost + Mark-up
Cr: Murabaha Asset | Cost
Cr: Deferred Murabaha Income | Mark-up

**Step 3 — Periodic profit recognition (effective profit rate method):**
Dr: Deferred Murabaha Income | period allocation
Cr: Murabaha Income / Profit from Islamic Financing | period allocation

**Step 4 — Customer instalment payment:**
Dr: Cash | instalment
Cr: Murabaha Receivable | instalment

**AAOIFI label (Bahrain, Qatar):** Step 3 credit = "Murabaha Income"
**MFRS / IFRS label:** Step 3 credit = "Profit from Islamic Financing" or "Financing Income"
**NEVER use:** "Interest Income" in any Islamic finance jurisdiction, under any framework

:::

## How the Effective Profit Rate Works

The effective profit rate is arithmetically identical to the IFRS 9 effective interest rate. It is the rate that discounts all future cash flows back to equal the initial murabaha receivable at inception. The label is different — "effective profit rate" rather than "effective interest rate" — but the calculation is the same.

**Period allocation formula:**

Opening Receivable x (Effective Profit Rate / Periods per Year) = Period Profit

Closing Receivable = Opening Receivable + Period Profit - Cash Instalment Received

This means that the amortisation schedule produced under AAOIFI FAS 2 and the schedule produced under MFRS 9 will have identical numbers in every column. The opening balance, the profit allocation, the instalment, the closing balance — all the same. What differs is the column header: "Murabaha Income" in Bahrain, "Profit from Islamic Financing" in Malaysia.

## AAOIFI FAS 2 vs MFRS 9 — Same Numbers, Different Labels

| Element                        | AAOIFI FAS 2 (Bahrain, Qatar)                | MFRS 9 / IFRS 9 (Malaysia, UAE, UK)                                   |
| ------------------------------ | -------------------------------------------- | --------------------------------------------------------------------- |
| **Income label**               | "Murabaha Income"                            | "Profit from Islamic Financing"                                       |
| **Receivable classification**  | "Murabaha Receivables" — separate line item  | "Islamic Financing Receivables" or under "Loans and Advances"         |
| **Measurement method**         | Effective profit rate                        | Effective interest rate (same formula, different name)                |
| **Impairment**                 | AAOIFI FAS 30 (3-stage ECL model)            | IFRS 9 ECL model (same staging concept)                               |
| **Balance sheet presentation** | NEVER under "Loans and Advances"             | May appear under "Loans and Advances" with Islamic sub-classification |
| **Deferred income**            | Contra to gross receivable, or separate line | Netted into amortised cost carrying value                             |

The numbers are the same. The labels, the balance sheet location, and the disclosure structure are different. This is why the jurisdiction overlay matters: a Bahrain auditor reviewing statements that label murabaha income as "Profit from Islamic Financing" will raise a standards departure finding. A Malaysia auditor reviewing statements labelled "Murabaha Income" without MFRS 9 measurement disclosures will raise findings equally.

## Commodity Murabaha and Tawarruq

Not all murabaha transactions involve a physical asset that the customer needs. **Commodity murabaha** (tawarruq) is a structure where the bank purchases a commodity from a broker, sells it to the customer at a mark-up, and the customer immediately sells the commodity to a third broker for cash. The customer receives cash; the bank holds a receivable.

The accounting treatment is identical to asset murabaha — the four-step journal entry sequence is the same. The Shariah compliance question is different: the two commodity sales must be genuinely separate transactions. If the sale to the customer and the customer's sale to the third broker are arranged as a single back-to-back transaction (organised tawarruq), some scholars consider this impermissible because the commodity serves no economic purpose — it is merely a mechanism to create a debt obligation that looks like a conventional loan.

The practical significance for a CA/CPA: if the jurisdiction's Shariah Supervisory Board has specific rulings on tawarruq, these must be checked before processing the transaction. The accounting is straightforward; the Shariah compliance assessment requires judgment.

:::info Exercise Requirements

**Plugin:** Islamic Finance Domain Agents (install once — see Lesson 3)
**Exercise data:** Download [`islamic-finance-exercise-data.zip`](https://github.com/panaversity/agentfactory-business-plugins/releases/latest) and find `exercises/ex01-murabaha-bahrain-malaysia.md`
:::

## Practice Exercise 1: Murabaha Income Schedule — Bahrain (AAOIFI) vs Malaysia (MFRS)

**What you will build:** Dual-framework amortisation schedules, Month 1 journal entries under each framework, and disclosure notes for each.

**Requirements:** Cowork or Claude (any plan). 35 minutes.

**Scenario:** An Islamic banking group has subsidiaries in both Bahrain and Malaysia. Both subsidiaries enter identical murabaha transactions: cost to bank 500,000; mark-up 18% per annum; tenure 18 months; monthly equal instalments.

1. **Build the Bahrain AAOIFI schedule.** Tell your AI assistant: _"I am working on a Bahrain entity. Primary framework: AAOIFI FAS 2. Build a complete murabaha amortisation schedule for this transaction. Columns: Month, Opening Murabaha Receivable, Monthly Instalment, Principal Portion, Profit Portion (labelled 'Murabaha Income'), Deferred Murabaha Income Released, Closing Murabaha Receivable. Show the total Murabaha Income recognised over the facility life."_

2. **Build the Malaysia MFRS schedule.** Tell your AI assistant: _"Now I am working on the Malaysian subsidiary. Primary framework: MFRS 9. Build the identical schedule. Use the effective profit rate method. Label the income 'Profit from Islamic Financing.' Show how MFRS 9 amortised cost measurement applies."_

3. **Compare the two schedules numerically.** Ask: _"Compare the two schedules. Are the numbers identical? If yes, explain why two different standards produce the same numbers but require different labels."_

4. **Generate Month 1 journal entries under each framework.** Ask: _"Generate Month 1 journal entries for both the Bahrain entity (AAOIFI FAS 2) and the Malaysian entity (MFRS 9). Show all four entries for each. Note every labelling difference."_

5. **Draft the disclosure notes for each.** Ask: _"Draft the murabaha receivable disclosure note for each entity's financial statements: (a) Bahrain — AAOIFI FAS 2 with murabaha receivable and deferred income movement tables; (b) Malaysia — MFRS 7/MFRS 9 for Islamic financing receivables."_

**Check your work:** The numbers in the two schedules should be arithmetically identical. If they differ, check whether you specified the same mark-up rate and tenure for both. The disclosure notes should look structurally different — AAOIFI requires a Shariah compliance accounting policy statement and separate movement tables; MFRS 9 requires IFRS 7-style credit risk and ECL disclosures.

:::tip Global Perspective

**Bahrain and Qatar** are the two jurisdictions where AAOIFI FAS is mandatory. Murabaha income must be labelled "Murabaha Income" — never "Profit from Islamic Financing" or "Financing Income."

**Malaysia** uses MFRS 9 (identical to IFRS 9). Income is "Profit from Islamic Financing." The MASB has determined that conventional MFRS applies to Islamic transactions with appropriate additional disclosures.

**UAE, Saudi Arabia, UK** all use IFRS 9. Income labels vary by convention — "Financing Income — Murabaha" (UAE), "Murabaha Income" by Saudi convention, "Profit from Home Finance" (UK). The jurisdiction overlay specifies the correct local label.

:::

## Try With AI

Use these prompts in Cowork or your preferred AI assistant to explore this lesson's concepts.

### Prompt 1: Murabaha Default Scenario

```
A customer defaults on a murabaha receivable after paying 6 of 18
monthly instalments. The bank's murabaha receivable balance is
420,000 and the deferred murabaha income balance is 55,000.

Under Shariah rules, the bank CANNOT charge additional profit
on the overdue amount — additional charges constitute riba.

Questions:
1. What is the bank's actual exposure (receivable minus unearned profit)?
2. What journal entries are required to stop profit recognition?
3. Under AAOIFI FAS 30, what stage classification applies?
4. Under IFRS 9, how does the ECL model apply?
5. What remedies does the bank have (collateral, guarantor, legal)?

Work through this for both a Bahrain entity (AAOIFI) and a
Malaysian entity (MFRS 9). Note any differences in the
impairment treatment.
```

**What you are learning:** The Shariah constraint on default — no additional charges on overdue amounts — is one of the most important practical differences between Islamic and conventional banking. In conventional banking, late payment fees and penalty interest are standard revenue sources. In Islamic banking, they are prohibited. This changes the economics of credit risk management and makes the ECL provisioning exercise more consequential, because the bank cannot recover additional income from defaulting customers.

### Prompt 2: Commodity Murabaha Cash Flow Analysis

```
A customer needs 1,000,000 in cash. The bank structures a
commodity murabaha (tawarruq):

Step 1: Bank buys palladium from Broker A for 1,000,000
Step 2: Bank sells palladium to customer at 1,180,000 (18% over 12 months)
Step 3: Customer sells palladium to Broker B for 1,000,000

Questions:
1. Generate the complete journal entry sequence for all three steps
2. After Step 3, what does the customer have? What does the bank have?
3. How does this differ economically from a conventional 18% loan?
4. Why do some Shariah scholars object to this structure?
5. What makes the difference between permissible classical tawarruq
   and impermissible organised tawarruq?

Use language appropriate for a CA/CPA who understands Islamic
finance principles but has not structured a tawarruq before.
```

**What you are learning:** Commodity murabaha exposes the tension between Shariah form and economic substance. The accounting is identical to asset murabaha. The economic outcome for the customer — receiving cash now and repaying more later — resembles a conventional loan. The Shariah validity depends on whether the commodity transactions are genuinely separate. This is the kind of judgment that distinguishes a competent Islamic finance practitioner from one who merely follows templates.

---

Continue to [Lesson 5: Ijarah and IMB →](./05-ijarah-imb.md)
