### Core Concept

Simulation provides the evidence that crystallization has occurred at the skill level. When skills consistently pass simulation across all three scenario categories, domain knowledge has solidified from fluid exploration into structured, testable behavior. The 9.5+ quality threshold from the Agent Maturity Model maps directly to skills passing 90%+ of scenarios with correct format, completeness, accuracy, and edge case handling.

### Key Mental Models

- **Skills as hypotheses vs. validated specifications**: Before simulation, a skill is a hypothesis about what the agent should do. After passing simulation, it is a validated specification with documented evidence of correct behavior.
- **Failures are the mechanism, not the measure**: The value is not whether skills pass on the first attempt; the value is in the revisions each failure produces. Skills improved by simulation failures are more robust than skills that never failed.
- **Phase transition readiness**: Moving from Incubate to Build Specialist is justified when the simulation log shows all four FTE skills performing at the threshold level across all scenario categories.
- **Nothing is wasted**: The scenario bank becomes the MCP test suite. The validation criteria become acceptance criteria for tool output. The simulation log becomes the regression dataset. Every artifact from Chapter 68 carries forward.

### Critical Patterns

- The crystallization threshold is not binary: it is a quality signal measured by consistent performance across scenario categories, not a single perfect run
- The sequence (Ch 67 write, Ch 68 validate, Ch 69 expose as tools) is intentional; shortcuts in the sequence create compounding debt in later chapters

### Common Mistakes

- Interpreting failures as a sign that the chapter exercise failed; realistic simulation produces 2-4 skill revisions per FTE, and those revisions are the point
- Discarding the simulation log after the exercise instead of saving it as the carry-forward reference artifact

### Connections

- **Builds on**: Ch 63 Agent Maturity Model and crystallization concept, Ch 68 L01-L04 (full simulation cycle)
- **Leads to**: Ch 69 MCP Fundamentals (validated intelligence exposed as callable tools; scenario bank becomes MCP test suite)
