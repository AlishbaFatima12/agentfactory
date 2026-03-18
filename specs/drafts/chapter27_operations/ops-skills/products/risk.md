---
name: risk
version: 1.0
description: >
  Activate for: risk, risk register, operational risk, risk assessment,
  risk management, risk scoring, risk matrix, likelihood impact, inherent
  risk, residual risk, risk mitigation, risk owner, risk appetite, risk
  threshold, risk escalation, risk review, risk dashboard, risk heat map,
  control effectiveness, risk treatment, accept risk, transfer risk,
  mitigate risk, key risk indicator, KRI, risk culture, emerging risk.
plugin-commands: /risk
---

## RISK MANAGEMENT WORKFLOW

### Risk Register Construction

STEP 1: RISK IDENTIFICATION
  Brainstorm by category:
  - Vendor/supplier risks (single source; concentration; performance)
  - Process risks (key-person; undocumented; control gaps)
  - Technology risks (system failure; cyber; data loss; obsolescence)
  - Compliance/regulatory risks (breach; change; enforcement)
  - Business continuity risks (disaster; pandemic; key site loss)
  - People risks (attrition; fraud; skills shortage; conduct)
  - Financial risks (cost overrun; currency; credit)
  - Strategic risks (market change; competitive; reputational)

  Rule: Include risks you are uncomfortable discussing. A risk register
  that only contains comfortable risks is a political document, not a
  management tool.

STEP 2: INHERENT RISK SCORING
  Score BEFORE considering controls — as if no controls existed.
  Use the scoring matrix from ops-global-router.md (or ops.local.md override).
  Inherent score = Likelihood × Impact

STEP 3: CONTROL ASSESSMENT
  For each risk, identify existing controls.
  Rate control effectiveness:
  STRONG:  Control reliably prevents or significantly reduces the risk;
           tested recently; evidence available
  MODERATE: Control partially addresses the risk; some gaps; not fully tested
  WEAK:    Control exists on paper but effectiveness unconfirmed; rarely tested
  ABSENT:  No effective control; inherent = residual

  RULE: Rate controls by their actual effectiveness — not by whether they
  exist. An untested control is, at best, MODERATE.

STEP 4: RESIDUAL RISK SCORING
  Score AFTER controls.
  Residual score = L × I after controls reduce likelihood and/or impact.

  If residual score > risk appetite threshold (from ops.local.md):
  → MITIGATION REQUIRED — produce a mitigation plan

STEP 5: RISK TREATMENT DECISION
  For each risk, document the treatment decision:
  MITIGATE:  Implement additional controls to reduce residual score
  TRANSFER:  Insure; contract; outsource the risk
  ACCEPT:    Residual score within appetite; monitor only
  AVOID:     Cease the activity that creates the risk (rare; last resort)

### Risk Register Output Structure

  RISK: [ID] — [Name]
  ─────────────────────────────────────────────────────────
  Category:       [Vendor/Process/Technology/Compliance/BCP/People/Financial]
  Description:    [Specific — what could happen; to whom; in what circumstances]
  Risk owner:     [Named role — who is accountable]

  Inherent risk:  Likelihood [1–5] × Impact [1–5] = [Score] ([LOW/MED/HIGH/CRITICAL])
  Controls:       [List each control — rated STRONG / MODERATE / WEAK]
  Residual risk:  Likelihood [1–5] × Impact [1–5] = [Score] ([LOW/MED/HIGH/CRITICAL])

  Within appetite: [YES / NO]
  Treatment:      [MITIGATE / TRANSFER / ACCEPT / AVOID]

  Mitigation (if MITIGATE):
    Action:   [Specific — what changes]
    Owner:    [Named person]
    Deadline: [Date]
    Target:   Residual score [target] by [date]

  Escalation threshold:
    Trigger: [Specific event or metric that triggers escalation]
    Escalate to: [Named role]
  ─────────────────────────────────────────────────────────

### Mitigation Plan Rules

A mitigation plan is only useful if it reduces residual risk to within appetite.

Before accepting a mitigation plan:
  ✓ Will the action actually reduce likelihood, impact, or both?
  ✓ By how much? (Quantify — not "it will help")
  ✓ By when? (Specific date)
  ✓ Who is accountable? (One person)
  ✓ How will we know it worked? (Measurable — not "improved")

  WEAK MITIGATION: "Improve vendor management"
  STRONG MITIGATION: "Pre-qualify a backup vendor for [Vendor A] by [date].
  Target: residual likelihood reduces from 3 to 2 (score: 10 → 8, within appetite)"

### Risk Escalation Matrix

Define explicit triggers for each escalation level:

  OPERATIONS MANAGER level:
  → Any risk where residual score increases by 3+ since last review
  → Any new risk identified with inherent score ≥ 12

  COO level:
  → Any risk where residual score > appetite threshold for >30 days
  → Any risk classified as CRITICAL (score ≥ 17)
  → Any risk where a mitigation action missed its deadline

  BOARD level:
  → Any risk rated CRITICAL for >60 days without improvement
  → Any risk that has materialised causing significant financial or
    reputational impact
  → Any regulatory breach risk (zero tolerance — always Board-level)

## NEVER DO THESE

- NEVER score residual risk lower than inherent without specifying
  which control reduces it and why that control is rated STRONG
- NEVER accept a mitigation plan that does not include a target
  residual score — "we will improve controls" is not a plan
- NEVER rate a control as STRONG if it has not been tested — untested
  controls are, at best, MODERATE
- NEVER omit residual risk from the register — inherent risk alone
  produces a list of fears, not a management tool
- NEVER accept an escalation matrix that says "escalate if the risk
  is serious" — "serious" is not a threshold; a score is
- NEVER review a risk register only annually — risks change faster
  than that; quarterly review minimum for HIGH and CRITICAL risks
