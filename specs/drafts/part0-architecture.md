# Part 0 Architecture Specification

## Overview

**Part**: 00-Prelude-Thinking-is-the-Curriculum
**Pedagogical Layer**: L1 (Manual Foundation) — no code, no programming assumed
**Target Audience**: Complete beginners; only tools are claude.ai and chatgpt.com in a browser
**Source Draft**: `specs/drafts/Part 0 Prelude_ Thinking is the Curriculum.md` (1234 lines)
**Chapter Count**: 10 chapters + introduction + baseline + post-assessment + portfolio + instructor guide

---

## 1. Complete Directory Skeleton

```
apps/learn-app/docs/00-Prelude-Thinking-is-the-Curriculum/
├── README.md                                          ← Part README (chapter index, prerequisites, learning path)
├── 01-introduction/
│   ├── 01-why-this-part-comes-first.md               ← Introduction: paradox, six layers, AI feedback protocol
│   ├── 02-forward-map-and-score-card.md              ← Forward Map, Thinking Score Card, Feedback Challenge, Solo Learners, Scaling
│   └── 03-thinking-baseline.md                       ← Thinking Baseline assessment (hospital triage scenario)
├── 02-asking-better-questions/
│   ├── 01-prediction-lock.md                         ← Exercise 1: The Prediction Lock
│   ├── 02-question-tournament.md                     ← Exercise 2: The Question Tournament
│   ├── 03-divergence-test.md                         ← Exercise 3: The Divergence Test
│   └── 04-live-defence.md                            ← Exercise 4: Live Defence + Chapter Deliverable
├── 03-detecting-broken-reasoning/
│   ├── 01-error-prediction.md                        ← Exercise 1: The Error Prediction
│   ├── 02-contradiction-test.md                      ← Exercise 2: The Contradiction Test
│   ├── 03-build-it-break-it.md                       ← Exercise 3: Build It, Then Break It
│   └── 04-confidence-calibration.md                  ← Exercise 4: Confidence Calibration + Chapter Deliverable
├── 04-thinking-in-systems/
│   ├── 01-cascade-mapping.md                         ← Exercise 1: The Cascade Map
│   ├── 02-human-vs-ai-systems-analysis.md            ← Exercise 2: Human vs. AI Systems Analysis
│   ├── 03-variable-shift.md                          ← Exercise 3: The Variable Shift
│   └── 04-system-defence.md                          ← Exercise 4: System Defence + Chapter Deliverable
├── 05-reasoning-from-first-principles/
│   ├── 01-blank-page-derivation.md                   ← Exercise 1: The Blank Page Derivation
│   ├── 02-first-principles-vs-ai.md                  ← Exercise 2: First Principles vs. AI
│   ├── 03-assumption-autopsy.md                      ← Exercise 3: Assumption Autopsy
│   └── 04-rebuild-under-new-constraints.md           ← Exercise 4: Rebuild Under New Constraints + Chapter Deliverable
├── 06-communicating-what-matters/
│   ├── 01-audience-prediction.md                     ← Exercise 1: The Audience Prediction
│   ├── 02-live-adaptation.md                         ← Exercise 2: Live Adaptation
│   ├── 03-the-hard-conversation.md                   ← Exercise 3: The Hard Conversation
│   └── 04-communication-retrospective.md             ← Exercise 4: Communication Retrospective + Chapter Deliverable
├── 07-working-with-ai-not-for-ai/
│   ├── 01-three-path-comparison.md                   ← Exercise 1: The Three-Path Comparison
│   ├── 02-collaboration-log.md                       ← Exercise 2: The Collaboration Log
│   ├── 03-the-override-test.md                       ← Exercise 3: The Override Test
│   └── 04-dependency-audit.md                        ← Exercise 4: Dependency Audit + Chapter Deliverable
├── 08-reasoning-through-dilemmas/
│   ├── 01-position-lock.md                           ← Exercise 1: The Position Lock
│   ├── 02-adversarial-defence.md                     ← Exercise 2: The Adversarial Defence
│   ├── 03-stakeholder-swap.md                        ← Exercise 3: The Stakeholder Swap
│   └── 04-cost-matrix.md                             ← Exercise 4: The Cost Matrix + Chapter Deliverable
├── 09-building-something-from-nothing/
│   ├── 01-blank-page-sprint.md                       ← Exercise 1: The Blank Page Sprint
│   ├── 02-creation-log.md                            ← Exercise 2: The Creation Log
│   ├── 03-the-originality-test.md                    ← Exercise 3: The Originality Test
│   └── 04-three-draft-evolution.md                   ← Exercise 4: The Three-Draft Evolution + Chapter Deliverable
├── 10-deciding-under-uncertainty/
│   ├── 01-sealed-decision.md                         ← Exercise 1: The Sealed Decision
│   ├── 02-ai-consultation.md                         ← Exercise 2: The AI Consultation
│   ├── 03-information-drop.md                        ← Exercise 3: The Information Drop
│   └── 04-decision-audit.md                          ← Exercise 4: The Decision Audit + Chapter Deliverable
├── 11-learning-how-to-learn/
│   ├── 01-learning-plan.md                           ← Exercise 1: The Learning Plan
│   ├── 02-72-hour-sprint.md                          ← Exercise 2: The 72-Hour Sprint
│   ├── 03-teach-it-back.md                           ← Exercise 3: Teach It Back
│   └── 04-strategy-retrospective.md                  ← Exercise 4: Strategy Retrospective + Chapter Deliverable
├── 12-thinking-portfolio/
│   ├── 01-portfolio-assembly.md                      ← Portfolio assembly + Post-Assessment
│   └── 02-growth-map.md                              ← Growth Map + transition to Part 1
└── 13-instructor-guide/
    └── 01-calibrating-ai-prompts.md                  ← Instructor maintenance protocol
```

**Total files to create**: 47 markdown files + 1 README = 48 files

---

## 2. Lesson-to-Draft Mapping

### Source Draft Line Ranges

| Writer Assignment | Chapter(s)                                                         | Source Draft Lines                                                                                                                                                                                    | File Count |
| ----------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **writer-intro**  | 01-introduction + 12-thinking-portfolio + 13-instructor-guide      | Lines 1-137 (Intro + Six Layers + Forward Map + Score Card + Feedback Challenge + Solo Learners + Scaling + Baseline) + Lines 1165-1234 (Portfolio + Post-Assessment + Growth Map + Instructor Guide) | 8 files    |
| **writer-ch1-2**  | 02-asking-better-questions + 03-detecting-broken-reasoning         | Lines 138-350 (Ch1: 138-237, Ch2: 239-350)                                                                                                                                                            | 8 files    |
| **writer-ch3-4**  | 04-thinking-in-systems + 05-reasoning-from-first-principles        | Lines 351-530 (Ch3: 351-440, Ch4: 441-530)                                                                                                                                                            | 8 files    |
| **writer-ch5-6**  | 06-communicating-what-matters + 07-working-with-ai-not-for-ai      | Lines 531-720 (Ch5: 531-625, Ch6: 626-720)                                                                                                                                                            | 8 files    |
| **writer-ch7-8**  | 08-reasoning-through-dilemmas + 09-building-something-from-nothing | Lines 721-910 (Ch7: 721-810, Ch8: 811-910)                                                                                                                                                            | 8 files    |
| **writer-ch9-10** | 10-deciding-under-uncertainty + 11-learning-how-to-learn           | Lines 911-1164 (Ch9: 911-1062, Ch10: 1063-1164)                                                                                                                                                       | 8 files    |

**Note**: Line numbers are approximate. Writers should use chapter headings (e.g., `# **Chapter 3: Thinking in Systems**`) as authoritative boundaries, not exact line numbers.

---

## 3. YAML Frontmatter Template

Every lesson file in Part 0 MUST use this frontmatter template:

```yaml
---
sidebar_position: X
title: "Exercise Title"
description: "One-sentence description of the exercise and thinking skill practiced"
keywords: ["thinking skills", "Part 0", "specific-skill-keyword", ...]
chapter: X # Global chapter number within Part 0's folder numbering (02-11)
lesson: X # Lesson number within chapter (1-4)
duration_minutes: X # Estimated completion time

# HIDDEN SKILLS METADATA
skills:
  - name: "Skill Name"
    proficiency_level: "A1" # Part 0 is always A1 (foundational thinking)
    category: "Conceptual" # Part 0 is always Conceptual (no code)
    bloom_level: "Apply|Analyze|Evaluate|Create" # Part 0 exercises are Apply+ (never just Remember/Understand)
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "What the student can demonstrably do after this exercise"

learning_objectives:
  - objective: "Measurable learning outcome"
    proficiency_level: "A1"
    bloom_level: "Apply|Analyze|Evaluate|Create"
    assessment_method: "How the AI Check or peer defence verifies this"

cognitive_load:
  new_concepts: X # Should be 3-5 for Part 0 (beginners, no assumed knowledge)
  assessment: "Brief justification of concept count"

differentiation:
  extension_for_advanced: "How advanced students can go deeper"
  remedial_for_struggling: "Simplified path for students who find this difficult"

teaching_guide:
  lesson_type: "exercise" # All Part 0 lessons are exercises
  session_group: X
  session_title: "Group title"
  key_points:
    - "Key teaching point 1"
    - "Key teaching point 2"
  misconceptions:
    - "Common student misconception"
  discussion_prompts:
    - "Discussion question for instructors"
  teaching_tips:
    - "Practical teaching advice"
  assessment_quick_check:
    - "Quick verification question"
---
```

### Part 0 Frontmatter Rules

1. **proficiency_level**: Always `A1` — this is pre-programming, foundational thinking
2. **category**: Always `Conceptual` — no technical/applied skills in Part 0
3. **bloom_level**: Minimum `Apply` — Part 0 exercises require active cognitive engagement, never passive recall
4. **duration_minutes**: Exercise lessons = 45-90 min. Introduction/baseline lessons = 20-30 min
5. **cognitive_load.new_concepts**: Cap at 5 — these are complete beginners

---

## 4. Docusaurus Component Patterns

### Source Format to Output Mapping

The source draft uses pipe-table formatting (`| text |`) for ALL callout types. Each must be mapped to the correct Docusaurus pattern:

| Source Pattern                       | Identifier                                         | Docusaurus Output                                                                                                   |
| ------------------------------------ | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `\| YOUR DELIVERABLE ... \|`         | Starts with deliverable icon or "YOUR DELIVERABLE" | `:::info Your Deliverable` admonition                                                                               |
| `\| AI CHECK ... \|`                 | Starts with AI CHECK                               | ````markdown` code block with copy button`                                                                          |
| `\| CHOOSE YOUR SCENARIO ... \|`     | Starts with "CHOOSE YOUR SCENARIO"                 | Docusaurus `<Tabs>` component with `<TabItem>` per option                                                           |
| `\| SOLO LEARNER ALTERNATIVE ... \|` | Starts with "SOLO LEARNER"                         | `:::tip Solo Learner Alternative` admonition                                                                        |
| `\| BUILDING ON ... \|`              | Starts with "BUILDING ON"                          | `:::note Building On Previous Chapters` admonition with relative links                                              |
| `\| DELIVERABLE TEMPLATE ... \|`     | Starts with "DELIVERABLE TEMPLATE"                 | `<details><summary>Deliverable Template (click to expand)</summary>` collapsible                                    |
| `\| CHAPTER DELIVERABLE ... \|`      | Starts with "CHAPTER DELIVERABLE"                  | `:::info Chapter Deliverable` admonition                                                                            |
| `\| GRADING CRITERIA ... \|`         | Starts with "GRADING CRITERIA"                     | `<details><summary>Grading Criteria</summary>` collapsible with markdown table                                      |
| `\| THE FORWARD MAP ... \|`          | Forward Map content                                | Markdown table (restructured from prose to table rows)                                                              |
| `\| THE THINKING SCORE CARD ... \|`  | Score Card definition                              | `:::note The Thinking Score Card` admonition with numbered list                                                     |
| `\| SCORE TRACKING TABLE ... \|`     | Score tracking                                     | `<details><summary>Score Tracking Table</summary>` collapsible with markdown table                                  |
| `\| THE FEEDBACK CHALLENGE ... \|`   | Feedback Challenge Protocol                        | `:::warning Feedback Challenge Protocol` admonition with numbered steps                                             |
| `\| THREE-TIER ASSESSMENT ... \|`    | Assessment scaling                                 | `<details><summary>Assessment at Scale (Instructor Reference)</summary>` collapsible                                |
| `\| SEMESTER CALIBRATION ... \|`     | Instructor calibration                             | `<details><summary>Semester Calibration Protocol</summary>` collapsible                                             |
| `\| DOCUSAURUS STRUCTURE ... \|`     | Implementation notes                               | **DO NOT INCLUDE** — this is meta-guidance for us, not student content                                              |
| Italic epigraph in `\| ... \|`       | Motivational quote, centered                       | `> *Quote text*` blockquote                                                                                         |
| `\| Part 0 is about ... \|`          | Recurring tagline                                  | `> *Part 0 is about how to teach humans to thrive in the future. The rest of the book is how to build the future.*` |

### AI Check Prompt Pattern (CRITICAL)

Every AI Check prompt must be a fenced code block with language tag for copy button:

````markdown
````text title="AI Check Prompt — Copy and paste into claude.ai or chatgpt.com"
I am a student learning [skill]. Below is [description of deliverable].
Please: (1) ... (2) ... (3) ...
[deliverable insertion point markers]
Finally, complete the Thinking Score Card for this exercise:
Independent Thinking (1-10), Critical Evaluation (1-10),
Reasoning Depth (1-10), Originality (1-10), Self-Awareness (1-10).
For each score, give a one-sentence justification.
```​
````
````

### Scenario Selector Pattern (Tabs)

```mdx
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs>
  <TabItem value="business" label="Business" default>
    **Scenario A (Business):** "A retail company's online sales dropped 15%
    despite a 20% increase in marketing spend."
  </TabItem>
  <TabItem value="technical" label="Technical">
    **Scenario B (Technical):** "A software team's deployment frequency dropped
    from daily to weekly after adopting a new CI/CD pipeline..."
  </TabItem>
  <TabItem value="social" label="Social/Education">
    **Scenario C (Social/Education):** "A university's student enrollment
    increased by 25% but student satisfaction scores dropped..."
  </TabItem>
</Tabs>
```

### Deliverable Template (Collapsible)

```markdown
<details>
<summary>Deliverable Template (click to expand)</summary>

**PREDICTION LOCK TEMPLATE**

- **Date/Time:** \_\_\_
- **Scenario:** [paste]
- **Section A - My Diagnosis (2-3 sentences):** \_\_\_
- **Section B - My 10 Questions (ranked):**
  - Q1 [highest value]: **_ | Predicted answer: _**
  - Q2: **_ | Predicted answer: _**
  - ...through Q10
- **Section C - REASONING RECEIPT:**

| Prompt # | Prompt Sent | Tool   | Response Summary | Decision             | Justification |
| -------- | ----------- | ------ | ---------------- | -------------------- | ------------- |
| 1        |             | Claude |                  | Accept/Reject/Modify |               |

</details>
```

### Building On Cross-References

```markdown
:::note Building On Previous Chapters
You will use the **Question Formulation** skill from [Chapter 1](../02-asking-better-questions/01-prediction-lock.md)
to design your error-detection queries. The **Reasoning Receipt** format carries forward.
:::
```

### Score Card Table (Markdown)

```markdown
| Dimension            | Score (1-10)  | Justification |
| -------------------- | :-----------: | ------------- |
| Independent Thinking |   \_\_\_/10   |               |
| Critical Evaluation  |   \_\_\_/10   |               |
| Reasoning Depth      |   \_\_\_/10   |               |
| Originality          |   \_\_\_/10   |               |
| Self-Awareness       |   \_\_\_/10   |               |
| **Average**          | **\_\_\_/10** |               |
```

---

## 5. Source Draft Conversion Rules

### Pipe-Table Classification Algorithm

The source draft uses `| text |` for everything. Writers must classify each pipe-table by its opening words:

1. **Read first 10 words** of the pipe-table content
2. **Match against this priority list** (first match wins):

| Opening Pattern                         | Classification     | Docusaurus Pattern                |
| --------------------------------------- | ------------------ | --------------------------------- |
| `YOUR DELIVERABLE` or deliverable icon  | Deliverable box    | `:::info Your Deliverable`        |
| `AI CHECK` or AI prompt icon            | AI prompt          | Code block with copy button       |
| `CHOOSE YOUR SCENARIO` or scenario icon | Scenario selector  | `<Tabs>` component                |
| `SOLO LEARNER` or solo icon             | Solo alternative   | `:::tip Solo Learner Alternative` |
| `BUILDING ON` or link icon              | Cross-reference    | `:::note Building On` with links  |
| `DELIVERABLE TEMPLATE` or template icon | Template           | `<details>` collapsible           |
| `CHAPTER DELIVERABLE`                   | Chapter summary    | `:::info Chapter Deliverable`     |
| `GRADING CRITERIA` or grading icon      | Grading rubric     | `<details>` collapsible           |
| `THE FORWARD MAP`                       | Forward map        | Restructure to markdown table     |
| `THE THINKING SCORE CARD`               | Score card def     | `:::note` admonition              |
| `SCORE TRACKING TABLE`                  | Tracking table     | `<details>` collapsible           |
| `THE FEEDBACK CHALLENGE`                | Challenge protocol | `:::warning` admonition           |
| `THREE-TIER ASSESSMENT`                 | Scaling info       | `<details>` collapsible           |
| `SEMESTER CALIBRATION`                  | Instructor info    | `<details>` collapsible           |
| `DOCUSAURUS STRUCTURE`                  | Meta (our use)     | **OMIT entirely**                 |
| Italic text or motivational quote       | Epigraph/tagline   | `> *text*` blockquote             |
| `POST-ASSESSMENT TASK`                  | Assessment task    | `:::info Post-Assessment Task`    |
| `GROWTH MAP TEMPLATE`                   | Growth map         | `<details>` collapsible           |

### Emoji Handling

The source draft uses emojis in pipe-tables. **Remove all emojis** from the output. Replace with text labels:

- `📦` → (remove, the `:::info Your Deliverable` heading is sufficient)
- `🤖` → (remove, the code block title contains "AI Check")
- `🔄` → (remove, Tabs component is self-explanatory)
- `👤` → (remove, `:::tip Solo Learner Alternative` heading is sufficient)
- `🔗` → (remove, `:::note Building On` heading is sufficient)
- `📋` → (remove, `<details>` summary is sufficient)
- `📊` → (remove, `<details>` summary is sufficient)

### MDX Import Rules

Every lesson file that uses Tabs must include the import at the top (after frontmatter):

```mdx
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
```

**DO NOT import** any other components. No Flashcards, no Quiz — these do not apply to Part 0.

---

## 6. Chapter-to-Writer Assignment

| Writer Teammate   | Task ID | Chapters                                                          | Files   | Source Line Range |
| ----------------- | ------- | ----------------------------------------------------------------- | ------- | ----------------- |
| **writer-intro**  | #3      | 01-introduction, 12-thinking-portfolio, 13-instructor-guide       | 8 files | 1-137, 1165-1234  |
| **writer-ch1-2**  | #4      | 02-asking-better-questions, 03-detecting-broken-reasoning         | 8 files | 138-350           |
| **writer-ch3-4**  | #5      | 04-thinking-in-systems, 05-reasoning-from-first-principles        | 8 files | 351-530           |
| **writer-ch5-6**  | #6      | 06-communicating-what-matters, 07-working-with-ai-not-for-ai      | 8 files | 531-720           |
| **writer-ch7-8**  | #7      | 08-reasoning-through-dilemmas, 09-building-something-from-nothing | 8 files | 721-910           |
| **writer-ch9-10** | #8      | 10-deciding-under-uncertainty, 11-learning-how-to-learn           | 8 files | 911-1164          |

### Writer Dependencies

- **writer-intro** has NO dependencies — can start immediately
- **writer-ch1-2** through **writer-ch9-10** depend on:
  1. This architecture spec (for skeleton, frontmatter template, component patterns)
  2. The reference brief (for Part 0 identity, assessment layers, cross-ref patterns)
  3. Their individual writer brief (for specific file paths, source lines, exit criteria)
- All writers can work in parallel once specs are available
- **writer-intro** must create `01-introduction/` files before other writers can finalize `:::note Building On` links (but writers can use placeholder links and fill later)
