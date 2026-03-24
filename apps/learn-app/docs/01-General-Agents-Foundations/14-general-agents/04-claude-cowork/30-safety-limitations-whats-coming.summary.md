### Core Concept

Safe, effective Cowork use rests on one security principle (folder access is your primary boundary) and one planning principle: know which features have shipped and which are still coming.

### Key Mental Models

- **Folder Access as Security Boundary**: Granting Claude access to the wrong folder is the highest-risk mistake a new user can make. Dedicated workspaces prevent accidents before they happen.
- **Approval Workflow as Safety Net**: Before clicking approve, read the plan, review file lists, and check for red flags (deleting unmentioned files, unexpected folder access, unknown network requests).
- **Shipped vs. Coming**: Remote sessions, enhanced scheduling, Plugin manager, session sharing, and Computer Use (research preview) have all shipped. Knowledge Bases, team collaboration, and Linux desktop support are still coming.

### Critical Patterns

- Grant Claude access to a dedicated `~/cowork-workspace` folder, never the entire home directory
- Back up target folders before any bulk deletion or reorganization operation
- Create a `project-context.md` file in each workspace to provide detailed session continuity that general memory doesn't capture
- Computer Use (macOS research preview, Pro/Max only) lets Claude control your screen, with per-app permission tiers

### Common Mistakes

- Assuming Claude remembers nothing between sessions; general memory has been active since late 2025 and captures preferences and conventions automatically
- Treating prompt injection as a theoretical concern; any file from an untrusted source can contain instructions that manipulate Claude's behavior
- Listing shipped features (remote sessions, scheduling, session sharing) as "still coming"; the roadmap has advanced significantly

### Connections

- **Builds on**: Lessons 25-29 (full Cowork section: agentic tasks, Skills, browser integration, Plugins)
- **Leads to**: Lesson 31 (Cowork built-in skills)
