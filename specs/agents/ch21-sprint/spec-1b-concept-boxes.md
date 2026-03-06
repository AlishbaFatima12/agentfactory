# Agent Spec: Team 1B — Concept Boxes + Jurisdiction Coverage

## Mission

Add ~24 missing concept boxes for banking terms used before definition, and add Pakistan/GCC variant examples to at least 4 lessons that are currently UK-only.

## Quality Standard

Each concept box format:

```
:::info [Term Name]
**[Plain-English definition — one sentence, no jargon]**

[Formula or numerical example with real numbers, not variables]

[One sentence on why it matters in a banking professional's daily work]
:::
```

Each Pakistan/GCC variant: 1-2 paragraphs showing how the same concept applies under SBP (Pakistan) or CBUAE/SAMA (GCC) regulation, with specific regulatory reference.

## Input Files

- `specs/agents/ch21-sprint/02-audit-report.md`: DIMENSION 2 gap list (24 missing boxes)
- All lesson files in `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/21-banking-domain-agents/`

## Output

- Modified lesson files in-place
- Each concept box inserted BEFORE the first use of the term in the lesson

## Work Order

### Concept Boxes to Add (insert before first use)

**L01 (the-three-pillars.md)**:

- CECL box (after the IFRS 9 vs CECL info block, expand it)

**L03 (ifrs9-staging-ecl.md)**:

- SICR box (before line 107 where SICR section starts)

**L04 (ifrs9-pd-lgd-ead.md)**:

- PD (Probability of Default) box
- LGD (Loss Given Default) box
- EAD (Exposure at Default) box
- CCF (Credit Conversion Factor) box
- TTC PD vs PIT PD box

**L06 (basel-capital-ratios.md)**:

- MDA (Maximum Distributable Amount) box
- RWA (Risk-Weighted Assets) box

**L07 (basel-rwa-risk-weights.md)**:

- IRB vs SA box
- Output Floor (Basel IV) box

**L08 (basel-leverage-liquidity.md)**:

- HQLA box
- ICAAP / ILAAP box

**L09 (aml-three-lines.md)**:

- SAR / STR box
- PEP box
- CDD / EDD box
- FATF and grey list box

**L10 (aml-tm-ml-sar.md)**:

- (SAR already defined in L09 — just ensure reference)

**L13 (exercises-basel-aml.md)**:

- ACS (Bank of England Annual Cyclical Scenario) box
- DFAST (US stress testing) box

**L14 (reconciliation-nostro-suspense.md)**:

- Nostro account box
- Suspense account box

### Jurisdiction Variants to Add

**L03 or L04**: Add Pakistan/SBP paragraph — SBP's adoption of IFRS 9 (effective 2021 for banks), any local modifications to staging thresholds

**L06 or L07**: Add GCC paragraph — SAMA (Saudi) and CBUAE capital requirements, any differences from Basel III minimums

**L09**: Add Pakistan paragraph — SBP's AML regulations (Anti-Money Laundering Act 2010), Pakistan's FATF grey list history (2018-2022), current mutual evaluation status

**L08**: Add US comparison paragraph — expand CECL vs IFRS 9, add DFAST reference

## Hard Constraints

- Each concept box must contain a numerical example (not just definitions)
- Do NOT modify existing prose — only INSERT new :::info blocks and jurisdiction paragraphs
- Do NOT add import statements
- Place each box BEFORE the first use of the term, not after
- Keep each box to 3-5 lines inside the :::info block
- Jurisdiction paragraphs: 80-150 words each, with specific regulatory citations

## Handoff Note

Write to: `specs/agents/ch21-sprint/handoff-1b-concept-boxes.md`
