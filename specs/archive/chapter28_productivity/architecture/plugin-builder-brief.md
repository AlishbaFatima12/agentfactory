# Plugin Builder Brief: `agentic-office`

**Read first:** `shared-brief.md` (case study, terminology, voice)
**Read second:** `architecture-spec.md` Section 2 (plugin directory skeleton) and Section 7 (trigger word exclusion list)

---

## 1. Full File Inventory

```
agentic-office/
├── .claude-plugin/
│   └── plugin.json
├── skills/
│   ├── workplace-context/
│   │   └── SKILL.md
│   ├── workplace-search/
│   │   └── SKILL.md
│   ├── task-intelligence/
│   │   └── SKILL.md
│   ├── delegation/
│   │   └── SKILL.md
│   ├── digest/
│   │   └── SKILL.md
│   ├── meeting-intelligence/
│   │   └── SKILL.md
│   ├── progress-tracker/
│   │   └── SKILL.md
│   ├── context-loader/
│   │   └── SKILL.md
│   └── executive-brief/
│       └── SKILL.md
├── agents/
│   ├── chief-of-staff/
│   │   └── AGENT.md
│   ├── memory-keeper/
│   │   └── AGENT.md
│   ├── meeting-intelligence-agent/
│   │   └── AGENT.md
│   └── work-tracker/
│       └── AGENT.md
├── work.local.md.template
├── evals/
│   ├── run.py
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

Total: 21 files (1 manifest + 9 skills + 4 agents + 1 template + 1 eval runner + 9 eval cases + 1 README + 1 LICENSE)

---

## 2. Source Mapping: Spec File → Plugin File

| Source Spec                                   | Plugin Output                                | Key Content to Extract                                                                                                                                                  |
| --------------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `products/memory.md`                          | `skills/workplace-context/SKILL.md`          | Memory layer structure, 6 task types (add person, add project, add term, person brief, post-meeting update, terminology query), sensitivity handling, maintenance rules |
| `products/search.md`                          | `skills/workplace-search/SKILL.md`           | Search scope (4 layers), output structure, search behaviour rules, cross-reference pattern                                                                              |
| `products/task.md`                            | `skills/task-intelligence/SKILL.md`          | 5 task types (capture, daily prioritisation, weekly planning, backlog review, cross-domain plan), priority sorting logic, brain dump pattern                            |
| `products/delegate.md`                        | `skills/delegation/SKILL.md`                 | Delegation output structure, handoff communication calibration, delegation quality checklist, follow-up standards, delegation log format                                |
| `products/digest.md`                          | `skills/digest/SKILL.md`                     | Digest assembly sources, output structure, length rules, tone rules, Monday/Friday variants                                                                             |
| `products/meeting.md`                         | `skills/meeting-intelligence/SKILL.md`       | Three-phase model, meeting prep output, D/A/F/Q/R coding, synthesis output, decision numbering, synthesis quality rules                                                 |
| `products/track.md` + `products/dashboard.md` | `skills/progress-tracker/SKILL.md`           | Weekly status format, milestone plan format, blocker classification, dashboard output structure, RAG status rules                                                       |
| `products/context.md`                         | `skills/context-loader/SKILL.md`             | 5 context types, cross-domain output structure, integration protocol                                                                                                    |
| `products/brief.md`                           | `skills/executive-brief/SKILL.md`            | 5 brief types, output structure, length rules                                                                                                                           |
| `agents/chief-of-staff-agent.md`              | `agents/chief-of-staff/AGENT.md`             | Daily tasks (digest, real-time, threshold), weekly tasks (Monday brief, Friday close), escalation protocol                                                              |
| `agents/memory-keeper-agent.md`               | `agents/memory-keeper/AGENT.md`              | Trigger-based tasks (5 triggers), weekly maintenance (4 checks), memory quality standards                                                                               |
| `agents/meeting-intelligence-agent.md`        | `agents/meeting-intelligence-agent/AGENT.md` | Calendar-triggered prep, post-meeting synthesis, weekly meeting audit, recurring meeting efficiency rule                                                                |
| `agents/work-tracker-agent.md`                | `agents/work-tracker/AGENT.md`               | Daily pull, delegation lifecycle, confirmation window, overdue protocol, weekly delegation audit, reliability patterns                                                  |
| `work.local.md.template` (existing)           | `work.local.md.template`                     | Copy and adapt the existing template; ensure all sections match the governing spec                                                                                      |

---

## 3. Naming Rules and Trigger Word Constraints

### Skill Naming Convention

- Directory: `kebab-case` (e.g., `workplace-context`, `task-intelligence`)
- SKILL.md `name:` field: matches directory name
- Description: MUST use professional/executive vocabulary, NOT the official plugin's reserved words

### OFF-LIMITS Trigger Words (from official `productivity` plugin)

These words MUST NOT appear in any SKILL.md `description:` field:

```
task, to-do, todo, tasks, add task, complete task, what's on my plate,
my tasks, remind me to, done with, finished, waiting on,
remember, memory, remember this, who is, what does X mean,
glossary, acronym, shorthand, nickname, decode,
start, initialize, bootstrap, set up,
update, sync, triage, comprehensive scan, refresh
```

### APPROVED Trigger Phrases (custom plugin)

| Skill                  | Approved Trigger Phrases                                                                                                                                                |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `workplace-context`    | workplace memory, person brief, team profile, organisation profile, add person, add project, add terminology, four-layer memory, communication style, stakeholder brief |
| `workplace-search`     | search everything, cross-context search, what do we know about, find the decision, search all layers, search across memory, what was agreed                             |
| `task-intelligence`    | brain dump, prioritise, P1 P2 P3, critical path, daily priorities, weekly planning, backlog review, cross-domain plan, what should I work on                            |
| `delegation`           | delegate, delegation record, handoff, delegation brief, follow-up, delegation quality, assign to, hand off to, delegation tracking                                      |
| `digest`               | daily digest, morning briefing, what's happening today, start of day brief, week ahead, Monday brief, weekly digest, start of week                                      |
| `meeting-intelligence` | meeting prep, meeting synthesis, before the meeting, after the meeting, D/A/F/Q/R, meeting brief, stakeholder prep, meeting notes synthesis                             |
| `progress-tracker`     | weekly status, project status, milestone, blocker, RAG status, executive dashboard, portfolio view, progress report, what's blocking                                    |
| `context-loader`       | load context, inject context, cross-domain context, context for this task, relevant background, multi-domain context                                                    |
| `executive-brief`      | situation brief, bring me up to speed, prep me for, pre-meeting brief, decision brief, context brief, catch me up, quick brief                                          |

---

## 4. SKILL.md Frontmatter Format

Every SKILL.md MUST use this frontmatter structure:

```yaml
---
name: skill-name
description: >
  Activate for: {comma-separated trigger phrases — use APPROVED phrases only,
  never OFF-LIMITS words}
user-invocable: false
---
```

Note: `user-invocable: false` — skills are activated by trigger phrases in natural language, not by explicit `/skill-name` invocation. The plugin prefix (`/agentic-office:skill-name`) handles explicit invocation automatically.

---

## 5. AGENT.md Frontmatter Format

Every AGENT.md MUST use this frontmatter structure:

```yaml
---
name: agent-name
description: >
  {Single-line description of the agent's purpose and when it activates.
  Multi-line descriptions break tool parsing — keep to one line.}
mcp-integrations: { comma-separated list of MCP tools this agent uses }
---
```

**CRITICAL**: The `description:` field MUST be a single line (use `>` YAML folding). Multi-line descriptions in agent YAML break tool parsing (see failure-history.md).

---

## 6. Eval Design (9 Golden File Cases)

### Routing Tests (5 cases)

Test that natural language prompts route to the correct skill:

| Case                           | Input Prompt                                                | Expected Skill         | Negative Check                                 |
| ------------------------------ | ----------------------------------------------------------- | ---------------------- | ---------------------------------------------- |
| `routing-workplace-context`    | "Give me a person brief on Omar before my meeting"          | `workplace-context`    | Must NOT route to official `memory-management` |
| `routing-task-intelligence`    | "I need to brain dump all my tasks and prioritise them"     | `task-intelligence`    | Must NOT route to official `task-management`   |
| `routing-delegation`           | "Delegate the analytics brief to Omar with a clear handoff" | `delegation`           | Must NOT route to `task-intelligence`          |
| `routing-digest`               | "Give me my daily digest — what's happening today?"         | `digest`               | Must NOT route to official `update`            |
| `routing-meeting-intelligence` | "I have the Executive Weekly in 30 minutes, prep me"        | `meeting-intelligence` | Must NOT route to `executive-brief`            |

### Accuracy Tests (3 cases)

Test that skill output meets quality standards:

| Case                          | Scenario                                                   | Quality Checks                                                                                                                                            |
| ----------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accuracy-brain-dump`         | 6 raw tasks from case study (governing spec lines 270-279) | P1/P2/P3 sort correct, project references populated from work.local.md, delegation candidates identified, critical path max 5 items                       |
| `accuracy-person-brief`       | "Brief on Omar, Ayesha, Dr. Sana Mirza"                    | Each person has: role, current focus, communication guidance, today's context, specific approach advice. Sensitivity entries NOT exposed in group output. |
| `accuracy-delegation-quality` | Delegate analytics brief to Omar                           | 7-point checklist passes: specific deliverable, named person, specific deadline, context, format, delegatee's style applied, follow-up defined            |

### Negative Test (1 case)

| Case                        | Scenario                                  | Check                                                                |
| --------------------------- | ----------------------------------------- | -------------------------------------------------------------------- |
| `negative-no-hallucination` | Query about a person NOT in work.local.md | Must respond "Not in workplace memory" — must NOT fabricate an entry |

---

## 7. Validation Checklist (Pre-Release)

Before merging the plugin:

- [ ] All 9 SKILL.md files pass `description:` field check — no OFF-LIMITS trigger words
- [ ] All 4 AGENT.md files have single-line descriptions (no multi-line parsing breaks)
- [ ] `plugin.json` lists all 9 skills and 4 agents
- [ ] `work.local.md.template` includes all 7 sections (personal, team, projects, org, digest config, dashboard config, agent integrations + triggers + decision log + delegation log)
- [ ] All 9 eval cases pass
- [ ] No skill references non-existent MCP integrations
- [ ] README.md has install instructions and command reference
- [ ] LICENSE file present (Apache-2.0)
- [ ] No secrets, API keys, or credentials in any file

---

## 8. Canonical Docs to WebFetch Before Writing

Before writing any skill or agent file, the plugin builder MUST fetch these for reference patterns:

1. **Official productivity plugin structure**: Already read locally at `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/productivity/` — use task-management/SKILL.md and memory-management/SKILL.md as format references
2. **Existing Panaversity business plugin**: Use the banking or legal-ops plugin from `panaversity/agentfactory-business-plugins` as the structural reference for plugin.json, evals, and README format
3. **Claude plugin documentation**: WebFetch the official Claude plugin authoring guide for any specification updates since the last plugin was built

---

## 9. plugin.json Template

```json
{
  "name": "agentic-office",
  "display_name": "Agentic Office",
  "description": "Professional intelligence layer for the Agentic Office — workplace memory, task prioritisation, delegation quality, daily digests, meeting intelligence, executive dashboards, cross-domain context, and four persistent agents",
  "version": "1.0.0",
  "license": "Apache-2.0",
  "author": "Panaversity",
  "repository": "https://github.com/panaversity/agentfactory-business-plugins"
}
```
