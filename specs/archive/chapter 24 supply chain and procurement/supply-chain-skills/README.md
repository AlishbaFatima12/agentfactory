# Supply Chain & Procurement Cowork Skills Library
## Chapter 24 — Supply Chain & Procurement
### Panaversity: The AI Agent Factory

---

## Quick Start

1. Copy this folder into your Cowork skills directory
2. Copy `supply-chain.local.md.template`, rename it `supply-chain.local.md`,
   and fill in your organisation's vendor classifications, tolerance rules,
   carrier list, and escalation contacts
3. Connect MCP integrations: ERP, AP system, TMS, financial databases
4. Start with Exercise 1 in Chapter 24 to build and validate your vendor
   classification register

---

## Directory Structure

```
supply-chain-skills/
├── README.md                              ← this file
├── supply-chain-global-router.md          ← top-level router (always active)
├── supply-chain.local.md.template         ← fill in → supply-chain.local.md
│
├── products/                              ← one file per workflow
│   ├── vendor-assessment.md               ← /vendor-assess command
│   ├── supplier-risk.md                   ← /supplier-risk command
│   ├── invoice-reconciliation.md          ← /reconcile command
│   ├── vendor-communication.md            ← /communicate command
│   ├── logistics-brief.md                 ← /logistics-brief command
│   ├── spend-analysis.md                  ← /spend-analysis command
│   ├── network-design.md                  ← /network-design command
│   └── supply-chain-brief.md              ← /supply-chain-brief command
│
└── agents/                                ← persistent supply chain agents
    ├── vendor-health-monitor.md           ← continuous vendor surveillance
    ├── invoice-reconciliation-agent.md    ← AP inbox → three-way match
    ├── procurement-calendar-agent.md      ← contract + compliance deadlines
    ├── logistics-intelligence-agent.md    ← carrier performance monitoring
    └── spend-intelligence-agent.md        ← category analytics + savings
```

Total: 18 files

---

## File → Command Map

| File | Command | Primary Use |
|---|---|---|
| vendor-assessment.md | `/vendor-assess` | Six-dimension vendor assessment |
| supplier-risk.md | `/supplier-risk` | Continuous multi-dimension risk brief |
| invoice-reconciliation.md | `/reconcile` | Three-way match + exception routing |
| vendor-communication.md | `/communicate` | Disputes, CARs, exit notices |
| logistics-brief.md | `/logistics-brief` | Carrier performance + lane analysis |
| spend-analysis.md | `/spend-analysis` | Consolidation + price benchmarking |
| network-design.md | `/network-design` | Supply chain network scenario modelling |
| supply-chain-brief.md | `/supply-chain-brief` | Weekly CPO/COO dashboard |

---

## The Governing Principle

> **Every supply chain problem is an information problem before it is
> an operational problem.**

The vendor does not become distressed overnight — signals appear weeks earlier.
The invoice exception is a pattern, not a one-off. The logistics rate is no
longer optimal — detectable when the fuel index moves, not at annual review.

These skills encode the intelligence layer that surfaces these signals
before they become crises.

---

## MCP Integrations Required

| System | Used By |
|---|---|
| ERP (SAP / Oracle / Dynamics / NetSuite) | vendor-assessment, invoice-reconciliation, spend-analysis |
| Accounts Payable system | invoice-reconciliation-agent |
| TMS / Logistics platform | logistics-brief, logistics-intelligence-agent |
| Financial databases (Companies House, Creditsafe, D&B) | supplier-risk, vendor-health-monitor |
| Web Search | supplier-risk, vendor-health-monitor, spend-analysis |
| Supplier portal / QMS | vendor-assessment, supplier-risk |

---

## Plugin References

- Vendor Governance Plugin: github.com/ricardodevis/it-vendor-provision
- Supply Chain Optimisation: samirsaci.com/how-i-deployed-an-ai-agent
- Chapter 24 full text: The AI Agent Factory — Part 3, Section IV

---

## Version History

v1.0 — Initial release | Chapter 24 | Panaversity AI Agent Factory curriculum
