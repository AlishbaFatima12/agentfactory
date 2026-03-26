---
sidebar_position: 2
title: "The Transformation Method"
description: "Learn the Extract-Structure-Encode method for systematically converting concept paper sections into agent skill specifications."
chapter: 67
lesson: 2
duration_minutes: 25
keywords:
  [
    transformation method,
    extract,
    structure,
    encode,
    decision logic,
    skill specification,
    domain requirements,
  ]

skills:
  - name: "Applying the Extract Step"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can read a concept paper paragraph and identify specific domain requirements, decisions, and edge cases"

  - name: "Applying the Structure Step"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can convert extracted requirements into When-Do-Because decision logic statements"

  - name: "Applying the Encode Step"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can map decision logic statements to Persona, Questions, and Principles components of a skill specification"

learning_objectives:
  - objective: "Apply the three-step transformation method (Extract, Structure, Encode) to convert one concept paper section into a skill specification"
    proficiency_level: "B2"
    bloom_level: "Apply"
    assessment_method: "Student transforms a concept paper paragraph into structured decision logic and maps it to skill components"

  - objective: "Distinguish between domain requirements, decision points, and edge cases when extracting from prose"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student categorizes extracted items from a concept paper paragraph into the three categories"

  - objective: "Write When-Do-Because statements that encode domain judgment explicitly"
    proficiency_level: "B2"
    bloom_level: "Apply"
    assessment_method: "Student produces decision logic statements that are specific enough for an agent to execute without guessing"

cognitive_load:
  new_concepts: 5
  assessment: "5 concepts (transformation method, Extract step, Structure step, Encode step, When-Do-Because format) within B1-B2 limit"

differentiation:
  extension_for_advanced: "Apply the transformation method to two concept paper sections simultaneously and identify where decision logic overlaps between FTEs (shared rules that belong in multiple skills)."
  remedial_for_struggling: "Focus on Extract only. Practice identifying requirements in one paragraph before moving to Structure. Use the worked example as a template for each step."
---

# The Transformation Method

In Lesson 1, you saw the gap: domain knowledge in a concept paper is not the same as agent intelligence in a skill file. Prose describes how things work. Skills prescribe how agents act.

This lesson teaches the method for crossing that gap. It has three steps: **Extract**, **Structure**, **Encode**. By the end, you will have converted one section of the HireFlow concept paper into the specification for one skill.

## The Problem: Prose is Ambiguous

Emma pulled up the Job Spec Writer section from James's concept paper.

"Read this paragraph aloud," she said.

James read: "The Job Spec Writer transforms hiring manager briefs into structured job descriptions. It should include the role title, team context, key responsibilities, required qualifications, preferred qualifications, and a scoring rubric aligned to the requirements. The output must be professional enough for public posting and detailed enough for the Resume Screener to use as input."

"How many decisions are hiding in that paragraph?"

James counted. "Three? Include the right sections, make it professional, make it detailed enough for the screener."

"I count seven," Emma said. She pulled out a notepad.

```
1. What counts as a "brief"? (Could be two sentences or two pages.)
2. What happens when the brief is too vague? (Does the agent guess or ask?)
3. What sections are required vs. optional?
4. What does "professional enough for public posting" mean concretely?
5. What format does the Resume Screener expect as input?
6. How does the agent build a scoring rubric from requirements?
7. What happens when requirements conflict? ("Must have 10 years experience
   AND be early-career")
```

"Seven decisions," Emma repeated. "And the paragraph answers none of them. It states what should happen. It does not say how to handle the ambiguity."

James stared at the list. "So every paragraph is hiding decisions like this?"

"Every paragraph about what an FTE does, yes. The transformation method finds them."

## Step 1: Extract

The first step reads the concept paper and pulls out three types of items:

**Domain Requirements**: What the agent must do. These are the capabilities described in the concept paper.

**Decision Points**: Where the agent must choose between options. These are the places where the concept paper is ambiguous or implies judgment.

**Edge Cases**: Where normal rules break down. These are the scenarios the concept paper mentions briefly or not at all.

Emma walked James through the extraction on the Job Spec Writer paragraph.

"Start with requirements. What must the agent produce?"

James listed:

- Role title
- Team context
- Key responsibilities
- Required qualifications
- Preferred qualifications
- Scoring rubric aligned to requirements

"Good. Now decision points. Where does the agent need to make a judgment call?"

James thought harder:

- What to do when the brief is vague (guess vs. ask for clarification)
- How to determine which qualifications are required vs. preferred
- How to build a scoring rubric from free-text requirements
- What "professional enough" means in concrete terms

"And edge cases?"

This took longer:

- Brief contains contradictory requirements
- Brief specifies a role that does not exist in standard job taxonomies
- Brief is extremely short (one sentence) or extremely long (multiple pages)
- Brief uses internal jargon the agent does not understand

"That is the Extract step," Emma said. "Read the prose. Ask: what must the agent do, where must it decide, and where do things get weird?"

### The Extraction Template

For any concept paper paragraph, fill in this template:

```
PARAGRAPH: [paste the paragraph]

REQUIREMENTS (what the agent must produce):
1.
2.
3.

DECISION POINTS (where the agent must choose):
1.
2.
3.

EDGE CASES (where normal rules break):
1.
2.
3.
```

Each paragraph typically yields 3-6 requirements, 2-4 decision points, and 2-3 edge cases. If you are finding fewer decision points, you are reading too quickly. If you are finding none, the paragraph may be background context rather than operational content.

## Step 2: Structure

Emma stood up. "I need to check something. Keep going with the next step. I will be back in fifteen minutes."

She left. James looked at his extraction notes. Requirements, decisions, edge cases. The next step was supposed to turn these into something structured. He opened the lesson instructions.

The Structure step converts extracted items into **decision logic statements** using the **When-Do-Because** format:

```
WHEN [situation], DO [action] BECAUSE [reason].
```

Each statement has three parts:

- **When**: The trigger condition. What situation activates this rule?
- **Do**: The action. What should the agent do?
- **Because**: The justification. Why is this the right action?

The "Because" component matters more than it appears. Without it, agents cannot prioritize between conflicting rules. When two rules apply to the same situation, the one with the stronger justification wins.

James tried converting his extracted items:

**From the requirement "scoring rubric aligned to requirements":**

```
WHEN the brief contains specific requirements,
DO create a scoring rubric with one dimension per requirement and
assign each dimension a weight proportional to how often the
requirement appears in the brief,
BECAUSE the Resume Screener needs explicit scoring dimensions to
produce consistent candidate scores.
```

**From the decision point "what to do when the brief is vague":**

```
WHEN the brief contains fewer than three specific requirements,
DO list the requirements you can identify and flag the brief as
"needs clarification" with specific questions for the hiring manager,
BECAUSE guessing requirements produces job descriptions that attract
the wrong candidates and waste the Resume Screener's time.
```

**From the edge case "contradictory requirements":**

```
WHEN the brief contains requirements that conflict (e.g., "10 years
experience" AND "early-career"),
DO flag the contradiction explicitly, present both interpretations,
and ask the hiring manager which one to prioritize,
BECAUSE resolving contradictions is a human judgment call that the
agent should not make autonomously.
```

James looked at his three statements. Each one was specific. Each one told the agent exactly what to do, when to do it, and why. He compared them to the original concept paper paragraph. The paragraph said "transforms briefs into job descriptions." His decision logic statements said how.

When Emma came back, James had converted six of his extracted items into decision logic.

"Show me," she said.

James walked her through them. Emma pointed at the second statement. "Your threshold is 'fewer than three requirements.' Why three?"

"Because..." James paused. "I made that up."

"Good that you noticed. What would be better?"

"I could look at what hiring managers actually send. My concept paper says typical briefs contain five to eight requirements. So 'fewer than three' is probably right as a 'this is suspiciously vague' threshold. But I should say where the number comes from."

"Add that to the Because clause."

James updated:

```
WHEN the brief contains fewer than three specific requirements
(typical briefs contain five to eight),
DO list the requirements you can identify and flag the brief as
"needs clarification" with specific questions,
BECAUSE briefs with fewer than three requirements are unusually vague
and guessing produces job descriptions that attract wrong candidates.
```

"Better," Emma said. "The agent now knows both the rule and the context behind it. If someone adjusts the threshold later, they understand what informed the original choice."

### Common Structuring Mistakes

**Mistake 1: Vague actions**

```
BAD:  WHEN brief is vague, DO handle it appropriately.
GOOD: WHEN brief contains fewer than three requirements, DO flag as
      "needs clarification" with specific questions.
```

"Handle it appropriately" gives the agent no actionable instruction. Specific thresholds and actions produce consistent behavior.

**Mistake 2: Missing the Because**

```
BAD:  WHEN requirements conflict, DO ask the hiring manager.
GOOD: WHEN requirements conflict, DO ask the hiring manager BECAUSE
      resolving contradictions is a human judgment call.
```

Without the Because, the agent does not know why it should ask. It might decide to resolve the conflict itself in a different context. The Because anchors the rule.

**Mistake 3: Compound statements**

```
BAD:  WHEN brief is vague AND requirements conflict AND format is
      unclear, DO flag everything and ask for clarification.

GOOD: Three separate statements, one per condition.
```

Compound statements are hard to prioritize and test. One trigger per statement.

## Step 3: Encode

The third step maps your decision logic statements to the three components of a skill file: **Persona**, **Questions**, and **Principles**.

This mapping is not arbitrary. Each component serves a specific function:

| Component      | Function                                                 | Maps From                                                          |
| -------------- | -------------------------------------------------------- | ------------------------------------------------------------------ |
| **Persona**    | Defines WHO the agent is and WHAT it does                | Requirements (the agent's core capabilities)                       |
| **Questions**  | Defines WHAT the agent analyzes before acting            | Decision points (what the agent must figure out before responding) |
| **Principles** | Defines HOW the agent handles uncertainty and edge cases | Edge cases and rules (the boundaries of acceptable behavior)       |

James looked at his decision logic statements and started mapping.

**Persona** (from requirements):

```
You are a Job Specification Writer for HireFlow. Your role is to
transform hiring manager briefs into structured job descriptions
with six sections: role title, team context, key responsibilities,
required qualifications, preferred qualifications, and a scoring
rubric. Your output must be professional enough for public job
boards and structured enough for the Resume Screener to use as
scoring input.
```

**Questions** (from decision points):

```
1. How many specific requirements does this brief contain?
   (Fewer than three signals a vague brief that needs clarification.)
2. Which qualifications are required vs. preferred? (Look for
   language: "must have" = required, "nice to have" = preferred.)
3. What scoring dimensions emerge from the requirements?
   (Each requirement maps to one scoring dimension.)
4. What seniority level does this role target? (Determines weight
   distribution across scoring dimensions.)
```

**Principles** (from edge cases and rules):

```
1. Never guess missing requirements. If the brief is ambiguous, flag
   it as "needs clarification" with specific questions. The cost of
   a wrong guess (attracting wrong candidates) exceeds the cost of
   asking.
2. Never resolve contradictions autonomously. Present both
   interpretations and let the hiring manager choose.
3. Always produce a scoring rubric with explicit weights. The Resume
   Screener cannot score candidates without numeric dimensions.
```

"That is the Encode step," Emma said. "Requirements become the Persona. Decision points become Questions. Edge cases and rules become Principles."

James looked at the result. "Wait, so basically the transformation method is just reading the concept paper paragraph by paragraph and sorting everything into three buckets?"

"With one critical addition: you are converting description into prescription. The concept paper says 'the Job Spec Writer creates job descriptions.' The skill says 'You are a Job Specification Writer. When you receive a brief with fewer than three requirements, flag it for clarification.' Description tells what should happen. Prescription tells the agent what to do."

## The Complete Transformation Method

Here is the full three-step method, applied to any concept paper section:

```
STEP 1: EXTRACT
Read the concept paper section.
Pull out: Requirements, Decision Points, Edge Cases.

STEP 2: STRUCTURE
Convert each item into a When-Do-Because statement.
One trigger per statement. Specific thresholds. Explicit reasons.

STEP 3: ENCODE
Map statements to skill components:
  Requirements  → Persona  (who the agent is, what it does)
  Decisions     → Questions (what the agent analyzes)
  Edge cases    → Principles (how the agent handles uncertainty)
```

This method is mechanical. It does not require creativity. It requires discipline: reading carefully, asking "where must the agent decide?", and encoding those decisions explicitly.

You will apply this method four times in Lessons 4 through 7, once for each HireFlow FTE skill. Each time, you will receive less guidance, until in Lesson 7 you apply the method independently.

## Applied Exercise

Take your HireFlow concept paper from Chapter 65 (or the concept paper for the domain you chose in Chapter 64's exercise).

Pick one FTE section. Apply the three-step transformation method:

1. **Extract**: Read the section. Fill in the extraction template (requirements, decision points, edge cases).
2. **Structure**: Convert at least four extracted items into When-Do-Because statements.
3. **Encode**: Map your statements to Persona, Questions, and Principles.

Do this on paper or in a text file before using AI. The act of extracting and structuring yourself is the learning. Delegating this to AI defeats the purpose: you would be asking the Incubator to do the work that makes you a competent principal.

## Try With AI

After completing the exercise manually, use these prompts to refine your work.

### Prompt 1: Validate Your Extraction

```
I read this concept paper section:

[Paste your concept paper section]

I extracted these items:

Requirements:
[Your list]

Decision Points:
[Your list]

Edge Cases:
[Your list]

Did I miss any decision points or edge cases? For each one I missed,
explain where in the text it was implied.
```

**What you are learning**: How to improve your extraction skill. The items the AI finds that you missed reveal patterns you will catch faster next time.

### Prompt 2: Sharpen Your Decision Logic

```
I structured these When-Do-Because statements from my extraction:

[Paste your statements]

For each statement:
1. Is the WHEN specific enough? (Could the agent determine
   unambiguously whether this condition is met?)
2. Is the DO actionable? (Could the agent execute this without
   guessing?)
3. Is the BECAUSE informative? (Does it explain why this is the
   right action?)

Rewrite any statement that fails these tests.
```

**What you are learning**: How to write decision logic that agents can execute without interpretation. Vague logic produces inconsistent behavior.

### Prompt 3: Challenge Your Encoding

```
I mapped my decision logic to these skill components:

Persona: [Your persona]
Questions: [Your questions]
Principles: [Your principles]

Challenge this mapping:
1. Is anything in the Persona that should be a Principle instead?
2. Are any Questions actually edge case rules in disguise?
3. Are any Principles too vague to enforce?

Then show me what this would look like as a complete SKILL.md section.
```

**What you are learning**: How to distinguish between what the agent IS (Persona), what the agent ASKS (Questions), and what rules the agent FOLLOWS (Principles). Getting this mapping wrong produces skills that behave inconsistently.
