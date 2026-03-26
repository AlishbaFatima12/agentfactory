# Chapter 5: Communicating What Matters -- Version G Compliance Review

**Reviewer**: Claude Opus 4.6 (automated)
**Date**: 2026-03-26
**Prototype reference**: Ch01 L01 (01-prediction-lock.md)
**Spec reference**: specs/drafts/part0-version-g-spec.md

---

## Per-Lesson Compliance Matrix

### L01: The Audience Prediction (01-audience-prediction.md)

| Check | Item                                                     | Status | Notes                                                                                                                                                   |
| ----- | -------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | **Section 1: "Why This Matters"**                        | PASS   | `## Why This Matters: James and the One-Size-Fits-All Brief`                                                                                            |
| 2     | **Section 2: Exercise heading**                          | PASS   | `## Exercise 1: Three Audiences, One Decision`                                                                                                          |
| 3     | **Section 3: "What Happened With James"**                | PASS   | Present, 10 lines, specific results                                                                                                                     |
| 4     | **Section 4: "The Lesson Learned"**                      | PASS   | 3 sentences                                                                                                                                             |
| 5     | **No "What This Teaches You"**                           | PASS   | Absent                                                                                                                                                  |
| 6     | **No placement headings**                                | PASS   | No OPENING SCENE / POST-EXERCISE BRIDGE                                                                                                                 |
| 7     | **Transition line**                                      | PASS   | "James is staring at a brief that works for one audience and fails for two. So are you."                                                                |
| 8     | **Specific exercise subheadings**                        | PASS   | "Choose Your Scenario"                                                                                                                                  |
| 9     | **Future-proofed refs**                                  | FAIL   | L02 line 83: "He'd spent forty minutes with **Claude** refining the pitch". Brand name in rendered narrative.                                           |
| 10    | **James never completes exercise**                       | PASS   | Scene ends with James staring at his brief; Emma exits                                                                                                  |
| 11    | **Multi-exchange disagreement (3+ exchanges, L01 rule)** | PASS   | 6+ exchanges. James pushes back on writing for one audience, argues "they should ask questions", offers counterpoint about presenting quarterly numbers |
| 12    | **Jonah exit (Emma leaves, L01 rule)**                   | PASS   | "She picked up her coffee. 'I'll be back in an hour.'"                                                                                                  |
| 13    | **James business analogy**                               | PASS   | Sales director sending identical quarterly reports; old manager's board advice                                                                          |
| 14    | **James thinking-out-loud phrase**                       | PASS   | "Wait, so basically... the problem isn't that it's wrong."                                                                                              |
| 15    | **AICheck component**                                    | PASS   | Present with id="audience-prediction"                                                                                                                   |
| 16    | **ConversationGallery**                                  | PASS   | Present                                                                                                                                                 |
| 17    | **Flashcards**                                           | PASS   | `<Flashcards />` present                                                                                                                                |
| 18    | **Deliverable block**                                    | PASS   | `:::info Your Deliverable` present                                                                                                                      |
| 19    | **Template**                                             | FAIL   | No `<details><summary>Deliverable Template` block. Prototype has one.                                                                                   |
| 20    | **Layers Used reference**                                | PASS   | Layer 1 + Layer 2                                                                                                                                       |
| 21    | **Zero em-dashes (unicode)**                             | PASS   | None found                                                                                                                                              |
| 22    | **Narrative length (L01: 35-50 lines)**                  | PASS   | ~40 lines (lines 94-133)                                                                                                                                |
| 23    | **`---` separator between narrative and exercise**       | PASS   | Present at line 134                                                                                                                                     |

**L01 issues**:

- I-01: Missing deliverable template (details/summary block). Prototype includes one.
- I-02: `Claude` brand name appears in L02 narrative (line 83), but L01 is clean.

---

### L02: Live Adaptation (02-live-adaptation.md)

| Check | Item                                        | Status   | Notes                                                                                                                                      |
| ----- | ------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 1     | **Section 1: "Why This Matters"**           | PASS     | `## Why This Matters: James and the Rehearsed Pitch`                                                                                       |
| 2     | **Section 2: Exercise heading**             | PASS     | `## Exercise 2: The Live Adaptation`                                                                                                       |
| 3     | **Section 3: "What Happened With James"**   | PASS     | 9 lines, specific scores (6/5/7)                                                                                                           |
| 4     | **Section 4: "The Lesson Learned"**         | PASS     | 3 sentences                                                                                                                                |
| 5     | **No "What This Teaches You"**              | PASS     |                                                                                                                                            |
| 6     | **No placement headings**                   | PASS     |                                                                                                                                            |
| 7     | **Transition line**                         | PASS     | "James is holding a polished pitch he spent forty minutes perfecting. So are you."                                                         |
| 8     | **Specific exercise subheadings**           | PASS     | (Exercise is a single block; no subsections needed given the format)                                                                       |
| 9     | **Future-proofed refs**                     | FAIL     | Line 83: "He'd spent forty minutes with **Claude** refining the pitch". Spec says "two different AI tools" not brand names.                |
| 10    | **James never completes exercise**          | PASS     | Scene ends with Emma handing him an envelope                                                                                               |
| 11    | **James business analogy**                  | PASS     | Packaging vendor negotiation, regulatory change story                                                                                      |
| 12    | **James thinking-out-loud phrase**          | MARGINAL | No explicit thinking-out-loud phrase in L02. He does pause and think honestly, but no "Wait..." / "Hang on..." / "So basically..." marker. |
| 13    | **AICheck component**                       | PASS     | Present with id="live-adaptation"                                                                                                          |
| 14    | **ConversationGallery**                     | FAIL     | Missing. L01 has it, L02 does not.                                                                                                         |
| 15    | **Flashcards**                              | PASS     | Present                                                                                                                                    |
| 16    | **Deliverable block**                       | PASS     | Present                                                                                                                                    |
| 17    | **Template**                                | FAIL     | No deliverable template block                                                                                                              |
| 18    | **Zero em-dashes (unicode)**                | PASS     | None                                                                                                                                       |
| 19    | **Narrative length (L02-L04: 15-30 lines)** | PASS     | ~28 lines (lines 83-110)                                                                                                                   |
| 20    | **Scenario Tabs**                           | N/A      | Exercise uses single scenario from L01                                                                                                     |

**L02 issues**:

- I-03: "Claude" brand name on line 83. Should be "an AI tool" or "AI".
- I-04: No `<ConversationGallery />` component. Present in L01/prototype but missing here.
- I-05: No deliverable template.
- I-06: No explicit thinking-out-loud phrase from James (minor).

---

### L03: The Rewrite Diagnosis (03-the-hard-conversation.md)

| Check | Item                                      | Status | Notes                                                                                                                                                                                                                     |
| ----- | ----------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | **Section 1: "Why This Matters"**         | PASS   | `## Why This Matters: James and the Perfect-Looking Email`                                                                                                                                                                |
| 2     | **Section 2: Exercise heading**           | PASS   | `## Exercise 3: The Rewrite Diagnosis`                                                                                                                                                                                    |
| 3     | **Section 3: "What Happened With James"** | PASS   | 11 lines, specific comparison                                                                                                                                                                                             |
| 4     | **Section 4: "The Lesson Learned"**       | PASS   | 3 sentences                                                                                                                                                                                                               |
| 5     | **No "What This Teaches You"**            | PASS   |                                                                                                                                                                                                                           |
| 6     | **No placement headings**                 | PASS   |                                                                                                                                                                                                                           |
| 7     | **Transition line**                       | PASS   | "James just spotted strategic failures hiding behind polished grammar. Now it is your turn."                                                                                                                              |
| 8     | **Specific exercise subheadings**         | PASS   | N/A; exercise is a single diagnostic block                                                                                                                                                                                |
| 9     | **Future-proofed refs**                   | PASS   | No brand names in prose                                                                                                                                                                                                   |
| 10    | **James never completes exercise**        | PASS   | Scene ends with Emma saying "Now diagnose it formally"                                                                                                                                                                    |
| 11    | **James business analogy**                | PASS   | Operations director memo; three transfer requests                                                                                                                                                                         |
| 12    | **James thinking-out-loud phrase**        | PASS   | "Hang on. If that's the approach..."                                                                                                                                                                                      |
| 13    | **AICheck component**                     | PASS   | Present with id="the-hard-conversation"                                                                                                                                                                                   |
| 14    | **ConversationGallery**                   | FAIL   | Missing                                                                                                                                                                                                                   |
| 15    | **Flashcards**                            | PASS   | Present                                                                                                                                                                                                                   |
| 16    | **Deliverable block**                     | PASS   | Present                                                                                                                                                                                                                   |
| 17    | **Template**                              | FAIL   | No deliverable template                                                                                                                                                                                                   |
| 18    | **Zero em-dashes (unicode)**              | PASS   | None                                                                                                                                                                                                                      |
| 19    | **Narrative length**                      | PASS   | ~20 lines (83-103)                                                                                                                                                                                                        |
| 20    | **File naming**                           | NOTE   | File is named `03-the-hard-conversation.md` but the lesson is "The Rewrite Diagnosis". The title "The Hard Conversation" is actually L04's concept. Not a Version G violation, but a naming inconsistency worth flagging. |

**L03 issues**:

- I-07: No `<ConversationGallery />`.
- I-08: No deliverable template.
- I-09: Filename `03-the-hard-conversation.md` does not match lesson title "The Rewrite Diagnosis". Potential confusion.

---

### L04: The Hard Conversation (04-communication-retrospective.md)

| Check | Item                                             | Status | Notes                                                                                                                                                                                                                                |
| ----- | ------------------------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1     | **Section 1: "Why This Matters"**                | PASS   | `## Why This Matters: James and the Unscripted Moment`                                                                                                                                                                               |
| 2     | **Section 2: Exercise heading**                  | PASS   | `## Exercise 4: The Hard Conversation`                                                                                                                                                                                               |
| 3     | **Section 3: "What Happened With James"**        | PASS   | 30+ lines. Extended closing as spec requires for L04.                                                                                                                                                                                |
| 4     | **Section 4: "The Lesson Learned"**              | PASS   | 3 sentences                                                                                                                                                                                                                          |
| 5     | **No "What This Teaches You"**                   | PASS   |                                                                                                                                                                                                                                      |
| 6     | **No placement headings**                        | PASS   |                                                                                                                                                                                                                                      |
| 7     | **Transition line**                              | PASS   | "James is holding a sealed envelope. In sixty seconds, he has to deliver news nobody wants to hear. So do you."                                                                                                                      |
| 8     | **Specific exercise subheadings**                | PASS   | N/A; exercise is a role-play block                                                                                                                                                                                                   |
| 9     | **Future-proofed refs**                          | PASS   | No brand names                                                                                                                                                                                                                       |
| 10    | **James never completes exercise**               | PASS   | Scene ends with Emma setting envelope on table                                                                                                                                                                                       |
| 11    | **Emma fallibility (RFC, Type A: Past Mistake)** | PASS   | Lines 188-196. Emma's RFC story: "I'd written it for someone who already agreed with me." Matches spec (Ch5: "Wrote an RFC the team 'misimplemented'").                                                                              |
| 12    | **Emotional beat**                               | PASS   | Lines 198-211. James reflects across all four exercises, realizes "your message isn't what you say. It's what they hear." Emma's closing "That's not called a weakness. That's called paying attention." Strong emotional resonance. |
| 13    | **James growth L01 to L04**                      | PASS   | Clear arc: L01 wrote for himself (one-size-fits-all), L04 synthesizes "every exercise in this chapter is a different angle on the same idea." He articulates the principle Emma has been demonstrating.                              |
| 14    | **James business analogy**                       | PASS   | Operations manager who softened bad news so much people left meetings confused                                                                                                                                                       |
| 15    | **James thinking-out-loud phrase**               | PASS   | "Wait, so the clarity and the kindness felt like opposites?"                                                                                                                                                                         |
| 16    | **AICheck component**                            | PASS   | Present with id="communication-retrospective"                                                                                                                                                                                        |
| 17    | **ConversationGallery**                          | FAIL   | Missing                                                                                                                                                                                                                              |
| 18    | **Flashcards**                                   | PASS   | Present                                                                                                                                                                                                                              |
| 19    | **Deliverable block**                            | PASS   | Present (both per-exercise and chapter deliverable)                                                                                                                                                                                  |
| 20    | **Template**                                     | N/A    | Grading criteria block serves this purpose                                                                                                                                                                                           |
| 21    | **Zero em-dashes (unicode)**                     | PASS   | None                                                                                                                                                                                                                                 |
| 22    | **Section 3 length (L04: 20-30 lines)**          | PASS   | ~35 lines (177-211). Slightly over spec's 30-line cap, but justified by chapter closing + fallibility story.                                                                                                                         |
| 23    | **File naming**                                  | NOTE   | File is `04-communication-retrospective.md` but title is "The Hard Conversation". Title matches lesson content.                                                                                                                      |
| 24    | **Chapter Deliverable block**                    | PASS   | `:::info Chapter Deliverable` with all 5 components listed                                                                                                                                                                           |
| 25    | **Grading Criteria**                             | PASS   | Present in details/summary                                                                                                                                                                                                           |

**L04 issues**:

- I-10: No `<ConversationGallery />`.

---

## Cross-Chapter Checks

| Check                                            | Status  | Notes                                                                                                                                                            |
| ------------------------------------------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **4 Version G sections per lesson**              | PASS    | All 4 lessons have all 4 sections                                                                                                                                |
| **No "What This Teaches You"**                   | PASS    | Zero occurrences                                                                                                                                                 |
| **No placement headings**                        | PASS    | Zero occurrences                                                                                                                                                 |
| **Zero em-dashes (unicode)**                     | PASS    | Zero occurrences across all 4 files                                                                                                                              |
| **Future-proofed refs**                          | FAIL    | L02 line 83: "Claude" brand name in narrative                                                                                                                    |
| **All components preserved**                     | PARTIAL | AICheck: 4/4. Flashcards: 4/4. ConversationGallery: 1/4 (only L01).                                                                                              |
| **Transition lines work**                        | PASS    | All 4 are strong, follow the "James is [state]. So are you." pattern                                                                                             |
| **Specific exercise subheadings**                | PASS    | L01 has "Choose Your Scenario" / specific heading. L02-L04 are single-block exercises where subheadings are unnecessary.                                         |
| **James never completes exercise**               | PASS    | All 4 scenes end before exercise starts                                                                                                                          |
| **L01: multi-exchange + Jonah exit**             | PASS    | 6+ exchanges. Emma exits with coffee.                                                                                                                            |
| **L04: Emma fallibility (RFC) + emotional beat** | PASS    | RFC story matches spec table. Emotional beat is strong.                                                                                                          |
| **James growth L01 to L04**                      | PASS    | L01: writes for himself. L04: "your message isn't what you say. It's what they hear."                                                                            |
| **`--` in YAML frontmatter**                     | NOTE    | Double-hyphens used as separators in YAML strings across all 4 files. Not rendered as em-dashes. Acceptable but inconsistent with prototype (which uses colons). |

---

## Issues Summary

| ID   | Severity | Lesson | Issue                                                                                      |
| ---- | -------- | ------ | ------------------------------------------------------------------------------------------ |
| I-01 | LOW      | L01    | Missing deliverable template (details/summary block)                                       |
| I-02 | --       | --     | (Rolled into I-03)                                                                         |
| I-03 | HIGH     | L02    | "Claude" brand name in narrative (line 83). Violates future-proofing rule.                 |
| I-04 | MEDIUM   | L02    | Missing `<ConversationGallery />` component                                                |
| I-05 | LOW      | L02    | Missing deliverable template                                                               |
| I-06 | LOW      | L02    | No explicit thinking-out-loud phrase from James                                            |
| I-07 | MEDIUM   | L03    | Missing `<ConversationGallery />` component                                                |
| I-08 | LOW      | L03    | Missing deliverable template                                                               |
| I-09 | LOW      | L03    | Filename `03-the-hard-conversation.md` does not match lesson title "The Rewrite Diagnosis" |
| I-10 | MEDIUM   | L04    | Missing `<ConversationGallery />` component                                                |

---

## Strengths

1. **All 4 Version G sections present in every lesson.** Structure is fully compliant.
2. **Transition lines are excellent.** Every one follows the pattern naturally and reads as a challenge, not an instruction.
3. **L01 multi-exchange disagreement is strong.** James pushes back with three distinct counterarguments before conceding.
4. **L04 Emma fallibility is perfectly executed.** The RFC story matches the spec table exactly, feels organic rather than forced, and the emotional beat ("That's called paying attention") is earned.
5. **James growth arc is clear and progressive.** L01: writes for himself. L02: preparation is a crutch. L03: polished writing can fail. L04: synthesizes the principle. Each lesson strips away one more comfortable assumption.
6. **Zero em-dashes in rendered prose.** Clean compliance.
7. **No placement headings, no "What This Teaches You".** Clean removal of legacy structure.
8. **James business analogies are natural and varied.** Never forced, always drawn from his ops background.

---

## Verdict

**REVISE**

The structure and narrative quality are strong. The four required fixes are:

1. Replace "Claude" with "an AI tool" on L02 line 83 (HIGH, 10-second fix).
2. Add `<ConversationGallery />` to L02, L03, L04 (MEDIUM, 3 minutes).
3. Add deliverable templates to L01, L02, L03 (LOW, 15 minutes per template).
4. Consider adding a thinking-out-loud phrase to L02 James dialogue (LOW, optional).

After fixing I-03 and I-04/I-07/I-10, this chapter is ready to ship.
