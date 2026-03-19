## Quality Report: Chapter 36 Product Management

### Overall Score: CONDITIONAL PASS

### Per-Writer Summary

| Writer             | Files                                                                             | Issues | Verdict          |
| ------------------ | --------------------------------------------------------------------------------- | ------ | ---------------- |
| reference-builder  | 3 (architecture-spec, shared-brief, L03 reference)                                | 0      | PASS             |
| writer-foundation  | L01, L02, L04, L05 + sidecars (12 files)                                          | 3      | PASS             |
| writer-define-plan | L06, L07, L08, L09, L10 + sidecars (15 files)                                     | 1      | PASS             |
| writer-communicate | L11, L12, L13, L14, L15 + sidecars (15 files)                                     | 3      | CONDITIONAL PASS |
| plugin-builder     | ~28 files (plugin.json, 6 SKILL.md, 3 agents, evals, template, CLAUDE.md, README) | 0      | PASS             |

### Issues List

#### Critical (must fix before merge)

1. **Missing L16 quiz file.** The architecture spec defines `16-chapter-quiz.md` in the directory skeleton. L15 links to `./16-chapter-quiz.md` at the end. The file does not exist yet. This will cause a broken link in Docusaurus. _Note: This is expected — Phase 5 (quiz generation) is pending and has not run yet. Not a writer error, but must be completed before publish._

2. **L14 duration mismatch: 75 min in frontmatter vs 45 min in architecture spec.** The architecture spec (line 42) lists L14 at `45 min`. The actual lesson frontmatter says `duration_minutes: 75`. The README lesson flow table says `45 min`. Given L14 has Part 1 (retro) + Part 2 (deploy three agents) + a 45-min exercise, 75 min is likely more accurate — but the spec and README are stale. **Fix**: Update the architecture spec line 42 and README L14 row to `75 min`, OR trim L14 content to fit 45 min.

3. **L15 duration mismatch: 20 min in frontmatter vs 15 min in architecture spec.** The spec says `15 min`; the actual frontmatter says `20 min`. The README says `15 min`. **Fix**: Align all three to the same value (20 min is reasonable for a summary+reference page).

#### Warning (should fix)

4. **L02 official plugin command table is missing `/sprint-planning`.** The table at L02 lines 99-108 lists only 6 official commands. The architecture spec and shared brief both list 7 official commands (the 6 shown + `/sprint-planning`). `/sprint-planning` does appear later in L02's workflow diagram (line 137), but the command table is the authoritative reference in the lesson. **Fix**: Add a 7th row to the official plugin table: `| /sprint-planning | Plan a sprint by scoping work against real team capacity |`

5. **L01 keywords has only 6 terms; spec says 8-20.** L01 has `["product management", "cognitive load", "PM artifacts", "feature specs", "product documentation", "AI agents for PMs"]` — exactly 6, which is below the spec's 8-minimum. **Fix**: Add 2-3 more terms (e.g., "document gap", "PM workflow cycle", "two-plugin architecture").

6. **L03 keywords has only 6 terms.** Same issue: `["product management", "discovery brief", "problem brief", "problem framing", "product discovery", "feature request reframing"]` — 6 terms. **Fix**: Add 2-3 more (e.g., "product-strategy plugin", "NEVER DO rules").

7. **L15 keywords has only 7 terms.** `["product management", "quick reference", "PM commands", "plugin commands", "PM frameworks", "chapter summary", "product-management plugin"]` — 7 terms, just below 8. **Fix**: Add 1 more (e.g., "product-strategy plugin").

8. **L15 has only 1 skill entry (no second skill).** Most lessons have 2 skills. L15 has only 1 — acceptable for a reference/summary page, but noting for consistency awareness.

#### Suggestion (nice to have)

9. **L14 exercise time says 45 min but total lesson duration is 75 min.** The exercise itself (`/retro` + agent deployment) is listed as 45 min, with the conceptual content filling the other 30 min. This is fine structurally but the most demanding lesson in the chapter. Consider noting this in the README row.

10. **README sidebar_position is 36, not 0 or similar.** The README uses `sidebar_position: 36` (matching the chapter number). Other chapters sometimes use lower values for sorting within their section. This appears to work correctly given the file path determines nesting, but verifying in Docusaurus rendering is recommended.

11. **L15 references `16-chapter-quiz.md` which does not yet exist.** Covered as Critical #1. The link text `Proceed to [Lesson 16: Chapter Quiz →](./16-chapter-quiz.md)` is correct but will 404 until the quiz is generated.

### Two-Plugin Correctness

**Summary: PASS with one minor gap (Issue #4)**

**Official plugin commands verified across all lessons:**

| Command                | Lesson(s) | Correctly attributed?               |
| ---------------------- | --------- | ----------------------------------- |
| `/write-spec`          | L06       | Yes — "Official product-management" |
| `/roadmap-update`      | L09       | Yes — "Official product-management" |
| `/synthesize-research` | L04       | Yes — "Official product-management" |
| `/stakeholder-update`  | L12       | Yes — "Official product-management" |
| `/competitive-brief`   | L05       | Yes — "Official product-management" |
| `/metrics-review`      | L13       | Yes — "Official product-management" |
| `/sprint-planning`     | L11       | Yes — "Official product-management" |

**Custom plugin commands verified across all lessons:**

| Command       | Lesson(s) | Correctly attributed?           |
| ------------- | --------- | ------------------------------- |
| `/brief`      | L03       | Yes — "Custom product-strategy" |
| `/interview`  | L04       | Yes — "Custom product-strategy" |
| `/prd`        | L07       | Yes — "Custom product-strategy" |
| `/stories`    | L08       | Yes — "Custom product-strategy" |
| `/prioritise` | L10       | Yes — "Custom product-strategy" |
| `/retro`      | L14       | Yes — "Custom product-strategy" |

**Cross-checks passed:**

- No lesson teaches a custom version of an official command
- L02 documents installing BOTH plugins (official via Cowork sidebar, custom via GitHub marketplace)
- L15 quick reference covers all 13 commands across both plugins (7 official + 6 custom)
- Every exercise block specifies which plugin the command comes from
- The "How They Complement Each Other" workflow diagram in L02 correctly maps the chain
- L04 correctly shows the mixed-plugin handoff (`/interview` custom → `/synthesize-research` official)

**One gap:** L02's official command TABLE lists only 6 of 7 commands (missing `/sprint-planning`), though it appears in the workflow diagram. See Issue #4.

### Chapter Lessons — Universal Check Results

| Check                                                   | Result                                                                                                                                                                                                                 |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Complete YAML frontmatter (all required fields)         | PASS — all 15 lessons have full frontmatter with slug, sidebar_position, title, description, keywords, chapter, lesson, duration_minutes, skills, learning_objectives, cognitive_load, differentiation, teaching_guide |
| teaching_guide section present                          | PASS — all 15 lessons include key_points, misconceptions (except L15 has 1), discussion_prompts, teaching_tips                                                                                                         |
| Keywords 8-20 terms                                     | WARNING — L01 (6), L03 (6), L15 (7) are below 8. All others are 6-8. See Issues #5-7.                                                                                                                                  |
| Try With AI (3 prompts: Reproduce/Adapt/Apply)          | PASS — all lessons L01-L14 have 3 prompts. L15 has none (reference page — acceptable)                                                                                                                                  |
| No `import` statements                                  | PASS — zero phantom imports detected across all 46 files                                                                                                                                                               |
| `<Flashcards />` JSX tag present                        | PASS — present in all 15 lesson .md files                                                                                                                                                                              |
| Cowork terminology                                      | PASS — zero occurrences of "Claude in Excel"                                                                                                                                                                           |
| Exercise Step 1-5 structure                             | PASS — all exercises (L02-L14) follow 5-step format with Plugin/Command/Time header                                                                                                                                    |
| Cross-references accurate                               | PASS — exercise chain matches spec (L02→L03→L04→...→L14→L15)                                                                                                                                                           |
| Duration reasonable                                     | WARNING — L14 at 75 min is the longest; all others 20-45 min. See Issue #2.                                                                                                                                            |
| Matching sidecar files (.flashcards.yaml + .summary.md) | PASS — all 15 lessons have both sidecar files (30 sidecar files total)                                                                                                                                                 |
| Sidebar positions sequential 1-15                       | PASS — verified across all frontmatter                                                                                                                                                                                 |
| Slugs follow pattern                                    | PASS — all slugs follow `/Business-Domain-Agent-Workflows/product-management/[lesson-slug]`                                                                                                                            |

### Plugin — Technical Check Results

| Check                                                                                  | Result                                                                                                                                                             |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| plugin.json valid JSON with name "product-strategy"                                    | PASS                                                                                                                                                               |
| Every SKILL.md has valid YAML frontmatter (name matches directory)                     | PASS — all 6: brief, interview, prd, stories, prioritise, retro                                                                                                    |
| Skill names lowercase+hyphens, no consecutive hyphens                                  | PASS                                                                                                                                                               |
| Only 6 skills (no spec/roadmap/research/update)                                        | PASS — verified: brief, interview, prd, stories, prioritise, retro                                                                                                 |
| Agent .md files have required frontmatter (name, description, tools, background: true) | PASS — all 3 agents have name, description, tools list, background: true                                                                                           |
| Agent skills lists reference existing skills                                           | PASS — research-intelligence references `brief`, roadmap-coherence references `prioritise`, stakeholder-update has no skills list                                  |
| product.local.md.template covers all required sections                                 | PASS — covers Product Identity, Vision, Personas, Engineering, Stakeholders, Terminology, Quality Standards, Research Config, Roadmap Config, PM Process Standards |
| evals/evals.json has 12+ test cases including negative cases                           | PASS — 14 test cases: 7 positive, 3 routing, 4 negative                                                                                                            |
| No skills reference a router                                                           | PASS — no router exists, none referenced                                                                                                                           |
| README clearly explains Layer 1/Layer 2 architecture                                   | PASS — README has clear two-layer table and installation instructions                                                                                              |

### Content Quality Check Results

| Check                                            | Result                                                                                                                                                              |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Voice consistent (professional PM, not academic) | PASS — all lessons maintain consistent direct PM voice. "You" used freely. Opinionated on PM principles.                                                            |
| Cognitive load reasonable per lesson             | PASS — ranges 0-6 new concepts. L10 has highest at 6 (C1 level). L15 has 0 (reference). All assessments explain why the load level is appropriate.                  |
| Scenario numbers use hedging language            | PASS — InsightFlow data uses "illustrative" framing. Examples: "illustrative range $50K-$120K ARR", "approximately 4-6 hours". No numbers stated as verified facts. |
| Lesson progression follows PM workflow cycle     | PASS — Understand (L01) → Define (L02 setup) → Discover (L03-L05) → Define (L06-L08) → Plan (L09-L11) → Communicate (L12-L13) → Automate (L14) → Reference (L15)    |
| Exercises build progressively                    | PASS — each exercise output explicitly feeds the next lesson. Keep This File admonitions present in L02-L14.                                                        |
