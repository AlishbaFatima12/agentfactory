---
sidebar_position: 2
title: "The 10-80-10 Rule"
description: "The three-segment method for writing a concept paper: research, domain knowledge, and AI validation."
chapter: 65
lesson: 2
duration_minutes: 20
keywords:
  [
    10-80-10 rule,
    concept paper,
    research,
    domain knowledge,
    AI validation,
    frontier LLM,
  ]

skills:
  - name: "10-80-10 Concept Paper Method"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Can identify which segment (research, domain knowledge, or AI validation) a given activity belongs to"
  - name: "AI-Assisted Validation"
    proficiency_level: "A2"
    category: "Technical"
    bloom_level: "Understand"
    digcomp_area: "Problem Solving"
    measurable_at_this_level: "Can explain why AI validation comes last, not first"

learning_objectives:
  - objective: "Describe the three segments of the 10-80-10 Rule and the purpose of each"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Segment identification exercise"
  - objective: "Explain why the 80% segment uses existing domain knowledge rather than AI-generated content"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Guided Discovery dialogue analysis"
  - objective: "Map the Factory Blueprint to the 80% segment of the concept paper"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Blueprint-to-paper mapping"

cognitive_load:
  new_concepts: 3
  assessment: "Moderate. Introduces the 10-80-10 structure with three distinct concepts. Anchored by the familiar blueprint."

differentiation:
  extension_for_advanced: "Compare the 10-80-10 Rule to other validation frameworks: lean startup's Build-Measure-Learn, design thinking's Prototype-Test. Where do they converge?"
  remedial_for_struggling: "Focus on the single insight: the blueprint IS the 80%. The concept paper adds 10% on each side."
---

# The 10-80-10 Rule

Emma picked up a marker and drew a horizontal bar on the whiteboard. She divided it into three segments:

```
|---10%---|----------80%----------|---10%---|
  Research   Domain Knowledge      AI Validation
```

"This is how you write a concept paper that earns the right to proceed."

James looked at the bar. "Ten percent research? That seems low."

"That is the point. The research is not a literature review. It is a targeted investigation of what you do not know. Specific gaps." She tapped the first segment. "You are not researching recruitment from scratch. You already built a blueprint. You know the domain. The ten percent is for the things you are NOT sure about."

## The First Ten Percent: Research

"Think about your HireFlow blueprint," Emma said. "What are you not sure about?"

James pulled up the blueprint on his screen and scrolled through it. "The scoring model, like you said. Whether binary matching works for technical roles."

"Good. What else?"

"The Resume Screener assumes CVs come in as text. But in real recruitment, CVs arrive as PDFs, Word docs, sometimes images. I don't know what format handling actually looks like at scale."

"What else?"

James scanned the data contracts. "The handoff between the Interview Question Generator and the Candidate Summarizer. I wrote that the Generator produces 'structured interview guides.' But I've never actually seen a structured interview guide for a technical role. I based that section on how my old company did operations interviews."

Emma nodded. "Three gaps. Those are your research targets. The first ten percent is not 'learn everything about recruitment.' It is: 'answer these three specific questions.'"

She wrote on the whiteboard:

**The First 10%: Targeted Research**

1. Identify 3-5 assumptions in your blueprint that you cannot defend with evidence
2. For each assumption, find one credible source that confirms or challenges it
3. Record what you learned and how it changes your understanding

"Where do I find credible sources?" James asked.

"Industry reports. Published case studies. Job postings that show real scoring criteria. Conversations with recruiters if you can get them." She paused. "Not AI. Not yet. The research segment is human research. You need to know what the domain actually looks like before you ask an AI to evaluate your understanding of it."

"Why not start with AI? I could ask Claude to list the top ten challenges in AI-powered recruitment and get the research done in two minutes."

"And you would get a polished, confident, generic answer. You would not know which parts apply to your factory and which do not. You would not know which claims are outdated. You would not be able to evaluate the AI's response because you have not done the work of understanding the domain yourself."

James thought about it. "Wait, so basically the research has to come first because it gives me the ability to judge what the AI says later?"

"Exactly. The research teaches you enough to be a competent evaluator. Without it, you are outsourcing judgment to a machine that does not know your context."

## The Eighty Percent: Domain Knowledge

Emma tapped the middle segment. "This is the largest part, and it is the part you already have."

"The blueprint."

"The blueprint. Your four FTE role specifications. Your data contracts. Your workflow map. Your human review gates. Your success criteria. This is not AI-generated content. This is YOUR understanding of the domain, structured formally in Chapter 64."

She drew an arrow from the word "Blueprint" up to the 80% segment.

"The concept paper's body is the blueprint, reframed. The blueprint says 'the Resume Screener takes CVs and produces scored profiles.' The concept paper says 'technical hiring at scale requires automated CV screening because human reviewers cannot maintain consistent scoring across 200+ applications per role. The Resume Screener addresses this by producing scored profiles against a rubric derived from the job specification.'"

James picked up the distinction. "Same content. Different framing. The blueprint states what happens. The concept paper argues WHY it should happen."

"And backs the argument with the research from the first ten percent." Emma drew connecting arrows between all three segments. "The first ten percent gives you evidence. The eighty percent gives you substance. The last ten percent gives you validation."

## The Last Ten Percent: AI Validation

"Now we bring in AI," Emma said. She tapped the final segment. "The last ten percent is not 'ask AI to write the paper.' It is: 'ask AI to attack the paper.'"

James raised an eyebrow. "Attack it?"

"Give the complete concept paper to a frontier LLM. Ask it to find weaknesses. Ask it to challenge assumptions. Ask it to identify gaps you missed."

She wrote on the whiteboard:

**The Last 10%: AI Validation**

1. Submit the complete concept paper to a frontier LLM
2. Ask: "What are the three weakest assumptions in this document?"
3. Ask: "What domain knowledge is missing that would strengthen this paper?"
4. Ask: "Where does this paper contradict standard industry practice?"
5. Revise based on substantive feedback. Ignore stylistic suggestions.

"Why at the end?" James asked. "Why not use AI throughout the whole process?"

"Because the eighty percent has to be YOURS. If you write the concept paper with AI from the start, you end up with a document you cannot defend. Someone asks you 'why did you design the scoring model this way?' and your honest answer is 'Claude suggested it.' That is not understanding. That is outsourcing."

She sat down. "The concept paper is a persuasion document. You cannot persuade anyone of something you do not understand yourself. The eighty percent forces you to understand. The ten percent at the end sharpens what you wrote."

## The Ratio Is Not Arbitrary

James looked at the bar again. "Why 10-80-10 specifically? Why not 30-40-30?"

"Because the ratio encodes a principle: the person writing the concept paper must do most of the intellectual work." Emma leaned forward. "Thirty percent research means you are learning the domain from scratch. That is a different activity. It means your blueprint was premature. Thirty percent AI validation means the AI is doing the thinking. You are reviewing its work instead of the other way around."

She drew two more bars for comparison:

```
|----30%----|----40%----|----30%----|
 Heavy research  Thin domain  Heavy AI
 ↑ You don't know the domain yet

|---10%---|----------80%----------|---10%---|
 Targeted   Deep domain knowledge  Sharpening
 ↑ You know the domain. You're validating it.
```

"If you genuinely need thirty percent research, go back to Phase 1 of the Maturity Model. You are not ready for a concept paper. You are still exploring."

James nodded slowly. "So the ratio is also a diagnostic. If I can't fill the eighty percent from my blueprint, I don't know the domain well enough."

"Now you understand why the blueprint comes first."

## The Three Segments at a Glance

| Segment              | Time Share | Input                        | Activity                                                  | Output                                    |
| -------------------- | ---------- | ---------------------------- | --------------------------------------------------------- | ----------------------------------------- |
| **Research**         | 10%        | Blueprint assumptions        | Targeted investigation of 3-5 gaps                        | Evidence that confirms or revises gaps    |
| **Domain Knowledge** | 80%        | Factory Blueprint (Ch 64)    | Reframe blueprint as argument with evidence               | Concept paper body                        |
| **AI Validation**    | 10%        | Complete concept paper draft | Frontier LLM challenges assumptions, finds missing pieces | Revised concept paper with addressed gaps |

"One more thing," Emma said. "The concept paper is not a one-pass document. You write a draft using the 10-80-10 structure. Then you loop: submit to AI, revise, submit again. Each loop tightens the paper. You keep looping until the AI's feedback shifts from substance to style. That shift is the signal that the paper is ready."

James thought about his old job. "That's like the supplier approval process. You submit a proposal. The review board sends it back with questions. You revise and resubmit. Eventually the questions stop being about the substance and start being about the formatting. That's when you know you're approved."

Emma almost smiled. "That is a very good analogy."

## What Comes Next

The 10-80-10 Rule gives you the structure. But one LLM reviewing your paper catches one set of blind spots. In the next lesson, you learn the **Multi-LLM Exploration** method: using multiple frontier models as an advisory board, each bringing a different perspective. And you learn the number that tells you when the paper is done.
