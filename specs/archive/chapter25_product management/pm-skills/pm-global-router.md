---
name: pm-global-router
version: 1.0
description: >
  TOP-LEVEL ROUTER. Activate when ANY of these terms appear:
  feature spec, specification, PRD, product requirements, roadmap,
  user research, research synthesis, user stories, user story, acceptance
  criteria, product brief, discovery brief, stakeholder update, product update,
  release note, retrospective, retro, post-mortem, backlog prioritisation,
  RICE, ICE, MoSCoW, prioritise, backlog, user interview, interview guide,
  product launch, go-to-market, product comms, sprint planning, feature request,
  product decision, PM, product manager, product management, OKR, KPI product,
  definition of done, scope, out of scope, edge cases, open questions,
  product strategy, now next later, roadmap theme, discovery spike.
author: Panaversity — The AI Agent Factory
chapter: 25 — Product Management
plugin: https://claude.com/plugins/product-management
---

## STEP 1 — IDENTIFY TASK AND LOAD PRODUCT FILE

| Query Pattern | Load Product File |
|---|---|
| Write spec, feature spec, specification, AC, edge cases | products/spec.md |
| PRD, product requirements document, full requirements | products/prd.md |
| Roadmap, communicate roadmap, roadmap themes, now-next-later | products/roadmap.md |
| Research synthesis, synthesise interviews, user insights | products/research.md |
| User stories, story map, as a user I want | products/stories.md |
| Product brief, discovery brief, problem brief | products/brief.md |
| Stakeholder update, exec update, release note, customer comms | products/update.md |
| Retrospective, retro, post-mortem, what went well | products/retro.md |
| Prioritise, RICE, ICE, backlog order, what to build | products/prioritise.md |
| Interview guide, user interview, discovery questions | products/interview.md |

## STEP 2 — ALWAYS LOAD CONFIGURATION

Always load: product.local.md
Check for:
- Product name and description
- Persona definitions (primary and secondary)
- Team structure and sprint cadence
- Stakeholder map (names, roles, communication preferences)
- Terminology glossary (what things are called in this product)
- Quality standards (definition of done, AC rules, accessibility bar)

IF product.local.md NOT FOUND:
  Inform user: "No product configuration found. Outputs will use general
  best practices. Run Exercise 8 from Chapter 25 to build product.local.md
  — it will significantly improve all subsequent outputs."

## STEP 3 — MANDATORY OUTPUT HEADER (all PM outputs)

  TASK:          [e.g. Feature Spec — Bulk Chart Export]
  FEATURE/AREA:  [Product area or initiative name]
  CONFIGURATION: [Loaded: product.local.md / Not configured]
  AUDIENCE:      [Engineering / Executive / Customer / Cross-functional]
  VERSION:       [DRAFT v1.0 / REVIEW / REFINED / SHIPPED]

## SPEC QUALITY RULES (enforce on every spec and stories output)

MANDATORY SECTIONS — every feature spec must include:
  1. The Problem — with at least one data point of user evidence
  2. The Solution — with an explicit scope boundary (what is NOT included)
  3. Acceptance Criteria — numbered; each independently testable
  4. Edge Cases and Error States — table format
  5. Open Questions — with owner and due date for each

ACCEPTANCE CRITERIA ENFORCEMENT:
  - Each AC must be independently testable by QA
  - No AC may contain "and" — split compound ACs
  - ACs must describe system behaviour, not implementation
  - Performance ACs must include a measurable threshold (not "fast" or "quick")

SCOPE BOUNDARY RULE:
  Every spec must have an explicit OUT OF SCOPE list.
  Features without a scope boundary will be built with implicit scope
  assumptions — which are almost always wrong.

## RESEARCH QUALITY RULES (enforce on every research output)

- Every insight must have evidence (quote or data point — not just assertion)
- Every insight must have a product implication (what should change?)
- Every insight must have a signal strength rating: 🔴 HIGH / 🟡 MEDIUM / 🟢 LOW
- Distinguish: what users said they want vs. what their behaviour reveals
- Always include: "What we heard but should NOT build" section
- Always include a methodology note (n=X; method; limitation)

## COMMUNICATION CALIBRATION RULES (enforce on every update and roadmap)

EXECUTIVE AUDIENCE:
  Lead with business outcome, not feature name
  Status signal must be visible in first sentence: On Track / Watch Item / At Risk
  Maximum length: 1 page / 300 words
  End with: one recommendation or one decision required

ENGINEERING AUDIENCE:
  Priority order must be explicit (P1 / P2 / stretch)
  Dependencies must be named (team and ticket reference if possible)
  Open questions that are theirs to resolve must be clearly theirs
  Include: what is a hard constraint vs. what is negotiable

CUSTOMER AUDIENCE:
  Value language only (what they can now do — not what was built)
  No delivery date commitments unless confirmed
  Invite engagement (beta interest, feedback)
  Never: internal codenames, ticket numbers, technical architecture

## UNIVERSAL RULES — NON-NEGOTIABLE

- NEVER produce a spec without an explicit scope boundary
- NEVER write an acceptance criterion that cannot be independently tested
- NEVER omit the "what we should NOT build" section from a research synthesis
- NEVER produce a roadmap without the Now / Next / Later distinction
- NEVER write an executive update longer than one page
- NEVER promise a delivery date in customer communications without PM confirmation
- NEVER produce a prioritisation output without making the scoring assumptions explicit
- ALWAYS include specific next actions with owners in every output
- ALWAYS flag data gaps rather than filling them with assumptions
