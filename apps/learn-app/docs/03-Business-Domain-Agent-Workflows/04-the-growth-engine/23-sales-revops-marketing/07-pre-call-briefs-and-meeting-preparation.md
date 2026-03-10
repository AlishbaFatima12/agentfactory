---
sidebar_position: 7
title: "Morning Briefing and Competitive Battlecards"
description: "Use the Anthropic daily-briefing skill to prioritise pipeline opportunities and the competitive-intelligence skill to generate battlecards — connecting scoring from L03 to outreach planning from L05"
keywords:
  [
    "daily briefing",
    "competitive intelligence",
    "battlecards",
    "pipeline prioritisation",
    "competitive analysis",
    "Anthropic sales plugin",
    "deal prioritisation",
    "competitor weaknesses",
    "sales preparation",
    "morning routine",
    "intel-to-outreach",
  ]
chapter: 23
lesson: 7
duration_minutes: 20

# HIDDEN SKILLS METADATA
skills:
  - name: "Use daily-briefing to Prioritise Pipeline Opportunities"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can run the daily-briefing skill, evaluate the prioritisation logic (score vs meeting proximity vs deal size), and override the agent's ranking when their domain knowledge disagrees"

  - name: "Generate and Fact-Check Competitive Battlecards"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can generate competitive battlecards using the competitive-intelligence skill, identify at least 2 claims that need verification, and evaluate the battlecard's usefulness for an upcoming sales call"

  - name: "Connect Intelligence to Outreach Planning"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Communication and Collaboration"
    measurable_at_this_level: "Student can use briefing priorities and competitive intelligence to inform which prospects to contact today and what angle to use"

learning_objectives:
  - objective: "Run the daily-briefing skill and evaluate the prioritisation logic against domain knowledge"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student can explain why the briefing ranked opportunities the way it did and identify at least one ranking they would override"

  - objective: "Generate competitive battlecards and fact-check them for hallucinated claims"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Student produces battlecards for 2 competitors and flags at least 2 unverifiable claims per card"

  - objective: "Use briefing and competitive intelligence to plan outreach priorities for the day"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces a prioritised outreach plan that references both briefing data and competitive positioning"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "Daily briefing as pipeline prioritisation tool"
    - "Competitive battlecards as sales preparation artifacts"
    - "Hallucinated Data in competitive context (fabricated competitor claims)"
    - "Intel-to-outreach connection (intelligence drives action)"
    - "Prioritisation override (when human judgment beats the algorithm)"
  assessment: "5 concepts at B1 level. Lower concept count because this lesson primarily applies existing diagnostic skills (Hallucinated Data from L01) to new content types."

differentiation:
  extension_for_advanced: "Generate battlecards for your top 3 competitors. Cross-reference claims across cards — does the agent contradict itself about the same competitor in different contexts? This tests consistency across multiple outputs."
  remedial_for_struggling: "Focus on running daily-briefing once and evaluating whether the top-ranked opportunity is actually the one you'd call first. If you can explain why you agree or disagree with the ranking, you have the core judgment."
---

# Morning Briefing and Competitive Battlecards

In Lesson 6, you built outreach sequences tied to individual prospects. Now scale the question: you have 15 active opportunities in NexaFlow's pipeline. It is 7:30 AM and your first meeting starts at 11:00. Which accounts get your preparation time? Which meeting needs a competitive angle? The difference between a prepared rep and a scrambling one is not talent or work ethic. It is a system that answers both questions before the coffee is ready.

The `daily-briefing` skill (Anthropic sales plugin) answers the first question. It reads your pipeline, applies the scoring model you built in Lesson 3, and produces a prioritised list of what matters today. The `competitive-intelligence` skill (Anthropic sales plugin) answers the second. It generates **battlecards** — structured competitive profiles you can reference during a live call. Together, these two skills connect the scoring framework from Lesson 3 to the outreach planning from Lesson 5. Intelligence in, action out.

But both skills produce output you must evaluate. The `daily-briefing` skill ranks opportunities using an algorithm. Algorithms do not know that the VP you are meeting today is retiring next month. The `competitive-intelligence` skill generates competitor claims that may be fabricated. Hallucinated Data in a competitive context is worse than in a prospect context — you might say it out loud to someone who knows the truth.

## Running the Daily Briefing

The `daily-briefing` skill reads your active pipeline and produces a prioritised agenda for today. Run it against NexaFlow's pipeline of 15 active opportunities:

```
Run my daily sales briefing for the active pipeline
```

**Output:**

```
══════════════════════════════════════════════════════════════
          DAILY SALES BRIEFING
          NexaFlow Technologies — Pipeline Summary
          Date: 2026-03-10 | Active Opportunities: 15
══════════════════════════════════════════════════════════════

TODAY'S PRIORITIES (ranked by composite score)
─────────────────────────────────────────────────────────────
 #   Company              Score  Meeting  Deal Size   Action
─────────────────────────────────────────────────────────────
 1   Meridian Logistics    94    11:00am  $180,000    Prep: competitive
                                                      positioning vs
                                                      TrackFlow
 2   Gulf Express LLC      89    2:30pm   $95,000     Prep: pricing
                                                      objection handling
 3   DataForge Solutions   87    None     $120,000    Send: follow-up
                                                      on proposal from
                                                      Friday
 4   Pinnacle Analytics    81    None     $45,000     Review: champion
                                                      went silent last
                                                      week — re-engage?
 5   Crescent Freight      78    None     $200,000    Hold: waiting on
                                                      procurement cycle
                                                      (next touch Mar 18)

─────────────────────────────────────────────────────────────
REMAINING 10 OPPORTUNITIES (scored 42-76)
─────────────────────────────────────────────────────────────
 6   TechBridge Karachi    76    None     $55,000     Nurture
 7   Kaizen Supply Co.     73    None     $110,000    Nurture
 8   AlphaRoute Dubai      68    None     $85,000     Nurture
 9   Noor Logistics        64    None     $40,000     Nurture
10   PakFreight Ltd        61    None     $30,000     Nurture
11   SwiftHaul Riyadh      58    None     $70,000     Nurture
12   CloudOps Lahore       54    None     $60,000     Nurture
13   BridgePoint UK        51    None     $90,000     Nurture
14   Metro Delivery ISB    47    None     $25,000     Nurture
15   Vertex Transport      42    None     $35,000     Nurture

══════════════════════════════════════════════════════════════
PIPELINE HEALTH
─────────────────────────────────────────────────────────────
Total Pipeline Value:     $1,240,000
Weighted Pipeline:        $465,000
Meetings Today:           2
Deals Needing Action:     4 (priorities 1-4)
Stale Deals (>14 days):  3 (CloudOps, BridgePoint, Vertex)
══════════════════════════════════════════════════════════════
```

That output looks clean and decisive. Five prioritised opportunities, ten in nurture, a pipeline health summary. But before you trust it, understand how the ranking works.

### How the Briefing Prioritises

The `daily-briefing` skill uses a **composite score** built from three weighted factors:

| Factor | Weight | Source |
|--------|--------|--------|
| Lead score (Fit + Timing + Engagement) | 50% | The scoring model from Lesson 3 |
| Meeting proximity | 30% | Calendar integration — meetings today rank higher |
| Deal size | 20% | Larger deals get marginal priority at equal scores |

Meridian Logistics ranks first not because it has the highest lead score alone but because it has a meeting in three hours. Gulf Express ranks second for the same reason. DataForge at position 3 has a comparable lead score but no meeting today — its priority comes from the open proposal needing follow-up.

Now look at position 4: Pinnacle Analytics. Score of 81 points. Recall from Lesson 3 that Pinnacle had high Fit (38/40), high Timing (31/30), but low Engagement (12/30). The composite score of 81 places it above Crescent Freight at 78. The briefing flagged the champion going silent and recommended re-engagement.

### Evaluating the Ranking

Here is where your judgment matters more than the algorithm.

Look at Crescent Freight at position 5. Score: 78. Deal size: $200,000 — the largest in the pipeline. The briefing says "Hold: waiting on procurement cycle." But you know something the agent does not: Crescent's procurement team sent an informal email last night asking for updated pricing. That email is not in the CRM yet. The agent ranked Crescent fifth. You would rank it second.

This is a **prioritisation override** — a situation where your domain knowledge contradicts the algorithm's ranking. The algorithm cannot read your inbox. It cannot attend the dinner where Crescent's CFO mentioned budget approval. Overrides are not failures of the system. They are features of the human-agent partnership. The agent handles the 80% of ranking that follows from structured data. You handle the 20% that follows from relationship intelligence.

The **override protocol** is straightforward:

1. Read the briefing ranking. Understand why each opportunity is where it is.
2. Check each top-5 item against what you know that the agent does not.
3. Reorder if your information changes the priority.
4. Move on. The briefing saved you the 20 minutes of reviewing 15 accounts. Your override took 2 minutes. Net time saved: 18 minutes. Every morning.

:::warning When to Override — and When Not To
Override when you have specific, recent information the agent lacks. Do not override because a deal "feels" more important. If your override is based on a gut feeling rather than a specific fact (an email, a conversation, a public announcement), the algorithm is probably right and your intuition is anchored on something irrelevant. The discipline is knowing the difference.
:::

---

## Generating Competitive Battlecards

Meridian Logistics is your 11:00 AM meeting. The briefing flagged "competitive positioning vs TrackFlow." TrackFlow is NexaFlow's primary competitor in the logistics-tech space — they sell a similar route-optimization platform with a different architecture.

Run the `competitive-intelligence` skill to generate a **battlecard** for TrackFlow:

```
Generate a competitive battlecard for TrackFlow
```

A **competitive battlecard** is a structured one-page reference designed for use during or immediately before a sales call. It contains the competitor's strengths, weaknesses, pricing, common objections, and recommended talking points. The goal is not to memorise it. The goal is to have it open on your second screen during the call.

**Output:**

```
══════════════════════════════════════════════════════════════
          COMPETITIVE BATTLECARD
          TrackFlow — Route Optimization Platform
          Generated: 2026-03-10
══════════════════════════════════════════════════════════════

COMPANY OVERVIEW
─────────────────────────────────────────────────────────────
Founded:          2019
Headquarters:     London, UK
Employees:        ~200 (LinkedIn estimate)
Markets:          UK, Europe, Middle East
Product:          Cloud-based route optimization for fleet
                  management. Focused on mid-mile logistics.
Pricing Model:    Per-vehicle monthly subscription

KEY STRENGTHS
─────────────────────────────────────────────────────────────
1. Established European customer base — 150+ logistics        ← ⚠️
   companies across UK and EU
2. Strong integration with SAP TM and Oracle Transportation
   Management — enterprise buyers prefer this
3. Real-time traffic data integration through TomTom
   partnership (announced Sep 2025)
4. ISO 27001 certified — matters for enterprise procurement

KEY WEAKNESSES
─────────────────────────────────────────────────────────────
1. No support for South Asian markets — routing algorithms     ← ⚠️
   are calibrated for European road networks only
2. Minimum contract: £2,500/month (12-month commitment) —
   prices out smaller fleets
3. Legacy Java monolith architecture — customers report        ← ⚠️
   slow feature releases (average 6-week sprint cycle)
4. No WhatsApp integration for driver communication —          ← ⚠️
   relies on in-app messaging that drivers in Pakistan
   and Gulf markets do not adopt

PRICING COMPARISON
─────────────────────────────────────────────────────────────
                    TrackFlow           NexaFlow
Per vehicle/month:  £25-35              $15-25
Min. commitment:    12 months           3 months
Setup fee:          £5,000              $0
Free tier:          None                Up to 10 vehicles      ← ⚠️

TALKING POINTS FOR MERIDIAN MEETING
─────────────────────────────────────────────────────────────
• Meridian operates UK + Gulf routes. TrackFlow only
  supports European networks. Ask: "How does your current
  routing handle Dubai-to-Abu Dhabi corridors?"
• Meridian's new VP of Operations likely wants quick wins.
  NexaFlow's 3-month commitment vs TrackFlow's 12-month
  lock-in reduces adoption risk.
• If Meridian mentions SAP TM integration as a requirement,
  acknowledge TrackFlow's strength here. Compete on total
  cost and geographic coverage, not ERP integration.

COMMON OBJECTIONS AND RESPONSES
─────────────────────────────────────────────────────────────
Objection: "TrackFlow has more enterprise customers"
Response:  "In Europe, yes. In Pakistan and the Gulf,
           NexaFlow has 40+ fleet deployments with local      ← ⚠️
           support teams. TrackFlow has no presence in
           those markets."

Objection: "TrackFlow integrates with our SAP system"
Response:  "We support SAP via standard APIs. The
           integration takes 2 weeks, not 2 months. Happy
           to show a reference customer running both."

══════════════════════════════════════════════════════════════
```

Professional. Detailed. Actionable. And at least four claims in it need verification before you walk into the Meridian meeting.

---

## Fact-Checking the Battlecard

You learned the three hallucination detection rules in Lesson 1. Now apply them to competitive intelligence, where the stakes are higher. In a prospect research brief, a hallucinated claim wastes your preparation time. In a competitive battlecard, a hallucinated claim can come out of your mouth in front of someone who knows the truth.

### Hallucinated Data in Competitive Context

The agent generated the battlecard from its training data, public web information, and inference. It did not call TrackFlow's sales team. It did not access their product database. It did not read their contracts. Every claim about the competitor's internal operations — pricing tiers, architecture decisions, sprint cycles, customer counts — is either sourced from public information or fabricated from patterns.

Let us walk through the flagged claims (marked ⚠️):

| Claim | Verdict | Reasoning |
|-------|---------|-----------|
| "150+ logistics companies across UK and EU" | **Verify.** Customer count is rarely public for private companies. TrackFlow's website may list case studies or logos, which provides a floor but not a total. If you cannot find a source, the "150+" figure is the agent's estimate. | Search TrackFlow's website for customer logos and case studies. Count them. |
| "No support for South Asian markets — routing algorithms calibrated for European road networks only" | **Plausible but verify.** This is a reasonable inference — most European logistics platforms do not cover South Asian markets — but "calibrated for European road networks only" is a specific technical claim. | Check TrackFlow's documentation for supported regions. If documentation says "Europe and Middle East" without listing Pakistan, the inference strengthens. If it lists "global," the claim is wrong. |
| "Legacy Java monolith architecture — slow feature releases (6-week sprint cycle)" | **Likely hallucinated.** Architecture details and internal sprint cycles are not public. The agent inferred "Java monolith" from job postings and "6-week sprint" from nowhere verifiable. | Search for TrackFlow engineering blog posts or Glassdoor reviews mentioning tech stack. The Java claim may be partially verifiable. The sprint cycle is fabricated. |
| "No WhatsApp integration — relies on in-app messaging" | **Verify.** Feature availability is often documented. This is checkable against TrackFlow's feature list or integration page. | Search TrackFlow's integrations page. If WhatsApp is listed, the entire weakness is wrong. |
| "NexaFlow free tier: Up to 10 vehicles" | **Verify internally.** This is a claim about your own product. The agent may have pulled it from an outdated pricing page. | Confirm with your product team. If the free tier changed since the agent's last data, the comparison table is misleading. |
| "NexaFlow has 40+ fleet deployments" | **Verify internally.** Another claim about your own company. The agent may have sourced this from a press release or estimated from customer logos. | Check your actual customer count. Overstating your own deployments in a meeting is as damaging as understating the competitor's. |

### The Three Danger Zones for Competitive Intelligence

Competitive battlecards have three categories of hallucination risk that do not apply to prospect research:

**Danger zone 1: Fabricated competitor weaknesses.** The agent wants to help you win the deal. It generates weaknesses that sound plausible — "legacy architecture," "slow releases," "no market coverage" — because those are common patterns in its training data. A fabricated weakness is not just wrong. It is a trap. If you say "TrackFlow still runs a Java monolith" and the Meridian CTO responds "Actually, they rebuilt their platform in Go last year — I spoke to their CTO at a conference," your credibility is destroyed.

**Danger zone 2: Invented pricing.** The agent generates pricing tiers that look precise: "PS25-35 per vehicle, 12-month minimum, PS5,000 setup fee." Competitors change pricing constantly. A figure that was accurate 18 months ago may be 30% higher or lower today. Worse, the agent may have generated the pricing from industry averages rather than TrackFlow's actual rates.

**Danger zone 3: Outdated partnerships.** "TomTom partnership announced Sep 2025" — this is the most trustworthy type of claim because it cites a specific date and company. But partnerships end. If TomTom and TrackFlow parted ways in January 2026, citing the partnership in March 2026 is wrong. Verified-at-one-point is not the same as currently-true.

:::warning The Battlecard Rule
Never state a competitor's weakness in a meeting unless you verified it in the last 30 days. Competitive intelligence decays faster than any other data in your pipeline. A 90-day-old battlecard is a liability, not an asset.
:::

---

## Failure Analysis: The Stale Battlecard

Here is a battlecard excerpt for a second competitor — LogiPrime, a route-optimization platform based in Islamabad. The battlecard was generated today, but some of its claims are based on data the agent last verified months ago.

```
COMPETITIVE BATTLECARD — LogiPrime (Islamabad)
══════════════════════════════════════════════════════════════

KEY WEAKNESSES
─────────────────────────────────────────────────────────────
1. Basic tier limited to 25 vehicles — no enterprise       [A]
   plan available above 200 vehicles
2. "LogiPrime's route optimization does not support        [B]
   multi-stop routes with time windows" per customer
   review on G2, August 2025
3. Partnership with Careem for rider logistics ended       [C]
   in 2024 — no replacement logistics partner announced

PRICING
─────────────────────────────────────────────────────────────
Basic:    PKR 8,000/vehicle/month                           [D]
Pro:      PKR 15,000/vehicle/month
Enterprise: Custom pricing (min 200 vehicles)
Last verified: August 2025                                  [D]
```

Three claims. Three different problems. Identify each before reading the analysis.

### Analysis

| Claim | Problem | Why It Matters |
|-------|---------|----------------|
| **[A]** "No enterprise plan above 200 vehicles" | **Fabricated product limitation.** LogiPrime may have launched an enterprise tier since the agent's training data. This is a competitor weakness that sounds specific but has no verifiable source. | If LogiPrime introduced an enterprise plan in December 2025, you are citing a limitation that no longer exists. The prospect may already know this. |
| **[B]** "Does not support multi-stop routes per G2 review, August 2025" | **Outdated but sourced.** This is the trickiest type. The claim was real in August 2025 — a customer wrote a review. But LogiPrime may have shipped the feature since then. A 7-month-old product review is not current intelligence. | The G2 citation makes this claim feel trustworthy. The date makes it unreliable. Product capabilities change. Always check the competitor's current feature page, not historical reviews. |
| **[C]** "Partnership with Careem ended in 2024" | **Unverifiable relationship status.** Partnership endings are rarely announced publicly. The agent may have inferred the end because it found no recent references to the partnership. Absence of evidence is not evidence of absence. | If you say "Their Careem partnership ended" and it did not, the prospect questions your research quality. If you say "We could not confirm whether their Careem partnership is still active," you sound thorough. |
| **[D]** Pricing last verified August 2025 | **Stale pricing.** At least the agent disclosed the verification date. Seven months of pricing changes in a growing market makes these numbers unreliable. | PKR pricing in the Pakistani market can shift significantly with exchange rate movements and competitive pressure. August 2025 pricing may be 10-20% different from March 2026 pricing. |

The pattern: Claim [B] is the most dangerous because it has a source that creates false confidence. The G2 citation is real — but real citations can point to stale facts. This is not hallucination. This is **intelligence decay**. The agent did not fabricate the review. The review exists. The feature limitation it described may no longer exist.

**The verification hierarchy for battlecards** (updated from Lesson 1):

Current product documentation > recent customer reviews (< 90 days) > cited sources with dates > uncited specific claims > inferred patterns

---

## From Intelligence to Outreach

You have the briefing. You have the battlecard. Now connect them to action. This is the **intel-to-outreach connection** — the discipline of translating morning intelligence into afternoon conversations.

### The Three-Question Framework

Before each outreach action today, answer three questions:

**Question 1: Why this prospect today?** The briefing tells you. Meridian has a meeting at 11:00. Gulf Express has a meeting at 2:30. DataForge has an aging proposal. Crescent sent an email you caught outside the CRM. Each prospect has a reason for today — not tomorrow, not next week.

**Question 2: What is the competitive angle?** The battlecard tells you. Meridian is evaluating TrackFlow. Your angle is geographic coverage (South Asian + Gulf routes) and lower commitment (3-month vs 12-month). If Gulf Express is evaluating LogiPrime, your angle is different — enterprise scale and current feature set. Each meeting has a specific competitive context that shapes your opening.

**Question 3: What do I need to verify before the meeting?** The fact-check tells you. For Meridian, verify whether TrackFlow supports Gulf routes before claiming they do not. For any meeting where you plan to cite a competitor's limitation, verify it. Two minutes on the competitor's website saves twenty minutes of backpedaling.

### Putting It Together: NexaFlow's Morning Plan

Here is what a complete morning briefing-to-outreach plan looks like:

| Time | Prospect | Briefing Priority | Competitive Context | Pre-Meeting Action | Verification Needed |
|------|----------|-------------------|--------------------|--------------------|---------------------|
| 7:30-8:00 | Pipeline review | Read daily briefing, override Crescent to #2 | -- | Update CRM with Crescent email | -- |
| 8:00-9:00 | Meridian Logistics | #1 (meeting today) | vs TrackFlow | Generate battlecard, review talking points | Check TrackFlow's supported regions page |
| 9:00-9:30 | Crescent Freight | #2 (overridden) | No competitor | Draft pricing update email | Confirm current NexaFlow pricing with product team |
| 9:30-10:00 | Gulf Express | #3 (meeting today) | vs LogiPrime | Generate battlecard, check feature comparison | Check LogiPrime enterprise tier and current pricing |
| 10:00-10:30 | DataForge Solutions | #4 (proposal follow-up) | None identified | Draft follow-up email referencing proposal | -- |
| 10:30-11:00 | Final prep | Meridian deep dive | TrackFlow battlecard review | Print battlecard, rehearse Gulf route question | -- |

Four hours. Four prospects. Each with a specific action driven by briefing data and competitive intelligence. The remaining 11 accounts in the pipeline stay in nurture — the briefing already decided they do not need attention today. That decision alone saved an hour of manual pipeline review.

---

## Working With a Mock Pipeline

The worked example above used NexaFlow's pipeline. Now run the same workflow on your own. If you do not have a live pipeline, use this mock dataset of 10 opportunities with scores from Lesson 3:

```
Mock Pipeline (10 opportunities)
─────────────────────────────────────────────────────────────
Company              Fit  Timing  Engagement  Total  Deal $
─────────────────────────────────────────────────────────────
AlphaCloud Dubai      36    28       25        89    $120K
BetaTech Lahore       32    30       18        80    $65K
GammaOps London       38    22       28        88    $200K
DeltaFreight Karachi  28    30       22        80    $45K
EpsilonSaaS Riyadh    34    18       30        82    $90K
ZetaLogistics ISB     22    25       15        62    $30K
EtaConsult Dubai      30    12       28        70    $75K
ThetaPharma Lahore    26    20       10        56    $150K
IotaBridge London     35    25       20        80    $110K
KappaRetail Karachi   20    15       12        47    $25K
─────────────────────────────────────────────────────────────
```

### Step 1: Run the Briefing

```
Run my daily sales briefing for the active pipeline
```

Compare the agent's ranking to what the raw scores suggest. AlphaCloud (89) and GammaOps (88) should rank highest on score alone. But if GammaOps has a meeting today, it should rank first. Does the briefing reflect that?

### Step 2: Challenge the Ranking

Look at ThetaPharma Lahore. Score: 56. Deal size: $150,000. The briefing probably ranked it 8th or 9th. But $150K is the second-largest deal in the pipeline. Should deal size override a low score? The answer depends on your sales strategy — some teams pursue every large deal regardless of fit; others stay disciplined to ICP. The briefing gives you the data. You make the call.

### Step 3: Generate Battlecards

Pick the top 2 competitors your mock prospects are evaluating. Run:

```
Generate a competitive battlecard for [Competitor 1]
Generate a competitive battlecard for [Competitor 2]
```

For each battlecard:

1. **Circle three claims you would verify before a meeting.** Apply the three hallucination rules from Lesson 1 and the three competitive danger zones from this lesson.
2. **Identify one claim that looks sourced but might be stale.** This is the hardest category — cited facts that may have expired.
3. **Write one talking point you would use and one you would not.** The talking point you would not use is the one that depends on an unverified competitor weakness.

### Step 4: Build Tomorrow's Outreach Plan

Using the briefing priorities and battlecard intelligence, create a morning plan following the three-question framework:

- Why this prospect today?
- What is the competitive angle?
- What do I need to verify before the meeting?

If you can fill in all three columns for your top 4 prospects, you have the core workflow. Repeat it every morning. The briefing takes 30 seconds to generate. The evaluation takes 5 minutes. The planning takes 10. Fifteen minutes total replaces the hour of manual pipeline review that most reps skip because they do not have time — and then walk into meetings unprepared.

---

## Try With AI

Use these prompts in Claude or your preferred AI assistant to practise the skills from this lesson.

### Prompt 1: Evaluate a Briefing Ranking

```
I have a pipeline of 10 sales opportunities. Here are the details:

[Paste the mock pipeline table above, or your own pipeline data]

Generate a daily briefing that ranks these by priority.
Include the composite score breakdown (lead score weight,
meeting proximity, deal size) for the top 5.

After generating, I want to evaluate your ranking:
- Which opportunity did you rank #1 and why?
- What information would change the ranking if I had it?
```

**What you are learning:** Understanding the algorithm behind the prioritisation. The AI explains its ranking logic, which helps you identify where override opportunities exist. Pay attention to what the AI says would change the ranking — that is the list of information types you should check every morning before accepting the briefing at face value.

### Prompt 2: Fact-Check a Battlecard

```
Generate a competitive battlecard for [your top competitor's name].
Include: company overview, 4 key strengths, 4 key weaknesses,
pricing comparison with my product, and 3 talking points for
an upcoming sales meeting.

After generating, I will fact-check your output. For each claim
in the battlecard, tell me:
1. What is your source (public data, inference, or unknown)?
2. When was this information last verifiable?
3. What is the risk if this claim is wrong in a live meeting?
```

**What you are learning:** Forcing the AI to disclose its confidence level per claim. Most agents present all claims with equal confidence. When you ask for source and recency, the agent differentiates between "I found this on their website" and "I inferred this from industry patterns." That differentiation is the foundation of competitive intelligence hygiene. Claims with sources and recent dates are usable. Claims based on inference need verification before they enter a meeting.
