### Core Concept

The complete banking agent deploys a 17-skill library (1 router + 16 product skills) with 6 scheduled operational tasks (daily staging monitor, quarterly ECL, daily capital ratio, daily LCR, daily AML prioritisation, daily sanctions screening) and validates through 11 cross-domain queries: culminating in a comprehensive capstone scenario that produces a 10-slide Board Risk Report integrating ECL movement, capital dashboard, liquidity position, AML metrics, and an integrated stress test combining adverse macro with an AML fine.

### Key Mental Models

- **Method A Skill Building (Expert Interview)**: Skills are structured by defining persona, key decisions, input/output specification, and validation criteria: the builder is both the domain expert (from 14 lessons of banking regulation) and the architect, transforming professional knowledge into reusable SKILL.md files that automate routine calculations while flagging edge cases for human review.
- **Five Principles of Banking Domain AI**: (1) Model governance (SR 11-7, SS1/23) applies to AI models: an AI agent calculating ECL is a model requiring validation and back-testing. (2) SICR assessment is irreducibly human. (3) AML is a legal obligation with criminal consequences: agents must never file SARs or communicate suspicion. (4) The Basel IV output floor compresses IRB capital advantages. (5) Pillar interaction is where insight lives: the cascade from provision through capital through funding costs through NII is one integrated answer, not three separate ones.

### Critical Patterns

- The capstone scenario traces a GBP 4.2B bank through all five phases: ECL movement analysis (GBP 14M increase driven by CRE concentration), capital dashboard (CET1 declining from 11.2% to 10.8%), liquidity assessment (NSFR headroom thin at 8pp), AML dashboard (alert volume up 12%, 2 MRAs outstanding), and integrated stress test (adverse scenario + GBP 50M AML fine producing combined CET1 impact of GBP 79.5M)
- The Board Risk Report assembles cross-pillar analysis into 10 slides: executive summary, ECL movement, stage migration, capital adequacy, liquidity, AML/financial crime, integrated stress test, concentration risk, recommendations, and appendix
- Eight scheduled tasks span three frequencies: daily (staging monitor, capital ratios, LCR, AML alerts, sanctions screening, GL-to-risk recon), intraday (nostro reconciliation every 2 hours), quarterly (full portfolio ECL with scenario weighting), establishing an operational rhythm

### Common Mistakes

- Treating the capstone as a mechanical exercise of running all skills in sequence: the Board Risk Report requires narrative integration, connecting the ECL increase to the CET1 decline to the NSFR vulnerability to the AML alert trend in a coherent story for non-technical board members
- Stress-testing ECL and AML separately: the integrated stress test shows that simultaneous shocks (adverse macro plus AML fine) compound in ways that separate analyses miss, with the combined CET1 impact exceeding the sum of individual impacts due to retained earnings erosion

### Connections

- **Builds on**: Every prior lesson in the chapter: IFRS 9 (L03-L05), Basel (L06-L08), AML (L09-L10), cross-pillar integration (L11), exercises (L12-L13), and reconciliation (L14) all feed into the deployed skill library and capstone
- **Leads to**: Cross-domain transfer: the pillar-aware routing architecture and cross-pillar cascade analysis apply to any domain where multiple regulatory frameworks govern the same underlying assets (insurance under IFRS 17 + Solvency II, securities under IFRS 9 + market risk + conduct regulation), making this a reusable architectural pattern beyond banking
