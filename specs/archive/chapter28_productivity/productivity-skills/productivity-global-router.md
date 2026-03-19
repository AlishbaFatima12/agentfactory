---
name: productivity-global-router
version: 1.0
description: >
  TOP-LEVEL ROUTER. Activate when ANY of these terms appear:
  task, to-do, todo, task list, capture tasks, prioritise, prioritize,
  what should I do, critical path, backlog, action items,
  memory, remember, work.local, workplace memory, add to memory,
  who is, what is, terminology, people brief, person brief,
  project status, what's in flight, what's at risk,
  dashboard, weekly view, one pane, executive view, status overview,
  brief, situation brief, context brief, prep brief,
  digest, morning brief, daily digest, what's happening today,
  meeting, meeting prep, meeting notes, meeting synthesis, before the meeting,
  after the meeting, action items from meeting, decisions from meeting,
  search, find, look up, what do we know about,
  context, load context, cross-domain, inject context,
  delegate, delegation, who owns, handed off, assigned to,
  track, progress, milestone, blocker, status update,
  agentic office, digital chief of staff, workplace AI, chief of staff.
author: Panaversity — The AI Agent Factory
chapter: 28 — Productivity & The Agentic Office
plugin: https://github.com/anthropics/knowledge-work-plugins/tree/main/productivity
---

## STEP 1 — IDENTIFY TASK AND LOAD PRODUCT FILE

| Query Pattern | Load Product File |
|---|---|
| Task, capture, prioritise, to-do, backlog, action items | products/task.md |
| Memory, remember, add person, add project, add term, who is | products/memory.md |
| Dashboard, weekly view, status overview, one pane | products/dashboard.md |
| Brief, situation brief, context before meeting/decision | products/brief.md |
| Digest, morning brief, what's today, daily brief | products/digest.md |
| Meeting, meeting prep, meeting notes, meeting synthesis | products/meeting.md |
| Search, find, look up, what do we know | products/search.md |
| Context, load context, cross-domain, inject | products/context.md |
| Delegate, delegation, assign, handed off | products/delegate.md |
| Track, progress, milestone, blocker, status update | products/track.md |

## STEP 2 — ALWAYS LOAD CONFIGURATION

Always load: work.local.md
Extract and hold in context:
  PERSONAL:       Name, role, working style, current focus, priorities
  TEAM:           All people entries — names, roles, communication styles
  PROJECTS:       All active projects — status, priority, risks, decisions
  ORG:            Terminology dictionary; meeting rhythm; culture; unwritten rules
  CONFIG:         Digest settings; dashboard sections; escalation thresholds

IF work.local.md NOT FOUND:
  Respond: "No workplace memory found. I'll do my best with the context
  in this conversation, but my outputs will be generic rather than
  specific to your organisation. Run Exercise 1 from Chapter 28 to
  build work.local.md — it is the most important configuration step
  in this book."
  Continue with whatever context is available in the conversation.

## STEP 3 — APPLY MEMORY CONSISTENTLY

Once work.local.md is loaded:

  TERMINOLOGY: Always use the organisation's terminology, not generic equivalents
    Example: If "Boulders" = quarterly priorities, never say "OKRs"
    Example: If "Project Nighthawk" = Karachi expansion, use the codename
             appropriately (internal = codename OK; external = use real name)

  PEOPLE: When a person is mentioned, load their profile from work.local.md
    Apply: communication style preferences in any output about/for them
    Apply: current priorities and sensitivities in any recommendation
    Apply: relationship context when advising on how to approach them

  PROJECTS: When a project is mentioned, load its current status
    Apply: priority level (P1/P2/P3) in urgency assessments
    Apply: known blockers and risks in any status-related output
    Apply: decisions already made — do not re-open decided questions

  CULTURE: Apply the organisation's working norms
    Apply: decision-making style in any recommendation framing
    Apply: communication preferences in any draft message
    Apply: unwritten rules in any interpersonal guidance

## STEP 4 — PRIORITY CLASSIFICATION STANDARD

Apply consistently across all task and project outputs:

  P1 — CRITICAL / HIGH IMPACT:
    Criteria: Directly affects a P1 project OR has a hard deadline today
              OR is blocking one or more other tasks/people
    Action:   Do today; no exceptions
    Maximum: 3–5 P1 items per day; if more, re-classify or escalate

  P2 — IMPORTANT / THIS WEEK:
    Criteria: Affects a P2 project OR due this week OR delegation needed
    Action:   Schedule this week; confirm owner if delegated
    Maximum: 5–10 P2 items per week

  P3 — STANDARD / BACKLOG:
    Criteria: Not time-critical; no immediate consequence if delayed
    Action:   Schedule when P1 and P2 are clear; review backlog weekly
    Rule: If a P3 item stays in backlog for >4 weeks, ask: should it be
          dropped entirely? Many P3 items are good ideas that will never
          be important enough to do.

  URGENT ≠ IMPORTANT:
    Urgency (the feeling of needing to act now) is not the same as
    importance (the actual consequence of acting or not acting).
    Always assess importance independently of urgency.
    "Feels urgent" items that are not important should be P3 or dropped.

## STEP 5 — DELEGATION QUALITY STANDARD

A delegation is only valid if it has all of:
  ✓ SPECIFIC deliverable (what exactly the delegatee must produce)
  ✓ NAMED owner (one person — not "the team")
  ✓ DEADLINE (specific date — not "ASAP" or "when you can")
  ✓ CONTEXT (why it is needed; what it is for; who the audience is)
  ✓ FORMAT (what the output should look like)
  ✓ FOLLOW-UP MECHANISM (when will you check in if no update?)

A delegation without these elements will generate more work than
doing the task yourself — the delegatee will come back with questions.

## STEP 6 — MEETING QUALITY STANDARD

A meeting output is only complete if it contains:
  PREP output:
  ✓ Context for each agenda item (not just the topic)
  ✓ Decision(s) needed (what must be decided vs. discussed)
  ✓ Stakeholder notes (communication style; what each person needs)
  ✓ Meeting rules (from work.local.md culture configuration)

  SYNTHESIS output:
  ✓ Decisions (D-NNN: what was decided; who made the decision)
  ✓ Actions (A-NNN: who; what; by when — all three)
  ✓ Deferred items (with trigger for revisit — not just "later")
  ✓ Next meeting (proposed date and agenda)

## UNIVERSAL RULES — NON-NEGOTIABLE

- NEVER use generic terminology when work.local.md provides specific terms
- NEVER refer to a person without loading their profile from work.local.md
  (if they are in the system)
- NEVER produce a delegation without a specific deadline
- NEVER produce a meeting synthesis without action item owners
- NEVER produce a daily digest without a critical path section
- NEVER classify more than 5 items as P1 — if everything is urgent,
  nothing is; help the user re-prioritise
- ALWAYS apply the correct organisational terminology from work.local.md
- ALWAYS note when a project or person is referenced that is NOT in
  work.local.md — and offer to add them
- ALWAYS propose a work.local.md update after any output that reveals
  new context (new person; new project; new decision; new terminology)
