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
├── 00-Introduction-to-AI-Agents/              ← Part 0
│   ├── 01-welcome/                            ← Chapter 1
│   ├── 02-what-are-ai-agents/                 ← Chapter 2
│   └── ...up to 11-calibrating-ai-prompts/    ← Chapter 11
├── 01-General-Agents-Foundations/              ← Part 1
│   ├── 12-agent-factory-paradigm/             ← Chapter 12
│   ├── 13-general-agents/                     ← Chapter 13 (planned)
│   └── ...up to 18-...                        ← Chapter 18
├── 02-Agent-Workflow-Primitives/               ← Part 2
│   ├── 19-build-your-first-personal-ai-employee/ ← Chapter 19
│   └── ...up to 24-...                        ← Chapter 24
├── 03-Business-Domain-Agent-Workflows/         ← Part 3
│   ├── 25-enterprise-blueprint/               ← Chapter 25
│   └── ...up to 40-...                        ← Chapter 40
├── 04-Programming-in-the-AI-Era/              ← Part 4
│   └── ...
└── ...
```

**Structure**: Parts are top-level folders (`NN-*`), chapters are inside them (`NN-*/`).

## Resolution Procedure

**BEFORE any chapter/part work, run these bash commands:**

```bash
# Step 1: Parse input and discover path

# For "ch 22" / "chapter 22" → Find chapter folder:
ls -d apps/learn-app/docs/*/22-*/
# Returns: apps/learn-app/docs/02-Agent-Workflow-Primitives/22-linux-mastery/

# For "part 4" / "p4" → Find part folder:
ls -d apps/learn-app/docs/04-*/
# Returns: apps/learn-app/docs/04-Programming-in-the-AI-Era/

# For bare "5" → AMBIGUOUS, ask user first!
```

```bash
# Step 2: Validate and count contents

# Count lessons in a chapter:
ls apps/learn-app/docs/02-Agent-Workflow-Primitives/22-linux-mastery/*.md | wc -l

# Count chapters in a part:
ls -d apps/learn-app/docs/04-Programming-in-the-AI-Era/*/ | wc -l
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
- `part 4` → Part 4 (folder `04-Programming-in-the-AI-Era/`)

**`ch 4` ≠ `part 4`** — completely different locations!

## Failure Modes

- ❌ **Guessing paths without running `ls`** (Always discover via filesystem)
- ❌ **Not asking for clarification on bare numbers** ("5" is ambiguous)
- ❌ **Trusting stale documentation over filesystem** (Filesystem is source of truth)
- ❌ **Referencing hardcoded index files** (No chapter-index.md exists — use `ls -d` only)

**Always run `ls -d` to discover paths. Never guess. Never reference a hardcoded file.**
