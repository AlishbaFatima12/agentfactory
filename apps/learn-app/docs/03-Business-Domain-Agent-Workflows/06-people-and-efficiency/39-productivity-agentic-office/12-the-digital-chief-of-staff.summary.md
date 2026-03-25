### Core Concept

The Digital Chief of Staff is an orchestration agent that synthesises intelligence from all domain agents and `work.local.md` into a coherent operational picture, delivered on schedule, without prompting, every day. Configuring it converts eleven lessons of manual practice into an autonomous system.

### Key Mental Models

- **Orchestration vs Execution**: The Chief of Staff does not do domain work ; it ensures the person doing that work always knows what matters, what is at risk, and what needs attention today.
- **Threshold Monitoring as Early Warning**: The digest is visible intelligence; threshold monitoring is invisible ; it fires when an item has gone too long without attention, before anyone has noticed the problem.
- **Brief Timing = Value**: The week-ahead brief only works if delivered before the day begins. Late delivery changes its function from frame-setting to catch-up.

### Critical Patterns

- Three daily task categories: digest delivery (07:00), real-time intelligence (on demand), and threshold monitoring (continuous).
- Week-ahead brief has five required sections: Boulders, Critical Milestones, Decisions Needed, Delegation Checks, What Would Make This Week a Success.
- Week-close summary separates Completed, Carries Forward, Set Up for Monday, and Next Week Preview, information only, no judgment.
- Three-level escalation: Level 1 (🟡 digest flag) → Level 2 (explicit message after 2 days) → Level 3 (COO/Executive prompt after 14 days).
- Configure via `chief_of_staff` YAML block in `work.local.md`; activate with `/agentic-office:schedule`.

### Common Mistakes

- Setting escalation thresholds too low creates alert noise, users start ignoring flags, defeating the entire monitoring function.
- Treating the Chief of Staff as a replacement for domain expertise: it synthesises outputs, but you still need judgment to evaluate what it surfaces.
- Letting the week-close become evaluative, framing carries-forward as failure rather than information damages the output's usefulness.

### Connections

- **Builds on**: Daily digest (Lesson 8), executive dashboard (Lesson 10), cross-domain intelligence (Lesson 11)
- **Leads to**: The three supporting agents that feed the Chief of Staff's context (Lesson 13)
