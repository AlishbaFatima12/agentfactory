### Core Concept

Claude Cowork is an autonomous agent in the Claude Desktop app. It runs tasks locally on your machine, works independently in the background while you do other things, and notifies you when it finishes or needs input. This is a fundamental shift from interactive file manipulation to autonomous task execution.

### Key Mental Models

- **Autonomous Agent, Not Interactive Tool**: Cowork works independently in the background, not just when you're watching. You assign tasks; it executes and reports back.
- **Same Foundation, Different Interface**: Code and Cowork share the Claude Agent SDK, so Skills transfer across both. Choosing a tool is about work type, not a capability gap.
- **Gap-Filler for Knowledge Workers**: Office macros require programming; no-code tools are limited to predefined flows. Cowork sits between both: plain-language instructions, real file operations, autonomous execution.
- **Digital FTE for Non-Developers**: Dispatch (mobile task assignment) + Computer Use (screen control) + Scheduled Tasks (recurring automation) + Plugins (external services) = a concrete autonomous agent for knowledge work.

### Critical Patterns

- Grant folder access once; Claude maintains persistent awareness of the entire approved workspace across the session.
- Use the Code vs. Cowork comparison table as a decision rubric: Code for software and git; Cowork for documents, reports, and autonomous background tasks.
- Skills built in one tab (Code, Cowork, Chat) work across all three: build once, use everywhere.
- Both Code and Cowork require a paid subscription (Pro, Max, Teams, or Enterprise).

### Common Mistakes

- Treating Cowork as a simplified version of Claude Code: it is a different interface optimized for document-centric and autonomous work, not a stripped-down developer tool.
- Confusing the web chat interface with Cowork: web chat requires manual copy-paste; Cowork's filesystem access and autonomous execution are the fundamental differences.
- Missing the Apple Silicon requirement on macOS: the Cowork tab requires M1 or later. Intel Macs cannot access Cowork.

### Connections

- **Builds on**: Agentic AI concepts and the Claude Agent SDK from earlier lessons in Chapter 14
- **Leads to**: Getting started with Cowork, practical workflows, and browser integration (Lessons 26-28)
