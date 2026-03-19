# Writer Brief: Plugin Builder

## Scope

You build the complete supply-chain plugin for the `agentfactory-business-plugins` monorepo. This is a code deliverable, not a content deliverable — you write SKILL.md files, agent markdown, plugin.json, evals, and the README.

## Files to Create

```
/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/supply-chain/
├── .claude-plugin/
│   └── plugin.json
├── skills/
│   ├── vendor-assessment/
│   │   └── SKILL.md
│   ├── supplier-risk/
│   │   └── SKILL.md
│   ├── invoice-reconciliation/
│   │   └── SKILL.md
│   ├── vendor-communication/
│   │   └── SKILL.md
│   ├── logistics-brief/
│   │   └── SKILL.md
│   ├── spend-analysis/
│   │   └── SKILL.md
│   ├── network-design/
│   │   └── SKILL.md
│   └── supply-chain-brief/
│       └── SKILL.md
├── agents/
│   ├── vendor-health-monitor.md
│   ├── invoice-reconciliation-agent.md
│   ├── spend-intelligence-agent.md
│   ├── procurement-calendar-agent.md
│   └── logistics-intelligence-agent.md
├── evals/
│   ├── cases.yaml
│   └── run.py
└── README.md
```

Total: 17 files

## What to Read

1. **Architecture spec**: `specs/drafts/ch35-supply-chain/architecture-spec.md` — Section 8 (Plugin Architecture), Section 4 (Binding Design Decisions)
2. **All 8 spec product files**: `specs/drafts/chapter 24 supply chain and procurement/supply-chain-skills/products/*.md`
3. **All 5 spec agent files**: `specs/drafts/chapter 24 supply chain and procurement/supply-chain-skills/agents/*.md`
4. **Reference plugin**: `/Users/mjs/Documents/code/panaversity-official/agentfactory-business-plugins/banking/` — follow this plugin's structure exactly
5. **Banking plugin.json**: `.claude-plugin/plugin.json` — follow the same JSON schema

## Content-Specific Notes

### plugin.json

Use the JSON from architecture-spec.md Section 8. Key fields:

- `name`: "supply-chain"
- `version`: "1.0.0"
- `license`: "Apache-2.0"
- Match the banking plugin's JSON schema exactly

### 8 SKILL.md Files

Each SKILL.md is derived from its corresponding spec product file. The transformation:

1. **Copy the spec product file content** as the body of SKILL.md
2. **Update the YAML frontmatter** — the `plugin-commands:` field must use the RENAMED command names:
   - `products/invoice-reconciliation.md` -> `plugin-commands: /invoice-reconcile`
   - `products/vendor-communication.md` -> `plugin-commands: /vendor-communicate`
   - `products/network-design.md` -> `plugin-commands: /supply-network-design`
   - All others keep their original command names
3. **Update any internal references** to the renamed commands within the skill body text
   - e.g., invoice-reconciliation.md mentions "See /communicate for draft dispute letter" -> "See /vendor-communicate for draft dispute letter"
   - vendor-communication.md references are internal, no changes needed
4. **Follow the Banking plugin's SKILL.md format** for directory structure: `skills/{name}/SKILL.md`

### 5 Agent Files

Copy from the spec agent files into `agents/`. These do NOT need command renames in their filenames, but any internal references to commands must use the renamed versions:

- "load invoice-reconciliation.md" -> OK (file reference, not command)
- "load vendor-communication.md" -> OK
- Any `/reconcile` in text -> `/invoice-reconcile`
- Any `/communicate` in text -> `/vendor-communicate`

### evals/cases.yaml

Design ~18 test cases following the Banking plugin eval pattern:

**Routing cases (8)**:

- `vendor_assess_strategic` — strategic vendor assessment query -> vendor-assessment skill
- `vendor_assess_bottleneck` — bottleneck vendor with low spend but sole-source -> vendor-assessment skill
- `invoice_reconcile_basic` — standard invoice reconciliation -> invoice-reconciliation skill
- `supplier_risk_financial` — supplier financial distress query -> supplier-risk skill
- `logistics_carrier_review` — carrier performance query -> logistics-brief skill
- `spend_consolidation` — spend consolidation query -> spend-analysis skill
- `network_scenario` — network design scenario -> network-design skill
- `weekly_brief` — executive supply chain brief -> supply-chain-brief skill

**Accuracy cases (8)**:

- `vendor_assess_bottleneck_output` — verify bottleneck classification for sole-source low-spend vendor
- `invoice_reconcile_price_variance` — verify price variance detection outside tolerance
- `invoice_reconcile_duplicate` — verify duplicate invoice rejection
- `supplier_risk_tier2_cascade` — verify Tier 2 cascade risk escalation
- `logistics_expedited_root_cause` — verify expedited freight root cause analysis
- `spend_price_inconsistency` — verify cross-site price inconsistency detection
- `network_scenario_comparison` — verify multi-scenario comparison output
- `weekly_brief_escalation` — verify escalation alert triggers

**Negative cases (2)**:

- `out_of_scope_hr` — HR question should be rejected
- `out_of_scope_tax` — tax calculation should be rejected

### evals/run.py

Match the Banking plugin's eval harness pattern:

```python
# Usage:
#   python evals/run.py --list          # list all cases
#   python evals/run.py --case <name> -v  # run single case verbosely
#   python evals/run.py                   # run all cases
```

Deterministic checks (not LLM-judged) for routing accuracy. Golden-file comparison for output accuracy.

### README.md

Plugin README following the Banking plugin pattern:

- Quick start (install via marketplace)
- Skill list with one-line descriptions
- Agent list with one-line descriptions
- Command reference table
- MCP integrations table
- Configuration via `supply-chain.local.md`
- Version history

## Design Decisions (Binding)

- **No router skill** — 8 skills are directly addressable
- **No jurisdiction overlays** — policy-configurable via local.md
- **3 command renames** — `/invoice-reconcile`, `/vendor-communicate`, `/supply-network-design`
- **Apache-2.0 license** — matching marketplace standard

## Exit Criteria

- [ ] 17 files created in correct directory structure
- [ ] plugin.json matches banking plugin schema
- [ ] All 8 SKILL.md files have correct YAML frontmatter with renamed commands
- [ ] All internal command references use renamed versions
- [ ] All 5 agent files present with correct references
- [ ] evals/cases.yaml has ~18 test cases (8 routing + 8 accuracy + 2 negative)
- [ ] evals/run.py follows banking plugin eval harness pattern
- [ ] README.md follows banking plugin README format
- [ ] No router skill included
- [ ] No jurisdiction overlay files included
