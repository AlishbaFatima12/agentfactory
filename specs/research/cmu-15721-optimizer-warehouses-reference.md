# CMU 15-721 Reference: Query Optimizers and Production Data Warehouses

Synthesized from CMU 15-721 Advanced Database Systems (Spring 2024) lectures 13-22 and the course's required reading papers. This document covers query optimizer architectures, cost models, cardinality estimation, join ordering, adaptive query processing, and deep dives into six production analytical systems.

---

## 1. Query Optimizer Architectures

### Overview of the Optimization Problem

A query optimizer transforms a declarative SQL query into an efficient physical execution plan. The search space includes:
- **Logical equivalences**: Different algebraic representations of the same query (e.g., join reordering, predicate pushdown, subquery decorrelation)
- **Physical alternatives**: Different algorithms for each operator (hash join vs sort-merge join vs nested loop, hash aggregate vs sort aggregate)
- **Access methods**: Sequential scan, index scan, index-only scan
- **Data properties**: Sort orders, partitioning, interesting orders

**Key paper**: "An Overview of Query Optimization in Relational Systems" (Chaudhuri, PODS 1998)

### System R Optimizer (1979)

The original cost-based optimizer. Key concepts:
- **Bottom-up dynamic programming**: Enumerate all join orderings, keeping only the cheapest plan for each set of joined relations
- **Interesting orders**: Track sort orders through the plan because a "more expensive" plan that produces sorted output may enable a cheaper merge join upstream
- **Two-phase optimization**: First enumerate logical alternatives, then select physical operators
- **Limitation**: Only considers left-deep join trees (no bushy plans), limited to inner joins

### The Cascades Framework

**Paper**: "The Cascades Framework for Query Optimization" (Graefe, IEEE Data Engineering Bulletin, 1995)

**Evolution**: Volcano (1993) -> Cascades (1995). Cascades fixed Volcano's inefficiencies.

**Core data structures**:

**MEMO (search space representation)**:
```
Group 0: {Scan(R), IndexScan(R, idx_a)}
Group 1: {Scan(S), IndexScan(S, idx_b)}
Group 2: {Join(G0, G1), Join(G1, G0)}   ← logical equivalences
         {HashJoin(G0, G1, ...), MergeJoin(G0, G1, ...)}  ← physical alternatives
```

- **Groups**: Sets of logically equivalent expressions (both logical and physical)
- **Group expressions**: Multi-expressions within a group, each representing one way to compute the group's result
- **Winners**: Best physical expression for each required physical property (sort order, distribution)

**Rule-based exploration**:
- **Transformation rules**: Logical → logical (e.g., join commutativity, associativity)
- **Implementation rules**: Logical → physical (e.g., logical join → hash join, merge join)
- Rules have patterns and substitutes; applied lazily on demand

**Top-down search with memoization**:
1. Start from root group
2. Explore group only when needed (demand-driven)
3. Apply transformation rules to discover logical equivalences
4. Apply implementation rules to find physical alternatives
5. Recursively optimize child groups with required physical properties
6. Memoize results to avoid redundant work

**Cost-based pruning**: Upper bound propagation prunes branches that cannot beat current best plan.

**Advantages over System R**:
- Handles bushy join trees
- Extensible via new rules
- Lazy exploration avoids wasted work
- Physical properties integrated into search
- Supports arbitrary operator types

**Adopted by**: SQL Server (original implementation), Greenplum/Orca, CockroachDB, Apache Calcite (adapted).

### Apache Calcite

**Paper**: "Apache Calcite: A Foundational Framework for Optimized Query Processing Over Heterogeneous Data Sources" (Begoli et al., SIGMOD 2018)

**Architecture**: Modular optimizer framework usable by any data processing system.

**Key components**:
- **Relational algebra core**: Standard operators (scan, filter, project, join, aggregate, sort, union, etc.)
- **Rule engine**: Hundreds of built-in optimization rules, plus custom rules per system
- **Adapter architecture**: Pluggable adapters for different data sources (JDBC, Elasticsearch, Kafka, CSV, etc.)
- **Traits**: Represent physical properties (calling convention, sort order, distribution). A trait tells Calcite which engine will execute a particular plan fragment.
- **Cost model**: Pluggable cost model; default uses row count and CPU cost

**Federated query optimization**: Traits enable transparent cross-engine query optimization. Calcite can generate plans that span multiple backends, pushing appropriate work to each.

**Used by**: Apache Hive, Apache Flink, Apache Druid, Apache Storm, Apache Beam, MapD, and 20+ systems.

### Orca (Greenplum/Pivotal)

**Paper**: "Orca: A Modular Query Optimizer Architecture for Big Data" (Soliman et al., SIGMOD 2014)

**Design goals**: Portable optimizer decoupled from any specific database engine.

**Architecture**:
- Cascades-based search engine
- DXL (Data eXchange Language): XML-based communication between optimizer and database
- Metadata Provider: Abstract interface for statistics and catalog information
- Separate process from the database engine (communicates via DXL)

**Key innovations**:
- **Portability**: Same optimizer used across Greenplum, HAWQ, and other systems
- **Testability**: Standalone optimizer can be unit-tested with synthetic metadata
- **Extensibility**: New rules and operators added without modifying core search engine

**Performance**: Produces similar or better plans than the previous Greenplum planner for 80% of queries.

---

## 2. Cost Estimation and Cardinality Estimation

### The Cardinality Estimation Problem

**Paper**: "How Good Are Query Optimizers, Really?" (Leis et al., VLDB 2015)

**Key finding**: Cardinality estimation errors dominate optimizer quality. Cost model inaccuracies are secondary.

**Join Order Benchmark (JOB)**: 113 complex queries on IMDB data (real-world, correlated data). Results:
- All production cardinality estimators routinely produce large errors (often 1000x or more)
- Errors compound multiplicatively across joins
- Simply swapping predicates can change estimates from 3 to 310 for a true cardinality of 2600
- Exhaustive join enumeration (DP) still helps despite bad estimates
- Cost models have much less impact than cardinality estimates on final plan quality

### Traditional Cardinality Estimation

**Histograms**:
- Equi-width: Fixed-width buckets. Simple but poor for skewed data.
- Equi-depth: Each bucket has ~same number of tuples. Better for skew.
- Compressed: Dedicated buckets for high-frequency values, equi-depth for rest.
- Multi-dimensional histograms: Capture correlations but exponential space.
- **Limitation**: Independence assumption between columns. Real data has correlations.

**Sampling**:
- Random sample of base tables maintained for estimation
- Apply query predicates to sample, scale up result
- **Limitation**: Rare values underrepresented; join estimation from samples is unreliable
- **Two-Level Sampling** (Chen et al., SIGMOD 2017): Correlated sampling for join size estimation

**Sketches**:
- HyperLogLog: Cardinality (distinct count) estimation
- Count-Min Sketch: Frequency estimation
- Bloom filters: Membership testing

### Learned Cardinality Estimation

**Deep Unsupervised Cardinality Estimation** (Yang et al., VLDB 2019): Uses deep autoregressive models to learn the joint probability distribution over table columns. Estimates cardinality by evaluating P(predicates) on the learned distribution.

**LEO (DB2's LEarning Optimizer)** (Stillger et al., VLDB 2001): Monitors actual query execution cardinalities and feeds them back to improve future estimates. A feedback-driven approach.

**Neo: A Learned Query Optimizer** (Marcus et al., VLDB 2019):
- Uses deep neural networks to generate complete query execution plans
- Tree convolution captures local plan structure (parent-child operator relationships)
- Bootstraps from traditional optimizer plans, then improves via reinforcement learning
- Row vectors featurize query predicates using actual data distributions
- Can match or exceed commercial optimizer performance on specific workloads

**An End-to-End Learning-based Cost Estimator** (Sun et al., VLDB 2019): Learns cost models directly from observed query executions rather than hand-tuned formulas.

### Cost Model Components

Traditional cost models estimate:

```
Cost(plan) = CPU_cost + I/O_cost + Network_cost + Memory_cost

Where:
  CPU_cost = f(cardinality, operator_type, expression_complexity)
  I/O_cost = f(pages_read, sequential_vs_random, buffer_pool_hit_rate)
  Network_cost = f(data_volume, partition_strategy, number_of_nodes)
  Memory_cost = f(hash_table_size, sort_buffer, spill_probability)
```

**Join size estimation**: |R ⋈ S| estimated using:
- Independence assumption: |R| * |S| / max(V(R,a), V(S,a)) where V is distinct values
- Histograms: Bucket-level join estimation
- Sampling: Join sample of R with sample of S (unreliable for rare join keys)

---

## 3. Join Ordering Algorithms

### Dynamic Programming Approaches

**System R style (DPsize)**:
- Enumerate subsets by size: size 1, then 2, then 3, ...
- For each subset, consider all ways to partition into two joined subsets
- Keep cheapest plan per subset per interesting order
- Time: O(3^n) where n = number of relations
- Only considers left-deep trees in original; extended for bushy trees

**DPccp (Connected subgraph Complement Pairs)**:
- Enumerates only connected subgraph pairs (avoids cross products)
- More efficient than DPsize for sparse join graphs
- Cannot handle complex (non-binary) join predicates

**DPhyp (Moerkotte & Neumann, SIGMOD 2008)**:
```
Key innovation: Handle hypergraph join predicates

Traditional DP assumes binary join predicates: R.a = S.b
Real queries have complex predicates: R.a = S.b AND S.c = T.d (hyperedge)

DPhyp models the join graph as a hypergraph where hyperedges can connect
more than two vertices. Enumerate connected subgraph complement pairs on
the hypergraph.

Result: 2x faster than DPsize on real queries. Handles all join types
(inner, outer, semi, anti) and complex predicates.
```

**Paper**: "Dynamic Programming Strikes Back" (Moerkotte & Neumann, SIGMOD 2008)

### Heuristic Join Ordering

When n is too large for DP (typically n > 15-20):
- **Greedy**: At each step, join the two relations with smallest estimated result
- **Linearization**: Convert bushy plan to left-deep via heuristics
- **Simulated annealing**: Random perturbations with probabilistic acceptance
- **Genetic algorithms**: Evolve plans through crossover and mutation

**The Complete Story of Joins (in HyPer)** (Neumann et al., BTW 2017): Describes how HyPer handles all join types (inner, left outer, right outer, full outer, semi, anti, single, mark, group) within a unified optimization framework using DPhyp.

---

## 4. Subquery Unnesting

### The Problem

Correlated subqueries execute the inner query once per outer tuple (nested loop). This is often catastrophically slow.

```sql
-- Correlated subquery (slow)
SELECT * FROM orders o
WHERE o.amount > (SELECT AVG(amount) FROM orders o2 WHERE o2.customer_id = o.customer_id)

-- Decorrelated equivalent (fast)
SELECT o.* FROM orders o
JOIN (SELECT customer_id, AVG(amount) as avg_amt FROM orders GROUP BY customer_id) a
ON o.customer_id = a.customer_id
WHERE o.amount > a.avg_amt
```

### Unnesting Arbitrary Queries

**Paper**: "Unnesting Arbitrary Queries" (Neumann & Kemper, BTW 2015)

**Key insight**: Evaluate the subquery once for all possible bindings of free variables simultaneously, rather than once per outer tuple.

**General approach**:
1. Identify free variables (outer references) in the subquery
2. Compute the domain of free variable bindings from the outer query
3. Join the domain with the subquery (dependent join → independent join)
4. Use the result to replace the correlated subquery

**Handles**:
- EXISTS/NOT EXISTS → semi-join/anti-join
- Scalar subqueries → left outer join with aggregation
- IN/NOT IN → semi-join/anti-join with null handling
- Lateral joins → dependent join decorrelation
- Arbitrary nesting depth → recursive application

**Improvements**: "Improving Unnesting of Complex Queries" (Neumann, BTW 2025) refines the approach for more complex patterns, implemented in DuckDB.

---

## 5. Adaptive and Robust Query Processing

### The Robustness Problem

Cardinality estimation errors cause suboptimal plans. Three approaches to handle this:

### 1. Robust Plan Selection

**Paper**: "Looking Ahead Makes Query Plans Robust" (Zhu et al., VLDB 2017)

**Lookahead Information Passing (LIP)**:
- Pass Bloom filters from dimension tables in star joins
- Before probing hash table (expensive DRAM access), check Bloom filter (cheap cache access)
- Guarantees near-optimal performance regardless of join order for star schema queries
- Works because Bloom filter probes eliminate most non-matching tuples early

### 2. Adaptive Query Processing

**Adaptive Query Processing at CMU** (Babu et al., CIDR 2015):
- Monitor actual cardinalities during execution
- If significantly different from estimates, re-optimize remaining plan
- Challenge: partial results already computed; must integrate with new plan

**Plan Stitch** (Ding et al., VLDB 2018): Combines sub-plans from different optimization runs to create better hybrid plans without re-executing completed portions.

### 3. Learned Optimization

**Neo** (Marcus et al., VLDB 2019): End-to-end learned optimizer using deep reinforcement learning. Bootstraps from traditional optimizer, then improves.

---

## 6. System Deep Dives

### Google BigQuery / Dremel

**Papers**:
- "Dremel: Interactive Analysis of Web-Scale Datasets" (Melnik et al., VLDB 2010)
- "Dremel: A Decade of Interactive SQL Analysis at Web Scale" (Melnik et al., VLDB 2020)

**Architecture**:
```
┌─────────────────────────────────────────────┐
│          Cloud Services Layer               │
│  (Query coordinator, optimizer, scheduler)  │
└──────────────────┬──────────────────────────┘
                   │ Query DAG
┌──────────────────▼──────────────────────────┐
│          Shuffle Layer (Jupiter network)     │
│  (Distributed data exchange between stages) │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│          Compute Layer (Dremel workers)      │
│  (Dynamically allocated "slots")            │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│          Storage Layer (Colossus/GFS)        │
│  Capacitor columnar format on Colossus      │
└─────────────────────────────────────────────┘
```

**Key innovations**:
1. **Capacitor columnar format**: Replaced ColumnIO (2016). Operates directly on compressed data without decompression. Each column stored in separate file for independent access.
2. **Multi-level serving tree**: Root server → intermediate servers → leaf servers. Aggregation pushed down tree levels. Originally tree-based, evolved to DAG-based shuffle architecture.
3. **Nested/semi-structured data**: Native support for Protocol Buffer/JSON-style nested records via definition and repetition levels. Columnar encoding of nested structures without flattening.
4. **Dynamic slot allocation**: Slots (compute units) allocated on-demand per query. Single user can get thousands of slots. Fair scheduling across concurrent users.
5. **Disaggregated architecture**: Complete separation of storage (Colossus) and compute (Dremel workers). No data locality assumptions.
6. **Shuffle persistence layer**: Intermediate results persisted to enable fault tolerance and dynamic re-parallelization mid-query.

**Performance characteristics**:
- Interactive latency for ad-hoc queries over petabyte-scale data
- Automatic scaling based on query complexity
- Multi-tenancy with fair resource sharing

### Databricks / Photon / Spark SQL

**Papers**:
- "Photon: A Fast Query Engine for Lakehouse Systems" (Behm et al., SIGMOD 2022)
- "Delta Lake: High-Performance ACID Table Storage over Cloud Object Stores" (Armbrust et al., VLDB 2020)
- "Analyzing and Comparing Lakehouse Storage Systems" (Jain et al., CIDR 2023)

**Architecture**:
```
┌──────────────────────────────────┐
│   Spark SQL / DataFrame API      │  ← User-facing SQL or DataFrame
└──────────┬───────────────────────┘
           │
┌──────────▼───────────────────────┐
│   Catalyst Optimizer              │  ← Rule-based + cost-based
│   (Analysis → Logical → Physical) │     optimization
└──────────┬───────────────────────┘
           │ Physical Plan
┌──────────▼───────────────────────┐
│   Photon Engine (C++)             │  ← Vectorized execution
│   OR Spark JVM Engine             │     (partial coverage)
└──────────┬───────────────────────┘
           │
┌──────────▼───────────────────────┐
│   Delta Lake Table Format         │  ← ACID transactions on
│   on Cloud Object Store           │     Parquet files in S3/ADLS/GCS
└──────────────────────────────────┘
```

**Photon engine details**:
- Native C++ vectorized execution engine, compiled into shared library
- Runs single-threaded within Spark executor JVM processes (avoids GC)
- **Interpreted vectorization** (not code generation) -- chosen for debuggability and adaptivity
- Column batches with position lists for filter tracking (no data movement on selection)
- Vectorized hash table: 3-step lookup (hash → probe via gather → compare column-by-column)
- Runtime adaptivity: Kernels specialize based on batch characteristics (null presence, active row density, ASCII-only strings)
- Integration via Catalyst optimizer rule: converts Spark physical plan nodes to Photon equivalents
- Adapter nodes convert between Spark's row format and Photon's columnar format
- Graceful fallback: unsupported operations execute in Spark JVM engine

**Performance**: 3x average speedup, up to 10x maximum. Set 100TB TPC-DS world record (Nov 2021).

**Delta Lake**:
- ACID transactions on Parquet files via transaction log stored in same object store
- Time travel (query historical snapshots)
- Schema enforcement and evolution
- Optimistic concurrency control
- Z-ordering for multi-dimensional clustering
- Data skipping via file-level statistics
- MERGE/UPDATE/DELETE operations on immutable Parquet files (copy-on-write + merge-on-read)

### Snowflake

**Papers**:
- "The Snowflake Elastic Data Warehouse" (Dageville et al., SIGMOD 2016)
- "Building An Elastic Query Engine on Disaggregated Storage" (Vuppalapati et al., NSDI 2022)

**Architecture (three layers)**:
```
┌──────────────────────────────────────┐
│       Cloud Services Layer           │
│  • Query optimizer & planner         │
│  • Transaction manager (MVCC/SI)     │
│  • Metadata management               │
│  • Security & access control         │
│  • Result cache (24h, query-level)   │
└──────────────┬───────────────────────┘
               │
┌──────────────▼───────────────────────┐
│       Virtual Warehouses             │
│  • Independent MPP compute clusters  │
│  • Local SSD cache (hot data)        │
│  • Isolated (no resource sharing)    │
│  • Independently scalable            │
│  • Auto-suspend/resume               │
└──────────────┬───────────────────────┘
               │
┌──────────────▼───────────────────────┐
│       Data Storage                   │
│  • Cloud object store (S3/ADLS/GCS)  │
│  • Immutable micro-partitions        │
│  • Columnar PAX format, compressed   │
│  • 50-500MB per micro-partition      │
└──────────────────────────────────────┘
```

**Key innovations**:

1. **Micro-partitions**: All table data automatically divided into immutable, compressed columnar files (50-500MB). No user-managed partitioning. Metadata includes min/max per column, distinct count, null count.

2. **Pruning**: Query optimizer uses micro-partition metadata to skip irrelevant files. Analogous to zone maps but at file granularity. Extremely effective for range/equality filters on clustered columns.

3. **Virtual warehouse isolation**: Each VW is an independent MPP cluster. Multiple VWs can query the same data simultaneously without interference. Enables workload isolation (ETL vs BI vs ad-hoc).

4. **Elastic scaling**: VWs can be resized (more/fewer nodes) or multiplied (multi-cluster warehouses for concurrency). Auto-suspend after inactivity. Auto-resume on query arrival.

5. **Time travel**: Query data as of any point in the past (up to 90 days). Implemented via retention of old micro-partition versions.

6. **Semi-structured data**: VARIANT data type stores JSON/Avro/XML/Parquet natively. Automatic schema detection and columnar extraction for frequently accessed paths.

7. **Result caching**: Cloud services layer caches query results for 24 hours. Exact query match + unchanged underlying data = instant response (no compute cost).

8. **MVCC / Snapshot Isolation**: Readers never block writers. Each transaction sees consistent snapshot. Write conflicts resolved at commit time.

### DuckDB

**Papers**:
- "DuckDB: an Embeddable Analytical Database" (Raasveldt & Muhleisen, SIGMOD 2019)
- "Data Management for Data Science: Towards Embedded Analytics" (Raasveldt & Muhleisen, CIDR 2020)
- "MotherDuck: DuckDB in the cloud and in the client" (Atwal et al., CIDR 2024)

**Architecture**:
```
┌──────────────────────────────────┐
│  Client API (C/C++/Python/R/...) │  ← In-process, no client-server
└──────────────┬───────────────────┘
               │
┌──────────────▼───────────────────┐
│  Parser → Binder → Optimizer     │  ← PostgreSQL-compatible SQL
└──────────────┬───────────────────┘
               │
┌──────────────▼───────────────────┐
│  Vectorized Execution Engine     │  ← Vectors of 2048 tuples
│  (Push-based, morsel-driven)     │     DataChunks = collections of Vectors
└──────────────┬───────────────────┘
               │
┌──────────────▼───────────────────┐
│  Buffer Manager + Storage        │  ← Single-file database
│  (PAX row groups, 120K tuples)   │     Out-of-core capable
└──────────────────────────────────┘
```

**Key innovations**:

1. **In-process architecture**: Embedded in application process (like SQLite). No separate server. No IPC overhead. Direct memory access to application data.

2. **Vectorized execution**: Standard vector size of 2048 tuples. DataChunk = collection of Vectors (one per column). Evolved from pull-based GetChunk to push-based execution for better handling of complex plans.

3. **Morsel-driven parallelism**: Pipelines divided into morsels (~100K rows). Worker threads process entire pipelines on their morsels. Thread-local hash tables for aggregation, merged in parallel combine phase. NUMA-aware scheduling.

4. **Unified buffer manager**: Controls all process memory. Flexible allocation between cached pages and operator working memory. Transparent spilling to disk when memory exceeded. No separate buffer pool vs sort buffer vs hash table memory.

5. **Out-of-core processing**: Hash joins, aggregations, sorts, and window functions can spill to disk transparently. Custom page layout for temporary data avoids serialization overhead.

6. **Storage format**: Single-file database. PAX layout within row groups (120K tuples per group). Column-specific encoding: dictionary, RLE, FSST (strings), bitpacking, constant. Zone maps (min/max) per column segment for predicate pushdown.

7. **Zero-copy Arrow integration**: Native Apache Arrow support. Can query Python DataFrames, Polars frames, and Arrow tables without copying data. `SELECT * FROM my_pandas_df` works directly.

8. **Extension system**: Dynamic extensions for file formats (Parquet, CSV, JSON, Iceberg, Delta Lake), remote storage (httpfs, S3), external databases (postgres_scanner, sqlite_scanner, mysql_scanner), spatial data, and full-text search. Auto-loading on demand.

9. **MVCC with single-writer**: Snapshot isolation. One write transaction at a time (multi-reader). Undo buffers for version management. WAL for durability.

10. **Optimizer**: Rule-based + cost-based. Statistics propagation through plan. Predicate pushdown, join reordering (DPhyp-based), common subexpression elimination, filter pullup. Uses zone maps for scan pruning.

**Design philosophy**: "SQLite for OLAP" -- bring analytics to the data rather than moving data to a server. Optimized for single-machine, multi-core execution.

### Yellowbrick

**Paper**: "Yellowbrick: An Elastic Data Warehouse on Kubernetes" (Cusack et al., CIDR 2024)

**Architecture**:
```
┌──────────────────────────────────────┐
│    SQL Interface                      │
│    (Users never see Kubernetes)       │
└──────────────┬───────────────────────┘
               │
┌──────────────▼───────────────────────┐
│    Control Plane                      │
│    • Kubernetes orchestration         │
│    • Auto-scaling                     │
│    • Multi-cloud (EKS/GKE/AKS)       │
└──────────────┬───────────────────────┘
               │
┌──────────────▼───────────────────────┐
│    Compute Pods                       │
│    • MPP query execution              │
│    • Containerized workers            │
│    • Independent scaling              │
└──────────────┬───────────────────────┘
               │
┌──────────────▼───────────────────────┐
│    Storage (Separate from Compute)    │
│    • Cloud object store               │
│    • Local SSD caching                │
└──────────────────────────────────────┘
```

**Key innovations**:

1. **Kubernetes-native**: Entire data warehouse runs on Kubernetes. Microservices packaged as Linux containers. Kubernetes provides orchestration, resilience, auto-healing.

2. **SQL abstraction over Kubernetes**: Users interact only with SQL. No Kubernetes knowledge required. No helm charts, pods, or configuration files exposed to end users. This is a key differentiator from other K8s-based systems.

3. **Hybrid cloud deployment**: Same software runs on cloud (EKS, GKE, AKS) and on-premises (Kubernetes on Yellowbrick hardware). Enables hybrid architectures.

4. **Elastic compute**: Separate storage and compute. Fully elastic clusters can scale independently. Sub-second query latency at multi-petabyte scale.

5. **Portability**: Kubernetes abstraction provides cloud portability without vendor lock-in.

### Amazon Redshift

**Papers**:
- "Amazon Redshift Re-Invented" (Armenatzoglou et al., SIGMOD 2022)
- "Amazon Redshift and the Case for Simpler Data Warehouses" (Gupta et al., SIGMOD 2015)

**Architecture**:
```
┌─────────────────────────────────────────────┐
│    Leader Node                               │
│    • SQL parsing & optimization              │
│    • Query plan distribution                 │
│    • Result aggregation                      │
│    • Metadata & catalog                      │
└──────────────┬──────────────────────────────┘
               │ Compiled C++ code segments
┌──────────────▼──────────────────────────────┐
│    Compute Nodes (RA3 instances)            │
│    • Local SSD cache (hot data)             │
│    • Code generation engine                 │
│    • SIMD-vectorized scans                  │
└──────────────┬──────────────────────────────┘
               │
┌──────────────▼──────────────────────────────┐
│    Redshift Managed Storage (RMS)           │
│    • Tiered: Memory → SSD → S3             │
│    • 11 nines durability                    │
│    • Multi-AZ                               │
│    • Zone maps per block                    │
└──────────────┬──────────────────────────────┘
               │
┌──────────────▼──────────────────────────────┐
│    AQUA (Advanced Query Accelerator)        │
│    • FPGA + Nitro ASIC acceleration         │
│    • Push-down scans & aggregations         │
│    • Off-cluster caching layer              │
└─────────────────────────────────────────────┘
```

**Key innovations**:

1. **Code Generation + Compilation-as-a-Service**:
   - Generates query-specific C++ code compiled into binary segments
   - Each segment = pipeline of operators ("steps")
   - **Compilation-as-a-Service**: External microservice caches compiled objects across clusters
   - Eliminates redundant compilation for recurring query patterns
   - SIMD-vectorized scan layer with precompiled functions for all data types and compression schemes

2. **AQUA (Advanced Query Accelerator)**:
   - Hardware acceleration layer using FPGAs + AWS Nitro ASICs
   - Caches hot data on local SSDs in a separate layer
   - Pushes scan, filter, and aggregation operations to AQUA nodes
   - Up to 10x speedup for scan-heavy queries with LIKE/SIMILAR_TO predicates
   - FPGA-accelerated compression and encryption

3. **Redshift Managed Storage (RMS)**:
   - Three-tier: in-memory caches → local SSDs → Amazon S3
   - Data organized as "data slices" stored in logical block chains
   - Indexed via superblock headers and zone maps
   - Incremental commit protocol (only changes since last commit)
   - Elastic resize: change node count in minutes without data reshuffling
   - 99.999999999% durability, 99.99% availability (multi-AZ)

4. **Concurrency Scaling**:
   - Dynamically attaches additional compute clusters when primary is saturated
   - Single endpoint for users; transparent routing
   - Additional clusters rehydrate data from S3 as needed
   - Linear performance scaling with concurrent clients

5. **Automatic Table Optimization (ATO)**:
   - Analyzes query execution metadata
   - Automatically recommends and applies distribution keys and sort keys
   - Builds weighted join graphs from workload, selects keys minimizing network cost

6. **Automatic Workload Management (AutoWLM)**:
   - ML models predict query resource requirements
   - Queuing theory to balance concurrent execution
   - Prevents over-saturation while minimizing latency

7. **Materialized View Automation**:
   - Incremental maintenance for filters, projections, grouping, and joins
   - Automatic timing decisions for refresh
   - Query rewriting to transparently leverage MVs over base tables

8. **Serverless**:
   - Automated provisioning, sizing, and scaling
   - Pay only for seconds with queries running
   - No cluster management required

9. **MVCC**: Serializable isolation. Readers never block. Writers only blocked by other writers.

10. **Additional features**:
    - **Redshift Spectrum**: Query open formats (Parquet, ORC, Avro) in S3 directly
    - **Federated Query**: In-place querying of Aurora PostgreSQL/MySQL and DynamoDB
    - **SUPER data type**: Semi-structured JSON without predefined schema
    - **Cross-cluster data sharing**: Secure metadata-based sharing between clusters
    - **Smart warmpools**: Pre-configured EC2 instances for fast node replacement
    - **Gray failure detection**: ML-based outlier detection for degraded hardware

---

## Key Papers Index

| # | Title | Authors | Venue | Year | Key Contribution |
|---|-------|---------|-------|------|-----------------|
| 1 | An Overview of Query Optimization in Relational Systems | Chaudhuri | PODS | 1998 | Survey of optimizer foundations |
| 2 | The Cascades Framework for Query Optimization | Graefe | IEEE DE Bulletin | 1995 | Extensible top-down optimizer framework |
| 3 | How Good Are Query Optimizers, Really? | Leis et al. | VLDB | 2015 | JOB benchmark, cardinality estimation dominates |
| 4 | Dynamic Programming Strikes Back | Moerkotte, Neumann | SIGMOD | 2008 | DPhyp algorithm for hypergraph join ordering |
| 5 | Unnesting Arbitrary Queries | Neumann, Kemper | BTW | 2015 | General subquery decorrelation |
| 6 | The Complete Story of Joins (in HyPer) | Neumann et al. | BTW | 2017 | Unified framework for all join types |
| 7 | Looking Ahead Makes Query Plans Robust | Zhu et al. | VLDB | 2017 | LIP: Bloom filter passing for robust star joins |
| 8 | Neo: A Learned Query Optimizer | Marcus et al. | VLDB | 2019 | Deep RL for query plan generation |
| 9 | Plan Stitch | Ding et al. | VLDB | 2018 | Combining sub-plans from different optimizations |
| 10 | Apache Calcite | Begoli et al. | SIGMOD | 2018 | Modular optimizer framework for heterogeneous sources |
| 11 | Orca: Modular Query Optimizer for Big Data | Soliman et al. | SIGMOD | 2014 | Portable Cascades-based optimizer |
| 12 | Dremel: Interactive Analysis of Web-Scale Datasets | Melnik et al. | VLDB | 2010 | Original Dremel paper |
| 13 | Dremel: A Decade of Interactive SQL Analysis | Melnik et al. | VLDB | 2020 | BigQuery evolution, Capacitor, shuffle |
| 14 | Photon: A Fast Query Engine for Lakehouse Systems | Behm et al. | SIGMOD | 2022 | Vectorized C++ engine for Spark/Databricks |
| 15 | Delta Lake: High-Performance ACID Table Storage | Armbrust et al. | VLDB | 2020 | ACID on object stores |
| 16 | The Snowflake Elastic Data Warehouse | Dageville et al. | SIGMOD | 2016 | Multi-cluster shared data architecture |
| 17 | Building An Elastic Query Engine on Disaggregated Storage | Vuppalapati et al. | NSDI | 2022 | Snowflake compute elasticity |
| 18 | DuckDB: an Embeddable Analytical Database | Raasveldt, Muhleisen | SIGMOD | 2019 | In-process OLAP, "SQLite for analytics" |
| 19 | MotherDuck: DuckDB in the cloud and in the client | Atwal et al. | CIDR | 2024 | Hybrid local/cloud DuckDB |
| 20 | Yellowbrick: An Elastic Data Warehouse on Kubernetes | Cusack et al. | CIDR | 2024 | K8s-native SQL data warehouse |
| 21 | Amazon Redshift Re-Invented | Armenatzoglou et al. | SIGMOD | 2022 | RMS, AQUA, compilation service, serverless |
| 22 | Amazon Redshift and the Case for Simpler Data Warehouses | Gupta et al. | SIGMOD | 2015 | Original Redshift architecture |
| 23 | Deep Unsupervised Cardinality Estimation | Yang et al. | VLDB | 2019 | Autoregressive models for cardinality |
| 24 | LEO: DB2's LEarning Optimizer | Stillger et al. | VLDB | 2001 | Feedback-driven cardinality correction |
| 25 | Adaptive Optimization of Very Large Join Queries | Neumann et al. | SIGMOD | 2018 | Scaling DP join ordering to large queries |

---

## System Comparison Matrix

| Feature | BigQuery | Databricks/Photon | Snowflake | DuckDB | Yellowbrick | Redshift |
|---------|----------|-------------------|-----------|--------|-------------|----------|
| **Deployment** | Serverless cloud | Cloud (multi-cloud) | Cloud (multi-cloud) | Embedded/in-process | K8s (cloud+on-prem) | Cloud (AWS) |
| **Storage** | Capacitor/Colossus | Delta Lake/Parquet on object store | Micro-partitions on object store | Single-file PAX | Object store + SSD cache | RMS (SSD + S3) |
| **Compute** | Dremel slots (dynamic) | Spark executors + Photon (C++) | Virtual warehouses (MPP) | In-process threads | K8s compute pods | RA3 compute nodes |
| **Execution** | Vectorized | Vectorized (Photon) + JVM (Spark) | Vectorized | Vectorized + push-based | Vectorized | Code generation + SIMD scans |
| **Optimizer** | Custom | Catalyst (rule + cost) | Custom cost-based | Rule + cost (DPhyp) | Custom | Custom cost-based |
| **Scaling** | Auto (slots) | Manual/auto cluster resize | Manual/auto VW resize | Single-machine (multi-core) | K8s auto-scaling | Concurrency scaling + resize |
| **ACID** | Yes (BigLake) | Yes (Delta Lake) | Yes (MVCC/SI) | Yes (MVCC/SI) | Yes | Yes (Serializable) |
| **Open formats** | Capacitor (proprietary) + BigLake | Parquet/Delta (open) | Proprietary micro-partitions | Native + Parquet/CSV/JSON | Proprietary | Proprietary + Spectrum (Parquet/ORC) |
| **Unique strength** | Infinite scale, serverless | Unified analytics + ML + lakehouse | Simplicity, multi-cluster isolation | Zero-config embedded, free | Hybrid cloud, K8s-native | AQUA hardware acceleration, AutoWLM |
