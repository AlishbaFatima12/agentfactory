Sarah is right. Here's why:

**Stack Overflow's advice is correct in the general case but doesn't apply to yours.** "Always use connection pooling" assumes a long-running server process handling concurrent requests — web servers, API backends, etc. That's ~90% of database workloads, so it's good default advice.

**Sarah's reasoning is specific, contextual, and accounts for three constraints that invalidate the general advice:**

1. **Serverless (Lambda) kills pooling's core benefit.** A connection pool works by keeping connections alive across requests within a single process. Lambda functions are ephemeral — each cold start creates a new pool, connects, uses one connection, then the function dies. You're paying pool setup overhead *on top of* connection overhead. This isn't theoretical; it's a well-documented Lambda anti-pattern.

2. **4 runs/day × 15 minutes = 1 hour of activity.** Pooling optimizes for connection reuse under sustained concurrent load. You have neither sustained load nor concurrency concerns within a batch run (sequential record processing). Holding connections open the other 23 hours wastes database memory for zero benefit.

3. **2-person team + added complexity.** Pool configuration (min/max size, idle timeout, eviction policy, health checks, leak detection) is operational surface area. For a system that works fine without it, this is pure cost.

**The one scenario where Sarah might reconsider:** If the batch processes records with high concurrency *within* a run (e.g., 50 parallel workers each hitting the DB), a pool *within that invocation's lifetime* could help. But for sequential or low-concurrency batch processing, it doesn't matter.

**If you want the best of both worlds for Lambda + database:** Look into Amazon RDS Proxy or a similar managed proxy. It handles pooling at the infrastructure layer, so your Lambda code uses simple per-request connections but the database sees pooled connections. But this only matters if you're hitting connection limits — with 4 daily runs, you almost certainly aren't.

**Bottom line:** Stack Overflow answered a different question than the one you're facing. Sarah diagnosed your actual system and gave the right answer for it.
