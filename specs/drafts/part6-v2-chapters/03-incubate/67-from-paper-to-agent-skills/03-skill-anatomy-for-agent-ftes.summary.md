### Core Concept

A SKILL.md file has two layers: YAML frontmatter (name and description) and a Markdown body with three components (Persona, Questions, Principles). The description field is the skill's contract with the orchestrator: it determines whether Claude selects this skill for a given task. The body encodes execution logic. For HireFlow FTEs, every skill must be an execution skill, not an advisory one.

### Key Mental Models

- **Execution vs. Advisory**: Advisory skills recommend; the human decides. Execution skills act: they follow a numbered workflow, produce structured output, and validate their results. The key test is whether two different agents reading the same Persona would produce identical output. Advisory personas ("recommend approaches based on industry standards") fail this test. Execution personas ("When you receive a brief: 1. Parse, 2. Classify, 3. Generate, 4. Validate") pass it.
- **Pre-flight / Emergency procedures**: Questions are the pre-flight checklist: the agent analyzes the input before the workflow starts. Principles are the emergency procedures: they intervene when the workflow hits something it was not designed for. The Persona runs the main workflow; it consults Questions first and Principles when edge cases appear.
- **Knowledge is Markdown (Axiom II)**: Skills are plain Markdown files, not compiled code. Any human can read, review, and edit them. The iteration cycle is: edit Markdown, test, observe, edit again. This is intentional: skills are living documents that grow with your understanding.

### Critical Patterns

- The description field is not a label; it is a signal. If it is vague, the orchestrator will miss valid use cases or trigger the skill at the wrong time
- Advisory FTE skills break the pipeline. When the Resume Screener outputs a paragraph of advice instead of structured JSON scores, the Interview Question Generator receives prose it cannot parse. Advisory output serves human readers; execution output serves downstream agents
- Inter-FTE data contracts: each skill must specify both what it expects as input AND what it promises as output. The Job Spec Writer's output format is the Resume Screener's input format. Mismatches between contracts cause silent pipeline failures

### Common Mistakes

- Writing an advisory Persona and adding structured output requirements later. If you specify exact JSON fields and validation rules, you have written an execution skill; calling it advisory just creates confusion
- Leaving inter-FTE data contracts implicit. "The Resume Screener needs the job description" is not a contract. A contract names every required field, its type, and what happens when it is missing
- Conflating Persona with Principles. The Persona describes the normal workflow; Principles describe what to do when the workflow cannot proceed normally. If your Persona says "if the brief is vague, ask for clarification," that rule belongs in Principles

### Connections

- **Builds on**: SKILL.md format from Part 1 (advisory skills); transformation method from Lesson 2 (what to put in each component)
- **Leads to**: Writing actual FTE skills in Lessons 4-7; inter-FTE data contracts become concrete in Lesson 6
