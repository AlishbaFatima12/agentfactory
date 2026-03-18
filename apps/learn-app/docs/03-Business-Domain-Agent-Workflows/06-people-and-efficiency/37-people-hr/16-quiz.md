---
slug: /Business-Domain-Agent-Workflows/people-hr/chapter-quiz
sidebar_position: 16
title: "Chapter 37: People & HR Quiz"
---

# Chapter 37: People & HR Quiz

Test your understanding of the institutional memory problem, two-plugin HR architecture, policy synthesis, knowledge base agent design, 30-60-90 onboarding framework, inclusive job descriptions, offer letters and references, performance reviews, compensation and talent assessment, institutional knowledge capture, offboarding, persistent agents, people analytics, and the full employee lifecycle.

<Quiz
title="Chapter 37: People & HR Assessment"
questions={[
{
question: "A CPO states that HR teams spend the majority of their time answering questions that already have written answers. A new analyst, Ayesha, had fifteen questions in her first week — all with documented answers she could not find. Which of the three HR functions does this scenario primarily illustrate?",
options: [
"Knowledge capture — employees need HR to extract tacit understanding from experienced colleagues",
"Process execution — employees need HR to produce documents that follow standard templates",
"Information routing — employees ask HR because written answers are inaccessible, consuming time without adding value",
"Talent management — employees need HR to assess their skills against role requirements"
],
correctOption: 2,
explanation: "Lesson 1 defines information routing as the function consuming the largest share of HR time — answering questions that have written answers, to employees who cannot find or understand them. Ayesha's fifteen questions all had documented answers; the problem was accessibility, not absence. Process execution involves producing documents like offer letters and JDs — not answering policy questions. Knowledge capture involves extracting unwritten understanding from people's heads, which is a different problem. Talent management is not one of the three functions the chapter identifies.",
source: "Lesson 1: The Institutional Memory Problem"
},
{
question: "An HR manager classifies the company's remote work policy as explicit knowledge because it exists in a PDF on SharePoint. However, the actual practice differs significantly from what the document says. How should this knowledge be classified according to the chapter's framework?",
options: [
"Tacit — the real operating norms exist only in people's heads even though a document nominally covers the topic",
"The classification depends on whether the PDF has been updated recently",
"Explicit — the policy document exists regardless of whether practice matches",
"Hybrid — it is both explicit and tacit simultaneously"
],
correctOption: 0,
explanation: "Lesson 1 distinguishes explicit knowledge (written and theoretically findable) from tacit knowledge (unwritten understandings in people's heads). The critical insight is that a document can exist while the real answer remains tacit — 'the policy says annual reviews, but the real cycle is quarterly.' When practice diverges from documentation, the operationally relevant knowledge is tacit. The document's existence does not make the knowledge explicit if employees rely on unwritten norms instead. The framework does not use a hybrid classification — knowledge is practically one or the other based on where the real answer lives.",
source: "Lesson 1: The Institutional Memory Problem"
},
{
question: "The chapter uses two plugins with 14 total commands. A student is confused about which plugin provides /jd and which provides /policy-lookup. What is the correct mapping and why does the distinction matter?",
options: [
"Both come from the official plugin — Anthropic provides all HR commands",
"Both come from the custom plugin because they are the most frequently used commands",
"/jd is official and /policy-lookup is custom — the names indicate their source",
"/jd is custom (Panaversity hr-operations) and /policy-lookup is official (Anthropic human-resources) — the two-plugin architecture has zero naming collisions by design"
],
correctOption: 3,
explanation: "Lesson 2 establishes the two-plugin architecture: the official Anthropic plugin provides 9 skills (including /policy-lookup) and the custom Panaversity plugin provides 5 skills (including /jd) plus 4 agents. The zero-overlap design means no naming collisions exist between the two plugins. Understanding which plugin provides which command matters for installation verification and troubleshooting — if /jd fails, the custom plugin needs checking, not the official one. Both plugins must be installed for the full chapter workflow.",
source: "Lesson 2: Your HR Operations Stack"
},
{
question: "An HR team completes hr.local.md but leaves the Jurisdiction section empty because they plan to fill it later. They then run /policy-lookup to check annual leave entitlements. What is the most likely consequence?",
options: [
"The command will fail with an error because Jurisdiction is a required field",
"The output will use generic best-practice entitlements rather than the organisation's actual statutory rates and leave allowances",
"The output will prompt the user to complete the missing section before continuing",
"The output will be identical because /policy-lookup does not use Jurisdiction data"
],
correctOption: 1,
explanation: "Lesson 2 explains that hr.local.md transforms generic plugin outputs into organisation-specific ones. Without the Jurisdiction section, /policy-lookup returns best-practice policy summaries instead of summaries referencing actual statutory rates, leave entitlements, and notice periods. The plugin does not fail — it falls back to defaults. This is worse than an error because the output looks plausible but contains incorrect figures for the specific jurisdiction. The lesson emphasises that partial configuration is better than none, but the Jurisdiction section is particularly high-impact.",
source: "Lesson 2: Your HR Operations Stack"
},
{
question: "Sarah receives the same parental leave question for the fifteenth time this quarter. The policy exists in the employee handbook but is written in legal language. She uses /policy-lookup to create a plain-language summary. What must she verify before sharing the summary with employees?",
options: [
"Only that the formatting is professional and consistent with company branding",
"That the summary is shorter than the original policy document",
"That entitlement figures match the source policy, source citation is included, and the escalation contact is current and correct",
"That the summary has been approved by the legal team before any distribution"
],
correctOption: 2,
explanation: "Lesson 3 establishes a verification framework for /policy-lookup outputs: check accuracy (entitlement figures match the source policy), source citation (document name, section, page reference included), and escalation contact (named HR contact is current). The lesson explicitly warns that /policy-lookup synthesises but does not guarantee accuracy — every figure must be checked against the source. Formatting and length are secondary concerns. Legal approval may be organisationally required but is not what the chapter identifies as the verification standard. Unsourced summaries are described as worse than no summary at all.",
source: "Lesson 3: Policy Lookup — Self-Service Policy Synthesis"
},
{
question: "An employee messages the HR Knowledge Base Agent: 'I think my manager is treating me unfairly compared to a colleague in a similar role.' How should the agent respond according to the chapter's design principles?",
options: [
"Warm handoff — refuse to adjudicate, provide a named HR contact with empathy, and encourage the employee to reach out directly",
"Ask clarifying questions to understand the specific nature of the unfair treatment",
"Provide the company's grievance policy and suggest the employee file a formal complaint",
"Explain the general principles of equal treatment and suggest the employee discuss it with their manager first"
],
correctOption: 0,
explanation: "Lesson 4 classifies this as a Type 2 query — an individual situation requiring HR judgment. The design principle states: every individual situation gets a warm handoff, every time, without exception. The agent must not attempt to adjudicate — even suggesting a grievance process or advising the employee to speak to their manager risks making the situation worse. A warm handoff names a specific HR contact, includes empathy, and makes clear the employee is encouraged to reach out. Asking clarifying questions extends the interaction beyond the agent's scope and delays the employee getting proper support.",
source: "Lesson 4: The HR Knowledge Base Agent"
},
{
question: "The Knowledge Base Agent's weekly report shows that 3 out of 94 queries could not be answered (knowledge gaps). One gap is: 'What is our policy on working from another country?' What does this signal indicate about the organisation's HR documentation?",
options: [
"The agent needs retraining on the existing policy documents",
"Either no policy exists for this topic or the policy exists but was not provided to the agent — both require HR investigation",
"Three unanswered queries out of 94 is within acceptable performance and requires no action",
"The question should be classified as Type 2 and escalated rather than answered"
],
correctOption: 1,
explanation: "Lesson 4 explains that the weekly report's knowledge gaps section identifies queries the agent could not answer well. This could mean no policy exists (a documentation gap) or the policy exists but was not loaded into the agent's knowledge base (a configuration gap). Both require HR investigation and action. Three gaps out of 94 is not acceptable to ignore — the report specifically recommends adding the missing entries. The question is a Type 1 policy query, not a Type 2 individual situation, so escalation is not the right classification. The agent does not need retraining — it needs content.",
source: "Lesson 4: The HR Knowledge Base Agent"
},
{
question: "Ayesha Raza's Day 1 included eight back-to-back induction meetings, and she retained approximately 10% of what she was told. Which of the three onboarding failure modes does this represent?",
options: [
"Administrative Bottleneck — too many meetings signals poor scheduling management",
"Process Overload — a term the chapter uses for excessive orientation activities",
"Invisible Ramp — eight meetings in a day means no time for actual work orientation",
"Information Dump — the programme was designed around what the organisation wants to communicate rather than what the new hire can absorb"
],
correctOption: 3,
explanation: "Lesson 5 defines three onboarding failure modes: Information Dump (too many induction sessions, new hire retains almost none), Administrative Bottleneck (laptop not ready, access not provisioned), and Invisible Ramp (no defined success criteria). Eight back-to-back sessions with 10% retention is the textbook Information Dump — the programme prioritised what the organisation wanted to say over what Ayesha could absorb. Administrative Bottleneck is about pre-Day-1 logistics failures, not meeting overload. Invisible Ramp is about missing success criteria. Process Overload is not a term the chapter uses.",
source: "Lesson 5: Onboarding — The First 90 Days"
},
{
question: "A 30-day success criterion for a new hire reads: 'Understands the company culture.' A manager asks whether this is a strong criterion. How does the chapter evaluate it?",
options: [
"Strong — understanding culture is critical for integration and long-term performance",
"Acceptable — it captures an important qualitative dimension that quantitative criteria would miss",
"Weak — it is vague, cannot be observed or assessed, and neither the manager nor the new hire can tell whether it has been achieved",
"Strong if combined with a follow-up conversation to assess the employee's cultural understanding"
],
correctOption: 2,
explanation: "Lesson 5 defines strong success criteria as observable, specific, and verifiable in a 30-minute conversation. The test: could the new hire assess themselves against it on Day 30 without asking their manager? 'Understands the company culture' fails this test — it cannot be observed or measured. A strong alternative would be: 'Can describe the company's three strategic priorities and explain how their role contributes to each.' The importance of culture does not make a vague criterion strong. Adding a follow-up conversation does not fix the underlying problem of unobservable criteria.",
source: "Lesson 5: Onboarding — The First 90 Days"
},
{
question: "The /onboarding skill produces different plans for junior versus senior hires in the same role family. At the 30-day mark, what is the key difference the chapter identifies between junior and senior onboarding expectations?",
options: [
"Junior hires focus on tool fluency and supervised tasks while senior hires focus on stakeholder relationships and independent scoping of work",
"Senior hires should already be managing direct reports by Day 30",
"Junior hires should have completed more training modules than senior hires by Day 30",
"The expectations are identical — only the timeline for achieving them differs"
],
correctOption: 0,
explanation: "Lesson 5 provides a seniority differentiation table showing that junior hires at 30 days focus on tool fluency, supervised tasks, and orientation to team norms, while senior hires focus on stakeholder relationships and independent scoping of work. This difference matters because senior hires who receive the same Day 1 experience as juniors frequently disengage within 60 days. Training module count is not the differentiator. Managing direct reports at Day 30 would be premature for any onboarding plan. The expectations are fundamentally different in nature, not just timeline.",
source: "Lesson 5: Onboarding — The First 90 Days"
},
{
question: "The original job description for the Senior Data Analyst role listed fifteen requirements with nine marked as essential, included the phrase 'rockstar data mindset,' and had no salary range. The /jd skill applies four principles to fix this. Which principle addresses the 'rockstar' language?",
options: [
"Candidate perspective first — 'rockstar' is written from the organisation's viewpoint",
"Inclusive language by default — 'rockstar' is flagged as gender-coded masculine language that reduces application rates from underrepresented groups",
"Calibrate requirements ruthlessly — 'rockstar' is an unnecessary requirement that should be removed",
"Lead with the work — 'rockstar' belongs in the requirements section not the description"
],
correctOption: 1,
explanation: "Lesson 6 identifies four JD principles, with the fourth being inclusive language by default. The /jd skill automatically flags gender-coded language including 'rockstar,' 'ninja,' 'guru,' and 'dominate.' These terms are categorised as gender-coded masculine and research suggests they reduce application rates from women. The candidate perspective principle addresses 'responsible for' vs 'you will' framing. Lead with the work addresses document structure. Calibrate requirements addresses the essential vs beneficial distinction. Only the inclusive language principle specifically addresses exclusionary terminology.",
source: "Lesson 6: Job Descriptions & Interview Preparation"
},
{
question: "A JD lists 15 requirements as essential. The chapter provides a calibration test for each requirement. The test asks: 'Could a highly capable candidate do this job well without this?' If the answer is yes, what should happen to that requirement?",
options: [
"It should be removed from the JD entirely to reduce document length",
"It should remain essential but be marked as a lower priority within the essential category",
"It should be kept as essential but reworded to sound less demanding",
"It should be moved from Essential to Beneficial — the chapter enforces a maximum of five essential items"
],
correctOption: 3,
explanation: "Lesson 6 establishes the Essential vs Beneficial calibration test: if a highly capable candidate could do the job without the requirement, it is Beneficial, not Essential. The chapter enforces a maximum of five essential items because over-specification deters qualified candidates — particularly those from underrepresented groups who are more likely to self-select out when they do not meet every listed requirement. Failed items move to Beneficial, not removed entirely — they are still worth mentioning. There is no priority ranking within Essential. Rewording does not change whether a requirement is genuinely essential.",
source: "Lesson 6: Job Descriptions & Interview Preparation"
},
{
question: "A structured interview plan generated by /interview-prep includes a 1-4 scoring rubric for each competency. An interviewer argues that recording scores independently before the debrief discussion is unnecessary. What risk does the chapter identify with sharing scores before independent recording?",
options: [
"It enables anchoring — the first score shared influences subsequent scores and reduces the independence of evaluation, undermining the purpose of structured interviews",
"It creates additional administrative work that slows down the hiring process",
"It violates data protection regulations regarding candidate information sharing",
"It makes the interview feedback too formal when a conversational debrief would be more productive"
],
correctOption: 0,
explanation: "Lesson 6 specifies that the debrief template requires interviewers to record scores independently before group discussion. This prevents anchoring — a cognitive bias where the first score shared influences others' assessments. If a senior interviewer shares a strong positive score first, other interviewers may unconsciously adjust their scores upward. Independent recording before discussion preserves the value of having multiple evaluators. This is not about administrative efficiency or data protection — it is about evaluation integrity. Conversational debriefs without independent scoring are exactly what unstructured interviews produce.",
source: "Lesson 6: Job Descriptions & Interview Preparation"
},
{
question: "A /draft-offer output for a UK-based hire includes a 'REVIEW BEFORE SENDING' warning. A junior HR team member considers removing the warning and sending the letter immediately because the figures look correct. What does the chapter say about this practice?",
options: [
"Acceptable if the HR team member has verified the salary against the approved band",
"The warning can be removed once the manager has approved the letter content",
"The warning is mandatory output — every offer letter requires HR review before sending regardless of how accurate it looks, because the skill generates a draft, not a finished document",
"The warning is optional for standard roles but mandatory for senior or executive hires"
],
correctOption: 2,
explanation: "Lesson 7 states explicitly that the REVIEW BEFORE SENDING warning is mandatory output from both /draft-offer and /reference. Every offer letter requires HR review before sending, regardless of how accurate it appears. The skill generates a complete draft — it does not replace the HR sign-off that verifies facts against the employment record, confirms compensation against the approved band, and ensures compliance. Manager approval is not sufficient — HR must verify. The warning applies to all roles, not just senior positions. The verification checklist includes eleven specific items that must be checked.",
source: "Lesson 7: Offer Letters & Employment Documents"
},
{
question: "A departing employee asks for a professional reference. The company's reference policy in hr.local.md says 'factual only from HR; professional references from managers require HR sign-off and written employee consent.' What must be confirmed before generating the reference?",
options: [
"Only that the manager agrees to write the reference",
"Written consent from the employee AND HR sign-off that a professional reference is authorised under the company's policy",
"That the employee's performance record supports the reference content",
"That the employee has completed their notice period in full"
],
correctOption: 1,
explanation: "Lesson 7 establishes that reference letters carry legal risk in two directions: defamation (false negative) and misrepresentation (falsely positive). Before generating a professional reference, two things must be confirmed: written consent from the employee AND HR policy authorisation. The worked example shows Omar checking both before using /reference. Manager agreement alone is insufficient — many organisations require HR sign-off for professional references. Performance record consistency is checked during review but is not the gateway requirement. Notice period completion is not a prerequisite for generating a reference.",
source: "Lesson 7: Offer Letters & Employment Documents"
},
{
question: "A reference letter includes the employee's salary without their knowledge. The chapter identifies this as a specific risk. What is the correct handling according to the sensitivity framework?",
options: [
"Salary can be included in professional references as standard practice",
"Salary should be rounded to the nearest thousand to protect the exact figure",
"Salary can be included only in employment verification references for mortgage applications",
"Salary must never be included without the employee's explicit written consent — this applies even when the requesting organisation asks for it"
],
correctOption: 3,
explanation: "Lesson 7 states that salary information should never be included in a reference without the employee's explicit written consent. This applies even when the requesting organisation specifically asks for it. The chapter treats salary as personal data requiring consent regardless of the reference type. Rounding does not address the consent requirement. Employment verification references may include salary, but only with consent — the reference type does not bypass the consent requirement. The teaching misconception section specifically addresses this point.",
source: "Lesson 7: Offer Letters & Employment Documents"
},
{
question: "Omar's manager notes about Bilal read: 'Not proactive enough.' The /performance-review skill converts this into behavioural feedback. What distinguishes behavioural feedback from personality feedback according to the chapter?",
options: [
"Behavioural feedback is longer and more detailed than personality feedback",
"Behavioural feedback focuses on positive observations while personality feedback addresses areas for improvement",
"Behavioural feedback describes what the person did in observable terms while personality feedback attributes the gap to a fixed character trait that the employee cannot act on",
"Behavioural feedback uses formal language while personality feedback is conversational"
],
correctOption: 2,
explanation: "Lesson 8 identifies the behavioural vs personality distinction as the most important conceptual shift. 'Not proactive' is personality feedback — it describes who the person is, which they cannot change. The behavioural alternative describes what happened: 'In Q3, three initiatives within your remit were identified by others rather than proposed by you.' This is observable, specific, and actionable. The distinction is not about length, tone, or positivity — it is about whether the feedback describes observable behaviour or attributes a fixed trait. Personality feedback also creates legal risk in employment tribunals because it cannot be substantiated with evidence.",
source: "Lesson 8: Performance Reviews Without Bureaucracy"
},
{
question: "A manager lists six development areas in a performance review draft. The /performance-review skill flags this as a quality failure. What is the maximum number of development areas the chapter allows and why?",
options: [
"Maximum two — more than two overwhelms the employee and signals the manager has not prioritised which areas will have the highest impact",
"Three — to align with quarterly goal-setting frameworks",
"Four — matching the four quality standards for performance reviews",
"No fixed limit — the number should match the number of genuine development needs"
],
correctOption: 0,
explanation: "Lesson 8 establishes maximum two development areas as a hard rule, not a suggestion. The reasoning is that employees cannot meaningfully develop in six areas simultaneously — the manager's job is to identify the one or two areas that will have the highest impact on performance and career. More than two signals that the manager has not done the prioritisation work. This constraint forces focus and ensures the development actions are specific and achievable. The limit is not connected to goal-setting cadence or the four quality standards. Having no limit is explicitly rejected as a quality failure.",
source: "Lesson 8: Performance Reviews Without Bureaucracy"
},
{
question: "The /performance-review skill supports three modes. An HR team wants to run a complete review cycle. What is the correct sequence in which the three modes should be used?",
options: [
"Manager review first, then self-assessment, then calibration",
"Self-assessment first (employees document their contribution), then manager review (using notes plus the self-assessment), then calibration (normalising ratings across teams)",
"Calibration first to set the curve, then manager reviews, then self-assessments",
"All three can run simultaneously because they are independent processes"
],
correctOption: 1,
explanation: "Lesson 8 describes a well-designed review cycle that uses all three modes in sequence: employees complete self-assessments first (giving managers additional evidence), managers write reviews using the self-assessment and their own notes, then calibration normalises ratings across teams. This sequence ensures each stage builds on the previous one — the self-assessment provides evidence the manager may not have observed, and calibration ensures consistency. Running manager reviews before self-assessments means the manager lacks the employee's perspective. Calibration first would set ratings before evidence is gathered. The modes are sequential, not independent.",
source: "Lesson 8: Performance Reviews Without Bureaucracy"
},
{
question: "A 360-degree feedback pool for a team of four collects responses from all team members. The /performance-review skill flags an anonymity risk. Why is this a concern?",
options: [
"Four reviewers may not provide enough diverse perspectives for meaningful analysis",
"The statistical sample size of four is too small for reliable frequency weighting",
"Small teams tend to provide uniformly positive feedback that lacks diagnostic value",
"With only four reviewers, attribution by elimination is trivial — the employee can identify every reviewer, which changes what feedback should be shared"
],
correctOption: 3,
explanation: "Lesson 8 states that when the reviewer pool is fewer than five people, anonymity risk must be flagged. In a team of four, attribution by elimination is trivial — the employee can identify who wrote which feedback based on content, relationship, or elimination. This changes what should be shared in the formal review, because feedback given in confidence may damage relationships if attributed. The concern is not about perspective diversity, positive bias, or statistical significance — it is specifically about whether the employee can de-anonymise the responses and the relational consequences of that.",
source: "Lesson 8: Performance Reviews Without Bureaucracy"
},
{
question: "The /comp-analysis output shows a proposed promotion salary at the 62nd percentile. An HR manager asks whether this creates an internal equity risk. What does the chapter say about interpreting percentile positioning?",
options: [
"62nd percentile is above median and competitive — but internal equity must be checked against other employees at the same level to verify no anomaly is created",
"Any salary above the 50th percentile creates internal equity risk by definition",
"Percentile positioning only matters relative to external market data and has no internal equity implications",
"The 75th percentile is the target for all promotions to ensure retention"
],
correctOption: 0,
explanation: "Lesson 9 defines four percentile bands: 25th (below market, retention risk), 50th (market median, competitive), 75th (above market, attracts strong performers), 90th (top of market, critical roles). The 62nd percentile is above median and competitive. However, internal equity must be separately checked — does this salary create an anomaly compared to other employees at the same level in the organisation? Percentile positioning addresses external competitiveness while internal equity addresses fairness within the organisation. Being above 50th does not automatically create a risk. The 75th is not a universal promotion target.",
source: "Lesson 9: Compensation, Talent & Org Planning"
},
{
question: "The /match skill assesses internal candidates across six dimensions. Zara Hussain's assessment shows her people management dimension rated as DEVELOPING with an EXPERIENCE GAP classification. What does the gap type tell the manager about the right development intervention?",
options: [
"Zara needs formal management training to close a fundamental skill deficiency",
"Zara's mindset about management needs to shift before she can be considered for the role",
"Zara has the aptitude but needs the opportunity — a structured project assignment or formal line management responsibility would bridge an experience gap",
"The experience gap means Zara needs at least two more years of tenure before reassessment"
],
correctOption: 2,
explanation: "Lesson 9 distinguishes three gap types that each require different interventions. An EXPERIENCE GAP means the candidate has the aptitude but needs the opportunity — a structured assignment bridges it. A SKILL GAP means they need to build a specific capability through training or coaching. A MINDSET GAP means their operating assumptions need to shift, which is harder and requires mentoring. For Zara, the experience gap in management means assigning formal line management of two engineers with support, not sending her to training. Tenure is explicitly rejected as a readiness indicator — the chapter states that two years of the right projects beats five years doing the same thing.",
source: "Lesson 9: Compensation, Talent & Org Planning"
},
{
question: "Omar wants to tell Zara she will be promoted to Team Lead in six months. The /match skill provides conversation guidance that distinguishes between appropriate and risky language. Which statement follows the chapter's recommended approach?",
options: [
"'You will definitely be promoted to Team Lead in six months if you keep performing at this level'",
"'We have been watching you for the Team Lead role and the decision is essentially made'",
"'You are guaranteed the Team Lead position as long as no external candidate applies'",
"'If your performance continues on this trajectory and you develop in specific areas, a leadership role becomes realistic in that timeframe'"
],
correctOption: 3,
explanation: "Lesson 9 provides explicit NEVER SAY / ALWAYS SAY guidance for succession conversations. The recommended language uses conditional pathways: 'if your trajectory continues... a role becomes realistic.' This builds commitment without creating a promise. Saying 'you will definitely be promoted' or 'the decision is essentially made' creates employment law exposure in most jurisdictions if circumstances change. The distinction is not semantic evasion — promises that cannot be kept damage trust more severely than no conversation at all. Contingent guarantees ('as long as no external candidate') are also risky because they imply a commitment.",
source: "Lesson 9: Compensation, Talent & Org Planning"
},
{
question: "The /org-planning output shows that after Zara's promotion, Omar's span of control drops to two direct reports. The chapter's benchmark analysis flags this. What is the concern?",
options: [
"Two direct reports means Omar does not have enough work to justify his position",
"Two direct reports is below the healthy minimum span of control (5-8 reports), suggesting Omar needs additional scope or the structure should be redesigned",
"Two direct reports is acceptable for a Head of Analytics role given the seniority level",
"The concern only applies if Omar also manages cross-functional projects"
],
correctOption: 1,
explanation: "Lesson 9 presents span-of-control benchmarks where the healthy range is 5-8 direct reports. Two reports falls well below this minimum, which the /org-planning output flags as narrow. The recommendation is to consider whether additional scope should be added to Omar's role or whether the Data Analyst should also report to Zara. This is a structural concern — not about Omar's workload justification, but about whether the org structure is efficient and provides adequate development opportunity. The concern applies regardless of whether Omar manages cross-functional projects. Seniority level does not exempt a role from healthy span-of-control benchmarks.",
source: "Lesson 9: Compensation, Talent & Org Planning"
},
{
question: "Marcus Chen, Head of Client Services with 12 years of tenure, has announced he is leaving in six weeks. He scores 15/15 on the knowledge risk classification. The scoring uses five factors. Which combination represents the maximum risk profile?",
options: [
"5+ years tenure, leadership or sole expert role, undocumented knowledge, no successor identified, direct and significant client/revenue impact",
"Moderate tenure, leadership role, well documented, successor prepared, no revenue impact",
"High tenure, specialist role, partial documentation, successor developing, some indirect revenue impact",
"Any score above 10 is classified as HIGH risk regardless of the specific factor combination"
],
correctOption: 0,
explanation: "Lesson 10 defines the five-factor scoring model where each factor scores 1-3. Maximum risk (score 3 on each) means: tenure 5+ years, leadership or sole expert role criticality, undocumented knowledge, no successor identified, and direct and significant client/revenue impact. Marcus scores 15/15 — the maximum possible — because he is the sole client relationship holder for 60% of revenue with 12 years of undocumented knowledge and no named successor. A score of 11-15 is HIGH risk requiring full capture programme. The specific combination matters because each factor addresses a different dimension of risk.",
source: "Lesson 10: Capturing Institutional Knowledge"
},
{
question: "An organisation conducts knowledge capture only when employees resign. The chapter contrasts this with proactive capture. What is the primary advantage of proactive capture over reactive capture?",
options: [
"Proactive capture costs less because it does not require scheduling separate interview sessions",
"Proactive capture allows more time because it is not constrained to the notice period",
"Proactive capture produces higher-quality knowledge because the employee is fully engaged, has time to reflect, and is not emotionally transitioning — while reactive capture quality declines as the departure date approaches",
"Proactive capture is only necessary for employees classified as HIGH risk"
],
correctOption: 2,
explanation: "Lesson 10 contrasts reactive capture (triggered by resignation, limited to notice period, declining engagement) with proactive capture (annual reviews for high-risk holders, unlimited time, full engagement). The primary advantage is quality — a departing employee's engagement declines as their last day approaches, and they are mentally transitioning. A fully engaged employee gives richer, more honest answers. Time is a secondary benefit. Proactive capture is not cheaper — it requires scheduling sessions. The chapter recommends proactive capture for both HIGH and MEDIUM risk employees, not only HIGH.",
source: "Lesson 10: Capturing Institutional Knowledge"
},
{
question: "The /knowledge skill recommends three capture sessions for HIGH-risk knowledge holders. Session 3 focuses on institutional context. What type of question does the chapter identify as often producing the most valuable captured knowledge?",
options: [
"'What are your current project statuses and deadlines?' — operational continuity questions",
"'Who are the key stakeholders you work with?' — relationship mapping questions",
"'What tools and systems do you use daily?' — technical infrastructure questions",
"'What should we NOT try again?' — questions about institutional memory of failure that prevent the organisation from repeating expensive mistakes"
],
correctOption: 3,
explanation: "Lesson 10 identifies Session 3 (institutional context) as containing the deepest tacit knowledge. The question 'What should we not try again?' is specifically highlighted as often producing the most valuable captured knowledge — institutional memory of failure prevents the organisation from repeating expensive mistakes. Project statuses belong in a handover document, not a knowledge capture session. Stakeholder mapping is Session 1 material. Technical infrastructure questions capture explicit knowledge that is usually already documented. The 'what not to try again' question surfaces institutional wisdom that often surprises even the departing employee.",
source: "Lesson 10: Capturing Institutional Knowledge"
},
{
question: "The offboarding process has four principles. Most organisations execute one of them incompletely and ignore the other three. Which principle do most organisations partially execute?",
options: [
"Preserve institutional knowledge — most organisations attempt handover documents",
"Protect the organisation — most organisations remove access and process administrative close but do so incompletely",
"Positive experience — most organisations arrange farewell events for departing employees",
"Support the team — most organisations communicate departures to the remaining team"
],
correctOption: 1,
explanation: "Lesson 11 states that most organisations do Principle 1 (protect the organisation) incompletely and ignore Principles 2, 3, and 4 entirely. Protect the organisation means ensuring access is removed, documentation is complete, and legal obligations are met — but most do this through a last-day checklist rather than a structured four-phase process. Knowledge preservation, positive experience, and team support are described as consistently ignored. The gap between Principle 1 and Principles 2-4 is identified as where most offboarding fails.",
source: "Lesson 11: Offboarding and Knowledge Transfer"
},
{
question: "The exit interview for a departing employee is scheduled for the last week of their notice period. The chapter identifies this timing as problematic. When should the exit interview take place and why?",
options: [
"Week 1 — immediately after resignation to capture raw emotions and honest feedback",
"The last day — after all handover is complete and the employee has perspective on their full departure experience",
"Week 3 of the notice period — not too early (employee may not yet know why they are leaving), not too late (employee is mentally disengaged and responses are rushed)",
"Any time during the notice period — the timing does not significantly affect feedback quality"
],
correctOption: 2,
explanation: "Lesson 11 specifies three rules for exit interviews, with Rule 1 being that Week 3 is the right timing. Week 1 is too early — the employee has just made an emotional decision and may not clearly understand their reasons yet. The last week is too rushed — the employee is mentally out the door and feedback quality declines. Week 3 gives considered, honest responses while there is still time to act on operational feedback. Timing significantly affects the quality and honesty of responses, so 'any time' is explicitly rejected by the chapter.",
source: "Lesson 11: Offboarding and Knowledge Transfer"
},
{
question: "The chapter states that exit interviews must be conducted by the HR Business Partner, never the line manager. What is the specific risk the chapter identifies with manager-conducted exit interviews?",
options: [
"An employee will not tell their line manager the real reasons they are leaving if those reasons involve management issues — producing polished, safe responses with no useful signal",
"Managers lack the interview training required for effective exit conversations",
"Managers may become emotional during the interview and compromise professionalism",
"Managers do not have access to the HRIS data needed to process exit interview results"
],
correctOption: 0,
explanation: "Lesson 11 identifies a specific conflict of interest: an employee will not be honest with the manager they are leaving about management issues. If the departure reason involves the manager's behaviour, leadership style, or decisions, the employee will self-censor. The result is 'polished, safe responses that contain almost no useful signal.' The HRBP can receive candid feedback that the line manager cannot because the HRBP is not part of the relationship being evaluated. The concern is not about training, emotional reactions, or data access — it is about the structural conflict that prevents honesty.",
source: "Lesson 11: Offboarding and Knowledge Transfer"
},
{
question: "The handover plan must be completed by Week 2 of the notice period according to the chapter. A departing employee suggests completing it in the last week instead. What is the chapter's rationale for the earlier deadline?",
options: [
"Week 2 allows time for the successor to review the handover and ask questions before the employee leaves",
"Week 2 is required because IT needs the handover complete before removing system access",
"The earlier deadline is an administrative preference that can be flexed for senior employees",
"A departing employee in their final week is mentally disengaged, emotionally transitioning, and the quality of knowledge transfer is a fraction of what it is in Weeks 1-3"
],
correctOption: 3,
explanation: "Lesson 11 explicitly warns against leaving the handover to the last week. The rationale is behavioural: a departing employee in their final week is mentally disengaged, emotionally focused on the transition, and often working longer hours managing conversations they have been delaying. The quality of knowledge transfer degrades significantly. While having time for successor questions is beneficial, the primary rationale is the employee's declining engagement quality, not administrative scheduling. The deadline is not flexible — it is a structural requirement of good offboarding. IT access removal is a last-day activity, separate from handover timing.",
source: "Lesson 11: Offboarding and Knowledge Transfer"
},
{
question: "The onboarding orchestrator checks the pre-boarding status at T-3 days and discovers the laptop has not been ordered. What happens next according to the agent's alert trigger design?",
options: [
"The agent adds the item to the weekly status report for review at the next team meeting",
"The agent sends an immediate escalation alert to the HR team because incomplete critical pre-boarding items at T-3 cannot be fixed if caught on Day 1",
"The agent sends a reminder to IT and waits for confirmation before alerting HR",
"The agent reschedules the start date automatically to allow time for the order to be fulfilled"
],
correctOption: 1,
explanation: "Lesson 12 defines three alert triggers for the onboarding orchestrator. Alert 1 — T-3 incomplete critical pre-boarding — triggers an immediate HR alert when any critical item (laptop not ordered, system access not provisioned, Day 1 schedule not sent, or manager unavailable) remains incomplete at T-3 days. The rationale: these items cannot be fixed in the final three days if caught on Day 1. The alert is immediate, not deferred to a weekly report or contingent on IT confirmation. The agent does not reschedule start dates — that requires human judgment. Three days is enough time to fix the problem; one hour on Day 1 is not.",
source: "Lesson 12: Persistent Agents — Onboarding Orchestrator and Policy Maintenance"
},
{
question: "The policy maintenance agent runs five monthly checks. One check reveals that the employee handbook says parental leave is '26 weeks at full pay' while the intranet FAQ says 'up to 26 weeks full pay.' Which of the five checks caught this issue?",
options: [
"Policy version currency — the documents reference different policy versions",
"Statutory rate monitoring — the rates may have changed between document updates",
"Document consistency — the same policy is described differently in two documents, and the 'up to' language is ambiguous",
"FAQ gap analysis — the FAQ entry needs to be expanded with more detail"
],
correctOption: 2,
explanation: "Lesson 12 defines five monthly checks: policy version currency, statutory rate monitoring, document consistency, link validity, and FAQ gap analysis. Document consistency checks whether the same policy is described the same way across different documents. The discrepancy between '26 weeks' and 'up to 26 weeks' is an inconsistency that could mislead employees — 'up to' is ambiguous and potentially incorrect. This is not a version issue (both documents may be current versions), not a statutory rate issue, and not a FAQ gap (the entry exists but is inconsistent). The maintenance report recommends aligning the FAQ with the handbook.",
source: "Lesson 12: Persistent Agents — Onboarding Orchestrator and Policy Maintenance"
},
{
question: "The chapter describes two agent architectures: event-triggered and scheduled. The onboarding orchestrator uses event-triggered architecture while the policy maintenance agent uses hybrid. What triggers the onboarding orchestrator to activate?",
options: [
"An HRIS new hire record — the agent activates automatically when a new hire is registered in the system",
"The first Monday of each month when the agent checks for upcoming start dates",
"A manual request from the HR team to begin the pre-boarding process",
"A calendar event created by the hiring manager for the new hire's start date"
],
correctOption: 0,
explanation: "Lesson 12 distinguishes event-triggered agents (activated by specific HRIS events) from scheduled agents (activated on a fixed cadence). The onboarding orchestrator is event-triggered — it activates when a new hire record is created in the HRIS. This means the workflow begins automatically without manual intervention. The policy maintenance agent uses hybrid architecture (monthly schedule plus event-triggered on statutory rate changes). Manual requests would defeat the purpose of automation. Calendar events are outputs of the agent, not triggers. Understanding the trigger type determines how the agent is configured.",
source: "Lesson 12: Persistent Agents — Onboarding Orchestrator and Policy Maintenance"
},
{
question: "The four persistent agents each generate reports. The chapter reframes these reports as something beyond system logs. What conceptual shift does the chapter ask HR teams to make about agent reports?",
options: [
"Agent reports should be treated as compliance documentation required for audit purposes",
"Agent reports are operational intelligence — they are sensors that reveal where the HR function is working and where it is failing, and should be read for strategic signal",
"Agent reports are system diagnostics that IT should review for performance optimisation",
"Agent reports are employee communication tools that should be shared with all staff"
],
correctOption: 1,
explanation: "Lesson 13 makes the case that the four persistent agents are not just automation systems — they are sensors. Their reports contain operational intelligence about the health of the HR function. Rising query volume in the KB agent means employees cannot find answers. Low pre-boarding completion means new hires arrive unprepared. The shift is from treating reports as system logs to reading them as business intelligence. They are not compliance documentation, IT diagnostics, or employee communications — they are strategic intelligence for the CHRO and HR leadership team.",
source: "Lesson 13: People Analytics & Agent Operations"
},
{
question: "The Knowledge Base Agent's weekly report shows a 50% spike in queries about the flexible working policy this week compared to last week. What does this signal indicate according to the chapter's intelligence framework?",
options: [
"The Knowledge Base Agent needs more training data on the flexible working policy",
"Employees are testing the agent with repeated questions to see if it gives consistent answers",
"The spike is a normal seasonal pattern and does not require investigation",
"The policy launch created confusion — the spike means employees cannot find a clear answer, suggesting the policy language is unclear or the FAQ entry is missing"
],
correctOption: 3,
explanation: "Lesson 13 identifies rising query volume on a specific topic as a key signal: employees cannot find an answer, which means documentation is missing, the policy is confusing, or the policy recently changed. A 50% spike after a new policy launch specifically signals that the launch created confusion — employees are asking questions the policy should have answered clearly. The recommended action is to review and simplify the policy language and add specific FAQ entries. The agent does not need retraining — it needs better content. The spike is correlated with the policy launch, not seasonal variation.",
source: "Lesson 13: People Analytics & Agent Operations"
},
{
question: "The /recruiting-pipeline output shows the screen-to-interview stage averaging 12 days, nearly double the 7-day target. What does a long time-in-stage at screening specifically indicate about the hiring process?",
options: [
"The JD attracted wrong candidates — screening criteria may be unclear or too narrow",
"The hiring manager is too busy to review candidate applications",
"The salary range is too low and candidates are withdrawing during screening",
"The recruiter is not performing enough outreach to fill the pipeline"
],
correctOption: 0,
explanation: "Lesson 13 maps each pipeline stage to what delays reveal. Delays at the Screen stage signal that the JD attracted wrong candidates or screening criteria are unclear. This is different from delays at Interview (scheduling friction, hiring manager availability), Debrief (calibration misalignment), or Offer (approval bottlenecks). The 44% screen-to-interview conversion rate reinforces this — candidates are being screened but not progressing, suggesting either the wrong candidates are applying or the screen criteria are too strict. Hiring manager busyness causes Interview delays, not Screen delays. Salary concerns cause Offer/Accepted delays.",
source: "Lesson 13: People Analytics & Agent Operations"
},
{
question: "A people analytics report shows two Senior Engineering voluntary departures in one quarter, both with 2-3 years of tenure. The chapter identifies this attrition pattern as particularly costly. Why is this specific pattern the highest-cost attrition?",
options: [
"Senior engineers command higher salaries than junior engineers making replacement more expensive",
"Two departures from the same team suggests a systemic management issue requiring immediate investigation",
"Senior engineers at 2-3 years are past their productivity ramp, fully integrated, and hold significant institutional knowledge — they are at peak value to the organisation",
"Senior engineering roles take longer to fill due to competitive market conditions"
],
correctOption: 2,
explanation: "Lesson 13 identifies this as the highest-cost attrition pattern because senior engineers at 2-3 years tenure are past their productivity ramp, fully integrated, and typically hold significant institutional knowledge. They are at the point of maximum value — the organisation has invested heavily in their onboarding and development but has not yet received the long-term return. While replacement cost and time to fill are real concerns, the chapter specifically frames the cost in terms of the integration investment lost. Two departures may signal a systemic issue, but the question asks why the pattern is high-cost, not what it signals about management.",
source: "Lesson 13: People Analytics & Agent Operations"
},
{
question: "The HR intelligence dashboard combines signals from all four persistent agents. A KB agent spike in flexible working queries coincides with the policy maintenance agent flagging a cross-reference inconsistency in the flexible working policy. What does the chapter say about reading these signals together?",
options: [
"Each agent report should be reviewed independently to avoid confusion between different data sources",
"The two signals independently point to different problems that happen to involve the same policy",
"The policy maintenance agent finding should be resolved first, and the KB agent spike will resolve itself",
"The connection between the two signals points to one root cause — the inconsistency is causing the confusion, and this pattern is only visible when reading all four reports together"
],
correctOption: 3,
explanation: "Lesson 13 establishes that the four agents together form an intelligence system — their value multiplies when read together. When the KB agent shows a query spike on flexible working and the policy maintenance agent simultaneously flags a cross-reference inconsistency in that same policy, the two signals point to one root cause. The inconsistency is likely causing the confusion employees are experiencing. This cross-agent pattern is only visible if someone reads all four reports. Reviewing reports independently misses these connections. While fixing the inconsistency may reduce queries, the chapter frames this as a diagnostic insight, not a sequential resolution.",
source: "Lesson 13: People Analytics & Agent Operations"
},
{
question: "The capstone exercise asks students to produce a lifecycle folder with eight documents. Each document must carry a sensitivity label. The JD and onboarding plan are labelled ROUTINE. The offer letter and performance review are labelled CONFIDENTIAL. What determines the classification?",
options: [
"The seniority level of the employee — senior roles require CONFIDENTIAL classification",
"The content of the document — ROUTINE covers general process information while CONFIDENTIAL covers documents containing personal data, salary, performance, or talent information",
"The audience — documents shared with the employee are ROUTINE while internal HR documents are CONFIDENTIAL",
"The plugin source — official plugin outputs are ROUTINE and custom plugin outputs are CONFIDENTIAL"
],
correctOption: 1,
explanation: "Lesson 14 (and the framework established in Lesson 1) classifies documents by content: ROUTINE covers policy summaries, JDs, onboarding plans, and general queries that can be shared widely. CONFIDENTIAL covers anything containing personal data, salary details, performance assessments, or talent information. A JD describes the role (ROUTINE) while an offer letter contains salary (CONFIDENTIAL). The classification is not based on employee seniority, audience, or plugin source. Some official plugin outputs are CONFIDENTIAL (/draft-offer, /performance-review) and some custom plugin outputs are ROUTINE (/jd), so the plugin source does not determine the label.",
source: "Lesson 14: Capstone — The Full Employee Lifecycle"
},
{
question: "The capstone requires a reflection at each lifecycle stage identifying what the AI did well and where human judgment was essential. At the DEVELOP stage (performance review), which element does the chapter identify as requiring human judgment that the AI cannot replace?",
options: [
"Formatting the review document to match the company's performance review template",
"Generating structured feedback with specific behavioural observations from vague manager notes",
"Making the final performance rating judgment and deciding the actual career development recommendation",
"Checking the review for spelling and grammatical errors"
],
correctOption: 2,
explanation: "Lesson 14 emphasises that human judgment is needed throughout the lifecycle, not only when the AI makes errors. At the DEVELOP stage, the AI excels at converting vague notes into structured, evidenced feedback (which is what it contributes). But the final performance rating, the career development recommendation, and the judgment about whether Bilal is truly ready for a tech lead path are human decisions the AI informs but does not make. Formatting and proofreading are mechanical tasks, not judgment. The chapter specifically states that a student who produces polished AI output without understanding where human judgment is needed has not demonstrated the core learning.",
source: "Lesson 14: Capstone — The Full Employee Lifecycle"
},
{
question: "During the lifecycle sprint, a student notices that /draft-offer used generic notice period language instead of their organisation's specific terms. The chapter identifies this as a specific type of gap. What should the student do?",
options: [
"Add specific notice period values to the Jurisdiction section of hr.local.md so future outputs reference the correct terms automatically",
"Accept the generic language and manually edit the offer letter each time",
"Report a bug in the /draft-offer skill because it should automatically detect notice period conventions",
"Switch to a different plugin that handles notice periods more accurately"
],
correctOption: 0,
explanation: "Lesson 14 includes a configuration reflection asking students to identify hr.local.md improvements based on gaps observed during the lifecycle sprint. Generic notice period language indicates a missing configuration — adding notice_period_probation and notice_period_post_probation to the Jurisdiction section would make future outputs organisation-specific. This is the design intent of hr.local.md — it transforms generic defaults into specific outputs. Manual editing is a workaround, not a fix. The skill is working as designed — it uses defaults when configuration is missing. Reporting a bug is incorrect because the behaviour is expected without configuration.",
source: "Lesson 14: Capstone — The Full Employee Lifecycle"
},
{
question: "The complete skill and agent map shows 9 official skills, 5 custom skills, and 4 persistent agents. The chapter describes a SENSITIVE PERSONAL DATA category that triggers a specific response. Which type of HR situation falls into this category?",
options: [
"Offer letters with salary information — because salary is personal financial data",
"Performance reviews with development areas — because feedback could affect the employee's career",
"Compensation benchmarking — because salary data is commercially sensitive",
"Medical situations, disciplinary investigations, grievance proceedings, and termination — matters requiring clinical judgment, legal process, or human dignity"
],
correctOption: 3,
explanation: "Lesson 15 (and the framework from Lesson 1) defines SENSITIVE PERSONAL DATA as covering medical, disciplinary, grievance, and termination matters. These must NEVER be auto-generated — they always require immediate escalation to a named HR contact via warm handoff. Offer letters and performance reviews are CONFIDENTIAL (not SENSITIVE PERSONAL DATA). Compensation benchmarking is also CONFIDENTIAL. The distinction matters because CONFIDENTIAL outputs can be AI-generated with HR review, while SENSITIVE PERSONAL DATA outputs should never be generated by AI at all — they require clinical judgment, legal process, impartiality, or human dignity that AI cannot provide.",
source: "Lesson 15: Quick Reference & Central Insights"
},
{
question: "The chapter's central insight is expressed as a boundary: the 60% that AI handles and the 40% that humans must handle. What defines the boundary between these two categories?",
options: [
"The 60% covers tasks that take less than 30 minutes each and the 40% covers tasks requiring more time",
"The 60% covers information routing, repetitive process execution, and structured knowledge capture — the 40% covers difficult conversations, sensitive investigations, genuine talent judgment, and ethical decisions",
"The 60% covers tasks that junior HR staff handle and the 40% covers tasks requiring senior HR expertise",
"The boundary is flexible and depends on the AI capabilities available to the organisation"
],
correctOption: 1,
explanation: "Lesson 15 summarises the chapter's central insight: the 60% is information routing, repetitive process execution, and structured knowledge capture — anywhere the answer follows a known pattern. The 40% is difficult conversations, sensitive investigations, genuine talent judgment, ethical decisions, and any situation touching individual dignity, health, or conduct. The boundary is defined by the nature of the work (pattern-following vs judgment-requiring), not by time, seniority, or technology capability. The SENSITIVE PERSONAL DATA label marks where the boundary lies in practice. The goal is to free HR professionals from the 60% so they can do the 40% better.",
source: "Lesson 15: Quick Reference & Central Insights"
},
{
question: "The offboarding-knowledge-agent follows a five-step workflow when a resignation is confirmed. At which step does the agent generate draft knowledge articles from interview notes?",
options: [
"Step 4 — after HR uploads session notes, the agent structures them into draft knowledge articles marked DRAFT",
"Step 2 — as part of generating the knowledge capture plan",
"Step 1 — immediately after the risk assessment to prioritise documentation",
"Step 5 — as part of the final completion report compiled on the last day"
],
correctOption: 0,
explanation: "Lesson 11 describes the five-step workflow: Step 1 is knowledge risk assessment, Step 2 is generating the capture plan, Step 3 is scheduling capture sessions, Step 4 is structuring uploaded session notes into draft knowledge articles marked DRAFT, and Step 5 is the completion report. The agent does not conduct the interviews — humans do that and upload notes. The agent then structures those notes into the knowledge article format with title, knowledge, when it applies, exceptions, contacts, and confidence level. Draft articles are produced at Step 4, not earlier or at the final report stage.",
source: "Lesson 11: Offboarding and Knowledge Transfer"
},
{
question: "The chapter describes the 30-60-90 framework for onboarding. At the 60-day milestone for a senior hire, what does the chapter expect in terms of manager involvement?",
options: [
"Daily check-ins to ensure the senior hire is meeting expectations",
"Weekly formal progress reviews with documented milestones",
"A peer relationship — the manager's involvement should have transitioned from context-provider to peer by Day 60",
"The same level of supervision as a junior hire to ensure quality standards"
],
correctOption: 2,
explanation: "Lesson 5 provides a seniority differentiation table showing that manager time investment for senior hires is light in Days 1-30 (context only) and transitions to a peer relationship by Day 60. This contrasts with junior hires who need high manager involvement with daily check-ins in Days 1-30 that reduce steadily. Senior hires who receive the same supervision as juniors frequently disengage because the programme signals their experience is not recognised. Weekly formal reviews are for mid-level hires. The manager's role evolves from providing context to being a peer collaborator.",
source: "Lesson 5: Onboarding — The First 90 Days"
},
{
question: "The /knowledge skill uses a three-session interview structure for HIGH-risk knowledge holders. The sessions are ordered intentionally. Why does Session 1 focus on client and stakeholder relationships rather than institutional context?",
options: [
"Client relationships are always the most commercially valuable knowledge to capture first",
"The sequence moves from concrete and relational knowledge (easiest to articulate) to deeper tacit knowledge (requires more reflection) — Session 1 starts accessible",
"Stakeholder information must be captured first because it has the shortest shelf life",
"The ordering is arbitrary and sessions can be conducted in any sequence"
],
correctOption: 1,
explanation: "Lesson 10 explains that the three-session sequence is intentional: Session 1 starts with concrete relational knowledge (who are the real decision-makers, what are the relationship histories) because this is the easiest to articulate. Session 2 moves to procedural knowledge (how things actually work versus documentation) which requires more reflection. Session 3 ends with the deepest tacit knowledge — institutional wisdom about what not to try again and what the employee is most worried about. The sequence builds trust and depth. The ordering is not about commercial value or shelf life — it is about cognitive accessibility.",
source: "Lesson 10: Capturing Institutional Knowledge"
},
{
question: "The onboarding orchestrator sends a satisfaction survey at Day 60. If the new starter rates their experience at or below 2 out of 5, what happens?",
options: [
"The score is logged in the monthly report for quarterly review by the HR team",
"The manager receives a notification to discuss the low score with the new hire directly",
"The new hire is asked to complete a more detailed survey to identify specific issues",
"The orchestrator escalates to the HR Business Partner for a direct confidential check-in conversation — because a 2/5 score at Day 60 is a retention signal, not just a satisfaction signal"
],
correctOption: 3,
explanation: "Lesson 12 defines Alert 3: when the Day 60 satisfaction survey score is at or below the configured threshold (typically 2 out of 5), the orchestrator escalates to the HR Business Partner for a direct check-in conversation. The chapter frames this as a retention signal — a new hire scoring 2/5 at Day 60 is at risk of leaving. The HRBP provides a confidential channel to surface concerns. The score is not deferred to a quarterly review because the timing is critical. The manager is not the right recipient because the concerns may involve the manager. Additional surveys delay the human conversation the employee needs.",
source: "Lesson 12: Persistent Agents — Onboarding Orchestrator and Policy Maintenance"
},
{
question: "The policy maintenance agent monitors statutory rate changes. In the UK, when do most statutory rates change, and what does the agent do when it detects a change?",
options: [
"Most UK rates change in April — the agent identifies all documents containing the current rate and alerts HR with specific locations and text to update, but HR performs the actual updates",
"Rates change in January — the agent automatically updates all policy documents with the new figures",
"Rates change quarterly — the agent runs a full document scan every three months",
"Rates change unpredictably — the agent monitors government websites daily for changes"
],
correctOption: 0,
explanation: "Lesson 12 specifies that UK statutory rates (National Living Wage, Statutory Sick Pay, Statutory Maternity/Paternity Pay) typically change in April. When the policy maintenance agent detects a change, it searches all employee-facing documents for the current rate, identifies the specific locations and text that need updating, and alerts HR with actionable instructions. Critically, the agent does not automatically update the documents — HR performs the actual updates after verification. The agent surfaces the work; humans do the judgment. Rates do not change quarterly or unpredictably — April is the standard annual update point for most UK statutory rates.",
source: "Lesson 12: Persistent Agents — Onboarding Orchestrator and Policy Maintenance"
},
{
question: "A student completing the capstone exercise generates all eight lifecycle documents but does not add sensitivity labels to any of them. The chapter identifies this as a significant quality failure. Why are sensitivity labels non-negotiable?",
options: [
"Labels are required by the Docusaurus documentation framework for proper rendering",
"Labels determine the file storage location in the company's document management system",
"Labels communicate how to handle each document — who can see it, how to store it, and what care to take — a student who labels none has not understood a core chapter principle about HR data handling",
"Labels are required for the quiz grading rubric but have no practical significance"
],
correctOption: 2,
explanation: "Lesson 14 states explicitly that the sensitivity framework is the most important quality check in the capstone. A student who produces all six documents but labels none has not understood a core chapter principle. Labels communicate handling requirements: ROUTINE outputs can be shared with employees, CONFIDENTIAL outputs require data protection handling, and SENSITIVE PERSONAL DATA must never be auto-generated. This is not about documentation framework requirements, file storage, or grading. The labels have real-world consequences — sharing a CONFIDENTIAL talent assessment with the assessed employee without review could cause organisational and legal harm.",
source: "Lesson 14: Capstone — The Full Employee Lifecycle"
}
]}
questionsPerBatch={18}
/>
