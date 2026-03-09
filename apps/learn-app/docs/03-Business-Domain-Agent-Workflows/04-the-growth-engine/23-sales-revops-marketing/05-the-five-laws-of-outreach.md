---
sidebar_position: 5
title: "The Five Laws of Outreach"
description: "How AI-native outreach replaces spray-and-pray with the Five Laws framework, multi-touch sequences, copywriting, and follow-up strategies across LinkedIn, email, and WhatsApp Business"
keywords:
  [
    "outreach automation",
    "Five Laws of Outreach",
    "personalised outreach",
    "AI sales outreach",
    "LinkedIn DM",
    "WhatsApp Business outreach",
    "cold email",
    "multi-touch sequence",
    "follow-up strategy",
    "sales copywriting",
    "A/B testing",
    "lead magnet",
    "CTA",
    "nurture sequence",
    "Cowork sales plugin",
  ]
chapter: 23
lesson: 5
duration_minutes: 20

# HIDDEN SKILLS METADATA
skills:
  - name: "Apply the Five Laws of Outreach to Evaluate and Draft Sales Messages"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Communication and Collaboration"
    measurable_at_this_level: "Student can take any outreach draft and evaluate it against all five laws, identifying specific violations and rewriting the message to achieve full compliance"

  - name: "Build Multi-Touch Outreach Sequences Using the /sequence Command"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can prompt the agent to generate a complete 6-touch sequence with channel mixing, value-add touches, and graceful exit, and can critique the output for quality and realism"

  - name: "Generate and Evaluate Ad Copy Variants Using the /copy Command"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Understand"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can use /copy to generate subject line and ad copy variants, explain the difference between testing angles versus testing words, and select the strongest variant with reasoning"

  - name: "Adapt Outreach Strategy for Relationship-First Cultures"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Communication and Collaboration"
    measurable_at_this_level: "Student can explain why the Five Laws are Western B2B norms, identify which laws require adaptation for relationship-first markets such as Pakistan, the GCC, and South Asia, and describe alternative channel strategies including WhatsApp Business"

learning_objectives:
  - objective: "Apply the Five Laws of Outreach to evaluate any sales message and identify specific compliance failures"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student takes a sample outreach email and annotates each law's compliance status, rewriting any failing sections"

  - objective: "Use the /outreach, /sequence, /follow-up, and /copy commands to produce a complete multi-touch outreach campaign with copywriting variants"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student demonstrates all four commands in sequence, producing a 6-touch outreach plan with at least two copy variants for the initial touch"

  - objective: "Analyse why the Five Laws require cultural adaptation and design an outreach strategy for a non-Western B2B market"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student writes a WhatsApp Business outreach message for a South Asian market and explains which laws were adapted and why"

cognitive_load:
  new_concepts: 6
  concepts_list:
    - "Outreach Sequence as a structured multi-touch campaign"
    - "Nurture Sequence for warming leads over time"
    - "A/B Testing as systematic variant comparison"
    - "CTR as the core outreach performance metric"
    - "Lead Magnet as the value exchange in outreach"
    - "CTA as the single clear action request"
  assessment: "6 concepts at B1 level -- at the upper boundary of the 5-7 cognitive limit for this tier. All concepts are concrete and immediately applicable through hands-on command usage, which reduces cognitive load despite the count."

differentiation:
  extension_for_advanced: "Build a complete 6-touch sequence for two different personas at the same company (VP Ops and CFO) with different hooks, channels, and messaging angles. Compare the sequences and explain why the same company requires different outreach strategies for different stakeholders."
  remedial_for_struggling: "Focus on the Five Laws only. If you can take any outreach message and evaluate it against all five laws -- identifying the specific violation and rewriting the failing sentence -- you have the core skill. The commands and sequences build on this foundation."
---

# The Five Laws of Outreach

Every salesperson who has ever worked a pipeline knows the feeling. You have a list of fifty prospects. You have a product you believe in. You have a quota to hit. And you have a blank message window staring back at you, cursor blinking, while you try to figure out what to say to a stranger who receives twenty of these messages a week and deletes nineteen of them.

The question is not whether to reach out. The question is what separates the one message that gets a reply from the nineteen that get deleted. Your best rep already knows the answer. She spends forty-five minutes researching before she writes a single word. She references something specific. She leads with the prospect's problem, not her product. She asks one question, keeps the message short, and sounds like a person having a conversation rather than a company running a campaign.

The problem is that her approach does not scale. She can research and personalise five prospects a day. You need fifty prospects contacted this week. The Five Laws of Outreach are the codification of what your best rep does instinctively, and the `/outreach` command is what makes that approach available to every rep on the team, at any volume, without sacrificing the quality that makes it work.

## What the Five Laws Actually Are

The Five Laws are not abstract principles. They are a compliance checklist that the agent runs against every message before it outputs anything. If a message fails any law, the agent rewrites it before you ever see the draft. This is the equivalent of building your best rep's judgment into the system itself.

Understanding these laws is important not because you need to memorise them, but because you need to recognise when outreach -- whether AI-generated or human-written -- violates them. Every violation reduces reply rates. Every violation is detectable. And every violation is fixable.

> **Outreach Sequence:** A planned series of messages sent to a single prospect across multiple channels over a defined period, typically 14 to 21 days. Each touch has a different angle or value proposition. The sequence ends when the prospect responds or after a predetermined number of touches. The goal is not to wear down the prospect through repetition but to offer multiple entry points into a conversation, each from a different angle, so the prospect can engage when the timing and framing are right for them.

### Law 1: Reference Something Specific and Real

The first sentence of every outreach message must contain a specific, verifiable reference that proves you researched this particular person. Not their company. Not their industry. Them. A LinkedIn post they wrote. A conference talk they gave. A news article about a deal they closed. A job posting their team published that reveals a pain point.

The word "specific" is doing heavy lifting here. "I see your company is growing" is not specific. Every company describes itself as growing. "Your post two weeks ago about maintaining quality as you scale without just adding headcount -- that is the exact tension we hear from every VP Ops managing rapid 3PL growth" is specific. It names the post. It names the tension. It connects their words to a broader pattern the sender understands.

The reason specificity works is not psychological manipulation. It is signal. When a prospect reads a message that references their actual situation, they receive a signal that this person understands their world. That signal earns the rest of the message. Without it, the rest of the message never gets read.

### Law 2: Lead With Their Problem, Not Your Product

The first sentence is about them. The first paragraph is about them. Your product appears in the second paragraph, briefly, as a potential response to the problem already established. The message never opens with "We help companies like yours," "I wanted to introduce our platform," or "At [Company], we specialise in."

This law exists because the prospect's inbox is full of messages that start with the sender's product. By leading with the prospect's situation, you immediately differentiate from the other nineteen messages. You also demonstrate that you understand their problem before you propose a solution, which is how trust works in professional relationships.

### Law 3: One Ask, One Clear Next Step

Every message ends with exactly one question or request. Not multiple options. Not "reply if interested." Not "I would love to set up a call or send you some materials or connect you with our team." A single, low-commitment ask: "Would a 15-minute call this week make sense?" or "Worth a quick conversation?"

The cognitive load on the prospect determines whether they respond. One clear question requires one clear decision: yes or no. Multiple options require evaluation, comparison, and a more complex decision -- which means the prospect decides "later" and later becomes never.

> **CTA (Call to Action):** The single specific request you make of the reader. In outreach, the CTA is the ask at the end of the message. In marketing content, the CTA is the button or link that directs the reader to the next step. The quality of a CTA is measured not by how compelling it sounds but by how easy it is to act on. "Would a 15-minute call this week make sense?" is a strong CTA because it specifies the commitment (15 minutes), the timeframe (this week), and the decision required (yes or no). "Let me know if you are interested" is a weak CTA because it requires the prospect to define what "interested" means and what action to take next.

### Law 4: Short

Email outreach: maximum 150 words. LinkedIn messages: maximum 100 words. Cold call scripts: approximately 120 words (60 seconds spoken). Every word must earn its place. If a sentence does not advance the message toward the one ask, it gets cut.

Brevity is not a style preference. It is a response rate multiplier. Research from sales engagement platforms consistently shows that shorter messages receive higher response rates. The prospect is not reading your message in a quiet office with a cup of coffee. They are reading it on a phone between meetings, scanning the first two lines to decide whether to read the rest. Respect their time and they are more likely to give you some of it.

### Law 5: Sound Like a Person, Not a Company

No marketing language. The agent maintains a banned words list: leverage, synergy, best-in-class, seamless, robust, solution, game-changing, revolutionary, disruptive, holistic, end-to-end, cutting-edge, world-class, innovative, empower, unlock, transform. If any of these words appear in a draft, the agent removes them before output.

This law exists because marketing language signals that the message is a template. Templates signal that the sender did not invest time. Lack of investment signals that the prospect is not important to the sender. And prospects do not respond to senders who signal they are unimportant.

> **A/B Test:** A controlled experiment in which two versions of a message (Variant A and Variant B) are sent to similar audiences to determine which performs better on a specific metric. In outreach, you might test two different subject lines to see which achieves a higher open rate, or two different opening hooks to see which earns more replies. The critical discipline is testing one variable at a time. If you change the subject line and the body and the CTA simultaneously, you cannot identify which change drove the result. The formula is straightforward: change one element, measure the difference, keep the winner, test the next element.

## The `/outreach` Command in Practice

With the Five Laws established as the quality standard, the `/outreach` command applies them automatically. You provide the research brief, the channel, the goal, and the hook. The agent produces a draft, runs the Five Laws compliance check, and outputs the message only after it passes all five.

Here is what the interaction looks like for a LinkedIn direct message:

```
/outreach
> Agent: Please provide:
>   1. The research brief for this prospect (or the prospect name to fetch it)
>   2. The outreach channel (email / LinkedIn / WhatsApp / cold call script)
>   3. The goal of this first touch (discovery call / demo / referral / event invite)
>   4. Any specific angle or hook you want to lead with

> User: Research: Sarah Chen, VP of Operations at Meridian Logistics, Leeds.
        She posted about scaling without headcount 11 days ago. New fashion
        retail contract announced in Motor Transport. 4 ops roles posted in
        the last 30 days.
        Channel: LinkedIn DM
        Goal: 15-minute discovery call
        Hook: Her post about scaling without headcount + the new contract win
```

The agent produces:

```
OUTREACH DRAFT — LinkedIn DM | Sarah Chen / Meridian Logistics
─────────────────────────────────────────────────────────────

Hi Sarah,

Your post about "maintaining quality as you scale without just adding
headcount" stopped me scrolling — that's the exact tension we hear from
every VP Ops managing rapid 3PL growth.

Saw the news about your new fashion retail contract too. Congratulations —
and I imagine it creates exactly the scaling pressure you described.

We work with regional 3PLs to handle that — higher throughput without
proportional headcount growth. Three of our clients are in your segment.

Would a 15-minute call this week be worth your time?

[Name]

─────────────────────────────────────────────────────────────
FIVE LAWS CHECK:
Law 1 (Specific reference): ✅ Her LinkedIn post on scaling + Motor Transport contract
Law 2 (Lead with them):     ✅ First sentence is about her post, her challenge
Law 3 (One ask):            ✅ "15-minute call this week"
Law 4 (Word count):         ✅ 89 words (limit: 100)
Law 5 (No jargon):          ✅ Confirmed clean

NOTES:
Hook used:     LinkedIn post (11 days ago) + contract win (Motor Transport)
Tone:          Peer-level, operational
Confidence:    HIGH — strong public signal, recent and relevant
```

Notice the Five Laws check at the bottom. This is not optional formatting. The agent will not output a message without it. If you are reviewing outreach your team has written manually, you can use the same five-point check as an evaluation framework. Any message that fails even one law should be rewritten before sending.

> **CTR (Click-Through Rate):** The percentage of people who click a link after seeing or opening a message. In email outreach, CTR is calculated as clicks divided by opens (not sends). In LinkedIn, CTR measures the percentage of people who click through from an ad or sponsored post. CTR matters because it measures whether your message compelled action, not just attention. A high open rate with a low CTR means your subject line is working but your content is not. Industry benchmarks for B2B email CTR range from 2% to 4%, and LinkedIn Sponsored Content averages around 0.44-0.65% depending on ad format.

## Building Multi-Touch Sequences With `/sequence`

A single outreach message rarely generates a response. Not because the prospect is uninterested, but because they are busy, the timing was slightly off, or the message arrived at the wrong moment in their day. Multi-touch sequences solve this by providing multiple entry points for a conversation, each from a different angle, across different channels, over a defined period.

> **Nurture Sequence:** A series of messages designed to build trust and maintain engagement with a prospect who is not yet ready to buy. Unlike an outreach sequence (which aims to generate a first conversation), a nurture sequence provides value over weeks or months -- industry insights, case studies, frameworks, relevant news -- until the prospect's timing aligns with their need. The nurture sequence is the patient counterpart to the outreach sequence's direct approach. A typical nurture runs 6 to 12 touches over 8 to 16 weeks, with content that positions you as a sector expert rather than a vendor seeking a meeting.

The `/sequence` command builds complete multi-touch sequences calibrated to the prospect's score, stage, and channel preferences:

```
/sequence
> User: Build a 6-touch sequence for Sarah Chen (HOT lead, VP Ops,
        3PL sector). Goal: discovery call. Mix: LinkedIn + email.
        Tone: peer-level, no pitch. Spread over 21 days.
```

The agent produces a structured plan:

```
OUTREACH SEQUENCE: Sarah Chen / Meridian Logistics
────────────────────────────────────────────────────────────
Total touches: 6 | Duration: 21 days | Goal: discovery call

TOUCH 1 — Day 1 | LinkedIn DM
[Personalised to her post + the new contract — see /outreach above]

TOUCH 2 — Day 3 | Email (if no LinkedIn response)
Subject: Re: scaling ops at Meridian
[Cross-channel follow-up — different medium, same hook, new angle]

TOUCH 3 — Day 7 | LinkedIn — Value Add (no ask)
Send: Link to case study "How [similar 3PL] scaled peak throughput
by 40% without a headcount increase" — no pitch, just "thought this
might be relevant given what you're navigating."

TOUCH 4 — Day 10 | Email — Reframe
Subject: The 3PL scaling problem (3 patterns we see)
Body: Short email sharing 3 patterns in 3PL ops during rapid growth —
no product mention. Position as someone who understands her world.

TOUCH 5 — Day 17 | LinkedIn — Trigger Reference
If new news/signal has appeared: reference it. If not, a brief
"just checking in — is this timing off, or not the right priority?"

TOUCH 6 — Day 21 | Email — Final
Subject: Closing the loop
Body: "I've reached out a few times — clearly not the right moment.
No hard feelings. If ops scaling becomes a priority, I'm here."

────────────────────────────────────────────────────────────
SEQUENCE RULES:
- If prospect responds at any touch: exit sequence → run /brief
- If prospect opens Touch 4 but no reply: move Touch 5 to Day 12
- If prospect connects on LinkedIn: switch to warm DM follow-up
```

The critical insight about sequences is that each touch must add value independently. "Just following up" is never an acceptable opening because it signals that you have nothing new to say. Touch 3 in the example above sends a relevant case study with no ask. Touch 4 shares industry patterns with no product mention. The prospect experiences a series of useful interactions, not a series of increasingly desperate requests for a meeting.

## The `/follow-up` Command: After the Conversation Happens

Once a prospect responds -- whether they accept a meeting, ask a question, or request more information -- the outreach sequence stops and the `/follow-up` command takes over. This command handles post-interaction follow-up: the thank-you note after a discovery call, the materials promised during the conversation, the recap email that captures next steps, and the gentle nudge when a committed follow-up goes silent.

```
/follow-up
> Agent: Please provide:
>   1. The interaction type (discovery call / demo / meeting / email exchange)
>   2. Key points from the conversation
>   3. Commitments made (what you promised to send, what they promised to do)
>   4. The next step agreed upon
>   5. Any concerns or objections raised

> User: Discovery call with Sarah Chen, Meridian Logistics. 25 minutes.
        Key points: She confirmed the scaling challenge is real — 3 new
        depot leases, 40% throughput increase needed by Q3. Current WMS is
        legacy (Sage-based). Main concern: implementation timeline — they
        cannot afford downtime during peak season (Oct-Jan).
        I promised to send: a case study from a similar 3PL migration.
        She promised: to loop in their IT Director for a technical call.
        Next step: Technical discovery call in 2 weeks.
        Concerns: Implementation risk during peak. Budget approval needs COO.
```

The agent produces:

```
FOLLOW-UP — Post-Discovery Call | Sarah Chen / Meridian Logistics
─────────────────────────────────────────────────────────────

IMMEDIATE FOLLOW-UP EMAIL (send within 2 hours):

Subject: Great speaking today — case study + next steps

Hi Sarah,

Thanks for the conversation today. Really useful to understand the
scale of what Meridian is navigating — 40% throughput increase across
three depots is a significant operational challenge.

As promised, I've attached the case study from [Similar 3PL] — they
faced a very similar Sage migration scenario and we phased the rollout
to avoid any peak-season disruption. I think the phased timeline on
page 3 will be particularly relevant to your concern about downtime.

Confirmed next step: technical discovery call with your IT Director
in two weeks. I'll send a calendar invite for [suggested dates].

Looking forward to it.

[Name]

─────────────────────────────────────────────────────────────
INTERNAL NOTES (not for sending):
- COO approval required: prepare ROI one-pager before technical call
- Peak season concern is real: lead with phased implementation in
  all future materials
- Timeline pressure: Q3 target means decision needed by end of Q1
- Risk: If IT Director meeting slips, momentum dies. Follow up in
  5 days if no calendar acceptance.
─────────────────────────────────────────────────────────────
```

The `/follow-up` command captures two things the outreach commands do not: the institutional memory of what was discussed, and the internal action items that keep the deal moving. The "internal notes" section is not sent to the prospect. It is the agent's equivalent of the notes your best rep scribbles after every call -- except these notes are structured, searchable, and connected to the CRM record.

## The `/copy` Command: Variants That Test Angles, Not Words

> **Lead Magnet:** A piece of valuable content offered in exchange for the prospect's contact information. The lead magnet is the bridge between marketing (which generates attention) and sales (which converts attention into pipeline). A strong lead magnet solves a specific, immediate problem for the target persona: a benchmark report, a framework, a checklist, a calculator. A weak lead magnet offers generic value that anyone could find with a search engine. The test is simple: would the prospect pay for this content if it were not free? If not, it is not valuable enough to earn their contact details.

The `/copy` command generates copywriting variants for ad copy, email subject lines, landing pages, CTAs, and any short-form text that needs to be tested. The critical discipline it enforces is testing different angles, not just different words for the same angle.

```
/copy
> Agent: Please provide:
>   1. Copy type (email subject lines / ad copy / landing page hero / CTA)
>   2. Product or offer being promoted
>   3. Target persona
>   4. Core message: the ONE thing the copy must communicate
>   5. Number of variants required
>   6. Any constraints (character limits, platform specs)

> User: Type: Email subject lines
        Product: Whitepaper — "The 3PL Scaling Report 2026"
        Persona: VP Ops in regional 3PL operators, UK
        Core message: Your scaling challenge has a pattern — this report maps it
        Variants: 8
        Constraints: 50 characters max for mobile display
```

The agent produces:

```
COPY VARIANTS — Email Subject Lines | 3PL Scaling Report
─────────────────────────────────────────────────────────────

VARIANT A — Specificity framework
"The 3PL scaling pattern (new data)"
Characters: 36

VARIANT B — Curiosity framework
"Why growing 3PLs hit the same wall"
Characters: 37

VARIANT C — Relevance framework
"3PL ops: the Q3 throughput problem"
Characters: 36

VARIANT D — Question framework
"Scaling 3 depots without 3x staff?"
Characters: 36

VARIANT E — Pain framework
"The hidden cost of rapid 3PL growth"
Characters: 38

VARIANT F — Outcome framework
"40% throughput, zero new headcount"
Characters: 36

VARIANT G — Peer proof framework
"How 12 regional 3PLs scaled in 2025"
Characters: 38

VARIANT H — Urgency framework
"Before your next contract win, read this"
Characters: 42

─────────────────────────────────────────────────────────────
TESTING RECOMMENDATION:
Lead test: A vs. D (specificity vs. question)
Expected winner: D — questions outperform statements for this persona
Metric: Open rate (subject lines → measure opens, not clicks)
Minimum sample: 200 sends per variant before declaring a winner
Secondary test: Winner of A/D vs. G (add peer proof angle)
```

Notice that each variant tests a different angle: specificity, curiosity, relevance, question, pain, outcome, peer proof, urgency. If you tested eight variants that all said "3PL scaling report" in slightly different word orders, you would learn nothing. Testing different angles tells you which framing resonates with your audience, and that insight applies to every piece of communication you produce for that persona.

## Cultural Adaptation: Why the Five Laws Are Not Universal

The Five Laws of Outreach described above are Western B2B norms. They were developed in and for markets where cold outreach is an accepted business practice, where LinkedIn is the dominant professional network, where direct communication is valued, and where brevity signals respect for the recipient's time.

These assumptions do not hold everywhere. In relationship-first cultures -- much of South Asia, the Gulf Cooperation Council countries, Southeast Asia, and parts of Africa -- the Five Laws require significant adaptation. Understanding where and why they break down is as important as understanding the laws themselves, because the Sales Plugin will be used by teams operating in these markets.

In Pakistan, for example, B2B sales in the IT services, textile, and manufacturing sectors operate primarily through personal networks and referral chains. A cold LinkedIn message to a CEO in Lahore or Karachi is not just ineffective -- it can be counterproductive, signalling that you do not understand how business is done in that context. The entry point is almost always a mutual connection, a shared industry event, or an introduction through a trusted intermediary. Law 1 (reference something specific) still applies, but the specific reference is often "Ahmed mentioned you are navigating X" rather than "I saw your LinkedIn post about X."

Similarly, in the GCC markets -- Dubai, Riyadh, Doha -- business relationships are built through face-to-face interaction, hospitality, and personal trust established over time. The Five Laws' emphasis on brevity (Law 4) and a single direct ask (Law 3) can feel transactional in a culture where business conversations are deliberately unhurried. The adapted version might replace the immediate ask with an invitation to a shared context: a sector event, a knowledge-sharing session, or a meal.

The channel question also shifts. LinkedIn is dominant in Western markets. In South Asian B2B contexts, WhatsApp Business is often the professional communication platform of choice. A message that would be a LinkedIn DM in London is a WhatsApp message in Karachi.

### WhatsApp Business Outreach: A Worked Example

Consider a scenario where a Karachi-based SaaS company selling supply chain management software wants to reach procurement directors at textile manufacturers in Faisalabad. The prospect is Tariq Malik, Director of Procurement at Crescent Textiles, introduced through a mutual contact at the Pakistan Textile Exporters Association.

```
/outreach
> User: Research: Tariq Malik, Director of Procurement, Crescent Textiles,
        Faisalabad. Introduced via Ahmed Raza at PTEA. Crescent recently
        expanded to 3 new production units. Tariq spoke at the PTEA annual
        conference about supplier payment cycle management challenges.
        Channel: WhatsApp Business
        Goal: Chai meeting at next PTEA regional event
        Hook: Ahmed's introduction + Tariq's conference talk on payment cycles
```

The agent produces:

```
OUTREACH DRAFT — WhatsApp Business | Tariq Malik / Crescent Textiles
─────────────────────────────────────────────────────────────

Assalamu alaikum Tariq sahib,

Ahmed Raza suggested I reach out — he mentioned you are navigating
some interesting challenges with the expansion at Crescent. I watched
your PTEA talk on supplier payment cycle management and it resonated
strongly. We work with textile manufacturers on exactly that problem.

I will be at the PTEA regional event in Faisalabad next month. Would
you have time for chai? I would value hearing how the expansion is
going and whether the payment cycle challenges you described have
shifted with the new production units.

Best regards,
[Name] | [Title] | [Company]

─────────────────────────────────────────────────────────────
FIVE LAWS CHECK (adapted for relationship-first context):
Law 1 (Specific reference): ✅ PTEA conference talk + expansion news
Law 2 (Lead with them):     ✅ Opens with their challenge, not product
Law 3 (One ask):            ✅ Chai meeting at PTEA event (low commitment)
Law 4 (Word count):         ✅ 97 words (within WhatsApp norms)
Law 5 (No jargon):          ✅ Confirmed clean — natural conversational tone

CULTURAL ADAPTATIONS:
- Opened with referral source (Ahmed Raza) — essential in this context
- Formal address (sahib) — appropriate for first contact
- Ask is face-to-face meeting, not a call — relationship-building norms
- Mentioned shared industry context (PTEA) — community membership signal
```

The fundamental laws still hold: reference something specific, lead with their situation, make one ask, keep it concise, sound human. But the expression of each law adapts to the cultural context. The ask is chai, not a call. The opening is a referral, not a cold approach. The channel is WhatsApp, not LinkedIn.

## Putting It All Together: The Outreach Workflow

The commands you have seen in this lesson form a connected workflow. The `/outreach` command produces the initial message. The `/sequence` command wraps it in a multi-touch campaign. The `/follow-up` command handles what happens after the prospect responds. And the `/copy` command generates variants for testing, so every element of your outreach improves over time.

The Five Laws are not a one-time framework. They are an ongoing quality standard. As your team sends outreach, the agent tracks which hooks, angles, and framings generate the highest response rates for your specific market. Over time, the system learns which version of Law 1 (specific reference) works best for your prospects, which version of Law 3 (the ask) earns the most meetings, and which channels perform best for each persona.

The team that builds this system correctly has a compounding advantage: every outreach interaction generates data that refines the next one. Your top rep's instincts become institutional knowledge, encoded in the skill, tested at scale, and improved by every person on the team who uses it.

---

## Try With AI

### Prompt 1: Evaluate an Outreach Message Against the Five Laws

```
Here is an outreach email I received recently (or one I wrote for my team).
Please evaluate it against the Five Laws of Outreach:

[Paste any outreach email — real or hypothetical]

For each law, tell me:
1. Does it pass or fail?
2. What specifically passes or fails?
3. Rewrite the failing sections to achieve compliance.
Then produce the complete rewritten message with all five laws satisfied.
```

**What you're learning:** This prompt teaches you to use the Five Laws as an evaluation framework, not just a generation framework. The ability to diagnose why an outreach message is weak -- and fix the specific failing elements -- is the skill that makes you a better editor of AI-generated content and a better coach for your team's manual outreach.

### Prompt 2: Build a Multi-Channel Sequence for Your Market

```
/sequence
I sell [your product/service] to [your target persona] in [your market/region].
Build a 6-touch, 21-day outreach sequence with this context:
- Prospect: [a real or realistic prospect in your market]
- Channels: [the channels your prospects actually use — e.g. WhatsApp + email,
  or LinkedIn + phone]
- Goal: [your actual goal — discovery call, referral, event meeting]
- Cultural context: [any norms the agent should respect — e.g. referral-first
  market, face-to-face preference, formal address norms]
- Tone: [your brand voice — peer-level, consultative, formal, etc.]

After generating the sequence, review each touch and tell me: which law
is each touch primarily designed to reinforce?
```

**What you're learning:** This prompt forces you to think about channel selection and cultural context before generating content. By specifying the channels your prospects actually use (not the channels a Western B2B playbook assumes), you learn to adapt the framework to your reality. Asking which law each touch reinforces deepens your understanding of sequence architecture.

### Prompt 3: Generate and Compare Copy Variants

```
/copy
I need email subject lines for a lead magnet we are promoting.
Lead magnet: [describe your lead magnet — what it is, who it's for,
              what specific problem it solves]
Persona: [your target buyer — role, industry, seniority]
Variants: 8
Character limit: 50

After generating the variants, explain:
1. What angle does each variant test?
2. Which two variants would you test first and why?
3. What would a winning result tell you about your audience?
4. How would you apply that insight to your next outreach sequence?
```

**What you're learning:** This prompt teaches you to think about copy as a testing discipline, not a creative exercise. The agent generates variants that test different psychological angles (pain, curiosity, peer proof, urgency). By asking what a winning result would tell you, you learn to extract strategic insight from tactical copy tests -- connecting subject line performance to broader messaging strategy.
