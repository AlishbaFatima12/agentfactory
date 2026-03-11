# Cross-Border Contracts and E-Signatures — Summary

## Core Concept

Cross-border contracts operate in multiple legal systems simultaneously, and a single-jurisdiction review catches issues in one system while missing the risks at the intersections. This lesson introduces the five cross-border pitfalls framework and the Legal Plugin's multi-overlay loading sequence, which loads jurisdiction overlays for governing law, party jurisdictions, and performance jurisdictions, then cross-references them clause by clause to surface inter-jurisdictional conflicts. The lesson closes the contract lifecycle loop with `/signature-request`, which performs pre-flight verification and routes finalised contracts for execution -- connecting the signed contract to ongoing obligation monitoring via `/vendor-check`.

## Key Mental Models

- **Five cross-border pitfalls**: Mandatory local law conflicts, arbitration enforceability gaps, data transfer mechanism gaps, tax withholding obligations, and language precedence (Arabic prevails risk) -- a systematic checklist for evaluating any multi-jurisdictional contract
- **Multi-overlay loading**: A five-step sequence where the router identifies the primary governing law, party jurisdictions, and performance jurisdictions, loads an overlay for each, cross-references escalation triggers between overlays, and outputs a combined analysis with jurisdiction-specific notes per clause
- **Conflict of laws (private international law)**: The discipline that answers three questions for every cross-border contract -- which court has jurisdiction, which country's law governs, and whether a judgment or award will be enforced in another country
- **New York Convention**: Treaty signed by 172 countries requiring courts to enforce foreign arbitral awards from other signatory states -- the agent checks signatory status and flags gaps as RED
- **Pre-signature checklist**: Five verification points before execution -- final form confirmation, entity name verification, authorised signer alignment, exhibits/schedules attachment, and internal approvals completion
- **Contract lifecycle closure**: The `/signature-request` command connects review and negotiation to execution, and post-execution obligation extraction connects the signed contract to `/vendor-check` monitoring without additional configuration

## Critical Patterns

- Cross-referencing (Step 4 of multi-overlay loading) is where the real value emerges -- a data protection clause satisfying UAE PDPL may violate Pakistan's PDPA, and only multi-overlay analysis catches the conflict
- The five-pitfall framework lets you evaluate the agent's output systematically -- you know what to look for before the agent reports, making you the quality check on the agent's analysis
- Entity name mismatch is the single most frequent cause of contracts requiring re-execution -- the pre-signature checklist catches this before routing
- `/signature-request` works in two modes: with DocuSign MCP for digital execution (automatic audit trail, repository filing, and obligation extraction) or without for manual wet-ink execution (same post-execution outcome, but manual steps required)
- Tax withholding is flagged for specialist counsel rather than resolved by the agent -- the agent ensures the issue is not overlooked but does not provide tax advice

## Common Mistakes

- Running a single-jurisdiction review on a multi-jurisdictional contract -- the most expensive mistakes hide at the intersections between legal systems, not within any one system
- Assuming a governing law clause exempts parties from mandatory local law in performance jurisdictions -- governing law determines contract interpretation but does not override local regulatory obligations
- Ignoring the Arabic prevails risk in GCC contracts -- in UAE mainland and Saudi Arabia, the Arabic version of a contract may prevail in court, and a translation nuance can determine the outcome of an AED 1.8 million dispute
- Skipping the pre-signature checklist before routing for execution -- entity name inconsistencies, missing schedules, or unsigned approvals cause re-execution delays
- Treating the agent's cross-border review as exhaustive -- the agent catches jurisdiction-specific issues the reviewer might miss, but the reviewer catches business context the agent cannot know

## Connections

- The single-jurisdiction review from **L03** is extended here to multi-overlay analysis -- same `/review-contract` command but with cross-border context triggering additional overlay loading
- The playbook from **L02** calibrates the cross-border review against the organisation's specific positions, not just generic standards
- The `/vendor-check` monitoring introduced in **L03** receives post-execution obligations extracted by `/signature-request`, creating a continuous contract lifecycle
- NDA triage in **L05** applies the same jurisdiction overlay system -- a cross-border NDA triggers multi-overlay loading just as a cross-border MSA does
- The governing principle from **L01** is reinforced at every stage: the agent reviews, triages, drafts, and flags; the licensed attorney advises, decides, and signs -- including the final execution decision
