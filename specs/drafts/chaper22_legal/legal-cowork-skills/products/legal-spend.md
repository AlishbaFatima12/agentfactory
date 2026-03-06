---
name: legal-spend
version: 1.0
description: >
  Activate for: legal spend, legal invoice, law firm invoice, legal budget,
  matter budget, legal costs, external counsel, billing rates, hourly rates,
  legal matter, write-off, billing anomaly, legal efficiency, spend analysis,
  legal ROI, panel firms, outside counsel, legal department budget,
  matter management, legal benchmarking.
plugin-commands: /brief
---

## DATA SOURCES (connect via MCP)

- Accounts payable system (invoice data)
- Matter management system (matter codes, descriptions, status)
- E-billing system (if deployed: Brightflag, Legal Tracker, eBillingHub)
- Budget system (approved matter budgets)

## ANALYSIS DIMENSIONS

By Matter Type:
- Transactional (M&A, financing, commercial contracts)
- Litigation and disputes
- Regulatory and compliance
- Employment
- IP prosecution and licensing
- General corporate / governance

By Law Firm / Provider:
- Total spend per firm
- Effective blended rate (total spend ÷ total hours)
- Budget vs. actual variance per matter
- Write-off rate (billed vs. collected)
- Billing realisation rate

By Business Unit:
- Which business units generate the most legal spend?
- Spend per £/$ of revenue by business unit
- Ratio of internal legal cost vs. external legal cost

## ANOMALY DETECTION RULES — FLAG FOR REVIEW IF:

- Invoice total exceeds matter budget by >20% without documented explanation
- Effective hourly rate >15% above agreed rates without written authorisation
- Invoice includes time entries for >12 hours in a single day
- Invoice submitted >90 days after work performed
- Same task described in multiple time entries across consecutive days
  (potential duplication)
- Significant increase in billings in a matter's final month
  (common pattern before matter close — always review)

## BENCHMARK REFERENCE POINTS (general; update with current market surveys)

UK (London) Senior Associate — Magic Circle:        £450–£650/hr
UK (London) Senior Associate — Silver Circle/Top50: £300–£450/hr
UK (Regional) Senior Associate:                     £200–£350/hr
US (NY/CA) Senior Associate — AmLaw 100:           $700–$1,100/hr
In-house equivalent (all-in, UK mid-level):         £120,000–£180,000/yr

## OUTPUT FORMAT

  LEGAL SPEND ANALYSIS — [Period]
  ════════════════════════════════════════════

  SUMMARY
  Total spend:      £[X]
  vs. prior period: [+/-X%]
  vs. budget:       [+/-X%]

  BY FIRM (top 5)
  [Firm]  £[X]  Eff. rate: £[X]/hr  vs. budget: [+/-X%]

  ANOMALIES FLAGGED: [N]
  [Item] — [Anomaly description] — [Recommended action]

  ════════════════════════════════════════════
  NOTE: Billing anomalies require discussion with the relevant
  partner before any payment dispute is raised.

## NEVER DO THESE

- NEVER raise a formal billing dispute with a law firm without GC authorisation
- NEVER characterise attorney work as inappropriate without legal review of context
- NEVER share firm-specific spend benchmarking externally without GC and firm consent
- NEVER use spend data to make personnel decisions about external counsel without
  first consulting GC

## ALL OUTPUTS REQUIRE REVIEW BY GENERAL COUNSEL BEFORE ACTION
