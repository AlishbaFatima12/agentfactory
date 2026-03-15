### Core Concept

The shift from Claude in Excel to Cowork is a scope expansion. Claude in Excel analyses within one workbook; Cowork orchestrates across multiple applications. The `knowledge-work-plugins/finance` plugin packages this orchestration into five explicit commands (`/reconciliation`, `/journal-entry`, `/variance-analysis`, `/income-statement`, `/sox-testing`) and six passive skills that together support multi-day workflows like the month-end close.

### Key Mental Models

- **Skills vs Commands**: Commands are explicitly invoked and trigger specific workflows. Skills fire automatically in the background whenever Claude judges them contextually relevant. The combination produces specialist behaviour -- commands for control, skills for consistency.
- **Category Placeholder System**: The plugin uses `~~erp`, `~~data warehouse`, `~~analytics` instead of naming specific products. This separates workflow knowledge (SKILL.md, owned by the knowledge worker) from connector configuration (.mcp.json, owned by IT).
- **Reconciliation → Journal Entry Pair**: `/reconciliation` finds problems; `/journal-entry` fixes them. Running them in sequence is the core close workflow. The close-management skill contextualises each output against the close timeline.
- **Variance Decomposition**: Revenue variances split into volume, price, and mix. Operating expense variances split into volume-driven and rate-driven. Cross-referencing `/variance-analysis` with `/income-statement` builds the management narrative.

### Critical Patterns

- **Full close workflow**: Day 1 close-management skill → Day 3 `/reconciliation` → Day 4 `/journal-entry` → Day 5 `/variance-analysis` → Day 6 `/income-statement` → SOX season `/sox-testing`. Each command produces a deliverable that feeds the next phase.
- Reconciliation identifies discrepancies; journal entries create the correcting entries with proper documentation
- The close-management skill provides continuous context across all close interactions, not just when explicitly invoked
- SOX workpapers are frameworks, not conclusions — the plugin generates the testing structure, but a qualified auditor executes the tests and documents the conclusions
- The category placeholder system (~~erp) is Chapter 15's division of responsibility made concrete

### Common Mistakes

- Confusing skills (passive, auto-triggered) with commands (active, explicitly invoked)
- Assuming the plugin requires specific enterprise software (the placeholder system is tool-agnostic by design)
- Treating reconciliation as a standalone task rather than pairing it with journal entries for corrections

### Connections

- **Builds on**: Lessons 1-3 established Claude in Excel capabilities within a single workbook; this lesson expands to multi-app orchestration through Cowork
- **Leads to**: Lesson 5 introduces the financial-services-plugins core plugin (investment professional workflows), building on the plugin architecture concepts established here
