# NDA Triage and Management — Summary

## Core Concept

NDAs are high-volume, low-complexity contracts that consume disproportionate attorney time -- the `/triage-nda` command eliminates this bottleneck with a three-tier routing system that matches legal attention to actual risk level. The lesson shifts the question from "what needs redlining?" (contract review) to "does this need attorney time at all?" (triage), reducing attorney NDA time from 12+ hours per month to 3-4 hours by auto-approving 60-70% of incoming NDAs while escalating the genuinely risky 10-15%.

## Key Mental Models

- **Three-tier triage system**: Tier 1 (60-70%, auto-approve, no attorney review), Tier 2 (20-30%, counsel review ~15 min, no negotiation expected), Tier 3 (10-15%, full review + likely negotiation)
- **Nine automatic RED flags**: Residuals clause, no public info carve-out, non-compete provisions, asymmetric injunctive relief, perpetual confidentiality, unilateral NDA (where mutual expected), unrestricted affiliate disclosure, governing law in non-English-speaking jurisdiction, survival period exceeding 7 years
- **Residuals clause trap**: Permits use of information "retained in unaided memory" -- sounds innocuous but can render the entire NDA unenforceable for protecting trade secrets
- **SLA targets by tier**: Tier 1 = 1 business day, Tier 2 = 2 business days, Tier 3 = 5 business days
- **Triage vs. review**: Contract review (L03) examines clause-by-clause; NDA triage classifies the entire agreement into a routing tier first, then reviews only if needed
- **Playbook NDA configuration**: Standard form reference, Tier 1/2/3 criteria explicitly defined in `legal.local.md`

## Critical Patterns

- The triage report output includes: counterparty, tier classification, GREEN/YELLOW/RED summary, deviation list, residuals clause check, non-compete check, public info carve-out check
- Prediction moments before running triage build judgment calibration -- comparing gut feel to systematic triage reveals gaps in intuition
- Cross-border NDAs (e.g., Pakistan-Saudi) surface jurisdiction enforcement considerations that intuition often dismisses
- New York Convention signatories enable enforceable arbitral awards across borders -- key fallback for governing law negotiations

## Common Mistakes

- Treating all NDAs as requiring attorney review -- the whole point of triage is that 60-70% do not
- Overlooking residuals clauses because they sound reasonable -- "retained in unaided memory" is the most commonly overlooked high-risk NDA provision
- Confusing Tier 1 with "skip review" -- Tier 1 still requires business-unit manager approval, just not attorney review
- Not configuring tier criteria in the playbook -- without explicit criteria, the agent cannot distinguish Tier 1 from Tier 2
- Dismissing governing law deviations as minor -- Saudi law vs. English law has real enforcement implications even in a "simple" NDA

## Connections

- Builds directly on the GREEN/YELLOW/RED classification from **L03** -- triage tiers map to the same risk framework
- The playbook NDA section configured here extends the `legal.local.md` from **L02**
- A Tier 3 NDA with RED flags (e.g., residuals clause or asymmetric injunctive relief) may escalate to litigation -- covered in **L08**
- The triage system becomes one input channel for the Contract Intake Agent in **L10**, which routes NDAs automatically
- Cross-border NDA considerations (governing law, arbitration) connect to the cross-border analysis framework in **L04**
