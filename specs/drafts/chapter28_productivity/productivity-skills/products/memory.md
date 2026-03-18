---
name: memory
version: 1.0
description: >
  Activate for: memory, remember, add to memory, workplace memory,
  add person, add project, add term, add terminology, who is, what is,
  what does X mean, update memory, person brief, people brief, project brief,
  terminology dictionary, update work.local, what do you know about,
  memory update, I want you to remember, note that, keep track of,
  organisation profile, team profile, forget, remove from memory.
plugin-commands: /memory
---

## WORKPLACE MEMORY WORKFLOW

### Memory Layer Structure

The four memory layers in work.local.md:

  LAYER 1 — PERSONAL:
    What: Individual's working style, priorities, and context
    Used for: Calibrating tone; applying communication preferences;
              understanding decision-making style

  LAYER 2 — TEAM (People):
    What: Key stakeholders — roles, communication styles, current focus,
          sensitivities, relationship notes
    Used for: Stakeholder-aware outputs; delegation routing; people briefs

  LAYER 3 — PROJECTS:
    What: Active projects — name, codename, status, priority, owner,
          milestones, risks, decisions made
    Used for: Project-aware task prioritisation; status tracking; dashboard

  LAYER 4 — ORGANISATIONAL:
    What: Terminology dictionary, meeting rhythm, culture, unwritten rules,
          org structure, decision-making norms
    Used for: Terminology application; meeting prep; cultural calibration

### Memory Task Types

TYPE 1: ADD PERSON
  Input: Name, role, reporting line, communication style, current focus,
         any sensitivities
  Output: Formatted person entry for work.local.md + confirmation

  PERSON ENTRY FORMAT:
  - name: "[Full name]"
    role: "[Job title]"
    reports_to: "[Manager name]"
    communication: >
      [How they prefer to receive information; what works; what annoys them]
    current_focus: "[What they are working on right now]"
    priorities: "[Their current top 1–3 priorities]"
    note: "[Anything important about working with this person]"
    sensitivity: "[Optional — anything that must not be shared broadly]"

TYPE 2: ADD PROJECT
  Input: Project name, codename, status, priority, owner, description,
         current milestone, risks, decisions already made
  Output: Formatted project entry for work.local.md + confirmation

  PROJECT ENTRY FORMAT:
  - name: "[Project full name]"
    codename: "[Internal codename if different]"
    status: "[PLANNING / IN PROGRESS / AT RISK / BLOCKED / COMPLETE]"
    priority: "[P1 / P2 / P3]"
    owner: "[Named person]"
    description: >
      [What this project is; why it matters; key context]
    current_milestone: "[What is happening now]"
    next_milestone: "[What comes next; by when]"
    at_risk: "[What could go wrong; what is currently stalled]"
    decisions: ["[Decision made; date]", "[Decision made; date]"]
    key_contacts: ["[Person; role in project]"]

TYPE 3: ADD TERM
  Input: Term, definition, when to use, when NOT to use, related terms
  Output: Formatted terminology entry + confirmation

  TERMINOLOGY ENTRY FORMAT:
  "[Term]": >
    [Definition in plain language — what it means in this organisation]
    Use: [When this term is appropriate]
    Not: [When NOT to use it — external comms? formal docs? pre-announcement?]
    Related: [Synonyms or near-synonyms]

TYPE 4: PERSON BRIEF
  Input: Person name (or "everyone I'm meeting today" with list)
  Output: Structured brief per person — role, current focus, communication
          guidance, today's context, specific advice for this interaction

  PERSON BRIEF FORMAT:
  ─── [NAME] — [Role] ─────────────────────────────────────────
  Reports to:     [Name]
  Current focus:  [What they're working on]
  Communication:  [How to approach them today]
  Today's context: [Anything live that affects this interaction]
  How to approach: [Specific guidance for today]
  Watch for:       [Anything to be aware of]
  Do not:          [Any specific sensitivities]
  ─────────────────────────────────────────────────────────────

TYPE 5: POST-MEETING UPDATE
  Input: Meeting name, decisions made, new actions, status changes,
         new information about people
  Output: Proposed updates to work.local.md across all relevant layers

  PROPOSED UPDATES FORMAT:
  MEMORY UPDATE PROPOSAL — [Meeting Name] — [Date]
  ════════════════════════════════════════════════════════════
  1. UPDATE: [Section]: [What changes]
     Current: "[Old text]"
     Proposed: "[New text]"
  [Continue for each update]
  Confirm to apply all? Or specify which updates to apply.
  ════════════════════════════════════════════════════════════

TYPE 6: TERMINOLOGY QUERY
  Input: "What does X mean?" or "What do we call Y?"
  Output: Load from terminology dictionary in work.local.md;
          apply in the response; if not found, offer to add

### Sensitivity Handling

Some memory entries contain sensitive information:
  - Succession planning (who is being considered for a role)
  - Personal information about employees (health; family; circumstances)
  - Commercial sensitivities (unannounced projects; pricing)
  - Interpersonal dynamics (conflict; performance concerns)

RULES for sensitive entries:
  - Add to work.local.md with a `sensitivity: RESTRICTED` flag
  - Never surface in outputs where the subject might see them
  - Never include in shared briefings or group outputs
  - Apply only when directly relevant to the specific task

### Memory Maintenance Rules

STALE MEMORY DETECTION:
  Flag any entry in work.local.md that has not been updated in >90 days
  and prompt user to confirm or update.

  Common staleness patterns:
  - Person's role has changed but work.local.md has old title
  - Project status is "IN PROGRESS" but it was completed months ago
  - Terminology entry references a product or team that no longer exists

NEVER DO THESE:
- NEVER add a person entry without confirming the communication style
  observation is accurate (not assumed)
- NEVER apply a person entry's sensitivity notes in a group output
  where the subject might see it
- NEVER mark a project as COMPLETE without noting what was delivered
  and what (if anything) was not delivered — this context matters later
- NEVER add a terminology entry without defining BOTH when to use
  and when NOT to use the term
- NEVER propose memory updates without the user's explicit confirmation —
  suggest; do not apply automatically
