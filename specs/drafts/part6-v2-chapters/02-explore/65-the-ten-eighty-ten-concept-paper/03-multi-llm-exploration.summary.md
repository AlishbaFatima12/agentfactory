### Core Concept

The Advisory Board Pattern extends the 10-80-10's last 10% from a single LLM reviewer to three models with distinct roles: Domain Challenger, Logic Auditor, and Gap Finder. Each model receives the same concept paper but different review mandates, covering blind spots that a single model misses. The builder decides what to act on; the models are advisors, not authors.

### Key Mental Models

- **Advisory Board Pattern**: Three roles, three prompts, three models. Domain Challenger finds where domain assumptions are wrong. Logic Auditor finds internal contradictions. Gap Finder finds missing topics, unstated dependencies, and unconsidered stakeholders.
- **The Crystallization Signal**: After each revision loop, re-submit to all three advisors. When scores reach 9.5+ AND feedback shifts from substantive critique to stylistic suggestion, the paper has crystallized. The shift in feedback character is the real signal; the score is a useful proxy.
- **Builder as Principal**: The Two-Layered Model from Ch 61 appears here in document form. The builder holds intent (the factory's purpose). The advisory LLMs verify. The builder decides which feedback to act on.

### Critical Patterns

- Different frontier models have different training data and reasoning patterns, so they surface different blind spots. Asking one model three times produces three variations of the same model's blind spots, not three independent perspectives.
- Feedback classification: Substantive critique (revise), Missing section (add), Stylistic suggestion (ignore), Contradicts research (investigate). Acting on stylistic suggestions wastes revision cycles; ignoring substantive critique keeps structural weaknesses in place.
- Chasing 10.0 past crystallization is procrastination disguised as quality. A paper at 9.5 with all substantive feedback addressed is ready.

### Common Mistakes

- Treating the Advisory Board as three parallel "review this paper" prompts instead of three distinct mandates (wasted potential)
- Automatically accepting model feedback that contradicts the builder's research (investigate first; the model may be wrong or outdated)
- Continuing to iterate after the crystallization signal (diminishing returns; further loops only refine style)

### Connections

- **Builds on**: 10-80-10 Rule (Lesson 2), specifically extending the last 10% segment; Two-Layered Model (Ch 61) as governance analogy
- **Leads to**: Hands-on application in Lesson 4, where James runs three advisory board loops on his HireFlow concept paper
