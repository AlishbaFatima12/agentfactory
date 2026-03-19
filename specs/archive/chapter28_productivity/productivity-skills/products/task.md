---
name: task
version: 1.0
description: >
  Activate for: task, to-do, todo, capture tasks, prioritise, prioritize,
  what should I do today, what should I work on, task list, action items,
  task backlog, brain dump, weekly tasks, daily tasks, today's priorities,
  critical path, what's most important, what needs doing, task management,
  things to do, outstanding items, follow-ups.
plugin-commands: /task
---

## TASK MANAGEMENT WORKFLOW

### Task Types

TYPE 1: CAPTURE (from brain dump / meeting notes / messages)
  Purpose: Rapidly capture and structure unorganised task input.
  Input: Raw notes, brain dump, meeting output, messages — any format
  Output: Structured, prioritised task list with owners and deadlines

TYPE 2: DAILY PRIORITISATION
  Purpose: Determine what to work on today from a larger task set.
  Input: Full task list (from memory or provided)
  Output: Today's critical path (3–5 items) + schedule suggestion

TYPE 3: WEEKLY PLANNING
  Purpose: Set the week's priorities before it begins.
  Input: Project statuses; open delegations; upcoming deadlines
  Output: Week-ahead critical path; delegation candidates; decision items

TYPE 4: BACKLOG REVIEW
  Purpose: Audit the backlog — drop dead items; re-prioritise the rest.
  Input: Current backlog
  Output: Kept / dropped / re-prioritised list with rationale

TYPE 5: CROSS-DOMAIN PLAN
  Purpose: Generate an integrated action plan for a scenario that
  spans multiple functions (HR + Finance + Ops, etc.)
  Output: Tasks by function; dependencies; delegations; timeline

### Task Output Structure

  TASK CAPTURE — [Date]
  ════════════════════════════════════════════════════════════
  [N] tasks captured | [N] overdue | [N] delegation candidates

  ── P1 — URGENT / HIGH IMPACT ───────────────────────────────
  ☐ [TASK-NNN] [Title]
    Context:  [Why this matters; what it connects to]
    Due:      [Specific date or "today"]
    Project:  [Project name from work.local.md]
    Action:   [Specific first action — not vague]
    Delegate: [If applicable — to whom]
    Note:     [Any sensitivity or communication guidance]

  ── P2 — IMPORTANT / THIS WEEK ──────────────────────────────
  [Same structure]

  ── P3 — STANDARD / BACKLOG ─────────────────────────────────
  [Same structure — briefer]

  ── DELEGATION CANDIDATES ───────────────────────────────────
  [Task] → [Person from work.local.md] (with brief note on how to approach)

  ── BLOCKED / AT RISK ───────────────────────────────────────
  [Any task that cannot proceed without something else; name the blocker]
  ════════════════════════════════════════════════════════════

### Priority Sorting Logic

When determining priority, apply in order:
  1. Is there a hard deadline? (Date-certain = prioritise)
  2. Is it blocking someone else? (Blocking = elevate)
  3. Does it affect a P1 project? (P1 project task = at least P2)
  4. What is the consequence if it slips one week? (Assess impact honestly)
  5. Is the urgency feeling real or just habitual? (Email = rarely P1)

### The Brain Dump Pattern

When user provides unorganised input:
  1. Extract every distinct task (even if vague or incomplete)
  2. Enrich each with project context from work.local.md
  3. Identify dependencies between tasks
  4. Flag anything that should be delegated
  5. Flag anything that should be dropped or questioned

### Task vs. Project distinction

  TASK: Can be completed in one session; has a single clear output
  PROJECT: Multiple tasks; spans days or weeks; has milestones

  If a "task" has >3 steps and spans >1 day: it is a project.
  Create a project entry in work.local.md instead of a task entry.
  Breaking projects down into single-session tasks is the user's job —
  or use /track to create a milestone plan.

## NEVER DO THESE

- NEVER classify more than 5 items as P1 — force re-prioritisation
  if the user tries to make everything critical
- NEVER leave a captured task without a project reference if
  it connects to a known project in work.local.md
- NEVER produce a task list without a critical path — a list of
  everything is not a plan; a critical path is
- NEVER mark a task as P1 based purely on urgency without
  assessing actual importance
- NEVER produce a weekly plan without surfacing open delegations —
  what you are waiting for is as important as what you are doing
