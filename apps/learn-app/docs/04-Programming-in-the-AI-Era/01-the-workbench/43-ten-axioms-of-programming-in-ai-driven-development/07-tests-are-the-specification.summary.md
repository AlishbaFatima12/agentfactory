### Core Concept
Tests are not verification tools—they are the specification. Write tests first that define correct behavior, then prompt AI to implement. Implementations are disposable; tests are permanent.

### Key Mental Models
- **Test-Driven Generation (TDG)**: Write failing tests that define correct behavior, prompt AI with tests + types, run tests on generated code, then accept or regenerate. Never debug AI code—regenerate.
- **Tests as Specification**: `assert calculate_shipping(weight=5.0, destination="UK", total=45.99) == 12.50` is unambiguous where "calculate shipping costs" is vague. Tests say exactly what the function must return for exact inputs.
- **Implementation Disposability**: If AI generates bad code, throw it away and regenerate. Tests remain unchanged because they define requirements, not solutions.
- **The Test Pyramid**: 70% unit tests (fast, precise specifications), 20% integration tests (component interaction), 10% E2E tests (user-visible behavior). Unit tests are the most effective specifications.
- **Behavior vs Implementation Specification**: Good tests specify what (inputs → outputs). Bad tests specify how (mocking internals, checking call order). Implementation-coupled tests prevent AI from choosing the best approach.

### Key Facts
- James lost $12,000 in one weekend because `apply_discount()` returned 0.15 instead of 0.85—no test defined what "correct" meant
- Kent Beck's *Test-Driven Development: By Example* (2002) codified the test-first practice from Extreme Programming
- D.D. McCracken's *Digital Computer Programming* (1957) and NASA's Project Mercury team (1960s) used test-first practices before TDD had a name
- 80% code coverage is a practical baseline for TDG work—it catches omissions but doesn't guarantee correctness
- Pytest features used in TDG: fixtures (shared state), parametrize (specification tables), markers (test categories like @pytest.mark.unit)

### Critical Patterns
- TDG workflow: Write failing test → Prompt AI with test + types → Run tests → Accept (if pass) or Regenerate (if fail)
- Atomic test structure: One test per behavior, clear assertion, no implementation coupling
- Specification tables via parametrize: Each row is a test case, table is the complete specification (e.g., discount percentages with expected results)
- Coverage as gap detection: When James ran coverage, he discovered untested boundary case (order total exactly $75.00)—AI had guessed correctly but could have guessed wrong

### Common Mistakes
- **The Circular Testing Trap (most dangerous)**: Never let AI generate both tests and implementation. Same assumptions produce wrong code AND wrong tests—neither catches the other's errors. You write specification (tests), AI writes solution (code).
- **Testing after implementation**: Tests confirm what code does, not what it should do. Write tests first so they define requirements, not verify assumptions.
- **The Green Bar Illusion**: Passing tests mean specification is satisfied, NOT that code is secure, performant, or production-ready. James's shipping function passed all tests but was O(n²).
- **Happy-path-only testing**: Only testing expected cases. Edge cases, error conditions, boundaries are unspecified—AI handles them however it wants.
- **Implementation-coupled tests**: Mocking internals, checking call order, asserting private state. Tests break on any refactor, preventing regeneration.
- **"We'll add tests later"**: Later never comes. Codebase grows, every AI function gets merged after visual review, refactoring becomes impossible.

### Connections
- **Builds on**: Axiom V (Types Are Constraints)—types catch structural errors, tests catch logical errors. Axiom VI (Principle 3: Verification as Core Step)—tests are proactive specification, not reactive verification.
- **Leads to**: Axiom VIII (Version Control is Memory)—tests exist in files, but James lost the history of which test caught the $12,000 bug because he had no git discipline.
- **Foundation for**: TDG makes implementations disposable. Without tests-as-specification, you cannot safely regenerate code. Tests are the permanent contract; AI implementations are trial solutions.
