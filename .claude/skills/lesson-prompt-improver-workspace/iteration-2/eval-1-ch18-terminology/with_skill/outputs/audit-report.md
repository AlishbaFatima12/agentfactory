# Prompt Quality Audit Report

**File:** `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/02-office-of-the-cfo/18-intent-driven-financial-architecture/01-the-coordinate-trap.md`
**Chapter:** 18 (IDFA — Intent-Driven Financial Architecture)
**Lesson:** 01 — The Coordinate Trap
**Auditor:** lesson-prompt-improver skill (automated eval)
**Date:** 2026-03-11

---

## Summary Table

| #   | Line Range | Defect Type                                  | Current Content                                                                            | Recommended Fix                                                                                                         |
| --- | ---------- | -------------------------------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| 1   | 143        | D6: Plugin/Tool Terminology                  | `Open Claude in Excel (or your preferred AI assistant)`                                    | `Open Cowork (or your preferred AI assistant)`                                                                          |
| 2   | 179        | D6: Plugin/Tool Terminology                  | `Ask Claude in Excel (or your preferred AI assistant)`                                     | `Ask Cowork (or your preferred AI assistant)`                                                                           |
| 3   | 189        | D6: Plugin/Tool Terminology                  | `Use these prompts in Claude in Excel or your preferred AI assistant`                      | `Use these prompts in Cowork or your preferred AI assistant.`                                                           |
| 4   | 95         | D6: Plugin/Tool Terminology (teaching_guide) | `The Claude in Excel exercise makes the AI opacity symptom concrete`                       | `The Cowork exercise makes the AI opacity symptom concrete`                                                             |
| 5   | 70         | D6: Plugin/Tool Terminology (cognitive_load) | `Students enter from Chapter 17 with hands-on experience using Claude in Excel and Cowork` | `Students enter from Chapter 17 with hands-on experience using Cowork` (or clarify the Ch17 cross-reference explicitly) |

**Total defects found: 5** (all Defect Type 6 — terminology)

---

## Detailed Analysis by Defect Type

### Defect 1: Fabricated Agent Output — CLEAN

No fabricated agent outputs found.

**What was examined and correctly EXCLUDED:**

- **Lines 111-113:** The formula `=B14-(C14*$F$8+D$3)` — this is a _prompt input_ (a real formula the student feeds to the agent), not fabricated agent output.
- **Lines 129-136:** The Concept Box describing the four symptoms of Formula Rot — this is a _framework definition_ (conceptual explanation), not a fabricated agent response.
- **Lines 145-147:** The formula code block in "Feel the Problem" — again a _prompt input_ for the student to paste.
- **Lines 161-166:** The business cost table — this is a _framework table_ (classification of cost categories with descriptions), not fabricated agent output.
- **Lines 149-153:** The narrative describing what Claude "will" do (describe arithmetic, hedge on business meaning) — this is _pedagogical description of expected behavior patterns_, not a fabricated output block with specific fake numbers. It describes qualitative behavior ("hedges with phrases like...") rather than presenting a fake agent response verbatim.

**Verdict:** All code blocks are either prompt inputs, framework definitions, or pedagogical descriptions. No fabricated agent outputs present.

### Defect 2: Missing Skill Name in Prompt — CLEAN

**What was examined:**

- **Prompt 1 (lines 193-206):** Asks Claude to explain a formula — this is a generic AI prompt, not a skill-specific exercise. No IDFA plugin skill is being invoked here. The student is asking a general-purpose AI to analyze a formula.
- **Prompt 2 (lines 212-232):** Asks Claude to identify Formula Rot symptoms — again general-purpose analysis against a framework defined in the lesson text. No skill involved.
- **Prompt 3 (lines 238-254):** Asks Claude to trace a dependency chain — general-purpose audit reasoning. No skill involved.

**Verdict:** This is Lesson 1 of the chapter. The IDFA plugin and its skills have not been introduced yet. The prompts are general-purpose AI prompts that deliberately demonstrate the _problem_ (AI opacity) before the solution (IDFA methodology) is taught. Adding a skill name here would be incorrect — no skill exists for this task at this point in the curriculum.

### Defect 3: Inline Data Injection — CLEAN

**What was examined:**

- No references to `demo-data.md`, `*.local.md`, or `[Paste or reference the...]` placeholders found anywhere in the lesson.

**Verdict:** L01 does not use any data injection patterns. The exercises use self-contained formula examples embedded in the prompts.

### Defect 4: Fiction-Researching Prompt — CLEAN

**What was examined:**

- No prompts ask the agent to "research" or "pull current data" on any company, fictional or otherwise.
- The exercise on line 172-185 asks students to use _their own_ real financial models, not fictional entities.
- The prompts use self-contained formula examples, so no web search would be triggered.

**Verdict:** No fiction-researching prompts present.

### Defect 5: Narrative Referencing Fabricated Content — CLEAN

**What was examined:**

- No fabricated output blocks exist (see Defect 1), so no narrative can reference them.
- Lines 149-153 describe _expected behavioral patterns_ ("Claude will describe the arithmetic accurately... It may guess... But it cannot tell you with confidence...") — these are qualitative predictions, not references to specific fabricated numbers or scores.
- Lines 183-185 ("Document your findings. You will return to them in Lesson 2...") reference the student's own exercise output, not fabricated content.

**Verdict:** No orphaned narrative references.

### Defect 6: Plugin/Tool Terminology — FOUND (5 instances)

Per `.claude/rules/cowork-content.md`, Chapter 18+ must use "Cowork" instead of "Claude in Excel." The rule is explicit: _"Claude in Excel" is the Excel-specific assistant (Ch 17). "Cowork" is Claude's collaborative workspace with spreadsheet side panel. They are not the same thing._

The Try With AI setup line has a canonical form: `"Use these prompts in Cowork or your preferred AI assistant."`

#### Instance 1 — Line 143 (body text, "Feel the Problem" section)

**Current:**

```
Open Claude in Excel (or your preferred AI assistant) and give it this formula:
```

**Recommended:**

```
Open Cowork (or your preferred AI assistant) and give it this formula:
```

**Rationale:** This is a Ch18 lesson instructing the student to use the tool. "Claude in Excel" is the wrong product name for Ch18 context. This is not a cross-reference to Ch17's product — it is an instruction to use the current chapter's tool.

#### Instance 2 — Line 179 (Exercise section)

**Current:**

```
2. Ask Claude in Excel (or your preferred AI assistant) to explain what the formula calculates and what business rule it represents
```

**Recommended:**

```
2. Ask Cowork (or your preferred AI assistant) to explain what the formula calculates and what business rule it represents
```

**Rationale:** Same as Instance 1 — this is a usage instruction in Ch18, not a Ch17 cross-reference.

#### Instance 3 — Line 189 (Try With AI header text)

**Current:**

```
Use these prompts in Claude in Excel or your preferred AI assistant to explore this lesson's concepts.
```

**Recommended (canonical form per cowork-content.md):**

```
Use these prompts in Cowork or your preferred AI assistant.
```

**Rationale:** The cowork-content.md rule specifies the exact canonical wording for this line. The current text deviates in two ways: wrong product name, and includes unnecessary trailing clause ("to explore this lesson's concepts").

#### Instance 4 — Line 95 (YAML frontmatter: teaching_guide.teaching_tips)

**Current:**

```
"The Claude in Excel exercise makes the AI opacity symptom concrete — students see the agent struggle in real time, which is more persuasive than any explanation"
```

**Recommended:**

```
"The Cowork exercise makes the AI opacity symptom concrete — students see the agent struggle in real time, which is more persuasive than any explanation"
```

**Rationale:** Teaching guide metadata visible to content tools. Should use correct terminology even in YAML frontmatter.

#### Instance 5 — Line 70 (YAML frontmatter: cognitive_load.assessment)

**Current:**

```
"5 concepts at A2 level — within the 5-7 cognitive limit for this tier. Students enter from Chapter 17 with hands-on experience using Claude in Excel and Cowork; this lesson shifts from tool usage to examining the structural flaw in the models those tools operate on."
```

**Analysis:** This one is nuanced. It mentions both "Claude in Excel" _and_ "Cowork" in the same sentence, describing what students arrive with from Ch17. This could be a legitimate cross-reference (students used Claude in Excel in Ch17) rather than an incorrect Ch18 product reference. However, the conjunction "Claude in Excel and Cowork" implies they are two separate tools the student has used, which is correct (Ch17 teaches Claude in Excel; Ch18 introduces Cowork).

**Recommended:** Accept as-is OR simplify to:

```
"5 concepts at A2 level — within the 5-7 cognitive limit for this tier. Students enter from Chapter 17 with hands-on experience using AI assistants in spreadsheets; this lesson shifts from tool usage to examining the structural flaw in the models those tools operate on."
```

**Rationale:** The cross-reference is defensible but could confuse content tools that grep for "Claude in Excel" violations. Generalizing avoids the ambiguity while preserving the pedagogical note.

---

## Correctly Excluded Content (No Defects)

The following content was examined and correctly determined to NOT be a defect:

| Line Range | Content Type                               | Why Excluded                                                                        |
| ---------- | ------------------------------------------ | ----------------------------------------------------------------------------------- |
| 111-113    | Formula code block (`=B14-(C14*$F$8+D$3)`) | Prompt input — student types this, not agent output                                 |
| 123-137    | Concept Box (Formula Rot definition)       | Framework definition — teaches the four symptoms as a named concept                 |
| 161-166    | Business Cost table                        | Framework table — classifies cost categories, not fabricated agent output           |
| 193-206    | Prompt 1 code block                        | Prompt block — student input, not agent output                                      |
| 212-232    | Prompt 2 code block                        | Prompt block — student input                                                        |
| 238-254    | Prompt 3 code block                        | Prompt block — student input                                                        |
| 149-153    | Narrative on Claude's expected behavior    | Qualitative behavioral prediction, not fabricated output with specific fake numbers |
| 224-228    | Formula examples in Prompt 2               | Prompt input data — self-contained examples for analysis                            |

---

## Priority-Ordered Recommendations

### Priority 1 (High) — Fix immediately

1. **Line 143:** Change "Claude in Excel" to "Cowork" in body text
2. **Line 179:** Change "Claude in Excel" to "Cowork" in exercise text
3. **Line 189:** Replace with canonical Try With AI setup line: `"Use these prompts in Cowork or your preferred AI assistant."`

These three instances are in student-facing body text. Students reading this lesson in Ch18 will see the wrong product name for the tool they should be using. The fix is a simple find-and-replace with no structural changes.

### Priority 2 (Medium) — Fix in next pass

4. **Line 95:** Change "Claude in Excel" to "Cowork" in teaching_guide YAML

This is in metadata used by content tools and instructors. Lower visibility to students but should be consistent.

### Priority 3 (Low) — Review and decide

5. **Line 70:** Evaluate whether "Claude in Excel and Cowork" cross-reference in cognitive_load YAML is intentional or should be generalized

This is a judgment call — the cross-reference to Ch17's product may be deliberate context-setting.

---

## Overall Assessment

This lesson is well-constructed with no critical defects (Types 1-5). The only issues are **5 instances of Defect Type 6 (terminology)** — all "Claude in Excel" references that should be "Cowork" per Ch18+ rules. Three are high-priority (student-facing body text), one is medium (teaching metadata), and one is a borderline cross-reference that may be intentional.

The lesson correctly avoids all common anti-patterns:

- No fabricated agent outputs with fake numbers
- No inline data injections
- No fiction-researching prompts
- Prompt blocks are clean student inputs
- Framework tables define concepts, not fake outputs
- Try With AI prompts are well-structured with "What you are learning" explanations

**Defect density: 5 terminology issues / 264 lines = Low**
**Estimated fix time: 5 minutes (Priority 1-2), +2 minutes review (Priority 3)**
