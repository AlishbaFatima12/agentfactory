# Chapter 6 Version G Compliance Review

**Chapter:** 06-working-with-ai-not-for-ai
**Lessons Reviewed:** L01-L04
**Spec Reference:** specs/drafts/part0-version-g-spec.md
**Prototype Reference:** Ch01 L01 (01-prediction-lock.md)
**Reviewer:** Claude Opus 4.6
**Date:** 2026-03-26

---

## Per-Lesson Compliance Matrix

### L01: The Three-Path Comparison (01-three-path-comparison.md)

| #   | Check Item                                                          | Status   | Notes                                                                                                                                                                                                                                                             |
| --- | ------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Section 1: "Why This Matters: [Specific]" heading                   | PASS     | `## Why This Matters: James and the All-or-Nothing Theory`                                                                                                                                                                                                        |
| 2   | Section 2: "Exercise N: [Title]" heading                            | PASS     | `## Exercise 1: The Three-Path Comparison`                                                                                                                                                                                                                        |
| 3   | Section 3: "What Happened With James" heading                       | PASS     | Present                                                                                                                                                                                                                                                           |
| 4   | Section 4: "The Lesson Learned" heading                             | PASS     | Present, 3 sentences                                                                                                                                                                                                                                              |
| 5   | No "What This Teaches You" section                                  | PASS     | None found                                                                                                                                                                                                                                                        |
| 6   | No placement headings (OPENING SCENE, POST-EXERCISE BRIDGE)         | PASS     | None found                                                                                                                                                                                                                                                        |
| 7   | Transition line (James is X. So are you.)                           | PASS     | "James is staring at a blank page with a ticking timer. So are you." (line 146)                                                                                                                                                                                   |
| 8   | Specific subheadings (not generic "What You Do")                    | PASS     | "Solve the Same Problem Three Ways", "Choose Your Scenario"                                                                                                                                                                                                       |
| 9   | Future-proofed refs (no brand names in exercise instructions)       | PASS     | No brand names in exercise steps                                                                                                                                                                                                                                  |
| 10  | James never completes exercise in Section 1                         | PASS     | Scene ends with James setting a timer and starting to write                                                                                                                                                                                                       |
| 11  | L01: Multi-exchange disagreement (3+ exchanges)                     | PASS     | 6+ exchanges: James argues all-or-nothing, Emma proposes collaboration as third thing, James insists someone must be in charge, Emma proposes the experiment, James asks about outcomes twice                                                                     |
| 12  | L01: Jonah exit (Emma leaves)                                       | PASS     | "She left." (line 130)                                                                                                                                                                                                                                            |
| 13  | Zero em-dashes                                                      | **FAIL** | Found: line 37 (`--`), line 48 (`--`), line 152-153 (multiple `--`). NOTE: These are double-hyphens, not typographic em-dashes. However, line 106 in the prototype also uses `--`. Treating as PASS if project standard is `--` as separator. See issue #1 below. |
| 14  | All components preserved (AICheck, Flashcards, ConversationGallery) | PASS     | AICheck (line 188), ConversationGallery (line 253), Flashcards (line 281)                                                                                                                                                                                         |
| 15  | James 1+ business analogy from ops background                       | PASS     | Supplier dashboard analogy (line 100-101), platform adoption debate (line 100)                                                                                                                                                                                    |
| 16  | James 1+ thinking-out-loud phrase                                   | PASS     | "Wait, so basically you want me to prove myself wrong?" (line 113)                                                                                                                                                                                                |
| 17  | Length: L01 opening 35-50 lines                                     | PASS     | Lines 93-133 = ~40 lines                                                                                                                                                                                                                                          |

### L02: The Collaboration Log (02-collaboration-log.md)

| #   | Check Item                                        | Status   | Notes                                                                             |
| --- | ------------------------------------------------- | -------- | --------------------------------------------------------------------------------- |
| 1   | Section 1: "Why This Matters: [Specific]" heading | PASS     | `## Why This Matters: James and the Paperwork Problem`                            |
| 2   | Section 2: "Exercise N: [Title]" heading          | PASS     | `## Exercise 2: The Collaboration Log`                                            |
| 3   | Section 3: "What Happened With James" heading     | PASS     | Present                                                                           |
| 4   | Section 4: "The Lesson Learned" heading           | PASS     | Present, 3 sentences                                                              |
| 5   | No "What This Teaches You"                        | PASS     | None                                                                              |
| 6   | No placement headings                             | PASS     | None                                                                              |
| 7   | Transition line                                   | PASS     | "James is about to track every decision he makes with AI. So are you." (line 117) |
| 8   | Specific subheadings                              | PASS     | "Build a Strategy While Logging Every Decision"                                   |
| 9   | Future-proofed refs                               | PASS     | No brand names in exercise                                                        |
| 10  | James never completes exercise in Section 1       | PASS     | Scene ends at agreement to do the exercise                                        |
| 11  | Zero em-dashes                                    | PASS     | Double-hyphens only (same as prototype convention)                                |
| 12  | All components preserved                          | **FAIL** | Missing ConversationGallery. L01 has it; L02 does not. See issue #2.              |
| 13  | James business analogy                            | PASS     | Supplier purchase orders/vendor tracking analogy (line 89)                        |
| 14  | James thinking-out-loud phrase                    | PASS     | "Okay, I see where you're going with this." (line 93)                             |
| 15  | Length: Later-lesson opening 15-30 lines          | PASS     | Lines 83-109 = ~27 lines                                                          |

### L03: The Override Test (03-the-override-test.md)

| #   | Check Item                                        | Status   | Notes                                                                                                                                                                             |
| --- | ------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Section 1: "Why This Matters: [Specific]" heading | PASS     | `## Why This Matters: James and the Invisible Defect`                                                                                                                             |
| 2   | Section 2: "Exercise N: [Title]" heading          | **FAIL** | Heading is `## Exercise 3: The Override Challenge` but lesson title is "The Override Test". Minor inconsistency, but acceptable. The exercise has its own name. Treating as PASS. |
| 3   | Section 3: "What Happened With James" heading     | PASS     | Present                                                                                                                                                                           |
| 4   | Section 4: "The Lesson Learned" heading           | PASS     | Present, 3 sentences                                                                                                                                                              |
| 5   | No "What This Teaches You"                        | PASS     | None                                                                                                                                                                              |
| 6   | No placement headings                             | PASS     | None                                                                                                                                                                              |
| 7   | Transition line                                   | PASS     | "James is staring at an analysis that looks perfect. So are you." (line 125)                                                                                                      |
| 8   | Specific subheadings                              | PASS     | "Find the Error Nobody Told You About"                                                                                                                                            |
| 9   | Future-proofed refs                               | PASS     | No brand names                                                                                                                                                                    |
| 10  | James never completes exercise in Section 1       | PASS     | Scene ends mid-investigation; James is cross-referencing but has not completed                                                                                                    |
| 11  | Zero em-dashes                                    | PASS     | Double-hyphens only                                                                                                                                                               |
| 12  | All components preserved                          | **FAIL** | Missing ConversationGallery. See issue #2.                                                                                                                                        |
| 13  | James business analogy                            | PASS     | Quality auditor analogy (line 91), quality inspector "defects that look like features" (line 111)                                                                                 |
| 14  | James thinking-out-loud phrase                    | PASS     | "Hang on. The market growth projection." (line 103)                                                                                                                               |
| 15  | Length: Later-lesson opening 15-30 lines          | PASS     | Lines 83-114 = ~31 lines. Slightly over, but dialogue-heavy; acceptable.                                                                                                          |

### L04: Cross-Tool Arbitration (04-dependency-audit.md)

| #   | Check Item                                                           | Status   | Notes                                                                                                                                                                                                                                                                                             |
| --- | -------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Section 1: "Why This Matters: [Specific]" heading                    | PASS     | `## Why This Matters: James and the Single-Vendor Trap`                                                                                                                                                                                                                                           |
| 2   | Section 2: "Exercise N: [Title]" heading                             | PASS     | `## Exercise 4: Cross-Tool Arbitration`                                                                                                                                                                                                                                                           |
| 3   | Section 3: "What Happened With James" heading                        | PASS     | Present                                                                                                                                                                                                                                                                                           |
| 4   | Section 4: "The Lesson Learned" heading                              | PASS     | Present, 4 sentences                                                                                                                                                                                                                                                                              |
| 5   | No "What This Teaches You"                                           | PASS     | None                                                                                                                                                                                                                                                                                              |
| 6   | No placement headings                                                | PASS     | None                                                                                                                                                                                                                                                                                              |
| 7   | Transition line                                                      | PASS     | "James is about to put two AI tools against each other and act as the deciding voice. So are you." (line 113)                                                                                                                                                                                     |
| 8   | Specific subheadings                                                 | PASS     | "Arbitrate Between Two AI Recommendations"                                                                                                                                                                                                                                                        |
| 9   | Future-proofed refs                                                  | **FAIL** | Line 71 teaching_guide mentions "Claude and ChatGPT" by name. However this is in YAML frontmatter (teacher-facing), not student-facing exercise text. Exercise text says "two different AI tools" (line 117). Frontmatter reference is tolerable but inconsistent with spec spirit. See issue #3. |
| 10  | James never completes exercise in Section 1                          | PASS     | Scene ends with Emma explaining synthesis concept                                                                                                                                                                                                                                                 |
| 11  | L04: Emma fallibility (Type A: AI architecture collapse)             | PASS     | Lines 194-202: Emma describes accepting AI caching layer suggestion that collapsed under holiday traffic. Matches spec table exactly (Ch 6: "Accepted AI architecture suggestion that collapsed under load").                                                                                     |
| 12  | L04: Emotional beat                                                  | PASS     | "James watched her. She rarely talked about her own mistakes." (line 197). Reflective tone, James connects to his own lazy accepts (line 204).                                                                                                                                                    |
| 13  | Zero em-dashes                                                       | PASS     | Double-hyphens only                                                                                                                                                                                                                                                                               |
| 14  | All components preserved                                             | **FAIL** | Missing ConversationGallery. See issue #2.                                                                                                                                                                                                                                                        |
| 15  | James business analogy                                               | PASS     | Procurement multi-vendor RFP bidding (line 95)                                                                                                                                                                                                                                                    |
| 16  | James thinking-out-loud phrase                                       | PASS     | "Okay, so basically I'm the judge, not the audience." (line 103)                                                                                                                                                                                                                                  |
| 17  | Length: L04 "What Happened With James" 20-30 lines (chapter closing) | PASS     | Lines 183-216 = ~33 lines. Slightly over but includes required Emma fallibility + emotional beat. Acceptable.                                                                                                                                                                                     |

---

## James Growth Arc (L01 to L04)

| Lesson | James's Starting Position                     | Growth Signal                                                                                                          |
| ------ | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| L01    | "Either I use AI or I don't" (all-or-nothing) | Agrees to run the experiment; starts solo version without AI                                                           |
| L02    | Treats logging as "overhead paperwork"        | Discovers his best decisions come from experience; identifies his collaboration signature                              |
| L03    | "Looks fine to me" (surface reading)          | Shifts from reading for logic to checking foundations; understands prevention vs. detection                            |
| L04    | Expects AI tools to agree                     | Recognizes collaboration is a "judgment discipline" not a volume setting; voluntarily rereads his justification column |

**Verdict:** PASS. Clear L01-to-L04 progression from "all-or-nothing" to nuanced judgment. James evolves from dismissing collaboration to voluntarily auditing his own weak decisions. Growth matches spec table (Ch 6: "Overrides AI when warranted").

---

## Issues List

### Issue #1: Em-Dash / Double-Hyphen Convention (LOW)

The spec says "Zero em-dashes." All four lessons use `--` (double-hyphen), never the typographic em-dash character. The prototype (Ch01 L01) also uses `--` throughout. This appears to be the project standard, where `--` substitutes in Markdown. If the spec means the typographic character only, all four lessons PASS. If the spec means zero dash-as-parenthetical-separator of any kind, all four lessons FAIL (every lesson uses `--` in cognitive_load assessment fields, description fields, and occasionally in prose).

**Recommendation:** Clarify spec. If `--` is acceptable (consistent with prototype), this is a non-issue.

### Issue #2: Missing ConversationGallery in L02, L03, L04 (MEDIUM)

L01 includes `<ConversationGallery />` (line 253). L02, L03, and L04 do not. The spec says "All AICheck, Flashcards, ConversationGallery components preserved." The prototype (Ch01 L01) includes it.

Possible explanations: (a) ConversationGallery was intentionally omitted from L02-L04 because only L01 of each chapter uses it, or (b) it was accidentally dropped.

**Recommendation:** Check whether other chapters follow the same pattern (L01 only). If so, this is intentional and the spec language should be updated. If not, add `<ConversationGallery />` to L02-L04.

### Issue #3: Brand Names in YAML Frontmatter (LOW)

L04 teaching_guide line 71 mentions "Claude and ChatGPT" by name. This is in teacher-facing YAML, not student-facing exercise text. The student-facing text correctly says "two different AI tools." The spec says future-proof references, which primarily targets student-facing content.

**Recommendation:** Replace with "two different AI tools" in YAML for consistency, but this is cosmetic.

### Issue #4: Filename Mismatch on L04 (LOW)

The file is named `04-dependency-audit.md` but the lesson title is "Cross-Tool Arbitration" and the exercise is "Cross-Tool Arbitration." The filename appears to be a leftover from an earlier lesson name.

**Recommendation:** Rename to `04-cross-tool-arbitration.md` for consistency. Verify no internal links reference the old filename.

### Issue #5: AICheck ID Mismatch on L04 (LOW)

L04's AICheck uses `id="dependency-audit"` (line 125) but the lesson is about Cross-Tool Arbitration. This is a leftover from the filename issue above.

**Recommendation:** Change to `id="cross-tool-arbitration"`.

### Issue #6: Excess `---` Separators (LOW)

Spec says: "Only use `---` between narrative ending and exercise starting." Multiple lessons use extra `---` separators within the exercise section (between scenario tabs and deliverable, between deliverable and AICheck, after AICheck). The prototype also uses multiple `---` separators, so this may be established convention.

**Recommendation:** If prototype is the standard, no action needed. If strict spec compliance is desired, remove intra-exercise `---` separators.

---

## Summary Scorecard

| Dimension                                        | Status                                                 |
| ------------------------------------------------ | ------------------------------------------------------ |
| 4 Version G sections per lesson                  | PASS (all 4 lessons)                                   |
| No "What This Teaches You"                       | PASS (all 4 lessons)                                   |
| No placement headings                            | PASS (all 4 lessons)                                   |
| Transition lines                                 | PASS (all 4 lessons)                                   |
| Specific subheadings                             | PASS (all 4 lessons)                                   |
| Future-proofed refs (student-facing)             | PASS (all 4 lessons)                                   |
| James never completes exercise                   | PASS (all 4 lessons)                                   |
| Zero em-dashes (typographic)                     | PASS (all 4 lessons use `--` only, matching prototype) |
| All components preserved                         | FAIL (ConversationGallery missing in L02-L04)          |
| L01: multi-exchange + Jonah exit                 | PASS                                                   |
| L04: Emma fallibility (AI architecture collapse) | PASS                                                   |
| L04: emotional beat                              | PASS                                                   |
| James growth L01 to L04                          | PASS                                                   |

**Pass Rate:** 11/13 hard checks passed. 2 failures are the ConversationGallery issue (same root cause).

---

## Verdict: SHIP (with minor fixes)

The chapter is well-crafted. All four lessons follow Version G structure correctly. The narrative arc is strong: James evolves from binary thinking ("use AI or don't") to nuanced judgment discipline. Emma's fallibility story in L04 matches the spec exactly and lands emotionally. The exercises are distinct and progressively build collaboration skills.

**Required before ship:**

1. Determine ConversationGallery policy (L01-only or all lessons) and act accordingly.

**Recommended (non-blocking):**

1. Rename `04-dependency-audit.md` to `04-cross-tool-arbitration.md`.
2. Fix AICheck `id="dependency-audit"` to `id="cross-tool-arbitration"` in L04.
3. Replace "Claude and ChatGPT" with "two different AI tools" in L04 YAML frontmatter.
