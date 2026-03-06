---
sidebar_position: 11
title: "Extending Plugins for Your Market"
description: "How to build jurisdiction overlays for new markets, resolve skill collisions between base and extension plugins using wrapper, override, and delegation patterns, deploy multi-market local configurations, and package your extensions as competitive advantages"
keywords:
  [
    "jurisdiction overlay",
    "plugin extension",
    "skill collision",
    "wrapper pattern",
    "override pattern",
    "delegation pattern",
    "multi-market configuration",
    "PECA",
    "CAN-SPAM",
    "GDPR",
    "market extension",
    "South Asian B2B",
    "WhatsApp outreach",
    "sales-marketing.local.md",
    "competitive advantage",
    "agent extension",
  ]
chapter: 23
lesson: 11
duration_minutes: 25

# HIDDEN SKILLS METADATA
skills:
  - name: "Build a Jurisdiction Overlay for a New Market"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can create a complete jurisdiction overlay file for a new market with regulatory requirements, outreach constraints, data source mappings, and cultural calibration notes, following the structure of the four existing overlays"

  - name: "Resolve Skill Collisions Using Wrapper, Override, and Delegation Patterns"
    proficiency_level: "B2"
    category: "Technical"
    bloom_level: "Analyze"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can identify overlapping skills between base and extension plugins, select the appropriate resolution pattern for each collision, and implement a router configuration that handles the resolution correctly"

  - name: "Deploy Multi-Market Local Configurations"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can create market-specific sales-marketing.local.md files with distinct ICP definitions, persona profiles, data sources, and cultural calibration, then configure the router to select the correct configuration based on the target market"

learning_objectives:
  - objective: "Build a complete jurisdiction overlay for a market not covered by the four existing overlays, following the established structure and including regulatory requirements, channel constraints, and cultural notes"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Student can produce a jurisdiction overlay file that the global router can load, with all required sections present and regulatory requirements accurately stated"

  - objective: "Analyse skill collisions between base and extension plugins and implement the appropriate resolution pattern (wrapper, override, or delegation) for each"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Student can identify the specific skills that overlap, explain why each collision exists, and configure the router to resolve each one using the pattern best suited to the use case"

  - objective: "Design and deploy a multi-market local configuration system that allows a single installation to serve different markets with different ICP definitions, data sources, and cultural calibrations"
    proficiency_level: "B2"
    bloom_level: "Create"
    assessment_method: "Student can produce at least two market-specific configuration files and demonstrate that the router loads the correct one based on the target market identifier"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "Jurisdiction overlay as a structured extension artifact"
    - "Skill collision resolution patterns (wrapper, override, delegation)"
    - "Multi-market local configuration with market-specific files"
    - "Extension testing methodology (routing, output quality, compliance)"
    - "Competitive advantage through domain-specific extension layers"
  assessment: "5 concepts at B2 level -- within the 5-7 cognitive limit. Students enter with the full plugin architecture from Lesson 10. This lesson adds the extension layer that transforms users from plugin consumers into plugin builders. The worked example grounds abstract patterns in a specific South Asian market scenario."

differentiation:
  extension_for_advanced: "Build overlays for two additional markets and configure a router that handles cross-market outreach (e.g., a Karachi company selling to prospects in both Pakistan and the UAE simultaneously). Document the edge cases where two overlays conflict and how the router resolves them."
  remedial_for_struggling: "Focus on the jurisdiction overlay structure and the worked example. If you can read an existing overlay, identify its sections, and create a new one by adapting the template for your market, you have the core skill this lesson teaches."
---

# Extending Plugins for Your Market

In Lesson 10, you learned the full architecture of the Sales & Marketing skill library -- the global router, the 14 product files, the 5 agent files, and the local configuration template. You can now trace a query from user input through router classification to product file execution to personalised output. That architecture is the infrastructure. This lesson teaches you how to build the businesses on top of it.

The plugin ships with four jurisdiction overlays: US (CAN-SPAM), EU (GDPR + ePrivacy), Pakistan (PECA), and GCC/UAE (TRA Anti-Spam). It ships with a local configuration template that produces generic outputs until you fill it in. If your market is covered by one of those four overlays and your organisation fits neatly into the template's structure, you can use the plugin as-is. Most organisations cannot. They sell across markets not covered by the four overlays. They need outreach in languages the base skills do not handle well. They have ICP definitions that require data sources the base configuration does not reference. They have cultural norms that change how every output should be calibrated.

This is where extensions become the product. Anthropic's plugins are the roads. Your extensions -- jurisdiction overlays, local configurations, collision resolution rules, market-specific adaptations -- are the businesses built on those roads. Everyone who installs the Sales & Marketing plugin gets the same 14 product files and the same global router. The competitive advantage is not in having the plugin. It is in the domain expertise encoded in your extensions.

## Building a Jurisdiction Overlay

### The Structure

Every jurisdiction overlay follows the same five-section structure. The four existing overlays in `skills/sales-marketing-global-router/references/jurisdictions/` demonstrate this pattern:

| Section | Purpose | Example (Pakistan overlay) |
| --- | --- | --- |
| **YAML frontmatter** | Name, version, applies-to trigger terms | `applies-to: "Pakistan / PECA / PTA / Karachi / Lahore"` |
| **Governing framework** | Primary legislation and key provisions | PECA 2016 Section 24, PDPA 2023, PTA Regulations |
| **Channel-specific rules** | Per-channel compliance requirements | WhatsApp Business API opt-in, SMS PTA registration |
| **Cultural considerations** | Business norms, timing, language | Relationship-first selling, Jumma prayer timing, Ramadan |
| **Key triggers** | Summary of escalation and compliance triggers | Bulk outreach = criminal offence; personalised B2B = generally acceptable |

The router loads the overlay when it detects (via the prospect's location in the CRM record or research brief) that the prospect is in the overlay's jurisdiction. The overlay modifies the product file's behaviour -- adding consent checks, adjusting channel selection, changing tone defaults, and flagging compliance requirements.

### Worked Example: Building an India Overlay

India is the largest market in South Asia by GDP and population, and it is not covered by the four existing overlays. NexaFlow -- the Karachi-based fleet management company from Lesson 3 -- is expanding into India and needs the router to handle Indian prospects correctly. Here is how you build the overlay.

**Step 1: Research the regulatory framework.**

India's primary legislation affecting commercial outreach is the Digital Personal Data Protection Act, 2023 (DPDP Act), which received presidential assent on 11 August 2023. The DPDP Act is India's first comprehensive data protection law. Key provisions for outreach:

- Processing personal data requires a lawful basis -- consent or specified legitimate uses
- Data fiduciaries must maintain accuracy, ensure security, and delete data once its purpose is met
- Penalties for non-compliance reach up to INR 250 crore (approximately USD 30 million)
- The Act has extra-territorial applicability -- a company in Karachi processing data of individuals in India is subject to the DPDP Act

Additional regulations: The Information Technology Act, 2000 (IT Act) and its 2011 Rules on Reasonable Security Practices apply to handling of sensitive personal information. The Telecom Commercial Communications Customer Preference Regulations (TCCCPR) govern SMS and voice marketing through a Do Not Disturb (DND) registry maintained by TRAI (Telecom Regulatory Authority of India).

**Step 2: Map the channel-specific rules.**

| Channel | Rule | Notes |
| --- | --- | --- |
| Email (B2B) | Consent or legitimate interest under DPDP Act | Personalised B2B to professional addresses is generally accepted |
| Email (B2C) | Consent required | DPDP Act consent provisions apply |
| SMS | DND registry check required | TRAI TCCCPR -- commercial SMS requires sender registration and DND verification |
| WhatsApp Business | WhatsApp Business API opt-in required | Same as Pakistan -- WhatsApp enforces opt-in regardless of local law |
| LinkedIn | Standard LinkedIn policies | Growing B2B adoption in urban India (Mumbai, Bangalore, Delhi NCR, Hyderabad) |
| Phone | DND registry check required | TRAI DND list applies to telemarketing calls |

**Step 3: Document cultural considerations.**

India's B2B sales culture varies significantly by region and industry. In enterprise sales (banking, IT services, manufacturing), formal processes with RFPs and procurement committees are standard. In the SME segment -- which is NexaFlow's target market for fleet management -- relationship networks, industry associations (CII, FICCI, NASSCOM), and referral-based introductions carry significant weight.

Timing: Indian business hours are generally 9:30 AM to 6:30 PM IST, Monday through Friday. Major holidays include Diwali (October/November), Holi (March), and Republic Day (26 January). Business slows during Navratri and Dussehra in many regions.

Language: English is standard for B2B professional communication in urban India. Hindi is appropriate for SME outreach in Hindi-speaking states. Regional languages (Tamil, Telugu, Kannada, Marathi, Bengali) may be relevant for localised campaigns targeting specific state markets.

**Step 4: Identify data sources.**

This is where the overlay becomes competitively valuable. India has data sources that the base plugin does not reference:

| Data Source | What It Provides | Equivalent in Other Markets |
| --- | --- | --- |
| **MCA (Ministry of Corporate Affairs)** | Company filings, director details, incorporation data, annual returns | Companies House (UK), SECP (Pakistan) |
| **Naukri.com** | Hiring activity signals, job postings, company profiles, 60M+ CVs | LinkedIn Jobs, Rozee.pk (Pakistan) |
| **TRAI DND Registry** | Do Not Disturb status for phone numbers | PTA DND registry (Pakistan) |
| **IndiaMART** | B2B marketplace; supplier and buyer activity signals | Alibaba, TradeKey |
| **Zaubacorp / Tofler** | Enhanced company intelligence from MCA filings | Dun & Bradstreet, similar enrichment services |

**Step 5: Write the overlay file.**

```markdown
---
name: india-outreach-law-overlay
version: 1.0
applies-to: "India / Indian outreach / DPDP Act / TRAI / Mumbai /
  Bangalore / Delhi NCR / Hyderabad / Chennai / Indian business contacts"
chapter: 23 -- Sales, RevOps & Marketing
---

## GOVERNING FRAMEWORK

This overlay provides awareness for automated systems generating outreach
content targeting India-based prospects. This is NOT legal advice. Consult
qualified legal counsel for compliance requirements.

### Digital Personal Data Protection Act, 2023 (DPDP Act)

India's comprehensive data protection law. Key provisions:

- Processing personal data requires lawful basis (consent or
  specified legitimate uses)
- Data fiduciaries must maintain accuracy and delete data after purpose
- Extra-territorial: applies to foreign entities processing Indian
  personal data
- Penalties: up to INR 250 crore per violation
- Data Protection Board of India oversees compliance

### TRAI Regulations (Telecom Commercial Communications)

- DND registry: check before any SMS or voice outreach
- Commercial SMS requires registered sender ID and opt-out mechanism
- Unsolicited commercial communication to DND-registered numbers
  is prohibited; penalties include disconnection of telecom services

### Cultural Considerations

- Enterprise B2B: formal procurement, RFP-driven
- SME B2B: relationship networks, industry associations (CII, FICCI)
- Timing: business hours 9:30-18:30 IST; Diwali, Holi major holidays
- Language: English standard for B2B; Hindi for SME in Hindi belt;
  regional languages for state-specific campaigns

## KEY INDIA-SPECIFIC OUTREACH TRIGGERS

- DPDP Act: consent or legitimate use required for data processing;
  extra-territorial scope applies to foreign senders
- TRAI DND: check registry before SMS/voice; penalties for violations
- WhatsApp Business: API opt-in required (platform-enforced)
- MCA filings: primary data source for company intelligence
- Naukri.com: hiring signals and company growth indicators
- Regional variation: outreach strategy differs between Mumbai enterprise
  and Tier 2 city SME markets
```

Save this file to `skills/sales-marketing-global-router/references/jurisdictions/india-outreach-law.md`. The router will load it when it detects a prospect located in India.

## Skill Collision Resolution

When you extend the base plugin with market-specific capabilities, some of your extension skills will overlap with base skills. This is not a bug -- it is an architectural feature that requires a resolution pattern.

> **Skill collision:** When two skills (a base skill and an extension skill) both claim to handle the same type of query, creating ambiguity about which the router should load.

Three patterns resolve collisions. Each is appropriate for different situations.

### The Wrapper Pattern (Default)

The extension skill wraps the base skill, adding market-specific calibration before and after the base execution. The base skill runs unchanged; the wrapper adds context.

**When to use:** The base skill produces correct output that needs market-specific calibration -- ICP targeting, budget localisation, compliance checks, cultural tone adjustment.

**Example: Campaign Planning**

The base `campaign-planning.md` skill generates a campaign brief with audience definition, channel mix, budget allocation, and KPIs. For NexaFlow's South Asian expansion, the campaign brief needs three additions: PKR/INR budget localisation, WhatsApp Business as a primary channel (not just LinkedIn and email), and cultural timing constraints (Ramadan, Diwali, Eid).

```markdown
## Extension: South Asian Campaign Planning Wrapper

STEP 0 -- LOAD BASE SKILL
Load products/campaign-planning.md and execute its full workflow.

STEP 1 -- BUDGET LOCALISATION (post-base)
Convert all budget figures to the target market currency.
Apply local cost benchmarks:
- Pakistan: LinkedIn CPM PKR 2,000; Google CPC PKR 150;
  content article PKR 25,000
- India: LinkedIn CPM INR 500-800; Google CPC INR 50-200;
  content article INR 15,000-30,000

STEP 2 -- CHANNEL RECALIBRATION (post-base)
If target market is Pakistan or India:
  Add WhatsApp Business to channel mix (primary for SME segment)
  Add industry events and trade associations to channel mix
  Reduce LinkedIn weight for non-urban prospects

STEP 3 -- CULTURAL TIMING (post-base)
Check the market calendar:
- Pakistan: Ramadan, Eid-ul-Fitr, Eid-ul-Adha, 14 August
- India: Diwali, Holi, Republic Day, regional festivals
Block campaign launches during major holidays.
Adjust outreach volume during Ramadan (Pakistan) or Navratri (India).

STEP 4 -- COMPLIANCE OVERLAY (post-base)
Load the appropriate jurisdiction overlay and verify all
campaign elements comply with local regulations.
```

The base skill runs its complete workflow. The wrapper adds four post-processing steps that localise the output. If the base skill is updated (new features, improved workflow), the wrapper still works -- it processes the output, not the internals.

### The Override Pattern

The extension skill replaces the base skill entirely for a specific market or use case. The base skill does not run.

**When to use:** The base skill's assumptions are fundamentally wrong for your market. Patching the output is not enough -- the entire workflow needs to change.

**Example: Content Creation for Non-English Markets**

The base `content-creation.md` skill assumes English content. It generates articles, social posts, and email copy in English with English-language SEO considerations, English readability metrics, and English tone calibrations. For NexaFlow's Urdu content needs -- social media posts targeting Pakistani logistics operators who consume content in Urdu, marketing collateral for trade shows in Lahore and Karachi -- the entire content workflow must change.

```markdown
## Override: Urdu Content Creation

This skill REPLACES products/content-creation.md when the
target audience language is Urdu.

STEP 1 -- CONTENT BRIEF (replaces base Step 1)
Accept content brief in English or Urdu.
Identify target format, audience, and channel.
Note: Urdu is written right-to-left (RTL). All output must be
formatted for RTL display.

STEP 2 -- CONTENT GENERATION (replaces base Step 2)
Generate content in Urdu with:
- Proper Urdu grammar and idiom (not machine-translated English)
- Nastaliq script conventions for formal content
- Roman Urdu option for social media (WhatsApp, informal LinkedIn)
- Transliteration handling: technical terms may remain in English
  with Urdu explanation in parentheses

STEP 3 -- CULTURAL CALIBRATION (replaces base Step 3)
Apply Pakistani business culture norms:
- Formal tone for initial communications
- Appropriate Islamic greetings where culturally expected
- Avoid imagery or references that conflict with local norms

STEP 4 -- SEO AND DISTRIBUTION (replaces base Step 4)
Urdu SEO differs from English:
- Google Pakistan (google.com.pk) keyword research
- Roman Urdu search terms (many users search in Roman Urdu)
- Platform-specific optimisation (Facebook and YouTube have higher
  Urdu content consumption than LinkedIn in Pakistan)
```

The override completely replaces the base skill. The router entry must specify the trigger condition:

```markdown
| Content creation (Urdu / Pakistan market) | extensions/urdu-content-creation.md |
| Content creation (all other)              | products/content-creation.md        |
```

### The Delegation Pattern

The router decides which skill to load based on query context. Neither skill wraps nor overrides the other -- the router selects the right one.

**When to use:** Both skills are valid for different contexts, and the query itself contains enough information for the router to choose correctly.

**Example: Prospect Research**

The base `prospect-research.md` skill researches prospects using publicly available data -- LinkedIn, company websites, news sources, Companies House (UK), SEC filings (US). NexaFlow needs a South Asian research skill that uses SECP filings (Pakistan), MCA filings (India), Naukri.com hiring signals, and industry association membership directories.

Rather than wrapping or overriding, the router delegates based on the prospect's geography:

```markdown
## Router Delegation Rules (Prospect Research)

| Query Context | Skill Loaded | Reason |
| --- | --- | --- |
| Prospect in UK/EU/US | products/prospect-research.md | Base data sources cover these markets |
| Prospect in Pakistan | extensions/south-asian-prospect-research.md | SECP, Rozee.pk, LCCI/KCCI |
| Prospect in India | extensions/south-asian-prospect-research.md | MCA, Naukri.com, CII/FICCI |
| Prospect in GCC | products/prospect-research.md + GCC overlay | Base + cultural calibration |
| Geography unclear | products/prospect-research.md | Default to base; flag for enrichment |
```

The delegation pattern keeps both skills independent. The base skill is not modified. The extension skill is not a wrapper. The router simply selects the right tool for the job.

### Decision Table: Which Pattern to Use

| Situation | Pattern | Rationale |
| --- | --- | --- |
| Base output is correct but needs localisation | **Wrapper** | Add calibration without modifying base |
| Base assumptions are wrong for this market | **Override** | Replace the entire workflow |
| Both skills are valid for different contexts | **Delegation** | Let the router choose based on context |
| Base skill does not exist for this workflow | **New skill** | Create from scratch; no collision to resolve |

## Multi-Market Local Configuration

NexaFlow sells fleet management software in Pakistan, India, and the UAE. Each market has different ICP definitions, data sources, persona motivations, and cultural norms. A single `sales-marketing.local.md` file cannot serve all three.

### File Naming Convention

```
sales-marketing.local.pk.md     # Pakistan configuration
sales-marketing.local.in.md     # India configuration
sales-marketing.local.ae.md     # UAE configuration
sales-marketing.local.md        # Default / global fallback
```

The router loads the market-specific configuration based on the prospect's geography. If no market-specific file exists, it falls back to `sales-marketing.local.md`.

### What Differs Across Markets

| Configuration Element | Pakistan (PK) | India (IN) | UAE (AE) |
| --- | --- | --- | --- |
| **ICP company size** | 50-500 employees | 100-2,000 employees | 50-500 employees |
| **ICP revenue range** | PKR 200M-2B | INR 50Cr-500Cr | AED 10M-200M |
| **Primary data sources** | SECP, Rozee.pk, LCCI | MCA, Naukri.com, CII | DED, LinkedIn, GITEX |
| **Primary outreach channel** | WhatsApp Business | Email + LinkedIn | Formal email + referrals |
| **Persona: decision-maker** | MD/CEO (SME); VP Ops (enterprise) | VP Logistics; CTO (enterprise) | GM Operations; Procurement Head |
| **Persona motivation** | Cost reduction, fleet visibility | Scale across states, compliance | Operational efficiency, Emiratisation |
| **Budget: target CAC** | PKR 50,000 | INR 80,000 | AED 5,000 |
| **Cultural calibration** | Relationship-first; Ramadan timing | Regional variation; Diwali timing | Wasta networks; Ramadan timing |
| **Language** | English (B2B); Urdu (SME) | English (B2B); Hindi (SME) | English (international B2B) |

### What Stays the Same

The scoring model, the product file architecture, the router logic, the NEVER rules, the Five Laws of Outreach, and the agent scheduling framework are all market-independent. When you update the base `lead-scoring.md` skill to add a new scoring dimension, the update applies to all markets. When you refine the `outreach.md` skill's compliance check, the refinement applies everywhere.

This separation -- market-specific data in configuration files, market-independent logic in product files -- is what makes the architecture scalable. Adding a new market means creating a new local configuration file and (if needed) a new jurisdiction overlay. It does not mean rewriting the product files.

## Worked Example: NexaFlow's South Asian Extension

NexaFlow is expanding from Pakistan into India. Here is the complete extension package they build.

**1. Jurisdiction overlay:** `india-outreach-law.md` (built in the section above). Covers DPDP Act, TRAI DND registry, cultural considerations, and India-specific data sources.

**2. Local configuration:** `sales-marketing.local.in.md` with India-specific ICP criteria:

```markdown
## ICP Definition -- NexaFlow India

### Firmographic Criteria

Company size: 100-2,000 employees
Revenue range: INR 50 crore - 500 crore annual revenue
Stage: Established, operating 5+ years, multiple locations
Geography: Primary: Mumbai, Pune, Bangalore, Chennai, Delhi NCR;
           Secondary: Hyderabad, Ahmedabad, Kolkata
Industry: Logistics, freight forwarding, last-mile delivery, FMCG distribution
Technology maturity: Using basic fleet tracking; not yet on AI-powered routing

### Timing Signals (HOT -- prioritise immediately)

- Company wins large distribution contract (visible in MCA filings or press)
- New VP/Director of Logistics or Operations appointed (Naukri.com signal)
- Fleet size expansion (new vehicle registrations, job postings for drivers)
- Regulatory pressure (new emission norms, GST compliance requirements)
- Competitor displacement (incumbent fleet management vendor contract ending)

### Persona: Primary -- VP of Logistics

Motivation: Reduce per-km cost; improve on-time delivery rate; scale
            operations across states without proportional headcount increase
Fear: Vendor lock-in; integration complexity with existing ERP (SAP, Tally);
      resistance from drivers and field staff
Trigger: Board mandate to reduce logistics cost by 15% within 12 months
Tone: Professional, data-driven. Lead with ROI. Indian enterprise buyers
      expect quantified business cases before agreeing to a demo.
```

**3. Skill collision resolutions:**

| Collision | Pattern | Implementation |
| --- | --- | --- |
| Campaign planning | Wrapper | Base + INR budgets + WhatsApp channel + Diwali timing |
| Prospect research | Delegation | Router loads South Asian skill for Indian prospects |
| Content creation (Hindi) | Override | Full Hindi content workflow replaces English base |
| Lead scoring | No collision | Base scoring model works; ICP criteria come from local config |
| Outreach | Wrapper | Base + DPDP compliance check + cultural tone calibration |

**4. WhatsApp Business adaptation:** NexaFlow's Indian sales team uses WhatsApp Business API as a primary outreach channel for the SME logistics segment. The extension includes WhatsApp-specific templates:

- Initial connection message (after warm introduction via CII/FICCI network)
- Fleet management ROI calculator share (PDF via WhatsApp Business)
- Case study delivery (video testimonial from existing Pakistani logistics client operating in India)

**5. Data source connectors:** The South Asian prospect research extension adds MCA filing lookups (company registration, director details, annual returns), Naukri.com hiring signal monitoring (logistics job postings = fleet expansion signal), and IndiaMART buyer activity tracking.

## Extension Testing

Extensions are only valuable if they work correctly. Three layers of testing verify that they do.

**Layer 1: Routing test.** Does the router load the correct overlay and configuration when it detects a prospect in the extension's market?

```
Test: "Research Priya Sharma, VP Logistics at FastTrack Deliveries, Mumbai"
Expected: Router loads india-outreach-law.md + sales-marketing.local.in.md
          + delegates to south-asian-prospect-research extension
Verify: Check the output header. It should show:
        CONFIGURATION: Loaded: sales-marketing.local.in.md
```

**Layer 2: Output quality test.** Does the output reflect market-specific ICP and cultural calibration?

```
Test: "Score this lead: Rajesh Mehta, CEO, 150-person logistics company
       in Pune, INR 80 crore revenue, just won an FMCG distribution contract"
Expected: ICP match scored against India-specific criteria (not UK/US defaults)
          Revenue evaluated in INR against INR benchmarks
          Timing signal (new contract) recognised as HOT
Verify: Score breakdown references India ICP criteria, not generic benchmarks
```

**Layer 3: Compliance test.** Does outreach comply with the jurisdiction's regulatory requirements?

```
Test: "Draft outreach to Rajesh Mehta. Channel: WhatsApp Business."
Expected: WhatsApp Business API opt-in requirement noted
          DPDP Act compliance flagged
          Cultural tone appropriate for Indian enterprise B2B
          No cold WhatsApp message generated without prior introduction
Verify: Output includes compliance notes and human review requirement
```

Run all three layers for every new overlay and configuration file before deploying. A routing failure means the wrong overlay loads -- potentially generating non-compliant outreach. An output quality failure means the extension adds no value over the base. A compliance failure means legal risk.

---

## Try With AI

### Prompt 1: Draft a Jurisdiction Overlay for Your Market

```
I need to build a jurisdiction overlay for [your country/market] for
the Sales & Marketing plugin.

Here is the structure I need to follow (from the existing overlays):
1. YAML frontmatter with name, version, and applies-to trigger terms
2. Governing framework section with the primary legislation affecting
   commercial outreach in this market
3. Channel-specific rules (email, SMS, WhatsApp, LinkedIn, phone)
4. Cultural and religious considerations for B2B outreach
5. Key market-specific outreach triggers (summary)

Research the applicable regulations for [your country]:
- What is the primary data protection law? When was it enacted?
- Is cold email permitted for B2B? Under what conditions?
- What are the penalties for non-compliance?
- What channels are dominant for B2B outreach in this market?
- What cultural norms affect outreach timing and tone?

Then write the complete overlay file in the same format as the
existing Pakistan (PECA), EU (GDPR), US (CAN-SPAM), and GCC
(TRA) overlays.

Note: This is for educational purposes. I would consult local
legal counsel before using this in production.
```

**What you are learning:** The jurisdiction overlay is a structured artifact -- not a research paper, not a compliance checklist, but a configuration file that the router loads and applies automatically. By building one for your market, you are learning to encode regulatory knowledge into a format that an AI agent can consume and enforce. The skill transfers to any domain plugin -- legal, HR, procurement -- wherever jurisdiction-specific rules govern agent behaviour.

### Prompt 2: Compare Two Markets

```
I sell [your product/service] to [your target buyer type].
I operate in two markets: [Market A] and [Market B].

For each market, generate:
1. A local configuration snippet (ICP definition, primary data sources,
   dominant outreach channel, persona profile for the decision-maker,
   cultural calibration notes)
2. An outreach message to a prospect who matches the ICP (using the
   culturally appropriate channel, tone, and greeting for each market)

Then compare the two outputs side by side:
- What changed between markets?
- What stayed the same?
- Which differences are driven by regulation (compliance) and which
  by culture (effectiveness)?
- If I were to serve both markets from a single plugin installation,
  what would need to be in separate configuration files and what
  could remain in a shared base?
```

**What you are learning:** Multi-market configuration is about separating what varies (ICP criteria, data sources, cultural norms, regulatory requirements) from what is stable (scoring model, product file logic, NEVER rules, router architecture). This prompt forces you to make that separation explicit. The side-by-side comparison reveals which differences are regulatory (you must comply) and which are cultural (you should adapt) -- a distinction that determines whether you need an override, a wrapper, or just a different configuration file.

### Prompt 3: Design a Multi-Market Deployment

```
I am planning to serve three markets from a single Sales & Marketing
plugin installation: [Market 1], [Market 2], [Market 3].

For each market, I need:
1. A jurisdiction overlay (or confirmation that an existing one covers it)
2. A market-specific local configuration file
3. A list of skill collisions with the base plugin and the resolution
   pattern for each (wrapper, override, or delegation)

Design the complete extension package:
- File naming convention for the three local configuration files
- Router rules for selecting the correct configuration and overlay
- Any new extension skills needed (and whether they are wrappers,
  overrides, or new skills)
- Testing plan: what routing tests, output quality tests, and
  compliance tests would I run for each market?

Present this as a deployment plan I could hand to an implementation
team.
```

**What you are learning:** A multi-market deployment plan is the productization step -- transforming domain knowledge into a structured, testable, deployable artifact. The plan forces you to think about the router's decision logic (how does it know which market to serve?), the configuration's scope (what differs per market?), the collision resolution strategy (which base skills need modification?), and the testing methodology (how do you verify it works?). This is the skill that turns a plugin user into a plugin builder.

---

Continue to [Lesson 12: Applied Exercises ->](./12-applied-exercises.md)
