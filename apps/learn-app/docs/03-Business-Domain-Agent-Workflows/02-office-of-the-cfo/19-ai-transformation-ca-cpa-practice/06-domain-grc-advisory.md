---
slug: /Business-Domain-Agent-Workflows/ai-transformation-ca-cpa-practice/domain-grc-advisory
sidebar_position: 6
title: "Domain 5 -- Governance, Risk and Compliance Advisory"
description: "Explore how AI transforms GRC advisory -- the CA/CPA domain where professional judgment is most resilient -- from periodic manual testing to continuous AI-monitored controls, while the advisory layer above monitoring becomes the defining professional skill"
keywords:
  [
    "governance risk compliance",
    "GRC advisory",
    "three lines of defence",
    "three lines model",
    "continuous controls monitoring",
    "internal controls",
    "compliance management",
    "risk assessment",
    "ServiceNow AI Agents",
    "IBM Watsonx Governance",
    "COSO framework",
    "King IV",
    "UK Corporate Governance Code",
    "CA CPA AI",
  ]
chapter: 19
lesson: 6
duration_minutes: 35

# HIDDEN SKILLS METADATA
skills:
  - name: "Analyse AI Impact on GRC Advisory Functions"
    proficiency_level: "A2"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Student can describe how Gen-AI automates policy drafting, risk assessment, and compliance reporting, and explain why GRC advisory judgment is more resilient to AI displacement than other CA/CPA domains"

  - name: "Apply the Three Lines Model to AI Agent Deployment"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student can map an AI monitoring agent to the correct line in the Three Lines Model, specify what the agent monitors autonomously versus what it escalates to humans, and explain the governance implications of continuous versus periodic monitoring"

  - name: "Design a Continuous Controls Monitoring Specification"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can specify three financial controls with their prevention objectives, evidence data, failure anomalies, and agent response actions, structured as a SKILL.md specification for an autonomous GRC monitoring agent"

learning_objectives:
  - objective: "Explain how Gen-AI capabilities automate the documentation-intensive components of GRC work -- policy drafting, risk assessment, compliance reporting -- while the advisory judgment layer (interpreting what monitoring data means, advising the board, designing the monitoring programme) remains with the professional"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student can describe at least two Gen-AI use cases in GRC and identify the judgment component that remains with the professional in each case"

  - objective: "Apply the Three Lines Model to determine where AI monitoring agents operate within an organisation's governance structure and identify the human roles that change in each line when monitoring becomes continuous"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student completes Practice Exercise 5, correctly placing the monitoring agent in the governance structure and specifying escalation boundaries"

  - objective: "Design a continuous controls monitoring specification that defines control objectives, evidence data, failure anomalies, escalation thresholds, and agent response actions for three financial controls"
    proficiency_level: "B1"
    bloom_level: "Apply"
    assessment_method: "Student produces a SKILL.md specification with three controls, each containing the four specification elements (prevention objective, evidence data, failure anomaly, agent response)"

cognitive_load:
  new_concepts: 5
  concepts_list:
    - "GRC advisory as the broadest and most heterogeneous CA/CPA domain (governance, risk, internal controls, compliance)"
    - "The Three Lines Model: operational management, oversight functions, independent assurance"
    - "Continuous controls monitoring vs periodic testing: the fundamental shift"
    - "Control design thinking: specifying what a control prevents, what evidences it, what reveals failure"
    - "GRC as the domain where advisory judgment is most resilient to AI displacement"
  assessment: "5 concepts at A2-B1 level -- within the 5-7 cognitive limit. The Three Lines Model is the lesson's conceptual anchor; control design thinking is the practical skill. Students arrive with domain analysis fluency from Lessons 2-5; this lesson completes the 5-domain survey."

differentiation:
  extension_for_advanced: "Research the COSO 2013 Internal Control -- Integrated Framework. Map its five components (Control Environment, Risk Assessment, Control Activities, Information and Communication, Monitoring Activities) to the continuous monitoring agent specification you built in Exercise 5. Which COSO components does the agent address directly? Which require human governance above the agent?"
  remedial_for_struggling: "Focus on the Three Lines Model concept box. For each line, write one sentence explaining who is responsible and one sentence explaining how AI changes that responsibility. If you can explain why the monitoring agent sits in the second or third line (not the first), you have understood the governance architecture."

teaching_guide:
  lesson_type: "core"
  session_group: 3
  session_title: "The Advisory Resilience Domain"
  key_points:
    - "GRC is the domain least directly threatened by automation in the short term because its core product is advisory judgment -- understanding what a specific organisation needs, not applying a standard process to standard inputs"
    - "The Three Lines Model (updated by IIA in 2020 from 'Three Lines of Defence') organises risk and control responsibilities across operational management, oversight functions, and independent assurance"
    - "AI monitoring agents are most transformative in the second line (continuous compliance checking) and third line (continuous transaction testing), while the first line is transformed by AI embedded in operational systems"
    - "The professional shift is from testing controls periodically to overseeing AI agents that monitor controls continuously -- a fundamentally different skillset"
  misconceptions:
    - "Students may assume GRC is immune to AI disruption -- while advisory judgment is resilient, the monitoring and testing components are highly automatable, and the shift from periodic to continuous monitoring changes the professional role fundamentally"
    - "Students may confuse the Three Lines Model with a reporting hierarchy -- it describes functional responsibilities (who owns risk, who oversees risk, who assures risk management), not organisational reporting lines"
    - "Students may think continuous monitoring means the AI handles everything -- continuous monitoring generates alerts that require human interpretation, investigation, and response"
  discussion_prompts:
    - "If an AI agent monitors controls continuously and catches anomalies in real time, what happens to the annual internal audit plan? Does it become redundant, or does it change in nature?"
    - "GRC advisory is described as the domain where professional judgment is most resilient. But what happens if AI becomes capable of advising boards on governance best practice? Is advisory judgment permanently resilient, or just temporarily so?"
  teaching_tips:
    - "The Three Lines Model concept box is the lesson's anchor -- ensure students understand it before moving to the AI transformation discussion"
    - "Use the control design thinking framework (what does it prevent, what evidences it, what reveals failure, what should the agent do) as a concrete skill students practise, not just a description"
    - "Connect back to Domain 3 (Assurance) -- the continuous audit agent from Lesson 4 operates in the third line; the continuous controls monitoring agent in this lesson operates in the second line"
  assessment_checks:
    - question: "Why is GRC advisory the domain least directly threatened by AI automation?"
      expected_response: "Because the core product of GRC advisory is advisory judgment -- understanding what a specific organisation needs, interpreting regulatory requirements in context, and advising management and boards on appropriate responses. This is not a standard process applied to standard inputs. The monitoring and testing components of GRC are highly automatable, but the advisory layer above monitoring -- designing the monitoring programme, interpreting its findings, and advising on implications -- requires contextual judgment that AI does not replicate."
    - question: "Where does an AI continuous controls monitoring agent sit in the Three Lines Model?"
      expected_response: "The monitoring agent sits primarily in the second line (oversight functions) -- it monitors whether the first line (operational management) is managing risk effectively by checking transactions, process executions, and system events against the control framework. It can also support the third line (independent assurance) by providing continuous data for internal audit. The agent does not sit in the first line because it does not own or manage operational risk -- it monitors and reports on it."
---


# Domain 5 -- Governance, Risk and Compliance Advisory

> _"The question is not whether AI can test controls faster than a human. It can. The question is whether the controls being tested are the right controls -- and that is an advisory judgment no agent can make alone."_

In Lesson 5, you examined how AI transforms management accounting by shifting professionals from model maintenance to business partnering. Now you move to the final domain in our five-domain survey: the broadest, most heterogeneous, and -- for advisory professionals -- the most resilient.

Governance, Risk and Compliance (GRC) advisory encompasses governance structures, risk management frameworks, internal control design, and regulatory compliance management. It is the domain where the CA/CPA profession's advisory judgment is most directly the product being sold. A governance advisory engagement does not apply a standard process to standard inputs -- it assesses what a specific organisation needs, given its industry, regulatory environment, risk appetite, and board expectations. This makes GRC the domain least directly threatened by automation in the short term.

But "least threatened" does not mean "unchanged." The monitoring and testing components of GRC work are highly automatable, and the AI platforms that are transforming continuous monitoring are already in production. The professional shift is not from working to not working -- it is from testing controls periodically to overseeing AI agents that monitor controls continuously. That is a fundamentally different role requiring a fundamentally different set of skills.

## What This Domain Covers

GRC advisory is the broadest of the five CA/CPA domains, spanning four distinct sub-disciplines:

| Sub-Discipline            | What It Produces                                                                                | AI Impact                                                                                                                        |
| ------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Governance Advisory**   | Board governance frameworks, audit committee guidance, governance best practice recommendations | Low -- highly contextual, organisation-specific advisory                                                                         |
| **Risk Management**       | Enterprise risk frameworks, risk registers, risk appetite statements                            | Moderate -- risk identification and register maintenance automatable; framework design and appetite calibration require judgment |
| **Internal Controls**     | Control design, control testing, control remediation                                            | Moderate-High -- testing and monitoring highly automatable; control design requires understanding of business processes          |
| **Compliance Management** | Regulatory compliance monitoring, breach identification, remediation workflows                  | Moderate-High -- monitoring and reporting highly automatable; interpreting regulatory requirements in context requires judgment  |

:::info The Three Lines Model
The Three Lines Model (updated by the Institute of Internal Auditors in 2020 from "Three Lines of Defence") is the standard governance framework for organising risk and control responsibilities in an organisation.

**First Line -- Management.** The business units and operational functions that own and manage risk on a day-to-day basis. They implement controls and are responsible for identifying and managing risks within their own operations.

**Second Line -- Oversight Functions.** The risk management and compliance functions that set policy, define the risk appetite, and monitor whether the first line is managing risk effectively. They provide oversight and challenge, but do not own operational risks.

**Third Line -- Independent Assurance.** Internal audit, which provides independent assurance to the board and audit committee that the first and second lines are functioning effectively.

**Where AI transforms each line:**

- **First Line**: AI embedded in operational systems (ERP agents, process automation) transforms how business units execute controls
- **Second Line**: AI monitoring agents continuously check whether first-line controls are operating effectively -- this is the most immediately transformative capability
- **Third Line**: AI-driven transaction testing and anomaly detection transforms internal audit from periodic sampling to continuous assurance

The advisory CA/CPA role sits primarily in the second and third lines -- designing the frameworks, interpreting the findings, and advising management and the board.
:::

## Gen-AI Capabilities Available Now

Three GRC workflows are already well-served by Gen-AI tools.

**Policy drafting.** Governance and compliance policy documents -- risk appetite statements, internal control frameworks, compliance procedures, board governance policies -- follow structured templates and require the application of best practice guidance to the organisation's specific context. Gen-AI tools can draft these documents from templates, applying the relevant regulatory requirements and governance codes to the organisation's circumstances. The GRC professional reviews, ensures the policy reflects the organisation's actual risk appetite and operating context, and refines the language for the intended audience (board, management, operational staff).

**Risk assessment.** Enterprise risk assessment processes -- identifying risks, assessing their likelihood and impact, and producing a structured risk register -- are information synthesis tasks well suited to Gen-AI. The AI can gather information about the organisation's business and its regulatory environment, apply standard risk frameworks, and produce a structured risk register for management review. The professional validates the risk identification (has the AI missed industry-specific risks?), calibrates the assessments (are the likelihood and impact ratings appropriate?), and connects the register to the organisation's risk appetite framework.

**Compliance reporting.** Preparing compliance reports for regulators, boards, and audit committees -- summarising the compliance position, identifying breaches, and documenting remediation actions -- is documentation-intensive work amenable to AI assistance. The professional ensures the report accurately represents the compliance position and that the remediation actions are appropriate and achievable.

## Agentic AI Capabilities Approaching Production

Two agentic capabilities represent the most significant near-term transformation in GRC.

**Continuous controls monitoring agent.** This agent monitors transactions, process executions, and system events in real time, applying the control framework to identify exceptions, anomalies, and potential control failures. Rather than testing controls periodically (as internal audit traditionally does), it monitors continuously and generates alerts when controls appear to have failed. This is the most transformative agentic capability in the GRC domain because it changes the fundamental operating model from periodic assurance to continuous assurance.

**Autonomous compliance agent.** This agent tracks regulatory obligations, monitors the organisation's compliance position against each obligation, identifies gaps and potential breaches, and triggers remediation workflows -- all autonomously. The compliance professional shifts from manually tracking obligations to overseeing an agent that tracks them continuously.

## Real-World Deployments

Two platforms illustrate the current state of AI in GRC.

**ServiceNow AI Agents** ([servicenow.com/products/governance-risk-and-compliance.html](https://www.servicenow.com/products/governance-risk-and-compliance.html)) represent one of the closest current implementations of agentic GRC. ServiceNow AI agents autonomously monitor transactions, identify incidents, open cases, and initiate investigation workflows. They continuously evaluate controls against policy baselines and live operational signals, automatically create and route issues when deviations are detected, and trigger remediation playbooks. At Knowledge 2025, ServiceNow launched AI Control Tower -- a centralised command for governing AI agents across the enterprise.

**IBM watsonx.governance** ([ibm.com/products/watsonx-governance](https://www.ibm.com/products/watsonx-governance)) enables automated monitoring, compliance analysis, and governance workflows. IBM was named a Leader in the 2025 IDC MarketScape for Unified AI Governance Platforms. The platform monitors AI models for fairness, bias, and drift, with compliance accelerators covering the EU AI Act, ISO 42001, and NIST AI RMF. As of Q1 2026, watsonx.governance supports governance of AI agents themselves -- monitoring agent decisions, behaviours, and performance in production and triggering alerts when thresholds are breached.

:::info Curated Deployment Links

- **ServiceNow AI Agents for GRC**: [servicenow.com/products/governance-risk-and-compliance.html](https://www.servicenow.com/products/governance-risk-and-compliance.html) -- Continuous controls monitoring in production
- **IBM watsonx.governance**: [ibm.com/products/watsonx-governance](https://www.ibm.com/products/watsonx-governance) -- AI governance and compliance monitoring
  :::

## GRC: The Advisory Resilience Domain

GRC advisory roles focused on manual compliance testing and periodic control assessments face the most significant change. The shift is from testing controls periodically to overseeing AI agents that monitor controls continuously -- a fundamentally different role.

But the opportunity is the advisory layer above continuous monitoring:

| From (Periodic)                                    | To (Continuous)                                                         |
| -------------------------------------------------- | ----------------------------------------------------------------------- |
| Testing a sample of transactions quarterly         | Overseeing an agent that monitors all transactions continuously         |
| Producing a compliance report annually             | Reviewing real-time compliance dashboards and investigating alerts      |
| Designing controls on paper and testing them later | Designing controls with monitoring specifications built in from day one |
| Advising the board once per year on risk position  | Advising the board continuously as the risk position changes            |

The professional skills that become more valuable in this model are: interpreting what the monitoring data means, designing the monitoring programme that makes the agent effective, advising management and the board on the implications of what the agents are finding, and responding when agents identify significant issues.

:::tip Global Perspective
**COSO Framework (US origin, global adoption)**: The Committee of Sponsoring Organizations' 2013 Internal Control -- Integrated Framework provides the five-component model (Control Environment, Risk Assessment, Control Activities, Information and Communication, Monitoring Activities) used worldwide. AI continuous monitoring most directly transforms the Monitoring Activities component, but the Control Environment (tone at the top, governance culture) remains a human governance responsibility.

**UK Corporate Governance Code**: The UK Code (issued by the Financial Reporting Council) requires listed companies to maintain sound risk management and internal control systems, with annual board review. The shift to continuous AI monitoring changes how boards discharge this responsibility -- from reviewing periodic reports to overseeing continuous monitoring programmes.

**King IV (South Africa)**: The King IV Code on Corporate Governance emphasises integrated thinking and stakeholder inclusivity. Its technology governance principles (Principle 12: governing technology and information) are directly relevant to AI agent governance -- including governing the AI agents that govern the organisation's risk and compliance.

**Pakistan (SECP Code of Corporate Governance)**: The SECP Code requires listed companies to establish audit committees, internal audit functions, and risk management frameworks. The Pakistan Institute of Corporate Governance (PICG) provides governance training and advisory. AI monitoring tools must be deployed within the SECP's governance requirements.
:::

### Practice Exercise 5: Continuous Controls Monitoring Specification (25 min)

**What you will build:** A SKILL.md specification for a continuous controls monitoring agent covering three financial controls.

**Requirements:** Claude (any interface). Knowledge of any organisation's key financial controls. If you need a ready-made entity, download the Crescent Textiles profile from the [companion repository](https://github.com/panaversity/ca-cpa-domain-agents/releases/latest) (`ca-cpa-exercise-data.zip` → `exercises/entity-profiles/crescent-textiles.md`) — it includes key risk areas and regulatory obligations.

1. Choose three financial controls for a specific organisation type (e.g., a bank, a retail company, a textile manufacturer). Ask Claude: _"For each control, specify: (a) what the control is designed to prevent, (b) what data would evidence that the control has been executed, (c) what anomaly would indicate the control may have failed, and (d) what the monitoring agent should do when it detects that anomaly."_

2. Ask: _"Design a continuous monitoring programme for these three controls. What is the monitoring frequency? What are the escalation thresholds? What actions should the agent take autonomously, and what should it escalate to a human?"_

3. Ask: _"Write this monitoring programme as a SKILL.md specification for an autonomous GRC monitoring agent. Include: the control objectives, the monitoring rules, the anomaly detection thresholds, and the escalation routing."_

4. Ask: _"In the Three Lines Model, where does this monitoring agent sit -- first, second, or third line? What are the implications for the human roles in each line if this monitoring becomes continuous?"_

**Check your work:** You should have (a) three controls with complete specifications (prevention objective, evidence data, failure anomaly, agent response), (b) a monitoring programme with frequencies and escalation thresholds, (c) a SKILL.md specification encoding the programme, and (d) a governance analysis placing the agent in the Three Lines Model.

**The key learning:** The discipline being built is control design thinking -- specifying precisely what a control is supposed to prevent, what evidence would show it has worked, and what anomaly would reveal it has failed. This is the skill the GRC professional must develop as AI takes over the testing: designing the monitoring programme that makes the agent effective.

## Try With AI

Use these prompts in Cowork, Claude Code, or your preferred AI assistant to explore this lesson's concepts.

### Prompt 1: Control Design Thinking

```
I work in [YOUR INDUSTRY -- e.g., banking, manufacturing, retail,
professional services] in Pakistan.

Choose three key financial controls relevant to my industry. For each
control, specify:

1. Prevention objective -- what risk does this control mitigate?
2. Evidence -- what data proves the control was executed?
3. Failure signal -- what anomaly suggests the control has failed?
4. Agent response -- what should a monitoring agent do when it
   detects the failure signal?

Then explain: if this monitoring runs continuously (not quarterly),
how does the role of the internal audit team change?

Present your answer as a table with one row per control.
```

**What you are learning:** Control design thinking is the core professional skill in AI-augmented GRC. By specifying controls with the precision required for an AI agent to monitor them, you are learning to think like a monitoring programme designer -- not just a control tester. The question about internal audit role change connects the technical specification to the professional transformation.

### Prompt 2: GRC Agent Governance

```
An organisation deploys a continuous controls monitoring agent that
monitors all financial transactions in real time. The agent:
- Flags transactions exceeding PKR 5 million without dual approval
- Detects patterns suggesting potential fraud (unusual timing,
  round-number transactions, new payees above threshold)
- Generates weekly compliance summary reports
- Escalates anomalies scoring above 0.8 risk threshold to the
  compliance officer

Using the Three Lines Model:
1. Which line does this agent operate in? Justify your answer.
2. What human roles are needed in each line to make this agent
   effective?
3. What happens if the agent generates too many false positives?
   Who decides to adjust the thresholds?
4. Who governs the agent itself -- ensuring it is monitoring the
   right controls with appropriate thresholds?

Frame your answer for a board audit committee presentation.
```

**What you are learning:** Deploying an AI monitoring agent is not just a technology decision -- it is a governance decision. By placing the agent in the Three Lines Model and identifying the human roles around it, you are learning that continuous monitoring creates new governance responsibilities (who governs the AI that governs the controls?) rather than eliminating governance work.

### Prompt 3: Advisory Resilience Assessment

```
I am a [YOUR GRC ROLE -- e.g., internal auditor, compliance officer,
risk manager, governance advisor] at a [COMPANY TYPE] in [COUNTRY].

Map my current work across these categories:
1. Manual testing and data gathering (mechanical)
2. Report writing and documentation (semi-mechanical)
3. Analysis, interpretation, and investigation (judgment-intensive)
4. Advisory -- advising management/board on implications (high judgment)

For each category:
- Estimate my current time percentage
- Estimate the change with continuous AI monitoring deployed
- Identify which tasks disappear, which transform, and which become
  more important

Then answer: what new skills do I need to develop to thrive in the
continuous monitoring model? Be specific -- not "learn about AI" but
concrete professional skills like "monitoring programme design" or
"threshold calibration."
```

**What you are learning:** GRC is described as the domain where advisory judgment is most resilient -- but resilience is not automatic. By mapping your specific role against the automation spectrum, you identify which parts of your current work face displacement (manual testing, routine reporting) and which new skills you need to develop (monitoring programme design, agent governance, threshold calibration) to remain valuable in the continuous monitoring model.


---

Continue to [Lesson 7: The CA/CPA Plugin Ecosystem -->](./07-ca-cpa-plugin-ecosystem.md)
