# Writer Brief: Skills-A (L04, L05, L07)

**Read first:** `shared-brief.md` (required context for all writers)

---

## L04: Building Your People Memory

### File to Create

`apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/04-building-your-people-memory.md`

### Source Material

- Governing spec: "Layer 2: Team Memory" (lines 118-151) + "Part Seven: People and Terminology Memory" (lines 831-917)
- Product spec: `products/memory.md` — TYPE 1 (Add Person), TYPE 4 (Person Brief)
- Governing spec sample: the People Brief output for Omar, Ayesha, and Dr. Sana Mirza (lines 878-916)
- Template: `work.local.md.template` — Layer 2 (people section)
- Plugin skill: `workplace-context` (person entry CRUD + person briefs)

### What This Lesson Does

Builds Layer 2 (Team) of work.local.md. The reader adds 3-5 key stakeholders with full communication profiles, then tests with person briefs. This is the layer that enables stakeholder-aware outputs — delegation messages calibrated to the recipient, meeting briefs with attendee notes, and handoff communications.

### Structure

1. **Opening** — Why people memory matters. The difference between "Draft a message to Omar" (generic) and "Draft a message to Omar — he prefers Slack DM, needs lead time, will push back on scope creep, include specific data" (calibrated). The message quality is night-and-day different.
2. **Person entry format** — Walk through the YAML structure from products/memory.md TYPE 1. Explain each field: name, role, reports_to, communication, current_focus, priorities, note, sensitivity.
3. **Build 3 person entries using case study data:**
   - Omar Farooq — full entry with communication style, priorities, note about scope creep
   - Ayesha Raza — new hire, onboarding, fintech background, needs timely feedback
   - Dr. Sana Mirza — joining Monday, academic precision, PHM ownership, Omar relationship
4. **Sensitivity handling** — Explain the sensitivity field. Show the Zara Hussain example (succession planning — do not reference in group settings). Rule: sensitive entries are never surfaced in group outputs.
5. **Person briefs** — Run `/agentic-office:workplace-context` with "Give me a brief on everyone I'll be speaking with today: Omar, Ayesha, and Dr. Sana Mirza." Show the realistic sample output from the governing spec (lines 878-916).
6. **Build your own people entries** — Reader adds their own top 5 stakeholders. Emphasis: "Write how they actually communicate, not how you wish they did."
7. **Test it** — Run a person brief for the reader's own stakeholders. Evaluate: are the communication styles accurate? Would the approach guidance actually help?

### Exercise Design

- Build 3 case study entries: 10 minutes
- Build 5 own entries: 20 minutes
- Person brief test: 10 minutes

### Try With AI Prompts

- **Reproduce:** Add the Omar Farooq entry to work.local.md. Then ask: "I need to delegate an analytics task to Omar. What should I know before drafting the message?" Verify the output uses his communication preferences.
- **Adapt:** Add your direct reports or key peers. Run person briefs for each. Rate accuracy: which entries need more specificity?
- **Apply:** You are about to have a difficult conversation with someone on your team about a missed deadline. Add their entry (including communication style and sensitivities), then ask for approach guidance. Does the output calibrate to the person?

### Duration

35-40 minutes

### Exit Criteria

Layer 2 of work.local.md has 5+ person entries with specific communication styles. Person briefs produce calibrated, actionable output.

:::note Keep This File
Your work.local.md is progressive — Lesson 5 adds Layer 3 (Projects). Do not start a new file.
:::

---

## L05: Projects and Priorities

### File to Create

`apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/05-projects-and-priorities.md`

### Source Material

- Governing spec: "Layer 3: Project Memory" (lines 153-196)
- Product spec: `products/memory.md` — TYPE 2 (Add Project)
- Product spec: `products/search.md` — full cross-context search workflow
- Governing spec sample: the Islamabad expansion search result (lines 798-827)
- Template: `work.local.md.template` — Layer 3 (projects section)
- Plugin skills: `workplace-context` (project entries) + `workplace-search` (cross-context search)

### What This Lesson Does

Builds Layer 3 (Projects) of work.local.md. The reader adds 3-5 active projects with codenames, status, priority, milestones, and risks. Then introduces workplace-search — the ability to search across all four memory layers simultaneously. After this lesson, the work.local.md foundation is COMPLETE (all 4 layers built across L03-L05).

### Structure

1. **Opening** — Why project memory matters. "Project amnesia is the most expensive failure mode. Every project briefing starting from scratch means every status update is reconstructed from memory, every risk assessment is rediscovered, every decision is relitigated."
2. **Project entry format** — Walk through the YAML structure from products/memory.md TYPE 2. Explain each field: name, codename, status, priority, owner, description, current_milestone, next_milestone, at_risk, decisions, key_contacts.
3. **Build 3 project entries using case study data:**
   - AgentFactory (P1, IN PROGRESS, current milestone: Chapter 39)
   - Project Nighthawk (P2, PLANNING/AT RISK, facility agreement stalled)
   - BankersAI (P2, RECURRING, Workshop #7 upcoming)
4. **Priority levels** — P1 (highest — critical to organisation's strategic goals), P2 (important — significant but not existential), P3 (standard — valuable but could be deferred). Rule: if you have more than 3 P1s, you have no P1s.
5. **Codenames and why they matter** — Codenames serve privacy (Project Nighthawk is safer than "Karachi expansion" in mixed company), efficiency (shorter), and identity (a codename becomes a shared reference point).
6. **Introduce workplace-search** — Run `/agentic-office:workplace-search` with "What do we know about the Islamabad expansion?" Show the cross-context search output from the governing spec (lines 798-827). Demonstrate how it searches all four layers simultaneously: project memory, meeting notes, decision log, terminology.
7. **Build your own project entries** — Reader adds their own 3-5 active projects. Emphasis: "Be honest about the at_risk field. A risk you do not write down is a risk you will forget."
8. **Foundation complete** — After L03 (Layers 1+4), L04 (Layer 2), and L05 (Layer 3), the work.local.md foundation is complete. All subsequent lessons BUILD ON this foundation.

### Exercise Design

- Build 3 case study project entries: 10 minutes
- Build 3-5 own project entries: 15 minutes
- Search test: 10 minutes — run 3 search queries and evaluate completeness

### Try With AI Prompts

- **Reproduce:** Add the AgentFactory project entry. Search: "What is the status of AgentFactory?" Verify the output includes status, milestone, and risk.
- **Adapt:** Add your own P1 project with full details. Then search for it. Is anything missing that you expected the search to surface?
- **Apply:** Run the search: "What is at risk across all my projects right now?" How complete is the result? What would you need to add to work.local.md to make this search comprehensive?

### Duration

35-40 minutes

### Exit Criteria

Layer 3 of work.local.md has 3-5 projects with full metadata. Workplace-search produces cross-context results across all four layers. The work.local.md foundation is complete.

---

## L07: Delegation as a Discipline

### File to Create

`apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/07-delegation-as-a-discipline.md`

### Source Material

- Governing spec: "The `/delegate` Workflow" (lines 336-386) + delegation output example
- Product spec: `products/delegate.md` — full delegation workflow, output structure, handoff communication calibration, delegation quality checklist, follow-up standards
- Plugin skill: `delegation`

### What This Lesson Does

Teaches the delegation quality standard — a delegation is only as good as its brief. Introduces the delegation skill, shows how it generates delegation records with handoff communications calibrated to the delegatee's communication style (loaded from work.local.md). Covers the follow-up protocol (confirmation window, check-ins, overdue handling).

### Structure

1. **Opening** — "A delegation is only as good as its brief. A vague delegation — 'can you handle the analytics thing?' — generates more work than doing the task yourself because the delegatee will come back with questions you should have anticipated."
2. **The delegation quality checklist** — 7 items from products/delegate.md: specific deliverable, named person, specific deadline, context (purpose + audience), format specified, written in delegatee's preferred style, follow-up mechanism defined.
3. **Delegation record format** — Walk through the output structure: delegated to, date, due, deliverable (what, format, length), context (purpose, audience, key question), constraints, handoff communication, follow-up plan.
4. **Handoff communication calibration** — This is the key differentiator. Show how the delegation skill loads the delegatee's communication profile from work.local.md and calibrates the handoff message. Example: delegating to Omar (needs lead time, prefers Slack, specific about scope) vs. delegating to Ayesha (new starter, prefers written briefs, needs more context). Same task, different messages.
5. **Sample output** — Use the governing spec's analytics brief delegation to Omar (lines 349-386). Show the full delegation record including the calibrated Slack message.
6. **Follow-up protocol** — Confirmation window (24h for same-week, 48h for longer), in-progress check-ins, overdue handling (1 day: polite inquiry, 3 days: explicit conversation, 1 week: escalation flag).
7. **The delegation log** — How delegations are tracked in work.local.md. Status lifecycle: PENDING CONFIRMATION → IN PROGRESS → COMPLETE / OVERDUE.
8. **Practice** — Reader creates 2-3 delegation records for real tasks in their own context.

### Exercise Design

- Delegation 1 (case study): Delegate analytics brief to Omar using the skill. Evaluate handoff communication quality. 10 minutes.
- Delegation 2 (own context): Delegate a real task to a real person from your own work.local.md. 15 minutes.
- Follow-up setup: Define follow-up windows for each delegation. 5 minutes.

### Try With AI Prompts

- **Reproduce:** Run `/agentic-office:delegation` to delegate the analytics brief to Omar. Does the handoff message match his communication style from work.local.md?
- **Adapt:** Pick a task you are currently doing yourself that could be delegated. Run the delegation skill. Is the delegation record specific enough for the delegatee to succeed without coming back to you?
- **Apply:** Think about a delegation that went wrong in your experience. What was missing from the brief? Map it against the 7-item delegation quality checklist.

### Duration

35-40 minutes

### Exit Criteria

Reader can produce delegation records with calibrated handoff communications. Reader understands the delegation quality checklist and follow-up protocol.
