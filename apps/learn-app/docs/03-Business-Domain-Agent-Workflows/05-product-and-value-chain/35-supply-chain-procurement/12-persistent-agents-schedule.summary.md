### Core Concept

The five persistent agents transform individual on-demand skills into a continuous operating system — each agent automates a monitoring workflow the student has already performed manually. The critical design decision is escalation calibration: the threshold between hot alerts (immediate, any time) and weekly digest items determines whether the system creates value or creates alert fatigue.

### Key Mental Models

- **On-Demand to Continuous**: Each agent corresponds to an earlier manual skill — deploying an agent does not teach something new, it automates what the student already knows how to do
- **Hot Alert vs. Weekly Digest**: Financial distress, OTD crisis = immediate interrupt. Trend analysis, minor movements = weekly brief. Miscalibrated escalation rules make the system noise, not signal.
- **System Dependency Chain**: Agent configurations built here carry into the Capstone — the thresholds set in Exercise 7 are the operating parameters for the end-to-end deployment

### Critical Patterns

- Configure all five agents before the first alert, not reactively — threshold calibration is a design decision, not an operational response
- Use `/schedule` to connect each agent to a recurring cadence — without scheduling, agents remain on-demand skills
- Generate the first weekly executive brief using `/supply-chain-brief` immediately after deployment — verify the output format before relying on it for CPO consumption
- Define the specific criteria for a CPO immediate interrupt before deploying — "significant issue" is not a threshold

### Common Mistakes

- Setting escalation thresholds too low — alert fatigue defeats the purpose of continuous monitoring
- Deploying agents without testing output format — the weekly brief format matters as much as the data it contains
- Treating the five agents as independent — they share data dependencies (vendor classifications, risk thresholds) that must be consistent across all five

### Connections

- **Builds on**: All preceding skills (Lessons 3-10) — each agent automates a specific skill's workflow
- **Leads to**: Capstone (Lesson 14) — agent configurations from Exercise 7 are the operating infrastructure for the end-to-end cycle
