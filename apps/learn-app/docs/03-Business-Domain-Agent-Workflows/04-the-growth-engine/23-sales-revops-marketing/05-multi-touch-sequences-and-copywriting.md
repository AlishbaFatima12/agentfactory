---
sidebar_position: 5
title: "Multi-Touch Sequences and Copywriting"
description: "Build multi-touch outreach sequences with /build-sequence, maintain Five Laws discipline across every touch, evaluate copywriting variants, manage follow-up responses, and recognise when automation should stop"
keywords:
  [
    "multi-touch sequence",
    "build-sequence",
    "outreach sequence",
    "copywriting skill",
    "follow-up skill",
    "sequence skill",
    "over-automation",
    "channel mixing",
    "WhatsApp B2B",
    "Five Laws audit",
    "stop rules",
    "touch cadence",
  ]
chapter: 23
lesson: 5
duration_minutes: 20

# HIDDEN SKILLS METADATA
skills:
  - name: "Build and Evaluate Multi-Touch Sequences"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can use /build-sequence to generate a 5-touch sequence, audit each touch against Five Laws, evaluate channel mixing, and identify where personalization degrades"

  - name: "Evaluate Copywriting Variants Against Five Laws"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can generate 3 variants using the copywriting skill, rank them against Five Laws, and select the strongest with specific reasoning"

  - name: "Diagnose Over-Automation in Sequences"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Safety"
    measurable_at_this_level: "Student can identify when a sequence should have stopped (non-response, negative response, unsubscribe) and propose stop rules"

learning_objectives:
  - objective: "Use /build-sequence to generate a multi-touch outreach sequence and audit each touch against the Five Laws for personalization decay"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student generates a 5-touch sequence and annotates each touch with law-by-law compliance, identifying where Law 1 (Specific Verifiable Reference) degrades"

  - objective: "Generate and rank copywriting variants for outreach touches using the copywriting skill"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Student produces 3 variants for touch #1, ranks them with Five Laws reasoning, and selects the best"

  - objective: "Identify over-automation in sequences and define stop rules for when automated outreach should pause or end"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Given a sequence with a non-responding prospect, student identifies which touch should have been the last and proposes 3 stop conditions"

cognitive_load:
  new_concepts: 7
  concepts_list:
    - "Multi-touch sequence as structured campaign (7-12 touches typical in B2B)"
    - "Over-Automation as an agent error type"
    - "Channel mixing (email, LinkedIn, WhatsApp) within a sequence"
    - "Law 1 decay across touches (personalization gets generic over time)"
    - "Stop rules (when to halt automated outreach)"
    - "Follow-up skill for response handling"
    - "Copywriting variants as testable alternatives"
  assessment: "7 concepts at B1 level. Over-Automation is the key new diagnostic concept. The rest build on the Five Laws foundation from L04."

differentiation:
  extension_for_advanced: "Build two parallel sequences for the same prospect: one email-only, one mixed-channel (email + LinkedIn + WhatsApp). Compare Five Laws compliance across both. Which maintains Law 1 better? Design stop rules that differ by channel."
  remedial_for_struggling: "Focus on building a 3-touch sequence with /build-sequence and auditing Law 1 across all touches. If you can identify where personalization degrades, you have the core insight."
---

# Multi-Touch Sequences and Copywriting

In Lesson 4, you built the Five Laws framework for evaluating single outreach messages. Now you will apply those laws across an entire **multi-touch sequence** -- a planned series of messages delivered across days and channels to move a prospect from unaware to engaged. The challenge is not sending more messages. The challenge is maintaining Five Laws discipline from touch #1 through touch #5 when the temptation to go generic grows with every follow-up.

This lesson introduces a new agent error type: **Over-Automation**. In Lesson 1, you diagnosed Hallucinated Data. In Lesson 3, Miscalibrated Scoring. In Lesson 4, Compliance Gaps. Over-Automation is what happens when an agent keeps sending messages after the prospect has signalled they are not interested -- or has gone silent long enough that continued outreach damages your brand.

## What a Multi-Touch Sequence Looks Like

A **multi-touch sequence** is a structured series of 5-12 outreach messages delivered across multiple channels over a defined time period. In B2B sales, the industry benchmark is 7-12 touches before a prospect responds. Not because prospects are ignoring you -- because they are busy, your first message arrived at the wrong time, and they need multiple exposure points before your name registers.

Each touch in a sequence has three components:

| Component | What It Means | Example |
|-----------|--------------|---------|
| **Channel** | Where the message is delivered | Email, LinkedIn, WhatsApp Business |
| **Cadence** | Days between this touch and the previous one | 3 days, 5 days, 7 days |
| **Intent** | What this specific touch accomplishes | Introduce, add value, request meeting, break up |

The `/build-sequence` command generates all of this from a prospect's research brief. The `sequence` skill handles the structural logic -- channel rotation, cadence spacing, intent progression. The `copywriting` skill generates the actual message text. The `follow-up` skill handles responses that arrive mid-sequence.

## Building a Sequence: NexaFlow Prospect

Let's build a real sequence. NexaFlow Technologies in Karachi has a prospect -- Bilal Asif, VP of Engineering at a logistics SaaS company with 200 employees. The research brief from Lesson 1 identified that his company recently expanded to three Gulf markets, their API response times degraded after the expansion, and Bilal posted on LinkedIn about hiring difficulties for senior backend engineers.

```
/build-sequence NexaFlow-prospect-001 --touches 5 --channels email,linkedin,whatsapp
```

**Output:**

```
SEQUENCE: NexaFlow → Bilal Asif (VP Engineering, LogiTrack)
Generated: 5 touches across 3 channels over 18 days
Research brief: NexaFlow-prospect-001

TOUCH 1 — Email (Day 0)
Subject: Gulf expansion and API latency — a pattern we've solved before
────────────────────────────────────────────────────────────
Bilal,

Your team's expansion into UAE, Saudi Arabia, and Qatar is impressive
— scaling a logistics platform across three regulatory environments
in one quarter takes serious engineering discipline.

I noticed your LinkedIn post about the difficulty of hiring senior
backend engineers in Karachi's current market. That hiring challenge
often compounds when API response times increase after geographic
expansion — which is exactly the pattern our clients in logistics
SaaS hit after crossing the 150ms threshold on cross-region calls.

NexaFlow's edge routing layer reduced P95 latency by 62% for a
freight platform with a similar Gulf expansion. Happy to share the
architecture brief if it's relevant to what your team is facing.

— Saad
NexaFlow Technologies

TOUCH 2 — LinkedIn Connection Request (Day 3)
────────────────────────────────────────────────────────────
Bilal — Saad from NexaFlow. Saw your Gulf expansion work at
LogiTrack. We help logistics SaaS teams solve the latency
problems that follow multi-region launches. Sent you an email
with specifics — happy to connect here too.

TOUCH 3 — Email (Day 8)
Subject: How FreightFlow cut Gulf API latency by 62%
────────────────────────────────────────────────────────────
Bilal,

Following up on my earlier note. I mentioned NexaFlow's work
with a similar Gulf expansion — here is the 2-page architecture
brief showing how FreightFlow reduced cross-region P95 latency
from 340ms to 128ms.

[Link to case study]

The three biggest wins were edge caching for customs API calls,
connection pooling across Gulf endpoints, and async processing
for shipment tracking updates. Each one addressed a bottleneck
that shows up specifically when logistics platforms expand into
GCC markets.

If any of these match what your team is debugging, happy to walk
through the implementation. If the timing isn't right, no
worries at all.

— Saad

TOUCH 4 — WhatsApp Business (Day 12)
────────────────────────────────────────────────────────────
Hi Bilal — Saad from NexaFlow. Shared an architecture brief
on Gulf API latency via email last week. Quick question: is
latency still a priority for your team this quarter, or has
the focus shifted? Either way, happy to help where I can.

TOUCH 5 — Email: Breakup (Day 18)
Subject: Closing the loop
────────────────────────────────────────────────────────────
Bilal,

I have reached out a few times about the Gulf API latency
challenge. I don't want to crowd your inbox, so this will be
my last note on the topic.

If latency reduction becomes a priority later, the architecture
brief is still available — just reply to this thread and I will
send it over.

Wishing your team well with the Gulf expansion.

— Saad
```

### Auditing the Sequence Against the Five Laws

Now the real work begins. The agent generated the sequence. Your job is to evaluate whether each touch maintains Five Laws discipline.

| Touch | Law 1: Specific Reference | Law 2: Problem Framing | Law 3: Credibility Evidence | Law 4: Conciseness | Law 5: Clear CTA |
|-------|--------------------------|----------------------|---------------------------|-------------------|------------------|
| **#1 Email** | Gulf expansion + LinkedIn hiring post + 150ms threshold -- **strong** | API latency after geographic expansion -- **specific** | 62% latency reduction for freight platform -- **concrete** | 4 paragraphs, 127 words -- **within range** | "Happy to share the architecture brief" -- **low-pressure** |
| **#2 LinkedIn** | References Gulf expansion and email -- **adequate** | Latency problems after multi-region launches -- **inherited** | No new evidence -- **acceptable for LinkedIn** | 42 words -- **correct for platform** | "Happy to connect here too" -- **appropriate** |
| **#3 Email** | FreightFlow case study, three specific wins -- **strong** | Same core problem, deeper specifics -- **maintained** | 2-page brief, 340ms→128ms numbers -- **excellent** | 5 paragraphs, 118 words -- **within range** | "Happy to walk through" + graceful exit -- **dual CTA** |
| **#4 WhatsApp** | References email and brief from last week -- **adequate** | "Is latency still a priority this quarter?" -- **checking relevance** | None -- **appropriate for WhatsApp** | 38 words -- **correct for WhatsApp** | Direct question about priority -- **clear** |
| **#5 Breakup** | References previous outreach -- **minimal but appropriate** | Gulf API latency -- **summary only** | Brief still available -- **light reference** | 3 paragraphs, 72 words -- **concise** | "Reply to this thread" -- **clear exit** |

**Key finding:** Law 1 (Specific Verifiable Reference) is strongest in touches #1 and #3, where the email format allows space for detail. It degrades in touches #4 and #5 -- not because the agent failed, but because WhatsApp and breakup messages have legitimate format constraints. This is expected behaviour, not a violation. The question to ask is: does each touch contain the *maximum* specificity that its channel allows?

### Where Law 1 Decay Becomes a Problem

**Law 1 decay** is the gradual loss of prospect-specific references as a sequence progresses. In a well-designed sequence, each touch introduces *new* specific information or reframes existing information from a different angle. In a poorly designed sequence, touches #3-5 recycle the same reference from touch #1 until it feels generic.

Watch for these warning signs:

- Touch #4 says "as I mentioned" without adding new context
- Touch #5 references "my previous emails" without naming what was in them
- Any touch after #2 could be sent to a different prospect without changes

The NexaFlow sequence above avoids the worst decay because touch #3 introduces the FreightFlow case study (new evidence) and touch #4 asks a specific diagnostic question ("is latency still a priority this quarter?"). But touch #5 is close to the line -- it references "the Gulf API latency challenge" without new specificity. This is acceptable for a breakup message. It would not be acceptable for a mid-sequence value-add.

## Channel Mixing: Pakistan vs London

The same sequence looks different in different markets. The NexaFlow prospect in Karachi received WhatsApp Business at touch #4 because WhatsApp is the dominant B2B communication channel in Pakistan. Over 85% of Pakistani businesses use WhatsApp for professional communication, and a WhatsApp message from a vendor is expected and welcome.

Now consider the same sequence for Meridian Logistics in London, where the prospect is Claire Whitfield, Director of Supply Chain Operations.

```
/build-sequence Meridian-prospect-003 --touches 5 --channels email,linkedin
```

Notice the difference: no WhatsApp channel. In the UK B2B market, WhatsApp is personal. Sending an unsolicited WhatsApp Business message to a prospect you have not met feels intrusive. The sequence uses email and LinkedIn only.

**Output (abbreviated):**

```
SEQUENCE: Meridian → Claire Whitfield (Dir. Supply Chain, Meridian)
Generated: 5 touches across 2 channels over 21 days

TOUCH 1 — Email (Day 0)
Subject: Post-acquisition supply chain consolidation — Meridian + BrightPath
...references the BrightPath acquisition announced in Q3, supply chain
integration challenges, and a case study from a similar logistics merger...

TOUCH 2 — LinkedIn (Day 4)
...connection request referencing the acquisition...

TOUCH 3 — Email (Day 10)
...value-add content: 1-page playbook on supply chain consolidation
timelines for logistics companies...

TOUCH 4 — LinkedIn InMail (Day 15)
...references the playbook, asks whether consolidation timeline is
tracking to their Q1 target...

TOUCH 5 — Email: Breakup (Day 21)
...graceful close, offers to reconnect in Q2 if timing shifts...
```

The channel mixing reflects market reality. Both sequences maintain the same Five Laws discipline, but they adapt to how business communication works in each geography.

| Dimension | NexaFlow (Karachi) | Meridian (London) |
|-----------|-------------------|------------------|
| **Channels** | Email + LinkedIn + WhatsApp | Email + LinkedIn only |
| **WhatsApp** | Touch #4 -- expected and welcome | Not included -- would feel intrusive |
| **Cadence** | 18 days total (faster market tempo) | 21 days total (longer decision cycles) |
| **Tone** | Direct, relationship-first | Formal, evidence-first |
| **CTA style** | "Quick question" (conversational) | "If relevant to your timeline" (consultative) |

## Generating Copywriting Variants

Every touch in a sequence can be written multiple ways. The `copywriting` skill generates variants so you can evaluate which version best fits your audience and Five Laws compliance.

Let's generate three variants for touch #1 of the NexaFlow sequence:

```
Activate the copywriting skill. Generate 3 variants for:

Prospect: Bilal Asif, VP Engineering, LogiTrack (Karachi)
Context: Gulf expansion, API latency issues, hiring challenges
Intent: First touch -- introduce NexaFlow, reference research, low-pressure CTA
Constraints: Five Laws compliance required. Max 150 words.
```

**Output:**

**Variant A -- Problem-Led**
```
Subject: The latency problem that follows Gulf expansion

Bilal, logistics platforms that expand into GCC markets almost always
hit an API latency wall between month 3 and month 6. Cross-region
calls to customs APIs, multi-tenant shipment tracking, and connection
pooling across Gulf endpoints create compounding delays that
worsen as transaction volume grows.

NexaFlow helped FreightFlow cut their Gulf P95 latency from 340ms
to 128ms. Happy to share the architecture brief if this matches
what your team is seeing post-expansion.
```

**Variant B -- Research-Led**
```
Subject: Gulf expansion and API latency — a pattern we've solved before

Bilal, your team's expansion into UAE, Saudi Arabia, and Qatar is
impressive — scaling a logistics platform across three regulatory
environments in one quarter takes serious engineering discipline.

I noticed your LinkedIn post about hiring senior backend engineers.
That hiring pressure often compounds when API response times degrade
after geographic expansion. NexaFlow's edge routing reduced P95
latency by 62% for a similar freight platform. Architecture brief
available if relevant.
```

**Variant C -- Social-Proof-Led**
```
Subject: How three logistics SaaS teams solved Gulf API latency

Bilal, we have worked with three logistics SaaS platforms that
expanded into Gulf markets in the last 18 months. All three hit
the same API latency pattern your team is likely facing after
crossing into UAE, Saudi, and Qatar.

The common solution was a three-layer approach: edge caching for
customs calls, connection pooling, and async shipment tracking.
Average P95 improvement was 58%. Happy to share the details if
useful for your roadmap.
```

### Ranking the Variants

| Law | Variant A | Variant B | Variant C |
|-----|-----------|-----------|-----------|
| **Law 1: Specific Reference** | Gulf expansion + latency pattern -- **good** | Gulf expansion + LinkedIn post + hiring -- **strongest** | Gulf expansion + three companies -- **good** |
| **Law 2: Problem Framing** | Latency wall, compounding delays -- **vivid** | Hiring compounds latency -- **insightful** | Same pattern across three clients -- **pattern-based** |
| **Law 3: Credibility** | 340ms→128ms for FreightFlow -- **strong** | 62% reduction -- **strong** | Three companies, 58% average -- **broadest** |
| **Law 4: Conciseness** | 89 words -- **excellent** | 108 words -- **good** | 97 words -- **good** |
| **Law 5: Clear CTA** | "Share the brief" -- **standard** | "Available if relevant" -- **low-pressure** | "Share details if useful" -- **low-pressure** |

**Recommendation:** Variant B is strongest for *this* prospect because it includes the LinkedIn hiring post reference (Law 1), which Bilal can verify independently and which signals genuine research. Variant A is stronger on problem framing but lacks the personal reference. Variant C works best when the prospect values social proof over personalisation.

The key insight: the `copywriting` skill generates options. You make the judgment call based on your Five Laws audit. The agent cannot decide which variant fits your prospect's personality and your relationship context. That is your domain expertise.

## Over-Automation: When the Agent Should Have Stopped

Here is the new diagnostic concept for this lesson. In Lesson 1, you learned to catch Hallucinated Data -- the agent inventing facts that sound plausible. In Lesson 3, Miscalibrated Scoring -- the agent assigning confidence levels that do not match reality. In Lesson 4, Compliance Gaps -- the agent missing jurisdiction-specific legal requirements.

**Over-Automation** is what happens when an agent continues executing a sequence after the prospect has signalled -- through action or inaction -- that further outreach is unwanted.

### The NexaFlow Scenario

Imagine Bilal received touches #1 and #2. He did not open either email. He did not accept the LinkedIn connection request. No engagement signal whatsoever.

The agent, following the sequence plan, sends touch #3 on Day 8, touch #4 on Day 12, and touch #5 on Day 18. All five touches are delivered.

**What went wrong?**

After touch #2 with zero engagement, the agent had no evidence that Bilal was interested, reachable, or even receiving the messages. Sending touches #3-5 to a prospect with no engagement signals is Over-Automation. It wastes your sending reputation, risks your email deliverability score, and creates the impression that NexaFlow sends unsolicited bulk messages.

### A Worse Scenario

Now imagine Bilal replied after touch #2:

> "Thanks Saad, not something we are looking at this quarter. Best of luck."

This is a clear negative response. The sequence should stop immediately. But if the `follow-up` skill is not activated, the agent does not process the reply. Touch #3 arrives on Day 8. Touch #4 arrives on Day 12. Bilal now receives *two more messages* after explicitly declining.

This is not a nuisance. In many markets, this is a compliance violation. Under PECA (Pakistan's Prevention of Electronic Crimes Act), continued unsolicited electronic communication after a recipient has opted out can constitute an offence. Under CAN-SPAM (US) and GDPR (EU), the violations carry financial penalties.

Over-Automation is not a formatting error. It is a business risk.

### Defining Stop Rules

**Stop rules** are conditions that halt or pause an automated sequence. Every sequence you build with `/build-sequence` should include explicit stop rules that the `follow-up` skill monitors.

| Stop Condition | Action | Reasoning |
|---------------|--------|-----------|
| **Negative reply** ("not interested", "please stop", "unsubscribe") | **Halt immediately** | Continuing after an explicit decline is a compliance violation in most jurisdictions |
| **Zero engagement after 3 touches** (no opens, no clicks, no replies) | **Pause and review** | Three touches with zero signal means the prospect is either unreachable or uninterested -- human review required |
| **Out-of-office reply** | **Pause until return date + 2 days** | Sending messages to someone who is away wastes touches and creates inbox clutter |
| **Bounce / invalid email** | **Halt and flag for data team** | Continued sends to invalid addresses damage sender reputation |
| **Prospect engages on different channel** (e.g. replies on LinkedIn but not email) | **Shift sequence to active channel** | Follow the prospect's preferred communication method |
| **Prospect forwards to colleague** ("Copying in our CTO") | **Pause, re-research, and rebuild** | New stakeholder requires a fresh research brief and a new sequence |

These stop rules are not optional extras. They are the governance layer that separates professional outreach from spam. When you evaluate any sequence the agent produces, check for stop rules before you check for copywriting quality.

## Handling a Mid-Sequence Reply

When a prospect replies during a sequence, the `follow-up` skill takes over from the `sequence` skill. Let's say Bilal replies after touch #3:

> "This is interesting. We are not ready to evaluate vendors this quarter, but could you send more details about the edge caching approach? Our CTO might want to review it in Q2."

This is a positive-but-delayed response. The `follow-up` skill needs to:

1. **Stop the remaining sequence touches** -- touch #4 and #5 should not send
2. **Acknowledge the timeline** -- respect "not this quarter"
3. **Deliver the requested content** -- the edge caching details
4. **Set a re-engagement trigger** -- follow up at the start of Q2

```
Activate the follow-up skill. Prospect replied to touch #3 with a positive-
but-delayed response. They want edge caching details for CTO review in Q2.
Draft a reply that stops the sequence, delivers the content, and sets a
Q2 re-engagement.
```

**Output:**

```
Subject: Re: How FreightFlow cut Gulf API latency by 62%

Bilal,

Appreciate the reply. No rush at all — Q2 review makes sense given
your team's current Gulf rollout priorities.

Attached is the edge caching deep dive your CTO asked about. It
covers the three-layer architecture (edge cache → connection pool
→ async processing) with configuration examples for GCC-region
deployments.

I will follow up in the first week of April to see if a
technical walkthrough would be useful for your CTO's evaluation.
Until then, happy to answer any questions that come up from the
document.

— Saad
```

**Five Laws check on the follow-up:**

- **Law 1:** References the specific edge caching request and CTO -- **pass**
- **Law 2:** Acknowledges their timeline, does not push -- **pass**
- **Law 3:** Delivers the requested deep dive document -- **pass**
- **Law 4:** 87 words -- **concise**
- **Law 5:** "First week of April" re-engagement is specific -- **pass**

Notice what the `follow-up` skill did not do: it did not try to accelerate the timeline ("Are you sure you can't look at this sooner?"), it did not add a new pitch ("By the way, we also offer..."), and it did not send the remaining sequence touches. Restraint is a feature.

## Failure Analysis: Spot the Problems

Here is a 5-touch sequence with two deliberate failures. Read the sequence and identify what went wrong before checking the analysis below.

```
SEQUENCE: NexaFlow → Prospect Ahmed (CTO, DataPulse, Lahore)
Topic: API monitoring solution

TOUCH 1 — Email (Day 0)
Subject: API monitoring for growing SaaS teams
"Ahmed, as your team scales DataPulse, API monitoring becomes
critical. NexaFlow's monitoring suite helps teams like yours
catch latency issues before users notice. We've helped several
SaaS companies reduce downtime by 40%. Want to see a demo?"

TOUCH 2 — LinkedIn (Day 3)
"Ahmed — Saad from NexaFlow. We help SaaS teams monitor APIs.
Sent you an email — let's connect."

TOUCH 3 — Email (Day 7)
Subject: Following up on API monitoring
"Ahmed, following up on my previous email about API monitoring.
Many SaaS teams find that proactive monitoring saves significant
engineering time. Happy to show you how."

TOUCH 4 — Email (Day 12)
Subject: Quick question about API monitoring
"Ahmed, I know you're busy. Just wanted to check if API monitoring
is on your radar this quarter. We've helped several companies
in your space. Let me know if you'd like to chat."

[Ahmed replied on Day 9: "Not interested, thanks."]

TOUCH 5 — Email (Day 18)
Subject: Last note on API monitoring
"Ahmed, this is my last email about monitoring. If you ever want
to revisit, just reply to this thread."
```

### Analysis

**Problem 1 -- Law 1 Decay (Touch #3 and #4):**

Touch #1 references "as your team scales DataPulse" -- generic. It mentions no specific research finding, no LinkedIn post, no company event. Compare this to the NexaFlow-Bilal sequence where touch #1 referenced the Gulf expansion, the hiring LinkedIn post, and the 150ms latency threshold. This touch #1 could be sent to any SaaS CTO without changes. It barely passes Law 1.

By touch #3, there is no specific reference left at all. "Following up on my previous email about API monitoring" contains zero prospect-specific information. Touch #4 is worse: "several companies in your space" is the kind of generic social proof that tells the prospect you did not research them. Law 1 has fully decayed by touch #3.

**Problem 2 -- Over-Automation (Touch #5 after negative reply):**

Ahmed replied on Day 9 with "Not interested, thanks." This is a clear negative response. The sequence should have halted immediately. Instead, touch #4 went out on Day 12 and touch #5 on Day 18. That is two messages sent *after* the prospect explicitly declined.

In a Pakistani market context, this violates professional norms. In EU or US markets, it may violate CAN-SPAM or GDPR. In any market, it tells Ahmed that NexaFlow does not read replies -- which destroys trust with the entire organisation, not just this prospect.

**The fix:** Activate the `follow-up` skill to monitor replies. Define a stop rule: any reply containing "not interested", "no thanks", "remove me", or "unsubscribe" triggers an immediate halt. Add a second rule: zero engagement after 3 touches triggers a pause for human review.

## Building Your Own Sequences

You now have the framework. Here is the workflow for building and evaluating sequences for your own prospects.

**Step 1 -- Generate the sequence:**

```
/build-sequence [prospect-id] --touches 5 --channels email,linkedin
```

Add `--channels email,linkedin,whatsapp` if your market supports WhatsApp B2B outreach (Pakistan, UAE, India, parts of Southeast Asia and Latin America).

**Step 2 -- Audit every touch against the Five Laws:**

For each touch, answer five questions:

1. Does this touch contain a **specific, verifiable** reference the prospect can confirm? (Law 1)
2. Does it frame a **problem the prospect recognises** from their own experience? (Law 2)
3. Does it include **credibility evidence** appropriate for this channel? (Law 3)
4. Is it **within word limits** for the channel? (Law 4: email 100-200 words, LinkedIn 100 words, WhatsApp 50 words)
5. Is the **call to action clear** and low-pressure? (Law 5)

**Step 3 -- Check for Law 1 decay:**

Read touches #1 through #5 in order. Does the specificity *increase* (new research, new evidence) or *decrease* (recycled references, generic language)? If specificity drops after touch #2, the sequence needs revision.

**Step 4 -- Generate copywriting variants for any weak touch:**

```
Activate the copywriting skill. Generate 3 variants for touch #3
of this sequence. The current version is too generic -- Law 1 has
decayed. Add new prospect-specific evidence or reframe the existing
research from a different angle.
```

**Step 5 -- Define stop rules:**

Before activating the sequence, write down at least three stop conditions:

1. What happens if the prospect replies negatively?
2. What happens if there is zero engagement after N touches?
3. What happens if the prospect replies positively but with a delayed timeline?

Activate the `follow-up` skill to monitor for these conditions during execution.

**Step 6 -- Evaluate after completion:**

After the sequence runs (or after the first 3 touches), review:

- Open rates per touch (if your email tool tracks them)
- Reply rate and reply sentiment
- Which channel generated the response
- Whether any stop rule should have triggered earlier

## Try With AI

Use these prompts in your preferred AI assistant.

**Prompt 1: Build and Audit a Sequence**

```
I'm selling [your product/service] to [prospect name, title, company].

Here's what I know about them from research:
- [Key fact 1: company event, expansion, hiring, funding round]
- [Key fact 2: prospect's LinkedIn post or conference talk]
- [Key fact 3: industry challenge relevant to your solution]

Build a 5-touch outreach sequence across email and LinkedIn (add
WhatsApp if my market supports it). For each touch, show me:
1. The channel and day number
2. The full message text
3. A Five Laws audit: score each law (strong / adequate / weak)

After generating all 5 touches, identify where Law 1 (Specific
Verifiable Reference) is weakest and suggest how to strengthen it.
```

**What you're learning:** You are practising the complete sequence-building workflow -- from research brief to Five Laws audit -- with your own real prospect data. The AI generates the structure; you evaluate whether the personalisation holds across all five touches. This builds your ability to spot Law 1 decay before it reaches a prospect's inbox.

**Prompt 2: Diagnose Over-Automation**

```
Here is a 5-touch outreach sequence I built:

[Paste your sequence here]

Assume the prospect did NOT respond to any of the first 3 touches
(no opens, no clicks, no replies). Then assume they replied after
touch #2 with: "Not the right time, check back in 6 months."

For each scenario:
1. Which touch should have been the LAST one sent?
2. What stop rule would have caught this?
3. Write the follow-up message for the "check back in 6 months"
   reply that stops the sequence and sets a re-engagement trigger.

Also: review my sequence for any touches that could be sent to a
different prospect without changes. Those touches have Law 1 decay
and need rewriting.
```

**What you're learning:** You are building diagnostic instincts for Over-Automation -- the ability to recognise when a sequence should stop before it reaches the end. The AI helps you define stop rules and draft follow-up responses, but the judgment about *when* to stop is a business decision that reflects your relationship with the prospect and your market's communication norms.
