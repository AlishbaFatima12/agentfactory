---
name: vendor
version: 1.0
description: >
  Activate for: vendor, supplier, vendor management, vendor portfolio,
  vendor audit, vendor spend, vendor renegotiation, vendor performance,
  SLA tracking, vendor scorecard, supplier relationship, procurement,
  vendor renewal, contract renewal, vendor rationalisation, vendor overlap,
  vendor consolidation, vendor due diligence, preferred supplier,
  sole source vendor, critical supplier, vendor risk, spend analysis.
plugin-commands: /vendor
---

## VENDOR MANAGEMENT WORKFLOW

### Task Types

TYPE 1: PORTFOLIO AUDIT
  Purpose: Complete view of all vendors — spend, performance, renewal dates,
  usage, and rationalisation opportunities.
  Output: Portfolio summary + renewal calendar + rationalisation opportunities
          + addressable savings estimate

TYPE 2: VENDOR SCORECARD
  Purpose: Objective performance assessment for a single vendor against
  contracted SLAs. Used at renewal, quarterly reviews, or after incidents.
  Output: SLA performance table + overall rating + renewal strategy recommendation

TYPE 3: RENEWAL STRATEGY
  Purpose: Determine approach for upcoming contract renewal: auto-renew /
  renegotiate / consolidate / cancel. With negotiation tactics and leverage.
  Output: Renewal recommendation per vendor + negotiation brief

TYPE 4: RATIONALISATION ANALYSIS
  Purpose: Identify vendor overlaps and consolidation opportunities.
  Output: Overlap map + consolidation recommendation + estimated savings

TYPE 5: VENDOR RISK ASSESSMENT
  Purpose: Assess the operational and financial risk of dependency on
  a specific vendor. Identify single points of failure.
  Output: Risk score + dependency classification + mitigation recommendation

### Portfolio Audit Output Structure

  VENDOR PORTFOLIO AUDIT
  ════════════════════════════════════════════════════════════
  Total vendors: [N] | Total annual spend: [£/PKR/other]
  Audit date: [Date] | Data completeness: [%]

  SPEND BY CATEGORY:
  [Category]: [£] ([%]) — [N] vendors

  IMMEDIATE ATTENTION:
  🔴 RENEWALS <90 DAYS: [List with vendor, service, cost, date]
  🔴 UNKNOWN USAGE / HIGH SPEND: [List]
  🟡 OVERLAP / RATIONALISATION: [List by category]

  RENEWAL CALENDAR (12 months):
  [Quarter]: [£] in renewals — [N] vendors

  ADDRESSABLE SAVINGS:
  Category consolidation: [range]
  Unknown-usage cancellation: [range — if confirmed unused]
  Renegotiation opportunity: [range — typical 15–30% on renewals >£50K]
  Total: [range] ([%] of spend)
  ════════════════════════════════════════════════════════════

### Vendor Scorecard Output Structure

  VENDOR SCORECARD: [Name]
  Quarter: [Q] | Contract value: [£] | Renewal: [date / N months]
  ════════════════════════════════════════════════════════════
  For each SLA metric:
    [Metric name]: [Actual] vs. [SLA target] — [✅ MET / ❌ BREACH]
    [Evidence / incident details if breach]

  OVERALL RATING: 🟢 MEETING SLA / 🟡 UNDERPERFORMING / 🔴 BREACH

  ACTIONS BEFORE RENEWAL:
  [Specific — SLA credits; RCA request; renegotiation points]

  RENEWAL STRATEGY: [Specific recommendation with rationale]
  ════════════════════════════════════════════════════════════

### Renewal Strategy Rules

  NEVER auto-renew if:
  - Any SLA breach in last 12 months (negotiate improvement)
  - Contract value >£50,000 (always seek pricing improvement)
  - Overlap with another vendor exists (consider consolidation first)
  - Usage is unknown or partial (confirm before committing)

  ALWAYS negotiate if:
  - Contract value >£25,000
  - Market alternatives exist
  - Tenure >3 years (loyalty discount opportunity)
  - Upcoming volume reduction (pricing tier review)

  RENEWAL NEGOTIATION BRIEF FORMAT:
  Leverage: [What gives us negotiating power]
  Ask:      [What we want — pricing / SLA improvement / terms]
  Walk-away:[What we will do if vendor won't negotiate]
  Timeline: [When to start; when to issue notice if needed]

### Critical Vendor Classification

CRITICAL VENDOR = any vendor where:
  - Loss of service would halt core operations within 4 hours, OR
  - No pre-qualified alternative exists, OR
  - Migration cost / time exceeds 3 months

For all critical vendors:
  □ Named relationship owner internally
  □ Quarterly performance review scheduled
  □ Backup vendor identified and pre-qualified (or risk accepted)
  □ Exit plan documented (how long; what it costs; who does it)
  □ SLA breach escalation path defined

## NEVER DO THESE

- NEVER produce a portfolio audit without an addressable savings estimate
  — the business case for vendor management is the savings it enables
- NEVER recommend auto-renewal for a vendor with an SLA breach in
  the last 12 months without at least requesting an SLA credit claim
- NEVER classify a vendor as non-critical without checking whether
  an alternative is pre-qualified — "we could find another" is not
  the same as "we have another ready to go"
- NEVER produce a renewal strategy without a walk-away position —
  negotiation without a BATNA is not negotiation; it is capitulation
- NEVER omit the renewal calendar from a portfolio audit — upcoming
  renewals are the organisation's next savings opportunity
