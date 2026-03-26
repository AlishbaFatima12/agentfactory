# The 7 Narrative Patterns — Writing Templates

Every pattern here exists to solve a specific problem in educational narrative. Each one includes the problem it fixes, a concrete writing template, before/after examples, and a density guide showing how the pattern changes across book parts.

---

## Pattern 1: Pushback Exchange

**Problem it fixes:** James accepts everything instantly. He nods, opens his editor, and the reader learns nothing about _why_ the technique matters.

**The template:**

```
1. Emma states a principle or technique
2. James pushes back with a SPECIFIC doubt or proposes an ALTERNATIVE
3. Emma asks a question (NOT gives an answer)
4. James reaches the conclusion HIMSELF
5. Emma validates — briefly
```

**Frequency:** At least 1-2 per lesson.

### Before (bad — instant acceptance)

```markdown
Emma showed James a different workflow. "Write the tests first," she said.
"Before any implementation."

James nodded and opened his editor.
```

### After (good — earned understanding)

```markdown
Emma showed James a different workflow. "Write the tests first," she said.
"Before any implementation."

"But I haven't designed the algorithm yet," James said. "How can I
test something I haven't built?"

"You're not testing the algorithm. You're testing the contract --
what the function must return for specific inputs."

James thought about it. "So the test is basically my specification
written in code instead of English?"

"Now you're getting it."
```

### Density adaptation

| Part       | How the pushback changes                                                                          |
| ---------- | ------------------------------------------------------------------------------------------------- |
| 0 (30-35%) | Pushback in lesson openings only. James resists the exercise rationale before the reader does it. |
| 1 (65%)    | Moderate — James has learned to try things first, but still questions the _why_.                  |
| 2 (45%)    | Compressed — pushback happens in opening/closing narrative only.                                  |
| 3 (25%)    | Brief — one-line challenges in scenario framing. "Why not just use a spreadsheet?"                |
| 4+ (15%)   | Minimal — one pushback in the opening bookend. Quick resolution.                                  |

### Writing tips

- James's doubt should be **something the reader is also thinking**. If the reader isn't thinking it, the pushback feels forced.
- Emma's response must be a **question**, not an explanation. "What happens when..." not "The reason is..."
- The best pushback exchanges end with James saying something **80% correct** — and that 20% gap becomes the lesson.

---

## Pattern 2: Emma Fallibility

**Problem it fixes:** Emma is an omniscient oracle who is never wrong, never uncertain, and never learns from James. She feels like a textbook with a name tag.

**Rule:** At least one per chapter. Rotate across four types — never use the same type twice in consecutive chapters.

### Type A — Past Mistake

Emma admits she made this exact mistake before. Humanizes her without undermining credibility.

```markdown
"I used to just `git add . && git commit -m 'fixes'`," Emma admitted.
"Lost a week of project history when I needed to understand why a
deployment broke. That's when I started treating commits like journal
entries."
```

### Type B — Genuine Uncertainty

Emma doesn't have a clean answer. She's honest about it.

```markdown
"How small is too small when you decompose functions?" James asked.

Emma paused. "Honestly, I don't have a clean rule for that. It depends
on your team's conventions and the complexity of the domain. I've seen
three-line functions that were too small and fifty-line functions that
were fine."
```

### Type C — Learning from James

James's non-technical perspective produces an insight Emma hadn't considered.

```markdown
James frowned. "Wait, so basically... a JSON file is like keeping all
your client contacts in a spreadsheet where you copy-paste the company
name into every row. And a database is like having a separate companies
sheet that you link to?"

Emma blinked. "That's... actually a really good analogy. I've been
explaining normalization for years and never put it that way."
```

### Type D — Admitting Limits

Emma knows her boundaries and says so.

```markdown
"What about testing frontend components?" James asked.

"I'm a backend engineer," Emma said. "The frontend testing story is
messier. I'd want to research the current best practices before giving
you advice on that."
```

### Density adaptation

| Part       | Fallibility style                                                        |
| ---------- | ------------------------------------------------------------------------ |
| 0 (30-35%) | Type A dominant. Emma shares one thinking war story per chapter closing. |
| 1 (65%)    | Mix A and B. Emma starts showing uncertainty alongside experience.       |
| 2 (45%)    | Type C appears. James's growing knowledge surprises her.                 |
| 3 (25%)    | Type D dominant. Emma acknowledges domain limits as topics diversify.    |
| 4+ (15%)   | Type C dominant. James produces insights Emma validates. Peer dynamic.   |

---

## Pattern 3: Monologue Breaker

**Problem it fixes:** Emma delivers 5-8 sentence speeches that read like textbook paragraphs with quotation marks around them.

**Rule:** Emma's longest uninterrupted speech is **3-4 sentences**. After that, James must react — a question, a paraphrase, a challenge, an action beat, even a facial expression.

### Before (bad — 6 sentences uninterrupted)

```markdown
"Your data has relationships," Emma told him. "Customers have orders.
Orders contain products. Products belong to categories. You are storing
relational data in a format that doesn't understand relationships. That
is like writing typed code without a type checker -- the structure is
there, but nothing enforces it."
```

### After (good — broken into dialogue)

```markdown
"Your data has relationships," Emma told him. "Customers have orders.
Orders contain products."

"Sure, but my JSON handles that fine," James said. "Each order has the
customer data right there."

"Right there -- duplicated in every order. When you renamed Acme Corp,
what happened to the forty-seven orders that still said the old name?"

James went quiet. "Different customers. Oh."
```

### How to break a monologue

When Emma needs to convey a lot of information, use one of these interruption patterns:

1. **James paraphrases** (and gets it 80% right): "So what you're saying is..."
2. **James challenges with a specific case**: "But what about when...?"
3. **James applies to his business background**: "That's like how we used to..."
4. **Action beat**: James leans forward / frowns / opens his laptop / stares at the screen
5. **James asks the practical question**: "How long does that take?" / "Do I need this?"

---

## Pattern 4: Voice Markers

**Problem it fixes:** James and Emma sound identical. Cover the dialogue tags and you can't tell who is speaking.

**James's markers (use at least 1-2 per dialogue section):**

| Marker               | Example                                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------ |
| Business analogy     | "That's like my old company making us fill out three forms before we could book a meeting room."       |
| Thinking out loud    | "Wait, so basically..." / "Okay, let me make sure I have this..." / "Hang on. If that's true, then..." |
| Pragmatist question  | "How long will this take?" / "What's the minimum viable version?" / "Can I skip this?"                 |
| 80% right paraphrase | "So the test is basically my specification written in code?" (close — slightly imprecise)              |

**Emma's markers (use at least 1-2 per dialogue section):**

| Marker                   | Example                                                                                                  |
| ------------------------ | -------------------------------------------------------------------------------------------------------- |
| Short, precise sentences | "Run your linter. Tell me what you find." / "Close. But not quite."                                      |
| Socratic question        | "What does that line do?" / "What happens when you delete customer 7?" / "If that's true, what follows?" |
| Visual/spatial metaphor  | "Picture five boxes connected by arrows." / "The pipeline is a funnel."                                  |
| Dry observation          | "If the memory is `wip`, you have amnesia." / "That's one way to do it." (after failure)                 |

### The dialogue tag test

After writing any dialogue, apply this test:

1. Remove all dialogue tags ("James said", "Emma replied")
2. Read the dialogue cold
3. Can you identify who is speaking from voice alone?

If you cannot, fix by:

- Adding a business analogy to James's line
- Shortening Emma's line
- Adding a "Wait, so..." fragment to James
- Adding a Socratic question to Emma

### Before (indistinguishable)

```markdown
"What if I don't need all these tools?" James asked.
"You need them," Emma said. "They prevent bugs."
```

### After (distinct voices)

```markdown
"Okay, wait," James said. "Five tools before I write a single line of
code? That's like my old company making us fill out three forms before
we could book a meeting room."

Emma almost smiled. "Was the meeting room ever double-booked?"

"...No."

"That's why."
```

---

## Pattern 5: The Jonah Rhythm (Mentor Exit)

**Problem it fixes:** Emma hovers over every section, resolving every confusion before James can struggle. The reader watches instead of thinking.

**Named after Jonah in Goldratt's _The Goal_ — the mentor who appears, asks one devastating question, and disappears.**

**The rhythm:**

```
1. Emma CATALYZES  — poses a question, creates a challenge, sets up a problem
2. Emma EXITS      — gets coffee, goes to a meeting, says "I'll be back"
3. James STRUGGLES  — tries something, gets it partially right, makes a mistake
4. James DISCOVERS  — reaches a partial conclusion on his own
5. Emma RETURNS     — validates, fills the gap, poses the next challenge
```

**Target ratio:** Emma 20-30% of page time. James 70-80%.

**Frequency:** At least once per chapter.

### Before (Emma never leaves)

```markdown
Emma opened a whiteboard and drew five boxes. "These are the five
tools," she said. She wrote a name in each: uv, pyright, ruff, pytest,
Git. "Let me explain each one."

She pointed to the first box. "uv manages your packages..."
[Emma explains all five tools]
```

### After (Jonah Rhythm)

```markdown
Emma drew five empty boxes on the whiteboard and wrote a name in each:
uv, pyright, ruff, pytest, Git. "Figure out what each one does," she
said. "I'll be back in twenty minutes."

James stared at the whiteboard. He knew Git -- they'd used it in Part 2.
pytest sounded like it had something to do with testing. But uv? pyright?
He opened a terminal and typed `uv --help`.

[James explores on his own, gets partial understanding]

When Emma came back, James had three of the five right. "Close," she
said. "But pyright isn't a linter -- it's a type checker. Different job.
What's the difference?"
```

### Density adaptation

| Part       | How the rhythm works                                                                  |
| ---------- | ------------------------------------------------------------------------------------- |
| 0 (30-35%) | One cycle per chapter. Emma catalyzes the first exercise and exits. Reader struggles. |
| 1 (65%)    | One full cycle per lesson. Emma sets up the chapter exercise and steps back.          |
| 2 (45%)    | One cycle in the opening narrative. James works independently in the middle.          |
| 3 (25%)    | Compressed. Emma poses a question in the opener and isn't present for the middle.     |
| 4+ (15%)   | Bookend only. Emma catalyzes in the opening, returns in the closing to validate.      |

### Writing the exit

Emma's exits should feel natural, not contrived:

- "I'll be back in ten minutes." (gets coffee)
- "Try it. I need to check on something." (goes to a meeting)
- "You know enough. Start. I'll check your work when I get back."
- "My turn to listen. Walk me through it." (shifts to observer)

---

## Pattern 6: Multi-Exchange Disagreement

**Problem it fixes:** James accepts every correction immediately. Zero sustained disagreements. Every interaction resolves in 2 exchanges.

**Rule:** At least once per chapter, let a disagreement last **3+ exchanges** before resolution. James tries his approach, it partially fails, THEN he accepts the alternative. Not before.

### Before (instant acceptance)

```markdown
"You should use composition instead of inheritance here," Emma said.

James nodded. "Makes sense."
```

### After (sustained disagreement)

```markdown
"You should use composition instead of inheritance here," Emma said.

"But inheritance is simpler," James said. "One line: `class Admin(User)`.
Done."

"Try adding a `Guest` that can view but not edit."

James typed for a minute. "Okay, `Guest` inherits from `User` too, but
I need to override three methods to remove permissions... and now
`Admin` and `Guest` share a method that only makes sense for regular
users." He stared at the screen. "This is getting ugly."

"Now try it with composition. Give each role a `permissions` object."

James rebuilt it. Two minutes later: "...That's cleaner. But I wouldn't
have believed you if I hadn't tried inheritance first."

"That's the point."
```

### Structure of a multi-exchange disagreement

```
Exchange 1: Emma recommends X. James proposes Y.
Exchange 2: Emma sets up a scenario that tests Y. James tries it.
Exchange 3: Y partially fails. James sees the problem himself.
Exchange 4: James tries X. It works better. He acknowledges it --
            but frames it in terms he earned ("I wouldn't have
            believed you if I hadn't tried it first").
```

### What makes it NOT a lecture

- James's alternative (Y) must be **reasonable** — something a reader might also try
- Y must **partially work** — it's not obviously wrong, it just breaks at the edges
- James must **try and fail himself** — not be told it would fail
- James's acceptance must include **his own framing** — not just "you're right"

---

## Pattern 7: Emotional Beats at Dropout Points

**Problem it fixes:** No emotional design at predicted high-dropout moments. The narrative doesn't adjust to where the reader is emotionally.

**The reader's emotional arc mirrors James's arc:**

| Chapters | Reader State             | James State                                                | Beat Type                                 |
| -------- | ------------------------ | ---------------------------------------------------------- | ----------------------------------------- |
| 1-5      | Excitement, curiosity    | "There's a lot here. Where do I start?"                    | Wonder, possibility                       |
| 6-15     | Growing confidence       | "I actually predicted that one right."                     | Progress callbacks, small wins            |
| 16-20    | Valley of despair        | "Why does everything break when I add one line?"           | Shared frustration, mentor vulnerability  |
| 21-30    | Grit, determination      | "I'm going to figure this out even if it takes all night." | Persistence, earned breakthroughs         |
| 31-40    | Competence, pride        | "I caught that bug before pyright did."                    | Mastery moments, role reversal            |
| 41-50    | Autonomy, identity shift | "I just reviewed a PR and caught three issues. Who am I?"  | Identity transformation, peer recognition |

### Example beats by position

**Early chapters (excitement):**

```markdown
James stared at the terminal output. His function worked. Not because
he'd memorized something or followed a tutorial step by step — because
he'd specified what he wanted and verified the result. Five lines of
code. His code.

"It's small," he said.

"Every building starts with one brick," Emma said.
```

**Midpoint (valley of despair):**

```markdown
"I shipped a bug like this to production once," Emma said quietly.
"Cost the team two days. That's when I started writing tests first --
not because a book told me to, but because I couldn't afford another one."

James looked at her. She'd never mentioned a failure before. It helped,
somehow, knowing that she'd been here too.
```

**Late chapters (identity shift):**

```markdown
James caught himself reviewing a colleague's pull request -- checking
types, scanning test coverage, questioning the commit messages. He
wasn't copying Emma anymore. He was thinking like an engineer.
```

### Placement rules

- Place emotional beats **at the end of hard lessons**, not at the beginning
- The beat should be **earned** — it follows genuine struggle, not empty encouragement
- Never use emotional beats as **filler** — every beat must also teach or reinforce a concept
- Match the beat to the reader's **likely emotional state at this chapter number**, not to the chapter content

---

## Pattern Interaction Guide

Patterns are not independent — they combine. Here's how they work together:

### Pushback + Multi-Exchange = Deep Learning

A pushback exchange (Pattern 1) can escalate into a multi-exchange disagreement (Pattern 6). Start with James questioning, let it develop into a sustained back-and-forth when the concept is important enough.

### Jonah Rhythm + Pushback = Independent Discovery

Emma exits (Pattern 5). James tries something on his own. When Emma returns, James pushes back with what he discovered (Pattern 1). This combination produces the most authentic learning moments.

### Voice Markers + Monologue Breaker = Natural Dialogue

When breaking a monologue (Pattern 3), use voice markers (Pattern 4) to make the interruption feel natural. James breaks in with a business analogy or a "Wait, so basically..." — not a generic question.

### Fallibility + Emotional Beat = Mentor Connection

Emma's fallibility moment (Pattern 2) placed at a dropout point (Pattern 7) creates a powerful "she's been here too" moment. Reserve Type A (past mistake) for midpoint slump chapters.

---

## Quick Reference: Minimum Pattern Coverage Per Chapter

| Pattern            | Minimum per Chapter    | Notes                                                  |
| ------------------ | ---------------------- | ------------------------------------------------------ |
| 1. Pushback        | 1-2 per lesson         | More in early parts, compressed in later parts         |
| 2. Fallibility     | 1 per chapter          | Rotate types A/B/C/D across chapters                   |
| 3. Monologue break | Every dialogue section | Emma never speaks 5+ sentences uninterrupted           |
| 4. Voice markers   | Every dialogue section | At least 1 James marker + 1 Emma marker per section    |
| 5. Jonah Rhythm    | 1 per chapter          | Full cycle in early parts, bookend-only in later parts |
| 6. Multi-exchange  | 1 per chapter          | 3+ exchanges before resolution                         |
| 7. Emotional beat  | When at dropout point  | Match beat type to reader's emotional arc position     |
