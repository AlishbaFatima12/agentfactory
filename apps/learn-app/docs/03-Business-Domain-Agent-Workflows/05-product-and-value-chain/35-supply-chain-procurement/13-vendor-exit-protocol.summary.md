### Core Concept

Vendor exit is the stress test of the procurement operating system — it exposes every dependency left unresolved and every monitor left unconfigured. The post-mortem question is the most important output: was this scenario predictable, and what monitoring would have given earlier warning?

### Key Mental Models

- **Exit as System Audit**: A vendor exit scenario reveals gaps in classification, monitoring, and qualification that routine operations hide — the stress test is the diagnostic
- **Counterparty, Not Adversary**: The exiting vendor holds company tooling, IP, and documentation. A cooperative exit communication recovers more than an adversarial one.
- **60-Day Structure**: Days 1-7 financial security (stop payments, assess exposure) → Days 8-30 short-term mitigation (alternative sourcing, inventory) → Days 31-60+ transition (qualification, handover)

### Critical Patterns

- Run `/vendor-assess` in exit-planning mode to generate the structured exit plan — financial exposure assessment is the first output, not the last
- Formally inventory company-owned tooling, IP, and documentation before sending exit notice — recovery is harder after the relationship is adversarial
- Select the highest-risk Bottleneck vendor for exit simulation — Bottleneck vendors are the highest consequence scenario precisely because alternatives don't exist yet
- The post-mortem must connect the exit scenario back to earlier classification and monitoring decisions — if the crisis was predictable, what would have triggered an earlier warning?

### Common Mistakes

- Treating exit as an event rather than a process — the 60-day timeline structure exists because rushed exits increase financial and operational exposure
- Starting the exit process at Days 8-30 (mitigation) before completing Days 1-7 (financial security) — uncontrolled payment exposure worsens the financial position
- Omitting the post-mortem — an exit without a retrospective leaves the systemic gap in place for the next vendor

### Connections

- **Builds on**: Vendor classification (Lesson 3) — the Bottleneck classification determines which exits carry the highest consequence; vendor communications (Lesson 11) — all three exit communications use that framework
- **Leads to**: Capstone (Lesson 14) — exit planning experience informs alert threshold design for the persistent agent configuration
