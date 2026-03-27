### Core Concept

HireFlow's complete Factory Blueprint applies the seven-section template to all four FTEs, producing the reference document that every subsequent chapter in Part 6 will build upon. The key addition beyond Chapter 61's FTE introductions is the Failure Mode field, which turns role descriptions into specifications.

### Key Mental Models

- **Failure Mode converts chatbots to Digital FTEs**: "Handle errors gracefully" is a wish. "Log error, skip candidate, include in pipeline report" is a specification. The distinction determines whether failures are visible or silent.
- **Data contracts encode trust between stages**: The Resume Screener's output is not just a list of scores; it is a structured contract with range constraints and an enumerated recommendation vocabulary that the next stage can rely on. Without the contract, downstream stages accept invalid data.
- **Gate placement reflects leverage, not stage count**: Gate 1 fires on every spec (one wrong spec poisons 200 evaluations); Gate 2 fires on every brief before committee action (irreversible decision). Two gates, not four.
- **Economic participation points are placeholders for future architecture**: Three points recorded, none active today. Their presence in the blueprint tells Chapter 84's orchestrator where to install budget tracking without a rewrite.

### Critical Patterns

- FTE 4 (Candidate Summarizer) receives input from all three prior FTEs plus optional NoteStore data: coordination complexity concentrated in one stage
- The blueprint explicitly states "Never silently drop a candidate" and "Never silently resolve contradictions" in two different FTEs' failure modes
- The Screener-to-IQ-Generator handoff includes a filter condition (score >= threshold), not just a schema, demonstrating that data contracts can encode routing logic

### Common Mistakes

- James's instinct to write "handles errors gracefully" rather than specifying the exact behavior for each error type
- Treating verification criteria as optional (Emma: "Nothing in a role specification is optional")
- Confusing "knowing the four FTE names" (Chapter 61) with "specifying their full contracts" (this lesson)

### Connections

- **Builds on**: Ch 61 (four FTEs introduced), Ch 63 (maturity model phases), Lessons 2-3 (six-step method and template)
- **Leads to**: This document is referenced in Chs 67 (skills), 76 (schemas), 82 (API endpoints), 84 (orchestrator), 87 (security), 88-89 (testing), 90 (capstone)
