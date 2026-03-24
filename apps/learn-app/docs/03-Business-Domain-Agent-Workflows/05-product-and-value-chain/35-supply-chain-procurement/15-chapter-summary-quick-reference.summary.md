### Core Concept

Every supply chain problem is an information problem before it is an operational problem: the data to detect reconciliation errors, vendor distress, and outdated routing decisions already exists. This lesson consolidates the chapter into a deployable reference: all eight commands, all five agents, key thresholds, and the exercise dependency chain.

### Key Mental Models

- **Eight Skills, Five Agents**: Skills are on-demand analytical tools; agents are continuous monitoring processes. Both are required for a complete procurement operating system.
- **Command Rename Table**: `/invoice-reconcile` (not `/reconcile`), `/vendor-communicate` (not `/communicate`), `/supply-network-design` (not `/network-design`): three collisions with Anthropic-owned surfaces
- **Exercise Dependency Chain**: Exercises are not independent; Exercise 1's classification register feeds Exercises 2, 4, 6, and 8; Exercise 7's agent configurations carry into the Capstone

### Critical Patterns

- Bookmark this lesson: it is the reference for real deployments, not a lesson to study sequentially
- Use the quick-reference tables during deployment: command inputs, agent monitoring scope, default schedules, OTD benchmarks by vendor tier, invoice tolerance defaults
- Check the exercise dependency chain before resuming work after a break: the output from an earlier exercise is the input to the next
- The "what does not change" section is load-bearing: supplier relationships, commercial negotiations, and escalation judgment remain human responsibilities

### Common Mistakes

- Using spec command names during deployment (`/reconcile`, `/communicate`, `/network-design`): these collide with Anthropic-owned surfaces and produce unexpected behaviour
- Treating this lesson as a summary to read once: it is a reference to return to repeatedly during deployment
- Assuming the agent default schedules are correct for every organisation: review thresholds and cadences against your actual vendor portfolio before going live

### Connections

- **Builds on**: All 14 lessons of Chapter 35: this lesson consolidates, not introduces
- **Leads to**: Real deployment: the quick-reference tables, command names, and exercise artefacts are the materials a procurement team uses in production
