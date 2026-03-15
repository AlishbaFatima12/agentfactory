### Core Concept
All persistent knowledge — specifications, decisions, context, documentation — lives in markdown files. Markdown is the universal knowledge format because it satisfies four properties simultaneously: human-readable, version-controllable, AI-parseable, and tool-agnostic.

### Key Mental Models
- **The Four Properties**: Human-readable (read raw without tools), version-controllable (plain text diffs in git), AI-parseable (LLMs process natively), tool-agnostic (works anywhere, no vendor lock-in). No other format scores "Yes" on all four.
- **Knowledge System Architecture**: Different knowledge types (specs, ADRs, context, docs) serve distinct purposes but use identical infrastructure — same format, same repository, same version history.
- **YAML Frontmatter as Metadata Layer**: Frontmatter contains machine-processable metadata (dates, tags, proficiency levels); markdown body contains human-readable narrative. Two layers, complementary purposes.

### Key Facts
- Created in 2004 by John Gruber with contributions from Aaron Swartz (then 17, building on his 2002 atx format)
- Design goal: format reads as well before rendering as after — formalized existing plain-text email conventions rather than inventing new syntax
- Pattern appears across professional tooling: Jekyll, Docusaurus, Hugo, Obsidian, Astro all use YAML frontmatter on markdown
- HTML and plain text are close alternatives but HTML fails human-readability (tag noise) and plain text fails AI-parseability (no structure)

### Critical Patterns
- Specifications define what to build with goal, success criteria (checkboxes), and constraints — one file serves humans, AI agents, and team simultaneously
- Architecture Decision Records (ADRs) capture Status, Context, Decision, Consequences, Alternatives Considered — structured reasoning findable months later
- Context files (CLAUDE.md, README.md) answer "how to work here" — project overview, run commands, rules — in the repository alongside code
- Co-locate documentation with code as markdown rather than separating it in wikis or proprietary platforms

### Common Mistakes
- **Decisions in Slack**: knowledge archived after 90 days, unsearchable by AI agents, no version control — write ADRs in `docs/adr/` instead
- **Specs in Google Docs**: AI cannot read without authentication, merge conflicts impossible to resolve — commit specs as markdown in repo
- **Docs in Confluence**: vendor lock-in, pages go stale, separate from code they describe — migrate to markdown alongside implementation
- **Notes without headers**: AI cannot parse sections, search returns whole file instead of relevant part — use `#` headers to create parseable structure

### Connections
- **Builds on**: Chapter 6 Principle 5 (Persist State in Files) — principle established files as durable memory; axiom defines the format for those files
- **Leads to**: Axiom III (Programs vs Scripts) — with knowledge in markdown and shell orchestrating, what kind of programs should the shell call?
- **Foundation for**: Interoperability across the entire tool chain — humans, AI agents, linters, CI pipelines, documentation generators, search engines all read the same format
