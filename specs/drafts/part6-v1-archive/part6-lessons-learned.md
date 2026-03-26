# Part 6 v1: Lessons Learned

## What Worked

- Chapter-per-teammate approach: each agent produced complete chapters autonomously
- Wave-based parallelism: 17 chapters simultaneously, then 4, then 6, then 3
- James/Emma dialogue patterns: 7 patterns from character-driven-narrative skill applied
- Scaffolding withdrawal: C18-C21 gradient verified (FULL→REDUCED→MINIMAL→INDEPENDENT)
- Cross-chapter threads: economic actors (C62→C84→C87→C90), SmartNotes (C61→C83→C90)
- Architecture spec + domain wisdom brief: effective coordination documents

## What Failed

- **Technical depth: agents hallucinated APIs.** Every technical chapter invented code instead of using real library APIs. ChatKit class was fabricated. MCP patterns were guessed. FastAPI chapter compressed 15 real lessons into 8 generic ones.
- **Root cause: prompt didn't include old chapters or real docs.** Agents were told old content was "OLD WORK being replaced" and never read it. No agent used /fetch-library-docs to ground against real APIs.
- **Generic lesson file names.** Every chapter had identical files (01-why-this-chapter.md, 02-predict-run.md...) instead of topic-descriptive names.
- **8 lessons per chapter regardless of depth.** Old FastAPI had 15 lessons covering JWT, CORS, middleware, DI. New had 8 generic PRIMM-AI+ sections.

## Rules for v2 Team Prompt

### Rule 1: Technical chapters MUST start with docs

Before writing any code, the agent must:

1. Read the OLD chapter for that topic (technical reference, verified APIs)
2. Use /fetch-library-docs to get current official documentation
3. Only THEN write code examples using real, verified imports and patterns

### Rule 2: Lesson count follows topic depth, not template

- The PRIMM-AI+ framework applies to EACH major topic within a chapter
- A chapter covering 5 major topics needs 5 Predict-Investigate cycles, not 1
- Old chapter lesson count is the MINIMUM for technical chapters

### Rule 3: File names describe topics, not template sections

- Wrong: 02-predict-run.md
- Right: 02-predict-mcp-tools-list-request.md
- Each file name tells the reader what they'll learn

### Rule 4: Old chapters are TECHNICAL REFERENCE, not "old work"

- The old chapters contain verified, doc-grounded code
- They are the knowledge base for what APIs exist
- The new pedagogical framework (PRIMM-AI+, James/Emma) wraps this knowledge
- Never tell agents to ignore old content

### Rule 5: Conceptual chapters don't need docs

- C1-C8, C12 (Socratic/conceptual) worked well without API docs
- These chapters teach ideas, not code
- The v1 versions of these are salvageable
