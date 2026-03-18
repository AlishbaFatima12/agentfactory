---
slug: /Business-Domain-Agent-Workflows/productivity-agentic-office/task-intelligence
sidebar_position: 6
title: "Task Intelligence"
description: "Move beyond basic task lists to intelligent task capture and prioritisation — learn the brain dump pattern, P1/P2/P3 priority classification, the task-vs-project distinction, and critical path identification using the /agentic-office:task-intelligence command"
keywords:
  [
    "task intelligence",
    "brain dump",
    "task prioritisation",
    "P1 P2 P3",
    "critical path",
    "task capture",
    "priority classification",
    "weekly planning",
    "task management",
    "agentic office",
    "productivity plugin",
    "task vs project",
  ]
chapter: 39
lesson: 6
duration_minutes: 40

# HIDDEN SKILLS METADATA
skills:
  - name: "Capture Unstructured Task Input Using the Brain Dump Pattern"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can take a raw, unstructured collection of tasks, notes, and commitments from a morning brain dump and process them through /agentic-office:task-intelligence to produce a structured, prioritised task list with owners, deadlines, and project references"

  - name: "Apply P1/P2/P3 Priority Classification Rules to a Task Set"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can evaluate a set of tasks against the five priority sorting criteria (hard deadline, blocking others, P1 project, consequence of slipping, urgency vs importance) and correctly classify each task as P1, P2, or P3 with a defensible rationale"

  - name: "Identify Critical Path Items from a Prioritised Task List"
    proficiency_level: "B2"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Information-Literacy"
    measurable_at_this_level: "Student can extract the 3-5 items from a prioritised task list that form the week's critical path — the sequence of tasks where a slip on any one delays everything downstream — and distinguish these from tasks that are important but not path-critical"

learning_objectives:
  - objective: "Distinguish between a task list, a task system, and task intelligence, explaining why capture-in-context and cross-task prioritisation produce better outcomes than isolated task tracking"
    proficiency_level: "B1"
    bloom_level: "Understand"
    assessment_method: "Student can articulate the difference between the official productivity plugin's task CRUD (add/complete/query) and the agentic-office task-intelligence skill (brain dump capture, P1/P2/P3 classification, critical path identification) with at least two concrete examples of what one does that the other cannot"

  - objective: "Process a morning brain dump through /agentic-office:task-intelligence and produce a P1/P2/P3 prioritised task list with delegation candidates and blocked items identified"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Given a set of 6+ raw task notes, student produces a structured output with correct priority classification, project references from work.local.md, delegation candidates with communication guidance, and at least one blocked/at-risk item flagged"

  - objective: "Challenge and correct an AI-generated priority classification by applying the five priority sorting criteria"
    proficiency_level: "B2"
    bloom_level: "Evaluate"
    assessment_method: "Student identifies at least one task where the initial P1/P2/P3 classification is debatable, applies the five sorting criteria explicitly, and provides a reasoned argument for reclassification"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "The brain dump pattern — extracting distinct tasks from unstructured input and enriching with project context"
    - "P1/P2/P3 priority classification — the five sorting criteria applied in order"
    - "Task vs project distinction — single-session outputs vs multi-day milestone work"
    - "Critical path identification — the sequence of tasks where a slip delays everything downstream"
    - "Official plugin vs custom plugin — task CRUD vs task intelligence"
  assessment: "5 concepts at B1-B2 level. The brain dump pattern is intuitive and immediately applicable — every reader has experienced the 'everything in my head' problem. The P1/P2/P3 classification builds sequentially through five clear criteria. The task-vs-project distinction resolves a confusion readers encounter daily. The critical path concept is the most abstract but is grounded in the worked example. The official-vs-custom comparison clarifies the two-plugin architecture for this specific domain."

differentiation:
  extension_for_advanced: "Run a weekly planning cycle using /agentic-office:task-intelligence with type:'weekly-planning'. Pull in your project statuses, open delegations, and upcoming deadlines. Compare the weekly critical path output against the daily task capture — how do priorities shift when you plan at the week level vs the day level? What tasks that seemed P1 on Monday are actually P2 when viewed against the full week?"
  remedial_for_struggling: "Start with just three tasks from your real work. Write them down informally — as you would in a notebook or a text message to yourself. Paste them into /agentic-office:task-intelligence and read the output. Focus on two things: (1) did the skill identify the right project for each task? (2) does the priority feel correct? If not, tell the skill why you disagree. The goal is to develop your judgment about priorities, not to produce a perfect list on the first attempt."

teaching_guide:
  key_points:
    - "A task list is not a task system. The difference is context (where did this come from?), prioritisation (against each other, not individually), delegation tracking (who owns it now?), and risk surfacing (what is overdue or blocked?)"
    - "The brain dump pattern works because it separates capture from classification — you dump everything first, then the skill structures and enriches it. This prevents the common trap of filtering while capturing, which causes tasks to be forgotten"
    - "P1 does not mean urgent — it means urgent AND important. The five sorting criteria force a distinction between genuine urgency (hard deadlines, blocking others) and habitual urgency (everything feels important). Never more than 5 items classified as P1"
    - "The task-vs-project distinction prevents scope confusion. If a 'task' has more than 3 steps and spans more than one day, it is a project — create a project entry in work.local.md and break it into single-session tasks"
  misconceptions:
    - "Everything that feels urgent is P1. Correction: urgency is a feeling; priority is a judgment. Apply the five criteria in order — most 'urgent' items do not have hard deadlines and are not blocking anyone, making them P2 at most."
    - "The task-intelligence skill replaces the official productivity plugin's task management. Correction: they serve different functions. The official plugin provides task CRUD — adding, completing, and querying tasks in TASKS.md. The custom skill provides intelligence — brain dump capture, priority classification, critical path identification. You need both: one to store tasks, the other to think about them."
    - "A longer task list means more work to do. Correction: a longer task list often means more work to delegate, drop, or reclassify. The brain dump captures everything; the intelligence layer decides what actually requires your attention this week."
  discussion_prompts:
    - "You run a brain dump on Monday morning and the skill classifies 4 items as P1. By Wednesday, one of those P1 items has been resolved by someone else without your involvement. What does this tell you about the original classification? Should the skill have caught this?"
    - "Your colleague always marks everything as P1 and wonders why nothing gets done. Using the five priority sorting criteria, how would you coach them to reclassify their list? What is the maximum number of P1 items that is realistic for a single week?"
  teaching_tips:
    - "The Panaversity brain dump example is the lesson's anchor. Walk through it slowly — many readers will immediately recognise the 'everything in my head' problem. The key teaching moment is when the skill enriches TASK-001 (Project Nighthawk) with context that the reader did not provide — the skill pulled it from work.local.md. This is task intelligence, not task management."
    - "The five priority sorting criteria should be taught as a decision tree, not a checklist. Work through them in order for one task (e.g. the BSI ISO renewal) to show how each criterion narrows the classification. Students who try to apply all five simultaneously will get confused."
---

# Task Intelligence

It is Monday morning. Zia Khan arrives at his desk with six things in his head — none of them written down, all of them competing for attention. Project Nighthawk's facility agreement has stalled for over ten days and the Q3 plan is now at risk. Omar needs an analytics brief for the investor deck. Ayesha sent her first analysis output over the weekend and a delayed review would send exactly the wrong signal to a new starter in her onboarding window. The BSI ISO 27001 renewal has gone quiet for two weeks. Three agenda items need to go into the Executive Weekly before nine o'clock. And somewhere in there, Chapter 28 needs to be finished by Thursday.

This is not a task management problem — it is a task _intelligence_ problem. Writing these six items into a list does not answer the question that actually matters: _which of these should I do first, and which should I not do at all?_ A task list records what exists. Task intelligence determines what matters, what is at risk, what can be delegated, and what forms the critical path through the week.

This lesson introduces the brain dump pattern, the P1/P2/P3 priority classification system, the task-vs-project distinction, and critical path identification — all powered by the `/agentic-office:task-intelligence` command.

## Task Lists vs Task Systems vs Task Intelligence

Most professionals manage tasks at one of three levels, and the difference between them determines how much time they spend on task management overhead versus actual execution.

| Level                 | What It Does                                                                                             | What It Misses                                     |
| --------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| **Task list**         | Records items                                                                                            | Context, priority, dependencies, delegation, risk  |
| **Task system**       | Adds structure — owners, deadlines, status                                                               | Cross-task prioritisation, critical path, patterns |
| **Task intelligence** | Prioritises against each other, surfaces risk, identifies delegation candidates, finds the critical path | Nothing — this is the goal                         |

The official `productivity` plugin operates at the task system level. It provides TASKS.md-based task tracking — you can add tasks, complete them, and query your list. This is useful and necessary. But it does not answer: "Given everything on my plate, what should I do _first_?"

The custom `agentic-office` plugin's `task-intelligence` skill operates at the task intelligence level. It takes unstructured input (a brain dump, meeting notes, a stream of consciousness), structures it, enriches it with context from your `work.local.md` memory, applies the P1/P2/P3 priority classification, identifies delegation candidates, and surfaces anything that is blocked or at risk.

:::info Two Plugins, Different Jobs
The official plugin's `task-management` skill and the custom plugin's `task-intelligence` skill are complementary, not competing. Use the official plugin to _store_ tasks (`/productivity:start` creates your TASKS.md). Use the custom plugin to _think_ about tasks (`/agentic-office:task-intelligence` classifies and plans). The storage layer and the intelligence layer serve different functions — you need both.
:::

## The Brain Dump Pattern

The brain dump pattern separates capture from classification. This separation matters because the two activities use different cognitive modes — capture requires openness (write everything, filter nothing), while classification requires judgment (evaluate, compare, decide). Trying to do both simultaneously causes tasks to be forgotten or misclassified.

The pattern works in three steps:

**Step 1 — Dump everything.** Write every task, commitment, follow-up, and half-formed thought. Do not evaluate while capturing. Do not ask "is this important?" — just get it out of your head and onto the screen.

**Step 2 — The skill structures and enriches.** `/agentic-office:task-intelligence` takes your raw dump and does four things:

1. Extracts every distinct task (even vague or incomplete ones)
2. Enriches each with project context from `work.local.md` (connecting tasks to known projects, people, and deadlines)
3. Identifies dependencies between tasks (which tasks block others?)
4. Flags items that should be delegated or dropped

**Step 3 — You review and challenge.** The skill's classification is a starting point, not a verdict. You apply your judgment — the skill does not know that Omar had a difficult week, or that the BSI renewal is politically sensitive, or that Ayesha's morale matters more than the task's deadline suggests.

## P1/P2/P3 Priority Classification

Every captured task is classified into one of three priority levels. The classification is not arbitrary — it follows five criteria applied in order:

### The Five Sorting Criteria

| Order | Criterion                    | Question to Ask                                                    |
| ----- | ---------------------------- | ------------------------------------------------------------------ |
| 1     | **Hard deadline?**           | Is there a date-certain that cannot move?                          |
| 2     | **Blocking someone else?**   | Is another person or team waiting on this before they can proceed? |
| 3     | **P1 project?**              | Does this task belong to a project classified as P1?               |
| 4     | **Consequence of slipping?** | What actually happens if this slips by one week?                   |
| 5     | **Urgency vs importance?**   | Is the urgency feeling real (criteria 1-4) or habitual?            |

Apply these in order. A task with a hard deadline that is also blocking someone is P1 without question. A task that _feels_ urgent but has no hard deadline, is not blocking anyone, and belongs to a P3 project is — by the criteria — P3, regardless of how urgent it feels.

### The Three Levels

**P1 — Urgent / High Impact:** Hard deadline today or this week, blocking others, or attached to a P1 project where slippage has real consequences. Maximum five items — if you have more than five P1 items, you are not prioritising, you are panicking. Force a reclassification.

**P2 — Important / This Week:** Matters this week but will not cause immediate damage if it slips a day. Includes tasks on P1 projects that are not yet time-critical, tasks where delayed action sends the wrong signal (e.g. reviewing a new starter's first output), and preparation work with upcoming deadlines.

**P3 — Standard / Backlog:** Important but not time-critical this week. Follow-ups, administrative tasks, items that can be batched or delegated. The key question for P3 items: "If I do not touch this for a week, what actually happens?" If the answer is "nothing material" — it is P3.

:::caution The Five-Item P1 Rule
If your brain dump produces more than five P1 items, the skill will push back and ask you to reclassify. This is intentional. More than five P1 items means everything is urgent, which means nothing is prioritised. The discipline is choosing — not listing.
:::

## The Worked Example: Zia's Monday Brain Dump

Here is Zia's Monday morning brain dump, exactly as captured:

```
/agentic-office:task-intelligence
> Capture from my notes this morning:
  - Need to finish Chapter 28 draft by Thursday
  - Omar needs the analytics brief for the investor deck — he asked yesterday
  - Follow up with BSI about ISO 27001 renewal — been waiting 2 weeks
  - Review Ayesha's first analysis output — she sent it this morning
  - Prep for the Monday Executive Weekly — three agenda items to add
  - Check Project Nighthawk facility status — it's been 10 days since
    last update and this is blocking the Q3 plan
```

Six items. Unstructured. No priorities, no deadlines, no project references. This is how tasks actually arrive in a professional's head — messy, incomplete, and competing for attention.

**Sample task-intelligence output:**

```
TASK CAPTURE — Monday 17 March 2026
════════════════════════════════════════════════════════════
6 tasks captured | 1 overdue risk | 2 delegation candidates

── PRIORITY SORT ───────────────────────────────────────────

P1 — URGENT / HIGH IMPACT:
  ☐ [TASK-001] Project Nighthawk: facility status check
    Context:  No update for 10 days; blocking Q3 plan
    Due:      Today — this is overdue already
    Action:   Contact facilities liaison directly; escalate if no response
    Project:  Project Nighthawk
    Note:     Q3 timeline depends on this; every day of delay
              compresses the downstream plan

  ☐ [TASK-002] Analytics brief for investor deck (Omar)
    Context:  Omar requested yesterday; investor deck presumably
              has a deadline
    Due:      Clarify deadline with Omar today
    Action:   Send Omar a brief (what exactly is needed; by when; format)
    Delegate to: Omar Farooq
    Note:     Give Omar lead time — he dislikes last-minute asks

P2 — IMPORTANT / THIS WEEK:
  ☐ [TASK-003] Chapter 28 draft complete
    Due:      Thursday
    Project:  AgentFactory
    Note:     P1 project; treat as high priority despite P2 urgency rating

  ☐ [TASK-004] Review Ayesha's first analysis output
    Context:  She sent this morning; she is a new starter in onboarding
    Due:      Recommended today or tomorrow — timely feedback matters
              for new starters; a week's wait sends the wrong signal
    Note:     Be specific and encouraging; she is still in her 30-day
              window

  ☐ [TASK-005] Executive Weekly prep — 3 agenda items
    Due:      Before Monday 09:00 PKT
    Action:   Confirm agenda items; send to attendees by Friday

P3 — STANDARD:
  ☐ [TASK-006] BSI ISO 27001 renewal follow-up
    Context:  Waiting 2 weeks — push for response
    Due:      This week
    Delegate to: [Compliance owner — configure in work.local.md]

── DELEGATION CANDIDATES ───────────────────────────────────
  TASK-002 → Omar Farooq (with clear brief — what, format, deadline)
  TASK-006 → Compliance owner (or operations team)

── BLOCKED / RISK ──────────────────────────────────────────
  TASK-001: Project Nighthawk stalled — escalation risk
  TASK-002: Investor deck deadline unknown — clarify before delegating
════════════════════════════════════════════════════════════
```

### Reading the Output

Three things stand out immediately:

**1. The skill enriched with context Zia did not provide.** TASK-001 was entered as "check Project Nighthawk facility status" — six words. The output adds that it is blocking the Q3 plan, that it is already overdue, and that escalation may be needed. This context came from `work.local.md`, where Project Nighthawk is recorded as a P2 project with a Q3 target. The skill connected the task to the project and inferred the urgency.

**2. The classification is debatable — and that is the point.** TASK-003 (Chapter 28 draft) is classified as P2 despite belonging to AgentFactory, a P1 project. The skill's reasoning: the deadline is Thursday, not today. A reasonable challenge: because AgentFactory is the organisation's primary initiative and the deadline is three days away, should this be P1? The five criteria help: there is a hard deadline (criterion 1), but it is not today; it is not blocking anyone yet (criterion 2); it is a P1 project task (criterion 3). This is a judgment call — and the skill flags it with "treat as high priority despite P2 urgency rating."

**3. Two tasks are delegation candidates.** The analytics brief (TASK-002) should be delegated to Omar with a clear brief. The BSI follow-up (TASK-006) should be delegated to whoever owns compliance. The skill identifies delegation candidates but does not delegate for you — that requires the `/agentic-office:delegation` skill, which you will learn in [Lesson 7](./07-delegation-as-a-discipline.md).

## Task vs Project

A common source of confusion: items that look like tasks but are actually projects.

| Characteristic | Task                                | Project                                        |
| -------------- | ----------------------------------- | ---------------------------------------------- |
| **Duration**   | Completable in one session          | Spans days or weeks                            |
| **Output**     | Single clear deliverable            | Multiple milestones                            |
| **Steps**      | 1-3 concrete actions                | More than 3 steps across multiple days         |
| **Tracking**   | A line in TASKS.md                  | A project entry in `work.local.md`             |
| **Planning**   | `/agentic-office:task-intelligence` | `/agentic-office:progress-tracker` (Lesson 10) |

"Finish Chapter 28 draft" looks like a task. But if finishing it requires reviewing three sections, incorporating feedback from two reviewers, updating the frontmatter, and running a quality check — that is a project with multiple tasks inside it.

The task-intelligence skill catches this. If a captured item has more than three steps and spans more than one day, the output will flag it:

```
⚠ TASK-003 may be a project, not a task. It has an estimated
  4+ steps spanning 3 days. Consider creating a project entry
  in work.local.md and breaking it into single-session tasks.
```

The distinction matters because projects need milestone planning (covered in [Lesson 10](./10-the-executive-dashboard.md)), not just priority classification.

## Critical Path Identification

A prioritised list tells you what is important. A critical path tells you what sequence to execute in. The difference: you can have five P1 items, but only some of them form a sequence where a slip on one delays everything downstream.

From Zia's output, the critical path for Monday is:

1. **TASK-001 — Project Nighthawk status check** → Must happen first because the outcome determines whether Zia needs to escalate (which could consume the rest of the morning)
2. **TASK-002 — Clarify investor deck deadline with Omar** → Must happen early because Omar needs lead time, and the delegation brief depends on knowing the deadline
3. **TASK-004 — Review Ayesha's analysis** → Should happen today because delay damages a new-starter relationship, but it does not block any other task
4. **TASK-005 — Executive Weekly prep** → Due Friday, not today — but it depends on knowing the Nighthawk status (from TASK-001)

TASK-003 (Chapter 28) and TASK-006 (BSI renewal) are not on today's critical path. Chapter 28 is due Thursday — today's priority is the sequence above. BSI is delegatable and has no time dependency this week.

:::info Critical Path Is Not the Same as Priority
A P2 task can be on the critical path if it blocks a P1 task later in the week. A P1 task might not be on today's critical path if it is due Friday and has no dependencies. The critical path is about _sequence and dependencies_ — priority is about _importance and urgency_.
:::

## Exercise: Your Task Intelligence Sprint

**Type:** Applied Practice
**Time:** 60 minutes
**Plugin command:** `/agentic-office:task-intelligence`
**Goal:** Capture, classify, challenge, and plan your week using the brain dump pattern

### Step 1 — Brain Dump (10 minutes)

Set a timer. Write down EVERYTHING that is on your mind — tasks, follow-ups, half-formed commitments, things you promised someone, things you are worried about forgetting. Do not evaluate. Do not prioritise. Just dump.

Aim for at least 8-10 items. If you run out, ask yourself:

- What did I promise someone last week that I have not delivered?
- What is overdue?
- What meeting is coming up that I am not prepared for?
- What will someone chase me about if I do not act this week?

### Step 2 — Process Through Task Intelligence (10 minutes)

Paste your brain dump into the task-intelligence skill:

```
/agentic-office:task-intelligence
> Capture from my brain dump:
  [Paste your items here — keep them raw and unstructured]
```

Read the output. Note which tasks the skill connected to projects in your `work.local.md` (if configured). Note the P1/P2/P3 classification.

### Step 3 — Challenge the Classification (15 minutes)

Pick at least two tasks where you disagree with the priority classification — or where the classification is borderline. For each one, apply the five sorting criteria explicitly:

1. Hard deadline? (Yes/No — what date?)
2. Blocking someone? (Who? What are they waiting for?)
3. P1 project? (Is this task attached to your most important initiative?)
4. Consequence of slipping one week? (What actually happens?)
5. Real urgency or habitual urgency? (Would you still call it urgent after applying criteria 1-4?)

Tell the skill why you disagree:

```
I think TASK-004 should be P1, not P2. Here is why:
[Your reasoning using the five criteria]
```

The skill will either accept your reclassification or push back with its own reasoning. This dialogue is the point — developing your prioritisation judgment is more valuable than any single classification.

### Step 4 — Identify Your Critical Path (15 minutes)

From your classified list, identify the 3-5 tasks that form this week's critical path — the sequence where a slip on any one delays something downstream.

Ask the skill:

```
From my prioritised list, what is the critical path for this week?
Which tasks depend on other tasks completing first?
```

Review the output. Does the sequence make sense? Are there dependencies the skill missed because they are not captured in `work.local.md`?

### Step 5 — Commit to the Plan (10 minutes)

Write your plan for the week:

- Monday: [critical path items 1-2]
- Tuesday-Wednesday: [P1 and P2 items]
- Thursday-Friday: [remaining P2 items + any P3 items you choose to address]

Identify any tasks you are choosing to _not_ do this week. Saying "not this week" explicitly is better than letting items silently decay in a backlog.

**Deliverable:** A prioritised task list with P1/P2/P3 classification, at least two challenged classifications with your reasoning, a critical path of 3-5 items for the week, and a day-by-day commitment plan.

## Try With AI

:::tip Try With AI
Use these prompts in Cowork or your preferred AI assistant.

**Reproduce**: Apply the brain dump pattern to the Panaversity case study.

```
Here are six raw task notes from a Monday morning brain dump.
Classify each as P1, P2, or P3 using these five criteria in order:
(1) hard deadline, (2) blocking someone, (3) P1 project,
(4) consequence of slipping one week, (5) real vs habitual urgency.

Tasks:
- Finish Chapter 28 draft — due Thursday
- Omar needs analytics brief for investor deck — asked yesterday
- Follow up with BSI about ISO 27001 renewal — waiting 2 weeks
- Review Ayesha's first analysis — she's a new starter, sent it today
- Prep 3 agenda items for Executive Weekly — Monday 09:00
- Check Project Nighthawk facility status — 10 days, no update,
  blocking Q3 plan

For each task, show which criteria applied and why you chose
that priority level. Then identify the critical path for Monday.
```

**What you are learning:** Working through the five criteria explicitly for each task builds the pattern recognition needed to classify tasks quickly. After this exercise, you should be able to apply the criteria without needing to list them out — the judgment becomes automatic.

**Adapt**: Apply the brain dump pattern to your own work.

```
Here is my Monday morning brain dump — everything that is on my
mind right now. I have not structured or prioritised any of it:

[Paste your real brain dump here — at least 6 items]

Apply the P1/P2/P3 classification using the five sorting criteria.
For any item that could be a project (more than 3 steps, spans
multiple days), flag it and explain why it should be tracked
differently from a single-session task.

Then identify my critical path for this week — the 3-5 items
where a slip on one delays something downstream.
```

**What you are learning:** Applying the brain dump pattern to your own tasks reveals two things: which items you have been carrying in your head without acting on (these are often the P3 items that silently consume mental energy), and which items are projects disguised as tasks (these need milestone planning, not just prioritisation).

**Apply**: Run a cross-domain task capture for a scenario that spans multiple functions.

```
I am coordinating a product launch that involves three teams:

- Engineering: 4 features to complete, 2 are behind schedule
- Marketing: launch campaign ready but waiting on final product
  screenshots and pricing confirmation
- Customer Success: training materials not started, onboarding
  flow not tested, support team has not been briefed

Capture all the tasks implied by this situation. Classify each
as P1/P2/P3 using the five criteria. Identify which tasks are
blocking other teams (cross-functional dependencies). Flag any
items that are projects, not tasks. Produce a critical path
that shows the sequence across all three teams.
```

**What you are learning:** Cross-domain task intelligence is harder than single-domain because dependencies span teams. A task that is P3 for Engineering (finishing documentation) might be P1 for Customer Success (they cannot start training without it). The critical path in a cross-domain scenario is always longer than any single team's path — and the bottleneck is almost always at a handoff point between teams, not within a team.
:::

## Flashcards Study Aid

<Flashcards />

---

Continue to [Lesson 7: Delegation as a Discipline →](./07-delegation-as-a-discipline.md)
