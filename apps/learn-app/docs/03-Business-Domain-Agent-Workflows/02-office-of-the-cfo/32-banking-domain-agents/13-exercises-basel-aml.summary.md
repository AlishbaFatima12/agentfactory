### Core Concept

Four extended exercises build fluency in Basel capital calculation and AML investigation: a complete SA capital ratio from raw balance sheet data including operational risk RWA, an ICAAP stress test translating Bank of England severe scenario parameters into stressed ECL and capital trajectories, AML alert investigation across three typologies (structuring, trade-based ML, PEP-related), and multi-regime sanctions screening (UK, EU, OFAC) requiring true-match vs false-positive determination.

### Key Mental Models

- **ICAAP as Bank-Specific Stress Survival**: The bank's own internal assessment of capital needs under severe stress goes beyond regulatory minimums: if a stress test shows the bank needs 11.5% CET1 to survive while the Basel minimum is 8.0%, the regulator may set the individual requirement at 11.5%. The stress scenario translates macroeconomic variables (GDP, unemployment, property prices) into credit risk parameters (stage migration, stressed LGDs, PD increases).
- **Sanctions Screening as Multi-Regime, Non-Binary Analysis**: Every payment must be screened simultaneously against UK, EU, and OFAC sanctions lists. A name match is not a true match: "Rostec Engineering Components Ltd" (UK) may share a name with the sanctioned Russian conglomerate but be a different entity. The OFAC 50% rule (entities 50% or more owned by a sanctioned party are themselves sanctioned) adds a beneficial ownership dimension to screening.

### Critical Patterns

- The Business Indicator Approach for operational risk uses a 12% coefficient for BI up to GBP 1B and 15% for BI between GBP 1B and GBP 30B, with operational risk RWA = operational risk capital / 8%
- ICAAP stress testing requires a 3-year trajectory showing CET1 at each year-end, with NII impacts (rate rises benefit NII in year 1, rate cuts compress it in year 2) offsetting some of the ECL charge
- AML alert investigation requires identifying the typology (structuring, layering, PEP), gathering supporting data, and making a SAR recommendation: with the critical constraint that the customer must not be contacted before the filing decision
- DFAST (US equivalent) results are publicly disclosed, creating market discipline absent from the UK's confidential ICAAP process

### Common Mistakes

- Using the same escalation approach for all sanctions hits: a common-name false positive in the Gulf region requires different verification than a name match with a sanctioned Russian state enterprise
- Designing stress tests that apply macro shocks but forget to translate them into stage migration, LGD stress, and NII impacts simultaneously: each channel contributes independently to the CET1 trajectory

### Connections

- **Builds on**: Lessons 6-10's Basel and AML pillar knowledge, applying it at operational scale with professional judgment calls on stress severity, alert disposition, and sanctions match determination
- **Leads to**: Lesson 14's bank reconciliation, which ensures the data integrity underlying all three pillars' calculations
