### Core Concept

Chapter 39 is the integration layer that turns a collection of capable domain agents into something that behaves like an organisation — by giving all agents a shared context through `work.local.md`. When it works, Claude stops being a chatbot you brief every session and starts behaving like a knowledgeable colleague.

### Key Mental Models

- **Context as the Differentiator**: A domain agent without shared context is a capable specialist who starts from zero every session. The same agent with complete `work.local.md` context is a colleague who knows the organisation. The intelligence is in the context, not the agent.
- **Two Plugins, Zero Overlap**: Official `productivity` plugin owns task CRUD, memory management, and the dashboard; custom `agentic-office` plugin owns professional intelligence, agents, and cross-domain coordination. Never use bare commands without the plugin prefix.

### Critical Patterns

- Official plugin: `/productivity:start`, `/productivity:update`, `/productivity:update --comprehensive`.
- Custom plugin: 10 commands from `/agentic-office:workplace-context` through `/agentic-office:schedule`.
- Four agents: Chief of Staff (scheduled), Memory Keeper (trigger-based), Meeting Intelligence (calendar-triggered), Work Tracker (daily pull + event-triggered).
- Four memory layers: Personal (L03), Team (L04), Projects (L05), Organisational (L03).
- Seven sections of `work.local.md`: personal, team, projects, organisational, digest config, dashboard config, agent integrations.

### Common Mistakes

- Using bare `/task` or `/memory` without the plugin prefix — these are ambiguous in a two-plugin system and may route to the wrong skill.
- Treating setup as a one-time event: the maintenance cadence (daily/weekly/monthly/quarterly) is what keeps the system valuable after the initial configuration.

### Connections

- **Builds on**: Every lesson in Chapter 39 (Lessons 1–14)
- **Leads to**: Chapter 40 — The Intrapreneurship Agent (capstone of Part 3)
