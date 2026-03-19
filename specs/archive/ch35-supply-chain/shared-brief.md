# Chapter 35: Supply Chain & Procurement — Shared Writer's Brief

Version: 1.0 | Date: 2026-03-18

---

## Content Identity

**Who this chapter is for**: Procurement professionals, supply chain managers, finance teams, and operations leaders who want to deploy AI agents across their supply chain. Students have completed earlier Part 3 chapters (finance, IDFA, banking) and understand Cowork, plugin installation, SKILL.md format, and agent architecture.

**Tone**: Professional procurement — not academic, not casual. Think "CPO presenting to the board" not "professor lecturing undergraduates." Facts, numbers, actionable recommendations. Every example should feel like it came from a real procurement team, not a textbook.

**Voice**: Second person ("you"), active voice, concrete. "Your vendor's OTD has dropped below 90%" not "It can be observed that delivery performance may have deteriorated."

---

## The 3 Command Renames (Collision Avoidance)

These commands from the governing spec are renamed in the plugin to avoid collisions with Anthropic-owned surfaces:

| Spec Name         | Plugin Name              | Use in Lessons                        |
| ----------------- | ------------------------ | ------------------------------------- |
| `/reconcile`      | `/invoice-reconcile`     | Always write `/invoice-reconcile`     |
| `/communicate`    | `/vendor-communicate`    | Always write `/vendor-communicate`    |
| `/network-design` | `/supply-network-design` | Always write `/supply-network-design` |

**All other commands keep their spec names:** `/vendor-assess`, `/supplier-risk`, `/logistics-brief`, `/spend-analysis`, `/supply-chain-brief`

When quoting the spec's sample outputs that show `/reconcile` or `/communicate` or `/network-design`, update the command name to the renamed version.

---

## Cross-Reference Map

| Source Lesson | Lessons That Reference It                                                                                 | What They Reference                          |
| ------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| L01           | L02 (why plugin exists), L15 (summary)                                                                    | Three structural failures framing            |
| L02           | L03-L14 (all assume plugin installed)                                                                     | Plugin installation, `supply-chain.local.md` |
| L03           | L04 (classification informs depth), L13 (exit uses classification)                                        | Vendor classification register               |
| L04           | L05 (tiers inform tolerances), L07 (risk extends assessment)                                              | Six-dimension assessment framework           |
| L05           | L06 (tolerance rules active during reconciliation)                                                        | Tolerance rules configuration                |
| L06           | L05 (Ex 6 re-tests Ex 2 invoices), L10 (spend patterns from invoice data), L11 (disputes from exceptions) | Invoice reconciliation results               |
| L07           | L08 (logistics risk feeds supplier risk), L12 (agent automates)                                           | Risk dashboard and thresholds                |
| L08           | L09 (carrier data informs network design), L12 (agent automates)                                          | Carrier performance data                     |
| L10           | L12 (agent automates), L14 (capstone uses)                                                                | Spend analysis patterns                      |
| L12           | L14 (capstone deploys all agents)                                                                         | Agent configurations                         |

---

## Exercise Dependency Chain

```
L03 Ex 1A (vendor classification)
  └── L04 Ex 1B (risk config using classifications)
       └── L13 Ex 8 (exit scenario for highest-risk bottleneck from Ex 1)

L06 Ex 2 (10-invoice reconciliation sprint)
  └── L05 Ex 6 (re-tests Ex 2 sample with new tolerance rules)

L07 Ex 3, L08 Ex 4, L10 Ex 5 — independent

L12 Ex 7 (dashboard aggregates all agent outputs)

L14 Capstone — integrates all exercises into one end-to-end scenario
```

**When writing an exercise that depends on a prior exercise**, include a `:::note` referencing the prerequisite:

```markdown
:::note Prerequisites
This exercise uses the vendor classification register you built in
[Exercise 1 (Lesson 3)](./03-vendor-classification-kraljic.md). If you
haven't completed it, do so before continuing.
:::
```

---

## Sidecar File Rules

Every lesson `.md` file gets exactly two sidecar files:

### `.flashcards.yaml`

- 8-12 flashcards per lesson
- Front: question (never yes/no — always "what", "how", "why", "when")
- Back: concise factual answer (1-3 sentences)
- Cover the lesson's key concepts, not trivia
- Use the same terminology as the lesson

### `.summary.md`

- 150-250 words
- Three paragraphs: (1) what the lesson covers, (2) key concepts, (3) connection to next lesson
- No YAML frontmatter — just a heading and prose
- Heading: `# {Lesson Title} -- Summary`

---

## Fact Verification Flags

These claims from the governing spec MUST use hedging language:

| Claim                                               | Hedging Required                                                                                |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| GEP: "60-80% exception reduction"                   | "Research from GEP suggests that..." or "According to GEP's analysis of multi-agent systems..." |
| Samir Saci: "10-12 week studies now conversational" | "Samir Saci's published work demonstrates that..."                                              |
| "15-25% of invoices have discrepancies"             | "Industry data typically shows 15-25%..."                                                       |
| "£25-£80 per invoice" exception cost                | "Estimates suggest £25-£80 per exception invoice..."                                            |

**Never state these as absolute facts.** Use attribution and hedging.

---

## Cowork Terminology

Per `.claude/rules/cowork-content.md`:

| Correct                                                      | Wrong                          |
| ------------------------------------------------------------ | ------------------------------ |
| "Cowork"                                                     | "Claude in Excel"              |
| "Open Cowork"                                                | "Open Claude in Excel"         |
| "In the Cowork sidebar"                                      | "In the Claude sidebar"        |
| "Use these prompts in Cowork or your preferred AI assistant" | Platform-specific instructions |

**Exception**: If a lesson legitimately cross-references Chapter 28's product (Claude in Excel), that reference is correct. But Chapter 35 teaches Cowork workflows — never substitute.

---

## Plugin Trees in Lessons

When showing the plugin directory structure to students (L02), show only what they install:

**Show:**

```
supply-chain/
├── .claude-plugin/
│   └── plugin.json
├── skills/
│   ├── vendor-assessment/SKILL.md
│   ├── supplier-risk/SKILL.md
│   ├── invoice-reconciliation/SKILL.md
│   ├── vendor-communication/SKILL.md
│   ├── logistics-brief/SKILL.md
│   ├── spend-analysis/SKILL.md
│   ├── network-design/SKILL.md
│   └── supply-chain-brief/SKILL.md
├── agents/
│   ├── vendor-health-monitor.md
│   ├── invoice-reconciliation-agent.md
│   ├── spend-intelligence-agent.md
│   ├── procurement-calendar-agent.md
│   └── logistics-intelligence-agent.md
└── README.md
```

**Do NOT show:** `evals/`, `tests/`, `examples/`, `CLAUDE.md`, `.gitignore`

---

## Quality Reference

All writers should match the quality standard of:

- **Banking Ch 32 L03** (`03-ifrs9-staging-ecl.md`) — for YAML frontmatter completeness, section structure, Try With AI format, and technical depth
- **L03 of this chapter** (vendor-classification-kraljic) — once the reference builder completes it, use it as the gold standard for Ch 35 specifically

---

## Common Mistakes to Avoid

1. **Using old command names** — Always use the renamed commands (`/invoice-reconcile`, `/vendor-communicate`, `/supply-network-design`)
2. **Importing non-existent components** — NO `import` statements for Flashcards or Quiz components
3. **Saying "Claude in Excel"** when you mean "Cowork"
4. **Stating GEP/Saci claims as fact** — Always hedge
5. **Missing sidecar files** — Every lesson gets `.flashcards.yaml` + `.summary.md`
6. **Missing YAML frontmatter fields** — All fields from the template are required
7. **Exercises without deliverables** — Every exercise must end with a specific, tangible deliverable statement
8. **Cross-references without links** — When referencing another lesson, always include a relative link
