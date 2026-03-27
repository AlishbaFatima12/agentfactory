### Core Concept

The Factory Blueprint Template organizes the six decomposition steps into one reusable document with seven sections. No new concepts are introduced here: the template is a formal container for what the method already produced.

### Key Mental Models

- **Seven sections, seven questions**: Each section answers one specific question about the factory. Skipping any section means discovering that gap in production, where the cost is highest.
- **Failure Mode is not documentation**: It is the difference between a factory that fails visibly and one that fails silently while reporting green dashboards. Emma's real incident (200 missing evaluations, discovered three weeks later) illustrates the cost of omitting this field.
- **Schema plus example equals validation**: A data contract schema defines structure. An example shows a real instance. When they disagree, you have found a specification bug.
- **Success criteria require three properties**: Measurable (a number can be computed), specific (not just "fast" but "< 4 hours"), and verifiable (someone can check without subjective judgment).
- **Economic participation status field**: Designed (tracked, not yet active), Active (acquiring resources today), Future (possibility noted, no timeline). The Status field keeps economic planning honest.

### Critical Patterns

- The Failure Mode field was absent from Step 3's role specification; the template adds it because real factories always encounter bad input
- Gate Trigger matters as much as Gate Location: a gate that fires on every run is a bottleneck; a gate that fires below a confidence threshold is a safety net
- The seven-section template maps to the six steps: Section 1 maps to Step 1, Section 2 to Steps 2+5, Sections 3-5 to Steps 3-5, Section 7 to Step 6; Section 6 (Success Criteria) is a template addition not covered by the decomposition steps

### Common Mistakes

- Treating Section 3's Failure Mode as optional documentation rather than a mandatory specification field
- Writing aspirational success criteria ("the factory should be fast") instead of measurable ones ("< 4 hours from approved spec")
- Omitting concrete examples in data contract sections, leaving schema definitions untested

### Connections

- **Builds on**: Lesson 2 (six-step method), Ch 62 (budget constraints in economic participation)
- **Leads to**: Lesson 4 fills the template completely for HireFlow, producing the reference document for all of Part 6
