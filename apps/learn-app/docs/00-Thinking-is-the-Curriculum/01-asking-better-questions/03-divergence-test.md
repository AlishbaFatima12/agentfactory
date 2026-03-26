---
sidebar_position: 3
aicheck: true
title: "The Divergence Test"
description: "When everyone has the same AI tools, produce an original analysis that demonstrates independent thinking beyond generic AI output"
keywords:
  [
    "thinking skills",
    "Part 0",
    "question formulation",
    "divergence test",
    "originality",
    "reasoning receipt",
  ]
chapter: 1
lesson: 3
duration_minutes: 75

# HIDDEN SKILLS METADATA
skills:
  - name: "Original Analysis Production"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Create"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can produce a written analysis that demonstrably diverges from generic AI output, with a uniqueness statement identifying specific original contributions"

  - name: "AI Output Critical Integration"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Evaluate"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can document every AI interaction with accept/reject/modify decisions and justify each decision, demonstrating critical engagement rather than passive acceptance"

learning_objectives:
  - objective: "Produce a written analysis that includes original insights beyond what AI would generate from the same prompt"
    proficiency_level: "A1"
    bloom_level: "Create"
    assessment_method: "AI Check rates originality from 1-10 and identifies sections that read like generic AI output vs. genuine independent thinking"

  - objective: "Document AI interactions as a complete reasoning receipt showing critical engagement"
    proficiency_level: "A1"
    bloom_level: "Analyze"
    assessment_method: "AI Check grades reasoning receipt for genuine critical engagement vs. passive acceptance"

cognitive_load:
  new_concepts: 3
  assessment: "3 concepts (divergence as originality signal, uniqueness statement, class-wide comparison of AI-assisted work) : within Part 0 beginner range of 3-5"

differentiation:
  extension_for_advanced: "After receiving your AI originality rating, rewrite the sections flagged as generic AI output and resubmit. Compare the before/after originality scores."
  remedial_for_struggling: "Write your analysis in two stages: first write 300 words without any AI, then use AI to help expand to 500-800 words. Keep the two stages clearly marked so you can see where your thinking ends and AI assistance begins."

teaching_guide:
  lesson_type: "exercise"
  session_group: 1
  session_title: "The Divergence Test"
  key_points:
    - "When everyone has identical AI access, the only differentiator is the quality of thinking: this exercise makes that visible at class scale"
    - "The uniqueness statement forces students to articulate what they contributed beyond AI: if they cannot, they did not contribute enough"
    - "The reasoning receipt is the proof of process: it shows whether the student used AI as a thinking partner or an answer machine"
  misconceptions:
    - "Students think using AI more means their analysis is less original: the issue is not quantity of AI use but quality of engagement with AI output"
    - "Students confuse longer analysis with better analysis: originality is about depth and novel connections, not word count"
  discussion_prompts:
    - "If two students submit analyses that are 80% identical, what does that tell you about how they used AI?"
    - "What is the difference between using AI as a thinking partner and using AI as an answer machine?"
  teaching_tips:
    - "If possible, anonymize and display 3-4 analyses side by side: let the class see convergence patterns before discussing what originality looks like"
    - "The uniqueness statement is the hardest part for most students. Give them the frame: 'What specific idea, connection, or insight in your analysis would AI not have produced on its own?'"
  assessment_quick_check:
    - "Can the student point to a specific paragraph in their analysis that contains an insight AI did not suggest?"
    - "Does the reasoning receipt show at least one 'reject' or 'modify' decision, or was everything accepted?"
---

# The Divergence Test

## Why This Matters: James and the Invisible Overlap

James had spent extra time on his analysis this round. Cross-referenced three AI tools. Checked his reasoning receipt twice. When Emma sat down, he slid it across the table.

"This one is different," he said. "I didn't just accept the first response. I pushed back on the AI's assumptions, pulled in a data point from a second tool that the first one missed, and built my own framework connecting them."

"How much of your analysis came from your own thinking versus what AI told you?"

"I told you, I didn't just copy it. I synthesized. I read the responses and built on them."

"Write me a uniqueness statement. One hundred words on what you contributed that AI would not have produced on its own."

James opened a new document and started typing. After two sentences, he stopped. He re-read his analysis. The structure was his. The opening paragraph was his. But the core argument about channel mismatch, the specific data framework, the three-part explanation: he couldn't trace any of it back to a thought he'd had before opening AI.

"This is harder than I expected."

"Good. That means you're looking honestly."

James went back to his analysis with a pen. He underlined the sentences that came from his own insight. Three paragraphs had nothing underlined.

"It's like those group projects at my old company," he said. "Everyone contributed 'something,' but when the VP asked who wrote the executive summary, four people raised their hands and none of them could explain the methodology."

Emma nodded. "The divergence test is the same question at scale. Thirty students, same scenario, same tools. The only variable is thinking. The parts of your analysis that match everyone else's came from the tool, not from you."

---

## Exercise 3: The Divergence Test

**Layers Used:** Layer 5 (Divergence Test), Layer 2 (Reasoning Receipt)

James is staring at three unmarked paragraphs, trying to find his own thinking in them. So are you.

Use the same scenario you chose in [Exercise 1 (The Prediction Lock)](./01-prediction-lock.md). Every student in the class works from the same scenario with the same AI tools. The only variable is your thinking.

### Develop Your Analysis Using AI as a Thinking Partner

Prompt AI with your own questions about the scenario. Do not ask "analyze this scenario." Build your analysis piece by piece through focused questions. You decide what to ask, what to accept, and what to push back on.

### Write Your Analysis (500-800 Words)

Your analysis should include: your diagnosis of what happened, the evidence and reasoning behind it, and at least one insight or connection that you believe AI would not produce on its own.

### Write Your Uniqueness Statement (100 Words)

Answer this question: "What specific idea, connection, or insight in my analysis would AI not have produced on its own?" If you cannot point to anything, you need to go deeper before submitting.

### Complete Your Reasoning Receipt

Document every prompt you sent, every AI response you received, and your accept/reject/modify decision for each (use the same format from [Exercise 1](./01-prediction-lock.md)).

:::info Your Deliverable

1. Your analysis of the scenario (500-800 words)
2. Your uniqueness statement (100 words): what you contributed beyond AI
3. Your complete reasoning receipt showing every prompt, response, and decision
   :::

### Check Your Thinking

<AICheck id="divergence-test" xp={50}>

I am a student in a class where everyone received the same business scenario
and access to the same AI tools. Below is my analysis. Please:

(1) Rate the originality of my analysis from 1-10 -- how much does this read
like something you would generate if prompted directly vs. something that
shows independent human thinking?
(2) Identify the 2-3 most original insights in my analysis -- ideas that go
beyond what a standard AI response would produce.
(3) Identify any sections that read like generic AI output -- where I likely
accepted AI's answer without adding my own thinking.
(4) Suggest how I could have pushed further beyond the AI's analysis in the
weaker sections.
(5) Grade my reasoning receipt: does it show genuine critical engagement or
passive acceptance?

Scenario:

<AICheckField
  name="scenario"
  placeholder="Paste your chosen scenario here..."
  rows={2}
/>

My analysis:

<AICheckField
  name="analysis"
  placeholder="Paste your analysis here..."
  rows={6}
/>

My reasoning receipt:

<AICheckField
  name="reasoning_receipt"
  placeholder="Paste your reasoning receipt here..."
  rows={6}
/>

Finally, complete the Thinking Score Card for this exercise:
Independent Thinking (1-10), Critical Evaluation (1-10),
Reasoning Depth (1-10), Originality (1-10), Self-Awareness (1-10).
For each score, give a one-sentence justification.

</AICheck>

<ConversationGallery />

<details>
<summary>Uniqueness Statement Example (click to expand)</summary>

**Strong uniqueness statement:**
"My analysis connects the 20% marketing spend increase to a channel mismatch; specifically, I noticed the spend increase went to social media while the company's core demographic (45-65) primarily discovers products through email and in-store. AI suggested 'targeting issues' generically, but the demographic-channel gap was my insight from noticing the company's customer profile versus where they spent."

**Weak uniqueness statement:**
"I used AI to help me think through the problem and came up with my own analysis based on the responses."

The strong version points to a _specific_ insight. The weak version says nothing concrete.

</details>

---

## What Happened With James

James read his originality score twice. Several sections flagged as "generic AI output, likely accepted without modification." The phrasing was diplomatic, but the message was blunt: those paragraphs could have been written by anyone in the class with the same prompt.

The sections he'd flagged in his uniqueness statement, the ones where he'd connected the marketing channel data to the customer age distribution, scored highest. The AI grader called them "evidence of independent analytical reasoning."

The mirror was precise. It didn't care how long he'd spent or how many tools he'd consulted. It measured one thing: where thinking happened and where it didn't.

"The parts I was proudest of," James said, "were the parts I actually thought through myself. Not the parts where I used the most sophisticated prompts."

Emma let him sit with that for a moment. "Now you know what to protect. The next exercise is going to test whether you can defend what you wrote. The sections you underlined will hold up. What about the rest?"

## The Lesson Learned

When everyone has the same tools, the work converges. The only parts of your analysis that belong to you are the parts where you thought past what AI offered. The uniqueness statement is not a formality; it is the honest answer to whether you used AI as a thinking partner or let it think for you. Knowing the difference is the first step toward protecting the parts that matter.

## Flashcards Study Aid

<Flashcards />
