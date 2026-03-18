---
name: track
version: 1.0
description: >
  Activate for: track, progress, milestone, blocker, status update, project
  tracking, track progress, how are we doing on, what's the status of, where
  are we with, is X on track, what's blocking, blockers, milestone check,
  weekly status, project status, what have we completed, what's in progress,
  what's due, track milestones, progress report.
plugin-commands: /track
---

## PROGRESS TRACKING WORKFLOW

### Task Types

TYPE 1: WEEKLY STATUS (across all projects)
  Output: RAG status per project; current milestone; this week's action;
          critical path; open delegations

TYPE 2: PROJECT MILESTONE PLAN
  Output: Full milestone breakdown for a project with owners and dates

TYPE 3: BLOCKER IDENTIFICATION
  Output: All blockers across all projects; who owns resolving each;
          escalation recommendation if stalled

TYPE 4: COMPLETION SUMMARY
  Output: What was completed this week/period; what the impact was;
          what carries forward

### Weekly Status Output Structure

  WEEKLY PROJECT STATUS — Week of [Date]
  ════════════════════════════════════════════════════════════
  ── [PROJECT NAME] ([Priority]) ──────────────────────────────
  Status:           🟢/🟡/🔴 [ONE-LINE STATUS]
  This week:        [Current milestone or activity]
  Next:             [Next milestone; due date]
  Risk:             [What could derail — be specific; not "general risk"]
  This week's action: [The one thing that moves this forward most]
  Open delegations: [Any delegated items affecting this project]

  ── CRITICAL PATH (this week) ────────────────────────────────
  [The 3–5 tasks that, if done, make the week a success]
  1. [Task] — [Owner] — [Due]
  2. [Task] — [Owner] — [Due]

  ── BLOCKERS ─────────────────────────────────────────────────
  🔴 [Project]: [What is blocked] — [Who owns unblocking] — [Days blocked]
  [Escalation recommended if blocked >7 days]
  ════════════════════════════════════════════════════════════

### Milestone Plan Format

  MILESTONE PLAN: [Project Name]
  Owner: [Name] | Priority: [P1/P2/P3] | Target: [End date]
  ────────────────────────────────────────────────────────────
  MILESTONE 1: [Name]
  Due:    [Date]
  Owner:  [Person]
  Done when: [Specific deliverable or outcome]
  Dependencies: [What must be true before this can complete]
  Status: [NOT STARTED / IN PROGRESS / AT RISK / COMPLETE]

  [Repeat for each milestone]
  ────────────────────────────────────────────────────────────

### Blocker Classification

  SOFT BLOCKER: Slowing progress but workaround exists
    Action: Note; monitor; apply workaround

  HARD BLOCKER: Progress cannot continue without resolution
    Action: Escalate immediately; name who must resolve; set deadline

  STALE BLOCKER: Has been open >7 days without movement
    Action: Escalate to next level; flag in digest

## NEVER DO THESE

- NEVER report a project as 🟢 if a milestone has slipped —
  acknowledge the slip; reforecast; then assess if still on track
- NEVER leave a hard blocker without naming who owns resolving it —
  a blocker without an owner is a blocker that never gets resolved
- NEVER omit completion notes when a milestone closes — what was
  delivered, what was not, and what it enables next
