---
slug: /Business-Domain-Agent-Workflows/ai-transformation-ca-cpa-practice/jurisdiction-entity-extensions
sidebar_position: 8
title: "Building Jurisdiction and Entity Skills"
description: "Build two domain skills in Cowork that transform generic finance plugins into jurisdiction-aware, entity-specific agents — encoding tax rules, filing deadlines, chart of accounts structures, and documentation requirements as persistent Cowork skills"
keywords:
  [
    "Cowork skills",
    "jurisdiction tax rules",
    "chart of accounts",
    "domain agent skill",
    "Pakistan tax law",
    "ITO 2001",
    "FBR filing",
    "intercompany accounts",
    "CA/CPA agent",
    "institutional knowledge",
    "Create with Claude",
    "Write skill instructions",
  ]
chapter: 19
lesson: 8
duration_minutes: 30

# HIDDEN SKILLS METADATA
skills:
  - name: "Identify Institutional Knowledge Gaps in Generic Plugins"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Student can articulate why generic finance plugins produce structurally correct but contextually wrong output, identifying at least three categories of institutional knowledge that must be encoded as Cowork skills"

  - name: "Build Jurisdiction-Specific Tax Skills in Cowork"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can create a Cowork skill that encodes jurisdiction-specific tax rates, filing deadlines, penalty provisions, and regulatory submission requirements using the 'When [condition], [action]' instruction format"

  - name: "Build Chart of Accounts Skills in Cowork"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can create a Cowork skill that maps account codes to descriptions, categories, documentation requirements, and approval rules so that agent-generated journal entries match the organisation's actual accounting system"

learning_objectives:
  - objective: "Explain why generic finance plugins require jurisdiction and entity skills to produce professional-quality output, using concrete examples of what goes wrong without them"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student can describe at least two categories of institutional knowledge that generic plugins lack and explain the downstream impact on work product quality"

  - objective: "Create a jurisdiction-specific tax skill in Cowork that encodes applicable tax rates, filing deadlines, penalty provisions, and regulatory authority requirements for a specific jurisdiction"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student can produce a tax skill with at least five standing instructions covering rates, deadlines, penalties, and submission format — each using the 'When [condition], [action]' structure"

  - objective: "Create a chart of accounts skill in Cowork that maps account codes to descriptions, documentation requirements, and approval rules so that agent output slots directly into the organisation's accounting system"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student can produce a chart of accounts skill with account code mappings, journal entry documentation rules, and at least one restricted-access account rule"

cognitive_load:
  new_concepts: 6
  concepts_list:
    - "The institutional knowledge gap — why generic plugins produce structurally correct but contextually wrong output"
    - "Three Cowork skill creation methods — Write skill instructions, Create with Claude, Upload a skill"
    - "Jurisdiction-specific tax skill structure — encoding tax code, rates, deadlines, penalties"
    - "Chart of accounts skill structure — mapping account codes, categories, documentation requirements"
    - "Standing instruction format — 'When [condition], [action]' as the building block of domain skills"
    - "Skill description as activation trigger — writing descriptions that control when the agent applies the skill"
  assessment: "6 concepts at B1 level — within the 7-10 cognitive limit for this tier. Students enter from L07 with working knowledge of the plugin ecosystem and plugin commands; this lesson shifts from using plugins to extending them with institutional knowledge. The Cowork skill creation UI reduces technical overhead compared to raw file authoring."

differentiation:
  extension_for_advanced: "Create a third skill that combines jurisdiction and entity knowledge — a client-specific tax skill that applies the jurisdiction rules but adjusts for entity-specific exemptions, deductions, or special tax treatments. Identify three scenarios where the combined skill would produce different output than either skill alone."
  remedial_for_struggling: "Focus on the institutional knowledge gap concept first. List five things about your current work that a generic AI tool would get wrong because it does not know your specific context. Then convert just one of those into a single Cowork skill instruction using the 'When [condition], [action]' format."

teaching_guide:
  lesson_type: "core"
  session_group: 3
  session_title: "Domain Skills — Jurisdiction and Entity"
  key_points:
    - "Generic plugins apply IFRS or US GAAP by default — they do not know your jurisdiction's tax rates, filing deadlines, or regulatory submission formats"
    - "Cowork provides three native methods for creating skills: Write skill instructions (form), Create with Claude (conversational), and Upload a skill (from file)"
    - "A jurisdiction-specific tax skill encodes the applicable tax code as standing instructions the agent applies automatically to every tax computation"
    - "A chart of accounts skill maps your organisation's account codes to descriptions, categories, and documentation requirements — eliminating manual recoding of agent-generated journal entries"
    - "Every skill instruction follows the 'When [condition], [action]' format — this is the building block of all domain agent customisation"
  misconceptions:
    - "Students may think skills replace plugins — skills augment plugins by adding institutional knowledge that makes plugin output jurisdiction-specific and entity-specific"
    - "Students may assume they need to encode every tax rule — a practical skill covers the 20% of rules that apply to 80% of the firm's work, with escalation instructions for edge cases"
    - "Students may confuse jurisdiction skills with client-specific skills — jurisdiction rules apply to all clients in that jurisdiction; client-specific knowledge applies to one entity"
  discussion_prompts:
    - "Think about the last journal entry or tax computation you reviewed. What did the preparer need to know that was not in any textbook — knowledge specific to your firm, your client, or your jurisdiction? That is the institutional knowledge this lesson teaches you to encode."
    - "When you onboard a new team member, what jurisdiction-specific rules do you explain first? Those are your skill's priority instructions."
  teaching_tips:
    - "The Pakistan worked examples are concrete illustrations — encourage students to mentally substitute their own jurisdiction and chart of accounts as they read"
    - "The 'When [condition], [action]' format is deceptively simple. Spend time on the examples to show that precision in the condition clause determines whether the skill activates correctly"
    - "Demo the Cowork skill creation UI if possible — seeing the three-field form makes the task feel achievable rather than technical"
  assessment_checks:
    - question: "Why do generic finance plugins produce output that requires manual correction?"
      expected_response: "Generic plugins apply default standards (IFRS or US GAAP) and generic account descriptions. They do not know the specific jurisdiction's tax rates, filing deadlines, penalty provisions, or the organisation's chart of accounts structure. Without this institutional knowledge, the output is structurally correct but contextually wrong — requiring manual recoding before it can enter the actual accounting or tax system."
    - question: "What is the difference between a jurisdiction tax skill and a chart of accounts skill?"
      expected_response: "A jurisdiction tax skill encodes tax law rules that apply to all clients in that jurisdiction — rates, deadlines, penalties, and regulatory submission formats. A chart of accounts skill encodes an organisation's specific account codes, categories, documentation requirements, and approval rules. One is jurisdiction-wide; the other is entity-specific."
    - question: "What are the three ways to create a skill in Cowork?"
      expected_response: "Write skill instructions (fill in a form with skill name, description, and instructions), Create with Claude (conversational — Claude helps you build the skill through dialogue), and Upload a skill (import a pre-built skill file, such as a reference skill from the companion repository)."
---

# Building Jurisdiction and Entity Skills

> _"The difference between a tool that assists generic accounting work and an agent that performs as a competent member of your specific team is institutional knowledge — and institutional knowledge lives in skills."_

In Lesson 7, you walked through the CA/CPA plugin ecosystem — scheduling reconciliations, generating management accounts, and producing board-ready presentations. The plugins executed every step correctly. But every output used generic account descriptions, default IFRS treatments, and standard formatting. If you ran that workflow against your actual client's data, the first thing you would do is manually recode the journal entries to match your chart of accounts. The second thing would be correcting the tax computations for your jurisdiction. The third would be adding the documentation your firm requires for each account type.

That manual correction work is the institutional knowledge gap. The plugins know accounting. They do not know _your_ accounting. This lesson closes that gap by creating Cowork skills that encode your jurisdiction's tax rules and your organisation's chart of accounts — transforming a generic finance agent into one that works the way your practice works.

## Three Ways to Create Skills in Cowork

Cowork provides three native methods for creating domain skills. You will use all three in this lesson and Lesson 9.

Open the Cowork sidebar → **Customize** → **Skills** to see your current skills panel:

![Cowork Skills panel showing user-created domain skills](/img/ch19-cowork-skills-panel.png)

Click the **+** button to see the three creation methods:

![Cowork skill creation menu showing Create with Claude, Write skill instructions, and Upload a skill](/img/ch19-cowork-skills-create-menu.png)

**Write skill instructions.** Select **Write skill instructions** from the menu. A form appears with three fields:

![Cowork Write skill instructions form with Skill name, Description, and Instructions fields](/img/ch19-cowork-write-skill-form.png)

| Field            | What to enter                                                      | Example                                                                                                                                                      |
| ---------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Skill name**   | A short identifier for the skill                                   | `pakistan-tax-jurisdiction`                                                                                                                                  |
| **Description**  | When the agent should activate this skill — the trigger conditions | "Pakistan jurisdiction tax rules for CA/CPA practice. Use when processing tax computations or preparing tax returns for entities under Pakistan's ITO 2001." |
| **Instructions** | The domain knowledge — your "When [condition], [action]" rules     | The tax rates, filing deadlines, penalty provisions, and escalation rules                                                                                    |

Click **Create** and the skill is immediately active in all your Cowork sessions.

**Create with Claude.** Click **+** → **Create with Claude**. Cowork opens a conversation where you describe what you need — "I need a skill for Pakistan tax jurisdiction rules covering corporate rates, withholding, filing deadlines, and penalties" — and Claude helps you build the skill through dialogue, asking clarifying questions and drafting instructions for your review.

**Upload a skill.** Click **+** → **Upload a skill**. Import a pre-built skill file — such as the reference skills in the [companion repository](https://github.com/panaversity/ca-cpa-practice-agents/tree/main/reference-skills). Upload, review, and customise for your specific jurisdiction or entity.

:::tip Which Method When?
**Starting from scratch?** Use **Create with Claude** — the conversation helps you surface knowledge you might not think to write down. **Know exactly what you want?** Use **Write skill instructions** — faster, no back-and-forth. **Starting from a reference?** Use **Upload a skill** from the companion repo, then edit in the Skills panel to customise for your jurisdiction.
:::

## Why Generic Plugins Are Not Enough

The finance plugins in Cowork — `/journal-entry`, `/reconciliation`, `/income-statement`, `/variance-analysis`, `/sox-testing` — provide powerful baseline capability. But consider what they do not know:

- **Your jurisdiction's tax law.** The plugins apply IFRS or US GAAP by default. They do not know that your clients operate under Pakistani tax law with a 29% corporate rate, specific industry exemptions, and FBR-mandated filing formats.
- **Your chart of accounts.** The journal entry and reconciliation commands produce entries using generic account descriptions. They do not know that your organisation uses account code 5110 for direct labour or that intercompany accounts follow a specific entity numbering convention.
- **Your documentation standards.** Some accounts in your system require board resolutions before posting. Others require attached bank statements. The plugins generate the entry — your team adds the paperwork.

:::info The Skill Extension Principle
Generic plugins provide the framework. Domain skills encode the institutional knowledge. This is the same principle established in Chapter 17 for finance domain agents — and for CA/CPA practice, this skill layer is not optional. It is the difference between an agent that assists and an agent that performs.
:::

:::tip Reference Implementations
The companion repository contains reference skill files under [`reference-skills/`](https://github.com/panaversity/ca-cpa-practice-agents/tree/main/reference-skills) — complete Pakistan-default implementations for all five skills. You can upload these directly into Cowork via **Upload a skill**, then customise for your jurisdiction. Study them as you build your own, but do not use them uncustomised — the value of the skill is in encoding _your_ jurisdiction's rules and _your_ firm's practices.
:::

:::warning Jurisdiction-Specific Rates Change Frequently
Tax rates, withholding percentages, filing deadlines, and penalty amounts throughout this lesson (and Lessons 9 and 11) are illustrative based on the Income Tax Ordinance 2001 as amended through Finance Act 2024. Pakistan's Finance Act changes these figures annually. **Always verify current rates at [fbr.gov.pk](https://www.fbr.gov.pk) before applying to client work.** The same principle applies to every jurisdiction — US rates change with Congressional action, UK rates with the Finance Act and Autumn Statement. Treat every rate in a skill as a parameter to be verified, not a permanent constant.
:::

The building block of every skill is a single format: **When [condition], [action]**. Every instruction you write follows this pattern. The condition defines when the agent should apply the knowledge. The action defines what it should do. Precision in the condition clause determines whether the skill activates correctly — too broad and it fires on irrelevant work; too narrow and it misses cases it should handle.

## Skill 1: Jurisdiction-Specific Tax Rules

**What the generic plugin lacks.** The `/variance-analysis` and accounting commands apply IFRS or US GAAP by default. They do not know that your clients operate under Pakistani tax law, that the applicable corporate tax rate is 29%, that specific industry exemptions apply, or that the FBR (Federal Board of Revenue) requires specific formats for particular returns.

**What the skill adds.** A jurisdiction-specific tax skill that encodes the applicable tax code, rates, filing deadlines, penalty provisions, and FBR/SBP (State Bank of Pakistan) requirements as standing instructions. When the agent processes any tax computation, it applies these rules automatically.

### Pakistan Worked Example

Here is what you would enter when creating this skill in Cowork. Each instruction follows the "When [condition], [action]" format:

**Skill name:** `pakistan-tax-jurisdiction`

**Description:** Pakistan jurisdiction tax rules for CA/CPA practice. Use when processing tax computations, preparing tax returns, or advising on tax positions for entities operating under Pakistan's Income Tax Ordinance 2001 and related legislation.

**Instructions:**

```
# Pakistan Tax Jurisdiction

## Corporate Tax Rates

When computing corporate income tax for a public company listed on PSX,
apply a rate of 29% on taxable income.

When computing corporate income tax for a private (unlisted) company,
apply a rate of 29% on taxable income.

When computing corporate income tax for an Association of Persons (AOP),
apply the individual slab rates specified in Division I of Part I of the
First Schedule to the ITO 2001.

When computing corporate income tax for a Small and Medium Enterprise
meeting the criteria under Section 2(59A), apply the reduced rate of 20%.

## Withholding Tax Rates

When processing salary payments, apply withholding under Section 149
using the slab rates in Division I of Part I of the First Schedule.

When processing dividend payments to resident shareholders, apply
withholding at 15% under Section 150 (filer) or 30% (non-filer).

When processing payments for services to a resident company, apply
withholding under Section 153(1)(b) at the rate specified in the current
FBR Withholding Tax Rate Card — rates vary by service type (e.g., 6%
filer / 12% non-filer for general services). Always consult the latest
rate card, as rates change with each Finance Act.

## Filing Deadlines

When preparing a corporate income tax return (Section 114), the deadline
is September 30 of the year following the tax year. Flag any return
preparation beginning after August 15 as HIGH PRIORITY.

When preparing a withholding tax statement (Section 165), the deadline
is the 20th day of the month following the quarter-end.

## Penalties

When a return is filed after the due date, note the penalty under
Section 182: PKR 40,000 or 0.1% of the tax payable for each day of
default, whichever is higher, subject to a maximum penalty of 50% of
the tax payable. Include this penalty risk in any communication to
the client about delayed filing.

## Escalation

When the computation involves a tax position requiring interpretation
of circulars, rulings, or ambiguous provisions of the ITO 2001,
STOP and flag for engagement partner review. Do not finalise the
computation autonomously.
```

**To create this skill:** Open Cowork sidebar → Customize → Skills → **+** → **Write skill instructions** → paste the skill name, description, and instructions into the form → **Create**.

**Alternative — Create with Claude:** Click **+** → **Create with Claude** and say: _"Help me create a skill for Pakistan tax jurisdiction rules. I need it to cover corporate tax rates under the ITO 2001, withholding rates for salaries, dividends, and services, the main filing deadlines, penalty provisions, and an escalation rule for ambiguous positions."_ Claude will draft the skill, ask clarifying questions, and let you review before saving.

**Output:** The agent now applies Pakistan-specific rates, deadlines, and penalty provisions to every tax computation — without the CA/CPA typing jurisdiction-specific instructions each time. The escalation clause ensures the agent does not autonomously resolve ambiguous positions.

:::tip Global Perspective
**US (IRC):** Replace ITO 2001 references with Internal Revenue Code sections. Corporate rate: 21% (flat, post-TCJA). Filing deadline: April 15 (calendar year) or the 15th day of the 4th month after fiscal year-end. Withholding: varies by payment type (wages per W-4 tables, dividends at 20%/15%/0% qualified rates).

**UK (HMRC):** Replace with Corporation Tax Act 2009/2010. Main rate: 25% (profits over GBP 250,000), small profits rate: 19% (profits under GBP 50,000). Filing deadline: 12 months after the end of the accounting period. Self-Assessment for individuals: January 31 following the tax year.

**IFRS jurisdictions generally:** Tax rate and deadline encoding follows the same Cowork skill pattern — the structure is universal; only the rates, sections, and authority names change.
:::

## Skill 2: Chart of Accounts Encoding

**What the generic plugin lacks.** The journal entry and reconciliation commands produce entries using generic account descriptions. They do not know that your organisation uses account code 5110 for direct labour, that your intercompany account structure follows a specific entity numbering convention, or that certain account types require specific documentation to support the journal.

**What the skill adds.** A chart of accounts skill that maps every account code to its description, sub-category, and documentation requirements. The agent applies this mapping in every journal entry and reconciliation output — producing entries that slot directly into the actual accounting system without manual recoding.

### Pakistan Worked Example: Lahore Manufacturing Ltd

A manufacturing company operating in Lahore with multiple subsidiaries:

**Skill name:** `chart-of-accounts-lahore-manufacturing`

**Description:** Chart of accounts for Lahore Manufacturing Ltd. Use when generating journal entries, running reconciliations, or preparing financial statements for this entity. Apply these account codes to all outputs instead of generic descriptions.

**Instructions:**

```
# Chart of Accounts — Lahore Manufacturing Ltd

## Account Code Mapping

When generating a journal entry involving direct labour costs,
use account code 5110 — "Direct Labour — Production" under the
Cost of Goods Sold category.

When generating a journal entry involving raw material purchases,
use account code 5010 — "Raw Materials Consumed" under COGS.

When generating a journal entry involving factory overheads,
use account code 5200 — "Manufacturing Overhead — Allocated" under COGS.

When generating a journal entry involving sales revenue (domestic),
use account code 4010 — "Revenue — Domestic Sales" under Revenue.

When generating a journal entry involving sales revenue (export),
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

**To create this skill:** Use **Write skill instructions** in the Cowork Skills panel, or ask Claude: _"Help me create a chart of accounts skill for Lahore Manufacturing Ltd. Our account structure uses 4000-series for revenue, 5000-series for COGS, intercompany accounts prefixed with IC- plus entity number, and we have restricted accounts that need partner approval."_

**Output:** Every journal entry the agent generates now uses Lahore Manufacturing Ltd's actual account codes, follows the intercompany netting convention, and respects the documentation and approval requirements. No manual recoding needed.

:::tip Global Perspective
**US entities:** Chart of accounts encoding follows the same pattern. Common differences: US entities often use a numeric range convention (1000-1999 for assets, 2000-2999 for liabilities) rather than four-digit codes with category prefixes. GAAP-specific accounts (e.g., ASC 842 lease right-of-use assets) should be included when applicable.

**UK entities:** FRS 102 entities may use a Companies Act 2006 format with prescribed headings. The skill should include the statutory format mapping (Format 1 or Format 2 of Schedule 1 to SI 2008/410) alongside internal account codes.

**IFRS entities generally:** The chart of accounts encoding is entity-specific regardless of jurisdiction. The pattern — code mapping, documentation rules, restricted accounts — is universal.
:::

## How the Two Skills Work Together

Neither skill works in isolation. Consider a scenario where the agent processes a quarter-end tax provision for Lahore Manufacturing Ltd:

1. The **chart of accounts skill** ensures the provision journal entry uses account code 2310 (Current Tax Payable) and account code 7010 (Income Tax Expense) — not generic descriptions.
2. The **jurisdiction tax skill** ensures the computation applies the 29% corporate rate, checks whether any industry-specific exemptions reduce the effective rate, and verifies the filing deadline is September 30.
3. The **escalation rules** from both skills combine: if the computation involves an ambiguous tax position AND touches a restricted account, both flags fire and the engagement partner receives a consolidated alert.

This layering — generic plugin capability, augmented by jurisdiction rules, augmented by entity-specific account mapping — is the architecture that transforms a finance assistant into a practice-ready agent.

## Try With AI

Use these prompts in Cowork or your preferred AI assistant to practise building jurisdiction and entity skills.

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

**What you are learning:** Before writing skill instructions, you need to identify what institutional knowledge matters most. This prompt surfaces the gap between generic AI output and jurisdiction-specific requirements — the exact gap that Cowork skills close. The severity ordering helps you prioritise which instructions to write first.

### Prompt 2: Tax Skill Creation

```
I need to create a jurisdiction-specific tax skill in Cowork
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

**What you are learning:** The precision of the condition clause determines whether the skill activates correctly. A condition that is too broad fires on irrelevant work; too narrow and it misses cases. By drafting real instructions and examining why each condition is scoped the way it is, you develop the skill of writing instructions that activate reliably.

### Prompt 3: Chart of Accounts Skill Creation

```
I manage accounting for an entity that uses the following account
structure:
- Revenue accounts: 4000-4999
- COGS accounts: 5000-5999
- Operating expense accounts: 6000-6999
- Intercompany accounts: prefixed with "IC-" + entity number

Draft the Instructions field for a Cowork chart of accounts skill
with:
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

**What you are learning:** Chart of accounts skills must be comprehensive enough to eliminate manual recoding but not so exhaustive that they become unmaintainable. By drafting five mappings, two documentation rules, and one restricted account — then immediately stress-testing for edge cases — you learn the practical balance between coverage and complexity that makes skills sustainable in real practice.

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 9: Building Methodology and Compliance Skills →](./09-methodology-compliance-extensions.md)
