# Chapter 4 (Reasoning From First Principles): Version G Review

**Reviewer**: Claude Opus 4.6 (autonomous)
**Date**: 2026-03-26
**Reference spec**: `specs/drafts/part0-version-g-spec.md`
**Reference prototype**: `01-asking-better-questions/01-prediction-lock.md`

---

## Per-Lesson Results

### L01: Defend the Opposite (No AI) (`01-blank-page-derivation.md`)

| Check                                            | Result   | Notes                                                                                                                                                                                                                                                         |
| ------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4 Version G sections present                     | **PASS** | Why This Matters / Exercise 1 / What Happened With James / The Lesson Learned                                                                                                                                                                                 |
| No "What This Teaches You"                       | **PASS** | Clean                                                                                                                                                                                                                                                         |
| No leftover placement headings                   | **PASS** | Clean                                                                                                                                                                                                                                                         |
| Transition line reads as challenge               | **PASS** | "James is staring at a blank page, building an argument from nothing but constraints. So are you."                                                                                                                                                            |
| Exercise subheadings specific                    | **PASS** | "Build Your Contrarian Argument (No AI)", "Check Your Thinking"                                                                                                                                                                                               |
| "two different AI tools" not brand names         | **PASS** | Exercise body does not mention brand names                                                                                                                                                                                                                    |
| James never completes exercise before reader     | **PASS** | Scene ends with "He started typing." Reader exercise follows.                                                                                                                                                                                                 |
| Zero em-dashes                                   | **PASS** | Confirmed via grep                                                                                                                                                                                                                                            |
| Components preserved (AICheck, Flashcards, Tabs) | **PASS** | AICheck, ConversationGallery, Tabs, Flashcards all present                                                                                                                                                                                                    |
| L01: multi-exchange disagreement (3+)            | **PASS** | 5 distinct exchanges of pushback: (1) "Why would I argue against a best practice?" (2) "Because it works" (3) "I don't think so" (4) "Okay, but that's just one edge case" (5) procurement analogy showing shift. Genuine resistance, not token disagreement. |
| L01: Jonah exit (Emma leaves)                    | **PASS** | "She picked up her coffee and left." followed by James alone staring at blank page.                                                                                                                                                                           |
| Emma shifting Authority to Coach                 | **PASS** | Mixed signals appropriate for Ch4. Emma still gives direct instruction ("Write a 500-word argument") but increasingly asks questions first ("What makes it the best practice?"). Correct Authority-to-Coach transition zone.                                  |
| James business analogy from ops background       | **PASS** | Procurement process that took 14 weeks.                                                                                                                                                                                                                       |
| James thinking-out-loud phrase                   | **FAIL** | No explicit thinking-out-loud phrase ("Wait, so basically...", "Hang on..."). Spec requires 1+ per lesson. James's internal realization is narrated but he never uses one of these verbal tics.                                                               |

**L01 issues:**

1. Missing thinking-out-loud phrase (spec: "James uses 1+ thinking-out-loud phrase per lesson")

---

### L02: First Principles vs. AI (`02-first-principles-vs-ai.md`)

| Check                                        | Result   | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4 Version G sections present                 | **PASS** | Why This Matters / Exercise 2 / What Happened With James / The Lesson Learned                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| No "What This Teaches You"                   | **PASS** | Clean                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| No leftover placement headings               | **PASS** | Clean                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Transition line reads as challenge           | **PASS** | "James is sitting with a blank sheet of paper and a problem that has no clean answer. So are you."                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Exercise subheadings specific                | **PASS** | "Derive Your Solution (No AI, 45 Minutes)", "Check Your Thinking"                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| "two different AI tools" not brand names     | **PASS** | Exercise body says "prompt AI" generically                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| James never completes exercise before reader | **PASS** | Scene ends with Emma giving instructions, then `---` to exercise.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Zero em-dashes                               | **PASS** | Confirmed                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Components preserved                         | **PASS** | AICheck, Tabs, Flashcards, template present                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| James business analogy                       | **PASS** | Vendor evaluation process with scoring matrix                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| James thinking-out-loud phrase               | **PASS** | "Wait, so basically... we started from the same problem and ended up in different places" (line 217)                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Emma shifting Authority to Coach             | **PASS** | Emma shares a personal story from her first engineering year (vulnerability, less directive). Still tells James what to do but opens up more.                                                                                                                                                                                                                                                                                                                                                                                                |
| Brand names in exercise body                 | **PASS** | Generic "AI" in exercise instructions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Brand names in narrative sections            | **FAIL** | "What Happened With James" uses "Claude" by name 3 times (lines 214, 222). Spec says "two different AI tools" not brand names for future-proofing. However, this rule appears to target exercise instructions specifically ("two different AI tools" not brand names). The narrative sections in the L01 prototype also use "Claude" by name in both the opening scene (line 124-126) and "What Happened With James" (line 277). **Ambiguous**: prototype uses brand names in narrative; spec targets exercise prose. Flagging for decision. |

**L02 issues:**

1. "Claude" used by name in "What Happened With James" (lines 214, 222). Matches L01 prototype pattern but may conflict with future-proofing intent. See note below.

---

### L03: Assumption Autopsy (`03-assumption-autopsy.md`)

| Check                                        | Result   | Notes                                                                                                                                                                   |
| -------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4 Version G sections present                 | **PASS** | Why This Matters / Exercise 3 / What Happened With James / The Lesson Learned                                                                                           |
| No "What This Teaches You"                   | **PASS** | Clean                                                                                                                                                                   |
| No leftover placement headings               | **PASS** | Clean                                                                                                                                                                   |
| Transition line reads as challenge           | **PASS** | "James is about to discover that his 'clean' solution has twenty-three assumptions he never noticed. Your solution has hidden assumptions too."                         |
| Exercise subheadings specific                | **PASS** | "Perform the Autopsy", "Check Your Thinking"                                                                                                                            |
| "two different AI tools" not brand names     | **PASS** | Exercise body says "two different AI tools" (line 127) and AICheck prompt says "two different AI tools" (line 138). Correct.                                            |
| James never completes exercise before reader | **PASS** | Scene ends with Emma's analogy. Exercise follows.                                                                                                                       |
| Zero em-dashes                               | **PASS** | Confirmed                                                                                                                                                               |
| Components preserved                         | **PASS** | AICheck, Flashcards present. No Tabs (not applicable to this exercise).                                                                                                 |
| James business analogy                       | **PASS** | Procurement vendor evaluation: "Payment net-30, standard." Different definitions.                                                                                       |
| James thinking-out-loud phrase               | **PASS** | "Hang on. If that's true, then..." (line 192, What Happened With James)                                                                                                 |
| Brand names in narrative                     | **FAIL** | "What Happened With James" uses "Claude" and "ChatGPT" by name (lines 180, 186). Same ambiguity as L02. L01 prototype uses Claude by name in narrative too.             |
| Missing ConversationGallery                  | **FAIL** | L01 and L02 both have `<ConversationGallery />`. L03 does not. Component may have been dropped during conversion.                                                       |
| Missing template                             | **FAIL** | L01 prototype and L02 both have `<details><summary>Deliverable Template</summary>` blocks. L03 has no template. Students would benefit from an Assumption Map template. |

**L03 issues:**

1. Brand names "Claude" and "ChatGPT" in narrative "What Happened With James" section (lines 180, 186)
2. Missing `<ConversationGallery />` component (present in L01, L02; absent here)
3. Missing deliverable template (present in L01, L02; absent here)

---

### L04: Rebuild Under New Constraints (`04-rebuild-under-new-constraints.md`)

| Check                                        | Result   | Notes                                                                                                                                                                                                                                                                                     |
| -------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4 Version G sections present                 | **PASS** | Why This Matters / Exercise 4 / What Happened With James / The Lesson Learned                                                                                                                                                                                                             |
| No "What This Teaches You"                   | **PASS** | Clean                                                                                                                                                                                                                                                                                     |
| No leftover placement headings               | **PASS** | Clean                                                                                                                                                                                                                                                                                     |
| Transition line reads as challenge           | **PASS** | "James just discovered that two of his principles survived while one collapsed. Now he has to rebuild. So do you."                                                                                                                                                                        |
| Exercise subheadings specific                | **PASS** | "Apply the Constraint Change", "Rebuild from Your Principles", "Check Your Thinking"                                                                                                                                                                                                      |
| "two different AI tools" not brand names     | **PASS** | Exercise body says "ask AI" generically                                                                                                                                                                                                                                                   |
| James never completes exercise before reader | **PASS** | Scene ends with `---`, reader exercise follows.                                                                                                                                                                                                                                           |
| Zero em-dashes                               | **PASS** | Confirmed                                                                                                                                                                                                                                                                                 |
| Components preserved                         | **PASS** | AICheck, Tabs, Flashcards, grading criteria present. Chapter Deliverable info block present.                                                                                                                                                                                              |
| L04: Emma fallibility (microservices)        | **PASS** | Lines 206-219. Emma spent 3 months building microservices for 4 users. Matches spec table exactly ("Spent 3 months on microservices when a monolith fit").                                                                                                                                |
| L04: emotional beat                          | **PASS** | "James watched her. She didn't usually talk about getting things wrong." (line 209). Genuine vulnerability. Emma shares failure, James notices the shift. Silence beat at line 217.                                                                                                       |
| Emma shifting Authority to Coach             | **PASS** | Emma shares personal failure openly, asks James to reflect, doesn't lecture. Coach behavior.                                                                                                                                                                                              |
| James business analogy                       | **PASS** | Sales territory restructure (line 104). Rep who built on industry verticals instead of geography.                                                                                                                                                                                         |
| James thinking-out-loud phrase               | **PASS** | "Wait, so basically... my principles might still be valid even though the constraint changed." (line 96)                                                                                                                                                                                  |
| James growth visible L01-L04                 | **PASS** | L01: resistant, needs to be convinced. L04: proactively traces principles, explains reasoning unprompted, catches pattern before Emma states it. Clear arc from skeptic to self-directed thinker. Final line "I'm going to check my assumptions before I start" shows internalized habit. |
| Brand names in narrative                     | **FAIL** | "What Happened With James" uses "Claude" 4 times (lines 193, 195, 197, 201). Same pattern as L02/L03.                                                                                                                                                                                     |
| Missing ConversationGallery                  | **FAIL** | Not present. L01/L02 have it.                                                                                                                                                                                                                                                             |
| Missing template                             | **PASS** | Chapter-closing lesson. Grading criteria block serves as the structural reference. Acceptable.                                                                                                                                                                                            |

**L04 issues:**

1. Brand names "Claude" in narrative "What Happened With James" section (4 occurrences)
2. Missing `<ConversationGallery />` component

---

## Cross-Chapter Issues

### Issue 1: Brand Names in Narrative Sections (MEDIUM)

**Scope**: L02 (3x Claude), L03 (Claude + ChatGPT), L04 (4x Claude)

The spec says: `"two different AI tools" not brand names (future-proofing)`. However, the L01 _prototype itself_ uses "Claude" in both the opening scene and "What Happened With James." This creates ambiguity about whether the rule applies only to exercise instructions or to all prose.

In the narrative sections, brand names serve a purpose: they make James's story concrete ("Claude found nine he'd missed. ChatGPT found four more."). Replacing with "the first tool found nine... the second tool found four" would read awkwardly.

**Recommendation**: Clarify spec intent. If future-proofing is critical, replace in exercise instructions only (already done) and leave narrative references as-is (matching L01 prototype). If full future-proofing is required, L03 is the hardest to fix because the assumption count breakdown depends on naming two distinct tools.

### Issue 2: Missing ConversationGallery (LOW)

**Scope**: L03, L04

L01 and L02 include `<ConversationGallery />`. L03 and L04 do not. This is likely a conversion oversight. The component should be present in all lessons for consistency.

### Issue 3: Missing Deliverable Template in L03 (LOW)

L01 has a Prediction Lock template. L02 has a First Principles Worksheet template. L03 (Assumption Autopsy) has no template despite being a complex deliverable with a four-category map. Students would benefit from a structured template showing the (a)/(b)/(c)/(d) categories.

### Issue 4: Missing Thinking-Out-Loud Phrase in L01 (LOW)

Spec requires 1+ per lesson. L02, L03, L04 all have them. L01 has James thinking internally but never verbalizing a tic phrase. Easy fix: add "Wait, so..." or "Hang on..." to one of his lines in the scene.

---

## Quality Assessment

| Dimension              | Rating | Notes                                                                                                                                                                                 |
| ---------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Structure compliance   | 9/10   | All 4 sections present in all 4 lessons. Clean headings.                                                                                                                              |
| Narrative quality      | 10/10  | James's resistance is genuine and the reader shares it. Emma's Socratic questioning is tight. Business analogies land. L04 closing with microservices story is excellent.             |
| Exercise quality       | 9/10   | Clear deliverables, good AICheck prompts, Tabs for scenario variety. Missing template in L03.                                                                                         |
| Character arc          | 10/10  | L01 skeptic to L04 self-directed. Growth is visible and earned. "I'm going to check my assumptions before I start" is a perfect closing beat.                                         |
| Emma evolution         | 9/10   | Authority-to-Coach transition visible. L01: direct instruction. L04: shares vulnerability, asks more than tells. The microservices fallibility story is the strongest in the chapter. |
| Component preservation | 8/10   | AICheck and Flashcards in all 4. ConversationGallery missing from L03/L04.                                                                                                            |
| Future-proofing        | 7/10   | Exercise instructions are clean (generic "AI"). Narrative sections use brand names, matching L01 prototype but potentially conflicting with spec intent.                              |
| Em-dash compliance     | 10/10  | Zero em-dashes across all 4 lessons.                                                                                                                                                  |

---

## Verdict: SHIP (with 4 minor fixes)

The chapter is high quality. The narrative arc is the strongest of any chapter reviewed so far. James's growth from "Why would I argue against a best practice?" to "I'm going to check my assumptions before I start" is earned across all four exercises. Emma's microservices fallibility story in L04 lands perfectly.

### Required fixes before ship:

1. **L01**: Add one thinking-out-loud phrase to James's dialogue (e.g., change line 110 to include "Wait, so..." before his realization about regulated industries)
2. **L03**: Add `<ConversationGallery />` after the AICheck closing tag
3. **L04**: Add `<ConversationGallery />` after the AICheck closing tag
4. **L03**: Add a deliverable template (`<details><summary>`) with the (a)/(b)/(c)/(d) category structure

### Optional (decision needed):

5. Brand names in narrative sections (L02/L03/L04): Matches L01 prototype pattern. Clarify whether spec intends to cover narrative prose or only exercise instructions. If narrative cleanup is wanted, L03 needs the most work (Claude + ChatGPT mentioned in specific counts).
