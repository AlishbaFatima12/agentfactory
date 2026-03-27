### Core Concept

A sentence-level description of what a factory does is not sufficient to build one. The gap between a wish and a blueprint is the difference between naming a goal and specifying how that goal will be achieved, verified, and maintained when things go wrong.

### Key Mental Models

- **Wish vs. Blueprint**: A wish names the goal and lists the roles. A blueprint defines the workflow end to end, specifies data schemas at every handoff, places human review gates, and measures success with concrete criteria.
- **Agents Are Literal**: Human employees fill specification gaps with judgment. Agents fill them with nothing. The more precise the blueprint, the more consistent and testable the factory.
- **Testability Requires Structure**: You cannot test a wish. You can test a blueprint: does the output match the contract? Does the verification gate catch expected failures? Does the pipeline recover from a timeout?

### Critical Patterns

- The three questions Emma asks (input format, score meaning, conflicting outputs) each expose a dimension of the blueprint that a wish leaves undefined
- "Handles errors gracefully" is a wish embedded in a blueprint; "log error, skip candidate, include in pipeline report" is a specification
- The wish-vs-blueprint distinction applies at every scale: a single FTE specification can be a wish or a blueprint depending on how precisely its contracts are stated

### Common Mistakes

- Writing "HireFlow helps with hiring" and treating it as a sufficient specification before building
- Assuming that knowing the FTE roles (from Chapter 61) means you know the FTE contracts
- Believing a human team's informal process can be replicated by agents who share no written contracts

### Connections

- **Builds on**: Ch 61 (Two-Layered Model, four FTEs), Ch 62 (economic actors and budget constraints), Ch 63 (Agent Maturity Model)
- **Leads to**: Lesson 2 introduces the six-step Domain Decomposition method that converts a wish into a blueprint
