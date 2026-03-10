---
sidebar_position: 11
title: "Legal Ops Agents: Calendar, Spend, and DSAR"
description: "Three Legal Ops Agents for compliance calendar management with escalation logic, legal spend analytics with anomaly detection, and DSAR processing with full 30-day timeline"
keywords:
  [
    "compliance calendar agent",
    "legal spend analytics",
    "DSAR agent",
    "data subject access request",
    "compliance deadline management",
    "legal operations automation",
    "contract renewal tracking",
    "outside counsel management",
    "GDPR compliance",
    "legal process automation",
  ]
chapter: 22
lesson: 11
duration_minutes: 30

# HIDDEN SKILLS METADATA
skills:
  - name: "Configure a Compliance Calendar Agent with Escalation Logic"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can describe the escalation sequence at 60/30/14/7/1/0 day marks, explain why each escalation level involves different recipients, and adapt the escalation rules for their own organisation's compliance obligations"

  - name: "Interpret Legal Spend Analytics with Anomaly Detection"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can read a legal spend analysis report, identify rate variances, matter budget overruns, and billing pattern anomalies, and recommend appropriate actions for each type of anomaly"

  - name: "Manage a DSAR Workflow Within Statutory Response Windows"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Safety"
    measurable_at_this_level: "Student can trace a data subject access request through the full 30-day workflow (acknowledgement, identity verification, data discovery, redaction assessment, response drafting, attorney review, sending) and identify the jurisdiction-specific response windows for UK GDPR, EU GDPR, CCPA, and PIPEDA"

learning_objectives:
  - objective: "Describe the compliance calendar escalation sequence and explain why different stakeholders are notified at each stage"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student can walk through the Gulf Digital cloud infrastructure renewal example and explain the business rationale for each escalation level from 60 days to day-after-missed"

  - objective: "Identify billing anomalies in a legal spend analysis report and recommend appropriate responses"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student can read the Noor Technologies Q1 spend report, identify the three flagged anomalies, and explain why the rate variance anomaly is RED while the billing pattern anomaly is YELLOW"

  - objective: "Trace a DSAR through the complete 30-day response workflow, identifying the mandatory steps and attorney review points"
    proficiency_level: "B2"
    bloom_level: "Apply"
    assessment_method: "Student can describe the Sarah Johnson DSAR worked example from acknowledgement to completion, explain the redaction assessment categories (must disclose, redact, attorney review required), and state the response windows for at least three jurisdictions"

cognitive_load:
  new_concepts: 6
  concepts_list:
    - "Compliance calendar escalation sequence (60/30/14/7/1/0 days)"
    - "Auto-renewal risk and non-renewal notice deadlines"
    - "Legal spend anomaly types (rate variance, budget overrun, billing pattern)"
    - "DSAR response windows by jurisdiction"
    - "Redaction assessment categories (must disclose, redact, attorney review)"
    - "DSAR completion logging and compliance archiving"
  assessment: "6 concepts at B1-B2 level -- at the upper boundary of the 5-7 cognitive limit. The three agents in this lesson share a common pattern (accept trigger, execute workflow, escalate, log completion), which reduces cognitive overhead. Students already understand the agent vs. tool distinction from Lesson 7."

differentiation:
  extension_for_advanced: "Design a DSAR Agent SKILL.md for an organisation operating under both UK GDPR and Pakistan's PDPA 2023. Specify how the response windows, acknowledgement rules, and data discovery workflows differ between the two jurisdictions. Consider what happens when a single requester has data in both jurisdictions."
  remedial_for_struggling: "Focus on the compliance calendar escalation rules and the DSAR jurisdiction response windows. If you can state what happens at each escalation mark and name the response deadlines for UK GDPR, CCPA, and PIPEDA, you have the foundation for deploying these agents."
---

# Legal Ops Agents: Calendar, Spend, and DSAR

In Lesson 10, you built the Contract Intake Agent and Regulatory Monitoring Agent — agents that manage intake and external awareness. This lesson adds three more agents that handle the ongoing operational responsibilities of a legal department: compliance deadlines, legal spend, and data subject access requests. Each follows the same agent pattern: persistent workflow, multi-step process, state maintenance, escalation logic, and completion logging.

:::tip Connector Integration
If you connected Google Calendar in Lesson 1, the Compliance Calendar Agent can create calendar events with escalation reminders at 60/30/14/7/1 day marks. The DSAR Agent can search real email, CRM, and document systems via MCP connectors for data discovery. Without connectors, you provide obligation lists and data locations manually.
:::

## Agent 3: The Compliance Calendar Agent

**Purpose:** Maintain and actively manage the organisation's legal and regulatory compliance calendar. Send advance reminders. Escalate missed deadlines.

**What it tracks:**

- Contract obligations -- deliverables, payments, audit rights windows, renewal notice deadlines
- Regulatory filings -- annual returns, licence renewals, certification renewals
- Internal compliance reviews -- policy review schedules, DPIAs, third-party risk reviews
- Litigation deadlines -- limitation periods (always escalate to counsel immediately)

```
/vendor-check scope:"all active contracts"
              filter:"obligations due within 60 days"
              output:"compliance calendar by owner and deadline"
```

**Integration architecture:**

```
[Contract Repository]   -> MCP -> [Compliance Calendar Agent]
[Google Calendar]       -> MCP -> [Compliance Calendar Agent]
[Compliance Agent]      -> MCP -> [Dashboard: Google Sheets / Notion]
[Compliance Agent]      -> MCP -> [Alerts: Slack / Email]
```

### Worked Example: Escalation Logic at Gulf Digital Solutions

Gulf Digital Solutions uses the Compliance Calendar Agent to track 127 active contracts. Here is what happens when a renewal deadline approaches for a critical vendor:

**The contract:** Gulf Digital's cloud infrastructure agreement with a major provider. Annual value: AED 2,160,000. Auto-renewal clause: renews automatically for successive 12-month terms unless either party gives 60 days' written notice before the renewal date. Renewal date: 15 May 2026. Last date for non-renewal notice: 16 March 2026.

```
COMPLIANCE CALENDAR — ESCALATION SEQUENCE

60 days before (14 January 2026):
  Action: Added to upcoming obligations dashboard.
  Status: INFORMATIONAL. Owner: Procurement (Hassan Ali).
  Note:   "Cloud infrastructure renewal — AED 2,160,000.
           Decision needed: renew, renegotiate, or terminate.
           Last date for non-renewal notice: 16 March 2026."

30 days before (13 February 2026):
  Action: Email notification to Hassan Ali (Procurement).
  Subject: "Renewal Decision Required — [Cloud Provider] — Due 16 March"
  Content: "The non-renewal notice deadline for your cloud infrastructure
            contract is 16 March 2026 (30 days from today). Please confirm:
            (a) Renew on current terms, (b) Request renegotiation, or
            (c) Issue non-renewal notice. If no response by 28 February,
            this will escalate to your manager."

14 days before (2 March 2026):
  Action: Email to Hassan Ali + his manager (VP Technology).
  Subject: "ESCALATION: Renewal Decision Required — 14 Days Remaining"
  Status: ELEVATED. Two recipients.

7 days before (9 March 2026):
  Action: Email to General Counsel. Added to weekly GC brief.
  Subject: "GC Attention Required: Cloud Infrastructure Renewal — 7 Days"
  Content: "No renewal decision received. Contract auto-renews on 15 May
            for AED 2,160,000 if notice is not given by 16 March.
            Procurement and VP Technology have been notified. GC action
            recommended."

1 day before (15 March 2026):
  Action: EMERGENCY ALERT to CFO (financial obligation) + GC.
  Subject: "URGENT: Cloud Infrastructure — Auto-Renewal Tomorrow"
  Status: CRITICAL.
  Content: "AED 2,160,000 auto-renewal triggers tomorrow unless notice
            is given TODAY. CFO and GC notification per escalation policy."

Day of deadline (16 March 2026) — if missed:
  Action: Log as compliance incident.
  Content: "Non-renewal notice deadline MISSED. Contract will auto-renew
            for 12 months at AED 2,160,000. Initiating remediation workflow.
            Incident logged for compliance review."

Day after (17 March 2026):
  Action: Incident report to GC.
  Content: "Missed deadline incident report. Contract: [ref].
            Vendor: [name]. Financial impact: AED 2,160,000 committed
            for additional 12 months. Root cause analysis recommended.
            Assess whether early termination or renegotiation is available
            under the contract terms."
```

**Compliance Calendar Escalation Rules:**

```
60 days before deadline: Add to upcoming obligations dashboard
30 days before deadline: Notify obligation owner by email
14 days before deadline: Notify obligation owner + their manager
7 days before deadline:  Notify General Counsel; add to weekly brief
1 day before deadline:   Notify CFO if financial obligation;
                         GC if legal/regulatory obligation
Day of deadline:         Emergency alert to GC; prepare explanatory
                         note if missed
Day after (missed):      Log as compliance incident; trigger
                         remediation workflow
```

This escalation sequence prevented Gulf Digital from accidentally auto-renewing a contract they intended to renegotiate. Hassan confirmed on 10 March (after the 7-day GC alert prompted a phone call) that they wanted to renegotiate pricing. The non-renewal notice was sent on 11 March, and a renegotiation process began that ultimately reduced the annual cost by AED 324,000 (15%).

---

## Agent 4: The Legal Spend Analytics Agent

**Purpose:** Provide visibility into external legal spend by matter type, firm, and business unit, with anomaly detection and benchmarking.

Connected to accounts payable via MCP, the agent produces:

- Matter-by-matter spend vs. budget
- Firm performance metrics: effective hourly rate, write-off patterns, budget variance
- Spend concentration risk analysis
- Benchmarking against published market rate surveys
- Anomaly alerts: invoices deviating significantly from matter budget or historical billing patterns

```
/brief topic:"legal-spend-analysis"
      period:"Q1 2026"
      compare-to:"Q1 2025"
      flag-anomalies:true
      benchmark:"published market rates [jurisdiction]"
```

### Worked Example: Anomaly Detection at Noor Technologies

Noor Technologies retains three law firms for external legal work: a Karachi-based firm for Pakistani commercial law (PKR 35,000/hour for senior associates), a London firm for English-law contracts (GBP 425/hour for senior associates), and a Dubai firm for UAE/DIFC matters (AED 2,200/hour for senior associates). Bilal runs a Q1 spend analysis:

```
LEGAL SPEND ANALYSIS — Q1 2026 (January-March)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
Total external legal spend:     PKR 18,450,000
vs. Q1 2025:                    +23%
vs. budget:                     +11% (budget: PKR 16,600,000)

BY FIRM (all 3 panel firms)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Akhtar & Shah (Karachi)
   Total:         PKR 5,600,000
   Eff. rate:     PKR 32,000/hr (below agreed PKR 35,000 — write-offs)
   vs. budget:    -3%
   Matters:       7 (commercial contracts, employment, IP filing)

2. Clifford Carter LLP (London)
   Total:         PKR 8,200,000 (GBP 21,200 equivalent)
   Eff. rate:     GBP 445/hr (above agreed GBP 425/hr)
   vs. budget:    +18%
   Matters:       3 (cross-border MSA, UK employment, GDPR advisory)

3. Al-Farsi Legal (Dubai)
   Total:         PKR 4,650,000 (AED 61,400 equivalent)
   Eff. rate:     AED 2,150/hr (within agreed range)
   vs. budget:    +8%
   Matters:       2 (DIFC contract dispute, UAE vendor agreement)

ANOMALIES FLAGGED: 3
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RED — ANOMALY 1 — Clifford Carter: Rate Variance
   Matter: UK Employment Tribunal Preparation
   Agreed rate: GBP 425/hr (Senior Associate)
   Invoiced rate: GBP 510/hr (3 time entries)
   Variance: +20% above agreed rate without written authorisation
   Total overcharge: GBP 1,275 (PKR 494,000)
   RECOMMENDED ACTION: Request rate reconciliation from Clifford Carter.
   Query whether Senior Associate was substituted with a more senior
   fee earner without notification.

YELLOW — ANOMALY 2 — Clifford Carter: Matter Budget Variance
   Matter: Cross-Border MSA (Gulf Expansion)
   Approved budget: GBP 12,000
   Invoiced to date: GBP 14,800 (+23%)
   No budget extension request received.
   RECOMMENDED ACTION: Request matter status update and revised budget
   estimate before approving further invoices.

YELLOW — ANOMALY 3 — Akhtar & Shah: Billing Pattern
   Matter: Commercial IP Filing (Patent Ordinance 2000)
   Billing in final month (March): PKR 2,100,000
   Billing in Jan-Feb combined: PKR 800,000
   Pattern: 72% of matter billing in final month.
   NOTE: This pattern is common before matter close but should be
   verified — potential for front-loading work to clear WIP
   before quarter end.
   RECOMMENDED ACTION: Review time entries for March; confirm work
   performed matches billing volume.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NOTE: Billing anomalies require discussion with the relevant partner
before any payment dispute is raised. GC authorisation required
before formal dispute.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Bilal forwards this to Ayesha (GC). The rate variance anomaly at Clifford Carter turns out to be a billing error -- the firm inadvertently billed at partner rate instead of senior associate rate on three entries. They issue a credit note for GBP 1,275. The matter budget overrun prompts a conversation about scope creep on the Gulf expansion work, leading to a revised budget and clearer scope definition.

Without the anomaly detection, these issues would have been paid without question. The PKR 494,000 rate overcharge alone pays for several months of the agent's operating cost.

---

## Agent 5: The Data Subject Request (DSAR) Agent

**Purpose:** Manage GDPR and privacy law data subject requests end-to-end -- from acknowledgement through data discovery, redaction checklist, and response drafting -- within the mandatory response window.

**Jurisdiction response windows:**

| Jurisdiction      | Response Window      | Notes                                       |
| ----------------- | -------------------- | ------------------------------------------- |
| UK GDPR           | 30 calendar days     | ICO template recommended                    |
| EU GDPR           | 30 calendar days     | National DPA templates vary                 |
| CCPA (California) | 45 days              | Extendable by 45 days with notice           |
| PIPEDA (Canada)   | 30 days              | Escalate to Privacy Officer immediately     |
| Other             | Escalate immediately | Privacy Counsel to determine applicable law |

```
/respond type:"DSAR"
         request-type:"subject-access"
         requester-email:"[email]"
         request-date:"[date]"
         jurisdiction:"UK GDPR"
```

**Agent workflow:**

1. Log request; start response clock; set day-7, day-21, day-28 internal alerts
2. Generate and send acknowledgement letter (confirm receipt; state deadline; confirm identity verification required; do not confirm or deny data held)
3. Send data discovery requests to all relevant system owners (HR, IT, Marketing, Sales, Finance) via email/Slack MCP
4. Collate responses; prepare redaction checklist for attorney review
5. Draft complete response letter for attorney review
6. Route to reviewing attorney for final approval and sending
7. Log completion; store in compliance archive

### Worked Example: Sarah Johnson DSAR -- The Full 30-Day Timeline

At 09:17 on Monday 3 March 2026, the following email arrives at `privacy@databridge.co.uk`:

> _"Dear Sir/Madam, I am writing to request all personal data that your company holds about me under Article 15 of the GDPR. My name is Sarah Johnson. I was a customer from March 2021 to June 2023. My email address at that time was sarah.johnson.42@gmail.com. Please confirm receipt and advise when I can expect a response. Regards, Sarah Johnson."_

The DSAR Agent activates immediately. Here is the complete 30-day timeline:

**Day 1 -- Monday 3 March 2026 (09:17)**

- Request logged. Reference: DSAR-2026-0017.
- 30-day clock started. Response deadline: Wednesday 2 April 2026.
- Internal alerts set: Day 7 (10 March), Day 21 (24 March), Day 28 (31 March).
- Acknowledgement letter drafted and sent by 11:00:

```
Dear Ms Johnson,

Thank you for your request dated 3 March 2026 under Article 15 of
the UK GDPR. We acknowledge receipt.

Reference: DSAR-2026-0017
Response deadline: 2 April 2026

We may need to verify your identity before responding. Please provide
a copy of a government-issued photo ID. The 30-day response period
will pause until identity verification is complete.

For any queries, please contact: privacy@databridge.co.uk

This acknowledgement does not confirm or deny what personal data
DataBridge Ltd holds about you.

Regards,
Privacy Team, DataBridge Ltd
```

**Days 1-3 -- Identity Verification**

- Sarah provides passport scan on Day 2. Identity verified Day 3.
- 30-day clock confirmed: no pause needed.

**Days 1-10 -- Data Discovery**

- Discovery requests sent to 7 system owners on Day 1:
  - CRM (Sales team) -- Deadline: 10 March
  - Billing system (Finance) -- Deadline: 10 March
  - Email/communications (IT) -- Deadline: 10 March
  - Customer support/ticketing (Support) -- Deadline: 10 March
  - Marketing database (Marketing) -- Deadline: 10 March
  - HR system (HR) -- Deadline: 10 March
  - Legal case management (Legal) -- Deadline: 10 March

**Day 10 -- Discovery Responses Received:**

- CRM: Full customer record, purchase history, 12 support tickets, sales rep notes (including: "difficult customer -- always pushes for discounts; gave 15% retention discount in Nov 2022")
- Billing: 27 invoices totalling GBP 14,380, last 4 digits of payment card (\*4892), billing address (47 Rosemary Lane, Bristol BS1 4XX)
- Email: 47 support emails between Sarah and support team
- Marketing: Campaign history (142 emails sent), open/click tracking data, preference settings, opt-in date (4 March 2021)
- Customer support: 12 tickets (matching CRM), CSAT scores (average 3.2/5)
- HR system: No data found
- Legal case management: No data found

**Day 12 -- Redaction Assessment**

Agent prepares redaction checklist:

```
REDACTION ASSESSMENT — DSAR-2026-0017
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MUST DISCLOSE (personal data about Sarah):
  - Full CRM customer record
  - Purchase history and invoice data
  - Support ticket content
  - Marketing campaign data and tracking
  - CSAT scores
  - Sales rep notes about Sarah — INCLUDING the opinion
    "difficult customer — always pushes for discounts"
    (This IS personal data under Art. 4(1) — it relates to an
    identified individual and constitutes an opinion about her.
    The ICO has confirmed that opinions about data subjects are
    personal data and must be disclosed.)

REDACT (do not disclose):
  - Support agent names in internal notes (third-party personal data)
  - Other customer names mentioned in ticket threads
  - Internal escalation notes referencing other customers

ATTORNEY REVIEW REQUIRED:
  - Sales rep notes contain the retention discount amount (15%).
    This is Sarah's personal data (it was applied to her account).
    However, verify with counsel whether the discount percentage
    constitutes commercially sensitive information that could be
    withheld under Recital 63 exemption.
  - Marketing tracking data includes pixel tracking and device
    fingerprinting. Counsel to confirm whether technical identifiers
    should be included in machine-readable format (Art. 20
    portability right was not specifically requested but should
    be offered).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ROUTE FOR ATTORNEY REVIEW: Day 15 at latest
```

**Day 15 -- Response Draft**

Agent drafts complete response letter including:

- Categories of personal data held (customer account, billing, communications, marketing, support)
- Purposes of processing for each category
- Legal basis: legitimate interests (B2B customer relationship) and consent (marketing)
- Recipients: cloud hosting provider (AWS), payment processor (Stripe), email marketing platform (Mailchimp)
- Retention periods: customer data retained for 6 years post-account closure (legal obligation -- Limitation Act 1980); marketing data deleted 12 months post-opt-out
- Data subject rights: rectification, erasure, restriction, objection, portability, complaint to ICO
- Source of data: collected directly from Sarah via website registration (4 March 2021)
- Automated decision-making: none applied to Sarah's account

**Day 21 -- Alert fires.** Agent sends reminder: "DSAR-2026-0017: 9 days remaining. Response draft awaiting attorney review."

**Day 25 -- Attorney Review Complete.** Reviewing attorney confirms:

- Sales rep opinion note ("difficult customer") must be disclosed -- correct per ICO guidance
- Retention discount (15%) is Sarah's personal data -- include it
- Marketing tracking data: include in human-readable summary; note portability right

**Day 28 -- Alert fires.** Agent sends reminder: "DSAR-2026-0017: 2 days remaining. Approved response ready for sending."

**Day 29 -- Monday 31 March 2026**

Response sent to Sarah Johnson. DSAR-2026-0017 logged as complete.

```
DSAR COMPLETION LOG
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Reference:           DSAR-2026-0017
Date received:       3 March 2026
Date acknowledged:   3 March 2026
Date responded:      31 March 2026 (Day 29 of 30)
Data categories:     Customer account, billing, communications,
                     marketing, support
Data withheld:       Third-party personal data (support agent names,
                     other customer names) — Art. 15(4) exemption
Attorney sign-off:   James Chen, 25 March 2026
Stored in:           Compliance archive / DSAR / 2026 / DSAR-2026-0017

No further action required.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

The entire DSAR was managed within the 30-day window with 6 hours of coordinated human work (discovery coordination, attorney review, final quality check) instead of the typical 20-30 hours of manual processing.

**Creating the DSAR Agent as a Cowork Skill:**

To create this skill in Cowork: open **Skills** → **+** → **Write skill instructions**. Set:

- **Skill name:** `dsar-agent`
- **Description:** `Activate for: DSAR, data subject access request, subject access, right of access, GDPR request, CCPA request, privacy request, right to be forgotten, erasure request, data portability, data rectification, restriction of processing, objection to processing.`
- **Instructions:** the rules below

```markdown
## JURISDICTION RESPONSE WINDOWS

UK GDPR: 30 calendar days (ICO template recommended)
EU GDPR: 30 calendar days (national DPA templates vary)
CCPA (California): 45 days; extendable by 45 days with notice
PIPEDA (Canada): 30 days; escalate to Privacy Officer immediately
Other: Escalate to Privacy Counsel immediately

## REQUEST TYPE ROUTING

Subject Access Request (Art. 15): full data discovery workflow
Erasure / Right to be Forgotten: escalate to Privacy Counsel
immediately — technical and legal complexity
Data Portability (Art. 20): IT lead + Privacy Counsel
Rectification (Art. 16): relevant system owner + confirmation
Restriction (Art. 18): Privacy Counsel immediately
Objection (Art. 21): Privacy Counsel immediately

## ACKNOWLEDGEMENT RULES

DO include: Confirmation of receipt; statutory deadline; identity
verification process; contact details for queries
DO NOT include: Confirmation or denial of what data is held;
any substantive response to the request;
legal advice of any kind

## NEVER DO THESE

- NEVER confirm data holdings before discovery is complete
- NEVER send data to requester without attorney review of full package
- NEVER miss the response window — alert Privacy Counsel 7 days
  before deadline if response is not complete
- NEVER reject a request without attorney sign-off on rejection grounds
- NEVER apply a fee without attorney confirmation it is lawful
  (manifestly unfounded / excessive threshold only)
```

## Try With AI

Use these prompts in Claude or your preferred AI assistant to explore this lesson's concepts.

### Prompt 1: Design Your Compliance Calendar Escalation

```
I am the Legal Operations Manager at a 120-person company with
45 active contracts. Design a compliance calendar escalation
sequence for the following scenario:

Our most important vendor contract (annual value $500,000)
has an auto-renewal clause requiring 90 days' written notice
for non-renewal. The renewal date is 1 September 2026.

Create the full escalation sequence with:
1. Specific dates for each escalation level
2. The exact recipients at each level
3. The email subject and content for each notification
4. What happens if the deadline is missed
5. The compliance incident report template

My team structure:
- Procurement Manager (contract owner)
- VP Operations (Procurement Manager's boss)
- General Counsel
- CFO

Adapt the escalation rules from a 60-day notice window to
a 90-day notice window.
```

**What you are learning:** Escalation logic must be calibrated to the specific notice window in each contract. A 90-day notice window requires earlier first-contact than a 60-day window. The exercise builds your ability to adapt the pattern to different contractual requirements rather than applying a one-size-fits-all template.

### Prompt 2: Analyse a Legal Spend Report

```
I am reviewing our Q1 legal spend report. Here are the facts:

Total spend: $340,000 (budget: $280,000, +21% over budget)

Firm A (local counsel): $95,000, 5 matters, effective rate
$280/hr (agreed: $275/hr)

Firm B (international counsel): $190,000, 2 matters, effective
rate $520/hr (agreed: $475/hr)

Firm C (specialist IP counsel): $55,000, 1 matter, effective
rate $400/hr (agreed: $425/hr)

Billing patterns:
- Firm B billed $145,000 in March alone (76% of total)
- Firm C's effective rate is below agreed rate (write-offs)
- Firm A has one matter that has consumed $60,000 against a
  $35,000 budget

For each firm:
1. Identify any anomalies (rate variance, budget variance,
   billing pattern)
2. Classify each anomaly as RED or YELLOW
3. Recommend a specific action
4. Explain what questions to ask the firm partner
```

**What you are learning:** Legal spend analytics is not just about totals -- it is about patterns. A firm billing 76% of its fees in the final month of a quarter may be doing legitimate work, or it may be clearing work-in-progress before a reporting deadline. The skill is distinguishing normal variation from anomalies that require investigation.

### Prompt 3: DSAR Redaction Decision Exercise

```
I am processing a data subject access request under UK GDPR.
The data discovery has returned the following items. For each,
tell me whether I must disclose it, must redact it, or need
attorney review — and explain why:

1. The requester's full customer record including name, address,
   email, phone number
2. A sales note saying "This customer is a time-waster — do not
   offer premium pricing"
3. An internal email between two staff members discussing the
   requester's complaint, which also mentions another customer
   by name
4. The requester's browsing history on our website (pages visited,
   time on page, device type)
5. A credit score we pulled from a third-party agency during
   onboarding
6. Legal advice from our solicitor about a potential dispute
   with the requester
7. The requester's photo from a CCTV camera in our office lobby
   during a visit

For each item, cite the relevant GDPR article and explain the
reasoning. Flag any items where reasonable lawyers might disagree.
```

**What you are learning:** DSAR redaction is where the agent's analytical capability meets the attorney's professional judgment. The agent can categorise data and flag issues, but the disclosure decisions -- especially on opinions about data subjects, legal privilege, and third-party data -- require human judgment. Understanding the boundary between what the agent decides and what the attorney decides is the core skill.

---

Continue to [Lesson 12: Employment Law and Contractor Classification ->](./12-employment-law-and-contractor-classification.md)
