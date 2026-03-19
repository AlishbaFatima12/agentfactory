---
name: contradiction-test
description: >
  Resolves contradictions between multiple information sources by identifying divergence points,
  assessing evidence strength, and synthesizing a superior integrated analysis through iterative
  drafting. Use whenever the user has conflicting information, says "these disagree", "which is
  right", "conflicting analyses", "contradictory data", "two different answers", "reconcile
  these", "who's right", or needs to arbitrate between competing recommendations, vendor
  evaluations, market analyses, or expert opinions. Also trigger when reviewing multiple
  AI responses that differ or when strategic recommendations conflict.
---

# Contradiction Test

When multiple sources disagree, the disagreement is a signal — not noise. The Contradiction Test turns conflicting information into a synthesis that is stronger than any individual source. Instead of picking a winner, you dissect the disagreement, weigh the evidence, and build an integrated analysis through three iterative drafts with explicit evolution tracking.

## Two Modes

### Coach Mode (default when user is learning)

Guide the user through the process step by step. The user identifies divergence points first; you evaluate their work and help them improve. You do NOT do the analysis for them — you critique, challenge, and push them to go deeper.

Steps:
1. Ask the user to present both sources
2. Ask the user to identify divergence points and assess evidence strength
3. Critique their divergence analysis — did they miss anything? Did they assess evidence correctly?
4. Ask them to write Draft 1 (their integrated analysis)
5. Provide substantive critique of Draft 1: identify the 3 weakest claims, explain what would make them stronger
6. Ask them to revise to Draft 2 with an evolution note
7. Critique Draft 2 evolution quality — cosmetic or substantive?
8. Ask for Draft 3 with final evolution note
9. Grade the full arc: divergence identification, synthesis quality, evolution quality

### Output Mode (when user wants the analysis done)

Run the full contradiction analysis yourself when the user provides conflicting sources and wants resolution rather than coaching.

Steps:
1. Collect all conflicting sources from the user
2. Identify every specific divergence point between sources
3. For each divergence, assess evidence strength (see Evidence Assessment below)
4. Write Draft 1: integrated analysis that is demonstrably better than any single source
5. Self-critique Draft 1: identify weaknesses, gaps, unsupported claims
6. Write Draft 2 with evolution note explaining what changed and WHY
7. Final review — check for remaining weaknesses, blind spots shared across all sources
8. Write Draft 3 with evolution note
9. Present the Divergence Table + all three drafts + evolution notes

## The Process

### Step 1: Collect Sources

Gather all conflicting sources. These can be:
- Two or more AI responses to the same question
- Competing consultant recommendations
- Contradictory market research reports
- Conflicting expert opinions or vendor evaluations
- Different strategic recommendations from team members

For each source, note: Who produced it? What is their likely bias or blind spot?

### Step 2: Identify Specific Divergence Points

Go through the sources side by side. For every point where they disagree, create a divergence annotation:

```
Divergence #N: [Topic of disagreement]
- Source A claims: [specific claim]
- Source B claims: [specific claim]
- Evidence assessment: [which side has evidence, which is asserting]
- Verdict: [which has stronger support and why]
```

Important: Divergence points must be SPECIFIC claims, not vague topic-level disagreements. "They disagree on strategy" is too vague. "Source A recommends enterprise-first because of higher LTV; Source B recommends SMB-first because of faster iteration cycles" is specific.

### Step 3: Assess Evidence Strength

For each divergence point, evaluate:

1. **Cited evidence**: Does the source reference specific studies, data, examples? Can they be verified?
2. **Reasoning chain**: Is the logic sound, or does it contain gaps/leaps?
3. **Scope of claim**: Is the claim appropriately scoped, or overgeneralized?
4. **Potential bias**: Does the source have incentives that might color this claim?
5. **Falsifiability**: Could this claim be proven wrong? If not, it may be an unfalsifiable assertion rather than an evidence-based claim.

Rate each side: **Strong evidence** (specific, verifiable, well-reasoned) | **Moderate evidence** (some support but gaps) | **Weak/assertion** (claimed without support)

### Step 4: Draft 1 — Integrated Analysis

Write an analysis that is superior to any individual source by:
- Taking the strongest-evidenced position on each divergence point
- Identifying where BOTH sources are wrong or incomplete
- Adding context or nuance that neither source provided
- Making claims proportional to the available evidence
- Explicitly noting remaining uncertainties

Draft 1 should be 500-800 words for typical analyses, longer for complex multi-source reconciliation.

### Step 5: Critique Draft 1

Identify:
- The 3 weakest claims in the draft
- Any divergence points where you defaulted to one source without sufficient justification
- Claims that are still assertions rather than evidence-backed
- Blind spots that ALL sources (including your draft) might share

### Step 6: Draft 2 + Evolution Note

Revise based on the critique. The evolution note MUST show substantive intellectual progress:

**Strong evolution note**: "Reversed my position on X because the critique revealed my only evidence was Source A's unsupported assertion. Restructured Section 2 to acknowledge genuine uncertainty rather than false confidence. Added the constraint that Y only applies in context Z, which neither source specified."

**Weak evolution note** (REJECT THIS): "Improved wording and added more detail throughout."

### Step 7: Draft 3 + Evolution Note

Final revision with fresh-eyes review. Check:
- Are there any claims both original sources got wrong that you also missed?
- Is every remaining claim proportional to its evidence?
- Would someone reading only your analysis get a more accurate picture than reading either source alone?

Write a second evolution note documenting final changes.

## Output Formats

### Divergence Table

| # | Topic | Source A Position | Source B Position | Evidence: A | Evidence: B | Verdict |
|---|-------|-------------------|-------------------|-------------|-------------|---------|
| 1 | [specific topic] | [claim] | [claim] | Strong/Moderate/Weak | Strong/Moderate/Weak | [which is better supported and why] |

### Three-Draft Structure

```
## Draft 1: Initial Integrated Analysis
[500-800 words]

## Critique of Draft 1
- Weakest claim 1: ...
- Weakest claim 2: ...
- Weakest claim 3: ...
- Shared blind spots: ...

## Draft 2: Revised Analysis
[revised content]

### Evolution Note (Draft 1 → Draft 2)
[Specific changes and WHY — must show substantive progress]

## Draft 3: Final Analysis
[final content]

### Evolution Note (Draft 2 → Draft 3)
[Specific changes and WHY — must show substantive progress]
```

### Summary Block (append after Draft 3)

```
## Contradiction Resolution Summary
- Sources analyzed: [count and identification]
- Divergence points found: [count]
- Key resolution: [1-2 sentence summary of the core finding]
- Remaining uncertainty: [what is still genuinely unclear]
- Confidence level: [High/Medium/Low with justification]
```

## Quality Checks

1. **Divergence specificity**: Every divergence point names specific claims, not vague topic areas
2. **Evidence assessment completeness**: Every divergence has explicit evidence rating for both sides
3. **Synthesis superiority**: Draft 1 must contain at least one insight not present in any source
4. **Evolution substantiveness**: Each evolution note describes specific intellectual changes, not cosmetic edits
5. **Evolution progression**: Draft 3 must be demonstrably stronger than Draft 1 — if you removed the evolution notes, a reader should still see the improvement
6. **Proportional claims**: No claim in the final draft exceeds the evidence available for it
7. **Blind spot check**: The analysis explicitly addresses what ALL sources (including itself) might be missing
8. **Source attribution**: Every claim in the synthesis traces back to either a source or the analyst's own reasoning
9. **Uncertainty honesty**: The final draft distinguishes between "resolved with confidence" and "still genuinely uncertain"

## When Evaluating Existing Analyses

If the user asks you to evaluate someone else's contradiction analysis (Coach Mode):

1. Check divergence identification: Did they catch all meaningful disagreements?
2. Check evidence assessment: Did they correctly identify which source has stronger evidence?
3. Check synthesis quality: Is their analysis better than either source? Where does it fall short?
4. Check evolution quality: Do the evolution notes show genuine intellectual progress or cosmetic changes?
5. Provide a score (1-10) for each dimension:
   - Divergence identification (completeness, specificity)
   - Evidence assessment (accuracy, depth)
   - Synthesis quality (rigor, originality, evidence proportionality)
   - Evolution quality (substantiveness of changes across drafts)

## Thinking Scorecard

After completing a contradiction analysis, rate on these dimensions:

| Dimension | 1-3 (Developing) | 4-6 (Competent) | 7-10 (Strong) |
|-----------|-------------------|------------------|----------------|
| **Independent Thinking** | Accepted one source uncritically | Weighed sources but followed the more confident one | Challenged both sources and found independent insights |
| **Critical Evaluation** | Missed major divergence points | Found divergences but evidence assessment was surface-level | Precise evidence assessment with falsifiability analysis |
| **Reasoning Depth** | Synthesis just merged the two sources | Synthesis added some nuance | Synthesis identified blind spots in ALL sources including own |
| **Originality** | Draft 3 ≈ Draft 1 with better wording | Draft 3 has structural improvements | Draft 3 contains insights neither source nor critic provided |
| **Self-Awareness** | Evolution notes are cosmetic | Evolution notes show some substantive changes | Evolution notes reveal genuine intellectual growth and reversed positions |
