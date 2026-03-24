---
slug: /Business-Domain-Agent-Workflows/supply-chain-procurement/vendor-classification-kraljic
sidebar_position: 3
title: "Vendor Classification; The Kraljic Matrix"
description: "Classify every vendor into Strategic, Tactical, Commodity, or Bottleneck tiers using the Kraljic framework: the foundation that determines assessment depth, review frequency, and risk thresholds for every subsequent supply chain workflow"
keywords:
  [
    "vendor classification",
    "Kraljic matrix",
    "strategic supplier",
    "tactical supplier",
    "commodity supplier",
    "bottleneck supplier",
    "vendor assessment",
    "supply chain risk",
    "procurement strategy",
    "vendor tiering",
    "supply chain plugin",
    "vendor-assess skill",
  ]
chapter: 35
lesson: 3
duration_minutes: 40

# HIDDEN SKILLS METADATA
skills:
  - name: "Classify Vendors into Kraljic Tiers Using Supply and Profit Impact Criteria"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can take a set of vendor descriptions with spend, dependency, and market data, and assign each to the correct Kraljic tier (Strategic, Tactical, Commodity, Bottleneck) with documented rationale"

  - name: "Use the /vendor-assess Skill to Automate Vendor Classification"
    proficiency_level: "A2"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Content-Creation"
    measurable_at_this_level: "Student can invoke /vendor-assess with vendor details and interpret the classification output, verifying the tier assignment against their own manual classification"

learning_objectives:
  - objective: "Classify vendors into Strategic, Tactical, Commodity, or Bottleneck tiers using supply risk and profit impact as the two classification axes"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Given 5 vendor profiles with spend, dependency, and market data, student correctly assigns each to a Kraljic tier and writes a one-sentence rationale for each classification"

  - objective: "Explain why bottleneck vendors require quarterly review despite low spend"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student articulates that supply risk (not spend) drives review frequency, and that sole-source dependency on a low-spend vendor can halt production: making it more dangerous than a high-spend commodity supplier"

  - objective: "Invoke /vendor-assess with vendor details and verify the classification output against manual analysis"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Student runs /vendor-assess for a vendor, compares the returned tier to their own classification, and identifies whether the rationale matches their assessment criteria"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "Kraljic matrix: two-axis classification (supply risk x profit impact)"
    - "Strategic tier: high risk, high impact, partnership model"
    - "Tactical tier: low risk, high impact, leverage model"
    - "Commodity tier: low risk, low impact, efficiency model"
    - "Bottleneck tier: high risk, low impact, the most dangerous and most neglected"
  assessment: "5 concepts at B1 level: well within the 7-10 cognitive limit. The lesson builds from a single framework (the matrix) to four tiers, each with concrete criteria. The worked example reinforces all four tiers before the exercise asks students to classify independently."

differentiation:
  extension_for_advanced: "Research Peter Kraljic's original 1983 Harvard Business Review article 'Purchasing Must Become Supply Management.' How does the original academic framework compare to the four-tier model used in modern procurement? What did Kraljic propose beyond classification: and how does the /vendor-assess skill implement those downstream recommendations?"
  remedial_for_struggling: "Focus on two things: the classification table (which criteria put a vendor in each tier) and the bottleneck concept (low spend does not mean low risk). If you can look at a vendor and determine whether alternatives exist and whether their failure would halt your operations, you have the core classification skill."

teaching_guide:
  key_points:
    - "Classification must happen BEFORE assessment: it determines how deep you go"
    - "Bottleneck is the most counterintuitive tier: low spend, maximum danger"
    - "The two axes are supply risk (alternatives, switching cost) and profit impact (spend, margin effect)"
    - "Classification is not permanent: vendors migrate between tiers as markets change"
  misconceptions:
    - "High spend = strategic. Correction: a high-spend vendor with many alternatives is Tactical, not Strategic. The key differentiator is supply risk (availability of alternatives), not just spend."
    - "Low spend = low risk. Correction: a low-spend sole-source vendor is a Bottleneck: potentially the highest-risk vendor in your portfolio. Spend does not correlate with risk."
    - "Classification is a one-time exercise. Correction: market conditions, alternative suppliers, and strategic priorities change. Classification should be reviewed at least annually."
  discussion_prompts:
    - "Think about a vendor your organisation depends on that has no qualified alternative. How would your operations be affected if they stopped delivering tomorrow? Is your organisation treating them as bottleneck or commodity?"
    - "Why might a procurement team resist classifying a vendor as Strategic? What organisational incentives might push toward under-classification?"
  teaching_tips:
    - "Start with the bottleneck quadrant: it is the most surprising and memorable. Students who understand why a low-spend vendor can be the most dangerous will grasp the entire framework."
    - "Use the KIFTL example throughout: it makes the abstract framework concrete. Ask students to predict the classification before revealing it."
---

# Vendor Classification; The Kraljic Matrix

Karachi Industrial Fasteners Ltd (KIFTL) supplies your factory with M8 and M10 stainless steel fasteners. Annual spend: PKR 8.5 million: roughly $30,000 USD. In your total procurement budget, this is a rounding error. Your procurement team reviews KIFTL once every two years, lumped in with a hundred other low-spend suppliers. The last review was a checkbox exercise: "Is the vendor still delivering? Yes. Next."

Six months later, KIFTL misses a delivery. Then another. Your production line stops for three days because you have no qualified alternative for those specific fasteners. The cost of three days of lost production dwarfs the entire annual contract value. Your procurement team scrambles to find an alternative supplier, but qualification alone takes 90 days. You have just learned: at the worst possible time: that you were treating a bottleneck vendor as a commodity.

This lesson teaches the classification framework that prevents this failure. Before you can assess a vendor (Lesson 4), monitor their risk (Lesson 7), or plan their exit (Lesson 13), you need to know what kind of vendor they are. Classification is the first decision that determines every subsequent workflow.

## The Kraljic Framework: Two Axes, Four Quadrants

Peter Kraljic introduced this framework in 1983 to move procurement from a reactive administrative function to a strategic discipline. The framework classifies every vendor along two axes:

**Supply Risk**; How difficult is it to replace this vendor? Factors include: number of qualified alternatives, switching cost, switching timeline, geographic concentration, and technical specificity of what they supply.

**Profit Impact**; How much does this vendor affect your financial performance? Factors include: annual spend, margin contribution, impact on product quality, and effect on your ability to serve customers.

These two axes produce four quadrants:

| Tier | Classification | Supply Risk | Profit Impact | Management Model                                                    |
| ---- | -------------- | ----------- | ------------- | ------------------------------------------------------------------- |
| 1    | **Strategic**  | High        | High          | Partnership: deep integration, joint planning, long-term contracts |
| 2    | **Tactical**   | Low         | High          | Leverage: competitive bidding, multiple qualified alternatives     |
| 3    | **Commodity**  | Low         | Low           | Efficiency: automate ordering, minimise transaction costs          |
| 4    | **Bottleneck** | High        | Low           | Risk mitigation: qualify alternatives, build safety stock          |

### Strategic Vendors (Tier 1)

High supply risk, high profit impact. These are your most important and most difficult-to-replace suppliers. A strategic vendor typically has one or more of these characteristics:

- Single-source or near-sole-source for a critical input
- Deep technical integration with your product or process
- Long qualification timeline (months to years) to replace
- Significant annual spend that affects your cost structure

**Management approach:** Quarterly reviews plus event-triggered assessments. Joint business planning. Long-term contracts with performance KPIs. Executive-level relationship management. Full six-dimension assessment (Lesson 4).

**Example:** Your primary ERP implementation partner. Switching would take 12-18 months and cost more than two years of licence fees.

### Tactical Vendors (Tier 2)

Low supply risk, high profit impact. These vendors represent significant spend, but you have alternatives. The market is competitive and switching is feasible.

**Management approach:** Bi-annual reviews. Competitive rebidding every contract cycle. Benchmark pricing against alternatives. Maintain at least two qualified suppliers.

**Example:** Office supplies distributor with an annual contract of $500,000. Three other distributors could serve you within 30 days.

### Commodity Vendors (Tier 3)

Low supply risk, low profit impact. Standard goods and services available from many providers. The procurement goal is efficiency: minimise the cost of the purchasing transaction itself.

**Management approach:** Annual review. Automated purchase orders where possible. Catalogue buying. The cost of managing these vendors should be proportional to their impact.

**Example:** Stationery supplier, cleaning services, standard consumables.

### Bottleneck Vendors (Tier 4)

High supply risk, low profit impact. This is the most dangerous and most neglected quadrant. These vendors fly under the radar because their spend is low: procurement teams naturally focus attention on high-spend relationships. But their failure has disproportionate consequences.

**Management approach:** Quarterly reviews: the same frequency as Strategic vendors, despite the low spend. The priority is qualifying an alternative supplier and building safety stock to bridge a supply disruption.

**Example:** KIFTL; $30,000 annual spend, but sole-source for a production-critical component. No qualified alternative. Failure halts the production line.

:::caution The Bottleneck Trap
Most procurement teams classify vendors by spend: high spend gets attention, low spend does not. This creates a systematic blind spot. Bottleneck vendors: low spend, high dependency, no alternatives: are the most likely to cause a supply chain crisis precisely because nobody is watching them. The Kraljic framework forces you to ask the right question: "What happens if this vendor fails?" not "How much do we spend with this vendor?"
:::

## Worked Example: Classifying KIFTL

Return to Karachi Industrial Fasteners Ltd. Here is the information you have:

| Factor                 | Data                                 |
| ---------------------- | ------------------------------------ |
| Annual spend           | PKR 8.5M (~$30,000 USD)              |
| Product                | M8 and M10 stainless steel fasteners |
| Alternatives available | None currently qualified             |
| Switching timeline     | 90+ days (qualification required)    |
| Production dependency  | Exclusive: no alternative source    |
| Relationship length    | 6 years                              |
| Last formal review     | 2+ years ago                         |

**Step 1; Assess supply risk.** No qualified alternative. Switching timeline exceeds 90 days. Production depends entirely on this vendor for these fasteners. **Supply risk: HIGH.**

**Step 2; Assess profit impact.** Annual spend of $30,000 is negligible relative to total procurement. The fasteners are a small fraction of the bill of materials. **Profit impact: LOW.**

**Step 3; Plot on the matrix.** High supply risk + low profit impact = **Tier 4: Bottleneck.**

**Step 4; Determine management actions.** Quarterly review (not annual). Immediate action: qualify at least one alternative supplier within 90 days. Build safety stock to cover a 4-week supply disruption. Request financial visibility (audited accounts): you currently have zero insight into whether this sole-source vendor is financially viable.

:::info Classification Is Not Permanent
Markets change. If you successfully qualify an alternative fastener supplier, KIFTL migrates from Bottleneck to Commodity: supply risk drops because you now have alternatives. Conversely, a Tactical vendor can become Strategic if competitors exit the market and alternatives disappear. Review classifications at least annually, and always after a significant supply market change.
:::

## Using `/vendor-assess` for Classification

The supply chain plugin's `/vendor-assess` skill automates vendor classification as the first phase of a full assessment. You provide vendor details; the skill determines the Kraljic tier and generates the rationale.

**Worked example.** You want to classify KIFTL using the skill. You type:

```
/vendor-assess
Vendor: Karachi Industrial Fasteners Ltd
Category: Direct materials — stainless steel fasteners
Annual spend: PKR 8.5M (~$30,000 USD)
Dependency: Sole-source for M8 and M10 fasteners — no alternative qualified
Jurisdiction: Pakistan / UK (contracts under English law)
Relationship: 6 years; no formal review in 2 years
```

**What to expect:** The skill first classifies the vendor, then proceeds to the full six-dimension assessment (covered in Lesson 4). For classification, look for these elements in the output:

| Output Element               | What to Verify                                               |
| ---------------------------- | ------------------------------------------------------------ |
| **Classification**           | TIER 4; BOTTLENECK (not Commodity despite low spend)        |
| **Rationale**                | References sole-source dependency and production criticality |
| **Review frequency**         | Quarterly (matching Bottleneck protocol)                     |
| **Immediate recommendation** | Qualify an alternative supplier                              |

The classification section of the output looks like this:

```
Classification:  TIER 4 — BOTTLENECK
  Rationale: Low spend (PKR 8.5M) but sole-source for critical
  components (M8/M10 fasteners). Production dependency without
  qualified alternative = high strategic risk.
  Recommendation: Immediately initiate alternative vendor
  qualification. Target: 1 qualified backup supplier within 90 days.
```

:::note Your output will vary
The specific wording of the rationale and recommendations depends on the details you provide and the skill's interpretation. The teaching point is the classification logic: sole-source dependency drives the Bottleneck classification regardless of spend level. Verify the tier assignment and the reasoning: not the exact phrasing.
:::

If the skill classifies KIFTL as Commodity (which it should not, given the sole-source dependency), that is a correction opportunity. Ask it to reconsider:

```
KIFTL has no qualified alternative supplier. We are 100% dependent
on them for M8/M10 fasteners that are production-critical. Why did
you classify them as Commodity rather than Bottleneck?
```

The skill should recognise the dependency data and update the classification. This correction pattern: where you apply the framework you have learned to verify and improve the agent's output: is a core practice throughout this chapter.

## Exercise: Build a Vendor Classification Register (Exercise 1, Part A)

**Type:** Configuration
**Time:** 25 minutes
**Plugin command:** `/vendor-assess`
**Goal:** Classify five vendors across all four Kraljic tiers and build a classification register

You are the procurement lead at a mid-sized manufacturing company. Classify each of these vendors and build your classification register.

### Step 1; Classify Each Vendor

For each vendor below, determine the supply risk (high/low) and profit impact (high/low), then assign the Kraljic tier.

| Vendor            | Product/Service          | Annual Spend | Alternatives               | Dependency                         |
| ----------------- | ------------------------ | ------------ | -------------------------- | ---------------------------------- |
| AlphaSteel Corp   | Primary structural steel | $2.4M        | 2 qualified alternatives   | High; 60% of material cost        |
| KIFTL             | M8/M10 fasteners         | $30K         | None qualified             | Sole-source, production-critical   |
| CleanCo Services  | Office cleaning          | $48K         | 12+ providers in region    | Low: easily replaceable           |
| PrecisionCast Ltd | Custom-cast housings     | $180K        | None: proprietary tooling | Sole-source, 6-month qualification |
| BulkPack Supply   | Packaging materials      | $890K        | 4 qualified alternatives   | Moderate: standard specifications |

### Step 2; Run `/vendor-assess` for Two Vendors

Pick the two vendors you found most difficult to classify. Run `/vendor-assess` for each:

```
/vendor-assess
Vendor: [Name]
Category: [Product/service category]
Annual spend: [Amount]
Dependency: [Sole-source / dual-source / multiple alternatives]
Relationship: [Duration and review history]
```

Compare the skill's classification to your own. Do they match? If they differ, determine which classification is correct and why.

### Step 3; Build the Register

Create a classification register table with all five vendors:

| Vendor | Tier | Classification | Supply Risk | Profit Impact | Review Frequency | Priority Action |
| ------ | ---- | -------------- | ----------- | ------------- | ---------------- | --------------- |
|        |      |                |             |               |                  |                 |

### Step 4; Identify the Highest-Risk Vendor

Which vendor poses the greatest immediate risk to your operations? Write a one-paragraph justification. Consider: not which vendor has the highest spend, but which vendor's failure would cause the greatest operational disruption with the least mitigation available.

### Step 5; Plan the Mitigation

For your highest-risk vendor, write three specific actions with timelines:

1. **Immediate (this week):** ...
2. **30 days:** ...
3. **90 days:** ...

**Deliverable:** A completed five-vendor classification register with tier assignments, rationale, review frequencies, and a risk mitigation plan for the highest-risk vendor. Save this register: you will extend it with six-dimension assessments in Lesson 4 (Exercise 1, Part B) and reference it again in Lesson 13 (Vendor Exit Protocol).

:::note Keep This File
The classification register you build here is the foundation for exercises in Lessons 4, 7, and 13. Keep it in your Cowork session: each subsequent lesson adds layers to this initial classification.
:::

## Try With AI

:::tip Try With AI
**Reproduce**: Apply what you just learned to a simple case.

```
I have three vendors. Classify each into a Kraljic tier (Strategic,
Tactical, Commodity, or Bottleneck) and explain your reasoning:

1. CloudHost Pro — annual spend $1.2M, our entire production
   infrastructure runs on their platform, 3-month migration timeline
   to any alternative, 2 other cloud providers could serve us.

2. PaperWorld — annual spend $15K, office paper and printer
   cartridges, 20+ suppliers in the market, switch in a week.

3. MicroChip Dynamics — annual spend $85K, custom ASIC chips
   for our flagship product, 18-month qualification timeline,
   no other manufacturer produces this exact specification.
```

**What you are learning:** Applying the two-axis framework (supply risk x profit impact) to real vendor profiles builds the classification judgment that the `/vendor-assess` skill encodes.

**Adapt**: Modify the scenario to match your organisation.

```
List 5 vendors from your own organisation (or a hypothetical one
in your industry). For each, provide:
- Product/service supplied
- Approximate annual spend
- Number of qualified alternatives
- What happens if they stop delivering tomorrow

Then classify each into a Kraljic tier with a one-sentence rationale.
Highlight any vendor you suspect is being managed at the wrong tier
(e.g., a Bottleneck being treated as Commodity).
```

**What you are learning:** Translating the framework from textbook examples to your own vendor base reveals classification gaps: vendors that are under-managed relative to their actual risk.

**Apply**: Extend to a new situation the lesson didn't cover directly.

```
A vendor that was previously classified as Tactical (low supply risk,
high profit impact — annual spend $1.8M, 3 qualified alternatives)
has just acquired its two largest competitors. The market now has
only one remaining alternative, and that alternative has capacity
constraints.

1. What is the new Kraljic classification? Why?
2. What immediate actions should procurement take?
3. How should the review frequency and assessment depth change?
4. Draft a 3-sentence executive summary for your CPO explaining
   the reclassification and recommended response.
```

**What you are learning:** Classification is dynamic. Market consolidation, supplier exits, and strategic shifts change the supply risk axis. Recognising when a vendor has migrated tiers: and responding before the next review cycle: is a critical procurement skill.
:::

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 4: Six-Dimension Vendor Assessment →](./04-six-dimension-vendor-assessment.md)
