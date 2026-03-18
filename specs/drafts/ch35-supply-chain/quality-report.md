# Chapter 35: Supply Chain & Procurement — Quality Report

**Date:** 2026-03-18
**Reviewer:** quality-reviewer agent
**Overall Score:** CONDITIONAL PASS

---

## Per-Writer Summary

| Writer                                                              | Files                                    | Issues Found          | Verdict          |
| ------------------------------------------------------------------- | ---------------------------------------- | --------------------- | ---------------- |
| **Reference Builder** (L03)                                         | L03 + sidecars                           | 0 critical, 0 warning | PASS             |
| **Writer 1: Bookends** (README, L01, L02, L15)                      | 4 lessons + sidecars                     | 0 critical, 1 warning | PASS             |
| **Writer 2: Vendor + Invoice** (L04, L05, L06)                      | 3 lessons + sidecars                     | 0 critical, 1 warning | PASS             |
| **Writer 3: Risk + Logistics + Spend** (L07, L08, L09, L10)         | 4 lessons + sidecars                     | 0 critical, 0 warning | PASS             |
| **Writer 4: Agents + Comms + Exit + Capstone** (L11, L12, L13, L14) | 4 lessons + sidecars                     | 1 critical, 1 warning | CONDITIONAL PASS |
| **Writer 5: Plugin Builder**                                        | plugin.json, 8 SKILL.md, 5 agents, evals | 0 critical, 0 warning | PASS             |

---

## Issues List

### Critical (must fix before merge)

**C1. L14 (Capstone) missing Try With AI section and `<Flashcards />` tag**

- File: `14-capstone-end-to-end-procurement.md`
- Every lesson per the architecture spec requires a Try With AI section with 3 prompts (Reproduce/Adapt/Apply) and a `<Flashcards />` JSX tag. L14 has neither.
- The `.flashcards.yaml` sidecar file exists but is not linked from the lesson.
- **Fix:** Add a Try With AI section (3 prompts appropriate for a capstone -- e.g. "Run this for your own category" / "Extend to a second category" / "Design the 90-day rollout") and add `## Flashcards Study Aid\n\n<Flashcards />` before the final `---` separator.
- **Note:** L15 (summary/reference) also lacks Try With AI, but this is acceptable for a reference lesson that has no new exercises. L15 does include `<Flashcards />`.

### Warning (should fix, not blocking)

**W1. L15 (Summary) missing Try With AI section**

- File: `15-chapter-summary-quick-reference.md`
- This is a 15-minute reference lesson. The spec template says "every lesson" gets Try With AI. However, similar summary lessons in other chapters (banking Ch 32) also omit Try With AI. Consider adding a brief Try With AI section or explicitly documenting that summary/reference lessons are exempt.
- **Severity:** Warning — not blocking if team agrees summary lessons are exempt.

**W2. Some summary files slightly exceed 250-word target**

- Files: `01-three-structural-failures.summary.md` (279 words), `05-three-way-match-rule-design.summary.md` (290 words), `06-invoice-reconciliation-at-scale.summary.md` (290 words), and several others in the 255-290 range.
- The shared brief specifies 150-250 words. Most are in the 240-290 range -- close but slightly over.
- **Severity:** Warning — content quality is good; minor word count trim would achieve compliance.

---

## Checklist Results

### Chapter Lessons (Universal Checks)

| Check                                                        | Result      | Notes                                                                                                                                                                                      |
| ------------------------------------------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Every lesson has complete YAML frontmatter                   | PASS        | All 15 lessons have: slug, sidebar_position, title, description, keywords, chapter, lesson, duration_minutes, skills, learning_objectives, cognitive_load, differentiation, teaching_guide |
| Every lesson has teaching_guide section in frontmatter       | PASS        | All 15 lessons include key_points, misconceptions, discussion_prompts, teaching_tips                                                                                                       |
| Keywords list has 8-20 terms per lesson                      | PASS        | Ranges from 10 (L01) to 13 (L06). All within 8-20 range                                                                                                                                    |
| Try With AI section has 3 prompts (Reproduce/Adapt/Apply)    | CONDITIONAL | 13 of 15 lessons have 3-prompt Try With AI. L14 and L15 are missing. See C1/W1                                                                                                             |
| NO `import` statements for `@site/src/components/`           | PASS        | Zero import statements found across all lesson files                                                                                                                                       |
| Cowork terminology correct                                   | PASS        | Zero instances of "Claude in Excel" found. "Cowork" used correctly throughout                                                                                                              |
| Exercise format follows Step 1-5 structure with deliverable  | PASS        | All 8 exercises follow the step structure and include explicit Deliverable statements                                                                                                      |
| Cross-references are accurate                                | PASS        | Ex 6 (L05) references Ex 2 (L06) correctly. Ex 8 (L13) references Ex 1 (L03) correctly. All lesson cross-links verified                                                                    |
| Duration is reasonable for content depth                     | PASS        | L01 (25min, conceptual) through L14 (90min, capstone) are appropriately scaled                                                                                                             |
| Every .md lesson has matching .flashcards.yaml + .summary.md | PASS        | 15 lessons, 15 flashcard files, 15 summary files — all present and matching                                                                                                                |
| Sidebar positions are sequential (1-15)                      | PASS        | sidebar_position values: 1 through 15, sequential, no gaps                                                                                                                                 |
| Slugs follow pattern                                         | PASS        | All follow `/Business-Domain-Agent-Workflows/supply-chain-procurement/{lesson-slug}`                                                                                                       |

### Plugin (Technical Checks)

| Check                                                             | Result | Notes                                                                                                                                               |
| ----------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| plugin.json is valid JSON with all required fields                | PASS   | name, version, description, author, homepage, repository, license, keywords — all present                                                           |
| Every SKILL.md has valid YAML frontmatter                         | PASS   | All 8 skills have: name, description, license, metadata (author, version), plugin-commands, mcp-integrations                                        |
| Skill names are lowercase+hyphens only                            | PASS   | vendor-assessment, supplier-risk, invoice-reconciliation, vendor-communication, logistics-brief, spend-analysis, network-design, supply-chain-brief |
| Commands use renamed versions                                     | PASS   | `/invoice-reconcile` in invoice-reconciliation, `/vendor-communicate` in vendor-communication, `/supply-network-design` in network-design           |
| Agent .md files have required frontmatter                         | PASS   | All 5 agents have: name, description, tools, model, background, skills                                                                              |
| Agent files set `background: true`                                | PASS   | All 5 agents set `background: true`                                                                                                                 |
| Universal non-negotiable rules distributed across relevant skills | PASS   | Each skill has its own UNIVERSAL RULES section plus NEVER DO THESE section. No router file present                                                  |
| evals/cases.yaml has 16+ test cases                               | PASS   | 18 test cases: 8 routing, 8 accuracy, 2 negative                                                                                                    |
| No skills reference a router                                      | PASS   | Zero mentions of "router" anywhere in the plugin directory                                                                                          |

### Content Quality

| Check                                                        | Result | Notes                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------ | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Voice is consistent (professional procurement, not academic) | PASS   | Second person, active voice, concrete examples throughout. "Your vendor's OTD has dropped..." not "It can be observed that..."                                                                                                                                        |
| Cognitive load assessment is reasonable per lesson           | PASS   | 4-6 new concepts per lesson. All include justification. Consistent with B1-B2 target level                                                                                                                                                                            |
| GEP claims use hedging language                              | PASS   | L06: "Research from GEP suggests..." with explicit qualifier "though results vary substantially"                                                                                                                                                                      |
| Samir Saci claims use hedging language                       | PASS   | L08: "Samir Saci's published work...demonstrates that..." L09: "Samir Saci's published work on AI agents...demonstrates that..." — attribution without absolute assertion                                                                                             |
| Lesson progression builds logically                          | PASS   | Problem framing (L01) -> Setup (L02) -> Classification (L03) -> Assessment (L04) -> Rules (L05) -> Application (L06) -> Risk (L07) -> Logistics (L08) -> Network (L09) -> Spend (L10) -> Comms (L11) -> Agents (L12) -> Exit (L13) -> Capstone (L14) -> Summary (L15) |

---

## Detailed Notes

### Strengths

1. **Exceptional consistency across writers.** Voice, formatting, YAML structure, and exercise design are uniform across all 15 lessons despite 5 parallel writers. The shared brief and reference lesson (L03) clearly worked as a quality anchor.

2. **GEP and Samir Saci hedging is exemplary.** The spec flagged these as [VERIFY] claims. Both are handled with proper attribution language. No facts stated as absolute.

3. **Exercise dependency chain is correctly threaded.** Ex 1A (L03) -> Ex 1B (L04) -> Ex 8 (L13). Ex 2 (L06) <-> Ex 6 (L05). All cross-references include relative links and prerequisite notes.

4. **Plugin architecture is clean.** No router skill (as specified). 8 directly addressable skills. All 3 command renames correctly applied. Universal rules distributed across skills rather than centralised.

5. **Agent files are properly configured.** All 5 agents have `background: true`, appropriate tool lists, and skill references matching the plugin's actual skill names.

6. **Eval harness exceeds minimum.** 18 cases vs. 16+ required. Good spread across routing (8), accuracy (8), and negative/scope control (2).

7. **Zero phantom imports.** The most common content failure (per failure-history) was proactively prevented. No `import` statements for any `@site/src/components/` path.

8. **Cowork terminology perfect.** Zero "Claude in Excel" instances. All references to the collaborative workspace use "Cowork" correctly.

### Minor Observations (informational, no action required)

- The `£25-£80 per invoice` cost range in L01 and L05 uses "estimates suggest" and "industry data typically shows" — correct hedging per spec.
- The `15-25% of invoices have discrepancies` claim in L01 uses "industry data typically shows" — correct hedging per spec.
- L08's carrier comparison uses UK carriers (DPD, Evri, Royal Mail) which is appropriate for the chapter's UK-centric examples.
- L09's Pakistan/Dubai DC scenario provides good international breadth alongside the UK-domestic examples.
- Summary files are slightly over the 250-word target (most in 255-290 range) but content quality is good in all cases.

---

## Final Verdict

**CONDITIONAL PASS** — one critical issue must be fixed before merge:

1. **[C1]** Add Try With AI section (3 prompts) and `<Flashcards />` tag to L14 (capstone lesson).

After this fix, the chapter is ready for merge. The warning items (W1, W2) are non-blocking and can be addressed in a follow-up pass.
