# Part 6 Summaries & Flashcards: Quality Brief

This document is the quality standard for all summary and flashcard generators working on Part 6 chapters. Read this before generating any files. Reference files for Ch 61 L01 are the gold standard.

## Summary Length Calibration

| Proficiency       | Target Length | Applies to Chapters               |
| ----------------- | ------------- | --------------------------------- |
| A2 (Beginner)     | 150-250 words | Ch 61, 62, 63, 64, 65, 66, 68, 69 |
| B1 (Intermediate) | 200-350 words | Ch 67, 70, 71, 72, 73             |

Note: Some chapters have mixed proficiency across lessons (e.g., Ch 65-66 start A2 but may have B1 lessons). Always check the individual lesson's frontmatter `proficiency_level` to calibrate length.

## Flashcard Deck ID Convention

- **Deck ID**: `ch{NN}-{lesson-slug}` where `{lesson-slug}` is the lesson filename without the numeric prefix and `.md` extension
- **Card ID**: `ch{NN}-{lesson-slug}-{NNN}` (zero-padded 3-digit sequence)

Examples:

- Lesson `01-from-smartnotes-to-workforce.md` in Ch 61: deck `ch61-from-smartnotes-to-workforce`, cards `ch61-from-smartnotes-to-workforce-001`, `-002`, etc.
- Lesson `03-the-five-phase-map.md` in Ch 63: deck `ch63-the-five-phase-map`, cards `ch63-the-five-phase-map-001`, etc.

## Cross-Deck Awareness: Shared Concepts

These concepts appear across multiple chapters. When carding them, use a **different angle** each time. Never duplicate the same framing across decks.

| Concept                                     | Primary Chapter | Also Appears In               | Card Angle Guidance                                                                                                                                                      |
| ------------------------------------------- | --------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Two-layered model (governance + execution)  | Ch 61 (L03-L04) | Ch 64, 67, 72                 | Ch 61: define and motivate. Ch 64: apply to blueprint. Ch 67: how governance shapes skill writing. Ch 72: how SDKs implement the layers.                                 |
| HireFlow FTEs (four roles)                  | Ch 61 (L05)     | Ch 64, 67, 68, 69, 70, 71, 73 | Ch 61: name and enumerate. Later chapters: card each FTE's specific behavior in that chapter's context (simulation, MCP tools, SDK integration).                         |
| Agent maturity model (five phases)          | Ch 63 (L03)     | Ch 64, 65, 67, 72             | Ch 63: define all five phases. Ch 65: connect to Explore phase. Ch 67: connect to Incubate. Ch 72: connect to Build. Do NOT re-enumerate all five phases in later decks. |
| 10-80-10 concept paper method               | Ch 65 (L02)     | Ch 66, 67                     | Ch 65: define the method. Ch 66: how it feeds the mastery gate. Ch 67: how the paper becomes skills.                                                                     |
| Domain mastery gate                         | Ch 66 (L03)     | Ch 67                         | Ch 66: define the pattern. Ch 67: reference as prerequisite, don't re-test the gate definition.                                                                          |
| Domain knowledge vs. agent intelligence     | Ch 67 (L01)     | Ch 68, 71                     | Ch 67: define the distinction. Ch 68: how simulation validates the transformation. Ch 71: how runtime bridges the gap.                                                   |
| Simulation-driven validation                | Ch 68 (L02)     | Ch 71, 73                     | Ch 68: define the protocol. Ch 71: runtime validation. Ch 73: SDK-level testing.                                                                                         |
| MCP integration (tools, resources, prompts) | Ch 69 (L03)     | Ch 70, 71, 73                 | Ch 69: define the three primitives. Ch 70: custom server building. Ch 71: runtime integration. Ch 73: SDK connection.                                                    |
| Factory blueprint                           | Ch 64 (L03-L04) | Ch 65, 67                     | Ch 64: define the template. Ch 65: blueprint feeds the concept paper. Ch 67: blueprint feeds skill decomposition.                                                        |

## Common Pitfalls (Part 6 Specific)

### Summaries

1. **Do NOT parrot section headings.** Bad: "This lesson covers the Agent Factory, then HireFlow, then what comes next." Good: "Building ten independent apps produces ten silos, not a workforce. The missing ingredient is coordination: shared contracts, managed handoffs, and a governance layer."

2. **DO capture James's mistakes as Common Mistakes.** James makes architectural errors throughout Part 6 (vague skills, no retry logic, trusting agent output without verification). These are the most valuable teaching moments. If a lesson has James making a mistake, it MUST appear in the summary's Common Mistakes section.

3. **No em-dashes.** Use colons for definitions, semicolons for contrasts, commas or parentheses for asides. Target: 0 em-dashes per summary.

4. **Extract the teaching insight, not the narrative wrapper.** The James/Emma dialogue is a vehicle for concepts. The summary should capture what the reader learned, not what characters said.

### Flashcards

1. **Test architectural thinking, not trivia.** Bad: "What was drawn on the whiteboard in Lesson 1?" Good: "Why does building ten independent apps fail to produce a workforce?"

2. **DO create thinking cards about factory design decisions.** Part 6 is about WHY architectural choices matter. At least 40% of each deck should be thinking cards testing reasoning about design tradeoffs, failure modes, and "what breaks if you skip this step."

3. **DO NOT create cards testing James/Emma dialogue details.** The characters exist to deliver concepts. Never test "What did Emma say?" or "What mistake did James make in section 2?" Instead, test the underlying principle.

4. **Recall cards for frameworks with numbered parts.** When a lesson introduces a numbered list (five phases, four FTEs, three primitives, six decomposition steps), create recall cards that enumerate + individual thinking cards for at least 1-2 items.

5. **Card density for Socratic chapters (Ch 61-66, 68, 72).** These chapters have lighter prose density than programming chapters. Expect 6-12 cards per lesson, not 15-25.

6. **Card density for PRIMM-AI+ chapters (Ch 69-71, 73).** Code-heavy chapters produce more card-worthy concepts. Expect 10-20 cards per lesson, especially for "Predict" and "Investigate" sections.

## Per-Chapter Brief

### Section I: The Architecture (Ch 61-64) | A2

**Chapter 61: Agent Factory Two-Layered Model** (7 lessons, Socratic)

- `01-from-smartnotes-to-workforce.md`
- `02-why-chatbot-armies-fail.md`
- `03-the-two-layered-model.md`
- `04-governance-intent-verification-outcomes.md`
- `05-meet-hireflow-four-ftes-one-pipeline.md`
- `06-three-frames-for-the-factory.md`
- `07-chapter-quiz.md`

**Chapter 62: Agents as Economic Actors** (5 lessons, Socratic)

- `01-agents-that-buy-things.md`
- `02-self-provisioning-factories.md`
- `03-budgets-not-permissions.md`
- `04-economic-participation-in-hireflow.md`
- `05-reflection-and-chapter-quiz.md`

**Chapter 63: Agent Maturity Model** (5 lessons, Socratic)

- `01-build-me-a-resume-screener.md`
- `02-incubator-vs-specialist.md`
- `03-the-five-phase-map.md`
- `04-spot-the-phase.md`
- `05-reflection-and-chapter-quiz.md`

**Chapter 64: The HireFlow Blueprint** (7 lessons, Socratic)

- `01-a-wish-is-not-a-blueprint.md`
- `02-domain-decomposition-six-steps.md`
- `03-the-factory-blueprint-template.md`
- `04-hireflow-complete-blueprint.md`
- `05-write-your-factory-blueprint.md`
- `06-from-blueprint-to-concept-paper.md`
- `07-chapter-quiz.md`

### Section II: Explore (Ch 65-66) | A2

**Chapter 65: The 10-80-10 Concept Paper** (6 lessons, Socratic)

- `01-the-blueprint-is-not-enough.md`
- `02-the-ten-eighty-ten-rule.md`
- `03-multi-llm-exploration.md`
- `04-write-the-hireflow-concept-paper.md`
- `05-from-concept-paper-to-domain-mastery.md`
- `06-chapter-quiz.md`

**Chapter 66: The Domain Mastery Gate** (5 lessons, Socratic)

- `01-james-skips-ahead.md`
- `02-from-paper-to-quiz.md`
- `03-the-mastery-gate-pattern.md`
- `04-take-the-hireflow-domain-quiz.md`
- `05-reflection-and-chapter-quiz.md`

### Section III: Incubate (Ch 67-68, 69-71) | B1 (Ch 67-68 Socratic/Hybrid, Ch 69-71 PRIMM-AI+)

**Chapter 67: From Paper to Agent Skills** (8 lessons, Hybrid: Socratic + PRIMM-AI+)

- `01-from-knowledge-to-intelligence.md`
- `02-the-transformation-method.md`
- `03-skill-anatomy-for-agent-ftes.md`
- `04-write-the-job-spec-writer-skill.md`
- `05-write-the-resume-screener-skill.md`
- `06-write-the-interview-question-generator-skill.md`
- `07-write-the-candidate-summarizer-skill.md`
- `08-reflection-and-chapter-quiz.md`

Note: Ch 67 L01-L03 are conceptual (Socratic). L04-L07 are hands-on skill-writing (lightweight PRIMM-AI+). Generate summaries and flashcards for all lessons.

**Chapter 68: Simulation-Driven Validation** (5 lessons, Socratic, A2 proficiency despite being in Incubate section)

- `01-james-ships-without-testing.md`
- `02-the-simulation-protocol.md`
- `03-building-a-scenario-bank.md`
- `04-simulate-hireflow-ftes.md`
- `05-reflection-and-chapter-quiz.md`

**Chapter 69: MCP Fundamentals** (10 lessons, PRIMM-AI+, A2 proficiency)

- `01-why-mcp-the-integration-explosion.md`
- `02-mcp-architecture-host-client-server.md`
- `03-the-three-primitives-tools-resources-prompts.md`
- `04-building-your-first-mcp-server.md`
- `05-resources-and-prompts-in-fastmcp.md`
- `06-mcp-parsons-problem.md`
- `07-modify-exercises-extend-the-server.md`
- `08-configuring-and-debugging-mcp.md`
- `09-make-candidate-profiles-mcp-server.md`
- `10-rubric-and-chapter-quiz.md`

Note: Ch 69 already has `.summary.md` files from a prior run. Generators should check for existing files and SKIP if present (or regenerate only if explicitly told to).

**Chapter 70: Custom MCP Servers** (11 lessons, PRIMM-AI+, B1 proficiency)

- `01-why-custom-mcp-servers.md`
- `02-cv-parser-predict-and-run.md`
- `03-format-edge-cases.md`
- `04-james-bug-format-handling.md`
- `05-job-template-server.md`
- `06-pydantic-input-validation.md`
- `07-context-logging-progress.md`
- `08-parsons-problem.md`
- `09-modify-exercises.md`
- `10-make-cv-parser-job-template.md`
- `11-rubric-and-chapter-quiz.md`

**Chapter 71: Agent Skills + MCP Code Execution** (9 lessons, PRIMM-AI+, B1 proficiency)

- `01-why-runtime-integration.md`
- `02-predict-skill-calls-mcp-tool.md`
- `03-trace-the-tool-call-sequence.md`
- `04-james-bug-tool-failure.md`
- `05-code-execution-and-ai-assisted.md`
- `06-parsons-bridge.md`
- `07-modify-exercises.md`
- `08-make-candidate-summarizer-config.md`
- `09-rubric-and-chapter-quiz.md`

### Section IV: Build Specialist (Ch 72-73) | B1

**Chapter 72: Introduction to Agent SDKs** (6 lessons, Socratic)

- `01-why-not-just-call-the-api.md`
- `02-what-sdks-provide.md`
- `03-two-sdks-claude-and-openai.md`
- `04-nanoclaw-body-plus-brain.md`
- `05-feature-matrix-and-decision-exercise.md`
- `06-reflection-and-chapter-quiz.md`

**Chapter 73: Claude Agents SDK** (18 lessons, PRIMM-AI+)

- `01-why-nancoclaws-brain.md`
- `02-sdk-setup-and-first-query.md`
- `03-predict-agent-tool-call-order.md`
- `04-tracing-the-agent-loop.md`
- `05-connecting-hireflow-mcp-servers.md`
- `06-custom-tools-with-decorator.md`
- `07-multi-agent-handoffs.md`
- `08-guardrails-and-validation.md`
- `09-supervision-and-escalation.md`
- `10-ai-assisted-investigation.md`
- `11-sdk-client-and-cost-tracking.md`
- `12-permission-modes-security.md`
- `13-file-checkpointing.md`
- `14-lifecycle-hooks.md`
- `15-parsons-bridge.md`
- `16-modify-exercises.md`
- `17-make-multi-agent-triage.md`
- `18-rubric-and-chapter-quiz.md`

---

## Reference Files

- Gold-standard summary: `01-the-architecture/61-agent-factory-two-layered-model/01-from-smartnotes-to-workforce.summary.md`
- Gold-standard flashcard deck: `01-the-architecture/61-agent-factory-two-layered-model/01-from-smartnotes-to-workforce.flashcards.yaml`
