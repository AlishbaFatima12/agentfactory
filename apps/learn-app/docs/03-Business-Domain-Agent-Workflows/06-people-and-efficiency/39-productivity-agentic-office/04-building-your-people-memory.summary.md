### Core Concept

The quality of every AI output that involves a person, delegation messages, meeting briefs, handoff communications: is entirely determined by what you have written about that person in Layer 2. Vague entries produce generic outputs; specific entries produce calibrated ones. The brief output is a diagnostic: if the guidance reads as generic, the entry needs more specificity.

### Key Mental Models

- **Entry quality → output calibration**: The skill does not improve on what you give it. A communication field that says "prefers clear communication" produces generic guidance. One that says "prefers Slack DM for routine requests, needs 3 business days lead time on data pulls, will push back on open-ended scope" produces actionable guidance.
- **The 80% test**: Before saving any communication entry, ask: "Would this describe 80% of professionals?" If yes, it is too generic. Write the observation that is specific to this person.
- **Sensitivity as context control**: The RESTRICTED flag does not hide information ; it controls when it surfaces. Sensitive entries are applied in one-to-one contexts only, never in group outputs or shared briefings where the subject might see them.

### Critical Patterns

- Write person entries with seven fields: name, role, reports_to, communication, current_focus, priorities, note, sensitivity (optional)
- Use the RESTRICTED sensitivity flag for succession planning, personal circumstances, performance concerns, or commercial sensitivities
- Request person briefs with `/agentic-office:workplace-context` before significant interactions: the brief synthesises what Layer 2 knows into pre-interaction guidance
- Evaluate brief output for specificity: if guidance would not change your approach to the interaction, improve the underlying entry

### Common Mistakes

- Writing how you wish someone communicated rather than how they actually do: the entry calibrates to the person, not to your preferences
- Treating sensitivity as secrecy, information with a RESTRICTED flag should still be in the system, just controlled for context
- Conflating "detail-oriented" (generic) with "prefers written briefs; will ask follow-up questions if context is missing; needs structured proposals with evidence base" (specific)

### Connections

- **Builds on**: Layer 1 and Layer 4 built in Lesson 3, personal and organisational memory
- **Leads to**: Layer 3 project entries in Lesson 5; delegation calibration in Lesson 7 reads directly from these person entries
