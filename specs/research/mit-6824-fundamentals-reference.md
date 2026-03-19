# MIT 6.824 Distributed Systems: Fundamentals Reference

> Synthesized from MIT 6.824/6.5840 lecture notes (pdos.csail.mit.edu/6.824/notes/).
> Covers: MapReduce, RPC, Threads, GFS, Consistency Models, Linearizability.

---

## 1. Core Distributed Systems Challenges

Every distributed system must navigate four fundamental tensions:

| Challenge | Goal | Tension |
|-----------|------|---------|
| **Fault Tolerance** | Service continues despite server failures | Replication requires communication, which costs performance |
| **Consistency** | Well-defined behavior (e.g., "read returns most recent write") | Maintaining identical replicas is expensive |
| **Performance** | N servers deliver N x throughput (scalable) | Fault tolerance and consistency require coordination |
| **Availability** | Service remains accessible during failures | Strong consistency limits availability (CAP theorem) |

**Key insight**: Fault tolerance and consistency require communication, which creates bottlenecks. Many production systems sacrifice consistency for speed, allowing stale reads.

---

## 2. MapReduce

**Paper**: Dean & Ghemawat, "MapReduce: Simplified Data Processing on Large Clusters" (2004, OSDI)

### 2.1 Programming Model

MapReduce restricts computation to two phases over key-value pairs:

```
Map(k1, v1)     -> list(k2, v2)     # Emit intermediate pairs
Reduce(k2, list(v2)) -> list(v2)    # Aggregate by key
```

**Word Count Example**:
```
Map("doc1", "hello world hello"):
  emit("hello", 1)
  emit("world", 1)
  emit("hello", 1)

Reduce("hello", [1, 1]):
  emit("hello", 2)
```

### 2.2 Execution Flow

```
Input files (on GFS)
    |
    v
[Split into M pieces]
    |
    v
M Map tasks (parallel)  -- each reads one split
    |                       each emits (key, value) pairs
    v
[Shuffle: partition by hash(key) mod R]
    |
    v
R Reduce tasks (parallel) -- each processes one partition
    |                         each reads all Map output for its partition
    v
R output files (on GFS)
```

**Coordinator** (single process):
- Assigns Map and Reduce tasks to idle workers
- Tracks task state: idle, in-progress, completed
- Stores locations of intermediate files (produced by Map, consumed by Reduce)

### 2.3 Performance Optimizations

| Optimization | Mechanism | Benefit |
|-------------|-----------|---------|
| Data locality | Maps run on GFS nodes holding input chunks | Eliminates network reads for input |
| Intermediate storage | Map output to local disk, not GFS | Reduces GFS overhead |
| Network efficiency | Data crosses network once (Map local disk -> Reduce workers) | Minimizes network traffic |
| Combiner | Optional local pre-aggregation at Map | Reduces shuffle data volume |
| Speculative execution | Coordinator re-launches slow ("straggler") tasks | Eliminates tail latency |
| Atomic output | GFS atomic rename for Reduce output files | Prevents partial results |

### 2.4 Fault Tolerance

**Worker failure**: Coordinator detects via heartbeat timeout. Re-runs failed Map tasks (output on local disk is lost). Completed Reduce tasks need not re-run (output on GFS).

**Coordinator failure**: Original MapReduce aborted the job. Later versions checkpointed coordinator state.

**Correctness requirements**:
- Map and Reduce functions must be **deterministic** (no random, no I/O, no external state)
- This enables safe re-execution: re-running a Map task produces identical output
- GFS atomic renames prevent partial Reduce output from being visible

### 2.5 Limitations

- Single rigid dataflow (Map -> Shuffle -> Reduce); no iteration, no multi-stage pipelines
- Batch-only; no real-time or streaming
- Shuffle phase moves all data over network; expensive for large intermediate datasets
- Single coordinator is a potential bottleneck

---

## 3. Threads and Concurrency (Go)

### 3.1 Why Threads in Distributed Systems

| Use Case | Example |
|----------|---------|
| **I/O concurrency** | Client sends RPCs to multiple servers in parallel; server handles many client requests simultaneously |
| **Multicore parallelism** | CPU-bound computation across cores |
| **Background tasks** | Heartbeat monitoring, periodic cleanup |

Go's goroutines are lightweight threads managed by the Go runtime, multiplexed onto OS threads.

### 3.2 Concurrency Hazards

**Race conditions**: Two goroutines accessing shared data without synchronization.
```go
// RACE: both goroutines read n, increment, write back
// Result: n incremented once instead of twice
go func() { n = n + 1 }()
go func() { n = n + 1 }()
```

**Detection**: `go run -race` instruments memory accesses and reports unsynchronized access, even when output appears correct.

**Deadlock**: Cycle of goroutines each waiting for a lock held by another.

### 3.3 Synchronization Primitives

**Mutex (sync.Mutex)**:
```go
var mu sync.Mutex
mu.Lock()
// critical section: only one goroutine executes here
mu.Unlock()
```
Rule: Lock before accessing shared data; unlock after. Hold lock for minimal duration.

**Condition Variables (sync.Cond)**:
```go
cond := sync.NewCond(&mu)
// Waiting goroutine:
mu.Lock()
for !condition {
    cond.Wait()  // atomically releases lock and sleeps
}
// ... use shared data ...
mu.Unlock()

// Signaling goroutine:
mu.Lock()
// ... modify shared data ...
cond.Broadcast()  // wake all waiters
mu.Unlock()
```
Always check condition in a loop (spurious wakeups).

**WaitGroup (sync.WaitGroup)**:
```go
var wg sync.WaitGroup
for i := 0; i < n; i++ {
    wg.Add(1)
    go func() {
        defer wg.Done()
        // ... work ...
    }()
}
wg.Wait()  // blocks until counter reaches zero
```

**Channels**:
```go
ch := make(chan int)    // unbuffered: send blocks until receive
ch <- value             // send
v := <-ch               // receive (blocks until value available)
```
- Unbuffered channels synchronize sender and receiver
- Buffered channels (`make(chan int, N)`) allow N sends without blocking
- Sending + receiving takes < 1 microsecond
- Multiple goroutines can safely send/receive on same channel without external locking

### 3.4 Web Crawler Patterns (Three Approaches)

**1. Serial**: Depth-first recursion with visited map. Simple but slow (one URL at a time).

**2. ConcurrentMutex**: Spawn goroutine per URL; shared `fetched` map protected by Mutex; WaitGroup tracks completion.
```go
var fetched = make(map[string]bool)
var mu sync.Mutex

func ConcurrentMutex(url string, ...) {
    mu.Lock()
    if fetched[url] {
        mu.Unlock()
        return
    }
    fetched[url] = true
    mu.Unlock()
    // ... fetch and recurse ...
}
```

**3. ConcurrentChannel**: Coordinator goroutine receives URLs via channel; no shared state; coordinator maintains visited map locally.
```go
func coordinator() {
    ch := make(chan []string)
    fetched := map[string]bool{}
    // ... send initial URL ...
    for urls := range ch {
        for _, u := range urls {
            if !fetched[u] {
                fetched[u] = true
                go func(u string) {
                    // fetch u, send found URLs to ch
                }(u)
            }
        }
    }
}
```

---

## 4. Remote Procedure Call (RPC)

### 4.1 Architecture

```
Client                          Server
  |                               |
  |  stub: marshal args           |  handler: unmarshal, execute
  |  Call(svc.Method, args, reply)|  marshal reply, send back
  |------- network packet ------->|
  |<------ network packet --------|
  |  unmarshal reply              |
```

**Go RPC specifics**:
- Server handlers are methods on exported objects
- RPC library creates one goroutine per incoming request (handlers run concurrently)
- Handlers must use locks for shared server state
- Only exported fields (capitalized) are marshalled
- Cannot marshal channels or functions

### 4.2 Failure Semantics

The fundamental problem: when Call() returns an error, the client does not know whether the server executed the request.

| Semantic | Behavior | Guarantee | Use Case |
|----------|----------|-----------|----------|
| **At-least-once** | Client retransmits until reply received | Server may execute request multiple times | Safe only for idempotent operations (read-only) |
| **At-most-once** | Server detects and suppresses duplicates | Request executes 0 or 1 times | Go's net/rpc default; requires duplicate detection |
| **Exactly-once** | At-most-once + unbounded retry + fault-tolerant duplicate table | Request executes exactly 1 time | Requires replicated state (e.g., Raft-based service) |

### 4.3 At-Most-Once Implementation

```
Client: tag each request with unique ID (UUID or sequence number)
Server: maintain table of {ID -> reply}

On receiving request:
  if ID in table:
    return cached reply (don't re-execute)
  else:
    execute handler
    store {ID -> reply} in table
    return reply
```

**Challenges**:
- When to discard old entries? (Client can signal "I've seen reply up to sequence N")
- Server crash loses duplicate table (need persistent or replicated state)
- What about concurrent duplicate requests? (Use "pending" flag to make second wait)

### 4.4 Binding and Connection

```go
// Server
rpc.Register(myObject)
listener, _ := net.Listen("tcp", ":1234")
conn, _ := listener.Accept()
rpc.ServeConn(conn)

// Client
client, _ := rpc.Dial("tcp", "server:1234")
args := Args{Key: "x"}
var reply Reply
err := client.Call("KV.Get", &args, &reply)
```

---

## 5. Google File System (GFS)

**Paper**: Ghemawat, Gobioff, Leung, "The Google File System" (2003, SOSP)

### 5.1 Architecture

```
                    Coordinator (single)
                   /      |        \
                  /       |         \
           metadata   chunk handles  lease mgmt
              |
     +--------+--------+--------+
     |        |        |        |
  ChunkSrv  ChunkSrv  ChunkSrv  ChunkSrv ...
  (100s-1000s of machines, each with local disks)
```

**Scale**: Hundreds to thousands of clients (e.g., MapReduce workers), hundreds of chunk servers, one coordinator.

### 5.2 Data Organization

| Parameter | Value | Rationale |
|-----------|-------|-----------|
| Chunk size | 64 MB | Reduces metadata; amortizes network overhead; few chunks per file |
| Replication factor | 3 | Tolerates 2 simultaneous failures per chunk |
| Chunk naming | 64-bit handles | Globally unique identifiers |

Files are split into fixed-size chunks, each stored on multiple chunk servers. This enables files larger than any single disk and parallel reads across chunks.

### 5.3 Read Path

```
1. Client -> Coordinator: "What chunks hold file F, byte offset B?"
2. Coordinator -> Client: chunk handle, list of chunk servers, chunk version
   (Client caches this mapping)
3. Client -> nearest ChunkServer: "Read chunk H at offset O for L bytes"
4. ChunkServer -> Client: data
```

The coordinator is NOT in the data path -- clients read directly from chunk servers.

### 5.4 Write Path (Record Append)

GFS uses **atomic record append** rather than writes to specific offsets:

```
1. Client -> Coordinator: "Which chunk server is primary for chunk C?"
2. Coordinator grants lease to one chunk server (60-second expiry)
3. Client sends data to ALL replicas (pipelined along chain of servers)
4. Client -> Primary: "Append this record"
5. Primary:
   a. Assigns sequence number (determines order)
   b. Appends to its own chunk
   c. Tells secondaries: "Append at offset X with sequence N"
6. Secondaries append and ACK
7. Primary -> Client: success (if all secondaries ACK) or error
```

**If record would span chunk boundary**: Primary pads current chunk, tells client to retry on next chunk.

### 5.5 Consistency Model

| Scenario | Consistency Level | Meaning |
|----------|------------------|---------|
| Single writer succeeds | Defined | All readers see the write at same offset |
| Concurrent writers succeed | Consistent but undefined | All replicas have same content, but writes may be interleaved |
| Any writer fails | Inconsistent | Replicas may differ |

**Record append guarantee**: Atomic append succeeds at least once at some offset across all replicas. The same record might appear at different offsets on different replicas (padding differences), or be duplicated on some replicas.

Applications must tolerate: duplicate records, records at different offsets, padding bytes.

### 5.6 Lease Mechanism (Split-Brain Prevention)

```
Problem: How to prevent two primaries for the same chunk?

Solution: Time-bounded leases
  - Coordinator grants 60-second lease to one chunk server
  - Coordinator will NOT grant new lease until current expires
  - If primary dies, coordinator waits for lease expiry
  - Old primary's lease naturally expires; cannot act as primary after

Key property: Even if coordinator cannot communicate with old primary
(network partition), split-brain cannot occur because the old primary's
lease will expire, and it will stop accepting writes.
```

### 5.7 Coordinator Fault Tolerance

**On disk** (persistent):
- File namespace (directory tree)
- File-to-chunk mapping
- Chunk version numbers (to detect stale replicas)

**In memory only** (rebuilt on restart):
- Chunk locations (which chunk servers hold which chunks)
- Primary designations and lease expiry times

**Recovery**: Coordinator restarts, reads persistent state, queries all chunk servers for their chunk inventories, compares version numbers to identify current vs. stale replicas.

**Limitation**: Single coordinator was a scalability bottleneck. RAM limited total number of chunks; CPU limited metadata operations. Google eventually moved to a distributed coordinator.

### 5.8 Key Design Tradeoffs

| Decision | Benefit | Cost |
|----------|---------|------|
| Single coordinator | Simple consistency, easy global decisions | Scalability bottleneck |
| 64 MB chunks | Low metadata overhead, fewer coordinator interactions | Wasted space for small files; hot spots for small popular files |
| Relaxed consistency | Higher write throughput, simpler protocol | Application complexity (handle duplicates, gaps) |
| Atomic append (not overwrite) | Natural fit for logs, MapReduce output | Applications must adapt to append semantics |
| Manual coordinator failover | Simpler implementation | 10+ minutes of downtime on coordinator failure |

---

## 6. Consistency Models

### 6.1 Definitions

A **consistency model** specifies the contract between a storage system and its clients: what values reads may return, given a history of writes.

A **history** is a sequence of operations with start times, finish times, arguments, and return values. Operations may overlap in time (concurrent).

### 6.2 Linearizability (Strong Consistency)

**Paper**: Herlihy & Wing, "Linearizability: A Correctness Condition for Concurrent Objects" (1990)

**Definition**: A history is linearizable if there exists a total order of all operations such that:
1. The order is consistent with **real-time ordering**: if operation A completes before operation B starts, A appears before B in the total order
2. Each read returns the value of the most recent preceding write in the total order

**Equivalently**: Each operation appears to take effect at a single **linearization point** between its invocation and response.

**Visual notation**:
```
Client 1:  |--Wx1--|         |--Rx?--|
Client 2:       |--Wx2--|
Time: ------>

If Wx1 completes before Wx2 starts, linearizability requires:
  - Rx returns 2 (if Rx starts after Wx2 completes)
  - Rx could return 1 or 2 (if Rx overlaps with Wx2)
```

**Key properties**:
- Once ANY client reads a new value, all subsequent reads (by any client) must return that value or a newer one
- No stale reads after a write is visible
- Total ordering of all operations (not just per-object)
- Duplicate requests must execute exactly once (idempotent or deduplicated)

**Performance cost**: Linearizability requires communication between replicas for every operation (or at least for writes). This creates latency proportional to network round-trip time and limits throughput.

### 6.3 Sequential Consistency

**Definition**: A history is sequentially consistent if there exists a total order of all operations such that:
1. The order is consistent with **per-client program order** (each client's operations appear in the order it issued them)
2. Each read returns the value of the most recent preceding write in the total order

**Difference from linearizability**: Does NOT require consistency with real-time ordering. Operations from different clients can be reordered arbitrarily, as long as each client's operations maintain their relative order.

### 6.4 Eventual Consistency

**Definition**: If no new writes occur, all replicas will eventually converge to the same value. No guarantees about ordering or staleness during updates.

**Benefits**: Fast (read from local replica), available (works during partitions), simple implementation.

**Costs**: Stale reads, conflicting concurrent writes require resolution (last-writer-wins, CRDTs), application must tolerate inconsistency.

### 6.5 Causal Consistency

**Definition**: If operation A causally precedes operation B (A happened before B, or A's result influenced B), then all replicas see A before B. Concurrent (causally unrelated) operations may appear in different orders at different replicas.

### 6.6 Fork Consistency

**Definition**: A malicious server cannot selectively hide operations. If the server hides an operation from some clients, it creates an irreversible "fork" -- those clients can never see each other's operations again. Used in systems like SUNDR where the server is untrusted.

### 6.7 Serializability (Transaction Context)

**Definition**: A set of transactions is serializable if there exists some serial execution order that produces the same results. Unlike linearizability, serializability does not require the serial order to match real-time ordering.

**Strict serializability** = serializability + linearizability (transactions appear to execute in real-time order).

### 6.8 Consistency Model Comparison

```
Strongest                                              Weakest
    |                                                      |
    v                                                      v
Linearizability > Sequential > Causal > Eventual

                        Serializability (orthogonal axis)
                        Strict serializability = Linearizability + Serializability
```

### 6.9 Practical Implications

| Model | Latency | Availability | Implementation Complexity | Use Case |
|-------|---------|-------------|--------------------------|----------|
| Linearizable | High (cross-replica communication) | Limited (requires majority) | High | Banking, locks, coordination |
| Sequential | Medium | Medium | Medium | CPU memory models |
| Eventual | Low (local reads) | High (works during partitions) | Low | Social media feeds, DNS |
| Causal | Medium | High | Medium | Collaborative editing |

---

## 7. Key Papers Referenced

| Paper | Year | Venue | Key Contribution |
|-------|------|-------|-----------------|
| Dean & Ghemawat, "MapReduce" | 2004 | OSDI | Simplified large-scale data processing; popularized functional parallelism |
| Ghemawat et al., "The Google File System" | 2003 | SOSP | Scalable distributed file system for commodity hardware; relaxed consistency for throughput |
| Herlihy & Wing, "Linearizability" | 1990 | TOPLAS | Formal definition of strong consistency for concurrent objects |
| Lamport, "Time, Clocks, and the Ordering of Events" | 1978 | CACM | Logical clocks, happened-before relation, foundation for distributed ordering |

---

## 8. Design Patterns and Tradeoffs

### 8.1 Sharding vs. Replication

```
Sharding: Split data across servers by key
  + Each server handles subset of keys -> scales capacity
  + Total throughput grows with servers
  - Hot keys create imbalance
  - Cross-shard operations are expensive
  - Losing a shard loses its data (unless also replicated)

Replication: Copy data across servers
  + Fault tolerance (survive server failures)
  + Read throughput scales (read from any replica)
  - Write throughput does NOT scale (all replicas must apply all writes)
  - Consistency between replicas is hard
  - Storage cost multiplied by replication factor
```

**Common pattern**: Shard for capacity + replicate each shard for fault tolerance.

### 8.2 Primary-Backup Replication

```
Client -> Primary: write request
Primary: apply write locally
Primary -> Backups: forward write (with ordering info)
Backups: apply write, send ACK
Primary -> Client: success (after all/majority ACK)

Client -> Primary (or Backup): read request
  If read from primary: always sees latest writes
  If read from backup: may see stale data (unless sync'd)
```

**Key decision**: When does the primary acknowledge to the client?
- After all backups ACK: strongest consistency, highest latency
- After majority ACK: tolerates minority failures, moderate latency
- Immediately (async replication): lowest latency, risk of data loss on primary failure

### 8.3 Quorum Systems

For a system with N replicas:
- Write quorum W: number of replicas that must acknowledge a write
- Read quorum R: number of replicas that must respond to a read
- Requirement: W + R > N (ensures every read sees at least one replica with the latest write)

Common configurations:
- W=N, R=1: Write-heavy penalty, fast reads
- W=1, R=N: Fast writes, read-heavy penalty
- W=R=(N+1)/2: Balanced (majority quorum)

### 8.4 Common Pitfalls

| Pitfall | Description | Solution |
|---------|-------------|----------|
| Split brain | Two servers both believe they are primary | Majority agreement (Paxos/Raft) or leases |
| Stale reads | Reading from an out-of-date replica | Read from primary, or read quorum, or version checking |
| Network partition confusion | Cannot distinguish "server crashed" from "network down" | Fencing tokens, leases with expiry |
| Unbounded retries | Client retries indefinitely, creating duplicate operations | At-most-once semantics with request IDs |
| Non-deterministic replicas | Replicas diverge because operations have side effects | Deterministic state machines; replicate operations, not effects |
| Head-of-line blocking | Slow operation blocks all subsequent operations | Pipelining, async replication, operation timeouts |

---

## 9. Implementation Considerations

### 9.1 Persistence vs. Volatility

What must survive crashes:
- **Log entries / committed operations**: Must be on stable storage before acknowledging
- **Metadata** (who is primary, version numbers): Must survive to prevent inconsistency on restart
- **Duplicate detection tables**: Must survive to maintain at-most-once semantics

What can be volatile:
- Cached data (can be recomputed or re-fetched)
- Connection state (clients reconnect)
- Derived indexes (rebuilt from primary data)

### 9.2 Idempotency

An operation is idempotent if executing it multiple times produces the same result as executing it once.

```
Idempotent:      x = 5          (set to absolute value)
Not idempotent:  x = x + 1      (increment)
Not idempotent:  append(log, v)  (adds duplicate entries)
```

Design for idempotency when possible. When not possible, use at-most-once semantics with request deduplication.

### 9.3 Ordering

Distributed systems must decide what ordering guarantees to provide:
- **Total order**: All nodes see all operations in the same order (expensive: requires consensus)
- **Per-key order**: Operations on the same key are ordered; operations on different keys are independent
- **Causal order**: Operations that are causally related are ordered; concurrent operations may vary
- **No ordering**: Operations may appear in any order at any replica (cheapest)
