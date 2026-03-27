### Core Concept

An economic participation point is a specific location in a pipeline where an agent could autonomously acquire a resource, triggered by data conditions, within bounded cost, and with a clear benefit to output quality. This lesson moves from principle to application: mapping the four HireFlow FTEs to find where that pattern occurs. Not every resource need qualifies. Baseline token consumption is not a participation point. The pattern only appears at the boundary between what you planned for and what the real world actually sends.

### Key Mental Models

- **Three Qualifying Characteristics**: A participation point must be data-triggered (not a design flaw), bounded (known cost, known provider, approved options), and outcome-improving (skipping it degrades the output more than the acquisition costs).
- **Baseline vs. Participation Point**: Token consumption is baseline. An FTE needing a translation service because a CV arrived in Mandarin is a participation point. The distinction is whether the need was predictable from design.
- **Spending Envelope as Policy Decision**: The ceiling is not just a number; it includes what happens at the ceiling. James's decision to queue foreign-language CVs for human review (rather than pausing the whole pipeline) is a policy decision embedded in the spending envelope.

### Critical Patterns

- James's three participation points: Resume Screener (foreign-language CV needing translation), Interview Question Generator (job description referencing a compliance standard), Candidate Summarizer (reference check for a candidate)
- The compliance standard point involves two budget categories simultaneously: API calls for the knowledge base and tokens to process the response
- The reference check point is the most expensive, illustrating that spending envelope decisions are not uniform across participation points; each has its own realistic ceiling
- James notices that all three of his participation points are triggered by data variation, not by design flaws, which is the defining property of economic participation

### Common Mistakes

- Treating all resource usage as a participation point (only data-triggered, bounded, outcome-improving needs qualify; baseline consumption does not)
- Setting spending envelopes without specifying the behavior at the ceiling (pausing the whole pipeline vs. queuing the item for human review are materially different policy decisions)
- Missing multi-budget-category participation points (some acquisitions trigger both an API call and significant token consumption)

### Connections

- **Builds on**: Ch 62 L1-L3 (economic actor concept, self-provisioning model, budgets-not-permissions principle)
- **Builds on**: Ch 61 L5 (HireFlow's four Digital FTEs with their specific inputs and outputs)
- **Used later**: Ch 84 (each participation point becomes a budget tracker increment and spending envelope check in the orchestrator), Ch 87 (each participation point is an attack surface for budget abuse)
