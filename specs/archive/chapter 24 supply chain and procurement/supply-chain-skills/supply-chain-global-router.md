---
name: supply-chain-global-router
version: 1.0
description: >
  TOP-LEVEL ROUTER. Activate when ANY of these terms appear:
  vendor, supplier, supply chain, procurement, purchase order, PO,
  invoice, invoice reconciliation, three-way match, goods receipt,
  accounts payable, AP, vendor assessment, vendor management, vendor risk,
  supplier risk, carrier, logistics, freight, shipping, route, warehouse,
  distribution, network design, spend analysis, category management,
  RFQ, tender, contract renewal, vendor exit, bottleneck supplier,
  strategic supplier, on-time delivery, OTD, quality rejection,
  corrective action, commodity price, vendor onboarding, sourcing,
  supply disruption, expedited freight, invoice dispute, price variance,
  quantity variance, duplicate invoice, vendor communication.
author: Panaversity — The AI Agent Factory
chapter: 24 — Supply Chain & Procurement
---

## STEP 1 — IDENTIFY TASK AND LOAD PRODUCT FILE

| Query Pattern                                   | Load Product File                         |
|-------------------------------------------------|-------------------------------------------|
| Vendor assessment, onboarding, review, exit     | products/vendor-assessment.md             |
| Supplier risk, financial risk, geopolitical     | products/supplier-risk.md                 |
| Invoice, reconcile, three-way match, AP         | products/invoice-reconciliation.md        |
| Vendor communication, dispute, CAR, exit notice | products/vendor-communication.md          |
| Carrier performance, logistics, freight, route  | products/logistics-brief.md               |
| Spend analysis, consolidation, benchmark, RFQ   | products/spend-analysis.md                |
| Network design, warehouse, DC, nearshoring      | products/network-design.md                |
| Weekly brief, dashboard, CPO, COO report        | products/supply-chain-brief.md            |

## STEP 2 — ALWAYS LOAD CONFIGURATION

Always load: supply-chain.local.md
Check for:
- Vendor classification register (Strategic/Tactical/Commodity/Bottleneck)
- Tolerance rules by category (price and quantity thresholds)
- Risk thresholds per vendor tier
- Approved carrier list with SLAs
- Escalation contacts (CPO, Finance Director, category managers)
- Contract notice period requirements

IF supply-chain.local.md NOT FOUND:
  Inform user: "No supply chain configuration found. Outputs will use
  general best practices. For better results, fill in
  supply-chain.local.md — use the template provided."

## STEP 3 — MANDATORY OUTPUT HEADER (all supply chain outputs)

  TASK:          [e.g. Vendor Assessment — KIFTL]
  VENDOR TIER:   [Strategic / Tactical / Commodity / Bottleneck / Unclassified]
  CONFIGURATION: [Loaded: supply-chain.local.md / Not configured]
  DATA SOURCES:  [ERP / AP / TMS / Web / Manual input]

## VENDOR CLASSIFICATION RULES (enforce on every vendor task)

STRATEGIC (Tier 1):
  High spend AND high dependency. Single-source or near-sole-source.
  Material impact on product or service delivery.
  Review: quarterly + event-triggered.

TACTICAL (Tier 2):
  Significant spend. Multiple alternatives available.
  Multi-year established relationship.
  Review: bi-annual + event-triggered.

COMMODITY (Tier 3):
  Standard goods/services. Easy to switch. Competitive market.
  Review: annual.

BOTTLENECK (Tier 4):
  LOW spend but HIGH dependency. No easy alternative.
  MOST DANGEROUS — most often neglected.
  Review: quarterly despite low spend.

CLASSIFICATION RULE: When assessing a vendor with low spend but
sole-source dependency, ALWAYS classify as BOTTLENECK and flag as
high-risk regardless of spend volume.

## THREE-WAY MATCH ENFORCEMENT (enforce on every reconciliation task)

Three-way match requires:
  Document 1: Invoice (from vendor)
  Document 2: Purchase Order (from ERP)
  Document 3: Goods Receipt / Service Confirmation (from operations)

TWO-WAY MATCH (acceptable only for):
  - Services (no goods receipt exists)
  - Utilities (no PO in advance)
  - Invoices below £[configured materiality threshold]

NEVER approve a direct materials invoice without goods receipt confirmation.

## UNIVERSAL RULES — NON-NEGOTIABLE

- NEVER approve an invoice that has not been matched against a PO
  (above the configured materiality threshold)
- NEVER classify a sole-source supplier as low risk based on spend alone —
  always assess operational dependency separately from spend volume
- NEVER accept a vendor risk assessment that contains fabricated financial
  data — label all estimates and flag where primary data is unavailable
- NEVER recommend a vendor exit without a qualified alternative identified
  or an explicit "no alternative — managed risk" decision documented
- NEVER process a duplicate invoice — always check against prior submissions
  before authorising payment
- ALWAYS flag when a vendor's Tier 2 sub-supplier shows distress signals
  that could affect Tier 1 supply continuity
- ALWAYS include specific recommended actions with deadlines in every output —
  observations without actions are not acceptable
