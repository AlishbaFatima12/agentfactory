---
slug: /Business-Domain-Agent-Workflows/ai-transformation-ca-cpa-practice/jurisdiction-entity-extensions
sidebar_position: 9
title: "Building Jurisdiction and Entity Extensions"
description: "Build two domain extensions that transform generic finance plugins into jurisdiction-aware, entity-specific agents — encoding tax rules, filing deadlines, chart of accounts structures, and documentation requirements as standing SKILL.md instructions"
keywords:
  [
    "SKILL.md extensions",
    "jurisdiction tax rules",
    "chart of accounts",
    "domain agent extension",
    "Pakistan tax law",
    "ITO 2001",
    "FBR filing",
    "intercompany accounts",
    "CA/CPA agent",
    "institutional knowledge",
  ]
chapter: 19
lesson: 9
duration_minutes: 30

# HIDDEN SKILLS METADATA
skills:
  - name: "Identify Institutional Knowledge Gaps in Generic Plugins"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Student can articulate why generic finance plugins produce structurally correct but contextually wrong output, identifying at least three categories of institutional knowledge that must be encoded as extensions"

  - name: "Build Jurisdiction-Specific Tax Extensions"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can write a SKILL.md extension that encodes jurisdiction-specific tax rates, filing deadlines, penalty provisions, and regulatory submission requirements using the 'When [condition], [action]' instruction format"

  - name: "Build Chart of Accounts Extensions"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can write a SKILL.md extension that maps account codes to descriptions, categories, documentation requirements, and approval rules so that agent-generated journal entries match the organisation's actual accounting system"

learning_objectives:
  - objective: "Explain why generic finance plugins require jurisdiction and entity extensions to produce professional-quality output, using concrete examples of what goes wrong without them"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student can describe at least two categories of institutional knowledge that generic plugins lack and explain the downstream impact on work product quality"

  - objective: "Write a jurisdiction-specific tax SKILL.md extension that encodes applicable tax rates, filing deadlines, penalty provisions, and regulatory authority requirements for a specific jurisdiction"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student can produce a tax extension with at least five standing instructions covering rates, deadlines, penalties, and submission format — each using the 'When [condition], [action]' structure"

  - objective: "Write a chart of accounts SKILL.md extension that maps account codes to descriptions, documentation requirements, and approval rules so that agent output slots directly into the organisation's accounting system"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student can produce a chart of accounts extension with account code mappings, journal entry documentation rules, and at least one restricted-access account rule"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "The institutional knowledge gap — why generic plugins produce structurally correct but contextually wrong output"
    - "Jurisdiction-specific tax extension structure — encoding tax code, rates, deadlines, penalties"
    - "Chart of accounts extension structure — mapping account codes, categories, documentation requirements"
    - "Standing instruction format — 'When [condition], [action]' as the building block of domain extensions"
    - "Extension activation triggers — writing description fields that control when the agent applies institutional knowledge"
  assessment: "5 concepts at B1 level — within the 7-10 cognitive limit for this tier. Students enter from L08 with working knowledge of Cowork workflows and plugin commands; this lesson shifts from using plugins to extending them with institutional knowledge."

differentiation:
  extension_for_advanced: "Write a third extension that combines jurisdiction and entity knowledge — a client-specific tax extension that applies the jurisdiction rules but adjusts for entity-specific exemptions, deductions, or special tax treatments. Identify three scenarios where the combined extension would produce different output than either extension alone."
  remedial_for_struggling: "Focus on the institutional knowledge gap concept first. List five things about your current work that a generic AI tool would get wrong because it does not know your specific context. Then convert just one of those into a single SKILL.md instruction using the 'When [condition], [action]' format."

teaching_guide:
  lesson_type: "core"
  session_group: 3
  session_title: "Domain Extensions — Jurisdiction and Entity"
  key_points:
    - "Generic plugins apply IFRS or US GAAP by default — they do not know your jurisdiction's tax rates, filing deadlines, or regulatory submission formats"
    - "A jurisdiction-specific tax extension encodes the applicable tax code as standing instructions the agent applies automatically to every tax computation"
    - "A chart of accounts extension maps your organisation's account codes to descriptions, categories, and documentation requirements — eliminating manual recoding of agent-generated journal entries"
    - "Every extension instruction follows the 'When [condition], [action]' format — this is the building block of all domain agent customisation"
  misconceptions:
    - "Students may think extensions replace plugins — extensions augment plugins by adding institutional knowledge that makes plugin output jurisdiction-specific and entity-specific"
    - "Students may assume they need to encode every tax rule — a practical extension covers the 20% of rules that apply to 80% of the firm's work, with escalation instructions for edge cases"
    - "Students may confuse jurisdiction extensions with client-specific extensions — jurisdiction rules apply to all clients in that jurisdiction; client-specific knowledge applies to one entity"
  discussion_prompts:
    - "Think about the last journal entry or tax computation you reviewed. What did the preparer need to know that was not in any textbook — knowledge specific to your firm, your client, or your jurisdiction? That is the institutional knowledge this lesson teaches you to encode."
    - "When you onboard a new team member, what jurisdiction-specific rules do you explain first? Those are your extension's priority instructions."
  teaching_tips:
    - "The Pakistan worked examples are concrete illustrations — encourage students to mentally substitute their own jurisdiction and chart of accounts as they read"
    - "The 'When [condition], [action]' format is deceptively simple. Spend time on the examples to show that precision in the condition clause determines whether the extension activates correctly"
    - "The global perspective callout is essential — students in different jurisdictions need to see that the pattern is universal even though the specific rules differ"
  assessment_checks:
    - question: "Why do generic finance plugins produce output that requires manual correction?"
      expected_response: "Generic plugins apply default standards (IFRS or US GAAP) and generic account descriptions. They do not know the specific jurisdiction's tax rates, filing deadlines, penalty provisions, or the organisation's chart of accounts structure. Without this institutional knowledge, the output is structurally correct but contextually wrong — requiring manual recoding before it can enter the actual accounting or tax system."
    - question: "What is the difference between a jurisdiction extension and a chart of accounts extension?"
      expected_response: "A jurisdiction extension encodes tax law rules that apply to all clients in that jurisdiction — rates, deadlines, penalties, and regulatory submission formats. A chart of accounts extension encodes an organisation's specific account codes, categories, documentation requirements, and approval rules. One is jurisdiction-wide; the other is entity-specific."
---

# Building Jurisdiction and Entity Extensions

> _"The difference between a tool that assists generic accounting work and an agent that performs as a competent member of your specific team is institutional knowledge — and institutional knowledge lives in extensions."_

In Lesson 8, you walked through a complete month-end close as a Cowork workflow — scheduling reconciliations, generating management accounts, and producing board-ready presentations. The plugins executed every step correctly. But every output used generic account descriptions, default IFRS treatments, and standard formatting. If you ran that workflow against your actual client's data, the first thing you would do is manually recode the journal entries to match your chart of accounts. The second thing would be correcting the tax computations for your jurisdiction. The third would be adding the documentation your firm requires for each account type.

That manual correction work is the institutional knowledge gap. The plugins know accounting. They do not know _your_ accounting. This lesson closes that gap for two of the five extension types that transform a generic finance agent into a jurisdiction-aware, entity-specific member of your team.

## Why Generic Plugins Are Not Enough

The finance plugins in Cowork — `/journal-entry`, `/reconciliation`, `/income-statement`, `/variance-analysis`, `/sox-testing` — provide powerful baseline capability. But consider what they do not know:

- **Your jurisdiction's tax law.** The plugins apply IFRS or US GAAP by default. They do not know that your clients operate under Pakistani tax law with a 29% corporate rate, specific industry exemptions, and FBR-mandated filing formats.
- **Your chart of accounts.** The journal entry and reconciliation commands produce entries using generic account descriptions. They do not know that your organisation uses account code 5110 for direct labour or that intercompany accounts follow a specific entity numbering convention.
- **Your documentation standards.** Some accounts in your system require board resolutions before posting. Others require attached bank statements. The plugins generate the entry — your team adds the paperwork.

:::info The Extension Principle
Generic plugins provide the framework. Domain extensions encode the institutional knowledge. This is the same principle established in Chapter 17 for finance domain agents — and for CA/CPA practice, this extension layer is not optional. It is the difference between an agent that assists and an agent that performs.
:::

:::tip Reference Implementations
The [companion repository](https://github.com/panaversity/ca-cpa-practice-agents) contains reference SKILL.md files under `reference-skills/` — complete Pakistan-default implementations for all five extensions. Study these as you build your own, but do not copy them directly. The value of the extension is in encoding _your_ jurisdiction's rules and _your_ firm's practices.
:::

The building block of every extension is a single format: **When [condition], [action]**. Every instruction you write follows this pattern. The condition defines when the agent should apply the knowledge. The action defines what it should do. Precision in the condition clause determines whether the extension activates correctly — too broad and it fires on irrelevant work; too narrow and it misses cases it should handle.

## Extension 1: Jurisdiction-Specific Tax Rules

**What the generic plugin lacks.** The `/variance-analysis` and accounting commands apply IFRS or US GAAP by default. They do not know that your clients operate under Pakistani tax law, that the applicable corporate tax rate is 29%, that specific industry exemptions apply, or that the FBR (Federal Board of Revenue) requires specific formats for particular returns.

**What the extension adds.** A jurisdiction-specific tax SKILL.md that encodes the applicable tax code, rates, filing deadlines, penalty provisions, and FBR/SBP (State Bank of Pakistan) requirements as standing instructions. When the agent processes any tax computation, it applies these rules automatically.

### Pakistan Worked Example: Key SKILL.md Instructions

Here is a representative subset of instructions for a Pakistan tax jurisdiction extension. Each follows the "When [condition], [action]" format:

```yaml
---
name: pakistan-tax-jurisdiction
description: |
  Pakistan jurisdiction tax rules for CA/CPA practice.
  Use when processing tax computations, preparing tax returns,
  or advising on tax positions for entities operating under
  Pakistan's Income Tax Ordinance 2001 and related legislation.
license: Apache-2.0
metadata:
  author: panaversity
  version: "1.0"
  chapter: "19"
  jurisdiction: "Pakistan"
---
```

```markdown
# Pakistan Tax Jurisdiction Extension

## Corporate Tax Rates

When computing corporate income tax for a **public company listed on PSX**,
apply a rate of 29% on taxable income.

When computing corporate income tax for a **private (unlisted) company**,
apply a rate of 29% on taxable income.

When computing corporate income tax for an **Association of Persons (AOP)**,
apply the individual slab rates specified in Division I of Part I of the
First Schedule to the ITO 2001.

When computing corporate income tax for a **Small and Medium Enterprise**
meeting the criteria under Section 2(59A), apply the reduced rate of 20%.

## Withholding Tax Rates

When processing salary payments, apply withholding under Section 149
using the slab rates in Division I of Part I of the First Schedule.

When processing dividend payments to resident shareholders, apply
withholding at 15% under Section 150 (filer) or 30% (non-filer).

When processing payments for services to a resident company, apply
withholding at 8% under Section 153(1)(b) (filer) or 16% (non-filer).

## Filing Deadlines

When preparing a corporate income tax return (Section 114), the deadline
is September 30 of the year following the tax year. Flag any return
preparation beginning after August 15 as HIGH PRIORITY.

When preparing a withholding tax statement (Section 165), the deadline
is the 15th day of the month following the quarter-end.

## Penalties

When a return is filed after the due date, note the penalty under
Section 182: PKR 40,000 or 0.1% of the tax payable for each day of
default, whichever is higher. Include this penalty risk in any
communication to the client about delayed filing.

## Escalation

When the computation involves a tax position requiring interpretation
of circulars, rulings, or ambiguous provisions of the ITO 2001,
STOP and flag for engagement partner review. Do not finalise the
computation autonomously.
```

**Output:**

The agent now applies Pakistan-specific rates, deadlines, and penalty provisions to every tax computation — without the CA/CPA typing jurisdiction-specific instructions each time. The escalation clause ensures the agent does not autonomously resolve ambiguous positions.

:::tip Global Perspective
**US (IRC):** Replace ITO 2001 references with Internal Revenue Code sections. Corporate rate: 21% (flat, post-TCJA). Filing deadline: April 15 (calendar year) or the 15th day of the 4th month after fiscal year-end. Withholding: varies by payment type (wages per W-4 tables, dividends at 20%/15%/0% qualified rates).

**UK (HMRC):** Replace with Corporation Tax Act 2009/2010. Main rate: 25% (profits over GBP 250,000), small profits rate: 19% (profits under GBP 50,000). Filing deadline: 12 months after the end of the accounting period. Self-Assessment for individuals: January 31 following the tax year.

**IFRS jurisdictions generally:** Tax rate and deadline encoding follows the same SKILL.md pattern — the structure is universal; only the rates, sections, and authority names change.
:::

## Extension 2: Chart of Accounts Encoding

**What the generic plugin lacks.** The journal entry and reconciliation commands produce entries using generic account descriptions. They do not know that your organisation uses account code 5110 for direct labour, that your intercompany account structure follows a specific entity numbering convention, or that certain account types require specific documentation to support the journal.

**What the extension adds.** A chart of accounts SKILL.md that maps every account code to its description, sub-category, and documentation requirements. The agent applies this mapping in every journal entry and reconciliation output — producing entries that slot directly into the actual accounting system without manual recoding.

### Pakistan Worked Example: Key SKILL.md Instructions

A manufacturing company operating in Lahore with multiple subsidiaries:

```yaml
---
name: chart-of-accounts-lahore-manufacturing
description: |
  Chart of accounts extension for Lahore Manufacturing Ltd.
  Use when generating journal entries, running reconciliations,
  or preparing financial statements for this entity. Apply these
  account codes to all outputs instead of generic descriptions.
license: Apache-2.0
metadata:
  author: panaversity
  version: "1.0"
  chapter: "19"
  entity: "Lahore Manufacturing Ltd"
---
```

```markdown
# Chart of Accounts — Lahore Manufacturing Ltd

## Account Code Mapping

When generating a journal entry involving **direct labour costs**,
use account code 5110 — "Direct Labour — Production" under the
Cost of Goods Sold category.

When generating a journal entry involving **raw material purchases**,
use account code 5010 — "Raw Materials Consumed" under COGS.

When generating a journal entry involving **factory overheads**,
use account code 5200 — "Manufacturing Overhead — Allocated" under COGS.

When generating a journal entry involving **sales revenue (domestic)**,
use account code 4010 — "Revenue — Domestic Sales" under Revenue.

When generating a journal entry involving **sales revenue (export)**,
use account code 4020 — "Revenue — Export Sales" under Revenue.
Export sales must include the SBP-reported exchange rate on the
transaction date.

## Intercompany Structure

When generating intercompany entries between the parent (entity 100)
and subsidiary (entity 200), use account codes prefixed with "IC-"
followed by the counterparty entity number.

Example: A management fee charged by entity 100 to entity 200:

- Entity 100 records: DR IC-200-1510 (Intercompany Receivable)
  CR 4510 (Management Fee Income)
- Entity 200 records: DR 6510 (Management Fee Expense)
  CR IC-100-2510 (Intercompany Payable)

When netting intercompany balances at period-end, confirm that the
sum of all IC-200 accounts in entity 100 equals the sum of all
IC-100 accounts in entity 200 (opposite sign). Flag any mismatch
exceeding PKR 10,000 for investigation.

## Documentation Requirements

When posting to account 1010 (Cash and Bank — Operating Account),
attach the supporting bank statement page showing the transaction.

When posting to account 2010 (Trade Payables), attach the vendor
invoice and goods received note.

When posting to account 3010 (Share Capital), attach the board
resolution authorising the transaction. This account REQUIRES
senior partner approval before posting. Do not generate a journal
entry for this account — generate a DRAFT and flag for review.

## Restricted Accounts

When an instruction involves posting to accounts 3010 (Share Capital),
3020 (Share Premium), or 9010 (Extraordinary Items), STOP and flag
for engagement partner approval. These accounts may never be posted
to without explicit senior authorisation.
```

**Output:**

Every journal entry the agent generates now uses Lahore Manufacturing Ltd's actual account codes, follows the intercompany netting convention, and respects the documentation and approval requirements. No manual recoding needed.

:::tip Global Perspective
**US entities:** Chart of accounts encoding follows the same pattern. Common differences: US entities often use a numeric range convention (1000-1999 for assets, 2000-2999 for liabilities) rather than four-digit codes with category prefixes. GAAP-specific accounts (e.g., ASC 842 lease right-of-use assets) should be included when applicable.

**UK entities:** FRS 102 entities may use a Companies Act 2006 format with prescribed headings. The SKILL.md should include the statutory format mapping (Format 1 or Format 2 of Schedule 1 to SI 2008/410) alongside internal account codes.

**IFRS entities generally:** The chart of accounts encoding is entity-specific regardless of jurisdiction. The pattern — code mapping, documentation rules, restricted accounts — is universal.
:::

## How the Two Extensions Work Together

Neither extension works in isolation. Consider a scenario where the agent processes a quarter-end tax provision for Lahore Manufacturing Ltd:

1. The **chart of accounts extension** ensures the provision journal entry uses account code 2310 (Current Tax Payable) and account code 7010 (Income Tax Expense) — not generic descriptions.
2. The **jurisdiction extension** ensures the computation applies the 29% corporate rate, checks whether any industry-specific exemptions reduce the effective rate, and verifies the filing deadline is September 30.
3. The **escalation rules** from both extensions combine: if the computation involves an ambiguous tax position AND touches a restricted account, both flags fire and the engagement partner receives a consolidated alert.

This layering — generic plugin capability, augmented by jurisdiction rules, augmented by entity-specific account mapping — is the architecture that transforms a finance assistant into a practice-ready agent.

## Try With AI

Use these prompts in Claude or your preferred AI assistant to practise building jurisdiction and entity extensions.

### Prompt 1: Institutional Knowledge Audit

```
I am a CA/CPA practising in [YOUR JURISDICTION — e.g., Pakistan,
United States, United Kingdom, Canada, Australia].

List the top 10 pieces of institutional knowledge that a generic
AI accounting tool would get wrong when processing work for my
typical clients. For each item:
1. What the generic tool would assume (default behaviour)
2. What the correct jurisdiction-specific behaviour is
3. The downstream impact of the error (wrong filing, penalty,
   client dissatisfaction, regulatory risk)

Organise the list by severity — most consequential errors first.
```

**What you are learning:** Before writing extension instructions, you need to identify what institutional knowledge matters most. This prompt surfaces the gap between generic AI output and jurisdiction-specific requirements — the exact gap that SKILL.md extensions close. The severity ordering helps you prioritise which instructions to write first.

### Prompt 2: Tax Extension Drafting

```
I need to write a jurisdiction-specific tax SKILL.md extension
for [YOUR JURISDICTION]. Using the "When [condition], [action]"
format, draft instructions covering:

1. The three most common entity types and their applicable
   corporate/income tax rates
2. Withholding tax rates for the three most common payment types
   (salary, dividends, services)
3. The two most important filing deadlines with penalty provisions
4. One escalation rule — the condition under which the agent should
   STOP and flag for partner review rather than computing autonomously

For each instruction, explain why the condition clause is written
the way it is — what would go wrong if it were broader or narrower?
```

**What you are learning:** The precision of the condition clause determines whether the extension activates correctly. A condition that is too broad fires on irrelevant work; too narrow and it misses cases. By drafting real instructions and examining why each condition is scoped the way it is, you develop the skill of writing extensions that activate reliably.

### Prompt 3: Chart of Accounts Extension Drafting

```
I manage accounting for an entity that uses the following account
structure:
- Revenue accounts: 4000-4999
- COGS accounts: 5000-5999
- Operating expense accounts: 6000-6999
- Intercompany accounts: prefixed with "IC-" + entity number

Draft a chart of accounts SKILL.md extension with:
1. Five account code mappings (code, description, category)
2. Two documentation requirements (which accounts need what
   supporting documents)
3. One restricted account rule (which account requires senior
   approval before posting)
4. One intercompany netting instruction

Use the "When [condition], [action]" format. After drafting,
review each instruction and identify one edge case it does not
handle — then write an additional instruction to cover that case.
```

**What you are learning:** Chart of accounts extensions must be comprehensive enough to eliminate manual recoding but not so exhaustive that they become unmaintainable. By drafting five mappings, two documentation rules, and one restricted account — then immediately stress-testing for edge cases — you learn the practical balance between coverage and complexity that makes extensions sustainable in real practice.


---

Continue to [Lesson 10: Building Methodology and Compliance Extensions →](./10-methodology-compliance-extensions.md)
