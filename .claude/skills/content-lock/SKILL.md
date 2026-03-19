---
name: content-lock
description: Activate a session guardrail that blocks file edits outside apps/learn-app/docs/. Use this skill when starting a focused content editing session to prevent accidental changes to platform code, configs, or other non-content files. Invoke with "/content-lock" when you want to protect the codebase during content-only work. Also useful when multiple agents are working and you want to scope one to content only.
allowed-tools: []
hooks:
  - type: PreToolUse
    matcher: Edit|Write
    hook: |
      if [[ ! "$TOOL_INPUT" =~ apps/learn-app/docs/ ]]; then
        echo "BLOCKED: content-lock is active. Only edits to apps/learn-app/docs/ are allowed this session."
        echo "Deactivate content-lock if you need to edit other files."
        exit 1
      fi
---

# Content Lock

A session-scoped guardrail that restricts Edit and Write operations to `apps/learn-app/docs/` only.

## When to Use

Activate this skill when you're doing a pure content session — writing lessons, fixing frontmatter, updating quizzes — and want to make sure you don't accidentally touch platform code, configs, or infrastructure files.

This is especially useful when:
- Multiple agents are running and you want to scope one to content
- You're in a long content session and want protection against scope creep
- You're reviewing/editing content and don't want to "fix" code you notice along the way

## What It Does

Registers a PreToolUse hook that intercepts all Edit and Write tool calls. If the target file path doesn't contain `apps/learn-app/docs/`, the operation is blocked with a clear message.

## Limitations

- Only blocks Edit and Write — does not block Bash commands (use `/careful` patterns for that)
- Scoped to the current session only — does not persist across sessions
- Does not block Read or Glob (you can still explore the full codebase)
