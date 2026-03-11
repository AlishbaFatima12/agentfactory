# Contract Review and Redlines — Summary

## Core Concept

Contract review transforms from a 3-4 hour attorney task into a 40-minute structured workflow using `/review-contract`, which follows a seven-step process mirroring how a senior lawyer approaches a new contract. The lesson establishes the three-tier classification system (GREEN/YELLOW/RED) and the redline format (current text, issue, replacement, fallback, rationale, priority) that every subsequent contract-related lesson builds upon. The playbook (`legal.local.md`) calibrates every review to the organisation's specific positions rather than generic commercial standards.

## Key Mental Models

- **Seven-step review process**: Accept contract, gather context, load playbook, clause-by-clause analysis, flag deviations (GREEN/YELLOW/RED), generate redlines, holistic risk summary
- **Three-tier classification**: GREEN (acceptable), YELLOW (negotiate -- agent provides primary redline and fallback), RED (escalate -- requires attorney review before proceeding)
- **Redline format**: Six fields per flagged clause -- current text, issue, proposed replacement, fallback position, rationale, priority (must-have vs. nice-to-have)
- **Playbook-driven review**: The `legal.local.md` configuration determines what the agent flags; without it, the agent reviews against generic standards and labels the output accordingly
- **CLM (Contract Lifecycle Management)**: End-to-end process of creating, negotiating, executing, storing, monitoring, and renewing contracts -- poor CLM costs 5-9% of annual revenue
- **Contract repository as intelligence**: Executed contracts contain years of negotiated positions that become queryable institutional memory for benchmarking future negotiations

## Critical Patterns

- The agent reads the entire contract before flagging anything -- clauses interact and context matters (an uncapped indemnity may be mitigated by a broad limitation of liability)
- `/vendor-check` tracks post-execution obligations: upcoming deadlines, overdue items, renewal calendar, SLA monitoring
- `/brief` queries the contract archive for negotiation benchmarking (e.g., liability cap ranges across 34 executed contracts)
- Party role (Customer/Vendor/Licensor/etc.) materially changes the analysis -- the same clause means different things depending on your side
- Jurisdiction overlays (e.g., `pakistan-law.md`) apply automatically based on organisation profile

## Common Mistakes

- Skipping the context-gathering step (Step 2) -- party role and business context materially change the review output
- Not configuring a playbook before running reviews -- generic commercial standards miss organisation-specific positions
- Treating YELLOW items as safe to accept without review -- they are within acceptable range but still require attorney confirmation
- Ignoring the holistic risk summary's priority negotiation order -- RED items should be addressed in the order the agent recommends, not the order they appear in the contract
- Forgetting that a signed contract begins (not ends) legal work -- obligation tracking via `/vendor-check` is essential

## Connections

- The playbook (`legal.local.md`) built in **L02** drives every classification in this lesson's worked example
- The GREEN/YELLOW/RED classification system is reused for NDA triage in **L05** (Tier 1/2/3 maps to GREEN/YELLOW/RED)
- Cross-border contract analysis (multi-overlay loading, e-signature routing) is covered in **L04**
- The contract repository intelligence demonstrated here feeds negotiation preparation in every subsequent contract lesson
- The governance mantra -- "the agent reviews, triages, drafts, and flags; the licensed attorney advises, decides, and signs" -- is established here and repeated throughout the chapter
