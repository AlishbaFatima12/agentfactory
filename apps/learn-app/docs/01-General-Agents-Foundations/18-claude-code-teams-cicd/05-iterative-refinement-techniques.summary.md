# Summary: Iterative Refinement Techniques

## Core Insight

Hoping the first attempt is correct is the most expensive strategy. Each of the three refinement techniques replaces hope with a feedback signal: examples show the target, tests define correctness, and interviews surface unknowns. The right technique depends on what you know and what you do not know.

## Key Concepts

### 1. Concrete I/O Examples (You know what the output should look like)

- Show 2-3 input/output pairs instead of describing the transformation in prose
- Prose is ambiguous by nature: "normalize dates" has dozens of valid interpretations; `"March 5th, 2024" -> "2024-03-05"` has exactly one
- Works for any transformation: strings, JSON reshaping, SQL generation, code refactoring
- Pick examples that cover the **ambiguous** cases, not every possible input

**When to reach for this:** The task is a transformation, prose descriptions keep producing wrong output, and the format matters.

### 2. Test-Driven Iteration (You know what correct looks like, but the logic is complex)

- Write the test suite first, then let Claude implement against your failures
- YOU define correctness (edge cases, expected behavior); Claude provides the implementation effort
- Critical rule: do NOT let Claude write both tests and implementation. It will write tests that pass its own code, which proves nothing.
- Each iteration narrows the gap: share test failures, Claude adjusts, repeat until green

**When to reach for this:** Too many edge cases for a few I/O examples, and you can express expected behavior as assertions.

### 3. Interview Pattern (You do not know what you do not know)

- Invert the dynamic: ask Claude to interview YOU about requirements before implementing
- Claude surfaces design considerations you might not have anticipated (cache invalidation strategies, race conditions, distributed state, burst handling)
- After the interview, start a fresh session to execute the resulting spec (clean context)

**When to reach for this:** Unfamiliar domain, many interacting design decisions, no domain expert available.

## Mental Model: Technique Selection

| What you know                                  | Technique             |
| :--------------------------------------------- | :-------------------- |
| Exactly what the output should be              | I/O examples          |
| How to verify correctness, not how to build it | Test-driven iteration |
| That you are missing something, but not what   | Interview pattern     |

## Single-Message vs Sequential Iteration

| Situation                                        | Strategy                   | Reason                             |
| :----------------------------------------------- | :------------------------- | :--------------------------------- |
| Fixes interact (one changes behavior of another) | Single message             | Claude needs the full picture      |
| Fixes are independent (different modules)        | Sequential                 | Verify each fix independently      |
| Unsure whether they interact                     | Single message             | Safer to let Claude see everything |
| More than 5 independent fixes                    | Sequential, batches of 2-3 | Keeps each iteration manageable    |

## Common Mistakes

- Thinking I/O examples only work for simple string formatting. They work for any transformation with clear input/output pairs.
- Letting Claude write both tests and implementation. The test suite is YOUR specification of correctness, not Claude's.
- Confusing the interview pattern with asking Claude for help. The interview pattern has Claude ASK YOU questions, not answer yours.
- Using sequential iteration when fixes interact, causing one fix to break another.

## Exam Connection (Task 3.5)

The exam tests all three techniques. Know WHEN to use each:

- Inconsistent transformation output -> I/O examples
- Complex correctness requirements -> Test-driven iteration
- Unfamiliar domain -> Interview pattern
- Multiple interacting issues -> Single message; independent issues -> Sequential
