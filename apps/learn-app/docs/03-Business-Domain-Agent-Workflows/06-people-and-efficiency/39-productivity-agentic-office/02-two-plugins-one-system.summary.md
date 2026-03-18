### Core Concept

Chapter 39 requires two plugins working together: the official Productivity plugin (Anthropic) provides the file infrastructure — TASKS.md, CLAUDE.md, memory/, dashboard.html — and the custom Agentic Office plugin (Panaversity) adds the professional intelligence layer — 9 skills, 4 agents, and work.local.md. Neither plugin alone is sufficient; they are the storage layer and the intelligence layer of the same system.

### Key Mental Models

- **Storage Layer vs Intelligence Layer**: The official plugin stores tasks and working memory. The custom plugin reasons about them — prioritising, delegating, briefing, meeting-supporting. Use the official plugin to _store_ tasks; use the custom plugin to _think_ about them.
- **Zero Trigger Overlap**: The two plugins divide natural language by vocabulary. The official plugin owns "task", "remember", "who is", "start", "update". The custom plugin owns "brain dump", "prioritise", "delegate", "daily digest", "workplace memory". They never compete for the same input — by design.
- **Files Persist, Sessions Don't**: Installing the plugins is a one-time step. The files they create (TASKS.md, CLAUDE.md, memory/, work.local.md) persist between sessions. This is the foundation for the memory that every subsequent lesson builds on.

### Critical Patterns

- Run `/productivity:start` to create the four infrastructure files; answer the initial context questions to seed CLAUDE.md
- Run `/agentic-office:setup` to create the work.local.md template — empty at this point, built out in Lessons 3-5
- Verify both plugins are active: `/productivity:update` confirms the official plugin; `/agentic-office:workplace-context` confirms the custom plugin
- dashboard.html is a local file opened in the browser — not a cloud service; it reflects your local task and memory state

### Common Mistakes

- Treating the two plugins as alternatives — they serve different functions and both are required
- Assuming work.local.md replaces CLAUDE.md — CLAUDE.md is the official plugin's hot cache for recent sessions; work.local.md is the custom plugin's structured professional memory; both coexist
- Skipping the initial context questions after `/productivity:start` — answering them seeds the first useful CLAUDE.md entries

### Connections

- **Builds on**: The Context Problem (Lesson 1) — this lesson creates the infrastructure that solves it
- **Leads to**: Building the four memory layers (Lessons 3-5) — work.local.md is now created and ready to be populated
