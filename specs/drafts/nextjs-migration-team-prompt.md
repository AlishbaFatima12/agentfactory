# Team Prompt: Docusaurus → Next.js 16.2 Migration

**Paste this prompt into a team-enabled Claude Code session to launch the team.**
**Issue**: https://github.com/panaversity/agentfactory/issues/880

---

Create an agent team to migrate `apps/learn-app` from Docusaurus 3.9.2 to Next.js 16.2.

IMPORTANT: This MUST be an agent team (https://code.claude.com/docs/en/agent-teams), NOT subagents. Use TeamCreate to create the team. Spawn teammates — do NOT use the Agent tool or spawn subagents. Every worker below is a TEAMMATE in the team, coordinated through the shared task list and inter-teammate messaging.

## Context

**Spec**: `specs/nextjs-migration/spec.md` — full migration specification (277 lines)
**Source codebase**: `apps/learn-app/` — Docusaurus 3.9.2 app (1,824 MDX files, 120 components, 10 plugins)
**Output directory**: `apps/learn-next/` — New Next.js 16.2 app
**Content type**: Migration/Rewrite — same content, new framework
**Microservices**: UNCHANGED — SSO (:3001), content-api (:8003), progress-api (:8002), study-mode-api (:8000), token-metering (:8001), learner-profile

This is a frontend framework rewrite. Content (1,824 MDX files, 671 flashcard YAMLs) copies directly. The work is: framework infrastructure, plugin migration, auth/API integration rewiring, i18n (3 locales: en, ur, zh-Hans), and verification.

## Success Definition (NON-NEGOTIABLE)

**The migrated app must be IDENTICAL to the current app from the user's perspective.** Zero UX changes. Zero feature regressions. Every button, every page, every flow works exactly as before. The ONLY differences should be:

1. Faster builds (ISR — under 4 GB memory vs current 7 GB)
2. Better agent tooling (AGENTS.md, next-devtools-mcp)
3. Server runtime available (Route Handlers, Server Actions)

**If a single feature breaks, the migration is NOT done.** The verifier runs 17 flows — ALL must pass.

## Key Resources for ALL Teammates

- **Full spec**: `specs/nextjs-migration/spec.md` (verification matrix, constraints, success criteria)
- **Tooling research**: `specs/nextjs-migration/research/tooling-evaluation.md`
- **AGENTS.md** in `apps/learn-next/` → `node_modules/next/dist/docs/` (ALWAYS read Next.js docs from here, not training data)
- **GitHub Issue**: https://github.com/panaversity/agentfactory/issues/880

---

## You Are the Team Lead

You coordinate. You do NOT write code yourself.

Use the shared task list (TaskCreate/TaskUpdate) to track all work.

Enforce phase ordering via task dependencies: Phase 1 → Phase 2 → Phase 3 → Phase 4.

Before spawning any teammate, ensure the output directory `apps/learn-next/` exists. If it does not exist yet, create the Next.js scaffold first:

```bash
cd apps && npx create-next-app@latest learn-next --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack
cd learn-next && npx @next/codemod agents-md
```

Then add the MCP config:

```bash
cat > apps/learn-next/.mcp.json << 'EOF'
{
  "mcpServers": {
    "next-devtools": {
      "command": "npx",
      "args": ["-y", "next-devtools-mcp@latest"]
    }
  }
}
EOF
```

---

## PHASE 1: ARCHITECT

**Task**: "Phase 1: Architect — produce migration mapping and directory skeleton"
**Model**: opus
**Effort**: max
**Plan approval**: enabled (you MUST review the directory skeleton before architect writes files)

Spawn with this prompt:

```
"You are the architect teammate for the Docusaurus → Next.js 16.2 migration.
You are part of an agent team — communicate via messages to the team lead.

YOUR MISSION: Analyze the existing Docusaurus codebase and produce a complete migration mapping, directory skeleton, and per-writer briefs.

READ IN ORDER:

1. `specs/nextjs-migration/spec.md` — Full migration specification (read ALL 277 lines)
2. `apps/learn-app/docusaurus.config.ts` — Current Docusaurus configuration
3. `apps/learn-app/package.json` — Current dependencies
4. `apps/learn-app/sidebars.ts` — Sidebar generation config
5. `apps/learn-app/src/theme/` — ALL 7 swizzled components (Root.tsx, Layout/*, Navbar/*, Footer/*, DocItem/Layout, DocItem/Content, MDXComponents.tsx)
6. `apps/learn-app/src/contexts/` — ALL 8 context providers
7. `apps/learn-app/src/lib/` — ALL API client libraries (auth-client.ts, progress-api.ts, learner-profile-api.ts, jwt-verifier.ts, api-utils.ts)
8. `apps/learn-app/src/components/TeachMePanel/useStudyModeAPI.ts` — Study mode API integration
9. `apps/learn-app/src/hooks/useCredits.ts` — Token metering integration
10. `apps/learn-app/i18n-config.json` — i18n config (3 locales: en, ur, zh-Hans)
11. `apps/learn-app/src/components/LocaleDropdown.tsx` — Locale switching UI
12. `apps/learn-app/src/utils/getLocaleUrl.ts` — Locale URL utility
13. `apps/learn-app/scripts/build.sh` — Build script with per-locale strategy (THE problem we're solving)
14. `apps/learn-app/i18n/ur/` — Urdu translations (6 MDX files + UI strings)
15. `apps/learn-app/i18n/zh-Hans/` — Chinese translations (6 MDX files + UI strings)
16. `libs/docusaurus/` — Scan ALL 10 plugin directories (read each index.ts/plugin.ts)
17. `node_modules/next/dist/docs/` — Scan the bundled Next.js documentation index for current patterns
18. AGENTS.md or CLAUDE.md in `apps/learn-next/` — Read the Next.js agent docs for 16.2 patterns

ALSO RUN these commands to gather inventory:
- `ls apps/learn-app/src/components/` (component inventory)
- `grep -r '@docusaurus/' apps/learn-app/src/ --include='*.tsx' --include='*.ts' -l` (files with Docusaurus imports)
- `ls apps/learn-app/docs/` (content directory structure)
- `find apps/learn-app/docs -name '*.flashcards.yaml' | wc -l` (flashcard count)
- `find apps/learn-app/i18n -type f | wc -l` (translated file count — expect ~24)
- `cat apps/learn-app/i18n-config.json` (locale configuration)

DELIVERABLES (write ALL to `specs/nextjs-migration/architect/`):

1. `migration-mapping.md` — Complete old→new path mapping:
   - Every Docusaurus concept → Next.js 16.2 equivalent
   - Every `@docusaurus/*` import → replacement import/hook
   - Every swizzled component → App Router layout/component equivalent
   - Every plugin → Next.js implementation approach
   - Every context provider → where it goes in the App Router provider tree
   - Every API client → path in new structure
   - i18n: Docusaurus locale strategy → Next.js i18n approach (next-intl or built-in)
   - i18n: How translated MDX files (apps/learn-app/i18n/ur/, i18n/zh-Hans/) map to Next.js routes
   - i18n: How UI string translations (code.json, footer.json, navbar.json) migrate

2. `directory-skeleton.md` — Complete `apps/learn-next/` file tree:
   - `src/app/` layout hierarchy (root → part → chapter → lesson)
   - `src/components/` organization
   - `src/lib/` client library locations
   - `src/contexts/` provider tree
   - MDX content integration approach (how 1,824 files load)
   - Static asset handling

3. `next-config-scaffold.md` — Annotated next.config.ts showing:
   - MDX configuration (with remark/rehype plugin chain)
   - Image optimization config
   - Redirects/rewrites for URL parity
   - Environment variables mapping
   - Turbopack configuration
   - i18n configuration (3 locales: en, ur, zh-Hans)

4. `i18n-strategy.md` — Complete internationalization plan:
   - Next.js i18n routing approach (middleware-based locale detection)
   - How 12 translated MDX files integrate (apps/learn-app/i18n/ur/, zh-Hans/)
   - UI string translation mechanism (replacing Docusaurus code.json/footer.json/navbar.json)
   - LocaleDropdown component migration (replacing @docusaurus/useDocusaurusContext)
   - RTL support consideration (Urdu is RTL-capable though currently set to ltr)
   - How ISR handles per-locale incremental rebuilds (THE key build improvement)

5. `shared-writers-brief.md` — Shared context for all writers:
   - Project identity (what this app IS)
   - Import replacement cheat sheet (@docusaurus/* → next/*)
   - Component naming conventions
   - Testing approach (Vitest, E2E patterns)
   - Commit conventions

6. `writer-a-brief.md` — Framework & Layout writer scope:
   - Exact files to create (layouts, navigation, search)
   - Exit criteria
   - Dependencies on reference-builder output

7. `writer-b-brief.md` — Plugin Pipeline writer scope:
   - Exact plugins to migrate with approach per plugin
   - Files to create (remark configs, OG image route, metadata utilities)
   - Exit criteria

8. `writer-c-brief.md` — Auth & API writer scope:
   - Exact auth flow to replicate
   - Context providers to migrate
   - API client files to create/copy
   - Exit criteria (the E2E flow)

9. `verifier-brief.md` — Verification scope:
   - Full 14-flow verification matrix from spec
   - Testing commands
   - Pass/fail criteria per flow

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'ARCHITECT DONE — specs/nextjs-migration/architect/ contains 9 deliverables'"
```

**Lead action after architect completes**:

1. Read `specs/nextjs-migration/architect/directory-skeleton.md`
2. Verify it covers ALL components from the spec
3. Verify no file overlap between writer briefs
4. If satisfactory, proceed to Phase 2

---

## PHASE 2: REFERENCE-BUILDER

**Task**: "Phase 2: Reference-Builder — migrate one complete lesson page"
**Model**: opus
**Effort**: max
**Depends on**: Phase 1 (architect) complete

Spawn with this prompt:

```
"You are the reference-builder teammate for the Docusaurus → Next.js 16.2 migration.
You are part of an agent team — communicate via messages to the team lead.

YOUR MISSION: Migrate ONE complete lesson page from Docusaurus to Next.js 16.2. This becomes the gold-standard reference that all writers must match.

READ IN ORDER:

1. `specs/nextjs-migration/architect/migration-mapping.md` — The old→new mapping
2. `specs/nextjs-migration/architect/directory-skeleton.md` — Where files go
3. `specs/nextjs-migration/architect/next-config-scaffold.md` — Config approach
4. `apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/01-asking-better-questions.md` — A real lesson MDX file (pick one with frontmatter, components, exercises)
5. `apps/learn-app/docs/00-Thinking-is-the-Curriculum/01-asking-better-questions/01-asking-better-questions.flashcards.yaml` — Its flashcard sidecar
6. Read the AGENTS.md / CLAUDE.md in `apps/learn-next/` for Next.js 16.2 patterns
7. Read `node_modules/next/dist/docs/01-app/02-guides/` for App Router patterns

DELIVERABLES (write to `apps/learn-next/`):

1. Create the ACTUAL Next.js page for this one lesson:
   - The page route file (e.g., `src/app/docs/[...slug]/page.tsx`)
   - MDX loading logic (how the page reads and renders the MDX file)
   - Metadata generation from frontmatter (Next.js Metadata API)
   - Flashcard sidecar loading

2. Create minimal supporting infrastructure:
   - `src/app/layout.tsx` — Root layout (just enough for one page)
   - `src/components/MDXContent.tsx` — MDX renderer with remark plugins
   - `src/lib/mdx.ts` — MDX loading utility
   - `next.config.ts` — Working config with MDX support

3. Write `specs/nextjs-migration/reference/REFERENCE-NOTES.md`:
   - Every decision you made and why
   - Every Docusaurus pattern you replaced and how
   - Gotchas or surprises
   - What writers need to know

CRITICAL RULES:
- The page MUST actually render when `pnpm nx serve learn-next` runs
- NO phantom imports — only import what exists
- Match Next.js 16.2 idioms from the bundled docs, NOT older patterns
- Use App Router (NOT Pages Router)
- Use Server Components by default, 'use client' only where needed

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'REFERENCE-BUILDER DONE — apps/learn-next/ has working lesson page + specs/nextjs-migration/reference/REFERENCE-NOTES.md'"
```

**Lead action after reference-builder completes**:

1. Run `pnpm nx serve learn-next` (or `cd apps/learn-next && pnpm dev`)
2. Verify the reference lesson actually renders in the browser
3. Read `specs/nextjs-migration/reference/REFERENCE-NOTES.md`
4. If the page renders correctly, proceed to Phase 3
5. If not, message reference-builder with the error and ask them to fix

---

## PHASE 3: WRITERS (3 teammates — spawn ALL simultaneously)

**Depends on**: Phase 2 (reference-builder) complete and verified

Spawn ALL 3 writer teammates SIMULTANEOUSLY after Phase 2 passes.

### WRITER-A: Framework & Layout

**Task**: "Phase 3a: Writer-A — Framework scaffold, layouts, navigation, search, i18n"
**Model**: opus
**Effort**: max

Spawn with this prompt:

```
"You are the writer-framework teammate for the Docusaurus → Next.js 16.2 migration.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/nextjs-migration/architect/migration-mapping.md` — Old→new path mapping
2. `specs/nextjs-migration/architect/shared-writers-brief.md` — Shared context
3. `specs/nextjs-migration/architect/writer-a-brief.md` — YOUR specific brief
4. `specs/nextjs-migration/reference/REFERENCE-NOTES.md` — Reference decisions
5. `apps/learn-next/src/app/layout.tsx` — Reference root layout (extend it)
6. `apps/learn-next/next.config.ts` — Reference config (extend it)
7. `apps/learn-app/src/theme/` — Read ALL 7 swizzled components (this is what you're replacing)
8. `apps/learn-app/sidebars.ts` — Current sidebar config
9. `apps/learn-app/i18n-config.json` — Locale configuration (3 locales)
10. `apps/learn-app/src/components/LocaleDropdown.tsx` — Current locale switcher
11. `apps/learn-app/src/utils/getLocaleUrl.ts` — Current locale URL utility
12. `specs/nextjs-migration/architect/i18n-strategy.md` — Architect's i18n plan
13. Read `node_modules/next/dist/docs/` for App Router layout and i18n patterns

RULES:
- Match the reference-builder's patterns and conventions exactly
- NO phantom imports — only import what exists or what you create
- Use App Router layouts (not page-level wrappers)
- Use Server Components by default, 'use client' only for interactive parts
- Execute autonomously without asking for confirmation
- After creating files, run `pnpm nx serve learn-next` to verify no build errors

YOUR SCOPE (zero overlap with Writer-B and Writer-C):

1. **App Router Layout Hierarchy**:
   - `src/app/layout.tsx` — Root layout (extend reference, add global providers shell)
   - `src/app/docs/layout.tsx` — Docs layout (sidebar + content area)
   - `src/app/docs/[...slug]/page.tsx` — Dynamic lesson page (extend reference)
   - `src/app/docs/[...slug]/loading.tsx` — Loading state
   - `src/app/docs/[...slug]/not-found.tsx` — 404 for missing lessons

2. **Navigation Components**:
   - `src/components/Navbar/` — Top navigation (migrate from swizzled Navbar)
   - `src/components/Sidebar/` — Lesson sidebar (replace auto-generated sidebars)
   - `src/components/Footer/` — Footer (migrate from swizzled Footer)
   - `src/components/Breadcrumbs/` — Breadcrumb navigation
   - `src/components/PrevNext/` — Previous/Next lesson navigation

3. **i18n / Translations** (CRITICAL — this solves the build problem):
   - `src/middleware.ts` — Locale detection middleware (en, ur, zh-Hans)
   - `src/app/[locale]/` — Locale-prefixed route structure
   - `src/components/LocaleDropdown/` — Locale switcher (migrate from Docusaurus version)
   - `src/lib/i18n.ts` — Translation loading utility
   - `src/messages/` — UI string translations (migrate from i18n/*/code.json, footer.json, navbar.json)
   - Translated MDX content routing (12 files from apps/learn-app/i18n/ur/ and i18n/zh-Hans/)
   - Follow architect's `i18n-strategy.md` for approach
   - ISR with i18n = only changed locale pages rebuild (verify this works)

4. **Search Integration**:
   - Pagefind standalone integration OR Next.js search solution
   - `src/components/Search/` — Search UI component

5. **Nx Integration**:
   - `apps/learn-next/project.json` — Nx project config (serve, build, test targets)
   - Ensure `pnpm nx serve learn-next` works

6. **Homepage**:
   - `src/app/page.tsx` — Landing page (migrate from Docusaurus homepage)

7. **Content Integration** (how 1,824 MDX files load):
   - Implement the content loading strategy from architect's directory skeleton
   - Either symlink `apps/learn-app/docs/` or copy content into Next.js app
   - Verify dynamic `[...slug]` route resolves all 1,824 lesson paths

EXIT CRITERIA: `pnpm nx serve learn-next` starts without errors AND renders homepage + at least one lesson page with sidebar navigation AND locale switching (en → ur → zh-Hans) works.

When finished, message the team lead: 'WRITER-A FRAMEWORK DONE — [list of files created]'"
```

### WRITER-B: Plugin Pipeline

**Task**: "Phase 3b: Writer-B — Remark plugins, OG images, structured data, build-time generation"
**Model**: opus
**Effort**: max

Spawn with this prompt:

```
"You are the writer-plugins teammate for the Docusaurus → Next.js 16.2 migration.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/nextjs-migration/architect/migration-mapping.md` — Old→new path mapping
2. `specs/nextjs-migration/architect/shared-writers-brief.md` — Shared context
3. `specs/nextjs-migration/architect/writer-b-brief.md` — YOUR specific brief
4. `specs/nextjs-migration/reference/REFERENCE-NOTES.md` — Reference decisions
5. `apps/learn-next/src/lib/mdx.ts` — Reference MDX loading (extend it)
6. `libs/docusaurus/` — Read ALL 10 plugin source files:
   - `remark-os-tabs/` — OS-specific tab switching
   - `remark-channel-tabs/` — Channel tab switching
   - `remark-interactive-python/` — Pyodide code blocks
   - `remark-flashcards/` — Flashcard sidecar loading
   - `remark-content-enhancements/` — Content enhancement transforms
   - `plugin-og-image/` — Satori+Sharp OG image generation
   - `plugin-structured-data/` — JSON-LD structured data
   - `chapter-manifest-plugin/` — Chapter manifest generation
   - `summaries-plugin/` — Summary generation
   - `shared/` — Shared utilities
7. Read `node_modules/next/dist/docs/` for Metadata API and ImageResponse patterns

RULES:
- Match the reference-builder's MDX pipeline setup exactly
- NO phantom imports — only import what exists
- Remark plugins are framework-agnostic (most will copy with minimal changes)
- OG images MUST use Next.js ImageResponse API (not Satori+Sharp directly)
- Structured data MUST use Next.js Metadata API
- Execute autonomously without asking for confirmation
- Write tests for each migrated plugin using Vitest

YOUR SCOPE (zero overlap with Writer-A and Writer-C):

1. **Remark Plugin Migration** (`libs/docusaurus/` → `libs/next-plugins/` or inline):
   - Migrate all 6 remark plugins to work with Next.js MDX pipeline
   - Update shared utilities
   - Ensure remark plugin chain matches Docusaurus order

2. **OG Image Generation**:
   - `src/app/api/og/route.tsx` — OG image route using Next.js ImageResponse
   - Migrate the Satori template from plugin-og-image

3. **Structured Data**:
   - `src/lib/structured-data.ts` — JSON-LD generation utility
   - Integration with Next.js Metadata API (in layout or page metadata)

4. **Build-Time Generation**:
   - Chapter manifest generation (build script or API route)
   - Summary generation (build script or API route)

5. **Flashcard Processing**:
   - Verify remark-flashcards works with new MDX pipeline
   - Ensure `.flashcards.yaml` sidecar files load correctly

6. **Tests**:
   - `__tests__/plugins/` — Test each remark plugin independently
   - `__tests__/og-image.test.ts` — OG image generation test
   - `__tests__/structured-data.test.ts` — JSON-LD validation

EXIT CRITERIA: All 6 remark plugins produce correct output in tests, OG image route returns valid image, JSON-LD validates against schema.org.

When finished, message the team lead: 'WRITER-B PLUGINS DONE — [list of files created]'"
```

### WRITER-C: Auth & API Integrations

**Task**: "Phase 3c: Writer-C — OAuth2 PKCE, context providers, API clients, E2E integration"
**Model**: opus
**Effort**: max

Spawn with this prompt:

```
"You are the writer-integrations teammate for the Docusaurus → Next.js 16.2 migration.
You are part of an agent team — communicate via messages to the team lead.

READ IN ORDER:

1. `specs/nextjs-migration/architect/migration-mapping.md` — Old→new path mapping
2. `specs/nextjs-migration/architect/shared-writers-brief.md` — Shared context
3. `specs/nextjs-migration/architect/writer-c-brief.md` — YOUR specific brief
4. `specs/nextjs-migration/reference/REFERENCE-NOTES.md` — Reference decisions
5. `apps/learn-app/src/lib/auth-client.ts` — Current auth client (Better Auth, OAuth2 PKCE)
6. `apps/learn-app/src/lib/jwt-verifier.ts` — JWT verification
7. `apps/learn-app/src/lib/progress-api.ts` — Progress API client
8. `apps/learn-app/src/lib/learner-profile-api.ts` — Learner profile client
9. `apps/learn-app/src/components/TeachMePanel/useStudyModeAPI.ts` — Study mode API
10. `apps/learn-app/src/hooks/useCredits.ts` — Token metering hook
11. `apps/learn-app/src/contexts/` — ALL 8 context providers
12. `apps/learn-app/src/theme/Root.tsx` — How providers are currently composed
13. `apps/learn-app/src/components/NavbarAuth/` — Auth UI component
14. Read `node_modules/next/dist/docs/` for App Router provider patterns and middleware

RULES:
- Do NOT modify ANY microservice (SSO, content-api, progress-api, etc.)
- API endpoints and ports remain identical
- Auth flow MUST use OAuth2 PKCE (same as current)
- Context providers that need browser APIs MUST be 'use client'
- Server-side auth checks should use Next.js middleware where appropriate
- Execute autonomously without asking for confirmation
- Environment variables must match current names (check .env.example if it exists)

YOUR SCOPE (zero overlap with Writer-A and Writer-B):

1. **Auth Client Migration**:
   - `src/lib/auth-client.ts` — Copy/adapt Better Auth client for Next.js
   - `src/lib/jwt-verifier.ts` — Copy JWT verification utility
   - `src/middleware.ts` — Next.js middleware for auth-protected routes (if applicable)

2. **API Client Libraries**:
   - `src/lib/progress-api.ts` — Copy/adapt progress API client
   - `src/lib/learner-profile-api.ts` — Copy/adapt learner profile client
   - `src/lib/api-utils.ts` — Copy/adapt shared API utilities

3. **Context Providers** (ALL 8, composed in root layout):
   - `src/contexts/AuthContext.tsx` — Auth state provider ('use client')
   - `src/contexts/ProgressContext.tsx` — Progress tracking ('use client')
   - `src/contexts/LearnerProfileContext.tsx` — Profile data ('use client')
   - `src/contexts/StudyModeContext.tsx` — Study mode state ('use client')
   - `src/contexts/PyodideContext.tsx` — Pyodide WASM loader ('use client')
   - `src/contexts/VoiceReadingContext.tsx` — Voice TTS state ('use client')
   - `src/contexts/PracticeContext.tsx` — Practice environment ('use client')
   - `src/contexts/ProfileNudgeVisibilityContext.tsx` — UI state ('use client')
   - `src/contexts/Providers.tsx` — Composed provider wrapper for root layout

4. **Auth UI Components**:
   - `src/components/NavbarAuth/` — Login/logout UI (copy/adapt)
   - Integration with Writer-A's Navbar component

5. **Interactive Components with API Dependencies**:
   - `src/components/TeachMePanel/` — Study mode chat (copy/adapt useStudyModeAPI)
   - `src/hooks/useCredits.ts` — Token metering hook (copy/adapt)

6. **Environment Configuration**:
   - `src/lib/env.ts` — Centralized environment variable access
   - Document all required env vars in `.env.example`

EXIT CRITERIA: Login via SSO works → authenticated user can view a lesson → progress tracking records completion → study mode chat sends/receives messages → token metering deducts credits.

NOTE: Your exit criteria E2E test requires Writer-A's layouts to exist. Start with auth client and context provider code (framework-agnostic), then wire into layouts once Writer-A signals completion. If Writer-A is not done when you're ready to test, message the team lead.

When finished, message the team lead: 'WRITER-C INTEGRATIONS DONE — [list of files created]'"
```

---

## PHASE 4: VERIFIER

**Task**: "Phase 4: Verifier — run verification matrix and content routing check"
**Model**: opus
**Effort**: max
**Depends on**: ALL Phase 3 writers complete

Spawn with this prompt:

```
"You are the verifier teammate for the Docusaurus → Next.js 16.2 migration.
You are part of an agent team — communicate via messages to the team lead.

YOUR MISSION: Systematically verify that the migrated Next.js app passes all 14 verification flows AND that content routes correctly.

READ IN ORDER:

1. `specs/nextjs-migration/spec.md` — Full spec with verification matrix (lines 187-205)
2. `specs/nextjs-migration/architect/verifier-brief.md` — Your detailed brief
3. `specs/nextjs-migration/architect/migration-mapping.md` — What should have changed
4. `specs/nextjs-migration/reference/REFERENCE-NOTES.md` — Migration decisions

VERIFICATION PROTOCOL:

Step 1 — Structural Checks (no server needed):
- `ls -R apps/learn-next/src/app/` — verify directory skeleton matches architect's plan
- `grep -r '@docusaurus/' apps/learn-next/src/ --include='*.ts' --include='*.tsx'` — MUST return 0 results
- `grep -r 'from.*@site/' apps/learn-next/src/ --include='*.ts' --include='*.tsx'` — MUST return 0 results
- Count MDX content files accessible via routing (should be 1,824)
- Count flashcard YAML files accessible (should be 671)
- Verify `apps/learn-next/project.json` exists with correct Nx targets

Step 2 — Build Check:
- Run `pnpm nx build learn-next` (or `cd apps/learn-next && pnpm build`)
- Record peak memory usage — MUST be under 4 GB
- Record build time
- Check for build errors/warnings

Step 3 — Dev Server Checks (start server, then verify each flow):
- Start: `pnpm nx serve learn-next` (or `cd apps/learn-next && pnpm dev`)
- Use next-devtools-mcp `get_errors` to check for runtime errors
- Use next-devtools-mcp `get_routes` to verify all routes exist

Step 4 — Verification Matrix (14 flows):

| # | Flow | Test | Pass Criteria |
|---|------|------|---------------|
| 1 | Login | Navigate to app, click login, complete OAuth2 PKCE flow | Session cookie set, user info displayed |
| 2 | Lesson rendering | Navigate to a lesson page | MDX renders, components load, no console errors |
| 3 | Progress tracking | Mark a lesson complete | Progress API called, state persists on reload |
| 4 | Flashcards | Open flashcard deck on a lesson | Cards render from .flashcards.yaml |
| 5 | Summaries | Navigate to summary page | Summary content renders |
| 6 | Leaderboard | Navigate to leaderboard | Ranking data loads from progress-api |
| 7 | Study Mode | Open TeachMePanel, send message | Response received from study-mode-api |
| 8 | Voice reading | Trigger voice reading | Browser TTS activates |
| 9 | Interactive Python | Run Python code in lesson | Pyodide executes, output displays |
| 10 | Token metering | Perform action that costs credits | Credit balance updates |
| 11 | Learner profile | View profile page | Profile data loads |
| 12 | OG images | Fetch /api/og?title=test | Valid image returned |
| 13 | SEO | Check page source for JSON-LD | Valid structured data present |
| 14 | Search | Search for a term | Results returned |
| 15 | Locale switching | Switch en → ur → zh-Hans via LocaleDropdown | Correct locale content renders, URL updates |
| 16 | Translated content | Navigate to /ur/docs/thesis | Urdu MDX renders correctly |
| 17 | ISR per-locale | Change one MDX file, rebuild | Only that page rebuilds, not full site |

For each flow: record PASS/FAIL + evidence (screenshot path, console output, or API response).

Step 5 — Content Routing Spot-Check:
- Pick 10 random lessons from different parts (0, 1, 2, 3, 4, 6, 7, 8, 9, 10)
- Verify each renders correctly
- Verify internal links between lessons work
- Verify breadcrumbs show correct hierarchy

Step 6 — Performance Baseline:
- Run Lighthouse on 3 pages (homepage, one lesson, one chapter index)
- Record scores (Performance, Accessibility, Best Practices, SEO)

DELIVERABLE: Write `specs/nextjs-migration/verification-report.md`:
- Overall: PASS or FAIL
- Per-flow results table (14 rows)
- Content routing spot-check results (10 rows)
- Lighthouse scores (3 pages)
- Build metrics (memory, time)
- Issues found (with file:line references)
- Recommended fixes (if any flows failed)

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'VERIFIER DONE — specs/nextjs-migration/verification-report.md written. Overall: [PASS/FAIL]. [N]/17 flows passed.'"
```

---

## LEAD COORDINATION RULES

1. Create team with TeamCreate (team name: "nextjs-migration")
2. Before spawning teammates, ensure `apps/learn-next/` exists with Next.js scaffold (run the setup commands above)
3. Create ALL tasks upfront with dependencies:
   - Task: "Phase 1: Architect" (no dependencies)
   - Task: "Phase 2: Reference-Builder" (depends on Phase 1)
   - Task: "Phase 3a: Writer-A Framework" (depends on Phase 2)
   - Task: "Phase 3b: Writer-B Plugins" (depends on Phase 2)
   - Task: "Phase 3c: Writer-C Integrations" (depends on Phase 2)
   - Task: "Phase 4: Verifier" (depends on Phase 3a + 3b + 3c)
4. Do NOT write code yourself — delegate everything to teammates
5. Wait for each phase to complete before starting the next
6. After Phase 1: review architect's directory skeleton before proceeding
7. After Phase 2: verify the reference lesson renders in browser before proceeding
8. Phase 3 writers spawn simultaneously — but if Writer-C reports they need Writer-A's layouts, relay Writer-A's completion status
9. After Phase 3: verify all three writers report completion before spawning verifier
10. After Phase 4: read the verification report. If FAIL:
    - Message the relevant writer with the failing flow details
    - Ask them to fix
    - Re-run verifier on fixed flows
11. If verification PASSES: commit all changes with message "feat: migrate learn-app from Docusaurus to Next.js 16.2 (Issue #880)"
12. Clean up: shut down all teammates, delete team

## MODEL PREFERENCES

| Teammate              | Model | Effort | Rationale                              |
| --------------------- | ----- | ------ | -------------------------------------- |
| Architect             | opus  | max    | Critical path — must get mapping right |
| Reference-Builder     | opus  | max    | Sets quality bar for all writers       |
| Writer-A Framework    | opus  | max    | Complex App Router + i18n architecture |
| Writer-B Plugins      | opus  | max    | Plugin migration requires precision    |
| Writer-C Integrations | opus  | max    | Auth/API integration is highest risk   |
| Verifier              | opus  | max    | Must catch regressions across 17 flows |

## ANTI-PATTERNS TO AVOID

- Do NOT use the Agent tool or spawn subagents — this is a TEAM with TEAMMATES
- Do NOT write code yourself — delegate everything to teammates
- Do NOT spawn Phase 3 teammates before Phase 2 completes AND reference lesson renders
- Do NOT spawn verifier before ALL Phase 3 writers complete
- Do NOT let writer teammates read the full Docusaurus codebase (only architect reads it all)
- Do NOT skip verification after all teammates finish
- Do NOT modify any microservice (SSO, content-api, progress-api, etc.)
- Do NOT use Pages Router patterns — App Router only
- Do NOT import from `@docusaurus/*` in the new app
- Do NOT add `import Flashcards from '@site/src/components/Flashcards'` or `import Quiz from '@site/src/components/Quiz'` — these are phantom imports that DO NOT EXIST as React components
