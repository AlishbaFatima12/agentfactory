# Chapter/Part Resolution Protocol

**Problem**: "Chapter 5" and "Part 5" are different things. Ambiguous references cause wrong paths.

| User Says              | Interpretation                | Example                   |
| ---------------------- | ----------------------------- | ------------------------- |
| `ch 22` / `chapter 22` | Chapter 22 (single chapter)   | Linux Mastery (in Part 2) |
| `part 4` / `p4`        | Part 4 (all chapters in part) | Programming in the AI Era |
| `5` (bare number)      | **AMBIGUOUS**                 | Must ask user to clarify  |

## Authoritative Source: The Filesystem

**The filesystem at `apps/learn-app/docs/` is the source of truth. No hardcoded index file exists — always discover via `ls`.**

```
apps/learn-app/docs/
├── 00-Thinking-is-the-Curriculum/     ← Part 0
│   ├── 01-asking-better-questions/            ← Chapter 1
│   ├── 02-detecting-broken-reasoning/         ← Chapter 2
│   └── ...up to 11-thinking-portfolio/        ← Chapter 11
├── 01-General-Agents-Foundations/              ← Part 1
│   ├── 12-agent-factory-paradigm/             ← Chapter 12
│   ├── 13-markdown-writing-instructions/      ← Chapter 13
│   └── ...up to 18-claude-code-teams-cicd/    ← Chapter 18
├── 02-Agent-Workflow-Primitives/               ← Part 2
│   ├── 19-file-processing/                    ← Chapter 19
│   └── ...up to 24-build-first-ai-employee/   ← Chapter 24
├── 03-Business-Domain-Agent-Workflows/         ← Part 3
│   ├── 01-foundations/                        ← Section
│   │   ├── 25-enterprise-agentic-landscape/   ← Chapter 25
│   │   └── ...
│   ├── 02-office-of-the-cfo/                 ← Section
│   │   ├── 28-finance-domain-agents/          ← Chapter 28
│   │   └── ...up to 32-banking-domain-agents/ ← Chapter 32
│   ├── 03-legal-and-compliance/               ← Section
│   │   └── 33-legal-operations-and-compliance/← Chapter 33
│   └── 04-the-growth-engine/                  ← Section
│       └── 34-sales-revops-marketing/         ← Chapter 34
├── 04-Programming-in-the-AI-Era/              ← Part 4
│   └── ... (local numbering 01-09 / Ch 42-55)
├── 05-Building-OpenClaw-Apps/                 ← Part 5 (NEW)
│   ├── 56-meet-your-first-ai-employee/        ← Chapter 56 (moved from Part 1)
│   └── 57-building-openclaw-apps/             ← Chapter 57
├── 06-Building-Agent-Factories/               ← Part 6 (was Part 5)
│   ├── 61-introduction-to-ai-agents/          ← Chapter 61
│   ├── 62-openai-agents-sdk/                  ← Chapter 62
│   └── ...up to 78-knowledge-graphs-graphrag/ ← Chapter 78
├── 07-Deploying-Agent-Factories-in-the-Cloud/ ← Part 7 (was Part 6)
│   ├── 79-docker-for-ai-services/             ← Chapter 79
│   └── ...up to 90-real-cloud-deployment/     ← Chapter 90
├── 08-Turing-LLMOps-Proprietary-Intelligence/ ← Part 8 (was Part 7)
│   ├── 91-introduction-to-llmops/             ← Chapter 91
│   └── ...up to 102-capstone-end-to-end-llmops/ ← Chapter 102
├── 09-TypeScript-Language-Realtime-Interaction/ ← Part 9 (was Part 8)
│   ├── 103-typescript-fundamentals/           ← Chapter 103
│   └── ...up to 108-cli-tools-developer-experience/ ← Chapter 108
└── 10-Building-Realtime-Voice-Agents/         ← Part 10 (was Part 9)
    ├── 109-voice-ai-fundamentals/             ← Chapter 109
    └── ...up to 115-capstone-production-voice-agent/ ← Chapter 115
```

**Structure**: Parts are top-level folders (`NN-*`), chapters are inside them (`NN-*/`).

## Resolution Procedure

**BEFORE any chapter/part work, run these bash commands:**

```bash
# Step 1: Parse input and discover path

# For "ch 22" / "chapter 22" → Find chapter folder:
ls -d apps/learn-app/docs/*/22-*/
# Returns: apps/learn-app/docs/02-Agent-Workflow-Primitives/22-linux-mastery/

# For "part 7" / "p7" → Find part folder:
ls -d apps/learn-app/docs/07-*/
# Returns: apps/learn-app/docs/07-Deploying-Agent-Factories-in-the-Cloud/

# For bare "5" → AMBIGUOUS, ask user first!
```

```bash
# Step 2: Validate and count contents

# Count lessons in a chapter:
ls apps/learn-app/docs/02-Agent-Workflow-Primitives/22-linux-mastery/*.md | wc -l

# Count chapters in a part:
ls -d apps/learn-app/docs/07-Deploying-Agent-Factories-in-the-Cloud/*/ | wc -l
```

```bash
# Step 3: Confirm with user before proceeding
```

**Example confirmation**:

```
"You said 'ch 22'. I found:
- Chapter 22: linux-mastery
- Path: apps/learn-app/docs/02-Agent-Workflow-Primitives/22-linux-mastery/
- Part: 02-Agent-Workflow-Primitives
- Lessons: 17 files

Is this correct?"
```

## Key Rule: Chapter Numbers Are Global

Chapter numbers are **global across the book**, not local to parts.

- `ch 22` → Chapter 22 (lives in Part 2, folder `22-*`)
- `part 7` → Part 7 (folder `07-Deploying-Agent-Factories-in-the-Cloud/`)

**`ch 7` ≠ `part 7`** — completely different locations!

## Failure Modes

- ❌ **Guessing paths without running `ls`** (Always discover via filesystem)
- ❌ **Not asking for clarification on bare numbers** ("5" is ambiguous)
- ❌ **Trusting stale documentation over filesystem** (Filesystem is source of truth)
- ❌ **Referencing hardcoded index files** (No chapter-index.md exists — use `ls -d` only)

**Always run `ls -d` to discover paths. Never guess. Never reference a hardcoded file.**
