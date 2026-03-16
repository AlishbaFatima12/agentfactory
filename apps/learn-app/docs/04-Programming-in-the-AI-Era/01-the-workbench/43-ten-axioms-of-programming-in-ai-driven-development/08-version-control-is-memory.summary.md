### Core Concept
Git is not a backup tool—it is the persistent memory system that records every decision, experiment, and evolution. Files give you current state; git gives you all past states and the story between them.

### Key Mental Models
- **Git as Four-Dimensional Memory**: Commits record decisions (why changes were made), branches record experiments (parallel approaches tried), tags record milestones (stable points to return to), blame records accountability (who made each decision and when).
- **Atomic Commits**: One logical change per commit. If you need "and" to describe it, split it. James's giant "weekly update" commit (47 files, 2,391 insertions) was anti-memory—impossible to understand, revert, or bisect.
- **Conventional Commits**: Structured prefixes make history scannable: `feat(scope):`, `fix(scope):`, `refactor(scope):`, `test(scope):`. Prefix tells you what kind of change at a glance.
- **The WHY Rule**: Commit messages explain WHY, not WHAT. The diff already shows what changed—the message records reasoning, context, trade-offs that the diff cannot capture.
- **Git as Time Machine**: Bisect finds exact commit that introduced a bug via binary search. Revert creates inverse commit (safe undo without rewriting history). Cherry-pick applies specific commit from one branch to another.

### Key Facts
- James's post-mortem failed because git history was `wip`, `updates`, `fix stuff`—no record of original bug, which test caught it, or why the fix was made
- Linus Torvalds built Git core in ~2 weeks (April 2005) when BitKeeper revoked free license for Linux kernel development
- Git is distributed—every developer's copy contains complete history, no single point of failure (unlike CVS/Subversion with central server)
- Git tracks snapshots of entire project state, not just file changes—every commit captures complete state of every file at that moment
- Emma's post-mortem commit preserved full story: what changed, why it changed, how it was caught, root cause, impact ($12,000 loss), reference (PM-2025-003)

### Critical Patterns
- Agentic development workflow: main (stable, protected) → feature branches (human + AI work) → Pull Request (human reviews all AI commits) → merge to main
- AI commit attribution: `Co-Authored-By: Claude <noreply@anthropic.com>` for accountability, learning, and audit
- Branches for AI experiments: `ai/experiment-new-shipping-algorithm` prefix makes AI-generated experiments immediately clear. Merge if tests pass, discard if tests fail—no risk to main.
- Pre-risk tagging: Tag before risky changes (`pre-sqlite-migration`) so you can return instantly if migration fails catastrophically

### Common Mistakes
- **Giant commits ("fix everything")**: Impossible to understand, revert, or bisect. 47 files changed with message "weekly update" is voluntary amnesia.
- **Empty messages ("wip", "stuff", "asdf")**: Zero memory value. Future you learns nothing. James's post-mortem cost 3 hours reconstructing what disciplined commits would have told in 3 minutes.
- **Committing secrets/credentials**: The Permanent Record—once committed, credential exists in every clone forever. James committed DATABASE_URL with password, had to rotate credential immediately. Prevention: `.gitignore` before first commit.
- **Force-pushing shared branches**: Rewrites other people's history. Only force-push your own unshared branches (or when purging committed secrets).
- **Not using branches for experiments**: Experiments pollute main history. Branch first, merge only if successful. Even failed experiments have value—they record what was tried and why it didn't work.
- **Squashing all commits on merge**: Destroys detailed decision history. Preserve atomic commits; only squash true "wip" commits.

### Connections
- **Builds on**: Principle 5 (Persisting State in Files)—files give current state, git gives all past states and the story between them. CLAUDE.md tells AI what to do now; git log tells AI what was tried before.
- **Leads to**: Axiom IX (Verification Pipeline)—git records that tests pass, but James had no end-to-end verification that the full pipeline (data → discount → shipping → invoice → confirmation) actually worked together.
- **Foundation for**: Git is the system of record for software evolution. Without disciplined git history, the team spent 3 hours at post-mortem reconstructing context that should have taken 3 minutes to read from commit messages.
