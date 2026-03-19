---
name: hypothesis
version: 1.0
description: >
  Activate for: assumption, hypothesis, assumption map, MVP, minimum viable
  product, lean startup, what assumptions am I making, test my idea, what
  could go wrong, assumption risk, validate assumption, kill my idea,
  stress test, what should I test first, MVP design, MVP scoping, what to build,
  minimum feature set, success criteria, failure criteria, pivot criteria,
  build plan, riskiest assumption, leap of faith assumption, critical assumption.
plugin-command: /hypothesis
---

## HYPOTHESIS AND MVP WORKFLOW

### Task Types

TYPE 1: ASSUMPTION MAP BUILD
  Purpose: Make all venture assumptions explicit; score by risk; design tests.
  Input: Venture context (from innov.local.md or conversation)
  Output: Full assumption map in three tiers with test designs

TYPE 2: ASSUMPTION PRIORITISATION
  Purpose: Identify the riskiest untested assumption to address first.
  Input: Assumption map
  Output: Prioritised test sequence with rationale

TYPE 3: MVP DESIGN
  Purpose: Scope the minimum product that tests the critical assumptions.
  Input: Top 3 assumptions to test; team; time budget
  Output: Feature set (in/out), success criteria, failure criteria, build plan

TYPE 4: VALIDATION PLAN
  Purpose: Design specific, cheap tests for a set of assumptions.
  Input: Assumption list with IDs
  Output: Week-by-week validation calendar with test methods and costs

### Assumption Map Output Structure

  ASSUMPTION MAP
  Venture: [Name] | Stage: [Stage] | Date: [Date]
  ════════════════════════════════════════════════════════════
  TIER 1 — EXISTENTIAL (if wrong, pivot required):

    A-001: [Assumption statement — specific]
    Risk: 🔴 HIGH | Evidence: [ASSUMED / ANECDOTAL / VALIDATED]
    Why existential: [What fails if this assumption is wrong]
    Cheapest test: [Specific test — ideally: talk to someone, not build something]
    Test cost: [Time + money]
    Status: [UNTESTED / TESTING / VALIDATED / INVALIDATED]

    [Repeat for each existential assumption — typically 3–6]

  TIER 2 — SERIOUS (if wrong, product changes significantly):
    [Same structure — typically 4–8 assumptions]

  TIER 3 — IMPORTANT (if wrong, optimisation required):
    [Same structure — typically 5–10 assumptions]

  TEST PRIORITY ORDER:
    Week 1–2: [A-00X + A-00X] — zero or near-zero cost tests
    Week 3–4: [A-00X + A-00X] — may require prototype or small build
    Month 2+: [A-00X] — requires pilot or live test
  ════════════════════════════════════════════════════════════

### Assumption Categories (use to ensure completeness)

  CUSTOMER assumptions:
  — The customer segment we identified is real and reachable
  — They have the pain we think they have, with the severity we think it has
  — They are currently trying to solve this problem (it's not just latent)
  — They have authority/budget to buy a solution

  PROBLEM assumptions:
  — The problem is frequent enough to justify a dedicated solution
  — The current solutions are genuinely inadequate (not just sub-optimal)
  — Customers are willing to change their behaviour to solve it

  SOLUTION assumptions:
  — Our solution technically works as designed
  — Customers can and will use it (adoption)
  — It solves the problem at the quality level customers need

  BUSINESS MODEL assumptions:
  — Customers will pay our price
  — We can acquire customers at our assumed CAC
  — Customers will stay (churn assumption)
  — Our gross margin is achievable

  TECHNICAL assumptions:
  — The core technology works at the required accuracy/scale
  — We can build it with the team we have

### Assumption Risk Scoring Rule

Assign HIGH risk when: if this assumption is wrong, we either (a) have no
revenue, (b) cannot build the product, or (c) cannot acquire customers at
a viable cost.

The question to ask: "If I discovered this was wrong tomorrow, would I
change direction?" If yes → HIGH. If maybe → MEDIUM. If probably not → LOW.

### MVP Design Output Structure

  MVP DESIGN DOCUMENT
  Venture: [Name] | Timeline: [N] weeks | Target: [N pilots / $X MRR]
  ════════════════════════════════════════════════════════════
  CORE PURPOSE OF THIS MVP:
  Test [N] things: (1) [Assumption A-00X]; (2) [Assumption A-00X]; (3) [A-00X]

  MINIMUM FEATURE SET (build these; nothing else):

    FEATURE [N]: [Name]
    Why minimum: [Why this feature is necessary to test a critical assumption]
    Spec: [Precise description — what it does; what it does not do]
    Tests: [Assumption ID(s) this feature tests]

  EXPLICITLY EXCLUDED (do not build):
    ✗ [Feature]: [Why excluded — what assumption it does NOT test]
    [Continue — the exclusion list is as important as the inclusion list]

  SUCCESS CRITERIA (pivot-or-continue decision at end of MVP period):
    ✓ [Specific measurable outcome] — validates [Assumption A-00X]
    [Each criterion maps to one or more critical assumptions]

  FAILURE CRITERIA (triggers pivot conversation):
    ✗ [Specific threshold] → [assumption this invalidates] → [what to consider]

  BUILD PLAN:
    Week 1–N: [What gets built each week]
  ════════════════════════════════════════════════════════════

### The Minimum Viable Test (MVT) Hierarchy

Before building anything, ask: can this assumption be tested more cheaply?

  LEVEL 1 — CONVERSATION: Just ask customers (cost: 30 minutes)
    "Would you pay $X for this?" is weak. Better: "Would you sign a letter of
    intent at $X before we build?" is stronger. Best: get money before building.

  LEVEL 2 — LANDING PAGE / WAITLIST: Build a one-page description and measure
    sign-up rate (cost: 1 day)

  LEVEL 3 — CONCIERGE MVP: Do the job manually for a customer before automating
    (cost: your time)

  LEVEL 4 — WIZARD OF OZ: Build the customer-facing surface; do the back-end
    manually (cost: developer time + your time)

  LEVEL 5 — FUNCTIONAL MVP: Build the minimum that works end-to-end
    (cost: full development time)

  Rule: Go to Level 5 only if Levels 1–4 cannot test the assumption.
  Most critical assumptions can be tested at Level 1 or 2.

## NEVER DO THESE

- NEVER proceed to MVP design without a complete assumption map —
  you cannot scope minimum if you don't know what you're testing
- NEVER build a feature in the MVP that tests no critical assumption
- NEVER use vague success criteria ("users like it", "good adoption") —
  every success criterion must be specific and measurable
- NEVER let the MVP grow to test a TIER 3 assumption before all
  TIER 1 and TIER 2 assumptions are tested — this is called MVP bloat
- NEVER call something "validated" because a few people said they liked it —
  validated means: N customers paid $X for it OR used it N times in N days
