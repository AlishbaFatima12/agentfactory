---
name: delegate
version: 1.0
description: >
  Activate for: delegate, delegation, assign, hand off, give to, who should do,
  delegate to, send to, ask someone to, can you handle, delegation record,
  delegation tracking, who owns, what have I delegated, open delegations,
  delegation follow-up, check on delegation, delegation brief, delegate task,
  I want X to do Y, please handle, over to.
plugin-commands: /delegate
---

## DELEGATION WORKFLOW

### The Delegation Principle

A delegation is only as good as its brief. A vague delegation — "can you
handle the analytics thing?" — generates more work than doing the task yourself
because the delegatee will come back with questions you should have anticipated.

A strong delegation brief gives the delegatee everything they need to succeed
without coming back to you. It respects their time and their intelligence.

### Delegation Output Structure

  DELEGATION RECORD — [Task name or ID]
  ════════════════════════════════════════════════════════════
  Delegated to:  [Person name — from work.local.md if available]
  Delegated by:  [Your name from work.local.md personal layer]
  Date:          [Today]
  Due:           [Specific date and time — not ASAP]

  DELIVERABLE:
  What:    [Precise description of what must be produced]
  Format:  [Slides / doc / data / email / verbal — specific]
  Length:  [If relevant — 2-page; 10 slides; 500 words]

  CONTEXT:
  Purpose:   [Why this is needed; what decision it supports]
  Audience:  [Who will see/use this output]
  Key question the output should answer: [The most important question]

  CONSTRAINTS:
  What not to do: [Any specific exclusions or out-of-scope items]
  Prior work:     [Any existing documents or decisions to build from]

  HANDOFF COMMUNICATION (ready to send):
  [Draft message in the delegatee's preferred channel and style,
   loaded from work.local.md person entry]

  FOLLOW-UP PLAN:
  Confirmation due:  [Time — typically EOD today for same-week tasks]
  Check-in:          [If no confirmation: follow up at this time]
  Escalation:        [If no delivery by [date - N days]: flag in digest]
  ════════════════════════════════════════════════════════════

### Handoff Communication Calibration

Apply the delegatee's communication style from work.local.md:

  PERSON prefers async / written:
  → Draft a Slack message or email; not a meeting request

  PERSON needs lead time / dislikes last-minute:
  → Acknowledge the ask is time-sensitive; offer to adjust scope if needed
  → Note in the message: "I know this is a short timeline — let me know
    if the scope needs adjusting"

  PERSON is detail-oriented:
  → Provide more context than you think necessary; they will ask for it anyway

  PERSON pushes back on scope creep:
  → Be hyper-specific about exactly what you need; avoid open-ended asks

### Delegation Log

Every delegation is logged in work.local.md under:
  delegations:
    - task: "[Task name]"
      delegated_to: "[Person]"
      delegated_by: "[You]"
      date_delegated: "[Date]"
      due_date: "[Date]"
      confirmed: [true/false]
      status: "[PENDING CONFIRMATION / IN PROGRESS / COMPLETE / OVERDUE]"
      deliverable: "[What was requested]"

### Delegation Follow-up Standards

CONFIRMATION WINDOW: 24 hours for same-week tasks; 48 hours for longer ones
  If no confirmation within window: send a gentle follow-up
  If still no confirmation after second contact: flag to Work Tracker agent
  for escalation in next digest

STATUS CADENCE:
  Tasks <5 days: one check-in at midpoint
  Tasks 5–14 days: weekly check-in
  Tasks >14 days: bi-weekly check-in

OVERDUE HANDLING:
  1 day late: polite inquiry — "any blockers I can help with?"
  3 days late: explicit conversation — "this is affecting [downstream item]"
  1 week late: flag in digest; consider re-routing or taking back

### Delegation Quality Checklist

Before sending any delegation:
  ✓ Specific deliverable (not activity)
  ✓ Named person (one; not "the team")
  ✓ Specific deadline (not ASAP)
  ✓ Context (purpose + audience)
  ✓ Format specified
  ✓ Written in the delegatee's preferred style
  ✓ Follow-up mechanism defined

## NEVER DO THESE

- NEVER delegate without a specific deadline — "when you can" produces
  the lowest-priority work on the delegatee's list
- NEVER delegate to a group — one person owns the delivery; others may
  contribute, but one person is accountable
- NEVER use jargon or internal codenames in a delegation brief unless
  you are certain the delegatee knows them — confirm terminology
- NEVER forget to load the delegatee's communication style from
  work.local.md before drafting the handoff message — a brief written
  for you may be poorly received by a different communication style
- NEVER close a delegation in the log without confirming the deliverable
  was actually received and meets the standard — "sent" is not "done"
