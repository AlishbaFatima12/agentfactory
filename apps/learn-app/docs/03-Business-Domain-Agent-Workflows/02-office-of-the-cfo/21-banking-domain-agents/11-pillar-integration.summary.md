### Core Concept

A single event cascades across all three regulatory pillars simultaneously — an AML fraud discovery triggers a SAR filing, forces IFRS 9 stage migration from Stage 1 to Stage 3 (multiplying the provision from $0.1M to $42.5M on a $50M exposure), and reduces CET1 capital by the post-tax provision amount — and pillar-isolated agents miss these chain reactions because each skill's output is an input to the next.

### Key Mental Models

- **The Cross-Pillar Cascade Formula**: A provision increase hits CET1 through retained earnings as CET1 Impact = Provision Increase x (1 - Tax Rate) / RWA — so a GBP 42.4M provision at 25% tax reduces CET1 by GBP 31.8M, and if Stage 3 migration also increases the risk weight (to 150%), RWA rises simultaneously, compounding the capital ratio decline.
- **IRB Shortfall/Excess Mechanism**: IRB banks must compare IFRS 9 ECL to Basel regulatory Expected Loss — when ECL exceeds regulatory EL, the excess can be added to Tier 2 (capped at 0.6% of credit RWA); when ECL falls short, the shortfall must be deducted from capital (50% CET1, 50% Tier 2). This mechanism is how IFRS 9 and Basel interact at the most granular level.

### Critical Patterns

- IFRS 9 transitional arrangements phase in the Day 1 capital impact over 5 years (95%, 85%, 70%, 50%, 25% add-back), cushioning the cliff-edge effect but diminishing annually
- The banking plugin's router chains skills in dependency order for cross-pillar queries: `aml-sar-drafting` -> `ifrs9-staging` -> `ifrs9-ecl` -> `basel-capital` -> `bank-reconciliation`, with each output feeding the next input
- Three separate pillar-isolated agents report stale or incomplete data: the IFRS 9 agent calculates correct ECL but misses capital impact, the Basel agent reports stale ratios without the provision update, and the AML agent misses the correlation between credit deterioration and financial crime risk

### Common Mistakes

- Treating the CET1 impact of a provision as simply provision divided by RWA — the tax adjustment (provision x (1 - tax rate)) must be applied because the provision is a deductible expense, and RWA may change simultaneously
- Operating three separate agents for IFRS 9, Basel, and AML without data sharing — this is the default state of most banks today and produces incomplete regulatory advice at every level

### Connections

- **Builds on**: All three pillar tracks (Lessons 3-10), synthesising IFRS 9, Basel, and AML into a unified cross-pillar analysis
- **Leads to**: Lesson 12's IFRS 9 deep practice exercises, which apply staging and ECL calculation at portfolio scale across multiple facilities and macroeconomic scenarios
