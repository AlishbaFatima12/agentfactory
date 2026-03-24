---
slug: /Business-Domain-Agent-Workflows/productivity-agentic-office/the-daily-digest
sidebar_position: 8
title: "The Daily Digest"
description: "Design and configure your agentic morning briefing: learn digest assembly, section design, Monday/Friday variants, and how to compress 30-60 minutes of morning information gathering into a 5-minute daily brief using /agentic-office:digest"
keywords:
  [
    "daily digest",
    "morning briefing",
    "agentic office",
    "digest configuration",
    "morning brief",
    "critical path",
    "start of day",
    "weekly priorities",
    "productivity plugin",
    "digest variants",
    "Monday brief",
    "Friday close",
  ]
chapter: 39
lesson: 8
duration_minutes: 38

# HIDDEN SKILLS METADATA
skills:
  - name: "Design and Configure a Personalised Daily Digest in work.local.md"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can fill in the digest configuration section of work.local.md with schedule, sections, thresholds, and format preferences, then generate a first digest using /agentic-office:digest and evaluate it against the one-page quality standard"

  - name: "Distinguish Between Digest Tone (Briefing) and Status Report (Comprehensive)"
    proficiency_level: "B2"
    category: "Conceptual"
    bloom_level: "Evaluate"
    digcomp_area: "Information-Literacy"
    measurable_at_this_level: "Student can identify when a digest has slipped into status-report mode and revise the output to use briefing tone, specific, action-oriented, colleague-voice, rather than system-generated catalogue language"

  - name: "Generate and Interpret Monday and Friday Digest Variants"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can generate both the Monday week-ahead brief (adding critical path and open-from-last-week sections) and the Friday week-close variant (replacing week-at-a-glance with completed/carries-forward/set-up-for-Monday), and explain why each variant serves a different cognitive need"

learning_objectives:
  - objective: "Explain why the daily digest is the single highest-leverage productivity habit for a senior professional, articulating the cost of manual morning information gathering and what the digest replaces"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student can quantify the problem (30-60 minutes of pre-work overhead) and explain how the digest compresses this to a 5-minute read by pulling from calendar, task list, delegation log, project memory, and external sources"

  - objective: "Configure a digest in work.local.md and generate a first daily digest using /agentic-office:digest"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces a configured work.local.md digest section with schedule, sections, critical_path_items, and escalation_threshold fields populated, then generates a digest that passes the one-page quality check"

  - objective: "Evaluate a generated digest against the length, tone, and content quality criteria and identify what to remove or reframe"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Student reviews a sample digest, flags items that exceed the one-page limit or use system tone rather than briefing tone, and explains which items should be removed or moved to the dashboard rather than included in the daily brief"

cognitive_load:
  new_concepts: 4
  concepts_list:
    - "Digest assembly sources: the priority-ordered stack from work.local.md through to MCP-connected tools"
    - "Digest output structure, eight sections from headline status through weekly priorities"
    - "Digest length and tone rules: one page maximum; briefing voice not status voice"
    - "Monday and Friday variants, start-of-week and end-of-week structural differences"
  assessment: "4 concepts at B1-B2. The digest assembly and structure concepts are reinforced by the worked example, which shows exactly how each section maps to an input source. The length and tone rules address the most common failure mode (a digest that becomes a wall of text no one reads). The variants extend the core pattern without introducing new complexity: the same skill, different sections depending on the day."

differentiation:
  extension_for_advanced: "Add a domain agent metrics row to the digest by configuring agent_integrations in work.local.md. Pull one metric from the finance agent (Chapter 28), one from HR (Chapter 37), and one from Operations (Chapter 38). Generate the digest and evaluate whether the additional domain context adds signal or noise. At what point does domain agent integration start making the digest too long? What is the right threshold?"
  remedial_for_struggling: "Start with just two sections: Today's Critical Path and Open Delegations. Generate a digest using only those two sections and your current work.local.md. Once you are satisfied with those sections, add one more at a time, Calendar, then Upcoming Deadlines. Build toward the full digest gradually rather than trying to configure all eight sections at once."

teaching_guide:
  key_points:
    - "The digest is not a summary of everything; it is a selection of what matters today. A digest that tries to cover everything becomes unreadable and will be skipped after the first week. The discipline is omission, not inclusion."
    - "The tone contrast is the lesson's most important teaching point. System language ('Status: no update. Action: escalate.') tells you what the system knows. Briefing language ('Nighthawk has been quiet for 10 days, escalation today, not tomorrow.') tells you what to do about it. The difference in cognitive load on the reader is substantial."
    - "MCP sources (Google Calendar, Gmail, Slack) are optional: the digest works with work.local.md alone. Readers without MCP connections should not feel they cannot use the digest. The fallback is a lighter digest that still covers projects, priorities, and delegations."
    - "Monday and Friday variants serve different cognitive needs. Monday is planning-mode: what does the week look like? Friday is closing-mode: what did we accomplish and what needs to be set up? These are different mental states: the digest structure should match."
  misconceptions:
    - "The digest replaces my task list. Correction: the digest references the task list but does not replace it. The task list (TASKS.md via the official productivity plugin) is the storage layer. The digest is a daily selection of what to pay attention to from that storage layer. You need both."
    - "A longer digest means more information, which is better. Correction: a digest longer than one page will not be read consistently. Length is a failure mode, not a feature. If the digest is too long, items are being included that belong in the dashboard (weekly review) or the task list (full inventory), not the morning briefing."
    - "The digest should include everything that is due this week. Correction: the digest should include only what requires your attention today or tomorrow. Items due later in the week belong in the 'This Week at a Glance' section, not the critical path. Putting everything in the critical path means nothing is critical."
  discussion_prompts:
    - "Compare the digest to an email inbox. Both contain information. What is the difference in cognitive load? Why does a well-designed digest take 5 minutes to act on while an inbox can take an hour?"
    - "The digest rule says maximum 5 items in the critical path. Zia's digest has 4 items. If a fifth item arrives (an urgent request from a board member), what happens to the existing 4? Does the new item automatically become P1, or does something have to move down?"
  teaching_tips:
    - "Walk students through the sample digest section by section, mapping each output section to the assembly source that produced it. The calendar section came from Google Calendar (MCP). The open delegations came from the delegation log in work.local.md. The critical path came from the task intelligence output. Making the plumbing visible builds confidence that the digest is not magic; it is structured assembly."
    - "The tone contrast exercise is high-yield: take one item from the sample digest written in briefing voice and ask students to rewrite it in system voice, then back again. The difference becomes viscerally clear."
---

# The Daily Digest

There is a version of Monday morning that most senior professionals know too well: arriving at the desk and spending the first 45 minutes scanning emails, checking which delegations have received responses, pulling up the project tracker to see what changed over the weekend, reviewing the calendar to see who needs prep, and then, finally, starting actual work.

The single highest-leverage productivity habit for any senior professional is replacing that 45 minutes with a 5-minute read. The Daily Digest is the agentic morning briefing: assembled automatically from your calendar, project memory, delegation log, task list, and; if configured, email and Slack, then presented as a structured brief you can review before your first coffee is finished.

This lesson walks through how the digest is assembled, what each section contains, why the tone matters as much as the content, and how to configure your own digest in `work.local.md`. The Monday and Friday variants round out the lesson, because start-of-week and end-of-week serve genuinely different cognitive needs.

## What the Digest Replaces

Before configuring anything, it helps to name precisely what the digest eliminates. A typical morning information-gathering routine for a senior professional in a multi-project role involves:

| Manual Step                        | Approximate Time | Replaced By                        |
| ---------------------------------- | ---------------- | ---------------------------------- |
| Scanning flagged emails            | 10-15 minutes    | Digest: Flagged from Yesterday     |
| Checking calendar for meeting prep | 5-10 minutes     | Digest: Today's Calendar           |
| Reviewing project statuses         | 10-15 minutes    | Digest: This Week at a Glance      |
| Checking delegation follow-ups     | 5-10 minutes     | Digest: Open Delegations Status    |
| Recalling weekly priorities        | 5 minutes        | Digest: Weekly Priorities Reminder |

Industry surveys suggest that knowledge workers spend 30-60 minutes each morning in this gathering mode before productive work begins. The digest compresses this to the time it takes to read one page.

## Digest Assembly Sources

The digest pulls from a priority-ordered stack of sources. Sources higher in the stack are always included; sources lower in the stack require MCP configuration and are optional.

| Priority | Source                | What It Provides                                          | Requires           |
| -------- | --------------------- | --------------------------------------------------------- | ------------------ |
| 1        | `work.local.md`       | Projects, priorities, open delegations, people context    | Always available   |
| 2        | Google Calendar (MCP) | Today's meetings; upcoming deadlines from calendar events | Calendar MCP       |
| 3        | Task management (MCP) | Open tasks; overdue items from Notion, Linear, or similar | Task tool MCP      |
| 4        | Gmail (MCP)           | Flagged and unread items requiring response               | Gmail MCP          |
| 5        | Slack (MCP)           | @mentions; flagged messages; urgent direct messages       | Slack MCP          |
| 6        | Domain agent feeds    | Key metrics from finance, HR, operations agents           | Agent integrations |

The digest works with `work.local.md` alone ; it simply produces a lighter brief focused on projects, priorities, and delegations, without the calendar and communication layers. Readers without MCP connections should configure the digest and generate it from `work.local.md` first; MCP sources can be added later.

## Digest Output Structure

A well-designed digest has eight sections, each with a specific purpose and a specific length constraint.

**Headline Status:** the first line. One of three states: CLEAR RUNWAY (all on track), WATCH ITEMS (something needs attention), or CRITICAL ITEM(S) (immediate action required). A busy executive scans this first and decides how to approach the rest of the brief.

**Today's Critical Path:** maximum 5 items, ordered by importance rather than urgency. These are the items where a slip today has downstream consequences. Not everything due this week, only what must happen today.

**Today's Calendar:** only meetings that require preparation or attention. A 30-minute standing meeting with a known agenda does not need an entry. A meeting where you are presenting a recommendation does.

**Open Delegations Status:** what you are waiting for. This is the most commonly forgotten category in manual task management. The digest surfaces it every morning so nothing silently falls through.

**Flagged from Yesterday:** items from yesterday that remain live or need action today. The link between days.

**This Week at a Glance:** the shape of the week in 5-6 lines. Not every item, just the anchors. What does Tuesday look like compared to Thursday?

**Upcoming Deadlines:** the next 7-14 days only. Not the full calendar horizon. This keeps the section scannable and prevents the digest from becoming a planning document.

**Weekly Priorities Reminder:** your Boulders or equivalent for the week. Daily urgency reliably hijacks weekly importance. This section anchors every morning's brief to what actually matters at the weekly level.

## The Sample Daily Digest: Zia's Wednesday Brief

Here is a full digest for a Wednesday in March 2026, assembled from the Panaversity `work.local.md` and the configured MCP sources.

```
DAILY DIGEST, Wednesday, 19 March 2026, Zia Khan
Prepared: 07:00 PKT
════════════════════════════════════════════════════════════
GOOD MORNING. Here is today's brief.

── TODAY'S CRITICAL PATH ───────────────────────────────────
  1. 🔴 Project Nighthawk: escalation, facility status overdue (10 days)
     Action: Contact liaison by 09:00; if no response, escalate to COO
  2. Chapter 39 draft, due Thursday (tomorrow)
     Status: In progress, final section outstanding
  3. Review Ayesha's first analysis, do this today; she is in her onboarding window
  4. Confirm Omar received delegation for analytics brief

── TODAY'S CALENDAR ────────────────────────────────────────
  09:00, Executive Weekly (30 min standing; 3 agenda items to confirm before)
  11:00, Chapter Review call (bi-weekly; Chapter 27 close-out)
  15:00. No meetings; deep work block (Chapter 39 completion)

── OPEN DELEGATIONS STATUS ─────────────────────────────────
  ⏳ Omar Farooq, Analytics investor brief, due 24 March
     Status: Delegated yesterday; no confirmation received
     Action: Chase confirmation if not received by 10:00 today

  ⏳ Compliance, BSI ISO 27001 renewal, due this week
     Status: Delegated; no update received

── FLAGGED FROM YESTERDAY ──────────────────────────────────
  • Ayesha's analysis sent Monday, review before her confidence fades
  • Project Nighthawk: 10 days without facility update, escalation today, not tomorrow

── THIS WEEK AT A GLANCE ───────────────────────────────────
  Today (Wed):  Nighthawk escalation; Omar confirmation; Ayesha review
  Thu:          Chapter 39 filed; Chapter 39 skills library
  Fri:          Executive Weekly prep sent; week close
  Mon:          Executive Weekly 09:00; Dr. Sana Mirza joining

── UPCOMING DEADLINES ──────────────────────────────────────
  Thu 20 Mar:   Chapter 39 narrative draft
  Mon 24 Mar:   Omar's analytics brief (investor deck)
  Sat 29 Mar:   Workshop #7 content review (7-day window opens)
  31 Mar:       Project Nighthawk, latest date for facility agreement
                to keep Q3 launch viable

── WEEKLY PRIORITIES REMINDER ──────────────────────────────
  This week's Boulders:
  1. Complete Chapter 39 (AgentFactory, P1)
  2. Resolve Project Nighthawk facility blocker (P2)
  3. Investor analytics brief delivered via Omar (P2)
════════════════════════════════════════════════════════════
```

### Reading the Digest Well

Three things to notice in this output:

**The critical path is a decision, not a list.** Four items, not everything due this week. Chapter 29 planning is not there. Workshop #7 content is not there. They are in the upcoming deadlines section, where they belong.

**The flagged items have voice.** "Ayesha's analysis sent Monday, review before her confidence fades." This is not system language. It is briefing language: the output of someone who understands context, not just data. "Project Nighthawk: 10 days without facility update, escalation today, not tomorrow" carries urgency without listing a status code.

**The delegation section is the safety net.** Two items are tracked here. If Omar had confirmed receipt, the first entry would show "Confirmed, in progress." The absence of confirmation is the signal. Missing this for two mornings in a row is what causes delegations to fail silently.

## Digest Length and Tone Rules

The digest has one non-negotiable constraint: **it must fit on one page.** Not "aim for one page": one page. If it exceeds this, items are being included that do not belong in the morning brief. They belong in the dashboard (for weekly review) or the task list (for full inventory).

Specific limits per section:

| Section                | Maximum                                               |
| ---------------------- | ----------------------------------------------------- |
| Critical path          | 5 items                                               |
| Calendar               | 4 entries (only meetings needing prep)                |
| Open delegations       | All overdue or unconfirmed (no limit, but flag these) |
| Flagged from yesterday | 3-4 items                                             |
| This week at a glance  | 5 days (1 line each)                                  |
| Upcoming deadlines     | 7-14 day window only (5-7 items)                      |
| Weekly priorities      | 3 items                                               |

The tone rule is equally important. Here is the same item in two voices:

**System voice:** "Project Nighthawk: status; no update for 10 days. Action required: escalate."

**Briefing voice:** "Nighthawk has been quiet for 10 days, escalation today, not tomorrow."

The information is identical. The cognitive load is not. System voice requires the reader to decode, interpret, and decide. Briefing voice delivers the interpretation ready to act on. A good digest reads like a knowledgeable colleague briefed you before you arrived, not like a system generated a report.

## Monday and Friday Variants

The standard daily digest works for Tuesday, Wednesday, and Thursday. Monday and Friday have different cognitive demands that warrant structural changes.

### Monday Variant: Week-Ahead Brief

Monday is planning mode. Add two sections:

**This Week's Critical Path:** the 3-5 things that, if done this week, make the week a success. Different from the daily critical path: this is the weekly frame, not the daily sequence.

**Open from Last Week:** anything that carried over from Friday and why. Not as judgment ("you did not finish this") but as information ("this is still live, here is where it stands").

The Monday digest is typically longer than a standard digest. This is acceptable because the reader has not yet committed to the day's schedule and has time for a fuller picture.

### Friday Variant: Week Close

Friday is closing mode. Replace "This Week at a Glance" with a **Week Close** section:

- **Completed this week:** What was delivered. Name the outputs, Chapter 39 filed, analytics brief delegated to Omar, Executive Weekly run. Celebrating progress is not soft; it is data.
- **Carries forward:** What did not complete, and why. No judgment, just context for Monday.
- **Set up for Monday:** Things that will be easier if done today. Sending the Executive Weekly agenda before Friday afternoon means attendees have the weekend to prepare.

The Friday digest helps avoid the "Monday amnesia" problem: the gap between Friday evening and Monday morning that causes context to be lost and priorities to need rebuilding from scratch.

## Configuring Your Digest

The digest is configured in the `digest:` section of `work.local.md`. Here is the Panaversity configuration:

```yaml
digest:
  schedule: "07:00 PKT, daily weekdays"
  sections:
    - critical_path
    - calendar
    - open_delegations
    - flagged_from_yesterday
    - week_at_a_glance
    - upcoming_deadlines
    - weekly_priorities
  critical_path_items: 4 # Maximum items in the critical path section
  escalation_threshold: "Any item blocked for >7 days → flag as critical"
  format: "5-minute read; action-oriented; briefing voice, not system voice"
  monday_variant: true # Add This Week's Critical Path + Open from Last Week
  friday_variant: true # Replace week-at-a-glance with Week Close
  sources:
    - work.local.md # Always included
    - google_calendar # Requires Calendar MCP
    - gmail_flagged # Requires Gmail MCP (optional)
    - slack_mentions # Requires Slack MCP (optional)
```

Adjust `critical_path_items` based on your role density. If you have five or more P1 projects, you may need a hard limit of 3 in the critical path section to preserve readability. If your role is primarily one major initiative, 5 is fine.

The `escalation_threshold` is the trigger for turning an item from standard to flagged. Seven days without movement on a delegation is the default, adjust to match your organisation's tempo.

## Exercise: Configure and Generate Your First Digest

**Type:** Applied Configuration + Review
**Time:** 35 minutes
**Plugin command:** `/agentic-office:digest`
**Goal:** Configure, generate, and refine your personalised daily digest

### Step 1: Define Your Morning Needs (10 minutes)

Before opening `work.local.md`, answer these four questions:

1. What do you most need to know at the start of each day that you currently find out by scanning multiple places?
2. What is your maximum comfortable digest length? (Set this as your quality bar)
3. Which external tools do you use that could be connected via MCP? (Calendar? Email? Task tracker?)
4. Do you have a consistent weekly meeting rhythm that should shape the Monday/Friday variants?

These answers inform your configuration choices.

### Step 2: Configure work.local.md (10 minutes)

Fill in the digest configuration section. At minimum:

- `schedule:`: when you want the digest generated (time and timezone)
- `sections:`, which of the eight sections you want
- `critical_path_items:`; your maximum (3-5)
- `escalation_threshold:`: how many days before a stalled item is flagged critical
- `format:`; your quality reminder to the skill

### Step 3: Generate Your First Digest (5 minutes)

Run the command:

```
/agentic-office:digest
```

Read the output. Do not evaluate yet, just read.

### Step 4: Review and Refine (10 minutes)

Apply the quality criteria:

- **Length:** Does it fit on one page? If not, what would you remove?
- **Tone:** Does it read like a briefing or a status report? Find one item to rewrite in briefing voice.
- **Priorities:** Does the critical path reflect what actually matters today, or is it a list of everything due soon?
- **Missing:** What did you expect to see that is not there? (This is your `work.local.md` gap list.)

Run `/agentic-office:digest` a second time after making one configuration change. Compare the outputs.

**Deliverable:** A configured digest in `work.local.md`, a first generated digest, and a one-paragraph review noting what you would change and why.

## Try With AI

:::tip Try With AI
Use these prompts in Cowork or your preferred AI assistant.

**Reproduce**: Generate Zia's Wednesday digest using the case study data.

```
Generate a daily digest for Wednesday, 19 March 2026 for Zia Khan,
CEO of Panaversity. Use this context:

Projects:
- AgentFactory (P1): Chapter 39 draft due Thursday; Chapter 39 skills
  library also due Thursday as separate deliverable
- Project Nighthawk (P2): Karachi expansion; facility agreement stalled
  for 10+ days; Q3 target at risk; no update for 10 days
- BankersAI (P2): Workshop #7 coming; content review due 7 days before

Open delegations:
- Omar Farooq: analytics investor brief, delegated yesterday;
  no confirmation received; due 24 March
- Compliance: BSI ISO 27001 renewal, delegated last week; no update

Calendar today:
- 09:00 Executive Weekly (30 min standing; 3 agenda items needed)
- 11:00 Chapter Review (bi-weekly; Chapter 27 close-out)
- 15:00 deep work block (Chapter 39 completion)

Upcoming: Dr. Sana Mirza joins Monday 23 March as Head of Curriculum.

Format: One page maximum. Briefing voice, not system voice.
Include all eight sections from the digest output structure.
Critical path: maximum 4 items.
```

**What you are learning:** Building the digest prompt manually makes the assembly logic visible. You can see which context came from which source, calendar from the calendar MCP, delegation status from the delegation log, critical path from task intelligence. Once you can build it manually, you understand what the `/agentic-office:digest` command is doing automatically.

**Adapt**: Configure and generate your own digest.

```
I want to configure a daily digest for my own work. Here is my context:

Role: [Your role and organisation]
Projects: [List your 2-3 active projects with priority and current status]
Open delegations: [Who are you waiting on, for what, by when]
Meetings today: [Your actual calendar today]
Weekly priorities: [Your top 2-3 priorities this week]

Generate a daily digest using this context. Format it to fit one page.
Use briefing voice; write as a knowledgeable colleague would brief me,
not as a system generating a status report.

Then tell me: what would I need to add to work.local.md to make this
digest generate automatically each morning?
```

**What you are learning:** The gap between what the digest produces and what you expected reveals what is missing from your `work.local.md`. Every "I expected to see X but it was not there" is a configuration task. This is the feedback loop that makes the digest better each week.

**Apply**: Generate a Friday week-close digest.

```
It is Friday, 21 March 2026, end of Zia Khan's work week at Panaversity.
Generate a Friday variant of the daily digest using the week-close format.

What was completed this week:
- Project Nighthawk escalation letter sent (Wednesday)
- Omar confirmed analytics brief delegation (Wednesday)
- Chapter 39 narrative draft filed (Thursday)

What carries forward:
- Chapter 39 skills library, 60% complete; Omar to deliver analytics
  brief Monday
- BSI ISO renewal, compliance owner following up; expected by Wednesday

Set up for Monday:
- Executive Weekly agenda needs to be sent (so attendees can prepare)
- Dr. Sana Mirza starts Monday, onboarding brief needed before 09:00

Generate the Friday digest with the Week Close section replacing
"This Week at a Glance". Include a "What Carries Forward" section
with a note on why each item did not complete this week (information,
not judgment).
```

**What you are learning:** The Friday digest serves a different cognitive mode than the daily digest. It closes the week, captures progress (which is motivating and useful for reporting), and prepares the following Monday without requiring you to rebuild context from scratch. The quality of your Monday morning directly depends on the quality of your Friday close.
:::

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 9: Meeting Intelligence →](./09-meeting-intelligence.md)
