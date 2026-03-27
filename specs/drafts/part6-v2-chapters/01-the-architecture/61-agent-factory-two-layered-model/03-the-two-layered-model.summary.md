### Core Concept

Agent architectures require two complementary layers: a Factory Layer for organizational governance and an Edge Layer for individual personalization. Neither layer works alone. The Factory Layer without the Edge Layer produces reliable output that humans cannot interact with naturally. The Edge Layer without the Factory Layer produces personalized chaos: three hiring managers, three different screening criteria, Monday-morning reconciliation.

### Key Mental Models

- **Factory Layer**: AI workers operating under organizational governance. Five characteristics: organizational ownership, defined contracts, verification gates, audit trails, governed access. The company owns these agents, defines their contracts, and verifies their output.
- **Edge Layer (Identic AI)**: Personal agents that adapt to individual preferences and goals. Your Claude Code setup with custom skills, memory files, and personal governance is already an Edge Layer agent.
- **Recursion**: The builder is an Edge Layer agent (your Claude Code). The product is a Factory Layer system (HireFlow). Part 6 is the builder constructing the product; this recursion is the central insight of the Agent Factory paradigm.

### Critical Patterns

- The company/employee analogy maps precisely to the Factory Layer: job description = role definition, HR access controls = governed access, formal data requests between departments = data contracts.
- A hiring manager who asks "What is this candidate's distributed systems experience specifically?" needs an Edge Layer agent to take the static factory output and have a conversation about it. The Candidate Summarizer is done; it produced its contracted output and moved on.
- The Edge Layer is not a dashboard: a dashboard shows data, an Edge Layer agent helps you think about data.

### Common Mistakes

- Conflating "more powerful AI" with "factory layer": the Factory Layer distinction is about governance and contracts, not model capability.
- Building only the Factory Layer and treating dashboards as sufficient human interfaces: dashboards cannot converse or adapt to follow-up questions.
- Assuming personal Claude Code configuration is informal or temporary: it is a fully functional Edge Layer agent already in place.

### Connections

- **Builds on**: Lesson 2's three chatbot-army failure modes (no contracts, no protocols, no governance); the organizational governance concepts introduced there.
- **Leads to**: Lesson 4's governance detail (intent, verification, outcomes); Lesson 5's HireFlow FTE pipeline, which is the Factory Layer being designed.
- **Referenced later**: Ch 64, 67, 72 build on this two-layered model from different angles (blueprint, skill decomposition, SDK implementation).
