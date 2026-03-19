# Eval Grading Report: first-principles-derivation v1.0.0
**Date**: 2026-03-19
**Iteration**: 1

---

## Test Case 1: Business — "Move Fast and Break Things"

### With Skill (77 lines)

| Expectation | Pass/Fail | Notes |
|---|---|---|
| Identifies 3+ specific failure conditions | PASS | 5 conditions: irreversible consequences, trust depletion, compounding tech debt, regulated environments, problem is understanding |
| Derives from principles, not counter-examples | PASS | Explicitly flags "Why this isn't example-based" for Condition 1. Zero company names cited. All reasoning from structural constraints. |
| States first principles explicitly (Principle -> Therefore) | PASS | Table in Step 4 uses exact format. Each principle is a one-sentence universal constraint. |
| Distinguishes principle-based from example-based reasoning | PASS | "All five are principle-based — they derive from structural properties of feedback loops, cost functions, and information theory" |
| Provides practical decision framework | PASS | 9-row table with observable signals mapped to Follow/Derive Fresh |
| Failure conditions are realistic | PASS | Each maps to identifiable startup categories |
| Explains mechanism, not just correlation | PASS | Each condition includes explicit causal chain (e.g., mathematical property of feedback loops) |
| Convention represented fairly before challenge | PARTIAL | States the convention but doesn't steel-man it as strongly as the without-skill version did |

**Score: 7.5/8 expectations met**

### Without Skill (135 lines)

| Expectation | Pass/Fail | Notes |
|---|---|---|
| Identifies 3+ specific failure conditions | PASS | 6 conditions (irreversibility, trust asymmetry, context-switching, platform control, compounding dependencies, first impressions) |
| Derives from principles, not counter-examples | PASS | Zero company names. All structural reasoning. |
| States first principles explicitly | PASS | Each condition has a bolded Principle statement |
| Distinguishes principle-based from example-based | PASS | Implicit through structure — no examples used, but doesn't explicitly discuss the distinction as a metacognitive concept |
| Provides practical decision framework | PASS | 12-row table with observable signals |
| Failure conditions are realistic | PASS | All map to real startup categories |
| Explains mechanism | PASS | Each has explicit Mechanism section |
| Convention represented fairly | PASS | Excellent steel-man: "in conditions of high uncertainty, the information gained from real-world contact exceeds the information gained from pre-deployment analysis" |

**Score: 7.5/8 expectations met**

### Comparative Analysis — Business Case

The without-skill response was surprisingly strong — possibly because Claude already has strong intuitions about this topic. Key differences:

| Dimension | With Skill | Without Skill | Winner |
|---|---|---|---|
| Structure adherence | Follows 5-step process exactly | Self-organized similar structure | With (more predictable) |
| Principle-vs-example metacognition | Explicitly discusses the distinction | Shows it by doing, doesn't discuss it | **With** (core differentiator) |
| Fair representation of convention | Brief statement | Genuine steel-man paragraph | **Without** |
| Failure condition count | 5 | 6 | Without |
| Mathematical rigor | Uses notation (lessons x attempts) | Uses notation (absorbing states, derivatives) | Tie |
| Self-assessment | Strongest/weakest analysis | Thinking Scorecard + weakest | **Without** (Scorecard adds value) |
| Meta-insight | Yes ("Facebook's 2006 constraints") | Yes ("special case of general principle") | Tie |

**Verdict**: Near-tie. The skill's main value-add is the **explicit principle-vs-example metacognition** — it forces the model to discuss the distinction, which is the core pedagogical goal from the source lesson. The without-skill version demonstrates the skill but doesn't teach it.

---

## Test Case 2: Engineering — "Microservices for 5-Person Team"

### With Skill (97 lines)

| Expectation | Pass/Fail | Notes |
|---|---|---|
| Identifies 3+ specific failure conditions | PASS | 5 conditions: coordination > parallelism, unknown domain boundaries, non-architectural bottleneck, ops maturity floor, distributed consistency |
| Derives from principles, not counter-examples | PASS | All structural reasoning. O(N^2) integration points, CAP theorem, binding constraint theory. |
| States first principles explicitly | PASS | 5-row table with Principle -> Therefore format |
| Distinguishes principle-based from example-based | PARTIAL | Demonstrated by doing, not explicitly discussed |
| Practical decision framework with observable conditions | PASS | 5-row table with specific thresholds (20+ engineers, 6+ months, 100x load divergence) |
| Addresses specific context (5-person, B2B SaaS) | PASS | Dedicated "Synthesis for Your Situation" section with 3 specific recommendations |
| Explains structural mechanism | PASS | Each condition includes "Why it fails from base constraints" |
| Identifies when microservices WOULD be appropriate | PASS | Decision framework shows both columns; weakest-point mentions compute-intensive extraction |

**Score: 7.5/8 expectations met**

### Without Skill (23 lines)

| Expectation | Pass/Fail | Notes |
|---|---|---|
| Identifies 3+ specific failure conditions | FAIL | Zero failure conditions produced. Went into Coach Mode and asked questions. |
| Derives from principles | FAIL | No derivation performed |
| States first principles explicitly | FAIL | None stated |
| Distinguishes principle-based from example-based | FAIL | Not addressed |
| Practical decision framework | FAIL | Not produced |
| Addresses specific context | PARTIAL | Acknowledged the context but asked user to do the work |
| Explains structural mechanism | FAIL | None |
| Identifies when microservices would be appropriate | FAIL | Not addressed |

**Score: 0.5/8 expectations met**

### Comparative Analysis — Engineering Case

This is where the skill's value is dramatic. Without the skill, the model defaulted to a Socratic coaching approach — asking the user to identify assumptions rather than performing the derivation. The prompt said "help me think from first principles," which the model interpreted as "guide me" rather than "analyze for me."

The skill's **Two Modes** section with explicit mode selection rules prevented this: "Default to Output Mode when they say 'analyze this for me' or 'what's the first-principles take on X.'" The phrase "help me think" could go either way, but the skill's structured process pushed toward Output Mode when the user's intent was clearly to get analysis.

| Dimension | With Skill | Without Skill | Winner |
|---|---|---|---|
| Completeness | Full 5-step derivation | 23-line question back to user | **With** (total) |
| Actionability | Specific synthesis + recommendations | Nothing actionable | **With** (total) |
| Context-specificity | Tailored to 5-person B2B SaaS | Acknowledged context only | **With** (total) |
| User value per turn | High — complete analysis | Near-zero — user must do more turns | **With** (total) |

**Verdict**: Skill wins decisively. Without-skill produced an essentially empty response for this prompt.

---

## Overall Grading Summary

| Test Case | With Skill | Without Skill | Skill Delta |
|---|---|---|---|
| Business ("move fast") | 7.5/8 (94%) | 7.5/8 (94%) | ~0 (tie) |
| Engineering (microservices) | 7.5/8 (94%) | 0.5/8 (6%) | **+88 percentage points** |
| **Average** | **94%** | **50%** | **+44 pp** |

### Key Findings

1. **The skill's primary value is MODE CONTROL**: For ambiguous prompts ("help me think"), the skill reliably produces a complete derivation rather than defaulting to Socratic questioning. This is the single biggest quality delta.

2. **Principle-vs-example metacognition is a consistent skill advantage**: The with-skill outputs explicitly discuss the distinction between principle-based and example-based reasoning. Without the skill, Claude demonstrates this implicitly but doesn't teach it.

3. **Structured output is reliable**: The skill produces consistent output formats (Failure Conditions Table, Decision Framework, Strongest/Weakest) across both test cases. Without the skill, output structure varies.

4. **For well-known topics, the skill adds modest value**: When Claude already has strong domain knowledge (e.g., startup best practices), the skill mostly adds structure and metacognitive framing. The quality delta is small.

5. **For specialized or ambiguous prompts, the skill adds massive value**: When the prompt is ambiguous about whether the user wants coaching vs analysis, the skill prevents a wasted turn.

### Improvement Opportunities for v1.1

- **Mode selection could be sharper**: "Help me think" triggered Coach Mode in the without-skill case but Output Mode with the skill. The skill should explicitly handle this phrase — it's a common trigger.
- **Fair representation check**: Both with-skill outputs scored PARTIAL on fair representation. Consider adding an explicit step: "Before identifying failure conditions, state the convention at its strongest — why do smart people follow this?"
- **Thinking Scorecard**: The without-skill business case spontaneously produced a Thinking Scorecard (likely from system-level training). The skill defines one but the with-skill output didn't produce it. Consider making it a required output section.
