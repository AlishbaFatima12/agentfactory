# Chapter 19: AI Transformation of CA/CPA Practice Areas

---

*"The accountant who automates their own work is not being replaced. They are being promoted — from technician to strategist. The accountant who waits to be automated is not being cautious. They are being obsolete."*

---

## Why CA/CPA Practice Is the Most Consequential AI Transformation in Professional Services

Chapters 17 and 18 established the tools and architecture for AI-native financial work: the Claude in Excel add-in, the financial-services plugins, the Cowork orchestration platform, and the Intent-Driven Financial Architecture that makes models readable by both humans and agents. All of that capability was framed in terms of financial analysis — the investment banker building a DCF, the FP&A manager running variance analysis, the equity research analyst updating an earnings model.

This chapter steps back and examines the broader professional context in which all of that work occurs: the world of Chartered Accountants (CAs) and Certified Public Accountants (CPAs).

The CA/CPA profession spans five distinct practice domains — Accounting and Financial Reporting, Tax and Non-Assurance Advisory, Assurance Services, Management Accounting and Financial Management, and Governance, Risk and Compliance Advisory. Across all five, AI is not simply changing how specific tasks get done. It is restructuring the economics of professional services, redefining what constitutes expert judgment, and creating a growing separation between practitioners who have integrated AI into their practice and those who have not.

The stakes are higher here than in almost any other professional domain, for three reasons.

First, **the regulatory and legal consequences of error are severe**. A tax filing with a wrong computation is not a quality problem — it is a compliance violation. An audit report that fails to detect a material misstatement is not a missed deliverable — it is a professional liability. The tools that assist CAs and CPAs must not introduce errors faster than they eliminate them, which imposes a discipline on AI adoption that does not exist in most other knowledge work domains.

Second, **the volume of routine work is enormous**. The CA/CPA profession processes millions of transactions, thousands of tax returns, and hundreds of audit files annually. The portion of this work that is rule-based, pattern-matching, and document-intensive — exactly the tasks where AI is most capable — is disproportionately large relative to the portion that requires genuine professional judgment. This creates both an enormous efficiency opportunity and a genuine question about the future composition of CA/CPA practice.

Third, **the transition from Generative AI to Agentic AI is already underway** in this domain. The platforms documented in this chapter — SAP Joule, KPMG Clara, Thomson Reuters CoCounsel, ServiceNow AI Agents — are not experimental prototypes. They are production deployments that are actively transforming the economics of CA/CPA practices that adopt them. The profession does not have the luxury of watching from a distance.

This chapter does three things. Part One provides a rigorous analysis of AI impact across all five CA/CPA practice domains, drawing on current real-world deployments and characterising both the Gen-AI capabilities available now and the agentic AI capabilities approaching production. Part Two shows how Anthropic Cowork and its plugin ecosystem can be deployed across each domain — giving practitioners a concrete, deployable toolkit that works with the same Cowork platform introduced in Chapter 17. Part Three covers enterprise deployment: how CA/CPA firms build domain agents that encode their specific professional standards, jurisdiction-specific requirements, and institutional knowledge into reusable, auditable agent skills.

Throughout, when a professional accounting concept or regulatory term appears, it is explained in a Concept Box before you are asked to use it. Every capability is taught by worked example. Each domain closes with a Practice Exercise.

---

> **🔑 THE CORE DISTINCTION FOR CA/CPA PRACTICE: Generative AI vs. Agentic AI**
>
> **Generative AI** in CA/CPA practice acts as an intelligent assistant — it drafts, researches, summarises, and analyses when you prompt it. It operates one interaction at a time. The CA/CPA provides every input, reviews every output, and decides every next step. Examples: Claude drafting a tax research memo, ChatGPT summarising audit documentation, CoCounsel analysing a tax position.
>
> **Agentic AI** in CA/CPA practice acts as an autonomous executor — it takes a goal, creates a plan, executes multi-step workflows, and delivers finished work with minimal human intervention. It operates across multiple tools, data sources, and time periods without waiting for prompts at each step. Examples: an autonomous reconciliation agent that runs the month-end close nightly, a continuous audit agent that monitors all transactions in real time and flags anomalies, a compliance agent that files regulatory returns automatically when they fall due.
>
> The distinction matters because the profession's regulatory frameworks, liability structures, and quality control requirements were designed for a world where a human professional made every consequential decision. Agentic AI challenges this model in ways that Generative AI does not. Understanding where you are on this spectrum — and where each tool sits — is the essential first step.

---

## The Five Domains: AI Impact Overview

The table below summarises AI impact across the five CA/CPA practice domains, ranked by the degree of disruption already underway and the pace at which agentic capabilities are approaching production deployment.

| Rank | Domain | Sub-categories | AI Impact Trajectory |
|---|---|---|---|
| 1 | **Accounting and Financial Reporting** | Financial statement preparation; Bookkeeping; Corporate reporting | Highest — routine transaction processing and reporting already automatable |
| 2 | **Tax and Non-Assurance Advisory** | Tax compliance; Tax advisory; Corporate finance; Restructuring | High — compliance work highly automatable; advisory less so |
| 3 | **Assurance Services** | External audit; Internal audit; Other assurance | High — transaction analysis automatable; audit judgment not yet |
| 4 | **Management Accounting and Financial Management** | FP&A; Performance management; Treasury | Moderate-high — analytical work automatable; strategic interpretation less so |
| 5 | **Governance, Risk and Compliance Advisory** | Governance; Risk management; Internal controls; Compliance | Moderate — monitoring automatable; advisory judgment remains human |

---

# Part One: The Five CA/CPA Practice Domains — AI Impact Analysis

---

## Domain 1: Accounting and Financial Reporting (Highest AI Impact)

### What This Domain Covers

Accounting and financial reporting is the foundation of the CA/CPA profession. It encompasses the day-to-day recording of financial transactions (bookkeeping), the preparation of financial statements (income statement, balance sheet, cash flow statement), and the production of corporate reporting packages for management, board, and external stakeholders. In most CA/CPA practices and finance functions, this domain accounts for the largest proportion of staff time and — because so much of it is rule-based and document-intensive — the largest proportion of work that AI can execute autonomously.

### The Gen-AI Capabilities Available Now

Three categories of Generative AI capability are production-ready for this domain today:

**Financial statement drafting.** An AI assistant with access to trial balance data can produce a draft set of financial statements — income statement, balance sheet, cash flow statement — in minutes. The agent applies the relevant accounting standard (IFRS or US GAAP) to determine presentation, calculates subtotals and totals, and generates the notes to the financial statements based on the underlying data. The accountant reviews, adjusts, and approves. The drafting work is no longer the constraint.

**Disclosure drafting.** Financial statement notes and disclosures are among the most time-consuming elements of the reporting process. An AI assistant can draft standard disclosures — accounting policy notes, related party disclosures, segment reporting, going concern language — from templates calibrated to the applicable standard and the entity's specific circumstances. Non-standard disclosures (new transactions, first-time adoptions, complex estimates) still require significant professional judgment.

**Accounting research.** When a transaction or event raises a question about the correct accounting treatment, the research process — identifying the relevant standard, reading the guidance, applying it to the specific facts — is a strong Gen-AI use case. The AI can navigate the full body of IFRS or US GAAP standards, identify the relevant provisions, and produce a structured technical memo outlining the treatment and the basis for it. The accountant evaluates the memo rather than conducting the research from scratch.

---

> **📊 CONCEPT BOX: IFRS vs. US GAAP**
>
> **IFRS (International Financial Reporting Standards)** is the accounting framework used by listed companies in over 140 countries, including the UK, EU, Australia, Canada, and most of Asia and the Middle East. IFRS is principles-based: it sets out broad principles and requires preparers to exercise judgment in applying them to specific transactions.
>
> **US GAAP (Generally Accepted Accounting Principles)** is the accounting framework mandated for listed companies in the United States by the SEC. US GAAP is rules-based: it contains extensive specific guidance for particular transactions and industries.
>
> **Why this matters for AI:** Rules-based standards are more amenable to automation — the agent can look up the rule and apply it. Principles-based standards require the agent to exercise judgment in applying general principles to specific facts — a harder problem. Both IFRS and US GAAP are available to AI research tools, but the quality of AI output is higher for clear-cut rule application than for complex judgment calls.

---

### The Agentic AI Capabilities Approaching Production

**Autonomous financial reporting agent.** This is an agent that executes the month-end close process autonomously: extracting trial balance data from the ERP, running automated reconciliations, posting standard journal entries, preparing draft financial statements, flagging exceptions for human review, and delivering a completed reporting package. The human role shifts from executing the close to reviewing the agent's output and handling exceptions.

**Autonomous transactions recording agent.** This agent processes incoming transactions — invoices, receipts, bank entries, intercompany transactions — classifying them to the correct accounts, applying accruals and deferrals, and maintaining a continuously updated general ledger. The human role shifts from data entry and routine classification to exception handling and judgment calls on non-standard transactions.

### Real-World Deployments

**SAP Joule** (https://www.sap.com/products/artificial-intelligence/joule.html) is currently the most advanced enterprise AI deployment in accounting. Embedded in SAP's ERP platform, Joule can analyse financial data, investigate variances, assist reconciliations, and guide close processes. The architecture is explicitly designed to evolve from AI-assisted to autonomous accounting workflows.

**Oracle Fusion Cloud ERP AI and Agent Studio** (https://www.oracle.com/artificial-intelligence/agent-studio/) embeds AI across account reconciliation, anomaly investigation, and close management. Oracle's Agent Studio — launched in 2025 — allows enterprise teams to build autonomous workflow agents directly within the Oracle platform, signalling a clear trajectory toward agentic financial reporting.

**Numeric AI** (https://www.numeric.io/) focuses specifically on the financial close process, using AI to automatically analyse reconciliations, detect anomalies, and propose adjustments. Human approval remains required at this stage, but the volume of manual work is significantly reduced.

### Practitioner and Service Implications

For individual practitioners, Domain 1 represents the most significant role restructuring in the near term. Junior and semi-senior roles whose primary function is transaction processing, reconciliation, and routine reporting preparation face the highest displacement risk. The CA/CPA who survives and thrives in this environment is the one who shifts from preparing financial statements to interpreting them — from executing the close to owning the judgment calls the agent cannot make.

At the service level, fully automated reporting platforms are already emerging as a business model. The subscription-based reporting service — where an accounting firm delivers a monthly financial reporting package through an AI-powered platform rather than through staff time — is a structural change in how accounting services are priced and delivered.

---

#### Practice Exercise 1: Automating the Month-End Close with Cowork

**What you need:** Cowork (Team or Enterprise plan), Claude Desktop, trial balance data in Excel or CSV format. 35 minutes.

1. Place your trial balance data in a Cowork folder. Ask Claude: *"Review this trial balance. Identify the ten largest account balances and, for each, tell me what accounting standard determines how it should be classified on the balance sheet — current or non-current, and why."*

2. Ask: *"Which of these accounts would require a reconciliation as part of the month-end close process? For each, describe what the reconciliation would verify and what data source would support it."*

3. Ask: *"Draft the income statement and balance sheet from this trial balance data, following IFRS presentation requirements. Flag any line item where you have made an assumption that needs my confirmation."*

4. Ask: *"Which journal entries would typically be required at month-end that are not yet reflected in this trial balance — accruals, deferrals, depreciation? List them with the likely debit and credit entries."*

5. Review the output. For each item where Claude has flagged an assumption or uncertainty, write a one-sentence instruction that would resolve it — this is the raw material for a month-end close SKILL.md.

**The key learning:** This exercise maps the boundary between what the agent can execute autonomously and what requires your professional judgment. Every assumption Claude flags is a judgment call that your SKILL.md needs to encode — or a question it should always escalate to you.

**Target time:** 35 minutes.

---

## Domain 2: Tax and Non-Assurance Advisory (High AI Impact)

### What This Domain Covers

Tax and non-assurance advisory is the second-highest impact domain and in many CA/CPA practices the highest-revenue one. It encompasses tax compliance (preparing and filing tax returns for individuals, companies, and trusts), tax advisory (advising on tax-efficient structures, transactions, and planning), corporate finance advisory (M&A, capital raising, transaction due diligence), and restructuring (advising companies in financial difficulty on options for rescue, reconstruction, or orderly wind-down).

The domain is bifurcated by AI impact: compliance work — which is rule-intensive, document-heavy, and highly standardised — is highly automatable. Advisory work — which requires understanding complex facts, applying nuanced judgment to ambiguous legal positions, and building persuasive arguments — is much less so.

### The Gen-AI Capabilities Available Now

**Tax research.** Navigating the tax code, case law, rulings, and interpretive guidance to answer a specific technical question is one of the strongest Gen-AI use cases in professional services. The AI can read and synthesise the full body of relevant law, identify the applicable provisions, apply them to the specific facts, and produce a structured technical memo. For straightforward questions, this replaces hours of research. For complex questions with genuinely ambiguous answers, it produces a first draft that the tax professional refines and challenges.

**Tax computation.** For standard individual and corporate tax returns, the computational work — applying rates, thresholds, reliefs, and credits to financial data — is highly amenable to automation. The agent applies the tax rules to the client's financial data and produces a computed liability. The CA/CPA reviews the computation, applies professional judgment on any positions where the law is unclear, and signs off.

**Due diligence analysis.** Financial due diligence for M&A transactions — reviewing target company accounts, identifying financial risks and adjustments, producing a due diligence report — involves significant document review and analysis. Gen-AI tools can read large volumes of financial documents, extract relevant data, identify anomalies, and produce structured summaries far faster than human teams.

---

> **📊 CONCEPT BOX: Tax Compliance vs. Tax Advisory**
>
> **Tax compliance** is the preparation and filing of tax returns — computing the tax liability according to the tax laws that apply to the entity and its transactions, and submitting the return to the tax authority. Compliance work is backward-looking, rule-based, and heavily document-intensive. It is the portion of tax practice most immediately threatened by automation.
>
> **Tax advisory** is the provision of advice on how to structure transactions, operations, and ownership to achieve tax efficiency within the law. Advisory work is forward-looking, requires deep understanding of the client's commercial circumstances, and often involves taking and defending positions on ambiguous points of law. It is the portion of tax practice where professional judgment remains most essential — and where AI is most useful as a research and drafting tool rather than an autonomous decision-maker.
>
> The key implication: as compliance work is automated, the value proposition of tax CA/CPA practices shifts toward advisory. Practitioners who have invested only in compliance skills face a shrinking market. Practitioners who combine advisory capability with AI-augmented delivery have an expanding one.

---

### The Agentic AI Capabilities Approaching Production

**Autonomous tax compliance agent.** This agent executes the full tax return preparation process: extracting financial data from the client's accounting system, applying the relevant tax rules, computing the liability, preparing the return, identifying any positions that require disclosure, and producing a draft return for professional review and sign-off before filing. The human role is review and sign-off, not preparation.

**Due diligence agent.** For M&A transactions, this agent autonomously reviews the target company's financial records, identifies the key financial risks and adjustments, and produces a structured due diligence report. It can process documents at a speed no human team can match.

**Restructuring simulation agent.** For companies in financial difficulty, this agent models different restructuring scenarios — voluntary arrangement, scheme of arrangement, pre-pack administration — and projects the financial outcomes for different stakeholder groups under each scenario.

### Real-World Deployments

**Thomson Reuters CoCounsel** (https://tax.thomsonreuters.com/en/products/cocounsel) is currently the most advanced AI tool for tax professionals. It performs autonomous tax research, analyses complex tax positions, drafts memoranda, and reviews client documents. The tool significantly reduces the time required for tax research and advice preparation. Full autonomous compliance execution — preparing and filing returns without human review — is the next stage of development.

**PwC Agent OS** (https://www.pwc.com/gx/en/issues/artificial-intelligence/agent-os.html) is one of the first Big Four deployments of genuinely agentic AI in professional services. It enables autonomous execution of internal workflows including research, analysis, and advisory preparation — establishing the architecture for the autonomous tax advisory firm.

**Intuit Assist** (https://www.intuit.com/blog/ai/intuit-assist/) is automating tax preparation at scale for small businesses and individuals, demonstrating how the economics of compliance work change when the per-return cost approaches zero.

### Practitioner and Service Implications

Tax compliance roles — particularly those focused on individual and small business returns — face the most immediate displacement. The economic model of the mid-market tax practice, which has historically been built on compliance billings, is under the most structural pressure of any CA/CPA service line.

The response that creates opportunity rather than exposure is the shift to advisory-led, AI-augmented practice: using AI tools to deliver compliance at dramatically lower cost (and higher margin) while investing the capacity freed up in higher-value advisory relationships. The CA/CPA who can say to a client "our AI handles your compliance, and I bring you the tax planning advice that no software can give you" is offering a better value proposition than the one who says "we prepare your return."

---

#### Practice Exercise 2: Tax Research and Computation with Cowork

**What you need:** Cowork or Claude (any plan). A hypothetical or real tax scenario. 25 minutes.

1. Present a tax research question: *"A Pakistani company has earned dividend income from a foreign subsidiary. What are the withholding tax implications under Pakistan's tax law, and what reliefs or exemptions might apply? Structure your answer as a technical memo with: the issue, the relevant statutory provisions, the analysis, and the conclusion."*

2. Review the memo. Ask: *"What are the two most uncertain points in this analysis — where the law is ambiguous or the facts would change the answer? For each, what additional information would you need to confirm the position?"*

3. Now test computation: provide a simple set of financial data (total income, deductible expenses, applicable rate) and ask: *"Compute the corporate tax liability. Show the computation line by line. Flag any line item where I need to confirm the applicable rate or the deductibility of the expense."*

4. Ask: *"If I wanted to automate this computation for our standard client tax returns, what SKILL.md instructions would I write? Draft the key instructions covering: the data inputs required, the computation sequence, and the conditions that require escalation to a tax professional."*

**The key learning:** Tax computation AI is only as reliable as its understanding of the applicable rules for the specific jurisdiction and entity type. Step 4 is the most important: the SKILL.md you draft is the difference between a generic tax computation tool and one calibrated to your practice's specific client base and jurisdiction.

**Target time:** 25 minutes.

---

## Domain 3: Assurance Services (High AI Impact)

### What This Domain Covers

Assurance services are the core of the CA/CPA profession's public interest role. They encompass external audit (the independent examination of financial statements to give users confidence that they are true and fair), internal audit (the internal function that assesses the effectiveness of governance, risk management, and internal controls), and other assurance engagements (reviews, agreed-upon procedures, and specialist assurance on non-financial information). Assurance is the domain most protected by regulation — audit is a statutory function with specific legal requirements — and also the domain where the consequences of AI failure are most severe.

### The Gen-AI Capabilities Available Now

**Audit documentation.** The documentation burden in external audit — working papers, audit programmes, risk assessments, conclusions — is enormous and largely standardised. Gen-AI tools can draft standard working paper sections, populate testing templates, summarise the results of audit procedures, and produce first drafts of conclusions. The auditor reviews and signs off. The documentation time is dramatically reduced.

**Contract analysis.** Reviewing contracts for key terms (revenue recognition implications, lease classification, contingent liabilities, related party transactions) is a high-volume, document-intensive task in audit. Gen-AI tools can read contracts, extract relevant clauses, and flag items requiring auditor attention far faster than manual review.

**Risk identification and analysis.** Producing the risk assessment for an audit engagement — identifying what could go wrong in the financial statements, assessing the likelihood and magnitude of potential misstatement, and designing the audit response — draws heavily on understanding the client's business, its industry, and its control environment. Gen-AI tools can assist by synthesising publicly available information about the client and its sector, identifying industry-specific risks, and producing a structured risk register for auditor review.

---

> **📊 CONCEPT BOX: Audit Materiality and Sampling**
>
> **Materiality** is the threshold below which a misstatement in a financial statement is considered unlikely to influence the decisions of users. Auditors set a materiality threshold — typically 5% of pre-tax profit or 1% of revenue, depending on the entity — and design their audit work to provide reasonable assurance that no misstatement above this threshold is present.
>
> **Audit sampling** is the practice of examining a subset of transactions rather than every transaction, to form a conclusion about the full population. Traditional audit sampling is statistical — selecting a representative sample, testing it, and extrapolating results.
>
> **Why AI changes both:** An AI audit agent does not sample — it can examine every transaction in the population. This shifts the audit from probabilistic (we tested a sample and found no errors) to deterministic (we tested every transaction and found these specific anomalies). This is a fundamental change in the epistemics of audit assurance, with significant implications for audit standards, methodology, and the nature of the auditor's opinion.

---

### The Agentic AI Capabilities Approaching Production

**Autonomous audit agent.** This agent executes audit procedures autonomously — extracting data from the client's accounting system, running analytical procedures, testing reconciliations, selecting and testing samples, documenting the results of procedures, and producing a draft audit file for senior review. The audit partner reviews conclusions and signs the audit opinion; much of the execution work is autonomous.

**Continuous audit agent.** Rather than conducting an annual audit after the year-end, this agent monitors financial transactions in real time — flagging anomalies, unusual patterns, and potential misstatements as they occur. This shifts the audit from an annual retrospective exercise to a continuous assurance function.

### Real-World Deployments

**KPMG Clara** (https://kpmg.com/xx/en/home/services/audit/clara.html) is one of the most advanced audit AI platforms in production. Clara analyses entire populations of transactions, identifies anomalies, and assists audit execution at scale. The platform is explicitly designed to evolve toward continuous auditing capability.

**MindBridge AI** (https://www.mindbridge.ai/) uses AI to autonomously analyse financial transactions, identify anomalies, and flag potential risks. MindBridge does not execute full audit procedures autonomously, but it transforms audit execution from manual sampling to AI-driven population analysis — which is the critical first step.

### Practitioner and Service Implications

Junior audit roles — those focused on document collection, data extraction, sample testing, and working paper preparation — face the most immediate displacement. Senior roles shift from supervising execution to reviewing AI outputs, exercising professional judgment on complex areas, and managing client relationships.

The economics of audit practice change significantly. An audit that currently requires 500 staff hours might require 150 hours of senior professional review time and 350 hours of AI execution. The firm that can price this productively — and convince regulators that AI execution meets the required standard of evidence — will have a significant competitive advantage.

---

#### Practice Exercise 3: AI-Assisted Audit Risk Assessment

**What you need:** Cowork and Claude Desktop. Publicly available financial information about any listed company. 30 minutes.

1. Choose a listed company in a sector you know. Ask Claude: *"Prepare an audit risk assessment for [Company Name] based on its most recent annual report. Structure the output as: (1) significant risks of material misstatement for each major financial statement line, (2) assessment of inherent risk for each significant risk, (3) the audit procedures most likely to address each risk effectively."*

2. Ask: *"For the revenue recognition line, what are the three most important questions an auditor should answer to determine whether revenue has been recognised correctly under IFRS 15? What evidence should the auditor gather to answer each question?"*

3. Ask: *"If you were designing a continuous audit monitoring programme for this company, which three transaction types or account balances would you monitor in real time, and what anomalies would trigger an alert? Write this as if you were specifying it for an AI monitoring agent."*

4. Write a SKILL.md instruction for the risk identification step: encode the three most important sector-specific audit risks for this company's industry, with the indicators that would cause each risk to be elevated.

**The key learning:** The discipline being built is audit risk thinking — the auditor's core professional skill of identifying what could go wrong before designing how to test it. AI executes the testing; the auditor frames the risk. Exercise 3 is about developing the framing skill, using AI to stress-test and extend your thinking rather than to replace it.

**Target time:** 30 minutes.

---

## Domain 4: Management Accounting and Financial Management (Moderate-High AI Impact)

### What This Domain Covers

Management accounting and financial management encompasses the internal finance function: Financial Planning and Analysis (FP&A), which produces budgets, forecasts, and variance analysis; performance management, which tracks key metrics and supports management decision-making; and treasury, which manages the organisation's cash, funding, and financial risk. Unlike financial reporting and audit, which are primarily external-facing and regulatory, management accounting is primarily internal-facing and strategic.

This is the domain most directly addressed by the capabilities in Chapters 17 and 18 — the financial modelling tools, the FP&A plugins, and the IDFA methodology all apply here. This chapter adds the CA/CPA professional context: the regulatory standards, professional judgment requirements, and organisational governance frameworks that shape how these tools are used in practice.

### The Gen-AI Capabilities Available Now

**Variance analysis.** Analysing the difference between actual financial results and budget or forecast, decomposing the variance into volume, price, and mix components, and producing management commentary explaining the key drivers — this is one of the strongest Gen-AI use cases in management accounting. The AI reads the financial data, performs the decomposition, and drafts the commentary. The management accountant reviews, adds strategic context, and refines the framing.

**Budgeting.** Building the annual budget involves consolidating inputs from business units, applying standard assumptions, and modelling the financial consequences of different scenarios. The mechanical work — consolidating numbers, running sensitivities, formatting output — is highly automatable. The judgment work — challenging assumptions, stress-testing plans, and recommending targets — remains with the professional.

**Forecasting.** Rolling forecasts require the management accountant to update projections regularly based on new information about trading performance and the external environment. The analytical work is amenable to automation; the interpretation and challenge of management's assumptions requires professional judgment.

### The Agentic AI Capabilities Approaching Production

**Autonomous FP&A agent.** This agent collects actual financial data from source systems, updates the rolling forecast model, identifies significant variances from prior forecast, generates explanatory commentary, and distributes a completed management reporting pack — without human involvement in the mechanical steps. The CFO reviews and challenges the output; the agent has assembled it.

**Autonomous forecasting agent.** Using historical data, market signals, and management inputs, this agent continuously updates financial forecasts and alerts finance leadership when projections move significantly from the approved plan.

### Real-World Deployments

**Pigment AI** (https://www.pigment.com/) integrates AI to automate financial forecasting, scenario modelling, and performance analysis. It represents the current leading edge of AI-assisted FP&A, with an explicit roadmap toward greater autonomy.

**Oracle AI Financial Planning** (https://www.oracle.com/performance-management/) integrates predictive AI into planning and forecasting processes, building on Oracle's ERP platform to automate the mechanical steps of financial planning.

### Practitioner and Service Implications

Financial analyst roles — those focused on model maintenance, data consolidation, and routine variance reporting — face significant displacement. Strategic finance roles — those focused on business partnering, challenge of assumptions, and translating financial insight into business decisions — are more resilient and arguably more valuable when supported by AI-augmented analysis.

---

#### Practice Exercise 4: FP&A Workflow with Cowork

**What you need:** Cowork, a financial dataset (actual vs. budget P&L for any period). 30 minutes.

This exercise connects directly to the IDFA methodology from Chapter 18.

1. Place your P&L data in a Cowork folder. Using the IDFA naming conventions from Chapter 18, ask Claude: *"Structure this P&L data as an IDFA-compliant variance analysis model. Name all inputs using the Inp_ prefix convention. For the revenue and gross margin lines, decompose variances into volume, price, and mix components."*

2. Ask: *"Write the CFO-ready narrative for this variance. The CFO wants: the three most significant drivers of the overall P&L variance, whether each driver is within or outside management control, and the forward implication — does this variance change the full-year forecast?"*

3. Ask: *"If this variance pattern continued for the next three months, what would be the full-year impact on EBITDA? Run this as a scenario through the model and show the IDFA what-if workflow."*

4. Ask: *"What SKILL.md instructions would encode our CFO's preferred variance bridge format — the volume/price/mix decomposition, the within/outside-management-control distinction, and the forward implication structure? Draft the key instructions."*

**The key learning:** The IDFA architecture from Chapter 18 is not abstract when applied to management accounting — it is the specific discipline of separating the budget assumption (an input) from the calculation of the variance (a formula that must read as a business rule). Step 4 makes this concrete: the SKILL.md instruction you draft is the CFO's preferred format encoded as reusable agent instruction.

**Target time:** 30 minutes.

---

## Domain 5: Governance, Risk and Compliance Advisory (Moderate AI Impact)

### What This Domain Covers

Governance, Risk and Compliance (GRC) advisory encompasses the advisory services CA/CPA firms and in-house professionals provide around governance structures, risk management frameworks, internal control design, and regulatory compliance management. It is the broadest and most heterogeneous of the five domains — governance advisory involves advising boards and audit committees on best practice; risk management involves designing enterprise risk frameworks; internal controls involves designing and testing the controls that prevent errors and fraud; compliance management involves ensuring the organisation meets its legal and regulatory obligations.

GRC is the domain least directly threatened by automation in the short term, because the core product is advisory judgment — understanding what a specific organisation needs, rather than applying a standard process to standard inputs. But the monitoring and testing components of GRC work are highly automatable, and the AI platforms that are transforming monitoring are already in production.

### The Gen-AI Capabilities Available Now

**Policy drafting.** Governance and compliance policy documents — risk appetite statements, internal control frameworks, compliance procedures, board governance policies — follow structured templates and require the application of best practice guidance to the organisation's specific context. Gen-AI tools can draft these documents from templates, applying the relevant regulatory requirements and governance codes to the organisation's circumstances.

**Risk assessment.** Enterprise risk assessment processes — identifying risks, assessing their likelihood and impact, and producing a structured risk register — are information synthesis tasks well suited to Gen-AI. The AI can gather information about the organisation's business and its regulatory environment, apply standard risk frameworks, and produce a structured risk register for management review.

**Compliance reporting.** Preparing compliance reports for regulators, boards, and audit committees — summarising the compliance position, identifying breaches, and documenting remediation actions — is documentation-intensive work amenable to AI assistance.

---

> **📊 CONCEPT BOX: The Three Lines of Defence**
>
> The Three Lines of Defence is the standard governance framework for organising risk and control responsibilities in an organisation.
>
> **First Line:** The business units and operational functions that own and manage risk on a day-to-day basis. They implement controls and are responsible for identifying and managing risks within their own operations.
>
> **Second Line:** The risk management and compliance functions that set policy, define the risk appetite, and monitor whether the first line is managing risk effectively. They provide oversight and challenge, but do not own operational risks.
>
> **Third Line:** Internal audit, which provides independent assurance to the board and audit committee that the first and second lines are functioning effectively.
>
> **AI's role in each line:** AI agents are most immediately transformative in the second line — automating continuous monitoring and compliance checking — and in the third line — automating transaction testing and anomaly detection. The first line is transformed by AI embedded in operational systems (ERP AI agents, process automation). The advisory CA/CPA role sits primarily in the second and third lines.

---

### The Agentic AI Capabilities Approaching Production

**Continuous controls monitoring agent.** This agent monitors transactions, process executions, and system events in real time, applying the control framework to identify exceptions, anomalies, and potential control failures. Rather than testing controls periodically (as internal audit traditionally does), it monitors continuously and generates alerts when controls appear to have failed. This is the most transformative agentic capability in the GRC domain.

**Autonomous compliance agent.** This agent tracks regulatory obligations, monitors the organisation's compliance position against each obligation, identifies gaps and potential breaches, and triggers remediation workflows — all autonomously.

### Real-World Deployments

**ServiceNow AI Agents** (https://www.servicenow.com/products/now-assist.html) currently represent the closest production deployment to truly agentic GRC. ServiceNow AI agents autonomously monitor transactions, identify incidents, open cases, and initiate investigation workflows. This is continuous controls monitoring in production, not in prototype.

**IBM Watsonx Governance** (https://www.ibm.com/products/watsonx-governance) enables automated monitoring, compliance analysis, and governance workflows. It is particularly strong on AI governance — monitoring AI systems themselves for bias, drift, and compliance with AI regulatory requirements.

### Practitioner and Service Implications

GRC advisory roles focused on manual compliance testing and periodic control assessments face the most significant change. The shift is from testing controls periodically to overseeing AI agents that monitor controls continuously — a fundamentally different role that requires a different set of skills.

The opportunity is the advisory layer above continuous monitoring: interpreting what the monitoring data means, designing the monitoring programme, advising management and the board on the implications of what the agents are finding, and responding when agents identify significant issues.

---

#### Practice Exercise 5: Continuous Controls Monitoring Specification

**What you need:** Claude (any interface). Knowledge of any organisation's key financial controls. 25 minutes.

1. Choose three financial controls for a specific organisation type (e.g., a bank, a retail company, a manufacturing firm). Ask Claude: *"For each control, specify: (a) what the control is designed to prevent, (b) what data would evidence that the control has been executed, (c) what anomaly would indicate the control may have failed, and (d) what the monitoring agent should do when it detects that anomaly."*

2. Ask: *"Design a continuous monitoring programme for these three controls. What is the monitoring frequency? What are the escalation thresholds? What actions should the agent take autonomously, and what should it escalate to a human?"*

3. Ask: *"Write this monitoring programme as a SKILL.md specification for an autonomous GRC monitoring agent. Include: the control objectives, the monitoring rules, the anomaly detection thresholds, and the escalation routing."*

4. Ask: *"In the Three Lines of Defence model, where does this monitoring agent sit — first, second, or third line? What are the implications for the human roles in each line if this monitoring becomes continuous?"*

**The key learning:** The discipline being built is control design thinking — specifying precisely what a control is supposed to prevent, what evidence would show it has worked, and what anomaly would reveal it has failed. This is the skill the GRC professional must develop as AI takes over the testing: designing the monitoring programme that makes the agent effective.

**Target time:** 25 minutes.

---

# Part Two: Cowork and the CA/CPA Plugin Ecosystem

---

## How Cowork Changes CA/CPA Practice

Cowork is not simply another AI tool for CAs and CPAs — it represents a different category of capability. In a standard Claude conversation, the CA/CPA asks a question, reviews the answer, and decides the next step. In Cowork, the CA/CPA sets a goal and Claude plans and executes a multi-step workflow to achieve it — reading files, creating documents, running computations, cross-referencing data sources, and delivering finished work.

The practical difference is significant. A standard conversation can help a CA/CPA draft a tax research memo. Cowork can take a folder of client documents, extract the relevant financial data, conduct the research, cross-reference the applicable provisions, produce the memo, and save it to the client file — as a single orchestrated workflow, while the CA/CPA works on something else.

---

> **📊 CONCEPT BOX: Cowork's Key Architecture**
>
> Cowork operates through four core mechanisms that distinguish it from standard Claude conversations:
>
> **Direct local file access:** Claude can read from and write to files in any folder you grant it access to. For CA/CPA practice this means client documents, working papers, financial data files, and draft deliverables can all be part of a Cowork session without manual uploading.
>
> **Sub-agent coordination:** For complex tasks, Cowork breaks the work into subtasks and coordinates multiple workstreams in parallel. A month-end close workflow, for example, might involve parallel subtasks for reconciliation checking, journal entry preparation, and disclosure drafting running simultaneously.
>
> **Scheduled tasks:** Cowork can execute tasks automatically on a schedule — nightly, weekly, monthly. This is the capability that enables genuinely autonomous CA/CPA workflows: the reconciliation check that runs every morning, the compliance deadline monitor that runs weekly, the variance analysis that runs at month-end without anyone triggering it.
>
> **Plugin ecosystem:** Cowork's domain plugins bundle domain knowledge, data connectors, slash commands, and sub-agents into a single installable package. The finance plugins (knowledge-work-plugins/finance and financial-services-plugins) give Cowork deep CA/CPA domain knowledge that generic AI tools do not have.

---

## The Finance Plugin Stack for CA/CPA Practice

Cowork's finance plugin ecosystem offers two layers of capability for CA/CPA professionals.

### Layer 1: knowledge-work-plugins/finance

The knowledge-work finance plugin (https://github.com/anthropics/knowledge-work-plugins/tree/main/finance) is designed for corporate finance and accounting teams. Its commands directly address the core workflows of Domains 1 and 4 from this chapter.

**Install command:**
```
claude plugin install finance@knowledge-work-plugins
```

**Key commands for CA/CPA practice:**

```
/journal-entry [description]     — Generate journal entries from transaction descriptions
/reconciliation [account]        — Automated reconciliation analysis for a named account
/income-statement [period]       — Draft income statement from trial balance data
/variance-analysis [period]      — Variance analysis with bridge decomposition
/sox-testing [control]           — SOX control testing documentation
```

**The `/sox-testing` command** is particularly relevant for Domain 3 (Assurance) and Domain 5 (GRC). It generates a structured control testing programme for a specified control, including the testing objective, the evidence to be gathered, the sample selection rationale, and the documentation of results. This command operationalises a significant portion of the internal audit and SOX compliance workflow.

---

> **📊 CONCEPT BOX: What Is SOX?**
>
> **SOX (the Sarbanes-Oxley Act)** is a US federal law enacted in 2002 following major accounting scandals (Enron, WorldCom). It requires the management of public companies to assess and report on the effectiveness of internal controls over financial reporting, and requires external auditors to attest to that assessment.
>
> **Section 404** is the most demanding SOX requirement: management must document all key controls, test whether they are operating effectively, identify any material weaknesses, and disclose the results. External auditors must independently test the same controls.
>
> **Why SOX matters for AI:** Section 404 compliance is one of the most document-intensive and time-consuming requirements in CA/CPA practice. The `/sox-testing` command automates the documentation and testing framework. Human professional judgment remains required for the assessment of whether a control failure constitutes a material weakness — but the mechanical execution of the testing programme is automatable.

---

### Layer 2: financial-services-plugins

The financial-services-plugins suite (https://github.com/anthropics/financial-services-plugins) extends Cowork's CA/CPA capabilities into investment-facing professional work. For CA/CPA professionals working in financial services environments — bank audit, investment fund administration, insurance accounting, capital markets advisory — these plugins are directly relevant.

**Install command:**
```
claude plugin marketplace add anthropics/financial-services-plugins
claude plugin install financial-analysis@financial-services-plugins
```

**CA/CPA-relevant capabilities within the suite:**

The **financial-analysis core plugin** provides the `/dcf`, `/comps`, and `/lbo` commands most relevant to the corporate finance and restructuring work in Domain 2 (Tax and Non-Assurance Advisory). A CA/CPA advising on an M&A transaction or restructuring has direct access to the financial modelling tools previously requiring specialist software.

The **equity-research plugin** provides earnings analysis and sector research capabilities relevant to CA/CPA professionals advising listed companies or working in fund accounting contexts.

The **private-equity plugin** provides deal sourcing, IC memo, and portfolio monitoring capabilities directly relevant to the due diligence and corporate finance work in Domain 2.

---

## Worked Example: Month-End Close as a Cowork Workflow

**The scenario:** A CA/CPA at a mid-size manufacturing company needs to complete the monthly management accounts within two business days of month-end. The current process involves four junior staff members over three days.

**The Cowork workflow:**

**Day 1, 7:00 AM (automated — scheduled Cowork task):**
```
/reconciliation bank          — Bank reconciliation from ERP export
/reconciliation debtors       — Debtors reconciliation
/reconciliation creditors     — Creditors reconciliation
/reconciliation intercompany  — Intercompany reconciliation
```
The CA/CPA arrives to find four completed reconciliations with exceptions flagged for review. Review time: 30 minutes for the exceptions, versus three hours for the full reconciliations.

**Day 1, 9:30 AM (CA/CPA-initiated):**
```
/journal-entry depreciation   — Monthly depreciation journal
/journal-entry accruals       — Standard monthly accruals from template
/income-statement monthly     — Draft management income statement
```
Draft management accounts are ready by 10:30 AM.

**Day 1, 11:00 AM (CA/CPA-initiated):**
```
/variance-analysis monthly    — Variance analysis vs. budget and prior month
```
Bridge analysis produced. The CA/CPA reviews the three largest variances, adds context from their knowledge of the business, and writes the management commentary section — the only part of the process where their specific business knowledge is irreplaceable.

**Day 2, 9:00 AM:** Management accounts distributed. Two days compressed to one. Four staff days compressed to one CA/CPA plus agent.

---

## Cross-App Workflow: Accounts to Board Pack

Cowork's cross-application capability — moving analysis from Excel through to PowerPoint — is directly applicable to the CA/CPA workflow of converting financial statements into board-ready presentations.

The workflow:

1. Run the month-end close and produce the management P&L in Excel via the Cowork finance plugin
2. Ask Cowork: *"Take the management P&L from the Excel file and create a four-slide board update presentation in PowerPoint: (1) headline P&L versus budget, (2) the three key variance drivers with commentary, (3) the rolling 12-month EBITDA trend, (4) the cash flow bridge."*
3. Claude reads the Excel output, creates the PowerPoint using Claude in PowerPoint, and saves both files to the output folder

What previously required the finance team to build the Excel, export the charts, and manually format the PowerPoint — an hour of skilled work — becomes a five-minute Cowork orchestration.

**Requirements:** Mac users on Max, Team, or Enterprise plans with both Claude in Excel and Claude in PowerPoint installed.

---

#### Practice Exercise 6: Full Month-End Close Workflow

**What you need:** Cowork (Team or Enterprise plan), trial balance data in Excel, Claude Desktop. 45 minutes.

This exercise runs a simplified version of the full month-end close workflow.

1. Create a test folder in Cowork with a trial balance export (real or hypothetical). Set a global Cowork instruction: *"I am a management accountant at a manufacturing company. Our financial year runs January to December. We report monthly to the board. Our reporting currency is PKR. Variance analysis should compare actual vs. budget and actual vs. prior month."*

2. Run the reconciliation commands: `/reconciliation bank` and `/reconciliation debtors`. Review the output. Confirm that the exceptions flagged are genuine exceptions.

3. Run `/income-statement monthly` and `/variance-analysis monthly`. Review the variance analysis bridge. Ask: *"Which of these variances are within management control, and which are driven by external factors?"*

4. Ask Cowork to create a two-slide board update in PowerPoint: the P&L versus budget on slide 1, and the three key variance drivers with commentary on slide 2.

5. Review the complete output: reconciliations, management accounts, variance analysis, and board slides. Note which elements required your professional judgment and which were fully automated. Write a brief specification for a monthly scheduled task that would automate steps 2 and 3 each month-end.

**The key learning:** The measure of CA/CPA professional value in an AI-augmented environment is not how many hours you spend on the process — it is the quality of judgment you apply to the output. This exercise makes that boundary explicit: the parts you reviewed and adjusted in steps 2–5 are the parts where you added value. The rest was execution.

**Target time:** 45 minutes.

---

# Part Three: Building CA/CPA Domain Agents

---

## Why Generic Plugins Are Not Enough

The finance plugins in Cowork — `/journal-entry`, `/reconciliation`, `/sox-testing`, `/variance-analysis`, and the full financial-services-plugins suite — provide powerful baseline capability. But they do not know your client's chart of accounts. They do not know that your firm applies a specific methodology for calculating materiality. They do not know which jurisdiction's tax law applies to your clients. They do not know your firm's review and sign-off process.

This is the same principle that Part Three of Chapter 17 established for the finance domain: generic plugins provide the framework; domain extensions encode the institutional knowledge. For CA/CPA practice, this extension layer is not optional — it is the difference between a tool that assists generic accounting work and an agent that performs as a competent member of your specific team.

---

## Extension 1: Jurisdiction-Specific Tax Rules

**What the generic plugin lacks.** The `/variance-analysis` and accounting commands apply IFRS or US GAAP by default. They do not know that your clients operate under Pakistani tax law, that the applicable corporate tax rate is 29%, that specific industry exemptions apply, or that the FBR (Federal Board of Revenue) requires specific formats for particular returns.

**What the extension adds.** A jurisdiction-specific tax SKILL.md that encodes the applicable tax code, rates, filing deadlines, penalty provisions, and FBR/SBP (State Bank of Pakistan) specific requirements as standing instructions. When the agent processes any tax computation, it applies these rules automatically.

**Key SKILL.md instructions to write:**
- Corporate tax rate and applicable thresholds by entity type (public company, private company, AOP, individual)
- Withholding tax rates by transaction type (salary, dividends, royalties, services)
- Filing deadlines by return type with penalty provisions
- FBR portal submission requirements and format specifications
- Common disallowed deductions and their statutory basis

---

## Extension 2: Chart of Accounts Encoding

**What the generic plugin lacks.** The journal entry and reconciliation commands produce entries using generic account descriptions. They do not know that your organisation uses account code 5110 for direct labour, that your intercompany account structure follows a specific entity numbering convention, or that certain account types require specific documentation to support the journal.

**What the extension adds.** A chart of accounts SKILL.md that maps every account code to its description, sub-category, and documentation requirements. The agent applies this mapping in every journal entry and reconciliation output — producing entries that slot directly into the actual accounting system without manual recoding.

**Key SKILL.md instructions to write:**
- Full account code listing with descriptions and categories
- Journal entry documentation requirements by account type
- Intercompany account structure and netting rules
- Accounts requiring specific supporting documentation (bank statements, contracts, board resolutions)
- Accounts that may never be posted to without senior approval

---

## Extension 3: Audit Methodology Standards

**What the generic plugin lacks.** The `/sox-testing` command produces a generic control testing programme. It does not apply your firm's specific audit methodology, materiality calculation approach, sampling methodology, or quality review requirements.

**What the extension adds.** An audit methodology SKILL.md that encodes your firm's standards: how materiality is calculated, what minimum sample sizes apply to different populations, what documentation is required in every audit file, and what conditions require escalation to the engagement partner.

**Key SKILL.md instructions to write:**
- Materiality calculation methodology (benchmark, percentage, rationale)
- Minimum sample sizes by population size and risk assessment
- Required working paper structure and sign-off requirements
- Escalation conditions (indicators of fraud, going concern doubt, significant judgment areas)
- Independence confirmation and rotation requirements

---

## Extension 4: Client-Specific Entity Knowledge

**What the generic plugin lacks.** The FP&A and reporting commands produce analyses that are structurally correct but contextually generic. They do not know that your client's revenue is seasonal with Q4 representing 40% of annual revenue, that a specific related party transaction occurred during the year, or that a covenant breach risk exists at a specific EBITDA level.

**What the extension adds.** A client entity SKILL.md (one per significant client) that encodes the client's business model, seasonal patterns, key relationships, and known risk areas. The agent applies this context to every piece of analysis it produces — surfacing relevant client-specific considerations rather than generic observations.

**Key SKILL.md instructions to write:**
- Entity overview: business model, revenue streams, key customers and suppliers
- Seasonal patterns and their effect on key financial ratios
- Related party relationships and their accounting implications
- Known risk areas and the specific procedures applied to address them
- Reporting preferences: format, level of detail, CFO's particular areas of interest

---

## Extension 5: Regulatory Compliance Calendar

**What the generic plugin lacks.** The compliance monitoring capabilities do not know which specific regulatory obligations apply to your clients, when they fall due, or what the consequences of non-compliance are.

**What the extension adds.** A compliance calendar SKILL.md that encodes every regulatory obligation for each client type — filing deadlines, return formats, penalty provisions, and the checklist of information needed to prepare each filing. Combined with Cowork's scheduled task capability, this extension enables automated compliance deadline monitoring: the agent runs weekly, checks each upcoming deadline, confirms the required information is available, and alerts the CA/CPA when preparation needs to begin.

**Key SKILL.md instructions to write:**
- Filing calendar by entity type (public company, private company, individual, AOP, trust)
- Lead time required for each return type (how many working days before the deadline to begin preparation)
- Information checklist for each return type
- Escalation conditions: returns where the information is incomplete or a complex position needs to be taken
- Penalty matrix: the cost of late filing by return type and number of days late

---

#### Practice Exercise 7: Building a CA/CPA Domain Extension

**What you need:** Claude (any interface). Knowledge of your practice area's specific requirements. 35 minutes.

This exercise builds one domain extension using the Method A interview framework from Chapter 16.

1. Choose one of the five extensions above that is most relevant to your practice. Answer these questions in writing (200 words minimum): What are the three most common errors junior staff make in this area? What questions do you always ask when reviewing this type of work? What conditions would always cause you to escalate or reject the work?

2. Convert each answer into SKILL.md instructions using the "When [condition], [action]" format.

3. Ask Claude: *"Review these SKILL.md instructions. Are there gaps — conditions I have not addressed, edge cases that would cause the agent to make a wrong decision? Suggest three additional instructions that would make this SKILL.md more robust."*

4. Identify the three scenarios that would test whether this SKILL.md works correctly. For each scenario, describe: the input, what the correct agent output would be, and what an incorrect output would look like.

5. Write the description field for the SKILL.md frontmatter — the trigger language that tells the agent when to activate this skill. Make it specific enough that the agent activates when relevant and does not activate when not.

**The key learning:** The quality of a CA/CPA domain agent is determined by the quality of the SKILL.md that encodes professional judgment. The instructions you write in Step 2 are the difference between an agent that applies your professional standards and one that applies generic ones. Step 3 — asking Claude to identify gaps — is the most important step. A CA/CPA who can specify the conditions their agent might get wrong is the one who will build an agent that does not get them wrong.

**Target time:** 35 minutes.

---

#### Final Exercise: The CA/CPA AI Transformation Audit

**What you need:** One hour. No software required. This is a reflection and planning exercise.

This exercise produces a personal AI transformation roadmap for your CA/CPA practice.

1. Map your current work across the five domains in this chapter. For each domain you work in: what proportion of your time is spent on routine, rule-based execution (high automation potential) versus professional judgment (lower automation potential)?

2. For each of your high-automation-potential activities: what tool or plugin from this chapter would most directly address it? What would need to be true — about data access, system integration, or SKILL.md development — for that tool to work in your specific context?

3. For each of your professional judgment activities: how does AI change the nature of that judgment? Does it give you better information to make the judgment? Does it allow you to apply your judgment to more situations (because the routine work is automated)? Or does it threaten to commoditise what was previously specialist knowledge?

4. Write a 90-day plan: three specific AI tools or Cowork workflows you will implement in the next 90 days, one SKILL.md you will build, and one professional capability you will develop because AI is handling tasks that used to consume your development time.

**The key learning:** The CA/CPA profession is not being replaced by AI. It is being restructured. The professionals who will lead this restructuring are those who understand exactly where AI creates value and exactly where human professional judgment remains irreplaceable — and who invest deliberately in the second category as the first category is automated.

---

---

# Part Four: Extensive Cowork and Plugin Exercises

---

> **Before You Begin: Plugin Installation Reference**
>
> The exercises in this section require the following plugins. Install them once; they remain available in all subsequent Cowork sessions.
>
> ```bash
> # Layer 1: Core accounting and FP&A workflows
> claude plugin install finance@knowledge-work-plugins
>
> # Layer 2: Financial services and investment-facing work
> claude plugin marketplace add anthropics/financial-services-plugins
> claude plugin install financial-analysis@financial-services-plugins
> claude plugin install equity-research@financial-services-plugins
> claude plugin install private-equity@financial-services-plugins
> ```
>
> **Cowork setup for all exercises:**
> 1. Open Claude Desktop → click "Cowork" in the sidebar
> 2. Grant Cowork access to a working folder (create `/CA-CPA-Exercises/` on your desktop)
> 3. Create subfolders: `/inputs/`, `/outputs/`, `/working-papers/`, `/skills/`
> 4. Set a global Cowork instruction: *"I am a CA/CPA practitioner. Apply IFRS unless instructed otherwise. All financial figures are in PKR unless stated. Flag every professional judgment call explicitly before proceeding."*
>
> All exercises assume this folder structure is in place.

---

## Block A: Accounting and Financial Reporting Exercises

*These exercises cover Domain 1 — the highest-impact domain. Each exercise builds a Cowork workflow that replaces a specific manual process.*

---

### Exercise 8: Autonomous Bookkeeping from Source Documents

**Domain:** Accounting and Financial Reporting
**What you need:** Cowork (Team or Enterprise), 8–12 source documents (receipts, invoices, bank statements — real or hypothetical). 50 minutes.
**Plugins:** `finance@knowledge-work-plugins`

This exercise builds an autonomous bookkeeping workflow that takes raw source documents and produces a coded transaction register ready for import into any accounting system.

**Setup:** Place 8–12 documents in `/CA-CPA-Exercises/inputs/`. Include a mix: at least two supplier invoices, two customer invoices or receipts, one bank statement page, and two expense receipts. If using hypothetical documents, create simple text files describing each transaction.

**Step 1 — Document classification.** In Cowork, say: *"Review all documents in the /inputs/ folder. Classify each one as: supplier invoice, customer invoice, bank entry, expense receipt, or other. For each document, extract: date, counterparty name, amount (gross and net of tax where applicable), and a one-line description of what the transaction represents."*

Review the classification output. Confirm that every document has been read correctly. Note any documents where Cowork flagged uncertainty about the nature of the transaction.

**Step 2 — Chart of accounts mapping.** Say: *"For each transaction you classified, suggest the correct debit and credit accounts using a standard IFRS chart of accounts. Use account codes in the format: 1xxx for assets, 2xxx for liabilities, 3xxx for equity, 4xxx for revenue, 5xxx for cost of sales, 6xxx for operating expenses, 7xxx for finance costs."*

Review the proposed journal entries. For each one, ask yourself: would a competent junior accountant have made the same coding decision? Note any that required judgment beyond mechanical rule-application.

**Step 3 — Build the transaction register.** Say: *"Create an Excel file at /outputs/transaction-register.xlsx with these columns: Date, Document Reference, Counterparty, Description, Debit Account Code, Debit Account Name, Debit Amount, Credit Account Code, Credit Account Name, Credit Amount, Tax Code, Notes. Populate it with every transaction from the source documents."*

**Step 4 — Run the `/journal-entry` command for the complex transactions.** For any transaction that required judgment in Step 2, run:
```
/journal-entry [describe the transaction in plain English]
```
Compare the command's output with your Step 2 coding decision. If they differ, the difference is a judgment call worth examining.

**Step 5 — Reconcile to source totals.** Say: *"Sum the debit and credit columns in the transaction register. Confirm they balance. Then reconcile the total gross receipts to the customer invoices and the total gross payments to the supplier invoices. Produce a reconciliation summary."*

**Step 6 — Flag incomplete or unclear documents.** Say: *"Are there any documents in the /inputs/ folder where the information is insufficient to produce a complete journal entry — missing amounts, unclear counterparties, or transactions that require a professional accounting judgment I have not yet provided? List them with a specific question for each."*

Answer each question, then ask Cowork to update the transaction register with the completed entries.

**Step 7 — Produce the bookkeeping summary.** Say: *"From the completed transaction register, produce a summary showing: total transactions by account code, total value by account code, and a trial balance extract for the accounts affected. Save to /outputs/bookkeeping-summary.xlsx."*

**Step 8 — Specify the scheduled task.** Write a Cowork scheduled task instruction (do not yet activate it): *"Every weekday morning, review new files placed in the /inputs/ folder since the previous run. Classify and code each transaction. Append entries to the transaction register. Flag any transactions requiring professional judgment and send an alert."* `/schedule` this task for weekly execution.

**Key learning:** Autonomous bookkeeping from source documents works reliably for routine transactions — supplier invoices, bank entries, standard expenses — and encounters genuine difficulty at exactly the right boundary: transactions that require interpretation of the underlying commercial substance. Step 6 is not a failure mode; it is the system working correctly. A bookkeeping agent that never asks questions is one that is coding ambiguous transactions without flagging them, which is worse than asking. The value you provide is not in coding the routine transactions — it is in answering the questions the agent cannot answer for itself.

**Target time:** 50 minutes.

**Extension exercise:** Add a second run with documents that include a transaction the agent is likely to mis-code — an owner's drawing that looks like an expense, or a deposit that might be revenue or a liability. Verify that the agent either codes it correctly or flags it for judgment. Write a SKILL.md instruction that resolves the ambiguity for your specific entity type.

---

### Exercise 9: IFRS Financial Statements with Full Disclosure Pack

**Domain:** Accounting and Financial Reporting
**What you need:** Cowork (Team or Enterprise), Claude in Excel and Claude in PowerPoint installed, a trial balance in Excel (real or the hypothetical data below). 60 minutes.
**Plugins:** `finance@knowledge-work-plugins`

This exercise builds the complete IFRS financial reporting output — income statement, balance sheet, cash flow statement, and a selected notes pack — and then converts it into a board-ready presentation. It is the full end-to-end reporting workflow in a single Cowork session.

**Hypothetical trial balance (use this if you do not have real data):**
Create `/inputs/trial-balance.xlsx` with the following:

| Account | Debit (PKR '000) | Credit (PKR '000) |
|---------|-----------------|------------------|
| Cash and cash equivalents | 8,400 | |
| Trade receivables | 24,600 | |
| Inventory | 18,200 | |
| Property, plant and equipment (net) | 92,000 | |
| Trade payables | | 15,400 |
| Bank borrowings (current) | | 12,000 |
| Bank borrowings (non-current) | | 35,000 |
| Share capital | | 50,000 |
| Retained earnings (opening) | | 28,500 |
| Revenue | | 185,000 |
| Cost of goods sold | 128,000 | |
| Distribution costs | 14,200 | |
| Administrative expenses | 11,400 | |
| Finance costs | 4,100 | |
| Income tax expense | 6,800 | |
| **Totals** | **307,700** | **325,900** |

*Note: The trial balance does not balance by design — one item (deferred tax liability of PKR 18,200) is missing. Part of this exercise is identifying what is missing.*

**Step 1 — Trial balance review and suspense investigation.** Place the trial balance in `/inputs/`. Say:
```
/income-statement current-year
```
Review the output. Then ask: *"This trial balance does not balance. What is the difference? What accounting entries might explain the gap? List the three most likely explanations."*

**Step 2 — Resolve the suspense.** Provide the answer: *"The missing item is a deferred tax liability of PKR 18,200. Add this to the trial balance, re-confirm it balances, and proceed."*

**Step 3 — Produce the income statement and balance sheet.** The `/income-statement` command has already run. Now say:
```
/income-statement current-year format:ifrs
```
Then ask: *"Using the same trial balance, produce the IFRS balance sheet as at the reporting date. Classify all assets and liabilities as current or non-current per IAS 1. Show the equity section with opening retained earnings, profit for the year, and closing retained earnings."*

**Step 4 — Produce the cash flow statement.** Say: *"Using the income statement and balance sheet you have produced, prepare the statement of cash flows using the indirect method per IAS 7. Start with profit before tax. Add back non-cash items and working capital movements. Calculate cash from operations, investing activities, and financing activities. Reconcile to the closing cash balance."*

Review the cash flow statement. Ask: *"What are the three working capital movements that would most commonly be wrong in an indirect cash flow statement prepared by a junior accountant? Check that each of those items is correct in the statement you have produced."*

**Step 5 — Draft the disclosure notes.** Say: *"Draft the following IFRS disclosure notes for this set of financial statements: (1) accounting policies — revenue recognition, inventory, PPE depreciation; (2) property, plant and equipment movement table; (3) borrowings — maturity analysis and interest rate; (4) income tax — current and deferred tax reconciliation. Flag any note where you have made an assumption because the information was not in the trial balance."*

For each flagged assumption, provide a response or mark it as "information to be confirmed with client."

**Step 6 — Assemble the complete financial statements pack.** Say: *"Create a single Excel file at /outputs/financial-statements.xlsx with separate sheets for: (1) Trial Balance, (2) Income Statement, (3) Balance Sheet, (4) Cash Flow Statement, (5) Notes. Apply professional formatting: company name header, reporting period, 'PKR thousands' denomination label, page separators between sections."*

**Step 7 — Cross-app: build the board presentation.** Say: *"Using the financial statements in the Excel file, create a five-slide PowerPoint presentation at /outputs/board-presentation.pptx: Slide 1 — Headline P&L (revenue, gross profit, EBITDA, PBT versus prior year); Slide 2 — Balance sheet summary with working capital and net debt; Slide 3 — Cash flow bridge from opening to closing cash; Slide 4 — Three key messages from the financial results; Slide 5 — Looking ahead: the one financial metric that most needs management attention and why."*

**Step 8 — Quality review.** Ask: *"Review the complete financial statements pack and the board presentation. List five things a reviewing partner would check before signing off on these statements. Check each one and confirm whether it passes or identify what needs correction."*

**Key learning:** The most important step in this exercise is not the financial statement production — it is Step 4's self-checking question and Step 8's quality review. The agent can produce technically correct IFRS financial statements reliably. The discipline that distinguishes a CA/CPA from a bookkeeper is knowing which items are most likely to be wrong, checking them specifically, and understanding the consequences if they are. This exercise builds the practice of directing the agent's quality checks rather than assuming its output is correct.

**Target time:** 60 minutes.

---

### Exercise 10: Scheduled Month-End Close — Setup and Activation

**Domain:** Accounting and Financial Reporting
**What you need:** Cowork (Team or Enterprise), a folder structure representing a client file. 40 minutes.
**Plugins:** `finance@knowledge-work-plugins`

This exercise builds a scheduled month-end close task that runs automatically on the first business day of each month, requiring only exception review from the CA/CPA. It is the autonomous workflow architecture, not just a single session.

**Step 1 — Design the workflow specification.** Before opening Cowork, write a workflow specification (10 minutes, pen and paper or text file):
- What data inputs will be available at month-end? (List the specific file names and locations)
- What outputs need to be produced? (List with exact file names and formats)
- What conditions would cause the workflow to stop and alert you rather than proceed?
- What is the maximum time the workflow should take before you consider it has failed?

This specification is the discipline. A scheduled task that is poorly specified will run autonomously and produce wrong answers without alerting anyone.

**Step 2 — Create the folder structure.** In your Cowork working folder, create:
```
/client-alpha/
  /inputs/
    /erp-exports/      ← where ERP extracts will be placed each month
    /prior-month/      ← prior month statements for comparison
  /working-papers/     ← reconciliations and journal entries
  /outputs/            ← completed management accounts
  /archive/            ← prior month outputs, auto-moved after sign-off
```

Place a sample trial balance export in `/erp-exports/` named `trial-balance-YYYY-MM.csv`.

**Step 3 — Build and test the workflow interactively first.** Run the full month-end close workflow manually (as in Exercise 6) to confirm each step works:
```
/reconciliation bank
/reconciliation debtors
/reconciliation creditors
/journal-entry depreciation
/journal-entry accruals
/income-statement monthly
/variance-analysis monthly
```
Confirm each output is saved to the correct folder with the correct filename format.

**Step 4 — Write the scheduled task instruction.** In Cowork, type `/schedule`. Write the scheduled task as a precise instruction:

*"On the first business day of each month at 7:00 AM: (1) Read the most recent trial balance file from /client-alpha/inputs/erp-exports/ — the file named trial-balance-[current month YYYY-MM].csv. If this file does not exist, stop immediately and send an alert: 'Month-end close cannot run — trial balance file not found for [month].' (2) Run bank, debtors, and creditors reconciliations. Save results to /working-papers/ with filename reconciliation-[account]-[YYYY-MM].xlsx. If any reconciliation produces an unreconciled difference greater than PKR 10,000, flag it as a priority exception and continue. (3) Generate depreciation and accruals journal entries from the prior month templates in /working-papers/templates/. (4) Produce the management income statement and save to /outputs/management-accounts-[YYYY-MM].xlsx. (5) Run variance analysis versus prior month and versus budget. Save to /outputs/variance-[YYYY-MM].xlsx. (6) Produce an exceptions summary — all items requiring CA/CPA review — and save to /outputs/exceptions-[YYYY-MM].txt. (7) Send completion alert: 'Month-end close complete for [month]. [N] exceptions require review. Files saved to /outputs/.' "*

**Step 5 — Specify the exception escalation rules.** Add to the scheduled task:

*"Stop and alert immediately — do not continue — if: (a) the trial balance does not balance; (b) any reconciliation difference exceeds PKR 50,000; (c) revenue is more than 30% above or below the same month last year (possible data error); (d) any account that was zero last month now has a balance greater than PKR 100,000 (possible mis-posting). In each case, describe the specific exception and ask the CA/CPA for a decision before proceeding."*

**Step 6 — Activate the schedule.** Confirm the scheduled task and set it to run on the first business day of next month. Cowork will store the task specification and execute it automatically when the condition is met (while the desktop app is open).

**Step 7 — Test the exception paths.** Modify the test trial balance to trigger one exception condition (introduce a balance difference of PKR 75,000). Run the task manually. Confirm the exception is caught correctly and the alert is generated rather than the task proceeding.

**Step 8 — Document the workflow.** Ask Cowork: *"Based on the scheduled task I have set up, produce a one-page workflow documentation document at /outputs/month-end-close-workflow.docx. Include: workflow trigger, inputs required, outputs produced, exception conditions, escalation contacts, and estimated completion time."*

**Key learning:** A scheduled task without a robust exception specification is not automation — it is silent failure. Step 5 is more important than Step 4: the conditions that cause the task to stop and ask a human are the professional judgment embedded in the workflow. Every condition in Step 5 represents a situation where the agent cannot decide — and where you, as the CA/CPA, must be drawn in. The quality of your scheduled task is measured by the quality of its exception handling, not the quality of its routine output.

**Target time:** 40 minutes.

---

### Exercise 11: Multi-Entity Consolidation with Intercompany Elimination

**Domain:** Accounting and Financial Reporting
**What you need:** Cowork (Team or Enterprise), Claude in Excel. Trial balance data for two entities (real or hypothetical). 55 minutes.
**Plugins:** `finance@knowledge-work-plugins`

Consolidation — producing group financial statements that aggregate multiple legal entities while eliminating transactions between them — is one of the most technically demanding routine accounting tasks. This exercise builds an automated consolidation workflow.

**Hypothetical setup:** Create two trial balance files in `/inputs/`:

`entity-parent.xlsx` — a parent company with a 100% investment in the subsidiary (investment value PKR 40,000) and intercompany loan to subsidiary of PKR 5,000.

`entity-subsidiary.xlsx` — a subsidiary with share capital of PKR 40,000 and an intercompany loan payable to parent of PKR 5,000.

Both entities have revenue, costs, and a full balance sheet. Include an intercompany sale of PKR 12,000 in the parent and a corresponding purchase of PKR 12,000 in the subsidiary (inventory of PKR 4,000 from this purchase remains unsold in the subsidiary at year-end).

**Step 1 — Aggregate the trial balances.** Say: *"Read entity-parent.xlsx and entity-subsidiary.xlsx. Produce an aggregated trial balance in a new Excel sheet that simply adds both entities' balances together. Flag all intercompany items: the investment, the loans, the intercompany sales and purchases, and the unrealised profit in closing inventory."*

**Step 2 — Perform the investment elimination.** Say: *"The first consolidation elimination is to remove the parent's investment in the subsidiary (PKR 40,000 debit) against the subsidiary's share capital (PKR 40,000 credit). Produce the elimination journal entry and explain why this entry is required under IFRS 10."*

**Step 3 — Eliminate the intercompany loan.** Say: *"Produce the journal entry to eliminate the intercompany loan: parent's loan receivable (PKR 5,000 debit) against subsidiary's loan payable (PKR 5,000 credit). Show how this affects the consolidated balance sheet."*

**Step 4 — Eliminate intercompany trading.** Say: *"Produce the elimination entry for intercompany revenue and cost of sales. Parent has intercompany revenue of PKR 12,000; subsidiary has the corresponding purchase as cost of sales of PKR 12,000. Debit revenue PKR 12,000, credit cost of sales PKR 12,000. Explain why the unrealised profit in inventory must also be eliminated and produce that additional entry."*

**Step 5 — Calculate the unrealised profit elimination.** Say: *"The subsidiary has PKR 4,000 of inventory purchased from the parent. The parent's gross margin on intercompany sales is 25%. Calculate the unrealised profit embedded in the subsidiary's closing inventory and produce the elimination entry: debit cost of sales (to increase consolidated COGS), credit inventory (to reduce the carrying value). Explain what happens to this elimination in the following year."*

**Step 6 — Produce the consolidated statements.** Say: *"Apply all four elimination entries to the aggregated trial balance and produce the consolidated income statement and balance sheet. Show a consolidation workings table with: (1) Parent entity, (2) Subsidiary entity, (3) Eliminations, (4) Consolidated total."* Save to `/outputs/consolidated-statements.xlsx`.

**Step 7 — Stress test the consolidation.** Ask: *"What are the three most common errors made in group consolidations by junior accountants? Check the consolidated statements you have produced for each of those errors. If any are present, identify and correct them."*

**Step 8 — Write the consolidation SKILL.md.** Ask: *"Draft a SKILL.md for a consolidation agent that will perform this intercompany elimination process every period. Include: the data inputs required (trial balances per entity, intercompany transaction schedule), the four elimination types (investment, loans, trading, unrealised profit), the conditions that require professional judgment, and the output format."*

**Key learning:** The unrealised profit elimination in Step 5 is the consolidation step most frequently done incorrectly by junior accountants — and the step where the IFRS 10 principle (eliminating all traces of group profit until the goods are sold to a third party) requires genuine understanding rather than mechanical application of a rule. The fact that the agent performs Steps 2, 3, and 4 reliably makes Step 5 more important, not less. Your professional contribution is identifying which step in any automation requires deeper understanding to supervise correctly.

**Target time:** 55 minutes.

---

## Block B: Tax and Non-Assurance Advisory Exercises

---

### Exercise 12: Corporate Tax Computation — Full Pakistan Jurisdiction Workflow

**Domain:** Tax and Non-Assurance Advisory
**What you need:** Cowork, financial statements data. 45 minutes.
**Plugins:** `finance@knowledge-work-plugins`

This exercise builds a complete corporate income tax computation workflow for a Pakistan-domiciled company under the Income Tax Ordinance 2001 and the Income Tax Rules 2002, producing a computation ready for review and filing.

**Hypothetical entity:** A private limited company in the manufacturing sector. Accounting profit before tax: PKR 18,500,000. Corporate tax rate: 29%. The company has: depreciation charged of PKR 4,200,000 (tax depreciation on the same assets is PKR 5,100,000); an entertainment expense of PKR 850,000 (partially disallowable); a donation of PKR 200,000 to an approved charitable institution; brought-forward tax losses of PKR 2,400,000; and dividend income of PKR 600,000 from a Pakistan-listed company (subject to final tax).

**Step 1 — Accounting to taxable income bridge.** Say: *"I am computing corporate income tax for a Pakistani private limited manufacturing company. Accounting profit before tax is PKR 18,500,000. Work through the standard Pakistan income tax computation framework: start with accounting profit, add back accounting depreciation (PKR 4,200,000), deduct tax depreciation (PKR 5,100,000), identify the entertainment expense disallowance, handle the donation deduction, and exclude the dividend income that is subject to final tax. Show each adjustment on a separate line with the applicable provision of the Income Tax Ordinance 2001."*

**Step 2 — Apply the entertainment expense disallowance.** Ask: *"Under Section 21(l) of the Income Tax Ordinance 2001, entertainment expenses are deductible only to the extent they satisfy the wholly and exclusively for business test. Of the PKR 850,000 entertainment expense, PKR 350,000 relates to a private dinner for the CEO's family celebration. What is the disallowable amount and the applicable provision? Add this to the tax computation."*

**Step 3 — Handle the brought-forward losses.** Ask: *"The company has brought-forward tax losses of PKR 2,400,000. Under Section 56 and 57 of the Income Tax Ordinance 2001, confirm: (a) what is the maximum period for loss carry-forward for a manufacturing company? (b) Are there any restrictions on set-off against current year taxable income? (c) Apply the set-off and show the residual losses carried forward, if any."*

**Step 4 — Compute the tax liability.** Ask: *"Compute the tax liability at 29% on the adjusted taxable income. Show: (a) Tax on taxable income, (b) Final tax on dividends (assume 15% final tax on PKR 600,000 dividend income, already withheld at source), (c) Total tax liability, (d) Any minimum tax implications under Section 113 of the ITO — confirm whether regular tax exceeds minimum tax."*

**Step 5 — Identify advance tax and withholding credits.** Ask: *"The company has paid advance tax of PKR 2,800,000 during the year under Section 147, and has withholding tax credits of PKR 1,450,000 from customer receipts. Compute the net tax payable or refundable. Show the balance of tax to pay with the due date for the annual return under Pakistan tax law."*

**Step 6 — Identify disclosure obligations.** Ask: *"Are there any positions in this tax computation that require a disclosure in the annual return — either because they represent an aggressive interpretation of the law, or because a specific schedule or annexure must be filed? List each disclosure obligation with the relevant schedule reference."*

**Step 7 — Produce the formal computation.** Ask: *"Format the complete tax computation as a formal working paper at /outputs/tax-computation.xlsx with: (1) Accounting profit per audited accounts, (2) Adjustments for tax purposes (each on a separate line with ITO section reference), (3) Adjusted taxable income, (4) Tax computation, (5) Credits and payments, (6) Net tax payable/refundable, (7) Brought-forward loss schedule."*

**Step 8 — Write the jurisdiction SKILL.md.** Ask: *"Draft the core instructions for a Pakistan corporate tax computation SKILL.md. Cover: the six most common add-back items, the Section 113 minimum tax check, the final tax items that must be excluded from regular tax, and the conditions that require escalation to a senior tax professional."*

**Key learning:** Tax computation at the jurisdiction level requires the agent to apply rules that are specific, sometimes complex, and occasionally interact in non-obvious ways (minimum tax vs. regular tax, for example). Step 6 is the most professionally important step: identifying positions that are arguable — and that a tax authority might challenge — is the judgment that no tax computation tool can make autonomously. Your SKILL.md should encode your firm's risk appetite on arguable positions, not just the mechanical computation rules.

**Target time:** 45 minutes.

---

### Exercise 13: M&A Financial Due Diligence with Plugin Commands

**Domain:** Tax and Non-Assurance Advisory
**What you need:** Cowork (Team or Enterprise), financial-services-plugins installed. Hypothetical target company financials. 60 minutes.
**Plugins:** `financial-analysis@financial-services-plugins`, `finance@knowledge-work-plugins`

This exercise runs a financial due diligence process for a hypothetical acquisition, using the `/dcf` and `/comps` commands to value the target and the due diligence framework to identify financial risks and adjustments.

**Target company profile (use as context in every step):** A Pakistan-based FMCG company, three years of audited financial history. Revenue: PKR 450M (Y1), PKR 490M (Y2), PKR 540M (Y3). EBITDA: PKR 58M, PKR 67M, PKR 82M. Net debt: PKR 35M. Management is projecting PKR 620M revenue and PKR 105M EBITDA in Y4. Acquisition price being discussed: PKR 650M.

**Step 1 — Quality of earnings assessment.** Say: *"I am performing financial due diligence on a Pakistan FMCG target. Three years of financials are provided. Perform a quality of earnings analysis: (a) Calculate revenue CAGR and EBITDA CAGR; (b) Identify the EBITDA margin expansion from Year 1 to Year 3 and explain what could drive this; (c) List five questions a due diligence team should ask management to verify whether the EBITDA improvement is sustainable or whether it includes one-off items that should be adjusted out."*

**Step 2 — Normalise EBITDA.** Say: *"Management claims reported EBITDA includes the following items that should be added back for normalised EBITDA: (a) PKR 8M one-off legal settlement in Y2; (b) PKR 4M above-market owner salary in all three years (market rate PKR 2M); (c) PKR 6M in pre-acquisition professional fees in Y3. Compute normalised EBITDA for each year after these adjustments. Calculate the multiple the asking price of PKR 650M implies on both reported and normalised Y3 EBITDA."*

**Step 3 — Run the DCF valuation.**
```
/dcf target-company
```
When prompted for inputs, provide: Revenue Y4E PKR 620M, EBITDA margin 16.9% (PKR 105M), CAPEX 3% of revenue, tax rate 29%, terminal growth rate 4%, WACC 14% (reflecting Pakistan risk premium). Ask: *"At what revenue growth rate does the DCF valuation equal the PKR 650M asking price? What EBITDA margin assumption is embedded in that growth scenario?"*

**Step 4 — Run comparable company analysis.**
```
/comps fmcg-pakistan
```
Ask: *"Based on comparable FMCG companies in Pakistan and comparable emerging market FMCG businesses, what EV/EBITDA multiple range would you apply to this target? How does the PKR 650M asking price compare on normalised Y3 EBITDA of PKR 84M?"*

**Step 5 — Working capital and cash analysis.** Say: *"Perform a working capital analysis. The target's debtor days have moved from 42 to 67 days over the three years, and inventory days from 38 to 52 days. Creditor days have remained stable at 45 days. Calculate the cash conversion cycle at each year-end. Identify the working capital investment required to support the Y4 revenue projection. Adjust the PKR 650M enterprise value for the normalised working capital requirement."*

**Step 6 — Tax due diligence flags.** Say: *"Identify the five most common tax due diligence risk areas for a Pakistan FMCG target. For each: what information should be reviewed? What would constitute a red flag? What is the potential liability if the risk materialises? Produce a tax due diligence checklist at /working-papers/tax-dd-checklist.docx."*

**Step 7 — Produce the due diligence report.** Say: *"Produce a financial due diligence report at /outputs/dd-report.docx with the following sections: (1) Executive summary — key findings and recommended adjustments to purchase price; (2) Quality of earnings — normalised EBITDA bridge; (3) Valuation — DCF and comparables; (4) Working capital — cash conversion cycle trend and normalised requirement; (5) Tax — key risk areas; (6) Key open items — questions to be answered before closing. Maximum 8 pages."*

**Step 8 — Write the DD SKILL.md.** Ask: *"Draft a SKILL.md for a financial due diligence agent. Include: the standard quality of earnings adjustments to always test, the working capital normalisation methodology, the tax risk checklist items, and the three findings that would always cause a deal recommendation to be 'do not proceed'."*

**Key learning:** The DCF and comps commands produce technically correct valuations. The professional judgment is in Steps 1, 2, and 5 — deciding which items to adjust out of EBITDA, what working capital is normal versus inflated, and how to interpret the cash conversion cycle trend. These are the findings that move the negotiated price. The agent cannot make these judgments without your instruction; but once you provide them, it can model their financial consequences quickly and completely.

**Target time:** 60 minutes.

---

### Exercise 14: Restructuring Scenario Modelling

**Domain:** Tax and Non-Assurance Advisory
**What you need:** Cowork, financial-services-plugins installed. 45 minutes.
**Plugins:** `financial-analysis@financial-services-plugins`

This exercise models a company in financial difficulty across three restructuring scenarios and produces the financial projections for each that an insolvency practitioner or advisory CA/CPA would present to stakeholders.

**Distressed entity:** A Pakistan manufacturing company. Total debt: PKR 180M (PKR 80M bank, PKR 100M trade creditors). EBITDA: PKR 22M. Annual interest cost: PKR 24M (company is loss-making after interest). Going concern doubt exists. Three scenarios being considered: (1) Consensual restructuring — banks accept 30% haircut, creditors accept 18-month payment terms; (2) Voluntary arrangement — formal creditor moratorium for 24 months, 40% haircut on unsecured creditors; (3) Asset sale — EBITDA-generating operations sold to a strategic buyer, remaining entity wound down.

**Step 1 — Current state analysis.** Say: *"Prepare a financial stress analysis for this distressed company. Current EBITDA is PKR 22M, annual interest is PKR 24M. Calculate: interest coverage ratio, net debt/EBITDA, and the cash shortfall per year if trading continues with current debt structure. How many months of EBITDA is needed to service debt at current levels?"*

**Step 2 — Model Scenario 1: Consensual bank restructuring.**
```
/lbo restructuring-scenario-1
```
Provide inputs: restructured debt of PKR 56M (PKR 80M × 70%), interest rate 12%, 5-year amortisation, EBITDA maintained at PKR 22M growing 5% annually, trade creditors on standard 18-month deferred terms.

Ask: *"Show the debt service coverage ratio (DSCR) for each year of the restructuring. At what EBITDA does the company breach a DSCR covenant of 1.25x? What is the probability this restructuring is sustainable?"*

**Step 3 — Model Scenario 2: Formal voluntary arrangement.** Say: *"Under the voluntary arrangement scenario: unsecured trade creditors (PKR 100M) receive 60 cents in the dollar (PKR 60M total payment over 24 months). Bank debt remains at face value but is rescheduled. Model the cash flows for this scenario and show: (a) Total creditor recovery amounts; (b) Cash required over 24 months; (c) Whether EBITDA is sufficient to fund the arrangement without additional liquidity; (d) The net present value of creditor recoveries at a 15% discount rate."*

**Step 4 — Model Scenario 3: Asset sale and wind-down.** Say: *"An FMCG strategic buyer has indicated interest in the operating assets at 5× EBITDA. Calculate the gross sale proceeds. Show the application of proceeds in priority order: secured creditors first, then unsecured. Produce a creditor waterfall showing recovery rates for each class. Compare recovery rates across all three scenarios in a summary table."*

**Step 5 — Stakeholder analysis.** Say: *"For each scenario, produce a stakeholder outcome table showing: the bank's recovery (PKR and % of face value), trade creditors' recovery (PKR and %), and equity holders' recovery (PKR and %). Add a column for 'timeline to resolution' — estimated months from today until each scenario concludes. Which scenario is best for each stakeholder class?"*

**Step 6 — Professional judgment overlay.** Ask: *"What are the three factors that are most likely to cause Scenario 1 (consensual restructuring) to fail after it is agreed? What early warning indicators should the monitoring CA/CPA watch for during the restructuring period?"*

**Step 7 — Produce the restructuring report.** Say: *"Produce a restructuring options report at /outputs/restructuring-report.docx: (1) Executive summary — recommendation; (2) Current financial position; (3) Scenario 1 — analysis and creditor outcomes; (4) Scenario 2 — analysis and creditor outcomes; (5) Scenario 3 — analysis and creditor outcomes; (6) Comparative summary table; (7) Recommended course of action with rationale."*

**Key learning:** Restructuring scenario modelling requires the agent to run three parallel models and produce stakeholder recovery tables — mechanical work that takes hours manually and minutes with the `/lbo` command. The professional value-add is in Steps 6 and 7: identifying what causes restructurings to fail and making a recommendation. No model can make a restructuring recommendation without understanding the dynamics between creditors, the management team's credibility, and the operational viability of the business. The recommendation in Step 7 requires your judgment. The three scenarios in Steps 2–4 are what makes your judgment informed.

**Target time:** 45 minutes.

---

## Block C: Assurance Services Exercises

---

### Exercise 15: Full External Audit Programme with `/sox-testing`

**Domain:** Assurance Services
**What you need:** Cowork (Team or Enterprise), knowledge-work-plugins/finance installed. 50 minutes.
**Plugins:** `finance@knowledge-work-plugins`

This exercise builds a complete audit programme for a specific financial statement area — revenue recognition — using the `/sox-testing` command and the audit risk assessment framework.

**Audit context:** External audit of a Pakistan software company. Revenue is recognised from: (a) SaaS subscriptions (monthly recurring revenue, recognised monthly over the subscription period); (b) Implementation services (recognised on percentage-of-completion basis); (c) Annual maintenance contracts (recognised straight-line over the contract period). Total revenue: PKR 280M. Auditor's materiality: PKR 5.6M (2% of revenue).

**Step 1 — Revenue risk assessment.** Say: *"I am planning the external audit of revenue for a Pakistan software company. Three revenue streams are described above. For each stream, identify: (a) The IFRS 15 performance obligation; (b) The point or period of revenue recognition; (c) The specific risk of material misstatement — what could go wrong and in which direction (overstatement or understatement)?"*

**Step 2 — Significant risk identification.** Ask: *"Which of the three revenue streams represents a 'significant risk' under ISA 315 that requires specific audit procedures beyond standard substantive testing? Justify your answer."*

**Step 3 — Run the SOX testing command for the highest-risk control.**
```
/sox-testing revenue-recognition-implementation-services
```
Review the output. Ask: *"This control testing programme is for US SOX Section 404. I am performing an external audit under ISAs, not SOX. What adjustments are required to convert this into an ISA-compliant substantive procedures programme? What is the key difference between a controls test and a substantive procedure?"*

**Step 4 — Build the complete substantive procedures programme.** For each revenue stream, ask Cowork to produce a specific procedure:

*"For SaaS subscription revenue: design a substantive procedure that tests whether revenue has been recognised in the correct period. Include: the population to test (all contracts with renewal dates in the final quarter), the evidence to inspect (contract documents, system-generated invoices, bank receipts), the comparison to perform (licence fees receivable per contract vs. revenue recognised), and the conclusion to document."*

Repeat for implementation services and maintenance contracts.

**Step 5 — Design the cut-off test.** Say: *"Revenue cut-off is always a risk at year-end. Design a cut-off test for all three revenue streams. Specify: the date range to examine (the two weeks before and two weeks after year-end), the population to select, the evidence to obtain for each transaction, and what a cut-off error looks like in each revenue stream."*

**Step 6 — Build the working paper template.** Ask: *"Create an audit working paper template at /working-papers/revenue-audit-programme.xlsx with: (1) Risk assessment for each revenue stream; (2) Planned procedures with responsible auditor, planned sample size, and planned hours; (3) Results section — actual sample selected, exceptions identified, conclusion; (4) Sign-off section — preparer and reviewer with dates."*

**Step 7 — Analytical procedures.** Ask: *"Design an analytical procedure for revenue that would flag anomalies before detailed testing. Include: (a) Monthly revenue trend analysis — what pattern would you expect and what deviation would trigger further investigation? (b) Revenue per employee as a reasonableness check; (c) Deferred revenue movement analysis — what should increase when annual maintenance contracts are billed and decrease when they are recognised? Produce the analytical procedure template at /working-papers/revenue-analytics.xlsx."*

**Step 8 — Produce the audit planning memo.** Ask: *"Produce a revenue audit planning memo at /outputs/revenue-planning-memo.docx that documents: the risk assessment, significant risks identified, planned audit approach (controls reliance vs. purely substantive), key procedures, sample sizes with rationale, and the auditor responsible for each section."*

**Key learning:** The `/sox-testing` command produces a technically competent control testing framework. The professional value of this exercise is in Step 3: understanding the difference between a control test and a substantive procedure, and between SOX (management's internal assessment) and an external audit (independent assurance for financial statement users). An auditor who relies on an agent-generated SOX testing programme for an ISA external audit is applying the wrong framework. The agent needs your professional direction to produce the right type of procedures for the right type of engagement.

**Target time:** 50 minutes.

---

### Exercise 16: Continuous Transaction Monitoring — Fraud Detection Setup

**Domain:** Assurance Services
**What you need:** Cowork (Team or Enterprise), transaction data in Excel. 45 minutes.
**Plugins:** `finance@knowledge-work-plugins`

This exercise designs and deploys a continuous transaction monitoring workflow — the operational version of the continuous audit agent described earlier in this chapter. It focuses specifically on fraud detection patterns.

**Step 1 — The fraud risk brainstorm.** Say: *"I am setting up continuous transaction monitoring for a manufacturing company's purchase-to-pay cycle. Using the ISA 240 fraud risk framework, identify the ten most common fraud schemes in the purchase-to-pay cycle of a manufacturing company. For each scheme: (a) how does it appear in the transaction data? (b) what pattern, threshold, or anomaly would indicate it? (c) what data field or combination of fields would need to be examined?"*

**Step 2 — Design the detection rules.** For the three highest-risk schemes identified in Step 1, ask Cowork to write specific detection rules:

*"For duplicate payment fraud: write a detection rule that can be applied to an Excel transaction register. The rule should flag any payment where: the vendor name and amount match another payment within the last 90 days, OR the invoice number appears more than once across any vendor, OR the same amount is paid to the same vendor within 7 days. Write this as an Excel formula and as a plain-English monitoring rule for a Cowork scheduled task."*

Repeat for ghost vendor fraud and expense reimbursement manipulation.

**Step 3 — Build the monitoring workbook.** Say: *"Create an Excel workbook at /outputs/transaction-monitor.xlsx with: Sheet 1 — raw transaction data (paste or import the company's payments register); Sheet 2 — Duplicate payment analysis (apply the detection rule from Step 2); Sheet 3 — Vendor analysis (flag vendors added in the last 6 months with no PO number history); Sheet 4 — Exception summary (all flagged transactions with fraud risk rating: High/Medium/Low and recommended action)."*

**Step 4 — Test with seeded anomalies.** Add five artificial anomalies to the transaction data (two duplicate payments, one round-number payment to a new vendor, one payment just below the approval threshold, one payment to a vendor address matching an employee address). Run the monitoring workbook. Confirm all five are flagged. Note any false positives.

**Step 5 — Set the escalation thresholds.** Ask: *"Based on the exception volume from Step 4, what escalation thresholds are appropriate? Suggest: (a) the number of exceptions per week that would be normal for a company this size; (b) the number that would indicate either a genuine fraud risk or a poorly designed rule; (c) what qualifies as a 'high' vs. 'medium' vs. 'low' risk flag."*

**Step 6 — Write the scheduled monitoring task.** Write and activate a `/schedule` task: *"Every Monday at 8:00 AM: read the latest transaction export from /inputs/payments-register.csv; run all detection rules in /outputs/transaction-monitor.xlsx; produce an exception report at /outputs/exceptions-[date].xlsx; if any High-risk exceptions are present, send an immediate alert. If more than 10 exceptions of any risk level are present, send an alert."*

**Step 7 — Write the internal audit SKILL.md.** Ask: *"Draft a SKILL.md for a continuous fraud monitoring agent. Include: the ten fraud schemes to monitor, the detection rules for each, the escalation logic, and the two conditions that should always cause the agent to stop and alert the Chief Internal Auditor immediately (rather than the standard weekly report)."*

**Key learning:** The most important professional judgment in this exercise is in Step 5 — calibrating escalation thresholds. Rules that flag too little fail to detect fraud. Rules that flag too much create alert fatigue, and alert fatigue causes genuine fraud to be dismissed along with false positives. The threshold calibration is a professional judgment that requires understanding the specific company, its transaction patterns, and the risk appetite of the audit committee. No agent can set these thresholds without your instruction.

**Target time:** 45 minutes.

---

### Exercise 17: Internal Audit Report from Working Papers

**Domain:** Assurance Services
**What you need:** Cowork (Team or Enterprise), working paper notes (real or hypothetical). 40 minutes.
**Plugins:** `finance@knowledge-work-plugins`

This exercise takes raw internal audit working papers and produces a completed Internal Audit Report — the final deliverable that the Head of Internal Audit presents to the Audit Committee.

**Hypothetical working papers:** Create a folder `/inputs/audit-working-papers/` containing:
- `testing-results.txt`: "We tested 25 payment transactions. 3 exceptions found: (1) Two payments of PKR 85,000 and PKR 120,000 approved by the same manager who also raised the PO — segregation of duties failure; (2) One payment of PKR 340,000 made without a supporting invoice — only a WhatsApp message from the vendor. The vendor is a related party. Value at risk: PKR 340,000."
- `process-notes.txt`: "Purchase-to-pay process relies on a single ERP system. Approval workflow is electronic but can be bypassed by the system administrator. No compensating control for system administrator access. Verbal confirmation obtained that administrator has no procurement authority — not documented."
- `management-response.txt`: "Finance Manager confirmed the related party transaction was approved verbally by the CEO. Invoice was requested from vendor but not yet received. Segregation of duties exceptions: management states dual approval is impractical given small team size. Compensating control proposed: monthly reconciliation of all payments by CFO."

**Step 1 — Classify findings by risk.** Say: *"Read the working papers in /inputs/audit-working-papers/. Classify each finding using the standard internal audit risk rating: Critical (immediate action required, significant financial or reputational risk), High (prompt action required, significant control weakness), Medium (action required within 90 days), Low (best practice improvement). Justify each rating."*

**Step 2 — Draft the finding descriptions.** For each finding, ask Cowork to produce a formal finding description following the 5-C format:
*"Write each finding using the 5-C structure: Condition (what was found), Criteria (what should be happening per policy or best practice), Cause (why the gap exists), Consequence (what could happen as a result), and Corrective action (what management has agreed to do)."*

**Step 3 — Evaluate management responses.** Ask: *"Review the management responses in management-response.txt. For each finding, assess whether the proposed corrective action is adequate to remediate the risk identified. For findings where the response is inadequate, draft a stronger recommendation."*

**Step 4 — Produce the Executive Summary.** Ask: *"Produce a one-page Executive Summary for the Internal Audit Report. Include: (a) overall audit opinion (Satisfactory/Needs Improvement/Unsatisfactory) with justification; (b) number of findings by risk category; (c) the most significant finding in plain language; (d) the most important recommended action."*

**Step 5 — Build the complete report.** Ask: *"Produce the complete Internal Audit Report at /outputs/internal-audit-report.docx with: (1) Title page and distribution list; (2) Executive Summary from Step 4; (3) Audit scope and methodology; (4) Findings — one section per finding in 5-C format with risk rating and management response; (5) Summary table — all findings with risk rating, management response, agreed completion date, and responsible owner; (6) Appendix — details of testing performed."*

**Step 6 — Prepare the Audit Committee presentation.** Ask: *"Produce a three-slide PowerPoint presentation for the Audit Committee at /outputs/ac-presentation.pptx: Slide 1 — Audit scope and overall opinion; Slide 2 — The two highest-risk findings with recommended management actions; Slide 3 — 90-day action plan with owners and completion dates."*

**Key learning:** The Executive Summary and the Audit Committee presentation in Steps 4 and 6 are where the Head of Internal Audit adds professional value — translating findings into the language of governance risk, connecting them to the board's risk appetite, and making a clear recommendation. The agent can produce technically complete 5-C finding descriptions reliably. The judgment is in Step 3 (evaluating management responses) and Step 4 (forming the overall audit opinion). An audit opinion cannot be delegated to an agent; the CA/CPA must form it based on the weight of evidence.

**Target time:** 40 minutes.

---

## Block D: Management Accounting Exercises

---

### Exercise 18: Rolling 13-Week Cash Flow Forecast

**Domain:** Management Accounting and Financial Management
**What you need:** Cowork (Team or Enterprise), Claude in Excel. 50 minutes.
**Plugins:** `finance@knowledge-work-plugins`

Cash flow forecasting is the management accountant's most time-critical deliverable. When a company is under cash pressure, an accurate 13-week view is the difference between a managed situation and a crisis. This exercise builds a fully automated 13-week rolling cash flow model using Cowork and the finance plugin, designed to update automatically each week.

**Step 1 — Design the cash flow categories.** Before building the model, say: *"I am building a 13-week rolling cash flow forecast for a manufacturing company. Design the cash flow categories using the direct method: (a) Receipts — list all categories of cash in, including customer receipts by payment term bucket (current, 30 days, 60 days overdue); (b) Disbursements — list all categories of cash out in the order they would appear on a weekly cash flow; (c) Financing — bank facilities drawdowns and repayments. For each category, specify the driver — what determines the amount each week."*

**Step 2 — Build the model structure in Excel.** Ask Cowork to create the model:

*"Create an Excel file at /outputs/13-week-cashflow.xlsx using IDFA conventions from Chapter 18. Use Named Ranges for all inputs. Structure: Row 1 = Week labels (W1 to W13 with specific dates); Column A = Cash flow categories from Step 1; Named Range inputs for: Customer payment terms (current, 30 days, 60 days splits as % of revenue), Supplier payment terms, Payroll frequency, VAT payment month, Bank facility limit and current drawdown."*

**Step 3 — Build the receipts forecast.** Say: *"Model weekly customer receipts. The company invoices PKR 45M per month. Assume payment profile: 30% received in the month of invoice, 50% received one month later, 15% received two months later, 5% bad debt. Build a receipts waterfall that tracks invoice cohorts week by week for the 13-week period. Use Named Ranges for all percentage assumptions."*

**Step 4 — Build the disbursements forecast.** Say: *"Model the weekly disbursements: (a) Supplier payments — PKR 28M per month, 60% paid in 30 days, 40% in 45 days; (b) Payroll — PKR 8M on the last working day of each month; (c) Utilities — PKR 0.8M first week of each month; (d) Bank interest — PKR 1.2M on the 15th of each month; (e) VAT payment — any net VAT payable from two months prior, paid on the 15th. Model each as a Named Range formula driving the weekly cash flow."*

**Step 5 — Build the bank facility model.** Ask: *"Model the revolving credit facility: limit PKR 50M, current drawdown PKR 22M. Each week: calculate the closing cash position before facility movements. If closing cash is negative, automatically draw on the facility to restore cash to PKR 2M minimum (the company's minimum operating cash requirement). If closing cash exceeds PKR 5M, repay facility. Cap total drawdown at the PKR 50M limit. Flag any week where the facility limit would be breached."*

**Step 6 — Stress test.** Ask: *"Run two stress scenarios on the 13-week model: (a) Collections slow: the 30% current-month collection rate drops to 15% for weeks 1 to 4 (a customer payment delay scenario); (b) Revenue drop: invoicing falls 25% in weeks 3 to 7 (a trading downturn scenario). For each scenario, show: the minimum weekly closing cash balance, the maximum facility drawdown, and whether the facility limit is breached at any point."*

**Step 7 — Set up the weekly update scheduled task.** Write a `/schedule` task: *"Every Monday at 7:30 AM: update the 13-week cash flow model by advancing the week counter by one (drop Week 1, add a new Week 13 from the rolling forecast); update actual receipts for the prior week from the bank statement file at /inputs/bank-statement.csv; recalculate the full 13-week forecast; flag any week where the facility drawdown exceeds 80% of the limit or where closing cash falls below PKR 2M; save updated model to /outputs/13-week-cashflow-[date].xlsx."*

**Key learning:** The 13-week cash flow model is the management accountant's most demanding regular deliverable in a liquidity-constrained environment — and the one where an error has immediate, visible consequences. The stress test in Step 6 is the most important professional contribution: not because the agent cannot run it, but because designing the right stress scenarios requires knowledge of the specific risks the company faces. An agent can stress-test the model you design; it cannot design the scenarios that test what actually keeps the CFO awake at night.

**Target time:** 50 minutes.

---

### Exercise 19: Full Board Pack Automation — Cross-App Cowork Workflow

**Domain:** Management Accounting and Financial Management
**What you need:** Cowork (Max, Team, or Enterprise), Claude in Excel and Claude in PowerPoint installed. Management accounts for one period. 55 minutes.
**Plugins:** `finance@knowledge-work-plugins`

This exercise builds the complete monthly board pack — from raw financial data to a polished, board-ready PowerPoint presentation — as a single orchestrated Cowork workflow.

**Step 1 — Define the board pack structure.** Say: *"I need to produce a monthly board pack for a manufacturing company. The board meets on the third Thursday of each month. The pack must be distributed 48 hours before the meeting. Design the standard board pack structure: what sections should it contain, what data source feeds each section, and what is the 'one thing the board must understand' from each section? Output this as a board pack blueprint."*

**Step 2 — Run the management accounts.** Using your month-end financial data (from Exercise 9 or your own data):
```
/income-statement monthly
/variance-analysis monthly
```
Confirm both outputs are saved in `/outputs/`.

**Step 3 — Build the financial summary in Excel.** Ask: *"Take the management accounts and variance analysis and produce a five-sheet Excel financial summary at /outputs/board-financial-summary.xlsx: (1) P&L — actual vs. budget vs. prior year with % variance columns; (2) Key financial ratios — gross margin, EBITDA margin, interest coverage, current ratio — actual vs. budget vs. prior year; (3) Revenue bridge — waterfall chart from prior year to current period showing volume, price, mix, and new customers; (4) EBITDA bridge — waterfall from budget to actual; (5) Cash summary — opening cash, operating cash flow, investing, financing, closing cash."*

**Step 4 — Generate the management commentary.** Ask: *"Based on the financial summary, draft the management commentary section of the board pack. Write it from the CFO's perspective. Structure: (1) Headline — one sentence on the period's overall performance; (2) Revenue — two to three sentences on revenue performance with the key driver; (3) EBITDA — two to three sentences on margin development; (4) Cash — one sentence on cash position and any material movements; (5) Outlook — one sentence on the current quarter trajectory. Write in the active voice. No bullet points — connected prose."*

**Step 5 — Cross-app: build the PowerPoint board pack.** Ask: *"Using the Excel financial summary and management commentary, create a comprehensive board pack presentation at /outputs/board-pack-[month].pptx. Slides: (1) Cover — company name, period, meeting date, prepared by; (2) Executive summary — headline performance and one key message; (3) P&L summary — actual vs. budget with traffic light indicators (Green = within 5% of budget, Amber = 5–15% unfavourable, Red = >15% unfavourable); (4) Revenue bridge — waterfall chart; (5) EBITDA bridge — waterfall chart; (6) Key ratios — dashboard with trend sparklines; (7) Cash flow summary; (8) Management commentary (the CFO narrative from Step 4); (9) Outlook and next steps."*

**Step 6 — Quality review.** Ask: *"Review the board pack presentation for: (a) internal consistency — do the numbers on every slide tie back to the Excel source? (b) visual clarity — is every chart clearly labelled with units and period? (c) narrative coherence — does the commentary on slide 8 align with the financial data on slides 3–7? List any inconsistencies."*

Resolve every inconsistency flagged before proceeding.

**Step 7 — Set up the scheduled board pack task.** Write a `/schedule` task: *"On the 10th of each month at 6:00 AM: run the management accounts and variance analysis from the trial balance file in /inputs/; build the Excel financial summary; generate the board pack PowerPoint; flag any metrics in the Red zone for urgent CFO review; save both files to /outputs/board-pack-[month]/. Send an alert: 'Draft board pack ready for review. [N] Red-zone metrics require attention.'"*

**Key learning:** The cross-app workflow — from Excel data through to board-ready PowerPoint — is one of Cowork's most powerful capabilities for CA/CPA practice. Steps 4 and 6 are where your professional contribution concentrates. The management commentary is not a summary of the numbers — it is the CFO's interpretation of what the numbers mean for the business. No agent can write this without understanding the business context. Step 6's quality review is the discipline that ensures the agent-produced pack meets the standard a board expects.

**Target time:** 55 minutes.

---

## Block E: Governance, Risk and Compliance Exercises

---

### Exercise 20: Enterprise Risk Register — Build and Scheduled Maintenance

**Domain:** Governance, Risk and Compliance Advisory
**What you need:** Cowork (Team or Enterprise). 45 minutes.
**Plugins:** `finance@knowledge-work-plugins`

The enterprise risk register is the primary tool of the risk management function. This exercise builds a risk register from scratch for a hypothetical entity and deploys it as a Cowork-maintained, continuously updated document.

**Entity context:** A Pakistan mid-market pharmaceutical distributor. Regulated by DRAP (Drug Regulatory Authority of Pakistan). Three business lines: (1) branded prescription medicines, (2) generic over-the-counter products, (3) medical devices. 200 employees, PKR 800M revenue.

**Step 1 — Risk identification by category.** Say: *"Using the COSO Enterprise Risk Management framework, identify the enterprise risks for a Pakistan pharmaceutical distributor across five categories: (1) Strategic risks, (2) Operational risks, (3) Financial risks, (4) Compliance/regulatory risks, (5) Reputational risks. For each category, identify the four most significant risks specific to this entity and sector. For each risk: name the risk, describe how it could materialise, and identify the stakeholder most affected."*

**Step 2 — Risk assessment.** Ask: *"For each of the 20 risks identified, assess: (a) Inherent likelihood (1–5 scale: 1 = rare, 5 = almost certain); (b) Inherent impact (1–5 scale: 1 = negligible, 5 = catastrophic); (c) Inherent risk score (likelihood × impact); (d) The primary control that currently mitigates this risk; (e) Residual risk score after applying controls."*

**Step 3 — Build the risk register in Excel.** Ask: *"Create the risk register at /outputs/risk-register.xlsx with columns: Risk ID, Risk Category, Risk Description, Risk Owner (role, not name), Inherent Likelihood, Inherent Impact, Inherent Score, Primary Control, Control Effectiveness (Effective/Partially Effective/Ineffective), Residual Likelihood, Residual Impact, Residual Score, Risk Response (Accept/Mitigate/Transfer/Avoid), Action Required, Due Date, Status. Populate all 20 risks."*

**Step 4 — Build the heat map.** Ask: *"Create a risk heat map on a separate sheet in the Excel workbook. Plot all 20 risks on a 5×5 grid (x-axis = impact, y-axis = likelihood). Colour code: red = score 16–25, amber = 8–15, yellow = 4–7, green = 1–3. Produce both the inherent and residual heat maps side by side to show how controls are reducing risk."*

**Step 5 — Identify the top 5 risks.** Ask: *"Which five risks have the highest residual score? For each: (a) Is the current control effective? (b) What additional mitigation action would reduce the residual score? (c) What is the early warning indicator that this risk is materialising — what would the company start to see before the risk event occurs?"*

**Step 6 — Write the quarterly update scheduled task.** Write and activate: *"/schedule: On the first Monday of each quarter at 8:00 AM: review the risk register at /outputs/risk-register.xlsx; for each risk, check whether the status of the action required has been updated in the /inputs/risk-updates.xlsx tracking file; update the register; identify any risks where the residual score has increased since last quarter; produce a risk management update report at /outputs/risk-update-[quarter].docx highlighting changes and emerging risks; send alert if any risk has moved from Amber to Red."*

**Step 7 — Board risk report.** Ask: *"Produce a one-page risk summary for the board at /outputs/board-risk-report.docx: top 5 risks by residual score with heat map excerpt; three risks where the residual score has increased this quarter; one emerging risk not yet on the register; and the Risk Manager's overall assessment of the organisation's risk profile — Improving, Stable, or Deteriorating — with one-sentence justification."*

**Key learning:** The risk register itself is mechanical — a structured list of risks with scores. The professional value is in Steps 5 and 7: identifying early warning indicators (which requires knowing the business well enough to know what a risk looks like before it becomes an event) and forming an overall assessment of the risk profile (which requires judgment about the aggregate picture, not just the individual scores). The scheduled task in Step 6 converts a quarterly manual update process into an automated one — but the assessment in Step 7 always requires a CA/CPA to form a view.

**Target time:** 45 minutes.

---

### Exercise 21: Regulatory Compliance Calendar — Automated Weekly Monitoring

**Domain:** Governance, Risk and Compliance Advisory
**What you need:** Cowork (Team or Enterprise), scheduled tasks activated. 40 minutes.
**Plugins:** `finance@knowledge-work-plugins`

This exercise builds the most operationally valuable GRC tool in CA/CPA practice: a compliance calendar that monitors every regulatory obligation, tracks preparation status, and alerts the CA/CPA when action is needed — automatically, every week.

**Entity type:** Pakistan listed public company with obligations to: SECP (Securities and Exchange Commission of Pakistan), PSX (Pakistan Stock Exchange), FBR (Federal Board of Revenue), SBP (State Bank of Pakistan for foreign exchange compliance), and EOBI (Employees' Old-Age Benefits Institution).

**Step 1 — Build the obligation inventory.** Say: *"Produce a complete regulatory obligation inventory for a Pakistan listed public company. For each regulator (SECP, PSX, FBR, SBP, EOBI), list every periodic filing obligation: the name of the filing, the frequency (monthly/quarterly/annually), the deadline, the penalty for late filing, and the key information required to prepare the filing. Produce this as a table."*

**Step 2 — Build the compliance calendar in Excel.** Ask: *"Create a compliance calendar at /outputs/compliance-calendar.xlsx with: (1) Master obligation sheet — all obligations from Step 1 with regulator, deadline formula (calculated from period-end date), days-until-due formula, RAG status (Green = >21 days, Amber = 8–21 days, Red = 0–7 days, Overdue = past due); (2) Monthly view — a calendar showing all due dates colour-coded by regulator; (3) Current week view — obligations due in the next 14 days with preparation checklist for each."*

**Step 3 — Build the preparation checklists.** For the five highest-volume obligations (monthly tax withholding return, quarterly SECP return, annual accounts filing, PSX announcement schedule, EOBI monthly contribution), ask:

*"For each obligation: produce a preparation checklist — the specific information items and documents that must be assembled before preparation can begin. Format as a checklist with checkboxes. Include the name of the person responsible for each item and the lead time required."*

Save each checklist as a separate sheet in the compliance-calendar.xlsx workbook.

**Step 4 — Write the weekly monitoring scheduled task.** Write and activate: *"/schedule: Every Monday at 7:00 AM: open /outputs/compliance-calendar.xlsx; update the 'days-until-due' calculations to reflect today's date; identify all obligations moving from Green to Amber this week (21 days or fewer until due); identify all obligations due within 7 days (Red); check whether each Red obligation has been marked 'In Progress' or 'Complete' in the status column of the master sheet; for any Red obligation not yet started, send a priority alert with the obligation name, due date, regulator, penalty for late filing, and the preparation checklist items not yet checked off; produce a weekly compliance status report at /outputs/compliance-status-[date].xlsx."*

**Step 5 — Test the exception path.** Manually change one obligation's status to show it is in the Red zone and not yet started. Run the scheduled task manually. Confirm the priority alert is generated with the correct information.

**Step 6 — Build the penalty matrix.** Ask: *"Create a penalty matrix sheet in the compliance calendar showing: for each obligation, the penalty structure (fixed fine, daily fine, percentage of tax, combination); the cumulative penalty at 7 days late, 30 days late, 90 days late; and any criminal liability provisions. Highlight in red any obligation where the penalty exceeds PKR 500,000 or where criminal liability attaches."*

**Step 7 — Produce the quarterly compliance report.** Ask: *"Produce a quarterly compliance report for the Audit Committee at /outputs/quarterly-compliance-report.docx: (1) Summary of all obligations that fell due in the quarter — filed on time, filed late, or missed; (2) Any penalties incurred during the quarter; (3) Obligations due in the next quarter with risk rating; (4) Any new regulatory requirements effective in the next 12 months."*

**Key learning:** A compliance calendar that runs automatically and alerts in advance converts the CA/CPA's compliance management function from reactive (scrambling when a deadline is missed) to proactive (managing preparation ahead of every deadline). The penalty matrix in Step 6 is the professional judgment component: identifying which obligations carry the most severe consequences of non-compliance focuses attention on the right priorities when the calendar shows multiple simultaneous obligations. This is risk-stratified compliance management — a more sophisticated function than simply tracking deadlines.

**Target time:** 40 minutes.

---

## Block F: Advanced Multi-Domain Workflow Exercises

*These exercises combine capabilities across multiple domains and plugins into comprehensive end-to-end workflows.*

---

### Exercise 22: New Client Onboarding — Full Engagement Setup Workflow

**Domain:** Cross-domain
**What you need:** Cowork (Team or Enterprise), all plugins installed. 60 minutes.
**Plugins:** `finance@knowledge-work-plugins`, `financial-analysis@financial-services-plugins`

This exercise builds the complete new client onboarding workflow for a CA/CPA firm — from receiving client documents through to a fully prepared engagement file with risk assessment, proposed scope, fee estimate, and all SKILL.md extensions configured.

**New client profile:** A Pakistani private limited company — a textile exporter, 3 years operating, PKR 320M revenue, first audit required by bank for working capital facility. The company has provided: three years of management accounts (in Excel), the Memorandum and Articles of Association, the shareholder register, and a brief business overview from the CEO.

**Step 1 — Document intake and classification.** Place all documents in `/inputs/new-client-alpha/`. Say: *"Review all documents provided for this new client. Produce a client profile: (a) entity type and ownership structure; (b) industry and principal business activities; (c) key financial metrics for each year — revenue, gross margin, EBITDA, net profit; (d) key customers and suppliers if identifiable; (e) any immediate risks or issues visible from the documents."*

**Step 2 — Engagement risk assessment.** Ask: *"Perform an engagement acceptance risk assessment for this client under ISA 220 (Quality Management for an Audit of Financial Statements). Assess: (a) Client integrity — any risk factors from the available information? (b) Audit risk — industry complexity, transaction types, related party risk; (c) Resource risk — does the firm have the competence and capacity to perform this engagement? (d) Independence risk — any potential threats to independence? Produce an engagement risk rating: Low/Moderate/High."*

**Step 3 — Financial analytical review.** Run:
```
/income-statement three-year-trend
/variance-analysis year-on-year
```
Then ask: *"Perform an analytical review of the three years of management accounts. Identify: (a) any significant trends in revenue, margin, or profitability; (b) any year where the numbers look unusual relative to trend; (c) the ratio that most needs explanation before audit planning can proceed."*

**Step 4 — Propose the engagement scope and fee.** Ask: *"Based on the client profile, risk assessment, and analytical review, propose: (a) The scope of services — which CA/CPA domains from this chapter are relevant? What services should we propose for Year 1? (b) The audit approach — key audit areas and why; (c) A fee estimate — using a standard rate card (provide notional rates if using hypothetical data) and estimated hours by seniority level; (d) Key engagement conditions — any non-standard matters to include in the engagement letter."*

**Step 5 — Draft the engagement letter.** Ask: *"Draft the engagement letter for the audit of financial statements for the year ending [date]. Include: the scope of the audit, management's responsibilities, auditor's responsibilities, fee arrangements, billing schedule, and the limitation of liability clause. Follow the standard format required under ISA 210 and adapt for Pakistani professional standards."*

**Step 6 — Build the client-specific SKILL.md extensions.** Using the information gathered in Steps 1–4, ask:

*"Draft the following SKILL.md extensions for this client: (1) Client entity knowledge — encode the business model, revenue recognition method applicable (IFRS 15 for export sales with specific incoterms), seasonal patterns visible in the management accounts, and the key audit risk areas; (2) Jurisdiction specifics — Pakistan textile export sector: applicable tax exemptions (SRO provisions for exporters), DLTL (Duty and Tax Remission for Exports) claims, and WHT rates applicable to export proceeds."*

**Step 7 — Create the engagement file structure.** Ask: *"Create the standard engagement file folder structure at /client-alpha-audit/: permanent file (entity documents, engagement letter, prior year files), current year working file (planning, fieldwork sections by audit area, conclusions), and output folder (draft accounts, management letters, signed opinions). Populate the permanent file with the documents provided."*

**Step 8 — Produce the client meeting agenda.** Ask: *"Produce a 90-minute client kick-off meeting agenda at /outputs/kick-off-agenda.docx. The meeting is with the CEO and Finance Manager. Sections: (1) Engagement scope and timeline; (2) Information required from the client and by when; (3) Key audit areas and why; (4) The client's responsibilities under the audit; (5) Fee and billing; (6) Our AI-augmented audit approach — how Cowork and our finance plugins will be used, what this means for the client, and how professional judgment is maintained throughout."*

**Key learning:** Section (6) of the client meeting agenda — explaining your AI-augmented approach — is increasingly important. Clients will ask how AI is used in your engagement. The CA/CPA who can explain clearly that AI handles execution while the CA/CPA maintains professional responsibility for every judgment call, opinion, and deliverable is demonstrating both innovation and professional integrity. This is the narrative that allows you to price AI-augmented services appropriately rather than competing on cost reduction alone.

**Target time:** 60 minutes.

---

### Exercise 23: The Annual Audit Cycle — Planning to Completion

**Domain:** Cross-domain (Assurance Services + Accounting and Financial Reporting)
**What you need:** Cowork (Team or Enterprise), all plugins installed. This is a capstone exercise running over multiple sessions. Individual session: 75 minutes.
**Plugins:** `finance@knowledge-work-plugins`, `financial-analysis@financial-services-plugins`

This exercise runs the complete annual audit cycle for a hypothetical client — from planning through to the audit opinion. It is designed to be run across three sessions (planning, fieldwork, completion) that can be spread over multiple study periods.

**Audit client:** The same manufacturing company from Exercise 9 (or use your own client). Assume it is now year-end and the financial statements from Exercise 9 are the draft accounts.

**Session 1 — Audit Planning (25 minutes)**

**Step 1 — Understand the entity.** Say: *"I am planning the external audit of [entity] for the year ended [date]. Using the financial statements produced in Exercise 9 as context, perform the planning analytical procedures required by ISA 315. Calculate year-on-year changes for all income statement and balance sheet lines. Identify any change greater than 10% or PKR 5M that requires an explanation before testing begins."*

**Step 2 — Calculate materiality.** Ask: *"Calculate planning materiality for this entity using three benchmarks: (a) 5% of pre-tax profit; (b) 1% of revenue; (c) 1% of total assets. Which benchmark is most appropriate and why? Set performance materiality at 75% of planning materiality. Set a clearly trivial threshold at 5% of planning materiality."*

**Step 3 — Identify significant accounts.** Ask: *"Based on the financial statements, identify the accounts that are both quantitatively significant (balance or transactions greater than performance materiality) and qualitatively significant (subject to management judgment or estimation). These are the accounts that require substantive audit procedures."*

**Step 4 — Produce the audit plan.** Ask: *"Produce an audit planning memorandum at /working-papers/audit-plan.docx: overall audit strategy (controls reliance vs. purely substantive), significant accounts requiring detailed testing, identified significant risks (ISA 315), assessment of fraud risk (ISA 240), audit procedures for each significant account, staffing plan with seniority levels and estimated hours."*

**Session 2 — Audit Fieldwork (25 minutes)**

**Step 5 — Revenue testing.** Run the revenue audit procedures from Exercise 15. Apply them to the specific revenue lines in the Exercise 9 financial statements.

**Step 6 — Property, plant and equipment testing.** Ask: *"Produce the audit procedures for property, plant and equipment. Test the additions schedule (agree to invoices), test the disposals (confirm gain/loss calculation), re-perform the depreciation calculation for a sample of assets (verify rates, opening NBV, and calculation), and agree the closing net book value to the trial balance."*

**Step 7 — Document the results.** Ask: *"For each area tested, produce the audit conclusion working paper: the procedure performed, the sample selected, the results, any exceptions identified, and the auditor's conclusion on whether the balance is fairly stated."*

**Session 3 — Audit Completion (25 minutes)**

**Step 8 — Evaluate misstatements.** Ask: *"Compile the schedule of identified misstatements from all audit areas. Classify each as: known misstatement (specific amount), or likely misstatement (estimated). Determine whether the aggregate of all misstatements — individually and in combination — is material to the financial statements."*

**Step 9 — Draft the management letter.** Ask: *"Based on the audit findings, draft a management letter at /outputs/management-letter.docx identifying: (a) any internal control weaknesses identified during the audit; (b) recommendations for improvement; (c) any other observations of significance to management. Use the 5-C format from Exercise 17."*

**Step 10 — Draft the audit opinion.** Ask: *"Draft the Independent Auditor's Report for these financial statements following the ISA 700 format. Include: the basis of opinion (IFRS and ISAs), key audit matter (revenue recognition), management's responsibilities, auditor's responsibilities, and the audit opinion. Assume the financial statements give a true and fair view with no material misstatements."*

**Key learning:** The audit opinion in Step 10 is the most legally significant document a CA/CPA signs in professional practice. No AI agent writes the audit opinion — the CA/CPA forms it. The agent produces the draft language following the prescribed format. The professional judgment is in Step 8: deciding whether identified misstatements are material, and whether their aggregate effect is such that the accounts are no longer true and fair. This is the judgment for which the CA/CPA holds professional liability. Every other step in this exercise exists to support and inform that judgment.

**Target time:** 75 minutes (across three sessions).

---

### Exercise 24: Building the Full Plugin Stack — AI-Augmented Practice Deployment

**Domain:** Cross-domain
**What you need:** Cowork (Team or Enterprise), all plugins, a real or representative client base. 90 minutes.
**This is the final capstone exercise for Chapter 19.**

This exercise builds the complete AI-augmented CA/CPA practice: all five domain extensions deployed as SKILL.md files, all plugins installed and tested, all recurring workflows scheduled, and a client-ready explanation of how the practice operates.

**Step 1 — Plugin installation and verification.** Install and verify all plugins:
```bash
# Verify installations
claude plugin list

# Expected output:
finance@knowledge-work-plugins          ✓ installed
financial-analysis@financial-services-plugins  ✓ installed
equity-research@financial-services-plugins     ✓ installed
private-equity@financial-services-plugins      ✓ installed
idfa-financial-architect                        ✓ installed  (from Chapter 18)
```
Run a test command for each plugin and confirm it returns an output. Document any that fail to activate.

**Step 2 — Build the practice-wide SKILL.md library.** Using the extension frameworks from Part Three of this chapter, produce all five SKILL.md files:

```
/skills/
  pakistan-tax-rules.md           — Extension 1 (your jurisdiction)
  chart-of-accounts.md            — Extension 2 (your COA)
  audit-methodology.md            — Extension 3 (your firm's standards)
  client-alpha.md                 — Extension 4 (one specific client)
  compliance-calendar.md          — Extension 5 (your obligation inventory)
```

For each SKILL.md, ask Claude to review it: *"Review this SKILL.md for [extension]. What are the three situations where this SKILL.md would cause the agent to produce a wrong answer? What additional instructions would prevent each error?"*

Revise each SKILL.md based on the review.

**Step 3 — Set up the full schedule of recurring tasks.** Configure all recurring Cowork tasks:

```
Monthly tasks:
/schedule month-end-close        — 1st business day of each month, 7:00 AM
/schedule board-pack-build       — 10th of each month, 6:00 AM
/schedule management-commentary  — 11th of each month, 8:00 AM (after board pack)

Weekly tasks:
/schedule compliance-monitor     — Every Monday, 7:00 AM
/schedule fraud-detection        — Every Monday, 8:00 AM
/schedule cash-flow-update       — Every Monday, 7:30 AM

Quarterly tasks:
/schedule risk-register-update   — 1st Monday of each quarter, 8:00 AM
/schedule audit-committee-report — 2nd Monday of each quarter, 9:00 AM
```

Confirm each scheduled task by running it once manually and verifying the output.

**Step 4 — Test the full workflow integration.** Run the following sequence as a test of the complete stack:

1. Place a new trial balance in `/inputs/`
2. Run `/reconciliation bank` and `/reconciliation debtors`
3. Run `/income-statement monthly`
4. Run `/variance-analysis monthly`
5. Run: *"Build the board pack from the management accounts"*
6. Confirm the Excel and PowerPoint are both produced correctly and saved in `/outputs/`

Total elapsed time for this sequence should be under 10 minutes. If it is not, identify the bottleneck and resolve it before proceeding.

**Step 5 — Write the AI practice capabilities statement.** Ask: *"Draft a one-page capabilities statement for clients that explains how this practice uses AI. The statement should: (a) describe the specific workflows that AI handles; (b) explain what professional judgment the CA/CPA retains; (c) explain the quality assurance process — how every AI output is reviewed before being delivered to a client; (d) explain the data security and confidentiality arrangements; (e) explain how AI augments the CA/CPA's professional advice rather than replacing it. Write in plain English, not technical language. Tone: confident and professional, not defensive."*

**Step 6 — Perform a parallel run quality check.** For one complete month-end close, run the AI workflow AND the manual workflow. Compare every line item in the AI output against the manually prepared output. Document any differences. For each difference: is it an AI error, a manual error, or a legitimate judgment difference? Revise the relevant SKILL.md to prevent the AI error from recurring.

**Step 7 — Produce the AI deployment documentation.** Ask: *"Produce an AI deployment documentation pack at /outputs/ai-practice-documentation.docx: (1) Plugin stack — what is installed, what each plugin does, how to update; (2) SKILL.md library — list of all skills, their trigger conditions, and when they were last reviewed; (3) Scheduled tasks — full list with trigger conditions, inputs required, outputs produced, and exception handling; (4) Quality review procedures — who reviews what, by when, before delivery to clients; (5) Error reporting — how AI errors are documented, reported, and used to improve SKILL.md files."*

**Step 8 — The key professional question.** Finally, ask yourself — not Claude: *"Of all the work I did this month, what was the work that only a CA/CPA could do? Not what only a human could do — what specifically required my professional qualification, my judgment, and my liability?"*

Write the answer. It defines your value proposition in an AI-augmented practice. Keep it. Revisit it in six months. If the answer has not changed, the SKILL.md files are working correctly. If more of your work is now in that category, you are practising at the right level.

**Key learning:** This exercise does not have a single key learning. It has a question: what is the CA/CPA's professional value in a world where AI handles execution? The answer is not a fixed list — it evolves as AI capabilities develop. The professional who can articulate a clear, specific, honest answer to this question, and who builds their practice around it, will remain indispensable. The professional who cannot articulate the answer is at risk of being the one who taught the AI their job without noticing.

**Target time:** 90 minutes.

---

> **Chapter 19 Exercise Map**
>
> | Exercise | Domain | Plugin Used | Time |
> |----------|--------|-------------|------|
> | 1 | Accounting | knowledge-work-plugins/finance | 35 min |
> | 2 | Tax | knowledge-work-plugins/finance | 25 min |
> | 3 | Assurance | — | 30 min |
> | 4 | Management Accounting | knowledge-work-plugins/finance | 30 min |
> | 5 | GRC | — | 25 min |
> | 6 | Accounting | knowledge-work-plugins/finance | 45 min |
> | 7 | All | — | 35 min |
> | **8** | **Accounting** | **knowledge-work-plugins/finance** | **50 min** |
> | **9** | **Accounting** | **knowledge-work-plugins/finance** | **60 min** |
> | **10** | **Accounting** | **knowledge-work-plugins/finance** | **40 min** |
> | **11** | **Accounting** | **knowledge-work-plugins/finance** | **55 min** |
> | **12** | **Tax** | **knowledge-work-plugins/finance** | **45 min** |
> | **13** | **Tax** | **financial-services-plugins** | **60 min** |
> | **14** | **Tax** | **financial-services-plugins** | **45 min** |
> | **15** | **Assurance** | **knowledge-work-plugins/finance** | **50 min** |
> | **16** | **Assurance** | **knowledge-work-plugins/finance** | **45 min** |
> | **17** | **Assurance** | **knowledge-work-plugins/finance** | **40 min** |
> | **18** | **Management Accounting** | **knowledge-work-plugins/finance** | **50 min** |
> | **19** | **Management Accounting** | **knowledge-work-plugins/finance** | **55 min** |
> | **20** | **GRC** | **knowledge-work-plugins/finance** | **45 min** |
> | **21** | **GRC** | **knowledge-work-plugins/finance** | **40 min** |
> | **22** | **Cross-domain** | **All plugins** | **60 min** |
> | **23** | **Cross-domain** | **All plugins** | **75 min** |
> | **24** | **Cross-domain** | **All plugins** | **90 min** |
> | Final | All | All | 60 min |
>
> **Exercises 8–24 are the Extensive Cowork and Plugin Exercises in Part Four. Total additional practice time: approximately 17 hours across all exercises.**

## Chapter Summary

This chapter examined AI transformation across all five CA/CPA practice domains, ranked by the pace and depth of impact: Accounting and Financial Reporting (most impacted, with autonomous reporting agents already in early production), Tax and Non-Assurance Advisory (compliance work highly automatable, advisory work more resilient), Assurance Services (transaction analysis automated, audit judgment not yet), Management Accounting and Financial Management (analytical work automatable, strategic interpretation more resilient), and Governance, Risk and Compliance Advisory (monitoring automatable, advisory judgment remains human).

The pattern across all five domains is consistent: **the work being automated is the execution of rules against data**. The work remaining with human professionals is the application of judgment where the rules are ambiguous, the data is incomplete, the stakes are high, or the client relationship requires a human. The CA/CPA profession is not disappearing — it is being restructured toward the judgment layer and away from the execution layer.

Anthropic Cowork addresses this restructuring through two complementary mechanisms. The **finance plugin stack** — knowledge-work-plugins/finance for corporate accounting workflows and financial-services-plugins for investment-facing practice — provides domain-specific slash commands (`/journal-entry`, `/reconciliation`, `/variance-analysis`, `/sox-testing`, `/income-statement`) that automate the mechanical execution of core CA/CPA workflows. The **orchestration architecture** — Cowork's ability to work across local files, coordinate sub-agents in parallel, execute scheduled tasks, and move analysis across Excel and PowerPoint — provides the infrastructure for genuinely autonomous CA/CPA workflows that run without constant human initiation.

The five domain extensions — jurisdiction-specific tax rules, chart of accounts encoding, audit methodology standards, client entity knowledge, and regulatory compliance calendar — convert the generic plugin capability into a CA/CPA agent calibrated to your specific practice, your jurisdiction's requirements, and your clients' circumstances. These extensions are built using the Knowledge Extraction Method from Chapter 16 and the SKILL.md format from Chapter 18, and they are the primary source of competitive advantage in an AI-augmented CA/CPA practice.

**Part Four** added seventeen extensive Cowork and plugin exercises (Exercises 8–24) covering all five practice domains in depth: autonomous bookkeeping from source documents (Exercise 8), full IFRS financial statements with disclosure pack (Exercise 9), scheduled month-end close setup (Exercise 10), multi-entity consolidation with intercompany elimination (Exercise 11), Pakistan corporate tax computation (Exercise 12), M&A financial due diligence with `/dcf` and `/comps` (Exercise 13), restructuring scenario modelling with `/lbo` (Exercise 14), full external audit programme with `/sox-testing` (Exercise 15), continuous fraud detection monitoring (Exercise 16), internal audit report from working papers (Exercise 17), rolling 13-week cash flow forecast (Exercise 18), full board pack automation across Excel and PowerPoint (Exercise 19), enterprise risk register with scheduled maintenance (Exercise 20), regulatory compliance calendar with automated weekly monitoring (Exercise 21), and three cross-domain capstone exercises covering client onboarding (Exercise 22), the complete annual audit cycle (Exercise 23), and full AI-augmented practice deployment (Exercise 24). Approximately 17 additional hours of hands-on practice time.

The real-world platforms documented across all five domains — SAP Joule, Oracle Agent Studio, Thomson Reuters CoCounsel, PwC Agent OS, KPMG Clara, MindBridge, Pigment, ServiceNow AI Agents — confirm that this transformation is not theoretical. It is underway at enterprise scale. The CA/CPA professional who understands AI's capabilities and limits in their specific domain, who has built the SKILL.md extensions that encode their institutional knowledge, and who has deployed Cowork workflows that free their time for judgment-intensive work, is well positioned for a profession that will demand more professional judgment, not less — because the execution work will no longer obscure it.

---

*Continue to Chapter 20: Legal and Compliance Domain Agents →*