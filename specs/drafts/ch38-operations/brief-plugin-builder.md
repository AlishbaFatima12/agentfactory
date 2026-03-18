# Writer Brief: Plugin Builder (operations-intelligence)

**Scope:** Build the complete custom plugin at `agentfactory-business-plugins/operations-intelligence/`
**Writer:** plugin builder

---

## Files to Create

All under `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/operations-intelligence/`:

```
operations-intelligence/
├── .claude-plugin/
│   └── plugin.json
├── skills/
│   ├── audit/
│   │   └── SKILL.md
│   ├── contract/
│   │   └── SKILL.md
│   ├── incident/
│   │   └── SKILL.md
│   └── metrics/
│       └── SKILL.md
├── agents/
│   ├── vendor-watchdog.md
│   ├── process-health.md
│   ├── compliance-monitor.md
│   └── change-tracker.md
├── evals/
│   ├── cases.yaml
│   └── run.py
├── local.md.template
└── README.md
```

**Total: 14 files**

---

## Source Files to Read

Read these files for skill/agent content (adapt for plugin format, do NOT copy verbatim):

### Skills

- `specs/drafts/chapter27_operations/ops-skills/products/audit.md` -> `skills/audit/SKILL.md`
- `specs/drafts/chapter27_operations/ops-skills/products/contract.md` -> `skills/contract/SKILL.md`
- `specs/drafts/chapter27_operations/ops-skills/products/incident.md` -> `skills/incident/SKILL.md`
- `specs/drafts/chapter27_operations/ops-skills/products/metrics.md` -> `skills/metrics/SKILL.md`

### Agents

- `specs/drafts/chapter27_operations/ops-skills/agents/vendor-watchdog-agent.md` -> `agents/vendor-watchdog.md`
- `specs/drafts/chapter27_operations/ops-skills/agents/process-health-agent.md` -> `agents/process-health.md`
- `specs/drafts/chapter27_operations/ops-skills/agents/compliance-monitor-agent.md` -> `agents/compliance-monitor.md`
- `specs/drafts/chapter27_operations/ops-skills/agents/change-tracker-agent.md` -> `agents/change-tracker.md`

### Configuration

- `specs/drafts/chapter27_operations/ops-skills/ops.local.md.template` -> `local.md.template`

### Reference Plugin Structure

- `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/` — follow this plugin's structure exactly

### Official Plugin (to understand what NOT to duplicate)

- `/Users/mjs/Documents/code/panaversity-official/knowledge-work-plugins/operations/README.md` — official commands and auto-skills

---

## Design Decisions (BINDING)

1. **No `/sop` command** — official plugin's `/runbook` covers SOP/runbook work
2. **No `/vendor` command** — official plugin's `/vendor-review` covers vendor evaluation
3. **No `/process` command** — official plugin's `/process-doc` covers process documentation
4. **No `/change` command** — official plugin's `/change-request` covers change management
5. **No `/compliance` command** — official plugin's `compliance-tracking` auto-skill covers this
6. **No `/risk` command** — official plugin's `risk-assessment` auto-skill covers this
7. **`/metrics` IS included** — complementary to official `/status-report` (metrics designs the framework; status-report generates the report)
8. **Router dissolved** — no global router file. Universal standards (risk scoring, change classification, compliance status, SOP quality, incident quality) from the spec's router are distributed into each skill and agent that needs them.
9. **Plugin name:** `operations-intelligence`

---

## plugin.json Format

Follow the supply-chain plugin's `plugin.json` format:

```json
{
  "name": "operations-intelligence",
  "version": "1.0.0",
  "description": "Audit preparation, contract analysis, incident management, operational metrics, and four persistent operations agents. Complements the official Operations plugin.",
  "author": "Panaversity",
  "license": "Apache-2.0",
  "skills": [
    "skills/audit",
    "skills/contract",
    "skills/incident",
    "skills/metrics"
  ],
  "agents": [
    "agents/vendor-watchdog.md",
    "agents/process-health.md",
    "agents/compliance-monitor.md",
    "agents/change-tracker.md"
  ]
}
```

---

## Skill SKILL.md Format

Each skill file follows the standard SKILL.md format with YAML frontmatter:

```yaml
---
name: <skill-name>
description: "<One-line description — triggers activation>"
argument-hint: "<what the user typically provides>"
---
```

Followed by markdown content defining:

- Usage section (how to invoke)
- Task types (what the skill handles)
- Output formats (structured templates)
- Quality standards (from the dissolved router)
- "NEVER DO THESE" section (guardrails)

### Specific Skill Notes

**`/audit`** — Adapt from `products/audit.md`. Include audit types, pre-audit preparation plan, mock audit/review, audit response framework. Embed the compliance status standard from the router.

**`/contract`** — Adapt from `products/contract.md`. Include four task types (obligation extraction, risk flagging, contract summary, renewal strategy). Include the six risk flag categories and negotiation position framework.

**`/incident`** — Adapt from `products/incident.md`. Include post-mortem structure, Five Whys framework, corrective action quality test, incident severity classification. Embed the incident quality standards from the router.

**`/metrics`** — Adapt from `products/metrics.md`. Include five design principles, metric definition structure, standard operations metrics library, monthly report format. Focus on framework design (not report generation — that is `/status-report`'s job).

---

## Agent File Format

Each agent is a markdown file with YAML frontmatter:

```yaml
---
name: <agent-name>
description: "<Purpose>"
schedule: "<When it runs>"
mcp-integrations: "<What data sources it needs>"
---
```

Followed by: purpose, tasks (weekly/monthly), alert formats, monthly report format, "NEVER DO THESE".

Adapt directly from the spec agent files but distribute the relevant universal standards from the dissolved router into each agent.

---

## Evals

### `cases.yaml`

Define evaluation cases for each skill:

```yaml
cases:
  # Routing
  - name: route_audit
    input: "Prepare for our annual ISO 27001 surveillance audit"
    expected_skill: audit
    type: routing

  - name: route_contract
    input: "Extract all obligations from this vendor contract"
    expected_skill: contract
    type: routing

  - name: route_incident
    input: "Run a post-mortem on yesterday's payment processing outage"
    expected_skill: incident
    type: routing

  - name: route_metrics
    input: "Design an operational metrics framework for our operations team"
    expected_skill: metrics
    type: routing

  # Accuracy
  - name: audit_evidence_inventory
    input: "Prepare an audit evidence inventory for UK GDPR compliance"
    expected_output_contains:
      - "Evidence Required"
      - "Location"
      - "Status"
    type: accuracy

  - name: contract_obligation_extraction
    input: "Extract obligations from a 3-year SaaS contract with 90-day notice period and auto-renewal"
    expected_output_contains:
      - "AUTO-RENEWAL"
      - "Notice"
      - "Key Dates"
    type: accuracy

  - name: incident_five_whys
    input: "Payment system outage for 4 hours. Root cause: database failover misconfigured during migration"
    expected_output_contains:
      - "WHY"
      - "Systemic"
      - "Corrective Action"
      - "Owner"
    type: accuracy

  - name: metrics_leading_indicator
    input: "Design metrics for vendor management operations"
    expected_output_contains:
      - "Leading"
      - "Lagging"
      - "Threshold"
      - "Owner"
    type: accuracy

  # Negative
  - name: negative_vendor_evaluation
    input: "Evaluate this vendor's pricing and performance"
    expected_skill: null
    note: "Should route to official /vendor-review, not our plugin"
    type: negative

  - name: negative_process_doc
    input: "Document our employee onboarding process as an SOP"
    expected_skill: null
    note: "Should route to official /process-doc or /runbook, not our plugin"
    type: negative
```

### `run.py`

Follow the supply-chain plugin's eval runner pattern. Simple deterministic checks for routing + output-contains assertions.

---

## local.md.template

Adapt from `specs/drafts/chapter27_operations/ops-skills/ops.local.md.template`. This is the organisation-specific configuration file students populate in L02 and L14.

Sections: Organisation Context, Vendor Portfolio, Regulatory Frameworks, Risk Configuration, Change Management, Process Library, Operational Metrics, Incident Management.

---

## README.md

Follow the supply-chain plugin README format:

```markdown
# Operations Intelligence Plugin

Complements the official Operations plugin with audit preparation, contract analysis,
incident management, operational metrics, and four persistent operations agents.

## Installation

\`\`\`bash
claude plugins add agentfactory-business-plugins/operations-intelligence
\`\`\`

## Commands

| Command     | Description                                                               |
| ----------- | ------------------------------------------------------------------------- |
| `/audit`    | Prepare for audits — evidence inventory, mock reviews, response framework |
| `/contract` | Analyse contracts — extract obligations, flag risks, inform negotiations  |
| `/incident` | Run post-mortems — timeline, Five Whys RCA, corrective actions            |
| `/metrics`  | Design metrics frameworks — leading/lagging indicators, dashboards        |

## Agents

| Agent              | Purpose                                                                        | Schedule |
| ------------------ | ------------------------------------------------------------------------------ | -------- |
| vendor-watchdog    | Monitor vendor portfolio (renewals, SLAs, spend, unapproved payments)          | Weekly   |
| process-health     | Monitor SOP library (currency, orphans, triggered reviews)                     | Monthly  |
| compliance-monitor | Track compliance obligations (reviews due, evidence aging, regulatory changes) | Weekly   |
| change-tracker     | Monitor change pipeline (impact assessments, rollback plans, PIRs)             | Weekly   |

## Works With

This plugin is designed to work alongside the official **Operations** plugin
(`knowledge-work-plugins/operations`). Install both for the complete operations
intelligence layer taught in Chapter 38.

## Configuration

Copy `local.md.template` to `ops.local.md` and populate with your organisation's
vendors, regulatory frameworks, risk appetite, change authority matrix, and
operational metrics. See Chapter 38, Lesson 2 for guided setup.
```

---

## Exit Criteria

This builder's work is DONE when:

- 14 files created (see directory structure above)
- `plugin.json` is valid JSON with correct skill/agent paths
- All 4 skills have SKILL.md with YAML frontmatter, usage, task types, output formats, quality standards, guardrails
- All 4 agents have YAML frontmatter, purpose, tasks, alert formats, monthly reports, guardrails
- Universal standards from the dissolved router are distributed into the skills/agents that need them
- Evals include routing (4), accuracy (4), and negative (2) cases minimum
- `local.md.template` includes all 8 configuration sections
- README follows the supply-chain plugin format
- No overlap with official plugin commands (no /vendor, /process, /change, /compliance, /risk, /sop)
