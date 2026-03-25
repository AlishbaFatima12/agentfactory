### Core Concept

CLAUDE.md is a markdown file in your project root that Claude Code automatically loads at session start, giving your AI companion persistent project context without you repeating explanations every time. For universal compatibility across ALL AI coding agents, pair it with AGENTS.md.

### Key Mental Models

- **LLMs Are Stateless**: Large Language Models have no memory between calls. Every new session starts blank; the AI doesn't remember your previous conversations.
- **The "Memory" Illusion**: When conversation seems continuous, it's because Claude Code secretly re-sends your entire chat history with each message. The LLM reads everything fresh each time.
- **File System as Memory**: Instead of stuffing history into conversations, Claude Code reads your actual project files. Your code IS the persistent state. CLAUDE.md is the orientation guide Claude reads first.
- **Context Friction -> Productivity Loss**: Every session without persistent context forces re-explanation; CLAUDE.md eliminates this friction
- **Specify Once, Benefit Always**: One-time setup (10-15 minutes) provides automatic context loading forever
- **Iterative Refinement**: Your first CLAUDE.md draft improves through AI review (suggests missing sections) and your domain knowledge (adds team-specific constraints)
- **Universal + Specialized**: AGENTS.md provides universal project context (works with any AI agent), CLAUDE.md adds Claude-specific features (skills, hooks, MCP configs)

### Critical Patterns

- Place CLAUDE.md in project root (same level as `.git`, `package.json`, `pyproject.toml`)
- Target **under 200 lines** per CLAUDE.md file. Use `@path/to/file` imports if it grows beyond that
- Include 6 standard sections: Project Overview, Technology Stack, Directory Structure, Coding Conventions, Key Commands, Important Notes
- Use `/init` to generate initial CLAUDE.md (fastest method), or ask Claude conversationally
- Verify auto-loading by starting new session and asking about your tech stack
- Use `/memory` to check which CLAUDE.md files are loaded if context seems missing
- Refine iteratively: Claude suggests missing sections -> you add team-specific patterns -> converge on complete context
- **Use both files**: AGENTS.md for universal context (all AI agents), CLAUDE.md references `@AGENTS.md` and adds Claude-specific instructions

### The AGENTS.md Standard

- Universal standard created by OpenAI, now under Linux Foundation's Agentic AI Foundation (AAIF)
- Adopted by 60,000+ projects, works with Cursor, GitHub Copilot, Gemini CLI, Devin, and all major AI coding tools
- Simple rule: Universal project context -> AGENTS.md, Claude-specific features -> CLAUDE.md
- In CLAUDE.md, reference with: `See @AGENTS.md for universal project guidelines`

### Common Mistakes

- File not in project root (must be same directory as `.git`, not in subdirectory)
- Wrong filename (must be exactly `CLAUDE.md`, case-sensitive)
- Testing in same session (auto-loading only happens when starting new Claude Code session)
- Writing excessively long CLAUDE.md files (target under 200 lines; use `@imports` to split)
- Including task-specific details (CLAUDE.md is for project-wide context, not individual task instructions)
- Duplicating content between AGENTS.md and CLAUDE.md (use references instead)

### Connections

- **Builds on**: Claude Code installation and authentication (Lesson 2)
- **Leads to**: Skills (Lessons 08-09) and Subagents (Lesson 11) inherit and extend CLAUDE.md context
- **Related standard**: AGENTS.md (universal), MCP (tool connections): all now under AAIF governance
