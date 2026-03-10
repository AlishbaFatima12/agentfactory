---
sidebar_position: 6
title: "The Prospect-to-Meeting Workflow"
description: "Connect the full sales pipeline end-to-end — research to scoring to outreach to call preparation to meeting summary — diagnose context loss between stages, and understand how pipeline errors propagate"
keywords:
  [
    "sales pipeline",
    "prospect-to-meeting workflow",
    "pre-call-brief",
    "call-summary",
    "pipeline skill",
    "follow-up skill",
    "context loss",
    "garbage propagation",
    "end-to-end workflow",
    "CRM update",
    "meeting preparation",
    "sales process",
  ]
chapter: 23
lesson: 6
duration_minutes: 25

# HIDDEN SKILLS METADATA
skills:
  - name: "Trace the Full Prospect-to-Meeting Pipeline"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can execute the full pipeline (research → score → outreach → call prep → meeting → summary → CRM update) and trace data flow between each stage"

  - name: "Diagnose Context Loss Between Pipeline Stages"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can identify when a downstream stage fails to reference upstream intelligence and trace the context loss to a specific handoff point"

  - name: "Understand Garbage Propagation in Pipelines"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can trace how a bad ICP configuration cascades through every pipeline stage, amplifying the original error"

learning_objectives:
  - objective: "Execute the full prospect-to-meeting pipeline using 6+ skills and commands in sequence, tracing data flow between stages"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student runs a complete pipeline for one prospect and documents what data flows from each stage to the next"

  - objective: "Identify context loss between pipeline stages and propose solutions to maintain intelligence continuity"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student identifies at least 2 points in a pipeline trace where downstream output fails to reference upstream intelligence"

  - objective: "Trace error propagation through the pipeline from a single misconfigured input"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student can show how a miscalibrated ICP produces cascading errors at every pipeline stage"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "Context Loss as an agent error type"
    - "Pipeline as connected stages with data handoffs"
    - "Garbage propagation (errors amplify through stages)"
    - "Pre-call brief as meeting preparation intelligence"
    - "Call summary as post-meeting record (Anthropic /call-summary)"
  assessment: "5 concepts at B1 level. Most concepts build directly on L01-L05 skills. The new insight is pipeline thinking — how individual capabilities connect."

differentiation:
  extension_for_advanced: "Map your company's actual sales process stages. Compare to the plugin's pipeline stages. Where are there gaps? Where does the plugin add a stage your team skips? Design a custom pipeline that matches your real workflow."
  remedial_for_struggling: "Focus on running 3 consecutive stages (research → score → outreach) for one prospect. If you can identify what data flows from research to scoring, you understand the pipeline concept."
---

# The Prospect-to-Meeting Workflow

You can research a prospect. You can score a lead. You can write a Five Laws-compliant outreach sequence. You can build a follow-up cadence. Lessons 1 through 5 taught each of those capabilities in isolation. A real sales process never uses them in isolation. A real sales process is a **pipeline** — eight stages running in sequence, where the output of each stage feeds the input of the next. Research feeds scoring. Scoring determines whether you proceed to outreach. Outreach opens the door to a meeting. Meeting preparation requires everything upstream. The call summary captures what happened. The CRM update closes the loop.

This lesson connects every capability you have built into a single end-to-end workflow: the **prospect-to-meeting pipeline**. You will run all eight stages for one prospect, trace the data flowing between stages, and discover the failure mode that only appears when capabilities are connected — **Context Loss**, where intelligence gathered in one stage disappears before reaching a stage that needs it.

Pipeline thinking is the difference between a collection of tools and a revenue system. Individual commands produce output. Pipelines produce outcomes.

---

## The Eight Stages

Before running anything, understand the full sequence. Each stage uses a specific command or skill, and each produces output that the next stage consumes.

| Stage | Action                  | Command or Skill       | Input From                          | Output To           |
| ----- | ----------------------- | ---------------------- | ----------------------------------- | ------------------- |
| 1     | Research the prospect   | `/research-prospect`   | Company name + city                 | Stage 2 (score)     |
| 2     | Score the lead          | `/score-lead`          | Research brief                      | Stage 3 (qualify)   |
| 3     | Qualification decision  | Human judgment         | Score + research                    | Stage 4 (outreach)  |
| 4     | Write outreach          | `outreach` skill       | Research + score + ICP              | Stage 5 (call prep) |
| 5     | Prepare for the meeting | `pre-call-brief` skill | Research + score + outreach history | Stage 6 (meeting)   |
| 6     | Conduct the meeting     | Human (with brief)     | Pre-call brief                      | Stage 7 (summary)   |
| 7     | Summarise the meeting   | `/call-summary`        | Meeting notes                       | Stage 8 (CRM)       |
| 8     | Update the CRM          | `pipeline` skill       | Summary + score + next steps        | Pipeline closed     |

Three of these stages are human (qualification decision, meeting, providing meeting notes). Five are agent-driven. The pipeline works because each agent stage references the outputs of previous stages — when it works correctly.

---

## Running the Full Pipeline: NexaFlow Technologies

Time to run the whole sequence. NexaFlow Technologies is the Karachi-based logistics-tech company you researched in Lesson 1. You already have a research brief and an ICP configuration. Now run every stage, and at each one, track what data arrived from upstream.

### Stage 1: Research

```
/research-prospect NexaFlow Technologies Karachi
```

You ran this in Lesson 1. The research brief contains company overview, key personnel, financial signals, technology stack, pain points, and engagement signals. You know which claims are verifiable and which are hallucinated. For this pipeline trace, focus on the key intelligence that downstream stages should use:

**Key intelligence produced:**

- CTO: Mehreen Qazi (technical buyer)
- Pain point: scaling data pipeline from 50K to 500K daily deliveries
- Technology signal: hiring Kafka engineers (real, verified on LinkedIn)
- Series A claim: unverified (apply Hallucination Rule 1 — private financials are suspect)
- Engagement: "Expanding our data team" LinkedIn post (verified)

### Stage 2: Score

```
/score-lead NexaFlow-prospect-001
```

The scoring model from Lesson 3 evaluates three dimensions: Fit, Timing, and Engagement. The score draws directly from the research brief.

```
══════════════════════════════════════════════════════════════
          LEAD SCORE — NexaFlow Technologies
══════════════════════════════════════════════════════════════

DIMENSION SCORES
─────────────────────────────────────────────────────────────
Fit:              28/35 — Strong ICP match: logistics-tech,
                  50-500 employees, PostgreSQL at scale,
                  Pakistan + Gulf geography
Timing:           31/35 — Series A within 12 months (if real),
                  Kafka hiring = active infrastructure
                  investment, data team expansion
Engagement:       22/30 — LinkedIn activity visible, no direct
                  inbound signal, conference presence unknown

TOTAL SCORE:      81/100 — HOT

SCORING NOTES
─────────────────────────────────────────────────────────────
Timing score relies on Series A claim from research brief.
If funding is hallucinated, Timing drops to ~22/35 and
total falls to ~72/100 (WARM, not HOT). Verify before
committing outreach resources.

══════════════════════════════════════════════════════════════
```

**Data flow trace:** The score references specific findings from Stage 1 — company size, industry match, Kafka hiring, Series A claim. Notice the scoring notes flag the dependency on unverified funding data. This is good pipeline hygiene: the scoring stage is transparent about which upstream data is unverified and how that uncertainty affects the score.

### Stage 3: Qualification Decision

This is your decision, not the agent's. Based on an 81/100 score with the caveat about unverified funding:

**Decision: Proceed.** Even if the Series A is hallucinated, the Kafka hiring and data team expansion are verified signals. Fit and verified Timing alone support a ~72 score (WARM). Worth pursuing — but lead with verified intelligence, not the funding claim.

### Stage 4: Outreach

The `outreach` skill generates a Five Laws-compliant message using the research brief, the score, and the ICP configuration.

```
══════════════════════════════════════════════════════════════
          OUTREACH — NexaFlow Technologies
══════════════════════════════════════════════════════════════

TO:               Mehreen Qazi, CTO
CHANNEL:          LinkedIn InMail
SUBJECT:          Scaling telemetry pipelines past PostgreSQL

─────────────────────────────────────────────────────────────
Hi Mehreen,

I noticed NexaFlow posted about expanding the data team last
month, and I saw two Kafka engineer openings on LinkedIn.
That combination usually means the delivery telemetry has
outgrown the current database layer — a problem we have
helped three logistics-tech companies in the Gulf solve in
the last year.

We built a managed streaming pipeline for [similar company]
that handled their jump from 80K to 600K daily shipments
without a database migration. Their CTO said the hardest
part was not the technology — it was figuring out what to
stream first.

Would a 20-minute call to compare your architecture with
what we have seen work at that scale be useful? I am happy
to share the migration playbook either way.

Best,
[Your name]
─────────────────────────────────────────────────────────────

FIVE LAWS COMPLIANCE CHECK
─────────────────────────────────────────────────────────────
Law 1 (Specificity):     ✓ References Kafka hiring, LinkedIn
                         post — verified signals only
Law 2 (Value-First):     ✓ Offers migration playbook with no
                         commitment
Law 3 (Personalisation): ✓ Names CTO, references their
                         specific scaling challenge
Law 4 (Brevity):         ✓ 127 words — under 150 target
Law 5 (Clear CTA):       ✓ "20-minute call" — specific,
                         low-commitment ask

══════════════════════════════════════════════════════════════
```

**Data flow trace:** The outreach references Mehreen Qazi (from research), the Kafka hiring and LinkedIn post (from research, verified), and the data pipeline pain point (from research). Notice it did not mention the unverified Series A — good. The outreach skill inherited the scoring caution. It used only verified intelligence.

### Stage 5: Pre-Call Brief

Imagine Mehreen replied and agreed to a 20-minute call next Tuesday. Now you need to prepare. The `pre-call-brief` skill assembles meeting preparation intelligence from every upstream stage.

```
══════════════════════════════════════════════════════════════
          PRE-CALL BRIEF
          Meeting: Mehreen Qazi, CTO — NexaFlow Technologies
          Date: Tuesday 2026-03-17, 14:00 PKT
══════════════════════════════════════════════════════════════

PROSPECT CONTEXT (from research brief)
─────────────────────────────────────────────────────────────
Company:          Route-optimization software for last-mile
                  delivery fleets in Pakistan and Gulf states
Size:             85-120 employees
Tech Stack:       Python, React Native, PostgreSQL, AWS
                  (ap-south-1 Mumbai)
Key Pain:         Scaling from 50K to 500K daily deliveries
                  across three countries

QUALIFICATION CONTEXT (from lead score)
─────────────────────────────────────────────────────────────
Score:            81/100 (HOT) — caveat: Timing dimension
                  includes unverified Series A claim
Strongest Signal: Kafka hiring + data team expansion
                  (verified independently)
Weakest Signal:   No direct inbound interest — we initiated

ENGAGEMENT HISTORY (from outreach)
─────────────────────────────────────────────────────────────
Outreach Channel: LinkedIn InMail to Mehreen Qazi
Hook Used:        Kafka hiring + PostgreSQL scaling pain
Response:         Agreed to 20-min call — "Interesting,
                  let's talk. We are in the middle of
                  exactly this conversation internally."

MEETING OBJECTIVES
─────────────────────────────────────────────────────────────
1. Confirm pain point: Is telemetry scaling their primary
   infrastructure challenge, or is there a bigger problem?
2. Discover timeline: Are they evaluating solutions now, or
   researching for next quarter?
3. Understand decision process: Is Mehreen the sole technical
   buyer, or does the CEO (Farhan Ahmed) need to approve?
4. Qualify budget: Does their infrastructure budget align
   with $5K-$10K/month range from ICP?

CONVERSATION STARTERS
─────────────────────────────────────────────────────────────
• "You mentioned you are in the middle of this conversation
  internally — what is driving the timing?"
• "The Kafka engineer postings suggest event streaming is
  the direction. Have you already chosen Kafka, or are you
  evaluating alternatives?"
• "At 50K deliveries you can get away with PostgreSQL
  polling. At 500K that breaks. Where are you on that
  curve right now?"

CAUTIONS
─────────────────────────────────────────────────────────────
• Do NOT reference Series A or funding — unverified
• Do NOT quote specific revenue figures — hallucinated
• The "2TB daily telemetry" figure from research brief is
  an agent estimate, not a confirmed number
• Gulf operations compliance (UAE TRA data residency) may
  be a secondary pain point — let Mehreen raise it first

══════════════════════════════════════════════════════════════
```

**Data flow trace:** This is where pipeline value becomes visible. The `pre-call-brief` skill pulled intelligence from three upstream stages: research (company context, personnel, pain points), scoring (qualification rationale, signal strength), and outreach (what hook was used, what the prospect said in response). It synthesised all three into actionable meeting preparation.

Notice the Cautions section. It carried forward the hallucination warnings from Stages 1 and 2 — Series A unverified, revenue hallucinated, 2TB figure is an estimate. The pipeline preserved critical caveats across four stages. When this works, it is powerful.

:::info Base Plugin Alternative
The Anthropic Sales plugin includes a `call-prep` skill that also prepares
meeting briefs. When both plugins are installed, the extension's
`pre-call-brief` overrides `call-prep` — you get the ICP-scored version
with three-dimension deal health and conversation starters drawn from
upstream pipeline data. If you disable the extension, `call-prep` still
works as a standalone meeting preparation tool.
:::

### Stage 6: The Meeting

The meeting happens. You walk in with the pre-call brief, have a productive 25-minute conversation, and take rough notes:

```
Meeting Notes (handwritten / quick capture):
- Mehreen confirmed: PostgreSQL is hitting limits at ~120K
  deliveries/day, target is 400K by Q4
- They have NOT chosen Kafka yet — evaluating Kafka vs
  Redpanda vs managed streaming
- Budget: "We have infrastructure budget but Farhan needs
  to approve anything over $3K/month"
- Secondary pain: UAE TRA compliance for Gulf fleet data
  (she raised it, not us)
- Timeline: Decision in 6-8 weeks, want POC before Eid
- Mehreen mentioned they raised a seed round (not Series A)
  from Sarmayacar, not Indus Valley Capital
- Action items: Send architecture comparison doc, schedule
  technical deep-dive with their lead engineer (Usman)
```

Two critical findings in those notes. First, Mehreen confirmed the funding was a seed round from Sarmayacar — the research brief hallucinated both the round type (Series A vs seed) and the investor (Indus Valley Capital vs Sarmayacar). Second, the $3K approval threshold is below your ICP's $5K-$10K range, which means the deal requires CEO approval for anything meaningful.

### Stage 7: Call Summary

Feed your meeting notes to the Anthropic `/call-summary` command:

```
/call-summary
```

The agent prompts you to paste or describe the meeting. You provide your notes. It produces:

```
══════════════════════════════════════════════════════════════
          CALL SUMMARY
          NexaFlow Technologies — Mehreen Qazi (CTO)
          2026-03-17
══════════════════════════════════════════════════════════════

KEY FINDINGS
─────────────────────────────────────────────────────────────
1. Pain confirmed: PostgreSQL scaling at 120K deliveries/day,
   target 400K by Q4 2026
2. Evaluation phase: Kafka vs Redpanda vs managed streaming
   — no decision yet
3. Budget gate: $3K/month CTO authority, CEO approval above
4. Secondary need: UAE TRA data residency for Gulf fleet data
5. Timeline: 6-8 week decision window, POC before Eid

CORRECTIONS TO PRIOR INTELLIGENCE
─────────────────────────────────────────────────────────────
• Funding: Seed round from Sarmayacar (NOT Series A from
  Indus Valley Capital as research brief stated)
• Delivery volume: 120K current (NOT 50K as research brief
  estimated)

ACTION ITEMS
─────────────────────────────────────────────────────────────
□ Send architecture comparison: Kafka vs Redpanda vs managed
  streaming (owner: you, by Friday)
□ Schedule technical deep-dive with Usman (lead engineer)
  (owner: you, next week)
□ Prepare POC proposal with pricing under $3K/month initial
  tier (owner: you, before next meeting)

DEAL STAGE: DISCOVERY → EVALUATION
NEXT MEETING: Technical deep-dive with Usman, week of Mar 24

══════════════════════════════════════════════════════════════
```

**Data flow trace:** The call summary captured meeting-specific intelligence (confirmed pain, corrected funding, action items) and produced a structured record. Notice the "Corrections to Prior Intelligence" section — the summary flagged where the meeting contradicted earlier research. This is valuable. It means the pipeline can self-correct when human-gathered intelligence overrides agent-generated estimates.

### Stage 8: CRM Update

The `pipeline` skill takes the call summary and updates the deal record:

```
══════════════════════════════════════════════════════════════
          PIPELINE UPDATE — NexaFlow Technologies
══════════════════════════════════════════════════════════════

DEAL RECORD
─────────────────────────────────────────────────────────────
Deal Stage:       Evaluation (moved from Discovery)
Score:            81/100 → Updated to 78/100 (Timing adjusted
                  for 6-8 week cycle; Fit confirmed)
Primary Contact:  Mehreen Qazi, CTO
Technical Contact: Usman (Lead Engineer) — NEW
Decision Maker:   Farhan Ahmed, CEO (for deals > $3K/month)

SCORE DIMENSIONS (updated)
─────────────────────────────────────────────────────────────
Fit:              28/35 → 30/35 (pain confirmed, tech match)
Timing:           31/35 → 24/35 (6-8 weeks, not immediate)
Engagement:       22/30 → 24/30 (responded, meeting held)

NEXT STEPS
─────────────────────────────────────────────────────────────
1. Architecture comparison doc → Mar 21
2. Technical deep-dive with Usman → week of Mar 24
3. POC proposal (sub-$3K tier) → before next meeting

FOLLOW-UP DATE: March 21, 2026

══════════════════════════════════════════════════════════════
```

**Data flow trace:** The `pipeline` skill updated the deal stage, adjusted the score based on meeting intelligence, added a new contact (Usman), and set concrete next steps with dates. It preserved the three-dimension scoring breakdown — Fit, Timing, Engagement — not just the total score.

That is the full pipeline. Eight stages. Research through CRM update. Each stage consumed upstream output and produced downstream input.

---

## Context Loss: The Invisible Pipeline Failure

The NexaFlow pipeline worked well. Intelligence flowed through. Hallucination warnings persisted. Meeting corrections propagated. But that was the happy path. Now see what happens when the pipeline breaks.

**Context Loss** is when a downstream stage fails to reference intelligence that an upstream stage already gathered. The information was there — it was produced, it was available — but the downstream stage did not use it. Context Loss is different from hallucinated data (L01), miscalibrated scoring (L03), compliance gaps (L04), or over-automation (L05). Those errors produce wrong output. Context Loss produces generic output when specific output was available.

### Where Context Loss Appears

Run the full pipeline for NexaFlow again, but this time pay attention to the `follow-up` skill. After the meeting, you need to send a follow-up email. The `follow-up` skill generates one:

```
══════════════════════════════════════════════════════════════
          FOLLOW-UP EMAIL — NexaFlow Technologies
══════════════════════════════════════════════════════════════

TO:               Mehreen Qazi
SUBJECT:          Great conversation — next steps

─────────────────────────────────────────────────────────────
Hi Mehreen,

Thank you for taking the time to speak with me today. It was
a great conversation and I appreciated learning more about
NexaFlow's data infrastructure plans.

As discussed, I will send over the architecture comparison
document by Friday and we can schedule a follow-up to go
deeper on the technical requirements.

Looking forward to continuing the conversation.

Best regards,
[Your name]

══════════════════════════════════════════════════════════════
```

Read that email carefully. Now compare it to the pre-call brief and the meeting notes. What is missing?

| Intelligence Available                                             | Used in Follow-Up?                  |
| ------------------------------------------------------------------ | ----------------------------------- |
| Mehreen confirmed PostgreSQL hitting limits at 120K deliveries/day | No                                  |
| Evaluating Kafka vs Redpanda vs managed streaming                  | No                                  |
| POC before Eid as timeline anchor                                  | No                                  |
| UAE TRA compliance as secondary need                               | No                                  |
| Usman (lead engineer) as technical deep-dive contact               | No                                  |
| Budget threshold: $3K/month CTO authority                          | No                                  |
| "Great conversation" + generic thanks                              | Yes (but carries zero intelligence) |

The follow-up email is polite, professional, and completely generic. It could have been written for any prospect after any meeting. Every piece of specific intelligence gathered through six pipeline stages — the confirmed pain point, the technology evaluation, the Eid timeline, the UAE compliance need, the new contact, the budget gate — was available and was ignored.

This is **Context Loss**. The `follow-up` skill generated its output without referencing the call summary, the pre-call brief, or the research brief. It defaulted to a template. The intelligence was there. It did not flow through.

### What the Follow-Up Should Have Said

Compare the generic version to a follow-up that uses upstream intelligence:

```
Hi Mehreen,

Thank you for the conversation today. Three things stood out
that I want to make sure we address properly:

1. The PostgreSQL scaling challenge at 120K deliveries/day:
   I will include specific benchmarks for the 120K → 400K
   range in the architecture comparison, not generic
   throughput numbers.

2. Kafka vs Redpanda vs managed streaming: The comparison
   document will cover all three options with our
   recommendations for your PostgreSQL-to-streaming
   migration path specifically.

3. UAE TRA data residency: I will add a section on how our
   Gulf region deployment handles TRA compliance, since you
   mentioned this is a real constraint for fleet data.

I will have the document to you by Friday. I will also reach
out to Usman to schedule the technical deep-dive for next
week — please let me know if there is a preferred time.

Best,
[Your name]
```

The difference is not style. The difference is data. The second version references three specific findings from the meeting, names the technical contact discovered during the call, and addresses the secondary pain point Mehreen raised. Every sentence carries intelligence from upstream stages.

### Diagnosing the Break

Where did Context Loss occur? Trace backwards:

1. **Stage 7 (Call Summary):** Captured all key findings, corrections, and action items. Intelligence was present.
2. **Stage 8 (Pipeline Update):** Used the call summary. Updated score, contacts, next steps. Intelligence was present.
3. **Follow-up generation:** Did NOT reference the call summary. Did NOT reference the pre-call brief. Defaulted to a generic template.

The break happened at the handoff between the call summary and the `follow-up` skill. The call summary was produced. The `follow-up` skill did not consume it. The `pipeline` skill did consume it. Two downstream stages, same upstream output, different results.

**Why this happens:** Each skill operates with whatever context it receives in the prompt. If you invoke the `follow-up` skill without passing the call summary, it has no meeting intelligence to reference. It generates the best email it can from whatever context is available — which might be nothing more than the prospect name and a generic template.

**The fix is operational, not technical.** When you invoke `follow-up`, include the call summary in the context. Copy the meeting notes or call summary output and reference it in your prompt. The skill can use intelligence it receives. It cannot use intelligence it was never given.

---

## Garbage Propagation: When Stage 1 Is Wrong

Context Loss is about intelligence that exists but does not flow. **Garbage propagation** is about intelligence that is wrong from the start — and gets worse at every stage.

Return to the miscalibrated ICP from Lesson 2. In that lesson, the ICP was configured for "all companies, any size, any industry" — no filtering, no targeting. Now run the full pipeline with that broken ICP and watch the cascade.

### The Cascade

**Stage 1 — Research with broken ICP:**
The research brief is identical — `/research-prospect` does not use the ICP. No damage yet.

**Stage 2 — Scoring with broken ICP:**
The scoring model evaluates NexaFlow against "all companies, any size, any industry." Every company is a fit. NexaFlow scores 95/100 — Fit is 35/35 because there are no fit criteria to fail. The score is technically correct (NexaFlow matches "any company") and completely useless. You cannot distinguish a strong prospect from a weak one because the model says everyone is strong.

**Stage 3 — Qualification with inflated score:**
Based on 95/100, NexaFlow looks like the best prospect in the pipeline. You allocate premium outreach resources. But the score is meaningless — it reflects the absence of criteria, not the presence of fit.

**Stage 4 — Outreach with no targeting:**
The `outreach` skill generates a message, but without ICP constraints, it has no guidance on what pain points to lead with, what value proposition to emphasise, or what buying signals to reference. The outreach becomes generic: "We help companies with data challenges." That is a pitch, not a personalised message. It violates Law 1 (Specificity) and Law 3 (Personalisation) from Lesson 5.

**Stage 5 — Pre-call brief with no focus:**
The `pre-call-brief` skill assembles meeting preparation from upstream stages. But the research has no ICP filter, the score has no meaningful dimensions, and the outreach was generic. The brief says "NexaFlow is a strong fit" without explaining why. The conversation starters are vague. The cautions section is empty because the scoring model flagged nothing.

**Stage 6 — The meeting:**
You walk in with a brief that tells you nothing specific. The meeting becomes discovery from scratch — exactly the scenario the pipeline was built to prevent. Mehreen asks "What do you know about our challenges?" and you have nothing beyond what a five-minute LinkedIn search would yield. The 25 minutes of research, scoring, and outreach preparation produced no usable advantage.

**One wrong input at Stage 1. Six stages of amplification. Zero pipeline value at Stage 6.**

This is garbage propagation. The pipeline does not average errors — it amplifies them. A miscalibrated ICP does not just produce a bad score. It produces a bad score that produces bad outreach that produces a bad brief that produces a wasted meeting. Each stage trusts its upstream input. If that input is wrong, the trust compounds the error.

| Stage             | With Correct ICP         | With Broken ICP               | Error Amplification              |
| ----------------- | ------------------------ | ----------------------------- | -------------------------------- |
| 1. Research       | Targeted intelligence    | Same (ICP not used here)      | None yet                         |
| 2. Score          | 81/100 (meaningful)      | 95/100 (meaningless)          | Score inflated, signal destroyed |
| 3. Qualify        | Proceed with caveats     | Proceed with false confidence | Decision based on bad data       |
| 4. Outreach       | Personalised, specific   | Generic, unfocused            | Lost personalisation             |
| 5. Pre-call brief | Actionable preparation   | Empty preparation             | No meeting advantage             |
| 6. Meeting        | Lead with confirmed pain | Discover from scratch         | Pipeline value = zero            |

The lesson: **the pipeline is only as good as its weakest input.** A well-configured ICP propagates precision through every stage. A misconfigured ICP propagates noise.

---

## Failure Analysis: Two Pipeline Breaks

You are reviewing pipeline outputs from two reps on your team. Each pipeline has a failure. Identify where it originated and what it affects downstream.

### Failure A: Wrong Prospect's Research

The `pre-call-brief` for NexaFlow Technologies contains this section:

```
PROSPECT CONTEXT (from research brief)
─────────────────────────────────────────────────────────────
Company:          Meridian Logistics — supply-chain management
                  firm in London, UK
Size:             200-350 employees
Tech Stack:       Java (Spring Boot), React, MongoDB, Azure
```

The brief is for NexaFlow but the prospect context describes Meridian Logistics. The conversation starters reference MongoDB migration (Meridian's stack) instead of PostgreSQL scaling (NexaFlow's pain). The meeting objectives discuss UK supply-chain compliance instead of Gulf telemetry scaling.

**Diagnosis:** The `pre-call-brief` skill was invoked with the wrong prospect identifier. It pulled Meridian's research brief instead of NexaFlow's. This is a data routing error — the intelligence is accurate for Meridian, but it was delivered to the wrong pipeline. Every section of the brief that references prospect context is contaminated. The scoring context, engagement history, and meeting objectives are all based on the wrong company.

**Impact:** If the rep walks into the NexaFlow meeting with Meridian's brief, every conversation starter will reference the wrong technology, the wrong pain point, and the wrong geography. The prospect will conclude the rep did no preparation at all.

**Fix:** Verify the prospect identifier at each stage. Before running `pre-call-brief`, confirm the prospect ID matches the intended company. This is a human checkpoint, not an automated one — the agent cannot detect that it loaded the wrong prospect.

### Failure B: Scoring Dimensions Dropped

The `pipeline` skill produced this CRM update for a different prospect:

```
DEAL RECORD
─────────────────────────────────────────────────────────────
Deal Stage:       Evaluation
Score:            76/100
Primary Contact:  Sarah Chen, CTO
Next Steps:       Send proposal by March 28
```

Compare this to the full scoring output from Stage 2:

```
Fit:              22/35 — Weak industry match, strong size match
Timing:           29/35 — Active evaluation, Q2 deadline
Engagement:       25/30 — Inbound interest, conference meeting
```

The CRM update records only the total score (76). The three dimension scores — Fit, Timing, Engagement — are missing. The total score says "Warm." The dimensions tell a different story: weak Fit (22/35) means this prospect is outside your ICP, but strong Timing (29/35) and Engagement (25/30) mean they are actively looking and interested.

**Diagnosis:** The `pipeline` skill summarised the score instead of preserving the dimensions. This is Context Loss — the detailed scoring intelligence was available but was not carried through to the CRM record.

**Impact:** A manager reviewing the pipeline sees "76/100 — Warm" and deprioritises the deal. With the dimensions visible, the manager would see "Weak Fit but High Timing and Engagement" and might make a different call — perhaps this is a prospect worth pursuing because their active buying timeline compensates for imperfect ICP match. The collapsed score hides the strategic nuance.

**Fix:** When running the `pipeline` skill, explicitly request dimension-level scoring in the CRM update. Include "preserve Fit, Timing, and Engagement scores separately" in your prompt. The skill will include what you ask for.

---

## Hands-On: Run Your Own Pipeline

Map your actual sales process to the eight-stage pipeline. You do not need to match the plugin's stages exactly — your process may have more stages, fewer stages, or different stages. The goal is to trace data flow through your real workflow.

### Step 1: Map Your Stages

Write down your current sales process, stage by stage. For each stage, answer:

- What information enters this stage?
- What information leaves this stage?
- Who is responsible — human or agent?
- Where does context get lost between your stages today?

### Step 2: Run a Real Prospect

Pick a prospect currently in your pipeline. Run the full eight-stage sequence:

```
/research-prospect [Company] [City]
/score-lead [prospect-id]
```

Make the qualification decision. Generate outreach using the `outreach` skill. If you have a meeting scheduled, generate a pre-call brief using the `pre-call-brief` skill.

### Step 3: Trace the Data Flow

At each stage, document:

1. **What arrived from upstream?** List the specific intelligence the stage received.
2. **What was generated fresh?** List what the stage added that was not in upstream output.
3. **What was lost?** Identify any upstream intelligence that was available but not referenced.
4. **What was wrong?** Identify any claims that were hallucinated, inflated, or misrouted.

### Step 4: Evaluate the Pipeline

After running the full sequence, answer these questions:

- Where did the agent add the most value? (Which stage saved you the most time?)
- Where did the agent need the most correction? (Which stage required the most human review?)
- Where did you find Context Loss? (Which stages dropped upstream intelligence?)
- Where would a human catch an error that the agent missed?

Write down your findings. Your pipeline trace is the foundation for Lessons 7 through 11, where you will optimise individual stages, resolve skill collisions, and build custom extensions.

---

## Try With AI

**Setup:** Open Claude Code with your sales-marketing plugins installed and `sales-marketing.local.md` configured.

**Prompt 1:**

```
Run /research-prospect for a company I know well: [Company Name]
[City]. Then run /score-lead on the result. Compare the research
brief and the score. Does the score reference specific findings
from the research brief, or does it score generically? Identify
any intelligence from the research brief that the scoring model
ignored.
```

**What you are learning:** How to trace data flow between two consecutive pipeline stages and identify where intelligence is preserved versus lost in the handoff.

**Prompt 2:**

```
Generate a follow-up email for this prospect using the follow-up
skill. Then manually rewrite the email to include 3 specific
findings from the research brief that the generated email missed.
Compare the two versions. Which would you actually send?
```

**What you are learning:** How to diagnose Context Loss by comparing agent output against available upstream intelligence, and how to manually compensate when the pipeline drops context.
