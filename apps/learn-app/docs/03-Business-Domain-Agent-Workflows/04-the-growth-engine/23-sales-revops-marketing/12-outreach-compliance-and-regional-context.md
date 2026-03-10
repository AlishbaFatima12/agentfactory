---
sidebar_position: 12
title: "Outreach Compliance and Regional Context"
description: "Navigate CAN-SPAM, GDPR, and PECA compliance for automated outreach, configure jurisdiction overlays, handle cultural mismatch between legal compliance and relationship norms, and localise budgets across currencies"
keywords:
  [
    "CAN-SPAM",
    "GDPR",
    "PECA",
    "outreach compliance",
    "jurisdiction overlays",
    "opt-in consent",
    "opt-out consent",
    "cultural mismatch",
    "regional sales culture",
    "budget localisation",
    "ethical outreach",
    "Pakistan B2B",
    "compliance gap",
  ]
chapter: 23
lesson: 12
duration_minutes: 25

# HIDDEN SKILLS METADATA
skills:
  - name: "Configure Jurisdiction-Aware Compliance Overlays"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Safety"
    measurable_at_this_level: "Student can identify the applicable regulation for a given jurisdiction, state its consent model, and configure the plugin's compliance overlay to enforce correct rules"

  - name: "Diagnose Cultural Mismatch in Cross-Border Outreach"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Communication and Collaboration"
    measurable_at_this_level: "Student can identify when outreach is legally compliant but culturally inappropriate, and propose adaptations that respect both legal and relationship norms"

  - name: "Evaluate Compliance Gap Severity (Legal vs Ethical vs Effective)"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Safety"
    measurable_at_this_level: "Student can distinguish between outreach that violates the letter of the law, the spirit of the law, or cultural expectations, and rank severity accordingly"

learning_objectives:
  - objective: "Configure jurisdiction overlays for 3 different regulatory environments and verify that automated outreach complies with each"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student configures GDPR, CAN-SPAM, and PECA overlays and demonstrates compliant output in each jurisdiction"

  - objective: "Identify cultural mismatch where legally compliant outreach fails relationship norms"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student evaluates the same outreach message for Karachi, Frankfurt, and Houston markets and identifies cultural mismatches"

  - objective: "Localise campaign budgets across PKR, USD, and GBP with appropriate channel strategy adjustments"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces budget breakdowns in 3 currencies with channel strategies adapted to each market"

cognitive_load:
  new_concepts: 7
  concepts_list:
    - "Jurisdiction overlay as compliance configuration"
    - "CAN-SPAM (US — opt-out model)"
    - "GDPR (EU — opt-in model with explicit consent)"
    - "PECA (Pakistan — evolving digital commerce regulation)"
    - "Cultural mismatch (legal compliance ≠ cultural appropriateness)"
    - "Budget localisation across currencies and markets"
    - "Three-tier Compliance Gap: letter of law vs spirit of law vs cultural norms"
  assessment: "7 concepts at B1 level. Three regulations are the factual core. Cultural mismatch is the higher-order insight. Budget localisation is practical application."

differentiation:
  extension_for_advanced: "Research the compliance requirements for 2 additional jurisdictions your business operates in (UAE, India, Singapore, etc.). Configure overlays for each. Identify which jurisdiction has the most restrictive consent model and design outreach that satisfies ALL jurisdictions simultaneously."
  remedial_for_struggling: "Focus on the key distinction: GDPR requires opt-IN (you need permission before contact), CAN-SPAM allows opt-OUT (you can contact but must honour removal requests). If you can configure the correct model for each, you have the compliance foundation."
---

# Outreach Compliance and Regional Context

In Lesson 5, you built multi-touch sequences that cross channels and time zones. In Lesson 9, you assembled RevOps agents that automate research, scoring, and outreach at scale. Now ask a harder question: is the outreach those agents produce actually legal where you are sending it?

A message that earns a reply in Houston earns a fine in Frankfurt. A sequence that follows every rule in the CAN-SPAM handbook destroys a relationship in Karachi because the rules say nothing about how business gets done in Pakistan. This lesson sits at the intersection of three forces: the law, the culture, and the budget. Get any one of them wrong and your outreach fails -- not because the copy was weak, but because the context was wrong.

The **Compliance Gap** you first encountered in Lesson 4 was a binary question: does this message include an opt-out line? Here it becomes a three-tier diagnostic. Does the outreach violate the letter of the law? The spirit of the law? Or the cultural expectations of the market? All three matter. The last one is invisible to every compliance checklist ever written, and it is the one that determines whether your prospect reads your message or blocks your number.

## Three Jurisdictions, One Message

Imagine NexaFlow Technologies in Karachi wants to send outreach to prospects in three cities: Houston, Frankfurt, and Karachi itself. The product is the same. The value proposition is the same. The legal environment is completely different.

### Houston: CAN-SPAM (Opt-Out Model)

The **CAN-SPAM Act** governs commercial email in the United States. Its core principle is an **opt-out model**: you can send commercial email to a business contact without prior consent, provided you follow the rules.

| Requirement | What It Means |
|-------------|---------------|
| **Opt-out mechanism** | Every commercial email must include a clear, conspicuous way to unsubscribe. The mechanism must remain functional for at least 30 days after the message is sent |
| **Honour opt-outs within 10 business days** | Once a recipient requests removal, you have 10 business days to stop sending. No exceptions, no "one last email" |
| **Valid physical postal address** | Every message must include the sender's current street address, PO box, or registered commercial mail address |
| **Accurate sender identification** | The "From" line and subject line must not be deceptive |
| **Commercial content identified** | The message must be identifiable as an advertisement (though the law does not require a specific label) |
| **Penalty per violation** | Up to $53,088 per non-compliant email sent |

**The key insight for CAN-SPAM:** You do not need permission to send the first email. You need permission to send the second one after the recipient opts out. The burden is on the recipient to say stop, and the burden is on you to honour that request fast.

For NexaFlow's Houston outreach, the `outreach` skill configured with a CAN-SPAM overlay automatically appends:

```
NexaFlow Technologies, Suite 400, 123 Main Street, Houston, TX 77002
To stop receiving these messages, reply STOP or click here to unsubscribe.
```

That footer handles four CAN-SPAM requirements in two lines: physical address, opt-out mechanism, sender identification, and commercial identification.

### Frankfurt: GDPR (Opt-In Model)

The **General Data Protection Regulation** governs data processing across the European Union and the European Economic Area. For B2B cold outreach, the relevant legal basis is **legitimate interest** -- but the requirements are substantially stricter than CAN-SPAM.

| Requirement | What It Means |
|-------------|---------------|
| **Lawful basis required** | You must document a legitimate interest before sending. The message must be relevant to the recipient's professional role |
| **Professional addresses only** | Contact prospects at business email addresses. Personal addresses (Gmail, Yahoo) require explicit consent |
| **Data source disclosure** | You must tell the recipient how you obtained their email address |
| **Right to object (opt-out)** | Every message must include an easy opt-out. Honour it immediately -- not within 10 days, immediately |
| **Right to erasure** | On request, you must delete all personal data you hold about the recipient. Not just stop emailing -- delete the record |
| **Data minimisation** | Collect and process only the data necessary for your stated purpose |
| **Penalty range** | Up to 4% of annual global turnover or EUR 20 million, whichever is higher |

**The key insight for GDPR:** The burden is on the sender to justify every message before it is sent. You cannot send first and ask forgiveness later. Your legitimate interest assessment must be documented. Your data source must be disclosed. And unlike CAN-SPAM, the recipient can demand you delete everything -- not just stop sending.

For NexaFlow's Frankfurt outreach, the GDPR overlay transforms the message:

```
This message is sent on the basis of legitimate interest relating to
your role as [title] at [company]. Your contact details were obtained
from [LinkedIn / your company website / conference speaker list].

You have the right to object to this processing at any time. To
unsubscribe or request deletion of your data, reply to this email
or contact privacy@nexaflow.pk.

NexaFlow Technologies (Pvt.) Ltd, Clifton, Karachi 75600, Pakistan
```

Notice the differences from the CAN-SPAM footer. GDPR requires a stated legal basis ("legitimate interest relating to your role"), a data source disclosure ("obtained from LinkedIn"), and a deletion option ("request deletion of your data") that CAN-SPAM does not require.

### Karachi: PECA (Evolving Framework)

Pakistan's **Prevention of Electronic Crimes Act (PECA)**, enacted in 2016 and amended in 2025, regulates unsolicited electronic communication. It is less prescriptive than CAN-SPAM or GDPR but carries its own requirements.

| Requirement | What It Means |
|-------------|---------------|
| **Opt-out required** | Any institution engaged in direct marketing must provide the recipient the option to unsubscribe |
| **Explicit rejection honoured** | Sending unsolicited commercial communication against the explicit rejection of the recipient is an offence under PECA |
| **Spamming offence** | Bulk unsolicited messaging for commercial purposes, particularly after rejection, can result in criminal penalties |
| **Evolving enforcement** | PECA's digital commerce provisions are actively being developed; enforcement is inconsistent but the legal risk is real |

**The key insight for PECA:** The law requires an opt-out mechanism and prohibits continued contact after explicit rejection -- similar to CAN-SPAM in principle. But the enforcement environment is evolving. The larger risk in Pakistan is not legal but cultural. PECA compliance is the floor. Relationship norms are the ceiling.

For NexaFlow's Karachi outreach, the PECA overlay adds:

```
To stop receiving these messages, reply with "unsubscribe" and we
will remove you from our list immediately.

NexaFlow Technologies (Pvt.) Ltd, Clifton, Karachi 75600
```

Simpler than GDPR. No data source disclosure required. No legitimate interest statement. But note: the cultural context of Karachi B2B will demand far more than this legal minimum.

## The Jurisdiction Comparison

Here is the same outreach requirement across all three jurisdictions, side by side:

| Dimension | Houston (CAN-SPAM) | Frankfurt (GDPR) | Karachi (PECA) |
|-----------|-------------------|-------------------|----------------|
| **Consent model** | Opt-out (send first, honour removal) | Legitimate interest (justify before sending) | Opt-out (provide unsubscribe option) |
| **Prior permission** | Not required for first contact | Not required if legitimate interest documented | Not required for first contact |
| **Opt-out timeline** | 10 business days | Immediate | Immediate on explicit rejection |
| **Physical address** | Required in every email | Required (data controller details) | Required (sender identification) |
| **Data source disclosure** | Not required | Required | Not required |
| **Right to deletion** | Not required | Required | Not specified |
| **Personal email addresses** | Allowed | Prohibited without explicit consent | No specific restriction |
| **Maximum penalty** | $53,088 per email | 4% of global turnover or EUR 20M | Criminal penalties under PECA |

**The practical rule:** If you sell across all three jurisdictions, configure for GDPR. A GDPR-compliant message satisfies CAN-SPAM and PECA automatically. A CAN-SPAM-compliant message may violate GDPR. Always design for the strictest jurisdiction in your target set.

## Configuring Jurisdiction Overlays

A **jurisdiction overlay** is a compliance configuration that the plugin applies on top of your outreach content. It does not change the message body. It changes the legal wrapper around it: the footer, the consent mechanism, the data disclosures, and the handling rules for opt-out requests.

Add overlays to your `sales-marketing.local.md`:

```yaml
compliance:
  jurisdictions:
    us:
      regulation: "CAN-SPAM"
      consent_model: "opt-out"
      opt_out_deadline_days: 10
      physical_address_required: true
      data_source_disclosure: false
      deletion_right: false
      footer_template: "can-spam-standard"

    eu:
      regulation: "GDPR"
      consent_model: "legitimate-interest"
      opt_out_deadline_days: 0  # immediate
      physical_address_required: true
      data_source_disclosure: true
      deletion_right: true
      personal_email_blocked: true
      footer_template: "gdpr-standard"

    pk:
      regulation: "PECA"
      consent_model: "opt-out"
      opt_out_deadline_days: 0  # immediate on rejection
      physical_address_required: true
      data_source_disclosure: false
      deletion_right: false
      footer_template: "peca-standard"

  default_jurisdiction: "eu"  # strictest as default
```

The `default_jurisdiction: "eu"` line is the safety net. If you do not specify a prospect's jurisdiction when activating the `outreach` skill, the plugin applies GDPR rules. That protects you from accidentally under-complying. Over-compliance never creates legal risk. Under-compliance can.

Now when you run outreach, specify the jurisdiction:

```
Write outreach for NexaFlow-prospect-001, jurisdiction US
Write outreach for NexaFlow-prospect-004, jurisdiction EU
Write outreach for NexaFlow-prospect-007, jurisdiction Pakistan
```

The `outreach` skill reads the overlay for each jurisdiction and appends the correct footer, applies the correct consent rules, and flags any violations before you see the output.

## Cultural Mismatch: When Legal Compliance Is Not Enough

Here is the problem that no jurisdiction overlay can solve.

NexaFlow generates a cold outreach email for a Karachi prospect -- Imran Malik, CEO of a 120-person supply-chain company. The message passes every PECA requirement. It has an opt-out line. It identifies the sender. It is not spam. It is legal.

```
Subject: Route optimisation for your Karachi-Lahore corridor

Hi Imran,

Your company moves 8,000+ shipments monthly between Karachi and
Lahore. Based on publicly available data, your fleet utilisation
dropped 12% last quarter while fuel costs rose 18%.

NexaFlow's route optimisation platform reduced corridor costs
by 31% for a similar freight company. Would a 15-minute call
on Tuesday or Wednesday work to discuss?

Best,
Tariq
NexaFlow Technologies

To unsubscribe, reply STOP.
```

**Five Laws audit:** Law 1 (Specific Reference) -- pass. Law 2 (Lead with Prospect) -- pass. Law 3 (One Ask) -- pass. Law 4 (Word Limit) -- pass at 82 words. Law 5 (Zero Jargon) -- pass.

**PECA compliance:** Opt-out mechanism present. Sender identified. Not spam.

**Cultural verdict:** This message will not get a response.

### Why It Fails in Karachi

In Pakistan's B2B environment -- particularly in Karachi's commercial sector -- business relationships are built through **trust networks and warm introductions**. A cold email from an unknown sender, no matter how well-researched, violates the implicit norm that serious business conversations begin with a mutual connection.

The message is not offensive. It is not rude. It is invisible. Imran will read it, recognise it as a cold pitch from someone he does not know, and delete it. He might even respect the research. He will not respond, because responding to a cold outreach from a stranger signals that he is open to unsolicited pitches -- and in Karachi's business culture, that signal carries a social cost.

**The cultural fix is not in the message. It is in the channel.**

A WhatsApp message forwarded by a mutual connection -- "Imran bhai, my friend Tariq at NexaFlow has something relevant to your corridor problem, worth a chat" -- would earn a response within hours. The same information, the same value proposition, but delivered through a relationship channel rather than a cold channel.

### The Cultural Mismatch Diagnostic

**Cultural mismatch** occurs when outreach is legally compliant but culturally inappropriate for the target market. The agent cannot detect this because cultural norms are not encoded in PECA, GDPR, or CAN-SPAM. This is your domain expertise.

| Dimension | Houston | Frankfurt | Karachi |
|-----------|---------|-----------|---------|
| **Cold email acceptance** | Standard practice. Expected. | Accepted if relevant and compliant | Tolerated but rarely effective for B2B |
| **Primary B2B channel** | Email + LinkedIn | Email + XING/LinkedIn | WhatsApp + in-person + referrals |
| **Relationship requirement** | Optional (nice to have) | Moderate (builds over time) | Mandatory (business starts with trust) |
| **Cold call culture** | Common and accepted | Acceptable if brief and professional | Effective only with a warm introduction |
| **Response to cold outreach** | Will reply if value proposition is strong | Will reply if GDPR-compliant and relevant | Will delete unless introduced by a trusted contact |
| **What earns trust** | Data, case studies, credentials | Process, certifications, references | Personal connections, shared networks, face time |

This table should live in your `sales-marketing.local.md` as a reference for anyone on your team configuring regional outreach. The plugin does not enforce cultural norms, but your team's playbook should.

### Adapting the NexaFlow Message for Karachi

Instead of the cold email above, NexaFlow's Karachi playbook should use a two-step approach:

**Step 1: Identify the mutual connection.** Use `/research-prospect` to find shared LinkedIn connections, industry association memberships, or conference co-attendees. In Karachi's business community, two degrees of separation covers most of the market.

**Step 2: Request a warm introduction via WhatsApp.** The message goes to the mutual connection, not to the prospect:

```
Asad bhai — I noticed your connection Imran Malik at [Company]
is running 8,000+ monthly shipments on the Karachi-Lahore corridor.
We helped a similar freight company reduce corridor costs by 31%.
Would you be comfortable making an introduction? Happy to share
the case study for context.
```

This is not a workaround. This is how B2B sales works in Pakistan. The mutual connection becomes the trust bridge that no amount of Five Laws-compliant cold copy can replace.

## Failure Analysis: The Spirit vs the Letter

Read this outreach message. It was sent to a GDPR-zone prospect in Frankfurt.

```
Subject: Quick check-in

Hi Marcus,

Just checking in to see how things are going at [Company].
We've been working with several firms in your space and
thought you might find our platform interesting.

Let me know if you'd like to learn more!

Best,
Sarah

—
MegaCorp Inc.
123 Commerce Drive, Austin, TX 78701

To opt out, click here: [link]
Sent to: marcus.weber@personal-email.de
Data obtained from: purchased list
```

### Three-Tier Compliance Gap Analysis

**Tier 1: Does it violate the letter of the law?**

Yes. Two violations.

First, the message was sent to a personal email address (`personal-email.de`). Under GDPR, cold B2B outreach to personal email addresses requires explicit consent, not legitimate interest. Marcus did not consent. The message is unlawful.

Second, the data source is a "purchased list." GDPR requires that the data subject be informed of the source of their data and that the data was lawfully obtained. A purchased list with personal email addresses almost certainly fails the lawful processing requirement.

**Tier 2: Does it violate the spirit of the law?**

Yes. Three problems beyond the letter violations.

The opt-out link says "click here" with no mention of data deletion rights. Under GDPR, Marcus has the right to request complete deletion of his data -- not just removal from a mailing list. The message offers CAN-SPAM-level opt-out in a GDPR jurisdiction.

The legitimate interest basis is not stated. GDPR requires transparency about why you are processing the recipient's data. "Just checking in" does not disclose a business purpose.

The sender identification says "MegaCorp Inc." with an Austin, Texas address but provides no EU data controller information, no privacy contact, and no reference to how GDPR rights can be exercised.

**Tier 3: Does it violate cultural expectations?**

Yes. German business culture values precision and directness. "Just checking in" is the opposite of both. It communicates that the sender has nothing specific to say. Marcus will classify this as spam regardless of the opt-out link.

"Several firms in your space" is a Law 1 violation from Lesson 4 -- no specific reference. In a market that values thoroughness, generic positioning reads as laziness.

### Severity Ranking

| Tier | Violation | Severity | Consequence |
|------|-----------|----------|-------------|
| **Letter of law** | Personal email address without consent | **Critical** | Reportable to DPA; potential fine up to 4% of global turnover |
| **Letter of law** | Purchased list as data source | **Critical** | Data processing without lawful basis |
| **Spirit of law** | No deletion rights offered | **High** | Incomplete GDPR compliance even if other issues fixed |
| **Spirit of law** | No legitimate interest stated | **High** | Transparency violation |
| **Cultural norms** | "Just checking in" in German B2B | **Moderate** | Message deleted; sender reputation damaged |
| **Cultural norms** | No specific reference | **Moderate** | Perceived as low-effort mass mailing |

The three-tier diagnostic gives you a framework. Letter-of-law violations are legal risks. Spirit-of-law violations are ethical risks. Cultural violations are effectiveness risks. A message can fail on any tier independently. The worst outreach fails on all three.

## Budget Localisation

The same campaign does not cost the same in every market. Channel economics, audience behaviour, and currency purchasing power change the strategy.

NexaFlow wants to run a Q2 lead generation campaign across three markets. Here is the same business goal -- generate 50 qualified leads -- with three different budgets:

### PKR 500,000 (~$1,800 USD): Karachi Market

At this budget, paid digital advertising is uneconomical. The cost per lead on LinkedIn Ads in Pakistan ranges from $8-15 for B2B audiences. That buys 120-225 impressions-to-lead conversions -- but the conversion quality from cold ads in a relationship-driven market is poor.

| Channel | Allocation | Why |
|---------|-----------|-----|
| **WhatsApp Business campaigns** | PKR 50,000 (~$180) | WhatsApp broadcast lists to warm contacts. Near-zero cost per message. Highest response rate in Pakistan B2B |
| **Local industry events** | PKR 200,000 (~$720) | Sponsor one table at a KCCI or FPCCI event. Face-time builds the trust that cold channels cannot |
| **LinkedIn organic** | PKR 0 | Post 3x/week from founder account. Comment on prospect posts. Build visibility without ad spend |
| **Referral incentives** | PKR 100,000 (~$360) | Reward existing customers for warm introductions. PKR 5,000-10,000 per qualified referral |
| **Content creation** | PKR 150,000 (~$540) | Urdu/English case studies, WhatsApp-optimised one-pagers, short video testimonials |

**Channel strategy:** Relationship-first. Events and referrals generate trust. WhatsApp delivers the follow-up. LinkedIn builds visibility. No cold email budget because cold email ROI in Pakistan B2B is near zero for companies without brand recognition.

### $50,000 USD: Houston Market

Digital channels are cost-effective in the US market. LinkedIn Ads cost $5-12 per click for B2B audiences, and email infrastructure supports high-volume personalised outreach.

| Channel | Allocation | Why |
|---------|-----------|-----|
| **LinkedIn Ads** | $15,000 | Sponsored content + InMail targeting ICP titles. US B2B buyers expect and respond to LinkedIn outreach |
| **Google Ads (search)** | $10,000 | Capture intent-based searches. "Route optimisation software" and related terms |
| **Content marketing** | $8,000 | 4 blog posts, 2 whitepapers, 1 ROI calculator. Content fuels both organic and paid channels |
| **Email outreach platform** | $5,000 | Outreach tool subscription + domain warming. Supports the sequences from Lesson 5 |
| **Small events / webinars** | $7,000 | Host 2 virtual events. Co-host with a complementary vendor for audience sharing |
| **ABM targeting** | $5,000 | Account-based display ads for top 20 named accounts from Lesson 7 |

**Channel strategy:** Multi-channel, data-driven. Paid digital generates leads at measurable cost per acquisition. Email sequences nurture. Events build authority. ABM captures high-value accounts.

### GBP 25,000 (~$31,500 USD): London Market

The UK market sits between the US and Pakistan in channel behaviour. Digital channels work, but the market is GDPR-constrained, relationship-conscious, and expensive.

| Channel | Allocation | Why |
|---------|-----------|-----|
| **LinkedIn Ads** | GBP 8,000 | UK B2B responds well to LinkedIn. Higher CPC than US ($8-18) but strong targeting |
| **Account-based outreach** | GBP 5,000 | Personalised direct mail (yes, physical mail) to 50 named accounts. UK prospects notice a well-researched physical package |
| **Industry events** | GBP 6,000 | Attend 2 logistics conferences. UK B2B values in-person credibility |
| **Content marketing** | GBP 4,000 | 3 case studies localised for UK logistics. Reference UK-specific regulations and market data |
| **Email (GDPR-compliant)** | GBP 2,000 | Smaller volume than US. Every email must meet GDPR legitimate interest standard. Quality over quantity |

**Channel strategy:** Quality over volume. GDPR constraints reduce email volume, so budget shifts toward LinkedIn, events, and account-based direct mail. Physical mail cuts through digital noise in a market where inboxes are heavily filtered.

### Budget Localisation Summary

| Dimension | Karachi (PKR 500K) | Houston ($50K) | London (GBP 25K) |
|-----------|-------------------|----------------|-------------------|
| **Primary channel** | WhatsApp + events | LinkedIn Ads + email | LinkedIn Ads + events |
| **Cold email viability** | Low (relationship market) | High (opt-out model) | Moderate (GDPR-constrained) |
| **Cost per qualified lead** | ~PKR 10,000 ($36) | ~$800-1,200 | ~GBP 400-600 ($500-750) |
| **Trust-building channel** | In-person + referrals | Content + webinars | Events + direct mail |
| **Compliance overhead** | Low (PECA baseline) | Moderate (CAN-SPAM) | High (GDPR) |

The agent's `/plan-campaign` command can generate budget breakdowns across jurisdictions. But it cannot make the channel strategy decisions that depend on cultural knowledge. The decision to spend PKR 200,000 on a KCCI event instead of LinkedIn Ads is a judgment call rooted in understanding how Karachi's business community works. The agent provides the numbers. You provide the market intelligence.

## Hands-On: Configure Your Compliance Overlays

### Exercise 1: Jurisdiction Configuration

List every jurisdiction where your business sends outreach. For each one, answer these questions:

1. What regulation governs commercial email? (CAN-SPAM, GDPR, PECA, CASL, or other)
2. Is the consent model opt-in or opt-out?
3. Is data source disclosure required?
4. Does the recipient have a right to data deletion?
5. What is your maximum penalty exposure?

Add the overlay configuration to your `sales-marketing.local.md` using the YAML format from the configuring section above.

### Exercise 2: The Same Message, Three Markets

Write one outreach message for a prospect you are actively pursuing. Then adapt it for three different jurisdictions:

1. Activate the `outreach` skill for your prospect with US jurisdiction and audit the footer for CAN-SPAM compliance
2. Activate the `outreach` skill with EU jurisdiction and audit for GDPR compliance (legitimate interest stated? Data source disclosed? Deletion right offered?)
3. Activate the `outreach` skill with Pakistan jurisdiction and evaluate: is this message culturally appropriate for Pakistan B2B, or does it need a different channel strategy?

For the Pakistan version, decide whether the message should be an email at all. If not, draft the WhatsApp warm-introduction request instead.

### Exercise 3: Budget Localisation

Pick one campaign you are planning. Budget it across two currencies for two different markets. For each market:

1. Calculate the cost per lead you can afford at your budget
2. Select channels based on that market's B2B communication norms
3. Identify which channels are uneconomical at your budget level
4. Determine whether you need a relationship-first or content-first approach

Use `/plan-campaign --budget [amount] --currency [code] --jurisdiction [code]` to generate the initial breakdown, then adjust based on your market knowledge.

## Try With AI

Use these prompts in your preferred AI assistant.

**Prompt 1: Jurisdiction Compliance Audit**

```
I send B2B outreach to prospects in these jurisdictions:
[list your target countries/regions]

For each jurisdiction:
1. What law governs commercial email?
2. Is the consent model opt-in or opt-out?
3. What must appear in every outreach message (footer, disclosures)?
4. What are the penalties for non-compliance?
5. Can I send to personal email addresses?

Then review this outreach message and run a three-tier
compliance analysis:
- Tier 1: Does it violate the letter of the law?
- Tier 2: Does it violate the spirit of the law?
- Tier 3: Does it violate cultural expectations for this market?

[Paste your message here]

For each tier, tell me specifically what passes and what fails.
If anything fails Tier 1, that is a blocker — fix it before
evaluating Tier 2 or Tier 3.
```

**What you are learning:** The three-tier framework trains you to evaluate outreach on three independent dimensions. Most teams check only Tier 1 (is it legal?) and skip Tier 2 (is it ethical?) and Tier 3 (is it effective in this culture?). Running all three tiers for every jurisdiction builds the habit of thinking about compliance as a spectrum, not a checkbox.

**Prompt 2: Budget Localisation Across Markets**

```
I'm planning a lead generation campaign with these constraints:

Market A: [country], budget [amount in local currency]
Market B: [country], budget [amount in local currency]

For each market:
1. What are the dominant B2B outreach channels?
2. What is the typical cost per lead for my industry?
3. Given my budget, which channels are viable and which are
   uneconomical?
4. Is cold email effective in this market, or do I need a
   relationship-first approach?
5. What compliance requirements constrain my channel options?

Build a channel allocation table for each market. Then compare:
which market gives me the lowest cost per qualified lead, and
which gives me the highest quality leads?
```

**What you are learning:** Budget localisation is not currency conversion. A $50,000 budget in the US and a PKR 500,000 budget in Pakistan buy fundamentally different strategies, not just different quantities of the same strategy. The AI helps you model the channel economics, but the market insight -- knowing that WhatsApp outperforms LinkedIn in Karachi, or that physical direct mail works in London -- comes from your domain expertise. This exercise forces the comparison that reveals how market context shapes strategy.
