# API Documentation Migration: Team Prompt

Create an agent team to migrate 142 API documentation files from a flat Markdown wiki (`docs/wiki/api/`) to a structured Docusaurus 3.x site (`apps/api-docs/`). The migration covers 6 API domains (Auth, Users, Billing, Analytics, Webhooks, Admin) with ~18,000 lines of source content. The output site must include YAML frontmatter, request/response schemas, SDK examples in Python/Node.js/Go, interactive "Try it" buttons, version support (v2 + v3), and URL redirects from old wiki paths.

IMPORTANT: This MUST be an agent team (https://code.claude.com/docs/en/agent-teams),
NOT subagents. Use TeamCreate to create the team. Spawn teammates -- do NOT use the
Agent tool or spawn subagents. Every worker below is a TEAMMATE in the team,
coordinated through the shared task list and inter-teammate messaging.

---

## Team Structure

You are the team lead. You coordinate. You do NOT write content yourself.
Use the shared task list to track all work.
Enforce phase ordering via task dependencies.

**Total teammates: 7**

| Phase | Teammate | Scope | Model |
|-------|----------|-------|-------|
| 1 | architect | Full source analysis, architecture spec, migration rules, writer briefs | Opus |
| 2 | reference-builder | One gold-standard migrated endpoint file | Opus |
| 3 | writer-auth-webhooks | Auth (23 endpoints) + Webhooks (12 endpoints) = 35 files | Sonnet |
| 3 | writer-users-analytics | Users (28 endpoints) + Analytics (18 endpoints) = 46 files | Sonnet |
| 3 | writer-billing | Billing (31 endpoints) = 31 files | Sonnet |
| 3 | writer-admin | Admin (30 endpoints) = 30 files | Sonnet |
| 4 | quality-reviewer | Cross-domain quality review | Opus |

---

## Phase 1: Architect (1 teammate, blocks everything)

**Task:** `phase-1-architecture`
**Depends on:** nothing
**Model:** Opus
**Plan approval:** enabled (you MUST review the architect's plan before they write)

Spawn the architect teammate with this prompt:

---

"You are the architect teammate for the API Documentation Migration project.
You are part of an agent team. Communicate via messages to the team lead.

READ IN ORDER:

1. `docs/wiki/api/` -- ALL 142 source files (you are the ONLY teammate who reads the full source)
2. Find and read one existing well-structured Docusaurus docs site in the codebase for format reference (if none exists, use standard Docusaurus 3.x conventions)
3. `.specify/memory/constitution.md` -- project constitution

DELIVERABLES:

Create ALL of the following in `apps/api-docs/_architecture/`:

### 1. Master Architecture Spec (`architecture-spec.md`)

- Complete directory skeleton for `apps/api-docs/`:
  ```
  apps/api-docs/
  +-- docs/
  |   +-- auth/
  |   |   +-- _category_.json
  |   |   +-- overview.md
  |   |   +-- oauth2-flows.md
  |   |   +-- api-keys.md
  |   |   +-- token-refresh.md
  |   |   +-- ... (one .md per endpoint or resource group)
  |   +-- users/
  |   +-- billing/
  |   +-- analytics/
  |   +-- webhooks/
  |   +-- admin/
  +-- versioned_docs/
  |   +-- version-v2/
  |   +-- version-v3-beta/
  +-- sidebars.js
  +-- docusaurus.config.js
  +-- static/
  +-- src/
      +-- components/
          +-- ApiPlayground.jsx
          +-- SdkTabs.jsx
  ```
- Source-to-output mapping: which wiki files map to which output files (all 142 files accounted for)
- Old-to-new URL redirect map (every old wiki path to new Docusaurus path)
- Endpoint doc template with these required sections:
  - YAML frontmatter (title, description, sidebar_position, api_domain, http_method, endpoint_path, version)
  - Overview / Description
  - Authentication requirements
  - Request (method, path, headers, query params, body schema)
  - Response (success schema, field descriptions)
  - Error codes (table with code, message, resolution)
  - SDK examples (Python, Node.js, Go in tabs)
  - curl example (tested against staging)
  - Related endpoints (cross-links, not just a list)
  - Version notes (v2 vs v3 differences, if applicable)
- Component catalog: how to render ApiPlayground, SdkTabs, admonitions, schema tables
- Writer-to-scope assignment table (4 writers, zero overlap)

### 2. Shared Writer's Brief (`shared-brief.md`)

- Project identity: what these docs ARE, who the audience is, what voice/tone
- API documentation conventions: how to describe parameters, how to format schemas, how to write error descriptions
- Cross-reference protocol: how endpoints link to each other across domains (e.g., Auth token endpoints referenced from every other domain)
- SDK example conventions: import style, error handling, variable naming per language
- Versioning protocol: how to mark v2-only, v3-only, and shared endpoints
- Interactive playground integration: how to add 'Try it' buttons

### 3. Per-Writer Briefs

Create one brief per writer in `apps/api-docs/_architecture/briefs/`:

- `brief-auth-webhooks.md` -- Writer 1: Auth domain (lines TBD from source) + Webhooks domain (lines TBD), 35 endpoint files, special notes on OAuth2 flow documentation and webhook signing
- `brief-users-analytics.md` -- Writer 2: Users domain (lines TBD) + Analytics domain (lines TBD), 46 endpoint files, special notes on permissions cross-refs and query parameter documentation
- `brief-billing.md` -- Writer 3: Billing domain (lines TBD), 31 endpoint files, special notes on subscription state machines and usage metering
- `brief-admin.md` -- Writer 4: Admin domain (lines TBD), 30 endpoint files, special notes on feature flags, audit log schemas, and rate limit documentation

Each brief must include:
- Exact file paths to create
- Exact source file list (which wiki files they own)
- Content-specific notes
- Exit criteria: what 'done' means for their scope

### 4. Output Directory README (`apps/api-docs/docs/README.md`)

- API docs site overview
- Domain navigation guide
- How to run locally (`npx docusaurus start`)
- How versioning works

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'ARCHITECT DONE -- [list of deliverable files]'"

---

## Phase 2: Reference-Builder (1 teammate, blocks Phase 3)

**Task:** `phase-2-reference`
**Depends on:** `phase-1-architecture`
**Model:** Opus

Spawn the reference-builder teammate with this prompt:

---

"You are the reference-builder teammate for the API Documentation Migration project.
You are part of an agent team. Communicate via messages to the team lead.

READ IN ORDER:

1. `apps/api-docs/_architecture/architecture-spec.md` -- the architect's master spec (file paths, template, patterns)
2. `apps/api-docs/_architecture/shared-brief.md` -- shared conventions
3. Pick ONE source endpoint file from `docs/wiki/api/` that the architect identified as representative (preferably from Auth or Users domain, a medium-complexity endpoint)
4. If any existing Docusaurus docs exist in the repo, read one high-quality page for format reference

DELIVERABLE:

Create ONE gold-standard migrated endpoint file that demonstrates ALL of the following:

1. Complete YAML frontmatter with all required fields (title, description, sidebar_position, api_domain, http_method, endpoint_path, version)
2. Overview section with clear, scannable description
3. Authentication requirements section
4. Request section with method, path, headers table, query params table, body schema (JSON with field descriptions)
5. Response section with success schema, field-by-field descriptions
6. Error codes table (code, message, when it occurs, resolution)
7. SDK examples in tabs (Python, Node.js, Go) using the SdkTabs component
8. Working curl example formatted for copy-paste
9. Interactive 'Try it' button using ApiPlayground component
10. Related endpoints section with meaningful cross-links (not just a list of names)
11. Version notes section (v2 vs v3 differences)

Place this file in the correct location per the architect's directory skeleton (e.g., `apps/api-docs/docs/auth/token-refresh.md` or whichever endpoint you chose).

RULES:
- Match the architect's template EXACTLY
- NO placeholder content: every section must have realistic, complete content
- NO phantom imports: only import components that the architect defined
- This file is the quality benchmark: every writer will match it

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'REFERENCE-BUILDER DONE -- [file path]'"

---

## Phase 3: Writers (4 teammates, all parallel)

Spawn ALL 4 writer teammates SIMULTANEOUSLY after Phase 2 completes.

Each writer teammate gets the SAME preamble structure (inlined, no placeholders).

### Writer 1: writer-auth-webhooks

**Task:** `phase-3-writer-auth-webhooks`
**Depends on:** `phase-2-reference`
**Model:** Sonnet

Spawn with this prompt:

---

"You are the writer-auth-webhooks teammate for the API Documentation Migration project.
You are part of an agent team. Communicate via messages to the team lead.

READ IN ORDER:

1. `apps/api-docs/_architecture/architecture-spec.md` (master spec with file paths, template, migration rules)
2. `apps/api-docs/_architecture/shared-brief.md` (shared context: identity, conventions, cross-ref protocol)
3. `apps/api-docs/_architecture/briefs/brief-auth-webhooks.md` (YOUR specific brief with source file list and exit criteria)
4. The reference endpoint file created by the reference-builder (path will be in the architecture spec or your brief)
5. Your assigned source files from `docs/wiki/api/` (read ONLY the files listed in your brief, not the full wiki)

RULES:

- Match the reference endpoint file's quality, format, and patterns exactly
- Every endpoint file must have complete YAML frontmatter
- SDK examples in all 3 languages (Python, Node.js, Go) using SdkTabs
- Every curl example must be realistic and copy-pasteable
- Error codes documented as thoroughly as success responses
- Cross-link related endpoints using the protocol in the shared brief
- NO phantom imports: only use components the architect defined
- NO placeholder content: every section fully written
- Preserve all original technical details from the wiki source
- Execute autonomously without asking for confirmation

YOUR SCOPE:

- Auth domain: 23 endpoint files in `apps/api-docs/docs/auth/`
  - OAuth2 flows, API keys, token refresh, scopes, MFA integration
  - `_category_.json` for sidebar configuration
  - `overview.md` domain overview page
- Webhooks domain: 12 endpoint files in `apps/api-docs/docs/webhooks/`
  - Registration, delivery, retry logic, signing, testing
  - `_category_.json` for sidebar configuration
  - `overview.md` domain overview page
- Total: ~35 endpoint files + 2 overview pages + 2 category configs

SPECIAL NOTES:
- Auth endpoints are cross-referenced by every other domain. Make the cross-link anchors clean and consistent.
- Webhook signing documentation must include code examples for verification in all 3 SDK languages.
- OAuth2 flow docs should include sequence diagrams or step-by-step flow descriptions.

When finished, message the team lead: 'WRITER AUTH-WEBHOOKS DONE -- [file list]'"

---

### Writer 2: writer-users-analytics

**Task:** `phase-3-writer-users-analytics`
**Depends on:** `phase-2-reference`
**Model:** Sonnet

Spawn with this prompt:

---

"You are the writer-users-analytics teammate for the API Documentation Migration project.
You are part of an agent team. Communicate via messages to the team lead.

READ IN ORDER:

1. `apps/api-docs/_architecture/architecture-spec.md` (master spec with file paths, template, migration rules)
2. `apps/api-docs/_architecture/shared-brief.md` (shared context: identity, conventions, cross-ref protocol)
3. `apps/api-docs/_architecture/briefs/brief-users-analytics.md` (YOUR specific brief with source file list and exit criteria)
4. The reference endpoint file created by the reference-builder (path will be in the architecture spec or your brief)
5. Your assigned source files from `docs/wiki/api/` (read ONLY the files listed in your brief, not the full wiki)

RULES:

- Match the reference endpoint file's quality, format, and patterns exactly
- Every endpoint file must have complete YAML frontmatter
- SDK examples in all 3 languages (Python, Node.js, Go) using SdkTabs
- Every curl example must be realistic and copy-pasteable
- Error codes documented as thoroughly as success responses
- Cross-link related endpoints using the protocol in the shared brief
- NO phantom imports: only use components the architect defined
- NO placeholder content: every section fully written
- Preserve all original technical details from the wiki source
- Execute autonomously without asking for confirmation

YOUR SCOPE:

- Users domain: 28 endpoint files in `apps/api-docs/docs/users/`
  - CRUD, roles, permissions, profile management, team membership
  - `_category_.json` for sidebar configuration
  - `overview.md` domain overview page
- Analytics domain: 18 endpoint files in `apps/api-docs/docs/analytics/`
  - Events, funnels, retention, custom queries, export
  - `_category_.json` for sidebar configuration
  - `overview.md` domain overview page
- Total: ~46 endpoint files + 2 overview pages + 2 category configs

SPECIAL NOTES:
- Users permissions endpoints must cross-link to Auth scopes documentation.
- Analytics query endpoints should document query parameter syntax thoroughly (filter operators, date ranges, aggregation).
- Team membership endpoints bridge Users and Billing domains; ensure cross-links to both.

When finished, message the team lead: 'WRITER USERS-ANALYTICS DONE -- [file list]'"

---

### Writer 3: writer-billing

**Task:** `phase-3-writer-billing`
**Depends on:** `phase-2-reference`
**Model:** Sonnet

Spawn with this prompt:

---

"You are the writer-billing teammate for the API Documentation Migration project.
You are part of an agent team. Communicate via messages to the team lead.

READ IN ORDER:

1. `apps/api-docs/_architecture/architecture-spec.md` (master spec with file paths, template, migration rules)
2. `apps/api-docs/_architecture/shared-brief.md` (shared context: identity, conventions, cross-ref protocol)
3. `apps/api-docs/_architecture/briefs/brief-billing.md` (YOUR specific brief with source file list and exit criteria)
4. The reference endpoint file created by the reference-builder (path will be in the architecture spec or your brief)
5. Your assigned source files from `docs/wiki/api/` (read ONLY the files listed in your brief, not the full wiki)

RULES:

- Match the reference endpoint file's quality, format, and patterns exactly
- Every endpoint file must have complete YAML frontmatter
- SDK examples in all 3 languages (Python, Node.js, Go) using SdkTabs
- Every curl example must be realistic and copy-pasteable
- Error codes documented as thoroughly as success responses
- Cross-link related endpoints using the protocol in the shared brief
- NO phantom imports: only use components the architect defined
- NO placeholder content: every section fully written
- Preserve all original technical details from the wiki source
- Execute autonomously without asking for confirmation

YOUR SCOPE:

- Billing domain: 31 endpoint files in `apps/api-docs/docs/billing/`
  - Subscriptions, invoices, payment methods, usage metering, credits
  - `_category_.json` for sidebar configuration
  - `overview.md` domain overview page
- Total: ~31 endpoint files + 1 overview page + 1 category config

SPECIAL NOTES:
- Subscription endpoints involve state machines (trial, active, past_due, canceled, etc.). Document state transitions clearly, ideally with a state diagram or transition table.
- Usage metering endpoints must document the relationship between metering events and invoice line items.
- Payment method endpoints must document PCI-related constraints and which fields are redacted in responses.
- Credits endpoints must explain the credit application order (oldest first, specific vs general credits).

When finished, message the team lead: 'WRITER BILLING DONE -- [file list]'"

---

### Writer 4: writer-admin

**Task:** `phase-3-writer-admin`
**Depends on:** `phase-2-reference`
**Model:** Sonnet

Spawn with this prompt:

---

"You are the writer-admin teammate for the API Documentation Migration project.
You are part of an agent team. Communicate via messages to the team lead.

READ IN ORDER:

1. `apps/api-docs/_architecture/architecture-spec.md` (master spec with file paths, template, migration rules)
2. `apps/api-docs/_architecture/shared-brief.md` (shared context: identity, conventions, cross-ref protocol)
3. `apps/api-docs/_architecture/briefs/brief-admin.md` (YOUR specific brief with source file list and exit criteria)
4. The reference endpoint file created by the reference-builder (path will be in the architecture spec or your brief)
5. Your assigned source files from `docs/wiki/api/` (read ONLY the files listed in your brief, not the full wiki)

RULES:

- Match the reference endpoint file's quality, format, and patterns exactly
- Every endpoint file must have complete YAML frontmatter
- SDK examples in all 3 languages (Python, Node.js, Go) using SdkTabs
- Every curl example must be realistic and copy-pasteable
- Error codes documented as thoroughly as success responses
- Cross-link related endpoints using the protocol in the shared brief
- NO phantom imports: only use components the architect defined
- NO placeholder content: every section fully written
- Preserve all original technical details from the wiki source
- Execute autonomously without asking for confirmation

YOUR SCOPE:

- Admin domain: 30 endpoint files in `apps/api-docs/docs/admin/`
  - System config, feature flags, audit logs, rate limits, health checks
  - `_category_.json` for sidebar configuration
  - `overview.md` domain overview page
- Total: ~30 endpoint files + 1 overview page + 1 category config

SPECIAL NOTES:
- Feature flag endpoints must document the flag evaluation logic and override hierarchy (system > org > user).
- Audit log endpoints must document the event schema thoroughly (actor, action, resource, timestamp, metadata).
- Rate limit endpoints must explain the different limit tiers and how rate limit headers work in responses.
- Health check endpoints should document the dependency check tree (database, cache, external services).

When finished, message the team lead: 'WRITER ADMIN DONE -- [file list]'"

---

## Phase 4: Quality Reviewer (1 teammate, depends on ALL Phase 3)

**Task:** `phase-4-quality-review`
**Depends on:** `phase-3-writer-auth-webhooks`, `phase-3-writer-users-analytics`, `phase-3-writer-billing`, `phase-3-writer-admin`
**Model:** Opus

Spawn the quality reviewer teammate with this prompt:

---

"You are the quality-reviewer teammate for the API Documentation Migration project.
You are part of an agent team. Communicate via messages to the team lead.

READ IN ORDER:

1. `apps/api-docs/_architecture/architecture-spec.md` (master spec: directory skeleton, template, migration rules)
2. `apps/api-docs/_architecture/shared-brief.md` (shared conventions, cross-ref protocol)
3. The reference endpoint file (path from the architecture spec)
4. ALL output files in `apps/api-docs/docs/` (every domain directory)

IMPORTANT: Extract universal quality patterns that apply to API documentation:
- Consistent voice and tone across all 6 domains
- Formatting consistency (headers, tables, code blocks, admonitions)
- Terminology consistency (same terms for same concepts across domains)
- Cross-reference completeness (are related endpoints actually linked?)
- SDK example quality (do all 3 languages appear? are they realistic?)

CHECKS TO PERFORM:

### Universal Checks
- [ ] Every endpoint file has complete YAML frontmatter with all required fields
- [ ] Voice and tone consistent across all 6 domains
- [ ] HTTP method and path clearly stated in every endpoint doc
- [ ] Request and response schemas present and complete
- [ ] Error codes table present with code, message, and resolution
- [ ] SDK examples present in all 3 languages (Python, Node.js, Go)
- [ ] curl examples present and realistic
- [ ] Related endpoints section present with working cross-links
- [ ] No placeholder content (no 'TODO', 'TBD', 'coming soon')
- [ ] No phantom component imports

### Migration-Specific Checks
- [ ] All 142 source files accounted for in the output (no endpoints dropped)
- [ ] Old wiki path to new Docusaurus path mapping is complete
- [ ] All technical details from source preserved (no information lost)
- [ ] Version annotations (v2/v3) applied correctly where needed
- [ ] `_category_.json` present in every domain directory
- [ ] `overview.md` present in every domain directory
- [ ] Sidebar positions create a logical navigation order
- [ ] Interactive 'Try it' integration present where specified

### Cross-Domain Checks
- [ ] Auth endpoints referenced correctly from all other domains
- [ ] Billing-Users cross-links work (team membership, subscription access)
- [ ] Webhooks signing documentation references Auth for key management
- [ ] Admin rate limit docs reference the rate limit headers documented in each domain
- [ ] Analytics event schemas align with the events described in other domains

DELIVERABLE:

Create `apps/api-docs/_architecture/quality-report.md` with:

1. **Overall Score**: Pass / Conditional Pass / Fail
2. **Per-Writer Summary**: For each of the 4 writers, a brief assessment
3. **Issues List**: Each issue tagged with severity (Critical / Major / Minor), writer, file path, and description
4. **Migration Completeness**: Count of source files migrated vs total (must be 142/142)
5. **Cross-Reference Audit**: Which cross-domain links work and which are broken

If the overall score is Fail, clearly state what must be fixed before the migration can ship.

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'QUALITY-REVIEWER DONE -- apps/api-docs/_architecture/quality-report.md'"

---

## Lead Coordination Rules

Follow these rules exactly:

1. **Create team** with TeamCreate at the start. Do not use the Agent tool.
2. **Create all tasks upfront** with the dependency chain:
   - `phase-1-architecture` (no dependencies)
   - `phase-2-reference` (depends on phase-1)
   - `phase-3-writer-auth-webhooks` (depends on phase-2)
   - `phase-3-writer-users-analytics` (depends on phase-2)
   - `phase-3-writer-billing` (depends on phase-2)
   - `phase-3-writer-admin` (depends on phase-2)
   - `phase-4-quality-review` (depends on all phase-3 tasks)
3. **Phase ordering is strict**: do NOT spawn Phase 2 before Phase 1 completes. Do NOT spawn Phase 3 writers before Phase 2 completes. Do NOT spawn the quality reviewer before ALL Phase 3 writers complete.
4. **Do NOT write content yourself.** Your job is coordination only.
5. **Review the architect's plan** when plan approval fires. Check that:
   - All 142 source files are mapped to output files
   - Writer scopes have zero overlap
   - The redirect map covers all old URLs
   - The endpoint template includes all required sections
6. **Spawn all 4 Phase 3 writers simultaneously** once Phase 2 is done.
7. **Monitor writer progress** via task updates. If a writer appears stuck (no updates for extended period), message them to check status.
8. **If a writer fails**, spawn a replacement teammate with the same prompt.
9. **After quality review completes**, read the quality report. If overall score is Fail:
   - Identify which writers need fixes
   - Message those writers (or spawn replacements) with specific fix instructions from the report
   - Re-run quality review after fixes
10. **After quality review passes**, run structural verification:
    - `ls -R apps/api-docs/docs/` to verify directory tree matches architect's skeleton
    - Count total endpoint files (should be ~142 + 6 overviews + 6 category configs)
    - Spot-check YAML frontmatter from one file per domain (6 files)
    - Verify `_category_.json` exists in each domain directory
    - Check that no source wiki files were missed
11. **After verification passes**, message all teammates that work is complete.
12. **Shut down all teammates** and clean up the team.

---

## Model Preferences

| Teammate | Model | Rationale |
|----------|-------|-----------|
| architect | Opus | Must analyze 142 files and produce comprehensive spec |
| reference-builder | Opus | Gold-standard quality requires strongest model |
| writer-auth-webhooks | Sonnet | Execution from spec; Sonnet sufficient for structured migration |
| writer-users-analytics | Sonnet | Execution from spec; Sonnet sufficient for structured migration |
| writer-billing | Sonnet | Execution from spec; Sonnet sufficient for structured migration |
| writer-admin | Sonnet | Execution from spec; Sonnet sufficient for structured migration |
| quality-reviewer | Opus | Must evaluate quality across all domains with nuance |

---

## Anti-Patterns to Avoid

- Do NOT use the Agent tool or spawn subagents. This is a TEAM with TEAMMATES.
- Do NOT write content yourself. Delegate everything to teammates.
- Do NOT spawn Phase 3 teammates before Phase 2 completes.
- Do NOT spawn the quality reviewer before ALL Phase 3 writers complete.
- Do NOT let writer teammates read the full source wiki (only the architect reads it all; writers read only their assigned files).
- Do NOT approve the architect's plan without reviewing the directory structure and source-to-output mapping.
- Do NOT skip the quality review phase or structural verification.
- Do NOT let writers use placeholder content ("TBD", "TODO", "coming soon").
- Do NOT let writers invent SDK examples from scratch if the source has curl examples. Convert existing examples to all 3 languages.
