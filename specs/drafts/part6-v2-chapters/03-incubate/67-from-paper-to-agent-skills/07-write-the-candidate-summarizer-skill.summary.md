### Core Concept

The Candidate Summarizer is the most complex HireFlow FTE because it does not execute a single task: it aggregates data from all three upstream FTEs and synthesizes a decision-ready brief. The unique design challenge is encoding recommendation logic: under what conditions does the agent recommend "proceed," "hold," or "reject"? Explicit thresholds, conflicting signal resolution, and the three-minute readability constraint make this skill qualitatively different from the three that precede it.

### Key Mental Models

- **Aggregation requires explicit thresholds**: Advisory language ("recommend proceed if the candidate looks strong") is not an instruction. A Principle for recommendation logic must specify the threshold: "If overall weighted score exceeds 7.0, recommend proceed. If 5.0-7.0, recommend hold. Below 5.0, recommend reject. Override to 'hold' if any single dimension scores below 3.0 regardless of overall score."
- **Conflicting signals must be surfaced, not resolved**: If the Resume Screener gave a high overall score but the gap analysis shows a critical dimension below 3.0, the Candidate Summarizer does not choose which signal wins. It presents both, explains the conflict, and lets the hiring committee decide. Autonomous conflict resolution is a human judgment call the agent should not make.
- **Three-minute readability is a design constraint**: Every element in a committee brief must earn its place. Background information, verbose scoring justifications, and narrative context are omitted. The format is: 2-3 sentence candidate summary, recommendation, supporting evidence, risk factors, conflicting signals, suggested next steps.

### Critical Patterns

- The Candidate Summarizer receives data from three upstream skills: job description and scoring rubric (Job Spec Writer), per-dimension scores and gap analysis (Resume Screener), and question set with scoring criteria (Interview Q Generator). All three inputs must be present; a missing upstream output breaks aggregation
- Candidate B (overall score 5.6, strong technical but weak qualifications) is a conflicting signal case: not a clear proceed and not a clear reject. The brief should surface the conflict explicitly and recommend "hold pending verification of non-traditional background policy"
- Pipeline validation before Chapter 68: after writing all four skills, a data flow check confirms that each upstream output format matches the downstream input expectations. Any field mismatch found here costs minutes to fix; found after MCP integration, it costs hours

### Common Mistakes

- Writing recommendation logic as a single vague Principle: "recommend proceed if the candidate is a strong fit." The agent has no threshold, no definition of "strong fit," and no handling for borderline cases. Specific numeric thresholds and override conditions are required
- Hiding conflicting signals. If high screening scores and weak interview performance point in opposite directions, omitting one from the brief conceals information the committee needs. The brief must surface both and present the conflict without resolving it
- Not validating the complete pipeline before moving to Chapter 68. The Candidate Summarizer is the last skill; validating all four skills' data contracts together is the final step of Incubate, not an optional cleanup task

### Connections

- **Builds on**: All three upstream skill output formats (Lessons 4-6); inter-FTE data contracts from Lesson 3
- **Leads to**: Complete four-skill pipeline, ready for simulation testing in Chapter 68; skills validated here are the inputs to the simulation protocol
