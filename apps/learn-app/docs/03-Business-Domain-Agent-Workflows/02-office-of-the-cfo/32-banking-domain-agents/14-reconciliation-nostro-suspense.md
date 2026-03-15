---
slug: /Business-Domain-Agent-Workflows/banking-domain-agents/reconciliation-nostro-suspense
sidebar_position: 14
title: "Bank Reconciliation — Nostro, Suspense, and GL-to-Risk"
description: "How banks reconcile across five categories — nostro accounts, suspense items, inter-company, securities, and regulatory — using a matching hierarchy from exact through fuzzy to unmatched residual, with AI automating Level 1-2 matching while humans investigate breaks"
keywords:
  [
    "bank reconciliation",
    "nostro reconciliation",
    "suspense account clearing",
    "GL to risk reconciliation",
    "four-way provision recon",
    "IFRS 9 provision reconciliation",
    "banking operations AI",
    "break classification",
    "ageing SLA",
    "reconciliation automation",
  ]
chapter: 21
lesson: 14
duration_minutes: 45

# HIDDEN SKILLS METADATA
skills:
  - name: "Perform Nostro Reconciliation and Classify Breaks"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Data Literacy"
    measurable_at_this_level: "Student can match mirror ledger entries to statement entries, identify and classify breaks as timing, mirror-only, statement-only, amount mismatch, or duplicate, and apply ageing SLA escalation rules"

  - name: "Execute Four-Way IFRS 9 Provision Reconciliation"
    proficiency_level: "B2"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Data Literacy"
    measurable_at_this_level: "Student can reconcile ECL across four sources (ECL model output, risk system, general ledger, regulatory disclosure) and trace each break to its root cause — timing, methodology, data capture, or error"

  - name: "Clear Suspense Items Using Ageing Analysis and Escalation"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can prioritise suspense items by age, match items to source transactions, apply escalation SLAs, and recommend clearance actions including write-off for aged items"

learning_objectives:
  - objective: "Perform nostro reconciliation by matching mirror and statement entries, identifying and classifying breaks by type"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student correctly matches entries in Exercise 14, classifies all unmatched items, and produces an ageing report with escalation recommendations"

  - objective: "Execute a four-way IFRS 9 provision reconciliation across ECL model, risk system, GL, and regulatory disclosure"
    proficiency_level: "B2"
    bloom_level: "Apply"
    assessment_method: "Student reconciles all four sources in Exercise 15, identifies three known breaks, traces each to its root cause, and recommends the correct adjustments"

  - objective: "Clear suspense account items using matching, ageing analysis, and escalation procedures"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student prioritises 12 suspense items in Exercise 16, matches items to source transactions, applies ageing SLAs, and recommends write-off for items exceeding 30 days"

cognitive_load:
  new_concepts: 6
  concepts_list:
    - "Nostro reconciliation: matching the bank's mirror ledger against the correspondent bank's statement"
    - "Suspense account clearing: identifying and resolving unallocated items with ageing SLA escalation"
    - "GL-to-risk-system reconciliation: ensuring the general ledger and risk system agree on exposures and provisions"
    - "Four-way provision reconciliation: ECL model vs risk system vs GL vs regulatory disclosure"
    - "Break classification: mirror-only, statement-only, amount mismatch, duplicate, timing"
    - "AI automation levels: Level 1 (auto-matching), Level 2 (exception intelligence), Level 3 (continuous recon)"
  assessment: "6 concepts at B1 level — within the B1 limit of 10. Students have completed the three regulatory pillars and are now learning the operational infrastructure that ensures data integrity across all pillars. Reconciliation is a new domain but uses familiar analytical skills."

differentiation:
  extension_for_advanced: "Design a Level 3 continuous reconciliation workflow that runs intra-day rather than end-of-day. What data feeds are required? How do you handle transactions that are in-flight at reconciliation time? What SLA changes are needed?"
  remedial_for_struggling: "Focus on Exercise 14 (nostro reconciliation) — the matching process is the most intuitive of the five reconciliation types. If you can match 7 mirror entries to 8 statement entries and explain the breaks, you have the core reconciliation skill."
---

# Bank Reconciliation — Nostro, Suspense, and GL-to-Risk

:::info Nostro Account
**A bank's own account held at another bank (the "correspondent") in a foreign currency or for access to a foreign payment system -- from the Latin "nostro" meaning "ours."**

A UK bank holds a USD nostro account at JPMorgan New York with a balance of $25 million to settle dollar-denominated client payments. Every transaction must appear in both the UK bank's mirror ledger and JPMorgan's statement.

Nostro reconciliation is critical because a mismatch means the bank's reported cash position is wrong -- a GBP 1.5 million unreconciled break could mask a failed payment, a duplicated entry, or an unauthorised debit.
:::

:::info Suspense Account
**A temporary holding account where transactions are parked when the bank cannot immediately identify the correct destination account, customer, or GL code.**

An incoming SWIFT payment of GBP 45,000 arrives with a truncated reference -- the bank cannot match it to a customer, so it sits in the payments suspense account until operations staff identify the intended recipient.

Suspense accounts must be cleared within strict SLA timelines (typically 30 days maximum) because aged suspense items can hide errors, fraud, or unbooked losses that distort the bank's financial position.
:::

In Lessons 3 through 13, you built and stress-tested the three regulatory pillars — IFRS 9, Basel, and AML. Every calculation in those lessons depended on the same assumption: the numbers are correct. The ECL is calculated from accurate exposure data. The capital ratio uses the right RWA. The AML screen matches against the correct transaction records. Reconciliation is where that assumption is tested.

Bank reconciliation is the operational discipline that ensures every number in every system agrees — or, when they do not agree, that every difference is identified, classified, aged, escalated, and resolved. A bank that cannot reconcile its books cannot trust its regulatory returns, its financial statements, or its risk reports. This lesson covers the five categories of bank reconciliation and shows how the banking plugin's reconciliation skills automate the matching while humans investigate the breaks.

## Five Categories of Bank Reconciliation

| Category             | What Is Compared                                       | Why It Matters                                             |
| -------------------- | ------------------------------------------------------ | ---------------------------------------------------------- |
| **Nostro**           | Bank's mirror ledger vs correspondent bank's statement | Ensures cash balances with other banks are accurate        |
| **Suspense**         | Unallocated items vs source transactions               | Prevents items from ageing indefinitely without resolution |
| **Inter-company**    | Group entity books vs counterparty entity books        | Ensures intra-group balances eliminate on consolidation    |
| **Securities/Trade** | Front office trade vs back office settlement           | Ensures trades are settled and booked correctly            |
| **Regulatory**       | Internal calculations vs regulatory returns            | Ensures filed returns match internal risk systems          |

Each category follows the same matching hierarchy, but the data sources and break types differ.

## The Matching Hierarchy

When the reconciliation agent processes a pair of data sets, it applies matches in priority order:

| Level | Match Type             | Description                                                       | Automation                      |
| ----- | ---------------------- | ----------------------------------------------------------------- | ------------------------------- |
| 1     | **Exact**              | Reference number, amount, date all match perfectly                | Fully automated                 |
| 2     | **Fuzzy**              | Reference or amount matches within tolerance (e.g., FX rounding)  | Automated with confirmation     |
| 3     | **Date tolerance**     | Same reference and amount but different settlement dates (timing) | Automated, flagged for review   |
| 4     | **Partial sum pool**   | Multiple items on one side sum to a single item on the other      | Suggested by AI, human confirms |
| 5     | **Unmatched residual** | No match found — requires human investigation                     | Human required                  |

The banking plugin's `recon-nostro` and `recon-suspense` skills operate at Levels 1-3 automatically and suggest Level 4 matches for human review. Level 5 items are flagged as exceptions with a hypothesis about the likely cause.

## Break Classification

When items do not match, every break must be classified:

| Break Type          | Description                                                         | Example                                                 |
| ------------------- | ------------------------------------------------------------------- | ------------------------------------------------------- |
| **Mirror only**     | Item appears in bank's records but not on correspondent's statement | Payment sent but not yet processed by correspondent     |
| **Statement only**  | Item appears on correspondent's statement but not in bank's records | Fee charged by correspondent, not yet booked internally |
| **Amount mismatch** | Same transaction but different amounts                              | FX conversion difference, fee not included              |
| **Duplicate**       | Same transaction recorded twice in one system                       | System error during batch processing                    |
| **Timing**          | Same transaction, same amount, different dates                      | Settlement date vs value date difference                |

## Ageing SLA

Every unresolved break has an age, and every age triggers an escalation:

| Age                   | Action                               | Escalation To         |
| --------------------- | ------------------------------------ | --------------------- |
| 0-2 business days     | Monitor — likely timing difference   | Operations analyst    |
| 3-5 business days     | Investigate — notify team lead       | Team lead             |
| 6-15 business days    | Escalate — head of operations review | Head of operations    |
| 16-30 business days   | Critical — CFO notification          | CFO                   |
| Over 30 business days | Write-off assessment required        | CFO + Audit committee |

Items over 30 days require a formal decision: either resolve the break or write off the amount. The write-off triggers an IFRS 9 impact (the amount reduces retained earnings and therefore CET1) — which connects back to the cross-pillar cascade from Lesson 11.

## Four-Way IFRS 9 Provision Reconciliation

The most important reconciliation for this chapter connects IFRS 9 to the rest of the bank's systems. Four sources must agree:

| Source                    | What It Contains                           | System                      |
| ------------------------- | ------------------------------------------ | --------------------------- |
| **ECL Model**             | Calculated ECL by stage, segment, scenario | Risk analytics platform     |
| **Risk System**           | Booked provisions by facility              | Credit risk system          |
| **General Ledger**        | Provision balance in the accounts          | Core banking / ERP          |
| **Regulatory Disclosure** | IFRS 7 note figures, Pillar 3 disclosure   | Regulatory reporting system |

The provision movement tie-out follows this formula:

**Opening Provision + New Charges - Write-offs + Recoveries +/- FX Translation = Closing Provision**

Each of the four sources must produce the same closing balance. When they do not, the break reveals a data integrity issue that affects regulatory returns, financial statements, or both.

### Common Four-Way Breaks

| Break                              | Typical Cause                                                      | Resolution                            |
| ---------------------------------- | ------------------------------------------------------------------ | ------------------------------------- |
| ECL Model vs Risk System           | Model rerun timing — model ran before latest staging update        | Re-run model with current staging     |
| Risk System vs GL                  | Booking lag — risk system updated but GL journal not yet posted    | Post the journal entry                |
| GL vs Regulatory Disclosure        | Rounding or aggregation difference in disclosure preparation       | Adjust disclosure to match GL         |
| ECL Model vs Regulatory Disclosure | Methodology difference — model uses 5 scenarios, disclosure uses 3 | Document and disclose the methodology |

## AI Automation Levels for Reconciliation

The banking plugin implements three levels of reconciliation automation:

**Level 1 — Auto-Matching**: The `recon-nostro` and `recon-suspense` skills automatically match items using the matching hierarchy (Levels 1-3). Matched items are cleared without human intervention. This handles 70-85% of items in a typical reconciliation.

**Level 2 — Exception Intelligence**: For unmatched items, the skill generates a hypothesis about the likely cause. For example: "Statement-only item of GBP 12,500 on Day 15 — probable correspondent fee. Suggested match: fee schedule line item for monthly custody charge." The human reviews the hypothesis and accepts, rejects, or investigates further.

**Level 3 — Continuous Reconciliation**: Rather than running reconciliation at end-of-day, the skills monitor transaction feeds in real-time and flag breaks as they occur. This reduces the ageing problem because breaks are identified within hours rather than days.

---

## Exercise 14: Nostro Reconciliation

**Duration**: 35 minutes
**Skills used**: `recon-nostro`

You are reconciling the bank's GBP nostro account with Barclays. The bank's mirror ledger shows 7 entries. Barclays' statement shows 8 entries. Match them and classify every break.

### Mirror Ledger (Bank's Records)

| Ref  | Date   | Description                   | Debit       | Credit        |
| ---- | ------ | ----------------------------- | ----------- | ------------- |
| M001 | Day 1  | Client payment - ABC Corp     |             | GBP 250,000   |
| M002 | Day 2  | SWIFT transfer in             | GBP 180,000 |               |
| M003 | Day 3  | Salary batch - 450 employees  |             | GBP 1,850,000 |
| M004 | Day 5  | CHAPS payment - supplier      |             | GBP 95,000    |
| M005 | Day 7  | SWIFT transfer in             | GBP 420,000 |               |
| M006 | Day 8  | Client payment - XYZ Ltd      |             | GBP 310,000   |
| M007 | Day 10 | CHAPS payment - tax authority |             | GBP 750,000   |

### Statement (Barclays' Records)

| Ref  | Date   | Description         | Debit       | Credit        |
| ---- | ------ | ------------------- | ----------- | ------------- |
| S001 | Day 1  | Payment - ABC Corp  |             | GBP 250,000   |
| S002 | Day 2  | Incoming SWIFT      | GBP 180,000 |               |
| S003 | Day 3  | Salary batch        |             | GBP 1,850,000 |
| S004 | Day 5  | CHAPS out           |             | GBP 95,000    |
| S005 | Day 7  | Incoming SWIFT      | GBP 420,000 |               |
| S006 | Day 8  | Payment - XYZ Ltd   |             | GBP 308,500   |
| S007 | Day 10 | CHAPS out - HMRC    |             | GBP 750,000   |
| S008 | Day 10 | Monthly custody fee |             | GBP 2,500     |

### Your Tasks

1. Match mirror entries to statement entries
2. Identify all breaks (unmatched or mismatched items)
3. Classify each break (timing, amount mismatch, mirror-only, statement-only)
4. For M006/S006 (GBP 310,000 vs GBP 308,500): what is the likely cause of the GBP 1,500 difference?
5. For S008 (GBP 2,500 custody fee): this has no mirror entry — what action is needed?
6. Produce an ageing report assuming today is Day 12

---

## Exercise 15: IFRS 9 Provision Reconciliation

**Duration**: 40 minutes
**Skills used**: `recon-provision-four-way`

Reconcile the IFRS 9 provision across four sources. Three known breaks exist — find them and trace each to its root cause.

### Source Data

| Source                | Stage 1   | Stage 2   | Stage 3   | Total      |
| --------------------- | --------- | --------- | --------- | ---------- |
| ECL Model             | GBP 18.2M | GBP 62.5M | GBP 44.8M | GBP 125.5M |
| Risk System           | GBP 18.2M | GBP 63.1M | GBP 44.8M | GBP 126.1M |
| General Ledger        | GBP 18.2M | GBP 62.5M | GBP 43.2M | GBP 123.9M |
| Regulatory Disclosure | GBP 18.0M | GBP 63.0M | GBP 45.0M | GBP 126.0M |

### Known Issues

The finance team has flagged three issues that may explain some or all of the breaks:

1. **Staging update timing**: The risk system received a batch staging update at 6pm on the reporting date. The ECL model was run at 4pm using the previous staging.
2. **Write-off processing**: A GBP 1.6M Stage 3 write-off was approved on the reporting date but the GL journal was posted on the following business day.
3. **Regulatory rounding**: The regulatory disclosure rounds all figures to the nearest GBP 0.5M for Pillar 3 reporting.

### Your Tasks

1. Identify all four-way breaks (where sources disagree)
2. Map each break to one of the three known issues
3. For each break, determine: Which source has the "correct" figure?
4. Recommend adjustments to bring all four sources into agreement
5. Produce a provision movement reconciliation:

| Movement              | Amount                               |
| --------------------- | ------------------------------------ |
| Opening provision     | GBP 118.0M                           |
| New charges           | ?                                    |
| Write-offs            | ?                                    |
| Recoveries            | +GBP 0.3M                            |
| FX translation        | -GBP 0.2M                            |
| **Closing provision** | **Should equal the "correct" total** |

---

## Exercise 16: Suspense Clearance

**Duration**: 30 minutes
**Skills used**: `recon-suspense`

Clear 12 suspense items across 3 suspense accounts. Apply ageing SLAs and recommend actions.

### Suspense Items

| Item | Account  | Amount        | Date Entered | Age (Days) | Description                                       |
| ---- | -------- | ------------- | ------------ | ---------- | ------------------------------------------------- |
| SP01 | Payments | GBP 45,000    | Day -2       | 2          | Unallocated incoming SWIFT — no reference         |
| SP02 | Payments | GBP 12,800    | Day -5       | 5          | Partial payment — customer ref truncated          |
| SP03 | Payments | GBP 890,000   | Day -8       | 8          | Large incoming — sender name mismatch             |
| SP04 | Payments | GBP 3,200     | Day -22      | 22         | Small unallocated — multiple possible matches     |
| SP05 | Fees     | GBP 1,500     | Day -1       | 1          | Custody fee — account coding query                |
| SP06 | Fees     | GBP 8,750     | Day -12      | 12         | Correspondent bank charge — awaiting invoice      |
| SP07 | Fees     | GBP 250       | Day -35      | 35         | Small item — unable to identify source            |
| SP08 | Trading  | GBP 125,000   | Day -3       | 3          | FX settlement — value date mismatch               |
| SP09 | Trading  | GBP 2,100,000 | Day -1       | 1          | Bond settlement — awaiting custodian confirmation |
| SP10 | Trading  | GBP 340,000   | Day -7       | 7          | Equity trade — counterparty dispute on price      |
| SP11 | Trading  | GBP 15,000    | Day -18      | 18         | Failed trade — awaiting broker response           |
| SP12 | Payments | GBP 67,500    | Day -28      | 28         | Returned payment — original transaction unclear   |

### Your Tasks

1. Apply the ageing SLA to each item — who should be notified?
2. Prioritise: which items need immediate action?
3. For each item, suggest a clearance action (match, return, write-off, or escalate)
4. SP07 (GBP 250, age 35 days) exceeds the 30-day SLA — recommend formal disposition
5. SP09 (GBP 2.1M, age 1 day) is the largest item — is the ageing SLA appropriate given the amount, or should large items have different escalation rules?
6. Calculate: what is the total suspense balance by account and by ageing band?

## Using the Banking Plugin

The `bank-reconciliation` skill performs nostro matching, classifies breaks, applies ageing SLAs, and generates exception hypotheses. Here is a worked example.

**Worked example.** Kenji Watanabe, Reconciliation Officer at Pacific Ledger Bank, is running the daily GBP nostro reconciliation against the correspondent bank. He types:

```
Reconcile this nostro account:
Mirror ledger (bank's records):
  M001: Day 1, Credit GBP 250,000 (ABC Corp payment)
  M002: Day 2, Debit GBP 180,000 (SWIFT in)
  M003: Day 3, Credit GBP 1,850,000 (salary batch)
  M006: Day 8, Credit GBP 310,000 (XYZ Ltd payment)
Statement (correspondent):
  S001: Day 1, Credit GBP 250,000 (ABC Corp)
  S002: Day 2, Debit GBP 180,000 (SWIFT in)
  S003: Day 3, Credit GBP 1,850,000 (salary batch)
  S006: Day 8, Credit GBP 308,500 (XYZ Ltd)
  S008: Day 10, Credit GBP 2,500 (monthly custody fee)
Today is Day 12.
Jurisdiction: UK PRA
```

The agent routes through `bank-reconciliation` to produce a nostro reconciliation report.

**What to expect:** The agent produces a matching report with break classifications and ageing escalation. Your output will vary based on the entries you provide, but look for these sections:

| Section               | Intent                                                             | What to Verify                                                                                       |
| --------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| Matched items         | Lists entries matched at each level (exact, fuzzy, date tolerance) | All exact matches correctly paired; matching percentage reported                                     |
| Breaks                | Classifies each unmatched or mismatched item by type               | Each break type correct (amount mismatch, mirror-only, statement-only, timing, duplicate)            |
| Hypotheses            | Suggests a likely cause for each break                             | Hypotheses are plausible (e.g., correspondent fee for small differences, timing for date mismatches) |
| Ageing and escalation | Applies ageing SLA to each break                                   | Correct escalation level for each break's age; action recommendations appropriate                    |

:::note Your output will vary
The specific matches and breaks depend on the mirror and statement entries you provide. The teaching point is the matching hierarchy and break classification discipline — verify that every item is either matched or classified with an ageing escalation, not that specific amounts match.
:::

Kenji investigates discrepancies by checking the correspondent's fee schedule, confirms any handling charges deducted at source, and posts adjustment entries to clear the breaks.

## Try With AI

**Setup:** Use these prompts in Cowork or your preferred AI assistant.

### Prompt 1: Reproduce

```
Match these nostro entries and classify all breaks:

Mirror ledger (7 entries):
M001: Day 1, Credit GBP 250,000 (ABC Corp payment)
M002: Day 2, Debit GBP 180,000 (SWIFT in)
M003: Day 3, Credit GBP 1,850,000 (salary batch)
M004: Day 5, Credit GBP 95,000 (CHAPS supplier)
M005: Day 7, Debit GBP 420,000 (SWIFT in)
M006: Day 8, Credit GBP 310,000 (XYZ Ltd payment)
M007: Day 10, Credit GBP 750,000 (CHAPS tax)

Statement (8 entries):
S001-S005: Match perfectly with M001-M005
S006: Day 8, Credit GBP 308,500 (XYZ Ltd)
S007: Day 10, Credit GBP 750,000 (HMRC)
S008: Day 10, Credit GBP 2,500 (custody fee)

For each break:
1. Classify as: timing, amount mismatch, mirror-only, statement-only
2. Explain the likely cause
3. Recommend the resolution action
4. Apply ageing SLA (today is Day 12)
```

**What you are learning:** Nostro reconciliation is the foundation of all bank reconciliation. The GBP 1,500 difference between M006 and S006 could be a fee deduction, an FX adjustment, or a data error — each has a different resolution path. The custody fee (S008) is a statement-only item that needs booking in the bank's records. By classifying breaks, you build the skill of systematic exception handling that applies to all five reconciliation categories.

### Prompt 2: Adapt

```
Reconcile these IFRS 9 provision figures across four sources:

ECL Model: S1 GBP 18.2M, S2 GBP 62.5M, S3 GBP 44.8M = GBP 125.5M
Risk System: S1 GBP 18.2M, S2 GBP 63.1M, S3 GBP 44.8M = GBP 126.1M
GL: S1 GBP 18.2M, S2 GBP 62.5M, S3 GBP 43.2M = GBP 123.9M
Regulatory: S1 GBP 18.0M, S2 GBP 63.0M, S3 GBP 45.0M = GBP 126.0M

Known issues:
1. Risk system got a staging update at 6pm; ECL model ran at 4pm
2. GBP 1.6M Stage 3 write-off approved but GL journal posted next day
3. Regulatory rounds to nearest GBP 0.5M

For each break: identify which sources disagree, map to a known
issue, determine the "correct" figure, and recommend adjustments.
```

**What you are learning:** The four-way provision reconciliation is where IFRS 9 meets operational reality. Models run at different times. GL postings have processing lags. Regulatory disclosures use different rounding conventions. Each break has a logical explanation — but finding that explanation requires understanding how data flows between systems. This is the operational competence that ensures the ECL figures you calculated in Lessons 3-5 actually reach the financial statements correctly.

### Prompt 3: Apply

```
I have 12 suspense items across 3 accounts (Payments, Fees,
Trading). Ages range from 1 to 35 days. Total GBP 3.6M.

Apply this ageing SLA:
- 0-2 days: monitor
- 3-5 days: investigate, notify team lead
- 6-15 days: escalate to head of ops
- 16-30 days: CFO notification
- Over 30 days: write-off assessment

For each item, recommend: match, return, escalate, or write-off.
Then answer: should a GBP 2.1M item aged 1 day really have the
same escalation timeline as a GBP 250 item? Design an
amount-weighted SLA that accounts for materiality.
```

**What you are learning:** Suspense clearance reveals a tension between standardised SLAs and risk-based prioritisation. A flat ageing SLA treats GBP 250 and GBP 2.1M identically, but the risk to the bank is not the same. By designing an amount-weighted SLA, you learn to think about reconciliation as a risk management discipline, not just an operational checklist.

## Flashcards Study Aid

<Flashcards />
