# Phase 2: Interactive Prompts + Shadow Evaluation

## Problem

Students currently copy exercise prompts from the book, paste into ChatGPT/Claude, get a response, then copy-paste both back into the submission dialog. Too much friction = lower completion rates.

## Three Layers

### Layer 1: Interactive Prompt Component

A new Docusaurus component `<ExercisePrompt>` that renders the exercise prompt with fill-in-the-blank fields. Student fills in their answers directly in the lesson page.

```mdx
<ExercisePrompt id="prediction-lock" provider={["chatgpt", "claude", "gemini"]}>

You are evaluating a student's baseline thinking skills. Here are their predictions:

**Prediction 1:** Will AI replace most software developers within 5 years?

<PromptField
  name="prediction_1"
  placeholder="Your prediction and reasoning..."
/>

**Prediction 2:** Will AI-generated code be trusted in production without review?

<PromptField
  name="prediction_2"
  placeholder="Your prediction and reasoning..."
/>

Evaluate using the Thinking Score Card (Independent Thinking, Critical Evaluation, Reasoning Depth, Originality, Self-Awareness) on a 1-10 scale.

</ExercisePrompt>
```

**Renders as:**

- The prompt text with inline textarea fields
- Student fills in their answers
- Below the prompt: "Ask ChatGPT" | "Ask Claude" | "Ask Gemini" buttons
- Clicking a button opens that platform with the COMPLETED prompt (fields filled in)

**"Ask in ChatGPT" implementation:**

- ChatGPT: `https://chatgpt.com/?q=URL_ENCODED_PROMPT` (verified to work)
- Claude: No URL pre-fill support — open claude.ai + copy to clipboard + toast "Prompt copied!"
- Gemini: `https://gemini.google.com/app?q=URL_ENCODED_PROMPT` (needs verification)

### Layer 2: Auto-Prefilled Submission

When the student clicks "Submit Your AI Check":

- `student_input` is auto-prefilled from the ExercisePrompt state (what they typed + the prompt template)
- Student only needs to paste the AI's response into the `ai_output` field
- Reduces submission from 2 copy-pastes to 1

**State flow:**

```
ExercisePrompt (lesson body) → fills student_input
  ↓ (React context or event)
SubmissionDialog (bottom of page) → student_input pre-filled, focus on ai_output
```

### Layer 3: Shadow Evaluation (Async)

After submission, our backend silently evaluates the same student_input using our own LLM.

**Flow:**

1. Student submits (instant XP, instant response — no latency change)
2. Backend enqueues a shadow evaluation task in Redis
3. Background worker picks it up, calls our LLM with the student_input
4. Stores result in `shadow_evaluation` JSONB column
5. Extracts shadow scores, stores in `shadow_scores` JSONB

**Data model addition:**

```sql
ALTER TABLE exercise_submissions ADD COLUMN shadow_evaluation JSONB;
ALTER TABLE exercise_submissions ADD COLUMN shadow_model VARCHAR(50);
ALTER TABLE exercise_submissions ADD COLUMN shadow_scores JSONB;
ALTER TABLE exercise_submissions ADD COLUMN shadow_evaluated_at TIMESTAMPTZ;
```

**What we compare over time:**

- `scores` (from external AI) vs `shadow_scores` (from our AI)
- Identify where external AIs over/under-score
- Identify where our AI disagrees
- Use disagreements to improve our evaluation prompt

## Files Affected

| Area         | Files                                    | Changes                                                     |
| ------------ | ---------------------------------------- | ----------------------------------------------------------- |
| Learn App    | `src/components/ExercisePrompt/`         | NEW component with PromptField subcomponent                 |
| Learn App    | `src/contexts/ExercisePromptContext.tsx` | NEW context to pass prompt state to SubmissionDialog        |
| Learn App    | `src/theme/SubmissionDialog/index.tsx`   | Read from ExercisePromptContext, pre-fill student_input     |
| Content      | 41 lesson .md files                      | Replace text prompts with `<ExercisePrompt>` MDX components |
| Progress API | `models/exercise.py`                     | Add shadow\_\* columns                                      |
| Progress API | `services/shadow_evaluator.py`           | NEW async worker that calls our LLM                         |
| Progress API | `migrations/004_shadow_evaluation.sql`   | Add columns                                                 |
| Redis        | Task queue                               | Shadow evaluation jobs                                      |

## Implementation Phases

### Phase 2A: Interactive Prompts + Ask Buttons (frontend only)

- Build ExercisePrompt component
- Verify ChatGPT/Gemini URL pre-fill
- Implement clipboard fallback for Claude
- Convert 5 exercise files as proof of concept

### Phase 2B: Auto-Prefill Submission

- ExercisePromptContext
- Wire SubmissionDialog to read from context
- Auto-fill student_input

### Phase 2C: Shadow Evaluation (backend)

- DB migration
- Redis task queue
- Shadow evaluator service
- LLM integration (which model? Claude API via our account?)

## Design Findings (from lesson analysis)

### Variable field count per exercise

- L1 (Prediction Lock): 2 fields — `[paste scenario]`, `[paste your work]`
- L2 (Question Tournament): 4 fields — `[paste scenario]`, `[paste my questions]`, `[paste partner's questions]`, `[paste comparison table]`
- Each `[paste ...]` becomes a `<PromptField name="..." label="...">`
- Component must handle 2-6 fields per exercise

### Solo Learner Alternative is orthogonal

- Solo option changes HOW students gather data (AI partner instead of human)
- It does NOT change the AI Check prompt — same fields, same evaluation criteria
- No need for conditional prompt rendering based on solo/pair mode

### Scenario Tabs

- L1 has `<Tabs>` with 3 scenarios (Business/Technical/Social)
- The selected scenario is pasted into `[paste scenario]` field
- ExercisePrompt could auto-fill the scenario field from the active tab selection
- This requires ExercisePrompt to detect which Tab is active (or user manually pastes)

### Claude URL pre-fill works

- Already used in codebase: `claude.ai/new?q=` (DocPageActions line 545)
- Spec was wrong — updated

## Open Questions

1. Should ExercisePrompt auto-detect the active Tab for scenario? Or just let the user paste?
2. localStorage persistence: yes — key structure `exercise_prompt:{docId}:{fieldName}` with 500ms debounce
3. URL length fallback: clipboard + toast when encoded prompt > 6000 chars
4. Phase 2C (shadow evaluation) deferred — not needed now
