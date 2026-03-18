# AICheck Component Design

## Overview

One inline card that replaces BOTH `ExercisePrompt` and `SubmissionDialog`. Everything happens in-place in the lesson body. No modal dialog. No scrolling to a separate submit button at the bottom.

---

## State Machine

```
                       ┌────────────────────────────────────────────┐
                       │                                            │
   ┌──────┐   type   ┌───────┐   all fields  ┌───────────┐        │
   │ idle │ ───────► │filling│ ────────────► │ready-to-ask│        │
   └──────┘          └───────┘   filled      └─────┬──────┘        │
      ▲                  ▲                         │               │
      │                  │ clear                   │ click         │
      │                  │ all                     │ provider      │
      │              ┌───┴───┐                     ▼               │
      │              │       │              ┌──────────┐           │
      │              │       │              │  asked   │           │
      │              │       │              └────┬─────┘           │
      │              │       │                   │ paste           │
      │              │       │                   ▼                 │
      │              │       │              ┌──────────┐           │
      │              │       │              │ pasting  │           │
      │              │       │              └────┬─────┘           │
      │              │       │                   │ click submit    │
      │              │       │                   ▼                 │
      │              │       │              ┌───────────┐          │
      │              │       │              │submitting │          │
      │              │       │              └─────┬─────┘          │
      │              │       │                    │                │
      │              │       │           ┌────────┴────────┐      │
      │              │       │           ▼                 ▼      │
      │              │       │    ┌───────────┐      ┌─────────┐  │
      │              │       │    │ submitted │      │  error  │──┘
      │              │       │    └───────────┘      └─────────┘
      │              │       │                         retry
      │              └───────┘
      │
      │ (already_submitted on mount)
      ├────────────────────────────────► submitted
```

### State Definitions

| State          | Description                                                                            | Visible UI                                                                                                                            |
| -------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `idle`         | Component mounted, no interaction yet. Fields are empty or hydrated from localStorage. | Step 1 fields visible, provider buttons disabled.                                                                                     |
| `filling`      | Student is typing in at least one `<AICheckField>`.                                    | Step 1 fields visible, provider buttons disabled until all required fields have content.                                              |
| `ready-to-ask` | All `<AICheckField>` children have non-empty values.                                   | Provider buttons become active (enabled + subtle pulse animation). Step 1 fields remain editable.                                     |
| `asked`        | Student clicked a provider button. New tab opened to ChatGPT/Claude/Gemini.            | Step 1 collapses to summary line. Step 2 shows "Opened {Provider}" confirmation + AI response textarea. Provider recorded internally. |
| `pasting`      | Student has started typing/pasting in the AI response textarea (Step 3).               | Step 2 confirmation persists. Submit button becomes visible (disabled until 50+ chars).                                               |
| `submitting`   | API call in flight.                                                                    | Submit button shows spinner. All fields disabled.                                                                                     |
| `submitted`    | API returned success.                                                                  | Everything collapses to Score Card + XP badge. "Clear all" hidden.                                                                    |
| `error`        | API returned error.                                                                    | Error banner with "Try again" button. Fields remain filled.                                                                           |

### Transition Guards

- `idle -> filling`: Any field receives input (automatic).
- `filling -> ready-to-ask`: Every `<AICheckField>` has `value.trim().length > 0`.
- `ready-to-ask -> asked`: Provider button clicked. Records `selectedProvider`. Opens new tab.
- `asked -> pasting`: AI response textarea receives any input.
- `pasting -> submitting`: Submit button clicked. Guard: `aiOutput.trim().length >= 50` and `studentInput.length <= 25000` and `aiOutput.length <= 25000`.
- `submitting -> submitted`: API 200 response.
- `submitting -> error`: API non-200 or network error.
- `error -> asked`: "Try again" clicked (resets to asked state, preserves fields).

### Special: Already Submitted

On mount, if `isLessonCompleted(chapterSlug, lessonSlug)` returns true, skip straight to `submitted` state with a static "Already submitted" display (no animated bars, no XP pop — just the checkmark + "Exercise Submitted").

---

## Component Architecture

### Props

```tsx
interface AICheckProps {
  id: string; // Unique exercise ID, used for localStorage keys
  xp?: number; // XP reward, defaults to 50
  children: ReactNode; // Prose template + <AICheckField> components
}

interface AICheckFieldProps {
  name: string; // Field key (used in localStorage and prompt composition)
  placeholder: string; // Placeholder text in textarea
  rows?: number; // Textarea rows, default 3, clamped 1-10
  label?: string; // Optional label override (defaults to placeholder)
}
```

### Internal State

```tsx
// All managed inside AICheck — no external context needed
const [fieldValues, setFieldValues] = useState<Map<string, string>>(() =>
  hydrateFromStorage(id),
);
const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
const [aiOutput, setAiOutput] = useState("");
const [state, setState] = useState<AICheckState>("idle");
const [response, setResponse] = useState<ExerciseSubmitResponse | null>(null);
const [errorMessage, setErrorMessage] = useState("");
```

### Deriving chapter/lesson slugs

AICheck needs `chapterSlug` and `lessonSlug` for the API call. Two options:

**Option A (Recommended)**: Add a `useDocSlug()` hook that reads from Docusaurus `useDoc()`:

```tsx
function useDocSlug() {
  const { metadata } = useDoc();
  const slugPath = (metadata.slug || metadata.id).replace(/^\//, "");
  const segments = slugPath.split("/");
  return {
    lessonSlug: segments[segments.length - 1] || "",
    chapterSlug: segments.slice(0, -1).join("/"),
  };
}
```

This keeps AICheck declarative in MDX — no need to pass slugs as props.

**Option B**: Pass `chapterSlug` and `lessonSlug` as props in MDX. Rejected because it couples content authors to implementation details and creates a maintenance burden across 41 files.

---

## Progressive Disclosure Behavior

### Step 1: Your Work (always visible initially)

The prose template (`children`) renders inline with `<AICheckField>` components interspersed. This is the same visual pattern as `ExercisePrompt` today — a card containing prose with dashed-border textareas.

**Collapse trigger**: When the student clicks a provider button (transition to `asked`).

**Collapsed view**:

```
Step 1: Your work ── Scenario: retail company... | Your work: 426 chars  [Edit]
```

- Shows field names + truncated values (first 30 chars + char count)
- "[Edit]" link expands back to full view (transitions back to `ready-to-ask`)
- Collapsed with `max-height: 0` + `overflow: hidden` transition (not `display: none` — preserves textarea values in DOM)

### Step 2: Get Your Score (visible after filling)

Provider buttons row + instructional text. This section slides in after `ready-to-ask`.

```
── Step 2: Get Your Score ──────────────────────────────
Discuss with an AI. Question your scores.
Come back when you have your BEST evaluation.

┌──────────┐  ┌──────────┐  ┌──────────┐
│ ChatGPT  │  │  Claude  │  │  Gemini  │
└──────────┘  └──────────┘  └──────────┘
```

**After clicking provider** (transition to `asked`):

```
── Step 2: Evaluated ──────────────────────────────────
Opened ChatGPT ✓ — paste the AI's response below when ready
```

**Collapse trigger**: When AI response has 50+ characters (transition deep into `pasting`). Collapses to:

```
Step 2: Evaluated via ChatGPT ✓
```

### Step 3: Paste AI's Evaluation (visible after clicking provider)

Single large textarea for pasting the AI's complete response.

```
── Step 3: Paste AI's Evaluation ──────────────────────
┌─────────────────────────────────────────────────────┐
│ [paste the AI's complete response here]             │
│                                                     │
│                                                     │
└─────────────────────────────────────────────────────┘
                                          2,340/25,000

┌─────────────────────────────────────────────────────┐
│                Submit — 50 XP                       │
└─────────────────────────────────────────────────────┘
```

### After Submit: Score Card

Everything above collapses. Only the Score Card + XP badge remain visible.

---

## Provider Button UX

### Visual Design

Three buttons in a horizontal row, each with:

- Provider icon (SVG, 16x16, same icons from current ExercisePrompt)
- Provider name text
- External link indicator (small arrow icon from lucide `ExternalLink`)
- 1px border, 8px radius, matches existing `.providerBtn` style

### States

| Button State                       | Visual                                                   |
| ---------------------------------- | -------------------------------------------------------- |
| Disabled (fields empty)            | 40% opacity, `cursor: not-allowed`                       |
| Enabled (fields filled)            | Full opacity, hover shows primary border + slight lift   |
| Selected (this provider clicked)   | Primary background, white text, checkmark replaces arrow |
| Other (different provider clicked) | Faded to 60% opacity, still clickable to switch          |

### Click Behavior

1. Record `selectedProvider` in state
2. Compose prompt from children + field values (reuse `composePrompt` from `usePromptComposer.ts`)
3. Call `getProviderAction` (reuse from `usePromptComposer.ts`) — opens URL in new tab, copies to clipboard if too long
4. Show toast if clipboard copy happened ("Prompt copied — paste into ChatGPT")
5. Transition to `asked` state

### Provider Re-selection

If the student clicks a different provider button after already clicking one:

- Update `selectedProvider`
- Open new tab for the new provider
- Keep state as `asked` (don't reset AI output if already typed)

---

## Score Card Animation Sequence

Triggered on `submitting -> submitted` transition. Total duration: ~1.2s.

### Phase 1: Card Entrance (0ms - 200ms)

- Score Card container fades in + scales from 0.96 to 1.0
- Spring animation: `stiffness: 400, damping: 30`

### Phase 2: Header Row (150ms - 400ms)

- Checkmark icon: rotates from -180deg to 0, scales from 0 to 1 (spring)
- "Exercise Submitted" text: fades in + slides from x:-12 to x:0
- XP pill: fades in after text (delay 150ms), slight scale-up

### Phase 3: Score Bars (300ms - 900ms)

Each dimension row animates sequentially with 60ms stagger:

1. Row slides in from x:-8, fades in
2. Bar fill animates from `width: 0` to `width: {score * 10}%`
   - Duration: 600ms, ease-out
   - Color: linear-gradient from `--ifm-color-primary-lighter` to `--ifm-color-primary`
3. Score value (`N/10`) fades in after bar reaches full width

### Phase 4: Average Score (800ms - 1200ms)

- Divider line fades in
- "Average" label appears
- Average value: scales from 0.5 to 1.0, fades in (spring, stiffness: 300)

### Phase 5: XP Pop (optional, if new XP earned)

- At 1000ms: XP count briefly scales to 1.15 then settles to 1.0
- Subtle green glow pulse on the XP pill (one cycle)

### Score Colors (by value range)

| Score Range | Bar Color Modifier                         |
| ----------- | ------------------------------------------ |
| 1-3         | `hue-rotate(-20deg)` — slightly warmer/red |
| 4-6         | Default gradient (primary colors)          |
| 7-8         | Default gradient                           |
| 9-10        | `brightness(1.1)` — slightly brighter      |

This is a subtle enhancement — the default primary gradient works for all values. Only apply if we want to add visual feedback per score quality.

---

## Accessibility

### Keyboard Navigation

- Tab order follows visual order: Step 1 fields -> provider buttons -> AI response textarea -> Submit button
- Provider buttons are `<button>` elements (natively focusable)
- All textareas are `<textarea>` elements (natively focusable)
- Submit button receives focus after AI response textarea
- After submission, focus moves to the Score Card container (via `tabIndex={-1}` + `ref.focus()`)

### Screen Reader Labels

| Element                        | `aria-label`                                                                                                                          |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| AICheck card                   | `role="region"` + `aria-label="AI Check Exercise: {id}"`                                                                              |
| Each `<AICheckField>` textarea | `aria-label="{label or placeholder}"`                                                                                                 |
| Provider button (disabled)     | `aria-disabled="true"` + `title="Fill in all fields first"`                                                                           |
| Provider button (enabled)      | `aria-label="Evaluate with {Provider} (opens new tab)"`                                                                               |
| Provider button (selected)     | `aria-label="{Provider} selected"` + `aria-pressed="true"`                                                                            |
| AI response textarea           | `aria-label="Paste the AI's complete evaluation response"`                                                                            |
| Submit button                  | `aria-label="Submit exercise for {xp} XP"`                                                                                            |
| Submit button (submitting)     | `aria-busy="true"` + `aria-label="Submitting..."`                                                                                     |
| Score Card                     | `role="region"` + `aria-label="Thinking Score Card"`                                                                                  |
| Score bar                      | `role="meter"` + `aria-valuenow={score}` + `aria-valuemin={0}` + `aria-valuemax={10}` + `aria-label="{dimension}: {score} out of 10"` |
| Char count                     | `aria-live="polite"` (announces when approaching limit)                                                                               |

### Focus Management

- On transition to `asked`: focus moves to AI response textarea
- On transition to `submitted`: focus moves to Score Card heading
- On transition to `error`: focus moves to error message

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  .scoreBarFill {
    transition: none;
  }
  /* Disable all framer-motion animations */
}
```

In code: check `window.matchMedia('(prefers-reduced-motion: reduce)')` and pass `transition={{ duration: 0 }}` to motion components when true.

---

## Dark Mode Design

The component inherits Docusaurus theme variables throughout. Key considerations:

### Card Background

```css
/* Light */
.aicheckCard {
  background: var(--ifm-color-emphasis-100);
  border: 1px solid var(--ifm-color-emphasis-200);
}

/* Dark */
[data-theme="dark"] .aicheckCard {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.1);
}
```

Matches existing `.promptCard` pattern — no new colors needed.

### Textareas

Inherit from existing `.fieldTextarea` pattern:

- Light: white background, dashed border
- Dark: `rgba(255, 255, 255, 0.03)` background, lighter border
- Focus: both modes get primary color border + box-shadow ring

### Provider Buttons

Inherit from existing `.providerBtn` pattern. Selected state:

- Light: primary background, white text
- Dark: primary background (same), white text

### Score Card

Inherit existing `.scoreCard` / `.submittedCard` patterns. Green accents use `oklch` with dark mode overrides already defined in `SubmissionDialog.module.css`.

### XP Pill

Reuse existing `.xpPill` / `.xpEarned` styles — already have dark mode overrides.

**Principle**: No new color tokens. Everything maps to existing Docusaurus variables or oklch values already in the codebase.

---

## Mobile Responsiveness

### Breakpoint: 768px

```css
@media (max-width: 768px) {
  .aicheckCard {
    padding: 1rem; /* Reduce padding */
  }

  .providerButtons {
    flex-direction: column; /* Stack vertically */
  }

  .providerBtn {
    width: 100%; /* Full width */
    justify-content: center;
  }

  .stepCollapsedSummary {
    font-size: 0.75rem; /* Smaller summary text */
  }

  .scoreRow .scoreDim {
    flex: 0 0 100px; /* Narrower label column */
    font-size: 0.72rem;
  }

  .scoreVal {
    flex: 0 0 30px;
    font-size: 0.72rem;
  }
}
```

### Breakpoint: 480px (small phones)

```css
@media (max-width: 480px) {
  .aicheckCard {
    margin-left: -0.5rem; /* Bleed into page margins slightly */
    margin-right: -0.5rem;
    border-radius: 8px;
  }

  .scoreRow {
    flex-wrap: wrap; /* Score bar wraps below label on tiny screens */
  }

  .scoreDim {
    flex: 1 1 100%;
    margin-bottom: 0.2rem;
  }

  .scoreBar {
    flex: 1;
  }
}
```

### Touch Targets

All interactive elements meet 44x44px minimum touch target:

- Provider buttons: `min-height: 44px` with padding
- Submit button: `height: 44px` (already set in existing styles)
- Textareas: naturally larger than 44px
- "[Edit]" link in collapsed summary: `padding: 0.5rem` to expand touch area

---

## localStorage Key Structure

### Prefix

All keys use prefix `aicheck:` (distinct from existing `exercise_prompt:` prefix).

### Keys per exercise

| Key                        | Content                                                                      |
| -------------------------- | ---------------------------------------------------------------------------- |
| `aicheck:{id}:__fields`    | JSON array of field names, e.g. `["scenario","work"]`                        |
| `aicheck:{id}:{fieldName}` | Raw string value of that field                                               |
| `aicheck:{id}:__provider`  | Selected provider string, e.g. `"chatgpt"`                                   |
| `aicheck:{id}:__aiOutput`  | AI response text pasted by student                                           |
| `aicheck:{id}:__state`     | Last active state (for restore), one of: `"filling"`, `"asked"`, `"pasting"` |

### Persistence Behavior

- **Debounce**: 500ms after last keystroke (same as existing `useFieldPersistence`)
- **Hydration**: On mount, restore all keys. If `__state` is `"asked"` or `"pasting"`, restore to that state (student left mid-flow and came back).
- **Cleanup**: After successful submission, remove all keys for this exercise ID. The `submitted` state is derived from `isLessonCompleted()` on next mount, not from localStorage.
- **SSR guard**: All localStorage access wrapped in `typeof window !== "undefined"` checks.

### Migration from ExercisePrompt keys

Old keys: `exercise_prompt:{id}:{fieldName}` and `exercise_prompt:{id}:__fields`

The AICheck component should check for old-format keys on first mount and migrate them:

```tsx
function migrateFromExercisePrompt(id: string): Map<string, string> {
  const oldManifest = localStorage.getItem(`exercise_prompt:${id}:__fields`);
  if (!oldManifest) return new Map();
  const fieldNames = JSON.parse(oldManifest);
  const result = new Map();
  for (const name of fieldNames) {
    const val = localStorage.getItem(`exercise_prompt:${id}:${name}`);
    if (val) result.set(name, val);
  }
  // Write to new format
  persistToNewFormat(id, result);
  // Clean up old keys
  for (const name of fieldNames) {
    localStorage.removeItem(`exercise_prompt:${id}:${name}`);
  }
  localStorage.removeItem(`exercise_prompt:${id}:__fields`);
  return result;
}
```

This ensures students who already filled in fields don't lose their work.

---

## Reusable Code from Existing Components

### From `ExercisePrompt/`

| Module                      | What to Reuse                                                    | How                                                                                   |
| --------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `useFieldPersistence.ts`    | `hydrateFromStorage`, `clearStorage`, `useFieldPersistence`      | Copy + rename prefix from `exercise_prompt` to `aicheck`. Or parameterize the prefix. |
| `usePromptComposer.ts`      | `composePrompt`, `getProviderAction`, `PROVIDER_URLS`            | Import directly — these are pure functions with no component coupling.                |
| `PromptField.tsx`           | Field component pattern                                          | Rename to `AICheckField`. Same props + `displayName` pattern for tree-walking.        |
| `ExercisePrompt.module.css` | `.promptCard`, `.fieldTextarea`, `.providerBtn`, `.toast` styles | Copy into `AICheck.module.css`. Merge with relevant SubmissionDialog styles.          |

### From `SubmissionDialog/`

| Element                         | What to Reuse                                                                    |
| ------------------------------- | -------------------------------------------------------------------------------- |
| `ScoreCardDisplay`              | Move into `AICheck/ScoreCard.tsx` — same component, same animation.              |
| `CharCount`                     | Copy into `AICheck/CharCount.tsx` — trivial helper.                              |
| `submitExercise` API call       | Import from `@/lib/progress-api` (already decoupled).                            |
| Score bar styles                | Copy `.scoreCard`, `.scoreBar`, `.scoreBarFill`, etc. into `AICheck.module.css`. |
| Spring/stagger animation config | Reuse same `spring`, `stagger`, `fadeUp` constants.                              |

---

## File Structure

```
apps/learn-app/src/components/AICheck/
├── index.tsx              # Main AICheck component (state machine + rendering)
├── AICheckField.tsx       # Individual field (replaces PromptField)
├── ProviderButtons.tsx    # Provider button row with icons
├── ScoreCard.tsx          # Animated score card (moved from SubmissionDialog)
├── CharCount.tsx          # Character count display
├── useFieldPersistence.ts # localStorage hook (adapted from ExercisePrompt)
├── usePromptComposer.ts   # Prompt composition (can import from ExercisePrompt or copy)
└── AICheck.module.css     # All styles (merged from ExercisePrompt + SubmissionDialog)
```
