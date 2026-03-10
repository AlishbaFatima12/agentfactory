---
sidebar_position: 3
title: "Lead Scoring"
description: "Build a three-dimension lead scoring model (Fit + Timing + Engagement), score five demo prospects with routing recommendations, discover miscalibrated scoring when the model underweights a signal Farah recognises, and define routing rules for each score tier"
keywords:
  [
    "lead scoring",
    "score-lead",
    "three-dimension scoring",
    "fit score",
    "timing score",
    "engagement score",
    "miscalibrated scoring",
    "lead qualification",
    "routing rules",
    "ICP scoring",
    "prospect ranking",
    "sales pipeline",
    "NexaFlow Technologies",
    "Meridian Logistics",
  ]
chapter: 23
lesson: 3
duration_minutes: 25

# HIDDEN SKILLS METADATA
skills:
  - name: "Configure and Apply a Three-Dimension Lead Scoring Model"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can configure a scoring model with Fit (0-40), Timing (0-40), and Engagement (0-20), score 5 prospects using the lead-scoring skill, read the dimension breakdown, and determine the correct classification (HOT, WARM, CULTIVATE, NOT YET)"

  - name: "Diagnose Miscalibrated Scoring by Comparing Agent Output to Domain Knowledge"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can identify when a score contradicts expert judgment, trace the miscalibration to a specific underweighted dimension or ICP section, adjust point weights, and re-score to verify the correction"

  - name: "Define Routing Rules That Match Score Tiers to Sales Actions"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can define routing rules (who gets which leads, what SLA applies) for each of the four classification tiers and explain why routing without scoring produces inconsistent results"

learning_objectives:
  - objective: "Score 5 prospects using the three-dimension model (Fit 40 + Timing 40 + Engagement 20) and classify each as HOT, WARM, CULTIVATE, or NOT YET with the correct recommended action"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces scored output for all 5 demo prospects, correctly classifies each, and explains which dimension drove the classification"

  - objective: "Diagnose a miscalibrated score by identifying a dimension the model underweights relative to domain expertise and adjusting the scoring weights to correct the classification"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Given a prospect that Farah would call HOT but the model classifies WARM, student traces the gap to a specific underweighted timing signal and proposes a weight correction"

  - objective: "Define routing rules for each score tier specifying owner, SLA, and recommended action"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Student produces a routing table with owner assignments and SLA targets for HOT, WARM, CULTIVATE, and NOT YET classifications"

cognitive_load:
  new_concepts: 6
  concepts_list:
    - "Three-dimension scoring model (Fit 40 / Timing 40 / Engagement 20)"
    - "Dimension breakdown as the unit of analysis (not the composite score)"
    - "Four classification tiers and their action mappings"
    - "Miscalibrated Scoring as an agent error type (discovered, not taught)"
    - "Scoring weight adjustment as the correction mechanism"
    - "Routing rules that connect score tiers to team assignments and SLAs"
  assessment: "6 concepts at B1 level. The scoring model provides the structural foundation; miscalibration diagnosis requires analytical comparison of agent output to domain knowledge. Routing rules are straightforward application."

differentiation:
  extension_for_advanced: "Score 10 additional prospects. Plot Fit vs Timing on a 2x2 grid (high/low for each). Which quadrant has the most prospects? What does this tell you about pipeline health? Design a custom scoring model that adds a fourth dimension for your industry."
  remedial_for_struggling: "Focus on scoring 3 prospects and correctly determining the action for each. If you can explain why a high-Fit, low-Timing prospect needs monitoring rather than immediate outreach, you have the core concept."
---

# Lead Scoring

In Lesson 2, you built NexaFlow's ICP and researched five prospects. You know WHO to target. But which prospect should get a call THIS WEEK?

Your CRM says Meridian Logistics is a "warm lead." What does that mean? Someone opened an email? The company matches your industry filter? "Warm" is not actionable. It does not tell Farah whether to call Meridian before TransPak, or whether either of them deserves attention over Al-Safa Transport in Dubai.

This lesson replaces gut instinct with a three-dimension scoring model. Three questions, scored independently: does the company match your ICP (**Fit**)? Is something happening RIGHT NOW that makes them likely to buy (**Timing**)? Have they shown interest in NexaFlow (**Engagement**)? The composite score tells you where to look. The dimension breakdown tells you what to do.

## Why Most Lead Scoring Fails

Before building the model, consider two scoring failures from NexaFlow's history.

**Failure 1: The "hot" lead that was a terrible fit.** Last quarter, a 15-person startup in Lahore scored 78 on the old single-dimension system. They had downloaded three whitepapers, attended a webinar, and replied to two emails. The old system weighted engagement heavily, so the startup looked like a top prospect. Farah's team spent three weeks on calls and demos. The startup could not afford NexaFlow's pricing, had no operations team to implement the product, and churned within two months of signing. High engagement, terrible fit. The old model could not distinguish interest from ability to buy.

**Failure 2: The perfect-fit company scored "cold."** Falcon Logistics in Abu Dhabi matched NexaFlow's ICP on every dimension -- 180 employees, 3PL operator, legacy WMS, expanding into Saudi Arabia. But they had never visited NexaFlow's website. No email opens, no downloads, no webinar attendance. The old system scored them 22 out of 100 and the team ignored them for six months. Meanwhile, Falcon had just hired a new COO who was actively evaluating workflow automation vendors. The timing signals were there in public data -- hiring announcements, LinkedIn posts about operational efficiency, a Companies House filing showing new investment. The old system could not see them because it only measured engagement.

Both failures have the same root cause: a single-dimension score hides the story. The three-dimension model separates what matters into independent questions so each gets a clear answer.

## The Three-Dimension Model

Score every prospect on three independent dimensions:

| Dimension      | Points | Question It Answers              |
| -------------- | ------ | -------------------------------- |
| **Fit**        | 0-40   | Does this company match our ICP? |
| **Timing**     | 0-40   | Is something happening NOW?      |
| **Engagement** | 0-20   | Do they know we exist?           |
| **Total**      | 0-100  |                                  |

The weighting is deliberate. Fit and Timing carry equal weight because both are deal-breakers. A company that matches your ICP perfectly but has no budget right now will not buy. A company with urgent need but the wrong tech stack will not implement. Engagement carries less weight because it is the dimension you can change most directly through outreach and marketing.

### Why Not a Single Score?

A prospect scoring 72/100 could be:

- **Fit 35 + Timing 35 + Engagement 2** -- great company, great timing, but they have never heard of you. Action: awareness campaign.
- **Fit 12 + Timing 38 + Engagement 22** -- wrong company that happens to be buying and follows your blog. Action: disqualify.
- **Fit 30 + Timing 10 + Engagement 32** -- decent fit, no urgency, very engaged with content. Action: nurture and monitor for timing signals.

Same composite number. Three completely different next steps. The dimensions are the decision tool, not the total.

### Classification Tiers

| Classification | Total Score | Dimension Requirements          | Recommended Action                       |
| -------------- | ----------- | ------------------------------- | ---------------------------------------- |
| **HOT**        | 75-100      | Fit >= 25 AND Timing >= 25      | Immediate outreach or awareness campaign |
| **WARM**       | 55-74       | Fit >= 20 OR Timing >= 20       | Nurture sequence with personalisation    |
| **CULTIVATE**  | 35-54       | At least one dimension above 15 | Quarterly check; add to newsletter       |
| **NOT YET**    | 0-34        | No dimension above 15           | Disqualify or defer to future quarter    |

Notice that classification depends on BOTH the total and the dimension balance. A prospect with Fit 38 and Timing 0 scores 38 but does not meet CULTIVATE dimension requirements because a zero-Timing prospect with no engagement is not worth monitoring.

## Score All 5 Prospects

Take the five demo prospects from Lesson 2 and score each one. Start with Meridian:

```
Score this lead against NexaFlow's ICP:

Meridian Logistics Ltd, Leeds, UK. 380 employees,
£50M revenue. Sarah Chen, VP Operations. Recently won
a major contract with a national retailer requiring
40% capacity expansion. Legacy WMS (SAP, 8 years old).
Hired a Head of Digital Transformation 3 months ago.
Visited NexaFlow website twice, downloaded the logistics
automation case study.
```

**Output:**

```
LEAD SCORE — Meridian Logistics
═══════════════════════════════

TOTAL: 87/100
Classification: HOT

DIMENSION BREAKDOWN:
  Fit:         36/40
    Industry match:      10/10  (3PL / logistics — exact ICP match)
    Company size:        10/10  (380 employees — within 50-400 range)
    Tech stack:           8/10  (legacy SAP WMS, 8 years old — strong
                                 positive signal; no automation platform)
    Geography:            8/10  (UK — secondary market in ICP)

  Timing:      37/40
    Contract trigger:    15/15  (major retailer contract requiring 40%
                                 capacity expansion — highest-priority
                                 trigger event)
    Leadership change:   12/15  (Head of Digital Transformation hired
                                 3 months ago — active evaluation window)
    Tech investment:     10/10  (legacy system replacement likely given
                                 capacity demands and new digital leader)

  Engagement:  14/20
    Website visits:       6/10  (2 visits — moderate awareness)
    Content downloads:    5/5   (logistics automation case study —
                                 directly relevant to their challenge)
    Event attendance:     0/5   (no events)
    Email interaction:    3/5   (opened 1 newsletter)

ACTION RECOMMENDATION: Immediate personalised outreach.
Strong Fit + strong Timing + moderate Engagement =
prospect matches ICP, has urgent operational need, and
has shown intentional interest (case study download is
a buying signal). Farah should contact Sarah Chen this
week referencing the capacity expansion challenge.
```

Meridian scores 87 — HOT. The dimension breakdown reveals why. Fit is strong across every sub-dimension: right industry, right size, legacy tech stack that needs replacing. Timing is nearly perfect: the contract win creates urgency, and a new digital transformation leader means someone is actively looking for solutions. Engagement is moderate but the case study download signals deliberate interest, not casual browsing.

Now score the remaining four prospects. Run each one through the same prompt, substituting the prospect details from your Lesson 2 research briefs.

### Ranking the 5 Prospects

After scoring all five, rank them:

```
Rank these 5 scored prospects by total score. Show
the dimension breakdown for each. Highlight the
top-scoring and bottom-scoring prospect.
```

**Sample Ranking:**

```
PROSPECT RANKING — NexaFlow Pipeline
═════════════════════════════════════

Rank  Prospect                    Fit   Timing  Engage  Total  Class
────  ──────────────────────────  ────  ──────  ──────  ─────  ──────
  1   Meridian Logistics (Leeds)   36    37      14       87   HOT
  2   Al-Safa Transport (Dubai)    32    30      10       72   WARM
  3   TransPak Logistics (KHI)     34    22       8       64   WARM
  4   Greenline Express (LHR)      28    18      12       58   WARM
  5   Coastal Freight (KHI)        18     8       6       32   NOT YET
```

The ranking produces a priority list. Meridian is the clear first call. Al-Safa needs a nurture sequence with Dubai-specific content. TransPak has high Fit but moderate Timing -- monitor for trigger events. Greenline is borderline WARM, pulled up by engagement (they read your content regularly). Coastal falls below the threshold on every dimension.

## When the Model Gets It Wrong

Look at Al-Safa Transport. The model scores them 72 -- WARM. The recommended action is a nurture sequence.

But Farah looks at Al-Safa's data and says: "That is our best prospect this quarter. I would call them today."

Why? Farah knows something the model underweights. Al-Safa just lost their warehouse management vendor -- the vendor shut down operations in the UAE with 30 days notice. Al-Safa has no choice but to find a replacement immediately. This is not a "nice to have" evaluation. This is an emergency procurement with a hard deadline.

The model gave Al-Safa a Timing score of 30/40. That is strong but not maximum. The vendor shutdown signal was captured under "tech investment" but scored the same as a routine system upgrade. The model treats "vendor shutting down" and "considering new software" as equivalent timing signals. They are not. A forced replacement is a higher-urgency signal than a planned evaluation.

### Adjusting the Weights

The scoring model underweights forced-replacement signals. To fix this:

```
Re-score Al-Safa Transport with this adjustment:
Timing signals should distinguish between voluntary
evaluation (planned system change) and forced replacement
(vendor shutdown, contract termination, system failure).
Forced replacement signals should score 15/15 on the
relevant timing sub-dimension.
```

**Adjusted Output:**

```
LEAD SCORE (ADJUSTED) — Al-Safa Transport
══════════════════════════════════════════

TOTAL: 82/100 (was 72)
Classification: HOT (was WARM)

  Timing (adjusted):  40/40 (was 30/40)
    Forced replacement:  15/15  (vendor shutdown — emergency
                                 procurement, hard deadline)
    Hiring signal:       15/15  (posted 2 ops roles in 2 weeks)
    Tech investment:     10/10  (must replace system within 30 days)

  Fit:                 32/40 (unchanged)
  Engagement:          10/20 (unchanged)
```

Al-Safa jumps from 72 to 82. The classification changes from WARM to HOT. Farah's instinct was right -- and now the model captures why.

The scoring model is only as good as the weights you configure. Every time you find a gap between the model's output and your best rep's judgment, you have found a calibration opportunity. Fix the weight, re-score, and the model gets smarter for every future prospect.

:::tip Miscalibration Is Feedback, Not Failure
When a score contradicts what your best rep knows, the agent has not failed. It scored against the rules you gave it. The rules were incomplete. Every miscalibration you diagnose and fix makes the scoring model more accurate for every future prospect.
:::

## Routing Rules

Scoring without routing is a ranking exercise. Routing turns scores into action by defining who gets which leads, what response time applies, and what the expected next step is.

| Classification | Owner                    | SLA                       | Action                                                   |
| -------------- | ------------------------ | ------------------------- | -------------------------------------------------------- |
| **HOT**        | Top rep (Farah or equiv) | Contact within 24h        | Personalised outreach referencing specific timing signal |
| **WARM**       | Any rep on rotation      | First touch within 3 days | Nurture sequence with ICP-specific content               |
| **CULTIVATE**  | Marketing automation     | Quarterly review          | Add to newsletter; invite to events; monitor for timing  |
| **NOT YET**    | No owner assigned        | Re-score quarterly        | Disqualify or defer; do not invest rep time              |

Three decisions make routing work:

1. **HOT prospects go to your best rep.** Not the rep who has capacity. Not the rep whose territory includes that geography. The rep most likely to close. Farah does not get HOT leads because she has free time -- she gets them because she converts at 340% of quota. Distributing HOT leads equally across the team sounds fair but costs revenue.

2. **WARM prospects get a defined sequence, not ad hoc follow-up.** "Nurture" is not a strategy. Nurture with what content? Over what timeline? With what exit conditions? Lesson 6 builds the full multi-touch sequence. For now, the routing rule establishes that WARM prospects enter a structured path, not a rep's personal follow-up style.

3. **NOT YET prospects get zero rep time.** This is the hardest rule to enforce. Reps want to "keep the relationship warm" with prospects that scored 28. That is a misallocation. The quarterly re-score catches any NOT YET prospect whose circumstances change. Until then, no outreach, no calls, no "just checking in" emails.

## What You Built

1. Three-dimension scoring model configured with Fit (0-40) + Timing (0-40) + Engagement (0-20)
2. 5 prospects scored and ranked by total with full dimension breakdowns
3. Scoring calibration validated against expert judgment (Al-Safa adjustment)
4. Routing rules defined for each score tier with owner, SLA, and action

## Flashcards Study Aid

Test your understanding of the key concepts from this lesson.

<Flashcards />

## Try With AI

### Prompt 1 (Reproduce)

```
Score all 5 demo prospects from NexaFlow's pipeline
and rank by total score. Show the full dimension
breakdown (Fit, Timing, Engagement) for the top-scoring
prospect. Classify each as HOT, WARM, CULTIVATE,
or NOT YET.
```

**What you are learning:** The scoring model turns qualitative judgment into structured analysis. By scoring the same prospects you researched in Lesson 2, you see how ICP quality directly affects score accuracy -- a strong ICP produces scores that match your intuition; a weak ICP produces scores that surprise you. Every surprise is a calibration opportunity.

### Prompt 2 (Adapt)

```
Take the lowest-scoring prospect from the ranking and
identify which dimension (Fit, Timing, or Engagement)
is dragging the score down. What would need to change
in the real world for this prospect to move up one tier?
Be specific — name the signal, the source, and the
expected score impact.
```

**What you are learning:** Dimension analysis turns a binary "not ready" verdict into a diagnostic. A low Fit score means this is the wrong company -- no action will fix it. A low Timing score means the right company at the wrong moment -- monitor for trigger events. A low Engagement score means they do not know you exist -- marketing can fix that. The dimension that drags the score determines the response.

### Prompt 3 (Apply)

```
Score a prospect from your own pipeline using the
three-dimension model (Fit 0-40, Timing 0-40,
Engagement 0-20). Before the agent scores, write down
your gut estimate for each dimension. After scoring,
compare. If the model and your gut disagree on any
dimension, identify which one is right and why.
```

**What you are learning:** The gap between your gut score and the model's score reveals either domain knowledge the model lacks (you are right, fix the weights) or data the model found that you missed (the model is right, update your understanding). Both outcomes improve your pipeline. The exercise builds the habit of scoring BEFORE checking the agent -- which prevents anchoring bias where you unconsciously accept whatever number the agent produces.
