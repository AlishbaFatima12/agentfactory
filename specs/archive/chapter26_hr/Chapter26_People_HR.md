# Chapter 26: People & Organizational Operations (HR)

> *"Every HR team I have ever worked with is simultaneously under-resourced and drowning in repetitive work. They spend 60% of their time answering the same ten questions — 'What is our parental leave policy?' 'How do I request a reference letter?' 'Where do I find the performance review template?' — and the other 40% doing high-judgment work that only humans can do: navigating a difficult termination, mediating a team conflict, assessing a candidate's cultural fit. The tragedy is that the 60% is exhausting and adds no value, and the 40% is chronically under-invested because the 60% has consumed the time and energy that the 40% deserved."*
> — Chief People Officer, 800-person technology company, 2025

---

## Introduction: The Institutional Memory Problem

Every organisation accumulates knowledge that exists in two forms. The first is **explicit knowledge**: written policies, process documents, org charts, compensation bands, onboarding checklists. This knowledge is theoretically findable — it exists in documents somewhere. The practical reality is that it is scattered across a shared drive, an HRIS system, a Confluence wiki, several outdated PDFs, and the institutional memory of the three HR team members who have been at the company for more than three years.

The second form is **tacit knowledge**: the unwritten understandings that govern how things actually work. "HR policy says annual performance reviews but the real cycle here is quarterly." "The travel expense policy says £50/day for meals but the actual practice is that nobody claims more than £35 because the last person who did got a difficult conversation from Finance." "The formal policy for remote work requests requires two weeks' notice but in practice you send Sarah a Slack message and she approves it in an hour."

HR operations are degraded by both problems:

**Explicit knowledge is hard to find** — employees ask HR the same questions constantly because they cannot locate or navigate the written policies themselves. HR team members spend hours each week answering questions that written documentation already answers.

**Tacit knowledge is invisible** — the institutional knowledge that makes an organisation actually function lives in the heads of long-tenured employees and is never written down. When those people leave, it goes with them. Every year, at every organisation, knowledge walks out the door.

The goal of an AI-native HR operation is not to replace HR professionals. It is to solve both problems: make explicit knowledge findable without asking a person, and capture tacit knowledge before it evaporates. This frees HR to do the work that only humans can do.

---

## The Three HR Functions That AI Transforms

### Function 1: Information Routing

The majority of employee HR interactions are information requests:
- "What is our holiday policy?"
- "How do I submit an expense claim?"
- "What is the process for requesting a promotion?"
- "Where is the performance review template?"
- "What happens to my pension if I leave?"

These questions have written answers. The problem is finding them. An HR Knowledge Base Agent — a Claude agent connected to the organisation's policy documents, handbook, and FAQs — answers these questions instantly, accurately, and consistently. It cites the policy source. It knows when to say "I don't know — speak to HR directly." It never tires, is never on holiday, and gives the same answer to every employee regardless of who they are or what time they ask.

The HR team member is freed from the hundredth iteration of "what is our holiday policy" to spend time on the question that actually needs human judgment.

### Function 2: Process Execution

HR processes generate enormous amounts of repetitive administrative writing:
- Offer letters (the same structure, hundreds of times per year, different names and numbers)
- Onboarding schedules (the same programme, different start dates and departments)
- Policy summaries (the same policies, reformatted for different audiences)
- Reference letters (the same structure, different achievements and names)
- Job descriptions (the same framework, different roles and requirements)
- Performance review templates (the same structure, different competencies and goals)

Every one of these is a document that a skilled HR professional could write in 20 minutes — but shouldn't, because the marginal value of the 200th offer letter is essentially zero and the 20 minutes spent on each is 20 minutes taken from genuinely high-value HR work.

AI does not improve these documents. They were already good. AI produces them in 2 minutes instead of 20, at the same quality, freeing 18 minutes per document for work that matters.

### Function 3: Institutional Knowledge Capture

The most important and most neglected HR function in the AI era is knowledge capture: the systematic process of turning tacit organisational knowledge into explicit, searchable, updatable documentation before the people who hold it leave.

This is not a new problem — knowledge management has been a recognised discipline for decades. What is new is that AI makes the capture process substantially less burdensome. An employee about to leave can be interviewed by an AI agent that extracts, structures, and documents their institutional knowledge in a fraction of the time it would take a human interviewer. A departing manager's team context, decision-making frameworks, and key relationships can be preserved in a structured handover document. A retiring subject-matter expert's domain knowledge can be synthesised into a knowledge article before they go.

---

## The HR Plugin Architecture

### Installing the Plugin

```
Platform:  Claude Cowork
Path:      Cowork → Plugins → Browse
Plugin:    Human Resources
URL:       https://claude.com/plugins/human-resources
GitHub:    https://github.com/anthropics/knowledge-work-plugins/tree/main/human-resources
```

### Plugin Commands

| Command | Function |
|---|---|
| `/onboard` | Generate onboarding plans and schedules |
| `/policy` | Synthesise, explain, or update HR policies |
| `/offer` | Draft offer letters and employment documentation |
| `/jd` | Write or improve job descriptions |
| `/review` | Structure performance reviews and 360° feedback |
| `/match` | Talent matching — internal mobility and role fit |
| `/knowledge` | Capture and structure institutional knowledge |
| `/reference` | Draft reference letters and employment verifications |
| `/query` | HR knowledge base query (employee self-service) |
| `/offboard` | Structure offboarding processes and knowledge transfer |

### The `hr.local.md` Configuration File

Every HR output is calibrated by the organisation's HR configuration. This file encodes:
- Company name, size, and jurisdiction (employment law varies by country)
- Policy library (key policies and where they are stored)
- Onboarding programme structure
- Performance review cycle and framework
- Benefits summary by employment tier
- Key HR contacts and escalation paths
- Glossary of company-specific terms

Configured correctly, this file means that `/policy` outputs reference your actual policies and your specific leave entitlements, not generic HR best practices.

---

## Part One: Employee Onboarding — The First 90 Days

### Why Onboarding Fails

Research consistently shows that new employee productivity, retention, and long-term performance are disproportionately shaped by the first 90 days. Yet most onboarding programmes share the same failure modes:

**Failure Mode 1: The Information Dump**
Day 1 is 8 hours of back-to-back inductions with fifteen different people, each presenting their function in a 30-minute slide deck. The new employee remembers 10% of it. The rest is lost.

**Failure Mode 2: The Administrative Bottleneck**
The new employee cannot do their job because their laptop is not set up, their system access has not been provisioned, their line manager is on holiday that week, and the document they need is in a shared drive they cannot access yet.

**Failure Mode 3: The Invisible Ramp**
The new employee does not know what "good" looks like in the first 30, 60, or 90 days. They are working hard, but nobody has defined what success looks like, so nobody — including the new employee — can tell whether they are on track.

The `/onboard` command addresses all three: it creates structured onboarding plans with pre-boarding administrative checklists, a 30-60-90 day learning and performance framework, and role-specific content that tells the new employee what success looks like at each stage.

### The `/onboard` Workflow

```
/onboard
> Agent: Please provide details about the new employee and their role.

> User: New starter: Ayesha Raza
        Role: Senior Data Analyst
        Department: Finance & Analytics
        Start date: 10 March 2026
        Reports to: Head of Analytics (Omar Farooq)
        Location: Hybrid — Karachi HQ (3 days) + remote (2 days)
        Prior experience: 5 years at a fintech; strong SQL and Python;
        new to our industry (edtech)
        Key projects in first 90 days: Q1 analytics refresh;
        data pipeline audit
```

**Sample Onboarding Plan Output:**

```
ONBOARDING PLAN: Ayesha Raza — Senior Data Analyst
Start date: 10 March 2026 | Manager: Omar Farooq
════════════════════════════════════════════════════════════

── PRE-BOARDING CHECKLIST (complete before Day 1) ──────────
Admin (HR/IT):
  □ Offer letter signed and filed
  □ Laptop ordered and configured (data analyst build: Python, SQL, BI tools)
  □ System access provisioned: HRIS, data warehouse, BI platform, GitHub
  □ Day 1 schedule sent to Ayesha
  □ Parking/building access arranged
  □ IT induction booked (Day 1 AM)

Manager (Omar):
  □ Team introduction email sent (before Day 1)
  □ 30-60-90 plan drafted and ready to share Day 1
  □ First week's schedule blocked: no all-day meetings
  □ Buddy assigned from analytics team
  □ Key stakeholder intro meetings booked for Week 2

── WEEK 1: ORIENTATION ─────────────────────────────────────
Theme: "Understand the organisation, the team, and the tools"

Day 1:
  AM: IT setup and system access (with IT team)
      Welcome meeting with Omar — context, team, initial priorities
  PM: HR induction: benefits, policies, ways of working
      Explore company handbook and knowledge base

Day 2–3:
  Company context sessions (60 min each):
  - Business model and strategy briefing (Omar)
  - Finance and Analytics function overview (Head of Finance)
  - Data infrastructure overview: data warehouse, pipelines, BI (Data Eng)

Day 4–5:
  - Shadow current data analyst work (observe, do not do)
  - Self-directed: explore existing dashboards and documentation
  - Intro meetings: Product Manager, Engineering Lead, CFO team
  - Buddy check-in: informal lunch

Week 1 success: Ayesha can describe what the company does, who her
key stakeholders are, and where the major data assets live.

── DAYS 8–30: LEARNING AND CONTRIBUTION ────────────────────
Theme: "Learn the domain; make first contributions"

Key learning goals:
  □ Understand our edtech domain and student/institution data model
  □ Learn our BI tooling and reporting conventions
  □ Understand the Q1 analytics refresh project scope and timeline
  □ Complete data security and GDPR training (mandatory — Day 10 deadline)

First contributions:
  □ Join Q1 analytics refresh project: initial brief with Omar (Week 2)
  □ Review existing analytics documentation: identify gaps
  □ First solo analysis task (agreed with Omar by Day 10)

30-day check-in (with Omar — 1 hour):
  Topics: How is onboarding going? What is unclear?
  What does Ayesha need to be effective? What are the priorities for Day 31–60?

30-day success: Ayesha has completed her first solo analysis task;
understands the Q1 analytics refresh scope; has met all key stakeholders.

── DAYS 31–60: INDEPENDENCE ────────────────────────────────
Theme: "Own work streams; reduce dependency on manager for day-to-day"

Goals:
  □ Lead day-to-day delivery on Q1 analytics refresh
  □ Present first analysis to a stakeholder group (Finance team)
  □ Identify and document one data quality issue for remediation
  □ Begin data pipeline audit: scope and initial findings

60-day check-in (with Omar — 1 hour):
  Topics: Feedback on work quality; what is going well;
  what needs development; adjusted priorities for Day 61–90.
  HR check-in: separate session with HR Business Partner to confirm
  onboarding experience and flag any concerns.

60-day success: Ayesha is delivering independently on Q1 analytics
refresh; has stakeholder relationships established; pipeline audit scoped.

── DAYS 61–90: PERFORMANCE ─────────────────────────────────
Theme: "Perform at role level; begin contributing to team strategy"

Goals:
  □ Complete Q1 analytics refresh delivery
  □ Deliver pipeline audit initial report
  □ Identify and propose one improvement to current analytics process
  □ Share one piece of domain knowledge / edtech insight with team

90-day review (with Omar + HR Business Partner — 1 hour):
  Formal review of performance against 30-60-90 plan.
  Topics: What has gone well? Where are the development areas?
  What are the priorities for Month 4+?

90-day success: Ayesha is performing at Senior Data Analyst level;
has delivered two project milestones; is seen as a valued team member
by key stakeholders.
════════════════════════════════════════════════════════════
```

### Role-Specific Onboarding Configuration in SKILL.md

The onboarding plan above is calibrated to the specific role, department, and experience level because the SKILL.md encodes the organisation's onboarding programme. A generic onboarding plan is almost useless — it must be specific to the person, the role, and the organisation.

```markdown
## Onboarding Configuration

### Standard Pre-Boarding Checklist (all roles)
HR Admin:
  - Offer letter signed; right-to-work documentation complete
  - HRIS record created
  - Benefits enrolment pack sent
  - Employee handbook and welcome email sent
  - Day 1 schedule communicated

IT Admin:
  - Laptop/device ordered and configured per role profile
  - System access provisioned per role access matrix
  - Email and calendar set up
  - Security training scheduled (complete within Day 10)

Manager:
  - Team introduction email sent before Day 1
  - First week schedule blocked (no all-day meetings; no travel)
  - Buddy assigned and briefed
  - 30-60-90 plan ready to share Day 1
  - Key stakeholder intros booked for Week 2

### 30-60-90 Framework by Role Level
  Junior (0–3 years): 30d = orientation; 60d = supervised contribution;
                       90d = independent on defined tasks
  Mid (3–7 years):    30d = orientation + first contribution;
                       60d = leading work streams; 90d = full role performance
  Senior (7+ years):  30d = orientation + first stakeholder relationships;
                       60d = independent delivery; 90d = strategic contribution

### Mandatory Completions (all employees, by Day 10)
  - GDPR / Data protection training
  - Information security training
  - Code of conduct and ethics policy sign-off
  - Health and safety awareness (if office-based)
  - [Any sector-specific compliance training — configure per sector]
```

---

## Part Two: Policy Synthesis — Making Policies Actually Useful

### The Policy Communication Problem

Most HR policies are written to be legally defensible, not to be understood. A 40-page employee handbook is technically complete but practically useless. The question "What is our parental leave policy?" has a legal answer buried in paragraph 14 of Schedule 3, and a practical answer that employees actually need: "You get 26 weeks at full pay followed by 13 weeks at statutory rate, and you notify HR at least 8 weeks before your planned leave start date."

The `/policy` command does two things: it synthesises complex policies into plain-language summaries that employees can actually use, and it keeps those summaries consistent with the underlying policy documents when policies change.

### The `/policy` Workflow

```
/policy
> Agent: What policy area do you need help with?

> User: Create a plain-language summary of our parental leave policy
        for employees. They need to understand what they're entitled to,
        what the process is, and what to do if they have questions.
        Our policy: 26 weeks at full pay (primary carer), then 13 weeks
        at statutory pay. Secondary carers get 2 weeks at full pay.
        Notice required: 8 weeks before planned leave start.
        Jurisdiction: UK. Company size: 250 employees.
```

**Sample Policy Summary Output:**

```
YOUR PARENTAL LEAVE — PLAIN LANGUAGE SUMMARY
════════════════════════════════════════════════════════════
This summary covers the key points. Full policy: [link to handbook].
For specific questions, contact [HR contact]: [email].

WHAT YOU ARE ENTITLED TO

If you are the primary carer (typically the birth parent or primary
adopter):
  Full pay:       26 weeks — you receive your normal salary in full
  Statutory pay:  13 weeks — you receive Statutory Maternity / Paternity Pay
                  (currently £[statutory rate]/week or 90% of earnings
                  if lower)
  Unpaid leave:   13 weeks — additional unpaid leave available if you wish
                  to take up to 52 weeks in total

If you are the secondary carer:
  Full pay:       2 weeks — you receive your normal salary in full
  This can be taken any time within 56 days of the birth or placement

WHAT YOU NEED TO DO

  Step 1: Tell your manager and HR as soon as you feel comfortable doing so.
          There is no obligation to tell us early — but earlier communication
          helps with planning and means you get your rights earlier.

  Step 2: Give formal notice at least 8 weeks before your planned leave start
          date. HR will send you the notice form.

  Step 3: HR will confirm your leave dates and pay arrangements in writing
          within 28 days of your formal notice.

KEEPING IN TOUCH DURING LEAVE
  You can work up to 10 Keeping in Touch (KIT) days during your leave without
  ending it. These are optional and must be agreed with your manager.
  You are paid your normal daily rate for KIT days.

YOUR RIGHTS WHILE ON LEAVE
  Your contract continues while you are on leave. You continue to accrue
  holiday, pension contributions continue (based on your full salary), and
  you are entitled to return to the same role (or equivalent if same role
  is not available after 26 weeks).

QUESTIONS?
  HR contact: [Name] | [email] | [direct line]
  Your manager should also be your first point of contact for questions
  about how leave will work practically for your team.

Policy reference: Employee Handbook, Section [N] | Last updated: [date]
════════════════════════════════════════════════════════════
```

### Policy Update Detection and Re-Synthesis

The `/policy` command also supports detecting when policies need updating and regenerating summaries when underlying policies change:

```
/policy type:"update-check"
> User: Our statutory maternity pay rate has changed as of April 2026.
        Current summaries reference the old rate. Please identify all
        employee-facing documents that reference SMP rates and flag
        them for update.
```

Output: a list of all documents referencing the old rate, with the specific location of each reference and the updated text to replace it.

### Policy Q&A Configuration for the Knowledge Base Agent

The most powerful policy application is configuring the HR Knowledge Base Agent (Part Six) to answer policy questions directly. This requires structured FAQ entries:

```markdown
## Policy FAQ Configuration

Q: What is the holiday entitlement?
A: Full-time employees receive [N] days of annual leave plus [N] bank holidays.
   Part-time employees receive a pro-rata equivalent. Unused leave can be
   carried over up to [N] days into the following year.
   Full policy: [link]

Q: How do I book holiday?
A: Submit a request via [HRIS system] at least [N] weeks in advance for
   periods of [N]+ days. Manager approval required. For single days,
   [N] days' notice is normally sufficient.
   Tool: [link to HRIS]

Q: What is the sick pay policy?
A: [N] days at full pay per rolling 12-month period, then Statutory Sick Pay.
   Absence of more than [N] consecutive days requires a fit note from your GP.
   Full policy: [link]

[Continue for all high-frequency policy questions]
```

---

## Part Three: Offer Letters and Employment Documentation

### The Documentation Volume Problem

A growing organisation of 100 people might process 50–80 employment documents per year: offer letters, contract amendments, promotion letters, flexible working agreements, reference letters, salary change notifications. Each one is substantively the same as the last — the structure, the legal language, the formatting — with different names, numbers, and role details.

The `/offer` command templates these documents correctly and generates them from the key variables in under two minutes.

### The `/offer` Workflow

```
/offer
> Agent: What employment document do you need?

> User: Offer letter for a new hire.
        Name: Marcus Chen
        Role: Product Marketing Manager
        Department: Marketing
        Salary: £68,000
        Start date: 1 April 2026
        Probation: 3 months
        Notice: 1 month (during probation); 3 months (post-probation)
        Holiday: 25 days + bank holidays
        Location: London HQ (hybrid)
        Reporting to: VP Marketing (Priya Kapoor)
        Deadline for acceptance: 14 days from issue
```

**Sample Offer Letter Output:**

```
[Company letterhead]
[Date]

Marcus Chen
[Address — add before sending]

Dear Marcus,

OFFER OF EMPLOYMENT — Product Marketing Manager

We are delighted to offer you the position of Product Marketing Manager
at [Company Name], reporting to Priya Kapoor, VP Marketing. This letter
sets out the key terms of your employment.

ROLE AND DEPARTMENT
  Position:    Product Marketing Manager
  Department:  Marketing
  Reports to:  Priya Kapoor, VP Marketing
  Location:    London HQ, hybrid working arrangement

START DATE
  We propose a start date of 1 April 2026. Please let us know if this
  requires adjustment.

SALARY
  Your annual salary will be £68,000, paid monthly in arrears on the
  last working day of each month. Salaries are reviewed annually as
  part of our performance cycle.

HOLIDAY
  You are entitled to 25 days of annual leave per year, plus UK bank
  holidays. Leave entitlement accrues from your start date.

PROBATIONARY PERIOD
  The first 3 months of your employment will be a probationary period,
  during which your performance and suitability for the role will be
  assessed. Either party may terminate employment during this period
  with 1 month's written notice.

NOTICE PERIOD
  Following successful completion of your probationary period, the
  notice period will be 3 months on either side.

NEXT STEPS
  Please confirm your acceptance of this offer by signing and returning
  a copy of this letter by [acceptance deadline — 14 days from issue].
  We will then send you your full contract of employment, new starter
  forms, and details of your onboarding.

We very much look forward to welcoming you to the team.

Yours sincerely,

[Authorised signatory]
[Name, Title]
[Company Name]

Acceptance:
I accept the offer of employment as described above.
Signature: _________________________ Date: _____________
Full name: _________________________
```

---

## Part Four: Job Descriptions — Attracting the Right Talent

### Why Job Descriptions Fail

Most job descriptions are written from the organisation's perspective ("we need someone who can do X, Y, Z") rather than the candidate's perspective ("here is the work you will do and why it matters"). They use generic language that tells a candidate nothing unique about the role or the organisation. They list every possible requirement, making the bar appear impossibly high and deterring qualified candidates who don't match every bullet point.

The `/jd` command writes job descriptions from the candidate's perspective first — leading with the work and its impact, then the skills required, and calibrating the requirements to what is genuinely needed versus what would be nice to have.

### The `/jd` Workflow

```
/jd
> Agent: Please describe the role you need a job description for.

> User: Senior Data Analyst — Finance & Analytics team.
        We're a 250-person edtech company. This role will own our
        financial analytics and investor reporting. They need strong
        SQL and Python skills. We care more about analytical thinking
        than specific tool experience. The team is 4 people. This is
        a replacement hire. Salary: £55,000–£70,000. Hybrid in Karachi.
        Culture: fast-moving, data-driven, high autonomy.
```

**Sample Job Description Output:**

```
SENIOR DATA ANALYST — FINANCE & ANALYTICS
[Company Name] | Karachi, Hybrid | £55,000–£70,000

THE WORK

We are a fast-growing edtech company and we make decisions based on
data. As our Senior Data Analyst in the Finance & Analytics team, you
will be the person who turns our financial and operational data into the
insights that shape how we grow.

Your work will include:
- Building and owning our financial reporting infrastructure — the
  dashboards and models that our CFO and investors rely on every quarter
- Leading our investor reporting process: designing, building, and
  maintaining the analyses that go to our board
- Identifying patterns in our financial and operational data that
  surface opportunities and risks before they become visible in the P&L
- Partnering with Finance, Product, and Engineering to ensure our data
  infrastructure supports decisions at every level of the company

This is a high-autonomy, high-impact role. You will work directly with
senior stakeholders and your analysis will directly influence how we
allocate capital and prioritise growth.

WHAT WE'RE LOOKING FOR

Essential:
  - Strong analytical thinking — you find the insight in complex data
    before others see the question
  - SQL proficiency — you write and optimise complex queries fluently
  - Python for data analysis — pandas, numpy; you are comfortable
    building repeatable analytical pipelines
  - Communication — you translate complex analysis into clear
    recommendations for non-technical audiences
  - Attention to accuracy — financial and investor data must be right

Beneficial (not required):
  - Experience with BI tools (Looker, Tableau, Power BI, or similar)
  - Background in edtech, fintech, or SaaS businesses
  - Experience with dbt or data modelling frameworks

We care more about how you think than the specific tools you have used.
If you have the analytical foundation, we will invest in the rest.

WHAT WE OFFER
  - £55,000–£70,000 depending on experience
  - 25 days holiday + bank holidays
  - Hybrid working: Karachi HQ 3 days / remote 2 days
  - Significant autonomy in a fast-moving team
  - Direct access to senior leadership
  - [Benefits per hr.local.md]

HOW TO APPLY
  [Application instructions]

[Company Name] is an equal opportunity employer. We are committed to
building a diverse team and welcome applications from all backgrounds.
```

### Inclusive Language Check

The `/jd` command automatically applies an inclusive language check, flagging:
- Words with demonstrated gender bias in job postings ("rockstar", "ninja", "dominant")
- Unnecessarily specific requirements that may exclude qualified candidates ("5+ years with [specific tool]" when the underlying skill is what matters)
- Age-coded language ("young and dynamic team")
- Requirements that are listed as essential but should be beneficial

---

## Part Five: Performance Reviews — Structure Without Bureaucracy

### The Performance Review Problem

Performance reviews are simultaneously the most important HR process and the most resented. They are important because structured feedback, goal-setting, and performance documentation are genuinely linked to employee development and retention. They are resented because the administrative burden of a formal review cycle is immense — managers spend hours writing reviews that follow templates nobody designed carefully, that produce documentation nobody reads after the review meeting, and that are supposed to be "development-focused" but feel like a compliance exercise.

The `/review` command reduces the administrative burden without reducing the quality of the review. It structures the framework, generates the templates, and helps managers translate vague impressions ("she's good but could be more proactive") into specific, evidenced, actionable feedback.

### The `/review` Workflow

```
/review
> Agent: What type of performance review support do you need?

> User: Help me prepare my review for a team member.
        Employee: Bilal Ahmed, Software Engineer (3 years at company)
        Review period: H2 2025
        My notes:
        - Shipped the API gateway project on time and it was high quality
        - Mentors two junior engineers — both have grown a lot
        - Sometimes waits to be told what to do rather than identifying
          work himself; could be more proactive
        - Strong technically; communication with non-technical stakeholders
          could improve
        - Wants to move toward tech lead; I think he could do it in 12 months
```

**Sample Performance Review Output:**

```
PERFORMANCE REVIEW DRAFT: Bilal Ahmed — H2 2025
Manager: [Your name] | Date: [Date]
════════════════════════════════════════════════════════════

PERFORMANCE SUMMARY
Bilal has had a strong H2. The API gateway delivery was a significant
technical achievement — on time, to quality, and without major incidents
post-launch. His contribution to the development of two junior engineers
is one of the less visible but highest-value things he has done this half.
He is clearly ready for more responsibility and I want to create a
structured path toward a tech lead role.

STRENGTHS — WITH EVIDENCE

1. Technical execution
   Bilal delivered the API gateway project on time and to the quality
   standard the business required. The post-launch incident rate has been
   low and the architecture decisions he made are holding up well under
   increasing load. This is evidence of sound engineering judgment, not
   just execution speed.

2. Mentorship and team development
   Bilal has invested significant time in [Junior Engineer 1] and
   [Junior Engineer 2] this half. Both have meaningfully grown in
   technical confidence and output. This kind of contribution is often
   invisible in performance reviews — it should not be here. Team
   development is a senior engineering responsibility and Bilal is
   doing it well.

DEVELOPMENT AREAS — SPECIFIC AND ACTIONABLE

1. Proactive identification of work
   Observation: Bilal consistently delivers high quality when given
   a clear brief. He is less consistent at identifying work that
   needs doing without being asked.
   Why it matters: At tech lead level, the expectation shifts —
   the role requires identifying what the team should be working on,
   not just delivering what is already scoped.
   Development suggestion: In Q1 2026, take ownership of one initiative
   that you identified yourself — not assigned — and bring it from problem
   identification through delivery. We will discuss options in our next 1:1.

2. Communication with non-technical stakeholders
   Observation: Bilal's technical communication is excellent. His
   communication with product and business stakeholders when the
   technical picture is complex is less consistent — he sometimes
   uses language and framing that loses the audience.
   Why it matters: At tech lead level, translating technical decisions
   into business language is core to the role.
   Development suggestion: In Q1, take the lead on the technical
   presentation at the quarterly product review. I will coach beforehand
   and we will debrief afterward.

CAREER DEVELOPMENT

Bilal has expressed an interest in moving toward a tech lead role.
Based on H2 performance, I believe this is achievable in the next
12 months with focused development.

Tech lead readiness plan:
  Q1 2026: Own one self-initiated project (proactivity development)
            Lead the Q1 product review technical presentation (comms)
  Q2 2026: Shadow current tech lead on one architectural decision
            Take on a formal mentorship of a junior engineer
  Q3 2026: Tech lead assessment — formal evaluation of readiness
  Q4 2026 (target): Tech lead promotion if Q3 assessment positive

SUMMARY RATING
  [Rating according to company framework — confirm and enter]

GOALS FOR H1 2026
  1. Own one self-initiated technical initiative from identification to delivery
  2. Lead the Q1 product review technical presentation
  3. Formal mentorship of one junior engineer (structured; with check-ins)
════════════════════════════════════════════════════════════
```

### 360° Feedback Synthesis

The `/review` command also synthesises 360° feedback from multiple reviewers into a coherent, de-duplicated summary:

```
/review type:"360-synthesis"
> User: Synthesise the following 360° feedback responses for Bilal Ahmed.
        [Paste the raw responses from peer reviewers, direct reports,
         and cross-functional stakeholders]
```

Output: themes identified across all reviewers, with frequency and direction (consistent praise / consistent concern / mixed signals), and a recommendation on which themes are strong enough to include in the formal review versus which are outliers.

---

## Part Six: The HR Knowledge Base Agent — Institutional Memory Made Searchable

### What the Knowledge Base Agent Does

The HR Knowledge Base Agent is the most transformative HR application in this chapter. It is a Claude agent connected to the organisation's complete HR documentation — employee handbook, policies, benefits guide, FAQs, process guides — that answers employee questions instantly, accurately, and consistently.

**Employee asks:**
"I am going to be off sick tomorrow. What do I need to do?"

**Agent answers:**
"If you are unwell and unable to work, please notify your manager before your normal start time (or as soon as you are able to). For single-day or short absences, a manager notification is sufficient — no fit note is required unless your absence exceeds [configured threshold] consecutive days. Log the absence in [HRIS system] when you return. For absences longer than [N] days, please let HR know at [email] and they will guide you through the next steps. Full policy: [link]."

This answer is consistent, accurate, cites the policy, directs to the right resource for more complex situations, and is available at 11pm on a Sunday when the employee is worried about calling in sick the next day.

### Knowledge Base Agent Configuration

```markdown
## HR Knowledge Base Agent Configuration

### Scope: What the Agent Answers
The agent answers questions about:
  - Company policies (all policies in the handbook)
  - Benefits and entitlements
  - HR processes (how to submit a request, book leave, etc.)
  - Company information (locations, departments, key contacts)
  - Getting started (onboarding, systems, who to contact)

The agent does NOT answer questions about:
  - Individual employee situations (pay disputes, disciplinary matters)
  - Anything requiring HR judgment (grievances, performance concerns)
  - Medical advice or personal legal advice
  - Confidential information about other employees

For all "I don't know" or "out of scope" queries:
  "This is something I'd recommend speaking to HR directly about:
  [HR contact details]. They'll be able to help you properly."

### Tone and Register
Tone: Warm, clear, practical. The agent is a helpful colleague, not
a legal compliance system. Use plain English. No jargon.
Length: As short as possible while being complete. One paragraph
is better than five if one is sufficient.
Always: Cite the policy source and provide a link.
Always: Give the escalation path for questions outside scope.

### Knowledge Sources (load from hr.local.md)
  [List all policy documents and their locations]
  [List all process guides and their locations]
  [List the FAQ database entries]
```

### Knowledge Base Query Examples

```
/query
> Employee: How many days of annual leave do I have?

> Agent: Your annual leave entitlement is [N] days plus UK/Pakistan bank
>        holidays, pro-rated based on your working pattern. You can see
>        your current balance in [HRIS system] under the "My Leave" section.
>        If your balance doesn't look right, contact HR at [email].
>        Full policy: Employee Handbook, Section [N].

/query
> Employee: My manager has asked me to do something I'm not comfortable with.
>           What can I do?

> Agent: This sounds like something you should speak to HR about directly
>        rather than something I can help with here. Please contact:
>        HR Business Partner: [Name] | [email] | [direct line]
>        If you'd prefer to raise a concern confidentially, the company
>        also has a speak-up line: [details].
>        Your wellbeing and ability to raise concerns safely is important
>        to us — please don't hesitate to use these channels.
```

The second example illustrates the critical design principle: the Knowledge Base Agent must know its own limits and escalate gracefully when a query requires human judgment.

---

## Part Seven: Talent Matching and Internal Mobility

### The Internal Mobility Problem

Most organisations are better at hiring externally than developing internally. A vacancy opens, the reflex is to post an external job description. Meanwhile, somewhere in the organisation, there is an employee who has been developing relevant skills, who wants a new challenge, and who would be an excellent fit — but nobody has connected the dots between the vacancy and that person.

The cost of this is enormous: external hiring costs 3–6× more than internal promotion, the new hire takes 6–12 months to reach full productivity, and the internal candidate who was overlooked either stagnates or leaves.

The `/match` command addresses this by enabling HR to systematically assess internal candidates against open roles — not just by title match but by skills, development trajectory, expressed interests, and performance history.

### The `/match` Workflow

```
/match
> Agent: What role are you trying to fill, and what internal candidates
>        should be considered?

> User: We have a vacancy for a Team Lead, Data Engineering.
        Role requirements: technical leadership; experience with our
        data infrastructure (Spark, Airflow, dbt); ability to manage
        2-3 engineers; stakeholder communication; strategic thinking.
        
        Internal candidates to assess:
        
        Candidate 1: Zara Hussain (Senior Data Engineer, 3 years here)
        - Strong technical skills; led the data warehouse migration project
        - No formal management experience but mentors junior engineers
        - Expressed interest in leadership in last review
        - Development area: external stakeholder communication
        
        Candidate 2: Ahmed Malik (Data Engineer, 2 years here)
        - High potential; fast learner; technically strong
        - No management experience; early in career for this level
        - Very strong stakeholder skills for his level
        - Expressed interest in growth but not specifically leadership
```

**Sample Talent Match Output:**

```
INTERNAL TALENT ASSESSMENT: Team Lead, Data Engineering
════════════════════════════════════════════════════════════

ROLE REQUIREMENTS SUMMARY:
  Critical: Technical leadership; data infrastructure expertise (Spark/Airflow/dbt)
  Important: People management (2–3 engineers); stakeholder comms
  Nice to have: Strategic thinking; experience with scale

CANDIDATE ASSESSMENTS

─── Candidate 1: Zara Hussain ─────────────────────────────
  Fit assessment:    🟢 STRONG MATCH

  Critical requirements:
  ✅ Technical leadership: demonstrated — led data warehouse migration
     at project level; respected by peers
  ✅ Data infrastructure: 3 years on our stack; deep familiarity with
     Spark, Airflow, dbt from direct project experience

  Important requirements:
  🟡 People management: no formal management; strong informal leadership
     (mentors juniors); motivated to lead; gap is experience, not ability
  ⚠️ Stakeholder comms: identified as development area; manageable risk
     with coaching and a structured development plan

  Career trajectory: expressed interest in leadership; would likely
  see this as the natural next step; retention risk if passed over

  RECOMMENDATION: STRONG INTERNAL CANDIDATE
  Suggested approach:
  - Have a direct conversation about the role before posting externally
  - If Zara is interested: offer a structured 90-day transition with
    a management mentor (suggest: Head of Engineering or external coach)
  - Set clear 6-month targets for stakeholder communication development
  - External hire only if Zara declines or assessment conversation
    reveals significant reservations

─── Candidate 2: Ahmed Malik ──────────────────────────────
  Fit assessment:    🟡 DEVELOPING — not ready now; strong pipeline

  Critical requirements:
  ✅ Data infrastructure: technically strong; 2 years on stack
  🟡 Technical leadership: early signals are positive; not yet demonstrated
     at project level; may be ready in 12–18 months

  Important requirements:
  ⚠️ People management: not ready; too early in career for this role now
  ✅ Stakeholder comms: unusual strength for his level — a genuine asset

  RECOMMENDATION: NOT FOR THIS ROLE — BUT INVEST IN PIPELINE
  Suggested approach:
  - Share feedback with Ahmed: "You are on a strong trajectory.
    This role is not the right timing, but we want to build toward it."
  - Create a development plan: assign one junior engineer for informal
    mentoring; involve in Zara's transition if she takes the role
  - Target: Team Lead readiness in 12–18 months

OVERALL RECOMMENDATION:
  Assess Zara for this role before posting externally. If she is
  interested and committed, the management experience gap is bridgeable
  with structured support. Retaining and developing Zara is significantly
  lower cost and risk than an external hire.
════════════════════════════════════════════════════════════
```

---

## Part Eight: Institutional Knowledge Capture

### The Knowledge Evaporation Problem

Every time a long-tenured employee leaves an organisation, institutional knowledge evaporates. This knowledge is not written anywhere — it lives in their understanding of how decisions get made, who the real decision-makers are, what the organisation has tried before and why it failed, what the unwritten rules are, which stakeholders need careful management, and hundreds of other insights accumulated over years.

Most exit processes acknowledge this problem and do nothing about it. The departing employee fills in a form, has an exit interview that produces two paragraphs of notes nobody reads, and leaves. Six months later, their replacement is making the same mistakes they made in their first year, because nobody told them.

The `/knowledge` command structures the capture process: a systematic, AI-facilitated knowledge extraction that turns a departing employee's institutional knowledge into structured, searchable documentation.

### The `/knowledge` Workflow

```
/knowledge
> Agent: What knowledge capture task do you need?

> User: Create a knowledge capture interview guide for a departing
        Senior Project Manager (8 years at the company). She manages
        our three largest client relationships and leads our delivery
        methodology. We have 6 weeks before she leaves.
```

**Sample Knowledge Capture Guide:**

```
KNOWLEDGE CAPTURE GUIDE: Senior Project Manager Exit
════════════════════════════════════════════════════════════
Subject: [Name] | Role: Senior PM | Years: 8 | Exit date: [Date]
Interviewer: [HR or direct manager] | Sessions: 3 × 90 minutes
Output: Structured knowledge documents for knowledge base

SESSION 1: CLIENT RELATIONSHIPS (Week 1)

Focus: The three major client relationships and what makes each work.

Questions:
1. "Walk me through each of the three major clients. For each one:
   who are the key people — the real decision-makers, not just the
   named contacts — and what do I need to know about how they work?"
   
2. "What has gone wrong in each of these relationships and how was it
   recovered? What should the next PM know about the history?"
   
3. "What are the unwritten rules with each client? Things that are not
   in the contract but that have become the real operating norms?"
   
4. "What does each client actually care about most? Not what's in the
   scope document — what makes each client feel like the relationship
   is working?"
   
5. "Who else in our organisation has important relationships with these
   clients that the new PM needs to manage?"

SESSION 2: DELIVERY METHODOLOGY (Week 2–3)

Focus: The delivery process, how it actually works, and what the
documentation doesn't capture.

Questions:
1. "Our delivery methodology is documented in [document]. Where does
   reality differ from the documentation? What do you do in practice
   that isn't written down?"
   
2. "What are the warning signs that a project is going off track?
   The early signals that you've learned to watch for?"
   
3. "What decisions do you make yourself vs. escalate? Walk me through
   two or three examples of situations where you had to decide whether
   to escalate and how you made that decision."
   
4. "Who are the internal stakeholders that a PM needs to manage
   carefully to deliver well here? What do I need to know about
   each of them?"

SESSION 3: INSTITUTIONAL CONTEXT (Week 4)

Focus: The unwritten rules, organisational history, and context
that only comes from tenure.

Questions:
1. "What would you tell someone starting your role tomorrow that is
   not in any document?"
   
2. "What has this organisation tried in the last few years that didn't
   work, and why? What should we not try again?"
   
3. "What decisions are technically in your role but actually require
   sign-off from someone else? Who are the real decision-makers here?"
   
4. "What are you most worried we'll get wrong after you leave?
   What's the knowledge you're most worried will be lost?"
   
5. "If you were staying, what would you do differently in the next
   12 months? What opportunities do you see that we haven't pursued?"

KNOWLEDGE OUTPUTS (generate after each session):
  Session 1 → Client relationship profiles (3 documents)
  Session 2 → Delivery methodology supplement (what the docs don't say)
  Session 3 → Institutional context guide (the unwritten playbook)
  Final → Handover summary for incoming PM
════════════════════════════════════════════════════════════
```

---

## Part Nine: The HR Operations Agents

### Four Core HR Agents

---

#### Agent 1: The HR Knowledge Base Agent

**Purpose:** Answer employee HR questions 24/7 without requiring HR team involvement. Available in Slack, Microsoft Teams, or the company intranet via MCP integration. Handles the 80% of HR queries that have written answers. Routes the 20% that require human judgment to the right HR contact.

**Scope:**
- All policies in the employee handbook
- Benefits and entitlements
- Process guides (how to request leave, submit expenses, etc.)
- Onboarding FAQs
- Company information and contacts

**Escalation protocol:**
For any query involving: individual circumstances, disciplinary matters, grievances, medical situations, performance concerns, or anything requiring HR judgment → immediate warm handoff to named HR contact.

**Weekly report to HR team:**
- Questions answered this week (volume + top categories)
- Escalations to human HR (count + reason categories)
- Questions not answered (gaps in the knowledge base)
- Trend: are any question categories growing? (signal of policy confusion or process gap)

---

#### Agent 2: The Onboarding Orchestrator

**Purpose:** Manage the administrative side of onboarding for every new starter — pre-boarding checklist tracking, Day 1 schedule coordination, mandatory compliance training completion monitoring, 30-60-90 day check-in scheduling, and onboarding satisfaction tracking.

**Trigger:** New hire confirmed in HRIS → agent activates onboarding workflow

**Workflow:**
1. T-14 days: Generate pre-boarding checklist; assign tasks to IT, HR, and Manager
2. T-7 days: Send Day 1 schedule to new starter; chase incomplete pre-boarding items
3. T-3 days: Escalate any incomplete critical pre-boarding items to HR
4. Day 1: Confirm IT setup complete; send welcome message from HR
5. Day 10: Check mandatory compliance training completion; chase incomplete
6. Day 30: Schedule 30-day check-in (manager + HR); send check-in agenda
7. Day 60: Schedule 60-day check-in; gather feedback from new starter
8. Day 90: Schedule 90-day review; generate 30-60-90 completion summary

**Alert triggers:**
- Any critical pre-boarding item incomplete at T-3 days → immediate HR alert
- Any mandatory training incomplete at Day 10 → escalate to manager
- New starter survey score below threshold → HR Business Partner review

---

#### Agent 3: The Policy Maintenance Agent

**Purpose:** Keep all employee-facing policy documentation current, consistent, and findable. Monitor for policy version drift (where the same policy is described differently in different documents). Alert HR when statutory rates or legal requirements change in the configured jurisdiction.

**Monthly tasks:**
- Policy version check: are all documents referencing the current policy version?
- Rate check: are all statutory rates (sick pay, maternity pay, minimum wage) current?
- Link check: are all policy links in employee-facing documents still working?
- FAQ audit: are there new question categories in the Knowledge Base Agent log that
  suggest a policy FAQ is missing?

**Trigger-based:**
- Statutory rate change in configured jurisdiction (web search monitoring) →
  flag all documents containing the affected rate for update
- New legislation relevant to employment (web search monitoring) →
  generate summary brief for HR team for review and policy impact assessment

---

#### Agent 4: The Offboarding Knowledge Capture Agent

**Purpose:** When an employee resignation is confirmed, automatically initiate the knowledge capture process. Generate a knowledge capture plan calibrated to the employee's role, tenure, and the institutional knowledge most at risk of being lost.

**Trigger:** Resignation confirmed in HRIS → agent activates

**Workflow:**
1. Assess knowledge risk: role criticality + tenure + knowledge uniqueness
2. Generate knowledge capture plan (sessions, topics, output documents)
3. Schedule sessions with HR/manager
4. Generate session guides for each knowledge area
5. After each session: structure the notes into searchable knowledge documents
6. Final output: handover summary + knowledge base articles + successor brief

**Knowledge risk classification:**
🔴 HIGH: Sole-holder of critical knowledge; long tenure; client-facing; no backup
🟡 MEDIUM: Significant knowledge holder; some documentation exists
🟢 LOW: Role is well-documented; knowledge is broadly distributed in team

---

## Exercises

Each exercise produces a deployable output. Complete them in sequence — each builds the HR capability layer that subsequent exercises use.

---

### Exercise 1: Build Your HR Knowledge Base

**Type:** Configuration and Content
**Time:** 90 minutes
**Plugin commands:** `/policy`, `/query`
**Goal:** Create a structured, searchable HR knowledge base that can answer the 20 most common employee HR questions

The HR Knowledge Base Agent is only as good as the knowledge it is given. This exercise builds that foundation.

**Step 1 — Identify the top 20 questions.**

Ask your HR team (or think back to your own experience as an employee): what are the most frequently asked questions you receive?

If you have a helpdesk system, pull the last 90 days of HR tickets and categorise by question type. The top 20 categories are your knowledge base priorities.

Common high-frequency categories:
- Holiday entitlement and how to book it
- Sick pay and the absence notification process
- Parental leave entitlements and process
- Expense claims — how and how long
- Benefits — what is included and how to access
- Performance review cycle and process
- Promotion and pay review process
- Remote working policy and process
- Learning and development budget and how to access it
- Payslips — where to find them and how to read them

**Step 2 — Synthesise each policy.**

For each of your top 20 questions, generate a plain-language policy summary:

```
/policy type:"plain-language-summary"
> User: Question: "[Question from your top 20 list]"
        Policy: "[Paste the relevant policy text or describe the policy]"
        Audience: All employees | Jurisdiction: [Your jurisdiction]
        Must include: what they're entitled to; the process; the contact
```

Review each output for:
- Accuracy (does it match your actual policy?)
- Plain language (would a new joiner understand it?)
- Completeness (does it answer the full question, including edge cases?)
- Escalation path (does it direct complex cases to HR?)

**Step 3 — Build the FAQ database.**

For each of your 20 answers, format them as FAQ entries for the Knowledge Base Agent:

```markdown
Q: [The question as an employee would ask it]
A: [Your synthesised plain-language answer]
Policy reference: [Document name, section, link]
Contact for complex cases: [Name, email]
```

**Step 4 — Test the knowledge base.**

Run 10 test queries against the knowledge base you have built:

```
/query
> User: "[Test question from your FAQ list]"
```

For each response, evaluate:
- Is the answer accurate?
- Is the tone appropriate (helpful, not legalistic)?
- Does it cite the policy source?
- Does it have the right escalation path?

**Step 5 — Identify the gaps.**

What questions came up in your test queries that the knowledge base could not answer well? These are your documentation gaps — the policies or processes that need to be written or clarified.

**Deliverable:** A 20-entry HR FAQ database ready for Knowledge Base Agent configuration, with policy accuracy verified, plain language confirmed, and documentation gaps identified.

---

### Exercise 2: Design a Complete Onboarding Programme

**Type:** Process Design and Documentation
**Time:** 75 minutes
**Plugin commands:** `/onboard`
**Goal:** Create a reusable onboarding programme template for your most common hiring roles

**Step 1 — Choose your role template.**

Select the role you hire most frequently, or the role where poor onboarding has the greatest impact. If you are doing this as a classroom exercise, use: "Marketing Manager, 4 years of experience, your industry."

**Step 2 — Define what "success" looks like at 30, 60, and 90 days.**

Before generating the onboarding plan, answer these questions yourself:
- What should this employee know by Day 30?
- What should they have contributed by Day 60?
- What should they be doing independently by Day 90?
- What would make you say at the 90-day review: "This person is going to be excellent here"?

Write these as 3–5 specific, observable outcomes for each milestone — not generic statements ("understand the culture") but specific ones ("has presented analysis to the Finance team and received positive feedback from the CFO").

**Step 3 — Generate the onboarding plan.**

```
/onboard
> User: Role: [Role] | Dept: [Dept] | Experience level: [Level]
        Key projects first 90 days: [List]
        Key stakeholders to meet: [List]
        Mandatory compliance training: [List]
        30-day success means: [Your outcomes from Step 2]
        60-day success means: [Your outcomes from Step 2]
        90-day success means: [Your outcomes from Step 2]
```

**Step 4 — Pre-boarding checklist audit.**

For the pre-boarding checklist in your output:
- Is every item in the checklist assigned to a specific owner (HR, IT, or Manager)?
- Is every item achievable by the deadline?
- Is there anything that is consistently done late or poorly in your current onboarding?

For each consistently problematic pre-boarding item: document the root cause and add a mitigation step.

**Step 5 — Manager briefing guide.**

Generate a one-page briefing guide for the hiring manager:

```
/onboard type:"manager-briefing"
> User: Role: [Role] | Start date: [Date]
        Manager responsibilities in first 30 days: [From your plan]
        Common onboarding failures for this role: [Any you know of]
```

The briefing guide should be readable in 5 minutes and tell the manager exactly what they need to do and when.

**Step 6 — New starter welcome message.**

```
/onboard type:"welcome-message"
> User: New starter: [Name] | Role: [Role] | Start: [Date]
        Tone: Warm and practical. They may be nervous.
        Include: who to contact, what Day 1 looks like, one thing
        we are genuinely excited to have them work on.
```

**Deliverable:** Complete onboarding programme for your chosen role (pre-boarding checklist, 30-60-90 day plan with specific success criteria, manager briefing guide, welcome message), ready to use for the next hire in this role.

---

### Exercise 3: Write Three Job Descriptions

**Type:** Applied Practice — Talent Acquisition
**Time:** 60 minutes
**Plugin commands:** `/jd`
**Goal:** Write job descriptions that attract the right candidates and deter the wrong ones

**Step 1 — Choose three roles.**

Select three open or recently-filled roles at different levels:
- One junior/entry-level role
- One mid-level specialist role
- One senior/leadership role

If you don't have real roles to work with: use these fictional roles at a 200-person fintech company:
- Junior Customer Support Specialist
- Senior Financial Analyst
- Head of Product

**Step 2 — Define the real requirements.**

Before generating each JD, answer these questions:
- What is the actual work this person will do in the first 90 days?
- What is the single most important skill or quality this person needs?
- What is listed as "required" in most JDs for this role that is actually "nice to have"?
- What makes this role at your organisation different from the same role elsewhere?
- What type of person genuinely thrives in this role here, and what type doesn't?

**Step 3 — Generate the job descriptions.**

```
/jd
> User: Role: [Role] | Level: [Level] | Company: [Description]
        The work they'll actually do: [From Step 2]
        Essential requirements (be selective): [From Step 2]
        Beneficial but not required: [From Step 2]
        What's unique about this role here: [From Step 2]
        Salary: [Range] | Location: [Details]
```

**Step 4 — Inclusive language review.**

Review each output for:
- Gender-coded language (remove: "rockstar", "ninja", "aggressive")
- Age-coded language (remove: "young and dynamic")
- Requirements that are listed as essential but should be beneficial
- Unnecessarily specific tool requirements (change "5 years in Salesforce" to "5 years in CRM platforms")

**Step 5 — The candidate's test.**

For each JD: show it to someone who fits the profile of your target candidate (not someone in HR). Ask:
- "Does this make you want to apply?"
- "What is unclear about what this role actually does?"
- "What in this JD might put off someone who would actually be great at this job?"

Refine based on the feedback.

**Deliverable:** Three revised job descriptions (junior, mid, senior), each reviewed for inclusive language and tested against a representative candidate perspective.

---

### Exercise 4: Performance Review Cycle Design

**Type:** Process Design
**Time:** 75 minutes
**Plugin commands:** `/review`
**Goal:** Design a performance review framework that is genuinely useful — not just compliant

**Step 1 — Diagnose your current review process.**

Answer these questions about your current (or most recent) performance review experience:
- What percentage of managers complete reviews on time?
- How much time does a manager typically spend on one review?
- What percentage of review conversations produce a specific development action that is tracked and followed up?
- When was the last time a performance review changed a compensation or promotion decision (in a way the manager did not already know before the review)?
- What do employees find most valuable about the current review process?
- What do they find most burdensome?

**Step 2 — Design the review framework.**

Based on your diagnosis, design a review framework:

```
/review type:"framework-design"
> User: Company: [Size, sector]
        Current review cycle: [Frequency; format; timing]
        Problems to solve: [From Step 1 — specific]
        Constraints: [Time available per manager; HR capacity; tool limitations]
        Goals: What should a good review produce for the employee?
               What should it produce for the manager?
               What should it produce for the organisation?
```

**Step 3 — Manager preparation guide.**

```
/review type:"manager-guide"
> User: Review framework: [From Step 2]
        Common manager mistakes in reviews: [Any you know of]
        Format: one-page guide; practical; no jargon
```

**Step 4 — Write a sample review.**

Using a real (anonymised) or fictional employee:

```
/review
> User: Employee: [Role, years at company, performance level]
        Review period: [H2 2025 or other]
        My notes: [Your actual observations — vague is fine;
                   the agent will help structure them]
        Development area: [One thing you want to address constructively]
        Career discussion: [What trajectory is this person on?]
```

After reviewing the output:
- Is the praise specific and evidenced?
- Is the development area framed as observable behaviour and actionable next step, not a personality criticism?
- Is the career development section realistic and time-bound?

**Step 5 — 360° feedback template.**

```
/review type:"360-template"
> User: Role being reviewed: [Role]
        Reviewers: [Peers / direct reports / cross-functional stakeholders]
        Focus areas: [What dimensions you want feedback on]
        Format: 5 questions maximum; mix of rating and open-text
```

**Deliverable:** A complete performance review framework document including: review cycle design, manager preparation guide, sample review (full draft), 360° feedback template, and a one-page brief on how to interpret and use 360° feedback data.

---

### Exercise 5: Knowledge Capture Sprint

**Type:** Institutional Memory
**Time:** 90 minutes
**Plugin commands:** `/knowledge`, `/offboard`
**Goal:** Capture and structure the institutional knowledge of one long-tenured employee

**Step 1 — Identify the knowledge at risk.**

For your organisation (real or hypothetical), identify:
- Three employees whose departure would represent significant institutional knowledge loss
- For each: what specific knowledge are they the primary or sole holder of?

Classify by risk level:
🔴 HIGH: Sole knowledge holder; undocumented; client-facing
🟡 MEDIUM: Significant knowledge holder; some documentation; others partially know
🟢 LOW: Broadly known; well-documented; transferable

**Step 2 — Generate a knowledge capture plan.**

For your highest-risk employee:

```
/knowledge
> User: Employee: [Role, years, key knowledge areas]
        Departure timeline: [If known, or "no departure planned — proactive capture"]
        Critical knowledge: [List the top 3 areas at risk]
        Successor: [Named or TBD]
        Time available: [Sessions available for capture]
```

**Step 3 — Conduct a knowledge capture interview (simulated).**

Using the interview guide from the output above, conduct a simulated interview with a colleague (one person plays the departing expert; the other plays the interviewer). The interviewer uses the guide's questions but should pursue depth over coverage — one detailed answer is more valuable than five shallow ones.

Time: 30 minutes for the simulated interview.

Take notes in the note-taking format:
- What is the knowledge (factual content)?
- What is the context (why does this matter; when does it apply)?
- What is the exception (when does the standard approach NOT apply)?
- Who else should know this?

**Step 4 — Structure the captured knowledge.**

```
/knowledge type:"structure-notes"
> User: [Paste your interview notes]
        Role context: [The departing employee's role and domain]
        Target audience: [Who will use this knowledge — the successor?
                          the whole team? the whole organisation?]
```

Output should be structured knowledge articles:
- Title and scope
- The knowledge (what to know)
- When it applies (context)
- Exceptions and edge cases
- Related contacts and resources
- Confidence level (is this definitely how it works, or the expert's interpretation?)

**Step 5 — Design the proactive knowledge capture programme.**

Beyond departure-triggered capture: design a programme for proactive knowledge capture for your highest-risk employees (before they announce departure):

- What is the cadence? (Annual knowledge review? Quarterly for highest-risk?)
- What format? (Interview-based? Document review? Pair programming / shadowing?)
- Who owns it? (HR? The manager? A knowledge management function?)
- Where does the output live? (Wiki? HRIS? Document repository?)

**Deliverable:** Knowledge capture plan for your highest-risk employee, structured knowledge articles from the simulated interview, and a proactive knowledge capture programme design for your organisation.

---

### Exercise 6: HR Policy Audit and Refresh

**Type:** Policy Management
**Time:** 60 minutes
**Plugin commands:** `/policy`
**Goal:** Audit your employee handbook or policy set for accuracy, clarity, and completeness

**Step 1 — Policy inventory.**

List all the HR policies your organisation has (or should have). Group them by category:
- Leave (annual, sick, parental, compassionate, study)
- Working arrangements (hours, remote, flexible)
- Pay and benefits (salary, expenses, benefits)
- Performance (review cycle, promotion, PIP)
- Conduct (code of conduct, disciplinary, grievance)
- Health and safety
- Data and security
- Learning and development

For each policy: when was it last reviewed? Does it reflect current law and practice?

**Step 2 — Plain-language audit.**

Select your three most-consulted policies and run each through a plain-language test:

```
/policy type:"plain-language-audit"
> User: [Paste the policy text]
        Test: Is this understandable by a new employee on Day 1?
        Flag: Jargon; legalese; ambiguous terms; missing process steps
```

Rate each policy: How many questions would a typical employee still have after reading this?

**Step 3 — Gap analysis.**

Using the knowledge base agent query log (from Exercise 1) or your own experience: what questions do employees ask that your current policies do not clearly answer? These are your policy gaps.

For each gap:
- Is this a missing policy (needs to be written)?
- An unclear policy (needs to be simplified)?
- An outdated policy (needs to be updated)?

**Step 4 — Refresh one policy.**

Choose the most-outdated or most-unclear policy from your audit:

```
/policy type:"refresh"
> User: Current policy: [Paste current text]
        Problem: [What is outdated, unclear, or missing]
        What should change: [New approach, updated rates, clearer process]
        Audience: [All employees / managers only / specific group]
        Jurisdiction: [Your jurisdiction]
```

**Step 5 — Manager communication guide.**

When a policy changes, managers need to understand the change and be able to answer their team's questions. Generate a manager communication guide for your refreshed policy:

```
/policy type:"manager-communication"
> User: Policy: [Name]
        What changed: [Summary of changes]
        Effective date: [Date]
        Common questions managers will get: [List]
        Any changes to how managers need to act: [List]
```

**Deliverable:** Policy inventory with last-review dates, plain-language audit of 3 policies with ratings, gap analysis with prioritised remediation list, one refreshed policy, and a manager communication guide for the refreshed policy.

---

### Exercise 7: Internal Talent Review

**Type:** Strategic HR
**Time:** 60 minutes
**Plugin commands:** `/match`
**Goal:** Apply structured talent matching to a real or simulated succession planning challenge

**Step 1 — Define the succession critical roles.**

For your organisation (real or hypothetical), identify the 3–5 roles where succession is most critical:
- What happens if this role is vacant for 3 months?
- Does a strong internal successor exist?
- If not: what is the plan?

**Step 2 — Internal candidate mapping.**

For each critical role, identify potential internal successors. For each candidate, document:
- Current role and years in it
- Relevant skills and demonstrated competencies
- Development areas relative to the succession role
- Career ambitions (have they expressed interest in growth? In leadership?)
- Readiness timeline: "ready now" / "ready in 12 months" / "ready in 2–3 years"

**Step 3 — Run the talent match.**

```
/match
> User: Succession role: [Role with requirements]
        Candidate 1: [Name, role, years, strengths, gaps, ambitions]
        Candidate 2: [Name, role, years, strengths, gaps, ambitions]
        [Continue for all candidates]
```

For each candidate output:
- Is the fit assessment accurate based on what you know?
- Is the recommended development plan realistic?
- Is the retention risk assessment correct?

**Step 4 — Development plan design.**

For your strongest internal candidate:

```
/match type:"development-plan"
> User: Candidate: [Name, current role]
        Target role: [Succession role]
        Gap: [Key development areas from match output]
        Timeline: [Target readiness date]
        Available development levers: [Stretch assignment / mentorship /
                                       external training / coaching / etc.]
```

**Step 5 — Succession conversation guide.**

HR and managers need to have direct conversations with high-potential employees about their succession potential — without making promises they cannot keep. Generate a conversation guide:

```
/match type:"succession-conversation-guide"
> User: Context: Talking to a high-potential employee about their
        career development and potential succession pathway.
        Challenge: Communicate that we see their potential and want
        to invest in them, without making a specific promotion promise.
        Employee level: [Level] | Target role: [Role]
```

**Deliverable:** Succession plan for 3–5 critical roles (with successors rated by readiness), development plan for your strongest internal candidate, and a succession conversation guide for the HR/manager conversation.

---

### Exercise 8: Configure hr.local.md

**Type:** Configuration
**Time:** 90 minutes
**Goal:** Build the organisation-specific configuration that makes all HR outputs specific to your organisation's policies, culture, and team structure

This is the most leveraged HR exercise in the chapter. Every other command output is substantially better when this file is complete.

Work through the configuration template (provided in the Chapter 26 SKILL.md library) and populate:

**Section 1: Organisation Profile**
- Company name, size, jurisdiction
- Industry sector and any sector-specific compliance requirements
- Employment type mix (full-time, part-time, contractors)

**Section 2: Policy Library**
- All current policies with document locations
- Last review date for each
- Jurisdiction-specific statutory rates (minimum wage, sick pay, maternity pay)

**Section 3: Benefits Summary**
- By employment tier (standard / senior / executive if applicable)
- Pension provider and contribution rates
- Private health if applicable
- Learning and development budget

**Section 4: HR Contacts**
- HR Business Partner(s) with roles and contact details
- Payroll contact
- Legal/employment law contact
- Occupational health / EAP provider
- Speak-up / confidential reporting channel

**Section 5: Onboarding Programme**
- Standard pre-boarding checklist items
- Mandatory compliance training (by role type)
- 30-60-90 framework by seniority level

**Section 6: Performance Cycle**
- Review frequency and timing
- Rating framework (if used)
- Calibration process
- Promotion and pay review cycle

**Test:** Run `/query` with five of your most common employee HR questions. Do the answers reflect your actual policies and your specific entitlements? If not: what configuration information is missing?

**Deliverable:** A complete `hr.local.md` configuration file, validated by running `/query` with five real questions and confirming that the answers are accurate, specific to your organisation, and escalate correctly to named HR contacts.

---

## Chapter Summary: HR as a Strategic Function

**The Central Insight**

HR teams that are consumed by information routing — answering the same questions, writing the same documents, maintaining the same policies — have no capacity for the work that genuinely differentiates an organisation's talent strategy. The same team that spends Monday through Thursday on administrative overhead cannot spend Friday on developing a succession plan that retains the organisation's highest performers.

The four HR agents and ten plugin commands in this chapter do not replace HR judgment. They eliminate the administrative overhead that prevents HR judgment from being applied to the problems that actually need it. The Knowledge Base Agent answers the hundredth iteration of "what is the holiday policy." The Onboarding Orchestrator ensures no laptop is forgotten and no Day 30 check-in is missed. The Policy Maintenance Agent catches the statutory rate that changed without anyone updating the handbook.

The HR Business Partner is freed to do what only humans can do: sit with a manager who is struggling to manage a difficult team member, design a development plan that keeps a high performer engaged, navigate the complexity of a restructure with care for every individual affected.

**What this chapter built:**

1. Employee onboarding plans — specific, role-calibrated, with measurable 30-60-90 success criteria
2. Policy synthesis — plain-language summaries that employees can actually use
3. Offer letters and employment documentation — generated in minutes, accurate every time
4. Job descriptions — from the candidate's perspective; inclusive language enforced
5. Performance reviews — structured, evidenced, development-focused
6. Talent matching — systematic internal mobility assessment with development plans
7. Institutional knowledge capture — systematic extraction before it walks out the door
8. HR Knowledge Base Agent — 24/7 policy question answering with graceful escalation
9. Four persistent HR agents managing onboarding, policy maintenance, knowledge capture, and offboarding
10. Eight exercises that build the complete HR capability layer from scratch

**What does not change:**

Every difficult HR situation — a termination, a grievance, a mental health crisis, a team conflict — requires a human being with judgment, empathy, and authority. AI does not make these decisions. It frees the HR professionals who must make them from the hundred small tasks that were consuming the time and energy those decisions deserve.

The best HR teams will use AI to be more responsive, more consistent, and more strategically focused. The gap between them and understaffed, overwhelmed HR teams will close. What remains is the quality of judgment, the depth of human connection, and the courage to make difficult decisions well — none of which AI can provide.

---

> *Part 3 continues with Chapter 27: Finance & Accounting Operations →*

---

## Quick Reference

### Plugin Commands

| Command | Use |
|---|---|
| `/onboard` | Generate onboarding plans and schedules |
| `/policy` | Synthesise, explain, or update HR policies |
| `/offer` | Draft offer letters and employment documentation |
| `/jd` | Write or improve job descriptions |
| `/review` | Structure performance reviews and 360° feedback |
| `/match` | Talent matching — internal mobility and role fit |
| `/knowledge` | Capture and structure institutional knowledge |
| `/reference` | Draft reference letters and employment verifications |
| `/query` | HR knowledge base query (employee self-service) |
| `/offboard` | Structure offboarding processes and knowledge transfer |

### Key Resources

| Resource | URL |
|---|---|
| HR Plugin | claude.com/plugins/human-resources |
| GitHub Plugin Repo | github.com/anthropics/knowledge-work-plugins/tree/main/human-resources |
