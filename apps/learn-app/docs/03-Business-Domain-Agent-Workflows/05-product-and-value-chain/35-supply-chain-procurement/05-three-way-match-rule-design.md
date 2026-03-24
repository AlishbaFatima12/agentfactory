---
slug: /Business-Domain-Agent-Workflows/supply-chain-procurement/three-way-match-rule-design
sidebar_position: 5
title: "Three-Way Match Rule Design"
description: "Design the tolerance rules that decide which invoices auto-approve, which need human review, and which are automatically rejected: the configuration that determines how much of your AP workload you can eliminate without sacrificing control"
keywords:
  [
    "three-way match",
    "invoice tolerance rules",
    "auto-approve",
    "exception routing",
    "invoice reconciliation",
    "AP automation",
    "price tolerance",
    "quantity tolerance",
    "purchase order match",
    "goods receipt",
    "supply chain plugin",
    "invoice-reconcile skill",
  ]
chapter: 35
lesson: 5
duration_minutes: 40

# HIDDEN SKILLS METADATA
skills:
  - name: "Design Category-Specific Tolerance Rules for Three-Way Invoice Matching"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can define price and quantity tolerance percentages for each spend category, distinguish auto-approve from escalation from rejection scenarios, and document the rationale for each threshold choice"

  - name: "Use /invoice-reconcile in Tolerance Configuration Mode"
    proficiency_level: "A2"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Content-Creation"
    measurable_at_this_level: "Student can invoke /invoice-reconcile type:tolerance-design with category and pricing model parameters and interpret the recommended tolerance rule set"

  - name: "Estimate Efficiency Impact of Tolerance Rule Changes"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can estimate the straight-through processing rate under a proposed rule set and calculate the cost saving relative to manual exception processing"

learning_objectives:
  - objective: "Explain why tolerance rules differ by spend category, distinguishing fixed-price categories from variable-price and market-linked categories"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student can justify different tolerance percentages for direct materials vs. freight vs. utilities by reference to the pricing model (fixed contract vs. fuel surcharge variability vs. tariff variability)"

  - objective: "Design auto-approve, escalation, and rejection rule sets for at least four spend categories"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces a tolerance rule table covering their spend categories with documented rationale, tested against at least one sample invoice"

  - objective: "Calculate the straight-through processing rate and cost saving from a proposed tolerance rule set"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Student estimates what percentage of their invoice volume would auto-approve under the new rules and calculates the FTE cost saving vs. current exception rate"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "Three-way match: the intersection of invoice, purchase order, and goods receipt"
    - "Price tolerance: acceptable deviation from PO price before human review"
    - "Quantity tolerance: acceptable delivery shortfall before partial approval"
    - "Auto-approve, escalation, and rejection rule tiers"
    - "Straight-through processing rate: the efficiency metric for AP automation"
  assessment: "5 concepts at B1-B2 level. The three-way match concept is concrete and mechanical: students can grasp it immediately through the three-document example. The tolerance design concepts build on a simple pricing model intuition. Cognitive load is managed by anchoring every concept to a specific spend category example before moving to the next."

differentiation:
  extension_for_advanced: "Research invoice exception rates in your industry. AP benchmarking organisations such as The Hackett Group and IOFM publish data on exception rates, cost-per-invoice, and auto-approval rates by company size and industry. How does your organisation compare? Design a 12-month tolerance optimisation programme: which rule changes would have the highest impact on your exception rate, and what governance process would you use to change tolerance rules safely?"
  remedial_for_struggling: "Focus on the direct materials category first: it is the most common and has the clearest logic: price is fixed in the PO, so any price deviation is a genuine exception. Once you can explain why direct materials carry ±2% price tolerance and ±0% quantity tolerance, apply the same logic to one other category (e.g. services: fixed price per contract, so ±0% price tolerance). The variable categories (freight, utilities) are the edge cases: return to them once the fixed-price logic is solid."

teaching_guide:
  key_points:
    - "Tolerance rules are not arbitrary: they reflect the pricing model of the category (fixed contract vs. index-linked vs. market-rate)"
    - "Zero quantity tolerance on direct materials is intentional: you should only pay for what was delivered and confirmed by goods receipt"
    - "Auto-approve thresholds reduce AP workload but must be auditable: every auto-approved invoice should be logged in the exception register"
    - "The efficiency impact calculation (straight-through processing rate × cost-per-exception) is the business case for AP automation"
  misconceptions:
    - "Tight tolerances are always better: more control equals less risk. Correction: excessively tight tolerances generate false exceptions from legitimate rounding, minor price adjustments, and partial deliveries: creating human review burden for low-risk variances. The goal is to route genuinely risky exceptions to humans and keep low-risk variances automated."
    - "Tolerance rules are configured once and never changed. Correction: tolerance rules should be reviewed when category pricing models change (e.g. a supplier moves from fixed to index-linked pricing), when exception rates indicate the current thresholds are miscalibrated, or when procurement strategy changes."
    - "The three-way match catches all AP fraud. Correction: three-way match catches discrepancies between invoice, PO, and goods receipt. It does not detect fraud at the PO creation stage (e.g. a phantom PO for a fictitious vendor) or bank detail substitution fraud. These require separate controls."
  discussion_prompts:
    - "Your freight category has a ±10% price tolerance to accommodate fuel surcharges. A logistics vendor has submitted invoices 8-9% above the PO price for six consecutive months. Is this within your tolerance? Should it stay there? What does the pattern tell you?"
    - "Your current manual exception rate is 22% of invoices. If you implement the rule set from this lesson and achieve 8% exceptions, what happens to your AP team's workload: and what should they do with the capacity freed up?"
  teaching_tips:
    - "Draw the three-way match diagram on the board before opening the lesson: three boxes (Invoice, PO, Goods Receipt) with arrows to a central match node. Students who can visualise the three documents as separate data sources understand the tolerance logic much faster."
    - "The category tolerance table in the spec is the anchor point. Walk through each row and ask students to justify the tolerance before revealing the rationale. The conversation reveals whether they understand the underlying pricing model."
---

# Three-Way Match Rule Design

Your accounts payable team processes 400 invoices a month. Industry data typically shows 15-25% of invoices have at least one discrepancy: meaning 60-100 invoices per month require human intervention. Each exception invoice, estimates suggest, costs £25-£80 to resolve manually: the time to investigate the discrepancy, communicate with the vendor, get an approval, and document the resolution.

The three-way match rule design you build in this lesson determines which of those exceptions are genuine problems requiring human judgment, and which are predictable variances that can be handled automatically. Get the rules right and your AP team focuses on the 15 genuinely complex exceptions per month. Get them wrong in either direction: too tight creates false alarms, too loose misses real discrepancies: and you have either chaos or financial exposure.

This lesson teaches the tolerance framework, not the reconciliation workflow itself (that is Lesson 6). Think of it as designing the rule engine that Lesson 6's workflow runs on.

## What the Three-Way Match Checks

Every invoice that arrives in your AP queue must be reconciled against two other documents:

**Document A: The Invoice**; What the vendor claims you owe them. Contains vendor details, invoice number, line items with quantities and unit prices, payment terms.

**Document B: The Purchase Order**; What your organisation authorised to purchase. Contains the same line items with the prices and quantities that were agreed at the time of purchase.

**Document C: The Goods Receipt (or Service Confirmation)**; What was actually received and confirmed by your warehouse or the relevant business unit.

The three-way match checks:

- **Does Invoice price = PO price?** (within tolerance)
- **Does Invoice quantity = Goods Receipt quantity?** (within tolerance)
- **Does the PO reference exist in your ERP?**
- **Has this invoice been submitted before?** (duplicate check)

When all checks pass within tolerance, the invoice auto-approves. When any check fails, the exception is classified by type and routed to the appropriate resolution path.

:::info Two-Way vs. Three-Way Match
Some organisations run a two-way match: invoice against PO only, without requiring a confirmed goods receipt. This works for services (where delivery is not a physical event) but creates risk for physical goods: you can pay for items that were ordered but never arrived. The three-way match eliminates this gap. For direct materials, the third leg (goods receipt) is non-negotiable.
:::

## Designing Tolerance Rules by Category

The central principle: **tolerance reflects the pricing model of the category.** A category with a fixed contract price has no legitimate reason for price deviation: the tolerance should be tight. A category with market-linked pricing (freight fuel surcharges, utility tariffs) has legitimate price variability built in: the tolerance must accommodate it.

### The Five Standard Categories

| Category              | Price Model                      | Price Tolerance | Quantity Tolerance | Rationale                                                                                                                             |
| --------------------- | -------------------------------- | --------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| Direct materials      | Fixed contract price             | ±2%             | ±0%                | Price is agreed in PO; any deviation requires explanation. Zero quantity tolerance: pay for what arrived, confirmed by goods receipt. |
| Indirect / MRO        | Contract with variability        | ±5%             | ±5%                | Specification tolerances in manufactured items; partial deliveries are common for MRO restocking.                                     |
| Services              | Fixed contract price per service | ±0%             | N/A                | Services are delivered or not: no partial tolerance. Price must match contract exactly.                                              |
| Freight and logistics | Market-linked (fuel surcharges)  | ±10%            | N/A                | Fuel surcharge variability is legitimate and contractually acknowledged in most freight agreements.                                   |
| Utilities             | Tariff-linked                    | ±15%            | N/A                | Utility tariffs change frequently; a ±15% window accommodates most tariff adjustments without requiring manual review for every bill. |

These are defaults. Your organisation should adjust them based on:

- Your actual contract structures (if your freight contracts cap fuel surcharges at 5%, use ±5%)
- Your exception processing capacity (tighter rules = more exceptions = more human review)
- Your financial materiality thresholds (a 5% variance on a £50 invoice is £2.50; the same variance on a £50,000 invoice is £2,500)

### Auto-Approve, Escalation, and Rejection Rules

Tolerance rules define the thresholds. The routing rules define what happens at each threshold:

**Auto-Approve**; No human review required. Invoice paid at recommended amount.

| Condition                                                | Auto-Approve                    |
| -------------------------------------------------------- | ------------------------------- |
| All line items within tolerance                          | Yes                             |
| Total invoice value < £500 with no PO mismatch           | Yes                             |
| Vendor payment terms within 48-hour early payment window | Yes (flag to Finance for audit) |

**Escalation**; Route to specific authority for approval. Invoice held pending decision.

| Condition                                 | Route To            | Deadline        |
| ----------------------------------------- | ------------------- | --------------- |
| Total disputed amount > £5,000            | Finance Manager     | 3 business days |
| Price variance > 10% on direct materials  | CPO                 | 5 business days |
| Unauthorised charge (no PO line)          | Procurement review  | 3 business days |
| Quantity variance: goods receipt pending | Warehouse + Finance | 5 business days |

**Automatic Rejection**; No approval possible. Invoice rejected; vendor notified.

| Condition                                                    | Rejection Reason              |
| ------------------------------------------------------------ | ----------------------------- |
| No PO reference (invoice > £500)                             | Invoice without authorisation |
| Duplicate invoice (same vendor, same amount, within 30 days) | Duplicate submission          |
| Vendor not in approved vendor list                           | Unauthorised vendor           |
| Invoice date > 90 days old                                   | Late submission policy        |

:::caution The Late Submission Rule Requires Communication
Automatically rejecting invoices older than 90 days only works if vendors know about the policy. If you introduce this rule, communicate it to your vendor base before activation: preferably with a formal written notice and a transition period. Rejecting a legitimate invoice because a vendor was not informed of a new policy creates relationship damage and potential payment dispute risk.
:::

### Exception Pattern Monitoring

Beyond individual invoice rules, `/invoice-reconcile` monitors patterns across your invoice volume:

- **Same exception type from same vendor more than 3 times in 30 days:** Flag as systematic issue. The vendor's billing system has a data quality problem, not a one-off error. Initiate a vendor data alignment meeting rather than processing each exception individually.

- **Price variance on the same line item for more than 2 consecutive invoices:** Flag as contract non-compliance. The vendor is billing at a price that differs from the agreed contract: this requires a commercial review, not just exception approval.

These pattern rules convert your exception register from a list of resolved incidents into an early warning system for vendor relationship problems.

## Configuring Tolerance Rules with `/invoice-reconcile`

You do not write the `supply-chain.local.md` tolerance configuration from scratch. The `/invoice-reconcile` skill includes a configuration interview mode that walks you through the decisions and produces a validated rule set.

**Starting the configuration:**

```
/invoice-reconcile type:"tolerance-configuration"
```

The skill will ask:

1. What spend categories are in your invoice volume?
2. For each category: is the price fixed at PO time, or subject to market variation?
3. For each category: are partial deliveries normal (affecting quantity tolerance)?
4. What is your financial materiality threshold for auto-approve?
5. Who approves price variances above threshold: category manager, Finance, CPO?
6. What is your policy on late invoice submissions?

The output is a formatted tolerance rule set ready to add to your `supply-chain.local.md` configuration file.

For individual category design, use the tolerance-design mode:

```
/invoice-reconcile type:"tolerance-design"
               category:"direct materials"
               price-model:"fixed"
               quantity-model:"fixed"
               materiality-threshold:"£500"
```

The skill produces a recommended rule for that category with the rationale. Review it against your operational context and adjust.

### The Tolerance Configuration in `supply-chain.local.md`

Once designed, your tolerance rules live in the local configuration file. The relevant section:

```
## Invoice Reconciliation Configuration

### Tolerance Rules (by category)
Direct materials:        Price ±2% / Quantity ±0% (zero tolerance on QTY)
Indirect / MRO:          Price ±5% / Quantity ±5%
Services:                Price ±0% (services must match PO exactly)
Freight and logistics:   Price ±10% (fuel surcharge variability)
Utilities:               Price ±15% (tariff variability)

### Auto-Approve Rules (no human review required)
- All line items matched within tolerance: auto-approve
- Total invoice value < £[configured threshold]: auto-approve if no PO mismatch
- Vendor payment terms within 48-hour window: fast-track approval

### Escalation Rules (require manager approval)
- Total disputed amount > £[configured threshold]: Finance Manager approval
- Price variance > [X]% on direct materials: CPO approval
- Unauthorised charge: automatic hold + Procurement review
- Duplicate invoice: automatic reject + vendor notification

### Rejection Rules (automatic rejection; no approval needed)
- Invoice without PO reference (above £[threshold])
- Duplicate invoice (same vendor, same amount, within [N] days)
- Vendor not in approved vendor list
- Invoice date > [N] days old (late submission)

### Exception Pattern Monitoring
- Same exception type from same vendor > [N] times in [N] days:
  flag as systematic issue; initiate vendor performance discussion
- Price variance on same line item > [N] consecutive invoices:
  flag as contract non-compliance; initiate commercial review
```

Replace the bracketed values with your organisation's thresholds. The defaults from the SKILL.md are starting points, not prescriptions.

## Measuring the Efficiency Impact

Before building the business case for AP automation, you need to understand your current state. Three numbers:

1. **Current invoice volume per month**: how many invoices does your AP team process?
2. **Current exception rate**: what percentage require human review or intervention?
3. **Cost per exception**: how much does it cost to resolve one exception invoice?

Once you have these, the efficiency calculation is straightforward:

```
Monthly exception invoices = volume × exception rate
Monthly exception cost = exceptions × cost-per-exception

After automation:
Remaining exceptions = volume × new exception rate (post-rule set)
Cost saving = (old exception cost - new exception cost) per month
```

For example: 400 invoices/month, 20% exception rate, £40 cost per exception = £3,200/month in exception processing cost. If your rule set reduces exceptions from 20% to 6%, you save approximately £2,240/month: and your AP team's capacity freed from exception processing becomes available for higher-value work.

The specific exception rate you achieve depends on how well your tolerance rules match your actual invoice patterns. Testing your rule set against a real invoice sample (the next step in the exercise) is the only way to validate the estimate.

## Exercise: Design and Test Your Tolerance Rules (Exercise 6)

**Type:** Process Design
**Time:** 45 minutes
**Plugin commands:** `/invoice-reconcile`
**Goal:** Design a complete tolerance rule set for your organisation and test it against an invoice sample

:::note Exercise Dependencies
This exercise has two connections to other lessons:

1. **Depends on Lesson 4:** The vendor tier classifications you built in Exercise 1 (Part B) inform your thresholds; Bottleneck vendors supplying direct materials should carry tighter tolerances than Tactical commodity vendors.

2. **Cross-reference to Lesson 6:** Step 3 asks you to test your rules against an invoice sample. In [Lesson 6](./06-invoice-reconciliation-at-scale.md) (Exercise 2), you will process 10 invoices through the full reconciliation workflow. Once you have completed Exercise 2, return here and apply your tolerance rules to that invoice set to see how the exception rate changes. The cross-test is the most valuable learning in both exercises.
   :::

### Step 1; Map Your Invoice Categories

List every major spend category for which you receive invoices. For each category, answer:

- Is the price fixed at PO time, or subject to market variation?
- Are partial deliveries normal, or is quantity fixed at PO time?
- What is the financial materiality threshold below which exceptions are not worth human review?

If you do not have real invoice data, use this representative category set for a manufacturing company:

| Category             | Monthly Volume | Typical Price Model   | Partial Deliveries? |
| -------------------- | -------------- | --------------------- | ------------------- |
| Raw materials        | 80 invoices    | Fixed contract        | Rare                |
| Packaging            | 25 invoices    | Fixed contract        | Occasional          |
| MRO supplies         | 60 invoices    | Variable (catalogue)  | Common              |
| Subcontract services | 40 invoices    | Fixed per project     | Never               |
| Logistics / freight  | 90 invoices    | Fuel-surcharge linked | N/A                 |
| Utilities            | 12 invoices    | Tariff-linked         | N/A                 |

### Step 2; Design Tolerance Rules for Each Category

For each category, use the design mode:

```
/invoice-reconcile type:"tolerance-design"
               category:"[Category name]"
               price-model:"[fixed / index-linked / variable]"
               quantity-model:"[fixed / partial-delivery-allowed / variable]"
               materiality-threshold:"£[Amount]"
```

Review the recommended tolerance rule and adjust for your context. Document your choices:

| Category | Price Tolerance | Quantity Tolerance | Auto-Approve Threshold | Rationale |
| -------- | --------------- | ------------------ | ---------------------- | --------- |
|          |                 |                    |                        |           |

### Step 3; Test Against a Sample Invoice Set

Apply your tolerance rules to the following five-invoice sample. For each invoice, determine whether it would auto-approve, escalate, or reject:

| Invoice | Vendor      | Category      | PO Price   | Invoice Price            | PO Qty   | Invoice Qty | GR Qty  |
| ------- | ----------- | ------------- | ---------- | ------------------------ | -------- | ----------- | ------- |
| INV-001 | AlphaSteel  | Raw materials | £2.40/kg   | £2.44/kg (1.7% variance) | 500kg    | 500kg       | 500kg   |
| INV-002 | BulkPack    | Packaging     | £0.85/unit | £0.85/unit               | 2,000    | 1,800       | 1,800   |
| INV-003 | FastFreight | Logistics     | £1,200     | £1,314 (9.5% variance)   | N/A      | N/A         | N/A     |
| INV-004 | CleanPro    | Services      | £3,500     | £3,850 (10% variance)    | N/A      | N/A         | N/A     |
| INV-005 | SparesCo    | MRO           | £420       | £435 (3.6% variance)     | 10 units | 10 units    | 8 units |

Record your routing decision for each invoice and compare to a classmate or colleague. Where you differ, determine which interpretation is correct based on the category rules.

### Step 4; Define Exception Routing

For each exception type that your rules generate, document the routing:

| Exception Type                         | Routing Rule | Approver | Deadline |
| -------------------------------------- | ------------ | -------- | -------- |
| Price variance 2-10%, direct materials |              |          |          |
| Price variance >10%, direct materials  |              |          |          |
| Unauthorised charge                    |              |          |          |
| Quantity variance: over-invoiced      |              |          |          |
| GR pending: invoice held              |              |          |          |
| No PO reference (>£500)                |              |          |          |

### Step 5; Measure the Efficiency Impact

Using your monthly invoice volume (or the representative set from Step 1):

1. Estimate what percentage of your current invoice volume would auto-approve under your new rules.
2. Compare to your current exception rate.
3. Calculate the monthly cost saving using a cost-per-exception estimate for your organisation (if unknown, use £40 as a mid-range estimate).

**Deliverable:** A complete tolerance rule table covering all your spend categories with documented rationale, exception routing matrix, test results for the five-invoice sample showing routing decisions, and an efficiency impact estimate comparing your current and projected exception rates.

:::note Re-test After Lesson 6
Once you have completed [Lesson 6, Exercise 2](./06-invoice-reconciliation-at-scale.md) (the 10-invoice reconciliation sprint), apply your tolerance rules from this exercise to that invoice set. The difference in exception rate between the default rules and your calibrated rules reveals the business value of category-specific tolerance design.
:::

## Try With AI

:::tip Try With AI
**Reproduce**: Apply what you just learned to a simple case.

```
Design tolerance rules for these four spend categories:

1. Custom packaging materials — fixed contract price, partial
   deliveries occasional, spend ~£80K/month
2. IT hardware and peripherals — market catalogue pricing, full
   delivery required, spend ~£25K/month
3. Courier and express freight — fuel-surcharge linked pricing,
   no quantity concept, spend ~£15K/month
4. Cleaning and facilities services — fixed monthly retainer,
   no quantity variance, spend ~£8K/month

For each category: recommend a price tolerance percentage, a
quantity tolerance (where applicable), and an auto-approve
threshold. Provide the rationale for each choice.
```

**What you are learning:** Applying the pricing model logic (fixed vs. index-linked) to four real categories builds the judgment needed to set tolerances for your own organisation's spend mix. The four categories above represent the most common tolerance design decisions.

**Adapt**: Modify the scenario to match your organisation.

```
List your organisation's 5 highest-volume invoice categories by
number of invoices per month (not by spend value — volume drives
exception workload).

For each category:
- Is the price fixed in the PO, or subject to market variation?
- Are partial deliveries a normal feature of this category?
- What percentage of current invoices in this category require
  manual review?

Based on this, recommend a tolerance rule for each category and
estimate the straight-through processing rate you would achieve.
```

**What you are learning:** High-volume, low-value categories (such as MRO or stationery) are often where tolerance optimisation generates the most efficiency gains: large numbers of invoices that are currently escalated for small variances that are almost always legitimate.

**Apply**: Extend to a new situation the lesson didn't cover directly.

```
Your organisation has historically auto-approved all freight
invoices without matching to a PO because freight costs are
difficult to predict at PO time. The AP team flags this as an
audit risk — no documented authorisation for freight spend.

Design a two-stage solution:
1. A process change that introduces a "freight framework PO" —
   a standing PO for each carrier with a monthly cap — enabling
   three-way matching for freight
2. Tolerance rules for the new freight category that accommodate
   fuel surcharges while restoring audit control

Produce the process design and the tolerance rule configuration.
```

**What you are learning:** Some spend categories that appear untouchable by three-way matching can be brought into the matching framework with a procurement process change. The lesson's freight tolerance rules assume the matching framework exists; this prompt asks you to design the framework that makes matching possible.
:::

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 6: Invoice Reconciliation at Scale →](./06-invoice-reconciliation-at-scale.md)
