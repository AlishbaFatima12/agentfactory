---
sidebar_position: 4
title: "Axiom IV: Composition Over Monoliths"
chapter: 31
lesson: 4
duration_minutes: 22
description: "Complex systems are built from composable, focused units that communicate through well-defined interfaces—the Unix philosophy applied to software architecture"
keywords: ["composition", "unix philosophy", "modularity", "interfaces", "dependency injection", "separation of concerns", "composable units"]

# HIDDEN SKILLS METADATA
skills:
  - name: "Composable System Design"
    proficiency_level: "B1"
    category: "Technical"
    bloom_level: "Apply"
    digcomp_area: "Computational Thinking"
    measurable_at_this_level: "Student can decompose a monolithic function into composable units with clear interfaces, and explain why each unit is independently testable and replaceable"

  - name: "Interface-Based Architecture"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can distinguish tightly coupled systems from interface-based designs, and explain how interfaces enable independent evolution of components"

  - name: "Composition for AI Collaboration"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Analyze"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can evaluate whether a codebase structure enables or hinders effective AI-assisted development, identifying composition opportunities"

learning_objectives:
  - objective: "Decompose monolithic code into composable, focused units with well-defined interfaces"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Given a 100+ line monolithic function, student refactors it into 4-6 composable functions that can be independently tested and combined"

  - objective: "Explain how composition enables effective AI collaboration through focused context and independent generation"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student articulates three reasons why AI tools work better with composed systems than monoliths, with concrete examples"

  - objective: "Identify composition anti-patterns and propose interface-based alternatives"
    proficiency_level: "B1"
    bloom_level: "Analyze"
    assessment_method: "Student identifies anti-patterns (god classes, tight coupling, circular dependencies) in sample code and proposes composed alternatives"

cognitive_load:
  new_concepts: 6
  assessment: "6 concepts (Unix philosophy, composable units, interfaces, dependency injection, pipe-as-architecture, AI context windows) at upper limit of A2-B1 range (5-7) ✓"

differentiation:
  extension_for_advanced: "Implement a plugin architecture where new functionality is added by composing new modules without modifying existing code. Analyze how microservices apply composition at the deployment level."
  remedial_for_struggling: "Focus on refactoring a single monolithic function into three smaller functions. Demonstrate that each smaller function can be tested with a simple print statement or assert, while the monolith cannot."
---

# Axiom IV: Composition Over Monoliths

Axiom III turned James's fifteen-line script into a disciplined program — types, tests, error handling, packaging. One well-built tool. But a single well-built tool is not a system. The question from the last lesson remains: how do you combine well-built pieces into something larger without everything tangling together?

James was about to find out. Emma assigned him to the company's order management system — the core platform that handled every customer purchase. This system would follow him through the rest of the chapter, growing more disciplined with each axiom.

:::tip Focus on structure, not syntax
From this lesson onward, code examples use Python features you have not learned yet — classes, decorators, type annotations, and more. That is fine. Focus on the *architecture*: how code is organized, what each piece does, and why it is separate. The syntax will make sense when you reach the Python lessons later in Part 4.
:::

"Before you touch the order system," Emma told him on his second month, "I need to warn you about `process_order()`."

James opened the file. The function was 1,400 lines long. It validated the order, checked inventory, processed payment through Stripe, calculated shipping based on weight and destination, computed tax for three jurisdictions, generated a receipt PDF, updated loyalty points, logged analytics events, and sent a confirmation email. All in one function. All interleaved. Variable names from the payment section were reused in the shipping section two hundred lines later. A tax calculation on line 890 depended on an inventory check on line 340 that had been silently modified six months ago.

James's task was simple: add a discount code feature. After two days of tracing dependencies through 1,400 lines, he made a change on line 712 and ran the tests. The discount worked. But the tax calculation now produced wrong numbers for Canadian orders — because his change moved a variable assignment that the tax logic read three hundred lines below. He fixed the tax issue. The receipt PDF broke. He fixed the receipt. The loyalty points doubled.

"Now you understand why I warned you," Emma said. "That function is not code. It is a trap. Every change touches everything because nothing is separate."

Emma spent the following weekend showing James a different way to build the same logic — not as one massive function, but as small, focused units that connected through clear interfaces. Each unit did one thing. Each could be tested alone. Each could be changed without breaking the others. The discount feature, in the composed version, was a single new function inserted into a pipeline. Nothing else changed. Nothing else could break.

The difference between these two architectures is Axiom IV.

## The Problem Without This Axiom

James's `process_order()` was not written by a bad engineer. Like James's `deploy.sh` in Axiom I, it started small and grew one feature at a time. The first version was 80 lines — clean and readable. But without deliberate composition, software grows like a tangled vine. Each new feature weaves deeper into existing code. Each change requires understanding the entire system. Each bug hides behind layers of unrelated logic.

Here is the trajectory that James's team followed — and that every monolith follows:

| Month | What Happens | Consequence |
|-------|-------------|-------------|
| 1 | Single function works perfectly for initial scope | Developer feels productive |
| 3 | New requirements added inside the function | Function grows to 300 lines |
| 6 | Bug fix touches unrelated code paths | Regression in seemingly unrelated feature |
| 9 | New developer joins, cannot understand the function | Onboarding takes weeks instead of days |
| 12 | AI assistant asked to modify function | AI hallucinates because context exceeds useful window |
| 18 | Feature request requires architectural change | "We need to rewrite everything" |

The trajectory is predictable. Monoliths start convenient and become unmaintainable. Composed systems start with slightly more structure and remain maintainable indefinitely.

## The Axiom Defined

**Axiom IV: Composition Over Monoliths**

> Complex systems are built from composable, focused units. Each unit does one thing well. Units communicate through well-defined interfaces. The Unix philosophy applied to software architecture.

![Monolithic architecture versus compositional architecture: a single tangled block contrasted with focused, connected modules](https://pub-80f166e40b854371ac7b05053b435162.r2.dev/books/ai-native-dev/static/images/part-4/chapter-14/04-composition-over-monoliths.png)

Three properties define a composable unit:

1. **Focused**: It does one thing and does it completely
2. **Interface-defined**: Its inputs and outputs are explicit and typed
3. **Independent**: It can be tested, understood, and replaced without touching other units

When these properties hold, units compose naturally — like LEGO bricks that snap together in countless configurations, each brick useful on its own but powerful in combination. The 1,400-line `process_order()` had none of these properties. Emma's refactored version had all three.

## From Principle to Axiom

In [Chapter 6](/docs/General-Agents-Foundations/seven-principles/small-reversible-decomposition), you learned **Principle 4: Small, Reversible Decomposition**—breaking problems into atomic steps that can be independently verified and rolled back. That principle governs your *process*: how you approach solving problems.

Axiom IV governs your *architecture*: how you structure the solutions themselves.

| Aspect | Principle 4 (Process) | Axiom IV (Architecture) |
|--------|----------------------|------------------------|
| Focus | How you work | What you build |
| Unit | A commit, a step | A function, a module |
| Goal | Manageable progress | Maintainable systems |
| Reversibility | Git revert a step | Swap out a component |
| Scale | Task decomposition | System decomposition |

The principle says: "Break your work into small steps." The axiom says: "Build your systems from small parts." One is about the journey; the other is about the destination. Together, they ensure both your process and your product remain manageable.

<details>
<summary>**The Paper That Changed Software Architecture**</summary>

In Axiom I, you encountered Doug McIlroy's Unix philosophy: programs that do one thing well and work together through pipes. That philosophy governs how you compose *programs* through the shell. Axiom IV extends the same idea inside the programs themselves — to functions, modules, and systems. And the person who formalized this extension was not McIlroy, but a mathematician named David Parnas.

In 1972, Parnas published a paper at Carnegie Mellon with a title that reads like an axiom itself: "On the Criteria To Be Used in Decomposing Systems into Modules." The paper examined a single problem — a keyword-in-context indexing system — and showed two ways to decompose it. The first decomposition followed the obvious approach: break the system into steps that mirror the processing flow (input, shift, alphabetize, output). The second decomposition followed a different principle: break the system so that each module *hides a design decision* from the others.

The first approach was what every programmer instinctively did. The second was what Parnas argued they *should* do. His reasoning was precise: when a design decision is hidden inside a module, changing that decision affects only that module. When a design decision is shared across modules, changing it cascades through the entire system.

Parnas called this principle **information hiding**. It is the theoretical foundation for Axiom IV. James's `process_order()` violated it completely — every design decision (how to validate, how to calculate tax, how to format receipts) was exposed to every other part of the function. Changing any decision cascaded through 1,400 lines. Emma's composed version hid each decision inside a focused unit. Changing tax calculation affected `calculate_tax()` and nothing else.

Parnas's paper is over half a century old. The principle it established has never been overturned, because it addresses a property of complexity itself: the only way to manage a system too large to fit in one mind is to decompose it into parts that can each be understood independently.

</details>

## Composition at Every Scale

The principle Emma taught James applies at every level of software, from individual functions to distributed systems.

### Scale 1: Functions

This is the scale where James experienced the problem. Here is what the monolithic `process_order()` looked like in essence — a single function doing five things:

```python static
def process_order(order_data):
    # Validate (30 lines of validation logic interleaved with...)
    # Calculate price (20 lines dependent on validation variables...)
    # Process payment (25 lines reusing price variables...)
    # Generate receipt (20 lines dependent on payment result...)
    # Send notification (15 lines dependent on everything above...)
    # Total: 110+ lines, every section entangled with every other
```

And here is Emma's composed alternative — the same logic as focused units:

```python static
def validate_order(order: Order) -> ValidatedOrder:
    """Check order data. Raises ValueError if invalid."""
    ...

def calculate_total(order: ValidatedOrder) -> PricedOrder:
    """Compute price, tax, shipping. Pure calculation, no side effects."""
    ...

def process_payment(order: PricedOrder) -> PaidOrder:
    """Charge the customer. Returns payment confirmation."""
    ...

def generate_receipt(order: PaidOrder) -> Receipt:
    """Create receipt PDF from paid order."""
    ...

def send_confirmation(order: PaidOrder, receipt: Receipt) -> None:
    """Email receipt to customer."""
    ...

def process_order(order_data: dict) -> Receipt:
    """Orchestrate order processing from composable units."""
    validated = validate_order(Order(**order_data))
    priced = calculate_total(validated)
    paid = process_payment(priced)
    receipt = generate_receipt(paid)
    send_confirmation(paid, receipt)
    return receipt
```

Read the orchestrating function `process_order()` at the bottom. Six lines. Each line is one step. Each step is one function. Adding James's discount feature means inserting one line — `discounted = apply_discount(priced, code)` — between `calculate_total` and `process_payment`. Nothing else changes. Nothing else *can* break, because each function only sees its own inputs and outputs. This is Parnas's information hiding made concrete.

### Scale 2: Modules

Functions compose into modules. Each module groups related functions around a single domain concept:

```
user_management/
    __init__.py
    validation.py      # validate_registration, validate_password_strength
    security.py        # hash_password, verify_password, generate_token
    storage.py         # store_user, get_user, update_user
    notifications.py   # send_verification_email, send_welcome_email
    registration.py    # register_user (orchestrates the above)
```

Each module can be imported independently. Testing `validation.py` never touches the database. Replacing the email provider means changing only `notifications.py`. An AI assistant can work within a single module without needing context from the others.

### Scale 3: Packages and Services

Modules compose into packages. Packages compose into services. The same principle applies at every level:

```
Order System (composed of services)
├── auth-service/        → Handles identity and permissions
├── catalog-service/     → Manages product information
├── payment-service/     → Processes transactions
├── notification-service/→ Sends emails and alerts
└── order-service/       → Orchestrates the order workflow
```

Each service does one thing. Each communicates through defined interfaces (APIs). Each can be developed, deployed, and scaled independently. The pattern is fractal—the same structure repeats at every scale.

## Why AI Needs Composition

This is where Axiom IV connects to everything this book teaches — and where the lesson becomes urgent rather than merely architectural.

When James asked an AI agent to "add a discount code feature to `process_order()`," the agent received all 1,400 lines as context. It generated a change. The change broke tax calculations. This was not the AI's fault — it was an architectural failure. The monolith forced the AI to modify code it did not need to understand, and the entanglement guaranteed collateral damage.

Composition solves this at the structural level:

| With Monolith | With Composition |
|---------------|-----------------|
| AI receives 1,400 lines to add one feature | AI receives `calculate_total()` — 20 lines |
| AI might modify unrelated sections | AI can only touch the unit it was given |
| Testing requires full system state | Testing requires only the unit's inputs and outputs |
| A bad AI generation breaks everything | A bad AI generation breaks one replaceable unit |

**Context windows are finite.** Every AI model can hold a limited amount of text in working memory. A 1,400-line function consumes that window with code the AI does not need to see. Twenty composed functions, each 20-70 lines, give the AI exactly the context it needs — no more, no less.

**Focused generation produces better results.** When James asked the AI to "fix the bug in `calculate_tax()`" instead of "fix the tax bug somewhere in `process_order()`," the AI had complete, focused context. Its output was accurate because its attention was not diluted across 1,400 lines of unrelated logic.

**Composed units are independently testable.** AI-generated code needs verification. With the monolith, testing the discount feature required setting up inventory, payment processors, and email servers — because the function touched all of them. With composition, testing `apply_discount()` requires only an order and a discount code. No database. No email server. Just the function and its expected behavior.

**Any unit can be replaced without breaking the whole.** If an AI generates a poor implementation of `calculate_tax()`, you regenerate just that function. The rest of the system remains untouched. This makes AI-assisted development iterative and safe — you improve one piece at a time, verifying each change in isolation.

## Dependency Injection: Composition of Behavior

:::tip Advanced pattern preview
Dependency injection is a powerful technique you will use in later chapters. For now, focus on the *concept*: instead of permanently wiring a system to one specific tool, you make the tool swappable. Think of it like a restaurant that can switch food suppliers without retraining the chef. In the code below, `Callable` simply means "any function" — it is Python's way of saying "pass me a function and I will call it."
:::

Emma showed James one more technique that made the composed version powerful in a way the monolith could never be: instead of hardcoding *which* payment processor or *which* database the function uses, you pass the implementation as a parameter.

```python static
# Hardcoded: permanently bound to Stripe and PostgreSQL
def process_order(order_data):
    charge_stripe(order_data)          # Can't test without Stripe
    save_to_postgres(order_data)       # Can't test without database

# Composed: behavior is injectable
def process_order(order_data, charge: Callable, save: Callable):
    charge(order_data)                 # Any payment processor
    save(order_data)                   # Any storage backend
```

Now the same function works in three contexts without changing a line:

```python static
# Production: real Stripe and Postgres
process_order(data, charge=charge_stripe, save=save_to_postgres)

# Testing: fake payment, in-memory storage
process_order(data, charge=fake_charge, save=save_to_memory)

# Development: log to console, SQLite
process_order(data, charge=log_charge, save=save_to_sqlite)
```

This is why Emma's team could write tests for the order pipeline without a database, a payment processor, or an email server. The behavior was composed from the implementations they provided. In testing, they provided fakes. In production, they provided the real thing. The orchestration logic was identical in both cases.

## Anti-Patterns: What Composition Violations Look Like

You have seen the God Object. Every codebase has one. It is the class called `ApplicationManager` or `Utils` or `Helpers` — the one with fifty-three methods that handles user authentication, payment processing, email sending, report generation, and "miscellaneous things nobody knew where to put." It is the file that every pull request touches, the one that causes merge conflicts every sprint, the one where new developers are told "don't change anything in there unless you absolutely have to."

It is the function that started as `handle_request()` and grew to 800 lines because every new feature was "just one more if-statement." The function works. It also cannot be tested, cannot be understood by a new team member in less than a week, and cannot be modified by an AI agent without hallucinating about what the variable `temp3` on line 412 is supposed to contain.

The God Object is the monolith at the code level — and like all monoliths, it was not built deliberately. It was grown, one convenience at a time, by developers who did not recognize the moment when "add it here" became "this needs to be its own thing."

| Anti-Pattern | Symptom | Consequence | Composed Alternative |
|-------------|---------|-------------|---------------------|
| **God Class** | One class with 50+ methods handling unrelated concerns | Changes to any feature risk breaking all others | Split into focused classes, each with a single responsibility |
| **Monolithic Function** | 500+ line function with multiple responsibilities | Cannot test, understand, or modify in isolation | Extract focused helper functions with clear interfaces |
| **Tight Coupling** | Module A directly imports internals of Module B | Changes to B cascade as breaking changes to A | Define interfaces; A depends on the interface, not B's internals |
| **Circular Dependencies** | Module A imports B, B imports A | Cannot understand either module in isolation; import errors | Extract shared logic to Module C; both A and B import C |

The test is simple: if you cannot explain what a class does in one sentence, it is a God Object. If modifying one feature requires understanding ten others, you are looking at a monolith. The fix is the same as Emma's — decompose until each unit does one thing, communicates through typed interfaces, and can be tested without setting up the entire world.

## The Composition Test

After the refactoring, Emma gave James a four-question checklist that he now applies to every piece of code — whether written by a human, an AI, or himself:

1. **Can I explain this unit in one sentence?** If not, it does too much.
2. **Can I test this unit without setting up unrelated systems?** If not, it has hidden dependencies.
3. **Can I replace this unit without modifying other units?** If not, coupling is too tight.
4. **Can I reuse this unit in a different context?** If not, it contains unnecessary specifics.

If any answer is "no," the code needs decomposition. Break it into smaller units until every answer is "yes."

## The Decomposition Trap

After learning Axiom IV, James went through a phase that Emma had seen before. He decomposed everything. A 15-line function became five 3-line functions. A simple data transformation grew a three-layer abstraction. He created interfaces for components that would only ever have one implementation. The code was technically "composed" but harder to read than the original — because now you had to trace through five files to understand what used to be fifteen obvious lines.

"Composition is a spectrum, not a religion," Emma told him. "The goal is not maximum decomposition. It is *appropriate* decomposition."

The Decomposition Trap is the mirror image of the monolith. Where the monolith puts everything in one place, the over-decomposed system scatters simple logic across so many units that understanding the whole requires assembling a mental map of dozens of tiny pieces. Both fail for the same reason: they make the system harder to understand than it needs to be.

The heuristic is simple. Compose when a function does multiple unrelated things, when you cannot test a behavior without setting up unrelated state, or when changes to one concern break unrelated concerns.

Do not compose when the code is simple and unlikely to change, when the abstraction would be more complex than the duplication, or when you are designing for a future that may never arrive. A 20-line function that does one clear thing does not need to be split into four 5-line functions. A script that runs once does not need a plugin architecture. Parnas's principle is about hiding *design decisions that might change* — not about hiding everything.

## Try With AI

### Prompt 1: Spot the "God Employee"

```
I want to understand why composition beats monoliths using a real-world
scenario.

Here is a small business where one person does everything:
- Takes customer orders (phone, email, walk-in)
- Manages inventory (tracking what is in stock, reordering)
- Handles accounting (invoices, payments, tax records)
- Does marketing (social media, flyers, promotions)
- Provides customer support (complaints, returns, questions)

Help me "decompose" this business into focused roles:
1. What is each role's single responsibility?
2. What information does each role need from the others (the "interface")?
3. What happens when the business grows from 10 to 100 customers per day?
4. What happens if the single person gets sick for a week?

Then explain: how does this map to software? What is the "god employee"
equivalent in code?
```

**What you're learning**: How to identify when a single unit has too many responsibilities and how to decompose it into focused, independent roles. The "god employee" is the real-world equivalent of a "god class" in code — one entity trying to do everything, becoming a bottleneck and a single point of failure.

### Prompt 2: The Swappability Test

```
I want to understand why "swappable parts" matter in any system.

Consider planning a school fundraiser with these tasks:
- Food (currently: homemade baked goods)
- Entertainment (currently: a student band)
- Venue (currently: the school gym)
- Tickets (currently: sold at the door)
- Publicity (currently: posters in hallways)

For each task, answer:
1. Can I swap the approach (e.g., switch from baked goods to a food truck)
   WITHOUT changing how the other tasks work?
2. If swapping one task forces changes to others, what is tangled together?
3. What is the "interface" between tasks — what does each task need to
   know about the others? (e.g., Food needs to know the venue capacity,
   but NOT how tickets are sold)

Then explain: why does this "swappability test" matter when you are
building something with AI? What happens when an AI generates a new
approach for one task but everything else breaks?
```

**What you're learning**: The composition test in action — if you can swap one part without breaking others, your system is well-composed. If swapping forces cascading changes, your parts are tangled. This is the same test Emma taught James, applied to a system you already understand.

### Prompt 3: Decompose Your Own "Monolith"

```
I want to apply the Composition Over Monoliths axiom to something I do.

Think of a process in my life that has become a "monolith" — something
where everything is tangled together. For example:
- My morning routine where being late at one step makes everything cascade
- A group project where one person's delay blocks everyone else
- Planning a family event where changing one detail (venue, date, menu)
  forces changes to everything else

Help me decompose it:
1. List all the responsibilities currently tangled together
2. Group them into 4-6 focused "units" where each unit has one job
3. Define the "interface" between units — what does each unit need
   from the others?
4. Apply the composition test: can each unit be swapped, tested,
   or changed independently?
5. What is the "god class" equivalent in my example — the one thing
   that is doing too much?
```

**What you're learning**: How to apply composition thinking to any complex process. The pattern is universal — whether you are organizing a system of people, a household routine, or a software architecture, the same decomposition principles apply. Focused units with clear interfaces beat tangled monoliths every time.

---

## PRIMM-AI+ Practice: Composition Over Monoliths

### Predict [AI-FREE]

Close your AI assistant. Consider two hospitals:

**Hospital A**: A single doctor handles every patient alone — triage, diagnosis, lab tests, surgery, prescriptions, AND discharge paperwork. Every patient waits for this one doctor to finish with the previous patient before anything happens.

**Hospital B**: A composed emergency department — a triage nurse assesses urgency, an ER doctor diagnoses, a lab technician runs tests, a surgeon operates when needed, a pharmacist fills prescriptions, and a discharge coordinator handles paperwork. Each role has a clear responsibility and communicates through the patient's medical record (the "interface").

Predict two scenarios:
1. The surgeon is in a 3-hour operation when a new trauma patient arrives who also needs surgery. What happens in each hospital?
2. A mass casualty event brings 40 patients at once. How does each hospital cope?

Write your predictions for both scenarios. Rate your confidence from 1 to 5.

### Run

Ask your AI assistant: *"Compare two hospital models: (A) one doctor does everything for every patient — triage, diagnosis, lab tests, surgery, prescriptions, discharge — versus (B) separate specialists for each role who communicate through medical records. What happens when the surgeon is busy in a 3-hour operation and a new trauma patient arrives? What about a mass casualty event with 40 patients?"*

Compare. Did the AI identify failure modes you missed? Did you catch any that the AI did not mention?

<details>
<summary><strong>Answer Key — Check Your Prediction</strong></summary>

**When the surgeon is in a 3-hour operation and a new trauma arrives:**
- **Hospital A** is paralyzed. The single doctor IS the surgeon — they cannot leave the operating table. The new trauma patient waits 3 hours with no triage, no diagnosis, no stabilization. Every other patient in the ER also waits, because the one doctor is unavailable for anything. Lives are at risk because one role (surgery) has blocked all other roles.
- **Hospital B** continues functioning. The triage nurse assesses the new trauma patient immediately. The ER doctor stabilizes them. If surgery is urgent, an on-call surgeon is brought in — the role is swappable. Meanwhile, the lab technician, pharmacist, and discharge coordinator continue serving other patients without interruption. The surgeon's unavailability affects only surgical cases, not the entire department.

**During a mass casualty event (40 patients):**
- **Hospital A** collapses. One doctor cannot triage 40 patients, diagnose 40 conditions, run 40 sets of tests, and perform multiple surgeries. Patients queue in a single line behind one overwhelmed person. Critical patients wait behind non-critical ones because there is no parallel processing.
- **Hospital B** scales by parallelizing. The triage nurse rapidly sorts 40 patients by severity (critical, urgent, stable). Multiple ER doctors work in parallel. Lab technicians process tests concurrently. The pharmacy fills prescriptions without waiting for discharge paperwork. Each role operates at its own capacity, and the hospital can add more staff to any role that becomes a bottleneck — a second triage nurse, an extra ER doctor — without restructuring the entire department.

The key insight: Hospital A is a **monolith** — every responsibility is tangled into one person, so any blockage or surge brings everything to a halt. Hospital B is **composed** — each role is independent with clear interfaces (the medical record), so failures are isolated and the system scales by adding capacity to individual roles.

</details>

### Investigate

Now connect the hospital to the lesson. James changed the discount logic on line 712 of `process_order()` and the tax calculation broke. Hospital A's doctor was stuck in surgery and no other patient could be seen. **What is the shared structural flaw?**

Write in your own words — without asking AI — which specific quality of Hospital B would have prevented James's cascading breakage. Map it directly: what is Hospital B's "separate surgeon" equivalent in Emma's composed version of `process_order()`?

Apply the **Error Taxonomy**: James's 1,400-line function and Hospital A share the same failure — **orchestration error**. Responsibilities are tangled together so that a blockage in one area (discount logic / surgery) cascades into unrelated areas (tax calculation / triage, diagnosis, discharge). The fix in both cases is the same: give each responsibility its own unit with a clear boundary, communicating through a well-defined interface (typed function signatures / medical records).

### Parsons Problem

A patient arrives at Hospital B's emergency department. These five steps are in scrambled order:

- (A) Pharmacist fills the prescription
- (B) Triage nurse assesses the patient's urgency
- (C) Discharge coordinator completes paperwork and sends the patient home
- (D) ER doctor examines the patient and makes a diagnosis
- (E) Lab technician runs the ordered tests and returns results

Put them in the correct order. Then answer: if the hospital adds a new "specialist consultation" step (e.g., a cardiologist reviews the case), where does it go in the sequence? Does adding this step require changing how the triage nurse, lab technician, or pharmacist do their jobs?

### Modify

The hospital administrator decides that the ER doctor should also fill prescriptions to "reduce staffing costs." What specific problems will this cause? Think about what happens during a busy night shift when the ER doctor is diagnosing a critical patient and three other patients are waiting for their prescriptions.

### Make [Mastery Gate]

Pick a complex process you participate in — a group project at school, organizing a family event, or running a club activity. Break it into **4-6 independent roles** where each role has one clear responsibility. For each role, define:

1. **What** is this role's single job?
2. **What information** does it need from other roles (the "interface")?
3. **Can this role be swapped** for a different person or approach without changing the others?

For example, in a group presentation: "researcher" gathers information, "slide designer" creates visuals, "presenter" delivers the talk, "editor" reviews for quality. Can you swap the slide designer without retraining the presenter? If changing one role forces changes to others, they are not truly independent — decompose further.

This role breakdown is your mastery gate.

---

## Key Takeaways

James spent two days fighting a 1,400-line function and learned what David Parnas formalized over half a century ago: the only way to manage a system too complex to fit in one mind is to decompose it into parts that can each be understood independently. Emma's refactoring did not add new logic. It separated existing logic into units that could be tested, modified, and replaced without cascading breakage.

- **Complex systems are built from composable, focused units.** Each unit does one thing well, communicates through typed interfaces, and can be tested independently. This is Parnas's information hiding made practical.
- **Composition is not just good engineering — it is an AI requirement.** Monolithic code overwhelms context windows, dilutes AI attention, and makes every AI-generated change a gamble. Composed code gives AI exactly the context it needs, nothing more.
- **The pattern is already in the previous axioms.** Emma's Makefile in Axiom I composed programs through the shell. The knowledge system in Axiom II composed markdown files into a repository. The discipline stack in Axiom III composed verification tools into a pipeline. Axiom IV makes the pattern explicit: it applies to everything you build.
- **Dependency injection composes behavior.** By passing implementations as parameters, the same orchestration logic works in production, testing, and development without changing a line.
- **The Decomposition Trap is the monolith's mirror.** Over-decomposition scatters simple logic across too many pieces. Compose when concerns are genuinely separate. Leave simple things simple.

---

## Looking Ahead

Your shell orchestrates programs. Your knowledge lives in markdown. Your programs have types and tests. Your systems are composed from focused units. But how do you verify that all of these pieces actually work together? How do you know that the code an AI generated does what you asked — and keeps doing it as the system evolves?

In Axiom V, you will discover that types are not just annotations — they are guardrails that catch errors before they reach production, and the first line of defense against AI-generated code that looks correct but is not.
