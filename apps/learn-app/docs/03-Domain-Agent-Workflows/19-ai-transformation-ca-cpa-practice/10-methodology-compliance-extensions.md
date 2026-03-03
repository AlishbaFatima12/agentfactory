---
sidebar_position: 10
title: "Building Methodology and Compliance Extensions"
description: "Build three domain extensions that encode audit methodology standards, client-specific entity knowledge, and regulatory compliance calendars — completing the five-extension architecture that transforms generic finance plugins into a practice-ready CA/CPA agent"
keywords:
  [
    "audit methodology",
    "materiality calculation",
    "sampling methodology",
    "client entity knowledge",
    "compliance calendar",
    "regulatory obligations",
    "SKILL.md extension",
    "Method A interview",
    "CA/CPA domain agent",
    "escalation rules",
  ]
chapter: 19
lesson: 10
duration_minutes: 45

# HIDDEN SKILLS METADATA
skills:
  - name: "Build Audit Methodology Extensions"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can write a SKILL.md extension that encodes audit methodology standards including materiality calculation, sampling requirements, working paper structure, and escalation conditions using the 'When [condition], [action]' format"

  - name: "Build Client Entity Knowledge Extensions"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can write a SKILL.md extension that encodes client-specific business model, seasonal patterns, related party relationships, and risk areas so that agent-generated analysis surfaces entity-relevant considerations"

  - name: "Build Regulatory Compliance Calendar Extensions"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can write a SKILL.md extension that encodes regulatory filing deadlines, lead times, information checklists, and penalty provisions — enabling automated compliance deadline monitoring"

  - name: "Apply Method A Interview Framework to Extension Building"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can use the Method A interview framework from Chapter 16 to systematically extract tacit professional knowledge and convert it into structured SKILL.md instructions"

learning_objectives:
  - objective: "Write an audit methodology SKILL.md extension that encodes materiality calculation, sampling requirements, documentation standards, and escalation conditions for a specific firm"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces an audit methodology extension with at least five standing instructions covering materiality, sampling, documentation, and escalation — reviewed against a checklist of required components"

  - objective: "Write a client entity SKILL.md extension that encodes business model, seasonal patterns, and risk areas so the agent surfaces entity-specific considerations in every analysis"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces a client entity extension with seasonal adjustment instructions, related party flagging, and at least one reporting preference instruction"

  - objective: "Write a regulatory compliance calendar SKILL.md extension that encodes filing deadlines, lead times, and penalty provisions — and explain how this extension enables automated compliance monitoring when combined with Cowork scheduled tasks"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces a compliance calendar extension with at least three return types, their deadlines, lead times, and penalty calculations"

  - objective: "Apply the Method A interview framework from Chapter 16 to extract tacit professional knowledge and convert it into extension instructions"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student demonstrates the Method A process by identifying three common errors in their practice area, converting each into a SKILL.md instruction, and asking Claude to identify gaps in their coverage"

cognitive_load:
  new_concepts: 7
  concepts_list:
    - "Audit methodology encoding — materiality benchmarks, sampling rules, documentation standards"
    - "Escalation conditions in audit extensions — when the agent must stop and flag for partner review"
    - "Client entity knowledge encoding — business model, seasonality, related parties, risk areas"
    - "One extension per client — the client-specific knowledge pattern"
    - "Regulatory compliance calendar encoding — deadlines, lead times, information checklists, penalties"
    - "Compliance monitoring automation — combining calendar extensions with Cowork scheduled tasks"
    - "Method A interview framework application — systematic extraction of tacit knowledge for extensions"
  assessment: "7 concepts at B1 level — within the 7-10 cognitive limit for this tier. Students have built two extensions in L09 and understand the 'When [condition], [action]' format. This lesson applies the same pattern to three new extension types and introduces the Method A connection for systematic knowledge extraction."

differentiation:
  extension_for_advanced: "Design a compliance monitoring workflow that combines the compliance calendar extension with Cowork scheduled tasks: the agent runs weekly, checks each upcoming deadline against the calendar, confirms the required information is available, and generates a prioritised preparation alert. Write the scheduled task specification and the alert template."
  remedial_for_struggling: "Focus on the client entity extension — it is the most intuitive because every practitioner already carries this knowledge mentally. Write five things you know about your most important client that a generic AI tool would not know. Convert each into a SKILL.md instruction. That is your first client entity extension."

teaching_guide:
  lesson_type: "core"
  session_group: 3
  session_title: "Domain Extensions — Methodology, Entity, and Compliance"
  key_points:
    - "An audit methodology extension encodes your firm's specific standards — materiality calculation, sampling minimums, documentation requirements, and escalation conditions — so every audit programme the agent generates follows your firm's approach"
    - "A client entity extension encodes one client's business model, seasonal patterns, related party relationships, and risk areas — the agent applies this context to every analysis it produces for that client"
    - "A compliance calendar extension encodes every regulatory obligation by entity type — combined with Cowork scheduled tasks, this enables automated deadline monitoring"
    - "The Method A interview framework from Chapter 16 is the systematic process for extracting the tacit knowledge that these extensions encode"
  misconceptions:
    - "Students may think audit methodology extensions replace professional judgment — they encode the firm's standards so the agent applies them consistently, but the engagement partner still makes the final judgment calls"
    - "Students may try to build one massive client extension covering all clients — each significant client should have its own extension, because entity-specific knowledge varies"
    - "Students may underestimate the value of the compliance calendar — in practice, missed deadlines are among the highest-risk events in CA/CPA practice, and this extension directly addresses that risk"
  discussion_prompts:
    - "Think about the last audit where a junior team member calculated materiality differently from your firm's methodology. How much time did the rework take? That is the problem the audit methodology extension solves — encoding the methodology once so every computation follows it."
    - "Consider your top three clients. What does your team know about each one that is not written down anywhere — seasonal patterns, the CFO's reporting preferences, known risk areas? That tacit knowledge is what client entity extensions encode."
  teaching_tips:
    - "The Method A connection is critical — students learned knowledge extraction in Chapter 16 and this lesson shows them applying it to their own practice area. Draw the connection explicitly."
    - "Exercise 7 is the most important hands-on activity in the extension-building sequence. Encourage students to choose the extension type most relevant to their practice."
    - "The compliance calendar extension has immediate practical value — students often report that this is the extension they implement first after completing the chapter"
  assessment_checks:
    - question: "What are the four components of an audit methodology extension?"
      expected_response: "Materiality calculation methodology (benchmark, percentage, rationale), minimum sample sizes by population and risk, required working paper structure and sign-off requirements, and escalation conditions (fraud indicators, going concern doubt, significant judgment areas)."
    - question: "Why should each significant client have its own entity extension?"
      expected_response: "Because entity-specific knowledge varies between clients — seasonal patterns, related party relationships, risk areas, and CFO reporting preferences are unique to each entity. A single combined extension would create false matches where one client's context is applied to another client's analysis."
    - question: "How does the compliance calendar extension work with Cowork scheduled tasks?"
      expected_response: "The compliance calendar encodes every regulatory obligation — deadlines, lead times, and information checklists. Combined with Cowork's scheduled task capability, the agent runs weekly, checks each upcoming deadline, confirms the required information is available, and alerts the CA/CPA when preparation needs to begin. This turns compliance from a manual calendar-checking process into an automated monitoring system."
---

# Building Methodology and Compliance Extensions

> _"A CA/CPA who can specify the conditions their agent might get wrong is the one who will build an agent that does not get them wrong."_

In Lesson 9, you built two extensions that close the institutional knowledge gap for jurisdiction and entity structure — tax rules that the agent applies automatically and account codes that eliminate manual recoding. Those extensions address _what_ the agent computes and _how_ it labels the results. This lesson addresses three equally critical dimensions: _how_ the agent applies your firm's professional methodology, _what_ it knows about each specific client, and _when_ regulatory obligations fall due.

Together, these five extensions — jurisdiction tax, chart of accounts, audit methodology, client entity, and compliance calendar — form the complete extension architecture that transforms generic finance plugins into a practice-ready CA/CPA agent.

## Extension 3: Audit Methodology Standards

**What the generic plugin lacks.** The `/sox-testing` command produces a generic control testing programme. It does not apply your firm's specific audit methodology, materiality calculation approach, sampling methodology, or quality review requirements.

**What the extension adds.** An audit methodology SKILL.md that encodes your firm's standards: how materiality is calculated, what minimum sample sizes apply to different populations, what documentation is required in every audit file, and what conditions require escalation to the engagement partner.

### Pakistan Worked Example: Key SKILL.md Instructions

```yaml
---
name: audit-methodology-firm-standards
description: |
  Audit methodology extension encoding firm-specific standards.
  Use when generating audit programmes, calculating materiality,
  determining sample sizes, or preparing audit documentation.
  Apply these standards to all audit engagements unless the
  engagement letter specifies an alternative methodology.
license: Apache-2.0
metadata:
  author: panaversity
  version: "1.0"
  chapter: "19"
  domain: "3"
---
```

```markdown
# Audit Methodology — Firm Standards

## Materiality Calculation

When calculating planning materiality for a **for-profit entity**,
use 1% of total revenue as the benchmark. Document the rationale:
"Revenue selected as benchmark because it is the most stable measure
of entity size and the metric most relevant to users of the financial
statements."

When calculating planning materiality for a **not-for-profit entity**,
use 1-2% of total expenses as the benchmark. Document the rationale
referencing the entity's primary accountability to donors and
grant-making bodies.

When calculating performance materiality, apply 75% of planning
materiality. If fraud risk indicators are present, reduce to 50%.

When calculating the clearly trivial threshold, apply 5% of
planning materiality. Misstatements below this threshold need
not be accumulated unless they are qualitatively significant.

## Sampling Methodology

When selecting a sample from a population of **fewer than 50 items**,
test 100% of the population. Do not apply sampling.

When selecting a sample from a population of **50-250 items**,
select a minimum of 25 items using systematic selection
(every Nth item, random start point).

When selecting a sample from a population of **more than 250 items**,
apply statistical sampling with a confidence level of 95% and
expected error rate of 1%. Document the sample size calculation.

When the population contains items exceeding performance materiality
individually, extract all such items for 100% testing as "key items"
before selecting the remaining sample.

## Working Paper Documentation

When completing any audit section, the working paper MUST contain:

1. Objective — what the procedure was designed to test
2. Source — the population or document set examined
3. Procedure — exactly what was done (not "reviewed" — specific steps)
4. Results — findings, including nil findings ("no exceptions noted")
5. Conclusion — whether the objective was met
6. Preparer sign-off — initials and date
7. Reviewer sign-off — engagement manager initials and date

When a working paper is missing any of these seven elements, flag
it as INCOMPLETE and do not mark the section as finished.

## Escalation Conditions

When any of the following conditions are detected, STOP and
escalate to the engagement partner immediately:

- Indicators of fraud (unexplained journal entries, management override)
- Going concern doubt (inability to meet obligations within 12 months)
- Significant related party transactions not previously disclosed
- Aggregate misstatements exceeding 50% of planning materiality
- Management refusal to provide requested information or representations

Do not attempt to resolve these conditions autonomously. Document
the condition and the date it was identified, and flag for partner
review within 24 hours.
```

**Output:**

Every audit programme the agent generates now follows the firm's materiality methodology, applies the correct sampling approach, structures working papers with all seven required elements, and escalates critical conditions rather than resolving them autonomously.

## Extension 4: Client-Specific Entity Knowledge

**What the generic plugin lacks.** The FP&A and reporting commands produce analyses that are structurally correct but contextually generic. They do not know that your client's revenue is seasonal with Q4 representing 40% of annual revenue, that a specific related party transaction occurred during the year, or that a covenant breach risk exists at a specific EBITDA level.

**What the extension adds.** A client entity SKILL.md — one per significant client — that encodes the client's business model, seasonal patterns, key relationships, and known risk areas. The agent applies this context to every piece of analysis it produces, surfacing relevant client-specific considerations rather than generic observations.

### Pakistan Worked Example: Karachi Textile Exports Ltd

```yaml
---
name: client-karachi-textile-exports
description: |
  Client entity extension for Karachi Textile Exports Ltd.
  Use when processing any financial data, analysis, or reporting
  for this entity. Apply seasonal adjustments, flag related party
  transactions, and surface known risk areas in all outputs.
license: Apache-2.0
metadata:
  author: panaversity
  version: "1.0"
  chapter: "19"
  client: "Karachi Textile Exports Ltd"
---
```

```markdown
# Client Entity — Karachi Textile Exports Ltd

## Business Model

Karachi Textile Exports Ltd is a vertically integrated textile
manufacturer and exporter based in Karachi, Pakistan. Revenue
streams: 70% export (primarily EU and US buyers), 30% domestic.
Primary product: finished garments and home textiles. The entity
operates three production facilities with approximately 2,500
employees.

## Seasonal Patterns

When analysing revenue trends, apply the following seasonal
adjustment: Q1 (Jul-Sep) = 15%, Q2 (Oct-Dec) = 35%,
Q3 (Jan-Mar) = 30%, Q4 (Apr-Jun) = 20%. The Q2 concentration
reflects pre-Christmas export orders placed by EU/US buyers.

When performing variance analysis, compare current period to the
same period last year — not to a simple quarterly average. A Q2
revenue of PKR 180 million against a quarterly average of PKR 125
million is NOT an anomaly — it reflects the seasonal pattern.

## Related Party Relationships

When processing transactions with **Karachi Spinning Mills Ltd**
(entity owned by the same family group), flag ALL transactions
for related party disclosure review. The intercompany pricing
of yarn purchases must be benchmarked against market rates.

When the total of related party transactions in any quarter
exceeds PKR 50 million, generate a related party disclosure
note draft and flag for partner review.

## Known Risk Areas

When analysing accounts receivable, flag any EU buyer balance
exceeding PKR 25 million and outstanding beyond 90 days.
The entity has experienced two bad debt write-offs from EU
buyers in the past three years.

When analysing inventory, flag raw cotton inventory exceeding
45 days of production requirements. The entity's working capital
facility has a covenant requiring inventory days below 50.
Approaching this threshold is an EARLY WARNING indicator.

## Reporting Preferences

When preparing reports for the CFO, use PKR as the primary
currency with USD equivalent in brackets for export-related
figures. The CFO specifically requests variance explanations
for any line item deviating more than 10% from budget.

When preparing board presentations, include a one-page
executive summary with: revenue by segment (export/domestic),
gross margin trend (3-quarter rolling), and working capital
days (receivables + inventory - payables).
```

**Output:**

Every analysis the agent produces for Karachi Textile Exports Ltd now reflects the seasonal revenue pattern, flags related party transactions for disclosure review, monitors covenant-related risk areas, and formats output to the CFO's specific preferences.

:::info One Extension Per Client
Each significant client should have its own entity extension. Do not combine multiple clients into a single extension — entity-specific knowledge varies, and a combined extension risks applying one client's seasonal patterns or risk areas to another client's analysis. For a firm with 20 significant clients, that means 20 client entity extensions. The initial investment is substantial; the ongoing value is that the agent applies the right context to the right client automatically.
:::

## Extension 5: Regulatory Compliance Calendar

**What the generic plugin lacks.** The compliance monitoring capabilities do not know which specific regulatory obligations apply to your clients, when they fall due, or what the consequences of non-compliance are.

**What the extension adds.** A compliance calendar SKILL.md that encodes every regulatory obligation for each client type — filing deadlines, return formats, penalty provisions, and the checklist of information needed to prepare each filing. Combined with Cowork's scheduled task capability, this extension enables automated compliance deadline monitoring.

### Pakistan Worked Example: Key SKILL.md Instructions

```yaml
---
name: compliance-calendar-pakistan
description: |
  Regulatory compliance calendar for Pakistan-based entities.
  Use when checking filing deadlines, preparing compliance
  checklists, or monitoring upcoming regulatory obligations.
  Activate weekly to generate deadline alerts for all active clients.
license: Apache-2.0
metadata:
  author: panaversity
  version: "1.0"
  chapter: "19"
  jurisdiction: "Pakistan"
---
```

```markdown
# Regulatory Compliance Calendar — Pakistan

## Income Tax Returns (FBR)

### Corporate Returns (Section 114, ITO 2001)

**Deadline:** September 30 of the year following the tax year.
**Lead time required:** 30 working days before deadline (begin
preparation by mid-August at latest).

**Information checklist:**

- Finalised audited financial statements
- Tax depreciation schedule
- Details of all withholding tax credits (certificates)
- Related party transaction disclosures
- Any tax losses carried forward from prior years

**Penalty for late filing:** PKR 40,000 or 0.1% of the tax
payable for each day of default, whichever is higher (Section 182).

When the current date is 30 working days before September 30
and the audited financials for a corporate client are not yet
available, generate a HIGH PRIORITY alert: "Corporate tax return
preparation cannot begin — audited financials outstanding."

### Withholding Tax Statements (Section 165)

**Deadline:** 15th day of the month following the quarter-end.
**Lead time required:** 5 working days.

**Information checklist:**

- All payment records for the quarter
- Withholding tax deduction certificates issued
- Reconciliation of withholding tax deducted vs deposited

**Penalty for late filing:** PKR 2,500 per day of default.

## SECP Filings (Companies Act 2017)

### Annual Return (Form A)

**Deadline:** 30 days after the Annual General Meeting.
**Lead time required:** 10 working days.

**Information checklist:**

- Shareholding pattern as at financial year-end
- Director details and changes during the year
- Registered office details

**Penalty for late filing:** PKR 500 per day of default
(Section 476, Companies Act 2017).

### Change of Directors (Form 29)

**Deadline:** 15 days of the change.
**Lead time required:** Immediate upon board resolution.

## SBP Reporting (State Bank of Pakistan)

### Foreign Exchange Returns

**Deadline:** Monthly, within 15 days of month-end (for
entities with foreign exchange transactions).
**Lead time required:** 5 working days.

**Information checklist:**

- All inward and outward remittances during the month
- Export proceeds realisation certificates
- Import payment documentation

## Escalation

When any filing deadline is within 10 working days and the
information checklist shows items outstanding, escalate to
the engagement manager with a list of missing items and the
penalty exposure calculation.

When a filing deadline has been MISSED, immediately escalate
to the engagement partner with: the return type, the deadline
that was missed, the number of days late, the calculated
penalty to date, and the recommended remediation action.
```

**Output:**

The compliance calendar extension, when combined with a weekly Cowork scheduled task, transforms compliance monitoring from a manual process — checking calendars, sending reminders, tracking deadlines — into an automated system that alerts the CA/CPA when preparation needs to begin and escalates when deadlines are at risk.

:::tip Global Perspective
**US:** Replace FBR/SECP/SBP with IRS, SEC, and state agencies. Key deadlines: Form 1120 (April 15 or extension to October 15), quarterly estimated taxes (April 15, June 15, September 15, January 15), Form 10-K (60 days after fiscal year-end for large accelerated filers).

**UK:** Replace with HMRC and Companies House. Key deadlines: Corporation Tax return (12 months after accounting period), Corporation Tax payment (9 months and 1 day after period-end), Annual Accounts at Companies House (9 months after year-end for private, 6 months for public), Confirmation Statement (annually from incorporation date).

**IFRS jurisdictions generally:** The compliance calendar pattern is universal — only the specific returns, deadlines, and penalty provisions change by jurisdiction.
:::

## Building Extensions with the Method A Interview Framework

In Chapter 16, you learned the Method A interview framework — a structured process for extracting tacit professional knowledge and converting it into SKILL.md instructions. That framework applies directly to building the five extensions covered in Lessons 9 and 10.

The three core Method A questions for extension building:

1. **What are the three most common errors junior staff make in this area?** Each error reveals institutional knowledge that the extension should encode — the rules that experienced practitioners apply automatically but juniors miss.

2. **What questions do you always ask when reviewing this type of work?** Each question reveals a quality check that the extension should perform — the validation steps that catch problems before they reach the client.

3. **What conditions would always cause you to escalate or reject the work?** Each condition reveals an escalation rule — the boundaries of autonomous agent operation where professional judgment must intervene.

Converting Method A answers to extension instructions follows a direct pattern:

| Method A Answer                                                                             | SKILL.md Instruction                                                                                                                                                        |
| ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Juniors always forget to check the withholding tax rate for non-filers"                    | When processing payments to a non-filer, apply the non-filer withholding rate (double the filer rate). Flag any payment to a non-filer exceeding PKR 100,000 for review.    |
| "I always check whether the client's inventory days are approaching the covenant threshold" | When analysing inventory, calculate inventory days outstanding. If the result exceeds 40 days (approaching the 50-day covenant threshold), generate an EARLY WARNING alert. |
| "If I see unexplained journal entries above materiality, I escalate immediately"            | When an unexplained journal entry exceeds performance materiality, STOP and escalate to the engagement partner. Do not reclassify or adjust autonomously.                   |

### Practice Exercise 7: Building a CA/CPA Domain Extension (35 min)

**What you'll build:** One complete domain extension using the Method A interview framework.

**Requirements:** Claude (any interface). Knowledge of your practice area's specific requirements. For reference implementations, see the five extension SKILL.md files in the [companion repository](https://github.com/panaversity/ca-cpa-domain-agents) under `skills/`.

1. **Choose one** of the five extensions from Lessons 9-10 that is most relevant to your practice. Answer these questions in writing (200 words minimum):
   - What are the three most common errors junior staff make in this area?
   - What questions do you always ask when reviewing this type of work?
   - What conditions would always cause you to escalate or reject the work?

2. **Convert each answer** into SKILL.md instructions using the "When [condition], [action]" format. Aim for at least five instructions from your Method A answers.

3. **Ask Claude to review your instructions:**

```
Review these SKILL.md instructions. Are there gaps —
conditions I have not addressed, edge cases that would
cause the agent to make a wrong decision? Suggest three
additional instructions that would make this SKILL.md
more robust.
```

4. **Identify three test scenarios** that would verify your extension works correctly. For each scenario, describe: the input, what the correct agent output would be, and what an incorrect output would look like.

5. **Write the description field** for the SKILL.md frontmatter — the trigger language that tells the agent when to activate this skill. Make it specific enough that the agent activates when relevant and does not activate when not.

**Check your work:** Your extension should have at least eight instructions (five from your Method A answers plus three from Claude's gap analysis), three test scenarios, and a description field that clearly defines activation scope. The key learning: the quality of a CA/CPA domain agent is determined by the quality of the SKILL.md that encodes professional judgment. The instructions you wrote in Step 2 are the difference between an agent that applies your professional standards and one that applies generic ones. Step 3 — asking Claude to identify gaps — is the most important step.

**Target time:** 35 minutes.

## The Complete Extension Architecture

With all five extensions built, here is the full architecture that transforms generic plugins into a practice-ready CA/CPA agent:

| Extension              | Scope                       | What It Encodes                                         | Lesson |
| ---------------------- | --------------------------- | ------------------------------------------------------- | ------ |
| 1. Jurisdiction Tax    | All clients in jurisdiction | Tax rates, deadlines, penalties, filing formats         | L09    |
| 2. Chart of Accounts   | One organisation            | Account codes, documentation rules, restricted accounts | L09    |
| 3. Audit Methodology   | All engagements at firm     | Materiality, sampling, documentation, escalation        | L10    |
| 4. Client Entity       | One client                  | Business model, seasonality, risks, preferences         | L10    |
| 5. Compliance Calendar | All clients by type         | Filing obligations, lead times, penalty matrix          | L10    |

Extensions 1, 3, and 5 apply broadly (jurisdiction-wide or firm-wide). Extensions 2 and 4 apply to individual entities. Together, they ensure that every output the agent produces reflects your jurisdiction's rules, your firm's methodology, your client's context, and your regulatory obligations.

## Try With AI

Use these prompts in Claude or your preferred AI assistant to practise building methodology, entity, and compliance extensions.

### Prompt 1: Audit Methodology Gap Analysis

```
I am an audit engagement partner at a mid-size CA/CPA firm.
Our current audit methodology for materiality calculation uses
[YOUR BENCHMARK — e.g., 1% of revenue, 5% of profit before tax,
2% of total assets].

Review our materiality approach and:
1. List three scenarios where this benchmark would produce
   an inappropriate materiality level (too high or too low)
2. For each scenario, suggest an alternative benchmark and explain
   why it better serves the users of the financial statements
3. Draft two SKILL.md escalation conditions — situations where the
   agent should not calculate materiality autonomously but should
   flag for partner judgment

Use ISA 320 (Materiality in Planning and Performing an Audit)
as the reference standard.
```

**What you are learning:** Materiality calculation is one of the highest-judgment areas in audit. By stress-testing your benchmark against scenarios where it fails, you identify the edge cases that your audit methodology extension must handle — and the escalation rules that prevent the agent from making autonomous materiality decisions in ambiguous situations.

### Prompt 2: Client Entity Knowledge Extraction

```
I need to build a client entity SKILL.md extension for my most
important client. Help me extract the tacit knowledge using the
Method A interview framework.

Ask me the following questions one at a time. After each answer,
convert my response into one or more SKILL.md instructions using
the "When [condition], [action]" format:

1. What is the client's business model and primary revenue streams?
2. What seasonal patterns affect their financial results?
3. What related party relationships exist that require disclosure?
4. What are the known risk areas that you always check?
5. What are the CFO's specific reporting preferences?

After all five questions, compile the complete extension and
identify three gaps — conditions I probably know but did not
mention that should be in the extension.
```

**What you are learning:** The Method A interview framework is most powerful when someone else asks the questions. By having Claude interview you about a client you know well, you experience how structured questioning surfaces knowledge you apply automatically but have never written down. The gap identification at the end reveals the blind spots that make extensions incomplete.

### Prompt 3: Compliance Calendar Stress Test

```
I have built a compliance calendar SKILL.md extension for
[YOUR JURISDICTION] that covers [LIST YOUR MAIN RETURN TYPES —
e.g., corporate tax return, withholding tax statements,
annual company return].

Stress-test this calendar by:
1. Identifying three regulatory obligations I likely missed
   (common filings that practitioners often forget to calendar)
2. For each obligation, provide: the return type, the deadline,
   the penalty for late filing, and a one-sentence SKILL.md
   instruction in "When [condition], [action]" format
3. Suggest a weekly monitoring schedule — which day of the week
   should the agent check deadlines, and how far ahead should it
   look to generate preparation alerts?

Focus on [YOUR JURISDICTION] regulatory obligations.
```

**What you are learning:** Compliance calendars are only as good as their coverage. The obligations you remember to calendar are not the ones that cause problems — it is the ones you forget. By asking Claude to identify missed obligations, you stress-test your extension for completeness. The monitoring schedule question connects the calendar extension to Cowork's scheduling capability, showing how a static list of deadlines becomes a dynamic compliance monitoring system.


---

Continue to [Lesson 11: Accounting and Reporting Practice Lab →](./11-accounting-reporting-practice-lab.md)
