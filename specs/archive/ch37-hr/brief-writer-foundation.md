# Writer Brief: Foundation (L01, L02, L15)

**Writer:** writer-foundation
**Scope:** Bookend lessons — problem framing, plugin installation, quick reference
**Read first:** `specs/drafts/ch37-hr/shared-brief.md` + `specs/drafts/ch37-hr/architecture-spec.md`

---

## Lesson 01: The Institutional Memory Problem

**File:** `01-institutional-memory-problem.md`
**Duration:** 25 min
**Plugin source:** None (concepts only)
**Key concepts:** Explicit vs tacit knowledge, three HR functions AI transforms (information routing, process execution, institutional knowledge capture)

### Content Requirements

1. **Opening narrative:** Use the governing spec's introduction verbatim as inspiration — the Chief People Officer quote, explicit vs tacit knowledge distinction, the three HR functions. Open with a concrete scenario: Ayesha Raza is starting her new role. She has 15 questions in her first week. Each one has a written answer somewhere. None are findable.

2. **The Three HR Functions That AI Transforms:**
   - Function 1: Information Routing (the 60% problem — same questions, same answers, consuming time)
   - Function 2: Process Execution (offer letters, onboarding plans, JDs — repetitive documents)
   - Function 3: Institutional Knowledge Capture (tacit knowledge walking out the door)

3. **What AI does and does not change:** AI eliminates administrative overhead. It does NOT replace HR judgment on difficult situations (terminations, grievances, health crises, team conflicts).

4. **No plugin commands in this lesson.** Pure conceptual framing.

5. **Try With AI prompts:** Ask the AI to identify the three functions in a hypothetical HR team's workload. Adapt to student's own organisation.

### Sensitivity Labels

Introduce the concept of sensitivity labels (ROUTINE / CONFIDENTIAL / SENSITIVE PERSONAL DATA) as a preview of what all HR outputs will carry.

### Characters

Ayesha Raza (new hire perspective), Omar Farooq (manager perspective).

### Fact Claims to Verify

- "HR teams spend 60% of their time answering the same ten questions" — mark [VERIFY] or use hedging
- Any statistics about knowledge loss costs when employees leave

---

## Lesson 02: Your HR Operations Stack

**File:** `02-hr-operations-stack.md`
**Duration:** 30 min
**Plugin source:** Both (install both plugins + configure hr.local.md)
**Key skills:** `/policy-lookup`, `/jd` (verification only — just confirm install works)

### Content Requirements

1. **Opening:** Build directly on L01. "In Lesson 1, we identified the three problems. This lesson installs the tools that solve them."

2. **Plugin Architecture Overview:**
   - Official plugin: `human-resources` (9 skills) — what Anthropic provides out of the box
   - Custom plugin: `hr-operations` (5 skills + 4 agents) — what Panaversity adds for the gaps
   - Show the complete command table (14 commands total across both plugins)
   - Explain zero overlap — no naming collisions

3. **Installation Steps (both plugins):**
   - Official: Cowork → Customize → Browse plugins → "Human Resources"
   - Custom: Cowork → Customize → + → Add marketplace from GitHub → `panaversity/agentfactory-business-plugins` → "hr-operations"
   - Verification: run `/policy-lookup what is PTO policy` and `/jd` to confirm both plugins respond

4. **Configure hr.local.md:**
   - Walk through the template section by section (Organisation Profile → Jurisdiction → Policies → Benefits → Contacts → Onboarding → Performance → Reference)
   - Show a partially completed example using the Karachi EdTech company
   - Explain why this file is the most leveraged HR exercise — it makes every subsequent output organisation-specific

5. **Exercise:** Build your own `hr.local.md` (or use the provided template with the fictional company)

### Characters

Ayesha (new hire who will benefit from the configured system).

### Cross-References

- L01 (problem framing)
- "You will use these plugins in every lesson from L03 onwards"

---

## Lesson 15: Quick Reference & Central Insights

**File:** `15-quick-reference-central-insights.md`
**Duration:** 15 min
**Plugin source:** Both (reference tables only)
**Key content:** Command tables, agent summary, config reference, central insight

### Content Requirements

1. **Central Insight (restate):** HR teams consumed by information routing have no capacity for the work that genuinely differentiates a talent strategy.

2. **Complete Command Reference Table:**

   | Command                | Plugin   | Function                                    | Sensitivity  |
   | ---------------------- | -------- | ------------------------------------------- | ------------ |
   | `/policy-lookup`       | Official | Find and explain policies                   | ROUTINE      |
   | `/onboarding`          | Official | Onboarding plans and schedules              | ROUTINE      |
   | `/draft-offer`         | Official | Offer letters and employment docs           | CONFIDENTIAL |
   | `/interview-prep`      | Official | Interview questions and rubrics             | ROUTINE      |
   | `/performance-review`  | Official | Performance reviews                         | CONFIDENTIAL |
   | `/comp-analysis`       | Official | Compensation analysis                       | CONFIDENTIAL |
   | `/org-planning`        | Official | Org planning and restructuring              | CONFIDENTIAL |
   | `/people-report`       | Official | People analytics and reporting              | CONFIDENTIAL |
   | `/recruiting-pipeline` | Official | Recruiting pipeline management              | CONFIDENTIAL |
   | `/jd`                  | Custom   | Job descriptions + inclusive language       | ROUTINE      |
   | `/match`               | Custom   | Internal talent matching + succession       | CONFIDENTIAL |
   | `/knowledge`           | Custom   | Institutional knowledge capture             | CONFIDENTIAL |
   | `/reference`           | Custom   | Reference letters + employment verification | CONFIDENTIAL |
   | `/offboard`            | Custom   | Offboarding + knowledge transfer            | CONFIDENTIAL |

3. **Agent Summary Table:**

   | Agent                       | Function                    | Trigger          | Schedule        |
   | --------------------------- | --------------------------- | ---------------- | --------------- |
   | knowledge-base-agent        | 24/7 employee Q&A           | Always-on        | Continuous      |
   | onboarding-orchestrator     | New hire workflow           | HRIS new hire    | T-14 to Day 90  |
   | policy-maintenance-agent    | Policy currency monitoring  | Monthly + events | 1st Monday      |
   | offboarding-knowledge-agent | Departure knowledge capture | HRIS resignation | Within 24 hours |

4. **Configuration Quick Reference:**
   - `hr.local.md` sections (one-line summary of each)
   - Where to update statutory rates
   - How to add new policies to the knowledge base

5. **Chapter Contract Answers:** Five questions the student should now be able to answer (from README).

6. **After Chapter 37:** What the student can now do. What does not change (human judgment for difficult situations).

### No Exercise or Try With AI

This is a reference lesson. No exercise. Flashcards only.
