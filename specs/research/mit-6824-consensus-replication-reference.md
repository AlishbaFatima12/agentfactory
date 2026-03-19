# MIT 6.824 Distributed Systems: Consensus, Replication & Advanced Systems Reference

> Synthesized from MIT 6.824/6.5840 lecture notes (pdos.csail.mit.edu/6.824/notes/).
> Covers: Paxos, Raft, Chain Replication, ZooKeeper, 2PC, Spanner, FaRM, Memcached, Ray, Bitcoin, BFT, SUNDR.

---

## 1. Consensus Protocols

### 1.1 Paxos

**Paper**: Lamport, "The Part-Time Parliament" (1998, ACM TOCS); "Paxos Made Simple" (2001)

#### Problem Statement

Multiple servers must agree on a single value despite crashes and network partitions. Simple voting fails because network partitions can cause "split brain" -- two partitions each believing they have authority.

#### Key Insight: Overlapping Majorities

With 2f+1 servers, any two majority sets (of f+1 servers each) share at least one member. This member carries knowledge of prior decisions into any future majority, preventing contradictory agreements.

#### Roles

| Role | Responsibility |
|------|---------------|
| **Proposer** | Initiates agreement by sending proposals with unique, increasing proposal numbers |
| **Acceptor** | Votes on proposals; maintains persistent state |
| **Learner** | Discovers the agreed-upon value |

In practice, each server plays all three roles.

#### Acceptor Persistent State

```
n_p: highest proposal number seen in a Prepare message
n_a: highest proposal number accepted
v_a: value associated with n_a
```

These MUST survive crashes. If an acceptor forgets n_p, it could accept an older proposal after restart, violating safety.

#### Protocol (Single-Decree Paxos)

```
Phase 1: Prepare
  Proposer: choose unique n > any n it has used before
            send Prepare(n) to all acceptors

  Acceptor on receiving Prepare(n):
    if n > n_p:
      n_p = n                    # promise not to accept lower proposals
      reply Prepare_OK(n_a, v_a) # report any previously accepted value
    else:
      reply Prepare_Reject (or ignore)

Phase 2: Accept
  Proposer: if received Prepare_OK from majority:
    v' = v_a with highest n_a among responses  # CRITICAL RULE
         (or proposer's own value if no v_a reported)
    send Accept(n, v') to all acceptors

  Acceptor on receiving Accept(n, v'):
    if n >= n_p:
      n_p = n
      n_a = n
      v_a = v'
      reply Accept_OK
    else:
      reply Accept_Reject
```

**Why the "highest n_a" rule matters**: If a value was previously accepted by a majority (i.e., chosen), any subsequent proposer's Phase 1 will intersect with that majority and discover the chosen value. The proposer must then re-propose that value, ensuring the decision is never changed.

#### Safety Properties

1. **Agreement**: Only a single value is chosen
2. **Validity**: Only a proposed value can be chosen
3. **Irrevocability**: Once chosen, the value never changes

#### Liveness

Paxos does NOT guarantee liveness. Two proposers can "duel" -- each preventing the other's Accept from reaching a majority by continuously sending higher Prepares. Solutions: leader election (one designated proposer), randomized backoff.

#### Multi-Paxos (Replicated State Machine)

Real systems run Paxos instances repeatedly to build a replicated log:

```
Log index:  1       2       3       4    ...
Value:     "x=1"  "y=2"  "x=3"  "y?"  ...
            |       |       |       |
         Paxos   Paxos   Paxos   Paxos   (separate instance per slot)
```

**Optimization**: A stable leader skips Phase 1 for consecutive slots, sending only Accept messages. This is the heart of practical Paxos implementations (e.g., Chubby, Spanner's internal consensus).

---

### 1.2 Raft

**Paper**: Ongaro & Ousterhout, "In Search of an Understandable Consensus Algorithm" (2014, USENIX ATC)

Raft provides the same guarantees as Multi-Paxos but with a design optimized for understandability. It decomposes consensus into three sub-problems: leader election, log replication, and safety.

#### Core Concepts

| Concept | Definition |
|---------|-----------|
| **Term** | A logical clock that increases monotonically. Each term has at most one leader. |
| **Leader** | The server that accepts client requests, appends to its log, and replicates to followers |
| **Follower** | Passively replicates log from leader |
| **Candidate** | A server seeking to become leader for a new term |

#### State (All Servers)

**Persistent** (must survive crashes):
```
currentTerm    # latest term server has seen
votedFor       # candidateId that received vote in current term (or null)
log[]          # log entries; each entry contains command and term when received
```

**Volatile**:
```
commitIndex    # index of highest log entry known to be committed
lastApplied    # index of highest log entry applied to state machine
```

**Volatile (Leader only)**:
```
nextIndex[]    # for each server, index of next log entry to send
matchIndex[]   # for each server, index of highest replicated entry
```

#### Leader Election (Lab 3A)

```
1. Follower's election timer expires (no heartbeat from leader)
2. Follower increments currentTerm, transitions to Candidate
3. Candidate votes for itself, sends RequestVote to all servers
4. RequestVote includes: candidateId, term, lastLogIndex, lastLogTerm

Each server grants at most ONE vote per term.

Vote granted if:
  - Candidate's term >= voter's currentTerm
  - Voter hasn't voted for another candidate this term
  - Candidate's log is "at least as up-to-date" as voter's log

"At least as up-to-date" comparison:
  - If last log entries have different terms: higher term wins
  - If same term: longer log wins

If candidate receives votes from majority: becomes leader, sends heartbeats
If candidate receives AppendEntries from valid leader: reverts to follower
If election timeout elapses without result: start new election
```

**Split vote prevention**: Each server uses a randomized election timeout (e.g., 150-300ms). The server with the shortest timeout starts the election first and usually wins before others timeout.

**Election timeout constraints**:
```
broadcastTime << electionTimeout << MTBF

broadcastTime: ~0.5ms to 20ms (network round trip)
electionTimeout: 150ms to 300ms (typical)
MTBF: months (mean time between failures)
```

#### Log Replication (Lab 3B)

```
1. Client sends command to leader
2. Leader appends entry to its log: {term, command, index}
3. Leader sends AppendEntries to all followers:
   - prevLogIndex, prevLogTerm: for consistency check
   - entries[]: new entries to append
   - leaderCommit: leader's commitIndex

4. Follower consistency check:
   if log[prevLogIndex].term != prevLogTerm:
     reject (log doesn't match leader's)
   else:
     delete conflicting entries after prevLogIndex
     append new entries
     update commitIndex to min(leaderCommit, last new entry index)
     reply success

5. Leader tracks matchIndex for each follower
6. If entry at index N is stored on a majority AND log[N].term == currentTerm:
   set commitIndex = N (entry is committed)
7. Leader applies committed entries to state machine, replies to client
```

**Log Matching Property**: If two entries in different logs have the same index and term, they store the same command AND all preceding entries are identical.

**Repairing follower logs**: If AppendEntries fails consistency check, leader decrements nextIndex for that follower and retries. Eventually finds the matching point and overwrites the follower's divergent entries.

**Commitment safety rule**: A leader can only commit entries from its OWN term (not from previous terms). Entries from previous terms are committed indirectly when a current-term entry at a higher index is committed.

#### Log Compaction and Snapshots (Lab 3D)

```
Problem: Log grows without bound -> slow restarts, memory exhaustion

Solution: Periodic snapshots
1. Service creates persistent snapshot of state at log index I
2. Raft discards all log entries through index I
3. On restart: load snapshot, replay remaining log entries
4. If follower is too far behind (leader has discarded needed entries):
   Leader sends InstallSnapshot RPC with full snapshot
   Follower replaces its state and log with snapshot
```

**Snapshot contents**: Application state + last included index + last included term.

#### Read-Only Optimization

**Problem**: A deposed leader (unaware of new leader) could serve stale reads.

**Safe approach**: Commit a no-op entry in the current term; serve reads only after it commits (proves leadership).

**Lease optimization**: Leader serves reads without log entries during a time window shorter than the election timeout, ensuring no other leader could have been elected.

#### Client Interaction

- Clients send requests to leader (redirected if they contact a follower)
- Each request carries a unique client ID + sequence number
- Server maintains table of last-executed sequence per client for deduplication
- If leader crashes after committing but before replying, client retries to new leader; server detects duplicate and returns cached result

---

### 1.3 Byzantine Fault Tolerance (PBFT)

**Paper**: Castro & Liskov, "Practical Byzantine Fault Tolerance" (1999, OSDI)

#### Problem Statement

Tolerate servers that behave arbitrarily (bugs, compromised, malicious) -- not just crash failures. With f faulty servers, requires 3f+1 total servers (compared to 2f+1 for crash faults).

**Why 3f+1?** With 2f+1 servers, a client waiting for f+1 matching replies could see a set where all f honest servers have stale state and the one "match" comes from a faulty server. With 3f+1, any set of 2f+1 replies contains at least f+1 from honest servers, which must agree.

#### Assumptions

- At most f faulty replicas out of 3f+1 total
- Cryptographic signatures are unforgeable
- Network can delay but eventually delivers messages
- Clients are honest

#### Three-Phase Protocol

```
Phase 1: PRE-PREPARE
  Primary assigns sequence number n to client request m
  Primary sends <PRE-PREPARE, v, n, d(m)> to all replicas
  (v = view number, d(m) = digest of request)

  Replica accepts if:
    - In view v, this replica accepts primary's messages
    - No prior PRE-PREPARE for v,n with different digest
    - Sequence number is within water marks (flow control)

Phase 2: PREPARE
  Upon accepting PRE-PREPARE, replica i broadcasts:
    <PREPARE, v, n, d(m), i>

  Replica waits for 2f matching PREPAREs (from different replicas)
  "Prepared" = have PRE-PREPARE + 2f matching PREPAREs
  Total: 2f+1 servers agree on (v, n, d(m))

Phase 3: COMMIT
  Upon being prepared, replica i broadcasts:
    <COMMIT, v, n, d(m), i>

  Replica waits for 2f+1 matching COMMITs
  Then executes operation and replies to client

Client waits for f+1 matching replies from different replicas.
```

#### Why Three Phases?

Two phases (pre-prepare + prepare) could allow a situation where a replica executes an operation but a future primary doesn't learn about it during view change. The commit phase ensures that if any honest replica executes, enough honest replicas know about it to propagate the decision.

#### View Changes (Primary Replacement)

```
1. Replica suspects primary is faulty (timeout on progress)
2. Replica sends <VIEW-CHANGE, v+1, ...> containing:
   - Set of 2f+1 PREPARE certificates from recent operations
3. New primary (replica v+1 mod 3f+1) collects 2f+1 VIEW-CHANGE messages
4. New primary sends <NEW-VIEW, v+1, V, O> containing:
   - V: the 2f+1 VIEW-CHANGE messages (proof of legitimacy)
   - O: reconstructed operation log (operations with valid PREPARE certificates)
5. All replicas verify NEW-VIEW and begin processing in new view
```

**Safety argument**: Among 2f+1 VIEW-CHANGE senders, at least f+1 are honest. If any honest replica executed operation O, it received 2f+1 COMMITs, meaning f+1 honest servers have PREPARE certificates for O. These f+1 servers are guaranteed to appear in the 2f+1 VIEW-CHANGE messages. So the new primary will discover O.

#### Applications

- Blockchain systems (Hyperledger Fabric)
- Stellar (federated BFT)
- Not widely deployed for traditional services (too expensive; prevention preferred)

---

## 2. Replication Strategies

### 2.1 Chain Replication

**Paper**: van Renesse & Schneider, "Chain Replication for Supporting High Throughput and Availability" (2004, OSDI)

#### Architecture

```
Configuration Service (CFG)
        |
        v
Client -> [Head] -> [Middle] -> ... -> [Tail] -> Client
          write                         read
          entry                         exit
```

Servers are organized in a linear chain. Writes enter at the head; reads are served by the tail.

#### Operations

```
Write path:
  1. Client sends write to Head
  2. Head assigns sequence number, applies write locally
  3. Head forwards to next server in chain
  4. Each server applies and forwards
  5. Tail applies, sends ACK back up the chain
  6. Tail replies to client (write committed)

Read path:
  1. Client sends read to Tail
  2. Tail replies immediately
```

**Key property**: The tail only sees fully-committed data (data that has traversed the entire chain). So reads from the tail are always consistent -- no possibility of reading uncommitted data.

#### Failure Handling

| Failure | Recovery | Mechanism |
|---------|----------|-----------|
| Head fails | Second server becomes new head | CFG detects and reconfigures; no data loss since head forwarded to successor |
| Tail fails | Predecessor becomes new tail | All committed data was already at predecessor; clients retry timed-out reads |
| Middle fails | Predecessor links directly to successor | Predecessor replays any in-flight updates that middle hadn't forwarded |
| Add server | Join at tail | Snapshot from current tail, then catch up on recent updates |

The **Configuration Service (CFG)** is a fault-tolerant service (e.g., Paxos/Raft-based) that decides chain membership. It is the single authority on who is alive, preventing split-brain.

#### CRAQ Extension

**Paper**: Terrace & Freedman, "Object Storage on CRAQ" (2009)

CRAQ (Chain Replication with Apportioned Queries) allows reads from ANY node in the chain, not just the tail:

```
Each object at each node is either:
  - Clean: node has the latest committed version
  - Dirty: node has received a write but tail hasn't committed yet

Read at non-tail node:
  if object is clean: reply immediately (fast path)
  if object is dirty: ask tail for latest committed version number
                      reply with that version (slow path but correct)
```

This distributes read load across all servers while maintaining strong consistency.

#### Comparison

| Property | Chain Replication | Primary-Backup | Quorum (Raft/Paxos) |
|----------|------------------|----------------|---------------------|
| Write latency | Chain length x RTT | 1 RTT (parallel to backups) | 1 RTT (majority) |
| Head network load | 1 outgoing message | N-1 outgoing messages | N-1 outgoing messages |
| Failures tolerated | N-1 (with CFG) | N-1 (with majority) | N/2 (majority) |
| Read consistency | Strong (from tail) | Depends on where reads go | Strong (from leader) |

**Chain replication advantage**: Head sends only one message (to next in chain), reducing network load vs. primary-backup where primary fans out to all backups.

**Chain replication disadvantage**: Write latency is proportional to chain length. Temporary failures (slow middle server) can stall the entire chain.

### 2.2 Load Balancing with Sharded Chains (rndpar)

Distribute many small shards across servers. Each server participates in multiple chains in different roles (head for some, tail for others, middle for others). This balances write load (heads) and read load (tails) across all servers.

When a server fails, repair work is distributed across many servers (each only needs to absorb a small portion of the failed server's shards).

---

## 3. Transaction Models

### 3.1 Two-Phase Commit (2PC)

#### ACID Properties

| Property | Definition |
|----------|-----------|
| **Atomicity** | All writes of a transaction apply, or none do (despite failures) |
| **Consistency** | Application invariants are maintained (e.g., balances sum to constant) |
| **Isolation** | Concurrent transactions produce results equivalent to some serial order |
| **Durability** | Committed writes survive crashes |

#### Two-Phase Locking (2PL) -- Concurrency Control

```
Rule 1: Acquire lock on each record before reading or writing
Rule 2: Hold ALL locks until after commit or abort

Effect: Conflicting transactions execute serially
  - No transaction can read/write a record while another holds its lock
  - Holding until commit prevents "dirty reads" and ensures serializability

Cost: Reduced concurrency; potential deadlocks (detected via timeouts or wait-for graphs)
```

#### Two-Phase Commit Protocol -- Atomicity Across Shards

```
Transaction Coordinator (TC): manages the transaction
Participants: shard servers holding data the transaction touched

Phase 1: PREPARE
  TC -> all Participants: PREPARE
  Each Participant:
    - Writes PREPARE record to persistent log (WAL)
    - Checks if it can commit (locks held, no conflicts)
    - Replies YES or NO

Phase 2: COMMIT/ABORT
  If ALL participants voted YES:
    TC: writes COMMIT to persistent log   <-- COMMIT POINT
    TC -> all Participants: COMMIT
    Each Participant: applies writes, releases locks, ACKs
  If ANY participant voted NO:
    TC: writes ABORT to persistent log
    TC -> all Participants: ABORT
    Each Participant: discards writes, releases locks, ACKs
```

#### Failure Scenarios

| Failure | State | Resolution |
|---------|-------|-----------|
| Participant crashes before PREPARE | No vote | TC times out, aborts |
| Participant crashes after voting YES | Prepared, locked | On recovery: read log, contact TC for decision; locks held until resolved |
| TC crashes before sending COMMIT | No decision | Participants wait (BLOCKING); TC recovers, re-reads log, re-sends decision |
| TC crashes after writing COMMIT | Decision persisted | TC recovers, re-sends COMMIT to any participant that hasn't ACKed |
| Network partition during PREPARE | Some participants unreachable | TC times out, aborts |

**Critical limitation**: 2PC is a **blocking protocol**. If the TC crashes after some participants voted YES, those participants hold locks and cannot proceed until the TC recovers. This can block other transactions indefinitely.

**Why participants cannot unilaterally abort after voting YES**: Another participant might have already received COMMIT and applied the writes. Unilateral abort would violate atomicity.

#### Performance Costs

- Multiple network round-trips (prepare + commit)
- Forced disk writes (WAL) at TC and all participants
- Locks held during prepare-to-commit window, blocking other transactions
- TC is a single point of failure for liveness (not safety)

---

### 3.2 Spanner: Globally Distributed Transactions

**Paper**: Corbett et al., "Spanner: Google's Globally-Distributed Database" (2012, OSDI)

#### Architecture

```
Data Center A              Data Center B              Data Center C
+------------------+     +------------------+     +------------------+
| Shard 1 (Paxos) |<--->| Shard 1 (Paxos) |<--->| Shard 1 (Paxos) |
| Shard 2 (Paxos) |<--->| Shard 2 (Paxos) |<--->| Shard 2 (Paxos) |
+------------------+     +------------------+     +------------------+

Each shard is replicated across datacenters via Paxos.
One Paxos leader per shard handles reads and writes.
```

#### Read-Write Transactions

Spanner combines 2PC with Paxos-replicated participants:

```
1. Client begins transaction, assigned unique transaction ID
2. Client reads from Paxos shard leaders (acquires read locks)
3. Client buffers writes locally
4. Client initiates commit:
   a. Choose one shard's Paxos group as Transaction Coordinator (TC)
   b. Send writes to respective shard leaders (participants)
5. Each participant:
   - Acquires write locks
   - Logs PREPARE via Paxos (replicated!)
   - Replies to TC with PREPARE timestamp
6. TC:
   - Chooses commit timestamp >= all PREPARE timestamps
   - Applies Start Rule: TS = TT.now().latest
   - Applies Commit Wait: delay until TS < TT.now().earliest
   - Logs COMMIT via Paxos
   - Sends COMMIT with timestamp to all participants
7. Each participant:
   - Logs COMMIT via Paxos
   - Applies writes at the commit timestamp
   - Releases locks
```

**Key innovation**: Replicating TC via Paxos solves the classic 2PC blocking problem. If TC leader crashes, Paxos elects a new one that can recover the COMMIT/ABORT decision.

#### Read-Only Transactions (The Breakthrough)

Read-only transactions require:
- **No locks**
- **No two-phase commit**
- **No transaction coordinator**

This achieves 10x lower latency than read-write transactions.

```
Mechanism: Snapshot Isolation with Multi-Version Concurrency Control (MVCC)

1. Each data record has multiple versions, each tagged with a timestamp
2. Read-only transaction gets timestamp TS = TT.now().latest
3. Each read returns the version with the highest timestamp < TS
4. Reads can go to any replica (not just Paxos leader) -- local replica!
```

**Safe Time**: Before serving a read at timestamp TS, a replica must be sure it has seen all writes with timestamps <= TS. Paxos leaders send writes in timestamp order; replicas track the latest timestamp they've received. If a replica's safe time < TS, it must wait for more Paxos writes before serving the read.

#### TrueTime

```
Hardware: GPS receivers + atomic clocks at each data center
API:
  TT.now()     -> TTinterval = [earliest, latest]
  TT.after(t)  -> true if t is definitely in the past
  TT.before(t) -> true if t is definitely in the future

Typical interval width: < 1ms (but sometimes 10+ ms)
```

The interval captures clock uncertainty. The key insight is that if you wait long enough (commit wait), you can guarantee timestamp ordering matches real-time ordering.

#### External Consistency Proof

```
Goal: If T1 completes before T2 starts, then TS1 < TS2

Start Rule: TS = TT.now().latest (at commit time)
Commit Wait: Don't release locks until TS < TT.now().earliest

Proof:
  T1's commit wait ensures: TS1 < real time when T1 finishes
  T2's start rule ensures: TS2 >= TT.now().latest >= real time when T2 starts
  Since T1 finishes before T2 starts:
    TS1 < T1_finish_time <= T2_start_time <= TS2
  Therefore TS1 < TS2. QED.
```

#### Impact

Spanner demonstrated that globally distributed transactions with external consistency are practical. CockroachDB, YugabyteDB, and TiDB adopted similar architectures (using hybrid logical clocks instead of GPS/atomic clocks).

---

### 3.3 FaRM: Optimistic Concurrency Control with RDMA

**Paper**: Dragojevi&#263; et al., "No Compromises: Distributed Transactions with Consistency, Availability, and Performance" (2015, SOSP)

#### Hardware Innovations

| Technology | What It Does | Performance Gain |
|-----------|-------------|-----------------|
| **RDMA** (Remote Direct Memory Access) | NIC reads/writes remote memory without involving remote CPU | Eliminates server-side CPU overhead for reads |
| **Kernel bypass** | Application talks directly to NIC via DMA queues | Eliminates syscall/context-switch overhead; 5us latency, 10M+ ops/sec |
| **NVRAM** (Non-Volatile RAM) | Battery-backed RAM; SSD dump on power failure | 200ns writes vs. 10ms disk writes |

#### Transaction Protocol

```
EXECUTE Phase:
  - Client reads objects via one-sided RDMA (no server CPU involvement!)
  - Records object addresses, values, and version numbers
  - Buffers writes locally

LOCK Phase:
  - For each written object: client appends LOCK record to primary's log via RDMA
  - Primary (when it processes log): checks version number + lock flag
    - If version matches and unlocked: set lock flag, reply YES
    - If version mismatch or locked: reply NO (abort transaction)

VALIDATE Phase (for read-only objects):
  - Client re-reads version number + lock flag via one-sided RDMA
  - If version changed or object locked: abort (someone else modified it)
  - No server CPU involved!

COMMIT-BACKUP Phase:
  - Client writes COMMIT-BACKUP records to all backups via RDMA
  - Wait for NVRAM ACKs (hardware acknowledgment, not software processing)

COMMIT-PRIMARY Phase:
  - Client writes COMMIT-PRIMARY to one primary via RDMA
  - This is the COMMIT POINT
  - Primary processes log entry: applies writes, releases locks
  - Backups process their COMMIT-BACKUP entries: apply writes

TRUNCATE Phase:
  - Client notifies all participants to discard transaction log entries
```

#### Why Optimistic Concurrency Control?

- RDMA enables fast reads without locking (server CPU not involved)
- Locks only acquired at commit time, not during reads
- Works well when conflicts are rare (< 1% of transactions abort)
- Aborted transactions are simply retried

#### Performance

- ~58 microseconds for simple transactions
- ~100x faster than Spanner (which takes 10-100ms due to geographic replication + Paxos)
- Millions of transactions per second on a small cluster

#### Limitations

- Single datacenter only (RDMA doesn't work across WANs)
- All data must fit in total RAM
- Requires specialized hardware (RDMA NICs, battery-backed RAM)
- High conflict rates degrade performance (many aborts + retries)

---

## 4. Coordination Services

### 4.1 ZooKeeper

**Paper**: Hunt et al., "ZooKeeper: Wait-Free Coordination for Internet-Scale Systems" (2010, USENIX ATC)

#### Purpose

ZooKeeper provides a fault-tolerant coordination service. Instead of each application implementing Raft/Paxos internally, applications store coordination data (locks, configuration, leader election state) in ZooKeeper.

#### Data Model

```
/ (root)
├── /config
│   ├── /config/db_host    "10.0.0.1"
│   └── /config/db_port    "5432"
├── /workers
│   ├── /workers/w1        "idle"    (ephemeral)
│   └── /workers/w2        "busy"    (ephemeral)
└── /locks
    └── /locks/job-123     ""        (ephemeral, sequential)
```

**Znode types**:
| Type | Behavior | Use Case |
|------|----------|----------|
| Regular | Persists until explicitly deleted | Configuration, persistent state |
| Ephemeral | Automatically deleted when creating session ends | Liveness detection, locks |
| Sequential | Name appended with monotonic counter | Ordering, queue, fair locks |

#### API

```
create(path, data, flags)  -> path
  flags: ephemeral, sequential
  EXCLUSIVE: fails if znode already exists

delete(path, version)
  version check: only delete if current version matches (mini-transaction)

exists(path, watch) -> bool
  Optional watch: notifies client when znode is created or deleted

getData(path, watch) -> data, version
  Optional watch: notifies client when data changes

setData(path, data, version) -> version
  version check: only update if current version matches

getChildren(path, watch) -> list of child names
  Optional watch: notifies on child added/removed
```

#### Ordering Guarantees

| Guarantee | Meaning | Mechanism |
|-----------|---------|-----------|
| **Linearizable writes** | All clients see writes in the same total order | All writes go through Raft/ZAB leader |
| **FIFO client order** | Each client's operations execute in the order issued | Client tags operations with session + sequence |
| **Read-your-own-writes** | Client always sees effects of its own prior writes | Client tracks last ZXID; follower waits if behind |

**Reads are NOT linearizable by default**: Reads go to the client's local follower, which may lag behind the leader. This means a read might not see the most recent write by another client.

**sync() operation**: Forces the follower to catch up with the leader before serving the next read. Provides linearizable reads at the cost of a round-trip to the leader.

#### Coordination Patterns

**Leader Election**:
```
1. All candidates: create("/election/leader", ephemeral=true)
2. Only one succeeds (exclusive create) -> that process is leader
3. Others: exists("/election/leader", watch=true) -> wait for deletion
4. When leader crashes: session expires, ephemeral znode deleted
5. Watch fires, candidates retry step 1
```

**Configuration Management**:
```
1. Config writer: setData("/config/db_host", "10.0.0.2")
2. Config readers: getData("/config/db_host", watch=true)
3. When config changes: watch fires, readers re-read
```

**Group Membership**:
```
1. Worker joins: create("/workers/" + hostname, ephemeral=true)
2. Controller: getChildren("/workers", watch=true)
3. When worker crashes: ephemeral znode deleted, watch fires
4. Controller re-reads children list -> discovers departed worker
```

**Distributed Lock (with fairness)**:
```
1. Client creates sequential ephemeral: create("/locks/lock-", seq+ephemeral)
   -> returns "/locks/lock-0000000007"
2. Client calls getChildren("/locks/")
3. If this client's znode is the lowest-numbered: lock acquired
4. Otherwise: watch the next-lower-numbered znode
   (NOT the lock holder -- this causes "herd effect")
5. When that znode is deleted (watch fires): re-check if now lowest
6. To unlock: delete own znode
```

#### Fencing (Preventing Zombie Processes)

When ZooKeeper declares a session dead and deletes its ephemeral znodes:
- ZooKeeper stops accepting operations from that session
- Even if the process is still alive (slow network, GC pause), its operations will be rejected
- This prevents a "zombie" coordinator from modifying shared state after its replacement has taken over

**Key principle**: A single entity (ZooKeeper) decides who is alive. This prioritizes agreement over accuracy -- better to incorrectly declare a live process dead (and have it re-join) than to have two processes both believing they are the leader.

#### Performance

- All data in memory: fast reads
- 10s of thousands of operations/second
- ~1.3ms per operation
- Reads scale with followers (each follower serves reads independently)
- Writes bottlenecked at leader (all writes serialized through Raft/ZAB)
- Leader failure: few seconds of unavailability during election

---

## 5. Caching at Scale

### 5.1 Memcached at Facebook

**Paper**: Nishtala et al., "Scaling Memcache at Facebook" (2013, NSDI)

#### Architecture: Look-Aside Caching

```
Web Server (client)
    |
    |-- 1. GET key from Memcached
    |   (cache hit? return cached value)
    |
    |-- 2. Cache miss: query MySQL
    |
    |-- 3. SET key=value in Memcached
    |
    |-- On write: DELETE key from Memcached
    |              Write to MySQL
    |              (McSqueal invalidates other caches via binlog)
```

**Why "look-aside" (not "look-through")?**
- Application controls caching logic, not the cache
- Cache misses go directly to database, cache fills are explicit
- Simple: memcached is just a hash table (get/set/delete)

#### Scale Numbers

| Layer | Throughput |
|-------|-----------|
| Single MySQL | ~100K queries/sec |
| Single Memcached | ~1M get/set ops/sec |
| Total system | Billions of ops/sec |

#### Problem: Thundering Herd

```
1. Popular key K is invalidated (deleted from cache)
2. 1000 clients simultaneously request K
3. All 1000 get cache miss
4. All 1000 query MySQL for the same data
5. MySQL overwhelmed
```

**Solution: Leases**
```
1. First client gets cache miss -> memcached grants a LEASE (token)
2. Subsequent clients for same key get "retry later" response
3. First client queries MySQL, stores result with lease token
4. Subsequent clients now get cache hit
```

The lease prevents multiple clients from simultaneously querying the database for the same hot key.

#### Multi-Cluster Architecture

```
Region (one geographic location)
├── Cluster 1 (frontend cluster)
│   ├── Web servers
│   └── Memcached pool
├── Cluster 2 (frontend cluster)
│   ├── Web servers
│   └── Memcached pool
├── ...
├── Regional Pool (shared, less-popular keys)
└── MySQL (storage, one copy per region)
```

**Why multiple clusters instead of one big one?**

| Problem with one huge cluster | Solution with multiple clusters |
|------------------------------|-------------------------------|
| Popular keys need many replicas | Each cluster has its own copy of hot keys |
| Single large pool = many servers contacted per request | Smaller pools = fewer servers per request |
| In-cast congestion (many replies arrive simultaneously) | Smaller fan-out per request |
| Expensive cross-section network bandwidth | Localized traffic within cluster |

**Regional pool**: Shared across clusters for infrequently accessed keys. Saves RAM (one copy instead of N copies) for keys that don't need replication.

#### Cross-Region Consistency

```
Primary Region: MySQL master
Remote Region: MySQL read-replica + Memcached

Write flow:
  1. Web server (any region) writes to MySQL master (primary region)
  2. MySQL replication sends update to remote replicas
  3. McSqueal (at remote region) reads MySQL binlog
  4. McSqueal sends DELETE to remote Memcached servers

Problem: Race condition
  - Client in remote region reads from Memcached (stale)
  - Client writes to MySQL master
  - Before McSqueal invalidates remote cache: other clients read stale data

Solution: "Remote marker" mechanism
  - Writing client sets a marker in remote memcached
  - Reads check for marker; if present, read from MySQL master instead
  - McSqueal clears marker when invalidation arrives
```

#### Cold Cluster Warmup

New clusters start with 0% cache hit rate. If all requests go to MySQL, the database is overwhelmed.

**Solution**: Clients in the new cluster first try to GET from an existing ("warm") cluster. If found, they SET in the new cluster. This lazily populates the new cluster's cache without hitting the database.

#### Failure Handling: Gutter Pool

Small pool of idle memcached servers. When primary memcached servers fail:
- Clients redirect misses to gutter pool instead of MySQL
- Gutter absorbs the load that would otherwise overwhelm the database
- Gutter entries have short TTLs (expire quickly once primary recovers)

#### Consistency Model

Facebook chose **eventual consistency** (not linearizability):
- Social media content tolerates seconds-old data
- Linearizability would require all caches to acknowledge invalidation before any read returns new value -- too expensive
- Read-your-own-writes: achieved by invalidating local cluster cache after writes

---

## 6. Modern Distributed Systems

### 6.1 Ray: Distributed Computing Framework

**Paper**: Moritz et al., "Ray: A Distributed Framework for Emerging AI Applications" (2018, OSDI)

#### Problem

MapReduce and Spark handle batch processing but not fine-grained, stateful, dynamic computation needed for machine learning (reinforcement learning, hyperparameter search, model serving).

#### Core Abstractions

**Tasks** (stateless):
```python
@ray.remote
def f(x):
    return x * x

# Asynchronous invocation -> returns future (ObjectRef)
future = f.remote(3)

# Block until result is ready
result = ray.get(future)  # -> 9
```

**Actors** (stateful):
```python
@ray.remote
class Counter:
    def __init__(self):
        self.n = 0
    def increment(self):
        self.n += 1
        return self.n

counter = Counter.remote()
future = counter.increment.remote()  # -> 1
```

**Futures (ObjectRefs)**:
- Handle to a value that may not exist yet
- Can be passed as arguments to other tasks (data dependency)
- System decides where to execute based on data locality
- Immutable once created

#### Architecture

```
Driver (user program)
    |
    v
Distributed Scheduler
  - Local scheduler per node (fast, handles most tasks)
  - Global scheduler (spillover for overloaded nodes)
    |
    v
Worker processes (execute tasks)
    |
    v
Object Store (shared memory per node)
  - Stores task results (futures)
  - Distributed via object transfer protocol
```

#### Ownership Model (Key Innovation)

Instead of a centralized metadata store, Ray shards future metadata by ownership:

```
Task A calls f.remote(x) -> future F
  A is the OWNER of F
  Worker W (where f executes) holds the VALUE of F

Ownership responsibilities:
  - Track where the value is stored
  - Manage reference counting
  - Decide when to garbage collect
  - Initiate reconstruction if value is lost

If the owner (A) crashes: all its futures are lost
  Workers computing those futures also terminate ("fate sharing")
  Upstream tasks must be re-executed
```

**Why ownership over centralized GCS?** Avoids central bottleneck for metadata lookups. Each node manages its own futures without coordination.

#### Fault Tolerance: Lineage Reconstruction

```
Ray stores the "lineage" of each future:
  F = f(x) where x = g(y) where y = ...

If a value is lost (worker crash):
  1. Owner detects loss (heartbeat failure)
  2. Owner re-submits the task to scheduler
  3. If inputs are also lost: recursively re-execute their lineage
  4. Fate sharing: if owner crashes, dependent workers terminate

Checkpointing: for long lineages, periodic checkpoints avoid
re-executing the entire chain
```

#### Performance Characteristics

- Task overhead: ~1ms (scheduling + data transfer)
- Suitable for tasks taking > 10ms (amortizes overhead)
- Object store: shared memory (zero-copy for local reads)
- Scales to 1000+ nodes

---

### 6.2 Bitcoin: Consensus Without Identity

**Paper**: Nakamoto, "Bitcoin: A Peer-to-Peer Electronic Cash System" (2008)

#### Problem

Create a payment system where:
- No central authority
- No identity verification
- Participants may be malicious
- Double-spending must be prevented

#### Transaction Structure

```
Transaction T3:
  Input:  hash(T2) + signature(owner_of_T2, T3_data)
  Output: public_key(new_owner) + amount

Verification:
  1. T2 exists and has unspent output
  2. Signature matches T2's output public key
  3. No other transaction spends T2's output
```

Each transaction references a previous transaction (forming a chain of ownership). The UTXO (Unspent Transaction Output) model tracks which outputs have been spent.

#### Blockchain Structure

```
Block N-1              Block N                Block N+1
+------------------+   +------------------+   +------------------+
| hash(Block N-2)  |   | hash(Block N-1)  |   | hash(Block N)    |
| nonce            |   | nonce            |   | nonce            |
| timestamp        |   | timestamp        |   | timestamp        |
| miner reward tx  |   | miner reward tx  |   | miner reward tx  |
| tx1, tx2, ...    |   | tx3, tx4, ...    |   | tx5, tx6, ...    |
+------------------+   +------------------+   +------------------+
```

Each block contains a hash of the previous block, creating a tamper-evident chain. Modifying any block invalidates all subsequent blocks.

#### Proof of Work (Mining)

```
Goal: Find nonce such that hash(block_header + nonce) < target

  - Target has N leading zeros (N adjusts to maintain ~10 min blocks)
  - Probability of success per hash: ~1/2^N
  - Cannot predict which nonce works; must try randomly
  - Average time to find: proportional to 2^N / hash_rate

Mining reward:
  - Miner includes a special "coinbase" transaction paying themselves
  - This is the only way new bitcoins are created
  - Reward halves every ~4 years (incentive structure)
```

#### Consensus Mechanism

**No voting, no identity, no quorum**. Instead:
- Random selection weighted by CPU power (proof of work)
- The miner who finds a valid block first gets to extend the chain
- All peers accept the **longest valid chain** as authoritative

```
Fork resolution:
  Peer A mines block at height H -> broadcasts
  Peer B mines different block at height H -> broadcasts

  Some peers see A's block first, others see B's
  Peers mine on top of whichever they saw first

  Eventually one fork extends further (more miners working on it)
  Peers switch to the longer fork
  Transactions in the abandoned fork return to the mempool
```

#### Double-Spending Attack

```
Attacker:
  1. Send BTC to merchant (transaction in block N)
  2. Merchant waits for K confirmations (blocks N through N+K)
  3. Merchant ships goods
  4. Attacker secretly mines alternative chain from block N-1
     (without the payment transaction)
  5. If attacker's chain becomes longer: network switches to it
     Payment transaction disappears; attacker keeps goods + BTC

Defense: Wait for more confirmations. With < 50% of mining power,
probability of overtaking decreases exponentially with each confirmation.
6 confirmations is the convention (~1 hour).
```

#### 51% Attack

If an attacker controls > 50% of total mining power:
- Can always build the longest chain (eventually)
- Can double-spend at will
- Can censor transactions (refuse to include them)
- CANNOT steal coins (cannot forge signatures)
- CANNOT change the protocol rules (other peers validate blocks)

#### Scalability Limitations

| Limitation | Impact |
|-----------|--------|
| ~10 min block interval | Slow confirmation times |
| Block size limit (~1MB) | ~5 transactions/sec (vs. Visa ~5000/sec) |
| Full replication | Every peer stores entire blockchain |
| Proof-of-work energy consumption | Environmental concerns |
| No finality | Transactions can theoretically be reversed (with enough hash power) |

---

## 7. Security and Trust Models

### 7.1 SUNDR: Fork Consistency

**Paper**: Li et al., "Secure Untrusted Data Repository" (2004, OSDI)

#### Threat Model

The server is untrusted (buggy, compromised, or malicious). It may:
- Return stale data
- Selectively hide updates from some clients
- Serve different views to different clients

It CANNOT:
- Forge client signatures (doesn't have private keys)
- Modify signed data without detection

#### Cryptographic Building Blocks

**Content-hash storage**:
```
Write: k = hash(data); store(k, data)
Read:  data = fetch(k); verify hash(data) == k

Property: Server cannot modify data without changing the hash.
Client detects tampering by verifying hash.
```

**Digital signatures**:
```
Write: sig = sign(data, private_key); store(data, sig)
Read:  fetch(data, sig); verify(data, sig, public_key)

Property: Server cannot create valid signatures without private key.
Enables mutable data (same key, new value, new signature).
```

#### The Fork Consistency Guarantee

SUNDR cannot prevent the server from "forking" clients (showing different histories to different clients). But it guarantees:

**Once a fork occurs, it can never be healed.**

```
Normal operation:
  Client A writes x=1, signs log entry
  Client B reads x=1, writes y=2, signs log entry referencing A's

Fork attack:
  Server hides A's write from Client C
  C writes z=3, signs log entry (doesn't reference A's)

  Now: A and B are on one fork; C is on another
  Server CANNOT merge these forks without detection
  because C's signed log entry lacks reference to A's operation,
  and A/B's entries lack reference to C's operation.
```

**Detection**: If clients can communicate out-of-band (e.g., phone call comparing latest version vectors), they can detect forks. SUNDR makes forks permanent and detectable, not preventable.

#### Version Vector Mechanism

Each client's signed log entry includes a version vector:
```
{A: 5, B: 3, C: 7}  -- means: "I have seen A's first 5 operations,
                          B's first 3, and C's first 7"
```

Two version vectors are comparable (one dominates the other) if no fork exists. If vectors are incomparable (A > B on some entries, B > A on others), a fork has occurred.

### 7.2 BFT in the Trust Spectrum

```
Trust Level:          Fully Trusted ←————————→ Fully Adversarial
                           |                         |
Protocol:            No replication    Raft/Paxos    PBFT    Bitcoin
Servers needed:           1              2f+1        3f+1    open
Failure model:          None          Crash-stop   Byzantine  Byzantine
                                                              + no identity
```

---

## 8. Key Papers Referenced

| Paper | Year | Venue | Key Contribution |
|-------|------|-------|-----------------|
| Lamport, "The Part-Time Parliament" | 1998 | ACM TOCS | Paxos consensus algorithm |
| Lamport, "Paxos Made Simple" | 2001 | SIGACT News | Accessible Paxos explanation |
| Ongaro & Ousterhout, "In Search of an Understandable Consensus Algorithm" | 2014 | USENIX ATC | Raft consensus protocol |
| Castro & Liskov, "Practical Byzantine Fault Tolerance" | 1999 | OSDI | PBFT for real-world BFT |
| van Renesse & Schneider, "Chain Replication" | 2004 | OSDI | Chain topology for high throughput + strong consistency |
| Terrace & Freedman, "CRAQ" | 2009 | USENIX ATC | Apportioned queries on chain replicas |
| Hunt et al., "ZooKeeper" | 2010 | USENIX ATC | Wait-free coordination service |
| Gray, "Notes on Database Operating Systems" | 1978 | Springer | Two-phase commit protocol |
| Corbett et al., "Spanner" | 2012 | OSDI | Globally distributed transactions with TrueTime |
| Dragojevi&#263; et al., "FaRM: No Compromises" | 2015 | SOSP | RDMA-based distributed transactions |
| Nishtala et al., "Scaling Memcache at Facebook" | 2013 | NSDI | Look-aside caching at billion-request scale |
| Moritz et al., "Ray" | 2018 | OSDI | Distributed framework for fine-grained AI tasks |
| Nakamoto, "Bitcoin" | 2008 | - | Decentralized consensus via proof of work |
| Li et al., "SUNDR" | 2004 | OSDI | Fork consistency for untrusted storage |

---

## 9. Cross-Cutting Design Patterns

### 9.1 Fault Tolerance Techniques Summary

| Technique | Used By | Tolerates | Overhead |
|-----------|---------|-----------|----------|
| Replicated state machine | Raft, Paxos, PBFT | f crashes (2f+1) or f Byzantine (3f+1) | Log replication, leader election |
| Primary-backup | GFS, FaRM | f crashes (f+1 replicas) | Write forwarding, failover |
| Chain replication | CR, CRAQ | N-1 crashes (N replicas + CFG) | Sequential forwarding |
| Checkpoint + replay | Ray, ZooKeeper | Worker crashes | Periodic snapshots, lineage tracking |
| Proof of work | Bitcoin | < 50% adversarial compute | Energy consumption, slow confirmation |

### 9.2 Consistency-Performance Spectrum (Practical Systems)

```
Strongest ←——————————————————————————————————————→ Fastest

Spanner (external consistency, TrueTime)
  |
Raft/Paxos (linearizable, majority quorum)
  |
ZooKeeper (linearizable writes, non-linearizable reads)
  |
Chain Replication (linearizable, sequential forwarding)
  |
CRAQ (linearizable reads from any node, but may need tail query)
  |
FaRM (strict serializability, single datacenter, RDMA)
  |
Memcached at Facebook (eventual consistency, look-aside cache)
  |
Bitcoin (probabilistic finality, ~10 min confirmation)
```

### 9.3 When to Use What

| Requirement | Recommended System/Pattern |
|------------|---------------------------|
| Strong consistency + geo-distribution | Spanner (TrueTime or hybrid clocks) |
| Strong consistency + low latency | FaRM (if single DC + RDMA hardware) |
| Fault-tolerant coordination | ZooKeeper / etcd (Raft-based) |
| High-throughput replication | Chain Replication (write-heavy) |
| Web-scale caching | Memcached + look-aside pattern |
| Distributed computation (ML/AI) | Ray (tasks + actors + futures) |
| Untrusted participants, no identity | Bitcoin / proof-of-work blockchain |
| Untrusted server, trusted clients | SUNDR / fork consistency |
| Byzantine faults, known participants | PBFT (3f+1 replicas) |
| Cross-shard transactions | 2PC (with Paxos-replicated coordinator for availability) |
