# Skill Utilization

**Problem identified (2026-02-03)**: Skills are underutilized (24:1 subagent:skill ratio in logs).

## How Skills Work in Claude Code

1. **Auto-loading**: Skill names and descriptions are loaded with CLAUDE.md at session start
2. **Pattern matching**: When your task matches a skill description, INVOKE IT
3. **Three-level loading**:
   - L1: Metadata always loaded (name, description)
   - L2: Full SKILL.md loaded on-demand when invoked
   - L3: Supporting files (scripts/, references/) if needed

## Skill Categories (Anthropic's Internal Taxonomy)

Use this to identify what types of skills to build and spot gaps in coverage.
Source: Thariq Shaukat (Claude Code team), "Lessons from Building Claude Code: How We Use Skills", March 2026.

| # | Category | Purpose | Our Examples |
|---|----------|---------|-------------|
| 1 | **Library & API Reference** | How to correctly use a library, CLI, or SDK | `/fetch-library-docs`, `/python-dev-environment` |
| 2 | **Product Verification** | Test/verify code works (playwright, tmux, etc.) | `/tdd` (partial), NONE dedicated |
| 3 | **Data Fetching & Analysis** | Connect to data/monitoring stacks | NONE |
| 4 | **Business Process Automation** | Automate repetitive workflows into one command | `/session-intelligence-harvester`, `/sp.git.commit_pr` |
| 5 | **Code Scaffolding & Templates** | Generate framework boilerplate | `/companion-repo`, `/exercise-pack` |
| 6 | **Code Quality & Review** | Enforce code quality, review code | `/spec-review`, `/content-evaluation-framework`, `/skill-validator` |
| 7 | **CI/CD & Deployment** | Fetch, push, deploy code | `/sp.git.commit_pr` (partial) |
| 8 | **Runbooks** | Symptom → investigation → structured report | NONE |
| 9 | **Infrastructure Operations** | Routine maintenance with guardrails | NONE |

**Gaps**: Categories 2, 3, 8, 9 have no dedicated skills. Consider building these when the need arises.

## When to Use Skills vs Subagents

| Use Case                   | Use Skill                          | Use Subagent             |
| -------------------------- | ---------------------------------- | ------------------------ |
| Quick lookup/generation    | ✅ `/fetch-library-docs fastapi`   | ❌ Overkill              |
| Content evaluation         | ✅ `/content-evaluation-framework` | ❌ Overkill              |
| Multi-file lesson creation | ❌ Too limited                     | ✅ `content-implementer` |
| Chapter planning           | ❌ Too limited                     | ✅ `chapter-planner`     |
| Fact-checking lesson       | ✅ `/fact-check-lesson`            | ❌ Unless complex        |

## Skill vs Subagent Hierarchy

**Skills** = Atomic operations (analysis, evaluation, generation, lookup)
**Subagents** = Orchestrated workflows (multi-file writes, complex state changes)

**Decision rule**: If the task writes multiple files or requires orchestration → Subagent. Otherwise → Skill.

## Persistent Data in Skills

Skills that need to store state across sessions should use `${CLAUDE_PLUGIN_DATA}` — a stable per-plugin directory that survives skill upgrades. Data stored directly in the skill directory may be wiped on upgrade.

**Pattern**: Store config, logs, or cached data in `${CLAUDE_PLUGIN_DATA}/`:
- `config.json` — user preferences, setup info (e.g., which Slack channel to post to)
- `history.log` — append-only log for skills that benefit from memory of past runs
- `cache/` — cached results that improve over time

If `${CLAUDE_PLUGIN_DATA}` is not available, fall back to a stable path like `~/.claude/skill-data/<skill-name>/`.

## On-Demand Hooks in Skills

Skills can register session-scoped hooks that activate only when the skill is invoked and last for the session duration. Use this for guardrails you want sometimes but not always.

**Examples**:
- `/content-lock` — blocks Edit/Write outside `apps/learn-app/docs/` during content sessions
- `/no-direct-content` — blocks writing lesson prose directly (enforces content-implementer subagent)

See `.claude/skills/content-lock/` and `.claude/skills/no-direct-content/` for implementations.

## Available Skills (Check Before Spawning Subagent)

```
Code Review & Analysis:
- /spec-review                  → Single-pass spec-vs-implementation review

Content Quality:
- /content-evaluation-framework  → 6-category rubric scoring
- /content-refiner              → Fix Gate 4 failures
- /technical-clarity            → Grandma Test, jargon check
- /fact-check-lesson            → Verify factual claims (command)
- /canonical-format-checker     → Validate lesson/skill canonical format
- /enrich-teaching-guide        → Enhance teaching guide content

Pedagogy:
- /learning-objectives          → Generate measurable outcomes
- /concept-scaffolding          → Progressive learning sequences
- /ai-collaborate-teaching      → Three Roles Framework
- /skills-proficiency-mapper    → CEFR/Bloom's mapping

Assessment:
- /quiz-generator               → 50-question interactive quizzes
- /assessment-architect         → Certification exams
- /exercise-pack                → Generate exercise sets
- /generate-flashcards          → Create flashcard decks

Research:
- /fetch-library-docs           → Official docs via Context7
- /session-intelligence-harvester → Extract session learnings

Creation:
- /skill-validator              → Validate skill quality
- /companion-repo               → Create & publish chapter companion repos with downloadable zips

Guardrails (on-demand hooks):
- /content-lock                 → Block edits outside docs/ during content sessions
- /no-direct-content            → Enforce content-implementer for lesson prose
```

## Skill Invocation Rule

```
BEFORE spawning a subagent for a task:
1. Check if a skill exists for that task (see list above)
2. If skill exists → Use skill (faster, less overhead)
3. If skill insufficient → Then spawn subagent
```
