# Phase 3: Unified AICheck — Team Prompt

## How to use

Paste the prompt below into a Claude Code session with agent teams enabled.
Branch: `feat/p0-exercise-submission`

Before running:

1. Ensure `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` in settings.json
2. Recommended: `claude --teammate-mode in-process`
3. Budget: 4 teammate sessions
4. Read spec first: `specs/p0-submission-feature/phase3-unified-aicheck.md`

---

## The Prompt

```
Create an agent team to implement Phase 3 of the Exercise Submission feature:
the unified AICheck component that replaces both ExercisePrompt and SubmissionDialog.

IMPORTANT: This MUST be an agent team (https://code.claude.com/docs/en/agent-teams),
NOT subagents. Use TeamCreate to create the team. Spawn teammates — do NOT use the
Agent tool or spawn subagents.

## Context

Phase 1 built the submission backend (POST /api/v1/exercise/submit) — this stays.
Phase 2 built ExercisePrompt + SubmissionDialog as separate components — this is
being REPLACED by a unified AICheck component. The backend API is unchanged.

## Spec

Read the full spec at: specs/p0-submission-feature/phase3-unified-aicheck.md
Read the UX feedback: memory files at ~/.claude/projects/*/memory/feedback_unified_aicheck.md

## Branch

You are on branch: feat/p0-exercise-submission
All work happens on this branch. Commit after each phase.

## What This Does

ONE inline component replaces both ExercisePrompt and SubmissionDialog:
- Student fills exercise fields (Step 1)
- Clicks "ChatGPT ↗" to open AI in new tab (Step 2)
- Pastes AI response back (Step 3)
- Clicks Submit → Score Card with animated bars + 50 XP (Step 4)
- Zero dialog. Zero scrolling. Everything in one card.

## Team Structure: 3-Phase Pipeline (4 Teammates)

You are the team lead. You coordinate. You do NOT write code yourself.

### Phase 1: Designer (BLOCKS everything else)

**Task: "Designer — design AICheck component UX"**
Spawn a teammate named "designer". Use Opus model. Require plan approval.

Teammate prompt for designer:

"You are the designer teammate for the unified AICheck component.
You are part of an agent team — communicate via messages to the team lead.

Use the /frontend-design skill for premium UX principles.

READ IN ORDER:
1. specs/p0-submission-feature/phase3-unified-aicheck.md (full spec)
2. apps/learn-app/src/components/ExercisePrompt/ (what you're REPLACING)
3. apps/learn-app/src/theme/SubmissionDialog/index.tsx (what you're REPLACING)
4. apps/learn-app/src/components/ExercisePrompt/ExercisePrompt.module.css (current styles)
5. apps/learn-app/src/theme/SubmissionDialog/SubmissionDialog.module.css (current styles)
6. Read 2 converted lesson files to understand the MDX pattern you need to support

YOUR DELIVERABLES (write to specs/p0-submission-feature/phase3/):

1. aicheck-design.md — Full component design:
   - State machine (idle → filling → ready → asked → pasting → submitting → submitted)
   - Progressive disclosure behavior (which steps collapse when)
   - Provider button UX (what happens when they click, visual feedback)
   - Score Card celebration animation sequence (bars, XP pop, checkmark)
   - Accessibility: keyboard navigation, screen reader labels
   - Dark mode design considerations
   - Mobile responsiveness (card should work on phone screens)
   - localStorage key structure and persistence

2. cleanup-plan.md — What gets removed:
   - List exact files to DELETE
   - List exact lines to REMOVE from DocItem/Content/index.tsx
   - How SubmissionDialog stays as fallback for non-AICheck pages
   - MDXComponents.tsx changes (remove old, add new)

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'DESIGNER DONE — [file list]'"

### Phase 2: Frontend Engineer (depends on Phase 1, BLOCKS Phase 3)

After designer completes, spawn this teammate.

**Task: "Frontend — build unified AICheck component"**
Spawn a teammate named "frontend". Use Opus model.

Teammate prompt for frontend:

"You are the frontend engineer for the unified AICheck component.
You are part of an agent team — communicate via messages to the team lead.

Use the /frontend-design skill for premium styling.

READ IN ORDER:
1. specs/p0-submission-feature/phase3/aicheck-design.md (designer's spec)
2. specs/p0-submission-feature/phase3/cleanup-plan.md (what to remove)
3. specs/p0-submission-feature/phase3-unified-aicheck.md (full feature spec)
4. apps/learn-app/src/components/ExercisePrompt/ (code to learn from then DELETE)
5. apps/learn-app/src/theme/SubmissionDialog/index.tsx (submission logic to MOVE here)
6. apps/learn-app/src/lib/progress-api.ts (submitExercise function — reuse)
7. apps/learn-app/src/lib/progress-types.ts (types — reuse)

YOUR DELIVERABLES:

1. apps/learn-app/src/components/AICheck/index.tsx
   - AICheck parent component with full state machine
   - Progressive disclosure (steps collapse as student progresses)
   - Provider buttons that open new tab (URL pre-fill or clipboard fallback)
   - Inline submit (no dialog) — calls submitExercise() directly
   - Score Card with Framer Motion animated bars
   - XP celebration animation
   - localStorage persistence with 500ms debounce

2. apps/learn-app/src/components/AICheck/AICheckField.tsx
   - Textarea field component (replaces PromptField)

3. apps/learn-app/src/components/AICheck/AICheck.module.css
   - Premium styling with dark mode support
   - Step indicators, progress states
   - Score bar animations
   - Responsive for mobile

4. CLEANUP — Execute the cleanup-plan.md:
   - DELETE apps/learn-app/src/components/ExercisePrompt/ (entire directory)
   - DELETE apps/learn-app/src/contexts/ExercisePromptContext.tsx
   - UPDATE apps/learn-app/src/theme/MDXComponents.tsx:
     Remove ExercisePrompt/PromptField, add AICheck/AICheckField
   - UPDATE apps/learn-app/src/theme/DocItem/Content/index.tsx:
     Remove ExercisePromptContext provider and imports.
     KEEP SubmissionDialog rendering for pages WITHOUT AICheck
     (pages with submission: frontmatter but no AICheck in MDX content)

5. Verify build: pnpm nx build learn-app

CRITICAL:
- Use Framer Motion for all animations (already in project)
- Use shadcn components where appropriate
- The component must call submitExercise() from @/lib/progress-api
- Reuse ExerciseSubmitResponse and ScoreCard types from @/lib/progress-types
- localStorage keys: aicheck:{id}:{fieldName}
- Provider recorded = whichever button they clicked last

TASK MANAGEMENT:
- You are assigned to Task #2 in the shared task list
- When finished, mark Task #2 as completed using TaskUpdate
- Then message the team lead: 'FRONTEND DONE — [file list]'

Execute autonomously without asking for confirmation."

### Phase 3: Content Migrators (2 parallel, depend on Phase 2)

After frontend completes, spawn BOTH content teammates simultaneously.

---

**Task: "Content Ch1-5 — re-convert to AICheck"**
Spawn teammate "content-ch1-5". Use Opus model.

Teammate prompt:

"You are the content-ch1-5 teammate for the AICheck migration.
You are part of an agent team — communicate via messages to the team lead.

YOUR TASK: Re-convert chapters 1-5 lesson files from <ExercisePrompt>
to the new <AICheck> format.

READ IN ORDER:
1. specs/p0-submission-feature/phase3-unified-aicheck.md (MDX usage section)
2. One converted reference file (the lead will tell you which)

YOUR SCOPE:
- All 4 lesson files in 01-asking-better-questions/
- All 4 lesson files in 02-detecting-broken-reasoning/
- All 4 lesson files in 03-thinking-in-systems/
- All 4 lesson files in 04-reasoning-from-first-principles/
- All 4 lesson files in 05-communicating-what-matters/
= 20 files

FOR EACH FILE:
1. Read the file
2. Find the <ExercisePrompt> block
3. Replace <ExercisePrompt> with <AICheck id='SLUG' xp={50}>
4. Replace <PromptField> with <AICheckField>
5. Everything else stays the same (the prompt text between fields is unchanged)
6. Do NOT modify frontmatter, What You Do, Tabs, Solo, or What This Teaches You

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'CONTENT CH1-5 DONE — [file count]'"

---

**Task: "Content Ch6-10 — re-convert to AICheck"**
Spawn teammate "content-ch6-10". Use Opus model.

Teammate prompt:

"You are the content-ch6-10 teammate for the AICheck migration.
You are part of an agent team — communicate via messages to the team lead.

YOUR TASK: Re-convert chapters 6-10 lesson files + thinking-baseline from
<ExercisePrompt> to the new <AICheck> format.

READ IN ORDER:
1. specs/p0-submission-feature/phase3-unified-aicheck.md (MDX usage section)
2. One converted reference file (the lead will tell you which)

YOUR SCOPE:
- All 4 lesson files in 06-working-with-ai-not-for-ai/
- All 4 lesson files in 07-reasoning-through-dilemmas/
- All 4 lesson files in 08-building-something-from-nothing/
- All 4 lesson files in 09-deciding-under-uncertainty/
- All 4 lesson files in 10-learning-how-to-learn/
- thinking-baseline.md
= 21 files

FOR EACH FILE:
1. Read the file
2. Find the <ExercisePrompt> block
3. Replace <ExercisePrompt> with <AICheck id='SLUG' xp={50}>
4. Replace <PromptField> with <AICheckField>
5. Everything else stays the same
6. Do NOT modify frontmatter or other sections

Execute autonomously without asking for confirmation.
When finished, message the team lead: 'CONTENT CH6-10 DONE — [file count]'"

---

## Team Lead Coordination Rules

1. Create the team using TeamCreate
2. Create ALL tasks upfront with dependencies:
   - Phase 1 (designer): no dependencies
   - Phase 2 (frontend): depends on Phase 1
   - Phase 3 tasks (both content): depend on Phase 2
3. Spawn designer FIRST. Review and approve plan.
4. After designer, spawn frontend. Wait for FRONTEND DONE.
5. Convert ONE file yourself as reference for content team (01-prediction-lock.md)
6. After frontend + reference done, spawn both content teammates
7. After all done, run verification:
   - Build: pnpm nx build learn-app
   - Count: grep -r 'AICheck' docs/00-Thinking/ --include="*.md" -l | wc -l (should be 41)
   - No old components: grep -r 'ExercisePrompt' docs/00-Thinking/ --include="*.md" -l | wc -l (should be 0)
   - Test live: serve learn-app, open a lesson, verify AICheck renders
8. Commit and push

## Model Preferences

- Designer: Opus (UX design, state machine, accessibility)
- Frontend: Opus (premium component, Framer Motion, complex state)
- Content Ch1-5: Opus (accurate field mapping)
- Content Ch6-10: Opus (accurate field mapping)

## Anti-Patterns to Avoid

- Do NOT use the Agent tool or spawn subagents — this is a TEAM
- Do NOT write code yourself (except the ONE reference file conversion)
- Do NOT spawn content teammates before frontend is done and verified
- Do NOT keep SubmissionDialog as primary — it's FALLBACK only
- Do NOT break the existing submission API — backend is unchanged
- Do NOT add a feedback field — it's removed for friction reduction
```

---

## Design Rationale

### Why replace Phase 2's components?

Phase 2 built ExercisePrompt + SubmissionDialog as separate components.
User testing revealed this is a 7-step flow that nobody will complete.
The unified AICheck merges everything into one inline card.

### Why keep SubmissionDialog as fallback?

Non-Part-0 pages may have `submission:` frontmatter but no `<AICheck>` in
their MDX. SubmissionDialog handles these pages. Over time, all exercise
pages migrate to `<AICheck>` and SubmissionDialog becomes dead code.

### Why 4 teammates, not 5?

Designer + Frontend are the critical path. Content migration is mechanical.
No architect needed — Phase 2's architect already mapped the 41 files
and their field counts. The designer handles the UX architecture.
