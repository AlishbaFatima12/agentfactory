# Part 0 Narrative: Version G Specification

## The Pattern: Work Alongside, Then Compare

Every lesson in Part 0 follows a four-section structure. The narrative and the exercise are one integrated experience, not two documents stitched together.

```
## Why This Matters: [James and the Concept]     15-50 lines
## Exercise N: [Title]                            exercise content
## What Happened With James                       4-20 lines
## The Lesson Learned                             2-5 sentences
```

---

## Section 1: Why This Matters

Socratic dialogue between James and Emma. James encounters the thinking problem this exercise addresses. Emma guides him through Socratic questioning to see why his instinct is wrong. The dialogue DEMONSTRATES the failure mode the exercise prevents.

**Rules:**

- James's resistance must be something the reader is also thinking
- Emma asks questions, not lectures (Socratic, max 3-4 sentences uninterrupted)
- James uses 1+ business analogy from his ops background per lesson
- James uses 1+ thinking-out-loud phrase ("Wait, so basically...", "Hang on...")
- The scene ends with James ABOUT TO START the exercise, not having completed it
- L01 of each chapter: must include multi-exchange disagreement (3+ exchanges) + Jonah exit (Emma leaves)

**What this section does NOT do:**

- James never completes the exercise on-page
- James never reveals his exercise results (that's Section 3)
- No abstract explanation of the exercise methodology

**Length:** Varies by concept complexity. L01 of each chapter: 35-50 lines. Later lessons in a chapter: 15-30 lines.

---

## Section 2: Exercise N: [Title]

The reader's exercise. Transitions from the narrative with a bridge line that creates companionship without contamination.

**Transition pattern:** One sentence connecting James's state to the reader's state.

- "James is facing a blank page right now. So are you."
- "James just opened a fresh document. So should you."
- "James is re-reading his reasoning chain. Read yours."

The transition reads as a challenge, not an instruction. No "Your Turn" classroom language.

**Exercise content includes:**

- Layers Used reference
- Scenario tabs (where applicable)
- Step-by-step instructions (clear, concise)
- :::info Your Deliverable block
- AICheck component
- Template (in details/summary block)

**Prose rules:**

- Sharp and concise. No mini-essays before steps.
- "two different AI tools" not brand names (future-proofing)
- Heading "Build Your Prediction Lock" not "What You Do" (specific, not generic)

---

## Section 3: What Happened With James

Revealed AFTER the reader finishes the exercise. James's specific results for this exercise: what he got right, what he missed, Emma's reframe.

**Why this works:**

- The reader has context from doing the exercise themselves
- James's results are a benchmark: "He got 2/3. I got 1/3" or "I caught what he missed"
- Emma's reframe crystallizes the lesson through dialogue, not assertion

**Rules:**

- James's results must be SPECIFIC to the exercise (not generic observations)
- Each chapter's L04 includes the chapter closing: Emma fallibility Type A + emotional beat
- Length: 4-12 lines for most lessons. 20-30 lines for chapter closings (L04).

---

## Section 4: The Lesson Learned

Brief synthesis. 2-5 sentences maximum. States the principle the exercise taught.

**Rules:**

- Never repeat what "What Happened With James" already showed
- Optional: one sentence pointing forward to the next lesson
- This section compresses, not expands. If it needs more than 5 sentences, Section 3 didn't do its job.

---

## James's Character Arc Across Part 0

### Book-Wide Arc (Chapters 1-11)

James enters Part 0 as a pragmatic career-changer who reflexively reaches for AI tools. He exits as someone who thinks independently, uses AI as a partner, and can defend his reasoning.

| Chapter | James's Starting Mistake                        | What He Discovers                                | Growth Signal                        |
| ------- | ----------------------------------------------- | ------------------------------------------------ | ------------------------------------ |
| 1       | Jumps to AI before thinking                     | Prediction locks reveal blind spots              | Accepts pre-AI commitment            |
| 2       | Trusts AI because it sounds authoritative       | Precision is not accuracy                        | Starts checking, not just reading    |
| 3       | Analyzes problems in isolation                  | Systems have feedback loops                      | Draws connections between domains    |
| 4       | Accepts inherited frameworks                    | First principles reveal hidden assumptions       | Questions "best practices"           |
| 5       | Assumes clarity at sender = clarity at receiver | Communication is measured at the receiver        | Predicts audience before writing     |
| 6       | Treats AI as oracle or threat                   | Collaboration is a judgment layer                | Overrides AI when warranted          |
| 7       | Jumps to "obvious" ethical positions            | Every position has stakeholder costs             | Maps costs before committing         |
| 8       | Waits for requirements before creating          | Creation starts with constraint, not instruction | Starts before he feels ready         |
| 9       | Wants complete info before deciding             | Waiting is a decision, usually the wrong one     | Commits at 60-70% confidence         |
| 10      | Studies linearly and passively                  | Learning how to learn multiplies everything      | Builds a Personal Learning Framework |
| 11      | Sees skills as separate checkboxes              | The skills are one integrated system             | Teaches back to Emma                 |

### Emma's Evolution

Emma starts as Authority (direct guidance) and evolves:

| Chapters | Emma's Phase         | How It Shows                                                                  |
| -------- | -------------------- | ----------------------------------------------------------------------------- |
| 1-3      | Authority            | "Write down your diagnosis first." Direct instruction.                        |
| 4-6      | Authority → Coach    | Starts asking more, telling less. "What do you think?"                        |
| 7-9      | Coach                | James catches some blind spots himself. Emma validates.                       |
| 10-11    | Coach → Collaborator | Emma is surprised by James. "That's a good analogy. I never put it that way." |

### Per-Chapter Emma Fallibility (Type A: Past Mistake)

Each chapter's L04 closing includes a unique Emma story:

| Ch  | Emma's Past Mistake                                                          |
| --- | ---------------------------------------------------------------------------- |
| 1   | CTO presentation: couldn't defend borrowed numbers                           |
| 2   | Built a business case around a fabricated AI statistic                       |
| 3   | Optimized one DB query, broke three downstream services                      |
| 4   | Spent 3 months on microservices when a monolith fit                          |
| 5   | Wrote an RFC the team "misimplemented" (she wrote it for someone who agreed) |
| 6   | Accepted AI architecture suggestion that collapsed under load                |
| 7   | Open-sourced a tool without considering the sales team                       |
| 8   | Froze on blank-page architecture doc; junior shipped rough sketch first      |
| 9   | Delayed deployment for more data; market window closed                       |
| 10  | Learned technologies not patterns for two years                              |
| 11  | "I thought skills were checkboxes" (career-arc reflection)                   |

---

## Conversion From Option B to Version G

Each lesson currently has Option B structure (opening narrative + `---` + untouched exercise + "What This Teaches You" + post-exercise bridge). To convert to Version G:

### What to keep:

- Opening narrative content (rework into "Why This Matters" heading)
- Post-exercise bridge content (rework into "What Happened With James" heading)
- All exercise content (AICheck, templates, tabs, deliverables)
- YAML frontmatter (unchanged)

### What to change:

1. **Heading**: Opening narrative gets `## Why This Matters: [James and the Specific Thing]`
2. **Exercise heading**: `## Exercise N: [Title]` (not "What You Do")
3. **Transition line**: Add "James is [doing X]. So are you." between narrative and exercise
4. **Exercise subheadings**: Make specific ("Build Your Prediction Lock" not "What You Do")
5. **Remove**: "What This Teaches You" section (replaced by Sections 3+4)
6. **Rename**: Post-exercise bridge → "## What Happened With James"
7. **Add**: "## The Lesson Learned" (2-5 sentence synthesis)
8. **Future-proof**: "two different AI tools" not "Claude and ChatGPT"
9. **Tighten preambles**: Cut redundancy, sharp lens not mini-essay
10. **Remove leftover `---` walls**: Only use `---` between narrative ending and exercise starting

### What to verify after conversion:

- Zero leftover placement headings ("### OPENING SCENE", "### POST-EXERCISE BRIDGE")
- Zero em-dashes
- All AICheck, Flashcards, ConversationGallery components preserved
- Exercise instructions remain second-person
- James never completes the exercise before the reader starts
- Each chapter's L04 has Emma fallibility + emotional beat

---

## Reference: L01 Prototype

The gold standard for Version G is:
`apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/01-prediction-lock.md`

All agents should read this file as their quality reference before converting any lesson.
