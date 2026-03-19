# CMU 15-721 Reference: Query Engines, Data Formats, and Execution

Synthesized from CMU 15-721 Advanced Database Systems (Spring 2024) lecture notes, slides, and the course's required reading papers. This document covers OLAP systems architecture, data format internals, execution engine design, SIMD vectorization, query scheduling, join algorithms, UDF optimization, and database networking protocols.

---

## 1. Modern OLAP Architecture Patterns

### OLAP vs OLTP Characteristics

| Dimension | OLTP | OLAP |
|-----------|------|------|
| Workload | Short, frequent transactions | Complex analytical queries |
| Data access | Write-heavy, full-record | Read-heavy, selective columns |
| Schema | Normalized (3NF) | Denormalized (star/snowflake) |
| Latency | Sub-millisecond individual ops | Seconds-to-minutes for complex queries |
| Consistency | Strong ACID | Tolerates staleness |
| Optimization target | Transaction throughput | Query throughput, scan speed |

### System Organization Models

**Shared-Nothing Architecture**: Each node has independent compute, memory, and storage. Data is hash-partitioned across nodes. Scales horizontally. Minimizes network traffic. Used by: traditional MPP warehouses (Greenplum, old Redshift).

**Shared-Disk Architecture**: Multiple compute nodes access centralized persistent storage. Simplifies consistency. Network can bottleneck. Used by: Snowflake, BigQuery, modern cloud warehouses.

**Disaggregated Storage and Compute**: Decouples analytical engine from data layer. Independent scaling of each resource. Enables multi-tenancy. The dominant cloud-native pattern today.

### Data Lake vs Lakehouse

**Data Lake**: Centralized repository of raw data in open formats (Parquet, ORC, JSON, CSV) on cheap object storage (S3, GCS, ADLS). Schema-on-read. No ACID transactions. Requires external metadata management.

**Lakehouse Architecture** (Armbrust et al., CIDR 2021): Hybrid combining data lake flexibility with warehouse structure. Key properties:
- ACID transactions on lake storage via table formats (Delta Lake, Apache Iceberg, Apache Hudi)
- Schema enforcement and evolution
- Direct access to open file formats (no proprietary lock-in)
- First-class support for ML and data science workloads
- Performance approaching traditional warehouses through metadata layers, caching, and auxiliary data structures

**Key paper**: "Lakehouse: A New Generation of Open Platforms that Unify Data Warehousing and Advanced Analytics" (Armbrust et al., CIDR 2021)

### The Composable Data Management Manifesto

Pedreira et al. (VLDB 2023) argue for modular, composable data systems. Rather than monolithic engines, the industry is converging on shared components:
- **Velox**: Reusable execution engine library
- **Substrait**: Standardized query plan representation
- **Apache Arrow**: In-memory columnar interchange format
- **Apache Iceberg/Delta Lake**: Standardized storage layer

---

## 2. Data Format Internals

### Apache Parquet

**Structure (hierarchical)**:
```
File
├── Row Group 1 (typically 128MB)
│   ├── Column Chunk (col A)
│   │   ├── Page 1 (data page, ~1MB)
│   │   ├── Page 2
│   │   └── Dictionary Page (optional)
│   ├── Column Chunk (col B)
│   └── ...
├── Row Group 2
├── ...
└── Footer (schema, row group metadata, column statistics)
```

**Key properties**:
- Row groups are the unit of parallelism (each can be processed independently)
- Column chunks within a row group are contiguous on disk
- Pages are the indivisible unit of compression and encoding
- Footer contains file-level and row-group-level min/max statistics (zone maps)
- Column Index and Offset Index enable fine-grained page-level predicate pushdown

**Encoding techniques**:
- **Dictionary Encoding**: Builds per-column-chunk dictionary; values stored as integer indices using RLE/Bit-Packing hybrid
- **RLE (Run-Length Encoding)**: Efficient for repeated values; switches to bit-packing when runs are short
- **Delta Encoding**: Stores differences between consecutive values; excellent for timestamps and monotonic sequences
- **Bit-Packing**: Packs small integers into minimal bits; combined with RLE in hybrid encoding
- **BYTE_STREAM_SPLIT**: For floating-point data; splits IEEE 754 bytes across streams for better compression
- **FSST (Fast Static Symbol Table)**: Dictionary-based string compression with fixed 256-entry symbol table

**Statistics and predicate pushdown**:
- Min/max per column chunk → skip entire row groups
- Page-level column indexes → skip individual pages
- Bloom filters (optional) → probabilistic membership test
- Null counts, distinct counts for optimizer hints

### Apache ORC (Optimized Row Columnar)

**Structure**:
```
File
├── Stripe 1 (default 64MB)
│   ├── Index Data (min/max/sum/count per row group of 10,000 rows)
│   ├── Row Data (column streams with type-specific encoding)
│   └── Stripe Footer (stream locations, encoding info)
├── Stripe 2
├── ...
├── File Footer (stripe locations, schema, statistics)
└── Postscript (compression codec, version)
```

**Key differentiators from Parquet**:
- Native ACID transaction support (designed for Hive 3.0+)
- Finer-grained row group indexes (default 10,000 rows vs Parquet's page-level)
- Built-in bloom filter support per column
- Type-aware encoding (integer RLE, dictionary for strings, etc.)
- Supports delta files for row-level updates/deletes with background compaction
- Compression: ZLIB, Snappy, LZO, LZ4, ZSTD (applied per-stream)

### Apache Arrow

**Purpose**: Language-agnostic, standardized in-memory columnar format for zero-copy data interchange.

**Key design decisions**:
- Fixed-width types stored in contiguous arrays
- Variable-width types (strings) use offsets array + values buffer
- Null values tracked via validity bitmap (1 bit per value)
- 64-byte alignment for SIMD-friendly access
- Nested types (structs, lists, maps) supported via recursive buffer layout

**Arrow IPC (Inter-Process Communication)**:
- Encapsulated message format: FlatBuffer metadata + optional body
- Zero deserialization cost: on-disk layout matches in-memory layout exactly
- Enables memory-mapping of IPC files directly into process memory
- Stream format (sequential messages) and file format (random access via footer)

**Arrow Flight**:
- RPC framework built on gRPC + Arrow IPC
- Data transferred in Arrow columnar format (no row-to-column conversion)
- Parallel streams for high throughput
- 20-30x faster than ODBC/JDBC for large result sets

**ADBC (Arrow Database Connectivity)**: Minimal client API standard returning results in Arrow format. Replacement for ODBC/JDBC when columnar access is needed.

### FastLanes Compression Layout

**Paper**: "The FastLanes Compression Layout: Decoding > 100 Billion Integers per Second with Scalar Code" (Afroozeh & Boncz, VLDB 2023)

**Core innovation**: Redesigns the physical data layout so that scalar code (no explicit SIMD intrinsics) achieves SIMD-level performance through:
1. **Unified Transposed Layout**: Reorders tuples in "04261537" order, maximizing independent work for all SIMD lane widths (8, 16, 32, 64 bits)
2. **Virtual 1024-bit SIMD register**: Generalizes value interleaving in bit-(un)packing operations to target a virtual wide register that maps to any physical SIMD width

**Performance**: Decodes >40 values per CPU cycle. Accelerates all common lightweight compression schemes: DICT, FOR (Frame of Reference), DELTA, RLE.

**Impact**: Being integrated into next-generation columnar formats. Demonstrates that smart data layout can eliminate the need for hand-written SIMD intrinsics.

---

## 3. Execution Engine Design

### Three Processing Models

#### Iterator Model (Volcano/Pull-Based)
```
// Each operator implements:
open()    → initialize state
next()    → return one tuple, pull from children
close()   → cleanup

// Execution: root calls next() recursively down the tree
```
- **Pros**: Simple, modular, easy to add new operators
- **Cons**: One virtual function call per tuple per operator. For 1 billion rows with 5 operators = 5 billion function calls. Terrible CPU branch prediction and cache utilization.

#### Materialization Model (Push-Based, Full)
- Each operator processes entire input and emits entire output
- Better for small intermediate results
- Terrible for large intermediates (memory pressure)

#### Vectorized Model (Batch/Vector-at-a-Time)
```
// Each operator implements:
next()    → return a VECTOR of tuples (e.g., 1024-2048 values)

// Inner loop processes entire vector with tight, branchless code
```
- **Pros**: Amortizes function call overhead over vector_size tuples. Enables SIMD. Cache-friendly (vector fits in L1/L2). Easy to profile and optimize individual primitives.
- **Cons**: Still has interpretation overhead (operator dispatch). Materialization at vector boundaries.

**Key paper**: "MonetDB/X100: Hyper-Pipelining Query Execution" (Boncz, Zukowski, Nes, CIDR 2005)

### Vectorized vs Compiled: The Great Debate

**Vectorized (MonetDB/X100, Velox, DuckDB, Photon)**:
- Process data in fixed-size vectors (typically 1024-2048 values)
- Pre-compiled primitive functions for each operation type
- Runtime adaptivity: discover batch characteristics and select specialized code paths
- Easier to develop, debug, and profile
- Natural SIMD exploitation within primitives

**Compiled/Data-Centric (HyPer, Umbra)**:
- Generate query-specific machine code at query compile time
- Push-based: tuples flow from producers to consumers
- Data stays in CPU registers between operators within a pipeline
- Pipeline breakers define compilation boundaries
- Uses LLVM for code generation (millisecond compile times)

**Key paper**: "Everything You Always Wanted to Know About Compiled and Vectorized Queries But Were Afraid to Ask" (Kersten et al., VLDB 2018) -- Found both approaches achieve similar performance when implemented well. Vectorized is better for simple scans; compiled is better for complex expressions. Modern systems often combine both.

### Data-Centric Code Generation (Neumann, VLDB 2011)

**Produce/Consume Interface**:
```
// Each operator provides two functions:
produce()  → generate code that produces tuples
consume()  → generate code that processes incoming tuples

// Execution:
// 1. Call produce() on root operator
// 2. Root calls produce() on children
// 3. Leaf operators generate scan loops
// 4. Tuples pushed UP via consume() calls
// 5. Code generated for entire pipeline as one tight loop
```

**Pipeline breakers** (operators that must materialize):
- Hash table build side of hash joins
- Aggregation (must accumulate all groups)
- Sort operators
- Window functions with full-partition requirements

**Between pipeline breakers**: All data stays in CPU registers. The generated code is a single tight loop with excellent branch prediction and cache locality.

**LLVM backend**: Translates algebraic plan → imperative code fragments → LLVM IR → native machine code. Compile time: ~milliseconds. Generated code achieves near-handwritten performance.

**Key paper**: "Efficiently Compiling Efficient Query Plans for Modern Hardware" (Neumann, VLDB 2011)

### Selection Vectors and Filter Representation

Two approaches to tracking which tuples pass filters:

**Selection vectors** (used by MonetDB/X100, DuckDB): Array of indices pointing to active rows within a vector. Avoids data movement -- inactive rows simply not referenced. Compact for high selectivity.

**Bitmasks** (used by some systems): One bit per tuple indicating active/inactive. SIMD-friendly for AND/OR operations. Better for low selectivity (most rows active).

**Key paper**: "Filter Representation in Vectorized Query Execution" (Ngom et al., DaMoN 2021)

### Velox: Meta's Unified Execution Engine

**Paper**: "Velox: Meta's Unified Execution Engine" (Pedreira et al., VLDB 2022)

**Architecture**: A C++ library (not a standalone database) providing reusable execution components:
- Type system with complex/nested types
- Vector (columnar batch) representation
- Expression evaluation engine
- Operator implementations (hash join, aggregation, sort, etc.)
- I/O connectors and serializers
- Memory management with spilling support

**Design philosophy**: Takes an already-optimized query plan as input. No SQL parser, no global optimizer. Purely an execution library that any system can embed.

**Integration**: Used by Presto, Spark, PyTorch (feature engineering), and 12+ systems at Meta. Demonstrates the composable data management vision.

**Key techniques**: Vectorized execution, adaptive expression evaluation, dictionary-aware processing, lazy materialization of complex types.

---

## 4. SIMD Vectorization Techniques

### SIMD Instruction Set Evolution

| ISA | Register Width | Year | Key Capabilities |
|-----|---------------|------|-------------------|
| SSE | 128-bit | 1999 | 4x float, 2x double |
| SSE2 | 128-bit | 2001 | Integer SIMD |
| AVX | 256-bit | 2011 | 8x float |
| AVX2 | 256-bit | 2013 | Integer ops, gather |
| AVX-512 | 512-bit | 2017 | Mask registers, scatter, conflict detection |

### Key SIMD Operations for Databases

**Compress/Expand** (AVX-512):
- `VPCOMPRESSD`: Given a bitmask, stores only selected elements contiguously (selection scan)
- `VPEXPANDD`: Inverse -- expands contiguous elements into selected positions

**Gather/Scatter**:
- `VPGATHERDD`: Load elements from non-contiguous memory locations using index vector (hash table probe)
- `VPSCATTERDD`: Store elements to non-contiguous locations (partitioning)

**Comparison**: `VPCMPD` compares vectors element-wise, produces mask register result

**String matching**: Intel `PCMPESTRI`/`PCMPESTRM` for 16-byte pattern matching in single instruction (used by Redshift)

### Database Operations Accelerated by SIMD

1. **Selection scans**: Vectorized predicate evaluation across column vectors. SIMD compare → mask → compress active tuples.

2. **Hash computation**: Parallel hash function evaluation on multiple keys simultaneously. CRC32 intrinsics or vectorized multiply-shift hashing.

3. **Hash table probing**: SIMD gather to load hash table entries for multiple keys in parallel. SIMD compare for key matching. Conflict detection for concurrent inserts.

4. **Partitioning/Radix sort**: SIMD histogram computation. Vectorized scatter for distributing tuples to partitions.

5. **Aggregation**: Vectorized sum/min/max over column vectors. SIMD horizontal reduction for final aggregation.

6. **String operations**: SIMD-accelerated string comparison, LIKE pattern matching, string hashing.

**Key papers**:
- "Rethinking SIMD Vectorization for In-Memory Databases" (Polychroniou et al., SIGMOD 2015)
- "Make the Most out of Your SIMD Investments" (Lang et al., VLDB Journal 2020)

### Auto-Vectorization vs Manual SIMD

**Auto-vectorization** (compiler-based): Write scalar loops; compiler attempts SIMD conversion. Fragile -- small code changes can prevent vectorization. Limited to simple patterns.

**Manual SIMD intrinsics**: Direct control over SIMD instructions. Maximum performance. Platform-specific. Maintenance burden.

**FastLanes approach**: Design data layout so scalar code auto-vectorizes effectively. Best of both worlds -- portable, maintainable, and fast.

**Micro Adaptivity** (Raducanu et al., SIGMOD 2013): Vectorwise dynamically selects between different operator implementations at runtime based on data characteristics (selectivity, data distribution, vector size).

---

## 5. Query Scheduling and Parallelism

### Morsel-Driven Parallelism

**Paper**: "Morsel-Driven Parallelism: A NUMA-Aware Query Evaluation Framework for the Many-Core Age" (Leis et al., SIGMOD 2014)

**Core concept**: Divide input data into small chunks called **morsels** (typically ~100,000 rows). A centralized dispatcher assigns morsels to worker threads that execute entire operator pipelines.

**Architecture**:
```
                    ┌──────────────┐
                    │  Dispatcher  │  (assigns morsels to threads)
                    └──────┬───────┘
              ┌────────────┼────────────┐
              ▼            ▼            ▼
        ┌──────────┐ ┌──────────┐ ┌──────────┐
        │ Thread 1 │ │ Thread 2 │ │ Thread 3 │
        │ Pipeline │ │ Pipeline │ │ Pipeline │
        │ on morsel│ │ on morsel│ │ on morsel│
        └──────────┘ └──────────┘ └──────────┘
```

**Key properties**:
1. **Elasticity**: Parallelism degree is NOT baked into the plan. Dispatcher adjusts thread allocation dynamically based on query progress and incoming workload.
2. **NUMA-awareness**: Dispatcher preferentially assigns morsels to threads on the NUMA node where the data resides, minimizing cross-socket memory access.
3. **No exchange operators**: Unlike Volcano-style parallelism, there are no explicit exchange/shuffle operators. Parallelism is implicit in the morsel scheduling.
4. **Pipeline-level parallelism**: Each pipeline (sequence of operators between pipeline breakers) is scheduled independently.

**Pipeline execution**: Within a pipeline, operators are fused (no materialization). At pipeline breakers (e.g., hash table build), threads synchronize:
- Thread-local hash tables during build phase
- Parallel merge/partitioning of local tables
- Global hash table for probe phase

**Performance**: 30x speedup on 32 cores on TPC-H and SSB benchmarks. Near-linear scalability.

**Adopted by**: HyPer, Umbra, DuckDB, and influenced design of many modern engines.

### Additional Scheduling Papers

- **"Self-Tuning Query Scheduling for Analytical Workloads"** (Wagner et al., SIGMOD 2021): Adaptive scheduling that learns from runtime feedback.
- **"On-Demand State Separation for Cloud Data Warehousing"** (Winter et al., VLDB 2022): Elastic state management for multi-tenant scheduling.
- **"Scaling Up Concurrent Main-Memory Column-Store Scans"** (Psaroudakis et al., VLDB 2015): Techniques for concurrent scan sharing.

---

## 6. Join Algorithm Implementations

### Hash Join Taxonomy

**Non-Partitioned (Hardware-Oblivious)**:
- Simple concurrent hash table shared across all threads
- Uses lock-based or lock-free concurrent hash table
- No data preprocessing needed
- Good when data fits in LLC (Last Level Cache)
- Implementation: shared chaining hash table with per-bucket locks

**Partitioned (Hardware-Conscious)**:
- Pre-partitions both relations using hash function
- Each partition fits in cache → cache-efficient probe
- Radix partitioning: multi-pass partitioning using different hash bit ranges
- Avoids TLB misses by ensuring partitions fit in cache
- Higher throughput but requires tuning to hardware parameters

**Radix Hash Join (highest throughput)**:
- Multi-pass radix partitioning (typically 2 passes)
- Pass 1: partition into P1 partitions (fits in TLB)
- Pass 2: sub-partition each into P2 partitions (fits in L2 cache)
- Build phase: build hash table per partition
- Probe phase: probe matching partition
- Achieves ~196 million tuples/second

**Key papers**:
- "An Experimental Comparison of Thirteen Relational Equi-Joins in Main Memory" (Schuh et al., SIGMOD 2016)
- "Design and Evaluation of Main Memory Hash Join Algorithms for Multi-core CPUs" (Blanas et al., SIGMOD 2011)
- "Main-Memory Hash Joins on Multi-Core CPUs: Tuning to the Underlying Hardware" (Balkesen et al., ICDE 2013)
- "To Partition, or Not to Partition, That is the Join Question in a Real System" (Bandle et al., SIGMOD 2021)

### Vectorized Hash Table Design

Three-step vectorized lookup (as implemented in Photon and others):
1. **Hash**: Evaluate hash function across entire key vector using SIMD
2. **Probe**: Use SIMD gather to load hash table entries for all keys simultaneously
3. **Compare**: Column-by-column comparison using SIMD; modify position list for non-matches and advance bucket indices for collisions

Repeat steps 2-3 until all keys are matched or exhausted.

### Worst-Case Optimal Joins (WCOJ)

**Problem**: Traditional binary join plans can produce intermediate results exponentially larger than the final output for cyclic queries (e.g., triangle queries in graph data).

**AGM Bound** (Atserias-Grohe-Marx): Theoretical upper bound on join output size based on relation sizes and query structure.

**LeapFrog TrieJoin** (Veldhuizen, 2012): A WCOJ algorithm that:
- Represents relations as sorted tries
- Intersects tries level-by-level using "leapfrog" search
- Worst-case runtime proportional to AGM bound (up to log factor)
- Implementable with conventional B-trees

**Practical adoption**: "Adopting Worst-Case Optimal Joins in Relational Database Systems" (Freitag et al., VLDB 2020) implemented WCOJ in Umbra (UmbraLFT). Found:
- WCOJ is asymptotically superior for cyclic queries
- For typical acyclic queries, traditional binary joins remain faster
- Hybrid approaches (binary joins for acyclic parts, WCOJ for cyclic subqueries) are optimal

---

## 7. UDF Optimization Strategies

### The UDF Performance Problem

User-Defined Functions (UDFs) in SQL databases suffer from impedance mismatch:
- SQL is declarative, set-oriented → optimizer can reason about it
- UDFs are imperative, tuple-at-a-time → opaque to optimizer
- Each UDF invocation = context switch between SQL engine and UDF runtime
- No parallelism, no vectorization, no predicate pushdown through UDFs
- Performance penalty: orders of magnitude slower than equivalent SQL

### Froid: UDF Inlining

**Paper**: "Froid: Optimization of Imperative Programs in a Relational Database" (Ramachandra et al., VLDB 2017)

**Approach**: Automatically transforms scalar UDFs into equivalent relational algebraic expressions, then inlines them into the calling query.

**Transformation process**:
1. Parse UDF into control flow graph
2. Convert each statement to relational expression
3. Handle conditionals via CASE expressions
4. Handle loops via recursive CTEs or lateral joins
5. Inline resulting expression into calling query's plan

**Result**: The inlined query is now amenable to standard cost-based optimization, enabling set-oriented execution, parallelism, and vectorization. Performance improvements of multiple orders of magnitude on real workloads.

### Additional UDF Optimization Approaches

- **"Aggify: Lifting the Curse of Cursor Loops using Custom Aggregates"** (Gupta et al., SIGMOD 2020): Converts cursor loops into custom aggregate functions.
- **"Compiling PL/SQL Away"** (Duta et al., CIDR 2020): Compiles procedural SQL into pure relational algebra.
- **"Dear User-Defined Functions, Inlining isn't working out so great for us"** (Franz et al., CIDR 2024): Critiques pure inlining approach; argues for outlining (extracting reusable subexpressions) before inlining.

---

## 8. Database Networking Protocols

### The Data Transfer Bottleneck

**Paper**: "Don't Hold My Data Hostage: A Case for Client Protocol Redesign" (Raasveldt & Muhleisen, VLDB 2017)

**Key finding**: Transferring large result sets from database to client is surprisingly expensive. Serialization/deserialization overhead consumes 60-90% of transfer time in traditional protocols.

### Protocol Comparison

| Protocol | Format | Transfer Speed | Overhead |
|----------|--------|---------------|----------|
| JDBC | Row-oriented | Baseline | High serialization |
| ODBC | Row-oriented | ~1x JDBC | High serialization |
| PostgreSQL wire | Row-oriented | ~1x | Text encoding overhead |
| Arrow Flight | Columnar (Arrow) | 20-30x JDBC | Minimal (zero-copy capable) |
| ADBC | Columnar (Arrow) | ~Flight | Minimal |

### Arrow Flight Protocol

- Built on gRPC + Arrow IPC format
- Data serialized in Arrow columnar format (no row-to-column conversion needed)
- Supports parallel streams for concurrent data transfer
- `DoGet`/`DoPut` RPCs for bidirectional data movement
- Metadata-only messages for schema negotiation and query submission

### ConnectorX

**Paper**: "ConnectorX: Accelerating Data Loading From Databases to Dataframes" (Wang et al., VLDB 2022)

Optimized connector that:
- Partitions queries for parallel extraction
- Streams directly into Arrow format
- Avoids intermediate materialization
- 3-20x faster than Pandas `read_sql()`

### Tigger: Database Proxy

**Paper**: "Tigger: A Database Proxy That Bounces With User-Bypass" (Butrovich et al., VLDB 2023)

Database connection proxy that bypasses the proxy for data transfer after connection establishment, reducing latency and overhead.

---

## Key Papers Index

| # | Title | Authors | Venue | Year | Key Contribution |
|---|-------|---------|-------|------|-----------------|
| 1 | Lakehouse: A New Generation of Open Platforms | Armbrust et al. | CIDR | 2021 | Lakehouse architecture definition |
| 2 | MonetDB/X100: Hyper-Pipelining Query Execution | Boncz, Zukowski, Nes | CIDR | 2005 | Vectorized execution model |
| 3 | Velox: Meta's Unified Execution Engine | Pedreira et al. | VLDB | 2022 | Composable execution library |
| 4 | Efficiently Compiling Efficient Query Plans | Neumann | VLDB | 2011 | Data-centric code generation, produce/consume |
| 5 | Morsel-Driven Parallelism | Leis et al. | SIGMOD | 2014 | NUMA-aware elastic query scheduling |
| 6 | Everything You Always Wanted to Know... | Kersten et al. | VLDB | 2018 | Compiled vs vectorized comparison |
| 7 | The FastLanes Compression Layout | Afroozeh, Boncz | VLDB | 2023 | SIMD-friendly data layout for scalar code |
| 8 | Rethinking SIMD Vectorization for In-Memory DBs | Polychroniou et al. | SIGMOD | 2015 | SIMD techniques for DB operations |
| 9 | An Empirical Evaluation of Columnar Storage Formats | Zeng et al. | VLDB | 2023 | Parquet vs ORC vs Arrow benchmarks |
| 10 | Don't Hold My Data Hostage | Raasveldt, Muhleisen | VLDB | 2017 | Client protocol performance analysis |
| 11 | Froid: Optimization of Imperative Programs | Ramachandra et al. | VLDB | 2017 | UDF inlining into relational algebra |
| 12 | Adopting Worst-Case Optimal Joins in Relational DBs | Freitag et al. | VLDB | 2020 | Practical WCOJ implementation |
| 13 | 13 Relational Equi-Joins in Main Memory | Schuh et al. | SIGMOD | 2016 | Comprehensive hash join comparison |
| 14 | Adaptive Execution of Compiled Queries | Kohn et al. | ICDE | 2018 | Runtime adaptivity in compiled engines |
| 15 | Filter Representation in Vectorized Query Execution | Ngom et al. | DaMoN | 2021 | Selection vectors vs bitmasks |
| 16 | Micro Adaptivity in Vectorwise | Raducanu et al. | SIGMOD | 2013 | Runtime operator specialization |
| 17 | The Composable Data Management System Manifesto | Pedreira et al. | VLDB | 2023 | Modular data system architecture |
| 18 | ConnectorX: Accelerating Data Loading | Wang et al. | VLDB | 2022 | Fast DB-to-DataFrame transfer |
| 19 | BtrBlocks: Efficient Columnar Compression | Kuschewski et al. | SIGMOD | 2023 | Compression for data lakes |
| 20 | BitWeaving: Fast Scans for Main Memory | Li et al. | SIGMOD | 2013 | Bit-level parallel scan processing |
