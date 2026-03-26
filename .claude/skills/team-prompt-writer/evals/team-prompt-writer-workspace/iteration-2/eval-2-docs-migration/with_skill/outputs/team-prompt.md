# API Documentation Migration: Team Prompt

Create an agent team to migrate 142 API documentation files from a flat Markdown wiki (`docs/wiki/api/`) to a structured Docusaurus 3.x site (`apps/api-docs/`). The migration covers 6 API domains (Auth, Users, Billing, Analytics, Webhooks, Admin) totaling ~18,000 lines. The output must be a production-grade API reference with YAML frontmatter, request/response schemas, SDK examples in Python/Node.js/Go, error documentation, cross-linked related endpoints, and v2/v3 versioning.

You are the team lead. You coordinate. You do NOT write content yourself. Spawn each worker below as a TEAMMATE in the agent team (not as a subagent). Use the shared task list to track all work. Enforce phase ordering: Phase 1 must complete before Phase 2 starts, Phase 2 before Phase 3, and so on.

---

## Phase 1: Architect (1 teammate)

Spawn a teammate named "architect."

**Model**: Opus
**Plan approval**: enabled

**Prompt:**

"You are the architect for the API Documentation Migration project.

You are part of an agent team. Communicate via messages to the team lead.

READ IN ORDER:

1. `docs/wiki/api/` — read ALL 142 source files across all 6 domains
2. Any existing Docusaurus reference site or template in the project (if present)
3. `.specify/memory/constitution.md` (project constitution)

DELIVERABLES:

1. **Master Architecture Spec** (`apps/api-docs/_architecture/architecture-spec.md`):
   - Complete directory skeleton for `apps/api-docs/` following domain/resource/endpoint hierarchy
   - Source-to-output mapping: every wiki file mapped to its new location
   - Endpoint file template: YAML frontmatter fields, markdown structure (description, authentication, request parameters, request body, response schema, error codes, curl example, SDK examples, related endpoints, 'Try it' button placeholder)
   - Conversion rules: how to handle inconsistent headers, missing curl examples, files without clear resource grouping
   - URL redirect map: every old wiki URL mapped to new Docusaurus path (zero broken links)
   - Versioning strategy: how v2 (current) and v3 (beta) docs coexist (sidebar switching, frontmatter version field, shared vs version-specific content)
   - Writer-to-scope assignment table (see below)

2. **Domain Wisdom Brief** (`apps/api-docs/_architecture/domain-wisdom-brief.md`):

   CORE CONCEPTS (every writer must internalize these):
   - Findability: a developer must locate any endpoint in under 10 seconds. The domain/resource/endpoint hierarchy, sidebar labels, and frontmatter titles must all serve this goal.
   - Example correctness: every curl and SDK example must be syntactically valid and testable against staging. A broken example is worse than no example. If the source wiki lacks an example, the writer must construct one from the endpoint's request/response schema, not leave it blank.
   - Error-path parity: error responses must be documented as thoroughly as success responses. Include HTTP status codes, error body schemas, common causes, and resolution steps. Most wiki files neglect this; writers must fill the gap using the API's patterns.
   - Cross-linking: related endpoints are linked contextually (not just listed). "After creating a user, set their permissions via [PATCH /users/{id}/roles](link)" is better than a "See also" list at the bottom.
   - Version visibility: where v2 and v3 endpoints differ, diffs must be highlighted explicitly. Where they are identical, say so rather than duplicating content.

   QUALITY DIMENSIONS (rank order):
   1. Parity: zero information loss from wiki to Docusaurus. Every fact, parameter, and note in the source must appear in the output.
   2. Findability: consistent hierarchy, frontmatter titles, sidebar labels.
   3. Example correctness: all examples syntactically valid, copy-paste ready.
   4. Error completeness: error responses documented for every endpoint.
   5. Cross-linking: related endpoints connected with contextual links.

   COMMON PITFALLS (what mediocre migration looks like):
   - Mechanical file-by-file translation that preserves structure but loses the relationships between endpoints.
   - "See also: /users, /billing" lists at the bottom instead of contextual cross-links woven into descriptions.
   - Curl examples copied from the wiki without adding SDK equivalents or verifying syntax.
   - Error responses left as "TBD" or a single generic 400/500 entry.
   - Versioning handled by full duplication rather than highlighting diffs.
   - Frontmatter that is technically valid but uses vague titles ("Endpoint 1" instead of "Create User").

   DECISION FRAMEWORKS (when a writer faces ambiguity):
   - Parity over polish: if unsure whether to include a wiki detail, include it. Never silently drop information.
   - Working examples or no examples: if you cannot construct a correct example, leave a `<!-- TODO: verify example against staging -->` comment rather than shipping a broken one.
   - Error paths are first-class citizens: dedicate as much space to error documentation as to success documentation.
   - Group by resource, not by HTTP method: PUT /users/{id} and GET /users/{id} live in the same resource section, not in separate "PUT endpoints" and "GET endpoints" pages.

3. **Per-Writer Briefs** (`apps/api-docs/_architecture/briefs/`):
   Create one brief per writer:
   - `writer-auth-users-brief.md` — Auth (23 endpoints) + Users (28 endpoints) = 51 endpoints
   - `writer-billing-brief.md` — Billing (31 endpoints)
   - `writer-analytics-webhooks-brief.md` — Analytics (18 endpoints) + Webhooks (12 endpoints) = 30 endpoints
   - `writer-admin-brief.md` — Admin (30 endpoints)

   Each brief contains:
   - Exact source files assigned (full paths in `docs/wiki/api/`)
   - Exact output file paths to create in `apps/api-docs/`
   - Domain-specific quality notes (e.g., Auth writers must document OAuth2 flow sequences across endpoints; Billing writers must show subscription lifecycle across create/update/cancel)
   - Exit criteria: all assigned source files migrated, all output files have complete frontmatter, at least one curl + one SDK example per endpoint, error codes section present

4. **Output Directory README** (`apps/api-docs/README.md`):
   - Project overview, local dev setup, contribution guidelines
   - Domain map with endpoint counts
   - How versioning works (v2/v3)

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'ARCHITECT DONE — architecture-spec.md, domain-wisdom-brief.md, 4 writer briefs, README.md'"

---

## Phase 2: Reference-Builder (1 teammate)

Spawn a teammate named "reference-builder."

**Model**: Opus

**Prompt:**

"You are the reference-builder for the API Documentation Migration project.

You are part of an agent team. Communicate via messages to the team lead.

READ IN ORDER:

1. `apps/api-docs/_architecture/architecture-spec.md` (structure, patterns, file template)
2. `apps/api-docs/_architecture/domain-wisdom-brief.md` (what quality means)
3. Pick ONE representative endpoint from the Auth domain source files (an endpoint with moderate complexity: has parameters, request body, and at least one documented error)
4. Any existing Docusaurus API doc reference in the project (if one exists)

DELIVERABLE:

Create ONE gold-standard endpoint file at `apps/api-docs/_reference/reference-endpoint.md` that demonstrates ALL of the following patterns:

- Complete YAML frontmatter (title, description, api_domain, api_version, method, path, sidebar_label, sidebar_position)
- Clear one-paragraph description explaining what the endpoint does and when to use it
- Authentication requirements section
- Request parameters table (path params, query params) with types, required/optional, descriptions
- Request body schema with JSON example
- Response schema (success) with JSON example
- Error responses section with at least 3 error codes, each with: status code, error body, common cause, resolution
- Curl example (valid, copy-paste ready)
- SDK examples in Python, Node.js, and Go (valid syntax)
- Related endpoints section with contextual cross-links (not just a list)
- 'Try it' button placeholder markup
- Version note (if v2/v3 differ for this endpoint)

This file is the quality benchmark. Every writer will match its format, depth, and completeness.

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'REFERENCE-BUILDER DONE — reference-endpoint.md'"

---

## Phase 3: Writers (4 teammates, ALL PARALLEL)

Spawn ALL 4 writer teammates SIMULTANEOUSLY after Phase 2 completes.

### Writer: auth-users

Spawn a teammate named "writer-auth-users."

**Prompt:**

"You are writer-auth-users for the API Documentation Migration project.
You are part of an agent team. Communicate via messages to the team lead.

WHAT YOU'RE BUILDING AND WHY:
You are migrating the Authentication and Users API documentation from a flat wiki into a structured, searchable Docusaurus site. When you are done, a developer will be able to find any auth or user-management endpoint in under 10 seconds, copy a working code example, and understand exactly what happens when things go wrong. This is the foundation of the API docs: every other domain depends on auth, and most workflows start with user operations.

YOUR CHAPTERS IN CONTEXT:
Auth is the entry point for every API consumer. A developer's first interaction is always authentication (getting a token, understanding scopes). Users is the second thing they touch (creating accounts, managing permissions). Your docs must reflect this: Auth docs should assume the reader knows nothing about the API yet. Users docs can assume the reader has authenticated. Cross-link liberally between Auth and Users (e.g., 'After creating a user via POST /users, grant them scopes via the Auth domain').

READ IN ORDER:

1. `apps/api-docs/_architecture/architecture-spec.md` (structure, patterns, file paths)
2. `apps/api-docs/_architecture/domain-wisdom-brief.md` (what quality means for this content)
3. `apps/api-docs/_architecture/briefs/writer-auth-users-brief.md` (YOUR scope, files, notes)
4. `apps/api-docs/_reference/reference-endpoint.md` (quality benchmark: match format AND depth)
5. Your assigned source files in `docs/wiki/api/` (Auth + Users files ONLY)

QUALITY FRAMEWORK:
- Parity: every parameter, note, and caveat from the wiki source must appear in your output. Do not silently drop information, even if it seems minor.
- Example correctness: every curl command must be syntactically valid. Every SDK example must compile/run. If the wiki has no example for an endpoint, construct one from the request/response schema.
- Error completeness: document at least 3 error responses per endpoint. Auth endpoints are especially error-heavy (expired tokens, invalid scopes, MFA failures); capture all of them.
- Cross-linking: Auth and Users are deeply intertwined. Link them contextually: 'To revoke a user's access, see DELETE /auth/tokens/{user_id}' rather than a generic 'See also' list.
- OAuth2 flow coherence: the Auth endpoints collectively describe OAuth2 flows. Your docs must make the flow sequence clear across individual endpoint pages (e.g., link 'authorize' to 'token' to 'refresh').

WHAT MEDIOCRE LOOKS LIKE (avoid this):
- Auth endpoints documented individually with no sense of the OAuth2 flow that connects them.
- Users CRUD endpoints with generic descriptions ('Creates a user') instead of explaining what happens to roles, permissions, and team membership on creation.
- Error sections with only '400 Bad Request' and '401 Unauthorized' when the actual API returns 10+ distinct error codes.
- Copy-pasted curl from the wiki without adding Python/Node.js/Go SDK equivalents.

WHEN IN DOUBT:
- Parity over polish: include the wiki detail even if it seems redundant.
- Working examples or no examples: leave a TODO comment rather than ship a broken curl.
- Auth is the entry point: write as if the reader has never used this API before.
- Group by resource, not by method: GET/POST/PUT/DELETE for /users/{id} live together.

YOUR SCOPE:
- Auth domain: 23 endpoints from `docs/wiki/api/` (auth-related files)
- Users domain: 28 endpoints from `docs/wiki/api/` (user-related files)
- Output: `apps/api-docs/docs/auth/` and `apps/api-docs/docs/users/`
- Create domain index files: `apps/api-docs/docs/auth/index.md` and `apps/api-docs/docs/users/index.md`
- Total: 51 endpoint files + 2 index files
- See your writer brief for exact source-to-output file mappings

RULES:
- Match the reference endpoint in format, depth, and quality
- Every endpoint file must have complete YAML frontmatter
- Every endpoint must have curl + Python + Node.js + Go examples
- Every endpoint must have an error codes section (minimum 3 errors)
- Preserve all existing information from the wiki source (parity)
- Include redirect mappings as comments at the top of each file
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WRITER AUTH-USERS DONE — [list all created files]'"

### Writer: billing

Spawn a teammate named "writer-billing."

**Prompt:**

"You are writer-billing for the API Documentation Migration project.
You are part of an agent team. Communicate via messages to the team lead.

WHAT YOU'RE BUILDING AND WHY:
You are migrating the Billing API documentation, the largest single domain (31 endpoints), from a flat wiki into structured Docusaurus pages. Billing is where money flows: subscriptions, invoices, payments, usage metering, credits. A developer reading your docs is implementing revenue-critical code. Mistakes here cost real money. Your docs must be precise enough that a developer can implement a complete billing integration without guessing.

YOUR CHAPTERS IN CONTEXT:
Billing sits downstream of Auth and Users. A developer has already authenticated and created user accounts before touching billing. Your docs can assume the reader understands authentication and user identity. Cross-link to Users for 'who is being billed' and to Webhooks for 'how to get notified about billing events' (e.g., invoice.paid, subscription.cancelled). Billing is the domain most likely to have version differences between v2 and v3: highlight these explicitly.

READ IN ORDER:

1. `apps/api-docs/_architecture/architecture-spec.md` (structure, patterns, file paths)
2. `apps/api-docs/_architecture/domain-wisdom-brief.md` (what quality means for this content)
3. `apps/api-docs/_architecture/briefs/writer-billing-brief.md` (YOUR scope, files, notes)
4. `apps/api-docs/_reference/reference-endpoint.md` (quality benchmark: match format AND depth)
5. Your assigned source files in `docs/wiki/api/` (Billing files ONLY)

QUALITY FRAMEWORK:
- Parity: billing docs in the wiki likely contain edge cases about proration, currency handling, and tax calculations. Every one of these must survive migration.
- Subscription lifecycle clarity: the create/update/pause/cancel/reactivate flow must be cross-linked across endpoint pages so a developer can follow the full lifecycle.
- Usage metering precision: metering endpoints must document exactly how usage is aggregated, what happens at billing period boundaries, and how credits interact with metered usage.
- Example correctness: billing examples must use realistic amounts, currency codes, and date formats. No '$1.00' placeholder amounts; use realistic values like '$49.99/month'.
- Error completeness: billing errors have real financial consequences. Document every error code, especially idempotency failures, double-charge prevention, and insufficient funds scenarios.

WHAT MEDIOCRE LOOKS LIKE (avoid this):
- Subscription endpoints documented individually without showing the create-to-cancel lifecycle.
- Invoice endpoints that don't explain the relationship between invoices, line items, and payment attempts.
- Usage metering docs that skip aggregation windows and credit interactions.
- Generic error sections that miss billing-specific errors like 'card_declined', 'invoice_not_payable', or 'subscription_past_due'.
- All amounts shown as '$1.00' or '100' without currency context.

WHEN IN DOUBT:
- Parity over polish: if the wiki mentions a proration edge case, include it.
- Financial precision matters: round-trip currency amounts, show ISO currency codes, document decimal precision.
- Lifecycle over individual endpoints: always link to the next step in the billing workflow.
- Working examples or no examples: billing code with wrong amounts or missing required fields is dangerous.

YOUR SCOPE:
- Billing domain: 31 endpoints from `docs/wiki/api/` (billing-related files)
- Output: `apps/api-docs/docs/billing/`
- Create domain index file: `apps/api-docs/docs/billing/index.md`
- Organize by resource: subscriptions, invoices, payment-methods, usage, credits
- Total: 31 endpoint files + 1 index file
- See your writer brief for exact source-to-output file mappings

RULES:
- Match the reference endpoint in format, depth, and quality
- Every endpoint file must have complete YAML frontmatter
- Every endpoint must have curl + Python + Node.js + Go examples
- Every endpoint must have an error codes section (minimum 3 errors)
- Preserve all existing information from the wiki source (parity)
- Include redirect mappings as comments at the top of each file
- v2/v3 differences must be explicitly highlighted where they exist
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WRITER BILLING DONE — [list all created files]'"

### Writer: analytics-webhooks

Spawn a teammate named "writer-analytics-webhooks."

**Prompt:**

"You are writer-analytics-webhooks for the API Documentation Migration project.
You are part of an agent team. Communicate via messages to the team lead.

WHAT YOU'RE BUILDING AND WHY:
You are migrating the Analytics and Webhooks API documentation from a flat wiki into structured Docusaurus pages. Analytics (18 endpoints) gives developers visibility into their data: events, funnels, retention, custom queries, and exports. Webhooks (12 endpoints) gives them real-time notifications: registration, delivery, retries, signing, and testing. Together, these domains answer 'what happened?' and 'tell me when something happens.' A developer reading your docs is building observability and event-driven integrations.

YOUR CHAPTERS IN CONTEXT:
Analytics and Webhooks are consumption-layer APIs. Developers use them after they have set up Auth, Users, and Billing. Analytics reads data that other domains produce. Webhooks push notifications about events across all domains. Cross-link to the domains that generate the events: 'To track billing events, configure a webhook for invoice.* events (see Webhooks > Registration)' from Analytics, and 'Webhook payloads for user.created events include the full user object (see Users > GET /users/{id})' from Webhooks.

READ IN ORDER:

1. `apps/api-docs/_architecture/architecture-spec.md` (structure, patterns, file paths)
2. `apps/api-docs/_architecture/domain-wisdom-brief.md` (what quality means for this content)
3. `apps/api-docs/_architecture/briefs/writer-analytics-webhooks-brief.md` (YOUR scope, files, notes)
4. `apps/api-docs/_reference/reference-endpoint.md` (quality benchmark: match format AND depth)
5. Your assigned source files in `docs/wiki/api/` (Analytics + Webhooks files ONLY)

QUALITY FRAMEWORK:
- Parity: analytics query parameters and webhook payload schemas must be fully preserved. These are the most schema-heavy endpoints.
- Query expressiveness: analytics custom query endpoints must document the full query language (filters, aggregations, time ranges) with realistic examples, not just parameter tables.
- Webhook reliability documentation: retry logic, signing verification, delivery guarantees, and failure modes are critical. Document them as thoroughly as the happy path.
- Example correctness: analytics query examples must show realistic event names and filter syntax. Webhook examples must show complete payload structures with all fields.
- Cross-domain linking: webhooks deliver events from every other domain. Your docs must link to the originating domain for each event type.

WHAT MEDIOCRE LOOKS LIKE (avoid this):
- Analytics query docs that list parameters without showing how to compose a real query.
- Webhook registration docs that skip signing verification and retry behavior.
- Event type lists without linking to the domain that produces each event.
- Export endpoints documented without file format details, pagination, or size limits.
- Webhook testing endpoints documented without explaining how to use them in development workflows.

WHEN IN DOUBT:
- Parity over polish: preserve every query parameter and webhook field from the wiki.
- Show complete queries: a parameter table is not enough; show a full query with realistic data.
- Reliability is the story for webhooks: retry logic, idempotency keys, and failure modes matter more than the happy path.
- Link to event sources: every webhook event type should link back to the API call that triggers it.

YOUR SCOPE:
- Analytics domain: 18 endpoints from `docs/wiki/api/` (analytics-related files)
- Webhooks domain: 12 endpoints from `docs/wiki/api/` (webhook-related files)
- Output: `apps/api-docs/docs/analytics/` and `apps/api-docs/docs/webhooks/`
- Create domain index files: `apps/api-docs/docs/analytics/index.md` and `apps/api-docs/docs/webhooks/index.md`
- Total: 30 endpoint files + 2 index files
- See your writer brief for exact source-to-output file mappings

RULES:
- Match the reference endpoint in format, depth, and quality
- Every endpoint file must have complete YAML frontmatter
- Every endpoint must have curl + Python + Node.js + Go examples
- Every endpoint must have an error codes section (minimum 3 errors)
- Preserve all existing information from the wiki source (parity)
- Include redirect mappings as comments at the top of each file
- Webhook payload examples must include all fields, not abbreviated schemas
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WRITER ANALYTICS-WEBHOOKS DONE — [list all created files]'"

### Writer: admin

Spawn a teammate named "writer-admin."

**Prompt:**

"You are writer-admin for the API Documentation Migration project.
You are part of an agent team. Communicate via messages to the team lead.

WHAT YOU'RE BUILDING AND WHY:
You are migrating the Admin API documentation (30 endpoints) from a flat wiki into structured Docusaurus pages. Admin encompasses system configuration, feature flags, audit logs, rate limits, and health checks. This is the operations layer: the docs are read by platform engineers and DevOps teams, not just application developers. Your docs must serve people who are debugging production issues at 3 AM, configuring feature rollouts, and auditing security events.

YOUR CHAPTERS IN CONTEXT:
Admin is the infrastructure layer beneath all other domains. It controls system-wide settings that affect Auth, Users, Billing, Analytics, and Webhooks. A developer reading Admin docs typically already understands the other domains and is now managing the platform itself. Cross-link to affected domains: 'Rate limit configuration applies per-domain. See the rate limit headers documented in each domain's endpoint pages.' Feature flags control behavior across domains: link to the features they toggle.

READ IN ORDER:

1. `apps/api-docs/_architecture/architecture-spec.md` (structure, patterns, file paths)
2. `apps/api-docs/_architecture/domain-wisdom-brief.md` (what quality means for this content)
3. `apps/api-docs/_architecture/briefs/writer-admin-brief.md` (YOUR scope, files, notes)
4. `apps/api-docs/_reference/reference-endpoint.md` (quality benchmark: match format AND depth)
5. Your assigned source files in `docs/wiki/api/` (Admin files ONLY)

QUALITY FRAMEWORK:
- Parity: admin endpoints often have underdocumented parameters and complex configuration objects. Preserve every field, default value, and constraint from the wiki.
- Operational clarity: these docs are used during incidents. Describe what each endpoint does in concrete operational terms ('Clears the rate limit counter for a specific API key, allowing the key to resume making requests immediately') not abstract ones ('Manages rate limits').
- Audit log completeness: audit log query endpoints must document all filterable event types, retention periods, and export formats.
- Feature flag precision: document the exact behavior of each flag state (enabled/disabled/percentage rollout), what it affects, and how changes propagate (immediately vs next request).
- Health check actionability: health check endpoints must document what each status means and what action to take for each non-healthy state.

WHAT MEDIOCRE LOOKS LIKE (avoid this):
- Admin endpoints with generic descriptions ('Configures the system') instead of specific operational meaning.
- Audit log docs that list event types without explaining what triggers each event.
- Feature flag docs that explain the API but not the operational impact of toggling a flag.
- Health check endpoints that return status codes without explaining what 'degraded' or 'unhealthy' means operationally.
- Rate limit config docs that show the API but not how limits interact across domains.

WHEN IN DOUBT:
- Parity over polish: every config parameter and its default value must be preserved.
- Write for the on-call engineer: someone debugging at 3 AM needs actionable docs, not elegant prose.
- Operational impact over API mechanics: 'what happens when I call this?' matters more than 'what parameters does it take?'
- Link to affected domains: admin operations have cross-domain impact. Make it visible.

YOUR SCOPE:
- Admin domain: 30 endpoints from `docs/wiki/api/` (admin-related files)
- Output: `apps/api-docs/docs/admin/`
- Create domain index file: `apps/api-docs/docs/admin/index.md`
- Organize by resource: config, feature-flags, audit-logs, rate-limits, health
- Total: 30 endpoint files + 1 index file
- See your writer brief for exact source-to-output file mappings

RULES:
- Match the reference endpoint in format, depth, and quality
- Every endpoint file must have complete YAML frontmatter
- Every endpoint must have curl + Python + Node.js + Go examples
- Every endpoint must have an error codes section (minimum 3 errors)
- Preserve all existing information from the wiki source (parity)
- Include redirect mappings as comments at the top of each file
- Admin endpoints often require elevated permissions; document the required role/scope for each
- Execute autonomously without asking for confirmation

When finished, message the team lead: 'WRITER ADMIN DONE — [list all created files]'"

---

## Phase 4: Quality Reviewer (1 teammate)

Spawn a teammate named "quality-reviewer" after ALL Phase 3 writers have completed.

**Model**: Opus

**Prompt:**

"You are the quality-reviewer for the API Documentation Migration project.

You are part of an agent team. Communicate via messages to the team lead.

READ IN ORDER:

1. `apps/api-docs/_architecture/domain-wisdom-brief.md` (quality dimensions and decision frameworks)
2. `apps/api-docs/_architecture/architecture-spec.md` (expected structure and conversion rules)
3. `apps/api-docs/_reference/reference-endpoint.md` (the quality benchmark)
4. ALL output files in `apps/api-docs/docs/` (every file created by all 4 writers)

EVALUATE AGAINST THESE DIMENSIONS (from the domain wisdom brief):

1. **Parity** (critical): Compare source wiki files against output. Flag any information that was lost, changed, or omitted. Spot-check at least 3 endpoints per domain.

2. **Findability**: Verify consistent hierarchy (domain/resource/endpoint). Check that YAML frontmatter titles and sidebar_labels are clear, specific, and consistent. Check that domain index files provide useful navigation.

3. **Example correctness**: Verify curl syntax is valid (proper quoting, headers, auth placeholders). Verify SDK examples use correct library conventions (requests for Python, axios/fetch for Node.js, net/http for Go). Flag any example that would fail if copy-pasted.

4. **Error completeness**: Every endpoint must have at least 3 documented error responses. Flag endpoints with fewer. Check that error documentation includes status code, error body, common cause, and resolution.

5. **Cross-linking**: Verify that related endpoints are linked contextually within descriptions, not just listed in a 'See also' section. Check cross-domain links (Auth to Users, Billing to Webhooks, Admin to all domains).

6. **Versioning**: Where v2/v3 differences exist, verify they are explicitly highlighted. Flag any silent duplication or missing version annotations.

7. **Structural consistency**: All files must match the reference endpoint format. Flag deviations in section ordering, frontmatter fields, or missing sections.

DELIVERABLE:

Quality report at `apps/api-docs/_architecture/quality-report.md` with:

- Per-writer scorecard (1-5 on each quality dimension)
- Specific issues found, with file paths and line references
- Required fixes (blocking: must fix before shipping)
- Recommended improvements (non-blocking: nice to have)
- Overall migration parity assessment: estimated percentage of source information successfully migrated

Execute autonomously without asking for confirmation.

When finished, message the team lead: 'QUALITY-REVIEWER DONE — quality-report.md'"

---

## Lead Rules

1. Create the agent team, then spawn teammates for each phase
2. Create tasks with phase dependencies (Phase 1 blocks Phase 2; Phase 2 blocks Phase 3; Phase 3 blocks Phase 4)
3. Do NOT write content yourself. You coordinate only.
4. Wait for each phase to complete before spawning the next phase's teammates
5. After quality review, run structural verification:
   - List the full `apps/api-docs/` directory tree
   - Compare file count against architect's skeleton (expect ~142 endpoint files + 6 domain index files + architecture files)
   - Spot-check YAML frontmatter from at least one file per writer
   - Verify the URL redirect map covers all 142 original wiki files
6. If the quality reviewer flags blocking issues, spawn fix tasks for the relevant writers before declaring completion
7. Shut down all teammates gracefully when done

---

## Anti-Patterns

- Do NOT spawn subagents. Use agent team teammates.
- Do NOT write content yourself. Delegate to teammates.
- Do NOT spawn Phase 3 before Phase 2 completes.
- Do NOT spawn quality reviewer before ALL writers complete.
- Do NOT let writers read the full source (only the architect reads all 142 files; writers read only their assigned files).
- Do NOT skip the quality reviewer phase.
- Do NOT accept endpoint files without error code sections.
- Do NOT accept endpoint files without SDK examples in all three languages.

---

## Team Summary

| Phase | Teammate | Scope | Estimated Files |
|-------|----------|-------|-----------------|
| 1 | architect | Full source analysis, architecture, briefs | 7 files |
| 2 | reference-builder | Gold-standard endpoint | 1 file |
| 3 | writer-auth-users | Auth (23) + Users (28) | 53 files |
| 3 | writer-billing | Billing (31) | 32 files |
| 3 | writer-analytics-webhooks | Analytics (18) + Webhooks (12) | 32 files |
| 3 | writer-admin | Admin (30) | 31 files |
| 4 | quality-reviewer | Full output review | 1 file |

**Total teammates**: 7 (1 architect + 1 reference-builder + 4 writers + 1 quality reviewer)
**Total output files**: ~157 (142 endpoint files + 6 domain indexes + architecture artifacts + quality report)
