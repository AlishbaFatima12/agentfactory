# Component API Design: ExercisePrompt + PromptField

## Overview

Two new MDX components that replace the static `text` code block in each lesson's "AI Check Prompt" section with an interactive, fill-in-the-blank prompt builder.

---

## ExercisePrompt

The top-level wrapper. One per exercise per lesson file.

### Props

```typescript
interface ExercisePromptProps {
  /** Unique ID for this exercise. Used as localStorage namespace and context key.
   *  Convention: kebab-case matching the lesson slug, e.g. "prediction-lock" */
  id: string;

  /** AI providers to show as buttons.
   *  Order determines button order. First item is visually primary. */
  provider: ("chatgpt" | "claude" | "gemini")[];

  /** MDX children: mixed prose + <PromptField> components */
  children: React.ReactNode;
}
```

### Behavior

1. Renders children as a styled card with a light background border (visually distinct from regular lesson content).
2. Walks the React children tree to discover all `<PromptField>` components and tracks their values via internal `Map<string, string>` state.
3. Renders provider buttons below the prompt body.
4. Manages localStorage persistence for all field values.

### State Management

```typescript
// Internal state — NOT exported. Shared via ExercisePromptContext.
const [fieldValues, setFieldValues] = useState<Map<string, string>>(() => {
  // Hydrate from localStorage on mount
  return hydrateFromStorage(id);
});
```

Field updates flow **upward** from PromptField via a callback:

```typescript
const updateField = useCallback((name: string, value: string) => {
  setFieldValues((prev) => {
    const next = new Map(prev);
    next.set(name, value);
    return next;
  });
}, []);
```

### Prompt Composition Strategy

When a provider button is clicked, the component composes the full prompt string:

1. Walk the children tree in render order.
2. For each text node: emit its text content as-is.
3. For each `<PromptField>`: substitute the current value from `fieldValues` map. If empty, substitute the placeholder text wrapped in brackets (e.g., `[Your prediction and reasoning...]`).
4. Join all segments with no extra whitespace (the MDX content already has proper spacing).

```typescript
function composePrompt(
  children: React.ReactNode,
  fieldValues: Map<string, string>,
): string {
  // Recursive walk of React element tree
  // Text nodes → emit raw text
  // PromptField elements → emit fieldValues.get(name) || `[${placeholder}]`
  // Other elements → recurse into their children
}
```

### Provider Button Behavior

Three buttons rendered in a row. All are disabled until at least one PromptField has content.

| Provider | Click Behavior                                                                 |
| -------- | ------------------------------------------------------------------------------ |
| ChatGPT  | `window.open("https://chatgpt.com/?q=" + encodeURIComponent(prompt))`          |
| Claude   | `window.open("https://claude.ai/new?q=" + encodeURIComponent(prompt))`         |
| Gemini   | `window.open("https://gemini.google.com/app?q=" + encodeURIComponent(prompt))` |

**URL Length Fallback**: If `encodeURIComponent(prompt).length > 6000`:

- Copy prompt to clipboard instead
- Show toast: "Prompt copied to clipboard -- paste into [Provider name]"
- Still open the provider URL (without `?q=`)

This applies to ALL providers uniformly, not just Claude. The spec's note about Claude lacking URL pre-fill was corrected in the Design Findings -- all three support `?q=`.

### localStorage Persistence

**Key structure**: `exercise_prompt:{id}:{fieldName}`

Examples:

- `exercise_prompt:prediction-lock:prediction_1`
- `exercise_prompt:prediction-lock:prediction_2`

**Debounce**: 500ms debounce on writes. Each keystroke resets the timer. Only the final value after 500ms of inactivity is persisted.

**Hydration**: On mount, read all keys matching `exercise_prompt:{id}:*` pattern. Since localStorage has no prefix scan, store a manifest key:

```
exercise_prompt:{id}:__fields = JSON.stringify(["prediction_1", "prediction_2"])
```

Updated whenever a new field name is encountered. On hydration, read the manifest, then read each field key.

**Clear button**: ExercisePrompt renders a small "Clear all" link that removes all keys for this exercise ID and resets state.

---

## PromptField

An inline textarea that renders within the ExercisePrompt prompt text.

### Props

```typescript
interface PromptFieldProps {
  /** Unique field name within this ExercisePrompt. Used as localStorage suffix
   *  and as the key in the fieldValues map. Convention: snake_case matching
   *  the placeholder's semantic meaning, e.g. "prediction_1", "scenario" */
  name: string;

  /** Placeholder text shown when empty. Also used as the fallback
   *  in prompt composition when the field has no value. */
  placeholder: string;

  /** Optional label shown above the textarea. If omitted,
   *  the placeholder is used as the label. */
  label?: string;

  /** Number of visible rows. Default: 3. Range: 1-10. */
  rows?: number;
}
```

### Behavior

1. Renders as a styled `<textarea>` with a label above it.
2. On change, calls the `updateField` callback from the nearest ExercisePromptContext.
3. On mount, reads its initial value from the context's fieldValues map (already hydrated from localStorage).
4. Auto-resizes vertically as content grows (up to a max-height, then scrolls).

### Rendering

```tsx
<div className={styles.promptField}>
  <label className={styles.fieldLabel}>{label || placeholder}</label>
  <textarea
    className={styles.fieldTextarea}
    value={value}
    onChange={(e) => updateField(name, e.target.value)}
    placeholder={placeholder}
    rows={rows ?? 3}
  />
</div>
```

---

## CSS Module Design

File: `src/components/ExercisePrompt/ExercisePrompt.module.css`

### Principles

1. **Card container**: Subtle border + background to distinguish from lesson prose. Light mode: `--ifm-color-emphasis-100` bg. Dark mode: `--ifm-color-emphasis-200` bg.
2. **Prompt text**: Normal body font. The prompt reads like a document with textarea holes in it.
3. **Field textareas**: Slightly inset with a dotted border. Focus ring uses the primary color.
4. **Provider buttons**: Row of pill-shaped buttons with provider icons. Disabled state = 50% opacity.
5. **Clear link**: Small, right-aligned, muted text. Not a button.
6. **Responsive**: On mobile (<768px), provider buttons stack vertically.

No inline styles. All theming via CSS custom properties from Docusaurus/Infima.

---

## MDX Registration

In `src/theme/MDXComponents.tsx`, add:

```typescript
import ExercisePrompt from "@/components/ExercisePrompt";
import PromptField from "@/components/ExercisePrompt/PromptField";

export default {
  ...MDXComponents,
  // ... existing registrations ...
  ExercisePrompt,
  PromptField,
};
```

Both components are registered at the top level so MDX files can use them without import statements.

---

## File Structure

```
src/components/ExercisePrompt/
├── index.tsx                      # ExercisePrompt component
├── PromptField.tsx                # PromptField component
├── ExercisePrompt.module.css      # Styles
├── usePromptComposer.ts           # composePrompt() + URL generation
└── useFieldPersistence.ts         # localStorage read/write with debounce
```

---

## Edge Cases

| Case                                        | Handling                                                                                                                                      |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| No fields filled, button clicked            | Buttons disabled (greyed out with tooltip "Fill in at least one field")                                                                       |
| Extremely long prompt (>6000 chars encoded) | Clipboard fallback + toast for ALL providers                                                                                                  |
| Page with no ExercisePrompt                 | Context returns null gracefully; SubmissionDialog falls back to manual entry                                                                  |
| Multiple ExercisePrompt on one page         | Each has its own `id` namespace. Context uses the LAST rendered one for SubmissionDialog pre-fill (only one exercise per lesson in practice). |
| SSR / Server render                         | Wrap textarea reads in `BrowserOnly` or `useEffect` hydration. Initial render shows empty fields (placeholder visible).                       |
| Student clears browser storage              | Fields reset to empty. No data loss beyond convenience.                                                                                       |
