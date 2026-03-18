# Writer Brief: Agents (L12, L13, L14, L15)

**Read first:** `shared-brief.md` (required context for all writers)

---

## L12: The Digital Chief of Staff

### File to Create

`apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/12-the-digital-chief-of-staff.md`

### Source Material

- Governing spec: "Part Eight: Agent 1 — The Digital Chief of Staff" (lines 922-948)
- Agent spec: `agents/chief-of-staff-agent.md` — full agent definition with daily tasks, weekly tasks, escalation protocol, NEVER rules
- Product specs referenced by the agent: `products/digest.md`, `products/dashboard.md`, `products/brief.md`
- Plugin agent: `chief-of-staff` (AGENT.md)

### What This Lesson Does

Introduces the first persistent agent — the Digital Chief of Staff. This is the orchestration agent that synthesises intelligence from all other agents and domain feeds. It produces the daily digest (already learned in L08), the executive dashboard (L10), the Monday week-ahead brief, and the Friday week-close summary. This lesson teaches the reader to configure it and introduces the `/agentic-office:schedule` command.

### Structure

1. **Opening** — "The Digital Chief of Staff is not a single agent. It is the emergent result of four agents working together with a comprehensive work.local.md and all the domain agents from Part 3." This lesson introduces Agent 1; L13 introduces the three supporting agents.
2. **What the Chief of Staff does** — Three daily tasks: deliver morning digest (07:00), respond to any workplace intelligence question in real-time, flag any threshold breach. Two weekly tasks: Monday week-ahead brief (06:45), Friday week-close summary (17:30).
3. **Daily tasks in detail:**
   - **Morning digest** — Already learned in L08. The Chief of Staff automates its delivery. It loads work.local.md, pulls from MCP sources (Calendar, Gmail, Slack, Notion), assembles using the digest structure, and delivers to configured channel.
   - **Real-time intelligence** — Responds to any question about work status using full work.local.md context. The rule: "Answer as a knowledgeable colleague would — not as a system returning a database query."
   - **Threshold monitoring** — Monitors against configured thresholds. When breached: add to next digest as RED item. If critical: immediate alert.
4. **Weekly tasks:**
   - **Monday week-ahead brief** — Show the structure from chief-of-staff-agent.md: this week's Boulders/priorities, critical milestones, decisions needed, delegation checks due, meetings requiring prep, "What would make this week a success."
   - **Friday week-close summary** — Completed, carries forward, what to set up for Monday, next week preview. Tone: information and preparation, not evaluation or judgment.
5. **Escalation protocol** — Three levels from the agent spec: Level 1 (digest flag), Level 2 (explicit message), Level 3 (COO/Executive level if >14 days). Show the escalation message format.
6. **The `/agentic-office:schedule` command** — Configure the Chief of Staff's schedule: digest time, weekly brief time, weekly close time, escalation threshold days. Show how to set it up in work.local.md.
7. **Configure YOUR Chief of Staff** — Fill in the chief_of_staff section of work.local.md agent_integrations.
8. **Sample Monday brief** — Generate a week-ahead brief using case study data. Must include: Boulders (complete Chapter 39, resolve Nighthawk, analytics brief delivered), critical milestones, decisions pending.

### Exercise Design

- Configure Chief of Staff schedule in work.local.md: 10 minutes
- Generate Monday week-ahead brief: 10 minutes
- Generate Friday week-close summary (simulated): 10 minutes
- Set escalation thresholds: 5 minutes

### Try With AI Prompts

- **Reproduce:** Generate the Monday week-ahead brief using case study data. Does it correctly identify "What would make this week a success"?
- **Adapt:** Configure your own Chief of Staff schedule. Generate a week-ahead brief for YOUR work. Is the critical path correct?
- **Apply:** Imagine it is Friday. Generate a week-close summary. Does it correctly separate "completed" from "carries forward"? Does it suggest things to set up for Monday that would genuinely help?

### Duration

35-40 minutes

### Exit Criteria

Chief of Staff configured in work.local.md. Reader can generate week-ahead briefs and week-close summaries. Reader understands the escalation protocol.

---

## L13: The Supporting Agents

### File to Create

`apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/13-the-supporting-agents.md`

### Source Material

- Governing spec: "Part Eight: Agents 2-4" (lines 951-1036)
- Agent specs:
  - `agents/memory-keeper-agent.md` — trigger-based memory updates, weekly maintenance, memory quality standards
  - `agents/meeting-intelligence-agent.md` — calendar-triggered prep, post-meeting synthesis, weekly meeting audit
  - `agents/work-tracker-agent.md` — delegation lifecycle, daily task pull, overdue protocol, weekly delegation audit
- Plugin agents: `memory-keeper`, `meeting-intelligence-agent`, `work-tracker` (all AGENT.md files)

### What This Lesson Does

Introduces the three supporting agents that work alongside the Chief of Staff. Each agent has a specific domain: memory maintenance, meeting support, and task/delegation tracking. The reader configures each agent and understands the trigger-based operation model. The lesson establishes the weekly maintenance cadence.

### Structure

1. **Opening** — "The Chief of Staff is the visible agent — the one you interact with daily. The three supporting agents are the ones that keep the system healthy. They run on triggers rather than schedules: a meeting ends, and the Meeting Intelligence Agent proposes a synthesis. A new person is mentioned, and the Memory Keeper proposes an entry. A delegation goes unconfirmed for 24 hours, and the Work Tracker sends a follow-up."
2. **Agent 2: The Memory Keeper**
   - Purpose: Maintain work.local.md as the single source of organisational truth
   - Trigger-based tasks: new person → propose entry, new project → propose entry, new term → propose definition, meeting completed → propose updates, decision made → add to decision log
   - Weekly maintenance (Monday 06:30): project status currency, people entry currency, stale terminology, orphaned actions
   - Key rule: ALWAYS propose, NEVER apply without confirmation
   - Sample output: show the governing spec's memory update proposal (lines 972-991)
3. **Agent 3: The Meeting Intelligence Agent**
   - Purpose: Before/during/after meeting support on autopilot
   - Calendar-triggered: 30 minutes before any significant meeting → deliver prep brief
   - Post-meeting: within 2 hours → deliver synthesis, propose work.local.md updates
   - Weekly meeting audit (Friday 17:00): meetings attended, decisions made, action completion rate, recurring meeting health check
   - Key rule: flag any recurring meeting where <2 decisions made in last 4 occurrences
4. **Agent 4: The Work Tracker**
   - Purpose: Own the task and delegation lifecycle
   - Daily tasks (06:50): pull open tasks, sort by urgency, flag overdue/unconfirmed/stale items, deliver to Chief of Staff for digest
   - Delegation lifecycle: T+0 (sent), T+24hr (follow-up if no confirmation), T+48hr (flag as RED), in-progress check-ins (midpoint for <5 days, weekly for 5-14 days), overdue protocol (1 day polite, 3 days explicit, 1 week escalation)
   - Weekly delegation audit (Friday 16:00): completion rate, reliability patterns, delegation brief quality self-assessment
   - Key insight: reliability patterns inform better delegation practice, not blame
5. **How the four agents work together** — Show the information flow: Work Tracker → Chief of Staff (task snapshot for digest), Meeting Intelligence Agent → Memory Keeper (post-meeting updates), Memory Keeper → Chief of Staff (updated context for all outputs). The Chief of Staff is the orchestration layer; the other three are the intelligence feeds.
6. **Configure the supporting agents** — Fill in the agent_integrations section of work.local.md for all three agents: memory_keeper (weekly_maintenance time, staleness threshold, auto_propose triggers), meeting_intelligence (calendar_source, prep lead time, synthesis deadline), work_tracker (overdue threshold, delegation confirmation window, weekly audit time, escalation path).
7. **Weekly maintenance cadence** — Monday 06:30 (Memory Keeper maintenance) → Monday 06:45 (Chief of Staff week-ahead brief) → Monday 07:00 (digest). Friday 16:00 (Work Tracker delegation audit) → Friday 17:00 (Meeting Intelligence weekly audit) → Friday 17:30 (Chief of Staff week-close).

### Exercise Design

- Configure all three agents in work.local.md: 15 minutes
- Simulate a Memory Keeper trigger: mention a new person, see the proposed entry: 5 minutes
- Simulate a Work Tracker alert: create a delegation, wait for confirmation follow-up logic: 5 minutes
- Review the weekly maintenance cadence: 5 minutes

### Try With AI Prompts

- **Reproduce:** Add a new person to a conversation without them being in work.local.md. Does the Memory Keeper propose an entry? Is the proposed format correct?
- **Adapt:** Configure the Work Tracker's escalation thresholds for your own delegation style. Too aggressive (flagging everything at 24h) creates noise. Too lenient (waiting a week) defeats the purpose.
- **Apply:** Design the weekly maintenance cadence for your role. What time should each agent's weekly task run? Does the sequence make sense (Memory Keeper before Chief of Staff, Work Tracker before week-close)?

### Duration

35-40 minutes

### Exit Criteria

All three supporting agents configured in work.local.md. Reader understands trigger-based operation. Weekly maintenance cadence defined.

---

## L14: The Complete Agentic Office — Capstone

### File to Create

`apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/14-the-complete-agentic-office.md`

### Source Material

- Governing spec: Exercise 8 "The Complete Agentic Office Configuration" (lines 1530-1641)
- ALL product specs (for the integration smoke test)
- ALL agent specs (for the full configuration)
- Template: `work.local.md.template` — all sections including agent_integrations, triggers, decision log, delegation log

### What This Lesson Does

The capstone lesson. The reader reviews their entire work.local.md (built progressively across L03-L13), adds the agent integration configuration, defines trigger events, sets escalation thresholds, and runs the full integration smoke test: dashboard + digest + cross-domain search. This is the lesson where everything comes together.

### Structure

1. **Opening** — "This is the final exercise of Chapter 39 — the exercise that wires everything together. You have built four memory layers, configured nine skills, and deployed four agents. Now you test whether they work as a system."
2. **Review your work.local.md** — Checklist: Layer 1 (Personal) — complete? Layer 2 (Team) — 5+ people with communication styles? Layer 3 (Projects) — 3-5 projects with codenames, status, risks? Layer 4 (Organisational) — 15+ terminology entries, meeting rhythm, unwritten rules? Digest configuration? Dashboard configuration? Agent configurations?
3. **Add trigger events** — Define what events automatically trigger agent actions. Show the trigger configuration from governing spec exercise 8 (lines 1585-1597): meeting ends → synthesis, new project starts → project entry + tracking, delegation made → log + confirmation window, etc.
4. **Set escalation thresholds** — For every type of item that can go stale: delegated task without confirmation, project without status update, compliance obligation overdue, vendor renewal approaching. Define the threshold and the escalation action.
5. **The integration smoke test** — Run three commands in sequence:
   - `/agentic-office:progress-tracker` → Full dashboard. Are all projects showing correct RAG status?
   - `/agentic-office:digest` → Full digest. Is it pulling from all configured sources?
   - `/agentic-office:workplace-search` with "What is at risk across all my projects and domains right now?" → Is the answer comprehensive?
6. **Evaluate the results** — For each output: Is it accurate? Is it pulling from all the right sources? Is anything missing? What would need to change to make the output production-ready?
7. **Define the maintenance cadence** — Daily (automatic: task status, delegation log). Weekly (manual review: project statuses). Monthly (audit: terminology dictionary, people entries). Quarterly (restructure: project priorities, organisational structure).
8. **The closing insight** — "The Digital Chief of Staff is not a single agent. It is the emergent result of four agents working together with a comprehensive work.local.md and all the domain agents from Part 3. When it works, Claude stops being a chatbot you brief every session and starts behaving like a knowledgeable colleague."

### Exercise Design

This is a 75-90 minute capstone. Each step must be completed:

- work.local.md review and gap-filling: 15 minutes
- Trigger event configuration: 10 minutes
- Escalation threshold configuration: 10 minutes
- Integration smoke test (3 commands): 15 minutes
- Output evaluation: 15 minutes
- Maintenance cadence definition: 10 minutes

### Try With AI Prompts

- **Reproduce:** Run the full integration smoke test (dashboard + digest + search) using case study data. Do all three outputs produce consistent, accurate results?
- **Adapt:** Run the same three commands with your own work.local.md. Grade each output A/B/C: A = could forward directly. B = needs minor editing. C = needs significant work. Each C grade tells you where your work.local.md needs improvement.
- **Apply:** It is Monday morning. Run the full Chief of Staff sequence: week-ahead brief → daily digest → dashboard. Does the combined output give you a complete picture of your week? Could you start working immediately after reading it, or do you still need to gather information manually?

### Duration

75-90 minutes

### Exit Criteria

Complete work.local.md with all sections populated. Triggers and escalation thresholds defined. Integration smoke test passes. Maintenance cadence documented.

---

## L15: Summary and Quick Reference

### File to Create

`apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/15-summary-quick-reference.md`

### Source Material

- Governing spec: "Chapter Summary: From Tools to Colleague" (lines 1644-1709) + "Quick Reference" table (lines 1688-1709)
- All lesson titles and key concepts
- All plugin commands (both official and custom)
- All agent names and purposes

### What This Lesson Does

Recaps the chapter's key concepts, provides command reference tables for both plugins, agent summary table, and the chapter's closing insight. This is a reference lesson — short, scannable, designed to be bookmarked.

### Structure

1. **The Central Insight** — "Every domain chapter in Part 3 gave you a capable domain agent. Chapter 39 is the integration layer that turns a collection of domain agents into something that behaves like an organisation." Use the governing spec summary (lines 1644-1673).
2. **What this chapter built** — Numbered list (use governing spec lines 1663-1674): Workplace Memory Architecture, work.local.md, task capture, delegation records, daily digest, meeting intelligence, executive dashboard, cross-domain context, people and terminology memory, four persistent agents.
3. **Plugin command reference** — Two tables:

   **Official `productivity` plugin:**
   | Command | Function |
   |---|---|
   | `/productivity:start` | Initialize TASKS.md, CLAUDE.md, memory/, dashboard |
   | `/productivity:update` | Sync tasks, triage stale items, fill memory gaps |
   | `/productivity:update --comprehensive` | Deep scan chat, email, calendar for missed todos |

   **Custom `agentic-office` plugin:**
   | Command | Function |
   |---|---|
   | `/agentic-office:workplace-context` | Add/update/query people, projects, terminology |
   | `/agentic-office:workplace-search` | Cross-context search across all memory layers |
   | `/agentic-office:task-intelligence` | Brain dump capture, P1/P2/P3 priority sort |
   | `/agentic-office:delegation` | Delegation records with calibrated handoff comms |
   | `/agentic-office:digest` | Daily morning briefing |
   | `/agentic-office:meeting-intelligence` | Meeting prep + synthesis |
   | `/agentic-office:progress-tracker` | RAG dashboard, weekly status, blocker classification |
   | `/agentic-office:context-loader` | Cross-domain context injection |
   | `/agentic-office:executive-brief` | Situation briefs (pre-meeting, person, project) |
   | `/agentic-office:schedule` | Configure Chief of Staff schedule |

4. **Agent reference table:**
   | Agent | Purpose | Trigger |
   |---|---|---|
   | Chief of Staff | Orchestration, digest, dashboard, weekly briefs | Scheduled (daily/weekly) |
   | Memory Keeper | work.local.md maintenance | Event-triggered (new person, project, meeting) |
   | Meeting Intelligence | Before/during/after meeting support | Calendar-triggered (30 min before) |
   | Work Tracker | Task + delegation lifecycle | Daily pull + event-triggered (delegation) |

5. **The Four Memory Layers — Quick Reference:**
   | Layer | What | Built In |
   |---|---|---|
   | 1. Personal | Who you are, how you work | L03 |
   | 2. Team | Key people, communication styles | L04 |
   | 3. Projects | Active projects, codenames, priorities, risks | L05 |
   | 4. Organisational | Terminology, meeting rhythm, culture, unwritten rules | L03 |

6. **Closing quote** — "The goal was never to replace the people in your organisation. It was to give the people in your organisation an AI that actually knows where they work."

7. **What comes next** — "Chapter 40 synthesises everything." Brief pointer to the capstone chapter.

### Exercise Design

NO exercises — this is a reference lesson.

### Duration

15-20 minutes

### Exit Criteria

Reader has a scannable reference for all commands, agents, and memory layers. Reader understands the chapter's central insight.
