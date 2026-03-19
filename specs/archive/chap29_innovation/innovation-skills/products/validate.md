---
name: validate
version: 1.0
description: >
  Activate for: validate, build measure learn, BML, pivot, persevere, pilot
  results, what did we learn, experiment results, assumption test results,
  was I right, did it work, should I pivot, what should I change, learning
  synthesis, validated learning, invalidated assumption, pilot analysis,
  what our pilot taught us, early customer data, what customers told us,
  post-pilot analysis, pivot or continue, kill or continue.
plugin-command: /validate
---

## BUILD-MEASURE-LEARN WORKFLOW

### Task Types

TYPE 1: BUILD-MEASURE-LEARN ANALYSIS
  Input: What was tested; pilot results (metrics, adoption, customer feedback)
  Output: Validated/invalidated assumptions; unexpected learnings;
          pivot/persevere recommendation; V1 priorities

TYPE 2: PIVOT DECISION FRAMEWORK
  Input: Invalidated assumption(s); what is still true
  Output: 5 pivot directions; pivot recommendation with rationale

TYPE 3: LEARNING SYNTHESIS
  Input: Raw pilot data; customer interviews; usage metrics; NPS/feedback
  Output: Pattern map; assumption updates; open questions; next sprint priority

TYPE 4: ASSUMPTION STATUS UPDATE
  Input: New data from any source (pilot; interview; market research)
  Output: Specific assumption updates for innov.local.md

### BML Analysis Output Structure

  BUILD-MEASURE-LEARN ANALYSIS
  Sprint/Pilot: [N] | Period: [Start]–[End] | Date: [Date]
  ════════════════════════════════════════════════════════════
  WHAT WE TESTED:
    Learning goal: [Assumption(s) targeted]
    Method:        [How we tested — pilot / survey / interview / experiment]
    Sample:        [N customers / N users / N transactions]

  WHAT WE MEASURED:
    [Metric 1]: [Result] vs. [Success criterion] — [PASS / FAIL / PARTIAL]
    [Metric 2]: [Result] vs. [Success criterion] — [PASS / FAIL / PARTIAL]
    [Metric 3]: [Result] vs. [Success criterion] — [PASS / FAIL / PARTIAL]

  ASSUMPTION OUTCOMES:
    A-00X ([Assumption]): VALIDATED / INVALIDATED / INCONCLUSIVE
    Evidence: [Specific — "3 of 3 pilots signed at $X" not "customers liked it"]
    Confidence: [HIGH / MEDIUM / LOW — based on sample size and data quality]

    [Repeat for each assumption that was tested or affected]

  UNEXPECTED LEARNINGS:
    [Things you discovered that you were not looking for]
    [New assumptions revealed by the pilot]
    [Customer behaviour that surprised you]
    Implication: [What each unexpected learning means for direction]

  PIVOT OR PERSEVERE RECOMMENDATION:
    [PERSEVERE / PIVOT ON SPECIFIC ELEMENT / FULL PIVOT]
    Rationale: [Why — based on the evidence, not on attachment to the idea]
    If PERSEVERE: [What is the next most critical assumption to test?]
    If PIVOT: [On what specifically — see pivot framework below]

  innov.local.md UPDATES PROPOSED:
    [Specific changes to assumption status, canvas blocks, personas, financials]
  ════════════════════════════════════════════════════════════

### Pivot Types (from Lean Startup methodology)

When a critical assumption is invalidated, identify the pivot type:

  ZOOM-IN PIVOT: One feature of your product becomes the whole product.
  Use when: One aspect of the MVP is getting disproportionate engagement.

  ZOOM-OUT PIVOT: The whole product becomes one feature of a larger product.
  Use when: Your product is not sufficient to solve the problem on its own.

  CUSTOMER SEGMENT PIVOT: Same product; different customer.
  Use when: The product works, but for a different customer than expected.

  CUSTOMER NEED PIVOT: Same customer; different problem.
  Use when: You know the customer well; the problem you chose was the wrong one.

  PLATFORM PIVOT: Application becomes a platform (or vice versa).
  Use when: Your product is more valuable as infrastructure for others to build on.

  BUSINESS ARCHITECTURE PIVOT: High-margin, low-volume ↔ low-margin, high-volume.
  Use when: Your unit economics only work at a scale you cannot reach with
  your current go-to-market.

  TECHNOLOGY PIVOT: Same positioning; different technology.
  Use when: The current technology cannot achieve the required accuracy/scale/cost.

  CHANNEL PIVOT: Same product; different distribution channel.
  Use when: The product works but the channel is too expensive or too slow.

### Evidence Quality Standard

  VALIDATED means: customers paid for it OR used it N times per week for N weeks.
  Not: "They said they would use it" (interest ≠ behaviour)
  Not: "They signed up for the waitlist" (intent ≠ payment)
  Not: "They said it was great" (enthusiasm ≠ value)

  Evidence hierarchy (most to least reliable):
  1. Customer paid AND renewed (revealed preference over time)
  2. Customer paid once (revealed preference at a moment)
  3. Customer signed a letter of intent with specific terms
  4. Customer used the product N times without prompting
  5. Customer said they would pay [specific amount] in an interview
  6. Customer said the problem is real and painful
  7. Multiple people described the same problem

### Pivot Decision Checklist

Before recommending a pivot:
  ✓ Have you run at least 2 iterations of the current approach?
     (One test is not enough data; patterns require multiple tests)
  ✓ Is the invalidation based on behaviour (what customers did) or
     opinions (what they said)? Behaviour is more reliable.
  ✓ Is the team emotionally ready for a pivot? (A pivot decided under
     stress is often the wrong pivot)
  ✓ What is still true — what learning is preserved into the pivot?
     (A good pivot preserves validated learning; it changes direction,
      not everything)

## NEVER DO THESE

- NEVER call a "no results" inconclusive — if you ran the test correctly
  and customers did not engage, that IS a result: the assumption is likely
  wrong; treat it as INVALIDATED until proven otherwise
- NEVER pivot based on one customer's feedback — one customer is a
  data point; a pattern across 3+ customers is signal
- NEVER persevere past 3 iterations of the same invalidated assumption —
  if you have tested the same assumption 3 ways and it keeps failing,
  the assumption is wrong; pivot on it
- NEVER update innov.local.md assumption status to VALIDATED without
  specific evidence (N customers, $X paid, N% retention) — "good signs"
  and "positive momentum" are not validation
