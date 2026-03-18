---
slug: /Business-Domain-Agent-Workflows/supply-chain-procurement/supplier-risk-five-dimensions
sidebar_position: 7
title: "Supplier Risk — Five Dimensions"
description: "Monitor strategic suppliers across five risk dimensions — financial, operational, compliance, geopolitical, and Tier 2 — using the /supplier-risk skill and vendor-health-monitor agent to detect disruptions before they reach your production line"
keywords:
  [
    "supplier risk",
    "vendor risk",
    "five risk dimensions",
    "financial risk",
    "operational risk",
    "geopolitical risk",
    "Tier 2 risk",
    "sub-supplier",
    "supply chain resilience",
    "supplier risk brief",
    "vendor health monitor",
    "supply chain plugin",
    "supplier-risk skill",
  ]
chapter: 35
lesson: 7
duration_minutes: 45

# HIDDEN SKILLS METADATA
skills:
  - name: "Assess Supplier Risk Across Five Dimensions Using the /supplier-risk Skill"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can invoke /supplier-risk for a strategic vendor, interpret the risk brief across all five dimensions, and identify the highest-priority action from the recommended actions section"

  - name: "Identify and Manage Tier 2 Supplier Cascade Risk"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can explain why a Tier 2 failure is more dangerous than a Tier 1 failure in many scenarios, and can design a Tier 2 mapping requirement for a strategic vendor"

learning_objectives:
  - objective: "Explain the five risk dimensions that determine overall supplier risk rating and why each requires different data sources"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student can describe each dimension (financial, operational, compliance, geopolitical, Tier 2) and name at least one data source for each"

  - objective: "Invoke /supplier-risk to generate a risk brief for a strategic vendor and interpret the findings"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student runs /supplier-risk, reads the output, and identifies the single most urgent recommended action"

  - objective: "Explain how a Tier 2 failure cascades through a Tier 1 supplier to cause a supply disruption"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Student traces the KIFTL/KSA cascade example and maps an equivalent scenario from their own vendor base"

  - objective: "Configure the vendor-health-monitor agent parameters for a strategic supplier"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student defines monitoring sources, alert thresholds, and escalation path for at least one strategic vendor"

cognitive_load:
  new_concepts: 6
  concepts_list:
    - "Five risk dimensions — financial, operational, compliance, geopolitical, Tier 2"
    - "Risk rating change rules — escalation when any dimension hits red, elevation when two yellows"
    - "Tier 2 supplier mapping — the most dangerous gap in most procurement risk programmes"
    - "Overall risk rating — composite view derived from five dimension ratings"
    - "Vendor Health Monitor agent — continuous monitoring, not periodic review"
    - "Weekly executive brief — one-page CPO summary of all strategic vendor risk"
  assessment: "6 concepts at B1-B2 level — within limit. The five dimensions are the core scaffold; Tier 2 and the agent are extensions. The worked KIFTL example ties all concepts together before the exercise asks students to apply independently."

differentiation:
  extension_for_advanced: "Design a Tier 2 mapping programme for an organisation with 20 strategic suppliers. How would you prioritise which Tier 1 suppliers get full Tier 2 mapping first? What data would you request from each Tier 1 vendor? How would you handle a Tier 1 supplier who refuses to share Tier 2 information?"
  remedial_for_struggling: "Focus on two things: the five dimension names and what makes each turn red. If you can look at a supplier's situation and say 'this dimension is amber because...' for each of the five, you have the core monitoring skill. The Tier 2 concept can come later — it is an extension of the financial and operational dimensions."

teaching_guide:
  key_points:
    - "Risk rating escalates if ANY single dimension hits red — you do not average across dimensions"
    - "Tier 2 is the most dangerous gap because it is invisible unless you ask for it specifically"
    - "Absence of data does not mean low risk — unknown Tier 2 = UNASSESSED, not LOW"
    - "The vendor-health-monitor agent automates monitoring; it does not replace human judgment on escalations"
  misconceptions:
    - "Low overall risk means the supplier is fine. Correction: an overall MEDIUM rating can hide a single RED dimension. Always read the dimension breakdown, not just the headline."
    - "Tier 2 risk is the supplier's problem. Correction: when a Tier 2 failure halts your Tier 1 supplier's production and your production line stops, it is absolutely your problem — regardless of where in the chain it originated."
    - "Monthly monitoring is sufficient. Correction: financial and operational signals can move fast. A credit rating downgrade or an OTD collapse can happen between monthly checks. Weekly news scans for strategic vendors are the minimum."
  discussion_prompts:
    - "Think of a supply disruption your organisation has experienced. Was the root cause visible in advance? Which of the five risk dimensions would have signalled it — if someone had been watching?"
    - "Your most strategic vendor refuses to share information about their own suppliers (Tier 2). How do you manage Tier 2 risk without their co-operation?"
  teaching_tips:
    - "Use the KIFTL/KSA example as the spine of the lesson — the Tier 2 cascade is the most memorable concept and the most likely to generate 'that has happened to us' reactions."
    - "Emphasise that UNASSESSED is a risk rating, not an absence of a rating. Many teams treat unknown = fine. This is how supply chain crises happen."
---

# Supplier Risk — Five Dimensions

You receive an email on a Tuesday morning. Your production manager has flagged that Karachi Industrial Fasteners Ltd — KIFTL, your sole-source supplier for M8 and M10 stainless steel fasteners — has missed its fourth delivery in eight weeks. The OTD rate is now 81%. Your stock covers twelve more days of production. No backup supplier is qualified.

A procurement colleague who reads the Pakistan trade press notices something that did not make it into any risk report: Karachi Steel & Alloys, KIFTL's primary raw material supplier, announced restructuring proceedings three weeks ago. KIFTL has been struggling to secure enough steel to maintain their production schedule. This information was publicly available. Nobody in your organisation was looking for it.

This lesson teaches the five-dimension risk framework that catches these signals — financial, operational, compliance, geopolitical, and Tier 2 — and the `/supplier-risk` skill that automates continuous monitoring across all of them.

## The Five Risk Dimensions

Supplier risk is not one thing. A vendor can be financially sound but operationally deteriorating. A vendor can be operationally excellent but operating in a country whose trade environment is changing. A vendor can have clean financials and good delivery performance while their sub-supplier — invisible to you — is in financial distress. Comprehensive risk monitoring requires five separate dimensions.

### Dimension 1: Financial Risk

Financial risk answers the question: could this supplier stop operating?

For publicly listed companies, the signals are quarterly earnings trends, revenue direction, debt ratios, and analyst commentary. For private companies — which represent the majority of most supplier bases — the signals are statutory filings (Companies House in the UK, SECP in Pakistan, equivalent registries in other jurisdictions), credit rating changes from agencies like Creditsafe or Dun & Bradstreet, payment behaviour (are they paying their own suppliers on time?), and news of redundancies or restructuring.

| Risk Level | Signal                                                                                       |
| ---------- | -------------------------------------------------------------------------------------------- |
| 🔴 HIGH    | Restructuring / CVA / administration; credit rating CCC or below; statutory accounts overdue |
| 🟡 MEDIUM  | Revenue decline >15% year-on-year; EBIT margin below 3%; rating downgraded one notch         |
| 🟢 LOW     | Stable financials; positive trend; adequate credit rating                                    |

**The critical threshold**: late filing of statutory accounts is itself a financial distress signal. Companies in difficulty frequently delay their accounts to avoid disclosing deteriorating numbers. If a strategic supplier is overdue on their accounts, escalate immediately.

### Dimension 2: Operational Risk

Operational risk answers the question: is this supplier delivering as contracted right now?

Unlike financial risk — which requires external data — operational risk data lives in your own ERP system, updated continuously with every delivery received and every quality check completed.

Key operational indicators:

- **OTD rate**: 13-week rolling average and trend direction (flat at 92% is different from declining from 97% to 87% in six weeks)
- **Quality rejection rate**: 13-week rolling average — and pattern analysis (same day of week, same product line, increasing partial deliveries)
- **Lead time variance**: increasing variance indicates capacity strain even when OTD is still above threshold

| Risk Level | Signal                                                                         |
| ---------- | ------------------------------------------------------------------------------ |
| 🔴 HIGH    | OTD below your configured critical threshold; quality above critical threshold |
| 🟡 MEDIUM  | Declining trend even if still above threshold; increasing partial deliveries   |
| 🟢 LOW     | Stable; above threshold; no adverse trend                                      |

For KIFTL, the operational risk picture is clear: OTD at 81% and declining, four late deliveries in eight weeks, and a pattern where most late deliveries occur on Monday despatch (suggesting capacity strain on production scheduling). This is not an isolated miss — it is a systemic pattern.

### Dimension 3: Regulatory and Compliance Risk

Compliance risk answers the question: is this supplier legally permitted to continue operating and supplying you?

Signals include: certification expiry (ISO certifications, sector-specific approvals, data protection certifications), regulatory enforcement action (sector regulators, health and safety authorities, environmental agencies), environmental incidents including prosecutions or site closure orders, trade compliance issues including export licence violations or customs irregularities, and sanctions list changes affecting the vendor or their key sub-suppliers.

| Risk Level | Signal                                                           |
| ---------- | ---------------------------------------------------------------- |
| 🔴 HIGH    | Active sanctions match; enforcement action; certification lapsed |
| 🟡 MEDIUM  | Certification expiring within 90 days; regulatory warning issued |
| 🟢 LOW     | All certifications current; no adverse regulatory signals        |

### Dimension 4: Geopolitical Risk

Geopolitical risk answers the question: could events in the vendor's operating environment disrupt their ability to supply you?

This dimension covers political instability in the vendor's country, trade restrictions and tariffs affecting the category, currency volatility affecting the economics of your contract, infrastructure disruption (port strikes, border closures, natural disasters), and supply route disruptions from conflict or regulatory change.

| Risk Level | Signal                                                                |
| ---------- | --------------------------------------------------------------------- |
| 🔴 HIGH    | Active disruption to supply route or vendor operations                |
| 🟡 MEDIUM  | Elevated country risk; currency movement >5% since contract inception |
| 🟢 LOW     | Stable environment; no material currency exposure                     |

For KIFTL, the geopolitical dimension flags a currency exposure: PKR has weakened approximately 3% against GBP in the last 60 days. The current fixed-price contract protects you until renewal, but at renewal you should consider index-linked pricing or USD denomination.

### Dimension 5: Tier 2 and Sub-Supplier Risk

Tier 2 risk answers the question: are your Tier 1 supplier's own suppliers creating risk that will cascade to you?

This is the most dangerous dimension — and the most neglected. You have no direct relationship with Tier 2 suppliers. They do not appear in your procurement system. Their financial health, operational performance, and compliance status are invisible to you unless you specifically ask your Tier 1 suppliers to disclose them.

For every Tier 1 Strategic vendor, the risk framework requires:

- A map of their top 3 raw material or component suppliers by spend
- Identification of single-source dependencies at Tier 2 level
- Geographic concentration analysis (all Tier 2 suppliers in the same region = concentration risk)
- Annual financial health check for critical Tier 2 suppliers

If this mapping does not exist: the rating is **UNASSESSED** — not LOW. An unknown Tier 2 is not a low-risk Tier 2.

:::caution The Tier 2 Cascade
The KIFTL crisis illustrates the Tier 2 problem precisely. KIFTL's operational risk (declining OTD) was visible in your ERP data. But the _cause_ of the decline was Karachi Steel & Alloys — a Tier 2 supplier — entering financial restructuring. If you had a Tier 2 map for KIFTL, you would have flagged KSA's distress three weeks before the delivery failures began. Instead, you learned about it from a colleague who happened to read the trade press.
:::

## The Overall Risk Rating

The overall rating is not an average of the five dimensions. The rules are:

- **ESCALATE** to HIGH if ANY single dimension reaches 🔴
- **ELEVATE** to MEDIUM-HIGH if TWO or more dimensions reach 🟡 simultaneously
- **REDUCE** the overall rating only after confirmed remediation — vendor assurance alone is not sufficient evidence

For KIFTL at assessment date:

- Financial: 🟡 MEDIUM (declining margins, Tier 2 raw material supplier in distress)
- Operational: 🔴 HIGH (OTD 81%, declining trend)
- Compliance: 🟢 LOW (certifications current)
- Geopolitical: 🟡 MEDIUM (currency movement)
- Tier 2: 🟡 MEDIUM (KSA in restructuring — now mapped)

Overall: 🔴 HIGH — because operational risk has reached red.

## Using `/supplier-risk`

The `/supplier-risk` skill generates a structured risk brief from your ERP data, web monitoring, financial databases, and Tier 2 information. You initiate it with a prompt specifying the vendor and which dimensions to assess.

For KIFTL across three dimensions:

```
/supplier-risk vendor:"Karachi Industrial Fasteners Ltd"
               dimensions:"financial,operational,geopolitical"
               horizon:"next 90 days"
```

The output follows the risk brief format:

```
SUPPLIER RISK BRIEF: Karachi Industrial Fasteners Ltd
Assessment date: [Date] | Next review: [+30 days]
════════════════════════════════════════════════════════════

OVERALL RISK RATING: 🟡 MEDIUM-HIGH (elevated from MEDIUM — see below)

FINANCIAL RISK: 🟡 MEDIUM (elevated)
  Sources: SECP filings, trade credit reports, news monitoring

  Signal 1 [NEW — this week]:
    Trade press (Pakistan Business Recorder, 3 March 2026): KIFTL's
    main raw material supplier — Karachi Steel & Alloys — reported
    to be in financial restructuring. If KSA reduces supply, KIFTL
    production capacity could be affected within 60–90 days.
    Action: Contact KIFTL for supply assurance statement.
    Escalation: If no satisfactory response within 7 days, activate
    backup supplier qualification with urgency.

  Signal 2 [Existing — unchanged]:
    SECP filings (Dec 2025): Revenue flat vs. prior year; margins
    declining (EBIT margin: 4.1% vs. 6.8% prior year).
    Working capital position tightening. Not distress-level but
    directionally concerning for a sole-source supplier.

OPERATIONAL RISK: 🔴 HIGH
  OTD (last 90 days): 81% — declining trend (was 84% last quarter)
  Quality rejection: 2.6% — slightly elevated vs. prior period
  Last late delivery: 14 Feb 2026 — 5 days late on critical order
  Pattern analysis: 4 of last 6 late deliveries are Monday despatch
    → Hypothesis: capacity strain on production scheduling
  Action: Schedule operational review with KIFTL in next 14 days

GEOPOLITICAL RISK: 🟡 MEDIUM
  Pakistan: Stable trading environment; no new export restrictions
  Currency: PKR/GBP rate — PKR weakened ~3% in last 60 days;
    existing fixed-price contract protects until renewal
  At renewal: consider index-linked pricing or USD denomination

RECOMMENDED ACTIONS — RANKED BY URGENCY

🔴 [This week] Contact KIFTL re: KSA supply assurance; escalate to CPO
🔴 [14 days] Operational review meeting — OTD and quality agenda
🟡 [30 days] Accelerate backup supplier qualification
🟡 [Contract renewal] Renegotiate with commodity + currency index linkage
🟢 [60 days] Visit KIFTL facility — operational health check
════════════════════════════════════════════════════════════
```

For a full five-dimension assessment including Tier 2:

```
/supplier-risk vendor:"[Vendor name]"
               dimensions:"all"
               data-sources:"ERP,web,financial-databases"
```

If Tier 2 data has not been collected for this vendor, the output will flag `TIER 2: ⚪ NOT MAPPED` and recommend requesting Tier 2 information from the vendor as a priority action.

## The Vendor Health Monitor Agent

Running `/supplier-risk` on demand is useful for investigations. But strategic suppliers require continuous monitoring — not just when you remember to check. The `vendor-health-monitor` agent automates this.

The agent runs on a defined schedule, monitoring your configured list of strategic vendors across all five dimensions. When a signal crosses a configured threshold — a credit rating downgrade, an OTD drop below the corrective action threshold, a news item flagging restructuring — the agent generates an alert and routes it to the configured owner.

Configure the agent through `supply-chain.local.md`:

```markdown
### Risk Thresholds — Tier 1 Strategic Suppliers

Financial:
Credit rating downgrade: IMMEDIATE escalation to CPO
Late filing of accounts: flag for manual review within 7 days
Restructuring news: IMMEDIATE brief; contingency review within 48 hours

Operational:
OTD < 90%: Corrective action request (CAR) issued within 5 business days
OTD < 80%: Contingency plan activated; alternative sourcing evaluated
Quality > 2%: CAR issued; site visit within 30 days if unresolved
Quality > 5%: Immediate supply hold; root cause analysis required
```

The agent also generates a weekly executive brief for your CPO:

```
/supplier-risk type:"weekly-executive-brief"
               vendors:"[list of strategic vendors]"
               format:"one-page executive brief; traffic light by vendor;
                       changes since last week; one CPO action item"
```

The weekly brief is a one-page traffic light summary: each strategic vendor on a row, their overall rating, the change from last week, the key signal driving any change, and one action item requiring CPO attention if escalation is needed.

## Exercise: Build the Supplier Risk Dashboard (Exercise 3)

**Type:** Systems Design and Agent Configuration
**Time:** 75 minutes
**Plugin commands:** `/supplier-risk`, `/vendor-assess`
**Goal:** Deploy a Tier 1 supplier risk monitoring system for your top 10 strategic vendors

### Step 1 — Define Your Risk Framework

Before running any assessments, calibrate the five dimensions for your organisation. In `supply-chain.local.md`, configure:

- **Financial**: What credit events trigger immediate escalation? What filing delay is acceptable?
- **Operational**: What OTD threshold triggers a corrective action request? What threshold triggers contingency activation?
- **Compliance**: What certification expiry window requires action?
- **Geopolitical**: What currency movement is material for your contracts?
- **Tier 2**: Which of your Tier 1 suppliers have a completed Tier 2 map? Which do not?

Use the threshold structure from the example above as your starting template, then adjust for your industry and vendor base.

### Step 2 — Run Initial Risk Assessments

For each of your top 10 vendors by strategic importance:

```
/supplier-risk vendor:"[Vendor name]"
               dimensions:"all"
               data-sources:"ERP,web,financial-databases"
```

Score each vendor across all five dimensions. Create a 5×5 risk matrix plotting all 10 vendors on likelihood of disruption (horizontal axis) vs. impact if disrupted (vertical axis).

### Step 3 — Identify Your Highest-Risk Relationship

From the risk matrix, identify the vendor in the highest-risk quadrant — high likelihood combined with high impact. For this vendor:

- What is the single most important risk reduction action available?
- What would it cost to implement?
- What is the cost of the supply disruption it prevents?

Present this as a business case: investment in risk reduction versus cost of failure.

### Step 4 — Configure the Vendor Health Monitor Agent

For your 10 strategic vendors, configure:

- Which web sources to scan (trade press, financial databases, news feeds)
- Notification frequency and format
- Alert thresholds per vendor — vendors with recent near-misses should have tighter thresholds than stable vendors
- Escalation path for each vendor: who is the category manager, and who is the CPO-level escalation contact

### Step 5 — Design the Weekly Risk Brief

Design the weekly risk review format for your CPO — one page maximum:

```
/supplier-risk type:"weekly-executive-brief"
               vendors:"[your 10 vendors]"
               format:"one-page executive brief; traffic light by vendor;
                       changes since last week; one CPO action item"
```

**Deliverable:** Risk framework configuration in `supply-chain.local.md`, risk matrix for top 10 suppliers, business case for highest-risk supplier mitigation, Vendor Health Monitor agent configured with thresholds and escalation paths, and first example of weekly risk brief output.

## Try With AI

:::tip Try With AI
**Reproduce**: Apply what you just learned to a simple case.

```
I have a strategic supplier — TechComponents Ltd — who manufactures
custom PCBs for our flagship product. Annual spend: £340,000. They
are sole-source with an 8-month qualification timeline to replace.

Recent signals:
- OTD last quarter: 87% (down from 94% six months ago)
- Quality rejection rate: 1.4% (up from 0.6%)
- News: their main PCB substrate supplier announced capacity
  constraints due to a factory fire in Taiwan last month
- No Tier 2 map exists for TechComponents

Assess TechComponents across all five risk dimensions and recommend
the three most urgent actions.
```

**What you are learning:** The five-dimension framework forces structured thinking across every risk type simultaneously — not just the operational signals that are most visible.

**Adapt**: Modify the scenario to match your organisation.

```
Choose your most strategically important supplier. For each of the
five risk dimensions, answer:
- What is the current rating (Green / Amber / Red / Unassessed)?
- What data do you have that supports this rating?
- What data do you NOT have that you should have?
- What is the one signal that would cause you to escalate this
  supplier to your CPO today?

Then identify which dimension has the largest gap between your actual
data and what you would need for a reliable assessment.
```

**What you are learning:** Most organisations discover they are data-rich on operational risk (it is in the ERP) and data-poor on financial and Tier 2 risk. Identifying this gap is the first step to closing it.

**Apply**: Extend to a new situation the lesson didn't cover directly.

```
Your CPO asks you to design a Tier 2 supplier mapping programme.
You have 15 Tier 1 Strategic suppliers. Mapping all of them fully
would take 6 weeks.

1. How would you prioritise which Tier 1 suppliers to map first?
   What criteria determine highest priority?
2. What information would you request from each Tier 1 supplier?
3. How would you handle a Tier 1 supplier who declines to share
   Tier 2 information?
4. What should the Tier 2 map contain, and how often should it
   be refreshed?
```

**What you are learning:** Tier 2 mapping is a programme design challenge, not just a data collection task. Prioritisation, vendor co-operation, and refresh cadence are the decisions that determine whether the programme actually reduces risk.
:::

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 8: Logistics and Carrier Performance →](./08-logistics-carrier-performance.md)
