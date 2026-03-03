---
slug: /Business-Domain-Agent-Workflows/ai-transformation-ca-cpa-practice/accounting-reporting-practice-lab
sidebar_position: 11
title: "Accounting & Reporting Practice Lab"
description: "Build four complete Cowork workflows for accounting and financial reporting — autonomous bookkeeping from source documents, IFRS financial statements with full disclosure, scheduled month-end close automation, and multi-entity consolidation with intercompany elimination"
keywords:
  [
    "accounting practice lab",
    "autonomous bookkeeping",
    "IFRS financial statements",
    "month-end close",
    "consolidation",
    "intercompany elimination",
    "Cowork workflow",
    "transaction register",
    "trial balance",
    "disclosure notes",
    "scheduled tasks",
    "CA/CPA exercises",
  ]
chapter: 19
lesson: 11
duration_minutes: 90

# HIDDEN SKILLS METADATA
skills:
  - name: "Build Autonomous Bookkeeping Workflows"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can construct a Cowork workflow that classifies source documents, maps transactions to a chart of accounts, builds a transaction register, and flags items requiring professional judgment — completing the full bookkeeping cycle autonomously for routine transactions"

  - name: "Produce IFRS-Compliant Financial Statements Using Cowork"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can direct Cowork through the full IFRS reporting cycle — trial balance review, suspense investigation, income statement, balance sheet, cash flow statement, disclosure notes, and board presentation — while identifying and resolving data gaps"

  - name: "Design Scheduled Month-End Close with Exception Handling"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can design a scheduled month-end close workflow with specific exception escalation rules, test the exception paths, and evaluate whether the exception conditions capture the professional judgment boundaries correctly"

  - name: "Execute Multi-Entity Consolidation with Elimination Entries"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can direct Cowork through a multi-entity consolidation — aggregation, investment elimination, intercompany loan elimination, trading elimination, and unrealised profit adjustment — and verify the consolidated statements for common errors"

learning_objectives:
  - objective: "Build an autonomous bookkeeping workflow that classifies source documents, maps transactions to accounts, and flags items requiring professional judgment"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces a complete transaction register from 8-12 source documents, with correct account coding for routine items and appropriate flags for judgment-dependent items"

  - objective: "Direct Cowork through the full IFRS financial reporting cycle from trial balance to board presentation, identifying and resolving data gaps along the way"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Student produces income statement, balance sheet, cash flow statement, and disclosure notes from a trial balance that contains a deliberate error, successfully identifying and resolving the suspense item"

  - objective: "Design a scheduled month-end close workflow with exception escalation rules that encode professional judgment boundaries"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Student writes a scheduled task specification with at least four exception conditions and successfully tests one exception path to confirm the workflow stops and alerts rather than proceeding silently"

  - objective: "Execute a multi-entity consolidation with four types of intercompany elimination entries and verify the consolidated statements for common errors"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Student produces consolidated financial statements with investment, loan, trading, and unrealised profit eliminations correctly applied, and identifies at least two common consolidation errors to check"

cognitive_load:
  new_concepts: 8
  concepts_list:
    - "Source document classification and autonomous transaction coding"
    - "Chart of accounts mapping with judgment boundary identification"
    - "IFRS financial statement production from trial balance"
    - "Suspense investigation and trial balance reconciliation"
    - "Scheduled task specification with exception escalation rules"
    - "Exception path testing for autonomous workflows"
    - "Multi-entity consolidation with four elimination types"
    - "Unrealised profit in inventory elimination"
  assessment: "8 concepts across 4 exercises at B1-B2 level. Students select 1-2 exercises to complete fully, reviewing all four. The lab format distributes cognitive load across self-selected exercises rather than requiring mastery of all 8 concepts in a single session."

differentiation:
  extension_for_advanced: "After completing any exercise, write a SKILL.md that encodes the workflow as a reusable agent instruction. Include the judgment boundaries — the conditions where the agent must escalate to a human rather than proceeding autonomously. Compare your SKILL.md to the reference implementation in the companion repo."
  remedial_for_struggling: "Start with Exercise 8 (bookkeeping). Focus on Steps 1-3 only — document classification, account mapping, and transaction register creation. These three steps establish the core pattern of directing Cowork through a structured workflow. Return to the remaining steps after the core pattern feels comfortable."

teaching_guide:
  lesson_type: "lab"
  session_group: 4
  session_title: "Accounting & Reporting Practice Lab"
  key_points:
    - "Each exercise builds a complete workflow — not isolated commands but end-to-end processes that mirror real CA/CPA practice"
    - "The judgment boundary is the central learning objective: identifying which steps the agent handles reliably and which require professional oversight"
    - "Exercise 10 (scheduled month-end close) teaches that exception handling is more important than routine execution — the quality of a scheduled task is measured by its exception rules, not its happy path"
    - "Exercise 11 (consolidation) targets the unrealised profit elimination as the step most frequently done incorrectly — the one that requires genuine understanding rather than mechanical rule application"
  misconceptions:
    - "Students may think these exercises replace accounting knowledge — they require it. The agent cannot determine whether a transaction is an owner's drawing or a business expense without professional judgment"
    - "Students may skip the quality review steps (Step 7/8 in each exercise) — these are the most professionally important steps because they build the habit of directing verification rather than assuming correctness"
    - "Students may assume a scheduled task that never asks questions is working well — a bookkeeping agent that never flags ambiguity is coding uncertain transactions without alerting anyone"
  discussion_prompts:
    - "In Exercise 8, the agent flags transactions requiring professional judgment. Is this a limitation or a feature? What would happen if the agent coded every transaction without asking?"
    - "In Exercise 10, you defined exception conditions. How would you determine the right thresholds for your own practice? What is the cost of a threshold that is too high versus too low?"
  teaching_tips:
    - "Encourage students to attempt Exercise 9 (IFRS statements) even if they do not complete it — the trial balance suspense investigation in Step 1 is a powerful demonstration of directed analytical workflow"
    - "For Exercise 10, have students write the workflow specification on paper first (Step 1) before touching Cowork — the discipline of specification before execution is the transferable skill"
    - "Exercise 11 is the most technically demanding — recommend it for students with consolidation experience who want to see how the agent handles the unrealised profit adjustment"
  assessment_checks:
    - question: "Why does Exercise 8 include a step where the agent flags transactions it cannot code with certainty?"
      expected_response: "Because a bookkeeping agent that never asks questions is one that is coding ambiguous transactions without flagging them — which is worse than asking. The professional value of the CA/CPA is in answering the questions the agent cannot answer for itself."
    - question: "In Exercise 10, why is Step 5 (exception escalation rules) more important than Step 4 (the scheduled task itself)?"
      expected_response: "Because a scheduled task without robust exception handling is not automation — it is silent failure. The conditions that cause the task to stop and ask a human represent the professional judgment embedded in the workflow."
    - question: "What is the consolidation step most frequently done incorrectly, and why does it require understanding rather than mechanical rule application?"
      expected_response: "The unrealised profit elimination in closing inventory. It requires understanding the IFRS 10 principle that all traces of intra-group profit must be eliminated until goods are sold to a third party — not just applying a formula."
---


# Accounting & Reporting Practice Lab

> _"A bookkeeping agent that never asks questions is one that is coding ambiguous transactions without flagging them. That is worse than asking."_

In Lessons 7-10, you installed the plugin stack, walked through orchestrated workflows, and built jurisdiction and methodology extensions. Now you will put all of it to work. This practice lab contains four exercises that each build a complete Cowork workflow for a specific accounting and financial reporting process — from raw inputs to professional deliverables.

These are not quick demonstrations. Each exercise mirrors a real engagement: you direct Cowork through a multi-step process, review its output at judgment points, refine where needed, and produce a deliverable that a reviewing partner could assess. Choose one or two exercises to complete fully. Review all four to understand the range of workflows available to you.

:::info Lab Format
**Choose your path.** You do not need to complete all four exercises in one session. Select the exercise that matches your current practice area or interest:

- **Exercise 8** (50 min) — Best starting point. Covers the full bookkeeping cycle from source documents to coded transaction register.
- **Exercise 9** (60 min) — Most comprehensive. Produces complete IFRS financial statements with disclosure notes and a board presentation.
- **Exercise 10** (40 min) — Most architecturally important. Builds a scheduled month-end close with exception handling.
- **Exercise 11** (55 min) — Most technically demanding. Multi-entity consolidation with intercompany elimination.

**Data files:** Download the exercise data from the [companion repository](https://github.com/panaversity/ca-cpa-domain-agents/releases/latest) — use `ca-cpa-exercise-data.zip` or clone [the repo](https://github.com/panaversity/ca-cpa-domain-agents). Each exercise references specific input files from the `exercises/` folder — trial balances, source document templates, and hypothetical entity data.
:::

---

## Exercise 8: Autonomous Bookkeeping from Source Documents (50 min)

**What you'll build:** A Cowork workflow that takes raw source documents and produces a coded transaction register ready for import into any accounting system.

**Requirements:** Cowork (Team or Enterprise), `finance@knowledge-work-plugins` installed, 8-12 source documents (receipts, invoices, bank statements — real or from the [companion repo](https://github.com/panaversity/ca-cpa-domain-agents) at `exercises/source-documents/`).

### Step-by-Step Instructions

**1. Prepare your source documents.** Place 8-12 documents in `/CA-CPA-Exercises/inputs/`. Include a mix: at least two supplier invoices, two customer invoices or receipts, one bank statement page, and two expense receipts. If using hypothetical documents, create simple text files describing each transaction.

**2. Classify all documents.** In Cowork, say:

```
Review all documents in the /inputs/ folder. Classify each one as:
supplier invoice, customer invoice, bank entry, expense receipt,
or other. For each document, extract: date, counterparty name,
amount (gross and net of tax where applicable), and a one-line
description of what the transaction represents.
```

Review the classification output. Confirm that every document has been read correctly. Note any documents where Cowork flagged uncertainty about the nature of the transaction.

**3. Map to chart of accounts.** Say:

```
For each transaction you classified, suggest the correct debit and
credit accounts using a standard IFRS chart of accounts. Use account
codes: 1xxx for assets, 2xxx for liabilities, 3xxx for equity,
4xxx for revenue, 5xxx for cost of sales, 6xxx for operating expenses,
7xxx for finance costs.
```

Review the proposed journal entries. For each one, ask yourself: would a competent junior accountant have made the same coding decision? Note any that required judgment beyond mechanical rule-application.

**4. Build the transaction register.** Say:

```
Create an Excel file at /outputs/transaction-register.xlsx with
columns: Date, Document Reference, Counterparty, Description,
Debit Account Code, Debit Account Name, Debit Amount, Credit Account
Code, Credit Account Name, Credit Amount, Tax Code, Notes.
Populate it with every transaction from the source documents.
```

**5. Run `/journal-entry` for complex transactions.** For any transaction that required judgment in Step 3, run:

```
/journal-entry [describe the transaction in plain English]
```

Compare the command's output with your Step 3 coding decision. If they differ, the difference is a judgment call worth examining.

**6. Reconcile to source totals.** Say:

```
Sum the debit and credit columns in the transaction register.
Confirm they balance. Then reconcile the total gross receipts to
the customer invoices and the total gross payments to the supplier
invoices. Produce a reconciliation summary.
```

**7. Flag incomplete documents.** Say:

```
Are there any documents in the /inputs/ folder where the information
is insufficient to produce a complete journal entry — missing amounts,
unclear counterparties, or transactions that require a professional
accounting judgment I have not yet provided? List them with a specific
question for each.
```

Answer each question, then ask Cowork to update the transaction register with the completed entries.

**8. Produce the bookkeeping summary.** Say:

```
From the completed transaction register, produce a summary showing:
total transactions by account code, total value by account code,
and a trial balance extract for the accounts affected. Save to
/outputs/bookkeeping-summary.xlsx.
```

**Check your work:** Your transaction register should contain one row per transaction with balanced debits and credits. The trial balance extract should balance. At least one transaction should have been flagged for professional judgment in Step 7 — if none were flagged, your source documents may have been too straightforward. The value you provided was not in coding routine transactions — it was in answering the questions the agent could not answer for itself.

:::tip Extension Exercise
Add a second run with documents that include a transaction the agent is likely to mis-code — an owner's drawing that looks like an expense, or a deposit that might be revenue or a liability. Verify that the agent either codes it correctly or flags it for judgment. Write a SKILL.md instruction that resolves the ambiguity for your specific entity type.
:::

---

## Exercise 9: IFRS Financial Statements with Full Disclosure Pack (60 min)

**What you'll build:** Complete IFRS financial reporting output — income statement, balance sheet, cash flow statement, selected notes, and a board-ready presentation — from a single trial balance.

**Requirements:** Cowork (Team or Enterprise), Claude in Excel and Claude in PowerPoint installed, `finance@knowledge-work-plugins`, a trial balance in Excel (real or use the hypothetical data below).

### Hypothetical Trial Balance

Create `/inputs/trial-balance.xlsx` with the following data (PKR '000):

| Account                             | Debit       | Credit      |
| ----------------------------------- | ----------- | ----------- |
| Cash and cash equivalents           | 8,400       |             |
| Trade receivables                   | 24,600      |             |
| Inventory                           | 18,200      |             |
| Property, plant and equipment (net) | 92,000      |             |
| Trade payables                      |             | 15,400      |
| Bank borrowings (current)           |             | 12,000      |
| Bank borrowings (non-current)       |             | 35,000      |
| Share capital                       |             | 50,000      |
| Retained earnings (opening)         |             | 28,500      |
| Revenue                             |             | 185,000     |
| Cost of goods sold                  | 128,000     |             |
| Distribution costs                  | 14,200      |             |
| Administrative expenses             | 11,400      |             |
| Finance costs                       | 4,100       |             |
| Income tax expense                  | 6,800       |             |
| **Totals**                          | **307,700** | **325,900** |

The trial balance does not balance by design — one item (deferred tax liability of PKR 18,200) is missing. Part of this exercise is identifying what is missing.

### Step-by-Step Instructions

**1. Trial balance review and suspense investigation.** Place the trial balance in `/inputs/`. Run:

```
/income-statement current-year
```

Review the output. Then ask:

```
This trial balance does not balance. What is the difference? What
accounting entries might explain the gap? List the three most likely
explanations.
```

**2. Resolve the suspense.** Provide the answer:

```
The missing item is a deferred tax liability of PKR 18,200. Add this
to the trial balance, re-confirm it balances, and proceed.
```

**3. Produce the income statement and balance sheet.** Run:

```
/income-statement current-year format:ifrs
```

Then ask:

```
Using the same trial balance, produce the IFRS balance sheet as at
the reporting date. Classify all assets and liabilities as current
or non-current per IAS 1. Show the equity section with opening
retained earnings, profit for the year, and closing retained earnings.
```

**4. Produce the cash flow statement.** Say:

```
Using the income statement and balance sheet you have produced, prepare
the statement of cash flows using the indirect method per IAS 7. Start
with profit before tax. Add back non-cash items and working capital
movements. Calculate cash from operations, investing activities, and
financing activities. Reconcile to the closing cash balance.
```

Review the cash flow statement. Ask:

```
What are the three working capital movements that would most commonly
be wrong in an indirect cash flow statement prepared by a junior
accountant? Check that each of those items is correct in the statement
you have produced.
```

**5. Draft the disclosure notes.** Say:

```
Draft the following IFRS disclosure notes: (1) accounting policies —
revenue recognition, inventory, PPE depreciation; (2) property, plant
and equipment movement table; (3) borrowings — maturity analysis and
interest rate; (4) income tax — current and deferred tax reconciliation.
Flag any note where you have made an assumption because the information
was not in the trial balance.
```

For each flagged assumption, provide a response or mark it as "information to be confirmed with client."

**6. Assemble the complete financial statements pack.** Say:

```
Create a single Excel file at /outputs/financial-statements.xlsx with
separate sheets for: Trial Balance, Income Statement, Balance Sheet,
Cash Flow Statement, Notes. Apply professional formatting: company
name header, reporting period, 'PKR thousands' denomination label.
```

**7. Build the board presentation.** Say:

```
Using the financial statements, create a five-slide PowerPoint at
/outputs/board-presentation.pptx: Slide 1 — Headline P&L (revenue,
gross profit, EBITDA, PBT versus prior year); Slide 2 — Balance sheet
summary with working capital and net debt; Slide 3 — Cash flow bridge;
Slide 4 — Three key messages; Slide 5 — The one financial metric that
most needs management attention and why.
```

**8. Quality review.** Ask:

```
Review the complete financial statements pack and the board
presentation. List five things a reviewing partner would check before
signing off. Check each one and confirm whether it passes or identify
what needs correction.
```

**Check your work:** The most important steps are not the financial statement production — they are Step 4's self-checking question and Step 8's quality review. The agent can produce technically correct IFRS financial statements reliably. The discipline that distinguishes a CA/CPA from a bookkeeper is knowing which items are most likely to be wrong, checking them specifically, and understanding the consequences if they are.

:::tip Global Perspective
**IFRS**: This exercise uses IFRS presentation and classification standards (IAS 1, IAS 7).
**US GAAP / ASC**: The same workflow applies with ASC 205-10 (presentation) and ASC 230 (cash flows). Key differences: IFRS allows interest in operating or financing; US GAAP requires interest in operating.
**UK FRS 102**: Section 3 (Financial Statement Presentation) and Section 7 (Statement of Cash Flows) follow a similar structure with simplified disclosure requirements for qualifying entities.
:::

---

## Exercise 10: Scheduled Month-End Close — Setup and Activation (40 min)

**What you'll build:** A scheduled month-end close task that runs automatically on the first business day of each month, requiring only exception review from the CA/CPA.

**Requirements:** Cowork (Team or Enterprise), `finance@knowledge-work-plugins`, a folder structure representing a client file.

### Step-by-Step Instructions

**1. Design the workflow specification.** Before opening Cowork, write a workflow specification (10 minutes, pen and paper or text file):

- What data inputs will be available at month-end? (List the specific file names and locations)
- What outputs need to be produced? (List with exact file names and formats)
- What conditions would cause the workflow to stop and alert you rather than proceed?
- What is the maximum time the workflow should take before you consider it has failed?

This specification is the discipline. A scheduled task that is poorly specified will run autonomously and produce wrong answers without alerting anyone.

**2. Create the folder structure.** In your Cowork working folder, create:

```
/client-alpha/
  /inputs/
    /erp-exports/      <- where ERP extracts will be placed each month
    /prior-month/      <- prior month statements for comparison
  /working-papers/     <- reconciliations and journal entries
  /outputs/            <- completed management accounts
  /archive/            <- prior month outputs, auto-moved after sign-off
```

Place a sample trial balance export in `/erp-exports/` named `trial-balance-YYYY-MM.csv`.

**3. Build and test the workflow interactively first.** Run the full month-end close workflow manually to confirm each step works:

```
/reconciliation bank
/reconciliation debtors
/reconciliation creditors
/journal-entry depreciation
/journal-entry accruals
/income-statement monthly
/variance-analysis monthly
```

Confirm each output is saved to the correct folder with the correct filename format.

**4. Write the scheduled task instruction.** In Cowork, type `/schedule`. Write the scheduled task as a precise instruction:

```
On the first business day of each month at 7:00 AM:
(1) Read the most recent trial balance file from
/client-alpha/inputs/erp-exports/ — the file named
trial-balance-[current month YYYY-MM].csv. If this file does not
exist, stop immediately and send an alert: 'Month-end close cannot
run — trial balance file not found for [month].'
(2) Run bank, debtors, and creditors reconciliations. Save results
to /working-papers/ with filename reconciliation-[account]-[YYYY-MM].xlsx.
If any reconciliation produces an unreconciled difference greater than
PKR 10,000, flag it as a priority exception and continue.
(3) Generate depreciation and accruals journal entries from the prior
month templates in /working-papers/templates/.
(4) Produce the management income statement and save to
/outputs/management-accounts-[YYYY-MM].xlsx.
(5) Run variance analysis versus prior month and versus budget.
Save to /outputs/variance-[YYYY-MM].xlsx.
(6) Produce an exceptions summary — all items requiring CA/CPA
review — and save to /outputs/exceptions-[YYYY-MM].txt.
(7) Send completion alert: 'Month-end close complete for [month].
[N] exceptions require review. Files saved to /outputs/.'
```

**5. Specify the exception escalation rules.** Add to the scheduled task:

```
Stop and alert immediately — do not continue — if:
(a) the trial balance does not balance;
(b) any reconciliation difference exceeds PKR 50,000;
(c) revenue is more than 30% above or below the same month last
year (possible data error);
(d) any account that was zero last month now has a balance greater
than PKR 100,000 (possible mis-posting).
In each case, describe the specific exception and ask the CA/CPA
for a decision before proceeding.
```

**6. Activate the schedule.** Confirm the scheduled task and set it to run on the first business day of next month.

**7. Test the exception paths.** Modify the test trial balance to trigger one exception condition (introduce a balance difference of PKR 75,000). Run the task manually. Confirm the exception is caught correctly and the alert is generated rather than the task proceeding.

**8. Document the workflow.** Ask Cowork:

```
Based on the scheduled task I have set up, produce a one-page
workflow documentation at /outputs/month-end-close-workflow.docx.
Include: workflow trigger, inputs required, outputs produced,
exception conditions, escalation contacts, and estimated
completion time.
```

**Check your work:** Step 5 is more important than Step 4. The conditions that cause the task to stop and ask a human are the professional judgment embedded in the workflow. Every condition in Step 5 represents a situation where the agent cannot decide — and where you, as the CA/CPA, must be drawn in. The quality of your scheduled task is measured by the quality of its exception handling, not the quality of its routine output.

---

## Exercise 11: Multi-Entity Consolidation with Intercompany Elimination (55 min)

**What you'll build:** An automated consolidation workflow that produces group financial statements from multiple entity trial balances, with full intercompany elimination.

**Requirements:** Cowork (Team or Enterprise), Claude in Excel, `finance@knowledge-work-plugins`, trial balance data for two entities. Download the ready-made Crescent Textiles + Karachi Foods consolidation data from the [companion repo](https://github.com/panaversity/ca-cpa-domain-agents) at `exercises/consolidation/parent-subsidiary-data.md` — includes intercompany balances and elimination workings.

### Hypothetical Setup

Create two trial balance files in `/inputs/`:

**`entity-parent.xlsx`** — A parent company with a 100% investment in the subsidiary (investment value PKR 40,000) and intercompany loan to subsidiary of PKR 5,000.

**`entity-subsidiary.xlsx`** — A subsidiary with share capital of PKR 40,000 and an intercompany loan payable to parent of PKR 5,000.

Both entities have revenue, costs, and a full balance sheet. Include an intercompany sale of PKR 12,000 in the parent and a corresponding purchase of PKR 12,000 in the subsidiary (inventory of PKR 4,000 from this purchase remains unsold in the subsidiary at year-end).

### Step-by-Step Instructions

**1. Aggregate the trial balances.** Say:

```
Read entity-parent.xlsx and entity-subsidiary.xlsx. Produce an
aggregated trial balance that simply adds both entities' balances
together. Flag all intercompany items: the investment, the loans,
the intercompany sales and purchases, and the unrealised profit
in closing inventory.
```

**2. Perform the investment elimination.** Say:

```
The first consolidation elimination is to remove the parent's
investment in the subsidiary (PKR 40,000 debit) against the
subsidiary's share capital (PKR 40,000 credit). Produce the
elimination journal entry and explain why this entry is required
under IFRS 10.
```

**3. Eliminate the intercompany loan.** Say:

```
Produce the journal entry to eliminate the intercompany loan:
parent's loan receivable (PKR 5,000 debit) against subsidiary's
loan payable (PKR 5,000 credit). Show how this affects the
consolidated balance sheet.
```

**4. Eliminate intercompany trading.** Say:

```
Produce the elimination entry for intercompany revenue and cost
of sales. Parent has intercompany revenue of PKR 12,000; subsidiary
has the corresponding purchase as cost of sales of PKR 12,000.
Debit revenue PKR 12,000, credit cost of sales PKR 12,000. Explain
why the unrealised profit in inventory must also be eliminated and
produce that additional entry.
```

**5. Calculate the unrealised profit elimination.** Say:

```
The subsidiary has PKR 4,000 of inventory purchased from the parent.
The parent's gross margin on intercompany sales is 25%. Calculate
the unrealised profit embedded in the subsidiary's closing inventory
and produce the elimination entry: debit cost of sales (to increase
consolidated COGS), credit inventory (to reduce the carrying value).
Explain what happens to this elimination in the following year.
```

**6. Produce the consolidated statements.** Say:

```
Apply all four elimination entries to the aggregated trial balance
and produce the consolidated income statement and balance sheet.
Show a consolidation workings table with: (1) Parent entity,
(2) Subsidiary entity, (3) Eliminations, (4) Consolidated total.
```

Save to `/outputs/consolidated-statements.xlsx`.

**7. Stress test the consolidation.** Ask:

```
What are the three most common errors made in group consolidations
by junior accountants? Check the consolidated statements you have
produced for each of those errors. If any are present, identify
and correct them.
```

**8. Write the consolidation SKILL.md.** Ask:

```
Draft a SKILL.md for a consolidation agent that will perform this
intercompany elimination process every period. Include: the data
inputs required (trial balances per entity, intercompany transaction
schedule), the four elimination types (investment, loans, trading,
unrealised profit), the conditions that require professional judgment,
and the output format.
```

**Check your work:** The unrealised profit elimination in Step 5 is the consolidation step most frequently done incorrectly — and the step where the IFRS 10 principle (eliminating all traces of group profit until the goods are sold to a third party) requires genuine understanding rather than mechanical application of a rule. The fact that the agent performs Steps 2, 3, and 4 reliably makes Step 5 more important, not less. Your professional contribution is identifying which step in any automation requires deeper understanding to supervise correctly.

:::tip Global Perspective
**IFRS 10**: Consolidation principles used in this exercise apply globally where IFRS is adopted.
**US GAAP / ASC 810**: The consolidation mechanics are similar, but variable interest entity (VIE) analysis may apply differently. Intercompany elimination principles are consistent.
**UK FRS 102 / Section 9**: Group accounts follow the same elimination logic. Small groups may qualify for exemption from consolidated accounts under the Companies Act 2006.
:::

---

## Try With AI

Use these prompts in Cowork or your preferred AI assistant to deepen your understanding of the workflows you have built.

### Prompt 1: Judgment Boundary Mapping

```
I have built an autonomous bookkeeping workflow that classifies
source documents, codes transactions, and produces a transaction
register. The workflow flags certain transactions for professional
judgment.

For my practice area [DESCRIBE YOUR TYPICAL CLIENTS — e.g.,
manufacturing SMEs, professional services firms, retail chains],
list the ten most common transaction types that would require
professional judgment rather than mechanical coding. For each one,
explain why the coding decision requires human expertise and what
the consequence would be if the agent coded it incorrectly.

Rank them from most to least consequential.
```

**What you are learning:** The value of an autonomous bookkeeping workflow is not in the routine transactions it codes correctly — it is in the boundary where routine ends and judgment begins. By mapping the judgment boundaries specific to your client types, you are building the exception rules that would make your bookkeeping SKILL.md genuinely useful rather than generically adequate.

### Prompt 2: Exception Threshold Calibration

```
I am setting up a scheduled month-end close for a [DESCRIBE ENTITY
— e.g., mid-sized manufacturing company with PKR 500M annual
revenue]. I need to define exception thresholds — the conditions
that cause the automated close to stop and alert me.

For each of these parameters, recommend a threshold and explain
your reasoning:
1. Unreconciled bank difference (absolute value)
2. Revenue variance versus prior month (percentage)
3. New account balance appearing (absolute value)
4. Gross margin variance (percentage points)
5. Intercompany balance mismatch (absolute value)

For each threshold, explain what happens if I set it too high
(miss real errors) versus too low (generate too many false alerts
and lose trust in the system).
```

**What you are learning:** Exception thresholds are a professional judgment that balances sensitivity (catching real errors) against specificity (not crying wolf). Setting thresholds too low generates alert fatigue and causes you to stop reviewing them. Setting them too high lets genuine errors through silently. The right threshold depends on your entity's size, volatility, and risk appetite — there is no universal answer.

### Prompt 3: Consolidation Error Detection

```
I have produced consolidated financial statements for a group
with a parent and one wholly-owned subsidiary. The consolidation
includes four elimination types: investment elimination,
intercompany loan elimination, intercompany trading elimination,
and unrealised profit in inventory.

Act as a reviewing partner. List the seven most common errors
in group consolidations and explain how to check for each one
in the consolidated statements. For the unrealised profit
elimination specifically, explain:
1. How to calculate the unrealised profit amount
2. Why the elimination is required under IFRS 10
3. What happens to this elimination in the following year
   when the inventory is sold to a third party
4. How the entry differs if only 80% of the subsidiary
   is owned (non-controlling interest impact)
```

**What you are learning:** Consolidation verification requires you to think beyond the mechanics of the current period. The unrealised profit elimination reverses the following year — meaning a consolidation error in one period compounds in the next. Understanding this temporal dimension is what separates a CA/CPA reviewing consolidated statements from a bookkeeper applying rules to a single period.


---

Continue to [Lesson 12: Tax & Advisory Practice Lab →](./12-tax-advisory-practice-lab.md)
