### Core Concept
PRIMM-AI+ includes five measurement and growth tools that connect learning exercises to professional software development: the Verification Ladder shows how predict-then-verify scales from exercises to production observability, Confidence Scoring trains you to know when you know and when you don't, the Error Taxonomy provides diagnostic vocabulary for five bug types, the Professional Practice Mapping shows how each PRIMM stage maps to professional workflows, and the Chapter-End Rubric measures growth across five dimensions.

### Key Mental Models
- **Verification Ladder**: The predict-then-verify habit scales across five steps from learning exercises (Prediction) through professional practice (Types, Tests, Pipeline, Observability) — it's not a training wheel you outgrow, it's the same habit that powers production systems
- **False Confidence**: Rating yourself 5 (certain) and getting it wrong is the most dangerous state for an AI-era developer — when you think you understand AI-generated code but don't, you ship bugs you can't find
- **Error Taxonomy as Diagnostic Vocabulary**: Asking "what kind of bug is this?" (Type, Logic, Specification, Data, or Orchestration) before asking AI to fix it narrows your search and builds understanding
- **Learning-to-Professional Mapping**: PRIMM-AI+ habits directly map to professional practice — Predict becomes code review, Run becomes automated testing, Investigate becomes debugging, Modify becomes iterative refinement, Make becomes shipping from requirements
- **Confidence Calibration**: The goal is not to always score 5 — the goal is for your confidence scores to accurately predict your actual accuracy

### Key Facts
- **Verification Ladder Steps**: Prediction (read and commit to answer), Types (validate structure), Tests (verify behavior), Pipeline (run all checks together), Observability (monitor production)
- **Confidence Scale**: 1 (no idea), 2 (vague guess), 3 (think I know but could be wrong), 4 (fairly confident), 5 (certain with exact description)
- **Four-Item Recording Protocol**: After each prediction, record your prediction, your confidence score (1-5), the actual result, and your revised explanation
- **Five Bug Types**: Type Error (wrong kind of data), Logic Error (runs but wrong answer), Specification Error (built wrong thing), Data Error (breaks with unusual inputs), Orchestration Error (wrong execution order)
- **Chapter-End Rubric Dimensions**: Prediction Accuracy, Trace Quality, Explanation Quality, Modification Quality, Independent Make — each rated Developing/Competent/Fluent

### Critical Patterns
- While learning, you write the code yourself to build the skill; in professional practice, AI writes the code from YOUR specification, which is why learning to write clear specifications matters more than typing code fast
- The predict-then-verify habit you build at Step 1 (Prediction) is the same habit that powers every step above it on the Verification Ladder — it grows with you rather than being replaced
- Overconfidence and underconfidence are both normal early on — calibration improves through repeated practice of predicting, recording confidence, checking actual results, and analyzing gaps
- When something goes wrong during Investigate or Modify, glance at the Error Taxonomy to ask "Is this a type problem or a logic problem?" before attempting fixes

### Common Mistakes
- Skipping mental predictions when AI generates code — this is where bugs enter production because you assume AI output is correct without verifying
- Treating PRIMM-AI+ tools as temporary training wheels that disappear after learning — the habits map directly to professional practice with the same core actions at larger scale
- Aiming for confidence score of 5 on every prediction — well-calibrated judgment means accurately knowing when you're certain versus when you're guessing
- Asking AI to fix a bug before identifying what kind of bug it is — diagnostic vocabulary (Type/Logic/Specification/Data/Orchestration) tells you where to search

### Connections
- **Builds on**: Lesson 2's PRIMM-AI+ cycle with roles, boundaries, checkpoints, gates, and five rules — this lesson adds the measurement and scaling tools that complete the framework
- **Leads to**: Lesson 4 covers the final enhancement (classroom and solo modes) and the practical lesson architecture that governs every programming chapter from Chapter 45 forward, showing how all these tools work together in real lessons
