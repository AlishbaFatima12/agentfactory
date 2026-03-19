---
name: first-principles-derivation
description: >
  Derives solutions from fundamental principles rather than best practices, conventions, or
  examples. Identifies conditions where accepted wisdom fails and builds reasoning from
  constraints upward. Use whenever the user faces a novel problem with no established solution,
  says "think from first principles", "why do we do it this way", "challenge this assumption",
  "rethink this from scratch", "derive from basics", "question the conventional approach", or
  needs to evaluate whether a best practice actually applies to their specific situation. Also
  trigger for novel product features, process redesign, architectural decisions where existing
  patterns don't fit, or any problem where copying what others do is insufficient.
---

# First Principles Derivation

Most advice — from humans and AI alike — is reasoning by analogy: "this worked elsewhere, so do it here." First principles reasoning strips a problem to its base constraints and rebuilds from there. This skill helps you (or your user) stop asking "what's the best practice?" and start asking "what are the actual constraints, and what do they make possible?"

The distinction matters because best practices encode assumptions about context. When your context differs, best practices become best traps. First principles derivation reveals WHEN conventions apply and WHEN they mislead.

## Two Modes

### Coach Mode
The user derives the reasoning themselves. You guide without giving answers.

1. Ask the user to state the convention or best practice they want to challenge.
2. Ask: "What do you believe are the underlying assumptions of this practice?"
3. Ask: "Under what specific conditions might those assumptions not hold?"
4. Let them identify failure conditions independently.
5. After they produce their reasoning, evaluate it using the Quality Checks below — specifically whether they reasoned from principles or from examples.
6. Suggest 2 additional failure conditions they missed.

### Output Mode
You perform the derivation directly, showing your reasoning transparently.

1. State the convention being examined.
2. Execute The Process (below) fully.
3. Present results using the Output Formats.
4. Flag where your reasoning might be weakest.

Default to **Coach Mode** when the user says "help me think" or "I want to figure this out." Default to **Output Mode** when they say "analyze this for me" or "what's the first-principles take on X."

## The Process

Execute these steps in order. Each step must be completed before moving to the next.

### Step 1: Identify the Convention
State the accepted best practice, industry standard, or conventional wisdom being examined. Be precise — "agile is good" is too vague; "two-week sprints with daily standups improve team velocity" is specific enough to analyze.

### Step 2: State the Contrarian Question
Frame the challenge explicitly: "Under what conditions does [convention] fail?" This is NOT "why is [convention] wrong" — it is identifying the boundary conditions of its validity.

### Step 3: Identify 3+ Specific Failure Conditions
For each failure condition:
- State the condition precisely (who, what context, what constraints)
- Derive WHY it fails from base constraints, not from counter-examples
- A failure condition is valid when it follows from constraints that are true regardless of any specific company or case study

**Critical distinction**: "Company X tried this and failed" is an example. "When switching costs exceed the cost of the problem being solved, incremental adoption is economically irrational" is a principle. Always derive the principle.

### Step 4: Extract the First Principles
For each failure condition, state the underlying first principle explicitly:
- A first principle is a constraint or truth that holds regardless of context
- It should be expressible in one sentence
- Test: could someone who knows nothing about the specific domain still understand why this principle creates a failure condition?

Format each as: **Principle**: [statement] → **Therefore**: [why the convention fails under this condition]

### Step 5: Synthesize the Decision Framework
Produce a clear framework: when should someone follow the convention, and when should they derive fresh? This is not "it depends" — it is specific conditions mapped to specific recommendations.

## The Key Distinction

This is the core metacognitive skill the user must develop:

**Principle-based reasoning** derives from universal constraints. It sounds like: "When the cost of failure is irreversible and exceeds the cost of prevention, rapid iteration without safeguards is irrational."

**Example-based reasoning** cites specific instances. It sounds like: "Theranos moved fast and broke things, and look what happened."

The principle-based version is transferable to ANY domain. The example-based version only works if the listener accepts the analogy. When evaluating reasoning (your own or others'), always ask: "Is this derived from a constraint, or cited from a case?"

Signs of example-based reasoning disguised as principles:
- "History shows that..." (appeal to pattern, not constraint)
- "Companies like X have found..." (specific instance, not universal)
- "Research suggests..." without stating the underlying mechanism
- "In my experience..." (personal pattern matching)

Signs of genuine principle-based reasoning:
- "When [constraint] holds, then [consequence] follows because [mechanism]"
- "The structure of [system] makes [outcome] inevitable when [condition]"
- "Given [physical/economic/logical law], [convention] cannot hold when [boundary]"

## Output Formats

### Principles Statement
```
CONVENTION UNDER EXAMINATION:
[The specific best practice or standard]

CONTRARIAN QUESTION:
Under what conditions does [convention] fail?

FIRST PRINCIPLES IDENTIFIED:
1. [Principle] → [Why it creates a failure condition]
2. [Principle] → [Why it creates a failure condition]
3. [Principle] → [Why it creates a failure condition]

DECISION FRAMEWORK:
Follow the convention when: [specific conditions]
Derive fresh when: [specific conditions]
```

### Failure Conditions Table

| # | Failure Condition | Underlying Principle | Convention Fails Because | Principle-Based? |
|---|-------------------|---------------------|--------------------------|-----------------|
| 1 | [Specific context] | [Universal constraint] | [Mechanism] | Yes/No + why |
| 2 | ... | ... | ... | ... |
| 3 | ... | ... | ... | ... |

### Convention-vs-Fresh Decision Framework

| Situation Signal | Follow Convention | Derive Fresh | Why |
|-----------------|-------------------|--------------|-----|
| [Observable condition] | X or | X | [Principle-based reason] |
| ... | ... | ... | ... |

## Quality Checks

Apply ALL of these before finalizing output:

1. **Genuine derivation, not citation**: Each failure condition is derived from a stated constraint, not cited from a known failure case. If you find yourself writing "Company X..." or "In the 2008 crisis...", you have slipped into example-based reasoning.

2. **Failure conditions are realistic**: Each condition describes a situation that actually occurs in practice, not a contrived edge case. Test: can you name a type of organization or project where this condition is the default?

3. **Principles are explicitly stated**: Every failure condition traces back to a named first principle. No implicit reasoning — if the principle is not stated in a sentence, it is not a principle yet.

4. **Principles are universal, not domain-specific**: A genuine first principle should be recognizable as true even by someone outside the domain. "Network effects create winner-take-all dynamics" is universal. "SaaS companies need PLG" is domain-specific conventional wisdom, not a first principle.

5. **Principle-vs-example distinction is clear**: The output explicitly flags where reasoning is principle-based vs example-based. If the user provided reasoning, evaluate each argument for this distinction.

6. **Decision framework is actionable**: The "when to follow vs when to derive" framework uses observable conditions, not vague qualifiers. "When your team is small" is vague. "When your team has fewer than 5 engineers and deploys fewer than 10 times per month" is observable.

7. **Strongest and weakest points identified**: The output identifies which failure condition is most compelling (highest plausibility + strongest principle) and which is weakest (lowest plausibility or closest to example-based reasoning).

8. **No straw-manning**: The convention is represented fairly before being challenged. If the convention is presented in a weakened form to make it easier to argue against, the derivation is invalid.

9. **Mechanisms, not correlations**: Each failure condition explains the MECHANISM by which the convention fails, not just that it correlates with failure. "Microservices increase latency" is correlation. "Microservices add network hops; each hop adds serialization, transmission, and deserialization time; when end-to-end latency is the primary constraint, this overhead is structurally unavoidable" is mechanism.

## When Evaluating Existing Reasoning

When a user presents their own first-principles argument for evaluation:

1. **Classify each argument**: Mark each failure condition as principle-based or example-based using the criteria in The Key Distinction.
2. **Rate logical rigor** (1-10): Does the conclusion follow from the stated premises?
3. **Rate condition plausibility** (1-10 per condition): Is this a realistic situation or a contrived edge case?
4. **Identify the strongest point**: Which argument is most compelling and why?
5. **Identify the weakest point**: Which argument is closest to example-based reasoning or most contrived?
6. **Suggest 2 missed conditions**: Provide failure conditions the user did not identify, derived from principles they did not consider.
7. **State what they got right**: Acknowledge genuine principle-based reasoning before critiquing.

## Thinking Scorecard

Rate the derivation on these dimensions (1-10 each with one-sentence justification):

| Dimension | What It Measures |
|-----------|-----------------|
| **Logical Rigor** | Do conclusions follow from stated premises without logical gaps? |
| **Condition Plausibility** | Are failure conditions realistic situations that occur in practice? |
| **Principle-vs-Example Distinction** | Is reasoning derived from constraints rather than cited from cases? |
| **Practical Applicability** | Can the decision framework be applied to real situations today? |
| **Mechanism Clarity** | Are failure mechanisms explained (not just stated)? |
| **Fair Representation** | Is the convention represented at its strongest before being challenged? |
