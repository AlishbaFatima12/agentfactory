# Chapter 38: Operations Management — Shared Writer's Brief

**Version:** 1.0
**Date:** 2026-03-18
**For:** All writers and the plugin builder

---

## Content Identity

**Who this chapter is for:** Operations professionals, COOs, compliance officers, operations managers, risk managers, audit leads, and any business professional responsible for keeping an organisation running smoothly. Students at this point in Part 3 have completed chapters on finance, legal, sales, supply chain, HR, and are now building the operations intelligence layer.

**Tone:** Professional operations — practical, authoritative, judgment-focused. Not academic. Not theoretical. Every concept is grounded in "here is a real operational problem; here is how to address it with structured intelligence." The governing spec's COO voice sets the tone: direct, experienced, consequence-aware.

**Central insight:** Operations is not an administrative function — it is an intelligence function. Its job is to make the invisible visible. Vendor spend nobody has totalled. Processes nobody has documented. Compliance obligations nobody has mapped. Risks nobody has quantified.

---

## The Two-Plugin Architecture

This chapter teaches with TWO plugins simultaneously:

### Official Plugin (Anthropic)

- **Repo:** `knowledge-work-plugins/operations`
- **Install:** Cowork sidebar -> Customize -> Browse plugins -> find Operations -> Install
- **6 commands:** `/vendor-review`, `/process-doc`, `/change-request`, `/capacity-plan`, `/status-report`, `/runbook`
- **6 auto-skills:** `vendor-management`, `process-optimization`, `change-management`, `risk-assessment`, `compliance-tracking`, `resource-planning`

### Custom Plugin (Panaversity)

- **Repo:** `agentfactory-business-plugins/operations-intelligence`
- **Install:** Cowork sidebar -> Customize -> Browse plugins -> Personal -> + -> Add marketplace from GitHub -> enter `https://github.com/panaversity/agentfactory-business-plugins` -> find Operations Intelligence -> Install
- **4 commands:** `/audit`, `/contract`, `/incident`, `/metrics`
- **4 agents:** vendor-watchdog, process-health, compliance-monitor, change-tracker
- **1 config:** `local.md.template` -> `ops.local.md`

### The Zero-Overlap Rule

Official covers base operational workflows. Custom covers the gaps. There is ZERO overlap:

| Capability            | Official Plugin              | Custom Plugin |
| --------------------- | ---------------------------- | ------------- |
| Vendor evaluation     | `/vendor-review`             | --            |
| Contract analysis     | --                           | `/contract`   |
| Process documentation | `/process-doc` + `/runbook`  | --            |
| Change management     | `/change-request`            | --            |
| Compliance tracking   | `compliance-tracking` (auto) | --            |
| Audit preparation     | --                           | `/audit`      |
| Risk assessment       | `risk-assessment` (auto)     | --            |
| Incident management   | --                           | `/incident`   |
| Metrics framework     | --                           | `/metrics`    |
| Status reporting      | `/status-report`             | --            |
| Persistent agents     | --                           | 4 agents      |

### When to Use Which

- **Official commands** are slash commands: `/vendor-review`, `/process-doc`, `/change-request`, `/runbook`, `/status-report`
- **Official auto-skills** are TRIGGER-ONLY: `compliance-tracking`, `risk-assessment`, `process-optimization` activate from natural language keywords, NOT from slash commands. NEVER write `/compliance-tracking` as a command in lesson text.
- **Custom commands** are slash commands: `/audit`, `/contract`, `/incident`, `/metrics`

---

## Cross-Reference Map

### Lesson Dependencies (Data/Output Flow)

| From Lesson | Output Produced                               | Used By                                                                               |
| ----------- | --------------------------------------------- | ------------------------------------------------------------------------------------- |
| L02         | `ops.local.md` configuration                  | All subsequent lessons                                                                |
| L03         | Vendor register (portfolio, SLAs, scorecards) | L04 (contract analysis for top vendors)                                               |
| L04         | Contract obligations table                    | L07 (contractual obligations feed compliance map)                                     |
| L05         | SOP library                                   | L06 (change impact references SOPs), L10 (corrective actions may require SOP updates) |
| L06         | Change log                                    | L12 (change-tracker agent monitors this)                                              |
| L07         | Compliance obligation map                     | L08 (audit evidence draws from this), L12 (compliance-monitor tracks this)            |
| L09         | Risk register                                 | L11 (risk metrics reference this)                                                     |
| L10         | Corrective actions                            | L11 (incident metrics reference this)                                                 |
| L11         | Metrics dashboard + monthly report            | L13 (intelligence brief synthesises this)                                             |
| L12         | 4 configured agents                           | L13 (agent outputs feed the brief)                                                    |
| L13         | Operations intelligence brief                 | L14 (capstone uses everything)                                                        |

### Key Cross-References to Write Into Lessons

- L04 should tell students: "You will use these contract obligations again in Lesson 7 (Compliance) and Lesson 8 (Audit)"
- L05 should tell students: "Keep this SOP library — Lesson 6 (Change Management) will reference your SOPs when mapping change impact"
- L06 should connect: "The change-tracker agent in Lesson 12 will monitor the change pipeline you build here"
- L07 should connect: "The compliance-monitor agent in Lesson 12 will track the obligations you map here"
- L11 should connect: "The intelligence brief in Lesson 13 draws directly from the metrics you define here"
- L12 should reference: "These agents monitor the operational data you built in Lessons 3-11"

---

## Exercise Dependency Chain

```
L02: ops.local.md (required by all)
  |
  +-- L03: Vendor register
  |     +-- L04: Contract obligations (adds to vendor data)
  |           +-- L07: Compliance map (uses contractual obligations)
  |                 +-- L08: Audit evidence (tests compliance map)
  |
  +-- L05: SOP library
  |     +-- L06: Change impact (references SOPs)
  |
  +-- L09: Risk register
  +-- L10: Incident post-mortem
  +-- L11: Metrics dashboard
  +-- L12: Agent deployment (monitors L03, L05, L06, L07 data)
  +-- L13: Intelligence brief (synthesises L11 + L12)
  +-- L14: Capstone (all of the above)
```

---

## Sidecar File Rules

Every `.md` lesson file gets exactly TWO sidecar files with matching names:

1. **`.flashcards.yaml`** — 8-15 flashcards covering key concepts from that lesson
2. **`.summary.md`** — 200-400 word executive summary

Example: `05-process-documentation-sops-runbooks.md` produces:

- `05-process-documentation-sops-runbooks.flashcards.yaml`
- `05-process-documentation-sops-runbooks.summary.md`

---

## Fact Verification Flags

These statistics appear in the governing spec and MUST use hedging language unless verified:

| Claim                                  | Where It Appears | Status                                                         |
| -------------------------------------- | ---------------- | -------------------------------------------------------------- |
| "20-30% vendor overspend"              | L01, L03         | [VERIFY] — use "often-cited industry estimates suggest 20-30%" |
| "70% of time on reactive consequences" | L01 (COO quote)  | [VERIFY] — attribute to the fictional COO quote                |
| "8-10% addressable savings"            | L03              | [VERIFY] — use "industry benchmarks often cite 8-10%"          |

---

## Cowork Terminology

**ALWAYS:** "Cowork" (the collaborative workspace)
**NEVER:** "Claude in Excel", "Claude Cowork", "Claude in Cowork"

See `.claude/rules/cowork-content.md` for the full terminology rules.

When writing Try With AI setups: `"Use these prompts in Cowork or your preferred AI assistant."`

---

## Plugin Command Syntax Conventions

### Official Plugin Commands (Slash Commands)

```
/vendor-review
[Natural language description of what you want to evaluate]
```

These accept free-form natural language after the command name. No `type:` parameter needed (the official plugin infers from context).

### Custom Plugin Commands (Slash Commands)

```
/contract
[Contract text or description + what you want extracted]
```

Same pattern — slash command followed by natural language. The custom plugin skills have task type routing built in (e.g., obligation extraction vs. risk flagging vs. renewal strategy) but students don't need to specify a type parameter.

### Official Auto-Skills (Natural Prompts)

Auto-skills are NOT invoked with a slash command. Students write natural prompts:

```
Map our compliance obligations for a UK professional services firm
regulated by the FCA. We are subject to UK GDPR, Companies Act,
and AML regulations.
```

The `compliance-tracking` auto-skill activates from the keywords "compliance", "obligations", "regulatory". The student never types `/compliance-tracking`.

---

## Exercise 'What to Evaluate' Sections

Every exercise MUST include a "What to evaluate" section teaching students to assess AI output quality. This is a core pedagogical pattern: students are not just using the tool — they are learning to judge whether the tool's output is fit for purpose.

Template:

```markdown
**What to evaluate:**

- Does the output include [specific required element]?
- Is [classification/scoring] appropriate given the input data?
- Are there [gaps/omissions] the agent should have caught?
- Would [target audience — e.g., a COO, a compliance officer] find this actionable?
- Does the output follow [standard — e.g., the SOP quality standard, the risk scoring methodology]?
```

---

## Case Study / Running Example

The chapter uses a **fictional 200-person professional services firm** as the running context. This matches the COO quote in the governing spec opening. Writers should use this firm for all exercises:

- **Size:** 200 employees
- **Type:** Professional services (consulting / advisory)
- **Jurisdictions:** UK primary, with references to Pakistan and UAE where relevant
- **Regulatory:** UK GDPR, Companies Act, potentially FCA if financial services
- **Vendors:** 40-50 vendors across software, professional services, infrastructure, facilities
- **Currency:** GBP primary, with PKR and USD equivalents where helpful
- **Key contacts:** COO, CFO, CCO, CISO, Operations Manager, Change Manager (fictional)

The firm is NOT named in the spec — writers should NOT invent a company name. Use "your organisation" language and the generic firm profile as exercise context.

---

## Content Quality Requirements

1. **Full YAML frontmatter** — all fields from the template in the architecture spec
2. **Compelling narrative opening** — real-world scenario, 2-3 paragraphs before first section
3. **Tables comparing concepts** — at least one comparison/classification table per lesson
4. **Three "Try With AI" prompts** — Reproduce, Adapt, Apply pattern
5. **`<Flashcards />` tag** at the bottom of every lesson (before the "Continue to" link)
6. **No `import` statements** — zero imports in any lesson file
7. **Every exercise has "What to evaluate"** — students assess AI output quality
8. **`:::note Keep This File`** reminders between lessons where outputs carry forward
9. **Plugin setup reminder** — `:::tip` admonition for lessons after L02
