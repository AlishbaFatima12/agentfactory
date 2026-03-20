# Cross-Reference Changes Log — Worker-XRefs

## Summary

- **21 files updated**, **30 changes made**
- All "Chapter 18" refs in Parts 0-3 updated to "Chapter 56" (or replaced with new Ch 18 description)
- All "Part 5" refs (meaning old Part 5 = Building Custom Agents) updated to "Part 6"
- All "Part 6" refs (meaning old Part 6 = Cloud Native) updated to "Part 7"
- Config/rules/agents/memory files updated
- chapter-resolution.md fully rewritten for 11-part structure

## Change Log

### Part 0 Files (3 changes)

| File | Line | Old | New |
|------|------|-----|-----|
| `00-Thinking-is-the-Curriculum/11-thinking-portfolio/01-portfolio-assembly.md` | 70 | `Part 5` | `Part 6` |
| `00-Thinking-is-the-Curriculum/11-thinking-portfolio/02-growth-map.md` | 58 | `Part 5` | `Part 6` |
| `00-Thinking-is-the-Curriculum/11-thinking-portfolio/01-portfolio-assembly.flashcards.yaml` | 39 | `Part 5` | `Part 6` |

### Part 1 Files (9 changes)

| File | Line | Old | New |
|------|------|-----|-----|
| `01-General-Agents-Foundations/README.md` | 82-86 | Ch 18 "Meet Your First AI Employee" description | New Ch 18 "Claude Code Teams & CI/CD" description + note about Ch 56 move |
| `01-General-Agents-Foundations/14-general-agents/02-skills-subagents-mcp/14-settings-hierarchy.md` | 71 | `deferred to Part 5` | `deferred to Part 6` |
| `01-General-Agents-Foundations/14-general-agents/02-skills-subagents-mcp/14-settings-hierarchy.md` | 409 | `Part 5 Content` | `Part 6 Content` |
| `01-General-Agents-Foundations/14-general-agents/02-skills-subagents-mcp/14-settings-hierarchy.md` | 447 | `Part 5` | `Part 6` |
| `01-General-Agents-Foundations/14-general-agents/02-skills-subagents-mcp/14-settings-hierarchy.summary.md` | 22 | `Part 5` | `Part 6` |
| `01-General-Agents-Foundations/14-general-agents/03-extensibility-teams/15-hooks-and-extensibility.summary.md` | 22 | `Part 5` | `Part 6` |
| `01-General-Agents-Foundations/14-general-agents/03-extensibility-teams/17-ralph-wiggum-loop.summary.md` | 41 | `Part 6-7` + `Part 5` | `Part 7-8` + `Part 6` |
| `01-General-Agents-Foundations/14-general-agents/03-extensibility-teams/16-plugins-putting-it-all-together.summary.md` | 29 | `Part 5+` | `Part 6+` |

### Part 2 Files (1 change)

| File | Line | Old | New |
|------|------|-----|-----|
| `02-Agent-Workflow-Primitives/README.md` | 8 | `Chapter 18` | `Chapter 56` |

### Part 4 Files (5 changes)

| File | Line | Old | New |
|------|------|-----|-----|
| `04-Programming-in-the-AI-Era/README.md` | 189 | `Part 5: Building Custom Agents` | `Part 6: Building Agent Factories` |
| `04-Programming-in-the-AI-Era/07-cli-and-concurrency/README.md` | 12 | `Part 5` | `Part 6` |
| `04-Programming-in-the-AI-Era/01-the-workbench/44-the-development-environment/01-why-the-toolchain-comes-first.md` | 53 | `Part 6` (old) | `Part 7` |
| `04-Programming-in-the-AI-Era/01-the-workbench/44-the-development-environment/02-installing-uv-and-creating-smartnotes.md` | 185 | `Part 6` (old) | `Part 7` |
| `04-Programming-in-the-AI-Era/01-the-workbench/44-the-development-environment/07-git-your-version-control-memory.md` | 221 | `Part 6` (old) | `Part 7` |
| `04-Programming-in-the-AI-Era/01-the-workbench/44-the-development-environment/comments.txt` | 339 | `Part 5` | `Part 6` |

### Top-Level Files (4 changes)

| File | Line | Old | New |
|------|------|-----|-----|
| `which-agents-2026.md` | 124 | `Chapter 18` | `Chapter 56` |
| `which-agents-2026.md` | 134 | `Part 5` | `Part 6` |
| `which-agents-2026.md` | 136 | `Part 5` | `Part 6` |
| `which-agents-2026.md` | 154 | `Part 5 — Building Custom AI Employees` | `Part 6 — Building Agent Factories` |

### Config/Rules/Agents Files (4 changes)

| File | Change |
|------|--------|
| `.claude/rules/chapter-resolution.md` | Full rewrite: updated directory tree for 11-part structure (Parts 0-10), new chapter ranges, new folder names |
| `.claude/rules/content-pipeline.md:47` | `Part 5-6` → `Part 6-7` |
| `.claude/agents/educational-validator.md:592` | `Part 5+` → `Part 6+` |
| `.claude/skills/exercise-pack/SKILL.md:67` | `Part 5-6, advanced engineering` → `Part 6-7, advanced engineering` |
| `.claude/skills/pptx/SKILL.md:688` | Added `(Building OpenClaw Apps)` clarification to `Part 5` comment |

### Memory Files (2 changes)

| File | Change |
|------|--------|
| `memory/ch21-companion-analysis.md` | `Part 7 (LLMOps)` → `Part 8 (LLMOps)` |
| `memory/project_book_restructuring.md` | Updated to reflect completed restructuring with final part/chapter mapping |

## NOT Changed (intentional)

- **Section headings within lessons** like "## Part 5:" in `04-five-powers-and-ai-stack.md` and `10-selling-agentic-ai-services.md` — these are lesson section numbers, not book part references
- **Part 3 chapter references (Ch 33-40)** — all are Part 3 self-references that did not change
- **Part 4 internal chapter numbers (42-55)** — Part 4's own local numbering stays unchanged
- **Specs in `specs/archive/`** — historical documents, not updated
- **Specs in `specs/book-restructuring/`** — the restructuring spec itself, kept as reference
- **Part 1 files already referencing "Part 6" for Custom Agents** — a prior commit (`78a8a60a`) had already updated these; they are now correct for the new numbering
