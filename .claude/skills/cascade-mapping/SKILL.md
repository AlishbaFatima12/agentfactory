---
name: cascade-mapping
description: >
  Invoke this skill — do not answer freestyle — whenever someone presents a decision or change
  and asks about its broader consequences across multiple areas. This skill's structured cascade
  mapping methodology produces superior analysis to ad-hoc reasoning. Trigger for: budget cuts,
  tech migrations, reorgs, policy changes, pricing shifts, open-sourcing, competitive responses,
  RTO mandates, SDK deprecations, vendor switches, or ANY scenario where someone asks "what
  happens if we...", "what breaks downstream", "map the effects across", "ripple effects", or
  "what does this mean for [multiple teams/areas]". Not for writing code, PR reviews,
  documentation, or infrastructure setup.
---

# Cascade Mapping

Cascade mapping is a structured thinking process that traces the rippling consequences of a decision across multiple domains, going beyond first-order effects to reveal second and third-order consequences and the feedback loops that linear analysis consistently misses. Where bullet-point lists show isolated effects, cascade maps reveal the interconnected system dynamics that determine whether a decision succeeds or fails.

---

## Two Modes

### Coach Mode (Interactive Socratic)

Use when the user wants to **learn** cascade mapping or **develop** their systems thinking.

1. Ask the user to state their central decision in one sentence
2. Ask them to identify at least 5 domains affected — do NOT supply domains yet
3. After they propose domains, suggest any critical ones they missed with a question: "What about [domain]? How might that be affected?"
4. For each domain, ask them to trace effects: "What's the first thing that happens in [domain]? And then what happens because of that?"
5. After they map effects, ask: "Can you find any place where a downstream effect circles back to influence the original decision or an earlier effect?"
6. Only after they attempt feedback loops, offer refinements: missing loops, misidentified mechanisms, or amplifying/dampening distinctions
7. Close with a quality assessment using the Thinking Scorecard

### Output Mode (Fast Production)

Use when the user needs a **complete cascade map** produced quickly. Run all steps internally and deliver the finished artifact.

1. Execute the full process below silently
2. Deliver the completed cascade map in the structured output format
3. Include quality self-assessment
4. Flag areas of uncertainty or where domain expertise would improve the analysis

---

## The Process

### Step 1: State the Central Decision

Write the decision as a single, specific, actionable statement. Avoid vague framing.

| Weak | Strong |
|------|--------|
| "Adopt AI" | "Replace all tier-1 customer support agents with an AI chatbot by Q3" |
| "Change our tech stack" | "Migrate our 200-person engineering team from Java to Rust over 18 months" |
| "Restructure the org" | "Eliminate the QA department and shift testing responsibility to developers" |

### Step 2: Identify Affected Domains (Minimum 5)

Domains are the distinct stakeholder groups, organizational functions, or external systems affected by the decision. Cast a wide net — the value of cascade mapping is in breadth.

**Domain discovery prompts** (use to ensure coverage):
- Who does the work today? (Employees/Teams)
- Who receives the output? (Customers/Users/Patients)
- Who competes for the same market? (Competitors)
- Who regulates this space? (Regulators/Compliance)
- What institutional knowledge exists? (Internal Knowledge/Documentation)
- Who supplies inputs? (Vendors/Partners/Supply Chain)
- What systems or infrastructure does this touch? (Technology/Infrastructure)
- What is the financial structure? (Budget/Revenue/Investors)
- What cultural norms does this affect? (Organizational Culture/Morale)
- Who in the broader ecosystem is affected? (Community/Industry/Public)

**Examples across domains:**

| Decision Context | Possible Domains |
|-----------------|-----------------|
| Bank replaces loan officers with AI | Employees, Customers, Competitors, Regulators, Internal Knowledge, Community/Local Economy, Technology Infrastructure |
| Hospital uses AI triage | Nurses, Patients, Insurance Companies, Medical Board/Regulators, Training Programs, Emergency Services, Hospital Administration |
| Company mandates return-to-office | Employees, Families, Real Estate/Facilities, Recruiting/Talent Pipeline, Competitors, Local Businesses, IT Infrastructure |
| Startup switches to microservices | Engineering Team, DevOps/Platform, Customers, Hiring Pipeline, Vendor/Cloud Costs, On-Call/Incident Response, Product Velocity |

### Step 3: Trace Effects by Order (Per Domain)

For each domain, trace the causal chain. Every effect MUST include a one-sentence **mechanism** — the "why" that connects cause to effect.

**First-order effects**: Direct, immediate consequences of the decision. These are what most people see.

**Second-order effects**: Consequences of the first-order effects. These require asking "and then what?" The mechanism must explain WHY the first-order effect causes this.

**Third-order effects**: Consequences of the second-order effects. These are where most analysis stops but where the most important dynamics often live. These are frequently counter-intuitive.

**Mechanism requirement**: Each arrow in the chain must have an explanation. "A leads to B" is insufficient. "A leads to B *because* [mechanism]" is required.

**Example (Bank replaces loan officers with AI):**

| Order | Domain: Employees | Mechanism |
|-------|-------------------|-----------|
| 1st | Loan officers laid off | Direct consequence of replacement decision |
| 2nd | Remaining staff fear they are next; morale drops | Witnessing peer layoffs creates psychological insecurity (survivor guilt + threat perception) |
| 3rd | Top performers leave preemptively for competitors | High performers have options and leave uncertain environments first (adverse selection) |

| Order | Domain: Internal Knowledge | Mechanism |
|-------|---------------------------|-----------|
| 1st | Decades of relationship-based lending expertise lost | Expertise lived in people, not documentation — tacit knowledge cannot be extracted after departure |
| 2nd | AI makes decisions without contextual judgment | Training data cannot capture the nuanced local knowledge that experienced officers used for edge cases |
| 3rd | Default rates rise on complex loans that require human judgment | Edge cases (small business loans, unusual collateral) lack the pattern data AI needs; without human override, approval/denial is miscalibrated |

### Step 4: Identify Feedback Loops (Minimum 3)

A feedback loop exists when a downstream effect circles back to influence the original decision or an earlier effect in the chain. Feedback loops are the key insight that separates cascade mapping from linear analysis.

**Two types:**

| Type | Definition | Example |
|------|-----------|---------|
| **Amplifying** (positive feedback) | The effect reinforces itself, growing stronger over time. Can be virtuous or vicious. | Cost savings → reduced service → customer churn → revenue loss → more cost cutting → even worse service (vicious spiral) |
| **Dampening** (negative feedback) | The effect counteracts itself, creating stability or self-correction. | AI errors → regulatory scrutiny → compliance requirements → slower AI deployment → fewer errors (self-correcting) |

**Feedback loop format:**

```
FEEDBACK LOOP [N]: [Descriptive Name]
[A] → [B] → [C] → ... → back to [A or earlier node]
Type: Amplifying / Dampening
Mechanism: [Why does the final effect circle back? What is the causal link that closes the loop?]
Implication: [What does this loop mean for the decision? Does it accelerate, stabilize, or reverse the intended outcome?]
```

**Cross-domain loops are the most valuable.** Look for effects in one domain that cause effects in another domain that circle back to the first. These are the dynamics that single-domain analysis always misses.

### Step 5: Assess Loop Interactions

After identifying individual loops, examine how they interact:
- Do any amplifying loops counteract each other?
- Do any dampening loops have delay that allows damage before self-correction kicks in?
- Which loop dominates in the short term vs. long term?
- Are there tipping points where one loop overwhelms another?

---

## Output Formats

### Format A: Structured Table (Default)

```markdown
# Cascade Map: [Central Decision]

## Central Decision
[One-sentence decision statement]

## Domain Analysis

### Domain 1: [Name]
| Order | Effect | Mechanism |
|-------|--------|-----------|
| 1st | [Effect] | [Why this happens] |
| 2nd | [Effect] | [Why the 1st-order effect causes this] |
| 3rd | [Effect] | [Why the 2nd-order effect causes this] |

### Domain 2: [Name]
[Same structure]

[...repeat for all domains]

## Feedback Loops

### Loop 1: [Descriptive Name]
- **Path**: [A] → [B] → [C] → back to [A]
- **Type**: Amplifying / Dampening
- **Mechanism**: [Why the loop closes]
- **Implication**: [What this means for the decision]
- **Domains crossed**: [List]

### Loop 2: [Descriptive Name]
[Same structure]

[...repeat for all loops]

## Loop Interactions
[How do the loops interact? Which dominates? Tipping points?]

## Key Risks
[Top 3-5 risks revealed by the cascade map that linear analysis would miss]

## Recommendations
[What the cascade map suggests about how to implement — or reconsider — the decision]
```

### Format B: Narrative Summary

Use when the audience prefers prose over tables. Structure:

1. **Decision Context** (1 paragraph): What is being decided and why
2. **Immediate Effects** (1-2 paragraphs): First-order effects across domains
3. **Ripple Effects** (2-3 paragraphs): Second and third-order consequences, organized by theme rather than domain
4. **System Dynamics** (2-3 paragraphs): Feedback loops and their interactions, written as a narrative of how the system evolves over time
5. **What Linear Analysis Misses** (1 paragraph): The key insights that only emerge from cascade mapping
6. **Strategic Implications** (1 paragraph): What this means for decision-makers

---

## Quality Checks

Apply these 8 validation criteria to every cascade map:

1. **Domain breadth**: Are at least 5 meaningfully distinct domains identified? (Not subcategories of the same domain)
2. **Effect depth**: Does every domain have at least 2 orders of effects? Do at least 3 domains have 3rd-order effects?
3. **Mechanism presence**: Does every effect have a one-sentence mechanism explaining WHY it occurs? ("A leads to B" without "because" fails this check)
4. **Feedback loop count**: Are at least 3 feedback loops identified?
5. **Loop typing**: Is every feedback loop labeled as amplifying or dampening with justification?
6. **Cross-domain connections**: Do at least 2 feedback loops cross domain boundaries? (Single-domain loops are valid but less insightful)
7. **Counter-intuitive effects**: Does the map include at least 1 effect that is non-obvious or runs counter to initial expectations? (If everything is obvious, the analysis is not deep enough)
8. **Actionability**: Does the analysis produce concrete insights about risks, timing, or mitigation strategies that were not apparent before mapping?

---

## When Evaluating Existing Analysis

If asked to review someone else's cascade map or impact analysis:

1. **Coverage audit**: List domains they included, then identify 2-3 domains they missed
2. **Depth audit**: For each domain, check if they stopped at first-order effects (most common failure)
3. **Logic audit**: For each causal chain, verify the mechanism — would effect B actually follow from effect A? Flag logical gaps
4. **Loop audit**: Did they identify feedback loops? If not, identify at least 3 they missed. If yes, are the loops real (closed causal paths) or just sequences?
5. **Bias detection**: Look for optimism bias (all effects positive), confirmation bias (only effects supporting the decision), or scope narrowing (only the decision-maker's domain analyzed)
6. **Rate sophistication**: Use the Thinking Scorecard below
7. **Provide 3 specific improvements**: Not generic advice — point to specific places in their analysis where a deeper effect or missing loop would change the conclusion

---

## Thinking Scorecard

Rate the cascade map (your own or someone else's) on these dimensions:

| Dimension | What It Measures | 1-3 (Beginner) | 4-6 (Developing) | 7-8 (Proficient) | 9-10 (Advanced) |
|-----------|-----------------|-----------------|-------------------|-------------------|------------------|
| **Independent Thinking** | Did the analysis go beyond obvious/conventional effects? | Only lists effects that anyone would name | Some non-obvious effects included | Multiple surprising or counter-intuitive effects identified | Reveals dynamics that fundamentally change how you view the decision |
| **Critical Evaluation** | Are causal chains logically sound with clear mechanisms? | Effects listed without mechanisms | Some mechanisms provided, some hand-waving | All effects have mechanisms; most are logically sound | Mechanisms are precise, testable, and account for conditions under which they would fail |
| **Reasoning Depth** | How many orders of effect are traced? | First-order only | First and second-order | Consistent third-order effects with cross-domain connections | Third-order effects reveal emergent system behaviors not visible at lower orders |
| **Systems Awareness** | Are feedback loops identified and typed correctly? | No feedback loops | 1-2 loops identified but not typed | 3+ loops correctly typed as amplifying/dampening | Loop interactions analyzed; dominant loops and tipping points identified |
| **Practical Value** | Does the analysis change how you would implement the decision? | Analysis confirms what was already known | 1-2 new risks or considerations identified | Analysis reveals timing, sequencing, or mitigation strategies | Decision-maker would materially change their approach based on this analysis |

**Overall Rating:**
- **Beginner** (5-15): Lists effects but misses connections and loops
- **Developing** (16-30): Traces some depth and finds obvious loops
- **Proficient** (31-40): Comprehensive domains, deep chains, multiple typed loops with cross-domain connections
- **Advanced** (41-50): Reveals emergent dynamics, loop interactions, and non-obvious strategic implications that change the decision calculus
