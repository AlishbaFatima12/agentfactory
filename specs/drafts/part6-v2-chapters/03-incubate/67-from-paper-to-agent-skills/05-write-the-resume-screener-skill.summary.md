### Core Concept

The Resume Screener is the second HireFlow FTE skill, written with reduced scaffolding. Its core lesson is calibration: vague scoring instructions produce inconsistent scores. James's first Principles ("Score candidates fairly and consistently") were wishes, not enforceable rules. Emma's version replaced each wish with calibration anchors: specific definitions of what each score range means, so two agents produce scores within 1 point of each other.

### Key Mental Models

- **Scoring inconsistency as a diagnostic signal**: Running the same skill on the same candidate twice and getting different scores is not a runtime problem; it is a specification problem. The variance points to a Principle that is too vague to enforce. Adding calibration anchors removes the agent's ability to interpret "consistent" subjectively.
- **Calibration anchors define the scale**: Without anchors, a "7/10" means whatever the agent infers from context. With anchors (0-2: no evidence; 3-4: mentioned but not demonstrated; 5-6: demonstrated in limited context; 7-8: demonstrated across multiple contexts; 9-10: expert-level evidence), every score refers to the same observable definition.
- **Non-traditional background handling requires explicit rules**: "Handle non-traditional backgrounds well" is unenforceable. Emma's version specifies: do not penalize for a missing degree; score based on portfolio, open-source contributions, and certifications; add a note to the gap analysis flagging the non-traditional evaluation method.

### Critical Patterns

- The Resume Screener's input format is the Job Spec Writer's output format. The Screener must read the scoring rubric dimensions and weights produced by the Job Spec Writer and use them directly. This inter-FTE contract means the Screener cannot use hardcoded dimensions
- The gap analysis format matters for the downstream FTE. The Interview Question Generator needs specific gap data: which dimensions scored below 5, what evidence was found, and what was missing. A gap analysis that says "candidate is weak in some areas" is not a contract; it is a comment
- Scoring variance above 1 point per dimension is the threshold for "needs more calibration." Testing the same candidate three times and comparing per-dimension scores is the standard consistency test for any scoring skill

### Common Mistakes

- James's most significant error: writing Principles as aspirations rather than constraints. "Score fairly" cannot be violated by an agent that is, in its own view, scoring fairly. Only rules with specific thresholds and observable criteria can be enforced
- Treating non-traditional backgrounds as a binary: either they have a degree or they do not. The actual challenge is evaluating portfolio quality, open-source contributions, and self-documented learning against the same rubric dimensions as traditional candidates
- Omitting the Because clause from scoring rules. "Score on a 0-10 scale with these anchors" without a justification cannot be compared against a competing approach. The justification ("so two agents produce scores within 1 point for the same candidate") is the reason the anchors exist

### Connections

- **Builds on**: Job Spec Writer output format (Lesson 4) as the required input format; calibration concept new to this lesson
- **Leads to**: Resume Screener gap analysis format becomes the Interview Question Generator's required input in Lesson 6
