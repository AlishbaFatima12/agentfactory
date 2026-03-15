# CA/CPA Practice Agents — Companion Repo Specification

**Status**: SUPERSEDED by Option A (2026-03-05)
**Repo**: `panaversity/ca-cpa-practice-agents`
**License**: Apache-2.0

---

## Design Decision (Option A)

This repo is NOT an installable Cowork plugin. It is a companion repository providing:

1. **Exercise data** — trial balances, entity profiles, source documents, working papers for Ch 19 exercises
2. **Reference SKILL.md files** — five Pakistan-default implementations students study before building their own
3. **Workflow recipe templates** — natural language scheduling specs for Cowork's `/schedule` command

### What was rejected (Option B — the original spec)

The original spec defined 11 skills with 18 custom commands as an installable plugin. This was rejected because:

- The governing artifact (Ch 19 source of truth) never describes a CA/CPA plugin or custom commands
- Students build extensions from scratch using Method A interviews (Ch 16), not by installing pre-built skills
- The "theory only" problem in L02-L06 is solved by adding Layer 1 Anthropic command references, not custom commands
- Workflow recipes are natural language `/schedule` specs, not plugin commands

---

## Two-Layer Architecture (from Governing Artifact)

Students use ONLY Anthropic plugins (installed in Ch 17-18):

```
Layer 2: financial-services-plugins
  /dcf, /comps, /lbo
  Corporate finance, M&A advisory, valuations

Layer 1: knowledge-work-plugins/finance
  /journal-entry, /reconciliation, /income-statement,
  /variance-analysis, /sox-testing
  Core accounting, management accounting, assurance
```

Plus locally-built SKILL.md extensions (5 total, built from scratch in L09-L10):

1. Jurisdiction-specific tax rules (e.g., Pakistan ITO 2001)
2. Chart of accounts encoding
3. Audit methodology
4. Client entity knowledge
5. Compliance calendar

---

## Repo Structure

```
panaversity/ca-cpa-practice-agents/
├── exercises/                          # Downloadable as ca-cpa-exercise-data.zip
│   ├── trial-balances/
│   │   └── textile-manufacturer-tb.csv
│   ├── source-documents/
│   │   └── sample-invoices.md
│   ├── entity-profiles/
│   │   ├── crescent-textiles.md
│   │   └── karachi-foods.md
│   ├── working-papers/
│   │   ├── audit-planning-template.md
│   │   └── revenue-testing-template.md
│   └── consolidation/
│       └── parent-subsidiary-data.md
├── reference-skills/                   # Study these, then build your own
│   ├── README.md
│   ├── pakistan-tax-jurisdiction/
│   │   └── SKILL.md
│   ├── chart-of-accounts/
│   │   ├── SKILL.md
│   │   └── assets/coa-template.csv
│   ├── audit-methodology/
│   │   └── SKILL.md
│   ├── client-entity/
│   │   └── SKILL.md
│   └── compliance-calendar/
│       ├── SKILL.md
│       └── assets/regulatory-calendar.csv
├── workflow-recipes/                   # Natural language /schedule specs
│   ├── README.md
│   ├── month-end-close.md
│   ├── board-pack.md
│   ├── tax-computation.md
│   ├── audit-programme.md
│   ├── compliance-monitoring.md
│   └── fraud-monitoring.md
├── README.md
└── LICENSE
```

### What's NOT in the repo

- No `.claude-plugin/` — not a plugin
- No domain overview skills — LLM knows IFRS, ISA, ITO 2001, COSO, Three Lines
- No `references/` folders — same reason
- No custom commands — students use Anthropic Layer 1 + Layer 2 commands only

---

## Student Experience

**L02-L06**: Domain analysis exercises use conversational prompts + Layer 1 commands
**L07-L08**: Two-layer plugin ecosystem + Cowork workflows + `/schedule` specs
**L09-L10**: Build 5 SKILL.md extensions from scratch, compare against reference-skills/
**L11-L14**: Practice labs using exercise data from this repo
**L15-L16**: Cross-domain capstones and full deployment
