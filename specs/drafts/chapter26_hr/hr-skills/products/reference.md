---
name: reference
version: 1.0
description: >
  Activate for: reference letter, reference, employment reference,
  character reference, professional reference, write a reference,
  employment verification, confirm employment, verify employment,
  salary verification, dates of employment, job title verification,
  reference request, provide a reference, reference template,
  letter of recommendation, HR reference, factual reference.
plugin-commands: /reference
sensitivity: CONFIDENTIAL — contains personal employment data
---

## REFERENCE LETTER WORKFLOW

### Reference Types

TYPE 1: FACTUAL REFERENCE (most common corporate policy)
  Contents: job title, dates of employment, whether eligible for rehire
  Policy in many organisations: HR provides factual only;
  managers do not provide opinion references
  ALWAYS CHECK: what is this organisation's reference policy
  (from hr.local.md) before generating any content

TYPE 2: FULL PROFESSIONAL REFERENCE
  Contents: factual + performance assessment + specific achievements
  + professional recommendation
  Requirements: written authorisation from the employee;
  confirmation this is within the signer's authority

TYPE 3: EMPLOYMENT VERIFICATION LETTER
  Contents: confirms current employment status, role, and salary
  (for mortgage, visa, or rental applications)
  Contents: role title; employment type; start date; current salary;
  confirmation employment is ongoing as of letter date
  NEVER include: future salary projections; pending bonuses unless confirmed

### Reference Quality Rules

ACCURACY:
  Verify all facts against HRIS before including:
  - Exact dates of employment (start date and end date or "present")
  - Exact job title (as it appears in the employment record)
  - Salary: only include if employee has explicitly requested and consented
  - Rehire eligibility: follow the organisation's policy and process

TONE:
  Professional and neutral.
  If providing a positive reference: specific and evidenced.
  If unable to provide a positive reference: stick to factual only.
  NEVER: be dishonest or misleading about performance.
  NEVER: provide a reference you cannot stand behind.

LEGAL RISK:
  Two types of legal risk with references:
  1. Defamation: providing false negative information about an employee
  2. Misrepresentation: providing falsely positive information that
     influences hiring decisions; if the new employer relies on this
     and is harmed, liability may exist
  In both cases: stick to what you know to be factually true.
  When in doubt: factual reference only.

### Reference Output Format

TYPE 1 — FACTUAL REFERENCE:
  [Date]

  To Whom It May Concern / [Named recipient if known]

  Re: [Employee Full Name]

  This letter confirms that [Full Name] was employed by [Company Name]
  as [Job Title] from [Start Date] to [End Date / "the present"].

  [Their employment is ongoing as of the date of this letter. /
   They left the organisation on [date].]

  [OPTIONAL — only if organisation policy permits and it is true:
   [Name] is eligible for re-employment at [Company Name].]

  This reference is provided in a factual capacity only. For further
  information, please contact [HR contact name, email].

  Yours sincerely,
  [Name, Title — HR only for factual references]

TYPE 2 — FULL PROFESSIONAL REFERENCE:
  [Date]

  [Recipient name and address]

  Dear [Name / To Whom It May Concern],

  Re: Reference for [Employee Full Name]

  [Paragraph 1: Relationship — how long; in what capacity]
  [Paragraph 2: Performance — 2–3 specific achievements with evidence]
  [Paragraph 3: Character and ways of working — specific and honest]
  [Paragraph 4: Recommendation — genuine and proportionate]

  I am happy to discuss this reference further if helpful.

  Yours sincerely,
  [Name, Title, Contact details]

### Reference Policy Check

ALWAYS check before generating:
  □ Does this organisation's policy permit opinion references,
    or factual only? (Load from hr.local.md)
  □ Has the employee given written consent for this reference?
  □ Is the content consistent with the employee's documented performance?
  □ Has the reference been reviewed by HR before sending?

## NEVER DO THESE

- NEVER provide a reference that is inconsistent with the employee's
  documented performance record — this creates legal and ethical risk
- NEVER include salary information without the employee's explicit consent
- NEVER provide a reference that you personally do not believe to be true
  — if you cannot provide a positive reference, provide factual only
- NEVER send a reference without HR review, especially for former employees
  who left on difficult terms
- NEVER include information about disciplinary matters, health conditions,
  or protected characteristics in any reference
