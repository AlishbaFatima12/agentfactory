---
name: incident
version: 1.0
description: >
  Activate for: incident, outage, system failure, post-mortem, incident
  post-mortem, root cause analysis, RCA, five whys, corrective action,
  lessons learned, incident log, incident report, P1, P2, major incident,
  incident review, incident timeline, what went wrong, service outage,
  payment failure, data breach incident, incident response, MTTD, MTTR,
  incident management, on-call, escalation, incident retrospective.
plugin-commands: /incident
---

## INCIDENT MANAGEMENT WORKFLOW

### Task Types

TYPE 1: POST-MORTEM (primary use)
  Purpose: Structured retrospective after an incident resolves.
  Input: Incident timeline; impact; root cause hypothesis; what went well/poorly
  Output: Full post-mortem report with root cause, corrective actions, lessons learned

TYPE 2: FIVE WHYS ROOT CAUSE DRILL
  Purpose: Systematic root cause analysis by asking "why?" five times.
  Input: Stated root cause (usually proximate — the thing that broke)
  Output: Systemic root cause (usually a process, control, or governance gap)

TYPE 3: INCIDENT LOG ENTRY
  Purpose: Structured incident record for the incident register.
  Output: Standardised log entry for all incidents

TYPE 4: CORRECTIVE ACTION TRACKER
  Purpose: Track all open corrective actions from post-mortems.
  Output: CA tracker with status, owner, deadline, and overdue flags

TYPE 5: LESSONS LEARNED BRIEF
  Purpose: Organisation-wide sharing of key learnings from an incident.
  Output: 1-page brief suitable for all-staff or leadership communication

### Post-Mortem Output Structure

  INCIDENT POST-MORTEM REPORT
  ════════════════════════════════════════════════════════════
  Incident ID:   [INC-YYYY-NNN]
  Type:          [P1 / P2 / P3 — define per ops.local.md]
  Date:          [Date] | Duration: [Start–End, total minutes/hours]
  Status:        CLOSED
  Lead:          [Named person — post-mortem owner]
  Distribution:  [Who receives this report]

  INCIDENT SUMMARY
  [2–3 sentences: what happened, how long, what the impact was.
   No technical jargon — written for a leadership audience.]

  TIMELINE
  [HH:MM]: [Event — specific; factual; not interpretive]
  [HH:MM]: [Event]
  [Continue chronologically through detection → escalation → resolution]
  Note any gap between incident START and incident DETECTION — this is MTTD.
  Note any gap between DETECTION and first ACTION — this is response lag.

  IMPACT
  Users/customers affected: [N]
  Transactions affected:    [N / £value]
  Duration of impact:       [Time]
  Regulatory notification:  [Required / Not required — reason]
  Reputational impact:      [Social media / press / client complaints]
  Estimated financial impact: [£ range — lost revenue + remediation cost]

  ROOT CAUSE ANALYSIS
  Immediate cause:  [The proximate event — what technically failed]
  Root cause(s):    [The systemic reason — why the thing was able to fail]
  [Use Five Whys format to move from immediate → systemic]

  CONTRIBUTING FACTORS
  [What made the incident worse than it needed to be — not the root cause,
   but things that amplified impact or slowed resolution]

  WHAT WENT WELL
  ✅ [Specific — what worked and should be protected]
  [2–3 items minimum — every incident has things that worked]

  CORRECTIVE ACTIONS
  [CA-NNN]: [Action title]
    Action:   [Specific — describes exactly what changes]
    Owner:    [Named person — not "the team"]
    Due:      [Date — not "ASAP"]
    Priority: [P1 = within 1 week / P2 = within 1 month / P3 = within quarter]
    Done when: [How we will know this is complete — the verifiable outcome]

  LESSONS LEARNED (for organisation-wide sharing)
  [L-N]: [Principle that would prevent this or reduce its impact —
          written for a non-technical audience; applicable beyond this team]

  FOLLOW-UP
  CA review meeting: [Date — typically 4 weeks after post-mortem]
  Distributed to:    [List]
  ════════════════════════════════════════════════════════════

### Five Whys Framework

PRINCIPLE: Ask "why?" five times. Each answer becomes the next question.
GOAL: Move from the proximate cause (what broke) to the systemic root cause
      (why the organisation was vulnerable to this breaking).

  EXAMPLE:
  Incident: Payment system unavailable for 4 hours

  WHY 1: Why was the payment system unavailable?
  → Database failover did not trigger automatically.

  WHY 2: Why did the failover not trigger?
  → Health check threshold was misconfigured (set at 95%; should be 80%).

  WHY 3: Why was the threshold misconfigured?
  → It was changed incorrectly during the cloud migration 4 months ago.

  WHY 4: Why was the incorrect configuration not caught?
  → The post-migration testing checklist did not include health check validation.

  WHY 5: Why was health check validation not in the checklist?
  → The checklist was copied from the on-premise playbook and never updated
    for cloud-specific requirements.

  SYSTEMIC ROOT CAUSE: Migration checklists are not reviewed and updated
  for environment-specific requirements. The acceptance criteria for
  infrastructure migrations are incomplete.

  CORRECTIVE ACTION targets ROOT CAUSE — not WHY 1:
  WRONG: "Fix the health check threshold" (addresses WHY 1 only)
  RIGHT: "Update the infrastructure migration acceptance checklist to include
          environment-specific validation steps; validate all active checklists
          against current environment within 2 weeks" (addresses WHY 5)

### Corrective Action Quality Test

Before accepting any corrective action:

  ✓ SPECIFIC: Can you describe exactly what will be different when this is done?
    FAIL: "Improve the runbook process"
    PASS: "All runbooks validated against current environment; sign-off logged
           by [role]; validation added to change acceptance checklist"

  ✓ OWNED: Is there one named person (not "the team") who is accountable?
    FAIL: "IT will handle it"
    PASS: "[Named: Head of Infrastructure]"

  ✓ TIME-BOUND: Is there a specific date (not "ASAP" or "soon")?
    FAIL: "As soon as possible"
    PASS: "By [specific date]"

  ✓ ADDRESSES ROOT CAUSE: Does this action close the systemic gap identified?
    FAIL: Action targets WHY 1 (proximate cause)
    PASS: Action targets WHY 4 or WHY 5 (systemic cause)

  ✓ VERIFIABLE: How will we confirm this is actually done?
    FAIL: "The team will be more careful"
    PASS: "[Specific deliverable or evidence — updated document, process change,
           system configuration, training completion record]"

### Incident Severity Classification

Configure in ops.local.md — defaults:

  P1 — CRITICAL:
    Service unavailable; >50% of users/transactions affected;
    revenue impact >£[threshold]; regulatory notification likely
    Response: immediate; all-hands; senior management engaged within 15 min

  P2 — MAJOR:
    Significant degradation; >20% affected; revenue impact £[range];
    customer-visible; no regulatory notification
    Response: within 30 min; team lead engaged; hourly updates

  P3 — MINOR:
    Limited impact; <20% affected; no revenue impact; workaround available
    Response: within 2 hours; standard team response; daily updates

  POST-MORTEM REQUIREMENT:
    P1: mandatory; within 5 business days of resolution
    P2: mandatory; within 10 business days
    P3: optional; log entry required

## NEVER DO THESE

- NEVER skip the post-mortem for a P1 incident — the post-mortem is
  how the organisation learns; skipping it guarantees the same incident
  will happen again
- NEVER accept a corrective action that targets the proximate cause only —
  fixing "the thing that broke" without fixing "why it was able to break"
  is incomplete; the incident will recur in a slightly different form
- NEVER assign a corrective action to "the team" — one named person;
  shared ownership is no ownership
- NEVER write "ASAP" as a corrective action due date — it means nothing;
  set a specific date that reflects the priority
- NEVER conduct a post-mortem as a blame session — frame every question
  as "what in our systems, processes, or controls allowed this to happen?"
  not "who made the mistake?" Blame produces defensiveness; systems
  thinking produces learning
- NEVER close a post-mortem without scheduling the CA review meeting —
  corrective actions that are not followed up are not corrective actions;
  they are good intentions
