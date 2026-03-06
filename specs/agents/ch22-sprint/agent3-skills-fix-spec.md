# Agent Spec: Skills — Fix All SKILL.md Files

## Mission

Fix all 9 SKILL.md files in the legal-ops plugin to pass QA: add negative trigger phrases to every description field, add NEVER DO section to legal-global-router, add/strengthen output format blocks where weak or missing, expand 2 thin files, and create a GCC jurisdiction overlay.

## Quality Standard

Every SKILL.md must pass this checklist after your edits:

- YAML frontmatter: name, version, description, plugin-commands all present
- Description: contains trigger keywords AND negative trigger phrases
- NEVER DO section: present with at least 3 specific prohibitions
- Output format block: present, showing the agent exactly what structure to produce
- Line count: under 500
- Attorney disclaimer: "ALL OUTPUTS REQUIRE REVIEW BY LICENSED ATTORNEY" present

## Input Files (read all before editing)

- Every SKILL.md file in `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/legal-ops/skills/`
- Every jurisdiction overlay in `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/legal-ops/skills/legal-global-router/references/jurisdictions/`
- The Islamic finance router for reference pattern: `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/islamic-finance/skills/islamic-finance-router/SKILL.md`

## Output Files

- 9 updated SKILL.md files (edited in-place)
- 1 new file: `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/legal-ops/skills/legal-global-router/references/jurisdictions/gcc-law.md`
- Updated router: `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/legal-ops/skills/legal-global-router/SKILL.md` (add GCC routing + NEVER DO section)

## Work Order

### 1. Add Negative Triggers to ALL 9 Description Fields

Every SKILL.md description field must include negative trigger phrases. Add after the positive triggers. Pattern:

```yaml
description: >
  Activate for: [existing trigger keywords].
  NOT for: [specific things this skill should NOT activate for].
```

Specific negative triggers per file:

- **contract-review**: "NOT for: NDA-only triage (use nda-triage), IP research, regulatory monitoring, DSAR processing, general legal advice, litigation strategy."
- **nda-triage**: "NOT for: full contract review (use contract-review), IP matters, regulatory monitoring, DSAR processing, employment agreements."
- **ip-protection**: "NOT for: contract review, NDA triage, regulatory monitoring, DSAR processing, patent filing (attorney required), trademark registration."
- **regulatory-monitoring**: "NOT for: contract review, NDA triage, IP research, DSAR processing, legal advice on regulatory interpretation."
- **dsar-privacy**: "NOT for: contract review, NDA triage, IP matters, regulatory monitoring, legal advice on data protection interpretation, erasure execution."
- **legal-spend**: "NOT for: contract review, NDA triage, IP research, regulatory monitoring, DSAR processing, budget approval (CFO required)."
- **compliance-calendar**: "NOT for: contract review, NDA triage, IP research, DSAR processing, setting compliance policy (compliance officer required)."
- **contract-intake-agent**: "NOT for: IP research, regulatory monitoring, DSAR processing, contract execution (authorised signatory required), legal advice."
- **legal-global-router**: "NOT for: direct legal advice, court filings, litigation strategy, attorney-client privileged communications, contract execution."

### 2. Fix legal-global-router NEVER DO Section

Add this section to the router:

```markdown
## NEVER DO THESE

- NEVER route a query without identifying both the product type AND the jurisdiction
- NEVER skip the playbook check — if no playbook found, state explicitly
- NEVER apply a jurisdiction overlay without confirming the user's jurisdiction
- NEVER provide legal advice directly — route to the correct product skill which will produce analysis for attorney review
- NEVER route employment disputes to contract-review — these require specialist employment law advice
```

### 3. Add/Strengthen Output Format Blocks

Files needing output format blocks added or strengthened:

**ip-protection** — Add after the workflow section:

```markdown
## OUTPUT FORMAT
```

IP RESEARCH BRIEF
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Type: [Patent Landscape / Trademark Monitor / FTO Research]
Technology: [technology area]
Jurisdictions: [list]
Period: [date range]

FINDINGS:
[numbered list of key findings with relevance assessment]

RECOMMENDED ACTIONS:
[numbered list — each marked: Immediate / Within 30 days / Monitor]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NOTE: This is research scaffolding, not a freedom-to-operate
opinion. All findings require review by qualified IP counsel.

```

```

**contract-review** — Add a complete sample output block showing the full redline format (CLAUSE/STATUS/CURRENT/ISSUE/REDLINE/FALLBACK/RATIONALE/PRIORITY) and the holistic risk summary format.

**dsar-privacy** — Add output format blocks for each stage: acknowledgement letter format, data discovery request format, response letter format.

**legal-global-router** — Add the mandatory output header format block.

### 4. Expand Thin Files

**legal-spend** (93 lines / 455 words) — expand to at least 130 lines:

- Add a complete output format for quarterly spend reports
- Add benchmarking section: how to compare firm rates against market
- Add anomaly detection rules: what triggers an alert

**regulatory-monitoring** (97 lines / 446 words) — expand to at least 130 lines:

- Add a complete weekly briefing output format
- Add monthly board summary format
- Add source configuration section: how to specify regulatory sources per jurisdiction

### 5. Create GCC Jurisdiction Overlay

Create `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/legal-ops/skills/legal-global-router/references/jurisdictions/gcc-law.md`

Must cover (at least 120 lines):

- Saudi Arabia: Royal Decree M/1 (Commercial Court Law), Vision 2030 reforms, PDPL
- Bahrain: Commercial Companies Law, PDPL, CBB regulations
- Kuwait: Commercial Code, Civil Code
- Oman: Commercial Companies Law, Foreign Capital Investment Law
- Qatar: QFC, Commercial Companies Law
- Common GCC patterns: Islamic law influence on contract interpretation, Sharia-compliant clauses, Arabic language requirements
- Key escalation triggers: any contract governed by GCC civil law must be flagged for local counsel review

### 6. Update Router for GCC

Add GCC routing to the jurisdiction table in legal-global-router/SKILL.md:

```
| Saudi Arabia / KSA            | jurisdictions/gcc-law.md       |
| Bahrain / CBB                 | jurisdictions/gcc-law.md       |
| Kuwait                        | jurisdictions/gcc-law.md       |
| Oman                          | jurisdictions/gcc-law.md       |
| Qatar / QFC                   | jurisdictions/gcc-law.md       |
| GCC / Gulf States             | jurisdictions/gcc-law.md       |
```

## Hard Constraints

- NEVER remove existing content from SKILL.md files — only add to them
- NEVER write a SKILL.md description field without negative trigger phrases
- NEVER leave a SKILL.md without a NEVER DO section with at least 3 prohibitions
- NEVER create a jurisdiction overlay under 100 lines
- ALWAYS maintain existing YAML frontmatter format
- ALWAYS include "ALL OUTPUTS REQUIRE REVIEW BY LICENSED ATTORNEY" in every content-producing skill

## Handoff Note

End your session with a file at `/Users/mjs/Documents/code/panaversity-official/tutorsgpt/ag2/specs/agents/ch22-sprint/agent3-handoff.md` containing:
Files created or modified: [list with before/after line counts]
Negative triggers added: [list each file]
Output format blocks added: [list each file]
GCC overlay: [line count, jurisdictions covered]
Router updates: [list changes]
QA self-check: [run the checklist against each file and report pass/fail]
Open questions for Orchestrator: [list]
