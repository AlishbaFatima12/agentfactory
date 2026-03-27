### Core Concept

A scenario bank is a structured collection of test inputs organized into three categories: happy path (normal inputs confirming the basics), edge cases (boundary inputs exposing real-world messiness), and adversarial scenarios (hostile inputs designed to produce confidently wrong or dangerous output). The categories guarantee systematic coverage rather than random testing.

### Key Mental Models

- **Happy path**: Baseline correctness. Even "easy" inputs can fail on format, missing fields, or unnecessary commentary. Three scenarios cover strong, weak, and middle-range inputs.
- **Edge case**: The most revealing category. Each edge case targets a specific assumption embedded in the skill's instructions. Career changer tests whether "technical experience" is defined narrowly. International format tests whether the skill assumes a US-style resume.
- **Adversarial**: Prompt injection (instructions embedded in a CV to override scoring), contradictory briefs (impossible requirements), and missing fields (incomplete profiles that could trigger hallucination). Discover these vulnerabilities in simulation, not production.
- **Validation criteria from the blueprint**: The success criteria in the Chapter 64 HireFlow Blueprint become the measurement standard for simulation. Clear blueprints produce clear criteria; vague blueprints make simulation inconclusive.

### Critical Patterns

- Edge cases outnumber happy paths intentionally: real candidates are rarely textbook, and that is where skills fail
- Adversarial scenarios require a deliberate "tampering mindset": what inputs would cause the skill to produce confidently wrong output?
- Stopping criterion: keep adding scenarios until three consecutive new scenarios all pass; that is the signal that the skill handles the category's patterns

### Common Mistakes

- Treating the scenario bank as a one-time checklist rather than a living artifact that grows as new failure modes are discovered
- Designing adversarial scenarios only for prompt injection; contradictory briefs and missing fields are equally important classes
- Writing validation criteria that match what the skill produces rather than what a correct output should look like

### Connections

- **Builds on**: Ch 68 L02 (the simulation protocol), Ch 64 HireFlow Blueprint (source of validation criteria)
- **Leads to**: Lesson 4 (run the full scenario bank against all four FTE skills), later chapters where the scenario bank becomes the test suite for MCP tool calls
