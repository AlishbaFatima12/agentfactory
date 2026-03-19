# First Principles Derivation: "Move Fast and Break Things"

---

## Convention Under Examination

**"Move fast and break things"** — the belief that startups should prioritize speed of iteration over correctness, accepting breakage as a necessary cost of learning velocity. Specifically: ship imperfect products quickly, fix problems as they surface, and treat the cost of mistakes as lower than the cost of delay.

**Fair representation**: This is not recklessness. At its strongest, the argument is: *in conditions of high uncertainty, the information gained from real-world contact exceeds the information gained from pre-deployment analysis. Therefore, the fastest path to a good product is through a sequence of bad ones.*

This is a genuinely powerful idea. The challenge is identifying where its assumptions break.

---

## Contrarian Question

**Under what conditions does speed-with-breakage produce worse outcomes than slower, more careful approaches?**

---

## Failure Conditions & First Principles

### 1. When breakage is irreversible

**Principle**: *The rationality of accepting risk is proportional to the reversibility of consequences.*

**Mechanism**: "Move fast and break things" assumes breakage is recoverable — you ship a bug, users report it, you fix it. This works when the cost function is linear and symmetric: breaking costs roughly the same as fixing. But some systems have **absorbing states** — conditions you cannot exit once entered. If a medical device startup ships a defective product, people die. If a fintech startup miscalculates transactions, regulators revoke licenses. If a data startup leaks PII, trust is destroyed non-recoverably.

The key structural insight: reversibility is not a property of the *mistake* but of the *system the mistake occurs in*. The same bug (off-by-one error) is trivially reversible in a social media feed and catastrophically irreversible in a dosage calculator. The convention fails not because the team is careless, but because the **system's error-absorption capacity is zero**.

**Therefore**: When the domain contains absorbing failure states, the expected value of speed is negative because the tail risk overwhelms the mean benefit.

---

### 2. When trust is the product, not a byproduct

**Principle**: *Trust accumulates slowly and collapses catastrophically — its cost function is asymmetric.*

**Mechanism**: Most consumer products have a roughly symmetric relationship between quality and user sentiment: a good release gains some goodwill, a bad release loses some. But in domains where **the user is delegating judgment** (financial advice, healthcare, security, childcare platforms), trust IS the product. Each breakage doesn't just lose the equivalent goodwill it would have gained — it triggers a nonlinear collapse because the user's mental model shifts from "this is reliable" to "this is unreliable," and that shift is near-permanent.

Structurally: when the derivative of trust-loss with respect to failures is much steeper than the derivative of trust-gain with respect to successes, speed optimizes the wrong variable. You're maximizing iteration count in a system where iteration count is inversely correlated with the thing you're actually selling.

**Therefore**: When your value proposition depends on perceived reliability, each "break" destroys more value than each "move fast" creates.

---

### 3. When your cost of context-switching exceeds your cost of delay

**Principle**: *In systems with high fixed costs per state change, throughput is maximized by reducing transitions, not by reducing cycle time.*

**Mechanism**: "Move fast" assumes the dominant cost is *time not shipping*. But in some environments, the dominant cost is *responding to breakage*. Every bug shipped fast requires: detection, triage, context-switch, fix, re-deploy, communication to affected users, and verification. If your team is 3 people and each breakage consumes 2 days of reactive work, you've just converted "moving fast" into "moving fast in circles."

This is a scheduling theory result: when setup/teardown costs dominate, batching (slower, more careful releases) produces higher throughput than rapid small releases. The convention implicitly assumes near-zero cost of error-handling. When that assumption fails — small teams, complex systems, high coordination overhead — speed produces negative net velocity.

**Therefore**: When the overhead of fixing breakage exceeds the overhead of preventing it, "move fast and break things" reduces net output.

---

### 4. When you're building on a platform you don't control

**Principle**: *The cost of breakage is bounded by your ability to deploy fixes; when deployment is gated by external actors, breakage costs become unbounded in time.*

**Mechanism**: A web startup can deploy a fix in minutes. An iOS app goes through App Store review (1-7 days). A hardware startup waits weeks for manufacturing runs. An enterprise SaaS startup with on-premise deployments may wait months for customers to upgrade. "Move fast and break things" assumes a tight feedback loop: break → detect → fix → deploy. When any link in that loop is gated by an entity you don't control, breakage persists for the duration of the gate, and the cost accumulates over time rather than being bounded by your fix speed.

Structurally: the convention requires `time_to_fix << time_until_consequence`. When external gates make `time_to_fix` large and unpredictable, this inequality inverts.

**Therefore**: When you cannot deploy fixes on your own timeline, every breakage becomes a long-duration liability rather than a short-duration learning opportunity.

---

### 5. When the state space has compounding dependencies

**Principle**: *In tightly coupled systems, the cost of individual errors compounds combinatorially rather than additively.*

**Mechanism**: "Move fast and break things" assumes errors are approximately independent — fixing bug A doesn't create bug B. But in systems with tight coupling (financial ledgers, distributed state machines, permission models), errors interact. A rounding error in module A creates an inconsistency that module B amplifies, which module C caches, which module D serves to users. The cost of breakage in coupled systems is not `n × cost_per_bug` but closer to `cost_per_bug^n` because each bug creates conditions that make the next bug harder to diagnose and fix.

This is why database migrations, accounting systems, and distributed consensus protocols are not shipped "fast and broken." The state space makes it structurally impossible to reason about one error in isolation.

**Therefore**: When system components share mutable state with complex invariants, speed-induced errors compound faster than they can be isolated, and "move fast" produces *debugging debt* that grows superlinearly.

---

### 6. When your market penalizes first impressions disproportionately

**Principle**: *When evaluation opportunities are scarce and non-repeating, the expected value of a trial is determined by its quality, not its speed.*

**Mechanism**: Some markets give you many chances to impress (consumer social — users churn and return). Others give you one shot (enterprise sales with 12-month procurement cycles, regulated industry approvals, investor pitches). In single-evaluation markets, a broken first experience doesn't just lose that customer temporarily — it removes them from your addressable market permanently, because the next evaluation window is months or years away, and they've already formed a judgment.

The convention assumes a high-frequency evaluation environment where each individual impression matters little. When evaluation frequency drops, each impression matters enormously, and breakage in a first impression has an opportunity cost equal to the full lifetime value of that relationship.

**Therefore**: When customers evaluate you infrequently and judge durably from first contact, shipping broken products eliminates revenue permanently rather than deferring it temporarily.

---

## Decision Framework

| Observable Signal | Follow "Move Fast" | Derive Fresh (Slow Down) | Underlying Principle |
|---|---|---|---|
| Failures are recoverable within hours | **Yes** | | Reversibility bounds risk |
| Domain involves health, money, safety, or legal liability | | **Yes** | Absorbing failure states exist |
| You control your own deploy pipeline end-to-end | **Yes** | | Fix latency stays bounded |
| You ship through App Store, hardware, or enterprise on-prem | | **Yes** | External gates unbind fix time |
| Team is >10 engineers with dedicated ops/QA | **Yes** | | Error-handling cost stays low relative to throughput |
| Team is <5 people with no dedicated ops | | **Yes** | Context-switch overhead dominates |
| Users evaluate you weekly+ (consumer, freemium) | **Yes** | | High-frequency impressions tolerate noise |
| Users evaluate you annually (enterprise, regulated) | | **Yes** | Single impressions are load-bearing |
| System components are loosely coupled (microservices, stateless) | **Yes** | | Errors don't compound |
| System has tight coupling with shared mutable state | | **Yes** | Errors compound combinatorially |
| Value prop is novelty/entertainment | **Yes** | | Trust asymmetry is low |
| Value prop is reliability/accuracy/safety | | **Yes** | Trust cost function is asymmetric |

---

## Where This Reasoning Is Weakest

**Condition #3** (context-switching costs) is the closest to being domain-specific rather than truly universal. The threshold where fix-overhead exceeds prevention-overhead depends heavily on team maturity and tooling — a team with excellent observability and automated rollbacks might have near-zero fix costs even at small scale. The principle holds structurally, but the boundary is fuzzy.

**Strongest condition**: #1 (irreversibility). This is the most universal — it derives directly from expected value theory and holds regardless of domain, team size, or market structure. If consequences are irreversible, no amount of learning velocity compensates.

---

## Thinking Scorecard

| Dimension | Score | Justification |
|---|---|---|
| **Logical Rigor** | 9 | Each conclusion follows from stated premises via explicit mechanism |
| **Condition Plausibility** | 9 | All six conditions describe default operating environments for identifiable startup categories |
| **Principle-vs-Example Distinction** | 10 | Zero company names cited; all reasoning from structural constraints |
| **Practical Applicability** | 8 | Table uses observable signals; some thresholds (team size) could be more precisely bounded |
| **Mechanism Clarity** | 9 | Each failure explains the causal chain, not just the correlation |
| **Fair Representation** | 9 | Convention presented at its strongest (information-theoretic argument for speed) before challenge |

---

**The meta-insight**: "Move fast and break things" is not wrong — it's *incomplete*. It's a special case of a more general principle: **optimize for the variable with the highest information-to-cost ratio in your specific constraint environment.** In some environments that variable is speed. In others it's correctness, trust, or stability. The convention fails when people treat a special case as a universal law.
