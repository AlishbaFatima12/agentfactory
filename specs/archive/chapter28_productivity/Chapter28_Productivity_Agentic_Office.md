# Chapter 28: Productivity & The Agentic Office

> *"Every AI assistant I have tried knows everything about the world and nothing about my world. It can write a perfect OKR framework but doesn't know that we call our quarterly targets 'Boulders' not OKRs. It can produce a flawless meeting summary but doesn't know that when Zara says 'let's take this offline' she means it's politically sensitive and should not be minuted. It knows how to draft a project update but doesn't know that Project Nighthawk is what we call the Karachi expansion internally. I spend five minutes of every conversation re-explaining things that a good colleague would already know."*
> — Chief of Staff, 300-person technology company

---

## Introduction: The Context Problem

Every domain chapter in Part 3 of this book solved a specific professional problem. Chapter 17 deployed AI for financial analysis. Chapter 23 automated revenue operations. Chapter 24 optimised supply chains. Chapter 26 transformed HR operations. Chapter 27 built an operations intelligence layer.

Each of these is valuable in isolation. Together, they represent something more significant: an **AI-native organisation** where every major work function has a layer of intelligent automation working alongside the humans who run it.

But there is a gap. Every one of those domain agents starts each conversation the same way: from zero. No memory of the conversation yesterday. No knowledge of your organisation's specific terminology. No awareness that the "Phoenix Project" is the new product launch, that "Bilal" is the Head of Engineering and his first name alone is sufficient, that "the committee" means the Executive Committee and meets on the first Monday of every month, or that your organisation spells its values "CLEAR" and they are the lens through which all significant decisions are made.

This gap — the distance between how a sophisticated AI answers a question in the abstract and how a knowledgeable colleague answers the same question in context — is the **Context Problem**.

A good colleague knows:
- Your name and role, and the names and roles of your key stakeholders
- What your current priorities are and what is at risk
- What the organisation's terminology means (including the unofficial terms)
- The history of decisions and why they were made
- Who has authority over what
- What happened in the last meeting and what was agreed
- What is due, to whom, and by when

A chatbot knows none of this unless you tell it every single time. The productivity gap between an AI assistant that starts from zero every session and one that carries meaningful context is enormous.

**Chapter 28 closes this gap.** It introduces the Workplace Memory Architecture — a four-layer context system that gives Claude persistent, structured knowledge of your people, projects, terminology, and priorities. It introduces the productivity plugin commands that make this memory actionable. And it shows how the Digital Chief of Staff emerges: an AI that can act like a knowledgeable colleague, not a generic tool.

### The Four Context Failure Modes

**Failure Mode 1: Terminology blindness** — Claude produces outputs using generic vocabulary when your organisation has specific terms. "OKRs" instead of "Boulders." "Headcount approval" instead of "HC-6 form." "The strategy document" instead of "the Compass." Generic outputs that require manual translation into organisational language.

**Failure Mode 2: People anonymity** — Claude does not know who people are. Every time you reference "Sarah," you must explain that Sarah is the CFO, has a conservative approach to new spending, and needs financial impact to be quantified before she will approve anything. A good colleague would know this after one interaction.

**Failure Mode 3: Project amnesia** — Claude has no awareness of what is currently in flight. Every project briefing starts from scratch. No knowledge of where things stand, what decisions have been made, what is at risk, or what was agreed in the last review.

**Failure Mode 4: Priority blindness** — Claude treats all requests equally. It does not know that the Karachi expansion is the organisation's most critical initiative this quarter and therefore anything connected to it should be treated with elevated urgency and thoroughness.

The Workplace Memory Architecture addresses all four.

---

## The Productivity Plugin Architecture

### Installing the Plugin

```
Platform:  Claude Cowork
Path:      Cowork → Plugins → Browse
Plugin:    Productivity
GitHub:    https://github.com/anthropics/knowledge-work-plugins/tree/main/productivity
```

### Plugin Commands

| Command | Function |
|---|---|
| `/task` | Task capture, prioritisation, and management |
| `/memory` | Workplace memory — people, projects, terminology |
| `/dashboard` | Visual work dashboard — all streams in one view |
| `/brief` | Situation briefing — context before a meeting or decision |
| `/digest` | Daily digest — morning briefing assembled from all sources |
| `/meeting` | Meeting intelligence — before, during, and after |
| `/search` | Cross-context search — find anything in workplace memory |
| `/context` | Context injection — load specific context for a task |
| `/delegate` | Delegation tracking — who owns what and by when |
| `/track` | Progress tracking — milestones, blockers, status |

### The `work.local.md` Configuration File

The productivity plugin is powered by `work.local.md` — the organisation's **workplace memory file**. This is the most important configuration file in the book. It encodes:

- **Your people** — names, roles, reporting lines, communication styles, and what matters to each person
- **Your projects** — names (including internal codenames), status, owners, and priorities
- **Your terminology** — what your organisation calls things, including the unofficial vocabulary
- **Your rhythm** — recurring meetings, reporting cycles, and organisational cadences
- **Your priorities** — what matters most this quarter, this month, this week

A well-built `work.local.md` transforms Claude from a generic AI assistant into something that approximates a knowledgeable colleague — one who knows the organisation's context without being re-briefed every session.

---

## Part One: Workplace Memory — The Four Layers

### Why Memory Matters More Than Intelligence

The difference between a brilliant new hire and an experienced colleague is not intelligence. It is context. The brilliant new hire knows more about the domain than the experienced colleague. But the experienced colleague knows who to talk to, how to frame things for the CFO, what has been tried before, what the unwritten rules are, and how decisions actually get made.

Claude's intelligence is not in question. In almost every domain, it can reason as well as or better than expert humans. The constraint is context — the accumulated organisational knowledge that a colleague carries and Claude, without memory, does not.

The Workplace Memory Architecture builds this context in four layers:

### Layer 1: Personal Memory

Who you are, how you work, and what you need.

```yaml
# personal.md — individual memory layer
name: "Zia Khan"
role: "CEO, Panaversity / COO, PIAIC"
communication_style: >
  Direct; evidence-based; prefers bullet points for complex information
  but narrative for persuasive content. Never pad responses with preamble.
working_hours: "07:00–22:00 PKT (Pakistan Standard Time)"
decision_style: >
  Systems thinker; wants to see second-order effects. Prefers to understand
  the 'why' before the 'what'. Comfortable with ambiguity but expects
  explicit flagging of key unknowns.
current_focus: >
  AI Agent Factory book (completing Part 3); PIAIC Karachi expansion;
  Chapter delivery for curriculum launch in Q2 2026.
tools: "Claude Cowork (primary); Google Workspace; Notion (project management)"
language_preference: "English; technical terms in English; greetings in Urdu OK"
```

### Layer 2: Team Memory

Who your key people are and how to work with them.

```yaml
# team.md — people memory layer
people:
  - name: "Omar Farooq"
    role: "Head of Analytics, Panaversity"
    reports_to: "CEO"
    communication: >
      Prefers data-backed requests. Give him lead time — he dislikes last-minute asks.
      Best channel: Slack DM for routine; email for formal requests.
    priorities: "Q1 analytics refresh; data pipeline audit"
    current_focus: "Rebuilding the student performance dashboard"
    note: "Will push back on scope creep — be specific about what you need"

  - name: "Ayesha Raza"
    role: "Senior Data Analyst, Finance & Analytics"
    reports_to: "Omar Farooq"
    joined: "March 2026 (new starter — still in onboarding)"
    communication: "Detail-oriented; prefers written briefs to verbal requests"
    priorities: "Q1 analytics refresh; pipeline audit"
    note: "New to edtech; experienced in fintech — bridge language accordingly"

  - name: "Zara Hussain"
    role: "Senior Data Engineer"
    reports_to: "Head of Engineering"
    communication: >
      Technically precise; will flag scope ambiguity immediately.
      Prefers async; does not like surprise meeting invites.
    note: "Being assessed for Team Lead role — handle with care in group settings"
    sensitivity: "Do not reference succession planning in group communications"
```

### Layer 3: Project Memory

What is in flight, what matters, and what is at risk.

```yaml
# projects.md — project memory layer
projects:
  - name: "AI Agent Factory"
    codename: "AgentFactory"
    status: "IN PROGRESS"
    priority: "P1 — highest"
    owner: "Zia Khan"
    description: >
      Open-source curriculum for building and monetising AI agents.
      Book: agentfactory.panaversity.org. Part 3 domain chapters
      are the current focus. Target: complete by Q2 2026 curriculum launch.
    current_milestone: "Chapter 28 (Productivity) — in progress"
    next_milestone: "Chapter 29 (Complete AI-Native Org) — due [date]"
    at_risk: "Chapter sequencing — skills files must accompany each chapter"
    key_decisions:
      - "Chapters include both narrative and downloadable skills library"
      - "Each chapter ends with 8 exercises of 60–90 min each"
      - "Skills files follow HR/Ops/PM format: router + products + agents + template"

  - name: "Karachi Expansion"
    codename: "Project Nighthawk"
    status: "PLANNING"
    priority: "P2"
    owner: "COO, PIAIC"
    description: >
      Expansion of PIAIC operations to new Karachi campus.
      Target: Q3 2026 launch. Key dependency: facility agreement.
    at_risk: "Facility agreement negotiations stalled — escalation needed"
    key_contacts: ["Local government liaison", "Facilities team"]

  - name: "Banker AI Workshop"
    codename: "BankersAI"
    status: "RECURRING"
    priority: "P2"
    description: >
      Monthly AI upskilling workshops for banking sector professionals.
      Uses Anthropic Cowork as the primary platform demonstration.
    next: "Workshop #7 — [date] — topic: Digital FTEs for compliance teams"
```

### Layer 4: Organisational Memory

Terminology, structure, culture, and the unwritten rules.

```yaml
# org.md — organisational memory layer
organisation:
  name: "Panaversity / PIAIC"
  mission: >
    Making advanced AI education accessible to working professionals
    across Pakistan.

terminology:
  "Boulders": "Quarterly strategic priorities (equivalent to OKRs)"
  "Digital FTE": >
    A fully configured AI agent performing a specific professional role.
    Not a chatbot — a Digital Full-Time Employee.
  "AgentFactory": "Internal codename for the AI Agent Factory book project"
  "Project Nighthawk": "Codename for the Karachi expansion project"
  "The Compass": "Strategic planning document — annual; reviewed quarterly"
  "PIAIC Faisalabad SIG": >
    AI Special Interest Group for business leaders in Faisalabad.
    Meets monthly. Zia chairs.
  "TutorClaw": >
    The Digital FTE teaching agent for the AI Agent Factory curriculum.
    Persona: knowledgeable guide; warm but precise.
  "PHM": >
    Personalized Hybrid Model — Panaversity's seven-approach adaptive
    teaching framework. Core pedagogical IP.

meeting_rhythm:
  - name: "Executive Weekly"
    day: "Monday 09:00 PKT"
    attendees: ["CEO", "COO", "Heads of Department"]
    purpose: "Weekly priorities; blockers; decisions needed"
    format: "30 minutes standing; no slides"
  - name: "Chapter Review"
    day: "Bi-weekly Friday 14:00 PKT"
    attendees: ["Zia", "Publishing team"]
    purpose: "Chapter draft review; feedback; next chapter planning"
  - name: "Banker Workshop"
    day: "Monthly — last Saturday"
    attendees: ["Zia", "Workshop team", "Banking sector attendees"]

culture:
  values: ["CLEAR: Curious, Learner, Empathetic, Accountable, Resilient"]
  decision_making: >
    Evidence first; then judgment. Decisions documented in Notion.
    "Disagree and commit" culture — once decided, full execution expected.
  communication: >
    Async-first; real-time for decisions and sensitive conversations.
    Slack for daily; email for formal; WhatsApp for urgent.
  unwritten_rules:
    - "'Let's take this offline' = politically sensitive; do not minute"
    - "Data requests to Omar need 3 business days' lead time minimum"
    - "Zia reviews book chapters personally; do not send unreviewed drafts externally"
    - "Workshop content must be reviewed 7 days before delivery"
```

---

## Part Two: Task Management — Capture, Prioritise, Delegate, Track

### The Task Management Problem

Every professional has a task list. Few have a task *system*. The difference is consequential. A task list is a collection of items. A task system captures tasks in context (where did this come from? what does it depend on?), prioritises them against each other (not just individually), tracks delegation (who owns this now?), and surfaces what is at risk (what is overdue? what is blocked?).

Most professionals spend the equivalent of 4–6 hours per week on task management overhead: writing tasks down in different places, reconciling lists, chasing delegated items, and updating project statuses. The `/task` and `/delegate` and `/track` commands compress this to minutes.

### The `/task` Workflow

```
/task type:"capture"
> User: Capture from my notes this morning:
        - Need to finish Chapter 28 draft by Thursday
        - Omar needs the analytics brief for the investor deck — he asked yesterday
        - Follow up with BSI about ISO 27001 renewal — been waiting 2 weeks
        - Review Ayesha's first analysis output — she sent it this morning
        - Prep for the Monday Executive Weekly — three agenda items to add
        - Check Project Nighthawk facility status — it's been 10 days since
          last update and this is blocking the Q3 plan
```

**Sample Task Capture Output:**

```
TASK CAPTURE — [Date]
════════════════════════════════════════════════════════════
6 tasks captured | 1 overdue risk | 2 delegation candidates

── PRIORITY SORT ───────────────────────────────────────────

P1 — URGENT / HIGH IMPACT:
  ☐ [TASK-001] Project Nighthawk: facility status check
    Context:  No update for 10 days; blocking Q3 plan
    Due:      Today — this is overdue already
    Action:   Contact facilities liaison directly; escalate if no response
    Project:  Project Nighthawk

  ☐ [TASK-002] Analytics brief for investor deck (Omar)
    Context:  Omar requested yesterday; investor deck presumably has a deadline
    Due:      Clarify deadline with Omar today
    Action:   Send Omar a brief (what exactly is needed; by when; format)
    Delegate to: Omar Farooq
    Note:     Give Omar lead time — he dislikes last-minute asks

P2 — IMPORTANT / THIS WEEK:
  ☐ [TASK-003] Chapter 28 draft complete
    Due:      Thursday
    Project:  AgentFactory
    Note:     P1 project; treat as high priority despite P2 urgency rating

  ☐ [TASK-004] Review Ayesha's first analysis output
    Context:  She sent this morning; she is a new starter in onboarding
    Due:      Recommended today or tomorrow — timely feedback matters for
              new starters; a week's wait sends the wrong signal
    Note:     Be specific and encouraging; she is still in her 30-day window

  ☐ [TASK-005] Executive Weekly prep — 3 agenda items
    Due:      Before Monday 09:00 PKT
    Action:   Confirm agenda items; send to attendees by Friday

P3 — STANDARD:
  ☐ [TASK-006] BSI ISO 27001 renewal follow-up
    Context:  Waiting 2 weeks — push for response
    Due:      This week
    Delegate to: [Compliance owner — configure in work.local.md]

── DELEGATION CANDIDATES ───────────────────────────────────
  TASK-002 → Omar Farooq (with clear brief — what, format, deadline)
  TASK-006 → Compliance owner (or operations team)

── BLOCKED / RISK ──────────────────────────────────────────
  TASK-001: Project Nighthawk stalled — escalation risk
  TASK-002: Investor deck deadline unknown — clarify before delegating
════════════════════════════════════════════════════════════
```

### The `/delegate` Workflow

```
/delegate
> User: Delegate the analytics brief to Omar. He needs to produce
        a 2-page investor-facing analytics summary covering:
        student completion rates Q1; revenue per student trend;
        cohort retention data. Needed for the investor deck on
        [Date + 5 days]. Format: slides-ready data; no prose.
```

**Sample Delegation Output:**

```
DELEGATION RECORD — TASK-002
════════════════════════════════════════════════════════════
Delegated to:  Omar Farooq, Head of Analytics
Delegated by:  Zia Khan
Date:          [Today]
Due:           [Date + 5 days] by 17:00 PKT

DELIVERABLE:
  What:    2-page investor-facing analytics summary
  Format:  Slides-ready data (not prose); charts preferred
  Content:
    1. Student completion rates — Q1 2026 vs. Q1 2025
    2. Revenue per student trend — last 4 quarters
    3. Cohort retention — Q1 cohort at 30/60/90 days

CONTEXT:
  Purpose: Investor deck for [meeting name] on [Date + 5 days]
  Audience: Investors — sophisticated; data-literate; will ask about trends
  What they will likely ask: "Is retention improving? What's driving it?"

HANDOFF COMMUNICATION (ready to send):
  Draft Slack message to Omar:

  "Omar — can I ask for your help on a time-sensitive piece?
  I need a 2-page analytics summary for an investor deck by [Date + 5 days].
  Specifically: Q1 student completion rates vs. prior year; revenue per student
  trend (last 4Q); Q1 cohort retention at 30/60/90 days.
  Format: slides-ready — charts rather than tables where possible.
  The deck audience is sophisticated investors who will probe on retention trends.
  Can you confirm receipt and flag any data availability issues by EOD today?
  Happy to discuss if the scope needs adjusting."

FOLLOW-UP:
  If no confirmation by EOD today: follow up
  If no delivery by [Date + 3 days]: escalation check-in
════════════════════════════════════════════════════════════
```

### The `/track` Workflow

```
/track type:"weekly-status"
> User: Give me a weekly status across all active projects.
        [Agent pulls from work.local.md project memory]
```

**Sample Weekly Status Output:**

```
WEEKLY PROJECT STATUS — Week of [Date]
════════════════════════════════════════════════════════════
── P1: AI AGENT FACTORY (AgentFactory) ────────────────────
  Status:    🟡 ON TRACK WITH RISK
  This week: Chapter 28 in progress; due Thursday
  Next:      Chapter 29 — final chapter (The Complete AI-Native Org)
  Risk:      Chapter 28 skills file must accompany chapter — separate
             deliverable; do not forget (pattern from Ch. 26 and 27)
  Action:    Confirm Chapter 29 outline before Chapter 28 is filed

── P2: KARACHI EXPANSION (Project Nighthawk) ──────────────
  Status:    🔴 AT RISK — BLOCKER
  Blocker:   Facility agreement — no update for 10 days
  Impact:    Q3 2026 launch is at risk if agreement not signed by [date]
  Action:    Escalate today — contact liaison directly; if no response
             by EOD, escalate to COO-level decision on next steps

── P2: BANKER AI WORKSHOP (BankersAI) ─────────────────────
  Status:    🟢 ON TRACK
  Next:      Workshop #7 — [date] — compliance team Digital FTEs
  Action:    Content review 7 days before delivery (unwritten rule)
  Prepared:  Confirm with workshop team by [date - 8 days]

── OPEN DELEGATIONS ────────────────────────────────────────
  Omar Farooq: Analytics brief — due [Date + 5 days] — ⏳ AWAITING CONFIRMATION
  Compliance owner: BSI ISO renewal follow-up — due this week — ⏳ DELEGATED

── THIS WEEK'S CRITICAL PATH ───────────────────────────────
  Today:     Project Nighthawk escalation; confirm Omar delegation
  Tue–Wed:   Chapter 28 completion
  Thu:       Chapter 28 filed; Project Nighthawk status confirmed
  Fri:       Executive Weekly agenda sent; Nighthawk escalation decision if needed
════════════════════════════════════════════════════════════
```

---

## Part Three: The Daily Digest — The Agentic Morning Briefing

### Why the Digest Matters

The single highest-leverage productivity habit for any senior professional is starting the day with a clear picture of what matters. The challenge is that building this picture — scanning emails, checking project statuses, reviewing delegations, pulling meeting agendas — takes 30–60 minutes of cognitive overhead before the actual work begins.

The `/digest` command assembles this picture automatically, pulling from multiple sources (calendar, task list, project memory, email, Slack) and presenting a structured morning briefing that can be reviewed in 5 minutes.

The Daily Digest is the agentic equivalent of having a Chief of Staff who prepares your morning brief before you arrive.

### The `/digest` Workflow

```
/digest
> [Agent assembles from: calendar, task list, project status,
   open delegations, and any flagged items from overnight]
```

**Sample Daily Digest:**

```
DAILY DIGEST — Wednesday, [Date] — Zia Khan
Prepared: 07:00 PKT
════════════════════════════════════════════════════════════
GOOD MORNING. Here is today's brief.

── TODAY'S CRITICAL PATH ───────────────────────────────────
  1. 🔴 Project Nighthawk: escalation — facility status overdue (10 days)
     Action: Contact liaison by 09:00; if no response, escalate to COO
  2. Chapter 28 draft — due Thursday (tomorrow)
     Status: In progress
  3. Review Ayesha's first analysis — do this today; she's in onboarding window
  4. Confirm Omar received delegation for analytics brief

── TODAY'S CALENDAR ────────────────────────────────────────
  09:00 — Executive Weekly (30 min; prepare 3 agenda items)
  11:00 — Chapter Review call (bi-weekly; Chapter 27 close-out)
  15:00 — No meetings; deep work block (Chapter 28 completion)

── OPEN DELEGATIONS STATUS ─────────────────────────────────
  ⏳ Omar Farooq — Analytics brief — due [Date + 5 days]
     Status: Delegated yesterday; no confirmation received
     Action: Chase confirmation if not received by 10:00 today

  ⏳ Compliance — BSI ISO renewal — due this week
     Status: Delegated; no update

── FLAGGED FROM YESTERDAY ──────────────────────────────────
  • Ayesha's analysis sent — review before her confidence fades
  • Project Nighthawk: 10 days without update — escalation today (not tomorrow)

── THIS WEEK AT A GLANCE ───────────────────────────────────
  Today (Wed):  Nighthawk escalation; Omar confirmation; Ayesha review
  Thu:          Chapter 28 filed; Executive Weekly prep sent
  Fri:          Skills library for Chapter 28 (separate deliverable)
  Mon:          Executive Weekly 09:00

── UPCOMING DEADLINES ──────────────────────────────────────
  Thu [date]:   Chapter 28 narrative draft
  [Date + 5]:   Omar's analytics brief (investor deck)
  [Date + 8]:   Workshop #7 content review
  [Date + 21]:  Project Nighthawk — latest date for facility agreement
                to keep Q3 launch viable

── WEEKLY PRIORITIES REMINDER ──────────────────────────────
  This week's Boulders:
  1. Complete Chapter 28 (AgentFactory — P1)
  2. Resolve Project Nighthawk facility blocker (P2)
  3. Investor analytics brief delivered (P2)
════════════════════════════════════════════════════════════
```

### Digest Configuration in `work.local.md`

```yaml
digest:
  schedule: "07:00 PKT — daily weekdays"
  sources:
    - Google Calendar (via MCP)
    - Notion task list (via MCP)
    - Gmail flagged / unread (via MCP)
    - Slack @mentions (via MCP)
    - Project status (from work.local.md)
    - Open delegations (from delegation log)
  format: "5-minute read; action-oriented; no fluff"
  critical_path_items: 3  # Maximum items in the critical path section
  escalation_threshold: "Any item blocked for >7 days → flag as critical"
```

---

## Part Four: Meeting Intelligence — Before, During, After

### The Meeting Problem

Professionals in knowledge-work organisations spend 35–55% of their time in meetings. Most of this time is poorly used, for a familiar set of reasons: people arrive without the context they need to contribute, discussions happen that should have been resolved asynchronously, decisions are made without the right information, and the agreed actions are poorly captured and rarely followed through.

Meeting intelligence uses AI across all three phases:

**Before the meeting:** context preparation — everything participants need to know, synthesised from project memory, prior decisions, and stakeholder profiles.

**During the meeting:** real-time support — agenda management, decision capture, action item recording.

**After the meeting:** synthesis — structured meeting notes, action tracker, and follow-up communications.

### The `/meeting` Workflow

**Before the meeting:**

```
/meeting type:"prep"
> User: Monday Executive Weekly in 30 minutes.
        Agenda items:
        1. Project Nighthawk — facility update (Zia presenting)
        2. Q2 Budgets — Omar presenting analytics spend proposal
        3. Workshop programme — decision on expanding to Islamabad
        Attendees: [List from work.local.md meeting_rhythm entry]
```

**Sample Meeting Prep Output:**

```
MEETING BRIEF — Executive Weekly
Date: Monday [Date] | Time: 09:00 PKT | Duration: 30 min
════════════════════════════════════════════════════════════
ITEM 1: PROJECT NIGHTHAWK — FACILITY UPDATE (Zia)
  Context:      Facility agreement negotiations; 10+ days without update
  Decision needed: Escalate negotiation? Extend Q3 deadline? Identify backup?
  Key risk:     Q3 launch is at risk if agreement not signed by [date]
  Your position: Present the delay factually; recommend escalation decision
  Stakeholder note: [COO equivalent] will want to know the financial impact
                    of a delay; quantify before the meeting if possible

ITEM 2: Q2 BUDGETS — ANALYTICS SPEND PROPOSAL (Omar)
  Context:      Omar is proposing analytics investment; new team member
                (Ayesha) already onboarded; pipeline work in progress
  What Omar needs: Budget approval for [amount] for [tooling/headcount]
  Your position: Support in principle; ask for ROI case before committing
  Stakeholder note: Finance representative will want payback period

ITEM 3: WORKSHOP EXPANSION — ISLAMABAD (Decision)
  Context:      Current: Karachi and Faisalabad workshops. Islamabad would
                be a third location.
  Decision needed: YES / NO / DEFER with timeline
  Arguments for:  Market demand; PIAIC brand expansion; government relations
  Arguments against: Capacity; Project Nighthawk already stretching operations
  Your position: [Prepare before meeting — what do YOU think?]
  Recommendation: Consider deferring until Nighthawk facility is resolved

MEETING RULES (from work.local.md):
  • 30 min standing — no slides
  • Decisions documented in Notion after the meeting
  • "Disagree and commit" — once decided, full execution expected
════════════════════════════════════════════════════════════
```

**After the meeting:**

```
/meeting type:"synthesis"
> User: Executive Weekly just finished. Here are my notes:
        Nighthawk: no update from liaison; decided to escalate to COO-level;
        Zia will write formal letter to facility owner by Wednesday.
        Analytics budget: approved in principle; Omar to produce ROI brief
        by next Monday before final sign-off.
        Islamabad: deferred — revisit after Nighthawk resolved.
        Any other business: noted that Chapter 28 needs to be filed by Thursday.
```

**Sample Meeting Synthesis:**

```
MEETING NOTES — Executive Weekly
Date: [Date] | Duration: 30 min | Author: AI synthesis
════════════════════════════════════════════════════════════
DECISIONS MADE:
  D-001: Project Nighthawk — escalation approved
         Zia to write formal letter to facility owner by Wednesday [date]
  D-002: Analytics budget — approved in principle
         Omar to produce ROI brief by Monday [date]; final sign-off after receipt
  D-003: Islamabad expansion — DEFERRED
         Revisit when Project Nighthawk facility is resolved

ACTION ITEMS:
  A-001: Formal letter to Nighthawk facility owner
         Owner: Zia Khan | Due: Wednesday [date]
  A-002: Analytics budget ROI brief
         Owner: Omar Farooq | Due: Monday [date]
  A-003: Chapter 28 filing
         Owner: Zia Khan | Due: Thursday [date]

ITEMS DEFERRED:
  Islamabad workshop expansion — no timeline set; trigger: Nighthawk resolved

NEXT MEETING:
  Executive Weekly — Monday [Date + 7] | 09:00 PKT
  Proposed agenda: Nighthawk facility response; Analytics ROI review; AOB

DISTRIBUTION: [Attendee list from work.local.md]
════════════════════════════════════════════════════════════
```

---

## Part Five: The Visual Dashboard — One Pane of Glass

### The Dashboard Problem

Every work function in this book has its own reporting: finance has the management accounts, HR has the headcount report, operations has the compliance dashboard, sales has the pipeline review. A senior executive reviewing all of these would spend hours each week simply gathering information before they could make a single decision.

The `/dashboard` command collapses this into a single view: a structured, always-current picture of every work stream that matters, assembled from the various domain agents and presented in one readable briefing.

### The `/dashboard` Workflow

```
/dashboard
> [Agent assembles from: all active project statuses, open actions,
   key metrics from each domain, and flagged items]
```

**Sample Executive Dashboard:**

```
EXECUTIVE DASHBOARD — [Date] — Zia Khan / Panaversity
════════════════════════════════════════════════════════════
HEADLINE STATUS: 🟡 ONE CRITICAL ITEM REQUIRING ATTENTION

── P1 PROJECTS ─────────────────────────────────────────────
  AgentFactory (Book)         🟡 ON TRACK / RISK
  Ch. 28: In progress — due Thursday
  Ch. 29: Planning — final chapter
  Skills libraries: Must accompany each chapter (pattern established)
  Risk: Ch. 28 skills file separate deliverable — do not miss

── P2 PROJECTS ─────────────────────────────────────────────
  Nighthawk (Karachi Expansion) 🔴 AT RISK
  Blocker: Facility — 10+ days no update
  Action: Formal letter drafted by Wednesday [date]
  Impact: Q3 launch at risk if not resolved by [date]

  BankersAI (Workshops)        🟢 ON TRACK
  Next: Workshop #7 — [date]
  Prep: Content review due [date - 7 days]

── KEY METRICS (from domain agents) ────────────────────────
  HR:           Ayesha onboarding — Day [N]; 30-day check-in [date]
  Finance:      Analytics budget — pending ROI brief (Omar, due Monday)
  Operations:   BSI ISO renewal — follow-up delegated; awaiting response
  Compliance:   No urgent items (Compliance Monitor: all CURRENT)

── OPEN ACTIONS (this week) ────────────────────────────────
  ☐ Nighthawk formal letter — Zia — Wed [date]
  ☐ Analytics ROI brief — Omar — Mon [date + 7]
  ☐ Chapter 28 filing — Zia — Thu [date]
  ☐ Workshop #7 content review — [Team] — [date - 7]

── OPEN DELEGATIONS ────────────────────────────────────────
  Omar: Analytics investor brief — due [date + 5] — ⏳ ROI brief confirmed
  Compliance: BSI ISO renewal — this week — ⏳ no update

── UPCOMING DECISIONS ──────────────────────────────────────
  [Next Monday]: Analytics budget — final sign-off after ROI brief
  [Post-Nighthawk]: Islamabad expansion — deferred; trigger: Nighthawk resolved
  [Q2 planning]: Resource allocation — next Compass review

── CALENDAR THIS WEEK ──────────────────────────────────────
  Mon: Executive Weekly ✅ DONE
  Wed: Chapter Review (bi-weekly)
  Thu: Chapter 28 deadline
  Fri: Workshop prep check
════════════════════════════════════════════════════════════
```

### Dashboard Customisation

The dashboard format is configured in `work.local.md`:

```yaml
dashboard:
  sections:
    - p1_projects
    - p2_projects
    - key_metrics
    - open_actions
    - delegations
    - upcoming_decisions
    - calendar
  metrics_sources:
    hr: "Onboarding status; open positions"
    finance: "Budget approvals pending; spend vs. plan"
    operations: "Compliance status; change pipeline"
    sales: "Pipeline; quota attainment"
  refresh: "Daily — assembled fresh each morning with digest"
  format: "Single page; RAG status; action-oriented"
```

---

## Part Six: Cross-Domain Integration — Wiring the Agentic Organisation

### The Integration Problem

The domain agents built in Chapters 17–27 operate in their own contexts. The finance agent knows about the analytics budget proposal. The HR agent knows that Ayesha is in her onboarding window. The operations agent knows the BSI ISO renewal is pending. The change tracker knows the ERP migration has a go-live risk.

None of these agents knows what the others know. They are isolated silos of intelligence. The Productivity Layer — `work.local.md` + the `/digest` + the `/dashboard` — is the integration layer that connects them.

### The Context Injection Pattern

The `/context` command loads specific context from one domain agent into a conversation in another:

```
/context type:"cross-domain"
> User: I'm about to have a conversation with the finance team about the
        analytics budget. Load all relevant context: the proposal, the
        approval status, Omar's communication style, and anything from
        operations or compliance that might affect the budget discussion.
```

**Output: cross-domain context brief**

```
CONTEXT BRIEF — Finance: Analytics Budget Discussion
════════════════════════════════════════════════════════════
THE PROPOSAL:
  Requestor: Omar Farooq, Head of Analytics
  Amount:    [£/PKR amount] for [tooling + Ayesha onboarding costs]
  Approved in principle: Executive Weekly [date]
  Pending:   ROI brief from Omar by Monday [date]

OMAR — COMMUNICATION CONTEXT:
  Style: Data-driven; does not like surprises; needs lead time
  Likely to: Present structured data; expect questions on methodology
  Watch for: He will push back if scope creep is implied in the questions

RELEVANT OPERATIONS CONTEXT:
  ERP migration: Change tracker flagged that finance system changes are
  in progress — confirm analytics tooling is compatible with post-migration
  data architecture before approving integration tools

RELEVANT HR CONTEXT:
  Ayesha Raza: Day [N] of onboarding; pipeline audit is one of her
  first projects — the analytics budget may affect her tooling access.
  Confirm system access in the approval to avoid a delay post-approval.

WHAT TO WATCH FOR IN THE DISCUSSION:
  Omar's ROI brief will likely focus on cost savings in reporting time.
  The stronger case for the CFO is: faster investor reporting = faster
  fundraising decisions. Frame the discussion toward revenue enablement,
  not cost reduction.
════════════════════════════════════════════════════════════
```

### The Search Layer

```
/search
> User: What do we know about the Islamabad expansion? Search everything.
```

The `/search` command scans across all memory layers — project memory, meeting notes, decision log, task history — and surfaces everything relevant:

```
SEARCH RESULTS: "Islamabad expansion"
════════════════════════════════════════════════════════════
Found in:

PROJECT MEMORY:
  BankersAI — Islamabad is a potential third workshop location (after Karachi
  and Faisalabad); no project record created; classified as under consideration

MEETING NOTES:
  Executive Weekly [date]: Islamabad expansion deferred pending Nighthawk
  resolution. Decision D-003. No timeline set.

DECISION LOG:
  D-003 [date]: DEFERRED — Islamabad workshop expansion
  Trigger for revisit: Project Nighthawk facility resolved

TASK HISTORY:
  No active tasks related to Islamabad expansion

ORG MEMORY:
  Faisalabad SIG: Zia chairs the AI Special Interest Group for business
  leaders in Faisalabad — a similar structure could be the model for
  an Islamabad SIG if expansion proceeds

RECOMMENDED NEXT STEP:
  Create a project stub for Islamabad if you want to track it formally.
  Currently it is a deferred decision — nothing will happen until
  Project Nighthawk is resolved.
════════════════════════════════════════════════════════════
```

---

## Part Seven: People and Terminology Memory — Learning Your Organisation

### Why Terminology Matters

Every organisation has its own language. This is not a quirk — it is a feature. Shared terminology reduces ambiguity, carries context efficiently, and signals membership. "Boulders" is faster than "quarterly strategic priorities." "Digital FTE" carries more meaning than "AI agent." "Project Nighthawk" is safer to say in a room where not everyone needs to know about the Karachi expansion.

When Claude knows this language, conversations are faster, outputs are more precise, and there is no time spent translating between the organisation's vocabulary and generic terms. When Claude does not know this language, every conversation requires explanation, and outputs require editing to align with how the organisation actually speaks.

### The `/memory` Workflow

**Adding new terminology:**

```
/memory type:"add-term"
> User: Add a new term: "The Factory" — this is what the team
        informally calls the AI Agent Factory book project.
        Different from "AgentFactory" which is the formal codename.
        Use when: team conversations; informal references.
        Do not use: external communications; formal documents.
```

**Adding a person:**

```
/memory type:"add-person"
> User: Add: Dr. Sana Mirza — she has joined as Head of Curriculum,
        reporting to me. Starts Monday. Background: education technology;
        PhD in learning sciences; previously at Aga Khan University.
        Communication: academic precision; prefers structured proposals;
        will ask for evidence base on pedagogical claims.
        Give her credit for the PHM framework design — she will take
        ownership of it formally.
        Key relationship to manage: Omar — different working styles;
        will need mediation on data questions for the curriculum.
```

**Surfacing what Claude knows:**

```
/memory type:"person-brief"
> User: Give me a brief on everyone I'll be speaking with today:
        Omar, Ayesha, and the new person Dr. Sana Mirza.
```

**Sample People Brief:**

```
PEOPLE BRIEF — [Date]
════════════════════════════════════════════════════════════
─── OMAR FAROOQ — Head of Analytics ───────────────────────
  Reports to:   You (CEO)
  Focus:        Q1 analytics refresh; data pipeline audit
  Current mood: [Check context] — analytics brief request was delegated
                yesterday; has not confirmed receipt — may be dealing with
                the pipeline audit
  How to approach: Give him the data request in writing; confirm he
                   has everything he needs; offer to reduce scope if needed
  Watch for:    He will flag scope creep explicitly — be specific
  Today's context: Still waiting for analytics brief confirmation; may need a nudge

─── AYESHA RAZA — Senior Data Analyst ─────────────────────
  Reports to:   Omar Farooq
  Joined:       [Date] — Day [N] of onboarding (still in 30-day window)
  Background:   Fintech → edtech; strong SQL/Python; new to this domain
  Current work: Q1 analytics refresh (first project); pipeline audit
  How to approach: She sent her first analysis this morning — review and
                   respond today; be specific and encouraging; she needs to
                   know her work is seen
  Note:         Timely feedback in the first month shapes confidence;
                a week's delay would be a missed opportunity
  Bridge:       She will use fintech mental models — help her translate
                to edtech where needed

─── DR. SANA MIRZA — Head of Curriculum (NEW) ─────────────
  Reports to:   You (CEO)
  Starts:       Monday [date]
  Background:   Education technology; PhD Learning Sciences; Aga Khan Uni
  Style:        Academic precision; evidence-based; structured proposals
  Strengths:    Will strengthen the pedagogical foundation of the curriculum
  To give her:  Formal ownership of the PHM framework — she will want to
                build on it, not just inherit it
  To manage:    Omar relationship — different working styles on data;
                may need mediation; introduce them carefully
  Do not:       Make informal decisions about curriculum design before
                she is settled in — she will want to own this properly
════════════════════════════════════════════════════════════
```

---

## Part Eight: The Four Productivity Agents

### Agent 1: The Digital Chief of Staff

**Purpose:** The orchestration agent. Synthesises intelligence from all other agents and from `work.local.md` to provide a coherent operational picture for a senior professional. Produces the daily digest, the executive dashboard, and the weekly status. Acts as the first point of call for any workplace intelligence question.

**Daily tasks:**
- 07:00: Assemble and deliver the Daily Digest (load `/digest`)
- Real-time: Respond to any question using full `work.local.md` context
- Any time: Flag any item in any domain that exceeds its configured threshold

**Weekly tasks:**
- Monday: Week-ahead brief (what matters this week; what decisions are pending)
- Friday: Week-close summary (what was done; what carries over; what at risk next week)

**MCP integrations:** Google Calendar, Gmail, Slack, Notion (or equivalent project management tool), all domain agents via shared memory

**Configuration in `work.local.md`:**
```yaml
chief_of_staff:
  digest_time: "07:00 PKT"
  weekly_brief: "Monday 06:45 PKT"
  weekly_close: "Friday 17:30 PKT"
  escalation_threshold_days: 7
  # After N days without update, any task/project is flagged CRITICAL
  dashboard_refresh: "With each digest"
```

---

### Agent 2: The Memory Keeper

**Purpose:** Maintain the `work.local.md` file. After every significant interaction — a meeting, a decision, a new person encountered, a new project initiated, a new term introduced — the Memory Keeper proposes updates to `work.local.md`. Ensures the workplace memory stays current rather than becoming outdated.

**Trigger-based tasks:**
- New person mentioned who is not in `work.local.md` → propose a person entry
- New project name or codename used → propose a project entry
- New terminology used → propose a term entry
- Meeting completed → update project status; add decisions to decision log; update action items
- Decision made → add to decision log with date and context
- Task completed → mark as done; update delegation log

**Weekly maintenance:**
- Review all project statuses: are they still accurate?
- Review all people entries: has anyone's role changed?
- Flag any terminology that has been used inconsistently
- Prompt user to confirm or update any entry >90 days old without an update

**Sample Memory Keeper update proposal:**

```
MEMORY UPDATE PROPOSAL — [Date]
════════════════════════════════════════════════════════════
Based on today's Executive Weekly, I propose these updates to work.local.md:

1. UPDATE: Project Nighthawk status
   Current: "Facility agreement negotiations stalled"
   Proposed: "Escalation in progress — formal letter by Zia by Wed [date]"

2. UPDATE: Decision log — add D-003
   "Islamabad expansion deferred; trigger: Nighthawk resolved; Date: [date]"

3. UPDATE: Delegation log
   "Omar Farooq — Analytics ROI brief — due Monday [date + 7]"

4. NEW: Action item
   "Nighthawk formal letter — Zia Khan — due Wed [date]"

Confirm to apply all? (Y/N) or specify which updates to apply.
════════════════════════════════════════════════════════════
```

---

### Agent 3: The Meeting Intelligence Agent

**Purpose:** Provide before/during/after meeting support for all significant meetings. Load context before the meeting from `work.local.md` and domain agents. Produce structured notes and action items after the meeting. Update `work.local.md` with any decisions or new information from the meeting.

**Before every meeting (scheduled in Google Calendar):**
- 30 minutes before: deliver meeting prep brief (context; agenda; stakeholder notes; decisions needed)
- Include: what was decided last time this group met; any open actions from prior meetings

**After every meeting:**
- Within 2 hours: deliver meeting synthesis (decisions; actions; deferred items)
- Update: project status in `work.local.md`; delegation log; decision log

**Weekly meeting audit:**
- How many meetings did you attend this week?
- What decisions were made?
- What open actions from prior weeks were closed?
- What recurring meetings could be reduced in frequency?

---

### Agent 4: The Work Tracker

**Purpose:** Own the task and delegation lifecycle. Ensure every delegated task has a clear owner, deadline, and follow-up. Surface what is overdue, at risk, or stalled. Produce a daily work snapshot that feeds into the Chief of Staff's daily digest.

**Daily tasks:**
- Morning: pull all open tasks from Notion/project management tool
- Sort by: overdue → due today → due this week → backlog
- Flag: any delegated task without a confirmed acknowledgement from the delegatee
- Flag: any task that has been in "in progress" for >7 days without an update

**Delegation tracking:**
- Every delegation records: task; delegated to; delegated by; due date; confirmation received?
- If no confirmation within 24 hours: automatic follow-up reminder
- If no update within 3 days: escalation flag in daily digest
- If overdue: immediate notification with escalation recommendation

**Weekly delegation audit:**
- How many tasks delegated this week?
- What is the completion rate?
- Which delegatees consistently confirm/deliver vs. which do not?
- Are there patterns (certain task types always late; certain people always reliable)?

---

## Exercises

Each exercise in this chapter is designed to be cumulative — each builds on the last. By Exercise 8 you will have a fully configured, integrated agentic workplace that connects all the domain agents from Part 3 into a coherent whole.

---

### Exercise 1: Build Your Workplace Memory Foundation

**Type:** Configuration — `work.local.md`
**Time:** 90 minutes
**Goal:** Build the four memory layers that power every subsequent exercise

This is the most important exercise in the chapter. Everything else depends on it.

**Step 1 — Personal memory (15 minutes).**

Write your personal memory layer. Be honest and specific:
- Your name, role, and current primary focus
- Your communication style (how do you prefer information presented?)
- Your decision-making style (what do you need before making a decision?)
- Your working hours and primary tools
- Your language preferences (technical vocabulary; formality level)

Do not write how you aspire to work. Write how you actually work.

**Step 2 — Team memory (30 minutes).**

For each of your top 5–8 key stakeholders (reports, peers, manager, key clients):
- Name, role, reporting relationship
- Communication style (what do they need to engage well? what annoys them?)
- Current priorities (what are they working on right now?)
- How to get the best from them (one or two specific tips)
- Any sensitivities (anything that should be flagged "handle with care")

**Step 3 — Project memory (20 minutes).**

For each of your active projects (5–10 maximum):
- Name and internal codename (if different)
- Status (on track / at risk / blocked / complete)
- Priority (P1 / P2 / P3)
- Owner
- Current milestone and next milestone
- What is at risk (be honest)
- Key decisions already made

**Step 4 — Organisational memory (25 minutes).**

This is the hardest section because it requires making the implicit explicit:
- Terminology (what does your organisation call things — including the unofficial vocabulary?)
- Meeting rhythm (recurring meetings: name, frequency, attendees, purpose)
- Culture (how decisions are made; how disagreements are handled; unwritten rules)
- Organisational structure (who reports to whom; who has informal influence)

**Test:**

```
/context
> User: I'm about to brief a new team member on our organisation.
        Describe our organisation, our key projects, and our working culture
        using only what you know from work.local.md.
```

Is the output accurate? What is missing? What needs correcting?

**Deliverable:** A complete `work.local.md` with all four memory layers, validated by the context test.

---

### Exercise 2: Your First Daily Digest

**Type:** Workflow Design
**Time:** 45 minutes
**Goal:** Design and configure your personal Daily Digest

**Step 1 — Define what you need to know every morning.**

Answer these questions:
- What is the single most important thing I need to know each morning?
- What recurring items cause me the most stress when I forget them?
- What open delegations do I currently track manually that I should not have to?
- What does my manager / board / clients expect from me this week?

**Step 2 — Design your digest format.**

Using the sample Daily Digest from Part Three as a template, design your own:
- What sections do you want? (Not all sections suit all roles)
- How long should it take to read? (Target: 5 minutes)
- What should trigger a 🔴 flag in your digest? (Be specific — "anything blocked for >7 days" is better than "anything urgent")
- What should NOT be in the digest? (Avoid: too many items; items that do not require action)

**Step 3 — Configure the digest in `work.local.md`.**

```yaml
digest:
  schedule: "[Your time] [Your timezone]"
  sections: [Your chosen sections]
  critical_flag_threshold: [Your threshold — e.g. "blocked >7 days"]
  max_items_per_section: [Your limit — e.g. 3]
  format: [Your format — e.g. "bullet points; action-first; no narrative"]
```

**Step 4 — Generate your first digest.**

```
/digest
> [Let the agent assemble from work.local.md]
```

Review:
- Is anything missing that you expected?
- Is anything present that is not useful?
- Is the length right? (Too long = won't be read; too short = misses things)
- Are the priorities correct?

**Step 5 — Set the habit.**

The digest is only valuable if it is read every morning. Define:
- What time will you run the digest? (Same time every day)
- Where will you read it? (Same device / app)
- How will you act on it? (First 15 minutes of the day: read, confirm priorities, do nothing else)

**Deliverable:** Configured digest in `work.local.md`, first digest generated and reviewed, daily habit defined.

---

### Exercise 3: Task Capture and Prioritisation Sprint

**Type:** Task Management
**Time:** 60 minutes
**Goal:** Clear your current task backlog using the `/task` and `/delegate` commands

**Step 1 — The brain dump (10 minutes).**

Without filtering or organising, write down everything on your mind: every task, every commitment, every thing you said you would do, every thing you are worried about forgetting. Do not organise. Just capture.

Most people have 30–60 items. Do not stop until you have captured everything.

**Step 2 — Capture and prioritise.**

```
/task type:"capture"
> User: [Paste your entire brain dump — messy is fine]
```

Review the prioritised output:
- Does the P1 list reflect your actual priorities?
- Are there items prioritised too high? (Daily urgency is not the same as strategic importance)
- Are there items prioritised too low? (Some things feel small but have large consequences if missed)
- Are there items that should not be on your list at all? (Scope creep; someone else's responsibility)

**Step 3 — Delegation analysis.**

For every item on your task list:
- Should this be done by me, or should it be delegated?
- If delegated: to whom? With what brief?
- If not delegated: why not? (Complexity? Confidentiality? Capability gap?)

Apply the rule: if someone else can do this task at 80% of your quality, delegate it.

**Step 4 — Generate delegation records.**

For each item to be delegated:

```
/delegate
> User: Delegate [task] to [person].
        What they need to produce: [specific]
        Deadline: [specific date]
        Context they need: [any background]
        Format required: [specific]
```

Review: is the delegation brief specific enough for the delegatee to succeed without coming back to you? A bad delegation brief generates more work than doing the task yourself.

**Step 5 — Critical path identification.**

From your remaining (non-delegated) task list:
- What must be done today to keep the week on track?
- What must be done this week to keep the month on track?
- What is the single item that, if it slips, causes the most downstream damage?

This is your critical path. It should have 3–5 items maximum. More than 5 and you have too many P1s, which means you have no P1s.

**Deliverable:** Cleared and prioritised task list, delegation records for all delegatable items, critical path for the week.

---

### Exercise 4: Meeting Intelligence Sprint

**Type:** Meeting Management
**Time:** 75 minutes (across two meetings — one prep, one synthesis)
**Goal:** Apply before/during/after meeting intelligence to a real meeting

**Step 1 — Choose your meeting.**

Select a meeting you have this week that matters: a team review, a client meeting, a board update, a stakeholder briefing. It should be a meeting where going in well-prepared would make a meaningful difference.

**Step 2 — Generate the meeting prep brief.**

```
/meeting type:"prep"
> User: Meeting: [Name]
        Date/time: [Date and time]
        Attendees: [List — can reference work.local.md entries]
        Agenda: [Your agenda items]
        What you need from this meeting: [Decision? Update? Alignment?]
        Context: [Anything specific that is live right now that affects this meeting]
```

Review the prep brief:
- Is there context you had that the brief did not include? (Add it to `work.local.md`)
- Is there context in the brief you had forgotten? (The brief is working)
- Are the stakeholder notes accurate?
- Is the decision framing right?

**Step 3 — Pre-meeting questions preparation.**

From the prep brief, generate a set of questions you should ask in the meeting:

```
/meeting type:"question-prep"
> User: Based on the meeting brief: what are the 3–5 most important
        questions I should ask in this meeting?
        My goal: [What outcome I want from this meeting]
```

**Step 4 — During the meeting (take structured notes).**

During the meeting, keep notes with this structure:
- D: [Decision made]
- A: [Action agreed — who, what, by when]
- F: [Fact/context that should be remembered]
- Q: [Question raised but not resolved — needs follow-up]
- R: [Risk or concern raised]

**Step 5 — Generate meeting synthesis.**

```
/meeting type:"synthesis"
> User: [Paste your structured notes]
        Meeting: [Name] | Date: [Date] | Attendees: [List]
```

Review:
- Are the decisions captured accurately?
- Are the action items specific (owner + deadline)?
- Is there anything in your notes that did not make it into the synthesis?

**Step 6 — Update `work.local.md`.**

After the meeting:

```
/memory type:"post-meeting-update"
> User: Update work.local.md with:
        Decisions from [meeting name] on [date]: [List]
        New actions: [List with owners and deadlines]
        Status changes: [Any project status changes from the meeting]
        New information about people: [Anything learned about attendees]
```

**Deliverable:** Meeting prep brief, question set, meeting notes (structured), synthesis document, `work.local.md` update.

---

### Exercise 5: The Weekly Dashboard Build

**Type:** Dashboard Design
**Time:** 60 minutes
**Goal:** Build a personal executive dashboard that gives you the weekly picture in 5 minutes

**Step 1 — Define your dashboard sections.**

What does your weekly picture need to contain? For most senior professionals:
- P1 projects (status + critical action this week)
- P2 projects (status)
- Open delegations (what is outstanding; what is overdue)
- Key decisions pending (what needs a decision from you)
- Key metrics (1–3 numbers that tell you if the week is going well)
- Calendar (the 3–5 most important events this week)

What would you NOT put on your dashboard? (Avoid: too much detail; items that do not require your attention; metrics that are stable and not in your control)

**Step 2 — Define your dashboard metrics.**

Choose 1–3 metrics that tell you if your week is on track. These should be:
- Simple (not requiring complex calculation to interpret)
- Actionable (if the metric is red, you know what to do)
- Current (data is available weekly, not monthly)

Examples for different roles:
- CEO: Pipeline health; headcount open roles; top project RAG status
- COO: Operations compliance %; vendor SLA hit rate; change pipeline
- Product Manager: Sprint completion rate; NPS trend; backlog size
- HR Leader: Time-to-hire; onboarding NPS; open roles vs. headcount plan

**Step 3 — Configure the dashboard.**

```yaml
# In work.local.md:
dashboard:
  sections:
    - p1_projects
    - open_delegations
    - key_decisions
    - metrics:
        - name: "[Metric 1]"
          source: "[Where data comes from]"
          target: "[Green threshold]"
          alert: "[Red threshold]"
    - calendar_highlights
  format: "One page; RAG status; action items explicit"
  refresh: "Monday morning with digest"
```

**Step 4 — Generate your first dashboard.**

```
/dashboard
> [Let the agent assemble from work.local.md and all connected sources]
```

**Step 5 — The 5-minute test.**

Show your dashboard to a colleague who knows your work. Ask:
- "Could you tell, from this dashboard alone, what my week looks like?"
- "Is there anything important missing?"
- "Is there anything that is taking up space but is not important?"

Revise based on feedback.

**Step 6 — Set the weekly rhythm.**

The dashboard is only useful if it is used consistently:
- When will you review the dashboard? (Monday morning with the digest)
- Who else will see it? (Manager? Team leads?)
- How will you act on it? (Weekly priorities review; delegation confirmation)

**Deliverable:** Configured dashboard in `work.local.md`, first dashboard generated, 5-minute test completed with revisions.

---

### Exercise 6: Build Your Organisation's Terminology Dictionary

**Type:** Memory Architecture
**Time:** 60 minutes
**Goal:** Encode your organisation's unique vocabulary into `work.local.md` so Claude speaks your language

**Step 1 — Terminology audit.**

List every term, codename, acronym, or phrase that is specific to your organisation. Be systematic:
- Project codenames (what do you call things internally?)
- Function-specific terminology (what does each team call their key concepts?)
- Cultural terminology (what phrases carry specific meaning in your organisation?)
- Unofficial vocabulary (what do people actually call things vs. what the documentation says?)
- Acronyms (what abbreviations are used, and what do they mean in your context?)
- Things you should NOT say externally (sensitivities; codenames; pre-announcement terms)

Target: 20–50 terms. Fewer and you have not looked hard enough. More and you are probably including generic industry terms.

**Step 2 — For each term, write a definition.**

A useful terminology entry has:
- The term
- What it means (in plain language)
- When to use it (in what context is this term appropriate?)
- When NOT to use it (external communications? formal documents?)
- Related terms (if it has synonyms or near-synonyms)

**Step 3 — Add to `work.local.md`.**

```
/memory type:"add-terminology-batch"
> User: [Paste your terminology list with definitions]
```

**Step 4 — Test terminology application.**

```
/context type:"terminology-test"
> User: Write a brief update on Project [your codename] for the
        Executive Weekly, using our internal terminology throughout.
        The update should describe [situation from your projects].
```

Does the output use your terminology correctly? Does it use generic terms that should have been replaced? Are there terms that were used incorrectly?

**Step 5 — The outsider test.**

Show the draft output to someone who does not work in your organisation. Ask:
- What terms would they not understand?

These are your most valuable terminology entries — the ones where the gap between internal and external language is largest.

**Step 6 — Maintenance protocol.**

Terminology changes. New projects get codenames. Old terms become obsolete. Establish a maintenance protocol:
- Who is responsible for updating the terminology dictionary? (You? A nominated person?)
- When is it reviewed? (After each major project; quarterly at minimum)
- How are new terms added? (Anyone can propose; owner approves)

**Deliverable:** Terminology dictionary with 20+ entries in `work.local.md`, terminology test output showing correct application, maintenance protocol defined.

---

### Exercise 7: Cross-Domain Integration Test

**Type:** Integration
**Time:** 75 minutes
**Goal:** Test the integration between domain agents and the productivity layer with a realistic cross-domain scenario

This exercise uses the domain knowledge from Chapters 17–27 and the productivity architecture from this chapter together.

**Step 1 — Choose a cross-domain scenario.**

Select a scenario that touches multiple domains. Examples:
- A new hire (HR) needs budget approval (Finance) and system access (IT/Ops)
- A major vendor renewal (Ops) requires both procurement approval (Finance) and compliance sign-off (Compliance)
- A product launch (Product) requires go-to-market planning (Sales) and a process change (Ops/Change)

If none of these match your context: use "Onboarding Dr. Sana Mirza as Head of Curriculum" — this touches HR (onboarding), Finance (budget/headcount), and Operations (system access, process documentation).

**Step 2 — Load cross-domain context.**

```
/context type:"cross-domain"
> User: Scenario: [Your scenario]
        Load all relevant context from:
        - HR perspective: [What HR needs to know/do]
        - Finance perspective: [What Finance needs to know/do]
        - Operations perspective: [What Ops needs to know/do]
        - My role in coordinating this: [What I need to do]
```

**Step 3 — Generate the integrated action plan.**

```
/task type:"cross-domain-plan"
> User: Based on the cross-domain context: what is the complete action
        plan for [scenario]? Include:
        - Tasks for each function (HR, Finance, Ops, etc.)
        - Dependencies (what must happen before what)
        - Delegations (who owns what)
        - Timeline (what needs to happen this week, this month)
        - What I personally need to track vs. what I can delegate entirely
```

**Step 4 — Test information flow.**

```
/search
> User: What does [one domain agent] know about [scenario] that would be
        relevant to [another domain agent]?
```

Example: "What does the HR agent know about Sana Mirza's onboarding that would be relevant to the IT/Ops agent managing her system access?"

**Step 5 — Identify integration gaps.**

From your test:
- What information had to be manually bridged between domains?
- What context was missing from `work.local.md` that would have made the integration seamless?
- What would need to change in `work.local.md` to automate this coordination?

**Step 6 — Update `work.local.md` with integration protocols.**

```yaml
# In work.local.md:
integration_protocols:
  new_hire:
    triggers: ["New HRIS record created"]
    actions:
      - hr: "Generate onboarding plan (load onboard.md from HR skills)"
      - it: "Provision system access (role-specific profile)"
      - finance: "Confirm headcount approved; set up cost centre"
      - manager: "Day 1 schedule; buddy assigned"
    coordinator: "HR Business Partner"

  vendor_renewal:
    triggers: ["Contract renewal <90 days"]
    actions:
      - ops: "Generate scorecard and renewal strategy"
      - finance: "Confirm budget for renewal"
      - compliance: "Confirm no obligations affected by vendor change"
    coordinator: "Operations Manager"
```

**Deliverable:** Cross-domain action plan for your chosen scenario, integration gap analysis, integration protocol definitions in `work.local.md`.

---

### Exercise 8: The Complete Agentic Office Configuration

**Type:** Integration — Master Configuration
**Time:** 90 minutes
**Goal:** Complete the full `work.local.md` configuration that connects all domain agents and the four productivity agents into a coherent agentic office

This is the final exercise of Part 3 — the exercise that wires everything together.

**Step 1 — Review your `work.local.md` from Exercises 1–7.**

What is complete? What is missing? What needs updating since you started?

**Step 2 — Add the agent integration configuration.**

Configure how the four productivity agents interact with the domain agents:

```yaml
agent_integrations:
  chief_of_staff:
    feeds_from:
      - hr_agent: "Onboarding status; open positions; compliance training"
      - finance_agent: "Budget approvals pending; month-end status"
      - ops_agent: "Compliance dashboard; vendor renewals; change pipeline"
      - sales_agent: "Pipeline; quota; key deal status"
      - pm_agent: "Sprint status; blockers; roadmap changes"
    delivers_to: "Daily digest; executive dashboard"

  memory_keeper:
    triggers:
      - "New person mentioned in conversation"
      - "New project name used"
      - "Meeting completed"
      - "Decision made"
      - "Term used that is not in terminology dictionary"
    updates: "work.local.md — specific section per trigger type"

  meeting_intelligence:
    calendar_integration: "Google Calendar via MCP"
    prep_lead_time: "30 minutes before meeting"
    synthesis_deadline: "2 hours after meeting"
    always_update: ["project status", "decision log", "delegation log"]

  work_tracker:
    overdue_threshold: 7  # days
    delegation_confirmation_window: 24  # hours
    escalation_path: "Flag in digest → explicit message → COO-level if 14 days"
    weekly_delegation_audit: "Friday 16:00"
```

**Step 3 — Define your trigger events.**

What events in your work world should automatically trigger agent actions?

```yaml
triggers:
  - event: "Meeting ends"
    action: "Meeting Intelligence Agent produces synthesis within 2 hours"
  - event: "New project starts"
    action: "Memory Keeper creates project entry; Work Tracker sets up tracking"
  - event: "Delegation made"
    action: "Work Tracker logs; sets confirmation window; schedules follow-up"
  - event: "Regulatory change detected" 
    action: "Compliance Monitor alerts; Ops agent updates obligation map"
  - event: "Vendor renewal <90 days"
    action: "Vendor Watchdog alerts; Chief of Staff adds to dashboard"
  - event: "New employee starts"
    action: "HR Onboarding Orchestrator activates; Memory Keeper adds person entry"
```

**Step 4 — Set your escalation thresholds.**

For every type of item that can go stale:
- Delegated task without confirmation → flag after [N] hours
- Project without status update → flag after [N] days
- Compliance obligation overdue for review → flag after [N] days
- Vendor renewal approaching → flag at [N] days before renewal

**Step 5 — The integration smoke test.**

Run the full integration:

```
/dashboard
> [Full dashboard — all domains — assembled from complete work.local.md]
```

Then:

```
/digest
> [Full digest — assembled from all connected sources]
```

Then:

```
/search
> User: What is at risk across all my projects and domains right now?
```

Are the outputs accurate? Are they pulling from all the right sources? Is anything missing?

**Step 6 — Define the maintenance cadence.**

The agentic office is only valuable if it stays current. Define:
- Daily: what gets updated automatically (task status; delegation log)
- Weekly: what gets reviewed manually (`work.local.md` project statuses)
- Monthly: what gets audited (terminology dictionary; people entries)
- Quarterly: what gets restructured (project priorities; organisational structure)

**Deliverable:** Complete `work.local.md` with all seven sections (personal, team, projects, org, digest config, dashboard config, agent integrations + triggers), integration smoke test results, maintenance cadence defined.

---

## Chapter Summary: From Tools to Colleague

**The Central Insight**

Every domain chapter in Part 3 gave you a capable domain agent. Chapter 17 gives you a financial analyst. Chapter 23 gives you a revenue operations manager. Chapter 26 gives you an HR business partner. Chapter 27 gives you an operations intelligence layer.

But a team of capable specialists who do not share context, do not coordinate, and start every conversation from zero is not an organisation. It is a collection of individual contributors.

Chapter 28 is the integration layer that turns a collection of domain agents into something that behaves like an organisation — one where:
- Everyone (human and AI) knows what is in flight
- Decisions made in one function are known to every other function
- New people, projects, and terminology are captured and remembered
- The most important priorities are visible every morning
- Actions are tracked, delegations are followed up, and nothing falls through the cracks

The Digital Chief of Staff is not a single agent. It is the emergent result of four agents (Chief of Staff, Memory Keeper, Meeting Intelligence, Work Tracker) working together with a comprehensive `work.local.md` and all the domain agents from Part 3. When it works, Claude stops being a chatbot you brief every session and starts behaving like a knowledgeable colleague — one who knows your organisation, your people, your projects, and your priorities, and can act on that knowledge to make your work faster, clearer, and less likely to fall through the cracks.

**What this chapter built:**

1. The Workplace Memory Architecture — four layers (personal, team, project, org)
2. `work.local.md` — the central configuration file that encodes organisational context
3. Task capture and prioritisation — with context-aware priority sorting
4. Delegation records — specific, owned, tracked, followed up
5. Daily Digest — the agentic morning briefing
6. Meeting Intelligence — before/during/after meeting support
7. Visual Dashboard — cross-domain executive view
8. Cross-domain context injection — `/context` and `/search`
9. People and terminology memory — organisational language and relationships
10. Four persistent agents — Chief of Staff, Memory Keeper, Meeting Intelligence, Work Tracker
11. Eight exercises building the complete agentic office from scratch

**What comes next:**

Chapter 29 — The Complete AI-Native Organisation — synthesises every chapter in the book. It shows what an organisation looks like when every domain agent is deployed, every domain skill library is configured, and the productivity layer connects them all. It is the capstone: the answer to the question this book has been building toward since Chapter 1.

> *The goal was never to replace the people in your organisation. It was to give the people in your organisation an AI that actually knows where they work.*

---

> *Part 3 concludes with Chapter 29: The Complete AI-Native Organisation →*

---

## Quick Reference

### Plugin Commands

| Command | Function |
|---|---|
| `/task` | Task capture, prioritisation, management |
| `/memory` | Workplace memory — add/update/query people, projects, terminology |
| `/dashboard` | Visual cross-domain executive dashboard |
| `/brief` | Situation brief — context before a meeting or decision |
| `/digest` | Daily digest — morning briefing from all sources |
| `/meeting` | Meeting intelligence — prep, synthesis, notes |
| `/search` | Cross-context search across all workplace memory |
| `/context` | Context injection — load domain context for a task |
| `/delegate` | Delegation record — task, owner, deadline, brief |
| `/track` | Progress tracking — milestones, blockers, status |

### Key Resources

| Resource | URL |
|---|---|
| Productivity Plugin (GitHub) | github.com/anthropics/knowledge-work-plugins/tree/main/productivity |
