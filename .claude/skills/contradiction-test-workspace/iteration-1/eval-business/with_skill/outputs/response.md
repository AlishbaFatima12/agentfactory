# Contradiction Test: Enterprise-First vs. SMB-First GTM Strategy

---

## Divergence Table

| # | Topic | Source A Position | Source B Position | Evidence: A | Evidence: B | Verdict |
|---|-------|-------------------|-------------------|-------------|-------------|---------|
| 1 | **Target customer** | Enterprise ($50k+/yr) | SMB ($99/mo) | Compliance features are complex, high-value | SMBs provide faster feedback loops | **Both partially right** — depends on product-market fit signal vs. revenue signal |
| 2 | **Sales cycle vs. runway** | 6-9 month cycles are acceptable given superior unit economics | 6-9 months eats 43-64% of remaining runway before first close | Strong: 3-5x LTV math is real | **Strong**: 14 months of cash is a hard constraint A ignores entirely |
| 3 | **Unit economics** | Enterprise LTV 3-5x higher | SMB volume compensates; traction unlocks upmarket later | Strong: enterprise SaaS benchmarks confirm | Moderate: requires hitting 500 customers in 6 months — aggressive assumption |
| 4 | **Team capacity** | 12 people can serve 20 enterprise accounts | Implicitly assumes 12 people can support 2,000 SMBs | **Strong**: enterprise is team-size appropriate | **Weak**: B never addresses support load, which is A's strongest point |
| 5 | **Analogies cited** | Veeva, Palantir (enterprise-native) | Slack, Zoom, Dropbox (SMB-to-enterprise) | Moderate: these companies had domain-specific moats, not universal playbook | Moderate: these companies had viral/self-serve loops this product may lack |
| 6 | **Compliance feature positioning** | Core differentiator that enterprises pay premium for | Can be simplified into "compliance-lite" tier for SMBs | Strong: compliance complexity = enterprise buying signal | **Speculative**: no evidence "compliance-lite" is a thing SMBs want or would pay for |
| 7 | **Path to scale** | Land 20 accounts, expand within them | Land 500 SMBs, use traction to move upmarket | Moderate: land-and-expand is proven but slow | Moderate: bottom-up is proven but requires self-serve product readiness |

---

## Draft 1: Integrated Analysis

**Core insight neither consultant states clearly:** This is not an either/or decision. It's a sequencing problem constrained by a 14-month runway.

**The runway kills the pure enterprise play.** Consultant A never addresses the cash constraint. At 6-9 month sales cycles, you close your first enterprise deal in Q3-Q4, meaning you're burning 6-9 months of your 14 months before seeing revenue. If the first 2-3 deals slip (common in enterprise), you're dead. This is the single most important fact in the analysis, and A ignores it.

**But the pure SMB play has its own fatal flaw.** Consultant B's "compliance-lite" concept is hand-waving. There's no evidence SMBs want simplified compliance — they typically ignore compliance until forced. And B never addresses team capacity: supporting 500-2,000 SMBs with 12 people requires a fully self-serve product, which likely doesn't exist yet given the enterprise-grade compliance features.

**Recommended strategy: Mid-market wedge with enterprise pipeline.**

1. **Months 1-6**: Target mid-market companies (200-2,000 employees) at $1,000-$3,000/month. These have real compliance needs (unlike SMBs), shorter sales cycles than enterprise (4-8 weeks, not 6-9 months), and your team of 12 can handle 50-80 accounts.
2. **Months 1-6 in parallel**: Start 3-5 enterprise conversations now. They won't close in time to save your runway, but they'll be ready to close by month 9-12.
3. **Months 7-14**: Close enterprise deals using mid-market traction as proof. Raise your next round with both mid-market revenue and enterprise pipeline.

This preserves A's insight (compliance is your moat, enterprise is where the money is) while respecting B's constraint (you can't wait 9 months for revenue).

---

### Self-Critique of Draft 1

1. **Mid-market assumption is untested.** I introduced a third segment (mid-market) without evidence this company's product fits there. Mid-market can be a "worst of both worlds" — enterprise complexity with SMB budgets.
2. **$1,000-$3,000/month pricing is made up.** No data supports this price point for this product in this market.
3. **"4-8 week sales cycle" for mid-market is optimistic.** Mid-market compliance software can easily take 3-4 months.
4. **I ignored B's feedback-loop argument.** Getting to PMF faster is a real advantage of higher-volume segments. Draft 1 doesn't address how to get rapid learning with 50-80 mid-market accounts.
5. **The parallel enterprise pipeline recommendation is vague.** Who runs it? The 12-person team is already busy with mid-market.

---

## Draft 2: Integrated Analysis (Revised)

**What changed from Draft 1:** Removed the speculative mid-market wedge as the primary recommendation. Instead, structured the decision around the actual constraint hierarchy: runway > learning velocity > unit economics. Added explicit decision criteria so the founder can evaluate rather than just trust a recommendation.

---

**The constraint hierarchy determines the sequence:**

1. **Survival** (14 months of cash) — eliminates any strategy with 6+ month time-to-first-revenue
2. **Learning velocity** — whichever segment teaches you more, faster, wins the sequencing debate
3. **Unit economics** — matters after survival and PMF, not before

**What both consultants get right:**
- A is right that compliance is the moat and enterprise is the destination.
- B is right that the runway prohibits a pure enterprise-first play.
- A is right that 12 people can't support thousands of SMBs.
- B is right that more customer conversations = faster PMF.

**What both consultants get wrong:**
- A ignores the runway constraint entirely — this is disqualifying for the pure version of A's recommendation.
- B assumes "compliance-lite" exists as a category. It likely doesn't. SMBs that want compliance usually want the real thing (they're being audited) or don't want it at all.
- Neither addresses the actual question: **Do you have product-market fit yet?** If yes, the strategies diverge. If no, that dominates everything.

**Decision framework (not a single recommendation):**

**If you DO NOT have PMF yet** (most likely scenario with 14 months runway):
- Sell to whoever will buy fastest, at whatever price covers CAC within 60 days
- Run 5 parallel experiments: 2 enterprise pilots (free/discounted for speed), 2 mid-market ($500-2k/mo), 1 SMB cohort (if a self-serve path exists)
- Instrument everything — which segment retains, expands, and refers?
- Make the segment decision at month 4 with real data, not consultant opinions
- Reserve 10 months of runway for the actual go-to-market push

**If you DO have PMF** (you know who loves the product):
- If enterprises love it: Accept the longer cycle, but close 2-3 design partners at reduced price NOW to prove revenue before raising
- If smaller companies love it: B's playbook, but forget "compliance-lite" — sell what's actually working

**The 3-5 enterprise conversations should start regardless.** Even if you don't close them in 14 months, they are (a) market research, (b) pipeline for post-fundraise, and (c) credibility signal for investors. But they cannot be your revenue plan on this runway.

---

### Self-Critique of Draft 2

1. **"Run 5 parallel experiments" may be unrealistic for a 12-person team.** Five simultaneous go-to-market motions is a lot. Need to address resource allocation.
2. **The "if you have PMF / if you don't" fork is a cop-out.** The user asked me to synthesize, not give them a decision tree. I should take a position.
3. **I still haven't resolved the compliance-lite question.** Is there evidence either way? I should address it head-on rather than dismissing it.
4. **Draft 2 is more rigorous but less actionable than Draft 1.** The user asked for a strategy, not a framework.

---

## Draft 3: Integrated Analysis (Final)

**What changed from Draft 2:** Took a clear position instead of hedging behind decision trees. Reduced the number of parallel experiments to something a 12-person team can actually execute. Addressed compliance-lite directly. Made it a month-by-month plan.

---

### The Synthesis

Both consultants are selling you a clean narrative. Reality is messier and more urgent. Here's what's actually true:

**A is right about the destination.** Compliance features are your moat. Enterprise is where the money is. Your team size fits enterprise, not SMB. Long-term, you're an enterprise company.

**B is right about the sequence.** You cannot get to the destination on 14 months of runway via 6-9 month sales cycles. One slipped deal and you're fundraising from a position of weakness. B's urgency instinct is correct.

**B is wrong about compliance-lite.** This is the weakest claim in either argument. Compliance is binary in practice — you're being audited or you're not. "Lite" compliance is like "lite" pregnancy. Don't build a product tier around a category that probably doesn't exist. (Test this: call 20 SMBs and ask if they'd pay $99/month for simplified compliance. If fewer than 5 say yes with urgency, kill the idea.)

**A is wrong about ignoring the runway.** The math doesn't work. 6-9 months to first close + 3-month enterprise onboarding = 9-12 months before revenue recognition. That leaves 2-5 months of remaining runway — not enough to prove the model for a raise.

### The Strategy: Compressed Enterprise with a Safety Net

**Months 1-3: Validate and compress.**
- Sign 3-5 enterprise **design partners** at $15-25k/year (discounted from $50k). Position it as "founding partner pricing" with a case study commitment. This compresses the sales cycle because you're selling a partnership, not a product.
- In parallel, launch one cohort of 20-30 smaller companies at $500/month as your feedback engine and safety-net revenue. Not 2,000 SMBs (team can't support it). Not compliance-lite (probably fake category). Full product, lower price, smaller companies that still need compliance.
- Allocate team: 4 people on enterprise design partners, 3 on the smaller cohort, 5 on product.

**Months 4-6: Read the signal.**
- Which segment has better activation and retention? (Not revenue — behavior.)
- Are enterprise design partners actually using the product, or are they in "pilot purgatory"?
- Are the smaller companies churning, or expanding usage?
- You now have data. Both consultants gave you opinions.

**Months 7-10: Double down on whichever segment shows retention.**
- If enterprise retains: convert design partners to full price, use them as references for 10-15 more enterprise deals, raise Series A on $200k+ ARR and a pipeline of enterprise logos.
- If smaller companies retain: expand that cohort to 100-200, systematize onboarding, raise on growth trajectory and path to enterprise.

**Months 11-14: This should be fundraising, not experimenting.** If you're still searching for PMF at month 11, you have a product problem, not a GTM problem.

### Why this beats either consultant's recommendation

- Unlike A's plan: you have revenue in months, not quarters.
- Unlike B's plan: you're not building a fake product tier or drowning in SMB support.
- You're running enterprise and smaller-company motions in parallel, but at a scale your team can handle (5 accounts + 25 accounts, not 20 enterprises or 2,000 SMBs).
- You preserve optionality until you have data, then commit hard.

### The one thing that could blow this up

If your compliance features genuinely require 3-6 months of custom implementation per customer, no amount of clever GTM solves the problem. That's a product architecture issue. Before executing any strategy, answer honestly: **Can a new customer get value from your product in under 30 days?** If not, fix that first.

---

## Contradiction Resolution Summary

| # | Contradiction | Resolution |
|---|---------------|------------|
| 1 | Enterprise-first vs. SMB-first | **Neither. Compressed enterprise (design partners) + small cohort in parallel.** Enterprise is the destination, but pure enterprise-first is a runway death sentence. |
| 2 | 6-9 month cycles vs. 14 months cash | **Design partner model compresses cycles to 4-8 weeks** by selling a partnership at reduced price, not a full enterprise deal. |
| 3 | Enterprise LTV vs. SMB feedback loops | **You need both.** The smaller cohort gives you learning velocity. The enterprise design partners give you the logos and case studies for fundraising. |
| 4 | 12-person team capacity | **Scale to what the team can handle: ~30 total accounts** (5 enterprise + 25 smaller), not 20 enterprise or 2,000 SMBs. |
| 5 | Compliance as enterprise-only differentiator vs. compliance-lite for SMBs | **A is right.** Compliance-lite is likely a fake category. Sell full compliance to smaller companies that need it (they exist — companies facing their first audit), not a watered-down version. |
| 6 | Analogies (Veeva/Palantir vs. Slack/Zoom) | **Both sets of analogies are misleading.** Veeva had pharma domain lock-in. Slack had viral loops. Your company has neither. Stop reasoning from other companies' playbooks. |
| 7 | When to commit to a segment | **Month 4-6, based on retention data.** Neither consultant gives you a decision trigger. The strategy above does: measure activation and retention, then commit. |

**Net assessment:** Consultant A has the better long-term vision but ignores the constraint that could kill you before you get there. Consultant B has the better survival instinct but proposes a product tier (compliance-lite) that probably doesn't exist. The synthesis takes A's destination, B's urgency, and adds what both missed: a parallel approach sized to your team, with an explicit data-driven decision point at month 4-6.
