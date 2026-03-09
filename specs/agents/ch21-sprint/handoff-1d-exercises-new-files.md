# Handoff Note: Team 1D -- Exercise Quality + New Skill Files

**Date**: 2026-03-06
**Status**: COMPLETE

---

## PART 1 -- Exercise Updates (14/14 files modified)

All 14 exercise README.md files in `banking/exercises/ex*/README.md` received two insertions each:

1. **"## What You Need"** section added after the title/Scenario Profile, before Step 1. Each includes:
   - Plugin install command
   - Specific data tables or profiles needed from that exercise
   - Skills that should be active
   - Estimated time

2. **"## Deliverable"** section added after the last step, before Key Learning. Each includes a specific named artifact per the spec:

| Exercise | Deliverable                                                    |
| -------- | -------------------------------------------------------------- |
| ex01     | Stage migration table with ECL by facility                     |
| ex02     | GCC corporate ECL summary + Risk Committee briefing note       |
| ex03     | RWA calculation table + capital ratio dashboard + MDA headroom |
| ex04     | LCR/NSFR calculation workbook with stress scenario comparison  |
| ex05     | ICAAP capital depletion path over 3-year horizon               |
| ex06     | SAR narrative draft for NCA submission                         |
| ex07     | KYC client profile with risk rating justification              |
| ex08     | Sanctions escalation memo to MLRO                              |
| ex09     | Integrated capital management report                           |
| ex10     | 10-slide Board Risk Report (PowerPoint structure)              |
| ex11     | Complete banking SKILL.md library with 11 test query results   |
| ex12     | Nostro reconciliation certificate                              |
| ex13     | Four-way provision reconciliation sign-off memo                |
| ex14     | Month-end suspense certification for CFO                       |

**Constraint compliance**: INSERT only -- no existing step content was rewritten.

---

## PART 2 -- New Jurisdiction Files (3 files created)

All files in `banking/skills/banking-global-router/references/jurisdictions/`:

| File                             | Lines | Content                                                                                                                                                                                                                                                         |
| -------------------------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gcc-gcc.md`                     | 108   | SAMA, CBUAE, CBB, CBK, QCB, CBO. Covers IFRS 9 ECL (oil price sensitivity, GRE exposures, expatriate risk), Basel capital thresholds per country, GCC-specific liquidity (ELAR, deposit concentration), AML/MENAFATF status, recent developments.               |
| `us-cecl.md`                     | 120   | CECL (ASC 326) vs IFRS 9 comparison. Staging vs no staging, measurement approaches, Day 1 impact, PD/LGD/EAD framework differences, capital interaction, key differences summary table, cross-border implications.                                              |
| `islamic-banking-interaction.md` | 120   | Product-by-product IFRS 9 interaction (murabaha, ijara, musharaka, mudaraba, istisna, salam). AAOIFI FAS 30 vs IFRS 9 comparison table. Dual framework coverage (Pakistan SBP, Malaysia BNM, UAE CBUAE, Bahrain CBB). IFSB-15 capital, AML for Islamic banking. |

**Format compliance**: All match uk-pra.md template (YAML frontmatter, regulatory body sections, key thresholds, legislation citations). All within 80-120 line target.

---

## PART 3 -- Router Update

`banking/skills/banking-global-router/SKILL.md` updated:

**STEP 2 (domain routing table)** -- 2 rows appended:

- `CECL, ASC 326, US ECL, current expected credit losses` -> `us-cecl (comparison overlay)`
- `Islamic banking, AAOIFI, FAS 30, riba, murabaha, ijara` -> `islamic-banking-interaction`

**STEP 3 (jurisdiction overlay list)** -- 3 entries appended:

- `[GCC / SAMA / CBUAE / CBB / CBK / QCB](references/jurisdictions/gcc-gcc.md)`
- `[CECL / ASC 326 / US ECL comparison](references/jurisdictions/us-cecl.md)`
- `[Islamic banking / AAOIFI / riba / murabaha](references/jurisdictions/islamic-banking-interaction.md)`

**Constraint compliance**: Appended to existing tables only -- no reorganization.

---

## Audit Gap Coverage

This work closes the following gaps from `02-audit-report.md`:

| Gap                                           | Status                                           |
| --------------------------------------------- | ------------------------------------------------ |
| M2: 14/14 exercises missing "What you need"   | CLOSED -- all 14 now have it                     |
| M3: 10/14 exercises missing named deliverable | CLOSED -- all 14 now have it                     |
| M5: No GCC jurisdiction overlay               | CLOSED -- gcc-gcc.md created                     |
| M6: No CECL overlay                           | CLOSED -- us-cecl.md created                     |
| M7: No Islamic banking interaction overlay    | CLOSED -- islamic-banking-interaction.md created |

---

## Files Modified (17 total)

**Plugin repo** (`agentfactory-business-plugins/banking/`):

- `exercises/ex01-retail-mortgage-staging/README.md`
- `exercises/ex02-gcc-corporate-ecl/README.md`
- `exercises/ex03-basel-rwa-calculation/README.md`
- `exercises/ex04-lcr-nsfr-liquidity/README.md`
- `exercises/ex05-icaap-stress-test/README.md`
- `exercises/ex06-aml-alert-sar/README.md`
- `exercises/ex07-kyc-corporate-onboarding/README.md`
- `exercises/ex08-sanctions-screening/README.md`
- `exercises/ex09-ifrs9-basel-interaction/README.md`
- `exercises/ex10-board-risk-report-capstone/README.md`
- `exercises/ex11-skill-library-build/README.md`
- `exercises/ex12-nostro-reconciliation/README.md`
- `exercises/ex13-ifrs9-provision-recon/README.md`
- `exercises/ex14-suspense-clearance/README.md`
- `skills/banking-global-router/references/jurisdictions/gcc-gcc.md` (NEW)
- `skills/banking-global-router/references/jurisdictions/us-cecl.md` (NEW)
- `skills/banking-global-router/references/jurisdictions/islamic-banking-interaction.md` (NEW)
- `skills/banking-global-router/SKILL.md` (MODIFIED -- router entries added)
