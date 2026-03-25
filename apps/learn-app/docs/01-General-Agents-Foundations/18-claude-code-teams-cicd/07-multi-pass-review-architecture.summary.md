# Summary: Multi-Pass Review Architecture

## Core Insight

AI code review has two structural problems: self-review bias (the generator confirms its own decisions) and attention dilution (later files in a large diff get shallower analysis). Multi-pass review solves both by using independent sessions and splitting the work into focused passes.

## Key Concepts

### Why Self-Review Fails

- The generator session retains its full reasoning context: why it chose this data structure, why it skipped that edge case
- When asked to review its own code, it reads through the lens of its own reasoning, biased toward confirming choices it just made
- An independent session sees only the code, not the reasoning behind it, and is more likely to question assumptions
- Fix: use a different Claude session for review (Writer/Reviewer pattern)

### Attention Dilution

- Feeding a 14-file diff into one prompt spreads Claude's attention across thousands of lines
- Files reviewed later in the sequence receive shallower analysis than files reviewed first
- A bigger context window does not fix this; the degradation is in relevance scoring, not capacity
- Fix: break the review into per-file passes so each file gets full attention

### Two-Phase Multi-Pass Review

| Phase                       | Scope              | What it catches                                                        |
| :-------------------------- | :----------------- | :--------------------------------------------------------------------- |
| Per-file passes (parallel)  | One file at a time | Local bugs: null dereferences, injection, missing error handling       |
| Cross-file integration pass | All files together | Interface mismatches, broken contracts, missing imports, circular deps |

- Per-file passes run in parallel (independent `claude -p` calls with `&` and `wait`)
- The cross-file pass receives per-file findings to avoid duplication
- A summary pass combines everything into a human-readable report

### Specific Review Criteria Beat Vague Instructions

| Vague (do not do this)                 | Specific (do this)                                                  |
| :------------------------------------- | :------------------------------------------------------------------ |
| "Be conservative"                      | "Flag null dereferences, SQL injection, unvalidated user input"     |
| "Only report high-confidence findings" | Define REPORT categories, SKIP categories, and SEVERITY definitions |

- Specific criteria give Claude categorical targets (match/no-match), not subjective judgments
- Define what to report AND what to skip; if a category has high false positives, disable it temporarily

### Confidence Self-Reporting

- Each finding includes a `confidence` field: high, medium, or low
- Use for triage: high = likely real, auto-comment; medium = flag for human; low = batch for periodic review
- Confidence is NOT accuracy. A low-confidence finding can still be critical if real.
- Confidence is for prioritization, not for deciding whether to look at all

## Practical Deliverables

The lesson builds three artifacts:

1. **Writer/Reviewer pattern**: two separate Claude sessions, one generates and one reviews
2. **Per-file review shell script**: loops over changed files, runs `claude -p` per file with structured JSON output
3. **Cross-file integration script**: receives per-file findings, checks interfaces and contracts across module boundaries

## Common Mistakes

- Assuming self-review works because "Claude is objective." Claude retains reasoning context and is biased toward confirming its own decisions.
- Thinking more context is always better. A 14-file diff in one prompt causes attention dilution, missing issues in later files.
- Confusing high confidence with correctness. High confidence means Claude is fairly certain the issue exists, not that it is definitely a real bug.
- Using vague instructions like "be conservative" instead of categorical review criteria.

## Exam Connection

Task Statement 4.6 and Q12 test multi-pass review. The correct answer for reviewing a large PR: per-file local analysis passes plus a separate cross-file integration pass. Key testable points: self-review limitations, session isolation, specific criteria over vague instructions, confidence self-reporting for calibrated routing.
