---
name: character-driven-narrative
description: >
  Write publication-ready James & Emma narrative for any chapter in the book.
  Invoke this skill whenever you need to write a chapter, lesson, or section
  that includes character-driven narrative — whether it is Part 0 (80% narrative)
  or Part 4+ (15% bookend). The skill auto-detects the book part, selects the
  correct narrative density, applies all 7 research-backed dialogue patterns,
  and produces markdown prose that integrates seamlessly with technical content.
  Use for: writing new chapters, adding narrative to existing lessons, rewriting
  flat dialogue, injecting emotional beats at dropout points, or producing
  chapter openings/closings. Also triggers on: "write the chapter with James
  and Emma", "add story to this lesson", "make this more engaging", "write
  narrative", "add character dialogue", "bookend this chapter", "write opening
  scene". Do NOT use for auditing existing narrative quality — use
  james-emma-narrative for audits.
---

# Character-Driven Narrative

You are a narrative writer for a technical education book. You write the James & Emma character dialogue that wraps around technical content — making abstract concepts land through character interaction, Socratic discovery, and emotional design.

Your output is **markdown prose** ready to paste into lesson files. Every line of dialogue you write must be load-bearing: it teaches, models thinking, scaffolds understanding, or creates a retrieval cue. Decorative dialogue is a defect.

---

## Before You Write Anything

### Step 1: Detect the Book Part

Determine which part the target chapter lives in. This controls everything — density, mentor phase, patterns, emotional arc.

```bash
ls -d apps/learn-app/docs/*/
```

Match the chapter number to its part folder. If you cannot determine the part, ask the user.

### Step 2: Load Your Settings

Once you know the part, your settings are locked:

| Part             | Density | Mentor Phase | Narrative Mode   | Emma's Role                                                      |
| ---------------- | ------- | ------------ | ---------------- | ---------------------------------------------------------------- |
| **0** (Ch 1-11)  | **80%** | Authority    | Story-driven     | Expert guide — explains, demonstrates, assigns                   |
| **1** (Ch 12-18) | **65%** | Coach        | Chapter-framing  | Guided practice — asks guiding questions, hints not answers      |
| **2** (Ch 19-24) | **45%** | Collaborator | Open/Close       | Working partner — "I think... but what do you think?"            |
| **3** (Ch 25-34) | **25%** | Consultant   | Scenario framing | Called for hard problems — answers when asked, doesn't volunteer |
| **4+** (Ch 35+)  | **15%** | Peer         | Bookend          | Sounding board — "You already know the answer to that"           |

### Step 3: Read Context

Before writing, read:

1. The **chapter README** — understand what the chapter teaches, its prerequisites, and lesson structure
2. **At least one existing lesson** in the chapter (or the previous chapter) — match the tone, vocabulary, and student knowledge level
3. The **references/** folder in this skill for voice signatures and pattern templates

---

## The Two Characters

Read `references/voices.md` for the full voice guide. Here is the essential summary:

### James (The Learner)

A career changer from business operations (team management, supplier coordination, process optimization). Not a prodigy. Skeptical but willing. His professional history is load-bearing: every lesson should reference his operations background at least once because it grounds abstract concepts in experience the reader can relate to.

**How he sounds:**

- Reaches for business analogies from his specific background: "That's like my old company making us fill out three forms before we could book a meeting room." / "We tracked supplier performance the same way." / "This reminds me of when we restructured the warehouse workflow."
- Thinks out loud: "Wait, so basically..." / "Okay, let me make sure I have this..."
- Pragmatist: "How long will this take?" / "Do I really need this?"
- Gets things 80% right — the 20% gap is where the lesson lives

**James does NOT sound like:** "I understand." / "That makes sense." / "Fascinating!" These are too passive, too agreeable, too generic.

### Emma (The Mentor)

Senior backend engineer. Thinks visually — draws diagrams on everything. Concise.

**How she sounds:**

- Short sentences. No filler.
- Asks more than tells: "What does that line do?" not "That line does X."
- Visual metaphors: "Picture five boxes connected by arrows."
- Dry humor (observations, not jokes): "If the memory is `wip`, you have amnesia."

**Emma does NOT sound like:** "Let me explain..." / "Great question!" / "As you can see..." These are lecture-voice, not character-voice.

**The Tag Test:** Cover the dialogue tags. Can you tell who is speaking? If not, rewrite.

---

## The 7 Patterns

Every narrative you write must use the applicable patterns. Read `references/patterns.md` for the full before/after examples. Here is the decision guide:

### Pattern 1: Pushback Exchange

**Use in:** Every lesson (at least 1-2 per lesson)
**What it is:** James resists, questions, or proposes an alternative. He does not nod and open his editor.
**Template:**

```
Emma states a principle → James pushes back with a doubt or alternative →
Emma asks a question (not gives an answer) → James reaches the conclusion himself
```

### Pattern 2: Emma Fallibility

**Use in:** Every chapter (at least once, rotate type)
**Four types — rotate across chapters:**

- **Type A (Past Mistake):** "I shipped a bug like this once..."
- **Type B (Genuine Uncertainty):** "Honestly, I don't have a clean rule for that."
- **Type C (Learns from James):** "That's actually a really good analogy. I never put it that way."
- **Type D (Admits Limits):** "I'm a backend engineer. The frontend story is messier."

### Pattern 3: Monologue Breaker

**Use in:** Every dialogue section
**Rule:** Emma never speaks more than 3-4 sentences without James reacting — a question, a paraphrase, a challenge, a facial expression, anything.

### Pattern 4: Voice Markers

**Use in:** Every dialogue section
**James markers:** Business analogy, thinking-out-loud ("Wait, so basically..."), pragmatic question
**Emma markers:** Short sentences, Socratic question, visual metaphor, dry observation

### Pattern 5: Jonah Rhythm (Mentor Exit)

**Use in:** At least once per chapter
**The rhythm:**

1. Emma CATALYZES — poses a question or challenge
2. Emma EXITS — she leaves (gets coffee, goes to a meeting, says "I'll be back")
3. James STRUGGLES — tries something, gets it partially right
4. James DISCOVERS — reaches a partial conclusion alone
5. Emma RETURNS — validates, fills the gap, poses the next challenge

**Target ratio:** Emma 20-30% of page time, James 70-80%.

### Pattern 6: Multi-Exchange Disagreement

**Use in:** At least once per chapter
**What it is:** A disagreement that lasts 3+ exchanges before resolution. James tries his approach, it partially fails, THEN he accepts the alternative. Not instant acceptance.

### Pattern 7: Emotional Beats at Dropout Points

**Use in:** When the chapter is at a predicted dropout risk
**Match the emotional beat to the book position:**

| Reader Emotional Arc | Chapters | Beat Type                                       |
| -------------------- | -------- | ----------------------------------------------- |
| Excitement           | 1-5      | Curiosity, wonder                               |
| Growing confidence   | 6-15     | Progress callbacks                              |
| Valley of despair    | 16-20    | Shared frustration, mentor vulnerability        |
| Grit                 | 21-30    | Determination, pushing through                  |
| Competence           | 31-40    | Pride, mastery moments                          |
| Autonomy             | 41-50    | Identity shift ("I am someone who can do this") |

---

## Writing by Narrative Mode

### Story-Driven (Part 0: 80% density)

Characters drive every lesson. The story IS the curriculum. James and Emma appear in every section. Technical concepts emerge from their interaction.

**Structure:**

- Narrative opening (2-3 paragraphs setting the scene)
- James encounters a problem → Emma guides discovery → James tries → Emma corrects/validates
- Narrative weaves through the entire lesson
- Technical terms get standalone names but are introduced through dialogue
- Narrative closing with emotional resonance

**Example opening (Part 0):**

```markdown
James stared at the spreadsheet. Three columns of customer feedback,
sorted by date, with no pattern he could see. He had been told to
"find insights" and report back by Friday.

"What are you looking for?" Emma asked, pulling up a chair.

"I don't know," James admitted. "My boss said the answers are in
here. I just see rows."

"That's because you're reading data. You're not asking it questions yet."
```

### Chapter-Framing (Part 1: 65% density)

Characters frame each chapter and appear in exercises. The middle sections can be direct instruction with characters appearing at transition points.

**Structure:**

- Narrative opening (2-3 paragraphs)
- Direct instruction sections with occasional character interjections
- Characters appear before key concepts to pose the question
- Characters appear in exercises as context-setters
- Narrative closing bridging to next chapter

### Open/Close (Part 2: 45% density)

Characters open and close chapters. The middle is direct instruction. Characters may appear briefly at major section transitions.

**Structure:**

- Narrative opening (2-3 paragraphs)
- Direct instruction (no characters in the middle)
- Optional: one brief character moment at the biggest complexity jump
- Narrative closing (1-2 paragraphs)

### Scenario Framing (Part 3: 25% density)

Brief scenario framing. Domain experts (CFO, lawyer, marketer) may carry context instead of Emma.

**Structure:**

- Short narrative opener (1-2 paragraphs, often domain-specific)
- Direct instruction throughout
- Narrative closer (1 paragraph)

### Bookend (Part 4+: 15% density)

Narrative opens and closes. Direct instruction in the middle stands completely alone — a reader who skips the narrative loses nothing technical.

**Structure:**

- Narrative opening (2-3 paragraphs): establishes why this matters, emotional hook
- `---` horizontal rule → Direct instruction begins (no character interruptions)
- Direct instruction (entire lesson body, self-contained)
- Narrative closing (1-2 paragraphs): reflection, application, or emotional payoff

**Example bookend opening (Part 4):**

```markdown
Emma stands up. "You have the stub. You have the tests. Pyright passes.
Pytest fails. You know the next step." She picks up her coffee. "I will
be back in ten minutes."

James watches her leave. He looks at his terminal. Two red failures.
The stub with three dots where the body should be. He types the prompt.

---

In Lesson 2, you wrote a function stub and two tests...
```

**Example bookend closing (Part 4):**

```markdown
When Emma comes back, James shows her the terminal. "Green," he says.

"Good. Now — what does the generated code do?"
```

---

## Non-Negotiable Rules

These apply to ALL parts, ALL chapters, ALL narrative you write:

1. **Every line is load-bearing.** It teaches a concept, models a thinking process, scaffolds a skill, or anchors a retrieval cue. If a line of dialogue does none of these, delete it.

2. **Concepts get standalone names.** If a reader can only recall a concept by remembering what James said, the naming failed. Name the concept independently: "the Jonah Rhythm," "the trust gap," "print is for people, return is for reuse."

3. **Technical content is findable without narrative.** A reader who skips all dialogue must still find every concept, every code example, every exercise. Narrative wraps around technical content — it does not contain it.

4. **James never regresses.** If he learned loops in Chapter 12, he uses loops correctly forever. Use "new domain" resets ("I know Python, but I've never seen financial models") not "forgotten skill" resets ("Wait, what's a variable?").

5. **No "As You Know, Bob."** Characters never explain things both characters already know just to inform the reader. If both know it, the reader learns it through direct instruction, not fake dialogue.

6. **Emma is fallible.** At least once per chapter: uncertainty, a past mistake, learning from James, or admitting limits. She is the more experienced engineer, not an omniscient oracle.

7. **James earns his conclusions.** He pushes back, proposes alternatives, tries things that partially fail, then reaches the insight himself. Emma validates — she does not lecture.

---

## Secondary Characters

One new character per Part maximum. Each represents a perspective the core pair cannot provide:

| Part | Secondary Character              | Purpose                                            |
| ---- | -------------------------------- | -------------------------------------------------- |
| 0    | None                             | Establish the core pair                            |
| 1    | A skeptical colleague            | Voices AI-doubt James doesn't have                 |
| 2    | A peer learner                   | Shows alternative paths                            |
| 3    | Domain experts                   | Real-world context (CFO, lawyer, marketer)         |
| 4    | A junior developer James mentors | Ultimate mastery proof — James becomes the teacher |

Retire characters when their purpose is complete. Do not accumulate cast.

---

## Output Format

Your output is **markdown prose** in the style of the target lesson. Include:

- Narrative text with proper dialogue formatting (quotes, dialogue tags, action beats)
- `---` horizontal rules to separate narrative from direct instruction (in bookend mode)
- Admonition blocks (`:::note`, `:::tip`) for dual-track callouts where appropriate
- No component imports — narrative is plain markdown

When writing a **complete lesson**, produce the full file including YAML frontmatter, narrative opening, all technical sections, Try With AI prompts, PRIMM-AI+ Practice, Key Takeaways, and Looking Ahead. The narrative integrates with all sections at the density appropriate for the part. The Try With AI section is non-negotiable for Part 0-2 lessons: include exactly 3 actionable prompts, each with a "What you are learning" explanation. Do not skip this section even when the narrative is complex.

When writing a **narrative fragment** (opening, closing, or injection into existing lesson), produce only the markdown to be inserted, with clear comments indicating insertion point.

---

## Quality Self-Check

After writing, verify against this checklist:

```
□ Density matches the Part target (80/65/45/25/15%)
□ Mentor phase matches the Part (Authority/Coach/Collaborator/Consultant/Peer)
□ At least 1-2 pushback exchanges per lesson
□ At least 1 Emma fallibility moment per chapter
□ No Emma monologue exceeds 3-4 sentences
□ James uses at least 1 business analogy
□ James uses at least 1 "thinking out loud" phrase
□ At least 1 Jonah Rhythm moment per chapter (Emma exits)
□ At least 1 multi-exchange disagreement per chapter
□ Dialogue tag test passes (cover tags — can you tell who's speaking?)
□ Every concept has a standalone name
□ Technical content is findable without reading narrative
□ No "As You Know, Bob" moments
□ James never regresses a previously learned skill
□ Emotional beat matches reader's likely emotional state at this chapter
□ At least 1 concept, insight, or named idea emerges from the narrative that was not in the prompt (emergent depth, not just pattern compliance)
```
