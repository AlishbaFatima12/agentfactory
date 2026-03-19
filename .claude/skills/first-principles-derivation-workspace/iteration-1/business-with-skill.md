# First Principles Derivation: "Move Fast and Break Things"

## Step 1: The Convention

**"Move fast and break things"** — optimize for speed of iteration over correctness. Ship imperfect work, learn from failures, iterate. Perfectionism is the enemy. The market will tell you what matters.

## Step 2: The Contrarian Question

**Under what conditions does optimizing for iteration speed over correctness produce worse outcomes than slowing down?**

## Step 3: Failure Conditions

### Failure Condition 1: Irreversible Consequences

When breakage cannot be undone, speed doesn't give you iteration — it gives you a single shot. "Move fast and break things" assumes you can *fix* what you break. If the breaking destroys the ability to try again, the entire feedback loop that justifies speed collapses.

**Why this isn't example-based**: I'm not saying "look at Knight Capital losing $440M in 45 minutes." I'm saying: the value of iteration is `(lessons_learned × remaining_attempts)`. When an action reduces remaining_attempts to zero, no amount of learning compensates. This is a mathematical property of the feedback loop itself.

### Failure Condition 2: Trust as a Depleting Resource

When your product depends on user trust, and trust recovers slower than it depletes, each "break" draws down a finite account with asymmetric deposit/withdrawal rates. Speed amplifies the withdrawal rate while doing nothing for the deposit rate.

**The mechanism**: Trust is built by repeated correct behavior over time (linear or logarithmic accumulation). Trust is destroyed by single failures (step-function loss). This asymmetry means that in trust-dependent systems, the expected value of "break then fix" is negative — the fix restores functionality but not the trust that functionality depends on.

### Failure Condition 3: Compounding Technical Debt Under Path Dependence

When early decisions constrain later decisions (path dependence), and the cost of reversing a decision grows with the number of decisions built on top of it, speed in the wrong direction creates exponentially increasing correction costs.

**The mechanism**: In path-dependent systems, the cost of correcting decision D₁ is proportional to the number of subsequent decisions (D₂...Dₙ) that assumed D₁ was correct. Moving fast increases N before you discover D₁ was wrong. The total rework is not `cost(fix D₁)` but `cost(fix D₁) + Σ cost(fix Dᵢ for i=2..N)`. Speed makes this sum larger, not smaller.

### Failure Condition 4: Regulated or High-Compliance Environments

When external authorities define correctness thresholds and impose penalties for violations, "breaking things" doesn't generate learning — it generates liability. The feedback signal isn't "users leave" (recoverable); it's "regulators act" (binary, delayed, severe).

**The mechanism**: The "move fast" model assumes the feedback function is continuous and proportional — small breaks yield small signals you can course-correct from. Regulatory feedback is discontinuous: you're compliant or you're not, and the penalty for non-compliance is not proportional to the degree of violation. This makes the entire gradient-descent metaphor invalid. You can't "iterate toward compliance" because the loss landscape has cliffs, not slopes.

### Failure Condition 5: When the Problem Is Understanding, Not Execution

When you don't yet understand the problem well enough to know what "forward" means, moving fast in any direction is Brownian motion, not progress. Speed is only valuable when the gradient of the loss function is at least approximately known.

**The mechanism**: "Move fast" implicitly assumes the search space is navigable — that shipping something gives you signal about what to ship next. When the problem is poorly understood, the signal-to-noise ratio of user feedback approaches zero. Users can tell you *they don't like this*, but not *what they would like* — and rapid iteration through bad guesses exhausts both your resources and their patience.

## Step 4: First Principles Extracted

| # | Failure Condition | Underlying Principle | Convention Fails Because |
|---|---|---|---|
| 1 | Irreversible consequences | **The value of iteration = lessons × remaining attempts.** When attempts → 0, iteration value → 0 regardless of learning rate. | Speed without reversibility isn't iteration, it's gambling with one chip. |
| 2 | Trust-dependent systems | **Asymmetric accumulation**: trust builds linearly, depletes in step functions. | Each "break" withdraws more than a "fix" deposits. Net expected value of fast breakage is negative. |
| 3 | Path-dependent architecture | **Correction cost compounds**: rework cost ∝ decisions built atop the wrong foundation. | Speed maximizes N (dependent decisions) before discovering the error, making correction exponentially costlier. |
| 4 | Regulated environments | **Discontinuous penalty functions** invalidate gradient-descent reasoning. | You can't iterate toward compliance when the feedback is binary and delayed. Cliffs, not slopes. |
| 5 | Problem is understanding, not execution | **Speed is only useful when the direction vector is approximately known.** | Moving fast in an unknown search space is Brownian motion. Burns resources without generating signal. |

All five are **principle-based** — they derive from structural properties of feedback loops, cost functions, and information theory, not from "Company X failed this way."

## Step 5: Decision Framework

| Situation Signal | Follow "Move Fast" | Derive Fresh (Slow Down) | Why |
|---|---|---|---|
| Failures are cheap and reversible | Yes | — | Full iteration loop intact; speed maximizes learning rate |
| Users can switch away easily | Yes | — | Market feedback is fast, continuous, proportional |
| You understand the problem but not the solution | Yes | — | Direction vector is known; execution speed = competitive advantage |
| Failure destroys ability to try again | — | Yes | No iteration loop = no value from speed |
| Product depends on trust (health, finance, security) | — | Yes | Asymmetric trust economics make breakage net-negative |
| Early architecture constrains everything downstream | — | Yes | Speed amplifies compounding rework costs |
| External compliance gates exist | — | Yes | Can't gradient-descend on cliff-shaped loss functions |
| You don't understand the problem yet | — | Yes | Speed without direction = expensive noise |
| Breakage affects people who didn't consent to the experiment | — | Yes | Ethical constraint: you can move fast with *your* chips, not others' |

## Where This Reasoning Is Strongest and Weakest

**Strongest**: Conditions 1 (irreversibility) and 3 (path dependence) — these are mathematically derived from properties of the feedback loop and cost function. Hard to argue against without denying the math.

**Weakest**: Condition 5 (problem understanding) — there's a genuine counterargument that building *something* is the fastest way to *understand* the problem, even if the thing you build is wrong. The boundary between "productive exploration" and "Brownian motion" is fuzzy and context-dependent. I've stated it as a clean principle, but in practice, the signal-to-noise ratio of exploratory builds is hard to assess in advance.

## The Meta-Insight

"Move fast and break things" is itself reasoning by analogy — it worked for Facebook's early social network (low stakes, reversible, trust wasn't yet load-bearing, no regulation, known problem space). The convention encodes *Facebook's 2006 constraints* as universal advice. First principles tells you: check whether your constraints match theirs. Usually, they don't.
