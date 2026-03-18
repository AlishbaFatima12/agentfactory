# Context Design: ExercisePromptContext

## Overview

A React context that passes the composed prompt string from `<ExercisePrompt>` (rendered in the lesson body) down to `<SubmissionDialog>` (rendered at the bottom of the page). Mirrors the `PracticeContext` pattern exactly.

---

## Context Shape

```typescript
// src/contexts/ExercisePromptContext.tsx

import { createContext, useContext } from "react";

interface ExercisePromptContextType {
  /** The fully composed prompt string (template text + filled field values).
   *  Updated on every field change. null if no ExercisePrompt on page. */
  composedPrompt: string | null;

  /** The raw field values map. Keys = field names, values = student input.
   *  SubmissionDialog uses this to build the student_input payload. */
  fieldValues: Map<string, string>;

  /** Whether at least one field has non-empty content. */
  hasContent: boolean;
}

export const ExercisePromptContext =
  createContext<ExercisePromptContextType | null>(null);

export function useExercisePrompt(): ExercisePromptContextType | null {
  return useContext(ExercisePromptContext);
}
```

This mirrors `PracticeContext` exactly:

- `createContext<T | null>(null)` -- null default
- Named export for the context itself
- Hook that returns `T | null` (caller checks for null)

---

## Provider Location

The `ExercisePromptContext.Provider` wraps content inside `DocItem/Content/index.tsx`, **inside** the existing `PracticeContext.Provider`.

### Integration Point in DocItem/Content

```typescript
// In ContentWrapper component, alongside existing practiceContextValue:

const [exercisePromptValue, setExercisePromptValue] =
  useState<ExercisePromptContextType | null>(null);

// ExercisePrompt component calls this setter via a separate registration context
// (see "Registration Pattern" below)
```

### Registration Pattern

The problem: `ExercisePromptContext` needs to be provided by the DocItem wrapper, but the ExercisePrompt component renders inside `<Content>` (the MDX body). The component can't provide context to a sibling -- it needs to register upward.

Solution: **Two-layer context**, same pattern as PracticeContext.

1. **ExercisePromptRegistration context** (provided by DocItem):

   ```typescript
   interface ExercisePromptRegistration {
     register: (value: ExercisePromptContextType) => void;
   }
   ```

2. **ExercisePrompt component** (rendered in MDX body):
   - On mount and on every field change, calls `register()` with current state.

3. **DocItem/Content** receives the registered value and provides it via `ExercisePromptContext.Provider`.

Actually, this is over-engineering. Simpler approach:

### Simpler Approach: ExercisePrompt IS the Provider

`<ExercisePrompt>` wraps its children in `ExercisePromptContext.Provider`. But SubmissionDialog is rendered OUTSIDE ExercisePrompt, so it can't consume that context.

### Actual Solution: Lift State to DocItem via Callback Context

```typescript
// src/contexts/ExercisePromptContext.tsx

export interface ExercisePromptContextType {
  composedPrompt: string | null;
  fieldValues: Map<string, string>;
  hasContent: boolean;
}

// Read context -- consumed by SubmissionDialog
export const ExercisePromptContext =
  createContext<ExercisePromptContextType | null>(null);

export function useExercisePrompt(): ExercisePromptContextType | null {
  return useContext(ExercisePromptContext);
}

// Write context -- consumed by ExercisePrompt to push state up
export const ExercisePromptSetterContext = createContext<
  ((value: ExercisePromptContextType) => void) | null
>(null);

export function useExercisePromptSetter() {
  return useContext(ExercisePromptSetterContext);
}
```

### DocItem/Content Integration

```typescript
// In ContentWrapper (src/theme/DocItem/Content/index.tsx):

const [exercisePromptState, setExercisePromptState] =
  useState<ExercisePromptContextType | null>(null);

// Wrap content with both setter (for ExercisePrompt) and reader (for SubmissionDialog):
return (
  <PracticeContext.Provider value={practiceContextValue}>
    <ExercisePromptSetterContext.Provider value={setExercisePromptState}>
      <ExercisePromptContext.Provider value={exercisePromptState}>
        {/* ... existing content ... */}
        <Content {...props} />
        {/* ... SubmissionDialog reads from ExercisePromptContext ... */}
      </ExercisePromptContext.Provider>
    </ExercisePromptSetterContext.Provider>
  </PracticeContext.Provider>
);
```

### ExercisePrompt Component (writer)

```typescript
// In ExercisePrompt/index.tsx:
const setter = useExercisePromptSetter();

useEffect(() => {
  if (setter) {
    setter({
      composedPrompt: composePrompt(children, fieldValues),
      fieldValues,
      hasContent: Array.from(fieldValues.values()).some(
        (v) => v.trim().length > 0,
      ),
    });
  }
}, [fieldValues, setter, children]);

// Cleanup on unmount
useEffect(() => {
  return () => {
    if (setter) setter(null);
  };
}, [setter]);
```

---

## SubmissionDialog Integration

### Reading from Context

```typescript
// In SubmissionDialog/index.tsx:
import { useExercisePrompt } from "@/contexts/ExercisePromptContext";

export default function SubmissionDialog({ ... }: SubmissionDialogProps) {
  const exercisePrompt = useExercisePrompt();

  // Pre-fill student_input when dialog opens
  const handleOpen = useCallback(() => {
    setState("open");
    setErrorMessage("");

    // Auto-fill from ExercisePrompt if available
    if (exercisePrompt?.composedPrompt && studentInput.trim() === "") {
      setStudentInput(exercisePrompt.composedPrompt);
    }
  }, [exercisePrompt, studentInput]);

  // ... rest unchanged
}
```

### What Changes in SubmissionDialog

1. **Step 1 label**: Changes from "Paste your prompt + answers here..." to "Your prompt has been pre-filled from the exercise above. Review and edit if needed." when `exercisePrompt?.hasContent` is true.
2. **Textarea**: Pre-filled but still editable. Student can modify the composed prompt.
3. **Step 2 (AI output)**: Unchanged -- student still pastes the AI response manually.
4. **Visual indicator**: When pre-filled, show a small "Auto-filled from exercise" badge above the textarea that dismisses on first edit.

### No ExercisePrompt on Page (Graceful Null)

When `exercisePrompt` is `null`:

- SubmissionDialog works exactly as it does today.
- No pre-fill, no badge, no changed labels.
- This is the case for all lessons until they are converted to use `<ExercisePrompt>`.

This means Phase 2B (context wiring) can be deployed before any content files are converted. The existing manual workflow continues working.

---

## Data Flow Summary

```
Page Load
  └─ DocItem/Content renders
       ├─ ExercisePromptSetterContext.Provider (setter callback)
       │   └─ ExercisePromptContext.Provider (null initially)
       │       ├─ Content (MDX body)
       │       │   └─ <ExercisePrompt> renders
       │       │       ├─ Hydrates fieldValues from localStorage
       │       │       ├─ Calls setter() with initial state
       │       │       └─ <PromptField> renders textareas
       │       │
       │       └─ <SubmissionDialog> reads ExercisePromptContext
       │           └─ composedPrompt is null until ExercisePrompt mounts
       │           └─ Once mounted: composedPrompt available for pre-fill

Student Types in PromptField
  └─ PromptField calls updateField (ExercisePrompt internal state)
       └─ ExercisePrompt recomposes prompt string
            └─ Calls setter() with new ExercisePromptContextType
                 └─ DocItem state updates
                      └─ ExercisePromptContext.Provider re-renders
                           └─ SubmissionDialog has fresh composedPrompt

Student Clicks "Submit Your AI Check"
  └─ SubmissionDialog.handleOpen()
       └─ Reads exercisePrompt.composedPrompt
            └─ Pre-fills studentInput textarea
                 └─ Student pastes AI output into step 2
                      └─ Submits (unchanged from today)
```

---

## Migration Safety

- **Backward compatible**: Pages without `<ExercisePrompt>` work identically to today.
- **Incremental rollout**: Convert one lesson at a time. Each converted lesson gets the interactive experience; unconverted lessons keep the manual flow.
- **No database changes**: All state is client-side (React state + localStorage).
- **No API changes**: SubmissionDialog submits the same payload shape regardless of source.
