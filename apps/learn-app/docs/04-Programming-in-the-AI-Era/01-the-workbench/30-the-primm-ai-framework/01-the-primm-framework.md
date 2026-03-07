---
sidebar_position: 1
title: "The PRIMM Framework"
description: "Discover PRIMM -- the research-validated method that teaches you to read and understand code before you write it -- and why comprehension is the bottleneck skill of the AI era."
keywords: ["PRIMM", "Predict Run Investigate Modify Make", "Sue Sentance", "Jane Waite", "code comprehension", "Vygotsky", "sociocultural learning", "reading code", "AI era programming", "code literacy"]
chapter: 30
lesson: 1
duration_minutes: 20

# HIDDEN SKILLS METADATA
skills:
  - name: "PRIMM Framework Knowledge"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Computational Thinking"
    measurable_at_this_level: "Student can name the five stages of PRIMM in order, explain the purpose of each stage, and describe why the sequence begins with reading rather than writing"

  - name: "Code Prediction Reasoning"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Remember"
    digcomp_area: "Computational Thinking"
    measurable_at_this_level: "Student can identify the cognitive activities involved in predicting code output (parsing structure, reasoning about sequence, building a mental model, committing to an answer)"

  - name: "Comprehension Bottleneck Awareness"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Student can explain why code comprehension has replaced code production as the primary bottleneck in AI-assisted development and articulate the ratio of understanding stages to writing stages in PRIMM"

learning_objectives:
  - objective: "Describe the five stages of PRIMM and explain why they are sequenced from reading to writing"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student explains each stage in their own words and justifies the read-first sequence using the research finding that PRIMM learners outperformed control groups"

  - objective: "Identify the research basis for PRIMM including its creators, study design, and theoretical grounding"
    proficiency_level: "A1"
    bloom_level: "Remember"
    assessment_method: "Student names the researchers (Sentance, Waite, Kallia), the study scale (493 students, 13 schools), and the theoretical basis (Vygotsky's sociocultural theory)"

  - objective: "Explain why code comprehension is the bottleneck skill in AI-assisted development"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student articulates the bottleneck shift from code production (pre-AI) to code verification (AI era) and connects this to PRIMM's 4:1 ratio of understanding to writing stages"

cognitive_load:
  new_concepts: 4
  assessment: "4 concepts (the PRIMM five-stage sequence, sociocultural learning theory, comprehension-as-bottleneck thesis, the prediction-reality gap as learning mechanism) well within A2 limit of 7"

differentiation:
  extension_for_advanced: "Read the 2019 journal paper by Sentance, Waite, and Kallia in Computer Science Education (Vol. 29, No. 2-3) and identify which PRIMM stage maps most closely to code review in professional software engineering."
  remedial_for_struggling: "Focus on just two stages -- Predict and Run. Practice the predict-then-compare cycle on the greeting program until the gap between expectation and reality feels natural. The other three stages build on this foundation."
---

# The PRIMM Framework

James watches his AI coding assistant generate fifty lines of Python in ten seconds. A function that parses JSON, validates fields, formats output, and returns a dictionary -- all syntactically correct, all ready to run. He copies it into his project and moves on to the next feature.

Emma walks over and points at line twelve. "What does that line do?"

James stares at it. The line reads `validated = {k: v for k, v in raw.items() if k in schema}`. He recognizes the individual words -- `for`, `in`, `if` -- but cannot explain what the line accomplishes. He generated fifty lines of working code and understands none of them.

"Speed means nothing without comprehension," Emma says. "If you cannot read the code your AI produces, you cannot verify it, debug it, or adapt it. You are not programming. You are copying."

This lesson introduces the framework that solves this problem: **PRIMM** -- Predict, Run, Investigate, Modify, Make. It is a research-validated method that teaches you to read and understand code before you ever try to write it. In the AI era, where code generation is nearly free, PRIMM's emphasis on comprehension is more relevant than it was when it was invented.

---

## The Research Behind PRIMM

PRIMM was created by **Sue Sentance** and **Jane Waite**, who introduced the framework in a 2017 paper presented at the WiPSCE conference in Nijmegen, the Netherlands. **Maria Kallia** joined the research team for the 2019 publications that provided the framework's empirical foundation.

The landmark study was published in 2019 as "Teaching computer programming with PRIMM: a sociocultural perspective" in *Computer Science Education*, Vol. 29, No. 2-3, pp. 136-176 (DOI: 10.1080/08993408.2019.1608781). A companion paper, "Teachers' Experiences of using PRIMM to Teach Programming in School," appeared in the *Proceedings of SIGCSE '19*, pp. 476-482 (DOI: 10.1145/3287324.3287477).

The study was mixed-methods and quasi-experimental, conducted with **493 students across 13 schools in England**, with students aged 11-14. The key finding: **learners using PRIMM outperformed control groups on post-tests**. The framework proved particularly effective for mixed-ability classes -- students of different skill levels all benefited from the structured progression.

PRIMM is grounded in **Lev Vygotsky's sociocultural theory of learning** -- the idea that knowledge transfers from the social plane (discussion, collaboration, shared language) to the cognitive plane (individual understanding). Language acts as a mediator: when students talk about code before writing it, they build the vocabulary and mental models that make writing possible. Vygotsky's concept of the *Zone of Proximal Development* -- the gap between what a learner can do alone and what they can do with guidance -- is exactly what PRIMM targets. Each stage provides just enough scaffolding to pull learners into new territory.

Since its publication, PRIMM has been adopted in **England** (where the studies took place), **Germany** (Bavarian school textbooks), the **USA** (CodeHS platform), **Hong Kong**, **Norway**, **Argentina**, **Tasmania** (Australia), and **Turkey**. The four core publications have accumulated **188 citations** as of March 2024. The current research home is the Raspberry Pi Computing Education Research Centre at https://computingeducationresearch.org/projects/primm/.

### The Inversion That Makes PRIMM Different

Most programming courses start at the end. Lesson one: write a Hello World program. Lesson two: write a program that adds numbers. The assumption is that writing code teaches you to understand it.

PRIMM inverts this. It starts at the beginning -- **reading** -- and works toward writing. The five stages are:

1. **Predict** -- Read code and predict what it will do *before* running it
2. **Run** -- Execute the code and compare the actual output to your prediction
3. **Investigate** -- Probe the code: trace variables, test edge cases, ask questions
4. **Modify** -- Change the code to alter its behavior in targeted ways
5. **Make** -- Write a new program that applies what you learned

Four of the five stages build understanding. Only the last one involves writing from scratch. This is not an accident. It reflects what the research showed: comprehension is the foundation that makes production possible.

---

## The Five Stages in Action

To see how PRIMM works in practice, we will walk through all five stages using a single Python program.

> **About the code below:** You have not learned Python yet. That is the point. You are seeing what the PRIMM process looks like with real code. Focus on the *process*, not the syntax. When you encounter Python in Chapter 33, you will already know how to approach it.

### Stage 1: Predict

Read the following program. Do not run it. Do not scroll past it. Stop and predict what it will print.

```python
names: list[str] = ["Amara", "Kenji", "Sofia", "Liam"]
greeting: str = "Welcome to the Agent Factory"

for name in names:
    message: str = f"{greeting}, {name}!"
    print(message)
```

**What happens in your brain when you predict:**

1. **Parsing structure.** You notice a list of names, a greeting string, and a `for` loop. Even without knowing Python syntax, you can see that the loop does something with each name.
2. **Reasoning about sequence.** The loop processes names in order -- Amara first, then Kenji, then Sofia, then Liam. The `f"{greeting}, {name}!"` combines the greeting with each name.
3. **Building a mental model.** You construct a picture: the program will print four lines, each combining the greeting with one name.
4. **Committing to an answer.** You write down (or say aloud) what you think the output will be. This commitment is critical -- a vague sense of "it probably prints greetings" is not a prediction. A prediction is specific and falsifiable.

Write your prediction now before reading further.

### Stage 2: Run

Here is the actual output:

**Output:**

```
Welcome to the Agent Factory, Amara!
Welcome to the Agent Factory, Kenji!
Welcome to the Agent Factory, Sofia!
Welcome to the Agent Factory, Liam!
```

Compare your prediction to the actual result. Three outcomes are possible:

- **Exact match.** Your mental model is accurate for this code pattern. Good -- but do not stop here. Investigate why it worked.
- **Close but not exact.** Perhaps you predicted the right content but the wrong format (missing the exclamation mark, for example). The gap reveals what your mental model missed.
- **Significantly wrong.** This is not failure -- it is the most valuable outcome. The gap between your prediction and reality is exactly where learning happens. Every wrong prediction exposes an assumption you did not know you were making.

The prediction-reality gap is the engine of PRIMM. Without the prediction step, running code teaches you nothing -- you see output and think "okay." With the prediction step, you have a hypothesis to test. That transforms passive observation into active learning.

### Stage 3: Investigate

Investigation means probing the code to build deeper understanding. Here are the kinds of questions you ask:

**Tracing variables.** What is the value of `name` during the first iteration of the loop? It is `"Amara"`. During the second? `"Kenji"`. What is `message` at each step? Tracing forces you to simulate the computer's execution in your head -- the single most important skill in programming.

**Testing edge cases.** What happens if `names` is an empty list? The loop body never executes. No output is printed. The program does not crash -- it simply does nothing. Understanding this behavior teaches you how `for` loops handle the boundary between "some items" and "no items."

**Using AI as an investigation partner.** This is where your AI coding assistant becomes genuinely useful -- not to generate code, but to answer questions about code you are reading:

```
I am reading a Python program that uses a for loop over a list of strings.
The list is: ["Amara", "Kenji", "Sofia", "Liam"]
Inside the loop, it builds a formatted string using an f-string.

Question: What would happen if I added a duplicate name to the list,
like ["Amara", "Kenji", "Sofia", "Liam", "Amara"]? Would the program
skip the duplicate or print it twice?
```

Your AI assistant will explain that Python lists allow duplicates, so `"Amara"` would print twice. But here is the critical rule of investigation:

**Verify every AI explanation by running the code yourself.** The AI might be wrong. It might be right but imprecise. The only way to know is to run the experiment. Investigation is not about getting answers -- it is about building the habit of questioning and verifying.

### Stage 4: Modify

Modification requires understanding *where* to change code and *what* the change will do. Each task below demands more comprehension than the last.

**Add a counter.** Print a number before each greeting so the output reads `1. Welcome to the Agent Factory, Amara!` and so on. You need to figure out where to introduce a counter variable and how to increment it inside the loop.

**Add a conditional.** Print a special message for one name -- for example, `"Welcome to the Agent Factory, Sofia! (Team Lead)"` while keeping the standard greeting for everyone else. This requires understanding how to add a condition inside the loop body.

**Reverse the list.** Make the greetings print in reverse order -- Liam first, Amara last -- without changing the list itself. You need to find a way to iterate backwards.

Each modification is small, but each one forces you to understand a different aspect of the program. You cannot add a counter without understanding the loop. You cannot add a conditional without understanding how Python evaluates conditions. You cannot reverse iteration without understanding how lists work.

### Stage 5: Make

Now -- and only now -- you write a new program. The goal is a **team directory** that stores each person's name and role, then prints a formatted roster. The process:

1. **Write a specification first.** Before touching code, describe what the program should do: "Given a collection of team members with names and roles, print each member's name and role in a formatted line."

2. **Attempt it yourself.** Try writing the code based on what you learned from the greeting program. You will not get it perfect. That is expected.

3. **Use AI for targeted help.** When you get stuck, ask a specific question -- not "write me a team directory" but "I have a list of dictionaries in Python. How do I access the value for a specific key inside a for loop?"

4. **Run your code through the Predict-Run cycle.** Before executing your new program, predict what it will output. Then run it. Compare. This is PRIMM applied recursively -- you are now using the method to verify your own work.

The Make stage completes the cycle. You started by reading someone else's code. You end by writing your own. Every stage in between built the comprehension that makes writing possible.

---

## The Comprehension Crisis

PRIMM was created in 2017 for secondary school classrooms. Why does it matter *more* in 2026 than it did then?

Because AI changed the economics of code production. Before AI coding assistants, writing code was slow and expensive. A developer spent hours translating requirements into syntax, debugging typos, looking up API signatures. The bottleneck was **production** -- the act of turning ideas into running code.

AI made production nearly free. A well-crafted prompt generates a working function in seconds. But this created a new problem: **working code without understanding**. James's fifty lines of Python work perfectly -- and he cannot explain what line twelve does. He has a program. He does not have knowledge.

This is the pedagogical trap of the AI era. Students can produce code faster than ever, but the speed creates an illusion of competence. The bottleneck has shifted.

| Era | Bottleneck | Primary Skill | What Slows You Down |
|-----|-----------|---------------|---------------------|
| Pre-AI | Writing code | Typing, syntax recall, API lookup | Producing code from scratch |
| AI era | Verifying code | Reading, predicting, tracing | Deciding whether generated code is correct |

Look at PRIMM's structure through this lens. Four of five stages -- Predict, Run, Investigate, Modify -- build the verification skills that are now the bottleneck. Only one stage -- Make -- involves writing from scratch. **PRIMM's 4:1 ratio of understanding to production is exactly right for an era where production is cheap and verification is expensive.**

---

:::note If you are new to programming
This is good news. The most important programming skill in 2026 is not typing speed or syntax memorization. It is the ability to read code and predict what it does. PRIMM builds that skill from your very first lesson. You are starting with the skill that matters most.
:::

:::note If you have coded before
You already do this informally when reviewing pull requests or debugging a colleague's code. PRIMM formalizes the process and gives you structured vocabulary for a skill you have been practicing by instinct. The framework will sharpen what you already know.
:::

---

## Key Takeaways

- **PRIMM stands for Predict, Run, Investigate, Modify, Make** -- a five-stage method that starts with reading code and ends with writing it.
- **The research is robust**: 493 students, 13 schools, quasi-experimental design. Learners using PRIMM outperformed control groups, especially in mixed-ability classes.
- **The theory is Vygotsky's sociocultural learning**: knowledge moves from social interaction (discussing code) to individual understanding (writing code). Language mediates the transfer.
- **The prediction-reality gap is the learning engine**: committing to a prediction before running code turns passive observation into active hypothesis testing.
- **PRIMM's 4:1 comprehension-to-production ratio matches the AI era**, where generating code is cheap but verifying code is the bottleneck skill.

---

## Looking Ahead

You now know the method. In the next lesson, you will see how AI coding assistants integrate into each PRIMM stage -- transforming PRIMM into **PRIMM-AI**, the learning operating system you will use throughout every programming chapter in this book.

---

## Try With AI

### Prompt 1: Explore the Prediction Process

```
I am learning the PRIMM framework for reading code. Here is a short Python program:

numbers: list[int] = [10, 20, 30, 40, 50]
total: int = 0

for num in numbers:
    total = total + num

print(f"The sum is {total}")

Before you tell me the answer, ask me what I think the output will be.
After I give my prediction, show me the actual output and explain
any differences. Then ask me one investigation question about the code.
```

**What you are learning:** The Predict-Run-Investigate cycle with AI as a structured learning partner. The prompt asks AI to *quiz you* rather than *give you answers* -- this keeps you in the active learning role that PRIMM requires.

### Prompt 2: Investigate an Edge Case

```
I am practicing the Investigate stage of PRIMM. Here is a program:

names: list[str] = ["Amara", "Kenji", "Sofia", "Liam"]
greeting: str = "Welcome to the Agent Factory"

for name in names:
    message: str = f"{greeting}, {name}!"
    print(message)

I want to investigate what happens when things change. Walk me through
these scenarios one at a time, asking me to predict before revealing
the answer each time:

1. What if the list has only one name?
2. What if the list is empty?
3. What if I change the greeting string to an empty string ""?
4. What if I accidentally use 'Name' (capital N) instead of 'name' in the f-string?

For each one, explain WHY the output is what it is.
```

**What you are learning:** Systematic investigation through edge-case exploration. Each scenario tests a different assumption about how the code works -- list length, empty inputs, variable naming -- and builds your mental model of Python's behavior through concrete experiments rather than abstract rules.
