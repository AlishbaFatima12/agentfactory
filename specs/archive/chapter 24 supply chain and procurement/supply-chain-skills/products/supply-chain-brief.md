---
name: supply-chain-brief
version: 1.0
description: >
  Activate for: supply chain brief, weekly supply chain report, CPO report,
  COO report, procurement dashboard, supply chain dashboard, weekly report,
  executive brief, supply chain KPIs, supply chain metrics, procurement
  performance, logistics performance summary, vendor performance summary,
  AP performance, weekly update, supply chain status.
plugin-commands: /supply-chain-brief
mcp-integrations: ERP, AP system, TMS, contract register, risk monitoring outputs
---

## WEEKLY SUPPLY CHAIN BRIEF WORKFLOW

### Data Pull (automated via MCP — every Monday morning)

FROM ERP:
  - Vendor OTD by tier (prior week + 13-week rolling average)
  - Quality rejection rate by tier (prior week + 13-week rolling)
  - Open purchase orders overdue (count + £ value)
  - Stock-outs or near-stock-outs flagged (where inventory tracking enabled)

FROM AP SYSTEM:
  - Invoices processed (total / straight-through / exception rate)
  - Exception rate by type (price variance / qty variance / PO not found)
  - Open disputes (count + £ value + age)
  - AP ageing: invoices approaching payment term deadline
  - Early payment discounts captured vs. missed (where applicable)

FROM TMS / LOGISTICS:
  - Carrier OTD by carrier (prior week + 4-week rolling)
  - Damage and claim rate
  - Cost per kg vs. prior week and vs. contracted rate
  - Expedited freight % of total shipments

FROM CONTRACT REGISTER:
  - Contracts expiring within 90 days (with notice deadline)
  - Certifications expiring within 90 days
  - Any contracts where notice deadline is within 30 days (URGENT)

FROM VENDOR RISK MONITORING:
  - New risk signals this week (count by severity)
  - Active escalations (count + vendor names)
  - Contingency plans active (count)

### Executive Brief Output Format

  SUPPLY CHAIN WEEKLY BRIEF — Week of [Date]
  Prepared: [Day] [Time] | For: CPO, COO
  ════════════════════════════════════════════════════════════

  TRAFFIC LIGHT SUMMARY
  Vendor Performance:    [🟢 / 🟡 / 🔴]  OTD: [X]%  Quality rej: [X]%
  Invoice Processing:    [🟢 / 🟡 / 🔴]  Exception rate: [X]%  Open disputes: £[X]
  Logistics:             [🟢 / 🟡 / 🔴]  Carrier OTD: [X]%  Cost/kg: £[X]
  Vendor Risk:           [🟢 / 🟡 / 🔴]  Active alerts: [N]  Escalations: [N]
  Contract Calendar:     [🟢 / 🟡 / 🔴]  Renewals due 90d: [N]  URGENT: [N]

  THIS WEEK'S HIGHLIGHTS

  🏆 WIN:
  [The single most positive supply chain development this week — specific]

  ⚠️ RISK:
  [The single most important issue requiring CPO/COO attention — specific,
   with recommended action and deadline]

  📌 DECISION REQUIRED:
  [One thing leadership needs to decide or unblock — specific]

  LEADING INDICATOR STATUS
  Vendor OTD trend (13-week):  [Improving ↑ / Stable → / Declining ↓]
  Invoice exception trend:     [Improving ↑ / Stable → / Declining ↓]
  Active risk alerts trend:    [Improving ↑ / Stable → / Declining ↓]

  AT-RISK SITUATIONS REQUIRING LEADERSHIP ATTENTION
  [Vendor / Issue]  [Risk level]  [Time-sensitivity]  [Recommended action]

  CONTRACT CALENDAR — URGENT (notice deadline within 30 days)
  [Contract]  [Expiry]  [Notice deadline]  [Decision needed]

  SAVINGS PIPELINE THIS WEEK
  New opportunities identified: £[X]
  Savings captured this week:   £[X]
  YTD savings captured:         £[X]  vs. target: £[X]
  ════════════════════════════════════════════════════════════

### Full Operations Report Format (monthly — for operations meeting)

Expand the weekly brief with:
- Month-on-month trend charts (described as data for chart generation)
- Category-by-category vendor performance
- AP exception analysis with root cause breakdown
- Logistics: carrier comparison, lane performance, expedited root cause
- Risk matrix: all monitored vendors plotted by likelihood × impact
- Savings pipeline: all active opportunities with owner and status
- Forward look: key decisions and actions required in next 30 days

### Escalation Alert Format (immediate — not in weekly cycle)

Trigger escalation alert immediately for:
  - Any Tier 1 Strategic vendor OTD below 75% in any single week
  - Financial distress news on any Strategic or Bottleneck vendor
  - Bank detail change attempt on any active vendor (fraud alert)
  - Invoice fraud attempt detected (duplicate + amount manipulation)
  - Logistics disruption affecting >20% of weekly shipment volume
  - Contract notice deadline missed (requires legal consultation)

  ESCALATION ALERT — [Timestamp]
  ─────────────────────────────────────────────────────────
  Alert type:    [Category]
  Severity:      🔴 CRITICAL / 🟡 HIGH
  Description:   [Specific facts only — no speculation]
  Immediate action required: [What must happen in next 24 hours]
  Escalate to:   [Named individuals]
  ─────────────────────────────────────────────────────────

## NEVER DO THESE

- NEVER produce a supply chain brief that is longer than one page
  for the CPO/COO audience — they need the headline, the risk,
  and the action; not the full analysis (link to detail if needed)
- NEVER present metrics without comparison to target or prior period —
  a number without context is meaningless
- NEVER omit the DECISION REQUIRED section — the brief exists to
  drive decisions, not to report history
- NEVER delay an escalation alert to include it in the next
  weekly brief — time-sensitive signals require immediate notification
