---
sidebar_position: 14
title: "Reactive Agents and Sequence State Machines"
description: "Deploy the outreach-sequencing-agent as an event-driven state machine with branch conditions for reply, bounce, and unsubscribe events, enforce Five Laws under automation, and define human approval gates"
keywords:
  [
    "outreach-sequencing-agent",
    "state machine",
    "event-driven agent",
    "reactive agent",
    "branch conditions",
    "reply handling",
    "bounce handling",
    "unsubscribe",
    "stop rules",
    "Five Laws automation",
    "human approval gate",
    "sequence automation",
  ]
chapter: 23
lesson: 14
duration_minutes: 25

# HIDDEN SKILLS METADATA
skills:
  - name: "Design a Sequence State Machine with Branch Conditions"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can draw a complete state machine diagram with states, transitions, branch conditions (reply/bounce/unsubscribe), and human approval gates"

  - name: "Evaluate Five Laws Compliance Under Automation"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Communication and Collaboration"
    measurable_at_this_level: "Student can trace Five Laws compliance across 5 automated touches and identify the point where Law 1 (Specific Verifiable Reference) degrades to generic"

  - name: "Define Stop Rules and Human Approval Gates"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Safety"
    measurable_at_this_level: "Student can define explicit stop conditions (negative response, bounce, unsubscribe, non-response threshold) and human approval gates where automation pauses for review"

learning_objectives:
  - objective: "Design a state machine for the outreach-sequencing-agent with states, transitions, and branch conditions"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Student produces a state machine diagram with at least 5 states, 3 branch conditions, and 2 stop conditions"

  - objective: "Evaluate Five Laws compliance across 5 automated touches and identify personalization decay"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Student audits a 5-touch automated sequence and identifies the touch where Law 1 degrades, with specific evidence"

  - objective: "Define stop rules and human approval gates for automated outreach sequences"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Student defines 3+ stop conditions and 2+ approval gates with clear trigger criteria"

cognitive_load:
  new_concepts: 6
  concepts_list:
    - "Event-driven agent (reacts to events, not schedules)"
    - "State machine (states + transitions + branch conditions)"
    - "Branch conditions (reply → pause, bounce → switch channel, unsubscribe → stop)"
    - "Human approval gates (points where automation pauses for review)"
    - "Law 1 decay under automation (personalization degrades over touches)"
    - "Stop rules as safety mechanism (when to halt automation entirely)"
  assessment: "6 concepts at B2 level. State machine is the core architectural concept. Five Laws under automation connects back to L04. Stop rules connect to Over-Automation from L05."

differentiation:
  extension_for_advanced: "Design a state machine with conditional branching based on ENGAGEMENT signals (not just responses). If the prospect opens email #2 but doesn't reply, does that change the channel for #3? If they visit the website after #3, does that accelerate #4? Design engagement-aware branching."
  remedial_for_struggling: "Focus on the basic state machine: New → Touch 1 → Waiting → [Reply: Pause] / [No Reply: Touch 2] / [Bounce: Stop]. If you can draw this diagram and explain each transition, you have the foundation."
---

# Reactive Agents and Sequence State Machines

In Lesson 13, you deployed agents that wake on schedule, gather data, and produce reports. The `outreach-sequencing-agent` works differently. It does not run at 7:00 AM. It does not produce a report. It listens for events -- a reply landing in the inbox, an email bouncing, a prospect clicking unsubscribe -- and it decides what to do next based on what just happened. This is an **event-driven agent**: instead of executing a predetermined script, it reacts to the world in real time and branches through a set of defined states.

The architecture underneath this agent is a **state machine**. A state machine is a system with a defined set of states (New, Waiting, Paused, Stopped, Completed), a set of transitions between those states (reply received, no reply after 3 days, bounce detected), and **branch conditions** that determine which transition fires when multiple events are possible. The prospect is always in exactly one state. Events move them between states. The state machine cannot skip states or occupy two at once. That constraint is what makes it safe enough to automate.

This lesson teaches you to design the state machine, evaluate what happens to the Five Laws when that machine runs without a human watching each touch, and build the safety layer -- **stop rules** and **human approval gates** -- that separates professional automated outreach from reputation-destroying spam.

## Schedule-Driven vs Event-Driven

In Lesson 13, the morning-briefing agent operates on a timer. It runs at 7:00 AM regardless of what happened yesterday. Nothing the prospect does between briefings changes when the agent fires. That is a **schedule-driven** agent.

The `outreach-sequencing-agent` is the opposite. It has no fixed schedule. It waits for something to happen, then responds. The "something" is one of five event types:

| Event | What Happened | Agent Response |
|-------|--------------|----------------|
| **Reply (positive)** | Prospect responds with interest | Pause sequence, notify rep, prepare follow-up brief |
| **Reply (negative)** | Prospect says "not interested" or "stop" | Halt sequence permanently, mark in CRM |
| **No reply** | Waiting period expires with no response | Advance to next touch |
| **Bounce** | Email delivery failed | Switch channel or halt, depending on prospect value |
| **Unsubscribe** | Prospect clicks opt-out link | Halt immediately, flag for compliance |

A schedule-driven agent asks: "What time is it?" An event-driven agent asks: "What just happened?" That question changes everything about how the agent is designed, tested, and governed.

## The State Machine for a 5-Touch Sequence

Draw this on paper or a whiteboard. Every prospect entering the `outreach-sequencing-agent` moves through this state machine:

```
┌─────────┐
│   New   │
└────┬────┘
     │ (agent sends Touch 1: Email)
     ▼
┌──────────┐   reply (positive)    ┌──────────┐
│ Waiting  │ ────────────────────► │  Paused  │
│ (3 days) │                       │ (human   │
│          │   reply (negative)    │  reviews)│
│          │ ────────────────────► ┌──────────┐
│          │                       │ Stopped  │
│          │   unsubscribe         │(permanent│
│          │ ────────────────────► │ + CRM)   │
│          │                       └──────────┘
│          │   bounce
│          │ ────────────────────► ┌───────────┐
│          │                       │  Channel  │
│          │                       │  Switch   │
│          │   no reply (3 days)   └─────┬─────┘
└────┬─────┘                             │
     │                                   │
     ▼                                   ▼
┌──────────┐                    (sends Touch 2 on
│ Touch 2  │◄───────────────── alternate channel)
│(LinkedIn)│
└────┬─────┘
     │ (enters Waiting: 5 days)
     ▼
┌──────────┐   reply / negative / unsub / bounce
│ Waiting  │ ───────────────────► [same branches]
│ (5 days) │
│          │   no reply (5 days)
└────┬─────┘
     │
     ▼
┌──────────┐
│ Touch 3  │ (Email: value-add content)
│          │
└────┬─────┘
     │ (enters Waiting: 5 days)
     ▼
   [same branch pattern repeats]
     │
     ▼
┌──────────┐
│ Touch 4  │ (WhatsApp or LinkedIn)
└────┬─────┘
     │ (enters Waiting: 7 days)
     ▼
┌──────────┐
│ Touch 5  │ (Breakup email)
└────┬─────┘
     │
     ▼
┌───────────┐
│ Completed │
└───────────┘
```

Seven states: New, Waiting (repeated), Paused, Stopped, Channel Switch, Touch N, Completed. Five event types trigger transitions. Every state has exactly one exit for each possible event. No ambiguity. No "it depends." The machine is deterministic -- given a state and an event, the next state is always the same.

That determinism is the safety property. When a prospect unsubscribes, the machine transitions to Stopped regardless of which state it is in. There is no path from Unsubscribe that leads anywhere except Stopped. You can audit this by tracing every transition and confirming that the unsubscribe event always terminates the sequence.

## Walking Through NexaFlow: Event by Event

NexaFlow Technologies in Karachi. Prospect: Tariq Mahmood, Director of Engineering. The `outreach-sequencing-agent` begins.

**State: New.**
The agent sends Touch 1 -- a cold email referencing NexaFlow's Series B announcement and three DevOps roles posted this week. The research brief from Lesson 1 feeds the personalisation. Law 1 (Specific Verifiable Reference) is strong: the Series B date and the job postings are both verifiable. The prospect transitions to Waiting (3 days).

**State: Waiting (3 days).**
Three days pass. No reply, no bounce, no unsubscribe. The "no reply" timer expires. Transition: Waiting → Touch 2.

**State: Touch 2 (LinkedIn).**
The agent sends a LinkedIn connection request referencing the email and adding a new insight about route optimisation costs in Lahore expansion markets. Law 1 is maintained because the Lahore expansion is a different verifiable reference. Transition to Waiting (5 days).

**State: Waiting (5 days).**
Day 2. Tariq accepts the LinkedIn connection request but does not reply. This is an **engagement signal** -- not a reply. The basic state machine has no transition for this event. The agent stays in Waiting. Should a connection acceptance accelerate the next touch? Change the channel? That is a design decision you will make for your own machine later.

Day 5 expires. No reply. Transition: Waiting → Touch 3.

**State: Touch 3 (Email: value-add).**
The agent sends a case study about Meridian Logistics reducing expansion route costs by 31% in 90 days. Different reference from touches 1 and 2. Transition to Waiting (5 days).

**State: Waiting (5 days).**
Day 3. The agent detects a reply from Tariq:

> "Thanks for sharing the Meridian case study. We are not evaluating vendors right now, but I have forwarded it to our VP of Logistics. Can you send more detail on the Lahore-specific route density analysis?"

This is a **positive-but-delayed reply**. The state machine transitions to Paused. The agent halts all remaining touches, generates a notification to the rep, and prepares a follow-up brief based on the reply content. Touches 4 and 5 are cancelled. The sequence does not resume until the rep makes a decision.

**State: Paused (human review).**
Tariq is interested but not buying. A new stakeholder (VP of Logistics) has entered the picture. The rep has three options: (1) send the Lahore analysis and set a Q2 re-engagement trigger, (2) propose a call including the VP, or (3) move NexaFlow to a nurture track. The `outreach-sequencing-agent` presents these options and drafts whichever the rep selects. The judgment -- which option fits this relationship -- belongs to the human. This is the **human approval gate**: automation pauses and a person decides.

## The Meridian Path: Bounce and Channel Switch

Different prospect, different path through the same state machine. Meridian Logistics in London. Prospect: Claire Whitfield, Director of Supply Chain Operations.

**State: New → Touch 1 (Email).**
The agent sends a cold email referencing Meridian's BrightPath acquisition announced in Q3 and the supply chain consolidation challenges that follow logistics mergers. Law 1: strong. Transition to Waiting (3 days).

**State: Waiting (3 days).**
Day 1. The agent detects an event: email bounce. Claire's email address returned a 550 permanent failure -- the address does not exist. Transition: Waiting → Channel Switch.

**State: Channel Switch.**
The agent evaluates the prospect's value. Claire is scored HOT (87/100) based on the scoring from Lesson 3. For a HOT prospect, the agent does not stop -- it switches to an alternate channel. The agent sends Touch 2 on LinkedIn instead of waiting for the original schedule. The bounce event triggered an immediate channel pivot.

For a WARM prospect (60-75), the agent would still switch channels. For a COLD prospect (below 60), the agent would transition directly to Stopped -- the bounce suggests bad data, and a low-value prospect with bad contact information is not worth the channel switch.

| Prospect Score | Bounce Response | Reasoning |
|----------------|----------------|-----------|
| **HOT (80+)** | Switch channel immediately | High-value prospect worth the extra effort |
| **WARM (60-79)** | Switch channel, extend cadence by 3 days | Worth trying but not urgent |
| **COLD (<60)** | Stop sequence, flag for data team | Bad data on a low-value prospect -- cut losses |

This is a **branch condition** that depends on data from outside the state machine. The machine's events (bounce, reply, no-reply) are internal. The prospect's score is external context that changes how the machine responds to the same event. The agent pulls the score from the CRM record to decide which branch to follow.

**State: Touch 2 (LinkedIn, after bounce).**
The agent sends a LinkedIn message referencing the acquisition and noting transparently that the email did not go through. Meanwhile, it notifies the data team to verify Claire's email. By Touch 3 five days later, the data team has found the correct address. The state machine absorbed a data quality failure without losing the prospect.

## Five Laws Under Automation: The Freshness Problem

In Lesson 4, you built the Five Laws as an audit framework for single messages. In Lesson 5, you applied them across a 5-touch manual sequence and watched Law 1 decay as touches progressed. Now the `outreach-sequencing-agent` runs those touches without a human reviewing each one. The Five Laws still apply. But automation introduces a problem that manual sequences do not have: **freshness decay**.

When a rep sends each touch by hand, they research before writing. They check the prospect's LinkedIn for new activity. They scan the news for company developments. Each touch gets a fresh research pass. The rep's research brief from Lesson 1 is a starting point, not a ceiling.

When the `outreach-sequencing-agent` runs the sequence, it uses the research brief that was current at the start. Touch 1 fires with a reference to "NexaFlow's Series B announcement on March 3rd." Touch 5 fires 18 days later. In those 18 days, NexaFlow may have posted about a product launch, hired a new CTO, or announced a partnership. Touch 5 still references the March 3rd Series B because the agent does not re-research between touches.

Here is what that looks like across the five touches:

| Touch | Day | Law 1 Source | Freshness | Risk |
|-------|-----|-------------|-----------|------|
| **#1** | 0 | Research brief (current) | Fresh -- researched today | Low |
| **#2** | 3 | Research brief (3 days old) | Adequate -- 3 days is unlikely to change | Low |
| **#3** | 8 | Research brief (8 days old) | Degrading -- prospect may have published new content | Medium |
| **#4** | 15 | Research brief (15 days old) | Stale -- two weeks without refresh | High |
| **#5** | 22 | Research brief (22 days old) | Expired -- references feel dated | High |

At Touch #1, Law 1 is robust. The Series B reference is three days old at most. The prospect can verify it immediately.

By Touch #4, the reference is fifteen days old. The prospect has published new LinkedIn content, attended a conference, and perhaps announced a hire. Your agent's message references events from two weeks ago while the prospect's world has moved on. Law 1 is technically still specific and verifiable -- the Series B did happen on March 3rd. But it no longer demonstrates current awareness. The prospect thinks: this person researched me once and then stopped paying attention. That is the opposite of what Law 1 is designed to signal.

This is **Law 1 decay under automation**. Not a violation -- the reference remains factual. But a degradation -- the reference no longer carries the trust signal that earned the first reply. Manual outreach avoids this because the rep naturally updates their knowledge before each touch. The automated agent does not.

### Addressing the Freshness Problem

| Approach | How It Works | Freshness | Best For |
|----------|-------------|-----------|----------|
| **Short sequences** | Cap at 3-4 touches over 8-10 days. Re-enter with fresh research in 30-60 days. | Adequate | WARM prospects, thin research |
| **Midpoint re-research** | After Touch 3, run a lightweight `/research-prospect` refresh before Touch 4. | Strong | Enterprise targets, high-value |
| **Engagement-triggered refresh** | Prospect opens email or visits website → re-research before next touch. | Maximum | Strategic accounts with tracking |

NexaFlow uses short sequences for WARM prospects. Meridian uses midpoint re-research for enterprise targets where each touch represents significant relationship investment. Choose based on the prospect's value: a HOT enterprise target where you are investing $5,000 in ABM (from Lesson 8) justifies engagement-triggered refresh. A WARM prospect with a thin brief does not.

## Over-Automation in State Machine Context

In Lesson 5, you learned Over-Automation as the agent error type where the agent keeps sending messages after the prospect has signalled they are not interested. With a state machine, Over-Automation means one of two things: either the machine's transitions are broken, or the machine's stop rules are missing.

### Broken Transition: NexaFlow Failure Case

The `outreach-sequencing-agent` sends Touch 1 and Touch 2 to Tariq at NexaFlow. After Touch 2, Tariq replies:

> "Not interested. Please don't contact me again."

This is a negative reply. In the correct state machine, this event transitions the prospect from Waiting to Stopped -- permanently. The agent halts. The CRM records the opt-out. No further touches.

Now imagine the agent's event listener fails to process this reply. The reply sits in the inbox but the state machine never receives the event. Three days pass. The "no reply" timer expires. The machine transitions from Waiting to Touch 3. Tariq receives a third message after explicitly declining.

This is Over-Automation caused by a broken transition. The state machine's logic is correct -- negative reply maps to Stopped. But the event did not reach the machine. The failure is in the event detection layer, not the state machine logic.

**The diagnostic question:** When Over-Automation happens, ask: was the transition wrong, or was the event lost? If the transition is wrong, fix the state machine design. If the event was lost, fix the event detection pipeline.

### Missing Stop Rule: Meridian Failure Case

Claire Whitfield at Meridian receives all five touches. Zero engagement -- no opens, no clicks, no replies. Sequence marked "Completed." Six weeks later, the agent starts a new sequence. Then another. After three cycles, Claire has received fifteen messages with zero response.

The state machine is correct within each sequence. But no cross-sequence rule says: "Two completed sequences with zero engagement across all touches means stop." The machine lacks memory across sequences.

**The fix: sequence-level stop rules.**

| Cross-Sequence Rule | Trigger | Action |
|---------------------|---------|--------|
| Zero engagement after 2 completed sequences | 10 touches with no opens, clicks, or replies | Move to "Do Not Contact" for 6 months |
| Repeated bounces across sequences | Email bounced in 2+ sequences | Remove from active pipeline, flag for data cleanup |
| Industry opt-out | Prospect's company has a formal "no solicitation" policy | Permanent Do Not Contact |

These rules sit above the state machine. They evaluate the prospect's history across all sequences, not just the current one. Without them, a correct state machine can still produce Over-Automation at scale.

## Human Approval Gates

A **human approval gate** is a state where the machine pauses and waits for a person to approve, modify, or reject the next action. Not every transition should be automatic. Some carry reputational risk that outweighs the efficiency of automation.

### Where to Place Approval Gates

| Gate | Trigger | Why Human Decides |
|------|---------|-------------------|
| **Positive reply** | Prospect responds with interest, question, or objection | The reply content determines the next action. A question about pricing needs a different response than a request for a technical demo. Automated replies to nuanced questions feel robotic. |
| **Negative-ambiguous reply** | Prospect says "not now" instead of "not interested" | "Not now" could mean "try again in Q2" or "stop forever." The agent cannot tell the difference. A human reads the tone and decides. |
| **Channel switch for HOT prospect** | Email bounces for a prospect scored 80+ | Switching to LinkedIn or WhatsApp for a high-value prospect is a strategic decision. The automated channel switch should be confirmed because the rep may have intelligence the agent lacks. |
| **Re-entry after cooling period** | Prospect re-enters the sequence after 90+ days | The original research brief is expired. Before restarting outreach, a human should verify the prospect is still relevant and the ICP criteria still apply. |

### What the Gate Looks Like in Practice

Tariq at NexaFlow replies to Touch 3:

> "Interesting. We are not evaluating this quarter, but can you send more on the Lahore route density work?"

The state machine transitions to Paused. The `outreach-sequencing-agent` generates a notification:

```
HUMAN APPROVAL REQUIRED
─────────────────────────────────────────────
Prospect:   Tariq Mahmood, NexaFlow Technologies
State:      Paused (awaiting human decision)
Trigger:    Positive reply to Touch 3

Reply content:
"Interesting. We are not evaluating this quarter,
but can you send more on the Lahore route density work?"

Recommended actions:
  [A] Send Lahore analysis + set Q2 re-engagement trigger
  [B] Propose a 15-minute call to scope the analysis
  [C] Move to nurture sequence (monthly value content)

Select action or provide custom response: ___
─────────────────────────────────────────────
```

The agent presents three options based on the reply content. Option A addresses the explicit request. Option B attempts to accelerate. Option C de-escalates. The rep chooses based on relationship context, deal priority, and pipeline capacity -- factors the agent cannot weigh.

The rep selects. The machine exits Paused and executes. Thirty seconds of human attention prevents the kind of automated response that turns a warm prospect cold.

## Designing Your State Machine

Six steps. Work through them for your own sales process.

**Step 1: Define your states.** Start with five: New, Waiting, Paused, Stopped, Completed. Add Channel Switch if you use multi-channel sequences. Add Nurture if positive-but-delayed replies need a separate track. Do not add states "just in case" -- every state must have clear entry and exit conditions.

**Step 2: Define your events.** Be exhaustive: reply (positive), reply (negative), reply (ambiguous), no reply (timer expired), bounce (permanent), bounce (temporary), unsubscribe, engagement signal (open, click, visit), external signal (prospect in the news). For each, decide: does it trigger a transition, or is it informational only?

**Step 3: Map transitions.** Build the table. For every combination of state and event, define the next state:

| Current State | Reply (+) | Reply (-) | No Reply | Bounce | Unsubscribe |
|---------------|-----------|-----------|----------|--------|-------------|
| **Waiting** | Paused | Stopped | Next Touch | Channel Switch | Stopped |
| **Paused** | Paused | Stopped | Paused | N/A | Stopped |
| **Channel Switch** | Paused | Stopped | Next Touch | Stopped | Stopped |
| **Completed** | Re-engage | N/A | N/A | N/A | N/A |

Unsubscribe always maps to Stopped, regardless of current state. Compliance is not conditional.

**Step 4: Place approval gates.** Mark transitions with reputational risk: positive reply (human reviews content), ambiguous reply (human interprets intent), channel switch for HOT prospects (human confirms strategy), re-engagement after cooling period (human verifies relevance). Gates cost 30-60 seconds. That is less than the cost of one wrong automated reply.

**Step 5: Define stop rules.** Write these before you configure the agent:

1. **Immediate stop:** Negative reply, unsubscribe, "do not contact"
2. **Threshold stop:** Zero engagement after N touches (3 for cold, 5 for warm)
3. **Cross-sequence stop:** Zero engagement across 2 complete sequences
4. **Compliance stop:** Jurisdiction change requiring updated opt-out template
5. **Data quality stop:** Bounce on all known channels

**Step 6: Configure and test.**

Set up the `outreach-sequencing-agent` with your state machine. Run a test sequence on a prospect you control (a colleague's email, a test account):

```
Configure the outreach-sequencing-agent with the following state machine:

States: New, Waiting, Paused, Stopped, Channel Switch, Completed
Events: reply-positive, reply-negative, reply-ambiguous, no-reply,
        bounce-permanent, bounce-temporary, unsubscribe, engagement-signal

Transitions:
- Waiting + reply-positive → Paused [GATE: human reviews]
- Waiting + reply-negative → Stopped [immediate, no gate]
- Waiting + no-reply → Next Touch [automatic]
- Waiting + bounce-permanent → Channel Switch (HOT) or Stopped (COLD)
- Waiting + unsubscribe → Stopped [immediate, all states]

Stop rules:
- Zero engagement after 3 touches → Pause for human review
- Negative reply at any point → Stop permanently
- Cross-sequence: 2 completed sequences with zero engagement → Do Not Contact

Approval gates:
- All positive replies
- All ambiguous replies
- Channel switch for prospects scored 80+
```

Send the test sequence. After Touch 1, simulate each event type: reply from the test account, simulate a bounce by using an invalid address, simulate no-reply by waiting for the timer. Verify that each transition fires correctly. Verify that the approval gates pause the machine. Verify that the stop rules halt when they should.

## Failure Analysis: Two Broken Machines

### Failure A: The Machine That Ignored a Reply

NexaFlow's `outreach-sequencing-agent` is running a sequence for a prospect in the Gulf. The prospect replies after Touch 2:

> "We are already in contract with a competitor for this service. Please remove me from your list."

Touch 3 fires on Day 8. Touch 4 fires on Day 15. The prospect forwards Touch 4 to their legal team with the comment: "This company is spamming me after I told them to stop."

**Diagnosis:** The event detection layer did not classify this reply correctly. "Please remove me from your list" is a negative reply containing an explicit removal request. But the keyword matching was configured to look for "unsubscribe" and "stop contacting me" -- it did not match "remove me from your list." The reply was classified as "general reply" and the state machine treated it as an engagement signal rather than a stop trigger.

**Root cause:** Brittle keyword matching. Natural language has dozens of ways to say "stop contacting me." The event classifier needs to handle: "not interested," "remove me," "take me off your list," "don't email me again," "we are not a fit," "please stop," "opt out," and variations thereof.

**Fix:** The event classifier should flag any reply containing negative sentiment for human review rather than attempting to classify it automatically. The approval gate catches what keyword matching misses.

### Failure B: The Machine That Never Stopped

Meridian runs the `outreach-sequencing-agent` across 200 UK prospects. Three months later, a sales manager finds 47 prospects who received three full sequences (15 touches each) with zero engagement. That is 2,115 messages sent to people showing zero interest.

**Diagnosis:** The state machine correctly completed each sequence. The re-entry logic correctly started new sequences. But no cross-sequence stop rule existed. The machine re-entered indefinitely. At a 0.2% spam complaint rate, 2,115 messages generate approximately 4 spam complaints -- enough to damage sender reputation and degrade deliverability for the 153 prospects who might have engaged.

**Fix:** Two completed sequences with zero engagement triggers Do Not Contact. If 10 messages produced zero signal, the 11th will not either.

## Try With AI

Use these prompts in Claude or your preferred AI assistant.

**Prompt 1: Design Your State Machine**

```
I run outreach sequences for [your product/service] targeting
[your prospect type] in [your market].

Design a state machine for my outreach-sequencing-agent:

1. Define the states my prospects move through
2. List every event type that should trigger a transition
3. Build the transition table (state + event → next state)
4. Mark which transitions need human approval gates
5. Define stop rules — both within a single sequence and
   across multiple sequences

For each approval gate, explain why a human needs to decide
instead of the agent. For each stop rule, explain what goes
wrong if the rule is missing.

My typical sequence is [N] touches over [N] days using
[channels: email, LinkedIn, WhatsApp, etc.].
```

**What you are learning:** State machine design forces you to think about every possible event your sequence can encounter. Most outreach automation fails because it handles the happy path (no reply → next touch) but breaks on edge cases (ambiguous reply, bounce on one channel, engagement without reply). Designing the full transition table exposes the edge cases before they damage a real prospect relationship.

**Prompt 2: Audit Five Laws Under Automation**

```
Here is a 5-touch outreach sequence my agent generated:

[Paste your sequence or describe the 5 touches with channels,
timing, and key references in each touch]

Audit each touch against Law 1 (Specific Verifiable Reference):

1. Is the reference in each touch still specific and verifiable?
2. At which touch does the reference become stale?
3. How many days old is the original research by each touch?
4. Which touches could be sent to a different prospect without
   changes? (Those touches have Law 1 decay.)
5. For each decayed touch, suggest a way to refresh it --
   either with new research or by reframing existing research
   from a new angle.

Finally: should this sequence be 5 touches or fewer? What is
the minimum number of touches before the research goes stale?
```

**What you are learning:** Automation reveals the shelf life of your research. Manual outreach hides freshness decay because reps naturally update their knowledge between touches. Automated sequences expose exactly when your intelligence goes stale. This audit builds the discipline of treating research as a perishable asset with an expiration date, not a permanent reference that justifies unlimited follow-ups.
