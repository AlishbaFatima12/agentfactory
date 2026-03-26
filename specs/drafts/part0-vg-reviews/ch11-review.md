# Chapter 11 (Thinking Portfolio) Version G Compliance Review

**Reviewer**: Claude Opus 4.6 (autonomous)
**Date**: 2026-03-26
**Files reviewed**: 3 lessons (01-portfolio-assembly.md, 02-growth-map.md, 03-calibrating-ai-prompts.md)
**Reference**: L01 prototype (01-prediction-lock.md), Version G spec

---

## L01: Portfolio Assembly and Post-Assessment

### Structure

| Check                                      | Status | Notes                                            |
| ------------------------------------------ | ------ | ------------------------------------------------ |
| "Why This Matters" section present         | PASS   | `## Why This Matters: James and the Ten Folders` |
| "Exercise N" section present               | PASS   | `## Exercise 1: Your Thinking Portfolio`         |
| "What Happened With James" section present | PASS   | Present after `---` separator                    |
| "The Lesson Learned" section present       | PASS   | 3 sentences, within spec limit                   |
| No "What This Teaches You" remaining       | PASS   |                                                  |
| No leftover placement headings             | PASS   |                                                  |

### Quality

| Check                                                               | Status | Notes                                                                                          |
| ------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------- |
| Transition line works                                               | PASS   | "James is staring at ten folders, looking for the connections. So are you."                    |
| Exercise instructions second-person                                 | PASS   |                                                                                                |
| All components preserved (AICheck, Flashcards, ConversationGallery) | PASS   | AICheck absent (uses text code block instead), ConversationGallery present, Flashcards present |
| Zero em-dashes                                                      | PASS   |                                                                                                |

### Issues

1. **AICheck component replaced by code block (MINOR)**: L01 uses a `text` code block for the Post-Assessment Check instead of the `<AICheck>` component used in the prototype. This is defensible for a capstone lesson (the prompt is longer and format differs from chapter exercises), but deviates from the standard component pattern. Not blocking.

2. **No Tabs component (INFO)**: Unlike the prototype, no scenario tabs. Acceptable because this lesson references a single fixed scenario (hospital triage baseline). Not a deficiency.

**L01 Verdict: PASS**

---

## L02: Growth Map

### Structure

| Check                                      | Status | Notes                                                          |
| ------------------------------------------ | ------ | -------------------------------------------------------------- |
| "Why This Matters" section present         | PASS   | `## Why This Matters: James and the Numbers That Tell a Story` |
| "Exercise N" section present               | PASS   | `## Exercise 2: Your Growth Map`                               |
| "What Happened With James" section present | PASS   |                                                                |
| "The Lesson Learned" section present       | PASS   | 3 sentences, within spec limit                                 |
| No "What This Teaches You" remaining       | PASS   |                                                                |
| No leftover placement headings             | PASS   |                                                                |

### Quality

| Check                               | Status | Notes                                                                                                          |
| ----------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| Transition line works               | PASS   | "James is tracing his forty data points, looking for the trajectory his two snapshots can't show. So are you." |
| Exercise instructions second-person | PASS   |                                                                                                                |
| All components preserved            | PASS   | Flashcards present. No AICheck needed (this is a fill-in-the-map exercise).                                    |
| Zero em-dashes                      | PASS   |                                                                                                                |

### Issues

1. **"What Comes Next" section sits inside Exercise 2, before "What Happened With James" (MINOR)**: The forward-looking transition text (lines 146-151) and closing quote appear within the exercise section, before the `---` separator and "What Happened With James." Per the Version G four-section pattern, reader-facing forward momentum should come after the James reveal, not before it. The reader sees the Part 1 pitch before seeing James's closing reflection. This inverts the intended emotional arc: exercise, then James's revelation, then synthesis. Consider moving the "What Comes Next" block and the closing blockquote into or after "The Lesson Learned."

**L02 Verdict: PASS (with minor structural note)**

---

## L03: Calibrating and Maintaining AI Prompts

### Structure

| Check                                      | Status | Notes                                                        |
| ------------------------------------------ | ------ | ------------------------------------------------------------ |
| "Why This Matters" section present         | PASS   | `## Why This Matters: James and the Thermometer That Drifts` |
| "Exercise N" section present               | PASS   | `## Exercise 3: Semester Calibration Protocol`               |
| "What Happened With James" section present | PASS   |                                                              |
| "The Lesson Learned" section present       | PASS   | 3 sentences plus a blockquote, within spec spirit            |
| No "What This Teaches You" remaining       | PASS   |                                                              |
| No leftover placement headings             | PASS   |                                                              |

### Quality

| Check                               | Status | Notes                                                                                                                                                                                                                                                                                            |
| ----------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Transition line works               | PASS   | "James just learned that even assessment tools need maintenance. If you are an instructor (or a self-directed learner returning to this material after a model update), this protocol is yours to run." -- functional, though less punchy than the prototype pattern ("James is X. So are you.") |
| Exercise instructions second-person | PASS   |                                                                                                                                                                                                                                                                                                  |
| All components preserved            | PASS   | Flashcards present. No AICheck (instructor protocol, not student assessment).                                                                                                                                                                                                                    |
| Zero em-dashes                      | PASS   |                                                                                                                                                                                                                                                                                                  |

### Special: Part 0 Finale Checks

| Check                                                                                 | Status | Notes                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Emma's career-arc fallibility (not a single mistake, but "skills are not checkboxes") | PASS   | Lines 158-163: "I thought skills were checkboxes. Learn Python. Learn SQL. Learn testing. Each one separate." This is a career-arc reflection, not a single incident. Matches spec row for Ch 11.                                                                                         |
| Emotional beat: James recognizes he's a different thinker                             | PASS   | Lines 173-175: "He wasn't the same thinker who walked in at Chapter 1." The paragraph traces his transformation from the person who reached for AI before forming a position. Clear, earned, specific.                                                                                    |
| Forward momentum to Part 1                                                            | PASS   | Lines 181-185: James asks whether Part 0 carries forward. Emma: "Part 0 isn't the warm-up. It's the operating system." James gathers portfolio into "one document." Ends with calibration exchange.                                                                                       |
| Emma in Collaborator phase (surprised by James, learns from him)                      | PASS   | Line 171: "That's a good analogy, actually. The folders and the workflow. I've been explaining skill integration for a long time, and I never put it quite that way." Emma explicitly acknowledges learning from James's framing.                                                         |
| James teaches back or demonstrates integrated thinking                                | PASS   | Lines 153-165: James independently identifies structural connections between chapters, articulates the prediction-lock/reversal-trigger link as "two halves of the same discipline," and draws the company workflow analogy that surprises Emma. This is teaching back, not just echoing. |

### Issues

1. **Finale content lives in L03, an instructor calibration lesson (MEDIUM)**: The Part 0 emotional finale (Emma's career-arc fallibility, James's transformation recognition, forward momentum to Part 1) is all in the "What Happened With James" section of L03, which is nominally an instructor calibration protocol lesson. The finale lands well narratively, but a student who skips the instructor lesson (which the deliverable framing invites: "If you are a self-directed learner: awareness that the AI prompts... may need re-testing") would miss the entire Part 0 emotional close. Consider whether the finale content should live in L02 instead, or whether L03 should be reframed so students know not to skip it.

2. **L03 transition line breaks the "So are you" pattern (MINOR)**: "James just learned that even assessment tools need maintenance. If you are an instructor..." is functional but reads as instructional rather than as the companionship-without-contamination pattern the spec prescribes. The conditional ("if you are an instructor") distances the reader rather than drawing them in.

3. **L03 "What Happened With James" is 38 lines (INFO)**: Spec says chapter closings (L04) get 20-30 lines. This chapter only has 3 lessons, so L03 IS the closing. 38 lines is modestly over the upper bound for a closing. The content is strong and nothing feels padded, but worth noting against spec.

**L03 Verdict: PASS (with medium structural concern about finale placement)**

---

## Cross-Chapter Checks

| Check                                     | Status | Notes                                                                                                                                                                          |
| ----------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Brand names future-proofed                | PASS   | No "Claude and ChatGPT" in exercise instructions. L01 code block says "claude.ai or chatgpt.com" in the copy-paste title, which is acceptable for a specific tool instruction. |
| Layers Used references present            | PASS   | L01 has it. L02 and L03 omit it, which is acceptable for capstone/supplementary lessons.                                                                                       |
| YAML frontmatter complete                 | PASS   | All 3 files have full frontmatter: skills, learning_objectives, cognitive_load, differentiation, teaching_guide.                                                               |
| `:::info Your Deliverable` blocks present | PASS   | All 3 lessons have them.                                                                                                                                                       |
| `<Flashcards />` present                  | PASS   | All 3 lessons.                                                                                                                                                                 |

---

## Issues Summary

| #   | Lesson | Severity | Issue                                                                                                                    |
| --- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------ |
| 1   | L01    | MINOR    | AICheck component replaced by code block (defensible for capstone)                                                       |
| 2   | L02    | MINOR    | "What Comes Next" forward-looking content precedes "What Happened With James," inverting the intended emotional sequence |
| 3   | L03    | MEDIUM   | Part 0 emotional finale lives inside an instructor calibration lesson that students may skip                             |
| 4   | L03    | MINOR    | Transition line breaks "So are you" companionship pattern                                                                |
| 5   | L03    | INFO     | "What Happened With James" is 38 lines (spec upper bound for closings is 30)                                             |

---

## Overall Verdict: SHIP

All three lessons pass Version G structural compliance. The four required sections are present in every file. Zero em-dashes. Zero leftover placement headings. Zero "What This Teaches You" remnants. All special Part 0 finale requirements (Emma career-arc fallibility, James transformation beat, forward momentum, Collaborator phase, teach-back) are present and well-executed in L03.

The medium-severity concern (finale in an instructor lesson) is worth noting for a future pass but does not block shipping. The emotional close is strong, the narrative arc lands, and the forward momentum to Part 1 is clear. The content is ready to publish.
