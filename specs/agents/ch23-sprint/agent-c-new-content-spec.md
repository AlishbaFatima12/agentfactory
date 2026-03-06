# Agent Spec: New Content Writer (Lessons 6-7)

## Mission (one sentence)

Write two entirely new lessons on ABM/Attribution and Outreach Compliance/Regional Context that do not exist in the current draft — these fill the chapter's most critical content gaps.

## Quality Standard

Match the depth of Chapter 22 Legal and Chapter 18 IDFA. Specifically:

- These lessons are ENTIRELY NEW — they do not exist in the draft at all
- Every lesson must have FULL YAML frontmatter (skills, learning_objectives, cognitive_load, differentiation)
- Concept boxes must define the term, give a formula or example, and explain why it matters
- Worked examples must use specific numbers, specific company names, specific dialogue
- Lesson 7 (compliance) should take cues from how Chapter 22 handles legal compliance — with jurisdiction-awareness and specific statute references
- Each lesson must have 3 "Try With AI" prompts with `**What you're learning:**` explanations
- Read reference lessons BEFORE writing

## Input Files (read all before writing)

- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/drafts/chap23_sales_revops_marketing/Chapter23_Sales_RevOps_Marketing.md`: Source draft — for tone/voice matching and understanding what exists
- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/apps/learn-app/docs/03-Business-Domain-Agent-Workflows/03-legal-and-compliance/01-the-moment-legal-ai-grew-up.md`: YAML frontmatter reference + compliance writing reference
- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/apps/learn-app/docs/03-Business-Domain-Agent-Workflows/03-legal-and-compliance/03-contract-lifecycle-management.md`: See how Ch22 handles jurisdiction-aware content
- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/drafts/chap23_sales_revops_marketing/sales-revops-marketing-skills/sales-revops-marketing-skills/products/campaign-planning.md`: For ABM context
- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/drafts/chap23_sales_revops_marketing/sales-revops-marketing-skills/sales-revops-marketing-skills/products/persona-icp.md`: For ICP/ABM connection

## Output Files (create these)

### File 1: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/04-the-growth-engine/23-sales-revops-marketing/06-abm-and-attribution.md`

- **Content**: Account-Based Marketing strategy, how the plugin framework supports ABM, attribution modeling (first-touch, last-touch, multi-touch, data-driven), B2B vs B2C routing differences
- **Minimum depth**: 2,000 words
- **Must include**:
  - Concept boxes for: ABM (Account-Based Marketing), Attribution Model, First-Touch/Last-Touch/Multi-Touch Attribution, B2B vs B2C, Marketing Automation, CAC (Customer Acquisition Cost), ROI
  - Worked example: ABM campaign for a named account — show how prospect-research + ICP + sequence + campaign commands coordinate for a single high-value target
  - Worked example: Attribution analysis — show a multi-channel campaign with specific numbers and demonstrate how different attribution models assign credit differently
  - B2B vs B2C routing discussion: how the same plugin framework adapts (different ICP structures, different scoring models, different outreach channels)
  - Brief mention of marketing automation platforms (HubSpot, Marketo, Klaviyo) and how the plugin layer sits alongside (not replaces) them
  - 3 Try With AI prompts
- **Known gaps**: This entire topic is absent from draft. ABM is critical for enterprise B2B.

### File 2: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/04-the-growth-engine/23-sales-revops-marketing/07-outreach-compliance-and-regional-context.md`

- **Content**: Legal compliance for automated outreach, regional sales culture differences, the jurisdiction overlay system for sales
- **Minimum depth**: 2,000 words
- **Must include**:
  - Concept boxes for: CAN-SPAM Act, GDPR (outreach context), PECR (UK), ePrivacy Directive, Opt-out vs Opt-in, PECA (Pakistan), Consent Management
  - **Compliance section**: Table of regulations by jurisdiction:
    - US: CAN-SPAM (opt-out model, physical address required, 10 business days to process)
    - EU: GDPR + ePrivacy (opt-in required for B2C, legitimate interest for B2B)
    - UK: PECR + UK GDPR (soft opt-in for existing customers)
    - Pakistan: PECA 2016 + emerging data protection (discuss current landscape)
    - GCC/UAE: TRA regulations, anti-spam framework
  - **Regional sales culture section**:
    - Western B2B: cold outreach, LinkedIn-first, efficiency-oriented
    - South Asian B2B: relationship-first, warm introductions, WhatsApp Business, trade associations, longer relationship-building cycles
    - GCC B2B: wasta (relationship networks), in-person meetings, formal communication, Ramadan/Eid sensitivity
    - How to configure the plugin for each cultural context
  - **Worked example**: Same product pitched to UK prospect (LinkedIn DM + email sequence) vs. Pakistani prospect (WhatsApp + referral network + industry event follow-up) — show how the `/outreach` command adapts
  - **Ethical sales practices**: Brief note on halal business considerations (connecting to Ch20 Islamic Finance)
  - **Budget localisation**: How to recalibrate campaign budgets for different economic contexts (PKR, AED, SAR examples)
  - 3 Try With AI prompts
- **Known gaps**: Outreach compliance is completely absent. Regional context is completely absent. Both are critical for a global audience.

## Hard Constraints

- NEVER: Treat Western B2B norms as universal — every recommendation should acknowledge regional variation
- NEVER: Add `import` statements for components
- NEVER: Make compliance advice sound like legal counsel — always include "consult local legal advisor" disclaimers
- NEVER: Present compliance as optional or secondary — it must be framed as foundational
- ALWAYS: Use `chapter: 23`, `lesson: 6` and `lesson: 7` in frontmatter
- ALWAYS: Include `cognitive_load` and `differentiation` in YAML frontmatter
- ALWAYS: Cite specific statute names and years (CAN-SPAM 2003, GDPR 2018, PECR 2003, etc.)
- ALWAYS: Include at least one Pakistan and one GCC example per lesson

## Handoff Note Format (include at end of your session)

Files created: [list with word counts]
Concept boxes added: [count and list of terms]
Jurisdictions covered: [list with specific statutes referenced]
Regional examples added: [list]
Decisions made that affect downstream agents: [list]
Open questions for Orchestrator: [list]
