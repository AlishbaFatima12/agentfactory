# Chapter 23: Sales & Revenue Operations (RevOps) and Marketing

> *"Our top sales rep closed 340% of quota last year. When we asked her what she did differently, she said: 'I research every prospect for 45 minutes before I call them. I know their priorities, their pain, their recent news. I never pitch — I just solve the problem they already have.' We have 47 other reps who spend 4 minutes on research. The gap isn't talent. It's time."*
> — VP of Sales, B2B SaaS company, 2025

---

## Introduction: The 1% Problem in Sales and Marketing

Every sales team has a top 1%. They close more, retain more, and generate more pipeline from fewer touches. They are not necessarily the most charismatic or the most experienced. They are the most prepared. They know their prospect's business before they make contact. They personalise at a level that feels like the prospect was the only person they were thinking about that week. They follow up at exactly the right moment with exactly the right content. They treat each deal as a unique puzzle, not a copy-paste of yesterday's pitch.

The other 99% of the team uses the same CRM, the same playbook, the same email templates. The gap is not access to information — it is the cognitive capacity to process it. Researching a prospect properly, personalising an outreach sequence, calibrating the pitch to the prospect's specific situation, timing the follow-up, writing the right content for the right stage of the buyer journey: these tasks take hours per prospect. At scale, they are impossible without AI.

The Claude Sales and Marketing Plugins, released in early 2026 alongside the broader Cowork plugin ecosystem, are built around a single organising principle: **scale the expertise of your top 1% across the entire team.** Every rep gets the research depth of your best rep. Every email is personalised to the depth your best rep would personalise it. Every follow-up is timed and crafted with the judgment of your best closer. Every marketing campaign is planned and analysed with the rigour of your best strategist.

This chapter teaches you to build that system.

---

## The Revenue Operations (RevOps) Framework

Before touching any tool, understand the conceptual architecture.

**Revenue Operations** is the discipline of aligning Sales, Marketing, and Customer Success around a shared data foundation, shared process definitions, and shared accountability for revenue outcomes. In the pre-AI era, RevOps was primarily a data and process function: building the CRM taxonomy, defining lead scoring models, maintaining the tech stack, producing pipeline reports. Important work, but largely backward-looking and reactive.

In the AI-native era, RevOps becomes a **forward-looking orchestration function**: the team that builds the AI agents, SKILL.md libraries, and workflow integrations that allow every customer-facing employee to operate at the level of their best colleague.

The four domains this chapter addresses:

| Domain | Pre-AI State | AI-Native State |
|---|---|---|
| **Prospecting** | Manual research; generic outreach; volume beats quality | Automated deep research; hyper-personalised outreach; quality beats volume |
| **Lead Scoring** | Rule-based models; stale CRM data; gut instinct | Continuous multi-signal scoring; real-time enrichment; predictive qualification |
| **CRM Enrichment** | Manual data entry; incomplete records; decaying data | Automatic enrichment from web, calls, emails; always-current prospect profiles |
| **Marketing** | Campaign-level targeting; slow content creation; lagging analytics | Segment-of-one targeting; instant content; real-time performance optimisation |

---

## The Plugin Architecture

### Installing the Sales and Marketing Plugins

```
Platform:  Claude Cowork
Path:      Cowork → Plugins → Browse

Sales Plugin:     https://claude.com/plugins/sales
Marketing Plugin: https://claude.com/plugins/marketing
```

The Sales and Marketing plugins ship as a coordinated pair because the handoff between marketing-generated leads and sales-worked pipeline is where most revenue is lost. A unified plugin architecture means the prospect intelligence built by marketing enrichment flows directly into the sales rep's research brief — no re-entry, no data loss, no context switching.

### Sales Plugin — Core Commands

| Command | Function |
|---|---|
| `/research` | Deep prospect and account research brief |
| `/score` | Lead scoring against your ICP definition |
| `/enrich` | CRM record enrichment from web and connected sources |
| `/outreach` | Personalised email and message drafting |
| `/sequence` | Multi-touch outreach sequence generation |
| `/brief` | Pre-call and pre-meeting preparation |
| `/follow-up` | Post-interaction follow-up drafting |
| `/pipeline` | Pipeline analysis and deal health assessment |

### Marketing Plugin — Core Commands

| Command | Function |
|---|---|
| `/campaign` | Campaign planning and brief generation |
| `/content` | Content creation for any channel and format |
| `/copy` | Ad copy, landing page copy, subject line generation |
| `/persona` | ICP and buyer persona development |
| `/analyze` | Campaign performance analysis and optimisation |
| `/calendar` | Content and campaign calendar planning |
| `/brief` | Creative brief and campaign brief generation |
| `/segment` | Audience segmentation strategy |

### The Shared Intelligence Layer

Both plugins connect to a shared `sales-marketing.local.md` configuration file — your organisation's ICP definition, messaging framework, brand voice, and competitive intelligence. This is the equivalent of the legal playbook from Chapter 22: the institutional knowledge that makes every output specific to your organisation rather than generic.

---

## Part One: Prospect Research — 45 Minutes of Intelligence in 4 Minutes

### What Your Best Rep Actually Does

Your top 1% spends their research time answering five questions before every outreach:

1. **Who exactly is this person?** Their career trajectory, current role scope, areas of responsibility, how long they've been in post, what they did before.
2. **What does their company actually do?** Not the website boilerplate — the real business model, the actual revenue drivers, the market position.
3. **What is happening to them right now?** Recent news, funding, product launches, leadership changes, market pressures, regulatory changes affecting their sector.
4. **What is the specific pain this person is most likely experiencing?** Given their role, their company's situation, and your product's capabilities — where is the overlap?
5. **What is the hook?** The specific thing you can reference that proves you did the research — the thing that makes your outreach feel like a conversation, not a campaign.

The `/research` command answers all five questions in under four minutes, for every prospect, at any volume.

### The `/research` Workflow

```
/research
> Agent: Who is the prospect and what is the context for this outreach?

> User: Sarah Chen, VP of Operations at Meridian Logistics, Leeds.
        We sell workflow automation software. Looking to open a conversation.

> Agent: [fetches prospect profile via web search MCP]
         [fetches company profile, news, financials]
         [cross-references against your ICP definition and product fit]
```

**Sample Research Brief Output:**

```
PROSPECT RESEARCH BRIEF
════════════════════════════════════════════════════════════
Prospect:   Sarah Chen, VP Operations | Meridian Logistics | Leeds, UK
Prepared:   [Date] | Confidence: HIGH (strong public signal)
ICP Match:  🟢 STRONG — see scoring section

── WHO IS SARAH CHEN? ──────────────────────────────────────
Career:     Ops background — 7 years at DHL (supply chain analyst →
            regional ops manager), then 3 years at Wincanton before
            joining Meridian 18 months ago. Promoted to VP Ops 6 months ago.
LinkedIn:   Active poster — last 3 posts on warehouse digitalisation,
            driver shortage, and a thought piece on "why last-mile is
            the decade's hardest ops problem."
New to role: Only 18 months at Meridian; still in impact-building phase.
            New VPs are typically most receptive to tools that help them
            make their mark quickly.

── WHAT IS MERIDIAN LOGISTICS? ──────────────────────────────
Revenue:    Est. £45–60M (Companies House filing, March 2025)
Model:      Regional 3PL — warehousing + last-mile delivery in Yorkshire
            and the Midlands; 400+ SME retail clients; 3 owned depots
Growth:     Added 2 new depot leases in Q4 2025 (planning applications
            filed: Leeds Council, Nottingham Council)
Clients:    Mix of e-commerce (est. 60%) and traditional retail (40%);
            heavy dependency on seasonal peak (Oct–Jan)
Tech stack: Legacy WMS (visible in 2 job postings for "WMS admin");
            no mention of modern automation tooling

── WHAT IS HAPPENING RIGHT NOW? ─────────────────────────────
🔴 HOT SIGNAL: Meridian posted 4 Operations roles in the last 30 days
   (Ops Coordinator ×2, Warehouse Shift Manager, Fleet Coordinator).
   Rapid headcount growth = process strain = pain.

🔴 HOT SIGNAL: Trade press (Motor Transport, March 2026): Meridian won
   a 3-year contract with a major online fashion retailer. Scale-up
   pressure will be acute.

🟡 WARM SIGNAL: Sarah posted 11 days ago about "the challenge of
   maintaining quality as you scale without just adding headcount."
   This is the exact problem your product solves.

🟢 SECTOR SIGNAL: 3PL sector is under margin pressure — fuel costs,
   driver wages, and e-commerce SLA expectations all tightening.
   Automation ROI stories resonate strongly right now.

── THE SPECIFIC PAIN ────────────────────────────────────────
Sarah is a newly promoted VP at a company that just won a significant
new contract and is hiring rapidly. She is under pressure to demonstrate
that she can scale operations without proportional headcount growth. Her
own LinkedIn post suggests she is already thinking about this problem.
Your product's core value proposition — scale throughput without scale
headcount — maps directly to her stated priority.

── THE HOOK ─────────────────────────────────────────────────
Reference her post on scaling quality without headcount (11 days ago).
Do NOT pitch — open a conversation about the specific challenge she raised.
The post is public and shows she is actively thinking about this. A response
that engages with her thinking specifically — not a generic outreach —
will differentiate from the 20+ other vendors messaging her this week.

── PRODUCT FIT ASSESSMENT ───────────────────────────────────
Your product addresses: warehouse workflow automation, multi-depot
coordination, SLA tracking, peak capacity management.
Meridian's pain: Legacy WMS, rapid growth, new major client, scaling.
Fit: STRONG. Every identified pain point is within your product's scope.
Recommended positioning: "Scale throughput, not headcount."

── RECOMMENDED FIRST TOUCH ──────────────────────────────────
Channel:  LinkedIn DM (she is active; her post is the natural entry point)
Tone:     Peer-to-peer; respect her expertise; no pitch; open a conversation
Hook:     Her post + the new contract (public signal) + the ops scaling question
Goal:     15-minute discovery call, not a demo

See /outreach for personalised message draft.
════════════════════════════════════════════════════════════
```

### Configuring Research Depth in SKILL.md

The research output is only as good as the ICP definition it is matched against. Configure `sales-marketing.local.md`:

```markdown
## ICP Definition — Ideal Customer Profile

### Firmographic Criteria

Company size:         50–500 employees
Revenue range:        £5M–£100M annual revenue
Stage:                Established business (5+ years); pre-IPO growth stage
Geography:            UK primary; EU secondary
Industry:             [List your top 3–5 verticals]
Technology maturity:  Mid-tech — has basic systems but not yet modern stack
                      (NOT greenfield; NOT enterprise with full stack already)

### Technographic Signals (GOOD FIT)

Positive signals:
- Legacy ERP or WMS (SAP B1, Sage, Dynamics NAV older versions)
- Job postings for "process improvement" or "ops coordinator" roles
- No mention of [your competitor's products] in job postings
- Using spreadsheets for functions your product automates (look in job ads)

Negative signals:
- Already using [Competitor A] or [Competitor B] (not worth competing)
- <50 employees (not enough process volume to justify your product)
- Pure startup / pre-revenue (no budget cycle)

### Timing Signals (HOT — prioritise immediately)

🔴 New contract win announced (expansion pressure)
🔴 New funding round (budget available; growth mode)
🔴 Leadership change in target role (new VP/Director in post < 18 months)
🔴 Rapid hiring in ops/process roles (scaling pain)
🔴 Office/facility expansion announced

🟡 Job posting in target department (pain signal)
🟡 Thought leadership post from target contact about your problem area
🟡 Industry/regulatory change affecting their sector

### Persona Profiles

PRIMARY: VP / Director of Operations
  Motivation:   Scale output; manage cost; hit SLAs; impress new leadership
  Fear:         Falling behind on a major new contract; being seen as bottleneck
  Trigger:      Rapid headcount growth creating process strain
  Tone:         Peer-level; operational; ROI-conscious; no fluff

SECONDARY: COO / CFO (economic buyer for significant deals)
  Motivation:   Margin improvement; risk reduction; scalable cost base
  Fear:         Investing in a tool the team doesn't adopt
  Trigger:      Budget cycle; board pressure on efficiency ratios
  Tone:         Business case; numbers; risk/return; references from peers

CHAMPION: Ops Manager / Process Analyst (internal champion)
  Motivation:   Tools that make their job easier; recognition for driving change
  Fear:         New system rejected by their team; looking bad to their VP
  Trigger:      Personally experiencing the pain your product solves
  Tone:         Practical; feature-level; implementation-focused; support heavy
```

---

## Part Two: Lead Scoring — Replacing Gut Instinct with Multi-Signal Intelligence

### Why Most Lead Scoring Fails

Traditional lead scoring is built on two types of signals: demographic fit (does the company match our ICP?) and behavioural engagement (did they open our emails, visit our website, download our content?). Both are necessary. Neither is sufficient.

Demographic fit without behavioural signals identifies companies that should buy but aren't ready. Behavioural signals without demographic fit rewards engagement from companies that will never be the right customer. And both models ignore the most important signal of all: **external timing signals** — what is happening to the prospect right now that makes them more or less likely to buy?

The `/score` command operates across three signal dimensions simultaneously:

```
/score
> Agent: Please provide the prospect and/or company details for scoring.

> User: [Paste lead record from CRM, or provide company name + contact]
```

### The Three-Dimension Scoring Model

**Dimension 1: Fit Score (0–40 points)**
How closely does the prospect match your ICP? Firmographics, technographics, industry, company size, role seniority. This is the baseline — a necessary condition, not a sufficient one.

**Dimension 2: Timing Score (0–40 points)**
What external signals suggest buying readiness right now? Funding events, hiring patterns, leadership changes, contract wins, regulatory changes, competitive pressures. This is where most scoring models have zero data — and where AI changes the game entirely.

**Dimension 3: Engagement Score (0–20 points)**
What has the prospect done that signals interest? Email opens, content downloads, website visits, event attendance, social engagement with your content. This is the weakest signal of the three — high engagement from a poor-fit, wrong-timing prospect is noise.

**Total Score: 0–100**

| Score Range | Classification | Recommended Action |
|---|---|---|
| 80–100 | 🔴 HOT — Sales Qualified | Immediate personal outreach; priority in rep's queue |
| 60–79 | 🟡 WARM — Marketing Qualified | Personalised nurture sequence; sales follow-up within 5 days |
| 40–59 | 🟢 CULTIVATE | Marketing nurture sequence; quarterly check-in |
| 0–39 | ⚪ NOT YET | Monitor; do not invest sales time |

### Sample Score Output

```
LEAD SCORE: Meridian Logistics / Sarah Chen
════════════════════════════════════════════════════════════
TOTAL SCORE: 87 / 100 — 🔴 HOT: Immediate Sales Action

FIT SCORE:      36 / 40
  Company size:    ✅ +8  (380 employees — within range)
  Revenue:         ✅ +8  (est. £50M — within range)
  Industry:        ✅ +8  (3PL logistics — top vertical)
  Tech maturity:   ✅ +8  (legacy WMS; no modern automation)
  Geography:       ✅ +4  (UK — primary market)

TIMING SCORE:   37 / 40
  New major contract win:      ✅ +15 (Motor Transport, March 2026)
  Rapid hiring in ops:         ✅ +12 (4 ops roles posted, 30 days)
  VP new in post (<18 months): ✅ +10 (new VP; impact-building phase)

ENGAGEMENT SCORE: 14 / 20
  Content download (whitepaper: "Scaling Ops Without Headcount"):  +8
  Website visit (pricing page, 6 days ago):                        +6
  Email open rate: below threshold                                  +0

SCORE RATIONALE:
  Meridian is in an acute scaling moment. A major new contract combined
  with rapid hiring and a new VP still building her leadership reputation
  creates the ideal conditions for a buying decision. The pricing page
  visit 6 days ago — unprompted — suggests active evaluation is underway.
  This lead warrants immediate personal outreach from your most senior rep.

RECOMMENDED ACTION:
  Route to: [Senior Rep name — based on territory/vertical assignment]
  Outreach: Personal LinkedIn message + email within 24 hours
  Frame:    Scale ops, not headcount — lead with the new contract context
  Goal:     Discovery call this week

NEXT REVIEW: 7 days (timing signals are acute; window may close)
════════════════════════════════════════════════════════════
```

---

## Part Three: CRM Enrichment — Data That Stays Current

### The Data Decay Problem

CRM data decays at approximately 30% per year. People change jobs, companies pivot, email addresses change, phone numbers change, buying intent changes. A CRM record entered 18 months ago may be partially or entirely wrong today. And most CRM records were never complete to begin with — created by a sales rep who typed in what they knew from a brief conversation and moved on.

The `/enrich` command connects to your CRM via MCP and updates records automatically, on a schedule or on-demand:

```
/enrich
> Agent: Which records would you like to enrich? You can specify:
>   - A single contact or account
>   - A segment (e.g. all contacts with last activity > 90 days)
>   - A list imported from CRM
>   - All records in a specified pipeline stage

> User: All Tier 1 accounts with no activity in the last 60 days.
        Priority on identifying any timing signals that may have changed.
```

### What Enrichment Adds

For each record, the agent fetches and updates:

**Contact-level:**
- Current role confirmed / updated (LinkedIn, company website)
- Email address verified / updated
- Phone number (where publicly available)
- Recent activity: posts, articles, conference appearances, job changes
- New pain signals: posts, interviews, quoted in press

**Account-level:**
- Revenue estimate updated (Companies House, Crunchbase, industry databases)
- Headcount change (LinkedIn company page; job postings delta)
- News events: funding, acquisitions, leadership changes, contract wins, regulatory actions
- Competitive intelligence: new vendors in their stack (visible in job postings, press releases)
- Tech stack changes: new tools, dropped tools

**Timing signal refresh:**
- Are there new HOT signals that weren't present when the record was created?
- Have circumstances changed in a way that improves or degrades fit?
- Has the prospect changed roles (requiring routing update)?

### MCP Integration for CRM Enrichment

The enrichment workflow requires MCP connectors to:
- Your CRM (Salesforce, HubSpot, Pipedrive, Zoho — all have available connectors)
- Web search (for real-time signal capture)
- LinkedIn (where API access is available)
- Companies House / Crunchbase / PitchBook (for firmographic data)
- Your email system (for engagement signal import)

```markdown
## CRM Enrichment Configuration (in sales-marketing.local.md)

### Enrichment Schedule
Full enrichment:     All Tier 1 accounts — monthly
Targeted enrichment: HOT leads — weekly
Trigger enrichment:  Any account with web activity — within 24 hours

### Fields to Enrich (in priority order)
1. Contact: current role confirmed
2. Contact: email verified
3. Account: headcount (current vs. last recorded)
4. Account: news events (last 30 days)
5. Account: timing signals (HOT/WARM/COLD)
6. Contact: recent posts / activity
7. Account: tech stack (job postings analysis)
8. Account: revenue estimate (annual refresh)

### Enrichment Output Format
For each record updated:
- List fields changed
- Highlight any new HOT timing signals
- Flag any records where contact has changed roles (requires re-routing)
- Generate recommended action for any record score change >15 points
```

---

## Part Four: Personalised Outreach — Ghostwriting at Scale

### The Paradox of Personalisation

The most effective sales outreach is highly personal. The least scalable activity in sales is writing highly personal outreach. This paradox has defined B2B sales for 30 years. Volume outreach (mass email) is efficient but ineffective. Personal outreach is effective but not scalable.

The `/outreach` command resolves the paradox: it produces outreach that is personalised to the depth your best rep would write it, at the volume your worst rep could send it.

### The Five Laws of Effective Outreach

Before generating any message, the SKILL.md for outreach enforces five laws derived from your best reps' approach:

**Law 1: Reference something specific and real.**
The message must contain at least one specific, verifiable reference that proves you researched this person — not a generic "I saw your company is growing" but "I noticed you posted about scaling quality without headcount two weeks ago — that's exactly the problem we help 3PL operators navigate."

**Law 2: Lead with their problem, not your product.**
The first sentence is about them. The first paragraph is about them. Your product appears in the second paragraph, briefly, as a potential solution to the problem already established. Never lead with "We help companies like yours..."

**Law 3: One ask. One clear next step.**
Every message ends with exactly one question or request. Not multiple options. Not "reply if interested." A specific, low-commitment ask: "Would a 15-minute call this week make sense?" or "Worth a quick conversation?"

**Law 4: Short.**
Email: maximum 150 words. LinkedIn message: maximum 100 words. Every word must earn its place. If a sentence does not advance the message toward the one ask, cut it.

**Law 5: Sound like a person, not a company.**
No marketing language. No "leverage," "synergy," "best-in-class," "solution." Write the way your best rep talks — direct, confident, specific, and human.

### The `/outreach` Command

```
/outreach
> Agent: Please provide:
>   1. The research brief for this prospect (or the prospect name to fetch it)
>   2. The outreach channel (email / LinkedIn / WhatsApp / cold call script)
>   3. The goal of this first touch (discovery call / demo / referral / event invite)
>   4. Any specific angle or hook you want to lead with

> User: Research: Sarah Chen / Meridian Logistics (research brief above)
        Channel: LinkedIn DM + follow-up email
        Goal: 15-minute discovery call
        Hook: Her post about scaling without headcount + the new contract win
```

**LinkedIn DM Draft:**

```
Hi Sarah,

Your post two weeks ago about "maintaining quality as you scale without
just adding headcount" stopped me scrolling — that's the exact tension
we hear from every VP Ops managing rapid 3PL growth.

Saw the news about your new fashion retail contract too. Congratulations —
that's a significant win. And I imagine it creates exactly the scaling
pressure you described.

We work with regional 3PLs to handle that — higher throughput without
proportional headcount growth. Three of our clients are in your segment.

Would a 15-minute call this week be worth your time?

[Name]
```

**Follow-up Email (Day 3 if no LinkedIn response):**

```
Subject: Re: scaling ops at Meridian

Hi Sarah,

Sent you a LinkedIn message a few days ago — wanted to follow up here
in case email is easier.

Context: We help regional 3PL operators like Meridian handle growth
surges — particularly the period after winning a major new client when
throughput pressure spikes before new processes are in place.

Your recent post about this resonated. We've helped three operators
in the Yorkshire/Midlands region navigate exactly this.

15 minutes this week — worthwhile?

[Name] | [Title] | [Company]
```

### Sequence Generation with `/sequence`

A single outreach message rarely closes a deal. The agent builds complete multi-touch sequences calibrated to your prospect's score and stage:

```
/sequence
> User: Build a 6-touch sequence for Sarah Chen (HOT lead, VP Ops,
        3PL sector). Goal: discovery call. Mix: LinkedIn + email.
        Tone: peer-level, no pitch. Spread over 21 days.
```

**Sample sequence output:**

```
OUTREACH SEQUENCE: Sarah Chen / Meridian Logistics
────────────────────────────────────────────────────────────
Total touches: 6 | Duration: 21 days | Goal: discovery call

TOUCH 1 — Day 1 | LinkedIn DM
[Personalised to her post + the new contract — see /outreach output above]

TOUCH 2 — Day 3 | Email (if no LinkedIn response)
Subject: Re: scaling ops at Meridian
[Follow-up email — see /outreach output above]

TOUCH 3 — Day 7 | LinkedIn — Value Add (no ask)
Send: Link to your case study "How [similar 3PL] scaled peak throughput
by 40% without a headcount increase" — no pitch, just "thought this
might be relevant given what you're navigating."

TOUCH 4 — Day 10 | Email — Reframe
Subject: The 3PL scaling problem (3 patterns we see)
Body: Short email sharing 3 patterns you see in 3PL ops during rapid
growth — no product mention. Position yourself as someone who
understands her world deeply. End with the ask.

TOUCH 5 — Day 17 | LinkedIn — Trigger Reference
If any new news/signal has appeared: reference it. If not, send a brief
"just checking in — is this timing off, or not the right priority?"

TOUCH 6 — Day 21 | Email — Final
Subject: Closing the loop
Body: "I've reached out a few times — clearly not the right moment.
No hard feelings. If the ops scaling challenge becomes a priority, I'm
here." Brief, graceful, leaves door open.

────────────────────────────────────────────────────────────
NOTES:
- If prospect responds to any touch: immediately branch to /brief
  (pre-call preparation) and exit the sequence
- If prospect opens Touch 4 email but does not respond: move Touch 5
  to Day 12 (engagement signal = alive interest)
- If prospect connects on LinkedIn after any touch: move to warm DM
  follow-up, not the generic sequence
```

---

## Part Five: Pre-Call and Meeting Preparation with `/brief`

### The Intelligence Your Rep Needs 15 Minutes Before the Call

Your best rep never walks into a discovery call cold. She has a one-page brief: who she's talking to, what she knows about them, what questions to lead with, what objections to anticipate, and what a successful first call looks like. She built this brief herself, spending 30–45 minutes. With the Sales Plugin, every rep on the team gets the same brief in under 2 minutes.

```
/brief type:"pre-call"
       prospect:"Sarah Chen, Meridian Logistics"
       call-type:"discovery"
       duration:"30 minutes"
```

**Sample Pre-Call Brief:**

```
PRE-CALL BRIEF: Sarah Chen | Meridian Logistics
Call type: Discovery | Duration: 30 min | [Date/Time]
════════════════════════════════════════════════════════════

QUICK CONTEXT (read in 2 minutes)
Sarah is 18 months into a VP Ops role. She's 6 months post-promotion.
She just landed a major new retail contract. She's hiring fast. She posted
publicly about the challenge of scaling quality without headcount. She visited
your pricing page 6 days ago. She's evaluating. She may not know she is yet.

YOUR GOAL FOR THIS CALL
Not to sell. Not to demo. To understand whether the problem she described
publicly is real, how urgent it is, who else cares about it, and what
solving it would be worth. Qualify hard. The pricing page visit is
encouraging but not confirmed intent.

DISCOVERY QUESTIONS — USE IN THIS ORDER

Opening (earn the right to ask questions):
"Thanks for making the time, Sarah. I saw your post a few weeks ago about
maintaining quality as you scale — that's exactly the conversation I wanted
to start. Before I tell you anything about us, can I ask: what's the
actual constraint right now? Is it throughput at the depots, coordination
across sites, SLA management with the new client, or something else?"

[Let her talk. Take notes. Ask "tell me more" not "so you need X."]

Depth questions (once you know what the top pain is):
1. "How are you managing that today? What's the current workaround?"
2. "What does that cost you — in time, headcount, errors, margin?"
3. "What have you already tried? What didn't work and why?"
4. "Is this your personal priority to fix, or is this coming from above?"
5. "If you solved this in the next 6 months, what does success look like?"

Qualification questions (ask gently; must know before close):
- "Who else would be involved in evaluating something like this?"
- "Is there a budget cycle I should be aware of?"
- "What's your timeline for addressing this?"

ANTICIPATED OBJECTIONS AND RESPONSES

"We're too busy right now with the new contract."
→ "That makes sense — and it's exactly why I wanted to talk now rather
   than later. The window between winning a contract and the first delivery
   is usually when the process decisions get made. After that, you're
   managing what's already in place."

"We already have a WMS."
→ "I'd expect so. We don't replace WMS — we sit on top of it and solve
   the coordination and workflow layer your WMS doesn't touch. What's
   your current WMS, out of curiosity?"

"We're not ready to buy anything."
→ "Completely understood. I'm not here to sell you anything today. I'm
   trying to understand whether the problem you described is one we
   could actually help with. If not, I'll tell you. Is it worth 20 more
   minutes to find out?"

CALL SUCCESS CRITERIA (choose ONE to walk away with)
Primary: Confirmed pain, confirmed buyer, confirmed timeline, next step booked
Secondary: Confirmed pain, next step booked (even if timeline is unclear)
Minimum: Agreement to send relevant case study + follow-up in 2 weeks

COMPETITORS TO LISTEN FOR
If she mentions [Competitor A]: ask what she liked and what concerned her
If she mentions [Competitor B]: note — they are likely in active evaluation

THINGS NOT TO DO
- Don't demo today (you don't have product fit confirmed yet)
- Don't mention pricing (too early)
- Don't talk for more than 30% of the call
- Don't use "solution," "leverage," or "best-in-class"
════════════════════════════════════════════════════════════
```

---

## Part Six: Marketing — Content, Campaigns, and Performance

### The Marketing Plugin's Core Capability

The marketing function has three time-consuming activities where AI creates the most leverage: content creation, campaign planning, and performance analysis. The Marketing Plugin addresses all three through the `/content`, `/campaign`, and `/analyze` commands.

### Part 6A: Content Creation with `/content`

Your best content marketer produces three or four deeply researched, beautifully written pieces per week. Your average content marketer produces one. The gap is not quality of thinking — it is research time, writing speed, and the cognitive overhead of switching between briefs, drafts, and edits.

```
/content
> Agent: What would you like to create?

> User: A 1,200-word thought leadership article for LinkedIn targeting
        VP Ops personas in the 3PL sector. Topic: why 3PL operators
        who survived the 2024–25 delivery cost crunch are now positioned
        to win the next five years. Tone: authoritative but practical.
        No product pitch. Brand voice: direct, data-informed, human.
        Include: 2–3 statistics, 1 case study reference, strong hook.
```

**Configuring Brand Voice in SKILL.md:**

```markdown
## Brand Voice Configuration

### Voice Principles
Tone:         Direct, confident, practical. We speak like a senior operator,
              not like a marketing department.
Language:     Avoid: "solution," "leverage," "best-in-class," "seamless,"
              "robust," "synergy," "game-changing," "revolutionary."
              Use: specific, concrete, operational language.
POV:          We have opinions. We take positions. We don't hedge.
Humour:       Dry wit is appropriate. Jokes are not.
Data:         Every claim that can be supported with data should be.
              Never fabricate statistics — if uncertain, note as estimate.

### Content Pillars (rank order)
1. Operational excellence — process, efficiency, the craft of ops management
2. Sector intelligence — what's happening in the 3PL/logistics market
3. Technology — practical, not evangelical; tools that actually work
4. People and leadership — scaling teams; building ops culture

### Persona Voice Guide
Writing FOR VP Ops: Practical, operational, peer-level.
  They have no patience for marketing fluff. Lead with the real problem.
  They respect specifics: "40% throughput improvement" beats "significant gains."

Writing FOR CFO: Numbers-first. Risk and return. Total cost of ownership.
  They want to see the business case, not the product features.

Writing FOR CEO/COO: Strategic, market-level, competitive positioning.
  They want to know: what does this mean for the business in 3 years?

### SEO Configuration (if applicable)
Primary keywords:  [list 5–8 target keywords]
Secondary:         [list 10–15 long-tail keywords]
Competitor topics: [topics competitors rank for that we should contest]
```

### Content Formats the Plugin Supports

```
/content type:"linkedin-article"    length:1200   topic:"..."
/content type:"blog-post"          length:2000   topic:"..."
/content type:"email-newsletter"   length:600    topic:"..."
/content type:"case-study"         format:full   client:"..."
/content type:"social-post"        platform:linkedin/twitter/instagram
/content type:"webinar-script"     duration:45min topic:"..."
/content type:"whitepaper"         length:3500   topic:"..."
/content type:"sales-one-pager"    audience:"VP Ops" product:"..."
/content type:"video-script"       duration:3min  format:explainer
/content type:"podcast-outline"    duration:30min topic:"..."
```

### Part 6B: Campaign Planning with `/campaign`

A campaign brief that used to take a marketing manager two days to build — competitive research, audience definition, channel mix, content plan, success metrics, budget allocation — now takes 30 minutes of collaboration with the agent.

```
/campaign
> Agent: What are we planning? Tell me:
>   1. The campaign goal (awareness / lead gen / pipeline acceleration / retention)
>   2. The target audience
>   3. The product or feature being promoted (if any)
>   4. The budget range
>   5. The timeline
>   6. Any constraints (channels, creative resources, compliance)

> User: Goal: generate 50 qualified leads (HOT score 60+) in Q2
        Audience: VP Ops and COO in UK 3PL operators, 50–400 employees
        Product: Core platform — workflow automation
        Budget: £25,000
        Timeline: April–June 2026 (12 weeks)
        Constraints: Small creative team (1 designer, 1 writer). No events.
```

**Sample Campaign Brief Output:**

```
Q2 LEAD GENERATION CAMPAIGN BRIEF
Target: 50 HOT-scored leads | Budget: £25,000 | April–June 2026
════════════════════════════════════════════════════════════

STRATEGY: "The Scaling Problem" — a thought leadership-led campaign
targeting 3PL operators navigating the post-contract-win growth surge.
Rather than advertising our product, we publish intelligence that our
target buyer already wants. We earn attention; sales converts it.

WHY THIS APPROACH:
VP Ops and COOs in this sector consume trade press and LinkedIn content.
They respond to peer intelligence, not to vendor advertising. Our highest
converting channel historically is inbound from content that positions us
as sector experts. This campaign doubles down on what already works.

AUDIENCE DEFINITION
Primary:   VP Ops / Director Ops in UK 3PL operators, 50–400 employees
Secondary: COO in same segment (economic buyer; engaged via CEO/CFO content)
Size:      Est. 1,800–2,400 companies in target segment (UK 3PL data)
Reach:     Target 600–800 decision-makers across channels

CHANNEL MIX

Week 1–4: Content Foundation (£4,000)
  - Publish: "The 3PL Scaling Report 2026" (gated whitepaper, 3,000 words)
    [This is the lead magnet — all other channels drive to this]
  - Blog: 3 supporting articles (unlocked; SEO and LinkedIn)
  - LinkedIn: Company page posts (3×/week from company; 5×/week ghostwritten
    for CEO/VP Sales personal profiles)

Week 3–8: LinkedIn Sponsored Content (£10,000)
  - Audience: LinkedIn Company targeting — job titles VP Ops, Director Ops,
    COO; industry: Transport, Logistics, Warehousing; company size 50–500
  - Creative: 3 ad variants testing hook angles (scale, cost, risk)
  - Format: Single image (link to whitepaper) + Thought Leader Ads
    (sponsored posts from CEO personal profile — typically 3× higher CTR)
  - Budget split: £7,000 Sponsored Content / £3,000 Thought Leader Ads

Week 2–12: Sales Plugin Integration (£0 additional — time investment)
  - All whitepaper downloaders enriched via /enrich within 24 hours
  - All downloads scored via /score and routed: HOT → immediate outreach;
    WARM → 7-day nurture sequence; CULTIVATE → newsletter
  - Outreach sequences built via /sequence for all HOT-scored downloaders
  - Target: 15–20% of HOT downloads convert to discovery calls

Week 4–10: Email Nurture (£2,000 — design/copywriting)
  - 5-email nurture sequence for whitepaper downloaders not yet HOT-scored
  - Content: sector intelligence, mini case studies, practical frameworks
  - No product pitch until email 4
  - Goal: move WARM leads to HOT over 6-week period

Week 6–12: Trade Press and Partner (£5,000)
  - 2 sponsored editorial slots in Motor Transport or Logistics Manager
    (reaches exactly the right audience)
  - Co-authored article with a non-competing industry voice
    (increases credibility; shares distribution)

Week 8–12: Retargeting (£4,000)
  - LinkedIn retargeting of whitepaper page visitors who did not download
  - Email retargeting of opens with no click (re-send, different subject line)

CONTENT CALENDAR (12-week overview)
[see /calendar for detailed week-by-week content plan]

SUCCESS METRICS
Primary KPI:    50 HOT-scored leads (score 60+)
Secondary KPIs: Whitepaper downloads: 400+
                LinkedIn organic reach: 80,000+ impressions
                Cost per HOT lead: <£500
                Sales accepted leads from campaign: 30+

WEEKLY REVIEW CADENCE
  Marketing: Review channel performance every Monday
  Sales + Marketing: Align on lead quality every Wednesday
  /analyze report: Every Friday — see Part 6C

RISK: If whitepaper download rate is below 50/week by Week 4 →
  test new headline; add LinkedIn DM outreach to drive downloads directly

BUDGET SUMMARY
  Content creation:      £4,000
  LinkedIn sponsored:    £10,000
  Email design/copy:     £2,000
  Trade press:           £5,000
  Retargeting:           £4,000
  TOTAL:                £25,000
════════════════════════════════════════════════════════════
```

### Part 6C: Performance Analysis with `/analyze`

The most underutilised hour in marketing is the hour spent analysing what happened last week. Most teams look at top-line numbers (impressions, clicks, conversions) and draw intuitive conclusions. The `/analyze` command goes deeper: multi-channel attribution, content performance at the asset level, lead quality by source, and concrete optimisation recommendations — not just observations.

```
/analyze
> User: Here is last week's campaign data. Please analyse performance,
        identify the top 3 optimisation opportunities, and recommend
        specific changes for next week.

[Paste: channel performance data, lead data, conversion data]
```

**Sample Analysis Output:**

```
WEEKLY CAMPAIGN ANALYSIS — Week 5 of 12
Generated: [Date] | Campaign: Q2 Lead Gen — "The Scaling Problem"
════════════════════════════════════════════════════════════

HEADLINE NUMBERS — WEEK 5
Whitepaper downloads:  47 (target: 35 — ✅ 134% of target)
HOT leads generated:    6 (target: 4 — ✅ 150% of target)
LinkedIn impressions:   18,400 (target: 12,000 — ✅ 153% of target)
LinkedIn CTR:           0.38% (industry benchmark: 0.40% — ⚠️ just below)
Email open rate:        34% (benchmark: 28% — ✅)
Email click rate:       3.1% (benchmark: 4.2% — ⚠️ below)
Cost per download:      £8.50 (target: <£12 — ✅)
Cost per HOT lead:      £381 (target: <£500 — ✅)

TOP 3 OPTIMISATION OPPORTUNITIES

1. 🔴 EMAIL CLICK RATE IS DRAGGING (3.1% vs. 4.2% benchmark)
   Analysis: Open rate is strong (34%) — subject lines are working.
   Click rate is weak — the body content is not compelling action.
   Diagnosis: Email 3 in the nurture sequence (the "3 patterns" email)
   has the lowest click rate (1.8%). It's the most theoretical email
   in the sequence and lacks a specific, concrete hook.
   RECOMMENDED CHANGE: Rewrite Email 3. Replace the three general patterns
   with one specific mini case study — a named (anonymised) company, a
   specific problem, a specific outcome. Test subject line: "How one
   Midlands 3PL doubled throughput without hiring" vs. current.
   Expected impact: +1–1.5% click rate on Email 3; +3–4 incremental
   HOT leads over remaining 7 weeks.

2. 🟡 LINKEDIN THOUGHT LEADER ADS SIGNIFICANTLY OUTPERFORMING SPONSORED
   Analysis: CEO personal profile posts are generating 2.8× higher CTR
   (1.06%) vs. company sponsored content (0.38%). This is consistent
   with LinkedIn's published benchmarks for Thought Leader Ads.
   Current split: 70% Sponsored Content / 30% Thought Leader Ads.
   RECOMMENDED CHANGE: Rebalance to 40% Sponsored / 60% Thought Leader
   Ads for weeks 6–12. Reallocate £2,500 from Sponsored to Thought Leader.
   Expected impact: +35% improvement in total LinkedIn CTR; +8–10
   additional whitepaper downloads per week.

3. 🟡 TRADE PRESS PERFORMING BELOW EXPECTATION
   Analysis: Motor Transport article (Week 4) generated 31 UTM-tracked
   visits to the whitepaper page but only 8 downloads (26% conversion).
   The whitepaper landing page conversion rate from all other sources
   is 58%. The trade press audience is converting poorly.
   Diagnosis: Trade press readers are in awareness mode, not evaluation
   mode. The whitepaper landing page is optimised for mid-funnel visitors
   (evaluation language). It may be too much of a commitment for the
   awareness-stage audience trade press delivers.
   RECOMMENDED CHANGE: Create a lighter entry point for trade press traffic.
   Offer: short "3PL Scaling Checklist" (1 page, immediate value) with
   the whitepaper as the upsell after email capture. Test against current
   landing page. Expected impact: +15–20% conversion from trade press;
   +5–7 additional downloads from current and remaining trade press placements.

WHAT IS WORKING — DON'T CHANGE

✅ LinkedIn audience targeting is precise: 94% of HOT-scored leads are
   within target firmographic criteria. Do not adjust targeting parameters.

✅ Whitepaper content quality is strong: 73% of downloaders are reading
   past page 6 (engagement tracking). Content is earning attention.

✅ Sales Plugin integration is fast: average enrichment within 18 hours
   of download; average HOT lead to first outreach within 31 hours.
   This is the revenue engine — do not disrupt it.

WEEK 6 ACTION PLAN (specific; assigned; deadline)
[ ] Rewrite Email 3 — [Content Writer] — by Wednesday
[ ] LinkedIn budget rebalance — [Paid Media] — by Monday
[ ] Build lightweight landing page for trade press traffic — [Designer +
    Writer] — by Thursday (in time for Week 7 trade press slot)
[ ] A/B test launch for Email 3 — [Marketing Ops] — by Thursday
════════════════════════════════════════════════════════════
```

---

## Part Seven: The RevOps Agents — Orchestrating the Revenue Engine

### The Five Core RevOps Agents

The true power of AI-native RevOps is not in individual commands but in persistent agents that manage the end-to-end revenue process — routing leads, triggering research, initiating sequences, alerting reps, and reporting on outcomes — without manual intervention at each step.

---

#### Agent 1: The Lead Intelligence Agent

**Purpose:** Monitor configured prospect lists and signal sources continuously. Alert sales reps when HOT timing signals appear. Never let a hot moment go undetected.

**Trigger events monitored:**
- New funding announcement for any company in prospect list
- Leadership change in target role at any monitored company
- New major contract win (press release, trade press)
- Rapid hiring in target department (LinkedIn company pages)
- Target persona posts about your problem area (LinkedIn)
- Target company visits your website (if tracking enabled via MCP)

**Workflow:**

```
1. Daily scan: all configured sources for all monitored accounts
2. Classify any new signals: HOT / WARM / NEUTRAL
3. Update lead score for affected accounts
4. For any account whose score crosses 60 threshold: generate
   research brief + notify assigned rep within 2 hours
5. Weekly digest: all signal changes across monitored accounts
   sent to RevOps and Sales leadership
```

**SKILL.md for Lead Intelligence Agent:**

```markdown
---
name: lead-intelligence-agent
version: 1.0
description: >
  Activate for: lead monitoring, prospect signal, account alert, timing signal,
  prospect research update, CRM enrichment trigger, hot lead alert,
  lead scoring update, new signal detected.
---

## SIGNAL CLASSIFICATION

HOT (alert within 2 hours):
- Funding round announced
- New contract win announced
- VP/Director-level hire in target role
- Website pricing page visit (if tracking enabled)
- Direct response to any company content

WARM (daily digest):
- Job posting in target department
- Company expansion announcement
- Prospect posts about your problem area
- Conference/event appearance by prospect

NEUTRAL (weekly digest):
- General company news not directly relevant
- Industry news with no specific prospect link

## ALERT FORMAT

  🔴 HOT SIGNAL ALERT — [Timestamp]
  ─────────────────────────────────────
  Account:   [Company]
  Contact:   [Name, Title]
  Rep:       [Assigned rep]
  Signal:    [Description of event]
  Source:    [URL or source]
  Action:    Run /research + /outreach immediately
  Deadline:  Outreach within 24 hours of this alert
  Score:     Updated from [X] → [Y]
  ─────────────────────────────────────

## NEVER DO THESE
- NEVER alert on a signal without a recommended action
- NEVER generate duplicate alerts for the same signal
- NEVER mark a signal HOT without at least 2 corroborating data points
```

---

#### Agent 2: The CRM Hygiene Agent

**Purpose:** Keep the CRM current automatically. Run enrichment on schedule. Flag stale, incorrect, or incomplete records. Ensure reps are always working with accurate data.

**Weekly workflow:**
1. Identify all records with last enrichment > 30 days
2. Run enrichment for Tier 1 accounts
3. Flag contacts whose roles have changed (LinkedIn verification)
4. Identify records with missing mandatory fields
5. Generate weekly CRM health report for RevOps

**Monthly workflow:**
1. Full enrichment pass — all active accounts
2. Score recalculation for all active pipeline
3. Identify accounts that have dropped from HOT to WARM or COLD
   (generate churn-risk alert for CS team)
4. Generate monthly data quality report

---

#### Agent 3: The Outreach Sequencing Agent

**Purpose:** Manage multi-touch outreach sequences for all HOT and WARM leads. Track which touches have been sent. Trigger follow-ups automatically. Flag responses for rep attention.

```
When a lead is classified HOT:
  → Generate research brief automatically
  → Build 6-touch sequence via /sequence
  → Schedule Touch 1 within 24 hours
  → Track opens, clicks, replies via email MCP
  → Trigger subsequent touches on schedule
  → If reply detected: pause sequence; alert rep immediately
  → If no reply after Touch 6: move to WARM nurture cadence;
    log in CRM as "Sequence completed — no response"
```

---

#### Agent 4: The Marketing Performance Agent

**Purpose:** Automatically pull weekly performance data from all connected marketing channels. Generate analysis report. Distribute to relevant stakeholders. Track progress against campaign KPIs.

**Connected via MCP to:**
- LinkedIn Campaign Manager
- Google Analytics / GA4
- Email platform (Mailchimp, HubSpot, Klaviyo, etc.)
- CRM (for lead quality data by source)
- Ad platforms (Google Ads, Meta if applicable)

**Weekly output:**
- Channel-by-channel performance vs. targets
- Top 3 optimisation recommendations (specific, actionable)
- Content performance: which assets are earning the most qualified attention
- Lead quality by source: which channels generate HOT leads vs. volume
- Budget pacing: on track / over / under for each channel

---

#### Agent 5: The Revenue Reporting Agent

**Purpose:** Produce the weekly revenue dashboard for sales and marketing leadership — pipeline by stage, lead velocity, campaign contribution, forecast vs. target.

```
/pipeline
> Agent: Fetching pipeline data from CRM...

Output:
- Pipeline by stage (total value; count; average deal size)
- Pipeline created this week vs. target
- Pipeline at risk (no activity > 14 days)
- Lead-to-opportunity conversion rate (by source)
- Campaign contribution to pipeline (by campaign)
- Forecast: expected close this quarter (weighted by stage probability)
- Deals needing immediate attention (stuck, stale, or at competitive risk)
```

---

## Part Eight: The Sales & Marketing SKILL.md Library

### sales-marketing-global-router.md

```markdown
---
name: sales-marketing-global-router
version: 1.0
description: >
  TOP-LEVEL ROUTER. Activate when ANY of these terms appear:
  prospect, lead, outreach, email, LinkedIn message, sales, CRM,
  Salesforce, HubSpot, pipeline, deal, opportunity, discovery call,
  demo, follow-up, sequence, nurture, ICP, ideal customer, lead score,
  lead scoring, enrich, enrichment, research, account research, campaign,
  content, marketing, SEO, social media, LinkedIn ad, blog post, whitepaper,
  case study, newsletter, persona, buyer, segment, performance, analytics,
  RevOps, revenue operations, marketing qualified, sales qualified.
author: Panaversity — The AI Agent Factory
chapter: 23 — Sales & Revenue Operations and Marketing
---

## STEP 1 — IDENTIFY TASK AND LOAD PRODUCT FILE

| Query Pattern                              | Load Product File                    |
|--------------------------------------------|--------------------------------------|
| Prospect/account research                  | products/prospect-research.md        |
| Lead scoring, qualification                | products/lead-scoring.md             |
| CRM enrichment, data update                | products/crm-enrichment.md           |
| Outreach email, LinkedIn, cold message     | products/outreach.md                 |
| Multi-touch sequence                       | products/sequence.md                 |
| Pre-call, pre-meeting brief                | products/pre-call-brief.md           |
| Follow-up after meeting/demo               | products/follow-up.md                |
| Pipeline analysis, deal health             | products/pipeline.md                 |
| Content creation (any format)              | products/content-creation.md         |
| Campaign planning                          | products/campaign-planning.md        |
| Ad copy, landing page, subject lines       | products/copywriting.md              |
| Campaign performance analysis              | products/performance-analysis.md     |
| Content calendar                           | products/content-calendar.md         |
| Persona, ICP, audience definition          | products/persona-icp.md              |

## STEP 2 — ALWAYS LOAD CONFIGURATION

Always load: sales-marketing.local.md
Check for:
- ICP definition (firmographic + technographic + timing signals)
- Brand voice configuration
- Competitor intelligence
- Persona profiles
- Messaging framework

IF sales-marketing.local.md NOT FOUND:
  Inform user: "No ICP/brand configuration found. Proceeding with
  general best practices. For better results, configure
  sales-marketing.local.md — see the template provided."

## UNIVERSAL RULES

- NEVER fabricate prospect data — only report what is verifiable
- NEVER invent statistics or fabricate company information
  (if uncertain, label as "estimated" or "unverified")
- NEVER send an outreach message that is not personalised to
  at least one specific, verifiable fact about the prospect
- NEVER write marketing copy that makes claims the product
  cannot substantively support
- NEVER skip ICP validation before investing in outreach
  (if a lead does not meet ICP minimum, flag it before building materials)
- ALWAYS include the five outreach laws check before finalising
  any outreach message
- ALWAYS provide specific, actionable optimisation recommendations
  in any performance analysis — observations without action are useless
```

---

## Exercises

Each exercise produces a deployable output. Work through them in sequence — each builds on the previous.

---

### Exercise 1: Build Your ICP and Sales-Marketing Configuration

**Type:** Configuration
**Time:** 90 minutes
**Prerequisite:** Sales Plugin installed; access to your last 20 closed-won deals

**Why this matters:** Every subsequent exercise depends on the quality of your ICP definition. The most common reason AI outreach fails is not a bad prompt — it is a vague ICP that generates research briefs without discriminating between good-fit and poor-fit prospects.

**Step 1 — Mine your closed-won deals.**

For each of your last 20 closed-won customers, document:
- Company size (employees + revenue)
- Industry / sub-sector
- Target persona (who you sold to; who signed off)
- What triggered their evaluation? (timing signal)
- How long was the sales cycle?
- What was the primary pain they were solving?
- What would have made them a NO (what almost stopped them buying)?

Look for patterns. The ICP is not what you wish your customers were — it is what your best customers actually are.

**Step 2 — Define the "never buy" signals.**

From the same deals, plus any significant losses, define:
- Company types that consistently do not progress past discovery
- Buyer personas that engage but never close
- Timing signals that look positive but consistently lead to no decision
- These are as important as the positive ICP signals

**Step 3 — Draft your ICP in Cowork:**

```
/persona type:"ICP-definition"
> Agent: Please answer the following questions and I will build
>        your complete ICP definition for sales-marketing.local.md.

[Work through the interview: firmographics, technographics,
 timing signals, persona profiles, messaging framework,
 brand voice, competitor intelligence]
```

**Step 4 — Build the configuration file.**

Using the template provided in the Chapter 23 SKILL.md library, fill in `sales-marketing.local.md` completely.

**Step 5 — Validate against your last 5 closed-won deals.**

Run `/score` for each of your last 5 closed-won customers (as if they were new leads today). All 5 should score HOT (60+). If any score below 60, your ICP definition is missing a dimension. Debug and refine.

**Deliverable:** A validated `sales-marketing.local.md` configuration file that scores all 5 closed-won customers as HOT. This is the foundation of your AI sales engine.

---

### Exercise 2: The Research and Outreach Sprint

**Type:** Applied Practice — Sales
**Time:** 60 minutes
**Plugin commands:** `/research`, `/score`, `/outreach`
**Goal:** Demonstrate the quality gap between standard rep outreach and AI-assisted outreach

**The Setup:** You have a list of 5 target prospects. Your task is to produce research briefs, score each prospect, and write personalised outreach for the top 3. Time yourself. Compare your output to what you would have produced in the same time without AI assistance.

**Step 1 — Build your 5-prospect list.**

Choose 5 real companies that match your ICP. They should be companies you actually want to target — this exercise is most valuable if the output is real. If you are doing this in a classroom setting, use publicly available companies in your target sector.

For each company, identify one target contact (the primary persona from your ICP definition).

**Step 2 — Run research on all 5:**

```
/research
> User: [Prospect name], [Title], [Company], [Location]
        Context: We are targeting [product/service]. I am trying to
        understand fit, timing, and the best outreach angle.
```

Review each brief. For each:
- What are the HOT timing signals (if any)?
- What is the specific pain this person is most likely experiencing?
- What is the hook — the one specific thing that would make your outreach feel personal?

**Step 3 — Score all 5:**

```
/score
> User: [Paste research brief OR provide company + contact details]
```

Rank your 5 prospects by score. The top 3 get personalised outreach this week. The bottom 2 go into a monitoring list.

**Step 4 — Write personalised outreach for your top 3:**

For each:
```
/outreach
> User: Prospect: [name / research brief]
        Channel: [LinkedIn DM or email — your preference]
        Goal: Discovery call
        Hook: [Specify the specific hook from the research brief]
```

Review each output against the Five Laws of Outreach. For each law, evaluate: is this message compliant? If not, iterate with the agent until it is.

**Step 5 — The comparison.**

Now look at your CRM's existing outreach templates. Put one of your AI-assisted messages next to your standard outreach template for the same persona. Answer honestly:
1. Which message would you respond to if you received it?
2. What specific elements make the AI-assisted message more likely to get a response?
3. Which elements of the AI-assisted message could be improved further?

**Deliverable:** 5 research briefs, 5 lead scores with ranking, 3 personalised outreach messages ready to send, and a written reflection on the quality comparison.

---

### Exercise 3: Build the Lead Scoring Model

**Type:** Systems Design
**Time:** 75 minutes
**Plugin commands:** `/score`, `/enrich`
**Goal:** Deploy a three-dimension lead scoring system for your organisation

**Step 1 — Define your scoring dimensions.**

Using the three-dimension model (Fit / Timing / Engagement — see Part Two), define the specific criteria and point weights for your ICP.

Work through this in Cowork:
```
/score type:"model-configuration"
> Agent: Let's build your lead scoring model. I'll ask you a series of
>        questions and produce a scoring configuration for your
>        sales-marketing.local.md file.
```

The agent will ask:
- What are your firmographic ICP criteria and how important is each? (points allocation)
- What timing signals most predict purchase in your market?
- What engagement signals do you track and how reliable are they?

**Step 2 — Test against historical data.**

Take your last 10 deals (mix of won, lost, and no-decision). Score each using the model. Expected result:
- Closed-won: majority should score 60+
- Closed-lost (good-fit company, lost to competitor): should score 50–70 (good fit, right timing, lost on product/price)
- No-decision: should score 30–50 (good fit, timing was wrong)
- Wrong-fit: should score below 30

If the results are inconsistent with expectations, recalibrate point weights and re-test.

**Step 3 — Define the routing rules.**

For each tier (HOT / WARM / CULTIVATE / NOT YET), define:
- Who receives the lead (rep tier, territory, vertical specialism)?
- What happens within the first 24 hours?
- What is the SLA for first outreach?
- What happens if the SLA is missed?

**Step 4 — Configure CRM automation.**

Work with your CRM administrator (or do this yourself if you have admin access) to create automation rules:
- Score field populated automatically on record creation
- Score updated weekly via enrichment
- Lead owner assigned based on score tier + territory rules
- Alert sent to rep when any lead crosses 60 threshold

**Step 5 — Run enrichment on your 30-day inactive leads.**

```
/enrich
> User: Run enrichment on all accounts with no activity in the last 30 days
        and a current score above 40. Flag any accounts where timing signals
        have changed materially since last enrichment.
```

**Deliverable:** A deployed lead scoring model with validated thresholds, documented routing rules, CRM automation configured, and an enrichment report identifying any re-activated prospects in your existing database.

---

### Exercise 4: Ghostwrite a Full Outreach Sequence

**Type:** Sales Enablement
**Time:** 60 minutes
**Plugin commands:** `/research`, `/sequence`, `/outreach`
**Goal:** Build a complete 6-touch sequence that your whole team can use for your primary ICP

This exercise scales your top rep's outreach approach across the entire team by encoding it into a tested, deployable sequence.

**Step 1 — Interview your best rep.**

Before opening Cowork, spend 20 minutes with your top performer. Ask:
1. "When you write outreach to a [primary persona], what do you always include in the first message?"
2. "What is the one thing you never say in a cold outreach message?"
3. "What follow-up approach has been most effective for you?"
4. "When a prospect doesn't respond, what is your rule for when to follow up and when to stop?"
5. "What is the one thing you say on a first call that almost always gets the prospect talking?"

Record the answers. This is the raw material.

**Step 2 — Encode in SKILL.md.**

Open your `outreach.md` product file. Add a "best rep principles" section encoding what you just learned.

**Step 3 — Build the sequence:**

```
/sequence
> User: Build a 6-touch, 21-day outreach sequence for our primary persona:
        [VP Ops / whichever is your primary ICP persona].
        Incorporate these principles from our top rep: [paste key points].
        Channel mix: 3 LinkedIn + 3 email.
        Goal: Discovery call.
        Tone: [Your brand voice description].
        Sector: [Your primary vertical].
```

**Step 4 — Critique with your best rep.**

Show the sequence to your top rep. Ask them to score each touch on two dimensions:
- Authenticity (1–10): Does this sound like something I would actually write?
- Effectiveness (1–10): Would I expect this to get a response?

For any touch scoring below 7 on either dimension: iterate with the agent until the rep approves it.

**Step 5 — Test with a live prospect.**

Select one HOT-scored prospect. Send the sequence exactly as written (no modifications). Track: open rates per touch, click rates, reply rate. After 21 days, report on the results.

**Deliverable:** A 6-touch outreach sequence approved by your best rep, encoded in your SKILL.md, tested with a live prospect, with performance data logged.

---

### Exercise 5: Run a Full Campaign Brief

**Type:** Marketing Planning
**Time:** 75 minutes
**Plugin commands:** `/campaign`, `/content`, `/calendar`
**Goal:** Produce a complete 8-week campaign brief ready to execute

**Step 1 — Define the campaign goal.**

Be specific. "More leads" is not a goal. "50 HOT-scored leads from [target vertical] at cost per lead below £[X] in [timeframe]" is a goal. If you cannot define a specific, measurable outcome, do not start the campaign.

**Step 2 — Run the campaign brief:**

```
/campaign
> User: [Fill in: goal, audience, product/offer, budget, timeline, constraints]
```

Work through the output with your marketing team. For each element:
- Channel mix: Is this appropriate for your audience? Do you have the capability to execute?
- Content plan: Do you have the resources to produce this content at this quality?
- Success metrics: Are these the right metrics or are they vanity metrics that don't predict revenue?
- Risk: What is the most likely reason this campaign underperforms and what is the contingency?

**Step 3 — Build the content calendar:**

```
/calendar
> User: Build a week-by-week content calendar for this campaign:
        [paste campaign brief]
        Include: content piece title, format, target persona, channel,
        publish date, SEO keyword (if applicable), CTA.
        Output as a table.
```

**Step 4 — Create one cornerstone asset.**

Identify the single most important content asset in your campaign plan (typically the lead magnet — whitepaper, report, or guide). Draft it:

```
/content type:"whitepaper"
          length:2500
          topic:"[Your cornerstone topic]"
          audience:"[Primary persona]"
          goal:"Demonstrate sector expertise; generate qualified downloads"
          include:"3 statistics; 2 case study references; practical framework;
                   strong introduction that establishes the problem;
                   conclusion with clear next step"
```

Review and refine the draft. Your best content marketer's role is now editorial — not generative.

**Step 5 — Define the measurement framework.**

Before you launch a single campaign element:
- Which metrics will you review weekly?
- What is the threshold for pausing a channel?
- What is the threshold for reallocating budget mid-campaign?
- Who owns the weekly analysis and what format will they produce?

Configure the marketing performance agent (Part Seven, Agent 4) to run automatically every Friday.

**Deliverable:** Complete campaign brief, week-by-week content calendar, one cornerstone content asset (draft), and a measurement framework with named owners and weekly review cadence.

---

### Exercise 6: Content Factory — 10 Assets in One Session

**Type:** Content Production
**Time:** 90 minutes
**Plugin commands:** `/content`, `/copy`
**Goal:** Demonstrate how a single piece of cornerstone content becomes 10 distinct assets across channels

This exercise teaches content multiplication — the discipline of extracting maximum distribution from every research investment.

**The Asset Tree:**

Start with one cornerstone piece (the whitepaper or long-form article from Exercise 5). Then produce:

```
/content type:"asset-tree"
          source:"[Your cornerstone content — paste or reference]"
          produce:
            - linkedin-article: 900 words for company page
            - ceo-post: 400 words for CEO personal LinkedIn (3 variants)
            - email-newsletter: 500 words for subscriber list
            - social-carousel: 8 slides — key findings from whitepaper
            - cold-email-hook: 50 words — whitepaper finding as outreach hook
            - sales-one-pager: 1 page — for reps to share post-discovery
            - ad-copy: 5 variants (LinkedIn Sponsored) — different hooks
            - subject-lines: 8 variants for email A/B testing
            - webinar-outline: 45-minute webinar built from whitepaper content
            - faq-post: common questions raised by whitepaper topic
```

Work through each asset. For each: review against brand voice, check factual claims, confirm the CTA is singular and specific.

After producing all 10, answer:
1. Which assets took the most iteration before they were acceptable quality?
2. Which assets surprised you in quality — better than you expected?
3. What would the equivalent production time have been for your team without AI?
4. What is the one human editorial contribution that made the biggest quality difference?

**Deliverable:** 10 distinct content assets built from one cornerstone piece, ready for publication. Time log showing production time with vs. estimated production time without AI.

---

### Exercise 7: The Pipeline Health Audit

**Type:** RevOps Analysis
**Time:** 60 minutes
**Plugin commands:** `/pipeline`, `/brief`
**Goal:** Identify at-risk deals, stale pipeline, and the top 3 deals that should close this quarter

Sales forecasts are wrong because reps are optimistic, CRM data is stale, and pipeline reviews are based on rep narrative rather than signal analysis.

**Step 1 — Export your current pipeline.**

Pull your full pipeline from CRM. Export all deals in "active" stages (post-discovery; pre-close). Include: deal name, value, stage, last activity date, close date, rep, and any notes.

**Step 2 — Pipeline analysis:**

```
/pipeline
> User: Here is our current pipeline data. Please analyse:
        1. Which deals are at risk? (no recent activity, stale stage, mismatched timeline)
        2. Which deals are strongest for close this quarter?
        3. Where are the gaps between our forecast and realistic expectation?
        4. Which deals need immediate rep attention?
[Paste: pipeline export]
```

**Step 3 — Deal health briefs for your top 3.**

For each of the 3 deals most likely to close this quarter:

```
/brief type:"deal-health"
       deal:"[Deal name / company]"
       stage:"[Current stage]"
       last-activity:"[Date and description]"
       known-risks:"[Competitor involvement, budget uncertainty, etc.]"
```

The agent produces a deal health brief: what is known, what is unknown, what the rep must establish in the next interaction, and the recommended next step.

**Step 4 — Identify the single intervention that would most improve forecast accuracy.**

After reviewing all briefs and the pipeline analysis: what is the most common reason deals are stalling? Is it timing (wrong quarter), product (wrong fit), competition (losing on product/price), or process (rep not advancing the deal)? 

Configure your Lead Intelligence Agent (Agent 1 above) to monitor external signals for each active deal — so the agent alerts the rep if any timing signal changes during the sales cycle.

**Deliverable:** Complete pipeline health audit, top 3 deal briefs with recommended next steps, identification of systemic pipeline health issue, and Lead Intelligence Agent configured for active deal monitoring.

---

### Exercise 8: Build the RevOps Dashboard

**Type:** Integration and Measurement
**Time:** 60 minutes
**Plugin commands:** `/pipeline`, `/analyze`
**Goal:** The weekly revenue report your VP of Sales and CMO both want

**Step 1 — Define the metrics.**

| Metric | Owner | Source | Target |
|---|---|---|---|
| HOT leads generated | Marketing | CRM | [Your target/week] |
| HOT lead to SAL conversion rate | RevOps | CRM | >35% |
| Sales Accepted Leads (SAL) | Sales | CRM | [Your target/week] |
| SAL to Opportunity conversion | Sales | CRM | >60% |
| Pipeline created (£/week) | Sales | CRM | [Your target] |
| Average deal size | Sales | CRM | [Your target] |
| Pipeline at risk (no activity >14 days) | RevOps | CRM | <15% of pipeline |
| Close rate | Sales | CRM | [Your baseline] |
| CAC by channel | RevOps | CRM + Marketing | [Your target] |
| Content asset ROI | Marketing | CRM + Analytics | [Your target] |

**Step 2 — Configure the Revenue Reporting Agent (Agent 5) to fetch all data sources via MCP and produce this dashboard every Monday morning.**

**Step 3 — Write the weekly leadership email.**

Using the dashboard data, produce a weekly summary email format:

```
/content type:"executive-email"
          audience:"VP Sales, CMO, CEO"
          data:"[paste dashboard data]"
          format:"5 bullets maximum; lead with the most important number;
                  one risk; one win; one ask"
          length:"150 words maximum"
```

**Step 4 — Identify the single most important leading indicator for your business.**

Lagging indicators (revenue, pipeline value) tell you what happened. Leading indicators tell you what will happen. For most B2B businesses, the most reliable leading indicator is: HOT lead to Sales Accepted Lead conversion rate — if this drops, revenue will drop in 60–90 days. Configure the Revenue Reporting Agent to send an immediate alert if this rate drops below threshold in any given week.

**Deliverable:** A configured Revenue Reporting Agent producing a weekly dashboard automatically, a weekly executive email template, and a documented leading indicator alert system.

---

## Chapter Summary: The Revenue Engine Built on AI

**The Central Insight**
The gap between your top 1% of sales and marketing performers and the rest is not talent — it is time and information. Your best rep researches deeply, personalises precisely, times perfectly, and follows up consistently. AI gives every rep on your team the research capacity of your best rep, the personalisation capability of your best copywriter, and the analytical rigour of your best data analyst.

**What this chapter built:**
1. Prospect research that produces a 45-minute deep brief in under 4 minutes
2. Lead scoring that captures external timing signals the CRM never had before
3. CRM enrichment that keeps data current automatically
4. Outreach that is genuinely personalised — not mail-merged but individually crafted
5. Marketing campaigns planned, executed, and optimised with the rigour of a dedicated analyst
6. Content that multiplies from one cornerstone piece into ten distribution-ready assets
7. RevOps agents that manage the entire revenue process without manual intervention at each step

**What does not change:**
Relationships are still built by people. The final negotiation, the executive relationship, the deal that closed because your rep showed up and listened — AI does not replace these. What AI eliminates is the administrative weight, the research delay, the impersonal outreach, and the analytical gaps that prevent your average reps from selling like your best reps.

**The team that builds this system has a structural advantage** that compounds over time: every customer interaction produces data that trains the ICP, every closed deal refines the scoring model, every outreach campaign teaches the agent what works in your market with your buyers. The system gets better as the team uses it.

---

> *Part 3 continues with Chapter 24: Supply Chain & Product Management →*

---

## Quick Reference

### Plugin Commands

| Plugin | Command | Use |
|---|---|---|
| Sales | `/research` | Deep prospect and account research brief |
| Sales | `/score` | Lead scoring — three-dimension model |
| Sales | `/enrich` | CRM record enrichment |
| Sales | `/outreach` | Personalised message drafting |
| Sales | `/sequence` | Multi-touch sequence generation |
| Sales | `/brief` | Pre-call and deal health briefs |
| Sales | `/follow-up` | Post-meeting follow-up drafting |
| Sales | `/pipeline` | Pipeline analysis and forecast |
| Marketing | `/campaign` | Campaign planning and brief |
| Marketing | `/content` | Content creation — all formats |
| Marketing | `/copy` | Ad copy, subject lines, landing pages |
| Marketing | `/analyze` | Performance analysis and optimisation |
| Marketing | `/calendar` | Content and campaign calendar |
| Marketing | `/persona` | ICP and buyer persona development |

### Key Resources

| Resource | URL |
|---|---|
| Sales Plugin | [claude.com/plugins/sales](https://claude.com/plugins/sales) |
| Marketing Plugin | [claude.com/plugins/marketing](https://claude.com/plugins/marketing) |
| GitHub — Sales | [knowledge-work-plugins/sales](https://github.com/anthropics/knowledge-work-plugins/tree/main/sales) |
| GitHub — Marketing | [knowledge-work-plugins/marketing](https://github.com/anthropics/knowledge-work-plugins/tree/main/marketing) |
| GitHub — Customer Support | [knowledge-work-plugins/customer-support](https://github.com/anthropics/knowledge-work-plugins/tree/main/customer-support) |
