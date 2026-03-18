## Quality Report: Chapter 40 Intrapreneurship & Innovation Agents

### Overall Score: CONDITIONAL PASS

### Per-Writer Summary
| Writer | Files | Issues | Verdict |
|---|---|---|---|
| reference-builder | 3 | 0 | PASS |
| writer-bookends | 9 + README | 1 | PASS |
| writer-design-lean | 12 | 0 | PASS |
| writer-business-model | 12 | 3 | CONDITIONAL PASS |
| writer-pitch-agents-cap | 12 | 1 | PASS |
| plugin-builder | 20 | 0 | PASS |

---

### Issues List

#### Critical (must fix before merge)

**C-1: L11 ICP revenue figures are off by 100x from the rest of the chapter**
- File: `11-go-to-market-strategy.md`, lines 130, 159, 310-312
- The ICP company size uses `$800M–$3B revenue` for the primary tier and `$300M–$800M` for SME.
- Every other lesson in the chapter consistently uses `$5M–$50M revenue` as the target segment (L01, L03, L05, L06, L07, L08, L09, L10, L12, L15).
- The architecture spec explicitly states "CFOs of mid-market companies ($5M–$50M revenue)" as the target.
- **Fix**: Replace `$800M–$3B` with `$8M–$50M` (or the chapter standard `$5M–$50M`), `$300M–$800M` with `$1M–$8M` (or `$1M–$5M` to match the SME tier in L09), and `< $300M` in the NOT a fit section with `< $1M`. The discussion prompt at line 84 mentions "< $800M revenue" which also needs correction.

---

#### Warning (should fix; does not break build)

**W-1: L11 pricing tier table inconsistent with rest of chapter**
- File: `11-go-to-market-strategy.md`, line 312
- Enterprise tier listed at `$1,200/month (M12+)` for "5+ entities; ERP integration required" — this tier is never mentioned in the spec, L09 (unit economics), L15 (capstone innov.local.md), or L12 (pitch deck). It appears only in L11.
- **Recommendation**: Either remove the Enterprise tier row entirely (keep to the two tiers validated by the chapter: $500 mid-market, $350 SME) or add it as a "future consideration" note rather than a formal pricing row. The innov.local.md in L15 only mentions $500 and $350.

**W-2: L08 exercise duration says 90 minutes but spec says 45 minutes**
- File: `08-business-model-canvas.md`, line 304 ("Time: 90 minutes")
- The YAML frontmatter has `duration_minutes: 45` (the lesson itself). The exercise adds an additional 90-minute block within a 45-minute lesson, which may be confusing.
- **Recommendation**: Clarify in the exercise header that the 90-minute exercise time is additional practice time beyond the 45-minute lesson reading time, or adjust to match.

**W-3: L16 missing Continue link at bottom**
- File: `16-chapter-summary-quick-reference.md`
- L16 has no "Continue to..." link at the bottom — all other lessons do. As the last lesson this is fine, but for consistency consider adding a "Return to [Chapter README](./README.md)" link or leaving as-is (not a functional issue).

**W-4: L16 Key References table uses vague links**
- File: `16-chapter-summary-quick-reference.md`, lines 158-165
- The "DLA Stack integration" resource says "Search..." rather than providing a specific URL. The spec (Section 12) flagged that "URL references in Quick Reference table (lines 1943-1949)" need verification.
- **Recommendation**: Either provide specific URLs or remove the row. The current "Search for..." phrasing is honest but unconventional for a reference table.

---

#### Suggestion (minor improvements; low priority)

**S-1: L09 cognitive_load lists 6 new concepts**
- File: `09-unit-economics-financial-modelling.md`, line 60
- The assessment notes "6 concepts at B2 level is at the upper limit of cognitive load." This is the highest concept count in the chapter. All other lessons are 3-5.
- **Note**: This is correctly flagged in the assessment itself ("students who struggle should focus on the unit economics section only and return to scenarios in a second session"). No action needed — just noting it is the ceiling.

**S-2: Flashcard counts vary from 10-15 target**
- L01 has 10 cards (good), L03 has ~15+ based on file size, most are within the 10-15 target. Spot-check shows cards are methodological, not AP-specific (per shared brief rules). No issues found.

**S-3: Agent files use `background: true` — confirm framework supports this**
- All 4 agent files in `agents/` directory include `background: true` in YAML frontmatter. This is correct per the architecture spec but should be verified against whatever agent runtime processes these files.

---

### Checklist Results

**Chapter lessons (universal checks):**
- [x] Every lesson has complete YAML frontmatter (all required fields including teaching_guide)
- [x] Keywords list has 8-20 terms per lesson (all have 10-12)
- [x] Try With AI section has 3 prompts (Reproduce, Adapt, Apply) — confirmed in all 16 lessons
- [x] NO `import` statements for any `@site/src/components/` (grep confirmed: zero matches)
- [x] Cowork terminology correct ("Cowork" used throughout; zero "Claude in Excel" matches)
- [x] Exercise format follows Step structure with deliverable (confirmed in L03, L04, L05, L06, L08, L09, L11, L12, L15)
- [x] Cross-references are accurate (L07 refs L05/L06; L12 refs L09/L10; L15 integrates all) — spot-checked and confirmed
- [x] Duration is reasonable for content depth (range: 15-90 min; capstone at 90 is appropriate)
- [x] Every .md lesson has matching .flashcards.yaml + .summary.md sidecar files (48 sidecar files confirmed)
- [x] Sidebar positions are sequential (1-16 confirmed via grep)
- [ ] AP automation worked example is consistent across lessons — **FAILS on L11 revenue figures** (see C-1)
- [x] Intrapreneurship dual-track present where relevant (confirmed in L01, L03-L15 with :::note For Intrapreneurs callouts)

**DLA Stack progression checks:**
- [x] L01 establishes all three methodologies (Design Thinking, Lean Startup, Agile)
- [x] L03-L04 are Design Thinking phase (Discovery + Ideation)
- [x] L05-L07 are Lean Startup phase (Assumptions, MVP, BML)
- [x] L13 is Agile phase (Innovation Sprints)
- [x] Progression builds logically — no lesson assumes knowledge from a later lesson

**Plugin (spot-check):**
- [x] SKILL.md files have valid YAML frontmatter (name matches directory, description with trigger phrases) — confirmed on idea, discovery, validate
- [x] No skill references a router (grep confirmed: zero "router" matches in skills/)
- [x] Agent files have background: true and valid skills lists — confirmed on idea-generator and fundraising-readiness
- [x] Each skill includes distributed router logic (innov.local.md loading, DLA warnings) — confirmed in all 3 spot-checked skills

**Content quality:**
- [x] Voice is consistent (practical business methodology, not academic) — confirmed across all lessons
- [x] Cognitive load reasonable per lesson (3-6 concepts; all within 7-10 limit with appropriate scaffolding)
- [ ] Financial figures internally consistent across lessons — **FAILS on L11** (see C-1)
- [x] Evidence hierarchy applied correctly in L07 (7-level hierarchy with payment/renewal at top)

---

### Summary

The chapter is high quality. The reference lesson (L03) sets an excellent benchmark, and the other writers matched it closely in structure, voice, and pedagogical rigor. The plugin is well-architected with distributed router logic, proper stage-aware calibration, and no router skill. All 49 chapter files + 20 plugin files are present and structurally complete.

The one critical issue (C-1) is a revenue figure error in L11 where the ICP target segment is `$800M–$3B` instead of `$5M–$50M`. This is almost certainly a typo (extra zeros) but would confuse students and contradicts every other lesson. This must be fixed before merge.

The warnings are minor inconsistencies that should be addressed but do not block the build or fundamentally mislead students.
