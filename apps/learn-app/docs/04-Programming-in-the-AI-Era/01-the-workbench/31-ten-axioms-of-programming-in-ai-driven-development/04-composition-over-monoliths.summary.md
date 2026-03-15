### Core Concept
Complex systems are built from composable, focused units. Each unit does one thing well, communicates through well-defined interfaces, and can be tested independently. The Unix philosophy applied to software architecture.

### Key Mental Models
- **Three Properties of Composable Units**: (1) Focused — does one thing completely, (2) Interface-defined — inputs/outputs explicit and typed, (3) Independent — can be tested, understood, and replaced without touching other units.
- **Information Hiding (Parnas, 1972)**: Break systems so each module hides a design decision from others. When a decision is hidden inside a module, changing it affects only that module; when shared across modules, changes cascade through the entire system.
- **Fractal Composition**: Same pattern repeats at every scale — functions compose into modules, modules into packages, packages into services. Structure is self-similar from 20-line function to distributed architecture.

### Key Facts
- David Parnas's 1972 paper "On the Criteria To Be Used in Decomposing Systems into Modules" established information hiding as the theoretical foundation for composition — the only way to manage systems too large to fit in one mind is decomposing into independently understandable parts.
- Composition pattern already appeared in previous axioms: Emma's Makefile (Axiom I) composed programs through shell, knowledge system (Axiom II) composed markdown files, discipline stack (Axiom III) composed verification tools into pipeline.
- Context windows are finite: 1,400-line monolith consumes AI context with unneeded code; 20 composed functions (each 20-70 lines) give AI exactly needed context, producing focused, accurate generation.

### Critical Patterns
- Monolith-to-composition trajectory: Month 1 (single function works perfectly), Month 3 (grows to 300 lines), Month 6 (bug fix causes regression), Month 9 (new developer can't understand), Month 12 (AI hallucinates on modification), Month 18 ("rewrite everything").
- James's discount feature in monolith: change on line 712 broke tax calculation (line 890 depended on inventory check at line 340 modified six months prior). In composed version: single new function inserted into pipeline, nothing else could break.
- Dependency injection composes behavior: instead of hardcoding which payment processor/database, pass implementation as parameter — same orchestration works in production (Stripe/Postgres), testing (fakes/memory), development (logs/SQLite).

### Common Mistakes
- **God Class**: One class with 50+ methods handling unrelated concerns (ApplicationManager, Utils, Helpers) — file every PR touches, causes merge conflicts every sprint, cannot be understood in less than a week.
- **Monolithic Function**: 500+ lines with multiple responsibilities — cannot test, understand, or modify in isolation; extract focused helpers with clear interfaces.
- **Tight Coupling**: Module A directly imports internals of Module B — changes to B cascade as breaking changes to A; define interfaces so A depends on interface, not B's internals.
- **The Decomposition Trap**: Over-decomposition scatters simple logic across so many units that understanding whole requires assembling mental map of dozens of tiny pieces — compose when concerns genuinely separate, leave simple things simple.

### Connections
- **Builds on**: Principle 4 (Small, Reversible Decomposition from Chapter 6) governs process (how you work); Axiom IV governs architecture (what you build). Process = task decomposition into commits/steps; Architecture = system decomposition into functions/modules.
- **Leads to**: Axiom V (types as verification) — composed systems need verification that pieces actually work together and that AI-generated code does what was requested across evolving system.
- **Foundation for**: AI collaboration — monoliths force AI to modify code it doesn't need to understand (guarantees collateral damage); composition gives AI focused context, enables independent testing, makes any unit replaceable without breaking whole.
