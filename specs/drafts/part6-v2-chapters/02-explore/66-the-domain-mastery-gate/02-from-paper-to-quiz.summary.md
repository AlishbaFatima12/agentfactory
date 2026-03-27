### Core Concept

AI-generated quizzes feel hard but test recall, not mastery. When James asked Claude for five hard recruitment questions, the output was answerable after reading a single blog post. The problem is not question difficulty; it is question type. A quiz that only tests what you can look up produces false confidence. The three-dimension framework fixes this by forcing questions across fact, edge-case, and judgment-call layers.

### Key Mental Models

- **Three quiz dimensions**: Fact questions test verifiable claims (one correct answer, lookupable). Edge-case questions test unusual scenarios where the domain map does not reach. Judgment-call questions test genuine dilemmas where reasoning quality matters more than the specific conclusion.
- **Seam questions**: The hardest failures happen at handoff points between FTEs, not inside individual components. Questions that span two FTEs test whether you understand how one agent's output becomes another's input constraint.
- **The 10-80-10 concept paper problem**: Concept papers are strong on facts, thin on edge cases, and silent on judgment calls. That is the normal shape of a well-designed system document. It describes what should happen, not what to do when things go sideways.

### Critical Patterns

- The five-step quiz generation process: extract key claims, generate fact/edge-case pairs, identify decision points, evaluate question quality, refine weak questions
- A question that can be answered by scanning the concept paper for keywords tests recall, not mastery
- The strongest questions test the seams between components, because pipeline contradictions are harder to anticipate than component failures

### Common Mistakes

- Accepting AI-generated questions without evaluating whether they test recall or mastery
- Writing all questions targeting individual FTEs in isolation (misses handoff failures)
- Treating a high score on surface-level questions as a readiness signal

### Connections

- **Builds on**: 10-80-10 concept paper method from Chapter 65 (Lesson 2); four HireFlow FTE specifications from Chapter 64
- **Leads to**: Lesson 3, which formalizes this informal process into the five-step Domain Mastery Gate pattern
