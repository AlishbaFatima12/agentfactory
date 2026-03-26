---
sidebar_position: 3
aicheck: true
title: "The Originality Test"
description: "Test whether your solution contains genuine creative value by asking AI to independently solve the same problem, then measuring the divergence between your work and AI's output"
keywords:
  [
    "thinking skills",
    "Part 0",
    "originality test",
    "divergence analysis",
    "creative value",
    "AI comparison",
  ]
chapter: 8
lesson: 3
duration_minutes: 60

# HIDDEN SKILLS METADATA
skills:
  - name: "Creative Divergence Measurement"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Evaluate"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can objectively measure the divergence between their solution and an AI-generated solution, identifying which elements represent genuine human creative contribution"

  - name: "Originality Self-Assessment"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Evaluate"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can honestly assess whether their work adds creative value beyond what AI would produce independently, distinguishing between AI-driven ideas and original human contributions"

learning_objectives:
  - objective: "Measure the creative divergence between a human-AI collaborative solution and an AI-only solution to the same problem"
    proficiency_level: "A1"
    bloom_level: "Evaluate"
    assessment_method: "AI Check calculates divergence percentage and identifies the 3 most original elements of the student's solution"

  - objective: "Identify which elements of a collaborative solution represent genuine human creative contribution versus AI-driven ideas"
    proficiency_level: "A1"
    bloom_level: "Analyze"
    assessment_method: "AI Check identifies elements nearly identical to its independent solution (likely AI-driven) versus genuinely different elements (likely human-driven)"

cognitive_load:
  new_concepts: 3
  assessment: "3 concepts (divergence measurement, overlap as AI-driven signal, unique elements as human creative value) -- within Part 0 beginner range of 3-5"

differentiation:
  extension_for_advanced: "Run the originality test with two different AI tools independently. Compare the two AI solutions against each other and against yours: does the triangulation reveal more about where human value lives?"
  remedial_for_struggling: "Focus the Divergence Analysis on just two questions: What does my solution have that AI's does not? What does AI's solution have that mine does not?"

teaching_guide:
  lesson_type: "exercise"
  session_group: 8
  session_title: "Building Something From Nothing"
  key_points:
    - "This exercise asks the meta-question that defines the chapter: 'Could AI have produced this?' The answer reveals where human creative value lives"
    - "Overlap between student and AI solutions is not failure -- it identifies which ideas were likely AI-driven in the collaboration"
    - "Divergence is the signal of genuine creative contribution. The goal is not 100% divergence but understanding which elements are uniquely yours"
    - "This exercise establishes the originality self-check that students should apply to all future creative work"
  misconceptions:
    - "Students think high overlap means they failed -- it means they can now identify which parts of their thinking were original and which were AI-influenced"
    - "Students try to game the test by making their solution deliberately weird -- originality is not weirdness, it is genuine insight AI would not produce"
    - "Students ask AI to evaluate their work using the same conversation where they collaborated -- the originality test must use a fresh conversation with no prior context"
  discussion_prompts:
    - "What divergence percentage did you get? Is there a 'good' number? What does it mean if your solution is 90% similar to AI's independent output?"
    - "What was the single most original element in your solution? Why do you think AI did not produce it independently?"
  teaching_tips:
    - "Emphasize that the originality test MUST be run in a fresh AI conversation with no prior context -- otherwise AI is influenced by the student's earlier prompts"
    - "Have students share their most original element with the class. Look for patterns: where do humans consistently add value that AI does not?"
    - "Frame the results constructively -- even a 20% divergence means the student created something AI could not. That 20% is where their professional value lives."
  assessment_quick_check:
    - "Ask students: If you removed every element from your solution that AI independently produced, what would remain? Is that remainder valuable?"
    - "Ask students: Will you use this originality test on future work? When would it be most useful?"
---

# The Originality Test

## Why This Matters: James and the Competitive Moat

James was confident about Draft 2. He'd tracked every interaction. He knew exactly what came from him and what came from AI. The Creation Log proved it.

"I'm ready for the next exercise," he said. "What's the originality test?"

"Simple question," Emma said. "If you handed the original problem to an AI tool with no context, no prior conversation, none of your Draft 1 thinking, would it produce something similar to your Draft 2?"

James frowned. "It shouldn't. I contributed sixty percent of the ideas. My framing, my implementation approach, my domain knowledge from operations."

"Prove it."

"How?"

"Open a fresh conversation. Give the AI only the problem statement. No Draft 1, no Draft 2, no Creation Log. Ask it to solve the problem from scratch. Then compare its independent solution to yours."

James thought about this. It sounded like a product differentiation test. At his old company, whenever someone proposed a new service offering, the VP would ask: "What stops a competitor from building this in six months?" If the answer was "nothing," the offering had no moat. If the answer pointed to proprietary knowledge, relationships, or unique process expertise, it had a defensible position.

"Okay, so basically this is a competitive moat analysis. But for thinking."

"If you like. The overlap between your solution and AI's independent solution tells you which ideas were likely AI-driven, even if you thought they were yours. The divergence, the parts AI wouldn't produce on its own, that's your creative value."

James hesitated. "What if there's a lot of overlap?"

"Then you learned something important about where your contribution actually lives."

---

## Exercise 3: The Originality Test

**Layers Used:** Layer 5 (Divergence Test)

James is about to test whether his Draft 2 contains anything AI could not have produced alone. So are you.

:::note Building On Previous Chapters
You will apply the **Assumption Autopsy** technique from [Chapter 4](../04-reasoning-from-first-principles/03-assumption-autopsy.md) to examine your assumptions about your own originality. Use the **Cascade Map** from [Chapter 3](../03-thinking-in-systems/01-cascade-mapping.md) to trace which ideas in your solution came from which source.
:::

### Run the Divergence Test

Open a fresh AI conversation with no prior context. Give the AI only the problem statement. Ask it to solve the problem from scratch. Then compare its independent solution to your Draft 2. The overlap reveals which ideas were likely AI-driven. The divergence reveals your creative value.

:::info Your Deliverable
Your Draft 2 (from Exercise 2). The AI-generated independent solution (produced without seeing your work). A Divergence Analysis (200-300 words) identifying: where your solution and AI's solution overlap (these are likely AI-driven ideas), where they diverge (these are your original contributions), and what your solution has that AI's does not (this is your unique creative value).
:::

<AICheck id="the-originality-test" xp={50}>

I want to test the originality of my solution. Here is the original
problem ONLY (ignore everything I have submitted before in this
conversation):

<AICheckField
  name="scenario"
  placeholder="Paste your chosen scenario here..."
  rows={2}
/>

Generate your best solution to this problem without any prior context
from me.

[GET RESPONSE, THEN FOLLOW UP:]

Now here is my solution that I developed through a combination of
independent thinking and AI collaboration:

<AICheckField
  name="draft_2"
  placeholder="Paste your Draft 2 here..."
  rows={6}
/>

Please:
(1) Calculate the divergence: what percentage of my solution overlaps
with yours vs. is genuinely different?
(2) Identify the 3 most original elements of my solution -- ideas you
would not have generated independently.
(3) Identify elements of my solution that are nearly identical to your
independent version -- these likely came from AI, not from me.
(4) Rate the overall originality of my contribution from 1-10.
(5) What is the single most creative idea in my solution?

Finally, complete the Thinking Score Card for this exercise:
Independent Thinking (1-10), Critical Evaluation (1-10),
Reasoning Depth (1-10), Originality (1-10), Self-Awareness (1-10).
For each score, give a one-sentence justification.

</AICheck>

---

## What Happened With James

James read the AI's independent solution alongside his Draft 2. Some of the overlap made him wince. The stakeholder engagement strategy, the phased rollout timeline, the measurement framework: the AI had produced something startlingly similar without ever seeing his work.

But then he found the divergences.

His solution connected food waste patterns to seasonal employment cycles in the community. The AI hadn't made that connection. His implementation plan used an existing church basement network as distribution hubs, something that came from his years coordinating supplier logistics in neighborhoods like the one described. The AI's version proposed building new infrastructure.

"The parts that overlap," he said to Emma, "those are the ideas I thought were mine but were actually... predictable. Any smart system with enough training data would arrive at the same conclusions."

"And the parts that don't overlap?"

"Those came from experience. Things I noticed because I'd lived something similar. Not because I'm smarter than the AI, but because I'd been in rooms the AI hasn't."

Emma nodded. "Now you know where your value is. Not in generating ideas AI can generate faster. In bringing context AI doesn't have. In making connections that require living in the world, not just reading about it."

James circled the divergent sections with a pen. They weren't the majority of his draft. But they were the parts that made his solution specific to a real place with real people, not a generic framework that could apply to any city on Earth.

## The Lesson Learned

The originality test answers a question most people avoid: could AI have produced this without me? The overlap is not failure; it shows you which ideas are predictable. The divergence is where your creative value lives, in the context, experience, and connections that come from living in the world rather than reading about it.

## Flashcards Study Aid

<Flashcards />
