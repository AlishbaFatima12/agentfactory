---
slug: /Business-Domain-Agent-Workflows/ai-transformation-ca-cpa-practice/tax-advisory-practice-lab
sidebar_position: 11
title: "Tax & Advisory Practice Lab"
description: "Build three complete Cowork workflows for tax and advisory practice — corporate tax computation under Pakistan's ITO 2001, M&A financial due diligence with DCF and comparable company analysis, and restructuring scenario modelling across three creditor recovery scenarios"
keywords:
  [
    "tax practice lab",
    "corporate tax computation",
    "Income Tax Ordinance 2001",
    "M&A due diligence",
    "DCF valuation",
    "comparable company analysis",
    "restructuring modelling",
    "creditor recovery",
    "Cowork workflow",
    "EBITDA normalisation",
    "working capital analysis",
    "CA/CPA exercises",
  ]
chapter: 30
lesson: 11
duration_minutes: 75

# HIDDEN SKILLS METADATA
skills:
  - name: "Build Corporate Tax Computation Workflow"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can direct Cowork through a complete corporate tax computation — accounting-to-taxable-income bridge, add-backs and deductions with statutory references, minimum tax check, and formal working paper production — for a specific jurisdiction"

  - name: "Execute M&A Financial Due Diligence Using Plugin Commands"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can run a financial due diligence process using /dcf and /comps commands, perform quality of earnings analysis and EBITDA normalisation, analyse working capital trends, and produce a due diligence report with recommended price adjustments"

  - name: "Model Restructuring Scenarios with Stakeholder Recovery Analysis"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can model three restructuring scenarios for a distressed company, produce creditor waterfall and stakeholder recovery tables for each, and make an informed recommendation on the preferred course of action"

learning_objectives:
  - objective: "Build a complete corporate tax computation workflow that bridges accounting profit to taxable income with statutory references, applies loss carry-forward rules, and identifies disclosure obligations"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces a formal tax computation working paper with each adjustment referenced to the applicable section of the Income Tax Ordinance 2001, correct minimum tax comparison, and identification of at least one arguable position requiring disclosure"

  - objective: "Execute an M&A financial due diligence process using Cowork plugin commands, performing quality of earnings analysis, EBITDA normalisation, DCF and comparable company valuation, and working capital analysis"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Student produces a due diligence report with normalised EBITDA bridge, DCF and comparables valuation range, working capital adjustment, and at least five management questions the due diligence team should ask to verify earnings sustainability"

  - objective: "Model three restructuring scenarios for a distressed company and produce a comparative stakeholder recovery analysis with a professional recommendation"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Student produces restructuring report showing three scenarios with creditor waterfall, stakeholder recovery percentages, timeline to resolution, and a recommended course of action supported by the quantitative analysis"

cognitive_load:
  new_concepts: 7
  concepts_list:
    - "Accounting-to-taxable-income bridge with statutory add-backs and deductions"
    - "Minimum tax comparison and final tax exclusions"
    - "Quality of earnings analysis and EBITDA normalisation"
    - "DCF and comparable company valuation using plugin commands"
    - "Working capital normalisation and cash conversion cycle analysis"
    - "Restructuring scenario modelling with creditor waterfall"
    - "Stakeholder recovery analysis across multiple scenarios"
  assessment: "7 concepts across 3 exercises at B1-B2 level. Students select 1-2 exercises to complete fully. Exercise 12 (tax computation) is the most accessible starting point for practitioners with tax experience. Exercises 13 and 14 (due diligence and restructuring) require comfort with financial analysis concepts."

differentiation:
  extension_for_advanced: "After completing Exercise 12, adapt the tax computation for a second jurisdiction (US Form 1120 or UK CT600). Compare the workflow steps and identify which adjustments are jurisdiction-specific versus universal. Draft a jurisdiction-agnostic tax computation skill that handles the common steps and delegates jurisdiction-specific rules to extension skills."
  remedial_for_struggling: "Start with Exercise 12 (tax computation). Focus on Steps 1-4 only — the accounting-to-taxable-income bridge and the tax liability calculation. These steps establish the core pattern of translating accounting data into a regulatory computation with statutory references. The remaining steps (advance tax credits, disclosure obligations) build on this foundation."

teaching_guide:
  lesson_type: "lab"
  session_group: 4
  session_title: "Tax & Advisory Practice Lab"
  key_points:
    - "Exercise 12 demonstrates that jurisdiction-specific tax computation requires the agent to apply rules that sometimes interact in non-obvious ways — the minimum tax versus regular tax comparison being the clearest example"
    - "Exercise 13 shows that DCF and comparable company valuations are the mechanical output — the professional judgment is in deciding which EBITDA items to normalise, what working capital is genuine versus inflated, and what questions to ask management"
    - "Exercise 14 proves that restructuring modelling requires running three parallel models and producing stakeholder recovery tables — mechanical work that takes hours manually and minutes with plugin commands — but the recommendation requires understanding creditor dynamics and management credibility"
    - "Across all three exercises, the pattern is consistent: the agent handles the computation; the CA/CPA provides the judgment that makes the computation meaningful"
  misconceptions:
    - "Students may assume tax computation is purely mechanical — Step 6 (disclosure obligations) shows that identifying arguable positions is professional judgment that no computation tool can make autonomously"
    - "Students may take the DCF output at face value — the professional skill is in questioning the inputs (growth rate, WACC, terminal value) and understanding which assumptions drive the valuation range"
    - "Students may think restructuring modelling produces a 'right answer' — the three scenarios in Steps 2-4 are what makes the recommendation in Step 7 informed, not what makes it automatic"
  discussion_prompts:
    - "In Exercise 12, the skill you create should encode your firm's risk appetite on arguable positions. What does 'risk appetite' mean in a tax computation context, and how would two different firms encode it differently?"
    - "In Exercise 13, the quality of earnings analysis identifies items to adjust out of EBITDA. How does the choice of adjustments affect the implied acquisition multiple — and whose interest does each adjustment serve?"
  teaching_tips:
    - "Exercise 12 is Pakistan-specific by design — encourage students from other jurisdictions to note the structural similarities to their own tax computation process and identify which steps are universal"
    - "For Exercise 13, emphasise that the /dcf and /comps commands produce technically correct outputs, but the inputs are where professional judgment lives — garbage in, garbage out applies to valuation models"
    - "Exercise 14 works well as a group discussion exercise — have students compare their recommendations across the three scenarios and debate the trade-offs between speed of resolution and creditor recovery"
  assessment_checks:
    - question: "In the Pakistan corporate tax computation, why is the minimum tax check (Section 113) important even when regular tax appears straightforward?"
      expected_response: "Because minimum tax applies when regular tax is lower than the minimum tax threshold — meaning a company with high add-backs could owe more tax than the regular computation suggests. The check ensures the computation captures the higher liability."
    - question: "In Exercise 13, what is the purpose of normalising EBITDA in a due diligence context?"
      expected_response: "Normalisation removes one-off items and non-recurring costs to reveal the sustainable earnings of the target company. The normalised EBITDA is the basis for valuation multiples — using reported EBITDA would undervalue or overvalue the company depending on whether one-off items inflated or deflated reported earnings."
    - question: "In Exercise 14, why is the professional recommendation in Step 7 the most important output, even though the quantitative modelling in Steps 2-4 is more time-consuming?"
      expected_response: "Because no model can make a restructuring recommendation without understanding the dynamics between creditors, management credibility, and operational viability. The three scenarios provide the quantitative foundation, but the recommendation requires judgment about which scenario is achievable given the specific circumstances."
---

# Tax & Advisory Practice Lab

> _"The value of a tax computation tool is not in the arithmetic — it is in knowing which positions are arguable and what the consequences are if the authority challenges them."_

In Lesson 10, you built workflows for accounting and financial reporting — bookkeeping, IFRS statements, month-end close automation, and consolidation. This practice lab shifts to the second CA/CPA domain: tax and non-assurance advisory. The exercises here are fundamentally different in character. Where accounting workflows follow standards that determine a single correct answer, tax and advisory workflows require you to make judgment calls about positions that are defensible but debatable.

These three exercises cover the full spectrum of Domain 2 practice: compliance (Exercise 12), transaction advisory (Exercise 13), and restructuring (Exercise 14). Each builds a complete Cowork workflow. Choose one or two to complete fully; review all three to understand the breadth of advisory workflows available to you.

:::info Lab Format
**Choose your path.** Select the exercise that matches your practice area:

- **Exercise 12** (45 min) — Tax compliance. Builds a full corporate tax computation for Pakistan under ITO 2001. Best for practitioners with tax compliance experience.
- **Exercise 13** (60 min) — Transaction advisory. Runs M&A financial due diligence with DCF and comparable company analysis. Best for corporate finance and advisory practitioners.
- **Exercise 14** (45 min) — Restructuring. Models three restructuring scenarios for a distressed company. Best for insolvency and advisory practitioners.

**Data files:** Each exercise provides its own hypothetical data inline. For additional entity profiles and practice data, see the [companion repository](https://github.com/panaversity/ca-cpa-practice-agents/tree/main/exercises).
:::

---

## Exercise 12: Corporate Tax Computation — Full Pakistan Jurisdiction Workflow (45 min)

**What you'll build:** A complete corporate income tax computation for a Pakistan-domiciled company under the Income Tax Ordinance 2001 and the Income Tax Rules 2002, producing a working paper ready for review and filing.

**Requirements:** Cowork, `finance@knowledge-work-plugins`, financial statements data (real or hypothetical below).

### Hypothetical Entity

A private limited company in the manufacturing sector. Key data:

- Accounting profit before tax: PKR 18,500,000
- Corporate tax rate: 29%
- Depreciation charged: PKR 4,200,000 (tax depreciation on the same assets: PKR 5,100,000)
- Entertainment expense: PKR 850,000 (partially disallowable)
- Donation: PKR 200,000 to an approved charitable institution
- Brought-forward tax losses: PKR 2,400,000
- Dividend income: PKR 600,000 from a Pakistan-listed company (subject to final tax)

### Step-by-Step Instructions

**1. Accounting to taxable income bridge.** Say:

```
I am computing corporate income tax for a Pakistani private limited
manufacturing company. Accounting profit before tax is PKR 18,500,000.
Work through the standard Pakistan income tax computation framework:
start with accounting profit, add back accounting depreciation
(PKR 4,200,000), deduct tax depreciation (PKR 5,100,000), identify
the entertainment expense disallowance, handle the donation deduction,
and exclude the dividend income that is subject to final tax. Show
each adjustment on a separate line with the applicable provision
of the Income Tax Ordinance 2001.
```

**2. Apply the entertainment expense disallowance.** Ask:

```
Under Section 21(l) of the Income Tax Ordinance 2001, entertainment
expenses are deductible only to the extent they satisfy the wholly
and exclusively for business test. Of the PKR 850,000 entertainment
expense, PKR 350,000 relates to a private dinner for the CEO's
family celebration. What is the disallowable amount and the
applicable provision? Add this to the tax computation.
```

**3. Handle the brought-forward losses.** Ask:

```
The company has brought-forward tax losses of PKR 2,400,000. Under
Section 56 and 57 of the Income Tax Ordinance 2001, confirm:
(a) what is the maximum period for loss carry-forward for a
manufacturing company?
(b) Are there any restrictions on set-off against current year
taxable income?
(c) Apply the set-off and show the residual losses carried forward.
```

**4. Compute the tax liability.** Ask:

```
Compute the tax liability at 29% on the adjusted taxable income.
Show: (a) Tax on taxable income, (b) Final tax on dividends
(assume 15% final tax on PKR 600,000 dividend income, already
withheld at source), (c) Total tax liability, (d) Any minimum tax
implications under Section 113 of the ITO — confirm whether regular
tax exceeds minimum tax.
```

**5. Identify advance tax and withholding credits.** Ask:

```
The company has paid advance tax of PKR 2,800,000 during the year
under Section 147, and has withholding tax credits of PKR 1,450,000
from customer receipts. Compute the net tax payable or refundable.
Show the balance of tax to pay with the due date for the annual
return under Pakistan tax law.
```

**6. Identify disclosure obligations.** Ask:

```
Are there any positions in this tax computation that require a
disclosure in the annual return — either because they represent
an aggressive interpretation of the law, or because a specific
schedule or annexure must be filed? List each disclosure obligation
with the relevant schedule reference.
```

**7. Produce the formal computation.** Ask:

```
Format the complete tax computation as a formal working paper at
/outputs/tax-computation.xlsx with: (1) Accounting profit per
audited accounts, (2) Adjustments for tax purposes (each on a
separate line with ITO section reference), (3) Adjusted taxable
income, (4) Tax computation, (5) Credits and payments,
(6) Net tax payable/refundable, (7) Brought-forward loss schedule.
```

**8. Create the jurisdiction skill.** Ask:

```
Draft the core instructions for a Pakistan corporate tax computation
skill. Cover: the six most common add-back items, the Section 113
minimum tax check, the final tax items that must be excluded from
regular tax, and the conditions that require escalation to a senior
tax professional.
```

**Check your work:** Step 6 is the most professionally important step. Identifying positions that are arguable — and that a tax authority might challenge — is the judgment that no tax computation tool can make autonomously. Your skill should encode your firm's risk appetite on arguable positions, not just the mechanical computation rules.

:::tip Global Perspective
**Pakistan (ITO 2001)**: This exercise uses Pakistan's Income Tax Ordinance 2001 as the worked example — the jurisdiction-specific provisions (Section 21(l) entertainment, Section 56-57 loss carry-forward, Section 113 minimum tax) illustrate the pattern.
**US (IRC / Form 1120)**: The same workflow applies with IRC provisions — Section 162 (trade or business expenses), Section 274 (entertainment), Section 172 (NOL carry-forward). The computation structure (accounting profit, add-backs, deductions, tax liability, credits) is universal.
**UK (CTA 2009 / CT600)**: UK corporate tax computation follows the same bridge from accounting to taxable profit. Key differences: capital allowances replace tax depreciation, and the corporation tax rate and payment dates differ.
:::

---

## Exercise 13: M&A Financial Due Diligence with Plugin Commands (60 min)

**What you'll build:** A financial due diligence process for a hypothetical acquisition, using `/dcf` and `/comps` commands to value the target and a structured framework to identify financial risks and adjustments.

**Requirements:** Cowork (Team or Enterprise), `financial-analysis@financial-services-plugins` and `finance@knowledge-work-plugins` installed, hypothetical target company financials (below).

### Target Company Profile

Use this context in every step: A Pakistan-based FMCG company, three years of audited financial history.

| Metric          | Year 1 | Year 2 | Year 3 |
| --------------- | ------ | ------ | ------ |
| Revenue (PKR M) | 450    | 490    | 540    |
| EBITDA (PKR M)  | 58     | 67     | 82     |

Net debt: PKR 35M. Management projects PKR 620M revenue and PKR 105M EBITDA in Year 4. Acquisition price being discussed: PKR 650M.

### Step-by-Step Instructions

**1. Quality of earnings assessment.** Say:

```
I am performing financial due diligence on a Pakistan FMCG target.
Three years of financials are provided. Perform a quality of earnings
analysis: (a) Calculate revenue CAGR and EBITDA CAGR;
(b) Identify the EBITDA margin expansion from Year 1 to Year 3 and
explain what could drive this; (c) List five questions a due diligence
team should ask management to verify whether the EBITDA improvement
is sustainable or whether it includes one-off items.
```

**2. Normalise EBITDA.** Say:

```
Management claims reported EBITDA includes the following items that
should be added back for normalised EBITDA: (a) PKR 8M one-off legal
settlement in Y2; (b) PKR 4M above-market owner salary in all three
years (market rate PKR 2M); (c) PKR 6M in pre-acquisition professional
fees in Y3. Compute normalised EBITDA for each year after these
adjustments. Calculate the multiple the asking price of PKR 650M
implies on both reported and normalised Y3 EBITDA.
```

**3. Run the DCF valuation.**

```
/dcf target-company
```

When prompted for inputs, provide: Revenue Y4E PKR 620M, EBITDA margin 16.9% (PKR 105M), CAPEX 3% of revenue, tax rate 29%, terminal growth rate 4%, WACC 14% (reflecting Pakistan risk premium). Ask:

```
At what revenue growth rate does the DCF valuation equal the PKR 650M
asking price? What EBITDA margin assumption is embedded in that
growth scenario?
```

**4. Run comparable company analysis.**

```
/comps fmcg-pakistan
```

Ask:

```
Based on comparable FMCG companies in Pakistan and comparable emerging
market FMCG businesses, what EV/EBITDA multiple range would you apply?
How does the PKR 650M asking price compare on normalised Y3 EBITDA
of PKR 84M?
```

**5. Working capital and cash analysis.** Say:

```
Perform a working capital analysis. The target's debtor days have
moved from 42 to 67 days over three years, and inventory days from
38 to 52 days. Creditor days have remained stable at 45 days.
Calculate the cash conversion cycle at each year-end. Identify the
working capital investment required to support Y4 revenue. Adjust
the PKR 650M enterprise value for the normalised working capital
requirement.
```

**6. Tax due diligence flags.** Say:

```
Identify the five most common tax due diligence risk areas for a
Pakistan FMCG target. For each: what information should be reviewed?
What would constitute a red flag? What is the potential liability if
the risk materialises? Produce a tax due diligence checklist at
/working-papers/tax-dd-checklist.docx.
```

**7. Produce the due diligence report.** Say:

```
Produce a financial due diligence report at /outputs/dd-report.docx
with: (1) Executive summary — key findings and recommended price
adjustments; (2) Quality of earnings — normalised EBITDA bridge;
(3) Valuation — DCF and comparables; (4) Working capital — cash
conversion cycle trend and normalised requirement; (5) Tax — key
risk areas; (6) Key open items — questions to be answered before
closing. Maximum 8 pages.
```

**8. Create the DD skill.** Ask:

```
Draft a Cowork skill for a financial due diligence agent. Include: the
standard quality of earnings adjustments to always test, the working
capital normalisation methodology, the tax risk checklist items,
and the three findings that would always cause a deal recommendation
to be 'do not proceed'.
```

**Check your work:** The DCF and comps commands produce technically correct valuations. The professional judgment is in Steps 1, 2, and 5 — deciding which items to adjust out of EBITDA, what working capital is normal versus inflated, and how to interpret the cash conversion cycle trend. These are the findings that move the negotiated price. The agent cannot make these judgments without your instruction; but once you provide them, it can model their financial consequences quickly and completely.

---

## Exercise 14: Restructuring Scenario Modelling (45 min)

**What you'll build:** Financial projections across three restructuring scenarios for a distressed company, with stakeholder recovery analysis and a professional recommendation.

**Requirements:** Cowork, `financial-analysis@financial-services-plugins` installed.

### Distressed Entity Profile

A Pakistan manufacturing company in financial difficulty:

- Total debt: PKR 180M (PKR 80M bank, PKR 100M trade creditors)
- EBITDA: PKR 22M
- Annual interest cost: PKR 24M (company is loss-making after interest)
- Going concern doubt exists

Three scenarios under consideration:

1. **Consensual restructuring** — banks accept 30% haircut, creditors accept 18-month payment terms
2. **Voluntary arrangement** — formal creditor moratorium for 24 months, 40% haircut on unsecured creditors
3. **Asset sale** — EBITDA-generating operations sold to a strategic buyer, remaining entity wound down

### Step-by-Step Instructions

**1. Current state analysis.** Say:

```
Prepare a financial stress analysis. Current EBITDA is PKR 22M,
annual interest is PKR 24M. Calculate: interest coverage ratio,
net debt/EBITDA, and the cash shortfall per year if trading continues
with current debt structure. How many months of EBITDA is needed
to service debt at current levels?
```

**2. Model Scenario 1: Consensual bank restructuring.**

```
/lbo restructuring-scenario-1
```

Provide inputs: restructured debt of PKR 56M (PKR 80M x 70%), interest rate 12%, 5-year amortisation, EBITDA maintained at PKR 22M growing 5% annually, trade creditors on standard 18-month deferred terms.

Ask:

```
Show the debt service coverage ratio (DSCR) for each year of the
restructuring. At what EBITDA does the company breach a DSCR
covenant of 1.25x? What is the probability this restructuring
is sustainable?
```

**3. Model Scenario 2: Formal voluntary arrangement.** Say:

```
Under the voluntary arrangement scenario: unsecured trade creditors
(PKR 100M) receive 60 cents in the dollar (PKR 60M total payment
over 24 months). Bank debt remains at face value but is rescheduled.
Model the cash flows and show: (a) Total creditor recovery amounts;
(b) Cash required over 24 months; (c) Whether EBITDA is sufficient
to fund the arrangement without additional liquidity;
(d) The net present value of creditor recoveries at a 15% discount
rate.
```

**4. Model Scenario 3: Asset sale and wind-down.** Say:

```
An FMCG strategic buyer has indicated interest in the operating
assets at 5x EBITDA. Calculate the gross sale proceeds. Show the
application of proceeds in priority order: secured creditors first,
then unsecured. Produce a creditor waterfall showing recovery rates
for each class. Compare recovery rates across all three scenarios
in a summary table.
```

**5. Stakeholder analysis.** Say:

```
For each scenario, produce a stakeholder outcome table showing:
the bank's recovery (PKR and % of face value), trade creditors'
recovery (PKR and %), and equity holders' recovery (PKR and %).
Add a column for 'timeline to resolution' — estimated months from
today. Which scenario is best for each stakeholder class?
```

**6. Professional judgment overlay.** Ask:

```
What are the three factors that are most likely to cause Scenario 1
(consensual restructuring) to fail after it is agreed? What early
warning indicators should the monitoring CA/CPA watch for during
the restructuring period?
```

**7. Produce the restructuring report.** Say:

```
Produce a restructuring options report at
/outputs/restructuring-report.docx: (1) Executive summary —
recommendation; (2) Current financial position; (3) Scenario 1 —
analysis and creditor outcomes; (4) Scenario 2 — analysis and
creditor outcomes; (5) Scenario 3 — analysis and creditor outcomes;
(6) Comparative summary table; (7) Recommended course of action
with rationale.
```

**Check your work:** The modelling in Steps 2-4 takes hours manually and minutes with the `/lbo` command. The professional value-add is in Steps 6 and 7: identifying what causes restructurings to fail and making a recommendation. No model can make a restructuring recommendation without understanding the dynamics between creditors, the management team's credibility, and the operational viability of the business. The recommendation in Step 7 requires your judgment. The three scenarios in Steps 2-4 are what makes your judgment informed.

:::tip Global Perspective
**Pakistan**: Restructuring in Pakistan follows the Companies Act 2017 (schemes of arrangement) and SECP regulations. The exercise structure applies regardless of jurisdiction.
**US (Chapter 11)**: The three-scenario framework maps directly — consensual out-of-court restructuring, Chapter 11 reorganisation, and Section 363 asset sale. Creditor waterfall priority (secured, unsecured, equity) follows the same logic.
**UK (Insolvency Act 1986)**: Company Voluntary Arrangement (CVA), administration, and pre-pack administration mirror the three scenarios. The Insolvency Practitioner's role is analogous to the monitoring CA/CPA in this exercise.
:::

---

## Try With AI

Use these prompts in Cowork or your preferred AI assistant to deepen your understanding of the tax and advisory workflows.

### Prompt 1: Jurisdiction Translation

```
I completed the Pakistan corporate tax computation exercise using
the Income Tax Ordinance 2001. Now I need to understand how the
same computation works in [MY JURISDICTION — e.g., US, UK, UAE,
India, South Africa].

For each step in the Pakistan computation, identify:
1. The equivalent provision in my jurisdiction's tax law
2. Any step that does not have a direct equivalent (and why)
3. Any additional step my jurisdiction requires that Pakistan
   does not

Produce a side-by-side comparison table showing:
Pakistan provision | My jurisdiction's equivalent | Key difference
```

**What you are learning:** Tax computation structure is remarkably consistent across jurisdictions — accounting profit, add-backs, deductions, loss relief, credits, minimum tax check. The specific provisions differ, but the workflow pattern transfers. By mapping your jurisdiction to the Pakistan worked example, you build a jurisdiction-specific mental model that makes every tax computation exercise in this chapter applicable to your practice.

### Prompt 2: Due Diligence Red Flag Identification

```
I am reviewing a target company for acquisition. The following
financial trends have emerged from three years of data:
- Revenue growing at [X]% CAGR
- EBITDA margin expanding from [Y]% to [Z]%
- Debtor days increasing from [A] to [B] days
- Inventory days increasing from [C] to [D] days

For each trend, explain:
1. What could legitimately drive this trend (positive explanation)
2. What could artificially inflate these numbers (red flag)
3. What specific documents or data I should request to
   distinguish between the two explanations

Then rank the trends from most to least concerning from a due
diligence perspective and explain your ranking.
```

**What you are learning:** Financial due diligence is fundamentally about distinguishing genuine business performance from artificial or unsustainable performance. Every positive financial trend has both a legitimate and an artificial explanation. The professional skill is in knowing which questions to ask to distinguish between them — and which documents would provide the answer.

### Prompt 3: Restructuring Feasibility Assessment

```
A [DESCRIBE ENTITY — industry, size, geography] is in financial
difficulty. Current EBITDA is [X], total debt is [Y], and annual
interest cost is [Z].

Model three scenarios:
1. Consensual restructuring with [TERMS]
2. Formal insolvency process under [MY JURISDICTION'S LAW]
3. Asset sale to a strategic buyer at [MULTIPLE] x EBITDA

For each scenario, calculate:
- Creditor recovery rates by class (secured, unsecured, equity)
- Timeline to resolution
- Key risks that could cause the scenario to fail

Then recommend which scenario I should present to stakeholders
first and explain your reasoning — not just which is best
numerically, but which is most achievable given the likely
dynamics between the parties.
```

**What you are learning:** Restructuring recommendations are not determined by the numbers alone. The achievability of a scenario depends on creditor relationships, management credibility, and operational complexity — factors that no financial model captures. The model tells you what is possible; your judgment tells you what is achievable. This prompt forces you to articulate the difference.

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 12: Assurance Practice Lab →](./12-assurance-practice-lab.md)
