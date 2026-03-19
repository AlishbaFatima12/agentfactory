# Writer Brief: Bookends (README + L01 + L02 + L15)

## Scope

You write 3 lesson files + their 6 sidecars. README is already written by the architect.

## Files to Create

```
apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/
├── 01-three-structural-failures.md
├── 01-three-structural-failures.flashcards.yaml
├── 01-three-structural-failures.summary.md
├── 02-plugin-architecture-installation.md
├── 02-plugin-architecture-installation.flashcards.yaml
├── 02-plugin-architecture-installation.summary.md
├── 15-chapter-summary-quick-reference.md
├── 15-chapter-summary-quick-reference.flashcards.yaml
└── 15-chapter-summary-quick-reference.summary.md
```

## What to Read

Read these before writing:

1. **Shared brief**: `specs/drafts/ch35-supply-chain/shared-brief.md` — command renames, terminology, fact verification flags
2. **Architecture spec**: `specs/drafts/ch35-supply-chain/architecture-spec.md` — Section 6 (YAML template), Section 7 (component catalog), Section 9 (lesson progression map)
3. **Reference lesson (L03)**: `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/03-vendor-classification-kraljic.md` — gold standard for Ch 35 quality
4. **Governing spec lines 1-62**: Introduction + Three Structural Failures + Plugin Architecture sections

### Spec Line Ranges

| Lesson | Read These Spec Lines                                                                           |
| ------ | ----------------------------------------------------------------------------------------------- |
| L01    | Lines 1-41 (Introduction + Three Structural Failures)                                           |
| L02    | Lines 44-62 (Plugin Architecture), plus the README.md in `supply-chain-skills/`                 |
| L15    | Lines 1309-1362 (Chapter Summary + Quick Reference), plus the full command table and agent list |

## Content-Specific Notes

### L01: Three Structural Failures (25 min, Conceptual)

- **No plugin commands** — this is pure problem framing
- Three failures: (1) Reconciliation Swamp, (2) Vendor Blind Spot, (3) Static Optimisation Trap
- Use the spec's concrete examples: £25-£80 per exception invoice, 15-25% discrepancy rate, "optimised for 2022 running in 2026"
- **Fact flags**: Use hedging for the £25-£80 and 15-25% figures ("Industry data typically shows...")
- Opening: The CPO quote from the spec's line 3-4
- End: Foreshadow the plugin architecture — "The next lesson introduces the 8-skill plugin that addresses each of these failures"
- **Try With AI**: 3 prompts asking Claude to diagnose supply chain failures in the student's own organisation
- Skills metadata: Conceptual, A2/B1, Understand level

### L02: Plugin Architecture and Installation (20 min, Setup)

- **First plugin commands**: Show the plugin directory tree (installable components only — see shared-brief.md)
- Installation instructions: Same pattern as Banking Ch 32 L02 (Cowork sidebar -> marketplace -> GitHub -> install)
- Show the `supply-chain.local.md.template` and explain it will be populated in L03-L04
- List all 8 commands with one-line descriptions (use the renamed commands!)
- List all 5 agents with one-line descriptions
- **Command rename explanation**: Briefly explain why 3 commands are renamed (collision avoidance)
- **Try With AI**: 3 prompts — (1) verify plugin installed, (2) list available commands, (3) explore one skill's help text
- Skills metadata: Technical, A2, Apply level

### L15: Chapter Summary and Quick Reference (15 min, Reference)

- **Central insight**: "Every supply chain problem is an information problem before it is an operational problem" (spec line 1313)
- Quick reference tables:
  - All 8 commands with one-line use description
  - All 5 agents with purpose and schedule
  - Key thresholds (OTD, quality, invoice tolerance defaults)
- "What this chapter built" summary (spec lines 1319-1326)
- "What does not change" — human judgment boundaries (spec lines 1328-1330)
- Key references table (spec lines 1352-1362)
- **No exercise** — this is a reference page
- Skills metadata: Conceptual, B1, Remember level

## Exit Criteria

- [ ] 3 lesson files with complete YAML frontmatter (all fields from architecture-spec Section 6)
- [ ] 6 sidecar files (3 flashcards + 3 summaries)
- [ ] L01 uses hedging language for all flagged facts
- [ ] L02 uses renamed commands throughout
- [ ] L02 shows only installable plugin components in tree
- [ ] L15 includes all 8 commands and 5 agents in quick reference
- [ ] No `import` statements for non-existent components
- [ ] "Cowork" terminology used throughout (never "Claude in Excel")
- [ ] Each lesson has 3 Try With AI prompts (except L15 which is reference-only)
