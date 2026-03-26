# Chapter 9: Deciding Under Uncertainty -- Version G Compliance Review

**Reviewer**: Claude Opus 4.6 (automated)
**Date**: 2026-03-26
**Files reviewed**: 4 lessons (01-sealed-decision.md through 04-decision-audit.md)
**Spec reference**: specs/drafts/part0-version-g-spec.md
**Prototype reference**: Ch1 L01 (01-prediction-lock.md)

---

## Per-Lesson Compliance Matrix

### L01: The Incomplete Brief (01-sealed-decision.md)

| Check Item                              | Status   | Notes                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4 Version G sections                    | PASS     | Why This Matters / Exercise 1 / What Happened With James / The Lesson Learned                                                                                                                                                                                                                                                       |
| No "What This Teaches You"              | PASS     | Section absent                                                                                                                                                                                                                                                                                                                      |
| No placement headings                   | PASS     | No "OPENING SCENE" or "POST-EXERCISE BRIDGE" remnants                                                                                                                                                                                                                                                                               |
| Transition line (narrative to exercise) | PASS     | "James is staring at a scenario brief with gaps he cannot fill. So are you." (line 161)                                                                                                                                                                                                                                             |
| Specific subheadings                    | PASS     | "Build Your Decision Document" not generic                                                                                                                                                                                                                                                                                          |
| Future-proofed refs                     | PASS     | "two different AI tools" not brand names (not applicable in this exercise; instructions say "any AI tool")                                                                                                                                                                                                                          |
| James never completes exercise          | PASS     | Scene ends with James about to write; Emma leaves                                                                                                                                                                                                                                                                                   |
| Multi-exchange disagreement (3+)        | PASS     | 7+ exchanges. James argues for needing more data, pushes back on deciding with 60%, Emma counters each time                                                                                                                                                                                                                         |
| Jonah exit (Emma leaves)                | PASS     | "She left." (line 147)                                                                                                                                                                                                                                                                                                              |
| Zero em-dashes                          | **FAIL** | 2 em-dashes found: line 106 "nothing about competitor pricing specifics, nothing about..." uses standard hyphens (fine), BUT line 89 "decision _process_ was sound" in L04... see below. **L01 itself**: line 98 contains two hyphens that render as standard dashes, not em-dashes. Clean. **Revised: PASS for L01 specifically.** |
| All components preserved                | PASS     | AICheck, ConversationGallery, Flashcards, Tabs, details/template all present                                                                                                                                                                                                                                                        |
| YAML frontmatter complete               | PASS     | All required fields present                                                                                                                                                                                                                                                                                                         |

**L01 Verdict: PASS**

---

### L02: The AI Consultation (02-ai-consultation.md)

| Check Item                     | Status   | Notes                                                                                                                                                                          |
| ------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 4 Version G sections           | PASS     | All four sections present                                                                                                                                                      |
| No "What This Teaches You"     | PASS     |                                                                                                                                                                                |
| No placement headings          | PASS     |                                                                                                                                                                                |
| Transition line                | PASS     | "James is about to consult AI on a scenario it knows nothing about. So are you." (line 117)                                                                                    |
| Specific subheadings           | PASS     | Exercise section uses the exercise title directly; no generic "What You Do"                                                                                                    |
| Future-proofed refs            | PASS     | "Use two different AI tools" (line 119), no brand names                                                                                                                        |
| James never completes exercise | PASS     | Scene ends with James about to start consulting AI                                                                                                                             |
| Section 3 specific results     | PASS     | James's confidence shift 55% to 60%, fabricated "4-6 weeks" statistic, filtering signal from noise                                                                             |
| Zero em-dashes                 | **FAIL** | Line 193: "The confidence level is the same; the phrasing is the same." -- semicolons used correctly. However, examining the full file: no em-dashes found. **Revised: PASS.** |
| All components preserved       | PASS     | AICheck, Flashcards present. No ConversationGallery (none expected for L02)                                                                                                    |
| YAML frontmatter complete      | PASS     |                                                                                                                                                                                |

**Note**: L02 has no `<ConversationGallery />` component, unlike L01. This is acceptable; not every lesson requires one.

**L02 Verdict: PASS**

---

### L03: The Information Drop (03-information-drop.md)

| Check Item                     | Status | Notes                                                                                                   |
| ------------------------------ | ------ | ------------------------------------------------------------------------------------------------------- |
| 4 Version G sections           | PASS   | All four sections present                                                                               |
| No "What This Teaches You"     | PASS   |                                                                                                         |
| No placement headings          | PASS   |                                                                                                         |
| Transition line                | PASS   | "James just had twenty minutes dropped on him and a sheet of contradictory data. So do you." (line 112) |
| Specific subheadings           | PASS   | Exercise content is well-structured with scenario-specific instructions                                 |
| Future-proofed refs            | PASS   | No brand name references                                                                                |
| James never completes exercise | PASS   | Scene ends with Emma starting the timer                                                                 |
| Section 3 specific results     | PASS   | Confidence shift 60% to 45%, reversal trigger partially activated, "almost panicked" moment             |
| Zero em-dashes                 | PASS   | File clean of em-dashes                                                                                 |
| All components preserved       | PASS   | AICheck, Flashcards present                                                                             |
| YAML frontmatter complete      | PASS   |                                                                                                         |

**L03 Verdict: PASS**

---

### L04: The Decision Audit (04-decision-audit.md)

| Check Item                                 | Status   | Notes                                                                                                                                                                                                                                                                                  |
| ------------------------------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4 Version G sections                       | PASS     | All four sections present                                                                                                                                                                                                                                                              |
| No "What This Teaches You"                 | PASS     |                                                                                                                                                                                                                                                                                        |
| No placement headings                      | PASS     |                                                                                                                                                                                                                                                                                        |
| Transition line                            | PASS     | "James is laying three versions of the same decision side by side, looking for the places where his thinking broke. So are you." (line 113)                                                                                                                                            |
| Specific subheadings                       | PASS     |                                                                                                                                                                                                                                                                                        |
| Future-proofed refs                        | PASS     |                                                                                                                                                                                                                                                                                        |
| James never completes exercise             | PASS     | Scene ends with James about to write the audit                                                                                                                                                                                                                                         |
| Emma fallibility Type A (deployment delay) | PASS     | Lines 175-183: Emma delayed a deployment for two weeks waiting for more load-testing data; competitor shipped first; market window closed. Matches spec: "Delayed deployment for more data; market window closed"                                                                      |
| Emotional beat                             | PASS     | Lines 185-191: James applies 65% confidence to readiness for Ch10. Emma's "something shifted behind her eyes" moment. Genuine warmth without sentimentality                                                                                                                            |
| Zero em-dashes                             | **FAIL** | Line 89: "decision _process_" -- the underscore markdown is for italics, not em-dashes (fine). BUT line 165: "It was being honest about _why_ he'd made them." -- also italics (fine). **Actual em-dash search**: No em-dash characters (U+2014) found in the file. **Revised: PASS.** |
| All components preserved                   | PASS     | AICheck, Flashcards, details/grading-criteria present, Chapter Deliverable info block present                                                                                                                                                                                          |
| YAML frontmatter complete                  | PASS     |                                                                                                                                                                                                                                                                                        |
| Section 3 length for chapter closing       | PASS     | "What Happened With James" runs approximately 30 lines (163-191), matching the spec's 20-30 line target for L04 chapter closings                                                                                                                                                       |

**L04 Verdict: PASS**

---

## James Growth Arc: L01 to L04

| Stage | James's Relationship to Uncertainty                                                                  | Growth Signal                                                                            |
| ----- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| L01   | "I need more data before I can recommend anything" -- refuses to decide without complete information | Accepts 60% is enough to move; draws analogy to supplier negotiations                    |
| L02   | Recognizes AI will fabricate about fictional scenarios before being told                             | Separates AI signal from noise independently                                             |
| L03   | "I almost panicked" -- but catches himself, uses reversal trigger instead of overreacting            | Can explain every confidence shift (55% to 60% to 45%)                                   |
| L04   | Identifies his own heuristics and assigns himself 65% readiness for Ch10                             | Applies the chapter's own framework to his own meta-state; earns Emma's unspoken respect |

**Growth arc verdict: PASS.** Clear progression from "I can't decide without data" to "I can decide, quantify my confidence, and audit my own process." The 65% callback in the closing is a strong character beat that demonstrates internalized learning.

---

## Spec-Level Checks

| Spec Requirement                               | Status          | Notes                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Emma Phase: Coach (Ch 7-9)                     | PASS            | Emma validates James's observations, asks questions more than lectures. She does not directly instruct in any lesson; she Socratically guides                                                                                                                                                                                                                                                   |
| James business analogy (1+ per lesson)         | PASS            | L01: supplier contracts/escalation thresholds. L02: hired consultant with 40-page report. L03: supplier revised quote mid-negotiation. L04: manager's hiring philosophy                                                                                                                                                                                                                         |
| James thinking-out-loud phrase (1+ per lesson) | **MINOR ISSUE** | L01: none explicit (closest: "I think I can work with that"). L02: none explicit (closest: "Wait. If the scenario is made up..."). L03: none. L04: "Hang on. Let me make sure I understand" (line 89). Spec requires 1+ per lesson ("Wait, so basically...", "Hang on..."). Only L04 has a clear instance. L02's "Wait" is close but embedded in analysis, not a thinking-out-loud interjection |
| L01 length (35-50 lines)                       | PASS            | "Why This Matters" section runs approximately 44 lines (105-149)                                                                                                                                                                                                                                                                                                                                |
| L02-L04 length (15-30 lines)                   | PASS            | L02: ~17 lines. L03: ~20 lines. L04: ~16 lines                                                                                                                                                                                                                                                                                                                                                  |
| Chapter cross-references future-proofed        | PASS            | All cross-refs use relative links to specific exercises                                                                                                                                                                                                                                                                                                                                         |
| "two different AI tools" not brand names       | PASS            | L02 line 119 says "two different AI tools"                                                                                                                                                                                                                                                                                                                                                      |
| Template in details/summary                    | **NOTE**        | Only L01 has a template block. L02-L04 do not have deliverable templates. Spec says templates are part of exercise content "where applicable." These exercises build on L01's scenario so no separate template is unreasonable, but L02 could benefit from a Consultation Log template                                                                                                          |

---

## Em-Dash Audit (Full Chapter)

Performed character-level search for U+2014 (em-dash) across all four files.

| File                   | Em-dashes found | Status |
| ---------------------- | --------------- | ------ |
| 01-sealed-decision.md  | 0               | PASS   |
| 02-ai-consultation.md  | 0               | PASS   |
| 03-information-drop.md | 0               | PASS   |
| 04-decision-audit.md   | 0               | PASS   |

**Em-dash verdict: PASS (zero across chapter)**

---

## Issues List

### Must Fix (0)

None.

### Should Fix (1)

1. **Missing thinking-out-loud phrases in L01-L03.** Spec requires James to use 1+ thinking-out-loud phrase per lesson ("Wait, so basically...", "Hang on...", etc.). L04 has "Hang on. Let me make sure I understand." L02 has a borderline "Wait. If the scenario is made up..." but L01 and L03 lack a clear instance. Adding one per lesson is a 1-line fix each.

### Nice to Have (2)

2. **L02-L04 missing deliverable templates.** L01 has a `<details><summary>` template block. L02-L04 do not. A Consultation Log template for L02 and a Decision Audit template for L04 would help students who need structural scaffolding.

3. **L01 "Why This Matters" heading could be more specific.** Spec says `## Why This Matters: [James and the Specific Thing]`. L01 uses "James and the Missing Data" which is good. L02 uses "James and the Confident Fabrication" (good). L03 uses "James and the Breaking News" (good). L04 uses "James and the Process vs. the Outcome" (good). All pass, but L01's "Missing Data" is the vaguest of the four; "James and the Incomplete Brief" would match the exercise title tighter.

---

## Verdict

## SHIP

All four lessons comply with Version G structure. The four-section pattern is consistent. James's growth arc from data-dependency to calibrated decision-making is clear and earned. Emma's fallibility beat in L04 (deployment delay / market window) matches the spec exactly and lands emotionally. The 65% confidence callback in the closing is the strongest character beat in the chapter. Zero em-dashes. All components preserved. No placement headings. Transition lines present in every lesson.

The one "should fix" (thinking-out-loud phrases in L01-L03) is minor and can be addressed in a polish pass without structural changes.
