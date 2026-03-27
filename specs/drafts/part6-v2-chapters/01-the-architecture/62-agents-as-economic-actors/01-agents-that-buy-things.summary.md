### Core Concept

Most agent factories treat resource allocation as a human responsibility: you provision API keys, credits, and storage in advance, and agents consume what they are given. This lesson introduces a different model. AI agents are beginning to act as economic actors: entities that evaluate costs, compare options, and acquire resources autonomously within governed boundaries. The "spending envelope" enforces a ceiling on what the agent can acquire without human approval. This is not agents going rogue. It is the department-manager model applied to software.

### Key Mental Models

- **Tool vs. Economic Actor**: An agent-as-tool uses what it is given. An agent-as-economic-actor can go get what it needs, within pre-set limits and with a full audit log.
- **Spending Envelope**: A ceiling on autonomous acquisition. The agent operates below the ceiling without human intervention; above it, a human must approve. The logistics agent in the article had one.
- **Build the Plumbing Early**: In Part 6, you will not build an agent that purchases things. You will build the budget tracking, audit logs, and spending envelopes that economic participation rides on. Designing this infrastructure at the foundation is nearly free. Retrofitting it is a rewrite.

### Critical Patterns

- The logistics AI saved $40K by provisioning compute autonomously during a demand spike, within a pre-approved budget and with a full audit log
- James's instinct ("I provision it, they consume it") describes most agent factories today, and is a limitation for unexpected edge cases
- The spending envelope analogy is precise: a department manager with a purchase order limit and an expense report, not a rogue employee with a credit card

### Common Mistakes

- Treating agent resource allocation as a "deal with it later" concern (retrofitting it is expensive and disruptive)
- Confusing economic participation with removing human control (the ceiling and audit log are exactly how control is maintained)
- Assuming edge cases are rare (every production system is a collection of edge cases)

### Connections

- **Builds on**: Ch 61 Two-Layered Model (governance layer, four HireFlow FTEs)
- **Leads to**: Self-provisioning factories (Lesson 2), which asks what changes when the architecture is designed for economic participation from the start
