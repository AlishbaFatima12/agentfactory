# Plugin Validation Checklist

The plugin-builder teammate must validate EVERY file against these checks
AFTER writing it. These checks come from the official specifications:

- https://agentskills.io/specification (skills)
- https://code.claude.com/docs/en/sub-agents (agents)
- https://code.claude.com/docs/en/plugins-reference (plugin structure)

## Per-Skill Validation (each skills/\*/SKILL.md)

### YAML Frontmatter (from agentskills.io/specification)

```
name:
  ✓ Required
  ✓ 1-64 characters
  ✓ Lowercase letters, numbers, and hyphens only
  ✓ Must NOT start or end with hyphen
  ✓ Must NOT contain consecutive hyphens (--)
  ✓ Must MATCH the parent directory name exactly

description:
  ✓ Required
  ✓ 1-1024 characters
  ✓ Describes what the skill does AND when to use it
  ✓ Includes trigger phrases/keywords for activation

license:
  ✓ Optional but recommended (use "Apache-2.0" for our plugins)

metadata:
  ✓ Optional
  ✓ If present: author and version fields
```

### Body Content

```
  ✓ Under 500 lines (move detailed reference to references/ if needed)
  ✓ Step-by-step workflow instructions
  ✓ Output format templates (what the user sees)
  ✓ Never-do rules (domain-specific guardrails)
  ✓ No references to a router (we don't use routers)
  ✓ Universal rules from spec distributed to relevant skills
```

## Per-Agent Validation (each agents/\*.md)

### YAML Frontmatter (from code.claude.com/docs/en/sub-agents)

```
name:
  ✓ Required
  ✓ Lowercase letters and hyphens

description:
  ✓ Required
  ✓ Explains when Claude should delegate to this agent

tools:
  ✓ Optional (omit = inherit all tools)
  ✓ If specified: comma-separated list (Read, Grep, Glob, Bash, WebSearch, WebFetch)

model:
  ✓ Optional (default: inherit)
  ✓ Valid values: sonnet, opus, haiku, inherit, or full model ID

background:
  ✓ Set to true for persistent monitoring agents
  ✓ These agents run continuously, not one-shot

skills:
  ✓ List of plugin skills this agent should have preloaded
  ✓ Full skill content is injected at startup
  ✓ Agent does NOT inherit skills from parent — must list explicitly

memory:
  ✓ Optional: user, project, or local
  ✓ Use "project" for agents that accumulate knowledge about the codebase
```

### Body (system prompt)

```
  ✓ Monitoring schedule (what to check, how often)
  ✓ Alert types and thresholds
  ✓ Escalation rules (who gets notified at what severity)
  ✓ Never-do rules
  ✓ Output format for reports/alerts
  ✓ How agent interacts with /schedule for automation
```

## Plugin Structure Validation

### plugin.json (from code.claude.com/docs/en/plugins-reference)

```json
{
  "name": "✓ matches plugin directory name",
  "version": "✓ semver format (1.0.0)",
  "description": "✓ present, describes the plugin",
  "author": {
    "name": "✓ present",
    "url": "✓ valid URL"
  },
  "homepage": "✓ optional but recommended",
  "repository": "✓ optional but recommended",
  "license": "✓ Apache-2.0 for our plugins",
  "keywords": ["✓ relevant search terms"]
}
```

### Directory Structure

```
plugin-name/
├── .claude-plugin/
│   └── plugin.json          ✓ Must exist, valid JSON
├── skills/
│   └── skill-name/
│       └── SKILL.md         ✓ One per skill, name matches dir
├── agents/
│   └── agent-name.md        ✓ One per agent
├── evals/
│   ├── cases.yaml           ✓ 2+ test cases per skill + 2+ negative
│   └── run.py               ✓ Supports --list and --case flags
└── README.md                ✓ Quick start, skill table, agent table
```

## Eval Validation

```
cases.yaml:
  ✓ At least 2 routing cases per skill (N skills × 2 = minimum)
  ✓ At least 2 negative cases (queries that should NOT match)
  ✓ Each case has: name, query, expected_skill, rationale

run.py:
  ✓ python evals/run.py --list → prints all case names
  ✓ python evals/run.py --case <name> → runs single case
  ✓ python evals/run.py → runs all cases, reports pass/fail
```

## Cross-File Consistency

```
  ✓ Every skill directory name matches its SKILL.md name field
  ✓ Every agent's skills list references skills that exist in skills/
  ✓ README skill table matches actual skills/ contents
  ✓ README agent table matches actual agents/ contents
  ✓ plugin.json keywords cover all skill domains
  ✓ No skill references a router (there is no router)
  ✓ Command renames are consistent everywhere (not /reconcile in one place
    and /invoice-reconcile in another)
```

## How to Use This Checklist

The plugin-builder teammate prompt should include:

```
AFTER writing each file, validate it against the plugin validation
checklist at references/plugin-validation-checklist.md. Specifically:
- After each SKILL.md: validate name, description, body length
- After each agent.md: validate frontmatter fields, background flag, skills list
- After plugin.json: validate JSON structure and required fields
- After all files: run cross-file consistency checks
- Run evals: python evals/run.py --list && python evals/run.py
```
