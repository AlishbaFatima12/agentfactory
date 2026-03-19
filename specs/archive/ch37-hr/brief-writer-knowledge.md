# Writer Brief: Knowledge & Agents (L04, L10, L11, L12)

**Writer:** writer-knowledge
**Scope:** Custom agents + knowledge capture — the unique value of the Panaversity plugin
**Read first:** `specs/drafts/ch37-hr/shared-brief.md` + `specs/drafts/ch37-hr/architecture-spec.md`
**Reference lesson format:** `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/03-vendor-classification-kraljic.md`

---

## Lesson 04: The HR Knowledge Base Agent

**File:** `04-hr-knowledge-base-agent.md`
**Duration:** 40 min
**Plugin source:** Custom (knowledge-base-agent)
**Key concepts:** Query classification (policy query vs individual situation), escalation protocol, warm handoff pattern, weekly report, knowledge gaps

### Content Requirements

1. **Opening narrative:** An employee at the EdTech company asks at 11pm on a Sunday: "I am going to be off sick tomorrow. What do I need to do?" There is no one in HR. The answer exists in paragraph 14 of the employee handbook. The Knowledge Base Agent answers instantly, accurately, and cites the policy source.

2. **Query Classification Decision Tree:**
   - Has a written answer → Answer directly, cite source
   - Individual circumstances → Warm handoff to HR
   - Disciplinary/grievance/medical → Warm handoff + EAP if distress
   - Ambiguous/jurisdiction-dependent → State general position, direct to HR
   - Outside scope → "I don't know — contact [HR name]"

3. **The Two Query Types:**
   - TYPE 1 (answer directly): "How many days of annual leave do I have?" — policy answer with citation
   - TYPE 2 (warm handoff): "My manager has asked me to do something I'm uncomfortable with" — NEVER attempt to adjudicate

4. **Worked examples:** Show 3-4 query/response pairs covering both types. Include at least one where the agent correctly refuses to adjudicate an individual situation and provides a warm handoff.

5. **Tone configuration:** Warm, practical, human. "A helpful colleague, not a legal compliance system." Plain English. No HR jargon.

6. **Weekly report to HR:** Show the report format — volume, top categories, escalations, knowledge gaps, trends.

7. **Exercise:** Build a 20-entry FAQ database for the fictional company (or student's own). Test with 10 queries. Evaluate accuracy, tone, citations, escalation paths. Identify knowledge gaps.

### Key Teaching Point

The Knowledge Base Agent's most important design decision is NOT what it answers — it's what it refuses to answer. Every individual situation gets a warm handoff. Every time. Without exception.

### Builds On

L03 (policy lookup) — the KB agent extends policy lookup into a 24/7 self-service layer.

---

## Lesson 10: Capturing Institutional Knowledge

**File:** `10-institutional-knowledge-capture.md`
**Duration:** 40 min
**Plugin source:** Custom (`/knowledge`)
**Key concepts:** Knowledge risk assessment (HIGH/MEDIUM/LOW), proactive vs reactive capture, knowledge interview guide structure, knowledge article format, confidence levels

### Content Requirements

1. **Opening narrative:** A Senior Project Manager at the EdTech company has just resigned. She has been here for 8 years, manages the three largest client relationships, and leads the delivery methodology. In 6 weeks, she leaves. The question is not whether knowledge will be lost — it is how much.

2. **Knowledge Risk Assessment:**
   - HIGH: Sole holder, undocumented, client-facing, no successor
   - MEDIUM: Significant holder, partial documentation, successor developing
   - LOW: Well-documented, broadly distributed, transferable

3. **Proactive vs Reactive:**
   - Reactive (triggered by departure): urgent, comprehensive, time-limited
   - Proactive (no departure): systematic, annual reviews for high-risk holders

4. **Knowledge Interview Guide:** Show the three-session structure from the spec:
   - Session 1: Client relationships (who are the real decision-makers?)
   - Session 2: Delivery methodology (where does reality differ from documentation?)
   - Session 3: Institutional context (what would you tell your replacement?)

5. **Knowledge Article Format:** Title, scope, the knowledge, when it applies, exceptions, related contacts, confidence level (HIGH/MEDIUM/LOW).

6. **Worked example with `/knowledge`:** Generate a knowledge capture plan for the departing Senior PM. Show the interview guide output and a sample knowledge article.

7. **Exercise:** Identify three high-risk knowledge holders in student's organisation. Generate a capture plan for the highest risk. Conduct a simulated 30-minute interview. Structure the captured knowledge into articles.

### Characters

Introduce a departing PM character (can be a brief cameo — not a main character from the case study list). Use Omar Farooq as the manager coordinating the capture.

---

## Lesson 11: Offboarding & Knowledge Transfer

**File:** `11-offboarding-knowledge-transfer.md`
**Duration:** 35 min
**Plugin source:** Custom (`/offboard` + `offboarding-knowledge-agent`)
**Key concepts:** Four offboarding principles (protect org, preserve knowledge, positive experience, support team), four-phase offboarding (immediate actions → handover → exit interview → last day), offboarding-knowledge-agent automation

### Content Requirements

1. **Opening narrative:** The same Senior PM from L10 — now focus on the full offboarding process, not just knowledge capture. The handover plan, the exit interview, the access removal, the alumni relationship.

2. **Four Offboarding Principles:**
   - Protect the organisation (access removal, documentation)
   - Preserve institutional knowledge (structured handover — built on L10)
   - Leave a positive experience (alumni, not detractors)
   - Support the team (transition plan)

3. **Four-Phase Offboarding:**
   - Phase 1: Departure confirmed — immediate actions (24 hours)
   - Phase 2: Notice period — handover planning
   - Phase 3: Exit interview (Week 3 of notice, with HRBP, not line manager)
   - Phase 4: Last day checklist (HR, IT, Manager)

4. **Exit Interview Design:** Timing (Week 3), interviewer (HRBP), question structure, output format. Key rule: never conduct with line manager.

5. **The Offboarding-Knowledge-Agent:** Show how the agent auto-triggers on HRIS resignation:
   - Step 1: Knowledge risk assessment (auto from HRIS data)
   - Step 2: Generate capture plan
   - Step 3: Schedule sessions
   - Step 4: Generate knowledge articles after each session
   - Step 5: Completion report on last day

6. **Worked example with `/offboard`:** Generate a complete offboarding plan. Show the handover plan table format.

7. **Exercise:** Design an offboarding process for a departing team member. Include: handover plan, exit interview questions, last-day checklist.

### Builds On

L10 (knowledge capture feeds into offboarding knowledge transfer).

---

## Lesson 12: Persistent Agents — Orchestrator & Maintenance

**File:** `12-persistent-agents-orchestrator-maintenance.md`
**Duration:** 40 min
**Plugin source:** Custom (onboarding-orchestrator + policy-maintenance-agent)
**Key concepts:** Event-triggered vs scheduled agents, workflow timelines, alert triggers, policy currency monitoring, statutory rate detection

### Content Requirements

1. **Opening narrative:** It is T-3 days before Ayesha Raza's start date. Her laptop has not been ordered. Nobody noticed because nobody was tracking the pre-boarding checklist. The Onboarding Orchestrator agent is the one that notices — and escalates.

2. **Onboarding Orchestrator:**
   - Trigger: HRIS new hire record
   - Timeline: T-14 → T-7 → T-3 → Day 1 → Day 10 → Day 30 → Day 60 → Day 90
   - Alert triggers: critical pre-boarding item incomplete at T-3, mandatory training incomplete at Day 12, survey score ≤ 2
   - Outputs: personalised checklists, calendar invites, surveys, completion summary

3. **Policy Maintenance Agent:**
   - Schedule: Monthly (1st Monday) + event-triggered (statutory rate changes)
   - Five monthly checks: policy version currency, statutory rate monitoring, document consistency, link check, FAQ knowledge gap analysis
   - Jurisdiction-specific rate monitoring (UK April 6 changes, Pakistan provincial wages)
   - Output: monthly maintenance report

4. **Agent Deployment Pattern:** Show how to configure both agents using `/schedule` or equivalent. Show the agent YAML frontmatter, the trigger configuration, and the expected outputs.

5. **Exercise:** Configure the onboarding orchestrator for a new hire scenario. Configure the policy maintenance agent for your jurisdiction. Run a simulated monthly check.

### Key Teaching Point

These agents run continuously in the background. They are the HR equivalent of a financial audit agent — they catch the things humans miss because humans are busy with the 60% of administrative work that these same agents help reduce.

### Characters

Ayesha Raza (onboarding orchestrator example), UK jurisdiction for policy maintenance examples.

### Builds On

L04 (knowledge-base-agent), L05 (onboarding), L11 (offboarding-knowledge-agent).
