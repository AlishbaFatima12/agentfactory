### Core Concept

Two extended IFRS 9 exercises apply staging and ECL calculation at portfolio scale — a UK retail mortgage stage assessment across 8 facilities requiring both quantitative and qualitative SICR judgment, and a GCC corporate ECL model with drawn/undrawn exposures, three macroeconomic scenarios, and regional PD adjustments — demonstrating that staging decisions involve professional judgment, not just mechanical rule application.

### Key Mental Models

- **Staging as Judgment, Not Calculation**: Facilities like A004 (no DPD, no rating change, but job loss) and A006 (no DPD, no rating change, but 15% property decline) require qualitative SICR assessment — the AI can compute PDs and flag indicators, but the decision of whether a significant increase in credit risk has occurred is irreducibly human.
- **GCC Macro Adjustment as Regional PD Multiplier**: GCC credit risk is sensitive to oil prices and GDP growth, so TTC PDs are converted to PIT PDs using scenario-specific multipliers (0.85 upside, 1.15 base, 1.65 adverse) — the same non-linearity principle from Lesson 5 applies, with the adverse scenario pulling the probability-weighted ECL above the base case.

### Critical Patterns

- LGD selection depends on LTV: 25% for LTV up to 80%, 40% for LTV above 80% — a property value decline that pushes LTV above 80% changes both the staging assessment and the LGD parameter
- The GCC model uses a 75% CCF for all undrawn commitments, producing EADs substantially above drawn balances for borrowers with significant undrawn facilities
- Portfolio-level ECL aggregation requires summing facility-level ECLs across different stages, each using its own measurement basis (12-month vs lifetime)
- IFRS 7 disclosure requires a stage movement matrix showing gross carrying amounts and provisions transitioning between stages

### Common Mistakes

- Treating all Stage 2 facilities identically — the SICR triggers differ (DPD, rating downgrade, qualitative indicators), and the quality of the trigger affects the PD assumptions used for lifetime ECL
- Omitting sensitivity analysis after the base calculation — regulators and auditors expect banks to demonstrate how material the staging and weighting decisions are to the total ECL

### Connections

- **Builds on**: Lessons 3-5's staging, ECL formula, PD/LGD/EAD components, and macroeconomic scenarios, applying them at portfolio scale with real judgment calls
- **Leads to**: Lesson 13's Basel and AML exercises, which extend deep practice to the solvency and financial crime pillars
