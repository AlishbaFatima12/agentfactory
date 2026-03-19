---
name: dashboard
version: 1.0
description: >
  Activate for: dashboard, weekly view, executive dashboard, status overview,
  one pane of glass, everything in one place, full picture, cross-domain view,
  what's the overall status, portfolio view, all projects, big picture,
  weekly dashboard, project dashboard, management dashboard, work overview.
plugin-commands: /dashboard
---

## DASHBOARD WORKFLOW

### Dashboard Purpose
Collapse all active work streams into a single readable view.
Target: reviewed in 5 minutes; action-oriented; replaces a dozen status checks.

### Dashboard Output Structure

  EXECUTIVE DASHBOARD — [Date] — [Name from work.local.md]
  ════════════════════════════════════════════════════════════
  HEADLINE: 🟢 ALL CLEAR / 🟡 WATCH ITEMS / 🔴 ACTION REQUIRED

  ── P1 PROJECTS ──────────────────────────────────────────────
  [Project name]    [🟢/🟡/🔴] [One-line status]
  This week:        [Current milestone]
  Risk:             [If 🟡/🔴 — what specifically]
  Action:           [What needs doing this week]

  ── P2 PROJECTS ──────────────────────────────────────────────
  [Same format — briefer]

  ── KEY METRICS (from domain agents) ─────────────────────────
  [Domain]: [Metric name] — [Value] — [🟢/🟡/🔴]
  [Only metrics configured in work.local.md dashboard.metrics_sources]

  ── OPEN ACTIONS (this week) ─────────────────────────────────
  ☐ [Task] — [Owner] — [Due date]
  [Only actions due this week or overdue]

  ── OPEN DELEGATIONS ─────────────────────────────────────────
  [Person]: [Task] — due [date] — [⏳ PENDING / ✅ CONFIRMED / 🔴 OVERDUE]

  ── UPCOMING DECISIONS ───────────────────────────────────────
  [Date]: [Decision needed] — [Owner]

  ── CALENDAR HIGHLIGHTS ──────────────────────────────────────
  [Day]: [Meeting or deadline that matters most this week]
  ════════════════════════════════════════════════════════════

### Dashboard Configuration (from work.local.md)

  dashboard:
    sections: [configure which sections appear]
    metrics_sources:
      hr:      "Onboarding status; open roles"
      finance: "Budget approvals pending; spend vs. plan"
      ops:     "Compliance status %; vendor renewals <90 days"
      sales:   "Pipeline value; quota attainment %"
    refresh:   "Daily with digest"
    format:    "One page; RAG status; action items explicit"

### RAG Status Rules

🟢 GREEN — ON TRACK:
  All milestones on schedule; no blockers; no decisions overdue

🟡 AMBER — WATCH:
  One milestone at risk; minor blocker present; decision needed this week

🔴 RED — ACTION REQUIRED:
  Milestone missed or at imminent risk; hard blocker; decision overdue;
  escalation needed

RULE: Never show 🟢 for a project where a milestone has slipped
without explicit acknowledgement that the slip was accepted.

## NEVER DO THESE

- NEVER make the dashboard longer than one page — add a drill-down
  mechanism rather than expanding the dashboard itself
- NEVER omit the headline status — the first thing a busy executive
  needs to know is whether anything needs immediate attention
- NEVER show all tasks — only show actions due this week or overdue;
  the dashboard is a focus tool, not a task dump
