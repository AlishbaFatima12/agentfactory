# API Documentation Migration: Team Prompt

Create an agent team to migrate 142 API documentation files from the flat wiki at `docs/wiki/api/` to a structured Docusaurus 3.x site at `apps/api-docs/`. The migration covers 6 API domains (Auth, Users, Billing, Analytics, Webhooks, Admin) totaling ~18,000 lines of source content. Every endpoint must be converted to a structured doc page with YAML frontmatter, description, request/response schemas, curl + SDK examples (Python, Node.js, Go), error codes, related endpoints, and interactive "Try it" buttons.

IMPORTANT: This MUST be an agent team (https://code.claude.com/docs/en/agent-teams), NOT subagents. Use TeamCreate to create the team. Spawn teammates; do NOT use the Agent tool or spawn subagents. Every worker below is a TEAMMATE in the team, coordinated through the shared task list and inter-teammate messaging.

---

## Team Structure

You are the team lead. You coordinate. You do NOT write content yourself.
Use the shared task list to track all work.
Enforce phase ordering via task dependencies.

**Total teammates: 10**
- Phase 1: 1 architect
- Phase 2: 1 reference-builder
- Phase 3: 6 writers (parallel)
- Phase 4: 1 quality reviewer

---

## Phase 1: Architect (1 teammate, blocks everything)

**Task:** `architect-api-docs-migration`
**Spawn:** 1 teammate named `architect`
**Model:** Opus
**Plan approval:** Enabled (lead reviews before architect writes)

**Teammate prompt:**

"You are the architect teammate for the API Documentation Migration.
You are part of an agent team; communicate via messages to the team lead.

READ IN ORDER:

1. `docs/wiki/api/` (ALL 142 source files across all 6 domains: Auth, Users, Billing, Analytics, Webhooks, Admin)
2. An existing high-quality Docusaurus API docs site for format reference (if one exists in the codebase, otherwise use Stripe/Twilio conventions)
3. `.specify/memory/constitution.md` (project identity and standards)

DELIVERABLES (write all to `specs/api-docs-migration/`):

1. **Master Architecture Spec** (`specs/api-docs-migration/architecture.md`):
   - Complete directory skeleton for `apps/api-docs/` showing every file path
   - Mapping of old wiki paths to new Docusaurus paths (for redirect preservation)
   - Endpoint doc template: YAML frontmatter fields, section order (description, authentication, request params, request body, response schema, error codes, curl example, SDK examples, related endpoints, Try it button)
   - Docusaurus sidebar configuration structure (domain > resource > endpoint)
   - Versioning strategy: how v2 (current) and v3 (beta) coexist side by side
   - Component/pattern catalog: how to render each recurring element (code tabs for SDK examples, admonitions for deprecation warnings, API playground embed pattern)

2. **Shared Writer's Brief** (`specs/api-docs-migration/shared-brief.md`):
   - Project identity: what these docs ARE, who they serve, what tone/voice to use
   - Recurring patterns: how to document query params vs body params, how to show nested objects, how to document pagination, how to cross-link related endpoints
   - Error code documentation standard: format, common codes, domain-specific codes
   - SDK example conventions: consistent variable naming, import patterns, error handling
   - Cross-reference map: how domains link to each other (e.g., Auth tokens used in every other domain, Billing references Users)

3. **Per-Writer Briefs** (one file per writer in `specs/api-docs-migration/briefs/`):
   - `writer-landing.md`: Landing page, getting started guide, authentication overview, SDK setup, shared components
   - `writer-auth.md`: Auth domain, 23 endpoints, exact source file list, exact output file paths
   - `writer-users.md`: Users domain, 28 endpoints, exact source file list, exact output file paths
   - `writer-billing.md`: Billing domain, 31 endpoints, exact source file list, exact output file paths
   - `writer-analytics-webhooks.md`: Analytics (18) + Webhooks (12) domains, 30 endpoints total, exact source file list, exact output file paths
   - `writer-admin.md`: Admin domain, 30 endpoints, exact source file list, exact output file paths

   Each brief must include:
   - Exact wiki source files this writer owns (zero overlap with other writers)
   - Exact output file paths to create
   - Domain-specific notes (e.g., Billing has usage metering which is complex; Auth has OAuth2 flows needing sequence diagrams)
   - Exit criteria: what 'done' means for this writer's scope
   - Redirect entries this writer must produce (old path to new path)

4. **Output Directory README** (`apps/api-docs/README.md`):
   - API docs site overview
   - How to run locally (`npm start` / Docusaurus dev server)
   - Directory structure explanation
   - Contribution guide for adding new endpoints

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'ARCHITECT DONE' and list all files created."

---

## Phase 2: Reference-Builder (1 teammate, blocks Phase 3)

**Task:** `reference-builder-api-docs`
**Spawn:** 1 teammate named `reference-builder`
**Model:** Opus
**Depends on:** Phase 1 (architect must complete first)

**Teammate prompt:**

"You are the reference-builder teammate for the API Documentation Migration.
You are part of an agent team; communicate via messages to the team lead.

READ IN ORDER:

1. `specs/api-docs-migration/architecture.md` (master architecture spec from architect)
2. `specs/api-docs-migration/shared-brief.md` (shared context and patterns)
3. ONE wiki source file from the Auth domain (pick the most representative endpoint, e.g., token refresh or OAuth2 authorize)
4. An existing high-quality API doc page from the codebase or reference sites for quality benchmark

DELIVERABLE: ONE gold-standard endpoint documentation page that demonstrates ALL patterns.

Write to: `apps/api-docs/docs/auth/[endpoint-name].md`

This reference page MUST demonstrate every pattern the writers will use:

- [ ] Complete YAML frontmatter (title, description, sidebar_label, sidebar_position, api_domain, api_version, tags)
- [ ] Opening description paragraph (what the endpoint does, when to use it)
- [ ] Authentication requirements section
- [ ] Request section: HTTP method + path, path parameters, query parameters, request body with JSON schema
- [ ] Response section: success response with JSON schema, field descriptions
- [ ] Error codes section: table with status code, error type, description, resolution
- [ ] Code examples using Docusaurus Tabs component: curl, Python, Node.js, Go
- [ ] Related endpoints section with working cross-links
- [ ] Interactive 'Try it' button/playground embed
- [ ] Version badge or indicator (v2 current, v3 beta if applicable)
- [ ] Deprecation admonition pattern (if this endpoint has deprecated fields)
- [ ] Pagination pattern (if applicable)

RULES:

- NO phantom imports: only use Docusaurus components that exist (@docusaurus/theme-common Tabs, TabItem, admonitions)
- All curl examples must use placeholder variables (e.g., `$API_KEY`, `$BASE_URL`) consistently
- SDK examples must follow the conventions in the shared brief
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'REFERENCE-BUILDER DONE' and name the reference file created."

---

## Phase 3: Writers (6 teammates, all parallel)

Spawn ALL 6 writer teammates SIMULTANEOUSLY after Phase 2 completes.
Each writer teammate gets a SELF-CONTAINED prompt (fully inlined, no placeholders).

---

### Writer 1: Landing & Getting Started

**Task:** `writer-landing`
**Spawn:** 1 teammate named `writer-landing`
**Model:** Sonnet
**Depends on:** Phase 2

**Teammate prompt:**

"You are the writer-landing teammate for the API Documentation Migration.
You are part of an agent team; communicate via messages to the team lead.

READ IN ORDER:

1. `specs/api-docs-migration/architecture.md` (master spec with file paths, patterns, structure)
2. `specs/api-docs-migration/shared-brief.md` (shared context: identity, patterns, protocols)
3. `specs/api-docs-migration/briefs/writer-landing.md` (YOUR specific brief with scope and exit criteria)
4. The reference endpoint page created by reference-builder in `apps/api-docs/docs/auth/` (quality benchmark, match its patterns)
5. `docs/wiki/api/` top-level files only: README, index, getting-started, or equivalent introductory files

RULES:

- Match the reference page's quality, formatting conventions, and Docusaurus component usage
- NO phantom imports: only use Docusaurus components that actually exist
- All code examples must use consistent placeholder variables ($API_KEY, $BASE_URL)
- Execute autonomously without asking for confirmation

YOUR SCOPE:

- `apps/api-docs/docs/intro.md` (landing page: what this API does, key concepts, quick links to each domain)
- `apps/api-docs/docs/getting-started.md` (authentication setup, first API call walkthrough, SDK installation for Python/Node.js/Go)
- `apps/api-docs/docs/authentication.md` (authentication overview: API keys vs OAuth2, token lifecycle, scopes reference)
- `apps/api-docs/docs/errors.md` (global error codes reference, rate limiting, retry strategies)
- `apps/api-docs/docs/versioning.md` (v2 vs v3 guide, migration path, version selection)
- `apps/api-docs/docs/sdks.md` (SDK overview, installation, configuration for all three languages)
- `apps/api-docs/sidebars.js` or sidebar config as specified by architect
- `apps/api-docs/docusaurus.config.js` (site config with versioning, search, playground plugin)
- Redirect mapping file (old wiki URLs to new Docusaurus paths) as specified by architect

When finished, message the team lead: 'WRITER LANDING DONE' and list all files created."

---

### Writer 2: Auth Domain

**Task:** `writer-auth`
**Spawn:** 1 teammate named `writer-auth`
**Model:** Sonnet
**Depends on:** Phase 2

**Teammate prompt:**

"You are the writer-auth teammate for the API Documentation Migration.
You are part of an agent team; communicate via messages to the team lead.

READ IN ORDER:

1. `specs/api-docs-migration/architecture.md` (master spec with file paths, patterns, structure)
2. `specs/api-docs-migration/shared-brief.md` (shared context: identity, patterns, protocols)
3. `specs/api-docs-migration/briefs/writer-auth.md` (YOUR specific brief with exact source files, output paths, and exit criteria)
4. The reference endpoint page created by reference-builder in `apps/api-docs/docs/auth/` (quality benchmark, match it exactly)
5. `docs/wiki/api/` Auth domain source files ONLY (the exact files listed in your brief, approximately 23 endpoint files)

RULES:

- Match the reference page's quality, format, and patterns exactly
- NO phantom imports: only use Docusaurus components that actually exist
- Every endpoint must have: YAML frontmatter, description, auth requirements, request/response schemas, error codes, curl + 3 SDK examples, related endpoints, Try it button
- OAuth2 flow endpoints need sequence diagram or step-by-step flow description
- Token endpoints need clear lifecycle documentation (creation, refresh, revocation)
- Execute autonomously without asking for confirmation

YOUR SCOPE:

- All endpoint doc pages for the Auth domain (~23 files) in `apps/api-docs/docs/auth/`
- Auth domain index page: `apps/api-docs/docs/auth/index.md` (domain overview, endpoint listing, common auth patterns)
- Source: Auth wiki files as listed in your brief
- Do NOT touch any files outside `apps/api-docs/docs/auth/`

When finished, message the team lead: 'WRITER AUTH DONE' and list all files created."

---

### Writer 3: Users Domain

**Task:** `writer-users`
**Spawn:** 1 teammate named `writer-users`
**Model:** Sonnet
**Depends on:** Phase 2

**Teammate prompt:**

"You are the writer-users teammate for the API Documentation Migration.
You are part of an agent team; communicate via messages to the team lead.

READ IN ORDER:

1. `specs/api-docs-migration/architecture.md` (master spec with file paths, patterns, structure)
2. `specs/api-docs-migration/shared-brief.md` (shared context: identity, patterns, protocols)
3. `specs/api-docs-migration/briefs/writer-users.md` (YOUR specific brief with exact source files, output paths, and exit criteria)
4. The reference endpoint page created by reference-builder in `apps/api-docs/docs/auth/` (quality benchmark, match it exactly)
5. `docs/wiki/api/` Users domain source files ONLY (the exact files listed in your brief, approximately 28 endpoint files)

RULES:

- Match the reference page's quality, format, and patterns exactly
- NO phantom imports: only use Docusaurus components that actually exist
- Every endpoint must have: YAML frontmatter, description, auth requirements, request/response schemas, error codes, curl + 3 SDK examples, related endpoints, Try it button
- User CRUD endpoints need clear documentation of required vs optional fields
- Permissions and roles endpoints need scope/permission matrix
- Team membership endpoints need cross-links to Auth (scopes) and Billing (seat limits)
- Execute autonomously without asking for confirmation

YOUR SCOPE:

- All endpoint doc pages for the Users domain (~28 files) in `apps/api-docs/docs/users/`
- Users domain index page: `apps/api-docs/docs/users/index.md` (domain overview, resource model, endpoint listing)
- Source: Users wiki files as listed in your brief
- Do NOT touch any files outside `apps/api-docs/docs/users/`

When finished, message the team lead: 'WRITER USERS DONE' and list all files created."

---

### Writer 4: Billing Domain

**Task:** `writer-billing`
**Spawn:** 1 teammate named `writer-billing`
**Model:** Sonnet
**Depends on:** Phase 2

**Teammate prompt:**

"You are the writer-billing teammate for the API Documentation Migration.
You are part of an agent team; communicate via messages to the team lead.

READ IN ORDER:

1. `specs/api-docs-migration/architecture.md` (master spec with file paths, patterns, structure)
2. `specs/api-docs-migration/shared-brief.md` (shared context: identity, patterns, protocols)
3. `specs/api-docs-migration/briefs/writer-billing.md` (YOUR specific brief with exact source files, output paths, and exit criteria)
4. The reference endpoint page created by reference-builder in `apps/api-docs/docs/auth/` (quality benchmark, match it exactly)
5. `docs/wiki/api/` Billing domain source files ONLY (the exact files listed in your brief, approximately 31 endpoint files)

RULES:

- Match the reference page's quality, format, and patterns exactly
- NO phantom imports: only use Docusaurus components that actually exist
- Every endpoint must have: YAML frontmatter, description, auth requirements, request/response schemas, error codes, curl + 3 SDK examples, related endpoints, Try it button
- Subscription lifecycle endpoints need state diagram or transition documentation
- Usage metering endpoints need clear units, aggregation, and billing cycle documentation
- Invoice and payment method endpoints need PCI compliance notes where relevant
- Credits endpoints need cross-links to Usage metering
- Execute autonomously without asking for confirmation

YOUR SCOPE:

- All endpoint doc pages for the Billing domain (~31 files) in `apps/api-docs/docs/billing/`
- Billing domain index page: `apps/api-docs/docs/billing/index.md` (domain overview, billing model, endpoint listing)
- Source: Billing wiki files as listed in your brief
- Do NOT touch any files outside `apps/api-docs/docs/billing/`

When finished, message the team lead: 'WRITER BILLING DONE' and list all files created."

---

### Writer 5: Analytics + Webhooks Domains

**Task:** `writer-analytics-webhooks`
**Spawn:** 1 teammate named `writer-analytics-webhooks`
**Model:** Sonnet
**Depends on:** Phase 2

**Teammate prompt:**

"You are the writer-analytics-webhooks teammate for the API Documentation Migration.
You are part of an agent team; communicate via messages to the team lead.

READ IN ORDER:

1. `specs/api-docs-migration/architecture.md` (master spec with file paths, patterns, structure)
2. `specs/api-docs-migration/shared-brief.md` (shared context: identity, patterns, protocols)
3. `specs/api-docs-migration/briefs/writer-analytics-webhooks.md` (YOUR specific brief with exact source files, output paths, and exit criteria)
4. The reference endpoint page created by reference-builder in `apps/api-docs/docs/auth/` (quality benchmark, match it exactly)
5. `docs/wiki/api/` Analytics AND Webhooks domain source files ONLY (the exact files listed in your brief, approximately 30 endpoint files total)

RULES:

- Match the reference page's quality, format, and patterns exactly
- NO phantom imports: only use Docusaurus components that actually exist
- Every endpoint must have: YAML frontmatter, description, auth requirements, request/response schemas, error codes, curl + 3 SDK examples, related endpoints, Try it button
- Analytics: custom query endpoints need query syntax documentation with examples; export endpoints need format options and size limits
- Webhooks: delivery and retry logic need sequence diagrams or flow descriptions; signing verification needs code examples in all 3 SDKs; testing endpoints need clear sandbox/staging notes
- Execute autonomously without asking for confirmation

YOUR SCOPE:

Analytics domain (~18 files):
- All endpoint doc pages in `apps/api-docs/docs/analytics/`
- Analytics domain index page: `apps/api-docs/docs/analytics/index.md`

Webhooks domain (~12 files):
- All endpoint doc pages in `apps/api-docs/docs/webhooks/`
- Webhooks domain index page: `apps/api-docs/docs/webhooks/index.md`

- Source: Analytics + Webhooks wiki files as listed in your brief
- Do NOT touch any files outside `apps/api-docs/docs/analytics/` and `apps/api-docs/docs/webhooks/`

When finished, message the team lead: 'WRITER ANALYTICS-WEBHOOKS DONE' and list all files created."

---

### Writer 6: Admin Domain

**Task:** `writer-admin`
**Spawn:** 1 teammate named `writer-admin`
**Model:** Sonnet
**Depends on:** Phase 2

**Teammate prompt:**

"You are the writer-admin teammate for the API Documentation Migration.
You are part of an agent team; communicate via messages to the team lead.

READ IN ORDER:

1. `specs/api-docs-migration/architecture.md` (master spec with file paths, patterns, structure)
2. `specs/api-docs-migration/shared-brief.md` (shared context: identity, patterns, protocols)
3. `specs/api-docs-migration/briefs/writer-admin.md` (YOUR specific brief with exact source files, output paths, and exit criteria)
4. The reference endpoint page created by reference-builder in `apps/api-docs/docs/auth/` (quality benchmark, match it exactly)
5. `docs/wiki/api/` Admin domain source files ONLY (the exact files listed in your brief, approximately 30 endpoint files)

RULES:

- Match the reference page's quality, format, and patterns exactly
- NO phantom imports: only use Docusaurus components that actually exist
- Every endpoint must have: YAML frontmatter, description, auth requirements, request/response schemas, error codes, curl + 3 SDK examples, related endpoints, Try it button
- System config and feature flag endpoints need clear permission/role requirements (admin-only access)
- Audit log endpoints need filtering, pagination, and retention documentation
- Rate limit endpoints need clear relationship to global rate limiting docs
- Health check endpoints need monitoring integration notes
- Execute autonomously without asking for confirmation

YOUR SCOPE:

- All endpoint doc pages for the Admin domain (~30 files) in `apps/api-docs/docs/admin/`
- Admin domain index page: `apps/api-docs/docs/admin/index.md` (domain overview, admin permissions model, endpoint listing)
- Source: Admin wiki files as listed in your brief
- Do NOT touch any files outside `apps/api-docs/docs/admin/`

When finished, message the team lead: 'WRITER ADMIN DONE' and list all files created."

---

## Phase 4: Quality Reviewer (1 teammate, depends on ALL Phase 3 writers)

**Task:** `quality-reviewer-api-docs`
**Spawn:** 1 teammate named `quality-reviewer`
**Model:** Opus
**Depends on:** ALL Phase 3 writer tasks must complete first

**Teammate prompt:**

"You are the quality-reviewer teammate for the API Documentation Migration.
You are part of an agent team; communicate via messages to the team lead.

READ IN ORDER:

1. `specs/api-docs-migration/architecture.md` (master architecture spec)
2. `specs/api-docs-migration/shared-brief.md` (shared brief with patterns and conventions)
3. The reference endpoint page in `apps/api-docs/docs/auth/` created by the reference-builder (this is the quality benchmark)
4. ALL output files in `apps/api-docs/docs/` (every file produced by every writer)

IMPORTANT: You are reviewing a documentation migration. Focus on these universal checks:

**Consistency checks:**
- [ ] Every endpoint file has complete YAML frontmatter with all required fields
- [ ] Every endpoint file follows the same section order as the reference page
- [ ] Docusaurus Tabs component usage is consistent (same import, same tab labels: curl/Python/Node.js/Go)
- [ ] Placeholder variables are consistent across all files ($API_KEY, $BASE_URL, etc.)
- [ ] Error code tables use the same column format everywhere
- [ ] Cross-links between related endpoints actually point to correct file paths

**Completeness checks:**
- [ ] All 142 source endpoints have corresponding output files (compare source file count per domain vs output)
- [ ] No endpoint is missing any required section (description, auth, request, response, errors, examples, related)
- [ ] Every domain has an index page
- [ ] Landing pages exist (intro, getting-started, authentication, errors, versioning, sdks)
- [ ] Redirect mapping covers all old wiki URLs

**Quality checks:**
- [ ] SDK examples are syntactically valid (no placeholder code that would fail)
- [ ] No phantom imports (only real Docusaurus components used)
- [ ] No em-dash overuse (0-1 per file)
- [ ] Descriptions are clear and actionable, not just restating the endpoint path
- [ ] Version indicators (v2/v3) are present where the architect specified them

**Content-specific checks:**
- [ ] Auth domain: OAuth2 flows are clearly documented with steps
- [ ] Billing domain: subscription state transitions are documented
- [ ] Webhooks domain: signing verification has working code examples
- [ ] Analytics domain: custom query syntax is documented with examples
- [ ] Admin domain: permission requirements are clearly stated

DELIVERABLE: Write a quality report to `specs/api-docs-migration/quality-report.md` containing:

1. **Overall score**: Pass / Conditional Pass / Fail
2. **Per-writer summary**: writer name, files reviewed, issues found, severity
3. **Issues list**: each issue with file path, line number (if applicable), severity (Critical/Major/Minor), description, suggested fix
4. **Cross-cutting patterns**: any systemic issues appearing across multiple writers

If overall score is Fail, clearly state which issues MUST be fixed before the migration is complete.

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'QUALITY REVIEWER DONE' and state the overall score."

---

## Lead Coordination Rules

1. Create the team with TeamCreate. Name it `api-docs-migration`.
2. Create ALL tasks upfront with dependencies:
   - `architect-api-docs-migration` (no dependencies)
   - `reference-builder-api-docs` (depends on: architect-api-docs-migration)
   - `writer-landing` (depends on: reference-builder-api-docs)
   - `writer-auth` (depends on: reference-builder-api-docs)
   - `writer-users` (depends on: reference-builder-api-docs)
   - `writer-billing` (depends on: reference-builder-api-docs)
   - `writer-analytics-webhooks` (depends on: reference-builder-api-docs)
   - `writer-admin` (depends on: reference-builder-api-docs)
   - `quality-reviewer-api-docs` (depends on: ALL 6 writer tasks)
3. Spawn the architect teammate first. Wait for Phase 1 to complete.
4. Review the architect's directory skeleton before approving. Verify: all 142 endpoints mapped, all 6 domains present, redirect mapping included, versioning strategy defined.
5. Spawn the reference-builder teammate. Wait for Phase 2 to complete.
6. Review the reference page. Verify it demonstrates all required patterns (frontmatter, tabs, error table, Try it button, cross-links).
7. Spawn ALL 6 writer teammates simultaneously. Wait for all to complete.
8. Do NOT write content yourself. Coordinate only.
9. If a teammate appears stuck (no progress after extended time), message them to check status. If unresponsive, spawn a replacement teammate with the same prompt.
10. Spawn the quality reviewer after ALL writers report done. Wait for the quality report.
11. If quality report says Fail: identify which writers need fixes, message them with specific issues, wait for corrections, then re-run quality review.
12. After quality review passes, run structural verification:
    - `ls -R apps/api-docs/docs/` to verify directory tree matches architect's skeleton
    - Count files per domain and compare against expected counts (Auth: ~24, Users: ~29, Billing: ~32, Analytics: ~19, Webhooks: ~13, Admin: ~31, plus landing pages)
    - Spot-check YAML frontmatter from one random file per writer
    - `grep -r "import.*from" apps/api-docs/docs/` to check for phantom imports
    - Verify redirect mapping file exists and covers all 142 old wiki URLs
13. After verification passes, shut down all teammates with SendMessage (shutdown_request).
14. Delete the team with TeamDelete.

---

## Model Preferences

| Teammate              | Model  | Rationale                                              |
| --------------------- | ------ | ------------------------------------------------------ |
| architect             | Opus   | Reads all 142 source files, designs complete structure |
| reference-builder     | Opus   | Sets quality bar for all writers                       |
| writer-landing        | Sonnet | Structured content, follows reference closely          |
| writer-auth           | Sonnet | Structured content, follows reference closely          |
| writer-users          | Sonnet | Structured content, follows reference closely          |
| writer-billing        | Sonnet | Structured content, follows reference closely          |
| writer-analytics-webhooks | Sonnet | Structured content, follows reference closely      |
| writer-admin          | Sonnet | Structured content, follows reference closely          |
| quality-reviewer      | Opus   | Needs to evaluate quality across all output files      |

---

## Anti-Patterns to Avoid

- Do NOT use the Agent tool or spawn subagents. This is a TEAM with TEAMMATES.
- Do NOT write content yourself. Delegate everything to teammates.
- Do NOT spawn Phase 3 teammates before Phase 2 completes.
- Do NOT spawn the quality reviewer before ALL Phase 3 writers complete.
- Do NOT let writer teammates read the full source wiki (only the architect reads all 142 files; writers read only their assigned domain files).
- Do NOT approve the architect's plan without reviewing the directory structure and verifying all 142 endpoints are mapped.
- Do NOT skip the quality review phase.
- Do NOT skip structural verification after quality review passes.
- Do NOT let writers create files outside their assigned domain directories.
- Do NOT merge or deploy until the redirect mapping is verified to cover all old wiki URLs.
