---
sidebar_position: 2
title: "The Six-Step Domain Decomposition"
description: "A systematic method for breaking a business domain into FTE roles, data contracts, human gates, and economic participation points"
chapter: 64
lesson: 2
duration_minutes: 25
keywords:
  [
    domain decomposition,
    FTE roles,
    data contracts,
    verification gates,
    human review,
    economic participation,
  ]

skills:
  - name: "Domain Decomposition Method"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Can apply the six-step method to decompose a new business domain into FTE roles"
  - name: "Systematic Design Thinking"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Can explain why each step in the decomposition exists and what it prevents"

learning_objectives:
  - objective: "Name the six steps of Domain Decomposition in order"
    proficiency_level: "A2"
    bloom_level: "Remember"
    assessment_method: "Recall exercise"
  - objective: "Apply the six-step method to decompose a familiar business process"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Domain decomposition exercise"
  - objective: "Explain the difference between a data contract and a type annotation"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Comparison explanation"

cognitive_load:
  new_concepts: 4
  assessment: "Medium. Six steps is substantial, but each step builds on intuition from Chapter 61's HireFlow introduction. Steps 1-3 are intuitive; Steps 4-6 add precision."

differentiation:
  extension_for_advanced: "Apply all six steps to your own business domain. Present the result to Claude Code for critique."
  remedial_for_struggling: "Focus on Steps 1-3 first. Steps 4-6 add precision to what Steps 1-3 establish. You can revisit them after seeing the full template in Lesson 3."
---

# The Six-Step Domain Decomposition

Emma cleared the whiteboard. "You want to turn your wish into a blueprint. Here is the method. Six steps."

She wrote a number 1 at the top left corner.

## Step 1: Name the Domain Workflow

"Before you decompose anything, state the end-to-end workflow in one sentence."

James tried: "HireFlow helps companies hire people."

"That describes your company, not your workflow. Use this structure: 'From [input] to [output] through [stages].'"

James thought for a moment. "From hiring manager requirements to decision-ready candidate briefs through structured screening and evaluation."

"Now everyone who reads this sentence knows three things: what goes IN, what comes OUT, and the general shape of the middle. This sentence is your anchor. Every decision you make in the remaining five steps should serve it."

## Step 2: Identify the Stages

Emma wrote a 2 below the first number. "Break the workflow into 3-5 distinct stages. Each stage has one responsibility. Not two. One."

"I already did this in Chapter 61," James said. "Four FTEs, four stages."

"You named four roles. But did you define their boundaries?"

"What do you mean?"

"What does the Resume Screener NOT do?"

James paused. "It does not generate interview questions."

"Does it validate the job specification before screening?"

"No, that is the Job Spec Writer's job."

"Does it handle candidates who submit incomplete CVs?"

James hesitated. "I think so? Or does the pipeline handle that before the screener sees it?"

"You do not know. That is the boundary problem. If two stages have unclear boundaries, you get three outcomes, all bad." Emma held up three fingers. "Both stages do the work: wasted compute. Neither stage does it: dropped data. Both stages do it differently: inconsistent results."

"So Step 2 is not about naming stages. It is about drawing lines between them."

"Precise lines."

## Step 3: Define Role Specifications

Emma wrote a 3. "For each stage, write a complete **Role Specification**."

"Like a job description," James said.

"For an agent, the job description IS the specification. If it is not in the spec, the agent will not do it. Human employees fill gaps with judgment. Agents fill gaps with nothing."

A role specification has five components:

| Component           | Question It Answers                                      |
| ------------------- | -------------------------------------------------------- |
| **Name**            | What is this FTE called?                                 |
| **Responsibility**  | What does it do, in one sentence?                        |
| **Input Contract**  | What does it receive, and in what format?                |
| **Output Contract** | What does it produce, and in what format?                |
| **Verification**    | How do you confirm the output is correct before handoff? |

James flipped back to his Chapter 61 notes. "You showed four of those for each FTE. But I treated the Verification row as optional."

"Nothing in a role specification is optional. Verification is what turns a chatbot into a Digital FTE. Without it, you have a worker who produces output that nobody checks."

## Step 4: Map Data Contracts

Emma wrote a 4. "This is where most people skip and most factories break."

"I had types in Chapter 61," James said. "`score: int`, `strengths: list[str]`."

"Types tell you WHAT. **Data contracts** tell you WHAT, plus WHEN, plus HOW TO VALIDATE." She drew a comparison on the whiteboard:

| Type Annotation        | Data Contract                                                                   |
| ---------------------- | ------------------------------------------------------------------------------- |
| `score: int`           | `score: int, range 0-100, required, validated before handoff`                   |
| `strengths: list[str]` | `strengths: list[str], min 1 item, each references specific CV content`         |
| `recommendation: str`  | `recommendation: str, one of ["strong_yes", "yes", "maybe", "no", "strong_no"]` |

"Wait, so basically... a type annotation tells the compiler what shape the data has. A data contract tells the next stage in the pipeline what it can rely on."

"And what it should reject. If the Resume Screener produces a score of 150, is that valid?"

"No, the range is 0 to 100."

"Without a contract that states the range, the Interview Question Generator would accept it. It would generate questions for a candidate with an impossible score. The bug would surface in the final brief, three stages later, where it is hardest to debug."

## Step 5: Place Human Review Gates

Emma wrote a 5. "Not every handoff needs a human. But not every handoff should skip one."

James's first instinct was clear. "Put a **Human Review Gate** after every stage. Maximum safety."

"What happens to your throughput when a human reviews every handoff for 200 candidates?"

"It slows down. A lot."

"A human reviewing 200 screening results defeats the purpose of automated screening. The factory exists to handle volume. Human gates should protect decisions, not data."

James pushed back. "But what if the screener makes a bad call on a candidate? Without a human gate, nobody catches it."

"What is the worst case for a single bad screening score?"

"The candidate gets rejected unfairly. Or gets through when they should not have."

"Now compare: what is the worst case for a bad job specification?"

James thought about it. "Every candidate gets screened against the wrong criteria. All 200 evaluations are wrong. The entire pipeline run is wasted."

"So where does the human gate create more value: after the screener, catching one bad score, or after the spec writer, catching one bad spec that poisons everything downstream?"

James sat with this for a moment. He could see it. A bad spec multiplied across every candidate. A bad score affected one person.

"After the spec writer. And at the end, before the hiring committee acts on the briefs."

"Two gates. One at intake, one at output. Not at every stage. Not at no stage. The principle is: protect high-leverage decisions."

## Step 6: Add Economic Participation Points

Emma wrote a 6. "This is the step most developers skip entirely."

"From Chapter 62," James said. "Where agents could acquire resources autonomously."

"Where they COULD, not where they DO. HireFlow does not buy anything today. But you need to record where it might."

"Why bother? If it is not happening now, why plan for it?"

"Because adding an **Economic Participation Point** later means restructuring every data contract at that location. Recording it now costs one line in the blueprint. Adding it later costs a rewrite."

James thought about it. "Wait, so basically... it is like running electrical conduit in the walls before you know where every outlet goes. The conduit costs almost nothing during construction. Adding it after the drywall is up means tearing out walls."

Emma paused. "That is an excellent analogy. I have never put it that way."

James grinned. "See, I do contribute sometimes."

"Noted."

An economic participation point has three fields:

| Field                 | Description                                                 |
| --------------------- | ----------------------------------------------------------- |
| **Location**          | Which FTE and which stage in the pipeline                   |
| **Resource**          | What could be acquired: an API call, a data source, compute |
| **Budget constraint** | What spending envelope applies (from Chapter 62)            |

## The Six Steps Together

Here is the complete method:

| Step | Action                     | What It Prevents                   |
| ---- | -------------------------- | ---------------------------------- |
| 1    | Name the Domain Workflow   | Scope creep                        |
| 2    | Identify the Stages        | Boundary confusion between FTEs    |
| 3    | Define Role Specifications | Ambiguous agent behavior           |
| 4    | Map Data Contracts         | Silent data corruption at handoffs |
| 5    | Place Human Review Gates   | Bottlenecks or reckless automation |
| 6    | Add Economic Participation | Costly architectural retrofits     |

Steps 1-3 define WHAT the factory does. Steps 4-6 define HOW it stays correct, safe, and future-ready.

"In the next lesson," Emma said, "you will see the template that organizes these six steps into a single document: the Factory Blueprint Template."
