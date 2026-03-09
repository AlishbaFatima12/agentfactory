---
slug: /Business-Domain-Agent-Workflows/banking-domain-agents
sidebar_position: 21
title: "Chapter 21: Banking-Specific AI"
description: "Build regulatory-aware AI agents for banking practitioners — covering IFRS 9 expected credit loss, Basel III/IV capital adequacy, AML/KYC financial crime, and bank reconciliation — using a 17-skill plugin architecture that routes queries to the correct regulatory framework and produces audit-ready outputs"
chapter_number: 21
part_number: 3
version: 1.0
status: draft
---

# Chapter 21: Banking-Specific AI

> _"A bank's balance sheet is not an accounting artefact. It is a regulatory instrument — shaped simultaneously by IFRS 9 provisioning, Basel III capital floors, and AML surveillance obligations. The banking practitioner who can operate across all three pillars commands a career advantage that no single-domain specialist can match. The AI agent that can do the same becomes a Digital FTE worth deploying."_

Chapter 20 built jurisdiction-aware agents for Islamic finance — routing the same transaction through different accounting frameworks by country. This chapter confronts a different kind of complexity: **pillar complexity**. In banking, a single loan portfolio is governed simultaneously by three regulatory pillars — solvency (Basel III/IV), accounting (IFRS 9), and financial crime (AML/KYC) — each with its own models, thresholds, reporting cycles, and regulatory bodies. A credit risk agent that ignores capital adequacy produces incomplete output. An AML agent that ignores IFRS 9 staging misses the provisioning impact of suspicious transactions. This chapter builds the agents that work across all three pillars.

The architectural contribution extends Chapter 20's router-product-overlay pattern into a **pillar-aware routing architecture** where the banking plugin's 17 skills span solvency, accounting, and financial crime — and the router determines which pillar (or combination of pillars) a query requires before loading the correct skill chain.

## What You'll Learn

By the end of this chapter, you will be able to:

- Explain the three regulatory pillars of modern banking (Solvency/Basel, Accounting/IFRS 9, Financial Crime/AML) and why they must be addressed simultaneously rather than in isolation
- Deploy the banking plugin's 17-skill architecture and trace queries through the pillar-aware routing system
- Build IFRS 9 expected credit loss models — staging criteria, PD/LGD/EAD estimation, macroeconomic scenario overlays, and post-model adjustments
- Calculate Basel III/IV capital adequacy ratios — CET1, Tier 1, Total Capital, risk-weighted assets, output floors, leverage ratio, and liquidity ratios (LCR/NSFR)
- Design AML/KYC surveillance systems — the three lines of defence, transaction monitoring rule evolution to ML, SAR filing, and tipping-off prohibitions
- Execute bank reconciliation across nostro, suspense, GL-to-risk-system, and four-way provision reconciliation using AI automation
- Complete 18 exercises (22+ hours of practice) spanning all three pillars and reconciliation

## Lesson Flow

| Lesson                                        | Title                                                          | Duration | What You'll Walk Away With                                                                    |
| --------------------------------------------- | -------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------- |
| [L01](./01-the-three-pillars.md)              | The Three Regulatory Pillars of Modern Banking                 | 20 min   | The three-pillar framework, why they interact, and why single-pillar agents fail              |
| [L02](./02-plugin-architecture.md)            | The Banking Plugin Architecture — 17 Skills, Three Pillars     | 25 min   | Plugin installation, skill routing anatomy, pillar-aware architecture                         |
| [L03](./03-ifrs9-staging-ecl.md)              | IFRS 9 Expected Credit Loss — Staging and the ECL Formula      | 40 min   | Stage 1/2/3 criteria, the ECL = PD x LGD x EAD formula, lifetime vs 12-month ECL              |
| [L04](./04-ifrs9-pd-lgd-ead.md)               | PD, LGD, and EAD — Building the ECL Components                 | 45 min   | Point-in-time PD, downturn LGD, EAD with CCFs, Exercise 1: Retail mortgage ECL                |
| [L05](./05-ifrs9-macro-pma.md)                | Macroeconomic Scenarios and Post-Model Adjustments             | 40 min   | Probability-weighted scenarios, management overlays, Exercise 2: Commercial portfolio overlay |
| [L06](./06-basel-capital-ratios.md)           | Basel III/IV Capital Adequacy — CET1, Tier 1, Total Capital    | 45 min   | Capital stack, deductions, CET1 ratio calculation, Exercise 3: Bank capital ratio             |
| [L07](./07-basel-rwa-risk-weights.md)         | Risk-Weighted Assets — SA and IRB Approaches                   | 50 min   | Standardised risk weights, IRB formula, output floor, Exercise 4: RWA comparison              |
| [L08](./08-basel-leverage-liquidity.md)       | Leverage Ratio, LCR, and NSFR                                  | 35 min   | Leverage ratio, HQLA, LCR calculation, NSFR, Exercise 5: Liquidity stress test                |
| [L09](./09-aml-three-lines.md)                | AML/KYC — The Three Lines of Defence                           | 35 min   | CDD/EDD, three lines model, PEP screening, Exercise 6: Customer onboarding risk               |
| [L10](./10-aml-tm-ml-sar.md)                  | Transaction Monitoring, ML Evolution, and SAR Filing           | 40 min   | Rule-based to ML TM, SAR workflow, tipping-off, Exercise 7: TM alert investigation            |
| [L11](./11-pillar-integration.md)             | Cross-Pillar Integration — When IFRS 9, Basel, and AML Collide | 45 min   | Fraud-triggered stage migration, capital impact of ECL spike (worked examples)                |
| [L12](./12-exercises-ifrs9.md)                | Exercises: IFRS 9 Deep Practice                                | 60 min   | Exercise 8: Full portfolio ECL, Exercise 9: GCC corporate ECL model                           |
| [L13](./13-exercises-basel-aml.md)            | Exercises: Basel and AML Deep Practice                         | 55 min   | Exercise 10-11: Capital ratio + ICAAP stress, Exercise 12-13: AML alert + sanctions screening |
| [L14](./14-reconciliation-nostro-suspense.md) | Bank Reconciliation — Nostro, Suspense, and GL-to-Risk         | 45 min   | Exercise 14: Nostro recon, Exercise 15: Provision recon, Exercise 16: Suspense clearance      |
| [L15](./15-full-skill-library-capstone.md)    | Full Banking Agent — Skill Library Build and Capstone          | 90 min   | Full 17-skill library deployment, cross-pillar capstone scenario, documentation               |

## Chapter Contract

By the end of this chapter, you should be able to answer these five questions:

1. What are the three regulatory pillars of modern banking, and why does a single loan portfolio require simultaneous treatment under all three?
2. How does the pillar-aware routing architecture determine which skills to load when a query spans IFRS 9 and Basel simultaneously?
3. How does IFRS 9 ECL staging interact with Basel III capital adequacy — specifically, how does a Stage 2 migration affect both the provision charge and the CET1 ratio?
4. What are the three lines of defence in AML/KYC, and where does the boundary lie between AI-automatable transaction monitoring and human-required SAR filing decisions?
5. How does four-way provision reconciliation (GL provision, risk system provision, regulatory return, IFRS 9 model output) ensure data integrity across a bank's systems?

## Plugin & Companion Materials

Install the Banking Domain Agents plugin once — it activates automatically on all banking regulatory queries:

**Claude Code CLI:**

```bash
claude plugin install banking@agentfactory-business
```

**Cowork:** Sidebar > Customize > Browse plugins > + > Add marketplace from GitHub > `panaversity/agentfactory-business-plugins` > Install "banking"

Downloads (from the [latest release](https://github.com/panaversity/agentfactory-business-plugins/releases/latest)):

- `banking-exercise-data.zip` — Scenario data for Exercises 1-18 + regulatory reference tables
- `banking-workflow-recipes.zip` — Scheduled task configurations (daily recon, monthly ECL, quarterly ICAAP, annual SREP)
- `banking-full.zip` — Everything in one package (Lesson 15 capstone)

Repository contents (inside `banking/`):

- `skills/` — 17 skills: 1 router + 16 product skills (auto-loaded by agent)
- `skills/banking-global-router/references/` — Regulatory reference tables (Basel schedules, IFRS 9 staging criteria, AML typologies)
- `commands/` — Domain commands: `/bank-ecl`, `/bank-capital`, `/bank-recon`, `/bank-aml`
- `hooks/` — SessionStart (pillar detection) + PostToolUse (regulatory label validation)
- `exercises/` — Scenario data per exercise
- `workflow-recipes/` — Operational playbooks (daily, monthly, quarterly, annual)
- `references/` — Basel framework summaries, IFRS 9 application guidance, FATF recommendations

## After Chapter 21

When you finish this chapter, your perspective shifts:

1. **You see banking regulation as three interlocking systems, not separate silos.** The three-pillar mental model — solvency, accounting, financial crime — changes how you approach any banking question. You ask "which pillars does this touch?" before answering.
2. **You have a working 17-skill plugin.** The IFRS 9, Basel, AML, and reconciliation skills are installed, tested, and deployable. The router handles pillar detection and skill chaining automatically.
3. **You understand the boundaries.** The agent calculates ECL, computes capital ratios, flags suspicious transactions, and automates reconciliation. It does not make credit approval decisions, determine regulatory capital buffers, or file SARs. These boundaries are encoded in every skill file.
4. **You can extend.** The pillar-aware routing pattern transfers to any domain with multiple simultaneous regulatory frameworks — insurance (Solvency II + IFRS 17 + conduct), asset management (UCITS + MiFID + AML), healthcare (clinical + billing + compliance).

Start with [Lesson 1: The Three Regulatory Pillars of Modern Banking](./01-the-three-pillars.md).
