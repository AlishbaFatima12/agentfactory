# Agent Spec: Team 1D — Exercise Quality + New Skill Files

## Mission

Add "What you need" setup sections and named deliverables to all 14 exercise files, and create 3 new jurisdiction/interaction overlay files.

## Quality Standard

### Exercise "What you need" format:

```markdown
## What You Need

- Banking plugin installed (`claude plugin install banking@agentfactory-business`)
- [Specific data file or table from this exercise]
- [Any specific skill that should be active]
- Estimated time: [X] minutes
```

### Exercise deliverable format:

Add to the end of each exercise's step list:

```markdown
## Deliverable

Produce: [specific named artifact — e.g., "Stage migration table in Excel format",
"SAR narrative draft for NCA submission", "Capital adequacy dashboard"]
```

### New jurisdiction overlay format (match existing files):

- YAML frontmatter with name, version, description, jurisdiction
- Regulatory body and key legislation
- Local variations from Basel/IFRS 9/AML international standards
- Key thresholds that differ from global standards
- Recent regulatory developments
- 80-150 lines per file

## Input Files

- `specs/agents/ch21-sprint/02-audit-report.md`: DIMENSION 3 (exercise gaps) and Missing Files section
- All exercise files in `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/banking/exercises/*/README.md`
- Existing jurisdiction files in `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/banking/skills/banking-global-router/references/jurisdictions/` (use as templates)

## Output

- Modified exercise README.md files in-place (14 files)
- 3 new files:
  - `banking/skills/banking-global-router/references/jurisdictions/gcc-gcc.md`
  - `banking/skills/banking-global-router/references/jurisdictions/us-cecl.md`
  - `banking/skills/banking-global-router/references/jurisdictions/islamic-banking-interaction.md`

## Work Order

### Exercise Updates (all 14 files)

For each exercise README.md, add:

1. "## What You Need" section after the title/description, before Step 1
2. "## Deliverable" section after the last step, before Key Learning

Specific deliverables per exercise:

- ex01: Stage migration table with ECL by facility
- ex02: GCC corporate ECL summary with Risk Committee briefing note
- ex03: RWA calculation table with capital ratio dashboard
- ex04: LCR/NSFR calculation with stress scenario comparison
- ex05: ICAAP capital depletion path over 3-year horizon
- ex06: SAR narrative draft for NCA submission
- ex07: KYC client profile document with risk rating justification
- ex08: Sanctions escalation memo to MLRO
- ex09: Integrated capital management report
- ex10: 10-slide Board Risk Report (PowerPoint structure)
- ex11: Complete banking SKILL.md library with 11 test query results
- ex12: Nostro reconciliation certificate
- ex13: Four-way provision reconciliation sign-off memo
- ex14: Month-end suspense certification for CFO

### New Jurisdiction Files

**gcc-gcc.md** — GCC Banking Regulation

- Cover: SAMA (Saudi), CBUAE (UAE), CBB (Bahrain), CBK (Kuwait), QCB (Qatar)
- Key differences: Islamic banking prevalence, IFRS 9 adoption timeline, Basel III implementation status
- Specific thresholds: SAMA CAR minimum (8% + buffers), CBUAE capital requirements
- FATF mutual evaluation status for GCC countries
- 80-120 lines

**us-cecl.md** — US CECL (ASC 326) vs IFRS 9

- NOT a US jurisdiction overlay for Basel/AML — specifically for ECL comparison
- Key differences: CECL = lifetime ECL for ALL assets (no staging), Day 1 impact larger
- Measurement: CECL uses reasonable and supportable forecast + historical reversion
- No SICR concept — no staging cliff, but larger upfront provisioning
- Implementation: effective 2020 for large banks, 2023 for smaller
- 80-120 lines

**islamic-banking-interaction.md** — Islamic Banking × Conventional Banking Regulation

- How Islamic finance products (murabaha, ijara, musharaka) interact with IFRS 9 staging
- AAOIFI FAS 30 (impairment) vs IFRS 9 — where they agree and differ
- Pakistan: SBP requires both AAOIFI and IFRS 9 for Islamic banking windows
- Malaysia: BNM dual framework. UAE: CBUAE allows both
- Riba elimination mandate (Pakistan 2028 deadline) — impact on banking skills
- 80-120 lines

### Router Update

After creating new jurisdiction files, add routes to `banking-global-router/SKILL.md`:

- GCC / SAMA / CBUAE / CBB → gcc-gcc.md
- CECL / ASC 326 / US ECL → us-cecl.md
- Islamic banking / AAOIFI / riba / murabaha → islamic-banking-interaction.md

## Hard Constraints

- Work in the plugin repo: `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/`
- New jurisdiction files must match the format of existing files (read uk-pra.md as template)
- Exercise modifications: INSERT only, do not rewrite existing step content
- Router additions: append to existing tables, do not reorganise
- All regulatory facts must be accurate — cite specific legislation/regulation names

## Handoff Note

Write to: `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/agents/ch21-sprint/handoff-1d-exercises-new-files.md`
