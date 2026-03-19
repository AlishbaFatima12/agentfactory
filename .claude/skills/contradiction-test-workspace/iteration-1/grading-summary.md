# Contradiction Test Skill — Eval Grading Summary (Iteration 1)

## Eval 1: Business Strategy Conflict (Enterprise vs SMB)

### Criteria Assessment

| Criterion | Without Skill | With Skill | Delta |
|-----------|:---:|:---:|:---:|
| Identifies specific divergence points | YES (6 points) | YES (7 points in formal table) | +1 (table format) |
| Assesses evidence strength per divergence | PARTIAL (inline, informal) | YES (Strong/Moderate/Weak per cell) | **+2** |
| Produces integrative synthesis (not just picking one) | YES (mid-market wedge) | YES (compressed enterprise + cohort) | ~Equal |
| Includes evolution notes showing substantive improvement | NO (single-pass) | YES (3 drafts, 2 evolution notes, reversed positions) | **+3** |
| Addresses what BOTH sources miss | PARTIAL (mentions neither is perfect) | YES (explicit: compliance-lite is fake, analogies misleading, PMF question) | **+2** |
| Distinguishes evidence-backed vs assertions | PARTIAL (implicit) | YES (explicit per divergence: "Speculative", "Strong", "Weak") | **+2** |

### Scores

| Dimension | Without Skill | With Skill |
|-----------|:---:|:---:|
| Divergence identification | 7/10 | 9/10 |
| Evidence assessment | 5/10 | 8/10 |
| Synthesis quality | 8/10 | 9/10 |
| Evolution quality | 0/10 (no drafts) | 8/10 |
| **Overall** | **5.0/10** | **8.5/10** |

### Notes

Without-skill produced excellent analysis (mid-market wedge, one diagnostic question) but in a single pass — no iterative refinement, no explicit evidence grading, no evolution tracking. The insight quality is high but the *process* is invisible.

With-skill followed the full 3-draft pipeline: Draft 1 introduced mid-market (then self-critiqued it as speculative). Draft 2 restructured around constraint hierarchy (survival > learning > economics), explicitly criticizing its own decision-tree hedging. Draft 3 committed to a clear month-by-month plan. Evolution notes showed genuine intellectual movement: "Removed the speculative mid-market wedge... Added explicit decision criteria... Took a clear position instead of hedging."

---

## Eval 2: Engineering Architecture Conflict (Connection Pooling vs Per-Request)

### Criteria Assessment

| Criterion | Without Skill | With Skill | Delta |
|-----------|:---:|:---:|:---:|
| Identifies specific divergence points | PARTIAL (3 main points, narrative) | YES (7 points in formal table) | **+2** |
| Assesses evidence strength per divergence | PARTIAL (implicit: "Sarah is right") | YES (explicit ratings + verdicts per row) | **+2** |
| Produces integrative synthesis | YES (Sarah is right + RDS Proxy middle ground) | YES (per-request + 3 safeguards + revisit triggers) | +1 (more actionable) |
| Includes evolution notes showing substantive improvement | NO (single-pass) | YES (3 drafts, 2 evolution notes) | **+3** |
| Addresses what BOTH sources miss | YES (RDS Proxy, growth scenario) | YES (connection storms, intra-run timeouts, external poolers, concrete memory numbers) | **+2** |
| Output demonstrably better than either source | YES (adds nuance) | YES (quantified: 5-10MB/conn, 83% idle, Lambda reserved concurrency = 60% max_connections) | **+1** |

### Scores

| Dimension | Without Skill | With Skill |
|-----------|:---:|:---:|
| Divergence identification | 6/10 | 9/10 |
| Evidence assessment | 6/10 | 9/10 |
| Synthesis quality | 7/10 | 9/10 |
| Evolution quality | 0/10 (no drafts) | 9/10 |
| **Overall** | **4.75/10** | **9.0/10** |

### Notes

Without-skill gave a correct, concise answer: Sarah is right, context beats convention, RDS Proxy is the middle ground. Good analysis but single-pass, no structured evidence assessment, no iterative improvement.

With-skill produced the full pipeline. Draft 1 identified the core issue then self-critiqued: "Overclaimed 'strictly worse' for pool-per-invocation" and found a blind spot in both sources (connection storms). Draft 2 added concrete numbers (5-10MB per connection, 83% idle duty cycle), connection storm mitigation via Lambda reserved concurrency, and intra-run timeout risk. Draft 3 sharpened further with exact thresholds (60% of max_connections) and a revisit-trigger table. Evolution notes were substantive: each draft visibly improved on identified weaknesses.

---

## Summary

| Metric | Without Skill (avg) | With Skill (avg) | Improvement |
|--------|:---:|:---:|:---:|
| Divergence identification | 6.5 | 9.0 | +2.5 |
| Evidence assessment | 5.5 | 8.5 | +3.0 |
| Synthesis quality | 7.5 | 9.0 | +1.5 |
| Evolution quality | 0.0 | 8.5 | +8.5 |
| **Overall** | **4.9** | **8.75** | **+3.85** |

### Key Findings

1. **Biggest delta: evolution quality (+8.5).** Without the skill, there is no iterative refinement — the model produces one good answer and stops. The skill forces 3 drafts with self-critique between each, producing visible intellectual progression.

2. **Evidence assessment jumps (+3.0).** Without the skill, evidence judgments are implicit ("Sarah is right because..."). With the skill, every divergence gets explicit Strong/Moderate/Weak ratings, making the reasoning auditable.

3. **Synthesis quality improvement is modest (+1.5).** Both with and without skill produced good syntheses. The baseline model is already competent at integration. The skill's value is in the *process* (structured divergence analysis, iterative drafting) more than the final conclusion.

4. **Without-skill outputs are actually quite good** — concise, opinionated, well-reasoned. They just lack the structured evidence trail and iterative improvement that make the analysis trustworthy for high-stakes decisions.

### Verdict

The skill produces outputs that are **more structured, more auditable, and more thoroughly refined** than baseline. The 3-draft evolution pipeline is the primary value-add — it surfaces weaknesses that single-pass analysis misses (connection storms, compliance-lite falsifiability, overclaimed universals). For quick advice, the baseline is fine. For decisions worth getting right, the skill is materially better.
