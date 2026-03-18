# Worked Example: Chapter 35 Supply Chain & Procurement

This traces the complete pipeline execution for Ch 35, showing every stage,
every correction, and every cascade. Use this as the quality reference for
future chapter designs.

## Artifacts Produced

- **Team prompt**: `specs/drafts/ch35-supply-chain-team-prompt.md`
- **Architect working directory**: `specs/drafts/ch35-supply-chain/` (created by team)
- **Governing spec**: `specs/drafts/chapter 24 supply chain and procurement/Chapter24_Supply_Chain_Procurement.md`

## Stage 0: Build or Reuse?

**Decision**: Build. Supply chain/procurement is a specialized domain with no
existing coverage in knowledge-work-plugins. The spec describes 8 unique skills
and 5 persistent agents — all domain-specific.

## Stage 1: Research (4 Parallel Agents)

1. **Plugin Pattern Audit**: Scanned 5 existing plugins in business-plugins repo.
   Banking (17 skills, 10 jurisdictions) identified as closest precedent.
2. **Layer 1 Collision Audit**: Scanned knowledge-work-plugins. Found 3 collisions:
   `/reconcile` vs finance/reconciliation, `/communicate` (too generic),
   `/network-design` (IT confusion risk). 5 skills had no collisions.
3. **Reference Chapter Format**: Banking ch 32 L03 extracted — full YAML template
   with teaching_guide, Try With AI (3 prompts), sidecar patterns.
4. **Spec Analysis**: 1,361 lines, 6 content parts, 8 exercises, 8 skills, 5 agents.
   3 fact claims flagged (GEP, Samir Saci, KIFTL synthetic).

**WebFetch**: Fetched 3 canonical docs (plugins-reference, agentskills.io, sub-agents).

## Stage 2: Diagnostics (7 Categories)

User provided pre-researched diagnostics for all 7 categories. Pipeline validated
each against research, confirmed most, and presented recommendations.

Key diagnostics:

- Q1: Collision table with rename recommendations for 3 skills
- Q2: Agents classified — user initially asked if they work in Cowork
- Q3: Jurisdictions — recommended 4 overlays (UK/EU/US/Pakistan)
- Q4: 15-lesson plan proposed with exercise mapping
- Q5: Hybrid pedagogical approach (build → install → use)
- Q6: GEP and Samir Saci flagged [VERIFY], KIFTL synthetic kept
- Q7: 6 missing decisions listed

## Stage 3: Design Decisions (3 Major Corrections)

### Correction 1: "Agents work in Cowork"

Original assumption: Agents might not work in Cowork.
User correction: Both skills and agents work properly. `/schedule` handles automation.

**Cascade**:

- L12 changed from "conceptual agent design" to "deploy 5 real agents + `/schedule`"
- Plugin now ships 5 agent .md files (was 0)
- Team prompt: plugin-builder gets agent format reference docs
- Exercises 3 and 7 now configure actual running agents

### Correction 2: "No need for jurisdictions"

Original recommendation: 4 overlays (UK/EU/US/Pakistan).
User correction: Skip jurisdictions entirely.

**Cascade**:

- Plugin drops overlays directory
- No jurisdiction-loading logic needed
- Router's jurisdiction-loading step becomes irrelevant
- L02 setup simplifies

### Correction 3: "Why even add a router? It has no value"

Original assumption: Router needed for 8+ skills.
User correction: 8 well-named skills with distinct trigger phrases don't need routing.

**Cascade**:

- Router dropped entirely (14 components, not 15)
- 7 universal non-negotiable rules distributed across individual skills
- No routing table to maintain
- Plugin structure simpler

## Stage 4: Resolution

Final plugin: 8 skills + 5 agents + local.md = 14 files. No router, no jurisdictions.
3 renames: `/invoice-reconcile`, `/vendor-communicate`, `/supply-network-design`.
15 lessons with 8 exercises mapped.
2 fact claims flagged [VERIFY].

## Stage 5: Team Prompt

8 teammates: 1 architect (opus) + 1 reference-builder (opus) + 1 plugin-builder (opus) +
4 chapter writers (sonnet) + 1 quality-reviewer (opus).

Plugin-builder starts after Phase 1 (doesn't need reference lesson).
Chapter writers start after Phase 2 (need reference lesson).

Output: `specs/drafts/ch35-supply-chain-team-prompt.md` (700 lines).
