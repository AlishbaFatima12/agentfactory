# Chapter 19: Option A Implementation Plan

**Status**: COMPLETE (2026-03-05)

**Approach**: Follow the governing artifact. Two-layer Anthropic plugins + build-from-scratch extensions. Exercise data repo, not installable plugin.

**Executed**: All lesson edits committed to main (`17ed8922`). Companion repo PR: https://github.com/panaversity/ca-cpa-practice-agents/pull/1

**Plugins Available to Students (from Ch 17-18)**:

| Layer | Plugin                           | Commands                                                                                       |
| ----- | -------------------------------- | ---------------------------------------------------------------------------------------------- |
| 1     | `knowledge-work-plugins/finance` | `/journal-entry`, `/reconciliation`, `/income-statement`, `/variance-analysis`, `/sox-testing` |
| 2     | `financial-services-plugins`     | `/dcf`, `/comps`, `/lbo`                                                                       |

---

## Part 1: Lesson-by-Lesson Improvements

### L01 — The Most Consequential AI Transformation

**Governing artifact**: Lines 1-52 (chapter opener, Gen-AI vs Agentic distinction, 5-domain ranking)
**Current lesson status**: Complete, well-structured YAML frontmatter + teaching guide
**Exercise**: None (conceptual lesson)
**Changes needed**: None. This lesson is solid.

---

### L02 — Domain 1: Accounting and Financial Reporting

**Governing artifact**: Lines 59-126 (Domain 1 analysis + Exercise 1)
**Current lesson status**: Complete YAML frontmatter, domain analysis content
**Exercise 1**: Month-end close with generic prompts

**Improvement**: Update Exercise 1 to use Layer 1 commands students already have:

- Step 1: Keep "Review this trial balance" prompt (sets context)
- Step 2: Keep reconciliation identification prompt (domain thinking)
- Step 3: Change from generic "Draft the income statement" → `/income-statement` command, then review
- Step 4: Change from generic "Which journal entries" → `/journal-entry depreciation`, then compare
- Step 5: Keep reflection step

**Exercise data needed**: Trial balance CSV. Link to `exercises/trial-balances/textile-manufacturer-tb.csv`

**Specific edits**:

- Add download link for trial balance data at exercise start
- Replace generic prompts with Layer 1 commands where natural (Steps 3-4)
- Keep generic prompts where the learning IS the prompt (Steps 1-2, 5)

---

### L03 — Domain 2: Tax and Non-Assurance Advisory

**Governing artifact**: Lines 129-196 (Domain 2 analysis + Exercise 2)
**Current lesson status**: Complete
**Exercise 2**: Tax research and computation

**Improvement**: Exercise 2 is mostly prompt-based (tax research IS a prompt, not a command). Minimal changes:

- Step 3 (computation): Could note "compare your manual computation against what the COA and journal-entry commands would produce" but tax computation isn't a Layer 1 command — it's domain judgment
- Step 4 (SKILL.md drafting): This is the core learning — keep as-is

**Exercise data needed**: None (uses hypothetical scenario in-text)
**Specific edits**: Minimal. Add a note in the exercise setup reminding students they have Layer 1 plugins installed from Ch 17 and will use them extensively in L07+.

---

### L04 — Domain 3: Assurance Services

**Governing artifact**: Lines 199-260 (Domain 3 analysis + Exercise 3)
**Current lesson status**: Complete
**Exercise 3**: AI-assisted audit risk assessment

**Improvement**: Update Exercise 3 to reference `/sox-testing`:

- Step 1: Keep risk assessment prompt (domain thinking)
- Step 2: Keep IFRS 15 revenue recognition questions (judgment)
- Step 3: Add "Try running `/sox-testing revenue-recognition` to see what the plugin generates for control testing. Compare this to the monitoring programme you're designing — note the difference between SOX control testing and continuous audit monitoring."
- Step 4: Keep SKILL.md writing step

**Exercise data needed**: None (uses publicly available company info)
**Specific edits**: Add `/sox-testing` reference in Step 3 as a comparison point, not replacement.

---

### L05 — Domain 4: Management Accounting and Financial Management

**Governing artifact**: Lines 263-313 (Domain 4 analysis + Exercise 4)
**Current lesson status**: Complete
**Exercise 4**: FP&A workflow with IDFA

**Improvement**: Exercise 4 directly connects to Ch 18 IDFA. Update to use Layer 1 commands:

- Step 1: Change from generic "Structure this P&L data" → "Run `/variance-analysis` on your P&L data, then restructure the output using IDFA Inp\_ naming conventions from Chapter 18"
- Step 2: Keep CFO narrative prompt (judgment)
- Step 3: Keep scenario modeling prompt
- Step 4: Keep SKILL.md drafting

**Exercise data needed**: P&L data (actual vs budget). Link to exercise data or note "use data from previous exercises."
**Specific edits**: Replace Step 1 generic prompt with `/variance-analysis` command + IDFA restructuring.

---

### L06 — Domain 5: Governance, Risk and Compliance Advisory

**Governing artifact**: Lines 317-383 (Domain 5 analysis + Exercise 5)
**Current lesson status**: Complete
**Exercise 5**: Continuous controls monitoring specification

**Improvement**: Minimal. Exercise 5 is about control design thinking — specifying what controls prevent, what evidences them, what reveals failure. This is judgment work, not plugin execution.

- Step 1-2: Keep (control specification prompts)
- Step 3: Keep (SKILL.md writing)
- Step 4: Keep (Three Lines of Defence placement)

**Exercise data needed**: None
**Specific edits**: None needed. The lesson correctly focuses on design thinking.

---

### L07 — The CA/CPA Plugin Ecosystem

**Governing artifact**: Lines 387-537 (Part Two: Cowork + Plugin Stack + Exercise 6)
**Current lesson status**: Complete, teaches two-layer architecture
**Exercise 6**: Full month-end close workflow

**Current L07 is already aligned with the governing artifact.** It teaches:

- Cowork's four mechanisms
- Layer 1: `knowledge-work-plugins/finance` with 5 commands
- Layer 2: `financial-services-plugins` with DCF/comps/LBO
- Mapping plugins to 5 practice domains
- Exercise 6: Full month-end close using Layer 1 commands

**Changes needed**:

- Fix companion repo reference (line 217): `ca-cpa-domain-agents` → `ca-cpa-practice-agents`
- Add download link for exercise data at Exercise 6

**Exercise data needed**: Trial balance CSV. Link to `exercises/trial-balances/textile-manufacturer-tb.csv`

---

### L08 — Cowork Workflows for CA/CPA Practice

**Governing artifact**: Lines 470-537 (Month-end close walkthrough, cross-app workflow, Exercise 6 continued)
**Current lesson status**: Complete, teaches workflows + global instructions

**Changes needed**: Minimal. The lesson teaches:

- Month-end close as sequenced commands (aligned with governing artifact)
- Cross-app orchestration (Excel → PowerPoint)
- Global instructions setup

**Specific edits**: Verify the scheduled task examples use natural language `/schedule` specifications (not plugin commands). The governing artifact shows these as natural language instructions.

---

### L09 — Building Jurisdiction and Entity Extensions

**Governing artifact**: Lines 541-580 (Part Three: Extensions 1-2)
**Current lesson status**: Complete, teaches build-from-scratch

**This lesson is correctly aligned with Option A.** Students build jurisdiction-specific tax rules and chart of accounts extensions FROM SCRATCH. The Pakistan worked examples are excellent.

**Changes needed**: None for the core content.

- Add link to reference SKILL.md files in companion repo: "After building your own, compare against the reference examples at [repo link]"
- Add download link for COA template CSV if the exercise needs it

---

### L10 — Building Methodology and Compliance Extensions

**Governing artifact**: Lines 583-646 (Extensions 3-5 + Exercise 7)
**Current lesson status**: Complete, teaches build-from-scratch
**Exercise 7**: Building a CA/CPA domain extension using Method A

**Correctly aligned with Option A.** Students build audit methodology, client entity, and compliance calendar extensions from scratch.

**Changes needed**:

- Add link to reference SKILL.md files in companion repo
- Add link to regulatory-calendar.csv reference data

---

### L11 — Accounting & Reporting Practice Lab

**Governing artifact**: Lines 699-910 (Exercises 8-11)
**Current lesson status**: Complete
**Exercises**: 8 (bookkeeping), 9 (IFRS statements), 10 (scheduled close), 11 (consolidation)

**Changes needed**:

- Verify all exercises reference Layer 1 commands correctly (they should — L07 teaches them)
- Add download links for exercise data:
  - Ex 8: `exercises/source-documents/sample-invoices.md`
  - Ex 9: Trial balance (in-text hypothetical OR download)
  - Ex 11: `exercises/consolidation/parent-subsidiary-data.md`

---

### L12 — Tax & Advisory Practice Lab

**Governing artifact**: Lines 914-998 (Exercises 12-14)
**Current lesson status**: Complete
**Exercises**: 12 (tax computation), 13 (M&A due diligence), 14 (restructuring)

**Changes needed**:

- Verify Ex 12 uses Layer 1 commands
- Verify Ex 13 uses `/dcf` and `/comps` from Layer 2
- Verify Ex 14 uses `/lbo` from Layer 2
- Add download links for exercise data (entity profiles)

---

### L13 — Assurance Practice Lab

**Governing artifact**: Lines 1026-1130 (Exercises 15-17)
**Current lesson status**: Complete
**Exercises**: 15 (external audit), 16 (fraud detection), 17 (internal audit report)

**Changes needed**:

- Verify Ex 15 uses `/sox-testing` command
- Add download links:
  - Ex 17: `exercises/working-papers/audit-planning-template.md`, `revenue-testing-template.md`

---

### L14 — Management Accounting & GRC Practice Lab

**Governing artifact**: Lines 1134-1267 (Exercises 18-21)
**Current lesson status**: Complete
**Exercises**: 18 (cash flow), 19 (board pack), 20 (risk register), 21 (compliance calendar)

**Changes needed**:

- Verify exercises use Layer 1 commands and `/schedule` natural language specs
- Add download links for any exercise data
- Verify scheduled task specs (Ex 18 Step 7, Ex 19 Step 7, Ex 20 Step 6, Ex 21 Step 4) are natural language, not plugin commands

---

### L15 — Cross-Domain Capstones

**Governing artifact**: Lines 1271-1355 (Exercises 22-23)
**Current lesson status**: Complete
**Exercises**: 22 (new client onboarding), 23 (annual audit cycle)

**Changes needed**:

- Add download links:
  - Ex 22: `exercises/entity-profiles/crescent-textiles.md` (textile exporter profile)
- Verify exercises reference both Layer 1 and Layer 2 commands

---

### L16 — Full Practice Deployment & Reflection

**Governing artifact**: Lines 1358-1437 (Exercise 24)
**Current lesson status**: Has WRONG repo name and plugin install references
**Exercise 24**: Full practice deployment

**Changes needed (CRITICAL)**:

1. **Fix repo name**: `ca-cpa-domain-agents` → `ca-cpa-practice-agents` (lines 130, 141, 152)
2. **Fix Step 1**: Remove `claude plugin marketplace add panaversity/ca-cpa-domain-agents` — this plugin doesn't exist in Option A. Step 1 should verify Layer 1 + Layer 2 only (matching governing artifact lines 1366-1377)
3. **Fix expected output**: Remove `ca-cpa-domain-agents installed` from verification list
4. **Step 2**: Should say "Build the practice-wide SKILL.md library" (build from scratch, matching governing artifact lines 1380-1393). Currently may reference pre-built skills.
5. **Step 4**: Verify scheduled tasks are natural language `/schedule` specs, matching governing artifact lines 1396-1411
6. **Add download link**: Full exercise data zip for the capstone

---

## Part 2: Companion Repo Cleanup

### Current repo state (`panaversity/ca-cpa-practice-agents`)

```
.claude-plugin/
  plugin.json          ← name wrong: "ca-cpa-domain-agents"
  marketplace.json
skills/
  accounting-reporting/     ← domain overview (DELETE)
  tax-advisory/             ← domain overview (DELETE)
  assurance/                ← domain overview (DELETE)
  management-accounting/    ← domain overview (DELETE)
  grc-advisory/             ← domain overview (DELETE)
  pakistan-tax-jurisdiction/ ← extension (KEEP as reference)
  chart-of-accounts/        ← extension (KEEP as reference)
  audit-methodology/        ← extension (KEEP as reference)
  client-entity/            ← extension (KEEP as reference)
  compliance-calendar/      ← extension (KEEP as reference)
workflow-recipes/           ← KEEP
exercises/                  ← KEEP
references/                 ← EVALUATE per folder
README.md
LICENSE
```

### Target repo state

```
panaversity/ca-cpa-practice-agents/
├── exercises/                          ← downloadable zip
│   ├── README.md
│   ├── trial-balances/
│   │   └── textile-manufacturer-tb.csv
│   ├── source-documents/
│   │   └── sample-invoices.md
│   ├── entity-profiles/
│   │   ├── crescent-textiles.md
│   │   └── karachi-foods.md
│   ├── working-papers/
│   │   ├── audit-planning-template.md
│   │   └── revenue-testing-template.md
│   └── consolidation/
│       └── parent-subsidiary-data.md
├── reference-skills/                   ← renamed from skills/, NOT a plugin
│   ├── README.md                       ← explains these are reference examples
│   ├── pakistan-tax-jurisdiction/
│   │   └── SKILL.md
│   ├── chart-of-accounts/
│   │   ├── SKILL.md
│   │   └── assets/
│   │       └── coa-template.csv        ← runtime data stays
│   ├── audit-methodology/
│   │   └── SKILL.md
│   ├── client-entity/
│   │   └── SKILL.md
│   └── compliance-calendar/
│       ├── SKILL.md
│       └── assets/
│           └── regulatory-calendar.csv ← runtime data stays
├── workflow-recipes/                   ← 6 natural language /schedule specs
│   ├── README.md
│   ├── month-end-close.md
│   ├── board-pack.md
│   ├── compliance-monitor.md
│   ├── fraud-detection.md
│   ├── cash-flow-update.md
│   └── risk-register-update.md
├── README.md                           ← updated for Option A
└── LICENSE
```

### Repo actions

| Action | What                                   | Why                                             |
| ------ | -------------------------------------- | ----------------------------------------------- |
| DELETE | `.claude-plugin/` directory            | No plugin                                       |
| DELETE | `skills/accounting-reporting/`         | Domain overview, not in governing artifact      |
| DELETE | `skills/tax-advisory/`                 | Domain overview, not in governing artifact      |
| DELETE | `skills/assurance/`                    | Domain overview, not in governing artifact      |
| DELETE | `skills/management-accounting/`        | Domain overview, not in governing artifact      |
| DELETE | `skills/grc-advisory/`                 | Domain overview, not in governing artifact      |
| DELETE | `references/` at root                  | LLM knows this content                          |
| DELETE | `references/` inside any skill folders | LLM knows this content                          |
| RENAME | `skills/` → `reference-skills/`        | Clarify these aren't a plugin                   |
| ADD    | `reference-skills/README.md`           | Explain purpose                                 |
| ADD    | `workflow-recipes/README.md`           | Explain purpose                                 |
| UPDATE | `README.md`                            | Match Option A (exercise data repo, not plugin) |
| KEEP   | `exercises/`                           | Exercise data, unchanged                        |
| KEEP   | 5 extension SKILL.md files             | Reference examples                              |
| KEEP   | 6 workflow recipes                     | Natural language /schedule specs                |
| KEEP   | `assets/` (CSV files)                  | Runtime data students may use                   |

---

## Part 3: Download Links Pattern

Each lesson that needs exercise data gets a download callout:

```markdown
:::info Exercise Data
Download the exercise data from the [companion repository](https://github.com/panaversity/ca-cpa-practice-agents):

- [textile-manufacturer-tb.csv](https://github.com/panaversity/ca-cpa-practice-agents/raw/main/exercises/trial-balances/textile-manufacturer-tb.csv) — Trial balance for this exercise
- Or download everything: [exercises.zip](https://github.com/panaversity/ca-cpa-practice-agents/releases/latest/download/ca-cpa-exercise-data.zip)
  :::
```

### Download links by lesson

| Lesson | Exercise | Data Needed                      | Link Target                                                           |
| ------ | -------- | -------------------------------- | --------------------------------------------------------------------- |
| L02    | Ex 1     | Trial balance                    | `exercises/trial-balances/textile-manufacturer-tb.csv`                |
| L07    | Ex 6     | Trial balance                    | `exercises/trial-balances/textile-manufacturer-tb.csv`                |
| L09    | —        | COA template (optional)          | `reference-skills/chart-of-accounts/assets/coa-template.csv`          |
| L10    | —        | Regulatory calendar (optional)   | `reference-skills/compliance-calendar/assets/regulatory-calendar.csv` |
| L11    | Ex 8     | Source documents                 | `exercises/source-documents/sample-invoices.md`                       |
| L11    | Ex 9     | Trial balance (in-text)          | None — hypothetical data provided in lesson                           |
| L11    | Ex 11    | Consolidation data               | `exercises/consolidation/parent-subsidiary-data.md`                   |
| L12    | Ex 13    | Entity profile                   | `exercises/entity-profiles/`                                          |
| L13    | Ex 17    | Working papers                   | `exercises/working-papers/`                                           |
| L14    | —        | None — hypothetical data in-text | None                                                                  |
| L15    | Ex 22    | Entity profile                   | `exercises/entity-profiles/crescent-textiles.md`                      |
| L16    | Ex 24    | Full zip                         | `ca-cpa-exercise-data.zip` (release asset)                            |

---

## Part 4: README Update

The chapter README needs:

1. Fix repo name: `ca-cpa-domain-agents` → `ca-cpa-practice-agents`
2. Simplify companion section — no plugin install, just exercise data download
3. Remove the 5-zip download list (skills-only, workflow-recipes, references zips)
4. Replace with single exercise data zip + link to reference-skills folder

---

## Execution Order

1. **Repo cleanup first** — delete/rename/update on GitHub
2. **README fix** — repo name + companion section
3. **L16 fix** — most critical lesson fix (wrong install commands)
4. **L02-L06 improvements** — add plugin commands to exercises (minor edits)
5. **L07-L15** — add download links, verify command references
6. **Plugin spec rewrite** — update `specs/ch-19/plugin-spec.md` to match Option A
7. **Plan.md update** — update to match Option A

---

## Summary of Changes

| Category                             | Count                                        | Effort             |
| ------------------------------------ | -------------------------------------------- | ------------------ |
| Lessons needing content edits        | 5 (L02, L04, L05, L07, L16)                  | Small per lesson   |
| Lessons needing download links added | 8 (L02, L07, L09, L10, L11, L13, L15, L16)   | Trivial per lesson |
| Lessons needing no changes           | 6 (L01, L03, L06, L08, L12, L14)             | Zero               |
| Repo files to delete                 | 7+ (plugin dir, 5 domain skills, references) | One PR             |
| Repo files to rename                 | 1 (`skills/` → `reference-skills/`)          | Same PR            |
| Repo files to update                 | 2 (README, add sub-READMEs)                  | Same PR            |
| Spec files to rewrite                | 1 (`plugin-spec.md`)                         | One session        |
