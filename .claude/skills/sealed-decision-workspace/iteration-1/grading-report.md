# Sealed Decision Skill — Eval Grading Report (Iteration 1)

## Eval Cases Run

| Case | Condition | File |
|------|-----------|------|
| Business (Acquisition) | Without Skill | business-without-skill.md |
| Business (Acquisition) | With Skill | business-with-skill.md |
| Career (Job Offers) | Without Skill | career-without-skill.md |
| Career (Job Offers) | With Skill | career-with-skill.md |

---

## Case 1: Business Acquisition Decision

### Expectations Checklist

| # | Expectation | Without Skill | With Skill |
|---|-------------|---------------|------------|
| 1 | Single clear recommendation sentence (not hedged) | PASS — "Accept the $5M strategic buyer offer and negotiate a 6-month transition period with explicit role guarantees" | PASS — "Take the $5M strategic offer and negotiate a 12-month team retention package with role guarantees for key employees" |
| 2 | Confidence % with justification | PASS — 62%, justified by financial logic vs cultural fit unknowns | PASS — 68%, justified by financial logic vs integration track record unknowns |
| 3 | 3 missing info items ranked by decision impact | PASS — All 3 ranked with specific impact statements: (1) buyer integration track record, (2) PE operating expectations, (3) which team members are critical | PASS — All 3 ranked with specific impact: (1) integration track record, (2) MRR growth rate, (3) PE hold period expectations |
| 4 | Specific, testable reversal trigger | PASS — ">2 of top 5 critical team members would leave within 6 months even with retention" | PASS — "last two acquisitions show >50% departure within 12 months, OR MRR growth exceeds 15% MoM for 3 months with pipeline >$500K ARR" |
| 5 | Reasoning 200+ words addressing key tradeoffs | PASS — 280 words, addresses money vs independence, runway pressure, team retention | PASS — 287 words, addresses premium vs risk, runway framing, team morale |
| 6 | Acknowledges what is being given up | PASS — "genuine operational autonomy, ability to pivot, identity of independent company" | PASS — "identity, control, the chance that your product becomes a $50M company" |

**Score: Without Skill = 6/6, With Skill = 6/6**

### Qualitative Comparison

Both outputs are strong. Key differences:

- **Structure**: Without-skill output self-organized into a Decision Document format (likely because the model has seen the pattern before). With-skill output follows the exact template from the SKILL.md.
- **Reversal trigger quality**: With-skill produced a compound reversal trigger (OR condition) covering two failure modes. Without-skill focused on a single team attrition trigger. The with-skill version is arguably more comprehensive.
- **Missing info #2 divergence**: Without-skill chose "PE operating expectations" (directly about the alternative offer). With-skill chose "MRR growth rate" (about whether to reject BOTH). The with-skill version introduces a third option (reject both and raise), showing broader strategic thinking.
- **Actionable next steps**: Without-skill included a 4-step action plan with timeline. With-skill included a single next-step. The without-skill output is more actionable at the end.

**Delta assessment**: Minimal structural uplift because the base model already produces Decision Document-like output for this prompt. The skill's value appears in the reversal trigger complexity and the missing-info ranking discipline.

---

## Case 2: Career / Job Offers Decision (Edge Case)

### Expectations Checklist

| # | Expectation | Without Skill | With Skill |
|---|-------------|---------------|------------|
| 1 | Single clear recommendation sentence (not hedged) | PASS — "Take the FAANG offer." | PASS — "Accept the FAANG offer and negotiate the base salary upward using the $210K competing offer as leverage." |
| 2 | Confidence % with justification | PASS — 72%, justified by financial obligation profile vs unknowns about spouse income and savings | PASS — 72%, justified by family obligations vs unknown total comp and spouse income |
| 3 | 3 missing info items ranked by decision impact | PASS — (1) household financial runway, (2) startup financial health, (3) equity package. All with impact statements. | PASS — (1) FAANG total comp, (2) spouse's employment, (3) startup burn rate. All with impact statements. |
| 4 | Specific, testable reversal trigger | PASS — Compound: ALL THREE of (1) 6+ months liquid savings, (2) spouse covers mortgage alone, (3) 80%+ YoY growth with Series C pipeline | PASS — Compound: ALL THREE of (1) FAANG total comp <$190K, (2) spouse income >$100K, (3) startup >$5M ARR with Series C interest |
| 5 | Reasoning 200+ words addressing family vs financial upside | PASS — 282 words, addresses asymmetric downside, FAANG benefits, growth path solution, life stage framing | PASS — 280 words, addresses asymmetric downside, total comp understatement, sequencing frame |
| 6 | Acknowledges personal/family dimension without being dismissive | PASS — "If you were 26 and renting, I'd say take the startup without hesitation" — respectful of family stakes | PASS — "You are not choosing between adventure and boredom. You are choosing sequencing." — reframes positively |

**Score: Without Skill = 6/6, With Skill = 6/6**

### Qualitative Comparison

- **Recommendation quality**: With-skill adds actionable negotiation advice ("use competing offer as leverage") vs without-skill's bare recommendation. Edge: with-skill.
- **Reversal trigger specificity**: Both use compound ALL-THREE triggers with concrete thresholds. With-skill uses dollar amounts ($190K, $100K, $5M ARR). Without-skill uses percentages and dollar amounts ($40K liquid, 80% YoY). Both are strong and testable. Slight edge: with-skill for using more directly verifiable numbers.
- **Missing info divergence**: Without-skill leads with "household financial runway" (family-centric). With-skill leads with "FAANG total comp" (offer-centric). Both valid prioritizations.
- **Framing**: With-skill's "sequencing" frame is a stronger conceptual contribution — it reframes the decision from binary to temporal. Without-skill's "survivable vs not" framing is blunter but equally effective.

**Delta assessment**: With-skill produces marginally better output — the negotiation advice in the recommendation and the sequencing reframe add value. But the without-skill output is already hitting all expectations.

---

## Summary

| Metric | Without Skill | With Skill |
|--------|--------------|------------|
| Business: Expectations met | 6/6 | 6/6 |
| Career: Expectations met | 6/6 | 6/6 |
| Total | 12/12 | 12/12 |
| Structural compliance (template match) | Partial (self-organized) | Full (follows template exactly) |
| Reversal trigger quality | Strong | Slightly stronger (compound, more specific) |
| Recommendation actionability | Strong | Slightly stronger (includes negotiation tactics) |

### Key Finding

The sealed-decision skill does NOT produce a dramatic pass/fail difference on these prompts. The base model already knows how to structure decisions well. The skill's value is in:

1. **Structural consistency**: Guaranteed template compliance every time, vs. the base model sometimes organizing differently.
2. **Edge quality**: Marginally better reversal triggers, slightly more actionable recommendations.
3. **Reliability**: The with-skill outputs follow the exact format reliably. Without-skill outputs vary in structure.

### Recommendation for Iteration 2

The skill would show more differentiation on:
- **Vague prompts** where the user does NOT say "help me structure this decision" (e.g., "I'm torn between X and Y, thoughts?")
- **Non-decision prompts** where the user presents a decision disguised as a question (e.g., "What do you think about migrating to Kubernetes?")
- **Overconfident inputs** where Coach Mode would push back on calibration

The current evals test the happy path well. The skill passes. Its primary value is consistency and edge quality, not dramatic uplift on well-formed decision requests.
