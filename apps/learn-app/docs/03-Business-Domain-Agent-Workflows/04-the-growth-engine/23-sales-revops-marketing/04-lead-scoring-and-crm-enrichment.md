---
sidebar_position: 4
title: "Lead Scoring and CRM Enrichment"
description: "How to build a three-dimension lead scoring model using the /score command, understand the data decay problem in CRM systems, configure the /enrich command for continuous record maintenance, and adapt enrichment data sources for Pakistan, GCC, and South Asian markets"
keywords:
  [
    "lead scoring",
    "CRM enrichment",
    "MQL",
    "SQL",
    "SAL",
    "sales qualified lead",
    "marketing qualified lead",
    "data decay",
    "fit score",
    "timing score",
    "engagement score",
    "SECP Pakistan",
    "DED Dubai",
    "ERP",
    "Claude Sales Plugin",
    "Cowork plugin",
  ]
chapter: 23
lesson: 4
duration_minutes: 20

# HIDDEN SKILLS METADATA
skills:
  - name: "Explain the Three-Dimension Lead Scoring Model"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can describe the three scoring dimensions (fit, timing, engagement), explain why each is weighted as it is (40/40/20), and articulate why timing signals — the dimension most scoring models ignore — are the most predictive of buying readiness"

  - name: "Interpret a Lead Score Output and Determine Action"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can read a /score output, identify the contribution of each dimension, explain why the lead received its classification (HOT, WARM, CULTIVATE, NOT YET), and state the recommended action for each classification level"

  - name: "Configure CRM Enrichment for Local Markets"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can configure an enrichment schedule and field priority list in sales-marketing.local.md, identify the local data sources required for their market (SECP, DED, MCA, etc.), and explain how enrichment frequency should vary by account tier"

learning_objectives:
  - objective: "Explain why traditional lead scoring models that rely only on demographic fit and behavioural engagement fail to predict buying readiness, and describe how the three-dimension model (fit, timing, engagement) addresses this failure"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student can name the three dimensions, state the point allocation for each (40/40/20), and provide a concrete example of a lead that scores high on fit and engagement but low on timing — explaining why that lead is not ready to buy"

  - objective: "Read a /score output and determine the correct action — immediate outreach, nurture sequence, monitoring, or disqualification — based on the total score and the contribution of each dimension"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Given a sample score output, student can identify the classification, explain which dimension is driving the score, and state the recommended next step with a specific timeline"

  - objective: "Describe the CRM data decay problem, explain how the /enrich command addresses it through scheduled and triggered enrichment, and identify the data sources required for enrichment in at least two markets"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student can state the approximate annual data decay rate, list the eight enrichment fields in priority order, and name the local data source equivalents for their target market"

cognitive_load:
  new_concepts: 6
  concepts_list:
    - "Lead Scoring as a three-dimension model (fit, timing, engagement) with explicit weights"
    - "MQL, SQL, and SAL as progressive qualification stages"
    - "CRM data decay — the 30% annual degradation of contact and account records"
    - "Enrichment as scheduled maintenance versus on-demand refresh"
    - "ERP as the business system context for CRM integration"
    - "Score-to-action mapping: how numerical scores translate to specific sales behaviours"
  assessment: "6 concepts at A2 level — at the upper boundary of the 5-7 cognitive limit. Students enter with the ICP and research brief from Lesson 3. This lesson adds the quantitative layer (scoring) and the data maintenance layer (enrichment) that operationalise the research intelligence. The worked examples ground abstract scoring in specific numbers and specific actions."

differentiation:
  extension_for_advanced: "Take 10 real leads from your CRM (or 10 publicly available companies in your target sector) and score each one manually using the three-dimension model from this lesson. Record your scores, then run /score for the same 10 leads and compare. Where do your manual scores and the AI scores diverge? Analyse the divergences: is the AI seeing signals you missed, or is it missing context you have? Use the comparison to refine your ICP definition."
  remedial_for_struggling: "Focus on the scoring table (0-39, 40-59, 60-79, 80-100) and the Meridian Logistics score output. If you can read the score, identify which dimension contributed the most points, and state the recommended action for that score range, you have the core understanding this lesson requires."
---

# Lead Scoring and CRM Enrichment

A research brief tells you everything you need to know about a prospect. A lead score tells you what to do about it. And a clean, enriched CRM record ensures that the intelligence behind both the brief and the score does not decay into uselessness within months.

This lesson covers two capabilities that are deeply connected: the `/score` command, which assigns a numerical priority to every prospect based on multi-signal intelligence, and the `/enrich` command, which keeps the underlying CRM data current so that scores remain accurate over time. Together, they solve two of the most persistent problems in B2B sales: prioritisation (which leads deserve my time right now?) and data quality (can I trust what my CRM tells me?).

## Why Most Lead Scoring Fails

Most B2B organisations that implement lead scoring use a two-dimensional model. The first dimension is **demographic fit** — does the company match our ICP? The right size, the right industry, the right geography. The second dimension is **behavioural engagement** — did the contact open our emails, visit our website, download our whitepaper, attend our webinar?

Both dimensions are necessary. Neither is sufficient. And most scoring models stop here, which is why most scoring models fail to predict buying readiness.

> **Lead Scoring:** A methodology for ranking prospects against a scale that represents the perceived value each lead represents to the organisation. In B2B sales, lead scores determine which prospects receive immediate sales attention, which enter nurture sequences, and which are deprioritised. The fundamental challenge of lead scoring is that the score must predict future behaviour (will this prospect buy?) from present signals (what do we know about them now?). A scoring model that cannot distinguish between a prospect who fits your ICP but is not ready to buy and a prospect who fits your ICP and is ready to buy today is a model that wastes your sales team's most precious resource: time.

The failure mode is predictable. Demographic fit without behavioural signals identifies companies that should buy but are not currently buying. Your CRM fills up with perfectly-matched accounts that never progress past the first email. Behavioural signals without demographic fit rewards engagement from companies that will never be the right customer. Your marketing team celebrates high download numbers while your sales team complains that the leads are worthless.

And both models ignore the most important signal of all: **what is happening to the prospect right now that makes them more or less likely to buy?**

A VP of Operations at a logistics company that matches your ICP perfectly and downloaded your whitepaper last month might be a great lead. Or she might have downloaded it out of casual curiosity, filed it away, and forgotten about it. The whitepaper download alone does not tell you which scenario is true. But if that same VP's company just announced a major new contract, posted four operations roles in the last 30 days, and she published a LinkedIn post about scaling challenges — those are timing signals that transform a casually-interested prospect into an actively-ready buyer. Timing is the dimension that most scoring models miss entirely, and it is the dimension that the `/score` command is specifically designed to capture.

## The Three-Dimension Scoring Model

The `/score` command operates across three signal dimensions simultaneously, with deliberate weighting that reflects the predictive power of each dimension:

**Dimension 1: Fit Score (0-40 points).** How closely does the prospect match your ICP? This dimension evaluates firmographic criteria (company size, revenue, industry, geography), technographic signals (technology stack, digital maturity), and role seniority (is this person a decision-maker, an influencer, or a user?). Fit is the baseline — a necessary condition, not a sufficient one. A perfect-fit company that is not ready to buy is still not a priority.

**Dimension 2: Timing Score (0-40 points).** What external signals suggest buying readiness right now? This dimension evaluates events that indicate the prospect is in a moment where your product becomes urgent: funding rounds, new contract wins, leadership changes, rapid hiring, regulatory pressures, competitive moves, office expansions. Timing signals are the most volatile (they change weekly) and the most predictive (a company with three hot timing signals is 5-10 times more likely to enter a buying cycle than a company with none).

**Dimension 3: Engagement Score (0-20 points).** What has the prospect done that signals awareness of or interest in your offering? Email opens, content downloads, website visits (especially pricing pages), event attendance, social engagement with your content, and direct inbound inquiries. Engagement receives the lowest weighting deliberately — it is the weakest signal of the three. High engagement from a poor-fit, wrong-timing prospect is noise, not signal. A pricing page visit from a perfect-fit prospect with three hot timing signals is a different matter entirely.

> **MQL (Marketing Qualified Lead):** A lead that has met the marketing team's threshold for engagement — typically defined by a combination of content downloads, email responses, website visits, or event attendance. An MQL has demonstrated interest but has not yet been validated by sales for fit, timing, or budget. The MQL designation triggers a handoff from marketing to sales for further qualification. In many organisations, the MQL-to-SQL conversion rate is below 20%, indicating that marketing engagement alone is a weak predictor of sales readiness. The three-dimension scoring model addresses this by adding fit and timing dimensions that marketing engagement scores lack.

> **SQL (Sales Qualified Lead):** A lead that has been validated by the sales team as meeting fit, timing, and engagement criteria sufficient to warrant active pursuit. The SQL designation means a sales rep has reviewed the lead — typically through a brief qualification call or by evaluating the research brief and score — and confirmed that the prospect has a real problem, a plausible timeline, and the authority or access to budget. The conversion from MQL to SQL is where most pipeline leakage occurs, because many MQLs do not meet the fit or timing criteria that sales requires.

> **SAL (Sales Accepted Lead):** An intermediate stage between MQL and SQL used in organisations with a formal handoff process. A SAL is a lead that the sales team has acknowledged receiving from marketing and committed to following up within a defined SLA (typically 24-48 hours). The SAL stage exists to prevent leads from falling into a gap between marketing's handoff and sales' follow-up — a gap where lead intelligence becomes stale and prospect interest decays. In AI-native RevOps, the Outreach Sequencing agent automates the SAL process: when a lead crosses the scoring threshold, the agent generates a research brief, builds an outreach sequence, and schedules the first touch — all within the SLA window.

The weighting — 40/40/20 — is not arbitrary. It reflects a specific insight: **fit and timing are equally important, and both are more important than engagement.** A company that perfectly matches your ICP and is experiencing three hot timing signals is a priority even if they have never heard of you. A company that has downloaded every piece of content you have ever published but does not match your ICP and has no timing signals is not a priority no matter how engaged they are.

The total score maps to four classification levels, each with a specific recommended action:

| Score Range | Classification             | Recommended Action                                                                       |
| ----------- | -------------------------- | ---------------------------------------------------------------------------------------- |
| 80-100      | HOT — Sales Qualified      | Immediate personal outreach; priority in rep's queue; target first touch within 24 hours |
| 60-79       | WARM — Marketing Qualified | Personalised nurture sequence; sales follow-up within 5 business days                    |
| 40-59       | CULTIVATE                  | Marketing nurture sequence; quarterly check-in; monitor for timing signal changes        |
| 0-39        | NOT YET                    | Monitor only; do not invest sales time; re-score if new signals appear                   |

## The /score Command in Action

Watch how the three dimensions combine in a real scoring output. This is the same Sarah Chen / Meridian Logistics prospect from the research brief in Lesson 3:

```
LEAD SCORE: Meridian Logistics / Sarah Chen
════════════════════════════════════════════════════════════
TOTAL SCORE: 87 / 100 — HOT: Immediate Sales Action

FIT SCORE:      36 / 40
  Company size:    +8  (380 employees — within range)
  Revenue:         +8  (est. £50M — within range)
  Industry:        +8  (3PL logistics — top vertical)
  Tech maturity:   +8  (legacy WMS; no modern automation)
  Geography:       +4  (UK — primary market)

TIMING SCORE:   37 / 40
  New major contract win:      +15 (Motor Transport, March 2026)
  Rapid hiring in ops:         +12 (4 ops roles posted, 30 days)
  VP new in post (<18 months): +10 (new VP; impact-building phase)

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

Study the score decomposition. The fit score (36/40) is strong across all five criteria — Meridian matches the ICP on every firmographic and technographic dimension. The timing score (37/40) is exceptionally strong — three hot signals converging simultaneously. The engagement score (14/20) is moderate — a whitepaper download and a pricing page visit, but no email engagement. The total score (87/100) reflects a prospect that is both a strong fit and in an acute moment of buying readiness. The engagement score is almost irrelevant here — the fit and timing are so strong that this prospect would be HOT even without the whitepaper download.

Now consider a contrasting example. Imagine a company that scores 35/40 on fit, 8/40 on timing, and 18/20 on engagement — total: 61/100, classified as WARM. This company matches your ICP well and has downloaded every piece of content you have published, attended your webinar, and opened every email. But there are no timing signals. No new contracts, no hiring surge, no leadership change, no regulatory pressure. The high engagement might mean genuine interest, or it might mean someone in their marketing department is researching competitors. Without timing signals to indicate an active buying moment, this lead gets a nurture sequence, not an immediate call. The three-dimension model prevents your reps from chasing engaged-but-not-ready prospects while genuinely ready prospects go uncontacted.

## The Before and After of CRM Enrichment

Lead scoring is only as accurate as the data it scores against. And CRM data is, by default, terrible.

> **Enrichment:** The process of supplementing incomplete or outdated CRM records with current, verified information from external sources. Enrichment operates at two levels: contact-level (verifying a person's current role, email address, phone number, and recent activity) and account-level (updating a company's revenue estimate, headcount, news events, technology stack, and timing signals). Without enrichment, CRM data decays at approximately 30% per year — meaning that nearly one-third of the records in your CRM become partially or entirely inaccurate every twelve months. Enrichment is not a one-time cleanup project. It is a continuous maintenance process, like maintaining a fleet of vehicles: if you stop, things break.

To understand why enrichment matters, consider a concrete before-and-after example. This is a real pattern — the details are representative of what organisations discover when they first run enrichment on their existing CRM.

**Before enrichment — the CRM record for Global Fresh Logistics (a Dubai-based cold chain operator):**

| Field         | Value in CRM                                           | Last Updated  |
| ------------- | ------------------------------------------------------ | ------------- |
| Company Name  | Global Fresh Logistics                                 | 14 months ago |
| Contact       | Rashid Al-Mansoori, Operations Manager                 | 14 months ago |
| Email         | rashid@globalfresh.ae                                  | 14 months ago |
| Phone         | +971-4-XXX-XXXX                                        | 14 months ago |
| Revenue       | AED 20M (estimated)                                    | 14 months ago |
| Employees     | 120                                                    | 14 months ago |
| Industry      | Cold chain logistics                                   | 14 months ago |
| Last Activity | Email opened (newsletter)                              | 9 months ago  |
| Notes         | "Met at Gulf Food 2025. Interested in fleet tracking." | 14 months ago |
| Score         | 52 (CULTIVATE)                                         | 9 months ago  |

This record looks reasonable. It has a name, an email, a revenue estimate, and a note from a trade show meeting. A rep looking at this record would see a CULTIVATE-classified lead with moderate interest and no urgency. They would leave it in the nurture sequence and move on.

**After enrichment — the same record, 20 minutes later:**

| Field            | Value After Enrichment                                                        | Source                                | Change                            |
| ---------------- | ----------------------------------------------------------------------------- | ------------------------------------- | --------------------------------- |
| Company Name     | Global Fresh Logistics LLC                                                    | DED commercial licence                | No change                         |
| Contact          | Rashid Al-Mansoori, **Director of Operations**                                | LinkedIn                              | PROMOTED — was Operations Manager |
| Email            | rashid.almansoori@globalfresh.ae                                              | Company website contact page          | UPDATED — old domain format       |
| Phone            | +971-4-XXX-YYYY                                                               | Company website                       | UPDATED                           |
| Revenue          | AED 35-45M (estimated)                                                        | DED filing category + headcount proxy | REVISED UP — was AED 20M          |
| Employees        | 185 (was 120)                                                                 | LinkedIn company page                 | GREW by 54% in 14 months          |
| Industry         | Cold chain logistics                                                          | No change                             | —                                 |
| Last Activity    | Email opened (newsletter)                                                     | No change from internal data          | —                                 |
| New: Recent News | Won AED 15M pharmaceutical distribution contract (Khaleej Times, Jan 2026)    | Trade press                           | NEW — HOT signal                  |
| New: Hiring      | 3 fleet coordinator roles posted on Bayt.com (last 30 days)                   | Job board                             | NEW — HOT signal                  |
| New: Regulation  | Dubai Municipality cold chain digital compliance deadline July 2026           | Government gazette                    | NEW — HOT signal                  |
| New: LinkedIn    | Rashid posted about "digital transformation in Gulf cold chain" (3 weeks ago) | LinkedIn                              | NEW — engagement signal           |
| Score            | **84 (HOT)**                                                                  | Recalculated                          | UPGRADED from 52 to 84            |

The difference is stark. The same lead — the same company, the same person — went from CULTIVATE (quarterly check-in, no sales investment) to HOT (immediate outreach, priority in rep's queue) based entirely on information that was publicly available but not in the CRM. Rashid was promoted. The company grew by 54%. They won a major new contract. They are hiring rapidly. A regulatory deadline creates urgency. And Rashid is posting about the exact problem your product solves.

Without enrichment, this lead sits in a nurture sequence while a competitor contacts Rashid and closes the deal. With enrichment, your best rep gets an alert, a research brief, and a personalised outreach message — all within hours of the enrichment run.

> **ERP (Enterprise Resource Planning):** A category of business software that integrates core business processes — finance, supply chain, manufacturing, human resources, procurement — into a single system. In the context of CRM enrichment and sales intelligence, ERP matters because it is the system that sits alongside the CRM in your prospect's technology stack. Knowing which ERP a prospect uses (SAP, Oracle, Microsoft Dynamics, Odoo, or a local system) tells you about their digital maturity, their budget for enterprise software, and their integration requirements. A prospect running SAP S/4HANA has different needs and a different buying process than a prospect running spreadsheets. The `/enrich` command captures ERP information when it is visible in job postings, press releases, or partner directories, and it factors into the technographic dimension of the fit score.

## Configuring Enrichment in sales-marketing.local.md

The enrichment configuration in `sales-marketing.local.md` controls what gets enriched, when, and at what priority. There are three enrichment modes, each triggered differently:

**Full enrichment** runs on a schedule — typically monthly for all active accounts. It is the comprehensive pass that catches gradual changes: promotions, headcount shifts, revenue growth, technology stack evolution. Full enrichment is expensive in terms of API calls and processing time, so it runs infrequently but covers everything.

**Targeted enrichment** runs more frequently — typically weekly — but only for your highest-priority accounts. HOT-scored leads and Tier 1 accounts get targeted enrichment because timing signals change rapidly and a one-week delay can mean a missed window.

**Trigger enrichment** runs in response to specific events: a prospect visits your website, downloads content, opens an email after a long silence, or appears in a news alert. Trigger enrichment is the fastest — it runs within hours of the triggering event — because it is responding to a signal that indicates something has changed.

```markdown
## CRM Enrichment Configuration (in sales-marketing.local.md)

### Enrichment Schedule

Full enrichment: All Tier 1 accounts — monthly
Targeted enrichment: HOT leads — weekly
Trigger enrichment: Any account with web activity — within 24 hours

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

The field priority order matters. Roles and email addresses are prioritised first because they are the most common sources of data decay — people change jobs, get promoted, or move to new companies, and if your CRM still shows the old role or email, every outreach attempt is wasted. News events and timing signals are prioritised next because they are the most actionable — a new contract win today is a selling opportunity tomorrow. Technology stack and revenue estimates are lower priority because they change less frequently, but they still matter for maintaining accurate fit scores over time.

## Enrichment Data Sources Beyond the UK

The enrichment workflow from the draft operates on UK data sources by default — Companies House for financial filings, LinkedIn for career data, Indeed for job postings, and Google News for press coverage. These sources provide excellent coverage for UK-based prospects. For other markets, equivalent sources exist but with different coverage levels and access patterns.

For Pakistan, the primary firmographic source is the Securities and Exchange Commission of Pakistan (SECP), which maintains a company registry searchable at the SECP eService portal. SECP filings include company registration details, director information, and annual returns, though financial detail is less comprehensive than Companies House filings. For hiring data, Rozee.pk is the dominant job board alongside LinkedIn. For business news, Dawn Business, The News International Business, and Pakistan Today cover major commercial events. For sector-specific intelligence, industry associations such as the Pakistan Association of Automotive Parts and Accessories Manufacturers (PAAPAM) or the All Pakistan Textile Mills Association (APTMA) publish member directories and sector reports that are valuable for ICP matching.

For the UAE and broader GCC, the Department of Economic Development (DED) in each emirate maintains commercial licence registries. Dubai DED's "Dubai Business" database is searchable and provides licence category, establishment date, and activity descriptions — useful proxies for revenue estimation when financial filings are not public. For Saudi Arabia, the Ministry of Commerce and Investment maintains the commercial registration database. For hiring data, Bayt.com is the dominant regional job board. For business news, Gulf News, Arabian Business, and Zawya provide regional coverage with strong commercial and financial reporting.

For India, the Ministry of Corporate Affairs (MCA) maintains the MCA21 company registry with financial filings, director data, and charge information. The Registrar of Companies (ROC) filings are more detailed than SECP filings and are searchable online. For hiring data, Naukri.com alongside LinkedIn provides strong coverage. For business news, Economic Times, Mint, and Business Standard provide comprehensive commercial coverage.

The critical insight is this: the enrichment architecture does not change across markets. The data sources change. Your MCP connector configuration must include the local sources relevant to your target geography. If you are selling across Pakistan and the GCC simultaneously, your enrichment configuration needs connectors to SECP, DED, Rozee.pk, Bayt.com, and the relevant trade press for each market. Omit any of these and your enrichment will have blind spots that degrade scoring accuracy.

## The Data Decay Problem

CRM data decays at approximately 30% per year. This is not a number pulled from marketing materials — it reflects the rate at which people change jobs (average tenure for mid-career professionals is 3-4 years), companies change contact information, organisations restructure, and market conditions evolve. A CRM database of 10,000 records that was fully accurate on January 1st will have approximately 3,000 records with at least one inaccurate field by December 31st.

The consequences compound. A sales rep who calls a prospect using an outdated email gets a bounce. A rep who references a prospect's old role looks unprepared. A scoring model that evaluates a company based on 14-month-old headcount data produces an inaccurate score. A pipeline forecast built on stale records produces an inaccurate forecast. Each of these failures is individually minor. Together, they create a systemic trust problem: reps stop trusting the CRM, start maintaining their own notes and spreadsheets, and the CRM degrades further because nobody updates it.

Enrichment breaks this cycle. When records are refreshed continuously — monthly for all accounts, weekly for hot leads, within hours of triggering events — the CRM remains a reliable source of truth. Reps trust it because it is accurate. They use it because it is useful. They contribute to it because they see the system working for them rather than against them.

The enrichment workflow also surfaces opportunities that would otherwise be invisible. In the Global Fresh Logistics example above, Rashid's promotion, the company's growth, the new contract, the regulatory deadline, and his LinkedIn activity were all publicly available signals. But no sales rep had the time to manually check every CULTIVATE-classified lead every month to see if circumstances had changed. The enrichment agent does this automatically. It is the difference between a CRM that degrades over time and a CRM that improves over time.

## From Score to Action: The Operational Bridge

The scoring model and the enrichment process are not ends in themselves. They are the bridge between intelligence (what do we know about this prospect?) and action (what do we do about it?). The bridge has four lanes, one for each classification level.

For **HOT leads** (80-100), the action is immediate and personal. The assigned rep receives an alert with the research brief and score within two hours. They are expected to make first contact within 24 hours. The outreach is generated via `/outreach` using the research brief as input. The goal is a discovery call this week.

For **WARM leads** (60-79), the action is personalised but not urgent. The lead enters a nurture sequence — a series of personalised touches over 3-4 weeks — designed to keep your organisation top-of-mind while monitoring for timing signals that would upgrade the score to HOT. The sequence is generated via `/sequence` and managed by the Outreach Sequencing agent.

For **CULTIVATE leads** (40-59), the action is marketing-driven. The lead enters a marketing nurture programme — newsletter, content offers, event invitations — with a quarterly sales check-in to see if circumstances have changed. The CRM Hygiene agent runs monthly enrichment on these leads to catch any timing signal changes that would upgrade the score.

For **NOT YET leads** (0-39), the action is monitoring only. No sales time is invested. The lead stays in the CRM but receives only automated enrichment updates. If a future enrichment run detects a significant change — the company grows into your ICP range, a new timing signal appears, or the contact changes roles to a target persona — the score is recalculated and the lead may be upgraded.

This score-to-action mapping is what transforms lead scoring from a theoretical exercise into an operational system. Without it, scores are numbers in a database. With it, scores drive specific behaviours with specific timelines, and the entire sales team operates on a shared prioritisation framework rather than individual gut instinct.

---

## Try With AI

### Prompt 1: Score Your Own Prospect

```
Using the three-dimension lead scoring model from Chapter 23
(Fit: 0-40, Timing: 0-40, Engagement: 0-20), score the following
prospect:

Company: [name]
Industry: [sector]
Location: [city, country]
Employees: [number]
Revenue: [estimate or "unknown"]
Contact: [name, title]
What we sell: [your product/service]
Our ICP fit criteria: [paste your firmographic criteria from Lesson 3]

Known timing signals:
- [list any recent events: funding, hiring, contracts, leadership changes]

Known engagement:
- [list any interactions: downloads, website visits, email opens]

Score each dimension with specific point allocations and explanations.
Classify the lead (HOT/WARM/CULTIVATE/NOT YET). Then state:
1. The recommended action for this classification
2. The specific timeline for that action
3. What additional information would change the score most significantly
4. If there are no timing signals, explain what to look for and where
   to find them for a [country] company
```

**What you're learning:** This prompt teaches you to apply the scoring model to a real prospect. The critical skill is not just calculating a number — it is understanding what drives the number. By asking the agent to explain point allocations and identify what would change the score, you learn to think about scoring as a diagnostic tool, not just a ranking tool. The market-specific question forces you to think about where timing signals live in your specific geography — SECP filings for Pakistan, DED registrations for Dubai, MCA filings for India.

### Prompt 2: Simulate a CRM Enrichment Before-and-After

```
I have a CRM record that is [X months] old for this company:

Company: [name]
Contact: [name, title at time of entry]
Location: [city, country]
Industry: [sector]
Last known revenue: [amount]
Last known headcount: [number]
Last activity in our CRM: [date and type]
Current score: [if known, or "never scored"]
Notes from sales rep: "[any notes]"

Simulate what an enrichment run would discover if it ran today.
For each field, show:
- Old value (what's in the CRM now)
- New value (what enrichment would find)
- Source (where the new data comes from)
- Significance (how this change affects the lead score)

Then recalculate the lead score with the enriched data. Show the
before and after scores side by side.

Finally: what data sources would you need MCP connectors to for this
market? List the specific services (e.g., Companies House, SECP,
DED, LinkedIn, Rozee.pk, Bayt.com) and what each one contributes
to the enrichment.
```

**What you're learning:** This prompt teaches you to understand enrichment as a score-changing operation, not just a data cleanup task. By seeing the before-and-after side by side, you learn that enrichment is what transforms stale CULTIVATE leads into actionable HOT leads. The data source mapping question teaches you the practical infrastructure requirement — enrichment is only as good as the sources you connect to, and the sources vary by market.

### Prompt 3: Design a Scoring Model for Your Business

```
I want to build a custom lead scoring model for my business.

Context:
- We sell: [product/service]
- Our market: [geography]
- Average deal size: [amount]
- Average sales cycle: [weeks/months]
- Our best leads typically come from: [source]
- The signal that most reliably predicts a close is: [describe]

Using the three-dimension framework (Fit, Timing, Engagement) as
a starting point, help me design a scoring model that is specific
to my business:

1. Fit Score (0-40): What specific criteria should I evaluate?
   Assign point values to each criterion and explain the weighting.

2. Timing Score (0-40): What timing signals are most relevant to
   my industry? Which are HOT (immediate) vs. WARM (monitoring)?

3. Engagement Score (0-20): What engagement behaviours matter most
   for my product? Should I weight some behaviours higher than others?

4. Classification thresholds: Should I use the standard 80/60/40
   thresholds, or should I adjust them for my sales cycle and
   deal size? Explain the tradeoff.

5. Action mapping: For each classification level, what is the
   specific action, who owns it, and what is the timeline?

Present this as a complete scoring specification I can configure
in sales-marketing.local.md.
```

**What you're learning:** This prompt teaches you to customise the generic scoring framework for your specific business. The standard 40/40/20 weighting and 80/60/40 thresholds are defaults, not laws. A company with a 12-month enterprise sales cycle might lower the HOT threshold to 75 because deals take longer and earlier engagement matters more. A company selling a low-cost self-serve product might weight engagement higher and timing lower because the buying decision is impulsive rather than strategic. By designing your own model, you learn that scoring is a hypothesis about buying behaviour that you refine with data, not a formula you apply blindly.
