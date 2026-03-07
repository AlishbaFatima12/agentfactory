---
sidebar_position: 1
title: "The PRIMM Framework"
description: "Understand the research-validated PRIMM framework -- five stages for learning to read code before writing it. Developed by Sentance, Waite, and Kallia, PRIMM inverts traditional programming education by making comprehension the primary activity and code production the final step."
keywords:
  [
    "PRIMM",
    "PRIMM framework",
    "predict run investigate modify make",
    "comprehension-first",
    "code reading",
    "Sentance Waite Kallia",
    "Vygotsky",
    "programming pedagogy",
    "learning to program",
    "computing education research",
    "reading before writing",
    "mental models",
  ]
chapter: 30
lesson: 1
duration_minutes: 18

# HIDDEN SKILLS METADATA
skills:
  - name: "PRIMM Framework Comprehension"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Computational Thinking"
    measurable_at_this_level: "Student can describe all five PRIMM stages in sequence and explain why comprehension precedes production in the framework"

  - name: "Comprehension-First Mindset"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Digital Competence"
    measurable_at_this_level: "Student can articulate why reading and verifying code is the bottleneck skill in AI-driven development and why PRIMM prioritizes comprehension over production"

  - name: "Pedagogical Framework Recognition"
    proficiency_level: "A1"
    category: "Soft"
    bloom_level: "Remember"
    digcomp_area: "Communication and Collaboration"
    measurable_at_this_level: "Student can name the five PRIMM stages in order and identify the research basis for the framework"

learning_objectives:
  - objective: "Explain the five stages of PRIMM and why they are sequenced from Predict to Make"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student describes all five stages in sequence and explains why comprehension stages precede the production stage, using a non-programming analogy"

  - objective: "Describe the research origin of PRIMM and its grounding in sociocultural learning theory"
    proficiency_level: "A1"
    bloom_level: "Remember"
    assessment_method: "Student identifies the researchers (Sentance, Waite, Kallia), the study parameters (493 students, 13 schools), and names Vygotsky's sociocultural theory as the foundation"

  - objective: "Articulate why comprehension-first learning matters more in 2026 than it did in 2016"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student explains the bottleneck shift from writing code to verifying code and connects it to the rise of AI code generation"

cognitive_load:
  new_concepts: 3
  assessment: "3 new concepts (the PRIMM framework as a research-validated method, the five stages as a learning sequence, the comprehension-first paradigm). All conceptual -- no code, no tools. Well within the A2 budget of 5-7 concepts."

differentiation:
  extension_for_advanced: "Find the original Sentance, Waite, and Kallia (2019) paper in Computer Science Education and read the abstract. Compare their classroom findings with your own experience learning any skill through observation before practice."
  remedial_for_struggling: "Write each stage name (Predict, Run, Investigate, Modify, Make) on an index card with a one-sentence description. Arrange them in order. For each card, write one everyday example of that stage from cooking, driving, or another familiar activity."
---

# The PRIMM Framework

You are about to learn Python programming. But you are learning it in 2026, not 2016. That distinction matters more than any syntax rule this book will ever teach you.

A decade ago, learning to program meant staring at a blank editor, typing code character by character, running it, watching it crash, and slowly building up the ability to write working programs from scratch. The entire pedagogy of programming education was built around one assumption: the learner must produce code from nothing. That assumption is now obsolete.

An AI coding assistant can write a working Python function in seconds. It can scaffold an entire project, generate tests, refactor code, and explain any program you show it. If the goal of learning programming were simply to produce code, you could skip this entire Part and just type prompts into a terminal. But producing code was never the real goal. The real goal is **understanding** -- the ability to read a program and know what it will do, to look at generated code and judge whether it is correct, to take a working function and adapt it for a new purpose. This chapter introduces the framework that makes comprehension the foundation of everything you will learn.

---

## What Is PRIMM?

PRIMM is a structured approach to teaching programming developed by computing education researchers **Sue Sentance**, **Jane Waite**, and **Maria Kallia** at King's College London and Queen Mary University of London. First presented in 2017 and formally published in *Computer Science Education* (2019) based on a mixed-methods study with 493 students across 13 schools, PRIMM stands for five sequential stages:

1. **Predict** -- Read something complete and predict what it will do before you see the result.
2. **Run** -- Execute it and compare the actual result to your prediction.
3. **Investigate** -- Explore how and why it behaves the way it does.
4. **Modify** -- Change it in targeted ways that demonstrate your understanding.
5. **Make** -- Create something new from scratch to solve a related problem.

The framework is grounded in **Lev Vygotsky's sociocultural theory of learning**, which holds that knowledge transfers from the social plane (discussion, collaboration, shared reasoning) to the cognitive plane (individual understanding). In practical terms: you learn programming by reading code, talking about code, and reasoning about code *before* you ever try to write it yourself.

This is the opposite of how most programming courses work. Most courses begin with "write a program that prints Hello World" -- the Make stage -- and expect learners to somehow absorb reading, comprehension, and debugging skills along the way. PRIMM inverts this. You start by reading, and you arrive at writing only after you have built the comprehension skills to do it with confidence.

Think of it this way: you do not learn a new spoken language by writing essays on your first day. You start by reading sentences, recognizing words, and building comprehension. Writing comes after you can read -- because writing requires you to *produce* what reading only requires you to *recognize*. PRIMM applies the same principle to programming.

The research results are clear. Learners using PRIMM outperformed control groups on post-tests, and teachers reported that the approach was particularly effective for mixed-ability classes -- enabling all learners, not just the strongest ones, to make progress.

---

## The Five Stages

### Predict: Read Before You Run

You are shown something complete -- a recipe, a set of driving directions, a circuit diagram, or (once you start programming) a short program. Your task is to predict what it will produce before you see the result.

When you predict, several things happen in your brain simultaneously. You are reading the material, which means you are parsing its structure. You are reasoning about sequence -- what happens first, second, third. You are building a **mental model** of how the thing behaves. And you are committing to an answer, which means you will notice when reality differs from your expectation.

The prediction does not need to be perfect. The point is not to get the right answer -- it is to *engage* with the material before seeing the result. Even an incorrect prediction is pedagogically valuable, because the gap between your prediction and the actual outcome is where deep learning happens.

**Everyday analogy.** Imagine reading a recipe for the first time: flour, sugar, butter, eggs, baking powder, vanilla, and an oven set to 175 degrees Celsius. Before you bake anything, you predict the outcome. "This will produce a cake -- probably a vanilla sponge." You might be wrong about the texture or the rise, but the act of predicting forces you to engage with the ingredients and the process. You are not passively scanning -- you are actively constructing an expectation.

### Run: Test Your Mental Model

Now you execute and compare the result to your prediction. You bake the cake and see what comes out of the oven.

If your prediction matched -- "I expected a sponge cake and got a sponge cake" -- you have evidence that your mental model is accurate. If it did not match -- "I expected a sponge but got something dense and flat" -- you have something even more valuable: a specific, concrete discrepancy that your brain will work to resolve.

Running something is trivially easy. Anyone can press a button and see the output. But running *after predicting* transforms a mechanical act into a learning event. The difference between "I ran it and saw the result" and "I predicted X but got Y" is the difference between passive exposure and active learning. The prediction creates a stake. The comparison creates understanding.

**Everyday analogy.** You predict that taking the highway will get you to the airport in 40 minutes. You drive the route and it takes 55 minutes because of construction. That 15-minute gap is memorable. Next time, you account for construction. Without the prediction, you would have arrived in 55 minutes and thought nothing of it. With the prediction, you learned something about the route.

### Investigate: Understand Deeply

You already know *what* happened. The Investigate stage asks: *how* does it work, and *why*?

Investigation takes many forms. You trace through the process step by step. You ask targeted questions: "What would happen if I changed this one ingredient?" You test edge cases: "What if I doubled the sugar? What if I left out the baking powder entirely?"

The Investigate stage is where you build what researchers call a **mental model** of the underlying mechanism. A mental model is not a memorized definition -- it is a working internal simulation that lets you predict what will happen in *new* situations. The person who memorizes "baking powder makes things rise" has a definition. The person who understands *why* baking powder makes things rise -- that it produces carbon dioxide when it reacts with moisture and heat, creating air pockets in the batter -- has a mental model. The mental model transfers to new contexts. The definition does not.

**Everyday analogy.** You are learning why a particular recipe produces a moist cake. You investigate: the recipe calls for buttermilk, which is acidic, and uses baking soda, which reacts with acid to produce gas. That is why the cake rises and stays moist -- the acid-base reaction creates texture while the buttermilk adds richness. You did not just memorize the recipe. You understand the chemistry well enough to troubleshoot a flat cake or substitute yogurt for buttermilk.

### Modify: Adapt with Purpose

You now understand how it works. The Modify stage asks you to change it -- not to start over from scratch, but to make targeted alterations that demonstrate your understanding while working within the safety net of something that already functions.

Each modification requires you to understand the existing material well enough to know *where* to make changes and *what* those changes will do. Modify is the bridge between reading and writing. It is scaffolded creation -- you are producing something new, but you are doing it within a structure that constrains the problem and provides immediate feedback.

**Everyday analogy.** You take the vanilla sponge recipe and adapt it. You substitute cocoa powder for some of the flour to make a chocolate cake. You reduce the sugar because cocoa is bitter and needs less sweetness to balance. You adjust the baking time because the denser batter needs longer in the oven. Each modification requires you to understand the original recipe well enough to predict the effect of your changes. You are not inventing a cake from nothing -- you are demonstrating mastery by adapting what exists.

### Make: Create with Confidence

Finally, you create something from scratch. But "from scratch" does not mean "without any support." Make means: given what you have learned through predicting, running, investigating, and modifying, solve a new but related problem.

This task requires you to transfer what you learned to a new context. You are not copying. You are applying understanding. If you learned the principles of cake baking through the first four stages, the Make stage might ask you to create a recipe for muffins -- a related but different challenge that requires you to apply the same techniques (leavening, fat ratios, oven temperatures) in a new configuration.

Notice the critical point: **you arrive at Make only after four stages of preparation.** By the time you sit down to create something new, you have already read something complete, predicted its behavior, executed it and compared your prediction, investigated its mechanics, and modified it with purpose. Creating becomes the natural next step, not a terrifying leap into the unknown.

---

## The Comprehension Crisis

Why does a framework developed for classroom teaching in 2017 matter even more in 2026?

Because AI coding assistants have made the final step of programming -- generating code -- nearly free. Any beginner can describe what they want and get a working result in seconds. This is extraordinary. But it creates a pedagogical trap.

If a learner can get working code without understanding it, and if that working code appears to solve their problem, what incentive do they have to learn? The incentive is invisible until it is not: the code breaks, the requirements change, the AI misunderstands a subtle constraint, or the learner is asked to debug a system they cannot read. At that point, the gap between "I can prompt AI" and "I understand programming" becomes a chasm.

The bottleneck in software development has shifted.

| Era | Bottleneck | Primary Skill | What Slows You Down |
|-----|-----------|---------------|---------------------|
| **Pre-AI** | Writing code | Typing, syntax recall, API lookup | Producing code from scratch |
| **AI era** | Verifying code | Reading, predicting, tracing | Deciding whether generated code is correct |

PRIMM prevents this crisis by making comprehension the *primary* activity and code generation the *final* activity. Four of the five stages -- Predict, Run, Investigate, Modify -- are about building understanding. Only the last stage involves writing new code. This ratio is exactly right for the AI era: the ability to read, evaluate, trace, and adapt code is now more valuable than the ability to write it from scratch, because writing from scratch is what AI does best.

:::note If you are new to programming
This is good news. You are not starting behind -- you are starting in position. The most important programming skill in 2026 is not typing speed or syntax memorization. It is the ability to read code and predict what it does. PRIMM builds that skill from your very first lesson.
:::

:::note If you have coded before
You already do this informally. When you review a pull request, you read the code, predict its behavior, investigate edge cases, and suggest modifications. PRIMM formalizes the process you probably already use by instinct -- and gives you a structured vocabulary for a skill you have been practicing without naming it.
:::

---

## Key Takeaways

1. **PRIMM is a research-validated framework** developed by Sentance, Waite, and Kallia (2019), tested with 493 students across 13 schools, and grounded in Vygotsky's sociocultural learning theory.

2. **The five stages are sequential**: Predict, Run, Investigate, Modify, Make. Each stage builds on the one before it, progressing from pure comprehension to guided creation.

3. **Comprehension comes before production.** Four of five stages are about understanding. Only the final stage involves creating something new. This ratio is deliberate.

4. **The comprehension crisis is real.** AI can generate code cheaply. The bottleneck has shifted from writing to verifying. PRIMM builds the verification skills that AI cannot replace.

5. **You arrive at Make prepared, not panicked.** By the time you create something from scratch, you have already predicted, run, investigated, and modified. Writing becomes the natural next step.

---

## Looking Ahead

You now know the method. In the next lesson, you will see how AI coding assistants fit into each stage -- transforming PRIMM into **PRIMM-AI**. You will learn the five rules that govern every interaction with your AI partner, and you will see how the PRIMM-AI cycle maps directly to the professional workflow used by working developers every day.

The framework is set. The AI integration comes next.

---

## Try With AI

Open any AI assistant (Claude, ChatGPT, Gemini, or another tool you have access to) and try these prompts. You do not need Python installed yet -- these are conceptual explorations.

### Prompt 1: Test Your Understanding of PRIMM

```
A friend tells you: "Learning frameworks are a waste of time. Just start
coding and you'll figure it out." You've just read about PRIMM -- a method
where you predict, run, investigate, and modify code before ever writing
your own.

Give me three specific arguments for why starting with reading and
predicting (the PRIMM approach) builds a stronger programmer than
jumping straight to writing code. Use concrete examples, not
abstract principles.
```

**What you are learning:** You are testing whether you can articulate the pedagogical logic behind PRIMM to a skeptic. Compare the AI's arguments with what you read in this lesson. Does it mention the prediction-gap mechanism -- that committing to a prediction creates a measurable discrepancy that drives learning? If not, push back and ask about it specifically. Evaluating an AI's explanation against your own understanding is itself a comprehension skill.

### Prompt 2: The Comprehension Shift

```
Before AI coding assistants, the hardest part of programming was writing
code from scratch. Now AI can generate code in seconds. Explain why this
shift makes reading code MORE important, not less important. Include a
realistic scenario where someone who can prompt AI but cannot read the
output would get into serious trouble.
```

**What you are learning:** You are exploring the comprehension crisis -- the central argument for why PRIMM matters more in 2026 than it did when the framework was created. The AI's scenario should illustrate a concrete failure mode: generated code that looks correct but contains a subtle bug that only a reader (not a prompter) would catch. If the AI gives a vague answer, ask for specifics: "What exact bug? What would happen in production?"
