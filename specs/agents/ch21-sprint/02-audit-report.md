# Audit Report — Chapter 21 Banking AI

**Date**: 2026-03-06
**Verdict**: A — PATCH (confirmed by human)

---

```
CHAPTER AUDIT — Chapter 21 Banking AI
═══════════════════════════════════════════════════════════════════

DIMENSION 1 — COMPLETENESS
  Total word count:    43,107  /  benchmark >= 20,000  ✓ PASS
  Truncated sections (header + <30 words):  0  ✓ PASS

  Missing entirely (no header, no content):
    [x] Cowork installation walkthrough with actual plugin outputs
        — L02 has `claude plugin install` but no demonstration of output
    [x] Worked example: named bank + named professional + real numbers
        + full user→agent dialogue (>= 1 per major section)
        — 0 worked examples with Cowork dialogue exist in any lesson
        — The docx has one (6-step ECL workflow); lesson files have zero
    [x] Pakistan/SBP context in chapter prose (not only in skills files)
        — ~5 prose paragraphs out of 43,107 words
    [ ] GCC context — PRESENT in exercise data (Ex2: GCC corporate)
        but thin in teaching prose (~3 paragraphs)
    [x] US CECL vs IFRS 9 comparison in prose
        — 4 mentions in L01 and L02 only; no dedicated comparison section
    [x] Model risk governance (SR 11-7, EBA guidelines, PRA principles)
        — 9 mentions across 4 lessons; PRESENT but as passing references
        — No dedicated section explaining model risk management for AI
    [x] SKILL.md library map (how the 15 files relate, when each loads)
        — L02 has a skill table but no prose explaining the routing logic
          or how skills chain together in multi-pillar queries
    [ ] Chapter summary — PRESENT in L15 ("Five Principles of Banking
        Domain AI", line 278)

DIMENSION 2 — CONCEPT BOXES  (benchmark >= 15, marked :::info/:::tip)
  Found: 19                                              ✓ PASS (meets minimum)

  Distribution:
    L01: 1   L02: 1   L03: 2   L04: 0   L05: 2
    L06: 2   L07: 2   L08: 3   L09: 2   L10: 2
    L11: 1   L12: 1   L13: 0   L14: 0   L15: 0

  Lessons with ZERO concept boxes: L04, L13, L14, L15 (4 lessons)

  Missing concept boxes — terms used before definition:
    [x] ECL — introduced L01 para 2, first concept box in L03 line 149
    [x] PD (Probability of Default) — used L01, no standalone box
    [x] LGD (Loss Given Default) — used L01, no standalone box
    [x] EAD (Exposure at Default) — used L01, no standalone box
    [x] CCF (Credit Conversion Factor) — used L04, no box
    [x] SICR — first box-level definition L03 line 107, but used earlier
    [x] TTC PD vs PIT PD — used L04/L05, no box
    [x] PMA (Post-Model Adjustment) — box in L05, adequate
    [ ] Stage 1/2/3 — defined in L03 table, adequate
    [x] HQLA — used L08, no standalone box
    [x] LCR — used L08, inline definition adequate
    [x] NSFR — used L08, inline definition adequate
    [ ] CET1 / Tier 1 / Total Capital — L06 table, adequate
    [x] RWA — used from L01, no standalone box until L07
    [x] IRB vs SA — used L07, defined inline but no concept box
    [x] Output Floor (Basel IV) — mentioned L07, no box
    [x] MDA (Maximum Distributable Amount) — used L06, no box
    [x] SAR / STR — used L09, no standalone box
    [x] PEP — used L09, no box
    [x] EDD / CDD — used L09, defined inline, no box
    [x] FATF and grey list — used L09/L10, no box
    [x] CECL — mentioned L01, no box
    [x] ICAAP / ILAAP — used L08/L13, no box
    [x] ACS (Bank of England Annual Cyclical Scenario) — used L13, no box
    [x] DFAST (US stress testing) — not mentioned at all
    [x] Nostro account — used L14, no box
    [x] Suspense account — used L14, no box

  TOTAL MISSING CONCEPT BOXES: ~24

DIMENSION 3 — EXERCISES  (benchmark: every element present on all exercises)

  Note: Exercises live in two places:
    1. Plugin repo: banking/exercises/ex01-ex14/README.md (detailed data)
    2. Lesson files: embedded exercise sections in L04, L05, L12-L15

  Checking the plugin repo exercise files (authoritative):

  Total exercises: 14
  With "Key Learning" statement:          14 / 14  ✓ PASS
  With time target:                       14 / 14  ✓ PASS
  With "What you need" setup section:      0 / 14  ✗ FAIL — ALL MISSING
  With named verifiable deliverable:       4 / 14  ✗ FAIL — 10 MISSING

  Exercises missing "What you need" section: ALL 14
    — No exercise specifies what plugin/data/tools must be loaded first

  Exercises missing named deliverable: ex01-ex08, ex11, ex14
    — Only ex03, ex09, ex11, ex13 mention specific output artifacts

DIMENSION 4 — WORKED EXAMPLES
  Major sections with named bank + named professional + real numbers
  + actual user→agent dialogue:           0  /  benchmark >= 1 per section

  Named professionals/banks in lesson prose: 22 references across 5 lessons
    — But ALL are in exercise contexts or AML alert scenarios (L09, L10, L13)
    — ZERO are worked examples with Cowork command → agent response format

  Major sections missing worked examples with dialogue:
    [x] IFRS 9 ECL (L03-L05) — formulas shown, no Cowork workflow
    [x] Basel Capital (L06) — calculations shown, no Cowork workflow
    [x] Basel RWA (L07) — risk weight table used, no Cowork workflow
    [x] Basel Liquidity (L08) — LCR/NSFR calculated, no Cowork workflow
    [x] AML Three Lines (L09) — framework taught, no Cowork workflow
    [x] AML TM/SAR (L10) — process taught, no Cowork workflow
    [x] Cross-Pillar (L11) — cascade described, no Cowork workflow
    [x] Reconciliation (L14) — hierarchy taught, no Cowork workflow

  8 major sections have ZERO worked examples with agent dialogue.

DIMENSION 5 — COWORK WORKFLOW NARRATIVE
  Prose-level plugin/skill references (not in exercises):  48  ✓ PASS (>= 20)
  Plugin command demonstrations in prose:                    5
    — Install command in L02 (1)
    — /bank-ecl, /bank-capital, /bank-recon, /bank-aml mentioned in L02 (4)
    — ZERO actual command demonstrations showing input/output
  SKILL.md workflow walkthroughs in prose:                   0  ✗ FAIL

  Distribution problem:
    L02 (Plugin Architecture): 26 refs — architecture lesson, expected
    L01: 7 refs
    L03-L05: 5 refs combined (minimal)
    L06-L10: 0 refs — FIVE CORE LESSONS WITH ZERO PLUGIN REFERENCES
    L11-L15: 10 refs combined

  The chapter teaches banking regulation competently but does not
  demonstrate how to USE the banking agent for it.

DIMENSION 6 — JURISDICTION COVERAGE  (benchmark: >= 20% of examples non-UK)
  Pakistan/SBP paragraphs in prose:    ~5  (< 5% of prose)
  GCC/UAE paragraphs in prose:         ~3  (< 3% of prose)
  US CECL comparison present:          Partial (4 mentions, no dedicated section)
  Singapore/MAS content in prose:      0
  Australia/APRA content in prose:     0

  Estimated non-UK example coverage: < 10%  ✗ FAIL (benchmark >= 20%)

  The chapter is almost exclusively UK-focused. The plugin has 7 jurisdiction
  overlays but the lesson content barely references any jurisdiction beyond UK.

DIMENSION 7 — PROSE REGISTER
  Sections written as pure bullet lists where prose is appropriate:  0  ✓ PASS
    — All lessons use narrative prose with tables for structured data
  Sections where technical terms appear without any explanation:     ~8
    — L04: CCF used without box or inline definition
    — L06: MDA trigger referenced without explaining MDA
    — L07: IRB approach referenced with minimal explanation
    — L08: HQLA used before definition
    — L09: PEP used with only brief inline context
    — L10: FATF grey list mentioned without explanation
    — L13: ICAAP/ILAAP used without box
    — L14: Nostro/suspense used with good inline definitions (borderline pass)

═══════════════════════════════════════════════════════════════════
```

---

```
SKILLS LIBRARY AUDIT
═══════════════════════════════════════════════════════════════════

FILE: aml-cdd-edd/SKILL.md                          lines: 146
  [✓] YAML frontmatter complete                      PASS
  [✓] Description: trigger keywords present           PASS
  [✗] Description: negative triggers present          FAIL — no "NOT for" phrases
  [✗] NEVER DO section: >= 3 prohibitions             FAIL — 0 NEVER statements
  [✓] Output format block present                     PASS (6 format refs)
  [✓] Line count >= 120                               PASS (146)
  [✗] "ALL OUTPUTS REQUIRE REVIEW" disclaimer         FAIL

FILE: aml-sar-drafting/SKILL.md                      lines: 127
  [✓] YAML frontmatter complete                      PASS
  [✓] Description: trigger keywords present           PASS
  [✗] Description: negative triggers present          FAIL
  [✗] NEVER DO section: >= 3 prohibitions             FAIL — 0 NEVER
  [✓] Output format block present                     PASS (6 format refs)
  [✓] Line count >= 120                               PASS (127)
  [✗] "ALL OUTPUTS REQUIRE REVIEW" disclaimer         FAIL

FILE: aml-typologies/SKILL.md                        lines: 174
  [✓] YAML frontmatter complete                      PASS
  [✓] Description: trigger keywords present           PASS
  [✗] Description: negative triggers present          FAIL
  [✗] NEVER DO section: >= 3 prohibitions             FAIL — 0 NEVER
  [✗] Output format block present                     FAIL — 0 format refs
  [✓] Line count >= 120                               PASS (174)
  [✗] "ALL OUTPUTS REQUIRE REVIEW" disclaimer         FAIL

FILE: bank-reconciliation/SKILL.md                   lines: 223
  [✓] YAML frontmatter complete                      PASS
  [✓] Description: trigger keywords present           PASS
  [✗] Description: negative triggers present          FAIL
  [✓] NEVER DO section: >= 3 prohibitions             PASS (9 NEVER)
  [✓] Output format block present                     PASS
  [✓] Line count >= 120                               PASS (223)
  [✓] "ALL OUTPUTS REQUIRE REVIEW" disclaimer         PASS (1)

FILE: banking-global-router/SKILL.md                 lines: 72
  [✓] YAML frontmatter complete                      PASS
  [✓] Routing table present                           PASS
  [✓] Universal rules (NEVER)                         PASS (6 NEVER)
  N/A — Router does not need output format or disclaimer

FILE: basel-capital/SKILL.md                         lines: 103
  [✓] YAML frontmatter complete                      PASS
  [✓] Description: trigger keywords present           PASS
  [~] Description: negative triggers present          WEAK (1 match)
  [✓] NEVER DO section: >= 3 prohibitions             PASS (6 NEVER)
  [✗] Output format block present                     FAIL — 0 format refs
  [✗] Line count >= 120                               FAIL (103 < 120)
  [✗] "ALL OUTPUTS REQUIRE REVIEW" disclaimer         FAIL

FILE: basel-rwa-credit/SKILL.md                      lines: 105
  [✓] YAML frontmatter complete                      PASS
  [✓] Description: trigger keywords present           PASS
  [✗] Description: negative triggers present          FAIL
  [✗] NEVER DO section: >= 3 prohibitions             FAIL — 0 NEVER
  [✗] Output format block present                     FAIL — 0 format refs
  [✗] Line count >= 120                               FAIL (105 < 120)
  [✗] "ALL OUTPUTS REQUIRE REVIEW" disclaimer         FAIL

FILE: basel-rwa-market/SKILL.md                      lines: 268
  [✓] YAML frontmatter complete                      PASS
  [✓] Description: trigger keywords present           PASS
  [~] Description: negative triggers present          WEAK (1 match)
  [✓] NEVER DO section: >= 3 prohibitions             PASS (8 NEVER)
  [✗] Output format block present                     FAIL
  [✓] Line count >= 120                               PASS (268)
  [✗] "ALL OUTPUTS REQUIRE REVIEW" disclaimer         FAIL

FILE: ifrs9-disclosure/SKILL.md                      lines: 96
  [✓] YAML frontmatter complete                      PASS
  [✓] Description: trigger keywords present           PASS
  [✗] Description: negative triggers present          FAIL
  [✗] NEVER DO section: >= 3 prohibitions             FAIL — 0 NEVER
  [✓] Output format block present                     PASS
  [✗] Line count >= 120                               FAIL (96 < 120)
  [✗] "ALL OUTPUTS REQUIRE REVIEW" disclaimer         FAIL

FILE: ifrs9-ecl/SKILL.md                            lines: 101
  [✓] YAML frontmatter complete                      PASS
  [✓] Description: trigger keywords present           PASS
  [✗] Description: negative triggers present          FAIL
  [✓] NEVER DO section: >= 3 prohibitions             PASS (7 NEVER)
  [✓] Output format block present                     PASS
  [✗] Line count >= 120                               FAIL (101 < 120)
  [✗] "ALL OUTPUTS REQUIRE REVIEW" disclaimer         FAIL

FILE: ifrs9-scenarios/SKILL.md                       lines: 85
  [✓] YAML frontmatter complete                      PASS
  [✓] Description: trigger keywords present           PASS
  [✗] Description: negative triggers present          FAIL
  [✗] NEVER DO section: >= 3 prohibitions             FAIL — 0 NEVER
  [✓] Output format block present                     PASS (4 refs)
  [✗] Line count >= 120                               FAIL (85 < 120)
  [✗] "ALL OUTPUTS REQUIRE REVIEW" disclaimer         FAIL

FILE: ifrs9-staging/SKILL.md                         lines: 75
  [✓] YAML frontmatter complete                      PASS
  [✓] Description: trigger keywords present           PASS
  [✗] Description: negative triggers present          FAIL
  [✗] NEVER DO section: >= 3 prohibitions             FAIL — 0 NEVER
  [✓] Output format block present                     PASS (2 refs)
  [✗] Line count >= 120                               FAIL (75 < 120)
  [✗] "ALL OUTPUTS REQUIRE REVIEW" disclaimer         FAIL

FILE: kyc-risk-rating/SKILL.md                       lines: 104
  [✓] YAML frontmatter complete                      PASS
  [✓] Description: trigger keywords present           PASS
  [✗] Description: negative triggers present          FAIL
  [✗] NEVER DO section: >= 3 prohibitions             FAIL — 0 NEVER
  [✓] Output format block present                     PASS
  [✗] Line count >= 120                               FAIL (104 < 120)
  [✗] "ALL OUTPUTS REQUIRE REVIEW" disclaimer         FAIL

FILE: liquidity-lcr/SKILL.md                         lines: 105
  [✓] YAML frontmatter complete                      PASS
  [✓] Description: trigger keywords present           PASS
  [✓] Description: negative triggers present          PASS (2 matches)
  [✓] NEVER DO section: >= 3 prohibitions             PASS (6 NEVER)
  [✗] Output format block present                     FAIL
  [✗] Line count >= 120                               FAIL (105 < 120)
  [✗] "ALL OUTPUTS REQUIRE REVIEW" disclaimer         FAIL

FILE: liquidity-nsfr/SKILL.md                        lines: 81
  [✓] YAML frontmatter complete                      PASS
  [✓] Description: trigger keywords present           PASS
  [✗] Description: negative triggers present          FAIL
  [✗] NEVER DO section: >= 3 prohibitions             FAIL — 0 NEVER
  [✗] Output format block present                     FAIL
  [✗] Line count >= 120                               FAIL (81 < 120)
  [✗] "ALL OUTPUTS REQUIRE REVIEW" disclaimer         FAIL

FILE: sanctions-screening/SKILL.md                   lines: 120
  [✓] YAML frontmatter complete                      PASS
  [✓] Description: trigger keywords present           PASS
  [✗] Description: negative triggers present          FAIL
  [✓] NEVER DO section: >= 3 prohibitions             PASS (6 NEVER)
  [✓] Output format block present                     PASS (3 refs)
  [✓] Line count >= 120                               PASS (120)
  [✗] "ALL OUTPUTS REQUIRE REVIEW" disclaimer         FAIL

FILE: stress-testing/SKILL.md                        lines: 95
  [✓] YAML frontmatter complete                      PASS
  [✓] Description: trigger keywords present           PASS
  [✗] Description: negative triggers present          FAIL
  [✗] NEVER DO section: >= 3 prohibitions             FAIL — 0 NEVER
  [✗] Output format block present                     FAIL
  [✗] Line count >= 120                               FAIL (95 < 120)
  [✗] "ALL OUTPUTS REQUIRE REVIEW" disclaimer         FAIL

THIN FILES (< 120 lines):
  banking-global-router: 72  (router — acceptable)
  ifrs9-staging:         75  — missing: NEVER DO, negative triggers, disclaimer
  liquidity-nsfr:        81  — missing: NEVER DO, output format, negative triggers
  ifrs9-scenarios:       85  — missing: NEVER DO, negative triggers, disclaimer
  stress-testing:        95  — missing: NEVER DO, output format, negative triggers
  ifrs9-disclosure:      96  — missing: NEVER DO, negative triggers, disclaimer
  ifrs9-ecl:            101  — missing: negative triggers, disclaimer
  basel-capital:        103  — missing: output format, disclaimer
  kyc-risk-rating:      104  — missing: NEVER DO, negative triggers, disclaimer
  liquidity-lcr:        105  — missing: output format, disclaimer
  basel-rwa-credit:     105  — missing: NEVER DO, output format, negative triggers

  11 of 17 files below 120-line benchmark (65%)

MISSING FILES:
  [✗] No GCC/Saudi/Bahrain/Kuwait/Qatar jurisdiction overlay
  [✗] No Islamic banking interaction overlay (riba → IFRS 9 + AAOIFI)
  [✗] No CECL overlay for US bank readers
  [✗] No dedicated agent SKILL.md files (unlike Ch23 which has 5)

  Existing jurisdictions: uk-pra, eu-crr, us-federal, australia-apra,
  singapore-mas, uae-cbuae, pakistan-sbp (7 total)

SUMMARY STATISTICS:
  YAML frontmatter:     17/17 PASS (100%)
  Trigger keywords:     17/17 PASS (100%)
  Negative triggers:     2/16 PASS (12.5%)  ← CRITICAL GAP
  NEVER DO section:      7/16 PASS (43.8%)  ← CRITICAL GAP
  Output format:        10/16 PASS (62.5%)
  Line count >= 120:     6/16 PASS (37.5%)  ← CRITICAL GAP
  Professional disclaimer: 1/16 PASS (6.3%) ← CRITICAL GAP

═══════════════════════════════════════════════════════════════════
```

---

## Gap Summary — Inputs to Sprint Plan

### CRITICAL (must fix before commit)

| #   | Gap                                                  | Location      | Fix                                            |
| --- | ---------------------------------------------------- | ------------- | ---------------------------------------------- |
| C1  | 5 core lessons (L06-L10) have ZERO plugin references | Lesson files  | Add "Using the Banking Plugin" section to each |
| C2  | 0 worked examples with user→agent dialogue           | Lesson files  | Add >= 1 per major section (8 needed)          |
| C3  | 9/16 product skills missing NEVER DO section         | Plugin skills | Add >= 3 prohibitions per file                 |
| C4  | 14/16 product skills missing negative triggers       | Plugin skills | Add "NOT for:" phrase to every description     |
| C5  | 15/16 product skills missing professional disclaimer | Plugin skills | Add "ALL OUTPUTS REQUIRE REVIEW" to all        |
| C6  | 11/16 product skills below 120-line benchmark        | Plugin skills | Expand with depth content                      |

### MODERATE (should fix)

| #   | Gap                                                    | Location         | Fix                                   |
| --- | ------------------------------------------------------ | ---------------- | ------------------------------------- |
| M1  | ~24 missing concept boxes for banking terms            | Lesson files     | Add :::info boxes before first use    |
| M2  | 14/14 exercises missing "What you need" setup section  | Plugin exercises | Add setup section to each             |
| M3  | 10/14 exercises missing named deliverable              | Plugin exercises | Add explicit output artifact          |
| M4  | Jurisdiction coverage < 10% non-UK in prose            | Lesson files     | Add Pakistan/GCC variant examples     |
| M5  | No GCC jurisdiction overlay                            | Plugin skills    | Create gcc-gcc.md                     |
| M6  | No CECL overlay                                        | Plugin skills    | Create us-cecl.md                     |
| M7  | No Islamic banking interaction overlay                 | Plugin skills    | Create islamic-banking-interaction.md |
| M8  | US CECL comparison is 4 mentions, no dedicated section | Lesson files     | Expand L01 or L03                     |

### MINOR (nice to have)

| #   | Gap                                                         | Location   | Fix                             |
| --- | ----------------------------------------------------------- | ---------- | ------------------------------- |
| N1  | SKILL.md library map (how 15 files relate) missing from L02 | L02        | Add routing explanation section |
| N2  | Model risk governance thin (9 mentions, no section)         | L15 or new | Expand in capstone              |
| N3  | DFAST not mentioned                                         | L13 or L08 | Add US stress testing reference |
