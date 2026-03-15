# Part 0 Reference Brief — Shared Writer's Guide

This document is the shared reference for all 6 writer teammates. Read this before starting any lesson file.

---

## 1. Part 0 Identity

### Pedagogical Layer

**L1 (Manual Foundation)** — No code. No programming assumed. No terminal. No IDE. Students use only:

- **claude.ai** (web browser)
- **chatgpt.com** (web browser)

This is the only part of the book where the deliverable is never code — it is always **documented evidence of thinking**.

### Target Audience

Complete beginners. Zero programming experience assumed. Backgrounds may include:

- Business professionals exploring AI
- Students with no technical background
- Domain experts (accountants, lawyers, teachers) who will later build agents
- Technical professionals who are new to AI-native thinking

### Assessment Philosophy

**Process over output. Thinking over answers.**

> The deliverable is never the answer. The deliverable is the documented evidence of thinking.

Two students can reach the same conclusion. The one who thought their way there can defend it, adapt it, and build on it. The one who outsourced to AI cannot. The difference is invisible in the output — it is visible only in the process.

### Tone and Voice

- Direct, confident, no hedging
- Second person ("you will", "your deliverable")
- No emojis in output files
- No corporate-speak or motivation-poster language
- Treat students as intelligent adults who deserve honest feedback
- The draft's italic epigraphs at chapter openings should be preserved as blockquotes

---

## 2. The Six Assessment Layers

Every exercise uses a subset of these layers. Writers must tag which layers each exercise uses (the source draft already specifies them — preserve these exactly).

| Layer       | Name                      | How It Works                                                                                               | AI-Proof Mechanism                                                           |
| ----------- | ------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **Layer 1** | Predict Before You Prompt | Student commits position in writing BEFORE touching AI. Timestamped, cannot be changed.                    | AI cannot retroactively generate someone else's prediction                   |
| **Layer 2** | The Reasoning Receipt     | Student submits decision trail: every prompt, every AI response, every accept/reject/modify decision       | AI can generate answers but not a genuine record of someone else's decisions |
| **Layer 3** | Live Defence              | Student defends work without AI access. Oral examination format.                                           | If student outsourced thinking, they collapse under questioning              |
| **Layer 4** | Contradiction Challenge   | Student's work is fed to AI with "argue against this." Student must respond in real-time.                  | Student who copied AI cannot defend against AI's counter-attack              |
| **Layer 5** | Divergence Test           | Whole class gets same problem + same AI tools. Students who outsourced produce near-identical outputs.     | Originality becomes measurable signal of cognitive engagement                |
| **Layer 6** | Iterative Drafts          | Three drafts: before AI, after AI collaboration, after reflection. Grade lives in the gaps between drafts. | AI cannot produce genuine record of thinking evolving across stages          |

### Layer Application Map (from source draft)

| Chapter                | Layer 1 | Layer 2 | Layer 3 | Layer 4 | Layer 5 | Layer 6     |
| ---------------------- | ------- | ------- | ------- | ------- | ------- | ----------- |
| Ch 1: Questions        | Ex1     | Ex1,Ex3 | Ex2,Ex4 | Ex4     | Ex2,Ex3 | -           |
| Ch 2: Errors           | Ex1     | Ex1     | Ex3     | Ex2     | Ex3     | Ex2,Ex4     |
| Ch 3: Systems          | -       | -       | Ex2,Ex4 | -       | -       | Ex1,Ex3,Ex4 |
| Ch 4: First Principles | Ex1     | -       | -       | Ex3     | Ex1     | Ex2,Ex4     |
| Ch 5: Communication    | Ex1     | Ex1     | Ex2     | -       | -       | Ex4         |
| Ch 6: AI Collaboration | Ex1     | Ex2     | -       | Ex3     | Ex1     | Ex4         |
| Ch 7: Ethics           | Ex1     | -       | Ex3     | Ex2     | -       | Ex4         |
| Ch 8: Creation         | Ex1     | -       | -       | Ex3     | Ex1     | Ex2,Ex4     |
| Ch 9: Decisions        | Ex1     | Ex2     | -       | Ex3     | -       | Ex3,Ex4     |
| Ch 10: Meta-Learning   | Ex1     | Ex2     | Ex3     | -       | -       | Ex2,Ex4     |

---

## 3. Thinking Score Card Format

Every AI Check prompt ends with the same standardized request. Writers must include this verbatim at the end of every AI Check code block:

```
Finally, complete the Thinking Score Card for this exercise:
Independent Thinking (1-10), Critical Evaluation (1-10),
Reasoning Depth (1-10), Originality (1-10), Self-Awareness (1-10).
For each score, give a one-sentence justification.
```

### The Five Dimensions

| Dimension                       | What It Measures                                                                                                                                       |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Independent Thinking** (1-10) | Did the student produce genuine thought before or beyond AI? Evidence of predictions, original analysis, or ideas AI would not generate independently. |
| **Critical Evaluation** (1-10)  | Did the student evaluate AI output critically? Evidence of accepting, rejecting, or modifying AI responses with justified reasoning.                   |
| **Reasoning Depth** (1-10)      | How deep is the reasoning? Evidence of second-order thinking, hidden assumptions, logical chains vs. surface-level responses.                          |
| **Originality** (1-10)          | How much diverges from what AI would produce? Evidence of unique perspectives, novel connections, creative approaches.                                 |
| **Self-Awareness** (1-10)       | Does the student accurately understand their own strengths/weaknesses? Evidence of calibrated confidence, honest gap identification.                   |

### Score Card Table Template

Include this template in the introduction (Lesson 2 — Forward Map) and reference it thereafter. Do not repeat the full template in every exercise — just include the AI Check prompt ending.

---

## 4. Cross-Chapter Dependency Map

This table shows which skills from earlier chapters are explicitly referenced in later chapters via "Building On" callouts. Writers must include the correct `:::note Building On` admonition with relative links wherever the source draft indicates a cross-reference.

| Source Skill                     | Taught In    | Referenced In (Building On)                      |
| -------------------------------- | ------------ | ------------------------------------------------ |
| Prediction Lock format           | Ch 1 Ex1     | Ch 2 Ex1, Ch 4 Ex1, Ch 7 Ex1, Ch 9 Ex1           |
| Reasoning Receipt format         | Ch 1 Ex1     | Ch 2 Ex2, Ch 5 Ex1, Ch 6 Ex2, Ch 8 Ex2, Ch 9 Ex2 |
| Question Formulation skill       | Ch 1         | Ch 2 (chapter-level), Ch 10 Ex1                  |
| Error Taxonomy                   | Ch 2 Ex1     | Ch 3 Ex1, Ch 5 Ex1, Ch 6 Ex3, Ch 9 Ex2           |
| Confidence Calibration           | Ch 2 Ex4     | Ch 9 Ex1, Ch 9 Ex4                               |
| Cascade Map technique            | Ch 3 Ex1     | Ch 7 Ex3, Ch 8 Ex3, Ch 9 Ex3                     |
| Assumption Autopsy technique     | Ch 4 Ex3     | Ch 8 Ex3, Ch 9 Ex3                               |
| Rebuild Under Constraints        | Ch 4 Ex4     | Ch 7 Ex2, Ch 9 Ex3                               |
| Audience Analysis skill          | Ch 5 Ex1     | Ch 7 Ex3, Ch 10 Ex3                              |
| Live Adaptation skill            | Ch 5 Ex2     | Ch 7 Ex3, Ch 10 Ex3                              |
| Collaboration Log format         | Ch 6 Ex2     | Ch 8 Ex2, Ch 9 Ex2, Ch 10 Ex2                    |
| Override instinct                | Ch 6 Ex3     | All future AI interactions                       |
| Stakeholder Cost Matrix          | Ch 7 Ex4     | Parts 5-10 (future reference)                    |
| Adversarial Defence              | Ch 7 Ex2     | Ch 9 Ex3                                         |
| Creation Log / 3-draft evolution | Ch 8 Ex2,Ex4 | Default workflow for Parts 2-10                  |
| Reversal Trigger concept         | Ch 9 Ex1     | Parts 2-10 (future reference)                    |
| Decision Audit                   | Ch 9 Ex4     | Meta-cognitive skill for all projects            |
| Personal Learning Framework      | Ch 10 Ex4    | Operating system for Parts 2-10                  |

### Link Format for Building On

When a "Building On" reference points to a chapter within Part 0, use relative paths:

```markdown
:::note Building On Previous Chapters
You will use the **Prediction Lock** format from
[Chapter 1, Exercise 1](../02-asking-better-questions/01-prediction-lock.md).
:::
```

When referencing forward to Parts 1-10 (future chapters), use text only — no link:

```markdown
The **Reversal Trigger** concept applies to every architectural and design decision
in Parts 2-10 of this book.
```

---

## 5. Feedback Challenge Protocol

This protocol appears in the introduction and is referenced by all chapters. Writers should NOT repeat the full protocol in each chapter — instead reference it:

> If AI feedback seems wrong, use the Feedback Challenge Protocol described in the
> [Introduction](../01-introduction/01-why-this-part-comes-first.md#feedback-challenge-protocol).

The protocol itself (for the intro writer):

1. Identify the specific feedback point you disagree with
2. Write your counter-argument (100-150 words)
3. Submit counter-argument to AI: "I disagree with your evaluation on [point]. Here is my counter-argument: [paste]. Either defend your original evaluation with specific reasoning or acknowledge the error."
4. Include the full exchange in your portfolio
5. This is graded as bonus evidence of critical thinking

---

## 6. Solo Learner Alternative Pattern

Every exercise that involves peer interaction includes a Solo Learner Alternative. The source draft marks these with a solo icon. Writers convert to:

```markdown
:::tip Solo Learner Alternative
[Alternative exercise instructions using AI to simulate peer role]
:::
```

### When Solo Alternatives Appear

- Question tournaments (Ch 1 Ex2) — AI generates partner questions
- Live defence (Ch 1 Ex4, Ch 3 Ex4) — AI plays tough examiner
- Cross-examination (Ch 2 Ex3) — AI plays adversarial reviewer
- Peer communication (Ch 5 Ex2) — record yourself, then AI Q&A
- Hard conversation (Ch 5 Ex3) — AI plays difficult stakeholder
- Stakeholder swap (Ch 7 Ex3) — AI plays each stakeholder role
- Teach-back (Ch 10 Ex3) — record teaching, AI plays student

---

## 7. Exercise Structure Pattern

Every exercise lesson follows this structure (in this order):

1. **YAML frontmatter** (full template from architecture spec)
2. **Title** (`# Exercise Title`)
3. **Layers Used** line (e.g., "**Layers Used:** Layer 1 (Predict Before You Prompt), Layer 2 (Reasoning Receipt)")
4. **Building On** admonition (if this exercise references earlier skills — check dependency map)
5. **What You Do** section — clear instructions for the exercise
6. **Scenario Selector** (if this exercise has scenario variants — Tabs component)
7. **Your Deliverable** admonition (`:::info`)
8. **AI Check Prompt** code block (with copy button, ending with Score Card request)
9. **Deliverable Template** collapsible (if the source draft includes one)
10. **What This Teaches You** section — 1 paragraph explaining the learning outcome
11. **Solo Learner Alternative** tip (if this exercise has peer interaction)

For the **final exercise** (Exercise 4) of each chapter, also append: 12. **Chapter Deliverable** admonition (summarizing the full chapter portfolio) 13. **Grading Criteria** collapsible

---

## 8. Content Preservation Rules

- **Preserve all AI Check prompts verbatim** from the source draft. Do not rewrite, shorten, or "improve" them. These are carefully designed assessment instruments.
- **Preserve all scenario text verbatim**. The scenarios are intentionally written — do not substitute.
- **Preserve all deliverable template content**. Reformat from pipe-tables to markdown but keep content identical.
- **Preserve layer assignments**. Each exercise specifies which layers it uses — keep these exact.
- **Preserve grading percentages**. The source draft includes specific percentage breakdowns per chapter — keep exact.
- **The prose sections ("What You Do", "What This Teaches You", "The Core Skill")** can be lightly reformatted for MDX but should not have content changed. The source draft has been carefully written — do not add, remove, or rephrase.
- **Do not add "Try With AI" sections.** Part 0 already has AI Check prompts built into every exercise — these serve the same purpose. Adding Try With AI on top would be redundant.
- **Do not add Flashcards or Quiz components.** Part 0 has its own assessment system (Thinking Score Card).
