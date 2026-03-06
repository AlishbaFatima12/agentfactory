---
sidebar_position: 12
title: "Applied Exercises"
description: "Eight hands-on exercises that build a complete AI-powered revenue engine: ICP configuration, research sprints, lead scoring, outreach sequences, campaign planning, content factories, pipeline audits, and RevOps dashboards"
keywords:
  [
    "sales exercises",
    "RevOps exercises",
    "ICP configuration",
    "lead scoring exercise",
    "outreach sequence exercise",
    "campaign planning exercise",
    "content factory",
    "pipeline audit",
    "RevOps dashboard",
    "applied AI sales",
    "marketing exercises",
    "hands-on AI",
  ]
chapter: 23
lesson: 12
duration_minutes: 45

# HIDDEN SKILLS METADATA
skills:
  - name: "Build and Validate an ICP Configuration File"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can mine historical deal data to define firmographic criteria, timing signals, persona profiles, and brand voice, then validate by scoring 5 closed-won deals as HOT (60+)"

  - name: "Deploy a Complete RevOps Dashboard with Leading Indicator Alerts"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can configure the Revenue Reporting Agent to produce automated weekly dashboards with pipeline metrics, lead velocity, marketing contribution, forecast, and leading indicator alert thresholds"

learning_objectives:
  - objective: "Build a validated ICP configuration file by mining historical closed-won deals and testing against the scoring model"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Student produces a sales-marketing.local.md configuration that correctly scores 5 closed-won customers as HOT (60+)"

  - objective: "Produce a complete 6-touch outreach sequence approved by a domain expert and tested with a live prospect"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Student produces a sequence with authenticity and effectiveness scores of 7+ from their best rep, and can report engagement data from at least one live test"

  - objective: "Configure a RevOps dashboard with pipeline metrics, lead velocity, and a documented leading indicator alert system"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Student produces a weekly dashboard with all required metrics and can explain which leading indicator they chose and why"

cognitive_load:
  new_concepts: 3
  concepts_list:
    - "ICP validation through retrospective scoring of historical deals"
    - "Content multiplication (one cornerstone asset to ten distribution assets)"
    - "Leading indicator identification and alert threshold configuration"
  assessment: "3 new concepts at B2 level -- well within the cognitive limit. The exercises primarily apply concepts already taught in Lessons 1-11. New conceptual ground is limited to the validation methodology, content multiplication pattern, and leading indicator identification."

differentiation:
  extension_for_advanced: "Complete all 8 exercises with live data and real prospects. Deploy the Revenue Reporting Agent to produce an actual automated weekly dashboard for your organisation. Track results over 4 weeks and report on which agent outputs improved most with use."
  remedial_for_struggling: "Focus on Exercises 1 and 2. If you can build a validated ICP configuration and produce 3 personalised research briefs with outreach messages, you have demonstrated the core capability. Exercises 3-8 extend and operationalise what you built in 1 and 2."
---

# Applied Exercises

Each exercise builds on the previous one. Work through them in order -- the outputs of earlier exercises become the inputs for later ones. Every exercise produces a deployable output that contributes to your complete AI-powered revenue engine.

---

## Exercise 1: Build Your ICP and Sales-Marketing Configuration

**What you will learn:** The ICP configuration file is the foundation of every other exercise. A weak ICP produces vague research briefs, unreliable lead scores, and generic outreach. This exercise teaches you to mine your own data for the signals that actually predict closed-won deals.

**Time:** 90 minutes

**What you need:**

- Sales and Marketing Plugins installed and verified (see Lesson 2)
- Access to your CRM with data on your last 20 closed-won deals
- Data fields needed for each deal: company size, revenue, industry, buyer persona, trigger event, sales cycle length, primary pain point, deal-breaker risks
- The `sales-marketing.local.md.template` from the Chapter 23 skill library (Lesson 10)
- A text editor or Claude Cowork session open

**Steps:**

**Step 1 -- Mine your closed-won deals.**

For each of your last 20 closed-won customers, document:

- Company size (employees and revenue)
- Industry and sub-sector
- Target persona (who you sold to; who signed off)
- What triggered their evaluation? (the timing signal)
- How long was the sales cycle?
- What was the primary pain they were solving?
- What would have made them a NO (what almost stopped them buying)?

Look for patterns. The ICP is not what you wish your customers were -- it is what your best customers actually are.

**Sample intermediate output** (after analysing 20 deals):

```
CLOSED-WON DEAL PATTERN ANALYSIS
================================================================
Common firmographic profile:
  Company size:     80-350 employees (median: 180)
  Revenue:          GBP 10M-60M (median: GBP 28M)
  Industry:         3PL logistics (12/20), warehousing (5/20), freight (3/20)
  Geography:        UK -- 16/20; EU -- 4/20

Most common timing signals preceding purchase:
  1. New contract win announced      -- 14/20 deals (70%)
  2. VP/Director Ops new in post     -- 11/20 deals (55%)
  3. Rapid hiring in ops roles       -- 9/20 deals (45%)

Average sales cycle:               42 days (range: 21-78)

Most common primary pain:
  "Scaling throughput without proportional headcount growth" -- 13/20

Most common deal-breaker risk:
  "Already using [Competitor A]" -- appeared in 4 lost deals
================================================================
```

**Step 2 -- Define the "never buy" signals.**

From the same deals, plus any significant losses, define:

- Company types that consistently do not progress past discovery
- Buyer personas that engage but never close
- Timing signals that look positive but consistently lead to no decision

**Step 3 -- Draft your ICP in Cowork:**

```
/persona type:"ICP-definition"
> Agent: Please answer the following questions and I will build
>        your complete ICP definition for sales-marketing.local.md.

[Work through the interview: firmographics, technographics,
 timing signals, persona profiles, messaging framework,
 brand voice, competitor intelligence]
```

**Step 4 -- Build the configuration file.**

Using the template from Lesson 10, fill in `sales-marketing.local.md` completely.

**Step 5 -- Validate against your last 5 closed-won deals.**

Run `/score` for each of your last 5 closed-won customers (as if they were new leads today). All 5 should score HOT (60+). If any score below 60, your ICP definition is missing a dimension. Debug and refine.

**Verifiable output:** A validated `sales-marketing.local.md` configuration file that scores all 5 closed-won customers as HOT. This is the foundation of your AI sales engine.

---

## Exercise 2: The Research and Outreach Sprint

**What you will learn:** The quality gap between standard rep outreach and AI-assisted outreach is dramatic. This exercise makes it visible by producing research briefs and personalised outreach for real prospects, then comparing the result to your existing outreach templates.

**Time:** 60 minutes

**What you need:**

- Completed Exercise 1 (validated `sales-marketing.local.md` in place)
- Sales Plugin installed with `/research`, `/score`, and `/outreach` commands available
- A list of 5 real target companies that match your ICP
- For each company: one target contact identified (name, title, company)
- Your existing CRM outreach template for comparison

**Steps:**

**Step 1 -- Build your 5-prospect list.**

Choose 5 real companies that match your ICP. They should be companies you actually want to target -- this exercise is most valuable if the output is real. If you are doing this in a classroom setting, use publicly available companies in your target sector.

For each company, identify one target contact (the primary persona from your ICP definition).

**Step 2 -- Run research on all 5:**

```
/research
> User: [Prospect name], [Title], [Company], [Location]
        Context: We are targeting [product/service]. I am trying to
        understand fit, timing, and the best outreach angle.
```

Review each brief. For each:

- What are the HOT timing signals (if any)?
- What is the specific pain this person is most likely experiencing?
- What is the hook -- the one specific thing that would make your outreach feel personal?

**Sample intermediate output** (for one of the five briefs):

```
RESEARCH BRIEF REVIEW -- Prospect 3 of 5
================================================================
Prospect:   Fatima Al-Hassan, Director of Operations, Gulf Freight Co., Dubai
ICP Match:  STRONG (score: 74)

HOT timing signals:
  - Company won JAFZA warehouse contract (Gulf News, Feb 2026)
  - Posted 3 logistics coordinator roles on Bayt.com (last 14 days)
  - Fatima posted on LinkedIn about "the gap between growth targets
    and operational capacity" (9 days ago)

Specific pain:  Scaling warehouse operations post-contract win
                without proportional headcount increase

Hook:  Her LinkedIn post + the JAFZA contract win
       (both are public signals; reference proves research)
================================================================
```

**Step 3 -- Score all 5:**

```
/score
> User: [Paste research brief OR provide company + contact details]
```

Rank your 5 prospects by score. The top 3 get personalised outreach this week. The bottom 2 go into a monitoring list.

**Step 4 -- Write personalised outreach for your top 3:**

For each:

```
/outreach
> User: Prospect: [name / research brief]
        Channel: [LinkedIn DM or email -- your preference]
        Goal: Discovery call
        Hook: [Specify the specific hook from the research brief]
```

Review each output against the Five Laws of Outreach. For each law, evaluate: is this message compliant? If not, iterate with the agent until it is.

**Step 5 -- The comparison.**

Put one of your AI-assisted messages next to your standard CRM outreach template for the same persona. Answer honestly:

1. Which message would you respond to if you received it?
2. What specific elements make the AI-assisted message more likely to get a response?
3. Which elements of the AI-assisted message could be improved further?

**Verifiable output:** 5 research briefs, 5 lead scores with ranking, 3 personalised outreach messages ready to send, and a written reflection on the quality comparison.

:::tip Pakistan/GCC Variant
If your target market is South Asia or the GCC, substitute the following signal sources in your research:

- **Pakistan:** SECP filings instead of Companies House; Dawn Business and The News International for trade press; Rozee.pk and Mustakbil.com alongside LinkedIn for job postings; PakWheels/Zameen.com data for sector-specific signals in automotive/real estate verticals.
- **GCC:** DIFC/ADGM/DMCC registrations for company data; Gulf News Business and Arabian Business for trade press; Bayt.com and GulfTalent for job postings; WhatsApp as a primary outreach channel alongside email (LinkedIn DM is less effective in some GCC segments). Adjust outreach timing for the Sunday-Thursday business week.
  :::

---

## Exercise 3: Build the Lead Scoring Model

**What you will learn:** Most lead scoring fails because it relies on only one or two signal dimensions. This exercise teaches you to deploy the three-dimension model (Fit, Timing, Engagement) calibrated against your own historical data, so your scores actually predict buying readiness.

**Time:** 75 minutes

**What you need:**

- Completed Exercises 1 and 2 (validated ICP and research briefs)
- Sales Plugin with `/score` and `/enrich` commands available
- Your last 10 completed deals: mix of won, lost, and no-decision outcomes
- CRM admin access (or a CRM administrator who can configure automation rules)
- At least 5 accounts with no CRM activity in the last 30 days (for Step 5 enrichment test)

**Steps:**

**Step 1 -- Define your scoring dimensions.**

Using the three-dimension model (Fit / Timing / Engagement -- see Lesson 3), define the specific criteria and point weights for your ICP.

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

**Step 2 -- Test against historical data.**

Take your last 10 deals (mix of won, lost, and no-decision). Score each using the model. Expected result:

- Closed-won: majority should score 60+
- Closed-lost (good-fit company, lost to competitor): should score 50-70
- No-decision: should score 30-50 (good fit, timing was wrong)
- Wrong-fit: should score below 30

**Sample intermediate output** (scoring 3 of 10 historical deals):

```
HISTORICAL DEAL SCORING VALIDATION
================================================================
Deal 1: Meridian Logistics (CLOSED-WON, GBP 48K)
  Fit: 36/40  Timing: 37/40  Engagement: 14/20  TOTAL: 87 -- HOT
  Expected: HOT. Result: CORRECT.

Deal 2: Sterling Partners (CLOSED-LOST to Competitor A, GBP 35K)
  Fit: 34/40  Timing: 22/40  Engagement: 8/20   TOTAL: 64 -- WARM
  Expected: 50-70. Result: CORRECT. (Good fit but timing was weak;
  competitor had existing relationship.)

Deal 3: Nova Ventures (NO DECISION, GBP 22K)
  Fit: 28/40  Timing: 8/40   Engagement: 6/20   TOTAL: 42 -- CULTIVATE
  Expected: 30-50. Result: CORRECT. (Fit was moderate; no timing
  signals at all; engaged but never committed.)
================================================================
```

If the results are inconsistent with expectations, recalibrate point weights and re-test.

**Step 3 -- Define the routing rules.**

For each tier (HOT / WARM / CULTIVATE / NOT YET), define:

- Who receives the lead (rep tier, territory, vertical specialism)?
- What happens within the first 24 hours?
- What is the SLA for first outreach?
- What happens if the SLA is missed?

**Step 4 -- Configure CRM automation.**

Work with your CRM administrator (or do this yourself if you have admin access) to create automation rules:

- Score field populated automatically on record creation
- Score updated weekly via enrichment
- Lead owner assigned based on score tier plus territory rules
- Alert sent to rep when any lead crosses 60 threshold

**Step 5 -- Run enrichment on your 30-day inactive leads.**

```
/enrich
> User: Run enrichment on all accounts with no activity in the last
>        30 days and a current score above 40. Flag any accounts where
>        timing signals have changed materially since last enrichment.
```

**Verifiable output:** A deployed lead scoring model with validated thresholds, documented routing rules, CRM automation configured, and an enrichment report identifying any re-activated prospects in your existing database.

---

## Exercise 4: Ghostwrite a Full Outreach Sequence

**What you will learn:** Your best rep's outreach approach can be encoded into a repeatable, tested sequence that every rep on the team can use. This exercise extracts that expertise and deploys it as a scalable asset.

**Time:** 60 minutes

**What you need:**

- Completed Exercises 1-3 (validated ICP, research, and scoring model)
- Sales Plugin with `/research`, `/sequence`, and `/outreach` commands available
- Access to your organisation's best-performing sales rep for a 20-minute interview
- Your `outreach.md` product file from the skill library (to add "best rep principles")
- One HOT-scored prospect for live testing (from Exercise 2 or 3)

**Steps:**

**Step 1 -- Interview your best rep.**

Before opening Cowork, spend 20 minutes with your top performer. Ask:

1. "When you write outreach to a [primary persona], what do you always include in the first message?"
2. "What is the one thing you never say in a cold outreach message?"
3. "What follow-up approach has been most effective for you?"
4. "When a prospect doesn't respond, what is your rule for when to follow up and when to stop?"
5. "What is the one thing you say on a first call that almost always gets the prospect talking?"

Record the answers. This is the raw material.

**Sample intermediate output** (interview notes):

```
BEST REP INTERVIEW -- James Wright (340% of quota, 2025)
================================================================
Always includes:  A specific reference to something they posted or
                  published. "I never send a message that doesn't
                  prove I spent time on them specifically."

Never says:       "I hope this email finds you well." Also never
                  mentions the product by name in Touch 1.

Follow-up rule:   "I wait 3 days, then try a different channel.
                  If LinkedIn DM, follow up with email. Never the
                  same channel twice in a row."

Stop rule:        "After 5 touches with no response, I send one
                  final 'closing the loop' message and move on.
                  But if they opened my emails, I try one more
                  value-add before the close."

Opening line:     "I always start by referencing something they
                  care about -- a post, a news item, a challenge
                  in their sector. Then I shut up and listen."
================================================================
```

**Step 2 -- Encode in SKILL.md.**

Open your `outreach.md` product file. Add a "best rep principles" section encoding what you just learned.

**Step 3 -- Build the sequence:**

```
/sequence
> User: Build a 6-touch, 21-day outreach sequence for our primary
>        persona: [VP Ops / whichever is your primary ICP persona].
>        Incorporate these principles from our top rep: [paste key points].
>        Channel mix: 3 LinkedIn + 3 email.
>        Goal: Discovery call.
>        Tone: [Your brand voice description].
>        Sector: [Your primary vertical].
```

**Step 4 -- Critique with your best rep.**

Show the sequence to your top rep. Ask them to score each touch on two dimensions:

- Authenticity (1-10): Does this sound like something I would actually write?
- Effectiveness (1-10): Would I expect this to get a response?

For any touch scoring below 7 on either dimension: iterate with the agent until the rep approves it.

**Step 5 -- Test with a live prospect.**

Select one HOT-scored prospect. Send the sequence exactly as written (no modifications). Track: open rates per touch, click rates, reply rate. After 21 days, report on the results.

**Verifiable output:** A 6-touch outreach sequence approved by your best rep, encoded in your SKILL.md, tested with a live prospect, with performance data logged.

---

## Exercise 5: Run a Full Campaign Brief

**What you will learn:** Campaign planning without AI takes days. Campaign planning with AI takes an hour -- but only if you define the goal precisely. This exercise teaches the discipline of measurable campaign design and produces a complete brief ready to execute.

**Time:** 75 minutes

**What you need:**

- Completed Exercises 1-4 (validated ICP, scoring model, and outreach sequence)
- Marketing Plugin with `/campaign`, `/content`, and `/calendar` commands available
- A specific campaign goal with measurable outcomes (not "more leads" -- a number, a cost target, a timeframe)
- Budget figure and creative team capacity (who can produce content and when)
- Access to your marketing channel accounts (LinkedIn Campaign Manager, email platform, analytics)

**Steps:**

**Step 1 -- Define the campaign goal.**

Be specific. "More leads" is not a goal. "50 HOT-scored leads from [target vertical] at cost per lead below [currency amount] in [timeframe]" is a goal. If you cannot define a specific, measurable outcome, do not start the campaign.

**Step 2 -- Run the campaign brief:**

```
/campaign
> User: Goal: [e.g., generate 50 qualified leads scoring 60+ in Q2]
        Audience: [e.g., VP Ops and COO in UK 3PL operators, 50-400 employees]
        Product: [your core platform or offer]
        Budget: [amount and currency]
        Timeline: [start-end, number of weeks]
        Constraints: [team capacity, channel limitations, compliance requirements]
```

Work through the output with your marketing team. For each element:

- Channel mix: Is this appropriate for your audience? Do you have the capability to execute?
- Content plan: Do you have the resources to produce this content at this quality?
- Success metrics: Are these the right metrics or are they vanity metrics that don't predict revenue?
- Risk: What is the most likely reason this campaign underperforms and what is the contingency?

**Step 3 -- Build the content calendar:**

```
/calendar
> User: Build a week-by-week content calendar for this campaign:
        [paste campaign brief]
        Include: content piece title, format, target persona, channel,
        publish date, SEO keyword (if applicable), CTA.
        Output as a table.
```

**Sample intermediate output** (weeks 1-3 of a 12-week calendar):

```
CONTENT CALENDAR -- Q2 Lead Gen Campaign (Weeks 1-3)
================================================================
Week  | Content                        | Format    | Channel    | CTA
------+--------------------------------+-----------+------------+-----------
1     | "3PL Scaling Report 2026"      | Whitepaper| Gated LP   | Download
1     | "Why 3PLs that survived 2025   | Blog post | Website    | Read more
      |  are positioned to win"        |           |            |
2     | CEO post: scaling without      | LinkedIn  | Personal   | Comment
      |  headcount (ghostwritten)      | post      | profile    |
2     | Whitepaper excerpt: top 3      | Email     | Newsletter | Download
      |  findings                      |           |            |
3     | "The ops scaling question       | Blog post | Website    | Download
      |  every 3PL VP faces in 2026"   |           | + LinkedIn |  report
3     | Ad variant A: "Scale ops,      | Sponsored | LinkedIn   | LP visit
      |  not headcount" + image        | Content   | Ads        |
================================================================
```

**Step 4 -- Create one cornerstone asset.**

Identify the single most important content asset in your campaign plan (typically the lead magnet -- whitepaper, report, or guide). Draft it:

```
/content type:"whitepaper"
          length:2500
          topic:"[Your cornerstone topic]"
          audience:"[Primary persona]"
          goal:"Demonstrate sector expertise; generate qualified downloads"
```

**Step 5 -- Define the measurement framework.**

Before you launch a single campaign element:

- Which metrics will you review weekly?
- What is the threshold for pausing a channel?
- What is the threshold for reallocating budget mid-campaign?
- Who owns the weekly analysis and what format will they produce?

Configure the Marketing Performance Agent (Lesson 9, Agent 4) to run automatically every Friday.

**Verifiable output:** Complete campaign brief, week-by-week content calendar, one cornerstone content asset (draft), and a measurement framework with named owners and weekly review cadence.

---

## Exercise 6: Content Factory -- 10 Assets in One Session

**What you will learn:** Content multiplication -- the discipline of extracting maximum distribution value from every research investment. One cornerstone piece becomes ten distinct assets across channels, each tailored to its platform and audience.

**Time:** 90 minutes

**What you need:**

- Completed Exercise 5 (campaign brief and cornerstone content asset)
- Marketing Plugin with `/content` and `/copy` commands available
- Your cornerstone whitepaper or long-form article from Exercise 5
- Brand voice configuration in your `sales-marketing.local.md`
- A checklist template to track 10 assets as you produce them

:::tip Pakistan/GCC Variant
If your target market includes Pakistan or the GCC, adapt the asset tree for local platforms. Replace the LinkedIn article with a WhatsApp Business broadcast version (under 1,000 characters with a link). Add a Dawn Business or Gulf News op-ed format alongside the blog post. For social carousel content, consider Twitter/X Spaces as a distribution channel (high adoption in both Pakistan and GCC business communities). Adjust currency references to PKR or AED throughout all assets.
:::

**Steps:**

**Step 1 -- Prepare the cornerstone content.**

Have your whitepaper or long-form article from Exercise 5 open and ready. This is the source material for all 10 assets. Read it once and note the three strongest sections, the most compelling statistic, and the primary case study reference.

**Step 2 -- Generate the asset tree.**

Run the following command to produce all 10 derivative assets:

```
/content type:"asset-tree"
          source:"[Your cornerstone content -- paste or reference]"
          produce:
            - linkedin-article: 900 words for company page
            - ceo-post: 400 words for CEO personal LinkedIn (3 variants)
            - email-newsletter: 500 words for subscriber list
            - social-carousel: 8 slides -- key findings from whitepaper
            - cold-email-hook: 50 words -- whitepaper finding as outreach hook
            - sales-one-pager: 1 page -- for reps to share post-discovery
            - ad-copy: 5 variants (LinkedIn Sponsored) -- different hooks
            - subject-lines: 8 variants for email A/B testing
            - webinar-outline: 45-minute webinar built from whitepaper content
            - faq-post: common questions raised by whitepaper topic
```

**Step 3 -- Review each asset for quality.**

For each of the 10 assets, check:

- Does it comply with your brand voice configuration?
- Are all factual claims consistent with the source whitepaper?
- Is the CTA singular and specific (not multiple options)?
- Is the length appropriate for the platform?

**Sample intermediate output** (CEO LinkedIn post, variant 1 of 3):

```
ASSET 4: CEO LINKEDIN POST -- Variant 1 (Hook: Scale Challenge)
================================================================
Character count: 1,847 (within LinkedIn limit)
Hook angle: The tension between growth targets and operational capacity

---

Last month I talked to six 3PL operators who all described the same
problem: their business is growing, their client list is growing,
but their operational capacity is not growing at the same rate.

The numbers are stark. The average UK 3PL operator added 23% more
volume in 2025 but only 8% more operational staff. That gap is
not sustainable.

We just published our 3PL Scaling Report. Three findings stood out:

1. Operators who invested in process automation before their growth
   surge handled 40% more throughput per FTE than those who hired first
2. The average time from "we need to fix this" to "we have a system
   in place" is 7 months. The growth surge waits for no one.
3. The operators who survived 2024-25 cost pressure are now better
   positioned than anyone expected -- if they move now.

Full report link in comments. No pitch. Just data.

What are you seeing in your operation?
================================================================
```

**Step 4 -- Track production metrics.**

After producing all 10, answer:

1. Which assets took the most iteration before they were acceptable quality?
2. Which assets surprised you in quality -- better than you expected?
3. What would the equivalent production time have been for your team without AI?
4. What is the one human editorial contribution that made the biggest quality difference?

**Step 5 -- Publish-readiness review.**

For each asset, mark as: READY TO PUBLISH / NEEDS EDITING / NEEDS REWRITE. Have your content lead review any asset marked NEEDS EDITING and make final adjustments.

**Verifiable output:** 10 distinct content assets built from one cornerstone piece, ready for publication. Time log showing production time with AI vs. estimated production time without AI.

---

## Exercise 7: The Pipeline Health Audit

**What you will learn:** Sales forecasts are wrong because reps are optimistic, CRM data is stale, and pipeline reviews are based on narrative rather than signal analysis. This exercise teaches you to audit your pipeline with data-driven deal health assessment and identify the single systemic issue most likely to affect this quarter's forecast.

**Time:** 60 minutes

**What you need:**

- Completed Exercises 1-3 (validated ICP, scoring model, and routing rules)
- Sales Plugin with `/pipeline` and `/brief` commands available
- Full pipeline export from your CRM: all deals in active stages (post-discovery, pre-close)
- For each deal: deal name, value, stage, last activity date, expected close date, assigned rep, and any notes
- Lead Intelligence Agent configured (Lesson 9, Agent 1)

**Steps:**

**Step 1 -- Export your current pipeline.**

Pull your full pipeline from CRM. Export all deals in "active" stages (post-discovery; pre-close). Include: deal name, value, stage, last activity date, close date, rep, and any notes.

**Step 2 -- Pipeline analysis:**

```
/pipeline
> User: Here is our current pipeline data. Please analyse:
>        1. Which deals are at risk? (no recent activity, stale stage,
>           mismatched timeline)
>        2. Which deals are strongest for close this quarter?
>        3. Where are the gaps between our forecast and realistic
>           expectation?
>        4. Which deals need immediate rep attention?
> [Paste: pipeline export]
```

**Sample intermediate output** (pipeline analysis summary):

```
PIPELINE HEALTH AUDIT -- Summary
================================================================
Total pipeline:          GBP 2.4M (34 active deals)
Weighted pipeline:       GBP 1.1M

HEALTH CLASSIFICATION
  Healthy (on track):    18 deals (GBP 1.3M) -- 53%
  At risk (stale):        6 deals (GBP 340K) -- 14%
  At risk (competitive):  4 deals (GBP 280K) -- 12%
  Forecast mismatch:      6 deals (GBP 480K) -- 20%

TOP 3 DEALS FOR THIS QUARTER
  1. Meridian Logistics -- GBP 48K -- Proposal sent, exec sponsor
     confirmed, close expected Week 12
  2. BrightPath Logistics -- GBP 52K -- POC completed successfully,
     budget approved, contract in legal review
  3. Apex Warehousing -- GBP 38K -- Discovery complete, strong
     champion, next step: CFO presentation Week 11

SYSTEMIC ISSUE: 6 deals (GBP 480K) have close dates this quarter
but have not progressed beyond Discovery stage. These should be
reforecast to Q2 or disqualified.
================================================================
```

**Step 3 -- Deal health briefs for your top 3.**

For each of the 3 deals most likely to close this quarter:

```
/brief type:"deal-health"
       deal:"[Deal name / company]"
       stage:"[Current stage]"
       last-activity:"[Date and description]"
       known-risks:"[Competitor involvement, budget uncertainty, etc.]"
```

**Step 4 -- Identify the single intervention that would most improve forecast accuracy.**

After reviewing all briefs and the pipeline analysis: what is the most common reason deals are stalling? Is it timing (wrong quarter), product (wrong fit), competition (losing on product/price), or process (rep not advancing the deal)?

Configure your Lead Intelligence Agent (Lesson 9, Agent 1) to monitor external signals for each active deal -- so the agent alerts the rep if any timing signal changes during the sales cycle.

**Verifiable output:** Complete pipeline health audit, top 3 deal briefs with recommended next steps, identification of systemic pipeline health issue, and Lead Intelligence Agent configured for active deal monitoring.

---

## Exercise 8: Build the RevOps Dashboard

**What you will learn:** The weekly revenue dashboard that your VP of Sales and CMO both want, produced automatically every Monday morning with no manual data assembly. This exercise teaches you to configure the Revenue Reporting Agent and identify the leading indicator that predicts your revenue 60-90 days out.

**Time:** 60 minutes

**What you need:**

- Completed Exercises 1-7 (full revenue engine configured)
- Sales Plugin with `/pipeline` and `/analyze` commands available
- Revenue Reporting Agent SKILL.md from Lesson 9 (Agent 5)
- CRM admin access for MCP connector configuration
- Marketing platform access (LinkedIn Campaign Manager, email platform, Google Analytics)
- Your organisation's quarterly revenue target and current pipeline data
- Distribution list: who receives the full report vs. the summary

**Steps:**

**Step 1 -- Define the metrics.**

| Metric                                  | Owner     | Source          | Target             |
| --------------------------------------- | --------- | --------------- | ------------------ |
| HOT leads generated                     | Marketing | CRM             | [Your target/week] |
| HOT lead to SAL conversion rate         | RevOps    | CRM             | >35%               |
| Sales Accepted Leads (SAL)              | Sales     | CRM             | [Your target/week] |
| SAL to Opportunity conversion           | Sales     | CRM             | >60%               |
| Pipeline created (currency/week)        | Sales     | CRM             | [Your target]      |
| Average deal size                       | Sales     | CRM             | [Your target]      |
| Pipeline at risk (no activity >14 days) | RevOps    | CRM             | <15% of pipeline   |
| Close rate                              | Sales     | CRM             | [Your baseline]    |
| CAC by channel                          | RevOps    | CRM + Marketing | [Your target]      |
| Content asset ROI                       | Marketing | CRM + Analytics | [Your target]      |

**Step 2 -- Configure the Revenue Reporting Agent (Lesson 9, Agent 5) to fetch all data sources via MCP and produce this dashboard every Monday morning.**

**Sample intermediate output** (agent configuration checklist):

```
REVENUE REPORTING AGENT CONFIGURATION
================================================================
MCP Connectors Required:
  [x] CRM (HubSpot) -- pipeline, deal stages, rep assignments
  [x] LinkedIn Campaign Manager -- ad spend, impressions, leads
  [x] Google Analytics GA4 -- sessions, conversions, source/medium
  [x] Email platform (Mailchimp) -- send, open, click, unsubscribe
  [ ] Finance system -- actual revenue vs forecast (optional)

Distribution List:
  Full report:    RevOps team, VP Sales, CMO
  Summary only:   CEO, CFO
  Anomaly alerts: RevOps lead (immediate)

Schedule: Every Monday, 06:00

Alert Thresholds:
  MQL to SAL conversion <30%:     Immediate alert to RevOps + VP Sales
  HOT lead volume <4/week for 2+ weeks: Alert VP Marketing
  Pipeline coverage <2.5x:        Alert VP Sales + CEO
  At-risk pipeline >15% of total: Alert VP Sales
================================================================
```

**Step 3 -- Write the weekly leadership email.**

Using the dashboard data, produce a weekly summary email format:

```
/content type:"executive-email"
          audience:"VP Sales, CMO, CEO"
          data:"[paste dashboard data]"
          format:"5 bullets maximum; lead with the most important number;
                  one risk; one win; one ask"
          length:"150 words maximum"
```

**Step 4 -- Identify the single most important leading indicator for your business.**

Lagging indicators (revenue, pipeline value) tell you what happened. Leading indicators tell you what will happen. For most B2B businesses, the most reliable leading indicator is: HOT lead to Sales Accepted Lead conversion rate -- if this drops, revenue will drop in 60-90 days. Configure the Revenue Reporting Agent to send an immediate alert if this rate drops below threshold in any given week.

**Verifiable output:** A configured Revenue Reporting Agent producing a weekly dashboard automatically, a weekly executive email template, and a documented leading indicator alert system.

---

## Try With AI

Use these prompts in Claude or your preferred AI assistant to deepen your practice.

### Prompt 1: ICP Validation Deep Dive

```
I have built my ICP configuration and scored my last 5 closed-won
deals. Three scored HOT (above 60) but two scored WARM (52 and 57).

Here are the two WARM-scoring deals:
- Deal A: [describe company, size, industry, timing, outcome]
- Deal B: [describe company, size, industry, timing, outcome]

Help me diagnose:
1. Which scoring dimension is likely underweighted?
2. What criteria should I add or adjust?
3. After the adjustment, would these deals now score HOT?
4. Could the adjustment cause any current NOT-YET leads to
   incorrectly score as HOT? (false positive risk)
```

**What you are learning:** ICP calibration is iterative. The model must correctly classify historical deals before you trust it with new leads. The false positive check (Step 4) is critical -- adjusting weights to capture edge cases can introduce scoring inflation that makes the HOT tier unreliable.

### Prompt 2: Content Multiplication for Your Market

```
I have a 2,500-word whitepaper on [your topic] targeting
[your persona] in [your market/region].

Build a 10-asset content tree, but adapt for my specific market:
- Primary distribution channels: [list your actual channels]
- Brand voice: [paste your brand voice configuration]
- Regional considerations: [language, cultural norms, platform preferences]

For each asset:
1. Show the first 3 sentences (so I can evaluate voice and tone)
2. Specify the platform and format constraints
3. Identify the single CTA
4. Flag any cultural adaptation needed for [your market]
```

**What you are learning:** Content multiplication is platform-specific. A LinkedIn article in the GCC may need a different tone than one targeting the UK. The asset tree structure is universal; the execution is market-specific. The brand voice configuration in your local file should handle this automatically -- if it does not, your voice configuration needs market-specific sections.

### Prompt 3: Leading Indicator Analysis

```
Here is my weekly dashboard data for the last 8 weeks:

[Paste: HOT leads, MQL-to-SAL conversion, SAL-to-Opportunity
 conversion, pipeline created, deals closed, average cycle length]

Analyse this data and tell me:
1. Which metric is the strongest leading indicator of closed revenue
   in my data? (not the textbook answer -- MY data)
2. Are there any concerning trends that the weekly numbers might mask?
3. What alert threshold should I set for my leading indicator?
4. If I could improve one metric by 10%, which would have the largest
   impact on quarterly revenue?
```

**What you are learning:** Leading indicators are business-specific. The textbook answer (MQL-to-SAL conversion) may not be your strongest predictor. Your data may show that average cycle length or pipeline-at-risk percentage is more predictive for your business. The Revenue Reporting Agent should be configured with your actual leading indicator, not a generic one.

---

## Chapter 23 Summary: The Revenue Engine Built on AI

This chapter taught you to build a complete AI-powered revenue operation across twelve lessons.

**Lesson 1: The 1% Problem** established the core insight: the gap between top-performing sales reps and the rest is not talent -- it is research depth, personalisation quality, timing, and follow-up consistency. AI closes that gap by giving every rep the research capacity and personalisation capability of your best performer.

**Lesson 2: Installing the Plugins** walked through the dual-path installation of the Anthropic Sales and Marketing Plugins and the Agent Factory extension, verified correct installation through structured output headers, configured the minimum viable `sales-marketing.local.md`, and introduced skill collision resolution between base and extension plugins.

**Lesson 3: Prospect Research and ICP** taught the `/research` command that produces 45-minute deep prospect briefs in under 4 minutes, and the ICP (Ideal Customer Profile) configuration in YAML that makes every subsequent command specific to your business -- firmographic criteria, technographic signals, and timing triggers that separate high-value prospects from noise.

**Lesson 4: Lead Scoring and CRM Enrichment** built the three-dimension scoring model (Fit 0-40, Timing 0-40, Engagement 0-20) with the `/score` command, then addressed the data decay problem (30% per year) and showed how the `/enrich` command keeps CRM records current automatically with field-level change tracking and timing signal refresh.

**Lesson 5: The Five Laws of Outreach** introduced the Five Laws framework and demonstrated the `/outreach` command for individually crafted messages, the `/sequence` command for multi-touch campaigns with branch conditions, the `/follow-up` command for post-interaction continuity, and the `/copy` command for persuasive sales copywriting -- including WhatsApp Business outreach for relationship-first B2B cultures.

**Lesson 6: Campaign Optimisation and the Content Factory** showed how the `/campaign` command builds full campaign briefs with channel mix and budget allocation, the `/content` command creates assets across formats, and the `/calendar` command plans publishing schedules -- with a worked example adapting budgets from GBP 25K to PKR 500K for emerging markets.

**Lesson 7: ABM and Attribution Modeling** covered Account-Based Marketing as an orchestration problem -- coordinating prospect research, ICP scoring, outreach sequences, and campaign planning into a single motion for high-value targets -- then demonstrated how first-touch, last-touch, multi-touch, and data-driven attribution models assign credit differently across the same campaign data.

**Lesson 8: Outreach Compliance and Regional Context** mapped the jurisdiction landscape (CAN-SPAM, GDPR, PECR, PECA, TRA) and showed how the plugin's jurisdiction overlay system applies the correct compliance rules automatically, then explored how regional sales cultures -- Western cold outreach, South Asian relationship-first approaches, GCC wasta networks -- change how every command is configured.

**Lesson 9: RevOps Agents** built five persistent autonomous agents -- Lead Intelligence, CRM Hygiene, Outreach Sequencing, Marketing Performance, and Revenue Reporting -- that manage the end-to-end revenue process without manual intervention. Each agent was expanded with architecture, trigger conditions, sample outputs, and failure modes.

**Lesson 10: The Skill Library** explained the three-layer architecture (global router, product files, local configuration) that powers every plugin command, showed the complete directory structure of 22 files, and taught how to extend the library with new product skills.

**Lesson 11: Extending Plugins for Your Market** taught you to build jurisdiction overlays for new markets, resolve skill collisions between base and extension plugins using wrapper, override, and delegation patterns, deploy multi-market local configurations, and package your extensions as competitive advantages -- with a worked example building a South Asian B2B extension.

**Lesson 12: Applied Exercises** provided eight hands-on exercises that build the complete revenue engine progressively: ICP configuration, research sprints, lead scoring, outreach sequences, campaign planning, content factories, pipeline audits, and RevOps dashboards.

**The central principle throughout:** Scale the expertise of your top 1% across the entire team. The system gets better as you use it -- every customer interaction refines the ICP, every closed deal calibrates the scoring model, and every campaign teaches the agent what works in your market with your buyers.
