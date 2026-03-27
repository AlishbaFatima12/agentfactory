### Core Concept

The Five-Phase Map only becomes useful when you can apply it to real projects. This lesson provides six scenarios at different maturity stages, including projects on track, projects that skipped phases, and one team that never started the maturity journey at all. For each, the correct analysis identifies the current phase, the general agent's role, and whether the project has advanced prematurely.

### Key Mental Models

- **Phase identification from evidence**: a concept paper's score, the presence of agent skills, MCP server construction, and simulation results are the concrete signals that place a project in a specific phase
- **Skipped-phase signature**: teams that jump to Phase 3 (or claim to have a "factory") without a concept paper or agent skills are producing domain-ignorant agents, regardless of how sophisticated the code looks
- **Simulation as a Phase 2 gate**: inconsistent simulation results (e.g., 30% variance) signal an underspecified skill; the correct response is to refine in Phase 2, not to proceed and patch later

### Critical Patterns

- A concept paper scored 9.23 is not ready; the team should iterate, not advance
- A 92% simulation accuracy rate (46/50) is strong enough to continue Phase 2 work
- A chain of four API calls with system prompts is a chatbot army, not a factory; no phase of the maturity model is represented

### Common Mistakes

- Treating proximity to the threshold (8.9 or 9.23) as sufficient justification to advance
- Debating whether to proceed after a 30% simulation inconsistency: the answer is always to refine first
- Building code that "forecasts" without a concept paper covering seasonal adjustment, promotional events, or lead times

### Connections

- **Builds on**: all concepts from Lessons 1-3; this lesson applies them without introducing new terms
- **Leads to**: Lesson 5 reflection, where the Three Frames synthesis connects the Maturity Model to Chapters 61 and 62
