# Phase 3: Unified AICheck Component

## Problem

Phase 2's ExercisePrompt + SubmissionDialog is 7 steps across 2 components.
Adoption projected at <1%. Students won't copy-paste between ChatGPT and a
separate submit dialog at the bottom of the page.

## Design Principle

The paste-back IS the reveal moment. Not a chore — a celebration.

## The Component: `<AICheck>`

One inline card that replaces BOTH ExercisePrompt and SubmissionDialog.
Everything happens in one place. No dialog. No scrolling.

### Visual Design

```
┌─────────────────────────────────────────────────┐
│  📝 AI Check                                    │
│                                                 │
│  ── Step 1: Your Work ──────────────────────── │
│  Scenario:                                      │
│  ┌─────────────────────────────────────────┐    │
│  │ [paste scenario or auto-fill from tab]  │    │
│  └─────────────────────────────────────────┘    │
│  Your prediction lock document:                 │
│  ┌─────────────────────────────────────────┐    │
│  │ [student types/pastes their work]       │    │
│  │                                         │    │
│  └─────────────────────────────────────────┘    │
│                                                 │
│  ── Step 2: Get Your Score ─────────────────── │
│  Discuss with an AI. Question your scores.      │
│  Come back when you have your BEST evaluation.  │
│                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐     │
│  │ ChatGPT ↗│  │ Claude ↗ │  │ Gemini ↗ │     │
│  └──────────┘  └──────────┘  └──────────┘     │
│                                                 │
│  ── Step 3: Paste AI's Evaluation ──────────── │
│  ┌─────────────────────────────────────────┐    │
│  │ [paste the AI's complete response]      │    │
│  │                                         │    │
│  └─────────────────────────────────────────┘    │
│                                                 │
│  ┌─────────────────────────────────────────┐    │
│  │         Submit — 50 XP                  │    │
│  └─────────────────────────────────────────┘    │
│                                                 │
│  ── After Submit ──────────────────────────── │
│  ┌─ Thinking Score Card ───────────────────┐   │
│  │ Independent Thinking  ████████░░  8/10  │   │
│  │ Critical Evaluation   ██████░░░░  6/10  │   │
│  │ Reasoning Depth       █████░░░░░  5/10  │   │
│  │ Originality           ███████░░░  7/10  │   │
│  │ Self-Awareness        ████░░░░░░  4/10  │   │
│  │ ─────────────────────────────────────── │   │
│  │ Average               ██████░░░░  6.0   │   │
│  └─────────────────────────────────────────┘   │
│  ✓ Submitted  +50 XP                           │
└─────────────────────────────────────────────────┘
```

### State Machine

```
idle → filling → ready-to-ask → asked → pasting → submitting → submitted
```

- **idle**: Empty card, Step 1 fields visible
- **filling**: Student is typing in Step 1 fields
- **ready-to-ask**: Step 1 has content, provider buttons are active
- **asked**: Student clicked a provider button (opens new tab). Step 2 shows
  "You opened ChatGPT ✓ — paste the response when ready"
- **pasting**: Student is typing/pasting in the AI response field
- **submitting**: API call in progress, spinner on button
- **submitted**: Score Card with animated bars + XP earned

### Progressive Disclosure

Steps collapse as the student progresses:
- When Step 1 fields are filled and Step 2 is started: Step 1 collapses to
  a summary line ("Scenario: retail company... | Your work: 426 chars")
- When AI response is pasted: Step 2 collapses to "Evaluated via ChatGPT ✓"
- After submit: everything collapses to the Score Card + XP badge

### Key UX Decisions

1. **No dialog** — everything inline in the lesson body
2. **Provider buttons open new tab** — student has the full ChatGPT/Claude
   experience, not a constrained iframe
3. **"Come back when you have your BEST score"** — drives the Part 0
   pedagogical loop (question → improve → re-evaluate)
4. **Score Card is the celebration** — animated bars, not re-displayed AI prose
5. **One-time submit** — button changes to "Submitted" after first submission
6. **localStorage persists all fields** — student can leave and come back
7. **Feedback field is GONE** — it added friction for minimal value. If we
   want feedback later, add it as a post-submit micro-survey.
8. **Provider selector is the buttons themselves** — no separate dropdown.
   Whichever button they click = that's the provider recorded.

### What Gets Sent to the API

Same `POST /api/v1/exercise/submit` endpoint. No backend changes needed.

```json
{
  "chapter_slug": "01-asking-better-questions",
  "lesson_slug": "01-prediction-lock",
  "evidence": {
    "type": "text",
    "provider": "chatgpt",
    "student_input": "[composed prompt with filled fields]",
    "ai_output": "[pasted AI response]"
  }
}
```

### What Gets Replaced

- `<ExercisePrompt>` — REMOVED, merged into `<AICheck>`
- `<PromptField>` — REMOVED, becomes `<AICheckField>` inside `<AICheck>`
- `SubmissionDialog` at page bottom — REMOVED for pages with `<AICheck>`.
  Still shows on pages with `submission:` frontmatter but NO `<AICheck>`.
- `ExercisePromptContext` — REMOVED, no longer needed (everything is one component)
- The old `text` code block AI Check Prompt — already converted in Phase 2,
  now re-convert to `<AICheck>` format

### MDX Usage

```mdx
<AICheck id="prediction-lock" xp={50}>

I am a student learning question formulation. Below is a business scenario,
followed by my initial diagnosis and 10 ranked diagnostic questions.
Please evaluate:

(1) Rate each of my 10 questions on a scale of 1-10 for diagnostic power --
    how likely is this question to reveal the root cause?
(2) Identify which of my questions are too vague, too narrow, or redundant.
(3) Suggest 3 questions I missed that would have been more diagnostic than
    my weakest 3.
(4) Evaluate my ranking -- did I put the highest-value questions at the top?
(5) Rate my overall question formulation skill from
    Beginner / Developing / Proficient / Advanced and explain why.

Here is the scenario:
<AICheckField name="scenario" placeholder="Paste your chosen scenario here..." rows={2} />

Here is my work:
<AICheckField name="work" placeholder="Paste your prediction lock document here..." rows={6} />

Finally, complete the Thinking Score Card for this exercise:
Independent Thinking (1-10), Critical Evaluation (1-10),
Reasoning Depth (1-10), Originality (1-10), Self-Awareness (1-10).
For each score, give a one-sentence justification.

</AICheck>
```

### Freemium Strategy

- **Free tier (now):** Students use their own ChatGPT/Claude accounts.
  We collect student_input + external AI response = training data.
- **Paid tier (future):** "Get Instant Score" button appears. Our AI
  evaluates. No copy-paste needed. Premium UX.
- **Data moat:** 20,500 frontier model evaluations as comparison baseline
  for training our own evaluator.

## Files Affected

| Area | Files | Change |
|------|-------|--------|
| Learn App | `src/components/AICheck/` | NEW unified component |
| Learn App | `src/components/ExercisePrompt/` | DELETE (merged into AICheck) |
| Learn App | `src/contexts/ExercisePromptContext.tsx` | DELETE (not needed) |
| Learn App | `src/theme/MDXComponents.tsx` | Replace ExercisePrompt/PromptField with AICheck/AICheckField |
| Learn App | `src/theme/DocItem/Content/index.tsx` | Remove ExercisePromptContext, keep SubmissionDialog for fallback |
| Learn App | `src/theme/SubmissionDialog/` | KEEP as fallback for non-AICheck pages |
| Content | 41 lesson .md files | Re-convert from ExercisePrompt to AICheck |
| Backend | None | Same API, no changes |
