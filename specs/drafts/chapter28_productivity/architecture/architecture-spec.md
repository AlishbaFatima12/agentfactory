# Chapter 39 — Productivity & The Agentic Office: Architecture Spec

## 1. Chapter Directory Skeleton

```
apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/
├── README.md                                  ← Chapter overview, prerequisites, lesson map
├── 01-the-context-problem.md                  ← L01: concept — 4 failure modes
├── 02-two-plugins-one-system.md               ← L02: install official + custom plugins
├── 03-workplace-memory-architecture.md        ← L03: 4-layer memory, build Layers 1+4
├── 04-building-your-people-memory.md          ← L04: Layer 2 — Team memory
├── 05-projects-and-priorities.md              ← L05: Layer 3 — Projects + workplace-search
├── 06-task-intelligence.md                    ← L06: REFERENCE LESSON — brain dump, P1/P2/P3
├── 07-delegation-as-a-discipline.md           ← L07: delegation quality standard
├── 08-the-daily-digest.md                     ← L08: morning briefing, digest skill
├── 09-meeting-intelligence.md                 ← L09: before/during/after, meeting-intelligence
├── 10-the-executive-dashboard.md              ← L10: RAG dashboard, progress-tracker
├── 11-cross-domain-intelligence.md            ← L11: context injection, context-loader + search
├── 12-the-digital-chief-of-staff.md           ← L12: chief-of-staff agent, /schedule
├── 13-the-supporting-agents.md                ← L13: 3 supporting agents
├── 14-the-complete-agentic-office.md          ← L14: capstone — full integration
├── 15-summary-quick-reference.md              ← L15: recap + command tables
└── quiz.md                                    ← 50-question quiz
```

Sidecar files per lesson (generated post-production):

- `NN-slug.flashcards.yaml`
- `NN-slug.summary.md`

---

## 2. Plugin Directory Skeleton (Custom `agentic-office`)

```
agentic-office/
├── .claude-plugin/
│   └── plugin.json                            ← Plugin manifest
├── skills/
│   ├── workplace-context/
│   │   └── SKILL.md                           ← Layers 1-4 memory CRUD + person briefs
│   ├── workplace-search/
│   │   └── SKILL.md                           ← Cross-context search across all memory layers
│   ├── task-intelligence/
│   │   └── SKILL.md                           ← Brain dump capture, P1/P2/P3 priority sort
│   ├── delegation/
│   │   └── SKILL.md                           ← Delegation quality standard + handoff comms
│   ├── digest/
│   │   └── SKILL.md                           ← Daily morning briefing assembly
│   ├── meeting-intelligence/
│   │   └── SKILL.md                           ← Three-phase meeting model (before/during/after)
│   ├── progress-tracker/
│   │   └── SKILL.md                           ← RAG status, milestone plans, blocker classification
│   ├── context-loader/
│   │   └── SKILL.md                           ← Cross-domain context injection
│   └── executive-brief/
│       └── SKILL.md                           ← Situation briefs (pre-meeting, pre-decision, person, project, topic)
├── agents/
│   ├── chief-of-staff/
│   │   └── AGENT.md                           ← Orchestration agent, daily digest, weekly brief/close
│   ├── memory-keeper/
│   │   └── AGENT.md                           ← work.local.md maintenance, trigger-based updates
│   ├── meeting-intelligence-agent/
│   │   └── AGENT.md                           ← Calendar-triggered prep and post-meeting synthesis
│   └── work-tracker/
│       └── AGENT.md                           ← Task + delegation lifecycle management
├── work.local.md.template                     ← User configuration template
├── evals/
│   ├── run.py                                 ← Eval runner
│   └── cases/
│       ├── routing-workplace-context.yaml
│       ├── routing-task-intelligence.yaml
│       ├── routing-delegation.yaml
│       ├── routing-digest.yaml
│       ├── routing-meeting-intelligence.yaml
│       ├── accuracy-brain-dump.yaml
│       ├── accuracy-person-brief.yaml
│       ├── accuracy-delegation-quality.yaml
│       └── negative-no-hallucination.yaml
├── README.md
└── LICENSE
```

---

## 3. Two-Plugin Architecture Summary

### Official Plugin: `productivity` (Anthropic `knowledge-work-plugins`)

| Component                 | What It Provides                                                    |
| ------------------------- | ------------------------------------------------------------------- |
| `task-management` skill   | TASKS.md-based task tracking (add/complete/query)                   |
| `memory-management` skill | Two-tier memory system (CLAUDE.md hot cache + memory/ deep storage) |
| `dashboard.html`          | Visual board view of tasks and memory                               |
| `/start` command          | Initialize TASKS.md, CLAUDE.md, memory/, dashboard                  |
| `/update` command         | Sync from external tools, triage stale items, fill memory gaps      |

**Install:** `claude plugins add knowledge-work-plugins/productivity`
**Cowork sidebar:** Customize → Browse plugins → find Productivity → Install

### Custom Plugin: `agentic-office` (Panaversity)

| Component                | What It Provides                                                                                                         |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| 9 skills                 | Professional intelligence layer (context, search, tasks, delegation, digest, meetings, progress, context-loader, briefs) |
| 4 agents                 | Chief of Staff, Memory Keeper, Meeting Intelligence, Work Tracker                                                        |
| `work.local.md.template` | Four-layer workplace memory configuration                                                                                |

**Install:** Cowork sidebar → Customize → Browse plugins → Personal → + → Add marketplace from GitHub → `https://github.com/panaversity/agentfactory-business-plugins` → find Agentic Office → Install

### Division of Responsibility

| Concern             | Official `productivity`                | Custom `agentic-office`                              |
| ------------------- | -------------------------------------- | ---------------------------------------------------- |
| Task list CRUD      | `/productivity:start`, task-management | —                                                    |
| Memory architecture | CLAUDE.md hot cache, memory/ files     | work.local.md 4-layer professional memory            |
| Task intelligence   | Basic add/complete/query               | Brain dump → P1/P2/P3 sort, cross-domain plans       |
| Delegation          | —                                      | Quality standard, handoff comms, follow-up protocols |
| Morning briefing    | —                                      | Daily digest assembly                                |
| Meeting support     | —                                      | Three-phase model (before/during/after)              |
| Dashboard           | dashboard.html (visual board)          | RAG executive dashboard (text-based, cross-domain)   |
| Search              | —                                      | Cross-context search across all memory layers        |
| Context injection   | —                                      | Cross-domain context loading                         |
| Agents              | —                                      | 4 persistent agents                                  |

**ZERO trigger overlap rule:** The custom plugin must NOT use trigger words reserved by the official plugin. See Section 7 for the full exclusion list.

---

## 4. Source-to-Output Mapping

### Governing Spec → Lesson Mapping

| Governing Spec Section                                              | Lesson(s)              |
| ------------------------------------------------------------------- | ---------------------- |
| Introduction: The Context Problem + Four Failure Modes              | L01                    |
| The Productivity Plugin Architecture + Installing                   | L02                    |
| Part One: Workplace Memory — The Four Layers (Layers 1 + 4)         | L03                    |
| Layer 2: Team Memory + Part Seven: People and Terminology           | L04                    |
| Layer 3: Project Memory + Part Six: Search Layer                    | L05                    |
| Part Two: Task Management (task + brain dump pattern)               | L06 (REFERENCE LESSON) |
| Part Two: Delegation + Delegation Quality Checklist                 | L07                    |
| Part Three: The Daily Digest                                        | L08                    |
| Part Four: Meeting Intelligence                                     | L09                    |
| Part Five: The Visual Dashboard                                     | L10                    |
| Part Six: Cross-Domain Integration (context + search)               | L11                    |
| Part Eight: Agent 1 — Digital Chief of Staff                        | L12                    |
| Part Eight: Agents 2-4 (Memory Keeper, Meeting Intel, Work Tracker) | L13                    |
| Exercises 7-8 (integration + complete config)                       | L14 (capstone)         |
| Chapter Summary + Quick Reference                                   | L15                    |

### Product Spec → Plugin Skill Mapping

| Product Spec File                             | Plugin Skill           | Lesson        |
| --------------------------------------------- | ---------------------- | ------------- |
| `products/memory.md`                          | `workplace-context`    | L03, L04      |
| `products/search.md`                          | `workplace-search`     | L05, L11      |
| `products/task.md`                            | `task-intelligence`    | L06           |
| `products/delegate.md`                        | `delegation`           | L07           |
| `products/digest.md`                          | `digest`               | L08           |
| `products/meeting.md`                         | `meeting-intelligence` | L09           |
| `products/track.md` + `products/dashboard.md` | `progress-tracker`     | L10           |
| `products/context.md`                         | `context-loader`       | L11           |
| `products/brief.md`                           | `executive-brief`      | L09, L11, L12 |

### Agent Spec → Plugin Agent Mapping

| Agent Spec File                        | Plugin Agent                 | Lesson |
| -------------------------------------- | ---------------------------- | ------ |
| `agents/chief-of-staff-agent.md`       | `chief-of-staff`             | L12    |
| `agents/memory-keeper-agent.md`        | `memory-keeper`              | L13    |
| `agents/meeting-intelligence-agent.md` | `meeting-intelligence-agent` | L13    |
| `agents/work-tracker-agent.md`         | `work-tracker`               | L13    |

---

## 5. YAML Frontmatter Template

Every lesson file must include ALL of these fields:

```yaml
---
slug: /Business-Domain-Agent-Workflows/productivity-agentic-office/{lesson-slug}
sidebar_position: { N }
title: "{Lesson Title}"
description: "{1-2 sentence description}"
keywords: ["productivity", "agentic office", "{lesson-specific keywords}"]
chapter: 39
lesson: { N }
duration_minutes: { N }

# HIDDEN SKILLS METADATA
skills:
  - name: "{Skill Name — action verb + noun + context}"
    proficiency_level: "{A1|A2|B1|B2|C1|C2}"
    category: "{Conceptual|Technical|Applied|Soft}"
    bloom_level: "{Remember|Understand|Apply|Analyze|Evaluate|Create}"
    digcomp_area: "{Problem-Solving|Information-Literacy|Communication|Content-Creation|Safety}"
    measurable_at_this_level: "{What the student can demonstrably do after this lesson}"

  - name: "{Second Skill}"
    # ... same fields

learning_objectives:
  - objective: "{Specific, measurable outcome starting with action verb}"
    proficiency_level: "{A1|A2|B1|B2}"
    bloom_level: "{Remember|Understand|Apply|Analyze|Evaluate|Create}"
    assessment_method: "{How this objective is verified — specific observable behaviour}"

  - objective: "{Second objective}"
    # ... same fields

cognitive_load:
  new_concepts: { N }
  concepts_list:
    - "{concept 1}"
    - "{concept 2}"
  assessment: "{Why this concept count is appropriate for this lesson}"

differentiation:
  extension_for_advanced: "{Stretch task for experienced readers}"
  remedial_for_struggling: "{Simplified entry point for readers finding the content difficult}"

teaching_guide:
  key_points:
    - "{Key point 1}"
    - "{Key point 2}"
  misconceptions:
    - "{Common misconception + correction}"
  discussion_prompts:
    - "{Discussion question}"
  teaching_tips:
    - "{Pedagogical tip}"
---
```

---

## 6. Lesson File Naming

| Lesson | Filename                              | Title                         |
| ------ | ------------------------------------- | ----------------------------- |
| L01    | `01-the-context-problem.md`           | The Context Problem           |
| L02    | `02-two-plugins-one-system.md`        | Two Plugins, One System       |
| L03    | `03-workplace-memory-architecture.md` | Workplace Memory Architecture |
| L04    | `04-building-your-people-memory.md`   | Building Your People Memory   |
| L05    | `05-projects-and-priorities.md`       | Projects and Priorities       |
| L06    | `06-task-intelligence.md`             | Task Intelligence             |
| L07    | `07-delegation-as-a-discipline.md`    | Delegation as a Discipline    |
| L08    | `08-the-daily-digest.md`              | The Daily Digest              |
| L09    | `09-meeting-intelligence.md`          | Meeting Intelligence          |
| L10    | `10-the-executive-dashboard.md`       | The Executive Dashboard       |
| L11    | `11-cross-domain-intelligence.md`     | Cross-Domain Intelligence     |
| L12    | `12-the-digital-chief-of-staff.md`    | The Digital Chief of Staff    |
| L13    | `13-the-supporting-agents.md`         | The Supporting Agents         |
| L14    | `14-the-complete-agentic-office.md`   | The Complete Agentic Office   |
| L15    | `15-summary-quick-reference.md`       | Summary and Quick Reference   |

---

## 7. Trigger Word Exclusion List (Official Plugin Reserved Words)

The official `productivity` plugin's skills use these trigger words. The custom `agentic-office` plugin MUST NOT use any of these in SKILL.md description fields:

### From `task-management`

Reserved: task, to-do, todo, tasks, add task, complete task, what's on my plate, my tasks, remind me to, done with, finished, waiting on

### From `memory-management`

Reserved: remember, memory, remember this, who is, what does X mean, glossary, acronym, shorthand, nickname, decode

### From `start`

Reserved: start, initialize, bootstrap, set up

### From `update`

Reserved: update, sync, triage, comprehensive scan, refresh

### Custom Plugin Trigger Strategy

Use professional/executive vocabulary that does not overlap:

- `workplace-context` → "workplace memory", "person brief", "team profile", "organisation profile", "add person", "add project", "add terminology", "four-layer memory"
- `workplace-search` → "search everything", "cross-context search", "what do we know about", "find the decision", "search all layers"
- `task-intelligence` → "brain dump", "prioritise", "P1 P2 P3", "critical path", "daily priorities", "weekly planning", "backlog review"
- `delegation` → "delegate", "delegation record", "handoff", "delegation brief", "follow-up", "delegation quality"
- `digest` → "daily digest", "morning briefing", "what's happening today", "start of day brief", "week ahead", "Monday brief"
- `meeting-intelligence` → "meeting prep", "meeting synthesis", "before the meeting", "after the meeting", "D/A/F/Q/R", "meeting brief"
- `progress-tracker` → "weekly status", "project status", "milestone", "blocker", "RAG status", "executive dashboard", "portfolio view"
- `context-loader` → "load context", "inject context", "cross-domain context", "context for this task"
- `executive-brief` → "situation brief", "bring me up to speed", "prep me for", "pre-meeting brief", "decision brief"
