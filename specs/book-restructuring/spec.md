# Book Restructuring Spec: Add Parts 5-7, Renumber Everything

## Decision Log

All decisions confirmed by MJS on 2026-03-19.

## Overview

Insert 3 new parts after Part 4. Bump all existing Parts 5-9 up by 3.
Fix the pre-existing chapter numbering collision (Part 3 ch 33-40 vs Part 5 ch 33-48).
Add 2 new certification exam chapters (A and D) + fold Chapter C into Ch 36.

## Part Structure: Before → After

| New # | Folder Name                                     | Source                                       | Changes                                              |
| ----- | ----------------------------------------------- | -------------------------------------------- | ---------------------------------------------------- |
| 0     | `00-Thinking-is-the-Curriculum`                 | Same                                         | None                                                 |
| 1     | `01-General-Agents-Foundations`                 | Same                                         | -Ch18 (moves to P5), +Chapter A as new Ch 18         |
| 2     | `02-Agent-Workflow-Primitives`                  | Same                                         | None                                                 |
| 3     | `03-Business-Domain-Agent-Workflows`            | Same                                         | None                                                 |
| 4     | `04-Programming-in-the-AI-Era`                  | Same                                         | NOT OUR CONCERN (local numbering stays)              |
| **5** | **`05-Building-OpenClaw-Apps`**                 | **NEW**                                      | Old Ch18 becomes Ch 56, + TutorClaw chapter(s)       |
| **6** | **`06-Building-Agent-Factories`**               | Old `05-Building-Custom-Agents` renamed      | +Chapter B, +Chapter D, +Chapter C folded into Ch 36 |
| **7** | **`07-Deploying-Agent-Factories-in-the-Cloud`** | Old `06-AI-Cloud-Native-Development` renamed | Content unchanged                                    |
| 8     | `08-Turing-LLMOps-Proprietary-Intelligence`     | Old Part 7 (folder 07→08)                    | Folder rename only                                   |
| 9     | `09-TypeScript-Language-Realtime-Interaction`   | Old Part 8 (folder 08→09)                    | Folder rename only                                   |
| 10    | `10-Building-Realtime-Voice-Agents`             | Old Part 9 (folder 09→10)                    | Folder rename only                                   |

## Global Chapter Numbering: Complete Map

### Part 0: Thinking is the Curriculum (Ch 1-11) — UNCHANGED

No renumbering needed.

### Part 1: General Agents Foundations (Ch 12-18) — MODIFIED

| Position | Old # | New #  | Folder Name                        | Notes                   |
| -------- | ----- | ------ | ---------------------------------- | ----------------------- |
| 1        | 12    | 12     | `12-agent-factory-paradigm`        | Unchanged               |
| 2        | 13    | 13     | `13-markdown-writing-instructions` | Unchanged               |
| 3        | 14    | 14     | `14-general-agents`                | Unchanged               |
| 4        | 15    | 15     | `15-context-engineering`           | Unchanged               |
| 5        | 16    | 16     | `16-spec-driven-development`       | Unchanged               |
| 6        | 17    | 17     | `17-seven-principles`              | Unchanged               |
| 7        | —     | **18** | **`18-claude-code-teams-cicd`**    | **NEW: Cert Chapter A** |

Old Ch 18 (`18-meet-your-first-ai-employee`) → MOVES to Part 5 as Ch 56.

### Part 2: Agent Workflow Primitives (Ch 19-24) — UNCHANGED

### Part 3: Business Domain Agent Workflows (Ch 25-40) — UNCHANGED

Chapters 25-40 within sections. No renumbering needed.

### Part 4: Programming in the AI Era — NOT OUR CONCERN

Local numbering 01-09. Left as-is. Conceptually Ch 41-55 but we don't assign.

### Part 5: Building OpenClaw Apps (Ch 56-58) — NEW

| Position | New #  | Folder Name                      | Source                                                             |
| -------- | ------ | -------------------------------- | ------------------------------------------------------------------ |
| 1        | **56** | `56-meet-your-first-ai-employee` | Moved from Part 1 (old Ch 18)                                      |
| 2        | **57** | `57-building-openclaw-apps`      | NEW: TutorClaw architecture + economics + decisions (deep chapter) |
| 3        | **58** | `58-nemoclaw`                    | NEW: Maybe (placeholder, confirm later)                            |

### Part 6: Building Agent Factories (Ch 59-78) — Old Part 5 RENAMED + RENUMBERED

| Position | Old # | New #  | Folder Name                           | Notes                                    |
| -------- | ----- | ------ | ------------------------------------- | ---------------------------------------- |
| 1        | 33    | **59** | `59-introduction-to-ai-agents`        | Renumbered                               |
| 2        | 34    | **60** | `60-openai-agents-sdk`                | Renumbered                               |
| 3        | 35    | **61** | `61-google-adk-reliable-agents`       | Renumbered                               |
| 4        | —     | **62** | **`62-claude-api-agentic-loops`**     | **NEW: Cert Chapter B**                  |
| 5        | 36    | **63** | `63-anthropic-agents-kit-development` | Renumbered + Chapter C lessons folded in |
| 6        | 37    | **64** | `64-mcp-fundamentals`                 | Renumbered                               |
| 7        | 38    | **65** | `65-custom-mcp-servers`               | Renumbered                               |
| 8        | 39    | **66** | `66-agent-skills-mcp-code-execution`  | Renumbered                               |
| 9        | —     | **67** | **`67-multi-agent-reliability`**      | **NEW: Cert Chapter D**                  |
| 10       | 40    | **68** | `68-fastapi-for-agents`               | Renumbered                               |
| 11       | 41    | **69** | `69-chatkit-server`                   | Renumbered                               |
| 12       | 42    | **70** | `70-openai-apps-sdk`                  | Renumbered                               |
| 13       | 43    | **71** | `71-vector-databases-rag-langchain`   | Renumbered                               |
| 14       | 44    | **72** | `72-relational-databases-sqlmodel`    | Renumbered                               |
| 15       | 45    | **73** | `73-augmented-memory`                 | Renumbered                               |
| 16       | 46    | **74** | `74-tdd-for-agents`                   | Renumbered                               |
| 17       | 47    | **75** | `75-evals-agent-performance`          | Renumbered                               |
| 18       | 48    | **76** | `76-knowledge-graphs-graphrag`        | Renumbered                               |

### Part 7: Deploying Agent Factories in the Cloud (Ch 77-88) — Old Part 6 RENAMED + RENUMBERED

| Position | Old # | New #  | Folder Name                         |
| -------- | ----- | ------ | ----------------------------------- |
| 1        | 49    | **77** | `77-docker-for-ai-services`         |
| 2        | 50    | **78** | `78-kubernetes-for-ai-services`     |
| 3        | 51    | **79** | `79-helm-charts`                    |
| 4        | 52    | **80** | `80-event-driven-kafka`             |
| 5        | 53    | **81** | `81-dapr-core`                      |
| 6        | 54    | **82** | `82-cicd-gitops-argocd`             |
| 7        | 55    | **83** | `83-observability-cost-engineering` |
| 8        | 56    | **84** | `84-traffic-engineering`            |
| 9        | 57    | **85** | `85-dapr-actors-workflows`          |
| 10       | 58    | **86** | `86-production-security`            |
| 11       | 59    | **87** | `87-cost-disaster-recovery`         |
| 12       | 60    | **88** | `88-real-cloud-deployment`          |

### Part 8: Turing LLMOps (Ch 89-100) — Old Part 7 RENUMBERED

| Position | Old # | New #   | Folder Name                       |
| -------- | ----- | ------- | --------------------------------- |
| 1        | 61    | **89**  | `89-introduction-to-llmops`       |
| 2        | 62    | **90**  | `90-llm-architecture-compute`     |
| 3        | 63    | **91**  | `91-data-engineering-fine-tuning` |
| 4        | 64    | **92**  | `92-supervised-fine-tuning`       |
| 5        | 65    | **93**  | `93-identity-persona-tuning`      |
| 6        | 66    | **94**  | `94-agentic-function-calling`     |
| 7        | 67    | **95**  | `95-model-merging-optimization`   |
| 8        | 68    | **96**  | `96-alignment-safety`             |
| 9        | 69    | **97**  | `97-evaluation-quality-gates`     |
| 10       | 70    | **98**  | `98-deployment-serving`           |
| 11       | 71    | **99**  | `99-agent-framework-integration`  |
| 12       | 72    | **100** | `100-capstone-end-to-end-llmops`  |

### Part 9: TypeScript & Realtime Interaction (Ch 101-106) — Old Part 8 RENUMBERED

| Position | Old # | New #   | Folder Name                          |
| -------- | ----- | ------- | ------------------------------------ |
| 1        | 73    | **101** | `101-typescript-fundamentals`        |
| 2        | 74    | **102** | `102-async-patterns-streaming`       |
| 3        | 75    | **103** | `103-runtime-environments-http`      |
| 4        | 76    | **104** | `104-building-type-safe-sdks`        |
| 5        | 77    | **105** | `105-testing-typescript-ai`          |
| 6        | 78    | **106** | `106-cli-tools-developer-experience` |

### Part 10: Building Realtime Voice Agents (Ch 107-113) — Old Part 9 RENUMBERED

| Position | Old # | New #   | Folder Name                           |
| -------- | ----- | ------- | ------------------------------------- |
| 1        | 79    | **107** | `107-voice-ai-fundamentals`           |
| 2        | 80    | **108** | `108-livekit-agents`                  |
| 3        | 81    | **109** | `109-pipecat`                         |
| 4        | 82    | **110** | `110-openai-realtime-api`             |
| 5        | 83    | **111** | `111-gemini-live-api`                 |
| 6        | 84    | **112** | `112-phone-browser-integration`       |
| 7        | 85    | **113** | `113-capstone-production-voice-agent` |

## Summary Counts

- **Total parts**: 11 (0-10)
- **Total chapters**: ~113
- **Chapters renumbered**: 53 (old Ch 33-85 → new Ch 59-113)
- **Chapters moved**: 1 (old Ch 18 → Ch 56)
- **New chapters added**: 4 (Ch 18 placeholder, Ch 57, Ch 62, Ch 67)
- **Placeholder chapters**: 1 (Ch 58 NemoClaw, confirm later)
- **Part folders renamed**: 5 (old 05→06, 06→07, 07→08, 08→09, 09→10)
- **Part folders created**: 1 (new 05-Building-OpenClaw-Apps)

## Execution Phases

### Phase 1: Create spec + plan (this document)

### Phase 2: Part folder renames (05→06→07→08→09→10, MUST go in reverse order)

### Phase 3: Create new Part 5 folder + placeholder chapters

### Phase 4: Move Ch 18 from Part 1 to Part 5, add Chapter A placeholder

### Phase 5: Chapter folder renames within Parts 6-10 (all 53 chapters)

### Phase 6: Create Chapter B and D placeholder folders in Part 6

### Phase 7: Update all README/lesson frontmatter (chapter numbers, titles, sidebar_positions)

### Phase 8: Cross-reference updates (grep for old chapter numbers across all files)

### Phase 9: Update CLAUDE.md rules (chapter-resolution.md, memory files)

### Phase 10: Verification (build check, broken link scan)

## Constraints

- Part 4 local numbering is NOT touched
- Part 0-3 chapter numbers (1-40) are NOT touched
- Old Ch 18 content moves intact (all lessons, flashcards, summaries)
- Chapter C content is NOT a new chapter — it gets folded into Ch 63 (old 36) as new lessons
- NemoClaw (Ch 58) is a PLACEHOLDER — may or may not be created
- No content writing in this operation — only structural changes
