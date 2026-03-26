# Part 0, Chapter 1: Narrative Integration Review

**Reviewer**: Quality Review Agent
**Date**: 2026-03-26
**Spec**: `specs/drafts/part0-narrative-option-b.md`
**Files reviewed**: L01 through L04 of `01-asking-better-questions/`

---

## A. Spec Compliance

### A1. Narrative Density (Target: 28-35% per lesson)

Methodology: Counted non-blank narrative lines (dialogue scenes, bridges, reflections) vs. total non-blank content lines, excluding YAML frontmatter (everything above the closing `---` of the frontmatter block) and import statements. Blank lines, `---` separators, and pure-markdown structural lines counted neutrally.

| Lesson | Total Lines (excl. frontmatter) | Narrative Lines | Exercise Lines | Narrative % | Verdict                    |
| ------ | ------------------------------- | --------------- | -------------- | ----------- | -------------------------- |
| L01    | ~207                            | ~60             | ~147           | ~29%        | PASS (within 28-35%)       |
| L02    | ~160                            | ~52             | ~108           | ~33%        | PASS (within 28-35%)       |
| L03    | ~132                            | ~38             | ~94            | ~29%        | PASS (within 28-35%)       |
| L04    | ~182                            | ~65             | ~117           | ~36%        | MARGINAL (1% over ceiling) |

L04 is at approximately 36%, slightly over the 35% ceiling. The excess comes from the chapter closing scene (the Emma fallibility moment + emotional beat + "Ready for Chapter 2?" exchange). This is defensible because the spec itself allocates 25-30 lines for the chapter closing and the scene earns every line. However, if strict compliance is required, trimming 3-4 lines from the Emma CTO story (lines 222-230 of L04) would bring it to 34%.

**Verdict**: PASS with note. L01-L03 solidly within range. L04 is 1 point over; acceptable given the chapter-closing function.

### A2. Narrative and Exercise Separated by `---` Horizontal Rules

| Lesson | Opening scene ends with `---` before exercise | Post-exercise bridge starts after `---`       | Verdict |
| ------ | --------------------------------------------- | --------------------------------------------- | ------- |
| L01    | Line 150: `---` before "Exercise 1"           | Line 277: `---` before bridge                 | PASS    |
| L02    | Line 106: `---` before exercise instructions  | Line 222: `---` before bridge                 | PASS    |
| L03    | Line 104: `---` before "What You Do"          | Line 188: `---` before bridge (after details) | PASS    |
| L04    | Line 110: `---` before "What You Do"          | Line 210: `---` before chapter closing        | PASS    |

**Verdict**: PASS. Every narrative-to-exercise boundary has a horizontal rule.

### A3. James Never Does the Exercise

| Lesson | James's role in narrative                                                                        | Does he perform the exercise?                                                                                                                                                              | Verdict |
| ------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| L01    | Resists the concept, tries to use Claude first, gets convinced to write his own diagnosis        | He never writes a prediction lock on-page. He does get a Claude response (as part of the Socratic exchange), but this is Emma's deliberate demonstration of the problem, not the exercise. | PASS    |
| L02    | Shows up with his 15 questions, discusses question quality with Emma                             | He never does the tournament ranking, comparison table, or AI testing on-page.                                                                                                             | PASS    |
| L03    | Discusses his analysis, tries to write a uniqueness statement, realizes his contribution is thin | He never writes the 500-800 word analysis, completes the reasoning receipt, or does the full divergence test on-page.                                                                      | PASS    |
| L04    | Reviews his marked-up printout, discusses defence strategy, reflects after                       | He never conducts the defence, generates counter-arguments, or writes the reflection on-page.                                                                                              | PASS    |

**Verdict**: PASS. In every lesson, James models the resistance and the emotional response, never the exercise steps.

### A4. Exercise Instructions Remain Second-Person

| Lesson | Sample exercise language                                                                                                           | Any character names in exercise zone? | Verdict |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ------- |
| L01    | "You receive a scenario" (L158), "Write down" (L158), "Timestamp and submit" (L164)                                                | No                                    | PASS    |
| L02    | "Write 15 diagnostic questions" (L112), "Exchange question lists with your partner" (L114), "Feed each of the 10 questions" (L118) | No                                    | PASS    |
| L03    | "Prompt AI with your own questions" (L108), "Write your analysis" (L110), "Write your uniqueness statement" (L112)                 | No                                    | PASS    |
| L04    | "Present your analysis" (L116), "Each panelist fills out" (L118), "Paste your analysis" (L126), "Write a 200-word response" (L128) | No                                    | PASS    |

**Verdict**: PASS. All exercise instructions use clean second-person direct address.

### A5. Components Intact and Unmodified

| Component                  | L01                                            | L02                                                                     | L03                                              | L04                                                                | Verdict |
| -------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------ | ------- |
| AICheck with id + xp       | `prediction-lock` xp=50                        | `question-tournament` xp=50                                             | `divergence-test` xp=50                          | `live-defence` xp=50                                               | PASS    |
| AICheckField elements      | 2 fields (scenario, prediction_lock_document)  | 4 fields (scenario, my_questions, partners_questions, comparison_table) | 3 fields (scenario, analysis, reasoning_receipt) | 2 fields (scenario, analysis)                                      | PASS    |
| Templates (details blocks) | Prediction Lock Template present               | Comparison Table Template present                                       | Uniqueness Statement Example present             | Peer Feedback Form Template + Grading Criteria present             | PASS    |
| Tabs components            | 3 scenario tabs (Business/Technical/Social)    | N/A (uses L01 scenario)                                                 | N/A (uses L01 scenario)                          | N/A (uses L03 analysis)                                            | PASS    |
| Flashcards                 | `<Flashcards />` at bottom                     | `<Flashcards />` at bottom                                              | `<Flashcards />` at bottom                       | `<Flashcards />` at bottom                                         | PASS    |
| ConversationGallery        | `<ConversationGallery />` in L01 after AICheck | N/A                                                                     | N/A                                              | N/A                                                                | PASS    |
| Deliverable blocks         | `:::info Your Deliverable` present             | `:::info Your Deliverable` present                                      | `:::info Your Deliverable` present               | `:::info Your Deliverable` + `:::info Chapter Deliverable` present | PASS    |

**Verdict**: PASS. All components verified intact.

### A6. No Import Statements Added

| Lesson | Import statements                                                         | Verdict             |
| ------ | ------------------------------------------------------------------------- | ------------------- |
| L01    | `import Tabs` and `import TabItem` (original, required for scenario tabs) | PASS (pre-existing) |
| L02    | None                                                                      | PASS                |
| L03    | None                                                                      | PASS                |
| L04    | None                                                                      | PASS                |

**Verdict**: PASS. No new imports added. L01's Tab imports are original to the exercise.

### A7. No Em-Dashes

Searched all four files for Unicode em-dash character (`\u2014`): zero occurrences.
Searched for double-hyphens (`--`): found in AICheck prompt text (stylistic choice within AI prompt instructions, not prose), YAML/table separators, and one dialogue interruption in L01 line 104 (`"Hey, I was about to --"`). The dialogue interruption is a trailing double-hyphen indicating cut-off speech, not an em-dash used as punctuation.

**Verdict**: PASS. No em-dashes in prose.

---

## B. Voice Quality

### B1. James Uses At Least 1 Business Analogy Per Lesson

| Lesson | Business Analogy                                                                                                                                                                                                                                                                          | Line                                                  | Verdict  |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | -------- |
| L01    | "You just adopted a stranger's diagnosis without examining the patient." (Emma says this, but it frames James's behavior.) James's business identity shows through his pragmatism: "That feels slower." / "Why would I sit here guessing when the tool can analyze it in seconds?"        | No explicit business-from-old-job analogy from James. | **FAIL** |
| L02    | "In my old job, we had something similar. My manager used to send these all-hands surveys asking 'How can we improve?' and getting useless answers. Then one quarter she asked 'What is the single biggest thing that slowed you down last week?' and got actual information." (L102-103) | Line 102                                              | PASS     |
| L03    | "It's like those group projects at my old company. Everyone contributed 'something,' but when the VP asked who wrote the executive summary, four people raised their hands and none of them could explain the methodology." (L100-101)                                                    | Line 100                                              | PASS     |
| L04    | No business analogy from James. His language is reflective but not grounded in his ops background.                                                                                                                                                                                        | No line                                               | **FAIL** |

**Verdict**: FAIL. L01 and L04 are missing James's primary voice marker. In L01, James is reactive (resisting, questioning) but never grounds his resistance in a business-ops analogy. The "stranger's diagnosis" metaphor is Emma's, not his. In L04, the reflective tone is appropriate for the chapter closing, but the spec requires at least 1 business analogy per lesson. A single line like "In my old job, the people who survived executive Q&A were the ones who'd done their own analysis, not the ones with the prettiest slides" would fix L04. For L01, something like "At my old company, we'd never walk into a supplier negotiation without our own numbers first. This feels like the same thing" during the pushback exchange would work.

### B2. James Uses At Least 1 Thinking-Out-Loud Phrase Per Lesson

| Lesson | Thinking-out-loud phrase                                                        | Line           | Verdict |
| ------ | ------------------------------------------------------------------------------- | -------------- | ------- |
| L01    | "Okay, counterpoint." (L120); "Alright... so what do you want me to do?" (L134) | Lines 120, 134 | PASS    |
| L02    | "Wait, so question eight actually eliminates hypotheses." (L96)                 | Line 96        | PASS    |
| L03    | "This is harder than I expected." (L94)                                         | Line 94        | PASS    |
| L04    | "The things I could defend were the things I actually figured out." (L214)      | Line 214       | PASS    |

**Verdict**: PASS. Every lesson has at least one thinking-out-loud moment.

### B3. Emma Uses At Least 1 Socratic Question Per Lesson

| Lesson | Socratic Question                                                                                                                                                                   | Line          | Type                                                 | Verdict |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------- | ------- |
| L01    | "What do you think happened?" (L106); "When Claude gives you an answer, how will you know if it's right?" (L110); "Against what?" (L114); "Do you agree with that analysis?" (L126) | Multiple      | Clarification, probing assumptions, probing evidence | PASS    |
| L02    | "Now tell me: when you feed question one to Claude, what kind of answer do you get?" (L90)                                                                                          | Line 90       | Probing implications                                 | PASS    |
| L03    | "How much of your analysis came from your own thinking versus what AI told you?" (L86)                                                                                              | Line 86       | Probing evidence                                     | PASS    |
| L04    | "Nervous?" (L96); "How did the AI counter-arguments go?" (L216)                                                                                                                     | Lines 96, 216 | Clarification                                        | PASS    |

**Verdict**: PASS. Emma's Socratic voice is strong throughout.

### B4. Emma Never Speaks 4+ Sentences Uninterrupted

| Lesson | Longest Emma speech                                                                                                                                                                                                                      | Sentences   | Verdict  |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | -------- |
| L01    | Lines 118-119: "You haven't formed a position yet. You have nothing to compare it to. You're not evaluating; you're just agreeing with the first convincing voice in the room."                                                          | 3 sentences | PASS     |
| L01    | Lines 130-131: "You just adopted a stranger's diagnosis without examining the patient. You read it, it sounded reasonable, and now it's yours. That's not evaluation. That's inheritance."                                               | 4 sentences | MARGINAL |
| L02    | Lines 98-99: "Your question one is a fishing net. It catches everything but tells you nothing about what's in the net. Question eight is a scalpel. It separates one explanation from another."                                          | 4 sentences | MARGINAL |
| L03    | Line 102: "The divergence test is the same question at scale. Thirty students, same scenario, same tools. The only variable is thinking. The parts of your analysis that match everyone else's, those came from the tool, not from you." | 4 sentences | MARGINAL |
| L04    | Lines 222-227: The CTO story spans ~6 sentences uninterrupted.                                                                                                                                                                           | 6 sentences | **FAIL** |

The monologue breaker rule from patterns.md says "Emma's longest uninterrupted speech is 3-4 sentences." L01 line 130 and L02 line 98 are at the 4-sentence boundary, which is at the upper edge of acceptable. L04's CTO story (lines 222-227) runs 6 sentences before James responds. This needs a break.

**Verdict**: FAIL on L04 (CTO story monologue). The fix: have James interject after "I'd built the entire presentation on numbers from a senior engineer's report." Something like: `James winced. "I've been in meetings like that."` Then Emma continues with the CTO question. This preserves the story while breaking the monologue.

### B5. Dialogue Passes the Tag Test

Removed dialogue tags mentally and tested each lesson:

- **L01**: Strong. James's resistance ("Why would I sit here guessing"), his pragmatism ("That feels slower"), and his yielding ("Alright, so what do you want me to do") are clearly his voice. Emma's precision ("Against what?", "You're not evaluating; you're just agreeing") is unmistakably hers. PASS.
- **L02**: Strong. James's enthusiasm about quantity ("Fifteen questions. Every angle covered."), his realization ("Wait, so question eight actually eliminates hypotheses"), and his business analogy are clearly his. Emma's "fishing net vs. scalpel" and one-sentence observations are clearly hers. PASS.
- **L03**: Moderate. James's defensive "I told you, I didn't just copy it" and his group-project analogy are identifiable. Emma's "Good. That means you're looking honestly" could be either character without context. Borderline. PASS (marginal).
- **L04**: Strong. James's color-coded printout system, his distinction between green and white sections, and his "I'm less sure of things than I was an hour ago" are clearly his. Emma's CTO story and "That's called calibration" are clearly hers. PASS.

**Verdict**: PASS.

---

## C. Pattern Compliance

### C1. L01 Has Multi-Exchange Disagreement (3+ Exchanges)

The disagreement runs from line 108 to line 133:

| Exchange | James                                                                              | Emma                                                                            |
| -------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 1        | "Why would I sit here guessing when the tool can analyze it in seconds?" (L108)    | "When Claude gives you an answer, how will you know if it's right?" (L110)      |
| 2        | "I'll evaluate it. Read it critically." (L112)                                     | "Against what?" (L114)                                                          |
| 3        | "What if I ask Claude first, read the response, and then form my own view?" (L120) | "Try it. Right now." (L122)                                                     |
| 4        | James tries it, agrees with Claude's analysis (L124-128)                           | "You just adopted a stranger's diagnosis without examining the patient." (L130) |
| 5        | James realizes the problem (L132)                                                  | ---                                                                             |

Five exchanges. James proposes an alternative at exchange 3, tries it at exchange 4, and it fails in a way he can see himself. This is textbook multi-exchange disagreement.

**Verdict**: PASS. 5 exchanges, well-structured.

### C2. L01 Has Jonah Exit (Emma Leaves Before Exercise)

Lines 142-148: Emma gives the final instruction ("Write down three things..."), pauses at the door for one more line about the prediction lock's value, and leaves. James is alone with the blank document. The exercise instructions follow after the `---` at line 150.

**Verdict**: PASS. Clean Jonah exit.

### C3. At Least 1 Pushback Exchange Per Lesson Opening

| Lesson | Pushback      | Content                                                                            | Verdict |
| ------ | ------------- | ---------------------------------------------------------------------------------- | ------- |
| L01    | Lines 108-133 | James argues AI is faster; full multi-exchange disagreement                        | PASS    |
| L02    | Lines 80-104  | James is proud of quantity; Emma challenges quality of his "best" question         | PASS    |
| L03    | Lines 82-103  | James claims he synthesized, not copied; Emma challenges with uniqueness statement | PASS    |
| L04    | Lines 94-108  | James distinguishes green/white sections; Emma frames the defence challenge        | PASS    |

**Verdict**: PASS.

### C4. L04 Has Emma Fallibility Type A

Lines 222-230: Emma tells the CTO story about presenting a senior colleague's performance analysis as her own thinking, being asked one question about sampling methodology, and freezing in front of 12 people.

This is a past mistake from her engineering career, clearly Type A (Past Mistake) per the pattern taxonomy.

**Verdict**: PASS.

### C5. L04 Has Emotional Beat (Curiosity/Wonder)

Lines 236-242: James's realization that question formulation is the "load-bearing foundation" for all future answers, followed by the "I'm less sure of things than I was an hour ago" / "That's called calibration" exchange.

This is an emotional beat of the "wonder, possibility" type from the Pattern 7 taxonomy for chapters 1-5. The specific emotion is the surprise of discovering that something he dismissed as a warm-up skill is actually foundational.

**Verdict**: PASS.

---

## D. Arc Consistency

### D1. James's Growth Is Visible Across L01 to L04

| Lesson | James's Starting Position                                                                  | James's Ending Position                                                                                  | Growth                              |
| ------ | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| L01    | "AI can analyze it better than me. Why bother thinking first?"                             | "I can see where my radar has blind spots. The prediction isn't the deliverable; the self-knowledge is." | Recognizes value of pre-AI thinking |
| L02    | "Fifteen questions. Every angle covered." (Quantity = thoroughness)                        | "Quantity felt like thoroughness. But her five cut deeper than my fifteen."                              | Quality over quantity               |
| L03    | "I didn't just copy it. I synthesized." (Defensive about originality)                      | "The parts I was proudest of were the parts I actually thought through myself."                          | Honest self-assessment              |
| L04    | "The green sections, I can talk about those all day." (Knows his strengths and weaknesses) | "Question quality IS thinking quality." (Integrated understanding)                                       | Full integration                    |

The arc is clear and progressive. James moves from dismissive to curious to honest to calibrated.

**Verdict**: PASS. Clean growth arc.

### D2. No Character Regression

Checked for James re-asking or re-resisting something he already understood:

- L02: James doesn't re-argue that AI is faster (L01's issue). He has a new issue (quantity vs. quality). PASS.
- L03: James doesn't re-argue quantity. He has moved to defending the quality of his engagement with AI. PASS.
- L04: James doesn't re-argue any previous point. He is now integrating everything. PASS.

**Verdict**: PASS. No regression.

### D3. Emma's Voice Is Consistent Across All 4 Lessons

Emma maintains:

- Short, precise sentences throughout (never chatty)
- Socratic questions as default mode in all four lessons
- No "Great question!" or "Let me explain..." anti-patterns
- Dry observations when appropriate ("That's called calibration")
- Authority-phase mentor behavior (appropriate for Part 0)

**Verdict**: PASS.

### D4. Transitions Between Lessons Feel Connected

- L01 to L02: L01's post-exercise bridge establishes "your instincts missed the demographic shift." L02 opens with James bringing his 15 questions to Emma, a natural continuation. The scenario continuity (same business case) threads them together. PASS.
- L02 to L03: L02's bridge establishes that question quality is visible through comparison. L03 opens with James having spent extra time on his analysis. Natural progression. The explicit cross-reference ("Use the same scenario you chose in Exercise 1") maintains continuity. PASS.
- L03 to L04: L03's bridge ends with Emma saying "The next exercise is going to test whether you can defend what you wrote." L04 opens with James reviewing his marked-up analysis. Direct handoff. PASS.

**Verdict**: PASS.

---

## E. Exercise Integrity

### E1. All Exercise Steps Preserved Exactly

| Lesson | Steps                                                                           | Preserved          | Verdict |
| ------ | ------------------------------------------------------------------------------- | ------------------ | ------- |
| L01    | Steps (a), (b), (c) + "Choose Your Scenario" + AI submission instructions       | Yes, lines 158-186 | PASS    |
| L02    | Steps 1-5 + Solo Learner Alternative                                            | Yes, lines 112-124 | PASS    |
| L03    | Steps 1-4                                                                       | Yes, lines 108-114 | PASS    |
| L04    | Phase 1 Steps 1-2, Phase 2 Steps 3-4, Phase 3 Step 5 + Solo Learner Alternative | Yes, lines 114-132 | PASS    |

### E2. All Scenario Tabs Preserved

L01 contains three `<TabItem>` elements: Business, Technical, Social/Education. All three scenario texts are intact. L02-L04 reference L01's scenario via cross-links.

**Verdict**: PASS.

### E3. All AICheck Prompts Preserved

| Lesson | AICheck id          | Prompt items       | Fields                                                           | Thinking Score Card | Verdict |
| ------ | ------------------- | ------------------ | ---------------------------------------------------------------- | ------------------- | ------- |
| L01    | prediction-lock     | 5 evaluation items | 2 (scenario, prediction_lock_document)                           | Present             | PASS    |
| L02    | question-tournament | 5 evaluation items | 4 (scenario, my_questions, partners_questions, comparison_table) | Present             | PASS    |
| L03    | divergence-test     | 5 evaluation items | 3 (scenario, analysis, reasoning_receipt)                        | Present             | PASS    |
| L04    | live-defence        | 4 evaluation items | 2 (scenario, analysis)                                           | Present             | PASS    |

### E4. All Templates Preserved

| Lesson | Template                                                              | Present                 | Verdict |
| ------ | --------------------------------------------------------------------- | ----------------------- | ------- |
| L01    | Prediction Lock Template (details block)                              | Lines 235-269           | PASS    |
| L02    | Comparison Table Template (details block)                             | Lines 193-214           | PASS    |
| L03    | Uniqueness Statement Example (details block)                          | Lines 175-186           | PASS    |
| L04    | Peer Feedback Form (details block) + Grading Criteria (details block) | Lines 185-202 + 250-264 | PASS    |

### E5. All "What This Teaches You" Sections Preserved

| Lesson | Present       | Content intact | Verdict |
| ------ | ------------- | -------------- | ------- |
| L01    | Line 273-275  | Yes            | PASS    |
| L02    | Lines 219-220 | Yes            | PASS    |
| L03    | Lines 190-192 | Yes            | PASS    |
| L04    | Lines 206-208 | Yes            | PASS    |

### E6. All Flashcards Components Preserved

| Lesson | `<Flashcards />` present | Verdict |
| ------ | ------------------------ | ------- |
| L01    | Line 295                 | PASS    |
| L02    | Line 234                 | PASS    |
| L03    | Line 206                 | PASS    |
| L04    | Line 267                 | PASS    |

### E7. YAML Frontmatter Completely Unchanged

Verified all four files have complete frontmatter with: sidebar_position, aicheck, title, description, keywords, chapter, lesson, duration_minutes, skills (with proficiency_level, category, bloom_level, digcomp_area, measurable_at_this_level), learning_objectives (with proficiency_level, bloom_level, assessment_method), cognitive_load (new_concepts, assessment), differentiation (extension_for_advanced, remedial_for_struggling), and teaching_guide (all sub-fields).

**Verdict**: PASS. Frontmatter is complete and appears unmodified.

---

## Summary: Issue Register

| #   | Severity | Lesson | Issue                                                                                                                                                                     | Fix                                                                                                                                                                                                                                                                         |
| --- | -------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Medium   | L01    | James has no business analogy from his ops background. His pushback is generic pragmatism ("That's inefficient", "That feels slower") rather than grounded in his career. | Add one line during the pushback, e.g.: `"At my old company, we never walked into a supplier review without our own numbers. But those were facts, not guesses. This feels different."`                                                                                     |
| 2   | Medium   | L04    | James has no business analogy in the chapter closing. His reflection is personal but unanchored.                                                                          | Add one line in the post-defence reflection, e.g.: `"In my old job, the people who survived the VP's quarterly reviews were the ones who'd run their own analysis, not the ones who'd borrowed the consultant's slides."`                                                   |
| 3   | Medium   | L04    | Emma's CTO story (lines 222-227) runs 6 sentences uninterrupted, violating the monologue breaker rule (max 3-4 sentences).                                                | Insert a James reaction after "His methodology, his conclusions, his framework. I just made the slides look better." (line 223). Something like: `James shifted in his chair. He'd been in meetings like that.` Then Emma continues with "The CTO asked me one question..." |
| 4   | Low      | L04    | Narrative density is ~36%, slightly over the 35% ceiling.                                                                                                                 | Trimming 3-4 lines from the CTO story (which also fixes issue #3) would bring it to ~34%.                                                                                                                                                                                   |

---

## Narrative Quality Rating: 8/10

**Justification:**

The narrative succeeds at its core mission: making the reader feel the resistance James feels (and the reader is also feeling) before each exercise, then stepping back to let the exercise speak for itself. Specific strengths:

1. **L01's opening scene is excellent.** The multi-exchange disagreement is the strongest writing in the chapter. Emma's move of having James try his approach first, then revealing the failure, is exactly the Pattern 6 template done well. The moment where James can't tell if Claude's analysis sounds right because it IS right or because it's well-written (line 132) is sharp.

2. **The green/white markup device in L04 is original and effective.** It creates a visual metaphor (green islands in a sea of white) that anchors the entire defence lesson. This is the kind of narrative invention that justifies Option B.

3. **The `---` separation works.** Reading each file, the exercise zones feel clean and authoritative. The narrative doesn't leak into the instructions.

4. **Post-exercise bridges earn their space.** James's reflections are specific (not generic "I learned a lot"), tied to his actual exercise results, and advance his character arc.

**What holds it back from a 9:**

- L01 and L04 missing James's primary voice marker (business analogy) weakens his character signature in the bookend lessons of the chapter.
- The CTO monologue in L04 is the one place where the narrative reads like "telling" rather than "showing." The story itself is good, but it needs a breath.
- L03's opening is the weakest of the four. The dialogue is functional but lacks the tension of L01 or the revelation of L02. Emma's "Good. That means you're looking honestly" is close to a generic approval line.

---

## Overall Verdict: REVISE

Three specific, bounded revisions required:

### Revision 1: Add James business analogy to L01 opening (Issue #1)

**File**: `apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/01-prediction-lock.md`
**Location**: Lines 108-120 (during the pushback exchange)
**Change**: Add one line of dialogue where James grounds his resistance in his ops background. Example placement: after "Why would I sit here guessing when the tool can analyze it in seconds?" (line 108), add a follow-up: `"At my old company, we'd pull up the supplier dashboard and let the numbers talk. Nobody sat around writing down what they thought the numbers would say before looking at them."`

### Revision 2: Add James business analogy to L04 chapter closing (Issue #2)

**File**: `apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/04-live-defence.md`
**Location**: Lines 212-218 (post-defence reflection)
**Change**: Add one line where James connects his defence experience to his business background. Example placement: after "Not the things I spent the most time formatting or the most tokens generating" (line 214), add: `It was like the quarterly reviews at his old company. The directors who'd run their own analysis could take any question from the VP. The ones who'd copied the consultant's framework folded under the first follow-up.`

### Revision 3: Break Emma's CTO monologue in L04 (Issue #3 + #4)

**File**: `apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/04-live-defence.md`
**Location**: Lines 222-227
**Change**: After "His methodology, his conclusions, his framework. I just made the slides look better." insert a James reaction beat. For example:

```
James winced. He knew exactly what was coming.
```

Then Emma continues with "The CTO asked me one question about the sampling methodology."

This both fixes the monologue violation and trims the unbroken speech to 3 sentences before the break, which also slightly reduces density toward the 35% ceiling.

---

No structural issues. No exercise damage. No arc breaks. The narrative is working. These three revisions are craft refinements, not structural problems. Option B is validated for Part 0, Chapter 1.
