---
sidebar_position: 2
title: "Prospect Intelligence and ICP Calibration"
description: "Configure the 8-section Ideal Customer Profile using the persona-icp skill, calibrate ICP against known prospects, introduce progressive connectors, and diagnose ICP miscalibration through failure analysis"
keywords:
  [
    "ICP",
    "ideal customer profile",
    "persona-icp",
    "prospect intelligence",
    "firmographic criteria",
    "technographic signals",
    "timing signals",
    "progressive connectors",
    "CRM connector",
    "sales-marketing.local.md",
    "research-prospect",
    "prospect scoring",
  ]
chapter: 23
lesson: 2
duration_minutes: 20

# HIDDEN SKILLS METADATA
skills:
  - name: "Configure a Complete ICP Using the persona-icp Skill"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can configure all 8 ICP sections (firmographic, technographic, timing, engagement, persona, budget, negative signals, data sources) and explain how each constrains agent output"

  - name: "Calibrate ICP Against Known Prospects"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can run /research-prospect on prospects they know well, compare agent classifications to their own judgment, and adjust ICP sections to improve alignment"

  - name: "Understand Progressive Connector Enhancement"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can explain how adding connectors (CRM, enrichment) progressively improves research output without breaking standalone functionality"

learning_objectives:
  - objective: "Configure all 8 sections of the Ideal Customer Profile using the persona-icp skill and explain how each section constrains the agent's research focus"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces a complete ICP configuration and can explain what each section contributes to research quality"

  - objective: "Calibrate the ICP by running /research-prospect on known prospects and iterating until agent classifications match domain judgment"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Student runs research on 3 known prospects (ideal, borderline, wrong-fit) and adjusts ICP until agent output aligns with their assessment"

  - objective: "Describe how progressive connectors enhance research output and demonstrate graceful degradation when connectors are removed"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student can show /research-prospect output with zero, one, and two connectors and explain what each adds"

cognitive_load:
  new_concepts: 6
  concepts_list:
    - "ICP as a calibration instrument (not a static form)"
    - "The 8 ICP sections and their functions"
    - "Fit vs Timing distinction in prospect classification"
    - "Progressive connectors (zero → CRM → enrichment)"
    - "Garbage-in-garbage-out in ICP configuration"
    - "ICP iteration loop (configure → run → compare → adjust)"
  assessment: "6 concepts at B1 level. The key conceptual shift is ICP as calibration instrument rather than static form — this reframes the entire lesson."

differentiation:
  extension_for_advanced: "Configure ICPs for two different business lines within the same company. Run /research-prospect on the same prospect with each ICP. How do the research briefs differ? What does this tell you about ICP specificity vs generality?"
  remedial_for_struggling: "Focus on configuring 3 ICP sections (firmographic, timing, persona) and running /research-prospect on 1 known ideal prospect. If the agent classifies them as high-fit, your ICP foundation is working."
---

# Prospect Intelligence and ICP Calibration

In Lesson 1, you ran `/research-prospect` and received a research brief. It was broad, generic, and full of information that did not help you decide whether to invest sales time. The problem was not the command. The problem was the input. The agent researched everything because you told it nothing about who matters to your business. This lesson fixes that.

The **Ideal Customer Profile** is the single most important configuration in the entire sales plugin. Most teams treat the ICP as a form — fill it out once, file it in a shared drive, forget it exists. That approach fails because an ICP is not a document. It is a **calibration instrument**. You adjust it until the agent's research output matches your experienced sales judgment about who is worth pursuing and who is not. Think of it like tuning a radio: the signal exists, but without calibration you get static.

By the end of this lesson, you will have configured all 8 sections of the ICP using the `persona-icp` skill, run `/research-prospect` against prospects you already know, and iterated until the agent's classifications match your own. You will also see how **progressive connectors** enhance the research output without breaking standalone functionality — planting the seed for the full connector architecture in Lesson 10.

## The 8 Sections of the ICP

The `persona-icp` skill structures your ICP into 8 sections. Each section constrains the agent's research in a different way. Skip a section and the agent fills the gap with guesses. Configure it well and the agent focuses its research exactly where your sales judgment says to look.

Open your `sales-marketing.local.md` file — the local configuration you set up in Lesson 1 — and add the ICP configuration block. We will walk through each section using NexaFlow Technologies in Karachi as the worked example.

### Section 1: Firmographic Criteria

**Firmographic criteria** define the structural characteristics of your target companies. These are the broadest filters — they eliminate companies that could never be customers regardless of timing or interest.

```yaml
icp:
  firmographic:
    industries:
      - "SaaS / Cloud Software"
      - "B2B Technology Services"
      - "Digital Transformation Consulting"
    company_size:
      employees_min: 50
      employees_max: 500
    geography:
      primary: ["Pakistan", "UAE", "Saudi Arabia"]
      secondary: ["UK", "Singapore"]
    revenue_range:
      min_usd: 500000
      max_usd: 50000000
    company_stage:
      - "Series A+"
      - "Established SME"
```

NexaFlow sells AI-powered workflow automation to mid-market B2B companies across South Asia and the Gulf. The firmographic section tells the agent: do not waste research time on consumer companies, solo consultancies, or enterprises with 10,000 employees. Those are outside the strike zone.

**What this constrains:** When the agent runs `/research-prospect`, it checks the prospect's industry, size, geography, and revenue against these criteria. A company in retail with 15 employees in Lagos scores low on firmographic fit regardless of every other signal.

### Section 2: Technographic Signals

**Technographic signals** describe the technology footprint that indicates a prospect might need your product. The agent searches for these signals in job postings, press releases, GitHub activity, and technology review sites.

```yaml
  technographic:
    positive_signals:
      - "Uses Salesforce, HubSpot, or Pipedrive (CRM already in place)"
      - "Active GitHub organisation (engineering team builds internally)"
      - "Job postings mention 'AI', 'automation', or 'workflow'"
    negative_signals:
      - "Fully custom-built internal tooling (not buying SaaS)"
      - "No public engineering presence (no technical buyer)"
    stack_preferences:
      - "Python or JavaScript tech stack"
      - "Cloud-hosted (AWS, GCP, Azure)"
```

A prospect whose job postings mention "workflow automation engineer" is signalling a problem that NexaFlow solves. A prospect with zero public engineering presence likely has no technical buyer to champion the purchase. The technographic section helps the agent separate companies that have the pain from companies that do not.

### Section 3: Timing Signals

**Timing signals** are the most underused section in most ICPs — and the highest-leverage one. A prospect can be a perfect fit on every dimension and still be unreachable if the timing is wrong. Timing signals tell the agent what events make a prospect reachable right now.

```yaml
  timing:
    high_priority:
      - "Funding round closed in last 90 days"
      - "New CTO, VP Engineering, or Head of Operations appointed"
      - "Expansion into new geography announced"
      - "Public statement about 'scaling operations' or 'operational efficiency'"
    moderate_priority:
      - "Hiring surge (10+ roles posted in 30 days)"
      - "Product launch within last 60 days"
    low_priority:
      - "Conference attendance or speaking engagement"
      - "Partnership or integration announcement"
```

Timing signals answer a question that firmographic and technographic criteria cannot: **why now?** A company that raised a Series B last month has budget, urgency, and a mandate to scale. The same company six months later may have already allocated that budget. The agent weights timing signals heavily because they decay — a funding round from 18 months ago carries far less signal than one from last week.

### Section 4: Engagement Signals

**Engagement signals** tell the agent what prospect behaviors indicate active interest. These are signals from your own systems — website visits, content downloads, event attendance — rather than public information.

```yaml
  engagement:
    high_intent:
      - "Visited pricing page (any source)"
      - "Downloaded ROI calculator or integration guide"
      - "Attended product demo or webinar"
    moderate_intent:
      - "Opened 3+ marketing emails in 30 days"
      - "Visited blog posts on workflow automation"
    low_intent:
      - "Subscribed to newsletter"
      - "Followed company on LinkedIn"
```

Without a CRM connector (which we introduce later in this lesson), the agent cannot access engagement signals directly. It will skip this section and rely on the other seven. When you add the CRM connector, this section activates and the research briefs gain a new dimension.

### Section 5: Persona Profiles

**Persona profiles** describe the people within a target company who make or influence the buying decision. The agent uses these profiles to identify the right contacts and tailor the research brief to their priorities.

```yaml
  personas:
    primary_buyer:
      titles: ["CTO", "VP Engineering", "Head of Operations"]
      motivations:
        - "Reduce manual workflow overhead"
        - "Ship faster without growing headcount proportionally"
      fears:
        - "Integration complexity with existing systems"
        - "Team resistance to AI-driven tools"
    economic_buyer:
      titles: ["CEO", "CFO", "COO"]
      motivations:
        - "Revenue per employee improvement"
        - "Operational cost reduction"
      fears:
        - "Unproven ROI"
        - "Vendor lock-in"
    champion:
      titles: ["Engineering Manager", "DevOps Lead", "Product Manager"]
      motivations:
        - "Personal productivity gain"
        - "Reducing toil on the team"
```

This section is where domain expertise matters most. You know your buyers. You know what keeps the CTO up at night versus what the CFO cares about. The agent does not know this — you teach it through the persona profiles. When the agent generates a research brief, it maps the prospect's leadership team against these personas and flags which contacts match which roles.

### Section 6: Budget Parameters

**Budget parameters** tell the agent what deal sizes are realistic for your product. This prevents the agent from classifying a $5,000-budget startup as a high-fit prospect when your minimum contract is $50,000.

```yaml
  budget:
    currency: "USD"
    typical_deal_range:
      min: 25000
      max: 250000
    fiscal_year_end: "December"
    budget_cycle_note: "Most prospects allocate Q1 budgets in Nov-Dec"
```

The fiscal year timing matters. A prospect whose fiscal year ends in March behaves differently from one ending in December. Budget conversations in October mean different things depending on the fiscal calendar. The agent uses this context when assessing timing signals.

### Section 7: Negative Signals

**Negative signals** are disqualifiers — characteristics that mean a prospect should not be pursued regardless of how well they score on other dimensions.

```yaml
  negative_signals:
    hard_disqualifiers:
      - "Government or public sector (procurement cycle incompatible)"
      - "Companies with active litigation against vendors in our space"
      - "Already using a direct competitor (switching cost too high)"
    soft_disqualifiers:
      - "Company culture strongly anti-AI (public statements)"
      - "No budget authority below C-suite (long sales cycle)"
```

Negative signals save more time than positive signals. A single hard disqualifier should drop a prospect from the pipeline regardless of every other score. The agent applies negative signals as a final check after scoring all other dimensions — a prospect that scores 95 on everything but triggers a hard disqualifier gets flagged as "Disqualified" with the reason.

### Section 8: Data Sources

**Data sources** tell the agent where to look for each type of signal. Without this section, the agent searches broadly. With it, the agent searches efficiently.

```yaml
  data_sources:
    firmographic: ["LinkedIn Company Page", "Crunchbase", "local registrar"]
    technographic: ["StackShare", "GitHub", "job boards (Rozee.pk, LinkedIn Jobs)"]
    timing: ["Crunchbase funding alerts", "Google News", "LinkedIn announcements"]
    engagement: ["HubSpot (if CRM connector active)", "Google Analytics (if connected)"]
    persona: ["LinkedIn Sales Navigator", "company About page", "conference speaker lists"]
```

For NexaFlow operating in Pakistan and the Gulf, the data sources include regional platforms like Rozee.pk for job postings — a source that a generic ICP would miss entirely. The data sources section is how you encode local market knowledge into the agent's research protocol.

## Running the Calibration: NexaFlow Researches Meridian Logistics

With all 8 sections configured, run `/research-prospect` against a company you can evaluate. We will use Meridian Logistics, a London-based freight and logistics company that recently raised a Series B.

```
/research-prospect Meridian Logistics London
```

The agent returns a research brief. Here is the annotated output:

```
PROSPECT RESEARCH BRIEF — Meridian Logistics, London
=====================================================

FIRMOGRAPHIC FIT: LOW (2/5)
  Industry: Freight & Logistics — NOT in ICP target industries
  Employees: ~320 — Within range (50-500) ✓
  Geography: London, UK — Secondary geography ✓
  Revenue: Est. $35M — Within range ✓
  Stage: Series B — Matches "Series A+" ✓

  Assessment: 4 of 5 firmographic criteria met, but
  INDUSTRY MISMATCH is a significant gap. Logistics is
  not SaaS, B2B Technology, or Digital Transformation.

TECHNOGRAPHIC FIT: MODERATE (3/5)
  Positive: Job postings mention "automation" and "Python"
  Positive: Active GitHub organisation (15 contributors)
  Negative: No CRM system detected in tech stack
  Stack: Python + AWS ✓

TIMING FIT: HIGH (5/5)
  HIGH: Series B closed 6 weeks ago ($28M)
  HIGH: New VP of Operations appointed 3 weeks ago
  MODERATE: 12 engineering roles posted in last 30 days

ENGAGEMENT: [NO DATA — CRM connector not active]

PERSONA MATCH:
  VP Operations (new hire) → Maps to Primary Buyer
  CEO (founder) → Maps to Economic Buyer
  No engineering manager identified on LinkedIn → Champion gap

BUDGET ASSESSMENT: LIKELY QUALIFIED
  Series B funding suggests budget available
  No public pricing complaints or vendor cost concerns

NEGATIVE SIGNALS: NONE TRIGGERED

OVERALL CLASSIFICATION:
  Fit: LOW-MODERATE (industry mismatch drags score)
  Timing: HIGH (recent funding + new leadership)
  Recommendation: WORTH MONITORING — timing is strong but
  industry fit is weak. If Meridian's automation needs
  overlap with NexaFlow's product, the timing makes this
  window worth exploring. If not, deprioritise.
```

Read this brief carefully. The agent classified Meridian as low firmographic fit but high timing. Is that correct? Think about what you know:

- Meridian is a logistics company, not a SaaS company. The ICP says SaaS/B2B Tech/Digital Transformation. **Industry mismatch is real.**
- But Meridian just raised $28M and hired a VP of Operations. They are actively building automation capabilities. **The timing signal is strong.**
- The agent's recommendation — "worth monitoring" — reflects both dimensions accurately.

This is the key distinction: **Fit** tells you whether the company matches your target profile. **Timing** tells you whether now is the right moment. A company can have low fit and high timing (Meridian) or high fit and low timing (a perfect-profile company in a budget freeze). Your job is deciding what the combination means for your pipeline. The agent surfaces the data. You make the call.

## Progressive Connectors

The Meridian research brief above was generated with zero connectors — the agent used only publicly available web intelligence. The `persona-icp` skill works standalone. But the output improves when you add connectors.

### Zero Connectors: Web Intelligence Only

With no connectors, `/research-prospect` pulls from:
- Company websites and LinkedIn
- Job boards and press releases
- Crunchbase and public funding data
- News articles and conference listings

The engagement section shows `[NO DATA]` because the agent has no access to your internal systems. The firmographic data comes from public estimates, which may be inaccurate.

### Adding the CRM Connector

Add the HubSpot connector to your `sales-marketing.local.md`:

```yaml
connectors:
  crm:
    platform: "hubspot"
    sync: "read-only"
    fields: ["deal_stage", "last_activity", "contact_history", "lead_source"]
```

Now run the same research:

```
/research-prospect Meridian Logistics London
```

The output gains new sections:

```
ENGAGEMENT: MODERATE (3/5)
  CRM Record: Contact created 4 months ago
  Last Activity: Downloaded "Automation ROI Guide" 2 weeks ago
  Deal Stage: Marketing Qualified Lead (MQL)
  Lead Source: Organic search → pricing page → guide download

  Assessment: Active engagement. The pricing page visit
  followed by guide download suggests evaluation phase.
```

The CRM connector transforms the engagement section from `[NO DATA]` to actionable intelligence. You now know Meridian has been in your system for four months and recently downloaded a buying-intent asset. The timing signal (funding + new VP) combined with the engagement signal (pricing page + download) tells a different story than timing alone.

### Adding the Enrichment Connector

Add an enrichment connector:

```yaml
connectors:
  enrichment:
    platform: "clearbit"
    fields: ["verified_employee_count", "tech_stack", "revenue_estimate", "sub_industry"]
```

Run the research again:

```
/research-prospect Meridian Logistics London
```

The firmographic section now shows verified data instead of estimates:

```
FIRMOGRAPHIC FIT: LOW-MODERATE (2.5/5)
  Industry: Freight & Logistics (sub-industry: "Supply Chain Technology")
  — Sub-industry "Supply Chain Technology" is closer to ICP than
    parent industry "Logistics" suggests
  Employees: 287 (verified) — Within range ✓
  Revenue: $31.2M (verified) — Within range ✓
```

The enrichment connector reveals that Meridian's sub-industry is "Supply Chain Technology" — not pure logistics. This changes the firmographic assessment. A logistics company is outside the ICP. A supply chain technology company is adjacent to it. The overall fit score nudges from LOW to LOW-MODERATE.

### The Connector Principle

Each connector makes the output richer. Remove them and the output degrades gracefully but still works. The agent never requires a connector — it adjusts its research scope to whatever data sources are available.

| Connectors Active | Engagement Data | Firmographic Accuracy | Research Depth |
| --- | --- | --- | --- |
| Zero | None | Public estimates | Web intelligence only |
| CRM only | Full history | Public estimates | Web + CRM signals |
| CRM + Enrichment | Full history | Verified data | Web + CRM + enriched firmographics |

This architecture matters because not every team starts with CRM and enrichment tools. A founder using a spreadsheet as their CRM can still run `/research-prospect` and get useful output. As they add tools, the output improves. No migration, no reconfiguration — each connector plugs in and the agent adapts.

## Diagnosing ICP Miscalibration

The ICP is only useful if it produces accurate classifications. Here are three research briefs from NexaFlow's pipeline. One is correctly classified. Two contain ICP miscalibrations. Your job is to identify which ICP section caused each failure.

### Brief 1: DataForge Solutions, Dubai

```
FIRMOGRAPHIC FIT: HIGH (5/5)
TECHNOGRAPHIC FIT: HIGH (4/5)
TIMING FIT: HIGH (5/5)
OVERALL: HIGH FIT — PURSUE

  DataForge is a B2B SaaS company (180 employees, Dubai)
  that sells data pipeline tools. Series A+, $12M revenue.
  New CTO hired 4 weeks ago. Job postings mention "AI"
  and "workflow automation." Python + AWS stack.
```

**Diagnosis:** Correct classification. DataForge matches the ICP on every dimension. Industry, size, geography, technographic signals, and timing all align. The agent's recommendation to pursue matches experienced judgment. **No ICP adjustment needed.**

### Brief 2: Pinnacle Analytics, Lahore

```
FIRMOGRAPHIC FIT: HIGH (4/5)
TECHNOGRAPHIC FIT: MODERATE (3/5)
TIMING FIT: LOW (1/5)
BUDGET: DISQUALIFIED — below $25,000 minimum
OVERALL: LOW FIT — DEPRIORITISE

  Pinnacle is a 12-person data analytics startup in Lahore.
  Seed-stage, estimated revenue $80K. The founder expressed
  interest at a conference last month.
```

**Diagnosis:** The agent classified Pinnacle as high firmographic fit — but a 12-person seed-stage startup with $80K revenue should have been caught by the firmographic filters. The `company_size` minimum is 50 employees. The `revenue_range` minimum is $500,000. Pinnacle fails both.

**The problem is not in the ICP.** The ICP criteria are correct. The issue is that the agent's data was wrong — it may have pulled an inflated employee count from LinkedIn (common for startups that count advisors and contractors). This is a **Hallucinated Data** error from Lesson 1's taxonomy. The fix is not to change the ICP but to verify the agent's data sources for small companies.

However, the budget section caught the error anyway — it flagged Pinnacle as below the $25,000 deal minimum. The budget section acted as a safety net. Multiple overlapping filters catch what a single filter misses.

### Brief 3: Crescent Manufacturing, Rawalpindi

```
FIRMOGRAPHIC FIT: N/A — "Manufacturing" not in ICP industries
TECHNOGRAPHIC FIT: N/A — No signals found
TIMING FIT: N/A — No timing data available
OVERALL: UNSCORED — Insufficient ICP coverage

  Crescent Manufacturing is a 200-person manufacturer of
  industrial valves. No public tech stack. No recent
  funding or leadership changes. No engagement data.
```

**Diagnosis:** The agent returned `UNSCORED` because the ICP has no signals for manufacturing companies. It is not a negative classification — it is an admission that the ICP cannot evaluate this prospect. The agent does not know whether Crescent is a good or bad prospect. It knows it has no framework for deciding.

This is **garbage-in-garbage-out** at the ICP level. If NexaFlow wants to evaluate manufacturing prospects, it needs to add manufacturing-relevant signals:

- **Firmographic:** Add "Industrial Manufacturing" to the industries list
- **Technographic:** Add signals like "ERP system modernisation" or "Industry 4.0 initiatives"
- **Timing:** Add signals like "Factory expansion announced" or "New plant commissioning"

The ICP does not need to cover every industry. But if you ask the agent to research a company in an industry the ICP does not cover, expect `UNSCORED` — not a useful classification.

## Calibrating With Known Prospects

The most reliable way to tune your ICP is to test it against prospects whose outcome you already know. Pick three companies from your pipeline:

### Step 1: Select Your Test Prospects

Choose:
- **One ideal customer you have already closed.** This is your positive control. The agent should classify them as HIGH FIT. If it does not, your ICP is missing signals that describe your best customers.
- **One borderline prospect you are unsure about.** This is your calibration target. You do not know what the agent should say — you want to see whether its analysis reveals something you missed.
- **One wrong-fit company you would never pursue.** This is your negative control. The agent should classify them as LOW FIT or trigger a negative signal. If it classifies them as high fit, your ICP is too loose.

### Step 2: Run the Research

```
/research-prospect [Company Name] [City]
```

Run it for all three. Read each brief carefully.

### Step 3: Compare and Adjust

| Prospect | Your Judgment | Agent Classification | Match? | Action |
| --- | --- | --- | --- | --- |
| Closed customer | Ideal fit | Should be HIGH | If LOW → ICP too strict (loosen criteria) | Widen the section that blocked them |
| Borderline | Unsure | Read the brief | Does the analysis clarify your uncertainty? | Note which signals were decisive |
| Wrong-fit | Bad fit | Should be LOW | If HIGH → ICP too loose (tighten criteria) | Add the missing negative signal |

### Step 4: Iterate

If the agent's classifications did not match your judgment, change one ICP section at a time. Run `/research-prospect` again after each change. Watch how the output shifts.

Common adjustments:
- **Agent scored your best customer LOW:** Your firmographic criteria may be too narrow. Did the customer's actual industry fall outside your listed industries? Add it.
- **Agent scored a wrong-fit company HIGH:** Your negative signals section is too thin. What disqualified this company in your mind? Add that as a hard disqualifier.
- **Agent missed a timing signal you know about:** Your timing section may lack the event type. Did a competitor just lose this customer? Add "Competitor contract expiration" as a high-priority timing signal.

The ICP is never finished. It improves with every calibration run. The first version is your best guess. The tenth version reflects validated sales judgment.

## ICP Configuration Summary

| Section | What It Constrains | What Happens If Missing |
| --- | --- | --- |
| Firmographic | Company type, size, geography | Agent researches every company equally |
| Technographic | Technology fit signals | Agent cannot assess product relevance |
| Timing | Why-now triggers | Agent scores fit without urgency context |
| Engagement | Prospect behavior signals | Requires CRM connector; skipped if absent |
| Persona | Decision-maker profiles | Agent lists contacts without role mapping |
| Budget | Deal size parameters | Agent cannot flag budget mismatches |
| Negative | Hard disqualifiers | Agent never eliminates obvious bad fits |
| Data Sources | Where to research | Agent searches broadly instead of efficiently |

## Try With AI

Use these prompts in Claude or your preferred AI assistant to explore this lesson's concepts.

### Prompt 1: Build Your ICP

```
I want to configure an Ideal Customer Profile for my business.

My company: [describe what you sell, to whom, typical deal size]
My market: [list your primary geographies and industries]
My best customer: [describe your best existing customer — industry,
  size, what made them ideal]

Help me configure all 8 ICP sections:
1. Firmographic criteria
2. Technographic signals (positive and negative)
3. Timing signals (high, moderate, low priority)
4. Engagement signals (high, moderate, low intent)
5. Persona profiles (primary buyer, economic buyer, champion)
6. Budget parameters
7. Negative signals (hard and soft disqualifiers)
8. Data sources for each signal type

Format the output as YAML I can paste into my
sales-marketing.local.md file.
```

**What you are learning:** Translating your sales intuition into structured configuration. The hardest part of ICP configuration is not the YAML syntax — it is articulating what you already know about your buyers in a format precise enough for an agent to act on. The AI helps you systematize tacit knowledge. But pay attention to what it generates: if a section feels wrong, that is your domain expertise catching something the AI missed. Correct it.

### Prompt 2: Diagnose a Miscalibration

```
Here is my ICP configuration: [paste your YAML]

I ran /research-prospect on a company I know well:
[Company name, what they do, why you consider them a
good/bad/borderline prospect]

The agent classified them as [HIGH/LOW/MODERATE] fit.
I expected [different classification].

Diagnose: which ICP section most likely caused the
mismatch? What specific change would fix it?
Give me the updated YAML for that section only.
```

**What you are learning:** ICP debugging — the same skill you practiced in the failure analysis section above, but applied to your own configuration. The agent suggests a diagnosis, but you evaluate whether the suggestion matches your domain knowledge. If the agent says "widen your firmographic criteria" but you know the criteria are correct, the problem is elsewhere. This back-and-forth between your judgment and the agent's analysis is how calibration works.

---

Continue to Lesson 3, where you will build the three-dimension lead scoring model and run `/score-lead` to rank your pipeline by fit, timing, and engagement.
