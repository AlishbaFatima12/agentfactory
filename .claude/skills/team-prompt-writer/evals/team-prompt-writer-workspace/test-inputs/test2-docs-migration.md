# API Documentation Migration — Spec

## Overview

Migrate the internal API documentation from a flat Markdown wiki (142 files)
to a structured Docusaurus site with versioning, search, and interactive
API playground.

## Source
- Wiki location: `docs/wiki/api/` (142 .md files, ~18,000 lines total)
- 6 API domains: Auth, Users, Billing, Analytics, Webhooks, Admin
- Each domain has 15-30 endpoint docs
- Current format: flat markdown with no frontmatter, inconsistent headers
- Some files have curl examples, most don't

## Target
- Output: `apps/api-docs/` (Docusaurus 3.x site)
- Structure: domain → resource → endpoint
- Each endpoint file needs: YAML frontmatter, description, request/response
  schemas, curl + SDK examples, error codes, related endpoints
- Interactive "Try it" buttons using embedded API playground

## What Makes Good API Docs
The best API docs (Stripe, Twilio) share these qualities:
- You can find any endpoint in under 10 seconds
- Every example actually works if you copy-paste it
- Error responses are documented as thoroughly as success responses
- Related endpoints are cross-linked (not just listed)
- Version diffs are highlighted (what changed between v2 and v3)

## Chapters / Domains

### Domain 1: Authentication (23 endpoints)
OAuth2 flows, API keys, token refresh, scopes, MFA integration

### Domain 2: Users (28 endpoints)
CRUD, roles, permissions, profile management, team membership

### Domain 3: Billing (31 endpoints)
Subscriptions, invoices, payment methods, usage metering, credits

### Domain 4: Analytics (18 endpoints)
Events, funnels, retention, custom queries, export

### Domain 5: Webhooks (12 endpoints)
Registration, delivery, retry logic, signing, testing

### Domain 6: Admin (30 endpoints)
System config, feature flags, audit logs, rate limits, health checks

## Constraints
- Must preserve all existing endpoint URLs as redirects
- SDK examples in Python, Node.js, and Go
- All curl examples must be tested against staging
- Versioning: v2 (current) and v3 (beta) side by side
