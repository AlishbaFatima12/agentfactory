# Writer Brief: Synthesis (L09, L13, L14)

**Writer:** writer-synthesis
**Scope:** Strategic HR skills + analytics + capstone
**Read first:** `specs/drafts/ch37-hr/shared-brief.md` + `specs/drafts/ch37-hr/architecture-spec.md`
**Reference lesson format:** `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/03-vendor-classification-kraljic.md`

---

## Lesson 09: Compensation, Talent & Org Planning

**File:** `09-compensation-talent-org.md`
**Duration:** 45 min
**Plugin source:** Official (`/comp-analysis`, `/org-planning`) + Custom (`/match`)
**Key concepts:** Internal mobility vs external hiring (3-6x cost), talent matching dimensions, readiness classification, succession planning, compensation benchmarking, org restructuring

### Content Requirements

1. **Opening narrative:** The EdTech company needs a Team Lead, Data Engineering. External recruitment will cost 3-6x an internal promotion and take 6-12 months to reach productivity. Two internal candidates exist: Zara Hussain (strong match, 3 years) and Ahmed Malik (developing, 2 years). The question is not "should we hire externally?" — it is "have we properly assessed internally first?"

2. **Three skills working together:**
   - `/comp-analysis` (Official): Compensation benchmarking — is the salary range for the new role competitive? How does it compare to internal equity?
   - `/match` (Custom): Talent matching — assess Zara and Ahmed against the role requirements across six dimensions
   - `/org-planning` (Official): If Zara moves up, what happens to her current role? How does the org structure need to adjust?

3. **Talent Match Six Dimensions:**
   - Critical skills (demonstrated/developing/absent)
   - Experience (relevant/partial/limited)
   - Performance trajectory (ascending/consistent/variable)
   - Readiness indicators (operating above level, self-initiated work)
   - Development areas (experience gap/skill gap/mindset gap)
   - Motivation and career intent

4. **Readiness Classification:**
   - READY NOW / READY IN 6 MONTHS / READY IN 12 MONTHS / DEVELOPING / NOT A FIT

5. **Worked example with `/match`:** Full talent assessment for Zara and Ahmed. Show the output format: role requirements, per-candidate assessment, overall recommendation.

6. **Succession Conversation Guide:** How to talk to high-potential employees about development without making promotion promises. NEVER SAY "You will definitely be promoted." ALWAYS SAY "If [conditions] continue, [pathway] becomes realistic."

7. **Exercise:** Define 3-5 succession-critical roles. Map internal candidates. Run `/match` for the highest-priority role. Design a development plan for the strongest candidate.

### Characters

Zara Hussain (strong internal candidate), Ahmed Malik (developing), Bilal Ahmed (referenced from L08 review as context).

### Sensitivity

All talent assessment outputs are CONFIDENTIAL. Show the label. Note: these assessments inform decisions — they are not decisions.

---

## Lesson 13: People Analytics & Agent Operations

**File:** `13-people-analytics-agent-operations.md`
**Duration:** 40 min
**Plugin source:** Official (`/people-report`, `/recruiting-pipeline`) + Custom (agent monitoring concepts)
**Key concepts:** People analytics reporting, recruiting pipeline management, agent monitoring (knowledge-base-agent weekly reports, onboarding orchestrator summaries, policy maintenance reports), operational intelligence from agent data

### Content Requirements

1. **Opening narrative:** The CHRO at the EdTech company receives four separate reports: the Knowledge Base Agent's weekly query summary, the Onboarding Orchestrator's completion report, the Policy Maintenance Agent's monthly audit, and a recruiting pipeline update. Each report contains operational intelligence. Together, they tell a story about the health of the HR function.

2. **People Analytics with `/people-report`:**
   - Headcount and turnover metrics
   - Diversity and representation data
   - Time-to-hire and cost-per-hire
   - Employee satisfaction trends
   - Show a worked example generating a quarterly people report

3. **Recruiting Pipeline with `/recruiting-pipeline`:**
   - Pipeline stages and conversion rates
   - Time-in-stage analysis
   - Source effectiveness
   - Show a worked example for the Team Lead Data Engineering role from L09

4. **Agent Operations Intelligence:**
   - Knowledge Base Agent: query volume trends, knowledge gaps, escalation patterns
   - Onboarding Orchestrator: pre-boarding completion rates, survey scores, milestone adherence
   - Policy Maintenance Agent: policy currency status, rate change alerts, consistency findings
   - Offboarding Knowledge Agent: knowledge capture completion rates, risk assessments

5. **The HR Intelligence Dashboard (conceptual):**
   - How the four agent reports plus people analytics create a continuous intelligence layer
   - Signal detection: rising query volumes = policy confusion; low survey scores = onboarding failure; knowledge gaps = documentation priority

6. **Exercise:** Generate a quarterly people report. Review the knowledge-base-agent weekly report template. Design an HR intelligence dashboard (on paper) showing which metrics from which agents you would track.

### Key Teaching Point

The agents are not just automation — they are sensors. Their reports are operational intelligence that tells you where the HR function is working and where it is failing.

### Builds On

L12 (persistent agents — this lesson shows what their outputs tell you).

---

## Lesson 14: Capstone — The Full Employee Lifecycle

**File:** `14-capstone-full-employee-lifecycle.md`
**Duration:** 90 min
**Plugin source:** Both (all skills + all agents)
**Key concepts:** Full lifecycle: hire → onboard → develop → review → promote/retain → offboard/capture knowledge

### Content Requirements

1. **Opening narrative:** Walk through Ayesha Raza's complete employee lifecycle at the EdTech company. This capstone weaves together every skill and agent from L01-L13 into a single continuous workflow.

2. **Lifecycle Stages:**

   **Stage 1: HIRE (L06 + L07)**
   - Write the JD for Ayesha's role (`/jd`)
   - Prepare interview questions (`/interview-prep`)
   - Generate the offer letter (`/draft-offer`)
   - → Offboarding-knowledge-agent captured the departing analyst's knowledge (L10-L11)

   **Stage 2: ONBOARD (L05 + L12)**
   - Generate Ayesha's 30-60-90 plan (`/onboarding`)
   - Onboarding orchestrator auto-triggers (pre-boarding → Day 1 → Day 90)
   - Knowledge Base Agent answers her Day 1 questions

   **Stage 3: DEVELOP (L08 + L09)**
   - Omar writes Ayesha's first performance review (`/performance-review`)
   - Compensation analysis when Ayesha is due for a raise (`/comp-analysis`)

   **Stage 4: RETAIN/PROMOTE (L09)**
   - Talent matching when a leadership role opens (`/match`)
   - Succession conversation guide

   **Stage 5: OFFBOARD (if applicable) (L10 + L11)**
   - If Ayesha leaves: offboarding plan (`/offboard`)
   - Knowledge capture before departure (`/knowledge`)
   - Offboarding-knowledge-agent auto-triggers

   **Stage 6: CONTINUOUS (L12 + L13)**
   - Policy maintenance agent monitors for statutory changes
   - People analytics tracks trends across all stages
   - Knowledge Base Agent available 24/7

3. **Exercise Structure:**
   The capstone is one continuous exercise. The student executes the full lifecycle for one employee (real anonymised or fictional):
   - Step 1: Write the JD and generate interview prep (20 min)
   - Step 2: Generate the offer letter (10 min)
   - Step 3: Create the onboarding plan (15 min)
   - Step 4: Write a performance review after the first year (15 min)
   - Step 5: Run a talent match when a promotion opportunity appears (15 min)
   - Step 6: Generate an offboarding plan and knowledge capture plan (15 min)

   **Deliverable:** A complete employee lifecycle folder with 6 documents, each generated using the appropriate plugin command, each with the correct sensitivity label.

4. **Reflection:** What did the AI do well? Where did it need human judgment? What would you change in the hr.local.md configuration based on what you observed?

### Characters

Ayesha Raza (full lifecycle subject), Omar Farooq (her manager throughout).

### Cross-References

References every previous lesson. This is the integration point.

### Sensitivity Labels

The capstone output includes a mix of ROUTINE and CONFIDENTIAL documents. The student should correctly identify and label each one.
