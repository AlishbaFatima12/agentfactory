# Handoff Note: Team 1B -- Concept Boxes + Jurisdiction Coverage

**Agent**: Team 1B
**Date**: 2026-03-06
**Status**: Complete

---

## Concept Boxes Added This Session (18 new)

| #   | Lesson | Term                                       | Line |
| --- | ------ | ------------------------------------------ | ---- |
| 1   | L01    | ECL (Expected Credit Loss)                 | 102  |
| 2   | L01    | CECL (Current Expected Credit Losses)      | 181  |
| 3   | L03    | SICR (Significant Increase in Credit Risk) | 106  |
| 4   | L04    | PD (Probability of Default)                | 81   |
| 5   | L04    | LGD (Loss Given Default)                   | 89   |
| 6   | L04    | EAD (Exposure at Default)                  | 97   |
| 7   | L04    | TTC PD vs PIT PD                           | 109  |
| 8   | L04    | CCF (Credit Conversion Factor)             | 225  |
| 9   | L06    | RWA (Risk-Weighted Assets)                 | 83   |
| 10  | L06    | MDA (Maximum Distributable Amount)         | 149  |
| 11  | L07    | IRB vs SA                                  | 83   |
| 12  | L07    | Output Floor (Basel IV)                    | 91   |
| 13  | L08    | HQLA (High-Quality Liquid Assets)          | 102  |
| 14  | L08    | ICAAP / ILAAP                              | 294  |
| 15  | L09    | SAR / STR                                  | 84   |
| 16  | L09    | PEP (Politically Exposed Person)           | 92   |
| 17  | L09    | CDD / EDD                                  | 100  |
| 18  | L09    | FATF and Grey List                         | 108  |

### Added by Prior Run (4 boxes)

| #   | Lesson | Term                                  | Status  |
| --- | ------ | ------------------------------------- | ------- |
| 19  | L13    | ACS (Annual Cyclical Scenario)        | Line 77 |
| 20  | L13    | DFAST (Dodd-Frank Act Stress Testing) | Line 85 |
| 21  | L14    | Nostro Account                        | Line 80 |
| 22  | L14    | Suspense Account                      | Line 88 |

### Pre-existing (not part of this task)

L14 Nostro and Suspense boxes were already present before this session. L13 ACS and DFAST were added by a prior partial run. Duplicates from this session's L13 edits were detected and removed.

### L10 SAR Reference

L10 already contains 38+ references to SAR throughout the lesson. No additional box needed -- SAR is defined in L09 and used extensively in L10.

---

## Jurisdiction Variants Added (4)

| #   | Lesson | Jurisdiction       | Section Title                                        | Key Citations                                                                      |
| --- | ------ | ------------------ | ---------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 1   | L03    | Pakistan (SBP)     | "Jurisdiction Variant: Pakistan (SBP)"               | BPRD Circular No. 04 of 2019; mandatory 0.5% PD floor; PR-R8 provision floor       |
| 2   | L06    | GCC (SAMA/CBUAE)   | "Jurisdiction Variant: GCC (SAMA and CBUAE)"         | SAMA Circular 391000007497 (2023); CBUAE Regulation No. 52/2020; 7.0% CET1 minimum |
| 3   | L08    | US (CECL/DFAST)    | "Jurisdiction Variant: US (CECL and DFAST)"          | ASC 326 CECL; Dodd-Frank Act; DFAST 9-quarter horizon; CCAR qualitative review     |
| 4   | L09    | Pakistan (SBP AML) | "Jurisdiction Variant: Pakistan (SBP AML Framework)" | AMLA 2010; FATF grey list 2018-2022; BPRD Circular Letter No. 13 of 2018; FMU      |

---

## Quality Verification

Every concept box follows the spec format:

- Line 1: `:::info [Term Name]`
- Line 2: **Plain-English definition** (bolded, one sentence)
- Line 3: Blank
- Line 4: Numerical example with real numbers
- Line 5: Blank
- Line 6: One sentence on why it matters
- Line 7: `:::`

Every jurisdiction paragraph:

- 80-150 words
- Specific regulatory body and circular/regulation citation
- Explains how the concept differs from the UK baseline

---

## Files Modified (8 files)

All paths relative to `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/21-banking-domain-agents/`:

| File                             | Boxes Added                       | Jurisdiction Added |
| -------------------------------- | --------------------------------- | ------------------ |
| `01-the-three-pillars.md`        | 2 (ECL, CECL)                     | --                 |
| `03-ifrs9-staging-ecl.md`        | 1 (SICR)                          | Pakistan/SBP       |
| `04-ifrs9-pd-lgd-ead.md`         | 5 (PD, LGD, EAD, TTC vs PIT, CCF) | --                 |
| `06-basel-capital-ratios.md`     | 2 (RWA, MDA)                      | GCC (SAMA/CBUAE)   |
| `07-basel-rwa-risk-weights.md`   | 2 (IRB vs SA, Output Floor)       | --                 |
| `08-basel-leverage-liquidity.md` | 2 (HQLA, ICAAP/ILAAP)             | US (CECL/DFAST)    |
| `09-aml-three-lines.md`          | 4 (SAR/STR, PEP, CDD/EDD, FATF)   | Pakistan AML       |
| `13-exercises-basel-aml.md`      | Duplicate removal only            | --                 |

## What Was NOT Modified

- No existing prose was changed -- all changes are insertions
- No import statements were added
- No YAML frontmatter was modified
- L02, L05, L10, L11, L12, L14, L15 were not modified
- L13 had duplicate boxes from this session removed (prior run's boxes retained)
