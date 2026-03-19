---
name: hr-global-router
version: 1.0
description: >
  TOP-LEVEL ROUTER. Activate when ANY of these terms appear:
  onboarding, onboard, new hire, new starter, new employee, induction,
  30-60-90, day one, pre-boarding, policy, HR policy, leave policy,
  parental leave, sick pay, holiday, annual leave, absence, expense,
  remote work, flexible working, handbook, employee handbook,
  offer letter, employment contract, job offer, salary offer,
  job description, JD, job posting, role description, talent acquisition,
  performance review, appraisal, 360 feedback, performance management,
  talent match, internal mobility, succession planning, promotion,
  institutional knowledge, knowledge capture, knowledge transfer, offboarding,
  exit interview, resignation, reference letter, employment verification,
  HR query, HR question, HR help, people ops, people operations,
  HRIS, payroll, benefits, pension, health insurance, probation,
  disciplinary, grievance, conduct, capability, redundancy, termination.
author: Panaversity — The AI Agent Factory
chapter: 26 — People & Organizational Operations (HR)
plugin: https://claude.com/plugins/human-resources
---

## STEP 1 — IDENTIFY TASK AND LOAD PRODUCT FILE

| Query Pattern | Load Product File |
|---|---|
| Onboarding, new starter, 30-60-90, Day 1 plan | products/onboard.md |
| Policy, policy summary, explain policy, update policy | products/policy.md |
| Offer letter, employment letter, contract terms, salary letter | products/offer.md |
| Job description, JD, role description, job posting | products/jd.md |
| Performance review, appraisal, 360 feedback, review prep | products/review.md |
| Talent match, internal mobility, succession, who should we promote | products/match.md |
| Knowledge capture, institutional memory, what they know, exit knowledge | products/knowledge.md |
| Reference letter, employment verification, confirm employment | products/reference.md |
| HR query, employee question, policy question, self-service | products/query.md |
| Offboarding, exit process, resignation, leaver | products/offboard.md |

## STEP 2 — ALWAYS LOAD CONFIGURATION

Always load: hr.local.md
Check for:
- Company name, size, and jurisdiction (employment law varies by country)
- Policy library with document locations
- Statutory rates (sick pay, maternity pay, minimum wage) for jurisdiction
- Benefits summary by employment tier
- HR contact directory (names, emails, direct lines)
- Onboarding programme structure
- Performance review cycle and framework

IF hr.local.md NOT FOUND:
  Inform user: "No HR configuration found. Outputs will use general HR
  best practices for [inferred jurisdiction if known]. Run Exercise 8
  from Chapter 26 to build hr.local.md — it will make all outputs
  specific to your organisation's actual policies and contacts."

## STEP 3 — JURISDICTION CHECK

Before any output touching employment law or statutory entitlements:
  Confirm jurisdiction from hr.local.md.
  If jurisdiction not configured: ask user before generating.

  Employment law varies significantly:
  - UK: statutory sick pay, maternity/paternity pay rates, notice periods,
    unfair dismissal protection (2-year threshold), GDPR/UK GDPR
  - Pakistan: EOBI, Employees' Old-Age Benefits; provincial labour laws;
    Industrial Relations Act; no-standard statutory sick pay
  - UAE/Gulf: free zone vs. mainland; DIFC/ADGM separate regimes; gratuity
  - EU: varies by member state; working time directive; GDPR
  - US: federal + state law; at-will employment; FMLA; varies by state

  CRITICAL: Never state statutory entitlements as facts without confirming
  jurisdiction. A wrong statutory rate in an offer letter or policy
  summary is a legal liability.

## STEP 4 — MANDATORY OUTPUT HEADER (all HR outputs)

  TASK:          [e.g. Onboarding Plan — Ayesha Raza]
  DOCUMENT TYPE: [Onboarding Plan / Policy Summary / Offer Letter / etc.]
  JURISDICTION:  [UK / Pakistan / UAE / Other — or UNCONFIRMED]
  CONFIGURATION: [Loaded: hr.local.md / Not configured — using best practices]
  SENSITIVITY:   [Routine / Confidential / Sensitive personal data]

## MANDATORY OUTPUT SENSITIVITY LABELS

  ROUTINE: Policy summaries, JDs, onboarding plans, general queries
    → Standard output; no special handling required

  CONFIDENTIAL: Offer letters, salary details, performance reviews,
    talent assessments, reference letters
    → Output should note: "This document contains personal/confidential
      information. Handle in accordance with your data protection policy."

  SENSITIVE PERSONAL DATA: Medical information, disciplinary records,
    grievance documentation, termination details
    → NEVER generate automatically; always requires HR professional review
    → Output must include: escalation to named HR contact

## UNIVERSAL RULES — NON-NEGOTIABLE

- NEVER state statutory entitlements (sick pay rates, maternity pay,
  minimum wage) without confirming jurisdiction
- NEVER generate disciplinary letters, dismissal notices, or termination
  documentation without explicit HR professional review note
- NEVER answer individual employee situation queries (disputes, grievances,
  medical) in the knowledge base — always warm-handoff to HR
- NEVER produce an offer letter without noting it requires HR sign-off
  before sending
- NEVER omit the escalation path from any output involving an individual
  employee's circumstances
- ALWAYS include the policy source reference (document + section) in
  any policy explanation output
- ALWAYS include the contact for complex or individual circumstances
  in any policy-facing output
- ALWAYS treat performance and talent assessment outputs as CONFIDENTIAL
- NEVER make a promotion or compensation recommendation that sounds like
  a decision — all such recommendations require management and HR approval
