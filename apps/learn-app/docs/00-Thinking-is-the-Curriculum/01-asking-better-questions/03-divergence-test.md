---
sidebar_position: 3
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
  assessment: "3 concepts (divergence as originality signal, uniqueness statement, class-wide comparison of AI-assisted work) — within Part 0 beginner range of 3-5"

differentiation:
  extension_for_advanced: "After receiving your AI originality rating, rewrite the sections flagged as generic AI output and resubmit. Compare the before/after originality scores."
  remedial_for_struggling: "Write your analysis in two stages: first write 300 words without any AI, then use AI to help expand to 500-800 words. Keep the two stages clearly marked so you can see where your thinking ends and AI assistance begins."

teaching_guide:
  lesson_type: "exercise"
  session_group: 1
  session_title: "The Divergence Test"
  key_points:
    - "When everyone has identical AI access, the only differentiator is the quality of thinking — this exercise makes that visible at class scale"
    - "The uniqueness statement forces students to articulate what they contributed beyond AI — if they cannot, they did not contribute enough"
    - "The reasoning receipt is the proof of process — it shows whether the student used AI as a thinking partner or an answer machine"
  misconceptions:
    - "Students think using AI more means their analysis is less original — the issue is not quantity of AI use but quality of engagement with AI output"
    - "Students confuse longer analysis with better analysis — originality is about depth and novel connections, not word count"
  discussion_prompts:
    - "If two students submit analyses that are 80% identical, what does that tell you about how they used AI?"
    - "What is the difference between using AI as a thinking partner and using AI as an answer machine?"
  teaching_tips:
    - "If possible, anonymize and display 3-4 analyses side by side — let the class see convergence patterns before discussing what originality looks like"
    - "The uniqueness statement is the hardest part for most students. Give them the frame: 'What specific idea, connection, or insight in your analysis would AI not have produced on its own?'"
  assessment_quick_check:
    - "Can the student point to a specific paragraph in their analysis that contains an insight AI did not suggest?"
    - "Does the reasoning receipt show at least one 'reject' or 'modify' decision, or was everything accepted?"
submission:
  type: "ai-check"
  accept: ["text"]
  providers: ["chatgpt", "claude", "gemini", "grok", "claude-code", "cowork"]
  default_provider: "chatgpt"
  xp_bonus: 50
---

# The Divergence Test

**Layers Used:** Layer 5 (Divergence Test), Layer 2 (Reasoning Receipt)

### What You Do

The entire class receives the identical scenario and identical AI access. Each student independently develops their analysis by prompting AI with their own questions and building their own conclusions. Submit your final analysis along with your complete reasoning receipt showing every prompt and decision.

---

:::info Your Deliverable
Your final analysis of the business scenario (500-800 words) and a complete reasoning receipt documenting every prompt sent, every AI response received, and every accept/reject/modify decision with justification. Additionally, a brief "uniqueness statement" (100 words) explaining what in your analysis reflects your own thinking rather than a generic AI output.
:::

<ExercisePrompt id="divergence-test" provider={["chatgpt", "claude", "gemini"]}>

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

<PromptField
  name="scenario"
  placeholder="Paste your chosen scenario here..."
  rows={2}
/>

My analysis:

<PromptField
  name="analysis"
  placeholder="Paste your analysis here..."
  rows={6}
/>

My reasoning receipt:

<PromptField
  name="reasoning_receipt"
  placeholder="Paste your reasoning receipt here..."
  rows={6}
/>

Finally, complete the Thinking Score Card for this exercise:
Independent Thinking (1-10), Critical Evaluation (1-10),
Reasoning Depth (1-10), Originality (1-10), Self-Awareness (1-10).
For each score, give a one-sentence justification.

</ExercisePrompt>

---

### What This Teaches You

You learn that when everyone has the same AI tools, the only differentiator is your thinking. The divergence test reveals whether you used AI as a thinking partner or as an answer machine. The AI grading of your own originality is a mirror — it shows you honestly where your work added value and where it was just AI pass-through.
