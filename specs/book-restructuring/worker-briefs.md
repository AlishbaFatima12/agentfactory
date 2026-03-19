# Worker Briefs — Book Restructuring

## Complete Old→New Chapter Mapping (ALL WORKERS MUST REFERENCE THIS)

### Parts 0-4: UNCHANGED

| Old #    | New #    | Name                          | Part                           |
| -------- | -------- | ----------------------------- | ------------------------------ |
| 1-11     | 1-11     | (Part 0 chapters)             | Part 0                         |
| 12-17    | 12-17    | (Part 1 chapters)             | Part 1                         |
| 18       | **56**   | meet-your-first-ai-employee   | **Moved from Part 1 → Part 5** |
| —        | **18**   | claude-code-teams-cicd        | **NEW placeholder in Part 1**  |
| 19-24    | 19-24    | (Part 2 chapters)             | Part 2                         |
| 25-40    | 25-40    | (Part 3 chapters)             | Part 3                         |
| (Part 4) | (Part 4) | Local numbering 01-09 / 42-55 | Part 4 — NOT TOUCHED           |

### Part 5: Building OpenClaw Apps — NEW

| Old # | New #  | Name                        | Notes              |
| ----- | ------ | --------------------------- | ------------------ |
| 18    | **56** | meet-your-first-ai-employee | Moved from Part 1  |
| —     | **57** | building-openclaw-apps      | NEW placeholder    |
| —     | 58-60  | (reserved)                  | No folders created |

### Part 6: Building Agent Factories (old Part 5: Building Custom Agents)

| Old # | New #  | Name                                       |
| ----- | ------ | ------------------------------------------ |
| 33    | **61** | introduction-to-ai-agents                  |
| 34    | **62** | openai-agents-sdk                          |
| 35    | **63** | google-adk-reliable-agents                 |
| —     | **64** | claude-api-agentic-loops (NEW placeholder) |
| 36    | **65** | anthropic-agents-kit-development           |
| 37    | **66** | mcp-fundamentals                           |
| 38    | **67** | custom-mcp-servers                         |
| 39    | **68** | agent-skills-mcp-code-execution            |
| —     | **69** | multi-agent-reliability (NEW placeholder)  |
| 40    | **70** | fastapi-for-agents                         |
| 41    | **71** | chatkit-server                             |
| 42    | **72** | openai-apps-sdk                            |
| 43    | **73** | vector-databases-rag-langchain             |
| 44    | **74** | relational-databases-sqlmodel              |
| 45    | **75** | augmented-memory                           |
| 46    | **76** | tdd-for-agents                             |
| 47    | **77** | evals-agent-performance                    |
| 48    | **78** | knowledge-graphs-graphrag                  |

### Part 7: Deploying Agent Factories in the Cloud (old Part 6: AI Cloud Native Development)

| Old # | New #  | Name                           |
| ----- | ------ | ------------------------------ |
| 49    | **79** | docker-for-ai-services         |
| 50    | **80** | kubernetes-for-ai-services     |
| 51    | **81** | helm-charts                    |
| 52    | **82** | event-driven-kafka             |
| 53    | **83** | dapr-core                      |
| 54    | **84** | cicd-gitops-argocd             |
| 55    | **85** | observability-cost-engineering |
| 56    | **86** | traffic-engineering            |
| 57    | **87** | dapr-actors-workflows          |
| 58    | **88** | production-security            |
| 59    | **89** | cost-disaster-recovery         |
| 60    | **90** | real-cloud-deployment          |

### Part 8: Turing LLMOps (old Part 7)

| Old # | New #   | Name                         |
| ----- | ------- | ---------------------------- |
| 61    | **91**  | introduction-to-llmops       |
| 62    | **92**  | llm-architecture-compute     |
| 63    | **93**  | data-engineering-fine-tuning |
| 64    | **94**  | supervised-fine-tuning       |
| 65    | **95**  | identity-persona-tuning      |
| 66    | **96**  | agentic-function-calling     |
| 67    | **97**  | model-merging-optimization   |
| 68    | **98**  | alignment-safety             |
| 69    | **99**  | evaluation-quality-gates     |
| 70    | **100** | deployment-serving           |
| 71    | **101** | agent-framework-integration  |
| 72    | **102** | capstone-end-to-end-llmops   |

### Part 9: TypeScript & Realtime Interaction (old Part 8)

| Old # | New #   | Name                           |
| ----- | ------- | ------------------------------ |
| 73    | **103** | typescript-fundamentals        |
| 74    | **104** | async-patterns-streaming       |
| 75    | **105** | runtime-environments-http      |
| 76    | **106** | building-type-safe-sdks        |
| 77    | **107** | testing-typescript-ai          |
| 78    | **108** | cli-tools-developer-experience |

### Part 10: Building Realtime Voice Agents (old Part 9)

| Old # | New #   | Name                            |
| ----- | ------- | ------------------------------- |
| 79    | **109** | voice-ai-fundamentals           |
| 80    | **110** | livekit-agents                  |
| 81    | **111** | pipecat                         |
| 82    | **112** | openai-realtime-api             |
| 83    | **113** | gemini-live-api                 |
| 84    | **114** | phone-browser-integration       |
| 85    | **115** | capstone-production-voice-agent |

---

## Worker-Rename

### Scope

Execute the folder rename operations from `rename-script.md`.

### Exact Folder Paths Touched

```
apps/learn-app/docs/09-Building-Realtime-Voice-Agents → 10-Building-Realtime-Voice-Agents
apps/learn-app/docs/08-TypeScript-Language-Realtime-Interaction → 09-TypeScript-Language-Realtime-Interaction
apps/learn-app/docs/07-Turing-LLMOps-Proprietary-Intelligence → 08-Turing-LLMOps-Proprietary-Intelligence
apps/learn-app/docs/06-AI-Cloud-Native-Development → 07-Deploying-Agent-Factories-in-the-Cloud
apps/learn-app/docs/05-Building-Custom-Agents → 06-Building-Agent-Factories
(create) apps/learn-app/docs/05-Building-OpenClaw-Apps/
apps/learn-app/docs/01-General-Agents-Foundations/18-meet-your-first-ai-employee → 05-Building-OpenClaw-Apps/56-meet-your-first-ai-employee
(create) apps/learn-app/docs/01-General-Agents-Foundations/18-claude-code-teams-cicd/

All chapter folder renames within Parts 6-10 (see rename-script.md Phases 4-9)
All placeholder chapter folders (Ch 18, 57, 64, 69)
```

### Exact Changes

1. Part folder renames (5 `git mv` in REVERSE order)
2. Create new Part 5 folder
3. Move old Ch 18 to Part 5 as Ch 56
4. Create Ch 18 placeholder in Part 1
5. Chapter folder renames within Parts 6-10 (53 `git mv`)
6. Create placeholder chapters (Ch 57, 64, 69) with minimal README.md
7. Create Part 5 README

### Files NOT Touched

- Parts 0-4 content (no folder renames there)
- Any `.md` file content (only folder moves, no text edits)
- `.claude/rules/`, `.claude/agents/`, memory files

### Exit Criteria

- [ ] All 59 `git mv` commands succeed
- [ ] All 6 `mkdir` commands succeed
- [ ] All 5 new README.md placeholder files created
- [ ] `ls -d apps/learn-app/docs/*/` shows 12 entries (00-Prelude, 00-Thinking, 01-04, 05-10)
- [ ] `ls -d apps/learn-app/docs/06-Building-Agent-Factories/*/` shows 18 entries (61-78 including 64, 69)
- [ ] `git status` shows only renames and new files, no deletions
- [ ] Commit with message: `refactor: rename part/chapter folders for book restructuring`

---

## Worker-Part6

### Scope

Update frontmatter and text references for all 18 chapters in Part 6 (post-rename path: `apps/learn-app/docs/06-Building-Agent-Factories/`).

### Exact Folder Paths Touched

```
apps/learn-app/docs/06-Building-Agent-Factories/README.md
apps/learn-app/docs/06-Building-Agent-Factories/61-introduction-to-ai-agents/
apps/learn-app/docs/06-Building-Agent-Factories/62-openai-agents-sdk/
apps/learn-app/docs/06-Building-Agent-Factories/63-google-adk-reliable-agents/
apps/learn-app/docs/06-Building-Agent-Factories/65-anthropic-agents-kit-development/
apps/learn-app/docs/06-Building-Agent-Factories/66-mcp-fundamentals/
apps/learn-app/docs/06-Building-Agent-Factories/67-custom-mcp-servers/
apps/learn-app/docs/06-Building-Agent-Factories/68-agent-skills-mcp-code-execution/
apps/learn-app/docs/06-Building-Agent-Factories/70-fastapi-for-agents/
apps/learn-app/docs/06-Building-Agent-Factories/71-chatkit-server/
apps/learn-app/docs/06-Building-Agent-Factories/72-openai-apps-sdk/
apps/learn-app/docs/06-Building-Agent-Factories/73-vector-databases-rag-langchain/
apps/learn-app/docs/06-Building-Agent-Factories/74-relational-databases-sqlmodel/
apps/learn-app/docs/06-Building-Agent-Factories/75-augmented-memory/
apps/learn-app/docs/06-Building-Agent-Factories/76-tdd-for-agents/
apps/learn-app/docs/06-Building-Agent-Factories/77-evals-agent-performance/
apps/learn-app/docs/06-Building-Agent-Factories/78-knowledge-graphs-graphrag/
```

(Do NOT touch 64-claude-api-agentic-loops/ or 69-multi-agent-reliability/ — those are new placeholders already correct.)

### Exact Changes Per Chapter

For each chapter folder:

1. **README.md**: Update `sidebar_position: OLD` → `sidebar_position: NEW`. Update `title:` from `"Chapter OLD:"` → `"Chapter NEW:"`. Update heading `# Chapter OLD:` → `# Chapter NEW:`.
2. **All lesson .md files with `chapter: OLD` frontmatter**: Change to `chapter: NEW`.
3. **Body text**: Replace `Chapter OLD` with `Chapter NEW` where it refers to the chapter itself (not cross-references to other parts).

Mapping for this worker:

| Old sidebar_position / chapter: | New | Folder                           |
| ------------------------------- | --- | -------------------------------- |
| 33                              | 61  | introduction-to-ai-agents        |
| 34                              | 62  | openai-agents-sdk                |
| 35                              | 63  | google-adk-reliable-agents       |
| 36                              | 65  | anthropic-agents-kit-development |
| 37                              | 66  | mcp-fundamentals                 |
| 38                              | 67  | custom-mcp-servers               |
| 39                              | 68  | agent-skills-mcp-code-execution  |
| 40                              | 70  | fastapi-for-agents               |
| 41                              | 71  | chatkit-server                   |
| 42                              | 72  | openai-apps-sdk                  |
| 43                              | 73  | vector-databases-rag-langchain   |
| 44                              | 74  | relational-databases-sqlmodel    |
| 45                              | 75  | augmented-memory                 |
| 46                              | 76  | tdd-for-agents                   |
| 47                              | 77  | evals-agent-performance          |
| 48                              | 78  | knowledge-graphs-graphrag        |

**Part-level README**: Update `sidebar_position: 5` → `sidebar_position: 6`. Update title from "Building Custom Agents" to "Building Agent Factories".

**CRITICAL cross-reference warning**: When updating "Chapter 41" to "Chapter 71" etc., do NOT update Part 4's internal references. This worker only touches files inside `06-Building-Agent-Factories/`.

**Cross-part references within Part 6 files**: Some Part 6 lessons reference chapters in OTHER parts (e.g., "Chapter 40 FastAPI" when it means old Part 5 Ch 40). Use the full mapping table at the top of this document.

- `70-fastapi-for-agents/15-capstone-agent-powered-task-service.summary.md:30` → `Chapter 41` → `Chapter 71`

### Files NOT Touched

- All files outside `06-Building-Agent-Factories/`
- `64-claude-api-agentic-loops/` and `69-multi-agent-reliability/` (already correct)
- Parts 0-5, 7-10
- Config/rules/agents files

### Exit Criteria

- [ ] All README `sidebar_position` values match new chapter numbers
- [ ] All README titles and headings use new chapter numbers
- [ ] All lesson `chapter: N` frontmatter values updated
- [ ] All body text "Chapter N" references within Part 6 updated
- [ ] `grep -rn "chapter: 3[3-9]\|chapter: 4[0-8]" apps/learn-app/docs/06-Building-Agent-Factories/` returns zero results
- [ ] `grep -rn "sidebar_position: 3[3-9]\|sidebar_position: 4[0-8]" apps/learn-app/docs/06-Building-Agent-Factories/*/README.md` returns zero results
- [ ] Commit: `refactor: update Part 6 chapter numbers (old 33-48 → new 61-78)`

---

## Worker-Parts78

### Scope

Update frontmatter and text references for Parts 7-8 (24 chapters total).

### Exact Folder Paths Touched

```
apps/learn-app/docs/07-Deploying-Agent-Factories-in-the-Cloud/README.md
apps/learn-app/docs/07-Deploying-Agent-Factories-in-the-Cloud/79-docker-for-ai-services/
apps/learn-app/docs/07-Deploying-Agent-Factories-in-the-Cloud/80-kubernetes-for-ai-services/
apps/learn-app/docs/07-Deploying-Agent-Factories-in-the-Cloud/81-helm-charts/
apps/learn-app/docs/07-Deploying-Agent-Factories-in-the-Cloud/82-event-driven-kafka/
apps/learn-app/docs/07-Deploying-Agent-Factories-in-the-Cloud/83-dapr-core/
apps/learn-app/docs/07-Deploying-Agent-Factories-in-the-Cloud/84-cicd-gitops-argocd/
apps/learn-app/docs/07-Deploying-Agent-Factories-in-the-Cloud/85-observability-cost-engineering/
apps/learn-app/docs/07-Deploying-Agent-Factories-in-the-Cloud/86-traffic-engineering/
apps/learn-app/docs/07-Deploying-Agent-Factories-in-the-Cloud/87-dapr-actors-workflows/
apps/learn-app/docs/07-Deploying-Agent-Factories-in-the-Cloud/88-production-security/
apps/learn-app/docs/07-Deploying-Agent-Factories-in-the-Cloud/89-cost-disaster-recovery/
apps/learn-app/docs/07-Deploying-Agent-Factories-in-the-Cloud/90-real-cloud-deployment/

apps/learn-app/docs/08-Turing-LLMOps-Proprietary-Intelligence/README.md
apps/learn-app/docs/08-Turing-LLMOps-Proprietary-Intelligence/91-introduction-to-llmops/
apps/learn-app/docs/08-Turing-LLMOps-Proprietary-Intelligence/92-llm-architecture-compute/
apps/learn-app/docs/08-Turing-LLMOps-Proprietary-Intelligence/93-data-engineering-fine-tuning/
apps/learn-app/docs/08-Turing-LLMOps-Proprietary-Intelligence/94-supervised-fine-tuning/
apps/learn-app/docs/08-Turing-LLMOps-Proprietary-Intelligence/95-identity-persona-tuning/
apps/learn-app/docs/08-Turing-LLMOps-Proprietary-Intelligence/96-agentic-function-calling/
apps/learn-app/docs/08-Turing-LLMOps-Proprietary-Intelligence/97-model-merging-optimization/
apps/learn-app/docs/08-Turing-LLMOps-Proprietary-Intelligence/98-alignment-safety/
apps/learn-app/docs/08-Turing-LLMOps-Proprietary-Intelligence/99-evaluation-quality-gates/
apps/learn-app/docs/08-Turing-LLMOps-Proprietary-Intelligence/100-deployment-serving/
apps/learn-app/docs/08-Turing-LLMOps-Proprietary-Intelligence/101-agent-framework-integration/
apps/learn-app/docs/08-Turing-LLMOps-Proprietary-Intelligence/102-capstone-end-to-end-llmops/
```

### Exact Changes

**Part 7 (12 chapters):**

For each chapter, update:

1. README.md: `sidebar_position` (old→new), `title` (Chapter OLD → Chapter NEW), heading
2. All lesson files: `chapter: OLD` → `chapter: NEW` in frontmatter
3. Body text: `Chapter OLD` → `Chapter NEW`

| Old | New | Folder                         |
| --- | --- | ------------------------------ |
| 49  | 79  | docker-for-ai-services         |
| 50  | 80  | kubernetes-for-ai-services     |
| 51  | 81  | helm-charts                    |
| 52  | 82  | event-driven-kafka             |
| 53  | 83  | dapr-core                      |
| 54  | 84  | cicd-gitops-argocd             |
| 55  | 85  | observability-cost-engineering |
| 56  | 86  | traffic-engineering            |
| 57  | 87  | dapr-actors-workflows          |
| 58  | 88  | production-security            |
| 59  | 89  | cost-disaster-recovery         |
| 60  | 90  | real-cloud-deployment          |

Part 7 README: `sidebar_position: 6` → `sidebar_position: 7`. Update title to "Deploying Agent Factories in the Cloud".

**Part 8 (12 chapters):**

| Old | New | Folder                       |
| --- | --- | ---------------------------- |
| 61  | 91  | introduction-to-llmops       |
| 62  | 92  | llm-architecture-compute     |
| 63  | 93  | data-engineering-fine-tuning |
| 64  | 94  | supervised-fine-tuning       |
| 65  | 95  | identity-persona-tuning      |
| 66  | 96  | agentic-function-calling     |
| 67  | 97  | model-merging-optimization   |
| 68  | 98  | alignment-safety             |
| 69  | 99  | evaluation-quality-gates     |
| 70  | 100 | deployment-serving           |
| 71  | 101 | agent-framework-integration  |
| 72  | 102 | capstone-end-to-end-llmops   |

Part 8 README: `sidebar_position: 7` → `sidebar_position: 8`. Title stays "Turing LLMOps Proprietary Intelligence".

**Cross-part references within Parts 7-8 files**: Use full mapping table. Known cases:

- Part 8 `93-data-engineering-fine-tuning/00-build-data-engineering-skill.md:119` references "Python fundamentals (Part 5)" — verify if this means Part 4 (Python) or old Part 5 (agents). If Part 4, change to "Part 4". If old Part 5, change to "Part 6".

### Files NOT Touched

- Everything outside `07-Deploying-Agent-Factories-in-the-Cloud/` and `08-Turing-LLMOps-Proprietary-Intelligence/`
- Parts 0-6, 9-10

### Exit Criteria

- [ ] All Part 7 chapter READMEs: `sidebar_position` updated (49-60 → 79-90)
- [ ] All Part 8 chapter READMEs: `sidebar_position` updated (61-72 → 91-102)
- [ ] All `chapter:` frontmatter updated in lesson files
- [ ] Part-level READMEs: sidebar_position 6→7 and 7→8
- [ ] `grep -rn "chapter: [4-7][0-9]" apps/learn-app/docs/07-Deploying-Agent-Factories-in-the-Cloud/ apps/learn-app/docs/08-Turing-LLMOps-Proprietary-Intelligence/` returns zero results
- [ ] Commit: `refactor: update Parts 7-8 chapter numbers (old 49-72 → new 79-102)`

---

## Worker-Parts910

### Scope

Update frontmatter for Parts 9-10 (13 chapters total) + create/update the Part 5 chapter (56-meet-your-first-ai-employee) frontmatter + Part 1 Chapter A placeholder frontmatter.

### Exact Folder Paths Touched

```
apps/learn-app/docs/09-TypeScript-Language-Realtime-Interaction/README.md
apps/learn-app/docs/09-TypeScript-Language-Realtime-Interaction/103-typescript-fundamentals/
apps/learn-app/docs/09-TypeScript-Language-Realtime-Interaction/104-async-patterns-streaming/
apps/learn-app/docs/09-TypeScript-Language-Realtime-Interaction/105-runtime-environments-http/
apps/learn-app/docs/09-TypeScript-Language-Realtime-Interaction/106-building-type-safe-sdks/
apps/learn-app/docs/09-TypeScript-Language-Realtime-Interaction/107-testing-typescript-ai/
apps/learn-app/docs/09-TypeScript-Language-Realtime-Interaction/108-cli-tools-developer-experience/

apps/learn-app/docs/10-Building-Realtime-Voice-Agents/README.md
apps/learn-app/docs/10-Building-Realtime-Voice-Agents/109-voice-ai-fundamentals/
apps/learn-app/docs/10-Building-Realtime-Voice-Agents/110-livekit-agents/
apps/learn-app/docs/10-Building-Realtime-Voice-Agents/111-pipecat/
apps/learn-app/docs/10-Building-Realtime-Voice-Agents/112-openai-realtime-api/
apps/learn-app/docs/10-Building-Realtime-Voice-Agents/113-gemini-live-api/
apps/learn-app/docs/10-Building-Realtime-Voice-Agents/114-phone-browser-integration/
apps/learn-app/docs/10-Building-Realtime-Voice-Agents/115-capstone-production-voice-agent/

apps/learn-app/docs/05-Building-OpenClaw-Apps/56-meet-your-first-ai-employee/ (all files)
```

### Exact Changes

**Part 9 (6 chapters):**

| Old | New | Folder                         |
| --- | --- | ------------------------------ |
| 73  | 103 | typescript-fundamentals        |
| 74  | 104 | async-patterns-streaming       |
| 75  | 105 | runtime-environments-http      |
| 76  | 106 | building-type-safe-sdks        |
| 77  | 107 | testing-typescript-ai          |
| 78  | 108 | cli-tools-developer-experience |

Part 9 README: `sidebar_position: 8` → `sidebar_position: 9`. Title stays "TypeScript Language Realtime Interaction".

**Part 10 (7 chapters):**

| Old | New | Folder                          |
| --- | --- | ------------------------------- |
| 79  | 109 | voice-ai-fundamentals           |
| 80  | 110 | livekit-agents                  |
| 81  | 111 | pipecat                         |
| 82  | 112 | openai-realtime-api             |
| 83  | 113 | gemini-live-api                 |
| 84  | 114 | phone-browser-integration       |
| 85  | 115 | capstone-production-voice-agent |

Part 10 README: `sidebar_position: 9` → `sidebar_position: 10`. Title stays "Building Realtime Voice Agents".

**Chapter 56 (moved from Part 1):**

Update all files in `05-Building-OpenClaw-Apps/56-meet-your-first-ai-employee/`:

- README.md: `title: "Chapter 18:` → `title: "Chapter 56:`, `sidebar_position: 18` → `sidebar_position: 56`, heading
- All lesson files: `Chapter 18` → `Chapter 56` in frontmatter and body text
- Quiz: `Chapter 18` → `Chapter 56` in title, heading, assessment title
- See cross-reference-audit.md Section 1 for complete list of 18→56 changes in this folder

### Files NOT Touched

- Parts 0-4 content (except Chapter 56's internal refs)
- Parts 6-8
- Config/rules/agents files

### Exit Criteria

- [ ] All Part 9 chapter READMEs: `sidebar_position` updated (73-78 → 103-108)
- [ ] All Part 10 chapter READMEs: `sidebar_position` updated (79-85 → 109-115)
- [ ] Part-level READMEs: sidebar_position 8→9 and 9→10
- [ ] Chapter 56: all "Chapter 18" → "Chapter 56" in text and frontmatter
- [ ] `grep -rn "Chapter 18" apps/learn-app/docs/05-Building-OpenClaw-Apps/56-meet-your-first-ai-employee/` returns zero results
- [ ] Commit: `refactor: update Parts 9-10 + Chapter 56 numbers (old 73-85 → new 103-115, old 18 → 56)`

---

## Worker-XRefs

### Scope

Update cross-references in Parts 0-4 (referring to moved/renumbered content) and all config/rules/agent/memory files.

### Exact Folder Paths Touched

```
apps/learn-app/docs/00-Thinking-is-the-Curriculum/ (select files only)
apps/learn-app/docs/01-General-Agents-Foundations/README.md
apps/learn-app/docs/02-Agent-Workflow-Primitives/README.md
apps/learn-app/docs/04-Programming-in-the-AI-Era/ (select files only)
apps/learn-app/docs/which-agents-2026.md
.claude/rules/chapter-resolution.md (MAJOR rewrite)
.claude/rules/content-pipeline.md
.claude/agents/educational-validator.md
memory/ch21-companion-analysis.md (if still exists)
memory/project_book_restructuring.md (update after completion)
```

### Exact Changes

**Part 0 files:**

| File                                                                                        | Line | Old      | New      |
| ------------------------------------------------------------------------------------------- | ---- | -------- | -------- |
| `00-Thinking-is-the-Curriculum/11-thinking-portfolio/01-portfolio-assembly.md`              | 70   | `Part 5` | `Part 6` |
| `00-Thinking-is-the-Curriculum/11-thinking-portfolio/02-growth-map.md`                      | 58   | `Part 5` | `Part 6` |
| `00-Thinking-is-the-Curriculum/11-thinking-portfolio/01-portfolio-assembly.flashcards.yaml` | 39   | `Part 5` | `Part 6` |

**Part 1 files:**

| File                                      | Line | Old                                                 | New                                                                                               |
| ----------------------------------------- | ---- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `01-General-Agents-Foundations/README.md` | 82   | `### Chapter 18: Meet Your First AI Employee`       | Update to reference Ch 56 in Part 5. E.g., `### Chapter 56: Meet Your First AI Employee (Part 5)` |
| `01-General-Agents-Foundations/README.md` | 84   | `Chapter 18 introduces OpenClaw` + surrounding text | Update chapter ref to 56, note it's now in Part 5                                                 |

**Part 2 files:**

| File                                     | Line | Old          | New          |
| ---------------------------------------- | ---- | ------------ | ------------ |
| `02-Agent-Workflow-Primitives/README.md` | 8    | `Chapter 18` | `Chapter 56` |

**Part 4 files:**

| File                                                                                                                       | Line | Old                              | New                                |
| -------------------------------------------------------------------------------------------------------------------------- | ---- | -------------------------------- | ---------------------------------- |
| `04-Programming-in-the-AI-Era/07-cli-and-concurrency/README.md`                                                            | 12   | `Part 5`                         | `Part 6`                           |
| `04-Programming-in-the-AI-Era/README.md`                                                                                   | 189  | `Part 5: Building Custom Agents` | `Part 6: Building Agent Factories` |
| `04-Programming-in-the-AI-Era/01-the-workbench/44-the-development-environment/02-installing-uv-and-creating-smartnotes.md` | 185  | `In Part 6`                      | `In Part 7`                        |

**Top-level files:**

| File                   | Line | Old          | New          |
| ---------------------- | ---- | ------------ | ------------ |
| `which-agents-2026.md` | 124  | `Chapter 18` | `Chapter 56` |
| `which-agents-2026.md` | 134  | `Part 5`     | `Part 6`     |
| `which-agents-2026.md` | 136  | `Part 5`     | `Part 6`     |
| `which-agents-2026.md` | 154  | `Part 5`     | `Part 6`     |

**Config/rules files:**

| File                                          | Change                                                                                                                          |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `.claude/rules/chapter-resolution.md`         | **FULL REWRITE** of directory tree example and chapter ranges. Update to show Parts 0-10, new chapter ranges, new folder names. |
| `.claude/rules/content-pipeline.md:47`        | `Part 5-6` → `Part 6-7`                                                                                                         |
| `.claude/agents/educational-validator.md:592` | `Part 5+` → `Part 6+`                                                                                                           |

**Memory files:**

| File                                   | Change                                    |
| -------------------------------------- | ----------------------------------------- |
| `memory/ch21-companion-analysis.md`    | `Part 7 (LLMOps)` → `Part 8 (LLMOps)`     |
| `memory/project_book_restructuring.md` | Update to reflect completed restructuring |

### Files NOT Touched

- Parts 5-10 content (handled by other workers)
- Part 3 (no changes needed — Chapter 33-40 refs are all self-references)
- Part 4 internal chapter references (42-55 are Part 4's own numbers)
- `.claude/agents/` files other than educational-validator.md
- `.claude/rules/` files other than chapter-resolution.md and content-pipeline.md

### Exit Criteria

- [ ] `grep -rn "Chapter 18\b" apps/learn-app/docs/0[0-4]-*/` returns zero results (all updated to Chapter 56)
- [ ] `grep -rn "Part 5.*Building Custom\|Part 5.*agent" apps/learn-app/docs/` returns zero results
- [ ] `.claude/rules/chapter-resolution.md` reflects new 11-part structure
- [ ] No stale Part numbers in config/rules files
- [ ] Commit: `refactor: update cross-references for book restructuring (Parts 0-4 + config)`

---

## Worker Assignment Table

| Worker          | Parts              | Chapters                                | Estimated Files                   | Depends On    |
| --------------- | ------------------ | --------------------------------------- | --------------------------------- | ------------- |
| Worker-Rename   | All                | All                                     | 0 content edits (folder ops only) | Nothing       |
| Worker-Part6    | Part 6             | Ch 61-78 (16 existing + 2 placeholders) | ~180 files                        | Worker-Rename |
| Worker-Parts78  | Parts 7-8          | Ch 79-102 (24 chapters)                 | ~80 files                         | Worker-Rename |
| Worker-Parts910 | Parts 9-10 + Ch 56 | Ch 103-115 + Ch 56 (14 chapters)        | ~40 files                         | Worker-Rename |
| Worker-XRefs    | Parts 0-4 + config | Cross-references only                   | ~15 files                         | Worker-Rename |

**Parallelism**: Workers Part6, Parts78, Parts910, and XRefs can all run in parallel AFTER Worker-Rename completes. They have zero file overlap.
