### Core Concept

The transformation from concept paper to skill file has three steps: Extract, Structure, Encode. The method is mechanical, not creative. It requires discipline: reading carefully, asking "where must the agent decide?", and converting those decisions into instructions specific enough that the agent cannot misinterpret them.

### Key Mental Models

- **Extract**: Read the concept paper and categorize everything as a domain requirement (what the agent must produce), a decision point (where the agent must choose between options), or an edge case (where normal rules break). A single concept paper paragraph typically yields 3-6 requirements, 2-4 decision points, and 2-3 edge cases. If you find no decision points, you are reading too quickly.
- **Structure with When-Do-Because**: Convert each extracted item into a statement with three parts: a trigger condition (When), an action (Do), and a justification (Because). The Because is not decoration; it lets the agent prioritize between conflicting rules. A rule with no justification cannot be resolved against a competing rule.
- **Encode to components**: Map requirements to Persona (who the agent is), decision points to Questions (what it analyzes before acting), and edge cases to Principles (rules for uncertainty). The mapping reflects execution order: Questions run first, then Persona workflow, then Principles intervene when edge cases appear.

### Critical Patterns

- Vague actions ("handle it appropriately") are specification failures. Every When-Do-Because statement needs a specific threshold and a specific action: "fewer than three requirements" rather than "if vague"
- Compound statements (three conditions, one action) are hard to prioritize. One trigger per statement
- The Because clause anchors the rule. When James set a "fewer than three requirements" threshold, Emma asked why three. His answer came from the concept paper: typical briefs contain five to eight requirements. That context belongs in the Because clause so future maintainers know what informed the original choice

### Common Mistakes

- Treating the three categories as optional. Requirements without decision points means you skipped the hardest extraction work. Decision points are where agent behavior becomes unpredictable without explicit encoding
- Writing Because clauses that repeat the action ("Never guess BECAUSE you should not guess"). The justification must explain the consequence: what goes wrong if the agent ignores this rule?
- Stopping at Step 2 and skipping the mapping. Structured logic that is not mapped to the right component ends up in the wrong place: edge case rules in the Persona, analysis questions in Principles

### Connections

- **Builds on**: Domain knowledge vs. agent intelligence from Lesson 1; the gap between pasting prose and encoding skills
- **Leads to**: SKILL.md anatomy in Lesson 3; applied skill writing in Lessons 4-7
