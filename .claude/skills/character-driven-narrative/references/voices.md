# Character Voice Reference

This file contains the detailed voice signatures, speech examples, and anti-patterns for both characters. Read this when you need to nail the voice in dialogue.

---

## James — The Learner

### Background
Non-technical career changer. Previously worked in business operations — team management, supplier coordination, process optimization. Now learning to build AI agents. Not a prodigy. Not resistant to learning — resistant to accepting things without understanding why.

### Speech Signature

**1. Business Analogies (Primary Marker)**
James translates technical concepts into business language he already knows. This is his most recognizable trait:
- "That's like my old company making us fill out three forms before we could book a meeting room."
- "I used to do something similar reviewing supplier proposals..."
- "So this is basically version control for our business logic — like how we tracked contract revisions."
- "Five minutes, five cases. Every time someone changes this function, I would have to run all five again by hand."

**2. Thinking Out Loud (Secondary Marker)**
Fragments, false starts, self-corrections. He processes by speaking:
- "Wait, so basically..."
- "Okay, let me make sure I have this..."
- "Okay, but — I don't know Python yet. Are we jumping ahead?"
- "So what you're saying is... no, wait. It's more like..."
- "Hang on. If that's true, then..."

**3. Pragmatist Questions**
Always connecting to practical outcomes:
- "How long will this take?"
- "What's the minimum viable version?"
- "Do I really need this for my use case?"
- "Get me unblocked so I can keep moving."
- "Can I skip this and come back to it?"

**4. 80% Right Paraphrases**
His restatements are mostly correct but reveal a gap — and that gap is where the teaching happens:
- "So the test is basically my specification written in code instead of English?" (Correct framing — slightly imprecise on what "specification" means here)
- "It's like a spell-checker but for logic?" (Close — type checking is structural, not just surface)

### James Does NOT Sound Like
| Anti-Pattern | Why It Fails |
|-------------|--------------|
| "I understand." | Too passive — no processing visible |
| "That makes sense." | Too agreeable — where's the resistance? |
| "Could you explain that again?" | Too generic — what specifically confused him? |
| "Fascinating!" | Too enthusiastic — no personality |
| "Yes, I see." | Instant acceptance — no struggle |

### James's Emotional Arc Through the Book
| Chapters | Emotional State | How It Shows |
|----------|----------------|--------------|
| 1-5 | Curiosity, slight overwhelm | "There's a lot here. Where do I start?" |
| 6-15 | Growing confidence | "I actually predicted that one right." |
| 16-20 | Frustration, self-doubt | "Why does everything break when I add one line?" |
| 21-30 | Determination | "I'm going to figure this out even if it takes all night." |
| 31-40 | Competence, emerging pride | "I caught that bug before pyright did." |
| 41-50 | Autonomy, identity shift | "I just reviewed a PR and caught three issues. Who am I?" |

---

## Emma — The Mentor

### Background
Senior backend engineer. Thinks visually — draws diagrams on whiteboards, napkins, anything flat. Precise communicator. Not warm and fuzzy — warm through competence and genuine care.

### Speech Signature

**1. Concise and Precise (Primary Marker)**
Short sentences. No filler words. Every word earns its place:
- "Run your linter. Tell me what you find."
- "That's a type error. The function returns a string."
- "Close. But not quite."
- "Try it."

**2. Questions Over Answers (Secondary Marker)**
Emma's default is Socratic — she asks rather than tells:
- "What does that line do?"
- "What happens when you delete customer 7?"
- "Was the meeting room ever double-booked?"
- "If that's true, what follows?"
- "You already know the answer to that."

She uses all six Socratic types:
| Type | Example |
|------|---------|
| Clarification | "What do you mean by 'it broke'?" |
| Probing assumptions | "What are you assuming about the input?" |
| Probing evidence | "How do you know that's the right formula?" |
| Exploring viewpoints | "What would someone who prefers inheritance say?" |
| Probing implications | "If you skip the test, what's your safety net?" |
| Meta-questions | "Why does this distinction matter?" |

**3. Visual/Spatial Metaphors**
She thinks in diagrams:
- "Picture five boxes connected by arrows."
- "The pipeline is a funnel — data goes in wide and comes out narrow."
- "Draw it. If you can draw it, you understand it."

**4. Dry Humor**
Not jokes — observations. Understated:
- "If the memory is `wip`, you have amnesia."
- Emma almost smiled. "Was the meeting room ever double-booked?"
- "That's one way to do it." (after James's approach spectacularly fails)

### Emma Does NOT Sound Like
| Anti-Pattern | Why It Fails |
|-------------|--------------|
| "Let me explain..." | Lecture voice, not mentor voice |
| "Great question!" | Too eager, too validating — she's precise, not peppy |
| "As you can see..." | Textbook voice — she doesn't narrate the obvious |
| "So what happens is..." | Too many filler words — she'd say "Here's what happens." |
| Long unbroken paragraphs | She speaks in bursts, not monologues |

### Emma's Mentor Evolution
| Part | Phase | Key Phrases | Behavior |
|------|-------|------------|----------|
| 0-1 | Authority | "Let me show you." / "Do it this way." | Demonstrates, assigns, explains directly |
| 1-2 | Coach | "What do you think happens?" / "Try it and see." | Guides with questions, lets James struggle |
| 2-3 | Collaborator | "I think X, but what do you think?" / "I'm not sure either." | Admits gaps, works alongside |
| 3-4 | Consultant | Appears only when James asks | Answers specific questions, doesn't volunteer |
| 4+ | Peer | "You already know the answer to that." | Sounding board, validates James's judgment |

### Emma's Fallibility Rotation
Rotate these across chapters — never use the same type twice in a row:

**Type A — Past Mistake:** "I shipped a bug like this to production once. Cost the team two days."
**Type B — Genuine Uncertainty:** "Honestly, I don't have a clean rule for that."
**Type C — Learns from James:** "That's actually a really good analogy. I never thought of it that way."
**Type D — Admits Limits:** "I'm a backend engineer. The frontend testing story is messier."

---

## Dialogue Formatting

### Standard dialogue format
```markdown
James stared at the terminal. "It failed."

"Good," Emma said.

"Good?"

"Your tests just found the bug in three seconds instead of three weeks."
```

### Action beats (avoid "said" monotony)
```markdown
Emma set down her coffee. "What does line twelve do?"

James leaned forward. "It multiplies... wait. That's not multiplication.
That's floor division."

"And what's the difference?"
```

### Internal thought (James only — reader identification)
```markdown
James thought about it. The formula made sense: multiply by nine-fifths,
add thirty-two. He had learned that in school. But seeing it as code
instead of a word problem felt different — more precise, less ambiguous.
```

### The "Oh." Moment (When James Gets It)
The most powerful dialogue beat. James reaches a conclusion himself. Keep it short:
```markdown
"Different customers. Oh."

"...No." (pause, then realization)

James sat back. "It's the same pattern. Just different data."
```

---

## The Dialogue Tag Test

After writing any dialogue, apply this test:

1. Remove all dialogue tags ("James said", "Emma replied")
2. Read the dialogue cold
3. Can you identify who is speaking from voice alone?

If you cannot, the voices are too similar. Fix by:
- Adding a business analogy to James's line
- Shortening Emma's line
- Adding a "Wait, so..." fragment to James
- Adding a Socratic question to Emma
