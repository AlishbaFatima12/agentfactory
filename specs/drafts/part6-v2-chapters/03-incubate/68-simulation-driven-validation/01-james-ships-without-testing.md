---
sidebar_position: 1
title: "James Ships Without Testing"
description: "James wants to skip simulation and wire his skills to MCP servers. Emma asks one question that stops him cold."
chapter: 68
lesson: 1
duration_minutes: 15
keywords:
  [simulation, untested skills, validation, agent factory, incubate phase]

skills:
  - name: "Recognizing Untested Intelligence"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Can explain why a skill that reads well may still produce incorrect outputs when given real inputs"

learning_objectives:
  - objective: "Explain the difference between writing an agent skill and validating that skill"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Scenario analysis in chapter quiz"
  - objective: "Identify at least two risks of deploying untested agent skills into production infrastructure"
    proficiency_level: "A2"
    bloom_level: "Analyze"
    assessment_method: "Discussion questions in Lesson 5 reflection"

cognitive_load:
  new_concepts: 1
  assessment: "Low. One new concept (simulation-driven validation) introduced through a concrete scenario. The lesson focuses on motivation, not method."

differentiation:
  extension_for_advanced: "Before reading further, take one of your own agent skills from Chapter 67 and run it in Claude Code with three different inputs. Note where the output surprises you. Compare your findings with James's experience in this lesson."
  remedial_for_struggling: "Focus on the three questions Emma asks James about his Resume Screener skill. For each one, think about whether your own skills from Chapter 67 could answer those questions. If you are not sure, that is exactly the point."
---

# James Ships Without Testing

James was ready to build.

He had four agent skills from Chapter 67: Job Spec Writer, Resume Screener, Interview Question Generator, and Candidate Summarizer. Each one encoded domain knowledge from the HireFlow concept paper. Each one had clear instructions, scoring criteria, and output formats. He had spent real time on them. He was proud of the work.

He opened the Chapter 69 preview. MCP servers. The next step. Skills would become tools that programs could call. His fingers hovered over the keyboard.

"Before you touch MCP," Emma said from across the desk, "show me the simulation results."

James looked up. "The what?"

"Your simulation results. You wrote four agent skills. How do you know they work?"

"I... wrote them carefully. They follow the format from Chapter 67. The scoring rubric has weighted criteria, the output schemas are structured, the instructions are specific."

"That tells me you wrote them. It does not tell me you tested them."

James crossed his arms. "Fine. I will prove it. Let me wire the Job Spec Writer to an MCP server right now and call it with a real brief. If the output looks good, we move on."

"Try it," Emma said.

James spent ten minutes setting up a minimal MCP server config. He pointed it at the Job Spec Writer skill, sent a test brief through the tool call, and waited. The response came back garbled: a partial JSON object with a truncated `requirements` field and no scoring section at all.

"Okay, something broke," James muttered. He stared at the output. "Is this a problem with my skill instructions? Is the brief too long for the context window? Is MCP truncating the response? Is the tool schema wrong?"

He opened the MCP server logs. Transport errors mixed with tool execution traces. One line said `tool_result: partial`. Another said `content_length: exceeded`. A third referenced a schema validation failure, but the schema it cited did not match the one he wrote.

"I genuinely cannot tell which layer broke," James said.

"That is the point," Emma said. "You have three possible failure sources tangled together: the skill logic, the MCP configuration, and the transport layer. If you had tested the skill in a plain conversation first, you would know whether the instructions produce correct output. Then, if MCP gave you garbage, you would know the skill is fine and the problem is infrastructure. Right now you know nothing."

James closed the MCP config file. "So isolation is not optional. It is the only way to debug this."

"Now you see it."

## The Skills Look Fine

James pulled up the Resume Screener skill on his screen. He scrolled through it for Emma. The skill had a clear role definition. It specified five scoring dimensions: technical match, experience depth, growth trajectory, cultural indicators, and red flag assessment. Each dimension had a weight. The output format specified a JSON object with a score, a summary, and a list of flagged concerns.

"Look," James said. "Five scoring dimensions. Weighted. Structured output. This is not a vague chatbot prompt. This is a real specification."

"It reads well," Emma agreed.

"So what is the problem?"

"The problem is that reading well and working well are different things. What happens when you give this skill a candidate with a five-year career gap, three contract roles, and no university degree?"

James looked at the skill text. The instructions mentioned career gaps in one sentence: "Flag significant employment gaps for reviewer attention." It said nothing about how to weigh contract roles versus permanent employment. It said nothing about alternative credentials.

"It would flag the gap," James said slowly. "But I am not sure what it would do with the contract roles. Or the missing degree."

"What would it score that candidate?"

"I do not know."

"That is the problem."

## The Confidence Gap

James leaned back. "Okay, but I could figure that out by running it once."

"Once is not enough. What about the candidate who has fifteen years of experience but is applying for a junior role? What about the CV that lists skills in a paragraph instead of a bullet list? What about the brief that says 'we need someone good at tech stuff' instead of listing specific requirements?"

"Those are edge cases."

"Every real candidate is an edge case. The happy path candidate who matches every criterion perfectly is the one you do not need an agent for. The agent earns its value on the messy inputs."

James thought about his old job in operations. They had a vendor evaluation process. The first version was a checklist: does the vendor meet criterion A, yes or no? It worked fine for vendors who clearly qualified or clearly did not. It fell apart for every vendor in between, which was most of them. They spent three months redesigning the evaluation to handle partial matches, conditional criteria, and weighted trade-offs.

"Wait, so basically... my skills are like that first vendor checklist. They handle the obvious cases but I have no idea what they do with the messy ones."

"And the messy ones are the whole point."

## Why This Matters Now

James could feel his momentum draining. He wanted to build MCP servers. He wanted to see his skills running as real tools.

"Why can't I just test them when they're wired to MCP? I will find the bugs then."

"Because then you are debugging two things at once: the skill and the infrastructure. If the Resume Screener gives a bad score through an MCP server, is the problem in the skill's instructions, the MCP tool configuration, the input parsing, or the network transport? You will not know."

James frowned. "So I test the skill first, in isolation."

"In isolation, in conversation, before a single line of production code exists. That is the principle." Emma picked up a marker and wrote on the whiteboard:

**Test the intelligence before you build the infrastructure.**

"This is **simulation-driven validation**: running your skills in conversation to verify they produce correct outputs before you invest in MCP servers, databases, SDKs, and orchestrators."

James looked at the four skills on his screen. A few minutes ago, they looked finished. Now they looked like hypotheses.

"Think of it this way," Emma said. "In Chapter 63, you learned that the Incubate phase is about validating intelligence before building the specialist. The concept paper validated your domain knowledge (Chapter 65). The Domain Mastery Gate confirmed you understood the domain (Chapter 66)."

"Wait," James said. "So each chapter added a layer of validation? Knowledge first, then understanding, then skill extraction, and now we are testing whether the extraction actually works."

Emma nodded. "Exactly. The skills turned that knowledge into actionable instructions (Chapter 67). Simulation is the final validation: do the instructions actually produce correct outputs when given real inputs?"

:::tip Quick Recall
In Chapter 63, you learned about the Agent Maturity Model's Five-Phase Map. Simulation-driven validation sits at the boundary between Phase 2 (Incubate) and Phase 3 (Build Specialist). What is the name for the transition between these phases? What quality signal triggers it? If you cannot answer both questions from memory, review Chapter 63, Lesson 3 before continuing.
:::

## The Boundary You Are Standing On

"Here is where you are," Emma said, drawing on the whiteboard:

```
Explore (Ch 65-66) ──→ Incubate (Ch 67-68) ──→ Build Specialist (Ch 69+)
                        ↑ You are here ↑
                     Skills written ✓
                     Skills validated ?
```

"You have written the skills. You have not validated them. Until you simulate and confirm they handle real inputs correctly, you are not ready for Build Specialist. You are still in Incubate."

James stared at the diagram. "And if the simulations reveal problems?"

"Then you fix the skills and simulate again. That is the loop. You keep going until the skills consistently produce correct outputs across a range of inputs."

"How do I know when they are good enough?"

Emma set down the marker. "That is what the next lesson covers."
