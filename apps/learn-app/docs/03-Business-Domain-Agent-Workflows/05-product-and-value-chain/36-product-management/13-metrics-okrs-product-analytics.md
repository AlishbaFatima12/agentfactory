---
slug: /Business-Domain-Agent-Workflows/product-management/metrics-okrs-product-analytics
sidebar_position: 13
title: "Metrics, OKRs & Product Analytics"
description: "Learn to build a product metrics hierarchy from North Star down through L1 health indicators, write well-formed OKRs, and run a monthly metrics review using the /metrics-review command from the official product-management plugin"
keywords:
  [
    "product management",
    "product metrics",
    "OKRs",
    "North Star metric",
    "metrics hierarchy",
    "product analytics",
    "metrics review",
  ]
chapter: 36
lesson: 13
duration_minutes: 45

# HIDDEN SKILLS METADATA
skills:
  - name: "Define a product metrics hierarchy: North Star metric, L1 health indicators, and L2 diagnostic metrics"
    proficiency_level: "B2"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Information-Literacy"
    measurable_at_this_level: "Student can define InsightFlow's North Star metric, explain why it is the right one, and identify at least 5 L1 metrics that together paint a complete picture of product health"

  - name: "Write well-formed OKRs with measurable Key Results using /metrics-review"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can write an Objective with 2-4 Key Results that are measurable, outcome-based, and appropriately ambitious: and can distinguish them from output-based KRs that measure team activity rather than user behavior"

learning_objectives:
  - objective: "Define InsightFlow's North Star metric and explain why it is preferable to alternative candidates like MAU or revenue"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Student names InsightFlow's North Star ('weekly active teams creating or editing dashboards'), explains that it is value-aligned (users get value when they create dashboards), leading (predicts retention), and actionable (product team can influence it)"

  - objective: "Run a monthly metrics review for InsightFlow using /metrics-review with provided sample data and identify the top area of concern and one recommended action"
    proficiency_level: "B2"
    bloom_level: "Apply"
    assessment_method: "Student invokes /metrics-review with InsightFlow's post-Sprint 1 illustrative data, receives a scorecard with trend analysis, and identifies the metric most worth investigating based on the review"

  - objective: "Write OKRs for InsightFlow's next quarter that include measurable Key Results tied to user behaviour outcomes, not team output"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Student produces at least one Objective with 2-4 KRs. Each KR names a specific metric, a baseline, and a target. None of the KRs measure team outputs (features shipped, tickets closed)"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "North Star metric: what it is, why it matters, how to choose one"
    - "L1 health indicators: the six areas of the user lifecycle (acquisition, activation, engagement, retention, monetisation, satisfaction)"
    - "L2 diagnostic metrics: drill-down metrics for investigating L1 changes"
    - "OKR structure: Objectives (aspirational, qualitative) + Key Results (measurable, outcome-based)"
    - "Dashboard design anti-patterns: vanity metrics, stale data, one-dashboard-for-all"
  assessment: "5 concepts at B2 level. Students arrive having shipped Sprint 1 and communicated about it. Now they look at whether the work moved the metrics. The metrics hierarchy is dense but structurally coherent: North Star → L1 → L2 follows the same logic as OKR structure. Tie them together early. The anti-patterns section is high value because it names patterns students will recognise from their own experience."

differentiation:
  extension_for_advanced: "Run /metrics-review twice: once as a weekly check (15-minute format) and once as a quarterly business review (strategic format). Compare what each review includes. What appears in the quarterly review that would not be in a weekly check? Then design a dashboard layout for InsightFlow that would support both cadences: one screen for weekly health monitoring, a deeper view for quarterly strategy."
  remedial_for_struggling: "Start with just the North Star metric. Ask yourself: what is the single thing that happens when a user gets value from InsightFlow? (An analyst builds a dashboard they use.) Now ask: how do you measure whether that is happening consistently? (Weekly active teams creating or editing dashboards.) Once you have the North Star, the L1 metrics follow naturally: they are the levers that drive it."

teaching_guide:
  key_points:
    - "The North Star metric is the single metric that best captures whether users are getting value from the product: not the metric that is easiest to move, not the metric leadership likes, but the one that genuinely reflects value delivery"
    - "OKRs fail when Key Results measure team output (features shipped, tickets closed) instead of user outcomes (retention rate, activation rate). The test is simple: could you hit this KR without any user ever benefiting?"
    - "Dashboard anti-patterns are as dangerous as bad metrics: vanity metrics always go up and create false confidence, one-dashboard-for-all means no dashboard serves anyone well"
    - "Every metric in a review should come with a comparison: a raw number without context (previous period, target, benchmark) is not information"
  misconceptions:
    - "MAU (Monthly Active Users) is a good North Star metric. Correction: MAU is a vanity metric for most products because it always grows with any marketing spend. A better North Star captures value delivery: the specific action that predicts whether users will pay and retain."
    - "OKR Key Results should be about things the team can control (shipping features). Correction: Key Results should measure user and business outcomes, which the team influences but does not control. That is the point: it forces the team to connect their work to results, not just activity."
  discussion_prompts:
    - "InsightFlow's monthly active users grew 15% last month. Is this good news? What would you need to know before deciding whether to celebrate or investigate? What is the risk of treating MAU growth as a success signal without deeper context?"
    - "Your CEO wants to add 'team satisfaction score' to the InsightFlow product dashboard. You know team satisfaction is important, but it is not a product metric: it is an HR metric. How do you push back without dismissing the CEO's instinct? What is the right home for that metric?"
  teaching_tips:
    - "The North Star metric definition exercise (what happens when a user gets value?) is more productive as a thinking exercise before running the command. Have students write their North Star candidate and rationale before seeing the worked example: then compare."
    - "The OKR exercise is the hardest part of the lesson. The most common failure is KRs that measure output ('ship 3 new features') rather than outcome ('increase activation rate from 35% to 50%'). The test: 'Could you hit this KR without users ever benefiting?' If yes, it is an output KR."
---

# Metrics, OKRs & Product Analytics

InsightFlow's Workflow Builder Sprint 1 shipped. The trigger configuration UI is in design testing. Stakeholders have been updated. Now comes the question that distinguishes a PM who is busy from a PM who is effective: did any of this actually move the metrics that matter?

You have data from the past month. New signups are up. But the North Star metric: weekly active teams creating or editing dashboards: is flat. Activation rate (the percentage of new signups who reach their first dashboard) dropped slightly. Enterprise retention is strong, but free tier churn is above the benchmark for Series B companies in this space. There is something worth investigating here, and a monthly metrics review is the structure for finding it.

The `/metrics-review` command from the official **product-management** plugin turns raw metric data into a structured analysis: a scorecard with comparisons, trend analysis, bright spots, areas of concern, and recommended actions. But the command's value is proportional to how well you have defined your metrics hierarchy: because a review against the wrong metrics is not just useless, it is actively misleading.

This lesson builds the hierarchy first. Then runs the review.

## The Product Metrics Hierarchy

A well-designed product metrics system has three levels:

```
North Star Metric (1)
        │
        ▼
L1 Health Indicators (5-7)
  Acquisition | Activation | Engagement | Retention | Monetisation | Satisfaction
        │
        ▼
L2 Diagnostic Metrics (as many as needed)
  Feature-level usage | Funnel conversion steps | Segment breakdowns
```

### North Star Metric

The single metric that best captures the core value your product delivers. It should be:

| Criterion          | Description                              | InsightFlow Test                                           |
| ------------------ | ---------------------------------------- | ---------------------------------------------------------- |
| **Value-aligned**  | Moves when users get more value          | Yes: users get value when they create/edit dashboards     |
| **Leading**        | Predicts long-term retention and revenue | Yes: dashboard creation predicts ongoing engagement       |
| **Actionable**     | The product team can influence it        | Yes: onboarding, templates, and performance all affect it |
| **Understandable** | Everyone knows what it means and why     | Yes: "active teams building dashboards" is clear          |

**InsightFlow's North Star:** Weekly active teams creating or editing dashboards

**Why not MAU?** Monthly Active Users always grows with marketing spend. It does not tell you whether users are getting value: only that they logged in. A team could grow MAU while the core product experience deteriorates. The North Star should move when users genuinely benefit from the product.

**Why not revenue?** Revenue is a lagging indicator: it measures what happened 3-6 months ago in SaaS, not what is happening now. By the time revenue trends appear, the underlying product health signals have been visible for weeks.

### L1 Health Indicators

The five to seven metrics that together paint a complete picture of product health. They map to the user lifecycle:

| L1 Indicator     | What It Asks                              | InsightFlow Metric                                          |
| ---------------- | ----------------------------------------- | ----------------------------------------------------------- |
| **Acquisition**  | Are new users finding the product?        | New trial signups per week                                  |
| **Activation**   | Are new users reaching the value moment?  | % of signups who create their first dashboard within 7 days |
| **Engagement**   | Are active users getting value regularly? | North Star; WAT creating/editing dashboards                |
| **Retention**    | Are users coming back?                    | D30 retention: % of signups still active at 30 days         |
| **Monetisation** | Is value translating to revenue?          | Free-to-Pro conversion rate; MRR growth                     |
| **Satisfaction** | How do users feel about the product?      | NPS; export/dashboard-specific CSAT                         |

:::tip The Activation Metric Is the Most Valuable L1
Activation rate: the percentage of new signups who reach the first meaningful value moment: is typically the highest-leverage metric a PM can improve. Low activation means users are signing up, trying the product, and leaving before they get value. Fixing activation has a compound effect: it improves retention, LTV, and NPS simultaneously.
:::

### L2 Diagnostic Metrics

L2 metrics answer "why is an L1 metric moving?" They are not for the weekly dashboard: they are for investigation.

If activation rate drops (L1), L2 diagnostics might include:

- Funnel conversion at each onboarding step
- Time-to-first-dashboard for this week's cohort vs. prior cohorts
- Feature adoption: are new users finding the template gallery?
- Device and browser breakdown (is there a regression on mobile?)

L2 metrics are selected based on the question. You should not have a standing L2 dashboard with 50 metrics. You should have the analytical tools to investigate when an L1 signal changes.

## OKRs: Writing Key Results That Actually Measure Outcomes

OKRs (Objectives and Key Results) are the goal-setting system that connects your product priorities to measurable outcomes. They fail in one consistent way: teams write Key Results that measure what they ship, not what users do.

| OKR Component  | Definition                                                            | Test                                                          |
| -------------- | --------------------------------------------------------------------- | ------------------------------------------------------------- |
| **Objective**  | Qualitative, aspirational. What does success feel like?               | Is it inspiring? Does it capture a direction?                 |
| **Key Result** | Quantitative, measurable. How do you know you achieved the Objective? | Is it outcome-based? Can users benefit without this changing? |

**The output KR trap:**

| Output KR (Wrong)                 | Outcome KR (Right)                                      |
| --------------------------------- | ------------------------------------------------------- |
| "Ship 3 new features"             | "Increase activation rate from 35% to 50%"              |
| "Complete 10 customer interviews" | "Reduce D30 churn from 18% to 12%"                      |
| "Rebuild the onboarding flow"     | "Improve time-to-first-dashboard from 4 days to 2 days" |
| "Launch Workflow Builder beta"    | "50 beta users complete their first automated workflow" |

The test for an output KR: could your team hit this KR without a single user benefiting? If yes, it is the wrong thing to measure.

**Well-formed OKR example for InsightFlow Q2:**

```
Objective: Make InsightFlow the default choice for data analysts
who need dashboards without SQL

Key Results:
KR1: Increase North Star (WAT creating/editing dashboards) from
     520 to 750 teams per week
KR2: Improve activation rate (% of signups who create first
     dashboard within 7 days) from 35% to 50%
KR3: Reduce free-tier D30 churn from 18% to 12%
KR4: Achieve NPS ≥ 45 (up from current 38)
```

### OKR Quality Rules

- 70% completion is the target for stretch OKRs: if you are confident you will hit 100%, they are not ambitious enough
- 2-3 Objectives maximum per quarter: more than that and nothing is truly prioritised
- Key Results should be uncomfortable: they should require genuine product improvement, not just shipping
- Review OKRs at mid-quarter: if a KR is clearly off track, adjust effort allocation or flag it as a risk

## The /metrics-review Command

The `/metrics-review` command generates a structured product metrics review: summary, scorecard, trend analysis, bright spots, areas of concern, and recommended actions.

**What it needs:**

- Time period (weekly, monthly, quarterly)
- The metrics and their current values
- Comparison data (previous period, targets)
- Context on recent events (launches, incidents, campaigns)

**What it produces:**

- Summary (2-3 sentences: overall health and key callout)
- Metric scorecard (table with current/previous/change/target/status)
- Trend analysis per significant metric
- Bright spots and areas of concern
- Recommended actions (specific, not vague)

## Worked Example: InsightFlow Monthly Metrics Review

Here is a monthly `/metrics-review` for InsightFlow using illustrative post-Sprint 1 data:

```
/metrics-review monthly

Period: February 2026 vs January 2026
Product: InsightFlow (B2B SaaS analytics, Series B)

North Star:
- WAT creating/editing dashboards: 521 teams (Jan: 498) +4.6%
- Target: 550 by end of Q1. Status: At risk (-5% vs target)

L1 Metrics:
Acquisition:
- New trial signups: 340 (Jan: 310) +9.7%
- Signup-to-activation: 34% (Jan: 37%) -3pp ⚠️

Engagement:
- WAU total: 2,104 (Jan: 1,980) +6.3%
- DAU/MAU stickiness ratio: 0.41 (Jan: 0.39)

Retention:
- D30 retention: 61% (Jan: 64%) -3pp ⚠️
- Enterprise account retention: 94% (stable, good)
- Free tier D30 churn: 21% (Jan: 18%) ⚠️

Monetisation:
- MRR: $280K (Jan: $265K) +5.7%
- Free-to-Pro conversion: 8.2% (Jan: 8.8%) -0.6pp

Satisfaction:
- NPS: 38 (Jan: 39) flat

Context:
- Workflow Builder Sprint 1 shipped Feb 14 — trigger config UI
  now in design testing, no public availability yet
- Self-serve onboarding redesign launched Jan 31 (partially explains
  the Feb activation drop — new flow may have friction)
- No major incidents
```

**Sample output from `/metrics-review`:**

```
MONTHLY METRICS REVIEW — February 2026
InsightFlow | Period: Feb vs Jan 2026

SUMMARY
Overall product health: mixed. MRR and total active users growing
well. Two concerning signals require attention: activation rate
dropped 3pp (likely related to the onboarding redesign) and free-tier
D30 churn increased 3pp. The North Star is growing but behind target.

METRIC SCORECARD
| Metric                  | Feb    | Jan    | Change  | Target  | Status      |
|-------------------------|--------|--------|---------|---------|-------------|
| WAT (North Star)        | 521    | 498    | +4.6%   | 550     | ⚠️ At risk  |
| New signups             | 340    | 310    | +9.7%   | 320     | ✅ On track |
| Activation rate         | 34%    | 37%    | -3pp    | 40%     | ❌ Miss     |
| WAU                     | 2,104  | 1,980  | +6.3%   | 2,000   | ✅ On track |
| DAU/MAU stickiness      | 0.41   | 0.39   | +0.02   | 0.42    | ⚠️ Close   |
| D30 retention           | 61%    | 64%    | -3pp    | 65%     | ❌ Miss     |
| Free-tier churn (D30)   | 21%    | 18%    | +3pp    | 18%     | ❌ Miss     |
| Enterprise retention    | 94%    | 94%    | flat    | 92%+    | ✅ On track |
| MRR                     | $280K  | $265K  | +5.7%   | $270K   | ✅ On track |
| Free-to-Pro conversion  | 8.2%   | 8.8%   | -0.6pp  | 9.0%    | ⚠️ At risk |
| NPS                     | 38     | 39     | -1      | 45 (Q2) | ⚠️ Monitor |

AREAS OF CONCERN

1. Activation rate: 34% vs 37% prior month (-3pp)
   Likely cause: The Jan 31 onboarding redesign may have introduced
   friction. New users are signing up at a higher rate but activating
   at a lower rate — suggesting the top-of-funnel is working but the
   activation flow is not.
   Action: Pull L2 funnel data — where in the new onboarding flow
   are users dropping? Funnel analysis this week.

2. Free-tier D30 churn: 21% vs 18% (+3pp)
   Correlates with the activation drop — users who do not activate
   churn faster. If activation improves, churn should follow.
   Action: Cohort analysis: do Feb signups churn at the same rate
   at D7, D14, D30 as Jan signups? Confirm the correlation.

BRIGHT SPOTS
- Enterprise retention at 94% — strong. Consistent with SOC 2 work.
- MRR growth +5.7% — above target.
- Signup volume growing despite activation headwind — top of funnel healthy.

RECOMMENDED ACTIONS
1. [This week] Pull L2 funnel data for new onboarding flow — identify
   the specific step where Feb cohort drops below Jan cohort.
2. [This week] Cohort comparison: Jan signups vs Feb signups at D7/D14
   — confirm churn signal is real, not seasonal noise.
3. [This sprint] If funnel data confirms onboarding friction — scope
   a fix as Sprint 2 P1 item. Do not wait for more churn evidence.
4. [Ongoing] North Star is 4.6% short of Q1 target. Review whether
   the Workflow Builder will drive WAT growth when it ships, or
   whether a faster initiative is needed.
```

### Evaluating the Output

Before acting on this review, check these quality criteria from the `/metrics-review` skill:

**Does every metric have a comparison?** A raw number without context is not information. The scorecard shows current, previous, change, target, and status for every metric. If any metric shows only a current value, prompt: "Add prior period and target to [metric]."

**Are anomalies explained?** The activation drop and churn increase are flagged with a likely cause (onboarding redesign). The agent attributes them as likely correlated: note the epistemic humility here. Correlation is not causation. The review recommends investigation, not a conclusion.

**Do recommended actions name a specific next step?** "Investigate further" is not a recommended action. "Pull L2 funnel data for new onboarding flow: identify the specific drop-off step" is.

:::note Keep This File
The metrics review you run in this exercise feeds directly into Lesson 14, where you will run a retrospective on Sprint 1 and evaluate whether the metrics you tracked were the right ones to measure.
:::

## Try With AI

Use these prompts in Cowork or your preferred AI assistant.

**Prompt 1; Reproduce** (apply what you just learned):

```
Run a monthly metrics review for InsightFlow using this data:

North Star (WAT creating/editing dashboards): 521 (prior: 498, target: 550)
Activation rate: 34% (prior: 37%, target: 40%)
Free-to-Pro conversion: 8.2% (prior: 8.8%, target: 9.0%)
D30 retention: 61% (prior: 64%, target: 65%)
MRR: $280K (prior: $265K, target: $270K)
NPS: 38 (prior: 39, target Q2: 45)

Context: New onboarding flow launched Jan 31 — may explain activation
drop. No major incidents. Workflow Builder Sprint 1 shipped Feb 14
but no public availability yet.

Produce: summary (3 sentences), metric scorecard, 2 areas of concern
with likely causes, 3 recommended actions.
```

**What you're learning:** Running the full /metrics-review workflow with structured data. The key skill is evaluating whether the agent's "likely causes" are well-reasoned or speculative: and prompting for more rigour when needed.

**Prompt 2; Adapt** (change the context):

```
Write OKRs for InsightFlow Q2 based on the February metrics review.

The February review identified these gaps:
- Activation rate 34% vs 40% target (onboarding friction)
- Free-tier D30 churn 21% vs 18% target
- North Star growing slowly vs Q1 target

Write one Objective and 3-4 Key Results for Q2 that address these gaps.

Rules:
- Each KR must be measurable with a specific metric, baseline, and target
- No KR may measure team output (features shipped, tickets completed)
- 70% completion should feel ambitious but achievable

Then evaluate your own KRs: are any of them output-based rather
than outcome-based? If so, rewrite them.
```

**What you're learning:** The OKR self-evaluation exercise: writing KRs and then testing them against the output-vs-outcome rule. This is the skill that separates OKRs that drive behaviour from OKRs that just look good in a planning doc.

**Prompt 3; Apply** (connect to your domain):

```
Define your product's metrics hierarchy:

1. North Star: What single action, when a user takes it, means they
   are getting real value from your product? Write it as a measurable
   metric (e.g., "weekly active teams creating or editing dashboards").
   Explain why you chose this metric over alternatives like MAU or revenue.

2. L1 Health Indicators: List 5-6 metrics that together cover:
   Acquisition | Activation | Engagement | Retention | Monetisation | Satisfaction
   For each, state: the metric name, current value (or "unknown"), and target.

3. Dashboard anti-patterns: Look at your current product dashboard.
   Are any metrics vanity metrics (always go up regardless of product quality)?
   Is any metric showing a raw number without a comparison? Name and fix it.
```

**What you're learning:** Building your own metrics hierarchy. The North Star definition forces clarity on what "value delivered" means in your product: a question many PMs have never explicitly answered.

## Exercise: InsightFlow Metrics Review + OKRs

**Plugin:** Official product-management
**Command:** `/metrics-review`
**Time:** 30 minutes

**Step 1; Define InsightFlow's North Star and L1 metrics**

Before running /metrics-review, write down:

- InsightFlow's North Star metric (from the spec above: WAT creating/editing dashboards)
- Why this is better than MAU or revenue
- The 5 L1 metrics you will track in the review

This step ensures you are reviewing the right things, not just whatever data is available.

**Step 2; Run /metrics-review with sample data**

```
/metrics-review monthly

Period: February 2026 (4 weeks post-sprint 1 start)

North Star — WAT (weekly active teams creating/editing dashboards):
  Current: 521 | Prior month: 498 | Target: 550

Activation — % signups creating first dashboard within 7 days:
  Current: 34% | Prior: 37% | Target: 40%

Retention — D30 retention rate:
  Current: 61% | Prior: 64% | Target: 65%

Monetisation — Free-to-Pro conversion:
  Current: 8.2% | Prior: 8.8% | Target: 9.0%

Acquisition — New trial signups:
  Current: 340 | Prior: 310 | Target: 320

Satisfaction — NPS:
  Current: 38 | Prior: 39 | Target Q2: 45

Context:
- New onboarding flow launched Jan 31 — first month of data
- Workflow Builder Sprint 1 shipped Feb 14, design testing only
- No major incidents or marketing campaigns
```

**Step 3; Evaluate the output**

Check these criteria:

- Does every metric in the scorecard show current, prior, change, target, and status? If not, prompt for the missing comparisons.
- For the activation drop: does the agent propose a likely cause? Is that cause reasonable given the context (new onboarding flow)? Or is it speculative?
- Are the recommended actions specific? "Investigate activation further" is too vague. "Pull funnel drop-off data for the new onboarding flow by step" is specific.

**Step 4; Write OKRs for next quarter**

Based on the metrics review, write one Objective and 3-4 Key Results for InsightFlow Q2:

```
Draft InsightFlow Q2 OKRs based on this metrics review:

The gaps are:
- Activation at 34% vs 40% target
- Free-tier churn at 21% vs 18% target
- North Star growing slower than Q1 target

Write one Objective (aspirational, qualitative) and 3-4 Key Results
(measurable, outcome-based, ambitious but achievable at 70%
confidence). Each KR must name a specific metric, current baseline,
and Q2 target.
```

**Step 5; Evaluate your OKRs for the output trap**

For each Key Result, ask: "Could the team hit this KR without a single user benefiting?" If yes: if the KR could be hit by shipping a feature that no one uses: rewrite it to measure user behaviour instead.

Save the OKR document. It becomes the strategic backdrop for the retrospective in Lesson 14.

## What You Built

You built InsightFlow's product metrics hierarchy; North Star, five L1 health indicators, and an understanding of when to use L2 diagnostic metrics. You ran a monthly metrics review against illustrative post-Sprint 1 data and produced a scorecard with trend analysis, areas of concern, and three specific recommended actions.

You also wrote Q2 OKRs using the output-versus-outcome discipline, ensuring your Key Results measure user behaviour rather than team activity.

The metrics review feeds directly into Lesson 14, where you will retrospect on Sprint 1 and evaluate whether the success metrics you tracked were the right ones: and whether the team built what you intended.

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 14: Continuous Intelligence; Agents & Retrospectives →](./14-continuous-intelligence-agents-retrospectives.md)
