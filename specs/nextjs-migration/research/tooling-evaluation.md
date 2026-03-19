# Tooling Evaluation for Next.js 16.2 Migration

**Date**: 2026-03-20

---

## AGENTS.md (RECOMMENDED — Primary Knowledge Source)

Next.js 16.2 ships version-matched docs inside `node_modules/next/dist/docs/`:

```
node_modules/next/dist/docs/
├── 01-app/
│   ├── 01-getting-started/
│   ├── 02-guides/
│   └── 03-api-reference/
├── 02-pages/
├── 03-architecture/
└── index.mdx
```

**Performance** (Vercel evals):
- Baseline (no docs): 53%
- Skills (default): 53% (no improvement)
- Skills (with instructions): 79%
- **AGENTS.md docs index: 100%** (+47pp)

**Setup**: `npx @next/codemod agents-md` or `create-next-app` generates automatically.
**Claude Code**: `CLAUDE.md` uses `@AGENTS.md` import syntax.

**Verdict**: This IS the Next.js 16.2 expertise source. No custom skill needed.

---

## next-devtools-mcp (RECOMMENDED — Primary MCP)

Official Next.js MCP server. Endpoint: `/_next/mcp` (built into dev server).

**Setup**:
```json
{
  "mcpServers": {
    "next-devtools": {
      "command": "npx",
      "args": ["-y", "next-devtools-mcp@latest"]
    }
  }
}
```

**Tools**:
- `get_errors` — build errors, runtime errors, type errors
- `get_logs` — browser console logs + server output
- `get_page_metadata` — routes, components, rendering info
- `get_project_metadata` — project structure, config, dev server URL
- `get_routes` — all filesystem routes (App Router + Pages Router)
- `get_server_action_by_id` — Server Action source lookup
- Built-in Playwright MCP integration
- Migration/upgrade codemods
- Next.js knowledge base queries

**Verdict**: Critical for development. Agents verify their work against the running dev server in real-time.

---

## Vercel MCP (DEFERRED — Phase 2+)

Remote MCP at `mcp.vercel.com` with OAuth. Manages Vercel account:
- Search Vercel docs
- Manage projects/deployments
- Analyze logs

**Verdict**: Useful for deployment phase, not migration development.

---

## Context Hub (EVALUATED — Not Needed)

Andrew Ng's tool (`@aisuite/chub`, 10.6K stars, MIT, March 2026).

**What it does**: CLI for fetching curated, LLM-optimized docs. `chub search`, `chub get`, `chub annotate`.

**Next.js coverage**: 332 lines, basics only (16.1.6). One entry.
**Context7 coverage**: 392 pages, 2,574 snippets, 572K tokens.
**AGENTS.md coverage**: Full version-matched docs shipped in npm package.

**Novel feature**: `chub annotate` — agents save workarounds to local registry for future sessions.

**Verdict**: Architecturally interesting (curated + annotatable) but too shallow for our needs. AGENTS.md + Context7 covers everything. Could add later for third-party API docs (Stripe, Supabase) if needed.

---

## Playwright MCP (INCLUDED — Via next-devtools-mcp)

Microsoft's `playwright-mcp`. 25+ browser control tools via accessibility snapshots.
Already integrated into `next-devtools-mcp`. No separate setup needed.

---

## Vercel agent-browser (OPTIONAL — Nice-to-Have)

Browser automation CLI for AI agents. `npx skills add agent-browser`.
- Annotated screenshots (numbered labels on interactive elements)
- Designed for "build → launch → test → fix" loop

**Verdict**: Complementary to Playwright MCP. Add if visual verification needs improvement.

---

## Turborepo MCP (WATCH — Not Shipped)

Proposed in `vercel/turborepo#10130`. Would give monorepo-aware context to agents.
Not available yet. Watch for release.

---

## Skills Assessment

### HIGH relevance
| Skill | Coverage | Gap |
|-------|----------|-----|
| `/next-best-practices` | Next.js 15+ patterns, v16 middleware→proxy | No migration path |
| `/vercel-react-best-practices` | 57 performance rules | No content-heavy site optimization |
| `/seo-aeo-best-practices` | EEAT, structured data, metadata | No metadata migration strategy |
| `/better-auth-best-practices` | Better Auth OAuth, sessions, plugins | No auth flow testing during migration |
| `/nx-monorepo` | Nx workspace, affected, caching | No monorepo migration risks |

### MEDIUM relevance
| Skill | Coverage | Gap |
|-------|----------|-----|
| `/fetch-library-docs` | Context7 for any library | Generic, not migration-specific |
| `/tdd` | Red-green-refactor | No content testing |
| `/shadcn-ui` | Component patterns | Not critical |
| `/docker` | Containerization | Phase 2+ |

### LOW relevance
| Skill | Why |
|-------|-----|
| `/architecture-patterns` | Backend-focused (Clean Architecture) |
| `/frontend-design` | Visual design, not migration |
| `/web-design-guidelines` | General UI review |

### Gap: No Migration Skill Needed
Originally proposed building `/nextjs-migration`. Demoted to reference document (`specs/nextjs-migration/research/docusaurus-mapping.md`) because:
1. Migration is orchestration (team), not lookup (skill)
2. AGENTS.md handles Next.js knowledge
3. The architect teammate will produce the mapping as Phase 1 deliverable
