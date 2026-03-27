### Core Concept

Permissions answer one question: can this agent access this resource? They say nothing about how much it can consume. A resource budget answers the second question by tracking four categories of consumption per pipeline run: tokens, compute, API calls, and storage. A spending envelope turns that tracking into enforcement by pausing the pipeline at the ceiling rather than logging a warning. An audit trail records what happened and why, with five required fields per entry. These three components form the design principle "agents need budgets, not permissions."

### Key Mental Models

- **Permissions Are a Gate; Budgets Are a Meter**: Giving an agent an API key lets it through the gate. Without a budget, nothing stops runaway consumption until the monthly invoice arrives.
- **Two Granularities**: Track resource consumption per FTE (to find which worker is expensive) and per pipeline run (to find whether the overall run stays on budget). Both levels of granularity come from the same data.
- **Warning vs. Enforcement**: A log warning allows overruns to compound silently across fifty candidates. A spending envelope pauses the pipeline at the ceiling, containing damage to a single run.
- **Audit Trail Requires "Why"**: Timestamp, actor, resource, and cost tell you what happened. Justification tells you whether it was warranted. Without justification, you can identify expensive acquisitions but cannot determine if they were correct.

### Critical Patterns

- A bug causing 50,000 tokens per candidate instead of 500 would be invisible under a permissions model until the cloud bill arrives
- Per-FTE tracking exposes which specific FTE is the cost driver; per-run tracking exposes whether the aggregate pipeline is over budget
- Emma's uncertainty about whether all five audit trail fields are needed from day one is a rare architect moment: she resolves it by noting that adding a field is trivial and reconstructing missing data retroactively is impossible
- Spending envelopes connect directly to the Two-Layered Model: they ensure the factory cannot consume more than its principal authorized, even unsupervised

### Common Mistakes

- Treating permissions as sufficient access control (permissions are binary gate-keeping; they provide no consumption boundary)
- Lumping all resource categories into a single cost number (each category has different failure modes: token overruns increase LLM costs, API call overruns trigger third-party rate limits, storage overruns create database pressure)
- Treating a log warning as equivalent to a spending ceiling (a warning is accounting; a ceiling is governance)

### Connections

- **Builds on**: Ch 62 L1-L2 (spending envelope concept from L1; self-provisioning framing from L2)
- **Leads to**: Ch 62 L4 (apply the principle to HireFlow's specific pipeline locations)
- **Used later**: Ch 84 (orchestrator implements four-category tracking at two granularities), Ch 87 (spending envelopes as defense against budget abuse), Ch 90 (resource budget report as end-to-end verification)
