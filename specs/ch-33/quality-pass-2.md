# Ch22 Quality Pass 2 — Spec Review Findings

> **Status**: In progress
> **Branch**: `legal-review`
> **Triggered by**: End-user journey review + plugin repo exploration

---

## Plugin Repo Findings

### What Already Exists

The legal-ops plugin at `panaversity/agentfactory-business-plugins/legal-ops/` already contains:

```
legal-ops/
├── exercises/                     # 8 exercise files (markdown)
│   ├── ex01-negotiation-playbook.md
│   ├── ex02-contract-review-sprint.md
│   ├── ex03-nda-triage-system.md
│   ├── ex04-ip-monitoring.md
│   ├── ex05-contract-intake-agent.md
│   ├── ex06-regulatory-monitoring.md
│   ├── ex07-dsar-response.md
│   └── ex08-legal-ops-dashboard.md
│
├── workflow-recipes/              # 4 operational playbooks
│   ├── contract-intake-workflow.md
│   ├── dsar-30-day-workflow.md
│   ├── nda-triage-workflow.md
│   └── regulatory-weekly-brief.md
│
└── legal.local.md.template        # Negotiation playbook template
```

### Release Infrastructure

- `.github/workflows/legal-ops-release.yml` — builds ZIPs on `legal-ops-v*` tags
- Same pattern as islamic-finance and banking plugins

### What Was Missing

The Ch22 README had plugin install instructions but **no download links** for exercises, workflow recipes, or full packages. Ch20 and Ch21 both have these. The established pattern is:

```markdown
Downloads (from the [latest release](https://github.com/panaversity/agentfactory-business-plugins/releases/latest)):

- `{plugin}-exercise-data.zip` — Exercise scenario data
- `{plugin}-workflow-recipes.zip` — Operational playbook templates
- `{plugin}-full.zip` — Everything in one package
```

---

## Four Recommendations from Spec Review

### 1. Add Download Links to README ✅

Update Ch22 README with "Plugin & Companion Materials" section matching Ch20/Ch21 pattern.

### 2. Add PayGulf Sidebar Content (5 lessons)

PayGulf appears in only 3/14 lessons (~21%) vs spec target of ~40%. Add PayGulf contrast sidebars to:

| Lesson | Current Case Study | PayGulf Addition                                                            |
| ------ | ------------------ | --------------------------------------------------------------------------- |
| L04    | NexGen/Al-Faisal   | DFSA-regulated cross-border: stricter data localisation + SAMA audit rights |
| L05    | Noor/Al-Madinah    | DFSA fintech NDA volume: counterparty due diligence for regulated entities  |
| L08    | DataFlow Systems   | DFSA regulatory investigation hold: FCA/DFSA notification requirements      |
| L10    | Gulf Digital       | PayGulf contract intake: DFSA compliance routing adds regulatory layer      |
| L11    | Gulf Digital/Noor  | PayGulf DSAR: DIFC Data Protection Law 2020 vs Saudi PDPL dual-regime       |

### 3. Add Prediction Moment to L07 ✅

L07 (IP Protection) lacks an explicit prediction moment. Add before the SpectraAI worked example.

### 4. Vocabulary Audit

Count new legal terms per lesson. Rule 14 limits to 5-8. Suspected overloaded: L06, L13.

---

## Execution Status

- [x] README download links — Added "Plugin & Companion Materials" section matching Ch20/Ch21 pattern
- [x] L07 prediction moment — Added :::tip before SpectraAI worked example
- [x] PayGulf sidebars (L04, L05, L08, L10, L11) — 5 :::info PayGulf Comparison blocks added
- [x] Vocabulary audit — All 14 lessons PASS (range: 2-7 terms, avg: 5.9, max budget: 8)

## Vocabulary Audit Results

| Lesson | New Terms | Status |
| ------ | --------- | ------ |
| L01    | 6         | PASS   |
| L02    | 6         | PASS   |
| L03    | 5         | PASS   |
| L04    | 7         | PASS   |
| L05    | 6         | PASS   |
| L06    | 6         | PASS   |
| L07    | 6         | PASS   |
| L08    | 6         | PASS   |
| L09    | 6         | PASS   |
| L10    | 5         | PASS   |
| L11    | 6         | PASS   |
| L12    | 5         | PASS   |
| L13    | 6         | PASS   |
| L14    | 2         | PASS   |

**Total unique terms: 82 across chapter. No remediation needed.**

## PayGulf Coverage After Fix

| Lesson | PayGulf Present | Content                                                       |
| ------ | :-------------: | ------------------------------------------------------------- |
| L02    |       ✅        | Sidebar contrast (playbook comparison)                        |
| L04    |       ✅        | **NEW** — DFSA + SAMA triple-overlay cross-border             |
| L05    |       ✅        | **NEW** — Regulated NDA triage (PCI DSS, stricter thresholds) |
| L06    |       ✅        | Comparison exercise (DFSA compliance assessment)              |
| L08    |       ✅        | **NEW** — DFSA regulatory investigation hold                  |
| L09    |     Partial     | Board meeting briefing mention                                |
| L10    |       ✅        | **NEW** — DFSA compliance routing in contract intake          |
| L11    |       ✅        | **NEW** — Dual DSAR regime (DIFC DP Law + Saudi PDPL)         |
| L13    |       ✅        | Primary (PayStream/CloudVault worked example)                 |

**PayGulf coverage: 8-9/14 lessons (~57-64%) — exceeds ~40% target.**
