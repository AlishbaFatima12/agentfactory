# Lesson 9 Summary: Building Your Own Skills

## Key Concepts

### SKILL.md Anatomy

- Every skill lives in a folder inside `.claude/skills/`
- The only required file is `SKILL.md`
- Two parts: YAML frontmatter (ID card) and markdown body (instructions)

### The Description Field

- The most important line in a SKILL.md: determines when Claude activates the skill
- Description formula: [action verb] + [input type] + [output type] + [trigger conditions]
- Too vague = never activates; too narrow = misses valid use cases

### Side-Effect Safety

- Skills with real-world consequences (deploy, commit, send-message) should set `disable-model-invocation: true` in YAML frontmatter
- Without this flag, Claude may auto-trigger dangerous skills when conversation matches the description
- The `user-invocable: false` field hides a skill from the `/` menu (for background-knowledge skills)

### Commands and Skills Merge

- `.claude/commands/` files have been merged into the skills system
- A file at `.claude/commands/deploy.md` and a skill at `.claude/skills/deploy/SKILL.md` both create `/deploy`

### Skill Budget

- Skill descriptions share a character budget (roughly 2% of context window)
- When budget fills, some skills are silently excluded
- Run `/context` to check for excluded skills

### Co-Learning Refinement

- AI as Teacher: Claude suggests improvements you didn't think of
- You as Teacher: you specify constraints Claude doesn't know
- Convergence: iterate together until skill matches your workflow
- Skills improve through iteration, not perfection on first attempt

### Skill-Creator Meta-Skill

- A skill that creates other skills
- Guides you through procedure understanding, description writing, and SKILL.md generation
- Recommended path for most people creating skills

## Connection to Other Lessons

- **Lesson 08**: WHY skills exist (conceptual foundation)
- **Lesson 07**: WHERE skills fit (platform architecture)
- **Lesson 09 (this)**: HOW to build skills (hands-on creation)
- **Lesson 05**: CLAUDE.md for project context
- **Lesson 12**: MCP for external connectivity
