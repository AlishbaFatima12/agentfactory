---
slug: /Business-Domain-Agent-Workflows/product-management/stakeholder-communication
sidebar_position: 12
title: "Stakeholder Communication"
description: "Learn to generate audience-calibrated stakeholder updates from the same underlying status data — executive, engineering, and customer versions — using the /stakeholder-update command, and master risk communication with the ROAM framework"
keywords:
  [
    "product management",
    "stakeholder communication",
    "stakeholder update",
    "ROAM framework",
    "status reporting",
    "Green Yellow Red",
    "audience calibration",
  ]
chapter: 36
lesson: 12
duration_minutes: 40

# HIDDEN SKILLS METADATA
skills:
  - name: "Generate three audience-calibrated stakeholder updates from the same status data using /stakeholder-update"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Communication"
    measurable_at_this_level: "Student can invoke /stakeholder-update for executive and engineering audiences and verify that each version contains audience-appropriate content: executive version is under 300 words and outcome-focused; engineering version includes links, blockers, and decisions"

  - name: "Apply the ROAM framework to communicate risk in stakeholder updates without creating alarm or hiding problems"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Communication"
    measurable_at_this_level: "Student can classify a set of product risks using ROAM (Resolved, Owned, Accepted, Mitigated) and express each risk in an audience-appropriate format"

learning_objectives:
  - objective: "Produce three versions of an InsightFlow Sprint 1 update for executive, engineering, and customer audiences from the same status inputs"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student invokes /stakeholder-update twice (exec and engineering), receives both versions, and identifies at least three content differences that reflect audience calibration"

  - objective: "Apply Green/Yellow/Red status signalling correctly — using Yellow proactively at the first sign of risk, not when the situation is already bad"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Given three sprint scenarios (on track, one engineer on leave with contractor backfill, critical-path delay), student correctly assigns G/Y/R status and explains the escalation rationale"

  - objective: "Classify product risks using the ROAM framework and express each risk in the appropriate stakeholder format"
    proficiency_level: "B2"
    bloom_level: "Apply"
    assessment_method: "Student classifies a list of risks as Resolved/Owned/Accepted/Mitigated and drafts risk language appropriate for an executive update (brief, mitigation-focused) versus an engineering update (technical, action-oriented)"

cognitive_load:
  new_concepts: 4
  concepts_list:
    - "Audience calibration: same reality, different languages for exec/engineering/customer"
    - "Green/Yellow/Red status signalling and when to change status"
    - "ROAM risk framework (Resolved, Owned, Accepted, Mitigated)"
    - "ADR format for decision documentation in engineering updates"
  assessment: "4 concepts at B1-B2 level. Students arrive from L11 with a sprint plan — they have the underlying status data. The new thinking here is about the translation problem: how the same facts become different messages depending on what each audience cares about. ROAM is a new framework but structurally simple once the G/Y/R concept is established."

differentiation:
  extension_for_advanced: "Take the same sprint status data and write a board-level update. What changes? Board-level updates require even more compression and strategic framing than executive updates — the board cares about milestones, revenue implications, and significant risks, not sprint velocity. Then compare all four versions (exec, engineering, customer, board) side by side. What is in the board version that is not in the exec version? What is in the exec version that is not in the board version?"
  remedial_for_struggling: "Start by writing the executive update by hand using the template: Status color, TL;DR sentence, three progress bullet points, one risk with mitigation, one ask. Limit yourself to 200 words. Only then run /stakeholder-update and compare. The exercise of writing it manually first forces you to decide what is important before the agent decides for you."

teaching_guide:
  key_points:
    - "The same status data becomes three completely different documents because each audience has different context, different needs, and different risk tolerance"
    - "Yellow status is good risk management, not a failure signal — flagging Yellow at the first sign of risk gives leadership more options than flagging Red when it is too late"
    - "Never send the same version of an update to different audiences — the executive version would alarm engineers with its compression, and the engineering version would lose executives in technical detail"
    - "ROAM forces specificity about what is actually being done about each risk — 'Owned' without a named owner and mitigation plan is the same as no risk management"
  misconceptions:
    - "Green status means everything is perfect. Correction: Green means 'on track to meet commitments with no risks that require external help'. A sprint can have challenges, bugs, and discussions while still being Green — if none of those require escalation."
    - "The engineering update is just the executive update with more detail. Correction: the engineering update contains entirely different content — ticket links, PRs, decisions with ADR references, specific blockers and who is unblocking them. It is not compressed; it is targeted at engineers' actual information needs."
  discussion_prompts:
    - "Your sprint is technically on track, but you have a growing concern that the contractor hired to backfill Leo's capacity will take longer than expected to ramp. You have no hard evidence — just a gut feeling. Do you call this Green or Yellow? When does a concern become a risk that requires status change?"
    - "You draft the executive update and include the ADR that documents your decision to defer the audit log to Sprint 2. The CPO marks up the doc: 'Too much detail'. What does that tell you about executive audience calibration? What would you change?"
  teaching_tips:
    - "The comparison exercise in the exercise (run /stakeholder-update twice, compare outputs) is the lesson's highest-value activity. Have students write down at least five specific content differences between the two versions — this makes the audience calibration principle concrete."
    - "ROAM is intuitive once you ask the one question it encodes: 'what is actually being done about this risk?' If the answer is nothing, it is Accepted (document that you chose to proceed anyway). If someone owns it and is working on it, it is Owned. If the action is already complete, Resolved. If the action reduced but did not eliminate the risk, Mitigated."
---

# Stakeholder Communication

Your Sprint 1 for the Workflow Builder is underway. Midway through week 1, here is the reality: WF-001 (auth integration design) is complete. WF-002 (trigger config data model) is in progress and on track. WF-003 (trigger UI) has not started yet — it is blocked on WF-002, as planned. Leo returned from PTO a day early and is making good progress on WF-005 (error handling). The contractor covering Leo's on-call gap ramped up well. One risk: the auth service handoff from the platform team requires a review meeting that has not been scheduled yet, which could delay WF-003 sign-off.

Now you need to communicate this to three audiences: Sarah Chen (CEO), the engineering team, and James Wilson (Head of Customer Success) who will draft the customer-facing update.

This is the stakeholder translation problem: one reality, three languages. The CEO needs to know whether the Q3 Workflow Builder commitment is on track and whether there is anything she needs to do. The engineering team needs specific technical context — what is unblocked, what is next, what decisions were made. Customer Success needs to know what to tell customers without surfacing any internal implementation detail.

The `/stakeholder-update` command from the official **product-management** plugin generates audience-calibrated updates from the same status inputs. Your job is not to rewrite the update for each audience from scratch — it is to provide the same underlying status data and let the skill produce the right translation for each audience.

## The Three Audience Languages

Every audience has a different primary question:

| Audience | Primary Question | Cares About | Attention Window |
|----------|-----------------|-------------|------------------|
| **Executive** | Are we on track to hit the commitment? | Outcomes, risks that need their help, decisions to make | 200-300 words, 30 seconds |
| **Engineering team** | What is my context for the next sprint? | Technical decisions, blockers, PRs, what changed and why | As long as needed, structured |
| **Customer / CS** | Does this affect what customers are expecting? | Features and timelines in customer terms, no jargon | Short, benefit-focused |

The same sprint update that reassures an executive ("on track, one watch item, no action needed") would confuse an engineer who needs to know which tickets changed priority. The engineering version that includes ADR references and ticket links would lose the executive immediately.

:::caution Never One Version for All
Sending the same update to executives and engineers is a communication failure in both directions. The executive gets too much noise. The engineer gets too little signal. Calibrate every version for its audience.
:::

## Green / Yellow / Red Status Signalling

The most important decision in every stakeholder update is the status color. Use it honestly.

| Status | When to Use | When NOT to Use |
|--------|-------------|-----------------|
| **Green** | On track, no risks requiring external help, team is able to manage independently | Do not use as a default. Green is a statement, not an absence of thought. |
| **Yellow** | First sign of risk materialising — slower progress, dependency uncertainty, capacity concern. You have mitigation in place but outcome is uncertain. | Do not wait until Yellow becomes Red to flag. The whole point of Yellow is early warning. |
| **Red** | You have exhausted your own options and need external intervention — resource addition, timeline extension, scope cut requiring leadership decision. | Do not use Red as drama. Use it as a genuine request for help. |

:::info Yellow Is Not Failure
The most common mistake in status reporting is using Yellow as a signal of poor performance. Yellow means you are doing your job: identifying risk early and communicating it so leadership can help if needed. A PM who never reports Yellow is either managing a perfect product or hiding problems.
:::

**When to change status:**
- Move to Yellow at the FIRST sign of risk — before you are certain something will go wrong
- Move to Red when you genuinely need someone else's help to resolve the situation
- Move back to Green only when the risk is fully resolved, not just paused
- Document the reason for every status change

For InsightFlow Sprint 1, the missing review meeting for auth service sign-off is a Yellow indicator. No action needed from leadership yet — but it is worth flagging so the CEO knows this is the watch item if she hears about delays.

## The ROAM Risk Framework

ROAM is a four-state classification for risks that forces you to be specific about what is actually being done:

| ROAM State | Meaning | What to Write in the Update |
|-----------|---------|----------------------------|
| **Resolved** | Risk is gone — document how | "Auth service migration dependency: resolved (platform team completed ahead of schedule)" |
| **Owned** | Someone is actively managing it with a plan | "Review meeting scheduling: Owned by [PM]. Following up with platform team to schedule by [date]." |
| **Accepted** | We know about it and have decided to proceed without mitigation | "Contractor ramp-up time: Accepted. One week estimated; monitored. No action if ramp completes this week." |
| **Mitigated** | Actions have reduced the risk but not eliminated it | "Leo's PTO impact: Mitigated. Leo returned a day early; WF-005 started. 1-day buffer recovered." |

ROAM prevents two common risk communication failures: vague language ("there are some risks around the dependency") and radio silence on risks that are being actively managed.

## The /stakeholder-update Workflow

The `/stakeholder-update` command asks what kind of update you need and who the audience is, then pulls the underlying status together into the appropriate format.

```
/stakeholder-update weekly, executive audience

Context:
Sprint 1, Workflow Builder initiative. 1 week in.
Status: Yellow — watch item on auth service review meeting

Progress:
- WF-001: Auth integration design: DONE ✅
- WF-002: Trigger config data model: in progress, on track
- WF-003: Trigger UI: not started (waiting on WF-002 — as planned)
- WF-005: Error handling: in progress, Leo back early from PTO

Watch item:
Platform team auth service handoff review meeting not yet scheduled.
If not scheduled by Wednesday, WF-003 start could slip 2-3 days.
Following up today. Confidence in sprint goal: moderate-high.

Sprint goal (L11 plan): Ship trigger config UI so design can start
user testing by sprint end.
```

**Sample executive update:**

```
Status: 🟡 ON TRACK — WATCH ITEM

TL;DR: Workflow Builder Sprint 1 is progressing well. One scheduling
risk that could slip the sprint end by 2-3 days if not resolved
this week.

Progress:
- Auth integration design complete (unblocked by platform team)
- Trigger data model in progress, on track
- Engineer back from PTO early — capacity better than planned

Watch item:
Platform team review meeting for auth handoff not yet scheduled.
If not scheduled by Wednesday, trigger UI start slips 2-3 days.
PM is following up today. No action needed from leadership yet.

Next milestone: Trigger config UI ready for design testing by 2026-04-03.
Confidence: Moderate-high. Will escalate if scheduling not resolved
by Wednesday.
```

**Sample engineering update:**

```
Sprint 1 Status — Week 1

Shipped:
- WF-001: Auth integration design DONE ✅ — awaiting platform team
  review meeting to confirm sign-off (scheduling this week)

In progress:
- WF-002: Trigger config data model — Priya, on track
- WF-005: Error handling and retry — Leo (returned early from PTO),
  in progress

Decisions:
- Decision made: ADR-003 — deferred audit log (WF-007) to Sprint 2.
  Rationale: capacity constraint with Leo's PTO and contractor ramp.
  See ADR-003 for full context.

Priority this week:
1. Get auth review meeting scheduled (PM following up with platform team)
2. Complete WF-002 so Tamar can start WF-003 Thursday
3. WF-005 error handling — complete before sprint demo

Blocker:
- WF-003 start blocked on WF-002 completion + auth review meeting.
  If meeting not scheduled by Wednesday, flag to me — we will discuss
  scope options.
```

### What Changes Between Versions

| Element | Executive Version | Engineering Version |
|---------|-----------------|-------------------|
| **Length** | ~150 words | Longer, structured |
| **Ticket references** | None | Specific tickets (WF-001, WF-002) |
| **Technical context** | Absent | Full dependency chain explained |
| **Decisions** | Absent | ADR-003 referenced with rationale |
| **Blocker language** | "Watch item" | Specific: WF-003 blocked on WF-002 + meeting |
| **Ask** | "No action needed yet" | "Flag to me by Wednesday" |

The underlying status is identical. The language is entirely different.

## Decision Documentation: ADR Format

When you make a significant product decision — like deferring the audit log to Sprint 2 — document it in the engineering update using the ADR (Architecture Decision Record) format:

```
# ADR-003: Defer audit log (WF-007) to Sprint 2

## Status
Accepted

## Context
Sprint 1 loaded at 97% of capacity after capacity calculations
(Leo's PTO + contractor ramp). WF-007 is a P2 stretch item.
Sprint goal is the trigger config UI — WF-007 does not affect
the sprint goal.

## Decision
Defer WF-007 to Sprint 2. Re-score in L10's prioritised backlog
before Sprint 2 planning.

## Consequences
- Sprint 1 load reduced to 87% (safe range)
- Admin audit log visible to enterprise prospects delayed 2 weeks
- Sprint 2 backlog will need WF-007 alongside Workflow Builder Sprint 2 items
```

ADRs give future engineers (and future you) the context to understand why things were done the way they were. They are the difference between a team that revisits the same decision four times and one that builds on its own history.

:::note Keep This File
The stakeholder update workflow you practise in this exercise is automated in Lesson 14 by the Stakeholder Update Agent — which generates the same three versions automatically every Friday and queues them for your review.
:::

## Try With AI

Use these prompts in Cowork or your preferred AI assistant.

**Prompt 1 — Reproduce** (apply what you just learned):

```
Generate a weekly executive stakeholder update for InsightFlow Sprint 1.

Status: Yellow (watch item)
Sprint goal: Ship trigger config UI so design can start user testing

Progress:
- WF-001: Auth integration design: DONE
- WF-002: Trigger config data model: in progress, on track
- WF-003: Trigger UI: not started (waiting on WF-002 as planned)
- WF-005: Error handling: in progress

Watch item:
Platform team review meeting for auth handoff not yet scheduled.
If not resolved by Wednesday, WF-003 start slips 2-3 days.
PM is following up today.

Constraints:
- Executive update must be under 200 words
- Include status color, TL;DR, progress bullets, watch item, next milestone
- No ticket numbers or technical implementation detail
```

**What you're learning:** Producing the executive version — the compression exercise that forces you to decide what the CEO actually needs to know versus everything you could say.

**Prompt 2 — Adapt** (change the context):

```
A feature is delayed. Write a stakeholder update for three audiences
from the same underlying facts:

Situation: InsightFlow's workflow automation feature (Q3 commitment)
will be 2 weeks late. Root cause: one of two engineers assigned to
the initiative on extended medical leave; contractor ramping up
but 1.5 weeks slower than expected.
New delivery date: 2026-04-17 (was 2026-04-03).
Customer commitments: 3 enterprise deals depend on Q3 delivery.

Write:
1. Executive version (status: Red, ask for no action yet but heads up)
2. Engineering version (practical context, what changes in Sprint 2)
3. Customer-facing version for CS to share (no internal detail,
   customer-friendly language)

For each version, apply ROAM to the delay risk:
Is it Resolved / Owned / Accepted / Mitigated?
```

**What you're learning:** The hardest stakeholder communication scenario — a delay with customer commitments. ROAM forces you to be specific about what is being done rather than vague ("we are working on it").

**Prompt 3 — Apply** (connect to your domain):

```
Think of a current or recent product update you need to communicate.
It can be a sprint status, a feature launch, a delay, or a risk
you want to escalate.

Write two versions:
1. Executive / leadership version — under 200 words, lead with status
   color and TL;DR, include one risk with ROAM classification
2. Engineering team version — include specific items, blockers,
   decisions made, and what is coming next

Then compare: what content appears in the engineering version that
would not belong in the executive version? What does that tell you
about your mental model of these two audiences?
```

**What you're learning:** The transfer exercise — applying audience calibration to your real communication context. The comparison question builds the habit of checking calibration before sending.

## Exercise: Draft InsightFlow Sprint 1 Stakeholder Updates

**Plugin:** Official product-management
**Command:** `/stakeholder-update`
**Time:** 25 minutes

**Step 1 — Establish the status picture**

Before running the command, decide: what is the honest status for InsightFlow Sprint 1? Given the watch item (auth review meeting not scheduled), what is your G/Y/R assessment? Apply the rule: move to Yellow at the FIRST sign of risk, not when you are certain something will go wrong.

**Step 2 — Generate the executive update**

```
/stakeholder-update weekly, executive audience

Context: InsightFlow, Workflow Builder Sprint 1, Week 1 of 2.
Status: [your G/Y/R assessment]

Progress since last update:
- WF-001 auth integration design: complete
- WF-002 trigger data model: in progress, on track
- WF-003 trigger UI: not started (blocked on WF-002 — as planned)
- WF-005 error handling: Leo back from PTO early, in progress
- Contractor for on-call coverage: ramped successfully

Watch item: auth service review meeting not yet scheduled.
PM following up. If unresolved by Wednesday, WF-003 start
could slip 2-3 days. Confidence in sprint goal: moderate-high.

Sprint goal: Ship trigger config UI so design can start user testing
by sprint end (2026-04-03).
```

**Step 3 — Generate the engineering update**

Run the same command with engineering audience:

```
/stakeholder-update weekly, engineering team

[Same status context]
Additional for engineering:
- ADR-003: audit log (WF-007) deferred to Sprint 2 (capacity constraint)
- WF-003 start depends on: WF-002 completion + auth review meeting
- Leo on WF-005 — full capacity, no PTO remaining
- Dmitri (on-call secondary): available for WF-006 after on-call ends Wednesday
```

**Step 4 — Compare the two outputs**

Write down at least five specific content differences between the executive and engineering versions. For each difference, identify WHY it belongs in one version but not the other.

Check specifically:
- Does the executive version contain ticket numbers? (It should not)
- Does the engineering version contain ADR reference and decision context? (It should)
- Is the executive version under 250 words? (It should be)
- Does each version apply ROAM correctly to the watch item?

**Step 5 — Extend: write the customer-facing version**

Draft the customer-facing version for James Wilson (Head of CS) to distribute. This version should:
- Confirm Workflow Builder is on track for Q3
- Use customer-facing language (no internal ticket references, no "sprint" terminology)
- Be under 100 words
- Include a forward-looking sentence about what customers can expect next

## What You Built

You produced three audience-calibrated stakeholder updates about InsightFlow Sprint 1 — all from the same underlying status data. The executive version leads with status and TL;DR, flags the watch item without creating alarm, and asks for nothing. The engineering version gives the team the technical context they need: decisions, blockers, priorities, and what is coming next. The customer-facing version confirms the commitment in customer language.

You also applied ROAM to the auth review meeting risk, moving it from vague concern to a classified risk with an owner and resolution timeline.

These three update templates are what the Stakeholder Update Agent in Lesson 14 will generate automatically every Friday — queued for your review before distribution.

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 13: Metrics, OKRs & Product Analytics →](./13-metrics-okrs-product-analytics.md)
