### Core Concept

The journey from idea to production follows five phases, each producing a specific deliverable that feeds the next. Missing a phase is not a shortcut: it is a debt that shows up as defects in every downstream phase. The Five-Phase Map gives developers a sequence, a set of gates, and a clear picture of what the general agent's role is at each stage.

### Key Mental Models

- **Phase 1 (Explore)**: the general agent as Director; uses the 10-80-10 rule to co-produce a concept paper; gate: 9.5+ quality threshold across multiple LLM evaluators
- **Phase 2 (Incubate)**: the general agent shifts to Builder (early); extracts agent skills, runs simulations, builds MCP servers; gate: simulation consistency
- **Phase 3 (Build Specialist)**: Builder (full); constructs Digital FTEs with SDKs, databases, APIs; gate: evaluation pass rates
- **Phase 4 (Cloud Deploy)**: containerization, networking, CI/CD; Part 7 territory
- **Phase 5 (Scale)**: multi-tenancy, load balancing, production SLAs; Part 7 territory
- **10-80-10 rule**: write the framing (10%) and decisions (10%) yourself; let the AI draft the bulk research (80%); prevents both "accepts AI framing uncritically" and "too slow to do manually"

### Critical Patterns

- Every phase produces a deliverable that the next phase consumes; the chain is linear and not optional
- Part 6 covers Phases 1-3 plus Architecture preparation (Chapters 61-64); Part 7 covers Phases 4-5
- Crystallization is driven by validation pressure (the 9.5 threshold), not calendar time or team confidence

### Common Mistakes

- James skipped Phases 1 and 2 entirely in Lesson 1, producing a Phase 3 artifact with no Phase 1 or 2 inputs
- Treating an 8.7 concept paper score as "close enough" and advancing anyway

### Connections

- **Builds on**: Incubator/Specialist distinction from Lesson 2 (phases formalize those two roles into a full sequence)
- **Leads to**: Lesson 4 (apply the map to real scenarios) and Ch 64 (blueprint the factory before Phase 1 begins)
