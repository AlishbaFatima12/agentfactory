---
slug: /Business-Domain-Agent-Workflows/intent-driven-financial-architecture/mcp-dependency
sidebar_position: 7
title: "Delegated Calculation: Guardrail 4"
description: "Learn why a Finance Domain Agent must never calculate internally: it writes assumptions to the model via the IDFA plugin, the spreadsheet engine calculates deterministically, and the agent reads back results that are mathematically certain"
keywords:
  [
    "Delegated Calculation",
    "Guardrail 4",
    "IDFA",
    "IDFA plugin",
    "idfa-ops",
    "recalculate",
    "deterministic calculation",
    "what-if analysis",
    "goal-seeking",
    "Named Range",
    "finance domain agent",
    "audit-valid",
    "intent-driven financial architecture",
  ]
chapter: 29
lesson: 7
duration_minutes: 30

# HIDDEN SKILLS METADATA
skills:
  - name: "Delegated Calculation Workflow"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can execute a complete write-calculate-read workflow on an IDFA-compliant model, changing an assumption and reading back all affected outputs without performing any internal arithmetic"

  - name: "Deterministic What-If Analysis"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can run a multi-variable what-if scenario through the model, report the deterministic results, and explain why the model result differs categorically from an agent estimate"

  - name: "Strategic Goal-Seeking via Delegated Calculation"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can design an iterative goal-seeking workflow where the agent adjusts an input assumption and reads back the target output until the desired value is reached, without the agent computing the answer internally"

learning_objectives:
  - objective: "Apply the Delegated Calculation guardrail by executing a complete write-calculate-read workflow where the agent writes an assumption, the spreadsheet engine calculates, and the agent reads back the deterministic result"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student asks Claude to change Inp_Rev_Y1 to $12M, reads back all three years of Gross Profit, and confirms the results match the model output exactly"

  - objective: "Distinguish between an agent's internal estimate and a model's deterministic output, explaining why only the latter is audit-valid in financial contexts"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student identifies a scenario where internal calculation would produce a different result than the model and explains the audit implications"

  - objective: "Design an iterative goal-seeking workflow that uses the model to find the input value needed to achieve a specific output target"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student asks Claude to iterate to find the Y1 Revenue that produces Year 3 Gross Profit of exactly $5,500,000 and reports the required input from the model"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "Delegated Calculation as a guardrail (agent must not calculate)"
    - "The write-calculate-read workflow"
    - "Deterministic output versus agent estimate"
    - "What-if analysis via delegated calculation"
    - "Goal-seeking via iterative model interaction"
  assessment: "5 new concepts at B1 level. Students already understand Named Ranges (L04), LaTeX verification (L05), and Intent Notes (L06). The IDFA plugin was introduced in the chapter prerequisites. This lesson applies a familiar interaction pattern to a new constraint: the prohibition on internal calculation."

differentiation:
  extension_for_advanced: "After completing the goal-seeking exercise, run a three-variable sensitivity analysis: change Inp_Rev_Y1, Inp_Rev_Growth, and Inp_COGS_Efficiency simultaneously. Report a 2x2 sensitivity table for two variables while holding the third constant. All results must come from the model."
  remedial_for_struggling: "Focus on the single what-if workflow only. Ask Claude to change Inp_Rev_Y1 to $12M and read back Gross_Profit_Y1. Verify it equals $4,800,000. If the agent writes the assumption and reads back the result without computing it itself, you have the core concept."
---

# Delegated Calculation: Guardrail 4

In Lesson 6, you learned to attach Intent Notes that document the business purpose of every AI-generated formula. Now you reach the guardrail that governs how the agent interacts with the model itself. The CFO walks into your office: "What if we lose the Johnson account: that is $2M off Year 1 Revenue. What happens to Year 3 margins?" In the old world, you open Excel, change a cell, trace the impacts manually, re-check the formulas, and report back an hour later. With IDFA and the IDFA plugin, you give the agent the question. The agent writes the new assumption. The spreadsheet engine calculates. The agent reads back the answer. Every number comes from the model. Nothing is estimated.

This distinction (between an agent that _reports what the model calculated_ and an agent that _reports what it calculated internally_) is the most consequential guardrail in IDFA. In finance, these are categorically different. One is audit-valid. The other is an opinion.

## The Rule

**Guardrail 4 (Delegated Calculation:** An AI agent operating on an IDFA-compliant model is prohibited from performing calculations internally. It must delegate all arithmetic to the spreadsheet engine) writing assumptions, letting Excel recalculate, and reading back the results.

The agent provides the reasoning. The spreadsheet engine provides the mathematics. The result is not the agent's estimate: it is the model's deterministic output.

## Why This Guardrail Exists

Consider what happens without it. You ask the agent: "What is Year 2 Gross Profit if COGS improves to 58%?" The agent knows the formula. It knows Revenue_Y2 is $11M. It calculates internally: $11,000,000 minus ($11,000,000 times 0.58) equals $4,620,000. It reports this number confidently.

The problem: the model might have a different Revenue_Y2. Perhaps another assumption changed since the agent last read the model. Perhaps the revenue growth formula includes a rounding convention. Perhaps there is a conditional override the agent does not know about. The agent's internal arithmetic is based on its understanding of the model: which may be incomplete, outdated, or wrong in ways neither the agent nor the user can detect.

When the agent delegates calculation to the spreadsheet engine, none of this matters. It writes the COGS assumption. Excel recalculates every dependent cell using the actual formulas in the actual model. The agent reads back the result. The number is mathematically certain because it came from the deterministic calculation engine, not from the agent's reasoning.

:::info How the Agent Touches the Model

When the IDFA plugin is active, Claude has two skills working together:

| What Claude Does        | How It Works                                                |
| ----------------------- | ----------------------------------------------------------- |
| **Write an assumption** | Changes a Named Range value in the model                    |
| **Recalculate**         | Triggers the spreadsheet engine to recalculate all formulas |
| **Read a result**       | Reads the current value of any Named Range                  |
| **Inspect the model**   | Lists all Named Ranges, their values, and dependencies      |
| **Read a formula**      | Returns the formula assigned to a Named Range               |

The agent writes to Named Ranges, never to cell coordinates. The spreadsheet engine recalculates. The agent reads back Named Range results. This is the complete interaction pattern.

:::

## The Write-Calculate-Read Workflow

Every interaction follows the same three-step pattern:

**Step 1: The agent reasons about the correct input:**

The agent determines what assumption to change based on the user's question. This is where the agent's intelligence matters: understanding the business context, selecting the right Named Range, choosing the right value.

**Step 2: The agent writes the input and the spreadsheet engine recalculates:**

You ask Claude to change an assumption. Claude writes the new value to the Named Range in the model and triggers a recalculation. The agent does not calculate anything: it writes a value to a Named Range and lets the spreadsheet engine do the rest.

**Step 3: The agent reads back the result:**

Claude reads the affected outputs from the model and reports them to you. The numbers it reports are the model's deterministic outputs; not estimates, not approximations, not internal arithmetic.

This separation is absolute. The agent never performs arithmetic on financial data. It reasons about what inputs to change and what outputs to read. The spreadsheet engine handles every calculation between those two points.

## Deterministic What-If Analysis

The what-if workflow demonstrates Guardrail 4 at its most powerful.

**The question:** "What if Year 1 Revenue is $12M instead of $10M? What happens to Gross Profit across all three years?"

Here is what this looks like in Cowork:

> **You:** What if Year 1 Revenue is $12M instead of $10M? Show me all three years of Gross Profit.
>
> **Claude:** I'll update the assumption and recalculate the model.
>
> Changing Inp_Rev_Y1 from $10,000,000 to $12,000,000...
> Model recalculated. Results from the model:
>
> | Output          | Value      |
> | --------------- | ---------- |
> | Gross_Profit_Y1 | $4,800,000 |
> | Gross_Profit_Y2 | $5,412,000 |
> | Gross_Profit_Y3 | $6,098,400 |
>
> With Year 1 Revenue at $12M, the model produces Gross Profit of $4.8M in Year 1, $5.41M in Year 2, and $6.10M in Year 3.

Every number came from the spreadsheet engine. The agent added zero arithmetic. If a CFO asks "where did these numbers come from?", the answer is: the model calculated them. Not the agent. Not an estimate. The model.

:::warning Common Mistake: Never Calculate Then Write

The most dangerous violation of Guardrail 4 is calculating a result internally and then writing it to the model as if Excel produced it.

**Wrong:** Agent computes Gross_Profit_Y2 = $11M - ($11M \* 0.59) = $4,510,000, then reports it.

**Right:** Agent writes Inp_COGS_Pct_Y2 = 0.59 to the model, the spreadsheet engine recalculates, and the agent reads back Gross_Profit_Y2 from the model.

Internal calculation and deterministic model calculation can produce different results. Only the model result is audit-valid. If the agent ever reports a number it computed rather than read, the entire audit trail breaks.

:::

## Strategic Goal-Seeking

What-if answers the question "what happens if I change this input?" Goal-seeking answers the reverse: "what input do I need to achieve this output?"

**The question:** "What Year 1 Revenue do I need for Year 3 Gross Profit to equal exactly $5,500,000?"

The agent cannot solve this algebraically and report the answer: that would be internal calculation. Instead, it iterates through the model:

> **You:** What Year 1 Revenue do I need for Year 3 Gross Profit to equal exactly $5,500,000? Show me each iteration.
>
> **Claude:** I'll iterate through the model to find the answer. Let me start with $11M and adjust from there.
>
> **Iteration 1:** Setting Inp_Rev_Y1 to $11,000,000...
> → Reading Gross_Profit_Y3 from the model: $5,589,100: too high.
>
> **Iteration 2:** Setting Inp_Rev_Y1 to $10,800,000...
> → Reading Gross_Profit_Y3 from the model: $5,473,728: too low.
>
> **Iteration 3:** Setting Inp_Rev_Y1 to $10,850,000...
> → Reading Gross_Profit_Y3 from the model: $5,502,610: close.
>
> **Iteration 4:** Setting Inp_Rev_Y1 to $10,845,000...
> → Reading Gross_Profit_Y3 from the model: $5,499,726: closer.
>
> **Iteration 5:** Setting Inp_Rev_Y1 to $10,846,000...
> → Reading Gross_Profit_Y3 from the model: $5,500,303: within tolerance.
>
> Year 1 Revenue of approximately $10,846,000 produces Year 3 Gross Profit of $5,500,303: within $303 of the $5,500,000 target.

Every intermediate result came from the model. The agent used binary search logic to converge on the answer, but every data point was a deterministic model output. The final answer is not the agent's estimate: it is the input that the model confirms produces the target output.

## The Business Bottom Line

The CFO asks: "What if COGS improves 2% faster than planned?" Without IDFA and the IDFA plugin, an analyst opens the model, changes a cell, traces the downstream impacts, double-checks the formulas, and reports back. That takes time, and the analyst's interpretation of the model may introduce errors.

With IDFA and the IDFA plugin: the agent writes the new COGS efficiency assumption to the model. The spreadsheet engine recalculates every dependent cell. The agent reads back Gross Profit for all three years. The CFO has a verified answer in seconds: and every number traces back to the model's deterministic calculation engine.

Agent reasoning plus spreadsheet mathematics equals mathematical certainty. That is Guardrail 4.

## Capability Preview

The workflows you practiced in this lesson (Deterministic What-If and Strategic Goal-Seeking) are Capabilities 2 and 4 of the five Finance Domain Agent capabilities you will validate in the capstone (Lesson 11). In the capstone, you will run formal capability tests that verify the agent delegates every calculation to the model, never reporting a number before reading it from the model.

## Exercise: Full What-If Workflow

Using the Gross Profit Waterfall model built in earlier lessons (or the IDFA SKILL.md reference values), complete the following in Cowork:

**Part 1: What-If:**

1. Ask Claude: "Change Year 1 Revenue to $12M and show me all three years of Gross Profit."
2. Confirm the results: GP Y1 = $4,800,000, GP Y2 = $5,412,000, GP Y3 = $6,098,400
3. Verify: every number Claude reported came from the model: none from its own arithmetic

**Part 2: Goal-Seeking:**

1. Ask Claude: "Find the Year 1 Revenue needed for Year 3 Gross Profit to equal $5,500,000. Show me each iteration."
2. Watch Claude iterate: writing assumptions, reading back results, adjusting, and repeating
3. Verify: the final answer was found through iteration, not algebraic solving
4. Document how many iterations it took to converge

**Success criteria:** Every number Claude reported came from the model. Claude performed zero arithmetic. The goal-seeking answer was found through iteration, not calculation.

## Try With AI

**Setup:** Open Cowork with the IDFA plugin installed and your Gross Profit Waterfall model connected.

---

**Prompt 1: What-If Scenario:**

```
What if Year 1 Revenue is $12M instead of $10M? Show me the impact
on all three years of Gross Profit. Do not calculate any number
internally — every result must come from the model.
```

**What you are learning:** This prompt tests whether the agent follows Guardrail 4. Watch for the write-calculate-read sequence. Every Gross Profit figure should come from reading the model, not from the agent's arithmetic. If the agent reports a number without reading it from the model first, it violated the guardrail.

---

**Prompt 2: Goal-Seeking:**

```
Find the Year 1 Revenue needed for Year 3 Gross Profit to equal
exactly $5,500,000. Iterate through the model — write the assumption,
read back the result, adjust, repeat — until you converge on the
answer. Show me each iteration.
```

**What you are learning:** Goal-seeking forces the agent to use the model as a calculator rather than solving the problem analytically. The agent must iterate: write an input, read the output, adjust, repeat. Each iteration produces a deterministic model result. The final answer is the input that the model confirms produces the target.

---

**Prompt 3: Multi-Variable Sensitivity:**

```
What happens to the three-year Gross Profit total if Revenue grows
at 15% instead of 10% AND COGS efficiency improves to 2% per year
instead of 1%? Change both assumptions and read back all results
from the model. Compare to the base case.
```

**What you are learning:** Multi-variable scenarios are where internal calculation becomes most dangerous: the compounding interactions between variables make mental arithmetic unreliable. By delegating everything to the spreadsheet engine, the agent handles complexity without introducing estimation error. The model calculates the compound effects; the agent reports them.

---

## Flashcards Study Aid

<Flashcards />

**Next:** [Lesson 8: Retrofitting Existing Models](./08-retrofitting-existing-models.md): where you learn to convert legacy coordinate-based models to IDFA compliance using the five-phase retrofitting process.
