---
sidebar_position: 3
aicheck: true
title: "Build It, Then Break It"
description: "Use your domain expertise to catch AI errors that non-experts would miss, then discover how much harder error detection becomes outside your field"
keywords:
  [
    "thinking skills",
    "Part 0",
    "error detection",
    "domain expertise",
    "error taxonomy",
    "cross-domain verification",
  ]
chapter: 2
lesson: 3
duration_minutes: 60

# HIDDEN SKILLS METADATA
skills:
  - name: "Domain-Expertise Error Detection"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Evaluate"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can annotate AI output in their area of expertise using the Error Taxonomy, identifying errors that a non-expert would accept as correct"

  - name: "Cross-Domain Verification"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Evaluate"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can compare their error detection accuracy between a familiar domain and an unfamiliar domain, articulating why the gap exists"

learning_objectives:
  - objective: "Detect AI errors in your domain of expertise that would pass unnoticed by a non-expert, using the Error Taxonomy for precise categorization"
    proficiency_level: "A1"
    bloom_level: "Evaluate"
    assessment_method: "AI Check confirms each flagged error and identifies additional errors the student missed, reporting overall accuracy"

  - objective: "Recognize the limits of your own error detection ability outside your domain, articulating the gap between expert and non-expert verification"
    proficiency_level: "A1"
    bloom_level: "Evaluate"
    assessment_method: "200-word reflection comparing detection rates across domains with specific evidence"

cognitive_load:
  new_concepts: 3
  assessment: "3 concepts (domain expertise as error detection advantage, cross-domain verification difficulty, expert vs. non-expert error visibility) : within Part 0 beginner range of 3-5"

differentiation:
  extension_for_advanced: "After completing the exercise, write a 'verification guide' for your domain: what are the 5 most common AI errors in your field, and what should a non-expert check first?"
  remedial_for_struggling: "Choose a domain you know very well (your job, your hobby, your city). Focus on catching factual errors first: these are the easiest to verify with your existing knowledge."

teaching_guide:
  lesson_type: "exercise"
  session_group: 2
  session_title: "Build It, Then Break It"
  key_points:
    - "Domain expertise is the most powerful error detection tool: in your own field, you catch errors that AI gets subtly wrong and outsiders would accept"
    - "The gap between expert-domain and non-expert-domain error detection is the key learning: it teaches caution when using AI outside your expertise"
    - "This exercise demonstrates why expert review matters: AI-generated content about your field will contain errors that only someone with your knowledge can catch"
  misconceptions:
    - "Students think domain expertise means catching more errors overall: it means catching specific errors that are invisible without expertise; other error types (logical gaps, false confidence) are detectable by anyone"
    - "Students assume their partner's annotations are wrong when they cannot verify them: inability to verify is not the same as the annotation being incorrect"
  discussion_prompts:
    - "What was the most surprising error you caught in your domain that you think a non-expert would have accepted?"
    - "After trying to verify your partner's annotations in their domain, how confident are you in AI output about topics you know little about?"
  teaching_tips:
    - "Pair students from genuinely different domains: accountant with engineer, teacher with marketer: the contrast in domain error detection is the lesson"
    - "The reflection is the most important deliverable here. Push students past 'I caught more errors in my domain' to articulate WHY and what this means for their AI use"
  assessment_quick_check:
    - "Can the student name one specific error they caught that a non-expert would miss, and explain what domain knowledge made it visible?"
    - "Does the reflection articulate a concrete change in how the student will use AI outside their domain?"
---

# Build It, Then Break It

**Layers Used:** Layer 5 (Divergence Test), Layer 3 (Live Defence)

### What You Do

**Step 1 (Choose your expert domain.** Pick a topic you genuinely know well) your profession, your academic field, your city, a hobby you've spent years on. The key is that you can spot errors a non-expert would miss. Examples: accounting standards, local transit systems, a specific programming language, your country's political history.

**Step 2. Generate an AI analysis.** Ask AI to write a detailed analysis of a specific question in your domain. Be specific enough that the AI will need to make claims you can verify; e.g., "Analyze the public transit challenges in Karachi" not "Tell me about cities."

**Step 3. Annotate the most confident-sounding claims.** Pick the 10 most authoritative-sounding claims in the AI response; the ones that sound most certain. Label each using the Error Taxonomy from Exercise 1. Pay special attention to errors that _sound correct_ but you know are wrong because of your expertise.

**Step 4. Separate your findings.** Create two lists:

- **Expert-visible errors:** Errors you caught _because_ of your domain knowledge that a non-expert would accept as true
- **Suspected errors:** Claims that feel wrong but you cannot confirm without further research

**Step 5. Cross-domain exchange.** Pair with a student from a different domain. Exchange your annotated outputs. Try to verify your partner's error annotations; can you confirm their catches are real, or do you lack the expertise to judge? Discuss in a live 10-minute session.

**Step 6. Write your reflection (200 words).** Compare your error detection experience in your domain vs. your partner's domain. What was different? What does this tell you about using AI outside your expertise?

:::tip Solo Learner Alternative
Instead of Step 5, run your own cross-domain test: choose a second topic you know _nothing_ about, generate an AI analysis for it, and try to annotate errors using the same approach. Compare your detection rate between the two domains; the gap reveals exactly how much domain expertise matters.
:::

---

:::info Your Deliverable

1. The AI-generated analysis of your domain with line-by-line Error Taxonomy annotations
2. Your two lists: expert-visible errors + suspected errors
3. Your partner's annotated output with your verification notes (or your second-domain annotations for solo learners)
4. Your 200-word reflection on expert vs. non-expert error detection
   :::

<AICheck id="build-it-break-it" xp={50}>

I am a student testing my error detection skills. I asked AI to analyze
a topic I am an expert in. I then annotated the response
with every error I found using this taxonomy: factual error, logical gap,
false confidence, missing context, correlation-causation confusion, outdated
information, fabricated citation, cultural blind spot. Please:

(1) For each error I identified, confirm whether it is a genuine error or
a false positive, and explain your reasoning.
(2) Are there errors in the original AI analysis that I missed? List them
with categories.
(3) Rate my overall error detection accuracy.
(4) Which error categories am I strongest and weakest at detecting in my
own domain?
(5) Rate the depth of my annotations -- am I just flagging errors or am I
explaining WHY they are errors?

AI analysis:

<AICheckField
  name="ai_analysis"
  placeholder="Paste the AI analysis here..."
  rows={6}
/>

My annotations:

<AICheckField
  name="annotations"
  placeholder="Paste your annotations here..."
  rows={6}
/>

Finally, complete the Thinking Score Card for this exercise:
Independent Thinking (1-10), Critical Evaluation (1-10),
Reasoning Depth (1-10), Originality (1-10), Self-Awareness (1-10).
For each score, give a one-sentence justification.

</AICheck>

---

### What This Teaches You

You learn that domain expertise is your most powerful error detection tool. In your own field, you catch things AI gets subtly wrong that outsiders would accept. In your partner's field, you discover how much harder error detection is without expertise. This teaches you to be cautious when using AI in domains you do not deeply understand; and to seek expert review when the stakes are high.

## Flashcards Study Aid

<Flashcards />
