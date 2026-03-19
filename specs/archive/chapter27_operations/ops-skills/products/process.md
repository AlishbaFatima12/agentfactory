---
name: process
version: 1.0
description: >
  Activate for: process, process documentation, process map, process
  mapping, process analysis, process gap, process improvement, business
  process, process design, as-is process, to-be process, process review,
  workflow analysis, end-to-end process, process owner, process inventory,
  value stream, swim lane, BPMN, process optimisation, bottleneck,
  process failure, process efficiency, handoff, process handover.
plugin-commands: /process
---

## PROCESS DOCUMENTATION AND ANALYSIS WORKFLOW

### Task Types

TYPE 1: PROCESS MAPPING (as-is)
  Purpose: Document how a process currently works — not how it should work.
  Key principle: Describe reality, not aspiration. An inaccurate as-is map
  is worse than no map — it misdirects improvement efforts.
  Output: Structured process description with steps, roles, systems, decisions

TYPE 2: GAP ANALYSIS
  Purpose: Identify where a process is failing and why.
  Input: Known problems (delays, errors, complaints, cost overruns)
  Output: Root cause mapped to process step + recommended fix + priority

TYPE 3: PROCESS IMPROVEMENT (to-be design)
  Purpose: Redesign a process to eliminate identified gaps.
  Output: New process design with changes clearly marked vs. as-is

TYPE 4: PROCESS INVENTORY
  Purpose: Catalogue all processes in a function with ownership and
  documentation status.
  Output: Process inventory table with tier, owner, SOP status, review date

TYPE 5: PROCESS HANDOVER
  Purpose: Transfer process ownership when a named owner leaves.
  Output: Handover brief + knowledge capture questions for the departing owner

### Gap Analysis Framework

For each identified problem, map to:

  PROBLEM: [Description — specific; not "slow" but "average 45 days to resolve"]

  PROCESS LOCATION: [Which step in the process does this occur?]

  ROOT CAUSE CATEGORY:
  - Missing control:  A check or approval that should exist does not
  - Missing step:     An activity that should happen is absent from the process
  - Unclear ownership: No one knows who is responsible for this step
  - System gap:       The system does not support what the process requires
  - Skills gap:       The people doing the step lack the capability to do it well
  - Capacity gap:     The step is performed correctly but too slowly due to volume
  - Interface gap:    The handoff between two roles or systems is broken

  SPECIFIC ROOT CAUSE: [One sentence — as precise as possible]

  RECOMMENDED FIX: [Specific — describes exactly what changes]

  PRIORITY:
  🔴 CRITICAL — causing regulatory breach or significant financial loss; fix now
  🟡 HIGH    — causing significant operational disruption or error rate; fix this quarter
  🟢 MEDIUM  — causing inefficiency or customer dissatisfaction; fix within 6 months
  ⚪ LOW     — causing minor friction; fix when resources allow

### Process Inventory Format

  PROCESS INVENTORY: [Function name]
  ════════════════════════════════════════════════════════════
  | Process | Tier | Owner | SOP Status | Last Reviewed | Next Review |
  |---|---|---|---|---|---|
  | [Name] | [1/2/3] | [Role] | [Current/Overdue/None] | [Date] | [Date] |

  TIER DEFINITION:
  Tier 1: Critical — failure halts operations or causes regulatory breach
  Tier 2: Important — failure causes significant disruption or financial loss
  Tier 3: Standard — failure causes inconvenience but is recoverable

  RULES:
  Every Tier 1 process must have: named owner; current SOP; 6-month review
  Every Tier 2 process must have: named owner; current SOP; 12-month review
  Every Tier 3 process must have: named owner; SOP (may be 24-month review)
  ════════════════════════════════════════════════════════════

### Process Map Output Structure

  PROCESS MAP: [Process name]
  Trigger:    [What starts this process]
  End state:  [What defines completion / success]
  Owner:      [Role responsible for this process end-to-end]

  ROLES IN THIS PROCESS:
  [Role A] / [Role B] / [Role C] — [brief description of each]

  PROCESS STEPS:
  [Role A] Step 1: [Action] → [Output / next step]
  [Role A] Step 2: [Action] → [Decision: IF / ELSE]
    IF [condition]: → Step 3a
    IF NOT:        → Step 3b (exception path)
  [Role B] Step 3: [Action] → ...

  HANDOFFS:
  [Step N]: [Role A] → [Role B] — [what is handed off; acceptance criteria]

  KEY DECISION POINTS:
  [Step N]: [Decision; criteria; who decides]

  FAILURE MODES (top 3):
  [Most common failure; where; root cause; current mitigation]

## NEVER DO THESE

- NEVER map an aspirational ("to-be") process as if it is the current
  as-is — label clearly which is which; mixing them invalidates both
- NEVER assign "team" as a process owner — one role; one person responsible
- NEVER produce a gap analysis without a priority rating for each gap —
  an unprioritised list of improvements leads to doing the easiest ones
  first, not the most important ones
- NEVER produce a process inventory without a tier classification —
  treating all processes with equal urgency guarantees critical ones
  are delayed by non-critical ones
- NEVER complete a gap analysis without mapping each problem to a
  specific process step — "the process is too slow" is an observation;
  "Step 6 is too slow because the approver has a 10-day SLA but no
  notification system" is a diagnosis
