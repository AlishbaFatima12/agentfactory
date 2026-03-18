### Core Concept

The executive dashboard is a single-page RAG-status view of all active work streams, designed to answer "what is the overall status and what needs my attention?" in five minutes — distinct from the official plugin's dashboard.html, which is an interactive task management board for individual task CRUD.

### Key Mental Models

- **Two Dashboards, Two Purposes**: The official plugin's `dashboard.html` is for managing tasks (drag, complete, edit). The custom plugin's executive dashboard is for communicating portfolio status (RAG per project, domain metrics, open delegations). You would send the executive dashboard to your manager; you would never send `dashboard.html`.
- **RAG as Rule, Not Feeling**: Green requires all milestones on schedule, no blockers, no overdue decisions. Amber requires at least one of: milestone at risk, minor blocker, decision needed this week. Red requires at least one of: milestone missed, hard blocker, decision overdue. The milestone-slip rule is non-negotiable — never show Green for a project where a milestone has slipped without explicit acknowledgement.
- **Blocker Age Determines Escalation**: A soft blocker has a workaround — note and monitor. A hard blocker cannot be bypassed — escalate immediately with a named owner and deadline. A stale blocker (>7 days without movement) has failed to be resolved by the designated owner — escalate to the next level; the stale status itself is the trigger.

### Critical Patterns

- Generate weekly project status first (`/agentic-office:progress-tracker` with `type: weekly-status`), apply RAG rules explicitly per project, then generate the full executive dashboard
- Configure only domains in `metrics_sources` where you have deployed domain agents — an empty section is worse than no section
- Run the 5-minute test: could a colleague tell from this dashboard what your week looks like without asking a follow-up question? Every gap reveals a `work.local.md` addition needed
- The dashboard grows as more domain agents are deployed — start with what you have, expand `metrics_sources` as new agents come online

### Common Mistakes

- Showing all tasks on the dashboard — only show actions due this week or overdue; the full task inventory belongs in TASKS.md
- Treating RAG status as subjective — apply the three rules in order; the milestone-slip rule is especially commonly violated by showing Green during recovery from a slip
- Conflating the two dashboards — using `dashboard.html` for portfolio reporting or the executive dashboard for daily task management

### Connections

- **Builds on**: Project and priority memory (Lesson 5), task intelligence (Lesson 6), meeting synthesis decisions and actions (Lesson 9)
- **Leads to**: Cross-domain intelligence (Lesson 11) where domain agent metrics are loaded for specific tasks, not just displayed
