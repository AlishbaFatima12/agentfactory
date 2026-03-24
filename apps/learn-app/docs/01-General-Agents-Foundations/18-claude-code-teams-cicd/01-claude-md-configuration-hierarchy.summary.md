---
title: "Summary: The CLAUDE.md Configuration Hierarchy"
sidebar_position: 1.5
---

# Summary: The CLAUDE.md Configuration Hierarchy

## Mental Model: The Three Scopes

Think of CLAUDE.md as three concentric circles. The outermost circle (user-level) holds your personal preferences. The middle circle (project-level) holds team standards. The innermost circle (directory-level) holds package-specific conventions. Instructions in a smaller circle override the larger circle when they conflict.

| Level     | Location                               | Shared via Git? | Loads            | Who It Serves             |
| :-------- | :------------------------------------- | :-------------- | :--------------- | :------------------------ |
| User      | `~/.claude/CLAUDE.md`                  | No              | At session start | You, all projects         |
| Project   | `./CLAUDE.md` or `./.claude/CLAUDE.md` | Yes             | At session start | All team members          |
| Directory | Any subdirectory `CLAUDE.md`           | Yes             | On demand        | Claude, in that directory |

**Key insight**: Directory-level files load on demand (when Claude reads files there), not at session start. This is the most commonly missed distinction.

## Core Patterns

**Splitting a large CLAUDE.md**: When your CLAUDE.md exceeds ~200 lines, move sections into `.claude/rules/` topic files. The main CLAUDE.md becomes a brief orientation document. Rules files without a `paths` field load at session start, same as the main CLAUDE.md.

**Composing with @import**: Reference existing documents (`@docs/coding-standards.md`) inside any CLAUDE.md. Paths resolve relative to the importing file. Supports up to 5 levels of nesting. First external import requires a one-time approval.

**Diagnosing with /memory**: Run `/memory` to see every CLAUDE.md and rules file loaded in the current session. This is your first step when instructions are not being followed.

## Common Mistakes

1. **Putting team standards in `~/.claude/CLAUDE.md`** -- User-level files are personal to your machine. Teammates never see them. Team standards belong in the project-level CLAUDE.md (committed to git).

2. **Expecting directory-level CLAUDE.md to load at session start** -- They load on demand when Claude reads files in that subdirectory. Run `/memory` after Claude touches a file there to confirm.

3. **Confusing CLAUDE.md with settings.json** -- CLAUDE.md shapes behavior through instructions (like a sign saying "please knock"). `settings.json` enforces technical configuration like permissions and sandbox mode (like a lock on the door).

4. **Not using /memory to diagnose** -- When Claude ignores your instructions, the first step is always `/memory` to check what actually loaded, not re-reading the CLAUDE.md file.

## Quick Decision Table

| I Want To...                                 | Put It In...                           |
| :------------------------------------------- | :------------------------------------- |
| Set personal preferences across all projects | `~/.claude/CLAUDE.md`                  |
| Share team standards via git                 | `./CLAUDE.md` or `./.claude/CLAUDE.md` |
| Scope conventions to one package             | `packages/name/CLAUDE.md`              |
| Split a large CLAUDE.md into topics          | `.claude/rules/*.md`                   |
| Import an existing doc into CLAUDE.md        | `@path/to/doc.md` inside CLAUDE.md     |
| Check what instructions loaded               | Run `/memory`                          |
| Block a tool or file path                    | `settings.json` (not CLAUDE.md)        |

## Self-Check Questions

1. A new hire's Claude uses 4-space indentation even though the project CLAUDE.md says 2-space. Where is the conflict most likely coming from?
2. You added a `packages/api/CLAUDE.md` but `/memory` does not show it. What did you forget?
3. Your CLAUDE.md is 400 lines and team members report Claude is ignoring some instructions. What should you do?
4. A teammate wants their personal coding preferences applied on their machine without affecting others. Where should they put them?

<details>
<summary>Answers</summary>

1. The new hire has a user-level `~/.claude/CLAUDE.md` with 4-space indentation. Project-level should override it, but if the user-level is more specific (e.g., specifies "for Python files"), it might take precedence. Check with `/memory`.
2. Directory-level files load on demand, not at session start. Ask Claude to read a file inside `packages/api/` first, then run `/memory` again.
3. Split it into `.claude/rules/` topic files. Long CLAUDE.md files consume more tokens and reduce adherence. Keep the main file under 200 lines.
4. In `~/.claude/CLAUDE.md` (user-level). It is not committed to git and stays on their machine.

</details>

## Exam Prep: Task Statement 3.1

- Three hierarchy levels: user (personal, not shared), project (team-wide, shared via git), directory (on demand)
- Precedence: more specific overrides broader (project overrides user, directory overrides project)
- `/memory` is the diagnostic command for loaded instruction files
- `@import` resolves relative to the importing file, up to 5 levels deep
- `.claude/rules/` without `paths` field = loads at session start (same as CLAUDE.md)
- CLAUDE.md = behavior shaping; `settings.json` = hard enforcement
