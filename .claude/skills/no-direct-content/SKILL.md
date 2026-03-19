---
name: no-direct-content
description: Activate a session guardrail that prevents writing lesson prose directly — enforcing the rule that all educational content must go through the content-implementer subagent. Use when starting content creation sessions to catch violations of the "never write lesson content directly" rule from CLAUDE.md. Invoke with "/no-direct-content" to enable the guardrail for this session.
allowed-tools: []
hooks:
  - type: PreToolUse
    matcher: Edit|Write
    hook: |
      # Block writes to lesson .md files (not README, not summary, not flashcards, not quiz)
      if [[ "$TOOL_INPUT" =~ apps/learn-app/docs/ ]] && [[ "$TOOL_INPUT" =~ /[0-9]{2}-[a-z].*\.md ]] && [[ ! "$TOOL_INPUT" =~ README\.md ]] && [[ ! "$TOOL_INPUT" =~ \.summary\.md ]] && [[ ! "$TOOL_INPUT" =~ \.flashcards\.yaml ]] && [[ ! "$TOOL_INPUT" =~ quiz\.md ]]; then
        echo "BLOCKED: no-direct-content is active."
        echo "You are trying to write directly to a lesson file. Per CLAUDE.md rules:"
        echo "  NEVER write educational prose directly — use the content-implementer subagent."
        echo ""
        echo "Allowed direct edits: README.md, .summary.md, .flashcards.yaml, quiz files, frontmatter-only changes."
        echo "For lesson content: spawn a content-implementer subagent instead."
        exit 1
      fi
---

# No Direct Content

A session-scoped guardrail that enforces the CLAUDE.md rule: "NEVER write educational prose directly — always use content-implementer subagent."

## Why This Exists

From failure-history.md (2025-12-26): Content written directly (bypassing the content-implementer subagent) resulted in hallucinated facts, missing YAML frontmatter, and weak "Try With AI" sections. The content-implementer subagent has specialized quality checks that direct writing skips.

## What It Blocks

Intercepts Edit and Write operations targeting lesson `.md` files in `apps/learn-app/docs/`. A file is considered a lesson if it:
- Lives under `apps/learn-app/docs/`
- Matches the pattern `NN-lesson-name.md` (numbered lesson files)

## What It Allows

These file types are safe to edit directly:
- `README.md` — chapter-level metadata and structure
- `.summary.md` — generated summaries
- `.flashcards.yaml` — flashcard decks
- `*quiz.md` — quiz files
- Frontmatter-only changes (though the hook can't distinguish these — use judgment)

## When to Activate

- Starting a content creation session with multiple lessons
- When you catch yourself about to write lesson prose directly
- As a safety net during long sessions where discipline might slip
