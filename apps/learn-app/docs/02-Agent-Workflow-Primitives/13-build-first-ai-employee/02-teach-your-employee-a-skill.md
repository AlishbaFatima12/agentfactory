---
sidebar_position: 2
title: "Teach Your Employee a Skill"
description: "Encode your professional expertise into a NanoClaw skill with YAML frontmatter and domain decision rules so your AI employee thinks like a domain expert"
keywords: ["NanoClaw", "SKILL.md", "agent skills", "domain expertise", "YAML frontmatter", "decision rules"]
chapter: 13
lesson: 2
duration_minutes: 40

skills:
  - name: "Skill Authoring"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Create"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can create a complete SKILL.md file with valid YAML frontmatter, structured instruction sections, numbered decision rules, and edge case handling that produces domain-specific agent behavior"

  - name: "Domain Expertise Encoding"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Student can decompose a professional workflow into explicit decision rules, input/output formats, and edge cases that an AI agent follows to produce expert-level output"

learning_objectives:
  - objective: "Create a profession-specific skill with valid YAML frontmatter and structured content"
    proficiency_level: "B1"
    bloom_level: "Create"
    assessment_method: "Student's SKILL.md file passes format validation: directory structure correct, YAML frontmatter contains name and description, content includes numbered decision rules"

  - objective: "Encode domain decision rules into a structured skill format"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Skill contains at least 5 numbered decision rules that reflect genuine professional expertise, not generic instructions"

  - objective: "Test skill invocation and verify domain-specific output"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Student invokes the skill via WhatsApp, provides a realistic input, and documents the output showing domain-specific reasoning rather than generic AI responses"

cognitive_load:
  new_concepts: 6
  assessment: "6 concepts (skill directory structure, YAML frontmatter, decision rules, input/output format, edge cases, skill invocation) within B1 range of 7-10"

differentiation:
  extension_for_advanced: "Create a second skill that depends on the first (e.g., invoice-reviewer feeds into monthly-summary), demonstrating skill composition within NanoClaw"
  remedial_for_struggling: "Start with 3 decision rules instead of 5, test the skill, then add rules incrementally based on where the output falls short"
---

# Teach Your Employee a Skill

In the previous lesson, you gave your employee an identity. It knows who it is, what rules to follow, and where its boundaries are. But send it a real professional task and you will notice something: it responds with general knowledge, not expert judgment.

Ask an accountant-employee to review an invoice and it gives you a generic checklist. Ask a teacher-employee to plan a lesson and it produces something any search engine could generate. The identity tells the employee WHO it is. A skill tells it HOW to think about specific tasks -- the decision rules, the things to check, the edge cases that separate a professional from an amateur.

This lesson's challenge: encode your most valuable professional expertise into a skill that makes your employee think like a domain expert, not a well-read generalist.

## The Challenge

Create a custom skill for your AI employee that encodes your professional decision-making process. When invoked, this skill should produce output that demonstrates domain-specific reasoning -- the kind of analysis that requires years of experience, not just factual knowledge.

## Acceptance Criteria

1. A custom `SKILL.md` exists at `.claude/skills/your-skill-name/SKILL.md` with valid YAML frontmatter
2. The skill is invocable via `/your-skill-name` from WhatsApp
3. The agent demonstrates domain-specific reasoning when the skill is used (not generic AI output)
4. At least 5 domain decision rules are encoded in the skill

## Use Case Gallery

Here is what a well-crafted domain skill looks like for four professions. Notice how each skill encodes the DECISIONS an expert makes, not just the STEPS they follow.

**Accountant: `/invoice-reviewer`**

Reviews incoming invoices against a decision framework: checks for required fields (vendor name, date, line items, tax ID), validates tax calculations against applicable rates, flags amounts that deviate more than 15% from historical averages for that vendor, verifies payment terms match the vendor agreement on file, and rejects any invoice missing a purchase order number for amounts over $500.

**Teacher: `/lesson-planner`**

Plans lesson activities using a curriculum alignment framework: maps each activity to a specific learning standard, balances activity types (direct instruction, collaborative, independent practice) across a 45-minute block, checks that prerequisite skills from prior lessons are covered, flags any lesson that introduces more than 3 new concepts for the grade level, and suggests differentiation modifications for advanced and struggling students.

**Recruiter: `/resume-screener`**

Screens resumes against job requirements using a structured evaluation: matches required skills against listed experience (not just keyword matching -- looks for demonstrated application), flags employment gaps longer than 6 months for follow-up questions, identifies transferable skills from adjacent industries, scores culture-fit indicators based on the company values document, and generates 3 targeted interview questions based on resume gaps or claims that need verification.

**Consultant: `/proposal-builder`**

Structures project proposals using a client-ready framework: breaks the engagement into phased deliverables with dependencies, estimates effort using the firm's standard complexity multipliers, identifies the top 3 project risks with mitigation strategies, includes a "not included" section to prevent scope creep, and flags any deliverable that requires skills outside the team's current capacity.

## Hints

<details>
<summary>Level 1: Where to Look</summary>

Read an existing skill in your NanoClaw installation's `.claude/skills/` directory. What YAML fields does the frontmatter contain? How is the instruction section structured? Your skill follows the same format but with your profession's decision logic.

The key fields in the YAML frontmatter are `name` and `description`. The description should start with what the skill does and when to use it.

</details>

<details>
<summary>Level 2: What to Ask Your AI</summary>

Use this prompt with Claude Code to extract your domain expertise:

```
I am a [profession] and I need to encode my expertise into an AI skill.

When I [specific task your skill handles], here is my mental process:
- First I check [what you look at first]
- Then I evaluate [what you assess next]
- I flag anything that [your red flag conditions]
- My output includes [what you deliver]

Based on this, what are the 7 most important decision rules I use?
For each rule, express it as: "IF [condition] THEN [action] BECAUSE [reason]"

Focus on the decisions that require EXPERIENCE, not just knowledge.
A new graduate would miss these. An expert would catch them instantly.
```

Review the output against your actual practice. The AI will generate reasonable rules, but you will notice gaps where your real expertise differs from textbook knowledge. Those gaps are the most valuable rules to add.

</details>

<details>
<summary>Level 3: Structure Guide</summary>

Your skill lives at `.claude/skills/your-skill-name/SKILL.md` (directory, not flat file). Here is the structure:

**YAML Frontmatter** (required):

```yaml
---
name: "your-skill-name"
description: "This skill should be used when [trigger condition]. It [what it does] by [how it works]."
---
```

**Content sections**:

1. **Title and purpose** -- One sentence: what this skill does and why it matters
2. **When to use** -- The trigger conditions (what kind of message or request activates this skill)
3. **Decision rules** -- Numbered list of at least 5 rules in the format: check, evaluate, decide, act. These are the core of your skill.
4. **Input format** -- What information the skill expects (what the user should provide in their message)
5. **Output format** -- What the skill produces (the structure of the response)
6. **Edge cases** -- At least 3 situations where the standard rules do not apply and what to do instead

Test the skill by sending a realistic message via WhatsApp that triggers it. Compare the output to what you would produce manually. Where they differ, adjust your decision rules.

</details>

## Try With AI

### Prompt 1: Extract Your Decision Rules

```
I am a [profession]. My most valuable skill is [the task this skill handles].

Interview me to extract my decision rules. Ask me these questions one at a time:

1. When you start [this task], what is the FIRST thing you check and why?
2. What are the top 3 things that would make you reject or flag the input?
3. What shortcuts do beginners take that cause problems later?
4. What is the most common edge case that catches people off guard?
5. If you could only teach someone 5 rules about [this task], what would they be?

After my answers, synthesize them into a numbered decision rules list
formatted as: "Rule N: [Action] when [condition] because [reason]"
```

**What you are learning:** Expert knowledge extraction. The hardest part of building AI skills is not the file format -- it is articulating what you know implicitly. Professionals make dozens of micro-decisions per task without conscious thought. This structured interview forces those decisions to the surface so they can be encoded. This is the same process knowledge engineers use when building expert systems.

### Prompt 2: Build the SKILL.md File

```
Based on these decision rules for my [profession] skill called [skill-name]:
[paste your decision rules from Prompt 1]

Create a complete SKILL.md file with:
- YAML frontmatter (name and description fields)
- A clear "When to Use" section
- My decision rules formatted as a numbered list
- An input format section (what information users should provide)
- An output format section (how the skill structures its response)
- An edge cases section with at least 3 exceptions to the standard rules

The description should start with "This skill should be used when..."
Make the decision rules specific enough that the output would pass review
by another professional in my field.
```

**What you are learning:** Structured knowledge packaging. You are learning to convert informal expertise into a reusable, testable format. This is the same skill that separates organizations that scale from those that stay dependent on individual experts. When your knowledge lives in a SKILL.md, it works even when you are asleep.

### Prompt 3: Evaluate Your Skill Quality

```
Here is my SKILL.md for [skill-name]:
[paste your complete SKILL.md]

Evaluate this skill by simulating 3 realistic inputs:

1. A straightforward case that should work perfectly
2. An edge case that tests the boundary of my rules
3. A deliberately tricky input that should trigger a flag or refusal

For each input, show:
- The input message a user would send
- How the skill would process it using my decision rules
- The expected output
- Whether the output is correct for my profession

Then identify: which decision rule is weakest? What input would expose
a gap in my rules?
```

**What you are learning:** Skill validation through simulation. Before deploying any AI system to production, you test it against realistic scenarios including edge cases and adversarial inputs. This prompt teaches you to think about failure modes before they happen in real conversations, which is a core quality assurance practice in AI system development.

## Flashcards Study Aid

<Flashcards />
