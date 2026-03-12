import { useState } from "react";

const palette = {
  bg: "#faf5ef",
  card: "#fff8f0",
  cardBorder: "#e8d5c4",
  accent: "#c0582a",
  accentLight: "#e87a45",
  accentPale: "#f5ddd0",
  dark: "#2c1810",
  mid: "#5a3e2b",
  codeBg: "#2c1810",
  codeText: "#f0dcc8",
  tagBg: "#c0582a",
  tagText: "#fff",
  highlight: "#fff3e6",
};

const Code = ({ children }) => (
  <div
    style={{
      background: palette.codeBg,
      color: palette.codeText,
      borderRadius: 6,
      padding: "8px 11px",
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
      fontSize: 11,
      lineHeight: 1.5,
      overflowX: "auto",
      whiteSpace: "pre",
      marginTop: 6,
    }}
  >
    {children}
  </div>
);

const Tag = ({ children, color }) => (
  <span
    style={{
      display: "inline-block",
      background: color || palette.tagBg,
      color: palette.tagText,
      borderRadius: 4,
      padding: "2px 8px",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: 0.5,
      marginRight: 4,
      marginBottom: 3,
      textTransform: "uppercase",
    }}
  >
    {children}
  </span>
);

const Bullet = ({ children }) => (
  <div
    style={{
      display: "flex",
      gap: 6,
      marginBottom: 3,
      fontSize: 12.5,
      color: palette.mid,
      alignItems: "flex-start",
    }}
  >
    <span style={{ color: palette.accent, fontWeight: 700, marginTop: -1 }}>○</span>
    <span style={{ flex: 1 }}>{children}</span>
  </div>
);

const KV = ({ k, v }) => (
  <div style={{ fontSize: 12, marginBottom: 2, color: palette.mid }}>
    <strong style={{ color: palette.dark }}>{k}</strong> — {v}
  </div>
);

const RefRow = ({ cmd, desc }) => (
  <div
    style={{
      display: "flex",
      borderBottom: `1px solid ${palette.cardBorder}`,
      padding: "4px 0",
      alignItems: "center",
    }}
  >
    <code
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        color: palette.accent,
        fontWeight: 700,
        width: 150,
        flexShrink: 0,
      }}
    >
      {cmd}
    </code>
    <span style={{ fontSize: 11.5, color: palette.mid }}>{desc}</span>
  </div>
);

const SectionCard = ({ number, title, children, span = 1 }) => (
  <div
    style={{
      background: palette.card,
      border: `1.5px solid ${palette.cardBorder}`,
      borderRadius: 10,
      padding: "14px 16px 14px 16px",
      gridColumn: span > 1 ? `span ${span}` : undefined,
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 4,
        height: "100%",
        background: palette.accent,
        borderRadius: "10px 0 0 10px",
      }}
    />
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
      <div
        style={{
          background: palette.accent,
          color: "#fff",
          width: 26,
          height: 26,
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 900,
          fontSize: 13,
          fontFamily: "'Georgia', serif",
          flexShrink: 0,
        }}
      >
        {number}
      </div>
      <h3
        style={{
          margin: 0,
          fontSize: 15,
          fontWeight: 800,
          color: palette.dark,
          fontFamily: "'Georgia', serif",
          letterSpacing: -0.3,
        }}
      >
        {title}
      </h3>
    </div>
    {children}
  </div>
);

export default function GitCheatsheet() {
  const [page, setPage] = useState(0);
  const pages = ["Page 1: Mental Models & Core", "Page 2: Advanced & Workflows"];

  return (
    <div
      style={{
        background: palette.bg,
        minHeight: "100vh",
        fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: `linear-gradient(135deg, ${palette.codeBg} 0%, #4a2a18 100%)`,
          padding: "22px 28px 16px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontFamily: "'Georgia', serif",
            fontSize: 30,
            fontWeight: 900,
            letterSpacing: -0.5,
            color: "#fff",
          }}
        >
          Git{" "}
          <span style={{ color: palette.accentLight }}>Cheatsheet</span>
        </h1>
        <div
          style={{
            color: palette.codeText,
            fontSize: 12,
            marginTop: 6,
            letterSpacing: 2,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Mental Models · Commands · Workflows · Decision Guides — 2026 Edition
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 14 }}>
          {pages.map((label, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              style={{
                background: page === i ? palette.accentLight : "rgba(255,255,255,0.12)",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "7px 18px",
                fontSize: 12.5,
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Page 1 */}
      {page === 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
            padding: "16px 18px",
            maxWidth: 1050,
            margin: "0 auto",
          }}
        >
          {/* Section 1 — The Git Mental Model */}
          <SectionCard number="1" title="The Git Mental Model">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Git is a directed acyclic graph (DAG) of snapshots, not a list of diffs.
            </div>
            <Bullet><strong>Commits are snapshots</strong> — each commit stores the full state of every tracked file, not just what changed</Bullet>
            <Bullet><strong>Refs are pointers</strong> — branches, tags, and HEAD are just pointers to commit hashes; moving them is nearly free</Bullet>
            <Bullet><strong>History is a graph</strong> — every commit points to one or more parents, forming a DAG you can traverse</Bullet>
            <Bullet><strong>Objects are immutable</strong> — blobs, trees, and commits are content-addressed and never change once created</Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>KEY INSIGHT</div>
              <div style={{ fontSize: 11.5, color: palette.mid }}>
                Almost every git operation is adding new objects. "Destructive" operations just move pointers — the old commits still exist (see reflog).
              </div>
            </div>
          </SectionCard>

          {/* Section 2 — The Three Trees */}
          <SectionCard number="2" title="The Three Trees">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Every file lives in three places. Understanding these is the key to every staging command.
            </div>
            <KV k="Working Directory" v="Your actual files on disk — what you edit" />
            <KV k="Staging Area (Index)" v="A snapshot you're building for the next commit" />
            <KV k="HEAD (Repository)" v="The last committed snapshot on your current branch" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11.5, color: palette.mid }}>
                <strong style={{ color: palette.dark }}>Think of it as:</strong> Working Dir → <code style={{ color: palette.accent }}>git add</code> → Index → <code style={{ color: palette.accent }}>git commit</code> → HEAD
              </div>
            </div>
            <Bullet><code>git diff</code> compares Working Dir vs Index</Bullet>
            <Bullet><code>git diff --staged</code> compares Index vs HEAD</Bullet>
            <Bullet><code>git diff HEAD</code> compares Working Dir vs HEAD</Bullet>
          </SectionCard>

          {/* Section 3 — Branches Are Just Pointers */}
          <SectionCard number="3" title="Branches Are Just Pointers">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              A branch is a 41-byte file containing a commit hash. That's it.
            </div>
            <Bullet><strong>Creating a branch</strong> doesn't copy any files — it writes one hash to a file</Bullet>
            <Bullet><strong>Switching branches</strong> moves HEAD and updates the working tree to match that commit</Bullet>
            <Bullet><strong>HEAD</strong> is a special pointer that tracks which branch you're on (or which commit, if detached)</Bullet>
            <Bullet><strong>Deleting a branch</strong> removes the pointer — the commits still exist until garbage collected</Bullet>
            <Code>{`# Branch is just a file:
cat .git/refs/heads/main
# → a1b2c3d4e5f6...

# HEAD points to current branch:
cat .git/HEAD
# → ref: refs/heads/main`}</Code>
          </SectionCard>

          {/* Section 4 — Rebase vs Merge */}
          <SectionCard number="4" title="Rebase vs Merge" span={2}>
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag>Decision Guide</Tag>
              <Tag color="#3a6ea5">Mental Model</Tag>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div style={{ background: palette.highlight, borderRadius: 8, padding: "10px 12px", border: `1px solid ${palette.cardBorder}` }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: palette.dark, fontFamily: "'Georgia', serif", marginBottom: 6 }}>Merge</div>
                <Bullet>Creates a new merge commit with two parents</Bullet>
                <Bullet>Preserves the exact history as it happened</Bullet>
                <Bullet>Non-destructive — no existing commits change</Bullet>
                <Bullet>Creates a "railroad track" pattern in history</Bullet>
                <div style={{ marginTop: 6 }}>
                  <div style={{ fontSize: 10.5, fontWeight: 700, color: palette.accent, textTransform: "uppercase" }}>Use When</div>
                  <div style={{ fontSize: 11.5, color: palette.mid }}>Merging feature → main, preserving team context, public/shared branches</div>
                </div>
              </div>
              <div style={{ background: palette.highlight, borderRadius: 8, padding: "10px 12px", border: `1px solid ${palette.cardBorder}` }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: palette.dark, fontFamily: "'Georgia', serif", marginBottom: 6 }}>Rebase</div>
                <Bullet>Replays your commits on top of another branch</Bullet>
                <Bullet>Creates new commits with new hashes</Bullet>
                <Bullet>Produces a clean, linear history</Bullet>
                <Bullet>Rewrites history — dangerous on shared branches</Bullet>
                <div style={{ marginTop: 6 }}>
                  <div style={{ fontSize: 10.5, fontWeight: 700, color: palette.accent, textTransform: "uppercase" }}>Use When</div>
                  <div style={{ fontSize: 11.5, color: palette.mid }}>Updating feature branch from main, cleaning local commits, solo branches only</div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.accentPale, borderRadius: 6 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: palette.accent }}>GOLDEN RULE</div>
              <div style={{ fontSize: 11.5, color: palette.dark }}>
                Never rebase commits that exist on a shared/public branch. If someone else has based work on those commits, rebase will cause divergence.
              </div>
            </div>
          </SectionCard>

          {/* Section 5 — Branch Strategies */}
          <SectionCard number="5" title="Branch Strategies">
            {[
              { name: "Feature Branch", desc: "One branch per feature, merge via PR. Most common.", tag: "Popular" },
              { name: "Trunk-Based", desc: "Short-lived branches (<1 day), merge to main frequently.", tag: "Fast" },
              { name: "Git Flow", desc: "develop + main + feature + release + hotfix. Complex but structured.", tag: "Enterprise" },
              { name: "GitHub Flow", desc: "main + feature branches. Deploy from main. Simple and effective.", tag: "Simple" },
            ].map(({ name, desc, tag }, i) => (
              <div
                key={name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 5,
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                }}
              >
                <Tag color={["#c0582a", "#2a7a7a", "#7a5a8a", "#3a6ea5"][i]}>{tag}</Tag>
                <span style={{ fontWeight: 700, color: palette.dark, fontSize: 12, width: 95, flexShrink: 0 }}>{name}</span>
                <span style={{ fontSize: 11.5, color: palette.mid }}>{desc}</span>
              </div>
            ))}
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11.5, color: palette.mid }}>
                <strong style={{ color: palette.dark }}>Start with GitHub Flow</strong> unless your team needs formal release trains or parallel release support.
              </div>
            </div>
          </SectionCard>

          {/* Section 6 — Essential Daily Commands */}
          <SectionCard number="6" title="Essential Daily Commands">
            <RefRow cmd="git status" desc="Show working tree status — what's changed, staged, untracked" />
            <RefRow cmd="git add -p" desc="Interactively stage hunks — review each change individually" />
            <RefRow cmd="git commit -m '...'" desc="Commit staged changes with a message" />
            <RefRow cmd="git pull --rebase" desc="Fetch + rebase local work on top (cleaner than merge pull)" />
            <RefRow cmd="git push" desc="Push current branch to remote tracking branch" />
            <RefRow cmd="git switch branch" desc="Switch to an existing branch (modern replacement for checkout)" />
            <RefRow cmd="git switch -c new" desc="Create and switch to a new branch" />
            <RefRow cmd="git log --oneline -10" desc="Show last 10 commits, one line each" />
          </SectionCard>

          {/* Section 7 — Staging & Committing */}
          <SectionCard number="7" title="Staging & Committing">
            <RefRow cmd="git add file.txt" desc="Stage a specific file" />
            <RefRow cmd="git add -p" desc="Stage individual hunks interactively" />
            <RefRow cmd="git add ." desc="Stage all changes in current directory tree" />
            <RefRow cmd="git reset HEAD file" desc="Unstage a file (keep working dir changes)" />
            <RefRow cmd="git commit --amend" desc="Modify the last commit (message or content)" />
            <RefRow cmd="git commit --fixup=SHA" desc="Mark a commit as a fixup for a prior commit" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: palette.accent }}>PRO TIP</div>
              <div style={{ fontSize: 11.5, color: palette.mid }}>
                Use <code style={{ color: palette.accent }}>git add -p</code> religiously. It forces you to review every change before committing and naturally produces focused, atomic commits.
              </div>
            </div>
          </SectionCard>

          {/* Section 8 — Viewing History & Diffs */}
          <SectionCard number="8" title="Viewing History & Diffs">
            <RefRow cmd="git log --oneline" desc="Compact one-line-per-commit log" />
            <RefRow cmd="git log --graph" desc="Show branch/merge graph in ASCII" />
            <RefRow cmd="git log --all" desc="Show commits from all branches, not just current" />
            <RefRow cmd="git log -p file.txt" desc="Show commit history with diffs for one file" />
            <RefRow cmd="git diff" desc="Unstaged changes (working dir vs index)" />
            <RefRow cmd="git diff --staged" desc="Staged changes (index vs HEAD)" />
            <RefRow cmd="git show SHA" desc="Show a specific commit's details and diff" />
            <RefRow cmd="git blame file.txt" desc="Line-by-line: who last changed each line" />
          </SectionCard>

          {/* Section 9 — Remote Workflow */}
          <SectionCard number="9" title="Remote Workflow">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Remotes are just bookmarks pointing to other copies of the repo.
            </div>
            <KV k="git fetch" v="Download new objects and refs from remote — does NOT modify your working tree" />
            <KV k="git pull" v="fetch + merge (or fetch + rebase with --rebase flag)" />
            <KV k="git push" v="Upload your commits to the remote" />
            <KV k="git push -u origin feat" v="Push and set upstream tracking for a new branch" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: palette.accent }}>MENTAL MODEL</div>
              <div style={{ fontSize: 11.5, color: palette.mid }}>
                <code style={{ color: palette.accent }}>origin/main</code> is a local snapshot of where remote main was at last fetch. It does NOT auto-update. Run <code style={{ color: palette.accent }}>git fetch</code> to refresh it.
              </div>
            </div>
            <Bullet><strong>Tracking branches</strong> let <code>git pull</code> and <code>git push</code> know where to go automatically</Bullet>
          </SectionCard>

          {/* Section 10 — Merge Conflicts */}
          <SectionCard number="10" title="Merge Conflicts">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Conflicts happen when two branches changed the same lines. Git can't decide which to keep.
            </div>
            <Code>{`\u003c\u003c\u003c\u003c\u003c\u003c\u003c HEAD (your changes)
const x = "local version";
\u003d\u003d\u003d\u003d\u003d\u003d\u003d
const x = "incoming version";
\u003e\u003e\u003e\u003e\u003e\u003e\u003e feature-branch`}</Code>
            <Bullet><strong>Step 1:</strong> Edit the file — remove markers, keep the correct code</Bullet>
            <Bullet><strong>Step 2:</strong> <code>git add</code> the resolved file to mark it as resolved</Bullet>
            <Bullet><strong>Step 3:</strong> <code>git commit</code> (or <code>git rebase --continue</code> during rebase)</Bullet>
            <Bullet><strong>Bail out:</strong> <code>git merge --abort</code> or <code>git rebase --abort</code> to undo</Bullet>
          </SectionCard>

          {/* Section 11 — The Reflog Safety Net */}
          <SectionCard number="11" title="The Reflog Safety Net">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The reflog records every time HEAD moves. It's your "undo history" for almost everything.
            </div>
            <Bullet>Reflog entries expire after ~90 days — you have time to recover</Bullet>
            <Bullet>Even after <code>git reset --hard</code>, old commits remain in the reflog</Bullet>
            <Bullet>After a bad rebase, find the pre-rebase state and reset to it</Bullet>
            <Bullet>Works per-branch too: <code>git reflog show feature</code></Bullet>
            <Code>{`# View HEAD movement history
git reflog

# Recover from a bad rebase
git reset --hard HEAD@{2}

# Find a dropped stash
git fsck --unreachable | grep commit`}</Code>
          </SectionCard>

          {/* Section 12 — Undo Strategies (wide) */}
          <SectionCard number="12" title="Undo Strategies — Choosing the Right Tool" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                {
                  title: "git restore",
                  when: "Discard uncommitted changes",
                  best: "Undo edits in working dir. Use --staged to unstage. Safe — only affects uncommitted work.",
                  tag: "Safe",
                },
                {
                  title: "git revert SHA",
                  when: "Undo a published commit",
                  best: "Creates a new commit that undoes the target. Safe for shared branches — doesn't rewrite history.",
                  tag: "Safe",
                },
                {
                  title: "git reset --soft",
                  when: "Uncommit but keep changes staged",
                  best: "Moves HEAD back. Changes stay in index. Great for re-doing a commit message or combining commits.",
                  tag: "Local",
                },
                {
                  title: "git reset --hard",
                  when: "Nuclear option — discard everything",
                  best: "Moves HEAD, resets index AND working tree. Uncommitted work is gone. Use reflog to recover if needed.",
                  tag: "Danger",
                },
              ].map(({ title, when, best, tag }) => (
                <div
                  key={title}
                  style={{
                    background: palette.highlight,
                    borderRadius: 8,
                    padding: "10px 12px",
                    border: `1px solid ${palette.cardBorder}`,
                  }}
                >
                  <Tag color={tag === "Safe" ? "#5a8a3c" : tag === "Local" ? "#3a6ea5" : "#a53a3a"}>{tag}</Tag>
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark, marginTop: 4 }}>{title}</div>
                  <div style={{ fontSize: 10.5, color: palette.accent, fontWeight: 600, marginTop: 2 }}>{when}</div>
                  <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 3 }}>{best}</div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      )}

      {/* Page 2 */}
      {page === 1 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
            padding: "16px 18px",
            maxWidth: 1050,
            margin: "0 auto",
          }}
        >
          {/* Section 13 — Interactive Rebase */}
          <SectionCard number="13" title="Interactive Rebase">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Rewrite local history before sharing. The Swiss Army knife of commit editing.
            </div>
            <Code>{`# Rebase last 4 commits interactively
git rebase -i HEAD~4

# In the editor, change 'pick' to:
pick   abc1234  Keep this commit as-is
squash abc1235  Merge into previous commit
fixup  abc1236  Merge, discard message
reword abc1237  Edit commit message
drop   abc1238  Delete this commit`}</Code>
            <Bullet><strong>Reorder</strong> commits by rearranging lines in the editor</Bullet>
            <Bullet><strong>Squash before PR</strong> — clean up "WIP" and "fix typo" commits into logical units</Bullet>
            <Bullet>Use <code>git commit --fixup=SHA</code> then <code>git rebase -i --autosquash</code> for a streamlined flow</Bullet>
            <Bullet>If something goes wrong: <code>git rebase --abort</code> to return to the pre-rebase state</Bullet>
          </SectionCard>

          {/* Section 14 — Cherry-Pick */}
          <SectionCard number="14" title="Cherry-Pick">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Copy a single commit from one branch to another — without merging the entire branch.
            </div>
            <RefRow cmd="git cherry-pick SHA" desc="Apply one commit onto current branch" />
            <RefRow cmd="git cherry-pick A..B" desc="Apply range of commits (exclusive A)" />
            <RefRow cmd="git cherry-pick -n SHA" desc="Apply changes but don't commit (stage only)" />
            <RefRow cmd="git cherry-pick --abort" desc="Cancel an in-progress cherry-pick" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: palette.accent }}>WHEN TO USE</div>
              <div style={{ fontSize: 11.5, color: palette.mid }}>
                Hotfixes from dev to release branch. Backporting a single bug fix. Grabbing one useful commit from an abandoned branch. Avoid for large-scale branch integration — use merge/rebase instead.
              </div>
            </div>
          </SectionCard>

          {/* Section 15 — Stash & Worktrees */}
          <SectionCard number="15" title="Stash & Worktrees">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Stash</Tag>
              <Tag color="#2a7a7a">Worktrees</Tag>
            </div>
            <RefRow cmd="git stash" desc="Stash tracked, modified files" />
            <RefRow cmd="git stash -u" desc="Include untracked files in stash" />
            <RefRow cmd="git stash pop" desc="Apply most recent stash and remove it from stack" />
            <RefRow cmd="git stash list" desc="Show all stash entries" />
            <RefRow cmd="git stash show -p" desc="View the diff of a stash entry" />
            <div style={{ marginTop: 6 }}>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: palette.dark, marginBottom: 4 }}>Worktrees — parallel checkouts without stashing:</div>
              <Bullet><code>git worktree add ../hotfix main</code> — check out main in a sibling directory</Bullet>
              <Bullet>Each worktree is a separate working tree sharing the same .git data</Bullet>
              <Bullet>Perfect for code review or hotfixes without disrupting your current work</Bullet>
            </div>
          </SectionCard>

          {/* Section 16 — Git Bisect */}
          <SectionCard number="16" title="Git Bisect">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Binary search through history to find the commit that introduced a bug. O(log n) instead of O(n).
            </div>
            <Code>{`# Start bisecting
git bisect start
git bisect bad          # current commit is broken
git bisect good v2.0    # this tag/commit was working

# Git checks out a midpoint — test it, then:
git bisect good         # if this commit works
git bisect bad          # if this commit is broken

# Repeat until Git identifies the culprit
git bisect reset        # return to original HEAD`}</Code>
            <Bullet><strong>Automate it:</strong> <code>git bisect run npm test</code> — let a script mark good/bad automatically</Bullet>
            <Bullet>Bisect works on any testable condition, not just test suites</Bullet>
            <Bullet>With 1000 commits, bisect finds the bug in ~10 steps</Bullet>
          </SectionCard>

          {/* Section 17 — Tags & Releases */}
          <SectionCard number="17" title="Tags & Releases">
            <KV k="Lightweight Tag" v="Just a pointer to a commit — like a branch that never moves" />
            <KV k="Annotated Tag" v="Full object with tagger name, date, message, and optional GPG signature" />
            <RefRow cmd="git tag v1.0" desc="Create a lightweight tag at HEAD" />
            <RefRow cmd="git tag -a v1.0 -m '...'" desc="Create an annotated tag with message" />
            <RefRow cmd="git tag -l 'v2.*'" desc="List tags matching a pattern" />
            <RefRow cmd="git push --tags" desc="Push all tags to remote" />
            <RefRow cmd="git push origin v1.0" desc="Push a specific tag" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11.5, color: palette.mid }}>
                <strong style={{ color: palette.dark }}>Best practice:</strong> Use annotated tags for releases (they store metadata). Lightweight tags for temporary or internal markers.
              </div>
            </div>
          </SectionCard>

          {/* Section 18 — Hooks Overview */}
          <SectionCard number="18" title="Hooks Overview">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Scripts that run automatically at key points in the git workflow. Live in <code>.git/hooks/</code>.
            </div>
            <KV k="pre-commit" v="Runs before commit — lint, format, test" />
            <KV k="commit-msg" v="Validate or modify commit message format" />
            <KV k="pre-push" v="Runs before push — full test suite, security checks" />
            <KV k="post-merge" v="After merge — e.g., reinstall deps if lockfile changed" />
            <KV k="prepare-commit-msg" v="Template or auto-populate commit message" />
            <Code>{`# Use a shared hooks directory
git config core.hooksPath .githooks

# Or use Husky (Node) / pre-commit (Python)
# for team-wide hooks via package manager`}</Code>
          </SectionCard>

          {/* Section 19 — .gitignore Patterns */}
          <SectionCard number="19" title=".gitignore Patterns">
            <Code>{`# Specific file
secret.env

# Directory (trailing slash)
node_modules/
dist/

# Wildcard
*.log
*.tmp

# Negation — re-include
!important.log

# Double star — any depth
**/test/*.spec.js

# Single directory level
doc/*.txt  # matches doc/a.txt
           # not doc/sub/b.txt`}</Code>
            <Bullet><strong>Global ignore:</strong> <code>git config --global core.excludesFile ~/.gitignore_global</code></Bullet>
            <Bullet>Already tracked files aren't affected — use <code>git rm --cached file</code> to untrack</Bullet>
            <Bullet>Check rules: <code>git check-ignore -v filename</code> shows which rule matches</Bullet>
            <Bullet>Use <a href="https://gitignore.io" style={{ color: palette.accent }}>gitignore.io</a> to generate templates per language/framework</Bullet>
          </SectionCard>

          {/* Section 20 — Configuration & Aliases */}
          <SectionCard number="20" title="Configuration & Aliases">
            <Code>{`# Essential global config
git config --global user.name "Your Name"
git config --global user.email "you@mail.com"
git config --global init.defaultBranch main
git config --global pull.rebase true
git config --global rerere.enabled true

# Useful aliases
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.st status
git config --global alias.lg \\
  "log --oneline --graph --all --decorate"`}</Code>
            <Bullet><strong>rerere</strong> = "reuse recorded resolution" — git remembers how you resolved a conflict and auto-applies it next time</Bullet>
            <Bullet>Config levels: <code>--system</code> → <code>--global</code> → <code>--local</code> (local wins)</Bullet>
            <Bullet>View all settings: <code>git config --list --show-origin</code></Bullet>
          </SectionCard>

          {/* Section 21 — Collaboration Workflow */}
          <SectionCard number="21" title="Collaboration Workflow">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The standard PR-based development loop used by most teams.
            </div>
            {[
              { step: "1", label: "Branch", desc: "Create a feature branch from up-to-date main" },
              { step: "2", label: "Develop", desc: "Make focused, atomic commits as you work" },
              { step: "3", label: "Rebase", desc: "Rebase on main to incorporate latest changes" },
              { step: "4", label: "Push", desc: "Push branch to remote, open a pull request" },
              { step: "5", label: "Review", desc: "Address feedback with new commits (don't force-push mid-review)" },
              { step: "6", label: "Merge", desc: "Squash-merge or merge commit into main, delete branch" },
            ].map(({ step, label, desc }, i) => (
              <div
                key={step}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 5,
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                }}
              >
                <span style={{ fontWeight: 900, color: palette.accent, fontSize: 12, width: 18 }}>{step}</span>
                <span style={{ fontWeight: 700, color: palette.dark, fontSize: 12, width: 60, flexShrink: 0 }}>{label}</span>
                <span style={{ fontSize: 11.5, color: palette.mid }}>{desc}</span>
              </div>
            ))}
          </SectionCard>

          {/* Section 22 — Commit Message Conventions */}
          <SectionCard number="22" title="Commit Message Conventions">
            <Code>{`# Conventional Commits format
<type>(scope): <description>

feat(auth): add OAuth2 login flow
fix(api): handle null response body
docs(readme): update install steps
refactor(db): extract query builder
chore(deps): bump express to 4.19
test(cart): add checkout edge cases`}</Code>
            <Bullet><strong>Subject line:</strong> imperative mood, under 50 chars, no period at end</Bullet>
            <Bullet><strong>Body (optional):</strong> blank line after subject, wrap at 72 chars, explain "why" not "what"</Bullet>
            <Bullet><strong>Types:</strong> feat, fix, docs, style, refactor, perf, test, build, ci, chore</Bullet>
            <Bullet>Adding <code>BREAKING CHANGE:</code> in the footer signals a major version bump</Bullet>
          </SectionCard>

          {/* Section 23 — Thinking in Graphs */}
          <SectionCard number="23" title="Thinking in Graphs">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Advanced git intuition comes from thinking in terms of the commit graph.
            </div>
            <Bullet><strong>Ancestry:</strong> <code>A..B</code> means "commits reachable from B but not from A" — the delta between two points</Bullet>
            <Bullet><strong>Reachability:</strong> A commit is "on" a branch if it's an ancestor of that branch's tip. A commit can be on many branches.</Bullet>
            <Bullet><strong>Merge base:</strong> <code>git merge-base A B</code> — the most recent common ancestor, which is where merge/rebase decisions start</Bullet>
            <Bullet><strong>Detached HEAD:</strong> HEAD points directly at a commit, not a branch — any new commits won't belong to any branch unless you create one</Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: palette.accent }}>KEY INSIGHT</div>
              <div style={{ fontSize: 11.5, color: palette.mid }}>
                "Deleting" a branch doesn't delete any commits — it removes a pointer. Commits become unreachable (and eventually garbage collected) only if no ref or reflog entry points to them.
              </div>
            </div>
          </SectionCard>

          {/* Section 24 — Decision Matrix (wide) */}
          <SectionCard number="24" title="When to Use What — Quick Decision Guide" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                {
                  title: "Rebase",
                  when: "Updating your local feature branch",
                  best: "Keeps history linear. Use before opening a PR. Never on shared branches.",
                  tag: "History",
                },
                {
                  title: "Merge",
                  when: "Integrating a feature into main",
                  best: "Preserves branch context. Safe for shared branches. Creates merge commit.",
                  tag: "Integration",
                },
                {
                  title: "Cherry-Pick",
                  when: "Need one specific commit elsewhere",
                  best: "Hotfixes, backports. Copies the commit — doesn't move branches.",
                  tag: "Surgical",
                },
                {
                  title: "Stash",
                  when: "Quick context switch, come right back",
                  best: "Temporarily shelves work. Stack-based. Easy to forget — prefer worktrees for longer switches.",
                  tag: "Temporary",
                },
                {
                  title: "Reset --soft",
                  when: "Redo last commit(s) locally",
                  best: "Uncommits but keeps changes staged. Great for squashing or rewording before push.",
                  tag: "Rewrite",
                },
                {
                  title: "Revert",
                  when: "Undo a commit on a shared branch",
                  best: "Creates an inverse commit. Safe for published history. Doesn't rewrite anything.",
                  tag: "Safe Undo",
                },
                {
                  title: "Bisect",
                  when: "Finding which commit broke something",
                  best: "Binary search through history. Can be automated with a test script. Logarithmic efficiency.",
                  tag: "Debug",
                },
                {
                  title: "Worktree",
                  when: "Working on two branches simultaneously",
                  best: "Separate working directories sharing one repo. No stashing needed. Clean parallel work.",
                  tag: "Parallel",
                },
              ].map(({ title, when, best, tag }) => (
                <div
                  key={title}
                  style={{
                    background: palette.highlight,
                    borderRadius: 8,
                    padding: "10px 12px",
                    border: `1px solid ${palette.cardBorder}`,
                  }}
                >
                  <Tag
                    color={
                      {
                        History: "#7a5a8a",
                        Integration: "#3a6ea5",
                        Surgical: "#a53a3a",
                        Temporary: "#8a6a3a",
                        Rewrite: "#c0582a",
                        "Safe Undo": "#5a8a3c",
                        Debug: "#2a7a7a",
                        Parallel: "#3a6ea5",
                      }[tag]
                    }
                  >
                    {tag}
                  </Tag>
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark, marginTop: 4 }}>{title}</div>
                  <div style={{ fontSize: 10.5, color: palette.accent, fontWeight: 600, marginTop: 2 }}>{when}</div>
                  <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 3 }}>{best}</div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      )}

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          padding: "14px 0 18px",
          fontSize: 12,
          color: palette.mid,
          fontFamily: "'Georgia', serif",
        }}
      >
        Git Cheatsheet — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          Mental models, commands & workflows for everyday development
        </span>
      </div>
    </div>
  );
}
