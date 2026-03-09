---
slug: /Business-Domain-Agent-Workflows/islamic-finance-domain-agents
sidebar_position: 20
title: "Chapter 20: Islamic Finance Domain Agents"
description: "Build jurisdiction-aware AI agents for global Islamic finance using a router, product skill, and jurisdiction overlay architecture that handles AAOIFI, IFRS, and local standards across 20 jurisdictions — ensuring the same transaction produces the correct accounting output under every framework"
chapter_number: 20
part_number: 3
version: 1.0
status: draft
---

# Chapter 20: Islamic Finance Domain Agents

> _"Islamic finance is not a Muslim-only market. It is a global industry present in more than 80 countries, governed by at least five different accounting frameworks, structured around eight distinct product families. The CA/CPA who understands it commands a practice niche that is simultaneously under-served, rapidly expanding, and impossible to enter without preparation."_

Chapter 19 mapped the five CA/CPA practice domains and built domain-specific agents for each. This chapter applies that capability to the most jurisdictionally complex vertical in global finance: Islamic finance. The same murabaha transaction produces different accounting outputs in Bahrain (AAOIFI), Malaysia (MFRS), Saudi Arabia (IFRS), and the UK (IFRS) — different labels, different balance sheet presentation, different disclosures. A generic finance agent defaults to one framework and gets it wrong in every other jurisdiction. This chapter builds the agents that get it right everywhere.

The architectural contribution is new to the book: the **router to product skill to jurisdiction overlay** pattern. Chapters 17-19 taught single-jurisdiction agents. Chapter 20 teaches multi-jurisdiction routing — a pattern that transfers to any domain with jurisdictional variation (tax, legal, healthcare).

## What You'll Learn

By the end of this chapter, you will be able to:

- Explain the three accounting regimes in global Islamic finance (AAOIFI primary, IFRS with Islamic guidance, local standards) and why the same transaction produces different outputs under each
- Deploy the router to product skill to jurisdiction overlay architecture that ensures an agent never applies the wrong accounting framework
- Build jurisdiction-specific SKILL.md extensions for any of the 20 reference jurisdictions using the Knowledge Extraction Method from Chapter 16
- Execute 15 practice exercises spanning murabaha, ijarah, sukuk, takaful, salam, istisna'a, mudaraba, musharaka, zakat, Shariah screening, full financial statements, cross-border consolidation, and Islamic fintech
- Articulate the boundary between agent execution and Shariah Supervisory Board judgment — what the agent does autonomously and what it must escalate

## Lesson Flow

| Lesson                                                       | Title                                                                   | Duration | What You'll Walk Away With                                                                               |
| ------------------------------------------------------------ | ----------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------- |
| [L01](./01-why-islamic-finance-needs-jurisdiction-agents.md) | Why Islamic Finance Needs Jurisdiction-Aware Agents                     | 15 min   | The core problem, three accounting regimes, and why generic agents fail                                  |
| [L02](./02-global-standards-map.md)                          | The Global Standards Map — Three Regimes, One Transaction               | 20 min   | 20-jurisdiction standards map, 4-jurisdiction murabaha comparison, the compliance-vs-calculation insight |
| [L03](./03-plugin-architecture.md)                           | The Plugin Architecture — Router, Product Skills, Jurisdiction Overlays | 25 min   | Skill routing anatomy, layered architecture, the transferable multi-jurisdiction pattern                 |
| [L04](./04-murabaha.md)                                      | Murabaha — Cost-Plus Financing Across Jurisdictions                     | 35 min   | Exercise 1: Murabaha income schedule — Bahrain (AAOIFI) vs Malaysia (MFRS)                               |
| [L05](./05-ijarah-imb.md)                                    | Ijarah and IMB — Four-Jurisdiction Lease Accounting                     | 50 min   | Exercise 2: Ijarah accounting across Bahrain, Malaysia, UAE, UK                                          |
| [L06](./06-sukuk.md)                                         | Sukuk — Global Islamic Capital Markets                                  | 60 min   | Exercise 3: GCC sukuk issuance — multi-jurisdiction accounting                                           |
| [L07](./07-takaful-ifrs17.md)                                | Takaful and IFRS 17 — Islamic Insurance                                 | 50 min   | Exercise 4: Global takaful operator — IFRS 17 and wakala model                                           |
| [L08](./08-trade-partnership-finance.md)                     | Trade & Partnership Finance — Salam, Istisna'a, Mudaraba, Musharaka     | 45 min   | Exercise 5: Four products, one scenario — construction project across jurisdictions                      |
| [L09](./09-malaysia-sukuk.md)                                | Malaysia Sukuk — The World's Largest Market                             | 55 min   | Exercise 6: Malaysia corporate sukuk — Tenaga Nasional Berhad                                            |
| [L10](./10-saudi-arabia.md)                                  | Saudi Arabia — Vision 2030, ZATCA Zakat, and Al Rajhi                   | 55 min   | Exercise 7: Saudi IFI — Alinma Bank accounting review                                                    |
| [L11](./11-uk-islamic-banking.md)                            | UK Islamic Banking — IFRS, PRA/FCA, and HMRC                            | 50 min   | Exercise 8: Al Rayan Bank — UK Islamic banking                                                           |
| [L12](./12-nigeria-sovereign-sukuk.md)                       | Nigeria Sovereign Sukuk — African Infrastructure Finance                | 45 min   | Exercise 9: FGN sovereign sukuk — N300B ijarah                                                           |
| [L13](./13-global-zakat.md)                                  | Global Zakat Accounting                                                 | 40 min   | Exercise 10: Global zakat comparison across 4 jurisdictions                                              |
| [L14](./14-shariah-screening.md)                             | Shariah Portfolio Screening — Global Standards                          | 45 min   | Exercise 11: Saturna Capital Amana Income Fund — global screening                                        |
| [L15](./15-aaoifi-vs-ifrs-capstone.md)                       | AAOIFI vs IFRS — Full Financial Statements                              | 90 min   | Exercise 12: ABC Islamic Bank (Bahrain) — $8B total assets, capstone accounting                          |
| [L16](./16-cross-border-consolidation.md)                    | Cross-Border Islamic Banking Group — Consolidation                      | 75 min   | Exercise 13: 4-entity group consolidation across AAOIFI + IFRS jurisdictions                             |
| [L17](./17-islamic-fintech.md)                               | Islamic Fintech — Accounting for New Structures                         | 40 min   | Exercise 14: 4 fintech scenarios — digital murabaha, robo-adviser, P2P, climate sukuk                    |
| [L18](./18-full-skill-library-capstone.md)                   | Full Islamic Finance Agent — SKILL.md Library Build                     | 90 min   | Exercise 15: Full 25-file skill library deployment, testing, and documentation                           |

## Chapter Contract

By the end of this chapter, you should be able to answer these five questions:

1. What are the three accounting regimes in global Islamic finance, and how does the same murabaha transaction produce different outputs under each?
2. How does the router to product skill to jurisdiction overlay architecture ensure an agent never applies the wrong framework?
3. Why do AAOIFI and IFRS produce different balance sheet presentations for the same Islamic bank, and what are the material financial impacts?
4. How would you build a jurisdiction-specific SKILL.md extension for a new country using the Knowledge Extraction Method?
5. Where is the boundary between agent execution and Shariah Supervisory Board judgment — what can the agent do autonomously and what must it escalate?

## Plugin & Companion Materials

Install the Islamic Finance Domain Agents plugin once — it activates automatically on all Islamic finance queries:

**Claude Code CLI:**

```bash
claude plugin install islamic-finance@agentfactory-business
```

**Cowork:** Sidebar → Customize → Browse plugins → + → Add marketplace from GitHub → `panaversity/agentfactory-business-plugins` → Install "islamic-finance"

Downloads (from the [latest release](https://github.com/panaversity/agentfactory-business-plugins/releases/latest)):

- `islamic-finance-exercise-data.zip` — Scenario data for Exercises 1-15 + AAOIFI reference tables
- `islamic-finance-workflow-recipes.zip` — Scheduled task configurations (daily, monthly, quarterly, annual)
- `islamic-finance-full.zip` — Everything in one package (Exercise 15 capstone)

Repository contents (inside `islamic-finance/`):

- `skills/` — 13 skills: 1 router + 12 products (auto-loaded by agent)
- `skills/islamic-finance-router/references/jurisdictions/` — 13 jurisdiction overlays (loaded on-demand)
- `commands/` — 4 domain commands: `/if-journal`, `/if-compare`, `/if-screen`, `/if-zakat`
- `hooks/` — SessionStart (capability announcement) + PostToolUse (framework label validation)
- `exercises/` — Scenario data per exercise
- `workflow-recipes/` — Operational playbooks
- `references/` — AAOIFI FAS reference table

## After Chapter 20

When you finish this chapter, your perspective shifts:

1. **You see jurisdictional complexity as a solvable architecture problem.** The router to product to overlay pattern handles any domain where the same transaction has different outputs by jurisdiction — Islamic finance, tax, legal, healthcare.
2. **You have a working 25-file skill library.** The product skills, jurisdiction overlays, and global router are installed, tested, and deployable across any jurisdiction in the reference set.
3. **You understand the boundary.** The agent executes accounting treatment, generates journal entries, produces disclosures, and flags compliance risks. The Shariah Supervisory Board judges Shariah compliance. This boundary is non-negotiable and clearly encoded in every skill file.
4. **You can extend.** The Knowledge Extraction Method from Chapter 16, applied to a new jurisdiction's regulatory framework, produces a new overlay SKILL.md that plugs into the existing architecture without modification.

Start with [Lesson 1: Why Islamic Finance Needs Jurisdiction-Aware Agents](./01-why-islamic-finance-needs-jurisdiction-agents.md).
