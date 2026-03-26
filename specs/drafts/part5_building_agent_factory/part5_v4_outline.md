# Part 5: Building the Agent Factory — Chapter Outline v4

*From a blank page to a working AI workforce — building HireFlow, a recruitment factory with four Digital FTEs, using the five-phase maturity journey.*

*30 chapters across four sections.*

---

## Prerequisites: Are You Ready for Part 5?

Before starting this part, confirm you can do the following without assistance. If any item is uncertain, revisit the referenced chapter.

1. **Write a typed Python function with pytest tests** — function signature with type annotations, at least one passing test (Part 4, Chapters on Functions and Testing)
2. **Use the discipline stack without guidance** — uv for project management, ruff for linting, pyright for type checking, pytest for testing (Part 4, Chapter 31)
3. **Commit and push with Git** — create a branch, commit changes with a descriptive message, push to remote (Part 2, Chapter 12)
4. **Write a specification and use TDG with Claude Code** — write a failing test from a spec, prompt Claude Code to generate the implementation, verify the output (Part 4, Spec-Driven Development chapters)
5. **Explain at least 5 of the 10 axioms from memory** — Shell as Orchestrator, Knowledge is Markdown, Types Are Guardrails, Tests Are the Specification, Verification is a Pipeline (Part 4, Chapter 31)

If all five are solid, you are ready.

---

## Reading This Part in Phases

Part 5 is the largest part of the book: 30 chapters across four sections. You do not need to read it in one pass. Each section has a natural checkpoint:

| After Section | You Have | You Can Stop Here If... |
|---|---|---|
| **I: Architecture** (C1–C4) | A conceptual understanding of agent factories, economic actors, the maturity model, and the HireFlow blueprint | You want to understand the paradigm before committing to the build |
| **II: Explore** (C5–C6) | A validated concept paper and domain mastery | You are exploring whether a specific domain is viable for an agent factory |
| **III: Incubate** (C7–C11) | Validated agent skills, simulation logs, and MCP servers | You have working intelligence but haven't committed to production code |
| **IV: Build** (C12–C30) | A fully operational local agent factory | You are ready for Part 6 (cloud deployment) |

Each checkpoint produces a concrete deliverable. You can pause, apply what you've learned, and return.

---

## Introduction

James stares at his screen. He has spent four parts of this book learning to think, work, and code alongside AI. He understands spec-driven development. He can write typed Python, trace variables through functions, build tested modules, and run the full discipline stack without hesitation. He has built SmartNotes from a blank file into a working application with CRUD operations, a test suite, and a CI pipeline. He writes type annotations instinctively. He commits before he ships. He is no longer a beginner.

But he has a question that has been growing since Chapter 1.

"I understand how to build *a program*," James says. "But how do I build *a company* out of AI agents? Not one agent — a whole team of them. A factory."

Emma sets down her coffee. "That is exactly what this part teaches. Everything you have done so far — specs, skills, tests, code — those are the raw materials. Now you learn to assemble them into something that runs without you watching."

This is Part 5: **Building the Agent Factory**.

In Parts 1 through 3, you learned *what* AI agents are, *how* they work, and *where* they fit into business domains. In Part 4, you learned *how to code* — Python, the discipline stack, the PRIMM-AI+ framework, and the ten axioms that govern AI-driven development. You have the vocabulary. You have the tools. You have the mental models.

Now you build the thing.

---

### From SmartNotes to HireFlow

In Part 4, SmartNotes was your companion — a personal note-taking application that grew alongside your skills. You started with variables and strings, then functions, then data structures, then classes, then tests. SmartNotes taught you to build a *program*.

Part 5 introduces a new running project: **HireFlow** — an AI-powered recruitment factory. SmartNotes does not disappear. It becomes one of HireFlow's tools — the note-taking system the hiring manager uses to capture briefs, annotate candidate profiles, and record interview observations. You will see SmartNotes' `NoteStore` class appear in C23 (ChatKit Server) where it stores session transcripts and hiring manager annotations. SmartNotes taught you to write code. HireFlow teaches you to build a *workforce* that writes outcomes.

The shift is deliberate. SmartNotes is a single application with a single user. HireFlow is a coordinated system with multiple AI employees, each performing a distinct role, passing data between them, and producing a deliverable that a human uses to make a decision. The skills transfer. The scale changes.

---

### What You Will Build

**HireFlow** — an AI-powered recruitment factory with four Digital FTEs:

| FTE Role | Function | Input | Output |
|---|---|---|---|
| **Job Spec Writer** | Turns hiring manager briefs into structured job descriptions | Raw brief (role, team, requirements) | Formatted job description with responsibilities, qualifications, and scoring rubric |
| **Resume Screener** | Parses and scores candidate CVs against job requirements | CV + job description | Scored candidate profile with match percentage and flagged gaps |
| **Interview Question Generator** | Creates role-specific behavioral and technical questions | Job description + candidate profile | Structured interview guide with scoring criteria |
| **Candidate Summarizer** | Produces hiring committee briefs from all collected data | Screening results + interview notes | Decision-ready candidate brief with recommendation |

By the end of this part, HireFlow will run locally on your machine — four FTEs coordinating via MCP, powered by NanoClaw, passing evals, processing candidates 24/7 for a single user. No cloud. No multi-tenancy. Just a working factory on your laptop. Part 6 takes it to the cloud.

---

### The Five-Phase Journey

**Phase 1: Explore.** Use frontier LLMs to explore the domain and write a concept paper through the 10-80-10 loop until it crosses the 9.5+ quality threshold.

**Phase 2: Incubate.** Convert the paper into agent skills. Test them as simulations. Build MCP servers. At the end: validated intelligence, no production code.

**Phase 3: Build Specialist.** Deploy validated skills as running Digital FTEs using NanoClaw, Agent SDKs, and MCP. Connected to data stores, exposed via FastAPI, validated by evals.

Phases 4–5 (CloudNanoClaw, Deploy at Scale) belong to Part 6.

---

### How This Part Teaches

**Programming chapters** (C9–C29) follow the full PHPM 7-section template:
1. Why This Chapter Exists | 2. Worked Example + Predict | 3. Investigate | 4. Parsons Bridge | 5. Modify | 6. Make Capstone | 7. Self-Assessment Rubric

**Conceptual chapters** (C1–C6, C8, C12) follow the Socratic pattern:
1. Opening Scenario | 2. Guided Discovery | 3. Concept Crystallization | 4. Applied Exercise | 5. Reflection and Connection | 6. Chapter Quiz

**C7 (From Paper to Agent Skills)** uses a hybrid: Socratic discovery + lightweight PRIMM-AI+ cycle for skill-writing (Predict → Run → Investigate → Modify → Make). Prompt engineering is programming (Axiom II).

**Universal PHPM rules for ALL programming chapters (C9–C29):**
- **AI-assisted investigation:** mandatory in every Investigate section
- **Mini-Predict before every modification:** mandatory for A, B, and C
- **Error taxonomy connection:** every bug classified
- **Verification ladder connection:** at least one finding per chapter
- **Discipline stack:** every Make Capstone runs ruff → pyright → pytest
- **Git commit:** every Make Capstone ends with "commit your work"

**James in Part 5** makes architectural mistakes, not syntactic ones: vague agent skills, missing database persistence, no retry logic in orchestrators, trusting agent output without verification, concatenating user content into prompts. Emma corrects systems thinking, not code mechanics.

**Character voice reminder for compressed chapter outlines (C13–C29):** When writing chapters from compressed outlines, the chapter author MUST refer to the companion system prompt document for: James's dialogue voice (casual, occasionally overconfident about agent behavior, code comments like `# The agent should handle this... right?`), Emma's dialogue voice (precise, explanatory, always explains WHY not just WHAT), dialogue frequency (James/Emma exchange in at minimum Why This Chapter Exists and Investigate sections), and the specific error taxonomy/verification ladder levels appropriate for Part 5 (all five error types, all five verification rungs active).

---
---

## Chapters

---

### Section I — The Architecture (C1–C4)

---

#### C1: The Agent Factory and the Two-Layered Model

*What an agent factory is, why it exists, and how humans govern it.*

1. **Opening Scenario:** James has built SmartNotes. "How do I build a workforce?" SmartNotes bridge: it becomes HireFlow's note-taking tool.
2. **Guided Discovery:** "An agent is a worker. A factory is a workforce." James proposes four chatbots → Emma explains why that fails. Paradigm shift table: SaaS era vs. Agent Factory era.
3. **Concept Crystallization:** Factory Layer (enterprise AI employees) + Edge Layer (personal Identic agents). Principal-agent relationship. Intent down, verification up, outcomes back. Tapscott's Identic AI. Neither layer works alone.
4. **Applied Exercise:** Meet HireFlow — four FTEs, one pipeline. Reader identifies three other domains with FTE roles.
5. **Reflection:** Three frames: Two-Layered Model (governance), Agent Maturity Model (journey, C3), Economic Actors (future, C2).
6. **Chapter Quiz**

---

#### C2: Agents as Economic Actors

*Why agents are becoming market participants — and why your factory architecture must be ready.*

1. **Opening Scenario:** Emma shows James a news article: an AI agent at a logistics company autonomously purchased additional compute during a demand spike, saving $40K in overtime costs. James: "Agents can *buy things*?" Emma: "Not widely yet. But the infrastructure is being built right now. And the factories you build today need to be ready."
2. **Guided Discovery:** The shift from agent-as-tool to agent-as-buyer. The scenario: agent assigned "reduce customer churn by 15%" autonomously purchases compute, negotiates API contracts, provisions cloud services — within budget and permission envelopes. The primitives exist (API calls, credential management, constrained decision-making). What's missing: trust infrastructure (payment rails, audit trails, liability frameworks). Emma walks James through why a factory that can only consume human-allocated resources will be outcompeted by one that dynamically sources its own.
3. **Concept Crystallization:** When agents become buyers, factories shift from consuming to self-provisioning. The design principle: **agents need budgets, not just permissions. Outcome contracts, not just API keys.** Resource budget = tokens + compute + API calls + storage, tracked per-pipeline-run. Audit trail = every resource acquisition logged with cost, purpose, and authorizing policy. Budget envelope = ceiling that pauses the pipeline, not a suggestion. How this surfaces in HireFlow: orchestrator (C24) tracks resource consumption; security (C27) enforces spending ceilings.
4. **Applied Exercise:** Reader maps three economic participation points in HireFlow (e.g., Resume Screener purchasing a background-check API, Question Generator accessing a proprietary assessment library, Summarizer contracting a third-party reference checker). For their own domain from C1's exercise: identify two economic participation points.
5. **Reflection:** "You won't build an agent that buys things in this part. You will build the infrastructure it will ride on — budget tracking, audit logs, spending envelopes. Designing for economic participation is a one-time architectural decision. Retrofitting it is a rewrite."
6. **Chapter Quiz** — MCQ: agent-as-buyer concept, budget vs. permission, self-provisioning, trust infrastructure components, design principle

---

#### C3: The Agent Maturity Model

*How general agents build custom agents — the Incubator-to-Specialist arc.*

*(Same content as v3's C2. Chapter number shifted.)*

1. **Opening Scenario:** James jumps to "Build me a resume screening agent" in Claude Code. Gets something. Doesn't know scoring criteria, career gap handling, or job spec schema.
2. **Guided Discovery:** Incubator (Director role) vs. Specialist (Builder role). Crystallization as phase transition.
3. **Concept Crystallization:** Five-Phase Map. General Agents BUILD Custom Agents. 9.5+ threshold as crystallization signal.
4. **Applied Exercise:** Spot the Phase — six scenarios, identify phase/role/maturity.
5. **Reflection:** James's mistake: skipped the Incubator. Next: C4, the Factory Blueprint.
6. **Chapter Quiz**

---

#### C4: The HireFlow Blueprint

*Domain decomposition — breaking a business idea into FTE roles, inputs, outputs, and success criteria.*

*(Same content as v3's C3. Chapter number shifted. Economic participation points added to blueprint template.)*

1. **Opening Scenario:** James writes "HireFlow — an AI that helps with hiring." Emma: "That is a wish, not a blueprint."
2. **Guided Discovery:** Domain Decomposition six-step method.
3. **Concept Crystallization:** HireFlow end-to-end flow, four FTE role specifications, inter-FTE data contracts, human review gates, economic participation points.
4. **Applied Exercise:** Write the Factory Blueprint using template (domain summary, workflow map, role specs, data contracts, success criteria, economic participation points).
5. **Reflection:** This blueprint seeds the 10-80-10 concept paper (C5).
6. **Chapter Quiz**

---

### Section II — Phase 1: Explore (C5–C6)

---

#### C5: The 10-80-10 Concept Paper

*(Same as v3's C4. Renumbered.)*

1. Opening Scenario → 2. Guided Discovery: 10-80-10 Rule → 3. Multi-LLM Exploration → 4. Applied Exercise: Write the HireFlow Paper → 5. Reflection → 6. Chapter Quiz

---

#### C6: The Domain Mastery Gate

*(Same as v3's C5. Renumbered.)*

1. Opening Scenario → 2. From Paper to Quiz → 3. Mastery Gate Pattern → 4. Take the HireFlow Domain Quiz → 5. Reflection → 6. Chapter Quiz

---

### Section III — Phase 2: Incubate (C7–C11)

---

#### C7: From Paper to Agent Skills

**Chapter Type:** Hybrid (Socratic + PRIMM-AI+ for skill-writing)

*(Same as v3's C6. Renumbered.)*

1. Opening Scenario → 2. Transformation Method → 3. Skill Anatomy → 4. PRIMM-AI+ Skill-Writing (Predict → Run → Investigate → Modify → Make across four FTE skills with graduated independence) → 5. Reflection → 6. Chapter Quiz

---

#### C8: Simulation-Driven Validation

*(Same as v3's C7. Renumbered.)*

1. Opening Scenario → 2. Simulation Protocol → 3. Where to Simulate → 4. Simulate HireFlow FTEs → 5. Reflection → 6. Chapter Quiz

---

#### C9: MCP Fundamentals

**Chapter Type:** PRIMM-AI+ 7-Section Template

*(Same as v3's C8. Renumbered. All universal PHPM rules apply.)*

1. Why → 2. Worked Example + Predict (MCP server, `tools/list` request) → 3. Investigate (protocol trace, architecture, primitives, AI-assisted, error taxonomy) → 4. Parsons (7 lines) → 5. Modify (mini-Predict before each: job descriptions A, validation B, second tool C) → 6. Make (candidate profiles MCP server, TDG, git commit) → 7. Rubric

---

#### C10: Building Custom MCP Servers

**Chapter Type:** PRIMM-AI+ 7-Section Template

*(Same as v3's C9. Renumbered.)*

1. Why → 2. Predict (CV parser) → 3. Investigate (format edge cases, James's bug, Job Template server) → 4. Parsons (8 lines, 1 distractor) → 5. Modify (skill normalization A, validation B, Pydantic models C) → 6. Make (unified HireFlow MCP server, TDG) → 7. Rubric

---

#### C11: Agent Skills and MCP Code Execution

**Chapter Type:** PRIMM-AI+ 7-Section Template

*(Same as v3's C10. Renumbered.)*

1. Why → 2. Predict (Resume Screener + CV parser, tool call sequence) → 3. Investigate (trace table, consistency, tool failure, code execution, AI-assisted) → 4. Parsons (8 lines) → 5. Modify (scoring normalization A, retry B, wire Question Generator C) → 6. Make (Candidate Summarizer skill+tool config, checkpoint inventory) → 7. Rubric

---

### Section IV — Phase 3: Build Specialist (C12–C30)

---

#### C12: Introduction to Agent SDKs

**Chapter Type:** Conceptual (Socratic)

*(Same as v3's C11. Renumbered.)*

1. Opening Scenario ("Why not just call the API?") → 2. What SDKs Provide → 3. Two SDKs: Claude Agents SDK + OpenAI Apps SDK. NanoClaw = Body + Brain → 4. Applied Exercise (feature matrix, decision exercise) → 5. Reflection → 6. Chapter Quiz

---

#### C13: Anthropic Claude Agents SDK

**Chapter Type:** PRIMM-AI+ 7-Section Template

1. Why (NanoClaw's foundation) → 2. Predict (agent + `parse_cv` + `score_candidate`, tool call order) → 3. Investigate (agent loop trace, multi-agent handoff, guardrails, AI-assisted, error taxonomy) → 4. Parsons (9 lines, 1 distractor) → 5. Modify (third tool A, input validation B, supervision pattern C) → 6. Make (multi-agent triage system, TDG) → 7. Rubric

---

#### C14: OpenAI Apps SDK

**Chapter Type:** PRIMM-AI+ 7-Section Template

1. Why (user-facing complement) → 2. Predict ("Job Brief Collector" App, interaction flow) → 3. Investigate (interaction loop, SDK comparison, state management, AI-assisted) → 4. Parsons (7 lines, 1 distractor) → 5. Modify (confirmation step A, suggested requirements B, multi-step form C) → 6. Make (Candidate Review App, TDG) → 7. Rubric

---

#### C15: The NanoClaw Architecture

**Chapter Type:** PRIMM-AI+ 7-Section Template

1. Why (Phase 3 runtime) → 2. Predict (request path: HTTP → ? → ? → response) → 3. Investigate (full path trace, Body vs. Brain, skill swap, model comparison, AI-assisted) → 4. Parsons (8 lines, 1 distractor) → 5. Modify (swap skill A, second MCP server B, request logging C) → 6. Make (NanoClaw for Resume Screener, TDG) → 7. Rubric

---

#### C16: Relational Databases with SQLModel

**Chapter Type:** PRIMM-AI+ 7-Section Template

1. Why (data foundation for FTEs, Axiom VI) → 2. Predict (SQLModel models: Job, Candidate, Score, PipelineStage) → 3. Investigate (candidate journey, orphaned FK bug, cascade rules, AI-assisted) → 4. Parsons (8 lines, 1 distractor) → 5. Modify (status enum A, grouped query B, CRUD as MCP tools C) → 6. Make (complete HireFlow database + MCP tools, TDG) → 7. Rubric

---

#### C17: Vector Databases and RAG

**Chapter Type:** PRIMM-AI+ 7-Section Template

1. Why (compare against past hires, completes data infrastructure) → 2. Predict (embed 20 CVs, top-5 distribution) → 3. Investigate (RAG pipeline, semantic vs. keyword, chunking, embedding scope mistake, AI-assisted) → 4. Parsons (8 lines, 1 distractor) → 5. Modify (metadata filter A, threshold B, vector search as MCP tool C) → 6. Make (Job Description Knowledge Base, TDG) → 7. Rubric

---

#### C18: Building the Job Spec Writer FTE — **FULL SCAFFOLDING**

**Chapter Type:** PRIMM-AI+ 7-Section Template — reference chapter for C19–C21

Establishes **The Build Checklist:** 1. Load skill (C7) | 2. Connect MCP servers (C10) | 3. Connect database (C16) | 4. Configure NanoClaw (C15) | 5. Define typed I/O schemas | 6. Error handling | 7. Write tests | 8. Discipline stack | 9. Git commit

1. Why → 2. Predict (test brief: "Senior Python developer, payments team") → 3. Investigate (full trace, incomplete brief, contradictory brief, James's missing DB persistence bug, AI-assisted) → 4. Parsons (9 lines, 1 distractor) → 5. Modify (scoring rubric A, clarifying questions for incomplete briefs B, RAG from C17 C) → 6. Make (three test scenarios, TDG, verify against concept paper) → 7. Rubric

---

#### C19: Building the Resume Screener FTE — **REDUCED SCAFFOLDING**

References C18's Build Checklist. Reader gets lighter guidance.

1. Why → 2. Predict (CV: 3yr Python, no degree, open-source portfolio) → 3. Investigate (scoring model, consistency, bias test, inter-FTE data flow, James's "missing=zero" bug) → 4. Parsons (7 lines, 1 distractor) → 5. Modify (weights A, batch B, ranking C) → 6. Make (golden dataset 10 CVs, TDG) → 7. Rubric

---

#### C20: Building the Interview Question Generator FTE — **MINIMAL SCAFFOLDING**

Hints only. Configuration handled independently by reader.

1. Why → 2. Predict (flagged "no team lead experience") → 3. Investigate (multi-input merge, tailored vs. generic, diversity check — *reader investigates independently*) → 4. Parsons (8 lines, 2 distractors) → 5. Modify (difficulty calibration A, scoring criteria B, *C: reader designs own*) → 6. Make (full independent build, no guidance) → 7. Rubric

---

#### C21: Building the Candidate Summarizer FTE — **INDEPENDENT**

Make exercise at chapter scale. The test.

1. Why → 2. Predict (strong candidate, score 87, interview notes) → 3. Investigate (*reader designs own tasks*, collapsible hint) → 4. Parsons (9 lines, 2 distractors) → 5. Modify (thresholds A, *B: reader designs own*) → 6. Make (**[AI-FREE]** full build + **verification assembly**: wire all four FTEs into happy-path pipeline. This proves FTEs connect. C24 builds the production orchestrator with error handling, parallelism, retries, and monitoring.) → 7. Rubric

---

#### C22: FastAPI for Agents

1. Why → 2. Predict (POST `/submit-brief`) → 3. Investigate (request trace, async, James's sync blocking bug) → 4. Parsons (7 lines, 1 distractor) → 5. Modify (status endpoint A, API key auth B, SSE streaming C) → 6. Make (complete HireFlow API, TDG) → 7. Rubric

---

#### C23: ChatKit Server for Agents

1. **Why This Chapter Exists** — FastAPI handles request/response; ChatKit adds conversation. Built-in UI for testing. **SmartNotes integration:** the ChatKit server uses SmartNotes' `NoteStore` class (from Part 4) to store session transcripts and hiring manager annotations. This is where SmartNotes gets its job inside HireFlow — the note-taking system now persists conversational data for the recruitment pipeline.

2. Predict (ChatKit on Job Spec Writer: follow-ups or immediate? Streaming or batch?) → 3. Investigate (architecture, session persistence, streaming, multi-turn refinement, SmartNotes storage trace: how does `NoteStore.create()` persist the hiring manager's brief from the chat session?, timeout edge case, AI-assisted) → 4. Parsons (7 lines, 1 distractor) → 5. Modify (session timeout A, history export B, pipeline progress indicators C) → 6. Make (conversational interface for full pipeline with SmartNotes-backed annotation storage, TDG) → 7. Rubric

---

#### C24: Agent Coordination and Multi-FTE Orchestration

**Chapter Goals:** Orchestration patterns, error handling, resource budgets (Agents as Economic Actors foundation), monitoring.

1. **Why** — C21's verification assembly proved FTEs connect. This builds the **production orchestrator** with error handling, parallelism, retries, dead letter queues, human review gates, monitoring, and **resource budget management** (foundational for economic participation).

2. Predict (5 candidates, candidate #3 CV parse failure) → 3. Investigate (patterns: sequential/parallel/conditional/human-in-loop, failure/retry/dead letter, **resource budget: token count, per-candidate cost, budget ceiling**, connection to economic actors: "Today you track cost. Tomorrow the orchestrator dynamically sources resources.", AI-assisted, Axiom X) → 4. Parsons (9 lines, 2 distractors) → 5. Modify (parallel screening A, conditional branching B, monitoring+cost dashboard C) → 6. Make (complete orchestrator with budget tracking, TDG) → 7. Rubric

---

#### C25: Augmented Memory for Agents

1. Why → 2. Predict (memory-augmented screener, self-taught candidates) → 3. Investigate (architectures, retrieval, James's no-decay mistake, poisoning, privacy) → 4. Parsons (8 lines, 1 distractor) → 5. Modify (decay A, org preferences B, cleanup C) → 6. Make (Summarizer memory, TDG) → 7. Rubric

---

#### C26: Knowledge Graphs and GraphRAG

1. Why → 2. Predict (graph traversal: fintech + Python) → 3. Investigate (three-way comparison, GraphRAG, graceful degradation) → 4. Parsons (8 lines, 1 distractor) → 5. Modify (hired_by A, team affinity B, GraphRAG as MCP tool C) → 6. Make (full HireFlow knowledge graph, TDG) → 7. Rubric

---

#### C27: Security for Agent Factories

**Five attack surfaces:** prompt injection, data leakage, unauthorized access, model extraction, **budget abuse** (agent tricked into excessive resource consumption — connects to C2/C24's economic actor infrastructure).

1. Why → 2. Predict (CV with hidden injection text) → 3. Investigate (five surfaces + defenses, James's concatenation mistake, spending envelopes + audit logs, AI-assisted) → 4. Parsons (8 lines, 2 distractors) → 5. Modify (sanitization A, session isolation B, RBAC + budget envelope C) → 6. Make (security audit, adversarial test cases, TDG) → 7. Rubric

---

#### C28: TDD for Agents

1. Why (Axiom VII for agents, probabilistic outputs) → 2. Predict (`assert score == 85` fails) → 3. Investigate (TDD paradigms, test types, mocks, James's exact-wording mistake) → 4. Parsons (8 lines, 1 distractor) → 5. Modify (constraint test A, property test B, golden dataset regression C) → 6. Make (complete test suite for one FTE, CI, TDG) → 7. Rubric

---

#### C29: Evals — Measuring Agent Performance

1. Why (TDD catches broken; evals measure quality) → 2. Predict (20 labeled CVs, ranking correlation) → 3. Investigate (5 dimensions, A/B, model comparison, James's 5-case mistake) → 4. Parsons (8 lines, 1 distractor) → 5. Modify (fairness A, regression baseline B, all-FTE suites C) → 6. Make (comprehensive eval framework, weakest FTE skill revision, TDG) → 7. Rubric

---

#### C30: The HireFlow Factory — Capstone

1. **Why** — Every chapter built a piece. This assembles the machine.

2. **Assembly Checklist** — Concept paper (C5) ✓ | Domain mastery (C6) ✓ | Skills (C7) ✓ | Simulations (C8) ✓ | MCP servers (C9–C11) ✓ | SDKs (C13–C14) ✓ | NanoClaw (C15) ✓ | Relational DB (C16) ✓ | Vector DB (C17) ✓ | Four FTEs (C18–C21) ✓ | FastAPI (C22) ✓ | ChatKit + SmartNotes (C23) ✓ | Orchestration + budgets (C24) ✓ | Memory (C25) ✓ | Knowledge graph (C26) ✓ | Security + spending envelopes (C27) ✓ | TDD (C28) ✓ | Evals (C29) ✓

3. **End-to-End Test** — "Senior Data Engineer, London, fintech." Full pipeline. Timing. Quality verification. Security test (adversarial CV). **Resource budget report:** total tokens, per-candidate cost, per-FTE cost attribution.

4. **Running HireFlow 24/7 Locally** — Persistent NanoClaw, monitoring, logs.

5. **What Part 6 Will Add** — CloudNanoClaw, Kafka, multi-tenant, cloud deployment. And: agents that dynamically source compute, data, and services — the economic actors that this part's budget tracking infrastructure was designed to support.

6. **Reflection** — James: "I started with a blank page and ended with a working factory." Emma: "You didn't build an agent. You built a *process* for building agents." The repeatable method.

7. **Capstone Rubric** — Pipeline Completeness | Pipeline Quality | Pipeline Resilience | Pipeline Security | Resource Budget Accuracy | Independent Mastery (C20–C21 without scaffolding). Reflection: "What would you build next? Choose a domain. Write the Factory Blueprint. Identify where your factory's agents might one day participate as economic actors."

---

## Summary: Chapter Map

| # | Chapter | Section | Phase | Type | Scaffolding |
|---|---|---|---|---|---|
| C1 | The Agent Factory and the Two-Layered Model | I: Architecture | — | Socratic | — |
| C2 | Agents as Economic Actors | I: Architecture | — | Socratic | — |
| C3 | The Agent Maturity Model | I: Architecture | — | Socratic | — |
| C4 | The HireFlow Blueprint | I: Architecture | — | Socratic + Exercise | — |
| C5 | The 10-80-10 Concept Paper | II: Explore | Phase 1 | Socratic + Exercise | — |
| C6 | The Domain Mastery Gate | II: Explore | Phase 1 | Assessment | — |
| C7 | From Paper to Agent Skills | III: Incubate | Phase 2 | Hybrid (Socratic + PRIMM-AI+) | — |
| C8 | Simulation-Driven Validation | III: Incubate | Phase 2 | Socratic + Exercise | — |
| C9 | MCP Fundamentals | III: Incubate | Phase 2 | PRIMM-AI+ (7-section) | Full |
| C10 | Building Custom MCP Servers | III: Incubate | Phase 2 | PRIMM-AI+ (7-section) | Full |
| C11 | Agent Skills and MCP Code Execution | III: Incubate | Phase 2 | PRIMM-AI+ (7-section) | Full |
| C12 | Introduction to Agent SDKs | IV: Build | Phase 3 | Socratic | — |
| C13 | Anthropic Claude Agents SDK | IV: Build | Phase 3 | PRIMM-AI+ (7-section) | Full |
| C14 | OpenAI Apps SDK | IV: Build | Phase 3 | PRIMM-AI+ (7-section) | Full |
| C15 | The NanoClaw Architecture | IV: Build | Phase 3 | PRIMM-AI+ (7-section) | Full |
| C16 | Relational Databases with SQLModel | IV: Build | Phase 3 | PRIMM-AI+ (7-section) | Full |
| C17 | Vector Databases and RAG | IV: Build | Phase 3 | PRIMM-AI+ (7-section) | Full |
| C18 | Building the Job Spec Writer FTE | IV: Build | Phase 3 | PRIMM-AI+ (7-section) | **Full** (reference) |
| C19 | Building the Resume Screener FTE | IV: Build | Phase 3 | PRIMM-AI+ (7-section) | **Reduced** |
| C20 | Building the Interview Question Generator FTE | IV: Build | Phase 3 | PRIMM-AI+ (7-section) | **Minimal** |
| C21 | Building the Candidate Summarizer FTE | IV: Build | Phase 3 | PRIMM-AI+ (7-section) | **Independent** |
| C22 | FastAPI for Agents | IV: Build | Phase 3 | PRIMM-AI+ (7-section) | Full |
| C23 | ChatKit Server for Agents | IV: Build | Phase 3 | PRIMM-AI+ (7-section) | Full |
| C24 | Agent Coordination and Multi-FTE Orchestration | IV: Build | Phase 3 | PRIMM-AI+ (7-section) | Full |
| C25 | Augmented Memory for Agents | IV: Build | Phase 3 | PRIMM-AI+ (7-section) | Full |
| C26 | Knowledge Graphs and GraphRAG | IV: Build | Phase 3 | PRIMM-AI+ (7-section) | Full |
| C27 | Security for Agent Factories | IV: Build | Phase 3 | PRIMM-AI+ (7-section) | Full |
| C28 | TDD for Agents | IV: Build | Phase 3 | PRIMM-AI+ (7-section) | Full |
| C29 | Evals — Measuring Agent Performance | IV: Build | Phase 3 | PRIMM-AI+ (7-section) | Full |
| C30 | The HireFlow Factory — Capstone | IV: Build | Phase 3 | Capstone | Independent |

*30 chapters. One factory. The method you learn here applies to any domain.*
