---
sidebar_position: 3
title: "Prospect Research and ICP"
description: "How to configure your Ideal Customer Profile in YAML, run the /research command to produce deep prospect intelligence briefs, and build the targeting foundation that makes every subsequent Sales Plugin command specific to your business"
keywords:
  [
    "prospect research",
    "ICP configuration",
    "ideal customer profile",
    "firmographic criteria",
    "technographic signals",
    "discovery call",
    "sales research brief",
    "Claude Sales Plugin",
    "MCP connectors",
    "prospect intelligence",
    "SECP Pakistan",
    "DED Dubai",
    "Companies House",
    "Cowork plugin",
  ]
chapter: 23
lesson: 3
duration_minutes: 20

# HIDDEN SKILLS METADATA
skills:
  - name: "Configure an ICP Definition in sales-marketing.local.md"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can write a complete ICP definition including firmographic criteria, technographic signals, timing signals, and persona profiles, tailored to a specific business and market"

  - name: "Interpret a Prospect Research Brief"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Understand"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can read a /research output, identify the five research dimensions (who, company, timing, pain, hook), evaluate the confidence level and ICP match, and determine whether the prospect warrants immediate outreach or further monitoring"

  - name: "Adapt Research Data Sources to Local Markets"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can identify the local equivalents of UK data sources (Companies House, trade press, LinkedIn) for their own market — such as SECP for Pakistan, DED for Dubai, or MCA for India — and explain why data source configuration is critical for research quality"

learning_objectives:
  - objective: "Configure a complete ICP definition in sales-marketing.local.md including firmographic criteria, technographic signals, timing signals with priority levels, and persona profiles with motivations and fears"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Student can produce a sales-marketing.local.md file for a given business scenario that includes all four ICP components, with at least three positive signals, three negative signals, and two persona profiles"

  - objective: "Explain how the /research command produces a prospect intelligence brief by cross-referencing web data, public filings, and social signals against the ICP definition, and identify what makes a research brief high-confidence versus low-confidence"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student can walk through a sample research brief, identify which data points came from which sources, and explain why the confidence rating is what it is"

  - objective: "Identify the data sources the /research command uses and map them to equivalent sources in at least two non-UK markets"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student can name the local equivalents of Companies House, trade press, and LinkedIn data for their target market and explain any coverage gaps that affect research quality"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "ICP configuration as a structured YAML artifact with four dimensions"
    - "Firmographic criteria — company size, revenue, geography, industry"
    - "Technographic signals — technology stack indicators visible in job postings and press"
    - "Discovery call — the first substantive conversation with a qualified prospect"
    - "MCP connectors as the integration layer between the Sales Plugin and external data sources"
  assessment: "5 concepts at A2 level — within the 5-7 cognitive limit. Students enter with the RevOps framework and ICP definition from Lesson 1. This lesson makes the ICP concrete by showing its YAML structure and demonstrating how the /research command uses it. The worked examples ground abstract concepts in specific prospect narratives."

differentiation:
  extension_for_advanced: "Build two complete ICP definitions — one for a B2B SaaS company selling in the UK market and one for a B2B SaaS company selling in the Pakistan or GCC market. For each, identify the specific data sources available for firmographic verification, the trade press that covers your target sector, and any gaps where public data is less available. Compare the two and document where the ICP structure is identical and where local adaptation is required."
  remedial_for_struggling: "Focus on the ICP YAML configuration and the Meridian Logistics research brief. If you can identify the four sections of the ICP (firmographic, technographic, timing, persona) and point to where each section appears in the research brief output, you have the core understanding this lesson requires."
---

# Prospect Research and ICP

> **Prerequisite:** This lesson assumes you have installed the Sales and Marketing Plugins and the Agent Factory extension as described in Lesson 2. If you have not yet installed and verified the plugins, complete that lesson first — the `/research` command will not produce the structured output shown here without the extension loaded and `sales-marketing.local.md` configured.

The `/research` command is the foundation of everything the Sales Plugin does. Every outreach message, every lead score, every pre-call brief, every follow-up — all of them depend on the quality of the research that feeds them. And the quality of the research depends entirely on one thing: the precision of your ICP definition.

This lesson teaches you to build that definition, configure it as a structured artifact the agent can use, and then see what happens when the `/research` command runs against a real prospect. By the end, you will understand not just what the research brief contains, but why it contains what it contains — and how to make it better by making your ICP more precise.

## What Your Best Rep Actually Does

Before we touch any configuration file, revisit the five questions from Lesson 1 — but this time, watch how they play out in a real scenario.

Your best sales rep, the one who closes 340% of quota, does not open LinkedIn and send a connection request with a pitch. She opens a blank document and spends 45 minutes building a dossier. She tabs between LinkedIn, the prospect's company website, Companies House (or its local equivalent), Google News, trade press archives, and the company's job board. She is not reading casually. She is answering five specific questions, and she does not stop until she has answers to all of them.

> **Discovery Call:** The first substantive conversation between a sales rep and a qualified prospect. Unlike a cold call (which is typically brief and aims only to secure a meeting), a discovery call is a structured 20-to-30-minute conversation designed to understand the prospect's situation, pain, timeline, and decision-making process. The discovery call is not a pitch — the rep asks questions and listens. The best discovery calls feel like a consultation, not a sales meeting. Everything the `/research` command produces is designed to prepare a rep for this conversation.

The questions she answers are the same five from Lesson 1, but notice the depth she goes to for each one.

For "Who exactly is this person?", she does not just read the prospect's current job title. She traces the career arc. A VP of Operations who previously spent seven years at DHL and three years at Wincanton before joining a mid-size regional logistics firm 18 months ago tells a story: this is someone who learned at scale, chose to move to a smaller company where she could have more impact, and is now in the phase where she needs to prove that move was the right one. That career narrative shapes how you approach her. You do not talk to her the way you would talk to a VP who has been at the same company for 15 years.

For "What does their company actually do?", she goes beyond the website. She checks Companies House for the latest financial filing. She looks at the company's job board to understand what roles they are hiring for — job postings reveal more about a company's actual priorities than any press release. She reads trade press coverage. She looks at customer reviews and industry rankings. The website says "leading logistics provider." The filings, job postings, and reviews tell you whether that claim is real.

For "What is happening right now?", she sets up a Google Alert for the company and checks it daily for the two days before her outreach. She looks for contract wins, funding events, leadership changes, office expansions, and competitive moves. She looks for pain signals: rapid hiring in one department (scaling pressure), layoffs in another (cost pressure), regulatory changes affecting their sector (compliance pressure). These timing signals are what determine whether a prospect is ready to buy today or in six months.

For "What is the specific pain?", she synthesises everything she has found into a hypothesis. Not "they probably need better software" — that is too generic to be useful. Rather: "She is a newly promoted VP at a company that just won a major new contract. They are hiring four operations roles in 30 days. She posted on LinkedIn about scaling quality without adding headcount. Our product's core value proposition — scale throughput without proportional headcount growth — maps directly to her stated priority."

For "What is the hook?", she identifies one specific, verifiable thing she can reference in the first sentence of her message. Not "I noticed your company is growing." Rather: "Your LinkedIn post two weeks ago about maintaining quality as you scale stopped me scrolling."

The `/research` command does all of this in under four minutes. But it can only do it well if you tell it what to look for. That is what the ICP configuration does.

## Configuring Your ICP in sales-marketing.local.md

The ICP definition lives in `sales-marketing.local.md`, the configuration file that all Sales and Marketing Plugin commands reference. Think of this file as the institutional knowledge of your best sales rep, written down in a format the agent can parse and act on.

> **Firmographic Criteria:** The quantifiable characteristics of a company that determine whether it fits your target market. Firmographics are to B2B sales what demographics are to consumer marketing. They include company size (by employee count or revenue), industry or sector, geography, company stage (startup, growth, mature, enterprise), and ownership structure (private, public, PE-backed). Firmographic criteria are the first filter in any ICP — if a company does not match your firmographic criteria, no amount of timing signals or engagement will make them a good prospect.

The configuration has four sections, each corresponding to a dimension your best rep evaluates instinctively. The first section — firmographic criteria — defines the company characteristics that indicate a good fit:

```markdown
## ICP Definition — Ideal Customer Profile

### Firmographic Criteria

Company size: 50–500 employees
Revenue range: £5M–£100M annual revenue
Stage: Established business (5+ years); pre-IPO growth stage
Geography: UK primary; EU secondary
Industry: [List your top 3–5 verticals]
Technology maturity: Mid-tech — has basic systems but not yet modern stack
(NOT greenfield; NOT enterprise with full stack already)
```

Notice the precision here. "50–500 employees" is not arbitrary. It reflects the reality that companies below 50 typically do not have enough process volume to justify your product, and companies above 500 typically already have enterprise tools in place. The revenue range, geography, and technology maturity filters work the same way — each one exists because your historical data shows that companies outside these ranges do not convert, do not retain, or do not generate enough lifetime value to justify the sales investment.

> **Technographic Signals:** Observable indicators of a company's technology stack and digital maturity, typically visible through job postings, press releases, partner announcements, and technology review sites. In sales, technographic signals help you assess product fit before you ever speak to the prospect. A company posting jobs for "WMS administrator" (warehouse management system) is running legacy warehouse technology — a positive signal if your product modernises warehouse workflows. A company posting jobs for "Salesforce architect" already has a mature CRM — a negative signal if your product competes with Salesforce. Technographic analysis is one of the highest-value activities the `/research` command performs, because it reveals fit that firmographics alone cannot.

The second section — technographic signals — defines the technology indicators that suggest fit or disqualification:

```markdown
### Technographic Signals (GOOD FIT)

Positive signals:

- Legacy ERP or WMS (SAP B1, Sage, Dynamics NAV older versions)
- Job postings for "process improvement" or "ops coordinator" roles
- No mention of competitor products in job postings
- Using spreadsheets for functions your product automates (visible in job ads)

Negative signals:

- Already using [Competitor A] or [Competitor B] (not worth competing)
- <50 employees (not enough process volume to justify your product)
- Pure startup / pre-revenue (no budget cycle)
```

The third section — timing signals — is where the real intelligence lives. These are the external events that indicate buying readiness. Your best rep monitors these instinctively. The agent monitors them systematically, at scale, across every prospect simultaneously:

```markdown
### Timing Signals (HOT — prioritise immediately)

🔴 New contract win announced (expansion pressure)
🔴 New funding round (budget available; growth mode)
🔴 Leadership change in target role (new VP/Director in post < 18 months)
🔴 Rapid hiring in ops/process roles (scaling pain)
🔴 Office/facility expansion announced

🟡 Job posting in target department (pain signal)
🟡 Thought leadership post from target contact about your problem area
🟡 Industry/regulatory change affecting their sector
```

The fourth section — persona profiles — defines the specific people you sell to, what motivates them, what they fear, and what triggers their buying behaviour:

```markdown
### Persona Profiles

PRIMARY: VP / Director of Operations
Motivation: Scale output; manage cost; hit SLAs; impress new leadership
Fear: Falling behind on a major new contract; being seen as bottleneck
Trigger: Rapid headcount growth creating process strain
Tone: Peer-level; operational; ROI-conscious; no fluff

SECONDARY: COO / CFO (economic buyer for significant deals)
Motivation: Margin improvement; risk reduction; scalable cost base
Fear: Investing in a tool the team doesn't adopt
Trigger: Budget cycle; board pressure on efficiency ratios
Tone: Business case; numbers; risk/return; references from peers

CHAMPION: Ops Manager / Process Analyst (internal champion)
Motivation: Tools that make their job easier; recognition for driving change
Fear: New system rejected by their team; looking bad to their VP
Trigger: Personally experiencing the pain your product solves
Tone: Practical; feature-level; implementation-focused; support heavy
```

This is not a template to fill in once and forget. It is a living document that you refine continuously based on every deal you win and every deal you lose. The ICP is only as good as the data behind it, and the data gets better every quarter.

## The /research Workflow in Action

With the ICP configured, watch what happens when a rep runs the `/research` command.

```
/research
> Agent: Who is the prospect and what is the context for this outreach?

> User: Sarah Chen, VP of Operations at Meridian Logistics, Leeds.
        We sell workflow automation software. Looking to open a conversation.

> Agent: [fetches prospect profile via web search MCP]
         [fetches company profile, news, financials]
         [cross-references against your ICP definition and product fit]
```

> **MCP (Model Context Protocol):** The connectivity standard (introduced in Chapter 4) that allows AI agents to connect to external data sources and tools through a standardised interface. In the Sales Plugin context, MCP connectors link the agent to your CRM (Salesforce, HubSpot, Pipedrive), web search, LinkedIn data, public company filings, and email systems. Without MCP connectors, the agent can only work with information you paste into the conversation. With them, it can fetch, verify, and update data across your entire sales technology stack. The `/research` command typically uses three to five MCP connectors simultaneously: web search, LinkedIn, company filings, and any proprietary databases you have configured.

The agent does not simply search the web and paste results. It follows a structured research protocol defined in the prospect-research SKILL.md file. First, it fetches the prospect's professional profile — career history, current role scope, recent activity. Then it fetches the company profile — size, revenue, sector, recent news, hiring activity, technology indicators. Then it cross-references every data point against your ICP definition. Finally, it synthesises everything into a structured brief with a confidence rating and an ICP match assessment.

Here is what the output looks like for Sarah Chen at Meridian Logistics:

```
PROSPECT RESEARCH BRIEF
════════════════════════════════════════════════════════════
Prospect:   Sarah Chen, VP Operations | Meridian Logistics | Leeds, UK
Prepared:   [Date] | Confidence: HIGH (strong public signal)
ICP Match:  STRONG — see scoring section

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

Study this output carefully. Every section maps back to one of the five questions. The confidence rating ("HIGH") reflects the density and recency of public signals — if Sarah had no LinkedIn activity and Meridian had no recent news, the confidence would be lower, and the brief would flag that uncertainty explicitly. The ICP match ("STRONG") reflects how closely Meridian and Sarah match your configured firmographic, technographic, and timing criteria. The recommended first touch reflects the persona profile for VP Operations — peer-level tone, no pitch, conversation-first.

This is not generic AI output. This is output shaped by your specific ICP definition, against a specific prospect, using real-time data. Change the ICP and the output changes. Make the ICP vaguer and the output gets vaguer. Make it more precise and the output gets more precise. The ICP is the lever.

## A Second Example: Karachi-Based SaaS Targeting Gulf Logistics

The Meridian Logistics example is set in the UK because that is where the draft originated. But the RevOps architecture is market-agnostic. To demonstrate this, consider a second scenario with different data sources, different regulatory contexts, and different cultural norms.

Imagine you are NexaFlow, a 40-person SaaS company based in Karachi that sells fleet management and route optimisation software to logistics operators across Pakistan and the Gulf Cooperation Council (GCC). Your best sales rep — Tariq — follows exactly the same five-question protocol as the UK rep, but his data sources are different.

Here is what NexaFlow's ICP configuration looks like:

```markdown
## ICP Definition — NexaFlow (Karachi)

### Firmographic Criteria

Company size: 30–300 employees
Revenue range: PKR 500M–PKR 5B annual revenue (approx. USD 1.8M–USD 18M)
OR AED 10M–AED 100M for GCC targets
Stage: Established business (3+ years); growth stage
Geography: Pakistan primary (Karachi, Lahore, Islamabad);
UAE/Saudi Arabia secondary
Industry: Logistics, FMCG distribution, e-commerce fulfilment,
cold chain, pharmaceutical distribution
Technology maturity: Low-to-mid — paper-based or basic spreadsheet tracking;
no modern fleet management or route optimisation in place

### Technographic Signals (GOOD FIT)

Positive signals:

- Fleet size 20–200 vehicles (enough to justify software; not so large
  they already have enterprise TMS)
- Job postings for "fleet coordinator" or "dispatch manager" roles
- Manual route planning visible (driver complaints on Glassdoor/Rozee.pk)
- No mention of competitor fleet management software
- Using WhatsApp groups for driver coordination (common in Pakistan/GCC;
  indicates manual process ripe for automation)

Negative signals:

- Already using [Competitor TMS] (Oracle Transportation, Descartes)
- <20 vehicles (not enough volume)
- Government/military logistics (procurement cycle too long)

### Timing Signals

🔴 New distribution contract announced (Karachi/Lahore press, Dawn Business)
🔴 Fleet expansion (new vehicle purchase reported in industry directories)
🔴 Cold chain regulation change (Pakistan FDA or Dubai Municipality)
🔴 E-commerce partnership announced (route volume spike)

🟡 New depot or warehouse lease (expansion signal)
🟡 Hiring fleet/dispatch roles on Rozee.pk or LinkedIn
🟡 Fuel price increase (cost pressure; ROI story for route optimisation)

### Persona Profiles

PRIMARY: Director of Operations / Head of Logistics
Motivation: Reduce delivery costs; hit SLAs for new contracts; reduce
driver turnover through better routing
Fear: Fleet incidents; missed deliveries to major FMCG clients;
losing contracts due to poor on-time performance
Trigger: New major client onboarded; fleet growing faster than
coordination capability
Tone: Practical; Urdu or English depending on context; ROI-focused;
values references from same industry
```

Notice what is the same and what is different. The four-section structure is identical: firmographic, technographic, timing, persona. The logic is identical: define what a good prospect looks like, what signals indicate readiness, and who you are selling to. What changes is the specifics — the revenue ranges are in PKR and AED instead of GBP, the data sources are SECP filings and Dawn Business instead of Companies House and Motor Transport, the job boards are Rozee.pk rather than Indeed UK, and the technographic indicators include WhatsApp-based dispatch coordination rather than legacy WMS systems.

Now watch what happens when Tariq runs `/research` for a GCC prospect:

```
PROSPECT RESEARCH BRIEF
════════════════════════════════════════════════════════════
Prospect:   Ahmed Al-Rashidi, Director of Logistics | Gulf Express
            Freight | Dubai, UAE
Prepared:   [Date] | Confidence: MEDIUM (moderate public signal)
ICP Match:  STRONG — see scoring section

── WHO IS AHMED AL-RASHIDI? ────────────────────────────────
Career:     15 years in logistics — started at Aramex (6 years),
            then Al Futtaim Logistics (4 years, regional ops manager),
            joined Gulf Express Freight 3 years ago as Director of
            Logistics. Promoted from within — built the company's
            cold chain division from scratch.
LinkedIn:   Moderate activity — posts quarterly; last post was about
            "the future of cold chain in the Gulf" (2 months ago).
            Connected to 12 people at competitor firms.
Profile:    Operational leader, not a social media presence. Outreach
            via email or in-person at Gulf Food trade show more likely
            to land than LinkedIn DM.

── WHAT IS GULF EXPRESS FREIGHT? ──────────────────────────
Revenue:    Est. AED 35–50M (DED commercial licence filing; category
            indicates mid-market)
Model:      Regional freight + cold chain across UAE and Oman; 85 vehicles;
            3 temperature-controlled warehouses (Jebel Ali, Al Quoz,
            Muscat)
Growth:     Added Muscat operations in 2025 (Oman commercial registration
            filed October 2025)
Clients:    FMCG and pharmaceutical — Nestlé, Julphar Pharmaceuticals
            visible in trade press references
Tech stack: Basic TMS (likely spreadsheet-augmented based on job posting
            for "fleet dispatcher — Excel proficient required")

── WHAT IS HAPPENING RIGHT NOW? ─────────────────────────────
🔴 HOT SIGNAL: Dubai Municipality announced new cold chain compliance
   requirements effective July 2026. Temperature logging must be digital
   and auditable. Gulf Express's current system is manual (visible in
   the job posting requirements).

🟡 WARM SIGNAL: Gulf Express posted 2 fleet dispatcher roles on Bayt.com
   in the last 45 days. Growing headcount in dispatch = growing pain
   in coordination.

🟡 WARM SIGNAL: Ahmed presented at the Gulf Food logistics panel
   (February 2026) on "scaling cold chain without compromising compliance."
   The topic aligns directly with NexaFlow's capabilities.

── THE SPECIFIC PAIN ────────────────────────────────────────
Ahmed runs a growing cold chain operation that just expanded to a second
country (Oman). New Dubai Municipality regulations require digital
temperature logging that his current system cannot provide. He is hiring
dispatchers, which suggests coordination is manual and strained. His
conference presentation topic — scaling without compromising compliance —
is exactly the problem NexaFlow solves.

── THE HOOK ─────────────────────────────────────────────────
Reference his Gulf Food panel presentation. Do NOT lead with the
regulatory change (he knows about it; leading with compliance sounds
like fear-selling). Instead, engage with his stated interest in scaling
cold chain operations. The regulatory deadline creates urgency, but
the hook should be about capability, not compliance.

── RECOMMENDED FIRST TOUCH ──────────────────────────────────
Channel:  Email (Ahmed's LinkedIn activity is low; email via company
          domain or personal introduction at next trade event)
Tone:     Professional; solution-oriented; reference Gulf market context
Hook:     His Gulf Food panel + the Oman expansion + the scaling challenge
Goal:     15-minute call or meeting at the next Gulf logistics event
════════════════════════════════════════════════════════════
```

Notice how the brief adapts to the market context. The confidence rating is "MEDIUM" rather than "HIGH" because Ahmed is less active on LinkedIn and Gulf Express has fewer public signals than Meridian. The recommended channel is email rather than LinkedIn DM because the agent detected low LinkedIn activity. The hook references a trade conference rather than a social media post. The data sources are DED commercial licence filings rather than Companies House, and Bayt.com rather than Indeed UK.

The intelligence architecture is the same. The data sources and cultural calibration are different. This is the core lesson: **the ICP structure is universal; the ICP content is local.**

## The Data Sources Behind /research

The `/research` command is only as good as the data it can access. Understanding what data sources the agent pulls from — and what gaps exist in your market — is critical for calibrating your expectations and configuring your MCP connectors.

For UK-based research, the primary data sources include Companies House (free company filings, financial data, director information), LinkedIn (career histories, activity, company pages, job postings), Google News and trade press (recent events, contract wins, regulatory changes), job boards (hiring patterns, technology requirements visible in job descriptions), and the company's own website and press releases.

For Pakistan-based research, the equivalent sources are the Securities and Exchange Commission of Pakistan (SECP) for company filings and director information, Rozee.pk and LinkedIn for career data and job postings, Dawn Business and The News International for business news, and the Pakistan Bureau of Statistics for industry data. The coverage is less comprehensive than the UK — SECP filings are less detailed than Companies House filings, and fewer Pakistani companies have active LinkedIn company pages — but the research protocol is the same. The agent simply flags lower confidence when public data is sparse.

For GCC-based research, the sources include the Department of Economic Development (DED) in each emirate for commercial licence data, the Saudi Ministry of Commerce for Saudi company registrations, Bayt.com and LinkedIn for career and hiring data, Gulf News and Arabian Business for regional business coverage, and trade-specific publications for sector intelligence. GCC data tends to be strong on company registration but weaker on financial reporting (many companies are private family businesses that do not publish revenue figures), so the agent often relies more heavily on proxy signals like fleet size, headcount, and office footprint.

The key insight is this: **configuring your MCP connectors to include local data sources is not optional — it is the difference between a useful research brief and a generic one.** If you are selling in Pakistan and your agent cannot access SECP data or Rozee.pk job postings, it will produce a brief based only on whatever is available via general web search. That brief will miss firmographic verification, hiring pattern analysis, and local trade press signals — exactly the data that separates a useful brief from a generic one.

## From Research Brief to Action

A research brief is not an end in itself. It is an input to three downstream actions:

The first action is **scoring**. The research findings feed directly into the `/score` command (Lesson 4), which assigns a numerical score across three dimensions — fit, timing, and engagement. The research brief provides the raw intelligence; the score provides the prioritisation.

The second action is **outreach**. The research findings — especially the hook, the specific pain, and the recommended channel — feed directly into the `/outreach` command (Lesson 5), which drafts a personalised message. Without a research brief, the outreach command can only produce generic messages. With one, it produces messages that reference specific, verifiable facts about the prospect's situation.

The third action is **preparation**. When a prospect agrees to a meeting, the research brief feeds into the `/brief` command (Lesson 6), which builds a pre-call preparation document with discovery questions calibrated to the prospect's specific situation, anticipated objections based on their company's profile, and success criteria for the call.

This is the intelligence chain that the top 1% of sales performers build manually for every prospect. The Sales Plugin builds it automatically, at scale, for every prospect your team targets.

---

## Try With AI

### Prompt 1: Build Your ICP Configuration

```
I am building an ICP (Ideal Customer Profile) for my business.

Here is my context:
- My company sells: [product/service]
- Our target market: [geography — be specific: country, region, cities]
- Typical customer size: [employee count and/or revenue range]
- Our top 3 industries: [list]
- Our product replaces or augments: [what the customer currently uses]
- Our best customers came to us because: [the trigger or pain that started
  the conversation]

Build a complete ICP definition in the sales-marketing.local.md format
from Chapter 23, with all four sections:
1. Firmographic Criteria (with specific ranges)
2. Technographic Signals (at least 4 positive and 3 negative)
3. Timing Signals (with 🔴 HOT, 🟡 WARM, and 🟢 SECTOR classifications)
4. Persona Profiles (at least 2 — primary buyer and internal champion)

For each section, explain WHY each criterion matters — don't just list
them. I need to understand the logic so I can refine the ICP over time.
```

**What you're learning:** This prompt teaches you to build the foundational configuration artifact that all Sales Plugin commands depend on. You are learning that an ICP is not a marketing exercise — it is a precision targeting instrument. The quality of every downstream output (research briefs, lead scores, outreach messages) is determined by the quality of this definition. By asking the agent to explain the logic behind each criterion, you learn to refine the ICP based on deal outcomes rather than treating it as a static document.

### Prompt 2: Run a Research Brief and Evaluate It

```
Using the following ICP definition:
[Paste your ICP from Prompt 1]

Run a research analysis for this prospect:
- Name: [real prospect name]
- Title: [their role]
- Company: [their company]
- Location: [city, country]
- Context: [why you are targeting them — what you sell and what problem
  you think they have]

Produce a complete research brief in the Chapter 23 format with all
sections: WHO, COMPANY, WHAT IS HAPPENING NOW, SPECIFIC PAIN, HOOK,
PRODUCT FIT, and RECOMMENDED FIRST TOUCH.

After generating the brief, evaluate your own output:
1. What is the confidence level and why?
2. Which data points are verified vs. inferred?
3. What information gaps exist that would improve the brief?
4. If this were a [Pakistan/GCC/South Asian] prospect, which UK data
   sources would be unavailable and what local alternatives exist?
```

**What you're learning:** This prompt teaches you to both use and critically evaluate the `/research` output. The self-evaluation step is critical — you are learning that AI research output has confidence gradients, that some data points are verified (Companies House filings) while others are inferred (revenue estimates based on employee count), and that data source availability varies by market. The market adaptation question forces you to think about research quality in your specific geography rather than assuming UK data coverage everywhere.

### Prompt 3: Compare ICP Precision Levels

```
Here is my current ICP definition:
[Paste your ICP]

Now I want to test how ICP precision affects research quality. Take
the same prospect — [name, company] — and run the research analysis
three times:

Version A: Use my full ICP definition as written
Version B: Remove all technographic signals and timing signals — keep
           only firmographic criteria
Version C: Remove everything except "Company size: 50-500 employees"

For each version, produce the research brief. Then compare:
1. What specific intelligence does Version A contain that B and C miss?
2. How does the ICP match assessment change across versions?
3. Which version would actually help a sales rep prepare for a
   discovery call, and which would leave them unprepared?
4. What does this tell you about the value of ICP precision?

Present the comparison as a table showing: Brief Section | Version A |
Version B | Version C | What Was Lost.
```

**What you're learning:** This prompt teaches you the relationship between ICP precision and research quality through direct comparison. Most teams stop at firmographic criteria — company size, revenue, geography — and wonder why their AI sales tools produce generic output. By seeing the same prospect analysed at three levels of ICP precision, you learn that technographic signals and timing signals are what transform a generic brief into an actionable one. This is the calibration skill that separates teams who get value from AI sales tools from teams who conclude "AI doesn't work for sales."
