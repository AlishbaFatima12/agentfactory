---
slug: /Business-Domain-Agent-Workflows/supply-chain-procurement/supply-network-design-scenarios
sidebar_position: 9
title: "Supply Network Design Scenarios"
description: "Turn weeks-long network design studies into conversational scenario analysis using the /supply-network-design skill — define trigger events, compare cost/service/carbon tradeoffs across scenarios, and iterate on assumptions in real time"
keywords:
  [
    "supply network design",
    "network optimisation",
    "distribution centre",
    "DC placement",
    "warehouse location",
    "nearshoring",
    "scenario analysis",
    "network scenarios",
    "MCP optimisation",
    "sensitivity analysis",
    "break-even analysis",
    "supply chain network",
    "supply chain plugin",
    "supply-network-design skill",
  ]
chapter: 35
lesson: 9
duration_minutes: 35

# HIDDEN SKILLS METADATA
skills:
  - name: "Define and Compare Supply Network Design Scenarios Using /supply-network-design"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can define a network design question with clear scenarios, run /supply-network-design, and interpret the cost/service/carbon/capex trade-off table to identify the recommended scenario and the key risks"

  - name: "Identify Network Design Trigger Events"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can assess a set of operational and strategic changes and determine whether they constitute a network design trigger that warrants a full review"

learning_objectives:
  - objective: "List the trigger events that warrant a supply network design review and explain why each is relevant"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student can match a business change (new customer region, transport cost increase, company acquisition) to the appropriate trigger category and explain the network implication"

  - objective: "Define a network design scenario with a clear objective function, parameters, and baseline comparison"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Student can write a /supply-network-design prompt that specifies the objective function, supply and demand nodes, and at least two alternative scenarios including a status quo baseline"

  - objective: "Interpret the scenario comparison output and identify the recommended scenario with its key trade-offs"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Student reads the scenario output, identifies the recommendation, articulates the cost/service/carbon/capex trade-offs, and names the assumptions whose failure would change the recommendation"

  - objective: "Apply conversational what-if patterns to test scenario sensitivity"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student formulates at least two what-if questions that test the robustness of the recommended scenario (e.g. demand change, cost change, supply route disruption)"

cognitive_load:
  new_concepts: 4
  concepts_list:
    - "Network design trigger events — when a review is warranted"
    - "Scenario definition framework — objective function, nodes, and scenario structure"
    - "MCP-connected optimisation architecture — Claude as conversational interface, algorithm as backend"
    - "Conversational what-if iteration — testing assumptions in real time"
  assessment: "4 concepts at B2 level, appropriate for this lesson position. The trigger events and scenario framework are conceptual; the MCP architecture is explanatory only (students do not configure the MCP server); what-if iteration is practical. Well within cognitive load limits."

differentiation:
  extension_for_advanced: "Explore the academic literature on supply chain network design optimisation. What mathematical methods are typically used (mixed-integer linear programming, stochastic optimisation)? What are the limitations of each? How does the conversational AI interface change what questions can be asked — and what questions it still cannot answer?"
  remedial_for_struggling: "Focus on the scenario definition framework: status quo baseline always included, objective function stated upfront, scenarios differ by one key variable at a time. If you can write a clear /supply-network-design prompt with these elements, you can run a network design study — even if the mathematics behind the optimisation are opaque."

teaching_guide:
  key_points:
    - "Always include the status quo as Scenario A — a recommendation without a baseline has no meaning"
    - "State the objective function explicitly: optimising for cost alone produces a different recommendation than optimising for service level or carbon"
    - "Network design is continuous, not periodic — trigger events should prompt immediate reviews, not wait for the annual planning cycle"
    - "Conversational iteration is the key differentiator — the value is in asking follow-up questions, not just getting one output"
  misconceptions:
    - "Network design is a finance or strategy function, not procurement. Correction: procurement owns the vendor base and knows the supply-side nodes. Supply chain design affects supplier selection, transportation contracts, and risk posture — all procurement decisions."
    - "Once you have a recommended scenario, you implement it. Correction: the recommendation is only as good as its assumptions. Sensitivity analysis — what if demand is 20% different, what if fuel costs change — is not optional. It is the step that determines whether the recommendation is robust or fragile."
    - "You need a specialist consulting team to run network design. Correction: Samir Saci's published work demonstrates that conversational AI connected to optimisation algorithms can run scenarios that previously required weeks of consultant time — with the decision-maker able to iterate in real time rather than waiting for a revised deliverable."
  discussion_prompts:
    - "When did your organisation last formally review its distribution network design? What has changed since then — new customers, new suppliers, new trade routes — that might warrant a review now?"
    - "What is your objective function for network design? Most organisations say 'cost', but when pressed, service level and resilience are often equally important. How should trade-offs between these be made?"
  teaching_tips:
    - "The Pakistan/Dubai DC scenario is concrete and internationally relevant. Use it as the worked example throughout and return to it for what-if iteration."
    - "Emphasise that the MCP architecture explanation (Claude as interface, algorithm as backend) is context, not something students need to configure. The teaching point is that conversational iteration is now possible — not how the API works."
---

# Supply Network Design Scenarios

Your organisation has been shipping to your Pakistan customers from a Dubai distribution centre for three years. Transit times average 4.2 days. You have just signed two new customers in Lahore that together represent 30% volume growth in Pakistan. Your logistics cost for Pakistan has increased 18% year-on-year as fuel surcharges compound.

Your supply chain director asks: should we open a Lahore DC?

Eighteen months ago, answering this question would have required a consulting engagement. A team would spend 6-8 weeks gathering data, building an optimisation model, running scenarios, and producing a recommendation deck. By the time the analysis was complete, some of the underlying assumptions would already be stale.

Samir Saci's published work on AI agents for supply chain network optimisation demonstrates that these studies can now be run conversationally — with the agent re-running scenarios in response to decision-maker questions in real time, turning a periodic consulting exercise into a continuous analytical capability. This lesson teaches the framework and the `/supply-network-design` skill that implements it.

## When to Trigger a Network Design Review

Not every operational change warrants a full network design review. These trigger events do:

| Trigger                                           | Why It Matters                                                |
| ------------------------------------------------- | ------------------------------------------------------------- |
| Demand volume shifted >20% in a key region        | The network was designed for the old demand pattern           |
| New significant customer in a new geography       | New demand node not in the original design                    |
| Supplier base materially changed                  | New sourcing region changes supply-side flows                 |
| Transport or carrier cost increased >15%          | Changes the cost optimum between network configurations       |
| New DC or manufacturing facility planned          | New node to evaluate in the network                           |
| Regulatory change affecting trade routes          | Tariffs, customs changes, or sanctions affect route economics |
| Sustainability target requiring Scope 3 reduction | Mode shifts or network changes needed to meet carbon targets  |
| Company acquisition creating overlapping networks | Two networks to rationalise into one                          |

For the Pakistan scenario: three triggers apply simultaneously — demand growth >20% in Pakistan, transport cost increase >15%, and new customers in a new city. This is a clear network design review.

## Scenario Definition Framework

Before running any optimisation, define what you are optimising for and what the parameters are. An undefined objective produces a technically correct answer to the wrong question.

**Objective function** (state explicitly, in rank order):

```
Primary:   [Cost / Service level / Carbon / Resilience — choose one]
Secondary: [Cost / Service level / Carbon / Resilience]
Constraint: [Any hard constraints that cannot be traded off]
```

For the Pakistan case: primary objective is cost reduction; secondary is service level improvement for Pakistan customers; constraint is that existing Dubai DC cannot be closed (it serves other markets).

**Network parameters**:

- Supply nodes: manufacturing sites and key suppliers with capacities
- Demand nodes: customer locations with demand volumes
- Intermediate nodes: existing and candidate warehouse/DC locations
- Time horizon: typically 1-5 years
- Demand forecast: current volumes plus growth assumptions per region

**Scenario structure** (always include the status quo):

- **Scenario A**: Status quo (baseline — always include)
- **Scenario B**: First alternative — name the key change
- **Scenario C**: Second alternative
- **Scenario D**: Optional stress test — what if one node fails?

## The `/supply-network-design` Workflow

The command is `/supply-network-design` — this replaces the spec name `/network-design` to avoid collisions with other Anthropic surfaces.

```
/supply-network-design
> Agent: Describe the network design question.

> User: We are opening a new distribution centre in Pakistan
        (Lahore) to serve our South Asia market. We currently
        ship from our Dubai DC. Model 3 scenarios:
        Scenario A: Dubai DC serves all South Asia (status quo)
        Scenario B: Lahore DC serves Pakistan only; Dubai serves rest
        Scenario C: Lahore DC serves Pakistan + India; Dubai serves
                    Gulf + other South Asia
        Run cost, service level, and carbon analysis for each.
```

The agent calls the MCP-connected network optimisation service — a FastAPI microservice exposing the optimisation algorithm as a typed tool — returns scenario outputs, and then provides analysis:

```
NETWORK DESIGN SCENARIOS — South Asia Distribution
════════════════════════════════════════════════════════════

            Scenario A      Scenario B      Scenario C
Total cost: £2.84M/yr      £2.41M/yr      £2.18M/yr
Avg transit: 4.2 days      2.8 days (PK)  2.6 days (PK+IN)
Carbon:     1,840 tCO2e   1,520 tCO2e    1,310 tCO2e
Capex:      £0             £340K           £340K

RECOMMENDATION: Scenario B is the inflection point.
  Net saving vs. A: £430K/year
  Payback on Lahore DC capex: <10 months
  Service improvement for Pakistan: -1.4 days average transit
  Carbon reduction: -17%

Scenario C adds further efficiency for India routes but requires
  modelling of India import duties, which differ significantly from
  Pakistan's import framework. Recommend separate India analysis
  before committing to Scenario C scope.
════════════════════════════════════════════════════════════
```

The output compares all three scenarios on cost, service level, carbon, and capex. The recommendation identifies the inflection point — the scenario that captures most of the value at acceptable risk and investment — and flags what additional analysis is needed before the next step.

:::info The MCP Architecture
The `/supply-network-design` skill uses Claude as the conversational interface and a MCP-connected optimisation microservice as the computational backend. You do not need to understand the microservice architecture to use the skill. What matters is the capability it unlocks: the ability to re-run scenarios with modified assumptions in seconds rather than days.
:::

## Conversational What-If Iteration

A single scenario comparison is not a complete network design study. The recommendation is only as good as its assumptions. What-if iteration tests whether the recommendation is robust — or whether it flips under plausible alternative scenarios.

Ask these questions after receiving the initial output:

**Demand sensitivity:**

```
What if Pakistan demand increases 20% faster than forecast?
Does Scenario B still have sufficient capacity, or does
Scenario C become necessary sooner?
```

**Cost sensitivity:**

```
What if fuel costs rise another 15% over the next 12 months?
How does this change the relative ranking of the three scenarios?
Which scenario is most resilient to fuel cost increases?
```

**Break-even analysis:**

```
What is the break-even volume for the Lahore DC?
At what annual shipment volume does Scenario B equal
the cost of Scenario A?
```

**Resilience stress test:**

```
What happens if the Dubai-to-Pakistan route is disrupted
for 3 months? What would re-routing through Lahore cost,
and does the current Scenario B configuration have
enough capacity to absorb the additional volume?
```

Each question prompts the agent to re-run the affected scenarios with modified parameters and return the delta against the prior result — the decision-maker sees exactly how sensitive the recommendation is to each assumption.

## Network Design Trade-offs

Every network design decision involves trade-offs across cost, service level, carbon, and capex. The scenario output makes these explicit:

For the Pakistan example:

- **Scenario B vs. A**: £430K/year saving, 1.4 day transit improvement, 17% carbon reduction, £340K capex (payback &lt;10 months). Clear winner.
- **Scenario C vs. B**: Further efficiency on India routes, but requires India import duty modelling, adds complexity to DC operations, and captures diminishing returns relative to Scenario B's savings.

The recommendation for Scenario B is not that Scenario C is wrong — it is that Scenario C's additional value requires additional analysis first. This is the kind of nuanced output that conversational iteration enables: not just "here is the best scenario" but "here is the next question you need to answer before going further."

:::caution What Never to Do
Never present a single scenario as a recommendation — always compare against the status quo baseline. Never optimise for cost alone without showing the service level and carbon implications. Never recommend closing an existing node without modelling the transition cost and transition period risk. Never base a network design on demand data more than 18 months old.
:::

## Try With AI

:::tip Try With AI
**Reproduce**: Apply what you just learned to a simple case.

```
I run procurement for a UK electronics company. We currently ship
finished goods to our European customers from a single warehouse
in Birmingham (UK).

Context:
- Annual Europe logistics spend: £1.8M
- Average transit time to EU: 4.8 days (post-Brexit customs)
- 60% of volume is to Germany, Netherlands, and France
- We are evaluating opening a small DC in Rotterdam

Model two scenarios:
Scenario A: Status quo — Birmingham serves all Europe
Scenario B: Rotterdam DC serves Germany, Netherlands, France;
            Birmingham serves UK + other Europe

Objective: primary = cost; secondary = service level
Analyse cost, transit time, and capex requirements.
```

**What you are learning:** The scenario definition framework — clear objective, status quo baseline, one key variable changed between scenarios — produces a comparable output. The structure of the question determines the usefulness of the answer.

**Adapt**: Modify the scenario to match your organisation.

```
Identify one network design question relevant to your organisation
or industry. It could be:
- A new distribution centre you are evaluating
- A potential nearshoring decision (moving supply closer to demand)
- A warehouse consolidation (reducing from 4 DCs to 2)
- A trade route change forced by a regulatory change

Define the scenario using the framework:
1. What is the trigger event that makes this review necessary now?
2. What is your objective function (cost / service level / carbon)?
3. What is Scenario A (status quo)?
4. What is Scenario B (the alternative you are evaluating)?
5. What would make you choose Scenario B over Scenario A?
```

**What you are learning:** Most organisations have network design questions they have been deferring because the analysis seemed too complex. Defining the scenario clearly — trigger, objective, baseline, alternative — makes the question tractable.

**Apply**: Extend to a new situation the lesson didn't cover directly.

```
Your CFO has just told you that your organisation needs to reduce
logistics Scope 3 emissions by 25% within 2 years as part of
sustainability commitments.

Your current network uses road freight for 90% of volume.
You ship 45,000 tonnes/year across your network.

1. What network design changes could achieve a 25% carbon reduction?
   What scenarios would you evaluate?
2. What is the cost trade-off of each option?
3. Which trigger events in the trigger list apply here?
4. What data would you need to run the analysis?

Design the scenario comparison you would present to your CFO.
```

**What you are learning:** Carbon reduction targets are increasingly driving network design decisions. Translating a sustainability target into a scenario analysis follows the same framework as cost optimisation — but with carbon as the primary objective function.
:::

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 10: Spend Analytics and Consolidation →](./10-spend-analytics-consolidation.md)
