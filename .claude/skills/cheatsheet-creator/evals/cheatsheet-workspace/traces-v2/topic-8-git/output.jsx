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
  const pages = ["Page 1: Mental Models & Foundations", "Page 2: Advanced Workflows"];

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
          {/* Section 1 */}
          <SectionCard number="1" title="Git's Core Mental Model">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Git is a content-addressable filesystem with a VCS built on top. Every object is identified by its SHA-1 hash.
            </div>
            <Bullet><strong>Snapshots, not diffs</strong> — Git stores full snapshots of your project at each commit, not deltas between versions</Bullet>
            <Bullet><strong>Everything is local</strong> — most operations need no network access; the full history lives on your machine</Bullet>
            <Bullet><strong>Integrity guaranteed</strong> — every file and commit is checksummed; corruption is detected automatically</Bullet>
            <Bullet><strong>Append-only by default</strong> — committed data is almost never lost; even "destructive" commands leave reflog entries for 90 days</Bullet>
            <Bullet><strong>DAG structure</strong> — commits form a directed acyclic graph; each commit points to its parent(s), creating the history</Bullet>
          </SectionCard>

          {/* Section 2 */}
          <SectionCard number="2" title="The Three Trees">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Understanding these three areas is the key to mastering every Git command.
            </div>
            {[
              { label: "Working Directory", desc: "Your actual files on disk. Edit freely here.", tag: "EDIT" },
              { label: "Staging Area (Index)", desc: "A proposed next commit. Curate exactly what goes in.", tag: "STAGE" },
              { label: "Repository (HEAD)", desc: "The committed history. Immutable snapshots.", tag: "COMMIT" },
            ].map(({ label, desc, tag }, i) => (
              <div
                key={label}
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
                <Tag color={["#3a6ea5", "#7a5a8a", "#5a8a3c"][i]}>{tag}</Tag>
                <span style={{ fontWeight: 700, color: palette.dark, fontSize: 12 }}>{label}</span>
                <span style={{ fontSize: 11, color: palette.mid }}>{desc}</span>
              </div>
            ))}
            <Code>{`Working Dir  →  git add  →  Index  →  git commit  →  HEAD`}</Code>
          </SectionCard>

          {/* Section 3 */}
          <SectionCard number="3" title="Thinking About Branches">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Branches are lightweight movable pointers to commits — not copies of code.
            </div>
            <Bullet><strong>A branch is just 41 bytes</strong> — a file containing a SHA-1 hash pointing to a commit</Bullet>
            <Bullet><strong>HEAD is a pointer to a branch</strong> — it tells Git which branch you are "on" right now</Bullet>
            <Bullet><strong>Creating a branch is instant</strong> — no file copying; just a new pointer to the current commit</Bullet>
            <Bullet><strong>Switching branches swaps your working directory</strong> — Git replaces files to match the target commit</Bullet>
            <Code>{`main    → C1 ← C2 ← C4
                       ↑
feature → C1 ← C2 ← C3`}</Code>
          </SectionCard>

          {/* Section 4 - wide */}
          <SectionCard number="4" title="Rebase vs Merge: Decision Guide" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                {
                  title: "Use Merge When...",
                  when: "Preserving history matters",
                  items: ["Merging to main/develop", "Team shared branches", "You want a merge commit as a milestone", "Public/open-source branches"],
                  color: "#5a8a3c",
                },
                {
                  title: "Use Rebase When...",
                  when: "Clean linear history matters",
                  items: ["Updating feature branch from main", "Cleaning up local commits before PR", "You are the only one on the branch", "Squashing WIP commits"],
                  color: "#3a6ea5",
                },
                {
                  title: "Never Rebase When...",
                  when: "Safety first",
                  items: ["Branch is shared with others", "Commits are already pushed and reviewed", "You are unsure of the consequences", "Working on main/release branches"],
                  color: "#a53a3a",
                },
                {
                  title: "The Golden Rule",
                  when: "One rule to remember",
                  items: ["Never rebase commits that exist outside your local repo", "Rebase = rewrite history", "Merge = preserve history", "When in doubt, merge"],
                  color: "#8a6a3a",
                },
              ].map(({ title, when, items, color }) => (
                <div
                  key={title}
                  style={{
                    background: palette.highlight,
                    borderRadius: 8,
                    padding: "10px 12px",
                    border: `1px solid ${palette.cardBorder}`,
                  }}
                >
                  <Tag color={color}>{when}</Tag>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 800,
                      color: palette.dark,
                      marginTop: 6,
                      marginBottom: 6,
                      fontFamily: "'Georgia', serif",
                    }}
                  >
                    {title}
                  </div>
                  {items.map((item) => (
                    <div
                      key={item}
                      style={{ fontSize: 11, color: palette.mid, marginBottom: 3, display: "flex", gap: 4 }}
                    >
                      <span style={{ color: palette.accent }}>○</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Section 5 */}
          <SectionCard number="5" title="Essential Daily Commands">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">BASICS</Tag>
              <Tag color="#5a8a3c">SAFE</Tag>
            </div>
            <RefRow cmd="git status" desc="Show working tree status and staged changes" />
            <RefRow cmd="git diff" desc="Show unstaged changes in working directory" />
            <RefRow cmd="git diff --staged" desc="Show changes staged for next commit" />
            <RefRow cmd="git log --oneline" desc="Compact commit history, one line per commit" />
            <RefRow cmd="git log --graph" desc="Visualize branch topology as ASCII art" />
            <RefRow cmd="git show HEAD" desc="Inspect the most recent commit in detail" />
          </SectionCard>

          {/* Section 6 */}
          <SectionCard number="6" title="Staging & Committing">
            <RefRow cmd="git add -p" desc="Stage hunks interactively — review each change" />
            <RefRow cmd="git add ." desc="Stage everything in current directory" />
            <RefRow cmd="git reset HEAD file" desc="Unstage a file (keep working dir changes)" />
            <RefRow cmd="git commit -m 'msg'" desc="Commit staged changes with message" />
            <RefRow cmd="git commit --amend" desc="Rewrite the last commit (message or content)" />
            <div
              style={{
                marginTop: 8,
                padding: "6px 8px",
                background: palette.highlight,
                borderRadius: 6,
              }}
            >
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>PRO TIP</div>
              <div style={{ fontSize: 11, color: palette.mid }}>
                Use <code>git add -p</code> to build atomic commits. Stage only related changes per commit — your future self will thank you.
              </div>
            </div>
          </SectionCard>

          {/* Section 7 */}
          <SectionCard number="7" title="Branch Lifecycle">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Think of branches as cheap experiments. Create often, delete when merged.
            </div>
            <RefRow cmd="git branch name" desc="Create a new branch (stay on current)" />
            <RefRow cmd="git switch name" desc="Switch to an existing branch" />
            <RefRow cmd="git switch -c name" desc="Create and switch to new branch" />
            <RefRow cmd="git branch -d name" desc="Delete a merged branch safely" />
            <RefRow cmd="git branch -D name" desc="Force delete an unmerged branch" />
          </SectionCard>

          {/* Section 8 */}
          <SectionCard number="8" title="Reading Git History">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The log is your archaeology tool. Learn to read the commit graph.
            </div>
            <Code>{`git log --oneline --graph --all
git log --author="name" --since="2 weeks"
git log -- path/to/file
git log -S "search_string"
git shortlog -sn`}</Code>
            <Bullet><strong>--graph --all</strong> — shows all branches as a visual tree</Bullet>
            <Bullet><strong>-S flag (pickaxe)</strong> — finds commits that added or removed a string</Bullet>
            <Bullet><strong>-- path</strong> — filters history to a specific file</Bullet>
            <Bullet><strong>shortlog -sn</strong> — contributor commit counts, sorted</Bullet>
          </SectionCard>

          {/* Section 9 */}
          <SectionCard number="9" title="The Commit Graph Model">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Every Git operation manipulates a directed acyclic graph (DAG) of commits.
            </div>
            <KV k="Commit" v="A snapshot + metadata (author, date, message, parent hash)" />
            <KV k="Parent pointer" v="Each commit points to its parent(s), forming the graph" />
            <KV k="Merge commit" v="Has two parents — records that two lines of work joined" />
            <KV k="Root commit" v="The initial commit with no parent — the graph origin" />
            <Code>{`A --- B --- C (main)
       \\
        D --- E (feature)
         merge →
A --- B --- C --- F (main)
       \\       /
        D --- E`}</Code>
          </SectionCard>

          {/* Section 10 */}
          <SectionCard number="10" title="Undoing Things Safely">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">SAFE</Tag>
              <Tag color="#8a6a3a">CAUTION</Tag>
              <Tag color="#a53a3a">DESTRUCTIVE</Tag>
            </div>
            <RefRow cmd="git revert HEAD" desc="Create a new commit that undoes the last one (safe)" />
            <RefRow cmd="git reset --soft HEAD~1" desc="Undo last commit, keep changes staged" />
            <RefRow cmd="git reset --mixed HEAD~1" desc="Undo last commit, keep changes unstaged" />
            <RefRow cmd="git reset --hard HEAD~1" desc="Undo last commit AND discard all changes" />
            <RefRow cmd="git checkout -- file" desc="Discard working directory changes to a file" />
            <RefRow cmd="git restore file" desc="Modern way to discard working dir changes" />
          </SectionCard>

          {/* Section 11 */}
          <SectionCard number="11" title="Remote Tracking Model">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Remotes are bookmarks to other repositories. Remote-tracking branches are local caches of their state.
            </div>
            <Bullet><strong>origin/main</strong> — a read-only snapshot of where main was on the remote when you last fetched</Bullet>
            <Bullet><strong>git fetch</strong> — updates remote-tracking branches without changing your working files</Bullet>
            <Bullet><strong>git pull</strong> — fetch + merge (or fetch + rebase with <code>--rebase</code>)</Bullet>
            <Bullet><strong>Upstream tracking</strong> — links your local branch to a remote branch via <code>-u</code> flag</Bullet>
            <Code>{`git remote -v           # list remotes
git fetch origin        # update tracking branches
git push -u origin feat # push & set upstream`}</Code>
          </SectionCard>

          {/* Section 12 */}
          <SectionCard number="12" title="Stashing Strategies">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Stash is a stack of work-in-progress snapshots. Use it to context-switch cleanly.
            </div>
            <RefRow cmd="git stash" desc="Save dirty working directory to the stash stack" />
            <RefRow cmd="git stash pop" desc="Apply top stash and remove it from the stack" />
            <RefRow cmd="git stash list" desc="Show all stashed entries" />
            <RefRow cmd="git stash apply" desc="Apply top stash but keep it in the stack" />
            <RefRow cmd="git stash drop" desc="Delete the top stash entry" />
            <Bullet><strong>Mental model:</strong> stash is a quick-save slot. Use named stashes (<code>git stash push -m "desc"</code>) when juggling multiple contexts</Bullet>
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
          {/* Section 13 */}
          <SectionCard number="13" title="Pull Strategies">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              How you pull determines your history shape. Choose intentionally.
            </div>
            <KV k="git pull (default)" v="Fetch + merge. Creates merge commits when branches diverge." />
            <KV k="git pull --rebase" v="Fetch + rebase. Replays your local commits on top of remote. Cleaner history." />
            <KV k="git pull --ff-only" v="Only fast-forward. Fails if branches diverged — safest option." />
            <KV k="Configure default" v="git config pull.rebase true — sets rebase as your default pull strategy" />
            <div
              style={{
                marginTop: 8,
                padding: "6px 8px",
                background: palette.highlight,
                borderRadius: 6,
              }}
            >
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>RECOMMENDATION</div>
              <div style={{ fontSize: 11, color: palette.mid }}>
                Set <code>pull.rebase true</code> globally. It keeps history linear and avoids trivial merge commits that clutter the log.
              </div>
            </div>
          </SectionCard>

          {/* Section 14 */}
          <SectionCard number="14" title="Interactive Rebase Patterns">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">REWRITE</Tag>
              <Tag color="#8a6a3a">LOCAL ONLY</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Rebase -i lets you rewrite, reorder, squash, and edit commits before sharing.
            </div>
            <Code>{`git rebase -i HEAD~5   # rewrite last 5 commits

# In the editor:
pick   abc1234  Add login form
squash def5678  Fix typo in login
reword 789abcd  Update auth logic
drop   bad1234  Remove debug logs`}</Code>
            <KV k="pick" v="Use commit as-is" />
            <KV k="squash" v="Meld into previous commit, combine messages" />
            <KV k="fixup" v="Meld into previous commit, discard this message" />
            <KV k="reword" v="Use commit but edit the commit message" />
            <KV k="drop" v="Remove the commit entirely" />
          </SectionCard>

          {/* Section 15 */}
          <SectionCard number="15" title="Cherry-Pick & Transplanting">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Cherry-pick copies individual commits to another branch. Think of it as a targeted transplant.
            </div>
            <RefRow cmd="git cherry-pick abc123" desc="Apply one commit to current branch" />
            <RefRow cmd="git cherry-pick A..B" desc="Apply a range of commits (exclusive of A)" />
            <RefRow cmd="git cherry-pick -n abc" desc="Apply changes without committing (stage only)" />
            <RefRow cmd="git cherry-pick --abort" desc="Cancel an in-progress cherry-pick" />
            <Bullet><strong>When to use:</strong> hotfix on main that also needs to go to release, or extracting one commit from a messy branch</Bullet>
            <Bullet><strong>Caveat:</strong> cherry-picked commits get new SHA hashes — they are copies, not moves</Bullet>
          </SectionCard>

          {/* Section 16 */}
          <SectionCard number="16" title="Merge Conflict Resolution">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Conflicts happen when Git cannot auto-merge. The mental model: you are the arbitrator between two versions.
            </div>
            <Code>{`<<<<<<< HEAD (your changes)
const x = "current branch code";
=======
const x = "incoming branch code";
>>>>>>> feature-branch`}</Code>
            <Bullet><strong>Step 1:</strong> open conflicted files and look for the marker lines</Bullet>
            <Bullet><strong>Step 2:</strong> choose one side, both, or write something new</Bullet>
            <Bullet><strong>Step 3:</strong> remove all conflict markers, then <code>git add</code> the resolved file</Bullet>
            <Bullet><strong>Step 4:</strong> run <code>git commit</code> (or <code>git rebase --continue</code> if rebasing)</Bullet>
            <RefRow cmd="git mergetool" desc="Launch configured visual merge tool" />
          </SectionCard>

          {/* Section 17 */}
          <SectionCard number="17" title="Git Bisect: Binary Search Debugging">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Bisect finds which commit introduced a bug using binary search — log(n) steps.
            </div>
            <Code>{`git bisect start
git bisect bad              # current commit is broken
git bisect good v2.0        # this tag was working
# Git checks out middle commit — test it
git bisect good             # or git bisect bad
# Repeat until Git identifies the culprit
git bisect reset            # return to original HEAD`}</Code>
            <Bullet><strong>Automatic bisect:</strong> <code>git bisect run ./test.sh</code> — runs a script at each step, fully automated</Bullet>
            <Bullet><strong>Mental model:</strong> you are cutting the suspect range in half each time, like a binary search algorithm</Bullet>
            <Bullet><strong>Works best with</strong> small, atomic commits — another reason to commit often</Bullet>
            <Bullet><strong>Skip untestable commits:</strong> <code>git bisect skip</code> if a commit does not compile</Bullet>
          </SectionCard>

          {/* Section 18 */}
          <SectionCard number="18" title="Refs, HEAD & Detached HEAD">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Refs are human-readable names for SHA hashes. HEAD is the most important ref.
            </div>
            <KV k="HEAD" v="Points to the current branch (or directly to a commit if detached)" />
            <KV k="HEAD~1" v="One commit before HEAD (first parent)" />
            <KV k="HEAD~3" v="Three commits before HEAD" />
            <KV k="HEAD^2" v="Second parent of HEAD (used with merge commits)" />
            <KV k="Detached HEAD" v="HEAD points to a commit, not a branch — commits here are orphaned unless you create a branch" />
            <Code>{`# Recover from detached HEAD:
git switch -c new-branch  # save work
git switch main           # or just go back`}</Code>
          </SectionCard>

          {/* Section 19 - wide */}
          <SectionCard number="19" title="Team Workflow Patterns" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                {
                  title: "Feature Branch",
                  when: "Small teams, any project",
                  items: ["Branch per feature off main", "PR + code review", "Merge or squash merge", "Delete branch after merge"],
                  color: "#5a8a3c",
                },
                {
                  title: "Git Flow",
                  when: "Versioned releases",
                  items: ["main + develop + feature branches", "Release branches for stabilization", "Hotfix branches off main", "More ceremony, more control"],
                  color: "#3a6ea5",
                },
                {
                  title: "Trunk-Based",
                  when: "CI/CD, fast iteration",
                  items: ["Everyone commits to main", "Very short-lived branches (hours)", "Feature flags instead of branches", "Requires strong CI/CD pipeline"],
                  color: "#7a5a8a",
                },
                {
                  title: "Forking Workflow",
                  when: "Open source projects",
                  items: ["Each contributor has own fork", "PRs from fork to upstream", "Maintainers control upstream", "Contributors never push to upstream"],
                  color: "#8a6a3a",
                },
              ].map(({ title, when, items, color }) => (
                <div
                  key={title}
                  style={{
                    background: palette.highlight,
                    borderRadius: 8,
                    padding: "10px 12px",
                    border: `1px solid ${palette.cardBorder}`,
                  }}
                >
                  <Tag color={color}>{when}</Tag>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 800,
                      color: palette.dark,
                      marginTop: 6,
                      marginBottom: 6,
                      fontFamily: "'Georgia', serif",
                    }}
                  >
                    {title}
                  </div>
                  {items.map((item) => (
                    <div
                      key={item}
                      style={{ fontSize: 11, color: palette.mid, marginBottom: 3, display: "flex", gap: 4 }}
                    >
                      <span style={{ color: palette.accent }}>○</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Section 20 */}
          <SectionCard number="20" title="Git Hooks Essentials">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Hooks are scripts that run automatically at key points in the Git workflow. They live in <code>.git/hooks/</code>.
            </div>
            <KV k="pre-commit" v="Runs before commit — lint, format, run tests" />
            <KV k="commit-msg" v="Validate or reformat commit messages" />
            <KV k="pre-push" v="Runs before push — full test suite, security checks" />
            <KV k="post-merge" v="Runs after merge — install deps, rebuild" />
            <Code>{`# Example pre-commit hook
#!/bin/sh
npm run lint && npm test`}</Code>
            <Bullet><strong>Husky</strong> and <strong>lefthook</strong> are popular tools for managing hooks across teams</Bullet>
          </SectionCard>

          {/* Section 21 */}
          <SectionCard number="21" title="Reflog: Your Safety Net">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">RECOVERY</Tag>
              <Tag color="#2a7a7a">LOCAL ONLY</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The reflog records every time HEAD moves. It is your undo history for Git itself.
            </div>
            <RefRow cmd="git reflog" desc="Show HEAD movement history with timestamps" />
            <RefRow cmd={"git reset --hard HEAD@{2}"} desc="Restore HEAD to 2 moves ago" />
            <RefRow cmd="git branch rescue abc123" desc="Create branch from a lost commit SHA" />
            <RefRow cmd="git reflog expire" desc="Manually expire old reflog entries" />
            <Bullet><strong>Key insight:</strong> reflog is local-only and expires after 90 days by default. It is not shared with remotes</Bullet>
            <Bullet><strong>Recovery pattern:</strong> run <code>git reflog</code>, find the SHA you want, create a branch from it</Bullet>
          </SectionCard>

          {/* Section 22 */}
          <SectionCard number="22" title="Tagging & Releases">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Tags are permanent bookmarks for specific commits — typically used for releases.
            </div>
            <RefRow cmd="git tag v1.0.0" desc="Lightweight tag — just a pointer" />
            <RefRow cmd="git tag -a v1.0.0 -m 'msg'" desc="Annotated tag — includes metadata" />
            <RefRow cmd="git push --tags" desc="Push all tags to remote" />
            <RefRow cmd="git tag -d v1.0.0" desc="Delete a local tag" />
            <KV k="Lightweight" v="A simple pointer to a commit, like a branch that never moves" />
            <KV k="Annotated" v="Full object with tagger name, date, message, and optional GPG signature" />
          </SectionCard>

          {/* Section 23 */}
          <SectionCard number="23" title=".gitignore Patterns">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Tell Git which files to never track. Patterns are matched against the repo root.
            </div>
            <Code>{`# Common patterns
node_modules/
*.log
.env
.DS_Store
dist/
build/
*.pyc
__pycache__/`}</Code>
            <Bullet><strong>Trailing slash</strong> matches directories only: <code>build/</code></Bullet>
            <Bullet><strong>Leading slash</strong> anchors to repo root: <code>/config.local</code></Bullet>
            <Bullet><strong>Negation</strong> re-includes a file: <code>!important.log</code></Bullet>
            <Bullet><strong>Already tracked files</strong> must be removed from index: <code>git rm --cached file</code> before .gitignore takes effect</Bullet>
          </SectionCard>

          {/* Section 24 */}
          <SectionCard number="24" title="Performance & Large Repos">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#2a7a7a">SCALE</Tag>
              <Tag color="#7a5a8a">ADVANCED</Tag>
            </div>
            <KV k="Shallow clone" v="git clone --depth 1 — only latest commit, fast for CI" />
            <KV k="Sparse checkout" v="Only check out a subset of files in a monorepo" />
            <KV k="Git LFS" v="Store large binaries (images, models) outside the main repo" />
            <KV k="git gc" v="Garbage collection — compress and optimize the local repo" />
            <Code>{`# Sparse checkout for monorepo
git sparse-checkout init --cone
git sparse-checkout set apps/my-app libs/shared`}</Code>
            <Bullet><strong>Partial clone:</strong> <code>git clone --filter=blob:none</code> — fetches blobs on demand, saves disk space</Bullet>
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
        Git Cheatsheet — Mental Models, Commands {"&"} Workflows — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          Covers Git 2.x · Includes mental models for branching, rebasing, and team collaboration
        </span>
      </div>
    </div>
  );
}
