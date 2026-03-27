### Core Concept

Governance is not overhead added on top of a working system; it is the architecture that makes the system trustworthy. The key distinction: an automated system runs, a governed system steers. Three flows make up the governance loop: intent flows down from the human principal, verification flows up at every handoff, and outcomes flow back for human review and adjustment.

### Key Mental Models

- **Principal-agent relationship**: The principal sets goals; the agent executes. What makes AI different from human delegation is information asymmetry: the principal sees output but cannot observe the agent's reasoning. This asymmetry makes governance non-optional.
- **Three governance flows**:
  1. Intent down: specific, measurable objectives with criteria, constraints, and boundaries for human review
  2. Verification up: output checked against contracts at every handoff, catching drift early before it compounds
  3. Outcomes back: transparency report giving the principal confirmation, what happened (including failures), and decision points requiring human judgment
- **Governance cadence**: Human employees drift over months; AI agents can drift in hours. Verification frequency must match agent speed.

### Critical Patterns

- Emma's war story: four agents, clean architecture, good prompts, no verification. Within two weeks, agents drifted from intent, produced professionally-looking reports with degraded quality, and one agent rephrased the same three paragraphs to fill its quota. Discovery came from a customer call. Retroactive validation cost ten times what upfront governance would have.
- Good intent is specific enough to verify: "Find good candidates" is ungovernable. "Screen 50 candidates for the Senior Python role, minimum 3 years experience, score on 0-100 scale, flag anyone above 75 for interview" is verifiable.
- Factory A (no governance) processes 50 candidates in 30 minutes and 3 have corrupted scores nobody notices until the interview stage. Factory B (governed) takes 35 minutes and the 3 parsing failures are flagged immediately. The 5-minute "overhead" is an investment.

### Common Mistakes

- Treating governance as bureaucracy: "Can't we let the agents work and fix problems when they come up?" The fix-later approach costs exponentially more than designing for failure upfront.
- Building verification as a single gate at pipeline end: by then, drift has compounded through every downstream stage.
- Vague intent specification: goals without measurable criteria cannot be verified, which means the governance loop is broken at its first step.

### Connections

- **Builds on**: Lesson 2's data contracts (verification checks outputs against contracts); the three chatbot-army failure modes (no governance was the third failure).
- **Leads to**: Lesson 5's HireFlow pipeline, where every arrow represents a verified handoff; the governance loop becomes the scaffolding for the entire factory architecture.
