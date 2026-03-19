# Chapter 27: Operations

> *"Operations is the function nobody notices when it works and everybody blames when it doesn't. The vendor invoice arrives late, the process fails at step seven, the regulatory change lands and nobody has updated the controls, the critical system goes down and two people have the runbook in their head. Operations teams spend 70% of their time managing the consequences of invisible problems — problems that were always visible if anyone had been watching."*
> — Chief Operating Officer, 400-person professional services firm

---

## Introduction: The Operations Intelligence Gap

Every organisation has an operations function, even if it does not call it that. Someone manages vendor contracts. Someone documents — or fails to document — how critical processes work. Someone tracks whether the organisation is complying with its regulatory obligations. Someone coordinates change when systems, processes, or structures are modified.

The problem is not that these activities do not happen. The problem is that they happen **reactively, inconsistently, and invisibly**.

Vendor contracts renew automatically because nobody tracked the deadline. Process documentation is three versions out of date and nobody knows which version is current. A regulatory requirement changed six months ago and the control that addresses it has not been updated. A major system change went live without a formal impact assessment and is now causing downstream failures in three processes that nobody knew were connected.

The **Operations Intelligence Gap** is the delta between what an organisation should know about its own operations and what it actually knows. Almost every operational failure — cost overrun, process breakdown, compliance gap, change disaster — traces back to this gap.

The Operations Plugin closes the gap by making the invisible visible: every vendor tracked, every process documented, every change assessed, every compliance obligation mapped.

### The Three Operational Failure Modes

**Failure Mode 1: Vendor Sprawl**
Organisations accumulate vendors the way individuals accumulate subscriptions. Each purchase decision was rational at the time. The aggregate is irrational. Overlapping capabilities, unused contracts, auto-renewing SaaS tools nobody uses, pricing tiers that made sense for a smaller team. The typical 200-person company overspends on vendors by 20–30% because nobody has a complete picture of the vendor portfolio.

**Failure Mode 2: Process Rot**
Documented processes decay. The process document reflects how things worked two years ago, before the system migration, before the team restructure, before the regulation changed. The people who know how things actually work are the three employees who have been here long enough to remember the history. When those people leave, the process knowledge goes with them.

**Failure Mode 3: Compliance Drift**
Regulatory and contractual obligations accumulate. Each one was tracked when it was introduced. Over time, the tracking becomes inconsistent. Controls become outdated. Evidence gaps appear. The organisation is not non-compliant — it just does not know which obligations are fully met, which are partially met, and which have drifted.

The Operations Plugin addresses all three. Not by eliminating the underlying complexity — vendor portfolios, process documentation, and regulatory compliance are genuinely complex — but by making the complexity manageable.

---

## The Operations Plugin Architecture

### Installing the Plugin

```
Platform:  Claude Cowork
Path:      Cowork → Plugins → Browse
Plugin:    Operations
URL:       https://claude.com/plugins/operations
GitHub:    https://github.com/anthropics/knowledge-work-plugins/tree/main/operations
```

### Plugin Commands

| Command | Function |
|---|---|
| `/vendor` | Vendor management — contracts, spend, SLAs, renewals |
| `/process` | Process documentation — SOPs, maps, gap analysis |
| `/change` | Change management — requests, impact, comms, rollback |
| `/compliance` | Compliance tracking — controls, obligations, evidence |
| `/audit` | Audit preparation and internal audit support |
| `/sop` | Standard Operating Procedure creation and maintenance |
| `/risk` | Operational risk register and risk assessment |
| `/contract` | Contract analysis and obligation extraction |
| `/metrics` | Operational metrics framework and reporting |
| `/incident` | Incident management — logging, RCA, corrective actions |

### The `ops.local.md` Configuration File

Every Operations output is calibrated by the organisation's operations configuration:
- Vendor portfolio (categories, spend bands, renewal calendar)
- Regulatory frameworks applicable to the organisation
- Risk appetite and tolerance thresholds
- Change management process (approval authority matrix)
- Operational metrics and KPIs
- Critical process inventory

A well-configured `ops.local.md` means `/compliance` references your actual regulatory obligations, `/vendor` knows your renewal cycle, and `/risk` applies your risk scoring methodology.

---

## Part One: Vendor Management — The Portfolio View

### Why Vendor Management Fails

Vendor management fails not because organisations lack vendor relationships — they have too many. It fails because the portfolio is invisible. Nobody has a single, current, accurate view of:
- Every vendor, what they provide, and what it costs
- Which contracts are expiring and when
- Which vendors are underperforming against their SLAs
- Which vendor categories have three vendors providing the same capability
- Which subscriptions are actively used versus passively renewing

The result: contracts auto-renew without renegotiation, overlapping capabilities go unrationalised, underperforming vendors continue to be paid, and the annual vendor spend is 20–30% higher than it should be.

### The `/vendor` Workflow

```
/vendor type:"portfolio-audit"
> User: Run a vendor portfolio audit. Here is our current vendor list:
        [Paste vendor list with: name, category, annual cost, contract
        end date, primary owner, usage level (active/partial/unknown)]
```

**Sample Vendor Portfolio Audit Output:**

```
VENDOR PORTFOLIO AUDIT
════════════════════════════════════════════════════════════
Total vendors:          47
Total annual spend:     £1,847,000
Audit date:             [Date]
Data completeness:      68% (15 vendors missing usage data)

── SPEND BY CATEGORY ────────────────────────────────────────
Software / SaaS:        £842,000  (46%) — 31 vendors
Professional services:  £420,000  (23%) — 8 vendors
Infrastructure / cloud: £385,000  (21%) — 5 vendors
Other:                  £200,000  (11%) — 3 vendors

── IMMEDIATE ATTENTION REQUIRED ────────────────────────────

🔴 RENEWALS IN NEXT 90 DAYS (7 vendors):
  Vendor A — CRM platform — £124,000/yr — renews 15 April
  Vendor B — Project management — £18,000/yr — renews 22 April
  Vendor C — HR platform — £31,000/yr — renews 1 May
  [Continue for all 7]

  ACTION: Begin renegotiation for all renewals >£50,000 immediately.
  Target: 3 months of negotiation runway for enterprise contracts.

🔴 USAGE UNKNOWN — HIGH SPEND (5 vendors):
  Vendor D — Marketing automation — £67,000/yr — no usage data
  Vendor E — Analytics platform — £45,000/yr — no usage data
  [Continue]

  ACTION: Audit usage before next renewal. Cancellation candidates
  if usage cannot be confirmed by [date].

🟡 POTENTIAL OVERLAP — RATIONALISATION OPPORTUNITY:
  Project management tools: 3 vendors (Vendor B, F, G) — £42,000 combined
    → Opportunity: consolidate to 1–2 tools; estimate £15,000–£20,000 savings
  Video/conferencing: 2 vendors (Vendor H, I) — £28,000 combined
    → Opportunity: consolidate; estimate £10,000–£14,000 savings
  Document management: 2 vendors (Vendor J, K) — £19,000 combined
    → Opportunity: review; one may be legacy/redundant

── RENEWAL CALENDAR (NEXT 12 MONTHS) ─────────────────────
  Q1 [months]: £187,000 in renewals — [N] vendors
  Q2 [months]: £312,000 in renewals — [N] vendors
  Q3 [months]: £95,000 in renewals — [N] vendors
  Q4 [months]: £223,000 in renewals — [N] vendors

── RATIONALISATION OPPORTUNITY SUMMARY ────────────────────
  Category consolidation savings (estimated):  £25,000–£34,000
  Unknown-usage cancellation opportunity:       £112,000 (if confirmed unused)
  Renegotiation opportunity (renewals >£50k):   £18,000–£37,000 (typical 15–30%)
  Total addressable savings:                    £155,000–£183,000 (8–10% of spend)
════════════════════════════════════════════════════════════
```

### SLA Tracking and Vendor Scorecards

```
/vendor type:"scorecard"
> User: Generate a vendor scorecard for our cloud infrastructure provider.
        SLA commitments: 99.9% uptime; <4hr P1 response; <24hr P1 resolution.
        Last quarter actual: 99.7% uptime (3 incidents); avg P1 response 2.1hr;
        avg P1 resolution 31hr. Contract value: £385,000/yr.
        Renewal: 8 months.
```

**Sample Vendor Scorecard:**

```
VENDOR SCORECARD: [Cloud Infrastructure Provider]
Quarter: [Q4 2025] | Contract value: £385,000/yr | Renewal: [Month]
════════════════════════════════════════════════════════════
PERFORMANCE vs. SLA:

  Uptime:           99.7% actual vs. 99.9% SLA — ❌ BREACH
                    3 incidents in quarter; total downtime: [X] hours
                    Financial impact (est.): £[Y] in lost productivity
                    SLA credit due: [check contract — typically applies at 99.7%]

  P1 Response:      2.1hr average vs. <4hr SLA — ✅ MET
                    [Range: 0.5hr–3.8hr across 3 incidents]

  P1 Resolution:    31hr average vs. <24hr SLA — ❌ BREACH
                    Longest incident: 47hr (Incident #[N], [date])
                    Root cause: [if known]

OVERALL SCORECARD RATING: 🟡 UNDERPERFORMING

ACTIONS BEFORE RENEWAL:
  1. Claim SLA credits for uptime breach (check contract terms)
  2. Request formal RCA for longest incident from vendor
  3. Include uptime and resolution SLA improvement in renewal negotiation
  4. Consider: SLA credit mechanism in renewal; escalation clause

RENEWAL STRATEGY RECOMMENDATION:
  Do not auto-renew. Enter negotiation with: performance evidence,
  SLA credit claim, and requirement for enhanced uptime commitment
  (99.95%) and improved P1 resolution SLA (<16hr) as conditions of renewal.
════════════════════════════════════════════════════════════
```

### Contract Obligation Extraction

```
/contract type:"obligation-extract"
> User: Extract all obligations, SLAs, and key dates from this
        vendor contract. [Attach or paste contract text]
```

Output: a structured table of every obligation (what, who is responsible, deadline/frequency), every SLA (metric, threshold, consequence of breach), and every key date (renewal, notice period, review milestones). This replaces hours of manual contract review and ensures nothing is missed.

---

## Part Two: Process Documentation — SOPs That Work

### Why Process Documentation Fails

The standard process documentation failure has three stages:

**Stage 1: The document is created** — usually during an audit, a system implementation, or a new employee's arrival. The document reflects how the process works at that moment.

**Stage 2: The process changes; the document does not** — a system upgrade changes two steps. A team restructure changes the approver. A regulatory update adds a new control. The document is not updated because nobody owns it and the update is not worth 45 minutes of someone's time.

**Stage 3: The document diverges from reality** — now the process document describes a process that nobody follows because it reflects a state that no longer exists. The document creates confusion rather than clarity. New employees follow the document and make errors. Auditors find the document and the actual process differ.

The `/sop` and `/process` commands address the creation problem (producing good documents quickly) and the maintenance problem (making updates fast enough that people actually do them).

### The `/sop` Workflow

```
/sop
> User: Write an SOP for our monthly supplier payment run.
        Context: Finance team, 3 people. ERP: SAP S/4HANA.
        Approvals: invoices >£10,000 require CFO approval.
        Frequency: last working day of each month.
        Inputs: approved purchase orders, vendor invoices, bank details.
        Key risk: paying wrong account (fraud/error).
        Who does it: AP Clerk (executes), Finance Manager (reviews),
        CFO (approves >£10k payments).
```

**Sample SOP Output:**

```
STANDARD OPERATING PROCEDURE
SOP-FIN-042: Monthly Supplier Payment Run
════════════════════════════════════════════════════════════
Owner:        Finance Manager
Approver:     CFO
Version:      1.0
Effective:    [Date]
Review due:   [Date + 12 months]
Frequency:    Monthly — last working day of each month

PURPOSE
This SOP defines the process for executing the monthly supplier payment
run, ensuring all approved invoices are paid accurately, on time, and
with appropriate authorisation controls.

SCOPE
Applies to: all supplier payments processed in the monthly payment run.
Excludes: emergency/out-of-cycle payments (see SOP-FIN-043).

ROLES AND RESPONSIBILITIES
  AP Clerk:          Prepares payment batch; executes payments in SAP
  Finance Manager:   Reviews payment batch; approves batch <£10,000 per invoice
  CFO:              Approves individual payments ≥£10,000

INPUTS REQUIRED (gather by T-3 business days before month end)
  □ All approved purchase orders for the period
  □ Vendor invoices — matched to POs in SAP
  □ Approved bank account details for new vendors (from Vendor Master)
  □ CFO approval for all invoices ≥£10,000 (email or ERP approval record)

PROCESS STEPS

PHASE 1: PREPARATION (T-3 to T-1 — AP Clerk)
  Step 1: Run AP aged creditors report in SAP [Menu: FBL1N]
          Identify all invoices due in current month + any overdue
  Step 2: Match invoices to approved POs
          Flag any invoice without an approved PO — DO NOT include in run
          Escalate unmatched invoices to Finance Manager for resolution
  Step 3: Identify all invoices ≥£10,000
          Confirm CFO approval obtained for each (approval in SAP or email)
          DO NOT include any ≥£10,000 invoice without CFO approval
  Step 4: Compile payment proposal in SAP [Transaction: F110]
          Verify: vendor name, account number, sort code, payment amount
          For any NEW vendor: cross-check bank details against Vendor Master
          and original vendor setup documentation — do not pay to account
          not in Vendor Master
  Step 5: Export payment proposal summary to Excel
          Send to Finance Manager for review [email subject: "Payment Run
          [Month] — Review Required"]

PHASE 2: REVIEW (T-1 — Finance Manager)
  Step 6: Review payment proposal against aged creditors report
          Verify: all due invoices included; no duplicate payments;
          bank details match Vendor Master; CFO approvals present for ≥£10k
  Step 7: If errors found: return to AP Clerk with specific corrections
          If approved: confirm approval in SAP and via email to AP Clerk

PHASE 3: EXECUTION (Last working day — AP Clerk)
  Step 8: Execute payment run in SAP [Transaction: F110 → Execute]
          Time: execute before [HH:MM] to meet bank cut-off for same-day value
  Step 9: Download payment confirmation from SAP and bank portal
          File confirmation: [Network path]\Finance\Payments\[YYYY-MM]
  Step 10: Send payment remittances to all vendors paid (via SAP remittance
           function or email — per vendor preference in Vendor Master)

PHASE 4: RECONCILIATION (Next business day — AP Clerk)
  Step 11: Reconcile bank statement payments to SAP payment run
           Any discrepancy: escalate immediately to Finance Manager
  Step 12: Update payment records in SAP; close paid invoices
  Step 13: File all documentation: POs, invoices, approvals, confirmations

CONTROLS
  Control 1: No invoice paid without matched, approved PO (Step 2)
  Control 2: No invoice ≥£10,000 paid without CFO approval (Step 3)
  Control 3: Bank details verified against Vendor Master before every payment (Step 4)
  Control 4: Four-eyes review: AP Clerk prepares; Finance Manager approves (Steps 5–7)
  Control 5: Payment remittances sent to vendors to detect incorrect payments (Step 10)
  Control 6: Bank reconciliation within 1 business day of payment run (Step 11)

RISK: PAYMENT FRAUD / WRONG ACCOUNT
  Highest risk: a vendor's bank details are changed by a fraudulent request
  (invoice redirection fraud / mandate fraud).
  Mandatory control: ANY request to change a vendor's bank details must be
  verified by telephone to the vendor's known number (NOT a number provided
  in the change request) BEFORE updating Vendor Master.
  Escalation: Finance Manager must approve all bank detail changes.

ERROR / EXCEPTION HANDLING
  Invoice without PO:         → Escalate to Finance Manager; hold payment
  ≥£10k without CFO approval: → Do not include; escalate to Finance Manager
  Bank detail mismatch:       → Stop; escalate immediately; do not pay
  SAP system unavailable:     → Contact IT; do not execute manually; escalate
  Bank cut-off missed:        → Next business day payment; notify Finance Manager

DOCUMENT CONTROL
  Version  Date       Author          Changes
  1.0      [Date]     [AP Clerk]      Initial version
════════════════════════════════════════════════════════════
```

### Process Gap Analysis

```
/process type:"gap-analysis"
> User: Analyse our Order-to-Cash process. Current documented process:
        [Paste or describe current process]. Known issues:
        - Customer disputes take 45 days on average to resolve (target: 14 days)
        - Credit checks sometimes skipped for repeat customers
        - Revenue recognition errors in month-end close
```

Output: a structured gap analysis mapping each known issue to the specific process step where the gap occurs, the root cause (missing control / missing step / unclear ownership / system gap), and a recommended fix with priority rating.

### Process Version Control and Change Notification

Every SOP output includes a Document Control section. When a process is updated:

```
/sop type:"version-update"
> User: SOP-FIN-042 needs to update: CFO approval threshold changed
        from £10,000 to £25,000 effective 1 April 2026. SAP now
        requires dual authorisation for all payments above £50,000
        (new system control added March 2026).
```

Output: the updated SOP with version incremented, specific changes tracked in the Document Control table, and a change notification email draft for distribution to all users of the SOP.

---

## Part Three: Change Management — Reducing Change Failure

### Why Changes Fail

Technology changes, process changes, structural changes, and regulatory changes all share a common failure pattern: the change is technically correct but operationally wrong. The system was upgraded successfully. The process was redesigned correctly. The structure was reorganised rationally. And six weeks later, the organisation is dealing with the downstream consequences that nobody mapped in advance.

**The three causes of change failure:**

**Cause 1: Incomplete impact assessment** — the change was assessed in isolation. Its effects on connected processes, systems, and teams were not mapped. The CRM upgrade that nobody realised would break the finance integration. The process redesign that nobody realised would double the workload for the team downstream.

**Cause 2: Insufficient communication** — the people affected by the change found out about it too late, in the wrong format, or not at all. Resistance grew not from opposition to the change but from feeling blindsided by it.

**Cause 3: No rollback plan** — when the change caused unexpected problems, the organisation had no structured way to revert. The rollback was improvised, incomplete, and created more problems than the original change.

The `/change` command addresses all three systematically.

### The `/change` Workflow

```
/change type:"impact-assessment"
> User: We are migrating our ERP from SAP S/4HANA on-premise to
        SAP S/4HANA Cloud (RISE). Timeline: 6 months. Go-live: Q3 2026.
        Affected: Finance (AP, AR, GL, Reporting), Procurement,
        Operations (inventory management), IT.
        Team size affected: ~80 people across 4 departments.
        Key integrations: CRM (Salesforce), Payroll (ADP),
        EDI with 12 suppliers, BI platform (Power BI).
```

**Sample Change Impact Assessment:**

```
CHANGE IMPACT ASSESSMENT
Change: ERP Migration — SAP On-Premise to SAP S/4HANA Cloud (RISE)
Sponsor: [Name] | Owner: [Name] | Date: [Date]
════════════════════════════════════════════════════════════
CHANGE CLASSIFICATION:
  Scope:    Organisation-wide (4 departments, ~80 people)
  Type:     Technology — system migration with process change implications
  Risk:     🔴 HIGH — core business system; multiple integrations; long timeline
  Approvals required: [per change authority matrix in ops.local.md]

STAKEHOLDER IMPACT MAP:

  Finance (AP, AR, GL, Reporting) — 🔴 HIGH IMPACT
  Impact: All core finance processes will change; new UI; new workflows;
  month-end close process will require redesign; reporting to be rebuilt in
  SAP Analytics Cloud (migration from Power BI direct connection)
  People affected: [N] — all Finance team members
  Training required: [N] hours; recommend classroom + system sandbox
  Key concern: Month-end close capability at go-live; Q3 go-live aligns with
  year-end (HIGH RISK — consider timeline adjustment)

  Procurement — 🟡 MEDIUM-HIGH IMPACT
  Impact: PO, supplier onboarding, and payment approval workflows change;
  current approval matrix needs to be reconfigured in cloud system
  People affected: [N]
  Training required: [N] hours

  Operations (Inventory) — 🟡 MEDIUM IMPACT
  Impact: Inventory management workflows change; physical scanning integration
  needs testing
  People affected: [N]

  IT — 🔴 HIGH IMPACT (delivery responsibility)
  Impact: Infrastructure decommission; integration rebuilds (4 systems);
  data migration; user management transition to cloud identity

INTEGRATION RISK REGISTER:

  | Integration | Current | Status | Risk | Action |
  |---|---|---|---|---|
  | Salesforce CRM | API | Rebuild required | 🔴 HIGH | Engage SI; scope by Month 1 |
  | ADP Payroll | File transfer | API upgrade available | 🟡 MEDIUM | Confirm ADP timeline |
  | EDI (12 suppliers) | IDOC | Cloud EDI service available | 🟡 MEDIUM | Supplier communication plan needed |
  | Power BI | Direct DB | Connection type changes | 🔴 HIGH | BI rebuild in SAC or connector |

TIMELINE RISKS:
  🔴 Q3 go-live = Finance year-end period: HIGH RISK of go-live disrupting
     year-end close. RECOMMENDATION: move go-live to Q2 or January (post-year-end)
  🔴 6-month timeline is aggressive for this scope: typical RISE migration
     for this complexity is 9–12 months. RECOMMENDATION: add 2-month buffer
  🟡 12 supplier EDI migrations may require extended parallel run

RECOMMENDED ROLLBACK PLAN:
  Phase 1 (design): rollback = project cancellation (no operational impact)
  Phase 2 (build): rollback = continue on current system; project cost sunk
  Phase 3 (UAT): rollback = delay go-live; extend parallel run
  Phase 4 (go-live): rollback = revert to on-premise for [N] weeks if
    critical failure in first 72 hours; define "critical failure" in advance

CHANGE READINESS ASSESSMENT:
  Organisation: 🟡 Moderate — change fatigue from prior projects; sponsor visible
  Technology: 🟡 Moderate — SAP experience exists but cloud is new
  Process: 🔴 Low — current SOPs will all need updating post-go-live
  Data: 🟡 Moderate — data quality audit needed before migration

NEXT STEPS (Month 1):
  1. Executive sponsor confirms timeline; review go-live date vs. year-end
  2. Appoint Change Manager (dedicated resource — this is not a part-time role)
  3. Salesforce integration scope and SI engagement
  4. Data quality audit — Finance master data
  5. Steering committee established; cadence agreed
════════════════════════════════════════════════════════════
```

### Change Communication Planning

```
/change type:"comms-plan"
> User: ERP migration — 6-month project. Key communications needed:
        Month 1: Announce the project to all staff.
        Month 3: Progress update and training schedule.
        Month 5: Go-live preparation comms.
        Go-live week: daily updates.
        Post go-live: support information.
        Audiences: all staff (80); finance team (25); IT team (8);
        leadership (5); suppliers (12 EDI partners).
```

Output: a complete stakeholder communication plan with message by audience, channel (all-staff email / team meeting / leadership briefing / supplier letter), timing, owner, and key messages for each communication milestone. Including: what to say, what NOT to say, and how to handle resistance.

---

## Part Four: Compliance Tracking — Knowing What You Owe

### The Compliance Visibility Problem

Every organisation operates under a set of compliance obligations. Some are regulatory (data protection, financial reporting, health and safety, sector-specific regulations). Some are contractual (customer obligations, vendor obligations, insurance conditions). Some are internal (policies, board resolutions, governance commitments).

The problem is not that organisations don't know their obligations exist. The problem is that nobody has a complete, current, verified view of:
- Every obligation, who owns it, and how it is met
- Which controls are currently effective and which have drifted
- What evidence exists to demonstrate compliance
- When obligations were last assessed and by whom
- What the consequence of non-compliance is

Compliance drift happens silently: a regulation changes, the control that addressed the old version is not updated. An employee leaves, taking the knowledge of how a control works. A system changes, removing a control that was embedded in the old system's workflow. None of this appears on a report. The organisation believes it is compliant because it was compliant at the last audit.

### The `/compliance` Workflow

```
/compliance type:"obligation-map"
> User: Map our compliance obligations for a UK financial services firm.
        Regulated by: FCA (investment management). Size: 150 employees.
        Also subject to: UK GDPR, Companies Act, AML regulations,
        Market Abuse Regulation, MiFID II reporting requirements.
        ISO 27001 certified. Client contracts: SLA and data handling.
```

**Sample Compliance Obligation Map:**

```
COMPLIANCE OBLIGATION MAP
Organisation: [Firm name] | Jurisdiction: UK | Date: [Date]
════════════════════════════════════════════════════════════

── REGULATORY OBLIGATIONS ──────────────────────────────────

FRAMEWORK: FCA — Investment Management (COLL, COBS, SYSC)
  OBL-REG-001: Conduct of Business (COBS) — treating customers fairly
    Owner:     Chief Compliance Officer
    Control:   Client suitability process; complaint management
    Evidence:  Complaint log; suitability assessments; training records
    Status:    🟢 CURRENT — last reviewed [date]
    Next review: [date]

  OBL-REG-002: Senior Manager Regime (SM&CR)
    Owner:     CEO / Board
    Control:   Approved persons register; responsibilities map; certification
    Evidence:  FCA register; annual certification records; conduct records
    Status:    🟡 REVIEW NEEDED — certification cycle due [date]
    Action:    Initiate annual certification process by [date]

  OBL-REG-003: MiFID II Transaction Reporting
    Owner:     Head of Operations
    Control:   Automated trade reporting via [ARM provider]
    Evidence:  ARM submission records; reconciliation reports
    Status:    🟢 CURRENT
    Note:      UK MiFID post-Brexit — confirm still aligned with current FCA rules

FRAMEWORK: UK GDPR (Data Protection Act 2018)
  OBL-DPR-001: Lawful basis for processing personal data
    Owner:     Data Protection Officer
    Control:   Privacy notices; consent management; legitimate interests assessments
    Evidence:  Privacy policy; ROPA; LIA documentation
    Status:    🟢 CURRENT
    Note:      ICO guidance updated [date] — confirm ROPA reflects current processing

  OBL-DPR-002: Data Subject Rights (access, erasure, portability)
    Owner:     DPO + Operations
    Control:   DSR procedure; response tracking; 30-day deadline management
    Evidence:  DSR log; response records
    Status:    🟡 PARTIAL — DSR log shows 2 responses exceeded 30-day deadline in [quarter]
    Action:    Review DSR process; add calendar alerts for approaching deadlines

  OBL-DPR-003: Data Breach Reporting (72-hour ICO notification)
    Owner:     DPO
    Control:   Breach detection; reporting procedure; staff training
    Evidence:  Breach log; ICO correspondence; training records
    Status:    🟢 CURRENT
    Note:      Last breach simulation test: [date] — due annually

FRAMEWORK: Anti-Money Laundering (MLR 2017)
  OBL-AML-001: Customer Due Diligence (CDD)
    Owner:     MLRO
    Control:   Onboarding KYC process; ongoing monitoring; PEP/sanctions screening
    Evidence:  CDD records; screening provider logs; annual review records
    Status:    🔴 GAP IDENTIFIED — PEP screening provider contract expired [date];
               screening currently manual — HIGH RISK
    Action:    URGENT — renew screening provider or implement alternative by [date]

── CONTRACTUAL OBLIGATIONS ─────────────────────────────────

FRAMEWORK: Client SLAs
  OBL-CTR-001: Service availability — 99.5% uptime
    Owner:     Head of Technology
    Control:   Infrastructure monitoring; incident response; reporting
    Evidence:  Monthly uptime reports; incident logs
    Status:    🟢 CURRENT — 99.8% average last quarter

  OBL-CTR-002: Incident notification — <4hr P1 notification to clients
    Owner:     Operations
    Control:   Incident response procedure; client notification list
    Evidence:  Incident log; notification timestamps
    Status:    🟡 PARTIAL — 1 incident last quarter: 6hr notification (breach)
    Action:    Review incident notification procedure; add automated alert trigger

── STANDARDS OBLIGATIONS ───────────────────────────────────

FRAMEWORK: ISO 27001 (Information Security)
  OBL-ISO-001: Annual surveillance audit (BSI)
    Owner:     CISO
    Status:    🟢 CURRENT — last audit [date]; next audit [date]

  OBL-ISO-002: Risk assessment — annual review
    Owner:     CISO
    Status:    🟢 CURRENT — completed [date]

  OBL-ISO-003: Incident management — all security incidents logged
    Owner:     CISO
    Status:    🟢 CURRENT

── COMPLIANCE DASHBOARD ────────────────────────────────────
  Total obligations tracked:  31
  🟢 CURRENT:                 24 (77%)
  🟡 REVIEW NEEDED / PARTIAL: 6 (19%)
  🔴 GAP / URGENT:            1 (3%)

  PRIORITY ACTIONS:
  1. 🔴 URGENT: AML PEP screening — renew provider by [date]
  2. 🟡 HIGH:   SM&CR certification — initiate process by [date]
  3. 🟡 MEDIUM: DSR procedure — add deadline alerts
  4. 🟡 MEDIUM: Client incident notification — review and automate
════════════════════════════════════════════════════════════
```

### Audit Preparation

```
/audit type:"preparation-pack"
> User: Preparing for our annual FCA supervisory visit. Areas they
        have indicated they will review: client suitability; complaint
        handling; SM&CR governance. Visit date: [Date]. Time to prepare: 6 weeks.
```

Output: a structured audit preparation plan with: evidence inventory (what documents you need and where they are), gap assessment (what evidence is missing or needs updating), mock review questions (what the regulator will likely ask), and a six-week preparation timeline with owners.

---

## Part Five: Operational Risk — The Register That Works

### Why Risk Registers Fail

Most organisations have a risk register. Most risk registers are not useful. They were created for an audit, filed in a folder, and updated annually by the same person who created them — who has not changed their assessment because nothing has prompted them to. The register does not reflect the organisation's actual risk profile. It reflects what someone thought the risk profile was at the time they created it.

A useful risk register is a live document that:
- Is owned by the people closest to each risk (not centrally maintained by one person)
- Is updated when circumstances change, not on an annual calendar
- Connects each risk to a specific control and a specific evidence of that control's effectiveness
- Has a clear escalation path when a risk exceeds the defined threshold
- Drives decisions, not documents compliance

### The `/risk` Workflow

```
/risk type:"register-build"
> User: Build a risk register for our operations function. Key areas:
        vendor dependencies (3 single-source critical vendors),
        process reliance on 2 key staff (institutional knowledge risk),
        ERP migration (underway), regulatory compliance (FCA),
        data security, business continuity.
        Risk appetite: medium. We can tolerate disruption for 4 hours;
        cannot tolerate regulatory breach; can tolerate cost overruns <10%.
```

**Sample Risk Register Output:**

```
OPERATIONAL RISK REGISTER
Organisation: [Name] | Function: Operations | Date: [Date]
Risk appetite: MEDIUM | Review cycle: Quarterly
════════════════════════════════════════════════════════════
RISK SCORING METHODOLOGY:
  Likelihood: 1 (Rare) → 5 (Almost certain)
  Impact:     1 (Negligible) → 5 (Critical)
  Inherent risk score = L × I
  Residual risk = score after controls applied

RISK REGISTER:

─── RISK OPS-001: Single-Source Vendor Failure ──────────────
  Description:  3 critical vendors are sole-source with no pre-approved
                alternative. Failure of any one would halt operations.
  Vendor A:     [Name] — provides [service] — no alternative contracted
  Vendor B:     [Name] — provides [service] — no alternative contracted
  Vendor C:     [Name] — provides [service] — no alternative contracted

  Inherent risk:  Likelihood 3 × Impact 5 = 15 (HIGH)
  Controls:       SLA in contract; regular performance reviews; annual BCP test
  Residual risk:  Likelihood 2 × Impact 5 = 10 (MEDIUM-HIGH)
  Risk owner:     Head of Operations
  Threshold:      Any vendor P1 incident >4hr → escalate to COO
  Mitigation:     Identify and pre-qualify backup vendors for each;
                  target residual risk reduction to ≤8 by Q2

─── RISK OPS-002: Key Person Dependency ────────────────────
  Description:  2 staff members hold critical operational process knowledge
                not documented elsewhere. Departure would cause operational
                disruption of estimated 4–12 weeks.
  Named roles:  [Role 1] — owns [process area]; [Role 2] — owns [process area]

  Inherent risk:  Likelihood 3 × Impact 4 = 12 (HIGH)
  Controls:       Verbal process knowledge; informal cross-training
  Residual risk:  Likelihood 3 × Impact 4 = 12 (HIGH — controls are WEAK)
  Risk owner:     COO
  Threshold:      If either employee gives notice → immediate escalation
  Mitigation:     Knowledge capture programme (load knowledge.md from Ch. 26);
                  cross-training schedule; SOP documentation for both roles
                  Target: residual risk ≤6 by Q3

─── RISK OPS-003: ERP Migration Failure ────────────────────
  Description:  Active ERP migration project. Go-live failure or extended
                disruption would halt finance operations for up to [N] days.

  Inherent risk:  Likelihood 3 × Impact 5 = 15 (HIGH)
  Controls:       Project governance; parallel run planned; rollback plan
  Residual risk:  Likelihood 2 × Impact 4 = 8 (MEDIUM)
  Risk owner:     Project Sponsor (CFO)
  Threshold:      Any go-live delay >4 weeks → COO and Board notification
  Mitigation:     Rollback plan confirmed; parallel run period extended to 4 weeks;
                  go-live date moved to avoid year-end (per Change Impact Assessment)

─── RISK OPS-004: FCA Regulatory Breach ────────────────────
  Description:  Non-compliance with FCA requirements resulting in
                enforcement action, fine, or licence condition.
  Specific gap:  AML PEP screening lapsed (OBL-AML-001 — URGENT)

  Inherent risk:  Likelihood 4 × Impact 5 = 20 (CRITICAL — given current gap)
  Controls:       Compliance framework; CCO oversight; annual audit; training
  Residual risk:  Likelihood 3 × Impact 5 = 15 (HIGH — until AML gap resolved)
  Risk owner:     CCO / MLRO
  Threshold:      Zero tolerance — any regulatory breach = immediate Board notification
  Mitigation:     AML PEP screening renewal — URGENT (see OBL-AML-001)
                  Target: residual risk ≤5 once screening reinstated

─── RISK OPS-005: Data Security Breach ─────────────────────
  Description:  Unauthorised access to client or employee personal data.
                ICO notification and FCA notification obligations apply.

  Inherent risk:  Likelihood 3 × Impact 5 = 15 (HIGH)
  Controls:       ISO 27001 controls; penetration testing; staff training;
                  MFA; endpoint protection; incident response plan
  Residual risk:  Likelihood 2 × Impact 4 = 8 (MEDIUM)
  Risk owner:     CISO
  Threshold:      Any confirmed breach → immediate notification to DPO, CCO,
                  and COO; ICO notification within 72 hours if personal data
  Mitigation:     Controls current; next pen test [date]

── RISK DASHBOARD ──────────────────────────────────────────
  Total risks tracked:  12 (5 shown above; remainder in full register)
  🔴 CRITICAL (>16):    1  — OPS-004 (AML gap — ACTION REQUIRED NOW)
  🔴 HIGH (11–16):      3
  🟡 MEDIUM (6–10):     5
  🟢 LOW (<6):          3

  IMMEDIATE ACTIONS:
  1. OPS-004: AML screening — resolve within 5 business days
  2. OPS-002: Key person — begin knowledge capture programme this month
  3. OPS-001: Backup vendors — identify and pre-qualify by Q2
════════════════════════════════════════════════════════════
```

---

## Part Six: Incident Management — Learning From Failure

### Why Incident Post-Mortems Fail

Most organisations have an incident process. When something goes wrong, it is logged, resolved, and closed. The learning step — the part where the organisation asks "how do we prevent this happening again?" — is optional in practice even when it is mandatory on paper.

The result: the same incident happens again. The same root cause is identified. The same corrective actions are agreed. And 6 months later the same thing happens a third time.

The `/incident` command structures the post-mortem and RCA process to produce corrective actions that are specific, owned, and tracked — not left in a report that nobody reads.

### The `/incident` Workflow

```
/incident type:"post-mortem"
> User: Incident: Payment processing system outage.
        Duration: 4hr 23min (09:15–13:38 on [Date])
        Impact: ~2,400 customer transactions declined; estimated £140,000
        in failed transactions; 847 customer complaints; social media
        coverage (trending for 2 hours).
        Root cause (initial): database failover did not trigger automatically
        due to a misconfigured health check threshold.
        What happened: Monitoring alert fired at 09:15; on-call engineer
        paged. Engineer followed runbook — runbook referenced old IP addresses
        from pre-migration environment. Manual failover took 3.5 hours due to
        runbook errors. Customer communication: first notification at 11:00
        (1hr 45min after outage began).
```

**Sample Incident Post-Mortem:**

```
INCIDENT POST-MORTEM REPORT
Incident ID:   INC-2026-047
Type:          P1 — System Outage (Payment Processing)
Date:          [Date] | Duration: 4hr 23min | Status: CLOSED
Lead:          [Name, Head of Operations]
════════════════════════════════════════════════════════════
INCIDENT SUMMARY
Payment processing system was unavailable for 4 hours 23 minutes on
[Date]. Approximately 2,400 transactions were declined during the
outage. Customer impact was significant: 847 complaints received,
social media coverage for 2 hours. Estimated revenue impact: £140,000
in failed transactions.

TIMELINE
  09:15: Monitoring alert fires — payment processing latency spike
  09:18: On-call engineer paged; incident declared P1
  09:25: Engineer begins runbook — discovers IP addresses are outdated
         (pre-migration environment referenced)
  09:25–12:45: Engineer attempts manual failover; runbook errors cause
               repeated failures; escalation to DBA team at 10:30
  11:00: First customer communication sent (1hr 45min after outage)
  12:45: DBA team identifies correct failover procedure
  13:38: System restored; payment processing resumed
  14:15: All-clear communication to customers

ROOT CAUSE ANALYSIS

  Immediate cause:   Database failover did not trigger automatically
  Root cause 1:      Health check threshold misconfigured post-migration
                     (threshold set at 95% latency; should be 80%)
  Root cause 2:      Runbook not updated after cloud migration 4 months ago;
                     IP addresses and procedures referenced old environment
  Root cause 3:      No post-migration runbook validation performed;
                     runbook changes not part of migration acceptance criteria

CONTRIBUTING FACTORS:
  CF-1: Single on-call engineer for P1 response (no immediate backup)
  CF-2: Customer communication procedure requires manager approval;
        manager unreachable for 45 minutes (in flight) — caused delay
  CF-3: Monitoring alert threshold too high; warning signs visible 23 minutes
        before outage (not actioned)

WHAT WENT WELL:
  ✅ P1 paging worked correctly; engineer responded within 3 minutes
  ✅ DBA escalation resolved the technical issue effectively
  ✅ Customer communication once sent was clear and accurate
  ✅ All customer complaints received a personal response within 4 hours

CORRECTIVE ACTIONS

  CA-001: Fix health check threshold
    Action: Update database health check threshold to 80% latency
    Owner:  [DBA Lead] | Due: [Date + 3 days] | Priority: P1
    Done:   [checkbox — verify and close]

  CA-002: Runbook review and update
    Action: Full review of all operational runbooks; validate all IP addresses,
            endpoints, and procedures against current environment
    Owner:  [Head of Operations] | Due: [Date + 2 weeks] | Priority: P1
    Method: Each runbook author tests procedure in staging; signs off accuracy

  CA-003: Post-change runbook validation process
    Action: Add runbook validation to change management acceptance criteria.
            No infrastructure change closes without confirming runbook accuracy.
    Owner:  [Change Manager] | Due: [Date + 1 month] | Priority: P2
    Method: Checklist item in /change process; Change Approval Board to enforce

  CA-004: Customer communication escalation path
    Action: Define a backup approver for customer communications so P1 outage
            comms are never delayed by single approver unavailability
    Owner:  [Head of Comms] | Due: [Date + 2 weeks] | Priority: P2

  CA-005: P1 on-call escalation procedure
    Action: Define 2-person on-call rotation for P1 incidents; primary +
            secondary; both paged simultaneously for P1
    Owner:  [IT Director] | Due: [Date + 3 weeks] | Priority: P2

  CA-006: Monitoring threshold review
    Action: Review all monitoring alert thresholds; identify and fix any
            set above the point of early warning value
    Owner:  [SRE Lead] | Due: [Date + 1 month] | Priority: P2

LESSONS LEARNED (for organisation-wide sharing):
  L-1: Infrastructure changes must include runbook update and validation
       as a mandatory acceptance criterion — not optional housekeeping
  L-2: Customer communication must not depend on a single approver;
       P1 protocols need built-in escalation paths for approver unavailability
  L-3: Monitoring is only useful if alert thresholds are set at the point
       where action is still preventive — not after failure has occurred

FOLLOW-UP:
  CA review meeting: [Date + 1 month] — all owners confirm completion
  Post-mortem distributed to: Leadership team; IT; Operations; Comms
════════════════════════════════════════════════════════════
```

---

## Part Seven: The Operations Agents

### Four Core Operations Agents

---

#### Agent 1: The Vendor Watchdog Agent

**Purpose:** Monitor the vendor portfolio continuously. Alert when contracts are approaching renewal, when SLA thresholds are breached, when vendor spend exceeds approved budgets, and when new vendor commitments are made outside the approved procurement process.

**Weekly tasks:**
- Pull renewal calendar: flag any contract renewing within 90 days
- Pull SLA data (via MCP integration with monitoring tools): identify any vendor below committed SLA threshold
- Pull invoice data (via MCP integration with finance system): identify any vendor invoice above contracted amount
- Compare to approved vendor list: flag any new vendor payment not on the approved list

**Alert triggers:**
- Contract renewal <90 days: alert to contract owner and procurement
- SLA breach: alert to vendor relationship owner with scorecard
- Invoice >contracted amount: alert to finance and procurement
- New vendor not on approved list: alert to procurement and CFO

**Monthly report to COO:**
- Full vendor portfolio snapshot (spend, performance, renewal status)
- Rationalisation opportunities identified
- SLA breach summary
- Budget vs. actual spend by vendor category

---

#### Agent 2: The Process Health Agent

**Purpose:** Monitor the currency and completeness of the process documentation library. Identify SOPs that are overdue for review, flag when a system or regulatory change should trigger a process review, and track whether SOPs have named owners.

**Monthly tasks:**
- Review all SOP review dates against the review cycle in ops.local.md
- Flag any SOP >30 days past its review date
- Cross-reference change log with SOP library: any change that should
  have triggered a process update but didn't
- Check for SOPs without named owners (orphan processes)

**Trigger-based:**
- System change approved in change log → identify affected SOPs → alert owners
- Regulatory change detected (via compliance obligation map) → identify affected SOPs
- Employee departure (via HRIS integration) → identify SOPs they owned → flag for handover

**Monthly report to COO:**
- SOP library health: current / overdue / orphaned
- Change-triggered reviews pending
- Regulatory-triggered reviews pending
- Recommended prioritisation for overdue reviews

---

#### Agent 3: The Compliance Monitor

**Purpose:** Track all compliance obligations continuously. Alert when obligations are approaching review dates, when evidence gaps are identified, when controls are reported as ineffective, and when regulatory changes may affect existing obligations.

**Weekly tasks:**
- Review compliance obligation map: obligations due for review in next 30 days
- Check evidence currency: any obligation where evidence is >12 months old
  without a confirmed review
- Monitor for regulatory updates (web search — jurisdiction-specific)

**Alert triggers:**
- Obligation review due <30 days: alert to obligation owner
- Evidence gap (no evidence on record): alert to obligation owner + CCO
- Control reported as ineffective: immediate alert to CCO + COO
- Regulatory change detected that may affect obligations: briefing to CCO for review

**Quarterly report to Board/Audit Committee:**
- Full compliance dashboard (obligations: current / partial / gap)
- Actions taken since last report
- Upcoming obligations and review schedule
- Regulatory change summary and impact assessment

---

#### Agent 4: The Change Tracker

**Purpose:** Monitor all open change requests. Ensure changes proceed through the approval process, that impact assessments are completed before changes go live, that rollback plans exist for all high-risk changes, and that post-implementation reviews are completed.

**Weekly tasks:**
- Pull open change requests from change log
- Flag any change that has been approved but not implemented (stale approvals)
- Flag any high-risk change without a rollback plan
- Flag any change past its planned implementation date
- Confirm post-implementation reviews completed for recently closed changes

**Alert triggers:**
- High-risk change approved without completed impact assessment: block + alert
- Change past planned implementation by >2 weeks: alert to change owner + COO
- Post-implementation review overdue by >2 weeks: alert to change owner
- Emergency change raised: immediate notification to COO and Change Authority

**Monthly report to COO:**
- Change pipeline summary (open / approved / in progress / completed)
- High-risk changes and their current status
- Post-implementation review completion rate
- Change failure rate (changes requiring rollback or causing incidents)

---

## Exercises

Each exercise produces a deployable operational output. Complete them in sequence — each builds the operational intelligence layer that subsequent exercises use.

---

### Exercise 1: Vendor Portfolio Audit and Rationalisation Sprint

**Type:** Vendor Management
**Time:** 60 minutes
**Plugin commands:** `/vendor`, `/contract`
**Goal:** Complete a vendor portfolio audit and identify a minimum of 10% savings opportunity

**Step 1 — Build your vendor inventory.**

List every vendor your organisation pays. For each:
- Vendor name
- What they provide (one sentence)
- Annual cost (or monthly × 12)
- Contract end date (or "rolling" / "unknown")
- Named owner in your organisation (who manages this relationship?)
- Usage level: Active (used daily/weekly) / Partial (used occasionally) / Unknown

If you do not have this data: spend 20 minutes gathering it from finance/accounts payable. If you cannot get complete data, note the gaps explicitly — gaps are as important as the data.

**Step 2 — Run the portfolio audit.**

```
/vendor type:"portfolio-audit"
> User: [Paste your vendor inventory]
        Risk appetite for vendor rationalisation: [Conservative / Moderate / Aggressive]
        Annual spend target reduction goal: [10% / 15% / other]
```

**Step 3 — Renewal pipeline analysis.**

Identify every contract renewing in the next 90 days:

```
/vendor type:"renewal-strategy"
> User: Renewals in next 90 days: [List from your audit]
        For each: current pricing; our usage level; market alternatives;
        our leverage (are we locked in? are we a reference customer?)
```

For each renewal, the output should recommend: auto-renew / renegotiate / cancel / consolidate.

**Step 4 — Overlap and rationalisation analysis.**

```
/vendor type:"rationalisation"
> User: Potential overlapping categories from my audit:
        [List categories with multiple vendors]
        Constraints: [Any vendors that cannot be changed — contractual lock-in]
```

**Step 5 — Contract obligation extraction for top 3 vendors.**

For your three highest-value vendor contracts:

```
/contract type:"obligation-extract"
> User: [Paste or describe the contract]
        Specific: extract all SLAs, notice periods, auto-renewal clauses,
        and any terms that favour the vendor in a dispute
```

Review the output: are there auto-renewal clauses you did not know about? Notice periods shorter than you assumed? Price escalation clauses?

**Deliverable:** Vendor portfolio audit report (spend by category, renewal calendar, rationalisation opportunities, estimated savings), renewal strategy for next 90-day renewals, and contract obligation summary for top 3 vendors.

---

### Exercise 2: SOP Writing Sprint

**Type:** Process Documentation
**Time:** 75 minutes
**Plugin commands:** `/sop`, `/process`
**Goal:** Write two SOPs — one from scratch, one from an existing but outdated document

**Step 1 — Choose your two processes.**

Select:
- Process A: A critical process in your organisation that is undocumented or poorly documented. Choose the process where the absence of a good SOP has caused problems (errors, key-person dependency, new employee confusion).
- Process B: A process that has an existing document but is known to be outdated.

If you don't have real processes: use these:
- Process A: New client onboarding for a professional services firm (5 steps from signed contract to first deliverable)
- Process B: Monthly financial close — existing document, but the ERP changed 18 months ago and two steps are wrong

**Step 2 — Gather process information (Process A).**

Before writing, document what you know:
- What triggers this process? (What event causes it to start?)
- What are the inputs? (What information/documents/approvals are needed?)
- Who does each step? (Specific roles, not "the team")
- What are the key decisions and decision criteria?
- What are the key controls? (What prevents errors?)
- What are the known failure points? (Where does it most often go wrong?)
- What does success look like? (How do you know the process is complete?)

**Step 3 — Generate SOP A.**

```
/sop
> User: Process: [Name]
        Trigger: [What starts it]
        Frequency: [How often it runs]
        Roles: [Who is involved — specific role titles]
        Inputs required: [List]
        Steps: [Your best description of each step]
        Controls: [What prevents errors at each step]
        Failure points: [Where it most often goes wrong]
        System(s) used: [List any systems]
```

**Step 4 — Engineer review test.**

Show the SOP to someone who is NOT currently familiar with this process (a colleague from a different team). Ask:
- "Could you follow this procedure without asking anyone for help?"
- "What is ambiguous or unclear?"
- "What would you do if [one specific failure scenario]?"

Identify the top 3 gaps and revise.

**Step 5 — Generate SOP B (update from existing).**

```
/sop type:"update-existing"
> User: Existing SOP: [Paste or describe current document]
        What has changed since it was written: [List specific changes]
        Current version: [N] | New version should be: [N+1]
        What remains accurate: [List]
```

Review: does the output produce a clean tracked-changes view of what changed? Is the Document Control section updated correctly?

**Step 6 — Gap analysis on a process set.**

```
/process type:"gap-analysis"
> User: Process area: [e.g. Order-to-Cash / Procure-to-Pay / Hire-to-Retire]
        Known issues: [List specific problems — delays, errors, complaints]
        Current documentation: [Describe what exists and how current it is]
```

Review the gap analysis: do the root causes identified match what you know from experience?

**Deliverable:** Two complete SOPs (one new, one updated), engineer review test results with revisions, and a process gap analysis for one process area.

---

### Exercise 3: Change Request and Impact Assessment

**Type:** Change Management
**Time:** 60 minutes
**Plugin commands:** `/change`
**Goal:** Complete a formal change request and impact assessment for a real or realistic proposed change

**Step 1 — Identify your change.**

Choose a change that is being considered, recently implemented, or hypothetical:
- A system upgrade or migration
- A process redesign
- A structural or team change
- A regulatory-driven change
- A new tool or technology introduction

If fictional: use "Migrating from on-premise file storage to cloud (Microsoft SharePoint) for a 100-person professional services firm."

**Step 2 — Define the change.**

Before running the assessment, document:
- What exactly is changing?
- Why is this change being made? (Problem being solved or opportunity being pursued)
- What is the proposed timeline?
- Who is sponsoring this change? Who will be affected?
- What systems, processes, and teams are connected to what is changing?

**Step 3 — Impact assessment.**

```
/change type:"impact-assessment"
> User: Change: [Name and description]
        Scope: [Who and what is affected]
        Timeline: [Proposed dates]
        Connected systems: [List]
        Connected processes: [List — be specific]
        Teams affected: [List with rough headcount]
        Risk level (your assessment): [Low / Medium / High / Critical]
```

Review the output:
- Are there impacts you had not considered?
- Is the risk classification appropriate?
- Are the integration risks complete?
- Is the rollback plan realistic?

**Step 4 — Communication plan.**

```
/change type:"comms-plan"
> User: Change: [From Step 2]
        Audiences: [List — internal teams; any external stakeholders]
        Timeline: [Key milestones from impact assessment]
        Key concerns from impact assessment: [Top 3 risks to communicate about]
        Tone: [Reassuring and informative / Urgent / Routine announcement]
```

**Step 5 — Rollback plan.**

```
/change type:"rollback-plan"
> User: Change: [Name]
        Go-live date: [Date]
        Define "critical failure": [What outcomes would trigger rollback]
        Rollback decision authority: [Who can authorise rollback]
        Rollback window: [How long after go-live can rollback occur]
        Rollback method: [Technical steps to revert]
        Rollback impact: [What happens to data/processes during rollback]
```

**Step 6 — Post-implementation review template.**

```
/change type:"post-implementation-review"
> User: Change: [Name]
        Review date: [4 weeks post-go-live]
        Questions to answer: Did the change achieve its objective?
        Were there unexpected impacts? Were the impact assessment risks accurate?
        What would we do differently?
```

**Deliverable:** Complete change request package — impact assessment, stakeholder communication plan, rollback plan, and post-implementation review template — ready for Change Approval Board submission.

---

### Exercise 4: Compliance Gap Analysis

**Type:** Compliance
**Time:** 90 minutes
**Plugin commands:** `/compliance`, `/audit`
**Goal:** Map compliance obligations for a real or realistic regulatory framework and identify gaps

**Step 1 — Choose your framework.**

Select a regulatory or standards framework relevant to your organisation:
- UK GDPR / Data Protection Act 2018
- ISO 27001 (Information Security)
- PCI DSS (Payment Card Industry — if you handle card data)
- ISO 9001 (Quality Management)
- FCA Consumer Duty (if financial services)
- Pakistan SECP requirements (if operating in Pakistan)
- Your own sector's primary regulatory framework

If uncertain: use UK GDPR — it applies to most organisations handling personal data.

**Step 2 — List your obligations.**

For your chosen framework, list every obligation you are aware of. Do not rely on the agent to generate the obligation list — you should know your own obligations. The agent will help you assess them.

For each obligation:
- Description (what you must do)
- Owner (who is responsible)
- Control (how you currently meet it)
- Evidence (what demonstrates you meet it)
- Status (your honest assessment: current / partial / gap)

**Step 3 — Map and assess.**

```
/compliance type:"obligation-map"
> User: Framework: [Name]
        Organisation context: [Size, sector, jurisdiction, key activities]
        Obligations I've identified: [Your list from Step 2]
        Known gaps: [Your honest assessment of where you are weak]
```

Review: has the agent identified any obligations you missed? Any gaps you underestimated?

**Step 4 — Prioritise remediation.**

```
/compliance type:"remediation-plan"
> User: Gaps identified: [From the obligation map]
        Resources available: [People; budget estimate; timeline]
        Regulatory timeline: [Any upcoming audit or assessment date]
        Priority criteria: [Regulatory consequence / business risk / effort]
```

**Step 5 — Evidence inventory.**

For each obligation rated CURRENT:

```
/compliance type:"evidence-inventory"
> User: Obligation: [Name]
        Control: [How we meet it]
        Evidence we have: [What documents/records exist]
        Evidence location: [Where it is stored]
        Evidence age: [When it was last updated]
```

Assess: is the evidence sufficient? Current? Accessible for audit?

**Step 6 — Audit preparation exercise.**

Simulate being audited on your highest-risk obligation:

```
/audit type:"mock-review"
> User: Obligation: [Your highest-risk item]
        Simulated auditor: [Regulatory body or auditor name]
        Questions they would ask: [Your assessment of likely questions]
        Evidence we would present: [What we have]
```

Identify the gaps between what you would present and what a rigorous auditor would expect.

**Deliverable:** Compliance obligation map with assessment (current / partial / gap), prioritised remediation plan, evidence inventory for key obligations, and mock audit findings with improvement actions.

---

### Exercise 5: Operational Risk Register Build

**Type:** Risk Management
**Time:** 75 minutes
**Plugin commands:** `/risk`
**Goal:** Build a working risk register for your operations function using a consistent methodology

**Step 1 — Define your risk appetite.**

Before building the register, your organisation needs an explicit risk appetite statement. Answer:
- What level of operational disruption can we tolerate? (Hours? Days?)
- What types of risk are we most concerned about? (Financial? Reputational? Regulatory?)
- What is our risk tolerance for compliance breaches? (Zero tolerance / Low)
- What is the maximum financial impact we could absorb from a single operational failure?

This becomes the risk appetite statement in ops.local.md.

**Step 2 — Brainstorm risks by category.**

For each operational category, identify risks:
- Vendor/supplier risks
- Process risks (key-person dependency; process failure; control gap)
- Technology risks (system failure; cyber; data loss)
- Compliance/regulatory risks
- Business continuity risks (pandemic; disaster; major disruption)
- People risks (skills shortage; attrition; fraud)

Aim for 15–20 risks. Resist the temptation to add only the ones you are comfortable discussing.

**Step 3 — Score inherent risks.**

For each risk (before controls):
- Likelihood (1 Rare → 5 Almost certain): what is the probability in the next 12 months?
- Impact (1 Negligible → 5 Critical): what is the consequence if it occurs?
- Inherent risk score = L × I

**Step 4 — Build the register.**

```
/risk type:"register-build"
> User: Risk appetite: [From Step 1]
        Risks identified: [Your list from Step 2 with inherent scores]
        Existing controls for each: [What you currently do to mitigate]
        Risk owners: [Who is responsible for each]
```

**Step 5 — Residual risk assessment.**

For each risk, after reviewing the controls:
- Are the controls effective? (Based on evidence — not assumption)
- What is the residual risk score after controls?
- Is the residual risk within appetite?

Flag all risks where residual risk exceeds appetite — these require a mitigation plan.

**Step 6 — Mitigation plans for top 3 risks.**

For your three highest residual risks:

```
/risk type:"mitigation-plan"
> User: Risk: [Name and description]
        Current residual score: [Score]
        Target residual score: [What is acceptable per appetite]
        Constraints: [Budget, time, capability]
        Owner: [Named person]
```

**Step 7 — Risk escalation matrix.**

Define explicit triggers for when each risk should be escalated:

```
/risk type:"escalation-matrix"
> User: Risk register: [Your register]
        Escalation levels: Operations Manager → COO → Board
        Define: what threshold triggers each escalation level for each risk
```

**Deliverable:** Operational risk register (15+ risks with inherent and residual scores), risk appetite statement, mitigation plans for top 3 risks, and escalation matrix.

---

### Exercise 6: Incident Post-Mortem and Root Cause Analysis

**Type:** Incident Management
**Time:** 60 minutes
**Plugin commands:** `/incident`
**Goal:** Conduct a structured post-mortem for a real or realistic incident and produce corrective actions that are specific, owned, and tracked

**Step 1 — Choose your incident.**

Select:
- A real incident from your organisation's history (anonymised if needed)
- A recent near-miss that could have been an incident
- A fictional scenario: "Payroll system failed on pay day. 340 employees were not paid on time. Resolution took 6 hours."

**Step 2 — Timeline reconstruction.**

Before running the post-mortem, reconstruct the incident timeline:
- T=0: When did the incident begin? (Or when was it detected? — note if these differ)
- Each significant event: detection, escalation, action, resolution
- When was the customer / user impact first felt?
- When was the first communication sent?
- When was the incident resolved?

**Step 3 — Run the post-mortem.**

```
/incident type:"post-mortem"
> User: Incident: [Name]
        Type: [P1 / P2 / other]
        Duration: [Start to resolution]
        Impact: [Users, transactions, revenue, reputational]
        Timeline: [Your reconstruction]
        Initial root cause (if known): [Your best guess]
        What went well: [Honest assessment]
        What went poorly: [Honest assessment]
```

**Step 4 — Five Whys root cause drill.**

For the primary root cause identified:

```
/incident type:"five-whys"
> User: Stated root cause: [From Step 3]
        Why did this happen? [Your answer to first Why]
        [Continue with as much context as you have]
```

The Five Whys technique: ask "why?" five times. Each answer becomes the next "why?" question. The goal is to reach the systemic root cause (usually a process, control, or governance gap) rather than stopping at the proximate cause (the thing that broke).

**Step 5 — Corrective action quality check.**

Review the corrective actions in your post-mortem output. For each:
- Is it specific? (Can you tell when it is "done"?)
- Does it address the root cause? (Or just the symptom?)
- Does it have a named owner? (Not "the team" — one person)
- Does it have a realistic due date?
- Will you know if it is actually implemented?

Revise any corrective action that fails this test.

**Step 6 — Lessons learned communication.**

```
/incident type:"lessons-learned-brief"
> User: Incident: [Name]
        Audience: [Operations team / All staff / Leadership]
        Lessons: [From your post-mortem]
        Tone: Learning-focused; non-blaming; specific enough to be useful
```

**Deliverable:** Complete post-mortem report with timeline, root cause analysis (Five Whys), corrective actions (specific, owned, time-bound), and lessons-learned brief for wider distribution.

---

### Exercise 7: Operational Metrics Dashboard Design

**Type:** Metrics and Reporting
**Time:** 60 minutes
**Plugin commands:** `/metrics`
**Goal:** Design an operational metrics framework that makes performance visible without creating reporting overhead

**Step 1 — Define what you need to know.**

For your operations function, answer:
- What are the 5 most important things to know about how operations is performing?
- What would tell you that something is going wrong before it becomes a crisis?
- What do your senior stakeholders (COO, board) ask you every month?
- What do you currently measure that nobody uses?

**Step 2 — Metrics design.**

```
/metrics type:"framework-design"
> User: Function: Operations
        Key outcomes we need to deliver: [List — e.g. vendor performance,
        process reliability, compliance, cost efficiency]
        Stakeholder questions to answer: [List from Step 1]
        Data we currently have: [List available data sources]
        Data we don't have: [List gaps]
        Reporting frequency: [Weekly / Monthly / Quarterly]
```

**Step 3 — Define each metric precisely.**

For each metric in your framework:
- Name (short, descriptive)
- Definition (precisely how it is calculated — so two people get the same number)
- Data source (where the number comes from)
- Owner (who is responsible for producing and improving it)
- Target (what "good" looks like)
- Red threshold (what triggers an escalation)
- Reporting frequency

**Step 4 — Operational dashboard structure.**

```
/metrics type:"dashboard-design"
> User: Metrics: [From Step 3]
        Audience: [COO / Board / Operations team]
        Format: [One page / slide / dashboard tool name]
        Traffic light approach: [Green / Amber / Red thresholds for each]
```

**Step 5 — Leading vs. lagging indicators.**

Review your metrics set:
- Which are lagging indicators? (They tell you what happened)
- Which are leading indicators? (They tell you what is about to happen)
- Is there at least one leading indicator for each major risk area?

Leading indicators are harder to define but more valuable: they let you act before the problem occurs. For example: "number of vendor SLA warnings issued" is a leading indicator that predicts vendor SLA breaches.

**Step 6 — Reporting template.**

```
/metrics type:"monthly-report-template"
> User: Metrics: [From Step 3]
        Audience: COO and senior leadership
        Format: One-page operational report
        Include: RAG status; trend (improving/stable/declining); action required
```

**Deliverable:** Operational metrics framework (5–10 metrics with full definition, owner, target, and threshold), dashboard design, leading/lagging indicator analysis, and one-page monthly reporting template.

---

### Exercise 8: Configure ops.local.md

**Type:** Configuration
**Time:** 90 minutes
**Goal:** Build the organisation-specific configuration that makes all Operations outputs specific to your organisation's vendors, regulatory environment, risk appetite, and processes

This is the highest-leverage operations exercise. Every command output is substantially more useful when this file is complete and current.

Work through the configuration template (provided in the Chapter 27 SKILL.md library) and populate:

**Section 1: Organisation Context**
- Company name, size, sector
- Regulatory frameworks applicable
- Key jurisdictions of operation

**Section 2: Vendor Portfolio**
- Full vendor inventory (or reference to where it is maintained)
- Vendor categories with spend bands
- Critical/sole-source vendor list
- Preferred suppliers by category
- Procurement approval thresholds

**Section 3: Compliance Obligations**
- All regulatory frameworks with obligation count
- Named obligation owners
- Evidence repository location
- Audit schedule

**Section 4: Risk Configuration**
- Risk appetite statement
- Risk scoring methodology (likelihood × impact matrix)
- Escalation thresholds
- Risk register location and review cycle

**Section 5: Change Management Process**
- Change classification criteria
- Change approval authority matrix (who can approve what)
- Change freeze periods (blackout dates)
- Post-implementation review requirements

**Section 6: Process Library**
- Critical process inventory with SOP reference
- SOP review cycle by process tier
- Process ownership by function

**Section 7: Operational Metrics**
- KPI framework with targets and thresholds
- Reporting cycle and audiences
- Dashboard tool / report location

**Test:** Run `/vendor` with your top 5 vendors and `/compliance` with your primary regulatory framework. Does the output reference your actual configuration — your thresholds, your approval authorities, your regulatory obligations? If not: what section needs more detail?

**Deliverable:** Complete `ops.local.md` configuration file, validated by running `/vendor`, `/compliance`, and `/risk` commands and confirming outputs are organisation-specific rather than generic best practice.

---

## Chapter Summary: Operations as Operational Intelligence

**The Central Insight**

Operations is not primarily an administrative function. It is an intelligence function — its job is to make the invisible visible. Vendor spend that nobody has totalled. Process steps that nobody has documented. Compliance obligations that nobody has mapped. Risks that nobody has quantified.

When the invisible becomes visible, decisions improve. The CFO who knows the full vendor portfolio finds the 10% savings. The COO who knows the process gaps fixes them before they cause failures. The Compliance Officer who knows every obligation makes sure every one is met. The Change Manager who maps every impact prevents the downstream failure that nobody anticipated.

The Operations Plugin and the four operations agents do not run the organisation. They make the organisation visible to the people who run it.

**What this chapter built:**

1. Vendor portfolio audit — complete view of spend, performance, renewals, and rationalisation opportunity
2. SLA tracking and vendor scorecards — objective performance assessment with renewal strategy
3. Contract obligation extraction — every SLA, deadline, and auto-renewal clause made explicit
4. Process documentation — SOPs that are specific, owned, controlled, and current
5. Change impact assessments — complete impact mapping before changes go live
6. Compliance obligation maps — every obligation tracked with owner, control, and evidence
7. Operational risk registers — live, owned, and connected to escalation thresholds
8. Incident post-mortems — specific corrective actions that close root causes, not symptoms
9. Operational metrics — leading and lagging indicators with red thresholds
10. Four persistent agents — vendor watchdog, process health, compliance monitor, change tracker
11. Eight exercises building the complete operations intelligence layer from scratch

**What does not change:**

The Operations function still requires judgment — deciding which vendor relationship is worth preserving despite underperformance, choosing how to communicate a difficult change, making the call to rollback when something goes wrong. AI does not make those calls.

What AI changes is the quality of information available when those calls are made. The vendor with the underperformance data in front of you. The change with the impact map on the table. The incident with the timeline already reconstructed. The compliance obligation already mapped to its evidence.

Better information, in the hands of the same people, produces better decisions. That is what operational intelligence does. That is what this chapter builds.

---

> *Part 3 concludes with Chapter 29: The Complete AI-Native Organisation →*

---

## Quick Reference

### Plugin Commands

| Command | Use |
|---|---|
| `/vendor` | Vendor management — contracts, spend, SLAs, renewals |
| `/process` | Process documentation — SOPs, maps, gap analysis |
| `/change` | Change management — requests, impact, comms, rollback |
| `/compliance` | Compliance tracking — controls, obligations, evidence |
| `/audit` | Audit preparation and internal audit support |
| `/sop` | Standard Operating Procedure creation and maintenance |
| `/risk` | Operational risk register and risk assessment |
| `/contract` | Contract analysis and obligation extraction |
| `/metrics` | Operational metrics framework and reporting |
| `/incident` | Incident management — logging, RCA, corrective actions |

### Key Resources

| Resource | URL |
|---|---|
| Operations Plugin | claude.com/plugins/operations |
| GitHub Plugin Repo | github.com/anthropics/knowledge-work-plugins/tree/main/operations |
