---
slug: /Business-Domain-Agent-Workflows/people-hr/offer-letters-employment-docs
sidebar_position: 7
title: "Offer Letters & Employment Documents"
description: "Eliminate the administrative burden of employment documentation: draft offer letters, promotion letters, and reference letters using /draft-offer and /reference, with jurisdiction-specific terms and mandatory HR review before sending"
keywords:
  [
    "people and hr",
    "hr operations",
    "hr agents",
    "offer letter",
    "employment documents",
    "draft offer",
    "reference letter",
    "employment verification",
    "promotion letter",
    "hr documentation",
    "confidential hr",
  ]
chapter: 37
lesson: 7
duration_minutes: 40

# HIDDEN SKILLS METADATA
skills:
  - name: "Draft Employment Offer Letters with Jurisdiction-Specific Terms"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Content-Creation"
    measurable_at_this_level: "Student can use /draft-offer to generate a complete offer letter with correct compensation structure, jurisdiction-specific additions, and the mandatory REVIEW BEFORE SENDING flag; then verify the output against hr.local.md before treating it as complete"

  - name: "Select and Generate the Correct Reference Letter Type"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Content-Creation"
    measurable_at_this_level: "Student can identify which of the three reference types (factual, professional, employment verification) is appropriate for a given request, use /reference to generate it, and verify it includes the REVIEW BEFORE SENDING warning and correct sensitivity label"

  - name: "Evaluate Employment Documents Against Legal and Policy Risk Criteria"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Safety"
    measurable_at_this_level: "Student can identify at least three categories of legal or policy risk in employment documents (salary without consent, undocumented performance claims, disciplinary history in references) and explain why each requires HR review before sending"

learning_objectives:
  - objective: "Explain the volume problem in employment documentation and quantify the time cost at a representative organisation"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student calculates the annual HR time cost of employment documentation using realistic volume estimates and explains why AI generation reduces this cost without reducing quality"

  - objective: "Use /draft-offer to generate an offer letter for a real or fictional role and verify it against a checklist of mandatory elements"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student invokes /draft-offer, receives a complete offer letter, and verifies: compensation structure accurate, jurisdiction-specific additions present (right-to-work UK / EOBI Pakistan), REVIEW BEFORE SENDING flag included, sensitivity label CONFIDENTIAL"

  - objective: "Use /reference to generate the correct reference type for a given request and explain the legal risk the type selection is managing"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student receives a reference request scenario, selects the correct type (factual/professional/employment verification), invokes /reference, and explains which legal risk the type selection addresses"

cognitive_load:
  new_concepts: 4
  concepts_list:
    - "Employment document types, offer, promotion, salary change, contract amendment, flexible working, and the reference letter family"
    - "Jurisdiction-specific additions, UK right-to-work and P45, Pakistan EOBI, UAE probation under Labour Law"
    - "Reference letter types, factual, professional, and employment verification, with distinct legal risk profiles"
    - "Two-direction legal risk in references, defamation (false negative) and misrepresentation (falsely positive)"
  assessment: "4 concepts, moderate load. The document types form a family (offer + variants); the reference letter types form a second family. Jurisdiction-specific additions are the most detail-heavy concept but are presented as a checklist pattern rather than requiring memorisation. The two-direction legal risk is the conceptual centrepiece that gives the REVIEW BEFORE SENDING requirement meaning."

differentiation:
  extension_for_advanced: "Map your organisation's current employment document process end-to-end: who originates, who reviews, who signs, how long each step takes, and what the error rate is (wrong name, wrong salary, wrong start date in the final letter). Then calculate: if /draft-offer reduced the drafting step from 30 minutes to 2 minutes for every document, what would the annual time saving be in your organisation? What would you do with that time?"
  remedial_for_struggling: "Focus on one document type: the offer letter. Run /draft-offer with the Marcus Chen example from the lesson. Verify it against the mandatory elements checklist. Understand each element and why it is there, especially the REVIEW BEFORE SENDING warning. Once you can verify an offer letter against the checklist, the other document types follow the same pattern."

teaching_guide:
  key_points:
    - "Both /draft-offer (official plugin) and /reference (custom plugin) output CONFIDENTIAL documents: every worked example must show the sensitivity label"
    - "The REVIEW BEFORE SENDING warning is not optional; it is mandatory output from both skills. Students must understand that AI-generated employment documents require HR review before use"
    - "The two-direction legal risk in references is the most important concept in this lesson: defamation (false negative) and misrepresentation (falsely positive), both create liability. The safest response when in doubt is factual reference only"
    - "Jurisdiction-specific additions are the most common source of errors in offer letters: the UK right-to-work check is legally required; the Pakistan EOBI contribution is statutory. These cannot be omitted"
  misconceptions:
    - "The AI-generated offer letter can be sent directly once it looks right. Correction: every offer letter requires HR review before sending, regardless of how accurate it looks. The skill generates a complete draft ; it does not replace the HR sign-off that verifies facts against the employment record, confirms compensation against the approved band, and ensures compliance."
    - "A positive reference is always better than a factual reference. Correction: a positive reference that overstates performance creates misrepresentation liability. If the new employer makes a hiring decision based on an inflated reference and suffers harm as a result, the organisation that provided the reference may face liability. When in doubt: factual reference only."
    - "Including salary in a reference is standard practice. Correction: salary information should never be included in a reference without the employee's explicit written consent. This applies even when the requesting organisation asks for it."
  discussion_prompts:
    - "Think about the last offer letter your organisation issued. How long did it take from 'candidate accepted' to 'signed letter received'? What were the bottlenecks? Where did errors occur?"
    - "Your organisation has a policy of factual references only , but a departing employee asks you to write a personal professional reference for them. What do you do? What are the risks on each side?"
  teaching_tips:
    - "The volume calculation (50-80 documents × 20-30 minutes each = 25+ hours per year) is immediately resonant for HR professionals. Start with the maths ; it creates the motivation for everything that follows."
    - "The REVIEW BEFORE SENDING warning is worth dwelling on: students should understand this is a hard rule, not a suggestion. The AI draft is a starting point, not a finished document."
    - "The two reference legal risk directions (defamation vs misrepresentation) are the conceptual hook that makes the three reference types memorable: each type manages a different risk profile."
---

# Offer Letters & Employment Documents

Priya Kapoor sent the message at 5:47pm: _"We've made the decision on the Product Marketing Manager role. Marcus Chen is our hire. Can we get the offer letter out tomorrow?"_

The HRBP responsible for the London office had three other letters to draft before end of week. The offer letter template was in a shared drive that had not been reorganised since 2023. Marcus's role had a bespoke compensation structure, base salary, a signing bonus contingent on start date, and an enhanced holiday entitlement negotiated during the process. The UK right-to-work check requirements had changed in the previous quarter, and the HRBP was not certain whether the standard template had been updated to reflect them.

In a traditional HR operation, this takes 30 minutes to draft, 15 minutes for a senior HR review, and carries a real risk of a delay if either person is occupied. At 100 people, a growing technology company might issue 50-80 employment documents per year, offer letters, promotion letters, salary change notifications, contract amendments, flexible working agreements. At 25 minutes each, that is more than 30 hours of HR time annually [VERIFY] on documents that share the same underlying structure, the same legal requirements, and the same formatting needs. Only the names, numbers, and role details change.

The `/draft-offer` skill generates a complete offer letter from the key variables in under two minutes. The 30 hours of drafting become 30 minutes of review. The HRBP's job shifts from writer to verifier: a better use of HR judgment.

## Five Employment Document Types

The offer letter is the primary document in a hiring workflow, but it is one of several employment documents that follow the same pattern: standard structure, jurisdiction-specific requirements, role-specific variables.

| Document Type                  | When Issued                         | Key Variables                                                                   |
| ------------------------------ | ----------------------------------- | ------------------------------------------------------------------------------- |
| **Offer letter**               | Hiring, candidate selected         | Role, compensation, start date, notice period, probation, holiday, jurisdiction |
| **Promotion letter**           | Internal promotion                  | New role title, new salary, effective date, any change to notice period         |
| **Salary change notification** | Annual review or market adjustment  | New salary, effective date, reference to review framework                       |
| **Contract amendment**         | Role change, working pattern change | Specific clause being amended, effective date, confirmation of all other terms  |
| **Flexible working agreement** | Approved flexible working request   | New working pattern, effective date, trial period if applicable, review date    |

All five follow the same `/draft-offer` workflow. The primary worked example here is the offer letter: the others adapt the same input/output pattern.

### Jurisdiction-Specific Additions

The most common source of errors in offer letters is jurisdiction-specific content. The `/draft-offer` skill adds jurisdiction-specific requirements when `hr.local.md` is configured , but the HR reviewer must verify these are correctly applied.

| Jurisdiction | Mandatory Additions                                                                                          | Why It Matters                                                                                                                |
| ------------ | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| **UK**       | Right-to-work check requirement; P45 request from departing employer; reference to statutory notice minimums | Right-to-work checks are legally required before employment begins, missing this creates criminal liability for the employer |
| **Pakistan** | EOBI (Employees Old-Age Benefits Institution) contribution confirmation; reference to provincial labour law  | EOBI contributions are statutory; omitting them from the offer creates payroll compliance issues from Day 1                   |
| **UAE**      | Reference to probation period under UAE Labour Law (maximum 6 months); end-of-service gratuity structure     | UAE Labour Law specifies exact probation period limits, probation terms that exceed the statutory maximum are unenforceable  |

## Worked Example: Marcus Chen's Offer Letter with `/draft-offer`

Priya needs an offer letter for Marcus by tomorrow. The HRBP uses `/draft-offer`.

**Invoke `/draft-offer` with role details:**

```
/draft-offer
Candidate: Marcus Chen
Role: Product Marketing Manager
Department: Marketing
Salary: £68,000 per annum
Signing bonus: £3,000 (payable on start date; clawback if leaves within 12 months)
Holiday: 25 days + UK bank holidays
Start date: 1 April 2026
Probation: 3 months
Notice (during probation): 1 week
Notice (post-probation): 3 months on either side
Location: London HQ, hybrid (3 days office / 2 days remote)
Reports to: Priya Kapoor, VP Marketing
Acceptance deadline: 14 days from issue
Jurisdiction: UK
```

**Expected output:**

```
TASK:          Offer Letter, Marcus Chen
DOCUMENT TYPE: Offer Letter
JURISDICTION:  UK
CONFIGURATION: hr.local.md loaded
SENSITIVITY:   CONFIDENTIAL

[Company letterhead]
18 March 2026

Marcus Chen
[Address, add before sending]

Dear Marcus,

OFFER OF EMPLOYMENT, Product Marketing Manager

We are delighted to offer you the position of Product Marketing Manager
at [Company Name], reporting to Priya Kapoor, VP Marketing.

ROLE AND DEPARTMENT
  Position:    Product Marketing Manager
  Department:  Marketing
  Reports to:  Priya Kapoor, VP Marketing
  Location:    London HQ, hybrid (3 days office / 2 days remote)

START DATE
  Your proposed start date is 1 April 2026. Please let us know if this
  requires adjustment.

SALARY
  Your annual salary will be £68,000, paid monthly in arrears on the
  last working day of each month. Salaries are reviewed annually.

SIGNING BONUS
  A one-time signing bonus of £3,000 will be paid on your start date.
  This is subject to a clawback provision: if you leave within 12 months
  of your start date, the full amount is repayable. Details will be in
  your contract of employment.

HOLIDAY
  You are entitled to 25 days of annual leave per year, plus UK bank
  holidays. Leave entitlement accrues from your start date.

PROBATIONARY PERIOD
  Your first 3 months of employment will be a probationary period.
  During this period, either party may terminate employment with 1 week's
  written notice.

NOTICE PERIOD (POST-PROBATION)
  Following successful completion of your probationary period, the
  notice period will be 3 months on either side.

RIGHT TO WORK
  This offer is conditional on you providing evidence of your right to
  work in the United Kingdom before your start date. We will contact you
  separately to arrange the right-to-work check. [UK jurisdiction, mandatory]

NEXT STEPS
  Please confirm acceptance by signing and returning a copy of this
  letter within 14 days of the date above. We will then send your full
  contract of employment, new starter forms, and onboarding details.

  Please also arrange for your P45 to be forwarded from your previous
  employer, or complete a Starter Checklist if unavailable. [UK, mandatory]

We look forward to welcoming you to the team.

Yours sincerely,

[Authorised signatory]
[Name, Title]

Acceptance:
I accept the offer of employment as described above.
Signature: _______________________  Date: ___________
Full name: _______________________

WARNING: REVIEW BEFORE SENDING. This offer letter must be reviewed
by HR before sending. Verify all facts against the employment record and
approved compensation band. Remove this note before issuing.
```

**Verification checklist, before sending:**

| Element                      | Check                                          | Sign-Off |
| ---------------------------- | ---------------------------------------------- | -------- |
| Candidate name and address   | Correct spelling, address added                | □        |
| Role title                   | Matches approved headcount request             | □        |
| Salary                       | Within approved band for this role and level   | □        |
| Start date                   | Agreed with candidate and manager              | □        |
| Signing bonus terms          | Clawback clause matches approved offer         | □        |
| Notice periods               | Match company standard (or approved exception) | □        |
| Right-to-work (UK)           | Check requirement mentioned; process in place  | □        |
| P45 / Starter Checklist (UK) | Both options mentioned                         | □        |
| Acceptance deadline          | 14 days from issue date correct                | □        |
| Authorised signatory         | Correct person with authority to sign          | □        |
| REVIEW BEFORE SENDING        | Removed from final document                    | □        |

:::note Your output will vary
The exact offer letter structure will depend on your `hr.local.md` configuration and the jurisdiction. The REVIEW BEFORE SENDING flag will always appear. This is mandatory output. Remove it only after completing your HR review against the checklist above. Never send a document that still contains the warning.
:::

## Reference Letters with `/reference`

Reference letters use a different skill, `/reference` from the custom hr-operations plugin, because they carry a distinct risk profile from offer letters and require a different decision framework.

### Three Reference Letter Types

The first decision is type selection. The wrong type creates legal exposure; the right type manages it.

| Type                        | Contents                                                               | When to Use                                                                                     | Legal Risk Managed                                                  |
| --------------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **Factual**                 | Job title, dates of employment, rehire eligibility (if policy permits) | Default for all references; required by many corporate policies                                 | Defamation risk eliminated, only verifiable facts                  |
| **Professional**            | Factual + performance assessment + achievements + recommendation       | Only when: employee explicitly requests, written consent given, signer can truthfully recommend | Misrepresentation risk, must be accurate and substantiable         |
| **Employment verification** | Current status, role, salary (with consent), start date                | Mortgage, visa, rental applications, not hiring decisions                                      | Minimal , but salary must never be included without written consent |

### The Two-Direction Legal Risk

Employment references create liability in two directions, understanding both is essential before generating any reference.

| Risk                  | What It Means                                                                                                                                                                   | How to Avoid It                                                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Defamation**        | Providing false negative information that harms the employee's reputation or future employment                                                                                  | Stick to factual only. If you cannot substantiate a claim with documented evidence, do not include it. When in doubt: factual reference. |
| **Misrepresentation** | Providing falsely positive information that a new employer relies on when making a hiring decision; if the new employer suffers harm, the referring organisation may be liable | Only recommend what you genuinely believe to be true. Factual references protect against this; they make no performance claims.         |

:::caution Reference Policy First
Before generating any reference, check your organisation's reference policy from `hr.local.md`. Many organisations permit HR to provide factual references only, managers are not authorised to provide professional references without HR involvement. Operating outside this policy creates both legal and governance risk.
:::

### Worked Example: Reference Letter for a Departing Employee

A colleague at the EdTech company, Zara Hussain, Senior Data Engineer: is leaving after three years. She has asked Omar Farooq for a professional reference for a new role. Omar checks the company's reference policy (factual only from HR; professional references from managers require HR sign-off and written consent from the employee).

Zara has provided written consent. HR has approved. Omar uses `/reference`.

**Invoke `/reference`:**

```
/reference professional
Employee: Zara Hussain
Job title: Senior Data Engineer
Dates of employment: 14 March 2023 – 30 April 2026
Reference writer: Omar Farooq, Head of Analytics
Relationship: Zara reported to Omar for 3 years
Key achievements: Led migration of legacy data pipeline to cloud-native
architecture (reduced processing time by 40%); mentored two junior engineers
who both received promotions; delivered data infrastructure for company's
largest client integration
Character: Meticulous, proactive, earns trust quickly with technical and
non-technical stakeholders
Jurisdiction: Pakistan
Employee consent: Written consent provided [required for professional reference]
Policy check: HR has confirmed professional reference is authorised
```

**Expected output:**

```
TASK:          Reference Letter, Zara Hussain
DOCUMENT TYPE: Professional Reference
JURISDICTION:  Pakistan
CONFIGURATION: hr.local.md loaded
SENSITIVITY:   CONFIDENTIAL

18 March 2026

[Recipient name and address / To Whom It May Concern]

Re: Reference for Zara Hussain

I am writing to provide a professional reference for Zara Hussain, who
worked as a Senior Data Engineer at [Company Name] from March 2023 to
April 2026, reporting directly to me as Head of Analytics.

In three years, Zara made a measurable impact on our data infrastructure.
She led the migration of our legacy data pipeline to a cloud-native
architecture: a complex, high-risk project she delivered on schedule with
a 40% reduction in processing time. She did this while managing two junior
engineers through the transition, both of whom have since been promoted.
Her technical leadership on our largest client integration was a direct
factor in that client's successful onboarding.

Beyond technical delivery, Zara is one of the engineers who earns trust
with non-technical stakeholders naturally; she explains complex
infrastructure decisions in business terms without losing the technical
precision that makes those decisions sound. This is a combination that is
rare and valuable.

I recommend Zara without reservation and would welcome her back. I am
happy to speak further if it would be helpful.

Yours sincerely,

Omar Farooq
Head of Analytics
[Contact details]

WARNING: REVIEW BEFORE SENDING. This reference must be reviewed by HR
before sending. Verify all facts against HRIS records. Confirm the
reference is consistent with the employee's documented performance record.
Remove this note before issuing.
```

**What to verify in the output:**

| Check                 | What to Look For                                                   |
| --------------------- | ------------------------------------------------------------------ |
| Sensitivity label     | CONFIDENTIAL, must appear in the output header                    |
| Facts verified        | All dates, job titles, and achievement claims checked against HRIS |
| Consistency check     | Reference content is consistent with documented performance record |
| Consent confirmed     | Written consent from employee on file before issuing               |
| HR policy             | Matches what hr.local.md specifies for reference type              |
| REVIEW BEFORE SENDING | Removed from final document before issuing                         |

## Exercise: Offer Letter and Reference Letter

**Type:** Applied Practice
**Time:** 30 minutes
**Plugin commands:** `/draft-offer` (official human-resources plugin) + `/reference` (custom hr-operations plugin)
**Goal:** Draft one offer letter and one reference letter, verify both against their respective checklists, and identify the mandatory HR review points

### Part A: Offer Letter (15 minutes)

Draft an offer letter for Marcus Chen (or a fictional hire in your own organisation):

```
/draft-offer
Candidate: [Name]
Role: [Title and department]
Salary: [Amount and currency]
Start date: [Date]
Probation: [Duration]
Notice: [During probation / Post-probation]
Holiday: [Days + bank holidays]
Location: [Location and working pattern]
Reports to: [Manager name and role]
Jurisdiction: [UK / Pakistan / UAE / Other]
Any special terms: [Signing bonus, enhanced benefits, etc.]
```

After receiving the output, complete the verification checklist:

- Compensation details match the approved offer
- Jurisdiction-specific additions present (right-to-work for UK; EOBI for Pakistan)
- Sensitivity label is CONFIDENTIAL
- REVIEW BEFORE SENDING flag is present (remove only after real HR review)

### Part B: Reference Letter (15 minutes)

A departing employee is requesting a reference. Using this scenario (or a fictional one):

_Ayesha Raza is leaving after 18 months. She has been a high performer, delivered the Q1 analytics refresh ahead of schedule, established strong stakeholder relationships, and mentored two newer analysts. Her manager, Omar, wants to provide a professional reference. The company policy permits professional references from managers with written employee consent and HR sign-off._

**Step 1:** Identify the correct reference type and explain why.

**Step 2:** Check what hr.local.md policy requires before generating.

**Step 3:** Invoke `/reference` with relevant details.

**Step 4:** Verify the output, sensitivity label, REVIEW BEFORE SENDING flag, factual accuracy, and consistency with documented performance.

**Step 5, Extend:** Using the same `/draft-offer` skill, draft a promotion letter for a fictional internal promotion. Note what changes from an offer letter (new role title, new salary, effective date; no probation, no right-to-work recheck). What stays the same?

**Deliverable:** A verified offer letter and a verified reference letter, both with CONFIDENTIAL sensitivity labels, mandatory review warnings, and completed verification checklists. Plus one promotion letter draft.

:::note Keep This File
The offer letter you draft here connects to Lesson 11 (Offboarding), which references the original employment documentation when calculating entitlements and generating offboarding documents. Keep the offer letter as a reference for later lessons.
:::

## Try With AI

:::tip Try With AI
Use these prompts in Cowork or your preferred AI assistant.

**Reproduce**: Draft an offer letter for the Marcus Chen scenario.

```
Draft an offer letter for the following hire:
- Candidate: Marcus Chen
- Role: Product Marketing Manager, Marketing department
- Salary: £68,000 per annum
- Start date: 1 April 2026
- Probation: 3 months (1 week notice during probation)
- Notice post-probation: 3 months on either side
- Holiday: 25 days + UK bank holidays
- Location: London HQ, hybrid (3 days office / 2 days remote)
- Reports to: Priya Kapoor, VP Marketing
- Signing bonus: £3,000 on start date with 12-month clawback
- Jurisdiction: UK

Include all UK-specific mandatory content. Mark the document as
CONFIDENTIAL. Include a REVIEW BEFORE SENDING warning with a checklist
of what must be verified before sending.
```

**What you are learning:** The structure of a complete offer letter , and particularly how jurisdiction-specific content (UK right-to-work requirement, P45 instruction) is added automatically when the jurisdiction is specified. The REVIEW BEFORE SENDING warning and checklist teach the verification discipline.

**Adapt**: Apply to your next real hire.

```
I am drafting an offer letter for [role] at [company type and size].
Jurisdiction: [UK / Pakistan / UAE / Other].
Key terms: [salary, start date, notice period, holiday, probation].
Special terms: [any non-standard elements].

Draft the complete offer letter. Apply all jurisdiction-specific
requirements for [jurisdiction]. Mark as CONFIDENTIAL.

After the letter, list the top 3 things an HR reviewer must verify
before this letter can be sent, specific to the role details and
jurisdiction I have provided, not generic advice.
```

**What you are learning:** Jurisdiction-specific requirements vary significantly, applying them correctly to your actual context requires specifying the jurisdiction and verifying the output against the current statutory requirements. The reviewer checklist is the most important output for a real HR workflow.

**Apply**: Generate three document types from the same candidate data.

```
I have the following information about a new hire:
- Name: [Name], Role: [Title], Department: [Dept]
- Salary: [Amount], Start date: [Date], Reports to: [Manager]
- Jurisdiction: [Jurisdiction]

Using this same candidate data, generate three employment documents:
1. An offer letter (hiring)
2. A promotion letter (assuming they are promoted 18 months later to
   [new role] with [new salary])
3. A factual reference (assuming they leave after 3 years)

For each document: mark with the correct sensitivity level, include the
mandatory review warning, and list what changes between document types
versus what remains the same.
```

**What you are learning:** The employment document family shares a common structure, role, party names, dates, terms , but each type has distinct legal requirements, sensitivity levels, and review obligations. Generating all three from the same candidate data makes the differences visible and teaches the pattern rather than just a single document type.
:::

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 8: Performance Reviews Without Bureaucracy →](./08-performance-reviews.md)
