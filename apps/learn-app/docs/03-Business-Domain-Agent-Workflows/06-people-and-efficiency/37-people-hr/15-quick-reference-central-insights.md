---
slug: /Business-Domain-Agent-Workflows/people-hr/quick-reference-central-insights
sidebar_position: 15
title: "Quick Reference & Central Insights"
description: "All 14 commands, 4 agents, and hr.local.md configuration sections in one place: plus the central insight that ties the chapter together"
keywords:
  [
    "people and hr",
    "hr operations",
    "hr agents",
    "quick reference",
    "command reference",
    "hr.local.md reference",
    "hr commands",
    "hr plugin",
    "chapter summary",
  ]
chapter: 37
lesson: 15
duration_minutes: 20

# HIDDEN SKILLS METADATA
skills:
  - name: "Use the Chapter 37 Command Reference as an Operational Lookup Tool"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Remember"
    digcomp_area: "Information"
    measurable_at_this_level: "Student can identify the correct command, plugin source, and sensitivity level for any HR task described in the chapter, without re-reading individual lessons"

  - name: "Apply the Sensitivity Classification Framework to Any HR AI Output"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Safety"
    measurable_at_this_level: "Student can correctly classify any HR AI output as ROUTINE, CONFIDENTIAL, or SENSITIVE PERSONAL DATA, and describe the appropriate handling for each"

learning_objectives:
  - objective: "Locate the correct command and plugin for any HR task covered in this chapter"
    proficiency_level: "B1"
    bloom_level: "Remember"
    assessment_method: "Student can answer five command-lookup questions (what command handles X? which plugin provides Y?) correctly without referring to individual lessons"

  - objective: "Explain the central insight of the chapter: what changes and what stays the same"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student can articulate the explicit/tacit distinction, the three functions, and the 60/40 boundary in their own words"

cognitive_load:
  new_concepts: 0
  concepts_list: []
  assessment: "This is a reference lesson; no new concepts. Cognitive load comes from consolidation and recall, not new learning. The tables serve as externalised memory, reducing the load of remembering 14 commands across two plugins."

differentiation:
  extension_for_advanced: "Use this quick reference as the basis for an HR team onboarding guide. Which commands would you introduce in Week 1? Which require existing HR context to use effectively? Design a 4-week skill-building plan for an HR generalist new to AI-assisted HR operations."
  remedial_for_struggling: "Focus on three commands, /policy-lookup (information routing), /jd (process execution), and /knowledge (knowledge capture). If you can use these three confidently, you have the foundational skill for each function. Return to the other commands as you encounter the relevant HR scenarios."

teaching_guide:
  key_points:
    - "This lesson is a reference, not new content, send students here whenever they cannot remember which command to use"
    - "The Chapter Contract Answers section is the clearest statement of what students should now be able to do"
    - "The sensitivity classification guide is worth discussing in depth, misclassifying HR data has real consequences"
  misconceptions:
    - "Having the reference means you do not need to understand the lessons. Correction: the reference tells you which command to use. The lessons tell you how to verify the output, what to look for, and when to escalate, none of which is captured in a table."
  discussion_prompts:
    - "Which of the 14 commands do you think will be most valuable for your organisation , and which do you think will need the most human judgment to use safely?"
  teaching_tips:
    - "Have students test themselves against the Chapter Contract Answers before looking at the reference tables. The gap between what they can answer and what the chapter covers tells them where to go back."
---

# Quick Reference & Central Insights

This lesson is a reference. There are no new concepts here, only clear tables and the central insight that ties the chapter together. Return here whenever you need to remember which command handles which task, which plugin provides it, or which configuration field controls a specific output.

## The Central Insight

> _Explicit knowledge becomes findable without asking a person. Tacit knowledge gets captured before it walks out the door. HR professionals are freed for the 40% that only humans can do._

This is what Chapter 37 builds toward. The 14 commands and 4 agents in this chapter do not replace HR judgment; they eliminate the administrative overhead that crowds it out. Every command in the reference below handles a task that belongs to the 60%. Every escalation path in every lesson points to the 40% that stays with humans.

## Complete Command Reference

### Official Plugin: `human-resources` (Anthropic)

Install: Cowork → Customize → Browse plugins → "Human Resources"

| Command                | Function                                    | Sensitivity  | Covered In |
| ---------------------- | ------------------------------------------- | ------------ | ---------- |
| `/policy-lookup`       | Find and explain policies in plain language | ROUTINE      | Lesson 3   |
| `/onboarding`          | Onboarding plans and schedules              | ROUTINE      | Lesson 5   |
| `/draft-offer`         | Offer letters and employment documents      | CONFIDENTIAL | Lesson 7   |
| `/interview-prep`      | Interview questions and rubrics             | ROUTINE      | Lesson 6   |
| `/performance-review`  | Performance reviews                         | CONFIDENTIAL | Lesson 8   |
| `/comp-analysis`       | Compensation analysis and benchmarking      | CONFIDENTIAL | Lesson 9   |
| `/org-planning`        | Organisational planning and restructuring   | CONFIDENTIAL | Lesson 9   |
| `/people-report`       | People analytics and reporting              | CONFIDENTIAL | Lesson 13  |
| `/recruiting-pipeline` | Recruiting pipeline management              | CONFIDENTIAL | Lesson 13  |

### Custom Plugin: `hr-operations` (Panaversity)

Install: Cowork → Customize → + → Add marketplace from GitHub → panaversity/agentfactory-business-plugins → hr-operations

| Command      | Function                                      | Sensitivity  | Covered In |
| ------------ | --------------------------------------------- | ------------ | ---------- |
| `/jd`        | Job descriptions with inclusive language      | ROUTINE      | Lesson 6   |
| `/match`     | Internal talent matching and succession       | CONFIDENTIAL | Lesson 9   |
| `/knowledge` | Institutional knowledge capture               | CONFIDENTIAL | Lesson 10  |
| `/reference` | Reference letters and employment verification | CONFIDENTIAL | Lesson 7   |
| `/offboard`  | Offboarding processes and knowledge transfer  | CONFIDENTIAL | Lesson 11  |

## Agent Summary

All four agents are part of the custom `hr-operations` plugin. Each operates as a persistent background process, triggered automatically, not by manual command invocation.

| Agent                         | Purpose                                       | Trigger                      | Schedule                   | Sensitivity       |
| ----------------------------- | --------------------------------------------- | ---------------------------- | -------------------------- | ----------------- |
| `knowledge-base-agent`        | 24/7 employee Q&A with escalation             | Always-on (Slack/Teams)      | Continuous                 | ROUTINE (queries) |
| `onboarding-orchestrator`     | New hire workflow automation (T-14 to Day 90) | HRIS new hire record         | T-14 through Day 90        | CONFIDENTIAL      |
| `policy-maintenance-agent`    | Policy currency and statutory rate monitoring | Monthly + rate change events | 1st Monday of each month   | ROUTINE           |
| `offboarding-knowledge-agent` | Departure knowledge capture                   | HRIS resignation record      | Within 24 hours of trigger | CONFIDENTIAL      |

Agent setup, configuration, and deployment are covered in Lessons 4, 5, 11, and 12.

## Sensitivity Classification Guide

Every AI output in this chapter carries one of three sensitivity labels. The label tells you how to handle the output, who can see it, how to store it, and what to do if something goes wrong.

| Label                       | When to Use                                                                   | Examples                                                                        | Handling                                                                     |
| --------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **ROUTINE**                 | Policy summaries, JDs, general queries, onboarding plans                      | `/policy-lookup` output, `/jd` output, `knowledge-base-agent` general responses | Standard handling, can be shared with employees                             |
| **CONFIDENTIAL**            | Anything containing personal data, salary, performance, or talent information | `/draft-offer`, `/performance-review`, `/match`, `/reference`, `/comp-analysis` | Contains personal/confidential data, handle per your data protection policy |
| **SENSITIVE PERSONAL DATA** | Medical, disciplinary, grievance, termination                                 | Any output touching health, conduct investigations, or dismissal                | NEVER auto-generate; escalate immediately to a named HR contact             |

### The Escalation Rule

When any query touches SENSITIVE PERSONAL DATA territory, the correct response is always a warm handoff:

```
I can see this involves [medical / disciplinary / grievance] information.
This is outside what I can assist with directly. Please contact
[named HR contact] at [email / phone] who can handle this with
the appropriate care and confidentiality.
```

This pattern appears in every lesson. It is not a limitation of the tools; it is the boundary between what AI can do and what only humans should do.

## hr.local.md Configuration Reference

`hr.local.md` has eight sections. This table summarises what each section controls in plugin output.

| Section                      | Fields                                                                             | Controls                                                           |
| ---------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| **Organisation Profile**     | Name, size, sector, location, HRIS, HR team                                        | Organisation identity in all outputs                               |
| **Jurisdiction**             | Employment law jurisdiction, leave entitlement, notice periods, statutory sick pay | Employment rights figures and statutory references                 |
| **Policy Library**           | Document locations for each policy                                                 | Source citations in `/policy-lookup` output                        |
| **Benefits**                 | Leave days, sick pay, parental leave, pension, health insurance, L&D budget        | Benefits references in offer letters, onboarding, policy summaries |
| **HR Contacts**              | Named contacts for HR, payroll, benefits, IT, legal, OHW, EAP                      | Escalation paths in all outputs                                    |
| **Onboarding Configuration** | Pre-boarding window, 30/60/90 goals, buddy programme, systems to provision         | `/onboarding` output structure and timelines                       |
| **Performance Review Cycle** | Frequency, months, rating framework, competency framework, 360° process            | `/performance-review` structure and language                       |
| **Reference Letters**        | Reference policy, authorised signatories, what is and is not confirmed             | `/reference` output scope and compliance                           |

### Updating Statutory Rates

Statutory rates change annually in most jurisdictions (typically April in the UK; varies for Pakistan provincial minimum wages). When rates change:

1. Update the **Jurisdiction** section of `hr.local.md` with the new rate and the effective date
2. Verify by running `/policy-lookup statutory sick pay` and checking the figure matches
3. If the `policy-maintenance-agent` is running, it will flag the discrepancy automatically , but the update to `hr.local.md` is still manual

### Adding New Policies

When your organisation adds or significantly revises a policy:

1. Add the new policy location to the **Policy Library** section
2. Run `/policy-lookup [new policy topic]` to verify the output references the correct document
3. If the `policy-maintenance-agent` is running, schedule a policy review in the agent's configuration to include the new policy in its next sweep

## Chapter Contract Answers

By the end of Chapter 37, you should be able to answer all five of these questions. These were set in the Chapter README as the chapter's completion criteria.

**1. What is the difference between explicit and tacit knowledge in HR , and why does the distinction matter?**

Explicit knowledge exists in documents, theoretically findable. Tacit knowledge exists in people's heads, invisible until they leave. The distinction matters because each requires a different solution: explicit knowledge needs better findability (the `knowledge-base-agent`); tacit knowledge needs systematic capture before it disappears (`/knowledge` and the `offboarding-knowledge-agent`).

**2. Which HR tasks belong to the 60% (AI can handle) and which belong to the 40% (humans must handle)?**

The 60% is information routing, repetitive process execution, and structured knowledge capture, anywhere the answer follows a known pattern. The 40% is difficult conversations, sensitive investigations, genuine talent judgement, ethical decisions, and any situation touching individual dignity, health, or conduct. The boundary is the SENSITIVE PERSONAL DATA label: when a query reaches that territory, it belongs in the 40%.

**3. How do you install and configure both HR plugins, and how does hr.local.md make outputs organisation-specific?**

Install the official `human-resources` plugin via the Cowork store. Install the custom `hr-operations` plugin via Cowork → Customize → + → Add marketplace from GitHub → panaversity/agentfactory-business-plugins. Configure `hr.local.md` with the eight sections: organisation profile, jurisdiction, policy library, benefits, HR contacts, onboarding configuration, performance review cycle, and reference letter policy. Without `hr.local.md`, outputs use generic defaults. With it, every output references your actual entitlements, contacts, and policies.

**4. What are the four persistent agents in the hr-operations plugin: what does each do and what triggers each?**

`knowledge-base-agent`, always-on employee Q&A, triggered by Slack/Teams messages. `onboarding-orchestrator`, new hire workflow automation from T-14 to Day 90, triggered by HRIS new hire record. `policy-maintenance-agent`, policy currency and statutory rate monitoring, triggered monthly and by rate change events. `offboarding-knowledge-agent`, departure knowledge capture, triggered within 24 hours of an HRIS resignation record.

**5. How do you apply the sensitivity classification (ROUTINE / CONFIDENTIAL / SENSITIVE PERSONAL DATA) to HR AI outputs , and what is the escalation rule?**

ROUTINE outputs (policy summaries, JDs, general queries) can be shared with employees. CONFIDENTIAL outputs (offer letters, performance reviews, salary data, talent assessments) contain personal data, handle per your data protection policy. SENSITIVE PERSONAL DATA (medical, disciplinary, grievance, termination) must never be auto-generated; always escalate to a named HR contact with a warm handoff message.

## What You Can Now Do

After completing Chapter 37, you can:

- **Answer HR questions automatically** using the `knowledge-base-agent` and `/policy-lookup`
- **Produce HR documents in minutes:** onboarding plans, job descriptions, offer letters, performance reviews, reference letters
- **Capture institutional knowledge systematically** before it walks out the door with departing employees
- **Run four persistent agents** that handle HR workflows automatically in the background
- **Apply the sensitivity framework** consistently, knowing when AI can help and when to escalate

What does not change: the need for human judgment in difficult situations. Terminations, grievances, medical situations, team conflicts, and ethical decisions require HR professionals who can exercise judgement, hold difficult conversations, and be present in ways that AI cannot be. Chapter 37 does not reduce the importance of that work ; it creates the capacity to do it properly.

## Flashcards Study Aid

<Flashcards />
