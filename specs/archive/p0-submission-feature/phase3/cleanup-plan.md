# Phase 3 Cleanup Plan

What gets removed, what stays, and how the wiring changes.

---

## Files to DELETE

### 1. `apps/learn-app/src/components/ExercisePrompt/` (entire directory)

Delete all 5 files:

- `index.tsx`
- `PromptField.tsx`
- `useFieldPersistence.ts`
- `usePromptComposer.ts`
- `ExercisePrompt.module.css`

**Why**: All functionality merged into `AICheck/`. The `usePromptComposer.ts` pure functions (`composePrompt`, `getProviderAction`) should be copied into AICheck before deletion (or extracted to a shared util if we want to keep them importable).

### 2. `apps/learn-app/src/contexts/ExercisePromptContext.tsx`

Delete the entire file.

**Why**: ExercisePromptContext existed solely to bridge ExercisePrompt (in MDX) to SubmissionDialog (in DocItem/Content). AICheck is self-contained — it composes the prompt, collects the AI response, and submits, all within one component. No cross-component context needed.

---

## Files to KEEP (with modifications)

### 3. `apps/learn-app/src/theme/SubmissionDialog/` (KEEP as fallback)

**Keep both files**:

- `index.tsx`
- `SubmissionDialog.module.css`

**Modification needed**: Remove the `useExercisePrompt()` dependency. Since ExercisePromptContext is being deleted, SubmissionDialog must work standalone.

Changes in `index.tsx`:

```diff
- import { useExercisePrompt } from "@/contexts/ExercisePromptContext";
  ...
- const exercisePrompt = useExercisePrompt();
  ...
  const handleOpen = useCallback(() => {
    setState("open");
    setErrorMessage("");
-   // Auto-fill from ExercisePrompt if available and student hasn't typed yet
-   if (exercisePrompt?.composedPrompt && studentInput.trim() === "") {
-     setStudentInput(exercisePrompt.composedPrompt);
-     setPreFilled(true);
-     // Focus AI output field after dialog opens
-     setTimeout(() => aiOutputRef.current?.focus(), 100);
-   }
- }, [exercisePrompt, studentInput]);
+ }, []);
```

Also remove the `preFilled` state and `preFillBadge` rendering since they depended on ExercisePromptContext.

**Why keep it**: SubmissionDialog still serves pages that have `submission:` frontmatter but no `<AICheck>` in the MDX body. This is the fallback path — the old bottom-of-page submit button for any lesson that hasn't been converted to the AICheck pattern.

---

## Lines to REMOVE from `DocItem/Content/index.tsx`

### Remove ExercisePromptContext imports and wiring

```diff
  // Line 35-39: Remove context imports
- import {
-   ExercisePromptContext,
-   ExercisePromptSetterContext,
-   type ExercisePromptContextType,
- } from "@/contexts/ExercisePromptContext";

  // Line 747-748: Remove context state
- const [exercisePromptState, setExercisePromptState] =
-   useState<ExercisePromptContextType | null>(null);
```

### Remove context providers (2 locations — both render branches)

**Branch 1** (no summary, lines ~754-881):

```diff
- <ExercisePromptSetterContext.Provider value={setExercisePromptState}>
-   <ExercisePromptContext.Provider value={exercisePromptState}>
      ... (all the content stays, just unwrap the providers)
-   </ExercisePromptContext.Provider>
- </ExercisePromptSetterContext.Provider>
```

**Branch 2** (with summary, lines ~889-1014):

```diff
- <ExercisePromptSetterContext.Provider value={setExercisePromptState}>
-   <ExercisePromptContext.Provider value={exercisePromptState}>
      ... (all the content stays, just unwrap the providers)
-   </ExercisePromptContext.Provider>
- </ExercisePromptSetterContext.Provider>
```

### Keep SubmissionDialog rendering

The SubmissionDialog rendering at lines ~848-853 and ~984-989 stays as-is:

```tsx
{submissionConfig ? (
  <SubmissionDialog
    chapterSlug={chapterSlug}
    lessonSlug={lessonSlug}
    submission={submissionConfig}
  />
) : (
  isLeafPage && (
    <LessonCompleteButton ... />
  )
)}
```

This continues to work for non-AICheck pages. Pages with `<AICheck>` in their MDX body handle submission inline — they won't have `submission:` frontmatter, so this branch won't render for them.

---

## Changes to `MDXComponents.tsx`

### Remove old registrations, add new ones

```diff
- import ExercisePrompt from "@/components/ExercisePrompt";
- import PromptField from "@/components/ExercisePrompt/PromptField";
+ import AICheck from "@/components/AICheck";
+ import AICheckField from "@/components/AICheck/AICheckField";

  export default {
    ...MDXComponents,
    ...
-   // Interactive prompt builder for AI exercises
-   ExercisePrompt,
-   PromptField,
+   // Unified AI exercise check component
+   AICheck,
+   AICheckField,
    ...
  };
```

---

## Content Migration (41 lesson files)

Each lesson file needs two changes:

### 1. Remove `submission:` frontmatter

```diff
  ---
  sidebar_position: 2
  title: "Live Adaptation"
  ...
- submission:
-   type: text
-   accept: [text]
-   providers: [chatgpt, claude, gemini]
-   default_provider: chatgpt
-   xp_bonus: 50
  ---
```

**Why**: The `submission:` frontmatter triggers the SubmissionDialog at the bottom of the page. With AICheck, submission happens inline. Having both would create duplicate submit paths.

### 2. Convert ExercisePrompt to AICheck

Before:

```mdx
<ExercisePrompt id="live-adaptation" provider={["chatgpt", "claude", "gemini"]}>

I just completed a live communication adaptation exercise...

My pitch:

<PromptField
  name="pitch"
  placeholder="Paste your prepared pitch here..."
  rows={6}
/>

My adaptation:

<PromptField
  name="adaptation"
  placeholder="Paste your adaptation response here..."
  rows={4}
/>

</ExercisePrompt>
```

After:

```mdx
<AICheck id="live-adaptation" xp={50}>

I just completed a live communication adaptation exercise...

My pitch:

<AICheckField
  name="pitch"
  placeholder="Paste your prepared pitch here..."
  rows={6}
/>

My adaptation:

<AICheckField
  name="adaptation"
  placeholder="Paste your adaptation response here..."
  rows={4}
/>

Finally, complete the Thinking Score Card for this exercise:
Independent Thinking (1-10), Critical Evaluation (1-10),
Reasoning Depth (1-10), Originality (1-10), Self-Awareness (1-10).
For each score, give a one-sentence justification.

</AICheck>
```

Key differences:

- `<ExercisePrompt>` -> `<AICheck>`
- `provider={[...]}` prop removed (AICheck always shows all 3 providers)
- `xp={50}` added as prop (was in frontmatter before)
- `<PromptField>` -> `<AICheckField>`
- Score Card request text added at the end of the prompt template (so the AI knows to include scores in its response)

---

## Migration Checklist

1. [ ] Build `AICheck/` component (Task #2)
2. [ ] Register in `MDXComponents.tsx` (add AICheck + AICheckField)
3. [ ] Remove ExercisePromptContext provider from `DocItem/Content/index.tsx`
4. [ ] Remove ExercisePromptContext import from `SubmissionDialog/index.tsx`
5. [ ] Convert lesson files chapters 1-5 (Task #3)
6. [ ] Convert lesson files chapters 6-10 + thinking-baseline (Task #4)
7. [ ] Remove `ExercisePrompt/` directory
8. [ ] Remove `ExercisePromptContext.tsx`
9. [ ] Remove old MDXComponents registrations
10. [ ] Verify build passes: `pnpm nx build learn-app`
11. [ ] Verify localStorage migration works (old exercise_prompt keys -> aicheck keys)

**Order matters**: Steps 1-2 must happen before 5-6 (components must exist before content references them). Steps 7-9 must happen after 5-6 (old components must exist until all content is converted).
