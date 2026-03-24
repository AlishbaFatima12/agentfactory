# The Revenue Engine; Summary

## Core Concept

The Revenue Engine is a three-layer plugin architecture (Anthropic Sales + Marketing + Agent Factory RevOps extension) that replicates a top rep's 45-minute research depth in under four minutes. The lesson establishes the foundational skill of the chapter: detecting when the agent fabricates data in prospect research briefs, because acting on hallucinated claims destroys credibility permanently.

## Key Mental Models

- **Three-plugin architecture**: Sales plugin (6 skills, 3 commands) + Marketing plugin (5 skills, 7 commands) + RevOps extension (15 skills) working as a coordinated stack
- **The Preparation Gap**: 45 minutes vs 4 minutes of research per prospect, multiplied across hundreds of accounts, explains the performance gap between top and average reps
- **Hallucinated Data** (agent error type #1): The agent invents facts: revenue estimates, internal processes, inferred connections: that sound authoritative but have no source
- **Verification Hierarchy**: Cited sources and public records sit above the verification line; financial estimates and internal processes sit below it
- **Three Rules of Hallucination Detection**: (1) Private financials are always suspect, (2) the more specific the unverifiable claim, the more likely it is fabricated, (3) inferred connections are not confirmed connections
- **sales-marketing.local.md**: The configuration file that gives the agent business-specific ICP context, changing output from generic to tailored

## Critical Patterns

- The ICP MATCH header in research output confirms the extension is active
- Research briefs follow a WHO / WHAT / WHEN / PAIN / HOOK structure
- Always classify claims as VERIFIED, PLAUSIBLE, or SUSPECT before acting on them
- Compare briefs before and after configuring sales-marketing.local.md to see how configuration shapes output

## Common Mistakes

- Trusting revenue estimates for private companies (the agent infers from benchmarks, not data)
- Treating inferred internal processes (e.g., "SLA tracking via spreadsheets") as confirmed intelligence
- Citing unverifiable claims out loud in meetings: one fabricated fact taints every accurate insight
- Skipping the extension installation and not noticing the missing ICP MATCH header

## Connections

- The sales-marketing.local.md skeleton created here is completed with data-driven ICP dimensions in **L02**
- Hallucination detection is the foundation skill applied in every subsequent lesson
- The demo dataset (NexaFlow Technologies, 20 closed-won deals, 5 prospects, 10 pipeline deals) is referenced throughout the entire chapter
- The Verification Hierarchy informs how enrichment data is evaluated in **L04** and how outreach claims are audited in **L05**
