# Islamic Finance Domain Agents — Plugin Specification

> Status: **FINAL**
> Date: 2026-03-05
> Depends on: `specs/ch-20/review-findings.md`
> Repo: `github.com/panaversity/agentfactory-business-plugins`
> Marketplace: `agentfactory-business`
> Install: `claude plugin install islamic-finance@agentfactory-business`
> Reference: `panaversity/idfa-financial-architect` (Ch18), `anthropics/financial-services-plugins`
> Companion repo skill: `.claude/skills/companion-repo/SKILL.md`

### Canonical References (for implementing agent)

The implementing agent MUST consult these before building any component:

| What                             | URL                                                 | Use For                                                                                                                                        |
| -------------------------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Claude Code Plugin Reference** | https://code.claude.com/docs/en/plugins-reference   | Plugin anatomy: `.claude-plugin/plugin.json`, component discovery, hooks, marketplace, CLI commands, directory structure, caching              |
| **Agent Skills Specification**   | https://agentskills.io/specification                | SKILL.md format: frontmatter schema, `name`/`description` requirements, progressive disclosure, `references/`/`scripts/`/`assets/` directories |
| **Agent Skills: Using Scripts**  | https://agentskills.io/skill-creation/using-scripts | How scripts work inside skills: PEP 723 inline deps, `--help` for agents, structured output, idempotency                                       |
| **Evals for Agent Skills**       | https://developers.openai.com/blog/eval-skills/     | Eval structure: golden files, deterministic graders, negative controls, trace-based debugging                                                  |
| **Companion Repo Skill**         | `.claude/skills/companion-repo/SKILL.md`            | README quality bar, zip naming conventions, link injection into lessons, GitHub Actions workflow template, verification checklist              |

**Critical distinction the agent must understand:**

- A **plugin** is a Claude Code / Cowork package (`.claude-plugin/plugin.json`, auto-discovered components, installable via marketplace)
- A **skill** is one component inside a plugin (`skills/<name>/SKILL.md`, follows Agent Skills spec, progressive disclosure)
- A **command** is another component inside a plugin (`commands/<name>.md`, slash-command trigger)
- The **marketplace** is the repo that contains one or more plugins (`marketplace.json` at root)

---

## 1. Decision

Ship Chapter 20's skill library as a **Claude Code / Cowork plugin** inside the `agentfactory-business-plugins` marketplace repo. Students install once, skills activate automatically on Islamic finance queries, and exercises test the agent's installed capabilities.

### Design Principles

1. **Install once, use everywhere.** The plugin auto-activates on Islamic finance queries. No manual skill file loading per lesson.
2. **Skills are knowledge, commands are actions.** Skills encode domain rules (what an AAOIFI murabaha journal entry looks like). Commands trigger specific workflows (generate a journal entry for this transaction).
3. **Progressive disclosure.** Agent loads router + product skill metadata (~1,400 tokens for 13 skills) at startup. Jurisdiction overlays load on-demand as references when the router identifies a jurisdiction.
4. **Marketplace-first.** One repo for all Part 3 business plugins. Ch20 ships first. Ch18/Ch19 migrate later.

---

## 2. Repository Structure

```
panaversity/agentfactory-business-plugins/
│
├── marketplace.json                              # Marketplace catalog
├── README.md                                     # Marketplace overview + install guide
├── LICENSE                                       # Apache-2.0
├── .github/
│   └── workflows/
│       ├── islamic-finance-release.yml           # Tag: islamic-finance-v* → build zips + release
│       └── islamic-finance-evals.yml             # PR gate: validate skills + golden files
│
└── islamic-finance/                              # ══════ THE PLUGIN ══════
    │
    ├── .claude-plugin/
    │   └── plugin.json                           # Plugin manifest (v2.0.0)
    │
    ├── skills/                                   # ── KNOWLEDGE LAYER ──
    │   │
    │   ├── islamic-finance-router/               # Global routing skill
    │   │   ├── SKILL.md                          # Router decision table + universal rules
    │   │   └── references/
    │   │       ├── global-standards-map.md        # 20-jurisdiction reference table
    │   │       └── jurisdictions/                 # 13 jurisdiction overlays (loaded on demand)
    │   │           ├── bahrain-aaoifi.md
    │   │           ├── qatar-aaoifi.md
    │   │           ├── malaysia-mfrs.md
    │   │           ├── saudi-ifrs.md
    │   │           ├── uae-ifrs.md
    │   │           ├── uk-ifrs.md
    │   │           ├── kuwait-ifrs.md
    │   │           ├── oman-ifrs.md
    │   │           ├── pakistan-ifrs.md
    │   │           ├── indonesia-psak.md
    │   │           ├── nigeria-ifrs.md
    │   │           ├── turkey-tfrs.md
    │   │           └── gcc-crossborder.md
    │   │
    │   ├── murabaha/                             # Product skills (12)
    │   │   └── SKILL.md
    │   ├── ijarah-imb/
    │   │   └── SKILL.md
    │   ├── musharaka-dm/
    │   │   └── SKILL.md
    │   ├── mudaraba/
    │   │   └── SKILL.md
    │   ├── musharaka-full/
    │   │   └── SKILL.md
    │   ├── salam/
    │   │   └── SKILL.md                          # Part A: Salam
    │   ├── istisna-a/
    │   │   └── SKILL.md                          # INLINED content (no two-hop)
    │   ├── sukuk-issuer/
    │   │   └── SKILL.md
    │   ├── sukuk-investor/
    │   │   └── SKILL.md
    │   ├── takaful-ifrs17/
    │   │   └── SKILL.md
    │   ├── zakat-global/
    │   │   └── SKILL.md
    │   └── shariah-screening-global/
    │       └── SKILL.md
    │
    ├── commands/                                  # ── ACTION LAYER (4 commands) ──
    │   ├── if-journal.md                          # Journal entries + amortisation schedules
    │   ├── if-compare.md                          # Cross-jurisdiction comparison
    │   ├── if-screen.md                           # Shariah screening (4 methodologies)
    │   └── if-zakat.md                            # Zakat computation
    │
    ├── hooks/                                     # ── AUTOMATION LAYER ──
    │   └── hooks.json                             # SessionStart + PostToolUse validation
    │
    ├── scripts/                                   # ── EXECUTABLE LAYER ──
    │   └── validate-routing.py                    # 13-jurisdiction routing test harness
    │
    ├── evals/                                     # ── QUALITY GATES ──
    │   ├── routing-golden.json                    # 13 jurisdiction queries + expected outputs
    │   ├── product-golden.json                    # Product-specific output validation
    │   └── run-evals.py                           # Eval runner
    │
    ├── exercises/                                 # ── EXERCISE DATA (not auto-loaded) ──
    │   ├── ex01-murabaha-bahrain-malaysia.md
    │   ├── ex02-ijarah-four-jurisdictions.md
    │   ├── ex03-gcc-sukuk-issuance.md
    │   ├── ex04-takaful-ifrs17.md
    │   ├── ex05-malaysia-corporate-sukuk.md
    │   ├── ex06-saudi-ifi-alinma.md
    │   ├── ex07-uk-al-rayan-bank.md
    │   ├── ex08-nigeria-fgn-sukuk.md
    │   ├── ex09-global-zakat-comparison.md
    │   ├── ex10-shariah-screening-amana.md
    │   ├── ex11-aaoifi-vs-ifrs-capstone.md
    │   ├── ex12-cross-border-consolidation.md
    │   ├── ex13-islamic-fintech-scenarios.md
    │   └── ex14-full-library-capstone.md
    │
    ├── workflow-recipes/                          # ── OPERATIONAL PLAYBOOKS (not auto-loaded) ──
    │   ├── monthly-murabaha-income.md
    │   ├── quarterly-sukuk-distribution.md
    │   ├── daily-shariah-screening.md
    │   └── annual-zakat-computation.md
    │
    ├── references/                                # ── LOOKUP TABLES (not auto-loaded) ──
    │   └── aaoifi-fas-reference.md
    │
    ├── README.md                                  # Plugin-specific install + usage docs
    └── CHANGELOG.md
```

### What Claude Code Auto-Discovers vs What's Inert

| Directory           | Auto-discovered?                                                   | Purpose               |
| ------------------- | ------------------------------------------------------------------ | --------------------- |
| `skills/`           | YES — loaded at L1 (metadata) and L2 (full SKILL.md on activation) | Domain knowledge      |
| `commands/`         | YES — available as `/if-journal` etc.                              | Action workflows      |
| `hooks/`            | YES — fires on SessionStart and PostToolUse                        | Automation            |
| `scripts/`          | Available but not auto-executed                                    | Test harness          |
| `evals/`            | NO — inert directory                                               | Quality gates         |
| `exercises/`        | NO — inert directory                                               | Student exercise data |
| `workflow-recipes/` | NO — inert directory                                               | Operational playbooks |
| `references/`       | NO — inert directory (router has its own references/)              | Lookup tables         |

---

## 3. Marketplace Manifest

```json
// marketplace.json (repo root)
{
  "name": "agentfactory-business",
  "description": "Business domain agent plugins from The AI Agent Factory — Part 3: Business Domain Agent Workflows",
  "plugins": [
    {
      "name": "islamic-finance",
      "description": "Jurisdiction-aware Islamic finance agent: 12 product skills, 13 jurisdiction overlays, 4 domain commands. AAOIFI, IFRS, local standards across 20 jurisdictions.",
      "source": "./islamic-finance",
      "version": "2.0.0"
    }
  ]
}
```

Future additions (not now):

```json
    {
      "name": "idfa-financial-architect",
      "description": "Intent-Driven Financial Architecture plugin from Ch18",
      "source": "./idfa-financial-architect",
      "version": "2.0.0"
    },
    {
      "name": "ca-cpa-practice",
      "description": "CA/CPA practice domain extensions from Ch19",
      "source": "./ca-cpa-practice",
      "version": "1.0.0"
    }
```

---

## 4. Plugin Manifest

```json
// islamic-finance/.claude-plugin/plugin.json
{
  "name": "islamic-finance",
  "version": "2.0.0",
  "description": "Jurisdiction-aware Islamic finance domain agent. 12 product skills (murabaha, ijarah, sukuk, takaful, musharaka, mudaraba, salam, istisna'a, zakat, shariah screening), 13 jurisdiction overlays, 4 domain commands. Covers AAOIFI, IFRS with Islamic guidance, and local standards across 20 jurisdictions.",
  "author": {
    "name": "Panaversity",
    "url": "https://github.com/panaversity"
  },
  "homepage": "https://agentfactory.panaversity.org",
  "repository": "https://github.com/panaversity/agentfactory-business-plugins",
  "license": "Apache-2.0",
  "keywords": [
    "islamic-finance",
    "aaoifi",
    "ifrs",
    "murabaha",
    "sukuk",
    "takaful",
    "shariah",
    "zakat",
    "ijarah",
    "musharaka",
    "mudaraba",
    "jurisdiction",
    "accounting",
    "domain-agent"
  ]
}
```

---

## 5. Component Details

### 5a. Skills (Knowledge Layer) — 13 Skills

**Architecture: Router + 12 Products. Jurisdictions are references under the router.**

The router skill is the orchestrator. When it identifies a jurisdiction, it loads the relevant overlay from its own `references/jurisdictions/` directory via progressive disclosure. This means:

- **L1 metadata load**: 13 skills (1 router + 12 products) = ~1,400 tokens at startup
- **L2 activation**: Router SKILL.md loads when any Islamic finance query arrives
- **L3 on-demand**: Jurisdiction overlay loads from `references/jurisdictions/` only when needed
- **Net effect**: 2 skill activations per query (router + product), not 3

**Router Skill** (`skills/islamic-finance-router/SKILL.md`):

```yaml
---
name: islamic-finance-router
description: >
  Routes Islamic finance queries to the correct product skill and jurisdiction
  overlay. Activate for any query involving Islamic banking, AAOIFI, Shariah-
  compliant finance, sukuk, takaful, murabaha, ijarah, musharaka, mudaraba,
  salam, istisna'a, zakat, or Shariah screening. Covers 20 jurisdictions
  across 3 accounting regimes (AAOIFI-primary, IFRS with Islamic guidance,
  local standards).
---

[Router decision table content]
[Universal rules / NEVER rules]
[Jurisdiction identification logic]

When jurisdiction is identified, load the appropriate overlay from:
- See [Bahrain AAOIFI overlay](references/jurisdictions/bahrain-aaoifi.md)
- See [Malaysia MFRS overlay](references/jurisdictions/malaysia-mfrs.md)
- ... (13 total)
```

**Product Skills** (12 skills, each `skills/<name>/SKILL.md`):

```yaml
# Example: skills/murabaha/SKILL.md
---
name: murabaha
description: >
  Activate for murabaha cost-plus financing, commodity murabaha, tawarruq,
  AAOIFI FAS 2, MFRS 9 application, murabaha amortisation, deferred profit.
  Handles dual-framework journal entries and disclosure requirements.
---

[Recognition rules]
[Journal entry sequences]
[NEVER rules]
[Disclosure requirements]
[Jurisdiction-specific notes]
```

All 12 products: murabaha, ijarah-imb, musharaka-dm, mudaraba, musharaka-full, salam, istisna-a (inlined), sukuk-issuer, sukuk-investor, takaful-ifrs17, zakat-global, shariah-screening-global.

**istisna-a special handling**: Content from salam.md Part B is INLINED into `skills/istisna-a/SKILL.md`. No cross-reference redirect. The istisna'a skill is fully self-contained.

### 5b. Commands (Action Layer) — 4 Commands

| Command       | Purpose                                                        | Notes                                                                                     |
| ------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `/if-journal` | Generate journal entries + amortisation/distribution schedules | Merged: covers both journal entries and schedules. The prompt determines scope.           |
| `/if-compare` | Compare product treatment across jurisdictions                 | Used in exercises 1, 2, 5, 11. Loads product + multiple jurisdiction overlays.            |
| `/if-screen`  | Run Shariah screening (4 methodologies)                        | Separate domain: equity screening, not accounting. Uses shariah-screening-global skill.   |
| `/if-zakat`   | Compute zakat for a jurisdiction                               | Distinct calculation engine with jurisdiction-specific formulas. Uses zakat-global skill. |

**Why not /if-schedule and /if-classify?**

- `/if-schedule` merged into `/if-journal` — a schedule IS journal entries over time
- `/if-classify` removed — classification IS routing. The router + product skill already determine instrument classification when any query is asked.

**Command: `/if-journal`**

```markdown
# /if-journal

Generate jurisdiction-aware journal entries or amortisation/distribution schedules
for an Islamic finance transaction.

## Usage

/if-journal <product> <jurisdiction> <transaction-details>

## Examples

/if-journal murabaha bahrain "BHD 500,000, 18 months, 18% markup, asset: vehicle"
/if-journal sukuk-issuer malaysia "MYR 1B, 5-year, wakala structure"
/if-journal ijarah-imb uk "GBP 350,000 home finance, 25 years, diminishing musharaka"

## Workflow

1. Route to the correct product skill via islamic-finance-router
2. Load the jurisdiction overlay from router references
3. Generate journal entries for all recognition events (initial, periodic, derecognition)
4. If the transaction spans multiple periods, produce the full amortisation/distribution schedule
5. Apply jurisdiction-specific labels and disclosure requirements
6. Flag any items requiring SSB review
```

**Command: `/if-compare`**

```markdown
# /if-compare

Compare treatment of a product across multiple jurisdictions.

## Usage

/if-compare <product> <jurisdiction1> <jurisdiction2> [jurisdiction3...]

## Examples

/if-compare murabaha bahrain malaysia
/if-compare sukuk-investor bahrain malaysia uk nigeria

## Workflow

1. Load product skill
2. Load each jurisdiction overlay from router references
3. Build comparison matrix: recognition method, measurement basis, income labels, key disclosures
4. Highlight material differences and their balance sheet / P&L impact
5. Note any areas where professional judgment diverges between jurisdictions
```

**Command: `/if-screen`**

```markdown
# /if-screen

Run Shariah compliance screening on a company or portfolio.

## Usage

/if-screen <methodology> <company-or-portfolio-data>

## Methodologies

- sc-malaysia (Securities Commission Malaysia)
- tadawul (Saudi Exchange)
- aaoifi-ss21 (AAOIFI Shariah Standard 21)
- msci (MSCI Islamic Index)

## Examples

/if-screen sc-malaysia "Tenaga Nasional: debt/TA 0.35, cash+receivables/TA 0.28, ..."
/if-screen aaoifi-ss21 "Portfolio of 10 companies with balance sheet data..."

## Workflow

1. Load shariah-screening-global skill
2. Apply selected screening methodology thresholds
3. Test each financial ratio
4. Report: PASS/FAIL with specific ratio breakdowns
5. Calculate purification amount if applicable
6. Note divergence against other methodologies for the same company
```

**Command: `/if-zakat`**

```markdown
# /if-zakat

Compute zakat for an entity under a specific jurisdiction's rules.

## Usage

/if-zakat <jurisdiction> <financial-data>

## Examples

/if-zakat saudi "Equity SAR 40B, reserves 28B, retained earnings 18B, provisions 6B, LT debt 45B"
/if-zakat malaysia "Zakatable assets MYR 129B, current liabilities 45B"
/if-zakat pakistan "Bank deposits PKR 5B, inventory 2B, receivables 1.5B"

## Workflow

1. Load zakat-global skill
2. Identify jurisdiction zakat regime (ZATCA equity / Hanafi liquid-assets / voluntary)
3. Load jurisdiction overlay for local regulatory requirements
4. Apply correct formula with jurisdiction-specific adjustments
5. Compute zakat base and zakat amount (2.5% Hijri / 2.577% Gregorian adjustment)
6. Generate disclosure notes per jurisdiction requirements
```

### 5c. Hooks (Automation Layer)

```json
// islamic-finance/hooks/hooks.json
{
  "hooks": {
    "SessionStart": [
      {
        "hooks": [
          {
            "type": "prompt",
            "prompt": "The Islamic Finance Domain Agents plugin (v2.0.0) is active. Capabilities: 12 product skills, 13 jurisdiction overlays across 3 accounting regimes (AAOIFI, IFRS with Islamic guidance, local standards). Commands available: /if-journal (journal entries and schedules), /if-compare (cross-jurisdiction comparison), /if-screen (Shariah screening), /if-zakat (zakat computation). The router auto-activates on any Islamic finance query. $ARGUMENTS"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "prompt",
            "prompt": "Check if this output involves Islamic finance accounting. If it does NOT contain Islamic finance content, respond with just 'OK'. If it DOES contain Islamic finance content, verify these 3 rules: (1) Framework labels match the jurisdiction — AAOIFI-primary jurisdictions (Bahrain, Qatar) must NOT use IFRS default labels like 'Interest income' or 'Financial liability'. (2) Income recognition labels are jurisdiction-correct — e.g., 'Murabaha income' not 'Interest income', 'Profit distributed to sukuk holders' not 'Coupon payment'. (3) Any item requiring Shariah Supervisory Board review is flagged, not silently resolved. Report: OK if all pass, or list specific violations. $ARGUMENTS"
          }
        ]
      }
    ]
  }
}
```

### 5d. Scripts (Executable Layer)

**`scripts/validate-routing.py`** — Routing verification test harness:

```python
# /// script
# dependencies = []
# ///
"""
Islamic Finance Plugin — Routing Validation Test Harness
Run: uv run scripts/validate-routing.py

Prints 13 jurisdiction test queries with expected outputs.
Student runs each query through the installed plugin and
compares agent output against expected values.
"""
import json, sys
from pathlib import Path

def main():
    golden = Path(__file__).parent.parent / "evals" / "routing-golden.json"
    if not golden.exists():
        print(f"Error: {golden} not found", file=sys.stderr)
        sys.exit(1)
    cases = json.loads(golden.read_text())
    print("Islamic Finance Plugin — Routing Validation")
    print("=" * 60)
    print(f"Total test cases: {len(cases)}\n")
    for i, c in enumerate(cases, 1):
        print(f"Test {i:02d}: {c['jurisdiction']}")
        print(f"  Query:    {c['query']}")
        print(f"  Expected: framework={c['expected_framework']}, "
              f"income_label={c['expected_income_label']}, "
              f"disclosure={c['expected_key_disclosure']}\n")
    print("Run each query through your installed plugin.")
    print("Compare output against expected values. PASS = all 3 match.")

if __name__ == "__main__":
    main()
```

### 5e. Evals (Quality Gates)

**`evals/routing-golden.json`** — 13 jurisdiction routing tests (derived from L17):

```json
[
  {
    "jurisdiction": "Bahrain",
    "query": "Process a murabaha transaction for a Bahrain-regulated IFI",
    "expected_framework": "AAOIFI FAS 2",
    "expected_income_label": "Murabaha income",
    "expected_key_disclosure": "Shariah compliance accounting policy"
  },
  {
    "jurisdiction": "Malaysia",
    "query": "Classify a sukuk musharakah for a Malaysian issuer",
    "expected_framework": "MFRS 9 / MFRS 132",
    "expected_income_label": "Profit distributed to sukuk holders",
    "expected_key_disclosure": "SC Malaysia SRI Framework compliance"
  }
]
```

Full 13-jurisdiction set to be extracted from L17 lesson content during implementation.

**`evals/product-golden.json`** — Product-specific output validation (sample):

```json
[
  {
    "product": "murabaha",
    "jurisdiction": "bahrain",
    "scenario": "BHD 500K, 18 months, 18% markup",
    "expected_contains": ["Murabaha income", "Deferred profit", "AAOIFI FAS 2"],
    "must_not_contain": ["Interest income", "Financial liability", "IFRS 9"]
  }
]
```

---

## 6. Installation Instructions

### Path 1: Claude Code CLI (recommended)

```bash
claude plugin install islamic-finance@agentfactory-business
```

### Path 2: Cowork (Claude.ai)

```
Sidebar → Customize → Browse plugins → Personal → +
→ Add marketplace from GitHub
→ Enter: panaversity/agentfactory-business-plugins
→ Install "islamic-finance"
```

### Path 3: Local Development

```bash
git clone https://github.com/panaversity/agentfactory-business-plugins.git
claude --plugin-dir ./agentfactory-business-plugins/islamic-finance
```

### Path 4: Other Agents

| Agent           | Instructions Path                 | What to Copy                              |
| --------------- | --------------------------------- | ----------------------------------------- |
| GitHub Copilot  | `.github/copilot-instructions.md` | Router SKILL.md + relevant product skills |
| VS Code Copilot | `.vscode/copilot-instructions.md` | Same                                      |
| Cursor          | `.cursorrules`                    | Same                                      |
| Codex           | `AGENTS.md` or system prompt      | Same                                      |

Note: Only Claude Code / Cowork get full plugin functionality (auto-routing, commands, hooks). Other platforms get skill content as custom instructions.

### Exercise Data Download

```bash
# After plugin install, download exercise data for hands-on work:
gh release download v2.0.0 -R panaversity/agentfactory-business-plugins \
  -p "islamic-finance-exercise-data.zip"
unzip islamic-finance-exercise-data.zip -d exercises/
```

---

## 7. Skill File Migration

### Before (current governing artifact):

```
specs/chapter 20 islamic finance/islamic-finance-skills/
├── islamic-finance-global-router.md        # Flat markdown
├── products/
│   ├── murabaha.md                         # Basic YAML frontmatter
│   └── ... (12 files)
└── jurisdictions/
    ├── bahrain-aaoifi.md                   # Basic YAML frontmatter
    └── ... (13 files)
```

### After (plugin):

```
islamic-finance/skills/
├── islamic-finance-router/
│   ├── SKILL.md                            # Agent Skills spec frontmatter
│   └── references/
│       ├── global-standards-map.md
│       └── jurisdictions/                  # 13 overlays as reference files
│           ├── bahrain-aaoifi.md
│           └── ...
├── murabaha/
│   └── SKILL.md
├── ijarah-imb/
│   └── SKILL.md
└── ... (12 product skill directories)
```

### Migration checklist per product skill file:

- [ ] Create `skills/<name>/` directory (name = lowercase, hyphens only)
- [ ] Move content to `SKILL.md` inside directory
- [ ] Add Agent Skills spec frontmatter: `name` + `description` (required)
- [ ] Ensure `name` field matches directory name exactly
- [ ] Ensure `description` includes activation keywords for agent discovery
- [ ] Validate: `skills-ref validate ./skills/<name>`
- [ ] **istisna-a**: Inline salam.md Part B content. No cross-reference.

### Migration checklist for jurisdiction files:

- [ ] Move all 13 jurisdiction .md files to `skills/islamic-finance-router/references/jurisdictions/`
- [ ] Keep existing YAML frontmatter (name, version, description, activation keywords)
- [ ] Update router SKILL.md to reference each via relative path
- [ ] Verify router progressive disclosure loads each correctly

---

## 8. Decisions Record

All design questions resolved. No open items.

| #   | Question                  | Decision                                                                                | Rationale                                                                                                                                             |
| --- | ------------------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Jurisdiction architecture | **Option D: References under router**                                                   | 2 skill activations per query (router + product), not 3. Jurisdictions load on-demand via progressive disclosure. Router owns jurisdiction knowledge. |
| 2   | Commands                  | **4 commands**: /if-journal, /if-compare, /if-screen, /if-zakat                         | /if-schedule merged into /if-journal (a schedule IS journals over time). /if-classify removed (classification IS routing).                            |
| 3   | Hooks                     | **Both now**: SessionStart (confirm loaded) + PostToolUse (framework label validation)  | Ship complete. PostToolUse is a lightweight prompt-type hook, not heavyweight. Only fires on Write/Edit.                                              |
| 4   | Ch18 dependency           | **Standalone**                                                                          | No hard dependency on IDFA plugin. Optional recommendation in README.                                                                                 |
| 5   | Distribution              | **Marketplace**: `agentfactory-business` at `panaversity/agentfactory-business-plugins` | Parallel to `anthropics/financial-services-plugins`. Future-proof for Ch18/Ch19 migration.                                                            |
| 6   | Version                   | **v2.0.0**                                                                              | Breaking change from v1.0.0 content archive. New structure, new repo. Archive old repo.                                                               |
| 7   | Router as agent vs skill  | **Skill**                                                                               | Router is a decision table, not a multi-turn orchestrator. No separate context window needed. The 4 commands handle action orchestration.             |
| 8   | Repo structure            | **Marketplace monorepo** with plugin in `islamic-finance/` subfolder                    | 1 repo for all Part 3 plugins. Ch20 ships first. Others migrate later.                                                                                |
| 9   | Repo name                 | `panaversity/agentfactory-business-plugins`                                             | Org ✓, product + domain + type ✓, marketplace name `agentfactory-business` ✓.                                                                         |

---

## 9. Release Strategy

### GitHub Releases (v2.0.0)

| Asset                                  | Contents                                   |
| -------------------------------------- | ------------------------------------------ |
| `islamic-finance-exercise-data.zip`    | `exercises/` (14 files) + `references/`    |
| `islamic-finance-workflow-recipes.zip` | `workflow-recipes/` (4 files)              |
| `islamic-finance-full.zip`             | Everything in `islamic-finance/` directory |

### CI/CD — Per-Plugin Zip Workflow

Each plugin gets its own workflow file inside the marketplace repo. The workflow lives at repo root (`.github/workflows/`) but scopes to one plugin via path filters and the `PLUGIN` env var.

**`.github/workflows/islamic-finance-release.yml`**:

````yaml
name: Islamic Finance — Build Downloadable Zips

on:
  push:
    tags:
      - "islamic-finance-v*" # e.g., islamic-finance-v2.0.0
  workflow_dispatch:
    inputs:
      plugin:
        description: "Plugin to release"
        default: "islamic-finance"

permissions:
  contents: write

env:
  PLUGIN: islamic-finance

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Validate plugin structure
        run: |
          PLUGIN_DIR="${PLUGIN}"

          # Check required files exist
          echo "Checking plugin structure..."
          test -f "${PLUGIN_DIR}/.claude-plugin/plugin.json" || { echo "FAIL: missing plugin.json"; exit 1; }
          test -d "${PLUGIN_DIR}/skills" || { echo "FAIL: missing skills/"; exit 1; }
          test -d "${PLUGIN_DIR}/commands" || { echo "FAIL: missing commands/"; exit 1; }
          test -f "${PLUGIN_DIR}/hooks/hooks.json" || { echo "FAIL: missing hooks.json"; exit 1; }

          # Validate each skill has SKILL.md with required frontmatter
          for skill_dir in "${PLUGIN_DIR}"/skills/*/; do
            skill_name=$(basename "$skill_dir")
            skill_file="${skill_dir}SKILL.md"
            test -f "$skill_file" || { echo "FAIL: ${skill_name} missing SKILL.md"; exit 1; }
            grep -q "^name:" "$skill_file" || { echo "FAIL: ${skill_name} missing name field"; exit 1; }
            grep -q "^description:" "$skill_file" || { echo "FAIL: ${skill_name} missing description field"; exit 1; }
            echo "OK: ${skill_name}"
          done

          # Validate plugin.json is valid JSON
          python3 -m json.tool "${PLUGIN_DIR}/.claude-plugin/plugin.json" > /dev/null || { echo "FAIL: invalid plugin.json"; exit 1; }

          # Validate hooks.json is valid JSON
          python3 -m json.tool "${PLUGIN_DIR}/hooks/hooks.json" > /dev/null || { echo "FAIL: invalid hooks.json"; exit 1; }

          # Validate marketplace.json
          python3 -m json.tool marketplace.json > /dev/null || { echo "FAIL: invalid marketplace.json"; exit 1; }

          echo "All validations passed."

  build-zips:
    needs: validate
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Create download zips
        run: |
          mkdir -p dist
          cd "${PLUGIN}"

          # Full plugin zip (everything)
          zip -r ../dist/${PLUGIN}-full.zip \
            . -x '*.git*' -x '*/.DS_Store'

          # Exercise data + references
          if [ -d exercises ] && [ -d references ]; then
            zip -r ../dist/${PLUGIN}-exercise-data.zip \
              exercises/ references/ -x '*.git*'
          elif [ -d exercises ]; then
            zip -r ../dist/${PLUGIN}-exercise-data.zip \
              exercises/ -x '*.git*'
          fi

          # Workflow recipes
          if [ -d workflow-recipes ]; then
            zip -r ../dist/${PLUGIN}-workflow-recipes.zip \
              workflow-recipes/ -x '*.git*'
          fi

          cd ..
          echo "Built zips:"
          ls -lh dist/

      - name: Extract version from tag
        id: version
        run: |
          TAG="${GITHUB_REF_NAME}"
          VERSION="${TAG#${PLUGIN}-}"
          echo "version=${VERSION}" >> "$GITHUB_OUTPUT"
          echo "Version: ${VERSION}"

      - name: Create GitHub Release
        uses: softprops/action-gh-release@v2
        with:
          tag_name: ${{ github.ref_name }}
          name: "${{ env.PLUGIN }} ${{ steps.version.outputs.version }}"
          files: dist/*.zip
          body: |
            ## Islamic Finance Domain Agents Plugin ${{ steps.version.outputs.version }}

            ### Install
            ```bash
            claude plugin install islamic-finance@agentfactory-business
            ```

            ### Downloads

            | File | Contents | For |
            |------|----------|-----|
            | `islamic-finance-full.zip` | Plugin + exercises + recipes + references | Complete setup |
            | `islamic-finance-exercise-data.zip` | 14 exercises + reference tables | Chapter exercises |
            | `islamic-finance-workflow-recipes.zip` | 4 operational playbooks | Production workflows |

            ### Quick Start
            1. Install the plugin (command above)
            2. Download `islamic-finance-exercise-data.zip`
            3. Unzip and start with Exercise 1 (Lesson 4)
````

**Tag naming convention**: `{plugin-name}-v{semver}` — e.g., `islamic-finance-v2.0.0`. This allows multiple plugins in the same repo to have independent release cycles.

**Future plugins get their own workflow files:**

- `.github/workflows/idfa-release.yml` with tag `idfa-v*`
- `.github/workflows/ca-cpa-release.yml` with tag `ca-cpa-v*`

### Eval Workflow (Optional CI Gate)

**`.github/workflows/islamic-finance-evals.yml`**:

```yaml
name: Islamic Finance — Eval Suite

on:
  pull_request:
    paths:
      - "islamic-finance/skills/**"
      - "islamic-finance/commands/**"
      - "islamic-finance/evals/**"

jobs:
  eval:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Install uv
        uses: astral-sh/setup-uv@v4

      - name: Run routing validation
        run: |
          cd islamic-finance
          uv run scripts/validate-routing.py

      - name: Validate golden files exist
        run: |
          test -f islamic-finance/evals/routing-golden.json
          test -f islamic-finance/evals/product-golden.json
          python3 -c "
          import json
          r = json.load(open('islamic-finance/evals/routing-golden.json'))
          assert len(r) >= 13, f'Expected 13+ routing cases, got {len(r)}'
          print(f'Routing golden: {len(r)} cases')
          p = json.load(open('islamic-finance/evals/product-golden.json'))
          print(f'Product golden: {len(p)} cases')
          "
```

### Archive Old Repo

`panaversity/islamic-finance-domain-agents` (v1.0.0):

- Archive the repo (read-only)
- Update README: "This repository has been superseded by [agentfactory-business-plugins](https://github.com/panaversity/agentfactory-business-plugins). Install: `claude plugin install islamic-finance@agentfactory-business`"

---

## 10. Downstream: Lesson Rewrite Workstream

With the plugin spec finalized, the lesson rewrites can proceed. See `specs/ch-20/review-findings.md` Section 7 for the full plan. Summary:

| #   | Fix                                                                                   | Priority |
| --- | ------------------------------------------------------------------------------------- | -------- |
| 2a  | Add plugin installation section to L03 (Plugin Architecture)                          | P0       |
| 2b  | Redesign exercise prompts to USE installed skills (remove inline domain knowledge)    | P0       |
| 2c  | Add "Trade & Partnership Finance" lesson (salam, istisna'a, mudaraba, musharaka-full) | P0       |
| 2d  | Add error-detection steps to 4-5 existing exercises                                   | P0       |
| 2e  | Convert 3-4 Try With AI prompts to "write your own prompt" exercises                  | P0       |
| 2f  | Redesign L18 capstone: verify installed library → find gap → build extension → test   | P0       |

All P0 — shipping complete.

---

## 11. Lesson Link Injection (from companion-repo skill)

After building the plugin, every lesson with exercises must link to the marketplace install and exercise downloads. This follows the `/companion-repo` skill's Phase 4 pattern.

### Plugin Install Block (inject into L03 after architecture walkthrough)

````markdown
:::info Plugin Installation

**Claude Code CLI:**

```bash
claude plugin install islamic-finance@agentfactory-business
```
````

**Cowork:** Sidebar → Customize → Browse plugins → + → Add marketplace from GitHub → `panaversity/agentfactory-business-plugins` → Install "islamic-finance"

**Verify:** Start a new session and say "I have a Bahrain murabaha query." The agent should automatically reference AAOIFI FAS 2 — if it does, the plugin is active.
:::

````

### Exercise Requirements Block (inject into each lesson L04-L18)

```markdown
:::info Exercise Requirements

**Plugin:** Islamic Finance Domain Agents (install once — see Lesson 3)
**Exercise data:** Download [`islamic-finance-exercise-data.zip`](https://github.com/panaversity/agentfactory-business-plugins/releases/latest) and find `exercises/{exercise-filename}.md`
:::
````

### Capstone Block (L18 only)

```markdown
:::info Capstone Requirements

**Plugin:** Islamic Finance Domain Agents (install once — see Lesson 3)
**Full materials:** Download [`islamic-finance-full.zip`](https://github.com/panaversity/agentfactory-business-plugins/releases/latest) for everything in one package.
:::
```

### Link Injection Rules

- **Lessons with exercises (L04-L18)**: MUST have the Exercise Requirements block
- **Lessons without exercises (L01-L02)**: No block needed
- **L03 (Plugin Architecture)**: Gets the Plugin Install block
- **L18 (Capstone)**: Gets the Capstone block instead of the Exercise Requirements block
- **All links use `/releases/latest`** — never hardcode a version tag
- **Never use bare repo names** — always a clickable URL

### Verification After Injection

```bash
# Every lesson with exercises should have at least one clickable link
for f in apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/20-islamic-finance-domain-agents/[0-9]*.md; do
  name=$(basename "$f")
  links=$(grep -c "agentfactory-business-plugins" "$f" || true)
  exercises=$(grep -ci "exercise\|practice" "$f" || true)
  echo "$links links | $exercises exercise refs | $name"
done
```

### Quality Bar (from companion-repo skill)

A CA/CPA professional who has never used GitHub should be able to:

1. Read the lesson's Requirements block
2. Click the link
3. Download the right zip
4. Find the right file inside it
5. Start the exercise

If any step requires GitHub knowledge beyond "click download", the link text is insufficient.
