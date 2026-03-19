---
name: policy
version: 1.0
description: >
  Activate for: policy, HR policy, policy summary, explain policy,
  policy question, plain language policy, policy update, policy refresh,
  policy audit, what is the policy on, leave policy, sick policy,
  parental leave, maternity leave, paternity leave, holiday entitlement,
  expense policy, remote work policy, flexible working, code of conduct,
  handbook section, employee handbook, benefits policy, pension policy,
  disciplinary policy, grievance policy, data protection policy.
plugin-commands: /policy
sensitivity: ROUTINE (summaries) / CONFIDENTIAL (individual cases)
---

## POLICY WORKFLOW

### Policy Task Types

TYPE 1: PLAIN-LANGUAGE SUMMARY
  Audience: Employees asking "what does this policy mean for me?"
  Format:   Scannable; plain English; no legal jargon
  Must include:
  - What you are entitled to (the benefit / right)
  - What the process is (what you need to do)
  - The timeline (when to notify; how far in advance)
  - The contact for questions or complex cases
  - The policy source reference and link

  PLAIN-LANGUAGE RULES:
  - Maximum sentence length: 20 words
  - No Latin phrases or legal terminology without explanation
  - Active voice: "You receive 26 weeks" not "26 weeks are provided"
  - Concrete numbers: "25 days" not "a generous leave entitlement"
  - Process steps in numbered order, not paragraphs

TYPE 2: POLICY UPDATE / REFRESH
  Trigger: Statutory rate change; legal change; business policy change
  Process:
  1. Identify all documents containing the affected policy/rate
  2. Show current text and replacement text for each location
  3. Flag any inconsistencies between documents
  4. Generate updated plain-language summary
  5. Generate manager communication guide

  Rate change check (always include):
  - All employee-facing documents referencing the changed rate
  - HRIS configuration notes (if rates are configured in the system)
  - FAQ database entries referencing the old rate

TYPE 3: POLICY AUDIT
  Purpose: Assess policy currency, clarity, and completeness
  Output per policy:
  - Last reviewed date (from hr.local.md)
  - Plain-language score (1–5: how well would a new joiner understand this?)
  - Legal currency (jurisdiction-specific — are statutory references current?)
  - Gap flag (does this policy cover common questions it should address?)
  - Recommended action: UPDATE / SIMPLIFY / NO ACTION

TYPE 4: MANAGER COMMUNICATION GUIDE
  When a policy changes, managers need to:
  - Understand the change themselves
  - Explain it to their team
  - Answer common follow-up questions
  Format: One page; bullet points; Q&A for likely questions

### Policy Output Format (PLAIN-LANGUAGE SUMMARY)

  [POLICY NAME] — PLAIN LANGUAGE SUMMARY
  ════════════════════════════════════════════════════════════
  [One sentence: what this policy covers]
  Full policy: [document name, section, link] | Last updated: [date]

  WHAT YOU ARE ENTITLED TO
  [The entitlement in plain numbers and plain English]

  WHAT YOU NEED TO DO
  Step 1: [Action — by when — how]
  Step 2: [Action]
  Step N: [Outcome / what happens next]

  [Any additional context: KIT days, accrual rules, exceptions]

  YOUR RIGHTS
  [Any employment rights preserved during this leave/arrangement]

  QUESTIONS?
  Contact: [Named HR contact] | [email] | [direct line]
  Policy reference: [Document, Section N] | Updated: [date]
  ════════════════════════════════════════════════════════════

### Jurisdiction-Specific Policy Flags

UK:
  - Statutory Maternity Pay (SMP) current rate: confirm annually (April change)
  - Statutory Sick Pay (SSP) current rate: confirm annually
  - Statutory Paternity Pay current rate: confirm annually
  - Shared Parental Leave: complex — always recommend HR consultation
  - National Living Wage: confirm annually (April change)
  - IR35 / off-payroll: flag for contractor policies

Pakistan:
  - EOBI contributions: confirm current rate
  - Provincial minimum wages vary: confirm by province
  - Employees' Social Security: province-specific
  - Gratuity calculation: confirm per local Industrial Relations Act
  - No federal statutory sick pay: company policy defines entitlement

UAE:
  - End of Service Gratuity: confirm per Labour Law calculation
  - Free zone vs. mainland: different regimes
  - DIFC/ADGM: separate employment regulations
  - Annual leave: 30 calendar days after 1 year (federal)

NEVER state jurisdiction-specific rates as facts without confirming
against current hr.local.md configuration. Rates change annually.

## NEVER DO THESE

- NEVER produce a policy summary without the policy source reference
  (document name, section, link) — employees must be able to verify
- NEVER state a statutory rate (sick pay, maternity pay, minimum wage)
  without jurisdiction confirmation
- NEVER produce a policy summary that omits the escalation contact —
  complex individual circumstances require human HR judgment
- NEVER generate a policy for a disciplinary, grievance, or termination
  situation without flagging: "This situation requires direct HR
  involvement — please contact [named HR BP] before taking any action."
- NEVER produce a policy update without identifying ALL documents that
  contain the changed content — partial updates create contradictions
