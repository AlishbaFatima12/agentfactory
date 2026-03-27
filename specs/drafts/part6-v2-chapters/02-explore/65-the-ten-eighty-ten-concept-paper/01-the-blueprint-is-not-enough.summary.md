### Core Concept

A Factory Blueprint is an architecture document: it describes what the factory does. It does not argue that the factory should exist in its current form. The Concept Paper fills that gap by testing the blueprint's assumptions against the actual domain before any code is written.

### Key Mental Models

- **Blueprint vs. Concept Paper**: The blueprint answers "how do the parts connect?" The concept paper answers "should these parts exist at all, in this form, for this domain?"
- **Assumption Debt**: A blueprint built on untested assumptions is a detailed plan to build the wrong thing. Every unverified assumption is a debt that compounds when cascading data contracts break during implementation.
- **Cascade Risk**: In HireFlow, a flawed scoring model in the Resume Screener would invalidate the Candidate Summarizer's input contract, which would invalidate the orchestrator's pipeline logic. Fixing one error forces rebuilding all downstream components.

### Critical Patterns

- James's scoring model assumed binary qualification matching (present or absent), but technical roles require spectrum matching (experienced vs. expert vs. exceptional). This mismatch would not surface until the factory was fully built.
- A blueprint is valid for the experience of the person who wrote it. It may not be valid for the domain they are targeting.
- Emma's logistics routing example: a sound architecture that collapsed on the first client with cold-chain requirements. Six weeks of rework for an edge case a concept paper would have caught in twenty minutes.

### Common Mistakes

- Treating blueprint completion as a signal to start building (the blueprint earns the right to write a concept paper, not the right to write code)
- Assuming that personal experience in a related domain validates blueprint assumptions about the target domain
- Planning to fix invalid assumptions post-build ("I'll refactor when I see the results") without accounting for contract cascades

### Connections

- **Builds on**: Factory Blueprint (Ch 64, four FTE specs, data contracts, workflow map); Agent Maturity Model Phase 1 Explore (Ch 63)
- **Leads to**: The 10-80-10 Rule (Lesson 2), which provides the structure for writing the concept paper that validates the blueprint
