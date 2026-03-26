---
sidebar_position: 2
title: "From Paper to Quiz"
description: "How to generate a comprehensive domain mastery quiz from your concept paper across three dimensions: facts, edge cases, and judgment calls."
chapter: 66
lesson: 2
duration_minutes: 20
keywords:
  [
    domain-mastery,
    fact-questions,
    edge-case-questions,
    judgment-call-questions,
    mastery-quiz,
    recruitment,
    quiz-generation,
  ]

skills:
  - name: "Quiz Dimension Classification"
    proficiency_level: "B1"
    category: "Conceptual"
    bloom_level: "Apply"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Can classify a domain question as fact, edge case, or judgment call and explain why"
  - name: "Mastery Question Design"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Can transform a surface-level domain question into one that tests genuine mastery"

learning_objectives:
  - objective: "Define and distinguish the three quiz dimensions: fact questions, edge-case questions, and judgment-call questions"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Classification exercise in applied exercise lesson"
  - objective: "Generate mastery-level questions from a concept paper using the five-step quiz generation process"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Quiz generation exercise in Lesson 4"
  - objective: "Evaluate whether a question tests surface recall or genuine domain mastery"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Question improvement exercise in guided discovery"

cognitive_load:
  new_concepts: 4
  assessment: "Moderate. Three new terms (fact questions, edge-case questions, judgment-call questions) plus the quiz generation process. Concrete HireFlow examples ground each abstraction."

differentiation:
  extension_for_advanced: "Generate five mastery questions for a domain you know well outside recruitment. Compare the difficulty of writing edge-case questions in a domain you understand deeply versus one you know casually."
  remedial_for_struggling: "Focus on the distinction between the three question types. If you can sort ten questions into the correct categories, you have the foundation for this lesson."
---

# From Paper to Quiz

"Start with what you have," Emma said. She pulled up James's HireFlow concept paper on the shared screen. "Your concept paper has four FTE specifications, a pipeline diagram, and twelve pages of domain analysis. That is your raw material."

"For what?"

"For building the quiz that tests whether you actually know this domain."

James frowned. "Can I not just have Claude quiz me? It knows recruitment. It can ask hard questions."

"It can ask questions that sound hard. Whether they test the right things is a separate problem."

## Why AI-Generated Quizzes Are Not Enough

"Here is what happens when you tell Claude to quiz you on recruitment," Emma said. "Try it."

James typed a prompt: _Give me five hard questions about recruitment._ The response came back:

1. What are the five stages of a typical recruitment pipeline?
2. How does applicant tracking software improve hiring efficiency?
3. What is the difference between active and passive recruiting?
4. Name three metrics used to measure recruitment effectiveness.
5. What role does employer branding play in talent acquisition?

James scanned the list. "These are fine. I can answer most of them."

"That is the problem. You _can_ answer them. These are textbook recall questions. A person who read one article about recruitment could answer them. They do not test whether you can supervise a Resume Screener that encounters a candidate with three degrees, two career pivots, and a six-month gap between jobs two and three."

"So the quiz quality matters as much as my score."

"More. A bad quiz gives you false confidence. You score ninety percent and walk away thinking you are ready. Then your agent encounters its first edge case and you cannot tell whether its output is correct."

## Three Dimensions of Domain Knowledge

Emma drew three columns on the whiteboard and labeled them.

"Every domain has three layers of knowledge. Your quiz needs to test all three."

The first column: **Fact Questions**. These are verifiable claims about the domain. They have right and wrong answers. "What are the five standard stages of a recruitment pipeline?" is a fact question. You can look up the answer. You can verify it against published sources. Fact questions test whether you know the terrain.

The second column: **Edge-Case Questions**. These are unusual situations that require domain judgment. "A candidate submits a 200-page research portfolio instead of a two-page CV. What should the Resume Screener do?" There is no textbook answer. The right response depends on the role, the industry, and the company's hiring philosophy. Edge-case questions test whether you can navigate terrain that the map does not cover.

The third column: **Judgment-Call Questions**. These are situations where reasonable people disagree. "A candidate has perfect technical scores but no evidence of teamwork. Recommend, flag, or reject?" There is no single correct answer. The value is in your reasoning, not your conclusion. Judgment-call questions test whether you can think through a domain decision when the evidence is ambiguous.

"Wait, so basically the three types are: stuff I can look up, stuff I need experience to handle, and stuff that requires actual wisdom?"

"That is a reasonable summary." Emma tapped the whiteboard. "Now think about which type your agents will struggle with most."

James considered. "Fact questions are easy for agents. They are good at recall. Edge cases are harder because the agent needs to recognize that the situation is unusual. Judgment calls are the hardest because there is no right answer to optimize toward."

"And which type did your concept paper cover most thoroughly?"

James winced. "Facts. The pipeline stages. The FTE specifications. The input and output formats."

"Right. Your paper is strong on facts, thin on edge cases, and silent on judgment calls. That is not a criticism. That is the normal shape of a concept paper. It describes what should happen. It does not describe what to do when things go sideways."

## The Quiz Generation Process

Emma erased the whiteboard and wrote five numbered steps.

"Here is how you turn your concept paper into a quiz that actually tests mastery."

**Step one: extract key claims.** Read through your concept paper and list every factual claim it makes. James's paper contains claims like "the Resume Screener produces a scored candidate profile with match percentage and flagged gaps." Each claim becomes raw material for at least one question.

**Step two: generate fact and edge-case question pairs.** For each claim, write one fact question and one edge-case question. The fact question tests whether you know the claim. The edge-case question tests what happens when the claim meets reality.

James tried it with the Resume Screener specification:

- **Fact**: What output does the Resume Screener produce?
- **Edge case**: The Resume Screener receives a CV written entirely in bullet points with no dates, no company names, and no job titles. What should it produce?

"Good," Emma said. "The fact question confirms you know the spec. The edge-case question confirms you know what to do when the spec does not cover the input."

**Step three: identify decision points.** Look at every place in your pipeline where an agent must choose between options. Each decision point generates a judgment-call question.

James found one immediately: the Resume Screener decides whether a candidate passes the threshold for the Interview Question Generator. "What if a candidate scores 68% overall but 95% on the single most important requirement? Does the screener pass them through or reject them?"

"Now you are asking the right questions," Emma said. "That is a judgment call. There is no formula that resolves it. Your hiring philosophy determines the answer."

**Step four: evaluate question quality.** This is where most people stop too early. Read each question and ask: could someone answer this after reading a single blog post about recruitment?

"If yes, the question is too easy. If no, you are testing actual mastery."

**Step five: refine weak questions.** This is the step that separates a useful quiz from a checkbox exercise.

Emma pointed at James's earlier attempt. "Your AI-generated question was: 'What does a Resume Screener do?' That is a fact question at the recall level. It tests whether you read the spec."

She rewrote it: "A Resume Screener receives two candidates with identical technical scores. Candidate A has ten years of experience in a declining technology. Candidate B has two years in the technology your job spec requires. How should the screener differentiate them, and what metadata should it pass to the Interview Question Generator?"

James read the revised version. "That tests whether I understand how the screener's output feeds the next stage. The first version only tests whether I read the label on the box."

"Notice that the improved question spans two FTEs. It requires you to understand the Resume Screener's logic and the Interview Question Generator's input requirements. That is a mastery question. It tests the seams between components, not just the components themselves."

## James Tries It Alone

"Generate ten questions from your concept paper," Emma said. "I will be back in fifteen minutes."

James opened his concept paper and started with the Job Spec Writer FTE. His first three questions:

1. What inputs does the Job Spec Writer accept? (fact)
2. A hiring manager submits a brief that says "I need someone good with computers." What additional information should the Job Spec Writer request? (edge case)
3. The Job Spec Writer produces a job description that the hiring manager says is too formal for their startup culture. Should the writer adjust its tone or maintain professional standards? (judgment call)

He moved to the Resume Screener. After ten minutes he had eight questions. He read through them.

They were too easy.

Question four was: "What score threshold should the Resume Screener use for passing candidates?" James knew the answer because he had written it in his concept paper. That was recall, not mastery.

He rewrote it: "The hiring manager sets a threshold of 75%. After screening fifty candidates, only three pass. The hiring manager asks you to lower the threshold to 60%. What are the risks? Should the screener comply, push back, or escalate?"

Better. That question tested whether he understood the downstream consequences of threshold changes, not just the threshold value.

James looked at his full list. Something nagged at him. Every question targeted a single FTE in isolation. But the concept paper described a pipeline where each FTE's output fed the next. The hardest failures would not happen inside one FTE. They would happen at the handoff points, where two FTEs disagreed about a candidate or where one FTE's assumptions clashed with the next FTE's input requirements.

He wrote a new question: "The Resume Screener passes a candidate with a 78% match score. The Interview Question Generator, using the same job spec, produces questions that assume the candidate has skills the screener's match score says they lack. Which FTE's assessment takes priority, and what should the system do about the contradiction?"

That was harder than anything else on his list. It tested the seams between components, not just the components themselves.

Emma returned and read his questions. She stopped at the pipeline question. "Where did this one come from?"

"I realized all my other questions test individual FTEs. The hardest problems happen when two FTEs disagree."

Emma set down the paper. "That is exactly right. Most people miss the seam questions entirely. They test each component in isolation and declare themselves ready. Then the pipeline produces contradictions they never anticipated."

She picked up the rest of his list. "Seven are strong. Three are still surface-level. Can you tell which three?"

James looked again. Questions one, five, and nine. All fact questions that tested spec recall.

"How do I make fact questions harder?"

"You cannot. Fact questions test recall. They are supposed to be straightforward. The trick is not making them harder. The trick is making sure they are only a third of your quiz. If your quiz is mostly fact questions, it is testing your memory, not your mastery."

:::tip Key Insight
The three quiz dimensions test different things. **Fact questions** test whether you know the domain's structure. **Edge-case questions** test whether you can handle what the structure does not cover. **Judgment-call questions** test whether you can reason through ambiguity. A quiz that only tests one dimension gives you a false picture of your readiness.
:::

## What Comes Next

James had twelve questions. Some good, some still needing work. But the process was becoming clear: start with your concept paper, extract claims and decision points, generate questions across all three dimensions, then evaluate whether each question tests recall or mastery.

In the next lesson, James and Emma formalize this into a repeatable pattern: the Domain Mastery Gate. The five steps become a protocol. The scoring becomes a threshold. The remediation becomes a loop. The informal quiz-building exercise becomes a quality gate that separates the Explore phase from the Incubate phase.
