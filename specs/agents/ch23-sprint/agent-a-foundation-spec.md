# Agent Spec: Foundation Lessons Writer (Lessons 1-3)

## Mission (one sentence)

Write lessons 1-3 of Chapter 23 (Sales & RevOps) as production-quality Docusaurus lesson files with full YAML frontmatter, concept boxes, worked examples, and Try With AI prompts.

## Quality Standard

Match the depth of Chapter 22 Legal and Chapter 18 IDFA. Specifically:

- Every lesson must have FULL YAML frontmatter matching the pattern in the reference lessons (skills, learning_objectives, cognitive_load, differentiation)
- Concept boxes must define the term, give a formula or example, and explain why it matters — use `:::info` or `> **Term:**` blockquote format
- Worked examples must use specific numbers, specific company names, specific dialogue
- NEVER write a section as a bullet list where prose is needed
- Each lesson must have 3 "Try With AI" prompts with `**What you're learning:**` explanations
- Read the reference lessons BEFORE writing

## Input Files (read all before writing)

- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/drafts/chap23_sales_revops_marketing/Chapter23_Sales_RevOps_Marketing.md`: Source draft — use Introduction + Parts 1-3 as content basis. Expand, don't just copy.
- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/apps/learn-app/docs/03-Business-Domain-Agent-Workflows/03-legal-and-compliance/01-the-moment-legal-ai-grew-up.md`: YAML frontmatter reference (read first 80 lines for structure)
- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/18-intent-driven-financial-architecture/01-the-coordinate-trap.md`: Alternative frontmatter reference (read first 80 lines)
- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/apps/learn-app/docs/03-Business-Domain-Agent-Workflows/04-the-growth-engine/README.md`: Parent section README

## Output Files (create these)

### File 1: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/04-the-growth-engine/23-sales-revops-marketing/README.md`

Chapter overview README matching the pattern of Ch22's README. Include:

- Chapter title and section context
- Table listing all 10 lessons with titles and key focus

### File 2: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/04-the-growth-engine/23-sales-revops-marketing/_category_.json`

```json
{
  "label": "23 — Sales, RevOps & Marketing",
  "position": 23,
  "collapsed": true
}
```

### File 3: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/04-the-growth-engine/23-sales-revops-marketing/01-the-one-percent-problem.md`

- **Content**: The introduction — why AI in sales matters, the Sarah Chen hook story, the cognitive capacity gap
- **Minimum depth**: 2,000 words
- **Must include**:
  - Concept boxes for: RevOps, CRM, Pipeline (sales concept), ICP, B2B, SKILL.md (cross-ref Ch5)
  - The opening epigraph from the draft
  - The "1% Problem" framing with specific numbers
  - Overview of the 14 plugin commands (table from draft)
  - 3 Try With AI prompts
- **Known gaps to fill**: No concept boxes exist in draft; add at least 6

### File 4: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/04-the-growth-engine/23-sales-revops-marketing/02-prospect-research-and-icp.md`

- **Content**: ICP configuration, the `/research` command workflow, the full Sarah Chen/Meridian Logistics narrative
- **Minimum depth**: 2,500 words
- **Must include**:
  - Concept boxes for: ICP (formal), Firmographic, Technographic, Discovery Call, MCP
  - The full research brief output (from draft)
  - ICP YAML configuration example
  - A SECOND worked example for a Pakistan or GCC market (e.g., Karachi-based SaaS or Dubai logistics)
  - 3 Try With AI prompts
- **Known gaps to fill**: Draft is UK-only; add South Asian/GCC example

### File 5: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/04-the-growth-engine/23-sales-revops-marketing/03-lead-scoring-and-crm-enrichment.md`

- **Content**: Lead scoring models, the `/score` command, CRM enrichment pipeline, data quality
- **Minimum depth**: 2,500 words
- **Must include**:
  - Concept boxes for: Lead Scoring, MQL, SQL, SAL, Enrichment, ERP
  - The scoring output from draft (87/100 example)
  - A before/after CRM enrichment example (missing from draft entirely)
  - Discussion of enrichment data sources beyond Companies House (SECP Pakistan, DED Dubai)
  - 3 Try With AI prompts
- **Known gaps to fill**: No enrichment worked example in draft; no non-UK data sources

## Hard Constraints

- NEVER: Add `import` statements for components — no React imports
- NEVER: Use GBP-only financial examples — every lesson must have at least one non-UK reference
- NEVER: Leave a concept box undefined — if you use a term, define it first
- NEVER: Write a "Try With AI" prompt without a `**What you're learning:**` explanation
- ALWAYS: Use `chapter: 23` and sequential `lesson:` numbers in frontmatter
- ALWAYS: Include `cognitive_load` and `differentiation` in YAML frontmatter
- ALWAYS: Use prose paragraphs, not bullet lists, for explanatory content

## Handoff Note Format (include at end of your session)

Files created: [list with word counts]
Concept boxes added: [count and list of terms]
Regional examples added: [list which lessons have non-UK examples]
Decisions made that affect downstream agents: [list]
Open questions for Orchestrator: [list]
