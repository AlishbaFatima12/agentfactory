# Part 6 v1: Lessons Learned

These five rules come from the v1 production run (30 chapters generated, all technical ones unusable due to hallucinated APIs). Every chapter agent MUST follow these rules.

---

## Rule 1: Technical chapters MUST start with docs

Before writing any code, the agent must:

1. Read the OLD chapter for that topic (technical reference, verified APIs)
2. Use Context7 (`/fetch-library-docs` or `mcp__context7__query-docs`) to get current official documentation
3. Only THEN write code examples using real, verified imports and patterns

**Why this matters:** In v1, every technical chapter invented code instead of using real library APIs. The ChatKit class was fabricated. MCP patterns were guessed. FastAPI chapter compressed 15 real lessons into 8 generic ones.

---

## Rule 2: Lesson count follows topic depth, not template

- The PRIMM-AI+ framework applies to EACH major topic within a chapter
- A chapter covering 5 major topics needs 5 Predict-Investigate cycles, not 1
- Old chapter lesson count is the MINIMUM for technical chapters
- If the old chapter had 15 lessons, the new chapter needs at least 15

**Why this matters:** v1 forced every chapter into exactly 8 lessons regardless of topic depth.

---

## Rule 3: File names describe topics, not template sections

- Wrong: `02-predict-run.md`
- Right: `02-predict-mcp-tools-list-request.md`
- Each file name tells the reader what they will learn

**Why this matters:** v1 produced identical file names across all 30 chapters (01-why-this-chapter.md, 02-predict-run.md, etc.), making navigation impossible.

---

## Rule 4: Old chapters are TECHNICAL REFERENCE, not "old work"

- The old chapters contain verified, doc-grounded code
- They are the knowledge base for what APIs exist
- The new pedagogical framework (PRIMM-AI+, James/Emma) wraps this knowledge
- Never tell agents to ignore old content
- Never frame old chapters as "being replaced"; they are being pedagogically upgraded

**Why this matters:** v1 agents were told old content was "OLD WORK being replaced" and never read it. Every technical chapter then hallucinated 100% of API calls.

---

## Rule 5: Conceptual chapters don't need docs

- C1-C8, C12 (Ch 61-68, Ch 72) are Socratic/conceptual chapters
- These chapters teach ideas, not code
- They work well from the v4 outline alone (no old chapter or doc fetch needed)
- The v1 versions of conceptual chapters were salvageable

**Why this matters:** Not every chapter needs the full Phase 1 research protocol. Applying it to conceptual chapters wastes time without improving quality.
