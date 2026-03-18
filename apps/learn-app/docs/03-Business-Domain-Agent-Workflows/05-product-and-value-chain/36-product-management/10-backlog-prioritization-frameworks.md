---
slug: /Business-Domain-Agent-Workflows/product-management/backlog-prioritization-frameworks
sidebar_position: 10
title: "Backlog Prioritization Frameworks"
description: "Apply RICE, ICE, MoSCoW, and Value vs. Effort frameworks to InsightFlow's backlog using /prioritise from the custom product-strategy plugin, run the three mandatory challenges, and produce a defensible quarterly priority decision"
keywords:
  [
    "product management",
    "backlog prioritization",
    "RICE framework",
    "MoSCoW",
    "prioritise plugin",
    "product decisions",
  ]
chapter: 36
lesson: 10
duration_minutes: 45

# HIDDEN SKILLS METADATA
skills:
  - name: "Select and apply the correct prioritisation framework for a given backlog context and produce a scored output using /prioritise"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student selects the correct framework based on context, invokes /prioritise, and produces a scored backlog output with all scoring assumptions made explicit"

  - name: "Run the three mandatory challenges against a scored backlog and produce a quarterly priority decision with documented strategic overrides"
    proficiency_level: "C1"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student applies all three challenges, identifies at least one strategic override or data gap, and produces a quarterly priority decision that documents what is NOT being built and why"

learning_objectives:
  - objective: "Select the appropriate prioritisation framework from RICE, ICE, MoSCoW, Value vs. Effort, and Kano based on the prioritisation challenge"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student correctly matches 4 scenario descriptions to the most appropriate framework and explains the decision"

  - objective: "Apply RICE scoring to a 15-item InsightFlow backlog using /prioritise with all assumptions made explicit"
    proficiency_level: "B2"
    bloom_level: "Apply"
    assessment_method: "Student produces a RICE table where every row includes reach, impact, confidence, and effort values — with scoring notes explaining each assumption"

  - objective: "Run the three mandatory challenges (Strategic Override Test, Data Gap Test, Regret Test) and produce a quarterly priority decision with documented overrides and discovery spikes"
    proficiency_level: "C1"
    bloom_level: "Evaluate"
    assessment_method: "Student identifies at least one strategic override and one data gap in the scored backlog, documents both in the quarterly priority decision"

cognitive_load:
  new_concepts: 6
  concepts_list:
    - "Framework selection guide (RICE, ICE, MoSCoW, Value vs. Effort, Kano)"
    - "RICE formula and scoring assumptions (Reach, Impact, Confidence, Effort)"
    - "Challenge 1: Strategic Override Test"
    - "Challenge 2: Data Gap Test"
    - "Challenge 3: 'What Would We Regret?' Test"
    - "Quarterly Priority Decision format (P1 / P2 / Stretch / Not Building / Overrides / Discovery Spikes)"
  assessment: "6 concepts at B2-C1. The RICE formula itself is straightforward; the difficulty is the honest scoring — most students initially overestimate confidence. The three challenges are the most important concepts: they catch the errors that RICE scores reliably miss. Students who complete this lesson have a complete prioritisation toolkit applicable to any backlog."

differentiation:
  extension_for_advanced: "Take the RICE output and challenge your confidence scores. For every item where you scored confidence above 70%, ask: what evidence grounds that confidence? If it is primarily gut feel, drop confidence to 50%. Re-run RICE with the revised scores. How many items change rank? The instability in the ranking is a signal of how much the prioritisation depends on data quality. Write a 2-sentence note for the top item that changed rank: what data would you need to restore confidence above 70%?"
  remedial_for_struggling: "Start with Value vs. Effort on a small backlog (5-7 items). Place each item in one of four quadrants: high value + low effort (do first), high value + high effort (plan carefully), low value + low effort (fill-ins), low value + high effort (do not do). This is RICE without the math. Once you can make and defend these placement decisions verbally, move to RICE — it is the same judgment, made more precise with numbers."

teaching_guide:
  key_points:
    - "RICE scores are relative, not absolute — they rank features against each other, not against an objective scale; the most important number is the confidence score, which makes the quality of evidence explicit"
    - "A RICE score from bad data is worse than no score — it creates false precision that makes bad prioritisation decisions look defensible"
    - "The Strategic Override Test is the most important challenge: if any item scored low would be built anyway, that override must be documented as an override, not buried in a score inflation"
    - "Low-confidence, high-effort items should almost always have a discovery spike before entering a sprint — investing 2 weeks in research to validate a feature is far cheaper than investing a full quarter to build the wrong one"
    - "The 'Not Building' list in the quarterly priority decision is as important as the build list — it prevents good ideas from re-entering the backlog discussion every planning meeting"
  misconceptions:
    - "A higher RICE score means we should definitely build it. Correction: RICE scores are inputs to a decision, not decisions themselves. The three challenges exist specifically because RICE systematically undervalues strategic bets (which have low confidence early) and overvalues quick wins (which have high confidence but low strategic weight). Use RICE to rank; use judgment to decide."
    - "Prioritisation frameworks produce objective rankings. Correction: all prioritisation frameworks encode assumptions. RICE's Impact scale (1/2/3) is a judgment call. Confidence percentages are estimates. The point of the framework is not to produce an objective ranking but to make the judgments explicit and visible, so they can be challenged and improved."
    - "The 'Not Building' list is optional. Correction: the Not Building list is the most important output of any prioritisation exercise. It closes the conversation on items that will keep coming back up in planning meetings. 'We scored it and decided not to build it this quarter because [reason]' ends the debate; leaving it off the list means the debate happens again next month."
  discussion_prompts:
    - "You run RICE and the AI-powered insights feature scores 5 — the lowest item on the backlog. Your CEO says it is the most strategically important investment you can make and should be Q3 Priority 1. Walk through the three challenges and determine whether this is a legitimate strategic override or whether the CEO's intuition conflicts with the RICE evidence in a way that warrants a discovery spike."
    - "Two items have the same RICE score: Feature A has high reach, moderate impact, high confidence, and moderate effort. Feature B has low reach, very high impact, very high confidence, and low effort. The scores are identical. How do you break the tie? What additional context would you gather? Does the Data Gap Test or Strategic Override Test apply to either?"
  teaching_tips:
    - "The Regret Test is the most memorable part of this lesson — 'ignore all scores and ask what your best customers would be most grateful for' cuts through analysis paralysis. Start the exercise by asking students to answer the Regret Test before they see the RICE scores. Then compare. The gap between the Regret Test answer and the RICE #1 is where the most productive conversation happens."
    - "When students produce their RICE output, ask them to read their confidence scores aloud and justify each one. This surfaces the difference between 'I believe this because I have evidence' and 'I believe this because I hope it is true.' The discipline of justifying confidence scores is a PM skill that transfers to every decision framework."
    - "The discovery spike concept is counterintuitive for students who equate action with progress. Frame it as risk management: a 2-week discovery spike costs 2 weeks; building a low-confidence, high-effort feature and finding out it does not solve the problem costs a full quarter. Discovery spikes are not delays — they are the cheap way to avoid expensive mistakes."
---

# Backlog Prioritization Frameworks

Fifteen items are competing for Q3. Six engineers. Ten sprints. Someone has to choose.

Most PMs in this situation do one of two things: they pick the features their loudest stakeholder asked for, or they run a prioritisation framework and present the scores as if the scores made the decision. Both approaches have the same problem — the judgment is hidden. The stakeholder drive is obvious; the framework score looks neutral but is shaped by assumptions that deserve scrutiny.

This lesson teaches you to use `/prioritise` from the custom `product-strategy` plugin to apply RICE scoring to InsightFlow's backlog, make every assumption visible, and then run the three mandatory challenges that catch what the framework reliably misses. The output is not a ranked list — it is a quarterly priority decision: what you are building, what you are not building, why, and what you are investigating before committing to build.

## Framework Selection Guide

Different prioritisation challenges need different tools. Before running any framework, identify what you are actually trying to decide:

| Question | Framework | Why |
| --- | --- | --- |
| "We have 15+ features and need to rank them" | RICE | Handles large backlogs with quantitative scoring; makes assumptions explicit |
| "We need a quick 2×2 without complex scoring" | Value vs. Effort | Fast, visual, good for team alignment sessions |
| "We need to sort backlog by customer demand vs. implementation complexity" | Kano | Distinguishes basic needs (must-have), performance needs (more = better), and delighters (unexpected value) |
| "We need to communicate to stakeholders what is MUST vs. SHOULD vs. COULD" | MoSCoW | Designed for stakeholder communication and release scoping |
| "We need to evaluate a single feature request — yes or no" | Single-feature evaluation | Structured go/no-go for a specific decision |

InsightFlow has 15 backlog items competing for Q3. The right tool is RICE.

## The RICE Framework in Depth

RICE Score = (Reach × Impact × Confidence) ÷ Effort

Each dimension requires a judgment with an explicit assumption:

| Dimension | Definition | Scale | Common Mistake |
| --- | --- | --- | --- |
| **Reach** | % of active accounts likely to use this in the first 3 months | 0–100% | Confusing "could use" with "will use" — be conservative |
| **Impact** | How much will this improve the experience for those who use it? | 1 = minimal, 2 = moderate, 3 = significant | Overestimating — 3 should be rare; most features are 1 or 2 |
| **Confidence** | How confident are you in the Reach and Impact estimates? | 0–100% | Rounding up to 80% when the actual evidence base supports 50% |
| **Effort** | Engineering time in person-sprints (1 sprint = 2 weeks × 1 engineer) | Person-sprints | Estimating features in isolation — always estimate with the team |

:::caution Confidence Is Not Optimism
Confidence should reflect the quality of your evidence base, not your belief in the feature. If you are scoring confidence because you think the feature will succeed, you are scoring optimism. If you are scoring confidence because you have user research, support data, or comparable feature benchmarks, you are scoring evidence. The difference changes decisions.
:::

### What RICE Scores Cannot Capture

RICE has known blind spots. The three mandatory challenges exist specifically to address them:

| RICE Blind Spot | Why RICE Misses It | Challenge That Catches It |
| --- | --- | --- |
| Strategic necessity | CEO commitment / competitive necessity scores low on reach or confidence | Strategic Override Test |
| Evidence gaps | Low confidence items are ranked low, but the question is whether to gather data first | Data Gap Test |
| User love | What customers care about most may not have the highest reach or confidence | Regret Test |

## The Three Mandatory Challenges

Run all three after any RICE scoring. They are not optional:

### Challenge 1: Strategic Override Test

> Is there any item that scored low that you would build anyway?

If yes, write the override reason explicitly. Common legitimate overrides:
- CEO commitment to a named enterprise customer
- Competitive necessity (competitor just shipped this feature)
- Technical prerequisite (enables higher-scoring features)
- Enterprise deal dependency (named deal at risk without it)

None of these reasons are wrong — but they must be documented as overrides, not buried in a score that was inflated to make the override look data-driven. A score you changed to justify a decision you had already made is not prioritisation — it is reverse-engineering.

### Challenge 2: Data Gap Test

> For each item with confidence below 50%: what would it take to raise confidence above 70%? Can you get that in a 2-week discovery spike?

Low-confidence, high-effort items should almost always have a discovery spike before they enter a sprint. Investing 2 weeks in a research sprint to determine whether an 8-sprint feature is worth building is far cheaper than discovering 4 sprints in that the assumption was wrong.

If an item scores low confidence but high effort: do the discovery spike. Do not build it yet.

### Challenge 3: "What Would We Regret?" Test

> Ignore all scores. Ask: which item, if we shipped nothing else this quarter, would our best customers be most grateful for?

Does it match the top RICE scorer? If not, investigate why the gap exists. The gap is usually one of two things:
1. A data quality issue in the scoring (fix the score)
2. A strategic weight that RICE cannot capture (document it as an override)

The Regret Test is not a replacement for RICE — it is a sanity check. If you cannot reconcile the gap between the RICE result and the Regret Test answer, you have not finished the prioritisation.

## Worked Example: InsightFlow Q3 Backlog RICE Scoring

InsightFlow has 15 items competing for Q3. Run `/prioritise` with the backlog:

```
/prioritise
Apply RICE scoring to InsightFlow's Q3 backlog.

Context:
- InsightFlow: B2B SaaS analytics platform (Series B, 50 employees, 200 customers)
- Engineering team: 12 engineers, 2-week sprints, ~40 story points velocity
- Available Q3 capacity (70% feature budget): ~28 pts × 8 sprints = 224 pts
- Personas: Analyst Alex (primary), VP Priya (secondary), CFO Marcus (tertiary)

Backlog items:
1. Workflow Builder — Automation UI (from L08 epic)
   Effort: 5 sprints | Research: 8/12 interviews cited this as priority pain

2. Schedule Trigger Configuration (from L06 spec, enables item 1)
   Effort: 1.5 sprints | High confidence — L04 research, 31 support tickets

3. Data Threshold Trigger Configuration (from L06 spec)
   Effort: 2 sprints | Medium confidence — L04 research evidence

4. SOC 2 Type II compliance prep
   Effort: 4 sprints | High confidence — 3 enterprise deals stalled

5. Self-serve onboarding redesign
   Effort: 3 sprints | Medium confidence — NPS survey, no direct interviews

6. Custom metric alerts (email threshold alerts — from L06 alt exercise)
   Effort: 1 sprint | Medium confidence — VP Priya research interviews

7. API v3 (breaking change for developer customers)
   Effort: 5 sprints | High confidence — developer segment request

8. Bulk dashboard export to PDF (from spec source example)
   Effort: 2 sprints | High confidence — 47 support tickets Q1

9. Scheduled report delivery (automated report emails)
   Effort: 2 sprints | High confidence — follows bulk export

10. Advanced analytics: cohort analysis
    Effort: 4 sprints | Low confidence — single enterprise customer request

11. Mobile app (iOS)
    Effort: 10 sprints | Low confidence — general request, no user research

12. Salesforce CRM integration
    Effort: 3 sprints | High confidence — 3 named deals requested it

13. Custom dashboard themes / white-labeling
    Effort: 2 sprints | Low confidence — 2 customer requests

14. Data connector: BigQuery (native)
    Effort: 2 sprints | Medium confidence — developer segment feedback

15. Audit log export improvements
    Effort: 1 sprint | High confidence — enterprise compliance requirement

Apply RICE. Show all scoring assumptions.
Then run all three mandatory challenges.
Produce the quarterly priority decision.
```

**Sample RICE output from `/prioritise`:**

```
RICE PRIORITISATION — INSIGHTFLOW Q3 BACKLOG
════════════════════════════════════════════════════════════
RICE Score = (Reach × Impact × Confidence) ÷ Effort
Scores are relative — use for ranking, not absolute value.

| # | Item | Reach | Impact | Confidence | Effort | RICE | Rank |
|---|---|---|---|---|---|---|---|
| 15 | Audit log improvements | 25% | 2 | 90% | 1 | 45 | 🥇 1 |
| 8  | Bulk dashboard export  | 55% | 2 | 85% | 2 | 47 | 🥇 1* |
| 2  | Schedule Trigger       | 60% | 3 | 80% | 1.5 | 96 | 🥇 1** |
| 6  | Custom metric alerts   | 35% | 2 | 70% | 1 | 49 | 2 |
| 9  | Scheduled reports      | 50% | 2 | 80% | 2 | 40 | 3 |
| 12 | Salesforce integration | 30% | 3 | 75% | 3 | 23 | 4 |
| 3  | Threshold trigger      | 50% | 3 | 60% | 2 | 45 | 4* |
| 14 | BigQuery connector     | 25% | 2 | 60% | 2 | 15 | 5 |
| 5  | Onboarding redesign    | 70% | 2 | 55% | 3 | 26 | 5* |
| 7  | API v3                 | 25% | 3 | 80% | 5 | 12 | 6 |
| 4  | SOC 2 compliance       | 20% | 3 | 85% | 4 | 13 | 6* |
| 1  | Workflow Builder UI    | 55% | 3 | 65% | 5 | 21 | 7 |
| 13 | Dashboard themes       | 30% | 1 | 40% | 2 | 6  | 8 |
| 10 | Cohort analysis        | 15% | 3 | 30% | 4 | 3  | 9 |
| 11 | Mobile app             | 40% | 3 | 25% | 10 | 3  | 9= |

*Note: Items with same RICE score ranked by confidence quality
**Schedule trigger scores high due to research evidence base (L04)

SCORING ASSUMPTIONS:
  Reach:      % of 200 active accounts likely to use within 90 days
  Impact:     1 = minor (saves time) | 2 = moderate (weekly habit) |
              3 = significant (unblocks new use cases)
  Confidence: Based on evidence quality:
              90% = multiple data sources (research + tickets + interviews)
              70-80% = one strong data source
              50-60% = single source or anecdotal
              25-40% = hypothesis without evidence
  Effort:     Person-sprints (1 sprint = 2 weeks × 1 engineer)

THREE MANDATORY CHALLENGES:

CHALLENGE 1: STRATEGIC OVERRIDE TEST
  Item 4 (SOC 2) scores 13 but would be built regardless:
    Override reason: 3 enterprise deals stalled in procurement.
    Without SOC 2, InsightFlow cannot close enterprise deals in H2.
    RICE cannot capture deal-blocking features accurately because
    the reach is concentrated in a few high-value accounts, not
    the broad user base. SOC 2 is a strategic override — build it.

  Item 1 (Workflow Builder UI) scores 21 but is the Q3 strategic bet:
    Override reason: This is the entire Q3 product narrative.
    Without it, schedule trigger (item 2) and threshold trigger
    (item 3) are orphaned sub-features with no home. The Workflow
    Builder UI is the container that makes automation coherent.
    Build it as the Q3 foundation.

CHALLENGE 2: DATA GAP TEST
  Item 10 (Cohort analysis): confidence 30%, effort 4 sprints.
    → Discovery spike recommended before Q4 planning.
    What to learn: Does cohort analysis address a workflow analytics
    need (different from standard cohort tools), or can users meet
    this need with existing custom dashboards?
    Spike: 5 customer interviews + competitive analysis (2 weeks)

  Item 11 (Mobile app): confidence 25%, effort 10 sprints.
    → Do not build until confidence reaches 70%.
    What to learn: Who is the mobile user — is it a new persona
    (field sales, operations) or an existing user with a new context?
    Spike: 8 user interviews focused on mobile use cases (2 weeks)

  Item 5 (Onboarding redesign): confidence 55%, effort 3 sprints.
    → Borderline. Recommend one more data source before committing.
    Currently based on NPS survey data alone. One round of
    5 direct user interviews would raise confidence to ~75%.

CHALLENGE 3: "WHAT WOULD WE REGRET?" TEST
  Ignoring all scores: which item would best customers be most
  grateful for this quarter?
  Answer: Workflow Builder (automation that replaces Monday morning
  manual runs). This is what 8/12 interview participants described
  as their primary pain.

  Gap from RICE top scorers: RICE ranks small tactical items
  (audit log export, bulk export, schedule trigger) above the
  strategic platform bet. The gap is not a data quality issue —
  it reflects RICE's fundamental tradeoff between near-term
  confidence and long-term strategic value. Document as context
  for the override, not a RICE failure.

QUARTERLY PRIORITY DECISION
════════════════════════════════════════════════════════════
PRIORITY 1 (must ship — Q3 foundation):
  Workflow Builder UI + Schedule Trigger Configuration
  → The Q3 strategic bet. Workflow Builder without triggers is
    incomplete; triggers without Workflow Builder have no home.
    Build together. 6.5 sprints combined.

PRIORITY 2 (ships if P1 is on track by Sprint 4):
  Bulk Dashboard Export + Scheduled Report Delivery
  → High RICE scores, high confidence, completes the reporting theme.
    3-4 sprints. Can run parallel to Workflow Builder in Sprints 3-5
    with a dedicated developer.

STRETCH (ships if capacity allows):
  Custom Metric Alerts (email threshold alerts)
  → 1 sprint. High confidence. Addresses VP Priya persona directly.
    Build in Sprint 6 if P1 + P2 are on track.

EXPLICITLY NOT BUILDING THIS QUARTER:
  Mobile app — discovery spike required before any build commitment
  Cohort analysis — discovery spike required; single-source evidence
  Dashboard themes — low impact, low confidence; defer to backlog
  API v3 — high effort, high confidence, but strategic timing not Q3;
             start design in Q3, build in Q4

STRATEGIC OVERRIDES DOCUMENTED:
  SOC 2 compliance — not a top RICE scorer but enterprise deal-blocking.
    Build alongside P1 as a parallel workstream (4 sprints). Assign
    dedicated developer separate from Workflow Builder team.

DISCOVERY SPIKES RECOMMENDED:
  Mobile app — Who is the mobile user? 8 interviews, 2 weeks
  Cohort analysis — Differentiation from standard tools? 5 interviews
    + competitive analysis, 2 weeks. Schedule before Q4 planning.
════════════════════════════════════════════════════════════
```

### Evaluating the Output

**Check 1 — All assumptions shown.** Every RICE score has a scoring note explaining reach, impact, and confidence estimates. If the agent produced a table without assumptions, prompt: "Add a SCORING ASSUMPTIONS section explaining the basis for reach, impact, and confidence estimates on every item."

**Check 2 — Three challenges all ran.** Verify that all three challenges produced output. If the Regret Test is missing, prompt: "Run Challenge 3: which item, if we shipped nothing else this quarter, would our best customers be most grateful for? Does it match the RICE #1? If not, explain the gap."

**Check 3 — Not Building list is present.** Confirm the quarterly priority decision includes an EXPLICITLY NOT BUILDING list. If missing, prompt: "Add an 'Explicitly Not Building This Quarter' section to the quarterly priority decision — with one-sentence rationale for each item."

**Check 4 — Low-confidence, high-effort items have discovery spikes.** Mobile app (confidence 25%, effort 10 sprints) and cohort analysis (confidence 30%, effort 4 sprints) should both have discovery spike recommendations with specific questions and a 2-week timeframe.

:::note Keep This File
Lessons 3-14 build one continuous product management cycle for InsightFlow. Keep your Cowork session and working folder between lessons. The quarterly priority decision you produce here feeds directly into Lesson 11, where you will use `/sprint-planning` (official plugin) to scope Sprint 1 of the Workflow Builder build — pulling from the Priority 1 items in this decision.
:::

## Try With AI

Use these prompts in Cowork or your preferred AI assistant.

**Prompt 1 — Reproduce** (apply what you just learned):

```
Apply RICE scoring to this InsightFlow mini-backlog (6 items):

1. Workflow Builder UI (effort: 5 sprints, confidence: 65%,
   evidence: 8/12 user interviews)
2. Schedule Trigger (effort: 1.5 sprints, confidence: 80%,
   evidence: L04 research + 31 support tickets)
3. Bulk Export (effort: 2 sprints, confidence: 85%,
   evidence: 47 support tickets)
4. SOC 2 compliance (effort: 4 sprints, confidence: 85%,
   evidence: 3 enterprise deals stalled)
5. Mobile app (effort: 10 sprints, confidence: 25%,
   evidence: general stakeholder request)
6. Custom metric alerts (effort: 1 sprint, confidence: 70%,
   evidence: VP Priya user interview)

Reach: your estimate based on InsightFlow's 200 customers.
Impact: apply the 1/2/3 scale with justification.

Show all assumptions. Run all three mandatory challenges.
Produce a quarterly priority decision.
```

**What you're learning:** Running a complete RICE prioritisation from start to finish on a reduced backlog. The small size makes it easy to hold all six items in mind simultaneously — which helps you feel the tradeoff between the Regret Test answer and the RICE top scorer.

**Prompt 2 — Adapt** (change the context):

```
A PM at a legal tech SaaS has these 5 items competing for Q3:

1. AI Contract Summary — automatic plain-English summary of uploaded
   contracts. Effort: 3 sprints. Confidence: 60% (user research exists,
   AI accuracy validation is in progress).
2. Bulk document upload — upload 50+ contracts at once instead of one
   by one. Effort: 1 sprint. Confidence: 85% (support tickets, user
   requests).
3. E-signature integration (DocuSign). Effort: 2 sprints. Confidence:
   75% (customer interviews confirm it).
4. Custom fields — add custom data fields to contract records. Effort:
   1.5 sprints. Confidence: 70% (power user request).
5. Audit trail export — compliance-required export of all document
   access events. Effort: 1 sprint. Confidence: 90% (3 enterprise
   deals cited it as requirement).

Apply RICE. Then run Challenge 1 (Strategic Override) and Challenge 2
(Data Gap) specifically. Does AI Contract Summary need a discovery
spike, or is 60% confidence sufficient given its strategic importance?
What would raise its confidence to 80%?
```

**What you're learning:** Applying the Data Gap Test in a context where the feature is strategically important but evidence is incomplete. Legal tech AI features often have confidence issues because the legal review validation step creates uncertainty. The challenge is deciding whether to spike or commit.

**Prompt 3 — Apply** (connect to your domain):

```
Take 5-10 items from your current or recent backlog.

For each item, score:
- Reach: % of active users/accounts likely to use within 90 days
- Impact: 1 (minor), 2 (moderate), 3 (significant)
- Confidence: % — and name the evidence that grounds the score
- Effort: person-sprints

Calculate RICE. Then:
1. Run the Regret Test: which item would best customers be most
   grateful for, ignoring all scores?
2. Run the Strategic Override Test: is there any low-scoring item
   you would build anyway? Document the override reason.
3. Run the Data Gap Test: which items have confidence below 50%?
   What would a 2-week discovery spike investigate?

Compare the RICE ranking to the Regret Test answer. Note the gap.
```

**What you're learning:** The real value of the prioritisation exercise — the gap between what scores highest and what you would actually feel best about building. That gap is where the most important PM judgment lives.

## Exercise: RICE-Score the InsightFlow Story Backlog

**Plugin:** Custom product-strategy
**Command:** `/prioritise`
**Time:** 35 minutes

**Step 1 — Assemble the backlog**

Gather your story backlog from L08 (Workflow Builder stories) and add the following competing items from the broader InsightFlow Q3 backlog: SOC 2 compliance prep, bulk dashboard export, and at least two lower-priority items of your choice. You need at least 8 items for a meaningful RICE exercise.

**Step 2 — Run /prioritise with RICE**

```
/prioritise
Apply RICE scoring to the InsightFlow Q3 story backlog.

[List your 8+ items from the backlog assembled in Step 1, with any
evidence context you have from L04-L09.]

Show all scoring assumptions. Run the three mandatory challenges.
Produce the quarterly priority decision with P1 / P2 / Stretch /
Not Building / Overrides / Discovery Spikes.
```

**Step 3 — Challenge three specific scores**

Pick three items from the output and challenge their confidence scores:

```
Challenge these three confidence scores:
- [Item A]: you scored confidence at [X]%. What evidence specifically
  grounds this? If it is based on user research, cite the source.
  If it is based on general belief, drop confidence to 50%.
- [Item B]: [same challenge]
- [Item C]: [same challenge]

After revising confidence, recalculate RICE and show the updated ranking.
How many items changed rank?
```

**Step 4 — Run the Regret Test**

```
Ignore all RICE scores. Ask: which item, if InsightFlow shipped nothing
else this quarter, would Analyst Alex and VP Priya be most grateful for?

Does this match the RICE #1 scorer? If not, explain the gap:
(a) Is it a data quality issue in the scoring? (fix the score)
(b) Is it a strategic weight RICE cannot capture? (document as override)
```

**Step 5 — Produce the quarterly priority decision**

Verify the output includes: P1 / P2 / Stretch / Explicitly Not Building / Strategic Overrides / Discovery Spikes. If any section is missing, prompt the agent to add it.

The "Explicitly Not Building" section must have at least 3 items with rationale. If the agent only listed 1, prompt: "The 'Explicitly Not Building' section must include all items that were evaluated and rejected for this quarter — with one sentence explaining why. List all rejected items."

## What You Built

You applied RICE scoring to InsightFlow's backlog, made all assumptions explicit, ran the three mandatory challenges, and produced a quarterly priority decision with documented overrides and discovery spikes. The decision explicitly names what is not being built this quarter — closing the recurring conversation about those items in every planning meeting.

This priority decision feeds directly into Lesson 11, where you will use `/sprint-planning` from the official `product-management` plugin to scope Sprint 1 of the Workflow Builder build — pulling from the Priority 1 items you identified here.

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 11: Sprint Planning & Capacity →](./11-sprint-planning-capacity.md)
