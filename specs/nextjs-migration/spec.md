# Spec: Docusaurus → Next.js 16.2 Migration

**Issue**: https://github.com/panaversity/agentfactory/issues/880
**SDD Level**: 2 (Spec-Anchored) — multi-session, 50+ files, multiple tracks
**Status**: Planning

---

## What We're Building

Rewrite `apps/learn-app` from Docusaurus 3.9.2 to Next.js 16.2 while preserving:

- All 1,824 MDX lesson files (content copies directly)
- All 120 React components (Radix + Shadcn + Tailwind)
- All 671 flashcard YAML sidecar files
- All API integrations (SSO, content-api, progress-api, study-mode-api, token-metering, learner-profile, profile-api)
- Full auth flow (OAuth2 PKCE via Better Auth SSO)
- SEO/structured data parity

## Why

1. **Binding constraint**: 7 GB heap / 8 GB Vercel limit. Upstream memory leak (`facebook/docusaurus#10944`). ~1 GB headroom. Content growth is linear → ceiling hit is inevitable.
2. **ISR**: Only changed pages rebuild on deploy. Eliminates the memory ceiling entirely.
3. **Agent-native**: AGENTS.md + `next-devtools-mcp` = 100% agent eval pass rate (vs 53% baseline). Vercel is investing heavily in AI agent tooling.
4. **Server runtime**: Route Handlers, Server Actions, middleware — features we need for AI integrations that Docusaurus (SSG-only) cannot provide.

## What Transfers for Free

- **MDX content** (1,824 files) — same unified/remark ecosystem
- **React components** (120 files) — React is React
- **Remark plugins** (6 custom) — same remark/rehype pipeline
- **Tailwind v4** — framework-agnostic
- **Vitest tests** (34) — framework-agnostic
- **API integrations** (6 services) — same fetch/client code
- **Flashcard YAMLs** (671) — processed by remark plugin

## What Needs Rewriting

| Component                  | From (Docusaurus)                                     | To (Next.js 16.2)                              | Complexity |
| -------------------------- | ----------------------------------------------------- | ---------------------------------------------- | ---------- |
| Framework config           | `docusaurus.config.ts`                                | `next.config.ts` + `layout.tsx`                | Medium     |
| Routing                    | Auto-generated sidebars                               | App Router filesystem routing                  | Medium     |
| 7 swizzled components      | `src/theme/*` (Root, Layout, Navbar, Footer, DocItem) | App Router layouts + components                | High       |
| 53 `@docusaurus/*` imports | `@docusaurus/Link`, `useDocusaurusContext`, etc.      | `next/link`, `next/navigation`, custom hooks   | Medium     |
| Search                     | `docusaurus-search-local` (Pagefind)                  | Pagefind standalone or Next.js search solution | Medium     |
| OG images                  | Custom Satori+Sharp plugin                            | Next.js `ImageResponse` API                    | Low        |
| Sidebar navigation         | `sidebars.ts` auto-generated                          | Custom component reading filesystem            | Medium     |
| Structured data            | Custom plugin                                         | Next.js Metadata API + JSON-LD                 | Low        |
| 8 context providers        | `src/contexts/*` wrapped in Root                      | App Router layout providers                    | Low        |
| Chapter manifest           | Custom build plugin                                   | Build-time generation or API route             | Low        |
| Summaries                  | Custom build plugin                                   | Build-time generation or API route             | Low        |

## Architecture

Same microservice architecture. Only the frontend framework changes.

```
                    ┌─────────────────┐
                    │  apps/learn-next │  ← NEW (Next.js 16.2)
                    │  (replaces       │
                    │   learn-app)     │
                    └────────┬────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                     │
   ┌────┴────┐     ┌────────┴────────┐    ┌──────┴──────┐
   │  SSO    │     │  content-api    │    │ progress-api │
   │ :3001   │     │  :8003          │    │ :8002        │
   └─────────┘     └─────────────────┘    └──────────────┘
        │                                         │
   ┌────┴────┐     ┌─────────────────┐    ┌──────┴──────┐
   │ token-  │     │ study-mode-api  │    │  learner-   │
   │ metering│     │ :8000           │    │  profile    │
   │ :8001   │     └─────────────────┘    └─────────────┘
   └─────────┘
```

---

## Tooling Stack

### MCPs (configure in `.mcp.json`)

| MCP                           | Purpose                                                  | When                         |
| ----------------------------- | -------------------------------------------------------- | ---------------------------- |
| `next-devtools-mcp`           | Dev server introspection: errors, routes, logs, metadata | During all development       |
| Playwright MCP                | Browser testing (built into next-devtools-mcp)           | Verification phase           |
| Vercel MCP (`mcp.vercel.com`) | Deployment management                                    | Phase 2+ (production deploy) |

### Agent Documentation (zero-effort, ships with Next.js)

```
AGENTS.md → node_modules/next/dist/docs/  (100% eval pass rate)
CLAUDE.md → @AGENTS.md                    (Claude Code integration)
```

Generated via: `npx @next/codemod agents-md`

### Skills (activate during migration)

| Skill                          | Role                                       |
| ------------------------------ | ------------------------------------------ |
| `/next-best-practices`         | Next.js 15+ patterns, v16 proxy middleware |
| `/vercel-react-best-practices` | 57 performance rules                       |
| `/seo-aeo-best-practices`      | EEAT, structured data, metadata            |
| `/fetch-library-docs`          | Context7 for any library API lookup        |
| `/tdd`                         | Test-driven verification                   |
| `/better-auth-best-practices`  | Auth flow patterns                         |
| `/nx-monorepo`                 | Monorepo integration                       |
| `/shadcn-ui`                   | Component library patterns                 |

### What We Don't Need

| Considered                       | Verdict                  | Why                                                                                                                                  |
| -------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| context-hub (`chub`)             | Skip                     | AGENTS.md bundles Next.js docs locally (100% accuracy). Context7 covers other libraries. context-hub has only 332 lines for Next.js. |
| Custom Next.js 16.2 skill        | Skip                     | AGENTS.md at `node_modules/next/dist/docs/` strictly outperforms skills (Vercel evals).                                              |
| Custom `/nextjs-migration` skill | Demoted to reference doc | Migration is orchestration (team), not lookup (skill). Mapping guide → `specs/nextjs-migration/research/docusaurus-mapping.md`       |
| Separate Playwright MCP          | Skip                     | Built into `next-devtools-mcp`                                                                                                       |
| Turborepo MCP                    | Watch                    | Proposed (`vercel/turborepo#10130`) but not shipped                                                                                  |

---

## Agent Team Structure

**Approach**: Full migration via agent team (not spike). Content copies directly — the real work is infrastructure + integration verification.

**Tool**: `/team-prompt-writer` Migration/Rewrite variant

### Team Composition

```
Lead (orchestrator — coordinates, does NOT write code)
│
├── Phase 1: Architect (Opus, plan approval)
│   Reads: docusaurus.config.ts, package.json, all src/theme/*,
│          all src/contexts/*, all src/lib/*, component inventory
│   Produces:
│   ├── Docusaurus→Next.js mapping guide (old path → new path)
│   ├── next.config.ts scaffold
│   ├── App Router directory skeleton (layouts, pages, components)
│   ├── Per-writer briefs with exact scope + exit criteria
│   └── Migration rules (what copies, what rewrites, what drops)
│
├── Phase 2: Reference-Builder (Opus)
│   Reads: architect spec + ONE lesson MDX + component imports
│   Produces: ONE fully-migrated lesson page demonstrating:
│   ├── MDX rendering in Next.js (with all remark plugins)
│   ├── Flashcard sidecar loading
│   ├── Component imports (tabs, collapsibles, code blocks)
│   ├── Metadata (frontmatter → Next.js Metadata API)
│   └── Navigation (sidebar, breadcrumbs, prev/next)
│
└── Phase 3: Writers (parallel, 4 tracks)
    │
    ├── Writer-A: Framework & Layout
    │   Scope: next.config.ts, App Router layouts (root, part, chapter, lesson),
    │          navigation (sidebar, navbar, footer), search integration
    │   Exit: `pnpm nx serve learn-next` renders homepage + one lesson
    │
    ├── Writer-B: Plugin Pipeline
    │   Scope: 6 remark plugins migration, flashcard processing,
    │          OG image generation (ImageResponse), structured data (Metadata API),
    │          chapter manifest, summaries generation
    │   Exit: All 6 remark plugins pass tests, OG image renders, JSON-LD validates
    │
    ├── Writer-C: Auth & API Integrations
    │   Scope: OAuth2 PKCE flow, 8 context providers, 6 API client libs,
    │          progress tracking, leaderboard, study mode, token metering
    │   Exit: Login → dashboard → lesson progress → leaderboard flow works E2E
    │
    └── Writer-D: Content & Verification
        Scope: MDX content loading (1,824 files), routing validation,
               flashcard YAML loading (671 files), visual regression baseline
        Exit: All routes resolve, no 404s, content renders correctly
```

### Critical Path

```
Architect → Reference-Builder → [Writer-A, Writer-B] → Writer-C → Writer-D
                                  (parallel)            (needs A+B)  (needs all)
```

Writer-C depends on A (layouts must exist for auth to wire into) and B (plugins must work for content to render correctly for testing). Writer-D is the final verification pass.

### Verification Matrix (What Must Not Break)

| Flow                   | Components                              | API Boundaries          | Test Method                             |
| ---------------------- | --------------------------------------- | ----------------------- | --------------------------------------- |
| **Login**              | NavbarAuth → SSO OAuth2 PKCE            | SSO `:3001`             | E2E: login, verify session              |
| **Lesson rendering**   | MDX + remark plugins + components       | content-api `:8003`     | Visual: compare screenshots             |
| **Progress tracking**  | ProgressProvider → API calls            | progress-api `:8002`    | E2E: complete lesson, verify state      |
| **Flashcards**         | `.flashcards.yaml` → `<Flashcards>`     | None (build-time)       | Render: verify deck loads               |
| **Summaries**          | Summary plugin → summary page           | None (build-time)       | Render: verify content                  |
| **Leaderboard**        | LeaderboardPage → progress-api          | progress-api `:8002`    | E2E: verify ranking data                |
| **Study Mode**         | TeachMePanel → ChatKit → study-mode-api | study-mode-api `:8000`  | E2E: send message, get response         |
| **Voice reading**      | VoiceControlDock → browser TTS          | None (client-side)      | Functional: trigger, verify audio       |
| **Interactive Python** | InteractivePython → Pyodide WASM        | None (client-side)      | Functional: run code, verify output     |
| **Token metering**     | API calls → token-metering              | token-metering `:8001`  | E2E: verify credit deduction            |
| **Learner profile**    | ProfileProvider → learner-profile API   | learner-profile API     | E2E: load profile, verify data          |
| **OG images**          | ImageResponse API                       | None (build-time)       | Visual: verify image renders            |
| **SEO**                | Metadata API + JSON-LD                  | None (build-time)       | Validate: structured data testing tool  |
| **Search**             | Pagefind or replacement                 | None (build-time index) | Functional: search term, verify results |

---

## Constraints

- **Do NOT modify any microservice** (SSO, content-api, progress-api, etc.) — frontend-only change
- **Do NOT lose any content** — all 1,824 MDX files must render
- **Do NOT break existing URLs** — redirects or identical routing required (SEO)
- **Do NOT introduce new dependencies** without justification
- **Nx monorepo structure must be preserved** — `apps/learn-next/` as new app target

## Success Criteria

1. `pnpm nx serve learn-next` starts without errors
2. All 1,824 lesson pages render correctly
3. All 14 verification matrix flows pass E2E
4. Build completes under 4 GB memory (vs current 7 GB)
5. Lighthouse score >= current Docusaurus scores
6. `pnpm nx affected -t test` passes
7. No broken links (all internal navigation works)
8. ISR verified: content change → incremental rebuild (not full rebuild)

---

## Phases

### Phase 0: Scaffold (this session)

- [ ] Create `apps/learn-next/` via `create-next-app`
- [ ] Run `npx @next/codemod agents-md`
- [ ] Add `.mcp.json` with `next-devtools-mcp`
- [ ] Nx integration (`project.json`, build/serve targets)
- [ ] Generate team prompt via `/team-prompt-writer`

### Phase 1: Infrastructure (team Phase 1-2)

- [ ] Architect produces mapping guide + skeleton
- [ ] Reference-builder produces gold-standard migrated lesson

### Phase 2: Migration (team Phase 3)

- [ ] 4 writers execute in parallel/sequential per critical path
- [ ] Atomic commits per track

### Phase 3: Verification

- [ ] Full verification matrix (14 flows)
- [ ] Visual regression comparison
- [ ] Performance benchmarking (build memory, Lighthouse)

### Phase 4: Cutover

- [ ] Rename `learn-app` → `learn-app-docusaurus` (archive)
- [ ] Rename `learn-next` → `learn-app`
- [ ] Update Nx targets, CI/CD, Vercel config
- [ ] URL redirect verification

---

## References

- GitHub Issue: https://github.com/panaversity/agentfactory/issues/880
- Next.js AI Agents Guide: https://nextjs.org/docs/app/guides/ai-agents
- AGENTS.md vs Skills Evals: https://vercel.com/blog/agents-md-outperforms-skills-in-our-agent-evals
- Next.js MCP Server: https://nextjs.org/docs/app/guides/mcp
- Next.js 16.2 AI Blog: https://nextjs.org/blog/next-16-2-ai
- Agentic Future Blog: https://nextjs.org/blog/agentic-future
- next-devtools-mcp: https://github.com/vercel/next-devtools-mcp
- Playwright MCP: https://github.com/microsoft/playwright-mcp
- Vercel agent-browser: https://github.com/vercel-labs/agent-browser
- Context Hub: https://github.com/andrewyng/context-hub (evaluated, deferred)
- Turborepo MCP Discussion: https://github.com/vercel/turborepo/discussions/10130 (watch)
