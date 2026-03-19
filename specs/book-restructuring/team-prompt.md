# Book Restructuring Team Prompt

Create an agent team to restructure the AI Agent Factory book: insert 3 new parts after Part 4, renumber all downstream parts and chapters, move one chapter, create 4 new chapter placeholders, and update all cross-references.

IMPORTANT: This MUST be an agent team (https://code.claude.com/docs/en/agent-teams),
NOT subagents. Use TeamCreate to create the team. Spawn teammates — do NOT use the
Agent tool or spawn subagents. Every worker below is a TEAMMATE in the team,
coordinated through the shared task list and inter-teammate messaging.

**Source specification**: `specs/book-restructuring/spec.md`
**Target directory**: `apps/learn-app/docs/`
**Operation type**: Structural migration — NO content writing. Only folder renames, frontmatter updates, and cross-reference fixes.

---

## You Are the Team Lead

You coordinate. You do NOT rename folders, edit files, or fix references yourself.
Use the shared task list to track all work. Enforce phase ordering via task dependencies.

---

## PHASE 1: MIGRATION ARCHITECT (1 teammate, blocks everything)

**Task**: "Design migration plan"
**Model**: Opus

Spawn teammate `architect` with this prompt:

```
You are the architect teammate for the Book Restructuring migration.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. specs/book-restructuring/spec.md (the complete restructuring specification with old→new number mappings)
2. apps/learn-app/docs/ (ls -d the top-level part folders to confirm current state matches spec)
3. .claude/rules/chapter-resolution.md (the rule file that will need updating)

YOUR DELIVERABLES (write ALL to specs/book-restructuring/):

1. **rename-script.md** — The exact sequence of git mv commands for:
   a. Part folder renames (MUST go in REVERSE order: 09→10, 08→09, 07→08, 06→07, 05→06, then mkdir 05-Building-OpenClaw-Apps)
   b. Moving 18-meet-your-first-ai-employee from Part 1 to new Part 5 as 56-meet-your-first-ai-employee
   c. Chapter folder renames within each part (old number-prefix → new number-prefix)
   d. Creating placeholder folders for: 18-claude-code-teams-cicd (Part 1), 57-building-openclaw-apps (Part 5), 64-claude-api-agentic-loops (Part 6), 69-multi-agent-reliability (Part 6)
   e. Do NOT create folders for Ch 58-60 (reserved slots for future Part 5 expansion)

2. **cross-reference-audit.md** — Run these greps and record the results:
   - grep -rn "Chapter 18\b" across apps/learn-app/docs/ (old Ch 18 moves to Ch 56 — ALL existing refs mean the old chapter)
   - grep -rn "Chapter 41\b" through "Chapter 85\b" across apps/learn-app/docs/ (unambiguous old chapter numbers that change)
   - grep -rn "Chapter 33\b" through "Chapter 40\b" across apps/learn-app/docs/ — but SEPARATE into two categories:
     * Part 3 self-references (e.g., inside docs/03-*/) → mark as NO CHANGE
     * References from outside Part 3 that refer to old Part 5 content → mark as NEEDS UPDATE
     IMPORTANT: Chapters 33-40 exist in BOTH Part 3 (unchanged) and old Part 5 (renumbered).
     Do NOT mark Part 3's own Chapter 33-40 references as needing updates.
   - grep -rn "Part 5\b" through "Part 9\b" across apps/learn-app/docs/ (every old part reference)
   - grep -rn "chapter: [0-9]" across apps/learn-app/docs/05-* through docs/09-* (frontmatter chapter fields)
   - grep for sidebar_position values that reference old chapter numbers
   - Check .claude/rules/, .claude/agents/, memory files for stale chapter/part references
   - Record file path, line number, old value, and required new value for EVERY match
   - NOTE: Ignore `00-Prelude-Thinking-is-the-Curriculum/` — it's a legacy empty folder. The canonical Part 0 is `00-Thinking-is-the-Curriculum/`.

3. **worker-briefs.md** — Assignment table mapping each worker to their exact scope:
   - Worker-rename: gets rename-script.md, executes it
   - Worker-part6: updates frontmatter for Part 6 chapters (biggest scope, 18 chapters)
   - Worker-parts78: updates frontmatter for Parts 7-8 (24 chapters)
   - Worker-parts910: updates frontmatter for Parts 9-10 + Part 1 Chapter A placeholder + Part 5 placeholders (13 chapters + 5 placeholders)
   - Worker-xrefs: updates cross-references across Parts 0-4 and all rule/config files

   For each worker, list:
   - Exact folder paths they touch
   - Exact changes they make (old title → new title, old chapter: N → new chapter: M)
   - Files they must NOT touch (zero overlap with other workers)
   - Exit criteria

   CRITICAL: Include a COMPLETE old→new chapter mapping table in EVERY worker brief
   (not just their own part's chapters). Lessons reference chapters in other parts.
   Example: a Part 7 lesson may reference "Chapter 40" (FastAPI) which is now Ch 70
   in Part 6. Without the full mapping, workers will miss cross-part references.
   Full mapping: 18→56, 33→61, 34→62, ..., 48→78, 49→79, ..., 60→90, 61→91, ..., 72→102, 73→103, ..., 78→108, 79→109, ..., 85→115.

RULES:
- Verify the current filesystem state matches the spec BEFORE producing the plan
- The rename sequence MUST go in reverse to avoid folder name collisions (09→10 first, then 08→09, etc.)
- Chapter folder renames within a part can go in any order AFTER the part folder is renamed
- Every placeholder chapter folder needs a README.md with minimal frontmatter (title, sidebar_position, description: "Coming soon")
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'ARCHITECT DONE — rename-script.md, cross-reference-audit.md, worker-briefs.md'
```

---

## PHASE 2: RENAME EXECUTOR (1 teammate, blocks Phase 3)

**Task**: "Execute folder renames"
**Model**: Opus
**Depends on**: Phase 1 (architect)

Spawn teammate `worker-rename` with this prompt:

```
You are the worker-rename teammate for the Book Restructuring migration.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. specs/book-restructuring/spec.md (understand the full restructuring plan)
2. specs/book-restructuring/rename-script.md (the architect's exact rename sequence)
3. specs/book-restructuring/worker-briefs.md (your specific brief)

YOUR JOB: Execute every folder rename in rename-script.md, in the exact order specified.

EXECUTION RULES:
- Use `git mv` for ALL renames (preserves git history)
- Execute renames in the EXACT order from the script (reverse order for parts: 09→10, 08→09, etc.)
- After each part folder rename, verify with `ls -d apps/learn-app/docs/*/` that no collision occurred
- Create new Part 5 folder: `mkdir -p apps/learn-app/docs/05-Building-OpenClaw-Apps`
- Create all placeholder chapter folders with minimal README.md files:

  For each placeholder README.md:
  ---
  sidebar_position: [chapter number]
  title: "Chapter [N]: [Title]"
  description: "Coming soon"
  ---

  # Chapter [N]: [Title]

  Content coming soon.

- After ALL renames complete, run `ls -d apps/learn-app/docs/*/` and `ls -d apps/learn-app/docs/*/*/` to verify the full structure matches the spec
- Do NOT edit any file contents beyond placeholder READMEs — that's for the updater workers

CHECKPOINT: After all renames, verify:
- 11 part folders exist (00 through 10)
- Part 5 contains chapters 56, 57 (no 58-60 — reserved slots)
- Part 6 contains chapters 61-78 (including placeholders 64, 69)
- Parts 7-10 contain correctly numbered chapters
- Old Part 1 no longer has 18-meet-your-first-ai-employee
- New Part 1 has placeholder 18-claude-code-teams-cicd

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'RENAME DONE — [total folders renamed] folders moved, [N] placeholders created. Verification: [pass/fail]'
```

---

## PHASE 3: UPDATER WORKERS (4 teammates, all parallel)

**Task**: "Update frontmatter and cross-references"
**Depends on**: Phase 2 (rename executor)

Spawn ALL 4 updater teammates SIMULTANEOUSLY after Phase 2 completes.

---

### Worker: `worker-part6`

**Task**: "Update Part 6 frontmatter (18 chapters)"
**Model**: Opus

```
You are the worker-part6 teammate for the Book Restructuring migration.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. specs/book-restructuring/spec.md (Section: Part 6 chapter mapping table)
2. specs/book-restructuring/worker-briefs.md (your specific brief)
3. specs/book-restructuring/cross-reference-audit.md (references within your scope)

YOUR SCOPE: Update ALL files in `apps/learn-app/docs/06-Building-Agent-Factories/`

FOR EACH CHAPTER (59-76):

1. **Chapter README.md**: Update:
   - `sidebar_position:` → new chapter number
   - `title:` → "Chapter [NEW#]: [same name]"
   - Any `# Chapter [OLD#]` heading → `# Chapter [NEW#]`
   - Any "Chapter [OLD#]" text references within the README
   - `prerequisites:` references to other chapters that changed numbers

2. **Every lesson .md file**: Update:
   - `chapter:` frontmatter field → new chapter number
   - Any "Chapter [OLD#]" text references within lesson body
   - Any cross-references to other chapters that changed (use the mapping: 33→61, 34→62, ..., 48→78)

3. **Part README.md** (`apps/learn-app/docs/06-Building-Agent-Factories/README.md`):
   - Create or update with new part name "Building Agent Factories"
   - Update all chapter references in the overview

MAPPING TABLE (your chapters):
Old 33→61, 34→62, 35→63, [NEW 64], 36→65, 37→66, 38→67, 39→68, [NEW 69], 40→70, 41→71, 42→72, 43→73, 44→74, 45→75, 46→76, 47→77, 48→78

CROSS-PART MAPPING (for references to chapters OUTSIDE your part):
Old 18→56, 49→79, ..., 60→90 (Part 7), 61→91, ..., 72→102 (Part 8), 73→103, ..., 78→108 (Part 9), 79→109, ..., 85→115 (Part 10)
Use the complete mapping from specs/book-restructuring/worker-briefs.md for any cross-references.

RULES:
- Do NOT touch files outside apps/learn-app/docs/06-Building-Agent-Factories/
- Do NOT modify lesson content — only frontmatter and chapter number references
- Be careful with regex: "Chapter 3" should NOT match "Chapter 33". Use word boundaries.
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WORKER-PART6 DONE — [N] files updated across 18 chapters'
```

---

### Worker: `worker-parts78`

**Task**: "Update Parts 7-8 frontmatter (24 chapters)"
**Model**: Opus

```
You are the worker-parts78 teammate for the Book Restructuring migration.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. specs/book-restructuring/spec.md (Sections: Part 7 and Part 8 chapter mapping tables)
2. specs/book-restructuring/worker-briefs.md (your specific brief)
3. specs/book-restructuring/cross-reference-audit.md (references within your scope)

YOUR SCOPE: Update ALL files in:
- `apps/learn-app/docs/07-Deploying-Agent-Factories-in-the-Cloud/`
- `apps/learn-app/docs/08-Turing-LLMOps-Proprietary-Intelligence/`

FOR EACH CHAPTER:

1. **Chapter README.md**: Update sidebar_position, title, headings, cross-references
2. **Every lesson .md file**: Update chapter: field, any "Chapter [OLD#]" references
3. **Part README.md**: Update part name references, chapter listings

MAPPING TABLE (Part 7): Old 49→79, 50→80, 51→81, 52→82, 53→83, 54→84, 55→85, 56→86, 57→87, 58→88, 59→89, 60→90
MAPPING TABLE (Part 8): Old 61→91, 62→92, 63→93, 64→94, 65→95, 66→96, 67→97, 68→98, 69→99, 70→100, 71→101, 72→102

CROSS-PART MAPPING (for references to chapters OUTSIDE your parts):
Old 18→56, 33→61, ..., 48→78 (Part 6), 73→103, ..., 78→108 (Part 9), 79→109, ..., 85→115 (Part 10)
Use the complete mapping from specs/book-restructuring/worker-briefs.md for any cross-references.

Part 7 README: rename references from "AI Cloud Native Development" to "Deploying Agent Factories in the Cloud"

RULES:
- Do NOT touch files outside your two part folders
- Do NOT modify lesson content — only frontmatter and chapter number references
- Be careful with regex: "Chapter 5" should NOT match "Chapter 50". Use word boundaries.
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WORKER-PARTS78 DONE — [N] files updated across 24 chapters'
```

---

### Worker: `worker-parts910`

**Task**: "Update Parts 9-10 + Part 1 + Part 5 placeholders (13 chapters + placeholders)"
**Model**: Opus

```
You are the worker-parts910 teammate for the Book Restructuring migration.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. specs/book-restructuring/spec.md (Sections: Part 9, Part 10, Part 1, Part 5)
2. specs/book-restructuring/worker-briefs.md (your specific brief)
3. specs/book-restructuring/cross-reference-audit.md (references within your scope)

YOUR SCOPE: Update ALL files in:
- `apps/learn-app/docs/09-TypeScript-Language-Realtime-Interaction/`
- `apps/learn-app/docs/10-Building-Realtime-Voice-Agents/`
- `apps/learn-app/docs/01-General-Agents-Foundations/18-claude-code-teams-cicd/` (placeholder)
- `apps/learn-app/docs/05-Building-OpenClaw-Apps/` (all placeholder READMEs + moved Ch 56)

FOR Parts 9-10 CHAPTERS:

1. Update README.md: sidebar_position, title, headings
2. Update lesson .md files: chapter: field, cross-references

MAPPING TABLE (Part 9): Old 73→103, 74→104, 75→105, 76→106, 77→107, 78→108
MAPPING TABLE (Part 10): Old 79→109, 80→110, 81→111, 82→112, 83→113, 84→114, 85→115

CROSS-PART MAPPING (for references to chapters OUTSIDE your parts):
Old 18→56, 33→61, ..., 48→78 (Part 6), 49→79, ..., 60→90 (Part 7), 61→91, ..., 72→102 (Part 8)
Use the complete mapping from specs/book-restructuring/worker-briefs.md for any cross-references.

FOR Part 1 Chapter A placeholder (18-claude-code-teams-cicd):
- Ensure README.md exists with:
  - title: "Chapter 18: Claude Code for Teams, CI/CD & Advanced Configuration"
  - sidebar_position: 7
  - description from specs/Certification-Ready Expansion/Agent-Factory-Certification-Ready-Chapter-Outlines.md

FOR Part 5 (Building OpenClaw Apps):
- Create Part README.md with overview of Building OpenClaw Apps
- Update Ch 56 (moved from old Ch 18): change title from "Chapter 18" to "Chapter 56", update chapter: field, sidebar_position: 1
- Ensure Ch 57 placeholder has meaningful title: "Chapter 57: Building Your First OpenClaw Application"
- Do NOT create Ch 58-60 folders — these are reserved slots for future expansion
- Update all old Ch 18 internal references to say Chapter 56

RULES:
- Do NOT touch files outside your assigned folders
- Do NOT modify lesson content — only frontmatter and chapter number references
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WORKER-PARTS910 DONE — [N] files updated'
```

---

### Worker: `worker-xrefs`

**Task**: "Fix cross-references across Parts 0-4 and all config/rule files"
**Model**: Opus

```
You are the worker-xrefs teammate for the Book Restructuring migration.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. specs/book-restructuring/spec.md (the complete old→new mapping)
2. specs/book-restructuring/cross-reference-audit.md (ALL cross-references the architect found)
3. specs/book-restructuring/worker-briefs.md (your specific brief)

YOUR SCOPE: Fix every reference to old chapter/part numbers in files OUTSIDE Parts 5-10 (those are handled by other workers). Specifically:

CRITICAL SAFETY RULE: Chapters 33-40 exist in BOTH Part 3 (unchanged) and old Part 5 (renumbered).
- Do NOT auto-update "Chapter 33" through "Chapter 40" — these are AMBIGUOUS.
- Only auto-update "Chapter 41" through "Chapter 85" (unambiguous, only existed in old Parts 5-9).
- For chapters 33-40 references in Parts 0-4: read the context. If it refers to Part 3 content
  (legal, sales, supply chain, HR, etc.) → LEAVE IT ALONE. If it refers to old Part 5 content
  (AI agents, SDKs, MCP) → update to new number. Flag any you can't determine.

1. **"Chapter 18" references** (CRITICAL — old Ch 18 moved to Ch 56):
   - ALL existing "Chapter 18" references in Parts 0-4 refer to "Meet Your First AI Employee" (the new placeholder doesn't exist yet)
   - Update "Chapter 18" → "Chapter 56" everywhere in Parts 0-3 lesson files
   - Update Part 1's README.md: replace the old Ch 18 listing with the new Ch 18 placeholder ("Claude Code for Teams, CI/CD & Advanced Configuration")
   - Do NOT touch files inside the moved chapter folder itself (worker-parts910 handles those)

2. **Parts 0-4 lesson files**: grep for "Chapter [41-85]" and "Part [5-9]" references and update them:
   - "Chapter 41" → "Chapter 71", etc. (full mapping in spec — ONLY chapters 41-85)
   - For chapters 33-40: manually inspect context before changing (see safety rule above)
   - "Part 5" → "Part 6" when referring to Building Custom Agents / Building Agent Factories
   - "Part 6" → "Part 7" when referring to AI Cloud Native / Deploying Agent Factories
   - "Part 7" → "Part 8", "Part 8" → "Part 9", "Part 9" → "Part 10"
   - Be CAREFUL: "Part 5" could also mean the NEW Part 5 (Building OpenClaw Apps). Context determines which.

3. **CLAUDE.md rules** (CRITICAL):
   - `.claude/rules/chapter-resolution.md` — Update the entire example directory tree, the chapter mapping table, and all example paths
   - `.claude/rules/content-pipeline.md` — Update any chapter number references
   - `.claude/rules/failure-history.md` — Update references to chapters that changed numbers
   - `.claude/rules/cowork-content.md` — Update any chapter references (these may reference Part 3 chapters which did NOT change, so verify before editing)
   - Main `CLAUDE.md` — Update Part 5 references if any exist

4. **Memory files**: Check `.claude/projects/*/memory/` for stale chapter/part references. Update or flag them.

5. **Spec files**: Check `specs/` for references to old chapter numbers. Update the certification chapter outlines to reference new numbers.

6. **Docusaurus config**: Check for sidebar configuration files that reference old part/chapter numbers.

RULES:
- Use word-boundary-aware matching: "Chapter 3\b" matches "Chapter 3" but NOT "Chapter 33"
- When updating Part references, read the context to determine if "Part 5" means old Part 5 (→Part 6) or new Part 5 (keep as-is)
- Do NOT touch files inside apps/learn-app/docs/05-* through docs/10-* (other workers handle those)
- Do NOT touch files inside apps/learn-app/docs/04-* (Part 4 is not our concern)
- Log every change you make: file path, line number, old text, new text
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WORKER-XREFS DONE — [N] files updated, [M] changes made. Change log at specs/book-restructuring/xref-changes.md'
```

---

## PHASE 4: VERIFICATION (Lead performs directly)

After ALL Phase 3 workers complete, the lead performs verification directly (no teammate needed):

1. **Structure check**:

   ```
   ls -d apps/learn-app/docs/*/
   # Expect 11+ part folders (00 through 10, plus 00-Prelude if it exists)
   ```

2. **Chapter count check**:

   ```
   ls -d apps/learn-app/docs/05-*/*/ | wc -l  # Expect 2 (Ch 56, 57 only — 58-60 are reserved, no folders)
   ls -d apps/learn-app/docs/06-*/*/ | wc -l  # Expect 18
   ls -d apps/learn-app/docs/07-*/*/ | wc -l  # Expect 12
   ls -d apps/learn-app/docs/08-*/*/ | wc -l  # Expect 12
   ls -d apps/learn-app/docs/09-*/*/ | wc -l  # Expect 6
   ls -d apps/learn-app/docs/10-*/*/ | wc -l  # Expect 7
   ```

3. **Collision check**: Verify no old folder names remain:

   ```
   ls -d apps/learn-app/docs/05-Building-Custom-Agents 2>/dev/null  # Should not exist
   ls -d apps/learn-app/docs/06-AI-Cloud-Native-Development 2>/dev/null  # Should not exist
   ```

4. **Stale reference check**: grep for old chapter numbers WITHIN renamed parts (not globally — Part 3 legitimately has Ch 33-40):

   ```
   # Old chapter numbers should be ZERO inside renamed parts:
   grep -rn "Chapter 33\b" apps/learn-app/docs/06-* | head -20  # Should be ZERO
   grep -rn "Chapter 48\b" apps/learn-app/docs/06-* | head -20  # Should be ZERO
   grep -rn "Chapter 49\b" apps/learn-app/docs/07-* | head -20  # Should be ZERO
   grep -rn "Chapter 72\b" apps/learn-app/docs/08-* | head -20  # Should be ZERO
   grep -rn "Chapter 78\b" apps/learn-app/docs/09-* | head -20  # Should be ZERO
   grep -rn "Chapter 85\b" apps/learn-app/docs/10-* | head -20  # Should be ZERO
   # Old folder names should not exist:
   grep -rn "05-Building-Custom-Agents" apps/learn-app/docs/ | head -20
   grep -rn "06-AI-Cloud-Native-Development" apps/learn-app/docs/ | head -20
   # Old Ch 18 refs outside Part 5 should be updated to Ch 56:
   grep -rn "Meet Your First AI Employee" apps/learn-app/docs/0[0-4]-* | head -20
   ```

5. **Frontmatter spot-check**: Read 3 random READMEs from each renamed part and verify chapter numbers are correct.

---

## LEAD COORDINATION RULES

1. Create team with TeamCreate
2. Create ALL tasks upfront with these dependencies:
   - architect → worker-rename → [worker-part6, worker-parts78, worker-parts910, worker-xrefs]
3. Spawn architect first. Wait for completion.
4. Review architect's rename-script.md — verify reverse ordering is correct
5. Spawn worker-rename. Wait for completion.
6. Verify folder structure matches spec BEFORE spawning Phase 3
7. Spawn ALL 4 updater workers simultaneously
8. Do NOT rename folders, edit frontmatter, or fix references yourself — delegate everything
9. After all workers report done, run the Phase 4 verification checks yourself
10. If stale references found, message the responsible worker to fix them
11. After verification passes, shut down all teammates and clean up team
12. Create a single git commit with ALL changes (do NOT commit incrementally)

## MODEL PREFERENCES

| Teammate        | Model | Rationale                                     |
| --------------- | ----- | --------------------------------------------- |
| architect       | Opus  | Critical path — correct rename ordering       |
| worker-rename   | Opus  | File operations must be flawless              |
| worker-part6    | Opus  | Accuracy on 18-chapter scope                  |
| worker-parts78  | Opus  | Accuracy on 24-chapter scope                  |
| worker-parts910 | Opus  | Placeholders + updates need judgment          |
| worker-xrefs    | Opus  | Must distinguish old vs new Part 5 references |

## ANTI-PATTERNS TO AVOID

- Do NOT use the Agent tool or spawn subagents — this is a TEAM with TEAMMATES
- Do NOT rename folders or edit files yourself — delegate everything to teammates
- Do NOT spawn Phase 3 workers before Phase 2 (rename executor) completes and is verified
- Do NOT let multiple workers edit the same file — zero file overlap
- Do NOT skip the Phase 4 verification — stale references WILL exist
- Do NOT create multiple git commits — all changes go in one atomic commit
- Do NOT touch Part 4 (Programming in the AI Era) — it keeps local numbering
- Do NOT touch Part 0-3 chapter numbers (1-40) — only cross-references to changed chapters
- Do NOT use regex without word boundaries — "Chapter 3" must NOT match "Chapter 33"
