### Core Concept

The banking plugin contains 17 skills — 1 router and 16 product skills organised by pillar (IFRS 9, Basel, AML, Reconciliation) — with a pillar-aware router that detects whether a query involves one or multiple pillars and chains the appropriate skills in dependency order, so the output of one skill feeds the input of the next.

### Key Mental Models

- **Pillar-Aware Routing vs Jurisdiction-Aware Routing**: The banking router routes by regulatory pillar (IFRS 9 vs Basel vs AML), while the Islamic finance router from Chapter 31 routes by jurisdiction (Bahrain vs Malaysia vs UK) — both are instances of the same architectural pattern (context detection, specialised skill loading, output chaining) applied to different routing dimensions.
- **Skill Chaining for Cross-Pillar Queries**: When the router detects signals from multiple pillars, it loads skills in dependency order — for example, an IFRS 9 provision increase affecting Basel capital loads `ifrs9-ecl` first, then `basel-capital` — so that each skill's output becomes the next skill's input, enabling integrated analysis that single-pillar agents cannot produce.

### Critical Patterns

- The router detects pillar signals from query keywords: ECL/provision/staging maps to IFRS 9, CET1/RWA/LCR maps to Basel, SAR/KYC/sanctions maps to AML, and nostro/suspense maps to Reconciliation
- Four domain commands (`/bank-ecl`, `/bank-capital`, `/bank-recon`, `/bank-aml`) provide direct entry points that bypass router parsing and guarantee the correct skill chain loads
- Two hooks run on every query: SessionStart confirms pillar context (never defaulting if ambiguous) and PostToolUse validates regulatory terminology in the output

### Common Mistakes

- Assuming the router runs all skills in parallel — it sequences them because each skill's output is an input to the next in cross-pillar queries
- Confusing the banking plugin's pillar routing with Chapter 31's jurisdiction routing — while architecturally similar, they route on fundamentally different dimensions

### Connections

- **Builds on**: Lesson 1's three-pillar framework that establishes why banking requires multi-domain agent capabilities
- **Leads to**: Lessons 3-5, which build the IFRS 9 pillar skills (staging, ECL formula, PD/LGD/EAD, macroeconomic scenarios) that the router loads when it detects accounting pillar queries
