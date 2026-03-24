### Core Concept

Supplier risk cannot be managed as a single number: five independent dimensions each draw on different data sources, and a failure in any one dimension can be critical regardless of how the others score. The Tier 2 blind spot is the most dangerous: an unmapped sub-supplier dependency is UNASSESSED, not LOW risk.

### Key Mental Models

- **Escalation Asymmetry**: The overall rating escalates to HIGH if any single dimension turns red: it does not average across dimensions. Good scores elsewhere do not offset a red flag.
- **Tier 2 Cascade**: Your vendor's operational decline may have a root cause invisible to you: a sub-supplier in financial distress. Mapping Tier 2 dependencies is risk management, not administrative overhead.
- **Remediation vs. Assurance**: Rating reductions require confirmed remediation (certification renewed, restructuring resolved), not vendor assurance. "We're working on it" does not reduce the risk score.

### Critical Patterns

- Map Tier 2 dependencies for Strategic and Bottleneck vendors: an unmapped dependency is a blind spot, not a low-risk assumption
- Configure `vendor-health-monitor` thresholds before the first alert, not after a crisis: calibration determines whether the system creates value or alert fatigue
- Two amber dimensions simultaneously = MEDIUM-HIGH overall: the combination matters, not just individual dimension scores
- Operational risk data comes from your own ERP (live); financial risk requires external statutory and credit data: these update on different frequencies

### Common Mistakes

- Treating a single high OTD score as evidence of low overall risk: operational performance is one of five dimensions
- Accepting vendor assurance as evidence of remediation: wait for the confirmation event (renewed cert, resolved filing)
- Leaving Tier 2 dependencies unmapped because they are hard to capture: "hard to capture" is the same risk as "unknown"

### Connections

- **Builds on**: Six-dimension vendor assessment (Lesson 4): the risk dimensions here are the monitoring signals the assessment identified
- **Leads to**: Persistent agents (Lesson 12): the `vendor-health-monitor` automates the continuous monitoring this lesson defines
