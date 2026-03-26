# Chapter 1: Asking Better Questions -- Version G Compliance Review

**Reviewer:** Claude Opus 4.6 (automated)
**Date:** 2026-03-26
**Spec:** `specs/drafts/part0-version-g-spec.md`
**Prototype:** `01-prediction-lock.md` (gold standard)

---

## L01: The Prediction Lock

### Structure

| Item                                                  | Status | Notes                                                                                                      |
| ----------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------- |
| `## Why This Matters: [title]` present                | PASS   | `## Why This Matters: James and the Inherited Diagnosis`                                                   |
| `## Exercise N: [Title]` present with transition line | PASS   | `## Exercise 1: The Prediction Lock` with transition "James is facing a blank page right now. So are you." |
| `## What Happened With James` present                 | PASS   |                                                                                                            |
| `## The Lesson Learned` present (2-5 sentences)       | PASS   | 3 sentences                                                                                                |
| NO "What This Teaches You" section                    | PASS   |                                                                                                            |
| NO leftover placement headings                        | PASS   |                                                                                                            |

### Quality

| Item                                                              | Status | Notes                                                                          |
| ----------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------ |
| Transition reads as challenge, not instruction                    | PASS   | "James is facing a blank page right now. So are you."                          |
| Preamble is sharp (no mini-essays)                                | PASS   |                                                                                |
| "two different AI tools" not brand names in exercise instructions | PASS   | Exercise body says "two different AI tools" (line 189)                         |
| Exercise subheadings are specific                                 | PASS   | "Build Your Prediction Lock", "Now Open AI and Compare", "Check Your Thinking" |
| James never completes exercise before reader                      | PASS   | Scene ends with James about to start                                           |
| Zero em-dashes                                                    | PASS   | No `---` (em-dash) characters found                                            |
| All components preserved                                          | PASS   | AICheck, Flashcards, Tabs/TabItem, ConversationGallery, template               |
| L01 multi-exchange disagreement (3+ exchanges)                    | PASS   | 5+ exchanges before Emma leaves                                                |
| L01 Jonah exit (Emma leaves)                                      | PASS   | "She left. James looked at the blank document..."                              |

### Brand Name Issues (narrative sections, NOT exercise instructions)

| Item                                                    | Status | Notes                                                                                                                                                                                                                                |
| ------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Narrative dialogue uses "Claude" by name                | INFO   | Lines 102, 112, 122, 124, 144, 277. In L01 narrative dialogue, James and Emma reference "Claude" as the specific tool James reaches for. This is acceptable in narrative (character is using a specific product) but needs scrutiny. |
| Template table uses "Claude" / "ChatGPT" column headers | FAIL   | Lines 260-269: Reasoning receipt template has hardcoded "Claude" and "ChatGPT" as tool names in the Tool column. Should use "AI Tool 1" / "AI Tool 2" or leave blank for student to fill.                                            |

**L01 Verdict: PASS with 1 issue** (template brand names)

---

## L02: The Question Tournament

### Structure

| Item                                                  | Status | Notes                                                                                                                                                                   |
| ----------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `## Why This Matters: [title]` present                | PASS   | `## Why This Matters: James and the Fishing Net`                                                                                                                        |
| `## Exercise N: [Title]` present with transition line | PASS   | `## Exercise 2: The Question Tournament` with transition "James is staring at his own list, wondering which questions will survive someone else's ranking. So are you." |
| `## What Happened With James` present                 | PASS   |                                                                                                                                                                         |
| `## The Lesson Learned` present (2-5 sentences)       | PASS   | 3 sentences                                                                                                                                                             |
| NO "What This Teaches You" section                    | PASS   |                                                                                                                                                                         |
| NO leftover placement headings                        | PASS   |                                                                                                                                                                         |

### Quality

| Item                                                              | Status | Notes                                                                                                            |
| ----------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------- |
| Transition reads as challenge, not instruction                    | PASS   | Challenge framing, not classroom language                                                                        |
| Preamble is sharp                                                 | PASS   | Concise scene, no padding                                                                                        |
| "two different AI tools" not brand names in exercise instructions | PASS   | Exercise body says "two different AI tools" (line 130)                                                           |
| Exercise subheadings are specific                                 | PASS   | "Generate Your Questions", "Swap and Rank", "Select the Top 10", "Test Against AI", "Build the Comparison Table" |
| James never completes exercise before reader                      | PASS   | Scene ends with Emma saying "Be ready to discover which of your questions actually cut."                         |
| Zero em-dashes                                                    | PASS   |                                                                                                                  |
| All components preserved                                          | PASS   | AICheck, Flashcards, ConversationGallery, template                                                               |

### Brand Name Issues

| Item                                                                      | Status | Notes                                                                                                                                                                           |
| ------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Template table uses "Claude Response" / "ChatGPT Response" column headers | FAIL   | Line 212: Comparison table template has `Claude Response (summary)` and `ChatGPT Response (summary)` as column headers. Should use "AI Tool 1 Response" / "AI Tool 2 Response". |

### Narrative Quality

| Item                                 | Status | Notes                                                                                                                                          |
| ------------------------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| James's growth from L01              | PASS   | L01: resisted thinking before AI. L02: has done the thinking, now discovers his best questions are the ones he undervalued. Growth is visible. |
| Business analogy from ops background | PASS   | "My manager used to send these all-hands surveys..." (line 102)                                                                                |

**L02 Verdict: PASS with 1 issue** (template brand names)

---

## L03: The Divergence Test

### Structure

| Item                                                  | Status | Notes                                                                                                                                                      |
| ----------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `## Why This Matters: [title]` present                | PASS   | `## Why This Matters: James and the Invisible Overlap`                                                                                                     |
| `## Exercise N: [Title]` present with transition line | PASS   | `## Exercise 3: The Divergence Test` with transition "James is staring at three unmarked paragraphs, trying to find his own thinking in them. So are you." |
| `## What Happened With James` present                 | PASS   |                                                                                                                                                            |
| `## The Lesson Learned` present (2-5 sentences)       | PASS   | 3 sentences                                                                                                                                                |
| NO "What This Teaches You" section                    | PASS   |                                                                                                                                                            |
| NO leftover placement headings                        | PASS   |                                                                                                                                                            |

### Quality

| Item                                                              | Status | Notes                                                                                                                                               |
| ----------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Transition reads as challenge, not instruction                    | PASS   |                                                                                                                                                     |
| Preamble is sharp                                                 | PASS   |                                                                                                                                                     |
| "two different AI tools" not brand names in exercise instructions | PASS   | No brand names in exercise instructions                                                                                                             |
| Exercise subheadings are specific                                 | PASS   | "Develop Your Analysis Using AI as a Thinking Partner", "Write Your Analysis", "Write Your Uniqueness Statement", "Complete Your Reasoning Receipt" |
| James never completes exercise before reader                      | PASS   | Scene ends with James struggling to write uniqueness statement                                                                                      |
| Zero em-dashes                                                    | PASS   |                                                                                                                                                     |
| All components preserved                                          | PASS   | AICheck, Flashcards, ConversationGallery, template (uniqueness statement example)                                                                   |

### Narrative Quality

| Item                                 | Status | Notes                                                                                                                                                                           |
| ------------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| James's growth from L02              | PASS   | L02: discovered his questioning blind spots. L03: invested more effort, cross-referenced three tools, but discovers even "synthesizing" can be passive. Progression is natural. |
| Business analogy from ops background | PASS   | "It's like those group projects at my old company..." (line 98)                                                                                                                 |

### Transition Connection to L04

| Item                                               | Status | Notes                                                                                                           |
| -------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------- |
| Forward connection from "What Happened With James" | PASS   | Emma says "The next exercise is going to test whether you can defend what you wrote." (line 212) Direct bridge. |

**L03 Verdict: PASS (clean)**

---

## L04: Live Defence

### Structure

| Item                                                  | Status | Notes                                                                                                                                        |
| ----------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `## Why This Matters: [title]` present                | PASS   | `## Why This Matters: James and the Green Highlights`                                                                                        |
| `## Exercise N: [Title]` present with transition line | PASS   | `## Exercise 4: Live Defence` with transition "James is folding his printout, green islands and white gaps staring back at him. So are you." |
| `## What Happened With James` present                 | PASS   |                                                                                                                                              |
| `## The Lesson Learned` present (2-5 sentences)       | PASS   | 3 sentences                                                                                                                                  |
| NO "What This Teaches You" section                    | PASS   |                                                                                                                                              |
| NO leftover placement headings                        | PASS   |                                                                                                                                              |

### Quality

| Item                                                              | Status | Notes                                                                                   |
| ----------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------- |
| Transition reads as challenge, not instruction                    | PASS   |                                                                                         |
| Preamble is sharp                                                 | PASS   |                                                                                         |
| "two different AI tools" not brand names in exercise instructions | PASS   |                                                                                         |
| Exercise subheadings are specific                                 | PASS   | "Phase 1: Live Defence", "Phase 2: AI Counter-Arguments", "Phase 3: Chapter Reflection" |
| James never completes exercise before reader                      | PASS   | Scene ends before defence happens                                                       |
| Zero em-dashes                                                    | PASS   |                                                                                         |
| All components preserved                                          | PASS   | AICheck, Flashcards, ConversationGallery, template (peer feedback form)                 |

### L04-Specific Requirements

| Item                                    | Status | Notes                                                                                                                                                                                                              |
| --------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Emma fallibility (Type A: Past Mistake) | PASS   | CTO presentation story, lines 222-233. "The CTO asked me one question about the sampling methodology. One question. And I had nothing." Matches spec (Ch 1: "CTO presentation: couldn't defend borrowed numbers"). |
| Emotional beat                          | PASS   | "Because I remembered what it felt like to freeze in front of a room full of people who trusted me to know my own work." (line 232) Genuine vulnerability.                                                         |
| Chapter closing feel                    | PASS   | Final exchange "Ready for Chapter 2?" / "I'm less sure of things than I was an hour ago." / "Good. That's called calibration." Strong close.                                                                       |
| Chapter deliverable block               | PASS   | `:::info Chapter Deliverable` block with all 6 components listed (line 250).                                                                                                                                       |
| Grading criteria                        | PASS   | Complete table with weights. Final answer worth 0%.                                                                                                                                                                |

### Narrative Quality

| Item                   | Status | Notes                                                                                                                                                                                                                                      |
| ---------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| James's growth L01-L04 | PASS   | L01: resisted thinking before AI. L04: can articulate the difference between defended and borrowed thinking, uses green/white markup metaphor, connects to old company experience. Clear arc from resistance to calibrated self-awareness. |
| Business analogy       | PASS   | "The directors who'd run their own analysis could take any question from the VP. The ones who'd copied the consultant's framework folded under the first follow-up." (line 214)                                                            |

### Preamble Note

| Item                          | Status | Notes                                                                                                                                                                                                                                                                                                                                      |
| ----------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Opening line before narrative | INFO   | Line 92 has a cross-reference sentence: "This exercise uses the analysis you wrote in Exercise 3..." This sits before the narrative section but after the heading. It is functional (tells reader what to bring) but slightly breaks the pattern of diving straight into scene. Not a failure, but differs from the L01 prototype pattern. |

**L04 Verdict: PASS (clean)**

---

## Arc Review (L01 through L04)

| Check                              | Status | Notes                                                                                                                                                                                                                                                 |
| ---------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| James's growth visible L01 to L04  | PASS   | L01: reflexive AI-first instinct. L02: discovers questioning has a shape. L03: "synthesizing" is not the same as thinking. L04: can articulate the defended/borrowed distinction and connects it to career stakes. Clear, non-regressive progression. |
| No regression                      | PASS   | Each lesson builds on the previous insight. James never reverts to earlier mistakes.                                                                                                                                                                  |
| Transitions connected              | PASS   | L01 ends with Emma leaving (Jonah exit). L02 naturally follows with James having a question list. L03 "What Happened With James" directly bridges to L04. L04 opens with cross-reference to L03.                                                      |
| Emma's phase (Authority, per spec) | PASS   | Emma is direct, instructional, Socratic. "Write your own diagnosis first." "Write me a uniqueness statement." "That's exactly the distinction." Authority voice throughout.                                                                           |

---

## Issues Summary

### Must Fix (2 items, same root cause)

1. **L01 template brand names.** The Reasoning Receipt template (lines 260-269) hardcodes "Claude" and "ChatGPT" as alternating tool names in the Tool column. The spec says "two different AI tools" not brand names (future-proofing rule). The exercise body itself correctly says "two different AI tools" (line 189), but the template contradicts this by pre-filling brand names. **Fix:** Replace "Claude" with "AI Tool 1" and "ChatGPT" with "AI Tool 2" in the template table, or leave the Tool column blank for the student to fill.

2. **L02 template brand names.** The Comparison Table template (line 212) uses "Claude Response (summary)" and "ChatGPT Response (summary)" as column headers. Same issue as L01. **Fix:** Replace with "AI Tool 1 Response (summary)" and "AI Tool 2 Response (summary)".

### Observation (not blocking)

3. **L01 narrative uses "Claude" by name.** James and Emma refer to "Claude" 6 times in the L01 dialogue. This is in the narrative (character dialogue), not the exercise instructions. The spec's "two different AI tools" rule targets exercise instructions for future-proofing. Characters naturally name specific products they use. However, if the intent is full brand-neutrality across the entire file, these would need conversion too. Flagging for awareness; not scoring as a failure since the spec rule targets exercise prose.

4. **L04 preamble cross-reference.** L04's "Why This Matters" section opens with a functional cross-reference sentence before the narrative ("This exercise uses the analysis you wrote in Exercise 3..."). The prototype (L01) dives directly into scene. Minor pattern deviation; the cross-reference is useful for reader orientation.

5. **`--` in AICheck prompts.** All four files use `--` (double hyphen) inside AICheck prompt text as informal dashes. These are inside code-like prompt blocks, not prose. Not em-dashes, and the spec's zero-em-dash rule targets the Unicode em-dash character. Noting for awareness only.

---

## Scorecard

| Lesson | Structure | Quality                    | Arc         | Verdict         |
| ------ | --------- | -------------------------- | ----------- | --------------- |
| L01    | 6/6       | 8/9 (template brand names) | N/A (start) | PASS with 1 fix |
| L02    | 6/6       | 8/9 (template brand names) | PASS        | PASS with 1 fix |
| L03    | 6/6       | 9/9                        | PASS        | PASS (clean)    |
| L04    | 6/6       | 9/9 + all L04 extras       | PASS        | PASS (clean)    |

---

## Overall Verdict: SHIP (with 2 template fixes)

Chapter 1 is Version G compliant. All four sections present in every lesson. Transitions work as challenges. James's arc is clean and non-regressive. L04 has Emma fallibility, emotional beat, and chapter closing. All components preserved. Zero em-dashes. Zero leftover headings.

Two template tables use hardcoded brand names ("Claude"/"ChatGPT") instead of generic "AI Tool 1"/"AI Tool 2". These are quick find-and-replace fixes in the deliverable templates of L01 and L02. No structural or narrative work required.

After those two fixes: ship.
