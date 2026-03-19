# Ch 31 Islamic Finance Plugin Audit

**Date**: 2026-03-15
**Auditor**: Claude (automated)
**Three sources compared**:

1. Governing artifact (spec): `specs/lightweight/chapter 31 islamic finance/Chapter20_Islamic_Finance_Agents_Global.md`
2. Plugin (actual): `agentfactory-business-plugins/islamic-finance/`
3. Chapter (actual): `apps/learn-app/docs/.../31-islamic-finance-domain-agents/`

**Comparison baseline**: Banking plugin (Ch 21), which has already been cleaned up.

---

## A. Plugin Structure Inventory

### Skills (13 total: 1 router + 12 products)

| #   | Skill                    | Path                                       |
| --- | ------------------------ | ------------------------------------------ |
| 1   | islamic-finance-router   | `skills/islamic-finance-router/SKILL.md`   |
| 2   | murabaha                 | `skills/murabaha/SKILL.md`                 |
| 3   | ijarah-imb               | `skills/ijarah-imb/SKILL.md`               |
| 4   | musharaka-dm             | `skills/musharaka-dm/SKILL.md`             |
| 5   | mudaraba                 | `skills/mudaraba/SKILL.md`                 |
| 6   | musharaka-full           | `skills/musharaka-full/SKILL.md`           |
| 7   | salam                    | `skills/salam/SKILL.md`                    |
| 8   | istisna-a                | `skills/istisna-a/SKILL.md`                |
| 9   | sukuk-issuer             | `skills/sukuk-issuer/SKILL.md`             |
| 10  | sukuk-investor           | `skills/sukuk-investor/SKILL.md`           |
| 11  | takaful-ifrs17           | `skills/takaful-ifrs17/SKILL.md`           |
| 12  | zakat-global             | `skills/zakat-global/SKILL.md`             |
| 13  | shariah-screening-global | `skills/shariah-screening-global/SKILL.md` |

### Commands (4)

| Command       | File                     |
| ------------- | ------------------------ |
| `/if-journal` | `commands/if-journal.md` |
| `/if-compare` | `commands/if-compare.md` |
| `/if-screen`  | `commands/if-screen.md`  |
| `/if-zakat`   | `commands/if-zakat.md`   |

### Exercises (14 files)

| File                                           | Maps to spec exercise |
| ---------------------------------------------- | --------------------- |
| `exercises/ex01-murabaha-bahrain-malaysia.md`  | Exercise 1            |
| `exercises/ex02-ijarah-four-jurisdictions.md`  | Exercise 2            |
| `exercises/ex03-gcc-sukuk-issuance.md`         | Exercise 3            |
| `exercises/ex04-takaful-ifrs17.md`             | Exercise 4            |
| `exercises/ex05-malaysia-corporate-sukuk.md`   | Exercise 5            |
| `exercises/ex06-saudi-ifi-alinma.md`           | Exercise 6            |
| `exercises/ex07-uk-al-rayan-bank.md`           | Exercise 7            |
| `exercises/ex08-nigeria-fgn-sukuk.md`          | Exercise 8            |
| `exercises/ex09-global-zakat-comparison.md`    | Exercise 9            |
| `exercises/ex10-shariah-screening-amana.md`    | Exercise 10           |
| `exercises/ex11-aaoifi-vs-ifrs-capstone.md`    | Exercise 11           |
| `exercises/ex12-cross-border-consolidation.md` | Exercise 12           |
| `exercises/ex13-islamic-fintech-scenarios.md`  | Exercise 13           |
| `exercises/ex14-full-library-build.md`         | Exercise 14           |

### Workflow Recipes (4 files)

| File                                               | Description                             |
| -------------------------------------------------- | --------------------------------------- |
| `workflow-recipes/monthly-murabaha-income.md`      | Monthly murabaha income recognition     |
| `workflow-recipes/daily-shariah-screening.md`      | Daily Shariah equity screening          |
| `workflow-recipes/quarterly-sukuk-distribution.md` | Quarterly sukuk distribution processing |
| `workflow-recipes/annual-zakat-computation.md`     | Annual institutional zakat computation  |

### Jurisdiction Overlays (13 files under router)

All under `skills/islamic-finance-router/references/jurisdictions/`:

bahrain-aaoifi.md, qatar-aaoifi.md, malaysia-mfrs.md, indonesia-psak.md, saudi-ifrs.md, uae-ifrs.md, kuwait-ifrs.md, oman-ifrs.md, pakistan-ifrs.md, uk-ifrs.md, nigeria-ifrs.md, turkey-tfrs.md, gcc-crossborder.md

### Root-level References (2 files)

| File                                 | Content                       |
| ------------------------------------ | ----------------------------- |
| `references/aaoifi-fas-reference.md` | AAOIFI FAS lookup table       |
| `references/global-standards-map.md` | 20-jurisdiction standards map |

### CI / Infrastructure

| File                          | Purpose                              |
| ----------------------------- | ------------------------------------ |
| `hooks/hooks.json`            | SessionStart + PostToolUse hooks     |
| `scripts/validate-routing.py` | 13-jurisdiction routing test harness |
| `evals/routing-golden.json`   | 13 routing test cases                |
| `evals/product-golden.json`   | 6 product accuracy test cases        |
| `evals/run-evals.py`          | Golden file structure validator      |
| `.claude-plugin/plugin.json`  | Plugin manifest                      |
| `CHANGELOG.md`                | Version history                      |
| `README.md`                   | Plugin documentation                 |

### Missing (compared to banking plugin)

| Component    | Banking Has | Islamic Finance Has |
| ------------ | ----------- | ------------------- |
| `.gitignore` | Yes         | **No**              |
| `CLAUDE.md`  | Yes         | **No**              |

---

## B. Governing Artifact (Spec) Analysis

### What the spec defines

**Router**: Yes. Spec defines `islamic-finance-global-router` with 5-step routing rules.

**Products**: 12 product SKILL.md files listed under `/skills/products/` (spec uses a flat `products/` subdirectory, plugin uses `skills/<name>/SKILL.md` directories instead).

**Jurisdictions**: 13 overlay files listed under `/skills/jurisdictions/` (spec uses flat directory; plugin correctly places them under `skills/islamic-finance-router/references/jurisdictions/`).

**Commands**: The spec does NOT mention commands at all. No `/if-journal`, `/if-compare`, `/if-screen`, or `/if-zakat` appear anywhere in the spec. Commands were added in the v2.0.0 plugin build (per CHANGELOG).

**Exercises**: The spec defines 14 exercises inline in "Part Five: Extensive Exercises" (exercises 1-14). They are presented as full prose with step-by-step instructions and "Key learning" paragraphs. The spec treats exercises as chapter teaching content, not as plugin data files.

**Workflow Recipes / Scheduled Tasks**: The spec mentions scheduled tasks in Exercise 14 (capstone) Step 5, listing daily/monthly/quarterly/annual tasks using `/schedule` syntax. The spec does NOT define standalone workflow-recipe files. The scheduled task list in the spec is:

- Daily: murabaha-profit-recognition, ijarah-rental-recognition, sukuk-income-accrual
- Monthly: profit-pool-distribution, zakat-monitoring, shariah-income-check
- Quarterly: shariah-portfolio-screen, ssb-quarterly-report
- Annual: aaoifi-ifrs-reconciliation

**References**: The spec includes an inline "Global Standards Map" table (20 jurisdictions) and inline AAOIFI FAS references. It does not define standalone root-level reference files.

### Spec directory structure (specified)

The spec uses this layout:

```
/skills/
  /products/        <-- flat files (murabaha.md, ijarah-imb.md, etc.)
  /jurisdictions/   <-- flat files (bahrain-aaoifi.md, etc.)
```

The plugin uses:

```
/skills/
  /islamic-finance-router/
    /references/jurisdictions/   <-- jurisdiction overlays
  /murabaha/SKILL.md             <-- product skills as directories
  /ijarah-imb/SKILL.md
  ...
```

This is a deliberate improvement (Agent Skills spec format), documented in the CHANGELOG.

---

## C. Chapter Content Analysis

### Lesson count: 18 lessons (L01-L18)

### Exercise numbering: Chapter uses Exercises 1-15

The chapter README maps exercises to lessons:

- L04: Exercise 1 (murabaha)
- L05: Exercise 2 (ijarah)
- L06: Exercise 3 (sukuk)
- L07: Exercise 4 (takaful)
- L08: Exercise 5 (trade & partnership finance -- a NEW exercise not in spec's original numbering)
- L09: Exercise 6 (Malaysia sukuk -- was Exercise 5 in spec)
- L10: Exercise 7 (Saudi Arabia -- was Exercise 6 in spec)
- L11: Exercise 8 (UK -- was Exercise 7 in spec)
- L12: Exercise 9 (Nigeria -- was Exercise 8 in spec)
- L13: Exercise 10 (zakat -- was Exercise 9 in spec)
- L14: Exercise 11 (Shariah screening -- was Exercise 10 in spec)
- L15: Exercise 12 (AAOIFI vs IFRS capstone -- was Exercise 11 in spec)
- L16: Exercise 13 (cross-border consolidation -- was Exercise 12 in spec)
- L17: Exercise 14 (Islamic fintech -- was Exercise 13 in spec)
- L18: Exercise 15 (full library build capstone -- was Exercise 14 in spec)

**Key finding**: The chapter has 15 exercises (the spec has 14). The chapter added Exercise 5 (trade & partnership finance) for L08. This means the plugin's ex01-ex14 numbering follows the spec's numbering, NOT the chapter's numbering. **Plugin ex05 = spec Exercise 5 (Malaysia sukuk) = chapter Exercise 6**. The exercise data files in the plugin are off-by-one from the chapter's numbering starting at exercise 5.

### Exercise duplication

The chapter lessons contain full exercise text inline. For example:

- L06 (`06-sukuk.md`) contains "Practice Exercise 3: GCC Sukuk Issuance" with full step-by-step prompts
- L10 (`10-saudi-arabia.md`) contains "Practice Exercise 7: Saudi IFI" with full step-by-step prompts

The plugin exercises contain the same content as data files (scenario profiles, transaction data, amortisation schedule templates, expected outputs).

**Verdict**: Exercises are DUPLICATED. The chapter has the full exercise prose with prompts. The plugin has structured data files with scenario profiles, transaction data, and templates. The plugin exercises are supplementary data (numbers, templates) but the exercise instructions are entirely in the chapter text. This is the same pattern as banking before cleanup.

### `/schedule` and workflow recipes in chapter

- L14 (`14-shariah-screening.md`) mentions writing a `/schedule` task for quarterly screening (line 275)
- L18 (`18-full-skill-library-capstone.md`) teaches scheduled task architecture and mentions daily/monthly/quarterly/annual frequencies

The chapter teaches the CONCEPT of scheduled tasks but does not contain the detailed workflow-recipe content that the plugin has. The workflow-recipes in the plugin are standalone operational playbooks (150-250 lines each) with step-by-step execution, trigger conditions, escalation checkpoints, and deliverable matrices.

### Plugin structure references in chapter

The chapter README prerequisites section tells students to install the Islamic Finance plugin from `panaversity/agentfactory-business-plugins`. The README tree shows the plugin structure including `exercises/` and `workflow-recipes/` folders.

---

## D. Comparison Matrix

| Component                 | Spec Says                                    | Plugin Has                                                     | Chapter Has                                | Verdict                                               |
| ------------------------- | -------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------ | ----------------------------------------------------- |
| **Router skill**          | 1 global router                              | 1 (`islamic-finance-router`)                                   | Teaches in L03, L18                        | Aligned                                               |
| **Product skills**        | 12 (flat files in `/products/`)              | 12 (directory format `skills/<name>/SKILL.md`)                 | Teaches each in L04-L14                    | Aligned (format improved)                             |
| **Jurisdiction overlays** | 13 (flat in `/jurisdictions/`)               | 13 (under router `references/jurisdictions/`)                  | Teaches in L01-L12                         | Aligned (location improved)                           |
| **Commands**              | Not mentioned                                | 4 (`/if-journal`, `/if-compare`, `/if-screen`, `/if-zakat`)    | Not taught explicitly                      | Plugin addition (keep)                                |
| **Exercises**             | 14 inline in spec Part Five                  | 14 data files (`exercises/ex01-ex14`)                          | 15 inline (spec 14 + 1 new)                | **DUPLICATED in chapter**                             |
| **Workflow recipes**      | Mentioned as `/schedule` tasks in Ex 14 only | 4 standalone playbooks                                         | L18 teaches concept; L14 shows `/schedule` | **Not in spec as files**                              |
| **Root references**       | Inline tables                                | 2 files (`aaoifi-fas-reference.md`, `global-standards-map.md`) | L02 teaches standards map                  | Plugin addition                                       |
| **Hooks**                 | Not mentioned                                | 2 (SessionStart + PostToolUse)                                 | Not taught explicitly                      | Plugin addition (keep)                                |
| **Scripts**               | Not mentioned                                | 1 (`validate-routing.py`)                                      | L18 teaches 13-query test                  | Aligned                                               |
| **Evals**                 | Not mentioned                                | 3 files (routing + product golden + runner)                    | L18 references testing                     | Plugin addition (keep)                                |
| **.gitignore**            | N/A                                          | **Missing**                                                    | N/A                                        | Banking has one                                       |
| **CLAUDE.md**             | N/A                                          | **Missing**                                                    | N/A                                        | Banking has one                                       |
| **Exercise numbering**    | 1-14                                         | ex01-ex14 (follows spec)                                       | 1-15 (added Ex 5)                          | **Mismatch: plugin vs chapter off-by-one from ex05+** |

### Router SKILL.md: CRITICAL BUG

Line 12 of `skills/islamic-finance-router/SKILL.md` contains:

```
$(cat "/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/chapter 31 islamic finance/islamic-finance-skills/islamic-finance-global-router.md" | tail -n +16)
```

This is a **hardcoded local path shell expansion** that:

1. References a path on the developer's machine (will fail for any other user)
2. Points to a path that may not even exist anymore (`specs/chapter 31 islamic finance/...`)
3. Means the router SKILL.md body is EMPTY for anyone who installs the plugin -- only the YAML frontmatter and jurisdiction overlay links are present

**This is the most critical bug in the plugin.** The router skill effectively has no routing rules for any user who installs the plugin.

---

## E. Recommendations

### 1. CRITICAL: Fix Router SKILL.md

The `$(cat ...)` shell expansion on line 12 must be replaced with the actual routing rules content. The spec (Exercise 14 Step 2) defines the routing rules that should be inlined:

- Step 1: Identify jurisdiction
- Step 2: Map to framework (AAOIFI/MFRS/IFRS)
- Step 3: Identify product
- Step 4: Load jurisdiction overlay
- Step 5: Pre-output checks (confirm standard, label income, never "interest income")

**Priority**: P0 (plugin is non-functional without this)

### 2. Remove `exercises/` directory from plugin

**Rationale**: Exercises are fully duplicated in the chapter text. The plugin exercise files contain structured data (scenario profiles, transaction data, templates) but the chapter already contains this data inline. This matches the banking plugin cleanup pattern where exercises were removed.

**Complication**: The exercise numbering between plugin (ex01-14, from spec) and chapter (1-15, with inserted Exercise 5) is mismatched. Plugin ex05 (Malaysia sukuk) = Chapter Exercise 6. This would confuse students.

**Recommendation**: Remove exercises from plugin. If exercise data files are valuable, they belong in a companion repo or the chapter text itself, not the plugin.

### 3. Remove `workflow-recipes/` directory from plugin

**Rationale**:

- The spec does not define workflow-recipe files; it only mentions `/schedule` tasks in Exercise 14
- The banking plugin (post-cleanup) does not have `workflow-recipes/`
- The chapter teaches the scheduled task concept but does not reference these specific files
- The workflow recipes are operational playbooks that are teaching content (how to run murabaha income recognition), not plugin infrastructure

**Recommendation**: Remove from plugin. If the content is valuable for the chapter, incorporate it into L18 (capstone) or create a companion resource.

### 4. Keep root `references/` as-is OR move under router

**Current state**: 2 reference files at root (`references/aaoifi-fas-reference.md`, `references/global-standards-map.md`).

**Banking pattern**: Banking has references under the router (`skills/banking-global-router/references/`).

**Recommendation**: Move root references under the router at `skills/islamic-finance-router/references/` for consistency with the banking plugin. The jurisdiction overlays are already there; the AAOIFI FAS reference and global standards map are supporting references that the router would logically surface.

### 5. Add `.gitignore` and `CLAUDE.md`

**Banking has both**. Islamic finance is missing both. For consistency:

- `.gitignore`: Standard plugin gitignore
- `CLAUDE.md`: Plugin development instructions (used by contributors)

### 6. Keep commands

Commands (`/if-journal`, `/if-compare`, `/if-screen`, `/if-zakat`) are plugin infrastructure that adds real user value. They are not duplicated in the chapter. Keep them.

### 7. Keep hooks, scripts, evals

These are plugin infrastructure (not teaching content). They are not duplicated in the chapter. Keep them. The banking plugin has the same pattern.

### 8. Fix exercise numbering documentation

If exercises are kept (against recommendation), the README's "How Each Folder Maps to Chapter 31 Lessons" table needs updating because the chapter has 15 exercises (with the inserted Exercise 5 for L08), making the plugin's ex05-ex14 off by one from the chapter's Exercise 6-15.

---

## F. Summary of Changes Needed

| Priority | Change                                                           | Matches Banking Pattern               |
| -------- | ---------------------------------------------------------------- | ------------------------------------- |
| **P0**   | Fix router SKILL.md -- inline routing rules, remove `$(cat ...)` | N/A (unique bug)                      |
| **P1**   | Remove `exercises/` directory (14 files)                         | Yes (banking has no exercises)        |
| **P1**   | Remove `workflow-recipes/` directory (4 files)                   | Yes (banking has no workflow-recipes) |
| **P2**   | Move root `references/` under router                             | Yes (banking refs under router)       |
| **P2**   | Add `.gitignore`                                                 | Yes (banking has one)                 |
| **P2**   | Add `CLAUDE.md`                                                  | Yes (banking has one)                 |
| **P3**   | Update README tree after removals                                | Automatic consequence                 |
| **P3**   | Update `plugin.json` description if needed                       | Minor                                 |

### Files to keep (already aligned with banking pattern)

- `.claude-plugin/plugin.json`
- `skills/` (all 13 skill directories)
- `commands/` (4 command files)
- `hooks/hooks.json`
- `scripts/validate-routing.py`
- `evals/` (3 files)
- `README.md`
- `CHANGELOG.md`

### Estimated post-cleanup file count

**Current**: 56 files
**After cleanup**: ~38 files (removing 14 exercises + 4 workflow recipes + adding 2 missing files)
