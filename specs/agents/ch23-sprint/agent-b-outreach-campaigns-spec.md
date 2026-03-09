# Agent Spec: Outreach + Campaigns Writer (Lessons 4-5)

## Mission (one sentence)

Write lessons 4-5 of Chapter 23 covering the Five Laws of Outreach and Campaign Optimisation/Content Factory as production-quality Docusaurus lesson files.

## Quality Standard

Match the depth of Chapter 22 Legal and Chapter 18 IDFA. Specifically:

- Every lesson must have FULL YAML frontmatter (skills, learning_objectives, cognitive_load, differentiation)
- Concept boxes must define the term, give a formula or example, and explain why it matters
- Worked examples must use specific numbers, specific company names, specific dialogue
- NEVER write a section as a bullet list where prose is needed
- Each lesson must have 3 "Try With AI" prompts with `**What you're learning:**` explanations
- Read reference lessons BEFORE writing

## Input Files (read all before writing)

- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/drafts/chap23_sales_revops_marketing/Chapter23_Sales_RevOps_Marketing.md`: Source draft — use Parts 4-6 as content basis. Expand significantly.
- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/apps/learn-app/docs/03-Business-Domain-Agent-Workflows/03-legal-and-compliance/01-the-moment-legal-ai-grew-up.md`: YAML frontmatter reference (first 80 lines)
- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/drafts/chap23_sales_revops_marketing/sales-revops-marketing-skills/sales-revops-marketing-skills/products/outreach.md`: Outreach skill reference
- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/drafts/chap23_sales_revops_marketing/sales-revops-marketing-skills/sales-revops-marketing-skills/products/copywriting.md`: Copywriting skill reference
- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/drafts/chap23_sales_revops_marketing/sales-revops-marketing-skills/sales-revops-marketing-skills/products/campaign-planning.md`: Campaign planning skill reference
- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/drafts/chap23_sales_revops_marketing/sales-revops-marketing-skills/sales-revops-marketing-skills/products/content-creation.md`: Content creation skill reference

## Output Files (create these)

### File 1: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/04-the-growth-engine/23-sales-revops-marketing/04-the-five-laws-of-outreach.md`

- **Content**: The Five Laws of Outreach, `/outreach` and `/sequence` commands, multi-touch sequence building, copywriting, the `/follow-up` command (currently undemo'd)
- **Minimum depth**: 2,500 words
- **Must include**:
  - Concept boxes for: Outreach Sequence, Nurture Sequence, A/B Test, CTR, Lead Magnet, CTA
  - The Five Laws framework from draft (with expansion — not just numbered list)
  - The 6-touch sequence worked example (from draft)
  - LinkedIn DM and follow-up email examples (from draft)
  - NEW: A worked example of `/follow-up` command (currently undemo'd in draft)
  - NEW: A worked example of `/copy` command (currently undemo'd in draft)
  - NEW: WhatsApp Business outreach example for South Asian B2B context
  - Cultural note: relationship-first cultures vs. transactional (cold outreach less effective in Pakistan/GCC)
  - 3 Try With AI prompts
- **Known gaps to fill**: `/follow-up` and `/copy` commands never demonstrated; no WhatsApp channel; Five Laws are Western B2B norms

### File 2: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/04-the-growth-engine/23-sales-revops-marketing/05-campaign-optimisation-and-content.md`

- **Content**: Campaign planning, content calendar, content factory, SEO content, the `/campaign`, `/content`, `/calendar`, `/segment` commands
- **Minimum depth**: 2,500 words
- **Must include**:
  - Concept boxes for: SEO, KPI, UTM, Thought Leader Ads, Retargeting, Content Calendar
  - Campaign brief worked example (from draft — expand with non-UK budget example)
  - Weekly analysis worked example (from draft)
  - NEW: A worked example of `/calendar` command (currently undemo'd)
  - NEW: A worked example of `/segment` command (currently undemo'd)
  - NEW: Budget example for emerging market (Pakistan startup with PKR 500K budget vs. UK's GBP 25K)
  - NEW: Mention of non-English content creation and localisation
  - 3 Try With AI prompts
- **Known gaps to fill**: `/calendar` and `/segment` never demonstrated; budget examples unrealistic for emerging markets; no non-English content mention

## Hard Constraints

- NEVER: Add `import` statements for components
- NEVER: Present the Five Laws as universal truths — acknowledge they are Western B2B norms and discuss adaptation for relationship-first cultures
- NEVER: Use GBP-only budget examples
- NEVER: Assume LinkedIn is the only B2B outreach channel
- ALWAYS: Use `chapter: 23`, `lesson: 4` and `lesson: 5` in frontmatter
- ALWAYS: Include `cognitive_load` and `differentiation` in YAML frontmatter
- ALWAYS: Demo every command mentioned — no undocumented commands

## Handoff Note Format (include at end of your session)

Files created: [list with word counts]
Concept boxes added: [count and list of terms]
Commands demonstrated: [list every /command shown with sample output]
Regional examples added: [list]
Decisions made that affect downstream agents: [list]
Open questions for Orchestrator: [list]
