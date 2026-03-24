---
slug: /Business-Domain-Agent-Workflows/supply-chain-procurement/invoice-reconciliation-at-scale
sidebar_position: 6
title: "Invoice Reconciliation at Scale"
description: "Run the four-stage invoice reconciliation workflow; Document Intelligence, Three-Way Match, Exception Routing, Audit and Pattern Monitoring: and learn how the invoice-reconciliation-agent automates the full process when your monthly volume exceeds what a human team can handle"
keywords:
  [
    "invoice reconciliation",
    "three-way match at scale",
    "AP automation",
    "invoice exception handling",
    "document intelligence",
    "exception routing",
    "audit trail",
    "invoice-reconcile skill",
    "invoice reconciliation agent",
    "pattern monitoring",
    "supply chain plugin",
    "accounts payable",
  ]
chapter: 35
lesson: 6
duration_minutes: 45

# HIDDEN SKILLS METADATA
skills:
  - name: "Execute the Four-Stage Invoice Reconciliation Workflow Using /invoice-reconcile"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can process an invoice through the four-stage workflow: extraction, three-way match, exception routing, and audit logging: and produce a reconciliation output with correct classification and recommended actions"

  - name: "Interpret and Act on Multi-Exception Reconciliation Outputs"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can read a reconciliation output with multiple exception types on different line items, determine the correct partial payment amount, and identify which exceptions require vendor communication vs. internal investigation"

  - name: "Identify Systematic Exception Patterns Across an Invoice Batch"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Information-Literacy"
    measurable_at_this_level: "Student can analyse an exception register from a 10-invoice batch, identify vendor-level or category-level concentration, and recommend the appropriate intervention (vendor data alignment vs. warehouse process change vs. commercial review)"

learning_objectives:
  - objective: "Describe the four stages of the invoice reconciliation workflow and identify which data sources each stage uses"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student can map each stage (Document Intelligence, Three-Way Match, Exception Routing, Audit and Pattern Monitoring) to its data inputs (invoice, ERP-PO, ERP-GR, exception register) and its decision output"

  - objective: "Process an invoice with multiple exception types using /invoice-reconcile and determine the correct partial payment amount"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Given the Meridian Office Supplies invoice, student correctly calculates the approved payment amount (£765), the held amount (£255), and the disputed amount (£145) from the reconciliation output"

  - objective: "Analyse an exception batch and identify patterns indicating systematic issues vs. one-off discrepancies"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Student classifies exceptions from a 10-invoice batch, identifies which vendor or category shows concentration, and recommends the intervention appropriate to the pattern"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "Stage 1 Document Intelligence: extraction, validation, fraud signals"
    - "Stage 2 Three-Way Match: six exception types and their classification logic"
    - "Stage 3 Exception Routing: per-exception routing rules and approval chains"
    - "Stage 4 Audit and Pattern Monitoring: exception register, pattern detection, weekly reporting"
    - "Invoice-reconciliation-agent: persistent automation that runs the four stages continuously"
  assessment: "5 concepts at B1-B2 level. The four-stage pipeline is sequential and mechanical, which manages load well: each stage leads naturally to the next. The worked example (Meridian Office Supplies) grounds the abstract stages in a single concrete invoice with three distinct exception types. Students who worked through Lesson 5 already understand the tolerance rules that Stage 2 applies."

differentiation:
  extension_for_advanced: "Research the invoice fraud vector that the Document Intelligence stage guards against: bank detail substitution (also called 'mandate fraud' or 'payment diversion fraud'). How do attackers execute this? What controls beyond vendor master matching protect against it? Investigate how enterprise AP systems (SAP, Oracle Fusion, Coupa) handle bank detail change verification: and compare that to the manual phone verification protocol described in this lesson."
  remedial_for_struggling: "Focus on reading the reconciliation output correctly before trying to run it yourself. Start with the Meridian Office Supplies example: trace each line item from the invoice through the output. Item 1 has a price variance: find the variance amount, the tolerance, and the routing decision. Item 2 has a quantity variance: find the held amount. Item 3 has an unauthorised charge: find the rejection reason. Once you can read the output confidently, running /invoice-reconcile for a new invoice becomes straightforward."

teaching_guide:
  key_points:
    - "The four stages handle different data quality problems: extraction errors, pricing discrepancies, goods receipt mismatches, and systematic patterns: and each requires different resolution authority"
    - "Partial payment is the correct action for invoices with a mix of matched and excepted line items: never hold an entire invoice because one line has a variance"
    - "The audit trail is as important as the reconciliation decision: every approved payment, every exception, every routing decision must be logged with reasoning for audit purposes"
    - "Pattern monitoring converts the exception register from an incident log into an early warning system: three exceptions of the same type from one vendor in 30 days is a system problem, not three separate incidents"
  misconceptions:
    - "Hold the entire invoice if any line has an exception. Correction: matched lines should be approved and paid immediately; only the excepted portions should be held or disputed. Holding entire invoices harms vendor relationships and creates unnecessary cash flow disruption."
    - "The reconciliation agent replaces the AP team. Correction: the agent automates the high-volume, rule-based matching. The AP team focuses on exceptions that require judgment: commercial negotiations with vendors, investigation of systematic patterns, approval decisions above threshold. The agent frees capacity; it does not eliminate the need for human judgment."
    - "An invoice with a bank detail change from the vendor master is a minor administrative update. Correction: bank detail changes on existing vendor accounts are the primary invoice fraud vector. Always verify by phone using a number from the vendor master: not the number on the invoice: before making any payment. This is not bureaucracy; it is a necessary control against a common and costly fraud."
  discussion_prompts:
    - "Your reconciliation agent has been running for 60 days. The exception register shows that one vendor (FastFreight) accounts for 18 of your 47 price variance exceptions in that period, all within the ±10% freight tolerance. Each one auto-approved. The pattern is clear but no-one has acted on it. Is the auto-approve rule working correctly? What action does the pattern monitoring output require?"
    - "You are the CPO reviewing the AP automation business case. The proposal says the reconciliation agent will reduce exception invoices from 22% to 7%. What questions would you ask before approving? What could go wrong with this estimate?"
  teaching_tips:
    - "The Meridian invoice example is the lesson's anchor. Walk through it slowly: many students are unfamiliar with how partial payment works. The insight that Item 2's 18 confirmed units are paid immediately while the 6 unconfirmed units are held is counterintuitive to students who think invoice = pay in full or hold everything."
    - "Stage 4 pattern monitoring is often undervalued by students because it feels administrative. Emphasise that the pattern register is what catches systematic vendor problems before they become financial disputes. The FastFreight example (discussion prompt) makes this concrete."
---

# Invoice Reconciliation at Scale

An accounts payable team at a typical mid-sized company manually matches invoices against purchase orders for several hours every day. For each invoice, someone retrieves the PO, checks the prices, calls the warehouse to confirm delivery quantities, and then routes any discrepancies to the right person for resolution. The work is repetitive, error-prone, and does not scale with invoice volume.

The multi-agent reconciliation architecture replaces this manual workflow with four coordinated stages: Document Intelligence (extract and validate), Three-Way Match (compare and classify), Exception Routing (route each exception to the right authority), and Audit and Pattern Monitoring (log decisions and surface systematic problems). Research from GEP suggests that organisations using coordinated agent architectures for invoice reconciliation can reduce exception processing time significantly and improve first-match accuracy from typical rates in the 75-80% range toward 95% or above: though results vary substantially based on data quality and configuration.

This lesson teaches the workflow you invoke with a single `/invoice-reconcile` command, and introduces the persistent `invoice-reconciliation-agent` that automates the entire process for high-volume AP operations.

:::note Tolerance Rules Required
This lesson assumes you have configured your tolerance rules in `supply-chain.local.md`. If you have not done so, complete [Lesson 5 (Three-Way Match Rule Design)](./05-three-way-match-rule-design.md) before continuing. The reconciliation workflow applies your configured rules: without them, it falls back to defaults that may not match your operational context.
:::

## The Four-Stage Reconciliation Workflow

### Stage 1: Document Intelligence

Every invoice enters Stage 1 before anything else happens. The Document Intelligence stage does not match or classify: it extracts, validates, and flags anything that should stop the process before it reaches the match engine.

**Mandatory extraction fields:**

- Vendor name (exact legal name: must match vendor master)
- Vendor ID (cross-reference ERP vendor master)
- Invoice number (for duplicate detection)
- Invoice date (check against late submission rules)
- PO reference (flag if absent)
- Line items: description, quantity, unit, unit price, line total
- Total amount (verify arithmetic: sum of lines + tax = total)
- Payment terms (match against contracted terms)
- Bank details (critical: flag if different from vendor master)

**Validation checks:**

- Arithmetic: do line items sum to the invoice total?
- Vendor name match: does the invoice name match the ERP vendor master?
- Duplicate check: has this invoice number been submitted before?
- Late submission: is the invoice date within the configured day limit?
- Bank detail change: are the bank details the same as the vendor master?

:::danger Bank Detail Changes Are a Fraud Alert
If the bank details on an incoming invoice differ from your vendor master, **stop processing immediately**. This is the primary invoice fraud vector: attackers intercept vendor email, substitute payment details, and collect payments intended for legitimate vendors. Before any payment, verify by phone using a number from your vendor master (not the invoice) that the bank detail change is genuine. Escalate to your Finance Director. Do not process the invoice until verification is complete.
:::

### Stage 2: Three-Way Match

Stage 2 receives the structured data extracted in Stage 1 and queries your ERP for the matching PO and goods receipt records. Each line item is classified:

| Classification                        | Condition                                        | Default Action                        |
| ------------------------------------- | ------------------------------------------------ | ------------------------------------- |
| ✅ MATCHED                            | Price and quantity within tolerance              | Auto-approve                          |
| 🟡 PRICE VARIANCE; WITHIN TOLERANCE  | Price differs but within configured %            | Auto-approve with Finance flag        |
| 🔴 PRICE VARIANCE; OUTSIDE TOLERANCE | Price exceeds tolerance                          | Route to Procurement                  |
| 🔴 QUANTITY VARIANCE; OVER-INVOICED  | Invoice qty > confirmed GR qty                   | Hold excess; investigate              |
| 🟡 GR PENDING                         | Invoice matches PO but GR not yet confirmed      | Hold invoice; alert warehouse         |
| 🔴 PO NOT FOUND                       | Invoice references non-existent PO               | Hold; route to Procurement            |
| 🔴 DUPLICATE DETECTED                 | Same vendor, same amount, within configured days | Reject; notify vendor                 |
| 🔴 UNAUTHORISED CHARGE                | Line item with no PO line                        | Reject this line; request credit note |

The critical output is the **partial payment calculation**: for invoices with a mix of matched and excepted lines, the matched portion should be approved and paid immediately. Only the disputed or held portions are withheld. Holding an entire invoice because one line has a variance is operationally incorrect and damages vendor relationships.

### Stage 3: Exception Routing

Stage 3 receives the classified invoice from Stage 2 and applies the routing rules configured in `supply-chain.local.md`. The routing determines: who needs to act, what the deadline is, and what information they need.

The routing matrix depends on your configuration, but the standard pattern:

| Exception Type                                                 | Routing Destination                                 | Typical Deadline            |
| -------------------------------------------------------------- | --------------------------------------------------- | --------------------------- |
| Price variance: within tolerance                              | Finance (audit log only)                            | Automated                   |
| Price variance: outside tolerance, below escalation threshold | Category manager + Procurement                      | 3 business days             |
| Price variance: outside tolerance, above escalation threshold | CPO                                                 | 5 business days             |
| Quantity variance: over-invoiced                              | Warehouse + Finance                                 | 5 business days             |
| GR pending                                                     | Warehouse → Finance on resolution                   | 5 days; auto-escalate at 10 |
| PO not found (above materiality)                               | Procurement (retrospective PO or rejection)         | 3 business days             |
| Duplicate                                                      | Finance (automated rejection + vendor notification) | Automated                   |
| Fraud alert (bank details changed)                             | Finance Director                                    | Immediate                   |

Stage 3 also drafts vendor communications for disputed lines: routed to the `/vendor-communicate` skill for formal dispute letters where required.

### Stage 4: Audit and Pattern Monitoring

Stage 4 runs continuously in the background, logging every decision and monitoring for patterns across your invoice volume.

**Every invoice creates an audit log entry:**

- Invoice number, vendor, date, amount
- Match outcome: APPROVED / exception type / REJECTED
- Exception resolution: action taken, approver, date resolved
- Payment amount approved vs. original invoice amount

**Pattern detection runs weekly:**

Pattern monitoring is where Stage 4 converts from a record-keeping function to an intelligence function. Three patterns trigger escalation beyond routine exception handling:

1. **Same exception type from same vendor more than 3 times in 30 days:** This is not three separate incidents: it is one systematic problem. The vendor's billing system has a data quality issue. The response is a vendor data alignment meeting, not three more exception approvals.

2. **Price variance on the same line item for more than 2 consecutive invoices:** The vendor is repeatedly billing at a price that differs from the agreed contract. This is contract non-compliance. The response is a commercial review, not continued tolerance-based approval.

3. **GR pending rate above 15% from one vendor:** Either the vendor is despatching faster than your warehouse can confirm receipt, or there is a goods receipt process gap on your side. Either way, this pattern requires investigation: not just invoice-by-invoice holds.

## The Worked Example: Meridian Office Supplies

Here is the Meridian Office Supplies invoice from your AP inbox:

```
/invoice-reconcile
Vendor: Meridian Office Supplies
Invoice No: MOS-2026-0847
Invoice date: 28 Feb 2026
PO reference: PO-2026-1204
Line items:
  1. A4 Copy Paper (80gsm), 500 reams @ £3.85/ream = £1,925.00
  2. Laser Toner Cartridges (HP LaserJet), 24 units @ £42.50 = £1,020.00
  3. Delivery charge = £45.00
Total: £2,990.00
```

**Reconciliation output:**

```
INVOICE RECONCILIATION: MOS-2026-0847 | Meridian Office Supplies
════════════════════════════════════════════════════════════
Invoice date:  28 Feb 2026    |  Processing date: [today]
PO matched:    PO-2026-1204   |  GR matched:      GR-2026-1891 (partial)

LINE ITEM ANALYSIS:

Item 1: A4 Copy Paper — 500 reams @ £3.85
  PO price:       £3.65/ream (PO-2026-1204, line 1)
  Invoice price:  £3.85/ream
  Variance:       +£0.20/ream = +£100.00 total (+5.5%)
  Tolerance:      ±3% (indirect/office supplies — configured threshold)
  STATUS:         🔴 PRICE VARIANCE — OUTSIDE TOLERANCE
  GR quantity:    500 reams confirmed (GR-2026-1891)
  Action:         Route to Procurement — vendor to provide price increase justification

Item 2: HP LaserJet Toner — 24 units @ £42.50
  PO price:       £42.50/unit — MATCH ✅
  GR quantity:    18 units received (GR-2026-1891, line 2)
  Invoice qty:    24 units
  Variance:       -6 units invoiced vs. received (over-invoiced)
  STATUS:         🟡 QUANTITY VARIANCE — GR MISMATCH
  Approved:       18 units × £42.50 = £765.00
  Held:           6 units × £42.50 = £255.00 (pending GR confirmation)
  Action:         Confirm with warehouse — is GR correct? Contact vendor if so.

Item 3: Delivery charge £45.00
  PO delivery:    Not included in PO (delivery was free per agreement)
  STATUS:         🔴 UNAUTHORISED CHARGE — NOT IN PO
  Action:         Reject this line; notify vendor; request credit note

RECONCILIATION SUMMARY:
  Approved for payment:    £765.00  (Item 2 — confirmed 18 units)
  On hold (pending GR):   £255.00  (Item 2 — 6 units awaiting warehouse confirmation)
  Disputed — price:        £100.00  (Item 1 price variance — Procurement routing)
  Disputed — unauthorised:  £45.00  (Item 3 delivery charge — rejected)

  ORIGINAL INVOICE:      £2,990.00
  RECOMMENDED PAYMENT:     £765.00  (immediate)
  REMAINING INVOICE:     £2,225.00  (on hold + disputed — pending resolution)

VENDOR COMMUNICATION DRAFTED:
  Dispute letter for price variance (Item 1) and unauthorised charge (Item 3)
  Use /vendor-communicate to review and send
════════════════════════════════════════════════════════════
```

Reading this output, three things happen immediately:

1. **Pay Meridian £765.00 now**: the 18 confirmed toner cartridges are clean. Holding this amount while investigating the other lines penalises Meridian for a problem on lines 1 and 3.

2. **Hold £255.00**: the 6 unconfirmed toner units. Your warehouse needs to confirm whether they received those 6 units. If yes, the hold is released. If no, they are over-invoiced and this becomes a dispute.

3. **Dispute £145.00**; £100 for the price variance on paper (Meridian has no authorisation to increase prices unilaterally above the PO) and £45 for the delivery charge that was not in the agreement.

The total £1,160.00 gap between the invoice (£2,990) and the immediate payment (£765) is not a rejection of the invoice: it is a partial approval with three distinct resolution paths requiring different people and different conversations.

## Introducing the Invoice-Reconciliation-Agent

For organisations processing hundreds of invoices per week, running `/invoice-reconcile` manually for each invoice is impractical. The `invoice-reconciliation-agent` automates the four-stage workflow as a persistent background process.

The agent:

- Monitors your AP inbox (via email MCP or ERP connection) for incoming invoices
- Runs Stage 1 extraction on every new invoice automatically
- Queries the ERP for PO and GR data via MCP
- Applies your configured tolerance rules from `supply-chain.local.md`
- Routes exceptions to the appropriate authority with pre-written context
- Logs every decision to the exception register
- Generates the weekly pattern analysis report

The agent is introduced in detail in [Lesson 12 (Persistent Agents & Schedule)](./12-persistent-agents-schedule.md). For this lesson, the key conceptual point is that the `/invoice-reconcile` command you run manually in the exercise is the same workflow the agent runs automatically at scale: the difference is volume and the presence of a human triggering each invocation.

:::info What the Agent Cannot Replace
The agent handles rule-based decisions: matching, classification, routing, logging. It cannot replace human judgment for:

- Commercial negotiations with vendors about pricing disputes
- Decisions to create retrospective POs for unauthorised purchases
- Investigation of systematic exception patterns that require vendor meetings
- Any decision above the configured financial thresholds

The agent's value is that it brings every invoice to the threshold of human decision: fully extracted, matched, classified, and routed: rather than leaving humans to do the extraction and matching work first.
:::

## Exercise: The Invoice Reconciliation Sprint (Exercise 2)

**Type:** Applied Practice
**Time:** 60 minutes
**Plugin commands:** `/invoice-reconcile`, `/vendor-communicate`
**Goal:** Process 10 invoices through the reconciliation workflow, classify all exceptions, draft dispute communications, and identify systematic patterns

:::note Tolerance Rules Required
Before starting, confirm your tolerance rules are in `supply-chain.local.md`. If you completed [Exercise 6 from Lesson 5](./05-three-way-match-rule-design.md), your rules are already configured. If not, run `/invoice-reconcile type:"tolerance-configuration"` to set defaults before proceeding.
:::

### Step 1; Gather Your Invoice Sample

Pull 10 invoices from your accounts payable queue or archive. Aim for a realistic mix:

- 2-3 invoices that should match cleanly (no exceptions)
- 2-3 invoices with price variances (common after price index changes)
- 1-2 invoices with quantity variances (goods receipt mismatches)
- 1 invoice with a missing PO reference
- 1 potential duplicate (same vendor, similar amount, within 30 days of a prior invoice)
- 1 invoice with an unauthorised line item charge

If you are doing this as a training exercise without access to real invoices, use this synthetic set:

| Invoice      | Vendor           | Total   | Expected Issue                               |
| ------------ | ---------------- | ------- | -------------------------------------------- |
| INV-2026-001 | AlphaSteel Corp  | £18,240 | Clean match                                  |
| INV-2026-002 | BulkPack Supply  | £4,760  | Quantity variance: over-invoiced            |
| INV-2026-003 | FastFreight Ltd  | £2,150  | Price variance within tolerance (freight)    |
| INV-2026-004 | CleanCo Services | £3,600  | Price variance outside tolerance (services)  |
| INV-2026-005 | AlphaSteel Corp  | £18,240 | Potential duplicate of INV-2026-001          |
| INV-2026-006 | SparesPro Ltd    | £890    | Missing PO reference                         |
| INV-2026-007 | BulkPack Supply  | £5,100  | Unauthorised surcharge added                 |
| INV-2026-008 | PrecisionCast    | £22,500 | Clean match                                  |
| INV-2026-009 | FastFreight Ltd  | £2,340  | Price variance within tolerance (freight)    |
| INV-2026-010 | AlphaSteel Corp  | £17,980 | GR pending: goods receipt not yet confirmed |

### Step 2; Configure Your Tolerance Rules

Before reconciling, confirm your tolerance rules are set for each category in the sample. If not configured:

```
/invoice-reconcile type:"tolerance-configuration"
```

For the synthetic sample, use these categories:

- Direct materials (AlphaSteel, PrecisionCast): ±2% price / ±0% quantity
- Indirect supplies (BulkPack, SparesPro): ±5% price / ±5% quantity
- Services (CleanCo): ±0% price / N/A
- Freight (FastFreight): ±10% price / N/A

### Step 3; Process All 10 Invoices

For each invoice, run:

```
/invoice-reconcile
invoice:"[Paste invoice data or describe line items]"
po-ref:"[PO number if known]"
gr-ref:"[Goods receipt reference if available]"
```

Record for each invoice:

| Invoice | Classification | Approved Amount | Held Amount | Disputed Amount | Required Action |
| ------- | -------------- | --------------- | ----------- | --------------- | --------------- |
|         |                |                 |             |                 |                 |

Pay particular attention to invoices with multiple exception types: the partial payment calculation requires tracking matched and excepted amounts per line item.

### Step 4; Draft Vendor Communications for All Disputes

For each disputed invoice, draft a vendor communication. The `/vendor-communicate` command handles formal dispute letters:

```
/vendor-communicate type:"invoice-dispute"
                   invoice:"[Invoice number]"
                   vendor:"[Vendor name]"
                   dispute:"[Description from reconciliation output]"
                   tone:"Professional; factual; constructive"
```

Review each draft against these criteria:

- Is it specific about the discrepancy (amounts, line items, PO reference)?
- Does it reference the contract or PO number?
- Is the required action stated clearly (provide credit note / submit revised invoice / confirm bank details)?
- Is the tone professional without being aggressive?

### Step 5; Pattern Analysis

After processing all 10 invoices, run a pattern analysis:

```
/invoice-reconcile type:"pattern-analysis"
               batch:"INV-2026-001 through INV-2026-010"
               period:"last 30 days"
```

Answer these questions from the pattern output:

1. What is the overall exception rate in this sample?
2. Which vendor(s) account for the most exceptions?
3. Which exception type appears most frequently?
4. Are exceptions from one vendor concentrated in a single exception type: or spread across multiple types?
5. What does the pattern suggest about root causes?

If one vendor accounts for three or more exceptions of the same type (e.g. FastFreight showing two price variance exceptions in this sample), flag this as a systematic issue rather than independent incidents. The correct response is a vendor data alignment meeting to diagnose whether the problem is in their billing system, their pricing data, or your PO configuration.

**Deliverable:** 10 reconciled invoices with classifications, approved/held/disputed amounts, and required actions for each. Vendor dispute communications for all exceptions requiring vendor contact. A pattern analysis identifying any systematic issues and recommended vendor-level actions. Note your exception rate: you will use it to validate the efficiency impact estimate from Lesson 5's Exercise 6.

:::note Cross-Reference
After completing this exercise, return to [Exercise 6 in Lesson 5](./05-three-way-match-rule-design.md) and apply your tolerance rules to this invoice batch. Compare the exception rate under the default rules vs. your calibrated rules. The difference is the business case for category-specific tolerance design.
:::

## Try With AI

:::tip Try With AI
**Reproduce**: Apply what you just learned to a simple case.

```
Reconcile this invoice using a three-way match:

Vendor: TechSupply Direct
Invoice No: TSD-2026-0312
PO reference: PO-2026-0891
Line items:
  1. Laptop batteries (Model LB-450), 50 units @ £28.50 = £1,425.00
  2. USB-C docking stations, 10 units @ £95.00 = £950.00
  3. Express delivery charge = £85.00

PO data (from ERP):
  Line 1: 50 units @ £27.00 (fixed contract price)
  Line 2: 10 units @ £95.00
  Delivery: Free delivery per framework agreement

Goods receipt (from ERP):
  Line 1: 50 units confirmed
  Line 2: 7 units confirmed (3 units backordered — ETA 2 weeks)
  Delivery: N/A

Tolerance rules: Direct materials ±3% / Quantity ±0%; delivery N/A

Classify each line item, calculate the partial payment amount,
and identify the required action for each exception.
```

**What you are learning:** Working through a multi-line invoice with three distinct exception scenarios (price variance, quantity variance, unauthorised charge) builds the pattern recognition needed to read `/invoice-reconcile` outputs quickly. After this exercise, you should be able to calculate partial payments in your head before the output arrives.

**Adapt**: Modify the scenario to match your organisation.

```
Select a recent invoice from your AP queue that had at least one
exception — a price discrepancy, a quantity mismatch, or a charge
you did not expect.

Describe the invoice (vendor, items, amounts) and the exception.
Then:
1. Apply your organisation's tolerance rules — does the exception
   fall within tolerance or outside?
2. What is the correct partial payment amount?
3. What action should your AP team take — and who should take it?
4. Draft the vendor communication for this exception.
```

**What you are learning:** Applying the workflow to a real exception from your own AP queue converts the lesson from theory to operational practice. The goal is to replace the current manual process with a structured, documented workflow that can be handed to the reconciliation agent.

**Apply**: Extend to a new situation the lesson didn't cover directly.

```
You have just reviewed your exception register for the past 60 days.
You find the following patterns:

- FastFreight Ltd: 14 price variance exceptions, all between 7-9%
  (within your 10% freight tolerance). All auto-approved.
- AlphaSteel Corp: 3 quantity variance exceptions over the past
  30 days. Each time, the invoice quantity is correct but your
  warehouse's goods receipt confirmation is 3-5 days late.
- BulkPack Supply: 2 duplicate invoice submissions (different
  invoice numbers, identical amounts). Both were auto-rejected.

For each pattern:
1. Is this a vendor problem or an internal process problem?
2. What is the correct organisational response?
3. Does your tolerance rule or rejection rule need to change?
```

**What you are learning:** Pattern analysis distinguishes between three different root causes requiring different interventions. FastFreight's consistent 7-9% surcharge may signal an undisclosed pricing model change: a commercial issue. AlphaSteel's GR delays are an internal warehouse process issue. BulkPack's duplicates may be a billing system error or fraud attempt: requiring different responses.
:::

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 7: Supplier Risk; Five Dimensions →](./07-supplier-risk-five-dimensions.md)
