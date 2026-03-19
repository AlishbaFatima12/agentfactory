---
name: ops-global-router
version: 1.0
description: >
  TOP-LEVEL ROUTER. Activate when ANY of these terms appear:
  vendor, supplier, contract, SLA, procurement, spend, renewal, renegotiate,
  vendor audit, vendor portfolio, vendor scorecard, vendor management,
  process, SOP, standard operating procedure, process documentation,
  process map, process gap, workflow, runbook, process improvement,
  change management, change request, change impact, change assessment,
  change comms, rollback, go-live, implementation, migration,
  compliance, regulatory, regulation, obligation, control, audit,
  evidence, GDPR, ISO, FCA, PCI, audit trail, audit preparation,
  risk, risk register, risk assessment, operational risk, mitigation,
  risk appetite, risk scoring, risk owner, escalation,
  incident, outage, failure, post-mortem, RCA, root cause,
  corrective action, lessons learned, five whys,
  metrics, KPI, operational dashboard, performance measurement,
  operations, ops, operational efficiency, COO, operations manager.
author: Panaversity — The AI Agent Factory
chapter: 27 — Operations
plugin: https://claude.com/plugins/operations
---

## STEP 1 — IDENTIFY TASK AND LOAD PRODUCT FILE

| Query Pattern | Load Product File |
|---|---|
| Vendor, supplier, spend, SLA, contract value, renewal | products/vendor.md |
| Process, workflow, process map, gap analysis | products/process.md |
| Change, change request, impact assessment, migration | products/change.md |
| Compliance, regulatory, obligation, control, GDPR | products/compliance.md |
| Audit, audit prep, evidence pack, mock audit | products/audit.md |
| SOP, standard operating procedure, runbook, procedure | products/sop.md |
| Risk, risk register, risk score, mitigation | products/risk.md |
| Contract analysis, obligation extract, contract review | products/contract.md |
| Metrics, KPI, dashboard, operational reporting | products/metrics.md |
| Incident, outage, post-mortem, RCA, corrective action | products/incident.md |

## STEP 2 — ALWAYS LOAD CONFIGURATION

Always load: ops.local.md
Check for:
- Vendor portfolio configuration (categories, spend bands, critical vendors)
- Regulatory frameworks and applicable obligations
- Risk appetite statement and scoring methodology
- Change authority matrix (who approves what)
- Process library (critical SOPs and review cycles)
- Operational metrics (KPIs, thresholds, reporting cycle)

IF ops.local.md NOT FOUND:
  Inform user: "No operations configuration found. Outputs will use
  general operational best practices. Run Exercise 8 from Chapter 27
  to build ops.local.md — it will make all outputs specific to your
  organisation's vendors, regulatory environment, and risk appetite."

## STEP 3 — MANDATORY OUTPUT HEADER (all operations outputs)

  TASK:          [e.g. Vendor Portfolio Audit]
  DOCUMENT TYPE: [Audit / Assessment / Register / SOP / Report / etc.]
  CONFIGURATION: [Loaded: ops.local.md / Not configured — using best practice]
  DATE:          [Date of output]
  OWNER:         [Named person responsible for acting on this output]
  REVIEW DATE:   [When this output should be reviewed / updated]

## RISK SCORING STANDARD (apply consistently across all outputs)

Default scoring matrix (override with ops.local.md configuration):

  LIKELIHOOD:
    1 — Rare:          <5% probability in next 12 months
    2 — Unlikely:      5–20% probability
    3 — Possible:      20–50% probability
    4 — Likely:        50–80% probability
    5 — Almost certain: >80% probability

  IMPACT:
    1 — Negligible:  <£5K cost; <1hr disruption; no regulatory consequence
    2 — Minor:       £5K–£50K; 1–4hr disruption; minor regulatory note
    3 — Moderate:    £50K–£250K; 4–24hr disruption; regulatory inquiry
    4 — Significant: £250K–£1M; 1–7 day disruption; regulatory action
    5 — Critical:    >£1M; >7 days disruption; licence/enforcement action

  RISK SCORE = Likelihood × Impact
    LOW:          1–4
    MEDIUM:       5–9
    HIGH:         10–16
    CRITICAL:     17–25

  RULE: Never describe a risk as "low" without providing a score.
  Qualitative-only risk assessments are not actionable.

## CHANGE CLASSIFICATION STANDARD

Apply before every change impact assessment:

  STANDARD:   Low complexity; well-understood; reversible; limited scope
              → Owner can approve; no formal CAB required
  SIGNIFICANT: Moderate complexity; some downstream impact; reversible
              → Change manager + function head approval required
  MAJOR:      High complexity; cross-functional impact; reversible with effort
              → CAB approval required; impact assessment mandatory
  CRITICAL:   System-wide impact; irreversible or difficult to revert;
              regulatory implication possible
              → Executive sponsor + CAB + legal/compliance review required

  Load from ops.local.md: change authority matrix (who approves each class)

## COMPLIANCE STATUS STANDARD

Apply to every obligation assessed:

  🟢 CURRENT:        Control effective; evidence current; no gaps
  🟡 REVIEW NEEDED:  Evidence aging; control not recently tested; partial only
  🟡 PARTIAL:        Control exists but incomplete; evidence gaps present
  🔴 GAP:            No effective control; evidence absent; obligation unmet
  🔴 URGENT:         Active breach risk; immediate action required

  RULE: Never mark an obligation as CURRENT without evidence.
  An obligation without evidence is, at best, PARTIAL.

## SOP QUALITY STANDARDS (enforce on every SOP output)

Every SOP must include:
  ✓ Purpose — one sentence: why this SOP exists
  ✓ Scope — what is included and what is explicitly excluded
  ✓ Roles — specific role titles, not "the team"
  ✓ Inputs required — what must be gathered before starting
  ✓ Process steps — numbered; each step has one action; role assigned
  ✓ Controls — specific controls at each risk point
  ✓ Error / exception handling — what to do when each step fails
  ✓ Document control — version, date, author, review date

  NEVER acceptable in a SOP:
  - "The team will..." (not specific enough — which role?)
  - A step that does two things (split it)
  - Controls listed only in the introduction (embed at the specific step)
  - No error handling (every process has failure modes)

## INCIDENT QUALITY STANDARDS

Every post-mortem output must include:
  ✓ Timeline (specific times — not "eventually" or "shortly after")
  ✓ Root cause (systemic — not the proximate event that triggered the incident)
  ✓ Contributing factors (what made it worse)
  ✓ What went well (protect what works)
  ✓ Corrective actions (specific, owned, time-bound — not vague improvements)
  ✓ Lessons learned (for organisation-wide sharing)

  RULE: A corrective action that cannot be verified as "done" is not
  a corrective action — it is an intention. Every CA must be:
  - Specific (describe exactly what changes)
  - Owned (one named person, not "the team")
  - Time-bound (a date, not "soon" or "ASAP")
  - Verifiable (how will you confirm it is complete?)

## UNIVERSAL RULES — NON-NEGOTIABLE

- NEVER produce a risk register without inherent AND residual scores
- NEVER produce a change impact assessment without a rollback plan
- NEVER mark a compliance obligation as CURRENT without citing evidence
- NEVER produce an SOP without named role owners for each step
- NEVER produce a post-mortem corrective action without a named owner
  and due date
- NEVER produce a vendor scorecard without a renewal strategy recommendation
- NEVER classify a change as STANDARD if it has cross-system integrations
- ALWAYS include the owner field in every output — every document must have
  a human responsible for acting on it
- ALWAYS include a review date — operational documents without review dates
  become the outdated documents that cause the next failure
