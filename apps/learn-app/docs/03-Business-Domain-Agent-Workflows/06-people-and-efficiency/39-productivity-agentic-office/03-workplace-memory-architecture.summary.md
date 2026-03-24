### Core Concept

work.local.md encodes organisational context in four layers, Personal, Team, Projects, Organisational that close all four Context Problem failure modes. The constraint on AI output quality is not intelligence; it is the absence of this structured context. A rich work.local.md produces colleague-quality outputs; an empty one produces generic outputs regardless of how capable the underlying model is.

### Key Mental Models

- **New Hire vs Experienced Colleague**: The experienced colleague is not smarter; they have accumulated context. work.local.md is the mechanism for giving Claude that same accumulated context, permanently.
- **Four Layers, Four Failure Modes**: Layer 1 (Personal) closes Priority Blindness partially. Layer 2 (Team) closes People Anonymity. Layer 3 (Projects) closes Project Amnesia. Layer 4 (Organisational) closes Terminology Blindness. Build them in this order across Lessons 3-5.
- **Unwritten Rules as Highest-Value Section**: Every organisation has norms that every colleague knows but that are never formally documented. These are exactly what AI needs to avoid producing outputs that embarrass the sender. The test: "Would an AI violating this rule in public output cause a problem?" If yes, it belongs in the file.

### Critical Patterns

- Fill Layer 1 with how you _actually_ work, not how you aspire to work. Aspirational entries calibrate Claude to a person who does not exist.
- Build the terminology dictionary with four elements per entry: definition, when to use, when NOT to use, related terms. The "Not:" field prevents internal codenames from appearing in external communications.
- Target 20-50 terminology entries; start with terms that would confuse an outsider or that an AI would substitute with a generic equivalent.
- Verify Layer 1 and Layer 4 with `/agentic-office:workplace-context` using the query: "Describe our organisation using only what you know from work.local.md." Count how many internal terms appear unprompted. This is your quality signal.

### Common Mistakes

- Writing Layer 1 aspirationally ("I prefer data-driven decisions") rather than accurately ("I often decide quickly under pressure and backfill the data analysis"): the AI calibrates to what you wrote, not what you mean
- Treating the terminology dictionary as a glossary for unusual jargon only: every term an AI would replace with a generic substitute belongs there
- Leaving the unwritten rules section empty because the rules feel too obvious to write down; they are obvious to insiders; they are invisible to AI

### Connections

- **Builds on**: Plugin installation (Lesson 2), work.local.md was created by `/agentic-office:setup`; this lesson populates it
- **Leads to**: Team memory Layer 2 (Lesson 4) and Project memory Layer 3 (Lesson 5), do not start a new work.local.md file
