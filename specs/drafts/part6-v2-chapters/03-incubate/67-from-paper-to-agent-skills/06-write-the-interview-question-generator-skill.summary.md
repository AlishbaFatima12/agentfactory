### Core Concept

The Interview Question Generator is written with minimal scaffolding. Its defining insight is that question quality depends entirely on gap quality: generic questions come from generic gap data; targeted questions come from specific gap data. When James realized the Question Generator needed the Resume Screener's gap analysis to include evidence_found and evidence_missing fields, he went back and changed the upstream skill. That is inter-FTE pipeline thinking.

### Key Mental Models

- **Gap-driven question generation**: The gap analysis from the Resume Screener is the Question Generator's primary input. Dimensions scoring below 5 get at least two questions each: one behavioral and one technical. The goal is to determine whether the gap is real or a CV artifact (the candidate has the skill but the CV did not show it).
- **Balance rule**: Question sets should not be all-gap-probing or all-strength-confirming. A 60-30-10 split works: 60% targeting gaps (below 5), 30% confirming strengths (above 7), 10% open-ended to surface information not in the CV. High-scoring candidates still need a useful question set.
- **Each skill designs for its downstream neighbor**: James updated the Resume Screener output format mid-lesson, not because Lesson 5 asked for it, but because Lesson 6 revealed the downstream need. Pipeline thinking means designing each component's output with the next component's input in mind.

### Critical Patterns

- A question like "Tell me about yourself" provides no signal relative to the scoring gap. A gap-targeted question names the specific dimension and references the CV evidence: "Your CV shows freelance Python work but no corporate team experience. Describe a project where you collaborated with other engineers on a shared codebase."
- Scoring guides for each question have three levels: strong answer (8-10), adequate answer (5-7), and weak answer (1-4), each with specific observable evidence. Without scoring guides, two interviewers using the same question set cannot compare their evaluations
- Question difficulty calibration: junior roles get behavioral questions about foundational skills; senior roles get architectural and leadership probing; lead roles get organizational and stakeholder management questions

### Common Mistakes

- James's first attempt produced generic questions because the Question generator had no instruction to use the specific dimensions from the gap analysis. The Persona must explicitly reference the gap data as input and derive question topics from the low-scoring dimensions
- Generating questions only for gaps. If every question probes weaknesses, the interview feels adversarial and fails to confirm that high-scoring dimensions are genuine. Strength-confirming questions validate that what the CV claims is real
- Not updating the Resume Screener's output format to include the fields the Question Generator needs. Each skill's output specification must be designed to serve the next skill, not just complete its own task

### Connections

- **Builds on**: Resume Screener gap analysis as input (Lesson 5); inter-FTE data contracts from Lesson 3
- **Leads to**: Question set and scoring criteria become the Candidate Summarizer's input in Lesson 7; full pipeline test spans all three upstream FTEs
