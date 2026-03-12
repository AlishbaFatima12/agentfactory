---
sidebar_position: 9
title: "Meeting Prep and Vendor Management"
description: "Prepare structured meeting briefings using the meeting-briefing skill across 7 meeting types, build vendor obligation dashboards with /vendor-check, and track post-meeting action items with priority-based follow-up cadence"
keywords:
  [
    "meeting briefing",
    "vendor management",
    "vendor-check",
    "meeting preparation",
    "action item tracking",
    "vendor obligation dashboard",
    "contract negotiation prep",
    "board meeting briefing",
    "meeting types",
    "follow-up cadence",
  ]
chapter: 22
lesson: 9
duration_minutes: 25

# HIDDEN SKILLS METADATA
skills:
  - name: "Generate a Structured Meeting Briefing for Contract Negotiation"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can produce a meeting briefing using the meeting-briefing skill that includes background context, open issues, talking points, red lines, and preparation gaps for a specific contract renegotiation scenario"

  - name: "Build a Vendor Obligation Dashboard Using /vendor-check"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can run /vendor-check for a named vendor and interpret the output including obligation summary, 30/60/90-day deadlines, overdue items, and renewal calendar, then cross-reference obligations with a meeting briefing"

  - name: "Design a Post-Meeting Action Item Tracking Workflow"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can capture action items from a meeting briefing, assign priority levels (high/medium/low), define ownership and deadlines, and configure follow-up cadence (daily/weekly/monthly) based on priority"

learning_objectives:
  - objective: "Produce a structured meeting briefing for a contract renegotiation using the meeting-briefing skill, including background, open issues, talking points, and red lines"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student runs the meeting-briefing skill for the CloudStack renegotiation scenario and produces a briefing that covers all five preparation steps (context, needs assessment, information gathering, synthesis, gap identification)"

  - objective: "Run /vendor-check to build a vendor obligation dashboard and cross-reference upcoming deadlines with meeting agenda items"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student runs /vendor-check CloudStack Inc. and identifies at least three upcoming obligations that should be raised in the renegotiation meeting"

  - objective: "Configure a post-meeting action item tracking workflow with priority-based follow-up cadence and ownership assignment"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Student can design an action item tracking structure with priority levels, explain why high-priority items require daily follow-up versus monthly for low-priority items, and identify dependencies between action items"

cognitive_load:
  new_concepts: 6
  concepts_list:
    - "Meeting briefing as structured preparation (not ad-hoc notes)"
    - "7 meeting types and how type determines preparation template"
    - "5-step meeting preparation methodology"
    - "Vendor obligation dashboard (30/60/90-day view)"
    - "Cross-referencing briefing with vendor obligations"
    - "Action item tracking with priority-based follow-up cadence"
  assessment: "6 concepts at B1-B2 level. The meeting-briefing skill is new but the vendor-check command was introduced briefly in L03. Students already understand structured output from prior lessons. The main cognitive stretch is combining two outputs (briefing + vendor check) into a unified preparation strategy."

differentiation:
  extension_for_advanced: "Prepare briefings for two different meeting types — a vendor renegotiation and a board committee meeting — and compare how the preparation template changes. Identify which elements are universal across meeting types and which are type-specific."
  remedial_for_struggling: "Focus on the CloudStack renegotiation briefing alone. If you can produce a briefing that tells you (1) what the current contract says, (2) what you want changed, and (3) what your walk-away position is, you have the core skill. The vendor dashboard and action tracking build on this foundation."
---

# Meeting Prep and Vendor Management

Bilal walks into the CloudStack renegotiation on Thursday at 14:00. He knows two things: the contract is up for renewal and Ayesha wants the liability cap increased. He does not know the current cap amount, the renewal deadline, whether CloudStack delivered the SOC 2 report they promised, what the DPA status is, or what happened in the last three emails between Ayesha and CloudStack's legal team. He spends the first fifteen minutes of the meeting asking questions he should already know the answers to. CloudStack's counsel notices.

Fatima Al-Rashidi at PayGulf never enters a vendor meeting without a structured brief. Before every negotiation she runs one prompt that pulls together the contract terms, the open issues, the talking points, and the red lines she will not cross. She walks in knowing more about the vendor's obligations than the vendor's own account manager. The meeting runs forty minutes instead of ninety. The follow-up email goes out within the hour because every action item was captured during the meeting, not reconstructed from memory afterward.

In Lesson 3, you reviewed the CloudStack agreement and found RED flags on the liability cap (capped at 3 months' fees) and data protection (no DPA). In Lesson 4, you learned cross-border pitfalls. Now you prepare to negotiate those issues -- and you will walk in as prepared as Fatima.

## Prediction Moment

Before running any prompts, write down the three most important things you would want to know walking into a contract renegotiation with CloudStack. What would make you feel fully prepared? Keep your list visible -- you will compare it against the AI's preparation in a moment.

## Generate a Meeting Briefing

The **meeting-briefing** skill produces structured preparation for seven meeting types: deal review, board/committee, vendor call, team sync, client meeting, regulatory discussion, and litigation/dispute. The preparation template changes based on meeting type. A vendor renegotiation needs contract terms and negotiation history. A board meeting needs risk highlights and compliance posture. The skill selects the right template automatically.

The skill follows a 5-step methodology:

1. **Identify context** -- meeting type, participants, agenda, your role
2. **Assess preparation needs** -- what information is critical for this type
3. **Gather context** -- from connected sources (calendar, email, documents) or from your prompt
4. **Synthesise** -- structured briefing with talking points and red lines
5. **Identify gaps** -- what the briefing could not find, what you need to verify

Run this prompt:

```
Prepare for my contract renegotiation meeting with CloudStack Inc.
Meeting is Thursday at 14:00 PKT. Attendees: Bilal Ahmad (Legal Ops,
Noor Technologies -- our side), Ayesha Malik (GC, Noor Technologies --
our side, joining for the liability cap discussion), and CloudStack's
legal counsel (name unknown).

Context from our last review:
- Current liability cap: 3 months' fees (we want 12 months minimum)
- No Data Processing Addendum exists (we require one under PDPA 2023)
- Governing law: currently Delaware -- we want English law or at
  minimum a neutral arbitration clause
- CloudStack promised a SOC 2 Type II report by 15 May 2026
- Annual contract value: PKR 4,800,000

I am the customer's legal ops coordinator. I need talking points,
red lines, and a preparation checklist.
```

**What to expect:** The agent produces a structured meeting briefing. Your output will vary, but look for these sections:

| Section                              | Intent                                                                                     | What to Verify                                                                                 |
| ------------------------------------ | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| Meeting header and preparation level | Identifies meeting type (vendor negotiation) and urgency                                   | Check that the preparation level reflects the complexity of the renegotiation                  |
| Background and team                  | Summarises the vendor relationship, contract value, and your team's roles                  | Verify the context matches what you provided                                                   |
| Open issues with positions           | Lists each negotiation point with current terms, target, rationale, and walk-away position | Should include RED-priority items (liability cap, DPA) and YELLOW items (governing law, SOC 2) |
| Talking points and sequencing        | Opening statement, discussion sequence, and closing strategy                               | Look for strategic sequencing — regulatory items first to establish seriousness                |
| Red lines                            | Non-negotiable positions requiring GC approval to concede                                  | Should clearly distinguish between regulatory requirements and commercial preferences          |
| Preparation gaps                     | Information the team needs before the meeting but does not yet have                        | Should flag missing items like counterparty counsel details or unreceived documents            |

:::note Your output will vary
The specific talking points, walk-away positions, and sequencing depend on the context you provide and your playbook configuration. Focus on whether the briefing covers all six sections and whether the walk-away positions are marked as suggestions requiring attorney approval. The teaching point is that a negotiation briefing goes beyond "what we want changed" to include sequencing strategy, preparation gaps, and escalation rules.
:::

Compare this briefing against the list you wrote during the prediction moment. Most students list "current contract terms" and "what we want changed." Fewer list "walk-away positions," "preparation gaps," or "sequencing strategy." The briefing produces all of these because the meeting-briefing skill is designed for negotiation preparation, not general-purpose summarisation.

:::warning The Agent Researches and Recommends. You Decide and Send.
The walk-away positions in this briefing are suggestions based on industry benchmarks and the context you provided. They are starting points for Ayesha to approve, not final positions. The GC sets the actual red lines. The agent prepares the options; the attorney decides the strategy.
:::

## Build a Vendor Obligation Dashboard

The meeting briefing tells you what to discuss. The **vendor obligation dashboard** tells you what CloudStack already owes you. In Lesson 3, you ran `/vendor-check CloudStack Inc.` briefly after the contract review. Now run it again with the full renegotiation context:

```
/vendor-check CloudStack Inc.
```

**What to expect:** The agent produces a vendor obligation dashboard. Your output will vary, but look for these sections:

| Section            | Intent                                                           | What to Verify                                                                                           |
| ------------------ | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Obligation summary | Counts active obligations, overdue items, and upcoming deadlines | Check that the counts are consistent with the detailed views below                                       |
| 30/60/90-day views | Timeline of upcoming vendor obligations                          | Should show deliverables, reports, and renewal deadlines in chronological order                          |
| Overdue items      | Obligations past their deadline or newly required by regulation  | Look for items that became obligations after the contract was signed (e.g., new regulatory requirements) |
| Renewal calendar   | Contract dates, auto-renewal terms, and notice deadlines         | Should identify whether the renewal window is open and the notice deadline                               |
| SLA monitoring     | Actual performance vs. contractual guarantees                    | Should flag any SLA shortfalls as negotiation leverage                                                   |

:::note Your output will vary
The specific obligations, dates, and SLA figures depend on the contract data available. Focus on whether the dashboard surfaces items that feed directly into the meeting briefing — the connection between vendor obligations and negotiation preparation is the teaching point.
:::

Cross-reference this dashboard with the meeting briefing. Items from the dashboard should feed directly into the meeting agenda — deliverable deadlines become concrete requests, SLA shortfalls become negotiation leverage, and auto-renewal notice deadlines create urgency.

**With connectors:** If you connected Google Calendar and Gmail in Lesson 1, the meeting-briefing skill pulls the meeting invite, prior email threads with CloudStack, and any attached documents automatically. The vendor-check cross-references calendar reminders for upcoming deadlines.

**Without connectors:** You provide the context in your prompt (as we did above) and the output is equally structured. The difference is manual context gathering versus automatic.

## Track Action Items After the Meeting

Preparation is half the value. The other half is capturing what happens next. After the meeting, the meeting-briefing skill captures **action items** with structured tracking:

```
The CloudStack renegotiation meeting just ended. Capture the
following action items:

1. CloudStack to provide their standard DPA template by Friday
   17:00 PKT. Bilal to review against PDPA 2023 requirements.
2. Ayesha to approve the liability cap counter-proposal (minimum
   6 months, target 12 months) by Wednesday.
3. CloudStack to confirm SOC 2 Type II delivery date — they said
   "early May" but no specific date.
4. Bilal to draft a governing law compromise proposal (Delaware
   law with ICC arbitration) for Ayesha's review.
5. Follow-up meeting scheduled for next Thursday to exchange
   redlined terms.

Assign priority, ownership, deadline, and follow-up cadence
for each item.
```

**What to expect:** The agent produces a structured action item tracker. Your output will vary, but look for these sections:

| Section                 | Intent                                                                        | What to Verify                                                                                 |
| ----------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Action item table       | Each item with owner, priority, deadline, follow-up cadence, and dependencies | Check that priorities reflect meeting urgency and that dependencies are correctly mapped       |
| Follow-up cadence rules | Priority-based check frequency (daily/weekly/monthly)                         | HIGH items should have daily cadence, MEDIUM weekly, LOW monthly or dependency-triggered       |
| Next steps              | Immediate post-meeting actions                                                | Should include distributing the summary and setting calendar reminders for high-priority items |

:::note Your output will vary
The specific action items depend on what happened in your meeting. Focus on the structure: priority assignment, ownership, deadline, and dependency mapping. The teaching point is that follow-up cadence should match priority — daily checks for items that block the next meeting, weekly for important-but-not-blocking items.
:::

The follow-up cadence is not arbitrary. HIGH priority items have hard deadlines before the next meeting — if checked weekly instead of daily, a late delivery may leave the follow-up meeting without materials. MEDIUM items are important but do not block the next meeting. LOW items are downstream, triggered by completion of higher-priority items.

> **The agent reviews, triages, drafts, and flags. The licensed attorney advises, decides, and signs.**

## Worked Example: PayGulf Board Meeting Prep

Different meeting type, different preparation template. Fatima prepares for PayGulf's quarterly board meeting. The board wants a legal operations update, not a contract negotiation. The meeting-briefing skill adjusts automatically:

```
Prepare for my quarterly board meeting at PayGulf Technologies.
Meeting is next Tuesday at 10:00 GST. Attendees: the full board
(5 members), CEO, CFO, and me (General Counsel).

The board expects updates on:
- Outstanding legal risks and their status
- Regulatory changes affecting our DFSA licence
- Contract pipeline (new vendor agreements in progress)
- Compliance posture (any open findings from last audit)
- Pending or threatened disputes
- Legal department budget vs. actuals

I am General Counsel presenting to the board. I need a structured
briefing I can use as my presentation outline.
```

**What to expect:** The agent produces a board-level briefing with a different structure from the vendor negotiation briefing. Your output will vary, but look for these sections:

| Section            | Intent                                                                     | What to Verify                                                                  |
| ------------------ | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Executive summary  | One-paragraph status with items requiring board awareness vs. board action | Check that the summary distinguishes between awareness items and action items   |
| Risk highlights    | RAG-coded (RED/AMBER/GREEN) risk status for each open matter               | Should cover regulatory, litigation, and compliance risks relevant to the board |
| Regulatory updates | Recent regulatory changes affecting the business                           | Should identify which updates require action and which are informational        |
| Contract pipeline  | Summary of agreements in negotiation, pending signature, and renewals      | Should give the board visibility into legal workload and velocity               |
| Compliance posture | Audit status, open findings, and next scheduled audit                      | Should reference the most recent audit and flag any unresolved findings         |
| Budget vs. actuals | YTD spend against plan with variance explanation                           | Should explain the variance in terms the board can act on                       |
| Preparation gaps   | Questions the board may ask that you do not yet have answers for           | Should help you prepare for likely follow-up questions                          |

:::note Your output will vary
The specific risk items, regulatory updates, and budget figures depend on the context you provide. Focus on the structural difference from the vendor negotiation briefing: board briefings use RAG status codes, executive summaries, and budget variance — not talking points and walk-away positions. The teaching point is that the same skill adapts its output structure to the meeting type and audience.
:::

Notice the structural difference. The vendor negotiation briefing focused on talking points, red lines, and walk-away positions. The board briefing focuses on risk status (RAG colour coding), regulatory updates, and budget variance. Same skill, different meeting type, different output structure. The meeting-briefing skill produces what the audience needs, not a generic document.

## What You Built

1. Meeting briefing for the CloudStack renegotiation -- with background, open issues, talking points, red lines, and preparation gaps
2. Vendor obligation dashboard with 30/60/90-day view showing upcoming deadlines, overdue items, and SLA monitoring
3. Action item tracking system with priority-based follow-up cadence (daily/weekly/monthly) and dependency mapping
4. Board meeting briefing template showing how the same skill adapts to a different meeting type and audience

## Try With AI

Use these prompts in Cowork or your preferred AI assistant with the Legal plugins installed.

### Prompt 1: Reproduce the CloudStack Briefing

```
Prepare for my contract renegotiation meeting with CloudStack Inc.
Meeting is Thursday at 14:00. I need to discuss liability cap
(currently 3 months, we want 12), missing DPA, and governing law.
I am the customer's legal ops coordinator at Noor Technologies,
an 85-person SaaS company in Karachi.
```

**What you are learning:** How the meeting-briefing skill converts unstructured meeting context into a structured negotiation preparation document. Compare your output to the reference briefing in this lesson. The structure (background, open issues, talking points, red lines, preparation gaps) should match even if specific phrasing differs. If your output is missing red lines or preparation gaps, add more context to your prompt -- the skill produces better output when you tell it what you need to negotiate and what your constraints are.

### Prompt 2: Adapt to a Regulatory Discussion

```
Prepare for a regulatory discussion meeting with the Pakistan
Telecommunication Authority. The PTA has requested a meeting to
discuss Noor Technologies' compliance with the Personal Data
Protection Act 2023 as it applies to our Cloud ERP platform.
Meeting is next Monday at 11:00 PKT. Attendees: Ayesha Malik (GC),
Bilal Ahmad (Legal Ops), and two PTA compliance officers.

I need to understand: what the PTA is likely to ask, what
documentation we should bring, and what our compliance gaps are.
```

**What you are learning:** Regulatory discussions produce a different briefing structure than vendor negotiations. The skill focuses on compliance documentation, potential exposure areas, and what NOT to volunteer versus what to disclose proactively. Compare the regulatory discussion output to the CloudStack vendor negotiation output -- notice how the talking points shift from "what we want" to "what we can demonstrate."

### Prompt 3: Apply to Your Own Organisation

```
Think of a meeting you have scheduled in the next two weeks —
a vendor call, a board update, a team sync, or a client meeting.
Describe the meeting type, attendees, agenda, and your role. Ask
the meeting-briefing skill to prepare a structured briefing.

After reading the output:
1. Does the briefing surface information you had not considered?
2. Are there preparation gaps you need to fill before the meeting?
3. Would you share this briefing with colleagues attending?
```

**What you are learning:** The discipline of structured preparation versus ad-hoc meeting attendance. Most professionals prepare by reviewing their notes five minutes before a meeting. The meeting-briefing skill forces a systematic approach: who is attending, what is the agenda, what are the open issues, what are my red lines, what do I not know. Once you experience the difference between walking into a meeting prepared versus unprepared, the habit becomes self-reinforcing.
