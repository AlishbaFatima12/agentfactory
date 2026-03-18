# Per-Teammate Briefs

## Brief 1: Frontend Engineer (Task #2)

### Scope

Build the `ExercisePrompt` and `PromptField` components, the `ExercisePromptContext`, and wire them into the existing DocItem/Content and SubmissionDialog.

### Files to Create

| File                                                      | Purpose                             |
| --------------------------------------------------------- | ----------------------------------- |
| `src/components/ExercisePrompt/index.tsx`                 | ExercisePrompt component            |
| `src/components/ExercisePrompt/PromptField.tsx`           | PromptField component               |
| `src/components/ExercisePrompt/ExercisePrompt.module.css` | Styles                              |
| `src/components/ExercisePrompt/usePromptComposer.ts`      | Prompt composition + URL generation |
| `src/components/ExercisePrompt/useFieldPersistence.ts`    | localStorage debounced read/write   |
| `src/contexts/ExercisePromptContext.tsx`                  | Two-layer context (reader + setter) |

### Files to Modify

| File                                   | Changes                                                           |
| -------------------------------------- | ----------------------------------------------------------------- |
| `src/theme/MDXComponents.tsx`          | Register `ExercisePrompt` and `PromptField`                       |
| `src/theme/DocItem/Content/index.tsx`  | Add ExercisePromptSetterContext + ExercisePromptContext providers |
| `src/theme/SubmissionDialog/index.tsx` | Read from ExercisePromptContext, pre-fill `studentInput` on open  |

### Key Design Decisions (from component-api.md and context-design.md)

1. **Two-layer context**: `ExercisePromptSetterContext` (write, consumed by ExercisePrompt) + `ExercisePromptContext` (read, consumed by SubmissionDialog). State lives in DocItem/Content.
2. **Prompt composition**: Walk React children tree. Text nodes = emit text. PromptField = substitute value or `[placeholder]`.
3. **Provider buttons**: ChatGPT + Claude + Gemini. All use `?q=` URL pattern. Fallback to clipboard + toast when encoded URL > 6000 chars.
4. **localStorage keys**: `exercise_prompt:{id}:{fieldName}` with 500ms debounce. Manifest key `exercise_prompt:{id}:__fields`.
5. **SubmissionDialog pre-fill**: On `handleOpen`, if `exercisePrompt?.composedPrompt` exists and `studentInput` is empty, set it. Show "Auto-filled from exercise" badge.
6. **SSR safety**: Wrap localStorage access in `useEffect` or `BrowserOnly`. Initial render shows empty fields.

### Acceptance Criteria

- [ ] `<ExercisePrompt>` renders as a styled card with fields and provider buttons
- [ ] Provider buttons open correct URLs with composed prompt
- [ ] Fields persist to localStorage and hydrate on page reload
- [ ] SubmissionDialog auto-fills `studentInput` when ExercisePrompt has content
- [ ] Pages without ExercisePrompt work identically to today (null context gracefully handled)
- [ ] CSS respects dark mode and mobile breakpoints
- [ ] No new `import` statements in MDX files -- components registered in MDXComponents.tsx

### Reference Files

- `component-api.md` -- full props, state, composition algorithm
- `context-design.md` -- context shape, provider wiring, data flow
- `src/components/ExerciseCard/index.tsx` -- reference for MDX component pattern
- `src/contexts/PracticeContext.tsx` -- reference for context pattern
- `src/theme/SubmissionDialog/index.tsx` -- integration target

---

## Brief 2: Reference Converter (Task #3)

### Scope

Convert `01-asking-better-questions/01-prediction-lock.md` as the gold standard reference conversion. This single file is used by all other content teammates as their template.

### What To Do

1. Read `migration-rules.md` fully.
2. Read the current `01-prediction-lock.md` file.
3. Convert the AI Check Prompt code block to `<ExercisePrompt>` with `<PromptField>` components.
4. Leave EVERYTHING else in the file untouched (frontmatter, prose, Tabs, details block).
5. Verify the conversion matches the template in migration-rules.md.

### Specific Conversion for This File

- **id**: `"prediction-lock"`
- **provider**: `{["chatgpt", "claude", "gemini"]}`
- **Fields**: 2
  - `scenario` (rows=2): replaces `[paste scenario]`
  - `prediction_lock_document` (rows=6): replaces `[paste your prediction lock document]`
- **DO NOT touch**: The `[paste]` in the deliverable template `<details>` block (line 179)

### Acceptance Criteria

- [ ] Only the AI Check Prompt code block changed; all other content identical
- [ ] No `import` statements added
- [ ] MDX renders without errors
- [ ] The 2 PromptField components are properly placed within the ExercisePrompt

### Reference Files

- `migration-rules.md` -- full conversion template with before/after
- Current file: `apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/01-prediction-lock.md`

---

## Brief 3: Content Ch1-5 (Task #4)

### Scope

Convert all lesson files in chapters 1 through 5 (20 files) from static AI Check Prompt code blocks to interactive `<ExercisePrompt>` components.

### Files (in order)

**Ch1** (4 files): 01-prediction-lock (ALREADY DONE by reference converter -- skip), 02-question-tournament, 03-divergence-test, 04-live-defence

**Ch2** (4 files): 01-error-prediction, 02-contradiction-test, 03-build-it-break-it, 04-confidence-calibration

**Ch3** (4 files): 01-cascade-mapping, 02-human-vs-ai-systems-analysis, 03-variable-shift, 04-system-defence

**Ch4** (4 files): 01-blank-page-derivation, 02-first-principles-vs-ai, 03-assumption-autopsy, 04-rebuild-under-new-constraints

**Ch5** (4 files): 01-audience-prediction, 02-live-adaptation, 03-the-hard-conversation, 04-communication-retrospective

**Effective count**: 19 files (01/01 done by reference converter)

### Instructions

1. Read `migration-rules.md` for the full conversion template and field naming conventions.
2. Read the gold standard conversion of `01-prediction-lock.md` (produced by Task #3).
3. For each file:
   a. Read the file
   b. Locate the AI Check Prompt code block
   c. Convert following the template in migration-rules.md
   d. Use field names from the migration-rules.md table for this file
   e. Do NOT modify anything outside the code block
   f. Do NOT add import statements
   g. Do NOT touch `[paste]` in `<details>` deliverable template blocks
4. Run the validation checklist from migration-rules.md for each file.

### Constraints

- Exact prompt text preservation -- zero changes to evaluation instructions
- Field names must match the migration-rules.md table exactly
- `id` = filename slug (without `.md`)
- `provider` = `{["chatgpt", "claude", "gemini"]}` for all files
- No extra whitespace or formatting changes outside the converted block

### Acceptance Criteria

- [ ] 19 files converted (01/01 skipped)
- [ ] Each conversion matches migration-rules.md field names
- [ ] No prompt text modified
- [ ] No deliverable template `<details>` blocks modified
- [ ] No import statements added
- [ ] Gold standard reference checked before starting

---

## Brief 4: Content Ch6-10 + Extras (Task #5)

### Scope

Convert all lesson files in chapters 6 through 10, plus chapter 11 (2 files with submission), plus thinking-baseline.md. Total: 22 files.

### Files (in order)

**Ch6** (4 files): 01-three-path-comparison, 02-collaboration-log, 03-the-override-test, 04-dependency-audit

**Ch7** (4 files): 01-position-lock, 02-adversarial-defence, 03-stakeholder-swap, 04-cost-matrix

**Ch8** (4 files): 01-blank-page-sprint, 02-creation-log, 03-the-originality-test, 04-three-draft-evolution

**Ch9** (4 files): 01-sealed-decision, 02-ai-consultation, 03-information-drop, 04-decision-audit

**Ch10** (4 files): 01-learning-plan, 02-72-hour-sprint, 03-teach-it-back, 04-strategy-retrospective

**Ch11** (2 files): 01-portfolio-assembly, 02-growth-map

**Standalone** (1 file): thinking-baseline.md

**Total**: 23 files

### Instructions

Same as Brief 3 above, with these additions:

1. Read the gold standard conversion of `01-prediction-lock.md` first.
2. **Ch7 L02 (adversarial-defence)**: This file has 9 `[paste]` occurrences total but most are in the deliverable template. The AI Check Prompt itself has only 3 fields (dilemma, position_and_arguments, defence_summary). Only convert the AI Check Prompt block.
3. **Ch9 L03 (information-drop)**: Has a `[paste]` inside a solo learner tip admonition that is NOT part of the AI Check Prompt. Do not convert it.
4. **thinking-baseline.md**: Uses title "AI Baseline Check" instead of "AI Check Prompt". Same conversion rules. ID: `thinking-baseline`. Single field: `responses`.
5. **Ch11 L03 (calibrating-ai-prompts)**: Has NO submission config. Skip this file entirely.

### Constraints

Same as Brief 3.

### Acceptance Criteria

- [ ] 23 files converted
- [ ] adversarial-defence has exactly 3 PromptFields (not 9)
- [ ] information-drop solo learner `[paste]` untouched
- [ ] thinking-baseline uses id "thinking-baseline"
- [ ] calibrating-ai-prompts NOT modified
- [ ] Each conversion matches migration-rules.md field names
- [ ] No prompt text modified
- [ ] Gold standard reference checked before starting
