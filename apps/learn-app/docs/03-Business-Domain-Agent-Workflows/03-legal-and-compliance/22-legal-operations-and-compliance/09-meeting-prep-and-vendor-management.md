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

**Expected output:**

```
══════════════════════════════════════════════════════════════
          MEETING BRIEFING
          Vendor Renegotiation: CloudStack Inc.
          Meeting: Thursday 14:00 PKT
          Prepared for: Bilal Ahmad, Legal Ops
══════════════════════════════════════════════════════════════

MEETING TYPE: Vendor Call — Contract Renegotiation
PREPARATION LEVEL: HIGH (active disputes on multiple clauses)

BACKGROUND
─────────────────────────────────────────────────────────────
Vendor:          CloudStack Inc. (US-based, Delaware)
Relationship:    Active — SaaS project management platform
Contract Value:  PKR 4,800,000/year (~USD 17,000)
Contract Status: Renewal pending
Last Review:     RED flags on liability cap + data protection

OUR TEAM
─────────────────────────────────────────────────────────────
Lead:            Bilal Ahmad (Legal Ops) — runs the meeting
Joining:         Ayesha Malik (GC) — for liability cap discussion
Role:            Customer side — we are the buyer renegotiating terms

OPEN ISSUES (from prior review)
─────────────────────────────────────────────────────────────
1. LIABILITY CAP [RED — priority negotiation item]
   Current:    3 months' fees (PKR 1,200,000)
   Target:     12 months' fees (PKR 4,800,000)
   Rationale:  3-month cap exposes Noor to uncovered losses if
               CloudStack suffers a data breach or extended outage.
               Industry standard for SaaS at this value: 12 months.
   Walk-away:  Do not accept less than 6 months. Below 6 months,
               escalate to Ayesha for commercial decision.

2. DATA PROCESSING ADDENDUM [RED — regulatory requirement]
   Current:    No DPA exists. Contract contains only a general
               "comply with applicable laws" clause.
   Target:     Execute a standalone DPA compliant with PDPA 2023.
   Rationale:  PDPA 2023 requires data processors to execute a
               written agreement specifying processing purposes,
               security measures, sub-processor controls, and
               breach notification timelines.
   Walk-away:  Non-negotiable. No DPA = no renewal. This is a
               regulatory requirement, not a commercial preference.

3. GOVERNING LAW [YELLOW — strong preference, not a deal-breaker]
   Current:    Delaware law, Delaware courts
   Target:     English law with London arbitration (LCIA)
   Rationale:  Noor operates across Pakistan, UAE, and UK. English
               law is the most practical neutral jurisdiction for
               cross-border enforcement.
   Fallback:   Accept Delaware law if arbitration clause added
               (ICC or LCIA) to avoid Delaware court litigation.

4. SOC 2 TYPE II REPORT [YELLOW — compliance verification]
   Due:        15 May 2026
   Status:     Not yet received
   Action:     Request status update in meeting. If delayed, request
               interim letter from CloudStack's auditor confirming
               the audit is in progress.

TALKING POINTS
─────────────────────────────────────────────────────────────
Opening:     "We value the CloudStack relationship and want to
             renew. Our review identified three areas where the
             current terms don't match our regulatory obligations
             or risk tolerance."

Sequence:    1. DPA first (regulatory, non-negotiable — establish
                this early to show seriousness)
             2. Liability cap (commercial, room to negotiate)
             3. Governing law (preference, flexible)
             4. SOC 2 status update (quick item, end of meeting)

Close:       "We'd like to agree on the DPA framework today and
             take the liability discussion to a second round if
             needed. Can we target redlines by [date]?"

RED LINES (do not concede)
─────────────────────────────────────────────────────────────
• DPA execution is a condition of renewal — not optional
• Liability cap below 6 months requires GC escalation
• No unlimited liability for Noor (mutual cap, not one-sided)

PREPARATION GAPS
─────────────────────────────────────────────────────────────
⚠ CloudStack's counsel name unknown — request from account
  manager before meeting
⚠ Prior negotiation email history not available — check with
  Ayesha for any direct correspondence
⚠ CloudStack's standard DPA template not reviewed — request
  in advance so you can pre-review before the meeting

ATTORNEY REVIEW: This briefing supports preparation. All
negotiation positions and concession authorities require
approval from Ayesha Malik (GC) before the meeting.

══════════════════════════════════════════════════════════════
```

Compare this briefing against the list you wrote during the prediction moment. Most students list "current contract terms" and "what we want changed." Fewer list "walk-away positions," "preparation gaps," or "sequencing strategy." The briefing produced all of these automatically because the meeting-briefing skill is designed for negotiation preparation, not general-purpose summarisation.

:::warning The Agent Researches and Recommends. You Decide and Send.
The walk-away positions in this briefing are suggestions based on industry benchmarks and the context you provided. They are starting points for Ayesha to approve, not final positions. The GC sets the actual red lines. The agent prepares the options; the attorney decides the strategy.
:::

## Build a Vendor Obligation Dashboard

The meeting briefing tells you what to discuss. The **vendor obligation dashboard** tells you what CloudStack already owes you. In Lesson 3, you ran `/vendor-check CloudStack Inc.` briefly after the contract review. Now run it again with the full renegotiation context:

```
/vendor-check CloudStack Inc.
```

**Expected output:**

```
══════════════════════════════════════════════════════════════
          VENDOR OBLIGATION DASHBOARD
          CloudStack Inc.
══════════════════════════════════════════════════════════════

OBLIGATION SUMMARY
─────────────────────────────────────────────────────────────
Active Obligations:    8
Overdue:               1 (DPA execution — no deadline set, now
                         required under PDPA 2023)
Due in 30 days:        2
Due in 60 days:        1
Due in 90 days:        1

30-DAY VIEW
─────────────────────────────────────────────────────────────
15 May 2026    SOC 2 Type II report delivery
31 May 2026    Quarterly uptime report (SLA compliance)

60-DAY VIEW
─────────────────────────────────────────────────────────────
30 Jun 2026    Annual contract renewal decision deadline

90-DAY VIEW
─────────────────────────────────────────────────────────────
15 Jul 2026    Sub-processor list update (if DPA executed)

OVERDUE ITEMS
─────────────────────────────────────────────────────────────
⚠ DPA execution — PDPA 2023 requires written data processing
  agreement. No DPA exists. No deadline was set in the original
  contract because PDPA was not yet enacted at signing.
  RECOMMENDATION: Make DPA execution a condition of renewal
  with a specific deadline (suggest: 30 days from renewal signing).

RENEWAL CALENDAR
─────────────────────────────────────────────────────────────
Contract Start:    1 Jul 2025
Contract End:      30 Jun 2026
Auto-Renewal:      YES — 30-day notice required to prevent
Notice Deadline:   31 May 2026
Status:            RENEWAL WINDOW OPEN — negotiate now

SLA MONITORING
─────────────────────────────────────────────────────────────
Guaranteed Uptime:     99.9%
Last Quarter Actual:   99.7% (below SLA)
SLA Credits Claimed:   None
RECOMMENDATION:        Raise SLA shortfall in renegotiation.
                       99.7% in Q1 means ~2.2 hours additional
                       downtime beyond the guarantee.

══════════════════════════════════════════════════════════════
```

Cross-reference this dashboard with the meeting briefing. Three items should feed directly into Thursday's agenda:

1. The SOC 2 report is due 15 May -- raise it as a concrete deliverable with a deadline, not a vague request
2. The SLA fell below 99.9% last quarter -- this strengthens your negotiation position on the liability cap
3. The auto-renewal notice deadline is 31 May -- if the renegotiation stalls, you have a hard deadline to decide whether to renew on existing terms or give notice

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

**Expected output:**

```
ACTION ITEMS — CloudStack Renegotiation (Thursday)
══════════════════════════════════════════════════════════════

# | Action                           | Owner    | Priority | Deadline      | Follow-up  | Dependencies
──┼──────────────────────────────────┼──────────┼──────────┼───────────────┼────────────┼─────────────
1 | DPA template from CloudStack     | Bilal    | HIGH     | Fri 17:00 PKT | Daily      | None
2 | Liability cap approval           | Ayesha   | HIGH     | Wed EOD       | Daily      | None
3 | SOC 2 delivery date confirmation | Bilal    | MEDIUM   | Mon EOD       | Weekly     | None
4 | Governing law compromise draft   | Bilal    | MEDIUM   | Tue EOD       | Weekly     | Depends on #2
5 | Follow-up meeting prep           | Bilal    | LOW      | Next Wed      | —          | Depends on #1-4

FOLLOW-UP CADENCE RULES
─────────────────────────────────────────────────────────────
HIGH priority:    Daily check until resolved
MEDIUM priority:  Weekly check until resolved
LOW priority:     Monthly check or triggered by dependency

NEXT STEPS
─────────────────────────────────────────────────────────────
• Send action item summary to all attendees within 1 hour
• Calendar reminder: check items #1 and #2 daily
• Prepare for follow-up meeting once items #1-4 are resolved
• If DPA template not received by Friday, escalate to Ayesha
  for direct follow-up with CloudStack's GC

══════════════════════════════════════════════════════════════
```

The follow-up cadence is not arbitrary. HIGH priority items (the DPA template, the liability cap approval) have hard deadlines before the next meeting. If Bilal checks weekly instead of daily and the DPA template arrives late, the follow-up meeting has no redlines to exchange. MEDIUM items (SOC 2 confirmation, governing law draft) are important but do not block the next meeting. LOW items are downstream -- the follow-up meeting prep depends on everything else completing first.

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

**Expected output:**

```
══════════════════════════════════════════════════════════════
          BOARD MEETING BRIEFING
          PayGulf Technologies — Q1 Legal Update
          Meeting: Tuesday 10:00 GST
          Prepared for: Fatima Al-Rashidi, General Counsel
══════════════════════════════════════════════════════════════

MEETING TYPE: Board/Committee — Legal Operations Update
PREPARATION LEVEL: HIGH (board presentation)

EXECUTIVE SUMMARY
─────────────────────────────────────────────────────────────
Legal department status: GREEN — no material unresolved risks.
Two items require board awareness (DFSA consultation, Saudi
expansion licensing). No items require board action this quarter.

RISK HIGHLIGHTS
─────────────────────────────────────────────────────────────
1. [GREEN] DFSA licence renewal — renewal application submitted,
   no deficiencies noted, expected approval within 30 days
2. [AMBER] Saudi expansion — SAMA outsourcing regulations require
   local data residency for payment processing. Legal is evaluating
   two cloud providers with Saudi data centres.
3. [GREEN] No pending litigation or threatened disputes

REGULATORY UPDATES
─────────────────────────────────────────────────────────────
• DFSA consultation paper on AI in financial services — response
  deadline 15 June. Legal is drafting a response.
• UAE PDPL enforcement guidance published — no material changes
  to PayGulf's current compliance posture
• SAMA updated outsourcing framework — affects Saudi expansion
  timeline (see Risk #2)

CONTRACT PIPELINE
─────────────────────────────────────────────────────────────
New Agreements:    3 in negotiation, 2 pending signature
Renewals:          5 due this quarter (all on track)
Terminated:        0

COMPLIANCE POSTURE
─────────────────────────────────────────────────────────────
Last Audit:        Q4 2025 (internal)
Open Findings:     0 — all 3 findings from Q4 closed
Next Audit:        Q2 2026 (external — DFSA annual review)

BUDGET
─────────────────────────────────────────────────────────────
YTD Spend:         AED 1.2M (92% of plan)
Variance:          Under budget by AED 105K (external counsel
                   spend lower than projected due to in-house
                   contract review capability)

PREPARATION GAPS
─────────────────────────────────────────────────────────────
⚠ Saudi expansion legal cost estimate not yet finalised —
  board may ask. Prepare a range (AED 150-250K).

══════════════════════════════════════════════════════════════
```

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
