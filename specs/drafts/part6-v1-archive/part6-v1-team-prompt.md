# Part 6: Building Agent Factories — Team Prompt

Create an agent team to design and write Part 6 of _The AI Agent Factory_: "Building Agent Factories." This is a 30-chapter part where students build HireFlow, an AI-powered recruitment factory with four Digital FTEs, using the five-phase maturity journey. Every chapter teaches a concept through PRIMM-AI+ or Socratic pedagogy, and every programming chapter produces eval-tested code.

**Source material (governing artifacts):**

- V4 30-chapter outline: `specs/drafts/part5_building_agent_factory/part5_v4_outline.md`
- Chapter author system prompt: `specs/drafts/part5_building_agent_factory/part5_chapter_author_system_prompt.md`
- README instructions: `specs/drafts/part5_building_agent_factory/part5_readme.md`

**Output directory:** `apps/learn-app/docs/06-Building-Agent-Factories/`
(All existing content in this directory is OLD WORK being replaced.)

**Reference lesson for format:** `apps/learn-app/docs/05-Building-OpenClaw-Apps/56-meet-your-first-ai-employee/01-ai-employee-moment.md`

**Constitution:** `.specify/memory/constitution.md`

You are the team lead. You coordinate. You do NOT write content yourself. Spawn each worker below as a TEAMMATE in the agent team (not as a subagent). Use the shared task list to track all work. Enforce phase ordering: Phase 1 must complete before Phase 2 starts, Phase 2 before Phase 3, and so on.

---

## Phase 1: Architect (1 teammate)

Spawn a teammate named **architect**. Model: Opus. Mode: plan.

**Prompt:**

"You are the architect for Part 6: Building Agent Factories.

Your job: map the v4 30-chapter outline into the actual book file structure, design per-chapter file paths, assign chapters to writers, and produce the specification documents that every writer needs.

READ IN ORDER:

1. V4 outline: `specs/drafts/part5_building_agent_factory/part5_v4_outline.md` (this is the COMPLETE chapter-by-chapter plan)
2. Author system prompt: `specs/drafts/part5_building_agent_factory/part5_chapter_author_system_prompt.md` (voice, templates, code rules, character profiles)
3. README: `specs/drafts/part5_building_agent_factory/part5_readme.md` (generation workflow and recommendations)
4. Reference lesson format: `apps/learn-app/docs/05-Building-OpenClaw-Apps/56-meet-your-first-ai-employee/01-ai-employee-moment.md`
5. Constitution: `.specify/memory/constitution.md`

THE 30-CHAPTER STRUCTURE (from v4 outline):

Section I: Architecture (C1-C4) — Socratic template

- C1: The Agent Factory and the Two-Layered Model
- C2: Agents as Economic Actors
- C3: The Agent Maturity Model
- C4: The HireFlow Blueprint

Section II: Explore (C5-C6) — Socratic template

- C5: The 10-80-10 Concept Paper
- C6: The Domain Mastery Gate

Section III: Incubate (C7-C11) — Hybrid + PRIMM-AI+

- C7: From Paper to Agent Skills (Hybrid)
- C8: Simulation-Driven Validation (Socratic)
- C9: MCP Fundamentals (PRIMM-AI+)
- C10: Building Custom MCP Servers (PRIMM-AI+)
- C11: Agent Skills and MCP Code Execution (PRIMM-AI+)

Section IV: Build Specialist (C12-C30) — PRIMM-AI+ (except C12 Socratic)

- C12: Introduction to Agent SDKs (Socratic)
- C13: Anthropic Claude Agents SDK
- C14: OpenAI Apps SDK
- C15: The NanoClaw Architecture
- C16: Relational Databases with SQLModel
- C17: Vector Databases and RAG
- C18: Building the Job Spec Writer FTE (FULL scaffolding)
- C19: Building the Resume Screener FTE (REDUCED scaffolding)
- C20: Building the Interview Q Generator FTE (MINIMAL scaffolding)
- C21: Building the Candidate Summarizer FTE (INDEPENDENT)
- C22: FastAPI for Agents
- C23: ChatKit Server for Agents
- C24: Agent Coordination and Multi-FTE Orchestration
- C25: Augmented Memory for Agents
- C26: Knowledge Graphs and GraphRAG
- C27: Security for Agent Factories
- C28: TDD for Agents
- C29: Evals: Measuring Agent Performance
- C30: The HireFlow Factory Capstone

CHAPTER NUMBERING:
The v4 outline uses C1-C30 (relative numbering). In the book, Part 6 starts at Chapter 61. Map as:

- C1 → Chapter 61, C2 → Chapter 62, ..., C30 → Chapter 90
- Folder names: `61-agent-factory-two-layered-model/`, `62-agents-as-economic-actors/`, etc.

CHAPTER TYPES:

- Socratic chapters (C1-C6, C8, C12): 6-section template (Opening Scenario → Guided Discovery → Concept Crystallization → Applied Exercise → Reflection → Chapter Quiz)
- PRIMM-AI+ chapters (C9-C11, C13-C30 except C12): 7-section template (Why → Predict+Run → Investigate → Parsons → Modify → Make → Rubric)
- Hybrid chapter (C7): Socratic + PRIMM-AI+ for skill-writing

HIREFLOW RUNNING PROJECT:
Four Digital FTEs: Job Spec Writer, Resume Screener, Interview Question Generator, Candidate Summarizer. Built progressively with scaffolding withdrawal (C18: Full, C19: Reduced, C20: Minimal, C21: Independent).

DELIVERABLES:

1. **Master Architecture Spec** at `specs/drafts/part6-architecture-spec.md`:
   - Complete directory skeleton: 30 chapter folders with lesson files per chapter
   - Per-chapter: chapter type (Socratic/PRIMM-AI+/Hybrid), lesson count, scaffolding level
   - Writer assignments (6 writers, ~5 chapters each)
   - Build dependency chain (which chapters reference which)
   - Economic actors thread tracking (C2, C4, C24, C27, C30)
   - SmartNotes integration points (C1, C23, C30)
   - Estimated lesson count per chapter (Socratic: 5-8, PRIMM-AI+: 6-10)

2. **Domain Wisdom Brief** at `specs/drafts/part6-domain-wisdom.md`:
   Core concepts: Agent Factory = workforce (not tool), Two-Layered Model (Factory + Edge), Five-Phase Maturity (Explore→Incubate→Build→Cloud→Scale), MCP as universal interface, Evals measure quality/TDD catches breakage.
   Quality dimensions: PRIMM-AI+ compliance (predict before explain), James/Emma authenticity (architectural mistakes only), scaffolding withdrawal (non-negotiable), HireFlow continuity (progressive build), code quality (type annotations, runnable).
   Common pitfalls: explaining before Predict, James making syntax errors, skipping scaffolding gradient, losing economic actors thread, generic exercises disconnected from HireFlow.
   Decision framework: 'PRIMM-AI+ is the law. James's mistakes teach more than Emma's explanations. Scaffolding withdrawal is non-negotiable.'

3. **Per-Writer Briefs** at `specs/drafts/part6-writer-brief-{name}.md`:
   - 6 writer briefs, one per writer
   - Each: exact chapters, file paths, chapter types, source outline sections, exit criteria
   - Chapter-specific notes (scaffolding levels for C18-21, economic actors for C2/C24/C27, SmartNotes for C23)

4. **Output directory README** at `apps/learn-app/docs/06-Building-Agent-Factories/README.md`

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'ARCHITECT DONE — [file list]'"

---

## Phase 2: Reference-Builder (1 teammate)

Spawn a teammate named **reference-builder**. Model: Opus.

**Prompt:**

"You are the reference-builder for Part 6: Building Agent Factories.

Your job: produce TWO gold-standard chapters, one for each template type:

1. A Socratic chapter (from C1-C6 range) demonstrating the 6-section template
2. A PRIMM-AI+ chapter (from C9-C11 range) demonstrating the 7-section template

These become the quality benchmark every writer matches.

READ IN ORDER:

1. Architecture spec: `specs/drafts/part6-architecture-spec.md`
2. Domain wisdom brief: `specs/drafts/part6-domain-wisdom.md`
3. Author system prompt (contains BOTH templates in detail): `specs/drafts/part5_building_agent_factory/part5_chapter_author_system_prompt.md`
4. V4 outline (for the specific chapter content): `specs/drafts/part5_building_agent_factory/part5_v4_outline.md`
5. Reference lesson format: `apps/learn-app/docs/05-Building-OpenClaw-Apps/56-meet-your-first-ai-employee/01-ai-employee-moment.md`

SOCRATIC REFERENCE (pick C1: The Agent Factory):

- 6 sections: Opening Scenario → Guided Discovery → Concept Crystallization → Applied Exercise → Reflection → Chapter Quiz
- James/Emma dialogue in Opening and Guided Discovery
- Formal definitions EMERGE from dialogue, not declared upfront
- 8-12 MCQs in Chapter Quiz
- Full YAML frontmatter

PRIMM-AI+ REFERENCE (pick C9: MCP Fundamentals):

- 7 sections: Why → Predict+Run → Investigate → Parsons → Modify → Make → Rubric
- STOP_AND_PREDICT box with [AI-FREE] marker
- At least 1 trace table
- At least 1 planted bug with Error Taxonomy classification
- At least 2 edge case investigations
- At least 1 AI-assisted investigation
- Parsons problem: 7 lines, 1 distractor
- 2-3 Modify exercises with mini-Predict
- Make capstone with spec-first [AI-FREE] requirement
- 5x3 rubric table

WHAT MEDIOCRE LOOKS LIKE (avoid):

- Explaining code before the STOP_AND_PREDICT box
- James making syntactic mistakes (he uses type annotations, discipline stack)
- Parsons with fewer lines than specified
- Modify exercises without mini-Predict boxes
- Make capstone without git commit instruction

Output to paths specified in architecture spec.
Execute autonomously without asking for confirmation.
When finished, message the team lead: 'REFERENCE-BUILDER DONE — [file list]'"

---

## Phase 3: Writers (6 teammates, all parallel)

Spawn ALL 6 writer teammates SIMULTANEOUSLY after Phase 2 completes.

### Writer: writer-concepts

**Prompt:**

"You are writer-concepts for Part 6: Building Agent Factories.
You are part of an agent team. Communicate via messages to the team lead.

WHAT YOU'RE BUILDING AND WHY:
You are writing the conceptual foundation: what an agent factory IS, why agents are becoming economic actors, how general agents build custom agents (the maturity model), the HireFlow blueprint, the concept paper methodology, and the domain mastery gate. These chapters establish the vocabulary and mental models students need before they write a line of code. Without this foundation, the Build section is just typing.

YOUR CHAPTERS IN CONTEXT:
These are the FIRST chapters of Part 6. Students come from Part 5 (building TutorClaw on OpenClaw). They understand platforms. Now they need to understand the underlying paradigm: the two-layered model (Factory + Edge), the five-phase maturity journey, and domain decomposition. Your chapters are ALL Socratic (6-section template): dialogue-driven discovery, not lectures.

READ IN ORDER:

1. `specs/drafts/part6-architecture-spec.md`
2. `specs/drafts/part6-domain-wisdom.md`
3. `specs/drafts/part6-writer-brief-concepts.md`
4. The Socratic reference chapter (path in architecture spec)
5. V4 outline, C1-C6 sections: `specs/drafts/part5_building_agent_factory/part5_v4_outline.md`

QUALITY FRAMEWORK:

- Dialogue authenticity: James asks big-picture questions, Emma reframes. Concepts EMERGE from dialogue.
- HireFlow grounding: every concept is applied to HireFlow (4 FTEs, recruitment domain)
- Economic actors thread: C2 establishes the forward-looking thread that C24 and C27 build on
- Exercise quality: 'Identify three domains...' is concrete; 'Think about agents...' is vapid

WHAT MEDIOCRE LOOKS LIKE:

- Declaring definitions before the dialogue discovers them
- James as a passive questioner ('What is an agent factory?') instead of an active thinker who proposes wrong solutions
- Economic actors chapter that's purely theoretical with no HireFlow application
- Chapter quizzes that test recall instead of understanding

WHEN IN DOUBT:

- The dialogue discovers, the crystallization section names. Never reverse this.
- James proposes a flawed solution (e.g., 'four chatbots'). Emma's correction IS the concept.
- Every exercise should be specific enough that two students would produce recognizably similar outputs.

YOUR SCOPE:

- C1 (Ch 61) through C6 (Ch 66): 6 Socratic chapters
- All use the 6-section Socratic template
- See writer brief for exact file paths and lesson counts

RULES:

- Match the Socratic reference chapter in format, depth, and quality
- Full YAML frontmatter on every lesson file
- 8-12 MCQs per chapter quiz
- At least 2 backward references per chapter (to Parts 0-5)
- No em-dashes as default punctuation
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WRITER CONCEPTS DONE — [file list]'"

### Writer: writer-incubate

**Prompt:**

"You are writer-incubate for Part 6: Building Agent Factories.
You are part of an agent team. Communicate via messages to the team lead.

WHAT YOU'RE BUILDING AND WHY:
You are writing the Incubate section: transforming a concept paper into agent skills, validating them through simulation, and connecting them to MCP. C7 is the pivot chapter where paper becomes code. C8 tests before building. C9-C11 are the MCP trilogy: fundamentals, custom servers, and skills-as-tools. By the end, students have validated intelligence (skills + MCP servers) ready for the Build phase.

YOUR CHAPTERS IN CONTEXT:
After writer-concepts establishes the HireFlow blueprint (C4), your chapters make it real. C7 extracts four HireFlow skills from the concept paper. C8 simulates them. C9-C11 connect them to MCP so agents can call them as tools. This is the 'Incubate' phase of the maturity model. Students have Python (Part 4) but haven't used MCP or agent skills in code yet.

READ IN ORDER:

1. `specs/drafts/part6-architecture-spec.md`
2. `specs/drafts/part6-domain-wisdom.md`
3. `specs/drafts/part6-writer-brief-incubate.md`
4. The PRIMM-AI+ reference chapter (path in architecture spec) AND the Socratic reference
5. V4 outline, C7-C11 sections: `specs/drafts/part5_building_agent_factory/part5_v4_outline.md`
6. Author system prompt (for PRIMM-AI+ template details): `specs/drafts/part5_building_agent_factory/part5_chapter_author_system_prompt.md`

QUALITY FRAMEWORK:

- C7 is Hybrid: Socratic discovery for transformation method, then PRIMM-AI+ for skill-writing
- C8 is Socratic: simulation protocol, where to simulate
- C9-C11 are PRIMM-AI+: full 7-section template with trace tables, planted bugs, Parsons problems
- MCP code must be technically correct (Python MCP SDK patterns)
- Every MCP tool built must be eval-tested

WHAT MEDIOCRE LOOKS LIKE:

- C7 that talks about skills without actually writing one
- C8 that describes simulation without running one
- MCP chapters that explain the protocol without students building working tools
- Parsons problems with wrong line counts (C9: 7 lines, C10: 8 lines, C11: 8 lines per outline)

WHEN IN DOUBT:

- PRIMM-AI+ is the law: code presented WITHOUT explanation before STOP_AND_PREDICT
- James's MCP mistakes are architectural: wrong tool schemas, missing input validation, not handling tool failures
- Every MCP server built must be testable with a real MCP client call

YOUR SCOPE:

- C7 (Ch 67) through C11 (Ch 71): 5 chapters (1 Hybrid, 1 Socratic, 3 PRIMM-AI+)
- See writer brief for exact file paths and lesson counts

RULES:

- Match reference chapters in format, depth, and quality
- Full YAML frontmatter on every lesson
- PRIMM-AI+ chapters: STOP_AND_PREDICT boxes, trace tables, planted bugs, Parsons, Modify exercises, Make capstone
- All code: full type annotations, runnable, HireFlow domain
- No em-dashes as default punctuation
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WRITER INCUBATE DONE — [file list]'"

### Writer: writer-sdks

**Prompt:**

"You are writer-sdks for Part 6: Building Agent Factories.
You are part of an agent team. Communicate via messages to the team lead.

WHAT YOU'RE BUILDING AND WHY:
You are writing the Agent SDK chapters: understanding what SDKs provide (C12), building with Claude Agents SDK (C13), OpenAI Apps SDK (C14), and NanoClaw architecture (C15). Students learn that SDKs are agent loop frameworks, not LLM wrappers. They see how the same HireFlow skill runs on different runtimes. NanoClaw is the deployment target for the Build phase.

YOUR CHAPTERS IN CONTEXT:
Students have MCP skills and servers (from Incubate). Now they need runtimes to execute them. C12 is conceptual (Socratic): why SDKs exist, what they provide. C13-C14 compare two SDKs side by side. C15 teaches NanoClaw (Body+Brain, container isolation), which is the runtime used for the rest of Part 6. After your chapters, students build databases and FTEs.

READ IN ORDER:

1. `specs/drafts/part6-architecture-spec.md`
2. `specs/drafts/part6-domain-wisdom.md`
3. `specs/drafts/part6-writer-brief-sdks.md`
4. PRIMM-AI+ reference chapter (path in architecture spec)
5. V4 outline, C12-C15 sections: `specs/drafts/part5_building_agent_factory/part5_v4_outline.md`
6. Author system prompt: `specs/drafts/part5_building_agent_factory/part5_chapter_author_system_prompt.md`

QUALITY FRAMEWORK:

- SDK comparison must be fair and factual (not Claude-biased)
- NanoClaw architecture must be technically accurate (Body+Brain, Claude Agent SDK foundation)
- All code must run against real SDK APIs with correct imports and patterns
- C15 connects to what students built in Part 5 (TutorClaw ran on OpenClaw; now they see NanoClaw)

WHAT MEDIOCRE LOOKS LIKE:

- SDK chapters that only show hello-world, not HireFlow-relevant agent patterns
- NanoClaw chapter that describes architecture without students configuring a running instance
- C12 (Socratic) that lists SDK features instead of James discovering why he needs one

WHEN IN DOUBT:

- Every SDK example uses HireFlow entities (candidates, job specs, scores)
- James's SDK mistakes: running an agent loop inside an agent loop, not understanding Body vs Brain
- NanoClaw must be hands-on: students have a running NanoClaw by end of C15

YOUR SCOPE:

- C12 (Ch 72) through C15 (Ch 75): 4 chapters (1 Socratic, 3 PRIMM-AI+)
- See writer brief for exact file paths

RULES:

- Match reference chapters in format, depth, and quality
- Full YAML frontmatter on every lesson
- All code: full type annotations, runnable, correct SDK imports
- No em-dashes as default punctuation
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WRITER SDKS DONE — [file list]'"

### Writer: writer-build-core

**Prompt:**

"You are writer-build-core for Part 6: Building Agent Factories.
You are part of an agent team. Communicate via messages to the team lead.

WHAT YOU'RE BUILDING AND WHY:
You are writing the heart of Part 6: databases (C16-C17) and the four FTE build sequence (C18-C21). C16 teaches relational databases with SQLModel (Job, Candidate, Score, PipelineStage). C17 teaches vector databases and RAG (embedding CVs, semantic search). C18-C21 build the four HireFlow FTEs with a deliberate scaffolding withdrawal: C18 is fully guided, C19 reduces guidance, C20 provides minimal hints, C21 is fully independent. This gradient is the pedagogical core of Part 6.

YOUR CHAPTERS IN CONTEXT:
Students have MCP servers (Incubate) and NanoClaw (SDKs). Now they build the data layer and the FTEs that use it. C16-C17 provide persistence. C18-C21 build the intelligence layer: each FTE is a NanoClaw agent with skills, MCP tools, and database connections. The scaffolding withdrawal proves the student can build independently by C21. After your chapters, students add APIs, orchestration, and quality layers.

READ IN ORDER:

1. `specs/drafts/part6-architecture-spec.md`
2. `specs/drafts/part6-domain-wisdom.md`
3. `specs/drafts/part6-writer-brief-build-core.md`
4. PRIMM-AI+ reference chapter (path in architecture spec)
5. V4 outline, C16-C21 sections: `specs/drafts/part5_building_agent_factory/part5_v4_outline.md`
6. Author system prompt (scaffolding withdrawal details): `specs/drafts/part5_building_agent_factory/part5_chapter_author_system_prompt.md`

QUALITY FRAMEWORK:

- Scaffolding withdrawal is NON-NEGOTIABLE: C18 Full, C19 Reduced, C20 Minimal, C21 Independent
- C18 establishes the Build Checklist (9 steps) that C19-C21 reference with decreasing guidance
- Every FTE must be eval-tested: golden dataset, scoring verification, edge case handling
- Database chapters must produce schemas that the FTE chapters USE (continuity)

WHAT MEDIOCRE LOOKS LIKE:

- C18 and C21 at the same scaffolding level (gradient must be visible)
- FTEs that work in isolation but can't connect (C21 verification assembly proves they connect)
- Database chapters disconnected from FTE chapters (C16 produces schemas C18-21 use)
- C21 Make capstone that isn't truly independent (no hints, no Build Checklist reference)

WHEN IN DOUBT:

- The scaffolding gradient is the pedagogy. If it doesn't feel harder from C18 to C21, you've failed.
- Every FTE must be tested against the concept paper from C5 (does it match the spec?)
- C21's verification assembly connects all 4 FTEs in a happy-path pipeline. C24 builds the production orchestrator.

YOUR SCOPE:

- C16 (Ch 76) through C21 (Ch 81): 6 chapters, all PRIMM-AI+
- C18-C21 have specific scaffolding levels (see writer brief)
- See writer brief for exact file paths

RULES:

- Match reference chapter in format, depth, and quality
- Full YAML frontmatter on every lesson
- Scaffolding withdrawal gradient must be explicit and visible
- All code: full type annotations, HireFlow domain, runnable
- No em-dashes as default punctuation
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WRITER BUILD-CORE DONE — [file list]'"

### Writer: writer-build-infra

**Prompt:**

"You are writer-build-infra for Part 6: Building Agent Factories.
You are part of an agent team. Communicate via messages to the team lead.

WHAT YOU'RE BUILDING AND WHY:
You are writing the infrastructure and advanced capabilities: FastAPI (C22), ChatKit (C23), multi-FTE orchestration (C24), augmented memory (C25), knowledge graphs (C26), and security (C27). These chapters turn four independent FTEs into a coordinated, secure, observable factory. C24 is the orchestration centerpiece with resource budget tracking (economic actors thread). C27 covers five attack surfaces including budget abuse.

YOUR CHAPTERS IN CONTEXT:
Students have four working FTEs (from writer-build-core). Now they need to expose them via APIs (C22), add conversational interfaces (C23 with SmartNotes integration), orchestrate them as a pipeline (C24), give them memory (C25), add knowledge graphs (C26), and secure everything (C27). After your chapters, students add TDD and evals.

READ IN ORDER:

1. `specs/drafts/part6-architecture-spec.md`
2. `specs/drafts/part6-domain-wisdom.md`
3. `specs/drafts/part6-writer-brief-build-infra.md`
4. PRIMM-AI+ reference chapter (path in architecture spec)
5. V4 outline, C22-C27 sections: `specs/drafts/part5_building_agent_factory/part5_v4_outline.md`
6. Author system prompt: `specs/drafts/part5_building_agent_factory/part5_chapter_author_system_prompt.md`

QUALITY FRAMEWORK:

- C23 must integrate SmartNotes NoteStore from Part 4 (reader built this)
- C24 must include resource budget tracking (tokens, per-FTE cost, budget ceiling): this is the economic actors thread from C2
- C27 must cover FIVE attack surfaces: prompt injection, data leakage, unauthorized access, model extraction, budget abuse
- All APIs must be testable with curl/httpx
- Orchestration patterns: sequential, parallel, conditional, human-in-loop

WHAT MEDIOCRE LOOKS LIKE:

- C23 without SmartNotes integration (continuity from Part 4)
- C24 without budget tracking (loses the economic actors thread)
- C27 without budget abuse as 5th attack surface
- FastAPI chapter that only shows POST endpoints without async, streaming, or auth

WHEN IN DOUBT:

- Economic actors thread: C2 → C4 → C24 → C27 → C30. If your chapter is in this chain, the budget/cost concepts must appear.
- James's infrastructure mistakes: no retry logic, no timeout handling, concatenating user input into system prompts, no cost tracking
- Emma shows systems thinking: error handling at every boundary, observability, security-first

YOUR SCOPE:

- C22 (Ch 82) through C27 (Ch 87): 6 chapters, all PRIMM-AI+
- See writer brief for exact file paths and chapter-specific notes

RULES:

- Match reference chapter in format, depth, and quality
- Full YAML frontmatter on every lesson
- All code: full type annotations, HireFlow domain, runnable
- No em-dashes as default punctuation
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WRITER BUILD-INFRA DONE — [file list]'"

### Writer: writer-quality-capstone

**Prompt:**

"You are writer-quality-capstone for Part 6: Building Agent Factories.
You are part of an agent team. Communicate via messages to the team lead.

WHAT YOU'RE BUILDING AND WHY:
You are writing the quality assurance and capstone: TDD for agents (C28), evals (C29), and the HireFlow Factory capstone (C30). C28 teaches test-driven development adapted for probabilistic agent outputs. C29 teaches evaluation frameworks that measure quality (not just correctness). C30 assembles the entire factory and runs end-to-end. These are the culmination chapters: by C30, the reader has a complete, tested, eval-measured local agent factory.

YOUR CHAPTERS IN CONTEXT:
Students have a complete HireFlow (4 FTEs, orchestration, memory, security) from all previous writers. C28 teaches them to test it properly. C29 teaches them to measure its quality. C30 assembles everything and proves it works end-to-end. C30 references EVERY prior chapter (Assembly Checklist). C30 also includes the economic actors capstone: resource budget report.

READ IN ORDER:

1. `specs/drafts/part6-architecture-spec.md`
2. `specs/drafts/part6-domain-wisdom.md`
3. `specs/drafts/part6-writer-brief-quality-capstone.md`
4. PRIMM-AI+ reference chapter (path in architecture spec)
5. V4 outline, C28-C30 sections: `specs/drafts/part5_building_agent_factory/part5_v4_outline.md`
6. Author system prompt: `specs/drafts/part5_building_agent_factory/part5_chapter_author_system_prompt.md`

QUALITY FRAMEWORK:

- C28: TDD must handle probabilistic outputs (constraint tests, property tests, golden dataset regression)
- C29: Evals measure 5 dimensions, include A/B testing, model comparison
- C30: Assembly Checklist references every chapter (C5 through C29). End-to-end test with specific scenario.
- C30 must include resource budget report and economic actors reflection

WHAT MEDIOCRE LOOKS LIKE:

- C28 with assert score == 85 (exact matching fails for probabilistic outputs)
- C29 with only 5 test cases (James's mistake from the outline: too few)
- C30 that describes assembly instead of RUNNING the end-to-end test
- C30 without budget/cost report (breaks economic actors thread)

WHEN IN DOUBT:

- C28 teaches the paradigm shift: agents produce variable output, so tests must verify constraints not exact values
- C29's 5 eval dimensions per the outline: accuracy, consistency, completeness, relevance, safety
- C30's capstone rubric has 6 dimensions: Pipeline Completeness, Quality, Resilience, Security, Resource Budget Accuracy, Independent Mastery

YOUR SCOPE:

- C28 (Ch 88) through C30 (Ch 90): 3 chapters (2 PRIMM-AI+, 1 Capstone)
- See writer brief for exact file paths

RULES:

- Match reference chapter in format, depth, and quality
- Full YAML frontmatter on every lesson
- C30 references every prior chapter by name (Assembly Checklist)
- All code: full type annotations, HireFlow domain, runnable
- No em-dashes as default punctuation
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WRITER QUALITY-CAPSTONE DONE — [file list]'"

---

## Phase 4: Quality Reviewer (1 teammate)

Spawn a teammate named **quality-reviewer**. Model: Opus.

**Prompt:**

"You are the quality-reviewer for Part 6: Building Agent Factories.

This is a 30-chapter part with two pedagogical templates (Socratic 6-section, PRIMM-AI+ 7-section), a scaffolding withdrawal sequence (C18-21), and cross-chapter threads (economic actors, SmartNotes, HireFlow continuity).

READ IN ORDER:

1. `specs/drafts/part6-domain-wisdom.md`
2. `specs/drafts/part6-architecture-spec.md`
3. Both reference chapters (Socratic and PRIMM-AI+, paths in architecture spec)
4. Author system prompt (quality checklist at the end): `specs/drafts/part5_building_agent_factory/part5_chapter_author_system_prompt.md`
5. ALL chapter outputs from all 6 writers

EVALUATE against these dimensions:

**Template compliance:**

- Socratic chapters (C1-C6, C8, C12): all 6 sections present?
- PRIMM-AI+ chapters (C9-C11, C13-C30): all 7 sections present?
- STOP_AND_PREDICT boxes with [AI-FREE] markers?
- Parsons problems with correct line counts per outline?
- Modify exercises with mini-Predict boxes?
- Make capstones with spec-first [AI-FREE] and git commit?
- 5x3 rubric tables?

**Scaffolding withdrawal (C18-C21):**

- C18: Full (Build Checklist defined and walked through)
- C19: Reduced (references C18, lighter guidance)
- C20: Minimal (hints in collapsibles, reader designs Modify C)
- C21: Independent (no scaffolding, reader designs investigation + verification assembly)
- Is the gradient VISIBLE? Would a reader feel the decreasing support?

**Cross-chapter threads:**

- Economic actors: C2 → C4 (blueprint field) → C24 (budget tracking) → C27 (budget abuse) → C30 (budget report)?
- SmartNotes: C1 (gets a job) → C23 (NoteStore integration) → C30 (verified)?
- HireFlow continuity: Do FTE specs from C4 match what's built in C18-21?

**James/Emma calibration:**

- James: 60% presence, architectural mistakes (not syntactic), casual voice?
- Emma: 40% presence, systems thinking, explains WHY not just WHAT?
- Dialogue natural, not forced teaching moments?

**Code quality:**

- All functions: type annotations?
- All code: runnable (no pseudocode, no ellipsis)?
- HireFlow domain entities used throughout?
- Error Taxonomy classifications on planted bugs?
- Verification Ladder references?

**Format:**

- Full YAML frontmatter on every lesson?
- No em-dashes as default punctuation (max 0-1 per file)?
- No forbidden phrases?
- At least 2 backward references per chapter?
- At most 1 forward reference per chapter?

DELIVERABLE: Quality report at `specs/drafts/part6-quality-report.md`:

- Per-writer scores across all dimensions
- Cross-chapter thread audit (economic actors, SmartNotes, HireFlow continuity)
- Scaffolding withdrawal gradient assessment
- Specific issues with chapter:lesson:line references
- Required fixes (blocking) vs suggested improvements
- Overall assessment: PASS, PASS WITH FIXES, or FAIL

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'QUALITY-REVIEWER DONE — specs/drafts/part6-quality-report.md'"

---

## Lead Coordination Rules

1. Create the agent team, then spawn teammates for each phase
2. Create tasks with phase dependencies (Phase 1 → 2 → 3 → 4)
3. Do NOT write content yourself. Coordinate only.
4. Wait for each phase to complete before spawning the next
5. After quality review, run structural verification:
   - `ls -R apps/learn-app/docs/06-Building-Agent-Factories/` to verify directory tree
   - Compare chapter count against 30 (architect's skeleton)
   - Spot-check YAML frontmatter from each writer (one chapter per writer)
   - Verify scaffolding gradient: read C18 Make section, then C21 Make section, confirm C21 has less guidance
6. If quality review returns FAIL or PASS WITH FIXES, create fix tasks and assign to relevant writers
7. Shut down all teammates gracefully when done

## Anti-Patterns

- Do NOT spawn subagents. Use agent team teammates.
- Do NOT write content yourself. Delegate to teammates.
- Do NOT spawn Phase 3 before Phase 2 completes.
- Do NOT spawn quality reviewer before ALL 6 writers complete.
- Do NOT let writers read the full v4 outline (only architect does). Writers read their assigned sections.
- Do NOT skip the quality reviewer phase.
