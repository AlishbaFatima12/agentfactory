### Core Concept
The Context Problem is not an AI intelligence failure; it is an information architecture failure. Claude can reason as well as expert humans, but it starts every session from zero: no knowledge of your organisation's vocabulary, your people, your projects in flight, or your priorities. The gap between a generic AI answer and a knowledgeable colleague's answer is the gap this chapter closes.

### Key Mental Models
- **Intelligence vs Context**: A brilliant new hire and an experienced colleague differ not in capability but in accumulated organisational knowledge. Claude has the former; without memory, it lacks the latter.
- **Four Failure Modes as Diagnostic Framework**: Terminology Blindness, People Anonymity, Project Amnesia, and Priority Blindness are four named variants of the same underlying problem: each one costs time in re-briefing, translation, or correction.
- **Architectural Solution vs Better Prompts**: Better prompts help for one-off requests but do not solve the structural problem. Every session still starts from zero. The solution is persistent memory, which is what work.local.md provides.

### Critical Patterns
- Identify which failure mode is present in a given AI interaction: Is the output using generic vocabulary (Terminology Blindness)? Treating a stakeholder as unknown (People Anonymity)? Asking for project background you have provided before (Project Amnesia)? Treating a P1 task the same as a P3 task (Priority Blindness)?
- Compare generic output versus contextual output for the same request to make the cost of the Context Problem concrete
- Map all four failure modes to real examples from your own organisation before building the solution

### Common Mistakes
- Assuming the problem is that Claude is not smart enough: the constraint is context, not capability
- Thinking better prompts are the fix; they reduce the symptom but do not solve the architecture problem
- Assuming this only matters in large organisations, any professional with clients, projects, and internal vocabulary faces all four failure modes

### Connections
- **Builds on**: Domain agents from Chapters 28-38 (each domain agent starts from zero. This lesson names why)
- **Leads to**: Two-plugin installation (Lesson 2) and the four-layer Workplace Memory Architecture (Lesson 3)
