# Agent Spec: Skills Hardening + Jurisdiction Overlays

## Mission (one sentence)

Fix all quality gaps in the SKILL.md files (NEVER DO sections, negative triggers, agent routing) and create jurisdiction overlay files, restructuring into plugin directory format matching the legal-ops plugin.

## Quality Standard

Match the legal-ops plugin structure exactly. Specifically:

- Every product and agent file must have a NEVER DO section with 3+ prohibitions
- Every description field must have negative triggers for disambiguation
- The global router must reference all 19 product + agent files
- Jurisdiction overlays must follow the legal-ops pattern (YAML frontmatter, governing framework, key triggers)
- Plugin directory must have: CLAUDE.md, .claude-plugin/plugin.json, commands/, skills/ with proper nesting

## Input Files (read all before writing)

- All files in `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/drafts/chap23_sales_revops_marketing/sales-revops-marketing-skills/sales-revops-marketing-skills/`
- `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/legal-ops/` — reference plugin structure (read README, CLAUDE.md, plugin.json, at least 2 skills, all 5 jurisdiction files, a command file)
- `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/legal-ops/skills/legal-global-router/references/jurisdictions/pakistan-law.md` — jurisdiction overlay reference
- `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/legal-ops/skills/legal-global-router/references/jurisdictions/uae-law.md` — jurisdiction overlay reference
- `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/legal-ops/skills/legal-global-router/references/jurisdictions/us-law.md` — jurisdiction overlay reference

## Output Files (create these)

All output goes to: `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/drafts/chap23_sales_revops_marketing/sales-revops-marketing-plugin/`

### Plugin Structure to Create:

```
sales-revops-marketing-plugin/
├── .claude-plugin/
│   └── plugin.json
├── CLAUDE.md
├── LICENSE                    (Apache-2.0 — copy pattern from legal-ops)
├── README.md
├── commands/
│   ├── research-prospect.md
│   ├── score-lead.md
│   ├── plan-campaign.md
│   └── build-sequence.md
├── sales-marketing.local.md.template   (copy from existing)
├── skills/
│   ├── sales-marketing-global-router/
│   │   ├── SKILL.md           (updated: add agent routing table)
│   │   └── references/
│   │       └── jurisdictions/
│   │           ├── us-outreach-law.md
│   │           ├── eu-outreach-law.md
│   │           ├── pakistan-outreach-law.md
│   │           └── gcc-outreach-law.md
│   ├── prospect-research/SKILL.md
│   ├── lead-scoring/SKILL.md
│   ├── crm-enrichment/SKILL.md
│   ├── outreach/SKILL.md
│   ├── sequence/SKILL.md
│   ├── pre-call-brief/SKILL.md
│   ├── follow-up/SKILL.md
│   ├── pipeline/SKILL.md
│   ├── content-creation/SKILL.md
│   ├── campaign-planning/SKILL.md
│   ├── copywriting/SKILL.md
│   ├── performance-analysis/SKILL.md
│   ├── content-calendar/SKILL.md
│   ├── persona-icp/SKILL.md
│   ├── lead-intelligence-agent/SKILL.md
│   ├── crm-hygiene-agent/SKILL.md
│   ├── outreach-sequencing-agent/SKILL.md
│   ├── marketing-performance-agent/SKILL.md
│   └── revenue-reporting-agent/SKILL.md
└── workflow-recipes/
    ├── prospect-to-meeting-workflow.md
    ├── campaign-launch-workflow.md
    ├── weekly-revops-review.md
    └── lead-nurture-sequence.md
```

### Section-by-Section Work Order

1. **Fix 4 files missing NEVER DO sections**:
   - `persona-icp.md`: Add 3+ prohibitions (never build from assumptions alone, never skip anti-ICP, never produce without outreach guidance)
   - `crm-hygiene-agent.md`: Add 3+ (never delete without audit log, never overwrite manual fields, never archive active deals)
   - `marketing-performance-agent.md`: Add 3+ (never report without benchmarks, never alert without confirming data source, never recommend pausing based on one week)
   - `revenue-reporting-agent.md`: Add 3+ (never forecast on rep probability alone, never surface risk without action, never distribute stale data)

2. **Add negative triggers to ALL 19 product/agent descriptions**:
   - Each description must include "NOT for..." phrases to disambiguate from similar skills
   - Example: `outreach.md` description adds "NOT for multi-touch sequences (use sequence), NOT for post-call follow-ups (use follow-up)"
   - Example: `prospect-research.md` adds "NOT for CRM data enrichment (use crm-enrichment), NOT for lead scoring (use lead-scoring)"

3. **Update global router**:
   - Add a third routing table for the 5 agent files with their trigger phrases
   - Ensure all 14 products AND 5 agents are referenced

4. **Create 4 jurisdiction overlay files** for sales/outreach compliance:
   - `us-outreach-law.md`: CAN-SPAM Act 2003, FTC Telemarketing Sales Rule, state-specific (CCPA data enrichment limits, NY telemarketing), unsubscribe requirements
   - `eu-outreach-law.md`: GDPR Art. 6 legitimate interest for B2B, ePrivacy Directive, opt-in for B2C, DPO notification, right to object
   - `pakistan-outreach-law.md`: PECA 2016, emerging data protection bill, PTA regulations, industry norms, WhatsApp commercial messaging guidelines
   - `gcc-outreach-law.md`: UAE TRA anti-spam (Federal Law No. 5/2012), Saudi CITC regulations, Bahrain PDPL, DIFC/ADGM data protection, Ramadan sensitivity

5. **Create plugin scaffold files**:
   - `plugin.json`: name, version, description, skills list, commands list
   - `CLAUDE.md`: Plugin scope boundary, governing principle ("the agent researches, drafts, and recommends; the sales professional decides and sends")
   - `LICENSE`: Apache-2.0
   - `README.md`: Quick start, installation, command reference
   - 4 command files matching legal-ops pattern
   - 4 workflow recipe files

6. **Restructure all existing skill files** from flat `products/name.md` to `skills/name/SKILL.md` format

## Hard Constraints

- NEVER: Remove existing content from skill files — only add to them
- NEVER: Change YAML frontmatter `name:` or `plugin-commands:` values (these are referenced by the chapter)
- NEVER: Exceed 500 lines per SKILL.md file
- NEVER: Write jurisdiction overlays as legal advice — always frame as "awareness for automated systems"
- ALWAYS: Follow the legal-ops plugin structure exactly for directory layout
- ALWAYS: Include "## NEVER DO THESE" as the exact section header (matching legal-ops)
- ALWAYS: Test that every file referenced in the global router actually exists in the output

## Handoff Note Format (include at end of your session)

Files created: [list with line counts]
Files modified: [list with changes made]
NEVER DO sections added: [list 4 files with prohibitions]
Negative triggers added: [count of files updated]
Jurisdiction files: [list 4 with key statutes referenced]
Plugin structure complete: [yes/no, list any missing components]
Open questions for Orchestrator: [list]
