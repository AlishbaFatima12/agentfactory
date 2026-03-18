# Writer Brief: Process Execution (L05, L06, L07, L08)

**Writer:** writer-process
**Scope:** Process execution skills — onboarding, JDs, offers, performance reviews
**Read first:** `specs/drafts/ch37-hr/shared-brief.md` + `specs/drafts/ch37-hr/architecture-spec.md`
**Reference lesson format:** `apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/03-vendor-classification-kraljic.md`

---

## Lesson 05: Onboarding — The First 90 Days

**File:** `05-onboarding-first-90-days.md`
**Duration:** 40 min
**Plugin source:** Official (`/onboarding`)
**Key concepts:** Three onboarding failure modes, pre-boarding checklist, 30-60-90 framework by seniority level, role-specific success criteria

### Content Requirements

1. **Opening narrative:** Ayesha Raza starts at the EdTech company. Day 1: her laptop is not set up, her system access is not provisioned, and she has 8 hours of back-to-back induction meetings. By end of Week 1, she remembers 10% of it. This is the Information Dump failure mode.

2. **Three Onboarding Failure Modes:**
   - Information Dump (too much, too fast)
   - Administrative Bottleneck (laptop not ready, access not provisioned)
   - Invisible Ramp (no defined success criteria at 30/60/90 days)

3. **Worked example:** Generate Ayesha's onboarding plan using `/onboarding`:

   ```
   /onboarding
   New starter: Ayesha Raza
   Role: Senior Data Analyst
   Department: Finance & Analytics
   Start date: 10 March 2026
   Reports to: Head of Analytics (Omar Farooq)
   Location: Hybrid — Karachi HQ (3 days) + remote (2 days)
   Prior experience: 5 years at a fintech; strong SQL and Python; new to edtech
   Key projects in first 90 days: Q1 analytics refresh; data pipeline audit
   ```

   Show the expected output structure (pre-boarding checklist, Week 1 schedule, 30-60-90 plan with specific success criteria).

4. **Success Criteria Quality Rule:** WEAK vs STRONG examples. "Understands the company culture" is WEAK. "Can describe the company's three strategic priorities and explain how their role contributes" is STRONG.

5. **Exercise:** Design a complete onboarding programme for a role in student's own organisation (or use the fictional roles). Steps: define success criteria → generate plan → audit pre-boarding checklist → create manager briefing.

### Characters

Ayesha Raza (new hire), Omar Farooq (her manager).

---

## Lesson 06: Job Descriptions & Interview Preparation

**File:** `06-job-descriptions-interview-prep.md`
**Duration:** 40 min
**Plugin source:** Custom (`/jd`) + Official (`/interview-prep`)
**Key concepts:** Four JD principles (candidate's perspective, lead with work, calibrate requirements, inclusive language), inclusive language check, interview rubric design

### Content Requirements

1. **Opening narrative:** The EdTech company needs to hire a Senior Data Analyst (Ayesha's role — show what made the JD that attracted her effective). Then show a contrasting "bad" JD for the same role: 15 "essential" requirements, no salary range, "rockstar" language.

2. **Four JD Principles:**
   - Candidate's perspective first
   - Lead with the work, not the requirements
   - Calibrate requirements ruthlessly (essential vs beneficial)
   - Inclusive language by default

3. **Worked example with `/jd`:** Generate Ayesha's role JD. Show the inclusive language check output (remove "rockstar", flag years-of-experience requirements).

4. **Interview preparation with `/interview-prep`:** For the same role, generate structured interview questions and a scoring rubric. Show how the JD requirements translate to interview questions.

5. **Exercise:** Write three job descriptions at different levels (junior, mid, senior). Run inclusive language check. Generate interview prep for one. Deliverable: three revised JDs + one interview rubric.

### Characters

Marcus Chen (UK example — Product Marketing Manager JD), Ayesha Raza (Karachi example).

### Plugin Boundary

- `/jd` is CUSTOM (hr-operations plugin)
- `/interview-prep` is OFFICIAL (human-resources plugin)
- Show both working together

---

## Lesson 07: Offer Letters & Employment Documents

**File:** `07-offer-letters-employment-docs.md`
**Duration:** 35 min
**Plugin source:** Official (`/draft-offer`) + Custom (`/reference`)
**Key concepts:** Document types (offer, promotion, salary change, contract amendment, flexible working), jurisdiction-specific additions, reference letter types (factual vs professional), HR sign-off requirement

### Content Requirements

1. **Opening narrative:** Marcus Chen has been selected for the Product Marketing Manager role. Priya Kapoor (VP Marketing) needs an offer letter by tomorrow. In a traditional HR operation, this takes the HRBP 30 minutes to draft, 15 minutes for HR review, and risks a delay if the HRBP is on leave.

2. **Five document types:** Offer letter, promotion letter, salary change, contract amendment, flexible working agreement. Focus on offer letter as the primary worked example.

3. **Worked example with `/draft-offer`:** Generate Marcus's offer letter. Show the mandatory "REVIEW BEFORE SENDING" note. Discuss jurisdiction-specific additions (UK: right-to-work, P45).

4. **Reference letters with `/reference`:** Types (factual, professional, employment verification). Show the legal risks (defamation, misrepresentation). Policy check: always verify organisation's reference policy from hr.local.md.

5. **Exercise:** Generate an offer letter for a real (anonymised) or fictional role. Then generate a factual reference for a departing employee. Verify both against hr.local.md configuration.

### Characters

Marcus Chen (offer recipient), Priya Kapoor (his manager).

### Sensitivity

Both offer letters and reference letters are CONFIDENTIAL. Show the sensitivity label in every output example.

---

## Lesson 08: Performance Reviews Without Bureaucracy

**File:** `08-performance-reviews.md`
**Duration:** 40 min
**Plugin source:** Official (`/performance-review`)
**Key concepts:** Manager-written review quality standards, vague-to-specific conversion, 360-degree feedback synthesis, development areas as behaviours not personality, maximum 2 development areas, career development honesty

### Content Requirements

1. **Opening narrative:** Omar Farooq needs to write Bilal Ahmed's performance review. He has vague notes: "Bilal is technically strong but could be more proactive." This takes him 2 hours of staring at a template. The template produces documentation nobody reads after the review meeting.

2. **Vague-to-Specific Conversion:** Show how the `/performance-review` skill converts:
   - INPUT: "She could be more proactive"
   - OUTPUT: Specific observation with evidence, why it matters at this role level, specific development action with timeline

3. **Quality Standards:**
   - Strengths: specific, evidenced, connected to role impact
   - Development areas: behavioural (not personality), evidenced, forward-looking, maximum 2
   - Career development: honest, specific, no false promises
   - Goals: SMART, maximum 3-4, at least one development-focused

4. **Worked example:** Generate Bilal's review using `/performance-review`. Show the full output. Highlight: praise is specific and evidenced; development areas are observable behaviour, not personality criticism; career path is honest about timeline.

5. **360-degree feedback synthesis:** Briefly show how multiple reviewer inputs get synthesised into themes. Flag anonymity risk when reviewer pools are small.

6. **Exercise:** Write a performance review for a real (anonymised) or fictional team member. Test the vague-to-specific conversion with your own notes. Generate a 360-degree feedback template.

### Characters

Omar Farooq (manager writing the review), Bilal Ahmed (employee being reviewed).

### Key Teaching Point

The review framework reduces the time managers spend writing reviews WITHOUT reducing the quality. Administrative burden down, feedback quality up.
