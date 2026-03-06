---
name: sales-marketing-global-router
version: 1.0
description: >
  TOP-LEVEL ROUTER. Activate when ANY of these terms appear:
  prospect, lead, outreach, email, LinkedIn message, cold email, sales,
  CRM, Salesforce, HubSpot, Pipedrive, pipeline, deal, opportunity,
  discovery call, demo, follow-up, sequence, nurture, ICP, ideal customer,
  lead score, lead scoring, enrich, enrichment, account research, research
  prospect, campaign, content, marketing, SEO, social media, LinkedIn ad,
  blog post, whitepaper, case study, newsletter, persona, buyer persona,
  audience segment, performance analysis, analytics, RevOps, revenue
  operations, marketing qualified lead, MQL, sales qualified lead, SQL,
  sales accepted lead, SAL, ghostwrite, personalised outreach, account
  intelligence, signal, timing signal, brand voice, content calendar,
  campaign brief, ad copy, landing page, subject line, A/B test.
author: Panaversity — The AI Agent Factory
chapter: 23 — Sales, RevOps & Marketing
---

## STEP 1 — IDENTIFY TASK AND LOAD PRODUCT FILE

| Query Pattern                                | Load Product File                        |
|----------------------------------------------|------------------------------------------|
| Prospect/account research, account intel     | products/prospect-research.md            |
| Lead scoring, qualification, ICP match       | products/lead-scoring.md                 |
| CRM enrichment, data update, data hygiene    | products/crm-enrichment.md               |
| Outreach email, LinkedIn DM, cold message    | products/outreach.md                     |
| Multi-touch sequence, cadence                | products/sequence.md                     |
| Pre-call brief, pre-meeting, deal health     | products/pre-call-brief.md               |
| Follow-up after call/demo/meeting            | products/follow-up.md                    |
| Pipeline analysis, forecast, deal review     | products/pipeline.md                     |
| Content creation (any format)                | products/content-creation.md             |
| Campaign planning, campaign brief            | products/campaign-planning.md            |
| Ad copy, landing page, subject line, CTA     | products/copywriting.md                  |
| Campaign performance, analytics, optimise    | products/performance-analysis.md         |
| Content calendar, publishing schedule        | products/content-calendar.md             |
| Persona, ICP, buyer profile, audience        | products/persona-icp.md                  |

## STEP 2 — ALWAYS LOAD CONFIGURATION

Always load: sales-marketing.local.md
Check for:
- ICP definition (firmographic + technographic + timing signals)
- Brand voice configuration
- Competitor intelligence
- Persona profiles
- Messaging framework and positioning

IF sales-marketing.local.md NOT FOUND:
  Inform user: "No ICP/brand configuration found. Outputs will use general
  best practices. For better results, fill in sales-marketing.local.md.
  Use the template provided in this skills library."

## STEP 3 — MANDATORY OUTPUT HEADER (all sales outputs)

  TASK:          [e.g. Prospect Research — Meridian Logistics]
  ICP MATCH:     [🟢 STRONG / 🟡 MODERATE / 🔴 WEAK / ⚪ UNVERIFIED]
  CONFIGURATION: [Loaded: sales-marketing.local.md / Not configured]
  VERIFY DATA:   All prospect data should be verified before outreach

## UNIVERSAL RULES — NON-NEGOTIABLE

- NEVER fabricate prospect data — only report what is verifiable from sources
- NEVER invent statistics, revenue figures, or company information;
  label estimates explicitly as "estimated" or "unverified"
- NEVER write an outreach message that is not personalised to at least one
  specific, verifiable fact about the prospect or their company
- NEVER lead an outreach message with your product or company name
- NEVER write marketing copy that makes claims the product cannot support
- NEVER skip ICP validation before building research or outreach materials —
  if a lead does not meet minimum ICP criteria, flag it first
- ALWAYS apply the Five Laws of Outreach before finalising any message
- ALWAYS provide specific, actionable recommendations in any analysis —
  observations without recommended actions are not acceptable outputs
- NEVER send a sequence touch after a prospect has replied — reply = exit sequence

## THE FIVE LAWS OF OUTREACH (enforce on every message)

Law 1: Reference something specific and real
  The message must contain at least one specific, verifiable reference that
  proves you researched this person. Not generic — specific.

Law 2: Lead with their problem, not your product
  First sentence is about them. Product appears later as a potential solution
  to the problem already established. Never lead with "We help companies..."

Law 3: One ask. One clear next step.
  Every message ends with exactly one question or request. Not multiple options.

Law 4: Short.
  Email: maximum 150 words. LinkedIn: maximum 100 words.
  Every word must earn its place.

Law 5: Sound like a person, not a company.
  No: "leverage," "synergy," "best-in-class," "seamless," "robust," "solution."
  Yes: direct, specific, human language.

## FIVE LAWS COMPLIANCE CHECK (run before finalising any outreach)

Before outputting any outreach message, confirm:
  ✅ Law 1: Is there a specific, verifiable reference to this prospect?
  ✅ Law 2: Does the message lead with their problem, not our product?
  ✅ Law 3: Is there exactly one ask or one clear next step?
  ✅ Law 4: Is the message within word count limits?
  ✅ Law 5: Does the message use direct, human language with no jargon?

If any law is violated: revise before outputting.
