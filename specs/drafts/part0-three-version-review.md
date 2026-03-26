# Part 0 Lesson Structure: Three-Version Comparative Review

**Reviewer**: Senior educational content reviewer
**Subject**: Lesson 1 (The Prediction Lock), Chapter 1, Part 0
**Date**: 2026-03-26

---

## Versions Under Review

| Version | Source | Structure |
|---------|--------|-----------|
| **A** (Original) | git HEAD (no narrative) | Epigraph, intro, `---`, exercise instructions, scenarios, AICheck, template, "What This Teaches You", Flashcards |
| **B** (Narrative framing) | Structure visible in 02-question-tournament.md | Opening narrative (~24 lines), `---` hard break, exercise instructions, "What This Teaches You", `---`, James reflection (~8 lines), Flashcards |
| **G** (Integrated model) | Current working copy of 01-prediction-lock.md | "Why This Matters" (Socratic dialogue, ~47 lines), `---`, "Your Turn (While James Works)", scenarios, AICheck, template, `---`, "What Happened With James", "The Lesson Learned", Flashcards |

---

## Dimension 1: Reader Flow

### Version A

Reads like a lab manual. Title, epigraph, two sentences of context, then straight into "Exercise 1: The Prediction Lock." The reader hits the scenario tabs within 20 seconds of scrolling. There is no friction because there is no setup. But there is also no reason to care. The intro paragraph ("Most students type the first thing that comes to mind...") tells the reader why question formulation matters but does it through assertion, not demonstration. A career-changer opening this lesson has no emotional stake in what follows. They might complete the exercise out of obedience. They are unlikely to understand why the prediction lock must come before AI until after they have done it, which means the very students who most need the exercise are the ones most likely to skip to the AI step.

**Friction points**: None (no narrative means no narrative friction). But absence of friction is not the same as presence of momentum.

### Version B

Opens with narrative, and the narrative is good: James makes a concrete mistake (ranking a broad question highest), Emma reveals it through Socratic questioning, and by line 24 the reader understands that question quality varies and can be measured. Then `---` and the exercise begins. The problem is the mode-switch. The reader has been watching a conversation. Now they are reading numbered instructions. The texture of the page changes completely. The narrative and the exercise feel like two documents stitched at the seam.

Post-exercise, the problem doubles. "What This Teaches You" gives an abstract summary. Then another `---` and James appears again for a reflection. The reader processes the lesson's meaning twice, through two different modes (abstract telling, then concrete showing), with no structural signal for why both exist. This is redundant, not reinforcing. One or the other would be stronger. Both together dilute both.

**Friction points**: The `---` between narrative and exercise is a perceptible gear-shift. The double post-exercise section feels like the lesson can't decide how to end.

### Version G

Opens with the same narrative as B would for this lesson, but longer and more developed (47 lines vs. what would be ~24 in B's pattern). The dialogue covers James's full resistance arc: he proposes "AI first, think later," Emma lets him try it, he discovers he can't tell whether the AI answer is right because he never formed his own position. This is not setup for the exercise; it IS the pedagogical argument for the exercise, delivered through demonstration rather than assertion.

The transition to the exercise is the single best line across all three versions: "James is staring at a blank screen right now. So are you." No `---` gear-shift. No mode-switch. The reader and the character are in the same moment, facing the same blank page. The exercise flows from the narrative rather than replacing it.

Post-exercise, "What Happened With James" reveals James's results (he nailed targeting but missed the demographic shift), which gives the reader a concrete comparison point. Then "The Lesson Learned" synthesizes in 4 sentences. This is show-then-tell, which is the correct pedagogical order. The reader has their own experience, then James's experience as a mirror, then a brief synthesis. Three layers, each earning its place.

**Friction points**: The opening narrative is long (47 lines of dialogue before the exercise). Impatient readers might skim. But the dialogue is tight enough that skimming still delivers the core message.

### Verdict (Flow)

**G wins clearly.** A has no friction but no momentum. B has friction at the seams. G has the longest runway but the smoothest landing.

---

## Dimension 2: Pedagogical Integrity

The prediction lock has one inviolable rule: the reader must commit a diagnosis BEFORE seeing any AI output. Any narrative structure that shows AI output before the reader has done the exercise violates the entire mechanism.

### Version A

Safe. No narrative means no risk of contamination. The exercise instructions clearly state "Before touching any AI tool" and "Only then open claude.ai or chatgpt.com." The protection is procedural (instructions tell you the order) rather than motivational (you understand why the order matters).

### Version B

Also safe for this lesson, because B's opening narrative would discuss the general concept without revealing scenario-specific AI output. However, B's pattern has a structural weakness: the narrative happens before the exercise, but it does not actively argue for why the prediction lock matters. It shows James making a question-quality mistake, which motivates the exercise. It does not show James experiencing the specific danger of seeing AI output before forming a position.

### Version G

The strongest on this dimension, and it is not close. The narrative demonstrates the exact failure mode the prediction lock prevents. James reads Claude's analysis first, finds it "reasonable," and Emma names what happened: "You just adopted a stranger's diagnosis without examining the patient. That's not evaluation. That's inheritance." The reader watches James make the mistake in real time. By the time they reach the exercise, they understand viscerally why the prediction lock must come first. They are not following an instruction; they are avoiding a demonstrated trap.

The post-exercise "What Happened With James" section also serves pedagogical integrity. It reveals that James's prediction was partially right and partially wrong. This normalizes imperfect predictions and frames the gap as the learning, not the failure. A reader who got 2 out of 3 factors right sees that James did too, and that the third factor (the one they missed) is where the real growth happened.

**Risk check**: Does the narrative contaminate the exercise? The dialogue mentions "targeting mismatch, diminishing ad returns, seasonal correction" as Claude's output. These are specific to the business scenario. If the reader chooses Scenario A (business), they have now seen three potential causes before building their own diagnosis. This is a genuine contamination risk for Scenario A readers.

However, the contamination is small (three broad categories, not a full analysis) and the lesson explicitly addresses it: the point is that James could not tell whether these were right because he had no independent position. A reader who remembers the three causes but forms their own diagnosis around them has still done the core exercise. The narrative functions as a controlled exposure to the failure mode, not as a spoiler.

If this risk is deemed unacceptable, the fix is simple: change the scenario in the narrative to one that is NOT one of the three tab options (e.g., use a healthcare scenario in the dialogue, so the business/technical/social scenarios remain uncontaminated).

### Verdict (Pedagogical Integrity)

**G wins, with a minor contamination risk that has a straightforward fix.** A is safe by omission. B is safe but misses the opportunity to demonstrate the specific danger. G demonstrates the danger so effectively that the reader protects their own thinking out of understanding, not compliance.

---

## Dimension 3: Narrative Load-Bearing

### Version A

No narrative. No analysis needed. The epigraph ("AI quality is downstream of question quality") is the closest thing to a narrative element, and it does load-bearing work: it frames the entire chapter's thesis in one sentence.

### Version B (structure from 02-question-tournament.md)

The opening narrative has James list 15 questions and rank the broad one highest. Emma shows him that question 8 (the "boring" one about whether the sales drop was uniform) is actually the most diagnostic because it eliminates hypotheses. This is load-bearing: the reader now has a concrete example of the difference between a fishing-net question and a scalpel question. The narrative teaches a concept (diagnostic vs. decorative questions) that the exercise will ask the reader to apply.

The closing James reflection in B is mixed. "Quantity felt like thoroughness. Fifteen questions felt like more work than five. But her five cut deeper than my fifteen." This is a good line. But it restates what the exercise already demonstrated. If the reader completed the exercise, they already know this. If they did not complete the exercise, the reflection is just a spoiler for the lesson they skipped.

**B's narrative load-bearing ratio**: Opening: high. Closing: low (decorative/redundant).

### Version G

Every line of narrative carries weight. Breaking it down:

1. **James reaches for Claude** (2 lines) -- establishes the default behavior the lesson is designed to break.
2. **Emma closes the laptop** (1 line) -- physical intervention, shows this matters enough to stop someone.
3. **James's counterargument** ("AI has more patterns, more data") -- represents the real objection most readers have. The narrative is addressing the reader's resistance through James.
4. **Emma's question: "Against what?"** (1 line) -- the thesis of the entire lesson in two words. If you have not formed a position, you cannot evaluate anything.
5. **James proposes "read AI first, think later"** -- this is the second-most-common objection (the first being "just use AI"), and the narrative handles it directly by letting James try it.
6. **The inheritance moment** ("You just adopted a stranger's diagnosis without examining the patient") -- names the failure mode with enough precision that the reader can recognize it in their own behavior.
7. **James cannot distinguish "reasonable because correct" from "reasonable because well-written"** -- this is the deepest pedagogical point in the lesson, and it emerges from the narrative rather than from an abstract explanation.
8. **"The prediction lock only has value if it exists before you see the AI's response"** -- the exercise's central rule, stated as dialogue rather than instruction.
9. **"Writing a diagnosis without data felt like guessing. But that, he was starting to realize, might be the point."** -- normalizes the discomfort the reader is about to feel.

The post-exercise "What Happened With James" section is equally load-bearing. James got 2/3 factors right. The one he missed was in the brief the whole time. Emma's line: "You didn't need AI to tell you targeting was off. You needed AI to show you where your own radar has blind spots." This reframes the exercise's purpose from "test yourself" to "map your blind spots." That reframing is the actual lesson.

**G's narrative load-bearing ratio**: Near 100%. I cannot identify a decorative line.

### Verdict (Narrative Load-Bearing)

**G wins by a wide margin.** B's opening is load-bearing but its closing is not. G is load-bearing throughout. Every line of dialogue is doing pedagogical work: addressing objections, demonstrating failure modes, normalizing discomfort, or reframing the exercise's purpose.

---

## Dimension 4: The Transition Problem

### Version A

No transition needed. The `---` between intro and exercise is a standard section break. The reader moves from "here's why this matters" to "here's what you do." Clean but unmotivated.

### Version B

Hard `---` between narrative and exercise. The reader is watching James and Emma talk. Then a horizontal rule. Then "Use the same scenario you chose in Exercise 1." The narrative world ends and the instruction world begins. This is the textbook's version of breaking the fourth wall in reverse: the characters disappear and the instructor appears. It works, but it is perceptible. The reader shifts from engaged reading to task-following.

### Version G

"James is staring at a blank screen right now. So are you."

This is the single best transition line I have seen in educational content. It achieves three things simultaneously:

1. **Continuity**: The narrative does not stop. James is still in the scene, still working.
2. **Solidarity**: The reader is not alone in facing a blank page. Someone else is doing this at the same time.
3. **Implicit challenge**: James is struggling. You are too. That is normal. Now do it anyway.

The transition is not a break; it is a bridge. The reader crosses from observer to participant without a gear-shift. The exercise instructions that follow ("Choose your scenario and build your prediction lock") feel like a continuation of the scene, not a mode-switch to a different document.

### Verdict (Transition)

**G wins unambiguously.** The "James is staring at a blank screen" line is doing more work in one sentence than B's `---` does in a structural element. A avoids the problem by having no transition to make.

---

## Dimension 5: Post-Exercise Experience

### Version A

"What This Teaches You" (5 sentences, abstract). Tells the reader what they learned: question quality determines answer quality, predicting first reveals blind spots, AI grading shows what you cannot see yourself. This is pure telling. It works as a summary for a student who completed the exercise and wants a clean takeaway. It does not add new information or reframe the experience. It is a label on a box the reader already opened.

### Version B

"What This Teaches You" (same abstract summary) PLUS a James reflection after another `---`. The reflection shows James discovering that his partner's finance-background questions were better than his operations-background questions. This is interesting content, but it is in the wrong lesson (this reflection lives in 02-question-tournament.md, not the prediction lock). For the structural pattern applied to Lesson 1, B would have a James reflection about the prediction lock. The problem remains: two post-exercise sections doing overlapping work.

The abstract section tells. The reflection shows. Showing-then-telling is the wrong order (you want to show first, tell second). B does telling-then-showing. The reader processes the abstract lesson, then gets a concrete illustration of what they just read abstractly. This is anticlimactic. The concrete example should come first to anchor the abstraction.

### Version G

"What Happened With James" (showing, 12 lines): James's prediction lock is on the left, Claude's analysis on the right. He got targeting and seasonal factors. He missed the demographic shift. Emma reframes: "You needed AI to show you where your own radar has blind spots." James realizes the demographic data was in the brief the whole time.

"The Lesson Learned" (synthesizing, 4 lines): "The deliverable isn't the prediction. It's the self-knowledge." Brief, punchy, and it reframes the exercise one final time.

This is show-then-synthesize, which is the strongest possible order:
1. Reader has their own experience (the exercise)
2. Reader sees James's experience (mirror and comparison point)
3. Reader gets a brief synthesis (anchor for retention)

The James section does something Version A and B cannot: it gives the reader a concrete benchmark. "James got 2 out of 3." Now the reader can compare. "I got 1 out of 3" or "I got all 3" becomes meaningful against James's result. Without this benchmark, the reader has only their own experience and the AI's evaluation, which is abstract and personalized. James's result is a shared reference point that all readers can discuss.

### Verdict (Post-Exercise)

**G wins.** Show-then-synthesize is the correct order. A tells without showing. B shows after telling (wrong order). G shows, then synthesizes. Additionally, G's James benchmark gives the reader something to compare against, which neither A nor B provides.

---

## Dimension 6: Scalability

Can this structure work across all 43 lessons in 11 chapters?

### Version A

Scales trivially. Every lesson is: intro, exercise, AICheck, summary, flashcards. No narrative to write, no character consistency to maintain, no risk of repetitive dialogue patterns. But trivial scalability is not a feature when the result is 43 lessons that all feel like lab worksheets. By Chapter 5, readers will be mechanically completing exercises without engagement.

### Version B

Scales with difficulty. Every lesson needs an opening narrative and a closing reflection. The opening narrative must introduce the lesson's concept through character interaction without contaminating the exercise. The closing reflection must add something the abstract summary does not. Over 43 lessons, this structure will produce:

- **Repetitive dialogue beats**: James resists, Emma questions, James realizes. This pattern will wear thin by Chapter 3.
- **Forced reflections**: Not every lesson needs a character reflection. Some exercises speak for themselves. Mandatory closing reflections will produce decorative text.
- **Rising difficulty maintaining the mode-switch**: As exercises become more complex (Chapter 7: ethical dilemmas, Chapter 11: portfolio synthesis), the `---` between narrative and exercise will feel increasingly artificial.

### Version G

Scales well, with two conditions.

**What scales naturally:**
- "Why This Matters" can vary in length per lesson. A complex ethical dilemma (Chapter 7) might need a longer dialogue. A straightforward exercise (Chapter 4) might need only 15 lines.
- "Your Turn (While James Works)" creates a structural contract the reader can rely on. Every lesson, James works alongside them. The transition line can vary ("James just opened a fresh document. You should too." / "James is re-reading his reasoning chain. Read yours.") but the pattern is consistent.
- "What Happened With James" naturally varies because James's results will be different for each exercise. This section can be 4 lines or 20 lines depending on how much the comparison teaches.
- "The Lesson Learned" is always short (2-5 sentences). Easy to maintain.

**What could break:**

1. **James's character arc must progress.** If James makes the same mistakes in Chapter 8 that he made in Chapter 1, the narrative becomes a sitcom. His thinking must visibly improve across chapters. By Chapter 7 (ethical dilemmas), James should be catching some of his own blind spots before Emma points them out. By Chapter 11 (portfolio), he should be teaching moments back to Emma or to another character. This requires arc-planning across all 43 lessons.

2. **Not every lesson has a natural "Why This Matters" dialogue.** Some exercises are technique-focused (e.g., "build a decision matrix"). Forcing a Socratic dialogue about why decision matrices matter could feel contrived. For purely mechanical exercises, the "Why This Matters" section should be shorter (10-15 lines) or replaced with a brief motivating anecdote rather than a full dialogue.

3. **"What Happened With James" requires designing James's specific results for every exercise.** This is content debt. Every lesson now needs not just the exercise, but James's specific attempt at the exercise, including his specific successes and specific failures. This is substantial additional writing work, but it also produces substantial additional pedagogical value (the benchmark effect described in Dimension 5).

### Verdict (Scalability)

**G scales, with planned investment.** A scales trivially but produces diminishing engagement. B scales with structural problems that compound. G scales if James's arc is planned and if "Why This Matters" length varies by lesson. The investment in designing James's per-lesson results is real but worthwhile because it produces the benchmark effect.

---

## Overall Winner: VERSION G

Version G is the clear winner on every dimension except scalability effort (where it requires more work than A but produces commensurately better results).

| Dimension | A | B | G |
|-----------|---|---|---|
| Reader Flow | No friction, no momentum | Friction at seams | Longest but smoothest |
| Pedagogical Integrity | Safe by omission | Safe but passive | Actively demonstrates the danger |
| Narrative Load-Bearing | No narrative | ~60% load-bearing | ~100% load-bearing |
| Transition | No transition needed | Hard gear-shift | Seamless bridge |
| Post-Exercise | Tells | Tells then shows (wrong order) | Shows then synthesizes (correct order) |
| Scalability | Trivial (diminishing returns) | Difficult (structural fatigue) | Planned investment (compounding returns) |

---

## Suggested Modifications to Version G

Version G as written is strong. Three modifications would make it stronger:

### 1. Fix the Scenario Contamination

The narrative dialogue mentions "targeting mismatch, diminishing ad returns, seasonal correction" as Claude's output. Readers who choose Scenario A (business) have now seen three candidate causes before forming their own diagnosis. Two options:

- **Option A (recommended)**: Change the narrative scenario to one that is not offered in the tabs. Use a healthcare or logistics example in the James/Emma dialogue. This completely eliminates contamination for all three scenario options.
- **Option B**: Keep the business scenario in the dialogue but remove the specific causes. Have James read Claude's response without the reader seeing the details: "James read the response. It was clean, specific, and plausible." This preserves the narrative beat but hides the content.

### 2. Add a Sentence to "The Lesson Learned" Pointing Forward

The current synthesis ends with: "Over time, you internalize what makes a question diagnostic rather than decorative." This is the right close for this lesson, but it could be even stronger with one forward-pointing sentence connecting to the next exercise (The Question Tournament). Something like: "The next exercise will test whether your questions actually produce useful answers, or just convincing-sounding ones." This creates pull-through.

### 3. Keep "The Lesson Learned" Concise: 4 Sentences Maximum

The current version is 4 sentences and the right length. Across 43 lessons, there will be temptation to let this section grow. It should never exceed 4-5 sentences. The synthesis is a compression, not an expansion. If it takes more than 5 sentences to state the lesson, the "What Happened With James" section did not do its job.

---

## Final Verdict

**Apply Version G's structure to all of Part 0.** The four-section pattern (Why This Matters / Your Turn / What Happened With James / The Lesson Learned) is the strongest structure across every evaluation dimension. It requires more writing investment per lesson (designing James's specific results, planning his character arc), but every hour of that investment produces measurably better pedagogy.

The key structural insight G discovered: the reader and the character should be doing the exercise at the same time, not watching the character do it first. "James is staring at a blank screen. So are you." is not just a transition line. It is a pedagogical architecture. The reader works alongside a character, then compares results after. This is peer learning without a peer, which is exactly what a self-paced book needs.

### Template for All 43 Lessons

```
## Why This Matters: [James and the Specific Concept]
Socratic dialogue demonstrating WHY this exercise exists.
Length: 15-50 lines depending on concept complexity.
Must address the reader's likely objection to doing the exercise.

---

## Your Turn (While James Works)
"James is [doing the thing]. So are you."
Exercise instructions. Scenarios. AICheck. Template.
Pure exercise content, but connected to the narrative above.

---

## What Happened With James
James's specific results for this exercise.
What he got right. What he missed. What Emma's reframe was.
Gives the reader a concrete benchmark for comparison.
Length: 4-20 lines depending on how much the comparison teaches.

## The Lesson Learned
2-5 sentences. Synthesis only. Never repeat what "What Happened With James" already showed.
Optional: one sentence pointing forward to the next lesson.
```

### Pre-Scaling Requirements

Before applying this to all 43 lessons:

1. **Plan James's character arc** across all 11 chapters. Map where he starts (Chapter 1: reflexive AI dependence) and where he ends (Chapter 11: independent, reflective, able to teach others). Identify the 3-4 major inflection points in his growth.
2. **Design James's per-lesson results** for each exercise. What does he get right? What does he miss? What does Emma's reframe teach? This is the hardest part of the scaling work and the most valuable.
3. **Decide whether Emma evolves too.** Currently she is a static Socratic mentor. That works for Chapter 1. By Chapter 11, if she has not changed at all, the relationship will feel artificial. Consider having her be surprised or impressed by James at least 2-3 times.
4. **Fix the Scenario A contamination** in Lesson 1 before scaling. Choose Option A (change narrative scenario) or Option B (hide specific causes).
