### Core Concept

The simulation protocol has three steps: design scenarios, run simulations, evaluate outputs. The loop closes when output fails criteria: fix the skill and retest. The environment is a conversation, not a server. No infrastructure is required; you are testing the intelligence in isolation.

### Key Mental Models

- **Design**: A scenario must be specific enough that the skill's handling of details becomes visible. A vague input produces a vague output that teaches nothing.
- **Run**: Paste the full skill text as context, provide the scenario as input, instruct the agent to process and produce the specified output. Test the exact instructions, not a summary.
- **Evaluate**: Compare actual output against a validation criteria table (expected vs. actual vs. pass/fail). The comparison reveals the gap between what the skill is supposed to do and what it actually does. That gap is where the skill improves.
- **Fix-and-retest loop**: One revision rarely solves everything. The cycle continues until the output meets criteria for the scenario, then moves to the next scenario.

### Critical Patterns

- The career changer scenario exposes a skill's hidden assumption: "technical experience" defaults to direct engineering work, ignoring transferable analytical skills from consulting
- Running the overqualified candidate (score: 91 with no anomaly flags) reveals that high confidence scores can mask unusual situations that need human review
- Each evaluation table row names a criterion, the expected output, the actual output, and pass/fail; this structure makes the gap visible and actionable

### Common Mistakes

- James's mistake: believing a high score on the happy path means the skill is ready, then being surprised by the career changer's score of 34
- Insufficient skill revision scope: adding a sentence about career gaps without addressing transferable skills evaluation or contextual weighting
- Missing anomaly detection: skills that score confidently without flagging unusual situations deprive human reviewers of the signals they need

### Connections

- **Builds on**: Ch 68 L01 (why simulation is necessary), Ch 67 skill writing (the instructions being tested)
- **Leads to**: Scenario bank design (Lesson 3): systematic coverage across happy path, edge case, and adversarial categories
