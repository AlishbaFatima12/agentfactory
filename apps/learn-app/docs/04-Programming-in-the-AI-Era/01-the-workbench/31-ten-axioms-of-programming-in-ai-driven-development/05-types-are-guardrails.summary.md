### Core Concept
Types shift error detection from runtime to development time by giving AI a machine-readable specification to generate against. Without types, AI guesses data shapes from statistical patterns; with types, it has an explicit contract enforced by the type checker.

### Key Mental Models
- **Types as Specification**: Type annotations are code-level equivalents of specifications — machine-verifiable contracts that constrain valid code shapes. When Emma wrote `def get_order_history(customer_id: int) -> list[CustomerOrder]`, she stated what goes in, what comes out, and what is guaranteed.
- **Python Type Discipline Stack**: Three layers work together — Type Hints declare contracts (documentation), Pyright enforces contracts statically (development time), Pydantic validates data at boundaries (runtime). Together they catch errors at every stage.
- **Boundary vs Internal Types**: Pydantic at the edges (external data validation), dataclasses at the core (trusted internal data). The boundary is where errors enter; that's where validation belongs.
- **Generics and Protocols**: Generics enable one implementation for many types (`first_or_none` works with any list). Protocols define structural interfaces without inheritance — anything with the required shape conforms.

### Key Facts
- Robin Milner's 1978 "A Theory of Type Polymorphism" proved well-typed programs cannot go wrong — an entire class of runtime errors becomes mathematically impossible
- Python's PEP 484 (2014) by Guido van Rossum added opt-in type annotations, enabling static analysis while preserving dynamic nature
- Milner won the 1991 Turing Award for type inference systems that now protect developers from AI hallucinations
- James's staging crash took hours to debug; Emma's typed fix caught the same errors in five minutes with Pyright

### Critical Patterns
- **Type-First AI Workflow**: Define types first (the specification), let AI generate implementations (constrained by types), type checker verifies (catches hallucinations automatically)
- **Constrained Vocabulary Advantage**: SQL has ~30 keywords; Python has thousands of library functions. Fewer choices mean fewer AI hallucination opportunities. Types create similar constraints.
- **AI Hallucination Prevention**: Types catch method hallucinations (`customer.get_orders()` doesn't exist), wrong return types (dict vs User object), and interface drift (wrong assumptions about APIs)
- **Verification Ladder Integration**: Types catch structural errors (Rung 2) — wrong shapes, missing fields, interface mismatches — but not logical errors (wrong values with right types)

### Common Mistakes
- **The Any Anti-Pattern**: Every `Any` in code is a hole where AI hallucinations pass through unchecked. `dict[str, Any]` loses all type information and disables checking.
- **The Annotation Illusion**: Typed code is structurally sound, not automatically correct. Types catch shape errors; tests catch logic errors; review catches design errors. No single layer is sufficient.
- **Disabling Type Checker**: Turning off Pyright because "too strict" removes the entire safety net. Strictness IS the value — fix the types instead.
- **Untyped AI Output Shipped Directly**: Type-annotate AI code and run Pyright before committing, or hallucinations reach production unchecked.

### Connections
- **Builds on**: Axiom III (Disciplined Programs) — programs with types and tests — and Principle 6 (Constraints and Safety) — boundaries enable capability
- **Leads to**: Axiom VI (Data is Relational) — types describe individual objects; relational models describe how entities connect
- **Foundation for**: AI collaboration safety — types turn implicit assumptions into explicit contracts that machines verify automatically
