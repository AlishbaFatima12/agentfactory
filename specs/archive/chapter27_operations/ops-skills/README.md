# Operations Cowork Skills Library
## Chapter 27 — Operations
### Panaversity: The AI Agent Factory

---

## Quick Start

1. Copy this folder into your Cowork skills directory
2. Copy `ops.local.md.template`, rename it `ops.local.md`, and fill in
   your organisation's vendors, regulatory frameworks, risk appetite,
   change authority matrix, and operational metrics
3. Install the plugin: https://claude.com/plugins/operations
   (GitHub: github.com/anthropics/knowledge-work-plugins/tree/main/operations)
4. Start with Exercise 8 in Chapter 27 to build ops.local.md —
   it makes every command output organisation-specific rather than generic

---

## Directory Structure

```
ops-skills/
├── README.md                               ← this file
├── ops-global-router.md                    ← top-level router (always active)
├── ops.local.md.template                   ← fill in → ops.local.md
│
├── products/                               ← one file per plugin command
│   ├── vendor.md                           ← /vendor command
│   ├── process.md                          ← /process command
│   ├── change.md                           ← /change command
│   ├── compliance.md                       ← /compliance command
│   ├── audit.md                            ← /audit command
│   ├── sop.md                              ← /sop command
│   ├── risk.md                             ← /risk command
│   ├── contract.md                         ← /contract command
│   ├── metrics.md                          ← /metrics command
│   └── incident.md                         ← /incident command
│
└── agents/                                 ← persistent operations agents
    ├── vendor-watchdog-agent.md            ← contract, spend, SLA monitoring
    ├── process-health-agent.md             ← SOP currency and ownership
    ├── compliance-monitor-agent.md         ← obligation tracking and alerts
    └── change-tracker-agent.md             ← change pipeline and PIR tracking
```

Total: 18 files

---

## File → Command Map

| File | Command | Primary Use |
|---|---|---|
| vendor.md | `/vendor` | Vendor portfolio audit, SLA scorecards, renewals |
| process.md | `/process` | Process gap analysis, mapping, documentation |
| change.md | `/change` | Change impact assessment, comms, rollback plans |
| compliance.md | `/compliance` | Obligation mapping, control assessment, evidence |
| audit.md | `/audit` | Audit preparation, evidence packs, mock review |
| sop.md | `/sop` | SOP creation, updates, version control |
| risk.md | `/risk` | Risk register, scoring, mitigation plans |
| contract.md | `/contract` | Contract analysis, obligation extraction |
| metrics.md | `/metrics` | Operational KPI frameworks, dashboards |
| incident.md | `/incident` | Post-mortems, RCA, corrective actions |

---

## The Governing Principle

> **Operations is not an administrative function — it is an intelligence
> function. Its job is to make the invisible visible.**
>
> Vendor spend nobody has totalled. Processes nobody has documented.
> Compliance obligations nobody has mapped. Risks nobody has quantified.
> When the invisible becomes visible, decisions improve.

---

## Plugin Reference

- Plugin URL:   https://claude.com/plugins/operations
- GitHub repo:  https://github.com/anthropics/knowledge-work-plugins/tree/main/operations
- Chapter 27 full text: The AI Agent Factory — Part 3, Section VII

---

## Version History

v1.0 — Initial release | Chapter 27 | Panaversity AI Agent Factory curriculum
