# Writer Brief: Skills-B (L08, L09, L10, L11)

**Read first:** `shared-brief.md` (required context for all writers)

---

## L08: The Daily Digest

### File to Create

`apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/08-the-daily-digest.md`

### Source Material

- Governing spec: "Part Three: The Daily Digest" (lines 436-523) — includes purpose, workflow, sample output, configuration, digest length rules, tone guidance
- Product spec: `products/digest.md` — full digest workflow including assembly sources, output structure, length rules, tone rules, Monday/Friday variants
- Template: `work.local.md.template` — Digest Configuration section (lines 179-193)
- Plugin skill: `digest`

### What This Lesson Does

Teaches the daily digest — the agentic morning briefing. The reader designs their own digest format, configures it in work.local.md, generates their first digest, and understands the Monday/Friday variants. The digest is the single highest-leverage productivity habit: a 5-minute read that replaces 30-60 minutes of manual information gathering.

### Structure

1. **Opening** — "The single highest-leverage productivity habit for any senior professional is starting the day with a clear picture of what matters." The challenge: scanning emails, checking project statuses, reviewing delegations, pulling meeting agendas = 30-60 minutes before actual work begins. The digest compresses this to 5 minutes.
2. **Digest assembly sources** — Where the digest pulls from (in priority order): work.local.md, Google Calendar (via MCP), task management (via MCP), Gmail (via MCP), Slack (via MCP), domain agent feeds. Note: MCP sources are optional — the digest works with work.local.md alone, just less comprehensively.
3. **Digest output structure** — Walk through each section: headline status, today's critical path (max 5), today's calendar, open delegations status, flagged from yesterday, this week at a glance, upcoming deadlines (7-14 days), weekly priorities reminder.
4. **Sample output** — Use the governing spec's full daily digest sample (lines 457-505). This MUST use case study data: Zia Khan, Project Nighthawk escalation, Omar's analytics brief, Ayesha's review, Chapter 39 deadline, Boulders.
5. **Digest length rules** — MAXIMUM 1 page / 5 minutes. If it exceeds one page, items are being included that should not be there. Specific limits per section.
6. **Digest tone** — NOT a comprehensive status report. NOT a list of everything happening. IS a briefing — written by a knowledgeable colleague, not a system. Show the tone contrast: "Nighthawk has been quiet for 10 days — escalation today, not tomorrow" vs. "Project Nighthawk: status — no update for 10 days. Action: escalate."
7. **Monday/Friday variants** — Monday adds "This Week's Critical Path" and "Open from Last Week." Friday replaces "This Week at a Glance" with "Week Close" (completed, carries forward, set up for Monday).
8. **Configure YOUR digest** — Fill in the digest configuration section of work.local.md: schedule, sections, critical flag threshold, max items, format preference.
9. **Generate first digest** — Run `/agentic-office:digest`. Review against the quality criteria.

### Exercise Design

- Configure digest in work.local.md: 10 minutes
- Generate first digest: 5 minutes
- Review and refine: 10 minutes (is anything missing? too long? wrong priorities?)
- Generate Monday variant: 5 minutes

### Try With AI Prompts

- **Reproduce:** Run `/agentic-office:digest` and compare the output against the sample digest from this lesson. Are the sections correct? Is it under one page?
- **Adapt:** Configure your own digest schedule, sections, and thresholds. Generate a digest. Ask yourself: "If I read this every morning at 7 AM, would it replace my current morning information-gathering routine?"
- **Apply:** Generate a Friday variant (week close). Does it correctly separate "completed" from "carries forward"? What would you want to see every Friday that is different from a normal day?

### Duration

35-40 minutes

### Exit Criteria

Digest configured in work.local.md. First digest generated and reviewed. Reader understands Monday/Friday variants.

---

## L09: Meeting Intelligence

### File to Create

`apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/09-meeting-intelligence.md`

### Source Material

- Governing spec: "Part Four: Meeting Intelligence" (lines 527-636) — three-phase model, sample meeting prep, sample synthesis
- Product spec: `products/meeting.md` — full meeting workflow (before/during/after), D/A/F/Q/R coding, synthesis quality rules, decision/action numbering
- Product spec: `products/brief.md` — situation brief types (pre-meeting, pre-decision, person, project, topic)
- Plugin skill: `meeting-intelligence`

### What This Lesson Does

Teaches the three-phase meeting model (before/during/after). The reader generates a meeting prep brief for a real upcoming meeting, uses the D/A/F/Q/R note-taking template during a meeting, then generates a synthesis with decisions, actions, deferred items, and work.local.md update proposals.

### Structure

1. **Opening** — "Professionals in knowledge-work organisations spend — by most surveys — 35-55% of their time in meetings. Most of this time is poorly used." Three reasons: people arrive without context, decisions are made without information, actions are poorly captured and rarely followed through.
2. **The three-phase model:**
   - **BEFORE (30 min pre-meeting):** Context brief per agenda item, stakeholder notes, decisions needed, meeting rules from work.local.md, what happened last time this group met
   - **DURING (real-time):** D/A/F/Q/R note-taking template (Decision, Action, Fact, Question, Risk)
   - **AFTER (within 2 hours):** Structured synthesis with numbered decisions (D-YYYY-NNN), owned actions with deadlines, deferred items with triggers, next meeting proposal, work.local.md update proposals
3. **Sample meeting prep output** — Use the governing spec's Executive Weekly prep (lines 558-590). Must include: Nighthawk facility update, Omar's analytics budget, Islamabad workshop expansion decision. Show stakeholder notes loaded from work.local.md.
4. **D/A/F/Q/R note-taking template** — Explain each code. Show how messy meeting notes using these codes become clean synthesis output.
5. **Sample meeting synthesis output** — Use the governing spec's synthesis (lines 608-636). Show: D-001 (Nighthawk escalation), D-002 (analytics budget approved in principle), D-003 (Islamabad deferred), action items with owners and dates.
6. **Synthesis quality rules** — Decisions must be specific (not "discussed the budget"). Actions must have one named owner and a specific date (not "the team" or "ASAP"). Deferred items must have a trigger for revisit.
7. **Decision numbering** — D-YYYY-NNN for decisions, A-YYYY-NNN for actions. Stored in work.local.md decision log. Creates a searchable history.
8. **Work.local.md update proposals** — After synthesis, the skill proposes updates: project status changes, new decisions → decision log, new actions → action log. Always proposes; never applies without confirmation.

### Exercise Design

- Generate meeting prep for a real upcoming meeting: 15 minutes
- Use D/A/F/Q/R template during an actual meeting (or simulate with case study notes): 10 minutes
- Generate synthesis from notes: 10 minutes
- Review synthesis quality against the rules: 5 minutes

### Try With AI Prompts

- **Reproduce:** Generate a meeting prep brief for the Executive Weekly using the case study agenda items. Are the stakeholder notes accurate? Does it include "last time this group met"?
- **Adapt:** Choose a real meeting you have this week. Generate a prep brief. Is there context you had that the brief missed? (Add it to work.local.md.) Is there context in the brief you had forgotten? (The brief is working.)
- **Apply:** Take raw notes from a past meeting (any format) and feed them through the synthesis. Are the decisions captured accurately? Are all actions owned and dated? What was missed?

### Duration

40-45 minutes

### Exit Criteria

Reader can generate meeting prep briefs with stakeholder notes, use D/A/F/Q/R coding, and produce structured synthesis with numbered decisions and owned actions.

---

## L10: The Executive Dashboard

### File to Create

`apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/10-the-executive-dashboard.md`

### Source Material

- Governing spec: "Part Five: The Visual Dashboard" (lines 640-731) — dashboard problem, workflow, sample output, customisation
- Product spec: `products/dashboard.md` — dashboard output structure, RAG status rules, configuration
- Product spec: `products/track.md` — weekly status, milestone plans, blocker classification
- Template: `work.local.md.template` — Dashboard Configuration section (lines 198-215)
- Plugin skill: `progress-tracker`

### What This Lesson Does

Builds the executive dashboard — a single-page RAG-status view of all active work streams. The reader designs their dashboard sections, configures metrics sources, and generates their first dashboard. Importantly, this lesson contrasts the official plugin's dashboard.html (visual board for individual task tracking) with the custom plugin's text-based executive dashboard (cross-domain portfolio view with RAG status).

### Structure

1. **Opening** — "Every work function in this book has its own reporting. A senior executive reviewing all of these would spend hours each week simply gathering information before they could make a single decision. The executive dashboard collapses this into a single view."
2. **Two dashboards, two purposes** — Contrast table:
   - Official plugin dashboard.html = visual board for task CRUD (drag-and-drop, task cards, memory view). Individual-level. Interactive.
   - Custom plugin executive dashboard = text-based portfolio view with RAG status, open delegations, key metrics, upcoming decisions. Executive-level. Briefing format.
3. **Dashboard output structure** — Walk through: headline status (RED/AMBER/GREEN), P1 projects, P2 projects, key metrics (from domain agents), open actions (this week only), open delegations, upcoming decisions, calendar highlights.
4. **RAG status rules** — GREEN: all on track, no blockers. AMBER: one milestone at risk, minor blocker, decision needed this week. RED: milestone missed, hard blocker, decision overdue. Rule: NEVER show GREEN for a project where a milestone has slipped without explicit acknowledgement.
5. **Sample output** — Use the governing spec's full Executive Dashboard (lines 659-706). Must include: AgentFactory (AMBER), Project Nighthawk (RED), BankersAI (GREEN), key metrics from domain agents, open delegations (Omar, Compliance).
6. **Weekly project status** — Introduce the progress-tracker skill's weekly status format from products/track.md. Show the sample from the governing spec (lines 399-432).
7. **Blocker classification** — Three types from track.md: soft blocker (workaround exists), hard blocker (cannot continue), stale blocker (>7 days without movement). Each has a different escalation action.
8. **Configure YOUR dashboard** — Fill in the dashboard configuration section of work.local.md: sections, metrics_sources (only domains you have deployed), refresh cadence, format.
9. **Generate and refine** — Run `/agentic-office:progress-tracker` for the weekly status. Then run dashboard. The "5-minute test": could a colleague tell from this dashboard what your week looks like?

### Exercise Design

- Configure dashboard in work.local.md: 10 minutes
- Generate weekly status: 5 minutes
- Generate dashboard: 5 minutes
- 5-minute test (show to colleague or self-evaluate): 10 minutes
- Refine based on gaps: 10 minutes

### Try With AI Prompts

- **Reproduce:** Generate the executive dashboard using the case study data. Verify: is Project Nighthawk correctly flagged as RED? Is the headline status correct?
- **Adapt:** Configure your own dashboard with metrics relevant to your role. Generate it. What sections are useful? What is noise?
- **Apply:** Imagine your manager asks: "What's the overall status this week?" Run the dashboard and weekly status. Could you forward the output directly, or does it need editing? What does that tell you about the quality of your work.local.md?

### Duration

40-45 minutes

### Exit Criteria

Dashboard configured in work.local.md. Executive dashboard and weekly status generated. Reader understands RAG rules and blocker classification.

---

## L11: Cross-Domain Intelligence

### File to Create

`apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/39-productivity-agentic-office/11-cross-domain-intelligence.md`

### Source Material

- Governing spec: "Part Six: Cross-Domain Integration" (lines 734-828) — context injection pattern, search layer
- Product spec: `products/context.md` — context injection workflow, 5 context types, cross-domain output structure, integration protocol
- Product spec: `products/search.md` — cross-context search, search output structure, search behaviour rules
- Governing spec exercises: Exercise 7 (Cross-Domain Integration Test, lines 1444-1527)
- Plugin skills: `context-loader` + `workplace-search`

### What This Lesson Does

This is the integration lesson — where domain agents stop being isolated silos and become connected intelligence. The reader loads cross-domain context (HR + Finance + Ops) for a realistic scenario, runs cross-context searches, and identifies integration gaps. This lesson ties the productivity layer to all the domain agents from earlier Part 3 chapters.

### Structure

1. **Opening** — "The domain agents built in Chapters 28-38 operate in their own contexts. The finance agent knows about the analytics budget proposal. The HR agent knows that Ayesha is in her onboarding window. The operations agent knows the BSI ISO renewal is pending. None of these agents knows what the others know."
2. **The context injection pattern** — `/agentic-office:context-loader` loads specific context from one or more domains before a task. Five types: single-domain, cross-domain, person, project, decision.
3. **Cross-domain context output** — Walk through: core context, domain 1 context, domain 2 context, people context, what to watch for, gaps in context. Emphasis on the "gaps in context" section — knowing what you do NOT know is as important as knowing what you do.
4. **Sample output** — Use the governing spec's analytics budget cross-domain context brief (lines 757-786). Show how it combines: Finance (budget proposal), People (Omar's communication style), Operations (ERP migration compatibility), HR (Ayesha's onboarding needs).
5. **Cross-context search** — `/agentic-office:workplace-search` searches all four memory layers simultaneously. Show the Islamabad expansion search from the governing spec (lines 798-827).
6. **Integration protocol** — When loading cross-domain context, check each configured domain: HR (onboarding, approvals?), Finance (budget constraints?), Operations (vendor, compliance?), Sales (pipeline?), Product (roadmap?).
7. **Practice scenario** — Use the Dr. Sana Mirza onboarding scenario from the governing spec exercise 7: touches HR (onboarding), Finance (headcount/budget), Operations (system access). Load cross-domain context. Generate the integrated action plan.
8. **Identify integration gaps** — What information had to be manually bridged? What would need to change in work.local.md to automate this coordination?

### Exercise Design

- Cross-domain context load (case study scenario): 15 minutes
- Cross-context search (3 queries): 10 minutes
- Practice scenario (Dr. Sana Mirza onboarding): 15 minutes
- Gap analysis: 5 minutes

### Try With AI Prompts

- **Reproduce:** Load cross-domain context for the analytics budget discussion using case study data. Does the output combine Finance, People, and Operations context?
- **Adapt:** Choose a real scenario in your work that touches 2+ domains. Load cross-domain context. What did the output surface that you had not considered?
- **Apply:** Run the search: "What is at risk across all my projects and domains right now?" Then ask: "What would I need to add to work.local.md to make this answer comprehensive?" The gap between the current answer and the ideal answer is your work.local.md improvement roadmap.

### Duration

40-45 minutes

### Exit Criteria

Reader can load cross-domain context for multi-function scenarios. Reader understands integration protocols. Reader can identify gaps in their work.local.md configuration.
