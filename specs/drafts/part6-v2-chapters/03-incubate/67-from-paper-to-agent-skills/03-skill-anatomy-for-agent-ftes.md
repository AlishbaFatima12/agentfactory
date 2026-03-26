---
sidebar_position: 3
title: "Skill Anatomy for Agent FTEs"
description: "The SKILL.md format crystallized: how Persona, Questions, and Principles create execution skills that encode domain expertise for agent FTEs."
chapter: 67
lesson: 3
duration_minutes: 25
keywords:
  [
    SKILL.md,
    skill anatomy,
    persona,
    questions,
    principles,
    execution skill,
    advisory skill,
    Axiom II,
  ]

skills:
  - name: "Understanding SKILL.md Structure"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Understand"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can explain the three components of a SKILL.md file and how each contributes to agent behavior"

  - name: "Distinguishing Execution from Advisory Skills"
    proficiency_level: "B2"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can analyze a skill file and determine whether it encodes advisory or execution behavior, and justify why Part 6 FTE skills must be execution skills"

  - name: "Connecting Skill Writing to Axiom II"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can explain how SKILL.md files embody Axiom II (Knowledge is Markdown) and why this format enables agent intelligence"

learning_objectives:
  - objective: "Describe the complete SKILL.md structure including YAML frontmatter and Markdown body with Persona, Questions, and Principles"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student produces a correctly structured SKILL.md template from memory"

  - objective: "Explain why FTE skills must be execution skills (not advisory) and identify the structural differences between the two types"
    proficiency_level: "B2"
    bloom_level: "Analyze"
    assessment_method: "Student rewrites an advisory skill persona as an execution skill persona with specific workflow steps"

cognitive_load:
  new_concepts: 5
  assessment: "5 concepts (SKILL.md structure, YAML frontmatter, execution vs advisory skills, Axiom II connection, inter-FTE data contracts) within B1-B2 limit"

differentiation:
  extension_for_advanced: "Design the inter-FTE data contract for all four HireFlow skills. Specify the exact JSON structure each skill outputs and the next skill expects as input."
  remedial_for_struggling: "Focus on one skill type distinction: compare an advisory persona ('You are a recruitment advisor') with an execution persona ('You are a Resume Screener: parse CVs, score dimensions, produce structured output'). Practice rewriting one into the other."
---

# Skill Anatomy for Agent FTEs

In Lessons 1 and 2, you discovered the gap between domain knowledge and agent intelligence, and you learned the transformation method for crossing it. Now we name the structure. What does a skill file actually look like?

## The Format: SKILL.md

James had seen SKILL.md files before. In Part 1, he created a basic skill for Claude Code. But those were advisory skills: they helped Claude give better recommendations. The skills he needs now are different. These skills will make agents act autonomously: write job descriptions, score candidates, generate questions, produce summaries.

"Let me see if I remember the format," James said.

He wrote:

```
.claude/skills/
└── job-spec-writer/
    └── SKILL.md
```

"The skill lives in a directory named after the skill. The directory contains a SKILL.md file with YAML frontmatter at the top and Markdown content below."

"Correct," Emma said. "Show me the frontmatter."

```yaml
---
name: job-spec-writer
description: Transforms hiring manager briefs into structured job descriptions with scoring rubrics for the HireFlow recruitment pipeline.
---
```

"Two required fields," James said. "Name and description. The description is what Claude reads to decide when to invoke the skill."

Emma nodded. "That description is your skill's contract with the orchestrator. If the description is vague, the orchestrator will not know when to use it. If the description is too narrow, it will miss valid use cases."

"Wait, so basically the description is like a job posting for the skill itself? It tells the recruiter, I mean Claude, what this worker can do?"

Emma paused. "That is a better analogy than you realize. The hiring manager writes a brief. The Job Spec Writer turns it into a posting. Claude reads the skill description and decides whether to 'hire' this skill for the task. The description IS the skill's resume."

## The Body: Persona, Questions, Principles

Below the YAML frontmatter, the Markdown body contains the three components you learned to create with the transformation method.

Here is the complete template:

```markdown
---
name: skill-name
description: One clear sentence about what this skill does and when to use it.
---

# Persona

You are a [role] for [system]. Your responsibilities:

1. [Primary action with specific output]
2. [Secondary action with constraints]
3. [Quality assurance step]

# Questions

Before acting, analyze the input by answering:

1. [Analysis question about the input quality/completeness]
2. [Classification question about the input type/category]
3. [Constraint question about what the output must satisfy]
4. [Edge case question about unusual inputs]

# Principles

1. [Behavioral rule]: [specific constraint] because [reason].
2. [Safety rule]: [what to never do] because [consequence].
3. [Quality rule]: [standard to meet] because [downstream dependency].
```

"Three sections," Emma said. "Persona tells the agent who it is and what it does. Questions tell the agent what to figure out before it acts. Principles tell the agent what rules to follow when things get ambiguous."

## Execution Skills vs. Advisory Skills

In Part 1, you built advisory skills. These are important to distinguish from what you are building now.

**Advisory skills** recommend. The human decides.

```markdown
# Persona

You are a recruitment best practices advisor. When asked about
hiring processes, recommend approaches based on industry standards
and explain the tradeoffs.
```

This skill answers questions. It does not write job descriptions, score candidates, or generate interview questions. It advises. The human (or another agent) does the work.

**Execution skills** act. The agent produces output.

```markdown
# Persona

You are the Job Spec Writer for HireFlow. When you receive a hiring
manager brief:

1. Parse the brief to identify role requirements, team context, and
   seniority level.
2. Produce a structured job description with six sections: title,
   team context, responsibilities, required qualifications, preferred
   qualifications, and scoring rubric.
3. Validate that the scoring rubric contains at least three dimensions
   with numeric weights that sum to 1.0.
```

This skill does not advise. It executes. It receives input (a brief), performs a workflow (parse, produce, validate), and delivers output (a structured job description).

Every HireFlow FTE skill must be an execution skill. Advisory skills are useful for learning and exploration. Execution skills are what factories run on.

James looked at both examples. "The execution persona reads like a procedure manual. Step one, step two, step three."

"Because it IS a procedure manual," Emma said. "But for an agent, not a human. The agent reads it and knows exactly what workflow to follow. No interpretation required."

James frowned. "Hold on. Why can't we just use advisory skills for the FTEs? The human reviews everything anyway. The agent recommends, the human decides, the pipeline moves forward."

"Because the pipeline does not pause for human review," Emma said. "The Resume Screener sends structured output to the Interview Question Generator. If the Resume Screener is advisory, it recommends scores instead of producing them. What does the Question Generator receive?"

"It receives the recommendation and... acts on it?"

"Acts on what, exactly? An advisory skill might say: 'I recommend scoring this candidate around 6-7 on technical skills based on their Python experience.' There is no structured dimension score. There is no gap analysis. There is no machine-readable format. It is a paragraph of advice addressed to a human reader."

James tried a second angle. "Okay, but you could standardize the advisory output. Tell the advisory skill to always format its recommendations as JSON. Then the downstream FTE can parse it."

"If you tell the advisory skill to always produce structured JSON with specific fields, specific scoring ranges, and specific validation rules, you have written an execution skill. You just called it advisory." Emma pulled up the advisory persona example from earlier. "Read that persona again. 'Recommend approaches based on industry standards and explain the tradeoffs.' Now imagine the Question Generator receives that output. It gets a paragraph explaining tradeoffs. It needs a list of dimensions with numeric scores and evidence. The format mismatch breaks the pipeline silently. No error, no crash. Just garbage flowing downstream."

James looked at the two personas side by side. The advisory one read like a consultant's summary. The execution one read like a data specification. "So advisory skills are fine when a human is the consumer. But when another agent is the consumer, it needs structured, predictable output."

"Now you see the constraint," Emma said. "FTEs serve other FTEs. Advisory skills serve humans."

"Okay, but here is what I do not understand. If the persona already describes the workflow, what are the Questions and Principles for?"

"Good question." Emma pulled up a diagram:

```
INPUT arrives
    │
    ▼
QUESTIONS analyzed ─── "Is this brief vague or detailed?"
    │                  "What seniority level?"
    │                  "Any contradictions?"
    │
    ▼
PERSONA executes ───── Parse → Produce → Validate
    │
    │  ┌── edge case? ──► PRINCIPLES consulted
    │  │                  "Never guess missing requirements"
    │  │                  "Never resolve contradictions alone"
    │  │                  "Always produce scoring rubric"
    │  └── normal case ──► Continue workflow
    │
    ▼
OUTPUT delivered
```

"Questions come first. The agent analyzes the input before acting. Then the Persona workflow runs. When the workflow encounters ambiguity or edge cases, it consults the Principles for guidance."

"So Questions are the pre-flight checklist," James said. "Principles are the emergency procedures."

Emma paused. "That is actually a better framework than mine. I have been explaining it as 'Questions are analysis, Principles are constraints' for two years. Pre-flight checklist and emergency procedures communicates it faster. I might borrow that."

James blinked. Emma borrowing his framing? That was new.

"The point stands," she continued. "Persona runs the workflow. Questions inspect the input before the workflow starts. Principles intervene when the workflow hits something it was not designed for."

## Knowledge is Markdown (Axiom II)

Notice what you are writing. Not Python. Not JSON. Not a configuration file. Markdown.

This is Axiom II in action: **Knowledge is Markdown**. The agent's domain expertise is encoded in a Markdown file that any human can read, review, and edit. No compilation step. No deployment pipeline. You write a SKILL.md file, save it, and the agent can use it immediately.

This matters because skills evolve. After you test the Job Spec Writer skill in Chapter 68 (simulation), you will discover gaps. You will open the SKILL.md file, add a new Principle, and test again. The iteration cycle is: edit Markdown, test, observe, edit again.

If domain expertise were encoded in compiled code, every change would require a build step. In Markdown, expertise is a living document that grows with your understanding.

## Inter-FTE Data Contracts

There is one more concept to crystallize (in the Chapter 63 sense: specific enough to encode as agent instructions) before you start writing skills: **inter-FTE data contracts**.

Your four HireFlow FTEs form a pipeline:

```
Brief → Job Spec Writer → Resume Screener → Interview Q Generator → Candidate Summarizer → Committee Brief
```

Each FTE receives input from the previous one and produces output for the next one. For this pipeline to work, each FTE must agree on what it receives and what it delivers.

"If the Job Spec Writer produces a job description with no scoring rubric," Emma said, "what happens to the Resume Screener?"

James thought. "It cannot score candidates. It has no dimensions to score against."

"And if the Resume Screener produces scores without explanations, what happens to the Candidate Summarizer?"

"It cannot explain why a candidate scored well or poorly. The committee brief would just say 'Score: 7' with no context."

"That is why inter-FTE data contracts matter. Each skill's Persona must specify its output format. And each skill's Questions must validate that its input matches the expected format from the previous FTE."

Here is the data contract for HireFlow:

| From                  | To                    | Contract (what must be included)                                        |
| --------------------- | --------------------- | ----------------------------------------------------------------------- |
| Hiring Manager        | Job Spec Writer       | Brief with role title, team context, and at least 3 requirements        |
| Job Spec Writer       | Resume Screener       | Structured job description with scoring rubric (dimensions + weights)   |
| Resume Screener       | Interview Q Generator | Candidate scores with per-dimension breakdown and gap analysis          |
| Interview Q Generator | Candidate Summarizer  | Question set with expected answer criteria and difficulty ratings       |
| Candidate Summarizer  | Hiring Committee      | Decision brief with recommendation, supporting evidence, and risk flags |

"Each arrow in the pipeline is a contract," Emma said. "When you write each skill, you encode both sides: what this skill expects as input AND what it promises as output. If the contracts match across all four skills, the pipeline works. If they do not, you get garbage passing through."

James looked at the table. "I have never thought about it this way. Each skill is not just doing its own job. It is also responsible for delivering what the next skill needs."

"Now you are thinking like a systems engineer."

## Applied Exercise

Before moving to Lesson 4, practice the complete anatomy by filling in this template for any one of the four HireFlow FTEs:

```markdown
---
name: [fte-name]
description: [one sentence: what it does and when]
---

# Persona

You are the [Role] for HireFlow. When you receive [input type]:

1. [First step with specific action]
2. [Second step with specific action]
3. [Validation step]

Your output format:

- [Field 1]: [description]
- [Field 2]: [description]
- [Field 3]: [description]

# Questions

Before acting, analyze the input:

1. [Input quality question]
2. [Classification question]
3. [Constraint question]
4. [Edge case detection question]

# Principles

1. [Rule name]: [specific constraint] because [reason].
2. [Rule name]: [specific constraint] because [reason].
3. [Rule name]: [specific constraint] because [reason].
```

Do this on paper. In Lesson 4, you will write the actual Job Spec Writer skill with full guidance. This exercise prepares you by practicing the format.

## Try With AI

### Prompt 1: Advisory vs. Execution Audit

```
Here is a skill persona I wrote:

[Paste your persona from the exercise]

Evaluate this persona:
1. Is it advisory (recommends) or execution (acts)?
2. Does it describe a specific workflow with numbered steps?
3. Does it specify the output format?
4. Would two different agents reading this persona produce the same
   output for the same input?

If anything is advisory rather than execution, rewrite it to be
execution-focused with specific workflow steps.
```

**What you are learning**: How to audit your own skills for specificity. The question "Would two different agents produce the same output?" is the gold standard for execution skills.

### Prompt 2: Data Contract Validation

```
I am building a pipeline with these skills in sequence:

Skill A outputs: [describe output format]
Skill B expects: [describe expected input format]

Compare these formats:
1. Does Skill B's expected input match Skill A's actual output?
2. What fields are missing?
3. What fields are present but in a different format?
4. What would break if Skill A changed its output?

Suggest a data contract that both skills should agree on.
```

**What you are learning**: How to design inter-FTE data contracts that prevent pipeline failures. The contract is the agreement between skills about what data looks like.

### Prompt 3: Skill Anatomy Critique

```
Here is a complete SKILL.md I wrote:

[Paste your full SKILL.md]

Evaluate each section:
1. PERSONA: Does it describe an execution workflow or just a role?
2. QUESTIONS: Are these analysis questions or vague prompts?
3. PRINCIPLES: Are these enforceable rules or vague guidelines?

For each section, rate specificity from 1-5 (1 = vague, 5 = precise
enough that any agent would behave identically). Explain your rating
and suggest improvements for anything below 4.
```

**What you are learning**: How to evaluate skill quality before testing. A skill that scores 4-5 on specificity will produce consistent results. A skill that scores 1-2 will produce variable, unreliable output.
