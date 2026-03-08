# Agent Spec: Agents + Library + Exercises Writer (Lessons 8-10)

## Mission (one sentence)

Write lessons 8-10 covering RevOps Agents (expanded from bullets to prose), the SKILL.md Library architecture, and all exercises with fixed quality gaps.

## Quality Standard

Match the depth of Chapter 22 Legal and Chapter 18 IDFA. Specifically:

- Part Seven agents are currently bullet lists — they must become full prose with worked examples showing sample outputs
- Each agent must have: architecture explanation, trigger conditions, sample output, failure modes
- Exercises must have: key learning statement, time target, explicit "What you need" prerequisites, numbered steps, verifiable output
- Each lesson must have 3 "Try With AI" prompts with `**What you're learning:**` explanations
- Read reference lessons BEFORE writing

## Input Files (read all before writing)

- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/drafts/chap23_sales_revops_marketing/Chapter23_Sales_RevOps_Marketing.md`: Source draft — Parts 7-8 + Exercises
- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/apps/learn-app/docs/03-Business-Domain-Agent-Workflows/03-legal-and-compliance/01-the-moment-legal-ai-grew-up.md`: YAML frontmatter reference
- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/apps/learn-app/docs/03-Business-Domain-Agent-Workflows/03-legal-and-compliance/06-legal-ops-agents.md`: Reference for how Legal chapter handles its agents lesson — match this quality
- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/drafts/chap23_sales_revops_marketing/sales-revops-marketing-skills/sales-revops-marketing-skills/agents/`: All 5 agent skill files
- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/drafts/chap23_sales_revops_marketing/sales-revops-marketing-skills/sales-revops-marketing-skills/sales-marketing-global-router.md`: Router reference
- `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/drafts/chap23_sales_revops_marketing/sales-revops-marketing-skills/sales-revops-marketing-skills/README.md`: Skills library overview
- `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/legal-ops/README.md`: Plugin architecture reference

## Output Files (create these)

### File 1: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/04-the-growth-engine/23-sales-revops-marketing/08-revops-agents.md`

- **Content**: The 5 autonomous RevOps agents — expanded from bullet lists to full prose with worked examples
- **Minimum depth**: 2,000 words
- **Must include**:
  - Concept boxes for: Autonomous Agent, MCP (Model Context Protocol), SLA (Service Level Agreement), Anomaly Detection
  - For EACH of the 5 agents:
    1. **Lead Intelligence Agent**: What it monitors, trigger conditions, sample weekly signal report output
    2. **CRM Hygiene Agent**: Deduplication logic, data quality scoring, sample hygiene report output
    3. **Outreach Sequencing Agent**: Sequence management, timing optimization, sample sequence status output
    4. **Marketing Performance Agent**: Channel monitoring, anomaly detection, sample weekly performance dashboard
    5. **Revenue Reporting Agent**: Pipeline aggregation, forecast generation, sample Monday morning revenue dashboard
  - Architecture diagram (text-based): how agents connect via MCP to CRM, email, analytics
  - Discussion of agent orchestration: which agents should run together, scheduling patterns
  - 3 Try With AI prompts

### File 2: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/04-the-growth-engine/23-sales-revops-marketing/09-the-skill-library.md`

- **Content**: How the SKILL.md library is structured, the global router, product files, the plugin architecture
- **Minimum depth**: 1,500 words
- **Must include**:
  - Concept boxes for: Global Router, Product Skill, Jurisdiction Overlay
  - Explanation of the router → product file → jurisdiction overlay architecture
  - Full listing of all 14 product files with one-line descriptions
  - Full listing of all 5 agent files with one-line descriptions
  - The `sales-marketing.local.md.template` explained — what users customize and why
  - How to extend: adding a new product skill (step-by-step)
  - Comparison to legal-ops plugin structure (table showing parallel components)
  - 3 Try With AI prompts
- **Known gaps**: Draft has router code only, no explanatory prose

### File 3: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/04-the-growth-engine/23-sales-revops-marketing/10-applied-exercises.md`

- **Content**: All 8 exercises, fixed for quality gaps
- **Minimum depth**: 2,000 words
- **Must include**:
  - For EVERY exercise:
    - **Key learning statement** (already present in draft — keep)
    - **Time target** (already present — keep)
    - **"What you need"** section with explicit prerequisites: (a) which prior exercises/lessons completed, (b) what tools/access required, (c) what data/files to have ready
    - **Numbered steps** (fix Exercise 6 which lacks clean numbered steps)
    - **Verifiable output** (already present — keep)
    - **Sample intermediate output** for at least one step (currently missing from ALL exercises)
  - Exercise 6 (Content Factory) restructured with proper numbered steps
  - At least 2 exercises should include a Pakistan/GCC variant (e.g., "If your target market is South Asia, substitute...")
  - Chapter summary section at the end (accurately describing all 10 lessons)
  - 3 Try With AI prompts

## Hard Constraints

- NEVER: Leave an agent as a bullet list — every agent needs prose + sample output
- NEVER: Add `import` statements for components
- NEVER: Skip the "What you need" section on any exercise
- NEVER: Reference commands without explaining what they do
- ALWAYS: Use `chapter: 23`, lessons `8`, `9`, `10` in frontmatter
- ALWAYS: Include `cognitive_load` and `differentiation` in YAML frontmatter
- ALWAYS: Show realistic sample outputs with specific numbers, not generic templates

## Handoff Note Format (include at end of your session)

Files created: [list with word counts]
Agents with worked examples: [list all 5 with confirmation each has sample output]
Exercise fixes: [list each exercise and what was fixed]
Decisions made that affect downstream agents: [list]
Open questions for Orchestrator: [list]
