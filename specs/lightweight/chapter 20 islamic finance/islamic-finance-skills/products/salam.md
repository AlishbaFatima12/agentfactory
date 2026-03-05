---
name: salam-istisna-accounting
version: 1.0
description: >
  Activate for: salam, forward purchase Islamic, advance payment commodity,
  FAS 7, agricultural finance Islamic, istisna'a, construction finance Islamic,
  manufacturing contract Islamic, FAS 10, parallel istisna'a, percentage of completion
  Islamic, project finance Islamic, salam receivable, istisna'a in progress.
standard_primary: AAOIFI FAS 7 (Salam) / AAOIFI FAS 10 (Istisna'a) / IFRS 9 + IFRS 15 (IFRS regimes)
jurisdiction: Global — see jurisdiction overlay
author: Panaversity — The AI Agent Factory
---

# PART A: SALAM (سلم)

## THE STRUCTURE

Salam: The bank pays in FULL and IN ADVANCE for a commodity to be delivered
at a specified future date, location, and of specified quality and quantity.

Shariah requirements (all must be met — if any fails, contract is void):
1. Full payment at contract date (not deferred)
2. Commodity is fungible and standardised (gold, wheat, oil — not unique items)
3. Delivery date, location, and quantity all specified precisely
4. Commodity need not exist at contract date (unlike conventional spot contracts)

## AAOIFI FAS 7 — SALAM RECEIVABLE

**At contract execution (payment of advance):**
Dr: Salam Receivable [Full payment amount]
Cr: Cash [Full payment amount]

The salam receivable represents the bank's right to receive the commodity.
Carry at cost (the advance price paid), not at fair value of the commodity.

**At delivery:**
Dr: Salam Commodity / Inventory [Cost = original salam payment]
Cr: Salam Receivable [Cost — derecognise the receivable]

**On sale of commodity (bank sells to market):**
Dr: Cash / Receivable from buyer [Sale price]
Cr: Salam Commodity / Inventory [Cost]
Cr/Dr: Gain / Loss on Salam [Difference]

Commodity price risk: The bank bears price risk between advance payment and delivery.
If market price falls below advance price → loss. If it rises → gain.
This risk is inherent in salam. It is NOT a Shariah compliance issue.

## PARALLEL SALAM

To hedge or resell: Bank enters a SECOND salam (parallel salam) selling the
same commodity to another party at a higher price for delivery on the same date.

IMPORTANT: The two salam contracts must be INDEPENDENT.
The bank bears delivery risk in both. Cannot use customer's delivery to satisfy
the parallel salam (linking the two contracts may violate Shariah).

Parallel salam accounting: recognise as a separate salam liability.
Do not net the two contracts.

---

# PART B: ISTISNA'A (استصناع)

## THE STRUCTURE

Istisna'a: Bank contracts to have a specific asset MANUFACTURED or CONSTRUCTED
and then delivers it to the customer. The asset need not exist at contract date.
Unlike salam: payment may be deferred or in stages (not required upfront).

Shariah requirements:
1. The asset must be described with sufficient specificity to prevent gharar (uncertainty).
2. The contractor (manufacturer/builder) agrees to produce the described asset.
3. Delivery terms (time, place, condition) must be agreed.

## PARALLEL ISTISNA'A

Parallel istisna'a: The bank enters CUSTOMER ISTISNA'A (bank is contractor, sells to customer)
and a separate BACK-TO-BACK ISTISNA'A (bank is buyer, construction company is contractor).

The bank is in the middle as intermediary.
The two contracts must be INDEPENDENT (bank bears construction risk in both).

## AAOIFI FAS 10 — REVENUE RECOGNITION

Apply the PERCENTAGE OF COMPLETION method:

**Revenue recognised = Contract revenue × % completion to date — Previously recognised revenue**

% completion methods:
1. Cost incurred to date / Total expected contract cost
2. Architect/engineer certification of physical progress
3. Milestones achieved

**Period-end accounting entry (% of completion method):**
Dr: Istisna'a Receivable / Contract Asset [Revenue to recognise this period]
Cr: Revenue from Istisna'a [Same]

Dr: Construction Costs / WIP [Costs incurred this period]
Cr: Cash / Payables [Same]

Period profit = Period revenue − Period costs incurred

**If contract is a LOSS-making contract (expected costs > contract price):**
Recognise the FULL expected loss immediately in the current period.
Dr: Loss on Istisna'a Contract [Full expected loss]
Cr: Provision for Istisna'a Loss [Same]

## IFRS 15 COMPARISON

IFRS 15 over-time revenue recognition applies if:
- Customer simultaneously receives and consumes benefits (services)
- Customer controls the asset as it is created (construction on customer's land)
- Seller's performance creates an asset with no alternative use + enforceable right to payment

Arithmetic of % completion is IDENTICAL under AAOIFI FAS 10 and IFRS 15.
Key difference: AAOIFI requires explicit Shariah compliance confirmation of milestone
specifications (to satisfy gharar prohibition). IFRS 15 does not require this.

## PARALLEL ISTISNA'A — NETTING QUESTION

Gross vs. Net presentation:

GROSS (default): Show:
- Istisna'a Receivable from customer (asset)
- Istisna'a Payable to contractor (liability)

NET (if offset criteria are met — IAS 32):
- Net asset or net liability position

Criteria for netting: Must have both a legal right to set off AND the intention to settle
on a net basis or simultaneously. In most parallel istisna'a structures, these criteria are
NOT met → GROSS presentation is required.

BALANCE SHEET IMPACT: Gross presentation can double the reported balance sheet size.
This has direct regulatory capital implications for the bank.

## MANDATORY DISCLOSURES

**AAOIFI FAS 10:**
1. Accounting policy: percentage of completion method
2. Revenue recognised from istisna'a in the period
3. Contract assets (amounts due from customers)
4. Contract liabilities (amounts due to customers — advance receipts)
5. Expected losses on onerous contracts
6. For parallel istisna'a: gross vs. net presentation basis
7. Shariah compliance: confirmation specifications were sufficient to prevent gharar

**IFRS 15 (IFRS regimes):**
1. Disaggregation of revenue (by contract type: istisna'a vs. other)
2. Contract balances (opening, recognised, invoiced, closing)
3. Performance obligation satisfaction timing
4. Significant judgments: method for estimating % completion
