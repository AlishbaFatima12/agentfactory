# People & HR Cowork Skills Library
## Chapter 26 — People & Organizational Operations (HR)
### Panaversity: The AI Agent Factory

---

## Quick Start

1. Copy this folder into your Cowork skills directory
2. Copy `hr.local.md.template`, rename it `hr.local.md`, and fill in
   your organisation's policies, jurisdiction, benefits, and HR contacts
3. Install the plugin: https://claude.com/plugins/human-resources
   (GitHub reference: github.com/anthropics/knowledge-work-plugins/tree/main/human-resources)
4. Start with Exercise 8 in Chapter 26 to build hr.local.md —
   it makes every other command output organisation-specific

---

## Directory Structure

```
hr-skills/
├── README.md                               ← this file
├── hr-global-router.md                     ← top-level router (always active)
├── hr.local.md.template                    ← fill in → hr.local.md
│
├── products/                               ← one file per plugin command
│   ├── onboard.md                          ← /onboard command
│   ├── policy.md                           ← /policy command
│   ├── offer.md                            ← /offer command
│   ├── jd.md                               ← /jd command
│   ├── review.md                           ← /review command
│   ├── match.md                            ← /match command
│   ├── knowledge.md                        ← /knowledge command
│   ├── reference.md                        ← /reference command
│   ├── query.md                            ← /query command
│   └── offboard.md                         ← /offboard command
│
└── agents/                                 ← persistent HR agents
    ├── knowledge-base-agent.md             ← 24/7 employee Q&A
    ├── onboarding-orchestrator.md          ← new hire workflow automation
    ├── policy-maintenance-agent.md         ← policy currency monitoring
    └── offboarding-knowledge-agent.md      ← departure knowledge capture
```

Total: 18 files

---

## File → Command Map

| File | Command | Primary Use |
|---|---|---|
| onboard.md | `/onboard` | Generate onboarding plans and schedules |
| policy.md | `/policy` | Synthesise, explain, or update HR policies |
| offer.md | `/offer` | Draft offer letters and employment documents |
| jd.md | `/jd` | Write or improve job descriptions |
| review.md | `/review` | Structure performance reviews and 360° feedback |
| match.md | `/match` | Talent matching — internal mobility and role fit |
| knowledge.md | `/knowledge` | Capture and structure institutional knowledge |
| reference.md | `/reference` | Draft reference letters and verifications |
| query.md | `/query` | HR knowledge base — employee self-service |
| offboard.md | `/offboard` | Structure offboarding and knowledge transfer |

---

## The Governing Principle

> **HR teams consumed by information routing have no capacity for
> the work that genuinely differentiates a talent strategy.**
>
> These skills eliminate the administrative overhead so HR judgment
> can be applied to the problems that actually need it.

---

## Critical HR Safety Rule

Every output involving individual employee situations (disciplinary,
grievance, medical, performance concerns) must include a warm handoff
to a named HR professional. The agent answers policy questions.
It never adjudicates individual cases.

---

## Plugin Reference

- Plugin URL:   https://claude.com/plugins/human-resources
- GitHub repo:  https://github.com/anthropics/knowledge-work-plugins/tree/main/human-resources
- Chapter 26 full text: The AI Agent Factory — Part 3, Section VI

---

## Version History

v1.0 — Initial release | Chapter 26 | Panaversity AI Agent Factory curriculum
