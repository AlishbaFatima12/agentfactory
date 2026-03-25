### Core Concept

IFRS 9 classifies every financial asset into three stages based on credit deterioration since origination (Stage 1 (performing, 12-month ECL), Stage 2 (significant increase in credit risk, lifetime ECL), Stage 3 (credit-impaired, lifetime ECL on net carrying amount)) and the ECL is calculated as PD x LGD x EAD, where the measurement window (12-month vs lifetime) is the single most consequential classification decision.

### Key Mental Models

- **The Staging Cliff Effect**: When an asset migrates from Stage 1 to Stage 2, the provision typically increases by 5-10x because the measurement window expands from 12 months to the full remaining term: a single rating downgrade can multiply a portfolio's provision by an order of magnitude, making stage classification the highest-impact decision in IFRS 9.
- **SICR as a Judgment-Intensive Trigger**: The Significant Increase in Credit Risk assessment uses both quantitative triggers (2+ notch downgrade, PD doubling, 30+ DPD rebuttable presumption) and qualitative triggers (watchlist placement, covenant breach, industry stress, forbearance). IFRS 9 does not prescribe a single threshold, requiring professional judgment.

### Critical Patterns

- Stage 3 changes interest revenue recognition from gross carrying amount to net carrying amount (after ECL deduction), reducing recognised income for credit-impaired assets
- The 30-day past due trigger for Stage 2 is a rebuttable presumption: the bank can override it with evidence, but the default position is that 30+ DPD triggers Stage 2
- Stage migration is bidirectional: loans can cure back from Stage 3 to Stage 2 (or even Stage 1) when credit quality improves, with corresponding provision releases
- Pakistan (SBP) applies a mandatory floor of 0.5% for 12-month PD on any performing Stage 1 exposure, regardless of internal model output

### Common Mistakes

- Treating staging as purely mechanical: facilities with no DPD and no rating change can still be Stage 2 if qualitative indicators (job loss, property decline, forbearance) signal significant deterioration
- Confusing 12-month ECL with lifetime ECL divided by the remaining term: they are fundamentally different concepts, not arithmetic equivalents

### Connections

- **Builds on**: Lesson 2's plugin architecture, where `ifrs9-staging` and `ifrs9-ecl` were identified as the skills handling IFRS 9 calculations
- **Leads to**: Lesson 4, which builds each ECL component (PD, LGD, EAD) from first principles, transforming from formula user to component builder
