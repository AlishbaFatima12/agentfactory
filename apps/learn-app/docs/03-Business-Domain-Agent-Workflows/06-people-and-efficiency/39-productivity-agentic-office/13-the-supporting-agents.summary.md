### Core Concept

The three supporting agents, Memory Keeper, Meeting Intelligence, and Work Tracker: are invisible infrastructure that runs on triggers and weekly schedules, feeding current data to the Chief of Staff so its outputs stay accurate. The system maintains itself; you approve the updates.

### Key Mental Models

- **Trigger-based vs Scheduled**: The Chief of Staff runs on a fixed schedule; the supporting agents activate on events (new person mentioned, meeting ends, delegation created). This makes them invisible in normal operation and precise when they fire.
- **Propose-Then-Confirm**: The Memory Keeper never modifies `work.local.md` autonomously ; it proposes, you confirm. Wrong context propagates wrong outputs to every downstream agent, so the confirmation step is the quality gate, not an inconvenience.
- **Cadence as Dependency Chain**: The weekly maintenance sequence is ordered by dependency, Memory Keeper must run before the Chief of Staff brief (briefs need current context), Work Tracker audit before Meeting Intelligence audit (delegation patterns inform meeting efficiency analysis).

### Critical Patterns

- Memory Keeper fires on: new person, new project, new terminology, meeting completed, decision made.
- Meeting Intelligence delivers prep 30 minutes before any significant meeting and synthesis within 2 hours of any meeting ending.
- Work Tracker delegation lifecycle: T+0 (logged) → T+24hr (follow-up if unconfirmed) → T+48hr (🔴 flag) → midpoint check-in → overdue protocol (1 day / 3 days / 7 days).
- Weekly cadence: Mon 06:30 Memory Keeper → Mon 06:45 Chief of Staff brief → Mon 07:00 digest; Fri 16:00 Work Tracker audit → Fri 17:00 Meeting Intelligence audit → Fri 17:30 week-close.
- Configure all three in the `agent_integrations` section of `work.local.md`.

### Common Mistakes

- Assuming the agents capture everything: they only detect what appears in conversations and MCP-integrated channels, context in unconnected email threads or physical meetings must still be manually added.
- Overdue follow-up messages that sound like reprimands: the Work Tracker's tone is always "any blockers I can help with?", reprimand language damages relationships without improving outcomes.

### Connections

- **Builds on**: Chief of Staff (Lesson 12), delegation (Lesson 7), meeting intelligence skill (Lesson 9), memory architecture (Lessons 3–4)
- **Leads to**: Wiring all four agents together in the capstone configuration (Lesson 14)
