## Core Concept

Delegated Calculation (Guardrail 4) prohibits a Finance Domain Agent from performing calculations internally. The agent writes assumptions to Named Ranges in the model, the spreadsheet engine recalculates deterministically, and the agent reads back results. The result is the model's output, not the agent's estimate — a categorical distinction in finance where only deterministic model results are audit-valid.

## Key Mental Models

The **Write-Calculate-Read** workflow is the single interaction pattern: agent reasons about the input, writes it to the model, the spreadsheet engine calculates, agent reads back the output. **Deterministic What-If** changes one or more assumptions and reads the cascading impact across all dependent outputs. **Strategic Goal-Seeking** reverses the direction — iterating write and read calls to find the input that produces a target output, without the agent ever solving the equation internally.

## Critical Patterns

When the IDFA plugin is active, the agent can write assumption values to Named Ranges, read current values of Named Ranges, inspect the model to map all Named Ranges and dependencies, and read the formula assigned to a Named Range. The agent always writes to Named Ranges, never to cell coordinates. Every number reported to the user must come from reading the model.

## Common Mistakes

The most dangerous violation is calculating internally then reporting the result as if the model produced it. Internal arithmetic may differ from the model due to rounding, conditional overrides, or stale values. The second mistake is solving goal-seeking algebraically instead of iterating through the model. The third is reporting a number before reading it from the model — any number not read from the model is an opinion, not a fact.

## Connections

Guardrail 4 builds on Named Range Priority (Guardrail 1) — the agent writes to and reads from Named Ranges, not cell coordinates. It depends on the three-layer architecture (Lesson 3) for clean separation of assumptions from calculations. It directly enables Capability 2 (Deterministic What-If) and Capability 4 (Strategic Goal-Seeking) validated in the capstone (Lesson 11). The IDFA plugin provides the tools the agent uses to interact with Excel models programmatically.
