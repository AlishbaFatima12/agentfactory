---
name: sop
version: 1.0
description: >
  Activate for: SOP, standard operating procedure, procedure, runbook,
  work instruction, process procedure, write a procedure, document a process,
  update an SOP, SOP review, SOP version, process steps, how to do,
  step by step, procedure document, operating procedure, instruction document,
  process guide, procedure guide, process write-up, document how we do.
plugin-commands: /sop
---

## SOP CREATION WORKFLOW

### Pre-Writing Information Gathering

Before generating any SOP, collect:

  REQUIRED:
  - Process name (specific — not "Procurement Process" but "Purchase Order Approval")
  - Trigger (what event causes this process to start?)
  - Frequency (daily / weekly / monthly / event-triggered)
  - Roles involved (exact role titles — AP Clerk, Finance Manager, CFO — not "team")
  - Systems used (names and specific menu paths / transaction codes if known)
  - Inputs required before starting (documents, approvals, data)
  - Key controls (what prevents errors at each step)
  - Known failure points (where does this process most often go wrong?)

  USEFUL (produces better SOP):
  - Approval thresholds (different authorisers at different values)
  - Exception scenarios (what happens when the normal flow cannot proceed?)
  - Regulatory context (any compliance requirement embedded in this process)
  - Link to related SOPs (upstream / downstream processes)

### SOP Structure — All SOPs

  [DOCUMENT HEADER]
  SOP ID:         [SOP-FUNCTION-NNN — assign per ops.local.md numbering]
  Title:          [Specific — "Monthly Supplier Payment Run", not "Payments"]
  Owner:          [Role title — who maintains this document]
  Approver:       [Role title — who signs off this document]
  Version:        [N.N]
  Effective:      [Date]
  Review due:     [Date — typically 12 months; 6 months for high-risk processes]
  Frequency:      [How often the process runs]

  PURPOSE
  [One sentence: why this SOP exists and what it achieves]

  SCOPE
  Applies to:   [What is included]
  Excludes:     [What is explicitly not in scope — link to other SOP if relevant]

  ROLES AND RESPONSIBILITIES
  [Role]:        [What they do in this process — one line per role]

  INPUTS REQUIRED
  [List with: item name; source; who is responsible for ensuring it is ready]
  [Note any items that must be gathered N days before the process starts]

  PROCESS STEPS
  [Organised into PHASES for processes with >6 steps]

  PHASE N: [PHASE NAME] ([Timing / who])
    Step [N]: [Imperative verb — one action per step] ([Role])
              [System: menu path / transaction code if applicable]
              [Control note: if a specific control applies at this step]
              [Decision: IF [condition] THEN [action] ELSE [action] — if applicable]

  CONTROLS
  [Numbered list of all controls, cross-referenced to step numbers]
  Control [N]: [What it prevents] — [How it works] — [Step N]

  SPECIFIC RISK CONTROL (for highest-risk step):
  [Detailed description of the highest-risk activity in the process and
   the specific control that mitigates it — e.g., fraud prevention]

  ERROR AND EXCEPTION HANDLING
  | Scenario | Expected Action | Escalation Path |
  |---|---|---|
  | [What can go wrong] | [What to do] | [Who to escalate to] |

  DOCUMENT CONTROL
  | Version | Date | Author | Changes |
  |---|---|---|---|
  | 1.0 | [Date] | [Name] | Initial version |

### SOP Update Workflow (type:"version-update")

When updating an existing SOP:
  1. Identify specific change(s) — list each change precisely
  2. Assess whether the change affects controls (if yes: flag for approver review)
  3. Update affected steps only — do not rewrite the whole document
  4. Increment version (major change: N+1.0; minor change: N.N+1)
  5. Add entry to Document Control table
  6. Generate change notification for SOP users

CHANGE NOTIFICATION FORMAT:
  Subject: SOP UPDATE — [SOP ID]: [Title] — Version [N]
  Change effective: [Date]
  What changed: [Specific bullet points — do not say "minor updates"]
  What is the same: [Reassurance that unchanged areas are unchanged]
  Action required: [Read by [date] / Acknowledge by [date] / Training required]

### SOP Review Rules

REVIEW TRIGGERS (review immediately — do not wait for scheduled date):
  - Any system that the SOP references is upgraded or replaced
  - Any regulatory requirement embedded in the SOP changes
  - Any control failure that caused an incident
  - Named role owner changes (new person should review on their first week)
  - Process produces an error rate above [configured threshold]

REVIEW SCHEDULE (from ops.local.md or defaults):
  Tier 1 (critical / regulated): Every 6 months
  Tier 2 (important / complex):  Every 12 months
  Tier 3 (standard):             Every 24 months

## NEVER DO THESE

- NEVER write a step that does two things — split it; one step, one action
- NEVER assign a step to "the team" — assign it to a specific role title
- NEVER write an SOP without an error handling section — every process
  has failure modes; an SOP that only describes the happy path is
  useless precisely when it is needed most
- NEVER write a control in the introduction only — embed controls at
  the specific step where they apply
- NEVER omit the review date — an SOP without a review date will
  not be reviewed and will become the outdated document that causes
  the next process failure
- NEVER version a major change as a minor version — if a control changes
  or a step is added/removed, that is a major version increment
