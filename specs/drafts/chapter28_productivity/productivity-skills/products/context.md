---
name: context
version: 1.0
description: >
  Activate for: context, load context, inject context, cross-domain context,
  give me context for, what context do I need, before I work on this, context
  for this task, relevant background, what should I know before, load all
  context, context from HR, context from finance, context from ops, combine
  context, cross-domain brief, multi-domain context.
plugin-commands: /context
---

## CONTEXT INJECTION WORKFLOW

### Purpose

The `/context` command loads specific context from one or more memory layers
and domain agents before a task — so the task output is informed by everything
relevant, not just what is in the current conversation.

This is the integration command: it bridges the Productivity layer with
all domain agents from Chapters 17–27.

### Context Types

TYPE 1: SINGLE-DOMAIN CONTEXT
  Load context from one domain for a specific task.
  Example: "Load finance context before I review the analytics budget proposal"

TYPE 2: CROSS-DOMAIN CONTEXT
  Load context from multiple domains simultaneously.
  Example: "Load HR + Finance + Ops context for onboarding Dr. Sana Mirza"

TYPE 3: PERSON CONTEXT
  Load everything known about a specific person before an interaction.
  Example: "Load full context on Omar before our budget conversation"

TYPE 4: PROJECT CONTEXT
  Load full project context including cross-domain implications.
  Example: "Load full context on Project Nighthawk"

TYPE 5: DECISION CONTEXT
  Load context needed to make a specific decision well.
  Example: "Load context for the Islamabad expansion decision"

### Cross-Domain Context Output Structure

  CONTEXT BRIEF — [Task/Topic]
  Loaded from: [Domain(s) + work.local.md layers used]
  ════════════════════════════════════════════════════════════
  CORE CONTEXT:
  [The most important things to know for this task]

  [DOMAIN 1] CONTEXT:
  [What is known from this domain that is relevant]
  [Current status; recent changes; open items]

  [DOMAIN 2] CONTEXT:
  [Same structure]

  PEOPLE CONTEXT:
  [Anyone involved — communication style; current focus; approach tips]

  WHAT TO WATCH FOR:
  [Specific things to pay attention to given the full context]

  GAPS IN CONTEXT:
  [What is NOT known that would be useful — and how to get it]
  ════════════════════════════════════════════════════════════

### Integration Protocol

When loading cross-domain context, check each configured domain:

  HR domain (from Ch. 26 skills):
    Check: Is anyone involved in a new hire / onboarding / performance situation?
    Check: Any HR obligations or approvals affecting this task?

  Finance domain (from Ch. 17–22 skills):
    Check: Any budget approvals pending that affect this task?
    Check: Any financial constraints or targets relevant?

  Operations domain (from Ch. 27 skills):
    Check: Any vendor, compliance, or change management items relevant?
    Check: Any SOPs that govern this activity?

  Sales domain (from Ch. 23 skills):
    Check: Any client or pipeline considerations?

  Product domain (from Ch. 25 skills):
    Check: Any product roadmap dependencies?

## NEVER DO THESE

- NEVER load context from a domain that is not relevant to the task —
  more context is not always better; irrelevant context creates noise
- NEVER omit the "gaps in context" section — knowing what you do not
  know is as important as knowing what you do know
- NEVER surface sensitive person entries (marked sensitivity: RESTRICTED)
  in cross-domain context outputs where the subject might see them
