# Cascade Map: Monolith-to-Microservices Migration at CloudKitchen

## Central Decision
Replace CloudKitchen's monolithic Django app with microservices architecture (Series B startup, 85 employees, 3,000 restaurant partners, 50K orders/day) to ship features 3x faster.

## Domain Analysis

### Domain 1: Engineering Team (~30-40 engineers estimated for Series B)
| Order | Effect | Mechanism |
|-------|--------|-----------|
| 1st | Engineers must learn distributed systems patterns (service discovery, circuit breakers, eventual consistency) | Monolith developers have single-process debugging mental models; microservices require understanding network partitions, CAP theorem tradeoffs, and distributed tracing |
| 2nd | Team must be reorganized around service ownership boundaries | Conway's Law dictates that architecture mirrors team structure; microservices require dedicated teams per service domain (orders, payments, restaurant management, delivery) |
| 3rd | Knowledge silos form as engineers specialize in "their" service and lose understanding of the full system | Over 6-12 months, an engineer who owns the payment service cannot debug an order-flow issue because they no longer understand the restaurant-matching logic, even though in the monolith they could trace the full path |

### Domain 2: DevOps and Infrastructure
| Order | Effect | Mechanism |
|-------|--------|-----------|
| 1st | Infrastructure complexity increases 5-10x (multiple deployments, service meshes, container orchestration) | A single Django deployment becomes 10-20 independently deployed services, each requiring its own CI/CD pipeline, health checks, scaling rules, and secrets management |
| 2nd | Need to hire dedicated platform/DevOps engineers (2-4 FTEs) | The infrastructure burden exceeds what application developers can manage part-time; an 85-person startup may not have this capacity yet |
| 3rd | Infrastructure costs become the largest engineering budget line item, rivaling headcount | Kubernetes clusters, service mesh licensing, distributed tracing platforms, and multi-region deployment for fault tolerance cost more than the startup expects; cloud bills grow 3-5x |

### Domain 3: Restaurant Partners (3,000)
| Order | Effect | Mechanism |
|-------|--------|-----------|
| 1st | API contract changes as monolith endpoints are decomposed into service-specific APIs | Restaurant-facing integrations (menu management, order acceptance, payout APIs) must be re-versioned and potentially re-integrated |
| 2nd | Integration stability degrades during migration as service boundaries shift | Restaurant POS integrations that were stable break intermittently as responsibilities move between services; partners experience dropped orders or delayed payouts |
| 3rd | Restaurant partners lose trust and deprioritize CloudKitchen volume | Restaurants typically work with 3-4 delivery platforms; reliability issues cause them to shift promotional efforts and menu updates to more stable competitors (DoorDash, Uber Eats) |

### Domain 4: End Customers (Order Experience)
| Order | Effect | Mechanism |
|-------|--------|-----------|
| 1st | Latency increases as single-process function calls become network requests | What was a 5ms in-process call becomes a 50-200ms network hop; a single order flow touching 5 services adds 250ms-1s of cumulative latency |
| 2nd | New failure modes emerge that did not exist in the monolith (partial failures, timeouts, inconsistent state) | An order can be accepted but payment fails, or payment succeeds but the restaurant never receives the order — states that are impossible in a single-transaction monolith |
| 3rd | Customer satisfaction drops during transition, showing up in app store ratings and NPS | Users do not know or care about architecture; they experience slower ordering, occasional double charges, or phantom orders — and they leave reviews |

### Domain 5: Hiring Pipeline
| Order | Effect | Mechanism |
|-------|--------|-----------|
| 1st | Job postings shift from "Django developer" to "distributed systems engineer" | The skills required change fundamentally; Python/Django generalists cannot maintain a microservices architecture without significant upskilling |
| 2nd | Candidate pool narrows while compensation requirements increase | Distributed systems engineers command 20-40% salary premiums; the startup competes with larger companies for the same talent |
| 3rd | Culture shifts from generalist ("everyone can work on anything") to specialist ("stay in your lane") | The startup's early-stage advantage of cross-functional flexibility is lost; new hires are hired for specific services and resist context-switching |

### Domain 6: Product Velocity (the stated goal)
| Order | Effect | Mechanism |
|-------|--------|-----------|
| 1st | Feature velocity DECREASES for 6-12 months during decomposition | Counter to the VP's claim, the immediate effect is slower delivery because engineering time goes to infrastructure and decomposition, not features |
| 2nd | Cross-service features require multi-team coordination, adding overhead | Features that touch multiple services (e.g., "add restaurant-level loyalty programs" touching orders, payments, restaurant profiles, and customer accounts) require API contracts, versioning agreements, and synchronized releases |
| 3rd | The 3x velocity gain materializes only for features contained within a single service boundary — cross-cutting features are SLOWER than in the monolith | The VP's 3x claim is true only for a subset of features; the features customers care most about (new experiences spanning multiple domains) are actually harder to ship |

### Domain 7: Series B Runway and Investor Relations
| Order | Effect | Mechanism |
|-------|--------|-----------|
| 1st | Engineering spend increases while visible product progress decreases | Infrastructure costs rise, new hires are needed for platform work, and feature delivery slows — all while burning Series B capital |
| 2nd | Next fundraising narrative weakened by metric stagnation | Series C investors evaluate GMV growth, restaurant acquisition rate, and product differentiation — all of which stall during migration |
| 3rd | Runway pressure forces premature completion of migration, leaving partially decomposed system | If Series C is delayed, the company may run low on cash and rush the migration, resulting in a hybrid monolith-microservices system that has the drawbacks of both architectures |

## Feedback Loops

### Loop 1: The Coordination Tax Spiral
- **Path**: More microservices deployed → More cross-service feature coordination needed → More meetings, API negotiations, versioning overhead → Feature velocity decreases → Pressure to split services further to "unblock teams" → Even more microservices → Even more coordination needed
- **Type**: Amplifying (vicious)
- **Mechanism**: The organizational response to coordination overhead (create more independent services) actually increases the surface area of coordination, because real product features span service boundaries. Each split reduces intra-service coordination but increases inter-service coordination.
- **Implication**: There is an optimal number of services for a team of this size (likely 5-8, not 15-20). Over-decomposition is the most common microservices antipattern and the natural result of following "just make it smaller" as a solution to coordination problems.
- **Domains crossed**: Engineering Team, Product Velocity, DevOps

### Loop 2: The Restaurant Trust Erosion Cycle
- **Path**: Integration reliability degrades → Restaurants deprioritize CloudKitchen → Order volume drops → Revenue decreases → Less budget for stabilization engineering → Reliability remains poor → More restaurants deprioritize
- **Type**: Amplifying (vicious)
- **Mechanism**: Restaurant partners allocate promotional effort to the most reliable platform. Once CloudKitchen drops below a reliability threshold, partners spend less time maintaining menus and running promotions on it, which reduces order volume regardless of technical fixes.
- **Implication**: Restaurant trust has asymmetric recovery — it degrades fast (one weekend of dropped orders) but recovers slowly (months of consistent reliability). The migration must maintain restaurant-facing stability as an absolute constraint.
- **Domains crossed**: Restaurant Partners, Customers, Finance/Budget, Engineering Team

### Loop 3: The Infrastructure Cost Escalation Loop
- **Path**: More services deployed → More infrastructure needed (more containers, more networking, more monitoring) → Cloud costs increase → Budget pressure → Reluctance to invest in proper platform tooling → Teams use workarounds and manual processes → Incidents increase → More services created to isolate blast radius → More infrastructure needed
- **Type**: Amplifying (vicious)
- **Mechanism**: The common response to microservices incidents (further decomposition for blast radius isolation) directly increases the infrastructure footprint that is causing budget pressure, which prevents investment in the tooling that would actually reduce incidents.
- **Implication**: Without a dedicated platform engineering investment early, the cost spiral makes it increasingly difficult to "do microservices right" as the system grows.
- **Domains crossed**: DevOps/Infrastructure, Finance/Budget, Engineering Team

### Loop 4: The Learning Dividend (Dampening)
- **Path**: Team gains distributed systems experience → Service boundaries stabilize → Deployment becomes routine → Feature delivery within service boundaries accelerates → Team confidence grows → Better architectural decisions → More stable boundaries
- **Type**: Dampening (self-stabilizing, virtuous)
- **Mechanism**: As the team matures in microservices patterns, the overhead decreases and the benefits compound. Each successful deployment builds institutional knowledge that makes the next one easier.
- **Implication**: This loop has a 12-18 month activation delay. The virtuous cycle only begins after the team has struggled through the learning curve and made (and corrected) initial architectural mistakes. For a Series B startup, 12-18 months may be a significant fraction of their runway.
- **Domains crossed**: Engineering Team, Product Velocity

## Loop Interactions

The three vicious loops (Coordination Tax, Restaurant Trust, Infrastructure Cost) all activate immediately upon beginning decomposition. The virtuous Learning Dividend loop activates 12-18 months later. For a Series B startup with perhaps 24-30 months of runway, this timing creates an existential risk: the vicious loops consume resources for the first half of the runway, and the virtuous loop may not compound fast enough to recover before Series C fundraising.

**Critical tipping point**: If restaurant partner volume drops more than 20% during migration, the revenue impact likely triggers budget cuts that prevent completion. Restaurant trust is the single most important constraint to protect.

**Counter-intuitive finding**: The 3x velocity claim is true but misleading. Velocity increases for single-service features and decreases for cross-cutting features. Since the most valuable features for a food delivery platform (new ordering experiences, restaurant tools, delivery optimization) are inherently cross-cutting, the net velocity change for business-critical features may be negative.

## Key Risks

1. **The "right architecture, wrong time" trap**: Microservices may be the right long-term architecture for CloudKitchen at 500 engineers, but the migration cost may sink the company before reaching that scale
2. **Restaurant partner defection during transition**: Unlike consumer users who can be won back with promotions, restaurant partners who shift volume to competitors are structurally hard to recover
3. **Cross-cutting feature blindspot**: The VP's 3x velocity claim does not account for the most important category of features — those spanning multiple services
4. **Infrastructure cost surprise**: Cloud costs for a properly instrumented microservices architecture are typically 3-5x higher than a monolith; this may not be in the financial model
5. **Premature decomposition**: Splitting services before understanding domain boundaries results in the wrong service boundaries, requiring painful re-decomposition later

## Recommendations

1. **Strangler Fig pattern**: Instead of a big-bang rewrite, extract one service at a time from the monolith, starting with the most independent domain (likely restaurant profile management or payment processing)
2. **Protect restaurant-facing APIs**: Create an API gateway that maintains stable restaurant-facing contracts regardless of backend decomposition — restaurant partners should experience zero disruption
3. **Set a service count ceiling**: For an 85-person company, target 5-8 services maximum. Resist the temptation to decompose further until the team has 200+ engineers
4. **Measure actual velocity**: Before and during migration, track "calendar days from idea to production" for both single-domain and cross-domain features. If cross-domain velocity drops, the architecture is not delivering on its promise
5. **Build platform BEFORE splitting**: Invest in CI/CD, distributed tracing, and service mesh infrastructure before extracting the first service, not after

## Thinking Scorecard Self-Assessment

| Dimension | Score | Justification |
|-----------|-------|---------------|
| Independent Thinking | 8 | Identified the counter-intuitive velocity paradox (cross-cutting features slower) and the "right architecture, wrong time" risk |
| Critical Evaluation | 8 | Every effect includes specific mechanisms; the coordination tax spiral has a clear causal structure |
| Reasoning Depth | 8 | Consistent 3rd-order effects across all 7 domains; product velocity domain reveals non-obvious selective velocity gain |
| Systems Awareness | 8 | 4 loops (3 amplifying, 1 dampening) with timing analysis showing activation delay of virtuous loop vs. runway constraints |
| Practical Value | 9 | Strangler Fig recommendation, service count ceiling, and "measure actual velocity" directly change implementation approach |

**Overall: 41/50 (Advanced)**
