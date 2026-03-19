# Auditing Assumptions: PostgreSQL for Real-Time Analytics

You're making several assumptions that are worth examining:

## Performance Assumptions

- **Write throughput**: 10M events/day is about 115 writes per second on average, but you need to think about peak loads. If traffic is bursty (say 10x during peak hours), you're looking at 1,150 writes/second. PostgreSQL can handle this, but it depends heavily on your schema, indexes, and hardware.

- **Query performance**: PostgreSQL is a row-oriented database. Analytics queries that scan millions of rows to compute aggregates will be slower than columnar databases like ClickHouse or BigQuery. Are you running dashboards or ad-hoc queries?

- **Scale**: What happens at 100M rows? 1B rows? You'll need a partitioning strategy. Have you thought about data retention and archival?

## Architecture Assumptions

- **Single database**: Are you planning to use the same PostgreSQL instance for both ingestion and analytics? These are competing workloads. Heavy analytics queries will block writes and vice versa.

- **"Real-time" definition**: What does "real-time" mean for your use case? Sub-second streaming? Dashboard refresh every 30 seconds? Hourly reports? This changes the architecture dramatically.

- **Schema design**: Do your events have a consistent schema, or are they semi-structured JSON? PostgreSQL handles JSON but not as efficiently as document stores.

## Operational Assumptions

- **Team expertise**: PostgreSQL is well-known, which is a real advantage. But analytics-at-scale PostgreSQL is different from application PostgreSQL. You may need specialized knowledge for partitioning, vacuuming, and index management.

- **Connection management**: At scale, you'll need PgBouncer or similar. Have you accounted for this?

## Alternatives to Consider

- **ClickHouse** or **TimescaleDB** for time-series analytics
- **CQRS pattern**: PostgreSQL for ingestion, replicate to analytics-optimized store
- **Materialized views** for pre-computed aggregations

## Recommended Next Steps

1. Define your latency requirements precisely
2. Benchmark your actual query patterns against 10M rows
3. Test under concurrent read/write load
4. Plan for 10x growth from day one

The choice isn't necessarily wrong -- PostgreSQL is capable -- but "capable" and "optimal" are different things. The key risk is that you'll invest 6 months building on PostgreSQL and then need to migrate under pressure when performance degrades.
