---
name: offer
version: 1.0
description: >
  Activate for: offer letter, job offer, employment offer, salary offer,
  contract terms, employment terms, new hire letter, conditional offer,
  unconditional offer, promotion letter, salary change letter, contract
  amendment, flexible working agreement, secondment letter, probation
  extension letter, salary increase letter, employment confirmation.
plugin-commands: /offer
sensitivity: CONFIDENTIAL — contains personal data and salary information
---

## OFFER LETTER WORKFLOW

### Pre-Generation Checklist

Before generating any employment document, confirm:
  □ Jurisdiction confirmed (employment law varies significantly)
  □ HR authorisation confirmed (offer letters require HR sign-off)
  □ Salary approved by the appropriate authority
  □ Role confirmed in the approved headcount plan
  □ Start date confirmed with the hiring manager

### Document Types

TYPE 1: OFFER LETTER (standard — new hire)
  Required inputs:
  - Full legal name of candidate
  - Role title (exactly as it will appear in the contract)
  - Department and reporting line (manager's full name and title)
  - Start date (or "to be confirmed")
  - Annual salary (or hourly rate for hourly workers)
  - Location (office / hybrid / remote — specify)
  - Probation period (duration)
  - Notice period (during probation; post-probation)
  - Holiday entitlement (days per year + bank holidays)
  - Acceptance deadline (typically 7–14 days)

  Jurisdiction-specific additions (load from hr.local.md):
  - UK: reference to contract to follow; P45 request; right-to-work check
  - Pakistan: EOBI registration notice; social security information
  - UAE: visa sponsorship confirmation; probation per UAE Labour Law

TYPE 2: PROMOTION LETTER
  Required inputs:
  - Employee name and current role
  - New role title and level
  - Effective date
  - New salary (if change) — or "salary remains unchanged" if no change
  - Any change to reporting line
  - New notice period (if changed)
  - Optional: acknowledgement of the achievement that led to this

TYPE 3: SALARY CHANGE LETTER
  Required inputs:
  - Employee name and role
  - Current salary
  - New salary and effective date
  - Reason (optional — annual review / market adjustment / etc.)
  - Next review date (if applicable)

TYPE 4: CONTRACT AMENDMENT
  Required inputs:
  - Employee name and current contract date
  - What is changing (one or more terms)
  - Effective date
  - Whether employee agreement is required (for material changes)

TYPE 5: FLEXIBLE WORKING AGREEMENT
  Required inputs:
  - Employee name and role
  - New working arrangement (hours / location / pattern)
  - Trial period (if applicable)
  - Review date
  - Any conditions (notice period to revert; attendance requirements)

### Offer Letter Output Format

  [Company letterhead — REPLACE BEFORE SENDING]
  [Date]

  [Candidate Full Name]
  [Address — ADD BEFORE SENDING]

  Dear [First Name],

  [SUBJECT: OFFER OF EMPLOYMENT — [ROLE TITLE] — ALL CAPS]

  [Opening paragraph: delight and welcome; the role]

  [Section: ROLE AND DEPARTMENT — role, department, reports to, location]
  [Section: START DATE — proposed date; adjustment note]
  [Section: SALARY — annual; paid monthly on [day]; review note]
  [Section: HOLIDAY — days + bank holidays; pro-rata note if applicable]
  [Section: PROBATIONARY PERIOD — duration; notice during probation]
  [Section: NOTICE PERIOD — post-probation notice on both sides]
  [Section: NEXT STEPS — acceptance deadline; what happens next]

  [Closing paragraph: genuine welcome]

  Yours sincerely,
  [Authorised signatory name, title]
  [Company name]

  [Acceptance signature block]

  NOTE AT BOTTOM OF EVERY OFFER LETTER GENERATED:
  ⚠️ REVIEW BEFORE SENDING: This document must be reviewed and
  authorised by HR before sending. Verify all figures, dates, and
  terms against the approved offer. Check jurisdiction-specific
  requirements. Remove this note before sending.

### Confidentiality Rules

All employment documents contain personal data:
- Do not share in unsecured channels
- File in the secure personnel record immediately on execution
- Retain per the data retention policy in hr.local.md
- Apply data subject access request procedures if requested

## NEVER DO THESE

- NEVER generate an offer letter without the jurisdiction note —
  employment terms have legal implications that vary by country
- NEVER include a salary figure that has not been confirmed as approved
- NEVER send an offer letter without the "REVIEW BEFORE SENDING" note
  being acknowledged and removed by an HR professional
- NEVER omit the right-to-work verification note (UK) or equivalent
  jurisdiction requirement — this is a legal obligation
- NEVER generate a dismissal, termination, or redundancy letter
  through this command — those require direct HR and legal involvement
