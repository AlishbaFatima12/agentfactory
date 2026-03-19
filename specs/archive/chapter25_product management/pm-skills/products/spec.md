---
name: spec
version: 1.0
description: >
  Activate for: feature spec, write a spec, specification, feature specification,
  acceptance criteria, AC, edge cases, scope, in scope, out of scope, feature
  definition, what to build, how to build, engineering spec, technical spec,
  product spec, refine spec, improve spec, review spec, spec feedback.
plugin-commands: /spec
---

## SPEC WORKFLOW

### Phase 1: Gather Context

Before writing, collect (prompt user for anything missing):
- What is the user problem this feature solves? (Who has it? What evidence?)
- What solution is being proposed? (Key user flows — not UI, but behaviour)
- What is explicitly OUT OF SCOPE for this version?
- What is the engineering context? (Effort estimate; team; sprint target)
- Are there existing design patterns or specs to reference?
- What open questions still need resolution before build starts?

### Phase 2: Draft the Five-Section Spec

SECTION 1: THE PROBLEM
Format:
  [2–3 sentences: What is the user pain? Whose pain? How do we know?]

  User evidence (minimum 1 of):
  - Support ticket volume: "[N] tickets in [period] citing [issue]"
  - Interview evidence: "[Quote from user research]"
  - NPS verbatim: "[Representative verbatim]"
  - Behavioral data: "[X]% of users [do / fail to do] [action]"
  - Lost deal data: "[N] deals cited [issue] as a blocker"

  Rule: No problem statement without evidence. "Users have asked for this"
  is NOT evidence. Cite the source.

SECTION 2: THE SOLUTION
Format:
  [1 paragraph: what we are building at the level a non-engineer can understand]

  KEY USER FLOWS:
  Flow [N]: [Name]
    Step 1: [User action]
    Step 2: [System response]
    Step N: [Outcome / completion state]

  SCOPE BOUNDARY (mandatory):
  IN SCOPE:
    - [What is explicitly included in this version]
  OUT OF SCOPE (v1):
    - [What is explicitly excluded — and why or when deferred]

  Rule: If you cannot name at least 2 OUT OF SCOPE items, the feature
  is under-scoped. Every feature has something that could be added.
  Name what you are deliberately NOT building.

SECTION 3: ACCEPTANCE CRITERIA
Format:
  The feature is complete when:
  AC[N]: [System behaviour statement — testable; no "and"; no ambiguity]

  AC quality checklist (apply to every AC):
  ✓ Can QA test this independently of all other ACs?
  ✓ Does it describe what the system does, not how it does it?
  ✓ If it contains "and" — has it been split into two ACs?
  ✓ If it implies performance — does it include a number? (e.g. "<2 seconds")
  ✓ If it implies accessibility — does it reference the specific standard?

SECTION 4: EDGE CASES AND ERROR STATES
Format: table

  | Scenario | Expected Behaviour |
  |---|---|
  | [What could go wrong or be unusual] | [What the system should do] |

  Minimum edge cases to cover:
  - What happens if the user's input is empty / null?
  - What happens if the action fails (network error, server error)?
  - What happens if the user navigates away mid-flow?
  - What happens to existing data / users when this feature launches?
  - What is the behaviour at the boundary of any defined limits?

SECTION 5: OPEN QUESTIONS
Format: table

  | # | Question | Owner | Due |
  |---|---|---|---|
  | 1 | [Specific question that must be answered before build] | [Name] | [Date] |

  Rule: Every open question must have an owner (a named person, not "TBD")
  and a due date (before sprint start, or a specific date).
  "TBD" owners mean the question will never be answered.

### Phase 3: Spec Status and Metadata

  SPEC METADATA BLOCK (top of every spec):
  ════════════════════════════════════════
  Feature:      [Name]
  Status:       DRAFT / REVIEW / REFINED / SHIPPED
  Author:       [PM name]
  Eng lead:     [Name or TBD]
  Designer:     [Name or N/A]
  Sprint:       [Target or TBD]
  Effort:       [Estimate or TBD]
  Last updated: [Date]
  ════════════════════════════════════════

### Phase 4: Iterative Refinement Support

After initial draft, support these iteration patterns:

"Engineering raised [question]"
→ Update edge cases or open questions; re-version spec

"Design changed [flow]"
→ Update affected user flows and ACs; flag any new open questions

"Scope is changing — [new item] is now in/out"
→ Update scope boundary; assess impact on ACs; flag version change

"We got new user research that changes [assumption]"
→ Update problem statement with new evidence; flag if solution section
  needs to change

## NEVER DO THESE

- NEVER write a spec with a vague problem statement ("users have been
  asking for this" without quantification)
- NEVER write an AC with "and" in it — split it
- NEVER write an AC that describes the UI rather than the behaviour
  ("the button turns green" is not an AC)
- NEVER omit the OUT OF SCOPE list — implicit scope is the primary
  cause of features that ship the wrong thing
- NEVER leave an open question with a TBD owner
- NEVER mark a spec as REVIEW-ready if any mandatory section is empty
