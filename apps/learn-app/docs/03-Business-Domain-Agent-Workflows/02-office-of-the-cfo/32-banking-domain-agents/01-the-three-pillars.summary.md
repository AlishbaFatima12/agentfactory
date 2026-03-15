### Core Concept

Every banking institution is simultaneously governed by three regulatory pillars — Accounting (IFRS 9 expected credit loss), Solvency (Basel III/IV capital adequacy), and Financial Crime (AML/KYC) — and a single loan portfolio requires treatment under all three simultaneously, so an AI agent addressing only one pillar gives one-third of the answer.

### Key Mental Models

- **Three Pillars, Three Questions**: IFRS 9 asks "How much should the bank provision for expected losses?", Basel asks "Does the bank hold enough capital to survive unexpected losses?", and AML asks "Is the bank being used for financial crime?" — each produces a different number, a different report, and a different regulatory filing for the same underlying asset.
- **Cross-Pillar Cascade**: A single event (such as a fraud discovery) cascades across all three pillars — AML triggers a SAR filing, IFRS 9 migrates the loan from Stage 1 to Stage 3 (multiplying the provision by 5-10x), and Basel absorbs the capital impact of the increased provision — so pillar-isolated analysis misses the chain reaction.

### Critical Patterns

- Banking is the most regulation-dense industry: a single loan portfolio is simultaneously subject to IFRS 9 provisioning, Basel capital charges, AML monitoring, liquidity regulations, leverage ratios, and stress testing
- The banking AI hierarchy has three levels: Level 1 (deterministic calculation, e.g., ECL = PD x LGD x EAD), Level 2 (judgment-assisted analysis, e.g., SICR assessment), and Level 3 (cross-pillar orchestration across multiple skills)
- IFRS 9 governs 140+ countries but notably not the USA, which uses CECL under ASC 326 — the banking plugin's IFRS 9 skills apply outside the US

### Common Mistakes

- Treating the three pillars as independent problems — changes in one pillar cascade into the others, and a single-pillar agent that misses the cascade produces incomplete advice
- Assuming IFRS 9 and US CECL are interchangeable — while both are forward-looking ECL models, their mechanics differ, and a US-specific module requires separate skills

### Connections

- **Builds on**: Chapter 20's jurisdiction-aware domain agents for Islamic finance, which introduced the concept of domain-specialised AI agents with routing architectures
- **Leads to**: Lesson 2's banking plugin architecture, which translates the three-pillar framework into a 17-skill agent with pillar-aware routing
