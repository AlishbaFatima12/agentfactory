### Core Concept
Runtime monitoring extends pre-deployment verification into production. Tests verify behavior before deployment; observability verifies behavior during production. Together they form a complete verification system across the entire lifecycle.

### Key Mental Models
- **The Three Pillars**: Logs tell you WHAT happened to a specific request (structured key-value events). Metrics tell you HOW MUCH is happening system-wide (counts, durations, aggregates). Traces tell you WHERE time went within a single request (spans across components). No single pillar replaces the others.
- **Verification Spectrum**: Pre-deployment tools (linting, types, tests, CI) catch logic errors, type mismatches, and regressions BEFORE users see them. Post-deployment tools (logs, metrics, traces, alerts) catch performance degradation, edge cases, and real-world failures WHILE users experience them.
- **The Feedback Loop**: Observe production failures → gain insight into untested edge cases → improve by adding load tests → verify fix passes CI → deploy → observe to confirm fix holds → repeat. Each cycle makes the verification system stronger.

### Key Facts
- Google's Site Reliability Engineering book (2016) codified the insight that reliability is not a property of software — it's a property of operations. Code that passes tests can still fail in production if nobody is watching
- Charity Majors (Honeycomb co-founder) distinguished monitoring (watching known metrics for known thresholds) from observability (understanding system behavior including behaviors you didn't anticipate)
- James's 2:47 AM incident: all tests passed, types checked, CI green — but shipping rates failed under production load. His logs were useless: `print("Processing order...")` with no timestamps, request IDs, or error context
- Structlog produces machine-parseable JSON logs. Correlation IDs tie all log entries for a single request together, solving the "which order failed?" problem

### Critical Patterns
- **Structured logging replaces print statements**: `logger.info("order_processed", order_id="ord-7891", duration_ms=45)` is actionable intelligence; `print("Processing order...")` is noise
- **Log levels serve different audiences**: DEBUG (development only), INFO (normal operations), WARNING (handled problems), ERROR (failures requiring investigation), CRITICAL (system emergencies)
- **AI agent observability adds four dimensions**: token usage tracking (cost driver and quality signal), response quality metrics (corrections, conversation depth), error rate monitoring (explicit failures AND silent quality degradation), cost per operation (variable per-request costs that scale with usage)
- **The Complete System**: All ten axioms work together. Shell orchestrates (I), spec in markdown (II), proper program structure (III), composed from units (IV), types enforce contracts (V), data stored relationally (VI), tests specify behavior (VII), git remembers everything (VIII), pipeline verifies (IX), production is observed (X). Skip any one and a gap opens.

### Common Mistakes
- **Print statements in production**: Unstructured text with no levels, no context, lost when process restarts. Exactly what James had — unusable during the 2:47 AM incident
- **The Log Avalanche**: Logging everything at DEBUG level because "more data is always better." James's first instinct generated 2GB/hour, spiked storage costs, buried real errors in noise. If everything is important, nothing is
- **No correlation between requests**: Impossible to trace a single order's journey through the system without correlation IDs binding all log entries together
- **Monitoring only happy paths**: Tracking successful orders while failed shipping calculations are invisible. Instrument error paths with the same rigor as success paths
- **Observability as afterthought**: "Add monitoring later" means after the first production incident. James added it BECAUSE of his 2:47 AM crisis. Design observability from the start, like testing

### Connections
- **Builds on**: Principle 7 (Observability, Chapter 6) taught visibility into what AI does for trust. Axiom X elevates this from developer experience to production engineering discipline — continuous monitoring, not just debugging logs
- **Completes**: The verification chain started in Axiom IX. CI pipeline proves code is correct before deployment; observability confirms it stays correct under real-world conditions no test anticipated
- **Foundation for**: The complete agentic development system. The ten axioms are not separate rules but an interconnected system — each covers a gap the others leave open. From shell orchestration through production monitoring, every phase has a governing axiom
