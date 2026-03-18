### Core Concept

Tolerance rules reflect the pricing model of the spend category — fixed-price categories warrant tight tolerances because deviations are genuine exceptions; market-linked categories need wider tolerances to accommodate legitimate variability. Miscalibrated rules in either direction create either cost exposure or false workload.

### Key Mental Models

- **Pricing Model Drives Tolerance**: Ask "is this price fixed in the PO or subject to market variation?" — that answer determines the correct tolerance percentage
- **Three Routing Tiers**: Every invoice falls into auto-approve (within tolerance), escalation (exception above threshold, route to authority with deadline), or automatic rejection (duplicate, no-PO reference, unlisted vendor)
- **Pattern vs. Incident**: Three exceptions of the same type from one vendor in 30 days is one systematic problem, not three separate incidents — the response is a vendor data alignment meeting, not continued approvals

### Critical Patterns

- Run `/invoice-reconcile type:"tolerance-configuration"` interview before configuring manually — the interview asks the right questions in the right order
- Set zero quantity tolerance for direct materials — pay only for what goods receipt confirms was delivered
- Services category carries zero price tolerance — services are delivered or not; the price must match the contract exactly
- Calculate the efficiency impact: current exception rate × cost per exception = monthly cost; after automation, this becomes the savings baseline

### Common Mistakes

- Setting tight tolerances to maximise control — excessively tight rules generate false exceptions for legitimate rounding and minor adjustments, creating review burden without preventing real risk
- Treating tolerance rules as permanent — review when category pricing models change or when exception rates signal miscalibration
- Believing three-way match catches all AP fraud — it catches data discrepancies but not phantom PO fraud or bank detail substitution

### Connections

- **Builds on**: Vendor classification (Lesson 3) — Bottleneck and Strategic vendors warrant tighter tolerances than Commodity vendors
- **Leads to**: Invoice reconciliation at scale (Lesson 6) — these rules are the engine the four-stage workflow runs against
