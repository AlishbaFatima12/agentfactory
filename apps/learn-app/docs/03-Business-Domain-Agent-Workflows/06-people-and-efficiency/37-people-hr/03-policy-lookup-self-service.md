---
slug: /Business-Domain-Agent-Workflows/people-hr/policy-lookup-self-service
sidebar_position: 3
title: "Policy Lookup — Self-Service Policy Synthesis"
description: "Transform scattered, jargon-heavy HR policies into plain-language summaries that employees can actually use — using the /policy-lookup skill to synthesise, explain, and verify policy content"
keywords:
  [
    "people and hr",
    "hr operations",
    "hr agents",
    "policy lookup",
    "policy synthesis",
    "plain language policy",
    "employee handbook",
    "hr self-service",
    "policy FAQ",
    "hr knowledge base",
  ]
chapter: 37
lesson: 3
duration_minutes: 40

# HIDDEN SKILLS METADATA
skills:
  - name: "Synthesise HR Policies into Plain-Language Employee Summaries"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Content-Creation"
    measurable_at_this_level: "Student can take a complex HR policy document and use /policy-lookup to produce a plain-language summary that is accurate, complete, and written for the intended audience — then verify the output against the source policy"

  - name: "Evaluate AI-Generated Policy Summaries for Accuracy and Completeness"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Information"
    measurable_at_this_level: "Student can compare a /policy-lookup output against the source policy and identify missing entitlements, incorrect figures, ambiguous language, or absent escalation paths"

  - name: "Build a Structured FAQ Knowledge Base from Policy Documents"
    proficiency_level: "A2"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Content-Creation"
    measurable_at_this_level: "Student can use /policy-lookup iteratively to produce 20 structured FAQ entries with question, plain-language answer, policy source citation, and escalation contact"

learning_objectives:
  - objective: "Explain why employees cannot find policy information despite it being documented"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student identifies at least three barriers (scattered sources, legal language, outdated documents) and explains how each prevents employee self-service"

  - objective: "Use /policy-lookup to synthesise a complex policy into a plain-language summary with source citations"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student invokes /policy-lookup with a real or sample policy, receives a summary, and verifies it includes: quick answer, details, exceptions, contact, and source reference"

  - objective: "Build a 20-question FAQ knowledge base by identifying high-frequency policy questions and synthesising plain-language answers"
    proficiency_level: "B1"
    bloom_level: "Create"
    assessment_method: "Student produces a structured FAQ document with 20 entries, each containing question, plain-language answer, policy citation, and escalation path — verified against source policies for accuracy"

cognitive_load:
  new_concepts: 4
  concepts_list:
    - "Policy synthesis — transforming legal/formal policy language into plain-language summaries"
    - "Source citation — linking every summary back to the specific policy document and section"
    - "Verification framework — systematic checking of AI-generated policy summaries against source documents"
    - "FAQ knowledge base — structured question-answer pairs that power employee self-service"
  assessment: "4 concepts at B1 level — comfortably within cognitive limits. The lesson builds from problem (why policies fail) to tool (/policy-lookup) to practice (verification) to deliverable (FAQ knowledge base). Each concept builds directly on the previous one."

differentiation:
  extension_for_advanced: "Analyse your organisation's HR ticket data from the last 90 days. Categorise tickets by policy topic, identify the top 20 by volume, and calculate the time cost of answering each one manually. Use this data to prioritise your FAQ knowledge base entries by ROI — which entries save the most HR team time per month?"
  remedial_for_struggling: "Focus on two things: running /policy-lookup with a single policy topic and checking the output against the source. If you can verify that a summary is accurate and complete for one policy, you have the core skill. Build from there."

teaching_guide:
  key_points:
    - "The problem is not missing policies — it is policies that employees cannot find or understand"
    - "/policy-lookup synthesises, it does not replace — the source policy remains authoritative"
    - "Every summary must cite its source document and section — unsourced summaries are useless"
    - "The FAQ knowledge base built here is the foundation for the HR Knowledge Base Agent in Lesson 4"
  misconceptions:
    - "AI-generated policy summaries are automatically accurate. Correction: /policy-lookup is only as accurate as the policy information you provide. Always verify the output against the source policy — the skill can miss exceptions, use outdated figures, or oversimplify nuances."
    - "Plain language means less information. Correction: plain language means the same information written so that any employee can understand it on first reading. Nothing should be omitted — only reformulated."
    - "One summary fits all audiences. Correction: a policy summary for new joiners may need more context than one for managers. Consider your audience when reviewing /policy-lookup output."
  discussion_prompts:
    - "Think about the last time you needed to find a company policy. How long did it take? Where did you eventually find the answer — in a document, or by asking someone?"
    - "What are the risks of an employee acting on an AI-generated policy summary that contains an error? How does source citation mitigate that risk?"
  teaching_tips:
    - "Start with the parental leave example — it is emotionally resonant and practically complex. Every student has either needed this information or knows someone who has."
    - "Have students compare the raw policy language with the /policy-lookup output side by side. The contrast makes the value of synthesis immediately obvious."
---

# Policy Lookup — Self-Service Policy Synthesis

Sarah Okonkwo has been on the People team at a 200-person technology company in London for three years. This morning, for the fifteenth time this quarter, she received the same Slack message: "Hi Sarah, what's our parental leave policy?" The answer exists. It is in the employee handbook — page 34, Schedule 3, paragraph 14, buried in language written by employment lawyers for employment lawyers. The relevant section reads: "Employees who satisfy the qualifying conditions set out in paragraph 12(a) shall be entitled to Ordinary Maternity Leave of twenty-six (26) weeks commencing on a date notified in accordance with paragraph 13, followed by Additional Maternity Leave of up to twenty-six (26) weeks, of which the first thirteen (13) weeks shall be remunerated at the Statutory Maternity Pay rate then in force."

The employee who asked does not need paragraph 14 of Schedule 3. They need three things: how much time they get, how much they are paid during that time, and what they need to do to arrange it. This is a two-minute answer that takes Sarah fifteen minutes because she has to locate the policy, translate the legal language, check whether anything has changed since the last time she answered this question, and write a response that is accurate without being incomprehensible.

Sarah answers this question — and dozens like it — because employees cannot help themselves. The policies exist, but they are scattered across a shared drive, an HRIS system, a Confluence wiki, and several PDFs that may or may not be current. Even when employees find the right document, the language is impenetrable. So they ask Sarah. And Sarah's calendar fills up with information routing — answering questions that have written answers — while the work that genuinely needs her judgment waits.

## Why Employees Cannot Find Policies

The policy communication problem has three layers, and understanding them matters because `/policy-lookup` addresses each one differently.

| Barrier               | What Happens                                                        | Example                                                                                                 |
| --------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Scattered sources** | Policies live in multiple systems with no single entry point        | Handbook on SharePoint, benefits on HRIS, remote work policy in a Slack post from 2024                  |
| **Legal language**    | Policies are written for legal defensibility, not comprehension     | "Employees satisfying qualifying conditions under paragraph 12(a)" instead of "all full-time employees" |
| **Staleness**         | Summaries and FAQs fall out of date when underlying policies change | Intranet FAQ still shows last year's statutory sick pay rate                                            |

**Scattered sources** mean employees do not know where to look. They search the intranet, find nothing, and message HR. `/policy-lookup` does not solve the scattering — your policies still live where they live — but it eliminates the consequence: instead of the employee searching five systems, they ask a question in plain language and get an answer with a source citation.

**Legal language** means employees find the policy but cannot extract the answer. A 40-page employee handbook is technically complete but practically useless for someone who just wants to know how many days of holiday they have. `/policy-lookup` transforms the legal language into a plain-language summary that preserves the substance without the jargon.

**Staleness** means even good summaries become dangerous. The intranet FAQ says statutory sick pay is one rate; the actual rate changed in April. `/policy-lookup` synthesises from the policy information you provide at the time you ask, so the summary reflects whatever you feed it — but this means you must feed it current policy data, not last year's handbook.

:::caution Summaries Are Not Policy
A `/policy-lookup` summary is a translation aid, not a policy document. The source policy remains authoritative. Every summary must cite the specific document and section it was synthesised from, so that any employee — or their manager, or a lawyer — can trace the summary back to the governing text. Unsourced summaries are worse than no summary at all, because they create a false sense of certainty.
:::

## How `/policy-lookup` Works

The `/policy-lookup` skill takes a plain-language question about a policy topic and returns a structured summary. It works in two modes:

**Standalone mode** (always available): You paste or describe the relevant policy, and `/policy-lookup` synthesises it into a plain-language summary. This is how you will use it in this lesson.

**Connected mode** (when knowledge base tools are linked): `/policy-lookup` searches your connected handbook and policy documents automatically. You ask a question; it finds and synthesises the answer without you pasting anything.

In both modes, the output follows the same structure:

| Output Section                 | Purpose                                                      |
| ------------------------------ | ------------------------------------------------------------ |
| **Quick Answer**               | 1-2 sentence direct answer to the question                   |
| **Details**                    | Relevant policy details in plain language                    |
| **Exceptions / Special Cases** | Edge cases the employee should know about                    |
| **Who to Contact**             | Named person or team for questions beyond what is documented |
| **Source**                     | Document name, section, and page reference                   |

## Worked Example: Parental Leave Policy Lookup

Sarah wants to stop answering the parental leave question manually. She will use `/policy-lookup` to create a reusable plain-language summary.

**Step 1 — Invoke the skill with the policy details:**

```
/policy-lookup parental leave

Our parental leave policy (UK jurisdiction, 200-person technology company):
- Primary carer: 26 weeks at full pay, then 13 weeks at statutory rate
- Secondary carer: 2 weeks at full pay
- Notice required: 8 weeks before planned leave start
- KIT days: up to 10 Keeping in Touch days at normal daily rate
- Pension contributions continue based on full salary during leave
- Holiday continues to accrue during leave
- Right to return to same role (or equivalent after 26+ weeks)
```

**Step 2 — Review the output.** The skill should return something structured like this:

```
## Policy: Parental Leave

### Quick Answer
Primary carers receive 26 weeks at full pay followed by 13 weeks at the
statutory rate. Secondary carers receive 2 weeks at full pay. You need to
give HR at least 8 weeks' notice before your planned leave start date.

### Details
**Primary carer (birth parent or primary adopter):**
- Full pay: 26 weeks at your normal salary
- Statutory pay: 13 weeks at the Statutory Maternity/Paternity Pay rate
- Unpaid leave: up to 13 additional weeks available (52 weeks total)

**Secondary carer:**
- Full pay: 2 weeks at your normal salary
- Can be taken any time within 56 days of birth or placement

**During your leave:**
- Holiday continues to accrue
- Pension contributions continue (based on full salary)
- You may work up to 10 Keeping in Touch (KIT) days without ending
  your leave — paid at your normal daily rate

### Exceptions / Special Cases
- Adoption leave follows the same entitlements as maternity leave
- Shared Parental Leave may allow you to split leave between partners
  — speak to HR for details
- If your role is made redundant during leave, you have priority for
  suitable alternative roles

### Who to Contact
People Team: [Name] | [email] | [phone]
Your manager for practical team-level planning

### Source
Employee Handbook, Section 7: Family Leave | Last updated: [date]
```

**Step 3 — Verify the output against your source policy.**

| What to Verify          | How to Check                                           | What to Do If Wrong                                       |
| ----------------------- | ------------------------------------------------------ | --------------------------------------------------------- |
| **Entitlement figures** | Compare weeks and pay rates against the source policy  | Correct the prompt with exact figures and re-run          |
| **Notice period**       | Confirm 8 weeks matches the policy                     | Update if the policy specifies a different period         |
| **Statutory rate**      | Check the current statutory rate for your jurisdiction | Add the current rate explicitly if it is missing or wrong |
| **Exceptions**          | Verify shared parental leave and adoption references   | Remove any exceptions your policy does not actually offer |
| **Escalation contact**  | Confirm the named contact is current and correct       | Replace placeholder with the actual name and email        |
| **Source citation**     | Verify the document name, section number, and date     | Correct to match your actual handbook structure           |

:::note Your output will vary
The exact wording, structure, and level of detail will depend on how much policy information you provide. The teaching point is the verification process: every figure, every entitlement, every exception must be checked against the source policy before you share the summary with employees. `/policy-lookup` synthesises — it does not guarantee accuracy.
:::

## Exercise: Build a 20-Question Policy FAQ Knowledge Base

**Type:** Applied Practice
**Time:** 30 minutes
**Plugin command:** `/policy-lookup`
**Goal:** Create a structured FAQ knowledge base with 20 plain-language policy answers that can power employee self-service

This FAQ knowledge base becomes the foundation for the HR Knowledge Base Agent you will build in Lesson 4.

### Step 1 — Identify the 20 Most-Asked Questions

Think about the questions employees ask HR most frequently. If you work in HR, pull from your experience or your ticketing system. If you are learning HR operations, use this starter list and adapt it to a company you know:

| Category                 | Example Questions                                                                                                                               |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Leave**                | What is our holiday entitlement? How do I book time off? What is the sick pay policy? What is the parental leave policy?                        |
| **Pay & Benefits**       | When do I get paid? How do I read my payslip? What benefits are included? How do I claim expenses?                                              |
| **Working Arrangements** | What is the remote working policy? Can I work from another country? What are the core hours? How do I request flexible working?                 |
| **Career**               | How does the promotion process work? What is the learning and development budget? When is the next pay review? How do performance reviews work? |
| **Admin**                | How do I update my personal details? Where do I find my contract? Who do I contact about a workplace concern? How do I give notice?             |

Write your 20 questions in a numbered list before proceeding.

### Step 2 — Synthesise Plain-Language Answers

For each of your 20 questions, run `/policy-lookup` with the relevant policy information:

```
/policy-lookup [policy topic]

Question: "[The question as an employee would ask it]"
Policy: "[Paste the relevant policy text, or describe the key entitlements
and processes]"
Audience: All employees
Jurisdiction: [Your jurisdiction, e.g. UK]
Must include: what they are entitled to, the process, who to contact
```

For each output, verify:

- **Accuracy** — Does the summary match your actual policy?
- **Plain language** — Would a new joiner understand this on first reading?
- **Completeness** — Does it answer the full question, including common edge cases?
- **Source citation** — Does it reference the specific policy document and section?
- **Escalation** — Does it direct complex or personal cases to a named HR contact?

### Step 3 — Structure as FAQ Entries

Format each verified answer as a structured FAQ entry:

```markdown
**Q: [The question as an employee would ask it]**

A: [Your verified plain-language answer from /policy-lookup]

Policy reference: [Document name, section, page — e.g. Employee Handbook, Section 7.2]
Contact for complex cases: [Name, email, phone]
Last verified: [Date you checked this answer against the source policy]
```

### Step 4 — Quality-Check Five Entries

Select the five most critical entries (those covering entitlements with financial or legal implications — parental leave, sick pay, notice periods, benefits, expenses). For each one:

1. Read the source policy text
2. Read your FAQ entry
3. Confirm every figure, entitlement, and process step matches
4. Check that the escalation contact is current
5. Verify the source citation points to the correct document and section

**Deliverable:** A 20-entry FAQ knowledge base document with plain-language answers, source citations, escalation contacts, and verification dates. Save this document — you will use it as the knowledge source for the HR Knowledge Base Agent in Lesson 4.

:::note Keep This File
The FAQ knowledge base you build here is the foundation for the HR Knowledge Base Agent in Lesson 4. Keep it in your working files — you will configure the agent to answer employee questions using these entries.
:::

## Try With AI

:::tip Try With AI
Use these prompts in Cowork or your preferred AI assistant.

**Reproduce**: Synthesise a single policy into a plain-language summary.

```
Here is our company's sick pay policy (UK, 200-person company):

- 10 days at full pay per rolling 12-month period
- After 10 days, Statutory Sick Pay applies
- Absence of 3+ consecutive days requires a fit note from your GP
- You must notify your manager before your normal start time on the
  first day of absence
- Return-to-work meeting with your manager on your first day back

Synthesise this into a plain-language summary that any employee could
understand. Include: what they are entitled to, what they need to do,
and who to contact. Cite the source as "Employee Handbook, Section 4.3."
```

**What you are learning:** Translating a structured policy into a summary that preserves every entitlement and process step while removing jargon — the core skill that `/policy-lookup` automates.

**Adapt**: Apply this to your own organisation's policies.

```
I am going to paste our company's [remote working / expense / leave]
policy below. Please synthesise it into a plain-language summary with
these sections:
- Quick Answer (1-2 sentences)
- Details (what the employee is entitled to and the process)
- Exceptions (edge cases or special situations)
- Who to Contact (for questions the summary does not cover)
- Source (document name and section)

Then tell me: what is unclear or missing from this policy that
employees are likely to ask about?

[Paste your policy here]
```

**What you are learning:** Applying policy synthesis to your own organisation's documents reveals gaps — policies that are ambiguous, incomplete, or silent on common scenarios.

**Apply**: Audit a policy for communication gaps.

```
Review the following policy summary and identify:
1. Any entitlements or processes that are ambiguous or could be
   misinterpreted
2. Any common employee questions this summary does NOT answer
3. Any figures or rates that may be time-sensitive (e.g. statutory
   rates that change annually)
4. Whether the escalation path is clear — does the employee know
   exactly who to contact and how?

Rate the summary on a scale of 1-5 for: accuracy, clarity,
completeness, and actionability. For any score below 4, explain
what specific improvement would raise it.

[Paste a policy summary you have created]
```

**What you are learning:** Evaluating the quality of a policy summary — not just producing one — is the skill that ensures employees receive accurate, complete information. This audit framework applies to any AI-generated content, not just HR policies.
:::

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 4: The HR Knowledge Base Agent →](./04-hr-knowledge-base-agent.md)
