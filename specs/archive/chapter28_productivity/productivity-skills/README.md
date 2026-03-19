# Productivity & Agentic Office — Cowork Skills Library
## Chapter 28 — Productivity & The Agentic Office
### Panaversity: The AI Agent Factory

---

## Quick Start

1. Copy this folder into your Cowork skills directory
2. Copy `work.local.md.template`, rename it `work.local.md`, and fill in
   your people, projects, terminology, meeting rhythm, and priorities
3. Install the plugin:
   GitHub: https://github.com/anthropics/knowledge-work-plugins/tree/main/productivity
4. Start with Exercise 1 in Chapter 28 to build work.local.md —
   it is the most important configuration file in the book; every
   other command output depends on it

---

## Directory Structure

```
productivity-skills/
├── README.md                               ← this file
├── productivity-global-router.md           ← top-level router (always active)
├── work.local.md.template                  ← fill in → work.local.md
│
├── products/                               ← one file per plugin command
│   ├── task.md                             ← /task command
│   ├── memory.md                           ← /memory command
│   ├── dashboard.md                        ← /dashboard command
│   ├── brief.md                            ← /brief command
│   ├── digest.md                           ← /digest command
│   ├── meeting.md                          ← /meeting command
│   ├── search.md                           ← /search command
│   ├── context.md                          ← /context command
│   ├── delegate.md                         ← /delegate command
│   └── track.md                            ← /track command
│
└── agents/                                 ← persistent productivity agents
    ├── chief-of-staff-agent.md             ← orchestration + daily digest
    ├── memory-keeper-agent.md              ← work.local.md maintenance
    ├── meeting-intelligence-agent.md       ← before/during/after meetings
    └── work-tracker-agent.md              ← task + delegation lifecycle
```

Total: 18 files

---

## File → Command Map

| File | Command | Primary Use |
|---|---|---|
| task.md | `/task` | Capture, prioritise, and manage tasks |
| memory.md | `/memory` | Add/update/query people, projects, terminology |
| dashboard.md | `/dashboard` | Cross-domain executive dashboard |
| brief.md | `/brief` | Situation brief before a meeting or decision |
| digest.md | `/digest` | Daily morning briefing from all sources |
| meeting.md | `/meeting` | Meeting prep, synthesis, and notes |
| search.md | `/search` | Cross-context search across workplace memory |
| context.md | `/context` | Load domain context for a specific task |
| delegate.md | `/delegate` | Delegation record with brief and follow-up |
| track.md | `/track` | Progress tracking — milestones, blockers, status |

---

## The Governing Principle

> **The goal was never to replace the people in your organisation.
> It was to give the people in your organisation an AI that actually
> knows where they work.**
>
> Claude without context is a brilliant stranger.
> Claude with work.local.md is a knowledgeable colleague.

---

## The Context Problem (Why This Matters)

Every AI assistant starts each session from zero. No memory of:
- Your organisation's specific terminology ("Boulders" not "OKRs")
- Your key people and how to work with them
- What is currently in flight and what is at risk
- Decisions already made and why
- The unwritten rules that every colleague knows

work.local.md closes this gap. The four memory layers — personal,
team, project, organisational — encode the context that turns
Claude from a generic tool into a digital colleague.

---

## Integration with Domain Agents

The Productivity Plugin is the integration layer for all Part 3 chapters:

| Domain | Chapter | What the Productivity Layer Adds |
|---|---|---|
| Finance | Ch. 17–22 | Budget approvals in dashboard; financial context in briefs |
| Sales | Ch. 23 | Pipeline status in dashboard; deal context in meeting prep |
| Supply Chain | Ch. 24 | Vendor status flows into vendor watchdog alerts |
| HR | Ch. 26 | Onboarding status in digest; people entries in work.local.md |
| Operations | Ch. 27 | Compliance dashboard; change tracker in daily digest |
| Product | Ch. 25 | Sprint status; roadmap in dashboard |

---

## Plugin Reference

- GitHub repo: https://github.com/anthropics/knowledge-work-plugins/tree/main/productivity
- Chapter 28 full text: The AI Agent Factory — Part 3, Section VIII

---

## Version History

v1.0 — Initial release | Chapter 28 | Panaversity AI Agent Factory curriculum
