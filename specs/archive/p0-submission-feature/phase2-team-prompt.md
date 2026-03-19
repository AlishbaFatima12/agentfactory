# Phase 2A+2B: Interactive Prompts — Team Prompt

## How to use

Paste the prompt below into a Claude Code session with agent teams enabled.
Branch: `feat/p0-exercise-submission`

Before running:

1. Ensure `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` in settings.json
2. Recommended: `claude --teammate-mode in-process`
3. Budget: 5 teammate sessions
4. Read spec first: `specs/p0-submission-feature/phase2-interactive-prompts.md`

---

## The Prompt

````
Create an agent team to implement Phase 2A+2B of the Exercise Submission feature:
Interactive Prompts with "Ask in AI" buttons + auto-prefilled submission.

IMPORTANT: This MUST be an agent team (https://code.claude.com/docs/en/agent-teams),
NOT subagents. Use TeamCreate to create the team. Spawn teammates — do NOT use the
Agent tool or spawn subagents.

## Spec

Read the full spec at: specs/p0-submission-feature/phase2-interactive-prompts.md

## Branch

You are on branch: feat/p0-exercise-submission
All work happens on this branch. Commit after each phase.

## What This Feature Does

Students fill in exercise prompt fields directly in the lesson page.
"Ask ChatGPT" / "Ask Claude" buttons open the AI with the completed prompt.
When submitting, student_input is auto-prefilled from the interactive prompt.
Phase 2C (shadow evaluation) is DEFERRED — do NOT implement it.

## Team Structure: 4-Phase Pipeline (5 Teammates)

You are the team lead. You coordinate. You do NOT write code yourself.
Use the shared task list to track all work. Enforce phase ordering via task dependencies.

### Phase 1: Architect (BLOCKS everything else)

**Task: "Architect — design component API and migration rules"**
Spawn a teammate named "architect". Use Opus model. Require plan approval.

Teammate prompt for architect:

"You are the architect teammate for the Interactive Prompts feature (Phase 2A+2B).
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:
1. specs/p0-submission-feature/phase2-interactive-prompts.md (full spec including Design Findings)
2. apps/learn-app/src/contexts/PracticeContext.tsx (COPY this pattern for ExercisePromptContext)
3. apps/learn-app/src/theme/MDXComponents.tsx (how to register new MDX components)
4. apps/learn-app/src/components/ExerciseCard/ (reference for interactive MDX component)
5. apps/learn-app/src/theme/DocItem/Content/index.tsx (where context providers wrap content)
6. apps/learn-app/src/theme/SubmissionDialog/index.tsx (must read from context to pre-fill)
7. Read 4 different exercise lesson files to understand prompt variability:
   - apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/01-prediction-lock.md
   - apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/02-question-tournament.md
   - apps/learn-app/docs/00-Thinking-is-the-Curriculum/05-communicating-what-matters/01-audience-prediction.md
   - apps/learn-app/docs/00-Thinking-is-the-Curriculum/09-deciding-under-uncertainty/01-sealed-decision.md

YOUR DELIVERABLES (write all to specs/p0-submission-feature/phase2/):

1. component-api.md — Full API design for ExercisePrompt and PromptField:
   - Props, state management, prompt composition strategy
   - How PromptField values get composed into a single prompt string
   - Provider button behavior (URL pre-fill vs clipboard fallback)
   - localStorage key structure and persistence strategy
   - CSS module design (use /frontend-design skill principles)

2. context-design.md — ExercisePromptContext design:
   - Context shape (mirror PracticeContext pattern exactly)
   - Where provider wraps in DocItem/Content
   - How SubmissionDialog reads and pre-fills student_input
   - What happens when no ExercisePrompt is on the page (graceful null)

3. migration-rules.md — Rules for converting lesson files:
   - How to identify the AI Check Prompt section in each lesson
   - How to map [paste X] placeholders to PromptField components
   - Template showing the conversion pattern (before/after)
   - List ALL 41 lesson files with their field count (2-6 fields each)
   - Group files by conversion complexity (simple 2-field vs complex 4-6 field)

4. per-teammate-briefs.md — Briefs for frontend, reference-converter, content-ch1-5, content-ch6-10

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'ARCHITECT DONE — [file list]'"

### Phase 2: Frontend Engineer (depends on Phase 1, BLOCKS Phase 3)

After architect completes, spawn this teammate.

**Task: "Frontend Engineer — build components and context"**
Spawn a teammate named "frontend". Use Opus model.

Teammate prompt for frontend:

"You are the frontend engineer teammate for the Interactive Prompts feature.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:
1. specs/p0-submission-feature/phase2/component-api.md (architect's API design)
2. specs/p0-submission-feature/phase2/context-design.md (context architecture)
3. apps/learn-app/src/contexts/PracticeContext.tsx (COPY this pattern)
4. apps/learn-app/src/theme/MDXComponents.tsx (register your components here)
5. apps/learn-app/src/theme/DocItem/Content/index.tsx (add context provider here)
6. apps/learn-app/src/theme/SubmissionDialog/index.tsx (wire pre-fill here)
7. apps/learn-app/src/components/ExerciseCard/ (reference for MDX component)

YOUR DELIVERABLES:

1. apps/learn-app/src/components/ExercisePrompt/index.tsx
   - ExercisePrompt parent component
   - Manages all PromptField values via internal state
   - Composes filled prompt from children + field values
   - Renders provider buttons (Ask ChatGPT / Ask Claude / Ask Gemini)
   - Provider buttons: URL pre-fill (chatgpt.com/?q= and claude.ai/new?q=)
     with clipboard fallback when encoded prompt > 6000 chars
   - localStorage persistence: save field values with 500ms debounce
   - Key structure: exercise_prompt:{docId}:{fieldName}
   - Load persisted values on mount, clear on successful submission

2. apps/learn-app/src/components/ExercisePrompt/PromptField.tsx
   - Textarea component that registers with parent ExercisePrompt
   - Props: name (string), placeholder (string), label (optional string)
   - Renders as styled textarea within the prompt flow
   - Uses shadcn Textarea component

3. apps/learn-app/src/components/ExercisePrompt/ExercisePrompt.module.css
   - Premium styling (use /frontend-design skill principles)
   - Step-card style for the prompt area
   - Provider buttons row with hover states
   - Dark mode support via [data-theme='dark'] selectors

4. apps/learn-app/src/contexts/ExercisePromptContext.tsx
   - Context shape: { composedPrompt: string | null, setComposedPrompt }
   - Copy PracticeContext pattern exactly

5. apps/learn-app/src/theme/MDXComponents.tsx
   - Register ExercisePrompt and PromptField

6. apps/learn-app/src/theme/DocItem/Content/index.tsx
   - Wrap content with ExercisePromptContext.Provider (same location as PracticeContext)
   - Both render paths (with summary and without summary)

7. apps/learn-app/src/theme/SubmissionDialog/index.tsx
   - Import useExercisePrompt context
   - If composedPrompt is not null, pre-fill student_input and make it read-only
   - Auto-focus on ai_output field when student_input is pre-filled

CRITICAL RULES:
- Use Framer Motion for provider button animations (already in project)
- Use shadcn components (Textarea, Button, Badge) — already available
- Do NOT add phantom imports — verify all imports resolve
- Do NOT break existing SubmissionDialog functionality
- Build must pass: pnpm nx build learn-app

After implementing, verify the build passes.

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'FRONTEND DONE — [file list]'"

### Phase 3: Reference Converter (depends on Phase 2, BLOCKS Phase 4)

After frontend completes, spawn this teammate.

**Task: "Reference Converter — convert L1 prediction-lock as gold standard"**
Spawn a teammate named "reference-converter". Use Opus model.

Teammate prompt for reference-converter:

"You are the reference-converter teammate for the Interactive Prompts feature.
You are part of an agent team — communicate via messages to the team lead.

YOUR TASK: Convert ONE lesson file to use the new ExercisePrompt component,
creating a gold-standard reference that content migrators will follow.

READ IN ORDER:
1. specs/p0-submission-feature/phase2/migration-rules.md (architect's rules)
2. apps/learn-app/src/components/ExercisePrompt/index.tsx (the component you're using)
3. apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/01-prediction-lock.md (the file to convert)

YOUR DELIVERABLE:

Convert apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/01-prediction-lock.md:

1. Find the existing AI Check Prompt code block (```text title='AI Check Prompt...')
2. Replace it with <ExercisePrompt> + <PromptField> JSX
3. Map each [paste X] placeholder to a <PromptField name='X' placeholder='...'>
4. Add the import at top: import ExercisePrompt from '@site/src/components/ExercisePrompt'
   AND import PromptField from '@site/src/components/ExercisePrompt/PromptField'
   (or check MDXComponents.tsx — if registered globally, no import needed)
5. Ensure the static prompt text between fields is preserved exactly
6. Verify the lesson still builds: pnpm nx build learn-app

IMPORTANT:
- Do NOT modify the YAML frontmatter
- Do NOT modify any other section (What You Do, Tabs, Solo Learner, What This Teaches You)
- ONLY replace the AI Check Prompt code block with the ExercisePrompt component

After converting, verify pnpm nx build learn-app passes.

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'REFERENCE DONE — [before/after diff summary]'"

### Phase 4: Content Migrators (ALL 2 parallel, depend on Phase 3)

After reference-converter completes, spawn BOTH content teammates simultaneously.

---

**Task: "Content Ch1-5 — convert chapters 1-5 lesson files"**
Spawn teammate "content-ch1-5". Use Opus model.

Teammate prompt:

"You are the content-ch1-5 teammate for the Interactive Prompts feature.
You are part of an agent team — communicate via messages to the team lead.

YOUR TASK: Convert chapters 1-5 exercise lesson files to use ExercisePrompt.

READ IN ORDER:
1. specs/p0-submission-feature/phase2/migration-rules.md (conversion rules)
2. The reference conversion: apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/01-prediction-lock.md
   (this is your gold standard — match it exactly)

YOUR SCOPE — Convert these files (skip 01-prediction-lock.md, already done):
- apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/02-question-tournament.md
- apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/03-divergence-test.md
- apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/04-live-defence.md
- All 4 lesson files in 02-detecting-broken-reasoning/
- All 4 lesson files in 03-thinking-in-systems/
- All 4 lesson files in 04-reasoning-from-first-principles/
- All 4 lesson files in 05-communicating-what-matters/

That's 19 files total (3 + 4×4).

FOR EACH FILE:
1. Read the file
2. Find the AI Check Prompt code block
3. Replace with <ExercisePrompt> + <PromptField> following the reference pattern
4. Map each [paste X] to <PromptField name='X' placeholder='Paste X here...'>
5. Preserve all static prompt text between fields
6. Do NOT modify frontmatter, What You Do, Tabs, Solo Learner, or What This Teaches You

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'CONTENT CH1-5 DONE — [file count] files converted'"

---

**Task: "Content Ch6-10 — convert chapters 6-10 lesson files + thinking-baseline"**
Spawn teammate "content-ch6-10". Use Opus model.

Teammate prompt:

"You are the content-ch6-10 teammate for the Interactive Prompts feature.
You are part of an agent team — communicate via messages to the team lead.

YOUR TASK: Convert chapters 6-10 exercise lesson files + thinking-baseline to use ExercisePrompt.

READ IN ORDER:
1. specs/p0-submission-feature/phase2/migration-rules.md (conversion rules)
2. The reference conversion: apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/01-prediction-lock.md
   (this is your gold standard — match it exactly)

YOUR SCOPE — Convert these files:
- All 4 lesson files in 06-working-with-ai-not-for-ai/
- All 4 lesson files in 07-reasoning-through-dilemmas/
- All 4 lesson files in 08-building-something-from-nothing/
- All 4 lesson files in 09-deciding-under-uncertainty/
- All 4 lesson files in 10-learning-how-to-learn/
- apps/learn-app/docs/00-Thinking-is-the-Curriculum/thinking-baseline.md

That's 21 files total (5×4 + 1).

FOR EACH FILE:
1. Read the file
2. Find the AI Check Prompt code block
3. Replace with <ExercisePrompt> + <PromptField> following the reference pattern
4. Map each [paste X] to <PromptField name='X' placeholder='Paste X here...'>
5. Preserve all static prompt text between fields
6. Do NOT modify frontmatter, What You Do, Tabs, Solo Learner, or What This Teaches You

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'CONTENT CH6-10 DONE — [file count] files converted'"

---

## Team Lead Coordination Rules

YOU ARE THE LEAD. Follow these rules strictly:

1. Create the team FIRST using TeamCreate
2. Create ALL tasks upfront with proper dependencies:
   - Phase 1 task: no dependencies
   - Phase 2 task: depends on Phase 1
   - Phase 3 task: depends on Phase 2
   - Phase 4 tasks (both): each depends on Phase 3
3. Spawn architect FIRST. Wait for 'ARCHITECT DONE'
4. Review architect's plan before approving (plan approval mode)
5. After architect, spawn frontend. Wait for 'FRONTEND DONE'
6. After frontend, spawn reference-converter. Wait for 'REFERENCE DONE'
7. After reference-converter, spawn content-ch1-5 + content-ch6-10 simultaneously
8. WAIT for BOTH to report done
9. Do NOT write ANY code yourself — you are the coordinator only
10. After all 5 report done, run verification:
    - Build: pnpm nx build learn-app
    - Count converted files: grep -r 'ExercisePrompt' apps/learn-app/docs/00-Thinking-is-the-Curriculum/ --include="*.md" -l | wc -l
    - Verify no old-style prompts remain: grep -r "AI Check Prompt -- Copy" apps/learn-app/docs/00-Thinking-is-the-Curriculum/ --include="*.md" -l | wc -l (should be 0)
    - Report results
11. Commit all changes with descriptive message, push to branch

## Model Preferences

- Architect: Opus (reads full codebase, designs APIs)
- Frontend: Opus (builds premium components with Framer Motion)
- Reference Converter: Opus (must get the pattern right)
- Content Ch1-5: Opus (must handle variable field counts accurately)
- Content Ch6-10: Opus (same)

## Anti-Patterns to Avoid

- Do NOT use the Agent tool or spawn subagents — this is a TEAM with TEAMMATES
- Do NOT write code yourself — delegate everything to teammates
- Do NOT spawn Phase 3 before Phase 2 completes (component must exist before conversion)
- Do NOT spawn Phase 4 before Phase 3 completes (reference must exist before mass migration)
- Do NOT skip build verification after all teammates finish
- Do NOT let content migrators modify anything except the AI Check Prompt section
````

---

## Design Rationale

### Why 4 phases not 2?

- Architect must design API before frontend builds (prevents redesign)
- Frontend must build component before reference converts (can't convert to nonexistent component)
- Reference must validate one file before mass migration (catches issues early)
- Mass migration is parallelized (20+21 files across 2 teammates)

### Why reference-converter as separate phase?

One file conversion validates: the component works in MDX, imports resolve, build passes,
the prompt composition is correct. If this fails, we fix before touching 40 more files.

### Why Opus for content migrators?

Each exercise has a different prompt structure (2-6 fields, different evaluation criteria,
some with tables). The mapping requires reading carefully and converting accurately.
Mechanical but error-prone — same rationale as Phase 1's content engineer.
