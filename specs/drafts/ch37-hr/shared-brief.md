# Chapter 37: People & HR — Shared Writer's Brief

## Chapter Identity

**Who this teaches:** HR professionals, people operations managers, and domain experts who want to build AI agents that eliminate administrative overhead from HR work — freeing human judgment for the decisions that actually need it.

**Tone:** Practical, evidence-based, warm but direct. HR deals with people's careers, livelihoods, and dignity — the tone respects this. No jargon. No corporate HR-speak. Write as a seasoned CHRO advising a peer, not as a consultant selling a product.

**Governing insight:** _HR teams consumed by information routing — answering the same questions, writing the same documents, maintaining the same policies — have no capacity for the work that genuinely differentiates an organisation's talent strategy._

**Chapter number:** 37 (global). Part 3, Section 6: People & Efficiency.

**Path:** `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/06-people-and-efficiency/37-people-hr/`

---

## Plugin Architecture Summary

### Two Plugins — Zero Overlap

| Plugin            | Source               | Skills   | Agents   | Config        |
| ----------------- | -------------------- | -------- | -------- | ------------- |
| `human-resources` | Anthropic (official) | 9 skills | 0        | N/A           |
| `hr-operations`   | Panaversity (custom) | 5 skills | 4 agents | `hr.local.md` |

### Official Plugin Skills (DO NOT DUPLICATE)

`/policy-lookup`, `/onboarding`, `/draft-offer`, `/interview-prep`, `/performance-review`, `/comp-analysis`, `/org-planning`, `/people-report`, `/recruiting-pipeline`

### Custom Plugin Skills (Panaversity)

`/jd`, `/match`, `/knowledge`, `/reference`, `/offboard`

### Custom Plugin Agents (Panaversity)

`knowledge-base-agent`, `onboarding-orchestrator`, `policy-maintenance-agent`, `offboarding-knowledge-agent`

### Key Rule: No Router

The 5 custom skills have distinct trigger phrases. No routing layer needed. Each skill is invoked directly by command name or auto-activated by trigger phrases.

### Jurisdiction via Config, Not Overlays

`hr.local.md` handles jurisdiction-specific statutory rates, policies, and contacts. No separate jurisdiction overlay files.

---

## Case Study Characters

| Character    | Role                                        | Company                    | Jurisdiction | Allocation                   |
| ------------ | ------------------------------------------- | -------------------------- | ------------ | ---------------------------- |
| Ayesha Raza  | Senior Data Analyst (new hire)              | EdTech company, Karachi    | Pakistan     | L01, L02, L05, L07, L10, L14 |
| Omar Farooq  | Head of Analytics (manager)                 | EdTech company, Karachi    | Pakistan     | L05, L08, L10, L14           |
| Bilal Ahmed  | Software Engineer (performance review)      | EdTech company, Karachi    | Pakistan     | L08, L09                     |
| Zara Hussain | Senior Data Engineer (succession candidate) | EdTech company, Karachi    | Pakistan     | L09                          |
| Marcus Chen  | Product Marketing Manager (new hire)        | Technology company, London | UK           | L06, L07                     |
| Priya Kapoor | VP Marketing (manager)                      | Technology company, London | UK           | L07                          |

**Allocation ratio:** ~60% Karachi/Pakistan (Ayesha, Omar, Bilal, Zara), ~40% UK (Marcus, Priya, plus UK jurisdiction examples in policy lessons).

**Usage rules:**

- Introduce characters by full name on first mention in each lesson, then first name only
- Keep character details consistent across lessons (role, team, company)
- Karachi characters work at the same EdTech company (~250 people)
- UK characters work at a technology company (~200 people, London HQ)

---

## Cross-Reference Map

| Lesson | References TO                             | References FROM                                |
| ------ | ----------------------------------------- | ---------------------------------------------- |
| L01    | —                                         | L02 (setup builds on L01 problem framing)      |
| L02    | L01 (problem framing)                     | L03-L14 (all lessons reference plugin install) |
| L03    | L02 (plugin install)                      | L04 (KB agent extends policy lookup)           |
| L04    | L03 (policy lookup)                       | L12 (persistent agent deployment)              |
| L05    | L02 (plugin install)                      | L12 (onboarding orchestrator)                  |
| L06    | L02 (plugin install)                      | L09 (talent matching references JDs)           |
| L07    | L02, L06 (JD context)                     | L11 (offboarding references offer docs)        |
| L08    | L02 (plugin install)                      | L09 (reviews feed talent assessment)           |
| L09    | L06, L08 (JDs + reviews)                  | L14 (capstone uses all)                        |
| L10    | L02 (plugin install)                      | L11 (offboarding triggers knowledge capture)   |
| L11    | L10 (knowledge capture)                   | L12 (offboarding-knowledge-agent)              |
| L12    | L04, L05, L11 (agents from those lessons) | L13 (agent monitoring), L14 (capstone)         |
| L13    | L12 (persistent agents)                   | L14 (capstone uses analytics)                  |
| L14    | All (full lifecycle capstone)             | L15 (reference tables)                         |
| L15    | All                                       | — (final reference)                            |

---

## Sensitivity Labels Guide

Every custom skill output must include a sensitivity header:

```
TASK:          [e.g. Onboarding Plan — Ayesha Raza]
DOCUMENT TYPE: [Onboarding Plan / Policy Summary / Offer Letter / etc.]
JURISDICTION:  [UK / Pakistan / UAE / Other — or UNCONFIRMED]
CONFIGURATION: [Loaded: hr.local.md / Not configured — using best practices]
SENSITIVITY:   [ROUTINE / CONFIDENTIAL / SENSITIVE PERSONAL DATA]
```

| Label                   | When                                                     | Example                                                         |
| ----------------------- | -------------------------------------------------------- | --------------------------------------------------------------- |
| ROUTINE                 | Policy summaries, JDs, onboarding plans, general queries | `/jd`, `/policy-lookup`, `knowledge-base-agent` general queries |
| CONFIDENTIAL            | Personal data, salary, performance, talent assessments   | `/match`, `/reference`, `/performance-review`, offer letters    |
| SENSITIVE PERSONAL DATA | Medical, disciplinary, grievance, termination            | NEVER auto-generate; always escalate to named HR contact        |

**Rule:** Teach students to recognise and apply these labels. Show them in worked examples and exercises.

---

## Fact Verification Flags

Any factual claim about statutory rates, legal requirements, or industry statistics must be marked `[VERIFY]` in the draft if not confirmed from an authoritative source. Writers must use hedging language for unverified claims:

- "Research suggests..." rather than "Research shows..."
- "In many jurisdictions..." rather than "Under employment law..."
- "Typically ranges from..." rather than "Costs exactly..."

**Specifically verify before publication:**

- UK statutory sick pay rate (changes April each year)
- UK statutory maternity pay rate
- UK National Living Wage rate
- Pakistan provincial minimum wages (vary by province)
- Any specific cost figures (hiring costs, knowledge loss costs)
- Any adoption or usage statistics

---

## Sidecar Patterns

### Flashcards (`.flashcards.yaml`)

```yaml
cards:
  - front: "What are the two axes of the Kraljic matrix?"
    back: "Supply risk (difficulty of replacement) and profit impact (effect on financial performance)"
```

- 8-12 cards per lesson
- Focus on frameworks, definitions, classification criteria
- No trivia or implementation details

### Summaries (`.summary.md`)

```markdown
# {Title} — Summary

## Key Concepts

- {Concept}: {One-sentence definition}

## Skills Practised

- {/command}: {What it does}

## Key Takeaway

{Single most important insight}

## Next

→ [Lesson N+1: Title](./slug.md)
```

---

## Phantom Import Guard

**NEVER add these import statements:**

```javascript
import Flashcards from "@site/src/components/Flashcards";
import Quiz from "@site/src/components/Quiz";
```

**Correct:**

- Use `<Flashcards />` JSX tag with NO import statement
- Flashcard data lives in `.flashcards.yaml` sidecar files
- Quiz is a standalone `16-chapter-quiz.md` file generated by `/quiz-generator`

---

## Writing Quality Standards

1. **Opening narrative:** Every lesson opens with a 2-3 paragraph scenario using case study characters. Establish the problem before introducing the solution.
2. **Tables over prose:** Use comparison tables, classification tables, and decision tables. HR is full of structured information.
3. **Worked examples:** Show the full command invocation AND the expected output. Then explain what to verify in the output.
4. **Try With AI:** Three prompts (Reproduce → Adapt → Apply). Each in a code block. Each with "What you are learning:" explanation.
5. **Exercises:** Typed (Configuration, Applied Practice, Process Design), timed, single deliverable.
6. **Sensitivity:** Show the sensitivity label in every worked example output.
7. **Escalation:** Every lesson touching individual situations must include the escalation pattern: warm handoff to named HR contact.
