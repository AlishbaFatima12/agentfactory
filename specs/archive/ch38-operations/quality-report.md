# Chapter 38: Operations Management — Quality Report

**Reviewer:** quality-reviewer agent
**Date:** 2026-03-18
**Overall Quality Score:** PASS

---

## 1. Overall Assessment

Chapter 38 is production-ready. All 16 files (README + 15 lessons) pass the universal quality checks. All 30 sidecar files (15 flashcards + 15 summaries) exist with correct naming. The plugin (4 skills, 4 agents, evals, local.md.template, README, plugin.json) is complete and well-structured. No blocking issues found.

Strengths:

- Exceptional narrative quality across all lessons — compelling real-world openings, professional operations voice
- Complete and consistent YAML frontmatter on every lesson file
- Zero phantom imports (confirmed via grep)
- Zero "Claude in Excel" terminology violations
- Auto-skills correctly treated as natural-language triggers throughout — never as slash commands
- Cross-references form a coherent dependency chain matching the architecture spec
- All fact claims properly hedged per spec requirements
- Plugin has zero overlap with official plugin commands

---

## 2. Per-Lesson Summary

| Lesson              | Strengths                                                                                                                                                                                               | Issues                                                                                                                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **README**          | Complete lesson flow table, chapter contract, prerequisites with both plugin install instructions. Professional tone.                                                                                   | COO quote says "400-person" firm but running example throughout is 200-person. Minor inconsistency — the quote is framed as from a different, larger firm. Acceptable as-is.          |
| **L01**             | Strong conceptual foundation. Three failure modes clearly distinguished. COO quote is powerful opener. Hedging on 20-30% stat is correct.                                                               | None.                                                                                                                                                                                 |
| **L02**             | Complete two-plugin architecture explanation. Auto-skill info box is clear. Both install paths documented. Verification commands included.                                                              | None.                                                                                                                                                                                 |
| **L03 (reference)** | Gold-standard lesson. Vendor portfolio audit with realistic worked example. Detailed "What to evaluate" section. Complete Try With AI (3 prompts).                                                      | None.                                                                                                                                                                                 |
| **L04**             | Six risk flag categories well-defined. Negotiation position framework is practical. References L03 vendor audit correctly. Forward-references L07 compliance.                                           | None.                                                                                                                                                                                 |
| **L05**             | SOP vs runbook distinction clearly taught. Three-stage documentation failure is compelling. Process gap analysis included.                                                                              | None.                                                                                                                                                                                 |
| **L06**             | Strong opening narrative (CRM upgrade breaking finance). Change classification table complete. Rollback trigger criteria well-defined. Forward-references L10 incident.                                 | None.                                                                                                                                                                                 |
| **L07**             | Five-status classification is clear. Evidence standard rule ("CURRENT requires cited evidence") is well-enforced. Auto-skill correctly invoked via natural language.                                    | None.                                                                                                                                                                                 |
| **L08**             | Flows correctly from L07 compliance map. Mock audit concept well-taught. Audit response maturity framework is practical.                                                                                | None.                                                                                                                                                                                 |
| **L09**             | 5x5 scoring matrix complete. Inherent/residual distinction clear. Untested control rule is important pedagogical point. Auto-skill correctly invoked via natural language.                              | None.                                                                                                                                                                                 |
| **L10**             | Five Whys technique taught with excellent worked example. Corrective action quality test (5 criteria) is strong. L06 cross-reference is explicit and well-placed.                                       | None.                                                                                                                                                                                 |
| **L11**             | Five design principles well-articulated. Leading/lagging distinction clear. /metrics + /status-report workflow explained as design vs reporting. Aggregates L03-L10 metrics.                            | None.                                                                                                                                                                                 |
| **L12**             | All four agents documented with detailed alert formats. Agent interdependency section is valuable. Configuration exercise references data from L03-L11.                                                 | None.                                                                                                                                                                                 |
| **L13**             | Five-step synthesis workflow is repeatable. /status-report backbone + /metrics trend analysis pattern is clear. Weekly vs monthly cadence well-distinguished.                                           | None.                                                                                                                                                                                 |
| **L14**             | Three scenarios provide meaningful differentiation. Nine-phase sprint with quality gates is well-structured. Sprint-to-lesson map ties back to source lessons. Self-assessment rubric is comprehensive. | None.                                                                                                                                                                                 |
| **L15**             | All commands, auto-skills, agents, and frameworks covered in quick reference tables. No missing entries. Caution box about auto-skills correctly placed.                                                | L15 does not end with a "Continue to" link or `<Flashcards />` at the very end. Actually, it has `<Flashcards />` but no "Continue to" link — correct for the final lesson. No issue. |

---

## 3. Issues List

No blocking issues found. Two minor observations:

| #   | File      | Line | Issue                                                                                                                                                                                                             | Severity | Fix Required                                              |
| --- | --------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------- |
| 1   | README.md | 16   | COO quote references "400-person professional services firm" while running example is 200-person. Not a contradiction — the quote is from a different, larger firm — but could confuse students who read quickly. | INFO     | No fix required. The attribution distinguishes the firms. |
| 2   | L15       | -    | L15 has no "Continue to" navigation link at the bottom. This is correct for the final lesson in a chapter.                                                                                                        | INFO     | No fix required.                                          |

---

## 4. Plugin Command Accuracy Table

Every command reference in every lesson file checked against the architecture spec.

### Official Plugin Commands

| Command           | Lessons Referenced                                             | Correct Syntax | Verified |
| ----------------- | -------------------------------------------------------------- | -------------- | -------- |
| `/vendor-review`  | L02 (verify), L03 (primary), L14 (capstone)                    | Yes            | PASS     |
| `/process-doc`    | L05 (primary), L09 (mitigation ref), L14 (capstone)            | Yes            | PASS     |
| `/runbook`        | L05 (primary), L10 (SOP update ref), L14 (capstone)            | Yes            | PASS     |
| `/change-request` | L06 (primary), L14 (capstone)                                  | Yes            | PASS     |
| `/status-report`  | L11 (primary), L13 (backbone), L14 (capstone), L15 (reference) | Yes            | PASS     |
| `/capacity-plan`  | L02 (listed, noted as not used in chapter)                     | Yes            | PASS     |

### Custom Plugin Commands

| Command     | Lessons Referenced                                                   | Correct Syntax | Verified |
| ----------- | -------------------------------------------------------------------- | -------------- | -------- |
| `/audit`    | L02 (verify), L08 (primary), L14 (capstone), L15 (reference)         | Yes            | PASS     |
| `/contract` | L04 (primary), L14 (capstone), L15 (reference)                       | Yes            | PASS     |
| `/incident` | L10 (primary), L14 (capstone), L15 (reference)                       | Yes            | PASS     |
| `/metrics`  | L11 (primary), L13 (trend analysis), L14 (capstone), L15 (reference) | Yes            | PASS     |

### Auto-Skills (Natural Language Only)

| Auto-Skill             | Lessons Referenced                                              | Used as Natural Prompt (not slash)                                      | Verified |
| ---------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------- | -------- |
| `compliance-tracking`  | L02 (explained), L07 (primary), L14 (capstone), L15 (reference) | Yes — all references explicitly state "never type /compliance-tracking" | PASS     |
| `risk-assessment`      | L02 (explained), L09 (primary), L14 (capstone), L15 (reference) | Yes — all references explicitly state "never type /risk-assessment"     | PASS     |
| `process-optimization` | L02 (explained), L05 (secondary), L15 (reference)               | Yes — noted as keyword-triggered only                                   | PASS     |

### Agents

| Agent              | Lessons Referenced                                           | Correct Name | Verified |
| ------------------ | ------------------------------------------------------------ | ------------ | -------- |
| vendor-watchdog    | L12 (primary), L13 (output), L14 (capstone), L15 (reference) | Yes          | PASS     |
| process-health     | L12 (primary), L13 (output), L14 (capstone), L15 (reference) | Yes          | PASS     |
| compliance-monitor | L12 (primary), L13 (output), L14 (capstone), L15 (reference) | Yes          | PASS     |
| change-tracker     | L12 (primary), L13 (output), L14 (capstone), L15 (reference) | Yes          | PASS     |

### No Wrong-Plugin References Found

No lesson references a command from the wrong plugin. Zero instances of custom commands used where official commands should be, or vice versa.

---

## 5. Cross-Reference Verification Table

| Cross-Reference                                   | From Lesson        | To Lesson | Direction | Verified                                                                                         |
| ------------------------------------------------- | ------------------ | --------- | --------- | ------------------------------------------------------------------------------------------------ |
| Vendor register feeds contract analysis           | L03                | L04       | Forward   | PASS — L03 deliverable says "Save this work — Lesson 4 will deepen..."                           |
| Contract obligations feed compliance map          | L04                | L07       | Forward   | PASS — L04 Keep This File note references L07 explicitly                                         |
| SOP library feeds change impact                   | L05                | L06       | Forward   | PASS — L05 Keep This File note references L06                                                    |
| Change management causes incidents                | L06                | L10       | Forward   | PASS — L06 teaching guide references L10; L10 narrative and :::note explicitly trace back to L06 |
| Compliance map feeds audit prep                   | L07                | L08       | Forward   | PASS — L07 Keep This File note references L08                                                    |
| Risk register feeds metrics                       | L09                | L11       | Forward   | PASS — L09 Forward Reference note references L11                                                 |
| Incident data feeds metrics                       | L10                | L11       | Forward   | PASS — L11 Standard Operations Metrics Library references L10 data                               |
| L03-L11 data feeds L12 agents                     | L03-L11            | L12       | Forward   | PASS — L12 opening paragraph and exercise reference data built in L03-L11                        |
| Agent outputs + metrics feed intelligence brief   | L11, L12           | L13       | Forward   | PASS — L13 inputs table explicitly maps all sources                                              |
| All lessons feed capstone                         | L03-L13            | L14       | Forward   | PASS — L14 sprint map references source lessons for every phase                                  |
| L08 uses L07 compliance map as input              | L07                | L08       | Forward   | PASS — L08 has :::note "Input Required from Lesson 7"                                            |
| L06 SOP reference from L05                        | L05                | L06       | Forward   | PASS — L06 narrative references affected SOPs                                                    |
| L10 references L06 change management failure      | L06                | L10       | Forward   | PASS — L10 has :::note "Connection to Lesson 6"                                                  |
| L11 aggregates all prior lesson metrics           | L03-L10            | L11       | Forward   | PASS — L11 Standard Operations Metrics Library has explicit "(from L03)", "(from L05)", etc.     |
| L12 agents reference which domains each automates | L03, L05, L06, L07 | L12       | Forward   | PASS — L12 agent descriptions reference specific domains                                         |
| L13 shows complete integration                    | L11, L12           | L13       | Forward   | PASS — L13 five-step synthesis workflow references all prior outputs                             |

---

## 6. Plugin Technical Checks

| Check                                                     | Result                                                                                                                                                                                                 |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| plugin.json valid JSON                                    | PASS — all required fields present (name, version, description, author)                                                                                                                                |
| Every SKILL.md has valid YAML frontmatter                 | PASS — all 4 skills (audit, contract, incident, metrics) have name, description, license                                                                                                               |
| Skill names lowercase+hyphens only                        | PASS — audit, contract, incident, metrics                                                                                                                                                              |
| Agent .md files have required frontmatter                 | PASS — all 4 agents have name, description, tools, background: true, skills list                                                                                                                       |
| Universal standards distributed to relevant skills/agents | PASS — risk scoring in vendor-watchdog; compliance status in audit + compliance-monitor; SOP quality in process-health; change classification in change-tracker; corrective action quality in incident |
| evals/cases.yaml has 8+ routing + 2+ negative             | PASS — 8 routing, 8 accuracy, 4 negative (20 total)                                                                                                                                                    |
| No overlap with official plugin commands                  | PASS — /audit, /contract, /incident, /metrics are all unique to custom plugin                                                                                                                          |
| local.md.template present with all fields documented      | PASS — 7 sections, all configurable fields documented                                                                                                                                                  |
| README.md explains two-plugin architecture                | PASS — zero-overlap table, installation instructions for both plugins                                                                                                                                  |

---

## 7. Exercise and Continuity Checks

| Check                                                                    | Result                                                                                                                                                                                                      |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Every exercise lesson has "What to evaluate" section                     | PASS — L03-L14 all have explicit "What to evaluate" bullet lists                                                                                                                                            |
| Exercises use realistic sample data                                      | PASS — consistent 200-person UK professional services firm with named specifics                                                                                                                             |
| Try With AI sections have 3 prompts (Reproduce/Adapt/Apply)              | PASS — all 15 lessons have the three-prompt pattern                                                                                                                                                         |
| Capstone (L14) uses ALL commands from both plugins                       | PASS — sprint map covers /vendor-review, /contract, /process-doc, /runbook, /change-request, /audit, /metrics, /status-report, compliance-tracking auto-skill, risk-assessment auto-skill, and all 4 agents |
| L04 references L03 vendor findings                                       | PASS                                                                                                                                                                                                        |
| L08 uses L07 compliance map as input                                     | PASS                                                                                                                                                                                                        |
| L10 references L06 change management                                     | PASS                                                                                                                                                                                                        |
| L11 has one KPI per domain (vendor, process, compliance, risk, incident) | PASS — Standard Operations Metrics Library covers all 6 domains with 2-4 metrics each                                                                                                                       |
| L12 references which domains each agent automates                        | PASS                                                                                                                                                                                                        |
| L13 shows complete integration of all components                         | PASS                                                                                                                                                                                                        |

---

## 8. Verdict

**PASS**

Chapter 38 is production-ready. All checklist items pass. No blocking issues. No conditional items.

The content demonstrates:

- Consistent professional operations voice matching the reference lesson (L03)
- Complete YAML frontmatter on all 15 lessons with skills, learning objectives, cognitive load, differentiation, and teaching guide
- Correct two-plugin architecture with zero overlap maintained throughout
- Proper hedging on all unverified statistical claims
- Complete cross-reference chain verified against architecture spec
- All plugin files technically sound with proper frontmatter, distributed standards, and comprehensive evals
- Every exercise teaches output evaluation ("What to evaluate") as a core pedagogical pattern
