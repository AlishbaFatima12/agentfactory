---
name: change
version: 1.0
description: >
  Activate for: change management, change request, change impact,
  change assessment, change approval, CAB, change advisory board,
  change comms, change communication, change plan, go-live, rollback,
  rollback plan, post-implementation review, PIR, system migration,
  system upgrade, process redesign, organisation change, restructure,
  technology change, change freeze, change window, emergency change,
  change log, change register, change failure, change success.
plugin-commands: /change
---

## CHANGE MANAGEMENT WORKFLOW

### Change Classification (always determine before assessment)

STANDARD:
  Criteria: Low complexity; well-understood; limited scope; fully reversible
  Examples: Routine software patches; user access changes; config updates
  Approval: Process owner can approve; no CAB required
  Timeline: Can be implemented same day

SIGNIFICANT:
  Criteria: Moderate complexity; some downstream impact; reversible
  Examples: New software tool; process redesign within one team;
            integration config change
  Approval: Change Manager + relevant function head
  Timeline: Minimum 5 business days' notice

MAJOR:
  Criteria: Cross-functional; complex integrations; reversible with effort
  Examples: System migration; multi-team process change; new platform
  Approval: CAB required; impact assessment mandatory before approval
  Timeline: Minimum 2 weeks' notice; staged implementation preferred

CRITICAL:
  Criteria: Organisation-wide; difficult/impossible to revert quickly;
            regulatory implications possible
  Examples: Core system replacement; M&A integration; regulatory change programme
  Approval: Executive sponsor + CAB + legal/compliance review
  Timeline: Formal project governance; not a change request — a programme

EMERGENCY:
  Criteria: Unplanned; required to resolve an active incident or prevent
            imminent harm; normal process bypassed
  Approval: On-call authority (defined in ops.local.md) — retrospective review
  Timeline: Immediate; document first available moment

### Impact Assessment Structure

  CHANGE IMPACT ASSESSMENT
  ════════════════════════════════════════════════════════════
  Change name:    [Specific]
  Classification: [STANDARD / SIGNIFICANT / MAJOR / CRITICAL]
  Sponsor:        [Named executive]
  Owner:          [Named change manager]
  Proposed date:  [Go-live date]
  Date assessed:  [Today]

  WHAT IS CHANGING:
  [Precise description — what specifically will be different after this change]

  WHY THIS CHANGE:
  [Problem being solved or opportunity being pursued — with evidence]

  STAKEHOLDER IMPACT MAP:
  [For each affected group: impact level 🔴/🟡/🟢; people affected;
   what changes for them; training required; key concern]

  INTEGRATION RISK REGISTER:
  | System/Process | Connection Type | Change Impact | Risk | Action |
  |---|---|---|---|---|
  | [Name] | [API/file/manual] | [What changes] | 🔴/🟡/🟢 | [Action] |

  TIMELINE RISKS:
  [Any conflict with: financial reporting periods; other changes in flight;
   regulatory deadlines; peak operational periods; staff availability]

  ROLLBACK PLAN:
  Phase [N]: [At what point; what triggers rollback; who authorises;
              technical steps to revert; data implications; time to revert]

  CHANGE READINESS ASSESSMENT:
  Organisation: 🔴/🟡/🟢 — [Evidence]
  Technology:   🔴/🟡/🟢 — [Evidence]
  Process:      🔴/🟡/🟢 — [Evidence]
  Data:         🔴/🟡/🟢 — [Evidence]

  APPROVALS REQUIRED (per ops.local.md authority matrix):
  [Role] — [by date]

  NEXT STEPS:
  [Numbered; specific; dated]
  ════════════════════════════════════════════════════════════

### Communication Plan Structure

COMMUNICATION PLANNING PRINCIPLES:
  1. Communicate the WHY before the WHAT — people accept changes better
     when they understand the reason
  2. Give affected people MORE notice than you think they need
  3. Different audiences need different messages — never one email for all
  4. Over-communicate during the change; under-communication breeds rumour
  5. Always include: what changes; what stays the same; what to do if problems

  COMMUNICATION PLAN TABLE:
  | Audience | Message | Channel | Timing | Owner | Key concern to address |
  |---|---|---|---|---|---|
  | [Who] | [What they need to know] | [Email/meeting/Slack] | [When] | [Name] | [Their #1 worry] |

### Rollback Plan Rules

A rollback plan is only useful if:
  ✓ The decision to rollback is defined BEFORE go-live
     ("critical failure" = [specific, measurable criteria])
  ✓ The rollback decision authority is named
     (who can authorise rollback; available 24/7 during go-live window)
  ✓ The rollback window is defined
     (how long after go-live can rollback still occur?)
  ✓ The technical rollback procedure is documented
     (not improvised in a crisis)
  ✓ The data implications are understood
     (what happens to transactions processed during the change window?)

NEVER acceptable:
  "We can roll back if needed" (not a rollback plan)
  "IT will handle it" (not specific enough)
  "We'll figure it out" (this is what causes 4-hour incidents)

### Post-Implementation Review Template

PIR timing: 4 weeks post-go-live (enough time for issues to surface;
early enough to remember what happened)
PIR owner: Change manager or project sponsor

  POST-IMPLEMENTATION REVIEW: [Change name]
  ─────────────────────────────────────────────────────────
  Did the change achieve its objective? [YES / PARTIAL / NO — with evidence]
  Were there unexpected impacts? [List]
  Were the impact assessment risks accurate? [Compare predicted vs. actual]
  Were there incidents caused by this change? [List with resolution]
  Was the rollback plan needed? [YES — was it adequate? / NO]
  What would we do differently? [Specific; actionable; process improvement]
  ─────────────────────────────────────────────────────────

## NEVER DO THESE

- NEVER approve a MAJOR or CRITICAL change without a completed impact
  assessment — the CAB cannot assess what it cannot see
- NEVER go live without a rollback plan that has been reviewed and
  agreed, not just drafted — "we have a rollback plan" is not sufficient
- NEVER schedule a MAJOR change during a financial reporting period,
  regulatory deadline window, or peak operational period without
  explicit executive sign-off on the elevated risk
- NEVER close an emergency change without a retrospective review —
  the emergency change is a signal that something in the normal
  change process failed; find and fix it
- NEVER classify a change as STANDARD if it has dependencies on
  systems owned by other teams — that is a SIGNIFICANT at minimum
