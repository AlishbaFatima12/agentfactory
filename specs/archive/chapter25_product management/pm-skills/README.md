# Product Management Cowork Skills Library
## Chapter 25 — Product Management
### Panaversity: The AI Agent Factory

---

## Quick Start

1. Copy this folder into your Cowork skills directory
2. Copy `product.local.md.template`, rename it `product.local.md`,
   and fill in your product, personas, team structure, and stakeholder map
3. Install the plugin: https://claude.com/plugins/product-management
   (GitHub reference: github.com/anthropics/knowledge-work-plugins/tree/main/product-management)
4. Start with Exercise 8 in Chapter 25 to build your product.local.md —
   it improves every other command output

---

## Directory Structure

```
pm-skills/
├── README.md                          ← this file
├── pm-global-router.md                ← top-level router (always active)
├── product.local.md.template          ← fill in → product.local.md
│
├── products/                          ← one file per plugin command
│   ├── spec.md                        ← /spec command
│   ├── prd.md                         ← /prd command
│   ├── roadmap.md                     ← /roadmap command
│   ├── research.md                    ← /research command
│   ├── stories.md                     ← /stories command
│   ├── brief.md                       ← /brief command
│   ├── update.md                      ← /update command
│   ├── retro.md                       ← /retro command
│   ├── prioritise.md                  ← /prioritise command
│   └── interview.md                   ← /interview command
│
└── agents/                            ← persistent PM agents
    ├── research-intelligence-agent.md ← weekly user signal synthesis
    ├── stakeholder-update-agent.md    ← automated stakeholder comms
    └── roadmap-coherence-agent.md     ← detects drift and misalignment
```

Total: 17 files

---

## File → Command Map

| File | Command | Primary Use |
|---|---|---|
| spec.md | `/spec` | Write or refine a feature specification |
| prd.md | `/prd` | Generate a Product Requirements Document |
| roadmap.md | `/roadmap` | Plan, structure, or communicate a roadmap |
| research.md | `/research` | Synthesise user research into insights |
| stories.md | `/stories` | Generate user stories with acceptance criteria |
| brief.md | `/brief` | Create a product or discovery brief |
| update.md | `/update` | Draft stakeholder updates (exec, eng, customer) |
| retro.md | `/retro` | Structure a product retrospective |
| prioritise.md | `/prioritise` | Apply a prioritisation framework to a backlog |
| interview.md | `/interview` | Generate user interview guides |

---

## The Governing Principle

> **The PM's job is judgment. AI removes the bottleneck between
> judgment and the documentation that expresses it.**

The PM thinks. The agent writes the first draft. The PM reviews
and directs. The document reflects the PM's judgment at the quality
it deserves — in a fraction of the time.

---

## Plugin Reference

- Plugin URL:   https://claude.com/plugins/product-management
- GitHub repo:  https://github.com/anthropics/knowledge-work-plugins/tree/main/product-management
- Chapter 25 full text: The AI Agent Factory — Part 3, Section V

---

## Version History

v1.0 — Initial release | Chapter 25 | Panaversity AI Agent Factory curriculum
