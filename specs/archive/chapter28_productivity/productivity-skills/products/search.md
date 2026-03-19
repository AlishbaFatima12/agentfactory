---
name: search
version: 1.0
description: >
  Activate for: search, find, look up, what do we know about, what's the
  history on, find everything about, search memory, search projects, find
  the decision on, when did we decide, what was agreed, find the person,
  who knows about, cross-context search, search all, find in memory,
  what have we discussed about, pull everything on.
plugin-commands: /search
---

## CROSS-CONTEXT SEARCH WORKFLOW

### Search Scope

Search across all four memory layers simultaneously:
  PERSONAL:       Working style; current focus; priorities
  TEAM:           Person entries; communication notes; relationship history
  PROJECTS:       Project names; codenames; status; decisions; milestones
  ORGANISATIONAL: Terminology; meeting notes; decision log; action log

### Search Output Structure

  SEARCH RESULTS: "[Query]"
  ════════════════════════════════════════════════════════════
  Found in:

  PROJECT MEMORY:
  [Relevant project entries — name; status; connection to query]

  MEETING NOTES / DECISION LOG:
  [Relevant decisions; when made; by whom; context]

  PEOPLE MEMORY:
  [Relevant person entries — role; connection to query]

  TERMINOLOGY:
  [Relevant term definitions]

  TASK / DELEGATION LOG:
  [Any active or past tasks related to query]

  RECOMMENDED NEXT STEP:
  [Specific actionable recommendation based on search results]
  ════════════════════════════════════════════════════════════

### Search Behaviour Rules

  IF FOUND: Surface all relevant entries; note the layer each came from
  IF NOT FOUND: Say explicitly "Not in workplace memory" —
    do not fabricate; offer to add if the user can provide the information
  IF PARTIAL: Surface what exists; flag what is missing;
    offer to add the missing information

### Cross-Reference Pattern

For queries that span multiple layers:
  "What do we know about [topic]?"
  → Search all layers simultaneously
  → Group results by layer
  → Synthesise: "Here is the complete picture across all memory layers"

  "When did we decide [X]?"
  → Search decision log first
  → Cross-reference with meeting notes
  → Surface: decision + date + context + who was involved

## NEVER DO THESE

- NEVER return search results from memory you do not have — if it is
  not in work.local.md, say so clearly
- NEVER search only one layer when the query could span multiple
- NEVER omit the recommended next step — search without a
  recommended action is information without utility
