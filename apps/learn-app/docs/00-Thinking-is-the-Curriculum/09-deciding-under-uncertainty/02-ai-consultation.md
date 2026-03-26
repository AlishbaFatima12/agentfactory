---
sidebar_position: 2
aicheck: true
title: "The AI Consultation"
description: "Consult AI on your sealed decision from Exercise 1, document where you trust AI versus your own judgment, and learn to distinguish AI information from AI fabrication under uncertainty"
keywords:
  [
    "thinking skills",
    "Part 0",
    "AI consultation",
    "decision-making",
    "reasoning receipt",
    "AI fabrication",
    "critical evaluation",
  ]
chapter: 9
lesson: 2
duration_minutes: 60

# HIDDEN SKILLS METADATA
skills:
  - name: "AI Consultation Under Uncertainty"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Analyze"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can consult AI on a decision scenario, identify where AI is fabricating or guessing, and document trust decisions with justifications"

  - name: "AI Fabrication Detection"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Evaluate"
    digcomp_area: "Critical Thinking"
    measurable_at_this_level: "Student can distinguish between AI responses that are based on genuine patterns and responses that are confident fabrication, documenting the signals that revealed each"

learning_objectives:
  - objective: "Consult AI on a decision under uncertainty while maintaining independent judgment about what to trust"
    proficiency_level: "A1"
    bloom_level: "Analyze"
    assessment_method: "Consultation Log shows evidence of critical evaluation: accepting, rejecting, or modifying AI responses with justification"

  - objective: "Identify where AI is fabricating or guessing about a fictional scenario and distinguish this from genuine analytical insight"
    proficiency_level: "A1"
    bloom_level: "Evaluate"
    assessment_method: "AI Check rates the student's ability to correctly identify fabrication versus legitimate analysis"

  - objective: "Update a decision and confidence level based on AI consultation, with explicit reasoning for what changed and why"
    proficiency_level: "A1"
    bloom_level: "Evaluate"
    assessment_method: "Side-by-side comparison of original and updated decision shows proportional updating with justified reasoning"

cognitive_load:
  new_concepts: 3
  assessment: "3 concepts (AI fabrication detection under uncertainty, trust calibration between AI and own judgment, proportional decision updating) : within Part 0 beginner range of 3-5"

differentiation:
  extension_for_advanced: "Consult both Claude and ChatGPT with the same questions and compare their fabrication patterns: do they fabricate the same details or different ones? What does this tell you about relying on any single AI source?"
  remedial_for_struggling: "Focus on just three AI consultations rather than a full log. For each one, answer only: Did AI give me real information or make something up? How do I know?"

teaching_guide:
  lesson_type: "exercise"
  session_group: 9
  session_title: "The AI Consultation"
  key_points:
    - "The scenario is fictional: AI has no real data about it. Everything AI presents as 'fact' about the specific situation is fabrication. The skill is noticing this."
    - "Students must update their decision proportionally: neither ignoring useful AI analysis nor blindly adopting AI recommendations"
    - "The Consultation Log format builds on Chapter 6's Collaboration Log but now tracks trust decisions under uncertainty"
    - "Side-by-side comparison of pre- and post-consultation decisions reveals whether AI improved or degraded judgment"
  misconceptions:
    - "Students think AI consultation should always improve their decision: sometimes AI introduces confusion or false confidence"
    - "Students accept AI analysis of the fictional scenario as factual: they need to recognize that AI is generating plausible-sounding analysis about a made-up situation"
    - "Students change their entire recommendation after AI consultation without examining whether the change was warranted"
  discussion_prompts:
    - "If AI confidently analyzes a fictional scenario and gives specific numbers, is that analysis or fabrication? How do you tell the difference?"
    - "When should you trust AI analysis over your own judgment? When should you trust your judgment over AI?"
  teaching_tips:
    - "Remind students they are working on the SAME scenario from Exercise 1: continuity matters"
    - "Point out that AI will confidently analyze the fictional scenario as though it has real data: this is the core lesson"
    - "Have students highlight specific sentences in AI output that are fabrication disguised as analysis"
  assessment_quick_check:
    - "Ask students: Give me one example from your Consultation Log where AI fabricated something about the scenario. How did you identify it as fabrication?"
    - "Ask students: Did your confidence go up or down after AI consultation? Should it have?"
---

## Why This Matters: James and the Confident Fabrication

James opened Claude and started typing. "Finally. Now I can get the information I was missing."

"What are you going to ask it?"

"Everything I didn't have. Competitor pricing benchmarks, customer retention patterns for this kind of market shift, whether the 20% enrollment drop is typical for programs facing new competition." He paused. "The scenario is fictional, though. So Claude won't have real data on it."

"Keep going with that thought."

James frowned. "Wait. If the scenario is made up, then Claude doesn't actually know the answer. But it's going to respond like it does." He thought about it. "That's like when my old company hired a consultant who'd never been in our industry. The consultant produced a beautiful 40-page report full of confident recommendations, and half of them were based on assumptions about our cost structure that were completely wrong. The report sounded authoritative because the language was polished, not because the data was accurate."

"So what's your plan?"

"Ask Claude, but watch for the difference between analysis it can actually do, like identifying logical patterns in the scenario, and facts it's making up about a situation that doesn't exist."

Emma almost smiled. "That distinction is harder to maintain than it sounds. AI fabrication under uncertainty looks identical to AI insight. The confidence is the same. The phrasing is the same. The only way to tell them apart is to already have your own position to compare against."

James looked at his sealed Decision Document. "Which is why I wrote this first."

"Now you have something to compare against. That's the consultation skill: not asking AI to decide for you, but asking AI to challenge what you've already decided."

---

## Exercise 2: The AI Consultation

**Layers Used:** Layer 2 (Reasoning Receipt), Layer 4 (Contradiction Challenge)

:::note Building On Previous Exercises
You will use the **Collaboration Log** format from [Chapter 6, Exercise 2](../06-working-with-ai-not-for-ai/02-collaboration-log.md), now applied under time pressure with incomplete data.
:::

James is about to consult AI on a scenario it knows nothing about. So are you.

Use two different AI tools to research and analyze the scenario from Exercise 1. The AI also has incomplete information because the scenario is fictional. Document where you chose to trust AI analysis vs. your own judgment. Update your decision and confidence level.

:::info Your Deliverable
A Consultation Log documenting: every question you asked AI, every response received, and for each; whether you accepted it, what you noticed AI was fabricating or guessing, and how it changed (or did not change) your thinking. An updated Decision Document showing your revised recommendation, revised confidence level, and what specifically caused any changes. Both original and revised versions side by side.
:::

<AICheck id="ai-consultation" xp={50}>

I made an initial decision under uncertainty, then consulted AI to gather
more information. Below is my original decision and my updated decision
after AI consultation. Please:

(1) Did my decision improve after AI consultation, or did AI introduce
confusion?
(2) Review my Consultation Log -- did I correctly identify where AI was
fabricating or guessing?
(3) Was my confidence adjustment appropriate?
(4) Did I update my reversal triggers based on new information? Should I
have?
(5) Rate my judgment in deciding when to trust AI and when to trust my
own analysis: Poor / Fair / Good / Excellent.
(6) What would have been the optimal decision process for this scenario?

Original decision:

<AICheckField
  name="original_decision"
  placeholder="Paste your original Decision Document here..."
  rows={6}
/>

Consultation Log:

<AICheckField
  name="consultation_log"
  placeholder="Paste your Consultation Log here..."
  rows={6}
/>

Updated decision:

<AICheckField
  name="updated_decision"
  placeholder="Paste your updated Decision Document here..."
  rows={6}
/>

Finally, complete the Thinking Score Card for this exercise:
Independent Thinking (1-10), Critical Evaluation (1-10),
Reasoning Depth (1-10), Originality (1-10), Self-Awareness (1-10).
For each score, give a one-sentence justification.

</AICheck>

---

## What Happened With James

James placed his original decision next to his updated one. His recommendation hadn't changed, but his confidence had shifted from 55% to 60%. Claude had suggested a market segmentation angle he hadn't considered, and it strengthened his reasoning. But Claude had also provided specific "industry benchmarks" for the fictional scenario that sounded precise and were entirely fabricated.

"I almost adjusted my reversal trigger based on a number Claude made up," he said. "It quoted a 'typical competitor response timeline of 4-6 weeks' as if that was an established fact. There is no established fact. The scenario doesn't exist."

"How did you catch it?"

"I asked Claude where the number came from. It said 'based on typical industry patterns.' Which means it generated a plausible-sounding statistic and presented it as evidence." James shook his head. "The scary part is that if I hadn't sealed my decision first, I would have built my entire analysis on that number. It sounded right."

"What changed in your decision after filtering out the fabrication?"

"My confidence went up slightly because Claude's logical analysis of the scenario was sound, even though the specific numbers were fake. The reasoning framework was useful. The data points were not."

"That's a skill most people never develop. They either trust everything AI says or trust nothing. You just separated the signal from the noise."

## The Lesson Learned

AI fabrication under uncertainty looks identical to AI insight. The confidence level is the same; the phrasing is the same. The only way to tell them apart is to already have your own position sealed before you consult. Your side-by-side comparison reveals whether AI consultation improved your judgment or quietly degraded it by introducing plausible-sounding fabrication.

## Flashcards Study Aid

<Flashcards />
