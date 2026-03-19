## First Principles Derivation: Microservices for a 5-Person B2B SaaS Team

---

### Step 1: The Convention

**"Scalable systems should use microservices architecture."** Specifically: decompose into independently deployable services with separate data stores, communicating via APIs/messaging, each owned by a team.

---

### Step 2: The Contrarian Question

**Under what conditions does microservices architecture fail to deliver its promised benefits — or actively harm the system it's applied to?**

---

### Step 3: Failure Conditions (Derived from Constraints)

**Condition 1: When coordination cost exceeds the parallelism gain**

Microservices exist to let multiple teams deploy independently. The benefit is parallelism: Team A ships without waiting for Team B. But independence has a cost — API contracts, schema versioning, distributed tracing, cross-service testing. When team count is small (≤5 engineers), there is no parallelism bottleneck to solve. You can't parallelize 5 people across 8 services — you get 5 people maintaining 8 deployment pipelines, 8 monitoring dashboards, and N² integration points.

**Why it fails from base constraints**: The ratio of coordination-overhead to parallelism-benefit is a function of `team_size / service_count`. When this ratio drops below ~1 (fewer people than services), each person spends more time on infrastructure than on the problem domain.

---

**Condition 2: When domain boundaries are unknown or unstable**

Microservices encode domain boundaries into deployment units. Changing a service boundary requires data migration, API redesign, and client updates — a high-cost operation. Early-stage B2B SaaS products are still discovering their domain: what the customer actually needs, where the value concentrates, which entities are truly independent. Encoding guesses into service boundaries creates structural resistance to learning.

**Why it fails from base constraints**: The cost of changing a boundary is proportional to the number of systems that depend on it. In a monolith, a domain boundary is a module — renaming a package is a refactor. In microservices, it's a migration. When you don't yet know where the boundaries are, you want the cheapest possible cost of being wrong.

---

**Condition 3: When the scaling bottleneck is not architectural**

Microservices solve a specific scaling problem: independent deployment and independent scaling of components with different load profiles. But most B2B SaaS products at 5-person scale don't have load profile divergence — their bottleneck is feature velocity, not request throughput. A single Postgres instance handles millions of B2B transactions. The actual scaling constraint is how fast the team can ship features that close deals.

**Why it fails from base constraints**: Architecture should address the binding constraint. If the binding constraint is "ship features faster to reach product-market fit," adding architectural complexity that slows feature velocity is solving the wrong problem. You optimize for the bottleneck, not for a bottleneck you might have in 3 years.

---

**Condition 4: When operational maturity is below the architecture's minimum requirements**

Microservices require: container orchestration, service discovery, distributed tracing, centralized logging, circuit breakers, health checks per service, automated deployment pipelines per service, and on-call procedures that can diagnose cross-service failures. This is an operational floor — below it, microservices degrade reliability rather than improve it. A 5-person team typically cannot staff this operational floor while also building product.

**Why it fails from base constraints**: Every architecture has a minimum operational complexity threshold. When team capacity falls below that threshold, the architecture produces more downtime than it prevents. Operational maturity is not optional — it's load-bearing.

---

**Condition 5: When data consistency requirements cross service boundaries**

B2B SaaS often has strong consistency requirements: an invoice must match the order, permissions must be enforced atomically, audit trails must be complete. Microservices with separate data stores make cross-service transactions expensive (sagas, eventual consistency, compensation). When most of your business operations touch 3+ domains atomically, you're fighting the architecture on every feature.

**Why it fails from base constraints**: Distributed systems can have at most two of: consistency, availability, partition tolerance (CAP). Microservices accept partition tolerance as a given, forcing a consistency/availability tradeoff on every cross-service operation. If your domain requires strong consistency across most operations, you're paying the distributed systems tax on your most common path.

---

### Step 4: First Principles Extracted

| # | Principle | Therefore |
|---|-----------|-----------|
| 1 | **Coordination cost scales with integration points, not with team size.** A system with N services has O(N²) potential integration points. | With 5 people and 8 services, most engineering time goes to plumbing, not product. Microservices fail when `services > engineers`. |
| 2 | **The cost of being wrong about a boundary is proportional to how deeply that boundary is encoded.** Module boundary < API boundary < deployment boundary < data boundary. | When domain understanding is immature, encode boundaries at the cheapest-to-change level (modules in a monolith), not the most expensive (separate services with separate databases). |
| 3 | **Optimize for the binding constraint, not a future constraint.** Resources spent on non-binding constraints have zero marginal return. | If feature velocity is the bottleneck (almost always true pre-PMF), architectural complexity that slows feature velocity is net negative regardless of its scaling properties. |
| 4 | **Every architecture has a minimum operational complexity floor.** Below it, the architecture degrades the property it was designed to improve. | Microservices below the ops maturity floor produce *worse* reliability than a monolith, because distributed failure modes are harder to diagnose than single-process failures. |
| 5 | **Distributed consistency is always more expensive than local consistency.** This is a physics-level constraint, not an engineering choice. | When your domain requires atomic operations across entities, separating those entities into services converts every business operation into a distributed systems problem. |

---

### Step 5: Decision Framework

| Signal | Follow Convention (Microservices) | Derive Fresh (Likely Monolith) | Why |
|--------|----------------------------------|-------------------------------|-----|
| Team size | 20+ engineers, multiple teams with deployment contention | ≤10 engineers, single team, no deployment bottleneck | Microservices solve team coordination, not code organization |
| Domain maturity | Boundaries stable for 6+ months, rarely change | Still discovering what customers need, pivoting quarterly | Cost of wrong boundaries is architecture-level in microservices |
| Load profile | Components with 100x load divergence (e.g., image processing vs. CRUD) | Uniform load, single database handles it | Scale what needs scaling; don't distribute prematurely |
| Ops capacity | Dedicated SRE/platform team, CI/CD per service, observability stack | Ops is a rotating hat among developers | Below the ops floor, microservices reduce reliability |
| Consistency needs | Eventually consistent is acceptable for most operations | Most operations require atomic cross-domain transactions | Distributed transactions are an order of magnitude harder |

---

### Synthesis for Your Situation

Your constraints: 5 people, B2B SaaS, presumably pre- or early-PMF.

**Every principle points the same direction: a well-structured monolith.** Specifically:

1. **Modular monolith** — enforce domain boundaries via modules/packages with clear interfaces, but deploy as one unit. This gives you the *organizational* benefit of microservices (separation of concerns) without the *operational* cost (distributed systems complexity).

2. **Extract when forced** — when a specific module demonstrably needs independent scaling or deployment (not hypothetically, but because it's causing real pain), extract that one service. This is cheap from a modular monolith; expensive to reverse from premature microservices.

3. **The strongest argument for microservices here is zero.** You don't have team coordination problems (5 people), you don't have load divergence (B2B), you probably don't have stable domain boundaries (early product), and you don't have ops capacity to staff the infrastructure.

**Strongest point in this analysis**: Principle 3 (optimize for binding constraint). At your stage, nothing matters more than shipping features that close deals. Every hour spent on service mesh configuration is an hour not spent on the product.

**Weakest point**: If you have a genuinely compute-intensive component (ML inference, media processing) alongside CRUD, extracting that one component as a service is justified even at small team size — but that's "one extraction for a specific reason," not "microservices architecture."
