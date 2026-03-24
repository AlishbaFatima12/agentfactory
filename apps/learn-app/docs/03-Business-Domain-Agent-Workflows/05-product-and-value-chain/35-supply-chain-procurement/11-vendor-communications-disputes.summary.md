### Core Concept

Every procurement communication follows a single principle regardless of type: state facts, reference specific data, state the required action, state the deadline: no blame, no emotion, no ambiguity. Authority levels and timing are contractual constraints, not administrative preferences; getting them wrong has legal and commercial consequences.

### Key Mental Models

- **Five Types, One Principle**: Invoice Dispute Notice, Corrective Action Request, Contract Non-Renewal Notice, Emergency Supply Assurance Request, Vendor Exit Notice: different scenarios, identical communication discipline
- **Authority Governs Sign-Off**: Category Manager signs dispute notices; CPO signs CARs and non-renewal notices; CPO and Finance Director both sign exit notices: authority mismatches create legal exposure
- **Notice Deadline as Hard Constraint**: Missing the non-renewal notice window can extend a contract by a full additional term: the deadline is a contractual obligation, not a calendar preference

### Critical Patterns

- Use `/vendor-communicate` (not `/communicate`): the renamed command is the plugin surface
- Verify every output against the four-point checklist: PO reference present, variance amount specific, required action unambiguous, specific deadline stated
- Check contract notice provisions before drafting non-renewal or exit notices: the required notice period is in the contract, not standard
- Draft communications at the correct authority level from the start: re-issuing at the correct level after sending at the wrong one damages credibility

### Common Mistakes

- Sending communications without specific data references: "there was a discrepancy" is not an invoice dispute notice; "line 3 invoiced at £42.50 against PO rate of £38.00, variance £4.50" is
- Missing non-renewal notice deadlines because they were not calendared at contract signing: the notice window should be a diary entry on day one
- Treating exit communications as adversarial: a cooperative vendor communication is more likely to achieve IP and tooling recovery than an adversarial one

### Connections

- **Builds on**: Invoice reconciliation (Lesson 6): exceptions from reconciliation generate dispute notices using this framework
- **Leads to**: Vendor exit protocol (Lesson 13): the exit notice and internal brief in Exercise 8 apply this communication framework at its most consequential
