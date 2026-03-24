# Summary: Claude Code in CI/CD Pipelines

## Core Insight

The `-p` flag transforms Claude Code from an interactive assistant into a scriptable CI tool. Everything else in this lesson (structured output, CLAUDE.md as CI context, duplicate avoidance, GitHub Actions) builds on this single flag. Without `-p`, CI pipelines hang waiting for input that never comes.

## Key Flags

| Flag                                     | What it does                                                                     |
| :--------------------------------------- | :------------------------------------------------------------------------------- |
| `-p` (or `--print`)                      | Non-interactive mode. Processes prompt, outputs to stdout, exits.                |
| `--output-format json`                   | Returns JSON wrapper with `session_id`, `result`, and `usage` fields             |
| `--json-schema '{...}'`                  | Constrains output; structured data lands in the `structured_output` field        |
| `--allowedTools "Read,Bash(git diff *)"` | Pre-approves tools so Claude does not wait for interactive permission            |
| `--bare`                                 | Skips auto-discovery of hooks, skills, plugins, CLAUDE.md. Reproducible CI runs. |
| `--append-system-prompt-file`            | Explicitly loads context in bare mode                                            |

## Structured Output: Two Layers

1. `--output-format json` alone: free-text response lives in the `result` field, wrapped with metadata
2. `--output-format json` + `--json-schema`: schema-conforming data lives in `structured_output`, free-text still in `result`

Extract structured output downstream: `jq '.structured_output.findings[]'`

## CLAUDE.md as CI Context

- CI-invoked Claude Code reads the same CLAUDE.md hierarchy as interactive sessions (unless `--bare`)
- Add a "CI Review Standards" section: what to report, what to skip, testing standards and frameworks
- Without CI-specific context, Claude reviews everything generically and produces noise
- When using `--bare`, pass context explicitly via `--append-system-prompt-file ./CLAUDE.md`

## Avoiding Duplicate PR Comments

- Fetch prior review comments from the PR using `gh pr view`
- Pass them as context: "Here is what was already reported. Only flag NEW or still-unresolved issues."
- Prevents trust erosion from 15 identical comments about the same issue

## Session Isolation in CI

- The session that generated code should NOT review its own code
- Generator sessions retain reasoning context and are biased toward confirming their own decisions
- In CI, each `claude -p` invocation is a fresh session (natural isolation)
- If running generation and review in the same pipeline, use separate steps (separate `claude -p` calls)

## Real-Time vs Batch API

| Scenario                      | API choice              | Why                                     |
| :---------------------------- | :---------------------- | :-------------------------------------- |
| Pre-merge check (blocking)    | Real-time (`claude -p`) | Developer waits before merging          |
| PR review comment             | Real-time (`claude -p`) | Developer expects prompt feedback       |
| Nightly technical debt report | Batch (50% cheaper)     | No urgency; results can wait up to 24h  |
| Weekly code health dashboard  | Batch (50% cheaper)     | Runs overnight, report ready by morning |

**Decision rule:** Human waiting for the result before their next action = real-time. Result can wait hours = batch.

## GitHub Actions Integration

- Official action: `anthropics/claude-code-action@v1` (handles trigger detection, context gathering, comment posting)
- Custom workflows: combine `-p`, `--allowedTools`, `--output-format json`, and CLAUDE.md
- Store `ANTHROPIC_API_KEY` in repository secrets

## Common Mistakes

- Thinking there is a `CLAUDE_HEADLESS` environment variable, `--batch` flag, or stdin redirect for non-interactive mode. There is only `-p`.
- Assuming `--output-format json` returns ONLY the structured data. It returns a wrapper; structured data is in the `structured_output` field.
- Running CI without CLAUDE.md or `--append-system-prompt` and wondering why Claude produces generic reviews.
- Using the same session for code generation and code review (reasoning bias).

## Exam Connection

- **Q10**: `-p` flag is the answer for non-interactive CI mode
- **Q11**: Batch API for overnight reports, real-time for blocking pre-merge checks
- **Task 3.6**: Full CI integration picture (flags, CLAUDE.md context, session isolation, duplicate avoidance)
