---
slug: /Business-Domain-Agent-Workflows/product-management/competitive-intelligence
sidebar_position: 5
title: "Competitive Intelligence"
description: "Map InsightFlow's competitive landscape across direct, indirect, and adjacent competitors, then use /competitive-brief to generate a feature comparison matrix and positioning analysis — and evaluate whether the AI is honest about where competitors have the advantage."
keywords:
  [
    "competitive intelligence",
    "competitive analysis",
    "competitive brief",
    "feature comparison",
    "positioning analysis",
    "product strategy",
  ]
chapter: 36
lesson: 5
duration_minutes: 35

# HIDDEN SKILLS METADATA
skills:
  - name: "Map a competitive landscape across direct, indirect, adjacent, and substitute competitor tiers"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Information-Literacy"
    measurable_at_this_level: "Student places InsightFlow's competitors into four tiers with one-sentence rationale for each placement"

  - name: "Use /competitive-brief to generate a feature comparison matrix and positioning analysis, and evaluate honesty of AI output about competitor strengths"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Information-Literacy"
    measurable_at_this_level: "Student runs /competitive-brief, reviews the feature matrix for credibility (verifies InsightFlow is not always rated Strong), identifies at least one competitor strength that should be Strong or Adequate, and extracts 3 actionable strategic implications"

learning_objectives:
  - objective: "Classify competitors at four levels (direct, indirect, adjacent, substitute) and explain the strategic significance of each tier"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student places at least 4 competitors into the correct tier for InsightFlow's market and explains why each tier matters for product strategy"

  - objective: "Generate a competitive brief using /competitive-brief and evaluate the feature comparison matrix for credibility and balance"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Student runs the command and identifies whether the matrix rates InsightFlow accurately (not always winning) and whether strategic implications are actionable"

  - objective: "Extract three actionable strategic implications from a competitive brief that specify where InsightFlow should differentiate vs achieve parity"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Student produces three implications that each specify a capability area, a competitive stance (differentiate vs parity), and a product decision"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "Four-tier competitive landscape (direct, indirect, adjacent, substitute)"
    - "Feature comparison matrix with Simple rating scale (Strong/Adequate/Weak/Absent)"
    - "Positioning statement analysis (target customer → problem → category → benefit → differentiator)"
    - "Message architecture levels (category, differentiator, value prop, proof points)"
    - "Differentiate vs achieve parity strategic framing"
  assessment: "5 concepts at B1-B2 level across 35 minutes. The conceptual frameworks (landscape tiers, feature matrix, positioning analysis) are well-established PM tools — no new theory is being invented. The cognitive work is in evaluating the /competitive-brief output critically rather than accepting its first assessment."

differentiation:
  extension_for_advanced: "Run /competitive-brief a second time for InsightFlow's direct competitor in the automation space. Compare the two briefs: where do the strategic implications align? Where do they conflict? If they conflict, what does that tell you about InsightFlow's positioning — is it trying to compete in multiple spaces simultaneously, and is that strategically coherent?"
  remedial_for_struggling: "Focus on just the feature comparison matrix and skip the positioning analysis for now. Rate InsightFlow vs one competitor across three capability areas using the Simple scale (Strong, Adequate, Weak, Absent). Ask: is this rating honest? Would a prospect who has evaluated both products agree? If not, adjust. Honest ratings are the only useful ratings."

teaching_guide:
  key_points:
    - "Competitive analysis that always shows your product winning is not analysis — it is marketing. The most valuable competitive brief is one that honestly identifies where competitors have genuine advantages, because those gaps become your product roadmap inputs."
    - "The indirect competitors are often more strategically important than the direct ones. Excel is InsightFlow's most dangerous competitor — not because it is a better analytics platform, but because it is already installed, already trusted, and costs nothing extra."
    - "Positioning analysis reveals unclaimed positions as much as it reveals claimed ones. The question is not just 'what are competitors saying?' but 'what is nobody saying that buyers care about?'"
    - "Strategic implications need to be actionable. 'Improve our analytics features' is not an implication — it is a vague intention. 'Invest in automation parity with WorkflowIQ before Q3 because two of our three lost enterprise deals cited automation as the deciding factor' is an implication."
  misconceptions:
    - "A comprehensive competitive analysis covers every competitor. Correction: a 20-competitor analysis dilutes focus. Choose 3-5 that matter most for the specific product decision the analysis is meant to inform. The right competitors for a feature prioritisation decision may be different from the right competitors for a positioning decision."
    - "Job postings are not competitive intelligence. Correction: job postings are highly actionable competitive signal. A competitor hiring ML engineers signals an AI bet. A competitor hiring enterprise sales reps signals a market expansion. A competitor posting 10 new openings for a specific function signals a strategic pivot. Monitor them."
    - "/competitive-brief does the competitive analysis for you. Correction: the command structures the analysis and synthesises available information, but its output quality depends on the inputs you provide. It cannot know what your win/loss data shows, which enterprise prospects cited which competitor features, or what your CTO considers technically feasible. Those inputs are yours."
  discussion_prompts:
    - "Your /competitive-brief rates InsightFlow as 'Strong' in data visualisation and AutoDash as 'Adequate'. Your Head of Sales tells you that three prospects this quarter specifically praised AutoDash's visualisation during the evaluation process. How do you reconcile the brief's rating with the sales feedback? What do you do with the brief?"
    - "The strategic implications from /competitive-brief suggest InsightFlow should 'differentiate in workflow automation'. But your research synthesis from L04 showed that analysts primarily want their current manual process reduced, not replaced by a new automation workflow they have to learn. How do you integrate these two signals?"
  teaching_tips:
    - "The 'honesty check' on the feature matrix is the lesson's evaluative core. Teach students to ask: if a prospect who had evaluated both products reviewed this matrix, would they find it credible? An InsightFlow PM writing the brief may unconsciously rate InsightFlow higher than an honest evaluation warrants. The credibility test forces objectivity."
    - "The fictional competitors (AutoDash and WorkflowIQ) are designed to represent real competitive dynamics without requiring students to research actual companies. AutoDash represents analytics-focused competitors (strong core, weak automation); WorkflowIQ represents automation-focused competitors (strong automation, no analytics foundation). These archetypes are real, even if the names are not."
---

# Competitive Intelligence

Most PMs do competitive research the wrong way. They build a spreadsheet that lists every competitor feature, rate their own product Strong or Adequate in everything, and conclude that their product is well-positioned. Then they go to a sales call and discover that the prospect has already evaluated three alternatives and has very specific questions about why your automation capabilities are weaker than the competitor they saw in a G2 comparison.

The problem is not the competitive analysis — the problem is that the competitive analysis was written to feel good rather than to be useful. A brief that rates you Strong everywhere is reassuring but worthless. A brief that honestly rates you Adequate in three capability areas and identifies exactly where you are vulnerable is uncomfortable but actionable.

This lesson teaches you to run `/competitive-brief` (from the official `product-management` plugin) and — more importantly — to evaluate whether the output is honest enough to be useful. The analysis feeds directly into Lesson 7, where the competitive positioning context shapes InsightFlow's PRD for the workflow automation initiative.

## The Competitive Landscape

Before running analysis, you need to know who is in the landscape. The `/competitive-brief` skill defines four tiers of competitors:

### Four-Tier Competitive Landscape

| Tier           | Definition                                              | InsightFlow example                                  | Strategic significance                                                                |
| -------------- | ------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------- |
| **Direct**     | Same problem, same users, same approach                 | AutoDash (analytics-focused, similar target persona) | These are your comparison-set competitors — your prospects evaluate them side by side |
| **Indirect**   | Same problem, different approach                        | Excel + Sheets + manual workflows                    | Often the most dangerous: free, already installed, zero switching cost                |
| **Adjacent**   | Different problem today, but could expand               | WorkflowIQ (automation-focused, expanding analytics) | Threat vector: if they add analytics, they have your users already                    |
| **Substitute** | Entirely different approach to the same underlying need | Hiring a data analyst instead of using software      | Reveals what "good enough" looks like without any tool                                |

:::caution Excel Is Always Your Biggest Competitor
For B2B SaaS analytics tools, Excel (or Google Sheets) is almost always the most used alternative in your market. Prospects who do not buy your product are not mostly buying AutoDash — most of them are continuing to use spreadsheets. Any competitive analysis that does not treat spreadsheets as a serious alternative is missing the market reality.
:::

For InsightFlow's workflow automation expansion, the competitive set for this lesson is:

| Competitor                | Tier     | Reason                                                                                                                |
| ------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------- |
| **AutoDash**              | Direct   | Analytics-first platform; similar target persona (analysts at 100-500 person companies); currently weak in automation |
| **Excel / Google Sheets** | Indirect | The manual alternative most analysts currently use; free; already integrated into all their workflows                 |
| **WorkflowIQ**            | Adjacent | Automation-first platform; expanding into analytics; potential threat if they achieve analytics parity                |

## The /competitive-brief Command

`/competitive-brief` is from the official `product-management` plugin. It scopes the analysis, researches competitors (using web search if available), and generates a structured brief.

### What the Command Produces

1. **Competitor overview** — company summary, positioning, recent momentum
2. **Feature comparison matrix** — capability ratings using the Simple scale (Strong / Adequate / Weak / Absent)
3. **Positioning analysis** — how each competitor positions, using the positioning statement template
4. **Strengths and weaknesses** — honest assessment with evidence
5. **Opportunities and threats** — gaps in competitor offerings and competitive risks
6. **Strategic implications** — actionable recommendations tied to the analysis

### The Simple Rating Scale

The `/competitive-brief` skill recommends the Simple scale for most comparisons:

| Rating       | Meaning                                                          |
| ------------ | ---------------------------------------------------------------- |
| **Strong**   | Market-leading capability. Deep functionality, well-executed.    |
| **Adequate** | Functional capability. Gets the job done but not differentiated. |
| **Weak**     | Exists but limited. Significant gaps or poor execution.          |
| **Absent**   | Does not have this capability.                                   |

The scale is designed to be honest, not flattering. A feature rated Adequate is not a failure — it means the capability exists and serves the purpose. Strong means you are differentiated. Adequate means you are competitive. Weak means there is a gap. Absent means the competitor cannot address the need at all.

## Worked Example: InsightFlow vs AutoDash

Run `/competitive-brief`:

```
/competitive-brief AutoDash

Context: InsightFlow is a B2B SaaS analytics platform for data analysts
at 100-500 person companies. We are expanding into workflow automation
(our biggest Q3 bet). AutoDash is a direct competitor with a similar
analytics focus and similar target persona.

Focus: Feature comparison (analytics + automation capabilities),
positioning analysis, and strategic implications for InsightFlow's
workflow automation investment.
```

**Sample /competitive-brief output (Feature Comparison excerpt):**

```
COMPETITIVE BRIEF: InsightFlow vs AutoDash
════════════════════════════════════════════
Analysis date: 2026-03-18
Decision context: InsightFlow workflow automation investment
Analyst: [PM]

── COMPETITOR OVERVIEW ──────────────────────────────────
AutoDash
Founded: [Year] | Stage: Series B | Focus: B2B analytics
Positioning: "Dashboard analytics that your whole team can use"
Target: Similar to InsightFlow — analysts at SMB/mid-market companies
Recent momentum: Q1 launch of "AutoDash Reports" — scheduled exports;
                 140+ new G2 reviews in Q4; Series B fundraise

── FEATURE COMPARISON MATRIX ────────────────────────────

| Capability Area             | InsightFlow | AutoDash |
|-----------------------------|-------------|----------|
| Data connectivity           |             |          |
|  Native connectors (10+)    | Strong      | Strong   |
|  Custom API connections     | Adequate    | Weak     |
|  Real-time sync             | Adequate    | Adequate |
| Dashboard authoring         |             |          |
|  Drag-and-drop builder      | Strong      | Strong   |
|  SQL editor                 | Adequate    | Adequate |
|  Template library           | Weak        | Strong   |
| Reporting & distribution    |             |          |
|  Scheduled email reports    | Weak        | Strong   |
|  Embeddable dashboards      | Absent      | Adequate |
|  PDF export                 | Adequate    | Strong   |
| Workflow automation         |             |          |
|  Trigger-based automations  | Absent      | Absent   |
|  Alert/notification rules   | Absent      | Weak     |
|  Workflow builder (no-code) | Absent      | Absent   |
| Enterprise & security       |             |          |
|  SSO/SAML                   | Adequate    | Strong   |
|  Audit logs                 | Weak        | Adequate |
|  Role-based access          | Adequate    | Strong   |

── POSITIONING ANALYSIS ─────────────────────────────────
AutoDash: "For analytics managers at growing companies who need
company-wide reporting without technical setup, AutoDash is a
business intelligence platform that provides scheduled reports,
embeddable dashboards, and team analytics in one place. Unlike
alternatives, AutoDash works without data team involvement from
day one."

InsightFlow: "For data analysts at 100-500 person companies who
are blocked by SQL requirements, InsightFlow is an analytics
platform that lets analysts build dashboards and reports without
writing SQL. Unlike alternatives, InsightFlow eliminates the data
team bottleneck for analysts who have the business context but
not the technical access."

Positioning gap: InsightFlow owns the analyst-empowerment position.
AutoDash owns the manager-self-service position. These are adjacent
but different buyers. InsightFlow has not claimed the automation
space — AutoDash has a weak foothold but no one is claiming it
credibly yet.

── STRATEGIC IMPLICATIONS ───────────────────────────────
1. Template library gap: AutoDash is Strong, InsightFlow is Weak.
   This is a credibility gap in the sales cycle — prospects who
   want fast time-to-first-dashboard will favour AutoDash.
   Recommendation: Achieve parity before Q3. Template library is
   not a differentiator — it is table-stakes.

2. Reporting distribution gap: AutoDash is Strong in scheduled
   reports; InsightFlow is Weak. The L04 research shows this is
   a high-frequency pain point for analysts (the "weekly report
   copy-paste" workflow). Building basic scheduled delivery would
   close a gap that directly affects retention.
   Recommendation: Include scheduled report delivery in the
   automation MVP scope.

3. Automation space is unclaimed: Both InsightFlow and AutoDash
   are Absent for workflow automation. This is InsightFlow's
   strategic window. If InsightFlow ships workflow automation
   before AutoDash iterates on their alert/notification weak entry,
   InsightFlow can own the automation positioning in this segment.
   Recommendation: Move fast on the automation MVP. This window
   will not stay open if AutoDash invests here.
════════════════════════════════════════════
```

### Evaluating the Output

**Honesty check**: Does the matrix rate InsightFlow honestly? Look at Template Library (Weak), Scheduled Email Reports (Weak), Embeddable Dashboards (Absent), SSO/SAML (Adequate vs AutoDash's Strong), Audit Logs (Weak vs Adequate). This brief rates InsightFlow accurately — including its genuine weaknesses. This is a credible brief.

**If InsightFlow had been rated Strong in every category**: The brief would be useless. No product is Strong everywhere. A brief that rates you Strong everywhere reflects analyst bias, not reality.

**Strategic implications quality check**: Each implication names a capability area, a competitive stance (parity vs differentiate), and a specific product decision. Implication 3 ("Move fast on the automation MVP") is directional. A stronger version would add: "based on win/loss data" or "because AutoDash's alert capability is weak, not absent — they can iterate fast."

## Exercise: Competitive Brief for InsightFlow's Market

**Plugin:** Official product-management
**Command:** `/competitive-brief`
**Time:** 20 minutes

**Step 1 — Define InsightFlow's competitive set**

For the workflow automation expansion, you will analyze three competitors:

- **Direct**: AutoDash — analytics-focused, similar target persona, no automation
- **Indirect**: Excel / Google Sheets — the manual workflow most analysts currently use
- **Adjacent**: WorkflowIQ — automation-first platform, expanding analytics capabilities

**Step 2 — Run /competitive-brief for the reporting space**

```
/competitive-brief "InsightFlow vs AutoDash — reporting and distribution"

Context: InsightFlow is expanding from analytics into workflow automation.
AutoDash is a direct competitor with similar target persona. Focus on
the reporting and distribution capability area specifically — scheduled
reports, embeddable dashboards, and export capabilities. Decision
context: scoping InsightFlow's automation MVP.
```

**Step 3 — Honesty check on the output**

Review the feature comparison matrix. Find at least one area where:

- InsightFlow should NOT be rated Strong (be honest with yourself)
- AutoDash should be rated at least Adequate or Strong (give the competitor credit)

If the matrix rates InsightFlow Strong everywhere and AutoDash Adequate or Weak everywhere, the brief is not credible. Prompt the agent:

```
Review the feature comparison matrix. A credible competitive analysis
should identify areas where AutoDash is ahead of InsightFlow. Based
on the evidence, update the matrix to reflect honest ratings — even
if that means rating InsightFlow Weak or Absent in some areas.
```

**Step 4 — Run a second brief for the workflow automation space**

```
/competitive-brief "InsightFlow automation expansion vs WorkflowIQ"

Context: InsightFlow is expanding into workflow automation (trigger-based
automations, alert rules, no-code workflow builder). WorkflowIQ is an
automation-first platform that is beginning to add analytics. Focus on:
who owns the automation space today, what InsightFlow would need to
achieve parity vs differentiation, and where WorkflowIQ is likely to
compete if InsightFlow expands.
```

**Step 5 — Synthesise: differentiate vs achieve parity**

Based on both briefs, produce a two-column summary:

| Where InsightFlow should DIFFERENTIATE                                        | Where InsightFlow should ACHIEVE PARITY                                    |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| (Areas where no competitor owns the space and InsightFlow can invest to lead) | (Areas where a competitor is ahead and InsightFlow needs to close the gap) |

Write three strategic implications in this format:

> "In [capability area], InsightFlow should [differentiate/achieve parity] because [specific competitive evidence from the briefs]. The product implication is [specific decision]."

:::note Keep This File
The competitive brief and your differentiate/parity framework feed directly into Lesson 7, where you will use `/prd` to build the Product Requirements Document for InsightFlow's workflow automation initiative. The PRD's competitive context section will reference this analysis.
:::

## What You Built

You mapped InsightFlow's competitive landscape across four tiers and generated two `/competitive-brief` outputs — one for the reporting space (AutoDash) and one for the automation space (WorkflowIQ). You practiced the critical evaluation skill that makes competitive analysis actionable: checking the feature matrix for honesty, ensuring competitor strengths are acknowledged, and extracting strategic implications that specify what to build, what to defer, and where InsightFlow should lead.

The differentiate/parity framework connects forward to the PRD: when you write the workflow automation initiative document, competitive positioning determines which features are table-stakes (parity required) and which are strategic bets (differentiation possible).

## Try With AI

Use these prompts in Cowork or your preferred AI assistant.

**Prompt 1 — Reproduce** (apply what you just learned):

```
I am a PM at a B2B project management tool. My direct competitor
is Linear (issue tracking, developer-focused). My indirect competitor
is GitHub Issues (free, already installed for engineering teams).

Using the Simple rating scale (Strong, Adequate, Weak, Absent),
build a feature comparison matrix for these three capability areas:
1. Sprint and iteration planning
2. Roadmap visibility
3. Analytics and reporting

Rate all three products honestly. Then write two strategic implications:
one area where my product should differentiate, and one where it should
achieve parity with Linear.
```

**What you're learning:** Practising the feature comparison matrix in a different domain reinforces the methodology. The Simple scale forces honest assessment — there is no Excellent or Poor, only four clear states that prevent rating inflation.

**Prompt 2 — Adapt** (change the context):

```
A competitive brief rates a product Strong in every capability area
compared to its competitors. The PM who ran the brief presents it to
the CPO and says: "We are well-positioned across the board."

The CPO rejects the analysis. What is the CPO's likely objection?
What are the consequences if the PM proceeds with product decisions
based on this brief?

Then: rewrite the brief summary to demonstrate what a credible
competitive assessment looks like — including at least two areas
where the competitor is rated Adequate or above.
```

**What you're learning:** The CPO rejection scenario makes explicit why honest competitive analysis matters strategically. A brief that always shows you winning leads to under-investment in genuine gaps — gaps that competitors expose during sales cycles.

**Prompt 3 — Apply** (connect to your domain):

```
For the product you work on (or have recently worked on):

1. List your competitive set at all four tiers (direct, indirect,
   adjacent, substitute).

2. Identify the three capability areas where competitors most
   frequently beat you in sales cycles (or where you suspect they do).

3. For each area: is this a "differentiate" opportunity or a "parity"
   requirement? How do you tell the difference?

What would change about your roadmap if you treated the "parity"
items as required and the "differentiate" items as optional?
```

**What you're learning:** Applying the differentiate/parity framework to your own product reveals which roadmap items are threshold requirements (parity) and which are bets (differentiation). Most PMs mix these categories, which leads to prioritisation confusion.

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 6: Feature Specifications →](./06-feature-specifications.md)
