---
name: knowledge-extraction-method
description: |
  The Knowledge Extraction Method — a structured methodology for surfacing tacit professional
  knowledge from expert heads and institutional documents, translating it into production-ready
  SKILL.md files, and validating through scenario testing. Use this skill whenever someone wants
  to: extract domain expertise into a SKILL.md, conduct a structured expert interview for agent
  skills, run document extraction on policy/procedure corpora, validate a SKILL.md against
  scenarios, build a domain-specific agent skill from professional knowledge, diagnose why an
  agent produces generic output, or bridge the gap between what an expert knows and what an
  agent can do. Also trigger when: user mentions "tacit knowledge", "articulation gap",
  "knowledge extraction", "expert interview for agent", "validate my SKILL.md", "domain agent
  skill", "extract from documents", "shadow mode readiness", or describes wanting to capture
  professional expertise that "lives in someone's head" or "isn't written down anywhere".
---

# The Knowledge Extraction Method

The knowledge that makes a domain agent genuinely useful is almost never the knowledge that is easy to articulate. Experts hold tacit knowledge — pattern recognition, calibrated judgment, exception instincts — that resists documentation because it is encoded in experience rather than rules. The Knowledge Extraction Method is the structured process for getting it out and into a SKILL.md that works.

## When You Need This Skill

This methodology applies when:
- Building a new domain agent SKILL.md from professional expertise
- The agent produces generic, textbook-quality output instead of expert-level reasoning
- Expert knowledge needs to be transferred from heads or documents into agent instructions
- A SKILL.md exists but fails on edge cases, adversarial inputs, or high-stakes scenarios
- You need to validate whether a SKILL.md is production-ready

## Step 1: Diagnose Where Knowledge Lives

Before extracting, classify the domain. This determines which method is primary.

| Domain Type | Primary Method | Why | Extraction Sequence |
| --- | --- | --- | --- |
| **Expert-head domains** (finance, sales) | Method A | Documented methodology is scaffolding; expert calibration is substance | Interview first, then verify against documents |
| **Document domains** (HR, operations) | Method B | Knowledge genuinely lives in handbooks, policies, SOPs | Three-pass extraction first, then focused interview for contradictions/gaps |
| **Both** (legal, healthcare, architecture) | A + B | Substantial expert judgment AND substantial documented standards | Run both fully; reconcile with the principle below |

**Three diagnostic questions to classify:**
1. If the most experienced person left tomorrow, what would be hardest to replace — and is that in their head or in documents?
2. If all documented policies disappeared, what would need to be reconstructed from memory?
3. Are there situations where professional judgment and documented standards give different answers?

## Step 2: Method A — The Expert Interview

Method A surfaces tacit knowledge through five structured questions. A single 60-90 minute interview produces enough material for a substantive first-draft SKILL.md.

### The Briefing Protocol

Before the interview, brief the expert on three things:
1. **Purpose**: Building a SKILL.md that encodes their expertise (not a competency assessment)
2. **Output**: A deployable agent they will test and refine (shifts motivation to specificity)
3. **Process**: The interview is a starting point, not the end (reduces pressure for perfection)

This shifts the expert from **performance mode** (presenting credentials) to **collaborative mode** (building something they want to use). The shift determines extraction quality.

### The Five Questions

Ask in order. Each targets different tacit knowledge. Follow the expert's experience — coverage matters more than rigid sequence.

**Q1: "Walk me through a recent example of this work going well."**
- Activates *episodic memory* (specific events) rather than *semantic memory* (general descriptions)
- Surfaces: decision-making logic, analytical sequence, key signals
- Follow-ups: "What did you look for first?" "What told you this was going the right way?"
- Maps to: Principles (operational logic)

**Q2: "Tell me about a time this work went wrong — because of a judgment call, not bad luck."**
- The single most valuable question — surfaces failure modes the expert has personally learned from
- This knowledge is hardest to find anywhere else (post-mortems are sanitized, mistakes rarely documented)
- Follow-ups: "At what point could it have been caught?" "What signal do you now look for?"
- Maps to: Principles (what NOT to do, defensive knowledge)

**Q3: "What does a junior get wrong that a senior never does?"**
- Most efficient path to the expertise differential
- Defenses are lower because they describe someone else's errors
- Follow-ups: "Can you give a specific example?" "How long does learning this take, and why?"
- Maps to: Principles (nuanced distinctions, contextual judgment)

**Q4: "Write a one-page decision guide for this work."**
- Compresses operational knowledge into load-bearing heuristics
- Experts resist ("it's more complicated") — the point is identifying non-negotiable principles
- Follow-ups: "What's the first thing on the page?" "Is there a heuristic too hard to explain?"
- Maps to: Principles (non-negotiable rules)

**Q5: "What should an automated system never handle?"**
- Defines human-in-the-loop boundaries
- Answers cluster into three categories: stakes too high, context too unusual, relationship is the service
- Follow-ups: "What is the threshold regardless of system track record?"
- Maps to: Questions (out of scope) + Principles (routing/escalation logic)

### Note-Taking Discipline

The critical distinction is **specific vs generic** statements:

| What You Hear | Type | What To Do |
| --- | --- | --- |
| "We always prioritize risk management" | Generic | Follow up: "Give me a recent example where that changed what you did" |
| "When receivables days increase while revenue is flat, I treat revenue as weakening" | Specific | Capture verbatim — this is a candidate Principle |
| "It depends on the situation" | Generic (promising) | Follow up: "Walk me through two situations where it went differently" |

Generic statements are not failures — they signal that a follow-up question is needed to reach the specific knowledge underneath.

### The North Star Summary

Write immediately after the interview (within 30 minutes — quality degrades rapidly).

**Paragraph 1**: The most important decision-making logic surfaced (core process, key signals, evaluation sequence)
**Paragraph 2**: The most important escalation condition (where human judgment is irreplaceable, automation boundaries)

This summary is the quality check for the SKILL.md. If the SKILL.md does not encode both paragraphs' substance, something was lost in translation.

## Step 3: Method B — Document Extraction

Method B extracts knowledge from institutional documents through three sequential passes.

### Pass One: Explicit Rule Extraction

Read the full document corpus. Extract every explicit policy, standard, or required behavior as:
> "The agent should [do X] when [condition Y] applies."

**Do not interpret, infer, or add context.** Pass One is transcription with reformatting. Completeness over quality — the output will be large.

### Pass Two: Contradiction Mapping

Read the Pass One output as a set and identify conflicting instruction pairs. Classify each:

| Type | How It Arises | Resolution Path |
| --- | --- | --- |
| **Temporal** | Newer policy supersedes older but both circulate | Determine which is authoritative |
| **Jurisdictional** | Global policy and local guide conflict | Ask domain expert which takes precedence |
| **Interpretive** | Two policies overlap with different implied standards | Flag ambiguity; may require policy decision |

The contradiction map generates questions for the domain expert — it is a working document, not a SKILL.md artifact.

### Pass Three: Gap Identification

Re-read Pass One output asking: "What common situations are NOT covered?"

Best done collaboratively with the domain expert. For identified gaps:
- **Low-stakes**: "Apply the principle most consistent with the policy's purpose and tell the user you are doing so"
- **High-stakes** (compliance, legal, clinical): "Escalate to relevant human authority; do not attempt to resolve"

## Step 4: Reconcile (When Both Methods Apply)

When expert judgment and documented standards conflict:

**Documented standards take precedence** for regulatory compliance and professional liability. The jurisdiction sets the boundaries.

**Expert judgment takes precedence** for operational decisions within professional competence. Within those boundaries, the expert's calibration is the operative expertise.

The documented standard sets the boundaries. Expert judgment operates within them. Both go in the SKILL.md — neither swallows the other.

## Step 5: Write the SKILL.md

Translate extraction outputs into three sections.

### Persona Section

Answer three extraction-focused writing questions (addressing the four structural elements from the Agent Skills Pattern):

1. **Professional level and authority**: Not "experienced" — the specific level and scope. This determines whether outputs are framed as authoritative recommendations or analysis for review.
2. **Quality standards**: Not "accuracy" — specific tradeoffs. Completeness vs speed? Caution vs directness? Single recommendation vs multiple options?
3. **Uncertainty behavior**: The most important question. Without this, the agent fills gaps with confident-sounding approximations. Specify: what language to use, what to disclose, when to stop helping and route to a human.

**Vagueness test**: Would this Persona govern behavior in an ambiguous situation no Principle explicitly covers? If not, it needs more precision.

### Questions Section

**In-scope**: 3-5 capability categories from Method A examples and Method B Pass One rules. Each specifies what falls within, what data sources it uses, what outputs it produces.

**Out-of-scope**: At least as long as any single in-scope category. Drawn from Q5 answers and Pass Three gap resolutions. Each item explains why it is out of scope and provides a positive redirection.

An agent without defined out-of-scope boundaries is dangerous — it produces confident output for queries it cannot handle reliably.

### Principles Section

Each Principle must be **specific and testable**: can you run a scenario against it and confirm the agent followed it?

| Fails Testability | Passes Testability |
| --- | --- |
| "Be accurate" | "When a figure cannot be confirmed against an approved source, use 'my records show' rather than a declarative statement, and flag for human verification" |
| "Consider the context" | "When net debt increases during a capital investment programme with contracted revenue, assess as strategic investment rather than deterioration signal" |
| "Be careful with unusual situations" | "When the query involves a fact pattern not previously encountered, flag explicitly as novel rather than applying an existing framework that may not fit" |

Include an **uncertainty calibration vocabulary** — graduated language for five confidence levels:

| Level | When to Use |
| --- | --- |
| Data-confirmed | Conclusion from a verified source |
| Strongly supported | Multiple consistent data points |
| Reasonable inference | Partial data or analogous situations |
| Uncertain | Incomplete information with identified gaps |
| Outside scope | Expertise or data the agent does not have |

### Translation Sequence

1. Write Persona first (from north star summary)
2. Write Questions second (from Method A examples + Q5 + Pass Three)
3. Write Principles third (Q4 heuristics + Q2 failure prevention + Q3 distinctions + Pass One rules + calibration vocabulary)
4. Check draft against north star summary — if it doesn't encode both paragraphs, something was lost

## Step 6: Validate

### Build the Scenario Set

Minimum 20 scenarios distributed across four categories:

| Category | Proportion | What It Tests | Gap It Reveals |
| --- | --- | --- | --- |
| **Standard** | 50% | Core analytical function | Structural problems in Persona or Questions |
| **Edge** | 25% | Boundary awareness | Gaps in Out of Scope or ambiguous boundaries |
| **Adversarial** | 15% | Principle robustness under pressure | Missing or insufficiently specific Principles |
| **High-stakes** | 10% | Escalation mechanisms | Escalation conditions not specific enough |

For each scenario specify: test input, correct response, common failure, primary scoring component.

### Score Each Output

Three components — ALL three must pass for a scenario to pass:

| Component | What It Measures | Failure Example |
| --- | --- | --- |
| **Accuracy** | Factual/analytical correctness | Includes figures not in attached data |
| **Calibration** | Appropriate confidence language | States inference as confirmed finding |
| **Boundary compliance** | Scope adherence and escalation | Makes a decision instead of redirecting |

### Threshold for Shadow Mode

- **Overall pass rate**: 95% across all scenarios
- **High-stakes pass rate**: 100% — zero failures (any failure here is critical)
- **Minimum scenarios**: 20 for initial validation; 40+ for complex domains

## Step 7: The Validation Loop

### Interpret Failure Patterns

Failures cluster by category, pointing to specific SKILL.md sections:

| Cluster Location | Root Cause Section | Fix Approach |
| --- | --- | --- |
| Standard cases | Persona / Questions | Sharpen professional identity and capability definition |
| Edge cases | Questions (Out of Scope) | Add specific boundary conditions and redirect instructions |
| Adversarial cases | Principles | Add specific Principles for uncovered input categories |
| High-stakes cases | Principles (escalation) | Make escalation triggers specific and testable |

### Targeted Rewriting

- Rewrite the **two weakest instructions** in the affected section
- Re-read the full section after every rewrite to check for conflicts
- Re-run scenario set; check for regression in previously passing scenarios
- Most SKILL.md files reach 95% in 2-3 iterations
- If not reached after 5 iterations, return to extraction — the material may be insufficient

### Shadow Mode

After 95% on scenarios: deploy with human review of every output for minimum 30 days.

Shadow mode validates against **real production inputs** that scenario testing cannot anticipate. Production context reliably surfaces 2-3 gaps that even well-designed adversarial scenarios miss.

### Graduated Autonomy

Transition is a gradient, not a switch:
1. Autonomous for standard cases first
2. Extend based on demonstrated performance
3. High-stakes cases often remain under human review indefinitely (correct governance)

Trust is earned through demonstrated performance for specific query types, not assumed from validation success.

## Adaptive Guidance

When guiding a user through this methodology, detect where they are and pick up from there:

- **"I want to build a domain agent"** → Start at Step 1 (classify domain)
- **"I have interview notes"** → Jump to Step 5 (write SKILL.md) or Step 2 review if notes seem thin
- **"My agent produces generic output"** → Diagnose: was extraction done? Was it validated? Trace back to the gap
- **"I have a draft SKILL.md"** → Jump to Step 6 (validate) — design scenarios, score, identify gaps
- **"My SKILL.md fails on edge cases"** → Jump to Step 7 (validation loop) — interpret failure pattern, targeted rewrite
- **"How do I know when my SKILL.md is ready?"** → Explain the dual gates: 95% scenario testing → shadow mode → graduated autonomy

For detailed worked examples (credit analyst domain), see `references/worked-examples.md`.
