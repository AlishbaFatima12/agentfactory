### Core Concept

Production work requires proper programs with types, tests, error handling, and CI integration. Scripts serve exploration; programs serve reliability. The failure mode is shipping scripts as if they were programs.

### Key Mental Models

- **Script-to-Program Continuum**: Not binary categories but a spectrum. Code moves along it as responsibilities grow — the key is recognizing when script-level practices become dangerous.
- **The Python Discipline Stack**: Four verification layers (uv, pyright, ruff, pytest) catch different defect classes — dependency conflicts, type mismatches, style violations, and logic errors respectively.
- **Types as AI Verification Layer**: Type annotations catch hallucinated APIs before runtime; tests encode expectations that persist across AI sessions; CI enforces standards regardless of who wrote the code.

### Key Facts

- Python added optional type hints in 2014 via PEP 484, co-authored by creator Guido van Rossum, reflecting Python's evolution from scripting language to systems language at production scale.
- The discipline stack (uv, pyright, ruff, pytest) forms layered verification: Layer 1 resolves dependencies, Layer 2 enforces consistent style, Layer 3 checks type alignment, Layer 4 validates logic correctness.
- AI-generated code introduces sharper risk than human-written code because it arrives fully formed with no trace of reasoning behind it — types and tests become the verification layer you didn't build mentally.

### Critical Patterns

- Five signals mark the script-to-program boundary: someone else runs it, it runs more than once, it processes important data, it exceeds 50 lines, or an AI generated it.
- Program version adds specific failure prevention: types declare intent, error handling uses specific exceptions with recovery, tests cover normal and edge cases, CLI provides typed interface.
- Each discipline tool catches problems others miss: pyright won't catch wrong logic (needs tests), pytest won't catch wrong types (needs pyright), ruff won't catch either but finds unused imports and formatting drift.

### Common Mistakes

- **The Prototype Trap**: Script solves immediate problem, someone asks to use it, month later it has three users and a cron job, six months later it fails with no types/tests/error messages to debug.
- **"Too Simple to Test" Trap**: Function that "just renames files" eventually handles Unicode, skips hidden files, preserves permissions, logs operations — each addition "too simple to test" individually, together creates untested complexity.
- **Jupyter notebooks as production code**: No tests, no types, cell execution order matters, hidden state between cells — extract logic into modules and test independently.
- **Bare `except Exception:`**: Hides real errors, makes debugging impossible — catch specific exceptions like `FileNotFoundError` instead.

### Connections

- **Builds on**: Axiom II (Knowledge Over Memory) — if code is your universal interface (Principle 2: Code as Universal Interface from Chapter 17), then types, tests, and error handling determine interface reliability.
- **Leads to**: Axiom IV (Composition Over Monoliths) — individual well-typed, tested programs are single units; next axiom addresses combining them into larger systems without everything tangling together.
- **Foundation for**: AI-assisted development — context windows are finite, focused generation needs isolated units, composed code enables independent verification and replacement of AI-generated components.
