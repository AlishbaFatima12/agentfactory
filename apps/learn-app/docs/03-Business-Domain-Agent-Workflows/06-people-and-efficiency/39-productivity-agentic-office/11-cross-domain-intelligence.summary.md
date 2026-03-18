### Core Concept

Domain agents built in earlier chapters are isolated silos — the finance agent does not know what HR knows, and HR does not know what operations knows. Context injection and cross-context search are the two mechanisms that wire them together, making the productivity layer the integration layer of the agentic organisation.

### Key Mental Models

- **Inject Before, Search After**: Context injection (`/agentic-office:context-loader`) loads relevant domain context before a task begins — so the output is informed by the full picture rather than discovered mid-task. Cross-context search (`/agentic-office:workplace-search`) retrieves everything known about a topic across all memory layers — for questions you want to explore, not tasks you are about to execute. Both are needed; neither replaces the other.
- **Gaps Are Signal, Not Failure**: The "gaps in context" section of every context brief identifies what is NOT known that would be useful. A context brief without gaps is either unusually complete or not looking carefully enough. Each gap is a `work.local.md` addition task — the brief becomes the improvement roadmap.
- **From Manual to Protocol**: Individual context loads are useful; integration protocols automate them. A protocol says "when event X happens in domain Y, automatically check domains A, B, and C." The first manual load reveals what the protocol should contain; configuring it means every future similar task starts with full context automatically.

### Critical Patterns

- Choose the right context type before invoking: single-domain, cross-domain, person, project, or decision — each produces a differently shaped brief
- For any task touching multiple domains, load context first; the cost of missing cross-domain information mid-task is higher than the cost of loading it upfront
- Run cross-context search for topics that span time (past decisions, prior discussions) rather than tasks (which need context injection)
- Configure integration protocols in `work.local.md` for recurring cross-domain events (new hires, vendor renewals, project escalations) to automate what was first done manually

### Common Mistakes

- Loading context from every domain regardless of relevance — irrelevant context creates noise; only load domains that genuinely affect the task
- Ignoring the gaps section — knowing what is missing before a conversation is as valuable as knowing what is available; acting without closing known gaps is the most common cross-domain failure mode
- Expecting search to return results not in `work.local.md` — "Not in workplace memory" is a valid, useful answer; it means the information needs to be added, not that the tool failed

### Connections

- **Builds on**: Four-layer memory architecture (Lesson 3), decision log from meeting intelligence (Lesson 9), domain agents from Chapters 28-36
- **Leads to**: Digital Chief of Staff agent (Lesson 12), which automates cross-domain coordination using the patterns established here
