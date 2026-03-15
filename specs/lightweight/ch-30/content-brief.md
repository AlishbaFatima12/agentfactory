# Ch 19 Content Generation Brief

Reference for all content-implementer subagents generating Ch 19 lessons.

## Quality Baseline: Ch 17 Pattern

### README Pattern

- YAML frontmatter: `sidebar_position`, `title`, `description`, `chapter_number`, `part_number`, `version`, `status`
- Opening epigraph quote (italicized)
- Context paragraph connecting to previous chapter
- "What You'll Learn" bullet list
- "Lesson Flow" table: Lesson | Title | Duration | What You'll Walk Away With
- "Chapter Contract" — 5 key questions students should be able to answer
- "After Chapter 17" reflection section
- Link to first lesson

### Lesson YAML Frontmatter (MANDATORY — every field)

```yaml
---
sidebar_position: X
title: "..."
description: "..."
keywords: [...]
chapter: 19
lesson: X
duration_minutes: X

# HIDDEN SKILLS METADATA
skills:
  - name: "Skill Name"
    proficiency_level: "A2|B1" # Ch 19 range
    category: "Conceptual|Technical|Applied"
    bloom_level: "Understand|Apply|Analyze"
    digcomp_area: "..."
    measurable_at_this_level: "..."

learning_objectives:
  - objective: "..."
    proficiency_level: "..."
    bloom_level: "..."
    assessment_method: "..."

cognitive_load:
  new_concepts: X
  concepts_list: [...]
  assessment: "..."

differentiation:
  extension_for_advanced: "..."
  remedial_for_struggling: "..."

teaching_guide:
  lesson_type: "core|lab|capstone"
  session_group: X
  session_title: "..."
  key_points: [...]
  misconceptions: [...]
  discussion_prompts: [...]
  teaching_tips: [...]
  assessment_checks:
    - question: "..."
      expected_response: "..."
---
```

### Lesson Body Structure

1. **Narrative opening** — epigraph quote (italicized) + 2-3 paragraph hook
2. **Core content sections** — concept boxes (:::info), comparison tables, architecture explanations
3. **Inline exercise** (if applicable) — numbered, with time estimate, step-by-step instructions
4. **Global Perspective callout** (:::tip) — IFRS/US GAAP/UK equivalents
5. **"Try With AI" section** — exactly 3 prompts, each in code block + "What you are learning:" explanation
6. **`<Flashcards />`** component
7. **Navigation link** — "Continue to [Lesson X: Title →](./XX-slug.md)"

### Concept Box Format

```markdown
:::info Concept Name
Content explaining the concept in accessible terms.
Key terms bolded. Real-world analogy if helpful.
:::
```

### Global Perspective Callout Format

```markdown
:::tip Global Perspective
**IFRS**: [how this works under IFRS]
**US GAAP / IRC**: [US equivalent]
**UK FRS / HMRC**: [UK equivalent]
:::
```

### Exercise Format (Inline)

```markdown
### Practice Exercise X: Title (XX min)

**What you'll build:** One-sentence summary.

**Requirements:** Cowork with [specific plugins] installed.

1. Step one — specific instruction
2. Step two — specific instruction
3. ...

**Check your work:** How to verify success.
```

### Practice Lab Format (L11-L14)

- Multiple exercises per lesson (3-4)
- Each exercise is self-contained with its own time estimate
- "Lab format — students choose 1-2 exercises to complete fully, review all four"
- Downloadable data files referenced

### Security/Warning Boxes

```markdown
:::warning Title
Content about risks or important caveats.
:::
```

### Plugin Availability Disclaimer (L07 specifically)

Include: "Plugin commands and installation steps shown here reflect the current Cowork ecosystem. Check the plugin repository for the latest version before installing."

## Ch 19 Specific Requirements

### Pakistan-Primary Pattern

- All worked examples: PKR, Pakistan regulations (ITO 2001, SECP, FBR, SBP)
- Every jurisdiction-specific lesson gets a Global Perspective callout
- Never present Pakistan as the only option

### Proficiency Range

- L01-L06 (domain analysis): A2-B1
- L07-L08 (plugins/workflows): B1
- L09-L10 (extensions): B1
- L11-L14 (practice labs): B1-B2
- L15-L16 (capstones): B2

### Source Material

- Governing artifact: `specs/lightweight/ch-30/governing-artifact.md`
- CSV data: `specs/lightweight/ch-30/Impact of AI on CA Practice Areas - CA Domains AI Impact.csv`
- Chapter plan: `specs/lightweight/ch-30/plan.md`

### File Naming Convention

```
01-the-most-consequential-ai-transformation.md
02-domain-accounting-financial-reporting.md
03-domain-tax-non-assurance-advisory.md
04-domain-assurance-services.md
05-domain-management-accounting.md
06-domain-grc-advisory.md
07-ca-cpa-plugin-ecosystem.md
08-cowork-workflows-ca-cpa.md
09-jurisdiction-entity-extensions.md
10-methodology-compliance-extensions.md
11-accounting-reporting-practice-lab.md
12-tax-advisory-practice-lab.md
13-assurance-practice-lab.md
14-management-accounting-grc-practice-lab.md
15-cross-domain-capstones.md
16-full-practice-deployment-reflection.md
```

### Quiz Format (in L16)

Uses `<Quiz>` component — same format as Ch 17 `13-chapter-quiz.md`:

```jsx
<Quiz
  title="Chapter 19: AI Transformation of CA/CPA Practice Areas"
  questions={[
    {
      question: "...",
      options: ["A", "B", "C", "D"],
      correctOption: 0,
      explanation: "...",
      source: "Lesson X",
    },
    // ~15 questions
  ]}
/>
```
