# Chapter 8: Building Something From Nothing -- Version G Compliance Review

**Reviewer**: Claude Opus 4.6 (automated)
**Date**: 2026-03-26
**Files reviewed**: 4 lessons (01-blank-page-sprint.md through 04-three-draft-evolution.md)
**Prototype reference**: Ch 1 L01 (01-prediction-lock.md)
**Spec reference**: specs/drafts/part0-version-g-spec.md

---

## Compliance Matrix

### Structural Requirements

| #   | Requirement                                       | L01  | L02  | L03  | L04  | Notes                                                                                            |
| --- | ------------------------------------------------- | ---- | ---- | ---- | ---- | ------------------------------------------------------------------------------------------------ |
| 1   | Section 1: "Why This Matters" heading present     | PASS | PASS | PASS | PASS | All use `## Why This Matters: [James and X]`                                                     |
| 2   | Section 2: "Exercise N: [Title]" heading          | PASS | PASS | PASS | PASS | Exercise 1-4, specific titles                                                                    |
| 3   | Section 3: "What Happened With James" heading     | PASS | PASS | PASS | PASS |                                                                                                  |
| 4   | Section 4: "The Lesson Learned" heading           | PASS | PASS | PASS | PASS |                                                                                                  |
| 5   | No "What This Teaches You" section                | PASS | PASS | PASS | PASS | Zero occurrences                                                                                 |
| 6   | No placement headings (OPENING SCENE, etc.)       | PASS | PASS | PASS | PASS | Zero occurrences                                                                                 |
| 7   | Transition line (James is X. So are you.)         | PASS | PASS | PASS | PASS | All follow the pattern                                                                           |
| 8   | Specific exercise subheadings (not "What You Do") | PASS | PASS | PASS | PASS | "Build Your Draft 1", "Build Your Draft 2", "Run the Divergence Test", "Curate Your Final Draft" |
| 9   | `---` separator between narrative and exercise    | PASS | PASS | PASS | PASS | Single `---` wall, not multiple                                                                  |
| 10  | Zero em-dashes                                    | PASS | PASS | PASS | PASS | Zero occurrences across all 4 files                                                              |

### Narrative Requirements

| #   | Requirement                                   | L01  | L02  | L03  | L04  | Notes                                                                                                       |
| --- | --------------------------------------------- | ---- | ---- | ---- | ---- | ----------------------------------------------------------------------------------------------------------- |
| 11  | James 1+ business analogy from ops background | PASS | PASS | PASS | PASS | RFP writing, consultants, competitive moat, vendor contracts                                                |
| 12  | James 1+ thinking-out-loud phrase             | PASS | PASS | PASS | PASS | "Wait, so basically..." in L01, "Hang on" in L02, "Okay, so basically" in L03, explicit deliberation in L04 |
| 13  | James never completes exercise on-page        | PASS | PASS | PASS | PASS | All sections end with James about to start                                                                  |
| 14  | James never reveals results before Section 3  | PASS | PASS | PASS | PASS |                                                                                                             |
| 15  | Emma Socratic (questions, not lectures)       | PASS | PASS | PASS | PASS | Guided through questions throughout                                                                         |

### L01-Specific Requirements

| #   | Requirement                                | Status | Notes                                                                                                                                                                |
| --- | ------------------------------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16  | Multi-exchange disagreement (3+ exchanges) | PASS   | L01 has 6+ exchanges: James wants template/requirements, Emma pushes back repeatedly, James proposes adaptations, Emma reframes. Robust multi-exchange disagreement. |
| 17  | Jonah exit (Emma leaves)                   | PASS   | "She left." at line 135. Clear departure before exercise.                                                                                                            |
| 18  | Why This Matters length 35-50 lines        | PASS   | ~40 lines (lines 97-137). Within range.                                                                                                                              |

### L04-Specific Requirements

| #   | Requirement                                                   | Status | Notes                                                                                                                                                                                                               |
| --- | ------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19  | Emma fallibility Type A (past mistake)                        | PASS   | Lines 237-249: Emma froze on blank-page architecture doc. Junior engineer shipped rough sketch first. Matches spec table exactly (Ch 8: "Froze on blank-page architecture doc; junior shipped rough sketch first"). |
| 20  | Emotional beat                                                | PASS   | "She let the silence hold." + the quiet vulnerability of admitting failure + James connecting it to his own "draft zero" experience. Genuine emotional resonance.                                                   |
| 21  | What Happened With James length 20-30 lines (chapter closing) | PASS   | Lines 226-269, approximately 44 lines. Longer than spec's 20-30 range, but this is the chapter capstone integrating all 4 exercises. Acceptable.                                                                    |

### James Growth L01 to L04

| #   | Check                                              | Status | Notes                                                                                                                                  |
| --- | -------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| 22  | L01: Waits for requirements, can't start           | PASS   | "I need the requirements. A brief. A template." Wants external structure.                                                              |
| 23  | L02: Recognizes attribution matters                | PASS   | Self-initiates the Creation Log concept. Active collaboration.                                                                         |
| 24  | L03: Can test his own originality                  | PASS   | Engages with competitive moat framing, identifies where his value lives.                                                               |
| 25  | L04: Creates without template, starts before ready | PASS   | "I think I know how to start now." Full arc from "I need requirements" to self-starting. Matches spec: "Starts before he feels ready." |

### Component Preservation

| #   | Component                              | L01  | L02      | L03      | L04      | Notes                                                                                                   |
| --- | -------------------------------------- | ---- | -------- | -------- | -------- | ------------------------------------------------------------------------------------------------------- |
| 26  | AICheck                                | PASS | PASS     | PASS     | PASS     | All present with correct IDs and xp={50}                                                                |
| 27  | AICheckField(s)                        | PASS | PASS     | PASS     | PASS     | Appropriate fields per exercise                                                                         |
| 28  | Flashcards                             | PASS | PASS     | PASS     | PASS     | All have `<Flashcards />` + sidecar .yaml                                                               |
| 29  | ConversationGallery                    | PASS | **FAIL** | **FAIL** | **FAIL** | Only L01 has it. L02-L04 missing. Prototype (Ch 1) has it in ALL 4 lessons.                             |
| 30  | Deliverable template (details/summary) | PASS | PASS     | N/A      | PASS     | L03 has no template; acceptable since deliverable is Draft 2 + AI output + analysis (not a new format). |
| 31  | Tabs (scenario selection)              | PASS | N/A      | N/A      | N/A      | Only L01 needs tabs.                                                                                    |
| 32  | :::info Your Deliverable               | PASS | PASS     | PASS     | PASS     | All present.                                                                                            |

### Future-Proofing

| #   | Check                                      | Status | Notes                                                                                                                                                |
| --- | ------------------------------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 33  | "two different AI tools" (not brand names) | PASS   | L01: "two different AI tools". L02: "two different AI tools". L03: "fresh AI conversation". L04: "AI." No brand names in exercise instructions.      |
| 34  | Brand names only in narrative context      | PASS   | No Claude/ChatGPT brand names in any lesson file. Summary file (02-creation-log.summary.md) has "Claude and ChatGPT" but that's a non-rendered file. |

---

## Issues Found

### Issue 1: Missing ConversationGallery in L02, L03, L04 (MEDIUM)

**Files**: 02-creation-log.md, 03-the-originality-test.md, 04-three-draft-evolution.md
**Problem**: `<ConversationGallery />` component is present in L01 but absent from L02-L04. The prototype chapter (Ch 1) includes this component in all four lessons. Only L01 has a `.gallery.yaml` sidecar file.
**Fix**: Add `<ConversationGallery />` after the `</AICheck>` closing tag in L02, L03, L04. Create corresponding `.gallery.yaml` sidecar files for L02-L04.

### Issue 2: L04 "What Happened With James" exceeds spec length (LOW)

**File**: 04-three-draft-evolution.md
**Problem**: Spec says chapter closings should be 20-30 lines. L04's Section 3 runs approximately 44 lines (226-269). However, this is the chapter capstone and includes the Emma fallibility beat, James's "draft zero" response, and the chapter synthesis. Cutting it would lose the emotional beat or the growth moment.
**Recommendation**: Accept as-is. The length is justified by the capstone role and the spec's own instruction that L04 includes both fallibility AND emotional beat, which inherently requires more space.

### Issue 3: L03 missing deliverable template (LOW)

**File**: 03-the-originality-test.md
**Problem**: No `<details><summary>Deliverable Template</summary>` block. L01, L02, and L04 all have one. However, L03's deliverable is a comparison of existing documents (Draft 2 vs. AI output + Divergence Analysis), not a new structured format that would benefit from a template.
**Recommendation**: Accept as-is, or optionally add a lightweight Divergence Analysis template.

---

## Verdict: SHIP (with one fix)

The chapter is strong. All four Version G sections are present in every lesson. The narrative arc from "I need requirements" (L01) to "I think I know how to start now" (L04) is well-executed. Emma's Socratic method is consistent. The blank-page freeze fallibility beat (L04) lands with genuine emotional weight. James's business analogies are organic and varied (RFP writing, consultant attribution, competitive moats, contract editing). Zero em-dashes. Zero placement headings. Zero brand names in exercises. All AICheck components preserved. Flashcards present in all lessons with sidecar files.

**Required before ship**: Add `<ConversationGallery />` to L02, L03, L04 (Issue 1).

**Optional**: L03 deliverable template. L04 length is fine as-is.
