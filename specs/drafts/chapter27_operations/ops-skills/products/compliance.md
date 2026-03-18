---
name: compliance
version: 1.0
description: >
  Activate for: compliance, regulatory compliance, compliance tracking,
  obligation mapping, compliance obligation, regulatory obligation,
  control assessment, compliance gap, compliance evidence, compliance
  dashboard, regulatory framework, GDPR, FCA, ISO 27001, PCI DSS,
  AML, KYC, Consumer Duty, Companies Act, data protection, regulatory
  monitoring, compliance calendar, control testing, compliance status,
  regulatory change, compliance programme.
plugin-commands: /compliance
---

## COMPLIANCE MANAGEMENT WORKFLOW

### Task Types

TYPE 1: OBLIGATION MAP
  Purpose: Complete mapping of all compliance obligations — with owner,
  control, evidence, and current status for each.
  Output: Structured obligation register with RAG status + priority actions

TYPE 2: CONTROL ASSESSMENT
  Purpose: Assess whether a specific control is effective.
  Input: Obligation; stated control; evidence available
  Output: Control effectiveness rating + evidence gaps + remediation

TYPE 3: REMEDIATION PLAN
  Purpose: Prioritised plan to close identified compliance gaps.
  Input: Gap list from obligation map
  Output: Prioritised action list with owner, deadline, resource requirement

TYPE 4: REGULATORY MONITORING
  Purpose: Track regulatory developments that may affect existing obligations.
  Output: Change brief + impact assessment on current obligation map

TYPE 5: EVIDENCE INVENTORY
  Purpose: Catalogue all compliance evidence by obligation.
  Output: Evidence inventory with location, age, and adequacy assessment

### Compliance Obligation Structure

For each obligation:

  OBL-[FRAMEWORK]-[NNN]: [Obligation name]
  ─────────────────────────────────────────────────────────
  Description:  [What the obligation requires — in plain language]
  Source:       [Regulation / standard / contract clause reference]
  Owner:        [Named role — who is accountable]
  Control:      [How the organisation currently meets this obligation]
  Evidence:     [What documents / records demonstrate compliance]
  Evidence location: [Where the evidence is stored]
  Evidence age: [When last updated]
  Status:       [🟢 CURRENT / 🟡 REVIEW NEEDED / 🟡 PARTIAL / 🔴 GAP / 🔴 URGENT]
  Next review:  [Date]
  Action:       [If not CURRENT: specific action with owner and deadline]
  ─────────────────────────────────────────────────────────

### Status Classification Rules

🟢 CURRENT:
  ALL of:
  ✓ Control is effective (tested and confirmed)
  ✓ Evidence exists and is current (<12 months for most; <6 months for high-risk)
  ✓ No known gaps

🟡 REVIEW NEEDED:
  ANY of:
  - Evidence is >12 months old (not necessarily non-compliant; needs confirmation)
  - Control has not been tested since last regulatory change
  - Review date has passed without formal reassessment

🟡 PARTIAL:
  ALL of:
  - A control exists but does not fully address the obligation
  - Evidence exists but has identifiable gaps
  - Not at immediate breach risk but requires improvement

🔴 GAP:
  ANY of:
  - No effective control exists
  - Evidence is absent or cannot be located
  - Known failure of the control

🔴 URGENT:
  ANY of:
  - Active breach is likely or confirmed
  - Regulatory deadline is within 30 days and gap exists
  - Regulator has signalled they will review this area

### Compliance Output Structure

  COMPLIANCE OBLIGATION MAP: [Framework name]
  Organisation: [Name] | Jurisdiction: [Jurisdiction] | Date: [Date]
  ════════════════════════════════════════════════════════════
  ── [REGULATORY FRAMEWORK] ──────────────────────────────────
  [Obligation blocks — one per obligation]

  ── COMPLIANCE DASHBOARD ────────────────────────────────────
  Total obligations: [N]
  🟢 CURRENT:        [N] ([%])
  🟡 REVIEW/PARTIAL: [N] ([%])
  🔴 GAP/URGENT:     [N] ([%])

  PRIORITY ACTIONS (ranked):
  1. 🔴 URGENT: [Obligation] — [Action] — [Owner] — [Deadline]
  2. 🟡 HIGH:   [Obligation] — [Action] — [Owner] — [Deadline]
  [Continue]
  ════════════════════════════════════════════════════════════

### Jurisdiction-Specific Frameworks

When loading obligations, apply jurisdiction-specific content:

UK:
  GDPR / UK GDPR (DPA 2018): lawful basis; ROPA; DSARs; breach reporting
  FCA: COBS; SYSC; SM&CR; Consumer Duty; MiFID II (post-Brexit version)
  AML (MLR 2017): CDD; EDD; SAR reporting; PEP/sanctions screening; MLRO
  Companies Act 2006: statutory filings; director duties; accounts
  ISO 27001: risk assessment; controls; audit programme; incident management

Pakistan:
  SECP: company filings; corporate governance; listed company obligations
  SBP regulations: for financial institutions — capital; AML; KYCC
  PECA 2016: cybercrime; data security obligations
  PTA: for telecoms/digital services
  EOBI / SESSI: employer contribution compliance
  Provincial labour laws: employment; workplace safety

UAE:
  DIFC / ADGM (for entities in those zones): separate regime from mainland
  UAE Federal Labour Law: employment; EOSB; annual leave
  CBUAE: for financial services — AML; capital; reporting
  UAE Cybersecurity Council: data protection obligations
  VAT (FTA): filing; record-keeping; audit trail

## NEVER DO THESE

- NEVER mark an obligation as CURRENT without citing the evidence —
  "we comply with GDPR" is an assertion; "privacy notice updated [date],
  ROPA at [location], last reviewed [date]" is evidence
- NEVER produce a compliance map without a compliance dashboard —
  the dashboard is what makes the map actionable by leadership
- NEVER produce a remediation plan without priority ranking — compliance
  gaps must be fixed in priority order, not convenience order
- NEVER state that an obligation is "not applicable" without documenting
  the reasoning — regulators are not convinced by "N/A" without rationale
- NEVER leave an obligation without a named owner — obligations without
  owners are the ones that drift to non-compliance
- NEVER omit the regulatory change monitoring step — the compliance
  map that was accurate today may be wrong tomorrow if a regulation changes
