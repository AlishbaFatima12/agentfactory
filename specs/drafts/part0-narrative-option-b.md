S# Part 0 Narrative Integration: Option B (30-35% Density)

## Decision

Add James & Emma narrative to Part 0 chapters at 30-35% density ("chapter-framing" mode). Narrative frames each exercise with a Socratic scene that surfaces the thinking gap, then steps back so the reader does the exercise independently.

**Key principle: James models the RESISTANCE to good thinking, not the exercise itself.** The reader never watches James do a prediction lock. The reader watches James resist the idea, get convinced, and then the exercise instructions say "Now it's your turn."

---

## What Gets Narrative (and What Doesn't)

### Narrative zones (30-35% of content)

| Zone                     | Lines | Purpose                                                                  |
| ------------------------ | ----- | ------------------------------------------------------------------------ |
| **Lesson opening scene** | 25-40 | Socratic dialogue surfacing the thinking gap this exercise addresses     |
| **Jonah exit**           | 5-10  | Emma sets the challenge and leaves. Exercise instructions follow.        |
| **Post-exercise bridge** | 10-20 | James reflects on what the exercise revealed. Transition to next lesson. |
| **Chapter closing**      | 20-30 | Emotional payoff. Emma fallibility. Growth visible.                      |

### Exercise zones (65-70% of content) — UNTOUCHED

- Exercise step-by-step instructions (remain second-person direct address)
- `<Tabs>` scenario selectors
- `:::info Your Deliverable` blocks
- `<AICheck>` components and prompts
- `<details>` templates
- "What This Teaches You" sections (may get a 1-2 line narrative coda)
- `<Flashcards />` component
- YAML frontmatter (unchanged)

### Integration boundary

Narrative and exercise content are separated by `---` horizontal rules. The narrative section ends, a rule appears, and the exercise begins in direct address. This ensures:

1. A reader who skips narrative loses nothing instructional
2. A reader who reads narrative gets motivational context
3. The exercise voice stays clean (no character names in instructions)

---

## James's Part 0 Calibration

James is NOT making code mistakes. He is making THINKING mistakes:

| Thinking Mistake                           | How It Shows                                                | What Exercise Corrects                                      |
| ------------------------------------------ | ----------------------------------------------------------- | ----------------------------------------------------------- |
| Jumps to AI before thinking                | "I'll just ask Claude what happened"                        | Prediction Lock forces pre-AI commitment                    |
| Asks vague questions                       | "What went wrong with the sales?"                           | Question ranking reveals diagnostic power                   |
| Confuses quantity with quality             | "I asked 15 questions, that's thorough"                     | Tournament shows 3 sharp questions > 15 vague ones          |
| Accepts AI output uncritically             | "Claude said targeting is the issue, so that's my analysis" | Divergence Test reveals copy-paste thinking                 |
| Cannot defend borrowed thinking            | Stumbles when questioned on AI-sourced claims               | Live Defence exposes understanding gaps                     |
| Equates "using AI" with "thinking with AI" | "I used AI, so I was productive"                            | Reasoning Receipt reveals passive acceptance vs. engagement |

**James's emotional state in Part 0:** Curiosity + slight overwhelm. "There's a lot here. Where do I start?" He's willing but skeptical about WHY he needs to think before prompting. His business ops background makes him pragmatic: "I had limited time in my old job too. We used tools to work faster, not slower."

**James does NOT model the exercise.** He questions WHY the exercise matters, gets convinced through Socratic exchange with Emma, then the reader does the exercise. James may appear briefly AFTER the exercise to reflect on what it revealed.

---

## Emma's Part 0 Calibration

**Mentor phase: Authority** (but adapted for thinking, not engineering)

Emma in Part 0 is not teaching code. She is teaching how to think clearly enough to direct AI. Her Socratic questions target reasoning habits, not technical knowledge:

| Engineering Emma (Parts 1+)                | Thinking Emma (Part 0)                            |
| ------------------------------------------ | ------------------------------------------------- |
| "What does that line do?"                  | "What do you actually think happened?"            |
| "Run your linter."                         | "Write it down before you open AI."               |
| "What happens when you delete customer 7?" | "What would change your mind?"                    |
| "Close. But not quite."                    | "That question is interesting. Is it diagnostic?" |

**Emma's fallibility in Part 0: Type A (Past Mistake) dominant.**

She shares thinking mistakes from her own career. This builds trust and shows that even experts need disciplined thinking:

- "I once presented to the board and couldn't defend a single number. Every chart was from someone else's analysis."
- "I spent a week on a report where I asked AI one vague question and built everything on its first response. My manager asked me three questions and the whole thing collapsed."

---

## Pattern Usage in Part 0 (Option B)

| Pattern                        | Minimum                        | Where It Appears                                                                         |
| ------------------------------ | ------------------------------ | ---------------------------------------------------------------------------------------- |
| 1. Pushback Exchange           | 1 per lesson opening           | James resists the exercise rationale                                                     |
| 2. Emma Fallibility            | 1 per chapter (in closing)     | Type A: past thinking mistake                                                            |
| 3. Monologue Breaker           | All dialogue sections          | Emma never speaks 4+ sentences uninterrupted                                             |
| 4. Voice Markers               | All dialogue sections          | James: business analogy + pragmatist question. Emma: Socratic question + short sentences |
| 5. Jonah Rhythm                | 1 per chapter                  | Emma catalyzes the first exercise and exits                                              |
| 6. Multi-Exchange Disagreement | 1 per chapter (in L01 opening) | James argues AI is faster; takes 3+ exchanges to see why prediction locks matter         |
| 7. Emotional Beat              | Chapter closing                | Curiosity/wonder: the surprise of discovering your own thinking gaps                     |

---

## Chapter 1 Narrative Arc: "Asking Better Questions"

### James's Chapter 1 Journey

```
L01: "Why would I write down my guess when AI can analyze it better?"
     → Discovers his prediction was 70% right but missed a critical angle

L02: "My questions are fine. I asked 15 of them."
     → Discovers his partner's 5 targeted questions outperformed his 15 vague ones

L03: "I used AI extensively, so my analysis should be original."
     → Confronts an originality score showing 60% overlap with classmates

L04: "I did the work. I can defend it."
     → Stumbles on AI-sourced claims; can fluently defend self-generated insights
     → Chapter reflection: question quality IS thinking quality
```

### Scene Outlines

#### L01: The Prediction Lock

**OPENING SCENE (30-35 lines)**

Setting: James and Emma. A business scenario has just landed. James reaches for Claude.

- James wants to ask AI immediately. "Why waste time guessing when the tool can analyze it?"
- Emma: "What do YOU think happened?"
- James (pushback): "That's inefficient. AI has access to more patterns than I do."
- Emma (Socratic): "When AI gives you an answer, how will you know if it's right?"
- James pauses. "I'll... evaluate it."
- Emma: "Evaluate it against what? You haven't formed a position yet. You have nothing to compare it to."
- Multi-exchange disagreement (3+ exchanges): James proposes "I'll ask AI first, then form my own view." Emma: "Try it. Ask Claude right now what caused the sales drop." James does. Gets a plausible answer. Emma: "Do you agree?" James: "Yes, it makes sense." Emma: "You just adopted a stranger's diagnosis without examining the patient. Write your own diagnosis FIRST. Then we'll compare."
- James reluctantly agrees.

**JONAH EXIT (5-8 lines)**

Emma: "Write down your diagnosis, your ten questions, and your predicted answers. Seal it. I'll check your work in an hour."

She leaves. The exercise instructions begin.

**POST-EXERCISE BRIDGE (10-15 lines)**

James looks at his prediction lock next to AI's responses. His diagnosis was partially right, partially wrong. The gaps surprise him. "I was sure about the targeting angle. But I completely missed the demographic shift."

Emma: "Now you know exactly where your thinking is strong and where it's lazy. That's the prediction lock's real deliverable: not the prediction, the self-knowledge."

#### L02: The Question Tournament

**OPENING SCENE (20-25 lines)**

James has his 15 questions. Proud of the list. Shows them to Emma before the tournament.

Emma picks question #8. "This one's your best."

James: "That's the most boring one on the list."

Emma: "Read me your question #1."

James: "What are the key factors contributing to the sales decline?"

Emma: "Now read #8."

James: "Did the 15% sales drop occur uniformly across all product categories, or was it concentrated in specific segments?"

Emma: "Which one eliminates more hypotheses?"

James: "...Oh." (The "Oh" moment from the patterns)

"Diagnostic, not decorative. Your tournament partner is about to rank your questions. Be ready to discover which ones actually work."

**POST-EXERCISE BRIDGE (10-15 lines)**

James finds his partner's best question: one he never would have thought to ask, coming from a completely different professional background. The tournament made question quality visible in a way self-assessment never could.

#### L03: The Divergence Test

**OPENING SCENE (20-25 lines)**

30 students. Same scenario. Same AI tools. James is confident his analysis will be distinctive because he spent extra time on it.

Emma: "How much of your analysis came from your own insight vs. what Claude told you?"

James (defensive): "I didn't just copy it. I read the responses and built on them."

Emma: "Write a uniqueness statement. 100 words on what YOU contributed that AI wouldn't have produced on its own."

James stares at his analysis. The parts he's proudest of sound suspiciously like Claude's phrasing.

"This is harder than I thought."

"Good. That means it's working."

**POST-EXERCISE BRIDGE (10-15 lines)**

James gets his originality score. Some sections rated as generic AI output. The sections he flagged as his own contribution scored highest. The mirror is precise: it shows exactly where thinking happened and where it didn't.

#### L04: Live Defence + Chapter Closing

**OPENING SCENE (15-20 lines)**

James prepares for his defence. Reviewing his analysis. Nervous.

Emma: "Which parts of your analysis could you explain without looking at your notes?"

James quickly identifies the sections he actually thought through. The AI-sourced sections feel hollow when he tries to explain them out loud.

"If you actually thought through your analysis, the defence is just talking about what you already know. If you can't defend it, that tells you something important about how you worked."

**CHAPTER CLOSING (25-30 lines)**

After the defence. James is drained but clear-eyed. He could defend his own insights fluently. The AI-adopted claims crumbled under questioning.

Emma fallibility moment (Type A): "I made the same mistake in my first year as an engineer. Copied a performance analysis from a senior colleague, presented it as my own thinking. The CTO asked me one question about the methodology and I froze. Standing in front of twelve people with nothing to say."

James: "What did you do after that?"

Emma: "Never presented anything I couldn't defend. That's the rule this chapter is building in you."

Emotional beat (curiosity/wonder): James realizes question formulation isn't a soft skill or a warm-up. It's the load-bearing foundation. The quality of every answer he'll ever get, from AI, from colleagues, from data, starts with the quality of what he asks.

"Ready for Chapter 2?"

"I think so. But I'm less sure than I was an hour ago."

"Good. That's called calibration."

---

## Density Verification

Estimated per lesson:

| Lesson            | Narrative Lines | Exercise Lines | Total    | Narrative % |
| ----------------- | --------------- | -------------- | -------- | ----------- |
| L01               | ~55             | ~140           | ~195     | 28%         |
| L02               | ~40             | ~120           | ~160     | 25%         |
| L03               | ~40             | ~100           | ~140     | 29%         |
| L04               | ~65             | ~130           | ~195     | 33%         |
| **Chapter Total** | **~200**        | **~490**       | **~690** | **~29%**    |

Target: 30-35%. The chapter closing in L04 can expand slightly to hit 30%.

Note: this is lower than the skill's current 80% target. The reduction is intentional because Part 0's exercises demand first-person cognitive engagement that narrative cannot model without undermining.

---

## Skill Update Required

The `/character-driven-narrative` skill needs a Part 0 override in its density table:

```
| Part             | Density     | Mode             | Rationale |
| 0 (Ch 1-11)     | **30-35%**  | Exercise-framing | Exercises demand reader as protagonist |
```

New narrative mode for Part 0: **Exercise-Framing**

- Narrative frames the WHY before each exercise
- Exercises remain second-person direct address
- James models RESISTANCE to good thinking, not the exercise itself
- Narrative and exercise separated by `---` horizontal rule
- Post-exercise bridges show James's reflection (never the reader's)

---

## Non-Negotiable Rules for Part 0 Narrative

1. **James never does the exercise on-page.** He questions WHY it matters, gets convinced, then the reader does it. No worked examples of prediction locks, reasoning receipts, or question rankings performed by James.

2. **Exercise instructions remain second-person.** "You receive a scenario. Write down your diagnosis." Never "James receives a scenario" in the exercise section.

3. **Narrative and exercise are separated by `---`.** A reader who skips all narrative loses zero instructional content.

4. **No "As You Know, Bob."** James and Emma never explain the exercise structure to each other for the reader's benefit. The exercise section explains itself.

5. **James's resistance must be something the reader is also thinking.** "Why would I write my guess when AI can do better?" is something every reader thinks. "I dislike writing" is not useful resistance.

6. **Post-exercise James is reflective, not instructional.** He says what surprised him, not what the reader should learn. "What This Teaches You" stays in its existing section.
