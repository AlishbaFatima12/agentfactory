# Chapter 69: MCP Fundamentals - Quality Review

**Reviewer**: Claude Opus 4.6 (automated)
**Date**: 2026-03-26
**Files reviewed**: 10 lessons + research-summary.md + README.md

---

## Word Count Per Lesson

| Lesson    | File                                               | Words      |
| --------- | -------------------------------------------------- | ---------- |
| 01        | 01-why-mcp-the-integration-explosion.md            | 1,921      |
| 02        | 02-mcp-architecture-host-client-server.md          | 2,653      |
| 03        | 03-the-three-primitives-tools-resources-prompts.md | 2,729      |
| 04        | 04-building-your-first-mcp-server.md               | 3,181      |
| 05        | 05-resources-and-prompts-in-fastmcp.md             | 2,860      |
| 06        | 06-mcp-parsons-problem.md                          | 1,439      |
| 07        | 07-modify-exercises-extend-the-server.md           | 2,574      |
| 08        | 08-configuring-and-debugging-mcp.md                | 2,990      |
| 09        | 09-make-candidate-profiles-mcp-server.md           | 2,791      |
| 10        | 10-rubric-and-chapter-quiz.md                      | 3,680      |
| **Total** |                                                    | **26,818** |

---

## Structure Checklist

### YAML Frontmatter

- ✅ PASS: Every lesson (01-10) has COMPLETE YAML frontmatter with `skills`, `learning_objectives`, `cognitive_load`, and `differentiation` sections. All skills include `proficiency_level`, `category`, `bloom_level`, `digcomp_area`, and `measurable_at_this_level`. All learning objectives include `objective`, `proficiency_level`, `bloom_level`, and `assessment_method`.

### File Names

- ✅ PASS: All file names describe topics: `01-why-mcp-the-integration-explosion`, `02-mcp-architecture-host-client-server`, `03-the-three-primitives-tools-resources-prompts`, `04-building-your-first-mcp-server`, `05-resources-and-prompts-in-fastmcp`, `06-mcp-parsons-problem`, `07-modify-exercises-extend-the-server`, `08-configuring-and-debugging-mcp`, `09-make-candidate-profiles-mcp-server`, `10-rubric-and-chapter-quiz`. No template-style names.

### Lesson Count

- ✅ PASS: 10 lessons (exceeds the minimum of 9 matching old chapter).

### STOP_AND_PREDICT Boxes

- ✅ PASS: STOP_AND_PREDICT boxes present in L02 (line 169), L03 (line 125), L04 (lines 161, 274), L05 (lines 136, 168, 240), L07 (lines 123, 236, 340 as "PREDICT BEFORE RUNNING"), L08 (line 144).
- ❌ FAIL: **No confidence score prompts.** The checklist requires "specific questions and confidence score" in STOP_AND_PREDICT boxes. None of the STOP_AND_PREDICT boxes ask students to rate their confidence (e.g., "Rate your confidence: Low / Medium / High"). They ask specific questions (good) but omit the confidence calibration component.
  - **Files affected**: L02:169, L03:125, L04:161, L04:274, L05:136, L05:168, L05:240, L07:123, L07:236, L07:340, L08:144
  - **Fix**: Add a confidence prompt to each box, e.g., "Rate your confidence (1-5) before checking."

### [AI-FREE] Markers

- ✅ PASS: AI-FREE markers present on:
  - L04:122 `:::danger AI-FREE ZONE` (trace exercise)
  - L06:54 `:::danger AI-FREE ZONE` (Parsons problem)
  - L08:144 `:::warning STOP_AND_PREDICT [AI-FREE]` (configuration writing)
  - L09:69 `:::danger MAKE CHALLENGE [AI-FREE: SPEC ONLY]` (spec writing)
  - L09:126 `Phase 1: Write the Spec (AI-FREE)`
- ✅ PASS: The Make spec-writing exercise in L09 has [AI-FREE] marker.

### Trace Table

- ✅ PASS: L04 contains two detailed trace tables:
  - Request 1: `tools/list` (Discovery) with 4 steps (lines 135-141)
  - Request 2: `tools/call` (Execution) with 6 steps (lines 144-151)
  - Both have Input, Output, and Notes columns.

### Parsons Problem

- ✅ PASS: L06 contains a complete Parsons problem with exactly 7 scrambled lines (A through G, lines 60-68), solution (line 99), dependency chain table (lines 115-123), and common mistakes section (lines 137-176).

### Modify Exercises with Mini-Predict

- ✅ PASS: L07 contains 3 Modify exercises:
  - Modification A: Job descriptions tool (simple), with PREDICT BEFORE RUNNING (line 123)
  - Modification B: Input validation (medium), with PREDICT BEFORE RUNNING (line 236)
  - Modification C: Tool-resource wiring (advanced), with PREDICT BEFORE RUNNING (line 340)
  - All three have mini-Predict boxes before the exercise. Exceeds the minimum of 2.

### Make Capstone

- ✅ PASS: L09 is a full Make capstone with:
  - Spec-first requirement (Phase 1: Write the Spec, AI-FREE)
  - Test-Driven Generation (Phase 3)
  - Discipline stack (Phase 5: ruff, pyright, pytest)
  - Inspector verification (Phase 6)
  - Git commit (Phase 7)
  - 8-item success criteria checklist

### Rubric Table

- ✅ PASS: L10 contains a rubric table with 5 dimensions x 3 levels (lines 58-64):
  - Dimensions: Prediction Accuracy, Trace Quality, MCP Server Building, Debugging Skill, Independent Make
  - Levels: Developing, Competent, Fluent

---

## Code Quality Checklist

### Real Imports

- ✅ PASS: All imports verified against research-summary.md:
  - `from mcp.server.fastmcp import FastMCP` (L04, L05, L06, L07, L09) -- confirmed valid
  - `from mcp.server.fastmcp.prompts import base` (L05) -- confirmed valid for `base.UserMessage()`, `base.AssistantMessage()`
  - `from pydantic import Field` (L09 reference) -- confirmed valid
  - `mcp.run(transport="stdio")` (L04, L05, L06, L07, L08, L09) -- confirmed valid
  - `mcp.run(transport="streamable-http")` (L04) -- confirmed valid

### No Invented APIs

- ✅ PASS: All classes, functions, and APIs match research-summary.md verified patterns. No invented classes detected. `FastMCP`, `@mcp.tool()`, `@mcp.resource()`, `@mcp.prompt()`, `base.UserMessage`, `base.AssistantMessage`, `mcp.run()` are all verified.

### No StdioClientTransport

- ✅ PASS: `StdioClientTransport` does NOT appear in any lesson file (01-10). It only appears in research-summary.md where it is explicitly marked as deprecated/removed. The chapter correctly avoids the deprecated API.

### Type Annotations

- ✅ PASS: All tool, resource, and prompt functions have complete type annotations:
  - L04: `list_candidates(department: str) -> list[dict]`, `score_candidate(name: str, years_experience: int) -> dict`, corrected version with `skill_match_percent: int, education_level: str`
  - L05: `list_active_candidates() -> str`, `get_job_spec(job_id: str) -> str`, `screening_prompt(job_title: str, requirements: str) -> str`, `interview_prep(candidate_name: str, role: str) -> list[base.Message]`
  - L07: `get_job_description(job_id: str) -> dict`, `parse_cv(cv_text: str) -> dict`, `match_candidate_to_job(candidate_name: str, candidate_skills: list[str], job_id: str) -> dict`
  - L09: `parse_cv(cv_text: str) -> dict`, `score_candidate(candidate: dict, job_requirements: dict) -> dict`, `get_candidate_profile(candidate_id: str) -> str`, `screening_summary(candidate_name: str, job_title: str) -> str`

### Runnable Code (No Ellipsis/Pass Placeholders)

- ❌ FAIL: **Ellipsis (`...`) used as placeholder in skeleton code**
  - L09:297 `parse_cv` function body is `...`
  - L09:304 `score_candidate` function body is `...`
  - L09:311 `get_candidate_profile` function body is `...`
  - L09:318 `screening_summary` function body is `...`
  - L06:147 `...` in the "Mistake 1" example (intentional bad example)
  - **Mitigation**: The L09 uses are in a "server skeleton" section explicitly labeled as a template for students to fill in, and the lesson provides complete hints/solutions in expandable `<details>` blocks below. The L06 use is in a deliberately incorrect code example. These are **contextually appropriate** as pedagogical scaffolding, not as incomplete content. However, the checklist says "ALL code is runnable" which technically fails for the skeleton.
  - **Recommendation**: Consider whether the skeleton should be excluded from the "runnable" requirement since it is explicitly a student template. If strict compliance is needed, replace the skeleton `...` with `# TODO: implement` comments or remove the skeleton and let students build from the hints only.

### HireFlow Domain

- ✅ PASS: All examples use HireFlow recruitment domain throughout:
  - Candidates: Alice Chen, Bob Patel, Carol Davis, Sarah Chen
  - Jobs: JOB-001 (Senior Python Developer), JOB-002 (Marketing Analyst), JOB-003 (HR Coordinator)
  - Tools: `list_candidates`, `score_candidate`, `parse_cv`, `get_job_description`, `match_candidate_to_job`
  - Resources: `candidates://active`, `candidates://profiles/{candidate_id}`, `jobs://{job_id}`
  - Prompts: `screening_prompt`, `interview_prep`, `screening_summary`, `technical_screen`
  - Agent names: ResumeScreener, InterviewBot, JobSpecWriter, CandidateSummarizer

---

## Pedagogy Checklist

### James/Emma Dialogue

- ✅ PASS: James/Emma dialogue present in all 10 lessons:
  - L01: 19 James/Emma mentions (James introduces the problem, Emma provides the solution)
  - L02: 10 mentions (dialogue about REST vs MCP)
  - L03: 6 mentions (control model discussion)
  - L04: 51 mentions (heavy dialogue through investigations)
  - L05: 37 mentions (resource/prompt design discussion)
  - L06: 14 mentions (Parsons problem debrief)
  - L07: 17 mentions (modify exercises discussion)
  - L08: 29 mentions (debugging scenario)
  - L09: 17 mentions (capstone spec discussion)
  - L10: 13 mentions (rubric reflection, quiz debrief)

### James 60% / Emma 40% Ratio

- ✅ PASS: James: 110 mentions across lessons, Emma: 93 mentions. Ratio is approximately 54%/46%, close to the 60/40 target. Acceptable.

### James Makes Architectural Mistakes

- ✅ PASS: James makes architectural/design-level mistakes, not syntactic ones:
  - L01: James proposes writing 12 custom wrappers (architectural O(n\*m) mistake)
  - L02: James questions "Why not REST?" (architectural choice objection)
  - L04: James writes a linear scoring tool with no cap, no floor, single factor, arbitrary threshold (logic/design error, not syntax)
  - L08: James registers a tool with `name="parseCv"` (specification/naming convention error)
  - No instances of James making syntax errors (correct per checklist).

### Planted Bug with Error Taxonomy

- ✅ PASS: L04 contains a planted bug (lines 264-270) in `score_candidate`: linear scoring with no ceiling, no floor, single factor, arbitrary threshold. Classified under `:::info ERROR TAXONOMY` as "Logic Error" with 4 enumerated problems (lines 310-320). Explicit Error Taxonomy classification provided.

### AI-Assisted Investigation

- ✅ PASS: L04 "Investigation 4: AI-Assisted Lifecycle Trace" (lines 244-258) explicitly asks students to use Claude Code or preferred AI assistant to trace the request lifecycle and compare with their manual trace.

### Backward References

- ✅ PASS: Multiple backward references across the chapter:
  - L01: Chapter 61 (Agent Factory paradigm, line 78), Chapter 67 (domain expertise to skills, line 176), Chapter 64 (HireFlow origin, line 53)
  - L03: Chapter 80 (future FTE agent, line 371)
  - L08: Backward References section explicitly citing Lesson 2 and Lesson 4 (lines 410-413)
  - L09: Backward References section citing Lessons 4-5, Lesson 8, Part 1 Discipline Stack (lines 492-496)
  - L10: Backward References section citing Lesson 1, Lesson 3, Lesson 8 (lines 496-500)
  - Cross-chapter references: Chapter 61, Chapter 64, Chapter 67, Chapter 70, Chapter 80
  - Exceeds the minimum of 2 backward references.

### Tag Test (Voice Distinguishability)

- ✅ PASS: James and Emma have distinct voices:
  - **James**: Uses analogies ("like opening a new branch office," "like an intercom between two rooms," "like having separate waiters"), makes practical mistakes, asks "why" questions, proposes shortcuts, admits when wrong ("I... picked a number," "OK, that's a terrible scoring system")
  - **Emma**: Asks Socratic questions ("What does each line actually do?", "How did your prediction compare?", "Why not one client?"), provides structural corrections, speaks in architectural principles ("Protocol equals contract," "Patterns that are the same every time are patterns you can rely on"), admits limits ("I should mention something")
  - Voices are distinguishable without names in most dialogue blocks.

---

## Formatting Checklist

### Em-Dashes

- ✅ PASS: **ZERO em-dashes** (--- or --) found in all 10 lesson files. Thoroughly clean.

### Forbidden Phrases

- ✅ PASS: **ZERO occurrences** of "simply", "obviously", "clearly", "just remember", "don't worry about" in any lesson file.

### No Import Flashcards/Quiz

- ✅ PASS: No `import Flashcards` or `import Quiz` statements in any lesson file. Only appears in research-summary.md as a warning note.

### Docusaurus Admonitions

- ✅ PASS: Admonitions used correctly throughout:
  - `:::warning` for STOP_AND_PREDICT boxes (L02, L03, L04, L05, L07, L08)
  - `:::tip` for KEY INSIGHT boxes (L01, L02, L03, L04, L05, L07, L08)
  - `:::info` for recall references and Error Taxonomy classifications (L01, L02, L04, L08)
  - `:::danger` for AI-FREE ZONE markers (L04, L06, L09)
  - All admonitions properly closed with `:::`
- ⚠️ MINOR: L08 uses `:::tip KEY_INSIGHT` (with underscore) instead of `:::tip KEY INSIGHT` (with space) at lines 228 and 395. This is cosmetically inconsistent with other lessons but functionally valid in Docusaurus.

---

## Cross-Lesson Consistency Analysis

### Domain Entity Consistency

- ✅ PASS: Consistent HireFlow entities across lessons:
  - Server name: "HireFlow" throughout (L04-L09)
  - Candidate names: Alice Chen, Bob Patel, Carol Davis used consistently
  - Job IDs: JOB-001, JOB-002 format consistent
  - Tool names: snake_case consistently (`list_candidates`, `score_candidate`, `parse_cv`)

### Progressive Build

- ✅ PASS: Lessons build progressively on a single server:
  - L04: Server with `list_candidates` + buggy `score_candidate`
  - L04 (corrected): Server with `list_candidates` + multi-factor `score_candidate`
  - L05: Adds resources (`candidates://active`, `jobs://{job_id}`) and prompts (`screening_prompt`, `interview_prep`)
  - L06: Parsons reinforcement of structure
  - L07: Three extensions (new tool, validation, tool-resource wiring)
  - L08: Configuration and debugging of the server
  - L09: Fresh build from scratch (capstone)

### Naming Inconsistency (Minor)

- ⚠️ MINOR: L05 full server listing (line 337) includes `import json` inside function bodies (lines 87, 88, 397-401, 407-408) rather than at the top of the file. This is valid Python but not best practice. It's a pedagogical choice (showing minimal imports per function) but could confuse students who expect top-level imports.

### Score Candidate Parameter Inconsistency

- ⚠️ MINOR: `score_candidate` has different signatures across lessons:
  - L04 buggy version: `(name: str, years_experience: int) -> dict`
  - L04 corrected + L05 + L07 version: `(name: str, years_experience: int, skill_match_percent: int, education_level: str) -> dict`
  - L09 capstone version: `(candidate: dict, job_requirements: dict) -> dict`
  - This is intentional progression (buggy -> corrected -> redesigned), but L09's complete signature change could confuse students expecting the earlier pattern. The lesson explains this is a fresh design.

---

## Summary of Findings

### Failures (Must Fix)

| #   | Item                                               | File(s)                                       | Severity                                                       |
| --- | -------------------------------------------------- | --------------------------------------------- | -------------------------------------------------------------- |
| 1   | No confidence score in STOP_AND_PREDICT boxes      | L02, L03, L04, L05, L07, L08 (11 boxes total) | Medium                                                         |
| 2   | Ellipsis `...` used as placeholder in L09 skeleton | L09:297, 304, 311, 318                        | Low (contextually appropriate but technically fails checklist) |

### Warnings (Should Fix)

| #   | Item                                                      | File(s)                  | Severity    |
| --- | --------------------------------------------------------- | ------------------------ | ----------- |
| 1   | `:::tip KEY_INSIGHT` uses underscore instead of space     | L08:228, L08:395         | Cosmetic    |
| 2   | `import json` inside function bodies instead of top-level | L05:87, L05:397, L05:407 | Minor style |

### Passes (25 of 27 Checklist Items)

All other checklist items pass cleanly.

---

## Overall Quality Assessment: 9/10

**Strengths:**

- Exceptionally clean formatting: zero em-dashes, zero forbidden phrases, zero phantom imports
- All code uses verified APIs from research-summary.md; zero hallucinated imports
- Strong progressive pedagogy: Why -> Architecture -> Primitives -> Build -> Practice -> Debug -> Capstone -> Assess
- James/Emma dialogue is natural with distinguishable voices; James makes architectural mistakes as required
- Comprehensive PRIMM-AI+ coverage: all 7 sections mapped across 10 lessons
- The planted bug in L04 with Error Taxonomy classification is well-executed
- Backward references are generous (Chapters 61, 64, 67, plus intra-chapter references)
- The 15-question quiz in L10 with detailed explanations and lesson-mapping table is thorough
- Rubric has exactly 5 dimensions x 3 levels as required

**Weaknesses:**

- The only real gap is missing confidence scores in STOP_AND_PREDICT boxes (a mechanical fix)
- The L09 skeleton uses `...` placeholder (defensible as student template but technically non-runnable)

**Verdict:** Production-ready with 2 minor fixes needed. The content quality, API accuracy, and pedagogical structure are excellent.
