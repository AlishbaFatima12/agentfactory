### Core Concept

A Digital FTE (Full-Time Equivalent) is an AI agent that owns a complete job role, not a single task. The distinction: a chatbot answers questions when asked; a Digital FTE runs a process end to end with defined inputs, contracted outputs, and verification at every handoff. HireFlow's four FTEs are the Factory Layer made concrete: Job Spec Writer, Resume Screener, Interview Question Generator, and Candidate Summarizer, connected in a verified pipeline from hiring requirements to decision-ready briefs.

### Key Mental Models

- **Chatbot vs. Digital FTE contrast**: Chatbot produces freeform text, responds when asked, has no accountability. Digital FTE produces contracted output in a defined schema, runs when the pipeline triggers, maintains state, is verified at every handoff.
- **Pipeline as production line**: Each FTE feeds the next via a verified data contract. A "(verified)" gate at every arrow prevents one FTE's drift from silently corrupting all downstream outputs.
- **Component reuse**: SmartNotes' `NoteStore` class is not rebuilt for HireFlow; it is integrated. `NoteStore.create()` records observations at each pipeline stage; `NoteStore.search()` retrieves context when needed. Good components are infrastructure, not toys.

### Critical Patterns

- FTE ownership is the key concept: James owned vendor negotiations end to end in his old job (evaluate, negotiate, contract, report). That is the same structure a Digital FTE uses: receive work, process it, produce contracted output, be accountable for quality.
- The Interview Question Generator does not produce generic questions: it reads screening results and targets specific gaps. A candidate with weak SQL gets SQL scenarios. This is what "owns a responsibility" means at the per-candidate level.
- The Candidate Summarizer produces no new information: everything in the summary traces back to earlier pipeline outputs. No hallucinated qualifications can survive this constraint.

### Common Mistakes

- Defining FTEs by single tasks instead of full roles: a single task ("score this resume") is a chatbot function; a full role ("screen every candidate, score them, document reasoning, handle edge cases") is a Digital FTE.
- Treating pipeline diagrams as implementation blueprints: the FTE definitions in this lesson are conceptual scaffolding; the formal blueprint comes in Chapter 64.
- Assuming SmartNotes is irrelevant because it was built in Part 4: proven components become infrastructure. Rebuilding from scratch wastes the trust you earned by building it well.

### Connections

- **Builds on**: All prior lessons in this chapter: contracts (L2), Factory Layer ownership (L3), governance verification gates (L4).
- **Leads to**: Chapter 64 (formal HireFlow Blueprint with the six-step decomposition method); Chapter 67 (writing the actual skill files for each FTE); Chapter 83 (NoteStore integration with the ChatKit interface).
