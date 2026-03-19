---
name: onboard
version: 1.0
description: >
  Activate for: onboarding, onboard, new hire, new starter, new employee,
  induction, day one, first day, pre-boarding, pre-onboarding, 30 60 90,
  30-60-90 plan, first 90 days, joining plan, welcome plan, orientation,
  manager onboarding guide, buddy programme, new joiner, start date.
plugin-commands: /onboard
sensitivity: ROUTINE
---

## ONBOARDING PLAN WORKFLOW

### Phase 1: Information Gathering

Before generating a plan, collect:
  Required:
  - Employee name and role title
  - Department and team
  - Start date
  - Reporting manager (name)
  - Location (office / hybrid / remote)
  - Experience level (years in role type; prior industry)
  - Key projects or deliverables in first 90 days

  From hr.local.md:
  - Standard pre-boarding checklist for this role type
  - Mandatory compliance training (with deadlines)
  - 30-60-90 framework for this seniority level
  - Buddy programme configuration

### Phase 2: Pre-Boarding Checklist

Generate a pre-boarding checklist with THREE owners:

HR ADMIN (complete before Day 1):
  □ Offer letter signed and filed
  □ Right-to-work documentation obtained and verified
  □ HRIS record created
  □ Benefits enrolment pack sent
  □ Employee handbook and welcome email sent
  □ [Jurisdiction-specific: P45 / EOBI form / other — load from hr.local.md]
  □ Day 1 schedule communicated to new starter

IT (complete by T-2 days before Day 1):
  □ Device ordered and configured (role-specific build from hr.local.md)
  □ System access provisioned (per role access matrix)
  □ Email and calendar set up
  □ Security and data training scheduled (Day 10 deadline)
  □ Building access / access card arranged (if office-based)

MANAGER (complete before Day 1):
  □ Team introduction email sent
  □ First week schedule blocked (no all-day meetings; no travel)
  □ Buddy assigned and briefed
  □ 30-60-90 plan drafted and ready to share Day 1
  □ Key stakeholder intro meetings booked for Week 2
  □ First solo task identified and ready to brief by Day 5

ALERT: Flag any critical pre-boarding item incomplete at T-3 days.
Critical items: device, system access, right-to-work verification.
If critical items are incomplete at T-3: escalate to HR immediately.

### Phase 3: 30-60-90 Day Plan Structure

Apply seniority framework from hr.local.md (or defaults below):

JUNIOR (0–3 years experience):
  30-day theme: "Understand the organisation, team, and role"
    Goals: orientation + observation + relationship building
    Success: can describe what the company does, who key people are,
             what their role contributes
  60-day theme: "First supervised contributions"
    Goals: deliver first task with guidance; identify learning gaps
    Success: first output delivered; learning gaps known and addressed
  90-day theme: "Independent on defined tasks"
    Goals: deliver independently on scoped work within the role
    Success: completing work without daily manager input

MID-LEVEL (3–7 years):
  30-day theme: "Understand context; make first contribution"
    Goals: orientation + first deliverable
    Success: has contributed meaningfully to one work stream
  60-day theme: "Own work streams"
    Goals: leading day-to-day on assigned areas
    Success: running defined responsibilities without manager direction
  90-day theme: "Performing at role level"
    Goals: full role performance; stakeholder relationships established
    Success: recognised by peers and stakeholders as effective in role

SENIOR / LEADERSHIP (7+ years):
  30-day theme: "Understand context + establish stakeholder relationships"
    Goals: rapid orientation; first stakeholder impressions formed
    Success: key stakeholders engaged; strategic context understood
  60-day theme: "Independent delivery + early strategic contribution"
    Goals: leading own work streams; first strategic input given
    Success: delivering independently; beginning to shape priorities
  90-day theme: "Strategic contribution + team impact"
    Goals: operating at full role level; beginning to improve team
    Success: recognised by leadership as performing at expected level

### Phase 4: Output Sections

SECTION 1: PRE-BOARDING CHECKLIST (by owner — HR / IT / Manager)
SECTION 2: WEEK 1 SCHEDULE (day-by-day; meeting names and purposes)
SECTION 3: 30-DAY PLAN (learning goals + first contributions + milestone)
SECTION 4: 60-DAY PLAN (ownership goals + milestone + check-in format)
SECTION 5: 90-DAY PLAN (performance goals + formal review format)
SECTION 6: MANDATORY COMPLETIONS (compliance training with deadlines)

### Phase 5: Supporting Documents

MANAGER BRIEFING (type:"manager-briefing"):
  One-page guide for the hiring manager.
  Readable in 5 minutes.
  Covers: what to do and when; common onboarding failure modes to avoid;
  how to run the 30/60/90 check-ins.

WELCOME MESSAGE (type:"welcome-message"):
  Warm, practical email to the new starter before Day 1.
  Includes: who to contact; what Day 1 looks like; one genuine
  expression of what the team is looking forward to working on together.
  Tone: warm and human; not corporate.

### Milestone Success Criteria Rule

Every 30-day, 60-day, and 90-day milestone must have success criteria
that are SPECIFIC and OBSERVABLE — not generic.

  WEAK:    "Understands the company culture"
  STRONG:  "Can describe the company's three strategic priorities
            and explain how their role contributes to one of them"

  WEAK:    "Is performing well"
  STRONG:  "Has delivered [specific deliverable] to [standard] and
            has received positive stakeholder feedback on [interaction]"

## NEVER DO THESE

- NEVER generate an onboarding plan without role-specific success criteria
  (generic plans are not useful and are often worse than no plan)
- NEVER omit the pre-boarding checklist — this is where onboarding
  fails most often; problems on Day 1 set a lasting negative tone
- NEVER assign a pre-boarding item without a specific owner (HR / IT / Manager)
- NEVER write "TBD" for mandatory compliance training deadlines —
  Day 10 is the standard; configure any exceptions explicitly
- NEVER create a 30-60-90 plan without a milestone check-in meeting
  booked in the calendar
