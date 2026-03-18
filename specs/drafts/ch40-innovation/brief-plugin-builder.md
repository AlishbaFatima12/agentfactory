# Writer Brief: Innovation Plugin

**Writer**: plugin-builder
**Deliverable**: Complete innovation plugin at `agentfactory-business-plugins/innovation/`
**Total files**: 20
**Reference**: `agentfactory-business-plugins/supply-chain/` (reference plugin structure)

**Read before building**:

1. `specs/drafts/ch40-innovation/shared-brief.md` — shared rules (especially Section 9: Router Distribution Guide)
2. `specs/drafts/ch40-innovation/architecture-spec.md` — master spec (especially Section 6: Router Distribution Guide)
3. ALL files in `specs/drafts/chap29_innovation/innovation-skills/` — these are the SOURCE for every skill and agent
4. `specs/drafts/chap29_innovation/innovation-skills/innovation-global-router.md` — router logic to distribute
5. `agentfactory-business-plugins/supply-chain/` — reference plugin structure (skills/, agents/, evals/, .claude-plugin/)
6. `agentfactory-business-plugins/supply-chain/.claude-plugin/plugin.json` — reference plugin.json format
7. One SKILL.md from supply-chain (e.g., `skills/vendor-assessment/SKILL.md`) — reference SKILL.md format with YAML frontmatter

---

## Plugin Directory Structure

```
innovation/
├── .claude-plugin/
│   └── plugin.json          ← Plugin manifest (name, version, description, skills list)
├── skills/
│   ├── idea/SKILL.md        ← From products/idea.md + router context + trigger phrases
│   ├── discovery/SKILL.md   ← From products/discovery.md + router context
│   ├── hypothesis/SKILL.md  ← From products/hypothesis.md + router context
│   ├── canvas/SKILL.md      ← From products/canvas.md + router context
│   ├── financials/SKILL.md  ← From products/financials.md + router context
│   ├── pitch/SKILL.md       ← From products/pitch.md + router context
│   ├── sprint/SKILL.md      ← From products/sprint.md + router context
│   ├── market/SKILL.md      ← From products/market.md + router context
│   ├── gtm/SKILL.md         ← From products/gtm.md + router context
│   └── validate/SKILL.md    ← From products/validate.md + router context
├── agents/
│   ├── idea-generator.md    ← From agents/idea-generator-agent.md
│   ├── customer-intelligence.md ← From agents/customer-intelligence-agent.md
│   ├── business-model-architect.md ← From agents/business-model-architect-agent.md
│   └── fundraising-readiness.md ← From agents/fundraising-readiness-agent.md
├── local.md.template         ← From innov.local.md.template (copy verbatim)
├── evals/
│   ├── cases.yaml           ← Evaluation test cases
│   └── run.py               ← Eval runner script
├── README.md                ← Plugin README
└── LICENSE                  ← Apache-2.0
```

---

## Transformation Rules: Source → Plugin

### Skills (products/_.md → skills/_/SKILL.md)

Each source product file becomes a SKILL.md. The transformation:

1. **YAML frontmatter**: Convert to standard SKILL.md format (match supply-chain reference):

   ```yaml
   ---
   name: [skill-name]
   version: 1.0.0
   description: >
     [Trigger phrases from architecture-spec.md Section 6 for this skill]
   plugin-command: /[command]
   ---
   ```

2. **Router logic injection**: After the YAML frontmatter, BEFORE the skill's own content, add a "CONTEXT LOADING" section:

   ```markdown
   ## CONTEXT LOADING

   Before executing, check for `innov.local.md` in the working directory.
   If found, extract:

   - venture: name, stage, type, problem_statement, target_customer
   - key_assumptions: all entries with IDs, risk levels, evidence, test status
   - [other relevant sections for this specific skill]

   If `innov.local.md` is not found:
   Continue with conversation context. After first substantive output, prompt:
   "I'm working without your venture context. Run Exercise 8 from Chapter 40
   to build innov.local.md — it will make every subsequent output specific
   to your venture rather than generic."

   ## STAGE-AWARE CALIBRATION

   Check venture.stage and calibrate:
   [Include the relevant stage warnings for THIS skill from the router]

   ## DLA PROGRESSION CHECK

   [Include the relevant skip warning for THIS skill]
   ```

3. **Skill content**: Copy the full content from the source product file (task types, output structures, quality standards, NEVER DO THESE).

4. **Universal rules**: Each skill ends with the applicable universal rules from the router:
   - ALL skills: assumption tracking (Step 5)
   - financials/canvas/pitch/market: financial reasoning (Step 6)
   - pitch only: pitch quality standard (Step 7)

### Which router rules go into which skills

| Router Rule         | idea | discovery | hypothesis | canvas | financials | pitch | sprint | market | gtm | validate |
| ------------------- | ---- | --------- | ---------- | ------ | ---------- | ----- | ------ | ------ | --- | -------- |
| Context loading     | Y    | Y         | Y          | Y      | Y          | Y     | Y      | Y      | Y   | Y        |
| Stage calibration   | Y    | Y         | Y          | Y      | Y          | Y     | Y      | Y      | Y   | Y        |
| DLA progression     | Y    | Y         | Y          | Y      | Y          | Y     | Y      | Y      | Y   | Y        |
| Assumption tracking | Y    | Y         | Y          | Y      | Y          | Y     | Y      | Y      | Y   | Y        |
| Financial reasoning | —    | —         | —          | Y      | Y          | Y     | —      | Y      | —   | —        |
| Pitch quality       | —    | —         | —          | —      | —          | Y     | —      | —      | —   | —        |

### Skill-specific stage calibration

| Skill         | IDEA                 | DISCOVERY        | VALIDATION          | MVP             | GROWTH                           |
| ------------- | -------------------- | ---------------- | ------------------- | --------------- | -------------------------------- |
| `/idea`       | Focus                | OK               | Warn: past ideation | Warn: pivoting? | Warn: optimising, not innovating |
| `/discovery`  | Focus                | Focus            | OK                  | OK              | OK                               |
| `/hypothesis` | Warn: discover first | OK               | Focus               | OK              | OK                               |
| `/canvas`     | Warn: premature      | OK               | Focus               | Focus           | OK                               |
| `/financials` | Warn: no data        | Warn: early      | OK                  | Focus           | Focus                            |
| `/pitch`      | Warn: no traction    | Warn: early      | OK                  | OK              | Focus                            |
| `/sprint`     | OK                   | OK               | Focus               | Focus           | OK                               |
| `/market`     | OK                   | OK               | OK                  | OK              | Focus                            |
| `/gtm`        | Warn: premature      | Warn: no ICP yet | OK                  | Focus           | Focus                            |
| `/validate`   | N/A                  | OK               | Focus               | Focus           | OK                               |

### Agents (agents/_.md → agents/_.md)

Copy agent files with minimal transformation:

1. Keep the same YAML frontmatter format
2. Keep all content verbatim
3. Rename files: `idea-generator-agent.md` → `idea-generator.md` (drop `-agent` suffix)

### local.md.template

Copy `innov.local.md.template` verbatim as `local.md.template`.

---

## plugin.json Format

Follow the supply-chain plugin.json format:

```json
{
  "name": "innovation",
  "version": "1.0.0",
  "description": "Innovation & Intrapreneurship domain agent for The AI Agent Factory (Chapter 40). 10 skills covering the full DLA Stack: Design Thinking (customer discovery, ideation), Lean Startup (hypothesis testing, MVP design, validated learning), Business Model Canvas, financial modelling, competitive intelligence, go-to-market strategy, investor pitch, and innovation sprints. 4 persistent agents for continuous innovation intelligence. Policy-configurable via innov.local.md.",
  "author": "Panaversity",
  "license": "Apache-2.0",
  "skills": [
    "skills/idea/SKILL.md",
    "skills/discovery/SKILL.md",
    "skills/hypothesis/SKILL.md",
    "skills/canvas/SKILL.md",
    "skills/financials/SKILL.md",
    "skills/pitch/SKILL.md",
    "skills/sprint/SKILL.md",
    "skills/market/SKILL.md",
    "skills/gtm/SKILL.md",
    "skills/validate/SKILL.md"
  ],
  "agents": [
    "agents/idea-generator.md",
    "agents/customer-intelligence.md",
    "agents/business-model-architect.md",
    "agents/fundraising-readiness.md"
  ]
}
```

---

## Evals

### cases.yaml

Design 14 evaluation cases (matching banking plugin pattern):

**Routing cases** (5):

1. Idea generation prompt → `/idea` activates
2. Customer discovery prompt → `/discovery` activates
3. Financial model prompt → `/financials` activates
4. Pitch deck prompt → `/pitch` activates
5. Ambiguous prompt → correct skill activates based on context

**Accuracy cases** (5): 6. Assumption map has 3 tiers with correct risk scoring 7. MVP design excludes features that test no critical assumption 8. BMC has evidence quality per block 9. Unit economics correctly calculates LTV:CAC ratio 10. Pitch narrative has 9 slides with emotional jobs

**Negative cases** (4): 11. Should warn when building before validating (DLA progression) 12. Should warn when churn is ASSUMED in financial model 13. Should not use banned pitch phrases 14. Should prompt for innov.local.md when not found

### run.py

Follow supply-chain evals pattern:

- `python evals/run.py --list` shows all 14 cases
- `python evals/run.py --case [name] -v` runs one case verbosely
- `python evals/run.py --all` runs all cases

---

## README.md

Follow supply-chain README pattern:

```markdown
# Innovation & Intrapreneurship Domain Agents

Plugin for **Chapter 40: Intrapreneurship & Innovation Agents** from [The AI Agent Factory](https://learn.panaversity.org) by Panaversity.

Innovation and intrapreneurship domain agent (v1.0.0) with 10 skills covering the full DLA Stack — Design Thinking, Lean Startup, and Agile — and 4 persistent agents for continuous innovation intelligence. Policy-configurable via `innov.local.md`.

---

## Quick Start

### Option A: Claude Code CLI (Recommended)

[install command]

### Option B: Cowork (Claude.ai)

[install via marketplace]

### Option C: Download ZIP

[release page]

### Option D: Clone for Development

[git clone]

### Verify Installation

Start a new Claude session and say: "I am starting a new venture for [problem]. Help me generate 100 ideas." The agent should automatically use the /idea skill with the 10-category framework — if it does, the plugin is active.

---

## What's in This Plugin

### 10 Skills (Commands)

[table of all 10 commands with one-line descriptions]

### 4 Persistent Agents

[table of all 4 agents with weekly/on-demand tasks]

### Configuration

[innov.local.md explanation]

---

## The DLA Stack

[brief explanation with flow diagram]
```

---

## LICENSE

Apache-2.0 (match supply-chain plugin).

---

## Exit Criteria

- [ ] 10 SKILL.md files with correct YAML frontmatter and embedded router logic
- [ ] 4 agent .md files
- [ ] plugin.json with all skills and agents listed
- [ ] local.md.template (copied from source)
- [ ] evals/cases.yaml with 14 test cases
- [ ] evals/run.py following supply-chain pattern
- [ ] README.md following supply-chain format
- [ ] LICENSE (Apache-2.0)
- [ ] Every SKILL.md has trigger phrases from architecture-spec.md Section 6
- [ ] Every SKILL.md has context loading + stage calibration + DLA progression check sections
- [ ] No router skill (router logic distributed into each skill)
- [ ] All 10 commands match source names exactly (/idea, /discovery, /hypothesis, /canvas, /financials, /pitch, /sprint, /market, /gtm, /validate)
