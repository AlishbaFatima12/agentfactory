# Writer Brief: Bookends (L01 + L02 + L15)

**Scope:** Three lessons — chapter opening, plugin install/config, and chapter summary
**Writer:** bookends writer

---

## Files to Create

### L01 — Three Operational Failure Modes

- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/01-three-operational-failure-modes.md`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/01-three-operational-failure-modes.flashcards.yaml`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/01-three-operational-failure-modes.summary.md`

### L02 — Plugin Architecture and Installation

- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/02-plugin-architecture-installation.md`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/02-plugin-architecture-installation.flashcards.yaml`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/02-plugin-architecture-installation.summary.md`

### L15 — Chapter Summary and Quick Reference

- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/15-chapter-summary-quick-reference.md`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/15-chapter-summary-quick-reference.flashcards.yaml`
- `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/38-operations-management/15-chapter-summary-quick-reference.summary.md`

**Total: 9 files**

---

## Spec Line Ranges to Read

- **L01:** Governing spec lines 1-33 (Introduction + Three Failure Modes)
- **L02:** Governing spec lines 35-73 (Plugin Architecture + Installing + ops.local.md); official plugin README; custom plugin README
- **L15:** Governing spec lines 1609-1670 (Chapter Summary + Quick Reference)

Do NOT read the full spec — your scope is only these sections.

---

## L01: Three Operational Failure Modes

**Duration:** 25 min
**Plugin commands:** None (conceptual lesson)
**Core content:**

1. **Opening narrative** — The COO quote from the spec opening (lines 1-4). This sets the tone for the entire chapter.
2. **The Operations Intelligence Gap** — The delta between what an organisation should know about its operations and what it actually knows. Every operational failure traces back to this gap.
3. **Failure Mode 1: Vendor Sprawl** — Organisations accumulate vendors like subscriptions. Overlapping capabilities, unused contracts, auto-renewing SaaS. Industry estimates suggest 20-30% vendor overspend [VERIFY — use hedging language].
4. **Failure Mode 2: Process Rot** — SOPs decay. The document reflects how things worked two years ago. Knowledge lives in people's heads, not in documents.
5. **Failure Mode 3: Compliance Drift** — Obligations accumulate. Controls drift. Evidence gaps appear. The organisation believes it is compliant because it was at the last audit.
6. **How this chapter addresses each** — Preview the plugin architecture and lesson flow that systematically closes each failure mode.

**Try With AI:** Three prompts about identifying failure modes in a student's own organisation.

**Fact verification:**

- "20-30% vendor overspend" — [VERIFY] or hedge
- "70% reactive time" — attribute to fictional COO, don't present as fact

---

## L02: Plugin Architecture and Installation

**Duration:** 30 min
**Plugin commands:** Official `/vendor-review` + Custom `/audit` (verification only)
**Core content:**

1. **Two-plugin architecture** — Explain why two plugins (official covers base, custom covers gaps). Show the zero-overlap table.
2. **Install the official Operations plugin** — Step-by-step with Cowork sidebar instructions. Match the Ch 34 README install format:
   - Cowork sidebar -> Customize -> Browse plugins -> find Operations -> Install
3. **Install the custom Operations Intelligence plugin** — Step-by-step:
   - Cowork sidebar -> Customize -> Browse plugins -> Personal -> + -> Add marketplace from GitHub -> enter `https://github.com/panaversity/agentfactory-business-plugins` -> find Operations Intelligence -> Install
4. **Verify both plugins** — Run `/vendor-review` with a simple test (e.g., "Evaluate a hypothetical cloud provider"). Run `/audit` with a simple test (e.g., "Prepare for an ISO 27001 surveillance audit"). Confirm both respond.
5. **Configure `ops.local.md`** — Introduce the configuration file. Show the template sections (Organisation Context, Vendor Portfolio, Regulatory Frameworks, Risk Configuration, Change Management, Process Library, Operational Metrics). Students populate the Organisation Context section as a minimum. Full population happens progressively through the chapter.
6. **Command overview table** — All official and custom commands with one-line descriptions. Mark which are slash commands vs. auto-skills.

**Exercise:** Install both plugins + configure Organisation Context section of ops.local.md + run verification commands.

**Cross-references:**

- Tell students: "You will populate additional sections of ops.local.md as you progress through each lesson."
- Reference the README prerequisites section for install instructions.

---

## L15: Chapter Summary and Quick Reference

**Duration:** 15 min
**Plugin commands:** Reference only
**Core content:**

1. **The central insight** — Operations is an intelligence function. Making the invisible visible.
2. **What this chapter built** — Numbered list of all 14 capabilities (vendor audit, SLA tracking, contract extraction, SOPs, change impact, compliance maps, audit preparation, risk registers, incident post-mortems, metrics frameworks, 4 agents, intelligence brief).
3. **What does not change** — Operations still requires human judgment. AI improves the quality of information, not the quality of decisions.
4. **Quick reference: Official plugin commands** — Table with command, use, lesson reference.
5. **Quick reference: Custom plugin commands** — Same format.
6. **Quick reference: Auto-skills** — Table with name, trigger keywords, lesson reference.
7. **Quick reference: Agents** — Table with agent name, purpose, schedule, lesson reference.
8. **Quick reference: Key frameworks** — Risk scoring (5x5 matrix), change classification (Standard/Significant/Major/Critical), compliance status (Current/Review/Partial/Gap/Urgent), SOP quality standards, corrective action quality test.

**Try With AI:** Three prompts asking students to synthesise the chapter's frameworks.

---

## Exit Criteria

This writer's work is DONE when:

- 9 files created (3 lessons x 3 sidecars)
- All YAML frontmatter complete per architecture spec template
- L01 narrative hooks the reader with the COO quote and three failure modes
- L02 successfully guides installation of both plugins with verification
- L15 contains complete quick-reference tables for all commands, auto-skills, agents, and frameworks
- All fact claims use hedging language where marked [VERIFY]
- No `import` statements in any file
- `<Flashcards />` tag present at bottom of each lesson
- Cowork terminology used correctly (never "Claude in Excel")
