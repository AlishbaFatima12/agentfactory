# Sales, RevOps & Marketing Cowork Skills Library
## Chapter 23 — Sales & Revenue Operations and Marketing
### Panaversity: The AI Agent Factory

---

## Quick Start

1. Copy this folder into your Cowork skills directory
2. Copy `sales-marketing.local.md.template`, rename it `sales-marketing.local.md`,
   and fill in your organisation's ICP, personas, brand voice, and competitors
3. Install both plugins:
   - Sales Plugin:     https://claude.com/plugins/sales
   - Marketing Plugin: https://claude.com/plugins/marketing
4. Start with Exercise 1 in Chapter 23 to build and validate your ICP configuration

---

## Directory Structure

```
sales-revops-marketing-skills/
├── README.md                              ← this file
├── sales-marketing-global-router.md       ← top-level router (always active)
├── sales-marketing.local.md.template      ← fill in → sales-marketing.local.md
│
├── products/                              ← one file per plugin workflow
│   ├── prospect-research.md               ← /research command
│   ├── lead-scoring.md                    ← /score command
│   ├── crm-enrichment.md                  ← /enrich command
│   ├── outreach.md                        ← /outreach command
│   ├── sequence.md                        ← /sequence command
│   ├── pre-call-brief.md                  ← /brief (sales) command
│   ├── follow-up.md                       ← /follow-up command
│   ├── pipeline.md                        ← /pipeline command
│   ├── content-creation.md                ← /content command
│   ├── campaign-planning.md               ← /campaign command
│   ├── copywriting.md                     ← /copy command
│   ├── performance-analysis.md            ← /analyze command
│   ├── content-calendar.md                ← /calendar command
│   └── persona-icp.md                     ← /persona command
│
└── agents/                                ← persistent RevOps agents
    ├── lead-intelligence-agent.md         ← hot signal monitoring
    ├── crm-hygiene-agent.md               ← automated enrichment schedule
    ├── outreach-sequencing-agent.md       ← sequence management
    ├── marketing-performance-agent.md     ← weekly analytics
    └── revenue-reporting-agent.md         ← pipeline + forecast dashboard
```

Total: 22 files

---

## File → Plugin Command Map

| File | Plugin | Command | Primary Use |
|---|---|---|---|
| prospect-research.md | Sales | `/research` | Deep prospect + account brief |
| lead-scoring.md | Sales | `/score` | Three-dimension lead qualification |
| crm-enrichment.md | Sales | `/enrich` | CRM record enrichment |
| outreach.md | Sales | `/outreach` | Personalised message drafting |
| sequence.md | Sales | `/sequence` | Multi-touch sequence generation |
| pre-call-brief.md | Sales | `/brief` | Pre-call + deal health briefs |
| follow-up.md | Sales | `/follow-up` | Post-meeting follow-up |
| pipeline.md | Sales | `/pipeline` | Pipeline analysis + forecast |
| content-creation.md | Marketing | `/content` | Content — all formats |
| campaign-planning.md | Marketing | `/campaign` | Campaign brief + strategy |
| copywriting.md | Marketing | `/copy` | Ad copy, subject lines, CTAs |
| performance-analysis.md | Marketing | `/analyze` | Channel performance + optimisation |
| content-calendar.md | Marketing | `/calendar` | Content + campaign calendar |
| persona-icp.md | Marketing | `/persona` | ICP + buyer persona development |

---

## The Governing Principle

> **Scale the expertise of your top 1% of sales and marketing performers
> across the entire team.**

Every file in this library is built around this principle. The ICP definition,
the Five Laws of Outreach, the Three-Dimension scoring model, the brand voice
configuration — these encode your best people's judgment into every output.

---

## Plugin Reference

- Sales Plugin:     https://claude.com/plugins/sales
- Marketing Plugin: https://claude.com/plugins/marketing
- GitHub — Sales:   https://github.com/anthropics/knowledge-work-plugins/tree/main/sales
- GitHub — Marketing: https://github.com/anthropics/knowledge-work-plugins/tree/main/marketing
- Chapter 23 full text: The AI Agent Factory — Part 3, Section III

---

## Version History

v1.0 — Initial release | Chapter 23 | Panaversity AI Agent Factory curriculum
