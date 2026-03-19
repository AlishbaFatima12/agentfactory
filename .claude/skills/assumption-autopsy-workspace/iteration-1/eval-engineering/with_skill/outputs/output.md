# Assumption Autopsy: PostgreSQL for Real-Time Analytics Pipeline (10M events/day)

## Plan Under Examination

**Goal:** Process 10M events/day through a real-time analytics pipeline
**Approach:** Use PostgreSQL as the data store
**User-stated assumptions:** None explicitly listed -- user asked for an audit of the assumptions behind the choice

*Since no human assumptions were provided, AI generates both perspectives. The "Human Only" category represents assumptions a typical engineering team would make implicitly when choosing PostgreSQL, while "AI Only" represents structural assumptions the team likely did not discuss.*

---

## Assumption Matrix

### (a) Human Only (Typical implicit team assumptions)

| # | Assumption | Type | Risk Level |
|---|-----------|------|------------|
| 1 | The team already knows PostgreSQL well, so operational overhead will be low | Contextual/Team | Reasonable |
| 2 | PostgreSQL is "good enough" for analytics because it handles everything else well | Contextual/Heuristic | Risky |
| 3 | Adding a specialized database later would be harder than starting with PostgreSQL now | Contextual/Temporal | Needs Testing |

*Pattern: Team assumptions are contextual -- driven by familiarity, past experience, and the desire to minimize tooling complexity.*

### (b) Found by AI Only

| # | Assumption | Type | Risk Level |
|---|-----------|------|------------|
| 1 | PostgreSQL can sustain ~115 writes/second (10M/day) with the chosen schema design under concurrent read+write load | Structural/Performance | Needs Testing |
| 2 | Row-oriented storage is appropriate for analytics queries that typically scan columns across millions of rows | Structural/Architecture | Risky |
| 3 | Query latency at P95/P99 will remain acceptable as the table grows past 100M, 500M, 1B rows without significant partitioning or archival strategy | Structural/Scale | Risky |
| 4 | The events have a fixed or slowly-evolving schema that fits relational modeling (as opposed to semi-structured/nested event payloads requiring JSON/document storage) | Structural/Data Model | Needs Testing |
| 5 | "Real-time" means dashboard-refresh latency (seconds to minutes), not sub-second streaming analytics | Structural/Requirements | Risky |
| 6 | Connection pooling (PgBouncer/pgpool) can handle the concurrent connections from both ingestion workers and analytics queries without contention | Structural/Infrastructure | Needs Testing |
| 7 | Index maintenance overhead on high-write tables will not degrade ingestion throughput over time | Structural/Performance | Needs Testing |
| 8 | The analytics workload does not require window functions, time-series aggregations, or materialized views at a scale where PostgreSQL's planner becomes a bottleneck | Structural/Performance | Risky |

*Pattern: AI assumptions are structural -- they concern performance boundaries, architectural fit (row vs. columnar), scale ceilings, and requirement ambiguity.*

### (c) Found by Both

| # | Assumption | Type | Risk Level |
|---|-----------|------|------------|
| 1 | PostgreSQL is a reliable, well-supported database suitable for production workloads | General/Infrastructure | Reasonable |
| 2 | The team has existing PostgreSQL operational knowledge (backups, monitoring, upgrades) | Team/Operational | Reasonable |

### (d) Emerged During Merge

| # | Assumption | Triggered By | Risk Level |
|---|-----------|-------------|------------|
| 1 | The decision to use PostgreSQL implicitly assumes that the ingestion path and the query path can share the same database instance -- but high-write ingestion and complex analytical reads create I/O contention that may require read replicas or CQRS separation that was never discussed | (a2) "good enough" + (b1) write throughput + (b6) connection pooling | Risky |
| 2 | The team assumes that "starting simple with PostgreSQL" means they can migrate to a specialized store later -- but the migration cost grows with data volume, and by the time PostgreSQL shows strain (200M+ rows), the migration is a major project, not a weekend task | (a3) migration timing + (b3) scale ceiling | Needs Testing |
| 3 | Nobody asked whether 10M events/day is the current volume or the projected volume -- if this is the 12-month projection, the system may need to handle 50-100M events/day at maturity, which changes the architecture entirely | (b1) write throughput + (b5) "real-time" definition | Risky |

---

## Risk Assessment

| Assumption | Category | Risk Level | If Wrong, Impact | Testable? | Test Method |
|-----------|----------|------------|-----------------|-----------|-------------|
| Row-store for analytics | (b) | Risky | 10-100x slower aggregation queries vs. columnar store; unacceptable dashboard latency | Yes | Benchmark same queries on PostgreSQL vs. ClickHouse/DuckDB with 10M rows |
| "Real-time" definition | (b) | Risky | If sub-second is required, PostgreSQL cannot deliver without streaming layer (Kafka + materialized views) | Yes | Get stakeholder sign-off on latency SLA: <1s, <5s, or <60s |
| I/O contention (ingestion vs. queries) | (d) | Risky | Write throughput degrades analytics queries; analytics queries block ingestion under load | Yes | Load test: simulate 115 writes/sec + concurrent analytics queries, measure P99 latency |
| Scale ceiling at 500M+ rows | (b) | Risky | Queries time out; partitioning adds complexity; operational burden exceeds team capacity | Partial | Project row growth over 18 months; benchmark query perf at 100M, 500M rows |
| Migration cost grows with volume | (d) | Needs Testing | Team gets locked into PostgreSQL past the point of easy migration | Yes | Estimate migration effort now vs. at 500M rows; document escape plan |
| Volume growth trajectory | (d) | Risky | Architecture built for 10M fails at 50M; requires re-architecture under pressure | Yes | Get product team's 12-month and 24-month volume projections |
| Index maintenance overhead | (b) | Needs Testing | Ingestion slows as table grows; requires index tuning cycle every few months | Yes | Monitor pg_stat_user_indexes after 30 days of production write load |
| Event schema stability | (b) | Needs Testing | Frequent schema changes cause migration burden and break downstream queries | Yes | Audit event schemas from last 6 months for change frequency |

### Critical Path Assumptions

These 4 assumptions, if wrong, would invalidate the PostgreSQL choice:

1. **Row-store fitness for analytical queries** -- If the primary workload is column-scanning aggregations across millions of rows, PostgreSQL will be 10-100x slower than columnar alternatives. This is architectural, not tunable.
2. **"Real-time" latency definition** -- If stakeholders expect sub-second streaming, PostgreSQL is the wrong tool entirely. This is a requirements failure, not a technology failure.
3. **I/O contention between ingestion and analytics** -- If both share one instance and neither can tolerate degradation, the architecture needs CQRS separation from day one.
4. **Volume growth to 50-100M events/day** -- If 10M is the starting point, not the ceiling, the team is designing for today's load and will hit a wall.

### Recommended Test Sequence

1. **Define "real-time" latency SLA with stakeholders (1 day)** -- This is a conversation, not engineering. If the answer is <1 second, stop and reconsider the architecture. Binary gate.
2. **Benchmark: PostgreSQL vs. columnar store (3 days)** -- Load 10M rows into both PostgreSQL and ClickHouse/DuckDB. Run the 5 most common analytics queries. Compare P50/P95/P99. This determines architectural viability.
3. **Load test: concurrent ingestion + queries (3 days, parallel with #2)** -- Simulate 115 writes/sec + 10 concurrent analytics queries. Measure write latency, query latency, and I/O wait. Covers (d1), (b1), (b6).
4. **Get volume projections from product (1 day, parallel)** -- 12-month and 24-month event volume. Covers (d3).
5. **Scale projection test (1 week, after #2)** -- Extrapolate benchmark results to 100M, 500M rows. Add partitioning and re-test. Covers (b3).

---

## Contextual vs. Structural Pattern

**Human assumptions** (category a): Three items, all contextual -- driven by team familiarity ("we know Postgres"), cognitive heuristic ("it handles everything else"), and temporal bias ("we can switch later"). These are the assumptions that feel like common sense but may not survive contact with scale.

**AI assumptions** (category b): Eight structural items covering performance boundaries (write throughput, index overhead), architectural mismatch (row vs. columnar for analytics), scale ceilings (500M+ rows), requirement ambiguity ("real-time"), and infrastructure contention (connection pooling). These are the invisible load-bearing walls of the decision.

**Emerged assumptions** (category d): Three items surfacing from the tension between "start simple" and "scale demands" -- particularly the I/O contention that comes from sharing read and write workloads, and the migration cost that grows silently with data volume.
