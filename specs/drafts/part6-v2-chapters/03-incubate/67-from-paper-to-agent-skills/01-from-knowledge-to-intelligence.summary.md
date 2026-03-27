### Core Concept

Domain knowledge and agent intelligence are different artifacts. Passing the domain mastery gate proves you understand recruitment. It does not give the agent that understanding. Knowledge lives in your head and in a concept paper; agent intelligence lives in skill files that encode decision logic in a form agents can execute.

James's first Resume Screener prompt was one line: "score candidates against job requirements." The agent invented keyword-matching logic and ranked a marketing candidate above a senior engineer. The concept paper contained five weighted scoring dimensions and a specific rule about non-traditional backgrounds. None of that reached the agent because James never encoded it.

### Key Mental Models

- **Descriptive vs. Prescriptive**: Concept papers are descriptive (how things work). Skill files are prescriptive (what the agent does when). The transformation between them is the core work of the Incubate phase.
- **Prose buries rules**: Even pasting the full concept paper helps only partially. Edge case rules buried in paragraph seven receive equal weight to main rules in paragraph two. Agents need hierarchy, not paragraphs.
- **Incubate Phase purpose**: Phase 1 (Explore) produced the concept paper. Phase 3 (Build Specialist) produces running FTEs. Phase 2 (Incubate) sits between them and answers: what must the agent know before you start building production code? The answer is four SKILL.md files.

### Critical Patterns

- Each HireFlow FTE's concept paper description is 2-3 paragraphs; each skill file encodes that knowledge as executable decision logic, not prose
- The transformation from concept paper to skill requires systematic extraction; it is not automatic and cannot be delegated to AI without losing the learning
- The gap between "I know how to score candidates" and "the agent knows how to score candidates" is exactly the gap this chapter closes

### Common Mistakes

- Pasting the concept paper directly into a prompt. Works better than a one-liner but still buries edge case rules in prose where agents cannot distinguish them from context
- Confusing domain mastery (passing the gate) with agent readiness (having encoded skills). One proves you know the domain; the other encodes it for execution
- Treating the Incubate phase as optional. Finding a scoring logic gap in a SKILL.md costs minutes; finding it after building the MCP server and database schema costs hours

### Connections

- **Builds on**: Domain mastery gate from Chapter 66; five-phase maturity model from Chapter 63 (Incubate = Phase 2)
- **Leads to**: The transformation method in Lesson 2 (how to convert prose into executable skill instructions)
