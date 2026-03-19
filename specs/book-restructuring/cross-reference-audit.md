# Cross-Reference Audit — Book Restructuring

## Methodology

Grep results across `apps/learn-app/docs/`, `.claude/rules/`, `.claude/agents/`, and memory files.
Each entry: file path, line number, old value, required new value.

---

## 1. "Chapter 18" References (old Ch 18 → Ch 56)

All existing "Chapter 18" references refer to "Meet Your First AI Employee" which moves to Part 5 as Ch 56.

### NEEDS UPDATE — Inside the moved chapter itself (will be in `05-Building-OpenClaw-Apps/56-meet-your-first-ai-employee/` after rename)

| File (post-rename path)                                               | Line | Old Value                                                                       | New Value                                                     |
| --------------------------------------------------------------------- | ---- | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `56-meet-your-first-ai-employee/README.md`                            | 3    | `title: "Chapter 18: Meet Your First AI Employee - OpenClaw"`                   | `title: "Chapter 56: Meet Your First AI Employee - OpenClaw"` |
| `56-meet-your-first-ai-employee/README.md`                            | 27   | `# Chapter 18: Meet Your First AI Employee - OpenClaw`                          | `# Chapter 56: Meet Your First AI Employee - OpenClaw`        |
| `56-meet-your-first-ai-employee/08-what-people-are-building.md`       | 142  | `Chapter 18 Building Blocks:` (×5 occurrences at lines 142, 150, 158, 166, 174) | `Chapter 56 Building Blocks:`                                 |
| `56-meet-your-first-ai-employee/08-what-people-are-building.md`       | 345  | `Chapter 18 Pattern`                                                            | `Chapter 56 Pattern`                                          |
| `56-meet-your-first-ai-employee/09-vertical-agent-factory.md`         | 144  | `Your Chapter 18 Experience`                                                    | `Your Chapter 56 Experience`                                  |
| `56-meet-your-first-ai-employee/09-vertical-agent-factory.md`         | 296  | `in Chapter 18 by using OpenClaw`                                               | `in Chapter 56 by using OpenClaw`                             |
| `56-meet-your-first-ai-employee/10-nanoclaw-hands-on.summary.md`      | 5    | `every Chapter 18 concept`                                                      | `every Chapter 56 concept`                                    |
| `56-meet-your-first-ai-employee/10-nanoclaw-hands-on.md`              | 365  | `everything in Chapter 18`                                                      | `everything in Chapter 56`                                    |
| `56-meet-your-first-ai-employee/11-chapter-quiz.md`                   | 3    | `"Chapter 18: Meet Your First AI Employee Quiz"`                                | `"Chapter 56: Meet Your First AI Employee Quiz"`              |
| `56-meet-your-first-ai-employee/11-chapter-quiz.md`                   | 11   | `# Chapter 18: Meet Your First AI Employee Quiz`                                | `# Chapter 56: Meet Your First AI Employee Quiz`              |
| `56-meet-your-first-ai-employee/11-chapter-quiz.md`                   | 16   | `title="Chapter 18: Meet Your First AI Employee Assessment"`                    | `title="Chapter 56: Meet Your First AI Employee Assessment"`  |
| `56-meet-your-first-ai-employee/11-chapter-quiz.md`                   | 464  | `You've completed Chapter 18`                                                   | `You've completed Chapter 56`                                 |
| `56-meet-your-first-ai-employee/11-chapter-quiz.md`                   | 472  | `Each requirement maps to a pattern from Chapter 18`                            | `Each requirement maps to a pattern from Chapter 56`          |
| `56-meet-your-first-ai-employee/11-chapter-quiz.md`                   | 524  | `I completed Chapter 18`                                                        | `I completed Chapter 56`                                      |
| `56-meet-your-first-ai-employee/11-chapter-quiz.md`                   | 554  | `the security and reliability lessons from Chapter 18`                          | `the security and reliability lessons from Chapter 56`        |
| `56-meet-your-first-ai-employee/11-chapter-quiz.md`                   | 558  | `You started Chapter 18`                                                        | `You started Chapter 56`                                      |
| `56-meet-your-first-ai-employee/11-chapter-quiz.summary.md`           | 7    | `# Summary: Chapter 18 Quiz`                                                    | `# Summary: Chapter 56 Quiz`                                  |
| `56-meet-your-first-ai-employee/09-vertical-agent-factory.summary.md` | 38   | `disconnected from Chapter 18`                                                  | `disconnected from Chapter 56`                                |

### NEEDS UPDATE — References from other parts

| File                                      | Line | Old Value                                     | New Value                                                                                   |
| ----------------------------------------- | ---- | --------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `01-General-Agents-Foundations/README.md` | 82   | `### Chapter 18: Meet Your First AI Employee` | `### Chapter 56: Meet Your First AI Employee` (also update text to note it's now in Part 5) |
| `01-General-Agents-Foundations/README.md` | 84   | `Chapter 18 introduces OpenClaw`              | `Chapter 56 introduces OpenClaw` (also update cross-ref to Part 5)                          |
| `02-Agent-Workflow-Primitives/README.md`  | 8    | `what an AI Employee can do (Chapter 18)`     | `what an AI Employee can do (Chapter 56)`                                                   |
| `which-agents-2026.md`                    | 124  | `Chapter 18 walks you through`                | `Chapter 56 walks you through`                                                              |

---

## 2. "Chapter 41-85" References (unambiguous old→new)

### Part 4 INTERNAL references — NO CHANGE

Part 4 uses local chapter numbers 42-55 that happen to overlap with the global renumbering range. These are Part 4's own chapter numbers and must NOT be changed.

| File Pattern                                                                     | Chapters Referenced    | Status                          |
| -------------------------------------------------------------------------------- | ---------------------- | ------------------------------- |
| `04-Programming-in-the-AI-Era/01-the-workbench/42-the-primm-ai-framework/*`      | Chapter 42, 43, 44, 45 | **NO CHANGE** — Part 4 internal |
| `04-Programming-in-the-AI-Era/01-the-workbench/43-ten-axioms-*/*`                | Chapter 42, 43, 44, 45 | **NO CHANGE** — Part 4 internal |
| `04-Programming-in-the-AI-Era/01-the-workbench/44-the-development-environment/*` | Chapter 42, 43, 44, 45 | **NO CHANGE** — Part 4 internal |
| `04-Programming-in-the-AI-Era/01-the-workbench/45-reading-python/*`              | Chapter 42, 43, 44, 45 | **NO CHANGE** — Part 4 internal |
| All files under `04-Programming-in-the-AI-Era/`                                  | All chapter refs       | **NO CHANGE**                   |

### NEEDS UPDATE — Old Part 5 (→ Part 6) internal references

These are within the chapters themselves. After the folder rename, they will be in `06-Building-Agent-Factories/`.

| Old Chapter | New Chapter | Files With Self-References                                                                        | Changes Needed                                             |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 41          | 71          | `41-chatkit-server/README.md` (title, heading), `08-capstone-conversational-agent.md` (body text) | `Chapter 41` → `Chapter 71`                                |
| 42          | 72          | `42-openai-apps-sdk/README.md`, `quiz.md`, multiple lesson frontmatter `chapter: 42`              | `Chapter 42` → `Chapter 72`, `chapter: 42` → `chapter: 72` |
| 43          | 73          | `43-vector-databases-rag-langchain/README.md`, lesson frontmatter `chapter: 43`                   | `Chapter 43` → `Chapter 73`, `chapter: 43` → `chapter: 73` |
| 44          | 74          | `44-relational-databases-sqlmodel/README.md`, lesson frontmatter `chapter: 44`                    | `Chapter 44` → `Chapter 74`, `chapter: 44` → `chapter: 74` |
| 45          | 75          | `45-augmented-memory/README.md`, lesson frontmatter `chapter: 45`                                 | `Chapter 45` → `Chapter 75`, `chapter: 45` → `chapter: 75` |
| 46          | 76          | `46-tdd-for-agents/README.md`, `quiz.md`, lesson frontmatter `chapter: 46`                        | `Chapter 46` → `Chapter 76`, `chapter: 46` → `chapter: 76` |
| 47          | 77          | `47-evals-agent-performance/README.md`, lesson frontmatter `chapter: 47`                          | `Chapter 47` → `Chapter 77`, `chapter: 47` → `chapter: 77` |
| 48          | 78          | `48-knowledge-graphs-graphrag/README.md`                                                          | `Chapter 48` → `Chapter 78`                                |

### NEEDS UPDATE — Old Part 5 cross-chapter references

| File (post-rename path under 06-Building-Agent-Factories/)                | Line | Old Value                                                  | New Value                                                  |
| ------------------------------------------------------------------------- | ---- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `70-fastapi-for-agents/15-capstone-agent-powered-task-service.summary.md` | 30   | `Chapter 41 (ChatKit Server) / Part 7 deployment chapters` | `Chapter 71 (ChatKit Server) / Part 7 deployment chapters` |

### NEEDS UPDATE — Old Part 6 (→ Part 7) internal references

All lesson frontmatter `chapter: NN` values need updating. Chapters 49-60 → 79-90.

| Old Ch | New Ch | Folder                           | `chapter:` frontmatter          | `sidebar_position:` in README |
| ------ | ------ | -------------------------------- | ------------------------------- | ----------------------------- |
| 49     | 79     | `docker-for-ai-services`         | No `chapter:` field found       | README: 49→79                 |
| 50     | 80     | `kubernetes-for-ai-services`     | `chapter: 50` (26 lesson files) | README: 50→80                 |
| 51     | 81     | `helm-charts`                    | No `chapter:` field found       | README: 51→81                 |
| 52     | 82     | `event-driven-kafka`             | `chapter: 52` (multiple files)  | README: 52→82                 |
| 53     | 83     | `dapr-core`                      | No `chapter:` field found       | README: 53→83                 |
| 54     | 84     | `cicd-gitops-argocd`             | No `chapter:` field found       | README: 54→84                 |
| 55     | 85     | `observability-cost-engineering` | No `chapter:` field found       | README: 55→85                 |
| 56     | 86     | `traffic-engineering`            | `chapter: 56` (13 files)        | README: 56→86                 |
| 57     | 87     | `dapr-actors-workflows`          | No `chapter:` field found       | README: 57→87                 |
| 58     | 88     | `production-security`            | No `chapter:` field found       | README: 58→88                 |
| 59     | 89     | `cost-disaster-recovery`         | No `chapter:` field found       | README: 59→89                 |
| 60     | 90     | `real-cloud-deployment`          | No `chapter:` field found       | README: 60→90                 |

### NEEDS UPDATE — Old Part 7 (→ Part 8) internal references

| Old Ch | New Ch | Folder                         | README sidebar_position |
| ------ | ------ | ------------------------------ | ----------------------- |
| 61     | 91     | `introduction-to-llmops`       | 61→91                   |
| 62     | 92     | `llm-architecture-compute`     | 62→92                   |
| 63     | 93     | `data-engineering-fine-tuning` | 63→93                   |
| 64     | 94     | `supervised-fine-tuning`       | 64→94                   |
| 65     | 95     | `identity-persona-tuning`      | 65→95                   |
| 66     | 96     | `agentic-function-calling`     | 66→96                   |
| 67     | 97     | `model-merging-optimization`   | 67→97                   |
| 68     | 98     | `alignment-safety`             | 68→98                   |
| 69     | 99     | `evaluation-quality-gates`     | 69→99                   |
| 70     | 100    | `deployment-serving`           | 70→100                  |
| 71     | 101    | `agent-framework-integration`  | 71→101                  |
| 72     | 102    | `capstone-end-to-end-llmops`   | 72→102                  |

### NEEDS UPDATE — Old Part 8 (→ Part 9) internal references

| Old Ch | New Ch | Folder                           | README sidebar_position |
| ------ | ------ | -------------------------------- | ----------------------- |
| 73     | 103    | `typescript-fundamentals`        | 73→103                  |
| 74     | 104    | `async-patterns-streaming`       | 74→104                  |
| 75     | 105    | `runtime-environments-http`      | 75→105                  |
| 76     | 106    | `building-type-safe-sdks`        | 76→106                  |
| 77     | 107    | `testing-typescript-ai`          | 77→107                  |
| 78     | 108    | `cli-tools-developer-experience` | 78→108                  |

### NEEDS UPDATE — Old Part 9 (→ Part 10) internal references

| Old Ch | New Ch | Folder                            | README sidebar_position |
| ------ | ------ | --------------------------------- | ----------------------- |
| 79     | 109    | `voice-ai-fundamentals`           | 79→109                  |
| 80     | 110    | `livekit-agents`                  | 80→110                  |
| 81     | 111    | `pipecat`                         | 81→111                  |
| 82     | 112    | `openai-realtime-api`             | 82→112                  |
| 83     | 113    | `gemini-live-api`                 | 83→113                  |
| 84     | 114    | `phone-browser-integration`       | 84→114                  |
| 85     | 115    | `capstone-production-voice-agent` | 85→115                  |

---

## 3. "Chapter 33-40" References (AMBIGUOUS — Part 3 vs old Part 5)

### NO CHANGE — Part 3 self-references

All "Chapter 33-40" references inside `03-Business-Domain-Agent-Workflows/` refer to Part 3's own chapters (Legal, Sales/RevOps, etc.) which are unchanged.

| File                                                                | Chapters Referenced                        | Status        |
| ------------------------------------------------------------------- | ------------------------------------------ | ------------- |
| `03-Business-Domain-Agent-Workflows/README.md`                      | Ch 33, 34, 35, 36, 37, 38, 39, 40          | **NO CHANGE** |
| `03-*/33-legal-operations-and-compliance/*` (all files)             | Ch 33                                      | **NO CHANGE** |
| `03-*/04-the-growth-engine/34-sales-revops-marketing/*` (all files) | Ch 34                                      | **NO CHANGE** |
| `03-*/01-foundations/25-enterprise-agentic-landscape/*`             | Ch 33, 34 (cross-refs to sibling chapters) | **NO CHANGE** |
| `03-*/02-office-of-the-cfo/28-finance-domain-agents/*`              | Ch 33 (cross-ref)                          | **NO CHANGE** |
| `03-*/02-office-of-the-cfo/29-idfa-financial-architect/*`           | Ch 33 (cross-ref)                          | **NO CHANGE** |
| `03-*/02-office-of-the-cfo/30-ca-cpa-practice/*`                    | Ch 33 (cross-ref)                          | **NO CHANGE** |
| `03-*/02-office-of-the-cfo/32-banking-domain-agents/*`              | Ch 33, 34 (cross-ref)                      | **NO CHANGE** |

### NEEDS UPDATE — Old Part 5 chapters 33-40 internal self-references

After rename, these will be in `06-Building-Agent-Factories/`. Each chapter's own references need updating.

| Old Ch | New Ch | Folder (post-rename)                  | Changes                                                                                                     |
| ------ | ------ | ------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 33     | 61     | `61-introduction-to-ai-agents`        | README title/heading `Chapter 33` → `Chapter 61`, sidebar_position: 33→61                                   |
| 34     | 62     | `62-openai-agents-sdk`                | README title `Chapter 34` → `Chapter 62`, sidebar_position: 34→62, all lesson `chapter: 34` → `chapter: 62` |
| 35     | 63     | `63-google-adk-reliable-agents`       | README title `Chapter 35` → `Chapter 63`, sidebar_position: 35→63, all lesson `chapter: 35` → `chapter: 63` |
| 36     | 65     | `65-anthropic-agents-kit-development` | README title `Chapter 36` → `Chapter 65`, sidebar_position: 36→65, all lesson `chapter: 36` → `chapter: 65` |
| 37     | 66     | `66-mcp-fundamentals`                 | README title `Chapter 37` → `Chapter 66`, sidebar_position: 37→66, all lesson `chapter: 37` → `chapter: 66` |
| 38     | 67     | `67-custom-mcp-servers`               | README title `Chapter 38` → `Chapter 67`, sidebar_position: 38→67, all lesson `chapter: 38` → `chapter: 67` |
| 39     | 68     | `68-agent-skills-mcp-code-execution`  | README title `Chapter 39` → `Chapter 68`, sidebar_position: 39→68, all lesson `chapter: 39` → `chapter: 68` |
| 40     | 70     | `70-fastapi-for-agents`               | README title `Chapter 40` → `Chapter 70`, sidebar_position: 40→70, all lesson `chapter: 40` → `chapter: 70` |

### NEEDS UPDATE — References from outside Part 3 to old Part 5's Ch 33-40

None found outside of Parts 3 and old Part 5. All "Chapter 33-40" references in the codebase are either:

1. Part 3 self-references (unchanged), or
2. Old Part 5 self-references (handled above as part of internal chapter updates)

---

## 4. "Part 5-9" References

### NEEDS UPDATE — "Part 5" references (old Part 5 = Building Custom Agents → now Part 6)

| File                                                                                                           | Line | Old Value                               | New Value                                                                                                             |
| -------------------------------------------------------------------------------------------------------------- | ---- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `04-Programming-in-the-AI-Era/07-cli-and-concurrency/README.md`                                                | 12   | `everything you build in Part 5`        | `everything you build in Part 6`                                                                                      |
| `04-Programming-in-the-AI-Era/README.md`                                                                       | 189  | `Part 5: Building Custom Agents`        | `Part 6: Building Agent Factories`                                                                                    |
| `00-Thinking-is-the-Curriculum/11-thinking-portfolio/01-portfolio-assembly.md`                                 | 70   | `building AI agents in Part 5`          | `building AI agents in Part 6`                                                                                        |
| `00-Thinking-is-the-Curriculum/11-thinking-portfolio/02-growth-map.md`                                         | 58   | `an AI architecture in Part 5`          | `an AI architecture in Part 6`                                                                                        |
| `00-Thinking-is-the-Curriculum/11-thinking-portfolio/01-portfolio-assembly.flashcards.yaml`                    | 39   | `approach Part 5 differently`           | `approach Part 6 differently`                                                                                         |
| `07-Turing-LLMOps-Proprietary-Intelligence/63-data-engineering-fine-tuning/00-build-data-engineering-skill.md` | 119  | `Python fundamentals (Part 5)`          | `Python fundamentals (Part 4)` (NOTE: this ref seems to mean Part 4 = Programming, not old Part 5; verify in context) |
| `which-agents-2026.md`                                                                                         | 134  | `you'll learn to build with in Part 5`  | `you'll learn to build with in Part 6`                                                                                |
| `which-agents-2026.md`                                                                                         | 136  | `Part 5 teaches you`                    | `Part 6 teaches you`                                                                                                  |
| `which-agents-2026.md`                                                                                         | 154  | `Part 5 — Building Custom AI Employees` | `Part 6 — Building Agent Factories`                                                                                   |

**IMPORTANT NOTE on `63-data-engineering-fine-tuning/00-build-data-engineering-skill.md:119`**: This says "Python fundamentals (Part 5)" but likely means the Python part (Part 4). Worker should verify whether this refers to old Part 5 (agents) or Part 4 (Python). If it means Part 4, change to "Part 4" not "Part 6".

### NEEDS UPDATE — "Part 6" references (old Part 6 = Cloud Native → now Part 7)

| File                                                                                                                       | Line | Old Value                 | New Value                 |
| -------------------------------------------------------------------------------------------------------------------------- | ---- | ------------------------- | ------------------------- |
| `04-Programming-in-the-AI-Era/01-the-workbench/44-the-development-environment/02-installing-uv-and-creating-smartnotes.md` | 185  | `In Part 6, you will see` | `In Part 7, you will see` |

### NEEDS UPDATE — "Part 7" references (old Part 7 = LLMOps → now Part 8)

| File                                                                                                | Line | Old Value                    | New Value                                                                                                                                                                                          |
| --------------------------------------------------------------------------------------------------- | ---- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `05-Building-Custom-Agents/40-fastapi-for-agents/15-capstone-agent-powered-task-service.summary.md` | 30   | `Part 7 deployment chapters` | `Part 7 deployment chapters` — **ACTUALLY NO CHANGE** (this is inside old Part 5 which becomes Part 6, and refers to old Part 6 deployment chapters which become Part 7. "Part 7" is now correct!) |

**Wait — re-evaluating**: The file says "Chapter 41 (ChatKit Server) / Part 7 deployment chapters". Currently Part 7 = LLMOps. The "deployment chapters" are old Part 6 (Cloud Native) which becomes Part 7. So after restructuring, "Part 7 deployment chapters" will accidentally be correct. But "Chapter 41" needs to become "Chapter 71". Leave "Part 7" as-is; update "Chapter 41" → "Chapter 71".

### Other Part references found in non-content files

See Section 6 below.

---

## 5. Frontmatter `chapter:` and `sidebar_position:` Fields

### Part 6 (old Part 5) — `chapter:` fields to update

Chapters with `chapter: N` frontmatter in lesson files:

| Old `chapter:` | New `chapter:` | Folder                             | Approximate file count |
| -------------- | -------------- | ---------------------------------- | ---------------------- |
| 34             | 62             | `openai-agents-sdk`                | 11 files               |
| 35             | 63             | `google-adk-reliable-agents`       | 9 files                |
| 36             | 65             | `anthropic-agents-kit-development` | 17 files               |
| 37             | 66             | `mcp-fundamentals`                 | 9 files                |
| 38             | 67             | `custom-mcp-servers`               | 11 files               |
| 39             | 68             | `agent-skills-mcp-code-execution`  | 8 files                |
| 40             | 70             | `fastapi-for-agents`               | 16 files               |
| 41             | 71             | `chatkit-server`                   | 9 files                |
| 42             | 72             | `openai-apps-sdk`                  | 10 files               |
| 43             | 73             | `vector-databases-rag-langchain`   | 9 files                |
| 44             | 74             | `relational-databases-sqlmodel`    | 13 files               |
| 45             | 75             | `augmented-memory`                 | 9 files                |
| 46             | 76             | `tdd-for-agents`                   | 10 files               |
| 47             | 77             | `evals-agent-performance`          | 10 files               |

(Chapter 33 has no `chapter:` frontmatter in lessons.)

### Part 6 (old Part 5) — `sidebar_position:` in READMEs to update

| Old | New | README path                                     |
| --- | --- | ----------------------------------------------- |
| 33  | 61  | `61-introduction-to-ai-agents/README.md`        |
| 34  | 62  | `62-openai-agents-sdk/README.md`                |
| 35  | 63  | `63-google-adk-reliable-agents/README.md`       |
| 36  | 65  | `65-anthropic-agents-kit-development/README.md` |
| 37  | 66  | `66-mcp-fundamentals/README.md`                 |
| 38  | 67  | `67-custom-mcp-servers/README.md`               |
| 39  | 68  | `68-agent-skills-mcp-code-execution/README.md`  |
| 40  | 70  | `70-fastapi-for-agents/README.md`               |
| 41  | 71  | `71-chatkit-server/README.md`                   |
| 42  | 72  | `72-openai-apps-sdk/README.md`                  |
| 43  | 73  | `73-vector-databases-rag-langchain/README.md`   |
| 44  | 74  | `74-relational-databases-sqlmodel/README.md`    |
| 45  | 75  | `75-augmented-memory/README.md`                 |
| 46  | 76  | `76-tdd-for-agents/README.md`                   |
| 47  | 77  | `77-evals-agent-performance/README.md`          |
| 48  | 78  | `78-knowledge-graphs-graphrag/README.md`        |

### Parts 7-10 — `sidebar_position:` and `chapter:` in READMEs

Part-level READMEs also need sidebar_position updates:

| Part          | Old sidebar_position | New sidebar_position |
| ------------- | -------------------- | -------------------- |
| Part 6 (new)  | 5                    | 6                    |
| Part 7 (new)  | 6                    | 7                    |
| Part 8 (new)  | 7                    | 8                    |
| Part 9 (new)  | 8                    | 9                    |
| Part 10 (new) | 9                    | 10                   |

All chapter READMEs within Parts 7-10 need `sidebar_position` updated (see tables in Section 2 above).

### Part 7 (old Part 6) — `chapter:` fields

| Old `chapter:` | New `chapter:` | Folder                       | File count     |
| -------------- | -------------- | ---------------------------- | -------------- |
| 50             | 80             | `kubernetes-for-ai-services` | ~26 files      |
| 52             | 82             | `event-driven-kafka`         | Multiple files |
| 56             | 86             | `traffic-engineering`        | ~13 files      |

(Other Part 7 chapters don't have `chapter:` in frontmatter.)

---

## 6. Config/Rules/Agent/Memory File References

### `.claude/rules/content-pipeline.md`

| Line | Old Value                               | New Value                               |
| ---- | --------------------------------------- | --------------------------------------- |
| 47   | `For new technical chapters (Part 5-6)` | `For new technical chapters (Part 6-7)` |

### `.claude/rules/chapter-resolution.md`

**This file needs a major rewrite** to reflect the new structure. The entire directory tree example and all chapter/part mappings are stale.

Key changes:

- Remove the hardcoded tree example (lines 16-41) and replace with updated structure
- Part 1 now has Ch 12-18 (with 18 = Claude Code Teams, old 18 moved to Part 5)
- Add Part 5: Building OpenClaw Apps
- Part 5→6, Part 6→7, Part 7→8, Part 8→9, Part 9→10
- Update chapter ranges in examples

### `.claude/agents/content-implementer.md`

| Line | Old Value                              | New Value                                                 |
| ---- | -------------------------------------- | --------------------------------------------------------- |
| 75   | `apps/learn-app/docs/chapter-index.md` | This file doesn't exist; no change needed (already wrong) |

### `.claude/agents/educational-validator.md`

| Line | Old Value                          | New Value                          |
| ---- | ---------------------------------- | ---------------------------------- |
| 592  | `After validating Part 5+ content` | `After validating Part 6+ content` |

### Memory files

| File                                   | Content                                  | Action                                 |
| -------------------------------------- | ---------------------------------------- | -------------------------------------- |
| `memory/project_book_restructuring.md` | Already describes the restructuring plan | Update after restructuring is complete |
| `memory/ch21-companion-analysis.md`    | References to "Part 7 (LLMOps)"          | Update `Part 7` → `Part 8`             |

### CLAUDE.md (project)

The CLAUDE.md file does not contain specific chapter numbers that need updating. No changes needed.

---

## 7. `00-Prelude-Thinking-is-the-Curriculum/` — IGNORED

This is a legacy empty folder. The canonical Part 0 is `00-Thinking-is-the-Curriculum/`. No action needed.

---

## Summary Counts

| Category                                           | Count                |
| -------------------------------------------------- | -------------------- |
| Chapter 18 → 56 text references                    | ~25 files            |
| Chapter 33-48 → 61-78 (Part 6) frontmatter + text  | ~180 files           |
| Chapter 49-60 → 79-90 (Part 7) frontmatter + text  | ~50 files            |
| Chapter 61-72 → 91-102 (Part 8) frontmatter + text | 12 READMEs + lessons |
| Chapter 73-78 → 103-108 (Part 9) frontmatter       | 6 READMEs + lessons  |
| Chapter 79-85 → 109-115 (Part 10) frontmatter      | 7 READMEs + lessons  |
| "Part N" text references                           | ~15 files            |
| Config/rules/agent files                           | ~5 files             |
| **Total estimated files to update**                | **~300**             |
