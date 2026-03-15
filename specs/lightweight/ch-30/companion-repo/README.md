# CA/CPA Domain Agents

Companion repository for **Chapter 19: AI Transformation of CA/CPA Practice Areas** from _The AI Agent Factory_ by Panaversity.

This plugin provides domain-specific AI agents, workflow recipes, and exercise data for chartered accountancy and CPA practice areas. It covers all five CA/CPA domains: Accounting and Financial Reporting, Tax and Non-Assurance Advisory, Assurance Services, Management Accounting, and Governance Risk and Compliance Advisory.

## Prerequisites

You should have completed Chapters 14-18 of The AI Agent Factory before using this plugin. Specifically, you need familiarity with:

- Enterprise agentic landscape (Ch 14)
- Cowork plugin anatomy and SKILL.md structure (Ch 15)
- Knowledge extraction methodology (Ch 16)
- Finance domain agents and cross-app workflows (Ch 17)
- Intent-Driven Financial Architecture (Ch 18)

## Installation

### Option 1: Claude Plugin Marketplace (Recommended)

```bash
claude plugin marketplace add panaversity/ca-cpa-domain-agents
```

### Option 2: Download ZIP

1. Download the repository as a ZIP file from the releases page.
2. Extract to a local directory.
3. Point Cowork at the `exercises/` folder for exercise data files.

## Structure

```
ca-cpa-domain-agents/
├── .claude-plugin/          # Plugin metadata for marketplace
├── skills/                  # Agent Skills (agentskills.io spec)
│   ├── accounting-reporting/    # Domain 1: Accounting & Financial Reporting
│   ├── tax-advisory/            # Domain 2: Tax & Non-Assurance Advisory
│   ├── assurance/               # Domain 3: Assurance Services
│   ├── management-accounting/   # Domain 4: Management Accounting
│   ├── grc-advisory/            # Domain 5: GRC Advisory
│   ├── pakistan-tax-jurisdiction/# Extension 1: Jurisdiction tax rules
│   ├── chart-of-accounts/       # Extension 2: Chart of accounts encoding
│   ├── audit-methodology/       # Extension 3: Audit methodology standards
│   ├── client-entity/           # Extension 4: Client entity knowledge (template)
│   └── compliance-calendar/     # Extension 5: Regulatory compliance calendar
├── exercises/               # Exercise data files for practice labs
│   ├── trial-balances/          # PKR IFRS trial balance data
│   ├── source-documents/        # Invoices, receipts, bank statements
│   ├── working-papers/          # Audit notes, testing results
│   ├── entity-profiles/         # Hypothetical company profiles
│   └── consolidation/           # Parent + subsidiary data
├── workflow-recipes/        # Cowork scheduled task specifications
│   ├── month-end-close.md
│   ├── tax-computation.md
│   ├── audit-programme.md
│   ├── board-pack.md
│   ├── fraud-monitoring.md
│   └── compliance-monitoring.md
├── references/              # Quick-reference materials
│   └── domain-quick-reference.md
├── README.md
└── LICENSE                  # Apache-2.0
```

## Domain Agents (5 Core Skills)

| Domain                    | Skill Directory                 | Description                                        |
| ------------------------- | ------------------------------- | -------------------------------------------------- |
| 1. Accounting & Reporting | `skills/accounting-reporting/`  | Financial statements, reconciliations, disclosures |
| 2. Tax & Advisory         | `skills/tax-advisory/`          | Tax compliance, advisory, due diligence            |
| 3. Assurance              | `skills/assurance/`             | External audit, internal audit, other assurance    |
| 4. Management Accounting  | `skills/management-accounting/` | FP&A, performance management, treasury             |
| 5. GRC Advisory           | `skills/grc-advisory/`          | Governance, risk management, compliance            |

## Extension Skills (5 Customizable Templates)

| Extension              | Skill Directory                     | Purpose                                        |
| ---------------------- | ----------------------------------- | ---------------------------------------------- |
| Jurisdiction Tax Rules | `skills/pakistan-tax-jurisdiction/` | Encode local tax code, rates, filing deadlines |
| Chart of Accounts      | `skills/chart-of-accounts/`         | Map account codes, documentation requirements  |
| Audit Methodology      | `skills/audit-methodology/`         | Materiality, sampling, documentation standards |
| Client Entity          | `skills/client-entity/`             | Client-specific business model and risk areas  |
| Compliance Calendar    | `skills/compliance-calendar/`       | Filing deadlines, penalty matrix, checklists   |

The extensions ship with Pakistan defaults (FBR, SECP, ITO 2001). Each includes a customization guide for adapting to your jurisdiction.

## Workflow Recipes

Each recipe in `workflow-recipes/` includes a "Customize This" section with jurisdiction and entity variables you should adapt for your practice. Pakistan (FBR, SECP) is the default; swap in your local tax authority, currency, and filing deadlines.

## Plugin Dependencies

This plugin works alongside the following Anthropic plugins (install separately):

```bash
claude plugin install finance@knowledge-work-plugins
claude plugin marketplace add anthropics/financial-services-plugins
claude plugin marketplace add panaversity/idfa-financial-architect
```

## License

Apache-2.0. See [LICENSE](LICENSE) for details.
