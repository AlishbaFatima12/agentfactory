# README: Generating Chapters for Part 5 — Building the Agent Factory

This folder contains two documents that work together to produce high-quality chapters for Part 5 of *The AI Agent Factory* (agentfactory.panaversity.org).

| File | Purpose | Word Count |
|------|---------|------------|
| `part5_v4_outline.md` | **What to write** — the chapter-by-chapter outline with goals, section breakdowns, Predict scenarios, Parsons details, Modify exercises, Make criteria, and scaffolding levels | ~4,500 |
| `part5_chapter_author_system_prompt.md` | **How to write it** — the voice, structure templates, code quality rules, character profiles, continuity rules, and quality checklist | ~3,750 |

The outline tells you *what goes in each chapter*. The system prompt tells you *how to write it* — tone, formatting, pedagogy, and verification.

---

## Prerequisites

Before generating chapters, ensure you have access to:

1. **Claude Code** (or any Claude-based authoring agent that supports system prompts / agent skills)
2. **The PHPM Author System Prompt Spec** (`PHPM_Author_System_Prompt_Spec.docx`) — the master pedagogy document. The system prompt is derived from it, but you may want the original for edge-case decisions.
3. **The existing book** at agentfactory.panaversity.org — for checking continuity with Parts 1–4.
4. **The PRIMM-AI+ Framework documentation** and **Ten Axioms documentation** — for verifying pedagogical and axiom references.

---

## Setup: Loading the System Prompt into Claude Code

### Option A: As a SKILL.md file (recommended)

Create a skill folder that Claude Code can reference:

```
.claude/skills/part5-chapter-writer/
├── SKILL.md
```

The `SKILL.md` content should be the full contents of `part5_chapter_author_system_prompt.md` with a SKILL.md header prepended:

```markdown
---
name: part5-chapter-writer
description: "Writes chapters for Part 5 of The AI Agent Factory following the PHPM pedagogical framework with PRIMM-AI+ structure, HireFlow running project, and James/Emma character system."
---

[paste full contents of part5_chapter_author_system_prompt.md here]
```

Then in Claude Code, the skill is available automatically when working in the project directory.

### Option B: As a direct system prompt

If using Claude Code interactively, paste the system prompt contents at the start of your session or reference it:

```bash
# In Claude Code, reference the file directly
claude "Read /path/to/part5_chapter_author_system_prompt.md as your authoring guidelines. Then read /path/to/part5_v4_outline.md for the chapter outline. Generate Chapter C9: MCP Fundamentals."
```

### Option C: As a Claude Project with knowledge base

If using Claude.ai Projects:

1. Create a new Project called "Part 5 Chapter Writer"
2. Upload `part5_chapter_author_system_prompt.md` as project knowledge
3. Upload `part5_v4_outline.md` as project knowledge
4. Optionally upload `PHPM_Author_System_Prompt_Spec.docx` for reference
5. Set the project instructions to: "You are a chapter author for Part 5 of The AI Agent Factory. Follow the system prompt and outline documents in your knowledge base."

---

## Generating a Chapter: Step-by-Step

### Step 1: Identify the chapter

Pick a chapter from the outline. Note:
- **Chapter number** (C1–C30)
- **Chapter type** (Socratic, PRIMM-AI+ 7-section, or Hybrid)
- **Scaffolding level** (Full, Reduced, Minimal, Independent — only applies to C18–C21)
- **Section** (Architecture, Explore, Incubate, or Build)

### Step 2: Extract the chapter outline

Copy the relevant chapter's outline from `part5_v4_outline.md`. For expanded chapters (C1, C2, C4, C23, C24, C27), the outline is detailed. For compressed chapters (C13–C17, C22, C25–C26, C28–C29), the outline is telegraphic — the system prompt fills in the structural detail.

### Step 3: Prompt Claude Code

Use this prompt template:

```
You are writing a chapter for Part 5 of The AI Agent Factory.

SYSTEM PROMPT: [reference or paste part5_chapter_author_system_prompt.md]

CHAPTER OUTLINE:
[paste the specific chapter's outline from part5_v4_outline.md]

PRIOR CHAPTER CONTEXT:
- The previous chapter was C[N-1]: [title]. It covered [brief summary].
- Key artifacts the reader now has: [list what was built in prior chapters]

INSTRUCTIONS:
1. Generate the complete chapter in Markdown format for Docusaurus.
2. Follow the [Socratic / PRIMM-AI+ 7-section / Hybrid] template exactly.
3. [If PRIMM-AI+] Include all 7 sections: Why → Predict → Investigate → Parsons → Modify → Make → Rubric.
4. Write all code blocks as runnable Python with full type annotations.
5. Use James and Emma characters as specified in the system prompt.
6. After generating, run the Chapter Quality Checklist from the system prompt and report any items that need attention.

Generate the chapter now.
```

### Step 4: Review the output

After Claude generates the chapter, verify it against the **Chapter Quality Checklist** at the end of the system prompt. Pay special attention to:

- [ ] Code blocks are runnable with type annotations
- [ ] STOP_AND_PREDICT box has specific questions and confidence scoring
- [ ] [AI-FREE] markers are present on Predict and Make spec-writing
- [ ] At least 1 planted bug with error taxonomy classification
- [ ] At least 2 backward references to prior chapters
- [ ] No forbidden phrases ("simply," "obviously," etc.)
- [ ] James makes architectural mistakes, not syntactic ones
- [ ] Rubric table has 5 dimensions × 3 levels

### Step 5: Iterate

If the chapter needs improvement, provide specific feedback:

```
The chapter is good but needs these fixes:
1. The Predict task explains the code before the reader predicts — remove the explanation paragraph before the STOP_AND_PREDICT box.
2. James's bug in the Investigate section is syntactic (forgot a colon). Make it architectural — he should forget to store the output in the database.
3. The Parsons problem only has 5 lines. The outline specifies 8 lines with 1 distractor.
4. Modification B is missing the mini-Predict box.
5. The Make Capstone doesn't end with a git commit instruction.

Revise the chapter addressing all five issues.
```

---

## Recommended Chapter Generation Order

You don't have to write chapters in sequence, but dependencies matter. Here's the recommended order:

### Phase 1: Write the anchor chapters first

These chapters establish patterns that later chapters reference:

1. **C1** (Agent Factory + Two-Layered Model) — establishes core vocabulary
2. **C2** (Economic Actors) — establishes the forward-looking thread
3. **C4** (HireFlow Blueprint) — defines the FTE specs that every later chapter uses
4. **C18** (Job Spec Writer FTE) — establishes the Build Checklist that C19–C21 reference
5. **C24** (Orchestration) — establishes orchestration patterns and budget tracking

### Phase 2: Write remaining conceptual chapters

6. **C3** (Maturity Model)
7. **C5** (Concept Paper)
8. **C6** (Domain Mastery Gate)
9. **C7** (Paper to Agent Skills)
10. **C8** (Simulation-Driven Validation)
11. **C12** (Intro to Agent SDKs)

### Phase 3: Write programming chapters in sequence

These build on each other and should be written in order:

12. **C9** → **C10** → **C11** (MCP fundamentals through code execution)
13. **C13** → **C14** → **C15** (SDKs through NanoClaw)
14. **C16** → **C17** (Databases — must precede FTE builds)
15. **C19** → **C20** → **C21** (Remaining FTEs — scaffolding withdrawal sequence)
16. **C22** → **C23** (FastAPI → ChatKit with SmartNotes)
17. **C25** → **C26** → **C27** (Memory → Knowledge Graphs → Security)
18. **C28** → **C29** (TDD → Evals)

### Phase 4: Write the capstone last

19. **C30** (Capstone) — references every prior chapter. Write last.

---

## Tips for Best Results

### For expanded chapters (C1–C12, C18, C23, C24, C27)

These have detailed outlines with specific James/Emma dialogue notes, Predict scenarios, and investigation tasks. Feed the full outline to Claude and it should produce a near-complete chapter on the first pass.

### For compressed chapters (C13–C17, C19–C22, C25–C26, C28–C29)

These have telegraphic outlines (one-line descriptions per section). The system prompt fills in the structural detail, but you may need to provide additional context:

```
ADDITIONAL CONTEXT FOR COMPRESSED CHAPTER:
- James's specific mistake in this chapter should be: [describe the architectural error]
- Emma's correction should focus on: [describe the systems-thinking lesson]
- The Predict scenario should involve: [describe the specific HireFlow situation]
- Relevant axiom to demonstrate: [Axiom N]
```

### For the scaffolding withdrawal sequence (C18–C21)

Remind Claude of the scaffolding level explicitly:

```
SCAFFOLDING LEVEL: [Reduced / Minimal / Independent]

This means:
- [Reduced] Reference C18's Build Checklist. Provide lighter guidance. Reader should look back at C18 when stuck.
- [Minimal] No Build Checklist reminder. Hints available as collapsible sections. Modification C omitted — reader designs their own.
- [Independent] No scaffolding references. Reader designs own investigation tasks. Make Capstone has no guidance beyond success criteria.
```

### Handling inter-chapter references

When generating a chapter, provide Claude with a brief summary of what the reader has built so far. This prevents references to artifacts that don't exist yet or that were named differently:

```
READER'S CURRENT STATE:
- Has built: HireFlow CV parser MCP server (C10), Job Template MCP server (C10), unified HireFlow MCP server (C10 Make)
- Has configured: NanoClaw with Job Spec Writer skill (C15)
- Has databases: SQLModel models for Job, Candidate, Score, PipelineStage (C16), Vector DB with 20 embedded CVs (C17)
- Class/function names established: `parse_cv()`, `score_candidate()`, `NoteStore` (from Part 4)
```

---

## File Structure for Generated Chapters

Each generated chapter should be saved as a Markdown file ready for the Docusaurus site:

```
docs/Building-the-Agent-Factory/
├── index.md                          # Part 5 introduction (from outline's Introduction section)
├── the-agent-factory/
│   ├── index.md                      # C1
│   ├── agents-as-economic-actors.md  # C2
│   ├── the-agent-maturity-model.md   # C3
│   └── the-hireflow-blueprint.md     # C4
├── explore/
│   ├── the-concept-paper.md          # C5
│   └── the-domain-mastery-gate.md    # C6
├── incubate/
│   ├── from-paper-to-agent-skills.md # C7
│   ├── simulation-driven-validation.md # C8
│   ├── mcp-fundamentals.md           # C9
│   ├── building-custom-mcp-servers.md # C10
│   └── agent-skills-mcp-code-execution.md # C11
├── build/
│   ├── introduction-to-agent-sdks.md # C12
│   ├── claude-agents-sdk.md          # C13
│   ├── openai-apps-sdk.md            # C14
│   ├── the-nanoclaw-architecture.md  # C15
│   ├── relational-databases-sqlmodel.md # C16
│   ├── vector-databases-rag.md       # C17
│   ├── building-the-job-spec-writer.md # C18
│   ├── building-the-resume-screener.md # C19
│   ├── building-the-interview-question-generator.md # C20
│   ├── building-the-candidate-summarizer.md # C21
│   ├── fastapi-for-agents.md         # C22
│   ├── chatkit-server-for-agents.md  # C23
│   ├── agent-coordination-orchestration.md # C24
│   ├── augmented-memory-for-agents.md # C25
│   ├── knowledge-graphs-graphrag.md  # C26
│   ├── security-for-agent-factories.md # C27
│   ├── tdd-for-agents.md             # C28
│   ├── evals-measuring-agent-performance.md # C29
│   └── hireflow-factory-capstone.md  # C30
```

---

## Troubleshooting

**Problem: Claude generates a chapter that explains code before the Predict task.**
This is the most common PRIMM-AI+ violation. Remind Claude: "NEVER explain code before a STOP_AND_PREDICT box. The reader must reason about bare code first. Move the explanation to after the Run step."

**Problem: James makes syntactic mistakes instead of architectural ones.**
Remind Claude: "James is a Part 5 learner. He writes type annotations and uses the discipline stack. His mistakes are architectural: missing database persistence, no retry logic, no cost tracking, trusting agent output without verification. Not: forgetting a colon or misspelling a variable."

**Problem: The chapter is too long (>30 pages).**
Part 5 chapters should target 15–25 pages. If a chapter runs longer, check: (a) Is the Investigate section too verbose? Trim to essential investigations. (b) Are code blocks too large? Split into smaller, focused examples. (c) Is there unnecessary prose between sections? The voice should be direct, not expansive.

**Problem: The chapter is too short (<10 pages).**
Check: (a) Is the Parsons Bridge missing? (b) Are there fewer than 2 modifications? (c) Is the Make Capstone underspecified? (d) Is the Investigate section missing the trace table, edge cases, or planted bug?

**Problem: The chapter doesn't reference prior chapters.**
Every chapter needs at least 2 backward references and 1–2 recall questions in the opening. If Claude omits these, provide the specific chapters to reference: "This chapter should reference C10 (MCP server building) and C16 (relational database) in its opening."

**Problem: Economic actors thread is missing from C24 or C27.**
Remind Claude: "C24 must include resource budget tracking (token counting, per-FTE cost, budget ceiling). C27 must include budget abuse as the fifth attack surface alongside prompt injection, data leakage, unauthorized access, and model extraction."
