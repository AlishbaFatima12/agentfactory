---
sidebar_position: 7
title: "Pre-Call Briefs and Meeting Preparation"
description: "Build pre-call briefs with tailored discovery questions, generate competitive battlecards, process call transcripts with /call-summary, discover Context Loss when prior research does not carry forward, and prepare objection handling responses"
keywords:
  [
    "pre-call brief",
    "meeting preparation",
    "discovery call",
    "competitive battlecard",
    "competitive-intelligence",
    "call-summary",
    "objection handling",
    "context loss",
    "discovery questions",
    "call transcript",
    "post-call follow-up",
    "sales preparation",
    "pre-call-brief skill",
  ]
chapter: 23
lesson: 7
duration_minutes: 25

# HIDDEN SKILLS METADATA
skills:
  - name: "Build Pre-Call Briefs with Tailored Discovery Questions"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can use the pre-call-brief skill to generate a complete brief for a discovery call including context, goal, discovery questions, anticipated objections, and success criteria, then evaluate whether the questions are specific to the prospect or generic"

  - name: "Generate and Evaluate Competitive Battlecards"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can generate a competitive battlecard using the competitive-intelligence skill, evaluate the differentiation matrix for accuracy, and integrate competitive positioning into a pre-call brief"

  - name: "Process Call Transcripts and Diagnose Context Loss"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can run /call-summary on a call transcript to extract action items and draft follow-up, and can identify Context Loss when an agent produces a generic brief instead of referencing prior prospect research"

learning_objectives:
  - objective: "Generate pre-call briefs with prospect-specific discovery questions and evaluate whether the questions are tailored or generic"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student generates a pre-call brief for a discovery call with Meridian's Sarah Chen and identifies at least 2 questions that reference her specific situation versus generic discovery questions"

  - objective: "Integrate competitive intelligence into meeting preparation by generating a battlecard and adding positioning to the pre-call brief"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Student generates a competitive battlecard, evaluates the differentiation matrix, and adds competitive positioning to their pre-call brief"

  - objective: "Diagnose Context Loss by comparing a brief built with prior research to one built without it, and process a call transcript with /call-summary"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student identifies that a brief built without feeding prior research is generic rather than personalised, and can extract action items from a post-call transcript"

cognitive_load:
  new_concepts: 7
  concepts_list:
    - "Pre-call brief as a structured preparation artifact (context, goal, questions, objections, success criteria)"
    - "Discovery questions tailored to prospect-specific research"
    - "Competitive battlecard integration into meeting preparation"
    - "Context Loss as an agent error type (discovered, not taught)"
    - "Call transcript processing with /call-summary"
    - "Post-call follow-up generation (action items, summary, draft email)"
    - "Objection handling responses grounded in prospect context"
  assessment: "7 concepts at B1 level. Context Loss is the key new diagnostic concept, discovered through hands-on experimentation. The rest build on the research briefs from L02 and outreach from L06."

differentiation:
  extension_for_advanced: "Build pre-call briefs for three different call types — discovery, demo, and executive review — for the same prospect. Compare how the question sets, objection handling, and success criteria differ across call types. Which brief requires the most prospect-specific research?"
  remedial_for_struggling: "Focus on building one pre-call brief for a discovery call and evaluating whether the discovery questions reference the prospect's specific situation. If you can distinguish a tailored question from a generic one, you have the core skill."
---

# Pre-Call Briefs and Meeting Preparation

In Lesson 6, you built a 6-touch outreach sequence for Sarah Chen at Meridian Logistics. Assume Touch 2 worked — Sarah replied and agreed to a 30-minute discovery call next Tuesday. What do you walk in with?

Ahmed, a NexaFlow rep, opens the CRM, reads a one-line note — "met at expo, interested in automation" — and wings it. He spends the first ten minutes of every discovery call asking questions he could have answered before dialling. By the time he reaches the prospect's actual pain points, the meeting is half over. Farah, NexaFlow's top closer, walks into every call with a one-page brief: who she is talking to, what she already knows, what questions to lead with, what objections to anticipate, and what a successful call looks like. She does not waste the prospect's time confirming information that is already available. She starts the conversation where the research left off.

This lesson gives every rep Farah's brief. You will build pre-call briefs, generate a competitive battlecard, process a call transcript, and discover what happens when the agent loses the context you built across earlier lessons.

## The Intelligence Your Rep Needs

Farah always knows five things before a call:

| Element                    | What It Contains                                                                   | Why It Matters                                                                 |
| -------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| **Quick Context**          | Prospect name, role, company, relevant news, relationship history                  | You do not open with "So, tell me about your company" when you already know    |
| **Call Goal**              | One sentence: what outcome makes this call successful                              | Without a goal, the call meanders — you leave without a next step              |
| **Discovery Questions**    | 4-6 questions tailored to the prospect's situation                                 | Generic questions get generic answers. Specific questions get real pain points |
| **Anticipated Objections** | 2-3 likely pushbacks with prepared responses                                       | The first objection should not be the first time you think about it            |
| **Success Criteria**       | What "yes" looks like: a follow-up meeting, a technical review, a pilot commitment | If you cannot define success before the call, you cannot recognise it during   |

Ahmed skips all five. He relies on charm and improvisation. It works with warm prospects who are already interested. It fails with every prospect who needs to be convinced — which is most of them.

## Building the Meridian Pre-Call Brief

Sarah Chen agreed to a 30-minute discovery call. She is VP Operations at Meridian Logistics in Leeds. Your research brief from Lesson 2 identified the BrightPath acquisition, supply chain consolidation delays, and WMS integration challenges. Your outreach sequence from Lesson 6 referenced the TransGlobal case study, and Sarah replied after Touch 4 mentioning she found the brief helpful.

Build the brief:

```
Prepare me for a discovery call with Sarah Chen at Meridian
Logistics tomorrow. 30-minute call. First conversation.
She responded to our outreach about WMS consolidation after
the BrightPath acquisition. She found the TransGlobal case
study helpful and wants to discuss the consolidation diagnostic.
```

The pre-call-brief skill auto-activates. Here is the complete output:

```
══════════════════════════════════════════════════════════════
          PRE-CALL BRIEF
          Prospect: Sarah Chen, VP Operations
          Company: Meridian Logistics (Leeds)
          Call: Discovery | 30 min | Tuesday 10:00 GMT
══════════════════════════════════════════════════════════════

QUICK CONTEXT
─────────────────────────────────────────────────────────────
• Meridian Logistics — mid-market freight and warehousing,
  UK + Gulf routes, ~800 employees
• Completed BrightPath acquisition Q3 2025 — supply chain
  consolidation behind schedule
• Sarah posted on LinkedIn about WMS integration challenges
  (two Tier 1 platforms serving overlapping regions)
• Responded to Touch 4 of our 6-touch sequence — found
  TransGlobal case study helpful
• Interested in the 2-hour consolidation diagnostic we
  offered in Touch 5

CALL GOAL
─────────────────────────────────────────────────────────────
Qualify Meridian for the WMS consolidation diagnostic.
Confirm scope, timeline, and decision-making authority.
If qualified: schedule the 2-hour diagnostic for the
following week.

DISCOVERY QUESTIONS
─────────────────────────────────────────────────────────────
1. "You mentioned the TransGlobal brief was helpful — which
   part of their 11-week consolidation timeline resonated
   most with where Meridian is right now?"

2. "Your Q3 update mentioned integration synergies expected
   in H1. Is the WMS consolidation part of those synergies,
   or is it a separate initiative?"

3. "How many active SKUs are running across both WMS
   platforms? The overlap volume usually determines whether
   a parallel-run or direct-cutover approach makes more
   sense."

4. "Who else on your team would need to be in the room for
   the consolidation diagnostic? We find that including
   someone from IT infrastructure and one warehouse ops
   lead gives us the most complete picture."

5. "What does your internal timeline look like for making
   a consolidation approach decision? Are you evaluating
   other vendors or approaches in parallel?"

6. "If the diagnostic shows that consolidation can be done
   in under 12 weeks, what would need to happen internally
   for Meridian to move forward?"

ANTICIPATED OBJECTIONS
─────────────────────────────────────────────────────────────
Objection 1: "We're too busy with the acquisition to
take on another project right now."
→ Response: "That's exactly why the diagnostic is 2 hours,
  not 2 weeks. It gives you a clear scope document you can
  use to plan the consolidation when the timing is right —
  without committing to a project today. Most teams find
  the diagnostic actually reduces planning load because it
  maps the overlap they'd otherwise spend weeks discovering."

Objection 2: "We already have a WMS vendor — we might
just extend the existing contract."
→ Response: "That's a valid path. The diagnostic is vendor-
  neutral — it maps the overlap between your two systems and
  flags the three highest-risk data conflicts regardless of
  who does the consolidation. If extending your existing
  vendor is the right answer, the diagnostic will confirm
  that. If it's not, you'll know before committing."

Objection 3: "We're not ready to buy anything."
→ Response: "Understood — and the diagnostic isn't a sales
  pitch. It's a technical assessment. No proposal, no SOW.
  The output is a consolidation readiness report that your
  team can use internally. If NexaFlow is the right fit for
  the implementation, that conversation happens later. If
  we're not, you still have the report."

SUCCESS CRITERIA
─────────────────────────────────────────────────────────────
✅ Sarah confirms WMS consolidation is an active priority
   (not a "someday" project)
✅ You understand the decision-making process (who else
   needs to approve, what budget cycle applies)
✅ The 2-hour consolidation diagnostic is scheduled with
   a confirmed date and attendee list
✅ You have a clear next step — even if the next step is
   "Sarah takes the diagnostic proposal to her VP"
══════════════════════════════════════════════════════════════
```

### Evaluating the Brief

Read through the discovery questions. Are they good?

Question 1 references the TransGlobal case study — specific to the conversation history. Question 2 references the Q3 earnings mention — specific to Meridian's public filings. Question 3 asks about SKU overlap — a technical qualifier that moves the conversation from "interested" to "qualified." Question 4 identifies additional stakeholders — essential for enterprise sales where the person you are speaking to rarely decides alone. Questions 5 and 6 probe timeline and internal decision process.

None of these questions could be asked to a random logistics company. Every one references Meridian's specific situation. That is the difference between a research-informed brief and a generic call sheet.

## Adding a Competitive Battlecard

Before the call, you want to know where NexaFlow stands against competitors Meridian might be evaluating. Run the competitive-intelligence skill:

```
How do we compare to TrackFlow for logistics route
optimisation? Meridian is evaluating options for WMS
consolidation.
```

The competitive-intelligence skill auto-activates:

```
══════════════════════════════════════════════════════════════
          COMPETITIVE BATTLECARD
          NexaFlow vs TrackFlow — Logistics Platform
══════════════════════════════════════════════════════════════

DIFFERENTIATION MATRIX
─────────────────────────────────────────────────────────────
                     NexaFlow          TrackFlow
Geographic coverage  UK, Gulf, Pak     UK, Europe only
Min. commitment      3 months          12 months
Setup fee            $0                £5,000
WMS integration      API-first         SAP TM native
Free trial           10 vehicles       None
Driver comms         WhatsApp + app    In-app only

WHERE WE WIN
─────────────────────────────────────────────────────────────
• Multi-region logistics (Gulf + South Asia routes)
• Lower commitment risk (3 months vs 12)
• Faster onboarding (no setup fee, API integration)
• Driver communication in markets where WhatsApp is
  standard (Pakistan, UAE, Saudi Arabia)

WHERE THEY WIN
─────────────────────────────────────────────────────────────
• Deep SAP TM integration for enterprises already on SAP
• Larger European customer base with enterprise references
• ISO 27001 certification (matters for procurement)

TALK TRACKS FOR MERIDIAN
─────────────────────────────────────────────────────────────
• Meridian operates UK + Gulf routes. Ask: "How does your
  current routing handle Dubai-to-Abu Dhabi corridors?"
  TrackFlow's algorithms are calibrated for European road
  networks.

• Meridian's VP of Ops likely wants quick wins post-
  acquisition. NexaFlow's 3-month commitment vs TrackFlow's
  12-month lock-in reduces adoption risk.

• If Sarah mentions SAP TM integration as a requirement,
  acknowledge TrackFlow's strength. Compete on total cost
  and geographic coverage, not ERP integration.

WHERE WE LOSE
─────────────────────────────────────────────────────────────
• If Meridian's entire tech stack is SAP and integration
  speed is the top priority, TrackFlow's native connector
  gives them an advantage we cannot match in Q1.

• If Meridian only operates UK routes and has no Gulf or
  South Asian expansion plans, our multi-region advantage
  does not apply.
══════════════════════════════════════════════════════════════
```

Now integrate this into your pre-call brief. The battlecard tells you that if Sarah mentions evaluating TrackFlow, your angle is geographic coverage and commitment flexibility. If she mentions SAP TM as a hard requirement, you have a disadvantage to acknowledge honestly. Walking into the call with both the brief and the battlecard means you are prepared for two conversations: the one you plan and the one the prospect redirects to.

:::tip The agent researches, drafts, and recommends. The sales professional decides and sends.
Review every claim in the battlecard before using it in a meeting. Competitive intelligence from an agent is a starting point, not a script. Verify pricing, feature claims, and partnership status against current public sources.
:::

## Discovering Context Loss

You researched Sarah Chen thoroughly in Lesson 2. The research brief covered the BrightPath acquisition, WMS challenges, and LinkedIn activity. But what happens when a different prospect — one you researched three weeks ago — comes up for a call?

Try building a brief for Pinnacle Analytics, a prospect from your Lesson 3 scoring exercise. Do not feed the research brief from Lesson 2 into the prompt:

```
Prepare me for a discovery call with Jordan Malik at Pinnacle
Analytics tomorrow. 30-minute call. First conversation.
```

Compare the output to the Meridian brief. Notice the difference.

```
PRE-CALL BRIEF — Pinnacle Analytics
─────────────────────────────────────────────────────────────

QUICK CONTEXT
• Pinnacle Analytics — data analytics firm
• Jordan Malik — [role not specified]
• No prior conversation history available

DISCOVERY QUESTIONS
1. "Tell me about your current analytics workflow."
2. "What are the biggest challenges your team faces?"
3. "How do you currently handle [general area]?"
4. "What would an ideal solution look like for you?"
─────────────────────────────────────────────────────────────
```

Those questions could be asked to anyone. "Tell me about your current workflow" is the discovery-call equivalent of "So, tell me about yourself" on a first date. The brief contains no reference to Pinnacle's specific situation, no mention of the research you did three weeks ago, and no connection to the scoring data from Lesson 3.

This is **Context Loss** — the agent produced a generic brief because it did not have access to the research you built earlier. The research brief exists. You created it. But you did not feed it into this prompt, and the agent does not remember work from previous sessions.

:::warning Context Loss
You have discovered a new agent error type. In Lesson 1, you identified **Hallucinated Data**. In Lesson 3, **Miscalibrated Scoring**. In Lesson 5, **Compliance Gap**. In Lesson 6, **Over-Automation**. Now: **Context Loss** — the agent operates without context that exists elsewhere in your workflow, producing generic output instead of personalised intelligence.

The diagnostic question: **"Did the follow-up reference the research brief?"** If the answer is no, you have detected Context Loss. The fix is always the same: feed the prior research into the current prompt. The agent does not remember. You manage the memory.
:::

Now fix it. Feed the research:

```
Prepare me for a discovery call with Jordan Malik at Pinnacle
Analytics tomorrow. 30-minute call. First conversation.

Here is the research brief from our earlier analysis:
[Paste the Pinnacle research brief from Lesson 2]

And here is the scoring data:
Fit: 38/40, Timing: 31/30, Engagement: 12/30 (champion went
silent last week)
```

The brief that comes back will reference Pinnacle's specific situation, ask about the champion going silent, and suggest re-engagement questions. Same skill. Same prompt structure. Different input quality produces different output quality.

The lesson: agent context degrades across sessions. Always feed the research brief into the pre-call prompt. The five minutes it takes to paste the prior research saves thirty minutes of generic discovery that the prospect will not tolerate.

## Building Three Briefs

Take your top three prospects from the Lesson 3 scoring exercise. Build a pre-call brief for each, with a different call type:

**Brief 1 — Discovery Call** (Meridian Logistics, already built above)

**Brief 2 — Demo Call:**

```
Prepare me for a product demo call with Ahmed Rashid at Gulf
Express LLC. 45-minute call. He has seen the TransGlobal case
study and wants to see the route optimisation module live.

Research brief: Gulf Express operates Dubai-Riyadh-Jeddah
freight routes. 120 vehicles. Currently using manual route
planning in Excel. Ahmed is VP of Operations, reports to CEO
directly. Score: Fit 36, Timing 28, Engagement 25 (total 89).
```

**Brief 3 — Follow-Up Call:**

```
Prepare me for a follow-up call with Priya Nair at DataForge
Solutions. 20-minute call. We sent a proposal last Friday.
She has budget approval but needs to resolve a technical
integration question before signing.

Research brief: DataForge is a data pipeline company in Mumbai.
Priya is CTO. She evaluated our API documentation and had
concerns about webhook reliability for high-volume data feeds.
Score: Fit 34, Timing 30, Engagement 23 (total 87).
```

Compare the three briefs. Notice how the question sets change by call type:

| Element              | Discovery (Meridian)                           | Demo (Gulf Express)                                 | Follow-Up (DataForge)                                                  |
| -------------------- | ---------------------------------------------- | --------------------------------------------------- | ---------------------------------------------------------------------- |
| **Questions**        | Qualifying: "Is this a priority? Who decides?" | Technical: "What routing scenarios should we demo?" | Closing: "What's the integration concern? What unblocks the decision?" |
| **Objections**       | Timing and readiness objections                | Comparison to current manual process                | Technical risk and contract terms                                      |
| **Success criteria** | Schedule the diagnostic                        | Ahmed agrees to a pilot                             | Priya confirms the technical path and signs                            |
| **Tone**             | Exploratory                                    | Demonstrative                                       | Decisive                                                               |

Each brief is calibrated to where the prospect sits in the pipeline. A discovery brief asks open questions. A demo brief prepares for technical scrutiny. A follow-up brief focuses on removing the specific blocker the prospect identified.

## Objection Handling

The pre-call brief anticipated three objections for Meridian. These are the most common patterns across NexaFlow's pipeline. Here is how Farah handles each:

**"We're too busy right now."**

This is a timing objection, not a rejection. Farah does not argue with it. She reframes the diagnostic as something that saves time rather than consuming it:

> "I hear you — post-acquisition is the worst time to start something new. The diagnostic is designed for exactly this situation. It takes 2 hours, not 2 weeks. What you get is a consolidation readiness map that your team can execute on their own timeline. Most teams tell us the diagnostic itself reduces planning load because it maps overlap they would otherwise spend weeks discovering."

The key: do not pitch when the prospect says "not now." Show that the ask is small and the output is valuable regardless of timing.

**"We already have a WMS vendor."**

This is a competitive objection. Farah does not attack the incumbent. She positions the diagnostic as vendor-neutral:

> "That makes sense — and the diagnostic is not about replacing anyone. It maps the overlap between your two WMS platforms and flags data conflicts. If extending your current vendor is the right path, the diagnostic confirms that. If it is not, you will know before committing. Either way, the output is yours."

The key: when the prospect already has a vendor, compete on insight, not features. The diagnostic gives Meridian something their current vendor cannot — an independent assessment.

**"We're not ready to buy."**

This is a qualification objection. Farah does not try to close. She separates the diagnostic from the purchase decision:

> "Understood. The diagnostic is not a sales pitch and does not come with a proposal. It is a technical assessment. If NexaFlow turns out to be the right fit for the implementation, that conversation happens later and separately. If we are not the right fit, you still have the consolidation readiness report."

The key: reduce perceived commitment. The prospect says "not ready to buy" because they assume every meeting leads to a pitch. Remove the pitch and the objection evaporates.

## Processing a Call Transcript

The discovery call with Sarah went well. Now capture what happened. The `/call-summary` command processes a call transcript — either pulled automatically from a connector like Fireflies or Gong, or pasted manually from your notes.

**If you have a call recording connector (Fireflies, Gong, Otter):**

The connector pulls the transcript automatically. Run:

```
/call-summary Process the Meridian Logistics discovery call
with Sarah Chen from this morning
```

**If you do not have a connector**, paste your call notes:

```
/call-summary Process these call notes from the Meridian
discovery call with Sarah Chen:

- Sarah confirmed WMS consolidation is priority for H1
- Two platforms: HighJump (legacy) and Manhattan Associates
  (from BrightPath)
- ~15,000 active SKUs across both systems, 40% overlap
- IT infrastructure lead (Raj Patel) and warehouse ops
  manager (Lisa Wong) need to join the diagnostic
- Sarah has budget authority up to £50K without VP approval
- Timeline: wants diagnostic done before end of March
- Competitive: currently evaluating TrackFlow but concerned
  about their 12-month commitment
- Next step: Sarah to confirm Raj and Lisa's availability
  for a 2-hour diagnostic next week
- Sarah asked for NexaFlow's SOC 2 report
```

**Output:**

```
══════════════════════════════════════════════════════════════
          CALL SUMMARY
          Meridian Logistics — Discovery Call
          Sarah Chen | 30 min | 10:00 GMT
══════════════════════════════════════════════════════════════

INTERNAL SUMMARY (for your team)
─────────────────────────────────────────────────────────────
Strong discovery call. Sarah confirmed WMS consolidation is
an H1 priority with budget authority up to £50K. Two WMS
platforms (HighJump + Manhattan Associates) with 15,000 SKUs
and 40% overlap. Evaluating TrackFlow but concerned about
12-month commitment — our 3-month terms are a differentiator.

Qualification: CONFIRMED
  ✅ Budget: £50K without VP approval
  ✅ Authority: Sarah is decision-maker for sub-£50K
  ✅ Need: WMS consolidation is active priority
  ✅ Timeline: Before end of March

ACTION ITEMS
─────────────────────────────────────────────────────────────
1. [YOU] Send SOC 2 report to Sarah — she requested it
   during the call. Due: today.
2. [SARAH] Confirm availability of Raj Patel (IT) and
   Lisa Wong (warehouse ops) for the diagnostic. Due:
   by Thursday.
3. [YOU] Prepare the diagnostic agenda tailored to
   HighJump ↔ Manhattan Associates migration. Include
   SKU overlap analysis methodology. Due: before
   diagnostic session.
4. [YOU] Update CRM: move Meridian to "Diagnostic
   Scheduled" stage. Add Raj Patel and Lisa Wong as
   contacts.

DRAFT FOLLOW-UP EMAIL
─────────────────────────────────────────────────────────────
Subject: Re: WMS Consolidation Diagnostic — Next Steps

Sarah,

Great speaking with you this morning. To confirm the next
steps from our conversation:

1. I'll send over NexaFlow's SOC 2 report today.
2. Once you confirm Raj and Lisa's availability, I'll
   send a calendar invite for the 2-hour diagnostic.
3. I'll prepare the diagnostic agenda focused on the
   HighJump ↔ Manhattan Associates overlap — specifically
   the 15,000 SKU reconciliation and the 40% overlap
   mapping.

If there's anything else your team needs before the
diagnostic, just reply here.

— Farah
══════════════════════════════════════════════════════════════
```

The `/call-summary` output connects the brief to the follow-up. The pre-call brief set the goal (schedule the diagnostic). The call achieved it. The summary captures the commitments and generates the follow-up — closing the loop from preparation to execution.

## What You Built

1. 3 pre-call briefs with tailored discovery questions for different call types (discovery, demo, follow-up)
2. A competitive battlecard for NexaFlow's top competitor, integrated into meeting preparation
3. A call summary with action items from `/call-summary`, including a draft follow-up email
4. Objection handling responses for 3 common objections, grounded in prospect-specific context
5. The **Context Loss** error type, discovered by building a brief without feeding prior research
6. The principle: always feed prior context into brief prompts — the agent does not remember across sessions

## Flashcards Study Aid

<Flashcards />

## Try With AI

Use these prompts in your preferred AI assistant.

**Prompt 1: Build a Pre-Call Brief with Competitive Positioning**

```
Build a pre-call brief for a discovery call with Meridian's
Sarah Chen. She is VP Operations.
Meridian completed the BrightPath acquisition in Q3, and
she responded to our outreach about WMS consolidation.

Include:
- Quick context
- Call goal
- 5 discovery questions tailored to her situation
- 3 anticipated objections with responses
- Success criteria

Then generate a competitive battlecard for NexaFlow's top
competitor in logistics route optimisation. Show the
differentiation matrix and talk tracks for the Meridian
meeting.
```

**What you are learning:** You are practising the complete pre-call preparation workflow — brief plus competitive positioning — in a single prompt. Evaluate whether the discovery questions reference Meridian's specific situation (BrightPath, WMS consolidation, Q3 timeline) or could be asked to any logistics company. Tailored questions are the difference between a brief that earns trust and a generic call sheet that wastes the prospect's time.

**Prompt 2: Adapt the Brief for a Different Call Type**

```
I already have a discovery brief for Meridian. Now build a
brief for a DIFFERENT call type — a demo follow-up rather
than a first discovery call.

Context: The discovery call went well. Sarah confirmed WMS
consolidation is an H1 priority. Two platforms: HighJump
and Manhattan Associates. 15,000 SKUs with 40% overlap.
She wants a live demo of the route optimisation module
before scheduling the consolidation diagnostic.

Build the brief with:
- Quick context (updated with discovery call findings)
- Demo call goal
- 5 questions tailored to a demo (not discovery)
- 3 anticipated objections specific to the demo stage
- Success criteria for a demo call

How does the question set change from discovery to demo?
Which questions from the discovery brief no longer apply?
```

**What you are learning:** Different call types require different preparation. Discovery questions qualify the opportunity. Demo questions validate technical fit. Follow-up questions remove specific blockers. Building briefs for multiple call types with the same prospect shows how the question set evolves as the prospect moves through the pipeline. The brief that worked for discovery would be wrong for a demo — and using it signals that you are not paying attention to where the conversation is.

**Prompt 3: Build a Brief for Your Next Real Meeting**

```
Build a pre-call brief for my next real meeting. Here is
what I know about the prospect:

[Paste what you know: name, title, company, why the
meeting was booked, any prior conversations, any
research you have done]

Include all five elements: context, goal, discovery
questions, anticipated objections, and success criteria.

After the call, I will run /call-summary on my notes
and compare the generated action items to what I
actually committed to. Are there action items the
summary missed? Are there commitments I made verbally
that the summary did not capture?
```

**What you are learning:** Applying the brief-to-call-to-summary workflow to your own pipeline. The comparison between generated action items and actual commitments reveals the gap between what the agent captures and what you committed to in conversation. Some commitments are explicit ("I will send the report today"). Others are implicit ("Let me look into that for you"). The agent captures explicit commitments reliably. Implicit ones — the ones that damage trust when you forget them — require your own notes.
