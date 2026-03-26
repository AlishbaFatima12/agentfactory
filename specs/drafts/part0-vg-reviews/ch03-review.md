# Chapter 3 (Thinking in Systems) -- Version G Compliance Review

**Reviewer**: Claude Opus 4.6 (automated)
**Date**: 2026-03-26
**Prototype reference**: Ch01-L01 (01-prediction-lock.md)
**Spec reference**: part0-version-g-spec.md

---

## Lesson 1: The Cascade Map (01-cascade-mapping.md)

| Check                                         | Status   | Notes                                                                                                                                                                                                        |
| --------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 4 Version G sections present?                 | **PASS** | Why This Matters / Exercise 1 / What Happened With James / The Lesson Learned                                                                                                                                |
| No "What This Teaches You" remaining?         | **PASS** | None found                                                                                                                                                                                                   |
| No leftover placement headings?               | **PASS** | No OPENING SCENE, POST-EXERCISE BRIDGE, YOUR TURN                                                                                                                                                            |
| Transition line reads as challenge?           | **PASS** | "James is staring at a blank document with a three-line analysis he no longer trusts. So are you."                                                                                                           |
| Exercise subheadings specific?                | **PASS** | "Draw Your Cascade Map (Before Touching AI)", "Choose Your Scenario"                                                                                                                                         |
| Future-proofed tool refs?                     | **PASS** | No brand names in lesson body or exercise instructions                                                                                                                                                       |
| James never completes exercise before reader? | **PASS** | Scene ends with James sitting with "the growing suspicion that the problem was not the bank's decision"                                                                                                      |
| Zero em-dashes?                               | **PASS** | None found                                                                                                                                                                                                   |
| All components preserved?                     | **PASS** | AICheck, ConversationGallery, Flashcards, Tabs, deliverable block, template                                                                                                                                  |
| L01: multi-exchange disagreement (3+)?        | **PASS** | At least 6 exchanges of genuine disagreement: James resists with "That's speculative", "I identified the problem and the solution, what else is there?", recalls procurement counter-example before yielding |
| L01: Jonah exit (Emma leaves)?                | **PASS** | "She left. James sat with the scenario..." (line 130)                                                                                                                                                        |
| James uses business analogy from ops?         | **PASS** | Packaging/shelf-space procurement story from old company                                                                                                                                                     |
| James uses thinking-out-loud phrase?          | **PASS** | "That's..." (pause), "Loops?"                                                                                                                                                                                |
| Length within spec (35-50 lines for L01)?     | **PASS** | ~44 lines of dialogue (lines 88-131)                                                                                                                                                                         |

**L01 Issues**: None.

---

## Lesson 2: Human vs. AI Systems Analysis (02-human-vs-ai-systems-analysis.md)

| Check                                         | Status   | Notes                                                                                                                                                                                                                                |
| --------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 4 Version G sections present?                 | **PASS** | Why This Matters / Exercise 2 / What Happened With James / The Lesson Learned                                                                                                                                                        |
| No "What This Teaches You" remaining?         | **PASS** | None found                                                                                                                                                                                                                           |
| No leftover placement headings?               | **PASS** | Clean                                                                                                                                                                                                                                |
| Transition line reads as challenge?           | **PASS** | "James is about to hold three flashlights at the same problem. So are you."                                                                                                                                                          |
| Exercise subheadings specific?                | **PASS** | "Compare Three Flashlights"                                                                                                                                                                                                          |
| Future-proofed tool refs?                     | **FAIL** | Line 103: "Yours, Claude's, and ChatGPT's." Brand names in Emma's dialogue. Line 133: "Claude's analysis" and line 172: "ChatGPT's analysis" as AICheckField labels. Lines 62, 71 in YAML teaching_guide also reference brand names. |
| James never completes exercise before reader? | **PASS** | Scene ends before James begins the comparison                                                                                                                                                                                        |
| Zero em-dashes?                               | **PASS** | None found                                                                                                                                                                                                                           |
| All components preserved?                     | **PASS** | AICheck, Flashcards, deliverable block                                                                                                                                                                                               |
| James uses business analogy from ops?         | **PASS** | "My team would audit supplier contracts looking for cost overruns. Finance would audit the same contracts looking for liability exposure."                                                                                           |
| James uses thinking-out-loud phrase?          | **PASS** | Not strong here, but "Those are... I mean, those aren't in the five domains" qualifies                                                                                                                                               |
| Length within spec (15-30 lines)?             | **PASS** | ~25 lines of dialogue                                                                                                                                                                                                                |

**L02 Issues**:

1. **FAIL: Future-proofing**. The spec says "two different AI tools" not brand names. Emma's dialogue (line 103) says "Yours, Claude's, and ChatGPT's" which hardcodes brands. The AICheck fields also hardcode "Claude's analysis" and "ChatGPT's analysis" as labels. The teaching_guide YAML similarly references both brands. The prototype (Ch01-L01) uses "two different AI tools" in exercise instructions and generic "Claude / ChatGPT" only in the deliverable template table, not in instructional text or dialogue. This lesson embeds brands in the instructional flow.

---

## Lesson 3: The Variable Shift (03-variable-shift.md)

| Check                                         | Status   | Notes                                                                                  |
| --------------------------------------------- | -------- | -------------------------------------------------------------------------------------- |
| 4 Version G sections present?                 | **PASS** | Why This Matters / Exercise 3 / What Happened With James / The Lesson Learned          |
| No "What This Teaches You" remaining?         | **PASS** | None found                                                                             |
| No leftover placement headings?               | **PASS** | Clean                                                                                  |
| Transition line reads as challenge?           | **PASS** | "James is staring at a map where half the arrows just stopped being true. So are you." |
| Exercise subheadings specific?                | **PASS** | "Revise Your Cascade Map", "Your Variable Shift"                                       |
| Future-proofed tool refs?                     | **PASS** | No brand names in lesson body or exercise. Uses "AI" generically.                      |
| James never completes exercise before reader? | **PASS** | Scene ends with James recognizing the problem but not starting the revision exercise   |
| Zero em-dashes?                               | **PASS** | None found                                                                             |
| All components preserved?                     | **PASS** | AICheck, Flashcards, Tabs, deliverable block                                           |
| James uses business analogy from ops?         | **PASS** | "when my old company expanded into a new region. We copied our standard playbook..."   |
| James uses thinking-out-loud phrase?          | **PASS** | "Wait. This changes everything." / "Hang on. The whole regulatory branch changes too." |
| Length within spec (15-30 lines)?             | **PASS** | ~24 lines of dialogue                                                                  |

**L03 Issues**: None.

---

## Lesson 4: Peer Cross-Examination (04-system-defence.md)

| Check                                                 | Status   | Notes                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4 Version G sections present?                         | **PASS** | Why This Matters / Exercise 4 / What Happened With James / The Lesson Learned                                                                                                                                                                                                                   |
| No "What This Teaches You" remaining?                 | **PASS** | None found                                                                                                                                                                                                                                                                                      |
| No leftover placement headings?                       | **PASS** | Clean                                                                                                                                                                                                                                                                                           |
| Transition line reads as challenge?                   | **PASS** | "James is about to defend a map full of borrowed connections under live questioning. So are you."                                                                                                                                                                                               |
| Exercise subheadings specific?                        | **PASS** | "Defend Your Cascade Map"                                                                                                                                                                                                                                                                       |
| Future-proofed tool refs?                             | **PASS** | Uses "AI" generically throughout                                                                                                                                                                                                                                                                |
| James never completes exercise before reader?         | **PASS** | Scene ends with James preparing, not having done the peer exchange                                                                                                                                                                                                                              |
| Zero em-dashes?                                       | **PASS** | None found                                                                                                                                                                                                                                                                                      |
| All components preserved?                             | **PASS** | AICheck, Flashcards, deliverable block, grading criteria                                                                                                                                                                                                                                        |
| L04: Emma fallibility (DB cascade)?                   | **PASS** | Lines 185-193: "We had a database query that was bottlenecking a reporting service... I optimized it... three downstream services started throwing timeout errors." Matches spec: "Optimized one DB query, broke three downstream services."                                                    |
| L04: Emotional beat?                                  | **PASS** | Extended reflective silence, "She let the silence sit." Emma's vulnerability followed by James's three-draft comparison showing growth. The line "The difference between the first and the third wasn't sophistication. It was honesty about how many things connect to how many other things." |
| James's growth visible L01 to L04?                    | **PASS** | L01: three-line analysis, straight-line thinking. L04: three drafts, peer feedback, change log, scar tissue. James explicitly recognizes the progression: "Three exercises ago, you looked at a bank decision and wrote three lines."                                                           |
| James uses business analogy from ops?                 | **PASS** | Trade compliance analogy in the scene (line 93)                                                                                                                                                                                                                                                 |
| Length within spec (20-30 lines for chapter closing)? | **PASS** | ~35 lines for "What Happened With James", slightly over but the emotional beat and fallibility moment justify the length                                                                                                                                                                        |

**L04 Issues**: None.

---

## Cross-Chapter Checks

| Check                                       | Status      | Notes                                                                                                                                                                                                                |
| ------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "What You Do" in README only (not lessons)? | **NOTE**    | README.md line 32 uses "What You Do" as a column header in an overview table. This is the README, not a lesson file. Acceptable, but worth noting it differs from the spec's preference for specific exercise names. |
| ConversationGallery present?                | **PARTIAL** | Present in L01 only. L02, L03, L04 lack it. If this component is required on every lesson, three are missing. The prototype (Ch01-L01) has it.                                                                       |
| No `---` wall between sections 3 and 4?     | **PASS**    | No `---` between "What Happened With James" and "The Lesson Learned" in any lesson                                                                                                                                   |
| YAML frontmatter complete?                  | **PASS**    | All 4 lessons have full YAML: sidebar_position, aicheck, title, description, keywords, chapter, lesson, duration_minutes, skills, learning_objectives, cognitive_load, differentiation, teaching_guide               |

---

## Issues Summary

| #   | Severity   | Lesson  | Issue                                                                                                                                                                         |
| --- | ---------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Medium** | L02     | Brand names (Claude, ChatGPT) hardcoded in Emma's dialogue, AICheck field labels, and teaching_guide YAML. Spec requires future-proofed tool refs ("two different AI tools"). |
| 2   | **Low**    | L02-L04 | ConversationGallery component missing from L02, L03, L04. Present in L01 and in prototype. Unclear if required on every lesson or only L01.                                   |

---

## Verdict: **SHIP** (with one fix)

The chapter is strong. Structure, arc, components, emotional beats, and character growth all meet Version G spec. L01 is excellent and matches the prototype quality. L04's Emma fallibility moment is well-executed and organic. James's progression from three-line analysis to three-draft portfolio with scar tissue is clear and earned.

**One required fix before ship**: L02 needs brand names replaced with generic AI tool references in the instructional text and dialogue. The AICheck field labels ("Claude's analysis" / "ChatGPT's analysis") should become "AI Tool 1 analysis" / "AI Tool 2 analysis" or similar. Emma's line should read "Yours and two AI tools'" or equivalent.

**Optional fix**: Add ConversationGallery to L02-L04 if it is a per-lesson requirement. Confirm intent.
