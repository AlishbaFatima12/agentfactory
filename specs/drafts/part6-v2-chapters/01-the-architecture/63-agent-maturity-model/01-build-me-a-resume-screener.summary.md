### Core Concept

Running code is not the same as working software. James asks Claude Code to build a resume screener and gets Python that parses keywords and returns a score. The code passes a type checker. It produces output. It means nothing: the scoring rubric has no career gap handling, no distinction between hard and soft requirements, and no structured job spec schema. The agent executed mechanics correctly while knowing nothing about recruitment as a discipline.

### Key Mental Models

- **Domain-ignorant agent**: an agent that produces syntactically valid output while lacking the domain knowledge required to make that output meaningful
- **Premature specialist**: an agent built before the domain is understood, reflecting the builder's knowledge at the moment of prompting rather than validated domain expertise
- **The dependency chain**: domain understanding must precede specification, specification must precede validation, validation must precede construction

### Critical Patterns

- General-purpose AI can produce code for any domain; that does not mean the code is correct for that domain
- The most dangerous failure looks like success: the code runs, the output is plausible, but no expert would trust it
- A screener's quality ceiling is the job description's quality floor; bad inputs constrain the agent before it even starts

### Common Mistakes

- James skips domain understanding entirely and prompts directly for a specialist, producing a keyword matcher instead of a screening system
- Treating "it runs" as evidence of correctness
- Assuming AI will supply missing domain knowledge automatically

### Connections

- **Builds on**: Ch 61's coordination failure (separate problem: this agent coordinates fine; it simply does not know what to compute)
- **Leads to**: Why a phase structure is needed before building any specialist (Lesson 2)
