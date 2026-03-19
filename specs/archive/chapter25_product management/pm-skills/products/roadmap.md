---
name: roadmap
version: 1.0
description: >
  Activate for: roadmap, communicate roadmap, roadmap planning, roadmap
  themes, quarterly roadmap, annual roadmap, now next later, product strategy,
  what are we building, roadmap presentation, roadmap for execs, roadmap for
  engineering, roadmap for customers, roadmap narrative, product direction,
  product priorities, what comes next, H1 plan, H2 plan, Q roadmap.
plugin-commands: /roadmap
---

## ROADMAP WORKFLOW

### The Three Roadmap Formats

FORMAT 1: NOW / NEXT / LATER (default — use for most roadmap communication)

  NOW (this sprint or quarter):
    - Specific features with specs. These are commitments.
    - Named engineers. Named sprint targets.
    - Link to spec/PRD for each item.

  NEXT (following quarter):
    - Problem statements, not feature names where possible.
    - Directional. These are intentions, not commitments.
    - Dependencies and risks flagged.

  LATER (beyond next quarter):
    - Themes and user problems, not solutions.
    - These are signals. Not promises.
    - Should change as you learn more — that is expected and healthy.

FORMAT 2: THEME-BASED (use for executive and customer communication)
  Organise by strategic theme, not by feature list or sprint.
  Each theme has: a user problem it addresses, the features in scope,
  and the business outcome expected.

FORMAT 3: GANTT / TIMELINE (use for engineering planning only)
  Sprint-by-sprint view with dependencies.
  Never show this to customers — false precision destroys trust.
  Never show exact dates to executives without engineering confirmation.

### Audience-Specific Rules

ENGINEERING AUDIENCE:
  - Priority order is explicit (P1 / P2 / stretch)
  - Dependencies named with team and approximate timing
  - What is a hard constraint vs. negotiable is clear
  - Open questions they own are explicitly theirs
  - Capacity assumptions stated (who, how many sprints)
  - Format: bullet list or table; technical precision welcome

EXECUTIVE AUDIENCE:
  - Lead with business outcome, not feature name
  - Status signal in first paragraph: On Track / Watch Item / At Risk
  - One "watch item" maximum — executives cannot act on five risks
  - Connect each theme to a revenue, retention, or competitive metric
  - No sprint numbers; no ticket references; no technical jargon
  - Maximum length: one page / 300 words
  - End with: one recommendation or one decision needed from this audience
  - Format: narrative paragraphs or concise bullet points; no Gantt

CUSTOMER AUDIENCE:
  - Value language only: "You will be able to..." not "We are building..."
  - Never: internal feature names, ticket numbers, sprint cadence
  - Never: exact delivery dates unless 100% confirmed
  - Do: invite engagement (beta interest; feedback)
  - Do: acknowledge what you know they have been waiting for
  - Tone: confident but not over-promising
  - Format: short paragraphs; friendly; scannable

### Roadmap Output Structure

HEADER (all versions):
  Roadmap: [Product name]
  Period:  [Quarter / Half / Year]
  Updated: [Date]
  Audience:[Engineering / Executive / Customer / Internal]

THEME BLOCK (repeat for each theme):
  Theme: [Name — use value language for external; technical name fine internally]
  User problem: [One sentence — whose pain; what pain]

  Features in scope:
    NOW:  [Feature] — [Status: Spec complete / In sprint / Shipped]
    NEXT: [Feature or problem area] — [Status: Discovery / Scoped / TBD]
    LATER:[Theme area or user problem] — [Not yet scoped]

  Business outcome: [What we expect to change and by when]
  Dependencies:     [Named if known]
  Risk:             [One sentence if any elevated risk]

WHAT WE ARE NOT BUILDING (include in all versions):
  [The 2–3 most commonly asked-about items that are NOT in this roadmap]
  [With a one-line rationale for each]

  Rule: Explicitly naming what you are not building — and why —
  is as important as naming what you are building. It prevents
  the "but what about X" conversation from consuming every roadmap review.

### Roadmap Health Check

Before finalising any roadmap, verify:
  ✓ Does every NOW item have a spec in REVIEW or REFINED status?
  ✓ Does every NEXT item have at least a problem statement?
  ✓ Are any NEXT items actually LATER (lower confidence than they appear)?
  ✓ Is there at least one "platform / quality / debt" theme?
    (Roadmaps with only feature themes are unsustainable)
  ✓ Does the combined NOW scope fit the team's actual capacity?
    (If in doubt: remove one item from NOW before committing)
  ✓ Is there a "not building" list?

## NEVER DO THESE

- NEVER show a Gantt with specific dates to customers
- NEVER use a feature name in customer communications without
  translating it to user value language
- NEVER produce a roadmap without a "what we are not building" section
- NEVER commit NOW items that don't have a spec — you cannot commit
  to build something that isn't defined yet
- NEVER create a roadmap where every item is labelled as P1 or MUST —
  if everything is a priority, nothing is
- NEVER finalise a roadmap without asking: "Does this fit our capacity?"
