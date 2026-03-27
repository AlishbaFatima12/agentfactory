### Core Concept

Applying Domain Decomposition to a domain you did not design is the real test of whether you understand the method. Three practice domains (Customer Support, Content Publishing, Loan Processing) each have the same structural requirements: 3-5 FTEs, explicit boundaries, data contracts with examples, and justified gate placement.

### Key Mental Models

- **Transfer is the goal**: Understanding the method when someone explains it is not the same as applying it to an unfamiliar domain. This lesson exists specifically to close that gap.
- **Common pitfalls cluster around precision**: Too many FTEs (too many handoff failure points), vague verification ("should be accurate"), gates everywhere (defeats automation), missing failure modes (agent decides for itself), and generic data contracts (`output: dict`).
- **Claude Code as reviewer, not author**: The AI-assisted review prompt turns Claude Code into a critic, not a creator. The student produces the blueprint; the AI finds gaps. Where the AI finds gaps the student missed, update. Where the student disagrees, justify.

### Critical Patterns

- A nine-item self-assessment checklist provides an objective quality bar without requiring human review
- The "From... to... through..." sentence structure anchors the exercise and is the first checkpoint
- Failure modes are the most commonly omitted element in first blueprints because they require imagining what goes wrong before building anything

### Common Mistakes

- Too many FTEs: seven stages with unclear combinations, creating more handoff failure points than necessary
- Verification criteria phrased as aspirations ("output should be accurate") rather than testable conditions ("every claim references a specific source document")
- Placing gates after every stage under the rationale of "maximum safety," which inverts the factory's purpose

### Connections

- **Builds on**: Lesson 2 (six-step method), Lesson 3 (template), Lesson 4 (HireFlow worked example)
- **Leads to**: The blueprint produced here becomes the student's personal reference document for later chapters; Lesson 6 connects it to the Concept Paper
