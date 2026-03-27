### Core Concept

Simulation is not complete until you have run all four FTE skills, recorded results in a structured log, and revised any skills that failed. The simulation log is a first-class artifact: it carries forward as the test suite for MCP tool calls in Chapter 69 and as regression test data in later chapters.

### Key Mental Models

- **Simulation log template**: One table per skill with columns for scenario, category, expected output, actual output, pass/fail, and notes. Followed by revisions made and retest results. The structure forces explicit comparison rather than vague impressions.
- **Fresh conversation per retest**: Start a new conversation when retesting after a revision. The previous output must not influence the retest, or the comparison is contaminated.
- **Realistic scenario inputs**: A one-sentence scenario produces a one-sentence response. Expand scenarios to realistic detail to get meaningful output that can be evaluated.
- **Expected first-attempt pass rate**: 60-70% is realistic. If every scenario passes immediately, the scenarios are too easy. Failures that require revision are the mechanism through which skills improve.
- **The adversarial prompt injection test**: A well-designed skill treats embedded override instructions as ordinary CV content and evaluates actual qualifications. A weak skill follows the injection. Discovering this in simulation prevents a security vulnerability from reaching production.

### Critical Patterns

- Pattern recognition across skills: if the same failure type (incomplete data handling, missing anomaly detection) appears in multiple FTE skills, it signals a systematic gap in the skill-writing approach, not isolated bugs
- Each revision must target the specific instruction that caused the failure, not a general rewrite
- The simulation log's value multiplies across chapters: scenario bank becomes MCP test suite, validation criteria become acceptance criteria for tool output

### Common Mistakes

- Not writing down expected output before running the simulation; without a prediction, the evaluation lacks a comparison baseline
- Revising skills broadly after a failure instead of identifying the specific instruction that caused the gap
- Treating the simulation log as disposable after the exercise; it is a carry-forward reference artifact

### Connections

- **Builds on**: Ch 68 L01-L03 (isolation principle, protocol steps, scenario bank categories)
- **Leads to**: Ch 69 MCP Fundamentals (validated skills exposed as callable tools, scenario bank becomes MCP test suite)
