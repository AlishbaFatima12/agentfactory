---
slug: /Business-Domain-Agent-Workflows/operations-management/chapter-quiz
sidebar_position: 16
title: "Chapter 38: Operations Management Quiz"
---

# Chapter 38: Operations Management Quiz

Test your understanding of the Operations Intelligence Gap, two-plugin architecture, vendor management, contract analysis, process documentation, change management, compliance tracking, audit preparation, risk registers, incident post-mortems, operational metrics, persistent agents, intelligence briefs, and end-to-end operations sprints.

<Quiz
title="Chapter 38: Operations Management Assessment"
questions={[
{
question: "A vendor contract auto-renewed for another year at full price because nobody tracked the notice deadline. The contract was filed on page 17 of an MSA that nobody had read since signature. Which of the three operational failure modes does this scenario primarily illustrate?",
options: [
"Process Rot: the process for tracking contracts has decayed over time",
"Compliance Drift: regulatory obligations are diverging from actual controls",
"Vendor Sprawl: the portfolio of vendors is invisible and unmanaged",
"Operations Intelligence Gap: the organisation lacks a metrics framework"
],
correctOption: 2,
explanation: "Lesson 1 defines Vendor Sprawl as the irrational accumulation of overlapping, unused, and auto-renewing vendor contracts that persists because nobody has a complete picture of the vendor portfolio. The auto-renewal happened because renewal dates were not tracked in a single place, a hallmark of invisible vendor management. Process Rot describes the decay of documented processes, not vendor contract tracking. Compliance Drift refers to the divergence between regulatory obligations and controls. The Operations Intelligence Gap is the root cause underlying all three failure modes, not a failure mode itself.",
source: "Lesson 1: The Three Operational Failure Modes"
},
{
question: "The chapter argues that all three operational failure modes trace back to a single root cause. A new COO asks you to explain that root cause in one sentence. Which statement best captures it?",
options: [
"The delta between what an organisation should know about its operations and what it actually knows",
"The absence of documented standard operating procedures for critical workflows",
"The failure to hire sufficient operations staff to monitor all business activities",
"The lack of enterprise resource planning software to automate operational tasks"
],
correctOption: 0,
explanation: "Lesson 1 defines the Operations Intelligence Gap as the delta between what an organisation should know about its own operations and what it actually knows. All three failure modes (Vendor Sprawl, Process Rot, and Compliance Drift) are symptoms of this gap. The issue is visibility, not staffing levels or software. SOPs address Process Rot specifically but are not the root cause of all three modes. ERP software is a tool, not a diagnosis of the systemic problem.",
source: "Lesson 1: The Three Operational Failure Modes"
},
{
question: "A student installs both plugins and types /compliance-tracking to map their GDPR obligations. They receive an error. What is the most likely cause?",
options: [
"The custom Operations Intelligence plugin is not installed correctly",
"The student needs to configure ops.local.md before any compliance command works",
"The official Operations plugin does not include compliance tracking capabilities",
"compliance-tracking is an auto-skill activated by natural language keywords, not a slash command"
],
correctOption: 3,
explanation: "Lesson 2 explicitly warns that compliance-tracking, risk-assessment, and process-optimization are auto-skills that activate from keyword patterns in natural prompts. They are never invoked with a slash command. The student should write a natural prompt containing words like 'compliance', 'obligation', or 'regulatory' and the skill activates automatically. The custom plugin does not own this capability; the official plugin does. While ops.local.md improves output quality, its absence causes generic output, not errors.",
source: "Lesson 2: Plugin Architecture and Installation"
},
{
question: "The chapter uses two plugins rather than one. A colleague asks why. Which answer best explains the architectural principle?",
options: [
"The official plugin handles simple tasks while the custom plugin handles complex ones",
"Zero overlap: every capability is covered exactly once by whichever plugin is best suited to it",
"The custom plugin is a temporary solution until the official plugin adds missing features",
"Both plugins provide the same capabilities but the custom one is organisation-specific"
],
correctOption: 1,
explanation: "Lesson 2 establishes the zero-overlap principle: every capability is covered exactly once, by the plugin best suited to it. The official plugin covers vendor review, process documentation, change management, status reporting, and runbooks. The custom plugin covers audit preparation, contract analysis, incident management, metrics framework, and persistent agents. The distinction is not simple versus complex; it is which plugin's architecture best supports each capability. There is no planned convergence; the separation is by design.",
source: "Lesson 2: Plugin Architecture and Installation"
},
{
question: "After running a vendor portfolio audit on 47 vendors, the output shows total addressable savings of £155,000-£183,000. Your CFO asks whether this number is reliable. What is the correct assessment?",
options: [
"The number is reliable because the AI calculated it from the vendor data provided",
"The number understates savings because AI tools are conservative in their estimates",
"It is a ceiling estimate conditional on usage data collection and renegotiation outcomes, not a commitment",
"It should be divided by two to account for typical estimation error in AI outputs"
],
correctOption: 2,
explanation: "Lesson 3 warns that addressable savings figures depend on assumptions about renegotiation outcomes, consolidation feasibility, and cancellation candidates. Fifteen vendors had no usage data, meaning the audit could not confirm whether those subscriptions were actively used. The savings figure is conditional on collecting that usage data; treat it as a ceiling, not a commitment. AI outputs are not inherently conservative or inflated; they reflect the quality and completeness of input data. Arbitrary discounting is not a valid analytical approach.",
source: "Lesson 3: Vendor Management: The Portfolio View"
},
{
question: "A vendor renewal calendar shows a £124,000 CRM platform renewing in 47 days with a 60-day notice period. What is the operational implication?",
options: [
"The notice deadline has already passed: auto-renewal will proceed unless the contract allows late cancellation",
"There is still time for a standard renegotiation before the notice deadline",
"The renewal is low priority because the CRM is actively used across departments",
"The vendor should be contacted but only after completing a full SLA scorecard"
],
correctOption: 0,
explanation: "Lesson 3 teaches that the notice deadline (not the renewal date) is the operationally critical date. With a 60-day notice period and only 47 days remaining, the deadline to prevent auto-renewal has passed. The organisation must now determine whether the contract permits late cancellation or begin emergency renewal discussions. Active usage does not eliminate the need for negotiation; even desirable renewals should be intentional, not passive. Waiting for a scorecard would waste the remaining time before the renewal locks in.",
source: "Lesson 3: Vendor Management: The Portfolio View"
},
{
question: "The /contract command identifies six categories of risk flags in vendor contracts. A student reviews a contract and finds a liability cap set at three months of fees for a £240,000-per-year vendor. What is the business consequence of this clause?",
options: [
"The cap applies only to consequential damages and does not limit direct liability",
"The vendor's maximum liability for any failure is capped at approximately £60,000 regardless of actual loss",
"The cap is standard for enterprise contracts and should not be flagged as a risk",
"The cap means the vendor will pay three months of fees as a penalty for any breach"
],
correctOption: 1,
explanation: "Lesson 4 explains that liability caps limit the vendor's total financial exposure. Three months of £240,000 annual fees equals approximately £60,000, meaning if the vendor causes a £400,000 loss through a major outage, the organisation can recover at most £60,000. This is a significant risk flag for operationally critical vendors. The lesson notes that virtually every standard vendor contract term is negotiable. The cap is not a penalty clause; it limits recovery, not triggers payment. Whether it is standard is irrelevant to whether it creates risk in a specific operational context.",
source: "Lesson 4: Contract Analysis: Obligation Extraction"
},
{
question: "A negotiation position framework has five components. A procurement manager prepares for a vendor renewal but omits the walk-away threshold. What is the practical consequence?",
options: [
"The missing component can be defined during the negotiation based on how discussions proceed",
"The vendor will perceive weakness and immediately raise their price",
"The procurement manager cannot begin negotiations without all five components",
"Negotiations may drift toward accepting whatever the vendor offers because there is no defined limit"
],
correctOption: 3,
explanation: "Lesson 4 states that the walk-away threshold is the most important component to define in advance. Without it, negotiations drift toward accepting whatever the vendor offers because 'something is better than nothing.' The threshold gives the negotiator leverage by establishing the point at which the deal is no longer acceptable. Defining it during negotiation is reactive and undermines the structured approach. While the vendor may exploit weakness, the primary consequence is internal: the negotiator lacks a defined boundary for decision-making.",
source: "Lesson 4: Contract Analysis: Obligation Extraction"
},
{
question: "An SOP was written two years ago during an ERP implementation. Since then, the system was upgraded and the approval threshold changed. New employees follow the SOP and make errors at two steps. Which stage of the three-stage documentation failure describes this situation?",
options: [
"Stage 1 (Creation): the SOP was poorly written from the beginning",
"Stage 2 (Divergence): the process changed but the document was not updated",
"Stage 3 (Harm): the outdated document is actively causing errors when followed",
"This is a training failure rather than a documentation failure"
],
correctOption: 2,
explanation: "Lesson 5 describes the three-stage documentation failure: Stage 1 (Creation) is when the document accurately reflects reality. Stage 2 (Divergence) is when the process changes but the document does not. Stage 3 (Harm) is when accumulated divergence makes the document unreliable and people following it make errors. New employees making errors at specific steps because the SOP does not reflect the current process is Stage 3: the document has moved from merely outdated to actively harmful. The original creation was thorough; the failure is in maintenance, not in initial quality.",
source: "Lesson 5: Process Documentation: SOPs and Runbooks"
},
{
question: "A colleague asks whether to create an SOP or a runbook for the monthly supplier payment run. The process needs governance documentation for auditors AND step-by-step execution instructions for the finance team. What is the correct approach?",
options: [
"Create both: the SOP governs the process while the runbook provides exact execution steps",
"Create only an SOP because it is the more comprehensive document type",
"Create only a runbook because it covers both governance and execution in one document",
"Create an SOP first and convert it to a runbook format when the team requests it"
],
correctOption: 0,
explanation: "Lesson 5 explains that SOPs and runbooks serve different audiences and purposes. The SOP answers who is responsible, what controls exist, and what approvals are required; this is what auditors review. The runbook answers exactly how to execute the process today: the exact system steps, expected results, and failure actions. Many processes need both. The monthly supplier payment run needs an SOP for governance and a runbook for execution. Neither format fully replaces the other because their audiences and purposes are structurally different.",
source: "Lesson 5: Process Documentation: SOPs and Runbooks"
},
{
question: "A CRM upgrade is assessed by the project team as a Standard change. The CRM integrates with the finance system, marketing automation, and a customer portal. Three departments are affected. What classification error has been made?",
options: [
"Standard classification is correct because the upgrade is from the same vendor",
"The change should be classified as Significant or Major because it affects multiple systems and departments",
"The classification depends entirely on whether the vendor has tested the upgrade",
"The change should be classified based on the project team's comfort level with the technology"
],
correctOption: 1,
explanation: "Lesson 6 defines change classification based on scope, risk, and dependencies, not on whether the change feels routine. A change affecting three departments, three system integrations, and a customer-facing portal is at minimum Significant (multiple teams or systems) and likely Major (multi-system with complex rollback). Under-classification is the most common error because teams want to move faster, but the consequence is an assessment that misses the dependencies the correct classification would have required mapping. Same-vendor upgrades can still break integrations.",
source: "Lesson 6: Change Management: Impact and Rollback"
},
{
question: "A rollback plan for an ERP migration states: 'If things go wrong, we will revert to the previous system.' The COO asks whether this is adequate. What is the correct assessment?",
options: [
"It is adequate as a high-level rollback strategy that teams can detail during execution",
"It needs only the addition of a timeline to become a complete rollback plan",
"It is adequate if combined with a communication plan for affected stakeholders",
"It is not a rollback plan; it lacks observable trigger criteria, named decision authority, and specific reversibility assessment per phase"
],
correctOption: 3,
explanation: "Lesson 6 states that a rollback plan answering only 'we will revert' is an intention, not a plan. A real rollback plan must define three things before go-live: what observable conditions constitute critical failure, who has authority to trigger the rollback, and what is specifically reversible at each phase. The chapter provides phase-specific rollback thinking showing that reversibility varies by phase: data migrations and published communications cannot simply be undone. Adding a timeline alone does not address the fundamental gaps in trigger criteria and decision authority.",
source: "Lesson 6: Change Management: Impact and Rollback"
},
{
question: "An organisation's compliance map marks an obligation as CURRENT with the note 'we comply with UK GDPR.' The obligation has no specific evidence citation. According to the chapter's evidence standard, what status should this obligation carry?",
options: [
"PARTIAL at best: CURRENT status requires cited, locatable evidence, not a declaration of belief",
"REVIEW NEEDED: the obligation needs verification but is likely compliant",
"CURRENT: the assertion of compliance is sufficient for internal tracking",
"GAP: without evidence, the obligation should be treated as unmet"
],
correctOption: 0,
explanation: "Lesson 7 establishes a strict evidence standard: 'We comply with UK GDPR' is an assertion. 'Privacy notice updated [date], ROPA at [location], last reviewed [date] by [DPO]' is evidence. CURRENT status requires cited, locatable evidence, not a declaration of belief. An obligation where evidence cannot be located must be rated PARTIAL at best, regardless of the organisation's confidence. GAP would apply if no effective control exists at all. The most common compliance map failure is optimistic CURRENT status on obligations where evidence is assumed but not verified.",
source: "Lesson 7: Compliance Tracking: Obligations and Evidence"
},
{
question: "The compliance-tracking auto-skill uses a five-status classification system. A control exists for an obligation but has identifiable evidence gaps. The control does not fully address the obligation. Which status applies?",
options: [
"CURRENT: the control exists and is functioning",
"REVIEW NEEDED: the evidence is aging but the control is effective",
"PARTIAL: a control exists but does not fully address the obligation and has evidence gaps",
"GAP: the evidence gaps mean no effective control is demonstrated"
],
correctOption: 2,
explanation: "Lesson 7 defines PARTIAL as the status where a control exists but does not fully address the obligation, and evidence has identifiable gaps. This is distinct from GAP (no effective control exists or evidence is absent) and REVIEW NEEDED (evidence is aging or a review date has passed, but the control was previously verified). CURRENT requires both an effective control and complete, cited evidence. The distinction between PARTIAL and GAP matters operationally: PARTIAL means targeted remediation, while GAP means building or rebuilding the control from scratch.",
source: "Lesson 7: Compliance Tracking: Obligations and Evidence"
},
{
question: "Compliance drift accelerates at three predictable triggers. An experienced compliance officer leaves the organisation without documenting how a critical control works. Which trigger does this represent?",
options: [
"Regulatory change: the compliance framework has been updated externally",
"Personnel change: the person who owned a control leaves without documenting it",
"System change: the technology implementing the control has been replaced",
"Process rot: the documented control procedure has decayed naturally"
],
correctOption: 1,
explanation: "Lesson 7 identifies three predictable triggers for compliance drift: personnel change (control owner leaves without documentation), regulatory change (regulation updates but the control is not updated), and system change (technology upgrade removes an embedded control). The scenario describes a personnel change: the compliance officer's departure creates an undocumented gap in how the control operates. Process rot is a chapter-level concept from Lesson 1, not one of the three compliance drift triggers. The control itself has not changed; the knowledge of how to operate it has been lost.",
source: "Lesson 7: Compliance Tracking: Obligations and Evidence"
},
{
question: "An audit preparation plan for an FCA supervisory visit includes a mock audit. A gap is identified in the mock: a suitability assessment template does not cover Consumer Duty requirements. The team files the finding but does not act on it before the real audit. What is the consequence?",
options: [
"The finding automatically downgrades the related compliance obligation from CURRENT to PARTIAL",
"The finding is irrelevant because mock audits are practice exercises without formal standing",
"The FCA will review the mock audit report and use it as evidence of the organisation's preparedness",
"The mock finding becomes a documented awareness of the gap that creates additional audit liability"
],
correctOption: 3,
explanation: "Lesson 8 warns that mock audit findings that are not closed before the actual audit are real findings, and worse, they create a paper trail showing the organisation was aware of the gap and did not act. This awareness without action is more damaging than ignorance because it demonstrates a governance failure. The FCA may not review the mock report directly, but if the same gap is found in the real audit, the organisation cannot claim it was unaware. Mock audits are only valuable if the gaps they surface are acted on before the real review.",
source: "Lesson 8: Audit Preparation: Evidence and Mock Review"
},
{
question: "An audit response to an FCA finding begins: 'We disagree with this finding, our team is highly experienced and this has never caused a problem in practice.' According to the chapter's framework, what type of response is this?",
options: [
"A strong response that demonstrates confidence in the organisation's compliance controls",
"An acceptable initial position that establishes a basis for negotiation with the regulator",
"A defensive response that damages the regulatory relationship and signals governance immaturity",
"An appropriate response if the finding is genuinely incorrect and can be evidenced"
],
correctOption: 2,
explanation: "Lesson 8 contrasts defensive responses with mature ones. 'We disagree' and 'this has never caused a problem' are explicitly listed as damaging defensive patterns. A mature response acknowledges the finding factually, identifies the specific root cause, and commits to a specific corrective action with a named owner and date. Even if the organisation believes the finding is incorrect, arguing with audit findings signals defensiveness. The chapter recommends acknowledging, then demonstrating with evidence, not arguing with the auditor's conclusion.",
source: "Lesson 8: Audit Preparation: Evidence and Mock Review"
},
{
question: "A risk register shows an inherent score of 15 (HIGH) and a residual score of 4 (LOW) for key-person dependency. The listed control is 'verbal process knowledge with informal cross-training.' Is the residual score credible?",
options: [
"No: verbal knowledge and informal cross-training are WEAK or ABSENT controls that cannot justify a residual score of 4",
"Yes: any control that exists reduces the residual score below the inherent level",
"Yes: the cross-training effectively transfers knowledge and reduces the risk",
"It depends on how many people have received the informal cross-training"
],
correctOption: 0,
explanation: "Lesson 9 establishes the untested control rule: residual risk can only be lower than inherent when a control is STRONG, reliably tested and evidenced. Verbal process knowledge is not a control (it is ABSENT in the formal sense), and informal cross-training is WEAK at best. The residual score should remain close to or equal to the inherent score of 15, not drop to 4. The number of people informally cross-trained does not change the effectiveness rating without formal documentation and testing. A residual of 4 from an inherent of 15 with WEAK controls is a political document, not a risk assessment.",
source: "Lesson 9: Operational Risk Register That Works"
},
{
question: "The 5x5 risk scoring matrix produces four score bands. A risk scores Likelihood 4 and Impact 4, giving a score of 16. What is the correct classification and required treatment?",
options: [
"MEDIUM: monitor and review quarterly at the operations manager level",
"HIGH: immediate mitigation plan required with monthly review and COO escalation",
"CRITICAL: immediate action with board-level visibility within 30 days",
"LOW: accept the risk and include it in the annual register review"
],
correctOption: 1,
explanation: "Lesson 9 defines the score bands: 1-4 is LOW, 5-9 is MEDIUM, 10-16 is HIGH, and 17-25 is CRITICAL. A score of 16 falls in the HIGH band, which requires an immediate mitigation plan, monthly review, and escalation to the COO. It does not reach the CRITICAL threshold of 17-25, which requires board-level visibility. The distinction matters operationally: HIGH risks are managed by the operations function with COO oversight, while CRITICAL risks require executive committee or board intervention.",
source: "Lesson 9: Operational Risk Register That Works"
},
{
question: "A risk register that shows only MEDIUM and LOW risks, with most residual scores well below inherent, is described by the chapter as having a specific quality problem. What is it?",
options: [
"The register is too short and needs more risks added to be comprehensive",
"The organisation has genuinely strong controls that effectively reduce all risks",
"The scoring methodology was applied too conservatively by the risk assessors",
"It is almost certainly a political document reflecting what the organisation wants its risk profile to look like"
],
correctOption: 3,
explanation: "Lesson 9 warns that a risk register showing only comfortable risks with residual scores well below inherent is almost certainly a political document. It may reflect what the organisation wants its risk profile to look like, not what it is. The chapter advises checking whether key-person dependency, regulatory gaps, customer concentration, and other uncomfortable risks are present. If all risks feel comfortable to discuss, the register is likely missing something. Genuinely strong controls across all risks is possible but should be verified with tested evidence, not assumed.",
source: "Lesson 9: Operational Risk Register That Works"
},
{
question: "During a payment processing outage post-mortem, the Five Whys analysis stops at WHY 1: 'the health check threshold was misconfigured.' A corrective action is issued to fix the threshold. What is the problem with stopping here?",
options: [
"Fixing the threshold prevents this specific recurrence but does not prevent the next migration from producing a similar misconfiguration",
"The threshold fix is unnecessary because the real problem is elsewhere",
"WHY 1 is always the correct stopping point for time-sensitive incidents",
"The Five Whys technique requires exactly five iterations to be valid"
],
correctOption: 0,
explanation: "Lesson 10 demonstrates that the proximate cause (misconfigured threshold) is never the root cause. The Five Whys for this incident reaches WHY 5: migration checklists were not reviewed for environment-specific requirements. Fixing the threshold prevents THIS incident from recurring but does not prevent the next migration from producing a different misconfiguration. The systemic fix (updating acceptance criteria) closes the entire class of vulnerability. Both corrective actions are needed, but only the systemic one prevents recurrence of similar incidents. Five is a heuristic, not a rule; stop when you reach something a process change can address.",
source: "Lesson 10: Incident Management: Post-Mortem and Five Whys"
},
{
question: "A post-mortem corrective action reads: 'IT will improve the runbook process.' Using the chapter's five-criteria quality test, on which criteria does this action fail?",
options: [
"It passes all criteria because improving the process is a valid corrective action",
"It fails only on Time-bound because no deadline is specified",
"It fails on Specific and Owned: the action is vague and assigned to a department rather than one named person",
"It fails only on Verifiable because there is no way to confirm completion"
],
correctOption: 2,
explanation: "Lesson 10 defines five quality criteria for corrective actions: Specific, Owned, Time-bound, Root-cause-targeted, and Verifiable. 'IT will improve the runbook process' fails multiple criteria. It is not Specific: 'improve' does not describe what will be different when complete. It is not Owned: 'IT' is a department, not one named person. It is likely also not Time-bound (no date) and not Verifiable (no measurable outcome). A passing action would read: 'Head of Infrastructure to validate all runbooks against current environment by [date]; sign-off logged and added to change acceptance checklist.'",
source: "Lesson 10: Incident Management: Post-Mortem and Five Whys"
},
{
question: "A blameless post-mortem asks: 'Why did the engineer not check the runbook was current before using it?' According to the chapter, what is wrong with this question?",
options: [
"Nothing: it is a factual question about what happened during the incident",
"The question is appropriate but should be rephrased to avoid using the engineer's name",
"It should only be asked in a private conversation, not in the post-mortem meeting",
"It uses blame framing directed at the individual rather than blameless framing directed at the system"
],
correctOption: 3,
explanation: "Lesson 10 distinguishes blame framing from blameless framing. 'Why did the engineer not check?' directs accountability at the individual. The blameless equivalent is: 'What in our update process allowed the runbook to remain outdated for four months?' This produces an actionable system change. The left-hand column produces defensiveness and incomplete disclosure. Blameless culture is not about removing accountability; it is about directing accountability at systems and processes rather than individual errors. The question's problem is its framing, not its privacy or specificity.",
source: "Lesson 10: Incident Management: Post-Mortem and Five Whys"
},
{
question: "A COO receives a monthly operations report with 30 metrics. She asks the Operations Manager to summarise it in a paragraph. According to the chapter, what does this reveal about the dashboard design?",
options: [
"The COO needs training on how to read operational dashboards efficiently",
"The dashboard has too many metrics: it requires readers to do the analytical work the dashboard should do for them",
"Thirty metrics is appropriate for a 200-person organisation with complex operations",
"The COO should review the dashboard weekly rather than monthly to build familiarity"
],
correctOption: 1,
explanation: "Lesson 11 opens with this exact scenario: a 30-metric dashboard that tells leadership nothing because it requires the reader to do the analytical work. The solution is not fewer metrics collected but better-designed metrics: 5 to 10 well-chosen measurements that tell the operational story clearly. The chapter argues that more metrics means more cognitive load and less clarity, not more information. The COO's request to summarise reveals that the dashboard failed at its primary job: being a decision-support tool readable in under five minutes.",
source: "Lesson 11: Operational Metrics: Designing What to Measure"
},
{
question: "A metric definition includes: name, what it measures, formula, data source, and owner. But the red threshold says only 'below 80%' with no escalation path specified. What is missing?",
options: [
"The red threshold must specify who the metric is escalated to and by when, not just the alarm level",
"The threshold needs only a numerical value to be operationally useful",
"The escalation path belongs in a separate escalation matrix, not in the metric definition",
"The green and amber thresholds must be defined before the red threshold is meaningful"
],
correctOption: 0,
explanation: "Lesson 11 states that a metric without a defined red threshold that includes escalation is a thermometer, not an alarm. The red threshold must specify three things: the level at which it triggers, who it is escalated to, and by when. 'Below 80%' defines only the trigger level. A complete red threshold reads: 'Below 80%: escalate to COO within 24 hours; initiate formal performance review.' Without the escalation path, nobody knows who picks up the phone when the alarm fires. Green and amber thresholds are also important but the red threshold's escalation specificity is the critical gap.",
source: "Lesson 11: Operational Metrics: Designing What to Measure"
},
{
question: "An operations dashboard has seven metrics, all of which are lagging indicators measuring what happened in the previous period. According to the chapter's design principles, what is the primary deficiency?",
options: [
"Seven metrics is too many: the dashboard should have no more than five",
"Lagging indicators are preferred because they provide verified historical performance data",
"The dashboard lacks leading indicators and can only measure what went wrong, not prevent what is about to go wrong",
"The dashboard needs an equal number of leading and lagging indicators to be balanced"
],
correctOption: 2,
explanation: "Lesson 11 establishes that every major risk area should have at least one leading indicator. Lagging metrics tell you what happened; they are essential for accountability. Leading metrics tell you what is about to happen; they are essential for prevention. A dashboard with only lagging indicators can only confirm failures after they occur. It cannot warn of approaching problems while there is still time to act. The chapter does not require equal numbers of leading and lagging indicators, but it requires at least one leading indicator per major risk area.",
source: "Lesson 11: Operational Metrics: Designing What to Measure"
},
{
question: "The vendor-watchdog agent detects that a £124,000 CRM contract renewal is 47 days away with a 60-day notice period. The notice deadline has already passed. What should the alert's recommended action specify?",
options: [
"Archive the alert and wait until the next renewal cycle to address it",
"Escalate to the compliance monitor agent for regulatory review of the contract",
"Send a standard renegotiation request to the vendor within 30 business days",
"Begin emergency renewal process immediately and verify whether the contract allows late cancellation"
],
correctOption: 3,
explanation: "Lesson 12 shows the exact alert format for this scenario: when the notice deadline has passed, the recommended action is to begin emergency renewal immediately and verify contract terms for late cancellation options. The alert should escalate to the COO because the contract value exceeds £50,000 and the notice deadline was missed. Waiting for the next cycle would lock the organisation into another year at existing terms. A standard renegotiation request is too slow given the urgency. The compliance monitor handles regulatory obligations, not vendor contract renewals.",
source: "Lesson 12: Persistent Agents: Deployment and Schedule"
},
{
question: "The Process Health agent detects that an SOP owner has left the organisation. The SOP is Tier 1 (Critical). What alert classification and recommended action should the agent produce?",
options: [
"A low-priority informational alert suggesting the SOP be archived until a new owner is assigned",
"A high-priority alert recommending an interim owner within 5 business days and a knowledge capture session while the departed employee may still be accessible",
"A medium-priority alert scheduling the SOP for review at the next monthly process health check",
"A critical alert requiring the SOP to be immediately rewritten from scratch by a different team member"
],
correctOption: 1,
explanation: "Lesson 12 shows the orphaned SOP alert format: when an owner has left, the agent flags it with high priority and recommends assigning an interim owner within 5 business days. Critically, it notes that if the departure is recent, a knowledge capture session should be scheduled while the former employee's process knowledge may still be accessible. Archiving a Tier 1 SOP leaves a critical process undocumented. Waiting for the monthly check allows the gap to persist. Rewriting from scratch is premature; the first step is knowledge capture and ownership assignment.",
source: "Lesson 12: Persistent Agents: Deployment and Schedule"
},
{
question: "The four persistent agents are designed to interact. The Compliance Monitor detects a regulatory change. Which agent should respond next and why?",
options: [
"The Vendor Watchdog: to check whether vendor contracts reference the affected regulation",
"The Change Tracker: to log the regulatory change as a formal change request",
"The Process Health agent: to check which SOPs embed controls for the affected obligation and flag them for review",
"No other agent responds: each agent operates independently without cross-agent coordination"
],
correctOption: 2,
explanation: "Lesson 12 maps the agent interdependency chain: when the Compliance Monitor detects a regulatory change, the Process Health agent checks which SOPs embed controls for the affected obligation and alerts SOP owners for regulation-triggered reviews. This ensures that regulatory changes cascade to process documentation updates. The agents are designed to be independent but their outputs interact. The Change Tracker monitors the change pipeline, not regulatory changes. The Vendor Watchdog monitors vendor performance and renewals. The agents do coordinate; that is a feature of the four-agent network design.",
source: "Lesson 12: Persistent Agents: Deployment and Schedule"
},
{
question: "A persistent agent's alert reads: 'Contract renewing soon.' According to the chapter's alert quality standard, what is wrong with this alert?",
options: [
"It reports status without a specific recommended action, escalation path, or the information needed to act",
"Nothing: brief alerts are preferable to verbose ones for busy operations teams",
"The alert should include the full contract text for the recipient's reference",
"It needs only a deadline date to become a complete and actionable alert"
],
correctOption: 0,
explanation: "Lesson 12 establishes that agents must produce recommended actions, not just status reports. 'Contract renewing soon' is a status. A complete alert includes the service description, annual value, renewal date, notice deadline, notice method, owner, specific required action, and escalation path. The chapter contrasts weak alerts with strong ones, and the difference in operational usefulness is stark. Adding only a deadline date improves it marginally but still lacks the recommended action, owner, and escalation information needed for the recipient to act without seeking additional context.",
source: "Lesson 12: Persistent Agents: Deployment and Schedule"
},
{
question: "The monthly operations intelligence brief synthesises data from five sources. A COO receives a brief that lists vendor status, process status, compliance status, and change status in four separate sections with no connections drawn between them. What quality problem does this represent?",
options: [
"The brief is well-structured: each domain should be reported independently for clarity",
"The individual sections need more detail to be useful for executive decision-making",
"The brief is missing the risk register section, which would provide the connecting context",
"It is a compilation rather than a synthesis: it concatenates reports without identifying cross-domain connections"
],
correctOption: 3,
explanation: "Lesson 13 distinguishes synthesis from concatenation. A synthesised brief connects signals across domains, identifying that a vendor SLA breach, a related compliance obligation gap, and an overdue change in the same system are connected. A concatenated brief lists each domain's status separately without drawing the line between related issues. The cross-domain intelligence section is what transforms a combined report into an intelligence brief. The risk register section would add another domain but would not itself create the cross-domain connections that synthesis requires.",
source: "Lesson 13: Operations Intelligence Brief"
},
{
question: "The five-step synthesis workflow for the intelligence brief starts with gathering inputs. What is Step 2, the step that transforms the gathered data into intelligence?",
options: [
"Generate the status report backbone using /status-report for consistent structure",
"Connect: identify signals from different domains that are related to each other",
"Write the executive summary with the top three recommended actions for the COO",
"Enrich the backbone with trend analysis from /metrics and agent monitoring data"
],
correctOption: 1,
explanation: "Lesson 13 defines the five-step workflow: (1) Gather all inputs, (2) Connect: identify cross-domain signals that are related, (3) Generate the backbone brief with /status-report, (4) Enrich with trend analysis from /metrics and agent reports, (5) Write the executive summary and recommended actions. Step 2 (Connect) is what transforms the data into intelligence. The connections are the intelligence: individual reports cannot surface them; only human or AI synthesis can. Without this step, the brief remains a compilation regardless of how well-structured or enriched it is.",
source: "Lesson 13: Operations Intelligence Brief"
},
{
question: "The chapter distinguishes between weekly alert cadence and monthly intelligence brief cadence. A vendor SLA breach is detected on Tuesday. Should this appear in the weekly alert, the monthly brief, or both?",
options: [
"Only the weekly alert: the monthly brief covers strategic patterns, not individual events",
"Only the monthly brief: the breach needs context from the full month's data to be meaningful",
"Both: the weekly alert triggers immediate action while the monthly brief provides trend context",
"Neither: SLA breaches are handled directly by the vendor-watchdog agent without human reporting"
],
correctOption: 2,
explanation: "Lesson 13 explains that weekly alerts contain items needing action this week: decision triggers with specific deadlines. The monthly brief provides the strategic narrative: trends, patterns, and cross-domain connections. A vendor SLA breach appears in the weekly alert as an immediate action item (contact vendor, claim credits) and in the monthly brief as part of the vendor SLA compliance trend. The weekly alert drives the action; the monthly brief contextualises the action within the broader operational picture. Both cadences serve different purposes and the breach is relevant to each.",
source: "Lesson 13: Operations Intelligence Brief"
},
{
question: "An intelligence brief's recommended actions section lists: 'Address compliance gaps, improve vendor management, review change processes.' According to the chapter's quality standard, what is wrong with these recommendations?",
options: [
"Each action lacks specificity: they need a named owner, specific action description, and time-bound deadline",
"There should be exactly five recommended actions, not three",
"The recommendations cover too many domains and should focus on a single area",
"The language is too informal for a COO-level document"
],
correctOption: 0,
explanation: "Lesson 13 states that the recommended actions section is the brief's entire purpose: a brief without specific recommended actions is just a status report. Each action must be specific, owned by a named person, and time-bound. 'Address compliance gaps' is vague. A passing recommendation reads: 'Appoint interim DPO by [date] to complete data processor register; escalate OBL-019 to CLOSED status before 30-day GAP escalation deadline.' Three recommendations is the correct number; the chapter specifies top three. The issue is not scope or tone but the absence of actionable specificity.",
source: "Lesson 13: Operations Intelligence Brief"
},
{
question: "The capstone sprint has nine phases. A student completes the vendor audit in Phase 1 but produces inaccurate renewal dates. What is the consequence for later phases?",
options: [
"No consequence: each phase operates independently with its own data",
"The risk register in Phase 6 will have incorrect vendor risk assessments and the final brief will synthesise flawed data",
"The error is automatically corrected when the persistent agents are configured in Phase 9",
"Only Phase 8 (metrics framework) is affected because it tracks vendor SLA compliance rates"
],
correctOption: 1,
explanation: "Lesson 14 warns that mistakes compound in a sprint: artefacts from earlier phases feed later ones. The vendor audit data from Phase 1 feeds the contract analysis (also Phase 1), the compliance map (Phase 4, for contractual obligations), the risk register (Phase 6, for vendor dependency risks), and ultimately the intelligence brief. Inaccurate renewal dates propagate through every downstream phase that references vendor data. The quality gates after each phase exist precisely to catch problems at their source rather than discovering them in the final synthesis. Agents monitor data but cannot correct foundational errors.",
source: "Lesson 14: Capstone: End-to-End Operations Sprint"
},
{
question: "The capstone offers three scenarios: Subsidiary Acquisition, ERP Migration, and Regulatory Change. A compliance officer is choosing a scenario. Which scenario best matches their domain and why?",
options: [
"Scenario A (Subsidiary Acquisition): because it involves the most complex vendor analysis",
"Scenario B (ERP Migration): because technology changes have the highest compliance implications",
"Any scenario is equally appropriate because the sprint framework is identical across all three",
"Scenario C (Regulatory Change): it stresses compliance mapping and audit preparation, which are core compliance skills"
],
correctOption: 3,
explanation: "Lesson 14 explicitly maps scenarios to professional profiles. Scenario C (Regulatory Change) stresses compliance mapping, audit preparation, and risk register management, core compliance officer skills. The scenario involves new FCA guidance affecting 8 compliance obligations with existing gaps, requiring demonstration of compliance within 60 days. While the framework is the same for all scenarios, what changes is emphasis and focus. A compliance officer will produce a better brief from Scenario C because the operational context matches their domain expertise. The connection to real-world context accelerates skill acquisition.",
source: "Lesson 14: Capstone: End-to-End Operations Sprint"
},
{
question: "The capstone sprint allocates 90 minutes total. A student finds that Phase 1 (vendor audit and contract analysis) consumed 25 minutes instead of the planned 15. What does the chapter say about this situation?",
options: [
"The time pressure is intentional: discovering which phases take longer reveals where operational judgment is still developing",
"The student should skip Phase 2 to get back on schedule for the remaining phases",
"The student has failed the capstone because time management is a graded criterion",
"The extra time indicates the vendor data was too complex and should be simplified"
],
correctOption: 0,
explanation: "Lesson 14 frames the 90-minute constraint as part of the learning: real operational situations do not allow unlimited preparation time. Students who discover they need more time for certain phases have found important learning: which phases take longer than expected and why. The chapter does not suggest skipping phases or simplifying data. The sprint is a quality test under time pressure, not a speed test. The quality gates remain essential even when running behind schedule. Understanding where time is consumed reveals where the student's operational judgment and toolkit familiarity need further development.",
source: "Lesson 14: Capstone: End-to-End Operations Sprint"
},
{
question: "The chapter's quick reference lists five official plugin commands. A student needs to run a post-mortem for a production incident. Which plugin and command should they use?",
options: [
"Official plugin: /status-report with an incident focus parameter",
"Official plugin: /change-request because incidents are often caused by changes",
"Custom plugin: /incident for post-mortem documentation and Five Whys RCA",
"Custom plugin: /audit because audit and incident both involve investigation"
],
correctOption: 2,
explanation: "Lesson 15's quick reference tables confirm that /incident is a custom plugin command used for post-mortem documentation, Five Whys root cause analysis, and corrective action tracking. The official plugin does not have an incident management command. /status-report generates periodic reports with KPIs, not incident analysis. /change-request handles change impact assessments, not incident post-mortems, though the chapter connects them causally (poor change management causes incidents). /audit handles audit preparation and evidence packaging, which is a different investigative process.",
source: "Lesson 15: Chapter Summary and Quick Reference"
},
{
question: "The chapter's central insight is stated in the summary lesson. Which statement best captures it?",
options: [
"Operations is primarily an administrative function that can be fully automated with AI plugins",
"Operations is a cost-reduction function focused on eliminating redundant vendor contracts",
"Operations is a compliance function that exists to satisfy regulatory and audit requirements",
"Operations is an intelligence function: its job is to make the invisible visible so that better decisions become possible"
],
correctOption: 3,
explanation: "Lesson 15 articulates the chapter's central insight: operations is not primarily an administrative function; it is an intelligence function whose job is to make the invisible visible. When vendor spend, process gaps, compliance obligations, and risk exposures become visible, decisions improve. The chapter explicitly notes that the intelligence layer does not make decisions; it improves the quality of information available when humans make decisions. The COO still decides. The compliance officer still signs off. Operations intelligence improves input quality, not decision-making authority.",
source: "Lesson 15: Chapter Summary and Quick Reference"
},
{
question: "The summary lesson states that the intelligence infrastructure does not change something fundamental about operations. What does it NOT change?",
options: [
"The speed at which operational data can be collected and analysed",
"The need for human judgment on decisions like exiting vendor relationships or rolling back changes",
"The visibility of vendor portfolios, compliance obligations, and risk exposures",
"The ability to detect operational drift before it becomes an audit finding"
],
correctOption: 1,
explanation: "Lesson 15 explicitly states that operations still requires judgment, and no amount of intelligence infrastructure changes that. Deciding whether to exit a vendor, how to communicate a difficult change, whether to rollback at midnight, and which compliance risk to accept are judgment calls that belong to people. What the infrastructure changes is the quality of information available when those calls are made. Better information in the hands of the same people produces better decisions, but the decisions remain human. The chapter is clear that plugins flag and inform; they do not decide.",
source: "Lesson 15: Chapter Summary and Quick Reference"
},
{
question: "The ops.local.md configuration file has seven sections. In Lesson 2, only one section is populated. The rest are left as placeholders. Why does the chapter take this approach?",
options: [
"The remaining sections require advanced technical knowledge that students do not yet have",
"Only the Organisation Context section is used by any of the plugin commands",
"The file is built progressively: each lesson introduces the relevant section as the capability is taught",
"The placeholder sections are optional features that most organisations do not need"
],
correctOption: 2,
explanation: "Lesson 2 explains that ops.local.md is built progressively through the chapter. Organisation Context is the minimum for Lesson 2. The Vendor Portfolio section is populated in Lesson 3, Process Library in Lesson 5, Change Management in Lesson 6, Regulatory Frameworks in Lesson 7, Risk Configuration in Lesson 9, and Operational Metrics in Lesson 11. By the end of Lesson 11, the file is fully populated. This progressive approach reduces cognitive load: students configure only what they need for each lesson rather than completing the entire file before any exercises.",
source: "Lesson 2: Plugin Architecture and Installation"
},
{
question: "A vendor portfolio audit flags 15 vendors with 'usage unknown' status. The audit estimates £112,000 in cancellation opportunity from these vendors. A COO asks how to interpret this figure. What is the correct guidance?",
options: [
"The figure represents the total subscription cost of vendors with unknown usage; actual cancellable amount depends on confirming which are genuinely unused",
"The £112,000 should be budgeted as confirmed savings for the next financial year",
"The AI has overestimated because it cannot verify actual vendor usage from input data alone",
"The figure should be doubled to account for indirect costs associated with unused vendors"
],
correctOption: 0,
explanation: "Lesson 3 explains that 'usage unknown' means the audit cannot determine whether those subscriptions are actively used. The £112,000 is the total subscription cost of vendors flagged as unknown usage; it is an opportunity ceiling. The actual cancellable amount depends on the organisation confirming actual usage through internal audit. Some may turn out to be actively used by teams not captured in the data. The AI correctly identifies the gap but cannot fill it; only the organisation can confirm actual usage. The figure should not be budgeted as confirmed savings or arbitrarily adjusted.",
source: "Lesson 3: Vendor Management: The Portfolio View"
},
{
question: "The /contract command identifies an auto-renewal clause that reads: 'Unless written notice is given 90 days prior, this Agreement renews for successive one-year periods.' The notice must be sent to legal@vendor.com. Why does the chapter emphasise capturing the exact notice mechanism?",
options: [
"For record-keeping purposes in case the contract is disputed in court",
"To ensure the vendor receives the notice in their preferred communication format",
"The notice mechanism is only important for contracts above a certain annual value",
"Because missing the notice window commits the organisation to another full term, and knowing the exact mechanism prevents procedural errors that void the notice"
],
correctOption: 3,
explanation: "Lesson 4 emphasises that the auto-renewal notice window is the single most time-sensitive piece of information in any contract. Missing it commits the organisation to another full term, potentially hundreds of thousands of pounds. Capturing the exact notice mechanism (written notice to whom, via what channel) is essential because a notice sent to the wrong email address or in the wrong format may be voided by the contract terms. The importance applies regardless of contract value. The chapter shows this in the worked example where the extraction explicitly flags 'Notice method: Written notice to legal@apexcloud.com' as critical operational information.",
source: "Lesson 4: Contract Analysis: Obligation Extraction"
},
{
question: "The RACI matrix in an SOP assigns 'the Finance team' as Responsible for step 4 of the payment approval process. According to the chapter's quality standard, what is wrong with this assignment?",
options: [
"Nothing: team-level assignments are appropriate for collaborative steps",
"The Responsible role must name a specific job title, not a team; shared responsibility means nobody is individually accountable",
"RACI matrices should only assign the Accountable role, not the Responsible role",
"The Finance team assignment is acceptable if the team has fewer than five members"
],
correctOption: 1,
explanation: "Lesson 5 establishes that every step in an SOP must name a specific job title, not 'the team.' 'Everyone is responsible' means no one is. The RACI matrix resolves the most common process failure mode: ambiguous ownership. Each step should identify a named role like 'AP Clerk' or 'Finance Manager', not 'Finance' or 'the Finance team.' The team size is irrelevant; even a two-person team needs clear role assignment per step. The RACI matrix uses all four roles (Responsible, Accountable, Consulted, Informed) and each must be populated for every major step.",
source: "Lesson 5: Process Documentation: SOPs and Runbooks"
},
{
question: "A change communication plan includes messages for all staff, the directly affected team, and leadership. It covers what the change is and what the benefits will be. According to the chapter, what critical element is missing?",
options: [
"Guidance on what NOT to say, including avoiding overclaiming benefits and acknowledging what is being lost",
"A timeline for when each message should be sent relative to the go-live date",
"Contact information for the change management team in case of questions",
"A feedback mechanism so staff can express concerns about the change"
],
correctOption: 0,
explanation: "Lesson 6 emphasises that what you choose NOT to say during a change is as important as what you say. The chapter explicitly requires each communication milestone to include 'what NOT to say.' Overclaiming benefits before the system is tested, underdisclosing risks, and failing to acknowledge what is being lost all create resistance and trust deficits. A communication plan that only covers the positive aspects of a change generates resistance from surprise when staff discover the downsides. The chapter frames resistance as primarily coming from surprise, not from disagreement.",
source: "Lesson 6: Change Management: Impact and Rollback"
},
{
question: "An organisation's compliance map shows 34 obligations: 28 CURRENT, 5 REVIEW NEEDED or PARTIAL, and 1 GAP. The compliance dashboard shows 63% CURRENT and 8% GAP/URGENT. A regulator asks the CCO about the organisation's compliance posture. Which response demonstrates the most governance maturity?",
options: [
"'We are 63% compliant and working to improve.' This gives a clear numerical summary.",
"'We believe we are fully compliant based on our internal assessment, with minor administrative items pending.'",
"'We have identified specific gaps and have a prioritised remediation plan with named owners and deadlines for each non-CURRENT obligation.'",
"'Our compliance rate exceeds industry benchmarks for organisations of our size and complexity.'"
],
correctOption: 2,
explanation: "Lesson 7 establishes that the compliance map is only useful if it produces a prioritised action list. The most governance-mature response acknowledges specific gaps honestly and demonstrates that each has a named owner, specific action, and deadline, exactly what the remediation plan requires. Giving a percentage without context is misleading. Claiming full compliance with 'minor items pending' downplays the GAP obligation. Comparing to industry benchmarks deflects from the organisation's actual compliance state. Regulators value honest self-assessment with demonstrated remediation over optimistic assertions.",
source: "Lesson 7: Compliance Tracking: Obligations and Evidence"
},
{
question: "The chapter describes audit evidence that exists in a folder nobody can locate on audit day. According to the lesson, what is the practical status of this evidence?",
options: [
"It counts as evidence because its existence has been documented in internal records",
"It is functionally absent: evidence that cannot be located on audit day is effectively non-existent for audit purposes",
"It is valid evidence that the auditor should be asked to wait for while the team locates it",
"It downgrades the obligation from CURRENT to REVIEW NEEDED but does not affect compliance status"
],
correctOption: 1,
explanation: "Lesson 8 states explicitly: evidence that exists in a folder nobody can locate on audit day is, for practical purposes, absent. The lesson distinguishes between evidence existence and evidence availability, both are required. An obligation where evidence cannot be located must be rated PARTIAL at best, regardless of whether the evidence theoretically exists somewhere. Evidence availability is tested through the evidence inventory, which confirms three things: what evidence exists, where it is stored, and how old it is. Asking an auditor to wait while the team searches signals poor evidence management.",
source: "Lesson 8: Audit Preparation: Evidence and Mock Review"
},
{
question: "A mitigation plan in the risk register states: 'Reduce key person dependency.' The plan has no named owner, no deadline, and no target residual score. According to the chapter, what must a valid mitigation plan include?",
options: [
"A description of the risk and its current score is sufficient for a mitigation plan",
"A reference to the relevant SOP that will be updated as part of the mitigation",
"A budget allocation for the mitigation activity and approval from the risk committee",
"A specific action, a named owner, a target completion date, and a target residual score showing the expected reduction"
],
correctOption: 3,
explanation: "Lesson 9 defines four elements of a valid mitigation plan: (1) a specific action describing exactly what changes, (2) whether it reduces likelihood, impact, or both with a quantified target residual score, (3) one named person as the owner (not 'the team'), and (4) a target completion date. 'Reduce key person dependency' is explicitly listed as a weak mitigation example. The strong version reads: 'Document [Role]'s 6 core processes as SOPs using /process-doc by [date]. Owner: COO. Target: residual 12 to 6.' Budget and SOP references may be relevant but are not the four required elements.",
source: "Lesson 9: Operational Risk Register That Works"
},
{
question: "The chapter connects Lesson 6 (Change Management) and Lesson 10 (Incident Management) through a specific causal chain. What is that connection?",
options: [
"Poor change management (specifically a migration without runbook validation as an acceptance criterion) directly caused the payment processing outage",
"Change management creates the documentation that incident management reviews during post-mortems",
"Incident management provides the corrective actions that change management implements",
"Both lessons use the same plugin command to produce their primary outputs"
],
correctOption: 0,
explanation: "Lesson 10 explicitly traces the payment processing outage's root cause back to Lesson 6: the cloud migration (a change) did not require runbook validation as an acceptance criterion. Had the change management process required this, the runbook would have been updated before the migration closed, and the incident would not have occurred. This direct connection between poor change management and future incidents is a central teaching point. The lessons use different commands (/change-request vs /incident) and serve different operational purposes, but they are causally linked through the quality of change acceptance criteria.",
source: "Lesson 10: Incident Management: Post-Mortem and Five Whys"
},
{
question: "The repeat incident rate is described as the most important incident metric. An organisation has an MTTR of 2 hours (improving) and a repeat incident rate of 40%. What does this combination reveal?",
options: [
"The organisation is performing well: the low MTTR shows efficient incident response",
"The 40% repeat rate is acceptable because rapid resolution minimises business impact",
"The organisation is getting faster at resolving incidents but its corrective actions are not closing the systemic gaps",
"The MTTR improvement is meaningless because it only measures response speed, not response quality"
],
correctOption: 2,
explanation: "Lesson 11 explains that MTTR tells you how fast incidents are resolved, while the repeat incident rate tells you whether post-mortems are working. An MTTR of 2 hours is impressive; the team resolves quickly. But a 40% repeat rate means corrective actions are not closing the systemic gaps that cause incidents to recur. When read together, these two metrics reveal that the organisation is efficient at fighting fires but ineffective at preventing them. The MTTR is not meaningless; it demonstrates response capability. But without effective corrective actions, the same fires keep starting.",
source: "Lesson 11: Operational Metrics: Designing What to Measure"
}
]}
questionsPerBatch={18}
/>
