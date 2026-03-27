### Core Concept

Domain Decomposition is a six-step method that converts a vague business need into a buildable factory specification. Steps 1-3 define what the factory does; Steps 4-6 define how it stays correct, safe, and future-ready.

### Key Mental Models

- **Step 1 anchors all later decisions**: The one-sentence "From [input] to [output] through [stages]" workflow statement keeps every design choice grounded. If a decision does not serve this sentence, reconsider it.
- **Step 2 is about boundaries, not names**: Naming four FTEs is easy. Defining what each FTE does NOT do is the hard part. Unclear boundaries produce three bad outcomes: both stages do the work (wasted compute), neither does it (dropped data), or both do it differently (inconsistent results).
- **Data contracts extend type annotations**: A type annotation says `score: int`. A data contract says `score: int, range 0-100, required, validated before handoff`. Contracts add constraints, required-field designations, and validation rules that the receiving stage can enforce.
- **Human gates protect decisions, not data**: A gate after every handoff is a bottleneck. A gate at high-leverage decision points is a safety net. A bad job spec poisons 200 evaluations; a bad screening score affects one candidate.
- **Economic participation points are forward-looking infrastructure**: Recording where the factory could acquire resources costs one blueprint line. Adding that capability later means restructuring every data contract at that location.

### Critical Patterns

- Step 3 requires a five-component role specification for each FTE: Name, Responsibility, Input Contract, Output Contract, Verification
- Steps 1-3 define structure; Steps 4-6 add precision that prevents silent failures in production
- The electrical conduit analogy captures Step 6: cheap during construction, expensive to retrofit

### Common Mistakes

- Treating Step 2 as a naming exercise rather than a boundary-drawing exercise
- Skipping Step 4 because "types are already in the code"
- Placing human gates after every stage to maximize safety, which defeats the purpose of automation

### Connections

- **Builds on**: Ch 61 (four FTEs named), Ch 62 (economic participation from budgets-not-permissions)
- **Leads to**: Lesson 3 organizes the six steps into the seven-section Factory Blueprint Template
